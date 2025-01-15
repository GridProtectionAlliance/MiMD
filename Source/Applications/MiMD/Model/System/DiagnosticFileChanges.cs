//******************************************************************************************************
//  DiagnosticFileChanges.cs - Gbtc
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
//  05/06/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Web.Model;
using Newtonsoft.Json;
using System;
using System.Data;
using System.Web.Http;

namespace MiMD.Model.System
{
	[ReturnLimit(10)]
    public class DiagnosticFileChanges
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
		[ParentKey(typeof(Meter))]
        public int MeterID { get; set; }
        public string FileName { get; set; }
        public DateTime LastWriteTime { get; set; }
        public int Alarms { get; set; }
		public string Html { get; set; }
        public int FileSize { get; set; }
    }

    [RoutePrefix("api/MiMD/DiagnosticFiles")]
    public class DiagnosticFileChangesController : ModelController<DiagnosticFileChanges>
    {
        [HttpGet, Route("{meterID:int}/LastWrites/{sort}/{ascending:int}/{page:int}")]
        public IHttpActionResult GetConfigFilesLastWrites(int meterID, string sort, int ascending, int page)
        {
			if (GetRoles == string.Empty || User.IsInRole(GetRoles))
			{
				string orderByExpression = "MaxAlarmChanges.LastWriteTime DESC";
                int recordsPerPage = Take ?? 50;

                if (sort != null && sort != string.Empty)
					orderByExpression = $"{sort} {(ascending == 1 ? "ASC" : "DESC")}";
				using (AdoDataConnection connection = new AdoDataConnection(Connection))
				{
					string sqlWithClause = $@"
					WITH MaxWriteTimes AS (
						SELECT
							MeterID,
							FileName,
							MAX(LastWriteTime) LastWriteTime
						FROM(
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'AppStatusFileChanges' as [Table] FROM AppStatusFileChanges UNION
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'AppTraceFileChanges' as [Table] FROM AppTraceFileChanges UNION
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'EmaxDiagnosticFileChanges' as [Table] FROM EmaxDiagnosticFileChanges
						) t
						GROUP BY
							MeterID,
							FileName
					), MaxFileChanges AS(
						SELECT
							t.ID,t.MeterID, t.FileName, t.LastWriteTime, t.Alarms, t.[Table]
						FROM
						MaxWriteTimes JOIN
						(
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'AppStatusFileChanges' as [Table] FROM AppStatusFileChanges UNION
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'AppTraceFileChanges' as [Table] FROM AppTraceFileChanges UNION
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'EmaxDiagnosticFileChanges' as [Table] FROM EmaxDiagnosticFileChanges
						) t ON t.MeterID = MaxWriteTimes.MeterID AND t.LastWriteTime = MaxWriteTimes.LastWriteTime AND t.FileName = MaxWriteTimes.FileName
					), MaxAlarmTimes AS (
						SELECT
							MeterID,
							FileName,
							MAX(LastWriteTime) LastWriteTime
						FROM(
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'AppStatusFileChanges' as [Table] FROM AppStatusFileChanges WHERE Alarms > 0 UNION
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'AppTraceFileChanges' as [Table] FROM AppTraceFileChanges WHERE Alarms > 0 UNION
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'EmaxDiagnosticFileChanges' as [Table] FROM EmaxDiagnosticFileChanges WHERE Alarms > 0
						) t
	
						GROUP BY
							MeterID,
							FileName
					), MaxAlarmChanges AS(
						SELECT
							t.ID,t.MeterID, t.FileName, t.LastWriteTime, t.Alarms, t.[Table]
						FROM
						MaxAlarmTimes JOIN
						(
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'AppStatusFileChanges' as [Table] FROM AppStatusFileChanges UNION
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'AppTraceFileChanges' as [Table] FROM AppTraceFileChanges UNION
							SELECT ID,MeterID, FileName, LastWriteTime, Alarms, 'EmaxDiagnosticFileChanges' as [Table] FROM EmaxDiagnosticFileChanges
						) t ON t.MeterID = MaxAlarmTimes.MeterID AND t.LastWriteTime = MaxAlarmTimes.LastWriteTime AND t.FileName = MaxAlarmTimes.FileName
					)";
					string sql = sqlWithClause + $@"
					SELECT
						Meter.ID as MeterID,
						MaxFileChanges.FileName as MaxChangeFileName,
						MaxFileChanges.LastWriteTime as MaxChangeWriteTime,
						MaxFileChanges.[Table] as MaxChangeTable,
						MaxAlarmChanges.FileName as MaxAlarmFileName,
						MaxAlarmChanges.LastWriteTime as MaxAlarmWriteTime,
						MaxAlarmChanges.Alarms as Alarms,
						MaxAlarmChanges.[Table] as MaxAlarmTable

					FROM
						Meter Left JOIN
						MaxFileChanges ON Meter.ID = MaxFileChanges.MeterID left JOIN
						MaxAlarmChanges ON Meter.ID = MaxAlarmChanges.MeterID AND MaxFileChanges.FileName = MaxAlarmChanges.FileName
					WHERE 
						Meter.ID = {{0}}                    
					ORDER BY
                        {orderByExpression}
					OFFSET {page * recordsPerPage} ROWS FETCH NEXT {recordsPerPage} ROWS ONLY";
                    string countSql = sqlWithClause + @"
					SELECT COUNT(*) 
					FROM 
						Meter Left JOIN
						MaxFileChanges ON Meter.ID = MaxFileChanges.MeterID left JOIN
						MaxAlarmChanges ON Meter.ID = MaxAlarmChanges.MeterID AND MaxFileChanges.FileName = MaxAlarmChanges.FileName
					Where
						Meter.ID = {0}";

                    DataTable table = connection.RetrieveData(sql, meterID);
                    int recordCount = connection.ExecuteScalar<int>(countSql, meterID);


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

        [HttpGet, Route("{table}/{meterID:int}/{fileName}/{flag}/{sort}/{ascending:int}/{page:int}")]
        public IHttpActionResult GetConfigFiles(string table,int meterID, string fileName, string flag, string sort, int ascending)
        {
			if (GetRoles == string.Empty || User.IsInRole(GetRoles))
			{
				string orderByExpression = $"{table}.LastWriteTime DESC";
                int recordsPerPage = Take ?? 50;

                if (sort != null && sort != string.Empty)
					orderByExpression = $"{table}.{ sort} {(ascending == 1 ? "ASC" : "DESC")}";
				using (AdoDataConnection connection = new AdoDataConnection(Connection))
				{
					string sqlClauses = $@"
                    FROM
	                    {table} 
                    WHERE
	                    MeterID = {{0}} AND FileName = {{1}} {(flag.ToLower() != "true" ? "AND Alarms > 0" : "")}";
					string sql = "SELECT * " + sqlClauses + $"ORDER BY {orderByExpression}";
					string countSql = "Select Count(*) " + sqlClauses;

                    DataTable data = connection.RetrieveData(sql, meterID, fileName);
                    int recordCount = connection.ExecuteScalar<int>(countSql, meterID, fileName);


                    return Ok(new PagedResults()
                    {
                        Data = JsonConvert.SerializeObject(data),
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