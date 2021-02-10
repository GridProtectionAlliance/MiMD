//******************************************************************************************************
//  SelectTable.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/22/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import Table, { TableProps } from '@gpa-gemstone/react-table'
import { selection } from 'd3';


export interface ISelectTableProps<T> extends TableProps<T> {
    onSelection: (selected: T[]) => void;
    keyField: keyof T,
}

export default function SelectTable<T>(props: ISelectTableProps<T>) {

    const [data, setData] = React.useState<T[]>(props.data);
    const [selected, setSelected] = React.useState<any[]>([]);

    const [sortField, setSortField] = React.useState<string>(props.sortField);
    const [ascending, setAscending] = React.useState<boolean>(props.ascending);

    React.useEffect(() => {
        if (props.data.length != data.length)
            setData(props.data);
    }, [props.data]);

    React.useEffect(() => {
        setSelected((d) => d.filter(keyItem => data.findIndex(item => item[props.keyField] == keyItem) > -1))
    }, [data]);

    React.useEffect(() => {
        setData((lst) => (_.orderBy(lst, [sortField], [(ascending ? "asc" : "desc")])))
    }, [ascending, sortField]);

    React.useEffect(() => {
        props.onSelection(data.filter(item => selected.findIndex(key => key == item[props.keyField]) > -1));
    }, [selected])

    function handleClick(
        d: { col: keyof T; row: T; data: any },
        event: React.MouseEvent < HTMLTableHeaderCellElement, MouseEvent >,
    ) {
        let sIndex = selected.findIndex(item => item == d.row[props.keyField]);
        if (sIndex == -1)
            setSelected((od) => [...od, d.row[props.keyField]])
        else
            setSelected((od) => od.filter(item => item != d.row[props.keyField]));
    }

    function handleSort(
        data: { col: keyof T; ascending: boolean },
    ) {
        if (data.col == sortField)
            setAscending(!ascending);
        else 
            setSortField(data.col as string);
    }

    const tableProps: TableProps<T> = {
        cols: [
            { key: null, label: '', headerStyle: { width: '4em' }, rowStyle: { width: '4em' }, content: (item, key, style) => (selected.findIndex(i => i == item[props.keyField]) > -1 ? <div style={{ marginTop: '16px', textAlign: 'center' }}><i className="fa fa-check-square-o fa-3x" aria-hidden="true"></i></div> : null) },
            ...props.cols
        ],
        data: data,
        onClick: handleClick,
        sortField: sortField,
        ascending: ascending,
        onSort: handleSort,
        tableClass: props.tableClass,
        tableStyle: props.tableStyle,
        theadStyle: props.theadStyle,
        theadClass: props.theadClass,
        tbodyStyle: props.tbodyStyle,
        tbodyClass: props.tbodyClass,
        selected: (d: T) => false,
        rowStyle: props.rowStyle
    };

    return <Table {...tableProps} />;

}

