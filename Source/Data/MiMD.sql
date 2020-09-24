-- The following commented statements are used to create a database
-- from scratch and create a new user with access to the database.
--
--  * To change the database name, replace all [openXDA] with the desired database name.
--  * To change the username, replace all NewUser with the desired username.
--  * To change the password, replace all MyPassword with the desired password.

--USE [master]
--GO
--CREATE DATABASE [MiMD]
--GO
--USE [MiMD]
--GO

--USE [MiMD]
--GO
--IF  NOT EXISTS (SELECT * FROM sys.server_principals WHERE name = N'NewUser')
--CREATE LOGIN [NewUser] WITH PASSWORD=N'MyPassword', DEFAULT_DATABASE=[master], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
--GO
--USE [MiMD]
--GO
--CREATE USER [NewUser] FOR LOGIN [NewUser]
--GO
--CREATE ROLE [MiMDRole] AUTHORIZATION [dbo]
--GO
--EXEC sp_addrolemember N'MiMDAdmin', N'NewUser'
--GO
--EXEC sp_addrolemember N'db_datareader', N'MiMDAdmin'
--GO
--EXEC sp_addrolemember N'db_datawriter', N'MiMDAdmin'
--GO

----- TABLES -----


CREATE TABLE Setting
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    Name VARCHAR(200) NULL,
    Value VARCHAR(MAX) NULL,
    DefaultValue VARCHAR(MAX) NULL
)
GO

CREATE TABLE AccessLog(
    ID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
    UserName varchar(200) NOT NULL,
    AccessGranted bit NOT NULL,
    CreatedOn datetime NOT NULL CONSTRAINT [DF_AccessLog_Timestamp]  DEFAULT (getutcdate())
)
GO

-- -------- --
-- Security --
-- -------- --

CREATE TABLE [dbo].[Node](
	[ID] [uniqueidentifier] NOT NULL PRIMARY KEY,
	[Name] [varchar](200) NOT NULL,
	[Description] [varchar](max) NULL,
	[Enabled] [bit] NOT NULL DEFAULT 1,
	[CreatedOn] [datetime] NOT NULL DEFAULT getdate(),
	[CreatedBy] [varchar](200) NOT NULL DEFAULT CURRENT_USER,
	[UpdatedOn] [datetime] NOT NULL DEFAULT getdate(),
	[UpdatedBy] [varchar](200) NOT NULL DEFAULT CURRENT_USER,
)
GO

INSERT INTO NODE (Name, ID, CreatedBy, UpdatedBy) VALUES ('Default', '00000000-0000-0000-0000-000000000000', 'Installer', 'Installer')
GO

CREATE TABLE ApplicationRole
(
    ID UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID() PRIMARY KEY,
    Name VARCHAR(200) NOT NULL,
    Description VARCHAR(MAX) NULL,
    NodeID UNIQUEIDENTIFIER NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
    CreatedOn DATETIME NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy VARCHAR(200) NOT NULL DEFAULT SUSER_NAME(),
    UpdatedOn DATETIME NOT NULL DEFAULT GETUTCDATE(),
    UpdatedBy VARCHAR(200) NOT NULL DEFAULT SUSER_NAME()
)
GO

CREATE TABLE SecurityGroup
(
    ID UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID() PRIMARY KEY,
    Name VARCHAR(200) NOT NULL,
    Description VARCHAR(MAX) NULL,
    CreatedOn DATETIME NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy VARCHAR(200) NOT NULL DEFAULT SUSER_NAME(),
    UpdatedOn DATETIME NOT NULL DEFAULT GETUTCDATE(),
    UpdatedBy VARCHAR(200) NOT NULL DEFAULT SUSER_NAME()
)
GO

