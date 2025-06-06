﻿//******************************************************************************************************
//  MeterDetail.tsx - Gbtc
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
//  09/04/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { Warning } from '@gpa-gemstone/react-interactive'
import * as PRC002 from '../ComplianceModels';
import ManualAction from '../Common/ManualAction';

declare let homePath: string;

interface IProps { MeterID: number, stateList: Array<PRC002.IStatus> }

const MeterDetail = (props: IProps) => {

    const [showReviewed, setShowReviewed] = React.useState<boolean>(false);
    const [meter, setMeter] = React.useState<PRC002.IMeter>(undefined);

    const [showRAP, setShowRAP] = React.useState<boolean>(false)
    const [showAddIssue, setShowAddIssue] = React.useState<boolean>(false)

    React.useEffect(() => {
        const handleMeter = getMeter(props.MeterID);

        return () => {
            if (handleMeter != null && handleMeter.abort != null) handleMeter.abort();
        }
    }, [props.MeterID]);

    function getMeter(id: number): JQuery.jqXHR<PRC002.IMeter> {
        if (id == -1) return null;
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/ComplianceMeter/One/${id}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: PRC002.IMeter) => {
            if (data == null)
                return

            setMeter(data);
        });


        return handle;
    }


    
    const stat = (meter == undefined ? undefined : props.stateList.find(s => s.ID == meter.StatusID));
    const lblStyle = {
        width: '100%',
        padding: 0,
        background: (stat == undefined ? '#000000' : stat.Color),
        align: 'center',
        color: (stat == undefined ? '#000000' : stat.TextColor),
        height: '25px'
    };

    function ActivateMeter() {
        $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/ComplianceMeter/Activate/${meter.ID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        window.location.reload();
    }

    return (
    <>
        <div className="col-4" style={{ padding: 0 }}>
            {meter != undefined ?
                <>
                    <div style={{ ...lblStyle }}>
                        Meter not in Compliance
                    </div>

                <div style={{
                    width: '100%',
                    fontSize: 'xx-large',
                    textAlign: 'center',
                    background: (meter.Timer < 30 ? '#28a745' : (meter.Timer < 60 ? '#ffc107' : '#dc3545' )),
                    color: (meter.Timer < 30 ? '#ffffff' : (meter.Timer < 60 ? '#212529' : '#ffffff')),
                        height: '50px'
                    }} >
                        {(meter.Status == 'In Compliance' ? 0 : meter.Timer)}
                    </div>

                    <div style={lblStyle}>
                        Days
                        </div>
                </>
                : null}
        </div>
        <div className="col-8" style={{ padding: 5 }}>
            {(meter != undefined) ? 
            <>
                    {meter.Reviewed ?
                        <div className="col">
                            <div className="row">
                                <button type="button" className="btn btn-info" onClick={() => setShowAddIssue(true)} > Add Compliance Issue </button>
                            </div>
                            <br/>
                            <div className="row">
                                <button type="button" className="btn btn-info" onClick={() => setShowRAP(true)} > Submit Remedial Action Plan </button>
                            </div>
                            <ManualAction MeterId={props.MeterID} state={props.stateList.find(item => item.Description === 'Compliance Issue')} show={showAddIssue} setShow={setShowAddIssue} />
                            <ManualAction MeterId={props.MeterID} state={props.stateList.find(item => item.Description === 'RAP Submitted')} show={showRAP} setShow={setShowRAP} />
                        </div> : <>
                            <button type="button" className="btn btn-info" onClick={() => setShowReviewed(true)}> Meter Reviewed for Compliance </button>
                            <Warning Title={'Warning'} Message={'This will activate the MiMD PRC002 monitoring for this meter. Please Review the current configuration before proceeding'} CallBack={(result) => { if (result) ActivateMeter(); setShowReviewed(false); }} Show={showReviewed} />
                        </>}                        
                </> : null}
        </div>
    </>)
}

export default MeterDetail;

