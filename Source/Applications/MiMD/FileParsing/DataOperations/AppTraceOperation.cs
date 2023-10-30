//******************************************************************************************************
//  AppTraceOperation.cs - Gbtc
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
//       Implemented functionality for configurable diagnostic rules.  

//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Text;
using MiMD.DataSets;
using MiMD.Model.System;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace MiMD.FileParsing.DataOperations
{
    public class AppTraceOperation : IDataOperation
    {
        public bool Execute(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.AppTrace) return false;

            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                // get metadata for file
                FileInfo fi = new FileInfo(meterDataSet.FilePath);

                // read lines from file
                string[] data = File.ReadAllLines(meterDataSet.FilePath);

                // instantiate records object
                List<DiagnosticRecord> records = new List<DiagnosticRecord>();

                // retrieve last change for this file
                AppTraceFileChanges lastChanges = new TableOperations<AppTraceFileChanges>(connection).QueryRecord("LastWriteTime DESC", new RecordRestriction("MeterID = {0} AND FileName = {1}", meterDataSet.Meter.ID, fi.Name));

                //retrieve rules for this file
                IEnumerable<DiagnosticFileRules> rules = new TableOperations<DiagnosticFileRules>(connection).QueryRecordsWhere("FilePattern = {0}", "AppTrace");

                // if record doesn't exist, use default
                if (lastChanges == null) lastChanges = new AppTraceFileChanges();

                int alarmCounter = 0;

                Dictionary<string, string> evaluatorVariables = new Dictionary<string, string>();

                // parse each line
                foreach (string line in data)
                {
                    if (line == string.Empty) continue;
                    string[] section = line.Split(new[] { ". " }, StringSplitOptions.RemoveEmptyEntries);

                    // date has 2 spaces if date is a single digit to keep specific column width
                    string regex = @"(\[\d+\/\d+\/\d+\s\d+:\d+:\d+\s[AP]M\])";
                    string[] results = Regex.Split(line, regex);
                    string format = "[M/d/yyyy h:mm:ss tt]";

                    if (results.Length <= 1)
                    {
                        regex = @"(\[\d+\/\d+\/\d+\])";
                        results = Regex.Split(line, regex);
                        format = "[M/d/yyyy]";
                    }

                    DiagnosticRecord newRecord = new DiagnosticRecord
                    {
                        LastWriteTime = lastChanges.LastWriteTime,
                        MeterID = meterDataSet.Meter.ID,
                        Line = line,
                        Time = DateTime.ParseExact(results[1], format, CultureInfo.InvariantCulture)
                    };

                    if (newRecord.Time > TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time")))
                    {
                        newRecord.Time = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time"));
                    }

                    evaluatorVariables["description"] = results[2];

                    //only eval/trigger alarms that havent been triggered yet
                    if (newRecord.Time > lastChanges.LastWriteTime)
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
                                catch { }// if exception probably a bad rule..
                            }

                            bool regexCondition = match.Success && rule.ReverseRule || !match.Success && !rule.ReverseRule;

                            if (regexCondition)
                            {
                                alarmCounter++;
                                newRecord.Line += Environment.NewLine + rule.Text;
                            }
                            else if (sql)
                            {
                                alarmCounter++;
                                newRecord.Line += Environment.NewLine + rule.Text;
                            }

                        }
                    }
                    records.Add(newRecord);
                }

                // if no records, or if the last record is same or before record in database, stop.  There was probably an error.
                if (!records.Any() || records.Last().Time <= lastChanges.LastWriteTime) return false;
                IEnumerable<DiagnosticRecord> newRecords = records.Where(x => x.Time > lastChanges.LastWriteTime);

                // instantiate new changes object
                AppTraceFileChanges fileChanges = new AppTraceFileChanges
                {
                    // create new record
                    MeterID = meterDataSet.Meter.ID,
                    FileName = fi.Name,
                    FileSize = (int)(fi.Length / 1000),
                    LastWriteTime = records.Last().Time,
                    Span = (records.Last().Time - records.First().Time).Days,
                    NewRecords = newRecords.Count(),
                    Alarms = alarmCounter
                };

                if (records.Where(x => x.Line.ToLower().Contains("fault f")).Any())
                    fileChanges.LastFaultTime = records.Where(x => x.Line.ToLower().Contains("fault f")).Last().Time;
                else
                    fileChanges.LastFaultTime = lastChanges.LastFaultTime;

                fileChanges.FaultCount48hr = records.Where(x => x.Line.ToLower().Contains("fault f") && x.Time >= fileChanges.LastWriteTime.AddHours(-48)).Count();

                // get html of new changes
                DiffMatchPatch dmp = new DiffMatchPatch();

                List<string> orderedLines = newRecords.OrderByDescending(rec => rec.AlarmSeverity).Select(x => x.Line).ToList();

                List<Diff> diff = dmp.DiffMain("", string.Join("\n", orderedLines));
                dmp.DiffCleanupSemantic(diff);
                fileChanges.Html = dmp.DiffPrettyHtml(diff).Replace("&para;", "");

                // write new record to db
                meterDataSet.DiagnosticAlarms = fileChanges.Alarms;
                new TableOperations<AppTraceFileChanges>(connection).AddNewRecord(fileChanges);
                return true;
            }
        }
    }
}