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
import { Modal } from "@gpa-gemstone/react-interactive"
import { Input, Select } from "@gpa-gemstone/react-forms"
import { TrashCan, Pencil, Plus } from "@gpa-gemstone/gpa-symbols"


const ConfigurationFileRules = () => {
    const [showRules, setShowRules] = React.useState<boolean>(false);
    const [rules, setRules] = React.useState<MiMD.IConfigRules[]>([]);
    const [newRules, setNewRules] = React.useState<MiMD.IConfigRules[]>([]);
    const [deletedRules, setDeletedRules] = React.useState<MiMD.IConfigRules[]>([]);
    const [changedRules, setChangedRules] = React.useState<MiMD.IConfigRules[]>([]);
    const [edit, setEdit] = React.useState<boolean>(true);


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

    function addRules(newRules: MiMD.IConfigRules[]) {
        if (!newRules || newRules.length === 0)
            return () => { };

        const handles: JQuery.jqXHR[] = [];

        for (const rule of newRules) {
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
                if (data == null)
                    return;
            });

            handles.push(handle);
        }

        setNewRules([]);

        return () => {
            for (const handle of handles) {
                if (handle != null && handle.abort != null)
                    handle.abort();
            }
        };
    }

    function updateRules(updatedRules: MiMD.IConfigRules[]) {
        if (!updatedRules || updatedRules.length === 0)
            return () => { };

        const handles: JQuery.jqXHR[] = [];

        for (const rule of updatedRules) {
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
                if (data == null)
                    return;
            });

            handles.push(handle);
        }

        setChangedRules([]);

        return () => {
            for (const handle of handles) {
                if (handle != null && handle.abort != null)
                    handle.abort();
            }
        };
    }

    function deleteRules(deletedRules: MiMD.IConfigRules[]) {
        if (!deletedRules || deletedRules.length === 0)
            return () => { };

        const handles: JQuery.jqXHR[] = [];

        for (const rule of deletedRules) {
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
                if (data == null)
                    return;
            });

            handles.push(handle);
        }

        setDeletedRules([]);

        return () => {
            for (const handle of handles) {
                if (handle != null && handle.abort != null)
                    handle.abort();
            }
        };
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

    const updateRule = (updatedRule: MiMD.IConfigRules) => {
        const originalRuleIndex = rules.findIndex(rule => rule.ID === updatedRule.ID);
        const newRuleIndex = newRules.findIndex(rule => rule.ID === updatedRule.ID);
        const changedRuleIndex = changedRules.findIndex(rule => rule.ID === updatedRule.ID);

        // If the updatedRule ID is negative, it's a new rule.
        if (updatedRule.ID < 0) {
            // If newRuleIndex is -1 its a brand new rule
            if (newRuleIndex === -1) {
                setNewRules(prev => [...prev, updatedRule]);
            } else {
                // the rule is new but its already been added to NewRules so a modification 
                const updatedNewRulesList = [...newRules];
                updatedNewRulesList[newRuleIndex] = updatedRule;
                setNewRules(updatedNewRulesList);
            }
        } else {
            // If the rule exists in original rules and the updated rule is not in newRules, modify or add it to changedRules
            if (originalRuleIndex !== -1) {
                if (changedRuleIndex !== -1) {
                    // Update the changedRule if it's already in changedRules
                    const updatedChangedRules = [...changedRules];
                    updatedChangedRules[changedRuleIndex] = updatedRule;
                    setChangedRules(updatedChangedRules);
                } else {
                    // If it's not in changedRules, add it
                    setChangedRules(prev => [...prev, updatedRule]);
                }
            }
        }

        // Update the rule in the main list or add it if it doesn't exist.
        if (originalRuleIndex !== -1) {
            const updatedRulesList = [...rules];
            updatedRulesList[originalRuleIndex] = updatedRule;
            setRules(updatedRulesList);
        } else {
            setRules(prev => [...prev, updatedRule]);
        }
    };


    const deleteRule = (ruleId: number) => {
        const updatedRules = rules.filter(rule => rule.ID !== ruleId);
        const deletedRule = rules.filter(rule => rule.ID === ruleId)[0];
        const filteredNewRules = newRules.filter(rule => rule.ID !== ruleId);

        setRules(updatedRules);
        setNewRules(filteredNewRules);

        //Only adding rules that are already in the database
        if (ruleId > 0) {
            setDeletedRules([...deletedRules, deletedRule])
        }
    };

    return (
        <>

            <button className="btn btn-primary btn-block" onClick={() => setShowRules(!showRules)}>
                Rules
            </button>

            <Modal
                Title={"Configuration File Rules"}
                CallBack={(confirmed, isButton) => {
                    if (confirmed) {
                        addRules(newRules);
                        deleteRules(deletedRules);
                        updateRules(changedRules);
                    }
                    if (isButton || !confirmed) {
                        setShowRules(!showRules);
                    }
                }}
                Show={showRules}
                Size={"xlg"}
                ShowX={true}
            >
                <div className="card">
                    <div className="card-body">
                        {rules ?
                            <Table<MiMD.IConfigRules>
                                cols={[
                                    { key: 'Pattern', label: 'Pattern', headerStyle: { width: 'calc(30% - 8.25em - 130px)' }, rowStyle: { width: 'calc(30% - 8.25em - 130px)' }, content: (item) => <Input<MiMD.IConfigRules> Record={item} Field={'Pattern'} Disabled={edit} Label={''} Setter={(updatedRule) => updateRule(updatedRule)} Valid={() => true} /> },
                                    { key: 'Field', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em - 130px)' }, rowStyle: { width: 'calc(30% - 8.25em - 130px)' }, content: (item) => <Input<MiMD.IConfigRules> Record={item} Field={'Field'} Disabled={edit} Label={''} Setter={(updatedRule) => updateRule(updatedRule)} Valid={() => true} /> },
                                    {
                                        key: 'FieldType', label: 'Type', headerStyle: { width: '8em' }, rowStyle: { width: '12em' }, content: (item) => <Select<MiMD.IConfigRules> Record={item} Field={'FieldType'}
                                            Options={[{ Value: 'string', Label: 'String' }, { Value: 'number', Label: 'Number' },]} Disabled={edit} Label={''} Setter={(updatedRule) => updateRule(updatedRule)} />
                                    },
                                    {
                                        key: 'Comparison', label: 'Oper.', headerStyle: { width: '5em' }, rowStyle: { width: '8em' }, content: (item) => <Select<MiMD.IConfigRules> Record={item} Field={'Comparison'} Disabled={edit} Label={''} Setter={(updatedRule) => updateRule(updatedRule)}
                                            Options={item.FieldType === 'number' ?
                                                [{ Value: 'IN', Label: 'IN' },
                                                { Value: '=', Label: '=' },
                                                { Value: '<>', Label: '<>' },
                                                { Value: '>', Label: '>' },
                                                { Value: '<', Label: '<' },] : [{ Value: 'IN', Label: 'IN' }, { Value: '=', Label: '=' },]} />
                                    },
                                    {
                                        key: 'Value', label: 'Value', headerStyle: { width: 'calc(60% - 8.25em)' }, rowStyle: { width: 'calc(60% - 8.25em)' }, content: (item) => <ConfigRuleValueTableField Record={item} Edit={edit} updateRule={updateRule} />
                                    },
                                    {
                                        key: 'Buttons', label: '', headerStyle: { width: '130px' }, rowStyle: { width: '130px' },
                                        content: (record) => <>
                                            <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => setEdit(!edit)}>
                                                {Pencil}
                                            </button>
                                            <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => deleteRule(record.ID)}>
                                                {TrashCan}
                                            </button>
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
                    </div>
                    <button onClick={() => addBlankRow()} style={{ cursor: 'pointer' }} >
                        <a> {Plus}</a>
                    </button>
                </div>
            </Modal>
        </>
    );
}

const ConfigRuleValueTableField = (props: { Record: MiMD.IConfigRules, Edit: boolean, updateRule: (rule: MiMD.IConfigRules) => void; }) => {
    return (<>
        <div>
            <div style={{ width: ('100%'), display: 'inline-block', verticalAlign: 'middle' }}>
                <Input<MiMD.IConfigRules > Record={props.Record} Field={'Value'} Disabled={props.Edit} Label={''} Setter={props.updateRule} Valid={() => true} />
            </div>
        </div>
    </>)
}


export default ConfigurationFileRules;
