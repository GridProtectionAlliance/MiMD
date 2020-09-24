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
import Warning from '../Common/Warning';
import SelectMeter from './SelectMeter';
import Modal from '../Common/Modal';
import BaseConfig from '../Common/BaseConfig';
import FormCheckBox from '../../CommonComponents/FormCheckBox';


declare var homePath: string;

interface IProps { }
type state = 'Meter'|'BaseConfig'|'File Load'| 'Edit Field' | 'New BaseConfig'
interface IConfigFileField extends PRC002.IConfigField { Include: boolean }

const NewMeterWizzard = (props: IProps) => {

    const [meter, setMeter] = React.useState<PRC002.IMeter>(undefined);
    const [step, setStep] = React.useState<state>('Meter');

    const [baseConfig, setBaseConfig] = React.useState<Array<PRC002.IBaseConfig>>([]);
    const [baseConfigFields, setBaseConfigFields] = React.useState<Map<number, Array<PRC002.IConfigField>>>(new Map<number, Array<PRC002.IConfigField>>());
    const [fileFields, setFileFields] = React.useState < Array < IConfigFileField>>([]);

    
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

    //Force a full Update if the List of Fields changes for the baseConfig Tab
    //React.useEffect(() => {
    //    setBaseConfig((state) => _.cloneDeep(state))
    //}, [baseConfigFields])
   
    function Cancel() {
        setStep('Meter');
        setMeter(undefined)
        setBaseConfig([]);
        setBaseConfigFields(new Map<number, Array<PRC002.IConfigField>>());
        $('#NewMeter').hide();
    }

    function NextStep(): boolean {
        if (step == 'Meter' && meter == undefined)
            $('#meterWarning').show();
        else if (step == 'Meter')
            setStep('BaseConfig')
        else if (step == 'New BaseConfig')
            setStep('BaseConfig')
        else if (step == 'File Load') {
            fileToBaseConfig(baseConfig[baseConfig.length - 1].ID);
            setStep('New BaseConfig')
        }
        else if (step == 'BaseConfig' && baseConfig.length > 0) {
            $('#submittWarning').show()
        }
        else if (step == 'BaseConfig') 
            $('#configWarning').show()
        return false
    }

    function PrevStep(): boolean {
        if (step == 'Meter')
            $('#wizzardWarning').show();
        if (step == 'BaseConfig')
            setStep('Meter')
        if (step == 'New BaseConfig' || step == 'File Load') {
            removeBaseConfig(baseConfig[baseConfig.length - 1].ID);
            setStep('BaseConfig')
        }
            
        return false;
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
    }

    function getContent() {
        if (step == 'Meter')
            return <SelectMeter setMeter={(meter) => { setMeter(meter); }} selectedMeter={meter} />
        if (step == 'BaseConfig')
            return (<div>
                <BaseConfig BaseConfigList={baseConfig} getFieldList={getBaseConfigFields} />
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
                        <button type="button" className="btn btn-primary btn-block" onClick={() => { createBaseConfig(); setStep('New BaseConfig') }}> Add New Base Configuration </button>
                    </div>
                </div>
            </div>)
        if (step == 'New BaseConfig' && baseConfig.length > 0)
            return (<>
                <FormInput<PRC002.IBaseConfig> Record={baseConfig[baseConfig.length - 1]} Field={'Name'} Setter={BaseConfigSetter} Valid={() => true} Label={'Name'} />
                <FormInput<PRC002.IBaseConfig> Record={baseConfig[baseConfig.length - 1]} Field={'Pattern'} Setter={BaseConfigSetter} Valid={() => true} Label={'File Pattern'} />
            </>)
        if (step == 'File Load')
            return <FileLoadTable Fields={fileFields} Setter={(index, value) => {
                setFileFields((lst) => {
                    let update = _.clone(lst);
                    update[index].Include = value;
                    return update;
            })
            }} />
        else
            return <> </>
    }

    function readSingleFile(evt: React.ChangeEvent<HTMLInputElement>, fileName: string) {
        //Retrieve the first (and only!) File from the FileList object
        var f = evt.target.files[0];
        if(f) {
            var r = new FileReader();
            r.onload = (e) => {
                let contents = e.target.result as string;
                console.log(_.cloneDeep(contents));
                
                let lines = contents.split(/[\r\n]+/g);
                let results = [];

                lines.forEach(ln => {
                    if (!ln.includes('=')) return;
                    let i = ln.indexOf('=');

                    results.push({ key: ln.substr(0, i), value: ln.substr(i+1) })
                })

                LoadBaseConfigFile(fileName, results.map((item,index) => { return { ID: index, BaseConfigId: -1, Name: item.key, Value: item.value, Comparison: '=', FieldType: 'string', Include: false } as IConfigFileField }));

            }
            r.readAsText(f);
        }
    }

    function LoadBaseConfigFile(file: string, Fields: Array<IConfigFileField>) {
        let id = (baseConfig.length == 0 ? 0 : Math.max(...baseConfig.map(item => item.ID)) + 1)
        setBaseConfig((lst) => {
            let addition: PRC002.IBaseConfig = {
                ID: id,
                MeterId: meter.ID,
                Name:  file + ' File',
                Pattern: file
            };
            return [...lst, addition]
        })
        setBaseConfigFields((flds) => {
            let update = _.cloneDeep(flds);
            update.set(id, []);
            return update;
        });
        setFileFields(Fields)
        setStep('File Load');
    }

    function createBaseConfig() {
        let id = (baseConfig.length == 0 ? 0 : Math.max(...baseConfig.map(item => item.ID)) + 1)
        setBaseConfig((lst) => {
            let addition: PRC002.IBaseConfig = {
                ID: id,
                MeterId: meter.ID,
                Name: 'New Base Configuration',
                Pattern: '*.ini'
            };
            return[...lst, addition]
        })
        setBaseConfigFields((flds) => {
            let update = _.cloneDeep(flds);
            update.set(id, []);
            return update;
        })
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

    function BaseConfigSetter(record: PRC002.IBaseConfig)
    {
        setBaseConfig((bc) => {
            let update = _.cloneDeep(bc);
            let i = update.findIndex(item => record.ID == item.ID);
            update[i] = record;
            return update;
        })
    }

    function getBaseConfigFields(id: number): Array<PRC002.IConfigField>
    {
        if (baseConfigFields.has(id))
            return baseConfigFields.get(id);
        return [];
    }

    function Submitt() {
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
                    Meter: { MeterId: meter.ID, Active: false },
                    BaseConfiguration: baseConfig.map(item => { return { Name: item.Name, Pattern: item.Pattern, ID: item.ID }; }),
                    ConfigurationFields: configFields
                }),
            dataType: 'json',
            cache: false,
            async: true
        })
        
        Cancel();
    }
    return (
        <>
            <Modal Id={'NewMeter'} Title={getTitle()} NegLabel={(step == 'Meter' ? 'Cancel' : 'Back')} PosLabel={(step == 'Meter' ? 'Next' : 'Save')} content={() => getContent()} Close={PrevStep} Confirm={NextStep} Cancel={() => { $('#wizzardWarning').show(); return false; }}/>
            <Warning Title={'Close the Wizzard'} Content={'This will close the New Meter Wizzar and al progress will be lost.'} Confirm={'Back'} Deny={'Cancel'} Id='wizzardWarning' Action={(result) => { if (!result) Cancel(); }} />
            <Warning Title={'Warning'} Content={'Please Select a Meter before continuing'} Confirm={'Ok'} Id='meterWarning' Action={(result) => { }} />
            <Warning Title={'Warning'} Content={'This will add the selected meter to PRC002 monitoring and save the base configuration. Note that the status of this meter will not update until the first configuration File is downloaded.'} Confirm={'Proceed'} Deny={'Cancel'} Id='submittWarning' Action={(result) => { if (result) Submitt(); }} />
            <Warning Title={'Warning'} Content={'At least one Base Configuration has to be set up and at least one Configuration Field has to be monitored'} Confirm={'Ok'} Id='configWarning' Action={(result) => { }} />
        </>
    )
}

const FileLoadTable = (props: {Fields: Array<IConfigFileField>, Setter: (index: number,value: boolean) => void}) => {
    return (
        <Table
            cols={[
                { key: 'Include', label: 'Include', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <FormCheckBox<IConfigFileField> Record={item} Field={'Include'} Label={''} Setter={(record) => { props.Setter(record.ID, record.Include); }} /> },
                { key: 'Name', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'Name'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                { key: 'FieldType', label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'FieldType'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                { key: 'Comparison', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'Comparison'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <FormInput<IConfigFileField> Record={item} Field={'Value'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },

            ]}
            tableClass="table table-hover"
            data={props.Fields}
            sortField={'Name'}
            ascending={true}
            onSort={(d) => { }}
            onClick={(d) => { }}
            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
            selected={(item) => false}
        />
        )
}

export default NewMeterWizzard;

