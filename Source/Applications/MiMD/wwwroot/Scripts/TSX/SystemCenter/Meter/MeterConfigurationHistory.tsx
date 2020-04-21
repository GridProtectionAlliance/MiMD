//******************************************************************************************************
//  MeterConfigurationHistory.tsx - Gbtc
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
//  01/28/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { OpenXDA } from '../global';
import { useHistory } from "react-router-dom";

declare var homePath: string;
declare interface MeterConfiguration {
    ID: number,
    Revision: string,
    FilesProcessed: number,
    LastProcessedTime: string
}
function MeterConfigurationHistoryWindow(props: { Meter: OpenXDA.Meter }) {
    const history = useHistory();
    const [meterConfigurations, setMeterConfigurations] = React.useState<Array<MeterConfiguration>>([]);

    React.useEffect(() => {
        getData();
    }, [props.Meter]);

    function getData() {
        getMeterConfigurations();
    }

    function getMeterConfigurations(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/MeterConfiguration/Meter/${props.Meter.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        }).done((data: Array<MeterConfiguration>) => setMeterConfigurations(data));
    }

    function handleSelect(item: MeterConfiguration) {
        history.push({ pathname: `${homePath}index.cshtml`, search: `?name=ConfigurationHistory&MeterKey=${props.Meter.AssetKey}&MeterConfigurationID=${item.ID}`, state: {} })
    }

    return (
            <div className="card" style={{ marginBottom: 10 }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h4>Configuration History:</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div style={{ width: '100%', maxHeight: window.innerHeight - 381, padding: 30, overflowY: 'auto' }}>
                        <table className='table'>
                            <thead>
                                <tr><td>Revision</td><td>Files Processed</td><td>Last Processed Time</td></tr>
                            </thead>
                            <tbody>
                            {meterConfigurations.map((a, i) => <tr key={i} style={{cursor: 'pointer' }} onClick={(e) => handleSelect(a)}><td>{a.Revision}</td><td>{a.FilesProcessed}</td><td>{a.LastProcessedTime}</td></tr>)}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
                
        );
}

export default MeterConfigurationHistoryWindow;