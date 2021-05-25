//******************************************************************************************************
//  PARParser.tsx - Gbtc
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
//  01/07/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { OpenXDA } from "../TSX/MiMD/global";

export default class PARParser {
    Analogs: Array<OpenXDA.Channel>;
    Digitals: Array<OpenXDA.Channel>;
    Channels: Array<OpenXDA.Channel>;
    constructor(contents: string, meterKey: string) {
        let data = contents.split('\n').map(a => a.split(','));
        let analogCounts = parseInt(data[1][1].slice(0, data[1][1].length - 1));
        let digitalCounts = parseInt(data[1][2].slice(0, data[1][2].length - 1));

        this.Analogs = data.slice(2, analogCounts + 2).map((a: Array<string>) => { return { ID: 0, Meter: meterKey, Asset: '', MeasurementType: this.parseType(a[4]), MeasurementCharacteristic: 'Instantaneous', Phase: this.parsePhase(a[2]), Name: a[1], SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: a[3], Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: a[0] } as OpenXDA.Series } as OpenXDA.Channel });
        this.Digitals = data.slice(2 + analogCounts, 2 + analogCounts + digitalCounts).map((a: Array<string>) => { return { ID: 0, Meter: meterKey, Asset: '', MeasurementType: 'Digital', MeasurementCharacteristic: 'Instantaneous', Phase: this.parsePhase(a[2]), Name: a[1], SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: a[3], Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: a[0] } as OpenXDA.Series } as OpenXDA.Channel })
        this.Channels = this.Analogs.concat(this.Digitals);
    }

    parsePhase(value: string): string {
        if (value.toLowerCase().indexOf('a') >= 0 && value.toLowerCase().indexOf('b') >= 0)
            return 'AB';
        else if (value.toLowerCase().indexOf('b') >= 0 && value.toLowerCase().indexOf('c') >= 0)
            return 'BC';
        else if (value.toLowerCase().indexOf('c') >= 0 && value.toLowerCase().indexOf('a') >= 0)
            return 'CA';
        else if (value.toLowerCase().indexOf('a') >= 0)
            return 'AN';
        else if (value.toLowerCase().indexOf('b') >= 0)
            return 'BN';
        else if (value.toLowerCase().indexOf('c') >= 0)
            return 'CN';
        else if (value.toLowerCase().indexOf('n') >= 0)
            return 'NG';
        else
            return 'None';
    }

    parseType(value: string): string {
        if (value.toLowerCase().indexOf('v') >= 0)
            return 'Voltage';
        else
            return 'Current';
    }

}

