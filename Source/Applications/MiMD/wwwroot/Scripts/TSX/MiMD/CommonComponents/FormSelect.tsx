//******************************************************************************************************
//  FormSelect.tsx - Gbtc
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
//  01/28/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { MiMD } from '../global';

export default class FormSelect<T> extends React.Component<{ Record: T, Field: keyof (T), Options: Array<{Value: string, Label: string }>, Setter: (record: T) => void, Label?: string, Disabled?: boolean, EmptyOption?: boolean }, {}, {}>{
    render() {
        return <div className="form-group">
            <label>{this.props.Label == null ? this.props.Field : this.props.Label}</label>
            <select className="form-control" onChange={(evt) => {
                var record: T = _.clone(this.props.Record);
                if (evt.target.value != "")
                    record[this.props.Field] = evt.target.value as any;
                else
                    record[this.props.Field] = null;

                this.props.Setter(record);
            }} value={this.props.Record[this.props.Field] == null ? '' : this.props.Record[this.props.Field].toString()} disabled={this.props.Disabled == null ? false : this.props.Disabled}>
                {(this.props.EmptyOption ? <option value=''></option> : null)}
                {this.props.Options.map((a, i) => <option key={i} value={a.Value}>{a.Label}</option>)}
            </select>
        </div>;
    }
}

export function FormSelectValueList<T>(props:{ Record: T, Field: keyof (T),ValueListGroup: string, Setter: (record: T) => void, Label?: string, Disabled?: boolean, EmptyOption?: boolean }){
    const [options, setOptions] = React.useState<Array<MiMD.ValueListItem>>([]);

    function getOptions() {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/ValueList/${props.ValueListGroup}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        })
        handle.done(valueListGroups => setOptions(valueListGroups)).fail((msg) => console.log(msg.responseJSON));
        return handle;
    }


    return <div className="form-group">
            <label>{props.Label == null ? props.Field : props.Label}</label>
            <select className="form-control" onChange={(evt) => {
                var record: T = _.clone(props.Record);
                if (evt.target.value != "")
                    record[props.Field] = evt.target.value as any;
                else
                    record[props.Field] = null;

                props.Setter(record);
            }} value={props.Record[props.Field] == null ? '' : props.Record[props.Field].toString()} disabled={props.Disabled == null ? false : props.Disabled}>
                {(props.EmptyOption ? <option value=''></option> : null)}
                {options.map((a, i) => <option key={i} value={a.Value}>{a.Text}</option>)}
            </select>
        </div>;
}
