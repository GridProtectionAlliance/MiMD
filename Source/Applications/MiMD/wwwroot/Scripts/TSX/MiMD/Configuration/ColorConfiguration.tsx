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
import { Modal, Warning } from "@gpa-gemstone/react-interactive";
import { ReactIcons } from "@gpa-gemstone/gpa-symbols";
import { Table, Column } from "@gpa-gemstone/react-table";
import { BlockPicker } from 'react-color';
import { Input } from "@gpa-gemstone/react-forms";
import { useAppDispatch, useAppSelector } from '../hooks';
import { ConfigurationColorSlice } from "../Store/Store";

const ColorConfiguration = () => {
    const dispatch = useAppDispatch();
    const color = useAppSelector(ConfigurationColorSlice.Data);
    const [colors, setColors] = React.useState<MiMD.IConfigColors[]>(color);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [editModal, setEditModal] = React.useState<boolean>(false);
    const [currentEditColor, setCurrentEditColor] = React.useState<MiMD.IConfigColors>({ID: -1, Color:'#000000', Threshold: "4"});
    const [deleteWarning, setDeleteWarning] = React.useState<boolean>(false);
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
        if (color == null) return;

        //If the colors ID is negative they deleted a color that hasnt been saved yet so dont try to delete
        if (color.ID > -1) {
            await dispatch(ConfigurationColorSlice.DBAction({ verb: "DELETE", record: color }));
        } 
        await dispatch(ConfigurationColorSlice.Fetch());
    }

    const addBlankRow = () => {
        setCurrentEditColor({
            ID: -1,
            Color: "#FF0000",
            Threshold: "0"
        });
        setEditModal(true);
    }

    const handleEdit = (color: MiMD.IConfigColors) => {
        setEditModal(true);
        setCurrentEditColor(color);
    }

    const handleDelete = (color: MiMD.IConfigColors) => {
        setDeleteWarning(true);
        setCurrentEditColor(color);
    }

    return (
        <>
            <button className="btn btn-info" onClick={() => setShowModal(!showModal)}>
                Configure Colors for Date Last Changed
            </button>
            <Modal
                Title={"Colors for Date Last Changed"}
                CallBack={() => setShowModal(false)}
                Show={showModal}
                Size={"xlg"}
                ShowX={true}
                ShowCancel={false}
                ShowConfirm={false}
            >
                <div className="card">
                    <div className="card-body">
                        <button className="btn btn-info pull-right" onClick={() => addBlankRow()} style={{ cursor: 'pointer', marginBottom: '1em' }} >
                            Add
                        </button>
                        <Table<MiMD.IConfigColors>
                            TableClass="table table-hover"
                            Data={colors}
                            SortKey={""}
                            Ascending={true}
                            OnSort={() => { }}
                            OnClick={() => { }}
                            TheadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            TbodyStyle={{ display: 'block', width: '100%' }}
                            RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                            Selected={() => false}
                            KeySelector={item => item.ID}
                        >
                            <Column<MiMD.IConfigColors>
                                Key="Color"
                                Field="Color"
                                AllowSort={false}
                                HeaderStyle={{ width: '30%' }}
                                RowStyle={{ width: '30%' }}
                                Content={(row) => (
                                    <button className="btn btn-primary" style={{ backgroundColor: row.item.Color, width: '10rem', height: '3rem' }}></button>
                                )}
                            > Color
                            </Column>
                            <Column<MiMD.IConfigColors>
                                Key="Threshold"
                                Field="Threshold"
                                AllowSort={false}
                                HeaderStyle={{ width: 'auto' }}
                                RowStyle={{ width: 'auto' }}
                                Content={(row) => (
                                    <Input<MiMD.IConfigColors> Record={row.item} Field={'Threshold'} Disabled={true} Label={''} Setter={() => true} Valid={() => true} />
                                )}
                            > Threshold
                            </Column>
                            <Column<MiMD.IConfigColors>
                                Key="Buttons"
                                HeaderStyle={{ width: '130px' }}
                                RowStyle={{ width: '130px' }}
                                AllowSort={false}
                                Content={(row) => (
                                    <>
                                        <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => handleEdit(row.item)}>
                                            <ReactIcons.Pencil />
                                        </button>
                                        <button style={{ marginTop: '6px', textAlign: 'center' }} className="btn btn-sm" onClick={() => handleDelete(row.item)}>
                                            <ReactIcons.TrashCan />
                                        </button>
                                    </>
                                )}
                            > {" "}
                            </Column>

                        </Table>
                        <Modal
                            Title={"Edit Configuration Duration"}
                            CallBack={(confirmed, isButton) => {
                                if (confirmed) updateColor(currentEditColor);
                                setEditModal(false);
                            }}
                            Show={editModal}
                            ShowX={true}
                            ShowCancel={false}
                            ConfirmText={"Save"}
                            ConfirmBtnClass={"btn-primary"}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <BlockPicker
                                    color={currentEditColor.Color}
                                    colors={colorsArray}
                                    onChangeComplete={(updatedColor) => {
                                        setCurrentEditColor({ ...currentEditColor, Color: updatedColor.hex });
                                    }}
                                    triangle={"hide"}
                                />
                            </div>
                            <Input<MiMD.IConfigColors> Style={{ marginTop: '1rem' }} Record={currentEditColor} Field={'Threshold'} Disabled={false}Label={'Threshold'}
                                Setter={setCurrentEditColor}
                                Valid={() => true}
                             />
                        </Modal>
                        <Warning Title={'Delete Configuration Duration'}
                            CallBack={(confirmed) => {
                                if (confirmed) deleteColor(currentEditColor); 
                                setDeleteWarning(false);
                            }}
                            Show={deleteWarning}
                            Message={'This will permanently delete this Configuration Duration. Please confirm that this is desired. This action can not be undone.'}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ColorConfiguration;
