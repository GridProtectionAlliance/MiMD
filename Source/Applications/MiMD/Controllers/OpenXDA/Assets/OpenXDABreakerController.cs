//******************************************************************************************************
//  OpenXDABreakerController.cs - Gbtc
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
//  01/24/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using Newtonsoft.Json.Linq;
using openXDA.Model;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using MiMD.Controllers;

[RoutePrefix("api/OpenXDA/Breaker")]
public class OpenXDABreakerController : ModelController<Breaker>
{
    protected override string PostRoles { get; } = "Administrator, Transmission SME";
    protected override string PatchRoles { get; } = "Administrator, Transmission SME";
    protected override string DeleteRoles { get; } = "Administrator, Transmission SME";

    public OpenXDABreakerController() : base(false, "", true, "AssetKey") { }

    protected override string Connection { get; } = "dbOpenXDA";

    [HttpGet, Route("{breakerID:int}/EDNAPoint")]
    public IHttpActionResult GetEDNAPoinsForBreaker(int breakerID)
    {
        using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
        {
            EDNAPoint record = new TableOperations<EDNAPoint>(connection).QueryRecordWhere("BreakerID = {0}", breakerID);
            return Ok(record);
        }
    }

    [HttpGet, Route("{breakerID:int}/SpareBreaker")]
    public IHttpActionResult GetSpareBreakerForBreaker(int breakerID)
    {
        using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
        {
            Breaker record = new TableOperations<Breaker>(connection).QueryRecordWhere("ID = (SELECT SpareAssetID FROM AssetSpare WHERE AssetID = {0})", breakerID);
            return Ok(record);
        }
    }

    [HttpGet, Route("{breakerID:int}/SpareBreakersForSubstation")]
    public IHttpActionResult SpareBreakersForSubstationForBreaker(int breakerID)
    {
        using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
        {
            IEnumerable<Breaker> record = new TableOperations<Breaker>(connection).QueryRecordsWhere(@"
                    Spare=1 AND ID IN 
                    (SELECT AssetID FROM AssetLocation WHERE LocationID = 
                        (
                            SELECT 
                             LocationID
                            FROM
                                Asset JOIN
                                AssetLocation ON Asset.ID = AssetLocation.AssetID
                            WHERE
                                Asset.ID = {0}
                        )
                    )
                ", breakerID);
            return Ok(record);
        }
    }

    [HttpGet, Route("SpareBreakers/Substation/{locationID:int}")]
    public IHttpActionResult SpareBreakersForSubstation(int locationID)
    {
        using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
        {
            IEnumerable<Breaker> record = new TableOperations<Breaker>(connection).QueryRecordsWhere(@"
                    Spare=1 AND ID IN 
                    (SELECT AssetID FROM AssetLocation WHERE LocationID = {0})
                ", locationID);
            return Ok(record);
        }
    }

    [HttpGet, Route("{breakerID:int}/Location")]
    public IHttpActionResult GetLocationForAsset(int breakerID)
    {
        using (AdoDataConnection connection = new AdoDataConnection(Connection))
        {
            try
            {
                Location record = new TableOperations<Location>(connection).QueryRecordWhere("ID IN (SELECT LocationID FROM AssetLocation WHERE AssetID = {0})", breakerID);
                return Ok(record);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }

    public override IHttpActionResult Post([FromBody] JObject record)
    {
        Breaker breakerRecord = base.Post(record).ExecuteAsync(new System.Threading.CancellationToken()).Result.Content.ReadAsAsync<Breaker>().Result;
        using (AdoDataConnection connection = new AdoDataConnection("systemSettings")) {
            if (record["EDNAPoint"] != null)
            {
                EDNAPoint eDNAPoint = new EDNAPoint()
                {
                    BreakerID = breakerRecord.ID,
                    Point = record["EDNAPoint"].ToString()
                };
                new TableOperations<EDNAPoint>(connection).AddNewRecord(eDNAPoint);
            }

            if (record["SpareBreakerID"] != null)
            {
                AssetSpare assetSpare = new AssetSpare()
                {
                    AssetID = breakerRecord.ID,
                    SpareAssetID = record["SpareBreakerID"].ToObject<int>()
                };
                new TableOperations<AssetSpare>(connection).AddNewRecord(assetSpare);
            }
        }

        return Ok(breakerRecord);
    }
}
