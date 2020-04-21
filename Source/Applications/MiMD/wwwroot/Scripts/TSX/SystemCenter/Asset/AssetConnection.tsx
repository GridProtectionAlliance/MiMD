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
import _ from 'lodash';
import { OpenXDA } from '../global';
import Table from '../CommonComponents/Table';
import { useHistory } from "react-router-dom";

declare var homePath: string;

interface AssetConnection {
    AssetRelationShipTypeID: number,
    Name: string,
    AssetID: number,
    AssetKey: string
}
function AssetConnectionWindow(props: { Asset: OpenXDA.Asset }): JSX.Element{
    let history = useHistory();
    const [assetConnections, setAssetConnections] = React.useState<Array<AssetConnection>>([]);
    const [assetConnectionTypes, setAssetConnectionTypes] = React.useState<Array<OpenXDA.AssetConnectionType>>([]);
    const [newAssetConnection, setNewAssetConnection] = React.useState<OpenXDA.AssetConnection>({ID: 0, AssetRelationshipTypeID: 0, Parent: '', Child: ''});
    const [localAssets, setLocalAssets] = React.useState<Array<OpenXDA.Asset>>([]);

    const [sortField, setSortField] = React.useState<keyof (AssetConnection)>('AssetKey');
    const [ascending, setAscending] = React.useState<boolean>(true);

    React.useEffect(() => {
        getData();
    }, [props.Asset]);

    function getData() {
        getAssetConnectionTypes();
        getAssetConnections();
        getLocalAssets();
    }

    function getAssetConnections(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Asset/${props.Asset.ID}/AssetConnections`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(acs => setAssetConnections(acs));
    }

    function getLocalAssets(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Asset/${props.Asset.ID}/AssetNear`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(las => setLocalAssets(las));
    }


    function getAssetConnectionTypes(): void {
        if(sessionStorage.hasOwnProperty('OpenXDA.AssetConnectionTypes'))
            setAssetConnectionTypes(JSON.parse(sessionStorage.getItem('OpenXDA.AssetConnectionTypes')));
        else
            $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/AssetConnectionType`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((acts: Array<OpenXDA.AssetConnectionType>) => {
            setAssetConnectionTypes(acts);
            sessionStorage.setItem('OpenXDA.AssetConnectionTypes', JSON.stringify(acts));
        });
    }

    async function deleteAssetConnection(connection: AssetConnection) {
        return $.ajax({
            type: "DELETE",
            url: `${homePath}api/OpenXDA/Asset/${props.Asset.ID}/Asset/${connection.AssetID}`,
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

    function addConnection() {
        $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/AssetConnection/Add`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ID: 0, AssetRelationshipTypeID: newAssetConnection.AssetRelationshipTypeID, ParentID: props.Asset.ID, ChildID: parseInt(newAssetConnection.Child)}),
            cache: false,
            async: true
        }).done((connection) => {
            getData();
        }).fail((msg) => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
        });
    }


    function handleSelect(item) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Asset&AssetID=' + item.row.AssetID, state: {} })
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
                    <Table<AssetConnection>
                        cols={[
                            { key: 'AssetKey', label: 'Asset', headerStyle: { width: '47%' }, rowStyle: { width: '47%' } },
                            { key: 'Name', label: 'Relationship', headerStyle: { width: '47%' }, rowStyle: { width: '47%' } },
                            {
                                key: null, label: '', headerStyle: { width: '6%' }, rowStyle: { width: '6%' }, content: (asset, key, style) => <>
                                    <button className="btn btn-sm" onClick={(e) => {
                                        e.preventDefault();
                                        deleteAssetConnection(asset);
                                    }}><span><i className="fa fa-times"></i></span></button>
                                </>
                            },

                        ]}
                        tableClass="table table-hover"
                        data={assetConnections}
                        sortField={sortField}
                        ascending={ascending}
                        onSort={(d) => {
                            if (d.col == sortField) {
                                var ordered = _.orderBy(assetConnections, [d.col], [(!ascending ? "asc" : "desc")]);
                                setAscending(!ascending);
                                setAssetConnections(ordered);
                            }
                            else {
                                var ordered = _.orderBy(assetConnections, [d.col], ["asc"]);
                                setAscending(!ascending);
                                setAssetConnections(ordered);
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
                    <button className="btn btn-primary pull-right" data-toggle='modal' data-target='#connectionModal'>Add Connection</button>
                </div>

            </div>

            <div className="modal" id="connectionModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Asset to Asset Connection</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Asset:</label>
                                <select className="form-control" value={newAssetConnection != null ? newAssetConnection.Child : '0'} onChange={(evt) => {
                                    let r = _.clone(newAssetConnection);
                                    r.Child = evt.target.value;
                                    setNewAssetConnection(r);
                                }}>
                                    {localAssets.map(als => <option value={als.ID} key={als.ID}>{als.AssetKey}</option>)}
                                </select>

                                <label>Asset Connection Type:</label>
                                <select className="form-control" value={newAssetConnection != null ? newAssetConnection.AssetRelationshipTypeID : '0'} onChange={(evt) => {
                                    let r = _.clone(newAssetConnection);
                                    r.AssetRelationshipTypeID = assetConnectionTypes.find(l => l.ID.toString() == evt.target.value).ID
                                    setNewAssetConnection(r);
                                }}>
                                    {assetConnectionTypes.map(als => <option value={als.ID} key={als.ID}>{als.Name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={addConnection}>Save</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
                
    );

}

export default AssetConnectionWindow;