﻿//*********************************************************************************************************************
// ExtensibleDisturbanceAnalysisEngine.cs
// Version 1.1 and subsequent releases
//
//  Copyright © 2013, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the Eclipse Public License -v 1.0 (the "License"); you may
//  not use this file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://www.opensource.org/licenses/eclipse-1.0.php
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
// --------------------------------------------------------------------------------------------------------------------
//
// Version 1.0
//
// Copyright 2012 ELECTRIC POWER RESEARCH INSTITUTE, INC. All rights reserved.
//
// MiMD ("this software") is licensed under BSD 3-Clause license.
//
// Redistribution and use in source and binary forms, with or without modification, are permitted provided that the 
// following conditions are met:
//
// •    Redistributions of source code must retain the above copyright  notice, this list of conditions and 
//      the following disclaimer.
//
// •    Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
//      the following disclaimer in the documentation and/or other materials provided with the distribution.
//
// •    Neither the name of the Electric Power Research Institute, Inc. (“EPRI”) nor the names of its contributors 
//      may be used to endorse or promote products derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
// DISCLAIMED. IN NO EVENT SHALL EPRI BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL 
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; 
// OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, 
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
// POSSIBILITY OF SUCH DAMAGE.
//
//
// This software incorporates work covered by the following copyright and permission notice: 
//
// •    TVA Code Library 4.0.4.3 - Tennessee Valley Authority, tvainfo@tva.gov
//      No copyright is claimed pursuant to 17 USC § 105. All Other Rights Reserved.
//
//      Licensed under TVA Custom License based on NASA Open Source Agreement (TVA Custom NOSA); 
//      you may not use TVA Code Library except in compliance with the TVA Custom NOSA. You may  
//      obtain a copy of the TVA Custom NOSA at http://tvacodelibrary.codeplex.com/license.
//
//      TVA Code Library is provided by the copyright holders and contributors "as is" and any express 
//      or implied warranties, including, but not limited to, the implied warranties of merchantability 
//      and fitness for a particular purpose are disclaimed.
//
//*********************************************************************************************************************
//
//  Code Modification History:
//  -------------------------------------------------------------------------------------------------------------------
//  05/16/2012 - J. Ritchie Carroll, Grid Protection Alliance
//       Generated original version of source code.
//  10/02/2014 - Stephen C. Wills, Grid Protection Alliance
//       Adapted from the openFLE project to use the new fault location logic.
//
//*********************************************************************************************************************

using GSF.Annotations;
using GSF.Collections;
using GSF.Configuration;
using GSF.Data;
using GSF.Data.Model;
using GSF.IO;
using GSF.Threading;
using log4net;
using MiMD.Configuration;
using MiMD.FileParsing.DataOperations;
using MiMD.DataSets;
using MiMD.FileParsing.DataReaders;
using MiMD.Model;
using MiMD.Model.System;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using FileShare = MiMD.Configuration.FileShare;
namespace MiMD
{
    /// <summary>
    /// Represents an engine that processes power quality data
    /// to determine the locations of faults along power lines.
    /// </summary>
    public class MiMDEngine : IDisposable
    {
        #region [ Members ]

        // Nested Types

        private class DataProcessorState
        {
            public MeterDataSet MeterDataSet { get; set; }
            public string FilePath { get; set; }
            public string FilePathOnDisk { get; set; }
            public string FileName => Path.GetFileName(FilePath);
            public string FileProcessException { get; set; }
            public FileWrapper FileWrapper { get; set; }
            public string MeterKey { get; set; }
            public string ConnectionString { get; set; }
            public SystemSettings SystemSettings { get; set; }
            public Action<DataProcessorState> ProcessFileCallback { get; set; }
            public Action<DataProcessorState, Exception> ProcessFailureCallback { get; set; }
            public bool Retry { get; set; }
        }

        private class FileWrapper
        {
            #region [ Members ]

            // Fields
            private string m_filePath;
            private string m_directory;
            private string m_filePathWithoutExtension;

            private DateTime? m_maxFileCreationTime;
            private Dictionary<string, DateTime> m_fileCreationTimes;

            #endregion

            #region [ Constructors ]

            /// <summary>
            /// Creates a new instance of the <see cref="FileWrapper"/> class.
            /// </summary>
            /// <param name="filePath">The path to the wrapped file.</param>
            public FileWrapper(string filePath)
            {
                string rootFileName;

                m_filePath = filePath;
                m_directory = GSF.IO.FilePath.GetDirectoryName(filePath);
                rootFileName = GSF.IO.FilePath.GetFileNameWithoutExtension(filePath);
                m_filePathWithoutExtension = Path.Combine(m_directory, rootFileName);

                m_fileCreationTimes = new Dictionary<string, DateTime>();
            }

            /// <summary>
            /// Creates a new instance of the <see cref="FileWrapper"/> class.
            /// </summary>
            /// <param name="filePath">The path to the wrapped file.</param>
            /// <param name="maxFileCreationTime">The max creation time of the file group.</param>
            public FileWrapper(string filePath, DateTime maxFileCreationTime)
                : this(filePath)
            {
                m_maxFileCreationTime = maxFileCreationTime;
            }

            #endregion

            #region [ Properties ]

            /// <summary>
            /// Gets the path to the wrapped file.
            /// </summary>
            public string FilePath
            {
                get
                {
                    return m_filePath;
                }
            }

            /// <summary>
            /// Gets the path to the directory containing the wrapped file.
            /// </summary>
            public string Directory
            {
                get
                {
                    return m_directory;
                }
            }

            #endregion

            #region [ Methods ]

