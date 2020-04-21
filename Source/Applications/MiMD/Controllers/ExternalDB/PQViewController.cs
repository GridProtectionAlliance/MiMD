//******************************************************************************************************
//  PQViewController.cs - Gbtc
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
//  04/10/2020 - Christoph Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Http;
using GSF.Data;
using GSF.Data.Model;
using Newtonsoft.Json.Linq;
using Oracle.ManagedDataAccess.Client;
using openXDA.Model;

namespace MiMD.Controllers
{
    [RoutePrefix("api/ExternalDB/PQView/Location")]
    public class PQViewLocationController : ExternalDBController<Location>
    {
        protected override string extDBConnectionSetting { get { return "dbPQView"; } }
        protected override GSF.Data.DatabaseType extDBType { get { return DatabaseType.SQLServer; } }
        protected override string extDBName { get { return "PQView"; } }

        protected override Model.ExternalDBField processExternalAdditionalField(Location location, Model.ExternalDBField field)
        {
            field.OpenXDAParentTableID = location.ID;
            field.DisplayName = location.LocationKey;
            return field;
        }

        protected override Model.ExternalDBField processExternalopenXDAField(Location location, Model.ExternalDBField field)
        {
            field.OpenXDAParentTableID = location.ID;
            field.DisplayName = location.LocationKey;
            return field;
        }

        protected override string getDataQuery(Location location)
        {
            return String.Format("Id = {0}", location.ID);
        }
    }

    [RoutePrefix("api/ExternalDB/PQView/Meter")]
    public class PQViewMeterController : ExternalDBController<Meter>
    {
        protected override string extDBConnectionSetting { get { return "dbPQView"; } }
        protected override GSF.Data.DatabaseType extDBType { get { return DatabaseType.SQLServer; } }
        protected override string extDBName { get { return "PQView"; } }

        protected override Model.ExternalDBField processExternalAdditionalField(Meter meter, Model.ExternalDBField field)
        {
            field.OpenXDAParentTableID = meter.ID;
            field.DisplayName = meter.AssetKey;
            return field;
        }

        protected override Model.ExternalDBField processExternalopenXDAField(Meter meter, Model.ExternalDBField field)
        {
            field.OpenXDAParentTableID = meter.ID;
            field.DisplayName = meter.AssetKey;
            return field;
        }

        protected override string getDataQuery(Meter meter)
        {
            return String.Format("Id = {0}", meter.ID);
        }
    }
}