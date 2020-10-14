//******************************************************************************************************
//  ComplianceMeter.cs - Gbtc
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
//  09/01/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using MiMD.Controllers;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Http;

namespace MiMD.Model
{
    [TableName("ComplianceMeter")]
    public class ComplianceMeter
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int MeterId { get; set; }
        public bool Active { get; set; }
        public bool Reviewed { get; set; }

    }

    [TableName("ComplianceMeterView")]
    public class ComplianceMeterView: ComplianceMeter
    {
        public string AssetKey { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int StatusID { get; set; }
        public string Status { get; set; }
        public int Timer { get; set; }
    }

    // Probably want to extend this to use MeterName and Adjust to use View
    [RoutePrefix("api/MiMD/PRC002/ComplianceMeter")]
    public class ComplianceMeterController : ModelController<ComplianceMeterView>
    {
        protected override string PostRoles { get; } = "Administrator, Transmission SME, PQ Data Viewer";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";
        protected override bool HasParent { get; } = true;
        protected override string ParentKey { get; } = "MeterId";

        [HttpPost, Route("SearchableList")]
        public IHttpActionResult GetMeterUsingSearchableList([FromBody] PostData postData)
        {
            string whereClause = BuildWhereClause(postData.Searches);

            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {

                string sql = @"
                DECLARE @SQLStatement NVARCHAR(MAX) = N'
                    SELECT * FROM ComplianceMeterView
                    " + whereClause.Replace("'", "''") + @"
                    ORDER BY " + postData.OrderBy + " " + (postData.Ascending ? "ASC" : "DESC") + @"
                '
                exec sp_executesql @SQLStatement";
                DataTable table = connection.RetrieveData(sql, "");

                return Ok(table);
            }
        }

        [HttpPost, Route("SelectableList")]
        public IHttpActionResult GetSelectableMeterUsingSearchableList([FromBody] PostData postData)
        {
            string whereClause = BuildWhereClause(postData.Searches);

            if (string.IsNullOrWhiteSpace(whereClause))
                whereClause = "WHERE Meter.ID NOT IN (SELECT MeterID FROM ComplianceMeter)";
            else
                whereClause = whereClause + " AND Meter.ID NOT IN (SELECT MeterID FROM ComplianceMeter)";

            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {

                string sql = @"
                    SELECT * FROM Meter
                    " + whereClause.Replace("'", "''") + @"
                    ORDER BY " + postData.OrderBy + " " + (postData.Ascending ? "ASC" : "DESC");

                DataTable table = connection.RetrieveData(sql, "");

                return Ok(table);
            }
        }

        [HttpPost, Route("RAPSubmitt")]
        public IHttpActionResult SubmittRemedialActionPlan([FromBody] JObject postData)
        {
            try
            {
                Dictionary<string, string> posted = postData.ToObject<Dictionary<string, string>>();
                using (AdoDataConnection connection = new AdoDataConnection(Connection))
                {
                    ComplianceState rap = new TableOperations<ComplianceState>(connection).QueryRecordWhere("Description = 'RAP Submitted'");
                    string query = "MeterID = {0} AND [Status] IN (SELECT ID FROM ComplianceState WHERE Priority > 3 AND Priority < 6)";
                    TableOperations<ComplianceAction>  actionTable = new TableOperations<ComplianceAction>(connection);
                    foreach(ComplianceRecordView record in new TableOperations<ComplianceRecordView>(connection).QueryRecordsWhere(query,int.Parse(posted["meterId"])))
                    {
                        actionTable.AddNewRecord(new ComplianceAction()
                        {
                            Note = posted["Note"],
                            RecordId = record.ID,
                            Timestamp = DateTime.UtcNow,
                            UserAccount = User.Identity.Name,
                            StateId = rap.ID,
                        });
                    }
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        public override IHttpActionResult Post([FromBody] JObject record)
        {
            try
            {
                if (User.IsInRole(PostRoles))
                {
                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        // This Adds a whole bunch of new Things including the appropriate Base COnfiguration and Field objects...
                        ComplianceMeter newRecord = record["Meter"].ToObject<ComplianceMeter>();
                        int result = new TableOperations<ComplianceMeter>(connection).AddNewRecord(newRecord);
                        int meterId = connection.ExecuteScalar<int>("SELECT ID FROM ComplianceMeter WHERE MeterID = {0}", newRecord.MeterId);

                        List<BaseConfig> BaseConfigurations = record["BaseConfiguration"].ToObject<List<BaseConfig>>();
                        List<ComplianceField> Fields = record["ConfigurationFields"].ToObject<List<ComplianceField>>();
                        

                        TableOperations<BaseConfig> baseConfigTbl = new TableOperations<BaseConfig>(connection);
                        TableOperations<ComplianceField> fieldTable = new TableOperations<ComplianceField>(connection);
                        BaseConfigurations.ForEach(item =>
                        {
                            baseConfigTbl.AddNewRecord(new BaseConfig() { MeterId = meterId, Name = item.Name, Pattern = item.Pattern });
                            int configId = connection.ExecuteScalar<int>("SELECT @@identity");
                            Fields.Where(fld => fld.BaseConfigId == item.ID).ToList().ForEach(fld => fieldTable.AddNewRecord(new ComplianceField() 
                                { 
                                    BaseConfigId = configId,
                                    Comparison = fld.Comparison, 
                                    FieldType = fld.FieldType, 
                                    Name = fld.Name, 
                                    Value = fld.Value 
                                }));
                        });

                        return Ok(result);
                    }
                }
                else
                {
                    return Unauthorized();
                }

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        public override IHttpActionResult Delete(ComplianceMeterView record)
        {
          return Unauthorized(); 
        }

    }

}