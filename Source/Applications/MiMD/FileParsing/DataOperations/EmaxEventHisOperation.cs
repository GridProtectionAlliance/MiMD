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
using System.Web;

namespace MiMD.FileParsing.DataOperations
{
    public class EmaxEventHisOperation : IDataOperation
    {
        private class EMAXEventHisRecord
        {
            public DateTime Time { get; set; }
            public string Version { get; set; }
            public string Type { get; set; }
            public string Description { get; set; }
            public string Line { get; set; }
        }

        public bool Execute(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.EmaxEventHis) return false;

            using(AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                // get metadata for file
                FileInfo fi = new FileInfo(meterDataSet.FilePath);

                // read lines from file
                string[] data = File.ReadAllLines(meterDataSet.FilePath);

                // instantiate records object
                List<EMAXEventHisRecord> records = new List<EMAXEventHisRecord>();

                // retrieve last change for this file
                EmaxDiagnosticFileChanges lastChanges = new TableOperations<EmaxDiagnosticFileChanges>(connection).QueryRecord("LastWriteTime DESC", new RecordRestriction("MeterID = {0} AND FileName = {1}", meterDataSet.Meter.ID, fi.Name));
                
                // if record doesn't exist, use default
                if (lastChanges == null) lastChanges = new EmaxDiagnosticFileChanges();
                
                // parse each line
                foreach (string line in data)
                {
                    if (line == string.Empty) continue;
                    string[] section = line.Split(new[] { ". " }, StringSplitOptions.RemoveEmptyEntries);
                    EMAXEventHisRecord newRecord = new EMAXEventHisRecord();

                    // date has 2 spaces if date is a single digit to keep specific column width
                    string format = "ddd MMM d HH:mm:ss yyyy";
                    if (section[0].Contains("  "))
                        format = "ddd MMM  d HH:mm:ss yyyy";

                    newRecord.Line = line;
                    newRecord.Time = DateTime.ParseExact(section[0], format, CultureInfo.InvariantCulture);
                    newRecord.Version = section[1];
                    records.Add(newRecord);
                }


                // if no records, or if the last record is same or before record in database, stop.  There was probably an error.
                if (!records.Any() || records.Last().Time <= lastChanges.LastWriteTime) return false;

                List<EMAXEventHisRecord> newRecords = records.Where(x => x.Time > lastChanges.LastWriteTime).ToList();
                // instantiate new changes object
                EmaxDiagnosticFileChanges fileChanges = new EmaxDiagnosticFileChanges();

                // create new record
                fileChanges.MeterID = meterDataSet.Meter.ID;
                fileChanges.FileName = fi.Name;
                fileChanges.FileSize = (int)(fi.Length / 1000);
                fileChanges.LastWriteTime = newRecords.Last().Time;
                fileChanges.Span = (newRecords.Last().Time - newRecords.First().Time).Days;
                fileChanges.NewRecords = newRecords.Count();
                fileChanges.Alarms = 0;

                for(int i = 0; i < newRecords.Count; ++i) {
                    if (newRecords[i].Line.ToLower().Contains("operation alarm")) { }
                    else if (newRecords[i].Line.ToLower().Contains("error")) fileChanges.Alarms++; 
                    else if (newRecords[i].Line.ToLower().Contains("alarm"))
                    {
                        if (newRecords[i].Line.ToLower().Contains("time sync failed")) {
                            if (newRecords.Where(x => x.Line.ToLower().Contains("system started") && newRecords[i].Time.Subtract(x.Time).TotalSeconds <= 60).Any()) { }
                            else fileChanges.Alarms++;
                        }
                        else fileChanges.Alarms++;
                    }
                }
                

                // get html of new changes
                DiffMatchPatch dmp = new DiffMatchPatch();
                List<Diff> diff = dmp.DiffMain("", string.Join("\n", records.Where(x => x.Time > lastChanges.LastWriteTime).Select(x => x.Line)));
                dmp.DiffCleanupSemantic(diff);
                fileChanges.Html = dmp.DiffPrettyHtml(diff).Replace("&para;", "");

                // write new record to db
                new TableOperations<EmaxDiagnosticFileChanges>(connection).AddNewRecord(fileChanges);
                return true;
            }
        }
    }
}