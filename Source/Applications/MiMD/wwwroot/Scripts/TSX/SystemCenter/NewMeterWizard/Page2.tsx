//******************************************************************************************************
//  Page1.tsx - Gbtc
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
import FormInput from '../CommonComponents/FormInput';
import AssetAttributes from '../AssetAttribute/Asset';
import FormTextArea from '../CommonComponents/FormTextArea';
declare var homePath: string;

export default class Page2 extends React.Component<{ LocationInfo: OpenXDA.Location, UpdateState: (record) => void }, { Locations: Array<OpenXDA.Location> }, {}>{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Locations: []
        }

        this.valid = this.valid.bind(this);
    }
    componentDidMount() {
        this.getAllLocations();
    }


    getAllLocations(): void {
        if (sessionStorage.hasOwnProperty('OpenXDA.Locations'))
            this.setState({ Locations: JSON.parse(sessionStorage.getItem('OpenXDA.Locations')) });
        else
            $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Location`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
            }).done((mls: Array<OpenXDA.Location>) => {
                this.setState({ Locations: mls })
                sessionStorage.setItem('OpenXDA.Locations', JSON.stringify(mls));
            });
    }

    getDifferentMeterLocation(meterLocationID: number): void {
        this.props.UpdateState({ LocationInfo: this.state.Locations.find((value, index, object) => value.ID == meterLocationID) })
    }

    valid(field: keyof (OpenXDA.Location)): boolean {
        if (field == 'LocationKey') {
            if (this.props.LocationInfo.LocationKey == null || this.props.LocationInfo.LocationKey.length == 0 || this.props.LocationInfo.LocationKey.length > 50) return false;
            else if (this.props.LocationInfo.ID == 0)
                return this.state.Locations.find(locs => locs.LocationKey.toLowerCase() == this.props.LocationInfo.LocationKey.toLowerCase()) == null;
            else
                return true;
        }
        else if (field == 'Name')
            return this.props.LocationInfo.Name != null && this.props.LocationInfo.Name.length > 0 && this.props.LocationInfo.Name.length <= 200;
        else if (field == 'Alias')
            return this.props.LocationInfo.Alias == null || this.props.LocationInfo.Alias.length <= 200;
        else if (field == 'ShortName')
            return this.props.LocationInfo.ShortName == null || this.props.LocationInfo.ShortName.length <= 50;
        else if (field == 'Latitude')
            return this.props.LocationInfo.Latitude != null && AssetAttributes.isRealNumber(this.props.LocationInfo.Latitude);
        else if (field == 'Longitude')
            return this.props.LocationInfo.Longitude != null && AssetAttributes.isRealNumber(this.props.LocationInfo.Longitude);
        else if (field == 'Description')
            return true;
        return false;
    }



    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="form-group">

                        <label>Select Location</label>
                        <select className="form-control" value={this.props.LocationInfo.ID == null ? '0' : this.props.LocationInfo.ID} onChange={(evt) => {
                            if (evt.target.value != "0")
                                this.getDifferentMeterLocation(parseInt(evt.target.value));
                            else
                                this.props.UpdateState({
                                    LocationInfo: {
                                        ID: 0,
                                        LocationKey: '',
                                        Name: '',
                                        Alias: '',
                                        ShortName: '',
                                        Latitude: 0,
                                        Longitude: 0,
                                        Description: '',
                                    }
                                });
                        }}>
                            <option value="0">Add New</option>
                            {
                                (this.state.Locations != null ? this.state.Locations.map(ml => <option value={ml.ID} key={ml.ID}>{ml.LocationKey}</option>) : null)
                            }

                        </select>
                    </div>
                    <FormInput<OpenXDA.Location> Record={this.props.LocationInfo} Field='LocationKey' Label='Key' Setter={(record) => this.props.UpdateState({ LocationInfo: record })} Valid={this.valid} Feedback='A unique Key is required and must be less than 50 characters.' Disabled={this.props.LocationInfo.ID != 0}/>
                    <FormInput<OpenXDA.Location> Record={this.props.LocationInfo} Field='Name' Setter={(record) => this.props.UpdateState({ LocationInfo: record })} Valid={this.valid} Feedback='Name is required and must be less than 200 characters.' Disabled={this.props.LocationInfo.ID != 0}/>
                    <FormInput<OpenXDA.Location> Record={this.props.LocationInfo} Field='ShortName' Label='Short Name' Setter={(record) => this.props.UpdateState({ LocationInfo: record })} Valid={this.valid} Feedback='Short Name must be less than 50 characters.' Disabled={this.props.LocationInfo.ID != 0}/>
                </div>
                <div className="col">
                    <FormInput<OpenXDA.Location> Record={this.props.LocationInfo} Field='Alias' Setter={(record) => this.props.UpdateState({ LocationInfo: record })} Valid={this.valid} Feedback='Alias must be less than 200 characters.' Disabled={this.props.LocationInfo.ID != 0}/>
                    <FormInput<OpenXDA.Location> Record={this.props.LocationInfo} Field='Latitude' Setter={(record) => this.props.UpdateState({ LocationInfo: record })} Valid={this.valid} Feedback='Latitude is a required numeric field.' Disabled={this.props.LocationInfo.ID != 0}/>
                    <FormInput<OpenXDA.Location> Record={this.props.LocationInfo} Field='Longitude' Setter={(record) => this.props.UpdateState({ LocationInfo: record })} Valid={this.valid} Feedback='Longitude is a required numeric field.' Disabled={this.props.LocationInfo.ID != 0}/>
                    <FormTextArea<OpenXDA.Location> Rows={3} Record={this.props.LocationInfo} Field='Description' Setter={(record) => this.props.UpdateState({ LocationInfo: record })} Valid={this.valid} Feedback='' Disabled={this.props.LocationInfo.ID != 0}/>
                </div>
            </div>
        );
    }

}

