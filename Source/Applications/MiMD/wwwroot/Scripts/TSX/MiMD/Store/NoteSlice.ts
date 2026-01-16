//******************************************************************************************************
//  NoteSlice.ts - Gbtc
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
//  07/30/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
import { Application, OpenXDA } from '@gpa-gemstone/application-typings'
import { ActionCreatorWithPayload, AsyncThunk, createAsyncThunk, createSlice, Draft, PayloadAction, Slice } from '@reduxjs/toolkit';
import _ from 'lodash';

declare let homePath: string;

type NoteTag = 'Configuration' | 'Diagnostic';


interface NoteState {
    Status: Application.Types.Status,
    Data: OpenXDA.Types.Note[],
    SortField: keyof OpenXDA.Types.Note,
    Ascending: boolean,
    ParentID: (number | null),
}


export default class NoteSlice {
    Name: string = "";
    APIPath: string = "";
    NoteTag: NoteTag = "Configuration";
    Slice: (Slice<NoteState>);
    Fetch: (AsyncThunk<string, void | number, unknown>);
    DBAction: (AsyncThunk<OpenXDA.Types.Note, { verb: 'POST' | 'DELETE' | 'PATCH', record: OpenXDA.Types.Note }, unknown>);
    Sort: ActionCreatorWithPayload<{ SortField: keyof OpenXDA.Types.Note, Ascending: boolean }, string>;
    Reducer;


    constructor(name: string, tag: NoteTag) {
        this.NoteTag = tag;
        this.Name = name;
        this.APIPath = `${homePath}api/OpenXDA/Note`;

        const fetch = createAsyncThunk(`${this.Name} / Fetch${this.Name}`, async (parentID: number, { getState }) => {
            const sortfield = ((getState())[this.Name]).SortField
            const asc = ((getState())[this.Name]).Ascending
            const handle = this.GetNotes(parentID, sortfield, asc);
            return await handle;
        });

        const dBAction = createAsyncThunk(`${this.Name}/DBAction${this.Name}`, async (args: { verb: 'POST' | 'DELETE' | 'PATCH', record: OpenXDA.Types.Note }) => {
            const handle = this.Action(args.verb, args.record);
            return await handle
        });

        const slice = createSlice({
            name: this.Name,
            initialState: {
                Status: 'uninitiated',
                SearchStatus: 'uninitiated',
                Error: null,
                Data: [],
                SortField: 'Timestamp',
                Ascending: false,
                ParentID: null,
                SearchResults: [],
                Filter: []
            } as NoteState,
            reducers: {
                Sort: (state, action: PayloadAction<{ SortField: keyof OpenXDA.Types.Note, Ascending: boolean }>) => {
                    if (state.SortField === action.payload.SortField)
                        state.Ascending = !action.payload.Ascending;
                    else
                        state.SortField = action.payload.SortField as Draft<keyof OpenXDA.Types.Note>;

                    state.Data = _.orderBy(state.Data, [state.SortField], [state.Ascending ? "asc" : "desc"])
                }
            },
            extraReducers: (builder) => {

                builder.addCase(fetch.fulfilled, (state, action) => {
                    state.Status = 'idle';
                    state.Data = _.orderBy(JSON.parse(action.payload) as OpenXDA.Types.Note[], [state.SortField], [state.Ascending ? "asc" : "desc"]);
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
                });
            }

        });

        this.Fetch = fetch;
        this.DBAction = dBAction;
        this.Slice = slice;
        const { Sort } = slice.actions
        this.Sort = Sort;
        this.Reducer = slice.reducer;
    }

    private GetNotes(parentID: number | void, sortField: keyof OpenXDA.Types.Note, Ascending: boolean): JQuery.jqXHR<string> {

        const filter = [
            { FieldName: 'NoteTypeID', SearchText: "(SELECT ID FROM NoteType WHERE ReferenceTableName = 'Meter')", Operator: '=', Type: 'Query', IsPivotColumn: false },
            { FieldName: 'ReferenceTableID', SearchText: parentID, Operator: '=', Type: 'integer', IsPivotColumn: false },
            { FieldName: 'NoteApplicationID', SearchText: "(SELECT ID From NoteApplication WHERE Name = 'MiMD')", Operator: '=', Type: 'Query', IsPivotColumn: false },
            { FieldName: 'NoteTagID', SearchText: "(SELECT ID From NoteTag WHERE Name = '" + this.NoteTag + "')", Operator: '=', Type: 'Query', IsPivotColumn: false }
        ]

        return $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/Note/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: filter, OrderBy: sortField, Ascending: Ascending }),
            cache: false,
            async: true
        })

    }

    private Action(verb: 'POST' | 'DELETE' | 'PATCH', record: OpenXDA.Types.Note): JQuery.jqXHR<OpenXDA.Types.Note> {
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

    public Data = (state) => state[this.Name].Data as OpenXDA.Types.Note[];
    public Status = (state) => state[this.Name].Status as Application.Types.Status;
    public SortField = (state) => state[this.Name].SortField as keyof OpenXDA.Types.Note;
    public Ascending = (state) => state[this.Name].Ascending as boolean;
    public ParentID = (state) => state[this.Name].ParentID as number;
}
