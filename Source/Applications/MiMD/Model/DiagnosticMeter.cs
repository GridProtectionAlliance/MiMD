//******************************************************************************************************
//  DiagnostoicMeter.cs - Gbtc
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
//  05/01/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Threading;
using GSF.Web.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MiMD.Model
{
    [AllowSearch]
    [CustomView(@"
		SELECT
            m.ID as ID,
	        m.AssetKey as Station,
	        m.Make as Make,
            m.Model as Model,
            ValueList.Value AS TSC,
			mfc.LastWriteTime as DateLastChanged,
			mfc.FileName as MaxChangeFileName,
			mfc.LastFaultTime,
			mfc.FaultCount48hr,
			mac.LastWriteTime as AlarmLastChanged,
			mac.Alarms,
			mac.FileName as AlarmFileName 
        FROM
            Meter m LEFT JOIN 
            ValueList ON 
                ValueList.Value = (SELECT TOP 1 Value FROM AdditionalFieldValue WHERE AdditionalFieldID = (
                        SELECT TOP 1 ID FROM AdditionalField WHERE FieldName='TSC' AND ParentTable = 'Meter'
                    ) AND ParentTableID = m.ID) AND 
                ValueList.GroupID = (SELECT ID FROM ValueListGroup WHERE Name = 'TSC') LEFT JOIN
				[MiMD.MaxFileChanges] mfc ON m.ID = mfc.MeterID LEFT JOIN
		        [MiMD.MaxAlarmChanges] mac ON m.ID = mac.MeterID AND mac.RowNum = 1
		WHERE mfc.RowNum = 1
        GROUP BY
            m.ID,
	        m.AssetKey,
	        m.Make,
            m.Model,
            ValueList.Value,
			mfc.LastWriteTime,
			mfc.FileName,
			mfc.LastFaultTime,
			mfc.FaultCount48hr,
			mac.LastWriteTime,
			mac.Alarms,
			mac.FileName
		")]
    public class DiagnosticMeter : ConfigurationMeter 
	{
		public string MaxChangeFileName { get; set; }
		public string LastFaultTime { get; set; }
		public int FaultCount48hr { get; set; }
		public string AlarmLastChanged { get; set; }
		public int Alarms { get; set; }
		public string AlarmFileName { get; set; }
	}
    

    [RoutePrefix("api/OpenXDA/DiagnosticMeter")]
    public class DiagnosticMeterController : ModelController<DiagnosticMeter> { }

}