//******************************************************************************************************
//  ConfigFieldValueTableField.tsx - Gbtc
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

declare var homePath: string;

const ConfigFieldValueTableField = (props: { Record: PRC002.IConfigField }) => {
    const hasDesc = props.Record.Description != undefined && props.Record.Description.length > 0;

    return (<>
        <div>
            <div style={{ width: (hasDesc ? '50%' : '100%'), display: 'inline-block' }}>
                <Input<PRC002.IConfigField> Record={props.Record} Field={'Value'} Disabled={true} Label={''} Setter={(record) => { }} Valid={() => true} />
            </div>
            {hasDesc ? <>
                <div style={{
                    borderTop: '8px solid transparent',
                    borderBottom: '8px solid transparent',
                    borderRight: '8px solid #222',
                    marginTop: -8,
                    width: 0,
                    height: 0,
                    display: 'inline-block',
                }}>
                </div>
                <div style={{
                    maxWidth: '50%',
                    display: 'inline-block',
                    borderRadius: '3px',
                    opacity: 0.9,
                    color: '#fff',
                    background: '#222',
                    border: '1px solid transparent',
                    fontSize: '13px',
                    padding: '8px 21px'
                }}>
                    <p style={{ margin: 0 }}> {props.Record.Description} </p>
                </div >
            </> : null}
        </div>
    </>)
}

export default ConfigFieldValueTableField;