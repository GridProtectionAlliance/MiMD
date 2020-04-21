//******************************************************************************************************
//  UserPermissions.tsx - Gbtc
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
//  02/07/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { SystemCenter } from '../global';
import FormCheckBox from '../CommonComponents/FormCheckBox';
import { getSecurityRoles, getSecurityRolesForUser, updateSecurityRolesForUser } from './../../../TS/Services/User';

declare var homePath: string;

export default function UserPermissionsWindow(props: { User: SystemCenter.UserAccount }) {
    const [scRoles, setScRoles] = React.useState<Array<SystemCenter.ApplicationRole<SystemCenter.SystemCeneterSecurityRoleName>>>([]);
    const [xdaRoles, setXdaRoles] = React.useState<Array<SystemCenter.ApplicationRole<SystemCenter.OpenXDASecurityRoleName>>>([]);
    const [changed, setChanged] = React.useState<boolean>(false);

    React.useEffect(() => {
        GetData();
    }, []);

    async function GetData() {
        setChanged(false);
        let scrs = await getSecurityRoles<SystemCenter.SystemCeneterSecurityRoleName>('SystemCenter');
        let xdars =  await getSecurityRoles<SystemCenter.OpenXDASecurityRoleName>('OpenXDA');
        let userScrs = await getSecurityRolesForUser(props.User.ID, 'SystemCenter');
        let userXdars = await getSecurityRolesForUser(props.User.ID, 'OpenXDA');

        setScRoles(scrs.map(src => {
            src.Assigned = userScrs.find(usrc => usrc.ApplicationRoleID == src.ID) != undefined;
            return src;
        }));

        setXdaRoles(xdars.map(xrc => {
            xrc.Assigned = userXdars.find(usrc => usrc.ApplicationRoleID == xrc.ID) != undefined;
            return xrc;
        }))

    }

    async function UpdateData() {
        let done1 = await updateSecurityRolesForUser('SystemCenter', scRoles.filter(scr => scr.Assigned).map(scr => { return { ID: '00000000-0000-0000-0000-000000000000', ApplicationRoleID: scr.ID, UserAccountID: props.User.ID } as SystemCenter.ApplicationRoleUserAccount }));
        let done2 = await updateSecurityRolesForUser('OpenXDA', xdaRoles.filter(scr => scr.Assigned).map(scr => { return { ID: '00000000-0000-0000-0000-000000000000', ApplicationRoleID: scr.ID, UserAccountID: props.User.ID } as SystemCenter.ApplicationRoleUserAccount }));
        GetData();
    }

    return (
        <div className="card" style={{ marginBottom: 10 }}>
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        <h4>User Permissions:</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                            <legend className="w-auto" style={{ fontSize: 'large' }}>System Center:</legend>
                            <form>
                                {
                                    scRoles.map((scr, i, array) => <FormCheckBox<SystemCenter.ApplicationRole<SystemCenter.SystemCeneterSecurityRoleName>> key={scr.ID} Record={scr} Field='Assigned' Label={scr.Name} Setter={(record) => {
                                        scr.Assigned = record.Assigned;
                                        let newArray = _.clone(array);
                                        setScRoles(newArray);
                                        setChanged(true);
                                    }} />)
                                }
                            </form>
                        </fieldset>
                    </div>
                    <div className="col">
                        <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                            <legend className="w-auto" style={{ fontSize: 'large' }}>OpenXDA:</legend>
                            <form>
                                {
                                    xdaRoles.map((scr, i, array) => <FormCheckBox<SystemCenter.ApplicationRole<SystemCenter.OpenXDASecurityRoleName>> key={scr.ID} Record={scr} Field='Assigned' Label={scr.Name} Setter={(record) => {
                                        scr.Assigned = record.Assigned;
                                        let newArray = _.clone(array);
                                        setXdaRoles(newArray);
                                        setChanged(true);
                                    }} />)
                                }
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="btn-group mr-2">
                    <button className="btn btn-primary" onClick={() => UpdateData()} disabled={!changed}>Update</button>
                </div>
                <div className="btn-group mr-2">
                    <button className="btn btn-default" onClick={() => GetData()} disabled={!changed}>Reset</button>
                </div>
            </div>


        </div>
    );
    
}