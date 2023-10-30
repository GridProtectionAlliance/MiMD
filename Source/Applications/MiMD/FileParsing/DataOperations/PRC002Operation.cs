//******************************************************************************************************
//  PRC002Operation.cs - Gbtc
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
//  09/03/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.IO;
using MiMD.DataSets;
using MiMD.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;


namespace MiMD.FileParsing.DataOperations
{
    public class PRC002Operation : IDataOperation
    {
        //Start this by Only looking at Config Files and Lines that have =
        public bool Execute(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.Config) return false;

            if (!HasComplianceMeter(meterDataSet)) return false;

            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                ComplianceMeter meter = new TableOperations<ComplianceMeter>(connection).QueryRecordWhere("MeterId = {0}", meterDataSet.Meter.ID);

                //This means we need to activate the meter
                if (!meter.Active)
                {
                    meter.Active = true;
                    new TableOperations<ComplianceMeter>(connection).UpdateRecord(meter);
                }

                // Get appropriate Base Configurations
                IEnumerable<BaseConfig> baseConfigsMeter = new TableOperations<BaseConfig>(connection).QueryRecordsWhere("MeterId = {0}", meter.ID);

                //Filter by Pattern
                baseConfigsMeter = baseConfigsMeter.Where(item => FilePath.IsFilePatternMatch(item.Pattern, meterDataSet.FilePath, true));


                if (baseConfigsMeter.Count() == 0) return true;

                // Pares File using Compliance Operations
                // Instantiates the given data reader and wraps it in a disposable wrapper object.
                Model.ComplianceOperation parser = new TableOperations<Model.ComplianceOperation>(connection).QueryRecords("LoadOrder")
                    .FirstOrDefault(reader => FilePath.IsFilePatternMatch(reader.FilePattern, meterDataSet.FilePath, true));

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


                // Parse ConfigFile into Dictionary of Fields

                Dictionary<string, string> activeConfig = new Dictionary<string, string>();
                try
                {
                    activeConfig = wrapper.DataObject.ParseFields(meterDataSet);
                }
                catch (Exception ex)
                {
                    string message = $"Failed to parse Config File for Compliance Fields {parser.TypeName}: {ex.Message}";
                    throw new TypeLoadException(message, ex);
                }

                // If Meter is not Reviewed just keep updating Base Config
                if (!meter.Reviewed)
                {
                    foreach (BaseConfig baseConfig in baseConfigsMeter)
                        UpdateBaseConfig(baseConfig, activeConfig);
                    return true;
                }

                // Get a Bunch of AlarmStates
                TableOperations<ComplianceState> complianceStateTbl = new TableOperations<ComplianceState>(connection);
                ComplianceState resolved = complianceStateTbl.QueryRecordWhere("Description = 'In Compliance'");
                ComplianceState noCompliance = complianceStateTbl.QueryRecordWhere("Description = 'Compliance Issue'");
                ComplianceState acknowledged = complianceStateTbl.QueryRecordWhere("Description = 'Acknowledged'");
                ComplianceState reviewed = complianceStateTbl.QueryRecordWhere("Description = 'Reviewed'");

                TableOperations<ComplianceRecord> complianceRecordTbl = new TableOperations<ComplianceRecord>(connection);
                TableOperations<ComplianceRecordView> complianceRecordViewTbl = new TableOperations<ComplianceRecordView>(connection);
                TableOperations<ComplianceRecordField> recordFieldTbl = new TableOperations<ComplianceRecordField>(connection);
                TableOperations<ComplianceField> complianceFieldTbl = new TableOperations<ComplianceField>(connection);
                TableOperations<ComplianceAction> complianceActionTbl = new TableOperations<ComplianceAction>(connection);
                TableOperations<ComplianceFieldValue> complianceFieldValueTbl = new TableOperations<ComplianceFieldValue>(connection);
                TableOperations<ComplianceFieldValueView> complianceFieldValueViewTbl = new TableOperations<ComplianceFieldValueView>(connection);

