//******************************************************************************************************
//  FunctionHelp.tsx - Gbtc
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
//  12/05/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '@gpa-gemstone/react-table';


interface IDocumentation { Name: string, Description: string, Example: string }
interface FunctionHelpProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DynamicHelper = ({ isOpen, onClose }: FunctionHelpProps) => {

    const codeStyle = {
        borderRadius: '5px',
        padding: '5px',
        fontFamily: 'math',
        background: '#bfbfbf',
        border: '1px solid'
    }

    return (
        <div className={`modal fade ${isOpen ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog" style={{ maxWidth: window.innerWidth - 200 }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Dynamic Expression Examples</h4>
                        <button type="button" className="close" onClick={onClose}>&times;</button>
                    </div>
                    <div className="modal-body" >
                        <Table<IDocumentation> cols={[
                            { key: 'Name', label: 'Expression', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <p> {item.Name}</p> },
                            { key: 'Description', label: 'Description', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <p> {item.Description}</p> },
                            { key: 'Example', label: 'Example', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <p style={codeStyle}> {item.Example}</p> },
                        ]}
                            tableClass="table table-striped"
                            data={[...data]}
                            sortKey={''}
                            ascending={true}
                            onSort={() => { }}
                            onClick={() => { }}
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 500, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            selected={() => false}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

const data = [
    { Name: 'PreVal', Description: 'The previous value of your config file value', Example: 'PreVal' },
    { Name: '+, -', Description: 'Additive', Example: '100 + 7' },
    { Name: '*, /, %', Description: 'Multiplicative', Example: '100 * 2 / (3 % 2)' },
    { Name: '^', Description: 'Power', Example: '2 ^ 16' },
    { Name: '-', Description: 'Negation', Example: '-6 + 10' },
    { Name: '+', Description: 'String Concatenation', Example: '"abc" + "def"' },
    { Name: '<<, >>', Description: 'Shift', Example: '0x80 >> 2' },
    { Name: '=, <>, <, >, <=, >=', Description: 'Comparison', Example: '2.5 > 100' },
    { Name: 'And, Or, Xor, Not', Description: 'Logical', Example: '(1 > 10) and (true or not false)' },
    { Name: 'And, Or, Xor, Not', Description: 'Bitwise', Example: '100 And 44 or (not 255)' },
    { Name: 'If', Description: 'Conditional', Example: 'If(a > 100, "greater", "less")' },
    { Name: 'Cast', Description: 'Cast and conversion', Example: 'cast(100.25, int)' },
    { Name: 'String literal', Description: '', Example: '"string!"' },
    { Name: 'Char literal', Description: '', Example: '\'c\'' },
    { Name: 'Boolean literal', Description: '', Example: 'true AND false' },
    { Name: 'Real literal', Description: 'Double and single', Example: '100.25 + 100.25f' },
    { Name: 'Integer literal', Description: 'Signed/unsigned 32/64 bit', Example: '100 + 100U + 100L + 100LU' },
    { Name: 'Hex literal', Description: '', Example: '0xFF + 0xABCDU + 0x80L + 0xC9LU' }
]
