//******************************************************************************************************
//  LocationAsset.tsx - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with  work for additional information regarding copyright ownership.
//  The GPA licenses  file to you under the MIT License (MIT), the "License"; you may not use 
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
import { OpenXDA, SystemCenter } from '../global';
import Table from '../CommonComponents/Table';
import { useHistory } from "react-router-dom";
import AssetAttributes from '../AssetAttribute/Asset';
import BreakerAttributes from '../AssetAttribute/Breaker';
import BusAttributes from '../AssetAttribute/Bus';
import CapBankAttributes from '../AssetAttribute/CapBank';
import LineAttributes from '../AssetAttribute/Line';
import TransformerAttributes from '../AssetAttribute/Transformer';
import { getAllAssets, getAssetTypes, getAssetWithAdditionalFields, editExistingAsset } from '../../../TS/Services/Asset';

declare var homePath: string;

interface LocationAssetState {
    Assets: Array<OpenXDA.Asset>,
    NewEditAsset: OpenXDA.Breaker | OpenXDA.Bus | OpenXDA.CapBank | OpenXDA.Line | OpenXDA.Transformer,
    AllAssets: Array<OpenXDA.Asset>,
    AssetTypes: Array<OpenXDA.AssetType>,
    NewEdit: SystemCenter.NewEdit,
    Sortfield: keyof (OpenXDA.Meter), Ascending: boolean

}

