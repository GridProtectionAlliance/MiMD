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
import { Paging, Table, Column } from '@gpa-gemstone/react-table';
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
    const [page, setPage] = React.useState<number>(0);
    const [allPages, setAllPages] = React.useState<number>(0);
    const dispatch = useAppDispatch();
    const colors = useAppSelector(ConfigurationColorSlice.Data);
    const colorStatus = useAppSelector(ConfigurationColorSlice.Status);

    React.useEffect(() => {
        if (colorStatus === 'uninitiated' || colorStatus === 'changed')
            dispatch(ConfigurationColorSlice.Fetch());
    }, [colorStatus]);

    React.useEffect(() => {
        setPage(0);
    }, [props.MeterID]);

    React.useEffect(() => {
        if (isNaN(props.MeterID)) return;

        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/ConfigurationFiles/${props.MeterID}/LastWrites/${sortField}/${ascending ? 1 : 0}/${page}`,
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
    }, [props.MeterID, ascending, sortField, page]);

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
        <div className="container-fluid d-flex flex-column p-0" style={{ maxHeight: "75%" }}>
            <div className="card" style={{ flex: 1, overflow: 'hidden', flexDirection: 'column' }}>
                <h4 className="card-header" style={{ fontSize: '24px' }}>Configuration Files:</h4>
                <div className="row" style={{ flex: 1, overflow: 'hidden', marginLeft: '0px' }}>
                    <Table<MiMD.IConfigFile>
                        TableClass="table table-hover"
                        Data={configFiles}
                        SortKey={sortField}
                        Ascending={ascending}
                        OnSort={(d) => {
                            if (d.colKey == sortField)
                                setAscending(!ascending);
                            else {
                                setAscending(d.colKey != 'LastWriteTime');
                                setSortField(d.colKey as keyof (MiMD.IConfigFile));
                            }

                        }}
                        OnClick={(data) => handleSelect(data.row)}
                        TableStyle={{ padding: 0, height: '100%', width: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        TheadStyle={{ fontSize: 'smaller', tableLayout: 'fixed', display: 'table', width: '100%' }}
                        TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                        RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        Selected={(item) => item.FileName == selectedFile}
                        KeySelector={item => item.ID}
                    >
                        <Column<MiMD.IConfigFile>
                            Key="FileName"
                            Field="FileName"
                            HeaderStyle={{ width: '50%' }}
                            RowStyle={{ width: '50%' }}
                        > File
                        </Column>
                        <Column<MiMD.IConfigFile>
                            Key="LastWriteTime"
                            Field="LastWriteTime"
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            Content={(row) => {
                                const backgroundColor = getBackgroundColor(row.item.LastWriteTime);
                                const formattedDate = moment(row.item.LastWriteTime).format("MM/DD/YY HH:mm CT")
                                return <span className="badge badge-pill badge-secondary" style={{ backgroundColor }}>{formattedDate}</span>;  
                            }}
                        > Last Write Time
                        </Column>
                        <Column<MiMD.IConfigFile>
                            Key="Changes"
                            Field="Changes"
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                        > # of Changes
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

export default ConfigurationFiles;

