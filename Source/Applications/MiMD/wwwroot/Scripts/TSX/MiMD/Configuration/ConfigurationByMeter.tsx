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
import { Search, SearchBar, VerticalSplit, SplitSection, ConfigTable } from '@gpa-gemstone/react-interactive';
import { useAppDispatch, useAppSelector } from '../hooks';
import { ConfigurationMeterSlice } from '../Store/Store';
import { Application, SystemCenter } from '@gpa-gemstone/application-typings';
import ConfigurationFileRules from "./ConfigurationFileRules"
import ColorConfiguration from "./ColorConfiguration"
import { ReactTable } from '@gpa-gemstone/react-table';

declare const homePath: string;

const standardSearch: Search.IField<MiMD.Meter>[] = [
    { key: 'Station', label: 'Meter Name', type: 'string', isPivotField: false },
    { key: 'Make', label: 'Make', type: 'string', isPivotField: false },
    { key: 'Model', label: 'Model', type: 'string', isPivotField: false },
    { key: 'TSC', label: 'TSC', type: 'enum', enum: [{ Label: 'TSC', Value: 'TSC' }], isPivotField: false },
    { key: 'DateLastChanged', label: 'Date Last Changed', type: 'datetime', isPivotField: false }
];

const defaultCols = new Set(['Make', 'Model', 'TSC']);
const colList = ['ID', 'Make', 'Model', 'TSC'];

const ConfigurationByMeter: MiMD.ByComponent = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [filterableList, setFilterableList] = React.useState<Array<Search.IField<MiMD.Meter>>>(standardSearch);
    const filters = useAppSelector(ConfigurationMeterSlice.SearchFilters) as Search.IFilter<MiMD.Meter>[];
    const data = useAppSelector(ConfigurationMeterSlice.SearchResults) as MiMD.Meter[];

    const [sortField, setSortField] = React.useState<keyof (MiMD.Meter)>('DateLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);

    const state = useAppSelector(ConfigurationMeterSlice.SearchStatus) as Application.Types.Status;
    const [selectedID, setSelectedID] = React.useState<number>();
    const [colors, setColors] = React.useState<MiMD.IConfigColors[]>([]);

    React.useEffect(() => {
        dispatch(ConfigurationMeterSlice.DBSearch({ filter: filters, sortField: sortField, ascending: ascending }));
    }, [ascending, sortField])

    React.useEffect(() => {
        if (state == 'unintiated')
            dispatch(ConfigurationMeterSlice.DBSearch({ filter: filters, sortField: sortField, ascending: ascending }));
    }, [dispatch, state])

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
                { label: `[AF${item.ExternalDB != undefined ? " " + item.ExternalDB : ''}] ${item.FieldName}`, key: item.FieldName, ...ConvertType(item.Type) } as Search.IField<MiMD.Meter>
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
        <>
            <div style={{ width: '100%', height: '100%', marginTop: "0.6em" }}>
                <SearchBar<MiMD.Meter>
                    CollumnList={filterableList}
                    SetFilter={(flds) => dispatch(ConfigurationMeterSlice.DBSearch({ filter: flds, sortField: sortField, ascending: ascending }))}
                    Direction={'left'}
                    defaultCollumn={{ key: 'Station', label: 'Meter', type: 'string', isPivotField: false }}
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
                        return () => { if (handle != null && handle.abort == null) handle.abort(); }
                    }}
                    ShowLoading={state == 'loading'} ResultNote={state == 'error' ? 'Could not complete Search' : 'Found ' + data.length + ' Meters'}
                >
                    <li className="nav-item" style={{ width: '50%', paddingRight: 10 }}>
                        <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                            <legend className="w-auto" style={{ fontSize: 'large' }}>Configurable Options:</legend>
                            <div className="row" >
                                <div className="col">
                                    <ConfigurationFileRules />
                                </div>
                                <div className="col">
                                    <ColorConfiguration />
                                </div>
                            </div>
                        </fieldset>
                    </li>
            </SearchBar>
                <VerticalSplit style={{ width: '100%', height: 'calc( 100% - 52px)' }}>
                    <SplitSection Width={50} MinWidth={25} MaxWidth={75}>
                        <div style={{ width: '100%', height: '100%', maxHeight: '100%', position: 'relative', float: 'left', overflowY: 'hidden' }}>
                        <ConfigTable.Table<MiMD.Meter>
                                TableClass="table table-hover"
                                TableStyle={{ height: '100%', width: '100%' }}
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
                                        setSortField(d.colKey as keyof (MiMD.Meter));
                                        setAscending(d.colKey != 'DateLastChanged');
                                    }
                                }}
                                OnClick={(d) => handleSelect(d.row)}
                                LocalStorageKey={'MiMD.Configuration.TableCols'}
                                TheadStyle={{ fontSize: 'smaller', display: 'table', width: '100%', tableLayout: 'fixed', height:  60 }}
                                TbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 'calc(100%)' }}
                                RowStyle={{ display: 'table', tableLayout: 'fixed', width: 'calc(100%)' }}
                                Selected={(item) => item.ID == selectedID}
                                KeySelector={(item) => item.ID.toString()}>
                                <ConfigTable.Configurable Key={"Station"} Label={"Meter"} Default={true}>
                                    <ReactTable.AdjustableCol<MiMD.Meter>
                                        Key={'Station'}
                                        AllowSort={true}
                                        Field={'Station'}
                                    >Meter</ReactTable.AdjustableCol>
                                </ConfigTable.Configurable>
                                {colList.map(name =>
                                    <ConfigTable.Configurable Key={name} Label={name} Default={defaultCols.has(name)}>
                                        <ReactTable.AdjustableCol<MiMD.Meter>
                                            Key={name}
                                            AllowSort={true}
                                            Field={name as keyof MiMD.Meter}
                                        >{name}</ReactTable.AdjustableCol>
                                    </ConfigTable.Configurable>)
                                }
                                <ReactTable.AdjustableCol<MiMD.Meter>
                                    Key={'DateLastChanged'}
                                    AllowSort={true}
                                    Field={'DateLastChanged'}
                                    Content={row => {
                                        const backgroundColor = getBackgroundColor(row.item.DateLastChanged);
                                        const formattedDate = moment(row.item.DateLastChanged).format("MM/DD/YY HH:mm CT");
                                        return <span className="badge badge-pill badge-secondary" style={{ backgroundColor }}>{formattedDate}</span>;
                                    }}
                                >Date Last Changed</ReactTable.AdjustableCol>
                            </ConfigTable.Table>
                        </div>
                    </SplitSection>
                <SplitSection Width={50} MinWidth={25} MaxWidth={75} >
                    <div style={{ width: '100%', height: '100%', overflowY: 'auto'}}>
                            <ConfigurationFiles MeterID={selectedID} />
                            <ConfigurationFileChanges MeterID={selectedID} />
                        <NoteWindow ID={selectedID} Tag={'Configuration'} />
                    </div>
                    </SplitSection>
                </VerticalSplit>
            </div>
        </>
    )
}

export default ConfigurationByMeter;