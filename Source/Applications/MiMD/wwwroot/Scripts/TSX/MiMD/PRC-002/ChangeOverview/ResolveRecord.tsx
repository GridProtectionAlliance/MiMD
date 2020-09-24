//******************************************************************************************************
//  ResolveRecord.tsx - Gbtc
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
//  09/23/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '../../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { MiMD } from '../../global';
import FormSelect from '../../CommonComponents/FormSelect';
import FormInput from '../../CommonComponents/FormInput';
import FormCheckBox from '../../CommonComponents/FormCheckBox';
import { PRC002 } from '../ComplianceModels';
import BaseConfig from '../Common/BaseConfig';
import ManualAction from '../Common/ManualAction';
import FieldValues from './FieldValues';
import ConfigRuleEdit from '../Common/ConfigRuleEdit';
import Modal from '../Common/Modal';
import Warning from '../Common/Warning';

declare var homePath: string;


interface IProps { RecordID: number, stateList: Array<PRC002.IStatus>, FieldList: Array<PRC002.IConfigFieldStatus>, Complete: () => void}
type step = 'Note' | 'Change'

const ResolveRecord = (props: IProps) => {
    const history = useHistory();

    const [step, setStep] = React.useState<step>('Note');
    const [note, setNote] = React.useState<string>('');
    const [fieldIndex, setFieldIndex] = React.useState<number>(-1);
    const [updatedFld, setUpdatedFld] = React.useState<Array<PRC002.IConfigField>>([]);

    const[error, setError] = React.useState<string>('');

    function Cancel() {
        setStep('Note');
        setFieldIndex(-1);
        setNote('');
        setUpdatedFld([])
        $('#Resolve').hide();
    }

    function NextStep(): boolean {
        if (step == 'Note') {
            setStep('Change')
            if (props.FieldList.length == 0)
                Save();
            else
                LoadField();
        }
        else {
            ValidateField()
        }
            

        return false
    }

    function LoadField() {
        if (fieldIndex == updatedFld.length - 1 )
            $.ajax({
                type: "GET",
                url: `${homePath}api/MiMD/PRC002/Field/One/${props.FieldList[fieldIndex + 1].FieldId}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            }).then(data => {
                if (data == null) return;
                setUpdatedFld((array) => [...array, data]);
                setFieldIndex((index) => index + 1);
            })
        else
            setFieldIndex((index) => index + 1);
    }

    function PrevStep(): boolean {
        if (step == 'Note')
            $('#ResolveWarning').show();
        else if (fieldIndex == 0)
            setStep('Note')
        else
            setFieldIndex((index) => index - 1);
        return false;
    }

    function getTitle() {
        if (step == 'Note')
            return 'Resolve Issue'
        else
            return 'Change Base Configuration'
    }

    function ValidateField() {
        // Validation for Type Later

        // Validation to make sure Config is Ok Now.
        $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/Field/Check/${props.FieldList[fieldIndex].Value}`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(updatedFld[fieldIndex] as PRC002.IConfigField),
            dataType: 'json',
            cache: false,
            async: true
        }).then(data => {
            if (data == null || !data) 
                $('#RuleValueError').show();
            else {
                if (fieldIndex == (props.FieldList.length-1)) 
                    Save();
                else 
                    LoadField()
            }
        })

        
    }

    function Save() {
        $('#ResolveCofirm').show();
        //Save The Fields and Add A State
    }

    function Confirmed(result: boolean) {
        if (!result)
            return;

        updatedFld.forEach(item => $.ajax({
            type: "PATCH",
            url: `${homePath}api/MiMD/PRC002/Field/Update`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(item),
            dataType: 'json',
           cache: false,
            async: true
        }))

        $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/Action/Add`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ Note: note, StateId: props.stateList.find(item => item.Description == 'In Compliance').ID, RecordId: props.RecordID } as PRC002.IAction),
            dataType: 'json',
            cache: false,
            async: true
        }).then(data => props.Complete())

        Cancel();

    }

    function SetField(index: number, record: PRC002.IConfigField) {
        if (index == -1)
            return
        setUpdatedFld((fld) => { let update = _.cloneDeep(fld); update[fieldIndex] = record; return update; })
    }

    function getContent() {
        if (step == 'Note')
            return (
            <div className="form-group">
                <label>Note:</label>
                <textarea className="form-control" rows={4} value={note} onChange={(e) => setNote((e.target as any).value)}></textarea>
            </div>)
        else
            return <ConfigRuleEdit editType={false} Setter={(record) => SetField(fieldIndex, record)} FieldValue={(fieldIndex > -1 ? props.FieldList[fieldIndex] : undefined)} Field={(fieldIndex > -1 ? updatedFld[fieldIndex] : undefined)} />
    }



    function updateFields() {
        //updatedField.forEach(item => $.ajax({
        //    type: "PATCH",
        //    url: `${homePath}api/MiMD/PRC002/Field/Update`,
        //    contentType: "application/json; charset=utf-8",
        //    data: JSON.stringify(item),
        //    dataType: 'json',
        //   cache: false,
        //    async: true
        //}))
        //props.Complete(note);
    }


  
    return (
        <>
            <Modal Id={'Resolve'} Title={getTitle()} NegLabel={(step == 'Note' ? 'Cancel' : 'Back')} PosLabel={(fieldIndex == props.FieldList.length -1 ? 'Save' : 'Next')} content={() => getContent()} Close={PrevStep} Confirm={NextStep} />
            <Warning Title={'Cancel'} Content={'Warning all Changes will be lost and the new base configuration will not be applied'} Confirm={'Back'} Deny={'Cancel'} Id='ResolveWarning' Action={(result) => { if (!result) Cancel(); }} />
            <Warning Title={'Invalid Base Config'} Content={'The new Base Configuration has to allow the current Configuration'} Confirm={'OK'} Id='RuleValueError' Action={(result) => { }} />
            <Warning Title={'Warning'} Content={'This will change the Base Configuration for this meter and can not be undone. A permanent compliance record will be created'} Confirm={'Proceed'} Deny={'Cancel'} Id='ResolveCofirm' Action={(result) => { Confirmed(result) }} />
        </>)
}


export default ResolveRecord;