CREATE TABLE UserAccount
(
    ID UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID() PRIMARY KEY,
    Name VARCHAR(200) NOT NULL UNIQUE,
    Password VARCHAR(200) NULL,
    FirstName VARCHAR(200) NULL,
    LastName VARCHAR(200) NULL,
    DefaultNodeID UNIQUEIDENTIFIER NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000',
    Phone VARCHAR(200) NULL,
    PhoneConfirmed BIT NOT NULL DEFAULT 0,
    Email VARCHAR(200) NULL,
    EmailConfirmed BIT NOT NULL DEFAULT 0,
    LockedOut BIT NOT NULL DEFAULT 0,
    Approved BIT NOT NULL DEFAULT 0,
    TSCID INT NULL,
    RoleID INT NULL,
    Title varchar(200) NULL,
    Department varchar(200) NULL,
    DepartmentNumber varchar(200) NULL,
    MobilePhone VARCHAR(200) NULL,
    ReceiveNotifications BIT NOT NULL DEFAULT 1,
    UseADAuthentication BIT NOT NULL DEFAULT 1,
    ChangePasswordOn DATETIME NULL DEFAULT DATEADD(DAY, 90, GETUTCDATE()),
    CreatedOn DATETIME NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy VARCHAR(50) NOT NULL DEFAULT SUSER_NAME(),
    UpdatedOn DATETIME NOT NULL DEFAULT GETUTCDATE(),
    UpdatedBy VARCHAR(50) NOT NULL DEFAULT SUSER_NAME()
)
GO

CREATE TABLE ApplicationRoleSecurityGroup
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    ApplicationRoleID UNIQUEIDENTIFIER NOT NULL REFERENCES ApplicationRole(ID),
    SecurityGroupID UNIQUEIDENTIFIER NOT NULL REFERENCES SecurityGroup(ID)
)
GO

CREATE TABLE ApplicationRoleUserAccount
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    ApplicationRoleID UNIQUEIDENTIFIER NOT NULL REFERENCES ApplicationRole(ID),
    UserAccountID UNIQUEIDENTIFIER NOT NULL REFERENCES UserAccount(ID)
)
GO

CREATE TABLE SecurityGroupUserAccount
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    SecurityGroupID UNIQUEIDENTIFIER NOT NULL REFERENCES SecurityGroup(ID),
    UserAccountID UNIQUEIDENTIFIER NOT NULL REFERENCES UserAccount(ID)
)
GO

CREATE TABLE [dbo].[ValueListGroup](
	[ID] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Name] [varchar](200) NULL,
	[Description] [varchar](max) NULL,
	[Enabled] [bit] NOT NULL,
	[CreatedOn] [datetime] NULL DEFAULT GETDATE(),
)
GO


CREATE TABLE [dbo].[ValueList](
	[ID] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[GroupID] [int] NOT NULL FOREIGN KEY REFERENCES ValueListGroup(ID),
	[Key] [int] NOT NULL,
	[Text] [varchar](200) NULL,
	[AltText1] [varchar](200) NULL,
	[AltText2] [varchar](200) NULL,
	[Abbreviation] [varchar](12) NULL,
	[Value] [int] NULL,
	[Flag] [bit] NOT NULL,
	[Description] [varchar](max) NULL,
	[SortOrder] [int] NULL,
	[IsDefault] [bit] NOT NULL,
	[Hidden] [bit] NOT NULL,
	[Enabled] [bit] NOT NULL,
	[CreatedOn] [datetime] NOT NULL DEFAULT GETDATE(),
)
GO


INSERT INTO ApplicationRole(Name, Description) VALUES('Administrator', 'Admin Role')
GO
INSERT INTO ApplicationRole(Name, Description) VALUES('Transmission SME', 'Transmission SME')
GO
INSERT INTO ApplicationRole(Name, Description) VALUES('PQ Data Viewer', 'PQ Data Viewer')
GO


INSERT INTO SecurityGroup(Name, Description) VALUES('BUILTIN\Users', 'All Windows authenticated users')
GO

