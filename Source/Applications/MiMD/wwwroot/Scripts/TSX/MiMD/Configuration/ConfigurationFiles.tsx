//******************************************************************************************************
//  ConfigurationFiles.tsx - Gbtc
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

const ConfigurationFiles = (props: { MeterID: number, FileName: string }) => {
    let history = useHistory();

    const [configFiles, setConfigFiles] = React.useState<Array<any>>([]);

    React.useEffect(() => {
        if (isNaN(props.MeterID)) return;

        let handle1 = getConfigFiles();
        handle1.done((data) => setConfigFiles(data));

        return () => {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, [props.MeterID]);


    function getConfigFiles() {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/ConfigurationFiles/${props.MeterID}/LastWrites`,
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

    function handleSelect(fileName, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: `?name=Configuration&MeterID=${props.MeterID}&FileName=${fileName}`, state: {} })
    }

    if (isNaN(props.MeterID)) return null;
    return (
        <div className="card">
            <div className="card-header">Configuration Files:</div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr><th>File</th><th>Last Write Time</th><th># of Changes</th></tr>
                    </thead>
                    <tbody>
                        {configFiles.map((cf, i) =>
                            <tr key={i} style={{ cursor: 'pointer', backgroundColor: (cf.FileName == props.FileName ? 'yellow' : null) }} onClick={(evt) => handleSelect(cf.FileName, evt)}>
                                <td>{cf.FileName}</td>
                                <td style={{backgroundColor: getColor(cf.LastWriteTime)}}>{moment(cf.LastWriteTime).format("MM/DD/YY HH:mm CT")}</td>
                                <td>{cf.Changes}</td>

                            </tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default ConfigurationFiles;

