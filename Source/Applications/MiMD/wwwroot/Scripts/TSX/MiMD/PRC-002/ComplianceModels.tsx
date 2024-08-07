﻿export interface IStatus {
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

export type StatusName = 'In Compliance' | 'Compliance Issue' | 'Acknowledged' | 'Reviewed' | 'InActive' | 'RAP Submitted';

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
    Valid: boolean,
    PreVal: string
}

export type FieldType = 'string' | 'number' | 'null';
export type FieldComparison = 'IN' | '=' | '<>' | '>' | '<';

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
