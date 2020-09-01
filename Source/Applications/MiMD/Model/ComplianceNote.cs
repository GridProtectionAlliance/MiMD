//******************************************************************************************************
//  ComplianceNote.cs - Gbtc
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
    [TableName("ComplianceNotes")]
    public class ComplianceNotes
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int ComplianceChangeId { get; set; }
        public string Note { get; set; }
        public string UserAccount { get; set; }
        public DateTime Timestamp { get; set; }

    }

    [RoutePrefix("api/MiMD/PRC002/Notes")]
    public class ComplianceNotesController : ModelController<ComplianceNotes>
    {
        protected override string PostRoles { get; } = "Administrator, Transmission SME, PQ Data Viewer";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";
        protected override bool HasParent { get; } = true;
        protected override string ParentKey { get; } = "ComplianceChangeId";
        protected override string GetOrderByExpression => "Timestamp desc";
        public override IHttpActionResult Post([FromBody] JObject record)
        {
            try
            {
                if (User.IsInRole(PostRoles))
                {
                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        ComplianceNotes newRecord = record.ToObject<ComplianceNotes>();

                        newRecord.UserAccount = User.Identity.Name;
                        int result = new TableOperations<ComplianceNotes>(connection).AddNewRecord(newRecord);
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

        // Might want to make sure this is not possible - Compliance Notes should not be deleted
        // This needs to be checked with TVA
        public override IHttpActionResult Delete(ComplianceNotes record)
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