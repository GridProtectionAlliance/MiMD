﻿//******************************************************************************************************
//  DowloadFile.tsx - Gbtc
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
//  10/27/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import { Table, Column } from "@gpa-gemstone/react-table";

declare let homePath: string;

interface IProps { MeterId: number }
interface IFile { ID: number, FileName: string }

const DowloadFiles = (props: IProps) => {

    const [fileList, setFileList] = React.useState<IFile[]>([]);
    const [ascending, setAscending] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handle = getFiles();
        return () => {
            if (handle != null && handle.abort != null) handle.abort();
        }
    }, [props.MeterId, ascending]);

    function getFiles(): JQuery.jqXHR<Array<IFile>> {
        if (props.MeterId == -1 || props.MeterId == undefined) return null;
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/MiMD/PRC002/GetFiles/${props.MeterId}/${ascending? 1: 0}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done((data: Array<IFile>) => {
            if (data == null)
                return
            setFileList(data);

        });

        return handle;
    }

    return (
        <>
            <Table<IFile>
                TableClass="table table-hover"
                Data={fileList}
                SortKey={'FileName'}
                Ascending={ascending}
                OnSort={() => { setAscending(!ascending) }}
                OnClick={() => { }}
                TableStyle={{ padding: 0, width: '100%', tableLayout: 'fixed', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                TheadStyle={{ fontSize: 'smaller', tableLayout: 'fixed', display: 'table', width: '100%' }}
                TbodyStyle={{ display: 'block', overflowY: 'auto', flex: 1 }}
                RowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                Selected={() => false}
                KeySelector={item=> item.ID}
            >
                <Column<IFile>
                    Key="FileName"
                    Field="FileName"
                    AllowSort={true}
                    HeaderStyle={{ width: 'auto' }}
                    RowStyle={{ width: 'auto' }}
                > File
                </Column>
                <Column<IFile>
                    Key="button"
                    AllowSort={false}
                    HeaderStyle={{ width: 'auto' }}
                    RowStyle={{ width: 'auto' }}
                    Content={row => (
                        <button type="button" className="btn btn-info" onClick={() => window.open(`${homePath}api/MiMD/PRC002/DowloadFile/${row.item.ID}`)}> Download </button>
                    )}
                > {" "}
                </Column>
            </Table>
        </>
    );
}


export default DowloadFiles;

