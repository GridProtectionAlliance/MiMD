//******************************************************************************************************
//  BaseConfigTable.tsx - Gbtc
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
//  03/16/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { PRC002 } from '../ComplianceModels';
import { Input } from '@gpa-gemstone/react-forms';
import Table from '@gpa-gemstone/react-table';
import ConfigFieldValueTableField from './ConfigFieldValueTableField';

declare var homePath: string;

interface IProps {
    Config: PRC002.IBaseConfig,
    Fields: PRC002.IConfigField[],
    OnEdit?: (record: PRC002.IConfigField) => void,
    OnRemove?: (record: PRC002.IConfigField) => void,
    OnNew?: () => void,
}

const BaseConfigTable = (props: IProps) => {

    const [categorys, setCategorys] = React.useState<string[]>([]);
    const [orderedFields, setOrderedFields] = React.useState<PRC002.IConfigField[][]>([]);

    React.useEffect(() => {
        let cat = _.uniq(props.Fields.map(f => f.Category));
        let flds = cat.map(item => []);
        props.Fields.forEach(fld => {
            let i = cat.findIndex(c => fld.Category == c);
            flds[i].push(fld);
        });
        setCategorys(cat);
        setOrderedFields(flds);
    }, [props.Fields])

    return (<>
        <div className="card-header">
            <h4> Configuration {props.Config.Name}</h4>
        </div>
        <div className={"card-body"} >
            <div style={{ height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, overflowY: 'scroll' }}>
                <Input<PRC002.IBaseConfig> Record={props.Config} Field={'Pattern'} Setter={() => { }} Valid={() => true} Label={'File Pattern'} Disabled={true} />
                <div className="accordion">
                    {categorys.map((key, index) => <CategorySection Title={key} key={index} Fields={orderedFields[index]} OnEdit={props.OnEdit} OnRemove={props.OnRemove} />)}
                </div>
             </div>
        </div>
        <div className={"card-footer"}>
            {props.OnNew != undefined ? <button type="button" className="btn btn-primary btn-sm" onClick={() => props.OnNew()}>Add new Field </button> : null}
        </div>
        </>)
    
    
}


const CategorySection = (props: { Title: string, Fields: PRC002.IConfigField[], OnEdit?: (record: PRC002.IConfigField) => void, OnRemove?: (record: PRC002.IConfigField) => void }) => {
    const [show, setShow] = React.useState<boolean>(false);
    const [sortField, setSortField] = React.useState<string>('');
    const [ascending, setAscending] = React.useState<boolean>(false);
    const [fields, setFields] = React.useState<PRC002.IConfigField[]>(props.Fields)

    React.useEffect(() => {
        setFields((flds) => _.orderBy(flds, [sortField], [(ascending ? "asc" : "desc")]));
    }, [sortField, ascending])

    React.useEffect(() => {
        setFields(props.Fields);
    }, [props.Fields])

    return (<>
        <div className="card">
            <h2 className="card-header">
                <button className={"btn btn-link btn-block text-left"} type="button" onClick={() => setShow(!show)}>
                    {props.Title == undefined || props.Title.length == 0? 'Unknown Section' : props.Title}
                </button>
            </h2>
            <div className={"collapse" + (show ? " show" : '')} >
                <div className="card-body">
                    <Table<PRC002.IConfigField>
                        cols={[
                            { key: 'Label', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em - 130px)' }, rowStyle: { width: 'calc(30% - 8.25em - 130px)' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Label'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                            { key: 'FieldType', label: 'Type', headerStyle: { width: '8em' }, rowStyle: { width: '8em' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'FieldType'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                            { key: 'Comparison', label: '', headerStyle: { width: '5em' }, rowStyle: { width: '5em' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Comparison'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                            {
                                key: 'Value', label: 'Value', headerStyle: { width: 'calc(60% - 8.25em)' }, rowStyle: { width: 'calc(60% - 8.25em)' }, content: (item, key, style) => <ConfigFieldValueTableField Record={item} />
                            },
                            {
                                key: null, label: '', headerStyle: { width: '130px' }, rowStyle: { width: '130px' }, content: (item, key, style) => <>
                                    {props.OnEdit != undefined ? <button style={{ marginTop: '16px', textAlign: 'center' }} className="btn btn-sm" onClick={(e) => props.OnEdit(item)}>
                                        <span><i style={{ color: '#007BFF' }} className="fa fa-pencil-square fa-3x"></i></span>
                                    </button> : null}
                                    {props.OnRemove != undefined ? <button style={{ marginTop: '16px', textAlign: 'center' }} className="btn btn-sm" onClick={(e) => props.OnRemove(item)}>
                                        <span><i className="fa fa-times fa-3x"></i></span>
                                    </button> : null}
                                </>
                            }
                        ]}
                        tableClass="table table-hover"
                        data={fields}
                        sortField={sortField}
                        ascending={ascending}
                        onSort={(d) => {
                            if (d.col == sortField)
                                setAscending(!ascending);

                            else {
                                setAscending(!ascending);
                                setSortField(d.col);
                            }
                        }}
                        onClick={(d) => { }}
                        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        tbodyStyle={{ display: 'block', width: '100%' }}
                        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        selected={(item) => false}
                    />
                </div>
            </div>
        </div>
    </>)

}



export default BaseConfigTable;
