//******************************************************************************************************
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
using GSF.Web.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MiMD.Model
{
    [TableName("Meter"), SettingsCategory("systemSettings"), AllowSearch]
    public class Meter: openXDA.Model.Meter {}


    [RoutePrefix("api/MiMD/Meter")]
    public class OpenXDAMeterController : ModelController<Meter> {
        

    


        [HttpPost, Route("Diagnostic/SearchableList")]
        public IHttpActionResult GetMetersDiagnosticUsingSearchableList([FromBody] PostData postData)
        {
            string whereClause = BuildWhereClause(postData.Searches);

            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                string sql = @"
                    DECLARE @PivotColumns NVARCHAR(MAX) = N''

                    SELECT @PivotColumns = @PivotColumns + '[AFV_' + t.FieldName + '],'
                    FROM (Select DISTINCT FieldName FROM AdditionalField WHERE ParentTable = 'Meter') AS t

                    DECLARE @SQLStatement NVARCHAR(MAX) = N'
                        WITH MaxFileChanges AS (
	                        SELECT
			                    ID,MeterID, FileName, LastWriteTime, NULL as LastFaultTime, 0 as FaultCount48hr ,
			                    row_number() over (partition by MeterID order by LastWriteTime desc,Alarms desc) as RowNum
		                    FROM
			                 (
				                SELECT ID,MeterID, FileName, LastWriteTime,Alarms, NULL as LastFaultTime, 0 as FaultCount48hr FROM AppStatusFileChanges UNION
				                SELECT ID,MeterID, FileName, LastWriteTime,Alarms, LastFaultTime, FaultCount48hr FROM AppTraceFileChanges UNION
				                SELECT ID,MeterID, FileName, LastWriteTime,Alarms, NULL as LastFaultTime, 0 as FaultCount48hr FROM EmaxDiagnosticFileChanges
			                ) t
	                    ), MaxAlarmChanges as(
		                    SELECT
			                    ID,MeterID, FileName, LastWriteTime, Alarms,
			                    row_number() over (partition by MeterID order by LastWriteTime desc,Alarms desc) as RowNum
		                    FROM
			                    (
				                    SELECT ID,MeterID, FileName, LastWriteTime, Alarms FROM AppStatusFileChanges UNION
				                    SELECT ID,MeterID, FileName, LastWriteTime, Alarms FROM AppTraceFileChanges UNION
				                    SELECT ID,MeterID, FileName, LastWriteTime, Alarms FROM EmaxDiagnosticFileChanges
			                    ) t
		                    WHERE Alarms > 0
	                    )
                            SELECT *
                            FROM (
			                    SELECT
				                    m.ID as MeterID,
				                    m.AssetKey as Station,
				                    m.Make as Make,
                                    m.Model as Model,
                                    m.TSC AS TSC,
				                    (CONCAT(''AFV_'',af.FieldName)) AS FieldName,
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
				                    MaxAlarmChanges mac ON m.ID = mac.MeterID AND mac.RowNum = 1
			                    WHERE mfc.RowNum = 1
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