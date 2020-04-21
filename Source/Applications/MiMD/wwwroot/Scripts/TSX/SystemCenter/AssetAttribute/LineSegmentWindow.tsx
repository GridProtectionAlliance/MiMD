//******************************************************************************************************
//  LineSegmentWindow.tsx - Gbtc
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
//  04/17/2020 - Christoph Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import {SystemCenter, OpenXDA } from '../global';
import AssetAttributes from '../AssetAttribute/Asset';
import FormInput from '../CommonComponents/FormInput';
import FormCheckBox from '../CommonComponents/FormCheckBox';
import FormSelect from '../CommonComponents/FormSelect';
import { getAllAssets, getAssetTypes, getAssetWithAdditionalFields } from '../../../TS/Services/Asset';
import LineSegmentAttributes from './LineSegment';

declare var homePath: string;

function LineSegmentWindow(props: { ID: number }): JSX.Element {
    const [segments, setSegments] = React.useState<Array<OpenXDA.LineSegment>>([]);
    const [updated, setUpdated] = React.useState<boolean>(false);

    const [newEditSegment, setNewEditSegment] = React.useState<OpenXDA.Asset>(AssetAttributes.getNewAsset('LineSegment') as OpenXDA.LineSegment);
    const [newEdit, setNewEdit] = React.useState<SystemCenter.NewEdit>('New');
    const [assetTypes, setAssetTypes] = React.useState<Array<OpenXDA.AssetType>>([]);
    const [allAssets, setAllAssets] = React.useState<Array<OpenXDA.Asset>>([]);

    React.useEffect(() => {
        getData();
        
    }, [props.ID]);

    function getData(): void {
        getSegments();
        setUpdated(false);

        getAllAssets().done((assets: Array<OpenXDA.Asset>) => {
            getAssetTypes().done((assetTypes: Array<OpenXDA.AssetType>) => {
                let dat = assetTypes.filter(item => item.Name == 'LineSegment')
                setAssetTypes(dat);
                setAllAssets(assets.filter(item => item['AssetTypeID'] == dat[0].ID));
            });
            
        });
       

    }

    function getSegments(): void {
       $.ajax({
            type: "GET",
           url: `${homePath}api/OpenXDA/Line/${props.ID}/LineSegments`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
       }).done((data: Array<OpenXDA.LineSegment>) => {
           setSegments(data);
       });
    }

    function addExistingSegment(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/LineSegment/${newEditSegment.ID}/AddToLine/${props.ID}`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(''),
            dataType: 'json',
            cache: true,
            async: true
        }).done(e => {
            getData();
            setNewEditSegment(AssetAttributes.getNewAsset('LineSegment'))
        });
    }

    function addNewSegment(): void{
        $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/LineSegment/New/Line/${props.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Asset: newEditSegment }),
            cache: false,
            async: true
        }).done(() => {
            sessionStorage.clear();
            getData();
            setNewEditSegment(AssetAttributes.getNewAsset('LineSegment'))

        }).fail((msg) => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
        });
    }

    function deleteSegment(id: number): void {
        let response = confirm("This will delete the Segment '" + newEditSegment.AssetKey + "' from the Line");

        if (!response) return;
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/LineSegment/${id}/Disconnect/${props.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(e => {
            getData();
        });

    }

    function editField(field: SystemCenter.AdditionalField): void {
        //setNewField(field);
    }

    return (
        <div className="card" style={{ marginBottom: 10 }}>
            <div className="card-header">
                <h4>Additional Fields:</h4>
            </div>
            <div className="card-body">
                <div style={{ height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, overflowY: 'auto' }}>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th style={{ width: 300 }}>Segment</th>
                                <th style={{ width: 100 }}>Length</th>
                                <th style={{ width: 50 }}>R0</th>
                                <th style={{ width: 50 }}>X0</th>
                                <th style={{ width: 50 }}>R1</th>
                                <th style={{ width: 50 }}>X1</th>
                                <th style={{ width: 150 }}>Thermal Rating</th>
                                <th style={{ width: 30 }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {segments.map((a, i) => <TableRowInput key={i} ParentLineID={props.ID} Segment={a} remove={deleteSegment} />)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="card-footer">
                <div className="btn-group mr-2">
                    <button className="btn btn-primary" data-toggle='modal' data-target="#assetModal" hidden={updated} >Add Segement</button>
                </div>
                <div className="btn-group mr-2">
                    <button className="btn btn-primary" data-toggle='modal' data-target="#assetModal" hidden={updated}>Update from FAWG</button>
                </div>

                <div className="btn-group mr-2">
                    <button className="btn btn-primary"  hidden={!updated}>Save Changes</button>
                </div>
                <div className="btn-group mr-2">
                    <button className="btn btn-default"  hidden={!updated}>Reset</button>
                </div>
            </div>

            <div className="modal" id="assetModal">
                <div className="modal-dialog" style={{ maxWidth: '100%', width: '75%' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{newEdit == 'New' ? 'Add New LineSegment to Line' : 'Edit ' + newEditSegment.AssetKey + ' for Meter'}</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={(evt) => setNewEditSegment(AssetAttributes.getNewAsset('LineSegment') as OpenXDA.LineSegment)}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <AssetAttributes Asset={newEditSegment} NewEdit={newEdit} AssetTypes={assetTypes} AllAssets={allAssets} UpdateState={setNewEditSegment} GetDifferentAsset={(assetID) => {
                                        console.log("here")
                                        let asset = allAssets.find(a => a.ID == assetID);
                                        console.log(asset);
                                        console.log(assetID);
                                        console.log(allAssets)
                                        let assetType = assetTypes.find(at => at.ID == asset['AssetTypeID'])
                                        getAssetWithAdditionalFields(assetID, assetType.Name).then(asset => setNewEditSegment(asset));
                                    }} />
                                </div>
                                <div className="col">
                                    <LineSegmentAttributes Asset={newEditSegment as OpenXDA.LineSegment} NewEdit={newEdit} UpdateState={setNewEditSegment} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={addNewSegment}  hidden={newEdit == 'Edit' || newEditSegment.ID != 0}>Save</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={addExistingSegment} hidden={newEdit == 'Edit' || newEditSegment.ID == 0}>Save</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={(evt) => setNewEditSegment(AssetAttributes.getNewAsset('LineSegment'))}>Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default LineSegmentWindow;

function TableRowInput(props: { ParentLineID: number, Segment: OpenXDA.LineSegment, remove: (id: number) => void}) {
    return(
        <tr>
            <td>{props.Segment.AssetName} ({props.Segment.AssetKey})</td>
            <td>{props.Segment.Length}</td>
            <td>{props.Segment.R0}</td>
            <td>{props.Segment.X0}</td>
            <td>{props.Segment.R1}</td>
            <td>{props.Segment.X1}</td>
            <td>{props.Segment.ThermalRating}</td>
            <td><button className="btn btn-sm" onClick={(e) => props.remove(props.Segment.ID)}><span><i className="fa fa-times"></i></span></button></td>
        </tr>
    );
}
