//******************************************************************************************************
//  AdditionalField.cs - Gbtc
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
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Web.Http;
using MiMD.Controllers;

namespace MiMD.Model
{
    public class Customer
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        [Required]
        public string AccountName { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Description { get; set; }
    }

    [RoutePrefix("api/MiMD/Customer")]
    public class CustomerController : ModelController<Customer> {

        protected override string PostRoles { get; } = "Administrator, Transmission SME";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";

        [HttpPost, Route("SearchableList")]
        public IHttpActionResult GetCustomersUsingSearchableList([FromBody] IEnumerable<Search> searches)
        {
            string whereClause = BuildWhereClause(searches);
            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                DataTable table = connection.RetrieveData(@"
                SELECT
	                DISTINCT
                    Customer.ID,
	                Customer.AccountName,
	                Customer.Name,
	                Customer.Phone,
	                Customer.Description,
	                COUNT(CustomerAccess.ID) as Meters
                FROM
	                Customer LEFT JOIN
	                CustomerAccess ON Customer.ID = CustomerAccess.CustomerID LEFT JOIN
	                PQViewSite ON CustomerAccess.PQViewSiteID = PQViewSite.ID 
                " + whereClause + @"
                GROUP BY
                    Customer.ID,
	                Customer.AccountName,
	                Customer.Name,
	                Customer.Phone,
	                Customer.Description
                ");
                return Ok(table);
            }
        }


    }
}