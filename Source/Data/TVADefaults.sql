INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Site Name') 
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Maximo Asset Number (this should allow us to display other linked fields in Maximo)')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'TVA Meter #')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'PBA ID #')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Serial Number')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Model Number')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Firmware Version')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Template Version')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'OpenXDA ID')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'PQView Site ID')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'File Path of Data File Location')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Substation Number')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'TSC')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Meter Sector')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Connection Type')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Download Host')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Time Source (NTP, IRIG, Internal, etc)')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Unit ID')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'In-Service Date')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Location Type (LSC, Solar, Wind, Intertie, Hydro, Nuclear, Fossil, Gas, Delivery Point, System)')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Nominal Voltage')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'PT ratio')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'CT ratio')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Aux CT')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Total Effective CT Ratio')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Status (Active, In-Progress, Retired, etc)')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'MSCO (link to ECM)')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'MSS (link to ECM)')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'RSS (link to ECM)')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Drawings (DSL, Elementary, Wiring, etc) (link to ECM)')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'Pictures')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName) VALUES ('Meter', 'General Notes')
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName,IsSecure) VALUES ('Meter', 'GPS Location (link to eGIS and Google Maps)', 1)
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName,IsSecure) VALUES ('Meter', 'Physical 911 Address (link to eGIS and Google Maps)', 1)
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName,IsSecure) VALUES ('Meter', 'Login User Name', 1)
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName,IsSecure) VALUES ('Meter', 'Login Password', 1)
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName,IsSecure) VALUES ('Meter', 'Download Connection IP & Port', 1)
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName,IsSecure) VALUES ('Meter', 'Webpage IP & Port', 1)
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName,IsSecure) VALUES ('Meter', 'Internal IP (links to IPAM)', 1)
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName,IsSecure) VALUES ('Meter', 'Gateway IP', 1)
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName,IsSecure) VALUES ('Meter', 'Subnet Mask IP', 1)
GO

INSERT INTO AdditionalField (OpenXDAParentTable, FieldName,IsSecure) VALUES ('Meter', 'NTP Host IP', 1)
GO

INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Columbia', 'Also covers Nashville', 'D17311')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Bowling Green', NULL, 'D17312')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Mayfield', 'Also covers Jackson', 'D17313')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Murfreesboro', 'Also covers Nashville', 'D17314')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Johnson City', NULL, 'D17321')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Knoxville', NULL, 'D17322')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Chattanooga', 'Also covers Cleveland', 'D17323')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Huntsville', NULL, 'D17325')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Memphis', 'Also covers Jackson', 'D17332')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Tupelo', NULL, 'D17333')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Starkville', NULL, 'D17334')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Muscle Shoals', NULL, 'D17335')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Browns Ferry', NULL, 'D17341')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Sequoyah', NULL, 'D17342')
GO
INSERT INTO TSC (Name, Description, DepartmentNumber) VALUES ('Watts Bar', NULL, 'D17343')
GO

INSERT INTO Role (Name, Description) VALUES ('TSM (Transmission Service Manager)', 'Mgr, Transmission Service Cntr')
GO
INSERT INTO Role (Name, Description) VALUES ('PMTM (Program Manager, Transmission Maintenance)', 'Prog Mgr, Trans Maint')
GO
INSERT INTO Role (Name, Description) VALUES ('SE (System Engineer)', 'SY ENGR, TRANSM (PSO) A;SY ENGR, TRANSM (PSO) B;SY ENGR, TRANSM (PSO) C;SYSTEM ENGR TRANS, (REST USE);ELEC ENG-TRANS SERV;ELECT ENGR, TRANS SVS (PSO) B')
GO
INSERT INTO Role (Name, Description) VALUES ('PMS (Power Maintenance Specialist)', 'Maint Spec, Trans System (C)')
GO
INSERT INTO Role (Name, Description) VALUES ('PMT (Power Maintenance Technician)', 'TECH, PWR MAINT (PSO) A;TECH, POWER MAINT (PSO) B')
GO
INSERT INTO Role (Name, Description) VALUES ('TCE (Telecom Engineer)', 'ELECT ENGR, POWR CN SY (PSO) A;ELECT ENGR, POWR CN SY (PSO) B')
GO
INSERT INTO Role (Name, Description) VALUES ('TCS (Telecom Specialist)', 'MAINT SPEC, TRANS COMM (PSO) C')
GO
INSERT INTO Role (Name, Description) VALUES ('TCT (Telecom Technician)', 'Technician, Telecom (PSO) A;Technician, Telecom (PSO) B')
GO

