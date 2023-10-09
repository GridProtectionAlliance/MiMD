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
import * as _ from 'lodash';
import * as PRC002 from '../ComplianceModels';
import { LoadingIcon, Modal, Warning } from '@gpa-gemstone/react-interactive';
import { Input, Select } from '@gpa-gemstone/react-forms';
import { DynamicHelper } from '../Common/DynamicHelper'

declare let homePath: string;


interface IProps { RecordID: number, stateList: Array<PRC002.IStatus>, FieldList: Array<PRC002.IConfigFieldStatus>, show: boolean, setShow: (b: boolean) => void}
type step = 'Note' | 'Change'

const ResolveRecord = (props: IProps) => {
    const [step, setStep] = React.useState<step>('Note');
    const [note, setNote] = React.useState<string>('');
    const [fieldIndex, setFieldIndex] = React.useState<number>(-1);
    const [updatedFld, setUpdatedFld] = React.useState<Array<PRC002.IConfigField>>([]);

    const [showClose, setShowClose] = React.useState<boolean>(false);
    const [showComplete, setShowComplete] = React.useState<boolean>(false);
    const [fieldState, setFieldState] = React.useState<'Error' | 'Loading' | 'Valid'>('Error');


    React.useEffect(() => {
        setUpdatedFld([]);
        let handles = [];
        handles = props.FieldList.map(item => LoadField(item.FieldId));
        return (() => {
            handles.forEach(h => { if (h != null && h.abort != null) h.abort(); })
        })
    },[props.FieldList]);

    React.useEffect(() => {
        setFieldState('Valid');
        if (fieldIndex == -1)
            return;
        if (updatedFld.length == 0)
            return;
        if (updatedFld.length <= fieldIndex)
            return;
        setFieldState('Loading');
        const h = ValidateField();
        return () => { if (h != null && h.abort != null) h.abort();}
    }, [updatedFld, fieldIndex])
    
    
    function Cancel() {
        setStep('Note');
        setFieldIndex(-1);
        setNote('');
        setUpdatedFld([])
        props.setShow(false);
    }

    function NextStep() {
        if (step == 'Note') {
            setStep('Change')
            if (props.FieldList.length == 0)
                setShowComplete(true);
            else
                setFieldIndex(0);
        }
        else {
            if (props.FieldList.length == fieldIndex+1)
                setShowComplete(true);
            else 
                setFieldIndex((index) => index + 1);

        }
            
    }

    function LoadField(id: number): JQuery.jqXHR {
        const h = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/Field/One/${id}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        h.then(data => {
                if (data == null) return;
                setUpdatedFld((array) => [...array, data]);
            })
        return h;
    }

    function PrevStep() {
        if (step == 'Note')
            setShowClose(true);
        else if (fieldIndex == 0)
            setStep('Note')
        else
            setFieldIndex((index) => index - 1);
    }

    function getTitle() {
        if (step == 'Note')
            return 'Resolve Issue'
        else
            return 'Change Base Configuration'
    }



    function ValidateField(): JQuery.jqXHR {
        if (updatedFld[fieldIndex].Value == null) {
            setFieldState('Error')
            return null
        }
        const h = $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/Field/Check/${props.FieldList[fieldIndex].Value}/${props.FieldList[fieldIndex].PreVal}`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(updatedFld[fieldIndex] as PRC002.IConfigField),
            dataType: 'json',
            cache: false,
            async: true
        });
        
        h.then(data => {
            if (data == null || !data)
                setFieldState('Error')
            else
                setFieldState('Valid')
        })

        return h;
        
    }

    

    function Save() {
      
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
        }).then(() => window.location.reload())

        Cancel();

    }

    function SetField(index: number, record: PRC002.IConfigField) {
        if (index == -1)
            return
        setUpdatedFld((fld) => { const update = _.cloneDeep(fld); update[fieldIndex] = record; return update; })
    }


    const stepComplete = (step == 'Note' ? note.length > 0 :
        (updatedFld[fieldIndex] != null && fieldState == 'Valid' && !(updatedFld[fieldIndex].Value == null || updatedFld[fieldIndex].Value.length == 0)));
  
    return (
        <>
            <Modal Show={props.show} Title={getTitle()} CancelText={(step == 'Note' ? 'Cancel' : 'Back')}
                ShowX={true}
                ConfirmToolTipContent={ 
                <>
                    {step == 'Note' && note.length == 0 ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Note is required.</p> : null}
                    {step == 'Change' && (updatedFld[fieldIndex] != null && (updatedFld[fieldIndex].Value == null || updatedFld[fieldIndex].Value.length == 0))  ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Value is required.</p> : null}
                    {step == 'Change' && fieldState == 'Loading' ? <LoadingIcon Show={true} Label={'Verifying New Rule...'} /> : null}
                    {step == 'Change' && fieldState == 'Error' ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>The new Rule needs to result in the current Value being Valid.</p> : null}
                </>}
                ConfirmShowToolTip={!stepComplete}
                Size={'lg'}

                ConfirmBtnClass={'btn-success' + (stepComplete ? '' : ' disabled')}
                ConfirmText={(fieldIndex == props.FieldList.length - 1 ? 'Save' : 'Next')}
                CallBack={(c, b) => { if (c) NextStep(); else if (b) PrevStep(); else setShowClose(true); }}
                >
                {step == 'Note' ?
                    <div className="form-group">
                        <label>Note:</label>
                        <textarea className="form-control" rows={4} value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                    </div> :
                    <ConfigFieldEdit validRule={fieldState != 'Error'} Setter={(record) => SetField(fieldIndex, record)} CurrentValue={(fieldIndex > -1 ? props.FieldList[fieldIndex] : undefined)} Field={(fieldIndex > -1 ? updatedFld[fieldIndex] : undefined)} />
                    }
            </Modal>
            <Warning Title={'Cancel'} Message={'Warning all Changes will be lost and the new base configuration will not be applied'} CallBack={(c) => { if (c) Cancel(); setShowClose(false) }} Show={showClose} />
            <Warning Title={'Warning'} Message={'This will change the Base Configuration for this meter and can not be undone. A permanent compliance record will be created'} Show={showComplete} CallBack={(c) => { if (c) Save(); setShowComplete(false) }}/>
        </>)
}

const ConfigFieldEdit = (props: { Field: PRC002.IConfigField, Setter: (record: PRC002.IConfigField) => void, CurrentValue: PRC002.IConfigFieldStatus, validRule: boolean }) => {

    const FieldTypeOptions = [{ Value: 'string', Label: 'Text' }, { Value: 'number', Label: 'Number' }];
    const NumberChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: '>', Label: '>' }, { Value: '<', Label: '<' }];
    const TextChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: 'IN', Label: 'In' }];
    const [showFunctionHelp, setShowFunctionHelp] = React.useState(false);

    function ValidValue(): boolean {
        return (props.Field.Value != null && props.Field.Value.length > 0)
    }

    if (props.CurrentValue == null || props.Field == null)
        return null;

    return (<>
        <Input<PRC002.IConfigFieldStatus> Record={props.CurrentValue} Field={'Value'} Setter={() => { }} Valid={() => props.validRule} Label={'Current Value'} Disabled={true} Feedback={'The new Rule needs to allow the current Value.'} />
        <hr/>
        <Select<PRC002.IConfigField> Record={props.Field} Field={'FieldType'} Options={FieldTypeOptions} Label={'Field Type'} Disabled={true} Setter={() => {}} />
        <Input<PRC002.IConfigField> Record={props.Field} Field={'Name'} Setter={() => { }} Valid={() => true} Label={'Field'} Disabled={true} />
        <Select<PRC002.IConfigField> Record={props.Field} Field={'Comparison'} Options={(props.Field.FieldType == 'number' ? NumberChecks : TextChecks)} Label={'Rule'} Setter={(record) => { props.Setter(record) }} />
        {(props.Field.Comparison == 'IN' ? <MultiInputField data={props.Field} Setter={(record) => { props.Setter(record) }} /> :
            <Input<PRC002.IConfigField> Record={props.Field} Field={'Value'} Setter={(record) => { props.Setter(record) }} Valid={() => ValidValue()} Label={'Value'} Feedback={props.Field.FieldType != 'number' ? 'Value is required.' : 'Value is required and needs to result in a number.'} />
        )}
        <button type="button" className="btn btn-light float-right" onClick={() => setShowFunctionHelp(true)}>
            <i style={{ color: '#007BFF' }} className="fa fa-2x fa-question-circle"></i>
        </button>
        {showFunctionHelp && <DynamicHelper isOpen={showFunctionHelp} onClose={() => setShowFunctionHelp(false)} />}
    </>)
}

const MultiInputField = (props: { data: PRC002.IConfigField, Setter: (record: PRC002.IConfigField) => void }) => {
    const [listValues, setListValues] = React.useState<Array<string>>([]);

    React.useEffect(() => {
        setListValues(props.data.Value.split(';'))
    }, [props.data])

    function Set(index, value) {
        const rec = _.cloneDeep(props.data);
        const lst = _.clone(listValues);
        lst[index] = value;
        rec.Value = lst.join(';');
        props.Setter(rec)
    }

    function AddNew() {
        const rec = _.cloneDeep(props.data);
        const lst = _.clone(listValues);
        lst.push((props.data.FieldType == 'string' ? 'Value' : '0'))
        rec.Value = lst.join(';');
        props.Setter(rec)
    }

    function remove(index) {
        const rec = _.cloneDeep(props.data);
        const lst = _.clone(listValues);
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

export default ResolveRecord;
