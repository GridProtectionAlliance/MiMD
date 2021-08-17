//******************************************************************************************************
//  Note.cs - Gbtc
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
//  05/20/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using GSF.Data;
using GSF.Data.Model;
using GSF.Web.Model;
using Newtonsoft.Json.Linq;
using openXDA.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MiMD.Model
{

    #region [ Classes ]


    #endregion

    #region [ Controllers ]

    [RoutePrefix("api/OpenXDA/Note")]
    public class NoteController : openXDA.Model.NotesController<Notes> { }

    [RoutePrefix("api/OpenXDA/NoteType")]
    public class NoteTypeController : ModelController<NoteType> { }

    [RoutePrefix("api/OpenXDA/NoteTag")]
    public class NoteTagController : ModelController<NoteTag> { }

    [RoutePrefix("api/OpenXDA/NoteApp")]
    public class NoteAppController : ModelController<NoteApplication> { }

    #endregion


}