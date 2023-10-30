//******************************************************************************************************
//  HelperTable.tsx - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  10/23/2023 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '@gpa-gemstone/react-table';
import { Modal } from "@gpa-gemstone/react-interactive"

interface IDocumentation { Name: string, Description: string, Example: string }
interface FunctionHelpProps {
    IsOpen: boolean;
    onClose: () => void;
    Title: string;
    Data: IDocumentation[];
    NameLabel?: string;
}

export const HelperTable = (props: FunctionHelpProps) => {

    const codeStyle = {
        borderRadius: '5px',
        padding: '5px',
        fontFamily: 'math',
        background: '#bfbfbf',
        border: '1px solid'
    }

    return (
        <Modal
            Title={props.Title}
            Show={props.IsOpen}
            CallBack={(confirmed, isButton) => { if (!confirmed) props.onClose(); }}
            Size='lg'
            ShowX={true}
            ShowCancel={false}
            ConfirmBtnClass={"d-none"}
        >
            <Table<IDocumentation> cols={[
                { key: 'Name', label: props.NameLabel ? props.NameLabel : 'Expression', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <p> {item.Name}</p> },
                { key: 'Description', label: 'Description', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <p> {item.Description}</p> },
                { key: 'Example', label: 'Example', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <p style={codeStyle}> {item.Example}</p> },
            ]}
                tableClass="table table-striped"
                data={[...props.Data]}
                sortKey={''}
                ascending={true}
                onSort={() => { }}
                onClick={() => { }}
                theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 500, width: '100%' }}
                rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                selected={() => false}
            />
        </Modal>
    )
}


