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
import Table from '@gpa-gemstone/react-table';
import * as _ from 'lodash';
import { PRC002} from '../ComplianceModels';
import { Modal } from '@gpa-gemstone/react-interactive';
import { Input } from '@gpa-gemstone/react-forms';
import { HeavyCheckMark, Warning } from '@gpa-gemstone/gpa-symbols';


declare var homePath: string;

interface IProps {RecordID?: number, ActionID?: number, show: boolean, setShow: (b:boolean) => void}


const FieldValues = (props: IProps) => {

    const [fields, setFields] = React.useState<PRC002.IConfigFieldStatus[]>([]);

    const [sortBy, setSortBy] = React.useState<string>('FieldCategory');
    const [ascending, setAscending] = React.useState<boolean>(true);

    React.useEffect(() => {
        let h = GetFields();
        return () => { if (h != null && h.abort != null) h.abort(); }
    }, [props.RecordID, props.ActionID, ascending, sortBy])


    function GetFields(): JQuery.jqXHR<any> {
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
              <Modal Title={props.ActionID == undefined ? 'Current Configuration' : 'Related Configuration'} Show={props.show} CallBack={(confirm) => { props.setShow(false); }} Size='lg' ShowX={true} ShowCancel={false} ConfirmText='Close'  >

                  <div style={{ height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, }}>
                      <Table<PRC002.IConfigFieldStatus>
                          cols={[

                              { key: 'FieldCategory', label: 'Category', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <Input<PRC002.IConfigFieldStatus> Record={item} Field={'FieldCategory'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                              {
                                  key: 'FieldLabel', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <Input<PRC002.IConfigFieldStatus> Record={item} Disabled={true} Label={''} Field={item.FieldLabel == undefined || item.FieldLabel.length == 0 ? 'FieldName' : 'FieldLabel'} Setter={(record) => { }} Valid={() => true} />
                              },
                                { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => <Input<PRC002.IConfigFieldStatus> Record={item} Field={'Value'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                {
                                    key: 'Valid', label: 'Valid', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item) => { return (
                                        <div style={{
                                            alignContent: 'center',
                                            padding: '.375rem .75rem',
                                            fontSize: '1.5rem',
                                            lineHeight: 1.5
                                        }}>
                                            {item.Valid ? { HeavyCheckMark } : { Warning }}
                                        </div>)
                                    }
                                },
                        ]}
                          tableClass="table table-hover"
                          data={fields}
                          sortKey={sortBy}
                            ascending={ascending}
                          onSort={(d) => {
                              if (d.colKey == sortBy)
                                  setAscending(!ascending);
                              else {
                                  setSortBy(d.colKey);
                                  setAscending(true);
                              }
                          }}
                onClick={(d) => { }}
                theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 620, width: '100%' }}
                rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                selected={(item) => false}
                    />
                </div>
            </Modal>
        </>
    )
}

export default FieldValues;

