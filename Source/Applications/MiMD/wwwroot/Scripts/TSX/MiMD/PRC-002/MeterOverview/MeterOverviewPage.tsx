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
import { useHistory } from "react-router-dom";
import { MiMD } from '../../global';
import RecordList from './RecordList';
import MeterDetail from './MeterDetail';
import { PRC002 } from '../ComplianceModels';

import { Modal, Search, SearchBar } from '@gpa-gemstone/react-interactive';
import Table from '@gpa-gemstone/react-table';
import { ToolTip } from '@gpa-gemstone/react-interactive';
import DowloadFiles from './DowloadFile';
import { BaseConfigWindow } from '../Common/BaseConfig';
import NewMeterWizzard from '../MeterWizzard/NewMeterWizzard';

declare var homePath: string;

const standardSearch: Search.IField<MiMD.Meter>[] = [
    { key: 'Name', label: 'Name', type: 'string' },
    { key: 'AssetKey', label: 'Asset Key', type: 'string' },
    { key: 'Make', label: 'Make', type: 'string' },
    { key: 'Model', label: 'Model', type: 'string' },
    { key: 'Status', label: 'Compliance Status', type: 'enum', enum: [] }
];

const PRC002MeterOverviewPage = (props: { Roles: Array<MiMD.SecurityRoleName>, MeterID: number }) => {
    let history = useHistory();

    const [meterFilters, setMeterFilters] = React.useState<Search.IFilter<PRC002.IMeter>[]>([]);
    const [statusList, setStatusList] = React.useState<Array<PRC002.IStatus>>([]);

    const [meterSort, setMeterSort] = React.useState<keyof PRC002.IMeter>("Status");
    const [meterAsc, setMeterAsc] = React.useState<boolean>(false);
    const [meterList, setMeterList] = React.useState<Array<PRC002.IMeter>>([])

    const [selectedMeter, setSelectedMeter] = React.useState<PRC002.IMeter>(null);
    const [hover, setHover] = React.useState<('None' | 'Files' | 'BaseConfig')>('None');

    const [showNewMeterWizard, setShowNewMeterWizard] = React.useState<boolean>(false);
    const [showBaseConfig, setShowBaseConfig] = React.useState<boolean>(false);
    const [showFiles, setShowFiles] = React.useState<boolean>(false);

    React.useEffect(() => {
        let handleStatusList = getStatus();

        return () => {
            if (handleStatusList.abort != null) handleStatusList.abort();
        }
    }, []);

    React.useEffect(() => {
        let h = getMeters();
        return () => { if (h != null && h.abort != null) h.abort(); }
    }, [meterSort, meterAsc, meterFilters]);

    React.useEffect(() => {
        let index = meterList.findIndex(m => m.ID == props.MeterID);
        if (index == -1)
            setSelectedMeter(null);
        else
            setSelectedMeter(meterList[index]);
    }, [props.MeterID, meterList]);

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

    function getMeters(): JQuery.jqXHR<Array<PRC002.IMeter>> {
        let handle = $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/ComplianceMeter/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: meterFilters, OrderBy: meterSort, Ascending: meterAsc }),
            cache: false,
            async: true
        });

        handle.done((data: Array<PRC002.IMeter>) => {
            setMeterList(data)
        });

        return handle;
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <SearchBar<PRC002.IMeter> SetFilter={setMeterFilters} CollumnList={standardSearch}
                defaultCollumn={{ key: 'Name', label: 'Name', type: 'string' }}
                Direction={'left'} Label={'Search'} Width={'50%'}
                GetEnum={(setOptions, field) => {
                    if (field.key == 'Status')
                        setOptions(statusList.map(item => ({ Label: item.Description, Value: item.Description })));
                    return () => { }
                }}>
                <li className="nav-item" style={{ width: '50%', paddingRight: 10 }}>
                    <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                        <legend className="w-auto" style={{ fontSize: 'large' }}>Actions:</legend>
                        <div className='row'>
                            <div className='col'>
                                <button type="button" className="btn btn-primary btn-block" onClick={() => setShowNewMeterWizard(true)}> Add New Meter to PRC002 </button>
                            </div>
                            <div className='col'>
                                <button type="button" className={"btn btn-primary btn-block" + (selectedMeter == null ? ' disabled' : '')}
                                    data-tooltip={'BaseConfig'} onClick={() => setShowBaseConfig(selectedMeter != null)}
                                    onMouseOver={() => setHover('BaseConfig')} onMouseOut={() => setHover('None')}> Meter Configuration </button>
                                <button type="button" className={"btn btn-primary btn-block" + (selectedMeter == null ? ' disabled' : '')}
                                    onMouseOver={() => setHover('Files')} onMouseOut={() => setHover('None')}
                                    data-tooltip={'Files'} onClick={() => setShowFiles(selectedMeter != null)} > Download Files </button>
                            </div>
                        </div>
                    </fieldset>
                </li>
            </SearchBar>
            <ToolTip Position={'bottom'} Show={hover=='Files' && selectedMeter == null } Target={'Files'}>
                <p> A Meter needs to be selected.</p>
            </ToolTip>
            <ToolTip Position={'bottom'} Show={hover == 'BaseConfig' && selectedMeter == null} Target={'BaseConfig'}>
                <p> A Meter needs to be selected.</p>
            </ToolTip>
            <Modal Title={'Meter Base Configuration'} Show={showBaseConfig} CallBack={(confirm) => { setShowBaseConfig(false); }} >
                <BaseConfigWindow MeterId={props.MeterID} />
            </Modal>
            <Modal Title={'Download Current Config File'} Show={showFiles} CallBack={(confirm) => { setShowFiles(false); }} >
                <DowloadFiles MeterId={props.MeterID} />
            </Modal>
            <NewMeterWizzard show={showNewMeterWizard} setShow={setShowNewMeterWizard} />

            <div style={{ width: '100%' }}>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col" style={{ width: '50%', height: 'calc( 100% - 136px)', padding: 0 }}>
                        <Table<PRC002.IMeter>
                            cols={[
                                { key: 'Name', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'Model', label: 'Model', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'Make', label: 'Make', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                {
                                    key: 'Status', label: 'Status', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => {
                                        let stat = statusList.find(s => s.ID === item.StatusID);

                                        return <div style={{
                                            fontWeight: 600,
                                            width: '90%',
                                            height: '35px',
                                            background: (stat == undefined ? '#f8f9fa' : stat.Color),
                                            border: '2px solid',
                                            borderRadius: '5px',
                                            textAlign: 'center',
                                            lineHeight: '35px',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            color: (stat == undefined ? '#212529' : stat.TextColor),
                                        }}> {item.Status} </div>
                                    }
                                },
                            ]}
                            tableClass="table table-hover"
                            data={meterList}
                            sortField={meterSort}
                            ascending={meterAsc}
                            onSort={(d) => {
                                if (d.col == meterSort) 
                                    setMeterAsc(!meterAsc);
                                else 
                                    setMeterSort(d.col);
                            }}
                            onClick={(d) => { setMeterID(d.row.ID); }}
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 'calc(100% - 80px)', width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            selected={(item) => item.ID === props.MeterID}
                        />
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

