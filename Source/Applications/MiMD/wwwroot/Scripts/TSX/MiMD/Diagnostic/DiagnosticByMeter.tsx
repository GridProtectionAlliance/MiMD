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
import { Search, SearchBar, VerticalSplit, SplitSection } from '@gpa-gemstone/react-interactive';
import { ConfigurableTable, ConfigurableColumn, Column, Paging } from '@gpa-gemstone/react-table';
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
    const filters = useAppSelector(DiagnosticMeterSlice.PagedFilters) as Search.IFilter<MiMD.DiagnosticMeter>[];
    const data = useAppSelector(DiagnosticMeterSlice.SearchResults) as MiMD.DiagnosticMeter[];
    const allPages = useAppSelector(DiagnosticMeterSlice.TotalPages);
    const currentPage = useAppSelector(DiagnosticMeterSlice.CurrentPage);
    const totalRecords = useAppSelector(DiagnosticMeterSlice.TotalRecords);
    const [page, setPage] = React.useState<number>(currentPage);

    const [sortField, setSortField] = React.useState<keyof (MiMD.DiagnosticMeter)>('DateLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);

    const state = useAppSelector(DiagnosticMeterSlice.SearchStatus) as Application.Types.Status;
    const [selectedID, setSelectedID] = React.useState<number>();

    React.useEffect(() => {
        const handle = getAdditionalFields();

        return () => {
            if (handle.abort != null) handle.abort();
        }
    }, []);

    React.useEffect(() => {
        dispatch(DiagnosticMeterSlice.PagedSearch({ filter: filters, sortField: sortField, ascending: ascending, page: page }));
    }, [ascending, sortField]);

    React.useEffect(() => {
        if (state == 'unintiated' || page !== currentPage)
            dispatch(DiagnosticMeterSlice.PagedSearch({ filter: filters, sortField: sortField, ascending: ascending, page: page }));
    }, [page, currentPage, state]);

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
                    SetFilter={(flds) => {
                        dispatch(DiagnosticMeterSlice.PagedSearch({ filter: flds, sortField: sortField, ascending: ascending, page: 0 }));
                        setPage(0);
                    }}
                    Direction={'left'}
                    defaultCollumn={{ key: 'Station', label: 'Meter', type: 'string', isPivotField: false }}
                    Width={'60%'}
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
                    ShowLoading={state == 'loading'}
                    ResultNote={state == 'error'
                        ? 'Could not complete Search'
                        : `Displaying Meter(s) ${page * data.length + Number(data.length > 0)} - ${page * data.length + data.length} out of ${totalRecords}`
                    }
                >
                    <li className="nav-item" style={{ width: '40%', paddingRight: 10 }}>
                        <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                            <legend className="w-auto" style={{ fontSize: 'large' }}>Actions:</legend>
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
                    <SplitSection Width={60} MinWidth={25} MaxWidth={75}>
                        <div className="container-fluid d-flex h-100 flex-column">
                            <div className="row" style={{ flex: 1, overflow: 'hidden' }}>
                                <ConfigurableTable<MiMD.DiagnosticMeter>
                                    LocalStorageKey="MiMD.Configuration.TableCols"
                                    TableClass="table table-hover"
                                    Data={data}
                                    KeySelector={(item) => item.ID.toString()}
                                    SortKey={sortField}
                                    Ascending={ascending}
                                    TableStyle={{ height: '100%', width: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                                    TheadStyle={{ fontSize: 'auto', tableLayout: 'fixed', display: 'table', width: '100%' }}
                                    TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
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
                                    <ConfigurableColumn Key={'Station'} Label={'Station'} Default={true}>
                                        <Column<any>
                                            Key={'Station'}
                                            AllowSort={true}
                                            Field={'Station'}>
                                            Meter
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'Model'} Label={'Model'} Default={true}>
                                        <Column<MiMD.DiagnosticMeter>
                                            Key={'Model'}
                                            AllowSort={true}
                                            Field={'Model'}>
                                            Model
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'Make'} Label={'Make'} Default={true}>
                                        <Column<MiMD.DiagnosticMeter>
                                            Key={'Make'}
                                            AllowSort={true}
                                            Field={'Make'}>
                                            Make
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'TSC'} Label={'TSC'} Default={false}>
                                        <Column<MiMD.DiagnosticMeter>
                                            Key={'TSC'}
                                            AllowSort={true}
                                            Field={'TSC'}>
                                            TSC
                                        </Column>
                                    </ConfigurableColumn>
                                    <Column<MiMD.DiagnosticMeter>
                                        Key={'DateLastChanged'}
                                        AllowSort={true}
                                        Field={'DateLastChanged'}
                                        Content={({ item, key }) => {
                                            if (item[key] == null || item[key] == '') return 'N/A';
                                            const formattedDate = moment(item.DateLastChanged).format("MM/DD/YY HH:mm CT");
                                            return formattedDate;
                                        }}
                                    >
                                        Date Last Changed
                                    </Column>
                                    <ConfigurableColumn Key={'MaxChangeFileName'} Label={'Last File'} Default={true}>
                                        <Column<MiMD.DiagnosticMeter>
                                            Key={'MaxChangeFileName'}
                                            AllowSort={true}
                                            Field={'MaxChangeFileName'}>
                                            Last File
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'AlarmLastChanged'} Label={'Last Alarm'} Default={true}>
                                        <Column<MiMD.DiagnosticMeter>
                                            Key={'AlarmLastChanged'}
                                            AllowSort={true}
                                            Field={'AlarmLastChanged'}
                                            Content={({ item, key }) => {
                                                if (item[key] == null || item[key] == '') return 'N/A';

                                                const date = moment(item[key]);
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
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'AlarmFileName'} Label={'Last File Alarmed'} Default={false}>
                                        <Column<MiMD.DiagnosticMeter>
                                            Key={'AlarmFileName'}
                                            AllowSort={true}
                                            Field={'AlarmFileName'}
                                            Content={({ item, key }) => {
                                                if (item[key] == null || item[key] == '') return 'N/A';
                                                return item[key];
                                            }}
                                        >
                                            Last File Alarmed
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'Alarms'} Label={'Alarms'} Default={false}>
                                        <Column<MiMD.DiagnosticMeter>
                                            Key={'Alarms'}
                                            AllowSort={true}
                                            Field={'Alarms'}
                                            Content={({ item, key }) => {
                                                if (item[key] == null || item[key] == '') return '0';
                                                return item[key];
                                            }}
                                        >
                                            Alarms
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'LastFaultTime'} Label={'Last Fault'} Default={false}>
                                        <Column<MiMD.DiagnosticMeter>
                                            Key={'LastFaultTime'}
                                            AllowSort={true}
                                            Field={'LastFaultTime'}
                                            Content={({ item, key }) => {
                                                if (item[key] == null || item[key] == '') return 'N/A';
                                                const date = moment(item[key]);
                                                return date.format("MM/DD/YY HH:mm CT")
                                            }}
                                        >
                                            Last Fault
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'FaultCount48hr'} Label={'Faults (48hr)'} Default={false}>
                                        <Column<MiMD.DiagnosticMeter>
                                            Key={'FaultCount48hr'}
                                            AllowSort={true}
                                            Field={'FaultCount48hr'}
                                        >
                                            Faults (48hr)
                                        </Column>
                                    </ConfigurableColumn>
                                </ConfigurableTable>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Paging Current={page + 1} Total={allPages} SetPage={(p) => setPage(p - 1)} />
                                </div>
                            </div>
                        </div>
                    </SplitSection>
                    <SplitSection Width={40} MinWidth={25} MaxWidth={75}>
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