INSERT INTO ApplicationRoleSecurityGroup(ApplicationRoleID, SecurityGroupID) VALUES((SELECT ID FROM ApplicationRole WHERE Name = 'Administrator'), (SELECT ID FROM SecurityGroup))
GO
INSERT INTO ApplicationRoleSecurityGroup(ApplicationRoleID, SecurityGroupID) VALUES((SELECT ID FROM ApplicationRole WHERE Name = 'Transmission SME'), (SELECT ID FROM SecurityGroup))
GO
INSERT INTO ApplicationRoleSecurityGroup(ApplicationRoleID, SecurityGroupID) VALUES((SELECT ID FROM ApplicationRole WHERE Name = 'PQ Data Viewer'), (SELECT ID FROM SecurityGroup))
GO

CREATE TABLE Meter
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    AssetKey VARCHAR(50) NOT NULL UNIQUE,
    Name VARCHAR(200) NOT NULL,
    Make VARCHAR(200) NOT NULL,
    Model VARCHAR(200) NOT NULL,
)
GO

CREATE TABLE Note (
	ID int not null IDENTITY(1,1) PRIMARY KEY,
	MeterID INT NOT NULL  FOREIGN KEY REFERENCES Meter(ID),
    Note VARCHAR(MAX) NOT NULL,
    UserAccount VARCHAR(MAX) NOT NULL DEFAULT SUSER_NAME(),
    Timestamp DATETIME NOT NULL DEFAULT GETUTCDATE(),
)
GO


-- PRC-002 Compliance Models

CREATE TABLE ComplianceMeter (
	ID int not null IDENTITY(1,1) PRIMARY KEY,
	MeterID INT NOT NULL,
    Active BIT NOT NULL DEFAULT 1,
)
GO

CREATE TABLE BaseConfig (
	ID int not null IDENTITY(1,1) PRIMARY KEY,
	MeterId INT NOT NULL  FOREIGN KEY REFERENCES ComplianceMeter(ID),
    NAME VARCHAR(200) NOT NULL,
    Pattern VARCHAR(200) NOT NULL
)
GO

CREATE TABLE ComplianceState (
	ID int not null IDENTITY(1,1) PRIMARY KEY,
    Description VARCHAR(MAX) NOT NULL,
	Color VARCHAR(10) NOT NULL,
	TextColor VARCHAR(10) NOT NULL,
	Priority INT NOT NULL
)
GO


CREATE TABLE ComplianceField (
	ID int not null IDENTITY(1,1) PRIMARY KEY,
	BaseConfigId INT  NOT NULL FOREIGN KEY REFERENCES BaseConfig(ID),
    Name VARCHAR(MAX) NOT NULL,
	Value VARCHAR(MAX) NOT NULL,
	Comparison VARCHAR(2) NOT NULL,
	FieldType VARCHAR(10) NOT NULL DEFAULT('string')
)
GO

CREATE TABLE ComplianceRecord (
	ID int not null IDENTITY(1,1) PRIMARY KEY,
	MeterId INT NOT NULL  FOREIGN KEY REFERENCES ComplianceMeter(ID),
	BaseConfigId INT FOREIGN KEY REFERENCES BaseConfig(ID),
	TimerOffset INT NOT NULL DEFAULT(0)
)
GO

CREATE TABLE ComplianceRecordFields (
	ID int not null IDENTITY(1,1) PRIMARY KEY,
	RecordId INT NOT NULL  FOREIGN KEY REFERENCES ComplianceRecord(ID),
	FieldId INT NOT NULL  FOREIGN KEY REFERENCES ComplianceField(ID),
)
GO

CREATE TABLE ComplianceAction (
	ID int not null IDENTITY(1,1) PRIMARY KEY,
	RecordId INT NOT NULL  FOREIGN KEY REFERENCES ComplianceRecord(ID),
	Note VARCHAR(MAX) NOT NULL,
    UserAccount VARCHAR(MAX) NULL DEFAULT 'MiMD',
    Timestamp DATETIME NOT NULL DEFAULT GETUTCDATE(),
	StateId INT FOREIGN KEY REFERENCES ComplianceState(ID)
)
GO

