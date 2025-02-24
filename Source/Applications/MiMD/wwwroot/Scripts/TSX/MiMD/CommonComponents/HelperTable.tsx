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
import { Table, Column } from '@gpa-gemstone/react-table';
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
    return (
        <Modal
            Title={props.Title}
            Show={props.IsOpen}
            CallBack={(confirmed, isButton) => { if (!confirmed) props.onClose(); }}
            Size='lg'
            ShowX={true}
            ShowCancel={false}
            ShowConfirm={false}
            ConfirmBtnClass={"d-none"}
        >
            <Table<IDocumentation>
                TableClass="table table-striped"
                Data={props.Data}
                SortKey={''}
                Ascending={true}
                OnSort={() => { }}
                OnClick={() => { }}
                TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                TbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 500, width: '100%' }}
                RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                Selected={() => false}
                KeySelector={(_item, index) => index}
            >
                <Column<IDocumentation>
                    Key="Name"
                    Field="Name"
                    AllowSort={false}
                    HeaderStyle={{ width: 'auto' }}
                    RowStyle={{ width: 'auto' }}
                    Content={(row) => (<p> {row.item.Name}</p>)}
                > {props.NameLabel ? props.NameLabel : 'Expression'}
                </Column>
                <Column<IDocumentation>
                    Key="Description"
                    Field="Description"
                    AllowSort={false}
                    HeaderStyle={{ width: 'auto' }}
                    RowStyle={{ width: 'auto' }}
                    Content={(row) => (<p> {row.item.Description}</p>)}
                > Description
                </Column>
                <Column<IDocumentation>
                    Key="Example"
                    Field="Example"
                    AllowSort={false}
                    HeaderStyle={{ width: 'auto' }}
                    RowStyle={{ width: 'auto' }}
                    Content={(row) => (<p style={{
                        borderRadius: '5px',
                        padding: '5px',
                        fontFamily: 'math',
                        background: '#bfbfbf',
                        border: '1px solid'
                    }}> {row.item.Example}</p>)}
                > Example
                </Column>
            </Table>
        </Modal>
    );
}


