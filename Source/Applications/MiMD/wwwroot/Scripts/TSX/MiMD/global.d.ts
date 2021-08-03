﻿//******************************************************************************************************
//  global.d.ts - Gbtc
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
//  10/04/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

// System Center Models
declare global {
    var homePath: string;

    interface String {
        countOccurrences: (chars: string) => number
    }

    namespace moment {
        function utc(timestamp: string): any;
    }
    function moment(inp?: any, format?: any, strict?: boolean): any;
    function moment(inp?: any, format?: any, language?: string, strict?: boolean): any;

}

export namespace MiMD {
    interface ByComponent { (props: { Roles: Array<SecurityRoleName>, MeterID: number, FileName: string }): JSX.Element; }

    interface AdditionalField { ID: number, ParentTable: string, FieldName: string, Type: string, ExternalDB: string, ExternalDBTable: string, ExternalDBTableKey: string, IsSecure: boolean }
    interface AdditionalFieldValue { ID: number, ParentTableID: number, AdditionalFieldID: number, Value: string }

    interface ValueListItem { ID: number, GroupID: number, Text: string, Value: number, Key: number, Hidden: boolean, IsDefault: boolean, SortOrder: number, AltText1: string, Enabled: boolean }
    interface UserAccount { ID: string, Name: string, Password: string, FirstName: string, LastName: string, DefaultNodeID?: string, Phone: string, PhoneConfirmed: boolean, Email: string, EmailConfirmed: boolean, LockedOut: boolean, Approved: boolean, UseADAuthentication: boolean, ChangePasswordOn: Date, CreatedOn?: Date, CreatedBy?: string, UpdatedOn?: Date, AccountName?: string, TSCID: number, RoleID: number, Title: string, Department: string, DepartmentNumber: string, MobilePhone: string, ReceiveNotifications: boolean}
    interface ApplicationRole<T> { ID: string, Name: T, Description: string, NodeID: string, CreatedOn: Date, CreatedBy: string, UpdatedOn: Date, UpdatedBy: string, Assigned?: boolean }
    interface ApplicationRoleUserAccount { ID: string, ApplicationRoleID: string, UserAccountID: string }
    interface SecurityGroup { ID: string, Name: string, Description: string, CreatedOn: Date, CreatedBy: string, UpdatedOn: Date }
    interface ApplicationRoleSecurityGroup { ID: string, ApplicationRoleID: string, SecurityGroupID: string }
    interface Role { ID: number, Name: string, Description: string }

    interface IConfigFile { ID: number, MeterID: number, FileName: string, LastWriteTime: string, Changes: number, Html: string, Text: string }
    interface IDiagnosticFile {
        MeterID: number, MaxChangeFileName: string, MaxChangeWriteTime: string, MaxChangeTable: string, MaxAlarmFileName: string,
        MaxAlarmWriteTime: string, Alarms: number, MaxAlarmTable: string
    }
    interface IDiagnosticFileChange { LastWriteTime: string, Alarms: number, Text: string, Html: string, FileName: string}


    interface Meter { ID: number, Station: string, Model: string, TSC: string, DateLastChanged: string, Make: string }
    interface DiagnosticMeter extends Meter { MaxChangeFileName: string, LastFaultTime: string, FaultCount48hr: number, AlarmLastChanged: string, Alarms: number, AlarmFileName: string}

    type NewEdit = 'New' | 'Edit'
    type SecurityRoleName = 'Administrator' | 'Transmission SME';
}

// OpenXDA Models
export namespace OpenXDA {
    interface Location { ID: number, LocationKey: string, Name: string, Alias: string, Latitude: number, Longitude: number, Description: string, ShortName: string }
    interface EDNAPoint { ID: number, BreakerID: number, Point: string }
    interface Meter { ID: number, AssetKey: string, Alias: string, Make: string, Model: string, Name: string, ShortName: string, TimeZone: string, LocationID: number, Description: string }
    interface Channel { ID: number, Meter: string, Asset: string, MeasurementType: string, MeasurementCharacteristic: string, Phase: string, Name: string, SamplesPerHour: number, PerUnitValue: number, HarmonicGroup: number, Description: string, Enabled: boolean, Series: OpenXDA.Series }
    interface Series { ID: number, ChannelID: number, SeriesType: string, SourceIndexes: string }

    // Assets
    interface Asset { ID: number, VoltageKV: number, AssetKey: string, Description: string, AssetName: string, AssetType: AssetTypeName, Spare:boolean, Channels: Array<OpenXDA.Channel> }
    interface Breaker extends Asset { ThermalRating: number, Speed: number, TripTime: number, PickupTime: number, TripCoilCondition: number, EDNAPoint?: string, SpareBreakerID?: number }
    interface Bus extends Asset { }
    interface CapBank extends Asset { NumberOfBanks: number, CansPerBank: number, CapacitancePerBank: number }
    interface Line extends Asset { MaxFaultDistance: number, MinFaultDistance: number, Detail: LineDetail }
    interface LineSegment extends Asset { R0: number, X0: number, R1: number, X1: number, ThermalRating: number, Length: number }
    interface Transformer extends Asset { R0: number, X0: number, R1: number, X1: number, ThermalRating: number, PrimaryVoltageKV: number, SecondaryVoltageKV: number, Tap: number }
    interface LineDetail { R0: number, X0: number, R1: number, X1: number, ThermalRating: number, Length: number }
    // Links
    interface AssetConnection { ID: number, AssetRelationshipTypeID: number, Parent: string, Child: string }

    interface Phase { ID: number, Name: string, Description: string }
    interface MeasurementType { ID: number, Name: string, Description: string }
    interface AssetType { ID: number, Name: AssetTypeName, Description: string }
    interface AssetConnectionType { ID: number, Name: string, Description: string, BiDirectional: boolean, JumpConnection: string, PassThrough: string }
    interface NoteType { ID: number, Name: string, ReferenceTableName: string }

    interface MeterConfiguration { ID: number, MeterID: number, DiffID: number, ConfigKey: string, ConfigText: string, RevisionMajor: number, RevisionMinor: number }
    interface DataFile { ID: number, FileGroupID: number, FilePath: string, FilePathHash: number, FileSize: number, CreationTime: string, LastWriteTime: string, LastAccessTime: string, }

    // Types
    type AssetTypeName = 'Line' | 'LineSegment' | 'Breaker' | 'Bus' | 'CapacitorBank' | 'Transformer'
}