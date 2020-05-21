//******************************************************************************************************
//  DiagnosticFileChanges.tsx - Gbtc
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
//  05/18/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import { useHistory } from "react-router-dom";

const DiagnosticFileChanges = (props: { MeterID: number, FileName: string, Table: string }) => {
    let history = useHistory();

    const [configFiles, setConfigFiles] = React.useState<Array<any>>([]);
    const [content, setContent] = React.useState<string>('');
    const [html, setHtml] = React.useState<string>('');

    React.useEffect(() => {
        if (isNaN(props.MeterID) || props.FileName == undefined) return;

        let handle1 = getConfigFiles();
        handle1.done((data) => setConfigFiles(data));

        return () => {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, [props.MeterID, props.FileName]);


    function getConfigFiles() {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/DiagnosticFiles/${props.Table}/${props.MeterID}/${props.FileName}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function getColor(date: string) {
        let mom = moment(date);
        let now = moment();
        let days = now.diff(mom, 'days');

        if (days < 1)
            return 'red';
        else if (days < 7)
            return 'orange';
        else if (days < 30)
            return 'yellow';
        else
            return null;
    }

    if (isNaN(props.MeterID) || props.FileName == undefined) return null;
    return (
    <>
        <div className="card">
            <div className="card-header">{props.FileName} History:</div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                            <tr><th>Last Write Time</th><th>Alarms</th>{props.Table == 'AppStatusFileChanges'? <th>File</th>: null}<th>Diff</th></tr>
                    </thead>
                    <tbody>
                        {configFiles.map((cf, i) =>
                            <tr key={i}>
                                <td style={{ backgroundColor: getColor(cf.LastWriteTime) }}>{moment(cf.LastWriteTime).format("MM/DD/YY HH:mm CT")}</td>
                                <td>{cf.Alarms}</td>
                                {props.Table == 'AppStatusFileChanges' ? <td><button className="btn btn-sm" data-toggle='modal' data-target='#showContent' onClick={(e) => { setHtml(`<p>${cf.Text.replace(/\n/g, '<br>')}</p>`) }}><span><i className="fa fa-file"></i></span></button></td> : null}
                                <td><button className="btn btn-sm" data-toggle='modal' data-target='#showContent' onClick={(e) => { setHtml(cf.Html.replace(/&para;/g, ''));}}><span><i className="fa fa-eye"></i></span></button></td>
                            </tr>)}
                    </tbody>

                </table>
            </div>
            </div>
            <div className="modal" id="showContent">
                <div className="modal-dialog modal-lg" style={{maxWidth: '75%'}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{props.FileName}</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body" >
                            <div className="well" style={{backgroundColor: 'lightgrey', fontSize: 18}}dangerouslySetInnerHTML={{ __html: html }}></div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>

            </div>

        </>

    );
}

export default DiagnosticFileChanges;
