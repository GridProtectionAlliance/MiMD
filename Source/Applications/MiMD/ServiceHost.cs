//*********************************************************************************************************************
// ServiceHost.cs
// Version 1.1 and subsequent releases
//
//  Copyright © 2013, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the Eclipse Public License -v 1.0 (the "License"); you may
//  not use this file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://www.opensource.org/licenses/eclipse-1.0.php
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
// --------------------------------------------------------------------------------------------------------------------
//
// Version 1.0
//
// Copyright 2012 ELECTRIC POWER RESEARCH INSTITUTE, INC. All rights reserved.
//
// MiMD ("this software") is licensed under BSD 3-Clause license.
//
// Redistribution and use in source and binary forms, with or without modification, are permitted provided that the 
// following conditions are met:
//
// •    Redistributions of source code must retain the above copyright  notice, this list of conditions and 
//      the following disclaimer.
//
// •    Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
//      the following disclaimer in the documentation and/or other materials provided with the distribution.
//
// •    Neither the name of the Electric Power Research Institute, Inc. (“EPRI”) nor the names of its contributors 
//      may be used to endorse or promote products derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
// DISCLAIMED. IN NO EVENT SHALL EPRI BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL 
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; 
// OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, 
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
// POSSIBILITY OF SUCH DAMAGE.
//
//
// This software incorporates work covered by the following copyright and permission notice: 
//
// •    TVA Code Library 4.0.4.3 - Tennessee Valley Authority, tvainfo@tva.gov
//      No copyright is claimed pursuant to 17 USC § 105. All Other Rights Reserved.
//
//      Licensed under TVA Custom License based on NASA Open Source Agreement (TVA Custom NOSA); 
//      you may not use TVA Code Library except in compliance with the TVA Custom NOSA. You may  
//      obtain a copy of the TVA Custom NOSA at http://tvacodelibrary.codeplex.com/license.
//
//      TVA Code Library is provided by the copyright holders and contributors "as is" and any express 
//      or implied warranties, including, but not limited to, the implied warranties of merchantability 
//      and fitness for a particular purpose are disclaimed.
//
//*********************************************************************************************************************
//
//  Code Modification History:
//  -------------------------------------------------------------------------------------------------------------------
//  09/10/2012 - Stephen C. Wills, Grid Protection Alliance
//       Generated original version of source code.
//
//*********************************************************************************************************************

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Security.Principal;
using System.ServiceProcess;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using GSF;
using GSF.Collections;
using GSF.Configuration;
using GSF.Console;
using GSF.Data;
using GSF.Data.Model;
using GSF.Identity;
using GSF.IO;
using GSF.Reflection;
using GSF.Security;
using GSF.Security.Model;
using GSF.ServiceProcess;
using GSF.Web.Hosting;
using GSF.Web.Model;
using GSF.Web.Security;
using log4net.Appender;
using log4net.Config;
using log4net.Layout;
using Microsoft.Owin.Hosting;
using MiMD.Logging;
using System.Security;
using System.Net;
using MiMD.Model;
using MiMD.Configuration;
using MiMD.ScheduledProcesses;

namespace MiMD
{
    public partial class ServiceHost : ServiceBase
    {
        #region [ Members ]

        // Events

        /// <summary>
        /// Raised when there is a new status message reported to service.
        /// </summary>
        public event EventHandler<EventArgs<Guid, string, UpdateType>> UpdatedStatus;

        /// <summary>
        /// Raised when there is a new exception logged to service.
        /// </summary>
        public event EventHandler<EventArgs<Exception>> LoggedException;

        // Fields
        private ServiceMonitors m_serviceMonitors;
        private Thread m_startEngineThread;
        private bool m_serviceStopping;
        private IDisposable m_webAppHost;
        private bool m_disposed;
        private MiMDEngine m_miMDEngine;
        #endregion

        #region [ Constructors ]

        public ServiceHost()
        {
            // Make sure default service settings exist
            ConfigurationFile configFile = ConfigurationFile.Current;
            CategorizedSettingsElementCollection systemSettings = configFile.Settings["systemSettings"];
            systemSettings.Add("DefaultCulture", "en-US", "Default culture to use for language, country/region and calendar formats.");

            // Attempt to set default culture
            string defaultCulture = systemSettings["DefaultCulture"].ValueAs("en-US");
            CultureInfo.DefaultThreadCurrentCulture = CultureInfo.CreateSpecificCulture(defaultCulture);     // Defaults for date formatting, etc.
            CultureInfo.DefaultThreadCurrentUICulture = CultureInfo.CreateSpecificCulture(defaultCulture);   // Culture for resource strings, etc.

            InitializeComponent();

            // Register event handlers.
            m_serviceHelper.ServiceStarted += ServiceHelper_ServiceStarted;
            m_serviceHelper.ServiceStopping += ServiceHelper_ServiceStopping;
        }

        public ServiceHost(IContainer container)
            : this()
        {
            if (container != null)
                container.Add(this);
        }

        #endregion

        #region [ Properties ]

