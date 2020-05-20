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
using MiMD.Controllers;
using System;
using System.Data;
using System.Web.Http;

namespace MiMD.Model.System
{
    public class ConfigFileChanges
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int MeterID { get; set; }
        public string FileName { get; set; }
        public DateTime LastWriteTime { get; set; }
        public int Changes { get; set; }
        public string Html { get; set; }
        public string Text { get; set; }
    }

    [RoutePrefix("api/MiMD/ConfigurationFiles")]
    public class ConfigFileChangesController : ModelController<ConfigFileChanges>
    {
        protected override bool HasParent { get; } = true;
        protected override string ParentKey { get; } = "MeterID";

        [HttpGet, Route("{meterID:int}/LastWrites")]
        public IHttpActionResult GetConfigFilesLastWrites(int meterID)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                string sql = @"

                    SELECT 
	                    ConfigFileChanges.*
                    FROM
	                    ConfigFileChanges CROSS APPLY
	                    (SELECT FileName, MAX(LastWriteTime) LastWriteTime FROM ConfigFileChanges cfc WHERE cfc.FileName = ConfigFileChanges.FileName AND cfc.MeterID = ConfigFileChanges.MeterID GROUP BY FileName) as mlwt 
                    WHERE 
	                    MeterID = {0} AND
	                    ConfigFileChanges.LastWriteTime = mlwt.LastWriteTime
                    ORDER BY
                        ConfigFileChanges.LastWriteTime DESC
                    ";
                DataTable table = connection.RetrieveData(sql, meterID);


                return Ok(table);
            }
        }

        [HttpGet, Route("{meterID:int}/{fileName}")]
        public IHttpActionResult GetConfigFiles(int meterID, string fileName)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                string sql = @"
                    SELECT
	                    *
                    FROM
	                    ConfigFileChanges 
                    WHERE
	                    MeterID = {0} AND FileName = {1}
                    ORDER BY
	                    LastWriteTime DESC
                ";
                DataTable table = connection.RetrieveData(sql, meterID, fileName);


                return Ok(table);
            }
        }


    }

}