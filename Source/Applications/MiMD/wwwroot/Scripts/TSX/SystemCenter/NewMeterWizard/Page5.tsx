//******************************************************************************************************
//  Page5.tsx - Gbtc
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
//  01/10/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { OpenXDA } from '../global';
declare var homePath: string;

export default class Page5 extends React.Component<{ Assets: Array<OpenXDA.Asset>, AssetConnections: Array<OpenXDA.AssetConnection> ,UpdateState: (record) => void }, {AssetIndex: number, AssetConnectionTypes: Array<OpenXDA.AssetConnectionType> }, {}>{
    constructor(props, context) {
        super(props, context);
        this.state = {
            AssetIndex: 0,
            AssetConnectionTypes: []
        }
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);

    }

    componentDidMount() {
        this.getAssetConnectionTypes()
    }

    getAssetConnectionTypes(): void {
        if (sessionStorage.hasOwnProperty('NewMeterWizard.AssetConnectionTypes'))
            this.setState({ AssetConnectionTypes: JSON.parse(sessionStorage.getItem('NewMeterWizard.AssetConnectionTypes')) });
        else
            $.ajax({
                type: "GET",
                url: `${homePath}api/OpenXDA/AssetConnectionType`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            }).done((acts: Array<OpenXDA.AssetConnectionType>) => {
                this.setState({ AssetConnectionTypes: acts });
                sessionStorage.setItem('NewMeterWizard.AssetConnectionTypes', JSON.stringify(acts));
            });
    }


    next() {
        let assetIndex = this.state.AssetIndex;
        // Make sure currentStep is set to something reasonable
        if (assetIndex >= this.props.Assets.length - 1) {
            assetIndex = this.props.Assets.length - 1;
        } else {
            assetIndex = assetIndex + 1;
        }

        this.setState({
            AssetIndex: assetIndex
        });
    }

    prev() {
        let assetIndex = this.state.AssetIndex;
        if (assetIndex <= 0) {
            assetIndex = 0;
        } else {
            assetIndex = assetIndex - 1;
        }

        this.setState({
            AssetIndex: assetIndex
        });
    }

    addAssetConnection(): void {
    }

    deleteAssetConnection(ac: OpenXDA.AssetConnection): void {
        let list: Array<OpenXDA.AssetConnection> = _.clone(this.props.AssetConnections);
        let index = list.findIndex(a => a == ac);
        let record: Array<OpenXDA.AssetConnection> = list.splice(index, 1);
        this.props.UpdateState({ AssetConnections: list });
    }

    render() {
        let currentAsset = this.props.Assets[this.state.AssetIndex]
        return (
            <>
                <div className="row" style={{ margin: -20 }}>
                    <div className="col-lg-4">
                        <ul style={{ width: '100%', height: window.innerHeight - 285, maxHeight: window.innerHeight - 285, overflowY: 'auto', padding: 0, margin: 0 }}>
                            {
                                this.props.Assets.map((asset, index) => <li style={{ textDecoration: (index <= this.state.AssetIndex ? 'line-through' : null) }} key={index}>{asset.AssetKey}</li>)
                            }
                        </ul>
                    </div>
                    <div className="col" style={{ padding: 0 }}>
                        <div className="card" style={{ height: '100%' }}>
                            <div className="card-header">
                                <button className="btn btn-primary pull-right" data-toggle='modal' data-target='#newConnection' disabled={this.props.Assets.length <= 1}>Add Connection</button>
                                <h4 style={{ width: '100%' }}>{currentAsset.AssetKey}</h4>
                            </div>
                            <div className="card-body" style={{overflowY:'scroll', maxHeight: window.innerHeight - 415}}>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Asset</th>
                                            <th>Type</th>
                                            <th>Connection</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.AssetConnections.filter( ac => ac.Parent == currentAsset.AssetKey  || ac.Child == currentAsset.AssetKey).map((ac: OpenXDA.AssetConnection, index, array) => {
                                                let connectionAsset;
                                                if (ac.Parent == currentAsset.AssetKey) {
                                                    connectionAsset = this.props.Assets.find(asset => asset.AssetKey == ac.Child);
                                                }
                                                else
                                                    connectionAsset = this.props.Assets.find(asset => asset.AssetKey == ac.Parent);

                                                let connectionType = this.state.AssetConnectionTypes.find(act => act.ID == ac.AssetRelationshipTypeID);
                                                return (
                                                    <tr key={index}>
                                                        <td style={{ width: '20%' }}>{connectionAsset.AssetKey}</td>
                                                        <td style={{ width: '20%' }}>{connectionAsset.AssetType}</td>
                                                        <td style={{ width: '50%' }}>{connectionType != undefined ? connectionType.Name : ''}</td>
                                                        <td style={{ width: '10%' }}>
                                                            <button className="btn btn-sm" onClick={(e) => this.deleteAssetConnection(ac)}><span><i className="fa fa-times"></i></span></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary pull-left" onClick={this.prev} hidden={false} disabled={this.state.AssetIndex < 1}>Prev</button>
                                <button className="btn btn-primary pull-right" onClick={this.next} disabled={this.state.AssetIndex == this.props.Assets.length - 1}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal" id="newConnection">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add a Connection to {currentAsset.AssetKey}</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Select Connecting Asset</label>
                                    <select ref='assetConnection' className="form-control" onChange={(evt) => {
                                    }}>
                                        {
                                            this.props.Assets.filter(asset => asset.AssetKey != currentAsset.AssetKey).map((asset, index) => <option key={index} value={asset.AssetKey} >{asset.AssetKey}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Select Connection Type</label>
                                    <select ref='assetConnectionType' className="form-control" onChange={(evt) => {
                                    }}>
                                        {
                                            this.state.AssetConnectionTypes.map((act, index) => <option key={index} value={act.ID} >{act.Name}</option>)
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(evt) => {
                                    let childConnection = $(this.refs.assetConnection).val() as string;
                                    let connectionType = parseInt($(this.refs.assetConnectionType).val() as string);
                                    let assetConnections: Array<OpenXDA.AssetConnection> = _.clone(this.props.AssetConnections);
                                    assetConnections.push({ ID: 0, AssetRelationshipTypeID: connectionType, Parent: currentAsset.AssetKey, Child: childConnection });
                                    this.props.UpdateState({ AssetConnections: assetConnections})
                                }} >Save</button>

                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>

                </div>
            </>
        );
    }

}

