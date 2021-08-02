//******************************************************************************************************
//  Store.ts - Gbtc
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
//  07/28/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import { OpenXDA } from "@gpa-gemstone/application-typings";
import { GenericSlice } from "@gpa-gemstone/react-interactive";
import { configureStore } from "@reduxjs/toolkit";
import { MiMD } from "../global";
import NoteSlice from "./NoteSlice";

export const NoteTypeSlice = new GenericSlice<OpenXDA.Types.NoteType>('NoteType', `${homePath}api/OpenXDA/NoteType`, 'Name', true);
export const NoteTagSlice = new GenericSlice<OpenXDA.Types.NoteTag>('NoteTag', `${homePath}api/OpenXDA/NoteTag`, 'Name', true);
export const NoteAppSlice = new GenericSlice<OpenXDA.Types.NoteApplication>('NoteApp', `${homePath}api/OpenXDA/NoteApp`, 'Name', true);

export const ConfigurationNoteSlice = new NoteSlice('ConfigurationNote', 'Configuration');
export const DiagnosticNoteSlice = new NoteSlice('DiagnosticNote', 'Diagnostic');

export const ConfigurationMeterSlice = new GenericSlice<MiMD.Meter>('ConfigurationMeter', `${homePath}api/OpenXDA/ConfigurationMeter`, 'DateLastChanged', false);

export default configureStore({
    reducer: {
        NoteType: NoteTypeSlice.Reducer,
        NoteTag: NoteTagSlice.Reducer,
        NoteApp: NoteAppSlice.Reducer,
        ConfigurationNote: ConfigurationNoteSlice.Reducer,
        DiagnosticNote: DiagnosticNoteSlice.Reducer,
        ConfigurationMeter: ConfigurationMeterSlice.Reducer
    }
});
