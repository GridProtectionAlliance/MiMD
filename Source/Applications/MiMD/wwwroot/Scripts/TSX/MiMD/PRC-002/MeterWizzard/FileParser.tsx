﻿//******************************************************************************************************
//  FileParser.tsx - Gbtc
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
//  02/02/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
import { PRC002 } from '../ComplianceModels';

export function ParseINI(evt: React.ChangeEvent<HTMLInputElement>, complete: (data: PRC002.IConfigField[]) => void) {

    var f = evt.target.files[0];
    let results = [];
    if (f) {

        var r = new FileReader();
        r.onload = (e) => {
            let contents = e.target.result as string;

            let lines = contents.split(/[\r\n]+/g);
            

            lines.forEach((ln, index) => {
                if (!ln.includes('=')) return;
                let i = ln.indexOf('=');

                if (results.map(item => item.key).includes(ln.substr(0, i)))
                    results.push({ key: ln.substr(0, i) + '-' + index, value: ln.substr(i + 1) })
                else
                    results.push({ key: ln.substr(0, i), value: ln.substr(i + 1) })
            })


            complete(results.map((item, index) => ({
                ID: index,
                BaseConfigId: -1,
                Name: item.key,
                Value: item.value,
                Comparison: '=',
                FieldType: 'string'
            })))
        }
        r.readAsText(f);
    }

}

