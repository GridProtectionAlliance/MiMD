//******************************************************************************************************
//  DataHub.cs - Gbtc
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using GSF;
using GSF.Data.Model;
using GSF.Identity;
using GSF.Security.Model;
using GSF.Web.Model;
using GSF.Web.Hubs;
using GSF.Web.Security;
using MiMD.Model;
using System.Data;
using GSF.Data;
using System.Threading.Tasks;
using GSF.Collections;
using Microsoft.AspNet.SignalR;

namespace MiMD
{
    [AuthorizeHubRole]
    public class DataHub : RecordOperationsHub<DataHub>
    {
        #region [ Members ]

        // Fields
        #endregion

        #region [ Constructors ]
        public DataHub() : this("systemSettings", Program.Host.LogStatusMessage, Program.Host.LogException){ }

        public DataHub(string settingsCategory, Action<string, UpdateType> logStatusMessage, Action<Exception> logException) : base(settingsCategory ?? "systemSettings", logStatusMessage ?? Program.Host.LogStatusMessage, logException ?? Program.Host.LogException)
        {
        }

        #endregion

        #region [ Properties ]
        #endregion

        #region [ Static ]
        public static void PushQueryPageRecordsCommand()
        {
            GlobalHost.ConnectionManager.GetHubContext<DataHub>().Clients.All.pushQueryPageRecordsCommand();
        }

        #endregion

