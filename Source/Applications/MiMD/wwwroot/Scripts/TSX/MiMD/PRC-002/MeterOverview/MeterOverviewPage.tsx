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
import Table from '../../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { MiMD } from '../../global';
import FormSelect from '../../CommonComponents/FormSelect';
import FormInput from '../../CommonComponents/FormInput';
import FormCheckBox from '../../CommonComponents/FormCheckBox';
import { MeterFilter, Filter } from './MeterFilter';
import RecordList from './RecordList';
import MeterDetail from './MeterDetail';
import { PRC002 } from '../ComplianceModels';
import { MeterList } from './MeterList';


declare var homePath: string;

const PRC002MeterOverviewPage = (props: { Roles: Array<MiMD.SecurityRoleName>, MeterID: number }) => {
    let history = useHistory();

    const [meterFilters, setMeterFilter] = React.useState<Array<Filter>>([]);
    const [statusList, setStatusList] = React.useState<Array<PRC002.IStatus>>([]);

    React.useEffect(() => {
        let handleStatusList = getStatus();

        return () => {
            if (handleStatusList.abort != null) handleStatusList.abort();
        }
    }, [props]);

  
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

    function setMeterID(id: number) {
        history.push('index.cshtml?name=PRC002Overview&MeterID=' + id);
    }
    
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MeterFilter Id={'MeterListFilter'} includeStatus={true} setFilter={setMeterFilter} />
            <div style={{ width: '100%' }}>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col" style={{ width: '50%', height: 'calc( 100% - 136px)', padding: 0 }}>
                        <MeterList Filter={meterFilters} SelectedMeterId={(isNaN(props.MeterID)? -1 : props.MeterID)} SelectMeter={setMeterID} StatusList={statusList} />
                    </div>
                    <div className="col" style={{ width: '50%', height: '200px', padding: 0 }}>
                        <div className="row" style={{ margin: 0 }}>
                            <MeterDetail MeterID={(isNaN(props.MeterID) ? -1 : props.MeterID)} stateList={statusList} />
                        </div>
                        <div className="row" style={{ margin: 0 }}>
                            <RecordList MeterId={(isNaN(props.MeterID) ? -1 : props.MeterID)} StateList={statusList} />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PRC002MeterOverviewPage;

