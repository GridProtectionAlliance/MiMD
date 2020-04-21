//******************************************************************************************************
//  SystemCenter.tsx - Gbtc
//
//  Copyright © 2019, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with  work for additional information regarding copyright ownership.
//  The GPA licenses  file to you under the MIT License (MIT), the "License"; you may not use 
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
//  08/22/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import * as React from 'react';
import Table from '../CommonComponents/Table';
import * as _ from 'lodash';
import { useHistory } from "react-router-dom";
import FormInput from '../CommonComponents/FormInput';
import FormTextArea from '../CommonComponents/FormTextArea';
import { OpenXDA, SystemCenter } from '../global';
import AssetAttributes from '../AssetAttribute/Asset';
import ExternalDBUpdate from '../CommonComponents/ExternalDBUpdate';

declare var homePath: string;

type FieldName = 'Location.LocationKey' | 'Location.Name' | 'Note.Note' | 'Meter.AssetKey' | 'Asset.AssetKey';
interface Search {
    Field: FieldName,
    SearchText: string
}   
interface Location {
    ID: number, LocationKey: string, Name: string, Assets: number, Meters: number
}


const ByLocation: SystemCenter.ByComponent = (props) => {
    let history = useHistory();
    const [search, setSearch] = React.useState<Array<Search>>([{ Field: 'Location.LocationKey', SearchText: '' }]);
    const [data, setData] = React.useState<Array<Location>>([]);
    const [sortField, setSortField] = React.useState<string>('LocationKey');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [newLocation, setNewLocation] = React.useState<OpenXDA.Location>(getNewLocation());
    const [allLocations, setAllLocations] = React.useState<Array<string>>([]);

    React.useEffect(() => {
        return getData();
    }, []);

    function getData() {
        setNewLocation(getNewLocation());
        let handle1 = getLocations();
        let handle2 = getAllLocations();
        handle1.done((data: Array<Location>) => setData(data));
        handle2.done((data: Array<Location>) => setAllLocations(data.map(d => d.LocationKey.toLowerCase())));
        return function cleanup() {
            if (handle1.abort != null)
                handle1.abort();
            if (handle2.abort != null)
                handle2.abort();
        }
    }

    function getNewLocation() {
        return {
            ID: 0,
            LocationKey: null,
            Name: null,
            Alias: null,
            Description: null,
            Latitude: null,
            Longitude: null,
            ShortName: null
        }
    }
    function getLocations(): JQuery.jqXHR<Array<Location>> {
        return $.ajax({
            type: "Post",
            url: `${homePath}api/OpenXDA/Location/SearchableList`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(search),
            cache: false,
            async: true
        });
    }

    function getAllLocations(): JQueryXHR {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Location`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
    }

    function addNewLocation() {
        $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/Location/Add`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(newLocation),
            cache: false,
            async: true
        }).done((data) => getData());

    }

    function handleSelect(item) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Location&LocationID=' + item.row.ID, state: {} })
    }

    function valid(field: keyof(OpenXDA.Location)): boolean {
        if (field == 'LocationKey')
            return newLocation.LocationKey != null && allLocations.indexOf(newLocation.LocationKey.toLowerCase()) < 0 && newLocation.LocationKey.length > 0 && newLocation.LocationKey.length <= 50;
        else if (field == 'Name')
            return newLocation.Name != null && newLocation.Name.length > 0 && newLocation.Name.length <= 200;
        else if (field == 'Alias')
            return newLocation.Alias == null || newLocation.Alias.length <= 200;
        else if (field == 'ShortName')
            return newLocation.ShortName == null || newLocation.ShortName.length <= 50;
        else if (field == 'Latitude')
            return newLocation.Latitude != null && AssetAttributes.isRealNumber(newLocation.Latitude);
        else if (field == 'Longitude')
            return newLocation.Longitude != null && AssetAttributes.isRealNumber(newLocation.Longitude);
        else if (field == 'Description')
            return true;
        return false;
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ width: '100%' }}>
                    <ul className="navbar-nav mr-auto" style={{ width: '100%' }}>
                        <li className="nav-item" style={{ width: '50%', paddingRight: 10 }}>
                            <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                                <legend className="w-auto" style={{ fontSize: 'large' }}>Search:</legend>
                                <form>
                                    {
                                        search.map((s, index, a) => {

                                            return (
                                                <div className="input-group" key={index} style={{ border: '1px solid lightgray' }}>
                                                    <div className="input-group-prepend">
                                                        <select className='form-control' style={{ height: '100%' }} value={s.Field} onChange={(evt) => {
                                                            s.Field = evt.target.value as FieldName;
                                                            let array = _.clone(a);
                                                            setSearch(array);
                                                        }}>
                                                            <option value='Location.LocationKey'>Key</option>
                                                            <option value='Location.Name'>Name</option>
                                                            <option value='Note.Note'>Note</option>
                                                            <option value='Meter.AssetKey'>Meter</option>
                                                            <option value='Asset.AssetKey'>Asset</option>

                                                        </select>
                                                    </div>
                                                    <input className='form-control' type='text' placeholder='Search...' value={s.SearchText} onChange={(evt) => {
                                                        s.SearchText = evt.target.value;
                                                        let array = _.clone(a);
                                                        setSearch(array);
                                                    }} onKeyDown={evt => {
                                                        if (evt.keyCode == 13) {
                                                            evt.preventDefault();
                                                            getLocations().done(ms => setData(ms));
                                                        }
                                                    }}/>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-danger" type="button" onClick={(evt) => {
                                                            let array = _.clone(a);
                                                            array.splice(index, 1);
                                                            setSearch(array);
                                                        }}><span><i className="fa fa-times"></i></span></button>
                                                    </div>
                                                </div>
                                            )
                                        })

                                    }
                                </form>
                            </fieldset>
                        </li>
                        <li className="nav-item" style={{ width: '15%', paddingRight: 10 }}>
                            <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                                <legend className="w-auto" style={{ fontSize: 'large' }}>Search Params:</legend>
                                <form>
                                    <div className="form-group">
                                        <button className="btn btn-primary" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                            event.preventDefault();
                                            let array = _.clone(search);
                                            array.push({ Field: 'Location.LocationKey', SearchText: '' });
                                            setSearch(array);
                                        }}>Add Parameter</button>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                            event.preventDefault();
                                            getLocations().done((data: Array<Location>) => setData(data));
                                        }}>Update Search</button>
                                    </div>
                                </form>
                            </fieldset>
                        </li>
                        <li className="nav-item" style={{ width: '20%', paddingRight: 10 }}>
                            <fieldset className="border" style={{ padding: '10px', height: '100%' }}>
                                <legend className="w-auto" style={{ fontSize: 'large' }}>Actions:</legend>
                                <form>
                                    <div className="form-group">
                                        <button className="btn btn-primary" data-toggle='modal' data-target="#locationModal" hidden={props.Roles.indexOf('Administrator') < 0 && props.Roles.indexOf('Transmission SME') < 0} onClick={(event) => { event.preventDefault() }}>Add Substation</button>
                                    </div>
                                    <div className="form-group">
                                         <button className="btn btn-primary" data-toggle='modal' data-target="#extDBModal" hidden={props.Roles.indexOf('Administrator') < 0 && props.Roles.indexOf('Transmission SME') < 0} onClick={(event) => { event.preventDefault() }}>Update Ext DB </button>
                                    </div>
                                </form>
                            </fieldset>
                        </li>

                    </ul>
                </div>
            </nav>


            <div style={{ width: '100%', height: 'calc( 100% - 136px)' }}>
                <Table<Location>
                    cols={[
                        { key: 'LocationKey', label: 'Key', headerStyle: { width: '30%' }, rowStyle: { width: '30%' } },
                        { key: 'Name', label: 'Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        //{ key: 'Type', label: 'Type', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        { key: 'Meters', label: 'Meters', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        { key: 'Assets', label: 'Assets', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                    ]}
                    tableClass="table table-hover"
                    data={data}
                    sortField={sortField}
                    ascending={ascending}
                    onSort={(d) => {
                        if (d.col == sortField) {
                            var ordered = _.orderBy(data, [d.col], [(!ascending ? "asc" : "desc")]);
                            setData(ordered);
                        }
                        else {
                            var ordered = _.orderBy(data, [d.col], ["asc"]);
                            setData(ordered);
                            setSortField(d.col);
                        }
                        setAscending(!ascending);

                    }}
                    onClick={handleSelect}
                    theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }}
                    rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                    selected={(item) => false}
                />
            </div>

            <div className="modal" id="locationModal">
                <div className="modal-dialog" style={{ maxWidth: '100%', width: '75%' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Substation</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <FormInput<OpenXDA.Location> Record={newLocation} Field={'LocationKey'} Feedback={'A unique key of less than 50 characters is required.'} Valid={valid} Setter={setNewLocation} />
                                    <FormInput<OpenXDA.Location> Record={newLocation} Field={'Name'} Feedback={'Name must be less than 200 characters and is required.'} Valid={valid} Setter={setNewLocation} />
                                    <FormInput<OpenXDA.Location> Record={newLocation} Field={'ShortName'} Feedback={'ShortName must be less than 50 characters.'} Valid={valid} Setter={setNewLocation} />
                                    <FormInput<OpenXDA.Location> Record={newLocation} Field={'Alias'} Feedback={'Alias must be less than 200 characters.'} Valid={valid} Setter={setNewLocation} />
                                </div>
                                <div className="col">
                                    <FormInput<OpenXDA.Location> Record={newLocation} Field={'Latitude'} Feedback={'Latitude is a require numeric field.'} Valid={valid} Setter={setNewLocation} />
                                    <FormInput<OpenXDA.Location> Record={newLocation} Field={'Longitude'} Feedback={'Longitude is a require numeric field.'} Valid={valid} Setter={setNewLocation} />
                                    <FormTextArea<OpenXDA.Location> Rows={3} Record={newLocation} Field={'Description'} Valid={valid} Setter={setNewLocation} />
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={addNewLocation}>Save</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal" id="extDBModal">
                <div className="modal-dialog" style={{ maxWidth: '100%', width: '75%' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Substation External Database Fields</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <ExternalDBUpdate ID={-1} Type='Location' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
   
}

export default ByLocation;
