//******************************************************************************************************
//  DailyEmail.cs - Gbtc
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
//  05/29/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Identity;
using log4net;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security;
using System.Web;

namespace MiMD.ScheduledProcesses
{
    public class DailyEmail
    {
        #region [ Member ]
        #endregion

        #region [ Constructor ]
        public DailyEmail()
        {
            try
            {
                using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
                {
                    ConnectionString = connection.Connection.ConnectionString;
                    FromAddress = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.FromAddress'");
                    EnableSSL = connection.ExecuteScalar<bool>("SELECT Value FROM Setting WHERE Name = 'Email.EnableSSL'");
                    SMTPServer = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.SMTPServer'");
                    AdminAddress = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.AdminAddress'");
                    Username = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.Username'");
                    SecurePassword = connection.ExecuteScalar<SecureString>("SELECT Value FROM Setting WHERE Name = 'Email.Password'");
                }
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message, ex);
            }
        }

        public DailyEmail(string connectionString)
        {
            try
            {
                ConnectionString = connectionString;
                using (AdoDataConnection connection = new AdoDataConnection(connectionString, DBString))
                {
                    FromAddress = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.FromAddress'");
                    EnableSSL = connection.ExecuteScalar<bool>("SELECT Value FROM Setting WHERE Name = 'Email.EnableSSL'");
                    SMTPServer = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.SMTPServer'");
                    AdminAddress = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.AdminAddress'");
                    Username = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.Username'");
                    SecurePassword = connection.ExecuteScalar<SecureString>("SELECT Value FROM Setting WHERE Name = 'Email.Password'");
                }
            }
            catch (Exception ex)
            {
                Log.Error(ex.Message, ex);
            }
        }

        #endregion

        #region [ Properties ]
        private string FromAddress { get; set; }
        private bool EnableSSL { get; set; }
        private string SMTPServer { get; set; }
        private string Username { get; set; }
        private SecureString SecurePassword { get; set; }
        private string AdminAddress { get; set; }
        private string ConnectionString { get; set; }
        private const string DBString = "AssemblyName={System.Data, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089}; ConnectionType=System.Data.SqlClient.SqlConnection; AdapterType=System.Data.SqlClient.SqlDataAdapter";
        #endregion

