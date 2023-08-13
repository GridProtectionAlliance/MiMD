//******************************************************************************************************
//  ManualAction.tsx - Gbtc
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
//  09/18/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';

import { PRC002} from '../ComplianceModels';
import { Modal, Warning } from '@gpa-gemstone/react-interactive';
import { useNavigate } from 'react-router-dom'


declare var homePath: string;
interface IProps { show: boolean, setShow: (b: boolean) => void, RecordId?: number, MeterId?: number, state: PRC002.IStatus}


const ManualAction = (props: IProps) => {

    const [note, setNote] = React.useState<string>("");
    const [Toffset, setToffset] = React.useState<number>(0);
    const [showWarning, setWarning] = React.useState<boolean>(false);

    function getTitle() {
        if (props.state == undefined)
            return 'Add Compliance Note'
        if (props.state.Description == 'Acknowledged')
            return 'Acknowledge Alert'
        if (props.state.Description == 'Reviewed')
            return 'Review Alert'
        if (props.state.Description == 'RAP Submitted')
            return 'Create Remedial Action Plan'
        if (props.state.Description == 'Compliance Issue')
            return 'Submit Compliance Issue'
    }

    function getBtn() {
        if (props.state == undefined)
            return 'Add Note'
        if (props.state.Description == 'Acknowledged')
            return 'Acknowledged Alert'
        if (props.state.Description == 'Reviewed')
            return 'Reviewed Alert'
        if (props.state.Description == 'RAP Submitted')
            return 'Create Remedial Action Plan'
        if (props.state.Description == 'Compliance Issue')
            return 'Submit'


    }

    function confirm(c: boolean) {
        if (c && props.state == undefined) {
            props.setShow(false);
            submitt();
        }

        if (c && props.state != undefined) {
            setWarning(true);
        }

        if (!c) {
            props.setShow(false);
            setToffset(0);
            setNote('');
        }


    }

    function submitt() {
        if (props.RecordId != undefined)
            submittRecord();
        if (props.MeterId != undefined)
            submittMeter()

        setNote("");
        setToffset(0);
    }

    function submittRecord() {
        let action = { Note: note, StateId: null, RecordId: props.RecordId }
        if (props.state != undefined)
            action.StateId = props.state.ID;

        $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/Action/Add`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(action as PRC002.IAction),
            dataType: 'json',
            cache: false,
            async: true
        }).then(() => window.location.reload())
    }

    function submittMeter() {
        if (props.state.Description == 'Compliance Issue')
            $.ajax({
                type: "POST",
                url: `${homePath}api/MiMD/PRC002/ComplianceRecord/Add`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ MeterId: props.MeterId, TimerOffset: Toffset, Status: props.state.ID, Note: note }),
                dataType: 'json',
                cache: true,
                async: true
            }).then((data => window.location.reload()))
        else
            $.ajax({
                type: "POST",
                url: `${homePath}api/MiMD/PRC002/ComplianceMeter/RAPSubmitt`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ meterId: props.MeterId, Note: note }),
                dataType: 'json',
                cache: true,
                async: true
            }).then((data => window.location.reload()))
    }


    return (
    <>
        <Modal Show={props.show} Title={getTitle()} ConfirmText={getBtn()} CancelBtnClass={'Cancel'} CallBack={(c) => { confirm(c) }} Size='sm'> 
            {(props.state != undefined && props.state.Description == 'Compliance Issue')?
                        <div className="form-group">
                            <label>Note:</label>
                            <textarea className="form-control" rows={4} value={note} onChange={(e) => setNote((e.target as any).value)}></textarea>
                            <label>Days out of Compliance:</label>
                            <input className="form-control" type={'number'} value={Toffset} onChange={(e) => setToffset(parseInt((e.target as any).value as string))}></input>
                        </div>
                            :
                    <div className="form-group">
                        <label>Note:</label>
                        <textarea className="form-control" rows={4} value={note} onChange={(e) => setNote((e.target as any).value)}></textarea>
                    </div>
            }
            </Modal>
            <Warning Show={showWarning} Title={'Warning'} Message={'This action can not be undone. It will create a permanent compliance record.'} CallBack={(result) => { if (result) submitt(); setWarning(false) }} />
        </>
       )
}

export default ManualAction;

