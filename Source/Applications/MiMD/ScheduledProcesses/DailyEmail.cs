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
using GSF.Xml;
using log4net;
using MiMD.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security;
using System.Web;
using System.Xml.Linq;

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
                //using (AdoDataConnection connection = new AdoDataConnection(connectionString, DBString))
                using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))

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
        #endregion

        #region [ Methods ]

        public void SendAllEmails()
        {
            Log.Info("Running Summary Email Reports ...");

            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                List <SummaryEmail> emails = new TableOperations<SummaryEmail>(connection).QueryRecords().ToList();
                emails.ForEach(item =>
                {
                    try
                    {

                       string xmlData = connection.ExecuteScalar<string>(item.DataSQL).Replace("&amp;","&").Replace("&gt;", ">");
                        
                        xmlData = xmlData.Replace("&lt;", "<");
                        string htmlText = xmlData.ApplyXSLTransform(item.Template);
                        XDocument htmlDocument = XDocument.Parse(htmlText, LoadOptions.PreserveWhitespace);
                        htmlDocument.TransformAll("format", element => element.Format());

                        SendEmail(item.Subject, htmlDocument
                            .ToString(SaveOptions.DisableFormatting)
                            .Replace("&amp;", "&")
                            .Replace("&lt;", "<")
                            .Replace("&gt;", ">"));

                        Log.Info($"Sent email: {item.Subject}");
                    }
                    catch (Exception ex)
                    {
                         Log.Error(ex.Message, ex);
                    }
                });

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