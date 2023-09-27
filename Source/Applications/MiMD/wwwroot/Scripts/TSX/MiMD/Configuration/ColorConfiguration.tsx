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
import { Modal, Warning } from "@gpa-gemstone/react-interactive"
import { TrashCan, Pencil } from "@gpa-gemstone/gpa-symbols"
import Table from "@gpa-gemstone/react-table"
import { BlockPicker } from 'react-color';
import { Input } from "@gpa-gemstone/react-forms"
import { useAppDispatch, useAppSelector } from '../hooks';
import { ConfigurationColorSlice } from "../Store/Store"
import * as _ from 'lodash';

type state = 'base' | 'preEdit' | 'changeMade' ;

const ColorConfiguration = () => {
    const dispatch = useAppDispatch();
    const color = useAppSelector(ConfigurationColorSlice.Data);
    const [colors, setColors] = React.useState<MiMD.IConfigColors[]>(color);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [editModal, setEditModal] = React.useState<boolean>(false);
    const [edit, setEdit] = React.useState<boolean>(false);
    const [currentEditColor, setCurrentEditColor] = React.useState<MiMD.IConfigColors>({ID: -1, Color:'#000000', Threshold: "4"});
    const [deleteWarning, setDeleteWarning] = React.useState<boolean>(false);
    const [state, setState] = React.useState<state>('base')
    const colorsArray = ["#800000","#0029A3","#007A29","#FFFFC2","#E3242B","#0066CC","#33CC33","#4287f5","#FF0000", "#FFF380","#afd8f8","#cb4b4b","#4da74d","#008C48","#CD5C5C","#FFA500","#FED8B1", "#FF8C00", "#FFFF00", "#FF6700"];


    React.useEffect(() => {
        dispatch(ConfigurationColorSlice.Fetch());
    }, [dispatch]);
    
    React.useEffect(() => {
        setColors(color);
    }, [color]);

    const updateColor = async (color: MiMD.IConfigColors) => {
        if (!color) return () => { }

        // If ID is negative it is a new color so add it instead of update
        if (color.ID > -1) {
           await dispatch(ConfigurationColorSlice.DBAction({ verb: "PATCH", record: color }));
        } else {
            await dispatch(ConfigurationColorSlice.DBAction({ verb: "POST", record: color }));
        }

        await dispatch(ConfigurationColorSlice.Fetch());
    }


    const deleteColor = async (color: MiMD.IConfigColors) => {
        if (!color)
            return () => { }

        //If the colors ID is negative they deleted a color that hasnt been saved yet so dont try to delete
        if (color.ID > -1) {
            await dispatch(ConfigurationColorSlice.DBAction({ verb: "DELETE", record: color }));
        } 
        await dispatch(ConfigurationColorSlice.Fetch());
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


    const handleEdit = (color: MiMD.IConfigColors) => {
        setEditModal(!editModal);
        handleColorChange(color);
    }

    const handleDelete = (color: MiMD.IConfigColors) => {
        setDeleteWarning(!deleteWarning);
        setCurrentEditColor(color);
    }

    const handleColorChange = (color: MiMD.IConfigColors) => {
        setCurrentEditColor(color);
    }

    console.log('colorfromSlice:', color)

    return (
        <>
            <button className="btn btn-primary btn-block" onClick={() => setShowModal(!showModal)}>
                Colors
            </button>
            {colors &&
            <Modal
                Title={"Colors for Date Last Changed"}
                CallBack={(confirmed, isButton) => {
                    if (isButton) {
                        if (confirmed) {
                            setEdit(!edit);
                            setState('preEdit');
                            if (state == 'changeMade') {
                                setShowModal(!showModal);
                            }
                        }
                        else {
                            setShowModal(!showModal);
                        }
                    } else if (!confirmed && !isButton) {
                        setShowModal(!showModal);
                    }
                }}
                Show={showModal}
                Size={"xlg"}
                ShowX={true}
                ConfirmText={ state == 'changeMade' ? "Save": "Edit"}
                ConfirmBtnClass={state == 'changeMade' ? "btn-success" : "btn-primary"}
                CancelText={"Exit"}
            >
                <div className="card">
                    <div className="card-body">
                            <button className="btn btn-primary pull-right" onClick={() => addBlankRow()} style={{ cursor: 'pointer', marginBottom: '1em' }} >
                                Add
                            </button>
                            <Table<MiMD.IConfigColors>
                                cols={[
                                    {
                                        key: 'ColorPicker',
                                        label: 'Color',
                                        headerStyle: { width: 'calc(30% - 8.25em - 130px)' },
                                        rowStyle: { width: 'calc(30% - 8.25em - 130px)' },
                                        content: (item) => (
                                            <button className="btn btn-primary" style={{backgroundColor: item.Color, width: '10rem',  height: '3rem'}}></button>
                                        )
                                    },
                                    {
                                        key: 'Threshold',
                                        label: 'Threshold',
                                        headerStyle: { width: 'calc(60% - 8.25em)' },
                                        rowStyle: { width: 'calc(60% - 8.25em)' },
                                        content: (item) => <Input<MiMD.IConfigColors> Record={item} Field={'Threshold'} Disabled={true} Label={''} Setter={() => true} Valid={() => true} />
                                    },
                                    {
                                        key: 'Buttons',
                                        label: '',
                                        headerStyle: { width: '130px' },
                                        rowStyle: { width: '130px' },
                                        content: (item) =>
                                            <>
                                                {edit ? (
                                                    <>
                                                        <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => handleEdit(item)}>
                                                            {Pencil}
                                                        </button>
                                                        <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => handleDelete(item)}>
                                                            {TrashCan}
                                                        </button>
                                                    </>
                                                ) : null}
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
                        <Modal
                            Title={"Edit Configuration Duration"}
                            CallBack={(confirmed, isButton) => {
                                if (isButton) {
                                    if (confirmed) {
                                        updateColor(currentEditColor);
                                        setEditModal(!editModal);
                                        setState('changeMade');
                                    }
                                    else {
                                        setEditModal(!editModal);
                                    }
                                } else if (!confirmed && !isButton) {
                                    setEditModal(!editModal);
                                }
                            }}
                            Show={editModal}
                            ShowX={true}
                            ConfirmBtnClass={"btn-success"}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <BlockPicker
                                    color={currentEditColor.Color}
                                    colors={colorsArray}
                                    onChangeComplete={(updatedColor) => {
                                        const newColor = { ...currentEditColor, Color: updatedColor.hex };
                                        handleColorChange(newColor);
                                    }}
                                    triangle={"hide"}
                                />
                            </div>
                            <Input<MiMD.IConfigColors> Style={{ marginTop: '1rem' }} Record={currentEditColor} Field={'Threshold'} Disabled={false}Label={'Threshold'}
                                Setter={(updatedColor) => handleColorChange(updatedColor)}
                                Valid={() => true}
                             />
                        </Modal>
                        <Warning Title={'Delete Configuration Duration'}
                            CallBack={(confirmed) => {
                                if (confirmed) {
                                    deleteColor(currentEditColor); setDeleteWarning(!deleteWarning); setState('changeMade');
                                } else { setDeleteWarning(!deleteWarning) }
                            }}
                            Show={deleteWarning}
                            Message={'This will permanently delete this Configuration Duration. Please confirm that this is desired. This action can not be undone.'}
                        />
                    </div>
                </div>
                </Modal>
            }
        </>
    );
}

export default ColorConfiguration;
