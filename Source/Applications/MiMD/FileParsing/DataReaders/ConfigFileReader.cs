//******************************************************************************************************
//  ConfigFileReader.cs - Gbtc
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
//  04/30/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using MiMD.DataSets;
using System;
using System.IO;

namespace MiMD.FileParsing.DataReaders
{
    public class ConfigFileReader : IDataReader
    {
        public MeterDataSet MeterDataSet { get; private set; }

        public bool CanParse(string filePath, DateTime fileCreationTime)
        {
            return true;
        }

        public void Parse(string meterKey, string filePath)
        {
            string text = File.ReadAllText(filePath);

            MeterDataSet = new MeterDataSet(meterKey, "dbOpenXDA", filePath, text);
            MeterDataSet.Type = DataSetType.Config;
        }
    }
}