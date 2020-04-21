//******************************************************************************************************
//  Asset.tsx - Gbtc
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
//  01/22/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import _ from 'lodash';
import { OpenXDA } from '../global';
import AssetInfoWindow from './AssetInfo';
import AssetLocationWindow from './AssetLocation';
import AssetMeterWindow from './AssetMeter';
import ExternalDBUpdate from '../CommonComponents/ExternalDBUpdate';


import { useHistory } from 'react-router-dom';
import NoteWindow from '../CommonComponents/NoteWindow';
import AssetConnectionWindow from './AssetConnection';
import AdditionalFieldsWindow from '../CommonComponents/AdditionalFieldsWindow';
import { getAssetTypes } from '../../../TS/Services/Asset';
import LineSegmentWindow from '../AssetAttribute/LineSegmentWindow';
declare var homePath: string;
declare type Tab = 'notes' | 'assetInfo' | 'substations' | 'meters' | 'connections' | 'additionalFields' |'extDB' | 'Segments'
function Asset(props: { AssetID: number }) {
    let history = useHistory();
    const [asset, setAsset] = React.useState<OpenXDA.Asset>(null);
    const [tab, setTabState] = React.useState<string>(getTab());
    const [assetType, setAssetType] = React.useState<OpenXDA.AssetTypeName>(null);

    function getTab(): Tab {
        if (sessionStorage.hasOwnProperty('Asset.Tab'))
            return JSON.parse(sessionStorage.getItem('Asset.Tab'));
        else
            return 'notes';
    }

    function setTab(tab: Tab): void {
        sessionStorage.setItem('Asset.Tab', JSON.stringify(tab));
        setTabState(tab);
    }

    function getAsset(): void {
        if (props.AssetID == undefined) return;
       $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Asset/One/${props.AssetID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
       }).done((data: OpenXDA.Asset) => {
           setAsset(data)
           getAssetType(data)
       });
    }

    function getAssetType(asset: OpenXDA.Asset): void {
        getAssetTypes().done((assetTypes: Array<OpenXDA.AssetType>) => {
            let assetType = assetTypes.find(at => at.ID == asset['AssetTypeID'])
            setAssetType(assetType.Name);
        });
    }

    function deleteAsset(): JQuery.jqXHR {
        return $.ajax({
            type: "DELETE",
            url: `${homePath}api/OpenXDA/Asset/Delete`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(asset),
            dataType: 'json',
            cache: true,
            async: true
        }).done((msg) => {
            sessionStorage.clear();
            history.push({ pathname: homePath + 'index.cshtml', search: '?name=Assets', state: {} });
        });
    }

    React.useEffect(() => {
        getAsset();
        
    }, [props.AssetID]);

    if (asset == null) return null;
    return (
        <div style={{ width: '100%', height: window.innerHeight - 63, maxHeight: window.innerHeight - 63, overflow: 'hidden', padding: 15 }}>
            <div className="row">
                <div className="col">
                    <h2>{asset != null ? asset.AssetKey : ''}</h2>
                </div>
                <div className="col">
                    <button className="btn btn-danger pull-right" hidden={asset == null} onClick={() => deleteAsset()}>Delete Asset (Permanent)</button>
                </div>
            </div>


            <hr />
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={"nav-link" + (tab == "notes" ? " active" : "")} onClick={() => setTab('notes')} data-toggle="tab" href="#notes">Notes</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + (tab == "assetInfo" ? " active" : "")} onClick={() => setTab('assetInfo')} data-toggle="tab" href="#assetInfo">Asset Info</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + (tab == "additionalFields" ? " active" : "")} onClick={() => setTab('additionalFields')} data-toggle="tab" href="#additionalFields">Additional Fields</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + (tab == "substations" ? " active" : "")} onClick={() => setTab('substations')} data-toggle="tab" href="#substations">Substations</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + (tab == "meters" ? " active" : "")} onClick={() => setTab('meters')} data-toggle="tab" href="#meters">Meters</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + (tab == "connections" ? " active" : "")} onClick={() => setTab('connections')} data-toggle="tab" href="#connections">Connections</a>
                </li>
                {(assetType == 'Line')?
                    <li className="nav-item">
                        <a className={"nav-link" + (tab == "Segments" ? " active" : "")} onClick={() => setTab('Segments')} data-toggle="tab" href="#Segments">Line Segments</a>
                    </li> : null
                }
                <li className="nav-item">
                    <a className={"nav-link" + (tab == "extDB" ? " active" : "")} onClick={() => setTab('extDB')} data-toggle="tab" href="#extDB">External DB</a>
                </li>
            </ul>
             
            <div className="tab-content" style={{maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
                <div className={"tab-pane " + (tab == "notes" ? " active" : "fade")} id="notes">
                    <NoteWindow ID={asset.ID} Type='Asset' />
                </div>
                <div className={"tab-pane " + (tab == "assetInfo" ? " active" : "fade")} id="assetInfo">
                    <AssetInfoWindow Asset={asset} StateSetter={setAsset} />
                </div>
                <div className={"tab-pane " + (tab == "additionalFields" ? " active" : "fade")} id="additionalFields">
                    <AdditionalFieldsWindow ID={asset.ID} Type='Location' />
                </div>
                <div className={"tab-pane " + (tab == "substations" ? " active" : "fade")} id="substations">
                    <AssetLocationWindow Asset={asset} />
                </div>
                <div className={"tab-pane " + (tab == "meters" ? " active" : "fade")} id="meters">
                    <AssetMeterWindow Asset={asset} />
                </div>
                <div className={"tab-pane " + (tab == "connections" ? " active" : "fade")} id="connections">
                    <AssetConnectionWindow Asset={asset} />
                </div>
                <div className={"tab-pane " + (tab == "extDB" ? " active" : "fade")} id="extDB">
                    <ExternalDBUpdate ID={asset.ID} Type={asset.AssetType} />
                </div>
                <div className={"tab-pane " + (tab == "Segments" ? " active" : "fade")} id="Segments">
                    <LineSegmentWindow ID={asset.ID}/>
                </div>
            </div>                
        </div>
    )
}

export default Asset;
