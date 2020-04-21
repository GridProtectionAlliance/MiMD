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
import CFGParser from '../../../TS/CFGParser';

declare var homePath: string;

export default class Page3 extends React.Component<{ MeterKey: string, Channels: Array<OpenXDA.Channel>, UpdateState: (record) => void }, { Phases: Array<OpenXDA.Phase>, MeasurementTypes: Array<OpenXDA.MeasurementType> }, {}>{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Phases: [],
            MeasurementTypes: []
        }
    }

    componentDidMount() {
        this.getPhases();
        this.getMeasurementTypes();

        $(".custom-file-input").on("change", (evt: any) => {
            var fileName = (evt as React.ChangeEvent<HTMLInputElement>).target.value.split("\\").pop();
            $(evt.target).siblings(".custom-file-label").addClass("selected").html(fileName);
            this.readSingleFile((evt as React.ChangeEvent<HTMLInputElement>))
        });
    }

    getPhases(): void {
        if (sessionStorage.hasOwnProperty('NewMeterWizard.Phases'))
            this.setState({ Phases: JSON.parse(sessionStorage.getItem('NewMeterWizard.Phases')) });
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
        if (sessionStorage.hasOwnProperty('NewMeterWizard.MeasurementTypes'))
            this.setState({ MeasurementTypes: JSON.parse(sessionStorage.getItem('NewMeterWizard.MeasurementTypes')) });
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
                sessionStorage.setItem('NewMeterWizard.MeasurementTypes', JSON.stringify(measurementTypes));

            });
    }

    readSingleFile(evt: React.ChangeEvent<HTMLInputElement>) {
        //Retrieve the first (and only!) File from the FileList object
        var f = evt.target.files[0];
        if (f) {
            var r = new FileReader();
            r.onload = (e) => {
                var contents = e.target.result as string;

                var parser;

                if (f.name.indexOf('.cfg') >= 0) {
                    parser = new CFGParser(contents, this.props.MeterKey);
                    this.props.UpdateState({ Channels: parser.Channels });
                    this.clearAssetsChannels();

                }
                else
                    alert('File is not of type cfg. Please only use comtrade standard cfg files.');
            }
            r.readAsText(f);
        }
    }
    componentWillUnmount() {
        $(".custom-file-input").off('change');
    }

    deleteChannel(index: number): void {
        let channels: Array<OpenXDA.Channel> = _.clone(this.props.Channels);
        let record: OpenXDA.Channel = channels.splice(index, 1)[0];
        this.props.UpdateState({ Channels: channels });

        if (record.Asset == '') return;

        let assets:Array<OpenXDA.Asset> = JSON.parse(localStorage.getItem('NewMeterWizard.Assets'));

        if (assets != null && assets.length > 0) {
            let asset = assets.find(a => a.AssetKey == record.Asset)
            if (asset == null) return;

            let channelIndex = asset.Channels.findIndex(c => c.ID = record.ID);
            if (channelIndex < 0) return;

            asset.Channels.splice(channelIndex,1)
            this.props.UpdateState({ Assets: assets });

        }
    }

    clearAssetsChannels():void {
        let assets = JSON.parse(localStorage.getItem('NewMeterWizard.Assets'));

        if (assets != null && assets.length > 0) {
            $.each(assets, (index, asset) => {
                asset.Channels = []
            });
            this.props.UpdateState({ Assets: assets });
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary" onClick={() => {
                            let channels: Array<OpenXDA.Channel> = [
                                { ID: 0, Meter: this.props.MeterKey, Asset: '', MeasurementType: 'Voltage', MeasurementCharacteristic: 'Instantaneous', Phase: 'AN', Name: 'VAN', SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: 'Voltage AN', Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: '' } as OpenXDA.Series } as OpenXDA.Channel,
                                { ID: 1, Meter: this.props.MeterKey, Asset: '', MeasurementType: 'Voltage', MeasurementCharacteristic: 'Instantaneous', Phase: 'BN', Name: 'VBN', SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: 'Voltage BN', Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: '' } as OpenXDA.Series } as OpenXDA.Channel,
                                { ID: 2, Meter: this.props.MeterKey, Asset: '', MeasurementType: 'Voltage', MeasurementCharacteristic: 'Instantaneous', Phase: 'CN', Name: 'VCN', SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: 'Voltage CN', Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: '' } as OpenXDA.Series } as OpenXDA.Channel,
                                { ID: 3, Meter: this.props.MeterKey, Asset: '', MeasurementType: 'Current', MeasurementCharacteristic: 'Instantaneous', Phase: 'AN', Name: 'IA', SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: 'Current A', Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: '' } as OpenXDA.Series } as OpenXDA.Channel,
                                { ID: 4, Meter: this.props.MeterKey, Asset: '', MeasurementType: 'Current', MeasurementCharacteristic: 'Instantaneous', Phase: 'BN', Name: 'IB', SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: 'Current B', Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: '' } as OpenXDA.Series } as OpenXDA.Channel,
                                { ID: 5, Meter: this.props.MeterKey, Asset: '', MeasurementType: 'Current', MeasurementCharacteristic: 'Instantaneous', Phase: 'CN', Name: 'IC', SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: 'Current C', Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: '' } as OpenXDA.Series } as OpenXDA.Channel,
                                { ID: 6, Meter: this.props.MeterKey, Asset: '', MeasurementType: 'Current', MeasurementCharacteristic: 'Instantaneous', Phase: 'NG', Name: 'IN', SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: 'Current NG', Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: '' } as OpenXDA.Series } as OpenXDA.Channel,

                            ]
                            this.props.UpdateState({ Channels: channels });
                            this.clearAssetsChannels();
                        }}>Default Setup</button>
                    </div>
                    <div className="col">
                        <div className="form-group" style={{ width: '100%' }}>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" ref="customFile" accept=".cfg,.par" />
                                <label className="custom-file-label">Choose a comtrade standard cfg file if applicable</label>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary pull-right" onClick={() => {
                            let channel: OpenXDA.Channel = { ID: this.props.Channels.length, Meter: this.props.MeterKey, Asset: '', MeasurementType: 'Voltage', MeasurementCharacteristic: 'Instantaneous', Phase: 'AN', Name: 'VAN', SamplesPerHour: 0, PerUnitValue: null, HarmonicGroup: 0, Description: 'Voltage AN', Enabled: true, Series: { ID: 0, ChannelID: 0, SeriesType: 'Values', SourceIndexes: '' } as OpenXDA.Series } as OpenXDA.Channel
                            let channels: Array<OpenXDA.Channel> = _.clone(this.props.Channels);
                            channels.push(channel);
                            this.props.UpdateState({ Channels: channels });

                        }}>Add Channel</button>
                    </div>

                </div>
                <div style={{ width: '100%', maxHeight: 'calc(100% - 35px)', padding: 30, overflowY: 'auto' }}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Channel</th>
                                <th>Name</th>
                                <th>Desc</th>
                                <th>Type</th>
                                <th>Phase</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.Channels.map((channel, index, array) => {
                                    return (
                                        <tr key={index}>
                                            <td style={{ width: '5%' }}><input className='form-control'  value={channel.Series.SourceIndexes} onChange={(event) => {
                                                channel.Series.SourceIndexes = event.target.value;
                                                this.props.UpdateState({Channels: array});
                                            }} /></td>
                                            <td style={{ width: '20%' }}><input className='form-control' value={channel.Name} onChange={(event) => {
                                                channel.Name = event.target.value;
                                                this.props.UpdateState({ Channels: array });
                                            }}/></td>
                                            <td style={{ width: '45%' }}><input className='form-control' value={channel.Description} onChange={(event) => {
                                                channel.Description = event.target.value;
                                                this.props.UpdateState({ Channels: array });
                                            }}/></td>
                                            <td style={{ width: '10%' }}>{<select className= 'form-control'  value={channel.MeasurementType} onChange={(event) => {
                                                channel.MeasurementType = event.target.value;
                                                this.props.UpdateState({ Channels: array });
                                            }}>{this.state.MeasurementTypes.map(a => <option key={a.ID} value={a.Name}>{a.Name}</option>)}</select>}</td>
                                            <td style={{ width: '10%' }}>{<select className='form-control' value={channel.Phase} onChange={(event) => {
                                                channel.Phase = event.target.value;
                                                this.props.UpdateState({ Channels: array });
                                            }}>{this.state.Phases.map(a => <option key={a.ID} value={a.Name}>{a.Name}</option>)}</select>}</td>
                                            <td style={{ width: '10%' }}>
                                                <button className="btn btn-sm" onClick={(e) => this.deleteChannel(index)}><span><i className="fa fa-times"></i></span></button>
                                            </td>

                                        </tr>
                                    )
                                })
                             }
                        </tbody>
                    </table>
                </div>
                
            </>
        );
    }

}

