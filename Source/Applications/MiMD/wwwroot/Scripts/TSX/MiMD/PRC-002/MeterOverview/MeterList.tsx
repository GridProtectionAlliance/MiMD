//******************************************************************************************************
//  MeterList.tsx - Gbtc
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
import Table from '../../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { MiMD } from '../../global';
import FormSelect from '../../CommonComponents/FormSelect';
import FormInput from '../../CommonComponents/FormInput';
import FormCheckBox from '../../CommonComponents/FormCheckBox';
import { PRC002 } from '../ComplianceModels';
import { Filter } from './MeterFilter';
declare var homePath: string;

interface IProps {
    SelectedMeterId: number,
    SelectMeter: (id: number) => void,
    StatusList: Array<PRC002.IStatus>,
    Filter: Array<Filter>
}

export const MeterList = (props: IProps) => {
    const [meterSort, setMeterSort] = React.useState<keyof PRC002.IMeter>("Status");
    const [meterAsc, setMeterAsc] = React.useState<boolean>(false);
    const [meterList, setMeterList] = React.useState<Array<PRC002.IMeter>>([])

    React.useEffect(() => {
        
        let handleMeterList = getData();

        return () => {
            if (handleMeterList.abort != null) handleMeterList.abort();
        }
    }, [props.Filter]);

    function getData(): JQuery.jqXHR<Array<PRC002.IMeter>> {
        let handle = $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/ComplianceMeter/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: props.Filter, OrderBy: meterSort, Ascending: meterAsc }),
            cache: false,
            async: true
        });

        handle.done((data: Array<PRC002.IMeter>) => {
            setMeterList(data)
        });

        return handle;
    }

    return (
        <Table
            cols={[
                {
                    key: 'Status', label: 'Status', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => {
                        let stat = props.StatusList.find(s => s.ID === item.StatusID);

                        return <div style={{
                            fontWeight: 600,
                            width: '90%',
                            height: '35px',
                            background: (stat == undefined ? '#f8f9fa' : stat.Color),
                            border: '2px solid',
                            borderRadius: '5px',
                            textAlign: 'center',
                            lineHeight: '35px',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            color: (stat == undefined ? '#212529' : stat.TextColor),
                        }}> {item.Status} </div>
                    }
                },
                { key: 'AssetKey', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                { key: 'Model', label: 'Model', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                { key: 'Make', label: 'Make', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
            ]}
            tableClass="table table-hover"
            data={meterList}
            sortField={meterSort}
            ascending={meterAsc}
            onSort={(d) => {
                if (d.col == meterSort) {
                    setMeterAsc(!meterAsc);
                    getData();
                }
                else {
                    setMeterAsc(meterAsc);
                    setMeterSort(d.col);
                    getData();
                }
            }}
            onClick={(d) => { props.SelectMeter(d.row.ID); }}
            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
            selected={(item) => item.ID === props.SelectedMeterId}
        />
    )
}
