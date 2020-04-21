//******************************************************************************************************
//  Meter.tsx - Gbtc
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
//  08/27/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { SystemCenter } from '../global';
import NoteWindow from '../CommonComponents/NoteWindow';
import AdditionalFieldsWindow from '../CommonComponents/AdditionalFieldsWindow';
import CustomerInfoWindow from './CustomerInfo';
import CustomerMeterWindow from './CustomerMeter';

declare var homePath: string;

export default class Customer extends React.Component<{ CustomerID: number }, { Customer: SystemCenter.Customer, Tab: string}, {}>{
    constructor(props, context) {
        super(props, context);

        this.state = {
            Customer: null,
            Tab: this.getTab()
        }
    }

    getTab(): string {
        if (sessionStorage.hasOwnProperty('Customer.Tab'))
            return JSON.parse(sessionStorage.getItem('Customer.Tab'));
        else
            return 'customerInfo';
    }

    getCustomer(): void {
        if (this.props.CustomerID == undefined) return;
       $.ajax({
            type: "GET",
           url: `${homePath}api/SystemCenter/Customer/One/${this.props.CustomerID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
       }).done((data: SystemCenter.Customer) => this.setState({ Customer: data }));
    }

    deleteMeter(): JQuery.jqXHR {
        return $.ajax({
            type: "DELETE",
            url: `${homePath}api/SystemCenter/Customer/Delete`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(this.state.Customer),
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    setTab(tab:string): void {
        sessionStorage.setItem('Customer.Tab', JSON.stringify(tab));
        this.setState({Tab: tab});
    }
    
    componentDidMount() {
        this.getCustomer();
    }

    componentWillUnmount() {
    }

    render() {
        if (this.state.Customer == null) return null;
        return (
            <div style={{ width: '100%', height: window.innerHeight - 63, maxHeight: window.innerHeight - 63, overflow: 'hidden', padding: 15 }}>
                <div className="row">
                    <div className="col">
                        <h2>{this.state.Customer != null ? this.state.Customer.Name : ''}</h2>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger pull-right" hidden={this.state.Customer == null} onClick={() => this.deleteMeter().done(() => window.location.href = homePath + 'index.cshtml?name=PQViewCustomers')}>Delete Customer (Permanent)</button>
                    </div>
                </div>


                <hr />
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "customerInfo" ? " active" : "")} onClick={() => this.setTab('customerInfo')} data-toggle="tab" href="#customerInfo">Customer Info</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "additionalFields" ? " active" : "")} onClick={() => this.setTab('additionalFields')} data-toggle="tab">Additional Fields</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "meters" ? " active" : "")} onClick={() => this.setTab('meters')} data-toggle="tab" href="#meters">Assigned Meters</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "notes" ? " active" : "")} onClick={() => this.setTab('notes')} data-toggle="tab" href="#notes">Notes</a>
                    </li>
                </ul>
             
                <div className="tab-content" style={{maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
                    <div className={"tab-pane " + (this.state.Tab == "customerInfo" ? " active" : "fade")} id="customerInfo">
                        <CustomerInfoWindow Customer={this.state.Customer} stateSetter={(record) => this.setState({ Customer: record })}/>
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "additionalFields" ? " active" : "fade")} id="additionalFields">
                        <AdditionalFieldsWindow ID={this.state.Customer.ID} Type='Customer'/>
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "meters" ? " active" : "fade")} id="meters">
                        <CustomerMeterWindow Customer={this.state.Customer} />
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "notes" ? " active" : "fade")} id="notes" >
                        <NoteWindow ID={this.props.CustomerID} Type='Customer' />
                    </div>

                </div>                
            </div>
        )
    }
}

