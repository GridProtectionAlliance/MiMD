//******************************************************************************************************
//  ModelBaseController.cs - Gbtc
//
//  Copyright © 2019, Grid Protection Alliance.  All Rights Reserved.
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
//  10/04/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Web.Http;
using GSF.Collections;
using GSF.Data;
using GSF.Data.Model;
using GSF.Identity;
using GSF.Reflection;
using GSF.Web.Security;
using Newtonsoft.Json.Linq;

namespace MiMD.Controllers
{
    [RoutePrefix("api/MiMD/PRC002")]
    public class PRC002Controller: ApiController
    {
        #region [Members ]


        #endregion

      

        #region [ Properties ]
       
        protected virtual string Connection { get; } = "systemSettings";
        protected virtual string GetRoles { get; } = "";
     
        #endregion

        #region [ Http Methods ]
        [HttpGet, Route("GetFiles/{meterId}/{ascending:int}")]
        public virtual IHttpActionResult GetFiles(string meterId, int ascending)
        {
            if (GetRoles == string.Empty || User.IsInRole(GetRoles))
            {
                try
                {
                   
                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        int meterID = int.Parse(meterId);

                        string query = $@"Select 
                                    (
                                        SELECT TOP 1 ID
                                        FROM ConfigFileChanges CFC
                                        WHERE CFC.LastWriteTime = MAX(ConfigFileChanges.LastWriteTime)
										AND CFC.MeterID =ConfigFileChanges. MeterID
										AND CFC.FileName = ConfigFileChanges.FileName
                                    ) AS ID, 
                                    FileName,
                                    (
                                        SELECT TOP 1 Text 
                                        FROM ConfigFileChanges CFC
                                        WHERE CFC.LastWriteTime = MAX(ConfigFileChanges.LastWriteTime)
										AND CFC.MeterID = ConfigFileChanges.MeterID
										AND CFC.FileName = ConfigFileChanges.FileName
                                    ) AS Content
                                    FROM ConfigFileChanges 
                                    WHERE MeterID = (SELECT MeterID FROM ComplianceMeter WHERE ID = {meterID}) GROUP BY FileName, MeterID
                                    ORDER BY FileName {(ascending == 0? "DESC" : "")}";

                        DataTable table = connection.RetrieveData(query, "");


                        return Ok(table);
                    }
                }
                catch (Exception ex)
                {
                    return InternalServerError(ex);
                }       
            }
            else
            {
            return Unauthorized();
            }

        }

        [HttpGet, Route("DowloadFile/{fileId}")]
        public IHttpActionResult DownloadFile(string fileId)
        {
            if (GetRoles == string.Empty || User.IsInRole(GetRoles))
            {
                try
                {
                    using (AdoDataConnection connection = new AdoDataConnection(Connection))
                    {
                        string query = $"Select Text FROM ConfigFileChanges WHERE ID = {int.Parse(fileId)}";

                        string content = connection.ExecuteScalar<string>(query);
                        query = $"Select FileName FROM ConfigFileChanges WHERE ID = {int.Parse(fileId)}";

                        string fileName = connection.ExecuteScalar<string>(query);
                        HttpResponseMessage result = new HttpResponseMessage(System.Net.HttpStatusCode.OK);
                        result.Content = new ByteArrayContent(Encoding.ASCII.GetBytes(content));

                        result.Content.Headers.ContentDisposition =
                            new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment")
                            {
                                FileName = fileName
                            };

                        result.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("text/plain");

                        return ResponseMessage(result);
                    }
                       
                }
                catch (Exception ex)
                {
                    return InternalServerError(ex);
                }
            }
            else
            {
                return Unauthorized();
            }


        }

        #endregion


    }
}