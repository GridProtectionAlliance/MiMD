//******************************************************************************************************
//  SystemCenter.tsx - Gbtc
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
//  08/22/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Application, Page, Section } from "@gpa-gemstone/react-interactive"
import { MiMD } from './global';
import { Provider } from 'react-redux';
import store from './Store/Store';
import ConfigurationByMeter from './Configuration/ConfigurationByMeter';
import DiagnosticByMeter from './Diagnostic/DiagnosticByMeter';
import PRC002ByChange from './PRC-002/ChangeOverview/ChangeOverviewPage';
import PRC002MeterOverviewPage from './PRC-002/MeterOverview/MeterOverviewPage';

declare const homePath: string;
declare const version: string;


const MiMD: React.FunctionComponent = () => {

    return (
        <>
            <Application
                HomePath={homePath}
                DefaultPath={"Configuration"}
                Logo={homePath + "Images/miMD_Clean(for dark bg).png"}
                Version={version}
                OnSignOut={() => { window.location.href = `./@GSF/Web/Security/Views/Login.cshtml?logout=yes`; }}
            >
                <Section Label={"Monitors"}>
                    <Page Name={'Configuration'} Label={"Configuration Changes"} Paths={["/Meter/:meterID", "/Meter/:meterID/File/:FileName"]}>
                        <ConfigurationByMeter useParams={{ meterID: '1' }} />
                    </Page>
                    <Page Name='Diagnostic' Label={"Diagnostic Changes"} Paths={["/Meter/:meterID", "/Meter/:meterID/File/:FileName/Table/:TableName"]}>
                        <DiagnosticByMeter FileName={''} Table={''} useParams={{ meterID: '1'}} /> 
                    </Page>
                </Section>
                <Section Label={"Compliance"}>
                    <Page Name={"PRC002Change"} Paths={["/Record/:recordID"]}>
                        <PRC002ByChange useParams={{recordID: '1'}} />
                    </Page>
                    <Page Name={"PRC002Overview"} Label={"PRC002 Overview"} Paths={["/Meter/:meterID"]}>
                        <PRC002MeterOverviewPage useParams={{ meterID: '1' }} />
                    </Page>
                </Section>
            </Application>
        </>
    )
}

ReactDOM.render(<Provider store={store}><MiMD /></Provider>, document.getElementById('window'));