//******************************************************************************************************
//  BaseConfigWindow.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  02/10/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { PRC002 } from '../ComplianceModels';
import { Input } from '@gpa-gemstone/react-forms';
import Table from '@gpa-gemstone/react-table';

declare var homePath: string;

const BaseConfigWindow = (props: { configurationList: PRC002.IBaseConfig[] }) => {
    const [currentTab, setCurrentTab] = React.useState<number>(-1);
    const [fieldList, setFieldList] = React.useState<Array<PRC002.IConfigField>>([]);

    const [sortField, setSortField] = React.useState<string>('Category');
    const [ascending, setAscending] = React.useState<boolean>(true);

    

    React.useEffect(() => {
        if (props.configurationList.findIndex(item => item.ID == currentTab) == -1 && props.configurationList.length > 0)
            setCurrentTab(props.configurationList[0].ID);
        if (props.configurationList.length == 0)
            setCurrentTab(-1)
        
    }, [props.configurationList]);

    React.useEffect(() => {
        let h = getFieldList();
        return () => { if (h != null && h.abort != null) h.abort(); }
    }, [currentTab, ascending, sortField]);

    

    function getFieldList(): JQuery.jqXHR<Array<PRC002.IBaseConfig>> {
        if (currentTab == -1) return null;
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/Field/${currentTab}/${sortField}/${ascending ? 1 : 0}`,
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

    return (<>
        {props.configurationList.length > 1 ?
            <ul className="nav nav-tabs">
                {props.configurationList.map((item, index) =>
                    <li className="nav-item" key={index}>
                        <a className={"nav-link" + (currentTab == item.ID ? " active" : "")} onClick={() => setCurrentTab(item.ID)}>{item.Name}</a>
                    </li>
                )}
            </ul> : null
        }
        {currentTab != -1 && props.configurationList.find(item => item.ID == currentTab) != undefined? < div className="tab-content" style={{ maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>

            <div className={"card"} style={{ marginBottom: 10 }}>
                <div className="card-header">
                    <h4> Configuration {props.configurationList.find(item => item.ID == currentTab).Name}</h4>
                </div>
                <div className={"card-body"}>
                    <div style={{ height: window.innerHeight - 540, maxHeight: window.innerHeight - 540 }}>
                        <Input<PRC002.IBaseConfig> Record={props.configurationList.find(item => item.ID == currentTab)} Field={'Pattern'} Setter={() => { }} Valid={() => true} Label={'File Pattern'} Disabled={true} />
                        <Table<PRC002.IConfigField>
                            cols={[
                                { key: 'Category', label: 'Category', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Category'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                { key: 'Label', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={item.Label == undefined || item.Label.length == 0 ? 'Name' : 'Label'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                { key: 'FieldType', label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'FieldType'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                { key: 'Comparison', label: 'Rule', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Comparison'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <Input<PRC002.IConfigField> Record={item} Field={'Value'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> }
                            ]}
                            tableClass="table table-hover"
                            data={fieldList}
                            sortField={sortField}
                            ascending={true}
                            onSort={(d) => {
                                if (d.col == sortField)
                                    setAscending(!ascending);
                                else
                                    setSortField(d.col);
                            }}
                            onClick={(d) => { }}
                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 666, width: '100%' }}
                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            selected={(item) => false}
                        />
                    </div>
                </div>
            </div>
        </div> : null}
    </>)
}

export const BaseConfigByMeter = (props: { MeterId: number }) => {
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

    return <BaseConfigWindow configurationList={configurationlist} />
}

export default BaseConfigWindow;
