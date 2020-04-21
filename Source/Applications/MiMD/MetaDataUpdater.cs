//******************************************************************************************************
//  MetadataUpdater.cs - Gbtc
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
//  02/10/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Identity;
using log4net;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security;
using MiMD.Model.Security;

namespace MiMD
{
    public class MetaDataUpdater
    {
        #region [ Member ]
        public class ChangedUser { 
            public Guid ID { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string UserAccount { get; set; }
            public string OldTitle { get; set; }
            public string NewTitle { get; set; }
            public string OldDepartment { get; set; }
            public string NewDepartment { get; set; }
            public string OldDepartmentNumber { get; set; }
            public string NewDepartmentNumber { get; set; }
        }
        #endregion

        #region [ Constructor ]
        public MetaDataUpdater() {
            try
            {
                using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
                {
                    ConnectionString = connection.Connection.ConnectionString;
                    ChangedUserAccounts = new List<ChangedUser>();
                    FromAddress = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.FromAddress'");
                    EnableSSL = connection.ExecuteScalar<bool>("SELECT Value FROM Setting WHERE Name = 'Email.EnableSSL'");
                    SMTPServer = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.SMTPServer'");
                    AdminAddress = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.AdminAddress'");
                    Username = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.Username'");
                    SecurePassword = connection.ExecuteScalar<SecureString>("SELECT Value FROM Setting WHERE Name = 'Email.Password'");
                    Url = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'MiMD.Url'");
                }
            }
            catch (Exception ex) {
                Log.Error(ex.Message, ex);
            }
        }

        public MetaDataUpdater(string connectionString)
        {
            try
            {
                ConnectionString = connectionString;
                using (AdoDataConnection connection = new AdoDataConnection(connectionString, DBString))
                {
                    ChangedUserAccounts = new List<ChangedUser>();
                    FromAddress = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.FromAddress'");
                    EnableSSL = connection.ExecuteScalar<bool>("SELECT Value FROM Setting WHERE Name = 'Email.EnableSSL'");
                    SMTPServer = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.SMTPServer'");
                    AdminAddress = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.AdminAddress'");
                    Username = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.Username'");
                    SecurePassword = connection.ExecuteScalar<SecureString>("SELECT Value FROM Setting WHERE Name = 'Email.Password'");
                    Url = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'MiMD.Url'");
                }
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message, ex);
            }
        }

        #endregion

        #region [ Properties ]
        private List<ChangedUser> ChangedUserAccounts { get; }
        private string FromAddress { get; set; }
        private bool EnableSSL { get; set; }
        private string SMTPServer { get; set; }
        private string Username { get; set; }
        private SecureString SecurePassword { get; set; }
        private string AdminAddress { get; set; }
        private string Url { get; set; }
        private string ConnectionString { get; set; }
        private const string DBString = "AssemblyName={System.Data, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089}; ConnectionType=System.Data.SqlClient.SqlConnection; AdapterType=System.Data.SqlClient.SqlDataAdapter";
        private string ErrorPath { get; set; }
        #endregion

