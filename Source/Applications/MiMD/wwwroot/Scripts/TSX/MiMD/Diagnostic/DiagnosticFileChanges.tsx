//******************************************************************************************************
//  DiagnosticFileChanges.tsx - Gbtc
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

import { Modal } from '@gpa-gemstone/react-interactive';
import { Paging, Table, Column } from '@gpa-gemstone/react-table';
import React from 'react';
import { MiMD } from '../global';
import { useParams } from 'react-router-dom'

const DiagnosticFileChanges = (props: { MeterID: number, Table: string }) => {
    const { meterID, FileName, TableName } = useParams();
    const [diagnosticfiles, setDiagnosticFiles] = React.useState<Array<MiMD.IDiagnosticFileChange>>([]);
    const [html, setHtml] = React.useState<string>('');
    const [flag, setFlag] = React.useState<boolean>(false);
    const [showDetails, setShowDetails] = React.useState<boolean>(false);

    const [sortField, setSortField] = React.useState<keyof MiMD.IDiagnosticFileChange>('LastWriteTime');
    const [ascending, setAscending] = React.useState<boolean>(false);
    const [page, setPage] = React.useState<number>(0);
    const [allPages, setAllPages] = React.useState<number>(0);

    React.useEffect(() => {
        setPage(0);
    }, [props.MeterID, FileName]);

    React.useEffect(() => {
        if (isNaN(props.MeterID) || FileName == undefined) return;

        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/DiagnosticFiles/${TableName}/${meterID}/${FileName}/${flag}/${sortField}/${ascending ? 1 : 0}/${page}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((result) => {
            setDiagnosticFiles(JSON.parse(result.Data as unknown as string));
            setAllPages(result.NumberOfPages);
        });

        return () => {
            if (handle != null && handle.abort != undefined) handle.abort();
        }
    }, [page, flag, ascending, sortField, props.MeterID, FileName]);


    if (isNaN(props.MeterID) || FileName == undefined) return null;
    return (
        <div className="container-fluid d-flex flex-column p-0" style={{ maxHeight: "75%" }}>
            <div className="card" style={{ flex: 1, overflow: 'hidden', flexDirection: 'column' }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h4>{FileName} History:</h4>
                        </div>
                        <div className="col">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" style={{ zIndex: 1 }} onChange={() => setFlag(!flag)} checked={flag} />
                                <label className="form-check-label" >Show Files w/o Alarms</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ flex: 1, overflow: 'hidden', marginLeft: '0px' }}>
                    <Table<MiMD.IDiagnosticFileChange>
                        TableClass="table table-hover"
                        Data={diagnosticfiles}
                        SortKey={sortField}
                        Ascending={ascending}
                        OnSort={(d) => {
                            if (d.colKey == 'Difference')
                                return;
                            if (d.colKey == sortField)
                                setAscending(!ascending);

                            else {
                                setAscending(d.colKey != 'LastWriteTime' && d.colKey != 'Alarms');
                                setSortField((d.colKey as keyof (MiMD.IDiagnosticFileChange)));
                            }
                        }}
                        OnClick={() => { }}
                        TableStyle={{ padding: 0, height: '100%', width: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        TheadStyle={{ fontSize: 'smaller', tableLayout: 'fixed', display: 'table', width: '100%' }}
                        TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                        RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        Selected={() => false}
                        KeySelector={item => item.FileName}
                    >
                        <Column<MiMD.IDiagnosticFileChange>
                            Key="LastWriteTime"
                            Field="LastWriteTime"
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            AllowSort={true}
                            Content={row => moment(row.item.LastWriteTime).format("MM/DD/YY HH:mm CT")}
                        > Last Write Time
                        </Column>
                        <Column<MiMD.IDiagnosticFileChange>
                            Key="Alarms"
                            Field="Alarms"
                            HeaderStyle={{ width: '30%' }}
                            RowStyle={{ width: '30%' }}
                            AllowSort={true}
                            Content={({ item, key }) => {
                                if (item[key] == null || item[key] == '') return '0';
                                return item[key];
                            }}
                        > Alarms
                        </Column>
                        <Column<MiMD.IDiagnosticFileChange>
                            Key="FileName"
                            Field="FileName"
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            AllowSort={true}
                            Content={row => (TableName == 'AppStatusFileChanges' ?
                                <button className="btn btn-sm" onClick={() => { setShowDetails(true); setHtml(`<p>${row.item.Text.replace(/\n/g, '<br>')}</p>`) }}>
                                    <span><i className="fa fa-file"></i></span>
                                </button> : null)}
                        > {(TableName == 'AppStatusFileChanges' ? 'File' : '')}
                        </Column>
                        <Column<MiMD.IDiagnosticFileChange>
                            Key="Difference"
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            AllowSort={false}
                            Content={row => (
                                <button className="btn btn-sm" onClick={() => { setShowDetails(true); setHtml(row.item.Html.replace(/&para;/g, '')); }}>
                                    <span><i className="fa fa-eye"></i></span>
                                </button>)}
                        > Diff
                        </Column>
                    </Table>
                </div>
                <div className="row">
                    <div className="col">
                        <Paging Current={page + 1} Total={allPages} SetPage={(p) => setPage(p - 1)} />
                    </div>
                </div>
            </div>
            <Modal Title={FileName} CallBack={() => { setShowDetails(false) }} Size={'xlg'} ShowX={true} Show={showDetails} ShowCancel={false}
                ConfirmBtnClass={'btn-primary'}
                ConfirmText={'Close'}>
                <div className="well" style={{ backgroundColor: 'lightgrey', fontSize: 18, maxHeight: window.innerHeight - 250, overflowY: 'scroll' }} dangerouslySetInnerHTML={{ __html: html }}></div>
            </Modal>
        </div>
    );
}

export default DiagnosticFileChanges;
