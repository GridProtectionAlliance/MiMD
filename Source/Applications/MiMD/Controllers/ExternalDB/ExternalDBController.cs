//******************************************************************************************************
//  ExternalDBController.cs - Gbtc
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
//  04/10/2020 - Christoph Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Web.Http;
using GSF.Configuration;
using GSF.Data;
using GSF.Data.Model;
using GSF.Reflection;
using Newtonsoft.Json.Linq;
using Oracle;
using Oracle.ManagedDataAccess.Client;

namespace MiMD.Controllers
{
    [RoutePrefix("api/ExternalDB/")]
    public class ExternalDBController<T> : ApiController where T : class, new()
    {
        #region [ Constructor ]
        public ExternalDBController()
        {
        }

        #endregion

        #region [Properties]

        protected virtual string extDBConnectionSetting { get { return ""; } }
        protected virtual GSF.Data.DatabaseType extDBType { get { return DatabaseType.Oracle; } } 
        protected virtual string extDBName { get { return ""; } }

        #endregion

        #region [ Http Methods ]

        [Route("Update/{id}"), HttpGet]
        public IHttpActionResult Update(string id)
        {
            int xdaID = int.Parse(id);

            List<T> xdaObj = new List<T>();

            try
            {
                using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
                {
                    if (xdaID < 0)
                    {

                        xdaObj = (new TableOperations<T>(connection)).QueryRecords().ToList();

                    }
                    else
                    {
                        xdaObj.Add((new TableOperations<T>(connection)).QueryRecordsWhere("ID = {0}", xdaID).First());
                    }
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            List<Model.ExternalDBField> result = new List<Model.ExternalDBField>();

            List<Model.AdditionalField> fields = new List<Model.AdditionalField>();
            List<Model.ExternalOpenXDAField> xdaFields = new List<Model.ExternalOpenXDAField>();

            TableNameAttribute tableNameAttribute;
            string tableName;
            if (typeof(T).TryGetAttribute(out tableNameAttribute))
                tableName = tableNameAttribute.TableName;
            else
                tableName = typeof(T).Name;

            try
            {
                using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
                {
                    fields = new TableOperations<Model.AdditionalField>(connection).QueryRecordsWhere("OpenXDAParentTable = {0} AND ExternalDB = {1}", tableName, extDBName).ToList();
                    xdaFields = new TableOperations<Model.ExternalOpenXDAField>(connection).QueryRecordsWhere("OpenXDAParentTable = {0} AND ExternalDB = {1}", tableName, extDBName).ToList();

                    IEnumerable<IGrouping<string, Model.AdditionalField>> fieldGroups = fields.GroupBy(item => item.ExternalDBTable);
                    IEnumerable<IGrouping<string, Model.ExternalOpenXDAField>> xdafieldGroups = xdaFields.GroupBy(item => item.ExternalDBTable);

                    foreach (string tbl in fieldGroups.Select(item => item.Key).Union(xdafieldGroups.Select(item => item.Key)))
                    {
                        IGrouping<string, Model.AdditionalField> fieldgroup = fieldGroups.Where(item => item.Key == tbl)?.First();
                        IGrouping<string, Model.ExternalOpenXDAField> xDAgroup = xdafieldGroups.Where(item => item.Key == tbl)?.First();
                        

                        foreach (T asset in xdaObj)
                        {
                            result = result.Concat(GetTable(tbl, 
                                new Tuple<IEnumerable<Model.AdditionalField>, IEnumerable<Model.ExternalOpenXDAField>>(
                                    (fieldgroup == null? new List<Model.AdditionalField>(): fieldgroup.ToList()),
                                    (xDAgroup == null ? new List<Model.ExternalOpenXDAField>() : xDAgroup.ToList())),
                                asset)).ToList();
                        }
                    }


                    fields.ForEach(item =>
                        xdaObj.ForEach( asset => 
                            connection.ExecuteNonQuery("UPDATE AdditionalFieldValue SET [UpdatedOn] = sysdatetime() WHERE OpenXDAParentTableID = {0} AND AdditionalFieldID = {1}",
                            asset.GetType().GetProperty("ID").GetValue(asset), item.ID)
                            )
                    );

                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

           
               
            
            return Ok(result);
        }

        [Route("ConfirmUpdate"), HttpPost]
        public IHttpActionResult ConfirmUpdate([FromBody] JObject record)
        {
            try
            {
                JToken data = record.GetValue("data");
                List<Model.ExternalDBField> fields = data.ToObject<List<Model.ExternalDBField>>();

                using (AdoDataConnection xdaConnection = new AdoDataConnection("dbOpenXDA"))
                using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
                {
                    TableOperations<Model.AdditionalFieldValue> valueTable = new TableOperations<Model.AdditionalFieldValue>(connection);

                    foreach (Model.ExternalDBField fld in fields)
                    {
                        if (fld.Error)
                            continue;

                        if (fld.isXDAField)
                        {
                            T xdaObj = (new TableOperations<T>(xdaConnection)).QueryRecordWhere("ID = {0}", fld.OpenXDAParentTableID);
                            
                            // Convert to int, string or other 
                            MethodInfo m = xdaObj.GetType().GetProperty(fld.FieldName).GetType().GetMethod("Parse", new Type[] { typeof(string) });
                            if (m != null)
                            {
                                xdaObj.GetType().GetProperty(fld.FieldName).SetValue(xdaObj, m.Invoke(null, new object[] { fld.Value }));
                            }
                            else
                            {
                                try
                                {
                                    xdaObj.GetType().GetProperty(fld.FieldName).SetValue(xdaObj, fld.Value);
                                }
                                catch { }
                            }

                            (new TableOperations<T>(xdaConnection)).UpdateRecord(xdaObj);
                            continue;
                        }

                        if (fld.FieldValueID == null)
                        {
                            valueTable.AddNewRecord(new Model.AdditionalFieldValue()
                            {
                                AdditionalFieldID = fld.AdditionalFieldID,
                                OpenXDAParentTableID = fld.OpenXDAParentTableID,
                                Value = fld.Value,
                            });
                        }
                        else
                        {
                            Model.AdditionalFieldValue val = valueTable.QueryRecordWhere("ID={0}", fld.FieldValueID);
                            val.Value = fld.Value;
                            valueTable.UpdateRecord(val);

                        }
                    }
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        #endregion

        #region [ Helper Methods ]

        protected virtual string getDataQuery(T xdaObj)
        {
            string result = "LOCATION_KEY = {0}";

            return String.Format(result, "something");
        }

        private string GetTableQuery(string tableName)
        {
            string result = tableName;

            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                TableOperations<Model.extDBTables> tblTable = new TableOperations<Model.extDBTables>(connection);

                if (tblTable.QueryRecordCountWhere("ExternalDB = {0} AND TableName = {1}", extDBName, tableName) > 0)
                    result = tblTable.QueryRecordWhere("ExternalDB = {0} AND TableName = {1}", extDBName, tableName).Query;
            }
            return result;
        }

        private List<Model.ExternalDBField> GetTable(string tableName, Tuple<IEnumerable<Model.AdditionalField>, IEnumerable<Model.ExternalOpenXDAField>> collumns, T xdaObj)
        {
            List<Model.ExternalDBField> result = new List<Model.ExternalDBField>();
            if (collumns.Item1.Count() < 1 && collumns.Item2.Count() < 1)
                return result;

            try
            {
                result = GetFields(GetTableQuery(tableName), collumns, xdaObj);
            }
           
            catch
            {
                foreach (Model.AdditionalField fld in collumns.Item1)
                {
                    try
                    {
                        result = result.Concat(GetFields(
                            GetTableQuery(tableName),
                            new Tuple<IEnumerable<Model.AdditionalField>, IEnumerable<Model.ExternalOpenXDAField>>(new List<Model.AdditionalField>() { fld }, new List<Model.ExternalOpenXDAField>()),
                            xdaObj)
                            ).ToList();
                    }
                    catch (Exception ex)
                    {
                        result.Add(processExternalAdditionalField(xdaObj, new Model.ExternalDBField()
                        {
                            FieldName = fld.FieldName,
                            Value = null,
                            Error = true,
                            PreviousValue = null,
                            AdditionalFieldID = fld.ID,
                            Message = ex.Message
                        }));
                    }
                }

                foreach (Model.ExternalOpenXDAField fld in collumns.Item2)
                {
                    try
                    {
                        result = result.Concat(GetFields(
                            GetTableQuery(tableName),
                            new Tuple<IEnumerable<Model.AdditionalField>, IEnumerable<Model.ExternalOpenXDAField>>(new List<Model.AdditionalField>(), new List<Model.ExternalOpenXDAField>() { fld }),
                            xdaObj)
                            ).ToList();
                    }
                    catch (Exception ex)
                    {
                        result.Add(processExternalopenXDAField(xdaObj, new Model.ExternalDBField()
                        {
                            FieldName = fld.FieldName,
                            Value = null,
                            Error = true,
                            PreviousValue = null,
                            AdditionalFieldID = fld.ID,
                            Message = ex.Message
                        }));
                    }
                }
            }
           
            return result;

        }

        private List<Model.ExternalDBField> GetFields(string tableName, Tuple<IEnumerable<Model.AdditionalField>, IEnumerable<Model.ExternalOpenXDAField>> collumns, T xdaObj)
        {
            List<Model.ExternalDBField> result = new List<Model.ExternalDBField>();

            if (collumns.Item1.Count() < 1 && collumns.Item2.Count() < 1)
                return result;

            IEnumerable<string> querycol = collumns.Item1.Select(item => item.ExternalDBTableKey).Union(collumns.Item2.Select(item => item.ExternalDBTableKey));

            string query = "SELECT " + String.Join(", ", querycol);
            query = query + " FROM " + tableName + " WHERE " + getDataQuery(xdaObj);

            Dictionary<string, string> extData = new Dictionary<string, string>();

            if (extDBType == DatabaseType.Oracle)
            {
                CategorizedSettingsElementCollection reportSettings = ConfigurationFile.Current.Settings[extDBConnectionSetting];
                string conString = reportSettings["ConnectionString"].Value;

                using (OracleConnection con = new OracleConnection(conString))
                {
                    con.Open();
                    using (OracleCommand cmd = con.CreateCommand())
                    {
                        cmd.CommandText = query;


                        using (OracleDataReader reader = cmd.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                for (int i = 0; i < reader.FieldCount; i++)
                                {
                                    if (reader.GetValue(i) == null)
                                        extData.Add(reader.GetName(i), "");
                                    else
                                        extData.Add(reader.GetName(i), reader.GetString(i));
                                }

                            }
                            else
                                throw new Exception("Key not found in DataBase");
                        }
                    }
                }

            }
            else
            {
                using (AdoDataConnection connection = new AdoDataConnection(extDBConnectionSetting))
                {
                    DataTable dataTable = connection.RetrieveData(query);

                    foreach (DataRow row in dataTable.AsEnumerable())
                    {
                        extData = row.Table.Columns.Cast<DataColumn>().ToDictionary(c => c.ColumnName, c => row[c].ToString());

                    }
                }
            }
            

            //Sort Through Data to get any Data that has changed or does not exist only
            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                TableOperations<Model.AdditionalFieldValue> valueTable = new TableOperations<Model.AdditionalFieldValue>(connection);

                result = collumns.Item1.Select(item =>
                {
                    string value = item.ExternalDBTableKey;
                    extData.TryGetValue(item.ExternalDBTableKey, out value);

                    Model.ExternalDBField res = new Model.ExternalDBField()
                    {
                        FieldName = item.FieldName,
                        Value = value,
                        Error = false,
                        PreviousValue = null,
                        FieldValueID = null,
                        AdditionalFieldID = item.ID,
                        isXDAField = false,
                        Changed = false,
                    };

                    res = processExternalAdditionalField(xdaObj, res);

                    if (valueTable.QueryRecordCountWhere("AdditionalFieldID = {0} AND OpenXDAParentTableID = {1}", item.ID, res.OpenXDAParentTableID) > 0)
                    {
                        Model.AdditionalFieldValue val = valueTable.QueryRecordsWhere("AdditionalFieldID = {0} AND OpenXDAParentTableID = {1}", item.ID, res.OpenXDAParentTableID).First();
                        res.FieldValueID = val.ID;
                        res.PreviousValue = val.Value;
                    }

                    return res;
                    }).ToList();

                result = result.Concat(collumns.Item2.Select(item =>
                {
                    string value = item.ExternalDBTableKey;
                    extData.TryGetValue(item.ExternalDBTableKey, out value);

                    Model.ExternalDBField res = new Model.ExternalDBField()
                    {
                        AdditionalFieldID = item.ID,
                        FieldName = item.FieldName,
                        Value = value,
                        Error = false,
                        PreviousValue = Convert.ToString(xdaObj.GetType().GetProperty(item.FieldName).GetValue(xdaObj)),
                        isXDAField = true,
                        Changed = false,
                    };

                    res = processExternalopenXDAField(xdaObj, res);

                    return res;
                })).ToList();


            }
                
            return result.Where(item => item.PreviousValue != item.Value).ToList();
            
        }

        protected virtual Model.ExternalDBField processExternalAdditionalField(T xdaObj, Model.ExternalDBField field )
        {
            return field;
        }

        protected virtual Model.ExternalDBField processExternalopenXDAField(T xdaObj, Model.ExternalDBField field)
        {
            return field;
        }

        #endregion
    }
}