export function ParsePAR(evt: React.ChangeEvent<HTMLInputElement>, complete: (data: PRC002.IConfigField[]) => void) {

    var f = evt.target.files[0];
    let results: PRC002.IConfigField[] = [];

    if (f) {

        var r = new FileReader();

        const trimChar = (s, charToTrim) => {
            let regExpA = new RegExp(charToTrim + "+$");
            let regExpB = new RegExp("^" + charToTrim + "+");
            let result = s.replace(regExpA, "");
            result = result.replace(regExpB, "");
            return result;
        }

        r.onload = (e) => {
            let contents = e.target.result as string;

            let lines = contents.split(/[\r\n]+/g);
            let newIndex = 1;

            if (lines.length > 0) {
                let i = lines[0].indexOf('=');
                let row = lines[0].substring(0, i);
                let data = lines[0].substring(i + 1).trim().split(',');

                if (data.length > 1) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Station", Value: trimChar(data[1], '"') });
                    newIndex = newIndex + 1;
                }
                if (data.length > 2) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Nominal Frequency", Value: data[2] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 3) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. DC Channels", Value: data[3] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 4) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Analog Channels", Value: data[4] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 5) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Event Channels", Value: data[5] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 6) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Triggers", Value: data[6] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 7) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Shunt Type", Value: data[7] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 8) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "OverWrite old Records", Value: data[8] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 9) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER Channels in PAR", Value: data[9] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 10) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER CHannels that cause DFR Stop", Value: data[10] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 11) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER AutoStop if  #Triggers >", Value: data[11] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 12) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER AutoStop Time Period", Value: data[12] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 13) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER Restore Period", Value: data[13] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 14) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Debounce Time", Value: data[14] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 15) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Prefault", Value: data[15] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 16) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Postfault", Value: data[16] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 17) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Fault Limit", Value: data[17] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 18) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Sampling Frequency", Value: data[18] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 19) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Prefault", Value: data[19] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 20) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Post Fault", Value: data[20] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 21) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Fault", Value: data[21] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 22) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Sampling Frequency", Value: data[22] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 23) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended RMS Cycles/Point", Value: data[23] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 24) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous Recording Samples/Point Freq-RMS-Phase", Value: data[24] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 25) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous Recording Storage Length (Days)", Value: data[25] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 26) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continous Oscillography Storage Length (Days)", Value: data[26] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 27) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Trigger Channels - Auto Stop If # Triggers >", Value: data[27] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 28) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channels Auto Stop Time Period (Minutes)", Value: data[28] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 29) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channels Auto Stop - Restore After (Mins)", Value: data[29] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 30) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channel Auto Stop - Apply to Disturbance Triggers Only (0=no 1=yes)", Value: data[30] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 31) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Rate Oscillography Storage (Days)", Value: data[31] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 32) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# Faults on Disk", Value: data[32] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 33) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Master Chassis", Value: data[33] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 34) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended RMS Include Phase Angle", Value: data[34] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 35) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "EVNOMISS (Do Not Restrict Event Only Trigger)", Value: data[35] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 36) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous PQ Data", Value: data[36] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 37) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "CBA Phase Rotation", Value: data[37] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 38) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# of TW Channels", Value: data[38] });
                    newIndex = newIndex + 1;
                }
            }

            if (lines.length > 1) {
                let i = lines[1].indexOf('=');
                let row = lines[1].substring(0, i);
                let data = lines[1].substring(i + 1).trim().split(',');

                if (data.length > 0) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "RmSetup Chasis Port", Value: data[0] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 1) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "RMSetup Time sync", Value: data[1] });
                    newIndex = newIndex + 1;
                }

                // Missing alarm Mapping
                if (data.length > 3) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "FaultLED ON Duration", Value: data[3] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 4) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Disk Alarm", Value: data[4] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 5) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DNP3 Slave", Value: data[5]
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 6) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DNP3 Master", Value: data[6] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 7) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Report Alarm States as SER", Value: data[7]
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 8) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DSP Temperature Lim", Value: data[8] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 9) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "PMU", Value: data[9] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 10) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Sync loss Delay", Value: data[10] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 11) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# Hours Different to GPS", Value: data[11] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 12) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "#HD/SSD (PC-Health)", Value: data[12] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 13) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Traveling Wave IP Port", Value: data[13] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 14) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Auto DST", Value: data[14] });
                    newIndex = newIndex + 1;
                }


            }

            let i = 2
            while (i < lines.length) {
                let r = lines[i].indexOf('=');
                let row = lines[i].substring(0, r);
                let data = lines[i].substring(r + 1).trim().split(',');

                if (row.startsWith('C')) {
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 1", Value: data[0] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 2", Value: data[1] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 3", Value: data[2] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 4", Value: data[3] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 5", Value: data[4] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 6", Value: data[5] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 7", Value: data[6] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 8", Value: data[7] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 9", Value: data[8] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 9) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 10", Value: data[9] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 10) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 11", Value: data[10] });
                        newIndex = newIndex + 1;
                    }

                    if (data.length > 11) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DSP Address", Value: data[11] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 12) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - EXT1 PPS", Value: data[12] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 13) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ignore", Value: data[13] });
                        newIndex = newIndex + 1;
                    }
                }

                if (row.startsWith('A')) {
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar(data[0],'"') });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Type", Value: data[1] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ratio", Value: data[2] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Full Scale", Value: data[3] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ext/Int shunt", Value: data[4] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Phase", Value: data[5] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P1", Value: data[6] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P2", Value: data[7] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P3", Value: data[8] });
                        newIndex = newIndex + 1;
                    }


                }

                if (row.startsWith('T')) {
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar(data[0], '"') });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Assigned Analog Channel", Value: data[1] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trigger Type", Value: data[2] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trigger Condition", Value: data[3] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Duration", Value: data[4] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Over", Value: data[5] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Under", Value: data[6] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Rate", Value: data[7] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Hysteresis", Value: data[8] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 9) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Priority", Value: data[9] });
                        newIndex = newIndex + 1;
                    }

                    if (data.length > 13) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Disturbance", Value: data[13] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 14) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Minimum RMS", Value: data[14] });
                        newIndex = newIndex + 1;
                    }

                }

                if (row.startsWith('E')) {
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar(data[0], '"') });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - State", Value: data[1] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DFR Start", Value: data[2] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DFR/SER", Value: data[3] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - SER Run", Value: data[4] });
                        newIndex = newIndex + 1;
                    }
                    
                }
            }



            complete(results);
        }


        r.readAsText(f);
    }

}