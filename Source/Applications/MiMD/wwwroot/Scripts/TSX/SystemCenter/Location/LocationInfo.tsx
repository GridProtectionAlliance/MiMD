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
import FormTextArea from '../CommonComponents/FormTextArea';
import FormInput from '../CommonComponents/FormInput';
declare var homePath: string;

export default class LocationInfoWindow extends React.Component<{ Location: OpenXDA.Location, stateSetter: (location: OpenXDA.Location) => void }, { Location: OpenXDA.Location}, {}> {
    jqueryHandle: JQuery.jqXHR;
    constructor(props, context) {
        super(props, context);
        this.state = {
            Location: this.props.Location
        }
        this.valid = this.valid.bind(this);
    }


    componentDidMount() {
    }

    componentWillReceiveProps(nextProps): void {
        this.setState({Location: nextProps.Location})
    }

    updateLocation(): JQuery.jqXHR {
        var location: OpenXDA.Location = _.clone(this.state.Location);

       return $.ajax({
            type: "PATCH",
            url: `${homePath}api/OpenXDA/Location/Update`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(this.state.Location),
            dataType: 'json',
            cache: true,
            async: true
       }).done((LocationID: number) => {
            this.props.stateSetter(location);
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

    render() {
        return (
            <div className="card" style={{ marginBottom: 10 }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h4>Substation Information:</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'LocationKey'} Feedback={'A unique key of less than 50 characters is required.'} Valid={this.valid} Setter={(location) => this.setState({ Location: location })} />
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'Name'} Feedback={'Name must be less than 200 characters and is required.'} Valid={this.valid} Setter={(location) => this.setState({ Location: location })} />
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'ShortName'} Feedback={'ShortName must be less than 50 characters.'} Valid={this.valid} Setter={(location) => this.setState({ Location: location })} />
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'Alias'} Feedback={'Alias must be less than 200 characters.'} Valid={this.valid} Setter={(location) => this.setState({ Location: location })} />
                        </div>
                        <div className="col">
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'Latitude'} Feedback={'Latitude is a require numeric field.'} Valid={this.valid} Setter={(location) => this.setState({ Location: location })} />
                            <FormInput<OpenXDA.Location> Record={this.state.Location} Field={'Longitude'} Feedback={'Longitude is a require numeric field.'} Valid={this.valid} Setter={(location) => this.setState({Location: location})}/>
                            <FormTextArea<OpenXDA.Location> Rows={3} Record={this.state.Location} Field={'Description'} Valid={this.valid} Setter={(location) => this.setState({ Location: location })} />
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary" onClick={() => this.updateLocation()} hidden={this.state.Location.ID == 0} disabled={this.state.Location == this.props.Location}>Update</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-default" onClick={() => this.setState({ Location: this.props.Location })} disabled={this.state.Location == this.props.Location}>Reset</button>
                    </div>
                </div>


            </div>
        );
    }
}