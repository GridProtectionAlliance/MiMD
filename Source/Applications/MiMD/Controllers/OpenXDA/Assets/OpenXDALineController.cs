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
    [RoutePrefix("api/OpenXDA/Line")]
    public class OpenXDALineController : ModelController<Line>
    {
        private class LineDetails
        {
            public double Length;
            public double R0;
            public double R1;
            public double X0;
            public double X1;
            public double ThermalRating;
        }

        protected override string PostRoles { get; } = "Administrator, Transmission SME";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";

        public OpenXDALineController() : base(false, "", true, "AssetKey") { }

        protected override string Connection { get; } = "dbOpenXDA";

        [HttpGet, Route("{lineID:int}/LineSegment")]
        public IHttpActionResult GetLineSegmentForLine(int lineID)
        {
            using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
            {
                LineDetails result = new LineDetails();

                List<LineSegment> record = new TableOperations<LineSegment>(connection).QueryRecordsWhere("ID in (select ChildID from AssetRelationship where AssetRelationshipTypeID = (SELECT ID FROM AssetRelationshipType WHERE Name = 'Line-LineSegment') AND ParentID = {0})", lineID).ToList();
                record = record.Concat(new TableOperations<LineSegment>(connection).QueryRecordsWhere("ID in (select ParentID from AssetRelationship where AssetRelationshipTypeID = (SELECT ID FROM AssetRelationshipType WHERE Name = 'Line-LineSegment') AND ChildID = {0})", lineID)).ToList();

                result.Length = record.Select(item => item.Length).Sum();
                result.X0 = record.Select(item => item.X0).Sum();
                result.R0 = record.Select(item => item.R0).Sum();
                result.X1 = record.Select(item => item.X1).Sum();
                result.R1 = record.Select(item => item.R1).Sum();
                result.ThermalRating = record.Select(item => item.ThermalRating).Count() > 0? record.Select(item => item.ThermalRating).Min() : 0;

                return Ok(result);
            }

        }

        [HttpGet, Route("{lineID:int}/LineSegments")]
        public IHttpActionResult GetLineSegmentsForLine(int lineID)
        {
            using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
            {
                List<LineSegment> record = new TableOperations<LineSegment>(connection).QueryRecordsWhere("ID in (select ChildID from AssetRelationship where AssetRelationshipTypeID = (SELECT ID FROM AssetRelationshipType WHERE Name = 'Line-LineSegment') AND ParentID = {0})", lineID).ToList();
                record = record.Concat(new TableOperations<LineSegment>(connection).QueryRecordsWhere("ID in (select ParentID from AssetRelationship where AssetRelationshipTypeID = (SELECT ID FROM AssetRelationshipType WHERE Name = 'Line-LineSegment') AND ChildID = {0})", lineID)).ToList();                
                return Ok(record);
            }

        }

        public override IHttpActionResult Post([FromBody] JObject record)
        {
            Line lineRecord = base.Post(record).ExecuteAsync(new System.Threading.CancellationToken()).Result.Content.ReadAsAsync<Line>().Result;
            using (AdoDataConnection connection = new AdoDataConnection("dbOpenXDA"))
            {
                LineSegment lineSegment = new LineSegment()
                {
                    VoltageKV = record["VoltageKV"].ToObject<double>(),
                    AssetKey = record["AssetKey"].ToString() + "LineSegment",
                    Description = record["Description"].ToString(),
                    AssetName = record["AssetName"].ToString(),
                    R0 = record["Segment"]["R0"].ToObject<double>(),
                    X0 = record["Segment"]["X0"].ToObject<double>(),
                    R1 = record["Segment"]["R1"].ToObject<double>(),
                    X1 = record["Segment"]["X1"].ToObject<double>(),
                    Length = record["Segment"]["Length"].ToObject<double>(),
                };
                lineSegment.AssetTypeID = connection.ExecuteScalar<int>("SELECT ID FROM AssetType WHERE Name = 'LineSegment'");

                new TableOperations<LineSegment>(connection).AddNewRecord(lineSegment);
                lineSegment.ID = connection.ExecuteScalar<int>("SELECT ID FROM Asset WHERE AssetKey = {0}", lineSegment.AssetKey);

                AssetConnection assetConnection = new AssetConnection()
                {
                    AssetRelationshipTypeID = 0,
                    ParentID = lineRecord.ID,
                    ChildID = lineSegment.ID
                };
                assetConnection.AssetRelationshipTypeID = connection.ExecuteScalar<int>("SELECT ID FROM AssetRelationshipType WHERE Name = 'Line-LineSegment'");
                new TableOperations<AssetConnection>(connection).AddNewRecord(assetConnection);

            }


            return Ok(lineRecord);
        }
    }
}