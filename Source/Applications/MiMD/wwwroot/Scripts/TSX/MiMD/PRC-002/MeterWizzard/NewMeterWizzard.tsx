//******************************************************************************************************
//  NewMeterWizzard.tsx - Gbtc
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
//  02/02/2021 - C. Lackner
//       Updated PAR Parser and moved to gpa-gemstone UI.
//
//******************************************************************************************************

import * as React from 'react';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";

import { PRC002 } from '../ComplianceModels';
import SelectMeter from './SelectMeter';
import BaseConfigWindow from './BaseConfigWindow';
import { LoadingScreen, Modal, ToolTip, Warning } from '@gpa-gemstone/react-interactive';


declare var homePath: string;

interface IProps { show: boolean, setShow: (s: boolean) => void}
type state = 'Meter'|'BaseConfig'|'File Load'| 'Edit Field' | 'New BaseConfig' 

const NewMeterWizzard = (props: IProps) => {
    let history = useHistory();

    const [meter, setMeter] = React.useState<PRC002.IMeter>(null);
    const [step, setStep] = React.useState<state>('Meter');
    const [showWarning, setShowWarning] = React.useState<boolean>(false);
    const [showComplete, setShowComplete] = React.useState<boolean>(false);
    const [hover, setHover] = React.useState<'Cancel' | 'Confirm' | 'None'>('None');

    const [showLoading, setShowLoading] = React.useState<boolean>(false);

    const [baseConfig, setBaseConfig] = React.useState<Map<number, [PRC002.IBaseConfig, PRC002.IConfigField[]]>>(new Map<number, [PRC002.IBaseConfig, PRC002.IConfigField[]]>());
    const [errorMsg, setErrorMsg] = React.useState<string[]>([]);

    const [reset, setReset] = React.useState<number>(0);
    const [cont, setCont] = React.useState<number>(0);


    React.useEffect(() => {
        if (!props.show)
            Cancel();
    }, [props.show]);

    

    function Cancel() {
        setStep('Meter');
        setMeter(undefined)
        setBaseConfig(new Map<number, [PRC002.IBaseConfig, PRC002.IConfigField[]]>());
        setErrorMsg([])
    }

    function NextStep() {
        if(!stepComplete)
            return;

        if (step == 'Meter') {
            setStep('BaseConfig')
            return;
        }
        if (step == 'New BaseConfig') {
            setCont(x=> x+1)
        }
        if (step == 'File Load') {
            setCont(x => x + 1)
        }
        if (step == 'BaseConfig') {
            setShowComplete(true);
        }

        if (step == 'Edit Field') {
            setCont(x => x + 1)
        }
        return;
    }

    function PrevStep() {
        if (step == 'Meter')
            setShowWarning(true);
        if (step == 'BaseConfig')
            setReset(x=> x+1)
        if (step == 'New BaseConfig' || step == 'File Load') {
            setReset(x => x + 1)
        }
        if (step == 'Edit Field')
            setReset(x => x + 1)
    }

    function getTitle() {
        if (step == 'Meter')
            return 'Select a Meter'
        if (step == 'BaseConfig')
            return "Setup Base Configuration"
        if (step == 'File Load')
            return 'Load Configuration File'
        if (step == 'New BaseConfig')
            return 'Add New Base Configuration'
        if (step == 'Edit Field')
            return "Edit Configuration Field"
    }



    function Submit() {
        // Start By Creating the meter
        let configFields = [];

        [...baseConfig.keys()].forEach(key => {
            baseConfig.get(key)[1].forEach(fld => {
                configFields.push({
                    BaseConfigId: key,
                    Comparison: fld.Comparison,
                    FieldType: fld.FieldType,
                    Name: fld.Name,
                    Value: fld.Value });
            })
        })
        $.ajax({
            type: "POST",
            url: `${homePath}api/MiMD/PRC002/ComplianceMeter/Add`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(
                {
                    Meter: { MeterId: meter.ID, Active: false, Reviewed: false },
                    BaseConfiguration: [...baseConfig.values()].map(item => { return { Name: item[0].Name, Pattern: item[0].Pattern, ID: item[0].ID }; }),
                    ConfigurationFields: configFields
                }),
            dataType: 'json',
            cache: false,
            async: true
        }).then((d) => history.go(0));
        
        props.setShow(false);
    }

    

    const stepComplete = (step == 'Meter' ? meter != null : errorMsg.length == 0)
  
    return (
        <>
            <Modal Show={props.show} CallBack={(confirm, isButton) => {
                if (confirm)
                    NextStep();
                if (!isButton)
                    setShowWarning(true);
                if (!confirm && isButton)
                    PrevStep();
            }}
                Title={getTitle()} ConfirmText={(step == 'Meter' || step == 'File Load' ? 'Next' : 'Save')}
                ConfirmToolTip={'WizardConfirm'} Size={'lg'} OnHover={setHover}
                ConfirmBtnClass={'btn-success' + (stepComplete ? '' : ' disabled')}
                CancelText={(step == 'Meter' ? 'Close' : 'Back')}
                ShowX={true}
            >
                {step == 'Meter' ? <SelectMeter setMeter={(meter) => { setMeter(meter); }} selectedMeter={meter} /> : null}
                {step == 'BaseConfig' || step == 'New BaseConfig' || step == 'File Load' || step == 'Edit Field' ?
                    <BaseConfigWindow setLoading={setShowLoading} BaseConfigs={baseConfig} setBaseConfig={setBaseConfig} setError={setErrorMsg} setStep={setStep} step={step} cont={cont} reset={reset} />
                    : null}
               
            </Modal>
            <Warning Title={'Exit Wizard'} CallBack={(confirm) => { setShowWarning(false); if (confirm) props.setShow(false); }} Show={showWarning}
                Message={'This Will close the Wizard and all progress will be lost.'} />
            <ToolTip Show={hover == 'Confirm' && !stepComplete} Position={'top'} Target={'WizardConfirm'} Zindex={9999}>
                {step == 'Meter' ? <p> <i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i>A Meter needs to be selected.</p> : null}
                {step != 'Meter' ? errorMsg.map((item,index) => <p key={index}><i style={{ marginRight: '10px', color: '#dc3545' }} className="fa fa-exclamation-circle"></i> {item}</p>) : null}
            </ToolTip>
            <Warning Title={'Save PRC002 Configuration'} CallBack={(confirm) => { setShowComplete(false); if (confirm) Submit(); }} Show={showComplete}
                Message={'This will add the selected meter to PRC002 monitoring and save the base configuration. Note that the status of this meter will not update until the first configuration File is downloaded.'} />
            <LoadingScreen Show={showLoading} />
        </>
    )
}


export default NewMeterWizzard;

