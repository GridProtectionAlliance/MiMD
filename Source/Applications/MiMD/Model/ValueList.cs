//******************************************************************************************************
//  ValueList.cs - Gbtc
//
//  Copyright © 2018, Grid Protection Alliance.  All Rights Reserved.
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
//  09/10/2018 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.ComponentModel.DataAnnotations;
using GSF.Data;
using GSF.Data.Model;
using GSF.Web.Model;
using GSF.Web.Security;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MiMD.Model
{
    [TableName("ValueList"), SettingsCategory("systemSettings")]
    public class ValueList : SystemCenter.Model.ValueList { }

    [RoutePrefix("api/ValueList")]
    public class ValueListController : ModelController<ValueList> {

        [HttpGet, Route("Group/{groupName}")]
        public IHttpActionResult GetValueListForGroup(string groupName)
        {
            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                IEnumerable<ValueList> records = new TableOperations<ValueList>(connection).QueryRecordsWhere("GroupID = ( SELECT ID FROM ValueListGroup WHERE Name = {0})", groupName);
                return Ok(records);
            }
        }
    }
}