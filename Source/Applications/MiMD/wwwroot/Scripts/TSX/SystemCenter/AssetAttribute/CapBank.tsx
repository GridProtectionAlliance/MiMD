//******************************************************************************************************
//  CapBank.tsx - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  01/17/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { OpenXDA, SystemCenter } from '../global';
import AssetAttributes from './Asset';
import FormInput from '../CommonComponents/FormInput';
function CapBankAttributes(props: { NewEdit: SystemCenter.NewEdit, Asset: OpenXDA.CapBank, UpdateState: (newEditAsset: OpenXDA.CapBank) => void }): JSX.Element {
    function valid(field: keyof (OpenXDA.CapBank)): boolean {
        if (field == 'NumberOfBanks')
            return props.Asset.NumberOfBanks != null && AssetAttributes.isInteger(props.Asset.NumberOfBanks);
        else if (field == 'CansPerBank')
            return props.Asset.CansPerBank != null && AssetAttributes.isInteger(props.Asset.CansPerBank);
        else if (field == 'CapacitancePerBank')
            return props.Asset.CapacitancePerBank != null && AssetAttributes.isInteger(props.Asset.CapacitancePerBank);
    
        return false;
    }
    if (props.Asset == null) return null;
    return (
        <>
            <FormInput<OpenXDA.CapBank> Record={props.Asset} Field={'NumberOfBanks'} Label={'Number Of Banks'} Feedback={'Number Of Banks is a required integer field.'} Valid={valid} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />
            <FormInput<OpenXDA.CapBank> Record={props.Asset} Field={'CansPerBank'} Label={'Cans Per Bank'} Feedback={'Cans Per Bank is a required integer field.'} Valid={valid} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />
            <FormInput<OpenXDA.CapBank> Record={props.Asset} Field={'CapacitancePerBank'} Label={'Capacitance Per Bank'} Feedback={'Capacitance per Bank is a required integer field.'} Valid={valid} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />
        </>
    );

}

export default CapBankAttributes;