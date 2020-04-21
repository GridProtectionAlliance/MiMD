//******************************************************************************************************
//  MeterInfo.tsx - Gbtc
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
//  09/09/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


import * as React from 'react';
import * as _ from 'lodash';
import { OpenXDA, SystemCenter } from '../global';
import FormInput from '../CommonComponents/FormInput';
import FormTextArea from '../CommonComponents/FormTextArea';
declare var homePath: string;

export default class MeterInfoWindow extends React.Component<{ Meter: OpenXDA.Meter, StateSetter: (meter: OpenXDA.Meter) => void }, { Meter: OpenXDA.Meter, TimeZones: Array<SystemCenter.ValueListItem> }, {}> {
    jqueryHandle: JQuery.jqXHR;
    constructor(props, context) {
        super(props, context);

        this.state = {
            TimeZones: [],
            Meter: this.props.Meter
        }

        this.valid = this.valid.bind(this);
    }

    componentDidMount() {
        this.getTimeZones();
    }

    componentWillReceiveProps(nextProps): void {
        this.setState({ Meter: nextProps.Meter });
    }

    getTimeZones(): void {
        if (sessionStorage.hasOwnProperty('SystemCenter.TimeZones'))
            this.setState({ TimeZones: JSON.parse(sessionStorage.getItem('SystemCenter.TimeZones')) });
        else
            $.ajax({
                type: "GET",
                url: `${homePath}api/ValueList/Group/TimeZones`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            }).done((tzs: Array<SystemCenter.ValueListItem>) => {
                this.setState({ TimeZones: tzs });
                sessionStorage.setItem('SystemCenter.TimeZones', JSON.stringify(tzs));

            });
    }

    updateMeter(): void {
       $.ajax({
            type: "PATCH",
            url: `${homePath}api/OpenXDA/Meter/Update`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(this.state.Meter),
            dataType: 'json',
            cache: true,
            async: true
       }).done((meter: OpenXDA.Meter) => {
           this.props.StateSetter(meter);
       });
    }

    valid(field: keyof (OpenXDA.Meter)): boolean {
        if (field == 'AssetKey')
            return this.props.Meter.AssetKey != null && this.props.Meter.AssetKey.length > 0 && this.props.Meter.AssetKey.length <= 50;
        else if (field == 'Name')
            return this.props.Meter.Name != null && this.props.Meter.Name.length > 0 && this.props.Meter.Name.length <= 200;
        else if (field == 'Alias')
            return this.props.Meter.Alias == null || this.props.Meter.Alias.length <= 200;
        else if (field == 'ShortName')
            return this.props.Meter.ShortName == null || this.props.Meter.ShortName.length <= 50;
        else if (field == 'Make')
            return this.props.Meter.Name != null && this.props.Meter.Make.length > 0 && this.props.Meter.Make.length <= 200;
        else if (field == 'Model')
            return this.props.Meter.Name != null && this.props.Meter.Model.length > 0 && this.props.Meter.Model.length <= 200;
        else if (field == 'Description')
            return true;
        return false;
    }

    updateState(meter: OpenXDA.Meter) {
        this.setState({ Meter: meter });
    }

    render() {
        if (this.props.Meter == null) return null;
        return (
            <div className="card" style={{ marginBottom: 10 }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h4>Meter Information:</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <FormInput<OpenXDA.Meter> Record={this.state.Meter} Field={'AssetKey'} Feedback={'A unique key of less than 50 characters is required.'} Valid={this.valid} Setter={this.updateState} />
                            <FormInput<OpenXDA.Meter> Record={this.state.Meter} Field={'Name'} Feedback={'Name must be less than 200 characters and is required.'} Valid={this.valid} Setter={this.updateState} />
                            <FormInput<OpenXDA.Meter> Record={this.state.Meter} Field={'ShortName'} Feedback={'ShortName must be less than 50 characters.'} Valid={this.valid} Setter={this.updateState} />
                            <FormInput<OpenXDA.Meter> Record={this.state.Meter} Field={'Alias'} Feedback={'Alias must be less than 200 characters.'} Valid={this.valid} Setter={this.updateState} />
                        </div>
                        <div className="col">

                            <FormInput<OpenXDA.Meter> Record={this.state.Meter} Field={'Make'} Feedback={'Make must be less than 200 characters.'} Valid={this.valid} Setter={this.updateState} />
                            <FormInput<OpenXDA.Meter> Record={this.state.Meter} Field={'Model'} Feedback={'Model must be less than 200 characters.'} Valid={this.valid} Setter={this.updateState} />
                            <div className="form-group">

                                <label>Time Zone</label>
                                <select className="form-control" value={this.state.Meter == null || this.state.Meter.TimeZone == null ? '-1' : this.state.Meter.TimeZone} onChange={(evt) => {
                                    var meter: OpenXDA.Meter = _.clone(this.state.Meter);
                                    if (evt.target.value != "-1")
                                        meter.TimeZone = evt.target.value;
                                    else
                                        meter.TimeZone = null;
                                    this.setState({ Meter: meter });
                                }}>
                                    <option value="-1">None Selected</option>
                                    {
                                        (this.state.TimeZones != null ? this.state.TimeZones.sort((a, b) => a.SortOrder - b.SortOrder).map(tz => <option value={tz.Text} key={tz.Text} disabled={!tz.Enabled} hidden={tz.Hidden}>{tz.AltText1}</option>): null)
                                    }
                                </select>

                                <FormTextArea<OpenXDA.Meter> Rows={3} Record={this.state.Meter} Field={'Description'} Valid={this.valid} Setter={this.updateState} />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary" type="submit" onClick={() => this.updateMeter()} disabled={this.state.Meter == this.props.Meter}>Save Changes</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-default" onClick={() => this.setState({ Meter: this.props.Meter })} disabled={this.state.Meter == this.props.Meter}>Clear Changes</button>
                    </div>
                </div>

            </div>
        );
    }
}
