//******************************************************************************************************
//  ConfigurationByMeter.tsx - Gbtc
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
//  08/22/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { MiMD } from '../global';
import DiagnosticFiles from './DiagnosticFiles';
import DiagnosticFileChanges from './DiagnosticFileChanges';
import NoteWindow from '../CommonComponents/NoteWindow';
import {  Search, SearchBar } from '@gpa-gemstone/react-interactive';
import Table from '@gpa-gemstone/react-table';
import { useDispatch, useSelector } from 'react-redux';
import { DiagnosticMeterSlice } from '../Store/Store';
import { Application, SystemCenter } from '@gpa-gemstone/application-typings';

const standardSearch: Search.IField<MiMD.DiagnosticMeter>[] = [
    { key: 'Station', label: 'Device Name', type: 'string', isPivotField: false },
    { key: 'Make', label: 'Make', type: 'string', isPivotField: false },
    { key: 'Model', label: 'Model', type: 'string', isPivotField: false },
    { key: 'TSC', label: 'TSC', type: 'enum', enum: [{ Label: 'TSC', Value: 'TSC' }], isPivotField: false },
    { key: 'DateLastChanged', label: 'Date Last Changed', type: 'datetime', isPivotField: false },
    { key: "MaxChangeFileName", label: "Last File", type: "string", isPivotField: false },
    { key: "AlarmLastChanged", label: "Last Alarm", type: "datetime", isPivotField: false },
    { key: "AlarmFileName", label: "Last File Alarmed", type: 'string', isPivotField: false },
    { key: "Alarms", label: '# of Alarms', type: 'integer', isPivotField: false }
];

declare var homePath: string;