        /// <summary>
        /// Gets the configured default web page for the application.
        /// </summary>
        public string DefaultWebPage
        {
            get;
            private set;
        }

        /// <summary>
        /// Gets the model used for the application.
        /// </summary>
        public AppModel Model
        {
            get;
            private set;
        }

        /// <summary>
        /// Gets current performance statistics.
        /// </summary>
        public string PerformanceStatistics => m_miMDEngine.Status;
        #endregion

        #region [ Methods ]

        private void WebServer_StatusMessage(object sender, EventArgs<string> e)
        {
            DisplayStatusMessage(e.Argument, UpdateType.Information);
        }

        private void ServiceHelper_ServiceStarted(object sender, EventArgs e)
        {
            ServiceHelperAppender serviceHelperAppender;
            RollingFileAppender debugLogAppender;

            TaskScheduler.UnobservedTaskException += TaskScheduler_UnobservedTaskException;

            // Set current working directory to fix relative paths
            Directory.SetCurrentDirectory(FilePath.GetAbsolutePath(""));

            // Set up logging
            serviceHelperAppender = new ServiceHelperAppender(m_serviceHelper);

            debugLogAppender = new RollingFileAppender();
            debugLogAppender.StaticLogFileName = false;
            debugLogAppender.AppendToFile = true;
            debugLogAppender.RollingStyle = RollingFileAppender.RollingMode.Composite;
            debugLogAppender.MaxSizeRollBackups = 10;
            debugLogAppender.PreserveLogFileNameExtension = true;
            debugLogAppender.MaximumFileSize = "1MB";
            debugLogAppender.Layout = new PatternLayout("%date [%thread] %-5level %logger - %message%newline");

            try
            {
                if (!Directory.Exists("Debug"))
                    Directory.CreateDirectory("Debug");

                debugLogAppender.File = @"Debug\MiMD.log";
            }
            catch (Exception ex)
            {
                debugLogAppender.File = "MiMD.log";
                m_serviceHelper.ErrorLogger.Log(ex);
            }

            debugLogAppender.ActivateOptions();
            BasicConfigurator.Configure(serviceHelperAppender, debugLogAppender);

            // Set up heartbeat and client request handlers
            m_serviceHelper.AddScheduledProcess(ServiceHeartbeatHandler, "ServiceHeartbeat", "* * * * *");
            m_serviceHelper.AddScheduledProcess(ReloadConfigurationHandler, "ReloadConfiguration", "0 0 * * *");

            string emailSchedule;
            List<DBCleanupTask> cleanupSchedules;

            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                emailSchedule = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'Email.SummaryEmailSchedule'") ?? "0 7 * * *";
                cleanupSchedules = (new TableOperations<DBCleanupTask>(connection)).QueryRecords().ToList();
            }

            m_serviceHelper.AddScheduledProcess(DailyEmailHandler, "DailyEmail", emailSchedule);
            cleanupSchedules.ForEach(task => m_serviceHelper.AddScheduledProcess(DBCleanUpHandler, $"Cleanup-{task.ID}",new object[] { task }, task.Schedule));

            m_serviceHelper.ClientRequestHandlers.Add(new ClientRequestHandler("ReloadSystemSettings", "Reloads system settings from the database", ReloadSystemSettingsRequestHandler));
            m_serviceHelper.ClientRequestHandlers.Add(new ClientRequestHandler("EngineStatus", "Displays status information about the XDA engine", EngineStatusHandler));
            m_serviceHelper.ClientRequestHandlers.Add(new ClientRequestHandler("MsgServiceMonitors", "Sends a message to all service monitors", MsgServiceMonitorsRequestHandler));
            m_serviceHelper.ClientRequestHandlers.Add(new ClientRequestHandler("TweakFileProcessor", "Modifies the behavior of the file processor at runtime", TweakFileProcessorHandler));

            m_serviceHelper.UpdatedStatus += UpdatedStatusHandler;
            m_serviceHelper.LoggedException += LoggedExceptionHandler;

            // Set up adapter loader to load service monitors
            m_serviceMonitors = new ServiceMonitors();
            m_serviceMonitors.AdapterCreated += ServiceMonitors_AdapterCreated;
            m_serviceMonitors.AdapterLoaded += ServiceMonitors_AdapterLoaded;
            m_serviceMonitors.AdapterUnloaded += ServiceMonitors_AdapterUnloaded;
            m_serviceMonitors.AdapterLoadException += (obj, args) => HandleException(args.Argument);
            m_serviceMonitors.Initialize();

            string systemSettingsConnectionString = LoadSystemSettings();

            // Set up the system center engine
            m_miMDEngine = new MiMDEngine();

            // Set up separate thread to start the engine
            m_startEngineThread = new Thread(() =>
            {
                const int RetryDelay = 1000;
                const int SleepTime = 200;
                const int LoopCount = RetryDelay / SleepTime;

                bool engineStarted = false;
                bool webUIStarted = false;

                while (true)
                {
                    engineStarted = engineStarted || TryStartEngine();
                    webUIStarted = webUIStarted || TryStartWebUI();

                    if (engineStarted && webUIStarted)
                        break;

                    for (int i = 0; i < LoopCount; i++)
                    {
                        if (m_serviceStopping)
                            return;

                        Thread.Sleep(SleepTime);
                    }
                }
            });

