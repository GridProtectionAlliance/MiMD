//******************************************************************************************************
//  SecurityRoleSlice.tsx - Gbtc
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
//  08/03/2021 - C Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
import { Application } from '@gpa-gemstone/application-typings'

import {    AsyncThunk, createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit';
import _ from 'lodash';

declare var homePath: string;

interface iState {
    Status: Application.Types.Status,
    UserStatus: Application.Types.Status,
    UserRoles: Application.Types.iApplicationRoleUserAccount[],
    Roles: Application.Types.iApplicationRole<Application.Types.SecurityRoleName>[],
    UserID: string
}


export default class SecurityRoleSlice {
    Name: string = "";
    APIPath: string = "";

    Slice: (Slice<iState>);

    FetchRoles: (AsyncThunk<any, void, {}>);
    FetchUserRoles: (AsyncThunk<any, string, {}>);
    SetUserRoles: (AsyncThunk<any, { UserId: string, Roles: Application.Types.iApplicationRoleUserAccount[] }, {}>);

    Reducer: any;


    constructor(name: string, apiPath: string) {
        this.Name = name;
        this.APIPath = apiPath;

        const fetch = createAsyncThunk(`${name}/FetchRoles${name}`, async (_, { }) => {
            const handle = this.GetSecurityRoles();
            return await handle;
        });

        const fetchUser = createAsyncThunk(`${name}/FetchUserRoles${name}`, async (userID: string, { }) => {
            if (userID == 'new')
                return Promise.resolve([]);

            const handle = this.GetSecurityRolesForUser(userID);
            return await handle;
        });

        const setRoles = createAsyncThunk(`${name}/SetUserRoles${name}`, async (args: { UserId: string, Roles: Application.Types.iApplicationRoleUserAccount[] }, { }) => {
            const data = args.Roles.map(r => ({ ...r, UserAccountID: args.UserId }))
            const handle = this.UpdateSecurityRolesForUser(data);
            return await handle;
        });

        const slice = createSlice({
            name: this.Name,
            initialState: {
                Status: 'unintiated',
                UserStatus: 'unintiated',
                Roles: [],
                UserRoles: [],
                UserID: ''
            } as iState,

            reducers: {
            },

            extraReducers: (builder) => {

                builder.addCase(fetch.fulfilled, (state, action) => {
                    state.Status = 'idle';
                    state.Roles = action.payload as Application.Types.iApplicationRole<Application.Types.SecurityRoleName>[];
                });
                builder.addCase(fetch.pending, (state, action) => {
                    state.Status = 'loading';
                });
                builder.addCase(fetch.rejected, (state, action) => {
                    state.Status = 'error';
                });

                builder.addCase(fetchUser.pending, (state) => {
                    state.UserStatus = 'loading';
                });
                builder.addCase(fetchUser.rejected, (state, action) => {
                    state.UserStatus = 'error';
                });
                builder.addCase(fetchUser.fulfilled, (state, action) => {
                    state.UserStatus = 'idle';
                    state.UserRoles = action.payload as Application.Types.iApplicationRoleUserAccount[];
                    state.UserID = action.meta.arg;
                });

                builder.addCase(setRoles.pending, (state) => {
                    state.UserStatus = 'loading';
                });
                builder.addCase(setRoles.rejected, (state, action) => {
                    state.UserStatus = 'error';
                });
                builder.addCase(setRoles.fulfilled, (state, action) => {
                    state.UserStatus = 'changed';
                });

            }

        });


        this.Slice = slice;
        this.FetchRoles = fetch;
        this.FetchUserRoles = fetchUser;
        this.SetUserRoles = setRoles;

        this.Reducer = slice.reducer;
    }


    private GetSecurityRoles(): JQuery.jqXHR<Application.Types.iApplicationRole<Application.Types.SecurityRoleName>[]> {
        return $.ajax({
            type: "GET",
            url: `${this.APIPath}/ApplicationRole`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    private GetSecurityRolesForUser(userId: string): JQuery.jqXHR<Application.Types.iApplicationRoleUserAccount[]> {
        return $.ajax({
            type: "GET",
            url: `${this.APIPath}/ApplicationRoleUserAccount/${userId}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    private UpdateSecurityRolesForUser(data: Application.Types.iApplicationRoleUserAccount[]): JQuery.jqXHR<string> {
        return $.ajax({
            type: "PATCH",
            url: `${this.APIPath}/ApplicationRoleUserAccount/UpdateArray`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(data),
            cache: true,
            async: true
        });
    }

    public Status = (state: any) => state[this.Name].Status as Application.Types.Status;
    public CurrentRoleStatus = (state: any) => state[this.Name].UserStatus as Application.Types.Status;
    public AvailableRoles = (state: any) => state[this.Name].Roles as Application.Types.iApplicationRole<Application.Types.SecurityRoleName>[];
    public Roles = (state: any) => state[this.Name].UserRoles as Application.Types.iApplicationRoleUserAccount[];
}

