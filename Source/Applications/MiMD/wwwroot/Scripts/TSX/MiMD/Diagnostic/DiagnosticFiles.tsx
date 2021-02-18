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
import { useHistory } from "react-router-dom";
import { MiMD } from '../global';

const DiagnosticFiles = (props: { MeterID: number, FileName: string }) => {
    let history = useHistory();

    const [configFiles, setConfigFiles] = React.useState<Array<MiMD.IDiagnosticFile>>([]);
    const [sortField, setSortField] = React.useState<string>('DateLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);


    React.useEffect(() => {
        if (isNaN(props.MeterID)) return;

        let handle1 = getConfigFiles();
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
        let mom = moment(date);
        let now = moment();
        let days = now.diff(mom, 'days');

        if (days < 1)
           return 'red';
        else if (days < 7)
            return 'orange';
        else if (days < 30)
            return 'yellow';
        else
            return null;
    }

    function handleSelect(obj, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: `?name=Diagnostic&MeterID=${props.MeterID}&FileName=${obj.MaxChangeFileName}&Table=${obj.MaxChangeTable}`, state: {} })
    }

    if (isNaN(props.MeterID)) return null;
    return (
        <div className="card">
            <div className="card-header">Diagnostic Files:</div>
            <div className="card-body">
                <Table<MiMD.IDiagnosticFile>

                    cols={[
                        { key: 'MaxChangeFileName', label: 'File', headerStyle: { width: '50%' }, rowStyle: { width: '50%' } },
                        
                        { key: 'MaxChangeWriteTime', label: 'Last Write Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => item.MaxChangeWriteTime == null ? '' : moment(item.MaxChangeWriteTime).format("MM/DD/YY HH:mm CT") },
                        {
                            key: 'MaxAlarmWriteTime', label: 'Last Alarm Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => {
                                style['backgroundColor'] = getColor(item.MaxAlarmWriteTime);
                                return (item.MaxAlarmWriteTime == null ? '' : (moment(item.MaxAlarmWriteTime).format("MM/DD/YY HH:mm CT")) )
                            }
                        },
                        { key: 'Alarms', label: 'Alarms', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                    ]}

                    tableClass="table table-hover"
                    data={configFiles}
                    sortField={sortField}
                    ascending={ascending}
                    onSort={(d) => {
                        if (d.col == sortField)
                            setAscending(!ascending);
                        else {
                            setAscending(d.col != 'MaxChangeFileName' && d.col != 'MaxAlarmWriteTime' && d.col != 'Alarms');
                            setSortField(d.col);
                        }

                    }}
                    onClick={(data, evt) => handleSelect(data.row, evt)}
                    theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }}
                    rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    selected={(item) => item.MaxChangeFileName == props.FileName}
                />

               
            </div>
        </div>
    );
}

export default DiagnosticFiles;

