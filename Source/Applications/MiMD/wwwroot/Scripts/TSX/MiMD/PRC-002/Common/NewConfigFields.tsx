//******************************************************************************************************
//  NewConfigFields.tsx - Gbtc
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
//  03/16/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as PRC002 from '../ComplianceModels';
import { Input } from '@gpa-gemstone/react-forms';


interface IProps {
    Record: PRC002.IBaseConfig,
    SetRecord: (record: PRC002.IBaseConfig) => void,
    UniqueKey: boolean
}

const NewConfigFields = (props: IProps) => {
  

    return (<>
        <Input<PRC002.IBaseConfig> Record={props.Record} Field={'Name'} Setter={props.SetRecord} Valid={() => props.Record.Name != null && props.Record.Name.length > 0 && props.UniqueKey}
            Feedback={'Name is required and must be unique'} Label={'Name'} />
        <Input<PRC002.IBaseConfig> Record={props.Record} Field={'Pattern'} Setter={props.SetRecord} Valid={() => props.Record.Pattern != null && props.Record.Pattern.length > 0}
            Label={'File Pattern'} Feedback={'File Pattern is required.'} /> </>)
    
}

export default NewConfigFields;
