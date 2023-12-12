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
import Table from '@gpa-gemstone/react-table';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { MiMD } from '../global';

const DiagnosticFiles = (props: { MeterID: number }) => {
    const navigate = useNavigate();

    const [configFiles, setConfigFiles] = React.useState<Array<MiMD.IDiagnosticFile>>([]);
    const [sortField, setSortField] = React.useState<string>('MaxAlarmWriteTime');
    const [ascending, setAscending] = React.useState<boolean>(false);
    const [selectedFile, setFileName] = React.useState<string>('');


    React.useEffect(() => {
        if (isNaN(props.MeterID)) return;

        const handle1 = getConfigFiles();
        handle1.done((data) => setConfigFiles(data));

        return () => {
            if (handle1 != null && handle1.abort != undefined) handle1.abort();
        }
    }, [props.MeterID]);


    function getConfigFiles() {
        if (isNaN(props.MeterID))
            return null;
        return $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/DiagnosticFiles/${props.MeterID}/LastWrites/${sortField}/${ascending? 1 : 0}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

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
        setFileName(data.MaxAlarmFileName)
        navigate(`${homePath}Diagnostic/Meter/${data.MeterID}/File/${data.MaxChangeFileName}/Table/${data.MaxChangeTable}`, { state: {} });
    }

    if (isNaN(props.MeterID)) return null;
    return (
        <div className="card">
            <h4 className="card-header">Diagnostic Files:</h4>
            <div className="card-body">
                <Table<MiMD.IDiagnosticFile>

                    cols={[
                        { key: 'MaxChangeFileName', field: 'MaxChangeFileName', label: 'File', headerStyle: { width: '50%' }, rowStyle: { width: '50%' } },
                        
                        { key: 'MaxChangeWriteTime', label: 'Last Write Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => item.MaxChangeWriteTime == null ? '' : moment(item.MaxChangeWriteTime).format("MM/DD/YY HH:mm CT") },
                        {
                            key: 'MaxAlarmWriteTime', label: 'Last Alarm Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, fld, style) => {
                                const backgroundColor = getColor(item.MaxAlarmWriteTime);
                                const formattedDate = moment(item.MaxAlarmWriteTime).format("MM/DD/YY HH:mm CT");
                                return <span className="badge badge-pill badge-secondary" style={{ backgroundColor }}>{formattedDate}</span>;      

                            }
                        },
                        { key: 'Alarms', field: 'Alarms',  label: 'Alarms', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                    ]}

                    tableClass="table table-hover"
                    data={configFiles}
                    sortKey={sortField}
                    ascending={ascending}
                    onSort={(d) => {
                        if (d.colKey == sortField)
                            setAscending(!ascending);
                        else {
                            setAscending(d.colKey != 'MaxChangeFileName' && d.colKey != 'MaxAlarmWriteTime' && d.colKey != 'Alarms');
                            setSortField(d.colKey);
                        }

                    }}
                    onClick={(data) => handleSelect(data.row)}
                    theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    tbodyStyle={{ display: 'block', overflowY: 'scroll', width: '100%' }}
                    rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    selected={(item) => item.MaxChangeFileName == selectedFile}
                />
            </div>
        </div>
    );
}

export default DiagnosticFiles;

