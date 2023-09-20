//******************************************************************************************************
//  ComplianceField.cs - Gbtc
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
using GSF.Web.Model;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Ciloci.Flee;


namespace MiMD.Model
{
    [
        UseEscapedName, TableName("MiMD.ComplianceField"),
        PostRoles("Administrator, Transmission SME, PQ Data Viewer"),
        PatchRoles("Administrator, Transmission SME"),
        DeleteRoles("Administrator, Transmission SME"),

    ]
    public class ComplianceField
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        [ParentKey(typeof(BaseConfig))]
        public int BaseConfigId { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string Description { get; set; }

        /// <summary>
        /// Type of Comparison for this Field
        /// Options are '=', '<','>', '<>', 'IN'
        /// </summary>
        public string Comparison { get; set; }

        /// <summary>
        /// specifies the field Type
        /// Options are string, number, NULL
        /// </summary>
        public string FieldType { get; set; }

        public string Label { get; set; }
        public string Category { get; set; }

        public string PreVal { get; set; }

        #region [methods]

        /// <summary>
        /// Checks if a value satisfies the Condition on this Field
        /// </summary>
        /// <param name="value"> the value that is checked </param>
        /// <returns> whether <see cref="value"/> satisfies the condition </returns>
        public bool Evaluate(string value)
        {
            string dynamicEvaluatedValue;
            ExpressionContext context = new ExpressionContext();
            context.Variables.Clear();

            if (FieldType == "number")
            {
                try
                {
                    return Evaluate(double.Parse(value));
                }
                catch
                {
                    return false;
                }
            }

            try
            {
                IDynamicExpression e = context.CompileDynamic(Value.ToString());
                object dynamicEvaluatedObject = e.Evaluate();
                dynamicEvaluatedValue = dynamicEvaluatedObject.ToString();
            }
            catch
            {
                return false;
            }


            if (Comparison == "=" && dynamicEvaluatedValue == value.Trim())
                return true;

            if (Comparison == "<>" && dynamicEvaluatedValue != value.Trim())
                return true;
            if (Comparison == "IN")
            {
                List<string> checks = dynamicEvaluatedValue.Split(';').ToList();
                return checks.Contains(value.Trim());
            }

            return false;
        }

        /// <summary>
        /// Checks if a value satisfies the Condition on this Field
        /// </summary>
        /// <param name="value"> the value that is checked </param>
        /// <returns> whether <see cref="value"/> sattisfies the condition </returns>
        public bool Evaluate(double value)
        {
            double dynamicEvaluatedValue;
            string dynamicValueString;
            ExpressionContext context = new ExpressionContext();
            context.Variables.Clear();

            if (PreVal != null)
                context.Variables["PreVal"] = double.Parse(PreVal);

            try
            {
                IDynamicExpression e = context.CompileDynamic(Value.ToString());
                object dynamicEvaluatedObject = e.Evaluate();
                dynamicEvaluatedValue = Convert.ToDouble(dynamicEvaluatedObject as IConvertible);
                dynamicValueString = dynamicEvaluatedObject.ToString();
            }
            catch
            {
                return false;
            }

            if (FieldType != "number")
                return false;

            if (Comparison == "IN")
            {
                List<double> checks = dynamicValueString.Split(';').Select(item => double.Parse(item)).ToList();
                if (checks.Contains(value))
                    return true;
                return false;
            }

            if (Comparison == "=" && value == dynamicEvaluatedValue)
                return true;
            if (Comparison == ">" && value > dynamicEvaluatedValue)
                return true;
            if (Comparison == "<" && value < dynamicEvaluatedValue)
                return true;
            if (Comparison == "<>" && value != dynamicEvaluatedValue)
                return true;

            return false;
        }

        /// <summary>
        /// Checks if a value satisfies the Condition on this Field
        /// </summary>
        /// <param name="value"> the value that is checked </param>
        /// <returns> whether <see cref="value"/> sattisfies the condition </returns>
        public bool Evaluate(int value)
        {
            return Evaluate((double)value);
        }

        #endregion
    }

    [RoutePrefix("api/MiMD/PRC002/Field")]
    public class FieldController : ModelController<ComplianceField>
    {
        [HttpPost, Route("Check/{Value}")]
        public virtual IHttpActionResult Check([FromBody] JObject record, string Value)
        {
            try
            {
                using (AdoDataConnection connection = new AdoDataConnection(Connection))
                {
                    ComplianceField newRecord = record.ToObject<ComplianceField>();
                    return Ok(newRecord.Evaluate(Value));
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpGet, Route("AllowChange/{id:int}")]
        public virtual IHttpActionResult AllowChange(int ID)
        {
            try
            {
                using (AdoDataConnection connection = new AdoDataConnection(Connection))
                {
                    int nOpenIssues = connection.ExecuteScalar<int>($@"SELECT COUNT(ID)  AS [Check] 
                        FROM [MiMD.ComplianceRecordView] 
                        WHERE [MiMD.ComplianceRecordView].Status<>(SELECT ID FROM [MiMD.ComplianceState] WHERE [MiMD.ComplianceState].Description = 'In Compliance') AND 
                        {ID} in (SELECT [MiMD.ComplianceRecordFields].FieldId FROM [MiMD.ComplianceRecordFields] WHERE [MiMD.ComplianceRecordFields].RecordId = [MiMD.ComplianceRecordView].ID)");

                    return Ok(nOpenIssues == 0);
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        public override IHttpActionResult Patch([FromBody] ComplianceField record)
        {
            // Creating Dynamic Expression Context and adding PreVal as a variable
            ExpressionContext context = new ExpressionContext();
            context.Variables.Clear();

            if (record.FieldType == "number")
                context.Variables["PreVal"] = double.Parse(record.PreVal);
            else
                context.Variables["PreVal"] = record.PreVal;

            try
            {
                //Evaluating Dynamic Expression
                IDynamicExpression e = context.CompileDynamic(record.Value.ToString().Trim());
                object dynamicEvaluatedValue = e.Evaluate();
                record.Value = dynamicEvaluatedValue.ToString();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            using (AdoDataConnection connection = new AdoDataConnection(Connection))
            {
                // Fetch the current record from the database for comparison
                ComplianceField existingRecord = new TableOperations<ComplianceField>(connection)
                    .QueryRecordWhere("ID = {0}", record.ID);

                if (existingRecord != null && existingRecord.Value != record.Value)
                {
                    record.PreVal = existingRecord.Value;
                }
            }

            // Call the base class's method
            return base.Patch(record);
        }

    }
}