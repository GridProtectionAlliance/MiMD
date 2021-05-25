//******************************************************************************************************
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

            let category = "";

            lines.forEach((ln, index) => {
                if (!ln.includes('=')) {
                    if (ln.includes('[') && ln.includes(']'))
                        category = ln.substr(ln.indexOf('[') + 1, ln.lastIndexOf(']') - ln.indexOf('[') -1)
                    return
                }
                    
                let i = ln.indexOf('=');

                if (results.map(item => item.key).includes(ln.substr(0, i)))
                    results.push({ key: ln.substr(0, i) + '-' + index, value: ln.substr(i + 1), category })
                else
                    results.push({ key: ln.substr(0, i), value: ln.substr(i + 1), category })
            })


            complete(results.map((item, index) => ({
                ID: index,
                BaseConfigId: -1,
                Name: item.key,
                Value: item.value,
                Comparison: '=',
                FieldType: 'string',
                Category: item.category,
                Label: item.key,
                Description: ''
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
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Station", Value: trimChar(data[1], '"'), Label: "Station", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 2) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Nominal Frequency", Value: data[2], Label: "Nominal Frequency", Category: "Header", Description: '0: 50Hz <br> 1: 50Hz' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 3) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. DC Channels", Value: data[3], Label: "Num. DC Channels", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 4) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Analog Channels", Value: data[4], Label: "Num. Analog Channels", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 5) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Event Channels", Value: data[5], Label: "Num. Event Channels", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 6) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Triggers", Value: data[6], Label: "Num. Triggers", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 7) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Shunt Type", Value: data[7], Label: "Shunt Type", Category: "Header", Description: '0: External <br> 1: Internal'});
                    newIndex = newIndex + 1;
                }
                if (data.length > 8) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "OverWrite old Records", Value: data[8], Label: "OverWrite old Records", Category: "Header", Description: '0: No <br> 1: Yes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 9) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER Channels in PAR", Value: data[9], Label: "SER Channels in PAR", Category: "Header", Description: '# of event channels that are set to record to SER' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 10) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER CHannels that cause DFR Stop", Value: data[10], Label: "SER CHannels that cause DFR Stop", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 11) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER AutoStop if  #Triggers >", Value: data[11], Label: "SER AutoStop if  #Triggers >", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 12) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER AutoStop Time Period", Value: data[12], Label: "SER AutoStop Time Period", Category: "Header", Description: 'in Minutes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 13) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER Restore Period", Value: data[13], Label: "SER Restore Period", Category: "Header", Description: 'in Minutes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 14) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Debounce Time", Value: data[14], Label: "Debounce Time", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 15) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Prefault", Value: data[15], Label: "Transient Prefault", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 16) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Postfault", Value: data[16], Label: "Transient Postfault", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 17) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Fault Limit", Value: data[17], Label: "Transient Fault Limit", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 18) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Sampling Frequency", Value: data[18], Label: "Transient Sampling Frequency", Category: "Header", Description: ''});
                    newIndex = newIndex + 1;
                }
                if (data.length > 19) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Prefault", Value: data[19], Label: "Extended Prefault", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 20) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Post Fault", Value: data[20], Label: "Extended Post Fault", Category: "Header", Description: ''  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 21) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Fault", Value: data[21], Label: "Extended Fault", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 22) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Sampling Frequency", Value: data[22], Label: "Extended Sampling Frequency", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 23) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended RMS Cycles/Point", Value: data[23], Label: "Extended RMS Cycles/Point", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 24) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous Recording Samples/Point Freq-RMS-Phase", Value: data[24], Label: "Continuous Recording Samples/Point Freq-RMS-Phase", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 25) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous Recording Storage Length (Days)", Value: data[25], Label: "Continuous Recording Storage Length", Category: "Header", Description: 'in Days'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 26) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continous Oscillography Storage Length (Days)", Value: data[26], Label: "Continous Oscillography Storage Length", Category: "Header", Description: 'in Days'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 27) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Trigger Channels - Auto Stop If # Triggers >", Value: data[27], Label: "Trigger Channels - Auto Stop If # Triggers >", Category: "Header", Description: ''  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 28) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channels Auto Stop Time Period (Minutes)", Value: data[28], Label: "Triggers Channels Auto Stop Time Period", Category: "Header", Description: 'in Minutes'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 29) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channels Auto Stop - Restore After (Mins)", Value: data[29], Label: "Triggers Channels Auto Stop - Restore After", Category: "Header", Description: 'in Minutes'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 30) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channel Auto Stop - Apply to Disturbance Triggers Only (0=no 1=yes)", Value: data[30], Label: "Triggers Channel Auto Stop", Category: "Header", Description: ' Apply to Disturbance Triggers Only <br> <br> 0: No <br> 1: yes'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 31) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Rate Oscillography Storage (Days)", Value: data[31], Label: "Transient Rate Oscillography Storage", Category: "Header", Description: 'in Days'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 32) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# Faults on Disk", Value: data[32], Label: "# Faults on Disk", Category: "Header", Description: ''  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 33) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Master Chassis", Value: data[33], Label: "Master Chassis", Category: "Header", Description: '0: DC1 <br> 1: DC2 <br> ....'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 34) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended RMS Include Phase Angle", Value: data[34], Label: "Extended RMS Include Phase Angle", Category: "Header", Description: '0: No <br> 1: Yes'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 35) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "EVNOMISS (Do Not Restrict Event Only Trigger)", Value: data[35], Label: "EVNOMISS (Do Not Restrict Event Only Trigger)", Category: "Header", Description: '0: No <br> 1: Yes'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 36) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous PQ Data", Value: data[36], Label: "Continuous PQ Data", Category: "Header", Description: '0: No <br> 1: Yes'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 37) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "CBA Phase Rotation", Value: data[37], Label: "CBA Phase Rotation", Category: "Header", Description: '0: No <br> 1: Yes'  });
                    newIndex = newIndex + 1;
                }
                if (data.length > 38) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# of TW Channels", Value: data[38], Label: "# of TW Channels", Category: "Header", Description: ''  });
                    newIndex = newIndex + 1;
                }
            }

            if (lines.length > 1) {
                let i = lines[1].indexOf('=');
                let row = lines[1].substring(0, i);
                let data = lines[1].substring(i + 1).trim().split(',');

                if (data.length > 0) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "RmSetup Chasis Port", Value: data[0], Label: "Chasis Port", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 1) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "RMSetup Time sync", Value: data[1], Label: "Time sync", Category: 'RMSetup', Description: '0: Modulated <br> 1: Unmodulated <br> 2: SNTP' });
                    newIndex = newIndex + 1;
                }

                // Missing alarm Mapping
                if (data.length > 3) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "FaultLED ON Duration", Value: data[3], Label: "FaultLED ON Duration", Category: 'RMSetup', Description: 'in seconds' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 4) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Disk Alarm", Value: data[4], Label: "Disk Alarm", Category: 'RMSetup', Description: 'in MB'});
                    newIndex = newIndex + 1;
                }
                if (data.length > 5) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DNP3 Slave", Value: data[5], Label: "DNP3 Slave", Category: 'RMSetup', Description: ''
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 6) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DNP3 Master", Value: data[6], Label: "DNP3 Master", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 7) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Report Alarm States as SER", Value: data[7], Label: "Report Alarm States as SER", Category: 'RMSetup', Description: ''
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 8) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DSP Temperature Lim", Value: data[8], Label: "DSP Temperature Lim", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 9) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "PMU", Value: data[9], Label: "PMU", Category: 'RMSetup', Description: '0: Disabled <br> 1: Enabled' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 10) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Sync loss Delay", Value: data[10], Label: "Sync loss Delay", Category: 'RMSetup', Description: 'in Minutes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 11) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# Hours Different to GPS", Value: data[11], Label: "# Hours Different to GPS", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 12) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "#HD/SSD (PC-Health)", Value: data[12], Label: "#HD/SSD (PC-Health)", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 13) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Traveling Wave IP Port", Value: data[13], Label: "Traveling Wave IP Port", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 14) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Auto DST", Value: data[14], Label: "Auto DST", Category: 'RMSetup', Description: '0: No <br> 1: Yes' });
                    newIndex = newIndex + 1;
                }


            }

            let i = 2
            while (i < lines.length) {
                let r = lines[i].indexOf('=');
                let row = lines[i].substring(0, r);
                let data = lines[i].substring(r + 1).trim().split(',');
                let Category = row;

                if (row.startsWith('C')) {
                    Category = "Chasis " + Category;
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 1", Value: data[0], Category, Label: 'Slot 1', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 2", Value: data[1], Category, Label: 'Slot 2', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 3", Value: data[2], Category, Label: 'Slot 3', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 4", Value: data[3], Category, Label: 'Slot 4', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 5", Value: data[4], Category, Label: 'Slot 5', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 6", Value: data[5], Category, Label: 'Slot 6', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 7", Value: data[6], Category, Label: 'Slot 7', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 8", Value: data[7], Category, Label: 'Slot 8', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 9", Value: data[8], Category, Label: 'Slot 9', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 9) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 10", Value: data[9], Category, Label: 'Slot 10', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 10) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 11", Value: data[10], Category, Label: 'Slot 11', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }

                    if (data.length > 11) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DSP Address", Value: data[11], Category, Label: 'DSP Address', Description: ''});
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 12) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - EXT1 PPS", Value: data[12], Category, Label: 'EST1 PPS', Description: '0: No <br> 1: Yes' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 13) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ignore", Value: data[13], Category, Label: 'Ignore', Description: '0: No <br> 1: Yes' });
                        newIndex = newIndex + 1;
                    }
                }

                if (row.startsWith('A')) {
                    Category = "Analog " + Category;
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar(data[0], '"'), Category, Label: 'Name', Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Type", Value: data[1], Category, Label: 'Type', Description: ''});
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ratio", Value: data[2], Category, Label: 'Ratio', Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Full Scale", Value: data[3], Category, Label: 'Full Scale', Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ext/Int shunt", Value: data[4], Category, Label: 'Ext/Int shunt', Description: '0: External <br> 1: Internal' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Phase", Value: data[5], Category, Label: 'Phase', Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P1", Value: data[6], Category, Label: 'Virtual Channel Assignment P1', Description: '-1: Wired <br> 0+: offset (e.g. 17: A18)' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P2", Value: data[7], Category, Label: 'Virtual Channel Assignment P2', Description: '-1: Wired <br> 0+: offset (e.g. 17: A18)' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P3", Value: data[8], Category, Label: 'Virtual Channel Assignment P3', Description: '-1: Wired <br> 0+: offset (e.g. 17: A18)' });
                        newIndex = newIndex + 1;
                    }


                }

                if (row.startsWith('T')) {
                    Category = "Trigger " + Category
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar(data[0], '"'), Category, Label: "Name", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Assigned Analog Channel", Value: data[1], Category, Label: "Analog Channel", Description: '0: A1 <br> 1: a2 <br> ...' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trigger Type", Value: data[2], Category, Label: "Type", Description: '0: Disabled <br> 1: RMS <br> 2: Hz Step <br> 3: 0 Sequence <br> 4: + Sequence <br> 5: - Sequence <br> 6: HD <br> 7: THD <br> 8: 1P-W <br> 9: 1P-Vr <br> 10: 1P-PF <br> 11: 3P-W <br> 12: 3P-Vr <br> 13: 3P-PF <br> 14: Impulse <br> 15: Unbalance <br> 16: Flicker <br> 17: Hz <br> 18: Hz Sign <br> 19: Gen-W <br> 20: Gen Vr <br> 21: Gen-PF <br> 22: Magnitude' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trigger Condition", Value: data[3], Category, Label: "Condition", Description: '0: Over <br> 1: Under <br> 2: Both <br>' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Duration", Value: data[4], Category, Label: "Duration", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Over", Value: data[5], Category, Label: "Trip on over", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Under", Value: data[6], Category, Label: "Trip on under", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Rate", Value: data[7], Category, Label: "Trip on rate", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Hysteresis", Value: data[8], Category, Label: "Hysteresis", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 9) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Priority", Value: data[9], Category, Label: "Priority", Description: '0: No <br> 1: Yes' });
                        newIndex = newIndex + 1;
                    }

                    if (data.length > 13) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Disturbance", Value: data[13], Category, Label: "Disturbance", Description: '0: No <br> 1: Yes' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 14) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Minimum RMS", Value: data[14], Category, Label: "Min RMS", Description: 'For HZ Step, Harmonic and certain other Triggers <br> Trigger disabled if Value < Min RMS' });
                        newIndex = newIndex + 1;
                    }

                }

                if (row.startsWith('E')) {
                    Category = "Event Channel" + Category
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar(data[0], '"'), Category, Label: "Name", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - State", Value: data[1], Category, Label: "State", Description: 'o: Open <br> c: Close' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DFR Start", Value: data[2], Category, Label: "DFR Start", Description: 'i: INhibited <br> u: Up <br> d: Down <br> b: Both <br> Capital Letters indicate Priority Trigger' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DFR/SER", Value: data[3], Category, Label: "DFR/SER", Description: 'B: Both <br> D: DFR <br> S: SER' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - SER Run", Value: data[4], Category, Label: "SER Run", Description: 'R: Run <br> S: Stop <br> A: Alarm <br> C: CrossTrigger' });
                        newIndex = newIndex + 1;
                    }
                    
                }
                i = i + 1;
            }



            complete(results);
        }


        r.readAsText(f);
    }

}
