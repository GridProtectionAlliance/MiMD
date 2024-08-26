//******************************************************************************************************
//  MeterOverviewPage.tsx - Gbtc
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
import { useNavigate } from "react-router-dom";
import { MiMD } from '../../global';
import RecordList from './RecordList';
import MeterDetail from './MeterDetail';
import * as PRC002 from '../ComplianceModels';
import { Modal, Search, SearchBar, VerticalSplit, SplitSection, ConfigTable, ToolTip } from '@gpa-gemstone/react-interactive';
import { ReactTable } from '@gpa-gemstone/react-table';
import DowloadFiles from './DowloadFile';
import NewMeterWizard from '../MeterWizzard/NewMeterWizard';
import MeterConfigurationWindow from './MeterConfiguration';
import { SystemCenter } from '@gpa-gemstone/application-typings';

declare let homePath: string;

const standardSearch: Search.IField<MiMD.Meter>[] = [
    { key: 'Name', label: 'Name', type: 'string', isPivotField: false },
    { key: 'AssetKey', label: 'Asset Key', type: 'string', isPivotField: false },
    { key: 'Make', label: 'Make', type: 'string', isPivotField: false },
    { key: 'Model', label: 'Model', type: 'string', isPivotField: false },
    { key: 'Status', label: 'Compliance Status', type: 'enum', enum: [], isPivotField: false }
];


interface IProps { useParams: { meterID: string } }

