﻿//******************************************************************************************************
//  ComplianceFieldValue.cs - Gbtc
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
//  09/16/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using MiMD.Controllers;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MiMD.Model
{
    [TableName("ComplianceFieldValue")]
    public class ComplianceFieldValue
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public int ActionId { get; set; }
        public int FieldId { get; set; }
        public string Value { get; set; }

    }

    [TableName("ComplianceFieldValueView")]
    public class ComplianceFieldValueView
    {
        public int FieldId { get; set; }
        public string Value { get; set; }
        public string FieldName { get; set; }
        public int RecordId { get; set; }

        [NonRecordField]
        public bool Valid { get; set; }

    }

    [RoutePrefix("api/MiMD/PRC002/FieldValue")]
    public class FieldValueController : ModelController<ComplianceFieldValueView>
    {
        protected override string PostRoles { get; } = "Administrator, Transmission SME, PQ Data Viewer";
        protected override string PatchRoles { get; } = "Administrator, Transmission SME";
        protected override string DeleteRoles { get; } = "Administrator, Transmission SME";
        protected override bool HasParent { get; } = true;
        protected override string ParentKey { get; } = "RecordId";
        public override IHttpActionResult Post([FromBody] JObject record)
        {
            return Unauthorized();
        }

        [HttpGet, Route("{parentID}/{sort}/{ascending:int}")]
        public virtual IHttpActionResult Get(string parentID, string sort, int ascending)
        {
            if (GetRoles == string.Empty || User.IsInRole(GetRoles))
            {
                using (AdoDataConnection connection = new AdoDataConnection(Connection))
                {
                    string orderByExpression = GetOrderByExpression;

                    if (sort != null && sort != string.Empty)
                        orderByExpression = $"{sort} {(ascending == 1 ? "ASC" : "DESC")}";

                    try
                    {
                        List<ComplianceFieldValueView> result;
                        if (parentID != null)
                            result = new TableOperations<ComplianceFieldValueView>(connection).QueryRecords(orderByExpression, new RecordRestriction("RecordId = {0}", int.Parse(parentID))).ToList();
                        else
                            result = new TableOperations<ComplianceFieldValueView>(connection).QueryRecords(orderByExpression).ToList();

                        TableOperations<ComplianceField> fldTbl = new TableOperations<ComplianceField>(connection);
                        result.ForEach(item =>
                        {
                            item.Valid = fldTbl.QueryRecordWhere("ID = {0}", item.FieldId).Evaluate(item.Value);
                        });

                        return Ok(result);
                    }
                    catch (Exception ex)
                    {
                        return InternalServerError(ex);
                    }
                }
            }
            else
            {
                return Unauthorized();
            }

        }
       

        [HttpGet, Route("History/{parentID}/{sort}/{ascending:int}")]
        public  IHttpActionResult GetHistory(string parentID, string sort, int ascending)
        {
            if (GetRoles == string.Empty || User.IsInRole(GetRoles))
            {
                using (AdoDataConnection connection = new AdoDataConnection(Connection))
                {
                    string orderByExpression = GetOrderByExpression;

                    if (sort != null && sort != string.Empty)
                        orderByExpression = $"{sort} {(ascending == 1 ? "ASC" : "DESC")}";
                    try
                    {
                        List<ComplianceFieldValue> result;
                        if (parentID != null)
                            result = new TableOperations<ComplianceFieldValue>(connection).QueryRecords(orderByExpression, new RecordRestriction("ActionID = {0}", int.Parse(parentID))).ToList();
                        else
                            result = new TableOperations<ComplianceFieldValue>(connection).QueryRecords(orderByExpression).ToList();

                        TableOperations<ComplianceField> fldTbl = new TableOperations<ComplianceField>(connection);
                        List<ComplianceFieldValueView> transformed = new List<ComplianceFieldValueView>();

                        result.ForEach(item =>
                        {
                            ComplianceField fld = fldTbl.QueryRecordWhere("ID = {0}", item.FieldId);
                            transformed.Add(new ComplianceFieldValueView() {
                                FieldId = fld.ID,
                                RecordId = 0,
                                FieldName = fld.Name,
                                Value = item.Value,
                                Valid = fld.Evaluate(item.Value)
                            });

                        });

                        return Ok(transformed);
                    }
                    catch (Exception ex)
                    {
                        return InternalServerError(ex);
                    }
                }
            }
            else
            {
                return Unauthorized();
            }

        }
        public override IHttpActionResult Delete(ComplianceFieldValueView record)
        {
            return Unauthorized();
        }

    }


}