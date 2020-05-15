//******************************************************************************************************
//  ByMeter.tsx - Gbtc
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
//  08/22/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { MiMD } from '../global';
import FormSelect from '../CommonComponents/FormSelect';
import FormInput from '../CommonComponents/FormInput';
import FormCheckBox from '../CommonComponents/FormCheckBox';

type FieldName = 'Station' | 'Model' | 'DateLastChange' | 'TSC';
interface Meter {
    Station: string,
    Model: string, 
    TSC: string,
    DateLastChanged: string
}
interface Filter {
    FieldName: FieldName,
    SearchText: string,
    Operator: '=' | '<>' | '>' | '<' | '>=' | '<=' | 'LIKE' | 'NOT LIKE' | 'IN' | 'NOT IN',
    Type: string
}
//interface Meter {
//    ID: number, AssetKey: string, Name: string, Location: string, MappedAssets: number, Make: string, Model: string
//}
declare var homePath: string;

const ByMeter: MiMD.ByComponent = (props) => {
    let history = useHistory();

    const [hover, setHover] = React.useState<boolean>(false);
    const [filterableList, setFilterableList] = React.useState<Array<MiMD.AdditionalField>>([]);
    const [filters, setFilters] = React.useState<Array<Filter>>([]);
    const [filter, setFilter] = React.useState<Filter>({ FieldName: 'Station', SearchText: '', Operator: 'LIKE', Type: 'string'});

    const [data, setData] = React.useState<Array<Meter>>([]);
    const [sortField, setSortField] = React.useState<string>('DateLastChanged');
    const [ascending, setAscending] = React.useState<boolean>(false);

    React.useEffect(() => {
        let handle1 = getMeters();
        let handle2 = getAdditionalFields();

        return () => {
            if (handle1.abort != null) handle1.abort();
            if (handle2.abort != null) handle2.abort();
        }
    }, []);

    function getMeters(): JQuery.jqXHR<Array<Meter>> {
        let handle =  $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/Meter/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(filters),
            cache: false,
            async: true
        });

        handle.done((data: Array<Meter>) => {
            var ordered = _.orderBy(data, [sortField], [(ascending ? "asc" : "desc")]);
            setData(ordered)
        });

        return handle;
    }

    function getAdditionalFields(): JQuery.jqXHR<Array<MiMD.AdditionalField>> {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/AdditionalField/ParentTable/Meter`,
            contentType: "application/json; charset=utf-8",
            cache: false,
            async: true
        });

        handle.done((data: Array<MiMD.AdditionalField>) => {
            let otherColumns = [
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "Station",
                    ID: -1,
                    IsSecure: false,
                    OpenXDAParentTable: "Meter",
                    Type: "string"
                },
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "Model",
                    ID: -1,
                    IsSecure: false,
                    OpenXDAParentTable: "Meter",
                    Type: "string"
                },
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "DateLastChanged",
                    ID: -1,
                    IsSecure: false,
                    OpenXDAParentTable: "Meter",
                    Type: "datetime"
                }
            ]
            var ordered = _.orderBy(otherColumns.concat(data), ['FieldName'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }

    function handleSelect(item) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Meter&MeterID=' + item.row.ID, state: {} })
    }

    async function deleteFilter(f: Filter) {
        let index = filters.findIndex(fs => fs == f);
        let filts = filters;
        filts.splice(index, 1);
        await setFilters(filts);
        setHover(false);
        getMeters();
    }

    async function addFilter() {
        let oldFilters = filters;
        oldFilters.push(filter);
        await setFilters(oldFilters);
        setFilter({ FieldName: 'Station', SearchText: '', Operator: 'LIKE', Type: 'string' });
        getMeters();
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ width: '100%' }}>
                    <ul className="navbar-nav mr-auto" style={{ width: '100%' }}>
                        <li className="nav-item" style={{ width: '15%', paddingRight: 10 }}>
                            <div style={{position: 'relative', display: 'inline-block'}}>
                                <button className="btn btn-primary" data-toggle='modal' data-target='#newFilter' onClick={(evt) => evt.preventDefault()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Add Filter</button>
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

            <div style={{ width: '100%', height: 'calc( 100% - 136px)' }}>
                <Table
                    cols={[
                        { key: 'Station', label: 'Station', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Model', label: 'Model', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        { key: 'TSC', label: 'TSC', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        {
                            key: 'DateLastChanged', label: 'Date Last Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: (item, key, style) => {
                                if (item[key] == null || item[key] == '') return '';
                                let date = moment(item[key]);
                                let now = moment();
                                let days = now.diff(date, 'days');

                                if (days < 1)
                                    style['backgroundColor'] = 'red';
                                else if (days < 7)
                                    style['backgroundColor'] = 'orange';
                                else if (days < 30)
                                    style['backgroundColor'] = 'yellow';

                                return date.format("MM/DD/YY HH:mm CT")
                            }
                        },
                        { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },

                    ]}
                    tableClass="table table-hover"
                    data={data}
                    sortField={sortField}
                    ascending={ascending}
                    onSort={(d) => {
                        if (d.col == sortField) {
                            var ordered = _.orderBy(data, [d.col], [(!ascending ? "asc" : "desc")]);
                            setAscending(!ascending);
                            setData(ordered);
                        }
                        else {
                            var ordered = _.orderBy(data, [d.col], ["asc"]);
                            setAscending(!ascending);
                            setData(ordered);
                            setSortField(d.col);
                        }
                    }}
                    onClick={handleSelect}
                    theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                    rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    selected={(item) => false}
                />
            </div>


            <div className="modal" id="newFilter">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Filter</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <FormSelect<Filter> Record={filter} Field='FieldName' Options={filterableList.map(fl => ({ Value: fl.FieldName, Label: fl.FieldName }))} Setter={(record) => {
                                let operator = "IN" as any;
                                let column = filterableList.find(fl => fl.FieldName == record.FieldName)
                                if (column.Type == 'string')
                                    operator = "LIKE";
                                if (column.Type == 'integer' || column.Type == 'number' || column.Type == 'boolean' )
                                    operator = "=";

                                setFilter((prevFilter) => ({ ...prevFilter, FieldName: record.FieldName, SearchText: '', Operator: operator, Type: column.Type }))
                            }} Label='Column' />
                            <FilterCreator Filter={filter} AdditionalField={filterableList.find(fl => fl.FieldName == filter.FieldName)} Setter={(record) => setFilter(record)}/>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => addFilter()} >Add</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

const FilterCreator = (props: { AdditionalField: MiMD.AdditionalField, Filter: Filter, Setter: (filter: React.SetStateAction<Filter>) => void }) => {
    const [valueListItems, setValueListItems] = React.useState<Array<MiMD.ValueListItem>>([]);

    React.useEffect(() => {
        if (props.AdditionalField == undefined) return;

        if ((["integer", "number", "boolean", "string", "datetime"]).indexOf(props.AdditionalField.Type) < 0) {
            let handle = $.ajax({
                type: "GET",
                url: `${homePath}api/ValueList/Group/${props.AdditionalField.Type}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            })

            handle.done((vl: Array<MiMD.ValueListItem>) => {
                setValueListItems(vl);
            });

            return () => {
                if (handle.abort != undefined) handle.abort()
            }
        }

    }, [props.AdditionalField]);

    if (props.AdditionalField == undefined)
        return null;
    else if (props.AdditionalField.Type == "string") {
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
    else if (props.AdditionalField.Type == "integer" || props.AdditionalField.Type == "number" || props.AdditionalField.Type == "datetime") {
        return (
            <>
                <label>Column type is {props.AdditionalField.Type}.</label>
                <div className='row'>
                    <div className='col-4'>
                        <select className='form-control' value={props.Filter.Operator} onChange={(evt) => {
                            let value = evt.target.value as '=' | '<>' | '>' | '<' | '>=' | '<=';
                            props.Setter((prevState) => ({ ...prevState, Operator: value }));
                        }}>
                            <option value='='>=</option>
                            <option value='<>'>!=</option>
                            <option value='>'>{`>`}</option>
                            <option value='>='>{`>=`}</option>
                            <option value='<'>{`<`}</option>
                            <option value='>='>{`>=`}</option>
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
    else if (props.AdditionalField.Type == "boolean") {
        return <FormCheckBox Record={props.Filter} Field='SearchText' Setter={(filter: Filter) => {
            props.Setter((prevFilter) => ({ ...prevFilter, Operator: '=', SearchText: filter.SearchText.toString() == 'true' ? '1': '0' }))
        }} Label="Column type is boolean. Yes/On is checked." />
    }
    else {
        return (
            <>
                <label>Column type is enumerable. Select from below.</label>
                <ul style={{ listStyle: 'none' }}>
                    <li ><div className="form-check">
                        <input type="checkbox" className="form-check-input" style={{ zIndex: 1 }} onChange={(evt) => {
                            if (evt.target.checked)
                                props.Setter(prevSetter => ({ ...prevSetter, SearchText: `(${valueListItems.map(x => x.Text).join(',')})` }));
                            else 
                                props.Setter(prevSetter => ({ ...prevSetter, SearchText: '' }));
                        }} defaultValue='off'  />
                        <label className="form-check-label" >Select All</label>

                    </div></li>
                    {valueListItems.map(vli => <li key={vli.ID} ><div className="form-check">
                        <input type="checkbox" className="form-check-input" style={{ zIndex: 1 }} onChange={(evt) => {
                            if (evt.target.checked) {
                                let list = props.Filter.SearchText.replace('(', '').replace(')', '').split(',');
                                list = list.filter(x => x != "")
                                list.push(vli.Text)
                                let text = `(${list.join(',')})`;
                                props.Setter(prevSetter => ({ ...prevSetter, SearchText: text }));
                            }
                            else {
                                let list = props.Filter.SearchText.replace('(', '').replace(')', '').split(',');
                                list = list.filter(x => x != "")
                                list = list.filter(x => x != vli.Text)
                                let text = `(${list.join(',')})`;
                                props.Setter(prevSetter => ({ ...prevSetter, SearchText: text }));
                            }

                        }} value={props.Filter.SearchText.indexOf(vli.Text) >= 0 ? 'on' : 'off'} checked={props.Filter.SearchText.indexOf(vli.Text) >= 0 ? true : false} />
                        <label className="form-check-label" >{vli.Text}</label>

                    </div></li>)}
                </ul>
            </>
        );
    }
}
export default ByMeter;

