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
import Table from '@gpa-gemstone/react-table';
import * as _ from 'lodash';
import { useNavigate } from "react-router-dom";


declare let homePath: string;

interface IProps { MeterId: number, StateList: Array<PRC002.IStatus> }

const RecordList = (props: IProps) => {
    const navigate = useNavigate();

    const [changeList, setChangeList] = React.useState<Array<PRC002.IRecord>>([]);
    const [recordSort, setRecordSort] = React.useState<string>("Status");
    const [recordAsc, setRecordAsc] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleRecordList = getRecords();

        return () => {
            if (handleRecordList != null && handleRecordList.abort != null) handleRecordList.abort();
        }
    }, [props.MeterId]);

    function getRecords(): JQuery.jqXHR<Array<PRC002.IRecord>> {
        if (props.MeterId == -1) return null;

        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/ComplianceRecord/${props.MeterId}/${recordSort}/${recordAsc? 1 : 0}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: string) => {
            setChangeList(JSON.parse(data) as Array<PRC002.IRecord>);
        });

        return handle;
    }

    function handleSelect(item: PRC002.IRecord) {
        navigate(`${homePath}PRC002Change/Record/${item.ID}`);
    }

    return (
        <>
            {(props.MeterId > -1 ?
            <div className="row" style={{ margin: 0 }}>
                    <div className="col" style={{ width: '100%', height: 'calc( 100% - 336px)', padding: 0 }}>
                        <Table<PRC002.IRecord>
                            cols={[
                                {
                                    key: 'Status', label: 'Status', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => {
                                        const stat = props.StateList.find(s => s.ID === item.Status);

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
                                    }
                                },
                                { key: 'Timestamp', label: 'Last Updated', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => moment(item.Timestamp).format("MM/DD/YY HH:mm CT") },
                                { key: 'User', field: 'User', label: ' By', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } }
                            ]}
                            tableClass="table table-hover"
                            data={changeList}
                            sortKey={recordSort}
                            ascending={recordAsc}
                            onSort={(d) => {
                                if (d.colKey == recordSort)
                                    setRecordAsc(!recordAsc);
                                else {
                                    setRecordSort(d.colKey);
                                    setRecordAsc(d.colKey == 'User');
                                }
                                }
                            }
                            onClick={(d) => handleSelect(d.row)}
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            selected={() => false}
                        />
                </div>
            </div>
                : null)}
        </>
    )
}

export default RecordList;

