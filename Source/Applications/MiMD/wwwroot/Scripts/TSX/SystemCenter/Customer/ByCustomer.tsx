//******************************************************************************************************
//  ByCustomer.tsx - Gbtc
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
//  02/04/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { SystemCenter } from '../global';
import FormInput from '../CommonComponents/FormInput';
import FormTextArea from '../CommonComponents/FormTextArea';

type FieldName = 'Customer.AccountName' | 'Customer.Name' | 'Customer.Phone' | 'Customer.Description' | 'PQViewSite.name' /*'Note.Note'*/;
interface Search {
    Field: FieldName,
    SearchText: string
}   
interface Customer extends SystemCenter.Customer {
    Meters: number
}

declare var homePath: string;

const ByCustomer: SystemCenter.ByComponent = (props) => {
    let history = useHistory();
    
    const [search, setSearch] = React.useState<Array<Search>>([{ Field: 'Customer.AccountName', SearchText: '' }]);
    const [data, setData] = React.useState<Array<Customer>>([]);
    const [sortField, setSortField] = React.useState<string>('AssetKey');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [newCustomer, setNewCustomer] = React.useState<SystemCenter.Customer>(getNewCustomer());

    React.useEffect(() => {
        return getData();
    }, []);

    function getData() {
        let handle = getCustomers();
        handle.done((data: Array<Customer>) => setData(data));
        return function cleanup() {
            if (handle.abort != null)
                handle.abort();
        }

    }

    function getCustomers(): JQuery.jqXHR<Array<Customer>>{
        return $.ajax({
            type: "Post",
            url: `${homePath}api/SystemCenter/Customer/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(search),
            cache: false,
            async: true
        });
    }

    function getNewCustomer(): SystemCenter.Customer {
        return {
            ID: 0,
            AccountName: null,
            Name: null,
            Phone: null,
            Description: null
        }
    }

    function addNewCustomer() {
        $.ajax({
            type: "POST",
            url: `${homePath}api/SystemCenter/Customer/Add`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(newCustomer),
            cache: false,
            async: true
        }).done((data) => getData());

    }


    function handleSelect(item) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Customer&CustomerID=' + item.row.ID, state: {} })
    }

    function valid(field: keyof (SystemCenter.Customer)): boolean {
        if (field == 'AccountName')
            return newCustomer.AccountName != null && newCustomer.AccountName.length > 0 && newCustomer.AccountName.length <= 25;
        else if (field == 'Name')
            return newCustomer.Name == null || newCustomer.Name.length <= 100;
        else if (field == 'Phone')
            return newCustomer.Phone == null || newCustomer.Phone.length <= 20;
        else if (field == 'Description')
            return newCustomer.Description == null || newCustomer.Description.length <= 200;
        return false;
    }


    return (
        <div style={{ width: '100%', height: '100%' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ width: '100%' }}>
                    <ul className="navbar-nav mr-auto" style={{ width: '100%' }}>
                        <li className="nav-item" style={{ width: '50%', paddingRight: 10 }}>
                            <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                                <legend className="w-auto" style={{ fontSize: 'large' }}>Search: </legend>
                                <form>
                                    {
                                        search.map((s, index, a) => {

                                            return (
                                                <div className="input-group" key={index} style={{ border: '1px solid lightgray'}}>
                                                    <div className="input-group-prepend">
                                                        <select className='form-control' style={{height: '100%'}} value={s.Field} onChange={(evt) => {
                                                            s.Field = evt.target.value as FieldName;
                                                            let array = _.clone(a);
                                                            setSearch(array);
                                                        }}>
                                                            <option value='Customer.AccountName'>Account Name</option>
                                                            <option value='Customer.Name'>Name</option>
                                                            <option value='Customer.Phone'>Phone</option>
                                                            <option value='Customer.Description'>Description</option>
                                                            <option value='PQViewSite.name'>PQView Site Name</option>
                                                        </select>
                                                    </div>
                                                    <input className='form-control' type='text' placeholder='Search...' value={s.SearchText} onChange={(evt) => {
                                                        s.SearchText = evt.target.value;
                                                        let array = _.clone(a);
                                                        setSearch(array);
                                                    }} onKeyDown={evt => {
                                                        if (evt.keyCode == 13) {
                                                            evt.preventDefault();
                                                            getCustomers().done(ms => setData(ms));
                                                        }
                                                    }} />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-danger" type="button" onClick={(evt) => {
                                                            let array = _.clone(a);
                                                            array.splice(index, 1);
                                                            setSearch(array);
                                                        }}><span><i className="fa fa-times"></i></span></button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        
                                }
                                </form>
                            </fieldset>
                        </li>
                        <li className="nav-item" style={{ width: '15%', paddingRight: 10 }}>
                            <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                                <legend className="w-auto" style={{ fontSize: 'large' }}>Search Params:</legend>
                                <form>
                                    <div className="form-group">
                                        <button className="btn btn-primary" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                            event.preventDefault();
                                            let array = _.clone(search);
                                            array.push({ Field: 'Customer.AccountName', SearchText: '' });
                                            setSearch(array);
                                        }}>Add Parameter</button>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                            event.preventDefault();
                                            getCustomers().done(cs => setData(cs));
                                        }}>Update Search</button>
                                    </div>
                                </form>
                            </fieldset>
                        </li>
                        <li className="nav-item" style={{ width: '15%', paddingRight: 10 }}>
                            <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                                <legend className="w-auto" style={{ fontSize: 'large' }}>Actions:</legend>
                                <form>
                                    <button className="btn btn-primary" data-toggle='modal' data-target="#customerModal" hidden={props.Roles.indexOf('Administrator') < 0 && props.Roles.indexOf('Transmission SME') < 0} onClick={(event) => { event.preventDefault() }}>Add Customer</button>
                                </form>
                            </fieldset>
                        </li>


                    </ul>
                </div>
            </nav>

            <div style={{ width: '100%', height: 'calc( 100% - 136px)' }}>
                <Table<Customer>
                    cols={[
                        { key: 'AccountName', label: 'Account Name', headerStyle: { width: '15%' }, rowStyle: { width: '15%' } },
                        { key: 'Name', label: 'Name', headerStyle: { width: '15%' }, rowStyle: { width: '15%' } },
                        { key: 'Phone', label: 'Phone', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        { key: 'Description', label: 'Description', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Meters', label: 'Assigned Meters', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
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
                    tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%'  }}
                    rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    selected={(item) => false}
                />
            </div>

            <div className="modal" id="customerModal">
                <div className="modal-dialog" style={{ maxWidth: '100%', width: '75%' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Customer</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <FormInput<SystemCenter.Customer> Record={newCustomer} Field={'AccountName'} Feedback={'AccountName of less than 25 characters is required.'} Valid={valid} Setter={setNewCustomer} />
                                    <FormInput<SystemCenter.Customer> Record={newCustomer} Field={'Name'} Feedback={'Name must be less than 100 characters.'} Valid={valid} Setter={setNewCustomer} />
                                    <FormInput<SystemCenter.Customer> Record={newCustomer} Field={'Phone'} Feedback={'Phone must be less than 20 characters.'} Valid={valid} Setter={setNewCustomer} />
                                    <FormTextArea<SystemCenter.Customer> Rows={3} Record={newCustomer} Field={'Description'} Feedback={'Description must be less than 200 characters.'} Valid={valid} Setter={setNewCustomer} />
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={addNewCustomer}>Save</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ByCustomer;

