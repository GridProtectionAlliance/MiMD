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
        [HttpPost, Route("SearchableList")]
        public IHttpActionResult GetMetersUsingSearchableList([FromBody] IEnumerable<Search> searches)
        {
            string whereClause = BuildWhereClause(searches);

            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                string sql = @"

                    DECLARE @PivotColumns NVARCHAR(MAX) = N''

                    SELECT @PivotColumns = @PivotColumns + '[' + t.FieldName + '],'
                    FROM (Select FieldName FROM SystemCenter.dbo.AdditionalField) AS t

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
	                    AdditionalField af on af.OpenXDAParentTable = ''Meter'' LEFT JOIN
	                    AdditionalFieldValue afv ON m.ID = afv.OpenXDAParentTableID AND af.ID = afv.AdditionalFieldID LEFT JOIN
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
                    '
                    exec sp_executesql @SQLStatement
                ";
                DataTable table = connection.RetrieveData(sql, "");


                return Ok(table);
            }
        }

        [HttpGet, Route("SearchableList/Columns")]
        public IHttpActionResult GetMeterColumnsUsingSearchableList()
        {
            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                DataTable table = connection.RetrieveData(@"

                    DECLARE @PivotColumns NVARCHAR(MAX) = N''

                    SELECT @PivotColumns = @PivotColumns + '[' + t.FieldName + '],'
                    FROM (Select FieldName FROM SystemCenter.dbo.AdditionalField) AS t

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
	                    AdditionalField af on af.OpenXDAParentTable = ''Meter'' LEFT JOIN
	                    AdditionalFieldValue afv ON m.ID = afv.OpenXDAParentTableID AND af.ID = afv.AdditionalFieldID LEFT JOIN
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

    }

}