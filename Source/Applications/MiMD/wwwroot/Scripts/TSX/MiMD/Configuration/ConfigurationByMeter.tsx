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

import Table from '@gpa-gemstone/react-table';
import * as _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { MiMD } from '../global';
import ConfigurationFiles from './ConfigurationFiles';
import ConfigurationFileChanges from './ConfigurationFileChanges';
import NoteWindow from '../CommonComponents/NoteWindow';
import { Search, SearchBar } from '@gpa-gemstone/react-interactive';
import { useAppDispatch, useAppSelector } from '../hooks';
import { ConfigurationMeterSlice } from '../Store/Store';
import { Application, SystemCenter } from '@gpa-gemstone/application-typings'; 

declare const homePath: string;

const standardSearch: Search.IField<MiMD.Meter>[] = [
    { key: 'Station', label: 'Meter Name', type: 'string', isPivotField: false },
    { key: 'Make', label: 'Make', type: 'string', isPivotField: false },
    { key: 'Model', label: 'Model', type: 'string', isPivotField: false },
    { key: 'TSC', label: 'TSC', type: 'enum', enum: [{ Label: 'TSC', Value: 'TSC' }], isPivotField: false},
    { key: 'DateLastChanged', label: 'Date Last Changed', type: 'datetime', isPivotField: false }
];

const ConfigurationByMeter: MiMD.ByComponent = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [filterableList, setFilterableList] = React.useState<Array<Search.IField<MiMD.Meter>>>(standardSearch);
    const filters = useAppSelector(ConfigurationMeterSlice.SearchFilters) as Search.IFilter<MiMD.Meter>[];
    const data = useAppSelector(ConfigurationMeterSlice.SearchResults) as MiMD.Meter[];

    const [sortField, setSortField] = React.useState<keyof(MiMD.Meter)>('DateLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);

    const state = useAppSelector(ConfigurationMeterSlice.SearchStatus) as Application.Types.Status;
    const [selectedID, setSelectedID] = React.useState<number>(1);

    React.useEffect(() => {
        dispatch(ConfigurationMeterSlice.DBSearch({ filter: filters, sortField: sortField, ascending: ascending }));
    }, [ascending, sortField])

    React.useEffect(() => {
        if (state == 'unintiated')
            dispatch(ConfigurationMeterSlice.DBSearch({ filter: filters, sortField: sortField, ascending: ascending }));
    }, [dispatch, state])

    React.useEffect(() => {
        const handle = getAdditionalFields();

        return () => {
            if (handle.abort != null) handle.abort();
        }
    }, []);

    function getAdditionalFields(): JQuery.jqXHR<SystemCenter.Types.AdditionalField[]> {
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
                type: 'enum', enum: [{ Label: type, Value: type } ]
        }
        }

        handle.done((d: SystemCenter.Types.AdditionalField[]) => {
            const ordered = _.orderBy(standardSearch.concat(d.filter(d => d.Searchable).map(item => (
                { label: `[AF${item.ExternalDB != undefined ? " " + item.ExternalDB : '' }] ${item.FieldName}`, key: item.FieldName, ...ConvertType(item.Type) } as Search.IField<MiMD.Meter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }

    function handleSelect(item: MiMD.Meter) {
        setSelectedID(item.ID);
        navigate(`${homePath}Configuration/Meter/${item.ID}`, { state: {} });
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
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
            </SearchBar>

            <div style={{ width: '100%', height: 'calc( 100% - 136px)' }}>
                <div className="row" style={{margin: 0, height: '100%'}}>
                    <div className="col" style={{ width: '50%', height: '100%', padding:0 }}>
                        <Table<MiMD.Meter>
                            cols={[
                                { key: 'Station', field: 'Station', label: 'Meter Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'Make', field: 'Make', label: 'Make', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                                { key: 'Model', field: 'Model', label: 'Model', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                                { key: 'TSC', field: 'TSC', label: 'TSC', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                                {
                                    key: 'DateLastChanged', label: 'Date Last Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key, field, style) => {
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
                                    setSortField(d.colKey as keyof(MiMD.Meter));
                                    setAscending(d.colKey != 'DateLastChanged');
                                }
                            }}
                            onClick={(d) => handleSelect(d.row)}
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', height: 'calc( 100% - 70px)', width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            selected={(item) => item.ID == selectedID}
                            keySelector={(item) => item.ID.toString()}
                        />
                    </div>
                    <div className="col" style={{ height: '100%', padding: 0, maxHeight: '100%' , overflowY: 'scroll' }}>
                        <ConfigurationFiles MeterID={selectedID} FileName={props.FileName} />
                        <ConfigurationFileChanges MeterID={selectedID} FileName={props.FileName} />
                        <NoteWindow ID={selectedID} Tag={'Configuration'} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default ConfigurationByMeter;

