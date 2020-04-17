//******************************************************************************************************
//  FileWatcher.cs - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  04/17/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MiMD
{

    public class FileWatcher: BackgroundService
    {
        private readonly ILogger<FileWatcher> m_logger;
        private FileSystemWatcher m_folderWatcher;
        private readonly FileWatcherSettings m_settings;
        private readonly IServiceProvider m_services;

        public FileWatcher(ILogger<FileWatcher> logger, IOptions<FileWatcherSettings> settings, IServiceProvider services)
        {
            m_logger = logger;
            m_settings = settings.Value;
            m_services = services;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            await Task.CompletedTask;
        }

        public override Task StartAsync(CancellationToken cancellationToken)
        {
            m_logger.LogInformation("FileWatcher Starting");
            if (!Directory.Exists(m_settings.InputFolder))
            {
                m_logger.LogWarning($"Please make sure the InputFolder [{m_settings.InputFolder}] exists, then restart the service.");
                return Task.CompletedTask;
            }

            m_logger.LogInformation($"Binding Events from Input Folder: {m_settings.InputFolder}");
            m_folderWatcher = new FileSystemWatcher(m_settings.InputFolder, m_settings.Filter)
            {
                NotifyFilter = NotifyFilters.CreationTime | NotifyFilters.LastWrite | NotifyFilters.FileName |
                                  NotifyFilters.DirectoryName
            };
            m_folderWatcher.Created += Input_OnChanged;
            m_folderWatcher.EnableRaisingEvents = true;

            return base.StartAsync(cancellationToken);
        }

        protected void Input_OnChanged(object source, FileSystemEventArgs e)
        {
            if (e.ChangeType == WatcherChangeTypes.Created)
            {
                m_logger.LogInformation($"InBound Change Event Triggered by [{e.FullPath}]");

                // do some work

                m_logger.LogInformation("Done with Inbound Change Event");
            }
        }

        public override async Task StopAsync(CancellationToken cancellationToken)
        {
            m_logger.LogInformation("Stopping FileWatcher");
            m_folderWatcher.EnableRaisingEvents = false;
            await base.StopAsync(cancellationToken);
        }

        public override void Dispose()
        {
            m_logger.LogInformation("Disposing FileWatcher");
            m_folderWatcher.Dispose();
            base.Dispose();
        }

    }
}
