USE [MiMD]
GO

DROP TABLE ValueList
GO

CREATE VIEW ValueList AS SELECT * FROM SystemCenter.dbo.ValueList
GO

DROP TABLE ValueListGroup
GO

CREATE VIEW ValueListGroup AS SELECT * FROM SystemCenter.dbo.ValueListGroup
GO

DROP TABLE Note
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

DROP TABLE Meter
GO

CREATE VIEW Meter AS SELECT * FROM OpenXDA.dbo.Meter
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


DROP TABLE AdditionalFieldValue
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

DROP TABLE AdditionalField
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

INSERT INTO ComplianceState (Description, Color, TextColor, Priority) VALUES
('In Compliance','#28A745','#ffffff',0),
('Out Of Compliance','#DC3545','#ffffff',6),
('Acknowledged','#FFC107','#212529',5),
('Reviewed','#2A2484','#212529',4),
('Inactive','#f8f9fa','#212529',7),
('RAP Submitted','#17A2B8','#ffffff',3)
GO