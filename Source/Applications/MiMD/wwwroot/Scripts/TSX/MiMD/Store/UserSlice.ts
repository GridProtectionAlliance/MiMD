//******************************************************************************************************
//  UserSlice.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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

import { Search } from '@gpa-gemstone/react-interactive';
import { IState } from '@gpa-gemstone/react-interactive/lib/GenericSlice';
import { ActionCreatorWithoutPayload, AsyncThunk, createAsyncThunk, createSlice, Draft, Slice } from '@reduxjs/toolkit';
import _ from 'lodash';

type UserValidation = 'Resolving' | 'Valid' | 'Invalid' | 'Unknown';

interface UserState {
    Status: Application.Types.Status,
    SearchStatus: Application.Types.Status,
    Data: Application.Types.iUserAccount[],
    SortField: keyof Application.Types.iUserAccount,
    Ascending: boolean,
    ParentID: (number | null),
    SearchResults: Application.Types.iUserAccount[],
    Filters: Search.IFilter<Application.Types.iUserAccount>[],
    CurrentAccount: Application.Types.iUserAccount,
    ADStatus: UserValidation
}


export default class UserAccountSlice {
    Name: string = "";
    APIPath: string = "";

    Slice: (Slice<UserState>);

    Fetch: (AsyncThunk<string, void | number, {}>);
    DBAction: (AsyncThunk<Application.Types.iUserAccount, { verb: 'POST' | 'DELETE' | 'PATCH', record: Application.Types.iUserAccount }, {}>);
    DBSearch: (AsyncThunk<string, { filter: Search.IFilter<Application.Types.iUserAccount>[], sortField?: keyof Application.Types.iUserAccount, ascending?: boolean }, {}>);
    ADUpdate: (AsyncThunk<Application.Types.iUserAccount, void, {}>);
    SetCurrentUser: (AsyncThunk<{ user: Application.Types.iUserAccount, AD: string }, Application.Types.iUserAccount, {}>);
    LoadExistingUser: (AsyncThunk<Application.Types.iUserAccount, string, {}>);
    SetNewUser: ActionCreatorWithoutPayload;
    Sort: AsyncThunk<void, { SortField: keyof Application.Types.iUserAccount, Ascending: boolean }, {}>;

    Reducer;


