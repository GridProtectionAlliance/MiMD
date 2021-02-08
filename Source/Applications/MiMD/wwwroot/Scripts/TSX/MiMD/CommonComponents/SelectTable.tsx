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
import { bool } from 'prop-types';
import { ascending } from 'd3';

export interface ISelectTableProps<T> extends TableProps<T> {
    onSelection: (selected: T[]) => void;
}

interface K<T> { enabled: boolean, item: T }

export default class SelectTable<T> extends React.Component<ISelectTableProps<T>, { data: K<T>[], sortField: keyof T,ascending: boolean}> {
    constructor(props: ISelectTableProps<T>) {
        super(props, { data: [], sortField: props.sortField, ascending: props.ascending });
    }

    handleClick(
        data: { col: keyof T; row: T; data: any },
        event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>,
    ) {
        this.setState((old) => {
            let update = [...old.data];
            let r = update.find(item => item.item == data.data);
            r.enabled = !r.enabled;
            this.props.onSelection(update.filter(item => item.enabled).map(item => item.item));
            return { data: update }
        })
    }

    handleSort(
        data: { col: keyof T; ascending: boolean },
    ) {
        if (data.col == this.state.sortField) {
            this.setState({ ascending: !this.state.ascending });
        }
        else {
            this.setState({ ascending: this.state.ascending, sortField: data.col })

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.data !== prevProps.data) {
            this.setState({
                data: this.props.data.map(item => ({ enabled: false, item: item }))
            });
        }
        if (this.state.ascending != prevState.ascending || this.state.sortField != prevState.sortField) {
            this.setState((lst) => ({ data: _.orderBy(lst.data, [lst.sortField], [(lst.ascending ? "asc" : "desc")]) }))
        }
    }

    render() {

        let tableProps: TableProps<T> = {
            cols: [...this.props.cols,
            { key: null, label: '', headerStyle: { width: '3.5em' }, rowStyle: { width: '3.5em' }, content: (item, key, style) => (this.state.data.find(i => i.item == item).enabled ? <div style={{ marginTop: '16px', textAlign: 'center' }}><i className="fa fa-check-square-o fa-3x" aria-hidden="true"></i></div> : null)}
            ],
            data: this.state.data.map(item => item.item),
            onClick: this.handleClick,
            sortField: this.state.sortField.toString(),
            ascending: this.state.ascending,
            onSort: this.handleSort,
            tableClass: this.props.tableClass,
            tableStyle: this.props.tableStyle,
            theadStyle: this.props.theadStyle,
            theadClass: this.props.theadClass,
            tbodyStyle: this.props.tbodyStyle,
            tbodyClass: this.props.tbodyClass,
            selected: (d: T) => false,
            rowStyle: this.props.rowStyle,
        };

        return <Table {...tableProps} />

           
    }
};
