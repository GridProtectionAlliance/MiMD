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
import { PRC002 } from '../ComplianceModels';
import { Search, SearchBar } from '@gpa-gemstone/react-interactive';
import Table from '@gpa-gemstone/react-table';
import * as _ from 'lodash';

declare var homePath: string;

interface IProps { setMeter: (meter: PRC002.IMeter) => void, selectedMeter: PRC002.IMeter }

const standardSearch: Search.IField<MiMD.Meter>[] = [
    { key: 'Name', label: 'Name', type: 'string' },
    { key: 'AssetKey', label: 'Asset Key', type: 'string' },
    { key: 'Make', label: 'Make', type: 'string' },
    { key: 'Model', label: 'Model', type: 'string' },
];

const SelectMeter = (props: IProps) => {

    const [MeterList, setMeterList] = React.useState<Array<PRC002.IMeter>>([]);
    const [meterFilter, setMeterFilter] = React.useState<Array<Search.IFilter<PRC002.IMeter>>>([]);
    const [meterSort, setMeterSort] = React.useState<keyof PRC002.IMeter>("Name");
    const [meterAsc, setMeterAsc] = React.useState<boolean>(false);

    const [filterableList, setFilterableList] = React.useState<Array<Search.IField<MiMD.Meter>>>(standardSearch);
  
    
    React.useEffect(() => {
        let handleMeterList = getMeterList();
        
        return () => {
            if (handleMeterList != null && handleMeterList.abort != null) handleMeterList.abort();
        }
    }, [props, meterAsc, meterSort, meterFilter]);

    function getMeterList(): JQuery.jqXHR<Array<PRC002.IMeter>> {
        let handle = $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/ComplianceMeter/SelectableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: meterFilter, OrderBy: meterSort, Ascending: meterAsc }),
            cache: false,
            async: true
        });

        handle.done((data: Array<PRC002.IMeter>) => {
            setMeterList(data)
        });

        return handle;
    }

    React.useEffect(() => {
        let handle = getAdditionalFields();

        return () => {
            if (handle.abort != null) handle.abort();
        }
    }, []);

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
                type: 'enum', enum: [{ Label: type, Value: type }]
            }
        }

        handle.done((d: Array<MiMD.AdditionalField>) => {
            let ordered = _.orderBy(standardSearch.concat(d.map(item => (
                { label: item.FieldName, key: item.FieldName, ...ConvertType(item.Type) } as Search.IField<MiMD.Meter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }
    //List of meters to Select From
      return (
          <>
              <SearchBar<PRC002.IMeter> SetFilter={setMeterFilter} CollumnList={filterableList}
                  defaultCollumn={{ key: 'Name', label: 'Name', type: 'string' }}
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
                          handle.done(d => setOptions(d.map(item => ({ Value: item.Value.toString(), Label: item.Text }))))
                          return () => { if (handle != null && handle.abort == null) handle.abort(); }

                      }}>
               </SearchBar>
                  <div style={{ height: 'calc( 100% - 136px)', padding: 0 }}>
                      <Table<PRC002.IMeter>
                      cols={[
                          { key: 'Name', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                          { key: 'Model', label: 'Model', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                          { key: 'Make', label: 'Make', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                      ]}
                          tableClass="table table-hover"
                          data={MeterList}
                          sortField={meterSort}
                          ascending={meterAsc}
                          onSort={(d) => {
                              if (d.col == meterSort)
                                  setMeterAsc(!meterAsc);
                              else
                                  setMeterSort(d.col);
                          }}
                          onClick={(d) => { props.setMeter(d.row); }}
                          theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                          tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 550, width: '100%' }}
                          rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                          selected={(item) => item.ID === (props.selectedMeter == undefined ? -1 : props.selectedMeter.ID)}
                      />
            </div>
        </>
    )
}


export default SelectMeter;

