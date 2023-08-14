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
import {  ActionCreatorWithPayload, AsyncThunk, createAsyncThunk, createSlice, Draft, PayloadAction, Slice } from '@reduxjs/toolkit';
import _ from 'lodash';

interface iState {
    FieldStatus: Application.Types.Status,
    ValueStatus: Application.Types.Status,
    Fields: Application.Types.iAdditionalUserField[],
    Values: Application.Types.iAdditionalUserFieldValue[],
    ParentID: string,
    SortField: keyof Application.Types.iAdditionalUserField,
    Ascending: boolean,
    Data?: object,
    SearchResults?: object
}


export default class AdditionalUserFieldSlice {
    Name: string = "";
    APIPath: string = "";

    Slice: (Slice<iState>);

    FetchField: AsyncThunk<string, void, unknown>;
    FieldAction: AsyncThunk<Application.Types.iAdditionalUserField, { Verb: 'POST' | 'DELETE' | 'PATCH', Record: Application.Types.iAdditionalUserField }, unknown>;
    FetchValues: AsyncThunk<Application.Types.iAdditionalUserFieldValue[], number | string, unknown>;
    UpdateValues: AsyncThunk<string, { ParentID: number | string, Values: Application.Types.iAdditionalUserFieldValue[] }, unknown>;
    Sort: ActionCreatorWithPayload<{ SortField: keyof Application.Types.iAdditionalUserField, Ascending: boolean }>;

    Reducer;


    constructor(name: string, apiPath: string) {
        this.Name = name;
        this.APIPath = apiPath;

        const fetchField = createAsyncThunk(`${name}/FetchField${name}`, async () => {
            const handle = this.getFields();
            return await handle;
        });

        const fieldAction = createAsyncThunk(`${name}/DBAction${name}`, async (args: { Verb: 'POST' | 'DELETE' | 'PATCH', Record: Application.Types.iAdditionalUserField }) => {
            const handle = this.Action(args.Verb, args.Record);
            return await handle
        });

        const fetchValue = createAsyncThunk(`${name}/FetchValue${name}`, async (userID: string) => {
            const handle = this.GetValues(userID);
            return await handle;
        });

        const updateValue = createAsyncThunk(`${name}/Fetch${name}`, async (args: { ParentID: number | string, Values: Application.Types.iAdditionalUserFieldValue[] }) => {
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
                Sort: (state: iState, action: PayloadAction<{ SortField: keyof Application.Types.iAdditionalUserField, Ascending: boolean }>) => {
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
                builder.addCase(fetchField.pending, (state) => {
                    state.FieldStatus = 'loading';
                });
                builder.addCase(fetchField.rejected, (state) => {
                    state.FieldStatus = 'error';
                });

                builder.addCase(fieldAction.pending, (state) => {
                    state.FieldStatus = 'loading';
                });
                builder.addCase(fieldAction.rejected, (state) => {
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
                builder.addCase(fetchValue.pending, (state) => {
                    state.ValueStatus = 'loading';
                });
                builder.addCase(fetchValue.rejected, (state) => {
                    state.ValueStatus = 'error';
                });

                builder.addCase(updateValue.pending, (state) => {
                    state.ValueStatus = 'loading';
                });
                builder.addCase(updateValue.rejected, (state) => {
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

    public Fields = (state) => (state[this.Name] as iState).Fields as Application.Types.iAdditionalUserField[];
    public Values = (state) => (state[this.Name] as iState).Values as Application.Types.iAdditionalUserFieldValue[];
    public FieldStatus = (state) => (state[this.Name] as iState).FieldStatus as Application.Types.Status;
    public ValueStatus = (state) => (state[this.Name] as iState).ValueStatus as Application.Types.Status;
    public ValueParentId = (state) => (state[this.Name] as iState).ParentID as number | string;
    public SortField = (state) => (state[this.Name] as iState).SortField as keyof Application.Types.iAdditionalUserField;
    public Ascending = (state) => (state[this.Name] as iState).Ascending as boolean;

}