CREATE TABLE ComplianceFieldValue (
	ID int not null IDENTITY(1,1) PRIMARY KEY,
	ActionId INT NOT NULL  FOREIGN KEY REFERENCES ComplianceAction(ID),
	FieldId INT NOT NULL  FOREIGN KEY REFERENCES ComplianceField(ID),
	Value VARCHAR(MAX) NOT NULL,
)
GO

CREATE VIEW ComplianceRecordView AS
SELECT 
	ComplianceRecord.ID,
	ComplianceRecord.MeterID AS MeterId,
	ComplianceRecord.BaseConfigId AS BaseConfigId,
	ComplianceRecord.TimerOffset AS TimerOffset,
	(SELECT UserAccount FROM ComplianceAction WHERE TimeStamp = (SELECT MAX(TimeStamp) FROM ComplianceAction  WHERE ComplianceAction.RecordId = ComplianceRecord.ID)) AS [User],
	(SELECT MAX(TimeStamp) FROM ComplianceAction  WHERE ComplianceAction.RecordId = ComplianceRecord.ID) AS [Timestamp],
	(SELECT StateId FROM ComplianceAction WHERE TimeStamp = (SELECT MAX(TimeStamp) FROM ComplianceAction  WHERE ComplianceAction.RecordId = ComplianceRecord.ID AND ComplianceAction.StateId IS NOT NULL)) AS [Status],
	(SELECT MIN(TimeStamp) FROM ComplianceAction  WHERE ComplianceAction.RecordId = ComplianceRecord.ID) AS Created,
	(CASE
	WHEN (SELECT StateId FROM ComplianceAction WHERE TimeStamp = (SELECT MAX(TimeStamp) FROM ComplianceAction  WHERE ComplianceAction.RecordId = ComplianceRecord.ID)) = (SELECT ID FROM ComplianceState WHERE Description = 'In Compliance') 
	THEN
		(DATEDIFF(DAY,(SELECT MIN(TimeStamp) FROM ComplianceAction  WHERE ComplianceAction.RecordId = ComplianceRecord.ID),
		(SELECT MAX(TimeStamp) FROM ComplianceAction  WHERE ComplianceAction.RecordId = ComplianceRecord.ID)))
	ELSE DATEDIFF(DAY,(SELECT MIN(TimeStamp) FROM ComplianceAction  WHERE ComplianceAction.RecordId = ComplianceRecord.ID), GETUTCDATE())
	END  + ComplianceRecord.TimerOffset
	) AS Timer,
	(SELECT ID FROM ComplianceAction WHERE TimeStamp = (SELECT MAX(TimeStamp) FROM ComplianceAction  WHERE ComplianceAction.RecordId = ComplianceRecord.ID)) AS LastActionID
FROM
	ComplianceRecord
GO

CREATE VIEW ComplianceFieldValueView AS
SELECT
	ComplianceFieldValue.FieldID AS FieldID,
	(SELECT TOP 1 CFV.Value FROM ComplianceFieldValue CFV LEFT JOIN ComplianceAction CA ON CA.ID = CFV.ActionID WHERE CFV.FieldId = MAX(ComplianceFieldValue.FieldID) ORDER BY CA.Timestamp DESC )AS Value,
	ComplianceAction.RecordId AS RecordID,
	MAX(ComplianceField.Name) AS FieldName
	FROM ComplianceFieldValue Left JOIN 
		ComplianceAction ON ComplianceFieldValue.ActionId = ComplianceAction.ID LEFT JOIN 
		ComplianceField ON ComplianceField.ID = ComplianceFieldValue.FieldId LEFT JOIN 
		ComplianceRecordView ON ComplianceRecordView.ID = ComplianceAction.RecordId
	WHERE 
	ComplianceRecordView.Status NOT IN (SELECT ID FROM ComplianceState WHERE Description = 'In Compliance')
	GROUP BY ComplianceFieldValue.FieldId, ComplianceAction.RecordId
GO

