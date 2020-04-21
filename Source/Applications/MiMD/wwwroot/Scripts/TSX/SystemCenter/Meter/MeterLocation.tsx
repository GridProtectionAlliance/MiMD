//******************************************************************************************************
//  ConnectionInfo.tsx - Gbtc
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
//  09/11/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import * as React from 'react';
import * as _ from 'lodash';
import { OpenXDA } from '../global';
import AssetAttributes from '../AssetAttribute/Asset';
import FormInput from '../CommonComponents/FormInput';
import FormTextArea from '../CommonComponents/FormTextArea';
declare var homePath: string;

export default class LocationWindow extends React.Component<{ Meter: OpenXDA.Meter, StateSetter: (OpenXDAMeter) => void }, { Location: OpenXDA.Location, changed: boolean, Locations: Array<OpenXDA.Location>}, {}> {
    jqueryHandle: JQuery.jqXHR;
    constructor(props, context) {
        super(props, context);

        this.state = {
            Location: {
                ID: 0,
                LocationKey: null,
                Name: null,
                Alias: null,
                ShortName: null,
                Latitude: null,
                Longitude: null,
                Description: null,
            },
            changed: false,
            Locations: []
        }

        this.valid = this.valid.bind(this);
        this.updateState = this.updateState.bind(this);

    }


    componentDidMount() {
        this.getAllLocations();
        this.getLocation(this.props.Meter);
    }

    componentWillReceiveProps(nextProps): void {
        if (this.state.Location.ID != nextProps.Meter.LocationID)
            this.getLocation(nextProps.Meter);
    }


    getLocation(meter: OpenXDA.Meter): void {
        if (meter == null || meter.LocationID == null) return;
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Location/One/${meter.LocationID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((location: OpenXDA.Location) => this.setState({ Location: location, changed: false }));
    }

    getDifferentLocation(locationID: number): JQuery.jqXHR {
        var jqueryHandle = $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Location/One/${locationID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });

        return jqueryHandle.done((location: OpenXDA.Location) => this.setState({ Location: location, changed: true }));
    }

    getAllLocations(): void {
        if (sessionStorage.hasOwnProperty('SystemCenter.Locations'))
            this.setState({ Locations: JSON.parse(sessionStorage.getItem('SystemCenter.Locations')) });
        else
            $.ajax({
                type: "GET",
                url: `${homePath}api/OpenXDA/Location`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            }).done(mls => {
                this.setState({ Locations: mls })
                sessionStorage.setItem('SystemCenter.Locations', JSON.stringify(mls));
            });
    }


    addNewLocation(): JQuery.jqXHR {
        var location: any = _.clone(this.state.Location);
        location.MeterID = this.props.Meter.ID;

        return $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/Location/Add`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(location),
            dataType: 'json',
            cache: true,
            async: true
        }).done((location: OpenXDA.Location) => {      
            this.setState({ Location: location, changed: false },() => this.getAllLocations())
        });
    }


    updateLocation(): JQuery.jqXHR {
        var location: OpenXDA.Location = _.clone(this.state.Location);
        var meter: OpenXDA.Meter = _.clone(this.props.Meter);

       return $.ajax({
            type: "PATCH",
            url: `${homePath}api/OpenXDA/Location/Update`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(this.state.Location),
            dataType: 'json',
            cache: true,
            async: true
       }).done((locationID: number) => {
           if (location.ID != meter.LocationID) {
               meter.LocationID = this.state.Location.ID;
               $.ajax({
                   type: "PATCH",
                   url: `${homePath}api/OpenXDA/Meter/Update`,
                   contentType: "application/json; charset=utf-8",
                   data: JSON.stringify(meter),
                   dataType: 'json',
                   cache: true,
                   async: true
               }).done((msg) => {
                   this.props.StateSetter(meter);
               });

           }

           this.setState({ changed: false }, () => this.getAllLocations())
       });
    }

    valid(field: keyof (OpenXDA.Location)): boolean {
        if (field == 'LocationKey')
            return this.state.Location.LocationKey != null && this.state.Location.LocationKey.length > 0 && this.state.Location.LocationKey.length <= 50;
        else if (field == 'Name')
            return this.state.Location.Name != null && this.state.Location.Name.length > 0 && this.state.Location.Name.length <= 200;
        else if (field == 'Alias')
            return this.state.Location.Alias == null || this.state.Location.Alias.length <= 200;
        else if (field == 'ShortName')
            return this.state.Location.ShortName == null || this.state.Location.ShortName.length <= 50;
        else if (field == 'Latitude')
            return this.state.Location.Latitude != null && AssetAttributes.isRealNumber(this.state.Location.Latitude);
        else if (field == 'Longitude')
            return this.state.Location.Longitude != null && AssetAttributes.isRealNumber(this.state.Location.Longitude);
        else if (field == 'Description')
            return true;
        return false;
    }

    updateState(location: OpenXDA.Location) {
        this.setState({ Location: location, changed: true });
    }


    render() {
        return (
            <div className="card" style={{ marginBottom: 10 }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h4>Meter Location / Substation Information:</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">

                                <label>Select Location</label>
                                <select className="form-control" value={this.state.Location.ID == null ? '0' : this.state.Location.ID} onChange={(evt) => {
                                    var location: OpenXDA.Location = _.clone(this.state.Location);
                                    if (evt.target.value != "0")
                                        this.getDifferentLocation(parseInt(evt.target.value));
                                    else
                                        this.setState({
                                            Location: {
                                                ID: 0,
                                                LocationKey: null,
                                                Name: null,
                                                Alias: null,
                                                ShortName: null,
                                                Latitude: null,
                                                Longitude: null,
                                                Description: null,

                                            }, changed: true
                                        });
                                }}>
                                    <option value="0">Add New</option>
                                    {
                                        (this.state.Locations != null ? this.state.Locations.map(ml => <option value={ml.ID} key={ml.ID}>{ml.LocationKey}</option>): null)
                                    }

                                </select>
                            </div>

                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'LocationKey'} Label={'Key'} Feedback={'A unique key of less than 50 characters is required.'} Valid={this.valid} Setter={this.updateState} />
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'Name'} Feedback={'Name must be less than 200 characters and is required.'} Valid={this.valid} Setter={this.updateState} />
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'ShortName'} Feedback={'ShortName must be less than 50 characters.'} Valid={this.valid} Setter={this.updateState} />
                            
                        </div>
                        <div className="col">
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'Alias'} Feedback={'Alias must be less than 200 characters.'} Valid={this.valid} Setter={this.updateState} />
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'Latitude'} Feedback={'Latitude is a require numeric field.'} Valid={this.valid} Setter={this.updateState} />
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'Longitude'} Feedback={'Longitude is a require numeric field.'} Valid={this.valid} Setter={this.updateState} />
                            <FormTextArea<OpenXDA.Location> Rows={3} Record={this.state.Location} Field={'Description'} Valid={this.valid} Setter={this.updateState} />
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary" onClick={() => this.addNewLocation()} hidden={this.state.Location.ID != 0} disabled={!this.state.changed}>Add New</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary" onClick={() => this.updateLocation()} hidden={this.state.Location.ID == 0} disabled={!this.state.changed}>Update</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-default" onClick={() => this.getLocation(this.props.Meter)} disabled={!this.state.changed}>Reset</button>
                    </div>
                </div>


            </div>
        );
    }
}
