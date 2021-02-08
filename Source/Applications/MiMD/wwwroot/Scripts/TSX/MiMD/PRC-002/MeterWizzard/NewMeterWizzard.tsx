//******************************************************************************************************
//  NewMeterWizzard.tsx - Gbtc
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
//  02/02/2021 - C. Lackner
//       Updated PAR Parser and moved to gpa-gemstone UI.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '../../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";

import FormInput from '../../CommonComponents/FormInput';;
import { PRC002 } from '../ComplianceModels';
import SelectMeter from './SelectMeter';
import BaseConfig from '../Common/BaseConfig';
import { ParseINI } from './FileParser';
import ConfigRuleEdit from '../Common/ConfigRuleEdit';

import { Modal, ToolTip, Warning } from '@gpa-gemstone/react-interactive';
import { Input } from '@gpa-gemstone/react-forms';
import SelectTable from '../../CommonComponents/SelectTable';


declare var homePath: string;

interface IProps { show: boolean, setShow: (s: boolean) => void}
type state = 'Meter'|'BaseConfig'|'File Load'| 'Edit Field' | 'New BaseConfig'
interface IConfigFileField extends PRC002.IConfigField { Include: boolean }

const NewMeterWizzard = (props: IProps) => {
    let history = useHistory();

    const [meter, setMeter] = React.useState<PRC002.IMeter>(null);
    const [step, setStep] = React.useState<state>('Meter');
    const [showWarning, setShowWarning] = React.useState<boolean>(false);
    const [showComplete, setShowComplete] = React.useState<boolean>(false);
    const [hover, setHover] = React.useState<'Cancel' | 'Confirm' | 'None'>('None');


    const [selectedBaseConfig, setSelectedBaseConfig] = React.useState<number>(null);
    const [baseConfig, setBaseConfig] = React.useState<Array<PRC002.IBaseConfig>>([]);
    const [baseConfigFields, setBaseConfigFields] = React.useState<Map<number, Array<PRC002.IConfigField>>>(new Map<number, Array<PRC002.IConfigField>>());

    const [currentConfig, setCurrentConfig] = React.useState<PRC002.IBaseConfig>({ ID: 0, MeterId: meter.ID, Name: 'New Base Configuration', Pattern: '*.ini' });

    const [fileFields, setFileFields] = React.useState<Array<IConfigFileField>>([]);

    const [editField, setEditField] = React.useState<PRC002.IConfigField>(undefined);

    React.useEffect(() => {
        if (!props.show)
            Cancel();
    }, [props.show]);

    React.useEffect(() => {
        if (step != 'BaseConfig') 
            return () => { }

        $(".custom-file-input").on("change", (evt: any) => {
            let fileName = (evt as React.ChangeEvent<HTMLInputElement>).target.value.split("\\").pop();
            $(evt.target).siblings(".custom-file-label").addClass("selected").html(fileName);
            readSingleFile((evt as React.ChangeEvent<HTMLInputElement>), fileName)
            });

        return () => $(".custom-file-input").off('change')
        
    }, [step])

    function Cancel() {
        setStep('Meter');
        setMeter(undefined)
        setBaseConfig([]);
        setBaseConfigFields(new Map<number, Array<PRC002.IConfigField>>());
    }

    function NextStep() {
        if(!stepComplete)
            return;

        if (step == 'Meter') {
            setStep('BaseConfig')
            return;
        }
        if (step == 'New BaseConfig') {
            let newConfig = _.cloneDeep(currentConfig);
            setBaseConfig((item) => { newConfig.ID = item[item.length - 1].ID; let up = _.cloneDeep(item); up[newConfig.ID] = newConfig; return up;  })
            setCurrentConfig({ID: 0, MeterId: meter.ID, Name: 'New Base Configuration', Pattern: '*.ini'})
            setStep('BaseConfig');
            return;
        }
        if (step == 'File Load') {
            fileToBaseConfig(baseConfig[baseConfig.length - 1].ID);
            setStep('New BaseConfig')
            return;
        }
        if (step == 'BaseConfig') {
            setShowComplete(true);
            return;
        }

        if (step == 'Edit Field')
            saveEditField();
        return;
    }

    function PrevStep() {
        if (step == 'Meter')
            setShowWarning(true);
        if (step == 'BaseConfig')
            setStep('Meter')
        if (step == 'New BaseConfig' || step == 'File Load') {
            removeBaseConfig(baseConfig[baseConfig.length - 1].ID);
            setStep('BaseConfig')
        }
        if (step == 'Edit Field')
            setStep('BaseConfig');
    }

    function fileToBaseConfig(id: number) {
        setBaseConfigFields((flds) => {
            let update = _.clone(flds);
            update.set(id, fileFields.filter(item => item.Include));
            return update;
        })
    }

    function getTitle() {
        if (step == 'Meter')
            return 'Select a Meter'
        if (step == 'BaseConfig')
            return "Setup Base Configuration"
        if (step == 'File Load')
            return 'Load Configuration File'
        if (step == 'New BaseConfig')
            return 'Add New Base Configuration'
        if (step == 'Edit Field')
            return "Edit Configuration Field"
    }

    function readSingleFile(evt: React.ChangeEvent<HTMLInputElement>, fileName: string) {

        if (fileName.endsWith(".ini"))
            LoadBaseConfigFile(fileName, ParseINI(evt).map((item, index) => ({ ...item, Include: false })));
    }

    function LoadBaseConfigFile(file: string, Fields: Array<IConfigFileField>) {
        let id = (baseConfig.length == 0 ? 0 : Math.max(...baseConfig.map(item => item.ID)) + 1)
        setBaseConfig((lst) => {
            let addition: PRC002.IBaseConfig = {
                ID: id,
                MeterId: meter.ID,
                Name:  file + ' File',
                Pattern: '**//' + file
            };
            return [...lst, addition]
        })
        setBaseConfigFields((flds) => {
            let update = _.cloneDeep(flds);
            update.set(id, []);
            return update;
        });
        setFileFields(Fields.map(item => { item.BaseConfigId = id; return item }))
        setStep('File Load');
    }

   
    function removeBaseConfig(id: number) {
        setBaseConfig((lst) => {
            let update = _.clone(lst);
            let i = update.findIndex(item => item.ID == id);
            update.splice(i, 1);
            return update
        })
        setBaseConfigFields((flds) => {
            let update = _.cloneDeep(flds);
            update.delete(id);
            return update;
        })
    }

    function getBaseConfigFields(id: number): Array<PRC002.IConfigField>
    {
        if (baseConfigFields.has(id))
            return baseConfigFields.get(id);
        return [];
    }

    function Submit() {
        // Start By Creating the meter
        let configFields = [];

        baseConfig.forEach(item => {
            baseConfigFields.get(item.ID).forEach(fld => {
                configFields.push({
                    BaseConfigId: item.ID,
                    Comparison: fld.Comparison,
                    FieldType: fld.FieldType,
                    Name: fld.Name,
                    Value: fld.Value });
            })
        })
        $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/ComplianceMeter/Add`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(
                {
                    Meter: { MeterId: meter.ID, Active: false, Reviewed: false },
                    BaseConfiguration: baseConfig.map(item => { return { Name: item.Name, Pattern: item.Pattern, ID: item.ID }; }),
                    ConfigurationFields: configFields
                }),
            dataType: 'json',
            cache: false,
            async: true
        })
        
        props.setShow(false);
    }

    function editConfigField(record: PRC002.IConfigField) {
        setStep('Edit Field');
        setEditField(record)
    }

    function addConfigField(id: number) {
        setStep('Edit Field');
        setEditField({ BaseConfigId: id, Comparison: '=', Value: '', Name: 'New Field', FieldType: 'string', ID: -1 })
    }

    function saveEditField() {
        if (editField.ID == -1)
            setBaseConfigFields((fld) => {
                let update = _.clone(fld);
                let change = update.get(editField.BaseConfigId);
                let addition = _.cloneDeep(editField);
                addition.ID = (change.length > 0 ? Math.max(...change.map(item => item.ID)) + 1 : 1);
                change.push(addition);
                update.set(editField.BaseConfigId, change)
                return update;
            })
        else
            setBaseConfigFields((fld) => {
                let update = _.clone(fld);
                let change = update.get(editField.BaseConfigId);
                let i = change.findIndex(item => item.ID == editField.ID);
                change[i] = editField;
                update.set(editField.BaseConfigId, change)
                return update;
            })
        setStep('BaseConfig');
    }

    const stepComplete = (step == 'Meter' ? meter != null : step == 'BaseConfig' ? baseConfig.length > 0 :
        step == 'New BaseConfig' ? currentConfig.Name != null && currentConfig.Name.length > 0 && currentConfig.Pattern != null && currentConfig.Pattern.length > 0 : false);
    
    return (
        <>
            <Modal Show={props.show} CallBack={(confirm, isButton) => {
                if (confirm)
                    NextStep();
                if (!isButton)
                    setShowWarning(true);
                if (!confirm && isButton)
                    PrevStep();
            }}
                Title={getTitle()} ConfirmText={(step == 'Meter' || step == 'File Load' ? 'Next' : 'Save')}
                ConfirmToolTip={'WizardConfirm'} Size={'lg'} OnHover={setHover}
                ConfirmBtnClass={'btn-success' + (stepComplete ? '' : ' disabled')}
                CancelText={(step == 'Meter' ? 'Close' : 'Back')}
                ShowX={true}
            >
                {step == 'Meter' ? <SelectMeter setMeter={(meter) => { setMeter(meter); }} selectedMeter={meter} /> : null}
                {step == 'BaseConfig' ? <div>
                    {baseConfig.length > 1 ?
                            <ul className="nav nav-tabs">
                            {baseConfig.map((item, index) =>
                                <li className="nav-item" key={index}>
                                    <a className={"nav-link" + (selectedBaseConfig == item.ID ? " active" : "")} onClick={() => setSelectedBaseConfig(item.ID)}>{item.Name}</a>
                                    </li>
                                )}
                            </ul> : null
                        }
                    <div className="tab-content" style={{ maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
                        <div className={"card"} style={{ marginBottom: 10 }}>
                            <div className="card-header">
                                <h4> Configuration {baseConfig.find(item => item.ID == selectedBaseConfig) != null ? baseConfig.find(item => item.ID == selectedBaseConfig).Name : ''}</h4>
                                </div> 
                            <div className={"card-body"}>
                                <div style={{ height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, overflowY: 'auto' }}>
                                    {baseConfig.find(item => item.ID == selectedBaseConfig) != null ?
                                        <Input<PRC002.IBaseConfig> Record={baseConfig.find(item => item.ID == selectedBaseConfig)} Field={'Pattern'} Setter={() => { }} Valid={() => true} Label={'File Pattern'} Disabled={true} /> : null}
                                    {selectedBaseConfig != null ? < Table < PRC002.IConfigField >
                                        cols={[
                                            { key: 'Name', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Name'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                            { key: 'FieldType', label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'FieldType'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                            { key: 'Comparison', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Comparison'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                            { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Value'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                            { key: 'ID', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <div style={{ marginTop: '16px', textAlign: 'center' }} onClick={() => editConfigField(item)}><i style={{ color: '#007BFF' }} className="fa fa-pencil-square fa-3x" aria-hidden="true"></i></div> },

                                        ]}
                                        tableClass="table table-hover"
                                        data={baseConfigFields.get(selectedBaseConfig)}
                                        sortField={'Name'}
                                        ascending={true}
                                        onSort={(d) => { }}
                                        onClick={(d) => { }}
                                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                        tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                        selected={(item) => false}
                                    /> : null}
                                </div>
                            </div>
                        </div>
                        {/*baseConfig.map((item, index) => <Configurationwindow key={index} active={item.ID == baseConfigTab} configuration={item} Fields={fieldList} hasHeader={props.BaseConfigList.length > 1} onEdit={props.onEdit} />)*/}
                    </div>
                    {selectedBaseConfig != null ? <button type="button" className="btn btn-primary btn-sm" onClick={() => addConfigField(selectedBaseConfig)}>Add new Field </button> : null}
                    <hr />
                    <div className="row">
                        <div className="col">
                            <div className="form-group" style={{ width: '100%' }}>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" accept=".ini,.par" />
                                    <label className="custom-file-label">Choose a Configuration File if applicable</label>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary btn-block" onClick={() => { setStep('New BaseConfig') }}> Add New Base Configuration </button>
                        </div>
                    </div>
                </div> : null}
                {step == 'New BaseConfig' && baseConfig.length > 0 ?
                    <>
                        <Input<PRC002.IBaseConfig> Record={currentConfig} Field={'Name'} Setter={setCurrentConfig} Valid={() => currentConfig.Name != null && currentConfig.Name.length > 0 && baseConfig.findIndex(item => item.Name == currentConfig.Name) == -1}
                            Feedback={'Name is required and must be unique'} Label={'Name'} />
                        <Input<PRC002.IBaseConfig> Record={currentConfig} Field={'Pattern'} Setter={setCurrentConfig} Valid={() => currentConfig.Pattern != null && currentConfig.Pattern.length > 0}
                            Label={'File Pattern'} Feedback={'File Pattern is required.'} />
                    </>
                    : null}
                {step == 'File Load' ? <SelectTable<IConfigFileField>
                    cols={[
                        { key: 'Name', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em)' }, rowStyle: { width: 'calc(50% - 8.25em)' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'Name'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                        { key: 'FieldType', label: 'Type', headerStyle: { width: '8em' }, rowStyle: { width: '8em' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'FieldType'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                        { key: 'Comparison', label: '', headerStyle: { width: '5em' }, rowStyle: { width: '5em' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'Comparison'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                        { key: 'Value', label: 'Value', headerStyle: { width: 'calc(70% - 8.25em)' }, rowStyle: { width: 'calc(50% - 8.25em)' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'Value'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                    ]}
                    tableClass="table table-hover"
                    data={fileFields}
                    sortField={'Name'}
                    ascending={true}

                    onSelection={(d) => {
                        setFileFields((lst) => {
                            let update = _.clone(lst);
                            lst.map(item => ({ ...item, Include: (d.findIndex(i => i.ID == item.ID) > -1) }))
                            return update;
                        })
                    }}
                    theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                    rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    onClick={() => { }}
                    onSort={() => { }}
                /> : null}
                {step == 'Edit Field' ? <ConfigRuleEdit Field={editField} editType={true} Setter={setEditField} /> : null}

            </Modal>
            <Warning Title={'Exit Wizard'} CallBack={(confirm) => { setShowWarning(false); if (confirm) props.setShow(false); }} Show={showWarning}
                Message={'This Will close the Wizard and all progress will be lost.'} />
            <ToolTip Show={hover == 'Confirm' && !stepComplete} Position={'top'} Target={'WizardConfirm'} Zindex={9999}>
                <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>
                    {step == 'Meter' ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Meter needs to be selected.</p> : null}
                    {step == 'BaseConfig' ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>At least on Configuration File has to be set up.</p> : null}
                    {step == 'New BaseConfig' && currentConfig.Name == null || currentConfig.Name.length == 0 ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Name is required.</p> : null}
                    {step == 'New BaseConfig' && currentConfig.Name != null && baseConfig.findIndex(item => item.Name == currentConfig.Name) == -1? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>Name has to be unique.</p> : null}
                    {step == 'New BaseConfig' && currentConfig.Pattern == null || currentConfig.Pattern.length == 0 ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A File Pattern is required.</p> : null}
                </p>
            </ToolTip>
            <Warning Title={'Save PRC002 Configuration'} CallBack={(confirm) => { setShowComplete(false); if (confirm) Submit(); }} Show={showComplete}
                Message={'This will add the selected meter to PRC002 monitoring and save the base configuration. Note that the status of this meter will not update until the first configuration File is downloaded.'} />
            
        </>
    )
}

const FileLoadTable = (props: {Fields: Array<IConfigFileField>, Setter: (index: number,value: boolean) => void}) => {
    return (
        <Table
            cols={[
                { key: 'Include', label: '', headerStyle: { width: '3.5em' }, rowStyle: { width: '3.5em' }, content: (item, key, style) => (item.Include ? <div style={{marginTop: '16px', textAlign: 'center' }}><i className="fa fa-check-square-o fa-3x" aria-hidden="true"></i></div> : null) },
                { key: 'Name', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em)' }, rowStyle: { width: 'calc(50% - 8.25em)' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'Name'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                { key: 'FieldType', label: 'Type', headerStyle: { width: '8em' }, rowStyle: { width: '8em' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'FieldType'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                { key: 'Comparison', label: '', headerStyle: { width: '5em' }, rowStyle: { width: '5em' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'Comparison'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                { key: 'Value', label: 'Value', headerStyle: { width: 'calc(70% - 8.25em)' }, rowStyle: { width: 'calc(50% - 8.25em)' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'Value'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },

            ]}
            tableClass="table table-hover"
            data={props.Fields}
            sortField={'Name'}
            ascending={true}
            onSort={(d) => { }}
            onClick={(d) => { props.Setter(d.row.ID, !d.row.Include)}}
            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
            selected={(item) => false}
        />
        )
}

export default NewMeterWizzard;

