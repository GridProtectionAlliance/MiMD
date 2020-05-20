//******************************************************************************************************
//  AdditionalFieldValue.cs - Gbtc
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
//  01/28/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using System;
using System.Collections.Generic;
using System.Web.Http;
using MiMD.Controllers;

namespace MiMD.Model
{
    public class AdditionalFieldValue
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int ParentTableID { get; set; }
        public int AdditionalFieldID { get; set; }
        public string Value { get; set; }
    }

    [RoutePrefix("api/MiMD/AdditionalFieldValue")]
    public class AdditionalFieldValueController : ModelController<AdditionalFieldValue>
    {
        public AdditionalFieldValueController() : base(true, "ParentTableID")
        { 
        }

        [HttpPatch, Route("Array")]
        public IHttpActionResult PatchValues([FromBody] IEnumerable<AdditionalFieldValue> values)
        {
            try
            {
                if (User.IsInRole(PatchRoles))
                {

                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        foreach(AdditionalFieldValue value in values)
                        {
                            new TableOperations<AdditionalFieldValue>(connection).AddNewOrUpdateRecord(value);
                        }
                        return Ok("Patched values without exception.");
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


    }

}