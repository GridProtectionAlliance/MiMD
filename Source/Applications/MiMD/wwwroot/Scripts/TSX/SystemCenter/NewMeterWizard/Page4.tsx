//******************************************************************************************************
//  Page4.tsx - Gbtc
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
//  01/03/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { OpenXDA, SystemCenter } from '../global';
import BreakerAttributes from '../AssetAttribute/Breaker';
import BusAttributes from '../AssetAttribute/Bus';
import CapBankAttributes from '../AssetAttribute/CapBank';
import LineAttributes from '../AssetAttribute/Line';
import TransformerAttributes from '../AssetAttribute/Transformer';
import AssetAttributes from '../AssetAttribute/Asset';
import { getAssetTypes, getAllAssets } from '../../../TS/Services/Asset';
declare var homePath: string;

interface Page4Props {
    Assets: Array<OpenXDA.Breaker | OpenXDA.Bus | OpenXDA.CapBank | OpenXDA.Line | OpenXDA.Transformer>,
    Channels: Array<OpenXDA.Channel>,
    AssetConnections: Array<OpenXDA.AssetConnection>,
    UpdateState: (record) => void 
}
interface Page4State {
    NewEditAsset: OpenXDA.Breaker | OpenXDA.Bus | OpenXDA.CapBank | OpenXDA.Line | OpenXDA.Transformer,
    AllAssets: Array<OpenXDA.Asset>,
    AssetTypes: Array<OpenXDA.AssetType>,
    NewEdit: SystemCenter.NewEdit
}

export default class Page4 extends React.Component<Page4Props, Page4State, {}>{
    constructor(props, context) {
        super(props, context);
        this.state = {
            NewEditAsset: AssetAttributes.getNewAsset('Line'),
            AllAssets: [],
            AssetTypes: [],
            NewEdit: 'New'
        }

        this.getDifferentAsset = this.getDifferentAsset.bind(this);
    }

    componentDidMount() {
        getAllAssets().done(aas => this.setState({ AllAssets: aas }));
        getAssetTypes().done(ats => this.setState({AssetTypes: ats}));
    }

    editAsset(index: number) {
        this.setState({ NewEdit: 'Edit',NewEditAsset: this.props.Assets[index] });
    }

    deleteAsset(index: number) {
        let list = _.clone(this.props.Assets);
        let record: Array<OpenXDA.Asset> = list.splice(index, 1);
        let assetConnections: Array<OpenXDA.AssetConnection> = _.clone(this.props.AssetConnections);
        let channels: Array<OpenXDA.Channel> = _.clone(this.props.Channels);

        $.each(channels, (index, channel) => {
            if (channel.Asset == record[0].AssetKey)
                channel.Asset = ''
        });

        var index = assetConnections.findIndex(assetConnection => assetConnection.Parent == record[0].AssetKey || assetConnection.Child == record[0].AssetKey);
        while (index >= 0) {
            assetConnections.splice(index, 1);
            index = assetConnections.findIndex(assetConnection => assetConnection.Parent == record[0].AssetKey || assetConnection.Child == record[0].AssetKey);
        }

        this.props.UpdateState({ Assets: list });
        this.props.UpdateState({ Channels: channels });
        this.props.UpdateState({ AssetConnections: assetConnections });

    }

    addAsset() {
    }

    changeAssetType(type: 'Line' | 'LineSegment' | 'Breaker' | 'Bus' | 'CapacitorBank' | 'Transformer'): void {
        let asset = {
            ID: this.state.NewEditAsset.ID,
            AssetKey: this.state.NewEditAsset.AssetKey,
            AssetName: this.state.NewEditAsset.AssetName,
            AssetType: type,
            Description: this.state.NewEditAsset.Description,
            VoltageKV: this.state.NewEditAsset.VoltageKV,
            Channels: this.state.NewEditAsset.Channels,
            Spare: this.state.NewEditAsset.Spare
        }

        asset = AssetAttributes.getNewAssetAttributes(asset, type);
        this.setState({NewEditAsset: asset});
    }