            m_startEngineThread.Start();
        }

        private void ServiceHelper_ServiceStopping(object sender, EventArgs e)
        {
            if (!m_disposed)
            {
                try
                {
                   m_webAppHost?.Dispose();
                }
                finally
                {
                    m_disposed = true;          // Prevent duplicate dispose.
                    base.Dispose();    // Call base class Dispose().
                }
            }

            // If the start engine thread is still
            // running, wait for it to stop
            m_serviceStopping = true;
            m_startEngineThread.Join();
            m_serviceHelper.UpdatedStatus -= UpdatedStatusHandler;
            m_serviceHelper.LoggedException -= LoggedExceptionHandler;

            // Dispose of adapter loader for service monitors
            m_serviceMonitors.AdapterLoaded -= ServiceMonitors_AdapterLoaded;
            m_serviceMonitors.AdapterUnloaded -= ServiceMonitors_AdapterUnloaded;
            m_serviceMonitors.Dispose();

            // Dispose of the analysis engine
            m_miMDEngine.Stop();


            // Save updated settings to the configuration file
            ConfigurationFile.Current.Save();

            Dispose();
        }

        // Attempts to start the engine and logs startup errors.
        private bool TryStartEngine()
        {
            try
            {
                // Start the analysis engine
                m_miMDEngine.Start();
                return true;
            }
            catch (Exception ex)
            {
                string message;

                // Stop the analysis engine
                m_miMDEngine.Stop();

                // Log the exception
                message = "Failed to start MiMD engine due to exception: " + ex.Message;
                HandleException(new InvalidOperationException(message, ex));

                return false;
            }
        }



