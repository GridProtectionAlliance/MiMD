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
import { Search, SearchBar, VerticalSplit, SplitSection, ConfigTable } from '@gpa-gemstone/react-interactive';
import { ReactTable } from '@gpa-gemstone/react-table';
import { useAppDispatch, useAppSelector } from '../hooks';
import { DiagnosticMeterSlice } from '../Store/Store';
import { Application, SystemCenter } from '@gpa-gemstone/application-typings';
import DiagnosticFileRules from './DiagnosticFileRules';


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

const colList = ['Make', 'Model', 'TSC'];

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



    function getAdditionalFields(): JQuery.jqXHR<Array<SystemCenter.Types.AdditionalFieldView>> {
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/AdditionalFieldView/ParentTable/Meter`,
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

        handle.done((d: Array<SystemCenter.Types.AdditionalFieldView>) => {
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
        <div style={{ width: '100%', height: '100%', marginTop: "0.6em" }}>
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
                <li className="nav-item" style={{ width: '50%', paddingRight: 10 }}>
                    <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                        <legend className="w-auto" style={{ fontSize: 'large' }}>Configurable Options:</legend>
                        <div className="row" >
                            <div className="col">
                                <DiagnosticFileRules/>
                            </div>
                        </div>
                    </fieldset>
                </li>
            </SearchBar>
            <VerticalSplit style={{ width: '100%', height: 'calc( 100% - 52px)' }}>
                <SplitSection Width={65} MinWidth={25} MaxWidth={75}>
                    <div style={{ width: '100%', height: '100%', maxHeight: '100%', position: 'relative', float: 'left', overflowY: 'hidden' }}>
                    <ConfigTable.Table<MiMD.DiagnosticMeter>
                            TableClass="table table-hover"
                            TableStyle={{ height: '100%' }}
                            Data={data}
                            SortKey={sortField}
                            Ascending={ascending}
                            OnSort={(d) => {
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
                            OnClick={item => handleSelect(item)}
                            LocalStorageKey={'MiMD.Diagnostic.TableCols'}
                            TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }}
                            TbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 'calc(100%)' }}
                            RowStyle={{ display: 'table', tableLayout: 'fixed', width: 'calc(100%)' }}
                            Selected={(item) => item.ID == selectedID}
                            KeySelector={item => item.ID.toString()}>
                            <ReactTable.AdjustableCol<MiMD.DiagnosticMeter>
                                Key={'Station'}
                                AllowSort={true}
                                Field={'Station'}
                            >Meter</ReactTable.AdjustableCol>
                            {colList.map(name =>
                                <ConfigTable.Configurable Key={name} Label={name} Default={true}>
                                    <ReactTable.AdjustableCol<MiMD.DiagnosticMeter>
                                        Key={name}
                                        AllowSort={true}
                                        Field={name as keyof MiMD.DiagnosticMeter}
                                    >{name}</ReactTable.AdjustableCol>
                                </ConfigTable.Configurable>)
                            }
                            <ReactTable.AdjustableCol<MiMD.DiagnosticMeter>
                                Key={'DateLastChanged'}
                                AllowSort={true}
                                Field={'DateLastChanged'}
                                Content={row => {
                                    if (row.item[row.key] == null || row.item[row.key] == '') return '';
                                    const date = moment(row.item[row.key]);

                                    return date.format("MM/DD/YY HH:mm CT")
                                }}
                            >Last Changed</ReactTable.AdjustableCol>
                            <ConfigTable.Configurable Key={"MaxChangeFileName"} Label={"Last File"} Default={true}>
                                <ReactTable.AdjustableCol<MiMD.DiagnosticMeter>
                                    Key={'MaxChangeFileName'}
                                    AllowSort={true}
                                    Field={'MaxChangeFileName'}
                                >Last File</ReactTable.AdjustableCol>
                            </ConfigTable.Configurable>
                            <ConfigTable.Configurable Key={"AlarmLastChanged"} Label={"Last Alarm"} Default={true}>
                                <ReactTable.AdjustableCol<MiMD.DiagnosticMeter>
                                    Key={'AlarmLastChanged'}
                                    AllowSort={true}
                                    Field={'AlarmLastChanged'}
                                    Content={row => {
                                        if (row.item[row.key] == null || row.item[row.key] == '') return '';

                                        const date = moment(row.item[row.key]);
                                        const now = moment();
                                        const days = now.diff(date, 'days');
                                        let backgroundColor;

                                        if (days < 1)
                                            backgroundColor = 'red';
                                        else if (days < 7)
                                            backgroundColor = 'orange';
                                        else if (days < 30)
                                            backgroundColor = 'yellow';
                                        else backgroundColor = undefined

                                        return <span className="badge badge-pill badge-secondary" style={{ backgroundColor }}>{date.format("MM/DD/YY HH:mm CT")}</span>;
                                    }}
                                >Last Alarm</ReactTable.AdjustableCol>
                            </ConfigTable.Configurable>
                            <ConfigTable.Configurable Key={"AlarmFileName"} Label={"Last File Alarmed"} Default={true}>
                                <ReactTable.AdjustableCol<MiMD.DiagnosticMeter>
                                    Key={'AlarmFileName'}
                                    AllowSort={true}
                                    Field={'AlarmFileName'}
                                >Last File Alarmed</ReactTable.AdjustableCol>
                            </ConfigTable.Configurable>
                            <ConfigTable.Configurable Key={"Alarms"} Label={"Alarms"} Default={true}>
                                <ReactTable.AdjustableCol<MiMD.DiagnosticMeter>
                                    Key={'Alarms'}
                                    AllowSort={true}
                                    Field={'Alarms'}
                                >Alarms</ReactTable.AdjustableCol>
                            </ConfigTable.Configurable>
                            <ConfigTable.Configurable Key={"LastFaultTime"} Label={"Last Fault"} Default={true}>
                                <ReactTable.AdjustableCol<MiMD.DiagnosticMeter>
                                    Key={'AlarmFileName'}
                                    AllowSort={true}
                                    Field={'AlarmFileName'}
                                    Content={row => {
                                        if (row.item[row.key] == null || row.item[row.key] == '') return '';
                                        const date = moment(row.item[row.key]);
                                        return date.format("MM/DD/YY HH:mm CT")
                                    }}
                                >Last Fault</ReactTable.AdjustableCol>
                            </ConfigTable.Configurable>
                            <ConfigTable.Configurable Key={"FaultCount48hr"} Label={"Faults (48hr)"} Default={true}>
                                <ReactTable.AdjustableCol<MiMD.DiagnosticMeter>
                                    Key={'FaultCount48hr'}
                                    AllowSort={true}
                                    Field={'FaultCount48hr'}
                                >Faults (48 hr)</ReactTable.AdjustableCol>
                            </ConfigTable.Configurable>
                        </ConfigTable.Table>
                    </div>
                </SplitSection>
                <SplitSection Width={35} MinWidth={25} MaxWidth={75}>
                    <div style={{ width: '100%', height: '100%', overflowY: 'auto'}}>
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