CREATE VIEW ComplianceMeterView AS
SELECT
	ComplianceMeter.ID AS ID,
	ComplianceMeter.MeterID AS MeterID,
	ComplianceMeter.Active AS Active,
	Meter.AssetKey AS AssetKey,
	Meter.Make AS Make,
	Meter.Model AS Model,
	ISNULL((SELECT CS.ID FROM ComplianceState CS WHERE CS.Priority = (SELECT MAX(CS1.Priority) FROM ComplianceRecordView CR LEFT JOIN ComplianceState CS1 ON CS1.ID = CR.Status AND CR.MeterId = ComplianceMeter.ID)),(SELECT ID FROM ComplianceState WHERE Description = 'In Compliance')) AS StatusID,
	ISNULL((SELECT CS.Description FROM ComplianceState CS WHERE CS.Priority = (SELECT MAX(CS1.Priority) FROM ComplianceRecordView CR LEFT JOIN ComplianceState CS1 ON CS1.ID = CR.Status AND CR.MeterId = ComplianceMeter.ID)),'In Compliance') AS Status,
	(SELECT MAX(ComplianceRecordView.Timer) FROM ComplianceRecordView WHERE Status NOT IN (SELECT ID FROM ComplianceState WHERE Description = 'In Compliance') AND ComplianceRecordView.MeterId = ComplianceMeter.ID) AS Timer
	FROM ComplianceMeter LEFT JOIN 
	Meter ON Meter.ID = ComplianceMeter.MeterID
GO




CREATE TABLE DataReader
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    FilePattern VARCHAR(500) NOT NULL,
    AssemblyName VARCHAR(200) NOT NULL,
    TypeName VARCHAR(200) NOT NULL,
    LoadOrder INT NOT NULL
)
GO

INSERT INTO DataReader(FilePattern, AssemblyName, TypeName, LoadOrder) VALUES('**\Config\*', 'MiMD.exe', 'MiMD.FileParsing.DataReaders.ConfigFileReader', 1)
GO
INSERT INTO DataReader(FilePattern, AssemblyName, TypeName, LoadOrder) VALUES('**\Diagnostic\EVENTHIS.txt', 'MiMD.exe', 'MiMD.FileParsing.DataReaders.EMAXEventHisFileReader', 2)
GO
INSERT INTO DataReader(FilePattern, AssemblyName, TypeName, LoadOrder) VALUES('**\Diagnostic\Trace*.wri', 'MiMD.exe', 'MiMD.FileParsing.DataReaders.AppTraceFileReader', 3)
GO
INSERT INTO DataReader(FilePattern, AssemblyName, TypeName, LoadOrder) VALUES('**\Diagnostic\Status*.txt', 'MiMD.exe', 'MiMD.FileParsing.DataReaders.AppStatusFileReader', 4)
GO
INSERT INTO DataReader(FilePattern, AssemblyName, TypeName, LoadOrder) VALUES('**\Event\*.cfg', 'MiMD.exe', 'MiMD.FileParsing.DataReaders.BENConfigFileReader', 5)
GO

CREATE TABLE DataOperation
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    AssemblyName VARCHAR(200) NOT NULL,
    TypeName VARCHAR(200) NOT NULL,
    LoadOrder INT NOT NULL
)
GO


INSERT INTO DataOperation(AssemblyName, TypeName, LoadOrder) VALUES('MiMD.exe', 'MiMD.FileParsing.DataOperations.ConfigOperation', 1)
GO
INSERT INTO DataOperation(AssemblyName, TypeName, LoadOrder) VALUES('MiMD.exe', 'MiMD.FileParsing.DataOperations.EmaxEventHisOperation', 2)
GO
INSERT INTO DataOperation(AssemblyName, TypeName, LoadOrder) VALUES('MiMD.exe', 'MiMD.FileParsing.DataOperations.AppTraceOperation', 3)
GO
INSERT INTO DataOperation(AssemblyName, TypeName, LoadOrder) VALUES('MiMD.exe', 'MiMD.FileParsing.DataOperations.AppStatusOperation', 4)
GO
INSERT INTO DataOperation(AssemblyName, TypeName, LoadOrder) VALUES('MiMD.exe', 'MiMD.FileParsing.DataOperations.BENConfigOperation', 5)
GO
INSERT INTO DataOperation(AssemblyName, TypeName, LoadOrder) VALUES('MiMD.exe', 'MiMD.FileParsing.DataOperations.PRC002APPOperation', 6)
GO


