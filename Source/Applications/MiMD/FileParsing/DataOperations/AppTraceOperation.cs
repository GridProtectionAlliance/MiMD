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
using System.Web;

namespace MiMD.FileParsing.DataOperations
{
    public class AppTraceOperation : IDataOperation
    {
        private class AppTraceRecord
        {
            public DateTime Time { get; set; }
            public string Description { get; set; }
            public string Line { get; set; }
        }


        public void Execute(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.AppTrace) return;

            using(AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                // get metadata for file
                FileInfo fi = new FileInfo(meterDataSet.FilePath);

                // read lines from file
                string[] data = File.ReadAllLines(meterDataSet.FilePath);

                // instantiate records object
                List<AppTraceRecord> records = new List<AppTraceRecord>();

                // retrieve last change for this file
                AppTraceFileChanges lastChanges = new TableOperations<AppTraceFileChanges>(connection).QueryRecord("LastWriteTime DESC", new RecordRestriction("MeterID = {0} AND FileName = {1}", meterDataSet.Meter.ID, fi.Name));
                
                // if record doesn't exist, use default
                if (lastChanges == null) lastChanges = new AppTraceFileChanges();
                
                // parse each line
                foreach (string line in data)
                {
                    if (line == string.Empty) continue;
                    string[] section = line.Split(new[] { ". " }, StringSplitOptions.RemoveEmptyEntries);
                    AppTraceRecord newRecord = new AppTraceRecord();

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

                    newRecord.Line = line;
                    newRecord.Time = DateTime.ParseExact(results[1], format, CultureInfo.InvariantCulture);
                    newRecord.Description = results[2];
                    records.Add(newRecord);
                }

                // if no records, or if the last record is same or before record in database, stop.  There was probably an error.
                if (!records.Any() || records.Last().Time <= lastChanges.LastWriteTime) return;

                // instantiate new changes object
                AppTraceFileChanges fileChanges = new AppTraceFileChanges();

                // create new record
                fileChanges.MeterID = meterDataSet.Meter.ID;
                fileChanges.FileName = fi.Name;
                fileChanges.FileSize = (int)(fi.Length / 1000);
                fileChanges.LastWriteTime = records.Last().Time;
                fileChanges.Span = (records.Last().Time - records.First().Time).Days;
                fileChanges.NewRecords = records.Where(x => x.Time > lastChanges.LastWriteTime).Count();
                fileChanges.Alarms = records.Where(x => x.Time > lastChanges.LastWriteTime && !x.Line.ToLower().Contains("fault")).Count();
                
                // get html of new changes
                DiffMatchPatch dmp = new DiffMatchPatch();
                List<Diff> diff = dmp.DiffMain("", string.Join("\n", records.Where(x => x.Time > lastChanges.LastWriteTime).Select(x => x.Line)));
                dmp.DiffCleanupSemantic(diff);
                fileChanges.Html = dmp.DiffPrettyHtml(diff);

                // write new record to db
                new TableOperations<AppTraceFileChanges>(connection).AddNewRecord(fileChanges);
            }
        }
    }
}