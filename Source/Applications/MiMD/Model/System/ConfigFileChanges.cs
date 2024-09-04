//******************************************************************************************************
//  ConfigFileChanges.cs - Gbtc
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
using GSF.Web.Model;
using MiMD.Controllers;
using Newtonsoft.Json;
using System;
using System.Data;
using System.Web.Http;

namespace MiMD.Model.System
{
    [ReturnLimit(10)]
    public class ConfigFileChanges
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        [ParentKey(typeof(Meter))]
        public int MeterID { get; set; }
        public string FileName { get; set; }
        public DateTime LastWriteTime { get; set; }
        public int Changes { get; set; }
        public string Html { get; set; }
        public string Text { get; set; }
        public int ValidChange { get; set; }
    }

    [RoutePrefix("api/MiMD/ConfigurationFiles")]
    public class ConfigFileChangesController : ModelController<ConfigFileChanges>
    {
        [HttpGet, Route("{meterID:int}/LastWrites/{sort}/{ascending:int}/{page:int}")]
        public IHttpActionResult GetConfigFilesLastWrites(int meterID,string sort, int ascending, int page)
        {

            if (GetRoles == string.Empty || User.IsInRole(GetRoles))
            {
                string orderByExpression = "ConfigFileChanges.LastWriteTime DESC";
                int recordsPerPage = Take ?? 50;

                if (sort != null && sort != string.Empty)
                    orderByExpression = $"ConfigFileChanges.{sort} {(ascending == 1 ? "ASC" : "DESC")}";

                using (AdoDataConnection connection = new AdoDataConnection(Connection))
                {
                    string sqlBase = $@"
                    FROM
	                    ConfigFileChanges CROSS APPLY
	                    (SELECT FileName, MAX(LastWriteTime) LastWriteTime FROM ConfigFileChanges cfc WHERE cfc.FileName = ConfigFileChanges.FileName AND cfc.MeterID = ConfigFileChanges.MeterID GROUP BY FileName) as mlwt 
                    WHERE 
	                    MeterID = {{0}} AND
	                    ConfigFileChanges.LastWriteTime = mlwt.LastWriteTime";

                    string sql = $@"
                    SELECT 
	                    ConfigFileChanges.*
                    {sqlBase}
                    ORDER BY
                        {orderByExpression}";

                    string sqlCount = $@"
                    SELECT
                        Count(*)
                    {sqlBase}";
                    DataTable table = connection.RetrieveData(sql, meterID);
                    int recordCount = connection.ExecuteScalar<int>(sqlCount, meterID);

                    return Ok(new PagedResults()
                    {
                        Data = JsonConvert.SerializeObject(table),
                        RecordsPerPage = recordsPerPage,
                        TotalRecords = recordCount,
                        NumberOfPages = (recordCount + recordsPerPage - 1) / recordsPerPage
                    });
                }
            }
            else
                return Unauthorized();
        }

        [HttpGet, Route("{meterID:int}/{fileName}/{flag}/{sort}/{ascending:int}/{page:int}")]
        public IHttpActionResult GetConfigFiles(int meterID, string fileName, string flag, string sort, int ascending, int page)
        {
            if (GetRoles == string.Empty || User.IsInRole(GetRoles))
            {
                string orderByExpression = "ConfigFileChanges.LastWriteTime DESC";
                int recordsPerPage = Take ?? 50;

                if (sort != null && sort != string.Empty)
                    orderByExpression = $"ConfigFileChanges.{sort} {(ascending == 1 ? "ASC" : "DESC")}";

                using (AdoDataConnection connection = new AdoDataConnection(Connection))
                {
                    string sqlBase = $@"
                    FROM
	                    ConfigFileChanges 
                    WHERE
	                    MeterID = {{0}} AND FileName = {{1}} {(flag.ToLower() != "true" ? "AND Changes > 0" : "")}";

                    string sql = $@"
                    SELECT
	                    *
                    {sqlBase}
                    ORDER BY
                        {orderByExpression}";

                    string sqlCount = $@"
                    SELECT
                        Count(*)
                    {sqlBase}";
                    DataTable table = connection.RetrieveData(sql, meterID, fileName);
                    int recordCount = connection.ExecuteScalar<int>(sqlCount, meterID, fileName);

                    return Ok(new PagedResults()
                    {
                        Data = JsonConvert.SerializeObject(table),
                        RecordsPerPage = recordsPerPage,
                        TotalRecords = recordCount,
                        NumberOfPages = (recordCount + recordsPerPage - 1) / recordsPerPage
                    });
                }
            }
            else
                return Unauthorized();
        }


    }

}