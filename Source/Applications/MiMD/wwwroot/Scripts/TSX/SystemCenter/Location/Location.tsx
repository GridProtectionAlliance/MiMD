//******************************************************************************************************
//  Location.tsx - Gbtc
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
import * as _ from 'lodash';
import { OpenXDA } from '../global';
import LocationInfoWindow from './LocationInfo';
import LocationMeterWindow from './LocationMeter';
import LocationAssetWindow from './LocationAsset';
import NoteWindow from '../CommonComponents/NoteWindow';
import AdditionalFieldsWindow from '../CommonComponents/AdditionalFieldsWindow';
import ExternalDBUpdate from '../CommonComponents/ExternalDBUpdate';

declare var homePath: string;

export default class Location extends React.Component<{ LocationID: number }, { Location: OpenXDA.Location, Tab: string}, {}>{
    constructor(props, context) {
        super(props, context);

        this.state = {
            Location: null,
            Tab: this.getTab()
        }
    }

    getTab(): string {
        if (sessionStorage.hasOwnProperty('Location.Tab'))
            return JSON.parse(sessionStorage.getItem('Location.Tab'));
        else
            return 'notes';
    }

    getLocation(): void {
    if (this.props.LocationID == undefined) return;
       $.ajax({
        type: "GET",
           url: `${homePath}api/OpenXDA/Location/One/${this.props.LocationID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        }).done((data: OpenXDA.Location) => this.setState({ Location: data }));
    }

    deleteLocation(): JQuery.jqXHR {
        return $.ajax({
            type: "DELETE",
            url: `${homePath}api/OpenXDA/Location/Delete`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(this.state.Location),
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    setTab(tab:string): void {
        sessionStorage.setItem('Location.Tab', JSON.stringify(tab));
        this.setState({Tab: tab});
    }
    
    componentDidMount() {
        this.getLocation();
    }

    componentWillUnmount() {
        sessionStorage.clear();
    }

    render() {
        if (this.state.Location == null) return null;
        return (
            <div style={{ width: '100%', height: window.innerHeight - 63, maxHeight: window.innerHeight - 63, overflow: 'hidden', padding: 15 }}>
                <div className="row">
                    <div className="col">
                        <h2>{this.state.Location != null ? this.state.Location.LocationKey : ''}</h2>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger pull-right" hidden={this.state.Location == null} onClick={() => this.deleteLocation().done(() => window.location.href = homePath + 'index.cshtml?name=Locations')}>Delete Location (Permanent)</button>
                    </div>
                </div>


                <hr />
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "notes" ? " active" : "")} onClick={() => this.setTab('notes')} data-toggle="tab" href="#notes">Notes</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "locationInfo" ? " active" : "")} onClick={() => this.setTab('locationInfo')} data-toggle="tab" href="#locationInfo">Location Info</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "additionalFields" ? " active" : "")} onClick={() => this.setTab('additionalFields')} data-toggle="tab" href="#additionalFields">Additional Fields</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "meters" ? " active" : "")} onClick={() => this.setTab('meters')} data-toggle="tab" href="#meters">Meters</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "assets" ? " active" : "")} onClick={() => this.setTab('assets')} data-toggle="tab" href="#assets">Assets</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "extDB" ? " active" : "")} onClick={() => this.setTab('extDB')} data-toggle="tab" href="#extDB">External DB</a>
                    </li>
                </ul>
             
                <div className="tab-content" style={{maxHeight: window.innerHeight - 215, overflow: 'hidden' }}>
                    <div className={"tab-pane " + (this.state.Tab == "notes" ? " active" : "fade")} id="notes">
                        <NoteWindow ID={this.props.LocationID} Type='Location'/>
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "locationInfo" ? " active" : "fade")} id="locationInfo">
                        <LocationInfoWindow Location={this.state.Location} stateSetter={(Location: OpenXDA.Location) => this.setState({ Location: Location })} />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "additionalFields" ? " active" : "fade")} id="additionalFields">
                        <AdditionalFieldsWindow ID={this.props.LocationID} Type='Location' />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "meters" ? " active" : "fade")} id="meters">
                        <LocationMeterWindow Location={this.state.Location} />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "assets" ? " active" : "fade")} id="assets">
                        <LocationAssetWindow Location={this.state.Location} />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "extDB" ? " active" : "fade")} id="extDB">
                        <ExternalDBUpdate ID={this.props.LocationID} Type='Location'/>
                    </div>

                </div>                
            </div>
        )
    }
}

