USE [MiMD]
GO

DELETE ValueList
GO

CREATE VIEW ValueList AS SELECT * FROM SystemCenter.dbo.ValueList
GO

DELETE ValueListGroup
GO

CREATE VIEW ValueListGroup AS SELECT * FROM SystemCenter.dbo.ValueListGroup
GO

DELETE Meter
GO

CREATE VIEW Meter AS SELECT * FROM OpenXDA.dbo.Meter
GO

DELETE Note
GO

CREATE VIEW Note AS
SELECT 
	ID,
	ReferenceTableID as MeterID,
	Note,
	UserAccount,
	Timestamp
FROM
	OpenXDA.dbo.Note
WHERE NoteTypeID = (SELECT ID FROM OpenXDA.dbo.NoteType WHERE Name = 'Meter')
GO

CREATE TRIGGER Tr_Insert_Note ON Note INSTEAD OF INSERT AS
BEGIN
	INSERT INTO OpenXDA.dbo.Note(NoteTypeID, ReferenceTableID, Note, UserAccount, Timestamp)
	SELECT
		(SELECT ID FROM OpenXDA.dbo.NoteType WHERE Name = 'Meter') as NoteTypeID,
		MeterID as ReferenceTableID,
		Note,
		UserAccount,
		TimeStamp
	FROM
		inserted
END
GO

CREATE TRIGGER Tr_Delete_Note ON Note INSTEAD OF DELETE AS
BEGIN
	DELETE FROM OpenXDA.dbo.Note WHERE ID IN (SELECT ID FROM deleted)
END
GO

DELETE AdditionalField
GO

CREATE VIEW AdditionalField AS 
SELECT 
	ID,
	OpenXDAParentTable as ParentTable,
	FieldName,
	Type,
	ExternalDB,
	ExternalDBTable,
	ExternalDBTableKey,
	IsSecure
FROM 
	SystemCenter.dbo.AdditionalField
GO

DELETE AdditionalFieldValue
GO

CREATE VIEW AdditionalFieldValue AS 
SELECT 
	ID,
	OpenXDAParentTableID as ParentTableID,
	AdditionalFieldID,
	Value,
	UpdatedOn
FROM 
	SystemCenter.dbo.AdditionalFieldValue
GO