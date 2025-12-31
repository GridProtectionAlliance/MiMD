//******************************************************************************************************
//  ColorConfigSlice.ts - Gbtc
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
//  09/27/2023 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************


import { Application } from '@gpa-gemstone/application-typings'
import {AsyncThunk, createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit';
import { MiMD } from '../global';

declare let homePath: string;

interface ColorConfigState {
    Status: Application.Types.Status,
    Data: MiMD.IConfigColors[]
}

export default class ColorConfigSlice {
    Name: string = "ColorConfig";
    APIPath: string = `${homePath}api/MiMD/ColorConfig`;
    Slice: (Slice<ColorConfigState>);
    Fetch: AsyncThunk<MiMD.IConfigColors[], void, object>;
    DBAction: (AsyncThunk<MiMD.IConfigColors, { verb: 'POST' | 'DELETE' | 'PATCH', record: MiMD.IConfigColors }, unknown>);
    Reducer;

    constructor(name: string, apiPath: string) {
        this.Name = name;
        this.APIPath = apiPath;

        const fetch = createAsyncThunk(`${this.Name}/Fetch${this.Name}`, async () => {
            const handle = this.GetColors();
            return await handle;
        });

        const dBAction = createAsyncThunk(`${this.Name}/DBAction${this.Name}`, async (args: { verb: 'POST' | 'DELETE' | 'PATCH', record: MiMD.IConfigColors }) => {
            const handle = this.Action(args.verb, args.record);
            return await handle
        });

        const slice = createSlice({
            name: this.Name,
            initialState: {
                Status: 'uninitiated',
                Data: [],
            } as ColorConfigState,
            reducers: {
            },
            extraReducers: (builder) => {
                builder.addCase(fetch.fulfilled, (state, action) => {
                    state.Status = 'idle';
                    state.Data = action.payload; 
                });
                builder.addCase(fetch.pending, (state) => {
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
        this.Reducer = slice.reducer;
    }

    private GetColors(): JQuery.jqXHR<MiMD.IConfigColors[]> {
        return $.ajax({
            type: "GET",
            url: this.APIPath,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
    }

    private Action(verb: 'POST' | 'DELETE' | 'PATCH', record: MiMD.IConfigColors): JQuery.jqXHR<MiMD.IConfigColors> {
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

    public Data = (state) => state[this.Name].Data as MiMD.IConfigColors[];
    public Status = (state) => state[this.Name].Status as Application.Types.Status;
}