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
using GSF.Web.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web.Http;
using SystemCenter.Model;

namespace MiMD.Model.Security
{
    [SettingsCategory("securityProvider")]
    [GetRoles("Administrator")]
    [PostRoles("Administrator")]
    [PatchRoles("Administrator"), AllowSearch,
     AdditionalFieldSearch("", @"
        (SELECT
	        AdditionalUserFieldValue.ID,
	        AdditionalUserField.FieldName,
	        AdditionalUserFieldValue.Value,
            AdditionalUserFieldValue.UserAccountID
        FROM
	        AdditionalUserField JOIN
	        AdditionalUserFieldValue ON AdditionalUserField.ID = AdditionalUserFieldValue.AdditionalUserFieldID) 
    ", "UserAccountID", "Value", "FieldName")]
    public class UserAccount : GSF.Security.Model.UserAccount
    {
        static UserAccount()
        {
            TableOperations<UserAccount>.TypeRegistry.RegisterType<AdoSecurityProvider>();
        }

        public bool PhoneConfirmed { get; set; }
        public bool EmailConfirmed { get; set; }
        public bool Approved { get; set; }
        public string Title { get; set; }
        public string Department { get; set; }
        public string DepartmentNumber { get; set; }
        public string MobilePhone { get; set; }
        public bool ReceiveNotifications { get; set; }
    }

    [RoutePrefix("api/MiMD/UserAccount")]
    public class UserAccountController : ModelController<UserAccount> {
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

        public override IHttpActionResult GetSearchableList([FromBody] PostData postData)
        {
            if (!AllowSearch || (GetRoles != string.Empty && !User.IsInRole(GetRoles)))
                return Unauthorized();

            try
            {

                string whereClause = BuildWhereClause(postData.Searches);

                using (AdoDataConnection connection = new AdoDataConnection(Connection))
                {
                    string tableName = TableOperations<UserAccount>.GetTableName();

                    string sql = "";

                    if (SearchSettings == null && CustomView == String.Empty)
                        sql = $@" SELECT * FROM {tableName} {whereClause}
                            ORDER BY { postData.OrderBy} {(postData.Ascending ? "ASC" : "DESC")} ";

                    else if (SearchSettings == null)
                        sql = $@" SELECT* FROM({CustomView}) T1 
                         {whereClause}
                        ORDER BY {postData.OrderBy} {(postData.Ascending ? "ASC" : "DESC")}";

                    else
                    {
                        string pivotCollums = "(" + String.Join(",", postData.Searches.Where(item => item.isPivotColumn).Select(search => "'" + search.FieldName + "'")) + ")";

                        if (pivotCollums == "()")
                            pivotCollums = "('')";

                        string collumnCondition = SearchSettings.Condition;
                        if (collumnCondition != String.Empty)
                            collumnCondition = collumnCondition + " AND ";
                        collumnCondition = collumnCondition + $"{SearchSettings.FieldKeyField} IN {pivotCollums}";

                        string joinCondition = $"af.FieldName IN {pivotCollums.Replace("'", "''")} AND ";
                        joinCondition = joinCondition + SearchSettings.Condition.Replace("'", "''");
                        if (SearchSettings.Condition != String.Empty)
                            joinCondition = joinCondition + " AND ";
                        joinCondition = joinCondition + $"SRC.{PrimaryKeyField} = AF.{SearchSettings.PrimaryKeyField}";

                        if (CustomView == String.Empty)
                            sql = $@"
                            DECLARE @PivotColumns NVARCHAR(MAX) = N''
                            SELECT @PivotColumns = @PivotColumns + '[AFV_' + [Key] + '],'
                                FROM (Select DISTINCT {SearchSettings.FieldKeyField} AS [Key] FROM {SearchSettings.AdditionalFieldTable} AS AF WHERE {collumnCondition}  ) AS [Fields]

                            DECLARE @SQLStatement NVARCHAR(MAX) = N'
                                SELECT * INTO #Tbl FROM (
                                SELECT 
                                    SRC.*,
                                    ''AFV_'' + AF.{SearchSettings.FieldKeyField} AS AFFieldKey,
	                                AF.{SearchSettings.ValueField} AS AFValue
                                FROM  {tableName} SRC LEFT JOIN 
                                    {SearchSettings.AdditionalFieldTable} AF ON {joinCondition}
                                ) as FullTbl ' + (SELECT CASE WHEN Len(@PivotColumns) > 0 THEN 'PIVOT (
                                    Max(FullTbl.AFValue) FOR FullTbl.AFFieldKey IN ('+ SUBSTRING(@PivotColumns,0, LEN(@PivotColumns)) + ')) AS PVT' ELSE '' END) + ' 
                                {whereClause.Replace("'", "''")}
                                ORDER BY { postData.OrderBy} {(postData.Ascending ? "ASC" : "DESC")};

                                DECLARE @NoNPivotColumns NVARCHAR(MAX) = N''''
                                    SELECT @NoNPivotColumns = @NoNPivotColumns + ''[''+ name + ''],''
                                        FROM tempdb.sys.columns WHERE  object_id = Object_id(''tempdb..#Tbl'') AND name NOT LIKE ''AFV%''; 
		                        DECLARE @CleanSQL NVARCHAR(MAX) = N''SELECT '' + SUBSTRING(@NoNPivotColumns,0, LEN(@NoNPivotColumns)) + ''FROM #Tbl''

		                        exec sp_executesql @CleanSQL
                            '
                            exec sp_executesql @SQLStatement";
                        else
                            sql = $@"
                            DECLARE @PivotColumns NVARCHAR(MAX) = N''
                            SELECT @PivotColumns = @PivotColumns + '[AFV_' + [Key] + '],'
                                FROM (Select DISTINCT {SearchSettings.FieldKeyField} AS [Key] FROM {SearchSettings.AdditionalFieldTable} WHERE {collumnCondition}  ) AS [Fields]

                            DECLARE @SQLStatement NVARCHAR(MAX) = N'
                                SELECT * INTO #Tbl FROM (
                                SELECT 
                                    SRC.*,
                                    ''AFV_'' + AF.{SearchSettings.FieldKeyField} AS AFFieldKey,
	                                AF.{SearchSettings.ValueField} AS AFValue
                                FROM ({CustomView.Replace("'", "''")}) SRC LEFT JOIN 
                                    {SearchSettings.AdditionalFieldTable} AF ON {joinCondition}
                                ) as FullTbl ' + (SELECT CASE WHEN Len(@PivotColumns) > 0 THEN 'PIVOT (
                                    Max(FullTbl.AFValue) FOR FullTbl.AFFieldKey IN ('+ SUBSTRING(@PivotColumns,0, LEN(@PivotColumns)) + ')) AS PVT' ELSE '' END) + ' 
                                {whereClause.Replace("'", "''")}
                                ORDER BY { postData.OrderBy} {(postData.Ascending ? "ASC" : "DESC")};

                                DECLARE @NoNPivotColumns NVARCHAR(MAX) = N''''
                                    SELECT @NoNPivotColumns = @NoNPivotColumns + ''[''+ name + ''],''
                                        FROM tempdb.sys.columns WHERE  object_id = Object_id(''tempdb..#Tbl'') AND name NOT LIKE ''AFV%''; 
		                        DECLARE @CleanSQL NVARCHAR(MAX) = N''SELECT '' + SUBSTRING(@NoNPivotColumns,0, LEN(@NoNPivotColumns)) + ''FROM #Tbl''

		                        exec sp_executesql @CleanSQL
                            '
                            exec sp_executesql @SQLStatement";
                    }
                    DataTable table = connection.RetrieveData(sql, "");

                    return Ok(JsonConvert.SerializeObject(table));
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpPost, Route("SecureSearchableList")]
        public IHttpActionResult GetUserAccountsUsingSearchableList([FromBody] PostData postData)
        {
            if (GetRoles != string.Empty && !User.IsInRole(GetRoles)) return Unauthorized();
            try
            {
                string whereClause = BuildWhereClause(postData.Searches.Where(search => search.FieldName != "UserAccount.Name"));

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
                    " + whereClause + $@" ORDER BY {postData.OrderBy} {(postData.Ascending ? "ASC" : "DESC")}
                    ");

                    IEnumerable<UA> records = table.Select().Select(row => new TableOperations<UA>(connection).LoadRecord(row));
                    if (postData.Searches.Where(search => search.FieldName == "UserAccount.Name").Any())
                    {
                        string search = postData.Searches.First(s => s.FieldName == "UserAccount.Name").SearchText;
                        if (search == string.Empty)
                        {
                            Regex regex = new Regex("^.*$");
                            records = records.Where(userAccount => regex.IsMatch(userAccount.AccountName.ToLower()));
                        }
                        else if (search[0] == '!' || search[0] == '_')
                        {
                            search = search.Replace("*", ".*");
                            Regex regex = new Regex("^" + search + "$");
                            records = records.Where(userAccount => !regex.IsMatch(userAccount.AccountName.ToLower()));
                        }
                        else
                        {
                            search = search.Replace("*", ".*");
                            Regex regex = new Regex("^" + search + "$");
                            records = records.Where(userAccount => regex.IsMatch(userAccount.AccountName.ToLower()));
                        }
                    }

                    return Ok(records);
                }
            }
            catch (Exception ex)
            {
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

    [GetRoles("Administrator"), SettingsCategory("securityProvider")]
    public class ApplicationRoleUserAccount : GSF.Security.Model.ApplicationRoleUserAccount { }

    [RoutePrefix("api/MiMD/ApplicationRoleUserAccount")]
    public class MiMDApplicationRoleUserAccountController : ModelController<ApplicationRoleUserAccount>
    {

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

    [GetRoles("Administrator"), SettingsCategory("securityProvider")]
    public class ApplicationRole : GSF.Security.Model.ApplicationRole { }

    [RoutePrefix("api/MiMD/ApplicationRole")]
    public class MiMDApplicationRoleController : ModelController<ApplicationRole> {}

    [RoutePrefix("api/MiMD/AdditionalUserField")]
    public class AdditionalUserFieldController : ModelController<AdditionalUserField> { }

    [RoutePrefix("api/MiMD/AdditionalUserFieldValue")]
    public class AdditionalUserFieldValueController : ModelController<AdditionalUserFieldValue>
    {

        [HttpPatch, Route("Array")]
        public IHttpActionResult PatchValues([FromBody] IEnumerable<AdditionalUserFieldValue> values)
        {
            try
            {
                if (User.IsInRole(PatchRoles))
                {

                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        foreach (AdditionalUserFieldValue value in values)
                        {
                            new TableOperations<AdditionalUserFieldValue>(connection).AddNewOrUpdateRecord(value);
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