//******************************************************************************************************
//  Meter.tsx - Gbtc
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
//  08/27/2019 - Billy Ernest
//       Generated original version of source code.
//  04/15/2020 - Christoph Lackner
//       Added Tab for external Database Fields
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import MeterLocationWindow from '../Meter/MeterLocation';
import { OpenXDA } from '../global';
import MeterInfoWindow from './MeterInfo';
import MeterChannelWindow from '../Meter/MeterChannel';
import MeterAssetWindow from '../Meter/MeterAsset';
import NoteWindow from '../CommonComponents/NoteWindow';
import AdditionalFieldsWindow from '../CommonComponents/AdditionalFieldsWindow';
import MeterConfigurationHistoryWindow from './MeterConfigurationHistory';
import ExternalDBUpdate from '../CommonComponents/ExternalDBUpdate';

declare var homePath: string;

export default class Meter extends React.Component<{ MeterID: number}, { Meter: OpenXDA.Meter, Tab: string}, {}>{
    constructor(props, context) {
        super(props, context);

        this.state = {
            Meter: null,
            Tab: this.getTab()
        }
    }

    getTab(): string {
        if (sessionStorage.hasOwnProperty('Meter.Tab'))
            return JSON.parse(sessionStorage.getItem('Meter.Tab'));
        else
            return 'notes';
    }

    getMeter(): void {
        if (this.props.MeterID == undefined) return;
       $.ajax({
            type: "GET",
           url: `${homePath}api/OpenXDA/Meter/One/${this.props.MeterID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        }).done((data: OpenXDA.Meter) => this.setState({ Meter: data }));
    }

    deleteMeter(): JQuery.jqXHR {
        return $.ajax({
            type: "DELETE",
            url: `${homePath}api/OpenXDA/Meter/Delete`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(this.state.Meter),
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    setTab(tab:string): void {
        sessionStorage.setItem('Meter.Tab', JSON.stringify(tab));
        this.setState({Tab: tab});
    }
    
    componentDidMount() {
        this.getMeter();
    }

    componentWillUnmount() {
        sessionStorage.clear();
    }

    render() {
        if (this.state.Meter == null) return null;
        return (
            <div style={{ width: '100%', height: window.innerHeight - 63, maxHeight: window.innerHeight - 63, overflow: 'hidden', padding: 15 }}>
                <div className="row">
                    <div className="col">
                        <h2>{this.state.Meter != null ? this.state.Meter.AssetKey : ''}</h2>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger pull-right" hidden={this.state.Meter == null} onClick={() => this.deleteMeter().done(() => window.location.href = homePath + 'index.cshtml?name=Meters')}>Delete Meter (Permanent)</button>
                    </div>
                </div>


                <hr />
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "notes" ? " active" : "")} onClick={() => this.setTab('notes')} data-toggle="tab" href="#notes">Notes</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "meterInfo" ? " active" : "")} onClick={() => this.setTab('meterInfo')} data-toggle="tab" href="#meterInfo">Meter Info</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "additionalFields" ? " active" : "")} onClick={() => this.setTab('additionalFields')} data-toggle="tab" href="#additionalFields">Additional Fields</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "substation" ? " active" : "")} onClick={() => this.setTab('substation')} data-toggle="tab" href="#substation">Substation</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "assets" ? " active" : "")} onClick={() => this.setTab('assets')} data-toggle="tab" href="#assets">Assets</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "channels" ? " active" : "")} onClick={() => this.setTab('channels')} data-toggle="tab" href="#channels">Channels</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "configurationHistory" ? " active" : "")} onClick={() => this.setTab('configurationHistory')} data-toggle="tab" href="#configurationHistory">Configuration History</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "extDB" ? " active" : "")} onClick={() => this.setTab('extDB')} data-toggle="tab" href="#extDB">External DB</a>
                    </li>
                </ul>
             
                <div className="tab-content" style={{maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
                    <div className={"tab-pane " + (this.state.Tab == "notes" ? " active" : "fade")} id="notes">
                        <NoteWindow ID={this.props.MeterID} Type='Meter'/>
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "meterInfo" ? " active" : "fade")} id="meterInfo">
                        <MeterInfoWindow Meter={this.state.Meter} StateSetter={(meter: OpenXDA.Meter) => this.setState({ Meter: meter })} />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "additionalFields" ? " active" : "fade")} id="additionalFields">
                        <AdditionalFieldsWindow ID={this.props.MeterID} Type='Meter' />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "substation" ? " active" : "fade")} id="substation">
                        <MeterLocationWindow Meter={this.state.Meter} StateSetter={(meter: OpenXDA.Meter) => this.setState({ Meter: meter })} />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "channels" ? " active" : "fade")} id="channels">
                        <MeterChannelWindow Meter={this.state.Meter} />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "assets" ? " active" : "fade")} id="assets">
                        <MeterAssetWindow Meter={this.state.Meter} />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "configurationHistory" ? " active" : "fade")} id="configurationHistory">
                        <MeterConfigurationHistoryWindow Meter={this.state.Meter} />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "extDB" ? " active" : "fade")} id="extDB">
                        <ExternalDBUpdate ID={this.props.MeterID} Type='Meter' />
                    </div>
                </div>                
            </div>
        )
    }
}