    getDifferentAsset(assetID: number): void {
        let assetTypeID = this.state.AllAssets.find(a => a.ID == assetID)['AssetTypeID']; 
        let assetType = this.state.AssetTypes.find(at => at.ID == assetTypeID)
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/${assetType.Name}/One/${assetID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((asset: OpenXDA.Asset) => {
            asset.AssetType = assetType.Name;
            asset.Channels = [];

            this.setState({ NewEditAsset: asset }, () => {
                if (this.state.NewEditAsset.AssetType == 'Breaker')
                    this.getEDNAPoint(this.state.NewEditAsset.ID);
                else if (assetType.Name == 'Line')
                    this.getLineSegment(this.state.NewEditAsset.ID);

            });
        });
    }

    getLineSegment(lineID: number): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Line/${lineID}/LineSegment`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((lineSegment: OpenXDA.LineDetail) => {
            let record = _.clone(this.state.NewEditAsset as OpenXDA.Line) ;
            if (lineSegment != undefined) {
                record.Detail = lineSegment
            }
            else {
                record.Detail = AssetAttributes.getNewLineDetails();
            }

            this.setState({ NewEditAsset: record });

        });
    }

    getEDNAPoint(breakerID: number): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Breaker/${breakerID}/EDNAPoint`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((ednaPoint: OpenXDA.EDNAPoint) => {
            let record  = _.clone(this.state.NewEditAsset as OpenXDA.Breaker);
            if (ednaPoint != undefined) {
                record.EDNAPoint = ednaPoint.Point
                this.setState({ NewEditAsset: record });
            }
        });
    }



