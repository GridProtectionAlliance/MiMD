//******************************************************************************************************
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
import Table from '@gpa-gemstone/react-table';
import * as _ from 'lodash';

declare var homePath: string;

interface IProps { MeterId: number }
interface IFile { ID: number, FileName: string }

const DowloadFiles = (props: IProps) => {

    const [fileList, setFileList] = React.useState<IFile[]>([]);
    const [ascending, setAscending] = React.useState<boolean>(false);

    React.useEffect(() => {
        let handle = getFiles();
        return () => {
            if (handle != null && handle.abort != null) handle.abort();
        }
    }, [props.MeterId, ascending]);

    function getFiles(): JQuery.jqXHR<Array<IFile>> {
        if (props.MeterId == -1 || props.MeterId == undefined) return null;
        let handle = $.ajax({
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
                  cols={[
                      { key: 'FileName', field: 'FileName', label: 'File', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                      { key: 'button', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => <button type="button" className="btn btn-primary btn-block" onClick={() => window.open(`${homePath}api/MiMD/PRC002/DowloadFile/${item.ID}`)}> Download </button> },
                  ]}
                  tableClass="table table-hover"
                  data={fileList}
                  sortKey={'FileName'}
                  ascending={ascending}
                  onSort={(d) => { setAscending(!ascending)}}
                  onClick={(d) => { }}
                  theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                  tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                  rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                  selected={(item) => false}
                  />
        </>
    )
}


export default DowloadFiles;

