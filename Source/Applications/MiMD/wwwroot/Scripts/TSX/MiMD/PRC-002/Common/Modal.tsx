//******************************************************************************************************
//  BaseConfig.tsx - Gbtc
//
//  Copyright © 2019, Grid Protection Alliance.  All Rights Reserved.
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
//  09/17/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '../../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import { MiMD } from '../../global';
import FormSelect from '../../CommonComponents/FormSelect';
import FormInput from '../../CommonComponents/FormInput';;
import { PRC002} from '../ComplianceModels';
import { Hash } from 'crypto';


declare var homePath: string;


interface IProps { content: () => JSX.Element, Title: string, Id: string, PosLabel?: string, NegLabel?: string, Close?: () => boolean, Confirm?: () => boolean }


const Modal = (props: IProps) => {


    function Confirm() {
        if (props.Confirm != undefined) {
            if (props.Confirm())
                $('#' + props.Id).hide();
        }
        else
            $('#' + props.Id).hide();
    }
    function Close() {
        if (props.Close != undefined) {
            if (props.Close())
                $('#' + props.Id).hide();
        }
        else
            $('#' + props.Id).hide();
    }
    return (
        <>
                <div className="modal" id={props.Id}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{props.Title}</h4>
                                <button type="button" className="close" data-dismiss="modal" onClick={() => Close()}>&times;</button>
                            </div>
                            <div className="modal-body">
                                {props.content()}
                            </div>
                            <div className="modal-footer">
                                {props.PosLabel == undefined ? null : < button type="button" className="btn btn-primary" onClick={Confirm}>{props.PosLabel}</button>}
                                {props.NegLabel == undefined ? null : < button type="button" className="btn btn-danger" data-dismiss="modal" onClick={Close}>{props.NegLabel}</button>}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Modal;

