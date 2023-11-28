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
//  10/16/2023 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************


import Table from '@gpa-gemstone/react-table';
import React from 'react';
import { MiMD } from '../global';
import { Modal, Warning } from "@gpa-gemstone/react-interactive"
import { Input, Select, CheckBox, TextArea } from "@gpa-gemstone/react-forms"
import { TrashCan, Pencil, CrossMark } from "@gpa-gemstone/gpa-symbols"
import { HelperTable } from "../CommonComponents/HelperTable"
import { IsRegex } from "@gpa-gemstone/helper-functions"

type state = 'base' | 'preEdit' | 'changeMade';

const DiagnosticFileRules = () => {
    const [showRules, setShowRules] = React.useState<boolean>(false);
    const [rules, setRules] = React.useState<MiMD.IDiagnosticRules[]>([]);
    const [edit, setEdit] = React.useState<boolean>(false);
    const [editModal, setEditModal] = React.useState<boolean>(false);
    const [currentRule, setCurrentRule] = React.useState<MiMD.IDiagnosticRules>({ ID: -1, FilePattern: 'AppStatus', Field: '', RegexPattern: '', Text: '', Severity: 0, ReverseRule: false, SQLQuery: '', AdditionalFieldID: null});
    const [deleteWarning, setDeleteWarning] = React.useState<boolean>(false);
    const [state, setState] = React.useState<state>('base')
    const [validReg, setValidReg] = React.useState<boolean>(true);
    const [showAdvanced, setShowAdvanced] = React.useState<boolean>(false);
    const typeOptions = [{ Value: 'AppStatus', Label: 'AppStatus' }, { Value: 'AppTrace', Label: 'AppTrace' }, { Value: 'EmaxEventHis', Label: 'EmaxEventHistory' }];
    const [sortField, setSortField] = React.useState<keyof (MiMD.IDiagnosticRules)>('FilePattern');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [showHelp, setShowHelp] = React.useState<boolean>(false);
    const [additionalFieldIDs, setAdditionalFieldIDs] = React.useState<any[]>([]);

    const AppStatusHelp = [
        { Name: 'variables["version"]', Description: 'The value associated with the recorder field.', Example: 'variables["version"]' },
        { Name: 'variables["pc_time"]', Description: 'The value associated with the pc_time field.', Example: 'variables["pc_time"]' },
        { Name: 'variables["time_mark_time"]', Description: 'The value associated with the time_mark_source field.', Example: 'variables["time_mark_time"]' },
        { Name: 'variables["data_drive"]', Description: 'The value associated with the data_drive field.', Example: 'variables["data_drive"]' },

        { Name: 'variables["board_temp"]', Description: 'The value associated with the (>65c,c) field.', Example: 'variables["board_temp"]' },
        { Name: 'variables["speedfan"]', Description: 'The value associated with the speedfan field.', Example: 'variables["speedfan"]' },

        { Name: 'variables["someField"]', Description: 'Any field in the file not specified in the rows above will be added to the variables dictionary during processing.', Example: 'variables["someField"]'},

        { Name: 'MeterID', Description: 'The current Meter ID of the file being processed.', Example: 'MeterID' },
        { Name: 'LastWriteTime', Description: 'The time of the write time for the previously processed file.', Example: 'LastWriteTime' },
    ]


    const AppTraceHelp = [
        { Name: 'variables["description"]', Description: 'The text of the line that is currently being processed minus the timestamp.', Example: 'variables["description"]' },

        { Name: 'Time', Description: 'The time associated with the timestamp of the line being processed.', Example: 'Time' },
        { Name: 'Line', Description: 'The current line being processed.', Example: 'Line' },
        { Name: 'MeterID', Description: 'The current Meter ID of the file being processed.', Example: 'MeterID' },
        { Name: 'LastWriteTime', Description: 'The time of the write time for the previously processed file.', Example: 'LastWriteTime' },
    ]

    const EmaxHelp = [
        { Name: 'Time', Description: 'The time associated with the timestamp of the line being processed.', Example: 'Time' },
        { Name: 'Line', Description: 'The current line being processed.', Example: 'Line' },
        { Name: 'MeterID', Description: 'The current Meter ID of the file being processed.', Example: 'MeterID' },
        { Name: 'LastWriteTime', Description: 'The time of the write time for the previously processed file.', Example: 'LastWriteTime' },

        { Name: 'variables["systemstarted"]', Description: 'A true/false value indicating whether or not a line has indicated the system has started.', Example: 'variables["systemstarted"]' },
        { Name: 'variables["systemstartedtime"]', Description: 'The time of when the system started.', Example: 'variables["systemstartedtime"]' },
    ]


    React.useEffect(() => {
        getRules();
    }, [showRules, sortField, ascending]);

    React.useEffect(() => {
        setValidReg(IsRegex(currentRule.RegexPattern));
    }, [currentRule]);


    React.useEffect(() => {
        getAdditionalIds();
    }, [editModal]);

    function getRules() {
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/DiagnosticFileRules/${sortField}/${ascending ? 1 : 0}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: string) => {
            if (data == null)
                return
            setRules(JSON.parse(data));
        });

        return () => { if (handle != null && handle.abort != null) handle.abort(); }
    }

    function updateRule(rule: MiMD.IDiagnosticRules) {
        if (!rule)
            return () => { }

        // Replace null fields with an empty string
        Object.keys(rule).forEach(key => {
            if (rule[key] === null || rule[key] === undefined) {
                rule[key] = "";
            }
        });

        //If the colors ID is negative its new so add instead of update
        if (rule.ID > -1) {
            const handle = $.ajax({
                type: "PATCH",
                url: `${homePath}api/MiMD/DiagnosticFileRules/Update`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(rule),
                dataType: 'json',
                cache: false,
                async: true
            });

            handle.done((data: MiMD.IDiagnosticRules) => {
                getRules();
                if (data == null)
                    return;
            });
        } else {
            const handle = $.ajax({
                type: "POST",
                url: `${homePath}api/MiMD/DiagnosticFileRules/Add`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(rule),
                dataType: 'json',
                cache: false,
                async: true
            });

            handle.done((data: MiMD.IDiagnosticRules) => {
                getRules();
                if (data == null)
                    return;
            });
        }
    }

    function deleteRule(rule: MiMD.IDiagnosticRules) {
        if (!rule)
            return () => { }

        //If the ID is negative they deleted a rule that hasnt been saved yet so dont try to delete
        if (rule.ID > -1) {
            const handle = $.ajax({
                type: "DELETE",
                url: `${homePath}api/MiMD/DiagnosticFileRules/Delete`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(rule),
                dataType: 'json',
                cache: false,
                async: true
            });

            handle.done((data: MiMD.IDiagnosticRules) => {
                getRules();
                if (data == null)
                    return;
            });
        } else {
            getRules();
        }
    }

    function getAdditionalIds() {
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/AdditionalFieldIDs/ParentTable/Meter`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done(data => {
            if (data == null)
                return
            let options = [
                { Value: null, Label: "" },
                ...data.map(id => ({ Value: id.ID, Label: id.ID.toString() }))
            ];

            const matchingIndex = options.findIndex(opt => opt.Value === currentRule?.AdditionalFieldID);

            if (matchingIndex > -1) {
                const matchingOption = options.splice(matchingIndex, 1)[0];
                options = [matchingOption, ...options];
            }

            setAdditionalFieldIDs(options);
        });
        return () => { if (handle != null && handle.abort != null) handle.abort(); }
    }

    function addBlankRow() {
        const uniqueID = Math.floor(Math.random() * -10000);

        // Create a blank rule with negative id to indicate its new
        const newRule: MiMD.IDiagnosticRules = {
            ID: uniqueID,
            Field: '',
            RegexPattern: '',
            FilePattern: '',
            Severity: 0,
            Text: '',
            ReverseRule: false,
            SQLQuery: '',
            AdditionalFieldID: null
        };

        setRules(prevRules => [newRule, ...prevRules]);
    }

    const handleEdit = (rule: MiMD.IDiagnosticRules) => {
        setEditModal(!editModal);
        setCurrentRule(rule);
    }

    const handleDelete = (rule: MiMD.IDiagnosticRules) => {
        setDeleteWarning(!deleteWarning);
        setCurrentRule(rule);
    }

    return (
        <>
            <button className="btn btn-primary btn-block" onClick={() => setShowRules(!showRules)}>
                Rules
            </button>
            {rules &&
                <Modal
                    Title={"Diagnostic File Rules"}
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
                    CancelText={"Close"}
                >
                    <div className="card">
                        <div className="card-body">
                            <button className="btn btn-primary pull-right" onClick={() => addBlankRow()} style={{ cursor: 'pointer', marginBottom: '1em' }} >
                                Add
                            </button>
                            <Table<MiMD.IDiagnosticRules>
                                cols={[
                                    { key: 'FilePattern', label: 'File Pattern', headerStyle: { width: 'calc(30% - 8.25em - 130px)' }, rowStyle: { width: 'calc(30% - 8.25em - 130px)' }, content: (item) => <Input<MiMD.IDiagnosticRules> Record={item} Field={'FilePattern'} Disabled={true} Label={''} Setter={() => true} Valid={() => true} /> },
                                    { key: 'Field', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em - 130px)' }, rowStyle: { width: 'calc(30% - 8.25em - 130px)' }, content: (item) => <Input<MiMD.IDiagnosticRules> Record={item} Field={'Field'} Disabled={true} Label={''} Setter={() => true} Valid={() => true} /> },
                                    { key: 'Text', label: 'Rule Text', headerStyle: { width: 'calc(30% - 8.25em - 130px)' }, rowStyle: { width: 'calc(30% - 8.25em - 130px)' }, content: (item) => <Input<MiMD.IDiagnosticRules> Record={item} Field={'Text'} Disabled={true} Label={''} Setter={(rule) => setCurrentRule(rule)} Valid={() => true} /> },
                                    {
                                        key: 'RegexPattern', label: 'Regex Pattern', headerStyle: { width: 'calc(60% - 8.25em)' }, rowStyle: { width: 'calc(60% - 8.25em)' }, content: (item) => <Input<MiMD.IDiagnosticRules> Record={item} Field={'RegexPattern'} Disabled={validReg} Label={''} Setter={() => true}Valid={() => true}  />
                                    },
                                    {
                                        key: 'SQLQuery', label: 'SQL Query', headerStyle: { width: 'calc(60% - 8.25em)' }, rowStyle: { width: 'calc(60% - 8.25em)' }, content: (item) => <Input<MiMD.IDiagnosticRules> Record={item} Field={'SQLQuery'} Disabled={validReg} Label={''} Setter={() => true} Valid={() => true} />
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
                                sortKey={sortField}
                                ascending={true}
                                onSort={(d) => {
                                    if (d.colKey == 'scroll')
                                        return;
                                    if (d.colKey == sortField) {
                                        setAscending(!ascending);
                                    }
                                    else {
                                        setSortField(d.colKey as keyof MiMD.IDiagnosticRules);
                                    }
                                }}
                                onClick={() => { }}
                                theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                tbodyStyle={{ display: 'block', width: '100%' }}
                                rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                selected={() => false}
                            />

                            <Modal
                                Title={"Rule Configuration"}
                                CallBack={(confirmed, isButton) => {
                                    if (isButton) {
                                        if (confirmed) {
                                            updateRule(currentRule);
                                            setEditModal(!editModal);
                                            setState('changeMade');
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
                                Size={"lg"}
                                DisableConfirm={!validReg}
                                ConfirmShowToolTip={!validReg}
                                ConfirmToolTipContent={<p> {CrossMark} Regex Pattern must be Valid</p>}
                            >
                                <Select<MiMD.IDiagnosticRules> Record={currentRule} Field={'FilePattern'} Options={typeOptions} Disabled={false} Label={'Type'} Setter={(rule) => setCurrentRule(rule)} />
                                <Input<MiMD.IDiagnosticRules> Record={currentRule} Field={'Field'} Disabled={false} Label={'Field'} Setter={(rule) => setCurrentRule(rule)} Valid={() => true}
                                    Help={"If left blank this rule will apply to each line in a file."} />
                                <Input<MiMD.IDiagnosticRules> Record={currentRule} Field={'Text'} Disabled={false} Label={'Alarm Text'} Setter={(rule) => setCurrentRule(rule)} Valid={() => true} />
                                <Input<MiMD.IDiagnosticRules> Record={currentRule} Field={'Severity'} Disabled={false} Label={'Severity'} Setter={(rule) => setCurrentRule(rule)} Type={'integer'} Valid={() => true} />
                                <Input<MiMD.IDiagnosticRules> Record={currentRule} Field={'RegexPattern'} Disabled={false} Label={'Regex Pattern'} Setter={(rule) => setCurrentRule(rule)} Valid={() => IsRegex(currentRule.RegexPattern)} //NOTE: there could possibly be cases where the regex pattern is considered invalid in JavaScript but valid in C# and vise versa since the regex engines aren't the same
                                    Feedback={"The Expression must be a valid Regex Pattern"} />
                                <CheckBox<MiMD.IDiagnosticRules> Help={"If checked the rule will be violated if the pattern IS matched."} Record={currentRule} Field={"ReverseRule"}
                                    Setter={(rule) => setCurrentRule(rule)} Label={"Reverse Rule"} Disabled={false} /> 
                                <Select<MiMD.IDiagnosticRules> Record={currentRule} Field={'AdditionalFieldID'} Disabled={false} Label={'Additional Field ID'} Setter={(rule) => setCurrentRule(rule)}
                                    Options={additionalFieldIDs} />
                                <button className="btn btn-primary pull-right" onClick={() => setShowAdvanced(!showAdvanced)} style={{ cursor: 'pointer', marginBottom: '1em' }} >
                                    Advanced
                                </button>
                            </Modal>
                            <Modal
                                Title={"Sql Configuration"}
                                CallBack={(confirmed, isButton) => {
                                    if (isButton) {
                                        if (confirmed) {
                                            setShowAdvanced(!showAdvanced);
                                        }
                                        else {
                                            setShowAdvanced(!showAdvanced)
                                        }
                                    } else if (!confirmed && !isButton) {
                                        setShowAdvanced(!showAdvanced)
                                    }
                                }}
                                Show={showAdvanced}
                                ShowX={true}
                                ConfirmBtnClass={"btn-success"}
                                Size={"lg"}
                            >
                                <div className="p-3">
                                    <p>Note: When using variables, enclose them within curly braces i.e: {'{'}<strong>variables["key"]</strong>{'}'}. Variable names are case-sensitive.</p>
                                </div>
                                <TextArea<MiMD.IDiagnosticRules> Help={"If the query returns 1 the rule will trigger an alarm."}
                                    Record={currentRule} Field={'SQLQuery'} Disabled={false} Label={'SQL Query'} Setter={(rule) => setCurrentRule(rule)} Valid={() => true} Rows={14} />
                                <button type="button" className="btn btn-light float-right" onClick={() => setShowHelp(true)}>
                                    <i style={{ color: '#007BFF' }} className="fa fa-2x fa-question-circle"></i>
                                </button>
                                <HelperTable Data={
                                    currentRule.FilePattern === 'AppStatus' ? AppStatusHelp :
                                    currentRule.FilePattern === 'AppTrace' ? AppTraceHelp :
                                    EmaxHelp
                                }
                                    Title={"Advanced Help"} IsOpen={showHelp} onClose={() => setShowHelp(false)} NameLabel={"Variable"} />
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
                    </div>
                </Modal>
            }
        </>
    );
}

export default DiagnosticFileRules;