                //Walk through each BaseConfig separately
                foreach (BaseConfig baseConfig in baseConfigsMeter)
                {
                    // Get relevant Compliance Fields
                    List<ComplianceField> baseConfigfields = complianceFieldTbl.QueryRecordsWhere("BaseConfigId = {0}", baseConfig.ID).ToList();
                    if (baseConfigfields.Count() == 0) continue;
                    List<ComplianceField> changingFields = baseConfigfields.Where(fld => {
                        bool eval;
                        ComplianceFieldValueView value = complianceFieldValueViewTbl.QueryRecordWhere("FieldId = {0}", fld.ID);
                        if (!activeConfig.ContainsKey(fld.Name))
                            return false;
                        if (value == null)
                            eval = !fld.Evaluate(activeConfig[fld.Name]);
                        else
                            eval = activeConfig[fld.Name] != value.Value;
                                
                        connection.ExecuteNonQuery("UPDATE [MiMD.ComplianceField] SET [PreVal] = {0} WHERE [ID] = {1}", activeConfig[fld.Name], fld.ID);
                        return eval; 
                    }).ToList();

                    if (changingFields.Count == 0) continue;


                    //Clear so that -1 if Record is resolved
                    IEnumerable<IGrouping<int, ComplianceField>> recordGroups = changingFields.GroupBy(fld =>
                    {
                        ComplianceRecordView record = complianceRecordViewTbl.QueryRecordWhere("BaseConfigId = {0} AND ID IN (SELECT RecordID FROM [MiMD.ComplianceRecordFields] WHERE FieldId = {1}) AND Status IN ({2},{3}, {4})", baseConfig.ID, fld.ID, acknowledged.ID, noCompliance.ID, reviewed.ID);
                        if (record == null) return -1;
                        return record.ID;
                    }, fld => fld);


                    //Count those that exist and change Status
                    meterDataSet.ComplianceIssues += recordGroups.Count();
                    if (recordGroups.Any(g => g.Key == -1))
                        meterDataSet.ComplianceIssues--;


                    // Some Records can not be updated with failing Fields they need to be separate
                    List<ComplianceField> newFields = new List<ComplianceField>();

                    // Work Backwards to get associated Record for a Field
                    foreach (IGrouping<int, ComplianceField> group in recordGroups)
                    {
                        //we skip those that don't have a record
                        if (group.Key > -1)
                        {
                            // grab status
                            ComplianceRecordView view = complianceRecordViewTbl.QueryRecordWhere("Id = {0}", group.Key);

                            //Check if we can resolve everything including some fields that are previously resolved.
                            bool canResolve = complianceFieldValueViewTbl.QueryRecordsWhere("RecordID = {0}", group.Key).All(fld => {
                                string value;
                                if (!activeConfig.TryGetValue(fld.FieldName, out value))
                                    value = fld.Value;
   
                                return baseConfigfields.Find(field => field.ID == fld.FieldId).Evaluate(value);
                            });

                            if (canResolve)
                            {
                                //Create Action
                                complianceActionTbl.AddNewRecord(new ComplianceAction()
                                {
                                    Note = "New File Downloaded",
                                    UserAccount = "MiMD",
                                    RecordId = group.Key,
                                    StateId = resolved.ID,
                                    Timestamp = DateTime.UtcNow
                                });

                                int resolvedId = connection.ExecuteScalar<int>("SELECT @@identity");

                                group.ToList().ForEach(item => complianceFieldValueTbl.AddNewRecord(new ComplianceFieldValue()
                                {
                                    ActionId = resolvedId,
                                    FieldId = item.ID,
                                    Value = activeConfig[item.Name],
                                    PreVal = item.PreVal
                                }));
                            }
                            else if (view.Status == noCompliance.ID)
                            {
                                //Create Action
                                complianceActionTbl.AddNewRecord(new ComplianceAction()
                                {
                                    Note = "New File Downloaded",
                                    UserAccount = "MiMD",
                                    RecordId = group.Key,
                                    StateId = null,
                                    Timestamp = DateTime.UtcNow
                                });

                                int resolvedId = connection.ExecuteScalar<int>("SELECT @@identity");

                                group.ToList().ForEach(item => complianceFieldValueTbl.AddNewRecord(new ComplianceFieldValue()
                                {
                                    ActionId = resolvedId,
                                    FieldId = item.ID,
                                    Value = activeConfig[item.Name],
                                    PreVal = item.PreVal
                                }));
                            }
                            else
                            {
                                List<ComplianceField> nonresolving = group.ToList().Where(fld => {
                                    ComplianceFieldValueView old = complianceFieldValueViewTbl.QueryRecordWhere("FieldId = {0}", fld.ID);
                                    return !fld.Evaluate(activeConfig[fld.Name]) && fld.Evaluate(old.Value, old.PreVal);
                                }).ToList();

                                List<ComplianceField> resolving = group.ToList().Where(fld => {
                                    ComplianceFieldValueView old = complianceFieldValueViewTbl.QueryRecordWhere("FieldId = {0}", fld.ID);
                                    return !fld.Evaluate(old.Value, old.PreVal);
                                }).ToList();

                                if (resolving.Count > 0)
                                {
                                    complianceActionTbl.AddNewRecord(new ComplianceAction()
                                    {
                                        Note = "New File Downloaded",
                                        UserAccount = "MiMD",
                                        RecordId = group.Key,
                                        StateId = null,
                                        Timestamp = DateTime.UtcNow
                                    });

                                    int resolvedId = connection.ExecuteScalar<int>("SELECT @@identity");

                                    resolving.ForEach(item => complianceFieldValueTbl.AddNewRecord(new ComplianceFieldValue()
                                    {
                                        ActionId = resolvedId,
                                        FieldId = item.ID,
                                        Value = activeConfig[item.Name],
                                        PreVal = item.PreVal
                                    }));
                                }
                                newFields = newFields.Concat(nonresolving).ToList();

                            }

                        }
                        else
                        {
                            newFields = newFields.Concat(group.ToList()).ToList();
                        }

                    }

                    if (newFields.Count == 0) continue;

                    // Add the new Compliance Issue to count if it is opened
                    meterDataSet.ComplianceIssues++;

                    complianceRecordTbl.AddNewRecord(new ComplianceRecord()
                    {
                        BaseConfigId = baseConfig.ID,
                        MeterId = meter.ID,
                        TimerOffset = 0
                    });

                    int recordId = connection.ExecuteScalar<int>("SELECT @@identity");

                    //Create Action
                    complianceActionTbl.AddNewRecord(new ComplianceAction()
                    {
                        Note = "New File Downloaded",
                        UserAccount = "MiMD",
                        RecordId = recordId,
                        StateId = noCompliance.ID,
                        Timestamp = DateTime.UtcNow
                    });

                    int actionId = connection.ExecuteScalar<int>("SELECT @@identity");

                    newFields.ForEach(item => recordFieldTbl.AddNewRecord(new ComplianceRecordField()
                    {
                        FieldId = item.ID,
                        RecordId = recordId
                    }));

                    newFields.ForEach(item => complianceFieldValueTbl.AddNewRecord(new ComplianceFieldValue()
                    {
                        ActionId = actionId,
                        FieldId = item.ID,
                        Value = activeConfig[item.Name],
                        PreVal = item.PreVal
                    })) ;

                }
                return true;

            }
        }

        private bool HasComplianceMeter(MeterDataSet meterDataSet)
        {
            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                TableOperations<ComplianceMeter> meterTbl = new TableOperations<ComplianceMeter>(connection);
                return meterTbl.QueryRecordCountWhere("MeterId = {0}", meterDataSet.Meter.ID) > 0;
            }
        }

        private void UpdateBaseConfig(BaseConfig baseConfig, Dictionary<string, string> activeConfig)
        {
            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                TableOperations<ComplianceField> complianceFieldTbl = new TableOperations<ComplianceField>(connection);

                // Get relevant Compliance Fields
                List<ComplianceField> baseConfigfields = complianceFieldTbl.QueryRecordsWhere("BaseConfigId = {0}", baseConfig.ID).ToList();
                baseConfigfields = baseConfigfields.Where(fld => !fld.Evaluate(activeConfig[fld.Name])).ToList();

                foreach (var fld in baseConfigfields)
                {
                    fld.PreVal = activeConfig[fld.Name];
                    complianceFieldTbl.AddNewOrUpdateRecord(fld);
                }


                if (baseConfigfields.Count() == 0) return;

                foreach (ComplianceField fld in baseConfigfields)
                {
                    // If field is = just update
                    if (fld.Comparison == "=")
                    {
                        fld.Value = activeConfig[fld.Name];
                    }
                    // If field is <> just make it =
                    if (fld.Comparison == "<>")
                    {
                        fld.Value = activeConfig[fld.Name];
                    }
                    if (fld.Comparison == "<" && fld.FieldType == "number")
                    {
                        try
                        {
                            double value = double.Parse(activeConfig[fld.Name]);
                            fld.Value = (Math.Min(value, double.Parse(fld.Value))).ToString();
                        }
                        catch 
                        { }
                    }
                    if (fld.Comparison == ">" && fld.FieldType == "number")
                    {
                        try
                        {
                            double value = double.Parse(activeConfig[fld.Name]);
                            fld.Value = (Math.Max(value, double.Parse(fld.Value))).ToString();
                        }
                        catch 
                        { }
                    }
                    if (fld.Comparison == "IN")
                    {
                        fld.Value = fld.Value + ";" + activeConfig[fld.Name];
                        // Add it to existing List
                    }

                    //special case if it is a number but Value is a String
                    // Also deal with case where we have < or > in that case we turn it into =
                    if (fld.FieldType == "number")
                    {
                        try
                        {
                            double.Parse(activeConfig[fld.Name]);
                        }
                        catch
                        {
                            fld.FieldType = "string";
                            if (fld.Comparison == ">" || fld.Comparison == "<")
                            {
                                fld.Comparison = "=";
                                fld.Value = activeConfig[fld.Name];
                            }
                        }
                    }
                    complianceFieldTbl.UpdateRecord(fld);

                }


            }

        }

    }
}