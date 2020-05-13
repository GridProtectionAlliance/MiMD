//******************************************************************************************************
//  ByMeter.tsx - Gbtc
//
//  Copyright © 2019, Grid Protection Alliance.  All Rights Reserved.
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
//  08/22/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { MiMD } from '../global';

type FieldName = 'Station' | 'Model' | 'DateLastChange' | 'TSC';
interface Meter {
    Station: string,
    Model: string, 
    TSC: string,
    DateLastChanged: string
}
interface Search {
    Field: FieldName,
    SearchText: string
}
//interface Meter {
//    ID: number, AssetKey: string, Name: string, Location: string, MappedAssets: number, Make: string, Model: string
//}
declare var homePath: string;

const ByMeter: MiMD.ByComponent = (props) => {
    let history = useHistory();

    const [search, setSearch] = React.useState<Array<Search>>([{ Field: 'Station', SearchText: '' }]);
    const [data, setData] = React.useState<Array<Meter>>([]);
    const [sortField, setSortField] = React.useState<string>('DateLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);

    React.useEffect(() => {
        let handle = getMeters();
        handle.done((data: Array<Meter>) => {
            var ordered = _.orderBy(data, [sortField], [(ascending ? "asc" : "desc")]);

            setData(ordered)
        });
        return function cleanup() {
            if (handle.abort != null)
                handle.abort();
        }
    }, []);

    function getMeters(): JQuery.jqXHR<Array<Meter>> {
        return $.ajax({
            type: "Post",
            url: `${homePath}api/MiMD/Meter/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(search),
            cache: false,
            async: true
        });
    }

    function handleSelect(item) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Meter&MeterID=' + item.row.ID, state: {} })
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ width: '100%' }}>
                    <ul className="navbar-nav mr-auto" style={{ width: '100%' }}>
                        <li className="nav-item" style={{ width: 300, paddingRight: 10 }}>
                            <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                                <legend className="w-auto" style={{ fontSize: 'large' }}>From: </legend>
                                <form>
                                </form>
                            </fieldset>
                        </li>
                        <li className="nav-item" style={{ width: 300, paddingRight: 10 }}>
                            <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                                <legend className="w-auto" style={{ fontSize: 'large' }}>To: </legend>
                                <form>
                                </form>
                            </fieldset>
                        </li>

                        <li className="nav-item" style={{ width: '15%', paddingRight: 10 }}>
                            <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                                <legend className="w-auto" style={{ fontSize: 'large' }}>Filters:</legend>
                                <form>
                                    <div className="form-group">
                                        <button className="btn btn-primary" data-toggle='modal' data-target='#newFilter' onClick={(evt) => evt.preventDefault()}>Add Filter</button>
                                    </div>
                                </form>
                            </fieldset>
                        </li>
                    </ul>
                </div>
            </nav>

            <div style={{ width: '100%', height: 'calc( 100% - 136px)' }}>
                <Table
                    cols={[
                        { key: 'Station', label: 'Station', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Model', label: 'Model', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        { key: 'TSC', label: 'TSC', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        {
                            key: 'DateLastChanged', label: 'Date Last Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key, style) => {
                                if (item[key] == null || item[key] == '') return '';
                                let date = moment(item[key]);
                                let now = moment();
                                let days = now.diff(date, 'days');

                                if (days < 1)
                                    style['backgroundColor'] = 'red';
                                else if (days < 7)
                                    style['backgroundColor'] = 'orange';
                                else if (days < 30)
                                    style['backgroundColor'] = 'yellow';

                                return date.format("MM/DD/YY HH:mm CT")
                            }
                        },
                        { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },

                    ]}
                    tableClass="table table-hover"
                    data={data}
                    sortField={sortField}
                    ascending={ascending}
                    onSort={(d) => {
                        if (d.col == sortField) {
                            var ordered = _.orderBy(data, [d.col], [(!ascending ? "asc" : "desc")]);
                            setAscending(!ascending);
                            setData(ordered);
                        }
                        else {
                            var ordered = _.orderBy(data, [d.col], ["asc"]);
                            setAscending(!ascending);
                            setData(ordered);
                            setSortField(d.col);
                        }
                    }}
                    onClick={handleSelect}
                    theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                    rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    selected={(item) => false}
                />
            </div>


            <div className="modal" id="newFilter">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Filter</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { }} >Add</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ByMeter;

