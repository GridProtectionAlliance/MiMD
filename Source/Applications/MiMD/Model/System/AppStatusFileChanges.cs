//******************************************************************************************************
//  AppStatusFileChanges.cs - Gbtc
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
//  05/06/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data.Model;
using System;

namespace MiMD.Model.System
{
    [TableName("AppStatusFileChanges")]
    public class AppStatusFileChanges : DiagnosticFileChanges
    {
        public int FileSize { get; set; }
        public string Version { get; set; }
        public string DFR { get; set; }
        public DateTime PCTime { get; set; }
        public string TimeMarkSource { get; set; }
        public DateTime TimeMarkTime { get; set; }
        public double DataDriveUsage { get; set; }
        public string DSPBoard { get; set; }
        public string DSPRevision { get; set; }
        public string Packet { get; set; }
        public string Recovery { get; set; }
        public string BoardTemp { get; set; }
        public string SpeedFan { get; set; }
        public string Text { get; set; }
        public string Html { get; set; }
    }
}