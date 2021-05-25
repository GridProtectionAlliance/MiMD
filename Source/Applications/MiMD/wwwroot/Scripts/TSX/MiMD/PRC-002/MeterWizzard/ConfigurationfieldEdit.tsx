//******************************************************************************************************
//  CofigurationFieldEdit.tsx - Gbtc
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
import { Input, Select } from '@gpa-gemstone/react-forms';
import MultiInputField from './MultiInputField';
import { ToolTip } from '@gpa-gemstone/react-interactive';


declare var homePath: string;
const ConfigFieldEdit = (props: { Field: PRC002.IConfigField, Setter: (record: PRC002.IConfigField) => void }) => {
    const [hover, sethover] = React.useState<boolean>(false);

    const FieldTypeOptions = [{ Value: 'string', Label: 'Text' }, { Value: 'number', Label: 'Number' }];
    const NumberChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: '>', Label: '>' }, { Value: '<', Label: '<' }];
    const TextChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: 'IN', Label: 'In' }];

    const hasDesc = props.Field.Description != undefined && props.Field.Description.length > 0;


    function ValidValue(): boolean {
        return (props.Field.Value != null && props.Field.Value.length > 0 && (props.Field.FieldType != 'number' || !isNaN(parseFloat(props.Field.Value))))
    }
    return (<>
        <Select<PRC002.IConfigField> Record={props.Field} Field={'FieldType'} Options={FieldTypeOptions} Label={'Field Type'} Setter={(record) => {
            if (record.FieldType !== props.Field.FieldType && record.Comparison != '<>' && record.Comparison != '=')
                record.Comparison = '=';
            props.Setter(record);
        }} />
        <Input<PRC002.IConfigField> Record={props.Field} Field={'Category'} Setter={(record) => { props.Setter(record) }} Valid={() => true} Label={'Category'} />
        <Input<PRC002.IConfigField> Record={props.Field} Field={'Label'} Setter={(record) => { props.Setter(record) }} Valid={() => props.Field.Label != null && props.Field.Label.length > 0} Label={'Field Name'} />
        <Input<PRC002.IConfigField> Record={props.Field} Field={'Name'} Setter={(record) => { props.Setter(record) }} Valid={() => props.Field.Name != null && props.Field.Name.length > 0} Label={'Field Key'} />
        <Select<PRC002.IConfigField> Record={props.Field} Field={'Comparison'} Options={(props.Field.FieldType == 'number' ? NumberChecks : TextChecks)} Label={'Rule'} Setter={(record) => { props.Setter(record) }} />
        <div onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} data-tooltip={"Description"}>
        {(props.Field.Comparison == 'IN' ? <MultiInputField data={props.Field} Setter={(record) => { props.Setter(record) }} /> :
            <Input<PRC002.IConfigField> Record={props.Field} Field={'Value'} Setter={(record) => { props.Setter(record) }} Valid={() => ValidValue()} Label={'Value'} Feedback={props.Field.FieldType != 'number' ? 'Value is required.' : 'Value is required and needs to be a number.'} />
            )}
        </div>
        <ToolTip Show={hover && hasDesc} Position={'top'} Target={'Description'}>
            <p>{props.Field.Description}</p>
        </ToolTip>
    </>)
}

export default ConfigFieldEdit;
