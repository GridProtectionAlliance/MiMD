//******************************************************************************************************
//  AppStatusOperation.cs - Gbtc
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
//  05/06/2020 - Billy Ernest
//       Generated original version of source code.

//  10/16/202 - Preston Crawford
//       Implemented functionality for configurable rules.         

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
    public class AppStatusOperation : IDataOperation
    {
        public bool Execute(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.AppStatus) return false;

            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                // get metadata for file
                FileInfo fi = new FileInfo(meterDataSet.FilePath);
                DateTime lastWriteTime = TimeZoneInfo.ConvertTimeFromUtc(fi.LastWriteTime.ToUniversalTime(), TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time"));
                // read lines from file
                string[] data = File.ReadAllLines(meterDataSet.FilePath);

                // instantiate records object
                DiagnosticRecord newRecord = new DiagnosticRecord();

                // retrieve last change for this file
                AppStatusFileChanges lastChanges = new TableOperations<AppStatusFileChanges>(connection).QueryRecord("LastWriteTime DESC", new RecordRestriction("MeterID = {0} AND FileName = {1}", meterDataSet.Meter.ID, fi.Name));

                //retrieve rules for this file
                IEnumerable<DiagnosticFileRules> rules = new TableOperations<DiagnosticFileRules>(connection).QueryRecordsWhere("FilePattern = {0}", "AppStatus");

                //Create an empty list of violatedRules
                List<DiagnosticFileRules> violatedRules = new List<DiagnosticFileRules>();

                //Dictionary of all rules grouped by field
                Dictionary<string, List<DiagnosticFileRules>> ruleDictionary = rules.GroupBy(r => r.Field.ToLower()).ToDictionary(g => g.Key, g => g.ToList());

                // if record doesn't exist, use default
                if (lastChanges == null) lastChanges = new AppStatusFileChanges();

                // if lastChanges LastWriteTime equals new LastWriteTime return
                if (lastChanges.LastWriteTime.ToString("MM/dd/yyyy HH:mm:ss") == lastWriteTime.ToString("MM/dd/yyyy HH:mm:ss")) return false;


                if (lastChanges.LastWriteTime > TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time")))
                {
                    newRecord.LastWriteTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time"));
                }

                Dictionary<string, string> evaluatorVariables = new Dictionary<string, string>();

                int alarmCounter = 0;
                newRecord.MeterID = meterDataSet.Meter.ID;
                newRecord.LastWriteTime = lastChanges.LastWriteTime;


                // parse each line
                foreach (string line in data)
                {
                    // if line is empty go to the next line
                    if (line == string.Empty) continue;
                    newRecord.Line = line;
                    string[] section = line.Split(new[] { "=" }, StringSplitOptions.RemoveEmptyEntries);

                    if (section[0].ToLower() == "recorder")
                        evaluatorVariables["version"] = section[1];
                    else if (section[0].ToLower() == "dfr")
                        evaluatorVariables["dfr"] = section[1];
                    else if (section[0].ToLower() == "pc_time")
                    {
                        try
                        {
                            evaluatorVariables["pc_time"] = DateTime.ParseExact(section[1].Trim(), "MM/dd/yyyy-HH:mm:ss", CultureInfo.InvariantCulture).ToString("MM/dd/yyyy-HH:mm:ss", CultureInfo.InvariantCulture);
                        }
                        catch
                        {
                            evaluatorVariables["pc_time"] = DateTime.ParseExact("01/01/1753-00:00:00", "MM/dd/yyyy-HH:mm:ss", CultureInfo.InvariantCulture).ToString("MM/dd/yyyy-HH:mm:ss", CultureInfo.InvariantCulture);
                        }
                    }
                    else if (section[0].ToLower() == "time_mark_source")
                        evaluatorVariables["time_mark_source"] = section[1];
                    else if (section[0].ToLower() == "time_mark_time")
                    {
                        try
                        {
                            evaluatorVariables["time_mark_time"] = DateTime.ParseExact(section[1].Trim(), "MM/dd/yyyy-HH:mm:ss.ffffff", CultureInfo.InvariantCulture).ToString("MM/dd/yyyy-HH:mm:ss.ffffff", CultureInfo.InvariantCulture);
                        }
                        catch
                        {
                            evaluatorVariables["time_mark_time"] = DateTime.ParseExact("01/01/1753-00:00:00.000000", "MM/dd/yyyy-HH:mm:ss.ffffff", CultureInfo.InvariantCulture).ToString("MM/dd/yyyy-HH:mm:ss.ffffff", CultureInfo.InvariantCulture);
                        }
                    }
                    else if (section[0].ToLower() == "data_drive")
                    {
                        try
                        {
                            string[] values = section[1].Replace("GB", "").Split('/');
                            evaluatorVariables["data_drive"] = (double.Parse(values[0]) / double.Parse(values[1])).ToString();
                        }
                        catch
                        {
                            evaluatorVariables["data_drive"] = "0";
                        }
                    }
                    else if (section[0].ToLower() == "dsp_board")
                        evaluatorVariables["dsp_board"] = section[1];
                    else if (section[0].ToLower() == "dsp_revision")
                        evaluatorVariables["dsp_revision"] = section[1];
                    else if (section[0].ToLower().Contains("packet"))
                        evaluatorVariables["packet"] = section[1];
                    else if (section[0].ToLower().Contains("recovery"))
                        evaluatorVariables["recovery"] = section[1];
                    else if (section[0].ToLower() == "(>65c,c)")
                        evaluatorVariables["board_temp"] = section[1];
                    else if (section[0].ToLower() == "speedfan")
                        evaluatorVariables["speedfan"] = section[1].Replace("\"", "").Replace(" ", "");
                    else if (section[0].ToLower() == "clock")
                        evaluatorVariables["clock"] = section[1];

                    if (ruleDictionary.ContainsKey(section[0].ToLower()))
                    {
                        foreach (var rule in ruleDictionary[section[0].ToLower()])
                        {
                            Regex regexexp = new Regex(rule.RegexPattern);
                            Match match = regexexp.Match(section[1].ToLower());

                            bool sql = false;

                            if (!string.IsNullOrEmpty(rule.SQLQuery))
                            {
                                try
                                {
                                    (string query, object[] parameters) = Evaluator.ParseQuery(rule, newRecord, evaluatorVariables);
                                    sql = connection.ExecuteScalar<bool>(query, parameters);
                                }
                                catch { } // if exception probably a bad rule..
                            }

                            bool regexCondition = match.Success && rule.ReverseRule || !match.Success && !rule.ReverseRule;

                            if (regexCondition)
                            {
                                alarmCounter++;
                                newRecord.Line += Environment.NewLine + rule.Text;
                                violatedRules.Add(rule);
                            }
                            else if (sql)
                            {
                                alarmCounter++;
                                newRecord.Line += Environment.NewLine + rule.Text;
                                violatedRules.Add(rule);
                            }

                        }
                    }

                    //Go through the rules where that aren't tied to a specific field.
                    foreach (var rule in rules)
                    {
                        Regex regexexp = new Regex(rule.RegexPattern);
                        Match match = regexexp.Match(line.Trim().ToLower());

                        bool sql = false;
                        // make sure rule applies to all field and hasnt already been violated once
                   
                        if (string.IsNullOrEmpty(rule.Field.Trim()) && !violatedRules.Any(violatedrule => violatedrule.ID == rule.ID))
                        {
                            if (!string.IsNullOrEmpty(rule.SQLQuery))
                            {
                                try
                                {
                                    (string query, object[] parameters) = Evaluator.ParseQuery(rule, newRecord, evaluatorVariables);
                                    sql = connection.ExecuteScalar<bool>(query, parameters);
                                }
                                catch { } // if exception probably a bad rule..
                            }

                            bool regexCondition = match.Success && rule.ReverseRule || !match.Success && !rule.ReverseRule;

                            //make sure the regexpattern isn't empty before triggering an alarm
                            if (regexCondition && !string.IsNullOrEmpty(rule.RegexPattern.Trim()))
                            {
                                alarmCounter++;
                                newRecord.Line += Environment.NewLine + rule.Text;
                                violatedRules.Add(rule);
                            }
                            else if (sql)
                            {
                                alarmCounter++;
                                newRecord.Line += Environment.NewLine + rule.Text;
                                violatedRules.Add(rule);
                            }

                        }
                    }

                }

                //Create AppStatusFileChanges Record from DiagnosticRecord
                AppStatusFileChanges record = new AppStatusFileChanges();


                record.MeterID = meterDataSet.Meter.ID;
                record.FileName = fi.Name;
                record.FileSize = (int)(fi.Length / 1000);
                record.LastWriteTime = lastWriteTime;
                record.Text = meterDataSet.Text;
                record.Alarms = alarmCounter;
                record.Version = evaluatorVariables.TryGetValue("recorder", out string version) ? version : "";
                record.DFR = evaluatorVariables.TryGetValue("dfr", out string dfr) ? dfr : "";
                record.PCTime = evaluatorVariables.TryGetValue("pc_time", out string pctime) ? DateTime.ParseExact(pctime.Trim(), "MM/dd/yyyy-HH:mm:ss", CultureInfo.InvariantCulture) : DateTime.MinValue;
                record.TimeMarkSource = evaluatorVariables.TryGetValue("time_mark_source", out string timemarksource) ? timemarksource : "";
                record.TimeMarkTime = evaluatorVariables.TryGetValue("time_mark_time", out string timemarktime) ? DateTime.ParseExact(timemarktime.Trim(), "MM/dd/yyyy-HH:mm:ss.ffffff", CultureInfo.InvariantCulture) : DateTime.MinValue;
                record.DataDriveUsage = evaluatorVariables.TryGetValue("data_drive", out string datadrive) ? Double.Parse(datadrive) : 0;
                record.DSPBoard = evaluatorVariables.TryGetValue("dsp_board", out string dspBoardValue) ? dspBoardValue : "";
                record.DSPRevision = evaluatorVariables.TryGetValue("dsp_revision", out string dspRevisionValue) ? dspRevisionValue : "";
                record.Packet = evaluatorVariables.TryGetValue("packet", out string packetValue) ? packetValue : "";
                record.Recovery = evaluatorVariables.TryGetValue("recovery", out string recoveryValue) ? recoveryValue : "";
                record.BoardTemp = evaluatorVariables.TryGetValue("board_temp", out string boardTempValue) ? boardTempValue : "";
                record.SpeedFan = evaluatorVariables.TryGetValue("speedfan", out string speedFanValue) ? speedFanValue : "";

                //Order violated rules by severity for Alarm Text placement
                violatedRules = violatedRules.OrderByDescending(rule => rule.Severity).ToList();

                // Add a new line if its not empty and doesnt already have a newline char
                if (!string.IsNullOrEmpty(record.Text) && !record.Text.EndsWith(Environment.NewLine) && violatedRules.Count > 0)
                    record.Text += Environment.NewLine;

                if (violatedRules.Count > 0)
                    record.Text += string.Join(Environment.NewLine, violatedRules.Select(rule => rule.Text));

                // get html of new changes
                DiffMatchPatch dmp = new DiffMatchPatch();
                List<Diff> diff = dmp.DiffMain(lastChanges.Text ?? "", record.Text);
                dmp.DiffCleanupSemantic(diff);
                record.Html = dmp.DiffPrettyHtml(diff).Replace("&para;", "");

                // write new record to db
                meterDataSet.DiagnosticAlarms = record.Alarms;
                new TableOperations<AppStatusFileChanges>(connection).AddNewRecord(record);
                return true;
            }
        }
    }
}