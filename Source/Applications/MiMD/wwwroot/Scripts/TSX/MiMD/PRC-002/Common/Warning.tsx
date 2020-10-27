//******************************************************************************************************
//  Warning.tsx - Gbtc
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
//  09/23/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';


declare var homePath: string;

interface IProps { Title: string, Content: string, Confirm: string, Action: (result: boolean) => void, Id: string, Deny?: string }


const Warning = (props: IProps) => {

   
  
    function confirmWarning() {
        ($('#' + props.Id) as any).modal('hide');
        props.Action(true);
    }

    function cancelWarning() {
        ($('#' + props.Id) as any).modal('hide');
        props.Action(false);
    }

    return (
        <div className="modal" id={props.Id}>
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{props.Title}</h4>
                    </div>
                    <div className="modal-body">
                        <p>{props.Content}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={() => confirmWarning()}>{props.Confirm}</button>
                        {props.Deny == undefined ? null : <button type="button" className="btn btn-danger"  onClick={() => cancelWarning() }>{props.Deny}</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Warning;

