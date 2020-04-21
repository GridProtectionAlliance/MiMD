//******************************************************************************************************
//  CustomerMeter.tsx - Gbtc
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
import * as _ from 'lodash';
import { SystemCenter, PQView } from '../global';

declare var homePath: string;

export default class CustomerMeterWindow extends React.Component<{ Customer: SystemCenter.Customer }, { Sites: Array<SystemCenter.CustomerAccess>, AllSites: Array<PQView.Site>, SearchText: string, SelectedSites: Array<number> }, {}>{
    constructor(props, context) {
        super(props, context);
        this.state = {
            Sites: [],
            AllSites: [],
            SelectedSites:[],
            SearchText: ''
        }

        this.getSites = this.getSites.bind(this);
        this.addSites = this.addSites.bind(this);
    }

    componentDidMount() {
        this.getSites();
        this.getAllSites();
    }

    getSites(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/SystemCenter/CustomerAccess/${this.props.Customer.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((sites: Array<SystemCenter.CustomerAccess>) => this.setState({ Sites:  sites}));
    }

    addSites(): void {
        $.ajax({
            type: "POST",
            url: `${homePath}api/SystemCenter/CustomerAccess/AddMultiple`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(this.state.SelectedSites.map(ss => { return { ID: 0, CustomerID: this.props.Customer.ID, PQViewSiteID: parseInt(ss.toString()) } as SystemCenter.CustomerAccess})),
            cache: false,
            async: true
        }).done(() => {
            this.getSites();
        }).fail(msg => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
            else {
                this.getSites();
            }
        });;
    }

    getAllSites(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/PQView/Site/`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((sites: Array<PQView.Site>) => {
            this.setState({ AllSites: _.orderBy(sites, ['name'], ['asc']) })
        });
    }



    deleteCustommerAccess(record: SystemCenter.CustomerAccess): void {
        $.ajax({
            type: "DELETE",
            url: `${homePath}api/SystemCenter/CustomerAccess/Delete`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(record),
            cache: false,
            async: true
        }).done(() => {
            this.getSites();
        }).fail(msg => {
            if (msg.status == 500)
                alert(msg.responseJSON.ExceptionMessage)
            else {
                this.getSites();
            }
        });;

    }

    render() {
        return (
            <div className="card" style={{ marginBottom: 10 }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h4>Sites:</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <div style={{ width: '100%', height: window.innerHeight - 421, maxHeight: window.innerHeight - 421, padding: 0, overflowY: 'auto' }}>
                                <table className="table">
                                    <thead><tr><th>Assigned Sites:</th><th></th></tr></thead>
                                    <tbody>
                                        {this.state.AllSites.length > 0 ? this.state.Sites.map((site, i) => <tr key={i}><td>{this.state.AllSites.find(allsite => allsite.id == site.PQViewSiteID).name}</td><td><button className="btn btn-sm" onClick={(e) => {
                                            e.preventDefault();
                                            this.deleteCustommerAccess(site);
                                        }}><span><i className="fa fa-times"></i></span></button></td></tr>) : null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col">
                            <input className="form-control" placeholder="Search filter for select box ..." value={this.state.SearchText} onChange={(e) => this.setState({SearchText: e.target.value })}/>
                            <select className="form-control" style={{ paddingTop: 5, height: 'calc(100% - 35px)' }} multiple onChange={(e) => this.setState({ SelectedSites: $(e.target).val() as any })}>
                                {this.state.AllSites.filter(allsite => allsite.name.toLowerCase().indexOf(this.state.SearchText.toLowerCase()) >= 0).map(allsite => <option key={allsite.id} value={allsite.id} hidden={this.state.Sites.find(s => s.PQViewSiteID == allsite.id) != null} disabled={this.state.Sites.find(s => s.PQViewSiteID == allsite.id) != null}>{allsite.name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary pull-right" onClick={this.addSites}>Add Sites</button>
                    </div>
                </div>
            </div>
                
        );
    }

}

