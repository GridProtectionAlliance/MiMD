//******************************************************************************************************
//  FormCheckBox.tsx - Gbtc
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
//  01/22/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import _ from 'lodash';

export default class FormCheckBox<T> extends React.Component<{ Record: T, Field: keyof (T), Setter: (record: T) => void, Label?: string, Disabled?: boolean }, {}, {}>{
    render() {
        return <div className="form-check">

            <input type="checkbox" className="form-check-input" style={{ zIndex: 1 }} onChange={(evt) => {
                var record: T = _.clone(this.props.Record);
                record[this.props.Field] = evt.target.checked as any;

                this.props.Setter(record);
            }} value={this.props.Record[this.props.Field] ? 'on' : 'off'} checked={this.props.Record[this.props.Field] ? true : false} disabled={this.props.Disabled == null ? false : this.props.Disabled} />
            <label className="form-check-label" >{this.props.Label == null ? this.props.Field : this.props.Label}</label>

        </div>;
    }
}
