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
import UserInfoWindow from './UserInfo';
import UserPermissionsWindow from './UserPermissions';

declare var homePath: string;

export default class User extends React.Component<{ UserID: string }, { User: SystemCenter.UserAccount, Tab: string}, {}>{
    constructor(props, context) {
        super(props, context);

        this.state = {
            User: null,
            Tab: this.getTab()
        }
    }

    getTab(): string {
        if (sessionStorage.hasOwnProperty('User.Tab'))
            return JSON.parse(sessionStorage.getItem('User.Tab'));
        else
            return 'userInfo';
    }

    getUser(): void {
        if (this.props.UserID == undefined) return;
       $.ajax({
            type: "GET",
           url: `${homePath}api/SystemCenter/UserAccount/One/${this.props.UserID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
       }).done((data: SystemCenter.UserAccount) => this.setState({ User: data }));
    }

    deleteUser(): JQuery.jqXHR {
        return $.ajax({
            type: "DELETE",
            url: `${homePath}api/SystemCenter/UserAccount/Delete`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(this.state.User),
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    setTab(tab:string): void {
        sessionStorage.setItem('User.Tab', JSON.stringify(tab));
        this.setState({Tab: tab});
    }
    
    componentDidMount() {
        this.getUser();
    }

    componentWillUnmount() {
    }

    render() {
        if (this.state.User == null) return null;
        return (
            <div style={{ width: '100%', height: window.innerHeight - 63, maxHeight: window.innerHeight - 63, overflow: 'hidden', padding: 15 }}>
                <div className="row">
                    <div className="col">
                        <h2>{this.state.User != null ? `${this.state.User.FirstName} ${this.state.User.LastName}`  : ''}</h2>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger pull-right" hidden={this.state.User == null} onClick={() => this.deleteUser().done(() => window.location.href = homePath + 'index.cshtml?name=Users')}>Delete User (Permanent)</button>
                    </div>
                </div>


                <hr />
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "userInfo" ? " active" : "")} onClick={() => this.setTab('userInfo')} data-toggle="tab" href="#userInfo">User Info</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + (this.state.Tab == "permissions" ? " active" : "")} onClick={() => this.setTab('permissions')} data-toggle="tab">Permissions</a>
                    </li>
                </ul>
             
                <div className="tab-content" style={{maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
                    <div className={"tab-pane " + (this.state.Tab == "userInfo" ? " active" : "fade")} id="userInfo">
                        <UserInfoWindow User={this.state.User} stateSetter={(record) => this.setState({User: record})}/>
                    </div>
                    <div className={"tab-pane " + (this.state.Tab == "permissions" ? " active" : "fade")} id="permissions">
                        <UserPermissionsWindow User={this.state.User} />
                    </div>

                </div>                
            </div>
        )
    }
}

