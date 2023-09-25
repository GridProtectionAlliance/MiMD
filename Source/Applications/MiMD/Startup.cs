//******************************************************************************************************
//  Startup.cs - Gbtc
//
//  Copyright © 2016, Grid Protection Alliance.  All Rights Reserved.
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
//  01/12/2016 - J. Ritchie Carroll
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Security;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.ExceptionHandling;
using System.Web.Http.Routing;
using GSF.Configuration;
using GSF.Web.Hosting;
using GSF.Web.Security;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Json;
using Microsoft.Owin.Cors;
using Newtonsoft.Json;
using Owin;

namespace MiMD
{
    public class HostedExceptionHandler : ExceptionHandler
    {
        public override void Handle(ExceptionHandlerContext context)
        {
            Program.Host.LogException(context.Exception);
            base.Handle(context);
        }
    }
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Modify the JSON serializer to serialize dates as UTC - otherwise, timezone will not be appended
            // to date strings and browsers will select whatever timezone suits them
            JsonSerializerSettings settings = JsonUtility.CreateDefaultSerializerSettings();
            settings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;

            JsonSerializer serializer = JsonSerializer.Create(settings);

            GlobalHost.DependencyResolver.Register(typeof(JsonSerializer), () => serializer);

            // Load security hub into application domain before establishing SignalR hub configuration, initializing default status and exception handlers
            try
            {
                using (new SecurityHub(
                    (message, updateType) => Program.Host.LogWebHostStatusMessage(message, updateType),
                    Program.Host.LogException
                )) { }
            }
            catch (Exception ex)
            {
                Program.Host.LogException(new SecurityException($"Failed to load Security Hub, validate database connection string in configuration file: {ex.Message}", ex));
            }


            HubConfiguration hubConfig = new HubConfiguration();
            HttpConfiguration httpConfig = new HttpConfiguration();

            // Make sure any hosted exceptions get propagated to service error handling
            httpConfig.Services.Replace(typeof(IExceptionHandler), new HostedExceptionHandler());

            // Enabled detailed client errors
            hubConfig.EnableDetailedErrors = true;

            // Enable GSF session management
            httpConfig.EnableSessions(AuthenticationOptions);

            // Enable GSF role-based security authentication with Logon Page
            app.UseAuthentication(AuthenticationOptions);

            string allowedDomainList = ConfigurationFile.Current.Settings["systemSettings"]["AllowedDomainList"]?.Value;

            if (allowedDomainList == "*")
                app.UseCors(CorsOptions.AllowAll);
            else if ((object)allowedDomainList != null)
                httpConfig.EnableCors(new System.Web.Http.Cors.EnableCorsAttribute(allowedDomainList, "*", "*"));

            // Load ServiceHub SignalR class
            app.MapSignalR(hubConfig);

            // Set configuration to use reflection to setup routes
            httpConfig.MapHttpAttributeRoutes(new CustomDirectRouteProvider());

            // Load the WebPageController class and assign its routes
            app.UseWebApi(httpConfig);

            // Setup resolver for web page controller instances
            app.UseWebPageController(WebServer.Default, builder =>
            {
                builder.UseDefaultWebPage(Program.Host.DefaultWebPage);
                builder.UseModel(Program.Host.Model);
                builder.UseAuthenticationOptions(AuthenticationOptions);
                builder.UseCustomRoutes(MapReactRoutes);
            });

            httpConfig.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.Always;

            // Check for configuration issues before first request
            httpConfig.EnsureInitialized();
        }

        private static void MapReactRoutes(HttpRouteCollection routes)
        {
            routes.MapHttpRoute(
                name: "ConfigurationByMeter",
                routeTemplate: "Configuration/Meter/{meterID}",
                defaults: new
                {
                    controller = "WebPage",
                    action = "GetPage",
                    pageName = Program.Host.DefaultWebPage,
                    meterID = System.Web.Mvc.UrlParameter.Optional
                }
            );

            routes.MapHttpRoute(
                name: "ConfigurationByMeter with file",
                routeTemplate: "Configuration/Meter/{meterID}/File/{FileName}",
                defaults: new
                {
                    controller = "WebPage",
                    action = "GetPage",
                    pageName = Program.Host.DefaultWebPage,
                    meterID = System.Web.Mvc.UrlParameter.Optional,
                    FileName = System.Web.Mvc.UrlParameter.Optional
                }
            );

            routes.MapHttpRoute(
                name: "DiagnosticByMeter",
                routeTemplate: "Diagnostic/Meter/{meterID}",
                defaults: new
                {
                    controller = "WebPage",
                    action = "GetPage",
                    pageName = Program.Host.DefaultWebPage,
                    meterID = System.Web.Mvc.UrlParameter.Optional
                }
            );

            routes.MapHttpRoute(
                name: "DiagnosticByMeter with file and table",
                routeTemplate: "Diagnostic/Meter/{meterID}/File/{FileName}/Table/{TableName}",
                defaults: new
                {
                    controller = "WebPage",
                    action = "GetPage",
                    pageName = Program.Host.DefaultWebPage,
                    meterID = System.Web.Mvc.UrlParameter.Optional,
                    FileName = System.Web.Mvc.UrlParameter.Optional,
                    TableName = System.Web.Mvc.UrlParameter.Optional
                }
            );

            routes.MapHttpRoute(
                name: "PRC002ByChange",
                routeTemplate: "PRC002Change/Record/{recordID}",
                defaults: new
                {
                    controller = "WebPage",
                    action = "GetPage",
                    pageName = Program.Host.DefaultWebPage,
                    recordID = System.Web.Mvc.UrlParameter.Optional
                }
            );

            routes.MapHttpRoute(
                name: "PRC002MeterOverviewPage",
                routeTemplate: "PRC002Overview/Meter/{meterID}",
                defaults: new
                {
                    controller = "WebPage",
                    action = "GetPage",
                    pageName = Program.Host.DefaultWebPage,
                    meterID = System.Web.Mvc.UrlParameter.Optional
                }
            );
        }

        /// <summary>
        /// Gets the authentication options used for the hosted web server.
        /// </summary>
        public static AuthenticationOptions AuthenticationOptions { get; } = new AuthenticationOptions();

    }

    public class CustomDirectRouteProvider : DefaultDirectRouteProvider
    {
        protected override IReadOnlyList<IDirectRouteFactory>
        GetActionRouteFactories(HttpActionDescriptor actionDescriptor)
        {
            return actionDescriptor.GetCustomAttributes<IDirectRouteFactory>(inherit: true);
        }
    }


}