const DiagnosticByMeter = (props: {MeterID: number, FileName: string, Table: string }) => {
    let history = useHistory();
    let dispatch = useDispatch();

    const [filterableList, setFilterableList] = React.useState<Array<Search.IField<MiMD.DiagnosticMeter>>>(standardSearch);
    const filters = useSelector(DiagnosticMeterSlice.SearchFilters) as Search.IFilter<MiMD.DiagnosticMeter>[];
    const data = useSelector(DiagnosticMeterSlice.SearchResults) as MiMD.DiagnosticMeter[];

    const [sortField, setSortField] = React.useState<keyof (MiMD.DiagnosticMeter)>('DateLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);

    const state = useSelector(DiagnosticMeterSlice.SearchStatus) as Application.Types.Status;


    React.useEffect(() => {

        let handle = getAdditionalFields();

        return () => {
            if (handle.abort != null) handle.abort();
        }
    }, []);

    React.useEffect(() => {
        dispatch(DiagnosticMeterSlice.DBSearch({ filter: filters, sortField: sortField, ascending: ascending }));
    }, [ascending, sortField])

    React.useEffect(() => {
        if (state == 'unintiated')
            dispatch(DiagnosticMeterSlice.DBSearch({ filter: filters, sortField: sortField, ascending: ascending }));
    }, [dispatch, state])

   

    function getAdditionalFields(): JQuery.jqXHR<Array<MiMD.AdditionalField>> {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/AdditionalField/ParentTable/Meter`,
            contentType: "application/json; charset=utf-8",
            cache: false,
            async: true
        });

        function ConvertType(type: string) {
            if (type == 'string' || type == 'integer' || type == 'number' || type == 'datetime' || type == 'boolean')
                return { type: type }
            return {
                type: 'enum', enum: [{ Label: type, Value: type }]
            }
        }

        handle.done((d: Array<SystemCenter.Types.AdditionalField>) => {
            let ordered = _.orderBy(standardSearch.concat(d.filter(d => d.Searchable).map(item => (
                { label: `[AF${item.ExternalDB != undefined ? " " + item.ExternalDB : ''}] ${item.FieldName}`, key: item.FieldName, ...ConvertType(item.Type) } as Search.IField<MiMD.DiagnosticMeter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }

    function handleSelect(item, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Diagnostic&MeterID=' + item.row.ID, state: {} })
    }



    return (
        <div style={{ width: '100%', height: '100%' }}>
            <SearchBar<MiMD.DiagnosticMeter>
                CollumnList={filterableList}
                SetFilter={(flds) => dispatch(DiagnosticMeterSlice.DBSearch({ filter: flds, sortField: sortField, ascending: ascending }))}
                Direction={'left'}
                defaultCollumn={{ key: 'Station', label: 'Meter', type: 'string', isPivotField: false }}
                Width={'65%'}
                Label={'Search'}
                GetEnum={(setOptions, field) => {
                    let handle = null;
                    if (field.type != 'enum' || field.enum == undefined || field.enum.length != 1)
                        return () => { };

                    handle = $.ajax({
                        type: "GET",
                        url: `${homePath}api/ValueList/Group/${field.enum[0].Value}`,
                        contentType: "application/json; charset=utf-8",
                        dataType: 'json',
                        cache: true,
                        async: true
                    });
                    handle.done(d => setOptions(d.map(item => ({ Value: item.Value.toString(), Label: item.Text }))))
                    return () => { if (handle != null && handle.abort == null) handle.abort(); }
                }}
                ShowLoading={state == 'loading'} ResultNote={state == 'error' ? 'Could not complete Search' : 'Found ' + data.length + ' Meters'}

            >
            </SearchBar>

            <div className="row" style={{margin: 0, height: '100%'}}>
                <div className="col-7" style={{ width: '65%', height: 'calc( 100% - 136px)', padding:0 }}>
                    <Table<MiMD.DiagnosticMeter>
                        cols={[
                            { key: 'Station', field: 'Station', label: 'Device Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            { key: 'Make', field: 'Make', label: 'Make', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                            { key: 'Model', field: 'Model', label: 'Model', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                            { key: 'TSC', field: 'TSC', label: 'TSC', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                            {
                                key: 'DateLastChanged', label: 'Last Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key) => {
                                    if (item[key] == null || item[key] == '') return '';
                                    let date = moment(item[key]);

                                    return date.format("MM/DD/YY HH:mm CT")
                                }
                            },
                            { key: 'MaxChangeFileName', field: 'MaxChangeFileName', label: 'Last File', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            {
                                key: 'AlarmLastChanged', label: 'Last Alarm', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key, fld, style) => {
                                    if (item[key] == null || item[key] == '') return '';
                                    let date = moment(item[key]);
                                    let now = moment();
                                    let days = now.diff(date, 'days');

                                    if (days < 1)
                                        style['backgroundColor'] = 'red';
                                    else if (days < 7)
                                        style['backgroundColor'] = 'orange';
                                    else if (days < 30)
                                        style['backgroundColor'] = 'yellow';

                                    return date.format("MM/DD/YY HH:mm CT")
                                }
                            },
                            { key: 'AlarmFileName', field: 'AlarmFileName', label: 'Last File Alarmed', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            { key: 'Alarms', field: 'Alarms', label: 'Alarms', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                            {
                                key: 'LastFaultTime', label: 'Last Fault', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key) => {
                                    if (item[key] == null || item[key] == '') return '';
                                    let date = moment(item[key]);
                                    return date.format("MM/DD/YY HH:mm CT")
                                }
                            },
                            { key: 'FaultCount48hr', field: 'FaultCount48hr', label: 'Faults (48hr)', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },

                            { key: 'scroll', label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },

                        ]}
                        tableClass="table table-hover"
                        tableStyle={{ height: '100%' }}
                        data={data}
                        sortKey={sortField}
                        ascending={ascending}
                        onSort={(d) => {
                            if (d.colKey == 'scroll')
                                return;
                            if (d.colKey == sortField) {
                                setAscending(!ascending);
                            }
                            else {
                                setAscending(d.colKey != 'AlarmLastChanged' && d.colKey != 'DateLastChanged' && d.colKey != 'FaultCount48hr' && d.colKey != 'Alarms');
                                setSortField(d.colKey as keyof MiMD.DiagnosticMeter);
                            }
                        }}
                        onClick={handleSelect}
                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }}
                        tbodyStyle={{ display: 'block', overflowY: 'scroll', height: 'calc( 100% - 70px)', width: '100%' }}
                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        selected={(item) => item.ID == props.MeterID}
                        keySelector={item => item.ID.toString()}
                    />
                </div>
                <div className="col" style={{ padding: 0, height: ' 100%' , overflowY: 'scroll' }}>
                    <DiagnosticFiles MeterID={props.MeterID} FileName={props.FileName} />
                    <DiagnosticFileChanges MeterID={props.MeterID} FileName={props.FileName} Table={props.Table} />
                    <NoteWindow ID={props.MeterID} Tag={'Diagnostic'} />
                </div>

            </div>
        </div>
    )
}
export default DiagnosticByMeter;

