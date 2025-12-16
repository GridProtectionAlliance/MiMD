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
import React from 'react';
import { MiMD } from '../global';
import { Modal, Warning } from "@gpa-gemstone/react-interactive"
import { Input, Select, CheckBox, TextArea } from "@gpa-gemstone/react-forms"
import { TrashCan, Pencil, CrossMark } from "@gpa-gemstone/gpa-symbols"
import { HelperTable } from "../CommonComponents/HelperTable"
import { IsRegex } from "@gpa-gemstone/helper-functions"
import { Table, Column } from '@gpa-gemstone/react-table'


const AppStatusHelp = [
    { Name: 'variables["version"]', Description: 'The value associated with the recorder field.', Example: 'variables["version"]' },
    { Name: 'variables["pc_time"]', Description: 'The value associated with the pc_time field.', Example: 'variables["pc_time"]' },
    { Name: 'variables["time_mark_time"]', Description: 'The value associated with the time_mark_source field.', Example: 'variables["time_mark_time"]' },
    { Name: 'variables["data_drive"]', Description: 'The value associated with the data_drive field.', Example: 'variables["data_drive"]' },

    { Name: 'variables["board_temp"]', Description: 'The value associated with the (>65c,c) field.', Example: 'variables["board_temp"]' },
    { Name: 'variables["speedfan"]', Description: 'The value associated with the speedfan field.', Example: 'variables["speedfan"]' },

    { Name: 'variables["someField"]', Description: 'Any field in the file not specified in the rows above will be added to the variables dictionary during processing.', Example: 'variables["someField"]' },

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



const DiagnosticFileRules = () => {
    const [showRules, setShowRules] = React.useState<boolean>(false);
    const [rules, setRules] = React.useState<MiMD.IDiagnosticRules[]>([]);

   
    const [editModal, setEditModal] = React.useState<boolean>(false);
    const [currentRule, setCurrentRule] = React.useState<MiMD.IDiagnosticRules>({ ID: -1, FilePattern: 'AppStatus', Field: '', RegexPattern: '', Text: '', Severity: 0, ReverseRule: false, SQLQuery: '', AdditionalFieldID: null});

    const [sortField, setSortField] = React.useState<keyof (MiMD.IDiagnosticRules)>('FilePattern');
    const [ascending, setAscending] = React.useState<boolean>(true);
  
    const typeOptions = [{ Value: 'AppStatus', Label: 'APP Status' }, { Value: 'AppTrace', Label: 'APP Trace' }, { Value: 'EmaxEventHis', Label: 'EMAX Event History' }];
    
    const [additionalFieldIDs, setAdditionalFieldIDs] = React.useState<any[]>([]);

    const [deleteWarning, setDeleteWarning] = React.useState<boolean>(false);
    const [showHelp, setShowHelp] = React.useState<boolean>(false);

    const [validReg, setValidReg] = React.useState<boolean>(true);
    const [showAdvanced, setShowAdvanced] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handle = getRules();
        return () => { if (handle != null && handle.abort != null) handle.abort(); }
    }, [showRules, sortField, ascending]);

    React.useEffect(() => {
        setValidReg(IsRegex(currentRule.RegexPattern));
    }, [currentRule.RegexPattern]);


    React.useEffect(() => {
        const handle = getAdditionalIds();
        return () => { if (handle != null && handle.abort != null) handle.abort(); }
    }, []);

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

        return handle;
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

        //If the rule ID is 0 its new so add instead of update
        if (rule.ID !== 0) {
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

        //If the rule ID is negative they deleted a rule that hasnt been saved yet so dont try to delete
        if (rule.ID !== 0) {
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
        return handle;
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
            <button className="btn btn-info" onClick={() => setShowRules(!showRules)}>
                Configure Alarm Rules
            </button>
           <Modal
                Title={"Diagnostic File Rules"}
                CallBack={() => setShowRules(false)}
                Show={showRules}
                Size={"xlg"}
                ShowX={true}
                ShowConfirm={false}
                ShowCancel={false}
                >
                    <div className="card">
                    <div className="card-body">
                            <div className="row">
                            <div className="col">
                                <button className="btn btn-info pull-right" onClick={() => {
                                    setCurrentRule({
                                        ID: 0,
                                        Field: '',
                                        RegexPattern: '',
                                        FilePattern: '',
                                        Severity: 0,
                                        Text: '',
                                        ReverseRule: false,
                                        SQLQuery: '',
                                        AdditionalFieldID: null
                                    });
                                    setEditModal(true);
                                }} >
                                        Add Rule
                                    </button>
                                </div>
                        </div>
                        <Table<MiMD.IDiagnosticRules>
                            TableClass="table table-hover"
                            Data={rules}
                            KeySelector={(item) => item.ID.toString()}
                            SortKey={sortField}
                            Ascending={ascending}
                            TheadStyle={{ fontSize: 'smaller', tableLayout: 'fixed', display: 'table', width: '100%' }}
                            TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                            RowStyle={{ display: 'table', tableLayout: 'fixed', width: '100%' }}
                            TableStyle={{
                                padding: 0, width: 'calc(100%)', height: '100%',
                                tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 0
                            }}
                            OnSort={(d) => {
                                if (d.colKey == sortField) {
                                    setAscending(!ascending);
                                }
                                else {
                                    setSortField(d.colKey as keyof MiMD.IDiagnosticRules);
                                    setAscending(true);
                                }
                            }}
                        >
                            <Column<MiMD.IDiagnosticRules>
                                Key={"FilePattern"}
                                Field={"FilePattern"}
                                AllowSort={true}
                            >
                                File Pattern
                            </Column>
                            <Column<MiMD.IDiagnosticRules>
                                Key={"Field"}
                                Field={"Field"}
                                AllowSort={true}
                            >
                                Field
                            </Column>
                            <Column<MiMD.IDiagnosticRules>
                                Key={"Text"}
                                Field={"Text"}
                                AllowSort={true}
                            >
                                Description
                            </Column>
                            <Column<MiMD.IDiagnosticRules>
                                Key={"RegexPattern"}
                                Field={"RegexPattern"}
                                AllowSort={true}
                            >
                                Regex Condition
                            </Column>
                            <Column<MiMD.IDiagnosticRules>
                                Key={"SQLQuery"}
                                Field={"SQLQuery"}
                                AllowSort={true}
                            >
                                SQL Condition
                            </Column>
                            <Column<MiMD.IDiagnosticRules>
                                Key={"Buttons"}
                                AllowSort={false}
                                HeaderStyle={{ display: 'none' }}
                                RowStyle={{ width: '130px' }}
                                Content={({ item }) => <>
                                    <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => handleEdit(item)}>
                                        {Pencil}
                                    </button>
                                    <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => handleDelete(item)}>
                                        {TrashCan}
                                    </button>
                                </> }
                            >
                            </Column>
                        </Table>
                            <Warning Title={'Delete Alarm Configuration'}
                            CallBack={(confirmed) => {
                                if (confirmed) {
                                    deleteRule(currentRule);
                                }
                                setDeleteWarning(false);
                            }}
                                Show={deleteWarning}
                                Message={'This will permanently delete this Alarm Configuration. Please confirm that this is desired. This action can not be undone.'}
                            />

                        </div>
                    </div>
            </Modal>
            <Modal
                Title={"Rule Configuration"}
                CallBack={(confirmed, isButton) => {
                    if (isButton && confirmed) {
                        updateRule(currentRule);
                    }
                    setEditModal(false);
                }}
                Show={editModal}
                ShowX={true}
                ConfirmBtnClass={"btn-primary pull-left"}
                Size={"lg"}
                ShowCancel={false}
                DisableConfirm={!validReg}
                ConfirmShowToolTip={!validReg}
                ConfirmToolTipContent={<p> {CrossMark} Regex Pattern must be valid</p>}
            >
                <div className="row">
                    <div className="col">
                        <Select<MiMD.IDiagnosticRules> Record={currentRule} Field={'FilePattern'} Options={typeOptions} Disabled={false} Label={'Type'} Setter={(rule) => setCurrentRule(rule)} />
                    </div>
                    <div className="col">
                        <Input<MiMD.IDiagnosticRules> Record={currentRule} Field={'Field'} Disabled={false} Label={'Field'} Setter={(rule) => setCurrentRule(rule)} Valid={() => true}
                            Help={"Leave blank to apply rule to all lines in the file."} />
                    </div>
                </div>                
                <div className="row">
                    <div className="col">
                        <Input<MiMD.IDiagnosticRules> Record={currentRule} Field={'Text'} Disabled={false} Label={'Name'} Setter={(rule) => setCurrentRule(rule)} Valid={() => true} />
                    </div>
                    <div className="col">
                        <Input<MiMD.IDiagnosticRules> Record={currentRule} Field={'Severity'}
                            Disabled={false} Label={'Alarm Severity'} Setter={(rule) => setCurrentRule(rule)} Type={'integer'}
                            Valid={() => true}
                            Help={'Higher severity rules are given priority when multiple alarms are triggered.'}
                        />
                  </div>
                </div>  
                <div className="row">
                    <div className="col">
                        <Input<MiMD.IDiagnosticRules> Record={currentRule} Field={'RegexPattern'} Disabled={false} Label={'Regex Condition'} Setter={(rule) => setCurrentRule(rule)} Valid={() => IsRegex(currentRule.RegexPattern)} //NOTE: there could possibly be cases where the regex pattern is considered invalid in JavaScript but valid in C# and vise versa since the regex engines aren't the same
                            Feedback={"The Expression must be a valid Regex Pattern"}
                            Help={'A Regex-formatted string indicating the value to be matched in the diagnostic file. For example, ".*Battery Low.*" will match the term "Battery Low".'}
                        />
                    </div>
                    <div className="col">
                        <CheckBox<MiMD.IDiagnosticRules> Help={"By default, an alarm is raised when the Regex Condition is *not* matched. Check to raise the alarm when the Regex Condition is matched."} Record={currentRule} Field={"ReverseRule"}
                            Setter={(rule) => setCurrentRule(rule)} Label={"Reverse Rule"} Disabled={false} />
                    </div>
                </div>  
                <div className="row">
                    <div className="col">
                        <CheckBox<any> Record={{ value: showAdvanced }} Field={"value"} Setter={(r) => setShowAdvanced(r?.value ?? false)} Label={'Show Advanced Options'} />
                    </div>
                    <div className="col">
                        <Select<MiMD.IDiagnosticRules> Record={currentRule} Field={'AdditionalFieldID'} Disabled={false}
                            Label={'Additional Field'} Setter={(rule) => setCurrentRule(rule)}
                            Help={'A selected Additional Field\'s value will indicate whether the alarm was triggered on the last file processed. The value is Boolean (0 or 1).'}
                            EmptyOption={true}
                            EmptyLabel={'None'}
                            Options={additionalFieldIDs} />
                    </div>
                </div>
                {showAdvanced ? < div className="row">
                    <div className="col">
                        <TextArea<MiMD.IDiagnosticRules> Help={"SQL query that returns 1 or 0 to indicate whether the alarm is raised."}
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
                    </div>

                </div> : null}         
            </Modal>

            
        </>
    );
}

export default DiagnosticFileRules;
