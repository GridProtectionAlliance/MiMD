//******************************************************************************************************
//  FormValueListSelect.tsx - Gbtc
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
//  02/05/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { SystemCenter } from "../global";
import * as React from "react";

declare var homePath: string;

export default class FormValueListSelect extends React.Component<{ valueListGroupID: number, field: any, onChange(evt: React.ChangeEvent, fieldName: string, result: any): any, disabled: boolean }, { options: Array<SystemCenter.ValueListItem> }, {}> {

    constructor(props, context) {
        super(props, context)
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        if (this.props.field.FieldType != "integer" && this.props.field.FieldType != "number" && this.props.field.FieldType != "string" && this.props.field.FieldType != "boolean")
            this.getOptions();
    }


    getOptions() {
        $.ajax({
            type: "GET",
            url: `${homePath}api/ValueList/${this.props.valueListGroupID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        }).done(valueListGroups => this.setState({ options: valueListGroups })).fail((msg) => console.log(msg.responseJSON));
    }

    render() {
        if (this.props.field.FieldType == "integer") {
            return (
                <>
                    <label key={this.props.field.AssetTypeFieldValueID}>{this.props.field.FieldName}</label>
                    <input className="form-control" type="number" step="1" value={(this.props.field.AssetTypeFieldValue != null ? this.props.field.AssetTypeFieldValue : '')} onChange={(evt) => this.props.onChange(evt, this.props.field.FieldName, (evt.target.value != '' ? evt.target.value : null))} disabled={this.props.disabled}/>
                </>);
        }
        else if (this.props.field.FieldType == "number")
            return (
                <>
                    <label key={this.props.field.AssetTypeFieldValueID}>{this.props.field.FieldName}</label>
                    <input className="form-control" type="number" value={(this.props.field.AssetTypeFieldValue != null ? this.props.field.AssetTypeFieldValue : '')} onChange={(evt) => this.props.onChange(evt, this.props.field.FieldName, (evt.target.value != '' ? evt.target.value : null))} disabled={this.props.disabled}/>
                </>);
        else if (this.props.field.FieldType == "string")
            return (
                <>
                    <label key={this.props.field.AssetTypeFieldValueID}>{this.props.field.FieldName}</label>
                    <input className="form-control" type="string" value={(this.props.field.AssetTypeFieldValue != null ? this.props.field.AssetTypeFieldValue : '')} onChange={(evt) => this.props.onChange(evt, this.props.field.FieldName, (evt.target.value != '' ? evt.target.value : null))} disabled={this.props.disabled}/>
                </>);
        else if (this.props.field.FieldType == "boolean")
            return (
                <div className='form-check'>
                    <input className="form-check-input" type="checkbox" checked={Boolean((this.props.field.AssetTypeFieldValue != null ? this.props.field.AssetTypeFieldValue : ''))} onChange={(evt) => this.props.onChange(evt, this.props.field.FieldName, (evt.target.checked ? evt.target.checked : null))} disabled={this.props.disabled}/>
                    <label className='form-check-label' key={this.props.field.AssetTypeFieldValueID}>{this.props.field.FieldName}</label>
                </div>
            );

        else
            return (
                <>
                    <label key={this.props.field.AssetTypeFieldValueID}>{this.props.field.FieldName}</label>
                    <select className='form-control' value={(this.props.field.AssetTypeFieldValue != null ? this.props.field.AssetTypeFieldValue : '')} onChange={(evt) => this.props.onChange(evt, this.props.field.FieldName, (evt.target.value != '' ? evt.target.value : null))} disabled={this.props.disabled}>
                        <option value=''></option>
                        {
                            this.state.options.map(x => <option key={x.ID} value={x.Text}>{x.Text}</option>)
                        }
                    </select>
                </>);

    }
}
