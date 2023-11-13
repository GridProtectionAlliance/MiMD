//******************************************************************************************************
//  ConfigurationFiles.tsx - Gbtc
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
import { useAppDispatch, useAppSelector } from '../hooks';
import { ConfigurationColorSlice } from "../Store/Store"


const ConfigurationFiles = (props: { MeterID: number }) => {
    const navigate = useNavigate();

    const [configFiles, setConfigFiles] = React.useState<Array<MiMD.IConfigFile>>([]);
    const [sortField, setSortField] = React.useState<keyof MiMD.IConfigFile>('LastWriteTime');
    const [ascending, setAscending] = React.useState<boolean>(false);
    const [selectedFile, setFileName] = React.useState<string>('');
    const dispatch = useAppDispatch();
    const colors = useAppSelector(ConfigurationColorSlice.Data);

    React.useEffect(() => {
        dispatch(ConfigurationColorSlice.Fetch());
    }, [dispatch]);

    React.useEffect(() => {
        if (isNaN(props.MeterID)) return;

        const handle1 = getConfigFiles();
        handle1.done((data) => setConfigFiles(data));

        return () => {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, [props.MeterID, ascending, sortField]);


    function getConfigFiles() {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/ConfigurationFiles/${props.MeterID}/LastWrites/${sortField}/${ascending ? 1 : 0}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function getBackgroundColor(date: string) {
        const mom = moment(date);
        const now = moment();
        const days = now.diff(mom, 'days');

        if (colors.length > 0) {
            for (const color of colors) {
                if (days < color.Threshold) {
                    return color.Color;
                }
            }
        }
        else {return null;}
    }

    function handleSelect(data: MiMD.IConfigFile) {
        setFileName(data.FileName);
        navigate(`${homePath}Configuration/Meter/${data.MeterID}/File/${data.FileName}`, { state: {} });
    }

    if (isNaN(props.MeterID)) return null;
    return (
        <div className="card">
            <h4 className="card-header" style={{ fontSize: '24px' }}>Configuration Files:</h4>
            <div className="card-body">
                <Table<MiMD.IConfigFile>
                    cols={[
                        { key: 'FileName',field: 'FileName', label: 'File', headerStyle: { width: '50%' }, rowStyle: { width: '50%' } },
                        {
                            key: 'LastWriteTime', label: 'Last Write Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, fld, style) => {
                                const backgroundColor = getBackgroundColor(item.LastWriteTime);
                                const formattedDate = moment(item.LastWriteTime).format("MM/DD/YY HH:mm CT")
                                return <span className="badge badge-pill badge-secondary" style={{ backgroundColor }}>{formattedDate}</span>;                               
                            }
                            },
                        { key: 'Changes', field: 'Changes', label: '# of Changes', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                    ]}

                    tableClass="table table-hover"
                    data={configFiles}
                    sortKey={sortField}
                    ascending={ascending}
                    onSort={(d) => {
                        if (d.colKey == sortField)
                            setAscending(!ascending);
                        else {
                            setAscending(d.colKey != 'LastWriteTime');
                            setSortField(d.colKey as keyof (MiMD.IConfigFile));
                        }

                    }}
                    onClick={(data) => handleSelect(data.row)}
                    theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }}
                    rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    selected={(item) => item.FileName == selectedFile}
                />
            </div>
        </div>
    );
}

export default ConfigurationFiles;

