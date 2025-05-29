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
import { Search, SearchBar } from '@gpa-gemstone/react-interactive';
import { Column, Paging, ConfigurableTable, ConfigurableColumn } from "@gpa-gemstone/react-table";
import * as _ from 'lodash';
import { Application, OpenXDA, SystemCenter } from '@gpa-gemstone/application-typings';

declare let homePath: string;

interface IProps {
    setMeter: (meter: OpenXDA.Types.Meter) => void,
    selectedMeter: OpenXDA.Types.Meter
}

const PagingID = 'SelectMeterPagingID';
const defaultFilter: Search.IFilter<OpenXDA.Types.Meter> = {
    FieldName: 'ID',
    SearchText: ' (SELECT MeterID FROM [MiMD.ComplianceMeter])',
    Operator: 'NOT IN',
    Type: 'query',
    IsPivotColumn: false
};
const standardSearch: Search.IField<OpenXDA.Types.Meter>[] = [
    { key: 'Name', label: 'Name', type: 'string', isPivotField: false },
    { key: 'AssetKey', label: 'Asset Key', type: 'string', isPivotField: false },
    { key: 'Make', label: 'Make', type: 'string', isPivotField: false },
    { key: 'Model', label: 'Model', type: 'string', isPivotField: false },
];

const SelectMeter = (props: IProps) => {
    const [sortKey, setSortKey] = React.useState<keyof OpenXDA.Types.Meter>("Name");
    const [filters, setFilters] = React.useState<Search.IFilter<OpenXDA.Types.Meter>[]>([]);
    const [meterData, setMeterData] = React.useState<OpenXDA.Types.Meter[]>([]);
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [searchStatus, setSearchStatus] = React.useState<Application.Types.Status>('idle');
    const [filterableList, setFilterableList] = React.useState<Search.IField<OpenXDA.Types.Meter>[]>(standardSearch);

    const [page, setPage] = React.useState<number>(0);
    const [pageInfo, setPageInfo] = React.useState<{ RecordsPerPage: number, NumberOfPages: number, TotalRecords: number }>({ RecordsPerPage: 0, NumberOfPages: 0, TotalRecords: 0 });

    React.useEffect(() => {
        let storedInfo = JSON.parse(localStorage.getItem(PagingID) as string);
        if (storedInfo == null || storedInfo == 0) return; // page 0 means it's on a real page
        if (storedInfo + 1 > pageInfo.NumberOfPages) {
            storedInfo = Math.max(0, pageInfo.NumberOfPages - 1);
            localStorage.setItem(PagingID, `${storedInfo}`);
        }
        setPage(storedInfo);
    }, [pageInfo.TotalRecords]); // Make sure user is still on a real page when data is deleted or filtered out

    React.useEffect(() => {
        localStorage.setItem(`${PagingID}/Page`, JSON.stringify(page));
    }, [page]);

    React.useEffect(() => {
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
                { label: `[AF${item.ExternalDB != undefined ? " " + item.ExternalDB : ''}] ${item.FieldName}`, key: item.FieldName, ...ConvertType(item.Type), isPivotField: true } as Search.IField<OpenXDA.Types.Meter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });
        return () => { if (handle.abort != null) handle.abort() }
    }, []);

    React.useEffect(() => {
        setSearchStatus('loading');
        const handle = $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/Meter/PagedList/${page}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: [...filters, defaultFilter], OrderBy: sortKey, Ascending: ascending }),
            cache: false,
            async: true
        }).done((result) => {
            setMeterData(JSON.parse(result.Data as unknown as string));
            setPageInfo({
                RecordsPerPage: result.RecordsPerPage,
                NumberOfPages: result.NumberOfPages,
                TotalRecords: result.TotalRecords
            });
            setSearchStatus('idle');
        }).fail(() => setSearchStatus('error'));
        return () => { if (handle != null && handle?.abort != null) handle.abort(); }
    }, [filters, sortKey, ascending, page]);

    //List of meters to Select From
    return (<>
        <SearchBar<OpenXDA.Types.Meter> SetFilter={setFilters} CollumnList={filterableList}
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
            ResultNote={searchStatus == 'error' ? 'Could not complete Search' : 'Found ' + meterData.length + ' Meters'}
            ShowLoading={searchStatus == 'loading'}
        />
        <div className="row" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div className="col" style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
                <ConfigurableTable<OpenXDA.Types.Meter>
                    TableClass="table table-hover"
                    LocalStorageKey='SelectMeterTable'
                    Data={meterData}
                    SortKey={sortKey}
                    Ascending={ascending}
                    OnSort={(d) => {
                        if (d.colField == sortKey) {
                            setAscending(!ascending);
                        }
                        else {
                            setAscending(true);
                            setSortKey(d.colField);
                        }
                    }}
                    OnClick={(d) => { props.setMeter(d.row); }}
                    TheadStyle={{ fontSize: 'smaller' }}
                    RowStyle={{ fontSize: 'smaller' }}
                    Selected={(item) => item.ID === (props.selectedMeter == undefined ? -1 : props.selectedMeter.ID)}
                    KeySelector={item => item.ID}
                >
                    <ConfigurableColumn Default={false} Key="AssetKey" Label="Asset">
                        <Column<OpenXDA.Types.Meter>
                            Key="AssetKey"
                            Field="AssetKey"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                        > Asset
                        </Column>
                    </ConfigurableColumn>
                    <ConfigurableColumn Default={true} Key="Name" Label="Name">
                        <Column<OpenXDA.Types.Meter>
                            Key="Name"
                            Field="Name"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                        > Meter
                        </Column>
                    </ConfigurableColumn>
                    <ConfigurableColumn Default={false} Key="Alias" Label="Alias">
                        <Column<OpenXDA.Types.Meter>
                            Key="Alias"
                            Field="Alias"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                        > Alias
                        </Column>
                    </ConfigurableColumn>
                    <ConfigurableColumn Default={false} Key="ShortName" Label="Short Name">
                        <Column<OpenXDA.Types.Meter>
                            Key="ShortName"
                            Field="ShortName"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                        > Short Name
                        </Column>
                    </ConfigurableColumn>
                    <ConfigurableColumn Default={true} Key="Model" Label="Model">
                        <Column<OpenXDA.Types.Meter>
                            Key="Model"
                            Field="Model"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                        > Model
                        </Column>
                    </ConfigurableColumn>
                    <ConfigurableColumn Default={true} Key="Make" Label="Make">
                        <Column<OpenXDA.Types.Meter>
                            Key="Make"
                            Field="Make"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                        > Make
                        </Column>
                    </ConfigurableColumn>
                    <ConfigurableColumn Default={false} Key="TimeZone" Label="TimeZone">
                        <Column<OpenXDA.Types.Meter>
                            Key="TimeZone"
                            Field="TimeZone"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                        > TimeZone
                        </Column>
                    </ConfigurableColumn>
                    <ConfigurableColumn Default={false} Key="Description" Label="Description">
                        <Column<OpenXDA.Types.Meter>
                            Key="Description"
                            Field="Description"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                        > Description
                        </Column>
                    </ConfigurableColumn>
                </ConfigurableTable>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Paging Current={page + 1} Total={pageInfo.NumberOfPages} SetPage={(p) => setPage(p - 1)} />
            </div>
        </div>
    </>);
}


export default SelectMeter;

