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

CREATE VIEW Meter AS SELECT Meter.*, ValueList.Text as TSC FROM
	OpenXDA.dbo.Meter LEFT JOIN
	AdditionalFieldValue on Meter.ID = AdditionalFieldValue.ParentTableID AND AdditionalFieldValue.AdditionalFieldID = (SELECT ID FROM AdditionalField WHERE FieldName = 'TSC' AND ParentTable = 'Meter') LEFT JOIN
	ValueList ON ValueList.Value = AdditionalFieldValue.Value AND ValueList.GroupID = (SELECT ID FROM ValueListGroup WHERE Name = 'TSC')
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
('Compliance Issue','#DC3545','#ffffff',6),
('Acknowledged','#FFC107','#212529',5),
('Reviewed','#2A2484','#ffffff',4),
('Inactive','#f8f9fa','#212529',7),
('RAP Submitted','#17A2B8','#ffffff',3)
GO

INSERT INTO SummaryEmail (Template, dataSQL,Subject) VALUES
('<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="xml" />
<xsl:template match="/">

<html>
    <style>
        th, td{
            padding: 10px;
        }
    </style>
    <body>
		<xsl:if test="Email/ConfigChangeCount &lt; 1">
			<h2>Attention!!</h2>
			<p>There have been no Configuration files changes in the last 24 hrs.</p>
			<hr/>
		</xsl:if>
		<xsl:if test="Email/ConfigChangeCount &gt; 0">
			<h2>Attention!!</h2>
			<p>The following Configuration files have changed in the last 24 hrs.</p>
			<hr/>
			<xsl:for-each select="Email/Meters/Meter">
				<br />
				<h4><xsl:value-of select="Station"/></h4>
				<br/>
				 <table>
					<tr><th>File</th><th>Time</th><th># of Changes</th><th>URL</th></tr>
                    <xsl:for-each select="Files/File">
						<tr><td><xsl:value-of select="FileName"/></td><td><xsl:value-of select="LastWriteTime"/></td><td><xsl:value-of select="Changes"/></td><td><a href="{URL}">Link</a></td></tr>
					</xsl:for-each>
                </table>
				
			</xsl:for-each>
		</xsl:if>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>',
'SELECT (SELECT 
		(SELECT
			MAX(Meter.AssetKey) as Station,
	        (SELECT CF.FileName,
	        CF.LastWriteTime,
	        CF.Changes,
	                    
	        (SELECT Value FROM Setting WHERE Name = ''MiMD.URL'') + ''/index.cshtml?name=Configuration&MeterID='' + CAST(Meter.ID as varchar(10)) + ''&FileName='' + CF.FileName as URL
			FROM ConfigFileChanges CF WHERE CF.MeterID = meter.ID AND
				CF.LastWriteTime BETWEEN DATEADD(HOUR, -24, GETDATE()) AND GETDATE() AND CF.Changes > 0
			ORDER BY
				CF.LastWriteTime DESC FOR XML PATH(''File'')
			) AS Files
        FROM
	        ConfigFileChanges JOIN
	        Meter ON ConfigFileChanges.MeterID = Meter.ID
        WHERE 
	        LastWriteTime BETWEEN DATEADD(HOUR, -24, GETDATE()) AND GETDATE() AND ConfigFileChanges.Changes > 0
		GROUP BY Meter.ID
			FOR XML PATH(''Meter'')) AS Meters,
		(SELECT COUNT(ID) FROM ConfigFileChanges WHERE 
	        LastWriteTime BETWEEN DATEADD(HOUR, -24, GETDATE()) AND GETDATE() AND ConfigFileChanges.Changes > 0
			) as ConfigChangeCount
		FOR XML Path(''Email''))',
					
	'Configuration File Changes')
GO