function LocationAssetWindow(props: { Location: OpenXDA.Location }): JSX.Element{
    let history = useHistory();
    const [data, setData] = React.useState<Array<OpenXDA.Asset>>([]);
    const [sortField, setSortField] = React.useState<keyof(OpenXDA.Asset)>('AssetKey');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [newEditAsset, setNewEditAsset] = React.useState<OpenXDA.Breaker | OpenXDA.Bus | OpenXDA.CapBank | OpenXDA.Line | OpenXDA.Transformer>(AssetAttributes.getNewAsset('Line'));
    const [newEdit, setNewEdit] = React.useState<SystemCenter.NewEdit>('New');
    const [assetTypes, setAssetTypes] = React.useState<Array<OpenXDA.AssetType>>([]);
    const [allAssets, setAllAssets] = React.useState<Array<OpenXDA.Asset>>([]);

    React.useEffect(() => {
        getDatas()
    }, [props.Location.ID]);

    function getDatas(): void {
        getAssets();
        getAllAssets().done((assets: Array<OpenXDA.Asset>) => {
            setAllAssets(assets);
        });
        getAssetTypes().done((assetTypes: Array<OpenXDA.AssetType>) => {
            setAssetTypes( assetTypes);
        });
    }

    function getAssets(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Location/${props.Location.ID}/Assets`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((data, _ ) => setData(data));
    }


    function addNewAsset() {
        $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/Asset/New/Location/${props.Location.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Asset: newEditAsset }),
            cache: false,
            async: true
        }).done(() => {
            sessionStorage.clear();
            getDatas();
            setNewEditAsset(AssetAttributes.getNewAsset('Line'))

        }).fail((msg) => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
        });

    }

    async function addExistingAsset() {
        return $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/Asset/Existing/Location/${props.Location.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Asset: newEditAsset }),
            cache: false,
            async: true
        }).done(() => {
        }).fail((msg) => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
            else {
                sessionStorage.clear();
                getDatas();
                setNewEditAsset(AssetAttributes.getNewAsset('Line'))
            }

        });

    }

    async function deleteAsset(asset: OpenXDA.Asset) {
      return  $.ajax({
            type: "DELETE",
            url: `${homePath}api/OpenXDA/Asset/${asset.ID}/Location/${props.Location.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((assets: Array<OpenXDA.Asset>) => {
        }).fail((msg) => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
            else {
                sessionStorage.clear();
                getDatas();
            }

        });
    }

    function addNewButton(): void {
        setNewEdit('New');
        setNewEditAsset(AssetAttributes.getNewAsset('Line'));
    }

    async function saveButtonForExistingAssets() {
        let thing = await editExistingAsset(newEditAsset);
        getDatas();
        setNewEditAsset(AssetAttributes.getNewAsset('Line'))
    }

    function showAttributes(): JSX.Element {
        if (newEditAsset.AssetType == 'Breaker')
            return <BreakerAttributes NewEdit={newEdit} Asset={newEditAsset as OpenXDA.Breaker} UpdateState={setNewEditAsset} ShowSpare={true} />;
        else if (newEditAsset.AssetType == 'Bus')
            return <BusAttributes NewEdit={newEdit} Asset={newEditAsset} UpdateState={setNewEditAsset} />;
        else if (newEditAsset.AssetType == 'CapacitorBank')
            return <CapBankAttributes NewEdit={newEdit} Asset={newEditAsset as OpenXDA.CapBank} UpdateState={setNewEditAsset} />;
        else if (newEditAsset.AssetType == 'Line')
            return <LineAttributes NewEdit={newEdit} Asset={newEditAsset as OpenXDA.Line} UpdateState={setNewEditAsset} />;
        else if (newEditAsset.AssetType == 'Transformer')
            return <TransformerAttributes NewEdit={newEdit} Asset={newEditAsset as OpenXDA.Transformer} UpdateState={setNewEditAsset} />;
    }
    function handleSelect(item, event) {
        if (event.target.localName == 'td')
            history.push({ pathname: homePath + 'index.cshtml', search: '?name=Asset&AssetID=' + item.row.ID, state: {} })
    }

    return (
        <div className="card" style={{ marginBottom: 10 }}>
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        <h4>Assets:</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div style={{ width: '100%', maxHeight: window.innerHeight - 381, padding: 30, overflowY: 'auto' }}>
                    <Table<OpenXDA.Asset>
                        cols={[
                            { key: 'AssetKey', label: 'Key', headerStyle: { width: '30%' }, rowStyle: { width: '30%' } },
                            { key: 'AssetName', label: 'Name', headerStyle: { width: '30%' }, rowStyle: { width: '30%' } },
                            { key: 'AssetType', label: 'Type', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            {
                                key: null, label: '', headerStyle: { width: '10%' }, rowStyle: { width: '10%' }, content: (asset, key, style) => <>
                                    <button className="btn btn-sm" data-toggle='modal' data-target='#assetModal' onClick={(e) => {
                                        e.preventDefault();
                                        let assetType = assetTypes.find(at => at.ID == asset['AssetTypeID'])
                                        getAssetWithAdditionalFields(asset.ID, assetType.Name).then(asset => setNewEditAsset(asset));
                                        setNewEdit('Edit');
                                    }}><span><i className="fa fa-pencil"></i></span></button>
                                    <button className="btn btn-sm" onClick={(e) => {
                                        e.preventDefault();
                                        deleteAsset(asset);
                                    }}><span><i className="fa fa-times"></i></span></button>
                                    </>
                            },

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
                        selected={(item) => false}
                    />

                </div>
            </div>
            <div className="card-footer">
                <div className="btn-group mr-2">
                    <button className="btn btn-primary pull-right" data-toggle='modal' data-target='#assetModal' onClick={addNewButton}>Add Asset</button>
                </div>
            </div>

            <div className="modal" id="assetModal">
                <div className="modal-dialog" style={{ maxWidth: '100%', width: '75%' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{newEdit == 'New' ? 'Add New Asset to Meter' : 'Edit ' + newEditAsset.AssetKey + ' for Meter'}</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={(evt) => setNewEditAsset(AssetAttributes.getNewAsset('Line'))}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <AssetAttributes Asset={newEditAsset} NewEdit={newEdit} AssetTypes={assetTypes} AllAssets={allAssets} UpdateState={setNewEditAsset} GetDifferentAsset={(assetID) => {
                                        let asset = allAssets.find(a => a.ID == assetID);
                                        let assetType = assetTypes.find(at => at.ID == asset['AssetTypeID'])
                                        getAssetWithAdditionalFields(assetID, assetType.Name).then(asset => setNewEditAsset(asset));
                                    }} />
                                </div>
                                <div className="col">
                                    {showAttributes()}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={addNewAsset} hidden={newEdit == 'Edit' || newEditAsset.ID != 0}>Save</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={addExistingAsset} hidden={newEdit == 'Edit' || newEditAsset.ID == 0}>Save</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(evt) => saveButtonForExistingAssets()} hidden={newEdit == 'New'}>Save</button>


                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={(evt) => setNewEditAsset(AssetAttributes.getNewAsset('Line'))}>Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
                
    );
}

export default LocationAssetWindow;
