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
import { OpenXDA, SystemCenter } from '../global';
import FormInput from '../CommonComponents/FormInput';
import FormTextArea from '../CommonComponents/FormTextArea';

declare var homePath: string;

export default class Page1 extends React.Component<{ MeterInfo: OpenXDA.Meter, UpdateState: (record: OpenXDA.Meter) => void }, { TimeZones: Array<SystemCenter.ValueListItem>, MeterKeys: Array<string> }, {}>{
    constructor(props, context) {
        super(props, context);
        this.state = {
            TimeZones: [],
            MeterKeys: []
        }

        this.valid = this.valid.bind(this);
    }

    componentDidMount() {
        this.getMeterKeys();
        this.getTimeZones();

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


    valid(field: keyof (OpenXDA.Meter)): boolean {
        if (field == 'AssetKey')
            return this.props.MeterInfo.AssetKey != null && this.state.MeterKeys.indexOf(this.props.MeterInfo.AssetKey.toLowerCase()) < 0 &&this.props.MeterInfo.AssetKey.length > 0 && this.props.MeterInfo.AssetKey.length <= 50;
        else if (field == 'Name')
            return this.props.MeterInfo.Name != null && this.props.MeterInfo.Name.length > 0 && this.props.MeterInfo.Name.length <= 200;
        else if (field == 'Alias')
            return this.props.MeterInfo.Alias == null || this.props.MeterInfo.Alias.length <= 200;
        else if (field == 'ShortName')
            return this.props.MeterInfo.ShortName == null || this.props.MeterInfo.ShortName.length <= 50;
        else if (field == 'Make')
            return this.props.MeterInfo.Make != null && this.props.MeterInfo.Make.length > 0 && this.props.MeterInfo.Make.length <= 200;
        else if (field == 'Model')
            return this.props.MeterInfo.Model != null && this.props.MeterInfo.Model.length > 0 && this.props.MeterInfo.Model.length <= 200;
        else if (field == 'Description')
            return true;
        return false;
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <FormInput<OpenXDA.Meter> Record={this.props.MeterInfo} Field={'AssetKey'} Feedback={'A unique key of less than 50 characters is required.'} Valid={this.valid} Setter={this.props.UpdateState} />
                    <FormInput<OpenXDA.Meter> Record={this.props.MeterInfo} Field={'Name'} Feedback={'Name must be less than 200 characters and is required.'} Valid={this.valid} Setter={this.props.UpdateState} />
                    <FormInput<OpenXDA.Meter> Record={this.props.MeterInfo} Field={'ShortName'} Feedback={'ShortName must be less than 50 characters.'} Valid={this.valid} Setter={this.props.UpdateState} />
                    <FormInput<OpenXDA.Meter> Record={this.props.MeterInfo} Field={'Alias'} Feedback={'Alias must be less than 200 characters.'} Valid={this.valid} Setter={this.props.UpdateState} />
                </div>
                <div className="col">
                    <FormInput<OpenXDA.Meter> Record={this.props.MeterInfo} Field={'Make'} Feedback={'Make must be less than 200 characters.'} Valid={this.valid} Setter={this.props.UpdateState} />
                    <FormInput<OpenXDA.Meter> Record={this.props.MeterInfo} Field={'Model'} Feedback={'Model must be less than 200 characters.'} Valid={this.valid} Setter={this.props.UpdateState} />
                    <div className="form-group">
                        <label>Time Zone</label>
                        <select className="form-control" value={this.props.MeterInfo == null || this.props.MeterInfo.TimeZone == null ? '-1' : this.props.MeterInfo.TimeZone} onChange={(evt) => {
                            var meter: OpenXDA.Meter = _.clone(this.props.MeterInfo);
                            if (evt.target.value != "-1")
                                meter.TimeZone = evt.target.value;
                            else
                                meter.TimeZone = null;
                            this.props.UpdateState(meter);
                        }}>
                            <option value="-1">None Selected</option>
                            {
                                (this.state.TimeZones != null ? this.state.TimeZones.sort((a, b) => a.SortOrder - b.SortOrder).map(tz => <option value={tz.Text} key={tz.Text} disabled={!tz.Enabled} hidden={tz.Hidden}>{tz.AltText1}</option>) : null)
                            }
                        </select>
                    </div>
                    <FormTextArea<OpenXDA.Meter> Rows={3} Record={this.props.MeterInfo} Field={'Description'} Valid={this.valid} Setter={this.props.UpdateState} />
                </div>
            </div>
        );
    }

}

