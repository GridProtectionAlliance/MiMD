//******************************************************************************************************
//  MeterChangePan.tsx - Gbtc
//
//  Copyright © 2019, Grid Protection Alliance.  All Rights Reserved.
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
//  09/04/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { Table, Column } from "@gpa-gemstone/react-table";
import { Paging } from '@gpa-gemstone/react-table';
import { useNavigate } from "react-router-dom";
import * as PRC002 from '../ComplianceModels';
import { GenericController } from '@gpa-gemstone/react-interactive';

declare let homePath: string;

const PRC0002Controller = new GenericController<PRC002.IRecord>(`${homePath}api/MiMD/PRC002/ComplianceRecord`, "Status", false);

interface IProps { MeterId: number, StateList: Array<PRC002.IStatus> }

const RecordList = (props: IProps) => {
    const navigate = useNavigate();

    const [changeList, setChangeList] = React.useState<Array<PRC002.IRecord>>([]);
    const [recordSort, setRecordSort] = React.useState<keyof PRC002.IRecord>("Status");
    const [recordAsc, setRecordAsc] = React.useState<boolean>(false);
    const [page, setPage] = React.useState<number>(0);
    const [allPages, setAllPages] = React.useState<number>(0);

    React.useEffect(() => {
        setPage(0);
    }, [props.MeterId]);

    React.useEffect(() => {
        if (props.MeterId == -1) return;

        const handle = PRC0002Controller.PagedSearch([], recordSort, recordAsc, page, props.MeterId);

        handle.done((result) => {
            setChangeList(JSON.parse(result.Data as unknown as string));
            setAllPages(result.NumberOfPages);
        });

        return () => {
            if (handle != null && handle.abort != null) handle.abort();
        }
    }, [recordSort, recordAsc, page, props.MeterId]);

    function handleSelect(item: PRC002.IRecord) {
        navigate(`${homePath}PRC002Change/Record/${item.ID}`);
    }

    return (
        <>
            {(props.MeterId > -1 ?
                <div className="container-fluid d-flex flex-column p-0 h-100">
                    <div className="row" style={{ flex: 1, overflow: 'hidden', marginLeft: '0px' }}>
                        <Table<PRC002.IRecord>
                            TableClass="table table-hover"
                            Data={changeList}
                            SortKey={recordSort}
                            Ascending={recordAsc}
                            OnSort={(d) => {
                                if (d.colKey == recordSort)
                                    setRecordAsc(!recordAsc);
                                else {
                                    setRecordSort(d.colField);
                                    setRecordAsc(d.colField == 'User');
                                }
                            }
                            }
                            OnClick={(d) => handleSelect(d.row)}
                            TableStyle={{ padding: 0, height: '100%', width: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            TheadStyle={{ fontSize: 'smaller', tableLayout: 'fixed', display: 'table', width: '100%' }}
                            TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            Selected={() => false}
                            KeySelector={item => item.ID}
                        >
                            <Column<PRC002.IRecord>
                                Key="Status"
                                Field="Status"
                                AllowSort={true}
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                                Content={row => {
                                    const stat = props.StateList.find(s => s.ID === row.item.Status);

                                    return <div style={{
                                        fontWeight: 600,
                                        width: '90%',
                                        height: '35px',
                                        background: (stat == undefined ? '#f8f9fa' : stat.Color),
                                        border: '2px solid',
                                        borderRadius: '5px',
                                        textAlign: 'center',
                                        lineHeight: '35px',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        color: (stat == undefined ? '#212529' : stat.TextColor),
                                    }}> {(stat == undefined ? '' : stat.Description)} </div>
                                }}
                            > Status
                            </Column>
                            <Column<PRC002.IRecord>
                                Key="Timestamp"
                                Field="Timestamp"
                                AllowSort={true}
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                                Content={row => moment(row.item.Timestamp).format("MM/DD/YY HH:mm CT")}
                            > Last Updated
                            </Column>
                            <Column<PRC002.IRecord>
                                Key="User"
                                Field="User"
                                AllowSort={true}
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                            > By
                            </Column>
                        </Table>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Paging Current={page + 1} Total={allPages} SetPage={(p) => setPage(p - 1)} />
                        </div>
                    </div>
                </div>
            : null)}
        </>
    )
}

export default RecordList;

