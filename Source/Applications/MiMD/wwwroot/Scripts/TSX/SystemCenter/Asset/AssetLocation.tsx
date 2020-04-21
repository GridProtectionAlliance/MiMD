//******************************************************************************************************
//  AssetLocation.tsx - Gbtc
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
//  01/24/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { OpenXDA } from '../global';
import Table from '../CommonComponents/Table';
import { useHistory } from "react-router-dom";

declare var homePath: string;

function AssetLocationWindow(props: { Asset: OpenXDA.Asset }): JSX.Element{
    let history = useHistory();
    const [locations, setLocations] = React.useState<Array<OpenXDA.Location>>([]);
    const [sortField, setSortField] = React.useState<keyof (OpenXDA.Location)>('LocationKey');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [allLocations, setAllLocations] = React.useState<Array<OpenXDA.Location>>([]);
    const [newLocation, setNewLocation] = React.useState<OpenXDA.Location>();
    React.useEffect(() => {
        getData();
    }, [props.Asset]);

    function getData() {
        getLocations();
        getAllOtherLocations();
    }

    function getLocations(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Asset/${props.Asset.ID}/Locations`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(data => setLocations(data));
    }

    function getAllOtherLocations(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Asset/${props.Asset.ID}/OtherLocations`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(data => {
            let records = _.orderBy(data, ['LocationKey'], ['asc']);
            setAllLocations(records);
            setNewLocation(records[0]);
        });
    }


    async function deleteLocation(location: OpenXDA.Location) {
        return $.ajax({
            type: "DELETE",
            url: `${homePath}api/OpenXDA/Asset/${props.Asset.ID}/Location/${location.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((assets: Array<OpenXDA.Asset>) => {
            getData();
        }).fail((msg) => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
        });
    }

    async function addLocation() {
        return $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/Asset/${props.Asset.ID}/Location/${newLocation.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(record => {
            getData();
        }).fail((msg) => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
        });
    }

    function handleSelect(item, event) {
        if (event.target.localName == 'td')
            history.push({ pathname: homePath + 'index.cshtml', search: '?name=Location&LocationID=' + item.row.ID, state: {} })
    }

    return (
        <div className="card" style={{ marginBottom: 10 }}>
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        <h4>Substations:</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div style={{ width: '100%', maxHeight: window.innerHeight - 381, padding: 30, overflowY: 'auto' }}>
                    <Table<OpenXDA.Location>
                        cols={[
                            { key: 'LocationKey', label: 'Key', headerStyle: { width: '30%' }, rowStyle: { width: '30%' } },
                            { key: 'Name', label: 'Name', headerStyle: { width: '30%' }, rowStyle: { width: '30%' } },
                            { key: 'Latitude', label: 'Latitude', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            { key: 'Longitude', label: 'Longitude', headerStyle: { width: 'calc(10%)' }, rowStyle: { width: '10%' } },
                            {
                                key: null, label: '', headerStyle: { width: '10%' }, rowStyle: { width: '10%' }, content: (asset, key, style) => <>
                                    <button className="btn btn-sm" onClick={(e) => {
                                        e.preventDefault();
                                        deleteLocation(asset);
                                    }}><span><i className="fa fa-times"></i></span></button>
                                </>
                            },

                        ]}
                        tableClass="table table-hover"
                        data={locations}
                        sortField={sortField}
                        ascending={ascending}
                        onSort={(d) => {
                            if (d.col == sortField) {
                                var ordered = _.orderBy(locations, [d.col], [(!ascending ? "asc" : "desc")]);
                                setAscending(!ascending);
                                setLocations(ordered);
                            }
                            else {
                                var ordered = _.orderBy(locations, [d.col], ["asc"]);
                                setAscending(!ascending);
                                setLocations(ordered);
                                setSortField(d.col);
                            }
                        }}
                        onClick={handleSelect}
                        selected={() => false}
                    />

                </div>
            </div>
            <div className="card-footer">
                <div className="btn-group mr-2">
                    <button className="btn btn-primary pull-right" data-toggle='modal' data-target='#locationModal'>Add Substation</button>
                </div>

            </div>

            <div className="modal" id="locationModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Substation to Asset</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Substation</label>
                                <select className="form-control" value={newLocation != null ? newLocation.ID : '0'} onChange={(evt) => {
                                    setNewLocation(allLocations.find(l => l.ID.toString() == evt.target.value));
                                }}>
                                    {allLocations.map(als => <option value={als.ID} key={als.ID}>{als.LocationKey}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" hidden={allLocations.length == 0} onClick={addLocation}>Save</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
                
    );

}

export default AssetLocationWindow;