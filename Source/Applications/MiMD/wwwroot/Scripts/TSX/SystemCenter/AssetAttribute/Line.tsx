//******************************************************************************************************
//  Line.tsx - Gbtc
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

function LineAttributes(props: { NewEdit: SystemCenter.NewEdit, Asset: OpenXDA.Line, UpdateState: (newEditAsset: OpenXDA.Line) => void }): JSX.Element {
    function valid(field: keyof (OpenXDA.Line) | keyof(OpenXDA.LineDetail)): boolean {
        if (field == 'MaxFaultDistance')
            return props.Asset.MaxFaultDistance == null || AssetAttributes.isRealNumber(props.Asset.MaxFaultDistance);
        else if (field == 'MinFaultDistance')
            return props.Asset.MinFaultDistance == null || AssetAttributes.isRealNumber(props.Asset.MinFaultDistance);
        else if (field == 'Length')
            return props.Asset.Detail.Length == null || AssetAttributes.isRealNumber(props.Asset.Detail.Length);
        else if (field == 'R0')
            return props.Asset.Detail.R0 == null || AssetAttributes.isRealNumber(props.Asset.Detail.R0);
        else if (field == 'X0')
            return props.Asset.Detail.X0 == null || AssetAttributes.isRealNumber(props.Asset.Detail.X0);
        else if (field == 'R1')
            return props.Asset.Detail.R1 == null || AssetAttributes.isRealNumber(props.Asset.Detail.R1);
        else if (field == 'X1')
            return props.Asset.Detail.X1 == null || AssetAttributes.isRealNumber(props.Asset.Detail.X1);
       else if (field == 'ThermalRating')
            return props.Asset.Detail.ThermalRating == null || AssetAttributes.isRealNumber(props.Asset.Detail.ThermalRating);

        return false;
    }

    function updateLineDetail(record: OpenXDA.LineDetail): void {
        var asset: OpenXDA.Line = _.clone(props.Asset);
        asset.Detail = record;
        props.UpdateState(asset);

    }

    React.useEffect(() => {
    }, [props.Asset]);

    if (props.Asset == null || props.Asset.Detail == null) return null;
    return (
        <>
            <FormInput<OpenXDA.Line> Record={props.Asset} Field={'MaxFaultDistance'} Label={'Max Fault Distance'} Feedback={'Max Fault Distance is a numeric field.'} Valid={valid} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />
            <FormInput<OpenXDA.Line> Record={props.Asset} Field={'MinFaultDistance'} Label={'Min Fault Distance'} Feedback={'Min Fault Distance is a numeric field.'} Valid={valid} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />
            <FormInput<OpenXDA.LineDetail> Record={props.Asset.Detail} Field={'Length'} Feedback={'Length is a required numeric field.'} Valid={valid} Setter={updateLineDetail} Disabled={true} />
            <FormInput<OpenXDA.LineDetail> Record={props.Asset.Detail} Field={'R0'} Valid={valid} Setter={updateLineDetail} Disabled={true} />
            <FormInput<OpenXDA.LineDetail> Record={props.Asset.Detail} Field={'X0'} Valid={valid} Setter={updateLineDetail} Disabled={true} />
            <FormInput<OpenXDA.LineDetail> Record={props.Asset.Detail} Field={'R1'} Valid={valid} Setter={updateLineDetail} Disabled={true} />
            <FormInput<OpenXDA.LineDetail> Record={props.Asset.Detail} Field={'X1'} Valid={valid} Setter={updateLineDetail} Disabled={true} />
            <FormInput<OpenXDA.LineDetail> Record={props.Asset.Detail} Field={'ThermalRating'} Label={'Thermal Rating'} Valid={valid} Setter={updateLineDetail} Disabled={true} />
        </>
    );
}

export default LineAttributes;