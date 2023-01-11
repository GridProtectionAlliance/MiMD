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

import { OpenXDA, SystemCenter } from "@gpa-gemstone/application-typings";
import { GenericSlice } from "@gpa-gemstone/react-interactive";
import { configureStore } from "@reduxjs/toolkit";
import { MiMD } from "../global";
import AdditionalUserFieldSlice from "./AdditionalUserFieldSlice";
import NoteSlice from "./NoteSlice";
import SecurityRoleSlice from "./SecurityRoleSlice";
import UserSlice from "./UserSlice";

//Dispatch and Selector Types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export const NoteTypeSlice = new GenericSlice<OpenXDA.Types.NoteType>('NoteType', `${homePath}api/OpenXDA/NoteType`, 'Name', true);
export const NoteTagSlice = new GenericSlice<OpenXDA.Types.NoteTag>('NoteTag', `${homePath}api/OpenXDA/NoteTag`, 'Name', true);
export const NoteAppSlice = new GenericSlice<OpenXDA.Types.NoteApplication>('NoteApp', `${homePath}api/OpenXDA/NoteApp`, 'Name', true);

export const ConfigurationNoteSlice = new NoteSlice('ConfigurationNote', 'Configuration');
export const DiagnosticNoteSlice = new NoteSlice('DiagnosticNote', 'Diagnostic');

export const ValueListGroupSlice = new GenericSlice<SystemCenter.Types.ValueListGroup>('ValueListGroup', `${homePath}api/ValueListGroup`, 'Name');
export const ValueListSlice = new GenericSlice<SystemCenter.Types.ValueListItem>('ValueList', `${homePath}api/ValueList`, 'SortOrder');

export const ConfigurationMeterSlice = new GenericSlice<MiMD.Meter>('ConfigurationMeter', `${homePath}api/OpenXDA/ConfigurationMeter`, 'DateLastChanged', false);
export const DiagnosticMeterSlice = new GenericSlice<MiMD.DiagnosticMeter>('DiagnosticMeter', `${homePath}api/OpenXDA/DiagnosticMeter`, 'DateLastChanged', false);

export const UserAccountSlice = new UserSlice('UserAccounts', `${homePath}api/MiMD/UserAccount`);
export const UserAdditionalFieldSlice = new AdditionalUserFieldSlice('AdditionalUserFields', `${homePath}api/MiMD`);
export const MiMDSecurityRoleSlice = new SecurityRoleSlice('SecurityRole', `${homePath}api/MiMD`);

const store = configureStore({
    reducer: {
        NoteType: NoteTypeSlice.Reducer,
        NoteTag: NoteTagSlice.Reducer,
        NoteApp: NoteAppSlice.Reducer,
        ConfigurationNote: ConfigurationNoteSlice.Reducer,
        DiagnosticNote: DiagnosticNoteSlice.Reducer,
        ConfigurationMeter: ConfigurationMeterSlice.Reducer,
        DiagnosticMeter: DiagnosticMeterSlice.Reducer,
        UserAccounts: UserAccountSlice.Reducer,
        AdditionalUserFields: UserAdditionalFieldSlice.Reducer,
        SecurityRole: MiMDSecurityRoleSlice.Reducer,
        ValueListGroup: ValueListGroupSlice.Reducer,
        ValueList: ValueListSlice.Reducer
    }
});
export default store;