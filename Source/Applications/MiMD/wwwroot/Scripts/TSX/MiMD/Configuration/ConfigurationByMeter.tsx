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
import { useNavigate } from 'react-router-dom';
import { MiMD } from '../global';
import ConfigurationFiles from './ConfigurationFiles';
import ConfigurationFileChanges from './ConfigurationFileChanges';
import NoteWindow from '../CommonComponents/NoteWindow';
import { Search, SearchBar, VerticalSplit, SplitSection } from '@gpa-gemstone/react-interactive';
import { useAppDispatch, useAppSelector } from '../hooks';
import { ConfigurationMeterSlice } from '../Store/Store';
import { Application, SystemCenter } from '@gpa-gemstone/application-typings';
import ConfigurationFileRules from "./ConfigurationFileRules"
import ColorConfiguration from "./ColorConfiguration"
import { ConfigurableTable, ConfigurableColumn, Column, Paging } from '@gpa-gemstone/react-table';

declare const homePath: string;

const standardSearch: Search.IField<MiMD.Meter>[] = [
    { key: 'Station', label: 'Meter Name', type: 'string', isPivotField: false },
    { key: 'Make', label: 'Make', type: 'string', isPivotField: false },
    { key: 'Model', label: 'Model', type: 'string', isPivotField: false },
    { key: 'DateLastChanged', label: 'Date Last Changed', type: 'datetime', isPivotField: false }
];

