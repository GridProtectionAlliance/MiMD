//******************************************************************************************************
//  ComplianceRecord.nceNote.cs - Gbtc
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
//  09/03/2020 - C. Lackner
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
        TableName("ComplianceRecord"),
        PostRoles("Administrator, Transmission SME, PQ Data Viewer"),
        PatchRoles("Administrator, Transmission SME"),
        DeleteRoles("Administrator, Transmission SME"),

    ]
    public class ComplianceRecord
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        [ParentKey(typeof(Meter))]
        public int MeterId { get; set; }
        public int? BaseConfigId { get; set; }
        public int TimerOffset { get; set; }

    }

    [
        TableName("ComplianceRecordView"),
        PostRoles("Administrator, Transmission SME, PQ Data Viewer"),
        PatchRoles("Administrator, Transmission SME"),
        DeleteRoles("Administrator, Transmission SME"),

    ]
    public class ComplianceRecordView: ComplianceRecord
    {
        public int Status { get; set; }
        public string User { get; set; }
        public DateTime Timestamp { get; set; }
        public int Timer { get; set; }
        public DateTime Created { get; set; }
        public int LastActionID { get; set; }


    }

    // Probably want to extend this to use MeterName and Adjust to use View
    [RoutePrefix("api/MiMD/PRC002/ComplianceRecord")]
    public class ComplianceRecordController : ModelController<ComplianceRecordView>
    {
        //POSTING IS only Allowed for Manual Out Of Compliance and InActive and needs to generater a Record and an Action

        public override IHttpActionResult Post([FromBody] JObject record)
        {
            try
            {
                if (User.IsInRole(PostRoles))
                {
                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {

                        Dictionary<string, string> newRecord = record.ToObject<Dictionary<string,string>>();
                        ComplianceRecord complianceRecord = new ComplianceRecord()
                        {
                            BaseConfigId = null,
                            MeterId = int.Parse(newRecord["MeterId"]),
                            TimerOffset = int.Parse(newRecord["TimerOffset"])
                        };

                        int result = new TableOperations<ComplianceRecord>(connection).AddNewRecord(complianceRecord);
                        int recordId = connection.ExecuteScalar<int>("SELECT @@identity");

                        ComplianceAction complianceAction = new ComplianceAction()
                        {
                            RecordId = recordId,
                            Timestamp = DateTime.UtcNow,
                            StateId = int.Parse(newRecord["Status"]),
                            Note = newRecord["Note"],
                            UserAccount = User.Identity.Name
                    };

                        result += new TableOperations<ComplianceAction>(connection).AddNewRecord(complianceAction);
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
        public override IHttpActionResult Delete(ComplianceRecordView record)
        {
             return Unauthorized();
        }

    }

}