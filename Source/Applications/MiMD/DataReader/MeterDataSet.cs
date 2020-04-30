//******************************************************************************************************
//  MeterDataSet.cs - Gbtc
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
//  05/13/2014 - Stephen C. Wills
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.ComponentModel;
using System.Configuration;
using GSF.Configuration;
using GSF.Data;
using GSF.Data.Model;
using openXDA.Model;

namespace MiMD.DataSets
{
    public class MeterDataSet
    {
        #region [ Constructors ]

        public MeterDataSet()
        {
        }

        public MeterDataSet(string assetKey, string connectionString, string filePath, string text)
        {
            using (AdoDataConnection connection = new AdoDataConnection(connectionString))
            {
                Meter = (new TableOperations<Meter>(connection)).QueryRecordWhere("AssetKey = {0}", assetKey);
                Meter.ConnectionFactory = () => new AdoDataConnection(connectionString);
                CreateDbConnection = () => new AdoDataConnection(connectionString);
                ConnectionString = connectionString;
                FilePath = filePath;
                Text = text;
            }
        }

        #endregion

        #region [ Properties ]

        public Func<AdoDataConnection> CreateDbConnection { get; set; }
        public string ConnectionString { get; set; }
        public string FilePath { get; set; }
        public Meter Meter { get; set; }
        public string Text { get; set; }
        #endregion

        #region [ Methods ]
        #endregion

        #region [ Static ]

        // Static Fields
        private static readonly ConnectionStringParser<SettingAttribute, CategoryAttribute> ConnectionStringParser = new ConnectionStringParser<SettingAttribute, CategoryAttribute>();

        #endregion
    }
}