        #region [ Methods ]
        public void SendConfigurationChangesEmail()
        {
            Log.Info("Running Daily Configuration Change Email report ...");

            using (AdoDataConnection connection = new AdoDataConnection(ConnectionString, DBString))
            {

                try
                {
                    DataTable configChanges = connection.RetrieveData(@"
                    SELECT
	                    ConfigFileChanges.FileName,
	                    ConfigFileChanges.LastWriteTime,
	                    ConfigFileChanges.Changes,
	                    Meter.AssetKey as Station,
	                    (SELECT Value FROM Setting WHERE Name = 'MiMD.URL') + '/index.cshtml?name=Configuration&MeterID=' + CAST(Meter.ID as varchar(10)) + '&FileName=' + ConfigFileChanges.FileName as URL
                    FROM
	                    ConfigFileChanges JOIN
	                    Meter ON ConfigFileChanges.MeterID = Meter.ID
                    WHERE 
	                    LastWriteTime BETWEEN DATEADD(HOUR, -24, GETDATE()) AND GETDATE() AND ConfigFileChanges.Changes > 0
                ", DateTime.Now);
                    Log.Info($"Config datatable rows: {configChanges.Rows.Count}");

                    string html = "";
                    if (configChanges.Rows.Count == 0)
                    {
                        html = @"
                            <html>
                                <style>
                                    th, td{
                                        padding: 10px;
                                    }
                                </style>
                                 <body>
                                        <h2>Attention!!</h2>
                                        <p>There have been no Configuration files changes in the last 24 hrs.</p>
                                        <hr/>
                                 </body>
                            </html>
                        ";

                    }
                    else {
                        var grouping = configChanges.Select().GroupBy(x => x["Station"]);

                        html = @"
                        <html>
                            <style>
                                th, td{
                                    padding: 10px;
                                }
                            </style>
                             <body>
                                    <h2>Attention!!</h2>
                                    <p>The following Configuration files have changed in the last 24 hrs.</p>
                                    <hr/>
                                  "+ grouping.Select(g => {
                                        string tableRows = string.Join("\n", g.Select(dr => $"<tr><td>{dr["FileName"]}</td><td>{dr["LastWriteTime"]}</td><td>{dr["Changes"]}</td><td><a href='{dr["URL"]}'>Link</a></td></tr>"));

                                        return "<h4>" +g.Key + @"</h4><br/>
                                            
                                          <table>
                                               <tr><th>File</th><th>Time</th><th># of Changes</th><th>URL</th></tr>
                                                " + tableRows + @"
                                            </table>
                                            <br/>
                                          ";
                                  })  + @"

                             </body>
                        </html>
                    ";


                    }
                    Log.Info($"Sending email: {html}");

                    SendEmail("Configuration File Changes", html);
                }
                catch (Exception ex)
                {
                    Log.Error(ex.Message, ex);
                }
            }
        }

        public void SendDiagnosticAlarmsEmail()
        {
            Log.Info("Running Daily Diagnostic Alarm Email report ...");
            using (AdoDataConnection connection = new AdoDataConnection(ConnectionString, DBString))
            {


                try
                {
                    DataTable alarms = connection.RetrieveData(@"
	                SELECT
		                Meter.AssetKey as Station,
		                t.FileName,
                        t.LastWriteTime,
                        t.Alarms,
		                (SELECT Value FROM Setting WHERE Name = 'MiMD.URL') + '/index.cshtml?name=Diagnostic&MeterID=' + CAST(MeterID as varchar(10)) + '&FileName=' + t.FileName as URL
	                FROM(
		                SELECT MeterID, FileName, LastWriteTime, Alarms FROM AppStatusFileChanges UNION
		                SELECT MeterID, FileName, LastWriteTime, Alarms FROM AppTraceFileChanges UNION
		                SELECT MeterID, FileName, LastWriteTime, Alarms FROM EmaxDiagnosticFileChanges
	                ) t JOIN
		                Meter ON t.MeterID = Meter.ID
                    WHERE 
	                    t.LastWriteTime BETWEEN DATEADD(HOUR, -24, GETDATE()) AND GETDATE() AND t.Alarms > 0
                ", "");

                    Log.Info($"Alarm datatable rows: {alarms.Rows.Count}");

                    string html = "";
                    if (alarms.Rows.Count == 0)
                    {
                        html = @"
                            <html>
                                <style>
                                    th, td{
                                        padding: 10px;
                                    }
                                </style>
                                 <body>
                                        <h2>Attention!!</h2>
                                        <p>There have been no Diagnostic file alarms in the last 24 hrs.</p>
                                        <hr/>
                                 </body>
                            </html>
                        ";

                    }
                    else
                    {
                        var grouping = alarms.Select().GroupBy(x => x["Station"]);

                        html = @"
                        <html>
                            <style>
                                th, td{
                                    padding: 10px;
                                }
                            </style>
                             <body>
                                    <h2>Attention!!</h2>
                                    <p>The following Diagnostic files have alarmed in the last 24 hrs.</p>
                                    <hr/>
                                  " + grouping.Select(g => {
                                        string tableRows = string.Join("\n", g.Select(dr => $"<tr><td>{dr["FileName"]}</td><td>{dr["LastWriteTime"]}</td><td>{dr["Alarms"]}</td><td><a href='{dr["URL"]}'>Link</a></td></tr>"));

                                        return "<h4>" + g.Key + @"</h4><br/>
                                            
                                          <table>
                                               <tr><th>File</th><th>Time</th><th># of Alarms</th><th>URL</th></tr>
                                                " + tableRows + @"
                                            </table>
                                          ";
                        }) + @"

                             </body>
                        </html>
                    ";


                    }
                    Log.Info($"Sending email: {html}");

                    SendEmail("Diagnostic File Alarms", html);
                }
                catch (Exception ex)
                {
                    Log.Error(ex.Message, ex);
                }
            }
        }

        private void SendEmail(string subject, string body)
        {
            const int DefaultSMTPPort = 25;

            if (string.IsNullOrEmpty(SMTPServer))
            {
                Log.Error("Email failed to send.  SMTPServer field is either null or empty");
                return;
                
            }

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
        private static readonly ILog Log = LogManager.GetLogger(typeof(DailyEmail));


        #endregion

    }
}