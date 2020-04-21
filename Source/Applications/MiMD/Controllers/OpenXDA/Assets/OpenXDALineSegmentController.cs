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
using System.Net.Http;
using System.Transactions;
using System.Web.Http;
using GSF.Data;
using GSF.Data.Model;
using Newtonsoft.Json.Linq;
using openXDA.Model;

namespace MiMD.Controllers.OpenXDA
{
    [RoutePrefix("api/OpenXDA/LineSegment")]
    public class OpenXDALineSegmentController : ModelController<LineSegment>
    {
        protected override string PostRoles { get; } = "Administrator, Transmission SME";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";

        public OpenXDALineSegmentController() : base(false, "", true, "AssetKey") { }

        protected override string Connection { get; } = "dbOpenXDA";

        [HttpGet, Route("{segmentID:int}/AddToLine/{lineID:int}")]
        public IHttpActionResult AddLineSegmentToLine(int segmentID, int lineID)
        {
            using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
            {
                AssetConnection assetConnection = new AssetConnection()
                {
                    AssetRelationshipTypeID = connection.ExecuteScalar<int>("SELECT ID FROM AssetRelationShipType WHERE Name = 'Line-LineSegment'"),
                    ChildID = lineID,
                    ParentID = segmentID
                };

                (new TableOperations<AssetConnection>(connection)).AddNewRecord(assetConnection);
                return Ok();
            }

        }
        
        [HttpPost, Route("New/Line/{lineID:int}")]
        public IHttpActionResult PostNewAssetForLocation([FromBody] JObject record, int lineID)
        {
            try
            {
                using (TransactionScope scope = new TransactionScope())
                {
                    using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
                    {
                        JToken asset = record["Asset"];
                        int assetTypeID = connection.ExecuteScalar<int>("SELECT ID FROM AssetType WHERE Name = 'LineSegment'");

                        LineSegment lineSegment = new LineSegment();

                        lineSegment.VoltageKV = asset["VoltageKV"].ToObject<double>();
                        lineSegment.AssetKey = asset["AssetKey"].ToString();
                        lineSegment.Description = asset["Description"].ToString();
                        lineSegment.AssetName = asset["AssetName"].ToString();
                        lineSegment.R0 = asset["R0"].ToObject<double>();
                        lineSegment.X0 = asset["X0"].ToObject<double>();
                        lineSegment.R1 = asset["R1"].ToObject<double>();
                        lineSegment.X1 = asset["X1"].ToObject<double>();
                        lineSegment.Length = asset["Length"].ToObject<double>();
                        lineSegment.ThermalRating = asset["ThermalRating"].ToObject<double>();
                        

                        new TableOperations<LineSegment>(connection).AddNewRecord(lineSegment);
                        
                        int assetID = connection.ExecuteScalar<int>("SELECT ID FROM Asset WHERE AssetKey = {0}", asset["AssetKey"].ToString());
                        AssetConnection assetConnection = new AssetConnection()
                        {
                            AssetRelationshipTypeID = connection.ExecuteScalar<int>("SELECT ID FROM AssetRelationShipType WHERE Name = 'Line-LineSegment'"),
                            ChildID = lineID,
                            ParentID = assetID
                        };

                        (new TableOperations<AssetConnection>(connection)).AddNewRecord(assetConnection);
                    }

                    scope.Complete();
                    return Ok("Completed without errors");

                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpGet, Route("{segmentID:int}/Disconnect/{lineID:int}")]
        public IHttpActionResult DisconnectLineSegmentFromLine(int segmentID, int lineID)
        {
            using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
            {
                int typeID = connection.ExecuteScalar<int>("SELECT ID FROM AssetRelationShipType WHERE Name = 'Line-LineSegment'");
                connection.ExecuteNonQuery("DELETE FROM AssetRelationship WHERE AssetRelationshipTypeID = {0} AND ((ChildID = {1} AND ParentID = {2}) OR (ChildID = {2} AND ParentID = {1}))",typeID, lineID, segmentID);
              
                return Ok();
            }

        }
    }
}
