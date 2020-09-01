//******************************************************************************************************
//  ComplianceChange.nceNote.cs - Gbtc
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
//  09/01/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using MiMD.Controllers;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MiMD.Model
{
    [TableName("ComplianceChange")]
    public class ComplianceChange
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int ComplianceMeterId { get; set; }
        public string Change { get; set; }
        public DateTime Timestamp { get; set; }
        public bool Manual { get; set; }
        public int ComplianceAlarmId { get; set; }
       
    }

    // Probably want to extend this to use MeterName and Adjust to use View
    [RoutePrefix("api/MiMD/PRC002/ComplianceChange")]
    public class ComplianceChangeController : ModelController<ComplianceChange>
    {
        protected override string PostRoles { get; } = "Administrator, Transmission SME, PQ Data Viewer";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";
        protected override bool HasParent { get; } = true;
        protected override string ParentKey { get; } = "ID";
        public override IHttpActionResult Post([FromBody] JObject record)
        {
            try
            {
                if (User.IsInRole(PostRoles))
                {
                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        ComplianceChange newRecord = record.ToObject<ComplianceChange>();
                        newRecord.Manual = true;
                        int result = new TableOperations<ComplianceChange>(connection).AddNewRecord(newRecord);
                        return Ok(result);
                    }
                }
                else
                {
                    return Unauthorized();
                }

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // Might want to make sure this is not possible - Compliance Changes should not be deleted
        // This needs to be checked with TVA
        public override IHttpActionResult Delete(ComplianceChange record)
        {
            try
            {
                    return Unauthorized();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

    }

}