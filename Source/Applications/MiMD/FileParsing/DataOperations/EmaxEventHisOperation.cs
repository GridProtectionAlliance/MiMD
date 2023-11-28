//******************************************************************************************************
//  EmaxEventHisOperation.cs - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  05/05/2020 - Billy Ernest
//       Generated original version of source code.
//
//  10/16/202 - Preston Crawford
//       Implemented functionality for configurable rules.  

//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Text;
using log4net;
using MiMD.DataSets;
using SystemCenter.Model;
using MiMD.Model.System;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace MiMD.FileParsing.DataOperations
{
    public class EmaxEventHisOperation : IDataOperation
    {
        private static readonly ILog Log = LogManager.GetLogger(typeof(EmaxEventHisOperation));

        public bool Execute(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.EmaxEventHis) return false;

            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                // get metadata for file
                FileInfo fi = new FileInfo(meterDataSet.FilePath);

                // read lines from file
                string[] data = File.ReadAllLines(meterDataSet.FilePath);

                // instantiate records object
                List<DiagnosticRecord> records = new List<DiagnosticRecord>();

                // retrieve last change for this file
                EmaxDiagnosticFileChanges lastChanges = new TableOperations<EmaxDiagnosticFileChanges>(connection).QueryRecord("LastWriteTime DESC", new RecordRestriction("MeterID = {0} AND FileName = {1}", meterDataSet.Meter.ID, fi.Name));

                //retrieve rules for this file
                IEnumerable<DiagnosticFileRules> rules = new TableOperations<DiagnosticFileRules>(connection).QueryRecordsWhere("FilePattern = {0}", "EmaxEventHis");

                // if record doesn't exist, use default
                if (lastChanges == null) lastChanges = new EmaxDiagnosticFileChanges();

                Dictionary<string, string> evaluatorVariables = new Dictionary<string, string>();
                int alarmCounter = 0;

                EmaxDiagnosticFileChanges newRecord = new EmaxDiagnosticFileChanges
                {
                    MeterID = meterDataSet.Meter.ID,
                    LastWriteTime = lastChanges.LastWriteTime
                };

                // parse each line
                foreach (string line in data)
                {
                    if (line == string.Empty) continue;

                    string[] section = line.Split(new[] { ". " }, StringSplitOptions.RemoveEmptyEntries);

                    // date has 2 spaces if date is a single digit to keep specific column width
                    string format = "ddd MMM d HH:mm:ss yyyy";
                    if (section[0].Contains("  "))
                        format = "ddd MMM  d HH:mm:ss yyyy";

                    DiagnosticRecord curRecord = new DiagnosticRecord
                    {
                        Line = line,
                        Time = DateTime.UtcNow
                    };

                    try
                    {
                        curRecord.Time = DateTime.ParseExact(section[0], format, CultureInfo.InvariantCulture);
                    }
                    catch (Exception ex)
                    {
                        curRecord.Time = DateTime.ParseExact("Mon Jan 01 00:00:00 1753", format, CultureInfo.InvariantCulture);
                    }

                    if (curRecord.Time > TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time")))
                    {
                        curRecord.Time = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time"));
                    }

                    if (line.ToLower().Contains("system started"))
                    {
                        evaluatorVariables["systemstarted"] = "true";
                        evaluatorVariables["systemstartedtime"] = curRecord.Time.ToString();
                    }

                    evaluatorVariables["version"] = section[1];


                    //only eval/trigger alarms that havent been triggered yet
                    if (curRecord.Time > lastChanges.LastWriteTime)
                    {
                        //Check for violated rules
                        foreach (var rule in rules)
                        {
                            Regex regexexp = new Regex(rule.RegexPattern);
                            Match match = regexexp.Match(line.Trim().ToLower());

                            bool sql = false;

                            if (!string.IsNullOrEmpty(rule.SQLQuery))
                            {
                                try
                                {
                                    (string query, object[] parameters) = Evaluator.ParseQuery(rule, newRecord, evaluatorVariables);
                                    sql = connection.ExecuteScalar<bool>(query, parameters);
                                }
                                catch (Exception ex)
                                { 
                                    Log.Error(ex.Message);
                                }
                            }

                            bool regexCondition = (match.Success && rule.ReverseRule) || (!match.Success && !rule.ReverseRule);

                            if (regexCondition)
                            {
                                alarmCounter++;
                                curRecord.Line += Environment.NewLine + rule.Text;
                                curRecord.AlarmSeverity = rule.Severity;
                            }
                            else if (sql)
                            {
                                alarmCounter++;
                                curRecord.Line += Environment.NewLine + rule.Text;
                                curRecord.AlarmSeverity = rule.Severity;
                            }
                            AdditionalFieldValue additionalFieldValue = new TableOperations<AdditionalFieldValue>(connection).QueryRecordWhere("AdditionalFieldID = {0}", rule.AdditionalFieldID);
                            if (additionalFieldValue != null)
                            {
                                additionalFieldValue.Value = alarmCounter > 0 ? "1" : "0";
                                new TableOperations<AdditionalFieldValue>(connection).UpdateRecord(additionalFieldValue);
                            }
                        }
                    }
                    records.Add(curRecord);
                }


                // if no records, or if the last record is same or before record in database, stop.  There was probably an error.
                if (!records.Any() || records.Last().Time <= lastChanges.LastWriteTime) return false;

                List<DiagnosticRecord> newRecords = records.Where(x => x.Time > lastChanges.LastWriteTime).ToList();
                // instantiate new changes object
                EmaxDiagnosticFileChanges fileChanges = new EmaxDiagnosticFileChanges
                {
                    // create new record
                    MeterID = meterDataSet.Meter.ID,
                    FileName = fi.Name,
                    FileSize = (int)(fi.Length / 1000),
                    LastWriteTime = newRecords.Last().Time,
                    Span = (newRecords.Last().Time - newRecords.First().Time).Days,
                    NewRecords = newRecords.Count(),
                    Alarms = alarmCounter
                };

                // get html of new changes
                DiffMatchPatch dmp = new DiffMatchPatch();
                List<string> orderedLines = newRecords.OrderByDescending(rec => rec.AlarmSeverity).Select(x => x.Line).ToList();
                List<Diff> diff = dmp.DiffMain("", string.Join("\n", orderedLines));
                dmp.DiffCleanupSemantic(diff);
                fileChanges.Html = dmp.DiffPrettyHtml(diff).Replace("&para;", "");

                // write new record to db
                meterDataSet.DiagnosticAlarms = fileChanges.Alarms;

                new TableOperations<EmaxDiagnosticFileChanges>(connection).AddNewRecord(fileChanges);
                return true;
            }
        }
    }
}