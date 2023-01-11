//******************************************************************************************************
//  SystemCenter.tsx - Gbtc
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
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import queryString from "querystring";
import { createBrowserHistory } from "history"
import { MiMD } from './global';
import { Provider } from 'react-redux';
import store from './Store/Store';

declare var homePath: string;
declare var controllerViewPath: string;

const MiMD: React.FunctionComponent = (props: {}) => {
    
    const ConfigurationByMeter = React.lazy(() => import(/* webpackChunkName: "ConfigurationByMeter" */ './Configuration/ConfigurationByMeter'));
    const DiagnosticByMeter = React.lazy(() => import(/* webpackChunkName: "DiagnosticByMeter" */ './Diagnostic/DiagnosticByMeter'));
    const PRC002ByMeter = React.lazy(() => import(/* webpackChunkName: "ConfigurationByMeter" */ './PRC-002/MeterOverview/MeterOverviewPage'));
    const PRC002ByChange = React.lazy(() => import(/* webpackChunkName: "ConfigurationByMeter" */ './PRC-002/ChangeOverview/ChangeOverviewPage'));
    const ByUser = React.lazy(() => import(/* webpackChunkName: "ConfigurationByMeter" */ './User/ByUser'));
    const UserPage = React.lazy(() => import(/* webpackChunkName: "ConfigurationByMeter" */ './User/Users'));

    const history = createBrowserHistory();
    const [roles, setRoles] = React.useState<Array<MiMD.SecurityRoleName>>([]);

    React.useEffect(() => {
        const handle = getRoles();
        handle.done(rs => setRoles(rs));

        return function cleanup() {
            if (handle.abort != null)
                handle.abort();
        }

    }, []);

    function getRoles(): JQuery.jqXHR<Array<MiMD.SecurityRoleName>> {
       return $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/SecurityRoles`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
    }

    if (Object.keys(queryString.parse(history.location.search)).length == 0)
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Configuration' });

    return (
        <Router>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" style={{height: 75}}>
                <a className="col-sm-3 col-md-2 mr-0" style={{textAlign:'center'}} href="https://www.gridprotectionalliance.org"><img style={{ width: 205, margin: 0 }} src={"../Images/miMD_Clean(for dark bg).png"} /></a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="./@GSF/Web/Security/Views/Login.cshtml?logout=yes">Sign out</a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid" style={{ top: 75,  position: 'absolute', width: '100%', height: 'calc(100% - 75px)', overflow: 'hidden' }}>
                <div className="row" style={{height: '100%'}}>
                    <nav className="col bg-light sidebar" style={{ maxWidth: 250 }}>
                        <div className="sidebar-sticky">
                            {
                                //<div style={{ width: '100%', marginTop: 5, textAlign: 'center' }}><h3>MiMD</h3></div>
                                //<hr />

                                //
                            }
                            <h6 style={{ fontWeight: 'bold', marginLeft: 10 }} className="sidebar-heading">Monitors</h6>
                            <ul style={{ marginLeft: 10 }} className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink activeClassName='nav-link active' className="nav-link" isActive={(match, location) => (location.pathname + location.search).includes(controllerViewPath + "?name=Configuration")} to={controllerViewPath + "?name=Configuration"}>Configuration Changes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName='nav-link active' className="nav-link" isActive={(match, location) => (location.pathname + location.search).includes(controllerViewPath + "?name=Diagnostic")} to={controllerViewPath + "?name=Diagnostic"}>Diagnostic Changes</NavLink>
                                </li>
                            </ul>

                            <h6 style={{fontWeight: 'bold', marginLeft: 10}} className="sidebar-heading" hidden={roles.indexOf('Administrator') < 0}>System</h6>
                            <ul style={{ marginLeft: 10 }} className="nav flex-column" hidden={roles.indexOf('Administrator') < 0}>
                                <li className="nav-item">
                                    <NavLink activeClassName='nav-link active' className="nav-link" isActive={(match, location) => (location.pathname + location.search).includes(controllerViewPath + "?name=RemoteConsole")} to={controllerViewPath + "?name=RemoteConsole"}>Remote Console</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName='nav-link active' className="nav-link" isActive={(match, location) => (location.pathname + location.search).includes(controllerViewPath + "?name=User")} to={controllerViewPath + "?name=Users"}>Users</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName='nav-link active' className="nav-link" isActive={(match, location) => (location.pathname + location.search).includes(controllerViewPath + "?name=Groups")} to={controllerViewPath + "?name=Groups"}>Groups</NavLink>
                                </li>

                            </ul>
                            <h6 style={{ fontWeight: 'bold', marginLeft: 10 }} className="sidebar-heading">PRC-002 Compliance</h6>
                            <ul style={{ marginLeft: 10 }} className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink activeClassName='nav-link active' className="nav-link" isActive={(match, location) => (location.pathname + location.search).includes(controllerViewPath + "?name=PRC")} to={controllerViewPath + "?name=PRC002Overview"}>Overview</NavLink>
                                </li>
                            </ul>

                            <div style={{ width: '100%', textAlign: 'center', position:'absolute', bottom: 50 }}>

                                <span>Version 0.1</span>
                                <br />
                                <span></span>
                            </div>

                        </div>
                    </nav>
                    <div className="col" style={{ width: '100%', height: 'inherit', padding: '0 0 0 0', overflow: 'hidden' }}>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route children={({ match, ...rest }) => {
                                    let qs = queryString.parse(rest.location.search);
                                    if (qs['?name'] == undefined || qs['?name'] == "Configuration") {
                                        return <ConfigurationByMeter Roles={roles} MeterID={parseInt(qs.MeterID as string)} FileName={qs.FileName as string} />
                                    }
                                    else if (qs['?name'] == "Diagnostic") {
                                        return <DiagnosticByMeter MeterID={parseInt(qs.MeterID as string)} FileName={qs.FileName as string} Table={qs.Table as string} />
                                    }
                                    else if (qs['?name'] == "PRC002Overview") {
                                        return <PRC002ByMeter Roles={roles} MeterID={parseInt(qs.MeterID as string)} />
                                    }
                                    else if (qs['?name'] == "PRC002Change") {
                                        return <PRC002ByChange Roles={roles} RecordId={parseInt(qs.RecordID as string)} />
                                    }
                                    else if (roles.indexOf('Administrator') > -1) {
                                        if (qs['?name'] == "ValueLists")
                                            return <iframe style={{ width: '100%', height: '100%' }} src={homePath + 'ValueListGroups.cshtml'}></iframe>
                                        else if (qs['?name'] == "Users")
                                            return <ByUser Roles={roles} />
                                        else if (qs['?name'] == "User")
                                            return <UserPage UserID={qs['UserAccountID'] as string} />
                                        else if (qs['?name'] == "Groups")
                                            return <iframe style={{ width: '100%', height: '100%' }} src={homePath + 'Groups.cshtml'}></iframe>
                                        else if (qs['?name'] == "RemoteConsole")
                                            return <iframe style={{ width: '100%', height: '100%' }} src={homePath + 'RemoteConsole.cshtml'}></iframe>
                                    }
                                    else
                                        return null;
                            }} />
                        </Switch>
                        </React.Suspense>
                    </div>

                </div>
            </div>
        </Router>
    )
}

ReactDOM.render(<Provider store={store}><MiMD /></Provider>, document.getElementById('window'));