            /// <summary>
            /// Gets the maximum creation time of the files with the same root name as the wrapped file.
            /// </summary>
            /// <returns>The creation time of the file with the most recent creation time of the files with the same root name as the wrapped file.</returns>
            public DateTime GetMaxFileCreationTime()
            {
                if (m_maxFileCreationTime.HasValue)
                    return m_maxFileCreationTime.GetValueOrDefault();

                string[] fileList = GSF.IO.FilePath.GetFileList($"{m_filePathWithoutExtension}.*");
                return fileList.Max(file => m_fileCreationTimes.GetOrAdd(file, path => DateTime.UtcNow));
            }

            #endregion
        }

        private class FileSkippedException : Exception
        {
            public FileSkippedException()
            {
            }

            public FileSkippedException(string message)
                : base(message)
            {
            }

            public FileSkippedException(string message, Exception innerException)
                : base(message, innerException)
            {
            }
        }

        // Constants
        private const int FileEnumerationPriority = 1;
        private const int FileWatcherPriority = 2;
        private const int RequeuePriority = 3;

        // Fields
        private string m_dbConnectionString;
        private SystemSettings m_systemSettings;

        private FileProcessor m_fileProcessor;
        private ConcurrentDictionary<string, string> m_activeFiles;

        private LogicalThreadScheduler m_meterDataScheduler;
        private Dictionary<string, LogicalThread> m_meterDataThreadLookup;
        private LogicalThread m_noMeterThread;
        private int m_meterTaskCount;

        //private EventEmailEngine m_eventEmailEngine;

        private bool m_stopped;
        private bool m_disposed;

        #endregion

        #region [ Constructors ]

        /// <summary>
        /// Creates a new instance of the <see cref="MiMDEngine"/> class.
        /// </summary>
        public MiMDEngine()
        {
            m_stopped = true;
        }

        #endregion

        #region [ Properties ]

        /// <summary>
        /// Gets the current status of the MiMD engine.
        /// </summary>
        public string Status
        {
            get
            {
                SystemSettings systemSettings = m_systemSettings;
                StringBuilder statusBuilder = new StringBuilder();
                KeyValuePair<string, string>[] activeFiles;

                statusBuilder.AppendLine("Meter Data Status:");
                statusBuilder.AppendLine(new string('=', 50));
                statusBuilder.AppendLine($"       Database Timeout: {systemSettings.DbTimeout} seconds");
                statusBuilder.AppendLine($"   Max thread pool size: {systemSettings.ProcessingThreadCount}");
                statusBuilder.AppendLine();

                activeFiles = m_activeFiles.ToArray();

                if (activeFiles.Any())
                {
                    statusBuilder.AppendLine("  Active Threads:");

                    foreach (KeyValuePair<string, string> kvp in m_activeFiles.ToArray())
                        statusBuilder.AppendLine($"    [{kvp.Key}] {kvp.Value}");

                    statusBuilder.AppendLine();
                }

                if (systemSettings.FileShareList.Any())
                {
                    statusBuilder.AppendLine("  File shares:");

                    foreach (FileShare fileShare in systemSettings.FileShareList)
                    {
                        if ((object)fileShare.AuthenticationException == null)
                            statusBuilder.AppendLine($"    {fileShare.Name}");
                        else
                            statusBuilder.AppendLine($"    {fileShare.Name} [Exception: {fileShare.AuthenticationException.Message}]");
                    }

                    statusBuilder.AppendLine();
                }

                if (systemSettings.FileWatcherEnabled)
                {
                    statusBuilder.AppendLine("File Processor Status:");
                    statusBuilder.AppendLine(new string('=', 50));
                    statusBuilder.AppendLine($"                 Filter: {m_fileProcessor.Filter}");

                    if (!string.IsNullOrEmpty(m_fileProcessor.FolderExclusion))
                        statusBuilder.AppendLine($"       Folder Exclusion: {m_fileProcessor.FolderExclusion}");

                    statusBuilder.AppendLine($"   Internal buffer size: {m_fileProcessor.InternalBufferSize}");
                    statusBuilder.AppendLine($"   Max thread pool size: {m_fileProcessor.MaxThreadCount}");
                    statusBuilder.AppendLine($"   Enumeration strategy: {m_fileProcessor.EnumerationStrategy}");
                    statusBuilder.AppendLine($"         Is Enumerating: {m_fileProcessor.IsEnumerating}");
                    statusBuilder.AppendLine($"        Processed files: {m_fileProcessor.ProcessedFileCount}");
                    statusBuilder.AppendLine($"          Skipped files: {m_fileProcessor.SkippedFileCount}");
                    statusBuilder.AppendLine($"         Requeued files: {m_fileProcessor.RequeuedFileCount}");
                    statusBuilder.AppendLine();

                    if (m_fileProcessor.IsEnumerating)
                    {
                        IList<string> activelyEnumeratedPaths = m_fileProcessor.ActivelyEnumeratedPaths;

                        statusBuilder.AppendLine("  Actively enumerated paths:");

                        foreach (string path in activelyEnumeratedPaths.Take(5))
                            statusBuilder.AppendLine($"    {path}");

                        if (activelyEnumeratedPaths.Count > 5)
                            statusBuilder.AppendLine($"    {activelyEnumeratedPaths.Count - 5} more...");

                        statusBuilder.AppendLine();
                    }

                    statusBuilder.AppendLine("  Watch directories:");

                    foreach (string path in m_fileProcessor.TrackedDirectories)
                        statusBuilder.AppendLine($"    {path}");
                }

                return statusBuilder.ToString().TrimEnd();
            }
        }

        /// <summary>
        /// Will hold the processed files to prevent multiple processes
        /// </summary>
        private Dictionary<string, DateTime> ProcessedFiles { get; } = new Dictionary<string, DateTime>();
        #endregion

        #region [ Methods ]

