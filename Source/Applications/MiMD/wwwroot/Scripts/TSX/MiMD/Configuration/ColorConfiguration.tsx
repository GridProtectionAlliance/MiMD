//******************************************************************************************************
//  ColorConfig.tsx - Gbtc
//
//  Copyright � 2020, Grid Protection Alliance.  All Rights Reserved.
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
//  09/15/2023 - Preston Crawford
//       Generated original version of source code.
//
//******************************************************************************************************


import React from 'react';
import { MiMD } from '../global';
import { Modal } from "@gpa-gemstone/react-interactive"
import { TrashCan, Pencil, Plus } from "@gpa-gemstone/gpa-symbols"
import Table from "@gpa-gemstone/react-table"
import { CompactPicker } from 'react-color';
import { Input } from "@gpa-gemstone/react-forms"

const ConfigurationFileRules = () => {
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [colors, setColors] = React.useState<MiMD.IConfigColors[]>([]);
    const [edit, setEdit] = React.useState<boolean>(true);
    const [newColors, setNewColors] = React.useState<MiMD.IConfigColors[]>([]);
    const [deletedColors, setDeletedColors] = React.useState<MiMD.IConfigColors[]>([]);
    const [changedColors, setChangedColors] = React.useState<MiMD.IConfigColors[]>([]);


    React.useEffect(() => {
        getColors();
    }, [showModal]);


    function getColors() {
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/ColorConfig`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: MiMD.IConfigColors[]) => {
            if (data == null)
                return
            setColors(data);

        });
        return () => { if (handle != null && handle.abort != null) handle.abort(); }
    }

    function addColors(newColors: MiMD.IConfigColors[]) {
        if (!newColors || newColors.length === 0)
            return () => { }

        const handles: JQuery.jqXHR[] = [];

        for (const color of newColors) {
            const handle = $.ajax({
                type: "POST",
                url: `${homePath}api/MiMD/ColorConfig/Add`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(color),
                dataType: 'json',
                cache: false,
                async: true
            });

            handle.done((data: MiMD.IConfigRules) => {
                if (data == null)
                    return;
            });

            handles.push(handle);
        }

        setNewColors([]);

        return () => {
            for (const handle of handles) {
                if (handle != null && handle.abort != null)
                    handle.abort();
            }
        };
    }

    function updateColors(updatedColors: MiMD.IConfigColors[]) {
        if (!updatedColors || updatedColors.length === 0)
            return () => { }

        const handles: JQuery.jqXHR[] = [];

        for (const color of updatedColors) {
            const handle = $.ajax({
                type: "PATCH",
                url: `${homePath}api/MiMD/ColorConfig/Update`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(color),
                dataType: 'json',
                cache: false,
                async: true
            });

            handle.done((data: MiMD.IConfigRules) => {
                if (data == null)
                    return;
            });

            handles.push(handle);
        }

        setChangedColors([]);

        return () => {
            for (const handle of handles) {
                if (handle != null && handle.abort != null)
                    handle.abort();
            }
        };

    }

    function deleteColors(deletedColors: MiMD.IConfigColors[]) {
        if (!deletedColors || deletedColors.length === 0)
            return () => { };

        const handles: JQuery.jqXHR[] = [];

        for (const color of deletedColors) {
            const handle = $.ajax({
                type: "DELETE",
                url: `${homePath}api/MiMD/ColorConfig/Delete`,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(color),
                dataType: 'json',
                cache: false,
                async: true
            });
            handle.done((data: MiMD.IConfigRules) => {
                if (data == null)
                    return;
            });

            handles.push(handle);
        }

        setDeletedColors([]);

        return () => {
            for (const handle of handles) {
                if (handle != null && handle.abort != null)
                    handle.abort();
            }
        };

    }


    function updateColor(updatedColor: MiMD.IConfigColors) {
        const originalColorsIndex = colors.findIndex(color => color.ID === updatedColor.ID);
        const newColorIndex = newColors.findIndex(color => color.ID === updatedColor.ID);
        const changedColorIndex = changedColors.findIndex(color => color.ID === updatedColor.ID);

        // If the updatedColor ID is negative, it's a new color.
        if (updatedColor.ID < 0) {
            if (newColorIndex === -1) {
                // Add the new updatedColor to newColors if it's not already present
                setNewColors(prev => [...prev, updatedColor]);
            } else {
                // Update the new color if it's already in newRules
                const updatedNewRulesList = [...newColors];
                updatedNewRulesList[newColorIndex] = updatedColor;
                setNewColors(updatedNewRulesList);
            }
        } else {
            // If the rule exists in original rules and the updated rule is not in newRules, modify or add it to changedRules
            if (originalColorsIndex !== -1) {
                if (changedColorIndex !== -1) {
                    // Update the changedRule if it's already in changedRules
                    const updatedChangedRules = [...changedColors];
                    updatedChangedRules[changedColorIndex] = updatedColor;
                    setChangedColors(updatedChangedRules);
                } else {
                    // If it's not in changedRules, add it
                    setChangedColors(prev => [...prev, updatedColor]);
                }
            }
        }

        // Update the rule in the main list or add it if it doesn't exist.
        if (originalColorsIndex !== -1) {
            const updatedRulesList = [...colors];
            updatedRulesList[originalColorsIndex] = updatedColor;
            setColors(updatedRulesList);
        } else {
            setColors(prev => [...prev, updatedColor]);
        }

    }

    const addBlankRow = () => {
        const uniqueID = Math.floor(Math.random() * -10000);
        // Create a blank rule with negative id to indicate its new
        const newColor: MiMD.IConfigColors = {
            ID: uniqueID,
            Color: "FF0000",
            Threshold: "0"
        }
        setColors(prev => [...prev, newColor])
    }

    const deleteColor = (colorID: number) => {
        const updatedColors = colors.filter(color => color.ID !== colorID);
        const deletedColor = colors.filter(color => color.ID === colorID)[0];
        const filteredNewColors = newColors.filter(color => color.ID !== colorID);

        setColors(updatedColors);
        setNewColors(filteredNewColors);

        if (colorID > 0) {
            setDeletedColors([...deletedColors, deletedColor])
        }
    }

    return (
        <>

            <button className={"btn btn-primary"} onClick={() => setShowModal(!showModal)}>
                Colors
            </button>
            <Modal
                Title={"Colors for Date Last Changed"}
                CallBack={(confirmed, isButton) => {
                    if (confirmed) {
                        console.log('qerying db... newColors:', newColors)
                        addColors(newColors);
                        deleteColors(deletedColors);
                        updateColors(changedColors);
                    }
                    if (isButton || !confirmed) {
                        setShowModal(!showModal);
                    }
                }}
                Show={showModal}
                Size={"xlg"}
                ShowX={true}
            >
                <div className="card">
                    <div className="card-body">
                        {colors ?
                            <Table<MiMD.IConfigColors>
                                cols={[
                                    {
                                        key: 'ColorPicker',
                                        label: 'Color',
                                        headerStyle: { width: 'calc(30% - 8.25em - 130px)' },
                                        rowStyle: { width: 'calc(30% - 8.25em - 130px)' },
                                        content: (item) => (
                                            <CompactPicker
                                                color={item.Color}
                                                onChangeComplete={(updatedColor) => {
                                                    item.Color = updatedColor.hex
                                                    updateColor(item)
                                                }}
                                                triangle={"hide"}
                                            />
                                        )
                                    },
                                    {
                                        key: 'Threshold',
                                        label: 'Threshold',
                                        headerStyle: { width: 'calc(60% - 8.25em)' },
                                        rowStyle: { width: 'calc(60% - 8.25em)' },
                                        content: (item) => <Input<MiMD.IConfigColors> Record={item} Field={'Threshold'} Disabled={edit} Label={''} Setter={(updatedColor) => updateColor(updatedColor)} Valid={() => true} />
                                    },
                                    {
                                        key: 'Buttons',
                                        label: '',
                                        headerStyle: { width: '130px' },
                                        rowStyle: { width: '130px' },
                                        content: (item) =>
                                            <>
                                                <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => setEdit(!edit)}>
                                                    {Pencil}
                                                </button>
                                                <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => deleteColor(item.ID)}>
                                                    {TrashCan}
                                                </button>
                                            </>
                                    }
                                ]}
                                tableClass="table table-hover"
                                data={colors}
                                sortKey={""}
                                ascending={true}
                                onSort={() => { }}
                                onClick={() => { }}
                                theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                tbodyStyle={{ display: 'block', width: '100%' }}
                                rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                selected={() => false}
                            />
                            : <></>}
                    </div>
                    <button onClick={addBlankRow} style={{ cursor: 'pointer' }} >
                        <a> {Plus}</a>
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default ConfigurationFileRules;
