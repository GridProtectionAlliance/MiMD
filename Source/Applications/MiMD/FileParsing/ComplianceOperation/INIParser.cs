//******************************************************************************************************
//  INIParser.cs - Gbtc
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
//  12/22/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Text;
using MiMD.DataSets;
using MiMD.Model.System;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace MiMD.FileParsing.ComplianceOperation
{
    public class INIParser : IComplianceOperation
    {
        public Dictionary<string,string> ParseFields(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.Config) return new Dictionary<string, string>();

            Dictionary<string, string> result = new Dictionary<string, string>();

            List<string> lines = meterDataSet.Text.Split('\n').ToList();
            int i = 1;
            foreach (string line in lines)
            {
                if (line.Contains('='))
                {
                    List<string> parts = line.Split('=').ToList();
                    if (result.ContainsKey(parts[0]))
                        result.Add(parts[0] + "-" + i, string.Join("=", parts.Skip(1)));
                    else
                        result.Add(parts[0], string.Join("=", parts.Skip(1)));
                }
                i++;
            }

            return result;
        }
    }
}