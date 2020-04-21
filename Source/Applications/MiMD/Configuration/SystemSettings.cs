//******************************************************************************************************
//  SystemSettings.cs - Gbtc
//
//  Copyright © 2014, Grid Protection Alliance.  All Rights Reserved.
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
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  09/30/2014 - Stephen C. Wills
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.IO;
using System.Linq;
using GSF;
using GSF.Configuration;
using GSF.IO;

namespace MiMD.Configuration
{
    /// <summary>
    /// Represents the system settings for openXDA.
    /// </summary>
    public class SystemSettings
    {
        #region [ Members ]
        #endregion

        #region [ Constructors ]

        /// <summary>
        /// Creates a new instance of the <see cref="SystemSettings"/> class.
        /// </summary>
        /// <param name="connectionString">A string containing the system settings as key-value pairs.</param>
        public SystemSettings(string connectionString)
        {
            ConnectionStringParser<SettingAttribute> parser = new ConnectionStringParser<SettingAttribute>();
            parser.ParseConnectionString(connectionString, this);
        }

        #endregion

        #region [ Properties ]

        /// <summary>
        /// Gets or sets the connection string to the database.
        /// </summary>
        [Setting]
        [DefaultValue("Data Source=localhost; Initial Catalog=MiMD; Integrated Security=SSPI")]
        public string DbConnectionString { get; set; }

        /// <summary>
        /// Gets or sets the amount of time each database
        /// query is given to complete, in seconds.
        /// </summary>
        [Setting]
        [DefaultValue(120)]
        public int DbTimeout { get; set; }

        #endregion

        #region [ Methods ]

        public string ToConnectionString()
        {
            ConnectionStringParser<SettingAttribute> parser = new ConnectionStringParser<SettingAttribute>();
            parser.ExplicitlySpecifyDefaults = true;
            return parser.ComposeConnectionString(this);
        }

        #endregion

        #region [ Static ]

        // Static Fields
        private static readonly SystemSettings DefaultSystemSettings = new SystemSettings(string.Empty);
        private static readonly string DefaultConnectionString = DefaultSystemSettings.ToConnectionString();

        // Static Methods
        public static string ToConnectionString(Dictionary<string, string> settings)
        {
            List<CategorizedSetting> categorizedSettings = settings
                .Select(kvp => new CategorizedSetting(kvp.Key, kvp.Value))
                .ToList();

            string categorizedConnectionString = ToConnectionString(categorizedSettings, 0);

            return Merge(categorizedConnectionString, DefaultConnectionString);
        }

        private static string ToConnectionString(List<CategorizedSetting> settings, int level)
        {
            IEnumerable<string> connectionStrings;

            if (settings.Count == 1)
            {
                if (level < settings[0].Categories.Count)
                    return string.Format("{0}={{{1}}}", settings[0].Categories[level], ToConnectionString(settings, level + 1));

                return settings[0].Value;
            }

            connectionStrings = settings
                .Where(setting => level < setting.Categories.Count)
                .GroupBy(setting => setting.Categories[level])
                .Select(grouping => string.Format("{0}={{{1}}}", grouping.Key, ToConnectionString(grouping.ToList(), level + 1)));

            return string.Join(";", connectionStrings);
        }

        private static string Merge(string primaryConnectionString, string connectionString)
        {
            Dictionary<string, string> primarySettings = primaryConnectionString.ParseKeyValuePairs();
            Dictionary<string, string> settings = connectionString.ParseKeyValuePairs();

            foreach (KeyValuePair<string, string> kvp in primarySettings)
                settings[kvp.Key] = kvp.Value;

            return settings.JoinKeyValuePairs();
        }

        #endregion
    }
}
