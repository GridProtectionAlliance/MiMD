//******************************************************************************************************
//  AdditionalUserFieldSlice.tsx - Gbtc
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
import {  ActionCreatorWithPayload, ActionReducerMapBuilder, AsyncThunk, createAsyncThunk, createSlice, Draft, PayloadAction, Slice } from '@reduxjs/toolkit';
import _ from 'lodash';

declare var homePath: string;

interface iState {
    FieldStatus: Application.Types.Status,
    ValueStatus: Application.Types.Status,
    Fields: Application.Types.iAdditionalUserField[],
    Values: Application.Types.iAdditionalUserFieldValue[],
    ParentID: string,
    SortField: keyof Application.Types.iAdditionalUserField,
    Ascending: boolean
}


export default class AdditionalUserFieldSlice {
    Name: string = "";
    APIPath: string = "";

    Slice: (Slice<iState>);

    FetchField: AsyncThunk<any, void, {}>;
    FieldAction: AsyncThunk<any, { Verb: 'POST' | 'DELETE' | 'PATCH', Record: Application.Types.iAdditionalUserField }, {}>;
    FetchValues: AsyncThunk<any, number | string, {}>;
    UpdateValues: AsyncThunk<any, { ParentID: number | string, Values: Application.Types.iAdditionalUserFieldValue[] }, {}>;
    Sort: ActionCreatorWithPayload<{ SortField: keyof Application.Types.iAdditionalUserField, Ascending: boolean }>;
    ;

    Reducer: any;


    constructor(name: string, apiPath: string) {
        this.Name = name;
        this.APIPath = apiPath;

        const fetchField = createAsyncThunk(`${name}/FetchField${name}`, async (_, { }) => {
            const handle = this.getFields();
            return await handle;
        });

        const fieldAction = createAsyncThunk(`${name}/DBAction${name}`, async (args: { Verb: 'POST' | 'DELETE' | 'PATCH', Record: Application.Types.iAdditionalUserField }, { }) => {
            const handle = this.Action(args.Verb, args.Record);
            return await handle
        });

        const fetchValue = createAsyncThunk(`${name}/FetchValue${name}`, async (userID: string, { getState }) => {
            const handle = this.GetValues(userID);
            return await handle;
        });

        const updateValue = createAsyncThunk(`${name}/Fetch${name}`, async (args: { ParentID: number | string, Values: Application.Types.iAdditionalUserFieldValue[] }, { getState }) => {
            const handle = this.SetValues(args.Values, args.ParentID.toString())
            return await handle;
        });

        const slice = createSlice({
            name: this.Name,
            initialState: {
                FieldStatus: 'unintiated',
                ValueStatus: 'unintiated',
                Fields: [],
                Values: [],
                ParentID: '',
                SortField: 'FieldName',
                Ascending: false
            } as iState,

            reducers: {
                Sort: (state: any, action: PayloadAction<{ SortField: keyof Application.Types.iAdditionalUserField, Ascending: boolean }>) => {
                    if (state.SortField === action.payload.SortField)
                        state.Ascending = !action.payload.Ascending;
                    else
                        state.SortField = action.payload.SortField as Draft<keyof Application.Types.iAdditionalUserField>;

                    state.Data = _.orderBy(state.Data, [state.SortField], [state.Ascending ? "asc" : "desc"])
                    state.SearchResults = _.orderBy(state.SearchResults, [state.SortField], [state.Ascending ? "asc" : "desc"])
                }
            },

            extraReducers: (builder) => {

                builder.addCase(fetchField.fulfilled, (state, action) => {
                    state.FieldStatus = 'idle';
                    state.Fields = JSON.parse(action.payload) as Application.Types.iAdditionalUserField[];
                });
                builder.addCase(fetchField.pending, (state, action) => {
                    state.FieldStatus = 'loading';
                });
                builder.addCase(fetchField.rejected, (state, action) => {
                    state.FieldStatus = 'error';
                });

                builder.addCase(fieldAction.pending, (state) => {
                    state.FieldStatus = 'loading';
                });
                builder.addCase(fieldAction.rejected, (state, action) => {
                    state.FieldStatus = 'error';
                });
                builder.addCase(fieldAction.fulfilled, (state) => {
                    state.FieldStatus = 'changed';
                });


                builder.addCase(fetchValue.fulfilled, (state, action) => {
                    state.ValueStatus = 'idle';
                    state.Values = action.payload;
                    state.ParentID = action.meta.arg;
                });
                builder.addCase(fetchValue.pending, (state, action) => {
                    state.ValueStatus = 'loading';
                });
                builder.addCase(fetchValue.rejected, (state, action) => {
                    state.ValueStatus = 'error';
                });

                builder.addCase(updateValue.pending, (state) => {
                    state.ValueStatus = 'loading';
                });
                builder.addCase(updateValue.rejected, (state, action) => {
                    state.ValueStatus = 'error';
                });
                builder.addCase(updateValue.fulfilled, (state) => {
                    state.ValueStatus = 'changed';
                });
            }

        });


        this.Slice = slice;

        this.FetchField = fetchField;
        this.FieldAction = fieldAction;
        this.FetchValues = fetchValue;
        this.UpdateValues = updateValue;

        const { Sort } = slice.actions
        this.Sort = Sort;
        this.Reducer = slice.reducer;

    }

    private Action(verb: 'POST' | 'DELETE' | 'PATCH', record: Application.Types.iAdditionalUserField): JQuery.jqXHR<Application.Types.iAdditionalUserField> {
        let action = '';
        if (verb === 'POST') action = 'Add';
        else if (verb === 'DELETE') action = 'Delete';
        else if (verb === 'PATCH') action = 'Update';

        return $.ajax({
            type: verb,
            url: `${this.APIPath}/AdditionalUserField/${action}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ ...record }),
            cache: false,
            async: true
        });
    }

    private getFields(): JQuery.jqXHR<string> {
        return $.ajax({
            type: "GET",
            url: `${this.APIPath}/AdditionalUserField/FieldName/1`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        })
    }

    private GetValues(userId: string): JQuery.jqXHR<Application.Types.iAdditionalUserFieldValue[]> {
        return $.ajax({
            type: "GET",
            url: `${this.APIPath}/AdditionalUserFieldValue/${userId}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        })
    }

    private SetValues(d: Application.Types.iAdditionalUserFieldValue[], userID: string): JQuery.jqXHR {
        const data = d.map(v => ({ ...v, UserAccountID: userID }));

        return $.ajax({
            type: "PATCH",
            url: `${this.APIPath}/AdditionalUserFieldValue/Array`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            dataType: 'json',
            cache: true,
            async: true
        })
    }

    public Fields = (state: any) => (state[this.Name] as iState).Fields as Application.Types.iAdditionalUserField[];
    public Values = (state: any) => (state[this.Name] as iState).Values as Application.Types.iAdditionalUserFieldValue[];
    public FieldStatus = (state: any) => (state[this.Name] as iState).FieldStatus as Application.Types.Status;
    public ValueStatus = (state: any) => (state[this.Name] as iState).ValueStatus as Application.Types.Status;
    public ValueParentId = (state: any) => (state[this.Name] as iState).ParentID as number | string;
    public SortField = (state: any) => (state[this.Name] as iState).SortField as keyof Application.Types.iAdditionalUserField;
    public Ascending = (state: any) => (state[this.Name] as iState).Ascending as boolean;

}

