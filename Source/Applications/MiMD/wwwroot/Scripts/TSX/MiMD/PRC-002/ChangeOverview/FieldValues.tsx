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
import * as PRC002 from '../ComplianceModels';
import { Modal } from '@gpa-gemstone/react-interactive';
import { Input } from '@gpa-gemstone/react-forms';
import { ReactIcons } from "@gpa-gemstone/gpa-symbols";
import { ReactTable } from "@gpa-gemstone/react-table";


declare let homePath: string;

interface IProps {RecordID?: number, ActionID?: number, show: boolean, setShow: (b:boolean) => void}


const FieldValues = (props: IProps) => {

    const [fields, setFields] = React.useState<PRC002.IConfigFieldStatus[]>([]);

    const [sortBy, setSortBy] = React.useState<string>('FieldCategory');
    const [ascending, setAscending] = React.useState<boolean>(true);

    React.useEffect(() => {
        const h = GetFields();
        return () => { if (h != null && h.abort != null) h.abort(); }
    }, [props.RecordID, props.ActionID, ascending, sortBy])


    function GetFields(): JQuery.jqXHR {
        let handle = null;
        if (props.ActionID == undefined)
            handle = $.ajax({
                type: "GET",
                url: `${homePath}api/MiMD/PRC002/FieldValue/${props.RecordID}/${sortBy}/${ascending ? 1 : 0}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });
        else
            handle = $.ajax({
                type: "GET",
                url: `${homePath}api/MiMD/PRC002/FieldValue/History/${props.ActionID}/${sortBy}/${ascending ? 1 : 0}`,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });

        handle.done((data: Array<PRC002.IConfigFieldStatus>) => {
            setFields(data);
        });

        return handle;
    }

    return (
        <>
            <Modal Title={props.ActionID == undefined ? 'Current Configuration' : 'Related Configuration'} Show={props.show} CallBack={() => { props.setShow(false); }} Size='lg' ShowX={true} ShowCancel={false} ConfirmText='Close'  >
                <div style={{ height: window.innerHeight - 540, maxHeight: window.innerHeight - 540 }}>
                    <ReactTable.Table<PRC002.IConfigFieldStatus>
                        TableClass="table table-hover"
                        Data={fields}
                        SortKey={sortBy}
                        Ascending={ascending}
                        OnSort={(d) => {
                            if (d.colKey == sortBy)
                                setAscending(!ascending);
                            else {
                                setSortBy(d.colKey);
                                setAscending(true);
                            }
                        }}
                        OnClick={() => { }}
                        TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        TbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 620, width: '100%' }}
                        RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                        Selected={() => false}
                        KeySelector={item => item.FieldId}
                    >
                        <ReactTable.Column<PRC002.IConfigFieldStatus>
                            Key="FieldCategory"
                            Field="FieldCategory"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            Content={(row) => (
                                <Input<PRC002.IConfigFieldStatus> Record={row.item} Field={'FieldCategory'} Disabled={true}
                                    Label={''} Setter={() => { }} Valid={() => true} />
                            )}
                        > Category
                        </ReactTable.Column>
                        <ReactTable.Column<PRC002.IConfigFieldStatus>
                            Key="FieldLabel"
                            Field="FieldLabel"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            Content={(row) => (
                                <Input<PRC002.IConfigFieldStatus> Record={row.item} Disabled={true} Label={''}
                                    Field={row.item.FieldLabel == undefined || row.item.FieldLabel.length == 0 ? 'FieldName' : 'FieldLabel'}
                                    Setter={() => { }} Valid={() => true} />
                            )}
                        > Field
                        </ReactTable.Column>
                        <ReactTable.Column<PRC002.IConfigFieldStatus>
                            Key="Value"
                            Field="Value"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            Content={(row) => (
                                <Input<PRC002.IConfigFieldStatus> Record={row.item} Field={'Value'} Disabled={true}
                                    Label={''} Setter={() => { }} Valid={() => true} />
                            )}
                        > Value
                        </ReactTable.Column>
                        <ReactTable.Column<PRC002.IConfigFieldStatus>
                            Key="Valid"
                            Field="Valid"
                            AllowSort={true}
                            HeaderStyle={{ width: 'auto' }}
                            RowStyle={{ width: 'auto' }}
                            Content={(row) => (
                                <div style={{
                                    alignContent: 'center',
                                    padding: '.375rem .75rem',
                                    fontSize: '1.5rem',
                                    lineHeight: 1.5
                                }}>
                                    {row.item.Valid ? <ReactIcons.CheckMark Color='green' /> : <ReactIcons.Warning Color='yellow' />}
                                </div>
                            )}
                        > Valid
                        </ReactTable.Column>
                    </ReactTable.Table>
                </div>
            </Modal>
        </>
    );
}

export default FieldValues;

