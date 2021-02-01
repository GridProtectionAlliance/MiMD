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
import { Search, SearchBar } from '@gpa-gemstone/react-interactive';
import Table from '@gpa-gemstone/react-table';

interface Meter {
    MeterID: number,
    Station: string,
    Model: string, 
    TSC: string,
    DateLastChanged: string,
    MaxChangeFileName: string,
    AlarmLastChanged: string,
    AlarmFileName: string,
    Alarms: number, 
    LastFaultTime: string,
    FaultCount48hr: number
}

const standardSearch: Search.IField<Meter>[] = [
    { key: 'Station', label: 'Station', type: 'string' },
    { key: 'Model', label: 'Model', type: 'string' },
    { key: 'DateLastChanged', label: 'Date Last Changed', type: 'datetime' },
    { key: "MaxChangeFileName", label: "Last File", type: "string" },
    { key: "AlarmLastChanged", label: "Last Alarm", type: "datetime" },
    { key: "AlarmFileName", label: "Last File Alarmed", type: 'string' },
    { key: "Alarms", label: '# of Alarms', type: 'integer' }
];

declare var homePath: string;

const ConfigurationByMeter = (props: {MeterID: number, FileName: string, Table: string }) => {
    let history = useHistory();

    const [filterableList, setFilterableList] = React.useState<Array<Search.IField<Meter>>>(standardSearch);
    const [filters, setFilters] = React.useState<Array<Search.IFilter<Meter>>>([]);
    

    const [data, setData] = React.useState<Array<Meter>>([]);
    const [sortField, setSortField] = React.useState<string>('AlarmLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);

    React.useEffect(() => {
        let handle = getAdditionalFields();

        return () => {
            if (handle.abort != null) handle.abort();
        }
    }, []);

    React.useEffect(() => {
        let h = getMeters();
        return () => { if (h != null && h.abort != null) h.abort();}
    }, [ascending, sortField, filters])

    function getMeters(): JQuery.jqXHR<Array<Meter>> {
        let handle =  $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/Meter/Diagnostic/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: filters, OrderBy: sortField, Ascending: ascending }),
            cache: false,
            async: true
        });

        handle.done((data: Array<Meter>) => {
            setData(data)
        });

        return handle;
    }

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

        handle.done((d: Array<MiMD.AdditionalField>) => {
            let ordered = _.orderBy(standardSearch.concat(d.map(item => (
                { label: item.FieldName, key: item.FieldName, ...ConvertType(item.Type) } as Search.IField<Meter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }

    function handleSelect(item, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Diagnostic&MeterID=' + item.row.MeterID, state: {} })
    }



    return (
        <div style={{ width: '100%', height: '100%' }}>
            <SearchBar<MiMD.Meter>
                CollumnList={filterableList}
                SetFilter={(flds) => setFilters(flds)}
                Direction={'left'}
                defaultCollumn={{ key: 'Station', label: 'Station', type: 'string' }}
                Width={'50%'}
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
                    return () => { if (handle != null && handle.abort == null) handle.abort; }
                }}
            >
            </SearchBar>

            <div className="row" style={{margin: 0, height: '100%'}}>
                <div className="col-7" style={{ width: '65%', height: 'calc( 100% - 136px)', padding:0 }}>
                    <Table<Meter>
                        cols={[
                            { key: 'Station', label: 'Station', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            { key: 'Model', label: 'Model', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                            { key: 'TSC', label: 'TSC', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                            {
                                key: 'DateLastChanged', label: 'Last Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key, style) => {
                                    if (item[key] == null || item[key] == '') return '';
                                    let date = moment(item[key]);

                                    return date.format("MM/DD/YY HH:mm CT")
                                }
                            },
                            { key: 'MaxChangeFileName', label: 'Last File', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            {
                                key: 'AlarmLastChanged', label: 'Last Alarm', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key, style) => {
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
                            { key: 'AlarmFileName', label: 'Last File Alarmed', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            { key: 'Alarms', label: 'Alarms', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                            {
                                key: 'LastFaultTime', label: 'Last Fault', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key, style) => {
                                    if (item[key] == null || item[key] == '') return '';
                                    let date = moment(item[key]);
                                    return date.format("MM/DD/YY HH:mm CT")
                                }
                            },
                            { key: 'FaultCount48hr', label: 'Faults (48hr)', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },

                            { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },

                        ]}
                        tableClass="table table-hover"
                        data={data}
                        sortField={sortField}
                        ascending={ascending}
                        onSort={(d) => {
                            if (d.col == sortField) {
                                setAscending(!ascending);
                            }
                            else {
                                setAscending(ascending);
                                setSortField(d.col);
                            }
                        }}
                        onClick={handleSelect}
                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }}
                        tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 'calc( 100% - 70px)', width: '100%' }}
                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        selected={(item) => item.MeterID == props.MeterID}
                    />
                </div>
                <div className="col" style={{ padding: 0, height: ' 100%' , overflowY: 'scroll' }}>
                    <DiagnosticFiles MeterID={props.MeterID} FileName={props.FileName} />
                    <DiagnosticFileChanges MeterID={props.MeterID} FileName={props.FileName} Table={props.Table}/>
                    <NoteWindow ID={props.MeterID}/>
                </div>

            </div>
        </div>
    )
}
export default ConfigurationByMeter;