    constructor(name: string, apiPath: string) {
        this.Name = name;
        this.APIPath = apiPath;

        const fetch = createAsyncThunk(`${name}/Fetch${name}`, async (parentID: number, { getState }) => {
            const sortfield = ((getState())[this.Name]).SortField
            const asc = ((getState())[this.Name]).Ascending
            const handle = this.GetUsers([], sortfield, asc);
            return await handle;
        });

        const dBAction = createAsyncThunk(`${name}/DBAction${name}`, async (args: { verb: 'POST' | 'DELETE' | 'PATCH', record: Application.Types.iUserAccount }) => {
            const handle = this.Action(args.verb, args.record);
            return await handle
        });

        const dBSearch = createAsyncThunk(`${name}/Search${name}`, async (args: { filter: Search.IFilter<Application.Types.iUserAccount>[], sortfield?: keyof Application.Types.iUserAccount, ascending?: boolean }, { getState }) => {
            let sortfield = args.sortfield;
            let asc = args.ascending;
            const state = (getState())[this.Name] as UserState;

            sortfield = sortfield === undefined ? state.SortField : sortfield;
            asc = asc === undefined ? state.Ascending : asc;

            const handle = this.GetUsers(args.filter, sortfield, asc);
            return await handle;
        });

        const dBSort = createAsyncThunk(`${name}/DBSort${name}`, async (args: { SortField: keyof Application.Types.iUserAccount, Ascending: boolean }, { getState }) => {
            const state = (getState())[name] as IState<Application.Types.iUserAccount>;

            if (state.SortField === args.SortField)
                state.Ascending = !args.Ascending;
            else
                state.SortField = args.SortField as Draft<keyof Application.Types.iUserAccount>;

            state.Data = _.orderBy(state.Data, [state.SortField], [state.Ascending ? "asc" : "desc"])
            state.SearchResults = _.orderBy(state.SearchResults, [state.SortField], [state.Ascending ? "asc" : "desc"])
        });

        const adUpdate = createAsyncThunk(`${name}/ADUpdate${name}`, async (_, { getState }) => {

            const state = (getState())[this.Name] as UserState;

            if (!state.CurrentAccount.UseADAuthentication)
                return await Promise.resolve(state.CurrentAccount);

            const handle = this.getFilledUser(state.CurrentAccount);
            return await handle
        });

        const setUser = createAsyncThunk(`${name}/SetUser${name}`, async (args: Application.Types.iUserAccount) => {

            if (args.UseADAuthentication && args.Name !== null && args.Name.length > 0)
                return await this.getSIDFromUserName(args.Name).then((d) => ({ user: args, AD: d !== args.Name ? 'Valid' : 'Invalid' }));
            else
                return await Promise.resolve({ user: args, AD: 'Unknown' })
        });

        const loadUser = createAsyncThunk(`${name}/LoadUser${name}`, async (userId: string) => {
            const handle = this.GetUser(userId);
            return await handle
        });

        const slice = createSlice({
            name: this.Name,
            initialState: {
                Status: 'unintiated',
                SearchStatus: 'unintiated',
                Data: [],
                SortField: 'Name',
                Ascending: false,
                ParentID: null,
                SearchResults: [],
                Filters: [],
                CurrentAccount: null,
                ADStatus: 'Unknown'
            } as UserState,

            reducers: {
                CreateNewUser: (state: UserState) => {
                    state.ADStatus = 'Unknown';
                    state.CurrentAccount = {
                        UseADAuthentication: false,
                        AccountName: '',
                        FirstName: '',
                        LastName: '',
                        LockedOut: false,
                        Approved: true,
                        ID: 'new',
                        EmailConfirmed: false,
                        ChangePasswordOn: moment().format('YYYY-MM-DD'),
                        Email: '',
                        Name: '',
                        Password: '',
                        Phone: '',
                        PhoneConfirmed: false,
                        DefaultNodeID: '00000000-0000-0000-0000-000000000000'
                    }
                }
            },

            extraReducers: (builder) => {

                builder.addCase(fetch.fulfilled, (state, action) => {
                    state.Status = 'idle';
                    state.Data = JSON.parse(action.payload) as Application.Types.iUserAccount[];
                });
                builder.addCase(fetch.pending, (state, action) => {
                    state.ParentID = (action.meta.arg == null ? 0 : action.meta.arg as number);
                    state.Status = 'loading';
                });
                builder.addCase(fetch.rejected, (state) => {
                    state.Status = 'error';
                });

                builder.addCase(dBAction.pending, (state) => {
                    state.Status = 'loading';
                });
                builder.addCase(dBAction.rejected, (state) => {
                    state.Status = 'error';
                });
                builder.addCase(dBAction.fulfilled, (state) => {
                    state.Status = 'changed';
                    state.SearchStatus = 'changed';
                });
                builder.addCase(dBSort.pending, (state) => {
                    state.Status = 'loading';
                    state.SearchStatus = 'loading';
                });
                builder.addCase(dBSort.rejected, (state) => {
                    state.Status = 'error';
                    state.SearchStatus = 'error';
                });
                builder.addCase(dBSort.fulfilled, (state) => {
                    state.Status = 'idle';
                    state.SearchStatus = 'idle';
                });

                builder.addCase(dBSearch.fulfilled, (state, action) => {
                    state.SearchStatus = 'idle';
                    state.SearchResults = JSON.parse(action.payload) as Application.Types.iUserAccount[];

                    let sortfield = action.meta.arg.sortfield;
                    let asc = action.meta.arg.ascending;

                    sortfield = sortfield === undefined ? state.SortField : sortfield;
                    asc = asc === undefined ? state.Ascending : asc;

                    if (sortfield !== state.SortField || asc !== state.Ascending) {
                        state.Ascending = asc;
                        state.SortField = sortfield;
                        state.Data = _.orderBy(state.Data, [sortfield], [asc ? "asc" : "desc"])
                    }
                });
                builder.addCase(dBSearch.pending, (state) => {
                    state.SearchStatus = 'loading';
                });
                builder.addCase(dBSearch.rejected, (state) => {
                    state.SearchStatus = 'error';
                });

                builder.addCase(adUpdate.fulfilled, (state, action) => {
                    state.Status = 'idle';
                    state.CurrentAccount = action.payload;
                });
                builder.addCase(adUpdate.pending, (state) => {
                    state.Status = 'loading';
                });
                builder.addCase(adUpdate.rejected, (state) => {
                    state.Status = 'error';
                });

                builder.addCase(setUser.fulfilled, (state, action) => {
                    state.ADStatus = action.payload.AD as UserValidation;
                    state.CurrentAccount = action.payload.user;
                });
                builder.addCase(setUser.pending, (state) => {
                    state.ADStatus = 'Resolving';
                });
                builder.addCase(setUser.rejected, (state) => {
                    state.ADStatus = 'Unknown';
                });

                builder.addCase(loadUser.fulfilled, (state, action) => {
                    state.Status = 'idle';
                    state.CurrentAccount = action.payload;
                    state.ADStatus = 'Unknown'
                });
                builder.addCase(loadUser.pending, (state) => {
                    state.Status = 'loading';
                });
                builder.addCase(loadUser.rejected, (state) => {
                    state.Status = 'error';
                });
            }

        });

        this.Fetch = fetch;
        this.DBAction = dBAction;
        this.DBSearch = dBSearch;
        this.Slice = slice;
        this.ADUpdate = adUpdate;
        this.SetCurrentUser = setUser;
        this.LoadExistingUser = loadUser;
        const { CreateNewUser } = slice.actions
        this.Sort = dBSort;
        this.SetNewUser = CreateNewUser;
        this.Reducer = slice.reducer;
    }

