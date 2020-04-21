//******************************************************************************************************
//  CustomerAccess.cs - Gbtc
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
//  09/20/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web.Http;
using MiMD.Controllers;

namespace MiMD.Model
{
    public class CustomerAccess
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int CustomerID { get; set; }
        public int PQViewSiteID { get; set; }
    }

    [RoutePrefix("api/MiMD/CustomerAccess")]
    public class CustomerAccessController : ModelController<CustomerAccess> {
        protected override string PostRoles { get; } = "Administrator, Transmission SME";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";

        public CustomerAccessController() : base(true, "CustomerID")
        {

        }

        [HttpPost, Route("AddMultiple")]
        public IHttpActionResult AddMultipleCustomerAccess(IEnumerable<CustomerAccess> customerAccesses) {
            try
            {
                using(AdoDataConnection connection = new AdoDataConnection(Connection))
                {
                    foreach (CustomerAccess customerAccess in customerAccesses)
                        new TableOperations<CustomerAccess>(connection).AddNewRecord(customerAccess);

                    return Ok("Added all records without error.");
                }
            }
            catch (Exception ex) {
                return InternalServerError(ex);
            }
        }
    }
}