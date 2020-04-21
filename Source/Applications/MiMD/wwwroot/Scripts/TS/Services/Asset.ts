
//******************************************************************************************************
//  AssetServices.ts - Gbtc
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
//  01/23/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import { OpenXDA } from "../../TSX/MiMD/global";
import * as _ from 'lodash';
import AssetAttributes from "../../TSX/MiMD/AssetAttribute/Asset";

declare var homePath: string;


function getSpareBreaker(breaker: OpenXDA.Breaker): Promise<OpenXDA.Breaker> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/OpenXDA/Breaker/${breaker.ID}/SpareBreaker`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    }).promise();
}

function getLocationForBreaker(breaker: OpenXDA.Breaker): Promise<OpenXDA.Location> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/OpenXDA/Breaker/${breaker.ID}/Location`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    }).promise();

}
function getSparesForLocation(location: OpenXDA.Location): Promise<Array<OpenXDA.Breaker>> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/OpenXDA/Breaker/SpareBreakers/Substation/${location.ID}`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    }).promise();

}

export async function getSpareBreakersForSubstation(breaker: OpenXDA.Breaker): Promise<Array<OpenXDA.Breaker>> {
    const location = await getLocationForBreaker(breaker);
    if (location == null) return [];
    const spares = await getSparesForLocation(location);
    return spares
}


export function getAssetTypes(): JQueryXHR {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/OpenXDA/AssetType`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}

export function getAllAssets(): JQueryXHR{
        return $.ajax({
        type: "GET",
        url: `${homePath}api/OpenXDA/Asset`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: false,
        async: true
        })
}

export function getAsset(assetID: number, assetType: OpenXDA.AssetTypeName): Promise<OpenXDA.Asset> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/OpenXDA/${assetType}/One/${assetID}`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}

export async function getAssetWithAdditionalFields(assetID: number, assetType: OpenXDA.AssetTypeName): Promise<OpenXDA.Asset> {
    var asset = await getAsset(assetID, assetType);
    asset.AssetType = assetType;
    asset.Channels = [];

    if (assetType == 'Breaker') {
        const eDNAPoint = await getEDNAPoint(asset as OpenXDA.Breaker)
        if (eDNAPoint != null)
            asset['EDNAPoint'] = eDNAPoint.Point;
        else
            asset['EDNAPoint'] = null;

        const spareBreaker = await await getSpareBreaker(asset as OpenXDA.Breaker)
        if (spareBreaker != null)
            asset['SpareBreakerID'] = spareBreaker.ID;
        else
            asset['SpareBreakerID'] = null;
    }   
    else if (assetType == 'Line')
        asset['Detail'] = await getLineDetails(asset as OpenXDA.Line);

    return asset;
}

function getEDNAPoint(breaker: OpenXDA.Breaker): Promise<OpenXDA.EDNAPoint> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/OpenXDA/Breaker/${breaker.ID}/EDNAPoint`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    }).promise();
}

function getLineDetails(line: OpenXDA.Line): Promise<OpenXDA.LineDetail> {
    return $.ajax({
        type: "GET",
        url: `${homePath}api/OpenXDA/Line/${line.ID}/LineSegment`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    }).promise();
}


export function editExistingAsset(asset: OpenXDA.Asset): Promise<OpenXDA.Asset> {
   return $.ajax({
        type: "POST",
        url: `${homePath}api/OpenXDA/Asset/Edit`,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({ Asset: asset }),
        cache: false,
        async: true
    }).promise();

}