    private GetUsers(filter: Search.IFilter<Application.Types.iUserAccount>[], sortField: keyof Application.Types.iUserAccount, Ascending: boolean): JQuery.jqXHR<string> {
        return $.ajax({
            type: "Post",
            url: `${this.APIPath}/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: filter, OrderBy: sortField, Ascending: Ascending }),
            cache: false,
            async: true
        });
    }

    private getFilledUser(account: Application.Types.iUserAccount): JQuery.jqXHR<Application.Types.iUserAccount> {
        return $.ajax({
            type: "POST",
            url: `${this.APIPath}/FilledUserAccount`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(account),
            cache: false,
            async: true
        });

    }

    private Action(verb: 'POST' | 'DELETE' | 'PATCH', record: Application.Types.iUserAccount): JQuery.jqXHR<Application.Types.iUserAccount> {
        let action = '';
        if (verb === 'POST') action = 'Add';
        else if (verb === 'DELETE') action = 'Delete';
        else if (verb === 'PATCH') action = 'Update';

        return $.ajax({
            type: verb,
            url: `${this.APIPath}/${action}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ ...record }),
            cache: false,
            async: true
        });
    }

    private GetUser(id: string): JQuery.jqXHR<Application.Types.iUserAccount> {
        return $.ajax({
            type: "GET",
            url: `${this.APIPath}/One/${id}`,
            contentType: "application/json; charset=utf-8",
            cache: false,
            async: true
        });
    }

    private getSIDFromUserName(accountName: string): JQuery.jqXHR<string> {
        return $.ajax({
            type: "POST",
            url: `${this.APIPath}/SID`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(accountName),
            cache: false,
            async: true
        });

    }


    public Data = (state) => state[this.Name].Data as Application.Types.iUserAccount[];
    public Status = (state) => state[this.Name].Status as Application.Types.Status;
    public SortField = (state) => state[this.Name].SortField as keyof Application.Types.iUserAccount;
    public Ascending = (state) => state[this.Name].Ascending as boolean;

    public SearchFilters = (state) => state[this.Name].Filters as Search.IFilter<Application.Types.iUserAccount>[];
    public SearchResults = (state) => state[this.Name].SearchResults as Application.Types.iUserAccount[];
    public SearchStatus = (state) => state[this.Name].SearchStatus as Application.Types.Status;
    public CurrentID = (state) => state[this.Name].CurrentAccount.Id as string | undefined;
    public CurrentUser = (state) => state[this.Name].CurrentAccount as Application.Types.iUserAccount;
    public ADValidation = (state) => state[this.Name].ADStatus as UserValidation


}

