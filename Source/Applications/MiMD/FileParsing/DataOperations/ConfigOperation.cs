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
using GSF.IO;
using GSF.Text;
using MiMD.DataSets;
using MiMD.Model.System;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace MiMD.FileParsing.DataOperations
{
    public class ConfigOperation : IDataOperation
    {
        public bool Execute(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.Config) return false;

            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                FileInfo fi = new FileInfo(meterDataSet.FilePath);

                // see if there is already a record that matches this file
                ConfigFileChanges configFileChanges = new TableOperations<ConfigFileChanges>(connection).QueryRecordWhere("MeterID = {0} AND FileName = {1} AND LastWriteTime = {2}", meterDataSet.Meter.ID, fi.Name, fi.LastWriteTime);

                // if a record already exists for this file skip it.  There was probably an error.
                if (configFileChanges != null) return false;
                configFileChanges = new ConfigFileChanges();

                // create new record
                configFileChanges.MeterID = meterDataSet.Meter.ID;
                configFileChanges.FileName = fi.Name;
                configFileChanges.LastWriteTime = fi.LastWriteTime;
                configFileChanges.Text = meterDataSet.Text;

                // get the previous record for this file
                ConfigFileChanges lastChanges = new TableOperations<ConfigFileChanges>(connection).QueryRecord("LastWriteTime DESC", new RecordRestriction("MeterID = {0} AND FileName = {1} AND LastWriteTime < {2}", meterDataSet.Meter.ID, fi.Name, fi.LastWriteTime));

                // if there were no previous records for this file, just diff it against itself because we need an intial record.
                if (lastChanges == null)
                {
                    lastChanges = new ConfigFileChanges();
                    lastChanges.Text = meterDataSet.Text;
                    DiffMatchPatch dmp = new DiffMatchPatch();
                    List<Diff> diff = dmp.DiffMain(lastChanges.Text, configFileChanges.Text);
                    List<Patch> patch = dmp.PatchMake(lastChanges.Text, configFileChanges.Text);

                    dmp.DiffCleanupSemantic(diff);
                    configFileChanges.Html = dmp.DiffPrettyHtml(diff).Replace("&para;", "");
                    configFileChanges.Changes = patch.Count;

                    // write new record to db
                    meterDataSet.ConfigChanges = configFileChanges.Changes;
                }
                else
                {

                    // make diffs
                    DiffMatchPatch dmp = new DiffMatchPatch();
                    List<Diff> diff = dmp.DiffMain(lastChanges.Text, configFileChanges.Text);
                    List<Patch> patch = dmp.PatchMake(lastChanges.Text, configFileChanges.Text);

                    if (patch.Count == 0) return false;

                    dmp.DiffCleanupSemantic(diff);
                    configFileChanges.Html = dmp.DiffPrettyHtml(diff).Replace("&para;", "");
                    configFileChanges.Changes = patch.Count;

                    // write new record to db
                    meterDataSet.ConfigChanges = configFileChanges.Changes;
                }

                // Parsing config file into a dictionary and trim the keys
                Dictionary<string, string> parsedData = ParseConfigFileIntoDictionary(meterDataSet).ToDictionary(kvp => kvp.Key.Trim(), kvp => kvp.Value);

                IEnumerable<ConfigFileRules> rules = new TableOperations<ConfigFileRules>(connection).QueryRecords();

                int invalidCount = 0;

                foreach (ConfigFileRules rule in rules)
                {
                    //If the rule field doesnt exist in the activeConfig continue
                    if (!parsedData.ContainsKey(rule.Field))
                        continue;

                    if(FilePath.IsFilePatternMatch(rule.Pattern, fi.Name, true))
                    {
                        bool result = rule.EvaluateRule(parsedData[rule.Field]);
                        if (!result)
                            invalidCount++;
                    }

                }

                configFileChanges.ValidChange = invalidCount > 0 ? 0 : 1;

                new TableOperations<ConfigFileChanges>(connection).AddNewRecord(configFileChanges);

                return true;
            }
        }


        private Dictionary<string, string> ParseConfigFileIntoDictionary(MeterDataSet meterDataSet)
        {
            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                Model.ComplianceOperation parser = new TableOperations<Model.ComplianceOperation>(connection).QueryRecords("LoadOrder")
                    .FirstOrDefault(reader => FilePath.IsFilePatternMatch(reader.FilePattern, meterDataSet.FilePath, true));

                if (parser == null)
                    throw new InvalidOperationException("No parser found for the given file.");

                ComplianceParserWrapper wrapper;
                try
                {
                    Assembly assembly = Assembly.LoadFrom(parser.AssemblyName);
                    Type type = assembly.GetType(parser.TypeName);
                    wrapper = new ComplianceParserWrapper(parser.ID, type);
                }
                catch (Exception ex)
                {
                    string message = $"Failed to create Compliance File parser of type {parser.TypeName}: {ex.Message}";
                    throw new TypeLoadException(message, ex);
                }

                try
                {
                    return wrapper.DataObject.ParseFields(meterDataSet);
                }
                catch (Exception ex)
                {
                    string message = $"Failed to parse Config File for Compliance Fields {parser.TypeName}: {ex.Message}";
                    throw new TypeLoadException(message, ex);
                }
            }
        }


    }
}