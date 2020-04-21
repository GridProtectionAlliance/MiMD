//*********************************************************************************************************************
// ExtensibleDisturbanceAnalysisEngine.cs
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
// openXDA ("this software") is licensed under BSD 3-Clause license.
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
//  05/16/2012 - J. Ritchie Carroll, Grid Protection Alliance
//       Generated original version of source code.
//  10/02/2014 - Stephen C. Wills, Grid Protection Alliance
//       Adapted from the openFLE project to use the new fault location logic.
//
//*********************************************************************************************************************

using GSF.Annotations;
using GSF.Collections;
using GSF.Configuration;
using GSF.Data;
using GSF.Data.Model;
using GSF.IO;
using GSF.IO.Checksums;
using GSF.Threading;
using log4net;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using MiMD.Configuration;
using MiMD.Model;

namespace MiMD
{
    /// <summary>
    /// Represents an engine that processes power quality data
    /// to determine the locations of faults along power lines.
    /// </summary>
    public class MiMDEngine
    {
        #region [ Members ]


        // Fields
        private string m_dbConnectionString;
        private SystemSettings m_systemSettings;
        #endregion


        #region [ Properties ]
        private bool Stopped { get; set; } = true;

        /// <summary>
        /// Gets the current status of the XDA engine.
        /// </summary>
        public string Status
        {
            get
            {
                SystemSettings systemSettings = m_systemSettings;
                StringBuilder statusBuilder = new StringBuilder();

                statusBuilder.AppendLine("MiMD Status:");
                statusBuilder.AppendLine(new string('=', 50));
                statusBuilder.AppendLine($"       Database Timeout: {systemSettings.DbTimeout} seconds");
                statusBuilder.AppendLine();


                return statusBuilder.ToString().TrimEnd();
            }
        }

        #endregion

        #region [ Methods ]

        /// <summary>
        /// Starts the fault location engine.
        /// </summary>
        public void Start()
        {
            // Get system settings from the database
            ReloadSystemSettings();

            // Reload configuration at startup
            ReloadConfiguration();

            Stopped = false;

        }

        /// <summary>
        /// Reloads system configuration from configuration sources.
        /// </summary>
        public void ReloadConfiguration()
        {
            // If system settings is null,
            // attempt to reload system settings
            if ((object)m_systemSettings == null)
                ReloadSystemSettings();

            // If system settings is still null, give up
            if ((object)m_systemSettings == null)
                return;
        }

        /// <summary>
        /// Reloads system settings from the database.
        /// </summary>
        public void ReloadSystemSettings()
        {
            ConfigurationFile configurationFile;
            CategorizedSettingsElementCollection category;

            // Reload the configuration file
            configurationFile = ConfigurationFile.Current;
            configurationFile.Reload();
            AdoDataConnection.ReloadConfigurationSettings();

            // Retrieve the connection string from the config file
            category = configurationFile.Settings["systemSettings"];
            category.Add("ConnectionString", "Data Source=localhost; Initial Catalog=MiMD; Integrated Security=SSPI", "Defines the connection to the openXDA database.");
            m_dbConnectionString = category["ConnectionString"].Value;
            
            // Load system settings from the database
            m_systemSettings = new SystemSettings(LoadSystemSettings());

        }

        /// <summary>
        /// Stops the fault location engine.
        /// </summary>
        public void Stop()
        {
            try
            {
            }
            finally
            {
                Stopped = true;
            }
        }


        // Loads system settings from the database.
        private string LoadSystemSettings()
        {
            using (AdoDataConnection connection = new AdoDataConnection(m_dbConnectionString, typeof(SqlConnection), typeof(SqlDataAdapter)))
            {
                return LoadSystemSettings(connection);
            }
        }

        // Loads system settings from the database.
        private string LoadSystemSettings(AdoDataConnection connection)
        {
            TableOperations<Setting> settingTable = new TableOperations<Setting>(connection);
            List<Setting> settingList = settingTable.QueryRecords().ToList();

            foreach (IGrouping<string, Setting> grouping in settingList.GroupBy(setting => setting.Name))
            {
                if (grouping.Count() > 1)
                    Log.Warn($"Duplicate record for setting {grouping.Key} detected.");
            }

            // Convert the Setting table to a dictionary
            Dictionary<string, string> settings = settingList
                .DistinctBy(setting => setting.Name)
                .ToDictionary(setting => setting.Name, setting => setting.Value, StringComparer.OrdinalIgnoreCase);

            // Add the database connection string if there is not
            // already one explicitly specified in the Setting table
            if (!settings.ContainsKey("dbConnectionString"))
                settings.Add("dbConnectionString", m_dbConnectionString);

            // Convert dictionary to a connection string and return it
            return SystemSettings.ToConnectionString(settings);
        }

        #endregion

        #region [ Static ]

        // Static Fields
        private static readonly ConnectionStringParser<SettingAttribute, CategoryAttribute> ConnectionStringParser = new ConnectionStringParser<SettingAttribute, CategoryAttribute>();
        private static readonly ILog Log = LogManager.GetLogger(typeof(MiMDEngine));


        // Displays status message to the console - proxy method for service implementation
        [StringFormatMethod("format")]
        private static void OnStatusMessage(string format, params object[] args)
        {
            Log.Info(string.Format(format, args));
        }

        // Displays exception message to the console - proxy method for service implmentation
        private static void OnProcessException(Exception ex)
        {
            Log.Error(ex.Message, ex);
        }

        #endregion
    }
}
