//******************************************************************************************************
//  ConfigFileRules.cs - Gbtc
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
//  09/13/2023 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************


using GSF.Data.Model;
using GSF.Web.Model;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Web.Http;
using Ciloci.Flee;
using GSF.Data;
using System.Data;

namespace MiMD.Model.System
{
    [UseEscapedName, TableName("MiMD.ConfigFileRules")]
    public class ConfigFileRules 
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string Pattern { get; set; }
        public string Field { get; set; }
        public string Value { get; set; }
        public string Comparison { get; set; }
        public string FieldType { get; set; }
        public string PreVal { get; set; }
        public int? AdditionalFieldID { get; set; }

        public bool EvaluateRule(string CurValue)
        {
            string dynamicEvaluatedValue;
            ExpressionContext context = new ExpressionContext();
            context.Variables.Clear();

            if (PreVal != null)
                context.Variables["PreVal"] = PreVal.Trim();

            if (FieldType == "number")
            {
                try
                {
                    return EvaluateRule(Convert.ToDouble(CurValue));
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

            if (Comparison == "=" && CurValue.Trim() == dynamicEvaluatedValue)
                return true;
            if (Comparison == "<>" && CurValue.Trim() == dynamicEvaluatedValue)
                return true;
            if (Comparison == "IN")
            {
                List<string> checks = dynamicEvaluatedValue.Split(';').ToList();
                return checks.Contains(CurValue);
            }

            return false;

        }

        public bool EvaluateRule(double CurValue)
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


            if (Comparison == "=" && CurValue == dynamicEvaluatedValue)
                return true;
            if (Comparison == ">" && CurValue > dynamicEvaluatedValue)
                return true;
            if (Comparison == "<" && CurValue < dynamicEvaluatedValue)
                return true;
            if (Comparison == "<>" && CurValue == dynamicEvaluatedValue)
                return true;

            if (Comparison == "IN")
            {
                List<double> checks = dynamicValueString.Split(';').Select(item => double.Parse(item)).ToList();
                if (checks.Contains(CurValue))
                    return true;
                return false;
            }

            return false;

        }
    }

    [RoutePrefix("api/MiMD/ConfigurationFileRules")]
    public class ConfigFileRulesController : ModelController<ConfigFileRules> { }
}