        /// <summary>
        /// Starts the fault location engine.
        /// </summary>
        public void Start()
        {
            // Get system settings from the database
            ReloadSystemSettings();

            // Reload configuration at startup
            ReloadConfiguration();

            // Make sure watch directories exist
            foreach (string path in m_systemSettings.WatchDirectoryList)
                TryCreateDirectory(path);

            // Create the lookup table used to track which files are being processed
            if ((object)m_activeFiles == null)
                m_activeFiles = new ConcurrentDictionary<string, string>();

            // Create the scheduler used to schedule when to process meter data
            if ((object)m_meterDataScheduler == null)
            {
                m_meterDataScheduler = new LogicalThreadScheduler(3);
                m_meterDataThreadLookup = new Dictionary<string, LogicalThread>();

                m_meterDataScheduler.UnhandledException += (sender, args) =>
                {
                    string message = $"Unhandled exception occurred while processing meter data: {args.Argument.Message}";
                    Exception ex = new Exception(message, args.Argument);
                    OnProcessException(ex);
                };
            }

            m_meterDataScheduler.MaxThreadCount = m_systemSettings.ProcessingThreadCount;

            // Setup new email engine to send emails when an event occurs
            //if ((object)m_eventEmailEngine == null)
            //    m_eventEmailEngine = new EventEmailEngine();

            // Setup new file processor to monitor the watch directories
            if ((object)m_fileProcessor == null)
            {
                m_fileProcessor = new FileProcessor();
                m_fileProcessor.FolderExclusion = m_systemSettings.FolderExclusion;
                m_fileProcessor.InternalBufferSize = m_systemSettings.FileWatcherBufferSize;
                m_fileProcessor.EnumerationStrategy = m_systemSettings.FileWatcherEnumerationStrategy;
                m_fileProcessor.MaxThreadCount = m_systemSettings.FileWatcherInternalThreadCount;
                m_fileProcessor.Processing += FileProcessor_Processing;
                m_fileProcessor.Error += FileProcessor_Error;
                m_fileProcessor.TrackChanges = true;
                UpdateFileProcessorFilter(m_systemSettings);
            }

            m_stopped = false;

            if (m_systemSettings.FileWatcherEnabled)
            {
                foreach (string path in m_systemSettings.WatchDirectoryList)
                    m_fileProcessor.AddTrackedDirectory(path);
            }

            m_fileProcessor.EnumerateWatchDirectories();
        }

        /// <summary>
        /// Reloads system configuration from configuration sources.
        /// </summary>
        public void ReloadConfiguration()
        {
            // If system settings is null,
            // attempt to reload system settings
            if ((object)m_systemSettings == null)
                ReloadSystemSettings();

            // If system settings is still null, give up
            if ((object)m_systemSettings == null)
                return;
        }

        /// <summary>
        /// Reloads system settings from the database.
        /// </summary>
        public void ReloadSystemSettings()
        {
            ConfigurationFile configurationFile;
            CategorizedSettingsElementCollection category;

            // Reload the configuration file
            configurationFile = ConfigurationFile.Current;
            configurationFile.Reload();
            AdoDataConnection.ReloadConfigurationSettings();

            // Retrieve the connection string from the config file
            category = configurationFile.Settings["systemSettings"];
            category.Add("ConnectionString", "Data Source=localhost; Initial Catalog=MiMD; Integrated Security=SSPI", "Defines the connection to the MiMD database.");
            m_dbConnectionString = category["ConnectionString"].Value;

            // Load system settings from the database
            m_systemSettings = new SystemSettings(LoadSystemSettings());

            // Update the limit on the number of processing threads
            if ((object)m_meterDataScheduler != null)
                m_meterDataScheduler.MaxThreadCount = m_systemSettings.ProcessingThreadCount;

            // Attempt to authenticate to configured file shares
            foreach (FileShare fileShare in m_systemSettings.FileShareList)
            {
                if (!fileShare.TryAuthenticate())
                    OnProcessException(fileShare.AuthenticationException);
            }

            // Update the FileProcessor with the latest system settings
            if ((object)m_fileProcessor != null)
            {
                m_fileProcessor.FolderExclusion = m_systemSettings.FolderExclusion;
                m_fileProcessor.InternalBufferSize = m_systemSettings.FileWatcherBufferSize;
                m_fileProcessor.EnumerationStrategy = m_systemSettings.FileWatcherEnumerationStrategy;
                m_fileProcessor.MaxThreadCount = m_systemSettings.FileWatcherInternalThreadCount;

                UpdateFileProcessorFilter(m_systemSettings);

                if (m_systemSettings.FileWatcherEnabled)
                {
                    foreach (string directory in m_fileProcessor.TrackedDirectories.ToList())
                    {
                        if (!m_systemSettings.WatchDirectoryList.Contains(directory, StringComparer.OrdinalIgnoreCase))
                            m_fileProcessor.RemoveTrackedDirectory(directory);
                    }

                    foreach (string directory in m_systemSettings.WatchDirectoryList)
                        m_fileProcessor.AddTrackedDirectory(directory);
                }
                else
                {
                    foreach (string directory in m_fileProcessor.TrackedDirectories.ToList())
                        m_fileProcessor.RemoveTrackedDirectory(directory);
                }
            }
        }

