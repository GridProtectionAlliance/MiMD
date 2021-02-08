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

export function ParseINI(evt: React.ChangeEvent<HTMLInputElement>): PRC002.IConfigField[] {

    var f = evt.target.files[0];
    if (f) {

        var r = new FileReader();
        r.onload = (e) => {
            let contents = e.target.result as string;

            let lines = contents.split(/[\r\n]+/g);
            let results = [];

            lines.forEach((ln, index) => {
                if (!ln.includes('=')) return;
                let i = ln.indexOf('=');

                if (results.map(item => item.key).includes(ln.substr(0, i)))
                    results.push({ key: ln.substr(0, i) + '-' + index, value: ln.substr(i + 1) })
                else
                    results.push({ key: ln.substr(0, i), value: ln.substr(i + 1) })
            })

            return results.map((item, index) => ({
                ID: index,
                BaseConfigId: -1,
                Name: item.key,
                Value: item.value,
                Comparison: '=',
                FieldType: 'string'
            }));
        }
        r.readAsText(f);
    }
    return [];
}