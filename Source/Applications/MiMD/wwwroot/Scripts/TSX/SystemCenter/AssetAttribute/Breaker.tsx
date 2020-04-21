//******************************************************************************************************
//  Breaker.tsx - Gbtc
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
import FormCheckBox from '../CommonComponents/FormCheckBox';
import { getSpareBreakersForSubstation } from '../../../TS/Services/Asset';

function BreakerAttributes(props: { NewEdit: SystemCenter.NewEdit, Asset: OpenXDA.Breaker, UpdateState: (newEditAsset: OpenXDA.Breaker) => void, ShowSpare?: boolean }): JSX.Element {
    function valid(field: keyof(OpenXDA.Breaker)): boolean {
        if (field == 'ThermalRating')
            return props.Asset.ThermalRating != null && AssetAttributes.isRealNumber(props.Asset.ThermalRating);
        else if (field == 'Speed')
            return props.Asset.Speed != null && AssetAttributes.isRealNumber(props.Asset.Speed);
        else if (field == 'TripTime')
            return props.Asset.TripTime == null || AssetAttributes.isInteger(props.Asset.TripTime);
        else if (field == 'PickupTime')
            return props.Asset.PickupTime == null || AssetAttributes.isInteger(props.Asset.PickupTime);
        else if (field == 'TripCoilCondition')
            return props.Asset.TripCoilCondition == null || AssetAttributes.isRealNumber(props.Asset.TripCoilCondition);
        else if (field == 'EDNAPoint') return true;
        else if (field == 'Spare') return true;
        else if (field == 'SpareBreakerID') return true;
        return false;
    }
    const [spares, setSpares] = React.useState<Array<OpenXDA.Breaker>>([]);

    React.useEffect(() => {
        getSpareBreakersForSubstation(props.Asset).then(sps => {
            setSpares(sps);
        });
    }, [props.Asset]);

    if (props.Asset == null) return null;
    return (
        <>
            <FormInput<OpenXDA.Breaker> Record={props.Asset} Field={'ThermalRating'} Label={'Thermal Rating'} Feedback={'Thermal rating is a required numeric field.'} Valid={valid} Setter={props.UpdateState} Disabled={ props.NewEdit == 'New' && props.Asset.ID != 0} />
            <FormInput<OpenXDA.Breaker> Record={props.Asset} Field={'Speed'} Feedback={'Speed is a required numeric field.'} Valid={valid} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />
            <FormInput<OpenXDA.Breaker> Record={props.Asset} Field={'TripTime'} Label={'Trip Time'} Feedback={'Trip Time is an integer field.'} Valid={valid} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />
            <FormInput<OpenXDA.Breaker> Record={props.Asset} Field={'PickupTime'} Label={'Pickup Time'} Feedback={'Pickup Time is an integer field.'} Valid={valid} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />
            <FormInput<OpenXDA.Breaker> Record={props.Asset} Field={'TripCoilCondition'} Label={'Trip Coil Condition'} Feedback={'Trip Coil Condition is an numeric field.'} Valid={valid} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />
            <FormInput<OpenXDA.Breaker> Record={props.Asset} Field={'EDNAPoint'} Label={'EDNA Point'} Valid={valid} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />

            <div className="form-group" hidden={props.ShowSpare != true}>
                <label>Spare Breaker</label>
                <select className="form-control" value={props.Asset.SpareBreakerID == null ? 0 : props.Asset.SpareBreakerID} onChange={(evt) => {
                    let record: OpenXDA.Breaker = _.clone(props.Asset);
                    if (evt.target.value == '0')
                        record.SpareBreakerID = null;
                    else
                        record.SpareBreakerID = parseInt(evt.target.value as string);
                    props.UpdateState(record)
                }} disabled={props.NewEdit == 'New' && props.Asset.ID != 0}>
                    <option value={0} key={0} >None</option>
                    {
                        spares.map(spare => <option value={spare.ID} key={spare.ID} >{spare.AssetKey}</option>)
                    }

                </select>
            </div>
            <FormCheckBox<OpenXDA.Breaker> Record={props.Asset} Field={'Spare'} Label={'Is Spare'} Setter={props.UpdateState} Disabled={props.NewEdit == 'New' && props.Asset.ID != 0} />

        </>
    );

}

export default BreakerAttributes;