        // Attempts to start the web UI and logs startup errors.
        private bool TryStartWebUI()
        {
            // Define set of default anonymous web resources for this site
            const string DefaultAnonymousResourceExpression = "^/@|^/Scripts/|^/Content/|^/Images/|^/fonts/|^/favicon.ico$";
            const string DefaultAuthFailureRedirectResourceExpression = AuthenticationOptions.DefaultAuthFailureRedirectResourceExpression + "|^/grafana(?!/api/).*$";

            try
            {
                ConfigurationFile.Current.Reload();
                AdoDataConnection.ReloadConfigurationSettings();

                CategorizedSettingsElementCollection systemSettings = ConfigurationFile.Current.Settings["systemSettings"];
                CategorizedSettingsElementCollection securityProvider = ConfigurationFile.Current.Settings["securityProvider"];

                systemSettings.Add("DataProviderString", "AssemblyName={System.Data, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089}; ConnectionType=System.Data.SqlClient.SqlConnection; AdapterType=System.Data.SqlClient.SqlDataAdapter", "Configuration database ADO.NET data provider assembly type creation string used when ConfigurationType=Database");
                systemSettings.Add("NodeID", "00000000-0000-0000-0000-000000000000", "Unique Node ID");
                systemSettings.Add("CompanyName", "Grid Protection Alliance", "The name of the company who owns this instance of the MiMD.");
                systemSettings.Add("CompanyAcronym", "GPA", "The acronym representing the company who owns this instance of the MiMD.");
                systemSettings.Add("WebHostURL", "http://+:8989", "The web hosting URL for remote system management.");
                systemSettings.Add("DefaultWebPage", "index.cshtml", "The default web page for the hosted web server.");
                systemSettings.Add("DateFormat", "MM/dd/yyyy", "The default date format to use when rendering timestamps.");
                systemSettings.Add("TimeFormat", "HH:mm.ss.fff", "The default time format to use when rendering timestamps.");
                systemSettings.Add("BootstrapTheme", "Content/bootstrap.min.css", "Path to Bootstrap CSS to use for rendering styles.");

                systemSettings.Add("AuthenticationSchemes", AuthenticationOptions.DefaultAuthenticationSchemes, "Comma separated list of authentication schemes to use for clients accessing the hosted web server, e.g., Basic or NTLM.");
                systemSettings.Add("AuthFailureRedirectResourceExpression", DefaultAuthFailureRedirectResourceExpression, "Expression that will match paths for the resources on the web server that should redirect to the LoginPage when authentication fails.");
                systemSettings.Add("AnonymousResourceExpression", DefaultAnonymousResourceExpression, "Expression that will match paths for the resources on the web server that can be provided without checking credentials.");
                systemSettings.Add("AuthenticationToken", SessionHandler.DefaultAuthenticationToken, "Defines the token used for identifying the authentication token in cookie headers.");
                systemSettings.Add("SessionToken", SessionHandler.DefaultSessionToken, "Defines the token used for identifying the session ID in cookie headers.");
                systemSettings.Add("RequestVerificationToken", AuthenticationOptions.DefaultRequestVerificationToken, "Defines the token used for anti-forgery verification in HTTP request headers.");
                systemSettings.Add("LoginPage", AuthenticationOptions.DefaultLoginPage, "Defines the login page used for redirects on authentication failure. Expects forward slash prefix.");
                systemSettings.Add("AuthTestPage", AuthenticationOptions.DefaultAuthTestPage, "Defines the page name for the web server to test if a user is authenticated. Expects forward slash prefix.");
                systemSettings.Add("Realm", "", "Case-sensitive identifier that defines the protection space for the web based authentication and is used to indicate a scope of protection.");
                systemSettings.Add("ConfigurationCachePath", string.Format("{0}{1}ConfigurationCache{1}", FilePath.GetAbsolutePath(""), Path.DirectorySeparatorChar), "Defines the path used to cache serialized configurations");

                securityProvider.Add("ConnectionString", "Eval(systemSettings.ConnectionString)", "Connection connection string to be used for connection to the backend security datastore.");
                securityProvider.Add("DataProviderString", "Eval(systemSettings.DataProviderString)", "Configuration database ADO.NET data provider assembly type creation string to be used for connection to the backend security datastore.");

                using (AdoDataConnection connection = new AdoDataConnection("securityProvider"))
                {
                    ValidateAccountsAndGroups(connection);
                }

                DefaultWebPage = systemSettings["DefaultWebPage"].Value;

                Model = new AppModel();
                Model.Global.CompanyName = systemSettings["CompanyName"].Value;
                Model.Global.CompanyAcronym = systemSettings["CompanyAcronym"].Value;
                Model.Global.ApplicationName = "MiMD";
                Model.Global.ApplicationDescription = "open eXtensible Disturbance Analytics";
                Model.Global.ApplicationKeywords = "open source, utility, software, meter, interrogation";
                Model.Global.DateFormat = systemSettings["DateFormat"].Value;
                Model.Global.TimeFormat = systemSettings["TimeFormat"].Value;
                Model.Global.DateTimeFormat = $"{Model.Global.DateFormat} {Model.Global.TimeFormat}";
                Model.Global.BootstrapTheme = systemSettings["BootstrapTheme"].Value;

                // Attach to default web server events
                WebServer webServer = WebServer.Default;
                webServer.StatusMessage += WebServer_StatusMessage;

                // Define types for Razor pages - self-hosted web service does not use view controllers so
                // we must define configuration types for all paged view model based Razor views here:
                webServer.PagedViewModelTypes.TryAdd("Users.cshtml", new Tuple<Type, Type>(typeof(UserAccount), typeof(SecurityHub)));
                webServer.PagedViewModelTypes.TryAdd("Groups.cshtml", new Tuple<Type, Type>(typeof(SecurityGroup), typeof(SecurityHub)));
                webServer.PagedViewModelTypes.TryAdd("ValueListGroups.cshtml", new Tuple<Type, Type>(typeof(ValueListGroup), typeof(DataHub)));
                webServer.PagedViewModelTypes.TryAdd("ValueListItems.cshtml", new Tuple<Type, Type>(typeof(ValueList), typeof(DataHub)));
                //webServer.PagedViewModelTypes.TryAdd("RemoteConsole.cshtml", new Tuple<Type, Type>(typeof(PQViewSite), typeof(DataHub)));

                // Parse configured authentication schemes
                if (!Enum.TryParse(systemSettings["AuthenticationSchemes"].ValueAs(AuthenticationOptions.DefaultAuthenticationSchemes.ToString()), true, out AuthenticationSchemes authenticationSchemes))
                    authenticationSchemes = AuthenticationOptions.DefaultAuthenticationSchemes;

                // Initialize web startup configuration
                Startup.AuthenticationOptions.AuthenticationSchemes = authenticationSchemes;
                Startup.AuthenticationOptions.AuthFailureRedirectResourceExpression = systemSettings["AuthFailureRedirectResourceExpression"].ValueAs(DefaultAuthFailureRedirectResourceExpression);
                Startup.AuthenticationOptions.AnonymousResourceExpression = systemSettings["AnonymousResourceExpression"].ValueAs(DefaultAnonymousResourceExpression);
                Startup.AuthenticationOptions.AuthenticationToken = systemSettings["AuthenticationToken"].ValueAs(SessionHandler.DefaultAuthenticationToken);
                Startup.AuthenticationOptions.SessionToken = systemSettings["SessionToken"].ValueAs(SessionHandler.DefaultSessionToken);
                Startup.AuthenticationOptions.RequestVerificationToken = systemSettings["RequestVerificationToken"].ValueAs(AuthenticationOptions.DefaultRequestVerificationToken);
                Startup.AuthenticationOptions.LoginPage = systemSettings["LoginPage"].ValueAs(AuthenticationOptions.DefaultLoginPage);
                Startup.AuthenticationOptions.AuthTestPage = systemSettings["AuthTestPage"].ValueAs(AuthenticationOptions.DefaultAuthTestPage);
                Startup.AuthenticationOptions.Realm = systemSettings["Realm"].ValueAs("");
                Startup.AuthenticationOptions.LoginHeader = $"<h3><img src=\"/Images/{Model.Global.ApplicationName}.png\"/> {Model.Global.ApplicationName}</h3>";

                // Validate that configured authentication test page does not evaluate as an anonymous resource nor a authentication failure redirection resource
                string authTestPage = Startup.AuthenticationOptions.AuthTestPage;

                if (Startup.AuthenticationOptions.IsAnonymousResource(authTestPage))
                    throw new SecurityException($"The configured authentication test page \"{authTestPage}\" evaluates as an anonymous resource. Modify \"AnonymousResourceExpression\" setting so that authorization test page is not a match.");

                if (Startup.AuthenticationOptions.IsAuthFailureRedirectResource(authTestPage))
                    throw new SecurityException($"The configured authentication test page \"{authTestPage}\" evaluates as an authentication failure redirection resource. Modify \"AuthFailureRedirectResourceExpression\" setting so that authorization test page is not a match.");

                if (Startup.AuthenticationOptions.AuthenticationToken == Startup.AuthenticationOptions.SessionToken)
                    throw new InvalidOperationException("Authentication token must be different from session token in order to differentiate the cookie values in the HTTP headers.");


                // Create new web application hosting environment
                m_webAppHost = WebApp.Start<Startup>(systemSettings["WebHostURL"].Value);

                // Initiate pre-compile of base templates
                if (AssemblyInfo.EntryAssembly.Debuggable)
                {
                    RazorEngine<CSharpDebug>.Default.PreCompile(HandleException);
                    RazorEngine<VisualBasicDebug>.Default.PreCompile(HandleException);
                }
                else
                {
                    RazorEngine<CSharp>.Default.PreCompile(HandleException);
                    RazorEngine<VisualBasic>.Default.PreCompile(HandleException);
                }

                return true;
            }
            catch (TargetInvocationException ex)
            {
                string message;

                // Log the exception
                message = "Failed to start web UI due to exception: " + ex.InnerException.Message;
                HandleException(new InvalidOperationException(message, ex));

                return false;
            }
            catch (Exception ex)
            {
                string message;

                // Log the exception
                message = "Failed to start web UI due to exception: " + ex.Message;
                HandleException(new InvalidOperationException(message, ex));

                return false;
            }
        }