        /// <summary>
        /// Auto deletes old files.
        /// </summary>
        /// <param name="args">The arguments supplied to the command to tweak the settings.</param>
        /// <returns></returns>
        public void AutoDeleteFiles()
        {
            using (AdoDataConnection connection = CreateDbConnection(m_systemSettings))
            {
                TableOperations<Setting> settingTable = new TableOperations<Setting>(connection);
                int days = int.Parse(settingTable.QueryRecordWhere("Name = 'AutoFileDeletionDays'")?.Value ?? "30");
                DateTime date = DateTime.UtcNow.AddDays(days * -1);

                foreach (string path in m_fileProcessor.TrackedDirectories)
                {
                    foreach (string filePath in FilePath.EnumerateFiles(path))
                    {
                        FileInfo file = new FileInfo(filePath);
                        List<DateTime> list = new List<DateTime>();
                        list.Add(file.CreationTimeUtc);
                        list.Add(file.LastAccessTimeUtc);
                        list.Add(file.LastWriteTimeUtc);
                        DateTime max = list.Max();

                        if (max < date)
                        {
                            OnStatusMessage("Deleting file - {0}", file.Name);
                            file.Delete();
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Tweaks the behavior of the file processor at runtime.
        /// </summary>
        /// <param name="args">The arguments supplied to the command to tweak the settings.</param>
        /// <returns>A message describing the change that was made.</returns>
        public string TweakFileProcessor(string[] args)
        {
            if (args.Length == 0 || args[0] == "-?")
            {
                StringBuilder helpMessage = new StringBuilder();

                helpMessage.Append("Modifies the behavior of the file processor at runtime.");
                helpMessage.AppendLine();
                helpMessage.AppendLine();
                helpMessage.Append("   Usage:");
                helpMessage.AppendLine();
                helpMessage.Append("       TweakFileProcessor { -Enumerate |");
                helpMessage.AppendLine();
                helpMessage.Append("                            -StopEnumeration |");
                helpMessage.AppendLine();
                helpMessage.Append("                            -Add <WatchDirectory> |");
                helpMessage.AppendLine();
                helpMessage.Append("                            -Remove <WatchDirectory> |");
                helpMessage.AppendLine();
                helpMessage.Append("                            -ListProperties |");
                helpMessage.AppendLine();
                helpMessage.Append("                            -Set <Property> <Value> }");
                helpMessage.AppendLine();
                helpMessage.AppendLine();
                helpMessage.Append("       TweakFileProcessor -?");
                helpMessage.AppendLine();
                helpMessage.AppendLine();
                helpMessage.Append("   Options:");
                helpMessage.AppendLine();
                helpMessage.Append("       -Enumerate".PadRight(25));
                helpMessage.Append("Initiates enumeration of the watch directories");
                helpMessage.AppendLine();
                helpMessage.Append("       -StopEnumeration".PadRight(25));
                helpMessage.Append("Stops enumeration of the watch directories");
                helpMessage.AppendLine();
                helpMessage.Append("       -Add".PadRight(25));
                helpMessage.Append("Adds a directory to the list of watch directories");
                helpMessage.AppendLine();
                helpMessage.Append("       -Remove".PadRight(25));
                helpMessage.Append("Removes a directory from the list of watch directories");
                helpMessage.AppendLine();
                helpMessage.Append("       -ListProperties".PadRight(25));
                helpMessage.Append("Lists properties that can be tweaked by this command");
                helpMessage.AppendLine();
                helpMessage.Append("       -Set".PadRight(25));
                helpMessage.Append("Tweaks a property of the file processor");
                helpMessage.AppendLine();
                helpMessage.Append("       -?".PadRight(25));
                helpMessage.Append("Displays this help message");

                return helpMessage.ToString();
            }

            if (args[0].Equals("-Enumerate", StringComparison.OrdinalIgnoreCase))
            {
                EnumerateWatchDirectories();
                return "Started enumeration of the watch directories.";
            }

            if (args[0].Equals("-StopEnumeration", StringComparison.OrdinalIgnoreCase))
            {
                m_fileProcessor.StopEnumeration();
                return "Stopped enumeration of the watch directories.";
            }

            if (args[0].Equals("-Add", StringComparison.OrdinalIgnoreCase))
            {
                if (args.Length < 2)
                    throw new FormatException("Malformed expression - Missing argument to 'TweakFileProcessor -Add <WatchDirectory>' command. Type 'TweakFileProcessor -?' to get help with this command.");

                m_fileProcessor.AddTrackedDirectory(args[1]);

                return $"Added directory '{args[1]}' to the file processor watch directories.";
            }

            if (args[0].Equals("-Remove", StringComparison.OrdinalIgnoreCase))
            {
                if (args.Length < 2)
                    throw new FormatException("Malformed expression - Missing argument to 'TweakFileProcessor -Remove <WatchDirectory>' command. Type 'TweakFileProcessor -?' to get help with this command.");

                m_fileProcessor.RemoveTrackedDirectory(args[1]);

                return $"Removed directory '{args[1]}' from the file processor watch directories.";
            }

            if (args[0].Equals("-ListProperties", StringComparison.OrdinalIgnoreCase))
            {
                StringBuilder propertyListBuilder = new StringBuilder();

                propertyListBuilder.AppendLine("File processor properties:");
                propertyListBuilder.AppendLine("  Filter");
                propertyListBuilder.AppendLine("  FolderExclusion");
                propertyListBuilder.AppendLine("  InternalBufferSize");
                propertyListBuilder.AppendLine("  MaxThreadCount");
                propertyListBuilder.AppendLine("  MaxFragmentation");
                propertyListBuilder.AppendLine("  EnumerationStrategy");

                return propertyListBuilder.ToString().TrimEnd();
            }

            if (args[0].Equals("-Set", StringComparison.OrdinalIgnoreCase))
            {
                string oldValue;

                if (args.Length < 3)
                    throw new FormatException("Malformed expression - Missing argument to 'TweakFileProcessor -Set <Property> <Value>' command. Type 'TweakFileProcessor -?' to get help with this command.");

                if (args[1].Equals("Filter", StringComparison.OrdinalIgnoreCase))
                {
                    oldValue = m_fileProcessor.Filter;
                    m_fileProcessor.Filter = args[2];
                }
                else if (args[1].Equals("FolderExclusion", StringComparison.OrdinalIgnoreCase))
                {
                    oldValue = m_fileProcessor.FolderExclusion;
                    m_fileProcessor.FolderExclusion = args[2];
                }
                else if (args[1].Equals("InternalBufferSize", StringComparison.OrdinalIgnoreCase))
                {
                    int internalBufferSize;

                    if (!int.TryParse(args[2], out internalBufferSize))
                        throw new FormatException($"Malformed expression - Value for property 'InternalBufferSize' must be an integer. Type 'TweakFileProcessor -?' to get help with this command.");

                    oldValue = m_fileProcessor.InternalBufferSize.ToString();
                    m_fileProcessor.InternalBufferSize = internalBufferSize;
                }
                else if (args[1].Equals("MaxThreadCount", StringComparison.OrdinalIgnoreCase))
                {
                    int maxThreadCount;

                    if (!int.TryParse(args[2], out maxThreadCount))
                        throw new FormatException($"Malformed expression - Value for property 'MaxThreadCount' must be an integer. Type 'TweakFileProcessor -?' to get help with this command.");

                    oldValue = m_fileProcessor.MaxThreadCount.ToString();
                    m_fileProcessor.MaxThreadCount = maxThreadCount;
                }
                else if (args[1].Equals("EnumerationStrategy", StringComparison.OrdinalIgnoreCase))
                {
                    FileEnumerationStrategy enumerationStrategy;

                    if (!Enum.TryParse(args[2], out enumerationStrategy))
                        throw new FormatException($"Malformed expression - Unrecognized enumeration strategy '{args[2]}'. Type 'TweakFileProcessor -?' to get help with this command.");

                    oldValue = m_fileProcessor.EnumerationStrategy.ToString();
                    m_fileProcessor.EnumerationStrategy = enumerationStrategy;
                }
                else
                {
                    throw new FormatException($"Malformed expression - Unrecognized file processor property '{args[1]}'. Type 'TweakFileProcessor -?' to get help with this command.");
                }

                return $"Updated property '{args[1]}' from '{oldValue}' to '{args[2]}'.";
            }

            throw new FormatException($"Malformed expression - Unrecognized option '{args[1]}' supplied to the 'TweakFileProcessor' command. Type 'TweakFileProcessor -?' to get help with this command.");
        }

        /// <summary>
        /// Issues command to the file processor to enumerate the watch directories.
        /// </summary>
        public void EnumerateWatchDirectories()
        {
            m_fileProcessor.EnumerateWatchDirectories();
        }

        /// <summary>
        /// Processes the given file on the appropriate meter thread with the given priority.
        /// </summary>
        /// <param name="filePath">The path to the file to be processed.</param>
        /// <param name="priority">The priority at which to process the file.</param>
        public void ProcessFile(string filePath, int priority)
        {
            string connectionString = LoadSystemSettings();
            SystemSettings systemSettings = new SystemSettings(connectionString);
            string meterKey = PrevalidateFile(filePath);

            if (meterKey == null) return;

            // Get the thread used to process this data
            QueueForMeter(meterKey, priority, () =>
            {
                if (m_stopped || m_disposed)
                    return;

                FileWrapper fileWrapper = new FileWrapper(filePath);
                //FileGroup fileGroup = new FileGroup();
                //fileGroup.FileHash = crc;

                Action<DataProcessorState> processFileCallback = state =>
                {
                    try
                    {
                        // Set up thread state for logging and reporting
                        ThreadContext.Properties["Meter"] = state.MeterKey;
                        m_activeFiles[state.MeterKey] = state.FilePath;

                        // Create the appropriate data reader
                        // and use it to parse the file
                        ReadFile(state);

                        if (state.Retry)
                            return;

                        // Process the data that was parsed from the file
                        ProcessFile(state);

                        // Set the processing end time of the file
                        // group and save it to the database
                        CompleteProcessing(state);

                    }
                    finally
                    {
                        // Restore thread state for logging and reporting
                        string removedFilePath;
                        m_activeFiles.TryRemove(state.MeterKey, out removedFilePath);
                        ThreadContext.Properties.Remove("Meter");
                    }
                };

                Action<DataProcessorState, Exception> processFailureCallback = (state, ex) =>
                {
                    // Set the error flag on the file group,
                    // then set the processing end time
                    // and save the file group to the database
                    state.FileProcessException = ex.Message;
                };

                // Set up the data processor state and enter the processing loop
                EnterProcessingLoop(new DataProcessorState()
                {
                    FilePath = filePath,
                    FilePathOnDisk = filePath,
                    FileWrapper = fileWrapper,

                    MeterKey = meterKey,
                    ConnectionString = connectionString,
                    SystemSettings = systemSettings,

                    ProcessFileCallback = processFileCallback,
                    ProcessFailureCallback = processFailureCallback
                });
            });
        }

        /// <summary>
        /// Stops the fault location engine.
        /// </summary>
        public void Stop()
        {
            try
            {
                if ((object)m_fileProcessor != null)
                    m_fileProcessor.ClearTrackedDirectories();
            }
            finally
            {
                m_stopped = true;
            }
        }

        /// <summary>
        /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
        /// </summary>
        /// <filterpriority>2</filterpriority>
        public void Dispose()
        {
            if (m_disposed)
                return;

            try
            {
                Stop();

                // Stop file monitor timer
                if ((object)m_fileProcessor != null)
                {
                    m_fileProcessor.Processing -= FileProcessor_Processing;
                    m_fileProcessor.Error -= FileProcessor_Error;
                    m_fileProcessor.Dispose();
                    m_fileProcessor = null;
                }
            }
            finally
            {
                m_disposed = true;
            }
        }

        // Validates the file before invoking the file processing handler.
        // Improves file processor performance by executing the filter in
        // parallel and also by bypassing the set of processed files.
        private string PrevalidateFile(string filePath)
        {
            try
            {
                string connectionString = LoadSystemSettings();
                SystemSettings systemSettings = new SystemSettings(connectionString);

                using (AdoDataConnection connection = new AdoDataConnection("systemSettings"))
                {
                    TableOperations<Meter> meterTable = new TableOperations<Meter>(connection);
                    string meterKey = GetMeterKey(filePath, systemSettings.FilePattern);

                    // Determine whether there exists a meter whose asset key matches the given meterKey
                    if (meterTable.QueryRecordCountWhere("AssetKey = {0}", meterKey) == 0)
                        throw new FileSkippedException($"Skipped file \"{filePath}\" because no meter configuration was found for meter {meterKey}.");

                    return meterKey;
                }

            }
            catch (FileSkippedException ex)
            {
                // This method may be called if the file was deleted,
                // in which case the user almost certainly doesn't care
                // why it was skipped for processing and logging the
                // error would only cause confusion
                if (File.Exists(filePath))
                    Log.Warn(ex.Message, ex);

                return null;
            }
            catch (Exception ex)
            {
                Log.Warn(ex.Message, ex);
                return null;
            }

        }

        // Called when the file processor has picked up a file in one of the watch
        // directories. This handler validates the file and processes it if able.
        private void FileProcessor_Processing(object sender, FileProcessorEventArgs fileProcessorEventArgs)
        {
            if (m_stopped || m_disposed)
                return;

            try
            {
                string filePath;
                int priority;

                filePath = fileProcessorEventArgs.FullPath;

                priority = fileProcessorEventArgs.RaisedByFileWatcher
                    ? FileWatcherPriority
                    : FileEnumerationPriority;

                byte[] buffer;
                FileInfo fileInfo = new FileInfo(filePath);

                // Check to see if this file has been processed for this specific write time, to prevent multiple processings
                if (ProcessedFiles.ContainsKey(filePath))
                {
                    long ticks = Math.Abs((ProcessedFiles[filePath] - fileInfo.LastWriteTime).Ticks);
                    ProcessedFiles.AddOrUpdate(filePath, fileInfo.LastWriteTime);
                    if (ticks < 1000000) return;
                }
                else
                    ProcessedFiles.Add(filePath, fileInfo.LastWriteTime);

                Log.Info($"\"{filePath}\" Picked up by File Watcher.");

                try
                {
                    buffer = File.ReadAllBytes(filePath);
                }
                catch (IOException)
                {
                    // Couldn't read from the file, likely because the
                    // process writing the file isn't finished writing
                    fileProcessorEventArgs.Requeue = true;
                    return;
                }

                // If the file is empty, we retry a number of times waiting
                // for the contents of the file before ultimately failing
                if (buffer.Length == 0)
                {
                    string message = $"Skipped file \"{filePath}\" because it is empty.";

                    if (fileProcessorEventArgs.RetryCount < 30)
                        fileProcessorEventArgs.Requeue = true;
                    else
                        throw new FileSkippedException(message);

                    return;
                }

                ProcessFile(filePath, priority);
            }
            catch (FileSkippedException)
            {
                // Do not wrap FileSkippedExceptions because
                // these only generate warning messages
                //throw;
            }
            catch (Exception ex)
            {
                // Wrap all other exceptions to include the file path in the message
                string message = $"Exception occurred processing file \"{fileProcessorEventArgs.FullPath}\": {ex.Message}";
                throw new Exception(message, ex);
            }
        }

        // Starts a loop to process the file.
        // Continues looping so long as the user continues requesting to requeue.
        private void EnterProcessingLoop(DataProcessorState state)
        {
            int retryCount = 0;
            Action delayAndProcess = null;

            // This method should always be called from the meter thread
            LogicalThread currentThread = LogicalThread.CurrentThread;
            LogicalThread meterThread = GetThread(state.MeterKey);

            if (!ReferenceEquals(currentThread, meterThread))
                throw new InvalidOperationException("EnterProcessingLoop must be called from the appropriate meter thread.");

            // Attempts to process the file and
            // returns the success indicator
            Func<bool> tryProcessFile = () =>
            {
                state.ProcessFileCallback(state);
                return !state.Retry;
            };

            // Always invoked on the meter thread -
            // attempts to process the file and kicks off
            // the delayAndProcess action on retry signal
            Action processFileTimer = () =>
            {
                if (m_stopped || m_disposed)
                    return;

                try
                {
                    int delay;

                    if (!tryProcessFile())
                    {
                        if (retryCount < 8)
                            delay = 250;
                        else if (retryCount < 21)
                            delay = 1000;
                        else if (retryCount < 30)
                            delay = 5000;
                        else if (retryCount < 34)
                            delay = 60000;
                        else
                            throw new FileSkippedException($"Skipped file \"{state.FilePath}\" because the system has been unable to process the file for the maximum allotted time.");

                        delayAndProcess.DelayAndExecute(delay);
                    }
                }
                catch (Exception ex)
                {
                    if (!IsFileSkippedException(ex))
                    {
                        try { state.ProcessFailureCallback(state, ex); }
                        catch (Exception inner) { OnProcessException(inner); }
                    }

                    throw;
                }
            };

            // Always invoked after a delay -
            // pushes the process file timer onto the processing thread
            delayAndProcess = () => QueueForMeter(state.MeterKey, RequeuePriority, processFileTimer);

            // Execute the timer action
            // to kick off the async loop
            processFileTimer();
        }

        // Finds the data reader for the file and uses it to parse the file.
        private void ReadFile(DataProcessorState state)
        {
            string meterKey = state.MeterKey;
            string filePath = state.FilePath;
            string filePathOnDisk = state.FilePathOnDisk;

            // Get the data reader that will be used to parse the file
            SystemSettings systemSettings = state.SystemSettings;
            DataReader dataReaderDefinition;

            using (AdoDataConnection connection = CreateDbConnection(systemSettings))
            {
                TableOperations<DataReader> dataReaderTable = new TableOperations<DataReader>(connection);

                dataReaderDefinition = dataReaderTable
                    .QueryRecords("LoadOrder")
                    .FirstOrDefault(reader => FilePath.IsFilePatternMatch(reader.FilePattern, filePath, true));
            }

            if ((object)dataReaderDefinition == null)
            {
                // Because the file processor is filtering files based on the DataReader file patterns,
                // this should only ever occur if the configuration changes during runtime
                UpdateFileProcessorFilter(systemSettings);

                throw new FileSkippedException($"Skipped file \"{filePath}\" because no data reader could be found to process the file.");
            }

            // Instantiate the data reader definition and wrap the object in a
            // data reader wrapper so we can safely dispose in a using block
            using (DataReaderWrapper dataReaderWrapper = Wrap(dataReaderDefinition))
            {
                IDataReader dataReader = dataReaderWrapper.DataObject;

                // Apply connection string settings to the data reader
                ConnectionStringParser.ParseConnectionString(state.ConnectionString, dataReader);

                // Determine whether the dataReader can parse the file
                state.Retry = !dataReader.CanParse(filePathOnDisk, state.FileWrapper.GetMaxFileCreationTime());

                if (state.Retry)
                    return;

                // Call the method to parse the file
                state.MeterDataSet = ParseFile(meterKey, dataReader, filePathOnDisk);
            }
        }

        // Parses the file on the meter's processing thread and kicks off processing of the meter data set.
        private MeterDataSet ParseFile(string meterKey, IDataReader dataReader, string filePath)
        {
            // Parse the file to turn it into a meter data set
            //OnStatusMessage($"Parsing data from file \"{filePath}\"...");
            dataReader.Parse(meterKey, filePath);
            //OnStatusMessage($"Finished parsing data from file \"{filePath}\".");

            return dataReader.MeterDataSet;
        }

        // Processes the data that was parsed from the file.
        private void ProcessFile(DataProcessorState state)
        {
            // Process the meter data set
            //OnStatusMessage($"Processing file '{filePath}'...");
            ProcessMeterDataSet(state.MeterDataSet);
            //OnStatusMessage($"Finished processing file '{filePath}'.");
        }

        // Complete the data processing.
        private void CompleteProcessing(DataProcessorState state)
        {
            state.MeterDataSet.ProcessingCompleted = DateTime.Now;
        }



        // Instantiates and executes data operations and data writers to process the meter data set.
        private void ProcessMeterDataSet(MeterDataSet meterDataSet)
        {
            List<DataOperation> dataOperationDefinitions;

            using (AdoDataConnection connection = meterDataSet.CreateDbConnection())
            {
                TableOperations<DataOperation> dataOperationTable = new TableOperations<DataOperation>(connection);

                // Load the data operations from the database,
                // in descending order so we can remove records while we iterate
                dataOperationDefinitions = dataOperationTable
                    .QueryRecords("LoadOrder")
                    .ToList();
            }
            bool executed = false;

            foreach (DataOperation dataOperationDefinition in dataOperationDefinitions)
            {
                try
                {
                    Log.Info($"Executing data operation '{dataOperationDefinition.UnqualifiedTypeName}'...");
                    // Call the execute method on the data operation to perform in-memory data transformations
                    using (DataOperationWrapper wrapper = Wrap(dataOperationDefinition))
                    {
                        IDataOperation dataOperation = wrapper.DataObject;

                        ConnectionStringParser.ParseConnectionString(meterDataSet.ConnectionString, dataOperation);

                        executed |= dataOperation.Execute(meterDataSet);
                    }

                    Log.Info($"Finished executing data operation '{dataOperationDefinition.UnqualifiedTypeName}'.");
                }
                catch (Exception ex)
                {
                    // Log the error and skip to the next data operation
                    string message = $"An error occurred while executing data operation of type '{dataOperationDefinition.TypeName}' on data from meter '{meterDataSet.Meter.AssetKey}': {ex.Message}";
                    OnProcessException(new Exception(message, ex));
                }
            }

            if (executed)
                OnStatusMessage($"Finished processing file '{meterDataSet.FilePath}'.");

        }

        // Updates the Filter property of the FileProcessor with the
        // latest collection of filters from the DataReader table.
        private void UpdateFileProcessorFilter(SystemSettings systemSettings)
        {
            List<string> filterPatterns;

            // Do not attempt to load filter patterns if file processor is not defined
            if ((object)m_fileProcessor == null)
                return;

            // Get the list of file extensions to be processed by MiMD
            using (AdoDataConnection connection = CreateDbConnection(systemSettings))
            {
                TableOperations<DataReader> dataReaderTable = new TableOperations<DataReader>(connection);

                filterPatterns = dataReaderTable
                    .QueryRecords()
                    .Select(reader => reader.FilePattern)
                    .ToList();
            }

            m_fileProcessor.Filter = string.Join(Path.PathSeparator.ToString(), filterPatterns);
        }

        private void QueueForMeter(string meterKey, int priority, Action action)
        {
            //m_eventEmailEngine.StopTimer();
            LogicalThread meterThread = GetThread(meterKey);
            Interlocked.Increment(ref m_meterTaskCount);

            meterThread.Push(priority, () =>
            {
                try
                {
                    action();
                }
                finally
                {
                    int meterTaskCount = Interlocked.Decrement(ref m_meterTaskCount);

                    //if (meterTaskCount == 0)
                    //    m_eventEmailEngine.StartTimer();
                }
            });
        }

        // Gets the thread used to process data for
        // the meter identified by the given asset key.
        private LogicalThread GetThread(string meterKey)
        {
            if ((object)meterKey == null)
                return m_noMeterThread ?? (m_noMeterThread = m_meterDataScheduler.CreateThread());

            return m_meterDataThreadLookup.GetOrAdd(meterKey, key =>
            {
                LogicalThread newThread = m_meterDataScheduler.CreateThread();

                newThread.UnhandledException += (sender, args) =>
                {
                    Exception ex = args.Argument;

                    if (ex is FileSkippedException)
                    {
                        Log.Warn(ex.Message, ex);
                        return;
                    }

                    string message = $"Exception occurred processing data from meter \"{meterKey}\": {ex.Message}";
                    OnProcessException(new Exception(message, ex));
                };

                return newThread;
            });
        }

        // Loads system settings from the database.
        private string LoadSystemSettings()
        {
            using (AdoDataConnection connection = new AdoDataConnection(m_dbConnectionString, typeof(SqlConnection), typeof(SqlDataAdapter)))
            {
                return LoadSystemSettings(connection);
            }
        }

        // Loads system settings from the database.
        private string LoadSystemSettings(AdoDataConnection connection)
        {
            TableOperations<Setting> settingTable = new TableOperations<Setting>(connection);
            List<Setting> settingList = settingTable.QueryRecords().ToList();

            foreach (IGrouping<string, Setting> grouping in settingList.GroupBy(setting => setting.Name))
            {
                if (grouping.Count() > 1)
                    Log.Warn($"Duplicate record for setting {grouping.Key} detected.");
            }

            // Convert the Setting table to a dictionary
            Dictionary<string, string> settings = settingList
                .DistinctBy(setting => setting.Name)
                .ToDictionary(setting => setting.Name, setting => setting.Value, StringComparer.OrdinalIgnoreCase);

            // Add the database connection string if there is not
            // already one explicitly specified in the Setting table
            if (!settings.ContainsKey("dbConnectionString"))
                settings.Add("dbConnectionString", m_dbConnectionString);

            // Convert dictionary to a connection string and return it
            return SystemSettings.ToConnectionString(settings);
        }

        #endregion

        #region [ Static ]

        // Static Fields
        private static readonly ConnectionStringParser<SettingAttribute, CategoryAttribute> ConnectionStringParser = new ConnectionStringParser<SettingAttribute, CategoryAttribute>();
        private static readonly ILog Log = LogManager.GetLogger(typeof(MiMDEngine));

        // Static Methods

        /// <summary>
        /// Determines if the given exception is a file skipped exception.
        /// </summary>
        /// <param name="ex">The exception to be tested.</param>
        /// <returns>True if it is a file skipped exception; false otherwise.</returns>
        public static bool IsFileSkippedException(Exception ex)
        {
            return ex is FileSkippedException;
        }

        // Attempts to create the directory at the given path.
        private static void TryCreateDirectory(string path)
        {
            try
            {
                // Make sure results directory exists
                if (!Directory.Exists(path))
                    Directory.CreateDirectory(path);
            }
            catch (Exception ex)
            {
                OnProcessException(new InvalidOperationException(string.Format("Failed to create directory \"{0}\" due to exception: {1}", FilePath.GetAbsolutePath(path), ex.Message), ex));
            }
        }

        // Uses regular expressions to read the meter's asset key from the file path.
        private static string GetMeterKey(string filePath, string filePattern)
        {
            Match match = Regex.Match(filePath, filePattern, RegexOptions.IgnoreCase);
            Group meterKeyGroup;

            if (!match.Success)
                throw new FileSkippedException($"Skipped file \"{filePath}\" because the file path did not match the file pattern: \"{filePattern}\".");

            meterKeyGroup = match.Groups["AssetKey"];

            if ((object)meterKeyGroup == null)
                throw new FileSkippedException($"Skipped file \"{filePath}\" because the AssetKey capture group was not found when matching to the file pattern: \"{filePattern}\".");

            return meterKeyGroup.Value;
        }

        // Instantiates the given data reader and wraps it in a disposable wrapper object.
        private static DataReaderWrapper Wrap(DataReader reader)
        {
            try
            {
                Assembly assembly = Assembly.LoadFrom(reader.AssemblyName);
                Type type = assembly.GetType(reader.TypeName);
                return new DataReaderWrapper(reader.ID, type);
            }
            catch (Exception ex)
            {
                string message = $"Failed to create data reader of type {reader.TypeName}: {ex.Message}";
                throw new TypeLoadException(message, ex);
            }
        }

        // Instantiates the given data operation and wraps it in a disposable wrapper object.
        private static DataOperationWrapper Wrap(DataOperation operation)
        {
            try
            {
                Assembly assembly = Assembly.LoadFrom(operation.AssemblyName);
                Type type = assembly.GetType(operation.TypeName);
                return new DataOperationWrapper(operation.ID, type);
            }
            catch (Exception ex)
            {
                string message = $"Failed to create data operation of type {operation.TypeName}: {ex.Message}";
                throw new TypeLoadException(message, ex);
            }
        }

        // Creates a new database connection based on the given system configuration.
        private static AdoDataConnection CreateDbConnection(SystemSettings systemSettings)
        {
            string connectionString = systemSettings.DbConnectionString;
            Type connectionType = typeof(SqlConnection);
            Type adapterType = typeof(SqlDataAdapter);

            return new AdoDataConnection(connectionString, connectionType, adapterType)
            {
                DefaultTimeout = systemSettings.DbTimeout
            };
        }

        // Called when the file processor encounters an unexpected error.
        private static void FileProcessor_Error(object sender, ErrorEventArgs args)
        {
            Exception ex = args.GetException();

            if (ex is FileSkippedException)
                Log.Warn(ex.Message, ex);
            else
                OnProcessException(args.GetException());
        }

        // Displays status message to the console - proxy method for service implementation
        [StringFormatMethod("format")]
        private static void OnStatusMessage(string format, params object[] args)
        {
            Log.Info(string.Format(format, args));
        }

        // Displays exception message to the console - proxy method for service implmentation
        private static void OnProcessException(Exception ex)
        {
            Log.Error(ex.Message, ex);
        }

        #endregion
    }
}
