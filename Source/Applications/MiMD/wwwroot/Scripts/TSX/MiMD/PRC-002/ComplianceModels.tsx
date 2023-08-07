//******************************************************************************************************
//  ComplianceModel.tsx - Gbtc
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
//  09/04/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
    export interface IStatus {
        ID: number,
        Color: string,
        Description: StatusName,
        TextColor: string,
        Priority: number
    }

    export interface IMeter {
        ID: number,
        MeterID: number,
        AssetKey: string,
        Model: string,
        Make: string,
        Status: StatusName,
        StatusID: number,
        Timer: number,
        Reviewed: boolean,
        Name: string
    }

    export type StatusName = 'In Compliance' | 'Compliance Issue' | 'Acknowledged' | 'Reviewed' | 'InActive' | 'RAP Submitted'

    export interface IBaseConfig {
        ID: number,
        MeterId: number,
        Name: string,
        Pattern: string
    }

    export interface IConfigField {
        ID: number,
        BaseConfigId: number,
        Name: string,
        Value: string,
        Label: string,
        Category: string,
        Comparison: FieldComparison,
        FieldType: FieldType,
        Description: string
    }

    export interface IConfigFieldStatus {
        FieldId: number,
        Value: string,
        FieldName: string,
        FieldLabel: string,
        FieldCategory: string,
        Valid: boolean
    }

    export type FieldType = 'string' | 'number' | 'null'
    export type FieldComparison = 'IN' | '=' | '<>' | '>' | '<'

    export interface IRecord {
        ID: number,
        MeterId: number,
        BaseConfigId: number,
        TimerOffset: number,
        Status: number,
        Timestamp: string,
        User: string,
        Timer: number,
        Created: string,
        LastActionID: number
    }

    export interface IAction {
        ID: number,
        RecordId: number,
        Timestamp: string,
        StateId: number,
        UserAccount: string,
        Note: string
    }