        private void ServiceHeartbeatHandler(string s, object[] args)
        {
            // Go through all service monitors to notify of the heartbeat
            foreach (IServiceMonitor serviceMonitor in m_serviceMonitors.Adapters)
            {
                try
                {
                    // If the service monitor is enabled, notify it of the heartbeat
                    if (serviceMonitor.Enabled)
                        serviceMonitor.HandleServiceHeartbeat();
                }
                catch (Exception ex)
                {
                    // Handle each service monitor's exceptions individually
                    HandleException(ex);
                }
            }
        }

        private void ReloadConfigurationHandler(string s, object[] args)
        {
            m_miMDEngine.ReloadConfiguration();

            using (AdoDataConnection connection = new AdoDataConnection("securityProvider"))
            {
                ValidateAccountsAndGroups(connection);
            }
        }

        // Reloads system settings from the database.
        private void ReloadSystemSettingsRequestHandler(ClientRequestInfo requestInfo)
        {
            string connectionString = LoadSystemSettings();

            m_miMDEngine.ReloadSystemSettings();

            SendResponse(requestInfo, true);
        }

        // Reloads system settings from the database.
        private void OnReloadSystemSettingsRequestHandler()
        {
            m_miMDEngine.ReloadSystemSettings();
            LogStatusMessage("Reload system settings complete...");
        }


        // Displays status information about the XDA engine.
        private void EngineStatusHandler(ClientRequestInfo requestInfo)
        {
            if (m_miMDEngine != null)
                DisplayResponseMessage(requestInfo, m_miMDEngine.Status);
            else
                SendResponseWithAttachment(requestInfo, false, null, "Engine is not ready.");
        }


        // Modifies the behavior of the file processor at runtime.
        private void TweakFileProcessorHandler(ClientRequestInfo requestInfo)
        {
            if (requestInfo.Request.Arguments.ContainsHelpRequest)
            {
                string helpMessage = m_miMDEngine.TweakFileProcessor(new string[] { "-?" });
                DisplayResponseMessage(requestInfo, helpMessage);
                return;
            }

            string[] args = Arguments.ToArgs(requestInfo.Request.Arguments.ToString());
            string message = m_miMDEngine.TweakFileProcessor(args);
            DisplayResponseMessage(requestInfo, message);
        }

