//******************************************************************************************************
//  ConfigurationByMeter.tsx - Gbtc
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
import * as _ from 'lodash';
import { MiMD } from '../../global';
import { PRC002 } from '../ComplianceModels';
import RecordDetail from './RecordDetail';
import ActionList from './ActionList';



declare var homePath: string;

interface IProps {useParams: { recordID: string } }

const PRC002ChangeOverviewPage = (props: IProps) => {
    const [statusList, setStatusList] = React.useState<Array<PRC002.IStatus>>([]);
    
    React.useEffect(() => {
        let handleStatusList = getStatus();

        return () => {
            if (handleStatusList.abort != null) handleStatusList.abort();
        }
    }, []);

    function getStatus(): JQuery.jqXHR<Array<PRC002.IStatus>> {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/ComplianceState/List`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: Array<PRC002.IStatus>) => {
            setStatusList(data);
        });

        return handle;
    }

    
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div style={{ width: '100%' }}>
                    <div className="row" style={{ margin: 0, height: '200px', padding: '15px 0' }}>
                    <RecordDetail stateList={statusList} RecordID={parseInt(props.useParams.recordID)} />
                    </div> 
                <div className="row" style={{ margin: 0 }}>
                    <div className="col" style={{ width: '100%', height: 'calc( 100% - 136px)', padding: 0 }}>
                        <ActionList StateList={statusList} RecordId={parseInt(props.useParams.recordID)} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PRC002ChangeOverviewPage;

