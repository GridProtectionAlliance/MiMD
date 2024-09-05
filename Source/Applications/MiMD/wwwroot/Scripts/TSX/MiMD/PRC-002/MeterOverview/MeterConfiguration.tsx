//******************************************************************************************************
//  MeterConfiguration.tsx - Gbtc
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
//  03/15/2021- C. lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import * as PRC002 from '../ComplianceModels';

import { LoadingScreen, Modal, Warning } from '@gpa-gemstone/react-interactive';
import BaseConfigWindow from '../Common/BaseConfigWindow';
import { ParseINI, ParsePAR } from '../MeterWizzard/FileParser';
import FileParseWindow from '../MeterWizzard/FileParseWindow';
import NewConfigFields from '../Common/NewConfigFields';
import ConfigFieldEdit from '../MeterWizzard/ConfigurationfieldEdit';

declare let homePath: string;

interface IProps {MeterID: number, show: boolean, setShow: (s: boolean) => void}
type state = 'view' | 'edit' | 'new' | 'upload' | 'editField';


const MeterConfigurationWindow = (props: IProps) => {
    const [state, setState] = React.useState<state>('view');
    const [showLoading, setShowLoading] = React.useState<boolean>(false);
    const [showWarning, setShowWarning] = React.useState<boolean>(false);
    const [fileName, setFileName] = React.useState<string>('');

    const [fileFields, setFileFields] = React.useState<PRC002.IConfigField[]>([]);
    const [selectedFields, setSelectedFields] = React.useState<PRC002.IConfigField[]>([]);
    const [addedIndices, setAddedIndices] = React.useState<number[]>([]);
    const [addedFields, setAddedFields] = React.useState<PRC002.IConfigField[][]>([]);

    const [configurationlist, setConfigurationList] = React.useState<PRC002.IBaseConfig[]>([]);
    const [serverConfigurationlist, setServerConfigurationList] = React.useState<PRC002.IBaseConfig[]>([]);


    const [newConfiguration, setNewConfiguration] = React.useState<PRC002.IBaseConfig>({ ID: -1, MeterId: props.MeterID, Name: 'New Configuration', Pattern: '*.ini' });
    const [uniqueCongifurationKey, setUniqueConfigurationKey] = React.useState<boolean>(true);

    const [editField, setEditField] = React.useState<{ fld: PRC002.IConfigField, mode: 'delete' | 'edit' }>(null);
    const [newEditField, setNewEditField] = React.useState<PRC002.IConfigField>({ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Category: '', Label: 'Field', Description: '' });


    const [showDeleteWarning, setShowDeleteWarning] = React.useState<boolean>(false);
    const [showNoEditNotice, setShowNoEditNotice] = React.useState<boolean>(false);
    const [showEditWarning, setShowEditWarning] = React.useState<boolean>(false);

    React.useEffect(() => {
        const h = getBaseConfigs();
        return () => { if (h != null && h.abort != null) h.abort(); }
    }, [props.MeterID, props.show]);

    React.useEffect(() => {
        setConfigurationList((lst) => {
            const filtered = lst.filter(item => addedIndices.findIndex(i => i == item.ID) > -1);
            return [...serverConfigurationlist, ...filtered]
        })
    }, [serverConfigurationlist]);

    React.useEffect(() => {
        if (props.show)
            return;

        setState('view')
        setAddedFields([]);
        setAddedIndices([]);
        
    }, [props.show])

    React.useEffect(() => {
        if (state != 'edit')
            return () => { }

        $(".custom-file-input").on("change", (evt: unknown) => {
            const fileName = (evt as React.ChangeEvent<HTMLInputElement>).target.value.split("\\").pop();
            $((evt as React.ChangeEvent<HTMLInputElement>).target).siblings(".custom-file-label").addClass("selected").html(fileName);
            readSingleFile((evt as React.ChangeEvent<HTMLInputElement>), fileName)
        });

        return () => $(".custom-file-input").off('change')
    }, [state])

    React.useEffect(() => {
        if (configurationlist.findIndex(item => item.Name == newConfiguration.Name) == -1)
            setUniqueConfigurationKey(true);
        else
            setUniqueConfigurationKey(false);
    }, [configurationlist, newConfiguration]);

    React.useEffect(() => {
        if (editField == null)
            return;
        const handle = getChangeRequest();
        return () => { if (handle != null && handle.abort != null) handle.abort();}
    }, [editField])

    function getBaseConfigs(): JQuery.jqXHR<Array<PRC002.IBaseConfig>> {
        if (props.MeterID == null || isNaN(props.MeterID))
            return null;
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/BaseConfig/${props.MeterID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: Array<PRC002.IBaseConfig>) => {
            if (data == null)
                return
            setServerConfigurationList(data);

        });

        return handle;
    }


    function getChangeRequest(): JQuery.jqXHR<boolean> {
        setShowDeleteWarning(false);
        setShowNoEditNotice(false);
        if (editField == null)
            return null;
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/Field/AllowChange/${editField.fld.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: boolean) => {
            if (data == null)
                return
            if (data && editField.mode == 'delete') {
                setShowDeleteWarning(true);
            }
            if (!data) {
                setShowNoEditNotice(true);
                setState('edit')
            }
            if (data && editField.mode == 'edit') {
                setNewEditField(editField.fld);
            }                
        });

        return handle;
    }

    function readSingleFile(evt: React.ChangeEvent<HTMLInputElement>, fileName: string) {
        setShowLoading(true);

        if (getFileExtension(fileName) == 'ini')
            ParseINI(evt, (d) => LoadBaseConfigFile(fileName, d));
        if (getFileExtension(fileName) == 'par')
            ParsePAR(evt, (d) => LoadBaseConfigFile(fileName, d));
        else
            setShowLoading(false);
    }

    function getFileExtension(fileName: string): string {
        fileName = fileName.toLowerCase().replace(' ', '');
        const re = /(?:\.([^.]+))?$/;
        return re.exec(fileName)[1];

    }
    function LoadBaseConfigFile(file: string, Fields: Array<PRC002.IConfigField>) {

        setFileName(file);
        setFileFields(Fields.map(item => { item.BaseConfigId = -1; return item }))
        setSelectedFields([]);
        setState('upload');
        setShowLoading(false);
    }

    function SaveChange(): void{
        if (addedFields.some(item => item.length == 0))
            return;

        addedIndices.forEach((item, index) => {
            $.ajax({
                type: "POST",
                url: `${homePath}api/MiMD/PRC002/BaseConfig/Add`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(
                    {
                        ...configurationlist.find(c => c.ID == item),
                        Fields: addedFields[index]
                    }),
                dataType: 'json',
                cache: false,
                async: true
            })
        });
        props.setShow(false);
    }

    // #ToDo
    function RemoveField(item: PRC002.IConfigField, configID: number) {

        if (item.BaseConfigId > -1) {
            setEditField({ fld: item, mode: 'delete' });
            return;
        }

        const index = addedIndices.findIndex(item => item == configID);
        setAddedFields(flds => { const updated = _.cloneDeep(flds); updated[index] = updated[index].filter(f => f.ID != item.ID); return updated; })

        setConfigurationList((lst) => _.clone(lst));
    }

    // Add logic and UI to remove base Configs
    // Add logic and UI to add new Fields

    function AddNew(): void {
        const newID = Math.max(...configurationlist.map(item => item.ID)) + 1;
        setConfigurationList((lst) => { const updated = _.cloneDeep(lst); updated.push({ ...newConfiguration, ID: newID }); return updated; })
        setAddedIndices((lst) => {
            const updated = _.cloneDeep(lst); updated.push(newID); return updated
        });
        setNewConfiguration({ ID: -1, MeterId: props.MeterID, Name: 'New Configuration', Pattern: '*.ini' });
        setState('edit');
        setAddedFields((lst) => {
            const updated = _.cloneDeep(lst); updated.push([]); return updated
        });
    }

    function CompleteUpload(): void {
        if (selectedFields.length == 0)
            return;
        const newID = Math.max(...configurationlist.map(item => item.ID)) + 1;
        let uniqName = fileName;
        let fileIndex = 0;
        while ((configurationlist.findIndex(item => item.Name == uniqName) > -1)) {
            fileIndex = fileIndex + 1;
            uniqName = fileName + ' ' + fileIndex;
        }


        setConfigurationList((lst) => { const updated = _.cloneDeep(lst); updated.push({ Name: uniqName, MeterId: props.MeterID, Pattern: '**/' + fileName, ID: newID }); return updated; })
        setAddedIndices((lst) => {
            const updated = _.cloneDeep(lst); updated.push(newID); return updated
        });
        setState('edit');
        setAddedFields((lst) => {
            const updated = _.cloneDeep(lst); updated.push(selectedFields); return updated
        });
    }

    function getFields(id: number, setFields: (flds: PRC002.IConfigField[]) => void) {
        const index = addedIndices.findIndex(item => item == id)
        if (index > -1) {
            setFields(addedFields[index]);
            return () => { };
        }

        
        if (id == -1)
            return () => { }
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/Field/${id}/Category/1`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: string) => {
            if (data == null)
                return
            setFields(JSON.parse(data) as PRC002.IConfigField[]);

        }); 
        return () => { if (handle != null && handle.abort != null) handle.abort();}
    }

    function DeleteField() {
        const h1 = $.ajax({
            type: "DELETE",
            url: `${homePath}api/MiMD/PRC002/Field/Delete`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(editField.fld),
            dataType: 'json',
            cache: false,
            async: true
        });
        h1.then(() => {
            
            const handle = $.ajax({
                type: "GET",
                url: `${homePath}api/MiMD/PRC002/BaseConfig/${props.MeterID}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });

            handle.done((data: Array<PRC002.IBaseConfig>) => {
                if (data == null)
                    return;

                setServerConfigurationList(data);

            });
        });
    }

    function saveField() {
        if (newEditField.ID == -1) {
            //This is a new field
        }
        if (addedIndices.findIndex(i => i == newEditField.BaseConfigId) > -1) {
            const index = addedIndices.findIndex(i => i == newEditField.BaseConfigId);
            setAddedFields((lst) => {
                const updated = _.cloneDeep(lst);
                const findex = updated[index].findIndex(item => item.ID == newEditField.ID);
                updated[index][findex] = newEditField;
                return updated
            });
        }
        setShowEditWarning(true);
    }

    function PatchField() {
        setState('edit');
        const h1 = $.ajax({
            type: "PATCH",
            url: `${homePath}api/MiMD/PRC002/Field/Update`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(newEditField),
            dataType: 'json',
            cache: false,
            async: true
        });
        h1.then(() => {

            const handle = $.ajax({
                type: "GET",
                url: `${homePath}api/MiMD/PRC002/BaseConfig/${props.MeterID}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });

            handle.done((data: Array<PRC002.IBaseConfig>) => {
                if (data == null)
                    return
                setServerConfigurationList(data);
            });
        });
    }

    function editFieldBtn(record: PRC002.IConfigField, ConfigId: number) {
        if (record.BaseConfigId > -1) {
            setEditField({ fld: record, mode: 'edit' });
            setState('editField');
            return;
        }
        setEditField({ fld: { ...record, BaseConfigId: ConfigId }, mode: 'edit' });
        setState('editField');

    }

    const newConfigValid = newConfiguration.Name != null && newConfiguration.Name.length > 0 && newConfiguration.Pattern != null && newConfiguration.Pattern.length > 0 && uniqueCongifurationKey;
    const newFieldValid = newEditField != null && (newEditField.Name != null && newEditField.Name.length > 0) && (newEditField.Label != null && newEditField.Label.length > 0) &&
        (newEditField.Value != null && newEditField.Value.length > 0);

    const ConfirmDisabled = (((state == 'edit' && addedFields.some(item => item.length == 0)) || (state == 'new' && !newConfigValid) ||
        (state == 'upload' && selectedFields.length == 0) || (state == 'editField' && !newFieldValid)) ? ' disabled' : '') 


    return (
        <>
            <Modal Title={'Meter Base Configuration'} Show={props.show}
                CallBack={(conf, isBtn) => {
                    // Note: cancel and confirm are swapped, due to layout requirements
                    const confirm = !conf;
                    if (!isBtn && state == 'view')
                        props.setShow(false);
                    if (isBtn && !confirm && state == 'view')
                        props.setShow(false);
                    if (!isBtn && state != 'view')
                        setShowWarning(true);
                    if (isBtn && !confirm && state == 'edit')
                        setShowWarning(true);
                    if (isBtn && !confirm && state != 'edit' && state != 'view')
                        setState('edit')
                    if (isBtn && confirm && state == 'upload')
                        CompleteUpload();
                    if (isBtn && confirm && state == 'view')
                        setState('edit');
                    if (isBtn && confirm && state == 'new' && newConfigValid)
                        AddNew();
                    if (isBtn && confirm && state == 'edit')
                        SaveChange();
                    if (isBtn && confirm && state == 'editField' && newFieldValid)
                        saveField();
                }}
                Size='xlg'
                CancelShowToolTip={((state == 'edit' && addedFields.some(item => item.length == 0)) || (state == 'new' && !newConfigValid) ||
                    (state == 'upload' && selectedFields.length == 0) || (state == 'editField' && !newFieldValid))}
                CancelToolTipContent={
                    <>
                        {state == 'new' && (newConfiguration.Name == null || newConfiguration.Name.length == 0) ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Name is required.</p> : null}
                        {state == 'new' && (newConfiguration.Pattern == null || newConfiguration.Pattern.length == 0) ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Pattern is required (e.g. *.ini or *.par for allINI or PAR Files).</p> : null}
                        {state == 'new' && (newConfiguration.Name != null && uniqueCongifurationKey) ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>Key needs to be unique.</p> : null}
                        {state == 'edit' && (addedFields.some(item => item.length == 0)) ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>At least 1 Field needs to be set up in Configuration '{configurationlist.find(item => item.ID == addedIndices[addedFields.findIndex(item => item.length == 0)]).Name}'.</p> : null}
                        {state == 'upload' && (selectedFields.length == 0) ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>At least one Field needs to be selected.</p> : null}
                        {state == 'editField' && (newEditField.Name == null || newEditField.Name.length == 0) ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Field Key is required.</p> : null}
                        {state == 'editField' && (newEditField.Label == null || newEditField.Label.length == 0) ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Field Name is required.</p> : null}
                        {state == 'editField' && (newEditField.Value == null || newEditField.Value.length == 0) ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Value is required.</p> : null}
                        {state == 'editField' && (newEditField.Value != null && (newEditField.FieldType == 'number' && isNaN(parseFloat(newEditField.Value)))) ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Value for a Number Field needs to be numeric.</p> : null}
                    </>
                }
                ShowX={true}
                ShowConfirm={state !== 'view' && state !== 'edit'}
                ShowCancel={true}
                CancelText={state == 'edit' || state == 'editField' ? 'Save and Close' : state == 'view' ? 'Edit' : 'Next'}
                CancelBtnClass={(state == 'edit' || state == 'editField' ? 'btn-primary' : state == 'view' ? 'btn-info' : 'btn-success') + ConfirmDisabled}
                ConfirmBtnClass={'btn-danger mr-auto pull-left'}
                ConfirmText={'Back'}
            >
                {state == 'edit' ? <>
                    <div className="row">
                        <div className="col-8">
                            <div className="form-group" style={{ width: '100%' }}>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" accept=".ini,.par" />
                                    <label className="custom-file-label">Choose a Configuration File if applicable</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-info" onClick={() => { setState('new') }}> Add New Base Configuration </button>
                        </div>
                    </div>
                    <hr />
                </> : null}
                {state == 'edit' || state == 'view' ? <BaseConfigWindow configurationList={configurationlist} getFieldList={getFields} OnRemove={state == 'edit' ? (item, id) => RemoveField(item, id) : null} OnEdit={state == 'edit' ? (item, id) => editFieldBtn(item,id) : null} /> : null}

                {state == 'upload' ? <FileParseWindow Fields={fileFields} setSelectedFields={setSelectedFields} /> : null}
                {state == 'new' ? <NewConfigFields Record={newConfiguration} SetRecord={setNewConfiguration} UniqueKey={uniqueCongifurationKey} /> : null}
                {state == 'editField' ? <ConfigFieldEdit Field={newEditField} Setter={setNewEditField} /> : null}
            </Modal>

            <Warning Title={'Close Configuration'} CallBack={(confirm) => { setShowWarning(false); if (confirm) props.setShow(false); }} Show={showWarning}
                Message={'This will close the Configuration and all unsaved changes will be lost.'} />
            <Warning Title={'Unable to Change Field'} CallBack={() => { setShowNoEditNotice(false) }} Show={showNoEditNotice}
                Message={'This Field can not be edited or deleted. There are unresolved Compliance issues associated with it. Resolve these issues before changing the Configuration.'} />
            <Warning Title={'Remove PRC002 compliance Field'} CallBack={(confirm) => { if (confirm && editField != null && editField.mode == 'delete') DeleteField(); setShowDeleteWarning(false) }} Show={showDeleteWarning}
                Message={'This will permanently delete this Field. Please confirm that this is desired. This action can not be undone.'} />
            <Warning Title={'Edit PRC002 compliance Field'} CallBack={(confirm) => { if (confirm && newEditField != null && editField.mode == 'edit') PatchField(); setShowEditWarning(false) }} Show={showEditWarning}
                Message={'This will permanently change this Field. Please confirm that this is desired. This action can not be undone.'} />
            <LoadingScreen Show={showLoading} />
        </>)
}

export default MeterConfigurationWindow;

