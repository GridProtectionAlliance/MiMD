//******************************************************************************************************
//  BaseConfig.tsx - Gbtc
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
//  09/17/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '../../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { MiMD } from '../../global';
import FormSelect from '../../CommonComponents/FormSelect';
import FormInput from '../../CommonComponents/FormInput';;
import { PRC002 } from '../ComplianceModels';
import Warning from './Warning';


declare var homePath: string;

interface IProps { Field: PRC002.IConfigField, editType: boolean, Setter: (record: PRC002.IConfigField) => void, FieldValue?: PRC002.IConfigFieldStatus }


const ConfigRuleEdit = (props: IProps) => {

    const [listValues, setListValues] = React.useState<Array<string>>([]);
   
    // New Value/ Current Value
    // Field name
    // Type of Operation 
    // Accepteted Values (if In Or NOT IN we need multiple Values here and some special treatment)
    const FieldTypeOptions = [{ Value: 'string', Label: 'Text' }, { Value: 'number', Label: 'Number' }];
    const NumberChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: '>', Label: '>' }, { Value: '<', Label: '<' }];
    const TextChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: 'IN', Label: 'In' }];
  
    return (
    <>
        {(props.Field == undefined ? null :
                <>
                    {props.FieldValue != undefined ?
                        <FormInput<PRC002.IConfigFieldStatus> Record={props.FieldValue} Field={'Value'} Setter={() => { }} Valid={() => true} Label={'Current Value'} Disabled={!props.editType} /> : null}
                    <FormSelect<PRC002.IConfigField> Record={props.Field} Field={'FieldType'} Options={FieldTypeOptions} Label={'Field Type'} Disabled={!props.editType} Setter={(record) => {
                        if (record.FieldType !== props.Field.FieldType && record.Comparison != '<>' && record.Comparison != '=')
                            record.Comparison = '=';
                        props.Setter(record);
                    }} />
                    <FormInput<PRC002.IConfigField> Record={props.Field} Field={'Name'} Setter={() => { }} Valid={() => true} Label={'Current Rule'} Disabled={true} />
                    <FormSelect<PRC002.IConfigField> Record={props.Field} Field={'Comparison'} Options={(props.Field.FieldType == 'number' ? NumberChecks : TextChecks)} Label={''} Disabled={false} Setter={(record) => { props.Setter(record) }} />
                    {(props.Field.Comparison == 'IN' ? null :
                        <FormInput<PRC002.IConfigField> Record={props.Field} Field={'Value'} Setter={(record) => { props.Setter(record) }} Valid={() => true} Label={''} Disabled={false} />
                    )}
                </>
            )}
        </>)
}

const MultiInputField = (props: {}) => {

}

export default ConfigRuleEdit;

