//******************************************************************************************************
//  FileParseWindow.tsx - Gbtc
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
//  03/15/2021 - C. Lackner
//       Generated original version of source cod
//
//******************************************************************************************************

import * as React from 'react';

import * as _ from 'lodash';
import * as PRC002 from '../ComplianceModels';
import { Input } from '@gpa-gemstone/react-forms';
import { Table, Column } from '@gpa-gemstone/react-table'
import ConfigFieldValueTableField from '../Common/ConfigFieldValueTableField';


interface IProps {
    Fields: PRC002.IConfigField[],
    setSelectedFields: (d: PRC002.IConfigField[]) => void,
}


const FileParseWindow = (props: IProps) => {
    const [allFields, setAllFields] = React.useState<Map<string, PRC002.IConfigField[]>>(new Map<string, PRC002.IConfigField[]>())
    const [selectedFields, setSelectedFields] = React.useState<Map<string, PRC002.IConfigField[]>>(new Map<string, PRC002.IConfigField[]>())

    React.useEffect(() => {
        const map = new Map<string, PRC002.IConfigField[]>();

        props.Fields.forEach(item => {
            if (map.has(item.Category))
                map.get(item.Category).push(item);
            else
                map.set(item.Category, [item]);
        })
        setAllFields(map);
        setSelectedFields(new Map<string, PRC002.IConfigField[]>())
    }, [props.Fields]);

    React.useEffect(() => {
        const lst = [].concat(...[...selectedFields.keys()].map(item => selectedFields.get(item)));
        props.setSelectedFields(lst);
    }, [selectedFields])

    return (
        <>
            <div className="accordion" style={{ maxHeight: window.innerHeight - 300, overflowY: 'scroll'}}>
                {[...allFields.keys()].map((key, index) =>
                (<HeaderSection Title={key} key={index} fields={allFields.get(key)}
                    setSelectedFields={(flds: PRC002.IConfigField[]) => { setSelectedFields((old) => { const updated = _.cloneDeep(old); updated.set(key, flds); return updated; }) }}
                    selectedFields={selectedFields.get(key)}
                />))}
            </div>
            
        </>)
}

interface IHeaderProps {
    Title: string,
    fields: PRC002.IConfigField[],
    setSelectedFields: (list: PRC002.IConfigField[]) => void,
    selectedFields?: PRC002.IConfigField[]
}

const HeaderSection = (props: IHeaderProps) => {
    const [show, setShow] = React.useState<boolean>(false);
    const [allSelected, setAllSelected] = React.useState<boolean>(false);

    return (<>
        <div className="card">
            <h2 className="card-header" style={{ display: 'flex' }}>
                <button className={"btn btn-link btn-block text-left col-10"} type="button" onClick={() => setShow(!show)}>
                    {props.Title}
                </button>
                <button className={"btn text-left btn-bloc col-2 " + (allSelected ? "btn-primary" : "btn-outline-primary")} type="button"
                    onClick={() => {
                        if (allSelected) props.setSelectedFields([]);
                        else props.setSelectedFields(props.fields);
                        setAllSelected(a => !a);
                }}> {allSelected ? "DeSelect All" : "Select All"} </button>
            </h2>
            <div className={"collapse" + (show? " show": '')}>
                <div className="card-body">
                    <Table<PRC002.IConfigField>
                        TableClass="table table-hover"
                        Data={props.fields}
                        SortKey={'ID'}
                        Ascending={true}
                        OnClick={(d) => {
                            const newList = _.cloneDeep(props.selectedFields ?? []);

                            // Add/remove item from selected
                            const index = newList.findIndex(field => field.ID === d.row.ID);
                            if (index > -1) newList.splice(index, 1);
                            else newList.push(d.row);

                            props.setSelectedFields(newList);

                            // Toggle allSelected
                            if (newList.length == props.fields.length)
                                setAllSelected(true);
                            else
                                setAllSelected(false);
                        }}
                        OnSort={() => { /* Do nothing */ }}
                        TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        TbodyStyle={{ display: 'block', width: '100%' }}
                        RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        KeySelector={item => item.ID}
                        Selected={item => (props.selectedFields?.findIndex(selected => selected.ID === item.ID) ?? -1) > -1 }
                    >
                        <Column<PRC002.IConfigField>
                            Key='Label'
                            AllowSort={false}
                            HeaderStyle={{ width: 'calc(30% - 8.25em)' }}
                            RowStyle={{ width: 'calc(30% - 8.25em)' }}
                            Content={(row) => <Input<PRC002.IConfigField> Record={row.item} Field={'Label'} Disabled={true} Label={''} Setter={() => { }} Valid={() => true} />}
                        >
                            Field
                        </Column>
                        <Column<PRC002.IConfigField>
                            Key='FieldType'
                            AllowSort={false}
                            HeaderStyle={{ width: '8em' }}
                            RowStyle={{ width: '8em' }}
                            Content={(row) => <Input<PRC002.IConfigField> Record={row.item} Field={'FieldType'} Disabled={true} Label={''} Setter={() => { }} Valid={() => true} />}
                        >
                            Type
                        </Column>
                        <Column<PRC002.IConfigField>
                            Key='Comparison'
                            AllowSort={false}
                            HeaderStyle={{ width: '5em' }}
                            RowStyle={{ width: '5em' }}
                            Content={(row) => <Input<PRC002.IConfigField> Record={row.item} Field={'Comparison'} Disabled={true} Label={''} Setter={() => { }} Valid={() => true} />}
                        >
                            &nbsp;
                        </Column>
                        <Column<PRC002.IConfigField>
                            Key='Value'
                            AllowSort={false}
                            HeaderStyle={{ width: 'calc(70% - 8.25em)' }}
                            RowStyle={{ width: 'calc(70% - 8.25em)' }}
                            Content={(row) => <ConfigFieldValueTableField Record={row.item} />}
                        >
                            Value
                        </Column>
                    </Table>
                </div>
            </div>
        </div>
        </>)

}


export default FileParseWindow;

