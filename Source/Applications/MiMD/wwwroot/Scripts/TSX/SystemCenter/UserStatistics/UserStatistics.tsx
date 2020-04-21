//******************************************************************************************************
//  UserStatistics.tsx - Gbtc
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
//  02/07/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '../CommonComponents/Table';
import * as _ from 'lodash';
import * as d3 from 'd3';
import { useHistory } from "react-router-dom";
import { SystemCenter } from '../global';
import { GetAccessLogAggregates, GetAccessLogTable, } from './../../../TS/Services/User';
declare var homePath: string;

interface Aggregate {
    Date: string,
    Count: number
}

interface AccesLogTable {
    UserName: string,
    Logins: number,
    LastAccess: string
}

const UserStatistics: SystemCenter.ByComponent = (props) => {
    let history = useHistory();
    let svgWidth = window.innerWidth - 250 - 30;
    let svgHeight = (window.innerHeight - 75) * .33;
    let margin = { top: 20, right: 20, bottom: 20, left: 50 };
    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;
    //let svg = d3.select('svg').attr("width", svgWidth).attr("height", svgHeight);
    
    const [scAggregates, setScAggregates] = React.useState<Array<Aggregate>>([]);
    const [xdaAggregates, setXDAAggregates] = React.useState<Array<Aggregate>>([]);
    const [days, setDays] = React.useState<number>(30);
    const [x, setX] = React.useState<d3.ScaleTime<number, number>>(null);
    const [Y, setY] = React.useState<d3.ScaleLinear<number, number>>(null);
    const [tab, setTab] = React.useState<SystemCenter.AttachedDatabases>('SystemCenter');
    const [tableData, setTableData] = React.useState<Array<AccesLogTable>>([]);
    const [sortField, setSortField] = React.useState<string>('Logins');
    const [ascending, setAscending] = React.useState<boolean>(false);

    React.useEffect(() => {
        GetData(days, tab);
    }, []);

    async function GetData(d: number, t: SystemCenter.AttachedDatabases) {
        let sca = await GetAccessLogAggregates("SystemCenter", d);
        let xdaa = await GetAccessLogAggregates("OpenXDA", d);
        DrawChart(sca, xdaa);
        GetTableData(t)
    }

    async function GetTableData(db: SystemCenter.AttachedDatabases ) {
        let table = await GetAccessLogTable(db, days);
        var ordered = _.orderBy(table, [sortField], [(ascending ? "asc" : "desc")])
        setTableData(ordered);
    }

    function DrawChart(sca: Array<Aggregate>, xdaa: Array<Aggregate>) {
        let maxCounts = sca.map((value, index) => Math.max(sca[index].Count, xdaa[index].Count));

        let x = d3.scaleTime().rangeRound([0, width]);
        let y = d3.scaleLinear().rangeRound([height - 15, 0]);

        let line = d3.line<Aggregate>().x(d => x(moment(d.Date))).y(d => y(d.Count));
        y.domain(d3.extent(maxCounts, d => d));
        x.domain(d3.extent(sca, d => moment(d.Date)));
        d3.select('#yaxis').call(d3.axisLeft(y)).call(g => g.select(".domain").remove());
        d3.select('#xaxis').call(d3.axisBottom(x)).call(g => g.select(".domain").remove());
        d3.select('#scapath').datum(sca).attr('d', line)
        d3.select('#xdapath').datum(xdaa).attr('d', line)

    }

    if (props.Roles.indexOf('Administrator') < 0) return null;
    return (
        <div style={{ width: '100%', height: '100%', padding: '10px 10px 10px 20px' }}>
            <div className="row">
                <div className="col">
                    <h2>User Statistics</h2>
                </div>
                <div className="col">
                    <select className="form-control" value={days} onChange={(e) => {
                        setDays(parseInt(e.target.value));
                        GetData(parseInt(e.target.value), tab);
                    }}>
                        <option value='30'>Last 30 days</option>
                        <option value='60'>Last 60 days</option>
                        <option value='90'>Last 90 days</option>
                        <option value='180'>Last 180 days</option>
                        <option value='365'>Last 365 days</option>
                    </select>
                </div>

            </div>
            <hr/>
            <div style={{ width: '100%', height: 'calc( 100%)' }}>
                <svg width={svgWidth} height={svgHeight } style={{ border: '1px solid lightgray'/*, position: "absolute", left: 20*/ }}>
                    <g id='xaxis' transform={`translate(${margin.left - 20},${height + 10})`}></g>
                    <g id='yaxis' transform={"translate(" + (margin.left - 20) + ",25)"}></g>
                    <g transform={"translate(" + (margin.left - 20) + ",25)"}>
                        <path id='scapath' fill='none' strokeLinejoin='round' strokeWidth='1.5' stroke='steelblue'/>
                        <path id='xdapath' fill='none' strokeLinejoin='round' strokeWidth='1.5' stroke='red'/>
                    </g>
                </svg>
                <div style={{ width: '100%', height: `calc(100% - ${svgHeight}px)` }}>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">                         
                            <a className={"nav-link" + (tab == "SystemCenter" ? " active" : "")} onClick={() => {
                                setTab('SystemCenter')
                                GetTableData('SystemCenter');
                            }}>
                                <svg width="20" height="20">
                                    <rect width="20" height="20" fill='steelblue' strokeWidth='3' stroke='rgb(0,0,0)' />
                                </svg>
                                <span style={{marginLeft: 10}}>System Center</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={"nav-link" + (tab == "OpenXDA" ? " active" : "")} onClick={() => {
                                setTab('OpenXDA')
                                GetTableData('OpenXDA');
                            }}>
                                <svg width="20" height="20">
                                    <rect width="20" height="20" fill='red' strokeWidth='3' stroke='rgb(0,0,0)' />
                                </svg>
                                <span style={{ marginLeft: 10 }}>OpenXDA</span>
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content" style={{ maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
                        <div className="tab-pane  active">
                            <Table<AccesLogTable>
                                cols={[
                                    { key: 'UserName', label: 'User', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                                    { key: 'Logins', label: 'Logins for Period', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                                    { key: 'LastAccess', label: 'Last Access Time ', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                ]}
                                tableClass="table table-hover"
                                data={tableData}
                                sortField={sortField}
                                ascending={ascending}
                                onSort={(d) => {
                                    if (d.col == sortField) {
                                        var ordered = _.orderBy(tableData, [d.col], [(!ascending ? "asc" : "desc")]);
                                        setTableData(ordered);
                                    }
                                    else {
                                        var ordered = _.orderBy(tableData, [d.col], ["asc"]);
                                        setTableData(ordered);
                                        setSortField(d.col);
                                    }
                                    setAscending(!ascending);

                                }}
                                onClick={() => { }}
                                theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                                rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                selected={(item) => false}
                            />

                        </div>
                    </div>                

                </div>
            </div>
        </div>
    )
   
}

export default UserStatistics;
