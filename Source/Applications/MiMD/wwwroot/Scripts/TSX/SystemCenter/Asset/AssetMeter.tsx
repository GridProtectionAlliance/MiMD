//******************************************************************************************************
//  LocationMeter.tsx - Gbtc
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
//  01/21/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { OpenXDA } from '../global';
import Table from '../CommonComponents/Table';
import { useHistory } from "react-router-dom";

declare var homePath: string;

function AssetMeterWindow(props: { Asset: OpenXDA.Asset }): JSX.Element{
    let history = useHistory();
    const [meters, setMeters] = React.useState<Array<OpenXDA.Meter>>([]);
    const [sortField, setSortField] = React.useState<keyof(OpenXDA.Meter)>('AssetKey');
    const [ascending, setAscending] = React.useState<boolean>(true);

    React.useEffect(() => {
        getMeters();
    }, [props.Asset]);

    function getMeters(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Asset/${props.Asset.ID}/Meters`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(meters => setMeters(meters));
    }

    function handleSelect(item) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Meter&MeterID=' + item.row.ID, state: {} })
    }

    return (
        <div className="card" style={{ marginBottom: 10 }}>
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        <h4>Meters:</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div style={{ width: '100%', maxHeight: window.innerHeight - 381, padding: 30, overflowY: 'auto' }}>
                    <Table<OpenXDA.Meter>
                        cols={[
                            { key: 'AssetKey', label: 'Key', headerStyle: { width: '30%' }, rowStyle: { width: '30%' } },
                            { key: 'Name', label: 'Name', headerStyle: { width: '30%' }, rowStyle: { width: '30%' } },
                            //{ key: 'Type', label: 'Type', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            { key: 'Make', label: 'Meters', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            { key: 'Model', label: 'Assets', headerStyle: { width: 'calc(10%)' }, rowStyle: { width: '10%' } },
                        ]}
                        tableClass="table table-hover"
                        data={meters}
                        sortField={sortField}
                        ascending={ascending}
                        onSort={(d) => {
                            if (d.col == sortField) {
                                var ordered = _.orderBy(meters, [d.col], [(!ascending ? "asc" : "desc")]);
                                setAscending(!ascending);
                                setMeters(ordered);
                            }
                            else {
                                var ordered = _.orderBy(meters, [d.col], ["asc"]);
                                setAscending(!ascending);
                                setMeters(ordered);
                                setSortField(d.col);
                            }
                        }}
                        onClick={handleSelect}
                        //theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        //tbodyStyle={{ display: 'block', overflowY: 'auto', maxHeight: window.innerHeight - 182, width: '100%' }}
                        //rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        selected={() => false}
                    />

                </div>
            </div>
            <div className="card-footer">
            </div>
        </div>
                
    );

}

export default AssetMeterWindow;