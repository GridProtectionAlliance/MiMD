//******************************************************************************************************
//  NewMeterWizzard.tsx - Gbtc
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
//  09/17/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { MiMD  } from '../../global';
import * as PRC002 from '../ComplianceModels';
import { Search, SearchBar } from '@gpa-gemstone/react-interactive';
import { Table, Column } from "@gpa-gemstone/react-table";
import * as _ from 'lodash';
import { SystemCenter } from '@gpa-gemstone/application-typings';

declare let homePath: string;

interface IProps { setMeter: (meter: PRC002.IMeter) => void, selectedMeter: PRC002.IMeter }

const standardSearch: Search.IField<MiMD.Meter>[] = [
    { key: 'Name', label: 'Name', type: 'string', isPivotField: false },
    { key: 'AssetKey', label: 'Asset Key', type: 'string', isPivotField: false },
    { key: 'Make', label: 'Make', type: 'string', isPivotField: false },
    { key: 'Model', label: 'Model', type: 'string', isPivotField: false },
];

const SelectMeter = (props: IProps) => {

    const [MeterList, setMeterList] = React.useState<Array<PRC002.IMeter>>([]);
    const [meterFilter, setMeterFilter] = React.useState<Array<Search.IFilter<PRC002.IMeter>>>([]);
    const [meterSort, setMeterSort] = React.useState<keyof PRC002.IMeter>("Name");
    const [meterAsc, setMeterAsc] = React.useState<boolean>(true);

    const [filterableList, setFilterableList] = React.useState<Array<Search.IField<MiMD.Meter>>>(standardSearch);
    const [searchState, setSearchState] = React.useState<('Idle' | 'Loading' | 'Error')>('Idle');
    
    React.useEffect(() => {
        setSearchState('Loading');
        const handleMeterList = getMeterList();
        
        return () => {
            if (handleMeterList != null && handleMeterList.abort != null) handleMeterList.abort();
        }
    }, [props, meterAsc, meterSort, meterFilter]);

    function getMeterList(): JQuery.jqXHR<Array<PRC002.IMeter>> {
        const nativeFields = standardSearch.map(s => s.key);

        const searches = meterFilter.map(s => { if (nativeFields.findIndex(item => item == s.FieldName) == -1) return { ...s, IsPivotColumn: true }; else return s; });
        searches.push({
            FieldName: 'ID',
            SearchText: ' (SELECT MeterID FROM [MiMD.ComplianceMeter])',
            Operator: 'NOT IN',
            Type: 'query',
            IsPivotColumn: false
        });
        const handle = $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/ComplianceMeter/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: searches, OrderBy: meterSort, Ascending: meterAsc }),
            cache: false,
            async: true
        });

        handle.done((data: string) => {
            setMeterList(JSON.parse(data));
            setSearchState('Idle');
        });
        handle.fail(() => { setSearchState('Error'); })
        return handle;
    }

    React.useEffect(() => {
        const handle = getAdditionalFields();

        return () => {
            if (handle.abort != null) handle.abort();
        }
    }, []);

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

        handle.done((d: SystemCenter.Types.AdditionalFieldView[]) => {
            const ordered = _.orderBy(standardSearch.concat(d.filter(d => d.Searchable).map(item => (
                { label: `[AF${item.ExternalDB != undefined ? " " + item.ExternalDB : ''}] ${item.FieldName}`, key: item.FieldName, ...ConvertType(item.Type), isPivotField: true  } as Search.IField<MiMD.Meter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }
    //List of meters to Select From
    return (
        <>
            <SearchBar<PRC002.IMeter> SetFilter={setMeterFilter} CollumnList={filterableList}
                defaultCollumn={{ key: 'Name', label: 'Name', type: 'string', isPivotField: false }}
                Direction={'left'} Label={'Search'} Width={'100%'}
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
                ResultNote={searchState == 'Error' ? 'Could not complete Search' : 'Found ' + MeterList.length + ' Meters'}
                ShowLoading={searchState == 'Loading'}
            >
            </SearchBar>
            <div style={{ height: 'calc( 100% - 136px)', padding: 0 }}>
                <Table<PRC002.IMeter>
                    TableClass="table table-hover"
                    Data={MeterList}
                    SortKey={meterSort}
                    Ascending={meterAsc}
                    OnSort={(d) => {
                        if (d.colField == meterSort) setMeterAsc(!meterAsc);
                        else {
                            setMeterSort(d.colField);
                            setMeterAsc(true);
                        }
                    }}
                    OnClick={(d) => { props.setMeter(d.row); }}
                    TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    TbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 330, width: '100%' }}
                    RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    Selected={(item) => item.ID === (props.selectedMeter == undefined ? -1 : props.selectedMeter.ID)}
                    KeySelector={item => item.ID}
                >
                    <Column<PRC002.IMeter>
                        Key="Name"
                        Field="Name"
                        AllowSort={true}
                        HeaderStyle={{ width: 'auto' }}
                        RowStyle={{ width: 'auto' }}
                    > Meter
                    </Column>
                    <Column<PRC002.IMeter>
                        Key="Model"
                        Field="Model"
                        AllowSort={true}
                        HeaderStyle={{ width: 'auto' }}
                        RowStyle={{ width: 'auto' }}
                    > Model
                    </Column>
                    <Column<PRC002.IMeter>
                        Key="Make"
                        Field="Make"
                        AllowSort={true}
                        HeaderStyle={{ width: 'auto' }}
                        RowStyle={{ width: 'auto' }}
                    > Make
                    </Column>
                </Table>
            </div>
        </>
    );
}


export default SelectMeter;

