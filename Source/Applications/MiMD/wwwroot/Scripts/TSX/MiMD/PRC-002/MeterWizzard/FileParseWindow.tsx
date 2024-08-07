﻿//******************************************************************************************************
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
import { SelectTable } from '@gpa-gemstone/react-table'
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
                {[...allFields.keys()].map((key, index) => <HeaderSection Title={key} key={index} fields={allFields.get(key)} setFields={(flds: PRC002.IConfigField[]) => { setSelectedFields((old) => { const updated = _.cloneDeep(old); updated.set(key, flds); return updated; }) }} />)}
            </div>
            
        </>)
}

const HeaderSection = (props: { Title: string, fields: PRC002.IConfigField[], setFields: React.Dispatch<React.SetStateAction<PRC002.IConfigField[]>> }) => {
    const [show, setShow] = React.useState<boolean>(false);
    const [selectAll, setSelectAll] = React.useState<number>(0);
    const [allSelected, setAllSelected] = React.useState<boolean>(false);

    return (<>
        <div className="card">
            <h2 className="card-header" style={{ display: 'flex' }}>
                <button className={"btn btn-link btn-block text-left col-10"} type="button" onClick={() => setShow(!show)}>
                    {props.Title}
                </button>
                <button className={"btn text-left btn-bloc col-2 " + (allSelected ? "btn-primary" : "btn-outline-primary")} type="button" onClick={() => setSelectAll((x) => x + 1)}> {allSelected ? "DeSelect All" : "Select All"} </button>
            </h2>
            <div className={"collapse" + (show? " show": '')}>
                <div className="card-body">
                    <SelectTable<PRC002.IConfigField>
                        cols={[
                            { key: 'Label', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em)' }, rowStyle: { width: 'calc(30% - 8.25em)' }, content: (item) => <Input<PRC002.IConfigField> Record={item} Field={'Label'} Disabled={true} Label={''} Setter={() => { }} Valid={() => true} /> },
                            { key: 'FieldType', label: 'Type', headerStyle: { width: '8em' }, rowStyle: { width: '8em' }, content: (item) => <Input<PRC002.IConfigField> Record={item} Field={'FieldType'} Disabled={true} Label={''} Setter={() => { }} Valid={() => true} /> },
                            { key: 'Comparison', label: '', headerStyle: { width: '5em' }, rowStyle: { width: '5em' }, content: (item) => <Input<PRC002.IConfigField> Record={item} Field={'Comparison'} Disabled={true} Label={''} Setter={() => { }} Valid={() => true} /> },
                            {key: 'Value', label: 'Value', headerStyle: { width: 'calc(70% - 8.25em)' }, rowStyle: { width: 'calc(70% - 8.25em)' }, content: (item) => <ConfigFieldValueTableField Record={item}/>},
                        ]}
                        KeyField={'ID'}
                        tableClass="table table-hover"
                        data={props.fields}
                        sortKey={'Category'}
                        ascending={true}
                        selectAllCounter={selectAll}
                        onSelection={(d) => {
                            if (d.length == props.fields.length)
                                setAllSelected(true);
                            else
                                setAllSelected(false);
                            props.setFields(d)
                        }}
                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        tbodyStyle={{ display: 'block', width: '100%' }}
                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    /> 
                </div>
            </div>
        </div>
        </>)

}


export default FileParseWindow;