const PRC002MeterOverviewPage = (props: IProps) => {
    const navigate = useNavigate();

    const [meterFilters, setMeterFilters] = React.useState<Search.IFilter<PRC002.IMeter>[]>([]);
    const [statusList, setStatusList] = React.useState<Array<PRC002.IStatus>>([]);
    const [reloadTrigger, reloadMeters] = React.useState<number>(0);

    const [filterableList, setFilterableList] = React.useState<Array<Search.IField<MiMD.Meter>>>(standardSearch);

    const [meterSort, setMeterSort] = React.useState<keyof PRC002.IMeter>("Status");
    const [meterAsc, setMeterAsc] = React.useState<boolean>(false);
    const [meterList, setMeterList] = React.useState<Array<PRC002.IMeter>>([])

    const [selectedMeter, setSelectedMeter] = React.useState<PRC002.IMeter>(null);
    const [hover, setHover] = React.useState<('None' | 'Files' | 'BaseConfig')>('None');

    const [showNewMeterWizard, setShowNewMeterWizard] = React.useState<boolean>(false);
    const [showBaseConfig, setShowBaseConfig] = React.useState<boolean>(false);

    const [showFiles, setShowFiles] = React.useState<boolean>(false);
    const [searchState, setSearchState] = React.useState<('Idle' | 'Loading' | 'Error')>('Idle');
    const [selectedID, setSelectedID] = React.useState<number>(null);

    React.useEffect(() => {
        const handleStatusList = getStatus();

        return () => {
            if (handleStatusList.abort != null) handleStatusList.abort();
        }
    }, []);

    React.useEffect(() => {
        setSearchState('Loading');

        const nativeFields = standardSearch.map(s => s.key);
        const searches = meterFilters.map(s => { if (nativeFields.findIndex(item => item == s.FieldName) == -1) return { ...s, IsPivotColumn: true }; else return s; })

        const handle = $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/ComplianceMeter/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: searches, OrderBy: meterSort, Ascending: meterAsc }),
            cache: false,
            async: true
        });

        handle.done((data: string) => {
            setMeterList(JSON.parse(data) as PRC002.IMeter[]);
            setSearchState('Idle')
        });
        handle.fail(() => {
            setSearchState('Error');
        })

        return () => { if (handle != null && handle.abort != null) handle.abort(); }
    }, [meterSort, meterAsc, meterFilters, reloadTrigger]);

    React.useEffect(() => {
        const index = meterList.findIndex(m => m.ID == parseInt(props.useParams.meterID));
        if (index == -1)
            setSelectedMeter(null);
        else
            setSelectedMeter(meterList[index]);
    }, [props.useParams.meterID, meterList]);

    React.useEffect(() => {
        const handle = getAdditionalFields();

        return () => {
            if (handle.abort != null) handle.abort();
        }
    }, []);

    function getAdditionalFields(): JQuery.jqXHR<Array<SystemCenter.Types.AdditionalFieldView>> {
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/AdditionalFieldView/ParentTable/Meter`,
            contentType: "application/json; charset=utf-8",
            cache: false,
            async: true
        });

        function ConvertType(type: string) {
            if (type == 'string' || type == 'integer' || type == 'number' || type == 'datetime' || type == 'boolean')
                return { type: type }
            return {
                type: 'enum', enum: [{ Label: type, Value: type }]
            }
        }

        handle.done((d: SystemCenter.Types.AdditionalFieldView[]) => {
            const ordered = _.orderBy(standardSearch.concat(d.filter(d => d.Searchable).map(item => (
                { label: `[AF${item.ExternalDB != undefined ? " " + item.ExternalDB : ''}] ${item.FieldName}`, key: item.FieldName, ...ConvertType(item.Type), isPivotField: true } as Search.IField<MiMD.Meter>
            ))), ['label'], ["asc"]);
            setFilterableList(ordered)
        });

        return handle;
    }

    function getStatus(): JQuery.jqXHR<Array<PRC002.IStatus>> {
        const handle = $.ajax({
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

    function handleSelect(id: number) {
        setSelectedID(id);
        navigate(`${homePath}PRC002Overview/Meter/${id}`);
    }

    const handleWizardComplete = React.useCallback((dataChange: boolean) => {
        setShowNewMeterWizard(false);
        if (dataChange)
            reloadMeters(c => (c + 1));
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <SearchBar<PRC002.IMeter> SetFilter={setMeterFilters} CollumnList={filterableList}
                defaultCollumn={{ key: 'Name', label: 'Name', type: 'string', isPivotField: false }}
                Direction={'left'} Label={'Search'} Width={'50%'}
                GetEnum={(setOptions, field) => {
                    if (field.key == 'Status') {
                        setOptions(statusList.map(item => ({ Label: item.Description, Value: item.Description })));
                        return () => { }
                    }
                    let handle = null;
                    if (field.type != 'enum' || field.enum == undefined || field.enum.length != 1)
                        return () => { };

                    handle = $.ajax({
                        type: "GET",
                        url: `${homePath}api/ValueList/Group/${field.enum[0].Value}`,
                        contentType: "application/json; charset=utf-8",
                        dataType: 'json',
                        cache: true,
                        async: true
                    });
                    handle.done(d => setOptions(d.map(item => ({ Value: item.ID.toString(), Label: item.Value }))))
                    return () => { if (handle != null && handle.abort == null) handle.abort(); }

                }}
                ResultNote={searchState == 'Error' ? 'Could not complete Search' : 'Found ' + meterList.length + ' Meters'}
                ShowLoading={searchState == 'Loading'}
            >
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
            <ToolTip Position={'bottom'} Show={hover == 'Files' && selectedMeter == null} Target={'Files'}>
                <p> A Meter needs to be selected.</p>
            </ToolTip>
            <ToolTip Position={'bottom'} Show={hover == 'BaseConfig' && selectedMeter == null} Target={'BaseConfig'}>
                <p> A Meter needs to be selected.</p>
            </ToolTip>
            <MeterConfigurationWindow MeterID={parseInt(props.useParams.meterID)} setShow={setShowBaseConfig} show={showBaseConfig} />
            <Modal Title={'Download Current Config File'} Show={showFiles} CallBack={() => { setShowFiles(false); }} Size='sm' ShowX={true} ShowCancel={false} ConfirmText='Close'>
                <DowloadFiles MeterId={parseInt(props.useParams.meterID)} />
            </Modal>
            <NewMeterWizard show={showNewMeterWizard} onComplete={handleWizardComplete} />
            <VerticalSplit style={{ width: '100%', height: 'calc( 100% - 52px)' }}>
                <SplitSection Width={50} MinWidth={25} MaxWidth={75}>
                    <div style={{ width: '100%', height: '100%', maxHeight: '100%', position: 'relative', float: 'left', overflowY: 'hidden' }}>
                        <ConfigTable.Table<PRC002.IMeter>
                            LocalStorageKey="MiMD.Overview.TableCols"
                            TableClass="table table-hover"
                            Data={meterList}
                            KeySelector={(item) => item.ID.toString()}
                            TheadStyle={{ fontSize: 'smaller', display: 'table', width: '100%', tableLayout: 'fixed', height: 60 }}
                            TbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: 'calc(100%)' }}
                            RowStyle={{ display: 'table', tableLayout: 'fixed', width: 'calc(100%)' }}
                            TableStyle={{ height: '100%', width: '100%' }}
                            Selected={(item) => item.ID == selectedID}
                            SortKey={meterSort}
                            Ascending={meterAsc}
                            OnSort={(d) => {
                                if (d.colKey == meterSort)
                                    setMeterAsc(!meterAsc);
                                else {
                                    setMeterSort(d.colField as keyof PRC002.IMeter);
                                    setMeterAsc(d.colKey != 'Status');
                                }
                            }}
                            OnClick={(d) => handleSelect(d.row.ID)}
                        >
                            <ConfigTable.Configurable Key={'Name'} Label={'Name'} Default={true}>
                                <ReactTable.Column<PRC002.IMeter>
                                    Key={'Name'}
                                    AllowSort={true}
                                    Field={'Name'}>
                                    Meter
                                </ReactTable.Column>
                            </ConfigTable.Configurable>
                            <ConfigTable.Configurable Key={'Model'} Label={'Model'} Default={true}>
                                <ReactTable.Column<PRC002.IMeter>
                                    Key={'Model'}
                                    AllowSort={true}
                                    Field={'Model'}>
                                    Model
                                </ReactTable.Column>
                            </ConfigTable.Configurable>
                            <ConfigTable.Configurable Key={'Make'} Label={'Make'} Default={true}>
                                <ReactTable.Column<PRC002.IMeter>
                                    Key={'Make'}
                                    AllowSort={true}
                                    Field={'Make'}>
                                    Make
                                </ReactTable.Column>
                            </ConfigTable.Configurable>
                            <ConfigTable.Configurable Key={'AssetKey'} Label={'Asset Key'} Default={false}>
                                <ReactTable.Column<PRC002.IMeter>
                                    Key={'AssetKey'}
                                    AllowSort={true}
                                    Field={'AssetKey'}>
                                    Asset Key
                                </ReactTable.Column>
                            </ConfigTable.Configurable>
                            <ConfigTable.Configurable Key={'Timer'} Label={'Timer'} Default={false}>
                                <ReactTable.Column<PRC002.IMeter>
                                    Key={'Timer'}
                                    AllowSort={true}
                                    Field={'Timer'}>
                                    Timer
                                </ReactTable.Column>
                            </ConfigTable.Configurable>
                            <ConfigTable.Configurable Key={'Status'} Label={'Status'} Default={false}>
                                <ReactTable.Column<PRC002.IMeter>
                                    Key={'Status'}
                                    AllowSort={true}
                                    Field={'Status'}
                                    Content={({ item }) => {
                                        const stat = statusList.find(s => s.ID === item.StatusID);

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
                                    }}
                                >
                                    Status
                                </ReactTable.Column>
                            </ConfigTable.Configurable>
                        </ConfigTable.Table>
                    </div>
                </SplitSection>
                <SplitSection Width={50} MinWidth={25} MaxWidth={75}>
                    <div style={{ width: '100%', height: '100%', position: 'relative', float: 'right', overflowY: 'hidden' }}>
                        <div className="row" style={{ margin: 0 }}>
                            <MeterDetail MeterID={(isNaN(parseInt(props.useParams.meterID)) ? -1 : parseInt(props.useParams.meterID))} stateList={statusList} />
                        </div>
                        <div className="row" style={{ margin: 0 }}>
                            <RecordList MeterId={(isNaN(parseInt(props.useParams.meterID)) ? -1 : parseInt(props.useParams.meterID))} StateList={statusList} />
                        </div>
                    </div>
                </SplitSection>
            </VerticalSplit>

        </div>
    )
}

export default PRC002MeterOverviewPage;
