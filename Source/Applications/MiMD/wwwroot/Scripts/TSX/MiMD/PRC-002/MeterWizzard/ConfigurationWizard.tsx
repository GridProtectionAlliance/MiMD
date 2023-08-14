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
import * as PRC002 from '../ComplianceModels';
import { ParseINI, ParsePAR } from './FileParser';
import FileParseWindow from './FileParseWindow';
import ConfigFieldEdit from './ConfigurationfieldEdit';
import NewConfigFields from '../Common/NewConfigFields';
import BaseConfigWindow from '../Common/BaseConfigWindow';


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

const ConfigurationWizard = (props: IProps) => {
    const [newConfig, setNewConfig] = React.useState<PRC002.IBaseConfig>({ ID: -1, MeterId: -1, Name: 'All INI Files', Pattern: '*.ini' })
    const [editField, setEditField] = React.useState<PRC002.IConfigField>({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Category: '', Label: 'Field', Description: '' });
    const [newConfigUniq, setNewConfigUniq] = React.useState<boolean>(true);

    const [fileName, setFileName] = React.useState<string>('');
    const [fileFields, setFileFields] = React.useState<Array<PRC002.IConfigField>>([]);
    const [selectedFields, setSelectedFields] = React.useState<Array<PRC002.IConfigField>>([]);
    
    React.useEffect(() => {
        if (props.step != 'BaseConfig')
            return () => { }

        $(".custom-file-input").on("change", (evt: unknown) => {
            const fileName = (evt as React.ChangeEvent<HTMLInputElement>).target.value.split("\\").pop();
            $((evt as React.ChangeEvent<HTMLInputElement>).target).siblings(".custom-file-label").addClass("selected").html(fileName);
            readSingleFile((evt as React.ChangeEvent<HTMLInputElement>), fileName)
        });

        return () => $(".custom-file-input").off('change')

    }, [props.step]);

    React.useEffect(() => {
        const error = [];
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
            const updated = _.cloneDeep(props.BaseConfigs);
            const id = (updated.size > 0? Math.max(...updated.keys()) : 0)+ 1;
            updated.set(id, [{ ...newConfig, ID: id},[]]);
            props.setBaseConfig(updated);
            setNewConfig({ ID: -1, MeterId: -1, Name: 'Base Config Name', Pattern: '*.ini' });
        }
        if (props.step == 'Edit Field' && editField.ID == -1) {
            const updated = _.cloneDeep(props.BaseConfigs);
            const cong = updated.get(editField.BaseConfigId)
            const id = (cong[1].length > 0 ? Math.max(...cong[1].map(item => item.ID)) + 1 : 1);
            cong[1] = [...cong[1], { ...editField, ID: id }];
            updated.set(editField.BaseConfigId, cong);
            
            props.setBaseConfig(updated);
            setEditField({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Label: 'Field', Category: '', Description: '' })
        }
        if (props.step == 'Edit Field' && editField.ID != -1) {
            const updated = _.cloneDeep(props.BaseConfigs);
            const cong = updated.get(editField.BaseConfigId)
            const index = cong[1].findIndex(item => item.ID == editField.ID)
            cong[1][index] = editField;
            updated.set(editField.BaseConfigId, cong);
            props.setBaseConfig(updated);
            setEditField({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Label: 'Field', Category: '', Description: '' })
        }
        if (props.step == 'File Load') {
            const updated = _.cloneDeep(props.BaseConfigs);
            const id = (updated.size > 0 ? Math.max(...updated.keys()) : 0) + 1;
            const fields = selectedFields.map((item, index) => ({ ID: index + 1, ...item }));

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
        }
       
        props.setStep('BaseConfig');
    }, [props.cont])



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
        const re = /(?:\.([^.]+))?$/;
        return re.exec(fileName)[1];

    }
    function LoadBaseConfigFile(file: string, Fields: Array<PRC002.IConfigField>) {

        setFileName(file);
        setFileFields(Fields.map(item => { item.BaseConfigId = -1; return item }))
        props.setStep('File Load');
        props.setLoading(false);
    }

    function editConfigField(record: PRC002.IConfigField, configID: number) {
        props.setStep('Edit Field');
        setEditField({ ...record, BaseConfigId: configID })
    }

    function addConfigField(ConfigID: number) {
        props.setStep('Edit Field');
        setEditField((fld) => ({ ...fld, BaseConfigId: ConfigID }))
    }

    function getFields(ConfigID: number, SetFields: (flds: PRC002.IConfigField[]) => void) {
        if (props.BaseConfigs.has(ConfigID))
            SetFields(props.BaseConfigs.get(ConfigID)[1]);
        return () => { }
    }

    return (
        <>
            {props.step == 'BaseConfig' ? <div>
                <BaseConfigWindow configurationList={[...props.BaseConfigs.values()].map(item => item[0])} getFieldList={getFields}
                    OnEdit={(record, configID) => editConfigField(record, configID)} OnNew={(id) => addConfigField(id)} />               
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



export default ConfigurationWizard;

