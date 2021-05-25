//******************************************************************************************************
//  DBCleanUp.cs - Gbtc
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
using log4net;
using MiMD.Model;
using System;


namespace MiMD.ScheduledProcesses
{
    public class DBCleanUp
    {
        #region [ Member ]
       

        #endregion

        #region [ Constructor ]
        public DBCleanUp(DBCleanupTask task)
        {
            m_task = task;
        }



        #endregion

        #region [ Properties ]
        private DBCleanupTask m_task;
        #endregion

        #region [ Methods ]

        public void Run()
        {
            Log.Info($"Running DataBase Cleanup {m_task.ID}....");

            using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
            {
                
                    try
                    {

                    connection.ExecuteNonQuery(m_task.SQLCommand);
                      
                    Log.Info($"Ran cleanup Task: {m_task.ID}");
                    }
                    catch (Exception ex)
                    {
                         Log.Error(ex.Message, ex);
                    }
            }
        }
     
        
        #endregion

        #region [ Static ]
        private static readonly ILog Log = LogManager.GetLogger(typeof(DailyEmail));


        #endregion

    }
}