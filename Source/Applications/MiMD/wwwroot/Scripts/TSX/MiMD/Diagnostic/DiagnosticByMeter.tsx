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
import { useNavigate } from "react-router-dom";
import { MiMD } from '../global';
import DiagnosticFiles from './DiagnosticFiles';
import DiagnosticFileChanges from './DiagnosticFileChanges';
import NoteWindow from '../CommonComponents/NoteWindow';
import { Search, SearchBar, VerticalSplit, SplitSection, ConfigurableTable } from '@gpa-gemstone/react-interactive';
import { useAppDispatch, useAppSelector } from '../hooks';
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

declare let homePath: string;

const DiagnosticByMeter = (props: { FileName: string, Table: string, useParams: { meterID: string } }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [filterableList, setFilterableList] = React.useState<Array<Search.IField<MiMD.DiagnosticMeter>>>(standardSearch);
    const filters = useAppSelector(DiagnosticMeterSlice.SearchFilters) as Search.IFilter<MiMD.DiagnosticMeter>[];
    const data = useAppSelector(DiagnosticMeterSlice.SearchResults) as MiMD.DiagnosticMeter[];

    const [sortField, setSortField] = React.useState<keyof (MiMD.DiagnosticMeter)>('DateLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);

    const state = useAppSelector(DiagnosticMeterSlice.SearchStatus) as Application.Types.Status;
    const [selectedID, setSelectedID] = React.useState<number>(1);


    React.useEffect(() => {
        const handle = getAdditionalFields();

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
        const handle = $.ajax({
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
            const ordered = _.orderBy(standardSearch.concat(d.filter(d => d.Searchable).map(item => (
                { label: `[AF${item.ExternalDB != undefined ? " " + item.ExternalDB : ''}] ${item.FieldName}`, key: item.FieldName, ...ConvertType(item.Type) } as Search.IField<MiMD.DiagnosticMeter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }

    function handleSelect(item) {
        setSelectedID(item.row.ID);
        navigate(`${homePath}Diagnostic/Meter/${item.row.ID}`, { state: {} });
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
            <VerticalSplit style={{ width: '100%', height: 'calc( 100% - 52px)' }}>
                <SplitSection Width={65} MinWidth={25} MaxWidth={75}>
                    <div style={{ width: '100%', height: '100%', maxHeight: '100%', position: 'relative', float: 'left', overflowY: 'hidden' }}>
                        <ConfigurableTable<MiMD.DiagnosticMeter>
                            cols={[
                                { key: 'Station', field: 'Station', label: 'Device Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'Make', field: 'Make', label: 'Make', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                                { key: 'Model', field: 'Model', label: 'Model', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                                { key: 'TSC', field: 'TSC', label: 'TSC', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                                {
                                    key: 'DateLastChanged', label: 'Last Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key) => {
                                        if (item[key] == null || item[key] == '') return '';
                                        const date = moment(item[key]);

                                        return date.format("MM/DD/YY HH:mm CT")
                                    }
                                },
                                { key: 'MaxChangeFileName', field: 'MaxChangeFileName', label: 'Last File', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                                {
                                    key: 'AlarmLastChanged', label: 'Last Alarm', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key, fld, style) => {
                                        if (item[key] == null || item[key] == '') return '';
                                        const date = moment(item[key]);
                                        const now = moment();
                                        const days = now.diff(date, 'days');

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
                                        const date = moment(item[key]);
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
                            onClick={item => handleSelect(item)}
                            defaultColumns={['Station', 'Make', 'Model', 'TSC', 'DateLastChanged','MaxChangeFileName', 'AlarmLastChanged', 'AlarmFileName', 'Alarms', 'LastFaultTime', 'FaultCount48hr']}
                            requiredColumns={['Station', 'DateLastChanged']}
                            localStorageKey={'MiMD.Diagnostic.TableCols'}
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 'calc(100%)' }}
                            rowStyle={{ display: 'table', tableLayout: 'fixed', width: 'calc(100%)' }}
                            selected={(item) => item.ID == selectedID}
                            keySelector={item => item.ID.toString()}
                        />
                    </div>
                </SplitSection>
                <SplitSection Width={35} MinWidth={25} MaxWidth={75}>
                    <div style={{ width: '100%', height: '100%', position: 'relative', float: 'right', overflowY: 'hidden' }}>
                        <DiagnosticFiles MeterID={selectedID} />
                        <DiagnosticFileChanges MeterID={selectedID} Table={props.Table} />
                        <NoteWindow ID={selectedID} Tag={'Diagnostic'} />
                    </div>
                </SplitSection>
            </VerticalSplit>
        </div>
    )
}
export default DiagnosticByMeter;

