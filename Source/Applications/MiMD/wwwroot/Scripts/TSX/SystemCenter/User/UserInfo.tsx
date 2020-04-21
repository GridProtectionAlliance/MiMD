//******************************************************************************************************
//  ConnectionInfo.tsx - Gbtc
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
//  09/11/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import * as React from 'react';
import * as _ from 'lodash';
import { SystemCenter } from '../global';
import FormInput from '../CommonComponents/FormInput';
import FormCheckBox from '../CommonComponents/FormCheckBox';
import FormDatePicker from '../CommonComponents/FormDatePicker';
import { getSIDFromUserName, getIsUser, validUserAccountField, getRoles, getTSCs } from './../../../TS/Services/User';
import FormSelect from '../CommonComponents/FormSelect';

declare var homePath: string;
type UserValidation = 'Resolving' | 'Valid' | 'Invalid' | 'Unknown';

export default class UserInfoWindow extends React.Component<{ User: SystemCenter.UserAccount, stateSetter: (user: SystemCenter.UserAccount) => void }, { User: SystemCenter.UserAccount, UserValidation: UserValidation, Roles: Array<SystemCenter.Role>, TSCs: Array<SystemCenter.TSC>}, {}> {
    jqueryHandle: JQuery.jqXHR;
    constructor(props, context) {
        super(props, context);
        this.state = {
            User: this.props.User,
            UserValidation: 'Invalid',
            Roles: [],
            TSCs: []
        }
    }


    componentDidMount() {
        let handle2 = getRoles();
        handle2.done(rs => this.setState({ Roles: rs }));

        let handle3 = getTSCs();
        handle3.done(ts => this.setState({ TSCs: ts }));

        if(this.state.User.UseADAuthentication)
            this.validateUser(this.state.User.AccountName);
    }

    componentWillReceiveProps(nextProps): void {
        this.setState({ User: nextProps.User})
    }

    updateUser(): JQuery.jqXHR {
        var user = _.clone(this.state.User);

       return $.ajax({
            type: "PATCH",
           url: `${homePath}api/SystemCenter/UserAccount/Update`,
            contentType: "application/json; charset=utf-8",
           data: JSON.stringify(this.state.User),
            dataType: 'json',
            cache: true,
            async: true
       }).done((LocationID: number) => {
           this.props.stateSetter(user);
       });
    }

    async validateUser(accountName: string) {
        if (accountName == null || accountName.length == 0) {
            this.setState({ UserValidation: 'Invalid' });
            return;
        }

        this.setState({ UserValidation: 'Resolving' });

        let sid = await getSIDFromUserName(accountName);
        if (accountName !== sid && accountName.countOccurrences("\\") < 2) {
            let result = await getIsUser(sid);
            this.setState({ UserValidation: result ? 'Valid' : 'Unknown' });        }
        else
            this.setState({ UserValidation: 'Invalid' });

    }