        // Send a message to the service monitors on request.
        private void MsgServiceMonitorsRequestHandler(ClientRequestInfo requestInfo)
        {
            Arguments arguments = requestInfo.Request.Arguments;

            if (arguments.ContainsHelpRequest)
            {
                StringBuilder helpMessage = new StringBuilder();

                helpMessage.Append("Sends a message to all service monitors.");
                helpMessage.AppendLine();
                helpMessage.AppendLine();
                helpMessage.Append("   Usage:");
                helpMessage.AppendLine();
                helpMessage.Append("       MsgServiceMonitors [Options] [Args...]");
                helpMessage.AppendLine();
                helpMessage.AppendLine();
                helpMessage.Append("   Options:");
                helpMessage.AppendLine();
                helpMessage.Append("       -?".PadRight(20));
                helpMessage.Append("Displays this help message");

                DisplayResponseMessage(requestInfo, helpMessage.ToString());
            }
            else
            {
                string[] args = Enumerable.Range(1, arguments.OrderedArgCount)
                    .Select(arg => arguments[arguments.OrderedArgID + arg])
                    .ToArray();

                // Go through all service monitors and handle the message
                foreach (IServiceMonitor serviceMonitor in m_serviceMonitors.Adapters)
                {
                    try
                    {
                        // If the service monitor is enabled, notify it of the message
                        if (serviceMonitor.Enabled)
                            serviceMonitor.HandleClientMessage(args);
                    }
                    catch (Exception ex)
                    {
                        // Handle each service monitor's exceptions individually
                        HandleException(ex);
                    }
                }

                SendResponse(requestInfo, true);
            }
        }

        private void DailyEmailHandler(string s, object[] args)
        {
            try
            {
                DailyEmail dailyEmail = new DailyEmail();
                dailyEmail.SendAllEmails();
            }
            catch (Exception ex) {
                HandleException(ex);
            }
        }

        private void DBCleanUpHandler(string s, object[] args)
        {
            try
            {
                DBCleanUp task = new DBCleanUp((DBCleanupTask)args[0]);
                task.Run();
            }
            catch (Exception ex)
            {
                HandleException(ex);
            }
        }

        // Send the error to the service helper, error logger, and each service monitor
        public void HandleException(Exception ex)
        {
            string newLines = string.Format("{0}{0}", Environment.NewLine);

            m_serviceHelper.ErrorLogger.Log(ex);
            m_serviceHelper.UpdateStatus(UpdateType.Alarm, "{0}", ex.Message + newLines);

            foreach (IServiceMonitor serviceMonitor in m_serviceMonitors.Adapters)
            {
                try
                {
                    if (serviceMonitor.Enabled)
                        serviceMonitor.HandleServiceError(ex);
                }
                catch (Exception ex2)
                {
                    // Exceptions encountered while handling exceptions can be tricky,
                    // so we just log them rather than risk a recursive loop
                    m_serviceHelper.ErrorLogger.Log(ex2);
                    m_serviceHelper.UpdateStatus(UpdateType.Alarm, ex2.Message + newLines);
                }
            }
        }

        /// <summary>
        /// Validate accounts and groups to ensure that account names and group names are converted to SIDs.
        /// </summary>
        /// <param name="database">Data connection to use for database operations.</param>
        private static void ValidateAccountsAndGroups(AdoDataConnection database)
        {
            const string SelectUserAccountQuery = "SELECT ID, Name, UseADAuthentication FROM UserAccount";
            const string SelectSecurityGroupQuery = "SELECT ID, Name FROM SecurityGroup";
            const string UpdateUserAccountFormat = "UPDATE UserAccount SET Name = '{0}' WHERE ID = '{1}'";
            const string UpdateSecurityGroupFormat = "UPDATE SecurityGroup SET Name = '{0}' WHERE ID = '{1}'";

            string id;
            string sid;
            string accountName;
            Dictionary<string, string> updateMap;

            updateMap = new Dictionary<string, string>();

            // Find user accounts that need to be updated
            using (IDataReader userAccountReader = database.Connection.ExecuteReader(SelectUserAccountQuery))
            {
                while (userAccountReader.Read())
                {
                    id = userAccountReader["ID"].ToNonNullString();
                    accountName = userAccountReader["Name"].ToNonNullString();

                    if (userAccountReader["UseADAuthentication"].ToNonNullString().ParseBoolean())
                    {
                        sid = UserInfo.UserNameToSID(accountName);

                        if (!ReferenceEquals(accountName, sid) && UserInfo.IsUserSID(sid))
                            updateMap.Add(id, sid);
                    }
                }
            }

            // Update user accounts
            foreach (KeyValuePair<string, string> pair in updateMap)
                database.Connection.ExecuteNonQuery(string.Format(UpdateUserAccountFormat, pair.Value, pair.Key));

            updateMap.Clear();

            // Find security groups that need to be updated
            using (IDataReader securityGroupReader = database.Connection.ExecuteReader(SelectSecurityGroupQuery))
            {
                while (securityGroupReader.Read())
                {
                    id = securityGroupReader["ID"].ToNonNullString();
                    accountName = securityGroupReader["Name"].ToNonNullString();

                    if (accountName.Contains('\\'))
                    {
                        sid = UserInfo.GroupNameToSID(accountName);

                        if (!ReferenceEquals(accountName, sid) && UserInfo.IsGroupSID(sid))
                            updateMap.Add(id, sid);
                    }
                }
            }

            // Update security groups
            foreach (KeyValuePair<string, string> pair in updateMap)
                database.Connection.ExecuteNonQuery(string.Format(UpdateSecurityGroupFormat, pair.Value, pair.Key));
        }


