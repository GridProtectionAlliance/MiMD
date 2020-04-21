//******************************************************************************************************
//  Asset.tsx - Gbtc
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
import { OpenXDA } from '../global';
import { SystemCenter } from '../global';
import FormInput from '../CommonComponents/FormInput';
import FormTextArea from '../CommonComponents/FormTextArea';

interface AssetAttributesProps {
    Asset: OpenXDA.Asset,
    NewEdit: SystemCenter.NewEdit,
    UpdateState: (Asset: OpenXDA.Asset) => void,
    AssetTypes: Array<OpenXDA.AssetType>,
    AllAssets: Array<OpenXDA.Asset>,
    GetDifferentAsset: (assetID: number) => void,
    HideSelectAsset?: boolean
}
export default class AssetAttributes extends React.Component<AssetAttributesProps, {}, {}>{
    constructor(props, context) {
        super(props, context);
        this.valid = this.valid.bind(this);
    }

    static getNewAsset(type: OpenXDA.AssetTypeName): OpenXDA.Breaker | OpenXDA.Bus | OpenXDA.CapBank | OpenXDA.Line | OpenXDA.LineSegment | OpenXDA.Transformer {
        let asset: OpenXDA.Asset = {
            ID: 0,
            AssetKey: null,
            AssetName: null,
            AssetType: type,
            Description: null,
            VoltageKV: null,
            Spare: false,
            Channels: []
        }

        asset = AssetAttributes.getNewAssetAttributes(asset, type);
        return asset;
    }

    static getNewLineDetails(): OpenXDA.LineDetail{
        let asset: OpenXDA.LineDetail = {
            Length: 0,
            X0: 0,
            R0: 0,
            X1: 0,
            R1: 0,
            ThermalRating: 0,
        }

        return asset;
    }

    static getNewAssetAttributes(asset: OpenXDA.Asset, type: OpenXDA.AssetTypeName): OpenXDA.Breaker | OpenXDA.Bus | OpenXDA.CapBank | OpenXDA.Line | OpenXDA.LineSegment | OpenXDA.Transformer {
        if (type == 'Line') {
            let record = asset as OpenXDA.Line;
            record.MaxFaultDistance = null;
            record.MinFaultDistance = null;
            record.Detail = this.getNewAsset('LineSegment') as OpenXDA.LineSegment;

            return record;
        }
        else if (type == 'Breaker') {
            let record = asset as OpenXDA.Breaker;
            record.ThermalRating = null;
            record.Speed = null;
            record.TripTime = null;
            record.PickupTime = null;
            record.TripCoilCondition = null;
            return record;
        }
        else if (type == 'Bus') {
            let record = asset as OpenXDA.Bus;
            return record
        }
        else if (type == 'CapacitorBank') {
            let record = asset as OpenXDA.CapBank;
            record.NumberOfBanks = null;
            record.CansPerBank = null;
            record.CapacitancePerBank = null;
            return record;

        }
        else if (type == 'LineSegment') {
            let record = asset as OpenXDA.LineSegment;
            record.R0 = null;
            record.X0 = null;
            record.R1 = null;
            record.X1 = null;
            record.ThermalRating = null;
            record.Length = null;
            return record
        }
        else {
            let record = asset as OpenXDA.Transformer;
            record.R0 = null;
            record.X0 = null;
            record.R1 = null;
            record.X1 = null;
            record.ThermalRating = null;
            record.PrimaryVoltageKV = null;
            record.SecondaryVoltageKV = null;
            record.Tap = null;
            return record
        }


    }

    static isInteger(value: any) {
        var regex = /^-?[0-9]+$/;
        return value.toString().match(regex) != null;
    }
    static isRealNumber(value: any) {
        var regex = /^-?[0-9]+(\.[0-9]+)?$/;
        return value.toString().match(regex) != null;
    }

