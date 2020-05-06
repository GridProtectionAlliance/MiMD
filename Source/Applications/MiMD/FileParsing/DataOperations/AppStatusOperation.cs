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
    public class AppStatusOperation : IDataOperation
    {

        public void Execute(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.AppStatus) return;

            using(AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                // get metadata for file
                FileInfo fi = new FileInfo(meterDataSet.FilePath);

                // read lines from file
                string[] data = File.ReadAllLines(meterDataSet.FilePath);

                // instantiate records object
                AppStatusFileChanges newRecord = new AppStatusFileChanges();

                // retrieve last change for this file
                AppStatusFileChanges lastChanges = new TableOperations<AppStatusFileChanges>(connection).QueryRecord("LastWriteTime DESC", new RecordRestriction("MeterID = {0} AND FileName = {1}", meterDataSet.Meter.ID, fi.Name));

                // if record doesn't exist, use default
                if (lastChanges == null) lastChanges = new AppStatusFileChanges();

                // if lastChanges LastWriteTime equals new LastWriteTime return
                if (lastChanges.LastWriteTime == fi.LastWriteTime) return;

                newRecord.MeterID = meterDataSet.Meter.ID;
                newRecord.FileName = fi.Name;
                newRecord.LastWriteTime = fi.LastWriteTime;
                newRecord.FileSize = (int)(fi.Length / 1000);
                newRecord.Text = meterDataSet.Text;

                // parse each line
                foreach (string line in data)
                {
                    // if line is empty go to the next line
                    if (line == string.Empty) continue;

                    string[] section = line.Split(new[] { "=" }, StringSplitOptions.RemoveEmptyEntries);

                    if (section[0].ToLower() == "recorder")
                        newRecord.Version = section[1];
                    else if (section[0].ToLower() == "dfr")
                        newRecord.DFR = section[1];
                    else if (section[0].ToLower() == "pc_time")
                    {
                        try
                        {
                            newRecord.PCTime = DateTime.ParseExact(section[1], "MM/dd/yyyy-HH:mm:ss", CultureInfo.InvariantCulture);
                        }
                        catch (Exception ex) {
                            newRecord.PCTime = DateTime.MinValue;
                            newRecord.Alarms += "Incorrect date format for PC_Time.";
                        }
                    }
                    else if (section[0].ToLower() == "time_mark_source")
                        newRecord.TimeMarkSource = section[1];
                    else if (section[0].ToLower() == "time_mark_time")
                    {
                        try
                        {
                            newRecord.TimeMarkTime = DateTime.ParseExact(section[1], "MM/dd/yyyy-HH:mm:ss.ffffff", CultureInfo.InvariantCulture);
                        }
                        catch (Exception ex)
                        {
                            newRecord.TimeMarkTime = DateTime.MinValue;
                            newRecord.Alarms += "Incorrect date format for Time_Mark_Time.";
                        }
                    }
                    else if (section[0].ToLower() == "data_drive")
                    {
                        try
                        {
                            string[] values = section[1].Replace("GB", "").Split('/');
                            newRecord.DataDriveUsage = double.Parse(values[0])/double.Parse(values[1]);

                        }
                        catch (Exception ex) {
                            newRecord.DataDriveUsage = 0;
                            newRecord.Alarms += "Incorrect format for Data_Drive.";
                        }
                    }
                    else if (section[0].ToLower() == "dsp_board")
                        newRecord.DSPBoard = section[1];
                    else if (section[0].ToLower() == "dsp_revision")
                        newRecord.DSPRevision = section[1];
                    else if (section[0].ToLower().Contains("packet"))
                        newRecord.Packet = section[1];
                    else if (section[0].ToLower().Contains("recovery"))
                        newRecord.Recovery = section[1];
                    else if (section[0].ToLower() == "(>65c,c)")
                        newRecord.BoardTemp = section[1];
                    else if (section[0].ToLower() == "speedfan")
                        newRecord.SpeedFan = section[1].Replace("\"", "").Replace(" ", "");
                    else if (section[0].ToLower() == "alarms")
                        newRecord.Alarms += section[1];

                }

               
                // get html of new changes
                DiffMatchPatch dmp = new DiffMatchPatch();
                List<Diff> diff = dmp.DiffMain(lastChanges.Text ?? "", newRecord.Text);
                dmp.DiffCleanupSemantic(diff);
                newRecord.Html = dmp.DiffPrettyHtml(diff);

                // write new record to db
                new TableOperations<AppStatusFileChanges>(connection).AddNewRecord(newRecord);
            }
        }
    }
}