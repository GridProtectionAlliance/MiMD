//******************************************************************************************************
//  BaseConfigWindow.tsx - Gbtc
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
//  02/08/2020 - C. Lackner
//       Generated original version of source cod
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { PRC002 } from '../ComplianceModels';
import { ParseINI, ParsePAR } from './FileParser';
import { Input } from '@gpa-gemstone/react-forms';
import Table from '@gpa-gemstone/react-table'
import FileParseWindow from './FileParseWindow';
import ConfigFieldEdit from './ConfigurationfieldEdit';
import NewConfigFields from '../Common/NewConfigFields';



declare var homePath: string;

interface IProps {
    setError: (error: string[]) => void,
    BaseConfigs: Map<number, [PRC002.IBaseConfig, PRC002.IConfigField[]]>,
    setBaseConfig:(bc: Map<number, [PRC002.IBaseConfig, PRC002.IConfigField[]]>) => void,
    setStep: (step: state) => void,
    cont: number,
    reset: number
    step: state,
    setLoading: (b: boolean) => void,
}

type state = 'Meter' | 'BaseConfig' | 'File Load' | 'Edit Field' | 'New BaseConfig'

const BaseConfigWindow = (props: IProps) => {
    const [currentConfig, setCurrentConfig] = React.useState<number>(null);
    const [newConfig, setNewConfig] = React.useState<PRC002.IBaseConfig>({ ID: -1, MeterId: -1, Name: 'All INI Files', Pattern: '*.ini' })
    const [editField, setEditField] = React.useState<PRC002.IConfigField>({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Category: '', Label: 'Field', Description: '' });
    const [newConfigUniq, setNewConfigUniq] = React.useState<boolean>(true);

    const [fileName, setFileName] = React.useState<string>('');
    const [fileFields, setFileFields] = React.useState<Array<PRC002.IConfigField>>([]);
    const [selectedFields, setSelectedFields] = React.useState<Array<PRC002.IConfigField>>([]);

    const [sortField, setSortField] = React.useState<string>('Field');
    const [ascending, setAscending] = React.useState<boolean>(true);


    React.useEffect(() => {
        if (props.BaseConfigs.size == 0) {
            setCurrentConfig(null);
            return;
        }
        if (setCurrentConfig == null || !props.BaseConfigs.has(currentConfig)) 
            setCurrentConfig(props.BaseConfigs.keys().next().value)      

    }, [props.BaseConfigs])

    
    React.useEffect(() => {
        if (props.step != 'BaseConfig')
            return () => { }

        $(".custom-file-input").on("change", (evt: any) => {
            let fileName = (evt as React.ChangeEvent<HTMLInputElement>).target.value.split("\\").pop();
            $(evt.target).siblings(".custom-file-label").addClass("selected").html(fileName);
            readSingleFile((evt as React.ChangeEvent<HTMLInputElement>), fileName)
        });

        return () => $(".custom-file-input").off('change')

    }, [props.step]);

    React.useEffect(() => {
        let error = [];
        if (props.step == 'BaseConfig') {
            
            if (props.BaseConfigs.size == 0)
                error.push('At least 1 Base Configuration needs to be set up.')
            if (props.BaseConfigs.size > 0)
                [...props.BaseConfigs.keys()].forEach(item => {
                    if (props.BaseConfigs.get(item)[1].length == 0)
                        error.push('At least 1 Field needs to be set up in Configuration \'' + (props.BaseConfigs.get(item)[0].Name) + '\'')
                });
                
        }
        if (props.step == 'New BaseConfig') {
            if (newConfig.Name == null || newConfig.Name.length == 0)
                error.push('A Name is required.')
            if (newConfig.Pattern == null || newConfig.Pattern.length == 0)
                error.push('A Pattern is required (e.g. *.ini or *.par for allINI or PAR Files).')
            if (newConfig.Name != null && !newConfigUniq)
                error.push('Key needs to be unique.')
        }
        if (props.step == 'Edit Field') {
            if (editField.Name == null || editField.Name.length == 0)
                error.push('A Field Key is required.')
            if (editField.Label == null || editField.Label.length == 0)
                error.push('A Field Name is required.')
            if (editField.Value == null || editField.Value.length == 0)
                error.push('A Value is required.')
            if (editField.Value != null && (editField.FieldType == 'number' && isNaN(parseFloat(editField.Value))))
                error.push('A Value for a Number Field needs to be numeric.')
        }
        if (props.step == 'File Load') {
            if (!(selectedFields.length > 0))
                error.push('At least one Field needs to be selected.');
        }
        props.setError(error)
    }, [props.step, props.BaseConfigs, newConfig, newConfigUniq, editField, selectedFields])

    React.useEffect(() => {
        if ([...props.BaseConfigs.values()].map(i => i[0]).findIndex(item => item.Name == newConfig.Name) == -1)
            setNewConfigUniq(true);
        else
            setNewConfigUniq(false);
    }, [props.BaseConfigs, newConfig]);

    React.useEffect(() => {
        if (props.step == 'New BaseConfig')
            setNewConfig({ ID: -1, MeterId: -1, Name: 'Base Config Name', Pattern: '*.ini' });
        if (props.step == 'Edit Field')
            setEditField({
                ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Label: 'Field', Category: '', Description: ''
            })
        if (props.step == 'File Load') {
            setFileFields([]);
            setSelectedFields([]);
        }
        if (props.step == 'BaseConfig') {
            props.setStep('Meter');
            return;
        }
        props.setStep('BaseConfig');
    }, [props.reset])

    React.useEffect(() => {
        if (props.step == 'New BaseConfig') {
            let updated = _.cloneDeep(props.BaseConfigs);
            let id = (updated.size > 0? Math.max(...updated.keys()) : 0)+ 1;
            updated.set(id, [{ ...newConfig, ID: id},[]]);
            props.setBaseConfig(updated);
            setNewConfig({ ID: -1, MeterId: -1, Name: 'Base Config Name', Pattern: '*.ini' });
        }
        if (props.step == 'Edit Field' && editField.ID == -1) {
            let updated = _.cloneDeep(props.BaseConfigs);
            let cong = updated.get(currentConfig)
            let id = (cong[1].length > 0 ? Math.max(...cong[1].map(item => item.ID)) + 1 : 1);
            cong[1] = [...cong[1], { ...editField, ID: id }];
            updated.set(currentConfig, cong);
            
            props.setBaseConfig(updated);
            setEditField({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Label: 'Field', Category: '', Description: '' })
        }
        if (props.step == 'Edit Field' && editField.ID != -1) {
            let updated = _.cloneDeep(props.BaseConfigs);
            let cong = updated.get(currentConfig)
            let index = cong[1].findIndex(item => item.ID == editField.ID)
            cong[1][index] = editField;
            updated.set(currentConfig, cong);
            props.setBaseConfig(updated);
            setEditField({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Label: 'Field', Category: '', Description: '' })
        }
        if (props.step == 'File Load') {
            let updated = _.cloneDeep(props.BaseConfigs);
            let id = (updated.size > 0 ? Math.max(...updated.keys()) : 0) + 1;
            let fields = selectedFields.map((item, index) => ({ ID: index + 1, ...item }));

            let uniqName = fileName;
            let fileIndex = 0;
            while (([...props.BaseConfigs.values()].map(i => i[0]).findIndex(item => item.Name == uniqName) > -1)) {
                fileIndex = fileIndex + 1;
                uniqName = fileName + ' ' + fileIndex;
            }

            updated.set(id, [{ Name: uniqName, Pattern: '**/' + fileName, MeterId: -1, ID: id }, fields]);
            props.setBaseConfig(updated);
            setFileFields([]);
            setSelectedFields([]);
            setCurrentConfig(id);
        }
       
        props.setStep('BaseConfig');
    }, [props.cont])


    React.useEffect(() => {
        if (currentConfig == null)
            return;
        let updated = props.BaseConfigs.get(currentConfig);
        let nconfig = _.cloneDeep(props.BaseConfigs);
        nconfig.set(currentConfig, [updated[0], _.orderBy(updated[1], [sortField], [(!ascending ? "asc" : "desc")])]);
        props.setBaseConfig(nconfig);
    }, [ascending, sortField, currentConfig])


    function readSingleFile(evt: React.ChangeEvent<HTMLInputElement>, fileName: string) {
        props.setLoading(true);
        
        if (getFileExtension(fileName) == 'ini')
            ParseINI(evt, (d) => LoadBaseConfigFile(fileName,d));
        if (getFileExtension(fileName) == 'par')
            ParsePAR(evt, (d) => LoadBaseConfigFile(fileName, d));
        else
            props.setLoading(false);
    }

    function getFileExtension(fileName: string): string {
        fileName = fileName.toLowerCase().replace(' ', '');
        let re = /(?:\.([^.]+))?$/;
        return re.exec(fileName)[1];

    }
    function LoadBaseConfigFile(file: string, Fields: Array<PRC002.IConfigField>) {

        setFileName(file);
        setFileFields(Fields.map(item => { item.BaseConfigId = -1; return item }))
        props.setStep('File Load');
        props.setLoading(false);
    }

    function editConfigField(record: PRC002.IConfigField) {
        props.setStep('Edit Field');
        setEditField(record)
    }

    function addConfigField() {
        props.setStep('Edit Field');
    }

    return (
        <>
            {props.step == 'BaseConfig' ? <div>
                <ul className="nav nav-tabs">
                    {[...props.BaseConfigs.keys()].map((item, index) =>
                        <li className="nav-item" key={index}>
                            <a className={"nav-link" + (currentConfig == item ? " active" : "")} onClick={() => setCurrentConfig(item)}>{props.BaseConfigs.get(item)[0].Name}</a>
                        </li>
                    )}
                </ul>
                <div className="tab-content" style={{ maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
                    <div className={"card"} style={{ marginBottom: 10 }}>
                        {currentConfig != null ?
                            <>
                                <div className="card-header">
                                    <h4> Configuration {props.BaseConfigs.get(currentConfig)[0].Name}</h4>
                                </div>
                                <div className={"card-body"} >
                                    <div style={{ height: window.innerHeight - 540, maxHeight: window.innerHeight - 540 }}>
                                        <Input<PRC002.IBaseConfig> Record={props.BaseConfigs.get(currentConfig)[0]} Field={'Pattern'} Setter={() => { }} Valid={() => true} Label={'File Pattern'} Disabled={true} />
                                        <Table<PRC002.IConfigField>
                                            cols={[
                                                { key: 'Category', label: 'Category', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Category'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                                { key: 'Label', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Label'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                                { key: 'FieldType', label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'FieldType'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                                { key: 'Comparison', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Comparison'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                                { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Value'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                                { key: 'ID', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <div style={{ marginTop: '16px', textAlign: 'center' }} onClick={() => editConfigField(item)}><i style={{ color: '#007BFF' }} className="fa fa-pencil-square fa-3x" aria-hidden="true"></i></div> },

                                            ]}
                                            tableClass="table table-hover"
                                            data={props.BaseConfigs.get(currentConfig)[1]}
                                            sortField={'Category'}
                                            ascending={true}
                                            onSort={(d) => {
                                                    if (d.col == sortField) 
                                                    setAscending(!ascending);
                                                
                                                else {
                                                    setAscending(!ascending);
                                                    setSortField(d.col);
                                                }
                                            }}
                                            onClick={(d) => { }}
                                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 666, width: '100%' }}
                                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            selected={(item) => false}
                                        />
                                    </div>
                                </div>
                            </> : null}
                    </div>
                </div>
                {currentConfig != null ? <button type="button" className="btn btn-primary btn-sm" onClick={() => addConfigField()}>Add new Field </button> : null}
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
                        <button type="button" className="btn btn-primary btn-block" onClick={() => { props.setStep('New BaseConfig') }}> Add New Base Configuration </button>
                    </div>
                </div>
            </div> : null}
            {props.step == 'New BaseConfig' ? <NewConfigFields Record={newConfig} SetRecord={setNewConfig} UniqueKey={newConfigUniq}/>: null}
            {props.step == 'Edit Field' ? <ConfigFieldEdit Field={editField} Setter={setEditField} /> : null}
            {props.step == 'File Load' ? <FileParseWindow Fields={fileFields} setSelectedFields={setSelectedFields} /> : null}
            
        </>)
}



export default BaseConfigWindow;

