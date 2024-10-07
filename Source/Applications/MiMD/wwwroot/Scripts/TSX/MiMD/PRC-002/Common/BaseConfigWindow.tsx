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
import * as PRC002 from '../ComplianceModels';
import BaseConfigTable from './BaseConfigTable';
import { TabSelector } from '@gpa-gemstone/react-interactive';

declare let homePath: string;

interface IProps {
    configurationList: PRC002.IBaseConfig[],
    getFieldList?: (id: number, setField: React.Dispatch<React.SetStateAction<PRC002.IConfigField[]>>) => (() => void)
    OnEdit?: (record: PRC002.IConfigField, baseConfidID: number) => void,
    OnRemove?: (record: PRC002.IConfigField, baseConfigID: number) => void,
    OnNew?: (baseConfigID: number) => void,

}
const BaseConfigWindow = (props: IProps) => {
    const [currentTab, setCurrentTab] = React.useState<number>(-1);
    const [fieldList, setFieldList] = React.useState<Array<PRC002.IConfigField>>([]);


    React.useEffect(() => {
       
            if (props.configurationList.findIndex(item => item.ID == currentTab) == -1 && props.configurationList.length > 0)
                setCurrentTab(props.configurationList[0].ID);
            if (props.configurationList.length == 0)
                setCurrentTab(-1)
            
    }, [props.configurationList]);

    React.useEffect(() => {
        if (props.getFieldList != undefined)
            return props.getFieldList(currentTab, setFieldList);
        const h = getFieldList();
        return () => { if (h != null && h.abort != null) h.abort(); }
    }, [currentTab, props.configurationList]);

    

    function getFieldList(): JQuery.jqXHR<Array<PRC002.IBaseConfig>> {
        if (currentTab == -1) return null;
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/Field/${currentTab}/Category/1`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: string) => {
            if (data == null)
                return
            setFieldList(JSON.parse(data) as PRC002.IConfigField[]);
        });

        return handle;
    }

    const tabs = props.configurationList.map(item => ({ Label: item.Name, Id: item.ID.toString() }))
    return (<>
        {props.configurationList.length > 1 ? <TabSelector CurrentTab={currentTab.toString()} SetTab={(t) => setCurrentTab(parseInt(t))} Tabs={tabs} /> : null }
        {currentTab != -1 && props.configurationList.find(item => item.ID == currentTab) != undefined ? < div className="tab-content" style={{ maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
            <BaseConfigTable
                Config={props.configurationList.find(item => item.ID == currentTab)}
                Fields={fieldList} OnEdit={props.OnEdit == undefined ? undefined : (record) => props.OnEdit(record, currentTab)}
                OnRemove={props.OnRemove == undefined ? undefined : (record) => props.OnRemove(record, currentTab)}
                OnNew={props.OnNew == undefined ? undefined : () => props.OnNew(currentTab)}
            />
        </div> : null}
    </>)
}

export const BaseConfigByMeter = (props: { MeterId: number }) => {
    const [configurationlist, setConfigurationList] = React.useState<PRC002.IBaseConfig[]>([]);

    React.useEffect(() => {
        const h = getBaseConfigs();
        return () => { if (h != null && h.abort != null) h.abort(); }
    }, [props.MeterId]);

    function getBaseConfigs(): JQuery.jqXHR<Array<PRC002.IBaseConfig>> {
        if (props.MeterId == null || isNaN(props.MeterId))
            return null;
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/BaseConfig/${props.MeterId}`,
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
