//******************************************************************************************************
//  AssetNote.tsx - Gbtc
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
//  01/22/2020 - Billy Ernest
//       Generated original version of source code.
//  07/30/2021 - C. Lackner
//       Moved UI to @gpa-gemstone\common-pages
//
//******************************************************************************************************
import { Application, OpenXDA } from '@gpa-gemstone/application-typings';
import { Note } from '@gpa-gemstone/common-pages';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import DiagnosticFileChanges from '../Diagnostic/DiagnosticFileChanges';
import { ConfigurationNoteSlice, DiagnosticNoteSlice, NoteAppSlice, NoteTagSlice, NoteTypeSlice } from '../Store/Store';

declare var homePath: string;
interface IProps { ID: number, Tag: 'Configuration' | 'Diagnostic' }

function NoteWindow(props: IProps): JSX.Element {
    const dispatch = useAppDispatch();

    const noteType = useAppSelector(NoteTypeSlice.Data) as OpenXDA.Types.NoteType[];
    const noteTag = useAppSelector(NoteTagSlice.Data) as OpenXDA.Types.NoteTag[];
    const noteApp = useAppSelector(NoteAppSlice.Data) as OpenXDA.Types.NoteApplication[];

    const typeStatus = useAppSelector(NoteTypeSlice.Status) as Application.Types.Status;
    const tagStatus = useAppSelector(NoteTagSlice.Status) as Application.Types.Status;
    const appStatus = useAppSelector(NoteAppSlice.Status) as Application.Types.Status; 

    React.useEffect(() => {
        if (typeStatus == 'unintiated')
            dispatch(NoteTypeSlice.Fetch());
    }, [dispatch, typeStatus])

    React.useEffect(() => {
        if (tagStatus == 'unintiated')
            dispatch(NoteTagSlice.Fetch());
    }, [dispatch, tagStatus])

    React.useEffect(() => {
        if (appStatus == 'unintiated')
            dispatch(NoteAppSlice.Fetch());
    }, [dispatch, appStatus])


    if (isNaN(props.ID)) return null;

    let slice;
    if (props.Tag == 'Configuration')
        slice = ConfigurationNoteSlice;
    if (props.Tag == 'Diagnostic')
        slice = DiagnosticNoteSlice;
    let tag = noteTag.find(t => t.Name == props.Tag);
    let type = noteType.find(t => t.Name == 'Meter');
    let app = noteApp.find(a => a.Name == 'MiMD');

    if (tag == null || type == null || app == null)
        return null;

    return (
        <Note MaxHeight={500} ReferenceTableID={props.ID} NoteApplications={[app]} NoteTags={[tag]} NoteTypes={[type]} NoteSlice={slice} />
    );

}

export default NoteWindow;