    render() {
        return (
            <>
                <div className="row" style={{margin: -20}}>
                    <div className="col-lg-4">
                        <ul style={{ width: '100%', height: window.innerHeight - 285, maxHeight: window.innerHeight - 285, overflowY: 'auto', padding: 0, margin: 0 }}>
                            {
                                this.props.Channels.map((channel, index) => <li style={{textDecoration: (channel.Asset.length > 0 ? 'line-through' : null)}} key={index}>{channel.Name + ' - ' + channel.Description}</li>)
                            }
                        </ul>
                    </div>
                    <div className="col" style={{padding: 20}}>
                        <div style={{ width: '100%', height: 38 }}>
                            <button className="btn btn-primary pull-right" data-toggle='modal' data-target='#assetModal' onClick={() => this.setState({NewEdit: 'New'})}>Add Asset</button>
                        </div>

                        <div style={{ width: '100%', maxHeight: window.innerHeight - 350, padding: 30, overflowY: 'auto' }}>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Key</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>kV</th>
                                        <th>Channels</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.Assets.map((asset: OpenXDA.Asset, index, array) => {
                                            return (
                                                <tr key={index}>
                                                    <td style={{ width: '10%' }}>{(asset.ID == 0 ? 'New' : 'Existing')}</td>
                                                    <td style={{ width: '20%' }}>{asset.AssetKey}</td>
                                                    <td style={{ width: '30%' }}>{asset.AssetName}</td>
                                                    <td style={{ width: '10%' }}>{asset.AssetType}</td>
                                                    <td style={{ width: '10%' }}>{asset.VoltageKV}</td>
                                                    <td style={{ width: '10%' }}>{asset.Channels.length}</td>
                                                    <td style={{ width: '10%' }}>
                                                        <button className="btn btn-sm" data-toggle='modal' data-target='#assetModal' onClick={(e) => this.editAsset(index)}><span><i className="fa fa-pencil"></i></span></button>
                                                        <button className="btn btn-sm" onClick={(e) => this.deleteAsset(index)}><span><i className="fa fa-times"></i></span></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className="modal" id="assetModal">
                    <div className="modal-dialog" style={{maxWidth: '100%', width: '90%'}}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.NewEdit == 'New' ? 'Add New Asset to Meter': 'Edit ' + this.state.NewEditAsset.AssetKey + ' for Meter' }</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col">
                                        <AssetAttributes Asset={this.state.NewEditAsset} NewEdit={this.state.NewEdit} AssetTypes={this.state.AssetTypes} AllAssets={this.state.AllAssets} UpdateState={(asset) => this.setState({ NewEditAsset: asset })} GetDifferentAsset={this.getDifferentAsset} />
                                    </div>
                                    <div className="col">
                                        { this.showAttributes() }
                                    </div>
                                    <div className="col">
                                        <select multiple style={{ height: '100%', width: '100%' }} onChange={(evt) => {
                                            let asset  = _.clone(this.state.NewEditAsset as OpenXDA.Asset);
                                            asset.Channels = ($(evt.target).val() as Array<string>).map(a => this.props.Channels[parseInt(a)])
                                            this.setState({ NewEditAsset: asset });
                                        }} value={this.state.NewEditAsset.Channels.map(a => a.ID.toString())}>
                                            {
                                                this.props.Channels.map((channel, index) => <option key={index} value={index} hidden={ channel.Asset != this.state.NewEditAsset.AssetKey && channel.Asset.length> 0}>{channel.Name + ' - ' + channel.Description}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(evt) => {
                                    let record: OpenXDA.Asset = _.clone(this.state.NewEditAsset);
                                    let list = _.clone(this.props.Assets);
                                    let channels: Array<OpenXDA.Channel> = _.clone(this.props.Channels);

                                    $.each(channels, (index, channel) => {
                                        if (channel.Asset == record.AssetKey)
                                            channel.Asset = ''

                                        if (record.Channels.findIndex(c => c.ID == channel.ID) >= 0)
                                            channel.Asset = record.AssetKey
                                    });
                                    list.push(record);
                                    this.props.UpdateState({ Channels: channels });
                                    this.props.UpdateState({ Assets: list });
                                    this.setState({ NewEditAsset: AssetAttributes.getNewAsset('Line') });

                                }} hidden={this.state.NewEdit != 'New'}>Save</button>

                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(evt) => {
                                    let record: OpenXDA.Asset = _.clone(this.state.NewEditAsset);
                                    let list = _.clone(this.props.Assets);
                                    let channels: Array<OpenXDA.Channel> = _.clone(this.props.Channels);
                                    let i = list.findIndex(r => r.AssetKey == record.AssetKey);
                                    list[i] = record;
                                    $.each(channels, (index, channel) => {
                                        if (channel.Asset == record.AssetKey)
                                            channel.Asset = ''

                                        if (record.Channels.findIndex(c => c.ID == channel.ID) >= 0)
                                            channel.Asset = record.AssetKey
                                    });

                                    this.props.UpdateState({ Channels: channels });
                                    this.props.UpdateState({ Assets: list });
                                    this.setState({ NewEditAsset: AssetAttributes.getNewAsset('Line') })
                                }} hidden={this.state.NewEdit != 'Edit'}>Save</button>


                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={(evt) => {
                                    this.setState({ NewEditAsset: AssetAttributes.getNewAsset('Line') })
                                }}>Close</button>
                            </div>

                        </div>
                    </div>
                </div>

        </>
        );
    }

    disableModalSave(): boolean {
        return $('.is-invalid').length > 0;
    }

    showAttributes(): JSX.Element {
        if (this.state.NewEditAsset.AssetType == 'Breaker')
            return <BreakerAttributes NewEdit={this.state.NewEdit} Asset={this.state.NewEditAsset as OpenXDA.Breaker} UpdateState={(newEditAsset: OpenXDA.Breaker) => this.setState({ NewEditAsset: newEditAsset })} />;
        else if (this.state.NewEditAsset.AssetType == 'Bus')
            return <BusAttributes NewEdit={this.state.NewEdit} Asset={this.state.NewEditAsset} UpdateState={(newEditAsset: OpenXDA.Bus) => this.setState({ NewEditAsset: newEditAsset })} />;
        else if (this.state.NewEditAsset.AssetType == 'CapacitorBank')
            return <CapBankAttributes NewEdit={this.state.NewEdit} Asset={this.state.NewEditAsset as OpenXDA.CapBank} UpdateState={(newEditAsset: OpenXDA.CapBank) => this.setState({ NewEditAsset: newEditAsset })} />;
        else if (this.state.NewEditAsset.AssetType == 'Line')
            return <LineAttributes NewEdit={this.state.NewEdit} Asset={this.state.NewEditAsset as OpenXDA.Line} UpdateState={(newEditAsset: OpenXDA.Line) => this.setState({ NewEditAsset: newEditAsset })} />;
        else if (this.state.NewEditAsset.AssetType == 'Transformer')
            return <TransformerAttributes NewEdit={this.state.NewEdit} Asset={this.state.NewEditAsset as OpenXDA.Transformer} UpdateState={(newEditAsset: OpenXDA.Transformer) => this.setState({ NewEditAsset: newEditAsset })} />;
    }
}

