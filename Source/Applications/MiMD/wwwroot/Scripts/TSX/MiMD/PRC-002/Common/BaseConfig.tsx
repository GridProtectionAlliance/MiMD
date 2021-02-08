//******************************************************************************************************
//  BaseConfig.tsx - Gbtc
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
//  09/17/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { PRC002} from '../ComplianceModels';
import { Input } from '@gpa-gemstone/react-forms';
import Table from '@gpa-gemstone/react-table';

declare var homePath: string;

interface IProps { BaseConfigList: Array<PRC002.IBaseConfig>, getFieldList?: (index: number) => Array<PRC002.IConfigField>, onEdit?: (record: PRC002.IConfigField) => void, onNew?: (id: number) => void }

const BaseConfig = (props: IProps) => {

    const [baseConfigTab, setBaseConfigTab] = React.useState<number>((props.BaseConfigList.length > 0 ? props.BaseConfigList[0].ID : -1));
    const [fieldList, setFieldList] = React.useState<Array<PRC002.IConfigField>>([]);

    React.useEffect(() => {
        if (props.BaseConfigList.length > 0)
            setBaseConfigTab(props.BaseConfigList[0].ID);
    }, [props.BaseConfigList]);

    React.useEffect(() => {
        if (props.getFieldList == undefined) {
            let handleFieldList = getFieldList();

            return () => {
                if (handleFieldList != null && handleFieldList.abort != null) handleFieldList.abort();
            }
        }
        else {
            setFieldList(props.getFieldList(baseConfigTab));
            return () => { }
        }
    }, [baseConfigTab]);

    function getFieldList(): JQuery.jqXHR<Array<PRC002.IBaseConfig>> {
        if (baseConfigTab == -1) return null;
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/Field?parentID=${baseConfigTab}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: Array<PRC002.IConfigField>) => {
            if (data == null)
                return
            setFieldList(data);

        });

        return handle;
    }

      return (
        <>
            {props.BaseConfigList.length > 1?
                <ul className="nav nav-tabs">
                    {props.BaseConfigList.map((item,index) =>
                        <li className="nav-item" key={index}>
                            <a className={"nav-link" + (baseConfigTab == item.ID ? " active" : "")} onClick={() => setBaseConfigTab(item.ID)} data-toggle="tab" href={"#BasConfig-" + item.Name}>{item.Name}</a>
                        </li>
                    )}
                </ul> : null
              }
              <div className="tab-content" style={{ maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
                  {props.BaseConfigList.map((item,index) => <Configurationwindow key={index} active={item.ID == baseConfigTab} configuration={item} Fields={fieldList} hasHeader={props.BaseConfigList.length > 1} onEdit={props.onEdit} />)}
              </div>
              {props.onNew != undefined ? <button type="button" className="btn btn-primary btn-sm" onClick={() => props.onNew(baseConfigTab)}>Add new Field </button> : null}
        </>
    )
}

interface ConfigProps { configuration: PRC002.IBaseConfig, active: boolean, Fields: Array<PRC002.IConfigField>, hasHeader: boolean, onEdit?: (record: PRC002.IConfigField) => void}
const Configurationwindow = (props: ConfigProps) => {


    return (
        <div key={props.configuration.ID} className={(props.hasHeader ? "tab-pane " + (props.active ? " active" : "fade") : "")} id={"#BasConfig-" + props.configuration.Name} >
            <div key={2} className={props.hasHeader ? "card" : ""} style={{ marginBottom: 10 }}>
                {props.hasHeader ?
                    <div className="card-header">
                        <h4> Configuration {props.configuration.Name}</h4>
                    </div> : null}
                <div  className={props.hasHeader ? "card-body" : ""}>
                    <div style={{ height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, overflowY: 'auto' }}>
                        <Input<PRC002.IBaseConfig> Record={props.configuration} Field={'Pattern'} Setter={() => { }} Valid={() => true} Label={'File Pattern'} Disabled={true} />
                        <Table<PRC002.IConfigField>
                            cols={[
                                { key: 'Name', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Name'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                { key: 'FieldType', label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'FieldType'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                { key: 'Comparison', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Comparison'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Value'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                { key: 'ID', label: '', headerStyle: { width: (props.onEdit == undefined ? '0px' : 'auto') }, rowStyle: { width: (props.onEdit == undefined ? '0px' : 'auto') }, content: (item, key, style) => (props.onEdit == undefined ? null : <div style={{ marginTop: '16px', textAlign: 'center' }} onClick={() => props.onEdit(item)}><i style={{ color: '#007BFF' }} className="fa fa-pencil-square fa-3x" aria-hidden="true"></i></div>) },
                        
                    ]}
                    tableClass="table table-hover"
                            data={props.Fields}
                            sortField={'Name'}
                            ascending={true}
                            onSort={(d) => {}}
                            onClick={(d) => {}}
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            selected={(item) => false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseConfig;


export const BaseConfigWindow = (props: { MeterId: number }) => {
    const [configurationlist, setConfigurationList] = React.useState<PRC002.IBaseConfig[]>([]);

    React.useEffect(() => {
        let h = getBaseConfigs();

        return () => { if (h != null && h.abort != null) h.abort(); }
    }, [props.MeterId]);

    function getBaseConfigs(): JQuery.jqXHR<Array<PRC002.IBaseConfig>> {
        if (props.MeterId == null)
            return null;
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/BaseConfig?parentID=${props.MeterId}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: Array<PRC002.IBaseConfig>) => {
            if (data == null)
                return
            setConfigurationList(data);

        });

        return handle;
    }

    return <BaseConfig BaseConfigList={configurationlist} />
}
