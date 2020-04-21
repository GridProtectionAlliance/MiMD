//******************************************************************************************************
//  Page3.tsx - Gbtc
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
import { OpenXDA } from '../global';

declare var homePath: string;

export default class MeterChannelWindow extends React.Component<{ Meter: OpenXDA.Meter }, { Channels: Array<OpenXDA.Channel>, Phases: Array<OpenXDA.Phase>, MeasurementTypes: Array<OpenXDA.MeasurementType>, AllAssets: Array<OpenXDA.Asset> }, {}>{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Channels: [],
            Phases: [],
            MeasurementTypes: [],
            AllAssets: []
        }

        this.getChannels = this.getChannels.bind(this);
        this.updateChannels = this.updateChannels.bind(this);
    }

    componentDidMount() {
        this.getPhases();
        this.getAssets();
        this.getMeasurementTypes();
        this.getChannels();
    }

    getChannels(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Meter/${this.props.Meter.ID}/Channels`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((channels: Array<any>) => {
            let makeChannels = channels.map(channel => { return { ID: channel.ID, Meter: channel.Meter, Asset: channel.Asset, MeasurementType: channel.MeasurementType, MeasurementCharacteristic: channel.MeasurementCharacteristic, Phase: channel.Phase, Name: channel.Name, SamplesPerHour: channel.SamplesPerHour, PerUnitValue: channel.SamplesPerHour, HarmonicGroup: channel.HarmonicGroup, Description: channel.Description, Enabled: channel.Enabled, Series: { ID: channel['SeriesID'], ChannelID: channel.ID, SeriesType: 'Values', SourceIndexes: channel['SeriesSourceIndexes'] } as OpenXDA.Series } as OpenXDA.Channel })
            this.setState({ Channels:  makeChannels})
        });
    }

    updateChannels(): void {
        $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/Meter/${this.props.Meter.ID}/Channel/Update`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({Channels: this.state.Channels}),
            cache: false,
            async: true
        }).done(() => {
            this.getChannels();
        }).fail(msg => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
            else {
                this.getChannels();
            }
        });;
    }


    getAssets(): void {
            $.ajax({
                type: "GET",
                url: `${homePath}api/OpenXDA/Meter/${this.props.Meter.ID}/Asset`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            }).done((assets: Array<OpenXDA.Asset>) => {
                this.setState({ AllAssets: assets })
            });
    }



    getPhases(): void {
        if (sessionStorage.hasOwnProperty('SystemCenter.Phases'))
            this.setState({ Phases: JSON.parse(sessionStorage.getItem('SystemCenter.Phases')) });
        else
            $.ajax({
                type: "GET",
                url: `${homePath}api/OpenXDA/Phase`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            }).done((phases: Array<OpenXDA.Phase>) => {
                this.setState({ Phases: phases })
                sessionStorage.setItem('NewMeterWizard.Phases', JSON.stringify(phases));

            });
    }

    getMeasurementTypes(): void {
        if (sessionStorage.hasOwnProperty('OpenXDA.MeasurementTypes'))
            this.setState({ MeasurementTypes: JSON.parse(sessionStorage.getItem('OpenXDA.MeasurementTypes')) });
        else
            $.ajax({
                type: "GET",
                url: `${homePath}api/OpenXDA/MeasurementType`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            }).done((measurementTypes: Array<OpenXDA.MeasurementType>) => {
                this.setState({ MeasurementTypes: measurementTypes })
                sessionStorage.setItem('OpenXDA.MeasurementTypes', JSON.stringify(measurementTypes));

            });
    }

    deleteChannel(index: number): void {
        let channels: Array<OpenXDA.Channel> = _.clone(this.state.Channels);
        let record: OpenXDA.Channel = channels.splice(index, 1)[0];
        this.setState({ Channels: channels });
    }

    render() {
        return (
            <div className="card" style={{ marginBottom: 10 }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h4>Channels:</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div style={{ width: '100%', maxHeight: window.innerHeight - 381, padding: 30, overflowY: 'auto' }}>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Channel</th>
                                    <th>Name</th>
                                    <th>Desc</th>
                                    <th>Type</th>
                                    <th>Phase</th>
                                    <th>Asset</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Channels.map((channel, index, array) => {
                                        return (
                                            <tr key={index}>
                                                <td style={{ width: '5%' }}><input className='form-control' value={channel.Series.SourceIndexes} onChange={(event) => {
                                                    channel.Series.SourceIndexes = event.target.value;
                                                    this.setState({ Channels: array });
                                                }} /></td>
                                                <td style={{ width: '15%' }}><input className='form-control' value={channel.Name} onChange={(event) => {
                                                    channel.Name = event.target.value;
                                                    this.setState({ Channels: array });
                                                }} /></td>
                                                <td style={{ width: '40%' }}><input className='form-control' value={channel.Description == null ? '' : channel.Description} onChange={(event) => {
                                                    channel.Description = event.target.value;
                                                    this.setState({ Channels: array });
                                                }} /></td>
                                                <td style={{ width: '10%' }}>{<select className='form-control' value={channel.MeasurementType} onChange={(event) => {
                                                    channel.MeasurementType = event.target.value;
                                                    this.setState({ Channels: array });
                                                }}>{this.state.MeasurementTypes.map(a => <option key={a.ID} value={a.Name}>{a.Name}</option>)}</select>}</td>
                                                <td style={{ width: '10%' }}>{<select className='form-control' value={channel.Phase} onChange={(event) => {
                                                    channel.Phase = event.target.value;
                                                    this.setState({ Channels: array });
                                                }}>{this.state.Phases.map(a => <option key={a.ID} value={a.Name}>{a.Name}</option>)}</select>}</td>
                                                <td style={{ width: '10%' }}>{<select className='form-control' value={channel.Asset} onChange={(event) => {
                                                    channel.Asset = event.target.value;
                                                    this.setState({ Channels: array });
                                                }}>
                                                    <option value=""></option>
                                                    {this.state.AllAssets.map(a => <option key={a.ID} value={a.AssetKey}>{a.AssetKey}</option>)}</select>}</td>
                                                <td style={{ width: '5%' }}>
                                                    <button className="btn btn-sm" onClick={(e) => this.deleteChannel(index)}><span><i className="fa fa-times"></i></span></button>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary pull-right" onClick={() => {
                            let channel: OpenXDA.Channel = { ID: 0, Meter: this.props.Meter.AssetKey, Asset: '', MeasurementType: 'Voltage', MeasurementCharacteristic: 'Instantaneous', Phase: 'AN', Name: 'VAN', SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: 'Voltage AN', Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: '' } as OpenXDA.Series } as OpenXDA.Channel
                            let channels: Array<OpenXDA.Channel> = _.clone(this.state.Channels);
                            channels.push(channel);
                            this.setState({ Channels: channels });
                        }}>Add Channel</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary pull-right" onClick={this.updateChannels}>Save Changes</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-default" onClick={this.getChannels}>Clear Changes</button>
                    </div>
                </div>
            </div>
                
        );
    }

}

