//******************************************************************************************************
//  Meters.cs - Gbtc
//
//  Copyright © 2019, Grid Protection Alliance.  All Rights Reserved.
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
//  08/26/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Transactions;
using System.Web.Http;
using GSF.Data;
using GSF.Data.Model;
using Newtonsoft.Json.Linq;
using openXDA.Model;

namespace MiMD.Controllers.OpenXDA
{
    [RoutePrefix("api/OpenXDA/Location")]
    public class OpenXDALocationController : ModelController<Location>
    {
        protected override string PostRoles { get; } = "Administrator, Transmission SME";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";

        protected override string Connection { get; } = "dbOpenXDA";

        [HttpPost, Route("SearchableList")]
        public IHttpActionResult GetMetersUsingSearchableList([FromBody] IEnumerable<Search> searches)
        {
            string whereClause = BuildWhereClause(searches);

            using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
            {
                DataTable table = connection.RetrieveData(@"
                SELECT
	                DISTINCT
                    Location.ID,
	                Location.LocationKey,
	                Location.Name,
	                COUNT(DISTINCT Meter.ID) as Meters,
	                COUNT(DISTINCT AssetLocation.AssetID) as Assets
                FROM
	                Location LEFT JOIN
	                Meter ON Location.ID = Meter.LocationID LEFT JOIN
	                AssetLocation ON Location.ID = AssetLocation.LocationID LEFT JOIN
                    Asset ON AssetLocation.AssetID = Asset.ID LEFT JOIN
	                Note ON Note.NoteTypeID = (SELECT ID FROM NoteType WHERE Name = 'Location') AND Note.ReferenceTableID = Meter.ID
                   " + whereClause + @"
                GROUP BY
                    Location.ID,
	                Location.LocationKey,
	                Location.Name
                ");
                return Ok(table);
            }
        }

        [HttpGet, Route("{locationID:int}/Meters")]
        public IHttpActionResult GetMetersForLocation(int locationID)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                try
                {
                    IEnumerable<Meter> result = new TableOperations<Meter>(connection).QueryRecordsWhere("LocationID = {0}", locationID);
                    return Ok(result);
                }
                catch (Exception ex)
                {
                    return InternalServerError(ex);
                }
            }
        }

        [HttpGet, Route("{locationID:int}/Assets")]
        public IHttpActionResult GetAssetsForLocation(int locationID)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                try
                {
                    DataTable result = connection.RetrieveData(@"
                    SELECT 
	                    Asset.*,
	                    AssetType.Name as AssetType
                    FROM
	                    Asset JOIN 
	                    AssetType ON Asset.AssetTypeID = AssetType.ID JOIN
	                    AssetLocation ON Asset.ID = AssetLocation.AssetID
                    WHERE
                        AssetLocation.LocationID = {0}", locationID);
                    return Ok(result);
                }
                catch (Exception ex)
                {
                    return InternalServerError(ex);
                }
            }
        }

    }

}