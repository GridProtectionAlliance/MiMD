//******************************************************************************************************
//  MeterFilter.tsx - Gbtc
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
//  09/04/2020 - C. Lackner
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
declare var homePath: string;

interface IMeterFilterProps {
    setFilter: (filters: Array<Filter>) => void,
    includeStatus: boolean,
    Id: string,
}


export interface Filter {
    FieldName: keyof PRC002.IMeter,
    SearchText: string,
    Operator: 'LIKE' | 'NOT LIKE' | 'IN' | 'NOT IN' | '=',
    Type: ('string' | 'enum' | 'number')
}


interface SearchableField { FieldName: string, Type: ('string' | 'enum' | 'number') }

export const MeterFilter = (props: IMeterFilterProps) => {

    const [hover, setHover] = React.useState<boolean>(false);
    const [filterableList, setfilterableList] = React.useState<Array<SearchableField>>([]);

    React.useEffect(() => {
        if (props.includeStatus)
            setfilterableList([
                { FieldName: 'AssetKey', Type: 'string' },
                { FieldName: 'Model', Type: 'string' },
                { FieldName: 'Make', Type: 'string' },
                { FieldName: 'Status', Type: 'enum' }
            ]);
        else
            setfilterableList([
                { FieldName: 'AssetKey', Type: 'string' },
                { FieldName: 'Model', Type: 'string' },
                { FieldName: 'Make', Type: 'string' }
            ]);

        return () => { }
    }, [props.includeStatus]);

    const [filters, setFilters] = React.useState<Array<Filter>>([]);
    const [filter, setFilter] = React.useState<Filter>({ FieldName: 'AssetKey', SearchText: '', Operator: 'LIKE', Type: 'string' });

    

    async function deleteFilter(f: Filter) {
        let index = filters.findIndex(fs => fs == f);
        let filts = _.cloneDeep(filters);
        filts.splice(index, 1);
        await setFilters(filts);
        setHover(false);
        props.setFilter(filts);
    }

    async function addFilter() {
        let oldFilters = _.cloneDeep(filters);
        oldFilters.push(filter);
        await setFilters(oldFilters);
        setFilter({ FieldName: 'AssetKey', SearchText: '', Operator: 'LIKE', Type: 'string' });
        props.setFilter(oldFilters);
        ($('#' + props.Id) as any).modal('hide')
    }

    return (
        <div style={{ width: '100%'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" style={{ width: '100%' }}>
                    <ul className="navbar-nav mr-auto" style={{ width: '100%' }}>
                        <li className="nav-item" style={{ width: '15%', paddingRight: 10 }}>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <button className="btn btn-primary" data-toggle='modal' data-target={'#' + props.Id} onClick={(evt) => evt.preventDefault()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Add Filter</button>
                                <div style={{ width: window.innerWidth / 3, display: hover ? 'block' : 'none', position: 'absolute', backgroundColor: '#f1f1f1', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1 }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                                    <table className='table'>
                                        <thead>
                                            <tr><th>Column</th><th>Operator</th><th>Search Text</th><th>Remove</th></tr>
                                        </thead>
                                        <tbody>
                                            {filters.map((f, i) => <tr key={i}><td>{f.FieldName}</td><td>{f.Operator}</td><td>{f.SearchText}</td><td><button className="btn btn-sm" onClick={(e) => deleteFilter(f)}><span><i className="fa fa-trash"></i></span></button></td></tr>)}
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="modal" id={props.Id}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Filter</h4>
                            {/*data-dismiss="modal" data-target={'#' + props.Id}*/}
                            <button type="button" className="close" onClick={() => ($('#' + props.Id) as any).modal('hide')} >&times;</button>
                        </div>
                        <div className="modal-body">
                            <FormSelect<Filter> Record={filter} Field='FieldName' Options={filterableList.map(fl => ({ Value: fl.FieldName, Label: fl.FieldName }))} Setter={(record) => {
                                let operator = "IN" as any;
                                let column = filterableList.find(fl => fl.FieldName == record.FieldName)
                                if (column.Type == 'string')
                                    operator = "LIKE";

                                setFilter((prevFilter) => ({ ...prevFilter, FieldName: record.FieldName, SearchText: '', Operator: operator, Type: column.Type }))
                            }} Label='Column' />
                            <FilterCreator Filter={filter} Field={filterableList.find(fl => fl.FieldName == filter.FieldName)} Setter={(record) => setFilter(record)} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => addFilter()} >Add</button>
                            <button type="button" className="btn btn-danger" onClick={() => ($('#' + props.Id) as any).modal('hide')} >Close</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

const FilterCreator = (props: { Filter: Filter, Setter: (filter: React.SetStateAction<Filter>) => void, Field: SearchableField }) => {
    const valueListItems = ['In Compliance','Out Of Compliance','Acknowledged','Reviewed','InActive','RAP Submitted']

    if (props.Field == undefined)
        return null;
    else if (props.Field.Type == "string") {
        return (
            <>
                <label>Column type is string. Wildcard (*) can be used with 'LIKE' and 'NOT LIKE'</label>
                <div className='row'>
                    <div className='col-4'>
                        <select className='form-control' value={props.Filter.Operator} onChange={(evt) => {
                            let value = evt.target.value as 'LIKE' | 'NOT LIKE' | '=';
                            props.Setter((prevState) => ({ ...prevState, Operator: value }));
                        }}>
                            <option value='LIKE'>LIKE</option>
                            <option value='NOT LIKE'>NOT LIKE</option>
                            <option value='='>=</option>
                        </select>
                    </div>
                    <div className='col'>
                        <input className='form-control' value={props.Filter.SearchText} onChange={(evt) => {
                            let value = evt.target.value as string;
                            props.Setter((prevState) => ({ ...prevState, SearchText: value }));
                        }} />
                    </div>

                </div>
            </>
        );
    }
    else {
        return (
            <>
                <label>Column type is enumerable. Select from below.</label>
                <ul style={{ listStyle: 'none' }}>
                    <li ><div className="form-check">
                        <input type="checkbox" className="form-check-input" style={{ zIndex: 1 }} onChange={(evt) => {
                            if (evt.target.checked)
                                props.Setter(prevSetter => ({ ...prevSetter, SearchText: `(${valueListItems.join(',')})` }));
                            else
                                props.Setter(prevSetter => ({ ...prevSetter, SearchText: '' }));
                        }} defaultValue='off' />
                        <label className="form-check-label" >Select All</label>

                    </div></li>
                    {valueListItems.map((vli,i) => <li key={i} ><div className="form-check">
                        <input type="checkbox" className="form-check-input" style={{ zIndex: 1 }} onChange={(evt) => {
                            if (evt.target.checked) {
                                let list = props.Filter.SearchText.replace('(', '').replace(')', '').split(',');
                                list = list.filter(x => x != "")
                                list.push(vli)
                                let text = `(${list.join(',')})`;
                                props.Setter(prevSetter => ({ ...prevSetter, SearchText: text }));
                            }
                            else {
                                let list = props.Filter.SearchText.replace('(', '').replace(')', '').split(',');
                                list = list.filter(x => x != "")
                                list = list.filter(x => x!=vli)
                                let text = `(${list.join(',')})`;
                                props.Setter(prevSetter => ({ ...prevSetter, SearchText: text }));
                            }

                        }} value={props.Filter.SearchText.indexOf(vli) >= 0 ? 'on' : 'off'} checked={props.Filter.SearchText.indexOf(vli) >= 0 ? true : false} />
                        <label className="form-check-label" >{vli}</label>

                    </div></li>)}
                </ul>
            </>
        );
    }
}
