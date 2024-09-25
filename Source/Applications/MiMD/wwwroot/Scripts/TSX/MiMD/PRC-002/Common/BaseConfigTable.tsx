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
import * as PRC002 from '../ComplianceModels';
import { Input } from '@gpa-gemstone/react-forms';
import { ReactTable } from "@gpa-gemstone/react-table";
import ConfigFieldValueTableField from './ConfigFieldValueTableField';
import { ReactIcons } from "@gpa-gemstone/gpa-symbols";


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
        const cat = _.uniq(props.Fields.map(f => f.Category));
        const flds = cat.map(() => []);
        props.Fields.forEach(fld => {
            const i = cat.findIndex(c => fld.Category == c);
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
                    <ReactTable.Table<PRC002.IConfigField>
                        TableClass="table table-hover"
                        Data={fields}
                        SortKey={sortField}
                        Ascending={ascending}
                        OnSort={(d) => {
                            if (d.colKey == 'Buttons')
                                return;
                            if (d.colKey == sortField)
                                setAscending(!ascending);
                            else {
                                setAscending(!ascending);
                                setSortField(d.colKey);
                            }
                        }}
                        OnClick={() => { }}
                        TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        TbodyStyle={{ display: 'block', width: '100%' }}
                        RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        Selected={() => false}
                        KeySelector={item => item.ID}
                    >
                        <ReactTable.Column<PRC002.IConfigField>
                            Key="Label"
                            Field="Label"
                            AllowSort={true}
                            HeaderStyle={{ width: '20%' }}
                            RowStyle={{ width: '20%' }}
                            Content={(row) => (
                                <Input<PRC002.IConfigField> Record={row.item} Field={'Label'} Disabled={true} Label={''} Setter={() => { }} Valid={() => true} />
                            )}
                        > Field
                        </ReactTable.Column>
                        <ReactTable.Column<PRC002.IConfigField>
                            Key="FieldType"
                            Field="FieldType"
                            AllowSort={true}
                            HeaderStyle={{ width: '8em' }}
                            RowStyle={{ width: '8em' }}
                            Content={(row) => (
                                <Input<PRC002.IConfigField> Record={row.item} Field={'FieldType'} Disabled={true} Label={''} Setter={() => { }} Valid={() => true} />
                            )}
                        > Type
                        </ReactTable.Column>
                        <ReactTable.Column<PRC002.IConfigField>
                            Key="Comparison"
                            Field="Comparison"
                            AllowSort={true}
                            HeaderStyle={{ width: '5em' }}
                            RowStyle={{ width: '5em' }}
                            Content={(row) => (
                                <Input<PRC002.IConfigField> Record={row.item} Field={'Comparison'} Disabled={true} Label={''} Setter={() => { }} Valid={() => true} />
                            )}
                        > {" "}
                        </ReactTable.Column>
                        <ReactTable.Column<PRC002.IConfigField>
                            Key="Value"
                            Field="Value"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            Content={(row) => (
                                <ConfigFieldValueTableField Record={row.item} />
                            )}
                        > Value
                        </ReactTable.Column>
                        <ReactTable.Column<PRC002.IConfigField>
                            Key="Buttons"
                            AllowSort={false}
                            HeaderStyle={{ width: '130px' }}
                            RowStyle={{ width: '130px' }}
                            Content={(row) => (
                                <>
                                    {props.OnEdit != undefined ?
                                        <button style={{ textAlign: 'center' }} className="btn btn-sm" onClick={() => props.OnEdit(row.item)}>
                                            <ReactIcons.Pencil />
                                        </button>
                                        : null}
                                    {props.OnRemove != undefined ?
                                        <button style={{ textAlign: 'center' }} className="btn btn-sm" onClick={() => props.OnRemove(row.item)}>
                                            <ReactIcons.TrashCan />
                                        </button>
                                        : null}
                                </>
                            )}
                        > {" "}
                        </ReactTable.Column>
                    </ReactTable.Table>
                </div>
            </div>
        </div>
    </>)

}



export default BaseConfigTable;
