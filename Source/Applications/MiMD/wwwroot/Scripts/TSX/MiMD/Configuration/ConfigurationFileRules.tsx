//******************************************************************************************************
//  ConfigurationFileRules.tsx - Gbtc
//
//  Copyright � 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  09/13/2023 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************


import Table from '@gpa-gemstone/react-table';
import React from 'react';
import { MiMD } from '../global';
import { Modal, Warning } from "@gpa-gemstone/react-interactive"
import { Input, Select } from "@gpa-gemstone/react-forms"
import { TrashCan, Pencil, Plus } from "@gpa-gemstone/gpa-symbols"

type state = 'base' | 'preEdit' | 'changeMade';

const ConfigurationFileRules = () => {
    const [showRules, setShowRules] = React.useState<boolean>(false);
    const [rules, setRules] = React.useState<MiMD.IConfigRules[]>([]);

    const [edit, setEdit] = React.useState<boolean>(false);
    const [editModal, setEditModal] = React.useState<boolean>(false);
    const [currentRule, setCurrentRule] = React.useState<MiMD.IConfigRules>({ ID: -1, Pattern: '*.ini', Field: '', Value: '', Comparison: '=', FieldType: 'string' });
    const [editWarning, setEditWarning] = React.useState<boolean>(false);
    const [deleteWarning, setDeleteWarning] = React.useState<boolean>(false);

    const [state, setState] = React.useState<state>('base')

    React.useEffect(() => {
        getRules();
    }, [showRules]);

    function getRules() {
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/ConfigurationFileRules`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: MiMD.IConfigRules[]) => {
            if (data == null)
                return
            setRules(data);

        });
        return () => { if (handle != null && handle.abort != null) handle.abort(); }
    }
    function updateRule(rule: MiMD.IConfigRules) {
        if (!rule)
            return () => { }

        //If the colors ID is negative its new so add instead of update
        if (rule.ID > 0) {
            const handle = $.ajax({
                type: "PATCH",
                url: `${homePath}api/MiMD/ConfigurationFileRules/Update`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(rule),
                dataType: 'json',
                cache: false,
                async: true
            });

            handle.done((data: MiMD.IConfigRules) => {
                getRules();
                if (data == null)
                    return;
            });
        } else {
            const handle = $.ajax({
                type: "POST",
                url: `${homePath}api/MiMD/ConfigurationFileRules/Add`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(rule),
                dataType: 'json',
                cache: false,
                async: true
            });

            handle.done((data: MiMD.IConfigRules) => {
                getRules();
                if (data == null)
                    return;
            });
        }
    }

    function deleteRule(rule: MiMD.IConfigRules) {
        if (!rule)
            return () => { }

        //If the colors ID is negative they deleted a color that hasnt been saved yet so dont try to delete
        if (rule.ID > 0) {
            const handle = $.ajax({
                type: "DELETE",
                url: `${homePath}api/MiMD/ConfigurationFileRules/Delete`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(rule),
                dataType: 'json',
                cache: false,
                async: true
            });

            handle.done((data: MiMD.IConfigRules) => {
                getRules();
                if (data == null)
                    return;
            });
        } else {
            getRules();
        }
    }

    function addBlankRow() {
        const uniqueID = Math.floor(Math.random() * -10000);

        // Create a blank rule with negative id to indicate its new
        const newRule: MiMD.IConfigRules = {
            ID: uniqueID,
            Field: '',
            FieldType: 'string',
            Comparison: '=',
            Value: '',
            Pattern: '*.ini'
        };

        setRules(prevRules => [...prevRules, newRule]);
    }

    const handleEdit = (rule: MiMD.IConfigRules) => {
        setEditModal(!editModal);
        setCurrentRule(rule);
        
    }

    const handleDelete = (rule: MiMD.IConfigRules) => {
        setDeleteWarning(!deleteWarning);
        setCurrentRule(rule);
    }

    console.log(currentRule)
    return (
        <>
            <button className="btn btn-primary btn-block" onClick={() => setShowRules(!showRules)}>
                Rules
            </button>
            <Modal
                Title={"Configuration File Rules"}
                CallBack={(confirmed, isButton) => {
                    if (isButton) {
                        if (confirmed) {
                            setEdit(!edit);
                            setState('preEdit');
                            if (state == 'changeMade') {
                                setShowRules(!showRules);
                            }
                        }
                        else {
                            setShowRules(!showRules);
                        }
                    } else if (!confirmed && !isButton) {
                        setShowRules(!showRules);
                    }
                }}
                Show={showRules}
                Size={"xlg"}
                ShowX={true}
                ConfirmText={state == 'changeMade' ? "Save" : "Edit"}
                ConfirmBtnClass={state == 'changeMade' ? "btn-success" : "btn-primary"}
                CancelText={"Exit"}
            >
                <div className="card">
                    <div className="card-body">
                        {rules ?
                            <Table<MiMD.IConfigRules>
                                cols={[
                                    { key: 'Pattern', label: 'Pattern', headerStyle: { width: 'calc(30% - 8.25em - 130px)' }, rowStyle: { width: 'calc(30% - 8.25em - 130px)' }, content: (item) => <Input<MiMD.IConfigRules> Record={item} Field={'Pattern'} Disabled={true} Label={''} Setter={() => true} Valid={() => true} /> },
                                    { key: 'Field', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em - 130px)' }, rowStyle: { width: 'calc(30% - 8.25em - 130px)' }, content: (item) => <Input<MiMD.IConfigRules> Record={item} Field={'Field'} Disabled={true} Label={''} Setter={() => true} Valid={() => true} /> },
                                    {
                                        key: 'FieldType', label: 'Type', headerStyle: { width: '8em' }, rowStyle: { width: '12em' }, content: (item) => <Select<MiMD.IConfigRules> Record={item} Field={'FieldType'}
                                            Options={[{ Value: 'string', Label: 'String' }, { Value: 'number', Label: 'Number' },]} Disabled={true} Label={''} Setter={() => true} />
                                    },
                                    {
                                        key: 'Comparison', label: 'Oper.', headerStyle: { width: '5em' }, rowStyle: { width: '8em' }, content: (item) => <Select<MiMD.IConfigRules> Record={item} Field={'Comparison'} Disabled={true} Label={''} Setter={() => true}
                                            Options={item.FieldType === 'number' ?
                                                [{ Value: 'IN', Label: 'IN' },
                                                { Value: '=', Label: '=' },
                                                { Value: '<>', Label: '<>' },
                                                { Value: '>', Label: '>' },
                                                { Value: '<', Label: '<' },] : [{ Value: 'IN', Label: 'IN' }, { Value: '=', Label: '=' },]} />
                                    },
                                    {
                                        key: 'Value', label: 'Value', headerStyle: { width: 'calc(60% - 8.25em)' }, rowStyle: { width: 'calc(60% - 8.25em)' }, content: (item) => <ConfigRuleValueTableField Label={''} Record={item} Edit={true} updateRule={() => true} />
                                    },
                                    {
                                        key: 'Buttons', label: '', headerStyle: { width: '130px' }, rowStyle: { width: '130px' },
                                        content: (item) =>
                                            <>
                                                {edit ? (
                                                    <>
                                                        <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => handleEdit(item)}>
                                                            {Pencil}
                                                        </button>
                                                        <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => handleDelete(item)}>
                                                            {TrashCan}
                                                        </button>
                                                    </>
                                                ) : null}
                                            </>
                                    }
                                ]}
                                tableClass="table table-hover"
                                data={rules}
                                sortKey={""}
                                ascending={true}
                                onSort={() => { }}
                                onClick={() => { }}
                                theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                tbodyStyle={{ display: 'block', width: '100%' }}
                                rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                selected={() => false}
                            />
                            : <></>}
                        <Modal
                            Title={"Rule Configuration"}
                            CallBack={(confirmed, isButton) => {
                                if (isButton) {
                                    if (confirmed) {
                                        setEditWarning(!editWarning);
                                    }
                                    else {
                                        setEditModal(!editModal);
                                    }
                                } else if (!confirmed && !isButton) {
                                    setEditModal(!editModal);
                                }
                            }}
                            Show={editModal}
                            ShowX={true}
                            ConfirmBtnClass={"btn-success"}
                        >
                            <Input<MiMD.IConfigRules> Record={currentRule} Field={'Pattern'} Disabled={false} Label={'Pattern'} Setter={(rule) => setCurrentRule(rule)} Valid={() => true} />
                            <Input<MiMD.IConfigRules> Record={currentRule} Field={'Field'} Disabled={false} Label={'Field'} Setter={(rule) => setCurrentRule(rule)} Valid={() => true} /> 
                            <Select<MiMD.IConfigRules> Record={currentRule} Field={'FieldType'}
                                Options={[{ Value: 'string', Label: 'String' }, { Value: 'number', Label: 'Number' },]} Disabled={false} Label={'FieldType'} Setter={(rule) => setCurrentRule(rule)} />
                            <Select<MiMD.IConfigRules> Record={currentRule} Field={'Comparison'} Disabled={false} Label={'Comparison'} Setter={(rule) => setCurrentRule(rule)}
                                Options={currentRule.FieldType === 'number' ?
                                    [{ Value: 'IN', Label: 'IN' },
                                    { Value: '=', Label: '=' },
                                    { Value: '<>', Label: '<>' },
                                    { Value: '>', Label: '>' },
                                        { Value: '<', Label: '<' },] : [{ Value: 'IN', Label: 'IN' }, { Value: '=', Label: '=' },]} />
                            <ConfigRuleValueTableField Record={currentRule} Edit={false} updateRule={(rule) => setCurrentRule(rule)} Label={'Value'} />

                            <Warning Title={'Edit Rule Configuration'}
                                CallBack={(confirmed) => {
                                    if (confirmed) {
                                        updateRule(currentRule);
                                        setEditWarning(!editWarning);
                                        setEditModal(!editModal);
                                        setState('changeMade');
                                    } else { setEditWarning(!editWarning) }
                                }}
                                Show={editWarning}
                                Message={'This will permanently change this Rule Configuration. Please confirm that this is desired. This action can not be undone.'}
                            />
                        </Modal>

                        <Warning Title={'Delete Rule Configuration'}
                            CallBack={(confirmed) => {
                                if (confirmed) {
                                    deleteRule(currentRule); setDeleteWarning(!deleteWarning); setState('changeMade');
                                } else { setDeleteWarning(!deleteWarning) }
                            }}
                            Show={deleteWarning}
                            Message={'This will permanently delete this Rule Configuration. Please confirm that this is desired. This action can not be undone.'}
                        />
                    </div>
                    <button onClick={() => addBlankRow()} style={{ cursor: 'pointer' }} >
                        <a> {Plus}</a>
                    </button>
                </div>
            </Modal>
        </>
    );
}

const ConfigRuleValueTableField = (props: { Record: MiMD.IConfigRules, Label: string, Edit: boolean, updateRule: (rule: MiMD.IConfigRules) => void; }) => {
    return (<>
        <div>
            <div style={{ width: ('100%'), display: 'inline-block', verticalAlign: 'middle' }}>
                <Input<MiMD.IConfigRules > Record={props.Record} Field={'Value'} Disabled={props.Edit} Label={props.Label} Setter={props.updateRule} Valid={() => true} />
            </div>
        </div>
    </>)
}


export default ConfigurationFileRules;
