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
import { useHistory } from "react-router-dom";
import { MiMD } from '../global';
import ConfigurationFiles from './ConfigurationFiles';
import ConfigurationFileChanges from './ConfigurationFileChanges';
import NoteWindow from '../CommonComponents/NoteWindow';
import { LoadingIcon, Search, SearchBar } from '@gpa-gemstone/react-interactive';


declare var homePath: string;

const standardSearch: Search.IField<MiMD.Meter>[] = [
    { key: 'Station', label: 'Meter Name', type: 'string' },
    { key: 'Make', label: 'Make', type: 'string' },
    { key: 'Model', label: 'Model', type: 'string' },
    { key: 'TSC', label: 'TSC', type: 'enum', enum: [{ Label: 'TSC', Value: 'TSC' }]},
    { key: 'DateLastChanged', label: 'Date Last Changed', type: 'datetime' }
];

const ConfigurationByMeter: MiMD.ByComponent = (props) => {
    let history = useHistory();


    const [filterableList, setFilterableList] = React.useState<Array<Search.IField<MiMD.Meter>>>(standardSearch);
    const [filters, setFilters] = React.useState<Array<Search.IFilter<MiMD.Meter>>>([]);

    const [data, setData] = React.useState<Array<MiMD.Meter>>([]);
    const [sortField, setSortField] = React.useState<string>('DateLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);

    const [searchState, setSearchState] = React.useState < ('Idle'|'Loading'|'Error')>('Idle');

    React.useEffect(() => {
        setSearchState('Loading');
        let handle = getMeters();
        return () => { if (handle != null && handle.abort != null) handle.abort(); }
    }, [ascending, sortField, filters])
    
    React.useEffect(() => {
        let handle = getAdditionalFields();

        return () => {
            if (handle.abort != null) handle.abort();
        }
    }, []);


    function getMeters(): JQuery.jqXHR<Array<MiMD.Meter>> {
        const nativeFields = standardSearch.filter(item => item.key !='TSC').map(s => s.key);

        let searches = filters.map(s => { if (nativeFields.findIndex(item => item == s.FieldName) == -1) return { ...s, isPivotColumn: true }; else return s; })
        let handle =  $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/Meter/Config/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: searches, OrderBy: sortField, Ascending: ascending }),
            cache: false,
            async: true
        });

        handle.done((data: Array<MiMD.Meter>) => {
            setData(data);
            setSearchState('Idle');
        });
        handle.fail((d) => { setSearchState('Error'); })

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
                type: 'enum', enum: [{ Label: type, Value: type } ]
        }
        }

        handle.done((d: Array<MiMD.AdditionalField>) => {
            let ordered = _.orderBy(standardSearch.concat(d.map(item => (
                { label: `[AF${item.ExternalDB != undefined ? " " + item.ExternalDB : '' }] ${item.FieldName}`, key: item.FieldName, ...ConvertType(item.Type) } as Search.IField<MiMD.Meter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }

  

    function handleSelect(item, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Configuration&MeterID=' + item.row.MeterID, state: {} })
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
                    return () => { if (handle != null && handle.abort == null) handle.abort(); }
                }}
                Result={searchState == 'Loading' ? <LoadingIcon Show={true}/> : searchState == 'Error'? 'Could not complete Search' : 'Found ' + data.length + ' Meters'}
            >
            </SearchBar>

            <div style={{ width: '100%', height: 'calc( 100% - 136px)' }}>
                <div className="row" style={{margin: 0, height: '100%'}}>
                    <div className="col" style={{ width: '50%', height: '100%', padding:0 }}>
                        <Table<MiMD.Meter>
                            cols={[
                                { key: 'Station', label: 'Meter Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'Make', label: 'Make', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                                { key: 'Model', label: 'Model', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                                { key: 'TSC', label: 'TSC', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                                {
                                    key: 'DateLastChanged', label: 'Date Last Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key, style) => {
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
                                    setSortField(d.col);
                                    setAscending(d.col != 'DateLastChanged');
                                }
                            }}
                            onClick={handleSelect}
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 'calc( 100% - 70px)', width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            selected={(item) => item.MeterID == props.MeterID}
                        />
                    </div>
                    <div className="col" style={{ height: '100%', padding: 0, maxHeight: '100%' , overflowY: 'scroll' }}>
                        <ConfigurationFiles MeterID={props.MeterID} FileName={props.FileName} />
                        <ConfigurationFileChanges MeterID={props.MeterID} FileName={props.FileName} />
                        <NoteWindow ID={props.MeterID}/>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

/*
if ((["integer", "number", "boolean", "string", "datetime"]).indexOf(props.AdditionalField.Type) < 0) {
let handle = $.ajax({
    type: "GET",
    url: `${homePath}api/ValueList/Group/${props.AdditionalField.Type}`,
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    cache: true,
    async: true
})
*/

export default ConfigurationByMeter;