    render() {
        return (
            <div className="card" style={{ marginBottom: 10 }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h4>User Information:</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'AccountName'} Label='Name' Feedback={'A Name of less than 200 characters is required.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={(record) => {
                                if (this.state.User.UseADAuthentication)
                                    this.validateUser(record.Name);

                                record.Name = record.AccountName;
                                this.setState({ User: record });
                            }} />
                            <div className="row" style={{ position: 'absolute', top: 0, left: 100 }} hidden={!this.state.User.UseADAuthentication}>
                                <span id="resolvingAccount" hidden={this.state.UserValidation  != 'Resolving'}><i style={{ height: 10, width: 10, color: 'grey' }} className="fa fa fa-spin fa-refresh"></i>&nbsp;<em className="small">Resolving account details...</em></span>
                                <span id="accountValid" hidden={this.state.UserValidation  != 'Valid'}><i style={{ height: 20, width: 20, color: 'green' }} className="fa fa-check-circle"></i>&nbsp;<em className="small">Resolved account name</em></span>
                                <span id="accountInvalid" hidden={this.state.UserValidation  != 'Invalid'}><i style={{ height: 20, width: 20, color: 'red' }} className="fa fa-times-circle"></i>&nbsp;<em className="small">Cannot resolve account name</em></span>
                                <span id="accountUnknown" hidden={this.state.UserValidation  != 'Unknown'}><i style={{ height: 20, width: 20, color: 'orange' }} className="fa fa-exclamation-circle"></i>&nbsp;<em className="small">Valid account name is not a user or Active Directory access is limited</em></span>
                            </div>


                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <div className="form-check-inline">
                                                <label className="form-check-label"><input className='form-check-input' type='radio' checked={this.state.User.UseADAuthentication} onChange={(e) => {
                                                    var record: SystemCenter.UserAccount = _.clone(this.state.User);
                                                    record.UseADAuthentication = e.target.checked;
                                                    this.setState({ User: record });
                                                }} />Active Directory User</label>
                                            </div>
                                        </div>
                                        <div className="col-xs-4">
                                            <div className="form-check-inline">
                                                <label className="form-check-label"><input className='form-check-input' type='radio' checked={!this.state.User.UseADAuthentication} onChange={(e) => {
                                                    var record: SystemCenter.UserAccount = _.clone(this.state.User);
                                                    record.UseADAuthentication = !e.target.checked;
                                                    this.setState({ User: record });
                                                }} />Database User</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body" hidden={!this.state.User.UseADAuthentication}>
                                    <div className="row">
                                        <div className="col">
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'FirstName'} Label='First Name' Feedback={'First Name must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({User: record})} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'LastName'} Label='Last Name' Feedback={'Last Name must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({User: record})} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'Title'} Feedback={'Title must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({ User: record })} />
                                            <FormSelect<SystemCenter.UserAccount> Record={this.state.User} Field={'RoleID'} Label='Role' Options={this.state.Roles.map(rs => { return { Value: rs.ID.toString(), Label: rs.Name } })} Setter={record => this.setState({ User: record })} EmptyOption={true} />
                                        </div>
                                        <div className="col">
                                            <FormSelect<SystemCenter.UserAccount> Record={this.state.User} Field={'TSCID'} Label='TSC' Options={this.state.TSCs.map(rs => { return { Value: rs.ID.toString(), Label: rs.Name } })} Setter={record => this.setState({ User: record })} EmptyOption={true} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'Phone'} Feedback={'Password must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({User: record})} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'MobilePhone'} Label='Mobile Phone' Feedback={'Mobile Phone must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({ User: record })} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'Email'} Feedback={'Password must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({ User: record })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body" hidden={this.state.User.UseADAuthentication}>
                                    <div className="row">
                                        <div className="col">
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'Password'} Feedback={'Password must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({User: record})} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'FirstName'} Label='First Name' Feedback={'First Name must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({User: record})} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'LastName'} Label='Last Name' Feedback={'Last Name must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({User: record})} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'Title'} Feedback={'Title must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({ User: record })} />
                                            <FormSelect<SystemCenter.UserAccount> Record={this.state.User} Field={'RoleID'} Label='Role' Options={this.state.Roles.map(rs => { return { Value: rs.ID.toString(), Label: rs.Name } })} Setter={record => this.setState({ User: record })} EmptyOption={true} />
                                        </div>
                                        <div className="col">
                                            <FormSelect<SystemCenter.UserAccount> Record={this.state.User} Field={'TSCID'} Label='TSC' Options={this.state.TSCs.map(rs => { return { Value: rs.ID.toString(), Label: rs.Name } })} Setter={record => this.setState({ User: record })} EmptyOption={true} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'Phone'} Feedback={'Password must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({User: record})} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'MobilePhone'} Label='Mobile Phone' Feedback={'Mobile Phone must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({ User: record })} />
                                            <FormInput<SystemCenter.UserAccount> Record={this.state.User} Field={'Email'} Feedback={'Password must be less than 200 characters.'} Valid={field => validUserAccountField(this.state.User, field)} Setter={record => this.setState({ User: record })} />
                                            <FormDatePicker<SystemCenter.UserAccount> Record={this.state.User} Field={'ChangePasswordOn'} Label='Change Password On' Setter={record => this.setState({User: record})} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col"></div>
                                    <div className="col-lg-2">
                                        <FormCheckBox<SystemCenter.UserAccount> Record={this.state.User} Label='Locked Out' Field='LockedOut' Setter={record => this.setState({User: record})} />
                                        <FormCheckBox<SystemCenter.UserAccount> Record={this.state.User} Label='Phone Confirmed' Field='PhoneConfirmed' Setter={record => this.setState({User: record})} />
                                        <FormCheckBox<SystemCenter.UserAccount> Record={this.state.User} Label='Email Confirmed' Field='EmailConfirmed' Setter={record => this.setState({User: record})} />
                                        <FormCheckBox<SystemCenter.UserAccount> Record={this.state.User} Field='Approved' Setter={record => this.setState({ User: record })} />
                                        <FormCheckBox<SystemCenter.UserAccount> Record={this.state.User} Field='ReceiveNotifications' Label='Receive Notifications' Setter={record => this.setState({ User: record })} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary" onClick={() => this.updateUser()} disabled={this.state.User == this.props.User}>Update</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-default" onClick={() => this.setState({ User: this.props.User })} disabled={this.state.User == this.props.User}>Reset</button>
                    </div>
                </div>


            </div>
        );
    }
}