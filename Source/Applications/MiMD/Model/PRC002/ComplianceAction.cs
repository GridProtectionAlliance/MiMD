//******************************************************************************************************
//  ComplianceAction.nceNote.cs - Gbtc
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
//  09/16/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Web.Model;
using MiMD.Controllers;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MiMD.Model
{
    [
        UseEscapedName, TableName("MiMD.ComplianceAction"),
        PostRoles("Administrator, Transmission SME, PQ Data Viewer"),
        PatchRoles("Administrator, Transmission SME"),
        DeleteRoles("Administrator, Transmission SME"),

    ]
    public class ComplianceAction
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        [ParentKey(typeof(ComplianceRecord))]
        public int RecordId { get; set; }
        [DefaultSortOrder(false)]
        public DateTime Timestamp { get; set; }
        public int? StateId { get; set; }
        public string UserAccount { get; set; }
        public string Note { get; set; }

    }

    [RoutePrefix("api/MiMD/PRC002/Action")]
    public class ActionController : ModelController<ComplianceAction>
    {
        public override IHttpActionResult Post([FromBody] JObject record)
        {
            try
            {
                if (User.IsInRole(PostRoles))
                {
                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        ComplianceAction newRecord = record.ToObject<ComplianceAction>();

                        newRecord.UserAccount = User.Identity.Name;
                        newRecord.Timestamp = DateTime.UtcNow;

                        int result = new TableOperations<ComplianceAction>(connection).AddNewRecord(newRecord);
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

        public override IHttpActionResult Delete(ComplianceAction record)
        {
            return Unauthorized();
        }

    }

}