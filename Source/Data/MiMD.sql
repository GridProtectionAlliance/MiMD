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
--
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

CREATE TABLE [dbo].[AdditionalUserField](
	[ID] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[FieldName] [varchar](100) NOT NULL,
	[Type] [varchar](max) NOT NULL DEFAULT ('string'),
	[IsSecure] [bit] NOT NULL DEFAULT (0),
) 
GO

CREATE TABLE [dbo].[AdditionalUserFieldValue](
	[ID] [int] IDENTITY(1,1) NOT NULL primary key,
	[UserAccountID] UNIQUEIDENTIFIER NOT NULL REFERENCES UserAccount(ID),
	[AdditionalUserFieldID] [int] NOT NULL FOREIGN KEY References AdditionalUserField(ID),
	[Value] [varchar](max) NULL,
)

GO
-- PRC-002 Compliance Models




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
