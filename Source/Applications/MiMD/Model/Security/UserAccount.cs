//******************************************************************************************************
//  UserAccount.cs - Gbtc
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
//  02/05/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Identity;
using GSF.Security;
using GSF.Security.Model;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web.Http;
using MiMD.Controllers;

namespace MiMD.Model.Security
{
    public class UserAccount : GSF.Security.Model.UserAccount {
        static UserAccount()
        {
            TableOperations<UserAccount>.TypeRegistry.RegisterType<AdoSecurityProvider>();
        }

        public bool PhoneConfirmed { get; set; }
        public bool EmailConfirmed { get; set; }
        public bool Approved { get; set; }
        public int? TSCID { get; set; }
        public int? RoleID { get; set; }
        public string Title { get; set; }
        public string Department { get; set; }
        public string DepartmentNumber { get; set; }
        public string MobilePhone { get; set; }
        public bool ReceiveNotifications { get; set; }
    }

    [RoutePrefix("api/MiMD/UserAccount")]
    public class UserAccountController : ModelController<UserAccount> {
        protected override string GetRoles { get; } = "Administrator";

        [HttpPost, Route("SID")]
        public IHttpActionResult GetSIDFromUserName([FromBody] string userName) {
            if (PostRoles != string.Empty && !User.IsInRole(GetRoles)) return Unauthorized();
            try
            {
                return Ok(UserInfo.UserNameToSID(userName));
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }

        [HttpPost, Route("FilledUserAccount")]
        public IHttpActionResult GetUserInfo([FromBody] UserAccount userAccount)
        {
            if (GetRoles != string.Empty && !User.IsInRole(GetRoles)) return Unauthorized();
            using(AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                try
                {
                    UserInfo userInfo = new UserInfo(UserInfo.SIDToAccountName(userAccount.Name));
                    userAccount.Phone = userInfo.Telephone;
                    userAccount.MobilePhone = userInfo.GetUserPropertyValue("mobile");

                    userAccount.Title = userInfo.Title;
                    userAccount.FirstName = userInfo.FirstName;
                    userAccount.LastName = userInfo.LastName;
                    userAccount.Email = userInfo.Email;
                    userAccount.EmailConfirmed = true;
                    userAccount.PhoneConfirmed = true;
                    userAccount.ReceiveNotifications = true;
                    userAccount.Approved = true;
                    userAccount.Department = userInfo.Department;
                    userAccount.DepartmentNumber = userInfo.GetUserPropertyValue("departmentnumber");
                    
                    if (userInfo.Title != string.Empty)
                        userAccount.RoleID = connection.ExecuteScalar<int>($"SELECT TOP 1 ID FROM Role WHERE Description LIKE '%{userInfo.Title}%' ");
                    if (userAccount.DepartmentNumber != string.Empty)
                        userAccount.TSCID = connection.ExecuteScalar<int>($"SELECT TOP 1 ID FROM TSC WHERE DepartmentNumber LIKE '%{userAccount.DepartmentNumber}%' ");
                    return Ok(userAccount);
                }
                catch (Exception ex)
                {
                    return InternalServerError(ex);
                }
            }

        }


        [HttpPost, Route("IsUser")]
        public IHttpActionResult GetIsUser([FromBody] string sid)
        {
            if (GetRoles != string.Empty && !User.IsInRole(GetRoles)) return Unauthorized();
            try
            {

                return Ok(UserInfo.IsUserSID(sid));
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }

        public class UA : UserAccount
        {
            public string Role { get; set; }
            public string TSC { get; set; }

        }

        [HttpPost, Route("SearchableList")]
        public IHttpActionResult GetUserAccountsUsingSearchableList([FromBody] IEnumerable<Search> searches)
        {
            if (GetRoles != string.Empty && !User.IsInRole(GetRoles)) return Unauthorized();
            try
            {
                string whereClause = BuildWhereClause(searches);

                using (AdoDataConnection connection = new AdoDataConnection(Connection))
                {
                    DataTable table = connection.RetrieveData(@"
                        SELECT
	                        DISTINCT
	                        UserAccount. *,
	                        Role.Name as Role,
	                        TSC.Name as TSC
                        FROM
	                        UserAccount LEFT JOIN 
	                        Role ON UserAccount.RoleID = Role.ID LEFT JOIN
	                        TSC ON UserAccount.TSCID = TSC.ID LEFT JOIN
	                        ApplicationRoleUserAccount ON UserAccount.ID = ApplicationRoleUserAccount.UserAccountID LEFT JOIN
	                        ApplicationRole ON ApplicationRoleUserAccount.ApplicationRoleID = ApplicationRole.ID 
                    " + whereClause + @"
                    ");

                    IEnumerable<UA> records = table.Select().Select(row => new TableOperations<UA>(connection).LoadRecord(row));
                    //if (searches.Where(search => search.Field == "UserAccount.Name").Any())
                    //{
                    //    string search = searches.First(s => s.Field == "UserAccount.Name").SearchText;
                    //    if (search == string.Empty)
                    //    {
                    //        Regex regex = new Regex("^.*$");
                    //        records = records.Where(userAccount => regex.IsMatch(userAccount.AccountName.ToLower()));
                    //    }
                    //    else if (search[0] == '!' || search[0] == '_')
                    //    {
                    //        search = search.Replace("*", ".*");
                    //        Regex regex = new Regex("^" + search + "$");
                    //        records = records.Where(userAccount => !regex.IsMatch(userAccount.AccountName.ToLower()));
                    //    }
                    //    else
                    //    {
                    //        search = search.Replace("*", ".*");
                    //        Regex regex = new Regex("^" + search + "$");
                    //        records = records.Where(userAccount => regex.IsMatch(userAccount.AccountName.ToLower()));
                    //    }
                    //}

                    return Ok(records);
                }
            }
            catch (Exception ex) {
                return InternalServerError(ex);
            }
        }

        public override IHttpActionResult Post([FromBody] JObject record)
        {
            UserAccount newRecord = record.ToObject<UserAccount>();
            if (newRecord.UseADAuthentication)
                newRecord.Name = UserInfo.UserNameToSID(newRecord.Name);
            newRecord.CreatedOn = DateTime.UtcNow;
            newRecord.UpdatedOn = DateTime.UtcNow;
            newRecord.CreatedBy = User.Identity.Name;
            newRecord.UpdatedBy = User.Identity.Name;

            return base.Post(JObject.FromObject(newRecord));
        }

    }

    [RoutePrefix("api/MiMD/ApplicationRoleUserAccount")]
    public class MiMDApplicationRoleUserAccountController : ModelController<ApplicationRoleUserAccount>
    {
        public MiMDApplicationRoleUserAccountController() : base(true, "UserAccountID")
        {

        }

        protected override string GetRoles { get; } = "Administrator";

        [HttpPatch, Route("UpdateArray")]
        public IHttpActionResult PatchArray([FromBody] IEnumerable<ApplicationRoleUserAccount> records)
        {
            try
            {
                if (PatchRoles == string.Empty || User.IsInRole(PatchRoles))
                {

                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        IEnumerable<ApplicationRoleUserAccount> applicationRoles = new TableOperations<ApplicationRoleUserAccount>(connection).QueryRecordsWhere("UserAccountID = {0}", records.First().UserAccountID);

                        foreach (ApplicationRoleUserAccount applicationRole in applicationRoles) {
                            if (records.FirstOrDefault(r => r.ApplicationRoleID == applicationRole.ApplicationRoleID) == null)
                                new TableOperations<ApplicationRoleUserAccount>(connection).DeleteRecord(applicationRole);
                        }

                        foreach (ApplicationRoleUserAccount record in records)
                        {
                            if (applicationRoles.FirstOrDefault(r => r.ApplicationRoleID == record.ApplicationRoleID) == null)
                                new TableOperations<ApplicationRoleUserAccount>(connection).AddNewRecord(record);
                        }

                        return Ok("Updated Roles without error.");
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

    [RoutePrefix("api/MiMD/ApplicationRole")]
    public class MiMDApplicationRoleController : ModelController<ApplicationRole>
    {
        protected override string GetRoles { get; } = "Administrator";
    }

}