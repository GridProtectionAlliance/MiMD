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
using GSF.Web.Model;
using MiMD.Controllers;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Http;

namespace MiMD.Model
{
    [ 
        UseEscapedName, TableName("MiMD.ComplianceMeter"),
        PostRoles("Administrator, Transmission SME, PQ Data Viewer"),
        PatchRoles("Administrator, Transmission SME"),
        DeleteRoles("Administrator, Transmission SME"),
        AllowSearch
    ]
    public class ComplianceMeter
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        [ParentKey(typeof(Meter))]
        public int MeterId { get; set; }
        public bool Active { get; set; }
        public bool Reviewed { get; set; }

    }

    [
        CustomView(@"
            SELECT
	            [MiMD.ComplianceMeter].ID AS ID,
	            [MiMD.ComplianceMeter].MeterID AS MeterID,
	            [MiMD.ComplianceMeter].Active AS Active,
                [MiMD.ComplianceMeter].Reviewed AS Reviewed,
	            Meter.AssetKey AS AssetKey,
                Meter.Name AS Name,
	            Meter.Make AS Make,
	            Meter.Model AS Model,
	            (
                    SELECT CASE WHEN [MiMD.ComplianceMeter].Active = 1 AND [MiMD.ComplianceMeter].Reviewed = 1 
                    THEN
		                ISNULL((SELECT CS.ID FROM [MiMD.ComplianceState] CS WHERE CS.Priority = (
                            SELECT 
                                MAX(CS1.Priority) 
                            FROM 
                            [MiMD.ComplianceRecordView] CR LEFT JOIN 
                            [MiMD.ComplianceState] CS1 ON CS1.ID = CR.Status AND CR.MeterId = [MiMD.ComplianceMeter].ID
                        )),(SELECT ID FROM [MiMD.ComplianceState] WHERE Description = 'In Compliance'))
	                ELSE
		                (SELECT ID FROM [MiMD.ComplianceState] WHERE Description = 'Inactive')
	                END
                ) AS StatusID,
	            (
	                SELECT CASE WHEN [MiMD.ComplianceMeter].Active = 1 AND [MiMD.ComplianceMeter].Reviewed = 1 
                    THEN
		                ISNULL((SELECT CS.Description FROM [MiMD.ComplianceState] CS WHERE CS.Priority = (
                            SELECT
                                MAX(CS1.Priority) 
                            FROM 
                            [MiMD.ComplianceRecordView] CR LEFT JOIN
                            [MiMD.ComplianceState] CS1 ON CS1.ID = CR.Status AND CR.MeterId = [MiMD.ComplianceMeter].ID
                        )),'In Compliance')
	                ELSE
		                (SELECT 'Inactive')
	                END
	            ) AS Status,
	            (SELECT MAX([MiMD.ComplianceRecordView].Timer) FROM [MiMD.ComplianceRecordView] WHERE Status NOT IN (SELECT ID FROM [MiMD.ComplianceState] WHERE Description = 'In Compliance') 
                AND [MiMD.ComplianceRecordView].MeterId = [MiMD.ComplianceMeter].ID) AS Timer
	            FROM [MiMD.ComplianceMeter] LEFT JOIN 
	            Meter ON Meter.ID = [MiMD.ComplianceMeter].MeterID
            "),
        PostRoles("Administrator, Transmission SME, PQ Data Viewer"),
        PatchRoles("Administrator, Transmission SME"),
        DeleteRoles("Administrator, Transmission SME"),
        AllowSearch, AdditionalFieldSearch("ParentTable='Meter'")
    ]
    public class ComplianceMeterView: ComplianceMeter
    {
        public string AssetKey { get; set; }
        public string Name { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int StatusID { get; set; }
        public string Status { get; set; }
        public int Timer { get; set; }

    }

    [RoutePrefix("api/MiMD/PRC002/ComplianceMeter")]
    public class ComplianceMeterController : ModelController<ComplianceMeterView>
    {

        [HttpPost, Route("SelectableList")]
        public IHttpActionResult GetSelectableMeterUsingSearchableList([FromBody] PostData postData)
        {
            string whereClause = BuildWhereClause(postData.Searches);

            if (string.IsNullOrWhiteSpace(whereClause))
                whereClause = "WHERE ID NOT IN (SELECT MeterID FROM [MiMD.ComplianceMeter])";
            else
                whereClause = whereClause + " AND ID NOT IN (SELECT MeterID FROM [MiMD.ComplianceMeter])";

            string pivotCollums = "(" + String.Join(",", postData.Searches.Where(item => item.isPivotColumn).Select(search => "'" + search.FieldName + "'")) + ")";

            if (pivotCollums == "()")
                pivotCollums = "('')";

            string collumnCondition = SearchSettings.Condition;
            if (collumnCondition != String.Empty)
                collumnCondition = $"AF.{collumnCondition} AND ";
            collumnCondition = collumnCondition + $"{SearchSettings.FieldKeyField} IN {pivotCollums}";

            string joinCondition = $"af.FieldName IN {pivotCollums.Replace("'", "''")} AND ";
            joinCondition = joinCondition + SearchSettings.Condition.Replace("'", "''");
            if (SearchSettings.Condition != String.Empty)
                joinCondition = $"{joinCondition} AND ";
            joinCondition = joinCondition + $"SRC.{PrimaryKeyField} = AF.{SearchSettings.PrimaryKeyField}";

            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                string sql = $@"
                            DECLARE @PivotColumns NVARCHAR(MAX) = N''
                            SELECT @PivotColumns = @PivotColumns + '[AFV_' + [Key] + '],'
                                FROM (Select DISTINCT {SearchSettings.FieldKeyField} AS [Key] FROM {SearchSettings.AdditionalFieldTable} AS AF WHERE {collumnCondition}  ) AS [Fields]
                            DECLARE @SQLStatement NVARCHAR(MAX) = N'
                                SELECT * INTO #Tbl FROM (
                                SELECT 
                                    SRC.*,
                                    ''AFV_'' + AF.{SearchSettings.FieldKeyField} AS AFFieldKey,
	                                AF.{SearchSettings.ValueField} AS AFValue
                                FROM Meter SRC LEFT JOIN 
                                    {SearchSettings.AdditionalFieldTable} AF ON {joinCondition}
                                ) as FullTbl ' + (SELECT CASE WHEN Len(@PivotColumns) > 0 THEN 'PIVOT (
                                    Max(FullTbl.AFValue) FOR FullTbl.AFFieldKey IN ('+ SUBSTRING(@PivotColumns,0, LEN(@PivotColumns)) + ')) AS PVT' ELSE '' END) + ' 
                                {whereClause.Replace("'", "''")};
                                DECLARE @NoNPivotColumns NVARCHAR(MAX) = N''''
                                    SELECT @NoNPivotColumns = @NoNPivotColumns + ''[''+ name + ''],''
                                        FROM tempdb.sys.columns WHERE  object_id = Object_id(''tempdb..#Tbl'') AND name NOT LIKE ''AFV%''; 
		                        DECLARE @CleanSQL NVARCHAR(MAX) = N''SELECT '' + SUBSTRING(@NoNPivotColumns,0, LEN(@NoNPivotColumns)) + ''FROM #Tbl ORDER BY { postData.OrderBy} {(postData.Ascending ? "ASC" : "DESC")}''
		                        exec sp_executesql @CleanSQL
                            '
                            exec sp_executesql @SQLStatement";


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
                    string query = "MeterID = {0} AND [Status] IN (SELECT ID FROM [MiMD.ComplianceState] WHERE Priority > 3 AND Priority < 6)";
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
                        int meterId = connection.ExecuteScalar<int>("SELECT ID FROM [MiMD.ComplianceMeter] WHERE MeterID = {0}", newRecord.MeterId);

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
                                    Value = fld.Value,
                                    Description = fld.Description,
                                    Category = fld.Category,
                                    Label = fld.Label
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

        [HttpGet, Route("Activate/{meterID}")]
        public IHttpActionResult ActivateMeter(int meterID)
        {
            if (User.IsInRole(PostRoles))
            {
                try 
                {
                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        ComplianceMeter meter = new TableOperations<ComplianceMeter>(connection).QueryRecordWhere("ID = {0}", meterID);
                        meter.Reviewed = true;
                        new TableOperations<ComplianceMeter>(connection).UpdateRecord(meter);
                    }
                }
                catch (Exception ex)
                {
                    return InternalServerError(ex);
                }
            }
                return Ok();
        }

    }

}