        #region [ Methods ]
        public void Update()
        {
            using (AdoDataConnection connection = new AdoDataConnection(ConnectionString, DBString))
            {
                IEnumerable<UserAccount> userAccounts = new TableOperations<UserAccount>(connection).QueryRecordsWhere("UseADAuthentication = 1");

                foreach (UserAccount userAccount in userAccounts) {
                    try
                    {
                        string accountName = UserInfo.SIDToAccountName(userAccount.Name);
                        UserInfo userInfo = new UserInfo(accountName);
                        bool changed = false;

                        ChangedUser changedUser = new ChangedUser()
                        {
                            ID = userAccount.ID,
                            FirstName = userAccount.FirstName,
                            LastName = userAccount.LastName,
                            UserAccount = accountName,
                            OldTitle = userAccount.Title,
                            OldDepartment = userAccount.Department,
                            OldDepartmentNumber = userAccount.DepartmentNumber,
                            NewTitle = userAccount.Title,
                            NewDepartment = userAccount.Department,
                            NewDepartmentNumber = userAccount.DepartmentNumber
                        };

                        // update metadata that does not invoke change flag
                        userAccount.Phone = userInfo.Telephone;
                        userAccount.MobilePhone = userInfo.GetUserPropertyValue("mobile");
                        userAccount.FirstName = userInfo.FirstName;
                        userAccount.LastName = userInfo.LastName;
                        userAccount.Email = userInfo.Email;

                        // update metadata that does invoke change flag
                        if (userAccount.Title != userInfo.Title)
                        {
                            userAccount.Title = userInfo.Title;
                            if (userInfo.Title != string.Empty)
                                userAccount.RoleID = connection.ExecuteScalar<int>($"SELECT TOP 1 ID FROM Role WHERE Description LIKE '%{userInfo.Title}%' ");

                            changedUser.NewTitle = userAccount.Title;
                            changed = true;
                        }

                        if (userAccount.Department != userInfo.Department)
                        {
                            userAccount.Department = userInfo.Department;
                            changedUser.NewDepartment = userAccount.Department;
                            changed = true;
                        }

                        string departmentNumber = userInfo.GetUserPropertyValue("departmentnumber");
                        departmentNumber = departmentNumber == string.Empty ? null : departmentNumber;
                        if (userAccount.DepartmentNumber != departmentNumber)
                        {
                            userAccount.DepartmentNumber = departmentNumber;
                            changedUser.NewDepartmentNumber = userAccount.DepartmentNumber;

                            if (userAccount.DepartmentNumber != string.Empty)
                                userAccount.TSCID = connection.ExecuteScalar<int>($"SELECT TOP 1 ID FROM TSC WHERE DepartmentNumber LIKE '{departmentNumber.Substring(0,6)}%' ");
                            changed = true;
                        }

                        new TableOperations<UserAccount>(connection).UpdateRecord(userAccount);

                        if (changed)
                            ChangedUserAccounts.Add(changedUser);
                    }
                    catch (Exception ex) {
                        Log.Error(ex.Message, ex);

                    }
                }

                try
                {
                    if (!ChangedUserAccounts.Any()) return;

                    string tableRows = string.Join("\n", ChangedUserAccounts.Select(cua => $"<tr><td>{cua.FirstName}</td><td>{cua.LastName}</td><td>{cua.OldTitle}</td><td>{cua.NewTitle}</td><td>{cua.OldDepartment}</td><td>{cua.NewDepartment}</td><td>{cua.OldDepartmentNumber}</td><td>{cua.NewDepartmentNumber}</td><td><a href='{Url}/index.cshtml?name=User&UserAccountID={cua.ID}'>Link</a></td></tr>"));

                    string html = @"
                        <html>
                            <style>
                                th, td{
                                    padding: 10px;
                                }
                            </style>
	                        <body>
                                <h2>Attention!!</h2>
                                <p>The following users have either changed jobs or departments since the last verification.</p>
                                <hr/>

		                        <table>
			                        <tr><th>First Name</th><th>Last Name</th><th>Old Title</th><th>New Title</th><th>Old Department</th><th>New Department</th><th>Old Department Number</th><th>New Department Number</th><th>MiMD Page</th></tr>
                                    " + tableRows + @"
                                </table>
	                        </body>
                        </html>
                    ";

                    SendEmail("Active Directory Changes", html);
                }
                catch (Exception ex) {
                    Log.Error(ex.Message, ex);
                }
            }
        }

        private void SendEmail(string subject, string body)
        {
            const int DefaultSMTPPort = 25;

            if (string.IsNullOrEmpty(SMTPServer))
                return;

            string[] smtpServerParts = SMTPServer.Split(':');
            string host = smtpServerParts[0];
            int port;

            if (smtpServerParts.Length <= 1 || !int.TryParse(smtpServerParts[1], out port))
                port = DefaultSMTPPort;

            using (SmtpClient smtpClient = new SmtpClient(host, port))
            using (MailMessage emailMessage = new MailMessage())
            {
                if (!string.IsNullOrEmpty(Username) && (object)SecurePassword != null)
                    smtpClient.Credentials = new NetworkCredential(Username, SecurePassword);

                smtpClient.EnableSsl = EnableSSL;

                emailMessage.From = new MailAddress(FromAddress);
                emailMessage.Subject = subject;
                emailMessage.Body = body;
                emailMessage.IsBodyHtml = true;

                // Add the specified To recipients for the email message
                if (AdminAddress.Contains(","))
                {
                    foreach (string address in AdminAddress.Split(','))
                        emailMessage.To.Add(address);
                }
                else
                    emailMessage.To.Add(AdminAddress);

                // Send the email
                smtpClient.Send(emailMessage);
            }
        }
        #endregion

        #region [ Static ]
        private static readonly ILog Log = LogManager.GetLogger(typeof(MetaDataUpdater));


        #endregion
    }
}