        #region [ System ] 
        #region [ ValueListGroup Table Operations ]

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueListGroup), RecordOperation.QueryRecordCount)]
        public int QueryValueListGroupCount(string filterText = "%")
        {
            return DataContext.Table<ValueListGroup>().QueryRecordCount(filterText);
        }

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueListGroup), RecordOperation.QueryRecords)]
        public IEnumerable<ValueListGroup> QueryValueListGroups(string sortField, bool ascending, int page, int pageSize, string filterText = "%")
        {
            return DataContext.Table<ValueListGroup>().QueryRecords(sortField, ascending, page, pageSize, filterText);
        }

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueListGroup), RecordOperation.DeleteRecord)]
        public void DeleteValueListGroup(int id)
        {
            DataContext.Table<ValueListGroup>().DeleteRecord(id);
        }

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueListGroup), RecordOperation.CreateNewRecord)]
        public ValueListGroup NewValueListGroup()
        {
            return new ValueListGroup();
        }

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueListGroup), RecordOperation.AddNewRecord)]
        public void AddNewValueListGroup(ValueListGroup record)
        {
            DataContext.Table<ValueListGroup>().AddNewRecord(record);
        }

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueListGroup), RecordOperation.UpdateRecord)]
        public void UpdateValueListGroup(ValueListGroup record)
        {
            DataContext.Table<ValueListGroup>().UpdateRecord(record);
        }

        #endregion

        #region [ ValueList Table Operations ]


        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueList), RecordOperation.QueryRecordCount)]
        public int QueryValueListCount(int parentID, string filterText = "%")
        {
            return DataContext.Table<ValueList>().QueryRecordCount(new RecordRestriction("GroupID = {0}", parentID));
        }

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueList), RecordOperation.QueryRecords)]
        public IEnumerable<ValueList> QueryValueListItems(int parentID, string sortField, bool ascending, int page, int pageSize, string filterText = "%")
        {
            return DataContext.Table<ValueList>().QueryRecords(sortField, ascending, page, pageSize, new RecordRestriction("GroupID = {0}", parentID));
        }

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueList), RecordOperation.DeleteRecord)]
        public void DeleteValueList(int id)
        {
            DataContext.Table<ValueList>().DeleteRecord(id);
        }

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueList), RecordOperation.CreateNewRecord)]
        public ValueList NewValueList()
        {
            return new ValueList();
        }

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueList), RecordOperation.AddNewRecord)]
        public void AddNewValueList(ValueList record)
        {
            DataContext.Table<ValueList>().AddNewRecord(record);
        }

        [AuthorizeHubRole("Administrator")]
        [RecordOperation(typeof(ValueList), RecordOperation.UpdateRecord)]
        public void UpdateValueList(ValueList record)
        {
            DataContext.Table<ValueList>().UpdateRecord(record);
        }

        #endregion

        #endregion

        #region [ Home ]
        #endregion

        #region [ Settings ]
        #endregion

        #region [ Miscellaneous Hub Operations ]

        /// <summary>
        /// Gets UserAccount table ID for current user.
        /// </summary>
        /// <returns>UserAccount.ID for current user.</returns>
        public Guid GetCurrentUserID()
        {
            Guid userID;
            AuthorizationCache.UserIDs.TryGetValue(Thread.CurrentPrincipal.Identity.Name, out userID);
            return userID;
        }

        /// <summary>
        /// Gets the users for a specific role filtered using primeui autocomplete
        /// </summary>
        /// <param name="role">Role that you want users from</param>
        /// <param name="searchText">primeui search text</param>
        /// <param name="limit">number of users to return, -1 is default and returns all</param>
        /// <returns>IENumerable of ID Labels used with primeui autocomplete</returns>

        public IEnumerable<IDLabel> SearchUsers(string role, string searchText, int limit = -1)
        {

            RecordRestriction restriction = new RecordRestriction("ID IN (SELECT UserAccountID FROM ApplicationRoleUserAccount WHERE ApplicationRoleUserAccount.ApplicationRoleID IN (SELECT ID FROM ApplicationRole WHERE Name = {0}))", role);
            if (limit < 1)
                return DataContext
                    .Table<UserAccount>()
                    .QueryRecords(restriction: restriction)
                    .Select(record =>
                    {
                        record.Name = UserInfo.SIDToAccountName(record.Name ?? "");
                        return record;
                    })
                    .Where(record => record.Name?.ToLower().Contains(searchText.ToLower()) ?? false)
                    .Select(record => IDLabel.Create(record.ID.ToString(), record.Name));

            return DataContext
                .Table<UserAccount>()
                .QueryRecords(restriction: restriction)
                .Select(record =>
                {
                    record.Name = UserInfo.SIDToAccountName(record.Name ?? "");
                    return record;
                })
                .Where(record => record.Name?.ToLower().Contains(searchText.ToLower()) ?? false)
                .Take(limit)
                .Select(record => IDLabel.Create(record.ID.ToString(), record.Name));

        }

        private DataTable GetPagedQuery(DataContext dataContext, string query, string sortField, bool ascending, int page, int pageSize, params object[] parameters)
        {
            List<object> list = new List<object>() { page, sortField };
            list.AddRange(parameters.AsEnumerable());
            DataTable table = new DataTable();

            using (IDbCommand sc = dataContext.Connection.Connection.CreateCommand())
            {
                int num = 0;
                List<string> paramNames = new List<string>();
                foreach (object o in parameters)
                {
                    IDbDataParameter param = sc.CreateParameter();
                    param.ParameterName = "@p" + num.ToString();
                    paramNames.Add("@p" + num.ToString());
                    param.Value = o;
                    sc.Parameters.Add(param);
                    ++num;
                }
                query = string.Format(query, paramNames.ToArray());

                sc.CommandText = @"
                -- Determine the first record and last record 
                WITH TempResult as
                (
                " + query +
                @"
                ), 
                TempResult2 AS
                (
	                SELECT ROW_NUMBER() OVER(ORDER BY " + $"[{sortField}] {(ascending ? "ASC" : "DESC")}" + @") as RowNum, * FROM TempResult
                )
                SELECT top (@LastRec-1) *
                FROM TempResult2
                WHERE RowNum > @FirstRec 
                AND RowNum < @LastRec
                ";
                sc.CommandType = CommandType.Text;
                sc.CommandTimeout = 600;
                IDbDataParameter param1 = sc.CreateParameter();
                param1.ParameterName = "@FirstRec";
                param1.Value = (page - 1) * pageSize;
                IDbDataParameter param2 = sc.CreateParameter();
                param2.ParameterName = "@LastRec";
                param2.Value = page * pageSize + 1;

                sc.Parameters.Add(param1);
                sc.Parameters.Add(param2);


                IDataReader rdr = sc.ExecuteReader();
                table.Load(rdr);


            }

            return table;
        }

        private int GetPagedQueryCount(DataContext dataContext, string query, params object[] parameters)
        {
            return dataContext.Connection.RetrieveData(query, parameters).Select().Count();
        }

        private IDbDataParameter ToDateTime2(AdoDataConnection connection, DateTime dateTime)
        {
            using (IDbCommand command = connection.Connection.CreateCommand())
            {
                IDbDataParameter parameter = command.CreateParameter();
                parameter.DbType = DbType.DateTime2;
                parameter.Value = dateTime;
                return parameter;
            }
        }

        #endregion

        #region [ Stored Procedure Operations ]

        private void UniversalCascadeDelete(string tableName, string criterion)
        {

            using (IDbCommand sc = DataContext.Connection.Connection.CreateCommand())
            {

                sc.CommandText = "DECLARE @context VARBINARY(128)\n SELECT @context = CONVERT(VARBINARY(128), CONVERT(VARCHAR(128), @userName))\n SET CONTEXT_INFO @context";
                IDbDataParameter param = sc.CreateParameter();
                param.ParameterName = "@userName";
                param.Value = Thread.CurrentPrincipal.Identity.Name;
                sc.Parameters.Add(param);
                sc.ExecuteNonQuery();
                sc.Parameters.Clear();


                sc.CommandText = "dbo.UniversalCascadeDelete";
                sc.CommandType = CommandType.StoredProcedure;
                IDbDataParameter param1 = sc.CreateParameter();
                param1.ParameterName = "@tableName";
                param1.Value = tableName;
                IDbDataParameter param2 = sc.CreateParameter();
                param2.ParameterName = "@baseCriteria";
                param2.Value = criterion;
                sc.Parameters.Add(param1);
                sc.Parameters.Add(param2);
                sc.ExecuteNonQuery();
            }
        }

        #endregion

    }
}