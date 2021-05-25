//******************************************************************************************************
//  MultiInputField.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  03/15/2021 - C. Lackner
//       Generated original version of source cod
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { PRC002 } from '../ComplianceModels';


declare var homePath: string;

 const MultiInputField = (props: { data: PRC002.IConfigField, Setter: (record: PRC002.IConfigField) => void }) => {
        const [listValues, setListValues] = React.useState<Array<string>>([]);

        React.useEffect(() => {
            setListValues(props.data.Value.split(';'))
        }, [props.data])

        function Set(index, value) {
            let rec = _.cloneDeep(props.data);
            let lst = _.clone(listValues);
            lst[index] = value;
            rec.Value = lst.join(';');
            props.Setter(rec)
        }

        function AddNew() {
            let rec = _.cloneDeep(props.data);
            let lst = _.clone(listValues);
            lst.push((props.data.FieldType == 'string' ? 'Value' : '0'))
            rec.Value = lst.join(';');
            props.Setter(rec)
        }

        function remove(index) {
            let rec = _.cloneDeep(props.data);
            let lst = _.clone(listValues);
            lst.splice(index, 1)
            rec.Value = lst.join(';');
            props.Setter(rec)
        }

        return (
            <>
                {listValues.map((item, index) =>
                    <div className="form-group">
                        {index == 0 ? <label>Values</label> : null}
                        <div className="input-group">
                            <input className="form-control" onChange={(evt) => { Set(index, evt.target.value as string) }} value={item} />
                            <div className="input-group-append" onClick={() => remove(index)}>
                                <span className="input-group-text"><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                )}
                <button type="button" className="btn btn-primary btn-sm" onClick={() => AddNew()}> Add </button>
            </>)
}

export default MultiInputField;

