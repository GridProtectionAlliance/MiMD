﻿//******************************************************************************************************
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
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import queryString from "querystring";
import { createBrowserHistory } from "history"
import { MiMD } from './global';

declare var homePath: string;
declare var controllerViewPath: string;

const SystemCenter: React.FunctionComponent = (props: {}) => {
    const history = createBrowserHistory();
    const [roles, setRoles] = React.useState<Array<MiMD.SecurityRoleName>>([]);

    React.useEffect(() => {
        let handle = getRoles();
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

    //if (Object.keys(queryString.parse(history.location.search)).length == 0)
    //    history.push({ pathname: homePath + 'index.cshtml', search: 'name=Meters', state: {} })

    return (
        <Router>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" style={{height: 75}}>
                <a className="col-sm-3 col-md-2 mr-0" style={{textAlign:'center'}}href="https://www.gridprotectionalliance.org"><img style={{ width: '100%', margin: -5 }} src={"../Images/SystemCenter-TopLeft.png"} /></a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid" style={{ top: 75,  position: 'absolute', width: '100%', height: 'calc(100% - 75px)', overflow: 'hidden' }}>
                <div className="row" style={{height: '100%'}}>
                    <nav className="col bg-light sidebar" style={{ maxWidth: 250 }}>
                        <div className="sidebar-sticky">
                            <div style={{ width: '100%', marginTop: 5, textAlign: 'center' }}><h3>MiMD</h3></div>
                            <hr />
                            <h6 style={{fontWeight: 'bold', marginLeft: 10}} className="sidebar-heading" hidden={roles.indexOf('Administrator') < 0}>System Settings</h6>
                            <ul style={{ marginLeft: 10 }} className="nav flex-column" hidden={roles.indexOf('Administrator') < 0}>
                                <li className="nav-item">
                                    <NavLink activeClassName='nav-link active' className="nav-link" isActive={(match, location) => location.pathname + location.search == controllerViewPath + "?name=ValueLists"} to={controllerViewPath + "?name=ValueLists"}>Value Lists</NavLink>
                                </li>
                            </ul>

                            <hr />
                            <h6 style={{ fontWeight: 'bold', marginLeft: 10 }} className="sidebar-heading" hidden={roles.indexOf('Administrator') < 0}>User Settings</h6>
                            <ul style={{ marginLeft: 10 }} className="nav flex-column" hidden={roles.indexOf('Administrator') < 0}>
                                <li className="nav-item">
                                    <NavLink activeClassName='nav-link active' className="nav-link" isActive={(match, location) => location.pathname + location.search == controllerViewPath + "?name=UserStatistics"} to={controllerViewPath + "?name=UserStatistics"}>User Statistics</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName='nav-link active' className="nav-link" isActive={(match, location) => location.pathname + location.search == controllerViewPath + "?name=Users"} to={controllerViewPath + "?name=Users"}>Users</NavLink>

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
                            <Route children={({ match, ...rest }) => {
                                let qs = queryString.parse(rest.location.search);
                                //if (qs['?name'] == undefined || qs['?name'] == "Meters") {
                                //    return <ByMeter Roles={roles} />
                                //}
                                //else if (qs['?name'] == "Locations") {
                                //    return <ByLocation Roles={roles} />
                                //}
                                //else if (qs['?name'] == "Assets")
                                //    return <ByAsset Roles={roles} />
                                //else if (qs['?name'] == "Users")
                                //    return <ByUser Roles={roles} />
                                //else if (qs['?name'] == "User")
                                //    return <User UserID={qs.UserAccountID as string} />
                                //else if (qs['?name'] == "UserStatistics")
                                //    return <UserStatistics Roles={roles} />
                                //else if (qs['?name'] == "Meter")
                                //    return <Meter MeterID={parseInt(qs.MeterID as string)} />
                                //else if (qs['?name'] == "Location")
                                //    return <Location LocationID={parseInt(qs.LocationID as string)} />
                                //else if (qs['?name'] == "Asset")
                                //    return <Asset AssetID={parseInt(qs.AssetID as string)} />
                                //else if (qs['?name'] == "Customer")
                                //    return <Customer CustomerID={parseInt(qs.CustomerID as string)} />
                                //else
                                    return null;
                            }} />

                            <Route children={({ match, ...rest }) => {
                                if (roles.indexOf('Administrator') < 0) return null;
                                else if (queryString.parse(rest.location.search)['?name'] == "ValueLists")
                                    return <iframe style={{ width: '100%', height: '100%' }} src={homePath + 'ValueListGroups.cshtml'}></iframe>
                                else
                                    return null;
                            }} />

                        </React.Suspense>
                    </div>

                </div>
            </div>
        </Router>
    )
}

ReactDOM.render(<SystemCenter />, document.getElementById('window'));
