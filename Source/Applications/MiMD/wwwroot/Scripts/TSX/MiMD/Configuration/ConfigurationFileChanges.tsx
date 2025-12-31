//******************************************************************************************************
//  ConfigurationFileChanges.tsx - Gbtc
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
import { MiMD } from '../global';
import { Modal } from '@gpa-gemstone/react-interactive';
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks';
import { ConfigurationColorSlice } from "../Store/Store"

const ConfigurationFileChanges = (props: { MeterID: number }) => {
    const { FileName, meterID } = useParams();
    const [configFiles, setConfigFiles] = React.useState<Array<MiMD.IConfigFile>>([]);
    const [sortField, setSortField] = React.useState<keyof MiMD.IConfigFile>('LastWriteTime');
    const [ascending, setAscending] = React.useState<boolean>(false);
    const [html, setHtml] = React.useState<string>('');
    const [flag, setFlag] = React.useState<boolean>(false);
    const [page, setPage] = React.useState<number>(0);
    const [allPages, setAllPages] = React.useState<number>(0);
    const [showDetails, setShowDetails] = React.useState<boolean>(false);
    const dispatch = useAppDispatch();
    const colors = useAppSelector(ConfigurationColorSlice.Data);
    const colorStatus = useAppSelector(ConfigurationColorSlice.Status);

    React.useEffect(() => {
        setPage(0);
    }, [props.MeterID, FileName]);

    React.useEffect(() => {
        if (colorStatus === 'uninitiated' || colorStatus === 'changed')
            dispatch(ConfigurationColorSlice.Fetch());
    }, [colorStatus]);

    React.useEffect(() => {
        if (isNaN(parseInt(meterID)) || FileName == undefined) return;

        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/ConfigurationFiles/${meterID}/${FileName}/${flag}/${sortField}/${ascending ? 1 : 0}/${page}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((result) => {
            setConfigFiles(JSON.parse(result.Data as unknown as string));
            setAllPages(result.NumberOfPages);
        });

        return () => {
            if (handle.abort != undefined) handle.abort();
        }
    }, [meterID, FileName, flag, ascending, sortField, page]);

    function getBackgroundColor(date: string, valid: boolean, key?: string) {
        const mom = moment(date);
        const now = moment();
        const days = now.diff(mom, 'days');

        if (key) {
            if (colors.length > 0) {
                for (const color of colors) {
                    if (days < color.Threshold) {
                        return color.Color;
                    }
                }
            }
        }

        if (valid === false)
            return 'red';
        else
            return null;
    }

    if (isNaN(props.MeterID) || FileName == undefined) return null;

    return (
    <>
        <div className="container-fluid d-flex flex-column p-0" style={{ maxHeight: "75%" }}>
            <div className="card" style={{ flex: 1, overflow: 'hidden', flexDirection: 'column' }}>
                <div className="card-header">
                    <div className="row">
                      <h4 className="col" style={{ fontSize: '24px' }}>{FileName} History:</h4>
                        <div className="col">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" style={{ zIndex: 1 }} onChange={() => setFlag(!flag)} value={flag ? 'on' : 'off'} checked={flag ? true : false} />
                                <label className="form-check-label" >Show Files w/o Changes</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ flex: 1, overflow: 'hidden', marginLeft: '0px' }}>
                    <Table<MiMD.IConfigFile>
                        TableClass="table table-hover"
                        Data={configFiles}
                        SortKey={sortField}
                        Ascending={ascending}
                        OnSort={(d) => {
                            if (d.colKey == 'FileName' || d.colKey == 'Text')
                                return;
                            if (d.colKey == sortField)
                                setAscending(!ascending);
                            else {
                                setAscending(d.colKey != 'LastWriteTime');
                                setSortField(d.colKey as keyof (MiMD.IConfigFile));
                            }

                        }}
                        OnClick={() => { }}
                        TableStyle={{ padding: 0, height: '100%', width: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        TheadStyle={{ fontSize: 'smaller', tableLayout: 'fixed', display: 'table', width: '100%' }}
                        TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                        RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        KeySelector={item => item.ID}
                        Selected={() => false}>
                            <Column<MiMD.IConfigFile>
                                Key="LastWriteTime"
                                Field="LastWriteTime"
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                                Content={(row) => {
                                    const backgroundColor = getBackgroundColor(row.item.LastWriteTime, row.item.ValidChange, row.key);
                                    const formattedDate = moment(row.item.LastWriteTime).format("MM/DD/YY HH:mm CT");
                                    return <span className="badge badge-pill badge-secondary" style={{ backgroundColor }}>{formattedDate}</span>;
                                }}
                            > Last Write Time
                            </Column>
                            <Column<MiMD.IConfigFile>
                                Key="Changes"
                                Field="Changes"
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                                Content={(row) => {
                                    row.style['backgroundColor'] = getBackgroundColor(row.item.LastWriteTime, row.item.ValidChange);
                                    return row.item.Changes;
                                }}
                                > # of Changes
                            </Column>
                            <Column<MiMD.IConfigFile>
                                Key="FileName"
                                Field="FileName"
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                                Content={(row) => {
                                    row.style['backgroundColor'] = getBackgroundColor(row.item.LastWriteTime, row.item.ValidChange);
                                    return <button className="btn btn-sm" onClick={() => { setShowDetails(true); setHtml(`<p>${row.item.Text.replace(/\n/g, '<br>')}</p>`) }}><span><i className="fa fa-file"></i></span></button>
                                }}
                            > File
                            </Column>
                            <Column<MiMD.IConfigFile>
                                Key="Text"
                                Field="Text"
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                                Content={(row) => {
                                    row.style['backgroundColor'] = getBackgroundColor(row.item.LastWriteTime, row.item.ValidChange);
                                    return <button className="btn btn-sm" onClick={() => { setShowDetails(true); setHtml(row.item.Html.replace(/&para;/g, '')); }}><span><i className="fa fa-eye"></i></span></button>
                                }}
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
        </div>
        <Modal Title={FileName} CallBack={() => { setShowDetails(false) }} Size={'xlg'} Show={showDetails} ShowCancel={false} ConfirmBtnClass={'btn-danger'} ConfirmText={'Close'} ShowX={true}>
            <div className="well" style={{ backgroundColor: 'lightgrey', fontSize: 18, maxHeight: window.innerHeight - 250, overflowY: 'scroll' }} dangerouslySetInnerHTML={{ __html: html }}></div>
        </Modal>
    </>);
}

export default ConfigurationFileChanges;
