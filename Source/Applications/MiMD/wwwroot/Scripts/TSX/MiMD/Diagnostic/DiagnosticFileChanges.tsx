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
import Table from '@gpa-gemstone/react-table';
import React from 'react';
import { MiMD } from '../global';

const DiagnosticFileChanges = (props: { MeterID: number, FileName: string, Table: string }) => {

    const [diagnosticfiles, setDiagnosticFiles] = React.useState<Array<MiMD.IDiagnosticFileChange>>([]);
    const [html, setHtml] = React.useState<string>('');
    const [flag, setFlag] = React.useState<boolean>(false);
    const [showDetails, setShowDetails] = React.useState<boolean>(false);

    const [sortField, setSortField] = React.useState<keyof MiMD.IDiagnosticFileChange>('LastWriteTime');
    const [ascending, setAscending] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (isNaN(props.MeterID) || props.FileName == undefined) return;

        const handle1 = getConfigFiles();
        handle1.done((data) => setDiagnosticFiles(data));

        return () => {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, [props.MeterID, props.FileName, flag, ascending, sortField]);


    function getConfigFiles() {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/DiagnosticFiles/${props.Table}/${props.MeterID}/${props.FileName}/${flag}/${sortField}/${ascending ? 1 : 0}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }


    if (isNaN(props.MeterID) || props.FileName == undefined) return null;
    return (
    <>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col">{props.FileName} History:</div>
                    <div className="col">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" style={{ zIndex: 1 }} onChange={() => setFlag(!flag)} value={flag ? 'on' : 'off'} checked={flag ? true : false} />
                            <label className="form-check-label" >Show Files w/o Alarms</label>
                        </div>
                    </div>
                </div>
            </div>
                <div className="card-body">
                    <Table<MiMD.IDiagnosticFileChange>
                        cols={[
                            { key: 'LastWriteTime', label: 'Last Write Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => moment(item.LastWriteTime).format("MM/DD/YY HH:mm CT") },
                            { key: 'Alarms', field: 'Alarms', label: 'Alarms', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            {
                                key: 'FileName', label: (props.Table == 'AppStatusFileChanges' ? 'File' : ''), headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => (props.Table == 'AppStatusFileChanges' ?
                                    <button className="btn btn-sm" onClick={() => { setShowDetails(true); setHtml(`<p>${item.Text.replace(/\n/g, '<br>')}</p>`) }}><span><i className="fa fa-file"></i></span></button> : null)
                            },
                            {
                                key: 'Difference', label: 'Diff', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <button className="btn btn-sm" onClick={() => { setShowDetails(true); setHtml(item.Html.replace(/&para;/g, '')); }}><span><i className="fa fa-eye"></i></span></button>
                            }
                        ]}
                        tableClass="table table-hover"
                        data={diagnosticfiles}
                        sortKey={sortField}
                        ascending={ascending}
                        onSort={(d) => {
                            if (d.colKey == 'Difference')
                                return;
                            if (d.colKey == sortField) 
                                setAscending(!ascending);
                            
                            else {
                                setAscending(d.colKey != 'LastWriteTime' && d.colKey != 'Alarms');
                                setSortField((d.colKey as keyof (MiMD.IDiagnosticFileChange)));
                            }
                        }}
                        onClick={() => { }}
                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }}
                        tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 500, width: '100%' }}
                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        selected={() => false}
                    />

               
                </div>
            </div>
            <Modal Title={props.FileName} CallBack={() => { setShowDetails(false) }} Size={'xlg'} Show={showDetails} ShowCancel={false} ConfirmBtnClass={'btn-danger'} ConfirmText={'Close'}>
                <div className="well" style={{ backgroundColor: 'lightgrey', fontSize: 18, maxHeight: window.innerHeight - 250, overflowY: 'scroll' }} dangerouslySetInnerHTML={{ __html: html }}></div>
            </Modal>

        </>

    );
}

export default DiagnosticFileChanges;
