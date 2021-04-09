//******************************************************************************************************
//  ConfigOperation.cs - Gbtc
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
//  04/30/2020 - Billy Ernest
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
using System.IO;
using System.Linq;
using System.Web;

namespace MiMD.FileParsing.DataOperations
{
    public class ConfigOperation : IDataOperation
    {
        public bool Execute(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.Config) return false;

            using(AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                FileInfo fi = new FileInfo(meterDataSet.FilePath);

                // see if there is already a record that matches this file
                ConfigFileChanges configFileChanges = new TableOperations<ConfigFileChanges>(connection).QueryRecordWhere("MeterID = {0} AND FileName = {1} AND LastWriteTime = {2}", meterDataSet.Meter.ID, fi.Name, fi.LastWriteTime);
                
                // if a record already exists for this file skip it.  There was probably an error.
                if (configFileChanges != null) return false;
                configFileChanges = new ConfigFileChanges();

                // get the previous record for this file
                ConfigFileChanges lastChanges = new TableOperations<ConfigFileChanges>(connection).QueryRecord("LastWriteTime DESC", new RecordRestriction("MeterID = {0} AND FileName = {1} AND LastWriteTime < {2}", meterDataSet.Meter.ID, fi.Name, fi.LastWriteTime));

                // if there were no previous records for this file, just diff it against itself because we need an intial record.
                if (lastChanges == null)
                {
                    lastChanges = new ConfigFileChanges();
                    lastChanges.Text = meterDataSet.Text;
                }

                // create new record
                configFileChanges.MeterID = meterDataSet.Meter.ID;
                configFileChanges.FileName = fi.Name;
                configFileChanges.LastWriteTime = fi.LastWriteTime;
                configFileChanges.Text = meterDataSet.Text;

                // make diffs
                DiffMatchPatch dmp = new DiffMatchPatch();
                List<Diff> diff = dmp.DiffMain( lastChanges.Text, configFileChanges.Text);
                List<Patch> patch = dmp.PatchMake(lastChanges.Text, configFileChanges.Text);

                if (patch.Count == 0) return false;

                dmp.DiffCleanupSemantic(diff);
                configFileChanges.Html = dmp.DiffPrettyHtml(diff).Replace("&para;", "");
                configFileChanges.Changes = patch.Count;

                // write new record to db
                new TableOperations<ConfigFileChanges>(connection).AddNewRecord(configFileChanges);

                return true;
            }
        }
    }
}