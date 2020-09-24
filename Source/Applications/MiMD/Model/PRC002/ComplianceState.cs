//******************************************************************************************************
//  ComplianceState.cs - Gbtc
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
    [TableName("ComplianceState")]
    public class ComplianceState
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public string TextColor { get; set; }
        public int Priority { get; set; }

    }

    [RoutePrefix("api/MiMD/PRC002/ComplianceState")]
    public class ComplianceAlarmController : ModelController<ComplianceState>
    {
        protected override string PostRoles { get; } = "Administrator, Transmission SME, PQ Data Viewer";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";
        protected override bool HasParent { get; } = false;
        public override IHttpActionResult Post([FromBody] JObject record)
        {
                return Unauthorized();           
        }

        public override IHttpActionResult Delete(ComplianceState record)
        {
            return Unauthorized();
        }

        public override IHttpActionResult Patch(ComplianceState record)
        {
            return Unauthorized();
        }

        [HttpGet, Route("List")]
        public IHttpActionResult GetList()
        {
            
            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {               
                return Ok(new TableOperations<ComplianceState>(connection).QueryRecords());
            }
        }
    }

}