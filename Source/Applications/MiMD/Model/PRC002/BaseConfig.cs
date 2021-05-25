//******************************************************************************************************
//  BaseConfig.cs - Gbtc
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
using MiMD.Controllers;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MiMD.Model
{
    [TableName("BaseConfig")]
    public class BaseConfig
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int MeterId { get; set; }
        public string Name { get; set; }
        public string Pattern { get; set; }

    }


    [RoutePrefix("api/MiMD/PRC002/BaseConfig")]
    public class BaseConfigController : ModelController<BaseConfig>
    {
        protected override string PostRoles { get; } = "Administrator, Transmission SME, PQ Data Viewer";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";
        protected override bool HasParent { get; } = true;
        protected override string ParentKey { get; } = "MeterId";
        public override IHttpActionResult Post([FromBody] JObject record)
        {
            try
            {
                if (User.IsInRole(PostRoles))
                {
                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        BaseConfig newRecord = record.ToObject<BaseConfig>();

                        int result = new TableOperations<BaseConfig>(connection).AddNewRecord(newRecord);
                        int id = connection.ExecuteScalar<int>("SELECT ID FROM BaseConfig where MeterID = {0} and Name = {1} AND Pattern = {2}", newRecord.MeterId, newRecord.Name, newRecord.Pattern);
                        JToken fields;
                        if (record.TryGetValue("Fields", out fields))
                        {
                            List<ComplianceField> flds = fields.ToObject<List<ComplianceField>>();

                            flds.ForEach(fld =>
                            {
                                fld.BaseConfigId = id;
                                new TableOperations<ComplianceField>(connection).AddNewRecord(fld);
                            });
                        }

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

       
        public override IHttpActionResult Delete(BaseConfig record)
        {
                    return Unauthorized();
        }
    }

}