        /// <summary>
        /// Logs a status message to connected clients.
        /// </summary>
        /// <param name="message">Message to log.</param>
        /// <param name="type">Type of message to log.</param>
        public void LogStatusMessage(string message, UpdateType type = UpdateType.Information)
        {
            DisplayStatusMessage(message, type);
        }

        /// <summary>
        /// Logs an exception to the service.
        /// </summary>
        /// <param name="ex">Exception to log.</param>
        public void LogException(Exception ex)
        {
            DisplayStatusMessage($"{ex.Message}", UpdateType.Alarm);
        }

        /// <summary>
        /// Displays a broadcast message to all subscribed clients.
        /// </summary>
        /// <param name="status">Status message to send to all clients.</param>
        /// <param name="type"><see cref="UpdateType"/> of message to send.</param>
        protected virtual void DisplayStatusMessage(string status, UpdateType type)
        {
            try
            {
                status = status.Replace("{", "{{").Replace("}", "}}");
                m_serviceHelper.UpdateStatus(type, string.Format("{0}\r\n\r\n", status));
            }
            catch (Exception ex)
            {
                HandleException(ex);
                m_serviceHelper.UpdateStatus(UpdateType.Alarm, "Failed to update client status \"" + status.ToNonNullString() + "\" due to an exception: " + ex.Message + "\r\n\r\n");
            }
        }

        /// <summary>
        /// Sends a command request to the service.
        /// </summary>
        /// <param name="clientID">Client ID of sender.</param>
        /// <param name="principal">The principal used for role-based security.</param>
        /// <param name="userInput">Request string.</param>
        public void SendRequest(Guid clientID, IPrincipal principal, string userInput)
        {
            ClientRequest request = ClientRequest.Parse(userInput);

            if ((object)request == null)
                return;

            if (SecurityProviderUtility.IsResourceSecurable(request.Command) && !SecurityProviderUtility.IsResourceAccessible(request.Command, principal))
            {
                m_serviceHelper.UpdateStatus(clientID, UpdateType.Alarm, $"Access to \"{request.Command}\" is denied.\r\n\r\n");
                return;
            }

            ClientRequestHandler requestHandler = m_serviceHelper.FindClientRequestHandler(request.Command);

            if ((object)requestHandler == null)
            {
                m_serviceHelper.UpdateStatus(clientID, UpdateType.Alarm, $"Command \"{request.Command}\" is not supported.\r\n\r\n");
                return;
            }

            ClientInfo clientInfo = new ClientInfo();
            clientInfo.ClientID = clientID;
            clientInfo.SetClientUser(principal);

            ClientRequestInfo requestInfo = new ClientRequestInfo(clientInfo, request);
            requestHandler.HandlerMethod(requestInfo);
        }

        public void DisconnectClient(Guid clientID)
        {
            m_serviceHelper.DisconnectClient(clientID);
        }

        private void TaskScheduler_UnobservedTaskException(object sender, UnobservedTaskExceptionEventArgs e)
        {
            foreach (Exception ex in e.Exception.Flatten().InnerExceptions)
                HandleException(ex);

            e.SetObserved();
        }

#region [ Service Monitor Handlers ]

        // Ensure that service monitors save their settings to the configuration file
        private void ServiceMonitors_AdapterCreated(object sender, EventArgs<IServiceMonitor> e)
        {
            e.Argument.PersistSettings = true;
        }

        // Display a message when service monitors are loaded
        private void ServiceMonitors_AdapterLoaded(object sender, EventArgs<IServiceMonitor> e)
        {
            m_serviceHelper.UpdateStatusAppendLine(UpdateType.Information, "{0} has been loaded", e.Argument.GetType().Name);
            e.Argument.StatusUpdate += ServiceMonitor_StatusUpdate;
            e.Argument.ExecutionException += ServiceMonitor_ExecutionException;
        }

        // Display a message when service monitors are unloaded
        private void ServiceMonitors_AdapterUnloaded(object sender, EventArgs<IServiceMonitor> e)
        {
            m_serviceHelper.UpdateStatusAppendLine(UpdateType.Information, "{0} has been unloaded", e.Argument.GetType().Name);
        }

        // Handle updates from service monitors.
        private void ServiceMonitor_StatusUpdate(object sender, EventArgs<UpdateType, string> e)
        {
            IServiceMonitor serviceMonitor = sender as IServiceMonitor;

            if (serviceMonitor?.Enabled ?? false)
                DisplayStatusMessage(e.Argument2, e.Argument1);
        }

        // Handle exceptions thrown by service monitors.
        private void ServiceMonitor_ExecutionException(object sender, EventArgs<string, Exception> e)
        {
            IServiceMonitor serviceMonitor = sender as IServiceMonitor;

            if (serviceMonitor?.Enabled ?? false)
            {
                Exception ex = e.Argument2;
                string newLines = string.Format("{0}{0}", Environment.NewLine);
                m_serviceHelper.ErrorLogger.Log(ex);
                m_serviceHelper.UpdateStatus(UpdateType.Alarm, "{0}: {1}", e.Argument1, ex.Message + newLines);
            }
        }

#endregion

#region [ Broadcast Message Handling ]