CREATE TABLE ConfigFileChanges(
	ID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	MeterID INT NOT NULL,
	[FileName] VARCHAR(500) NOT NULL,
	LastWriteTime DATETIME NOT NULL,
	Changes INT NOT NULL,
	Html VARCHAR(MAX) NOT NULL,
    Text VARCHAR(MAX) NOT NULL,
	Constraint UC_ConfigFileChanges UNIQUE(MeterID, [FileName], LastWriteTime)
)
GO

CREATE TABLE EmaxDiagnosticFileChanges(
	ID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	MeterID INT NOT NULL,
	[FileName] VARCHAR(500) NOT NULL,
	LastWriteTime DATETIME NOT NULL,
	FileSize INT NOT NULL,
	Span INT NOT NULL,
	NewRecords INT NOT NULL,
	Alarms INT NOT NULL,
	Html VARCHAR(MAX) NOT NULL,
	Constraint UC_EmaxDiagnosticFileChanges UNIQUE(MeterID, [FileName], LastWriteTime)
)
GO

CREATE TABLE AppTraceFileChanges(
	ID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	MeterID INT NOT NULL,
	[FileName] VARCHAR(500) NOT NULL,
	LastWriteTime DATETIME NOT NULL,
    LastFaultTime DATETIME NULL,
    FaultCount48hr INT NOT NULL,
	FileSize INT NOT NULL,
	Span INT NOT NULL,
	NewRecords INT NOT NULL,
	Alarms INT NOT NULL,
	Html VARCHAR(MAX) NOT NULL,
	Constraint UC_AppTraceFileChanges UNIQUE(MeterID, [FileName], LastWriteTime)
)
GO

CREATE TABLE AppStatusFileChanges(
	ID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	MeterID INT NOT NULL,
	[FileName] VARCHAR(500) NOT NULL,
	LastWriteTime DATETIME NOT NULL,
	FileSize INT NOT NULL,
	Version VARCHAR(10) NOT NULL,
	DFR VARCHAR(10) NOT NULL,
	PCTime DateTime2 NOT NULL,
	TimeMarkSource VARCHAR(20) NOT NULL,
	TimeMarkTime DateTime2 NOT NULL,
	DataDriveUsage FLOAT NOT NULL,
	DSPBoard VARCHAR(300) NULL,
	DSPRevision VARCHAR(300) NULL,
	Packet VARCHAR(300) NULL,
	Recovery VARCHAR(300) NULL,
	BoardTemp VARCHAR(300) NULL,
	SpeedFan VARCHAR(300) NULL,
	Text VARCHAR(MAX) NOT NULL,
	Html VARCHAR(MAX) NOT NULL,
	Alarms INT NOT NULL,
	Constraint UC_AppStatusFileChanges UNIQUE(MeterID, [FileName], LastWriteTime)
)
GO



CREATE TABLE AdditionalField(
	ID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	ParentTable varchar(100) NOT NULL,
	FieldName varchar(100) NOT NULL,
	Type varchar(max) NULL DEFAULT ('string'),
	ExternalDB varchar(max) NULL,
	ExternalDBTable varchar(max) NULL,
	ExternalDBTableKey varchar(max) NULL,
	IsSecure bit NULL DEFAULT(0)
	Constraint UC_AdditonaField UNIQUE(ParentTable, FieldName)
)
GO

CREATE TABLE AdditionalFieldValue(
	ID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	ParentTableID int NOT NULL,
	AdditionalFieldID int NOT NULL FOREIGN KEY REFERENCES AdditionalField(ID),
	Value varchar(max) NULL,
    UpdatedOn DATE NULL DEFAULT (SYSDATETIME()),
	Constraint UC_AdditonaFieldValue UNIQUE(ParentTableID, AdditionalFieldID)
)
GO


