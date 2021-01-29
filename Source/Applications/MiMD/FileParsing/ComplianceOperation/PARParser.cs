//******************************************************************************************************
//  PARParser.cs - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/19/2021 - C. Lackner
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
    public class PARParser : IComplianceOperation
    {
        public Dictionary<string,string> ParseFields(MeterDataSet meterDataSet)
        {
            if (meterDataSet.Type != DataSetType.Config) return new Dictionary<string, string>();

            Dictionary<string, string> result = new Dictionary<string, string>();

            List<string> lines = meterDataSet.Text.Split('\n').ToList();

            if (lines.Count == 0)
                return result;

            // start with Header
            List<string> header = lines[0].Split(',').ToList();
            #region [ Header ]
            if (header.Count > 1)
                result.Add("Station", header[1]);
            if (header.Count > 2)
                result.Add("Nominal Frequency", header[2]);
            if (header.Count > 3)
                result.Add("Num. DC Channels", header[3]);
            if (header.Count > 4)
                result.Add("Num. Analog Channels", header[4]);
            if (header.Count > 5)
                result.Add("Num. Event Channels", header[5]);
            if (header.Count > 6)
                result.Add("Num. Triggers", header[6]);
            if (header.Count > 7)
                result.Add("Shunt Type", header[7]);
            if (header.Count > 8)
                result.Add("OverWrite old Records", header[8]);
            if (header.Count > 9)
                result.Add("SER Channels in PAR", header[9]);
            if (header.Count > 10)
                result.Add("SER CHannels that cause DFR Stop", header[10]);
            if (header.Count > 11)
                result.Add("SER AutoStop if  #Triggers >", header[11]);
            if (header.Count > 12)
                result.Add("SER AutoStop Time Period", header[12]);
            if (header.Count > 13)
                result.Add("SER Restore Period", header[13]);
            if (header.Count > 14)
                result.Add("Debounce Time", header[14]);
            if (header.Count > 15)
                result.Add("Transient Prefault", header[15]);
            if (header.Count > 16)
                result.Add("Transient Postfault", header[16]);
            if (header.Count > 17)
                result.Add("Transient Fault Limit", header[17]);
            if (header.Count > 18)
                result.Add("Transient Sampling Frequency", header[18]);
            if (header.Count > 19)
                result.Add("Extended Prefault", header[19]);
            if (header.Count > 20)
                result.Add("Extended Post Fault", header[20]);
            if (header.Count > 21)
                result.Add("Extended Fault", header[21]);
            if (header.Count > 22)
                result.Add("Extended Sampling Frequency", header[22]);
            if (header.Count > 23)
                result.Add("Extended RMS Cycles/Point", header[23]);
            if (header.Count > 24)
                result.Add("Continuous Recording Samples/Point Freq-RMS-Phase", header[24]);
            if (header.Count > 25)
                result.Add("Continuous Recording Storage Length (Days)", header[25]);
            if (header.Count > 26)
                result.Add("Continous Oscillography Storage Length (Days)", header[26]);
            if (header.Count > 27)
                result.Add("Trigger Channels - Auto Stop If # Triggers >", header[27]);
            if (header.Count > 28)
                result.Add("Triggers Channels Auto Stop Time Period (Minutes)", header[28]);
            if (header.Count > 29)
                result.Add("Triggers Channels Auto Stop - Restore After (Mins)", header[29]);
            if (header.Count > 30)
                result.Add("Triggers Channel Auto Stop - Apply to Disturbance Triggers Only (0=no 1=yes)", header[30]);
            if (header.Count > 31)
                result.Add("Transient Rate Oscillography Storage (Days)", header[31]);
            if (header.Count > 32)
                result.Add("# Faults on Disk", header[32]);
            if (header.Count > 33)
                result.Add("Master Chassis", header[33]);
            if (header.Count > 34)
                result.Add("Extended RMS Include Phase Angle", header[34]);
            if (header.Count > 35)
                result.Add("EVNOMISS (Do Not Restrict Event Only Trigger)", header[35]);
            if (header.Count > 36)
                result.Add("Continuous PQ Data", header[36]);
            if (header.Count > 37)
                result.Add("CBA Phase Rotation", header[37]);
            if (header.Count > 38)
                result.Add("# of TW Channels", header[38]);

            #endregion

            if (lines.Count == 1)
                return result;
            List<string> rmSetup = lines[1].Split(',').ToList();
            if (rmSetup.Count > 0)
                result.Add("RmSetup Chasis Port", rmSetup[0].Substring(rmSetup[0].IndexOf('=')+1));
            if (rmSetup.Count > 1)
                result.Add("RMSetup Time sync", rmSetup[1]);

            // Missing alarm Mapping
            if (rmSetup.Count > 3)
                result.Add("FaultLED ON Duration", rmSetup[3]);
            if (rmSetup.Count > 4)
                result.Add("Disk Alarm", rmSetup[4]);
            if (rmSetup.Count > 5)
                result.Add("DNP3 Slave", rmSetup[5]);
            if (rmSetup.Count > 6)
                result.Add("DNP3 Master", rmSetup[6]);
            if (rmSetup.Count > 7)
                result.Add("Report Alarm States as SER", rmSetup[7]);
            if (rmSetup.Count > 8)
                result.Add("DSP Temperature Lim", rmSetup[8]);
            if (rmSetup.Count > 9)
                result.Add("PMU", rmSetup[9]);
            if (rmSetup.Count > 10)
                result.Add("Sync loss Delay", rmSetup[10]);
            if (rmSetup.Count > 11)
                result.Add("# Hours Different to GPS", rmSetup[11]);
            if (rmSetup.Count > 12)
                result.Add("#HD/SSD (PC-Health)", rmSetup[12]);
            if (rmSetup.Count > 13)
                result.Add("Traveling Wave IP Port", rmSetup[13]);
            if (rmSetup.Count > 14)
                result.Add("Auto DST", rmSetup[14]);
           


            #region [ RMSetup ]

            #endregion

            /*int i = 1;
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
            */
            return result;
        }
    }
}