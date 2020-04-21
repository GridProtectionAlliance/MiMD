//******************************************************************************************************
//  Meter.tsx - Gbtc
//
//  Copyright © 2019, Grid Protection Alliance.  All Rights Reserved.
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
//  08/27/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { OpenXDA } from '../global';
import { useHistory } from 'react-router-dom';
declare var homePath: string;
declare var ace: any;

function ConfigurationHistory(props: { MeterConfigurationID: number, MeterKey: string }) {
    const history = useHistory();
    const [meterConfiguration, setMeterConfiguration] = React.useState<OpenXDA.MeterConfiguration>(null);
    const [tab, setTab] = React.useState<'configuration' | 'filesProcessed'>('configuration');
    const [filesProcessed, setFilesProcessed] = React.useState<Array<OpenXDA.DataFile>>([]);
    const [changed, setChanged] = React.useState<boolean>(false);
    React.useLayoutEffect(() => getData(), [props.MeterConfigurationID]);

    function getData() {
        getFilesProcessed();
        getMeterConfiguration();
    }

    function getMeterConfiguration(): Promise<OpenXDA.MeterConfiguration> {
       return $.ajax({
            type: "GET",
           url: `${homePath}api/OpenXDA/MeterConfiguration/One/${props.MeterConfigurationID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
       }).done((record) => {
           setMeterConfiguration(record)
           initializeAce(record);

       });
    }

    function getFilesProcessed(): void {
        $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/MeterConfiguration/${props.MeterConfigurationID}/FilesProcessed`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        }).done((data: Array<OpenXDA.DataFile>) => setFilesProcessed( data));
    }

    function saveEdit(): void{
        let newRecord: OpenXDA.MeterConfiguration = _.clone(meterConfiguration);
        newRecord.ID = 0;
        newRecord.ConfigText = ace.edit('template').getValue();
        newRecord.DiffID = null;
        $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/MeterConfiguration/Add`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(newRecord),
            cache: false,
            async: true
        }).done((data: OpenXDA.MeterConfiguration) => history.push({ pathname: `${homePath}index.cshtml`, search: `?name=ConfigurationHistory&MeterKey=${props.MeterKey}&MeterConfigurationID=${data.ID}`, state: {} }));
    }


    function initializeAce(record: OpenXDA.MeterConfiguration) {
        let editor = ace.edit("template");
        editor.getSession().setMode("ace/mode/xml");
        editor.setFontSize("14px");
        editor.setValue(record.ConfigText);
        editor.clearSelection();
        editor.gotoLine(0);
        editor.session.off('change');
        editor.session.on('change', delta => {
            setChanged(record.ConfigText != editor.getValue())
        });

    }


    
    if (meterConfiguration == null) return null;
    return (
        <div style={{ width: '100%', height: window.innerHeight - 63, maxHeight: window.innerHeight - 63, overflow: 'hidden', padding: 15 }}>
            <div className="row">
                <div className="col">
                    <h2>{props.MeterKey} - Configuration Revision: {meterConfiguration.RevisionMajor + '.' + meterConfiguration.RevisionMinor}</h2>
                </div>
            </div>


            <hr />
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={"nav-link" + (tab == "configuration" ? " active" : "")} onClick={() => setTab('configuration')} data-toggle="tab" href="#configuration">Configuration</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + (tab == "filesProcessed" ? " active" : "")} onClick={() => setTab('filesProcessed')} data-toggle="tab" href="#filesProcessed">Files Processed</a>
                </li>
            </ul>

            <div className="tab-content" style={{ maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
                <div className={"tab-pane " + (tab == "configuration" ? " active" : "fade")} id="configuration">
                    <div id="template" style={{ height: window.innerHeight - 275 }} ></div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary pull-right" onClick={saveEdit} disabled={!changed}>Save Edit</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-danger pull-right" onClick={getData} disabled={!changed}>Reset</button>
                    </div>
                </div>
                <div className={"tab-pane " + (tab == "filesProcessed" ? " active" : "fade")} id="filesProcessed">
                    <div style={{ width: '100%', maxHeight: window.innerHeight - 275, padding: 30, overflowY: 'auto' }}>
                        <table className='table'>
                            <thead>
                                <tr><td>File Path</td><td>Creation Time</td></tr>
                            </thead>
                            <tbody>
                                {filesProcessed.map((a, i) => <tr key={i}><td>{a.FilePath}</td><td>{a.CreationTime}</td></tr>)}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigurationHistory;