CREATE TABLE Role (
	ID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	Name varchar(200) NOT NULL,
	Description varchar(max) NULL,
)
GO

CREATE VIEW ComplianceRecordView AS
    SELECT 
        ComplianceRecord.*,
        ISNULL((SELECT TOP 1 ComplianceAlarmID FROM ComplianceRecordChange WHERE ComplianceRecord.ID = ComplianceRecordChange.ComplianceRecordID),(SELECT ID FROM ComplianceAlarm WHERE [Description] = 'MisConfigured')) AS ComplianceAlarmID
    FROM ComplianceRecord
GO

-- Author: Kevin Conner
-- Source: http://stackoverflow.com/questions/116968/in-sql-server-2005-can-i-do-a-cascade-delete-without-setting-the-property-on-my
CREATE procedure usp_delete_cascade (
    @base_table_name varchar(200), @base_criteria nvarchar(1000)
)
as begin
    -- Adapted from http://www.sqlteam.com/article/performing-a-cascade-delete-in-sql-server-7
    -- Expects the name of a table, and a conditional for selecting rows
    -- within that table that you want deleted.
    -- Produces SQL that, when run, deletes all table rows referencing the ones
    -- you initially selected, cascading into any number of tables,
    -- without the need for "ON DELETE CASCADE".
    -- Does not appear to work with self-referencing tables, but it will
    -- delete everything beneath them.
    -- To make it easy on the server, put a "GO" statement between each line.

    declare @to_delete table (
        id int identity(1, 1) primary key not null,
        criteria nvarchar(1000) not null,
        table_name varchar(200) not null,
        processed bit not null,
        delete_sql varchar(1000)
    )

    insert into @to_delete (criteria, table_name, processed) values (@base_criteria, @base_table_name, 0)

    declare @id int, @criteria nvarchar(1000), @table_name varchar(200)
    while exists(select 1 from @to_delete where processed = 0) begin
        select top 1 @id = id, @criteria = criteria, @table_name = table_name from @to_delete where processed = 0 order by id desc

        insert into @to_delete (criteria, table_name, processed)
            select referencing_column.name + ' in (select [' + referenced_column.name + '] from [' + @table_name +'] where ' + @criteria + ')',
                referencing_table.name,
                0
            from  sys.foreign_key_columns fk
                inner join sys.columns referencing_column on fk.parent_object_id = referencing_column.object_id
                    and fk.parent_column_id = referencing_column.column_id
                inner join  sys.columns referenced_column on fk.referenced_object_id = referenced_column.object_id
                    and fk.referenced_column_id = referenced_column.column_id
                inner join  sys.objects referencing_table on fk.parent_object_id = referencing_table.object_id
                inner join  sys.objects referenced_table on fk.referenced_object_id = referenced_table.object_id
                inner join  sys.objects constraint_object on fk.constraint_object_id = constraint_object.object_id
            where referenced_table.name = @table_name
                and referencing_table.name != referenced_table.name

        update @to_delete set
            processed = 1
        where id = @id
    end

    select 'print ''deleting from ' + table_name + '...''; delete from [' + table_name + '] where ' + criteria from @to_delete order by id desc
end
GO

-- =============================================
-- Author:      <Author, William Ernest/ Stephen Wills>
-- Create date: <Create Date,12/1/2016>
-- Description: <Description, Calls usp_delete_cascade to perform cascading deletes for a table>
-- =============================================
CREATE PROCEDURE UniversalCascadeDelete
    @tableName VARCHAR(200),
    @baseCriteria NVARCHAR(1000)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @deleteSQL NVARCHAR(900)

    CREATE TABLE #DeleteCascade
    (
        DeleteSQL NVARCHAR(900)
    )

    INSERT INTO #DeleteCascade
    EXEC usp_delete_cascade @tableName, @baseCriteria

    DECLARE DeleteCursor CURSOR FOR
    SELECT *
    FROM #DeleteCascade

    OPEN DeleteCursor

    FETCH NEXT FROM DeleteCursor
    INTO @deleteSQL

    WHILE @@FETCH_STATUS = 0
    BEGIN
        EXEC sp_executesql @deleteSQL

        FETCH NEXT FROM DeleteCursor
        INTO @deleteSQL
    END

    CLOSE DeleteCursor
    DEALLOCATE DeleteCursor

    DROP TABLE #DeleteCascade