    changeAssetType(type: OpenXDA.AssetTypeName): void {
        let asset = {
            ID: this.props.Asset.ID,
            AssetKey: this.props.Asset.AssetKey,
            AssetName: this.props.Asset.AssetName,
            AssetType: type,
            Description: this.props.Asset.Description,
            VoltageKV: this.props.Asset.VoltageKV,
            Channels: this.props.Asset.Channels,
            Spare: this.props.Asset.Spare
        }

        asset = AssetAttributes.getNewAssetAttributes(asset, type);
        asset['AssetTypeID'] = this.props.AssetTypes.find(ats => ats.Name == type).ID;
        this.props.UpdateState(asset);
    }

    valid(field: keyof (OpenXDA.Asset)): boolean {       
        if (field == 'AssetKey') {
            if (this.props.Asset.AssetKey == null || this.props.Asset.AssetKey.length == 0) return false;
            else if (this.props.NewEdit == 'New') {
                if (this.props.Asset.ID == 0) {
                    return this.props.AllAssets.map(asset => asset.AssetKey.toLowerCase()).indexOf(this.props.Asset.AssetKey.toLowerCase()) < 0;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        else if (field == 'AssetName')
            return this.props.Asset.AssetName != null && this.props.Asset.AssetName.length > 0;
        else if (field == 'VoltageKV')
            return this.props.Asset.VoltageKV != null && AssetAttributes.isRealNumber(this.props.Asset.VoltageKV);
        else if (field == 'Description')
            return true;
        return false;
    }

    render() {
        if (this.props.Asset == null) return null;
        return (
            <>
                <div className="form-group" hidden={this.props.NewEdit == 'Edit' || this.props.HideSelectAsset == true}>
                    <label>Select Asset</label>
                    <select className="form-control" value={this.props.Asset.ID.toString()} disabled={this.props.NewEdit == 'Edit'} onChange={(evt) => {
                        if (evt.target.value != "0")
                            this.props.GetDifferentAsset(parseInt(evt.target.value));
                        else
                            this.props.UpdateState(AssetAttributes.getNewAsset('Line'));
                    }}>
                        <option key={0} value="0">Add New</option>

                        {
                            this.props.AllAssets.map((asset, index) => <option key={index + 1} value={asset.ID} >{asset.AssetKey}</option>)
                        }

                    </select>
                </div>

                <div className="form-group">
                    <label>Type</label>
                    <select className="form-control" value={this.props.Asset.AssetType} onChange={(evt) => {
                        this.changeAssetType(evt.target.value as 'Line' | 'LineSegment' | 'Breaker' | 'Bus' | 'CapacitorBank' | 'Transformer')
                    }} disabled={this.props.NewEdit == 'Edit' || this.props.Asset.ID != 0}>
                        {
                            this.props.AssetTypes.map(assetType => <option value={assetType.Name} key={assetType.ID} hidden={assetType.Name == 'LineSegment'}>{assetType.Name}</option>)
                        }

                    </select>
                </div>

                <FormInput<OpenXDA.Asset> Record={this.props.Asset} Field={'AssetKey'} Label={'Key'} Feedback={'A unique key of less than 50 characters is required.'} Valid={this.valid} Setter={this.props.UpdateState} Disabled={this.props.NewEdit == 'New' && this.props.Asset.ID != 0} />
                <FormInput<OpenXDA.Asset> Record={this.props.Asset} Field={'AssetName'} Label={'Name'} Feedback={'Name must be less than 200 and is required.'} Valid={this.valid} Setter={this.props.UpdateState} Disabled={this.props.NewEdit == 'New' && this.props.Asset.ID != 0} />
                <FormInput<OpenXDA.Asset> Record={this.props.Asset} Field={'VoltageKV'} Label={'Nominal Voltage (kV)'} Feedback={'Nominal Voltage requires a numerical value.'} Valid={this.valid} Setter={this.props.UpdateState} Disabled={this.props.NewEdit == 'New' && this.props.Asset.ID != 0} />
                <FormTextArea<OpenXDA.Asset> Rows={3} Record={this.props.Asset} Field={'Description'} Valid={this.valid} Setter={this.props.UpdateState} Disabled={this.props.NewEdit == 'New' && this.props.Asset.ID != 0} />
            </>
        );
    }
}