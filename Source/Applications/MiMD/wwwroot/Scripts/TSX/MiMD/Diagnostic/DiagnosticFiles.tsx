//******************************************************************************************************
//  DiagnosticFiles.tsx - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  05/18/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import { Paging, Table, Column } from '@gpa-gemstone/react-table';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { MiMD } from '../global';

const DiagnosticFiles = (props: { MeterID: number }) => {
    const navigate = useNavigate();

    const [configFiles, setConfigFiles] = React.useState<Array<MiMD.IDiagnosticFile>>([]);
    const [sortField, setSortField] = React.useState<string>('MaxAlarmWriteTime');
    const [ascending, setAscending] = React.useState<boolean>(false);
    const [selectedFile, setFileName] = React.useState<string>('');
    const [page, setPage] = React.useState<number>(0);
    const [allPages, setAllPages] = React.useState<number>(0);

    React.useEffect(() => {
        setPage(0);
    }, [props.MeterID]);

    React.useEffect(() => {
        if (isNaN(props.MeterID)) return;
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/DiagnosticFiles/${props.MeterID}/LastWrites/${sortField}/${ascending ? 1 : 0}/${page}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((result) => {
            setConfigFiles(JSON.parse(result.Data as unknown as string));
            setAllPages(result.NumberOfPages);
        });

        return () => {
            if (handle != null && handle.abort != undefined) handle.abort();
        }

    }, [page, sortField, ascending, props.MeterID]);

    function getColor(date: string) {
        const mom = moment(date);
        const now = moment();
        const days = now.diff(mom, 'days');

        if (days < 1)
           return 'red';
        else if (days < 7)
            return 'orange';
        else if (days < 30)
            return 'yellow';
        else
            return null;
    }

    function handleSelect(data: MiMD.IDiagnosticFile) {
        setFileName(data.MaxChangeFileName)
        navigate(`${homePath}Diagnostic/Meter/${data.MeterID}/File/${data.MaxChangeFileName}/Table/${data.MaxChangeTable}`, { state: {} });
    }

    if (isNaN(props.MeterID)) return null;
    return (
        <div className="container-fluid d-flex flex-column p-0" style={{maxHeight: "75%"}}>
            <div className="card" style={{ flex: 1, overflow: 'hidden', flexDirection: 'column' }}>
                <h4 className="card-header">Diagnostic Files:</h4>
                <div className="row" style={{ flex: 1, overflow: 'hidden', marginLeft: '0px' }}>
                    <Table<MiMD.IDiagnosticFile>
                        TableClass="table table-hover"
                        Data={configFiles}
                        SortKey={sortField}
                        Ascending={ascending}
                        OnSort={(d) => {
                            if (d.colKey == sortField)
                                setAscending(!ascending);
                            else {
                                setAscending(false);
                                setSortField(d.colKey);
                            }
                        }}
                        OnClick={(data) => handleSelect(data.row)}
                        TableStyle={{ padding: 0, height: '100%', width: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        TheadStyle={{ fontSize: 'smaller', tableLayout: 'fixed', display: 'table', width: '100%' }}
                        TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                        RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        Selected={(item) => item.MaxChangeFileName == selectedFile}
                        KeySelector={item => item.MaxChangeFileName}
                    >
                        <Column<MiMD.IDiagnosticFile>
                            Key="MaxChangeFileName"
                            Field="MaxChangeFileName"
                            HeaderStyle={{ width: '30%' }}
                            RowStyle={{ width: '30%' }}
                            AllowSort={true}
                        > File
                        </Column>
                        <Column<MiMD.IDiagnosticFile>
                            Key="MaxChangeWriteTime"
                            Field="MaxChangeWriteTime"
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            AllowSort={true}
                            Content={row => row.item.MaxChangeWriteTime == null ? '' : moment(row.item.MaxChangeWriteTime).format("MM/DD/YY HH:mm CT") }
                        > Last Write Time
                        </Column>
                        <Column<MiMD.IDiagnosticFile>
                            Key="MaxAlarmWriteTime"
                            Field="MaxAlarmWriteTime"
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            AllowSort={true}
                            Content={row => {
                                const backgroundColor = getColor(row.item.MaxAlarmWriteTime);
                                const formattedDate = moment(row.item.MaxAlarmWriteTime).format("MM/DD/YY HH:mm CT");
                                if (formattedDate == "Invalid date" || formattedDate == 'null' || formattedDate.trim() == '') return 'N/A';
                                return <span className="badge badge-pill badge-secondary" style={{ backgroundColor }}>{formattedDate}</span>;  
                            }}
                        > Last Alarm Time
                        </Column>
                        <Column<MiMD.IDiagnosticFile>
                            Key="Alarms"
                            Field="Alarms"
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            AllowSort={true}
                            Content={({ item, key }) => {
                                if (item[key] == null || item[key] == '') return '0';
                                return item[key];
                            }}
                        > Alarms
                        </Column>
                    </Table>
                </div>
                <div className="row">
                    <div className="col">
                        <Paging Current={page + 1} Total={allPages} SetPage={(p) => setPage(p - 1)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiagnosticFiles;

