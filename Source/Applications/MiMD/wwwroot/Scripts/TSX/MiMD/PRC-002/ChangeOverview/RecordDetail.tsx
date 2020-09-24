//******************************************************************************************************
//  RecordDetail.tsx - Gbtc
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
import { MiMD } from '../../global';
import FormSelect from '../../CommonComponents/FormSelect';
import FormInput from '../../CommonComponents/FormInput';
import FormCheckBox from '../../CommonComponents/FormCheckBox';
import { PRC002 } from '../ComplianceModels';
import BaseConfig from '../Common/BaseConfig';
import ManualAction from '../Common/ManualAction';
import FieldValues from './FieldValues';
import ConfigRuleEdit from '../Common/ConfigRuleEdit';
import Modal from '../Common/Modal';
import ResolveRecord from './ResolveRecord';
import ActionHeader from './ActionHeader';

declare var homePath: string;

const addRAPWarning = 'This Action can not be undone. This will add a permanent Compliance Record to this Issue.';
const resolveWarning = 'This Action can not be undone. This will permanently updated the Base Configuration for this Meter and Resolve the Issue.';


interface IProps { RecordID: number, stateList: Array<PRC002.IStatus>, selectedAction: number, setSelectedAction: (id: number) => void }

const RecordDetail = (props: IProps) => {
    const history = useHistory();

    const [record, setRecord] = React.useState<PRC002.IRecord>(undefined);
    const [meter, setMeter] = React.useState<PRC002.IMeter>(undefined);
    const [action, setAction] = React.useState<PRC002.IAction>(undefined);
    const [baseConfig, setBaseConfig] = React.useState<PRC002.IBaseConfig>(undefined);
   
    const [valueList, setValueList] = React.useState<Array<PRC002.IConfigFieldStatus>>([]);
    const [allvalueList, setAllValueList] = React.useState<Array<PRC002.IConfigFieldStatus>>([]);

    React.useEffect(() => {
        let handleRecord = getRecord(props.RecordID);

        return () => {
            if (handleRecord != null && handleRecord.abort != null) handleRecord.abort();
            
        }
    }, [props.RecordID]);

    React.useEffect(() => {
        let handleFieldVaues = getFieldValues(props.selectedAction);

        return () => {
            if (handleFieldVaues != null && handleFieldVaues.abort != null) handleFieldVaues.abort();
        }
    }, [props.selectedAction]);

    React.useEffect(() => {
        let handleMeter = getMeter((record == undefined ? -1 : record.MeterId));
        let handleBaseConfig = getBaseConfig((record == undefined ? -1 : (record.BaseConfigId == undefined ? -1 : record.BaseConfigId)));
        let handleAction = getLastAction((record == undefined ? -1 : record.LastActionID));

        return () => {
            if (handleMeter != null && handleMeter.abort != null) handleMeter.abort();
            if (handleBaseConfig != null && handleBaseConfig.abort != null) handleBaseConfig.abort();
            if (handleAction != null && handleAction.abort != null) handleAction.abort();
        }
    }, [record]);

    function getFieldValues(id: number): JQuery.jqXHR<Array<PRC002.IConfigFieldStatus>> {
        let handle;
        if (id == -1)
            handle = $.ajax({
                type: "GET",
                url: `${homePath}api/MiMD/PRC002/FieldValue?parentID=${props.RecordID}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });
        else
            handle = $.ajax({
                type: "GET",
                url: `${homePath}api/MiMD/PRC002/FieldValue/History?parentID=${id}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });

        handle.done((data: Array<PRC002.IConfigFieldStatus>) => {
            if (data == null)
                return
            if (id == -1)
                setAllValueList(data);
            else
                setValueList(data);
        });

        return handle;
    }


    function getRecord(id: number): JQuery.jqXHR<PRC002.IRecord> {
        if (id == -1) return null;
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/ComplianceRecord/One/${id}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: PRC002.IRecord) => {
            if (data == null)
                return

            setRecord(data);
        });


        return handle;
    }

    function getLastAction(id: number): JQuery.jqXHR<PRC002.IAction> {
        if (id == -1) return null;
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/Action/One/${id}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: PRC002.IAction) => {
            if (data == null)
                return

            setAction(data);
        });


        return handle;
    }

    function getMeter(id: number): JQuery.jqXHR<PRC002.IMeter> {
        if (id == -1) return null;
        let handle = $.ajax({
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

    function getBaseConfig(id: number): JQuery.jqXHR<PRC002.IBaseConfig> {
        if (id == -1) return null;
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/BaseConfig/ONE/${id}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: PRC002.IBaseConfig) => {
            if (data == null)
                return     
            setBaseConfig(data)
        });

        return handle;
    }

    function formatTS(input: string) {
        let date = moment(input);
        return date.format("MM/DD/YY HH:mm CT")
    }

    

    let meterStat = (meter == undefined ? undefined : props.stateList.find(s => s.ID == meter.StatusID));
    let recordStat = (record == undefined ? undefined : props.stateList.find(s => s.ID == record.Status));
    
    return (<>
        {(meter == undefined? null :
         <>
                <div className="col" style={{ width: '25%', padding: 5 }}>
                    <StatusRow label={'Configuration Change'} status={recordStat} T={record.Timer} />
                    <StatusRow label={'Meter ' + meter.AssetKey} status={meterStat} T={meter.Timer} />
            </div>
            <div className="col" style={{ width: '25%', padding: 5 }}>
                <div> Issue Opened: {formatTS(record.Created)}</div>
                <div> Last Action Taken: {formatTS(record.TimeStamp)}</div>
                    <div> Last Action: {action != undefined ? <ActionHeader data={action} stateList={props.stateList} showTime={false} /> : null} </div>  
            </div>
                {(baseConfig == undefined ? null :
                    <div className="col" style={{ width: '25%', padding: 5 }}>
                        <button type="button" className="btn btn-primary btn-block" onClick={() => $('#baseconfig').show()}> Base Configuration </button>
                        <button type="button" className="btn btn-primary btn-block" onClick={() => { props.setSelectedAction(-1); $('#currentConfig').show() }}> Current Configuration</button>
                    </div>
                )}
            <div className="col" style={{ width: '25%', padding: 5 }}>
                    <button type="button" className="btn btn-info btn-block" onClick={() => $('#Note').show()}> Add Compliance Note </button>
                    {recordStat.Description == 'Acknowledged' || recordStat.Description == 'Reviewed' ?
                        <button type="button" className="btn btn-info btn-block" onClick={() => $('#RAP').show()}> Submitt Remedial Action Plan </button>
                    : null}
                    {recordStat.Description == 'Out Of Compliance' ?
                        <button type="button" className="btn btn-primary btn-block" onClick={() => $('#Acknowledge').show()}> Acknowledge Issue </button>
                    : null}
                    {recordStat.Description == 'Acknowledged' ?
                        <button type="button" className="btn btn-primary btn-block" onClick={() => $('#Review').show()}> Review Issue </button>
                    : null}
                    {recordStat.Description == 'Reviewed' ?
                        <button type="button" className="btn btn-primary btn-block" onClick={() => $('#Resolve').show()}> Resolve Issue - Updated Base Config</button>
                    : null}
            </div>

                <ManualAction RecordId={props.RecordID} state={null} Action={() => { history.go(0) }} />    
                <FieldValues Label={(props.selectedAction == -1 ? 'Current Configuration' : 'Related Configuration')} Id={'currentConfig'} FieldList={(props.selectedAction == -1 ? allvalueList : valueList)} />
                {recordStat.Description == 'Acknowledged' || recordStat.Description == 'Reviewed' ?
                    <ManualAction RecordId={props.RecordID} state={props.stateList.find(item => item.Description === 'RAP Submitted')} Action={() => { history.go(0) }} />
                : null}
                {recordStat.Description == 'Out Of Compliance' ?
                    <ManualAction RecordId={props.RecordID} state={props.stateList.find(item => item.Description === 'Acknowledged')} Action={() => { history.go(0) }} />
                : null}
                {recordStat.Description == 'Acknowledged' ?
                    <ManualAction RecordId={props.RecordID} state={props.stateList.find(item => item.Description === 'Reviewed')} Action={() => { history.go(0) }} />
                : null}
                {recordStat.Description == 'Reviewed' ?
                    <ResolveRecord FieldList={allvalueList.filter(item => !item.Valid)} RecordID={props.RecordID} stateList={props.stateList} Complete={() => { history.go(0); }}/>
                    : null}
                {(baseConfig == undefined ? null : <Modal Title={'Issue Base Configuration'} PosLabel={'Close'} Id={'baseconfig'} content={() => <BaseConfig BaseConfigList={[baseConfig]} />} />)}
            </>
        )}

    </>)
}

const StatusRow = (props: { status: PRC002.IStatus, T: number, label: string }) => {
    return (
        <div style={{width: '100%'}}>
            <div>
                {props.label} has been in
            </div>
            <div style={{display: 'flex'}}>
            <div style={{
                fontWeight: '600',
                width: '45%',
                height: '35px',
                background: (status == undefined ? '#f8f9fa' : props.status.Color),
                border: '2px solid',
                borderRadius: '5px',
                textAlign: 'center',
                lineHeight: '35px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                textColor: (status == undefined ? '#212529' : props.status.TextColor),
                marginRight: 'calc(5%)'
            }}> {props.status.Description} </div>
            <div style={{
                fontWeight: '600',
                width: '45%',
                height: '35px',
                background: (props.T < 30 ? '#28a745' : '#ffc107'),
                textColor: (props.T < 30 ? '#fff' : '#212529'),
                border: '2px solid',
                borderRadius: '5px',
                textAlign: 'center',
                lineHeight: '35px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
            }}> {props.T} Days</div>
            </div>
        </div>
        )
}

export default RecordDetail;
