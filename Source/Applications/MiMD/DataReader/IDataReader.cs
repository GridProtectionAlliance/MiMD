﻿//******************************************************************************************************
//  IDataReader.cs - Gbtc
//
//  Copyright © 2014, Grid Protection Alliance.  All Rights Reserved.
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
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  08/01/2014 - Stephen C. Wills
//       Generated original version of source code.
//
//******************************************************************************************************

using MiMD.DataSets;
using System;

namespace MiMD.DataReaders
{
    public interface IDataReader
    {
        /// <summary>
        /// Gets the data set produced by the Parse method of the data reader.
        /// </summary>
        /// <remarks>
        /// For data reader implementations that return a data set,
        /// the return value should not be null at any time during the
        /// lifecycle of the data reader. For implementations that do
        /// not return a data set, this should always return null.
        /// </remarks>
        MeterDataSet MeterDataSet
        {
            get;
        }

        /// <summary>
        /// Determines whether the file can be parsed at this time.
        /// </summary>
        /// <param name="filePath">The path to the file to be parsed.</param>
        /// <param name="fileCreationTime">The time the file was created.</param>
        /// <returns>True if the file can be parsed; false otherwise.</returns>
        bool CanParse(string filePath, DateTime fileCreationTime);

        /// <summary>
        /// Parses the file into a meter data set per meter contained in the file.
        /// </summary>
        /// <param name="filePath">The path to the file to be parsed.</param>
        /// <returns>The data set containing data parsed from the file.</returns>
        void Parse(string filePath);
    }
}
