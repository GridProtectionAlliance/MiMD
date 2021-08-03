//******************************************************************************************************
//  User.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  08/27/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { User } from '@gpa-gemstone/common-pages';
import { MiMDSecurityRoleSlice, UserAccountSlice, UserAdditionalFieldSlice, ValueListGroupSlice, ValueListSlice } from '../Store/Store';

declare var homePath: string;


 const UserPage =  (props: { UserID: string }) => {
    const history = useHistory();

    return <User
        UserID={props.UserID}
        OnDelete={() => history.push({ pathname: homePath + 'index.cshtml?name=Users', state: {} })}
        UserSlice={UserAccountSlice}
        ValueListGroupSlice={ValueListGroupSlice}
        ValueListItemSlice={ValueListSlice}
        AdditionalFieldSlice={UserAdditionalFieldSlice}
        SecurityRoleSlice={MiMDSecurityRoleSlice}

    />
}

export default UserPage
