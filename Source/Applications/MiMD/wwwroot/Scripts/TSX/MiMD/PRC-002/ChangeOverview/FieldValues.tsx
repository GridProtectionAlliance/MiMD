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
import Table from '../../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { MiMD } from '../../global';
import FormSelect from '../../CommonComponents/FormSelect';
import FormInput from '../../CommonComponents/FormInput';;
import { PRC002} from '../ComplianceModels';
import { Hash } from 'crypto';


declare var homePath: string;

interface IProps { FieldList: Array<PRC002.IConfigFieldStatus>, Label: string, Id: string}


const FieldValues = (props: IProps) => {

    const [selectedField, setSelectedField] = React.useState<number>(-1);

    
      return (
        <>
              <div className="modal" id={props.Id}>
                  <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                              <h4 className="modal-title">{props.Label}</h4>
                              <button type="button" className="close" data-dismiss="modal" onClick={() => $('#' + props.Id).hide()}>&times;</button>
                    </div>
                        <div className="modal-body">

                            <div className="tab-content" style={{ maxHeight: window.innerHeight - 235, overflow: 'hidden' }}>
                                <div style={{ marginBottom: 10 }}>
                                    <div style={{ height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, overflowY: 'auto' }}>
                                        <Table
                                              cols={[
                                                  { key: 'FieldName', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <FormInput<PRC002.IConfigFieldStatus> Record={item} Field={'FieldName'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                                  { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <FormInput<PRC002.IConfigFieldStatus> Record={item} Field={'Value'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} /> },
                                                  {
                                                      key: 'Valid', label: 'Valid', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => { return (
                                                          <div style={{
                                                              TextAlign: 'center',
                                                              padding: '.375rem .75rem',
                                                              fontSize: '1.5rem',
                                                            lineHeight: 1.5 }}>
                                                              <i className={"fa " + (item.Valid ? "fa-check-circle" : "fa-exclamation-triangle")} aria-hidden="true"></i>
                                                          </div>)
                                                      }
                                                  },
                                    ]}
                                    tableClass="table table-hover"
                                            data={props.FieldList}
                                            sortField={'FieldName'}
                                            ascending={true}
                                            onSort={(d) => { }}
                                            onClick={(d) => { }}
                                            theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                                            rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                            selected={(item) => false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => $('#' + props.Id).hide()}>Close</button>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default FieldValues;

