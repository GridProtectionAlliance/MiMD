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
import { useHistory, Redirect } from "react-router-dom";
import { MiMD } from '../../global';
import FormSelect from '../../CommonComponents/FormSelect';
import FormInput from '../../CommonComponents/FormInput';
import FormCheckBox from '../../CommonComponents/FormCheckBox';
import { PRC002 } from '../ComplianceModels';


declare var homePath: string;

interface IProps { RecordId: number, StateList: Array<PRC002.IStatus>, selectedAction: number, setSelectedAction: (id: number) => void }

const RecordList = (props: IProps) => {
    const history = useHistory();

    const [actionList, setAtcionList] = React.useState<Array<PRC002.IAction>>([]);

    React.useEffect(() => {
        let handleActionList = getActions();

        return () => {
            if (handleActionList != null && handleActionList.abort != null) handleActionList.abort();
        }
    }, [props.RecordId]);

    function getActions(): JQuery.jqXHR<Array<PRC002.IAction>> {
        if (props.RecordId == -1) return null;

        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/Action?parentID=${props.RecordId}`,
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
                            ascending={true}
                            onSort={(d) => {}}
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

const ActionHeader = (props: { data: PRC002.IAction, stateList: Array<PRC002.IStatus>, showTime: boolean }) => {
    let isauto = props.data.UserAccount == 'MiMD';
    let isChange = props.data.StateId != null;
    let isNote = !isauto && !isChange;

    function formatTS(input: string) {
        let date = moment(input);
        return date.format("MM/DD/YY HH:mm CT")
    }

    function stateTag(stateId: number) {
        let stat = props.stateList.find(item => item.ID == stateId)

        return (<span className="badge" style={{ background: (stat == undefined ? '#6c757d' : stat.Color), textColor: (stat == undefined ? '#ffffff' : stat.TextColor) }}>{(stat == undefined ? 'Unknown' : stat.Description)}</span>)
    }

    return (
        <div>
            {props.showTime ? formatTS(props.data.Timestamp) + ': ' : null}
            {isNote ? props.data.UserAccount + ' added a Note' : null}
            {isChange ? props.data.UserAccount + ' Changed Status to ' : null}
            {isChange? stateTag(props.data.StateId) : null}
            {(isauto && !isChange) ? 'MiMD recieved an updated Configuration File' : null}
        </div>);
}

export default RecordList;