        /// <summary>
        /// Sends an actionable response to client.
        /// </summary>
        /// <param name="requestInfo"><see cref="ClientRequestInfo"/> instance containing the client request.</param>
        /// <param name="success">Flag that determines if this response to client request was a success.</param>
        protected virtual void SendResponse(ClientRequestInfo requestInfo, bool success)
        {
            SendResponseWithAttachment(requestInfo, success, null, null);
        }

        /// <summary>
        /// Sends an actionable response to client with a formatted message and attachment.
        /// </summary>
        /// <param name="requestInfo"><see cref="ClientRequestInfo"/> instance containing the client request.</param>
        /// <param name="success">Flag that determines if this response to client request was a success.</param>
        /// <param name="attachment">Attachment to send with response.</param>
        /// <param name="status">Formatted status message to send with response.</param>
        /// <param name="args">Arguments of the formatted status message.</param>
        protected virtual void SendResponseWithAttachment(ClientRequestInfo requestInfo, bool success, object attachment, string status, params object[] args)
        {
            try
            {
                // Send actionable response
                m_serviceHelper.SendActionableResponse(requestInfo, success, attachment, status, args);

                // Log details of client request as well as response
                if (m_serviceHelper.LogStatusUpdates && m_serviceHelper.StatusLog.IsOpen)
                {
                    string responseType = requestInfo.Request.Command + (success ? ":Success" : ":Failure");
                    string arguments = requestInfo.Request.Arguments.ToString();
                    string message = responseType + (string.IsNullOrWhiteSpace(arguments) ? "" : "(" + arguments + ")");

                    if (status != null)
                    {
                        if (args.Length == 0)
                            message += " - " + status;
                        else
                            message += " - " + string.Format(status, args);
                    }

                    m_serviceHelper.StatusLog.WriteTimestampedLine(message);
                }
            }
            catch (Exception ex)
            {
                string message = string.Format("Failed to send client response due to an exception: {0}", ex.Message);
                HandleException(new InvalidOperationException(message, ex));
            }
        }

        /// <summary>
        /// Displays a response message to client requestor.
        /// </summary>
        /// <param name="requestInfo"><see cref="ClientRequestInfo"/> instance containing the client request.</param>
        /// <param name="status">Formatted status message to send to client.</param>
        protected virtual void DisplayResponseMessage(ClientRequestInfo requestInfo, string status)
        {
            DisplayResponseMessage(requestInfo, "{0}", status);
        }

        /// <summary>
        /// Displays a response message to client requestor.
        /// </summary>
        /// <param name="requestInfo"><see cref="ClientRequestInfo"/> instance containing the client request.</param>
        /// <param name="status">Formatted status message to send to client.</param>
        /// <param name="args">Arguments of the formatted status message.</param>
        protected virtual void DisplayResponseMessage(ClientRequestInfo requestInfo, string status, params object[] args)
        {
            try
            {
                m_serviceHelper.UpdateStatus(requestInfo.Sender.ClientID, UpdateType.Information, string.Format("{0}{1}{1}", status, Environment.NewLine), args);
            }
            catch (Exception ex)
            {
                string message = string.Format("Failed to update client status \"{0}\" due to an exception: {1}", status.ToNonNullString(), ex.Message);
                HandleException(new InvalidOperationException(message, ex));
            }
        }


        private void UpdatedStatusHandler(object sender, EventArgs<Guid, string, UpdateType> e)
        {
            if ((object)UpdatedStatus != null)
                UpdatedStatus(sender, new EventArgs<Guid, string, UpdateType>(e.Argument1, e.Argument2, e.Argument3));
        }

        private void LoggedExceptionHandler(object sender, EventArgs<Exception> e)
        {
            if ((object)LoggedException != null)
                LoggedException(sender, new EventArgs<Exception>(e.Argument));
        }


#endregion


        // Loads system settings from the database.
        private string LoadSystemSettings()
        {
            using(AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                TableOperations<Setting> settingTable = new TableOperations<Setting>(connection);
                List<Setting> settingList = settingTable.QueryRecords().ToList();

                foreach (IGrouping<string, Setting> grouping in settingList.GroupBy(setting => setting.Name))
                {
                    if (grouping.Count() > 1)
                        DisplayStatusMessage($"Duplicate record for setting {grouping.Key} detected.", UpdateType.Warning);
                }

                // Convert the Setting table to a dictionary
                Dictionary<string, string> settings = settingList
                    .DistinctBy(setting => setting.Name)
                    .ToDictionary(setting => setting.Name, setting => setting.Value, StringComparer.OrdinalIgnoreCase);

                // Convert dictionary to a connection string and return it
                return SystemSettings.ToConnectionString(settings);
            }
        }

#endregion

        #region [ Static ]
                private static readonly ConnectionStringParser<SettingAttribute, CategoryAttribute> ConnectionStringParser = new ConnectionStringParser<SettingAttribute, CategoryAttribute>();
        #endregion
    }
}
