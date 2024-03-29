﻿//******************************************************************************************************
//  ActionHeader.tsx - Gbtc
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
import * as PRC002 from '../ComplianceModels';


interface IProps { data: PRC002.IAction, stateList: Array<PRC002.IStatus>, showTime: boolean } 

const ActionHeader = (props: IProps) => {
    const isauto = props.data.UserAccount == 'MiMD';
    const isChange = props.data.StateId != null;
    const isNote = !isauto && !isChange;

    function formatTS(input: string) {
        const date = moment(input);
        return date.format("MM/DD/YY HH:mm CT")
    }

    function stateTag(stateId: number) {
        const stat = props.stateList.find(item => item.ID == stateId)

        return (<span className="badge" style={{ background: (stat == undefined ? '#6c757d' : stat.Color), color: (stat == undefined ? '#ffffff' : stat.TextColor) }}>{(stat == undefined ? 'Unknown' : stat.Description)}</span>)
    }

    return (
        <div>
            {props.showTime ? formatTS(props.data.Timestamp) + ': ' : null}
            {isNote ? props.data.UserAccount + ' added a Note' : null}
            {isChange ? props.data.UserAccount + ' Changed Status to ' : null}
            {isChange? stateTag(props.data.StateId) : null}
            {(isauto && !isChange) ? 'MiMD received an updated Configuration File' : null}
        </div>);
}

export default ActionHeader;

