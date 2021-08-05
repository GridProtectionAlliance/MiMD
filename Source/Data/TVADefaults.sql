
INSERT INTO [MiMD.ComplianceState] (Description, Color, TextColor, Priority) VALUES
('In Compliance','#28A745','#ffffff',0),
('Compliance Issue','#DC3545','#ffffff',6),
('Acknowledged','#FFC107','#212529',5),
('Reviewed','#2A2484','#ffffff',4),
('Inactive','#f8f9fa','#212529',7),
('RAP Submitted','#17A2B8','#ffffff',3)
GO

INSERT INTO [MiMD.SummaryEmail] (Template, dataSQL,Subject) VALUES
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

INSERT INTO [MiMD.SummaryEmail] (Template, dataSQL,Subject) VALUES
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

INSERT INTO [MiMD.SummaryEmail] (Template, dataSQL,Subject) VALUES
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
		 th, td{
            padding: 10px;
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
				<h4><xsl:value-of select="Name"/> Issues not in Compliance (<a href="{URL}">Link</a>)</h4>
				<br/>
				 <table>
					<tr><th>Status</th><th>Issue created</th><th>Last Action</th><th>Last Action Taken</th><th>Last Action Taken By</th><th></th></tr>
                    <xsl:for-each select="Records/Record">
						<tr>
							<td><span class="badge" style="color:{StatusTextColor};background-color:{StatusColor}"><xsl:value-of select="Status"/></span></td>
							<td><format type="System.DateTime" spec="mm/dd/yy HH:mm CT"><xsl:value-of select="Created"/></format></td>
							<td><xsl:value-of select="Action"/></td>
							<td><format type="System.DateTime" spec="mm/dd/yy HH:mm CT"><xsl:value-of select="Timestamp"/></format></td>
							<td><xsl:value-of select="User"/></td>
							<td><a href="{URL}">Link</a></td>
						</tr>
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
		( SELECT
			Timestamp,
			[User],
			Created,
			(SELECT Description FROM ComplianceState CS WHERE CS.ID =  ComplianceRecordView.Status) AS Status,
			(SELECT Color FROM ComplianceState CS1 WHERE CS1.ID =  ComplianceRecordView.Status) AS StatusColor,
			(SELECT TextColor FROM ComplianceState CS2 WHERE CS2.ID =  ComplianceRecordView.Status) AS StatusTextColor,
			(SELECT CASE WHEN (SELECT StateId FROM ComplianceAction WHERE ComplianceAction.ID =  ComplianceRecordView.LastActionID) IS NULL THEN ''Note Added'' ELSE ''Changed Status'' END) AS Action,
			(SELECT Value FROM Setting WHERE Name = ''MiMD.URL'') + ''/index.cshtml?name=PRC002Change&RecordID='' + CAST(ComplianceRecordView.ID as varchar(10)) as URL
			FROM ComplianceRecordView WHERE ComplianceRecordView.MeterID = ComplianceMeterView.ID AND ComplianceRecordView.Status IN (SELECT ID FROM ComplianceState WHERE Description <> ''In Compliance'')
		for XML Path(''Record'')
		) AS Records,
		(SELECT Value FROM Setting WHERE Name = ''MiMD.URL'') + ''/index.cshtml?name=PRC002Overview&MeterID='' + CAST(ID as varchar(10)) as URL
		FROM ComplianceMeterView WHERE Status = ''Compliance Issue'' FOR XML Path(''Meter'')) AS Meters
	FOR XML Path(''Email''))

', 'PRC002 Compliance Issues')
GO

-- CleanUp Tasks
INSERT INTO [MiMD.DBCleanUpTask] (SQLCommand, Schedule) VALUES
('DELETE FROM EMAXDiagnosticFileChanges WHERE LastWriteTime < DATEADD(DAY, -30, GETDATE())','0 3 1 * *'),
('DELETE FROM ConfigFileChanges WHERE LastWriteTime < DATEADD(DAY, -30, GETDATE())','10 3 1 * *')
GO