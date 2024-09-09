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
import { Modal, Warning } from "@gpa-gemstone/react-interactive";
import { Input, Select } from "@gpa-gemstone/react-forms";
import { TrashCan, Pencil } from "@gpa-gemstone/gpa-symbols";
import { HelperTable } from "../CommonComponents/HelperTable";

const ConfigurationFileRules = () => {
    const [showRules, setShowRules] = React.useState<boolean>(false);
    const [rules, setRules] = React.useState<MiMD.IConfigRules[]>([]);
    const [editModal, setEditModal] = React.useState<boolean>(false);
    const [currentRule, setCurrentRule] = React.useState<MiMD.IConfigRules>(
        { ID: 0, Pattern: '**\\*.ini', Field: '', Value: '', Comparison: '=', FieldType: 'string', AdditionalFieldID: null, PreVal: "0" }
    );
    const [deleteWarning, setDeleteWarning] = React.useState<boolean>(false);
    const [additionalFieldIDs, setAdditionalFieldIDs] = React.useState<any[]>([]);
    const [showFunctionHelp, setShowFunctionHelp] = React.useState<boolean>(false);
    const help = [
        { Name: 'PreVal', Description: 'The previous value of your config file value', Example: 'PreVal' },
        { Name: '+, -', Description: 'Additive', Example: '100 + 7' },
        { Name: '*, /, %', Description: 'Multiplicative', Example: '100 * 2 / (3 % 2)' },
        { Name: '^', Description: 'Power', Example: '2 ^ 16' },
        { Name: '-', Description: 'Negation', Example: '-6 + 10' },
        { Name: '+', Description: 'String Concatenation', Example: '"abc" + "def"' },
        { Name: '<<, >>', Description: 'Shift', Example: '0x80 >> 2' },
        { Name: '=, <>, <, >, <=, >=', Description: 'Comparison', Example: '2.5 > 100' },
        { Name: 'And, Or, Xor, Not', Description: 'Logical', Example: '(1 > 10) and (true or not false)' },
        { Name: 'And, Or, Xor, Not', Description: 'Bitwise', Example: '100 And 44 or (not 255)' },
        { Name: 'If', Description: 'Conditional', Example: 'If(a > 100, "greater", "less")' },
        { Name: 'Cast', Description: 'Cast and conversion', Example: 'cast(100.25, int)' },
        { Name: 'String literal', Description: '', Example: '"string!"' },
        { Name: 'Char literal', Description: '', Example: '\'c\'' },
        { Name: 'Boolean literal', Description: '', Example: 'true AND false' },
        { Name: 'Real literal', Description: 'Double and single', Example: '100.25 + 100.25f' },
        { Name: 'Integer literal', Description: 'Signed/unsigned 32/64 bit', Example: '100 + 100U + 100L + 100LU' },
        { Name: 'Hex literal', Description: '', Example: '0xFF + 0xABCDU + 0x80L + 0xC9LU' }
    ]

    React.useEffect(() => {
        getRules();
    }, [showRules]);

    
    React.useEffect(() => {
        getAdditionalIds();
    }, [editModal]);

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

        //If the rules ID is 0 its new so add instead of update
        if (rule.ID !== 0) {
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
        if (rule == null) return;

        const handle = $.ajax({
            type: "DELETE",
            url: `${homePath}api/MiMD/ConfigurationFileRules/Delete`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(rule),
            dataType: 'json',
            cache: false,
            async: true
        }).done((data: MiMD.IConfigRules) => {
            getRules();
        });
    }

    function getAdditionalIds() {
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/AdditionalFieldView/ParentTable/Meter`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done(data => {
            if (data == null)
                return
            let options = data.map(id => ({ Value: id.ID, Label: id.FieldName }));

            setAdditionalFieldIDs(options);
        });
        return () => { if (handle != null && handle.abort != null) handle.abort(); }
    }


    function addBlankRow() {
        setCurrentRule({
            ID: 0,
            Field: '',
            FieldType: 'string',
            Comparison: '=',
            Value: '',
            Pattern: '**\\*.ini',
            AdditionalFieldID: null,
            PreVal: "0"
        });
        setEditModal(true);
    }

    const handleEdit = (rule: MiMD.IConfigRules) => {
        setEditModal(true);
        setCurrentRule(rule);

    }

    const handleDelete = (rule: MiMD.IConfigRules) => {
        setDeleteWarning(true);
        setCurrentRule(rule);
    }

    return (
        <>
            <button className="btn btn-info" onClick={() => setShowRules(!showRules)}>
                Configure File Rules
            </button>
            <Modal
                Title={"Configuration File Rules"}
                CallBack={() => setShowRules(false)}
                Show={showRules}
                Size={"xlg"}
                ShowX={true}
                ShowConfirm={false}
                ShowCancel={false}
            >
                <div className="card">
                    <div className="card-body">
                        <button className="btn btn-info pull-right" onClick={() => addBlankRow()} style={{ cursor: 'pointer', marginBottom: '1em' }} >
                            Add
                        </button>
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
                                            <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => handleEdit(item)}>
                                                {Pencil}
                                            </button>
                                            <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => handleDelete(item)}>
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

                        <Modal
                            Title={"Rule Configuration"}
                            CallBack={(confirmed, isButton) => {
                                if (confirmed) {
                                    updateRule(currentRule);
                                }
                                setEditModal(false);
                            }}
                            Show={editModal}
                            ShowX={true}
                            ShowCancel={false}
                            ConfirmText={"Save Rule"}
                            ConfirmBtnClass={"btn-primary"}
                            Size={"lg"}
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
                                    { Value: '<', Label: '<' },] : [
                                    { Value: 'IN', Label: 'IN' },
                                    { Value: '=', Label: '=' }
                                    ]} />
                            <ConfigRuleValueTableField Record={currentRule} Edit={false} updateRule={(rule) => setCurrentRule(rule)} Label={'Value'} />
                            <Select<MiMD.IConfigRules> Record={currentRule} Field={'AdditionalFieldID'} Disabled={false} Label={'Additional Field'} Setter={(rule) => setCurrentRule(rule)}
                                Options={additionalFieldIDs} EmptyOption={true} />
                            <button type="button" className="btn btn-light float-right" onClick={() => setShowFunctionHelp(true)}>
                                <i style={{ color: '#007BFF' }} className="fa fa-2x fa-question-circle"></i>
                            </button>
                            <HelperTable Data={help} Title={"Dynamic Expression Examples"} IsOpen={showFunctionHelp} onClose={() => setShowFunctionHelp(!showFunctionHelp)}/>
                        </Modal>

                        <Warning Title={'Delete Rule Configuration'}
                            CallBack={(confirmed) => {
                                if (confirmed) {
                                    deleteRule(currentRule); setDeleteWarning(!deleteWarning);
                                } else { setDeleteWarning(!deleteWarning) }
                            }}
                            Show={deleteWarning}
                            Message={'This will permanently delete this Rule Configuration. Please confirm that this is desired. This action can not be undone.'}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
}

const ConfigRuleValueTableField = (props: { Record: MiMD.IConfigRules, Label: string, Edit: boolean, updateRule: (rule: MiMD.IConfigRules) => void; }) => {
    return (
        <>
            <div>
                <div style={{ width: ('100%'), display: 'inline-block', verticalAlign: 'middle' }}>
                    <Input<MiMD.IConfigRules > Record={props.Record} Field={'Value'} Disabled={props.Edit} Label={props.Label} Setter={props.updateRule} Valid={() => true} />
                </div>
            </div>
        </>
    )
}


export default ConfigurationFileRules;
