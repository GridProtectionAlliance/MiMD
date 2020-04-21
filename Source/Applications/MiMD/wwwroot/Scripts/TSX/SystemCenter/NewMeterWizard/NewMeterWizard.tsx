//******************************************************************************************************
//  NewMeterWizard.tsx - Gbtc
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
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

declare var homePath: string;
export interface AssetLists {
    Breakers: Array<OpenXDA.Breaker>,
    Buses: Array<OpenXDA.Breaker>,
    CapBanks: Array<OpenXDA.CapBank>,
    Lines: Array<OpenXDA.Line>,
    Transformers: Array<OpenXDA.Transformer>
}

interface WizardState {
    currentStep: number,
    MeterInfo: OpenXDA.Meter,
    LocationInfo: OpenXDA.Location,
    Channels: Array<OpenXDA.Channel>,
    Assets: Array<OpenXDA.Breaker | OpenXDA.Bus | OpenXDA.CapBank | OpenXDA.Line | OpenXDA.Transformer>,
    AssetConnections: Array<OpenXDA.AssetConnection>,
    MeterKeys: Array<string>,
    LocationKeys: Array<string>
}

export default class NewMeterWizard extends React.Component<{}, WizardState, {}>{
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentStep: this.getCurrentStep(), 
            MeterInfo: this.getMeterInfo(),
            LocationInfo: this.getLocationInfo() ,
            Channels: this.getChannels(),
            Assets: this.getAssets(),
            AssetConnections: this.getAssetConnections(),
            MeterKeys: [],
            LocationKeys: []
        };

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.clearData = this.clearData.bind(this);
        this.updateState = this.updateState.bind(this);
        this.getHeader = this.getHeader.bind(this);
        this.disableNext = this.disableNext.bind(this);
        this.addNewMeter = this.addNewMeter.bind(this);

    }

    componentDidMount() {
        this.getMeterKeys();
        this.getLocationKeys();
    }

    componentWillUnmount() {
        sessionStorage.clear();
    }

    getCurrentStep(): number {
        if (localStorage.hasOwnProperty('NewMeterWizard.CurrentStep'))
            return JSON.parse(localStorage.getItem('NewMeterWizard.CurrentStep'))
        else
            return 1

    }

    getMeterInfo(): OpenXDA.Meter {
        if (localStorage.hasOwnProperty('NewMeterWizard.MeterInfo'))
            return JSON.parse(localStorage.getItem('NewMeterWizard.MeterInfo'))
        else
            return {
                ID: 0,
                AssetKey: null,
                Name: null,
                ShortName: null,
                Alias: null,
                Make: null,
                Model: null,
                TimeZone: null,
                Description: null,
                LocationID: 0
            }
    }

    getLocationInfo(): OpenXDA.Location {
        if (localStorage.hasOwnProperty('NewMeterWizard.LocationInfo'))
            return JSON.parse(localStorage.getItem('NewMeterWizard.LocationInfo'))
        else
            return {
                ID: 0,
                LocationKey: null,
                Name: null,
                Alias: null,
                ShortName: null,
                Latitude: null,
                Longitude: null,
                Description: null,
            }
    }

    getChannels(): Array<OpenXDA.Channel> {
        if (localStorage.hasOwnProperty('NewMeterWizard.Channels'))
            return JSON.parse(localStorage.getItem('NewMeterWizard.Channels'))
        else
            return [];
    }

    getAssets(): Array<OpenXDA.Breaker | OpenXDA.Bus | OpenXDA.CapBank | OpenXDA.Line | OpenXDA.Transformer>
    {
        if (localStorage.hasOwnProperty('NewMeterWizard.Assets'))
            return JSON.parse(localStorage.getItem('NewMeterWizard.Assets'))
        else
            return [];
    }

    getAssetConnections(): Array<OpenXDA.AssetConnection> {
        if (localStorage.hasOwnProperty('NewMeterWizard.AssetConnections'))
            return JSON.parse(localStorage.getItem('NewMeterWizard.AssetConnections'))
        else
            return [];
    }

    getMeterKeys(): void {
        if (sessionStorage.hasOwnProperty('NewMeterWizard.MeterKeys'))
            this.setState({ MeterKeys: JSON.parse(sessionStorage.getItem('NewMeterWizard.MeterKeys')) });
        else
            $.ajax({
                type: "GET",
                url: `${homePath}api/OpenXDA/Meter`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            }).done((meters: Array<OpenXDA.Meter>) => {
                var keys = meters.map(a => a.AssetKey.toLowerCase());
                this.setState({ MeterKeys: keys });
                sessionStorage.setItem('NewMeterWizard.MeterKeys', JSON.stringify(keys));
            });
    }

    getLocationKeys(): void {
        if (sessionStorage.hasOwnProperty('NewMeterWizard.LocationKeys'))
            this.setState({ LocationKeys: JSON.parse(sessionStorage.getItem('NewMeterWizard.LocationKeys')) });
        else
            $.ajax({
                type: "GET",
                url: `${homePath}api/OpenXDA/Location`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            }).done((mls: Array<OpenXDA.Location>) => {
                var keys = mls.map(a => a.LocationKey.toLowerCase());
                this.setState({ LocationKeys: keys});
                sessionStorage.setItem('NewMeterWizard.LocationKeys', JSON.stringify(keys));

            });
    }


    addNewMeter(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/Meter/New`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                MeterInfo: this.state.MeterInfo,
                LocationInfo: this.state.LocationInfo,
                Channels: this.state.Channels,
                Assets: this.state.Assets,
                AssetConnections: this.state.AssetConnections
            }),
            dataType: 'json',
            cache: true,
            async: true
        }).done(() => {
            this.clearData();
            window.location.href = homePath + 'index.cshtml?name=Meters';
        }).fail(msg => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
            else {
                this.clearData();
                window.location.href = homePath + 'index.cshtml?name=Meters';
            }
        });
    }

    next() {
        let currentStep = this.state.currentStep;
        // Make sure currentStep is set to something reasonable
        if (currentStep >= 4) {
            currentStep = 5;
        } else {
            currentStep = currentStep + 1;
        }

        localStorage.setItem('NewMeterWizard.CurrentStep', currentStep.toString())
        this.setState({
            currentStep: currentStep
        });
    }

    prev() {
        let currentStep = this.state.currentStep;
        if (currentStep <= 1) {
            currentStep = 1;
        } else {
            currentStep = currentStep - 1;
        }

        localStorage.setItem('NewMeterWizard.CurrentStep', currentStep.toString())
        this.setState({
            currentStep: currentStep
        });
    }

    updateState(state): void {

        if (state.hasOwnProperty('MeterInfo'))
            localStorage.setItem('NewMeterWizard.MeterInfo', JSON.stringify(state.MeterInfo))
        if (state.hasOwnProperty('LocationInfo'))
            localStorage.setItem('NewMeterWizard.LocationInfo', JSON.stringify(state.LocationInfo))
        if (state.hasOwnProperty('Channels'))
            localStorage.setItem('NewMeterWizard.Channels', JSON.stringify(state.Channels))
        if (state.hasOwnProperty('Assets'))
            localStorage.setItem('NewMeterWizard.Assets', JSON.stringify(state.Assets))
        if (state.hasOwnProperty('AssetConnections'))
            localStorage.setItem('NewMeterWizard.AssetConnections', JSON.stringify(state.AssetConnections))

        this.setState(state);
    }

    clearData(): void {
        this.clearLocalStorage();
        sessionStorage.clear();

        this.setState({ MeterInfo: this.getMeterInfo(), LocationInfo: this.getLocationInfo(), Channels: this.getChannels(), currentStep: this.getCurrentStep(), Assets: this.getAssets() });
    }

    clearLocalStorage() {
        if (localStorage.hasOwnProperty('NewMeterWizard.MeterInfo'))
            localStorage.removeItem('NewMeterWizard.MeterInfo')
        if (localStorage.hasOwnProperty('NewMeterWizard.LocationInfo'))
            localStorage.removeItem('NewMeterWizard.LocationInfo')
        if (localStorage.hasOwnProperty('NewMeterWizard.Channels'))
            localStorage.removeItem('NewMeterWizard.Channels')
        if (localStorage.hasOwnProperty('NewMeterWizard.Assets'))
            localStorage.removeItem('NewMeterWizard.Assets')
        if (localStorage.hasOwnProperty('NewMeterWizard.AssetConnections'))
            localStorage.removeItem('NewMeterWizard.AssetConnections')
        if (localStorage.hasOwnProperty('NewMeterWizard.CurrentStep'))
            localStorage.removeItem('NewMeterWizard.CurrentStep')

    }

    getHeader(): string {
        if(this.state.currentStep == 1)
            return "Step 1: General information about the new meter"
        else if (this.state.currentStep == 2)
            return "Step 2: Substation information for the new meter"
        else if (this.state.currentStep == 3)
            return "Step 3: Populate channels for the new meter"
        else if (this.state.currentStep == 4)
            return "Step 4: Populate assets monitored by the new meter"
        else if (this.state.currentStep == 5)
            return "Step 5: Add connection between the assets that are monitored by the new meter"

    }

    getPage() {
        if (this.state.currentStep == 1)
            return <Page1 MeterInfo={this.state.MeterInfo} UpdateState={(meter) => this.updateState({MeterInfo: meter})} />
        else if (this.state.currentStep == 2)
            return <Page2 LocationInfo={this.state.LocationInfo} UpdateState={this.updateState} />
        else if (this.state.currentStep == 3)
            return <Page3 MeterKey={this.state.MeterInfo.AssetKey} Channels={this.state.Channels} UpdateState={this.updateState} />
        else if (this.state.currentStep == 4)
            return <Page4 AssetConnections={this.state.AssetConnections} Channels={this.state.Channels} Assets={this.state.Assets} UpdateState={this.updateState} />
        else if (this.state.currentStep == 5)
            return <Page5 Assets={this.state.Assets} AssetConnections={this.state.AssetConnections} UpdateState={this.updateState} />

    }

    disableNext(): boolean {
        if (this.state.currentStep == 1) {
            var assetKey: boolean = this.state.MeterInfo.AssetKey == null || this.state.MeterInfo.AssetKey.length == 0 || this.state.MeterKeys.indexOf(this.state.MeterInfo.AssetKey.toLowerCase()) >= 0;
            var name: boolean = this.state.MeterInfo.Name == null || this.state.MeterInfo.Name.length == 0;
            var make: boolean = this.state.MeterInfo.Make == null || this.state.MeterInfo.Make.length == 0;
            var model: boolean = this.state.MeterInfo.Model == null || this.state.MeterInfo.Model.length == 0;

            return assetKey || name || make || model;
        }
        else if (this.state.currentStep == 2) {
            var key: boolean = this.state.LocationInfo.LocationKey == null || this.state.LocationInfo.LocationKey.length == 0 || (this.state.LocationKeys.indexOf(this.state.LocationInfo.LocationKey.toLowerCase()) >= 0 && this.state.LocationInfo.ID == 0);
            var name: boolean = this.state.LocationInfo.Name == null || this.state.LocationInfo.Name.length == 0;
            var latitude: boolean = this.state.LocationInfo.Latitude == null;
            var longitude: boolean = this.state.LocationInfo.Longitude == null;

            return key || name || latitude || longitude;
        }
        else if (this.state.currentStep == 3)
            return this.state.Channels.length == 0;
        else if (this.state.currentStep == 4)
            return this.state.Assets.length == 0;


        return true;
    }

    render() {
        return (
            <div style={{padding: 10, height: 'inherit', overflowY: 'hidden'}}>
                <h2>New Meter Wizard</h2>
                <hr/>
                <div className="card" style={{height: 'calc(100% - 75px)'}}>
                    <div className="card-header">
                        <button className="btn btn-primary pull-right" onClick={this.clearData} >Clear Data</button>
                        <h4 style={{width: '90%'}}>{this.getHeader()}</h4>
                    </div>
                    <div className="card-body" style={{maxHeight: 'calc(100% - 126px)'}}>
                        {this.getPage()}
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary pull-left" onClick={this.prev} hidden={this.state.currentStep <= 1}>Prev</button>
                        <button className="btn btn-primary pull-right" onClick={this.next} hidden={this.state.currentStep >= 5} disabled={this.state.currentStep >= 5 || this.disableNext()}>Next</button>
                        <button className="btn btn-primary pull-right" onClick={this.addNewMeter} hidden={this.state.currentStep < 5}>Submit</button>
                    </div>
                </div>

            </div>
        );
    }
}