END
GO

CREATE PROCEDURE InsertIntoAuditLog(@tableName VARCHAR(128), @primaryKeyColumn VARCHAR(128), @deleted BIT = '0', @inserted BIT = '0') AS
BEGIN
    DECLARE @columnName varchar(100)
    DECLARE @cursorColumnNames CURSOR

    SET @cursorColumnNames = CURSOR FOR
    SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = @tableName AND TABLE_CATALOG = db_name()

    OPEN @cursorColumnNames

    FETCH NEXT FROM @cursorColumnNames INTO @columnName
    WHILE @@FETCH_STATUS = 0
    BEGIN

        DECLARE @sql VARCHAR(MAX)

        IF @deleted = '0' AND @inserted = '0'
        BEGIN
            SET @sql = 'DECLARE @oldVal NVARCHAR(MAX) ' +
                    'DECLARE @newVal NVARCHAR(MAX) ' +
                    'SELECT @oldVal = CONVERT(NVARCHAR(MAX), #deleted.' + @columnName + '), @newVal = CONVERT(NVARCHAR(MAX), #inserted.' + @columnName + ') FROM #deleted, #inserted ' +
                    'IF @oldVal <> @newVal BEGIN ' +
                    'INSERT INTO AuditLog (TableName, PrimaryKeyColumn, PrimaryKeyValue, ColumnName, OriginalValue, NewValue, Deleted, UpdatedBy) ' +
                    'SELECT ''' + @tableName + ''', ''' + @primaryKeyColumn + ''', CONVERT(NVARCHAR(MAX), #inserted.' + @primaryKeyColumn + '), ''' + @columnName + ''', ' +
                    'CONVERT(NVARCHAR(MAX), #deleted.' + @columnName + '), CONVERT(NVARCHAR(MAX), #inserted.' + @columnName + '), ''0'', #inserted.UpdatedBy ' +
                    'FROM #inserted JOIN #deleted ON #inserted.' + @primaryKeyColumn + ' = #deleted.' + @primaryKeyColumn + ' ' +
                    'END'

            EXECUTE (@sql)
        END

        FETCH NEXT FROM @cursorColumnNames INTO @columnName
    END

    CLOSE @cursorColumnNames
    DEALLOCATE @cursorColumnNames
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('Email.AdminAddress', 'MiMD-admin@gridprotectionalliance.org', 'MiMD-admin@gridprotectionalliance.org')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('Email.BlindCopyAddress', '', '')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('Email.EnableSSL', 'False', 'False')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('Email.FromAddress', 'MiMD@gridprotectionalliance.org', 'MiMD@gridprotectionalliance.org')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('Email.Password', '', '')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('Email.SMTPServer', '', '')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('Email.Username', '', '')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('MiMD.Url', 'http://localhost:8986', '')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('FilePattern', '(?<AssetKey>[^\\]+)\\[^\\]+$', '(?<AssetKey>[^\\]+)\\[^\\]+$')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('FileProcessorID', '4E3D3A90-6E7E-4AB7-96F3-3A5899081D0D', '4E3D3A90-6E7E-4AB7-96F3-3A5899081D0D')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('FileWatcherBufferSize', '65536', '65536')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('FileWatcherEnabled', 'True', 'True')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('FileWatcherEnumerationStrategy', 'ParallelSubdirectories', 'ParallelSubdirectories')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('FileWatcherOrderedEnumeration', 'False', 'False')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('FileWatcherInternalThreadCount', '0', '0')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('FileWatcherMaxFragmentation', '10', '10')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('FolderExclusion', '', '')
GO

INSERT INTO Setting(Name, Value, DefaultValue) VALUES('WatchDirectories', 'Watch', 'Watch')
GO
