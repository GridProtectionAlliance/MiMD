﻿//******************************************************************************************************
//  Meter.cs - Gbtc
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
//  05/01/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Threading;
using MiMD.Controllers;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MiMD.Model
{
    public class Meter
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string AssetKey { get; set; }
        public string Name { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
    }


    [RoutePrefix("api/MiMD/Meter")]
    public class OpenXDAMeterController : ModelController<Meter> {
        [HttpPost, Route("Config/SearchableList")]
        public IHttpActionResult GetMetersConfigUsingSearchableList([FromBody] PostData postData)
        {
            string whereClause = BuildWhereClause(postData.Searches);

            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                string sql = @"

                    DECLARE @PivotColumns NVARCHAR(MAX) = N''

                    SELECT @PivotColumns = @PivotColumns + '[' + t.FieldName + '],'
                    FROM (Select DISTINCT FieldName FROM AdditionalField WHERE ParentTable = 'Meter') AS t

                    DECLARE @SQLStatement NVARCHAR(MAX) = N'
                    SELECT *
                    FROM (
                    SELECT
                        m.ID as MeterID,
	                    m.AssetKey as Station,
	                    m.Make as Model,
	                    af.FieldName,
	                    afv.Value, 
	                    MAX(LastWriteTime) as DateLastChanged
                    FROM
	                    Meter m LEFT JOIN 
	                    AdditionalField af on af.ParentTable = ''Meter'' LEFT JOIN
	                    AdditionalFieldValue afv ON m.ID = afv.ParentTableID AND af.ID = afv.AdditionalFieldID LEFT JOIN
	                    ConfigFileChanges cfc ON cfc.MeterID = m.ID
                    GROUP BY
                        m.ID,
	                    m.AssetKey,
	                    m.Make,
	                    af.FieldName,
	                    afv.Value
                    ) as t
                    PIVOT(
	                    MAX(t.Value)
	                    FOR t.FieldName in (' + SUBSTRING(@PivotColumns,0, LEN(@PivotColumns)) + ')
                    ) as pvt
                    " + whereClause.Replace("'", "''") + @"
                    ORDER BY " + postData.OrderBy + " " + (postData.Ascending ? "ASC" : "DESC") +@" 

                    '
                    exec sp_executesql @SQLStatement
                ";
                DataTable table = connection.RetrieveData(sql, "");


                return Ok(table);
            }
        }

        [HttpGet, Route("Config/SearchableList/Columns")]
        public IHttpActionResult GetMeterColumnsConfigUsingSearchableList()
        {
            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                DataTable table = connection.RetrieveData(@"

                    DECLARE @PivotColumns NVARCHAR(MAX) = N''

                    SELECT @PivotColumns = @PivotColumns + '[' + t.FieldName + '],'
                    FROM (Select DISTINCT FieldName FROM AdditionalField WHERE ParentTable = 'Meter') AS t

                    DECLARE @SQLStatement NVARCHAR(MAX) = N'
                    SELECT *
                    FROM (
                    SELECT
	                    m.AssetKey as Station,
	                    m.Make as Model,
	                    af.FieldName,
	                    afv.Value, 
	                    MAX(LastWriteTime) as DateLastChanged
                    FROM
	                    Meter m LEFT JOIN 
	                    AdditionalField af on af.ParentTable = ''Meter'' LEFT JOIN
	                    AdditionalFieldValue afv ON m.ID = afv.ParentTableID AND af.ID = afv.AdditionalFieldID LEFT JOIN
	                    ConfigFileChanges cfc ON cfc.MeterID = m.ID
                    GROUP BY
	                    m.AssetKey,
	                    m.Make,
	                    af.FieldName,
	                    afv.Value
                    ) as t
                    PIVOT(
	                    MAX(t.Value)
	                    FOR t.FieldName in (' + SUBSTRING(@PivotColumns,0, LEN(@PivotColumns)) + ')
                    ) as pvt
                    Where 1 != 1
                    '
                    print @sqlstatement
                    exec sp_executesql @SQLStatement
                    
                ", "");


                return Ok(table.Columns.Cast<DataColumn>().Select(x => x.ColumnName));
            }
        }


        [HttpPost, Route("Diagnostic/SearchableList")]
        public IHttpActionResult GetMetersDiagnosticUsingSearchableList([FromBody] PostData postData)
        {
            string whereClause = BuildWhereClause(postData.Searches);

            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                string sql = @"
                    DECLARE @PivotColumns NVARCHAR(MAX) = N''

                    SELECT @PivotColumns = @PivotColumns + '[' + t.FieldName + '],'
                    FROM (Select DISTINCT FieldName FROM AdditionalField WHERE ParentTable = 'Meter') AS t

                    DECLARE @SQLStatement NVARCHAR(MAX) = N'
                        WITH MaxWriteTimes AS (
	                        SELECT
		                        MeterID,
		                        MAX(LastWriteTime) LastWriteTime
	                        FROM(
		                        SELECT MeterID, LastWriteTime FROM AppStatusFileChanges UNION
		                        SELECT MeterID, LastWriteTime FROM AppTraceFileChanges UNION
		                        SELECT MeterID, LastWriteTime FROM EmaxDiagnosticFileChanges
	                        ) t
	                        GROUP BY
		                        MeterID
                        ), MaxFileChanges AS(
	                        SELECT
		                        t.ID,t.MeterID, t.FileName, t.LastWriteTime, LastFaultTime, FaultCount48hr
	                        FROM
	                        MaxWriteTimes JOIN
	                        (
		                        SELECT ID,MeterID, FileName, LastWriteTime, NULL as LastFaultTime, 0 as FaultCount48hr FROM AppStatusFileChanges UNION
		                        SELECT ID,MeterID, FileName, LastWriteTime, LastFaultTime, FaultCount48hr FROM AppTraceFileChanges UNION
		                        SELECT ID,MeterID, FileName, LastWriteTime, NULL as LastFaultTime, 0 as FaultCount48hr FROM EmaxDiagnosticFileChanges
	                        ) t ON t.MeterID = MaxWriteTimes.MeterID AND t.LastWriteTime = MaxWriteTimes.LastWriteTime 
                        ), MaxAlarmTimes AS (
	                        SELECT
		                        MeterID,
		                        MAX(LastWriteTime) LastWriteTime
	                        FROM(
		                        SELECT MeterID, LastWriteTime FROM AppStatusFileChanges WHERE Alarms > 0 UNION
		                        SELECT MeterID, LastWriteTime FROM AppTraceFileChanges WHERE Alarms > 0 UNION
		                        SELECT MeterID, LastWriteTime FROM EmaxDiagnosticFileChanges WHERE Alarms > 0 
	                        ) t
	
	                        GROUP BY
		                        MeterID
                        ), MaxAlarmChanges AS(
	                        SELECT
		                        t.ID,t.MeterID, t.FileName, t.LastWriteTime, t.Alarms
	                        FROM
	                        MaxAlarmTimes JOIN
	                        (
		                        SELECT ID,MeterID, FileName, LastWriteTime, Alarms FROM AppStatusFileChanges UNION
		                        SELECT ID,MeterID, FileName, LastWriteTime, Alarms FROM AppTraceFileChanges UNION
		                        SELECT ID,MeterID, FileName, LastWriteTime, Alarms FROM EmaxDiagnosticFileChanges
	                        ) t ON t.MeterID = MaxAlarmTimes.MeterID AND t.LastWriteTime = MaxAlarmTimes.LastWriteTime 
                        )
                            SELECT *
                            FROM (
                            SELECT
                                m.ID as MeterID,
	                            m.AssetKey as Station,
	                            m.Make as Model,
	                            af.FieldName,
	                            afv.Value, 
	                            mfc.LastWriteTime as DateLastChanged,
		                        mfc.FileName as MaxChangeFileName,
						        mfc.LastFaultTime,
						        mfc.FaultCount48hr,
		                        mac.LastWriteTime as AlarmLastChanged,
	                            mac.Alarms,
	                            mac.FileName as AlarmFileName 
                            FROM
	                            Meter m LEFT JOIN 
	                            AdditionalField af on af.ParentTable = ''Meter'' LEFT JOIN
	                            AdditionalFieldValue afv ON m.ID = afv.ParentTableID AND af.ID = afv.AdditionalFieldID LEFT JOIN
		                        MaxFileChanges mfc ON m.ID = mfc.MeterID left JOIN
		                        MaxAlarmChanges mac ON m.ID = mac.MeterID
                            ) as t
                        PIVOT(
	                        MAX(t.Value)
	                        FOR t.FieldName in (' + SUBSTRING(@PivotColumns,0, LEN(@PivotColumns)) + ')
                        ) as pvt
                    " + whereClause.Replace("'", "''") + @"
                    ORDER BY " + postData.OrderBy + " " + (postData.Ascending ? "ASC" : "DESC") + @" 

                    '
                    exec sp_executesql @SQLStatement
                ";
                DataTable table = connection.RetrieveData(sql, "");


                return Ok(table);
            }
        }

    }

}