const ConfigurationByMeter: MiMD.ByComponent = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [filterableList, setFilterableList] = React.useState<Array<Search.IField<MiMD.Meter>>>(standardSearch);
    const filters = useAppSelector(ConfigurationMeterSlice.PagedFilters) as Search.IFilter<MiMD.Meter>[];
    const data = useAppSelector(ConfigurationMeterSlice.SearchResults) as MiMD.Meter[];
    const allPages = useAppSelector(ConfigurationMeterSlice.TotalPages);
    const currentPage = useAppSelector(ConfigurationMeterSlice.CurrentPage);
    const totalRecords = useAppSelector(ConfigurationMeterSlice.TotalRecords);
    const [page, setPage] = React.useState<number>(currentPage);

    const [sortField, setSortField] = React.useState<keyof (MiMD.Meter)>('DateLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);

    const state = useAppSelector(ConfigurationMeterSlice.SearchStatus) as Application.Types.Status;
    const [selectedID, setSelectedID] = React.useState<number>();
    const [colors, setColors] = React.useState<MiMD.IConfigColors[]>([]);

    React.useEffect(() => {
        dispatch(ConfigurationMeterSlice.PagedSearch({ filter: filters, sortField: sortField, ascending: ascending, page: page }));
    }, [ascending, sortField])

    React.useEffect(() => {
        if (state == 'unintiated' || page !== currentPage)
            dispatch(ConfigurationMeterSlice.PagedSearch({ filter: filters, sortField: sortField, ascending: ascending, page: page }));
    }, [page, state])

    React.useEffect(() => {
        const fieldHandle = getAdditionalFields();
        const colorHandle = getColors();

        return () => {
            if (fieldHandle.abort != null || colorHandle.abort != null) {
                fieldHandle.abort();
                colorHandle.abort();
            }
        }
    }, []);

    function getColors(): JQuery.jqXHR<MiMD.IConfigColors> {
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/ColorConfig`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: MiMD.IConfigColors[]) => {
            if (data == null)
                return
            setColors(data);
        });
        return handle;
    }

    function getAdditionalFields(): JQuery.jqXHR<SystemCenter.Types.AdditionalFieldView[]> {
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

        handle.done((d: SystemCenter.Types.AdditionalFieldView[]) => {
            const ordered = _.orderBy(standardSearch.concat(d.filter(d => d.Searchable).map(item => (
                { label: `[AF${item.ExternalDB != undefined ? " " + item.ExternalDB : ''}] ${item.FieldName}`, key: item.FieldName, ...ConvertType(item.Type), isPivotField: true } as Search.IField<MiMD.Meter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }

    function handleSelect(item: MiMD.Meter) {
        setSelectedID(item.ID);
        navigate(`${homePath}Configuration/Meter/${item.ID}`, { state: {} });
    }

    function getBackgroundColor(date: string) {
        const mom = moment(date);
        const now = moment();
        const days = now.diff(mom, 'days');

        if (colors.length > 0) {
            for (const color of colors) {
                if (days < color.Threshold) {
                    return color.Color;
                }
            }
        }
        else { return null; }
    }

    return (
        <div className="container-fluid d-flex h-100 flex-column" style={{ height: 'inherit' }}>
            <div className="row">
                <SearchBar<MiMD.Meter>
                    CollumnList={filterableList}
                    SetFilter={(flds) => {
                        dispatch(ConfigurationMeterSlice.PagedSearch({ filter: flds, sortField: sortField, ascending: ascending, page: 0 }))
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
                        : `Displaying Meter(s) ${page * data.length + 1} - ${page * data.length + data.length} out of ${totalRecords}`
                    }
                >
                    <li className="nav-item" style={{ width: '40%', paddingRight: 10 }}>
                        <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                            <legend className="w-auto" style={{ fontSize: 'large' }}>Actions:</legend>
                            <div className="col">
                                <div className="row">
                                    <ConfigurationFileRules />
                                </div>
                                <br/>
                                <div className="row">
                                    <ColorConfiguration />
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
                                <ConfigurableTable<MiMD.Meter>
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
                                        <Column<MiMD.Meter>
                                            Key={'Station'}
                                            AllowSort={true}
                                            Field={'Station'}>
                                            Meter
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'Model'} Label={'Model'} Default={true}>
                                        <Column<MiMD.Meter>
                                            Key={'Model'}
                                            AllowSort={true}
                                            Field={'Model'}>
                                            Model
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'Make'} Label={'Make'} Default={true}>
                                        <Column<MiMD.Meter>
                                            Key={'Make'}
                                            AllowSort={true}
                                            Field={'Make'}>
                                            Make
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'TSC'} Label={'TSC'} Default={false}>
                                        <Column<MiMD.Meter>
                                            Key={'TSC'}
                                            AllowSort={true}
                                            Field={'TSC'}>
                                            TSC
                                        </Column>
                                    </ConfigurableColumn>
                                    <ConfigurableColumn Key={'AssetKey'} Label={'Key'} Default={false}>
                                        <Column<MiMD.Meter>
                                            Key={'AssetKey'}
                                            AllowSort={true}
                                            Field={'Station'}>
                                            Key
                                        </Column>
                                    </ConfigurableColumn>
                                    <Column<MiMD.Meter>
                                        Key={'DateLastChanged'}
                                        AllowSort={true}
                                        Content={({ item }) => {
                                            const backgroundColor = getBackgroundColor(item.DateLastChanged);
                                            const formattedDate = moment(item.DateLastChanged).format("MM/DD/YY HH:mm CT");
                                            return <span className="badge badge-pill badge-secondary" style={{ backgroundColor }}>{formattedDate}</span>;
                                        }}
                                        Field={'DateLastChanged'}
                                    >
                                        Date Last Changed
                                    </Column>
                                </ConfigurableTable>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Paging Current={page + 1} Total={allPages} SetPage={(p) => setPage(p - 1)} />
                                </div>
                            </div>
                        </div>
                    </SplitSection>
                    <SplitSection Width={40} MinWidth={25} MaxWidth={75} >
                        <div className="row" style={{ height: '100%', margin: 0, overflowY: 'auto' }}>
                            <ConfigurationFiles MeterID={selectedID} />
                            <ConfigurationFileChanges MeterID={selectedID} />
                            <NoteWindow ID={selectedID} Tag={'Configuration'} />
                        </div>
                    </SplitSection>
                </VerticalSplit>
            </div>
        </div>
    )
}

export default ConfigurationByMeter;