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
using GSF.Text;
using MiMD.DataSets;
using MiMD.Model;
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

                
                // Parse ConfigFile into Dictionary
                Dictionary<string, string> activeConfig = ParseFile(meterDataSet);

                // If Meter is not Revieed just keep updating Base Config
                if (!meter.Reviewed)
                {
                    foreach (BaseConfig baseConfig in baseConfigsMeter)
                        UpdateBaseConfig(baseConfig,activeConfig);
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

               
                //Walk through each BaseConfig seperately
                foreach (BaseConfig baseConfig in baseConfigsMeter)
                {
                    // Get relevant Compliance Fields
                    List<ComplianceField> baseConfigfields = complianceFieldTbl.QueryRecordsWhere("BaseConfigId = {0}", baseConfig.ID).ToList();

                    if (baseConfigfields.Count() == 0) continue;

                    List<ComplianceField> changingFields = baseConfigfields.Where(fld => {
                        ComplianceFieldValueView value = complianceFieldValueViewTbl.QueryRecordWhere("FieldId = {0}", fld.ID);
                        if (value == null)
                            return !fld.Evaluate(activeConfig[fld.Name]);
                        return (activeConfig[fld.Name] != value.Value);
                    }).ToList();
                    
                    if (changingFields.Count == 0) continue;

                    //Clear so that -1 if Record is resolved
                    IEnumerable<IGrouping<int, ComplianceField>> recordGroups = changingFields.GroupBy(fld => 
                    { 
                        ComplianceRecordView record = complianceRecordViewTbl.QueryRecordWhere("BaseConfigId = {0} AND ID IN (SELECT RecordID FROM ComplianceRecordFields WHERE FieldId = {1}) AND Status IN ({2},{3}, {4})", baseConfig.ID, fld.ID, acknowledged.ID, noCompliance.ID, reviewed.ID);
                        if (record == null) return -1;
                        return record.ID;
                    }, fld => fld);

                    // Some Records can not be updated with failing Fields they need to be sepperate
                    List <ComplianceField> newFields = new List<ComplianceField>();

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
                                    Value = activeConfig[item.Name]
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
                                    Value = activeConfig[item.Name]
                                }));
                            }
                            else
                            {
                                List<ComplianceField> nonresolving = group.ToList().Where(fld => {
                                    string old = complianceFieldValueViewTbl.QueryRecordWhere("FieldId = {0}", fld.ID).Value;
                                    return !fld.Evaluate(activeConfig[fld.Name]) && fld.Evaluate(old);
                                    
                                    }).ToList();

                                List<ComplianceField> resolving = group.ToList().Where(fld => {
                                    string old = complianceFieldValueViewTbl.QueryRecordWhere("FieldId = {0}", fld.ID).Value;
                                    return !fld.Evaluate(old);
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
                                        Value = activeConfig[item.Name]
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
                        Value = activeConfig[item.Name]
                    }));



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

        private Dictionary<string, string> ParseFile(MeterDataSet meterDataSet)
        {
            Dictionary<string, string> result = new Dictionary<string, string>();

            List<string> lines = meterDataSet.Text.Split('\n').ToList();
            int i = 1;
            foreach (string line in lines)
            {
                if (line.Contains('='))
                {
                    List<string> parts = line.Split('=').ToList();
                    if (result.ContainsKey(parts[0]))
                        result.Add(parts[0] + "-" + i, string.Join("=", parts.Skip(1)));
                    else
                        result.Add(parts[0], string.Join("=", parts.Skip(1)));
                }
                i++;
            }

            return result;
        }

       private void UpdateBaseConfig(BaseConfig baseConfig, Dictionary<string, string> activeConfig)
       {
            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                TableOperations<ComplianceField> complianceFieldTbl = new TableOperations<ComplianceField>(connection);

                // Get relevant Compliance Fields
                List<ComplianceField> baseConfigfields = complianceFieldTbl.QueryRecordsWhere("BaseConfigId = {0}", baseConfig.ID).Where(fld => !fld.Evaluate(activeConfig[fld.Name])).ToList();

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
                        catch (Exception ex)
                        { }
                    }
                    if (fld.Comparison == ">" && fld.FieldType == "number")
                    {
                        try
                        {
                            double value = double.Parse(activeConfig[fld.Name]);
                            fld.Value = (Math.Max(value, double.Parse(fld.Value))).ToString();
                        }
                        catch (Exception ex)
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