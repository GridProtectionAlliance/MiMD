//******************************************************************************************************
//  ActionList.tsx - Gbtc
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
//  09/18/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '../../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { PRC002 } from '../ComplianceModels';
import ActionHeader from './ActionHeader';


declare var homePath: string;

interface IProps { RecordId: number, StateList: Array<PRC002.IStatus>, selectedAction: number, setSelectedAction: (id: number) => void }

const RecordList = (props: IProps) => {
    const history = useHistory();

    const [actionList, setAtcionList] = React.useState<Array<PRC002.IAction>>([]);
    const [ascending, setAscending] = React.useState<boolean>(false);
    const [sortField, setSortField] = React.useState<string>('Timestamp');

    React.useEffect(() => {
        let handleActionList = getActions();

        return () => {
            if (handleActionList != null && handleActionList.abort != null) handleActionList.abort();
        }
    }, [props.RecordId, ascending, sortField]);

    function getActions(): JQuery.jqXHR<Array<PRC002.IAction>> {
        if (props.RecordId == -1) return null;

        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/Action/${props.RecordId}/${sortField}/${ascending? 1 : 0}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: Array<PRC002.IAction>) => {
            setAtcionList(data);
        });

        return handle;
    }


    return (
        <>
            {(props.RecordId > -1 ?
                <Table
                    cols={[
                        {
                            key: 'ID', label: 'Configuration Change History', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <ActionCard data={item} stateList={props.StateList} openConfig={props.setSelectedAction} />
                        },
                                
                    ]}
                    tableClass="table table-hover"
                    data={actionList}
                    sortField={"ID"}
                    ascending={ascending}
                    onSort={(d) => { setAscending(!ascending) }}
                            onClick={(d) => {}}
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            selected={(item) => false}
                        />
                : null)}
        </>
    )
}

const ActionCard = (props: { data: PRC002.IAction, stateList: Array<PRC002.IStatus>, openConfig: (changeId: number) => void }) => {
    let hasConfig = props.data.UserAccount == 'MiMD';

    return (
        <div className="card">
            <div className="card-header">
                <ActionHeader data={props.data} stateList={props.stateList} showTime={true} />
            </div>
            <div className="card-body">
                <p className="card-text">{props.data.Note}</p>
                {hasConfig ? < a href="#" className="btn btn-primary" onClick={() => { props.openConfig(props.data.ID); $('#currentConfig').show(); }}>Show Configuration</a> : null}
            </div>
        </div>
        )
}



export default RecordList;

