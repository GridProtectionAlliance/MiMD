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
import Table from '@gpa-gemstone/react-table';
import * as PRC002 from '../ComplianceModels';
import ActionHeader from './ActionHeader';
import FieldValues from './FieldValues';


declare let homePath: string;

interface IProps { RecordId: number, StateList: Array<PRC002.IStatus> }

const RecordList = (props: IProps) => {

    const [actionList, setActionList] = React.useState<Array<PRC002.IAction>>([]);
    const [ascending, setAscending] = React.useState<boolean>(false);

    const [selectedAction, setSelectedAction] = React.useState<number>(-1);
    const [showFields, setShowFields] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleActionList = getActions();

        return () => {
            if (handleActionList != null && handleActionList.abort != null) handleActionList.abort();
        }
    }, [props.RecordId, ascending]);

    function getActions(): JQuery.jqXHR<string> {
        if (props.RecordId == -1) return null;

        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/Action/${props.RecordId}/Timestamp/${ascending? 1 : 0}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: string) => {
            setActionList(JSON.parse(data) as PRC002.IAction[]);
        });

        return handle;
    }


    return (
        <>
            {selectedAction > 0 ? <FieldValues ActionID={selectedAction} show={showFields} setShow={setShowFields} /> : null}
            {(props.RecordId > -1 ?
                <Table<PRC002.IAction>
                    cols={[
                        {
                            key: 'ID', label: 'Configuration Change History', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <ActionCard data={item} stateList={props.StateList} openConfig={(i) => {setSelectedAction(i); setShowFields(true);}} />
                        },
                                
                    ]}
                    tableClass="table table-hover"
                    data={actionList}
                    sortKey={"ID"}
                    ascending={ascending}
                    onSort={() => { setAscending(!ascending) }}
                            onClick={() => {}}
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            selected={() => false}
                        />
                : null)}
        </>
    )
}

const ActionCard = (props: { data: PRC002.IAction, stateList: Array<PRC002.IStatus>, openConfig: (changeId: number) => void }) => {
    const hasConfig = props.data.UserAccount == 'MiMD';

    return (
        <div className="card">
            <div className="card-header">
                <ActionHeader data={props.data} stateList={props.stateList} showTime={true} />
            </div>
            <div className="card-body">
                <p className="card-text">{props.data.Note}</p>
                {hasConfig ? < a className="btn btn-primary" onClick={() => { props.openConfig(props.data.ID); $('#currentConfig').show(); }}>Show Configuration</a> : null}
            </div>
        </div>
        )
}



export default RecordList;

