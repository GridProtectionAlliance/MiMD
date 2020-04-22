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
//
//******************************************************************************************************

import * as React from 'react';
import { OpenXDA } from '../global';
declare var homePath: string;

function NoteWindow(props: { ID: number , Type: 'Asset' | 'Meter' | 'Location' | 'Customer' | 'User'}): JSX.Element {
    const [noteTypeID, setNoteTypeID] = React.useState<number>(0);
    const [tableRows, setTableRows] = React.useState<Array<JSX.Element>>([]);
    const [note, setNote] = React.useState<string>('');
    const [count, setCount] = React.useState<number>(0);

    React.useEffect(() => {
        getNoteTypeID();
        getNotes();
    }, [props.ID]);

    function handleEdit(d: OpenXDA.Note) {
        setNote(d.Note);
        deleteNote(d);
    }

    function getNotes(): void {
       $.ajax({
            type: "GET",
           url: `${homePath}api/OpenXDA/Note/ForObject/${props.Type}/${props.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
       }).done((data: Array<OpenXDA.Note>) => {
           var rows = data.map(d => <tr key={d.ID}><td>{d.Note}</td><td>{moment.utc(d.Timestamp).format("MM/DD/YYYY HH:mm")}</td><td>{d.UserAccount}</td><td>
               <button className="btn btn-sm" onClick={(e) => handleEdit(d)}><span><i className="fa fa-pencil"></i></span></button>
               <button className="btn btn-sm" onClick={(e) => deleteNote(d)}><span><i className="fa fa-times"></i></span></button>
           </td></tr>)

           setTableRows(rows);
           setCount(rows.length);
       });;
    }

    function getNoteTypeID(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/NoteType`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((data: Array<OpenXDA.NoteType>) => {
            var record = data.find(d => d.ReferenceTableName == props.Type)
            setNoteTypeID(record.ID);
        });;
    }



    function deleteNote(d: OpenXDA.Note): void {
        $.ajax({
            type: "DELETE",
            url: `${homePath}api/OpenXDA/Note/Delete`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(d),
            cache: true,
            async: true
        }).done(() => getNotes());
    }


    function addNote(): void {
        $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/Note/Add`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ ID: 0, NoteTypeID: noteTypeID, ReferenceTableID: props.ID, Note: note, Timestamp: moment().format('MM/DD/YYYY HH:mm'), UserAccount: '' } as OpenXDA.Note),
            dataType: 'json',
            cache: true,
            async: true
        }).done(e => {
            setNote('');
            getNotes();
        });
    }

    return (
        <div className="card" style={{ marginBottom: 10 }}>
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        <h4>Notes:</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div style={{ height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, overflowY: 'auto' }}>
                    <table className="table" >
                        <thead>
                            <tr><th style={{ width: '50%' }}>Note</th><th>Time</th><th>User</th><th></th></tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>

                    </table>
                </div>
                <textarea className="form-control" rows={4} value={note} onChange={(e) => setNote((e.target as any).value)}></textarea>
            </div>
            <div className="card-footer">
                <div className="btn-group mr-2">
                    <button className="btn btn-primary" onClick={addNote} style={{ cursor: note.length == 0 ? 'not-allowed' : 'pointer' }} disabled={note.length == 0}>Add Note</button>
                </div>
                <div className="btn-group mr-2">
                    <button className="btn btn-default" onClick={() => setNote('')} style={{ cursor: note.length == 0 ? 'not-allowed' : 'pointer' }} disabled={note.length == 0}>Clear</button>
                </div>
            </div>
        </div>
    );
}

export default NoteWindow;