INSERT INTO SummaryEmail (Template, dataSQL,Subject) VALUES
('<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="xml" />
<xsl:template match="/">

<html>
    <style>
        th, td{
            padding: 10px;
        }
    </style>
    <body>
		<xsl:if test="Email/Count &lt; 1">
			<h2>Attention!!</h2>
			<p>There have been no Diagnostic file alarms in the last 24 hrs.</p>
			<hr/>
		</xsl:if>
		<xsl:if test="Email/Count &gt; 0">
			<h2>Attention!!</h2>
			<p>The following Diagnostic files have alarmed in the last 24 hrs.</p>
			<hr/>
			<table>
                <tr><th>Device</th><th>Make</th><th>File</th><th>Last Alarm</th><th># of Alarms</th><th>URL</th></tr>
				<xsl:for-each select="Email/Files/File">
					<tr><td><xsl:value-of select="Station"/></td><td><xsl:value-of select="Make"/></td><td><xsl:value-of select="FileName"/></td><td><xsl:value-of select="LastWriteTime"/></td><td><xsl:value-of select="Alarms"/></td><td><a href="{URL}">Link</a></td></tr>				
				</xsl:for-each>
			 </table>
		</xsl:if>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>',
'  

                   WITH AllFileChanges as (
	                        SELECT MeterID, FileName, LastWriteTime, Alarms FROM AppStatusFileChanges WHERE LastWriteTime BETWEEN DATEADD(HOUR, -24, GETDATE()) AND GETDATE() AND Alarms > 0 UNION
	                        SELECT MeterID, FileName, LastWriteTime, Alarms FROM AppTraceFileChanges WHERE LastWriteTime BETWEEN DATEADD(HOUR, -24, GETDATE()) AND GETDATE() AND Alarms > 0 UNION
	                        SELECT MeterID, FileName, LastWriteTime, Alarms FROM EmaxDiagnosticFileChanges WHERE LastWriteTime BETWEEN DATEADD(HOUR, -24, GETDATE()) AND GETDATE() AND Alarms > 0 
                        ),
						LastFileChange as (
	                        SELECT 
		                        MeterID, FileName,LastWriteTime, (SELECT Value FROM Setting WHERE Name = ''MiMD.URL'') + ''/index.cshtml?name=Diagnostic&MeterID='' + CAST(MeterID as varchar(10)) + ''&FileName='' + FileName as URL,
		                        row_number() over (partition by MeterID,FileName order by LastWriteTime desc,Alarms desc) as RowNum
	                        FROM AllFileChanges
                        )
                        SELECT (SELECT
						(SELECT
	                        Meter.AssetKey as Station,
	                        Meter.Make as Make,
	                        afc.FileName, 
	                        SUM(afc.Alarms) as Alarms, 
	                        lfc.LastWriteTime,
	                        lfc.URL
                        FROM 
	                        Meter JOIN
	                        AllFileChanges afc ON afc.MeterID = Meter.ID JOIN 
	                        LastFileChange lfc ON Meter.ID = lfc.MeterID AND RowNum = 1 AND afc.FileNAme = lfc.FileNAme
                        GROUP BY 
	                        Meter.AssetKey, Meter.Make, afc.FileName, lfc.LAstWriteTime, lfc.URL
                        ORDER BY
                            Station FOR XML Path(''File'')) AS Files,
							(SELECT COUNT(AssetKey) FROM (SELECT Meter.AssetKey
							 FROM 
								Meter JOIN
								AllFileChanges afc ON afc.MeterID = Meter.ID JOIN 
								LastFileChange lfc ON Meter.ID = lfc.MeterID AND RowNum = 1 AND afc.FileNAme = lfc.FileNAme
							GROUP BY 
								Meter.AssetKey, Meter.Make, afc.FileName, lfc.LAstWriteTime, lfc.URL) T
							)  AS Count FOR XML Path(''Email''))',
					
	'Diagnostic File Alarms')
GO

INSERT INTO SummaryEmail (Template, dataSQL,Subject) VALUES
('<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="xml" />
<xsl:template match="/">

<html>
    <style>
        .badge {
			display: inline-block;
			padding: .25em .4em;
			font-size: 75%;
			font-weight: 700;
			line-height: 1;
			text-align: center;
			white-space: nowrap;
			vertical-align: baseline;
			border-radius: .25rem;
		}
    </style>
    <body>
		<h2>PRC 002 Meter overview</h2>
		<xsl:for-each select="Email/States/State">
			<p>There are <xsl:value-of select="Count"/> Meters in <span class="badge" style="color:{TextColor};background-color:{Color}"><xsl:value-of select="Name"/></span>  Status</p>
		</xsl:for-each>
		<hr/>
		<xsl:if test="Email/MeterCount &lt; 1">
			<h2>Out of Compliance Meters</h2>
			<p>There have been no Meters out of Compliance.</p>
			<hr/>
		</xsl:if>
		<xsl:if test="Email/MeterCount &gt; 0">
			<h2>Out of Compliance Meters</h2>
			<hr/>
			<xsl:for-each select="Email/Meters/Meter">
				<br />
				<h4><xsl:value-of select="Name"/> Issues out of Compliance (<a href="{URL}">Link</a>)</h4>
				<br/>
				 <table>
					<tr><th>Issue created</th><th>Last Action Taken</th><th>Last Action Taken By</th></tr>
                    <xsl:for-each select="Records/Record">
						<tr><td><xsl:value-of select="Created"/></td><td><xsl:value-of select="Timestamp"/></td><td><xsl:value-of select="User"/></td></tr>
					</xsl:for-each>
                </table>
				
			</xsl:for-each>
		</xsl:if>
		
    </body>
</html>
</xsl:template>
</xsl:stylesheet>',
'  
SELECT (SELECT (
	SELECT 
		Description AS Name, 
		Color, 
		TextColor,
		COUNT(ComplianceMeterView.ID) AS Count
		FROM ComplianceMeterView LEFT JOIN ComplianceState ON ComplianceMeterView.statusID = ComplianceState.ID
			GROUP BY
				Description, Color, Textcolor , Priority
			ORDER BY [Priority]
			FOR XML PATH(''State'')
	) AS States,
	(SELECT COUNT(ID) FROM ComplianceMeterView WHERE Status = ''Compliance Issue'') AS MeterCount,
	(SELECT
		Name,
		( SELECT Timestamp, User, Created FROM ComplianceRecordView WHERE ComplianceRecordView.MeterID = ComplianceMeterView.MeterID AND ComplianceRecordView.Status = (SELECT ID FROM ComplianceState WHERE Description = ''Compliance Issue'')
		for XML Path(''Record'')
		) AS Records,
		(SELECT Value FROM Setting WHERE Name = ''MiMD.URL'') + ''/index.cshtml?name=PRC002Overview&MeterID='' + CAST(MeterID as varchar(10)) as URL
		FROM ComplianceMeterView WHERE Status = ''Compliance Issues'' FOR XML Path(''Meter'')) AS Meters
	FOR XML Path(''Email''))

', 'PRC002 Compliance Issues')
GO
