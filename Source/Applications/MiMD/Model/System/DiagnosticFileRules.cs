//******************************************************************************************************
//  DiagnosticFileRules.cs - Gbtc
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
//  10/16/2023 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************


using GSF.Data.Model;
using GSF.Web.Model;
using System.Web.Http;
using Ciloci.Flee;
using System.Collections.Generic;
using System.Globalization;
using System.Text.RegularExpressions;
using System;
using System.Linq;


namespace MiMD.Model.System
{
    [UseEscapedName, TableName("MiMD.DiagnosticFileRules")]
    public class DiagnosticFileRules
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string FilePattern { get; set; }
        public string Field { get; set; }
        public string RegexPattern { get; set; }
        public string Text { get; set; }
        public int Severity { get; set; }
        public bool ReverseRule { get; set; }
        public string SQLQuery { get; set; }
        public int? AdditionalFieldID { get; set; }
    }

    [RoutePrefix("api/MiMD/DiagnosticFileRules")]
    public class DiagnosticFileRulesController : ModelController<DiagnosticFileRules> { }

    public class DiagnosticRecord
    {
        public DateTime Time { get; set; } 
        public string Line { get; set; } 
        public int AlarmSeverity { get; set; }
    }

    public static class Evaluator
    {
        public static (string, object[]) ParseQuery(DiagnosticFileRules rule, DiagnosticFileChanges curRecord, Dictionary<string, string> keyValuePairs)
        {
            Dictionary<string, int> placeholderIndices = new Dictionary<string, int>();

            string finalQuery = Regex.Replace(rule.SQLQuery, @"\{.*?\}", match =>
            {
                string placeholder = match.Value;
                if (!placeholderIndices.ContainsKey(placeholder))
                {
                    placeholderIndices[placeholder] = placeholderIndices.Count;
                }
                return $"{{{placeholderIndices[placeholder]}}}";
            });

            // placeholders in order of appearance
            List<string> placeholders = placeholderIndices.Keys.ToList();
            List<object> sqlParameters = placeholders.Select(placeholder => GetValueForPlaceholder(placeholder.Trim('{', '}').Replace("\r\n", " ").Replace("\n", " "), curRecord, keyValuePairs)).ToList();
            finalQuery = finalQuery.Replace("\r\n", " ").Replace("\n", " ");
            return (finalQuery, sqlParameters.Select(param => param).ToArray());
        }

        public static object GetValueForPlaceholder(string expression, DiagnosticFileChanges curRecord, Dictionary<string, string> keyValuePairs)
        {
            ExpressionContext context = new ExpressionContext(curRecord);

            context.Variables["variables"] = keyValuePairs;
            context.Imports.AddType(typeof(DateTime));
            context.Imports.AddType(typeof(TimeZoneInfo));
            context.Imports.AddType(typeof(CultureInfo));

            IDynamicExpression e = context.CompileDynamic(expression);
            object expressionRes = e.Evaluate();

            if (expressionRes is bool)
                expressionRes = Convert.ToInt32(expressionRes);

            return expressionRes;
        }
    }

}