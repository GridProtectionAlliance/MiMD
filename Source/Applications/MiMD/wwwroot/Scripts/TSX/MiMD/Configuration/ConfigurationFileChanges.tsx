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

import Table from '@gpa-gemstone/react-table';
import { Paging } from '@gpa-gemstone/react-table';
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
        if (colorStatus === 'unintiated' || colorStatus === 'changed')
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
                <Table<MiMD.IConfigFile>
                    cols={[
                        {
                            key: 'LastWriteTime', label: 'Last Write Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, fld, style) => {
                                const backgroundColor = getBackgroundColor(item.LastWriteTime, item.ValidChange, key);
                                const formattedDate = moment(item.LastWriteTime).format("MM/DD/YY HH:mm CT");
                                return <span className="badge badge-pill badge-secondary" style={{ backgroundColor }}>{formattedDate}</span>;
                            }
                        },
                        {
                            key: 'Changes', field: 'Changes', label: '# of Changes', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, fld, style) => {
                                style['backgroundColor'] = getBackgroundColor(item.LastWriteTime, item.ValidChange);
                                return item.Changes;
                            }
                        },
                        {
                            key: 'FileName', label: 'File', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' },
                            content: (item, key, fld, style) => {
                                style['backgroundColor'] = getBackgroundColor(item.LastWriteTime, item.ValidChange);
                                return <button className="btn btn-sm" onClick={() => { setShowDetails(true); setHtml(`<p>${item.Text.replace(/\n/g, '<br>')}</p>`) }}><span><i className="fa fa-file"></i></span></button>
                            }
                        },
                        {
                            key: 'Text', label: 'Diff', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' },
                            content: (item, key, fld, style) => {
                                style['backgroundColor'] = getBackgroundColor(item.LastWriteTime, item.ValidChange);
                                return <button className="btn btn-sm" onClick={() => { setShowDetails(true); setHtml(item.Html.replace(/&para;/g, '')); }}><span><i className="fa fa-eye"></i></span></button>
                            }
                        },
                    ]}
                    tableClass="table table-hover"
                    data={configFiles}
                    sortKey={sortField}
                    ascending={ascending}
                    onSort={(d) => {
                        if (d.colKey == 'FileName' || d.colKey == 'Text')
                            return;
                        if (d.colKey == sortField)
                            setAscending(!ascending);
                        else {
                            setAscending(d.colKey != 'LastWriteTime');
                            setSortField(d.colKey as keyof (MiMD.IConfigFile));
                        }

                    }}
                    onClick={() => { }}
                    tableStyle={{ padding: 0, width: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    theadStyle={{ fontSize: 'smaller', tableLayout: 'fixed', display: 'table', width: '100%' }}
                    tbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                    rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    selected={() => false}
                />
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
