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
                { label: `[AF${item.ExternalDB != undefined ? " " + item.ExternalDB : ''}] ${item.FieldName}`, key: item.FieldName, ...ConvertType(item.Type), isPivotField: true } as Search.IField<MiMD.DiagnosticMeter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }

    function handleSelect(item: MiMD.DiagnosticMeter) {
        setSelectedID(item.ID);
        navigate(`${homePath}Diagnostic/Meter/${item.ID}`, { state: {} });
    }
    
    return (
        <div className="container-fluid d-flex h-100 flex-column" style={{ height: 'inherit' }}>
            <div className="row">
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
                    handle.done(d => setOptions(d.map(item => ({ Value: item.ID.toString(), Label: item.Value }))))
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
            </div>
            <div className={'row'} style={{ flex: 1, overflow: 'hidden' }}>
            <VerticalSplit style={{ width: '100%', height: '100%' }}>
                    <SplitSection Width={65} MinWidth={25} MaxWidth={75}>
                        <div className="row" style={{ height: '100%', margin: 0 }}>
                            <div className={'col-12'} style={{ flex: 1, overflow: 'hidden', margin: 0 }}>
                                <ConfigTable.Table<MiMD.DiagnosticMeter>
                                    LocalStorageKey="MiMD.Configuration.TableCols"
                                    TableClass="table table-hover"
                                    Data={data}
                                    KeySelector={(item) => item.ID.toString()}
                                    SortKey={sortField}
                                    Ascending={ascending}
                                    TheadStyle={{ fontSize: 'smaller', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                    TbodyStyle={{ display: 'block', overflowY: 'scroll', flex: 1 }}
                                    RowStyle={{ display: 'table', tableLayout: 'fixed', width: '100%' }}
                                    TableStyle={{
                                        padding: 0, width: 'calc(100%)', height: '100%',
                                        tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 0
                                    }}
                                    Selected={(item) => item.ID == selectedID}
                                    OnSort={(d) => {
                                        if (d.colKey == 'scroll')
                                            return;
                                        if (d.colKey == sortField) {
                                            setAscending(!ascending);
                                        }
                                        else {
                                            setSortField(d.colKey as keyof (MiMD.Meter));
                                            setAscending(d.colKey != 'DateLastChanged');
                                        }
                                    }}
                                    OnClick={(d) => handleSelect(d.row)}
                                >
                                    <ConfigTable.Configurable Key={'Station'} Label={'Station'} Default={true}>
                                        <ReactTable.Column<any>
                                            Key={'Station'}
                                            AllowSort={true}
                                            Field={'Station'}>
                                            Station
                                        </ReactTable.Column>
                                    </ConfigTable.Configurable>
                                    <ConfigTable.Configurable Key={'Model'} Label={'Model'} Default={true}>
                                        <ReactTable.Column<MiMD.DiagnosticMeter>
                                            Key={'Model'}
                                            AllowSort={true}
                                            Field={'Model'}>
                                            Model
                                        </ReactTable.Column>
                                    </ConfigTable.Configurable>
                                    <ConfigTable.Configurable Key={'Make'} Label={'Make'} Default={true}>
                                        <ReactTable.Column<MiMD.DiagnosticMeter>
                                            Key={'Make'}
                                            AllowSort={true}
                                            Field={'Make'}>
                                            Make
                                        </ReactTable.Column>
                                    </ConfigTable.Configurable>
                                    <ConfigTable.Configurable Key={'TSC'} Label={'TSC'} Default={false}>
                                        <ReactTable.Column<MiMD.DiagnosticMeter>
                                            Key={'TSC'}
                                            AllowSort={true}
                                            Field={'TSC'}>
                                            TSC
                                        </ReactTable.Column>
                                    </ConfigTable.Configurable>
                                    <ReactTable.Column<MiMD.DiagnosticMeter>
                                        Key={'DateLastChanged'}
                                        AllowSort={true}
                                        Content={({ item }) => {
                                            const formattedDate = moment(item.DateLastChanged).format("MM/DD/YY HH:mm CT");
                                            return formattedDate;
                                        }}
                                        Field={'DateLastChanged'}
                                    >
                                        Date Last Changed
                                    </ReactTable.Column>
                                    <ConfigTable.Configurable Key={'MaxChangeFileName'} Label={'Last File'} Default={true}>
                                        <ReactTable.Column<MiMD.DiagnosticMeter>
                                            Key={'MaxChangeFileName'}
                                            AllowSort={true}
                                            Field={'MaxChangeFileName'}>
                                            Last File
                                        </ReactTable.Column>
                                    </ConfigTable.Configurable>
                                    <ConfigTable.Configurable Key={'AlarmLastChanged'} Label={'Last Alarm'} Default={true}>
                                        <ReactTable.Column<MiMD.DiagnosticMeter>
                                            Key={'AlarmLastChanged'}
                                            AllowSort={true}
                                            Field={'AlarmLastChanged'}
                                            Content={({ item, field }) => {
                                                if (item[field] == null || item[field] == '') return '';

                                                const date = moment(item[field]);
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
                                        >
                                            Last Alarm
                                        </ReactTable.Column>
                                    </ConfigTable.Configurable>
                                    <ConfigTable.Configurable Key={'AlarmFileName'} Label={'Last File Alarmed'} Default={false}>
                                        <ReactTable.Column<MiMD.DiagnosticMeter>
                                            Key={'AlarmFileName'}
                                            AllowSort={true}
                                            Field={'AlarmFileName'}>
                                            Last File Alarmed
                                        </ReactTable.Column>
                                    </ConfigTable.Configurable>
                                    <ConfigTable.Configurable Key={'Alarms'} Label={'Alarms'} Default={false}>
                                        <ReactTable.Column<MiMD.DiagnosticMeter>
                                            Key={'Alarms'}
                                            AllowSort={true}
                                            Field={'Alarms'}>
                                            Alarms
                                        </ReactTable.Column>
                                    </ConfigTable.Configurable>
                                    <ConfigTable.Configurable Key={'LastFaultTime'} Label={'Last Fault'} Default={false}>
                                        <ReactTable.Column<MiMD.DiagnosticMeter>
                                            Key={'LastFaultTime'}
                                            AllowSort={true}
                                            Field={'LastFaultTime'}
                                            Content={({ item, key }) => {
                                                if (item[key] == null || item[key] == '') return '';
                                                const date = moment(item[key]);
                                                return date.format("MM/DD/YY HH:mm CT")
                                            }}
                                        >
                                            Last Fault
                                        </ReactTable.Column>
                                    </ConfigTable.Configurable>
                                    <ConfigTable.Configurable Key={'FaultCount48hr'} Label={'Faults (48hr)'} Default={false}>
                                        <ReactTable.Column<MiMD.DiagnosticMeter>
                                            Key={'FaultCount48hr'}
                                            AllowSort={true}
                                            Field={'FaultCount48hr'}
                                        >
                                            Faults (48hr)
                                        </ReactTable.Column>
                                    </ConfigTable.Configurable>
                                </ConfigTable.Table>
                            </div>
                        </div>
                    </SplitSection>
                    <SplitSection Width={35} MinWidth={25} MaxWidth={75}>
                        <div className="row" style={{ height: '100%', margin: 0, overflowY: 'auto' }}>
                            <DiagnosticFiles MeterID={selectedID} />
                            <DiagnosticFileChanges MeterID={selectedID} Table={props.Table} />
                            <NoteWindow ID={selectedID} Tag={'Diagnostic'} />
                        </div>
                    </SplitSection>
                </VerticalSplit>
            </div>
        </div>
    )
}
export default DiagnosticByMeter;

