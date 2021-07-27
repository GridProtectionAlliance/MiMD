(self["webpackChunkmimd"] = self["webpackChunkmimd"] || []).push([["ConfigurationByMeter"],{

/***/ "./wwwroot/Scripts/TSX/MiMD/Configuration/ConfigurationByMeter.tsx":
/*!*************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/Configuration/ConfigurationByMeter.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ConfigurationFiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfigurationFiles */ "./wwwroot/Scripts/TSX/MiMD/Configuration/ConfigurationFiles.tsx");
/* harmony import */ var _ConfigurationFileChanges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConfigurationFileChanges */ "./wwwroot/Scripts/TSX/MiMD/Configuration/ConfigurationFileChanges.tsx");
/* harmony import */ var _CommonComponents_NoteWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CommonComponents/NoteWindow */ "./wwwroot/Scripts/TSX/MiMD/CommonComponents/NoteWindow.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
//******************************************************************************************************
//  ConfigurationByMeter.tsx - Gbtc
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
//  08/22/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};








var standardSearch = [
    { key: 'Station', label: 'Meter Name', type: 'string' },
    { key: 'Make', label: 'Make', type: 'string' },
    { key: 'Model', label: 'Model', type: 'string' },
    { key: 'TSC', label: 'TSC', type: 'enum', enum: [{ Label: 'TSC', Value: 'TSC' }] },
    { key: 'DateLastChanged', label: 'Date Last Changed', type: 'datetime' }
];
var ConfigurationByMeter = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(standardSearch), 2), filterableList = _a[0], setFilterableList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), filters = _b[0], setFilters = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), data = _c[0], setData = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('DateLastChanged'), 2), sortField = _d[0], setSortField = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), ascending = _e[0], setAscending = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Idle'), 2), searchState = _f[0], setSearchState = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setSearchState('Loading');
        var handle = getMeters();
        return function () { if (handle != null && handle.abort != null)
            handle.abort(); };
    }, [ascending, sortField, filters]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handle = getAdditionalFields();
        return function () {
            if (handle.abort != null)
                handle.abort();
        };
    }, []);
    function getMeters() {
        var nativeFields = standardSearch.filter(function (item) { return item.key != 'TSC'; }).map(function (s) { return s.key; });
        var searches = filters.map(function (s) { if (nativeFields.findIndex(function (item) { return item == s.FieldName; }) == -1)
            return __assign(__assign({}, s), { isPivotColumn: true });
        else
            return s; });
        var handle = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/Meter/Config/SearchableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: searches, OrderBy: sortField, Ascending: ascending }),
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setData(data);
            setSearchState('Idle');
        });
        handle.fail(function (d) { setSearchState('Error'); });
        return handle;
    }
    function getAdditionalFields() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/AdditionalField/ParentTable/Meter",
            contentType: "application/json; charset=utf-8",
            cache: false,
            async: true
        });
        function ConvertType(type) {
            if (type == 'string' || type == 'integer' || type == 'number' || type == 'datetime' || type == 'boolean')
                return { type: type };
            return {
                type: 'enum', enum: [{ Label: type, Value: type }]
            };
        }
        handle.done(function (d) {
            var ordered = lodash__WEBPACK_IMPORTED_MODULE_2__.orderBy(standardSearch.concat(d.map(function (item) { return (__assign({ label: "[AF" + (item.ExternalDB != undefined ? " " + item.ExternalDB : '') + "] " + item.FieldName, key: item.FieldName }, ConvertType(item.Type))); })), ['label'], ["asc"]);
            setFilterableList(ordered);
        });
        return handle;
    }
    function handleSelect(item, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Configuration&MeterID=' + item.row.MeterID, state: {} });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '100%', height: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_7__.SearchBar, { CollumnList: filterableList, SetFilter: function (flds) { return setFilters(flds); }, Direction: 'left', defaultCollumn: { key: 'Station', label: 'Station', type: 'string' }, Width: '50%', Label: 'Search', GetEnum: function (setOptions, field) {
                var handle = null;
                if (field.type != 'enum' || field.enum == undefined || field.enum.length != 1)
                    return function () { };
                handle = $.ajax({
                    type: "GET",
                    url: homePath + "api/ValueList/Group/" + field.enum[0].Value,
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    cache: true,
                    async: true
                });
                handle.done(function (d) { return setOptions(d.map(function (item) { return ({ Value: item.Value.toString(), Label: item.Text }); })); });
                return function () { if (handle != null && handle.abort == null)
                    handle.abort(); };
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '100%', height: 'calc( 100% - 136px)' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 0, height: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '50%', height: '100%', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__.default, { cols: [
                            { key: 'Station', label: 'Meter Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            { key: 'Make', label: 'Make', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            { key: 'Model', label: 'Model', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            { key: 'TSC', label: 'TSC', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                            {
                                key: 'DateLastChanged', label: 'Date Last Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: function (item, key, style) {
                                    if (item[key] == null || item[key] == '')
                                        return '';
                                    var date = moment(item[key]);
                                    var now = moment();
                                    var days = now.diff(date, 'days');
                                    if (days < 1)
                                        style['backgroundColor'] = 'red';
                                    else if (days < 7)
                                        style['backgroundColor'] = 'orange';
                                    else if (days < 30)
                                        style['backgroundColor'] = 'yellow';
                                    return date.format("MM/DD/YY HH:mm CT");
                                }
                            },
                            { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                        ], tableClass: "table table-hover", tableStyle: { height: '100%' }, data: data, sortField: sortField, ascending: ascending, onSort: function (d) {
                            if (d.col == sortField) {
                                setAscending(!ascending);
                            }
                            else {
                                setSortField(d.col);
                                setAscending(d.col != 'DateLastChanged');
                            }
                        }, onClick: handleSelect, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', height: 'calc( 100% - 70px)', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.MeterID == props.MeterID; } })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { height: '100%', padding: 0, maxHeight: '100%', overflowY: 'scroll' } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigurationFiles__WEBPACK_IMPORTED_MODULE_4__.default, { MeterID: props.MeterID, FileName: props.FileName }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigurationFileChanges__WEBPACK_IMPORTED_MODULE_5__.default, { MeterID: props.MeterID, FileName: props.FileName }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CommonComponents_NoteWindow__WEBPACK_IMPORTED_MODULE_6__.default, { ID: props.MeterID }))))));
};
/*
if ((["integer", "number", "boolean", "string", "datetime"]).indexOf(props.AdditionalField.Type) < 0) {
let handle = $.ajax({
    type: "GET",
    url: `${homePath}api/ValueList/Group/${props.AdditionalField.Type}`,
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    cache: true,
    async: true
})
*/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigurationByMeter);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/Configuration/ConfigurationFileChanges.tsx":
/*!*****************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/Configuration/ConfigurationFileChanges.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
//******************************************************************************************************
//  ConfigurationFileChanges.tsx - Gbtc
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
//  05/18/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var ConfigurationFileChanges = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), configFiles = _a[0], setConfigFiles = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState('LastWriteTime'), 2), sortField = _b[0], setSortField = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), ascending = _c[0], setAscending = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), html = _d[0], setHtml = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), flag = _e[0], setFlag = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), showDetails = _f[0], setShowDetails = _f[1];
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
        if (isNaN(props.MeterID) || props.FileName == undefined)
            return;
        var handle1 = getConfigFiles();
        handle1.done(function (data) { return setConfigFiles(data); });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [props.MeterID, props.FileName, flag, ascending, sortField]);
    function getConfigFiles() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/ConfigurationFiles/" + props.MeterID + "/" + props.FileName + "/" + flag + "/" + sortField + "/" + (ascending ? 1 : 0),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function getColor(date) {
        var mom = moment(date);
        var now = moment();
        var days = now.diff(mom, 'days');
        if (days < 1)
            return 'red';
        else if (days < 7)
            return 'orange';
        else if (days < 30)
            return 'yellow';
        else
            return null;
    }
    if (isNaN(props.MeterID) || props.FileName == undefined)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-header" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "col" },
                        props.FileName,
                        " History:"),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "form-check" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) { return setFlag(!flag); }, value: flag ? 'on' : 'off', checked: flag ? true : false }),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { className: "form-check-label" }, "Show Files w/o Changes"))))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0__.default, { cols: [
                        {
                            key: 'LastWriteTime', label: 'Last Write Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                                style['backgroundColor'] = getColor(item.LastWriteTime);
                                return moment(item.LastWriteTime).format("MM/DD/YY HH:mm CT");
                            }
                        },
                        { key: 'Changes', label: '# of Changes', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        {
                            key: 'FileName', label: 'File', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' },
                            content: function (item) { return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { className: "btn btn-sm", onClick: function (e) { setShowDetails(true); setHtml("<p>" + item.Text.replace(/\n/g, '<br>') + "</p>"); } },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", { className: "fa fa-file" }))); }
                        },
                        {
                            key: 'Text', label: 'Diff', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' },
                            content: function (item) { return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { className: "btn btn-sm", onClick: function (e) { setShowDetails(true); setHtml(item.Html.replace(/&para;/g, '')); } },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", { className: "fa fa-eye" }))); }
                        },
                    ], tableClass: "table table-hover", data: configFiles, sortField: sortField, ascending: ascending, onSort: function (d) {
                        if (d.col == 'FileName' || d.col == 'Text')
                            return;
                        if (d.col == sortField)
                            setAscending(!ascending);
                        else {
                            setAscending(d.col != 'LastWriteTime');
                            setSortField(d.col);
                        }
                    }, onClick: function () { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } }))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__.Modal, { Title: props.FileName, CallBack: function () { setShowDetails(false); }, Size: 'xlg', Show: showDetails, ShowCancel: false, ConfirmText: 'Close', ShowX: true },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "well", style: { backgroundColor: 'lightgrey', fontSize: 18, maxHeight: window.innerHeight - 250, overflowY: 'scroll' }, dangerouslySetInnerHTML: { __html: html } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigurationFileChanges);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/Configuration/ConfigurationFiles.tsx":
/*!***********************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/Configuration/ConfigurationFiles.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
//******************************************************************************************************
//  ConfigurationFiles.tsx - Gbtc
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
//  05/18/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



var ConfigurationFiles = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), configFiles = _a[0], setConfigFiles = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState('LastWriteTime'), 2), sortField = _b[0], setSortField = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), ascending = _c[0], setAscending = _c[1];
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
        if (isNaN(props.MeterID))
            return;
        var handle1 = getConfigFiles();
        handle1.done(function (data) { return setConfigFiles(data); });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [props.MeterID, ascending, sortField]);
    function getConfigFiles() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/ConfigurationFiles/" + props.MeterID + "/LastWrites/" + sortField + "/" + (ascending ? 1 : 0),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function getColor(date) {
        var mom = moment(date);
        var now = moment();
        var days = now.diff(mom, 'days');
        if (days < 1)
            return 'red';
        else if (days < 7)
            return 'orange';
        else if (days < 30)
            return 'yellow';
        else
            return null;
    }
    function handleSelect(fileName, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: "?name=Configuration&MeterID=" + props.MeterID + "&FileName=" + fileName, state: {} });
    }
    if (isNaN(props.MeterID))
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-header" }, "Configuration Files:"),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-body" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0__.default, { cols: [
                    { key: 'FileName', label: 'File', headerStyle: { width: '50%' }, rowStyle: { width: '50%' } },
                    {
                        key: 'LastWriteTime', label: 'Last Write Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                            style['backgroundColor'] = getColor(item.LastWriteTime);
                            return moment(item.LastWriteTime).format("MM/DD/YY HH:mm CT");
                        }
                    },
                    { key: 'Changes', label: '# of Changes', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                ], tableClass: "table table-hover", data: configFiles, sortField: sortField, ascending: ascending, onSort: function (d) {
                    if (d.col == sortField)
                        setAscending(!ascending);
                    else {
                        setAscending(d.col != 'LastWriteTime');
                        setSortField(d.col);
                    }
                }, onClick: function (data, evt) { return handleSelect(data.row.FileName, evt); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.FileName == props.FileName; } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigurationFiles);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ActionHeader.tsx":
/*!**************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ActionHeader.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//******************************************************************************************************
//  ActionHeader.tsx - Gbtc
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
//  09/18/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

var ActionHeader = function (props) {
    var isauto = props.data.UserAccount == 'MiMD';
    var isChange = props.data.StateId != null;
    var isNote = !isauto && !isChange;
    function formatTS(input) {
        var date = moment(input);
        return date.format("MM/DD/YY HH:mm CT");
    }
    function stateTag(stateId) {
        var stat = props.stateList.find(function (item) { return item.ID == stateId; });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "badge", style: { background: (stat == undefined ? '#6c757d' : stat.Color), color: (stat == undefined ? '#ffffff' : stat.TextColor) } }, (stat == undefined ? 'Unknown' : stat.Description)));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        props.showTime ? formatTS(props.data.Timestamp) + ': ' : null,
        isNote ? props.data.UserAccount + ' added a Note' : null,
        isChange ? props.data.UserAccount + ' Changed Status to ' : null,
        isChange ? stateTag(props.data.StateId) : null,
        (isauto && !isChange) ? 'MiMD received an updated Configuration File' : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionHeader);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ActionList.tsx":
/*!************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ActionList.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ActionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionHeader */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ActionHeader.tsx");
/* harmony import */ var _FieldValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FieldValues */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/FieldValues.tsx");
//******************************************************************************************************
//  ActionList.tsx - Gbtc
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
//  09/18/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





var RecordList = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), actionList = _a[0], setAtcionList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), ascending = _b[0], setAscending = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(-1), 2), selectedAction = _c[0], setSelectedAction = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showFields = _d[0], setShowFields = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handleActionList = getActions();
        return function () {
            if (handleActionList != null && handleActionList.abort != null)
                handleActionList.abort();
        };
    }, [props.RecordId, ascending]);
    function getActions() {
        if (props.RecordId == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/Action/" + props.RecordId + "/Timestamp/" + (ascending ? 1 : 0),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setAtcionList(data);
        });
        return handle;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        selectedAction > 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FieldValues__WEBPACK_IMPORTED_MODULE_4__.default, { ActionID: selectedAction, show: showFields, setShow: setShowFields }) : null,
        (props.RecordId > -1 ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__.default, { cols: [
                    {
                        key: 'ID', label: 'Configuration Change History', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ActionCard, { data: item, stateList: props.StateList, openConfig: function (i) { setSelectedAction(i); setShowFields(true); } }); }
                    },
                ], tableClass: "table table-hover", data: actionList, sortField: "ID", ascending: ascending, onSort: function (d) { setAscending(!ascending); }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })
            : null)));
};
var ActionCard = function (props) {
    var hasConfig = props.data.UserAccount == 'MiMD';
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActionHeader__WEBPACK_IMPORTED_MODULE_3__.default, { data: props.data, stateList: props.stateList, showTime: true })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "card-text" }, props.data.Note),
            hasConfig ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "#", className: "btn btn-primary", onClick: function () { props.openConfig(props.data.ID); $('#currentConfig').show(); } }, "Show Configuration") : null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecordList);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ChangeOverviewPage.tsx":
/*!********************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ChangeOverviewPage.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RecordDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecordDetail */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/RecordDetail.tsx");
/* harmony import */ var _ActionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionList */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ActionList.tsx");
//******************************************************************************************************
//  ConfigurationByMeter.tsx - Gbtc
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
//  08/22/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var PRC002ChangeOverviewPage = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), statusList = _a[0], setStatusList = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handleStatusList = getStatus();
        return function () {
            if (handleStatusList.abort != null)
                handleStatusList.abort();
        };
    }, []);
    function getStatus() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/ComplianceState/List",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setStatusList(data);
        });
        return handle;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '100%', height: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 0, height: '200px' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RecordDetail__WEBPACK_IMPORTED_MODULE_2__.default, { stateList: statusList, RecordID: props.RecordId })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '100%', height: 'calc( 100% - 136px)', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActionList__WEBPACK_IMPORTED_MODULE_3__.default, { StateList: statusList, RecordId: props.RecordId }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PRC002ChangeOverviewPage);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/FieldValues.tsx":
/*!*************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/FieldValues.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var FieldValues = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), fields = _a[0], setFields = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('FieldCategory'), 2), sortBy = _b[0], setSortBy = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(true), 2), ascending = _c[0], setAscending = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var h = GetFields();
        return function () { if (h != null && h.abort != null)
            h.abort(); };
    }, [props.RecordID, props.ActionID, ascending, sortBy]);
    function GetFields() {
        var handle = null;
        if (props.ActionID == undefined)
            handle = $.ajax({
                type: "GET",
                url: homePath + "api/MiMD/PRC002/FieldValue/" + props.RecordID + "/" + sortBy + "/" + (ascending ? 1 : 0),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });
        else
            handle = $.ajax({
                type: "GET",
                url: homePath + "api/MiMD/PRC002/FieldValue/History/" + props.ActionID + "/" + sortBy + "/" + (ascending ? 1 : 0),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });
        handle.done(function (data) {
            setFields(data);
        });
        return handle;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.Modal, { Title: props.ActionID == undefined ? 'Current Configuration' : 'Related Configuration', Show: props.show, CallBack: function (confirm) { props.setShow(false); }, Size: 'lg', ShowX: true, ShowCancel: false, ConfirmText: 'Close' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__.default, { cols: [
                        { key: 'FieldCategory', label: 'Category', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Record: item, Field: 'FieldCategory', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                        {
                            key: 'FieldLabel', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Record: item, Disabled: true, Label: '', Field: item.FieldLabel == undefined || item.FieldLabel.length == 0 ? 'FieldName' : 'FieldLabel', Setter: function (record) { }, Valid: function () { return true; } }); }
                        },
                        { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Record: item, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                        {
                            key: 'Valid', label: 'Valid', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                                        alignContent: 'center',
                                        padding: '.375rem .75rem',
                                        fontSize: '1.5rem',
                                        lineHeight: 1.5
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa " + (item.Valid ? "fa-check-circle" : "fa-exclamation-triangle"), "aria-hidden": "true" })));
                            }
                        },
                    ], tableClass: "table table-hover", data: fields, sortField: sortBy, ascending: ascending, onSort: function (d) {
                        if (d.col == sortBy)
                            setAscending(!ascending);
                        else {
                            setSortBy(d.col);
                            setAscending(true);
                        }
                    }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 620, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldValues);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/RecordDetail.tsx":
/*!**************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/RecordDetail.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/ManualAction */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/ManualAction.tsx");
/* harmony import */ var _FieldValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldValues */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/FieldValues.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _ResolveRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResolveRecord */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ResolveRecord.tsx");
/* harmony import */ var _ActionHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActionHeader */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ActionHeader.tsx");
/* harmony import */ var _Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/BaseConfigWindow */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/BaseConfigWindow.tsx");
//******************************************************************************************************
//  RecordDetail.tsx - Gbtc
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
//  09/18/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};








var RecordDetail = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined), 2), record = _a[0], setRecord = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined), 2), meter = _b[0], setMeter = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined), 2), action = _c[0], setAction = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined), 2), baseConfig = _d[0], setBaseConfig = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), allvalueList = _e[0], setAllValueList = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showAck = _f[0], setShowAck = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showRev = _g[0], setShowRev = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showResolve = _h[0], setShowResolve = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showRap = _j[0], setShowRap = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showNote = _k[0], setShowNote = _k[1];
    var _l = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showBaseConfig = _l[0], setShowBaseConfig = _l[1];
    var _m = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showFields = _m[0], setShowFields = _m[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handleRecord = getRecord(props.RecordID);
        return function () {
            if (handleRecord != null && handleRecord.abort != null)
                handleRecord.abort();
        };
    }, [props.RecordID]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handleFieldVaues = getFieldValues();
        return function () {
            if (handleFieldVaues != null && handleFieldVaues.abort != null)
                handleFieldVaues.abort();
        };
    }, [props.RecordID]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handleMeter = getMeter((record == undefined ? -1 : record.MeterId));
        var handleBaseConfig = getBaseConfig((record == undefined ? -1 : (record.BaseConfigId == undefined ? -1 : record.BaseConfigId)));
        var handleAction = getLastAction((record == undefined ? -1 : record.LastActionID));
        return function () {
            if (handleMeter != null && handleMeter.abort != null)
                handleMeter.abort();
            if (handleBaseConfig != null && handleBaseConfig.abort != null)
                handleBaseConfig.abort();
            if (handleAction != null && handleAction.abort != null)
                handleAction.abort();
        };
    }, [record]);
    function getFieldValues() {
        var handle;
        handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/FieldValue?parentID=" + props.RecordID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setAllValueList(data);
        });
        return handle;
    }
    function getRecord(id) {
        if (id == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/ComplianceRecord/One/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setRecord(data);
        });
        return handle;
    }
    function getLastAction(id) {
        if (id == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/Action/One/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setAction(data);
        });
        return handle;
    }
    function getMeter(id) {
        if (id == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/ComplianceMeter/One/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setMeter(data);
        });
        return handle;
    }
    function getBaseConfig(id) {
        if (id == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/BaseConfig/ONE/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setBaseConfig(data);
        });
        return handle;
    }
    function formatTS(input) {
        var date = moment(input);
        return date.format("MM/DD/YY HH:mm CT");
    }
    var meterStat = (meter == undefined ? undefined : props.stateList.find(function (s) { return s.ID == meter.StatusID; }));
    var recordStat = (record == undefined ? undefined : props.stateList.find(function (s) { return s.ID == record.Status; }));
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (meter == undefined ? null :
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '25%', padding: 5 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatusRow, { label: 'Configuration Change', status: recordStat, T: record.Timer }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatusRow, { label: 'Meter ' + meter.Name, status: meterStat, T: meter.Timer })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '25%', padding: 5 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    " Issue Opened: ",
                    formatTS(record.Created),
                    " by ",
                    record.User),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    " Last Action Taken: ",
                    formatTS(record.Timestamp)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    " Last Action: ",
                    action != undefined ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActionHeader__WEBPACK_IMPORTED_MODULE_6__.default, { data: action, stateList: props.stateList, showTime: false }) : null,
                    " ")),
            (baseConfig == undefined ? null :
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '25%', padding: 5 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowBaseConfig(true); } }, " Base Configuration "),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowFields(true); } }, " Current Config Issues"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '25%', padding: 5 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return setShowNote(true); } }, " Add Compliance Note "),
                recordStat.Description == 'Acknowledged' || recordStat.Description == 'Reviewed' ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return setShowRap(true); } }, " Submit Remedial Action Plan ")
                    : null,
                recordStat.Description == 'Compliance Issue' ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowAck(true); } }, " Acknowledge Issue ")
                    : null,
                recordStat.Description == 'Acknowledged' ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowRev(true); } }, " Review Issue ")
                    : null,
                recordStat.Description == 'Reviewed' ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowResolve(true); } }, " Resolve Issue - Updated Base Config")
                    : null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__.default, { RecordId: props.RecordID, state: null, show: showNote, setShow: setShowNote }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FieldValues__WEBPACK_IMPORTED_MODULE_3__.default, { RecordID: props.RecordID, show: showFields, setShow: setShowFields }),
            recordStat.Description == 'Acknowledged' || recordStat.Description == 'Reviewed' ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__.default, { RecordId: props.RecordID, state: props.stateList.find(function (item) { return item.Description === 'RAP Submitted'; }), show: showRap, setShow: setShowRap })
                : null,
            recordStat.Description == 'Compliance Issue' ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__.default, { RecordId: props.RecordID, state: props.stateList.find(function (item) { return item.Description === 'Acknowledged'; }), show: showAck, setShow: setShowAck })
                : null,
            recordStat.Description == 'Acknowledged' ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__.default, { RecordId: props.RecordID, state: props.stateList.find(function (item) { return item.Description === 'Reviewed'; }), show: showRev, setShow: setShowRev })
                : null,
            recordStat.Description == 'Reviewed' ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ResolveRecord__WEBPACK_IMPORTED_MODULE_5__.default, { FieldList: allvalueList.filter(function (item) { return !item.Valid; }), RecordID: props.RecordID, stateList: props.stateList, show: showResolve, setShow: setShowResolve })
                : null,
            (baseConfig == undefined ? null :
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__.Modal, { Title: 'Issue Base Configuration', Show: showBaseConfig, CallBack: function (confirm) { setShowBaseConfig(false); }, Size: 'lg', ShowX: true, ShowCancel: false, ConfirmText: 'Close' },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_7__.default, { configurationList: [baseConfig] })))))));
};
var StatusRow = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            props.label,
            " has been in"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: 'flex' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                    fontWeight: 600,
                    width: '45%',
                    height: '35px',
                    background: (status == undefined ? '#f8f9fa' : props.status.Color),
                    border: '2px solid',
                    borderRadius: '5px',
                    textAlign: 'center',
                    lineHeight: '35px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    color: (status == undefined ? '#212529' : props.status.TextColor),
                    marginRight: 'calc(5%)'
                } },
                " ",
                props.status.Description,
                " "),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                    fontWeight: 600,
                    width: '45%',
                    height: '35px',
                    background: (props.T < 30 ? '#28a745' : (props.T < 60 ? '#ffc107' : '#dc3545')),
                    color: (props.T < 30 ? '#ffffff' : (props.T < 60 ? '#212529' : '#ffffff')),
                    border: '2px solid',
                    borderRadius: '5px',
                    textAlign: 'center',
                    lineHeight: '35px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                } },
                " ",
                props.T,
                " Days"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecordDetail);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ResolveRecord.tsx":
/*!***************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/ChangeOverview/ResolveRecord.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
//******************************************************************************************************
//  ResolveRecord.tsx - Gbtc
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};





var ResolveRecord = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Note'), 2), step = _a[0], setStep = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(''), 2), note = _b[0], setNote = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(-1), 2), fieldIndex = _c[0], setFieldIndex = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), updatedFld = _d[0], setUpdatedFld = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('None'), 2), hover = _e[0], setHover = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showClose = _f[0], setShowClose = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showComplete = _g[0], setShowComplete = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Error'), 2), fieldState = _h[0], setFieldState = _h[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setUpdatedFld([]);
        var handles = [];
        handles = props.FieldList.map(function (item) { return LoadField(item.FieldId); });
        return (function () {
            handles.forEach(function (h) { if (h != null && h.abort != null)
                h.abort(); });
        });
    }, [props.FieldList]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setFieldState('Valid');
        if (fieldIndex == -1)
            return;
        if (updatedFld.length == 0)
            return;
        if (updatedFld.length <= fieldIndex)
            return;
        setFieldState('Loading');
        var h = ValidateField();
        return function () { if (h != null && h.abort != null)
            h.abort(); };
    }, [updatedFld, fieldIndex]);
    function Cancel() {
        setStep('Note');
        setFieldIndex(-1);
        setNote('');
        setUpdatedFld([]);
        props.setShow(false);
    }
    function NextStep() {
        if (step == 'Note') {
            setStep('Change');
            if (props.FieldList.length == 0)
                setShowComplete(true);
            else
                setFieldIndex(0);
        }
        else {
            if (props.FieldList.length == fieldIndex + 1)
                setShowComplete(true);
            else
                setFieldIndex(function (index) { return index + 1; });
        }
    }
    function LoadField(id) {
        var h = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/Field/One/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        h.then(function (data) {
            if (data == null)
                return;
            setUpdatedFld(function (array) { return __spreadArray(__spreadArray([], __read(array)), [data]); });
        });
        return h;
    }
    function PrevStep() {
        if (step == 'Note')
            setShowClose(true);
        else if (fieldIndex == 0)
            setStep('Note');
        else
            setFieldIndex(function (index) { return index - 1; });
    }
    function getTitle() {
        if (step == 'Note')
            return 'Resolve Issue';
        else
            return 'Change Base Configuration';
    }
    function ValidateField() {
        if (updatedFld[fieldIndex].Value == null) {
            setFieldState('Error');
            return null;
        }
        var h = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/Field/Check/" + props.FieldList[fieldIndex].Value,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(updatedFld[fieldIndex]),
            dataType: 'json',
            cache: false,
            async: true
        });
        h.then(function (data) {
            if (data == null || !data)
                setFieldState('Error');
            else
                setFieldState('Valid');
        });
        return h;
    }
    function Save() {
        updatedFld.forEach(function (item) { return $.ajax({
            type: "PATCH",
            url: homePath + "api/MiMD/PRC002/Field/Update",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(item),
            dataType: 'json',
            cache: false,
            async: true
        }); });
        $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/Action/Add",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ Note: note, StateId: props.stateList.find(function (item) { return item.Description == 'In Compliance'; }).ID, RecordId: props.RecordID }),
            dataType: 'json',
            cache: false,
            async: true
        }).then(function (data) { return history.go(0); });
        Cancel();
    }
    function SetField(index, record) {
        if (index == -1)
            return;
        setUpdatedFld(function (fld) { var update = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(fld); update[fieldIndex] = record; return update; });
    }
    var stepComplete = (step == 'Note' ? note.length > 0 :
        (updatedFld[fieldIndex] != null && fieldState == 'Valid' && !(updatedFld[fieldIndex].Value == null || updatedFld[fieldIndex].Value.length == 0) && !(updatedFld[fieldIndex].FieldType == 'number' && isNaN(parseFloat(updatedFld[fieldIndex].Value)))));
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__.Modal, { Show: props.show, Title: getTitle(), CancelText: (step == 'Note' ? 'Cancel' : 'Back'), ShowX: true, ConfirmToolTipContent: 'ResolveConfirm', Size: 'lg', ConfirmBtnClass: 'btn-success' + (stepComplete ? '' : ' disabled'), ConfirmText: (fieldIndex == props.FieldList.length - 1 ? 'Save' : 'Next'), CallBack: function (c, b) { if (c)
                NextStep();
            else if (b)
                PrevStep();
            else
                setShowClose(true); } }, step == 'Note' ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-group" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Note:"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { className: "form-control", rows: 4, value: note, onChange: function (e) { return setNote(e.target.value); } })) :
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConfigFieldEdit, { validRule: fieldState != 'Error', Setter: function (record) { return SetField(fieldIndex, record); }, CurrentValue: (fieldIndex > -1 ? props.FieldList[fieldIndex] : undefined), Field: (fieldIndex > -1 ? updatedFld[fieldIndex] : undefined) })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__.ToolTip, { Show: hover == 'Confirm' && !stepComplete, Position: 'top', Target: 'ResolveConfirm', Zindex: 9999 },
            step == 'Note' && note.length == 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Note is required.") : null,
            step == 'Change' && (updatedFld[fieldIndex] != null && (updatedFld[fieldIndex].Value == null || updatedFld[fieldIndex].Value.length == 0)) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Value is required.") : null,
            step == 'Change' && updatedFld[fieldIndex] != null && updatedFld[fieldIndex].FieldType == 'number' && isNaN(parseFloat(updatedFld[fieldIndex].Value)) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "Value is required to ne a number.") : null,
            step == 'Change' && fieldState == 'Loading' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__.LoadingIcon, { Show: true, Label: 'Verifying New Rule...' }) : null,
            step == 'Change' && fieldState == 'Error' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "The new Rule needs to result in the current Value being Valid.") : null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__.Warning, { Title: 'Cancel', Message: 'Warning all Changes will be lost and the new base configuration will not be applied', CallBack: function (c) { if (c)
                Cancel(); setShowClose(false); }, Show: showClose }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__.Warning, { Title: 'Warning', Message: 'This will change the Base Configuration for this meter and can not be undone. A permanent compliance record will be created', Show: showComplete, CallBack: function (c) { if (c)
                Save(); setShowComplete(false); } })));
};
var ConfigFieldEdit = function (props) {
    var FieldTypeOptions = [{ Value: 'string', Label: 'Text' }, { Value: 'number', Label: 'Number' }];
    var NumberChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: '>', Label: '>' }, { Value: '<', Label: '<' }];
    var TextChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: 'IN', Label: 'In' }];
    function ValidValue() {
        return (props.Field.Value != null && props.Field.Value.length > 0 && (props.Field.FieldType != 'number' || !isNaN(parseFloat(props.Field.Value))));
    }
    function RuleResult() {
        return false;
    }
    if (props.CurrentValue == null || props.Field == null)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__.Input, { Record: props.CurrentValue, Field: 'Value', Setter: function () { }, Valid: function () { return props.validRule; }, Label: 'Current Value', Disabled: true, Feedback: 'The new Rule needs to allow the current Value.' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__.Select, { Record: props.Field, Field: 'FieldType', Options: FieldTypeOptions, Label: 'Field Type', Disabled: true, Setter: function (record) { } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__.Input, { Record: props.Field, Field: 'Name', Setter: function () { }, Valid: function () { return true; }, Label: 'Field', Disabled: true }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__.Select, { Record: props.Field, Field: 'Comparison', Options: (props.Field.FieldType == 'number' ? NumberChecks : TextChecks), Label: 'Rule', Setter: function (record) { props.Setter(record); } }),
        (props.Field.Comparison == 'IN' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(MultiInputField, { data: props.Field, Setter: function (record) { props.Setter(record); } }) :
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__.Input, { Record: props.Field, Field: 'Value', Setter: function (record) { props.Setter(record); }, Valid: function () { return ValidValue(); }, Label: 'Value', Feedback: props.Field.FieldType != 'number' ? 'Value is required.' : 'Value is required and needs to be a number.' }))));
};
var MultiInputField = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), listValues = _a[0], setListValues = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setListValues(props.data.Value.split(';'));
    }, [props.data]);
    function Set(index, value) {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__.clone(listValues);
        lst[index] = value;
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    function AddNew() {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__.clone(listValues);
        lst.push((props.data.FieldType == 'string' ? 'Value' : '0'));
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    function remove(index) {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__.clone(listValues);
        lst.splice(index, 1);
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        listValues.map(function (item, index) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-group" },
                index == 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Values") : null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "form-control", onChange: function (evt) { Set(index, evt.target.value); }, value: item }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group-append", onClick: function () { return remove(index); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "input-group-text" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))));
        }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-sm", onClick: function () { return AddNew(); } }, " Add ")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResolveRecord);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/BaseConfigTable.tsx":
/*!*********************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/BaseConfigTable.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _ConfigFieldValueTableField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfigFieldValueTableField */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/ConfigFieldValueTableField.tsx");
//******************************************************************************************************
//  BaseConfigTable.tsx - Gbtc
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
//  03/16/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





var BaseConfigTable = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), categorys = _a[0], setCategorys = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), orderedFields = _b[0], setOrderedFields = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var cat = lodash__WEBPACK_IMPORTED_MODULE_1__.uniq(props.Fields.map(function (f) { return f.Category; }));
        var flds = cat.map(function (item) { return []; });
        props.Fields.forEach(function (fld) {
            var i = cat.findIndex(function (c) { return fld.Category == c; });
            flds[i].push(fld);
        });
        setCategorys(cat);
        setOrderedFields(flds);
    }, [props.Fields]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null,
                " Configuration ",
                props.Config.Name)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, overflowY: 'scroll' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__.Input, { Record: props.Config, Field: 'Pattern', Setter: function () { }, Valid: function () { return true; }, Label: 'File Pattern', Disabled: true }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "accordion" }, categorys.map(function (key, index) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategorySection, { Title: key, key: index, Fields: orderedFields[index], OnEdit: props.OnEdit, OnRemove: props.OnRemove }); })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-footer" }, props.OnNew != undefined ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-sm", onClick: function () { return props.OnNew(); } }, "Add new Field ") : null)));
};
var CategorySection = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), show = _a[0], setShow = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(''), 2), sortField = _b[0], setSortField = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), ascending = _c[0], setAscending = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Fields), 2), fields = _d[0], setFields = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setFields(function (flds) { return lodash__WEBPACK_IMPORTED_MODULE_1__.orderBy(flds, [sortField], [(ascending ? "asc" : "desc")]); });
    }, [sortField, ascending]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setFields(props.Fields);
    }, [props.Fields]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: "card-header" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-link btn-block text-left", type: "button", onClick: function () { return setShow(!show); } }, props.Title == undefined || props.Title.length == 0 ? 'Unknown Section' : props.Title)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "collapse" + (show ? " show" : '') },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__.default, { cols: [
                            { key: 'Label', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em - 130px)' }, rowStyle: { width: 'calc(30% - 8.25em - 130px)' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__.Input, { Record: item, Field: 'Label', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'FieldType', label: 'Type', headerStyle: { width: '8em' }, rowStyle: { width: '8em' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__.Input, { Record: item, Field: 'FieldType', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'Comparison', label: '', headerStyle: { width: '5em' }, rowStyle: { width: '5em' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__.Input, { Record: item, Field: 'Comparison', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            {
                                key: 'Value', label: 'Value', headerStyle: { width: 'calc(60% - 8.25em)' }, rowStyle: { width: 'calc(60% - 8.25em)' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigFieldValueTableField__WEBPACK_IMPORTED_MODULE_4__.default, { Record: item }); }
                            },
                            {
                                key: null, label: '', headerStyle: { width: '130px' }, rowStyle: { width: '130px' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                                    props.OnEdit != undefined ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: { marginTop: '16px', textAlign: 'center' }, className: "btn btn-sm", onClick: function (e) { return props.OnEdit(item); } },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { color: '#007BFF' }, className: "fa fa-pencil-square fa-3x" }))) : null,
                                    props.OnRemove != undefined ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: { marginTop: '16px', textAlign: 'center' }, className: "btn btn-sm", onClick: function (e) { return props.OnRemove(item); } },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-times fa-3x" }))) : null); }
                            }
                        ], tableClass: "table table-hover", data: fields, sortField: sortField, ascending: ascending, onSort: function (d) {
                            if (d.col == sortField)
                                setAscending(!ascending);
                            else {
                                setAscending(!ascending);
                                setSortField(d.col);
                            }
                        }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseConfigTable);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/BaseConfigWindow.tsx":
/*!**********************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/BaseConfigWindow.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseConfigByMeter": () => (/* binding */ BaseConfigByMeter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseConfigTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseConfigTable */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/BaseConfigTable.tsx");
//******************************************************************************************************
//  BaseConfigWindow.tsx - Gbtc
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
//  02/10/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var BaseConfigWindow = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(-1), 2), currentTab = _a[0], setCurrentTab = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), fieldList = _b[0], setFieldList = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (props.configurationList.findIndex(function (item) { return item.ID == currentTab; }) == -1 && props.configurationList.length > 0)
            setCurrentTab(props.configurationList[0].ID);
        if (props.configurationList.length == 0)
            setCurrentTab(-1);
    }, [props.configurationList]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (props.getFieldList != undefined)
            return props.getFieldList(currentTab, setFieldList);
        var h = getFieldList();
        return function () { if (h != null && h.abort != null)
            h.abort(); };
    }, [currentTab, props.configurationList]);
    function getFieldList() {
        if (currentTab == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/Field/" + currentTab + "/Category/1",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setFieldList(data);
        });
        return handle;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        props.configurationList.length > 1 ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "nav nav-tabs" }, props.configurationList.map(function (item, index) {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "nav-item", key: index },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "nav-link" + (currentTab == item.ID ? " active" : ""), onClick: function () { return setCurrentTab(item.ID); } }, item.Name));
            })) : null,
        currentTab != -1 && props.configurationList.find(function (item) { return item.ID == currentTab; }) != undefined ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-content", style: { maxHeight: window.innerHeight - 235, overflow: 'hidden' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseConfigTable__WEBPACK_IMPORTED_MODULE_1__.default, { Config: props.configurationList.find(function (item) { return item.ID == currentTab; }), Fields: fieldList, OnEdit: props.OnEdit == undefined ? undefined : function (record) { return props.OnEdit(record, currentTab); }, OnRemove: props.OnRemove == undefined ? undefined : function (record) { return props.OnRemove(record, currentTab); }, OnNew: props.OnNew == undefined ? undefined : function () { return props.OnNew(currentTab); } })) : null));
};
var BaseConfigByMeter = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), configurationlist = _a[0], setConfigurationList = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var h = getBaseConfigs();
        return function () { if (h != null && h.abort != null)
            h.abort(); };
    }, [props.MeterId]);
    function getBaseConfigs() {
        if (props.MeterId == null)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/BaseConfig?parentID=" + props.MeterId,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setConfigurationList(data);
        });
        return handle;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseConfigWindow, { configurationList: configurationlist });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseConfigWindow);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/ConfigFieldValueTableField.tsx":
/*!********************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/ConfigFieldValueTableField.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
//******************************************************************************************************
//  ConfigFieldValueTableField.tsx - Gbtc
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
//  02/10/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************


var ConfigFieldValueTableField = function (props) {
    var hasDesc = props.Record.Description != undefined && props.Record.Description.length > 0;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: (hasDesc ? 'calc(50% - 8px)' : '100%'), display: 'inline-block', verticalAlign: 'middle' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Record: props.Record, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } })),
            hasDesc ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        borderRight: '8px solid #222',
                        marginTop: -8,
                        width: 0,
                        height: 0,
                        display: 'inline-block',
                        verticalAlign: 'middle'
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                        maxWidth: '50%',
                        display: 'inline-block',
                        borderRadius: '3px',
                        opacity: 0.9,
                        color: '#fff',
                        background: '#222',
                        border: '1px solid transparent',
                        fontSize: '13px',
                        padding: '8px 21px',
                        verticalAlign: 'top'
                    } }, props.Record.Description.split('<br>').map(function (t, i) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { key: i, style: { margin: 0 } },
                    " ",
                    t,
                    " "); }))) : null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigFieldValueTableField);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/ManualAction.tsx":
/*!******************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/ManualAction.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
//******************************************************************************************************
//  ManualAction.tsx - Gbtc
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
//  09/18/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



var ManualAction = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(""), 2), note = _a[0], setNote = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(0), 2), Toffset = _b[0], setToffset = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showWarning = _c[0], setWarning = _c[1];
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
    function getTitle() {
        if (props.state == undefined)
            return 'Add Compliance Note';
        if (props.state.Description == 'Acknowledged')
            return 'Acknowledge Alert';
        if (props.state.Description == 'Reviewed')
            return 'Review Alert';
        if (props.state.Description == 'RAP Submitted')
            return 'Create Remedial Action Plan';
        if (props.state.Description == 'Compliance Issue')
            return 'Submit Compliance Issue';
    }
    function getBtn() {
        if (props.state == undefined)
            return 'Add Note';
        if (props.state.Description == 'Acknowledged')
            return 'Acknowledged Alert';
        if (props.state.Description == 'Reviewed')
            return 'Reviewed Alert';
        if (props.state.Description == 'RAP Submitted')
            return 'Create Remedial Action Plan';
        if (props.state.Description == 'Compliance Issue')
            return 'Submit';
    }
    function confirm(c) {
        if (c && props.state == undefined) {
            props.setShow(false);
            submitt();
        }
        if (c && props.state != undefined) {
            setWarning(true);
        }
        if (!c) {
            props.setShow(false);
            setToffset(0);
            setNote('');
        }
    }
    function submitt() {
        if (props.RecordId != undefined)
            submittRecord();
        if (props.MeterId != undefined)
            submittMeter();
        setNote("");
        setToffset(0);
    }
    function submittRecord() {
        var action = { Note: note, StateId: null, RecordId: props.RecordId };
        if (props.state != undefined)
            action.StateId = props.state.ID;
        $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/Action/Add",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(action),
            dataType: 'json',
            cache: false,
            async: true
        }).then(function (data) { return history.go(0); });
    }
    function submittMeter() {
        if (props.state.Description == 'Compliance Issue')
            $.ajax({
                type: "POST",
                url: homePath + "api/MiMD/PRC002/ComplianceRecord/Add",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ MeterId: props.MeterId, TimerOffset: Toffset, Status: props.state.ID, Note: note }),
                dataType: 'json',
                cache: true,
                async: true
            }).then((function (data) { return history.go(0); }));
        else
            $.ajax({
                type: "POST",
                url: homePath + "api/MiMD/PRC002/ComplianceMeter/RAPSubmitt",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ meterId: props.MeterId, Note: note }),
                dataType: 'json',
                cache: true,
                async: true
            }).then((function (data) { return history.go(0); }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.Modal, { Show: props.show, Title: getTitle(), ConfirmText: getBtn(), CancelBtnClass: 'Cancel', CallBack: function (c) { confirm(c); }, Size: 'sm' }, (props.state != undefined && props.state.Description == 'Compliance Issue') ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-group" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Note:"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { className: "form-control", rows: 4, value: note, onChange: function (e) { return setNote(e.target.value); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Days out of Compliance:"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "form-control", type: 'number', value: Toffset, onChange: function (e) { return setToffset(parseInt(e.target.value)); } }))
            :
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Note:"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { className: "form-control", rows: 4, value: note, onChange: function (e) { return setNote(e.target.value); } }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.Warning, { Show: showWarning, Title: 'Warning', Message: 'This action can not be undone. It will create a permanent compliance record.', CallBack: function (result) { if (result)
                submitt(); setWarning(false); } })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManualAction);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/NewConfigFields.tsx":
/*!*********************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/NewConfigFields.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
//******************************************************************************************************
//  NewConfigFields.tsx - Gbtc
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
//  03/16/2021 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************


var NewConfigFields = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Record: props.Record, Field: 'Name', Setter: props.SetRecord, Valid: function () { return props.Record.Name != null && props.Record.Name.length > 0 && props.UniqueKey; }, Feedback: 'Name is required and must be unique', Label: 'Name' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Record: props.Record, Field: 'Pattern', Setter: props.SetRecord, Valid: function () { return props.Record.Pattern != null && props.Record.Pattern.length > 0; }, Label: 'File Pattern', Feedback: 'File Pattern is required.' }),
        " "));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewConfigFields);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/DowloadFile.tsx":
/*!************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/DowloadFile.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var DowloadFiles = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), fileList = _a[0], setFileList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), ascending = _b[0], setAscending = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handle = getFiles();
        return function () {
            if (handle != null && handle.abort != null)
                handle.abort();
        };
    }, [props.MeterId, ascending]);
    function getFiles() {
        if (props.MeterId == -1 || props.MeterId == undefined)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/GetFiles/" + props.MeterId + "/" + (ascending ? 1 : 0),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setFileList(data);
        });
        return handle;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__.default, { cols: [
                { key: 'FileName', label: 'File', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                { key: null, label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return window.open(homePath + "api/MiMD/PRC002/DowloadFile/" + item.ID); } }, " Download "); } },
            ], tableClass: "table table-hover", data: fileList, sortField: 'FileName', ascending: ascending, onSort: function (d) { setAscending(!ascending); }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DowloadFiles);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/MeterConfiguration.tsx":
/*!*******************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/MeterConfiguration.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/BaseConfigWindow */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/BaseConfigWindow.tsx");
/* harmony import */ var _MeterWizzard_FileParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MeterWizzard/FileParser */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/FileParser.tsx");
/* harmony import */ var _MeterWizzard_FileParseWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MeterWizzard/FileParseWindow */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/FileParseWindow.tsx");
/* harmony import */ var _Common_NewConfigFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/NewConfigFields */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/NewConfigFields.tsx");
/* harmony import */ var _MeterWizzard_ConfigurationfieldEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MeterWizzard/ConfigurationfieldEdit */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/ConfigurationfieldEdit.tsx");
//******************************************************************************************************
//  MeterConfiguration.tsx - Gbtc
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
//  03/15/2021- C. lackner
//       Generated original version of source code.
//
//******************************************************************************************************
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};








var MeterConfigurationWindow = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('view'), 2), state = _a[0], setState = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showLoading = _b[0], setShowLoading = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showWarning = _c[0], setShowWarning = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(''), 2), fileName = _d[0], setFileName = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('None'), 2), hover = _e[0], setHover = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), fileFields = _f[0], setFileFields = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), selectedFields = _g[0], setSelectedFields = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), addedIndices = _h[0], setAddedIndices = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), addedFields = _j[0], setAddedFields = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), configurationlist = _k[0], setConfigurationList = _k[1];
    var _l = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), serverConfigurationlist = _l[0], setServerConfigurationList = _l[1];
    var _m = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({ ID: -1, MeterId: props.MeterID, Name: 'New Configuration', Pattern: '*.ini' }), 2), newConfiguration = _m[0], setNewConfiguration = _m[1];
    var _o = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(true), 2), uniqueCongifurationKey = _o[0], setUniqueConfigurationKey = _o[1];
    var _p = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(null), 2), editField = _p[0], setEditField = _p[1];
    var _q = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Category: '', Label: 'Field', Description: '' }), 2), newEditField = _q[0], setNewEditField = _q[1];
    var _r = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showDeleteWarning = _r[0], setShowDeleteWarning = _r[1];
    var _s = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showNoEditNotice = _s[0], setShowNoEditNotice = _s[1];
    var _t = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showEditWarning = _t[0], setShowEditWarning = _t[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var h = getBaseConfigs();
        return function () { if (h != null && h.abort != null)
            h.abort(); };
    }, [props.MeterID, props.show]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setConfigurationList(function (lst) {
            var filtered = lst.filter(function (item) { return addedIndices.findIndex(function (i) { return i == item.ID; }) > -1; });
            return __spreadArray(__spreadArray([], __read(serverConfigurationlist)), __read(filtered));
        });
    }, [serverConfigurationlist]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (props.show)
            return;
        setState('view');
        setAddedFields([]);
        setAddedIndices([]);
    }, [props.show]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (state != 'edit')
            return function () { };
        $(".custom-file-input").on("change", function (evt) {
            var fileName = evt.target.value.split("\\").pop();
            $(evt.target).siblings(".custom-file-label").addClass("selected").html(fileName);
            readSingleFile(evt, fileName);
        });
        return function () { return $(".custom-file-input").off('change'); };
    }, [state]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (configurationlist.findIndex(function (item) { return item.Name == newConfiguration.Name; }) == -1)
            setUniqueConfigurationKey(true);
        else
            setUniqueConfigurationKey(false);
    }, [configurationlist, newConfiguration]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (editField == null)
            return;
        var handle = getChangeRequest();
        return function () { if (handle != null && handle.abort != null)
            handle.abort(); };
    }, [editField]);
    function getBaseConfigs() {
        if (props.MeterID == null)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/BaseConfig?parentID=" + props.MeterID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setServerConfigurationList(data);
        });
        return handle;
    }
    function getChangeRequest() {
        setShowDeleteWarning(false);
        setShowNoEditNotice(false);
        if (editField == null)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/Field/AllowChange/" + editField.fld.ID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            if (data && editField.mode == 'delete') {
                setShowDeleteWarning(true);
            }
            if (!data) {
                setShowNoEditNotice(true);
                setState('edit');
            }
            if (data && editField.mode == 'edit') {
                setNewEditField(editField.fld);
            }
        });
        return handle;
    }
    function readSingleFile(evt, fileName) {
        setShowLoading(true);
        if (getFileExtension(fileName) == 'ini')
            (0,_MeterWizzard_FileParser__WEBPACK_IMPORTED_MODULE_4__.ParseINI)(evt, function (d) { return LoadBaseConfigFile(fileName, d); });
        if (getFileExtension(fileName) == 'par')
            (0,_MeterWizzard_FileParser__WEBPACK_IMPORTED_MODULE_4__.ParsePAR)(evt, function (d) { return LoadBaseConfigFile(fileName, d); });
        else
            setShowLoading(false);
    }
    function getFileExtension(fileName) {
        fileName = fileName.toLowerCase().replace(' ', '');
        var re = /(?:\.([^.]+))?$/;
        return re.exec(fileName)[1];
    }
    function LoadBaseConfigFile(file, Fields) {
        setFileName(file);
        setFileFields(Fields.map(function (item) { item.BaseConfigId = -1; return item; }));
        setSelectedFields([]);
        setState('upload');
        setShowLoading(false);
    }
    function SaveChange() {
        if (addedFields.some(function (item) { return item.length == 0; }))
            return;
        addedIndices.forEach(function (item, index) {
            $.ajax({
                type: "POST",
                url: homePath + "api/MiMD/PRC002/BaseConfig/Add",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(__assign(__assign({}, configurationlist.find(function (c) { return c.ID == item; })), { Fields: addedFields[index] })),
                dataType: 'json',
                cache: false,
                async: true
            });
        });
        props.setShow(false);
    }
    // #ToDo
    function RemoveField(item, configID) {
        if (item.BaseConfigId > -1) {
            setEditField({ fld: item, mode: 'delete' });
            return;
        }
        var index = addedIndices.findIndex(function (item) { return item == configID; });
        setAddedFields(function (flds) { var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(flds); updated[index] = updated[index].filter(function (f) { return f.ID != item.ID; }); return updated; });
        setConfigurationList(function (lst) { return lodash__WEBPACK_IMPORTED_MODULE_1__.clone(lst); });
    }
    // Add logic and UI to remove base Configs
    // Add logic and UI to add new Fields
    function AddNew() {
        var newID = Math.max.apply(Math, __spreadArray([], __read(configurationlist.map(function (item) { return item.ID; })))) + 1;
        setConfigurationList(function (lst) { var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(lst); updated.push(__assign(__assign({}, newConfiguration), { ID: newID })); return updated; });
        setAddedIndices(function (lst) {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(lst);
            updated.push(newID);
            return updated;
        });
        setNewConfiguration({ ID: -1, MeterId: props.MeterID, Name: 'New Configuration', Pattern: '*.ini' });
        setState('edit');
        setAddedFields(function (lst) {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(lst);
            updated.push([]);
            return updated;
        });
    }
    function CompleteUpload() {
        if (selectedFields.length == 0)
            return;
        var newID = Math.max.apply(Math, __spreadArray([], __read(configurationlist.map(function (item) { return item.ID; })))) + 1;
        var uniqName = fileName;
        var fileIndex = 0;
        while ((configurationlist.findIndex(function (item) { return item.Name == uniqName; }) > -1)) {
            fileIndex = fileIndex + 1;
            uniqName = fileName + ' ' + fileIndex;
        }
        setConfigurationList(function (lst) { var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(lst); updated.push({ Name: uniqName, MeterId: props.MeterID, Pattern: '**/' + fileName, ID: newID }); return updated; });
        setAddedIndices(function (lst) {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(lst);
            updated.push(newID);
            return updated;
        });
        setState('edit');
        setAddedFields(function (lst) {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(lst);
            updated.push(selectedFields);
            return updated;
        });
    }
    function getFields(id, setFields) {
        var index = addedIndices.findIndex(function (item) { return item == id; });
        if (index > -1) {
            setFields(addedFields[index]);
            return function () { };
        }
        if (id == -1)
            return function () { };
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/Field/" + id + "/Category/1",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setFields(data);
        });
        return function () { if (handle != null && handle.abort != null)
            handle.abort(); };
    }
    function DeleteField() {
        var h1 = $.ajax({
            type: "DELETE",
            url: homePath + "api/MiMD/PRC002/Field/Delete",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(editField.fld),
            dataType: 'json',
            cache: false,
            async: true
        });
        h1.then(function (d) {
            var handle = $.ajax({
                type: "GET",
                url: homePath + "api/MiMD/PRC002/BaseConfig?parentID=" + props.MeterID,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });
            handle.done(function (data) {
                if (data == null)
                    return;
                setServerConfigurationList(data);
            });
        });
    }
    function saveField() {
        if (newEditField.ID == -1) {
            //This is a new field
        }
        if (addedIndices.findIndex(function (i) { return i == newEditField.BaseConfigId; }) > -1) {
            var index_1 = addedIndices.findIndex(function (i) { return i == newEditField.BaseConfigId; });
            setAddedFields(function (lst) {
                var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(lst);
                var findex = updated[index_1].findIndex(function (item) { return item.ID == newEditField.ID; });
                updated[index_1][findex] = newEditField;
                return updated;
            });
        }
        setShowEditWarning(true);
    }
    function PatchField() {
        setState('edit');
        var h1 = $.ajax({
            type: "PATCH",
            url: homePath + "api/MiMD/PRC002/Field/Update",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(newEditField),
            dataType: 'json',
            cache: false,
            async: true
        });
        h1.then(function (d) {
            var handle = $.ajax({
                type: "GET",
                url: homePath + "api/MiMD/PRC002/BaseConfig?parentID=" + props.MeterID,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });
            handle.done(function (data) {
                if (data == null)
                    return;
                setServerConfigurationList(data);
            });
        });
    }
    function editFieldBtn(record, ConfigId) {
        if (record.BaseConfigId > -1) {
            setEditField({ fld: record, mode: 'edit' });
            setState('editField');
            return;
        }
        setEditField({ fld: __assign(__assign({}, record), { BaseConfigId: ConfigId }), mode: 'edit' });
        setState('editField');
    }
    var newConfigValid = newConfiguration.Name != null && newConfiguration.Name.length > 0 && newConfiguration.Pattern != null && newConfiguration.Pattern.length > 0 && uniqueCongifurationKey;
    var newFieldValid = newEditField != null && (newEditField.Name != null && newEditField.Name.length > 0) && (newEditField.Label != null && newEditField.Label.length > 0) &&
        (newEditField.Value != null && newEditField.Value.length > 0) && (newEditField.FieldType != 'number' || !isNaN(parseFloat(newEditField.Value)));
    var ConfirmDisabled = (((state == 'edit' && addedFields.some(function (item) { return item.length == 0; })) || (state == 'new' && !newConfigValid) ||
        (state == 'upload' && selectedFields.length == 0) || (state == 'editField' && !newFieldValid)) ? ' disabled' : '');
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.Modal, { Title: 'Meter Base Configuration', Show: props.show, CallBack: function (confirm, isBtn) {
                if (!isBtn && state == 'view')
                    props.setShow(false);
                if (isBtn && !confirm && state == 'view')
                    props.setShow(false);
                if (!isBtn && state != 'view')
                    setShowWarning(true);
                if (isBtn && !confirm && state == 'edit')
                    setShowWarning(true);
                if (isBtn && !confirm && state != 'edit' && state != 'view')
                    setState('edit');
                if (isBtn && confirm && state == 'upload')
                    CompleteUpload();
                if (isBtn && confirm && state == 'view')
                    setState('edit');
                if (isBtn && confirm && state == 'new' && newConfigValid)
                    AddNew();
                if (isBtn && confirm && state == 'edit')
                    SaveChange();
                if (isBtn && confirm && state == 'editField' && newFieldValid)
                    saveField();
            }, Size: 'xlg', ConfirmToolTipContent: 'ConfigConfirm', ShowX: true, ShowCancel: true, ConfirmText: state == 'edit' || state == 'editField' ? 'Save' : state == 'view' ? 'Edit' : 'Next', ConfirmBtnClass: (state != 'view' ? 'btn-success' : 'btn-primary') + ConfirmDisabled, CancelBtnClass: state != 'view' ? undefined : 'btn-primary', CancelText: state == 'view' ? 'Close' : state == 'edit' ? 'Cancel' : 'Back' },
            state == 'edit' || state == 'view' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_3__.default, { configurationList: configurationlist, getFieldList: getFields, OnRemove: state == 'edit' ? function (item, id) { return RemoveField(item, id); } : null, OnEdit: state == 'edit' ? function (item, id) { return editFieldBtn(item, id); } : null }) : null,
            state == 'edit' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-group", style: { width: '100%' } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "custom-file" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "file", className: "custom-file-input", accept: ".ini,.par" }),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "custom-file-label" }, "Choose a Configuration File if applicable")))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { setState('new'); } }, " Add New Base Configuration ")))) : null,
            state == 'upload' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MeterWizzard_FileParseWindow__WEBPACK_IMPORTED_MODULE_5__.default, { Fields: fileFields, setSelectedFields: setSelectedFields }) : null,
            state == 'new' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_NewConfigFields__WEBPACK_IMPORTED_MODULE_6__.default, { Record: newConfiguration, SetRecord: setNewConfiguration, UniqueKey: uniqueCongifurationKey }) : null,
            state == 'editField' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MeterWizzard_ConfigurationfieldEdit__WEBPACK_IMPORTED_MODULE_7__.default, { Field: newEditField, Setter: setNewEditField }) : null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.ToolTip, { Show: hover == 'Confirm' && ((state == 'edit' && addedFields.some(function (item) { return item.length == 0; })) || (state == 'new' && !newConfigValid) ||
                (state == 'upload' && selectedFields.length == 0) || (state == 'editField' && !newFieldValid)), Position: 'top', Target: 'ConfigConfirm', Zindex: 9999 },
            state == 'new' && (newConfiguration.Name == null || newConfiguration.Name.length == 0) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Name is required.") : null,
            state == 'new' && (newConfiguration.Pattern == null || newConfiguration.Pattern.length == 0) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Pattern is required (e.g. *.ini or *.par for allINI or PAR Files).") : null,
            state == 'new' && (newConfiguration.Name != null && uniqueCongifurationKey) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "Key needs to be unique.") : null,
            state == 'edit' && (addedFields.some(function (item) { return item.length == 0; })) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "At least 1 Field needs to be set up in Configuration '",
                configurationlist.find(function (item) { return item.ID == addedIndices[addedFields.findIndex(function (item) { return item.length == 0; })]; }).Name,
                "'.") : null,
            state == 'upload' && (selectedFields.length == 0) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "At least one Field needs to be selected.") : null,
            state == 'editField' && (newEditField.Name == null || newEditField.Name.length == 0) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Field Key is required.") : null,
            state == 'editField' && (newEditField.Label == null || newEditField.Label.length == 0) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Field Name is required.") : null,
            state == 'editField' && (newEditField.Value == null || newEditField.Value.length == 0) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Value is required.") : null,
            state == 'editField' && (newEditField.Value != null && (newEditField.FieldType == 'number' && isNaN(parseFloat(newEditField.Value)))) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Value for a Number Field needs to be numeric.") : null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.Warning, { Title: 'Close Configuration', CallBack: function (confirm) { setShowWarning(false); if (confirm)
                props.setShow(false); }, Show: showWarning, Message: 'This will close the Configuration and all unsaved changes will be lost.' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.Warning, { Title: 'Unable to Change Field', CallBack: function (confirm) { setShowNoEditNotice(false); }, Show: showNoEditNotice, Message: 'This Field can not be edited or deleted. There are unresolved Compliance issues associated with it. Resolve these issues before changing the Configuration.' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.Warning, { Title: 'Remove PRC002 compliance Field', CallBack: function (confirm) { if (confirm && editField != null && editField.mode == 'delete')
                DeleteField(); setShowDeleteWarning(false); }, Show: showDeleteWarning, Message: 'This will permanently delete this Field. Please confirm that this is desired. This action can not be undone.' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.Warning, { Title: 'Edit PRC002 compliance Field', CallBack: function (confirm) { if (confirm && newEditField != null && editField.mode == 'edit')
                PatchField(); setShowEditWarning(false); }, Show: showEditWarning, Message: 'This will permanently change this Field. Please confirm that this is desired. This action can not be undone.' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.LoadingScreen, { Show: showLoading })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeterConfigurationWindow);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/MeterDetail.tsx":
/*!************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/MeterDetail.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ManualAction */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/ManualAction.tsx");
//******************************************************************************************************
//  MeterDetail.tsx - Gbtc
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
//  09/04/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var MeterDetail = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showReviewed = _a[0], setShowReviewed = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined), 2), meter = _b[0], setMeter = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showRAP = _c[0], setShowRAP = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showAddIssue = _d[0], setShowAddIssue = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handleMeter = getMeter(props.MeterID);
        return function () {
            if (handleMeter != null && handleMeter.abort != null)
                handleMeter.abort();
        };
    }, [props.MeterID]);
    function getMeter(id) {
        if (id == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/ComplianceMeter/One/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setMeter(data);
        });
        return handle;
    }
    var stat = (meter == undefined ? undefined : props.stateList.find(function (s) { return s.ID == meter.StatusID; }));
    var lblStyle = {
        width: '100%',
        padding: 0,
        background: (stat == undefined ? '#000000' : stat.Color),
        align: 'center',
        color: (stat == undefined ? '#000000' : stat.TextColor),
        height: '25px'
    };
    function ActivateMeter() {
        $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/ComplianceMeter/Activate/" + meter.ID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        history.go(0);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '50%', padding: 0 } }, meter != undefined ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: __assign({}, lblStyle) }, "Meter not in Compliance"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                        width: '100%',
                        fontSize: 'xx-large',
                        textAlign: 'center',
                        background: (meter.Timer < 30 ? '#28a745' : (meter.Timer < 60 ? '#ffc107' : '#dc3545')),
                        color: (meter.Timer < 30 ? '#ffffff' : (meter.Timer < 60 ? '#212529' : '#ffffff')),
                        height: '50px'
                    } }, (meter.Status == 'In Compliance' ? 0 : meter.Timer)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: lblStyle }, "Days"))
            : null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '50%', padding: 5 } }, (meter != undefined) ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, meter.Reviewed ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-danger btn-block", onClick: function () { return setShowAddIssue(true); } }, " Add Compliance Issue "),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return setShowRAP(true); } }, " Submit Remedial Action Plan "),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__.default, { MeterId: props.MeterID, state: props.stateList.find(function (item) { return item.Description === 'Compliance Issue'; }), show: showAddIssue, setShow: setShowAddIssue }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__.default, { MeterId: props.MeterID, state: props.stateList.find(function (item) { return item.Description === 'RAP Submitted'; }), show: showRAP, setShow: setShowRAP })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return setShowReviewed(true); } }, " Meter Reviewed for Compliance "),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__.Warning, { Title: 'Warning', Message: 'This will activate the MiMD PRC002 monitoring for this meter. Please Review the current configuration before proceeding', CallBack: function (result) { if (result)
                        ActivateMeter(); setShowReviewed(false); }, Show: showReviewed }))) : null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeterDetail);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/MeterOverviewPage.tsx":
/*!******************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/MeterOverviewPage.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RecordList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordList */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/RecordList.tsx");
/* harmony import */ var _MeterDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MeterDetail */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/MeterDetail.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _DowloadFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DowloadFile */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/DowloadFile.tsx");
/* harmony import */ var _MeterWizzard_NewMeterWizzard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MeterWizzard/NewMeterWizzard */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/NewMeterWizzard.tsx");
/* harmony import */ var _MeterConfiguration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MeterConfiguration */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/MeterConfiguration.tsx");
//******************************************************************************************************
//  MeterOverviewPage.tsx - Gbtc
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
//  08/22/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};











var standardSearch = [
    { key: 'Name', label: 'Name', type: 'string' },
    { key: 'AssetKey', label: 'Asset Key', type: 'string' },
    { key: 'Make', label: 'Make', type: 'string' },
    { key: 'Model', label: 'Model', type: 'string' },
    { key: 'Status', label: 'Compliance Status', type: 'enum', enum: [] }
];
var PRC002MeterOverviewPage = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), meterFilters = _a[0], setMeterFilters = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), statusList = _b[0], setStatusList = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(standardSearch), 2), filterableList = _c[0], setFilterableList = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState("Status"), 2), meterSort = _d[0], setMeterSort = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), meterAsc = _e[0], setMeterAsc = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), meterList = _f[0], setMeterList = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(null), 2), selectedMeter = _g[0], setSelectedMeter = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('None'), 2), hover = _h[0], setHover = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showNewMeterWizard = _j[0], setShowNewMeterWizard = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showBaseConfig = _k[0], setShowBaseConfig = _k[1];
    var _l = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showFiles = _l[0], setShowFiles = _l[1];
    var _m = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Idle'), 2), searchState = _m[0], setSearchState = _m[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handleStatusList = getStatus();
        return function () {
            if (handleStatusList.abort != null)
                handleStatusList.abort();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setSearchState('Loading');
        var h = getMeters();
        return function () { if (h != null && h.abort != null)
            h.abort(); };
    }, [meterSort, meterAsc, meterFilters]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var index = meterList.findIndex(function (m) { return m.ID == props.MeterID; });
        if (index == -1)
            setSelectedMeter(null);
        else
            setSelectedMeter(meterList[index]);
    }, [props.MeterID, meterList]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handle = getAdditionalFields();
        return function () {
            if (handle.abort != null)
                handle.abort();
        };
    }, []);
    function getAdditionalFields() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/AdditionalField/ParentTable/Meter",
            contentType: "application/json; charset=utf-8",
            cache: false,
            async: true
        });
        function ConvertType(type) {
            if (type == 'string' || type == 'integer' || type == 'number' || type == 'datetime' || type == 'boolean')
                return { type: type };
            return {
                type: 'enum', enum: [{ Label: type, Value: type }]
            };
        }
        handle.done(function (d) {
            var ordered = lodash__WEBPACK_IMPORTED_MODULE_1__.orderBy(standardSearch.concat(d.map(function (item) { return (__assign({ label: "[AF" + (item.ExternalDB != undefined ? " " + item.ExternalDB : '') + "] " + item.FieldName, key: item.FieldName }, ConvertType(item.Type))); })), ['label'], ["asc"]);
            setFilterableList(ordered);
        });
        return handle;
    }
    function getStatus() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/ComplianceState/List",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setStatusList(data);
        });
        return handle;
    }
    function setMeterID(id) {
        history.push('index.cshtml?name=PRC002Overview&MeterID=' + id);
    }
    function getMeters() {
        var nativeFields = standardSearch.map(function (s) { return s.key; });
        var searches = meterFilters.map(function (s) { if (nativeFields.findIndex(function (item) { return item == s.FieldName; }) == -1)
            return __assign(__assign({}, s), { isPivotColumn: true });
        else
            return s; });
        var handle = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/ComplianceMeter/SearchableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: searches, OrderBy: meterSort, Ascending: meterAsc }),
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setMeterList(data);
            setSearchState('Idle');
        });
        handle.fail(function (d) { setSearchState('Error'); });
        return handle;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '100%', height: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__.SearchBar, { SetFilter: setMeterFilters, CollumnList: filterableList, defaultCollumn: { key: 'Name', label: 'Name', type: 'string' }, Direction: 'left', Label: 'Search', Width: '50%', GetEnum: function (setOptions, field) {
                if (field.key == 'Status') {
                    setOptions(statusList.map(function (item) { return ({ Label: item.Description, Value: item.Description }); }));
                    return function () { };
                }
                var handle = null;
                if (field.type != 'enum' || field.enum == undefined || field.enum.length != 1)
                    return function () { };
                handle = $.ajax({
                    type: "GET",
                    url: homePath + "api/ValueList/Group/" + field.enum[0].Value,
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    cache: true,
                    async: true
                });
                handle.done(function (d) { return setOptions(d.map(function (item) { return ({ Value: item.Value.toString(), Label: item.Text }); })); });
                return function () { if (handle != null && handle.abort == null)
                    handle.abort(); };
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "nav-item", style: { width: '50%', paddingRight: 10 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", { className: "border", style: { padding: '10px', height: '100%' } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", { className: "w-auto", style: { fontSize: 'large' } }, "Actions:"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'row' },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowNewMeterWizard(true); } }, " Add New Meter to PRC002 ")),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block" + (selectedMeter == null ? ' disabled' : ''), "data-tooltip": 'BaseConfig', onClick: function () { return setShowBaseConfig(selectedMeter != null); }, onMouseOver: function () { return setHover('BaseConfig'); }, onMouseOut: function () { return setHover('None'); } }, " Meter Configuration "),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block" + (selectedMeter == null ? ' disabled' : ''), onMouseOver: function () { return setHover('Files'); }, onMouseOut: function () { return setHover('None'); }, "data-tooltip": 'Files', onClick: function () { return setShowFiles(selectedMeter != null); } }, " Download Files ")))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__.ToolTip, { Position: 'bottom', Show: hover == 'Files' && selectedMeter == null, Target: 'Files' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " A Meter needs to be selected.")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__.ToolTip, { Position: 'bottom', Show: hover == 'BaseConfig' && selectedMeter == null, Target: 'BaseConfig' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " A Meter needs to be selected.")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MeterConfiguration__WEBPACK_IMPORTED_MODULE_9__.default, { MeterID: props.MeterID, setShow: setShowBaseConfig, show: showBaseConfig }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__.Modal, { Title: 'Download Current Config File', Show: showFiles, CallBack: function (confirm) { setShowFiles(false); }, Size: 'sm', ShowX: true, ShowCancel: false, ConfirmText: 'Close' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DowloadFile__WEBPACK_IMPORTED_MODULE_7__.default, { MeterId: props.MeterID })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MeterWizzard_NewMeterWizzard__WEBPACK_IMPORTED_MODULE_8__.default, { show: showNewMeterWizard, setShow: setShowNewMeterWizard }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '100%', height: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 0, height: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '50%', height: 'calc( 100% - 136px)', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_6__.default, { cols: [
                            { key: 'Name', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            { key: 'Model', label: 'Model', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            { key: 'Make', label: 'Make', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            {
                                key: 'Status', label: 'Status', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                                    var stat = statusList.find(function (s) { return s.ID === item.StatusID; });
                                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                                            fontWeight: 600,
                                            width: '90%',
                                            height: '35px',
                                            background: (stat == undefined ? '#f8f9fa' : stat.Color),
                                            border: '2px solid',
                                            borderRadius: '5px',
                                            textAlign: 'center',
                                            lineHeight: '35px',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            color: (stat == undefined ? '#212529' : stat.TextColor),
                                        } },
                                        " ",
                                        item.Status,
                                        " ");
                                }
                            },
                        ], tableClass: "table table-hover", tableStyle: { height: '100%' }, data: meterList, sortField: meterSort, ascending: meterAsc, onSort: function (d) {
                            if (d.col == meterSort)
                                setMeterAsc(!meterAsc);
                            else {
                                setMeterSort(d.col);
                                setMeterAsc(d.col != 'Status');
                            }
                        }, onClick: function (d) { setMeterID(d.row.ID); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', height: 'calc(100% - 80px)', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID === props.MeterID; } })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '50%', height: '200px', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MeterDetail__WEBPACK_IMPORTED_MODULE_4__.default, { MeterID: (isNaN(props.MeterID) ? -1 : props.MeterID), stateList: statusList })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RecordList__WEBPACK_IMPORTED_MODULE_3__.default, { MeterId: (isNaN(props.MeterID) ? -1 : props.MeterID), StateList: statusList })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PRC002MeterOverviewPage);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/RecordList.tsx":
/*!***********************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterOverview/RecordList.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
//******************************************************************************************************
//  MeterChangePan.tsx - Gbtc
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
//  09/04/2020 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



var RecordList = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), changeList = _a[0], setChangeList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState("Status"), 2), recordSort = _b[0], setRecordSort = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), recordAsc = _c[0], setRecordAsc = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handleRecordList = getRecords();
        return function () {
            if (handleRecordList != null && handleRecordList.abort != null)
                handleRecordList.abort();
        };
    }, [props.MeterId]);
    function getRecords() {
        if (props.MeterId == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/ComplianceRecord/" + props.MeterId + "/" + recordSort + "/" + (recordAsc ? 1 : 0),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setChangeList(data);
        });
        return handle;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (props.MeterId > -1 ?
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { width: '100%', height: 'calc( 100% - 336px)', padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__.default, { cols: [
                        {
                            key: 'Status', label: 'Status', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                                var stat = props.StateList.find(function (s) { return s.ID === item.Status; });
                                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                                        fontWeight: 600,
                                        width: '90%',
                                        height: '35px',
                                        background: (stat == undefined ? '#f8f9fa' : stat.Color),
                                        border: '2px solid',
                                        borderRadius: '5px',
                                        textAlign: 'center',
                                        lineHeight: '35px',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        color: (stat == undefined ? '#212529' : stat.TextColor),
                                    } },
                                    " ",
                                    (stat == undefined ? '' : stat.Description),
                                    " ");
                            }
                        },
                        { key: 'Timestamp', label: 'Last Updated', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return moment(item.Timestamp).format("MM/DD/YY HH:mm CT"); } },
                        { key: 'User', label: ' By', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } }
                    ], tableClass: "table table-hover", data: changeList, sortField: recordSort, ascending: recordAsc, onSort: function (d) {
                        if (d.col == recordSort)
                            setRecordAsc(!recordAsc);
                        else {
                            setRecordSort(d.col);
                            setRecordAsc(d.col == 'User');
                        }
                    }, onClick: function (d) {
                        history.push('index.cshtml?name=PRC002Change&RecordID=' + d.row.ID);
                    }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })))
        : null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecordList);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/ConfigurationWizard.tsx":
/*!*******************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/ConfigurationWizard.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FileParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileParser */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/FileParser.tsx");
/* harmony import */ var _FileParseWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileParseWindow */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/FileParseWindow.tsx");
/* harmony import */ var _ConfigurationfieldEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfigurationfieldEdit */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/ConfigurationfieldEdit.tsx");
/* harmony import */ var _Common_NewConfigFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/NewConfigFields */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/NewConfigFields.tsx");
/* harmony import */ var _Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/BaseConfigWindow */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/BaseConfigWindow.tsx");
//******************************************************************************************************
//  BaseConfigWindow.tsx - Gbtc
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
//  02/08/2020 - C. Lackner
//       Generated original version of source cod
//
//******************************************************************************************************
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};







var ConfigurationWizard = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({ ID: -1, MeterId: -1, Name: 'All INI Files', Pattern: '*.ini' }), 2), newConfig = _a[0], setNewConfig = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Category: '', Label: 'Field', Description: '' }), 2), editField = _b[0], setEditField = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(true), 2), newConfigUniq = _c[0], setNewConfigUniq = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(''), 2), fileName = _d[0], setFileName = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), fileFields = _e[0], setFileFields = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), selectedFields = _f[0], setSelectedFields = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (props.step != 'BaseConfig')
            return function () { };
        $(".custom-file-input").on("change", function (evt) {
            var fileName = evt.target.value.split("\\").pop();
            $(evt.target).siblings(".custom-file-label").addClass("selected").html(fileName);
            readSingleFile(evt, fileName);
        });
        return function () { return $(".custom-file-input").off('change'); };
    }, [props.step]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var error = [];
        if (props.step == 'BaseConfig') {
            if (props.BaseConfigs.size == 0)
                error.push('At least 1 Base Configuration needs to be set up.');
            if (props.BaseConfigs.size > 0)
                __spreadArray([], __read(props.BaseConfigs.keys())).forEach(function (item) {
                    if (props.BaseConfigs.get(item)[1].length == 0)
                        error.push('At least 1 Field needs to be set up in Configuration \'' + (props.BaseConfigs.get(item)[0].Name) + '\'');
                });
        }
        if (props.step == 'New BaseConfig') {
            if (newConfig.Name == null || newConfig.Name.length == 0)
                error.push('A Name is required.');
            if (newConfig.Pattern == null || newConfig.Pattern.length == 0)
                error.push('A Pattern is required (e.g. *.ini or *.par for allINI or PAR Files).');
            if (newConfig.Name != null && !newConfigUniq)
                error.push('Key needs to be unique.');
        }
        if (props.step == 'Edit Field') {
            if (editField.Name == null || editField.Name.length == 0)
                error.push('A Field Key is required.');
            if (editField.Label == null || editField.Label.length == 0)
                error.push('A Field Name is required.');
            if (editField.Value == null || editField.Value.length == 0)
                error.push('A Value is required.');
            if (editField.Value != null && (editField.FieldType == 'number' && isNaN(parseFloat(editField.Value))))
                error.push('A Value for a Number Field needs to be numeric.');
        }
        if (props.step == 'File Load') {
            if (!(selectedFields.length > 0))
                error.push('At least one Field needs to be selected.');
        }
        props.setError(error);
    }, [props.step, props.BaseConfigs, newConfig, newConfigUniq, editField, selectedFields]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (__spreadArray([], __read(props.BaseConfigs.values())).map(function (i) { return i[0]; }).findIndex(function (item) { return item.Name == newConfig.Name; }) == -1)
            setNewConfigUniq(true);
        else
            setNewConfigUniq(false);
    }, [props.BaseConfigs, newConfig]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (props.step == 'New BaseConfig')
            setNewConfig({ ID: -1, MeterId: -1, Name: 'Base Config Name', Pattern: '*.ini' });
        if (props.step == 'Edit Field')
            setEditField({
                ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Label: 'Field', Category: '', Description: ''
            });
        if (props.step == 'File Load') {
            setFileFields([]);
            setSelectedFields([]);
        }
        if (props.step == 'BaseConfig') {
            props.setStep('Meter');
            return;
        }
        props.setStep('BaseConfig');
    }, [props.reset]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (props.step == 'New BaseConfig') {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(props.BaseConfigs);
            var id = (updated.size > 0 ? Math.max.apply(Math, __spreadArray([], __read(updated.keys()))) : 0) + 1;
            updated.set(id, [__assign(__assign({}, newConfig), { ID: id }), []]);
            props.setBaseConfig(updated);
            setNewConfig({ ID: -1, MeterId: -1, Name: 'Base Config Name', Pattern: '*.ini' });
        }
        if (props.step == 'Edit Field' && editField.ID == -1) {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(props.BaseConfigs);
            var cong = updated.get(editField.BaseConfigId);
            var id = (cong[1].length > 0 ? Math.max.apply(Math, __spreadArray([], __read(cong[1].map(function (item) { return item.ID; })))) + 1 : 1);
            cong[1] = __spreadArray(__spreadArray([], __read(cong[1])), [__assign(__assign({}, editField), { ID: id })]);
            updated.set(editField.BaseConfigId, cong);
            props.setBaseConfig(updated);
            setEditField({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Label: 'Field', Category: '', Description: '' });
        }
        if (props.step == 'Edit Field' && editField.ID != -1) {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(props.BaseConfigs);
            var cong = updated.get(editField.BaseConfigId);
            var index = cong[1].findIndex(function (item) { return item.ID == editField.ID; });
            cong[1][index] = editField;
            updated.set(editField.BaseConfigId, cong);
            props.setBaseConfig(updated);
            setEditField({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '', Label: 'Field', Category: '', Description: '' });
        }
        if (props.step == 'File Load') {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(props.BaseConfigs);
            var id = (updated.size > 0 ? Math.max.apply(Math, __spreadArray([], __read(updated.keys()))) : 0) + 1;
            var fields = selectedFields.map(function (item, index) { return (__assign({ ID: index + 1 }, item)); });
            var uniqName_1 = fileName;
            var fileIndex = 0;
            while ((__spreadArray([], __read(props.BaseConfigs.values())).map(function (i) { return i[0]; }).findIndex(function (item) { return item.Name == uniqName_1; }) > -1)) {
                fileIndex = fileIndex + 1;
                uniqName_1 = fileName + ' ' + fileIndex;
            }
            updated.set(id, [{ Name: uniqName_1, Pattern: '**/' + fileName, MeterId: -1, ID: id }, fields]);
            props.setBaseConfig(updated);
            setFileFields([]);
            setSelectedFields([]);
        }
        props.setStep('BaseConfig');
    }, [props.cont]);
    function readSingleFile(evt, fileName) {
        props.setLoading(true);
        if (getFileExtension(fileName) == 'ini')
            (0,_FileParser__WEBPACK_IMPORTED_MODULE_2__.ParseINI)(evt, function (d) { return LoadBaseConfigFile(fileName, d); });
        if (getFileExtension(fileName) == 'par')
            (0,_FileParser__WEBPACK_IMPORTED_MODULE_2__.ParsePAR)(evt, function (d) { return LoadBaseConfigFile(fileName, d); });
        else
            props.setLoading(false);
    }
    function getFileExtension(fileName) {
        fileName = fileName.toLowerCase().replace(' ', '');
        var re = /(?:\.([^.]+))?$/;
        return re.exec(fileName)[1];
    }
    function LoadBaseConfigFile(file, Fields) {
        setFileName(file);
        setFileFields(Fields.map(function (item) { item.BaseConfigId = -1; return item; }));
        props.setStep('File Load');
        props.setLoading(false);
    }
    function editConfigField(record, configID) {
        props.setStep('Edit Field');
        setEditField(__assign(__assign({}, record), { BaseConfigId: configID }));
    }
    function addConfigField(ConfigID) {
        props.setStep('Edit Field');
        setEditField(function (fld) { return (__assign(__assign({}, fld), { BaseConfigId: ConfigID })); });
    }
    function getFields(ConfigID, SetFields) {
        if (props.BaseConfigs.has(ConfigID))
            SetFields(props.BaseConfigs.get(ConfigID)[1]);
        return function () { };
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        props.step == 'BaseConfig' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_6__.default, { configurationList: __spreadArray([], __read(props.BaseConfigs.values())).map(function (item) { return item[0]; }), getFieldList: getFields, OnEdit: function (record, configID) { return editConfigField(record, configID); }, OnNew: function (id) { return addConfigField(id); } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-group", style: { width: '100%' } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "custom-file" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "file", className: "custom-file-input", accept: ".ini,.par" }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "custom-file-label" }, "Choose a Configuration File if applicable")))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { props.setStep('New BaseConfig'); } }, " Add New Base Configuration ")))) : null,
        props.step == 'New BaseConfig' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_NewConfigFields__WEBPACK_IMPORTED_MODULE_5__.default, { Record: newConfig, SetRecord: setNewConfig, UniqueKey: newConfigUniq }) : null,
        props.step == 'Edit Field' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigurationfieldEdit__WEBPACK_IMPORTED_MODULE_4__.default, { Field: editField, Setter: setEditField }) : null,
        props.step == 'File Load' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FileParseWindow__WEBPACK_IMPORTED_MODULE_3__.default, { Fields: fileFields, setSelectedFields: setSelectedFields }) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigurationWizard);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/ConfigurationfieldEdit.tsx":
/*!**********************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/ConfigurationfieldEdit.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _MultiInputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiInputField */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/MultiInputField.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
//******************************************************************************************************
//  CofigurationFieldEdit.tsx - Gbtc
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
//  03/15/2021 - C. Lackner
//       Generated original version of source cod
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var ConfigFieldEdit = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), hover = _a[0], sethover = _a[1];
    var FieldTypeOptions = [{ Value: 'string', Label: 'Text' }, { Value: 'number', Label: 'Number' }];
    var NumberChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: '>', Label: '>' }, { Value: '<', Label: '<' }];
    var TextChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: 'IN', Label: 'In' }];
    var hasDesc = props.Field.Description != undefined && props.Field.Description.length > 0;
    function ValidValue() {
        return (props.Field.Value != null && props.Field.Value.length > 0 && (props.Field.FieldType != 'number' || !isNaN(parseFloat(props.Field.Value))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Field, Field: 'FieldType', Options: FieldTypeOptions, Label: 'Field Type', Setter: function (record) {
                if (record.FieldType !== props.Field.FieldType && record.Comparison != '<>' && record.Comparison != '=')
                    record.Comparison = '=';
                props.Setter(record);
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Record: props.Field, Field: 'Category', Setter: function (record) { props.Setter(record); }, Valid: function () { return true; }, Label: 'Category' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Record: props.Field, Field: 'Label', Setter: function (record) { props.Setter(record); }, Valid: function () { return props.Field.Label != null && props.Field.Label.length > 0; }, Label: 'Field Name' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Record: props.Field, Field: 'Name', Setter: function (record) { props.Setter(record); }, Valid: function () { return props.Field.Name != null && props.Field.Name.length > 0; }, Label: 'Field Key' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Field, Field: 'Comparison', Options: (props.Field.FieldType == 'number' ? NumberChecks : TextChecks), Label: 'Rule', Setter: function (record) { props.Setter(record); } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { onMouseEnter: function () { return sethover(true); }, onMouseLeave: function () { return sethover(false); }, "data-tooltip": "Description" }, (props.Field.Comparison == 'IN' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MultiInputField__WEBPACK_IMPORTED_MODULE_2__.default, { data: props.Field, Setter: function (record) { props.Setter(record); } }) :
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Record: props.Field, Field: 'Value', Setter: function (record) { props.Setter(record); }, Valid: function () { return ValidValue(); }, Label: 'Value', Feedback: props.Field.FieldType != 'number' ? 'Value is required.' : 'Value is required and needs to be a number.' }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__.ToolTip, { Show: hover && hasDesc, Position: 'top', Target: 'Description' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.Field.Description))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigFieldEdit);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/FileParseWindow.tsx":
/*!***************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/FileParseWindow.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _Common_ConfigFieldValueTableField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/ConfigFieldValueTableField */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/Common/ConfigFieldValueTableField.tsx");
//******************************************************************************************************
//  FileParseWindow.tsx - Gbtc
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
//  03/15/2021 - C. Lackner
//       Generated original version of source cod
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};





var FileParseWindow = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(new Map()), 2), allFields = _a[0], setAllFields = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(new Map()), 2), selectedFields = _b[0], setSelectedFields = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var map = new Map();
        props.Fields.forEach(function (item) {
            if (map.has(item.Category))
                map.get(item.Category).push(item);
            else
                map.set(item.Category, [item]);
        });
        setAllFields(map);
        setSelectedFields(new Map());
    }, [props.Fields]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var lst = [].concat.apply([], __spreadArray([], __read(__spreadArray([], __read(selectedFields.keys())).map(function (item) { return selectedFields.get(item); }))));
        props.setSelectedFields(lst);
    }, [selectedFields]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "accordion", style: { maxHeight: window.innerHeight - 300, overflowY: 'scroll' } }, __spreadArray([], __read(allFields.keys())).map(function (key, index) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderSection, { Title: key, key: index, fields: allFields.get(key), setFields: function (flds) { setSelectedFields(function (old) { var updated = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(old); updated.set(key, flds); return updated; }); } }); }))));
};
var HeaderSection = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), show = _a[0], setShow = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(0), 2), selectAll = _b[0], setSelectAll = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), allSelected = _c[0], setAllSelected = _c[1];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: "card-header", style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-link btn-block text-left col-10", type: "button", onClick: function () { return setShow(!show); } }, props.Title),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn text-left btn-bloc col-2 " + (allSelected ? "btn-primary" : "btn-outline-primary"), type: "button", onClick: function () { return setSelectAll(function (x) { return x + 1; }); } },
                    " ",
                    allSelected ? "DeSelect All" : "Select All",
                    " ")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "collapse" + (show ? " show" : '') },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__.SelectTable, { cols: [
                            { key: 'Label', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em)' }, rowStyle: { width: 'calc(30% - 8.25em)' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__.Input, { Record: item, Field: 'Label', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'FieldType', label: 'Type', headerStyle: { width: '8em' }, rowStyle: { width: '8em' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__.Input, { Record: item, Field: 'FieldType', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'Comparison', label: '', headerStyle: { width: '5em' }, rowStyle: { width: '5em' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__.Input, { Record: item, Field: 'Comparison', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            {
                                key: 'Value', label: 'Value', headerStyle: { width: 'calc(70% - 8.25em)' }, rowStyle: { width: 'calc(70% - 8.25em)' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ConfigFieldValueTableField__WEBPACK_IMPORTED_MODULE_4__.default, { Record: item }); }
                            },
                        ], KeyField: 'ID', tableClass: "table table-hover", data: props.fields, sortField: 'Category', ascending: true, selectAllCounter: selectAll, onSelection: function (d) {
                            if (d.length == props.fields.length)
                                setAllSelected(true);
                            else
                                setAllSelected(false);
                            props.setFields(d);
                        }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' } }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileParseWindow);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/FileParser.tsx":
/*!**********************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/FileParser.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParseINI": () => (/* binding */ ParseINI),
/* harmony export */   "ParsePAR": () => (/* binding */ ParsePAR)
/* harmony export */ });
function ParseINI(evt, complete) {
    var f = evt.target.files[0];
    var results = [];
    if (f) {
        var r = new FileReader();
        r.onload = function (e) {
            var contents = e.target.result;
            var lines = contents.split(/[\r\n]+/g);
            var category = "";
            lines.forEach(function (ln, index) {
                if (!ln.includes('=')) {
                    if (ln.includes('[') && ln.includes(']'))
                        category = ln.substr(ln.indexOf('[') + 1, ln.lastIndexOf(']') - ln.indexOf('[') - 1);
                    return;
                }
                var i = ln.indexOf('=');
                if (results.map(function (item) { return item.key; }).includes(ln.substr(0, i)))
                    results.push({ key: ln.substr(0, i) + '-' + index, value: ln.substr(i + 1), category: category });
                else
                    results.push({ key: ln.substr(0, i), value: ln.substr(i + 1), category: category });
            });
            complete(results.map(function (item, index) { return ({
                ID: index,
                BaseConfigId: -1,
                Name: item.key,
                Value: item.value,
                Comparison: '=',
                FieldType: 'string',
                Category: item.category,
                Label: item.key,
                Description: ''
            }); }));
        };
        r.readAsText(f);
    }
}
function ParsePAR(evt, complete) {
    var f = evt.target.files[0];
    var results = [];
    if (f) {
        var r = new FileReader();
        var trimChar_1 = function (s, charToTrim) {
            var regExpA = new RegExp(charToTrim + "+$");
            var regExpB = new RegExp("^" + charToTrim + "+");
            var result = s.replace(regExpA, "");
            result = result.replace(regExpB, "");
            return result;
        };
        r.onload = function (e) {
            var contents = e.target.result;
            var lines = contents.split(/[\r\n]+/g);
            var newIndex = 1;
            if (lines.length > 0) {
                var i_1 = lines[0].indexOf('=');
                var row = lines[0].substring(0, i_1);
                var data = lines[0].substring(i_1 + 1).trim().split(',');
                if (data.length > 1) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Station", Value: trimChar_1(data[1], '"'), Label: "Station", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 2) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Nominal Frequency", Value: data[2], Label: "Nominal Frequency", Category: "Header", Description: '0: 50Hz <br> 1: 50Hz' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 3) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. DC Channels", Value: data[3], Label: "Num. DC Channels", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 4) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Analog Channels", Value: data[4], Label: "Num. Analog Channels", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 5) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Event Channels", Value: data[5], Label: "Num. Event Channels", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 6) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Triggers", Value: data[6], Label: "Num. Triggers", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 7) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Shunt Type", Value: data[7], Label: "Shunt Type", Category: "Header", Description: '0: External <br> 1: Internal' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 8) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "OverWrite old Records", Value: data[8], Label: "OverWrite old Records", Category: "Header", Description: '0: No <br> 1: Yes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 9) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER Channels in PAR", Value: data[9], Label: "SER Channels in PAR", Category: "Header", Description: '# of event channels that are set to record to SER' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 10) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER CHannels that cause DFR Stop", Value: data[10], Label: "SER CHannels that cause DFR Stop", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 11) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER AutoStop if  #Triggers >", Value: data[11], Label: "SER AutoStop if  #Triggers >", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 12) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER AutoStop Time Period", Value: data[12], Label: "SER AutoStop Time Period", Category: "Header", Description: 'in Minutes'
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 13) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER Restore Period", Value: data[13], Label: "SER Restore Period", Category: "Header", Description: 'in Minutes'
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 14) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Debounce Time", Value: data[14], Label: "Debounce Time", Category: "Header", Description: ''
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 15) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Prefault", Value: data[15], Label: "Transient Prefault", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 16) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Postfault", Value: data[16], Label: "Transient Postfault", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 17) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Fault Limit", Value: data[17], Label: "Transient Fault Limit", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 18) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Sampling Frequency", Value: data[18], Label: "Transient Sampling Frequency", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 19) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Prefault", Value: data[19], Label: "Extended Prefault", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 20) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Post Fault", Value: data[20], Label: "Extended Post Fault", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 21) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Fault", Value: data[21], Label: "Extended Fault", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 22) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Sampling Frequency", Value: data[22], Label: "Extended Sampling Frequency", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 23) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended RMS Cycles/Point", Value: data[23], Label: "Extended RMS Cycles/Point", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 24) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous Recording Samples/Point Freq-RMS-Phase", Value: data[24], Label: "Continuous Recording Samples/Point Freq-RMS-Phase", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 25) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous Recording Storage Length (Days)", Value: data[25], Label: "Continuous Recording Storage Length", Category: "Header", Description: 'in Days' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 26) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continous Oscillography Storage Length (Days)", Value: data[26], Label: "Continous Oscillography Storage Length", Category: "Header", Description: 'in Days' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 27) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Trigger Channels - Auto Stop If # Triggers >", Value: data[27], Label: "Trigger Channels - Auto Stop If # Triggers >", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 28) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channels Auto Stop Time Period (Minutes)", Value: data[28], Label: "Triggers Channels Auto Stop Time Period", Category: "Header", Description: 'in Minutes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 29) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channels Auto Stop - Restore After (Mins)", Value: data[29], Label: "Triggers Channels Auto Stop - Restore After", Category: "Header", Description: 'in Minutes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 30) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channel Auto Stop - Apply to Disturbance Triggers Only (0=no 1=yes)", Value: data[30], Label: "Triggers Channel Auto Stop", Category: "Header", Description: ' Apply to Disturbance Triggers Only <br> <br> 0: No <br> 1: yes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 31) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Rate Oscillography Storage (Days)", Value: data[31], Label: "Transient Rate Oscillography Storage", Category: "Header", Description: 'in Days' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 32) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# Faults on Disk", Value: data[32], Label: "# Faults on Disk", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 33) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Master Chassis", Value: data[33], Label: "Master Chassis", Category: "Header", Description: '0: DC1 <br> 1: DC2 <br> ....' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 34) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended RMS Include Phase Angle", Value: data[34], Label: "Extended RMS Include Phase Angle", Category: "Header", Description: '0: No <br> 1: Yes'
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 35) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "EVNOMISS (Do Not Restrict Event Only Trigger)", Value: data[35], Label: "EVNOMISS (Do Not Restrict Event Only Trigger)", Category: "Header", Description: '0: No <br> 1: Yes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 36) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous PQ Data", Value: data[36], Label: "Continuous PQ Data", Category: "Header", Description: '0: No <br> 1: Yes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 37) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "CBA Phase Rotation", Value: data[37], Label: "CBA Phase Rotation", Category: "Header", Description: '0: No <br> 1: Yes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 38) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# of TW Channels", Value: data[38], Label: "# of TW Channels", Category: "Header", Description: '' });
                    newIndex = newIndex + 1;
                }
            }
            if (lines.length > 1) {
                var i_2 = lines[1].indexOf('=');
                var row = lines[1].substring(0, i_2);
                var data = lines[1].substring(i_2 + 1).trim().split(',');
                if (data.length > 0) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "RmSetup Chasis Port", Value: data[0], Label: "Chasis Port", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 1) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "RMSetup Time sync", Value: data[1], Label: "Time sync", Category: 'RMSetup', Description: '0: Modulated <br> 1: Unmodulated <br> 2: SNTP' });
                    newIndex = newIndex + 1;
                }
                // Missing alarm Mapping
                if (data.length > 3) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "FaultLED ON Duration", Value: data[3], Label: "FaultLED ON Duration", Category: 'RMSetup', Description: 'in seconds' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 4) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Disk Alarm", Value: data[4], Label: "Disk Alarm", Category: 'RMSetup', Description: 'in MB' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 5) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DNP3 Slave", Value: data[5], Label: "DNP3 Slave", Category: 'RMSetup', Description: ''
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 6) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DNP3 Master", Value: data[6], Label: "DNP3 Master", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 7) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Report Alarm States as SER", Value: data[7], Label: "Report Alarm States as SER", Category: 'RMSetup', Description: ''
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 8) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DSP Temperature Lim", Value: data[8], Label: "DSP Temperature Lim", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 9) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "PMU", Value: data[9], Label: "PMU", Category: 'RMSetup', Description: '0: Disabled <br> 1: Enabled' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 10) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Sync loss Delay", Value: data[10], Label: "Sync loss Delay", Category: 'RMSetup', Description: 'in Minutes' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 11) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# Hours Different to GPS", Value: data[11], Label: "# Hours Different to GPS", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 12) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "#HD/SSD (PC-Health)", Value: data[12], Label: "#HD/SSD (PC-Health)", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 13) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Traveling Wave IP Port", Value: data[13], Label: "Traveling Wave IP Port", Category: 'RMSetup', Description: '' });
                    newIndex = newIndex + 1;
                }
                if (data.length > 14) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Auto DST", Value: data[14], Label: "Auto DST", Category: 'RMSetup', Description: '0: No <br> 1: Yes' });
                    newIndex = newIndex + 1;
                }
            }
            var i = 2;
            while (i < lines.length) {
                var r_1 = lines[i].indexOf('=');
                var row = lines[i].substring(0, r_1);
                var data = lines[i].substring(r_1 + 1).trim().split(',');
                var Category = row;
                if (row.startsWith('C')) {
                    Category = "Chasis " + Category;
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 1", Value: data[0], Category: Category, Label: 'Slot 1', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 2", Value: data[1], Category: Category, Label: 'Slot 2', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 3", Value: data[2], Category: Category, Label: 'Slot 3', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 4", Value: data[3], Category: Category, Label: 'Slot 4', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 5", Value: data[4], Category: Category, Label: 'Slot 5', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 6", Value: data[5], Category: Category, Label: 'Slot 6', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 7", Value: data[6], Category: Category, Label: 'Slot 7', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 8", Value: data[7], Category: Category, Label: 'Slot 8', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 9", Value: data[8], Category: Category, Label: 'Slot 9', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 9) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 10", Value: data[9], Category: Category, Label: 'Slot 10', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 10) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 11", Value: data[10], Category: Category, Label: 'Slot 11', Description: 'A: Analog Card <br> E: Event Card <br> V: Virtual Card <br> X: No Entry' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 11) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DSP Address", Value: data[11], Category: Category, Label: 'DSP Address', Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 12) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - EXT1 PPS", Value: data[12], Category: Category, Label: 'EST1 PPS', Description: '0: No <br> 1: Yes' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 13) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ignore", Value: data[13], Category: Category, Label: 'Ignore', Description: '0: No <br> 1: Yes' });
                        newIndex = newIndex + 1;
                    }
                }
                if (row.startsWith('A')) {
                    Category = "Analog " + Category;
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar_1(data[0], '"'), Category: Category, Label: 'Name', Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Type", Value: data[1], Category: Category, Label: 'Type', Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ratio", Value: data[2], Category: Category, Label: 'Ratio', Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Full Scale", Value: data[3], Category: Category, Label: 'Full Scale', Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ext/Int shunt", Value: data[4], Category: Category, Label: 'Ext/Int shunt', Description: '0: External <br> 1: Internal' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Phase", Value: data[5], Category: Category, Label: 'Phase', Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P1", Value: data[6], Category: Category, Label: 'Virtual Channel Assignment P1', Description: '-1: Wired <br> 0+: offset (e.g. 17: A18)' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P2", Value: data[7], Category: Category, Label: 'Virtual Channel Assignment P2', Description: '-1: Wired <br> 0+: offset (e.g. 17: A18)' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P3", Value: data[8], Category: Category, Label: 'Virtual Channel Assignment P3', Description: '-1: Wired <br> 0+: offset (e.g. 17: A18)' });
                        newIndex = newIndex + 1;
                    }
                }
                if (row.startsWith('T')) {
                    Category = "Trigger " + Category;
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar_1(data[0], '"'), Category: Category, Label: "Name", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Assigned Analog Channel", Value: data[1], Category: Category, Label: "Analog Channel", Description: '0: A1 <br> 1: a2 <br> ...' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trigger Type", Value: data[2], Category: Category, Label: "Type", Description: '0: Disabled <br> 1: RMS <br> 2: Hz Step <br> 3: 0 Sequence <br> 4: + Sequence <br> 5: - Sequence <br> 6: HD <br> 7: THD <br> 8: 1P-W <br> 9: 1P-Vr <br> 10: 1P-PF <br> 11: 3P-W <br> 12: 3P-Vr <br> 13: 3P-PF <br> 14: Impulse <br> 15: Unbalance <br> 16: Flicker <br> 17: Hz <br> 18: Hz Sign <br> 19: Gen-W <br> 20: Gen Vr <br> 21: Gen-PF <br> 22: Magnitude' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trigger Condition", Value: data[3], Category: Category, Label: "Condition", Description: '0: Over <br> 1: Under <br> 2: Both <br>' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Duration", Value: data[4], Category: Category, Label: "Duration", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Over", Value: data[5], Category: Category, Label: "Trip on over", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Under", Value: data[6], Category: Category, Label: "Trip on under", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Rate", Value: data[7], Category: Category, Label: "Trip on rate", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Hysteresis", Value: data[8], Category: Category, Label: "Hysteresis", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 9) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Priority", Value: data[9], Category: Category, Label: "Priority", Description: '0: No <br> 1: Yes' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 13) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Disturbance", Value: data[13], Category: Category, Label: "Disturbance", Description: '0: No <br> 1: Yes' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 14) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Minimum RMS", Value: data[14], Category: Category, Label: "Min RMS", Description: 'For HZ Step, Harmonic and certain other Triggers <br> Trigger disabled if Value < Min RMS' });
                        newIndex = newIndex + 1;
                    }
                }
                if (row.startsWith('E')) {
                    Category = "Event Channel" + Category;
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar_1(data[0], '"'), Category: Category, Label: "Name", Description: '' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - State", Value: data[1], Category: Category, Label: "State", Description: 'o: Open <br> c: Close' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DFR Start", Value: data[2], Category: Category, Label: "DFR Start", Description: 'i: INhibited <br> u: Up <br> d: Down <br> b: Both <br> Capital Letters indicate Priority Trigger' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DFR/SER", Value: data[3], Category: Category, Label: "DFR/SER", Description: 'B: Both <br> D: DFR <br> S: SER' });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - SER Run", Value: data[4], Category: Category, Label: "SER Run", Description: 'R: Run <br> S: Stop <br> A: Alarm <br> C: CrossTrigger' });
                        newIndex = newIndex + 1;
                    }
                }
                i = i + 1;
            }
            complete(results);
        };
        r.readAsText(f);
    }
}


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/MultiInputField.tsx":
/*!***************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/MultiInputField.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  MultiInputField.tsx - Gbtc
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
//  03/15/2021 - C. Lackner
//       Generated original version of source cod
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var MultiInputField = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), listValues = _a[0], setListValues = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setListValues(props.data.Value.split(';'));
    }, [props.data]);
    function Set(index, value) {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__.clone(listValues);
        lst[index] = value;
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    function AddNew() {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__.clone(listValues);
        lst.push((props.data.FieldType == 'string' ? 'Value' : '0'));
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    function remove(index) {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__.clone(listValues);
        lst.splice(index, 1);
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        listValues.map(function (item, index) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-group" },
                index == 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Values") : null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "form-control", onChange: function (evt) { Set(index, evt.target.value); }, value: item }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group-append", onClick: function () { return remove(index); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "input-group-text" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))));
        }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary btn-sm", onClick: function () { return AddNew(); } }, " Add ")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiInputField);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/NewMeterWizzard.tsx":
/*!***************************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/NewMeterWizzard.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SelectMeter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectMeter */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/SelectMeter.tsx");
/* harmony import */ var _ConfigurationWizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfigurationWizard */ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/ConfigurationWizard.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};





var NewMeterWizzard = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(null), 2), meter = _a[0], setMeter = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Meter'), 2), step = _b[0], setStep = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showWarning = _c[0], setShowWarning = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showComplete = _d[0], setShowComplete = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('None'), 2), hover = _e[0], setHover = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showLoading = _f[0], setShowLoading = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(new Map()), 2), baseConfig = _g[0], setBaseConfig = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), errorMsg = _h[0], setErrorMsg = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(0), 2), reset = _j[0], setReset = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(0), 2), cont = _k[0], setCont = _k[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (!props.show)
            Cancel();
    }, [props.show]);
    function Cancel() {
        setStep('Meter');
        setMeter(undefined);
        setBaseConfig(new Map());
        setErrorMsg([]);
    }
    function NextStep() {
        if (!stepComplete)
            return;
        if (step == 'Meter') {
            setStep('BaseConfig');
            return;
        }
        if (step == 'New BaseConfig') {
            setCont(function (x) { return x + 1; });
        }
        if (step == 'File Load') {
            setCont(function (x) { return x + 1; });
        }
        if (step == 'BaseConfig') {
            setShowComplete(true);
        }
        if (step == 'Edit Field') {
            setCont(function (x) { return x + 1; });
        }
        return;
    }
    function PrevStep() {
        if (step == 'Meter')
            setShowWarning(true);
        if (step == 'BaseConfig')
            setReset(function (x) { return x + 1; });
        if (step == 'New BaseConfig' || step == 'File Load') {
            setReset(function (x) { return x + 1; });
        }
        if (step == 'Edit Field')
            setReset(function (x) { return x + 1; });
    }
    function getTitle() {
        if (step == 'Meter')
            return 'Select a Meter';
        if (step == 'BaseConfig')
            return "Setup Base Configuration";
        if (step == 'File Load')
            return 'Load Configuration File';
        if (step == 'New BaseConfig')
            return 'Add New Base Configuration';
        if (step == 'Edit Field')
            return "Edit Configuration Field";
    }
    function Submit() {
        // Start By Creating the meter
        var configFields = [];
        __spreadArray([], __read(baseConfig.keys())).forEach(function (key) {
            baseConfig.get(key)[1].forEach(function (fld) {
                configFields.push({
                    BaseConfigId: key,
                    Comparison: fld.Comparison,
                    FieldType: fld.FieldType,
                    Name: fld.Name,
                    Value: fld.Value,
                    Description: fld.Description,
                    Category: fld.Category,
                    Label: fld.Label
                });
            });
        });
        $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/ComplianceMeter/Add",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                Meter: { MeterId: meter.ID, Active: false, Reviewed: false },
                BaseConfiguration: __spreadArray([], __read(baseConfig.values())).map(function (item) { return { Name: item[0].Name, Pattern: item[0].Pattern, ID: item[0].ID }; }),
                ConfigurationFields: configFields
            }),
            dataType: 'json',
            cache: false,
            async: true
        }).then(function (d) { return history.go(0); });
        props.setShow(false);
    }
    var stepComplete = (step == 'Meter' ? meter != null : errorMsg.length == 0);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__.Modal, { Show: props.show, CallBack: function (confirm, isButton) {
                if (confirm)
                    NextStep();
                if (!isButton)
                    setShowWarning(true);
                if (!confirm && isButton)
                    PrevStep();
            }, Title: getTitle(), ConfirmText: (step == 'Meter' || step == 'File Load' ? 'Next' : 'Save'), 
            //ConfirmToolTipContent='WizardConfirm'
            Size: 'xlg', 
            //OnHover={setHover}
            ConfirmBtnClass: 'btn-success' + (stepComplete ? '' : ' disabled'), CancelText: (step == 'Meter' ? 'Close' : 'Back'), ShowX: true },
            step == 'Meter' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SelectMeter__WEBPACK_IMPORTED_MODULE_2__.default, { setMeter: function (meter) { setMeter(meter); }, selectedMeter: meter }) : null,
            step == 'BaseConfig' || step == 'New BaseConfig' || step == 'File Load' || step == 'Edit Field' ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigurationWizard__WEBPACK_IMPORTED_MODULE_3__.default, { setLoading: setShowLoading, BaseConfigs: baseConfig, setBaseConfig: setBaseConfig, setError: setErrorMsg, setStep: setStep, step: step, cont: cont, reset: reset })
                : null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__.Warning, { Title: 'Exit Wizard', CallBack: function (confirm) { setShowWarning(false); if (confirm)
                props.setShow(false); }, Show: showWarning, Message: 'This Will close the Wizard and all progress will be lost.' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__.ToolTip, { Show: hover == 'Confirm' && !stepComplete, Position: 'top', Target: 'WizardConfirm', Zindex: 9999 },
            step == 'Meter' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Meter needs to be selected.") : null,
            step != 'Meter' ? errorMsg.map(function (item, index) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { key: index },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                " ",
                item); }) : null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__.Warning, { Title: 'Save PRC002 Configuration', CallBack: function (confirm) { setShowComplete(false); if (confirm)
                Submit(); }, Show: showComplete, Message: 'This will add the selected meter to PRC002 monitoring and save the base configuration. Note that the status of this meter will not update until the first configuration File is downloaded.' }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__.LoadingScreen, { Show: showLoading })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewMeterWizzard);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/SelectMeter.tsx":
/*!***********************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/PRC-002/MeterWizzard/SelectMeter.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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
//
//******************************************************************************************************
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var standardSearch = [
    { key: 'Name', label: 'Name', type: 'string' },
    { key: 'AssetKey', label: 'Asset Key', type: 'string' },
    { key: 'Make', label: 'Make', type: 'string' },
    { key: 'Model', label: 'Model', type: 'string' },
];
var SelectMeter = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), MeterList = _a[0], setMeterList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), meterFilter = _b[0], setMeterFilter = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState("Name"), 2), meterSort = _c[0], setMeterSort = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(true), 2), meterAsc = _d[0], setMeterAsc = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(standardSearch), 2), filterableList = _e[0], setFilterableList = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Idle'), 2), searchState = _f[0], setSearchState = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setSearchState('Loading');
        var handleMeterList = getMeterList();
        return function () {
            if (handleMeterList != null && handleMeterList.abort != null)
                handleMeterList.abort();
        };
    }, [props, meterAsc, meterSort, meterFilter]);
    function getMeterList() {
        var nativeFields = standardSearch.map(function (s) { return s.key; });
        var searches = meterFilter.map(function (s) { if (nativeFields.findIndex(function (item) { return item == s.FieldName; }) == -1)
            return __assign(__assign({}, s), { isPivotColumn: true });
        else
            return s; });
        var handle = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/ComplianceMeter/SelectableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: searches, OrderBy: meterSort, Ascending: meterAsc }),
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setMeterList(data);
            setSearchState('Idle');
        });
        handle.fail(function (d) { setSearchState('Error'); });
        return handle;
    }
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handle = getAdditionalFields();
        return function () {
            if (handle.abort != null)
                handle.abort();
        };
    }, []);
    function getAdditionalFields() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/AdditionalField/ParentTable/Meter",
            contentType: "application/json; charset=utf-8",
            cache: false,
            async: true
        });
        function ConvertType(type) {
            if (type == 'string' || type == 'integer' || type == 'number' || type == 'datetime' || type == 'boolean')
                return { type: type };
            return {
                type: 'enum', enum: [{ Label: type, Value: type }]
            };
        }
        handle.done(function (d) {
            var ordered = lodash__WEBPACK_IMPORTED_MODULE_3__.orderBy(standardSearch.concat(d.map(function (item) { return (__assign({ label: "[AF" + (item.ExternalDB != undefined ? " " + item.ExternalDB : '') + "] " + item.FieldName }, ConvertType(item.Type))); })), ['label'], ["asc"]);
            setFilterableList(ordered);
        });
        return handle;
    }
    //List of meters to Select From
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__.SearchBar, { SetFilter: setMeterFilter, CollumnList: filterableList, defaultCollumn: { key: 'Name', label: 'Name', type: 'string' }, Direction: 'left', Label: 'Search', Width: '100%', GetEnum: function (setOptions, field) {
                var handle = null;
                if (field.type != 'enum' || field.enum == undefined || field.enum.length != 1)
                    return function () { };
                handle = $.ajax({
                    type: "GET",
                    url: homePath + "api/ValueList/Group/" + field.enum[0].Value,
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    cache: true,
                    async: true
                });
                handle.done(function (d) { return setOptions(d.map(function (item) { return ({ Value: item.Value.toString(), Label: item.Text }); })); });
                return function () { if (handle != null && handle.abort == null)
                    handle.abort(); };
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { height: 'calc( 100% - 136px)', padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__.default, { cols: [
                    { key: 'Name', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                    { key: 'Model', label: 'Model', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                    { key: 'Make', label: 'Make', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                ], tableClass: "table table-hover", data: MeterList, sortField: meterSort, ascending: meterAsc, onSort: function (d) {
                    if (d.col == meterSort)
                        setMeterAsc(!meterAsc);
                    else {
                        setMeterSort(d.col);
                        setMeterAsc(true);
                    }
                }, onClick: function (d) { props.setMeter(d.row); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: 330, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID === (props.selectedMeter == undefined ? -1 : props.selectedMeter.ID); } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectMeter);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL0NvbmZpZ3VyYXRpb24vQ29uZmlndXJhdGlvbkJ5TWV0ZXIudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvQ29uZmlndXJhdGlvbi9Db25maWd1cmF0aW9uRmlsZUNoYW5nZXMudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvQ29uZmlndXJhdGlvbi9Db25maWd1cmF0aW9uRmlsZXMudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9BY3Rpb25IZWFkZXIudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9BY3Rpb25MaXN0LnRzeCIsIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL1BSQy0wMDIvQ2hhbmdlT3ZlcnZpZXcvQ2hhbmdlT3ZlcnZpZXdQYWdlLnRzeCIsIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL1BSQy0wMDIvQ2hhbmdlT3ZlcnZpZXcvRmllbGRWYWx1ZXMudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9SZWNvcmREZXRhaWwudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9SZXNvbHZlUmVjb3JkLnRzeCIsIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL1BSQy0wMDIvQ29tbW9uL0Jhc2VDb25maWdUYWJsZS50c3giLCJ3ZWJwYWNrOi8vbWltZC8uL3d3d3Jvb3QvU2NyaXB0cy9UU1gvTWlNRC9QUkMtMDAyL0NvbW1vbi9CYXNlQ29uZmlnV2luZG93LnRzeCIsIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL1BSQy0wMDIvQ29tbW9uL0NvbmZpZ0ZpZWxkVmFsdWVUYWJsZUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL1BSQy0wMDIvQ29tbW9uL01hbnVhbEFjdGlvbi50c3giLCJ3ZWJwYWNrOi8vbWltZC8uL3d3d3Jvb3QvU2NyaXB0cy9UU1gvTWlNRC9QUkMtMDAyL0NvbW1vbi9OZXdDb25maWdGaWVsZHMudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvUFJDLTAwMi9NZXRlck92ZXJ2aWV3L0Rvd2xvYWRGaWxlLnRzeCIsIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJPdmVydmlldy9NZXRlckNvbmZpZ3VyYXRpb24udHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvUFJDLTAwMi9NZXRlck92ZXJ2aWV3L01ldGVyRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJPdmVydmlldy9NZXRlck92ZXJ2aWV3UGFnZS50c3giLCJ3ZWJwYWNrOi8vbWltZC8uL3d3d3Jvb3QvU2NyaXB0cy9UU1gvTWlNRC9QUkMtMDAyL01ldGVyT3ZlcnZpZXcvUmVjb3JkTGlzdC50c3giLCJ3ZWJwYWNrOi8vbWltZC8uL3d3d3Jvb3QvU2NyaXB0cy9UU1gvTWlNRC9QUkMtMDAyL01ldGVyV2l6emFyZC9Db25maWd1cmF0aW9uV2l6YXJkLnRzeCIsIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJXaXp6YXJkL0NvbmZpZ3VyYXRpb25maWVsZEVkaXQudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvUFJDLTAwMi9NZXRlcldpenphcmQvRmlsZVBhcnNlV2luZG93LnRzeCIsIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJXaXp6YXJkL0ZpbGVQYXJzZXIudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvUFJDLTAwMi9NZXRlcldpenphcmQvTXVsdGlJbnB1dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJXaXp6YXJkL05ld01ldGVyV2l6emFyZC50c3giLCJ3ZWJwYWNrOi8vbWltZC8uL3d3d3Jvb3QvU2NyaXB0cy9UU1gvTWlNRC9QUkMtMDAyL01ldGVyV2l6emFyZC9TZWxlY3RNZXRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0dBQXdHO0FBQ3hHLG1DQUFtQztBQUNuQyxFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFO0FBRWU7QUFDbEI7QUFDa0I7QUFFUTtBQUNZO0FBQ1Y7QUFDeUI7QUFLakYsSUFBTSxjQUFjLEdBQWdDO0lBQ2hELEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDdkQsRUFBRSxHQUFH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QUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQTVFLENBQTRFLEdBQ2xHLENBQ04sQ0FDUCxDQUNOO0FBQ0wsQ0FBQztBQUdELGlFQUFlLFdBQVcsRUFBQyIsImZpbGUiOiJDb25maWd1cmF0aW9uQnlNZXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25maWd1cmF0aW9uQnlNZXRlci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDgvMjIvMjAxOSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uL2dsb2JhbCc7XHJcbmltcG9ydCBDb25maWd1cmF0aW9uRmlsZXMgZnJvbSAnLi9Db25maWd1cmF0aW9uRmlsZXMnO1xyXG5pbXBvcnQgQ29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzIGZyb20gJy4vQ29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzJztcclxuaW1wb3J0IE5vdGVXaW5kb3cgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Ob3RlV2luZG93JztcclxuaW1wb3J0IHsgTG9hZGluZ0ljb24sIFNlYXJjaCwgU2VhcmNoQmFyIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmNvbnN0IHN0YW5kYXJkU2VhcmNoOiBTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+W10gPSBbXHJcbiAgICB7IGtleTogJ1N0YXRpb24nLCBsYWJlbDogJ01ldGVyIE5hbWUnLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdNYWtlJywgbGFiZWw6ICdNYWtlJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnVFNDJywgbGFiZWw6ICdUU0MnLCB0eXBlOiAnZW51bScsIGVudW06IFt7IExhYmVsOiAnVFNDJywgVmFsdWU6ICdUU0MnIH1dfSxcclxuICAgIHsga2V5OiAnRGF0ZUxhc3RDaGFuZ2VkJywgbGFiZWw6ICdEYXRlIExhc3QgQ2hhbmdlZCcsIHR5cGU6ICdkYXRldGltZScgfVxyXG5dO1xyXG5cclxuY29uc3QgQ29uZmlndXJhdGlvbkJ5TWV0ZXI6IE1pTUQuQnlDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbZmlsdGVyYWJsZUxpc3QsIHNldEZpbHRlcmFibGVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFNlYXJjaC5JRmllbGQ8TWlNRC5NZXRlcj4+PihzdGFuZGFyZFNlYXJjaCk7XHJcbiAgICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxTZWFyY2guSUZpbHRlcjxNaU1ELk1ldGVyPj4+KFtdKTtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNaU1ELk1ldGVyPj4oW10pO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ0RhdGVMYXN0Q2hhbmdlZCcpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoU3RhdGUsIHNldFNlYXJjaFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlIDwgKCdJZGxlJ3wnTG9hZGluZyd8J0Vycm9yJyk+KCdJZGxlJyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hTdGF0ZSgnTG9hZGluZycpO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBnZXRNZXRlcnMoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ICE9IG51bGwpIGhhbmRsZS5hYm9ydCgpOyB9XHJcbiAgICB9LCBbYXNjZW5kaW5nLCBzb3J0RmllbGQsIGZpbHRlcnNdKVxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBnZXRBZGRpdGlvbmFsRmllbGRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gbnVsbCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1pTUQuTWV0ZXI+PiB7XHJcbiAgICAgICAgY29uc3QgbmF0aXZlRmllbGRzID0gc3RhbmRhcmRTZWFyY2guZmlsdGVyKGl0ZW0gPT4gaXRlbS5rZXkgIT0nVFNDJykubWFwKHMgPT4gcy5rZXkpO1xyXG5cclxuICAgICAgICBsZXQgc2VhcmNoZXMgPSBmaWx0ZXJzLm1hcChzID0+IHsgaWYgKG5hdGl2ZUZpZWxkcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09IHMuRmllbGROYW1lKSA9PSAtMSkgcmV0dXJuIHsgLi4ucywgaXNQaXZvdENvbHVtbjogdHJ1ZSB9OyBlbHNlIHJldHVybiBzOyB9KVxyXG4gICAgICAgIGxldCBoYW5kbGUgPSAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvTWV0ZXIvQ29uZmlnL1NlYXJjaGFibGVMaXN0YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IFNlYXJjaGVzOiBzZWFyY2hlcywgT3JkZXJCeTogc29ydEZpZWxkLCBBc2NlbmRpbmc6IGFzY2VuZGluZyB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8TWlNRC5NZXRlcj4pID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgc2V0U2VhcmNoU3RhdGUoJ0lkbGUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBoYW5kbGUuZmFpbCgoZCkgPT4geyBzZXRTZWFyY2hTdGF0ZSgnRXJyb3InKTsgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBZGRpdGlvbmFsRmllbGRzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9BZGRpdGlvbmFsRmllbGQvUGFyZW50VGFibGUvTWV0ZXJgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gQ29udmVydFR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ2ludGVnZXInIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnZGF0ZXRpbWUnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZSB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW51bScsIGVudW06IFt7IExhYmVsOiB0eXBlLCBWYWx1ZTogdHlwZSB9IF1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZDogQXJyYXk8TWlNRC5BZGRpdGlvbmFsRmllbGQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcmRlcmVkID0gXy5vcmRlckJ5KHN0YW5kYXJkU2VhcmNoLmNvbmNhdChkLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IGBbQUYke2l0ZW0uRXh0ZXJuYWxEQiAhPSB1bmRlZmluZWQgPyBcIiBcIiArIGl0ZW0uRXh0ZXJuYWxEQiA6ICcnIH1dICR7aXRlbS5GaWVsZE5hbWV9YCwga2V5OiBpdGVtLkZpZWxkTmFtZSwgLi4uQ29udmVydFR5cGUoaXRlbS5UeXBlKSB9IGFzIFNlYXJjaC5JRmllbGQ8TWlNRC5NZXRlcj5cclxuICAgICAgICAgICAgKSkpLCBbJ2xhYmVsJ10sIFtcImFzY1wiXSk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmFibGVMaXN0KG9yZGVyZWQpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChpdGVtLCBldnQpIHtcclxuICAgICAgICBoaXN0b3J5LnB1c2goeyBwYXRobmFtZTogaG9tZVBhdGggKyAnaW5kZXguY3NodG1sJywgc2VhcmNoOiAnP25hbWU9Q29uZmlndXJhdGlvbiZNZXRlcklEPScgKyBpdGVtLnJvdy5NZXRlcklELCBzdGF0ZToge30gfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXI8TWlNRC5NZXRlcj5cclxuICAgICAgICAgICAgICAgIENvbGx1bW5MaXN0PXtmaWx0ZXJhYmxlTGlzdH1cclxuICAgICAgICAgICAgICAgIFNldEZpbHRlcj17KGZsZHMpID0+IHNldEZpbHRlcnMoZmxkcyl9XHJcbiAgICAgICAgICAgICAgICBEaXJlY3Rpb249eydsZWZ0J31cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xsdW1uPXt7IGtleTogJ1N0YXRpb24nLCBsYWJlbDogJ1N0YXRpb24nLCB0eXBlOiAnc3RyaW5nJyB9fVxyXG4gICAgICAgICAgICAgICAgV2lkdGg9eyc1MCUnfVxyXG4gICAgICAgICAgICAgICAgTGFiZWw9eydTZWFyY2gnfVxyXG4gICAgICAgICAgICAgICAgR2V0RW51bT17KHNldE9wdGlvbnMsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgIT0gJ2VudW0nIHx8IGZpZWxkLmVudW0gPT0gdW5kZWZpbmVkIHx8IGZpZWxkLmVudW0ubGVuZ3RoICE9IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1ZhbHVlTGlzdC9Hcm91cC8ke2ZpZWxkLmVudW1bMF0uVmFsdWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5kb25lKGQgPT4gc2V0T3B0aW9ucyhkLm1hcChpdGVtID0+ICh7IFZhbHVlOiBpdGVtLlZhbHVlLnRvU3RyaW5nKCksIExhYmVsOiBpdGVtLlRleHQgfSkpKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ID09IG51bGwpIGhhbmRsZS5hYm9ydCgpOyB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoQmFyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdjYWxjKCAxMDAlIC0gMTM2cHgpJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3ttYXJnaW46IDAsIGhlaWdodDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIGhlaWdodDogJzEwMCUnLCBwYWRkaW5nOjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxNaU1ELk1ldGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnU3RhdGlvbicsIGxhYmVsOiAnTWV0ZXIgTmFtZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNYWtlJywgbGFiZWw6ICdNYWtlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEwJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1RTQycsIGxhYmVsOiAnVFNDJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdEYXRlTGFzdENoYW5nZWQnLCBsYWJlbDogJ0RhdGUgTGFzdCBDaGFuZ2VkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTUlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1ba2V5XSA9PSBudWxsIHx8IGl0ZW1ba2V5XSA9PSAnJykgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoaXRlbVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub3cgPSBtb21lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXlzID0gbm93LmRpZmYoZGF0ZSwgJ2RheXMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA8IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbJ2JhY2tncm91bmRDb2xvciddID0gJ3JlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzIDwgNylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAnb3JhbmdlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRheXMgPCAzMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAneWVsbG93JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogMTcsIHBhZGRpbmc6IDAgfSwgcm93U3R5bGU6IHsgd2lkdGg6IDAsIHBhZGRpbmc6IDAgfSB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVTdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoZC5jb2wgIT0gJ0RhdGVMYXN0Q2hhbmdlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSA3MHB4KScsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uTWV0ZXJJRCA9PSBwcm9wcy5NZXRlcklEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmc6IDAsIG1heEhlaWdodDogJzEwMCUnICwgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbmZpZ3VyYXRpb25GaWxlcyBNZXRlcklEPXtwcm9wcy5NZXRlcklEfSBGaWxlTmFtZT17cHJvcHMuRmlsZU5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb25maWd1cmF0aW9uRmlsZUNoYW5nZXMgTWV0ZXJJRD17cHJvcHMuTWV0ZXJJRH0gRmlsZU5hbWU9e3Byb3BzLkZpbGVOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm90ZVdpbmRvdyBJRD17cHJvcHMuTWV0ZXJJRH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8qXHJcbmlmICgoW1wiaW50ZWdlclwiLCBcIm51bWJlclwiLCBcImJvb2xlYW5cIiwgXCJzdHJpbmdcIiwgXCJkYXRldGltZVwiXSkuaW5kZXhPZihwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZSkgPCAwKSB7XHJcbmxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1ZhbHVlTGlzdC9Hcm91cC8ke3Byb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlfWAsXHJcbiAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgY2FjaGU6IHRydWUsXHJcbiAgICBhc3luYzogdHJ1ZVxyXG59KVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbkJ5TWV0ZXI7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNS8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcblxyXG5jb25zdCBDb25maWd1cmF0aW9uRmlsZUNoYW5nZXMgPSAocHJvcHM6IHsgTWV0ZXJJRDogbnVtYmVyLCBGaWxlTmFtZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtjb25maWdGaWxlcywgc2V0Q29uZmlnRmlsZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8YW55Pj4oW10pO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIE1pTUQuSUNvbmZpZ0ZpbGU+KCdMYXN0V3JpdGVUaW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtodG1sLCBzZXRIdG1sXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93RGV0YWlscywgc2V0U2hvd0RldGFpbHNdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpIHx8IHByb3BzLkZpbGVOYW1lID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldENvbmZpZ0ZpbGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhKSA9PiBzZXRDb25maWdGaWxlcyhkYXRhKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklELCBwcm9wcy5GaWxlTmFtZSwgZmxhZywgYXNjZW5kaW5nLCBzb3J0RmllbGRdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29uZmlnRmlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvQ29uZmlndXJhdGlvbkZpbGVzLyR7cHJvcHMuTWV0ZXJJRH0vJHtwcm9wcy5GaWxlTmFtZX0vJHtmbGFnfS8ke3NvcnRGaWVsZH0vJHthc2NlbmRpbmcgPyAxOjB9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcihkYXRlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbW9tID0gbW9tZW50KGRhdGUpO1xyXG4gICAgICAgIGxldCBub3cgPSBtb21lbnQoKTtcclxuICAgICAgICBsZXQgZGF5cyA9IG5vdy5kaWZmKG1vbSwgJ2RheXMnKTtcclxuXHJcbiAgICAgICAgaWYgKGRheXMgPCAxKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSB8fCBwcm9wcy5GaWxlTmFtZSA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57cHJvcHMuRmlsZU5hbWV9IEhpc3Rvcnk6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPXt7IHpJbmRleDogMSB9fSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RmxhZyghZmxhZyl9IHZhbHVlPXtmbGFnID8gJ29uJyA6ICdvZmYnfSBjaGVja2VkPXtmbGFnID8gdHJ1ZSA6IGZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiA+U2hvdyBGaWxlcyB3L28gQ2hhbmdlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGU8TWlNRC5JQ29uZmlnRmlsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdMYXN0V3JpdGVUaW1lJywgbGFiZWw6ICdMYXN0IFdyaXRlIFRpbWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbJ2JhY2tncm91bmRDb2xvciddID0gZ2V0Q29sb3IoaXRlbS5MYXN0V3JpdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudChpdGVtLkxhc3RXcml0ZVRpbWUpLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0NoYW5nZXMnLCBsYWJlbDogJyMgb2YgQ2hhbmdlcycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnRmlsZU5hbWUnLCBsYWJlbDogJ0ZpbGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAoaXRlbSkgPT4gPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IHsgc2V0U2hvd0RldGFpbHModHJ1ZSk7IHNldEh0bWwoYDxwPiR7aXRlbS5UZXh0LnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpfTwvcD5gKSB9fT48c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnVGV4dCcsIGxhYmVsOiAnRGlmZicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChpdGVtKSA9PiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBvbkNsaWNrPXsoZSkgPT4geyBzZXRTaG93RGV0YWlscyh0cnVlKTsgc2V0SHRtbChpdGVtLkh0bWwucmVwbGFjZSgvJnBhcmE7L2csICcnKSk7IH19PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWV5ZVwiPjwvaT48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29uZmlnRmlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09ICdGaWxlTmFtZScgfHwgZC5jb2wgPT0gJ1RleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKGQuY29sICE9ICdMYXN0V3JpdGVUaW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIFRpdGxlPXtwcm9wcy5GaWxlTmFtZX0gQ2FsbEJhY2s9eygpID0+IHsgc2V0U2hvd0RldGFpbHMoZmFsc2UpIH19IFNpemU9eyd4bGcnfSBTaG93PXtzaG93RGV0YWlsc30gU2hvd0NhbmNlbD17ZmFsc2V9IENvbmZpcm1UZXh0PXsnQ2xvc2UnfSBTaG93WD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGxcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZXknLCBmb250U2l6ZTogMTgsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjUwLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzO1xyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlndXJhdGlvbkZpbGVzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNS8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuXHJcblxyXG5jb25zdCBDb25maWd1cmF0aW9uRmlsZXMgPSAocHJvcHM6IHsgTWV0ZXJJRDogbnVtYmVyLCBGaWxlTmFtZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtjb25maWdGaWxlcywgc2V0Q29uZmlnRmlsZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5JQ29uZmlnRmlsZT4+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBNaU1ELklDb25maWdGaWxlPignTGFzdFdyaXRlVGltZScpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldENvbmZpZ0ZpbGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhKSA9PiBzZXRDb25maWdGaWxlcyhkYXRhKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklELCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb25maWdGaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9Db25maWd1cmF0aW9uRmlsZXMvJHtwcm9wcy5NZXRlcklEfS9MYXN0V3JpdGVzLyR7c29ydEZpZWxkfS8ke2FzY2VuZGluZyA/IDEgOiAwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1vbSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihtb20sICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChmaWxlTmFtZSwgZXZ0KSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6IGhvbWVQYXRoICsgJ2luZGV4LmNzaHRtbCcsIHNlYXJjaDogYD9uYW1lPUNvbmZpZ3VyYXRpb24mTWV0ZXJJRD0ke3Byb3BzLk1ldGVySUR9JkZpbGVOYW1lPSR7ZmlsZU5hbWV9YCwgc3RhdGU6IHt9IH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5Db25maWd1cmF0aW9uIEZpbGVzOjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlPE1pTUQuSUNvbmZpZ0ZpbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGaWxlTmFtZScsIGxhYmVsOiAnRmlsZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNTAlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzUwJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdMYXN0V3JpdGVUaW1lJywgbGFiZWw6ICdMYXN0IFdyaXRlIFRpbWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSBnZXRDb2xvcihpdGVtLkxhc3RXcml0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQoaXRlbS5MYXN0V3JpdGVUaW1lKS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdDaGFuZ2VzJywgbGFiZWw6ICcjIG9mIENoYW5nZXMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29uZmlnRmlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyhkLmNvbCAhPSAnTGFzdFdyaXRlVGltZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkYXRhLGV2dCkgPT4gaGFuZGxlU2VsZWN0KGRhdGEucm93LkZpbGVOYW1lLCBldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBpdGVtLkZpbGVOYW1lID09IHByb3BzLkZpbGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uRmlsZXM7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQWN0aW9uSGVhZGVyLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xOC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IGRhdGE6IFBSQzAwMi5JQWN0aW9uLCBzdGF0ZUxpc3Q6IEFycmF5PFBSQzAwMi5JU3RhdHVzPiwgc2hvd1RpbWU6IGJvb2xlYW4gfSBcclxuXHJcbmNvbnN0IEFjdGlvbkhlYWRlciA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgICBsZXQgaXNhdXRvID0gcHJvcHMuZGF0YS5Vc2VyQWNjb3VudCA9PSAnTWlNRCc7XHJcbiAgICBsZXQgaXNDaGFuZ2UgPSBwcm9wcy5kYXRhLlN0YXRlSWQgIT0gbnVsbDtcclxuICAgIGxldCBpc05vdGUgPSAhaXNhdXRvICYmICFpc0NoYW5nZTtcclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtYXRUUyhpbnB1dDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoaW5wdXQpO1xyXG4gICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhdGVUYWcoc3RhdGVJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHN0YXQgPSBwcm9wcy5zdGF0ZUxpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT0gc3RhdGVJZClcclxuXHJcbiAgICAgICAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjNmM3NTdkJyA6IHN0YXQuQ29sb3IpLCBjb2xvcjogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyNmZmZmZmYnIDogc3RhdC5UZXh0Q29sb3IpIH19Pnsoc3RhdCA9PSB1bmRlZmluZWQgPyAnVW5rbm93bicgOiBzdGF0LkRlc2NyaXB0aW9uKX08L3NwYW4+KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb3BzLnNob3dUaW1lID8gZm9ybWF0VFMocHJvcHMuZGF0YS5UaW1lc3RhbXApICsgJzogJyA6IG51bGx9XHJcbiAgICAgICAgICAgIHtpc05vdGUgPyBwcm9wcy5kYXRhLlVzZXJBY2NvdW50ICsgJyBhZGRlZCBhIE5vdGUnIDogbnVsbH1cclxuICAgICAgICAgICAge2lzQ2hhbmdlID8gcHJvcHMuZGF0YS5Vc2VyQWNjb3VudCArICcgQ2hhbmdlZCBTdGF0dXMgdG8gJyA6IG51bGx9XHJcbiAgICAgICAgICAgIHtpc0NoYW5nZT8gc3RhdGVUYWcocHJvcHMuZGF0YS5TdGF0ZUlkKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHsoaXNhdXRvICYmICFpc0NoYW5nZSkgPyAnTWlNRCByZWNlaXZlZCBhbiB1cGRhdGVkIENvbmZpZ3VyYXRpb24gRmlsZScgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkhlYWRlcjtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBBY3Rpb25MaXN0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xOC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuL0FjdGlvbkhlYWRlcic7XHJcbmltcG9ydCBGaWVsZFZhbHVlcyBmcm9tICcuL0ZpZWxkVmFsdWVzJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IFJlY29yZElkOiBudW1iZXIsIFN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+IH1cclxuXHJcbmNvbnN0IFJlY29yZExpc3QgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aW9uTGlzdCwgc2V0QXRjaW9uTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSUFjdGlvbj4+KFtdKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkQWN0aW9uLCBzZXRTZWxlY3RlZEFjdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICAgIGNvbnN0IFtzaG93RmllbGRzLCBzZXRTaG93RmllbGRzXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVBY3Rpb25MaXN0ID0gZ2V0QWN0aW9ucygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlQWN0aW9uTGlzdCAhPSBudWxsICYmIGhhbmRsZUFjdGlvbkxpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlQWN0aW9uTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5SZWNvcmRJZCwgYXNjZW5kaW5nXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWN0aW9ucygpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklBY3Rpb24+PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLlJlY29yZElkID09IC0xKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0FjdGlvbi8ke3Byb3BzLlJlY29yZElkfS9UaW1lc3RhbXAvJHthc2NlbmRpbmc/IDEgOiAwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklBY3Rpb24+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldEF0Y2lvbkxpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3NlbGVjdGVkQWN0aW9uID4gMCA/IDxGaWVsZFZhbHVlcyBBY3Rpb25JRD17c2VsZWN0ZWRBY3Rpb259IHNob3c9e3Nob3dGaWVsZHN9IHNldFNob3c9e3NldFNob3dGaWVsZHN9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgeyhwcm9wcy5SZWNvcmRJZCA+IC0xID9cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnSUQnLCBsYWJlbDogJ0NvbmZpZ3VyYXRpb24gQ2hhbmdlIEhpc3RvcnknLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxBY3Rpb25DYXJkIGRhdGE9e2l0ZW19IHN0YXRlTGlzdD17cHJvcHMuU3RhdGVMaXN0fSBvcGVuQ29uZmlnPXsoaSkgPT4ge3NldFNlbGVjdGVkQWN0aW9uKGkpOyBzZXRTaG93RmllbGRzKHRydWUpO319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2FjdGlvbkxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtcIklEXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4geyBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQWN0aW9uQ2FyZCA9IChwcm9wczogeyBkYXRhOiBQUkMwMDIuSUFjdGlvbiwgc3RhdGVMaXN0OiBBcnJheTxQUkMwMDIuSVN0YXR1cz4sIG9wZW5Db25maWc6IChjaGFuZ2VJZDogbnVtYmVyKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGxldCBoYXNDb25maWcgPSBwcm9wcy5kYXRhLlVzZXJBY2NvdW50ID09ICdNaU1EJztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QWN0aW9uSGVhZGVyIGRhdGE9e3Byb3BzLmRhdGF9IHN0YXRlTGlzdD17cHJvcHMuc3RhdGVMaXN0fSBzaG93VGltZT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvcHMuZGF0YS5Ob3RlfTwvcD5cclxuICAgICAgICAgICAgICAgIHtoYXNDb25maWcgPyA8IGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLm9wZW5Db25maWcocHJvcHMuZGF0YS5JRCk7ICQoJyNjdXJyZW50Q29uZmlnJykuc2hvdygpOyB9fT5TaG93IENvbmZpZ3VyYXRpb248L2E+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZExpc3Q7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlndXJhdGlvbkJ5TWV0ZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA4LzIyLzIwMTkgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IFJlY29yZERldGFpbCBmcm9tICcuL1JlY29yZERldGFpbCc7XHJcbmltcG9ydCBBY3Rpb25MaXN0IGZyb20gJy4vQWN0aW9uTGlzdCc7XHJcblxyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5jb25zdCBQUkMwMDJDaGFuZ2VPdmVydmlld1BhZ2UgPSAocHJvcHM6IHsgUm9sZXM6IEFycmF5PE1pTUQuU2VjdXJpdHlSb2xlTmFtZT4sIFJlY29yZElkOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1c0xpc3QsIHNldFN0YXR1c0xpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklTdGF0dXM+PihbXSk7XHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVN0YXR1c0xpc3QgPSBnZXRTdGF0dXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZVN0YXR1c0xpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlU3RhdHVzTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JU3RhdHVzPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlU3RhdGUvTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklTdGF0dXM+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN0YXR1c0xpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAwLCBoZWlnaHQ6ICcyMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlY29yZERldGFpbCBzdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IFJlY29yZElEPXtwcm9wcy5SZWNvcmRJZH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uTGlzdCBTdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IFJlY29yZElkPXtwcm9wcy5SZWNvcmRJZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQUkMwMDJDaGFuZ2VPdmVydmlld1BhZ2U7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQmFzZUNvbmZpZy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTcvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBQUkMwMDJ9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtSZWNvcmRJRD86IG51bWJlciwgQWN0aW9uSUQ/OiBudW1iZXIsIHNob3c6IGJvb2xlYW4sIHNldFNob3c6IChiOmJvb2xlYW4pID0+IHZvaWR9XHJcblxyXG5cclxuY29uc3QgRmllbGRWYWx1ZXMgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzW10+KFtdKTtcclxuXHJcbiAgICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignRmllbGRDYXRlZ29yeScpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGggPSBHZXRGaWVsZHMoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaCAhPSBudWxsICYmIGguYWJvcnQgIT0gbnVsbCkgaC5hYm9ydCgpOyB9XHJcbiAgICB9LCBbcHJvcHMuUmVjb3JkSUQsIHByb3BzLkFjdGlvbklELCBhc2NlbmRpbmcsIHNvcnRCeV0pXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIEdldEZpZWxkcygpOiBKUXVlcnkuanFYSFI8YW55PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHByb3BzLkFjdGlvbklEID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZFZhbHVlLyR7cHJvcHMuUmVjb3JkSUR9LyR7c29ydEJ5fS8ke2FzY2VuZGluZyA/IDEgOiAwfWAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0ZpZWxkVmFsdWUvSGlzdG9yeS8ke3Byb3BzLkFjdGlvbklEfS8ke3NvcnRCeX0vJHthc2NlbmRpbmcgPyAxIDogMH1gLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4pID0+IHtcclxuICAgICAgICAgICAgc2V0RmllbGRzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE1vZGFsIFRpdGxlPXtwcm9wcy5BY3Rpb25JRCA9PSB1bmRlZmluZWQgPyAnQ3VycmVudCBDb25maWd1cmF0aW9uJyA6ICdSZWxhdGVkIENvbmZpZ3VyYXRpb24nfSBTaG93PXtwcm9wcy5zaG93fSBDYWxsQmFjaz17KGNvbmZpcm0pID0+IHsgcHJvcHMuc2V0U2hvdyhmYWxzZSk7IH19IFNpemU9J2xnJyBTaG93WD17dHJ1ZX0gU2hvd0NhbmNlbD17ZmFsc2V9IENvbmZpcm1UZXh0PSdDbG9zZScgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTQwLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDU0MCx9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0ZpZWxkQ2F0ZWdvcnknLCBsYWJlbDogJ0NhdGVnb3J5JywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0ZpZWxkQ2F0ZWdvcnknfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0ZpZWxkTGFiZWwnLCBsYWJlbDogJ0ZpZWxkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4gUmVjb3JkPXtpdGVtfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBGaWVsZD17aXRlbS5GaWVsZExhYmVsID09IHVuZGVmaW5lZCB8fCBpdGVtLkZpZWxkTGFiZWwubGVuZ3RoID09IDAgPyAnRmllbGROYW1lJyA6ICdGaWVsZExhYmVsJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVmFsdWUnLCBsYWJlbDogJ1ZhbHVlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J1ZhbHVlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnVmFsaWQnLCBsYWJlbDogJ1ZhbGlkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7IHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnLjM3NXJlbSAuNzVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS41cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e1wiZmEgXCIgKyAoaXRlbS5WYWxpZCA/IFwiZmEtY2hlY2stY2lyY2xlXCIgOiBcImZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIpfSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2ZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRCeX1cclxuICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRCeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0QnkoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNjIwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkVmFsdWVzO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFJlY29yZERldGFpbC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTgvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IE1hbnVhbEFjdGlvbiBmcm9tICcuLi9Db21tb24vTWFudWFsQWN0aW9uJztcclxuaW1wb3J0IEZpZWxkVmFsdWVzIGZyb20gJy4vRmllbGRWYWx1ZXMnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5cclxuaW1wb3J0IFJlc29sdmVSZWNvcmQgZnJvbSAnLi9SZXNvbHZlUmVjb3JkJztcclxuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuL0FjdGlvbkhlYWRlcic7XHJcbmltcG9ydCBCYXNlQ29uZmlnV2luZG93IGZyb20gJy4uL0NvbW1vbi9CYXNlQ29uZmlnV2luZG93JztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgUmVjb3JkSUQ6IG51bWJlciwgc3RhdGVMaXN0OiBBcnJheTxQUkMwMDIuSVN0YXR1cz4gfVxyXG5cclxuY29uc3QgUmVjb3JkRGV0YWlsID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JUmVjb3JkPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW21ldGVyLCBzZXRNZXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSU1ldGVyPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQWN0aW9uPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2Jhc2VDb25maWcsIHNldEJhc2VDb25maWddID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklCYXNlQ29uZmlnPih1bmRlZmluZWQpO1xyXG4gICBcclxuICAgIGNvbnN0IFthbGx2YWx1ZUxpc3QsIHNldEFsbFZhbHVlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPj4oW10pO1xyXG5cclxuICAgIGNvbnN0IFtzaG93QWNrLCBzZXRTaG93QWNrXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93UmV2LCBzZXRTaG93UmV2XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93UmVzb2x2ZSwgc2V0U2hvd1Jlc29sdmVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dSYXAsIHNldFNob3dSYXBdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dOb3RlLCBzZXRTaG93Tm90ZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0Jhc2VDb25maWcsIHNldFNob3dCYXNlQ29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0ZpZWxkcywgc2V0U2hvd0ZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlUmVjb3JkID0gZ2V0UmVjb3JkKHByb3BzLlJlY29yZElEKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZVJlY29yZCAhPSBudWxsICYmIGhhbmRsZVJlY29yZC5hYm9ydCAhPSBudWxsKSBoYW5kbGVSZWNvcmQuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuUmVjb3JkSURdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVGaWVsZFZhdWVzID0gZ2V0RmllbGRWYWx1ZXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZUZpZWxkVmF1ZXMgIT0gbnVsbCAmJiBoYW5kbGVGaWVsZFZhdWVzLmFib3J0ICE9IG51bGwpIGhhbmRsZUZpZWxkVmF1ZXMuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuUmVjb3JkSURdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVNZXRlciA9IGdldE1ldGVyKChyZWNvcmQgPT0gdW5kZWZpbmVkID8gLTEgOiByZWNvcmQuTWV0ZXJJZCkpO1xyXG4gICAgICAgIGxldCBoYW5kbGVCYXNlQ29uZmlnID0gZ2V0QmFzZUNvbmZpZygocmVjb3JkID09IHVuZGVmaW5lZCA/IC0xIDogKHJlY29yZC5CYXNlQ29uZmlnSWQgPT0gdW5kZWZpbmVkID8gLTEgOiByZWNvcmQuQmFzZUNvbmZpZ0lkKSkpO1xyXG4gICAgICAgIGxldCBoYW5kbGVBY3Rpb24gPSBnZXRMYXN0QWN0aW9uKChyZWNvcmQgPT0gdW5kZWZpbmVkID8gLTEgOiByZWNvcmQuTGFzdEFjdGlvbklEKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVNZXRlciAhPSBudWxsICYmIGhhbmRsZU1ldGVyLmFib3J0ICE9IG51bGwpIGhhbmRsZU1ldGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVCYXNlQ29uZmlnICE9IG51bGwgJiYgaGFuZGxlQmFzZUNvbmZpZy5hYm9ydCAhPSBudWxsKSBoYW5kbGVCYXNlQ29uZmlnLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVBY3Rpb24gIT0gbnVsbCAmJiBoYW5kbGVBY3Rpb24uYWJvcnQgIT0gbnVsbCkgaGFuZGxlQWN0aW9uLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JlY29yZF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZpZWxkVmFsdWVzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGU7XHJcbiAgICAgICAgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRmllbGRWYWx1ZT9wYXJlbnRJRD0ke3Byb3BzLlJlY29yZElEfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEFsbFZhbHVlTGlzdChkYXRhKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJlY29yZChpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JUmVjb3JkPiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZVJlY29yZC9PbmUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IFBSQzAwMi5JUmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIHNldFJlY29yZChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGFzdEFjdGlvbihpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JQWN0aW9uPiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQWN0aW9uL09uZS8ke2lkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogUFJDMDAyLklBY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcihpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JTWV0ZXI+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvT25lLyR7aWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBQUkMwMDIuSU1ldGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIHNldE1ldGVyKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCYXNlQ29uZmlnKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8UFJDMDAyLklCYXNlQ29uZmlnPiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQmFzZUNvbmZpZy9PTkUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IFBSQzAwMi5JQmFzZUNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICAgICBcclxuICAgICAgICAgICAgc2V0QmFzZUNvbmZpZyhkYXRhKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFRTKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBsZXQgbWV0ZXJTdGF0ID0gKG1ldGVyID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHByb3BzLnN0YXRlTGlzdC5maW5kKHMgPT4gcy5JRCA9PSBtZXRlci5TdGF0dXNJRCkpO1xyXG4gICAgbGV0IHJlY29yZFN0YXQgPSAocmVjb3JkID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHByb3BzLnN0YXRlTGlzdC5maW5kKHMgPT4gcy5JRCA9PSByZWNvcmQuU3RhdHVzKSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICB7KG1ldGVyID09IHVuZGVmaW5lZD8gbnVsbCA6XHJcbiAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHVzUm93IGxhYmVsPXsnQ29uZmlndXJhdGlvbiBDaGFuZ2UnfSBzdGF0dXM9e3JlY29yZFN0YXR9IFQ9e3JlY29yZC5UaW1lcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHVzUm93IGxhYmVsPXsnTWV0ZXIgJyArIG1ldGVyLk5hbWV9IHN0YXR1cz17bWV0ZXJTdGF0fSBUPXttZXRlci5UaW1lcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBJc3N1ZSBPcGVuZWQ6IHtmb3JtYXRUUyhyZWNvcmQuQ3JlYXRlZCl9IGJ5IHtyZWNvcmQuVXNlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBMYXN0IEFjdGlvbiBUYWtlbjoge2Zvcm1hdFRTKHJlY29yZC5UaW1lc3RhbXApfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IExhc3QgQWN0aW9uOiB7YWN0aW9uICE9IHVuZGVmaW5lZCA/IDxBY3Rpb25IZWFkZXIgZGF0YT17YWN0aW9ufSBzdGF0ZUxpc3Q9e3Byb3BzLnN0YXRlTGlzdH0gc2hvd1RpbWU9e2ZhbHNlfSAvPiA6IG51bGx9IDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhiYXNlQ29uZmlnID09IHVuZGVmaW5lZCA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0Jhc2VDb25maWcodHJ1ZSl9PiBCYXNlIENvbmZpZ3VyYXRpb24gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RmllbGRzKHRydWUpIH0+IEN1cnJlbnQgQ29uZmlnIElzc3VlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Tm90ZSh0cnVlKX0+IEFkZCBDb21wbGlhbmNlIE5vdGUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcgfHwgcmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnUmV2aWV3ZWQnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dSYXAodHJ1ZSl9PiBTdWJtaXQgUmVtZWRpYWwgQWN0aW9uIFBsYW4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdDb21wbGlhbmNlIElzc3VlJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWNrKHRydWUpfT4gQWNrbm93bGVkZ2UgSXNzdWUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdBY2tub3dsZWRnZWQnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dSZXYodHJ1ZSl9PiBSZXZpZXcgSXNzdWUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1Jlc29sdmUodHJ1ZSl9PiBSZXNvbHZlIElzc3VlIC0gVXBkYXRlZCBCYXNlIENvbmZpZzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1hbnVhbEFjdGlvbiBSZWNvcmRJZD17cHJvcHMuUmVjb3JkSUR9IHN0YXRlPXtudWxsfSBzaG93PXtzaG93Tm90ZX0gc2V0U2hvdz17c2V0U2hvd05vdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRWYWx1ZXMgUmVjb3JkSUQ9e3Byb3BzLlJlY29yZElEfSBzaG93PXtzaG93RmllbGRzfSBzZXRTaG93PXtzZXRTaG93RmllbGRzfSAvPlxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcgfHwgcmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnUmV2aWV3ZWQnID9cclxuICAgICAgICAgICAgICAgICAgICA8TWFudWFsQWN0aW9uIFJlY29yZElkPXtwcm9wcy5SZWNvcmRJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ1JBUCBTdWJtaXR0ZWQnKX0gc2hvdz17c2hvd1JhcH0gc2V0U2hvdz17c2V0U2hvd1JhcH0vPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0NvbXBsaWFuY2UgSXNzdWUnID9cclxuICAgICAgICAgICAgICAgICAgICA8TWFudWFsQWN0aW9uIFJlY29yZElkPXtwcm9wcy5SZWNvcmRJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ0Fja25vd2xlZGdlZCcpfSBzaG93PXtzaG93QWNrfSBzZXRTaG93PXtzZXRTaG93QWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gUmVjb3JkSWQ9e3Byb3BzLlJlY29yZElEfSBzdGF0ZT17cHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLkRlc2NyaXB0aW9uID09PSAnUmV2aWV3ZWQnKX0gc2hvdz17c2hvd1Jldn0gc2V0U2hvdz17c2V0U2hvd1Jldn0vPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ1Jldmlld2VkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVSZWNvcmQgRmllbGRMaXN0PXthbGx2YWx1ZUxpc3QuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uVmFsaWQpfSBSZWNvcmRJRD17cHJvcHMuUmVjb3JkSUR9IHN0YXRlTGlzdD17cHJvcHMuc3RhdGVMaXN0fSBzaG93PXtzaG93UmVzb2x2ZX0gc2V0U2hvdz17c2V0U2hvd1Jlc29sdmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgeyhiYXNlQ29uZmlnID09IHVuZGVmaW5lZCA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbCBUaXRsZT17J0lzc3VlIEJhc2UgQ29uZmlndXJhdGlvbid9IFNob3c9e3Nob3dCYXNlQ29uZmlnfSBDYWxsQmFjaz17KGNvbmZpcm0pID0+IHsgc2V0U2hvd0Jhc2VDb25maWcoZmFsc2UpOyB9fSBTaXplPSdsZycgU2hvd1g9e3RydWV9IFNob3dDYW5jZWw9e2ZhbHNlfSBDb25maXJtVGV4dD0nQ2xvc2UnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhc2VDb25maWdXaW5kb3cgY29uZmlndXJhdGlvbkxpc3Q9e1tiYXNlQ29uZmlnXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPil9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5jb25zdCBTdGF0dXNSb3cgPSAocHJvcHM6IHsgc3RhdHVzOiBQUkMwMDIuSVN0YXR1cywgVDogbnVtYmVyLCBsYWJlbDogc3RyaW5nIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH0gaGFzIGJlZW4gaW5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc0NSUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAoc3RhdHVzID09IHVuZGVmaW5lZCA/ICcjZjhmOWZhJyA6IHByb3BzLnN0YXR1cy5Db2xvciksXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogKHN0YXR1cyA9PSB1bmRlZmluZWQgPyAnIzIxMjUyOScgOiBwcm9wcy5zdGF0dXMuVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnY2FsYyg1JSknXHJcbiAgICAgICAgICAgIH19PiB7cHJvcHMuc3RhdHVzLkRlc2NyaXB0aW9ufSA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc0NSUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAocHJvcHMuVCA8IDMwID8gJyMyOGE3NDUnIDogKHByb3BzLlQgPCA2MCA/ICcjZmZjMTA3JyA6ICcjZGMzNTQ1JykpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IChwcm9wcy5UIDwgMzAgPyAnI2ZmZmZmZicgOiAocHJvcHMuVCA8IDYwID8gJyMyMTI1MjknIDogJyNmZmZmZmYnKSksXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgIH19PiB7cHJvcHMuVH0gRGF5czwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZERldGFpbDtcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFJlc29sdmVSZWNvcmQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzIzLzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IHsgTG9hZGluZ0ljb24sIE1vZGFsLCBUb29sVGlwLCBXYXJuaW5nIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcbmltcG9ydCB7IElucHV0LCBTZWxlY3QgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IFJlY29yZElEOiBudW1iZXIsIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+LCBGaWVsZExpc3Q6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+LCBzaG93OiBib29sZWFuLCBzZXRTaG93OiAoYjogYm9vbGVhbikgPT4gdm9pZH1cclxudHlwZSBzdGVwID0gJ05vdGUnIHwgJ0NoYW5nZSdcclxuXHJcbmNvbnN0IFJlc29sdmVSZWNvcmQgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSBSZWFjdC51c2VTdGF0ZTxzdGVwPignTm90ZScpO1xyXG4gICAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbZmllbGRJbmRleCwgc2V0RmllbGRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICAgIGNvbnN0IFt1cGRhdGVkRmxkLCBzZXRVcGRhdGVkRmxkXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+PihbXSk7XHJcblxyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZTwnTm9uZScgfCAnQ29uZmlybScgfCAnQ2FuY2VsJz4oJ05vbmUnKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0Nsb3NlLCBzZXRTaG93Q2xvc2VdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dDb21wbGV0ZSwgc2V0U2hvd0NvbXBsZXRlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaWVsZFN0YXRlLCBzZXRGaWVsZFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPCdFcnJvcicgfCAnTG9hZGluZycgfCAnVmFsaWQnPignRXJyb3InKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRVcGRhdGVkRmxkKFtdKTtcclxuICAgICAgICBsZXQgaGFuZGxlcyA9IFtdO1xyXG4gICAgICAgIGhhbmRsZXMgPSBwcm9wcy5GaWVsZExpc3QubWFwKGl0ZW0gPT4gTG9hZEZpZWxkKGl0ZW0uRmllbGRJZCkpO1xyXG4gICAgICAgIHJldHVybiAoKCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVzLmZvckVhY2goaCA9PiB7IGlmIChoICE9IG51bGwgJiYgaC5hYm9ydCAhPSBudWxsKSBoLmFib3J0KCk7IH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sW3Byb3BzLkZpZWxkTGlzdF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGRTdGF0ZSgnVmFsaWQnKTtcclxuICAgICAgICBpZiAoZmllbGRJbmRleCA9PSAtMSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh1cGRhdGVkRmxkLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRGbGQubGVuZ3RoIDw9IGZpZWxkSW5kZXgpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZXRGaWVsZFN0YXRlKCdMb2FkaW5nJyk7XHJcbiAgICAgICAgbGV0IGggPSBWYWxpZGF0ZUZpZWxkKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGggIT0gbnVsbCAmJiBoLmFib3J0ICE9IG51bGwpIGguYWJvcnQoKTt9XHJcbiAgICB9LCBbdXBkYXRlZEZsZCwgZmllbGRJbmRleF0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gQ2FuY2VsKCkge1xyXG4gICAgICAgIHNldFN0ZXAoJ05vdGUnKTtcclxuICAgICAgICBzZXRGaWVsZEluZGV4KC0xKTtcclxuICAgICAgICBzZXROb3RlKCcnKTtcclxuICAgICAgICBzZXRVcGRhdGVkRmxkKFtdKVxyXG4gICAgICAgIHByb3BzLnNldFNob3coZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE5leHRTdGVwKCkge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdOb3RlJykge1xyXG4gICAgICAgICAgICBzZXRTdGVwKCdDaGFuZ2UnKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuRmllbGRMaXN0Lmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0NvbXBsZXRlKHRydWUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZEluZGV4KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLkZpZWxkTGlzdC5sZW5ndGggPT0gZmllbGRJbmRleCsxKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0NvbXBsZXRlKHRydWUpO1xyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRJbmRleCgoaW5kZXgpID0+IGluZGV4ICsgMSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTG9hZEZpZWxkKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8YW55PiB7XHJcbiAgICAgICAgbGV0IGggPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC9PbmUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBoLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBzZXRVcGRhdGVkRmxkKChhcnJheSkgPT4gWy4uLmFycmF5LCBkYXRhXSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUHJldlN0ZXAoKSB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05vdGUnKVxyXG4gICAgICAgICAgICBzZXRTaG93Q2xvc2UodHJ1ZSk7XHJcbiAgICAgICAgZWxzZSBpZiAoZmllbGRJbmRleCA9PSAwKVxyXG4gICAgICAgICAgICBzZXRTdGVwKCdOb3RlJylcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldEZpZWxkSW5kZXgoKGluZGV4KSA9PiBpbmRleCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdOb3RlJylcclxuICAgICAgICAgICAgcmV0dXJuICdSZXNvbHZlIElzc3VlJ1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuICdDaGFuZ2UgQmFzZSBDb25maWd1cmF0aW9uJ1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gVmFsaWRhdGVGaWVsZCgpOiBKUXVlcnkuanFYSFI8YW55PiB7XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRGbGRbZmllbGRJbmRleF0uVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXRGaWVsZFN0YXRlKCdFcnJvcicpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0ZpZWxkL0NoZWNrLyR7cHJvcHMuRmllbGRMaXN0W2ZpZWxkSW5kZXhdLlZhbHVlfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZEZsZFtmaWVsZEluZGV4XSBhcyBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGgudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCB8fCAhZGF0YSlcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkU3RhdGUoJ0Vycm9yJylcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRTdGF0ZSgnVmFsaWQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBoO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIFNhdmUoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIHVwZGF0ZWRGbGQuZm9yRWFjaChpdGVtID0+ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRmllbGQvVXBkYXRlYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShpdGVtKSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9BY3Rpb24vQWRkYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IE5vdGU6IG5vdGUsIFN0YXRlSWQ6IHByb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PSAnSW4gQ29tcGxpYW5jZScpLklELCBSZWNvcmRJZDogcHJvcHMuUmVjb3JkSUQgfSBhcyBQUkMwMDIuSUFjdGlvbiksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4gaGlzdG9yeS5nbygwKSlcclxuXHJcbiAgICAgICAgQ2FuY2VsKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNldEZpZWxkKGluZGV4OiBudW1iZXIsIHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgc2V0VXBkYXRlZEZsZCgoZmxkKSA9PiB7IGxldCB1cGRhdGUgPSBfLmNsb25lRGVlcChmbGQpOyB1cGRhdGVbZmllbGRJbmRleF0gPSByZWNvcmQ7IHJldHVybiB1cGRhdGU7IH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHN0ZXBDb21wbGV0ZSA9IChzdGVwID09ICdOb3RlJyA/IG5vdGUubGVuZ3RoID4gMCA6XHJcbiAgICAgICAgKHVwZGF0ZWRGbGRbZmllbGRJbmRleF0gIT0gbnVsbCAmJiBmaWVsZFN0YXRlID09ICdWYWxpZCcgJiYgISh1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdLlZhbHVlID09IG51bGwgfHwgdXBkYXRlZEZsZFtmaWVsZEluZGV4XS5WYWx1ZS5sZW5ndGggPT0gMCkgJiYgISh1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyAmJiBpc05hTihwYXJzZUZsb2F0KHVwZGF0ZWRGbGRbZmllbGRJbmRleF0uVmFsdWUpKSkpKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsIFNob3c9e3Byb3BzLnNob3d9IFRpdGxlPXtnZXRUaXRsZSgpfSBDYW5jZWxUZXh0PXsoc3RlcCA9PSAnTm90ZScgPyAnQ2FuY2VsJyA6ICdCYWNrJyl9XHJcbiAgICAgICAgICAgICAgICBTaG93WD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIENvbmZpcm1Ub29sVGlwQ29udGVudD17J1Jlc29sdmVDb25maXJtJ30gU2l6ZT17J2xnJ30gXHJcbiAgICAgICAgICAgICAgICBDb25maXJtQnRuQ2xhc3M9eydidG4tc3VjY2VzcycgKyAoc3RlcENvbXBsZXRlID8gJycgOiAnIGRpc2FibGVkJyl9XHJcbiAgICAgICAgICAgICAgICBDb25maXJtVGV4dD17KGZpZWxkSW5kZXggPT0gcHJvcHMuRmllbGRMaXN0Lmxlbmd0aCAtIDEgPyAnU2F2ZScgOiAnTmV4dCcpfVxyXG4gICAgICAgICAgICAgICAgQ2FsbEJhY2s9eyhjLCBiKSA9PiB7IGlmIChjKSBOZXh0U3RlcCgpOyBlbHNlIGlmIChiKSBQcmV2U3RlcCgpOyBlbHNlIHNldFNob3dDbG9zZSh0cnVlKTsgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdOb3RlJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob3RlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByb3dzPXs0fSB2YWx1ZT17bm90ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKChlLnRhcmdldCBhcyBhbnkpLnZhbHVlKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb25maWdGaWVsZEVkaXQgdmFsaWRSdWxlPXtmaWVsZFN0YXRlICE9ICdFcnJvcid9IFNldHRlcj17KHJlY29yZCkgPT4gU2V0RmllbGQoZmllbGRJbmRleCwgcmVjb3JkKX0gQ3VycmVudFZhbHVlPXsoZmllbGRJbmRleCA+IC0xID8gcHJvcHMuRmllbGRMaXN0W2ZpZWxkSW5kZXhdIDogdW5kZWZpbmVkKX0gRmllbGQ9eyhmaWVsZEluZGV4ID4gLTEgPyB1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdIDogdW5kZWZpbmVkKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxUb29sVGlwIFNob3c9e2hvdmVyID09ICdDb25maXJtJyAmJiAhc3RlcENvbXBsZXRlfSBQb3NpdGlvbj17J3RvcCd9IFRhcmdldD17J1Jlc29sdmVDb25maXJtJ30gWmluZGV4PXs5OTk5fT5cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdOb3RlJyAmJiBub3RlLmxlbmd0aCA9PSAwID8gPHA+IDxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIGNvbG9yOiAnI2RjMzU0NScgfX0gY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPkEgTm90ZSBpcyByZXF1aXJlZC48L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdDaGFuZ2UnICYmICh1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdICE9IG51bGwgJiYgKHVwZGF0ZWRGbGRbZmllbGRJbmRleF0uVmFsdWUgPT0gbnVsbCB8fCB1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdLlZhbHVlLmxlbmd0aCA9PSAwKSkgID8gPHA+IDxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIGNvbG9yOiAnI2RjMzU0NScgfX0gY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPkEgVmFsdWUgaXMgcmVxdWlyZWQuPC9wPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7c3RlcCA9PSAnQ2hhbmdlJyAmJiB1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdICE9IG51bGwgJiYgdXBkYXRlZEZsZFtmaWVsZEluZGV4XS5GaWVsZFR5cGUgPT0gJ251bWJlcicgJiYgaXNOYU4ocGFyc2VGbG9hdCh1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdLlZhbHVlKSkgPyA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+VmFsdWUgaXMgcmVxdWlyZWQgdG8gbmUgYSBudW1iZXIuPC9wPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7c3RlcCA9PSAnQ2hhbmdlJyAmJiBmaWVsZFN0YXRlID09ICdMb2FkaW5nJyA/IDxMb2FkaW5nSWNvbiBTaG93PXt0cnVlfSBMYWJlbD17J1ZlcmlmeWluZyBOZXcgUnVsZS4uLid9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdDaGFuZ2UnICYmIGZpZWxkU3RhdGUgPT0gJ0Vycm9yJyA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5UaGUgbmV3IFJ1bGUgbmVlZHMgdG8gcmVzdWx0IGluIHRoZSBjdXJyZW50IFZhbHVlIGJlaW5nIFZhbGlkLjwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L1Rvb2xUaXA+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnQ2FuY2VsJ30gTWVzc2FnZT17J1dhcm5pbmcgYWxsIENoYW5nZXMgd2lsbCBiZSBsb3N0IGFuZCB0aGUgbmV3IGJhc2UgY29uZmlndXJhdGlvbiB3aWxsIG5vdCBiZSBhcHBsaWVkJ30gQ2FsbEJhY2s9eyhjKSA9PiB7IGlmIChjKSBDYW5jZWwoKTsgc2V0U2hvd0Nsb3NlKGZhbHNlKSB9fSBTaG93PXtzaG93Q2xvc2V9IC8+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnV2FybmluZyd9IE1lc3NhZ2U9eydUaGlzIHdpbGwgY2hhbmdlIHRoZSBCYXNlIENvbmZpZ3VyYXRpb24gZm9yIHRoaXMgbWV0ZXIgYW5kIGNhbiBub3QgYmUgdW5kb25lLiBBIHBlcm1hbmVudCBjb21wbGlhbmNlIHJlY29yZCB3aWxsIGJlIGNyZWF0ZWQnfSBTaG93PXtzaG93Q29tcGxldGV9IENhbGxCYWNrPXsoYykgPT4geyBpZiAoYykgU2F2ZSgpOyBzZXRTaG93Q29tcGxldGUoZmFsc2UpIH19Lz5cclxuICAgICAgICA8Lz4pXHJcbn1cclxuXHJcbmNvbnN0IENvbmZpZ0ZpZWxkRWRpdCA9IChwcm9wczogeyBGaWVsZDogUFJDMDAyLklDb25maWdGaWVsZCwgU2V0dGVyOiAocmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSA9PiB2b2lkLCBDdXJyZW50VmFsdWU6IFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXMsIHZhbGlkUnVsZTogYm9vbGVhbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgRmllbGRUeXBlT3B0aW9ucyA9IFt7IFZhbHVlOiAnc3RyaW5nJywgTGFiZWw6ICdUZXh0JyB9LCB7IFZhbHVlOiAnbnVtYmVyJywgTGFiZWw6ICdOdW1iZXInIH1dO1xyXG4gICAgY29uc3QgTnVtYmVyQ2hlY2tzID0gW3sgVmFsdWU6ICc9JywgTGFiZWw6ICc9JyB9LCB7IFZhbHVlOiAnPD4nLCBMYWJlbDogJzw+JyB9LCB7IFZhbHVlOiAnPicsIExhYmVsOiAnPicgfSwgeyBWYWx1ZTogJzwnLCBMYWJlbDogJzwnIH1dO1xyXG4gICAgY29uc3QgVGV4dENoZWNrcyA9IFt7IFZhbHVlOiAnPScsIExhYmVsOiAnPScgfSwgeyBWYWx1ZTogJzw+JywgTGFiZWw6ICc8PicgfSwgeyBWYWx1ZTogJ0lOJywgTGFiZWw6ICdJbicgfV07XHJcblxyXG4gICAgZnVuY3Rpb24gVmFsaWRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHByb3BzLkZpZWxkLlZhbHVlICE9IG51bGwgJiYgcHJvcHMuRmllbGQuVmFsdWUubGVuZ3RoID4gMCAmJiAocHJvcHMuRmllbGQuRmllbGRUeXBlICE9ICdudW1iZXInIHx8ICFpc05hTihwYXJzZUZsb2F0KHByb3BzLkZpZWxkLlZhbHVlKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFJ1bGVSZXN1bHQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wcy5DdXJyZW50VmFsdWUgPT0gbnVsbCB8fCBwcm9wcy5GaWVsZCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4gUmVjb3JkPXtwcm9wcy5DdXJyZW50VmFsdWV9IEZpZWxkPXsnVmFsdWUnfSBTZXR0ZXI9eygpID0+IHsgfX0gVmFsaWQ9eygpID0+IHByb3BzLnZhbGlkUnVsZX0gTGFiZWw9eydDdXJyZW50IFZhbHVlJ30gRGlzYWJsZWQ9e3RydWV9IEZlZWRiYWNrPXsnVGhlIG5ldyBSdWxlIG5lZWRzIHRvIGFsbG93IHRoZSBjdXJyZW50IFZhbHVlLid9IC8+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8U2VsZWN0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnRmllbGRUeXBlJ30gT3B0aW9ucz17RmllbGRUeXBlT3B0aW9uc30gTGFiZWw9eydGaWVsZCBUeXBlJ30gRGlzYWJsZWQ9e3RydWV9IFNldHRlcj17KHJlY29yZCkgPT4ge319IC8+XHJcbiAgICAgICAgPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnTmFtZSd9IFNldHRlcj17KCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gTGFiZWw9eydGaWVsZCd9IERpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgIDxTZWxlY3Q8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydDb21wYXJpc29uJ30gT3B0aW9ucz17KHByb3BzLkZpZWxkLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyA/IE51bWJlckNoZWNrcyA6IFRleHRDaGVja3MpfSBMYWJlbD17J1J1bGUnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgcHJvcHMuU2V0dGVyKHJlY29yZCkgfX0gLz5cclxuICAgICAgICB7KHByb3BzLkZpZWxkLkNvbXBhcmlzb24gPT0gJ0lOJyA/IDxNdWx0aUlucHV0RmllbGQgZGF0YT17cHJvcHMuRmllbGR9IFNldHRlcj17KHJlY29yZCkgPT4geyBwcm9wcy5TZXR0ZXIocmVjb3JkKSB9fSAvPiA6XHJcbiAgICAgICAgICAgIDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e3Byb3BzLkZpZWxkfSBGaWVsZD17J1ZhbHVlJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IFZhbGlkPXsoKSA9PiBWYWxpZFZhbHVlKCl9IExhYmVsPXsnVmFsdWUnfSBGZWVkYmFjaz17cHJvcHMuRmllbGQuRmllbGRUeXBlICE9ICdudW1iZXInID8gJ1ZhbHVlIGlzIHJlcXVpcmVkLicgOiAnVmFsdWUgaXMgcmVxdWlyZWQgYW5kIG5lZWRzIHRvIGJlIGEgbnVtYmVyLid9IC8+XHJcbiAgICAgICAgKX1cclxuICAgIDwvPilcclxufVxyXG5cclxuY29uc3QgTXVsdGlJbnB1dEZpZWxkID0gKHByb3BzOiB7IGRhdGE6IFBSQzAwMi5JQ29uZmlnRmllbGQsIFNldHRlcjogKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbbGlzdFZhbHVlcywgc2V0TGlzdFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxzdHJpbmc+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRMaXN0VmFsdWVzKHByb3BzLmRhdGEuVmFsdWUuc3BsaXQoJzsnKSlcclxuICAgIH0sIFtwcm9wcy5kYXRhXSlcclxuXHJcbiAgICBmdW5jdGlvbiBTZXQoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgIGxzdFtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgIHByb3BzLlNldHRlcihyZWMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQWRkTmV3KCkge1xyXG4gICAgICAgIGxldCByZWMgPSBfLmNsb25lRGVlcChwcm9wcy5kYXRhKTtcclxuICAgICAgICBsZXQgbHN0ID0gXy5jbG9uZShsaXN0VmFsdWVzKTtcclxuICAgICAgICBsc3QucHVzaCgocHJvcHMuZGF0YS5GaWVsZFR5cGUgPT0gJ3N0cmluZycgPyAnVmFsdWUnIDogJzAnKSlcclxuICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgIHByb3BzLlNldHRlcihyZWMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgIGxzdC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgcmVjLlZhbHVlID0gbHN0LmpvaW4oJzsnKTtcclxuICAgICAgICBwcm9wcy5TZXR0ZXIocmVjKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2xpc3RWYWx1ZXMubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PSAwID8gPGxhYmVsPlZhbHVlczwvbGFiZWw+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGV2dCkgPT4geyBTZXQoaW5kZXgsIGV2dC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKSB9fSB2YWx1ZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IEFkZE5ldygpfT4gQWRkIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZVJlY29yZDtcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEJhc2VDb25maWdUYWJsZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDMvMTYvMjAyMSAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IENvbmZpZ0ZpZWxkVmFsdWVUYWJsZUZpZWxkIGZyb20gJy4vQ29uZmlnRmllbGRWYWx1ZVRhYmxlRmllbGQnO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgQ29uZmlnOiBQUkMwMDIuSUJhc2VDb25maWcsXHJcbiAgICBGaWVsZHM6IFBSQzAwMi5JQ29uZmlnRmllbGRbXSxcclxuICAgIE9uRWRpdD86IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpID0+IHZvaWQsXHJcbiAgICBPblJlbW92ZT86IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpID0+IHZvaWQsXHJcbiAgICBPbk5ldz86ICgpID0+IHZvaWQsXHJcbn1cclxuXHJcbmNvbnN0IEJhc2VDb25maWdUYWJsZSA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NhdGVnb3J5cywgc2V0Q2F0ZWdvcnlzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgICBjb25zdCBbb3JkZXJlZEZpZWxkcywgc2V0T3JkZXJlZEZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSUNvbmZpZ0ZpZWxkW11bXT4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhdCA9IF8udW5pcShwcm9wcy5GaWVsZHMubWFwKGYgPT4gZi5DYXRlZ29yeSkpO1xyXG4gICAgICAgIGxldCBmbGRzID0gY2F0Lm1hcChpdGVtID0+IFtdKTtcclxuICAgICAgICBwcm9wcy5GaWVsZHMuZm9yRWFjaChmbGQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaSA9IGNhdC5maW5kSW5kZXgoYyA9PiBmbGQuQ2F0ZWdvcnkgPT0gYyk7XHJcbiAgICAgICAgICAgIGZsZHNbaV0ucHVzaChmbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldENhdGVnb3J5cyhjYXQpO1xyXG4gICAgICAgIHNldE9yZGVyZWRGaWVsZHMoZmxkcyk7XHJcbiAgICB9LCBbcHJvcHMuRmllbGRzXSlcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDQ+IENvbmZpZ3VyYXRpb24ge3Byb3BzLkNvbmZpZy5OYW1lfTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FyZC1ib2R5XCJ9ID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDU0MCwgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1NDAsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQ8UFJDMDAyLklCYXNlQ29uZmlnPiBSZWNvcmQ9e3Byb3BzLkNvbmZpZ30gRmllbGQ9eydQYXR0ZXJuJ30gU2V0dGVyPXsoKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSBMYWJlbD17J0ZpbGUgUGF0dGVybid9IERpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlzLm1hcCgoa2V5LCBpbmRleCkgPT4gPENhdGVnb3J5U2VjdGlvbiBUaXRsZT17a2V5fSBrZXk9e2luZGV4fSBGaWVsZHM9e29yZGVyZWRGaWVsZHNbaW5kZXhdfSBPbkVkaXQ9e3Byb3BzLk9uRWRpdH0gT25SZW1vdmU9e3Byb3BzLk9uUmVtb3ZlfSAvPil9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmQtZm9vdGVyXCJ9PlxyXG4gICAgICAgICAgICB7cHJvcHMuT25OZXcgIT0gdW5kZWZpbmVkID8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IHByb3BzLk9uTmV3KCl9PkFkZCBuZXcgRmllbGQgPC9idXR0b24+IDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz4pXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuY29uc3QgQ2F0ZWdvcnlTZWN0aW9uID0gKHByb3BzOiB7IFRpdGxlOiBzdHJpbmcsIEZpZWxkczogUFJDMDAyLklDb25maWdGaWVsZFtdLCBPbkVkaXQ/OiAocmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSA9PiB2b2lkLCBPblJlbW92ZT86IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSUNvbmZpZ0ZpZWxkW10+KHByb3BzLkZpZWxkcylcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEZpZWxkcygoZmxkcykgPT4gXy5vcmRlckJ5KGZsZHMsIFtzb3J0RmllbGRdLCBbKGFzY2VuZGluZyA/IFwiYXNjXCIgOiBcImRlc2NcIildKSk7XHJcbiAgICB9LCBbc29ydEZpZWxkLCBhc2NlbmRpbmddKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGRzKHByb3BzLkZpZWxkcyk7XHJcbiAgICB9LCBbcHJvcHMuRmllbGRzXSlcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1saW5rIGJ0bi1ibG9jayB0ZXh0LWxlZnRcIn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuVGl0bGUgPT0gdW5kZWZpbmVkIHx8IHByb3BzLlRpdGxlLmxlbmd0aCA9PSAwPyAnVW5rbm93biBTZWN0aW9uJyA6IHByb3BzLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbGxhcHNlXCIgKyAoc2hvdyA/IFwiIHNob3dcIiA6ICcnKX0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGU8UFJDMDAyLklDb25maWdGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdMYWJlbCcsIGxhYmVsOiAnRmllbGQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2NhbGMoMzAlIC0gOC4yNWVtIC0gMTMwcHgpJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2NhbGMoMzAlIC0gOC4yNWVtIC0gMTMwcHgpJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydMYWJlbCd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRmllbGRUeXBlJywgbGFiZWw6ICdUeXBlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICc4ZW0nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnOGVtJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydGaWVsZFR5cGUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0NvbXBhcmlzb24nLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNWVtJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzVlbScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnQ29tcGFyaXNvbid9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdWYWx1ZScsIGxhYmVsOiAnVmFsdWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2NhbGMoNjAlIC0gOC4yNWVtKScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdjYWxjKDYwJSAtIDguMjVlbSknIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8Q29uZmlnRmllbGRWYWx1ZVRhYmxlRmllbGQgUmVjb3JkPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMzBweCcgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMzBweCcgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5PbkVkaXQgIT0gdW5kZWZpbmVkID8gPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNnB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IHByb3BzLk9uRWRpdChpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aSBzdHlsZT17eyBjb2xvcjogJyMwMDdCRkYnIH19IGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbC1zcXVhcmUgZmEtM3hcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuT25SZW1vdmUgIT0gdW5kZWZpbmVkID8gPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNnB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IHByb3BzLk9uUmVtb3ZlKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzIGZhLTN4XCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz4pXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VDb25maWdUYWJsZTtcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEJhc2VDb25maWdXaW5kb3cudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzEwLzIwMjEgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgQmFzZUNvbmZpZ1RhYmxlIGZyb20gJy4vQmFzZUNvbmZpZ1RhYmxlJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGNvbmZpZ3VyYXRpb25MaXN0OiBQUkMwMDIuSUJhc2VDb25maWdbXSxcclxuICAgIGdldEZpZWxkTGlzdD86IChpZDogbnVtYmVyLCBzZXRGaWVsZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248UFJDMDAyLklDb25maWdGaWVsZFtdPj4pID0+ICgoKSA9PiB2b2lkKVxyXG4gICAgT25FZGl0PzogKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCwgYmFzZUNvbmZpZElEOiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICBPblJlbW92ZT86IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQsIGJhc2VDb25maWdJRDogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgT25OZXc/OiAoYmFzZUNvbmZpZ0lEOiBudW1iZXIpID0+IHZvaWQsXHJcblxyXG59XHJcbmNvbnN0IEJhc2VDb25maWdXaW5kb3cgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcbiAgICBjb25zdCBbZmllbGRMaXN0LCBzZXRGaWVsZExpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklDb25maWdGaWVsZD4+KFtdKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocHJvcHMuY29uZmlndXJhdGlvbkxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5JRCA9PSBjdXJyZW50VGFiKSA9PSAtMSAmJiBwcm9wcy5jb25maWd1cmF0aW9uTGlzdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFRhYihwcm9wcy5jb25maWd1cmF0aW9uTGlzdFswXS5JRCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jb25maWd1cmF0aW9uTGlzdC5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUYWIoLTEpXHJcbiAgICAgICAgICAgIFxyXG4gICAgfSwgW3Byb3BzLmNvbmZpZ3VyYXRpb25MaXN0XSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuZ2V0RmllbGRMaXN0ICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHByb3BzLmdldEZpZWxkTGlzdChjdXJyZW50VGFiLCBzZXRGaWVsZExpc3QpO1xyXG4gICAgICAgIGxldCBoID0gZ2V0RmllbGRMaXN0KCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGggIT0gbnVsbCAmJiBoLmFib3J0ICE9IG51bGwpIGguYWJvcnQoKTsgfVxyXG4gICAgfSwgW2N1cnJlbnRUYWIsIHByb3BzLmNvbmZpZ3VyYXRpb25MaXN0XSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RmllbGRMaXN0KCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSUJhc2VDb25maWc+PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUYWIgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC8ke2N1cnJlbnRUYWJ9L0NhdGVnb3J5LzFgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgc2V0RmllbGRMaXN0KGRhdGEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAge3Byb3BzLmNvbmZpZ3VyYXRpb25MaXN0Lmxlbmd0aCA+IDEgP1xyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY29uZmlndXJhdGlvbkxpc3QubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rXCIgKyAoY3VycmVudFRhYiA9PSBpdGVtLklEID8gXCIgYWN0aXZlXCIgOiBcIlwiKX0gb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFRhYihpdGVtLklEKX0+e2l0ZW0uTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdWw+IDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB7Y3VycmVudFRhYiAhPSAtMSAmJiBwcm9wcy5jb25maWd1cmF0aW9uTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5JRCA9PSBjdXJyZW50VGFiKSAhPSB1bmRlZmluZWQgPyA8IGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIHN0eWxlPXt7IG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjM1LCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgIDxCYXNlQ29uZmlnVGFibGVcclxuICAgICAgICAgICAgICAgIENvbmZpZz17cHJvcHMuY29uZmlndXJhdGlvbkxpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT0gY3VycmVudFRhYil9XHJcbiAgICAgICAgICAgICAgICBGaWVsZHM9e2ZpZWxkTGlzdH0gT25FZGl0PXtwcm9wcy5PbkVkaXQgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHJlY29yZCkgPT4gcHJvcHMuT25FZGl0KHJlY29yZCwgY3VycmVudFRhYil9XHJcbiAgICAgICAgICAgICAgICBPblJlbW92ZT17cHJvcHMuT25SZW1vdmUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHJlY29yZCkgPT4gcHJvcHMuT25SZW1vdmUocmVjb3JkLCBjdXJyZW50VGFiKX1cclxuICAgICAgICAgICAgICAgIE9uTmV3PXtwcm9wcy5Pbk5ldyA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAoKSA9PiBwcm9wcy5Pbk5ldyhjdXJyZW50VGFiKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4gOiBudWxsfVxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQmFzZUNvbmZpZ0J5TWV0ZXIgPSAocHJvcHM6IHsgTWV0ZXJJZDogbnVtYmVyIH0pID0+IHtcclxuICAgIGNvbnN0IFtjb25maWd1cmF0aW9ubGlzdCwgc2V0Q29uZmlndXJhdGlvbkxpc3RdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklCYXNlQ29uZmlnW10+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoID0gZ2V0QmFzZUNvbmZpZ3MoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaCAhPSBudWxsICYmIGguYWJvcnQgIT0gbnVsbCkgaC5hYm9ydCgpOyB9XHJcbiAgICB9LCBbcHJvcHMuTWV0ZXJJZF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhc2VDb25maWdzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSUJhc2VDb25maWc+PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLk1ldGVySWQgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0Jhc2VDb25maWc/cGFyZW50SUQ9JHtwcm9wcy5NZXRlcklkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIHNldENvbmZpZ3VyYXRpb25MaXN0KGRhdGEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPEJhc2VDb25maWdXaW5kb3cgY29uZmlndXJhdGlvbkxpc3Q9e2NvbmZpZ3VyYXRpb25saXN0fSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29uZmlnV2luZG93O1xyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlnRmllbGRWYWx1ZVRhYmxlRmllbGQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzEwLzIwMjEgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmNvbnN0IENvbmZpZ0ZpZWxkVmFsdWVUYWJsZUZpZWxkID0gKHByb3BzOiB7IFJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCB9KSA9PiB7XHJcbiAgICBjb25zdCBoYXNEZXNjID0gcHJvcHMuUmVjb3JkLkRlc2NyaXB0aW9uICE9IHVuZGVmaW5lZCAmJiBwcm9wcy5SZWNvcmQuRGVzY3JpcHRpb24ubGVuZ3RoID4gMDtcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogKGhhc0Rlc2MgPyAnY2FsYyg1MCUgLSA4cHgpJyA6ICcxMDAlJyksIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRmllbGQ9eydWYWx1ZSd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtoYXNEZXNjID8gPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3A6ICc4cHggc29saWQgdHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzhweCBzb2xpZCB0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6ICc4cHggc29saWQgIzIyMicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAtOCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyMjInLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4IDIxcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuUmVjb3JkLkRlc2NyaXB0aW9uLnNwbGl0KCc8YnI+JykubWFwKCh0LCBpKSA9PiA8IHAga2V5PXtpfSBzdHlsZT17eyBtYXJnaW46IDAgfX0+IHt0fSA8L3A+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC8+IDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnRmllbGRWYWx1ZVRhYmxlRmllbGQ7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1hbnVhbEFjdGlvbi50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTgvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBQUkMwMDJ9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBNb2RhbCwgV2FybmluZyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5cclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5pbnRlcmZhY2UgSVByb3BzIHsgc2hvdzogYm9vbGVhbiwgc2V0U2hvdzogKGI6IGJvb2xlYW4pID0+IHZvaWQsIFJlY29yZElkPzogbnVtYmVyLCBNZXRlcklkPzogbnVtYmVyLCBzdGF0ZTogUFJDMDAyLklTdGF0dXN9XHJcblxyXG5cclxuY29uc3QgTWFudWFsQWN0aW9uID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gICAgY29uc3QgW1RvZmZzZXQsIHNldFRvZmZzZXRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtzaG93V2FybmluZywgc2V0V2FybmluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiAnQWRkIENvbXBsaWFuY2UgTm90ZSdcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnQWNrbm93bGVkZ2UgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnUmV2aWV3IEFsZXJ0J1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnUkFQIFN1Ym1pdHRlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnQ3JlYXRlIFJlbWVkaWFsIEFjdGlvbiBQbGFuJ1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQ29tcGxpYW5jZSBJc3N1ZScpXHJcbiAgICAgICAgICAgIHJldHVybiAnU3VibWl0IENvbXBsaWFuY2UgSXNzdWUnXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJ0bigpIHtcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0FkZCBOb3RlJ1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdBY2tub3dsZWRnZWQgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnUmV2aWV3ZWQgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSQVAgU3VibWl0dGVkJylcclxuICAgICAgICAgICAgcmV0dXJuICdDcmVhdGUgUmVtZWRpYWwgQWN0aW9uIFBsYW4nXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdDb21wbGlhbmNlIElzc3VlJylcclxuICAgICAgICAgICAgcmV0dXJuICdTdWJtaXQnXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb25maXJtKGM6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoYyAmJiBwcm9wcy5zdGF0ZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHN1Ym1pdHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjICYmIHByb3BzLnN0YXRlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjKSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRUb2Zmc2V0KDApO1xyXG4gICAgICAgICAgICBzZXROb3RlKCcnKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXR0KCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5SZWNvcmRJZCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRSZWNvcmQoKTtcclxuICAgICAgICBpZiAocHJvcHMuTWV0ZXJJZCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRNZXRlcigpXHJcblxyXG4gICAgICAgIHNldE5vdGUoXCJcIik7XHJcbiAgICAgICAgc2V0VG9mZnNldCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXR0UmVjb3JkKCkge1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSB7IE5vdGU6IG5vdGUsIFN0YXRlSWQ6IG51bGwsIFJlY29yZElkOiBwcm9wcy5SZWNvcmRJZCB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYWN0aW9uLlN0YXRlSWQgPSBwcm9wcy5zdGF0ZS5JRDtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0FjdGlvbi9BZGRgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGFjdGlvbiBhcyBQUkMwMDIuSUFjdGlvbiksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4gaGlzdG9yeS5nbygwKSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXR0TWV0ZXIoKSB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdDb21wbGlhbmNlIElzc3VlJylcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZVJlY29yZC9BZGRgLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBNZXRlcklkOiBwcm9wcy5NZXRlcklkLCBUaW1lck9mZnNldDogVG9mZnNldCwgU3RhdHVzOiBwcm9wcy5zdGF0ZS5JRCwgTm90ZTogbm90ZSB9KSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEgPT4gaGlzdG9yeS5nbygwKSkpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvUkFQU3VibWl0dGAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IG1ldGVySWQ6IHByb3BzLk1ldGVySWQsIE5vdGU6IG5vdGUgfSksXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICB9KS50aGVuKChkYXRhID0+IGhpc3RvcnkuZ28oMCkpKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8TW9kYWwgU2hvdz17cHJvcHMuc2hvd30gVGl0bGU9e2dldFRpdGxlKCl9IENvbmZpcm1UZXh0PXtnZXRCdG4oKX0gQ2FuY2VsQnRuQ2xhc3M9eydDYW5jZWwnfSBDYWxsQmFjaz17KGMpID0+IHsgY29uZmlybShjKSB9fSBTaXplPSdzbSc+IFxyXG4gICAgICAgICAgICB7KHByb3BzLnN0YXRlICE9IHVuZGVmaW5lZCAmJiBwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQ29tcGxpYW5jZSBJc3N1ZScpP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob3RlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcm93cz17NH0gdmFsdWU9e25vdGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZSgoZS50YXJnZXQgYXMgYW55KS52YWx1ZSl9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGF5cyBvdXQgb2YgQ29tcGxpYW5jZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9eydudW1iZXInfSB2YWx1ZT17VG9mZnNldH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUb2Zmc2V0KHBhcnNlSW50KChlLnRhcmdldCBhcyBhbnkpLnZhbHVlIGFzIHN0cmluZykpfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9ezR9IHZhbHVlPXtub3RlfSBvbkNoYW5nZT17KGUpID0+IHNldE5vdGUoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFNob3c9e3Nob3dXYXJuaW5nfSBUaXRsZT17J1dhcm5pbmcnfSBNZXNzYWdlPXsnVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUuIEl0IHdpbGwgY3JlYXRlIGEgcGVybWFuZW50IGNvbXBsaWFuY2UgcmVjb3JkLid9IENhbGxCYWNrPXsocmVzdWx0KSA9PiB7IGlmIChyZXN1bHQpIHN1Ym1pdHQoKTsgc2V0V2FybmluZyhmYWxzZSkgfX0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFudWFsQWN0aW9uO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE5ld0NvbmZpZ0ZpZWxkcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDMvMTYvMjAyMSAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBSZWNvcmQ6IFBSQzAwMi5JQmFzZUNvbmZpZyxcclxuICAgIFNldFJlY29yZDogKHJlY29yZDogUFJDMDAyLklCYXNlQ29uZmlnKSA9PiB2b2lkLFxyXG4gICAgVW5pcXVlS2V5OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IE5ld0NvbmZpZ0ZpZWxkcyA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgXHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxJbnB1dDxQUkMwMDIuSUJhc2VDb25maWc+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD17J05hbWUnfSBTZXR0ZXI9e3Byb3BzLlNldFJlY29yZH0gVmFsaWQ9eygpID0+IHByb3BzLlJlY29yZC5OYW1lICE9IG51bGwgJiYgcHJvcHMuUmVjb3JkLk5hbWUubGVuZ3RoID4gMCAmJiBwcm9wcy5VbmlxdWVLZXl9XHJcbiAgICAgICAgICAgIEZlZWRiYWNrPXsnTmFtZSBpcyByZXF1aXJlZCBhbmQgbXVzdCBiZSB1bmlxdWUnfSBMYWJlbD17J05hbWUnfSAvPlxyXG4gICAgICAgIDxJbnB1dDxQUkMwMDIuSUJhc2VDb25maWc+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD17J1BhdHRlcm4nfSBTZXR0ZXI9e3Byb3BzLlNldFJlY29yZH0gVmFsaWQ9eygpID0+IHByb3BzLlJlY29yZC5QYXR0ZXJuICE9IG51bGwgJiYgcHJvcHMuUmVjb3JkLlBhdHRlcm4ubGVuZ3RoID4gMH1cclxuICAgICAgICAgICAgTGFiZWw9eydGaWxlIFBhdHRlcm4nfSBGZWVkYmFjaz17J0ZpbGUgUGF0dGVybiBpcyByZXF1aXJlZC4nfSAvPiA8Lz4pXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Q29uZmlnRmllbGRzO1xyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRG93bG9hZEZpbGUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDEwLzI3LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgTWV0ZXJJZDogbnVtYmVyIH1cclxuaW50ZXJmYWNlIElGaWxlIHsgSUQ6IG51bWJlciwgRmlsZU5hbWU6IHN0cmluZyB9XHJcblxyXG5jb25zdCBEb3dsb2FkRmlsZXMgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gUmVhY3QudXNlU3RhdGU8SUZpbGVbXT4oW10pO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBnZXRGaWxlcygpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUgIT0gbnVsbCAmJiBoYW5kbGUuYWJvcnQgIT0gbnVsbCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySWQsIGFzY2VuZGluZ10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZpbGVzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxJRmlsZT4+IHtcclxuICAgICAgICBpZiAocHJvcHMuTWV0ZXJJZCA9PSAtMSB8fCBwcm9wcy5NZXRlcklkID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0dldEZpbGVzLyR7cHJvcHMuTWV0ZXJJZH0vJHthc2NlbmRpbmc/IDE6IDB9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxJRmlsZT4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICBzZXRGaWxlTGlzdChkYXRhKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlPElGaWxlPiBcclxuICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGaWxlTmFtZScsIGxhYmVsOiAnRmlsZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRG93bG9hZEZpbGUvJHtpdGVtLklEfWApfT4gRG93bmxvYWQgPC9idXR0b24+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YT17ZmlsZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17J0ZpbGVOYW1lJ31cclxuICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHsgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGQpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb3dsb2FkRmlsZXM7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTWV0ZXJDb25maWd1cmF0aW9uLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMy8xNS8yMDIxLSBDLiBsYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5cclxuaW1wb3J0IHsgTG9hZGluZ0ljb24sIExvYWRpbmdTY3JlZW4sIE1vZGFsLCBUb29sVGlwLCBXYXJuaW5nIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcbmltcG9ydCBCYXNlQ29uZmlnV2luZG93LCB7IEJhc2VDb25maWdCeU1ldGVyIH0gZnJvbSAnLi4vQ29tbW9uL0Jhc2VDb25maWdXaW5kb3cnO1xyXG5pbXBvcnQgeyBQYXJzZUlOSSwgUGFyc2VQQVIgfSBmcm9tICcuLi9NZXRlcldpenphcmQvRmlsZVBhcnNlcic7XHJcbmltcG9ydCBGaWxlUGFyc2VXaW5kb3cgZnJvbSAnLi4vTWV0ZXJXaXp6YXJkL0ZpbGVQYXJzZVdpbmRvdyc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCBOZXdDb25maWdGaWVsZHMgZnJvbSAnLi4vQ29tbW9uL05ld0NvbmZpZ0ZpZWxkcyc7XHJcbmltcG9ydCBDb25maWdGaWVsZEVkaXQgZnJvbSAnLi4vTWV0ZXJXaXp6YXJkL0NvbmZpZ3VyYXRpb25maWVsZEVkaXQnO1xyXG5pbXBvcnQgeyBmaW5kIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAndGxzJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtNZXRlcklEOiBudW1iZXIsIHNob3c6IGJvb2xlYW4sIHNldFNob3c6IChzOiBib29sZWFuKSA9PiB2b2lkfVxyXG50eXBlIHN0YXRlID0gJ3ZpZXcnIHwgJ2VkaXQnIHwgJ25ldycgfCAndXBsb2FkJyB8ICdlZGl0RmllbGQnO1xyXG5cclxuXHJcbmNvbnN0IE1ldGVyQ29uZmlndXJhdGlvbldpbmRvdyA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPHN0YXRlPigndmlldycpO1xyXG4gICAgY29uc3QgW3Nob3dMb2FkaW5nLCBzZXRTaG93TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1dhcm5pbmcsIHNldFNob3dXYXJuaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZTwnQ2FuY2VsJyB8ICdDb25maXJtJyB8ICdOb25lJz4oJ05vbmUnKTtcclxuXHJcbiAgICBjb25zdCBbZmlsZUZpZWxkcywgc2V0RmlsZUZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSUNvbmZpZ0ZpZWxkW10+KFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEZpZWxkcywgc2V0U2VsZWN0ZWRGaWVsZHNdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklDb25maWdGaWVsZFtdPihbXSk7XHJcbiAgICBjb25zdCBbYWRkZWRJbmRpY2VzLCBzZXRBZGRlZEluZGljZXNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcclxuICAgIGNvbnN0IFthZGRlZEZpZWxkcywgc2V0QWRkZWRGaWVsZHNdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklDb25maWdGaWVsZFtdW10+KFtdKTtcclxuXHJcbiAgICBjb25zdCBbY29uZmlndXJhdGlvbmxpc3QsIHNldENvbmZpZ3VyYXRpb25MaXN0XSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQmFzZUNvbmZpZ1tdPihbXSk7XHJcbiAgICBjb25zdCBbc2VydmVyQ29uZmlndXJhdGlvbmxpc3QsIHNldFNlcnZlckNvbmZpZ3VyYXRpb25MaXN0XSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQmFzZUNvbmZpZ1tdPihbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtuZXdDb25maWd1cmF0aW9uLCBzZXROZXdDb25maWd1cmF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQmFzZUNvbmZpZz4oeyBJRDogLTEsIE1ldGVySWQ6IHByb3BzLk1ldGVySUQsIE5hbWU6ICdOZXcgQ29uZmlndXJhdGlvbicsIFBhdHRlcm46ICcqLmluaScgfSk7XHJcbiAgICBjb25zdCBbdW5pcXVlQ29uZ2lmdXJhdGlvbktleSwgc2V0VW5pcXVlQ29uZmlndXJhdGlvbktleV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbZWRpdEZpZWxkLCBzZXRFZGl0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8eyBmbGQ6IFBSQzAwMi5JQ29uZmlnRmllbGQsIG1vZGU6ICdkZWxldGUnIHwgJ2VkaXQnIH0+KG51bGwpO1xyXG4gICAgY29uc3QgW25ld0VkaXRGaWVsZCwgc2V0TmV3RWRpdEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQ29uZmlnRmllbGQ+KHtJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnLCBDYXRlZ29yeTogJycsIExhYmVsOiAnRmllbGQnLCBEZXNjcmlwdGlvbjogJycgfSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtzaG93RGVsZXRlV2FybmluZywgc2V0U2hvd0RlbGV0ZVdhcm5pbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dOb0VkaXROb3RpY2UsIHNldFNob3dOb0VkaXROb3RpY2VdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dFZGl0V2FybmluZywgc2V0U2hvd0VkaXRXYXJuaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoID0gZ2V0QmFzZUNvbmZpZ3MoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaCAhPSBudWxsICYmIGguYWJvcnQgIT0gbnVsbCkgaC5hYm9ydCgpOyB9XHJcbiAgICB9LCBbcHJvcHMuTWV0ZXJJRCwgcHJvcHMuc2hvd10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29uZmlndXJhdGlvbkxpc3QoKGxzdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBsc3QuZmlsdGVyKGl0ZW0gPT4gYWRkZWRJbmRpY2VzLmZpbmRJbmRleChpID0+IGkgPT0gaXRlbS5JRCkgPiAtMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc2VydmVyQ29uZmlndXJhdGlvbmxpc3QsIC4uLmZpbHRlcmVkXVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbc2VydmVyQ29uZmlndXJhdGlvbmxpc3RdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5zaG93KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHNldFN0YXRlKCd2aWV3JylcclxuICAgICAgICBzZXRBZGRlZEZpZWxkcyhbXSk7XHJcbiAgICAgICAgc2V0QWRkZWRJbmRpY2VzKFtdKTtcclxuICAgICAgICBcclxuICAgIH0sIFtwcm9wcy5zaG93XSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZSAhPSAnZWRpdCcpXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IH1cclxuXHJcbiAgICAgICAgJChcIi5jdXN0b20tZmlsZS1pbnB1dFwiKS5vbihcImNoYW5nZVwiLCAoZXZ0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpbGVOYW1lID0gKGV2dCBhcyBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikudGFyZ2V0LnZhbHVlLnNwbGl0KFwiXFxcXFwiKS5wb3AoKTtcclxuICAgICAgICAgICAgJChldnQudGFyZ2V0KS5zaWJsaW5ncyhcIi5jdXN0b20tZmlsZS1sYWJlbFwiKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpLmh0bWwoZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICByZWFkU2luZ2xlRmlsZSgoZXZ0IGFzIFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSwgZmlsZU5hbWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiAkKFwiLmN1c3RvbS1maWxlLWlucHV0XCIpLm9mZignY2hhbmdlJylcclxuICAgIH0sIFtzdGF0ZV0pXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbmxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5OYW1lID09IG5ld0NvbmZpZ3VyYXRpb24uTmFtZSkgPT0gLTEpXHJcbiAgICAgICAgICAgIHNldFVuaXF1ZUNvbmZpZ3VyYXRpb25LZXkodHJ1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZXRVbmlxdWVDb25maWd1cmF0aW9uS2V5KGZhbHNlKTtcclxuICAgIH0sIFtjb25maWd1cmF0aW9ubGlzdCwgbmV3Q29uZmlndXJhdGlvbl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVkaXRGaWVsZCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IGdldENoYW5nZVJlcXVlc3QoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ICE9IG51bGwpIGhhbmRsZS5hYm9ydCgpO31cclxuICAgIH0sIFtlZGl0RmllbGRdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhc2VDb25maWdzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSUJhc2VDb25maWc+PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLk1ldGVySUQgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0Jhc2VDb25maWc/cGFyZW50SUQ9JHtwcm9wcy5NZXRlcklEfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIHNldFNlcnZlckNvbmZpZ3VyYXRpb25MaXN0KGRhdGEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2hhbmdlUmVxdWVzdCgpOiBKUXVlcnkuanFYSFI8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHNldFNob3dEZWxldGVXYXJuaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93Tm9FZGl0Tm90aWNlKGZhbHNlKTtcclxuICAgICAgICBpZiAoZWRpdEZpZWxkID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC9BbGxvd0NoYW5nZS8ke2VkaXRGaWVsZC5mbGQuSUR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZWRpdEZpZWxkLm1vZGUgPT0gJ2RlbGV0ZScpIHtcclxuICAgICAgICAgICAgICAgIHNldFNob3dEZWxldGVXYXJuaW5nKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd05vRWRpdE5vdGljZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKCdlZGl0JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBlZGl0RmllbGQubW9kZSA9PSAnZWRpdCcpIHtcclxuICAgICAgICAgICAgICAgIHNldE5ld0VkaXRGaWVsZChlZGl0RmllbGQuZmxkKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWFkU2luZ2xlRmlsZShldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBmaWxlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChnZXRGaWxlRXh0ZW5zaW9uKGZpbGVOYW1lKSA9PSAnaW5pJylcclxuICAgICAgICAgICAgUGFyc2VJTkkoZXZ0LCAoZCkgPT4gTG9hZEJhc2VDb25maWdGaWxlKGZpbGVOYW1lLCBkKSk7XHJcbiAgICAgICAgaWYgKGdldEZpbGVFeHRlbnNpb24oZmlsZU5hbWUpID09ICdwYXInKVxyXG4gICAgICAgICAgICBQYXJzZVBBUihldnQsIChkKSA9PiBMb2FkQmFzZUNvbmZpZ0ZpbGUoZmlsZU5hbWUsIGQpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGZpbGVOYW1lID0gZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJycpO1xyXG4gICAgICAgIGxldCByZSA9IC8oPzpcXC4oW14uXSspKT8kLztcclxuICAgICAgICByZXR1cm4gcmUuZXhlYyhmaWxlTmFtZSlbMV07XHJcblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gTG9hZEJhc2VDb25maWdGaWxlKGZpbGU6IHN0cmluZywgRmllbGRzOiBBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkPikge1xyXG5cclxuICAgICAgICBzZXRGaWxlTmFtZShmaWxlKTtcclxuICAgICAgICBzZXRGaWxlRmllbGRzKEZpZWxkcy5tYXAoaXRlbSA9PiB7IGl0ZW0uQmFzZUNvbmZpZ0lkID0gLTE7IHJldHVybiBpdGVtIH0pKVxyXG4gICAgICAgIHNldFNlbGVjdGVkRmllbGRzKFtdKTtcclxuICAgICAgICBzZXRTdGF0ZSgndXBsb2FkJyk7XHJcbiAgICAgICAgc2V0U2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNhdmVDaGFuZ2UoKTogdm9pZHtcclxuICAgICAgICBpZiAoYWRkZWRGaWVsZHMuc29tZShpdGVtID0+IGl0ZW0ubGVuZ3RoID09IDApKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGFkZGVkSW5kaWNlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9CYXNlQ29uZmlnL0FkZGAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb25saXN0LmZpbmQoYyA9PiBjLklEID09IGl0ZW0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaWVsZHM6IGFkZGVkRmllbGRzW2luZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvcHMuc2V0U2hvdyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI1RvRG9cclxuICAgIGZ1bmN0aW9uIFJlbW92ZUZpZWxkKGl0ZW06IFBSQzAwMi5JQ29uZmlnRmllbGQsIGNvbmZpZ0lEOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0uQmFzZUNvbmZpZ0lkID4gLTEpIHtcclxuICAgICAgICAgICAgc2V0RWRpdEZpZWxkKHsgZmxkOiBpdGVtLCBtb2RlOiAnZGVsZXRlJyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gYWRkZWRJbmRpY2VzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT0gY29uZmlnSUQpO1xyXG4gICAgICAgIHNldEFkZGVkRmllbGRzKGZsZHMgPT4geyBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKGZsZHMpOyB1cGRhdGVkW2luZGV4XSA9IHVwZGF0ZWRbaW5kZXhdLmZpbHRlcihmID0+IGYuSUQgIT0gaXRlbS5JRCk7IHJldHVybiB1cGRhdGVkOyB9KVxyXG5cclxuICAgICAgICBzZXRDb25maWd1cmF0aW9uTGlzdCgobHN0KSA9PiBfLmNsb25lKGxzdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBsb2dpYyBhbmQgVUkgdG8gcmVtb3ZlIGJhc2UgQ29uZmlnc1xyXG4gICAgLy8gQWRkIGxvZ2ljIGFuZCBVSSB0byBhZGQgbmV3IEZpZWxkc1xyXG5cclxuICAgIGZ1bmN0aW9uIEFkZE5ldygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuZXdJRCA9IE1hdGgubWF4KC4uLmNvbmZpZ3VyYXRpb25saXN0Lm1hcChpdGVtID0+IGl0ZW0uSUQpKSArIDE7XHJcbiAgICAgICAgc2V0Q29uZmlndXJhdGlvbkxpc3QoKGxzdCkgPT4geyBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKGxzdCk7IHVwZGF0ZWQucHVzaCh7IC4uLm5ld0NvbmZpZ3VyYXRpb24sIElEOiBuZXdJRCB9KTsgcmV0dXJuIHVwZGF0ZWQ7IH0pXHJcbiAgICAgICAgc2V0QWRkZWRJbmRpY2VzKChsc3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBfLmNsb25lRGVlcChsc3QpOyB1cGRhdGVkLnB1c2gobmV3SUQpOyByZXR1cm4gdXBkYXRlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldE5ld0NvbmZpZ3VyYXRpb24oeyBJRDogLTEsIE1ldGVySWQ6IHByb3BzLk1ldGVySUQsIE5hbWU6ICdOZXcgQ29uZmlndXJhdGlvbicsIFBhdHRlcm46ICcqLmluaScgfSk7XHJcbiAgICAgICAgc2V0U3RhdGUoJ2VkaXQnKTtcclxuICAgICAgICBzZXRBZGRlZEZpZWxkcygobHN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gXy5jbG9uZURlZXAobHN0KTsgdXBkYXRlZC5wdXNoKFtdKTsgcmV0dXJuIHVwZGF0ZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBDb21wbGV0ZVVwbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRGaWVsZHMubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBuZXdJRCA9IE1hdGgubWF4KC4uLmNvbmZpZ3VyYXRpb25saXN0Lm1hcChpdGVtID0+IGl0ZW0uSUQpKSArIDE7XHJcbiAgICAgICAgbGV0IHVuaXFOYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGZpbGVJbmRleCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKChjb25maWd1cmF0aW9ubGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLk5hbWUgPT0gdW5pcU5hbWUpID4gLTEpKSB7XHJcbiAgICAgICAgICAgIGZpbGVJbmRleCA9IGZpbGVJbmRleCArIDE7XHJcbiAgICAgICAgICAgIHVuaXFOYW1lID0gZmlsZU5hbWUgKyAnICcgKyBmaWxlSW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgc2V0Q29uZmlndXJhdGlvbkxpc3QoKGxzdCkgPT4geyBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKGxzdCk7IHVwZGF0ZWQucHVzaCh7IE5hbWU6IHVuaXFOYW1lLCBNZXRlcklkOiBwcm9wcy5NZXRlcklELCBQYXR0ZXJuOiAnKiovJyArIGZpbGVOYW1lLCBJRDogbmV3SUQgfSk7IHJldHVybiB1cGRhdGVkOyB9KVxyXG4gICAgICAgIHNldEFkZGVkSW5kaWNlcygobHN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gXy5jbG9uZURlZXAobHN0KTsgdXBkYXRlZC5wdXNoKG5ld0lEKTsgcmV0dXJuIHVwZGF0ZWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRTdGF0ZSgnZWRpdCcpO1xyXG4gICAgICAgIHNldEFkZGVkRmllbGRzKChsc3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBfLmNsb25lRGVlcChsc3QpOyB1cGRhdGVkLnB1c2goc2VsZWN0ZWRGaWVsZHMpOyByZXR1cm4gdXBkYXRlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZpZWxkcyhpZDogbnVtYmVyLCBzZXRGaWVsZHM6IChmbGRzOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkW10pID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFkZGVkSW5kaWNlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09IGlkKVxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHNldEZpZWxkcyhhZGRlZEZpZWxkc1tpbmRleF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlkID09IC0xKVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0ZpZWxkLyR7aWR9L0NhdGVnb3J5LzFgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgc2V0RmllbGRzKGRhdGEpO1xyXG5cclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGhhbmRsZSAhPSBudWxsICYmIGhhbmRsZS5hYm9ydCAhPSBudWxsKSBoYW5kbGUuYWJvcnQoKTt9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRGVsZXRlRmllbGQoKSB7XHJcbiAgICAgICAgbGV0IGgxID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRmllbGQvRGVsZXRlYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShlZGl0RmllbGQuZmxkKSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGgxLnRoZW4oKGQpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0Jhc2VDb25maWc/cGFyZW50SUQ9JHtwcm9wcy5NZXRlcklEfWAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0U2VydmVyQ29uZmlndXJhdGlvbkxpc3QoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlRmllbGQoKSB7XHJcbiAgICAgICAgaWYgKG5ld0VkaXRGaWVsZC5JRCA9PSAtMSkge1xyXG4gICAgICAgICAgICAvL1RoaXMgaXMgYSBuZXcgZmllbGRcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFkZGVkSW5kaWNlcy5maW5kSW5kZXgoaSA9PiBpID09IG5ld0VkaXRGaWVsZC5CYXNlQ29uZmlnSWQpID4gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gYWRkZWRJbmRpY2VzLmZpbmRJbmRleChpID0+IGkgPT0gbmV3RWRpdEZpZWxkLkJhc2VDb25maWdJZCk7XHJcbiAgICAgICAgICAgIHNldEFkZGVkRmllbGRzKChsc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVkID0gXy5jbG9uZURlZXAobHN0KTtcclxuICAgICAgICAgICAgICAgIGxldCBmaW5kZXggPSB1cGRhdGVkW2luZGV4XS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLklEID09IG5ld0VkaXRGaWVsZC5JRCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkW2luZGV4XVtmaW5kZXhdID0gbmV3RWRpdEZpZWxkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNob3dFZGl0V2FybmluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBQYXRjaEZpZWxkKCkge1xyXG4gICAgICAgIHNldFN0YXRlKCdlZGl0Jyk7XHJcbiAgICAgICAgbGV0IGgxID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC9VcGRhdGVgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld0VkaXRGaWVsZCksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBoMS50aGVuKChkKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9CYXNlQ29uZmlnP3BhcmVudElEPSR7cHJvcHMuTWV0ZXJJRH1gLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQmFzZUNvbmZpZz4pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICBzZXRTZXJ2ZXJDb25maWd1cmF0aW9uTGlzdChkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdEZpZWxkQnRuKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCwgQ29uZmlnSWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChyZWNvcmQuQmFzZUNvbmZpZ0lkID4gLTEpIHtcclxuICAgICAgICAgICAgc2V0RWRpdEZpZWxkKHsgZmxkOiByZWNvcmQsIG1vZGU6ICdlZGl0JyB9KTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoJ2VkaXRGaWVsZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVkaXRGaWVsZCh7IGZsZDogeyAuLi5yZWNvcmQsIEJhc2VDb25maWdJZDogQ29uZmlnSWQgfSwgbW9kZTogJ2VkaXQnIH0pO1xyXG4gICAgICAgIHNldFN0YXRlKCdlZGl0RmllbGQnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3Q29uZmlnVmFsaWQgPSBuZXdDb25maWd1cmF0aW9uLk5hbWUgIT0gbnVsbCAmJiBuZXdDb25maWd1cmF0aW9uLk5hbWUubGVuZ3RoID4gMCAmJiBuZXdDb25maWd1cmF0aW9uLlBhdHRlcm4gIT0gbnVsbCAmJiBuZXdDb25maWd1cmF0aW9uLlBhdHRlcm4ubGVuZ3RoID4gMCAmJiB1bmlxdWVDb25naWZ1cmF0aW9uS2V5O1xyXG4gICAgY29uc3QgbmV3RmllbGRWYWxpZCA9IG5ld0VkaXRGaWVsZCAhPSBudWxsICYmIChuZXdFZGl0RmllbGQuTmFtZSAhPSBudWxsICYmIG5ld0VkaXRGaWVsZC5OYW1lLmxlbmd0aCA+IDApICYmIChuZXdFZGl0RmllbGQuTGFiZWwgIT0gbnVsbCAmJiBuZXdFZGl0RmllbGQuTGFiZWwubGVuZ3RoID4gMCkgJiZcclxuICAgICAgICAobmV3RWRpdEZpZWxkLlZhbHVlICE9IG51bGwgJiYgbmV3RWRpdEZpZWxkLlZhbHVlLmxlbmd0aCA+IDApICYmIChuZXdFZGl0RmllbGQuRmllbGRUeXBlICE9ICdudW1iZXInIHx8ICFpc05hTihwYXJzZUZsb2F0KG5ld0VkaXRGaWVsZC5WYWx1ZSkpKTtcclxuICAgIGNvbnN0IENvbmZpcm1EaXNhYmxlZCA9ICgoKHN0YXRlID09ICdlZGl0JyAmJiBhZGRlZEZpZWxkcy5zb21lKGl0ZW0gPT4gaXRlbS5sZW5ndGggPT0gMCkpIHx8IChzdGF0ZSA9PSAnbmV3JyAmJiAhbmV3Q29uZmlnVmFsaWQpIHx8XHJcbiAgICAgICAgKHN0YXRlID09ICd1cGxvYWQnICYmIHNlbGVjdGVkRmllbGRzLmxlbmd0aCA9PSAwKSB8fCAoc3RhdGUgPT0gJ2VkaXRGaWVsZCcgJiYgIW5ld0ZpZWxkVmFsaWQpKSA/ICcgZGlzYWJsZWQnIDogJycpIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNb2RhbCBUaXRsZT17J01ldGVyIEJhc2UgQ29uZmlndXJhdGlvbid9IFNob3c9e3Byb3BzLnNob3d9XHJcbiAgICAgICAgICAgICAgICBDYWxsQmFjaz17KGNvbmZpcm0sIGlzQnRuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0J0biAmJiBzdGF0ZSA9PSAndmlldycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNldFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0J0biAmJiAhY29uZmlybSAmJiBzdGF0ZSA9PSAndmlldycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNldFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNCdG4gJiYgc3RhdGUgIT0gJ3ZpZXcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93V2FybmluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCdG4gJiYgIWNvbmZpcm0gJiYgc3RhdGUgPT0gJ2VkaXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93V2FybmluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCdG4gJiYgIWNvbmZpcm0gJiYgc3RhdGUgIT0gJ2VkaXQnICYmIHN0YXRlICE9ICd2aWV3JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoJ2VkaXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0J0biAmJiBjb25maXJtICYmIHN0YXRlID09ICd1cGxvYWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV0ZVVwbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0J0biAmJiBjb25maXJtICYmIHN0YXRlID09ICd2aWV3JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoJ2VkaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCdG4gJiYgY29uZmlybSAmJiBzdGF0ZSA9PSAnbmV3JyAmJiBuZXdDb25maWdWYWxpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkTmV3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnRuICYmIGNvbmZpcm0gJiYgc3RhdGUgPT0gJ2VkaXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTYXZlQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnRuICYmIGNvbmZpcm0gJiYgc3RhdGUgPT0gJ2VkaXRGaWVsZCcgJiYgbmV3RmllbGRWYWxpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgU2l6ZT0neGxnJ1xyXG4gICAgICAgICAgICAgICAgQ29uZmlybVRvb2xUaXBDb250ZW50PSdDb25maWdDb25maXJtJ1xyXG4gICAgICAgICAgICAgICAgU2hvd1g9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBTaG93Q2FuY2VsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVRleHQ9e3N0YXRlID09ICdlZGl0J3x8c3RhdGU9PSdlZGl0RmllbGQnPyAnU2F2ZScgOiBzdGF0ZSA9PSAndmlldycgPydFZGl0JyA6ICdOZXh0J31cclxuICAgICAgICAgICAgICAgIENvbmZpcm1CdG5DbGFzcz17KHN0YXRlICE9ICd2aWV3JyA/ICdidG4tc3VjY2VzcycgOiAnYnRuLXByaW1hcnknKSArIENvbmZpcm1EaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIENhbmNlbEJ0bkNsYXNzPXtzdGF0ZSAhPSAndmlldycgPyB1bmRlZmluZWQgOiAnYnRuLXByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsVGV4dD17c3RhdGUgPT0gJ3ZpZXcnPyAnQ2xvc2UnIDogc3RhdGUgPT0gJ2VkaXQnPyAnQ2FuY2VsJyA6ICdCYWNrJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlID09ICdlZGl0JyB8fCBzdGF0ZSA9PSAndmlldycgPyA8QmFzZUNvbmZpZ1dpbmRvdyBjb25maWd1cmF0aW9uTGlzdD17Y29uZmlndXJhdGlvbmxpc3R9IGdldEZpZWxkTGlzdD17Z2V0RmllbGRzfSBPblJlbW92ZT17c3RhdGUgPT0gJ2VkaXQnID8gKGl0ZW0sIGlkKSA9PiBSZW1vdmVGaWVsZChpdGVtLCBpZCkgOiBudWxsfSBPbkVkaXQ9e3N0YXRlID09ICdlZGl0JyA/IChpdGVtLCBpZCkgPT4gZWRpdEZpZWxkQnRuKGl0ZW0saWQpIDogbnVsbH0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0YXRlID09ICdlZGl0JyA/IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1pbnB1dFwiIGFjY2VwdD1cIi5pbmksLnBhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1sYWJlbFwiPkNob29zZSBhIENvbmZpZ3VyYXRpb24gRmlsZSBpZiBhcHBsaWNhYmxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiB7IHNldFN0YXRlKCduZXcnKSB9fT4gQWRkIE5ldyBCYXNlIENvbmZpZ3VyYXRpb24gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGF0ZSA9PSAndXBsb2FkJyA/IDxGaWxlUGFyc2VXaW5kb3cgRmllbGRzPXtmaWxlRmllbGRzfSBzZXRTZWxlY3RlZEZpZWxkcz17c2V0U2VsZWN0ZWRGaWVsZHN9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGF0ZSA9PSAnbmV3JyA/IDxOZXdDb25maWdGaWVsZHMgUmVjb3JkPXtuZXdDb25maWd1cmF0aW9ufSBTZXRSZWNvcmQ9e3NldE5ld0NvbmZpZ3VyYXRpb259IFVuaXF1ZUtleT17dW5pcXVlQ29uZ2lmdXJhdGlvbktleX0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0YXRlID09ICdlZGl0RmllbGQnID8gPENvbmZpZ0ZpZWxkRWRpdCBGaWVsZD17bmV3RWRpdEZpZWxkfSBTZXR0ZXI9e3NldE5ld0VkaXRGaWVsZH0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8VG9vbFRpcCBTaG93PXtob3ZlciA9PSAnQ29uZmlybScgJiYgKChzdGF0ZSA9PSAnZWRpdCcgJiYgYWRkZWRGaWVsZHMuc29tZShpdGVtID0+IGl0ZW0ubGVuZ3RoID09IDApKSB8fCAoc3RhdGUgPT0gJ25ldycgJiYgIW5ld0NvbmZpZ1ZhbGlkKSB8fFxyXG4gICAgICAgICAgICAgICAgKHN0YXRlID09ICd1cGxvYWQnICYmIHNlbGVjdGVkRmllbGRzLmxlbmd0aCA9PSAwKSB8fCAoc3RhdGUgPT0gJ2VkaXRGaWVsZCcgJiYgIW5ld0ZpZWxkVmFsaWQpKVxyXG5cclxuICAgICAgICAgICAgfSBQb3NpdGlvbj17J3RvcCd9IFRhcmdldD17J0NvbmZpZ0NvbmZpcm0nfSBaaW5kZXg9ezk5OTl9PlxyXG4gICAgICAgICAgICAgICAge3N0YXRlID09ICduZXcnICYmIChuZXdDb25maWd1cmF0aW9uLk5hbWUgPT0gbnVsbCB8fCBuZXdDb25maWd1cmF0aW9uLk5hbWUubGVuZ3RoID09IDApID8gPHA+IDxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIGNvbG9yOiAnI2RjMzU0NScgfX0gY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPkEgTmFtZSBpcyByZXF1aXJlZC48L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGF0ZSA9PSAnbmV3JyAmJiAobmV3Q29uZmlndXJhdGlvbi5QYXR0ZXJuID09IG51bGwgfHwgbmV3Q29uZmlndXJhdGlvbi5QYXR0ZXJuLmxlbmd0aCA9PSAwKSA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5BIFBhdHRlcm4gaXMgcmVxdWlyZWQgKGUuZy4gKi5pbmkgb3IgKi5wYXIgZm9yIGFsbElOSSBvciBQQVIgRmlsZXMpLjwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0YXRlID09ICduZXcnICYmIChuZXdDb25maWd1cmF0aW9uLk5hbWUgIT0gbnVsbCAmJiB1bmlxdWVDb25naWZ1cmF0aW9uS2V5KSA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5LZXkgbmVlZHMgdG8gYmUgdW5pcXVlLjwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0YXRlID09ICdlZGl0JyAmJiAoYWRkZWRGaWVsZHMuc29tZShpdGVtID0+IGl0ZW0ubGVuZ3RoID09IDApKSA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5BdCBsZWFzdCAxIEZpZWxkIG5lZWRzIHRvIGJlIHNldCB1cCBpbiBDb25maWd1cmF0aW9uICd7Y29uZmlndXJhdGlvbmxpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT0gYWRkZWRJbmRpY2VzW2FkZGVkRmllbGRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubGVuZ3RoID09IDApXSkuTmFtZX0nLjwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0YXRlID09ICd1cGxvYWQnICYmIChzZWxlY3RlZEZpZWxkcy5sZW5ndGggPT0gMCkgPyA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+QXQgbGVhc3Qgb25lIEZpZWxkIG5lZWRzIHRvIGJlIHNlbGVjdGVkLjwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0YXRlID09ICdlZGl0RmllbGQnICYmIChuZXdFZGl0RmllbGQuTmFtZSA9PSBudWxsIHx8IG5ld0VkaXRGaWVsZC5OYW1lLmxlbmd0aCA9PSAwKSA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5BIEZpZWxkIEtleSBpcyByZXF1aXJlZC48L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGF0ZSA9PSAnZWRpdEZpZWxkJyAmJiAobmV3RWRpdEZpZWxkLkxhYmVsID09IG51bGwgfHwgbmV3RWRpdEZpZWxkLkxhYmVsLmxlbmd0aCA9PSAwKSA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5BIEZpZWxkIE5hbWUgaXMgcmVxdWlyZWQuPC9wPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUgPT0gJ2VkaXRGaWVsZCcgJiYgKG5ld0VkaXRGaWVsZC5WYWx1ZSA9PSBudWxsIHx8IG5ld0VkaXRGaWVsZC5WYWx1ZS5sZW5ndGggPT0gMCkgPyA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+QSBWYWx1ZSBpcyByZXF1aXJlZC48L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGF0ZSA9PSAnZWRpdEZpZWxkJyAmJiAobmV3RWRpdEZpZWxkLlZhbHVlICE9IG51bGwgJiYgKG5ld0VkaXRGaWVsZC5GaWVsZFR5cGUgPT0gJ251bWJlcicgJiYgaXNOYU4ocGFyc2VGbG9hdChuZXdFZGl0RmllbGQuVmFsdWUpKSkpID8gPHA+IDxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIGNvbG9yOiAnI2RjMzU0NScgfX0gY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPkEgVmFsdWUgZm9yIGEgTnVtYmVyIEZpZWxkIG5lZWRzIHRvIGJlIG51bWVyaWMuPC9wPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuXHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnQ2xvc2UgQ29uZmlndXJhdGlvbid9IENhbGxCYWNrPXsoY29uZmlybSkgPT4geyBzZXRTaG93V2FybmluZyhmYWxzZSk7IGlmIChjb25maXJtKSBwcm9wcy5zZXRTaG93KGZhbHNlKTsgfX0gU2hvdz17c2hvd1dhcm5pbmd9XHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlPXsnVGhpcyB3aWxsIGNsb3NlIHRoZSBDb25maWd1cmF0aW9uIGFuZCBhbGwgdW5zYXZlZCBjaGFuZ2VzIHdpbGwgYmUgbG9zdC4nfSAvPlxyXG4gICAgICAgICAgICA8V2FybmluZyBUaXRsZT17J1VuYWJsZSB0byBDaGFuZ2UgRmllbGQnfSBDYWxsQmFjaz17KGNvbmZpcm0pID0+IHsgc2V0U2hvd05vRWRpdE5vdGljZShmYWxzZSkgfX0gU2hvdz17c2hvd05vRWRpdE5vdGljZX1cclxuICAgICAgICAgICAgICAgIE1lc3NhZ2U9eydUaGlzIEZpZWxkIGNhbiBub3QgYmUgZWRpdGVkIG9yIGRlbGV0ZWQuIFRoZXJlIGFyZSB1bnJlc29sdmVkIENvbXBsaWFuY2UgaXNzdWVzIGFzc29jaWF0ZWQgd2l0aCBpdC4gUmVzb2x2ZSB0aGVzZSBpc3N1ZXMgYmVmb3JlIGNoYW5naW5nIHRoZSBDb25maWd1cmF0aW9uLid9IC8+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnUmVtb3ZlIFBSQzAwMiBjb21wbGlhbmNlIEZpZWxkJ30gQ2FsbEJhY2s9eyhjb25maXJtKSA9PiB7IGlmIChjb25maXJtICYmIGVkaXRGaWVsZCAhPSBudWxsICYmIGVkaXRGaWVsZC5tb2RlID09ICdkZWxldGUnKSBEZWxldGVGaWVsZCgpOyBzZXRTaG93RGVsZXRlV2FybmluZyhmYWxzZSkgfX0gU2hvdz17c2hvd0RlbGV0ZVdhcm5pbmd9XHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlPXsnVGhpcyB3aWxsIHBlcm1hbmVudGx5IGRlbGV0ZSB0aGlzIEZpZWxkLiBQbGVhc2UgY29uZmlybSB0aGF0IHRoaXMgaXMgZGVzaXJlZC4gVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUuJ30gLz5cclxuICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydFZGl0IFBSQzAwMiBjb21wbGlhbmNlIEZpZWxkJ30gQ2FsbEJhY2s9eyhjb25maXJtKSA9PiB7IGlmIChjb25maXJtICYmIG5ld0VkaXRGaWVsZCAhPSBudWxsICYmIGVkaXRGaWVsZC5tb2RlID09ICdlZGl0JykgUGF0Y2hGaWVsZCgpOyBzZXRTaG93RWRpdFdhcm5pbmcoZmFsc2UpIH19IFNob3c9e3Nob3dFZGl0V2FybmluZ31cclxuICAgICAgICAgICAgICAgIE1lc3NhZ2U9eydUaGlzIHdpbGwgcGVybWFuZW50bHkgY2hhbmdlIHRoaXMgRmllbGQuIFBsZWFzZSBjb25maXJtIHRoYXQgdGhpcyBpcyBkZXNpcmVkLiBUaGlzIGFjdGlvbiBjYW4gbm90IGJlIHVuZG9uZS4nfSAvPlxyXG4gICAgICAgICAgICA8TG9hZGluZ1NjcmVlbiBTaG93PXtzaG93TG9hZGluZ30gLz5cclxuICAgICAgICA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGVyQ29uZmlndXJhdGlvbldpbmRvdztcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNZXRlckRldGFpbC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMDQvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFdhcm5pbmcgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJ1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IE1hbnVhbEFjdGlvbiBmcm9tICcuLi9Db21tb24vTWFudWFsQWN0aW9uJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgTWV0ZXJJRDogbnVtYmVyLCBzdGF0ZUxpc3Q6IEFycmF5PFBSQzAwMi5JU3RhdHVzPiB9XHJcblxyXG5jb25zdCBNZXRlckRldGFpbCA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd1Jldmlld2VkLCBzZXRTaG93UmV2aWV3ZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW21ldGVyLCBzZXRNZXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSU1ldGVyPih1bmRlZmluZWQpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93UkFQLCBzZXRTaG93UkFQXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gICAgY29uc3QgW3Nob3dBZGRJc3N1ZSwgc2V0U2hvd0FkZElzc3VlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1ldGVyID0gZ2V0TWV0ZXIocHJvcHMuTWV0ZXJJRCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVNZXRlciAhPSBudWxsICYmIGhhbmRsZU1ldGVyLmFib3J0ICE9IG51bGwpIGhhbmRsZU1ldGVyLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcihpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JTWV0ZXI+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvT25lLyR7aWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBQUkMwMDIuSU1ldGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIHNldE1ldGVyKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICBsZXQgc3RhdCA9IChtZXRlciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBwcm9wcy5zdGF0ZUxpc3QuZmluZChzID0+IHMuSUQgPT0gbWV0ZXIuU3RhdHVzSUQpKTtcclxuICAgIGxldCBsYmxTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyMwMDAwMDAnIDogc3RhdC5Db2xvciksXHJcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnIzAwMDAwMCcgOiBzdGF0LlRleHRDb2xvciksXHJcbiAgICAgICAgaGVpZ2h0OiAnMjVweCdcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gQWN0aXZhdGVNZXRlcigpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvQWN0aXZhdGUvJHttZXRlci5JRH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGlzdG9yeS5nbygwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7bWV0ZXIgIT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4ubGJsU3R5bGUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV0ZXIgbm90IGluIENvbXBsaWFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAneHgtbGFyZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IChtZXRlci5UaW1lciA8IDMwID8gJyMyOGE3NDUnIDogKG1ldGVyLlRpbWVyIDwgNjAgPyAnI2ZmYzEwNycgOiAnI2RjMzU0NScgKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogKG1ldGVyLlRpbWVyIDwgMzAgPyAnI2ZmZmZmZicgOiAobWV0ZXIuVGltZXIgPCA2MCA/ICcjMjEyNTI5JyA6ICcjZmZmZmZmJykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhtZXRlci5TdGF0dXMgPT0gJ0luIENvbXBsaWFuY2UnID8gMCA6IG1ldGVyLlRpbWVyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2xibFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIHBhZGRpbmc6IDUgfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsobWV0ZXIgIT0gdW5kZWZpbmVkKSA/IFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21ldGVyLlJldmlld2VkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZElzc3VlKHRydWUpfSA+IEFkZCBDb21wbGlhbmNlIElzc3VlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UkFQKHRydWUpfSA+IFN1Ym1pdCBSZW1lZGlhbCBBY3Rpb24gUGxhbiA8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gTWV0ZXJJZD17cHJvcHMuTWV0ZXJJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ0NvbXBsaWFuY2UgSXNzdWUnKX0gc2hvdz17c2hvd0FkZElzc3VlfSBzZXRTaG93PXtzZXRTaG93QWRkSXNzdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hbnVhbEFjdGlvbiBNZXRlcklkPXtwcm9wcy5NZXRlcklEfSBzdGF0ZT17cHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLkRlc2NyaXB0aW9uID09PSAnUkFQIFN1Ym1pdHRlZCcpfSBzaG93PXtzaG93UkFQfSBzZXRTaG93PXtzZXRTaG93UkFQfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+IDogPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1Jldmlld2VkKHRydWUpfT4gTWV0ZXIgUmV2aWV3ZWQgZm9yIENvbXBsaWFuY2UgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydXYXJuaW5nJ30gTWVzc2FnZT17J1RoaXMgd2lsbCBhY3RpdmF0ZSB0aGUgTWlNRCBQUkMwMDIgbW9uaXRvcmluZyBmb3IgdGhpcyBtZXRlci4gUGxlYXNlIFJldmlldyB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIGJlZm9yZSBwcm9jZWVkaW5nJ30gQ2FsbEJhY2s9eyhyZXN1bHQpID0+IHsgaWYgKHJlc3VsdCkgQWN0aXZhdGVNZXRlcigpOyBzZXRTaG93UmV2aWV3ZWQoZmFsc2UpOyB9fSBTaG93PXtzaG93UmV2aWV3ZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz59ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGVyRGV0YWlsO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1ldGVyT3ZlcnZpZXdQYWdlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8yMi8yMDE5IC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IFJlY29yZExpc3QgZnJvbSAnLi9SZWNvcmRMaXN0JztcclxuaW1wb3J0IE1ldGVyRGV0YWlsIGZyb20gJy4vTWV0ZXJEZXRhaWwnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IHsgTG9hZGluZ0ljb24sIE1vZGFsLCBTZWFyY2gsIFNlYXJjaEJhciB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCB7IFRvb2xUaXAgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuaW1wb3J0IERvd2xvYWRGaWxlcyBmcm9tICcuL0Rvd2xvYWRGaWxlJztcclxuaW1wb3J0IE5ld01ldGVyV2l6emFyZCBmcm9tICcuLi9NZXRlcldpenphcmQvTmV3TWV0ZXJXaXp6YXJkJztcclxuaW1wb3J0IE1ldGVyQ29uZmlndXJhdGlvbldpbmRvdyBmcm9tICcuL01ldGVyQ29uZmlndXJhdGlvbic7XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuY29uc3Qgc3RhbmRhcmRTZWFyY2g6IFNlYXJjaC5JRmllbGQ8TWlNRC5NZXRlcj5bXSA9IFtcclxuICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTmFtZScsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ0Fzc2V0S2V5JywgbGFiZWw6ICdBc3NldCBLZXknLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdNYWtlJywgbGFiZWw6ICdNYWtlJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnU3RhdHVzJywgbGFiZWw6ICdDb21wbGlhbmNlIFN0YXR1cycsIHR5cGU6ICdlbnVtJywgZW51bTogW10gfVxyXG5dO1xyXG5cclxuY29uc3QgUFJDMDAyTWV0ZXJPdmVydmlld1BhZ2UgPSAocHJvcHM6IHsgUm9sZXM6IEFycmF5PE1pTUQuU2VjdXJpdHlSb2xlTmFtZT4sIE1ldGVySUQ6IG51bWJlciB9KSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbbWV0ZXJGaWx0ZXJzLCBzZXRNZXRlckZpbHRlcnNdID0gUmVhY3QudXNlU3RhdGU8U2VhcmNoLklGaWx0ZXI8UFJDMDAyLklNZXRlcj5bXT4oW10pO1xyXG4gICAgY29uc3QgW3N0YXR1c0xpc3QsIHNldFN0YXR1c0xpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklTdGF0dXM+PihbXSk7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRlcmFibGVMaXN0LCBzZXRGaWx0ZXJhYmxlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+Pj4oc3RhbmRhcmRTZWFyY2gpO1xyXG5cclxuICAgIGNvbnN0IFttZXRlclNvcnQsIHNldE1ldGVyU29ydF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBQUkMwMDIuSU1ldGVyPihcIlN0YXR1c1wiKTtcclxuICAgIGNvbnN0IFttZXRlckFzYywgc2V0TWV0ZXJBc2NdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW21ldGVyTGlzdCwgc2V0TWV0ZXJMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JTWV0ZXI+PihbXSlcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRNZXRlciwgc2V0U2VsZWN0ZWRNZXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSU1ldGVyPihudWxsKTtcclxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gUmVhY3QudXNlU3RhdGU8KCdOb25lJyB8ICdGaWxlcycgfCAnQmFzZUNvbmZpZycpPignTm9uZScpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93TmV3TWV0ZXJXaXphcmQsIHNldFNob3dOZXdNZXRlcldpemFyZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0Jhc2VDb25maWcsIHNldFNob3dCYXNlQ29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0ZpbGVzLCBzZXRTaG93RmlsZXNdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlYXJjaFN0YXRlLCBzZXRTZWFyY2hTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTwoJ0lkbGUnIHwgJ0xvYWRpbmcnfCAnRXJyb3InKT4oJ0lkbGUnKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVTdGF0dXNMaXN0ID0gZ2V0U3RhdHVzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVTdGF0dXNMaXN0LmFib3J0ICE9IG51bGwpIGhhbmRsZVN0YXR1c0xpc3QuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hTdGF0ZSgnTG9hZGluZycpO1xyXG4gICAgICAgIGxldCBoID0gZ2V0TWV0ZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGggIT0gbnVsbCAmJiBoLmFib3J0ICE9IG51bGwpIGguYWJvcnQoKTsgfVxyXG4gICAgfSwgW21ldGVyU29ydCwgbWV0ZXJBc2MsIG1ldGVyRmlsdGVyc10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gbWV0ZXJMaXN0LmZpbmRJbmRleChtID0+IG0uSUQgPT0gcHJvcHMuTWV0ZXJJRCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZE1ldGVyKG51bGwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRNZXRlcihtZXRlckxpc3RbaW5kZXhdKTtcclxuICAgIH0sIFtwcm9wcy5NZXRlcklELCBtZXRlckxpc3RdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBnZXRBZGRpdGlvbmFsRmllbGRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gbnVsbCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFkZGl0aW9uYWxGaWVsZHMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1pTUQuQWRkaXRpb25hbEZpZWxkPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0FkZGl0aW9uYWxGaWVsZC9QYXJlbnRUYWJsZS9NZXRlcmAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBDb252ZXJ0VHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnaW50ZWdlcicgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdkYXRldGltZScgfHwgdHlwZSA9PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbnVtJywgZW51bTogW3sgTGFiZWw6IHR5cGUsIFZhbHVlOiB0eXBlIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkOiBBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4pID0+IHtcclxuICAgICAgICAgICAgbGV0IG9yZGVyZWQgPSBfLm9yZGVyQnkoc3RhbmRhcmRTZWFyY2guY29uY2F0KGQubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogYFtBRiR7aXRlbS5FeHRlcm5hbERCICE9IHVuZGVmaW5lZCA/IFwiIFwiICsgaXRlbS5FeHRlcm5hbERCIDogJyd9XSAke2l0ZW0uRmllbGROYW1lfWAsIGtleTogaXRlbS5GaWVsZE5hbWUsIC4uLkNvbnZlcnRUeXBlKGl0ZW0uVHlwZSkgfSBhcyBTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+XHJcbiAgICAgICAgICAgICkpKSwgWydsYWJlbCddLCBbXCJhc2NcIl0pO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJhYmxlTGlzdChvcmRlcmVkKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklTdGF0dXM+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VTdGF0ZS9MaXN0YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSVN0YXR1cz4pID0+IHtcclxuICAgICAgICAgICAgc2V0U3RhdHVzTGlzdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRNZXRlcklEKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBoaXN0b3J5LnB1c2goJ2luZGV4LmNzaHRtbD9uYW1lPVBSQzAwMk92ZXJ2aWV3Jk1ldGVySUQ9JyArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JTWV0ZXI+PiB7XHJcbiAgICAgICAgY29uc3QgbmF0aXZlRmllbGRzID0gc3RhbmRhcmRTZWFyY2gubWFwKHMgPT4gcy5rZXkpO1xyXG5cclxuICAgICAgICBsZXQgc2VhcmNoZXMgPSBtZXRlckZpbHRlcnMubWFwKHMgPT4geyBpZiAobmF0aXZlRmllbGRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT0gcy5GaWVsZE5hbWUpID09IC0xKSByZXR1cm4geyAuLi5zLCBpc1Bpdm90Q29sdW1uOiB0cnVlIH07IGVsc2UgcmV0dXJuIHM7IH0pXHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZU1ldGVyL1NlYXJjaGFibGVMaXN0YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IFNlYXJjaGVzOiBzZWFyY2hlcywgT3JkZXJCeTogbWV0ZXJTb3J0LCBBc2NlbmRpbmc6IG1ldGVyQXNjIH0pLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSU1ldGVyPikgPT4ge1xyXG4gICAgICAgICAgICBzZXRNZXRlckxpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFN0YXRlKCdJZGxlJylcclxuICAgICAgICB9KTtcclxuICAgICAgICBoYW5kbGUuZmFpbCgoZCkgPT4geyBzZXRTZWFyY2hTdGF0ZSgnRXJyb3InKTsgfSlcclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPFNlYXJjaEJhcjxQUkMwMDIuSU1ldGVyPiBTZXRGaWx0ZXI9e3NldE1ldGVyRmlsdGVyc30gQ29sbHVtbkxpc3Q9e2ZpbHRlcmFibGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdENvbGx1bW49e3sga2V5OiAnTmFtZScsIGxhYmVsOiAnTmFtZScsIHR5cGU6ICdzdHJpbmcnIH19XHJcbiAgICAgICAgICAgICAgICBEaXJlY3Rpb249eydsZWZ0J30gTGFiZWw9eydTZWFyY2gnfSBXaWR0aD17JzUwJSd9XHJcbiAgICAgICAgICAgICAgICBHZXRFbnVtPXsoc2V0T3B0aW9ucywgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQua2V5ID09ICdTdGF0dXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wdGlvbnMoc3RhdHVzTGlzdC5tYXAoaXRlbSA9PiAoeyBMYWJlbDogaXRlbS5EZXNjcmlwdGlvbiwgVmFsdWU6IGl0ZW0uRGVzY3JpcHRpb24gfSkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSAhPSAnZW51bScgfHwgZmllbGQuZW51bSA9PSB1bmRlZmluZWQgfHwgZmllbGQuZW51bS5sZW5ndGggIT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvVmFsdWVMaXN0L0dyb3VwLyR7ZmllbGQuZW51bVswXS5WYWx1ZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5kb25lKGQgPT4gc2V0T3B0aW9ucyhkLm1hcChpdGVtID0+ICh7IFZhbHVlOiBpdGVtLlZhbHVlLnRvU3RyaW5nKCksIExhYmVsOiBpdGVtLlRleHQgfSkpKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ID09IG51bGwpIGhhbmRsZS5hYm9ydCgpOyB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvL1Jlc3VsdD17c2VhcmNoU3RhdGUgPT0gJ0xvYWRpbmcnID8gPExvYWRpbmdJY29uIFNob3c9e3RydWV9IC8+IDogc2VhcmNoU3RhdGUgPT0gJ0Vycm9yJz8gJ0NvdWxkIG5vdCBjb21wbGV0ZSBTZWFyY2gnIDonRm91bmQgJyArIG1ldGVyTGlzdC5sZW5ndGggKyAnIE1ldGVycyd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZ1JpZ2h0OiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiYm9yZGVyXCIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJ3LWF1dG9cIiBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fT5BY3Rpb25zOjwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmV3TWV0ZXJXaXphcmQodHJ1ZSl9PiBBZGQgTmV3IE1ldGVyIHRvIFBSQzAwMiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiArIChzZWxlY3RlZE1ldGVyID09IG51bGwgPyAnIGRpc2FibGVkJyA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPXsnQmFzZUNvbmZpZyd9IG9uQ2xpY2s9eygpID0+IHNldFNob3dCYXNlQ29uZmlnKHNlbGVjdGVkTWV0ZXIgIT0gbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlcignQmFzZUNvbmZpZycpfSBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlcignTm9uZScpfT4gTWV0ZXIgQ29uZmlndXJhdGlvbiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiICsgKHNlbGVjdGVkTWV0ZXIgPT0gbnVsbCA/ICcgZGlzYWJsZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXIoJ0ZpbGVzJyl9IG9uTW91c2VPdXQ9eygpID0+IHNldEhvdmVyKCdOb25lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9vbHRpcD17J0ZpbGVzJ30gb25DbGljaz17KCkgPT4gc2V0U2hvd0ZpbGVzKHNlbGVjdGVkTWV0ZXIgIT0gbnVsbCl9ID4gRG93bmxvYWQgRmlsZXMgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoQmFyPlxyXG4gICAgICAgICAgICA8VG9vbFRpcCBQb3NpdGlvbj17J2JvdHRvbSd9IFNob3c9e2hvdmVyPT0nRmlsZXMnICYmIHNlbGVjdGVkTWV0ZXIgPT0gbnVsbCB9IFRhcmdldD17J0ZpbGVzJ30+XHJcbiAgICAgICAgICAgICAgICA8cD4gQSBNZXRlciBuZWVkcyB0byBiZSBzZWxlY3RlZC48L3A+XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgPFRvb2xUaXAgUG9zaXRpb249eydib3R0b20nfSBTaG93PXtob3ZlciA9PSAnQmFzZUNvbmZpZycgJiYgc2VsZWN0ZWRNZXRlciA9PSBudWxsfSBUYXJnZXQ9eydCYXNlQ29uZmlnJ30+XHJcbiAgICAgICAgICAgICAgICA8cD4gQSBNZXRlciBuZWVkcyB0byBiZSBzZWxlY3RlZC48L3A+XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgPE1ldGVyQ29uZmlndXJhdGlvbldpbmRvdyBNZXRlcklEPXtwcm9wcy5NZXRlcklEfSBzZXRTaG93PXtzZXRTaG93QmFzZUNvbmZpZ30gc2hvdz17c2hvd0Jhc2VDb25maWd9IC8+XHJcbiAgICAgICAgICAgIDxNb2RhbCBUaXRsZT17J0Rvd25sb2FkIEN1cnJlbnQgQ29uZmlnIEZpbGUnfSBTaG93PXtzaG93RmlsZXN9IENhbGxCYWNrPXsoY29uZmlybSkgPT4geyBzZXRTaG93RmlsZXMoZmFsc2UpOyB9fSBTaXplPSdzbScgU2hvd1g9e3RydWV9IFNob3dDYW5jZWw9e2ZhbHNlfSBDb25maXJtVGV4dD0nQ2xvc2UnPlxyXG4gICAgICAgICAgICAgICAgPERvd2xvYWRGaWxlcyBNZXRlcklkPXtwcm9wcy5NZXRlcklEfSAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8TmV3TWV0ZXJXaXp6YXJkIHNob3c9e3Nob3dOZXdNZXRlcldpemFyZH0gc2V0U2hvdz17c2V0U2hvd05ld01ldGVyV2l6YXJkfSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAwLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnY2FsYyggMTAwJSAtIDEzNnB4KScsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxQUkMwMDIuSU1ldGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTWV0ZXInLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01ha2UnLCBsYWJlbDogJ01ha2UnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnU3RhdHVzJywgbGFiZWw6ICdTdGF0dXMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0ID0gc3RhdHVzTGlzdC5maW5kKHMgPT4gcy5JRCA9PT0gaXRlbS5TdGF0dXNJRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjZjhmOWZhJyA6IHN0YXQuQ29sb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnIzIxMjUyOScgOiBzdGF0LlRleHRDb2xvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4ge2l0ZW0uU3RhdHVzfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlU3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e21ldGVyTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17bWV0ZXJTb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXttZXRlckFzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gbWV0ZXJTb3J0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlckFzYyghbWV0ZXJBc2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlclNvcnQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlckFzYyhkLmNvbCAhPSAnU3RhdHVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7IHNldE1ldGVySUQoZC5yb3cuSUQpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA4MHB4KScsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT09IHByb3BzLk1ldGVySUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIGhlaWdodDogJzIwMHB4JywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0ZXJEZXRhaWwgTWV0ZXJJRD17KGlzTmFOKHByb3BzLk1ldGVySUQpID8gLTEgOiBwcm9wcy5NZXRlcklEKX0gc3RhdGVMaXN0PXtzdGF0dXNMaXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVjb3JkTGlzdCBNZXRlcklkPXsoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgPyAtMSA6IHByb3BzLk1ldGVySUQpfSBTdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBSQzAwMk1ldGVyT3ZlcnZpZXdQYWdlO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1ldGVyQ2hhbmdlUGFuLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8wNC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBNZXRlcklkOiBudW1iZXIsIFN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+IH1cclxuXHJcbmNvbnN0IFJlY29yZExpc3QgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbY2hhbmdlTGlzdCwgc2V0Q2hhbmdlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSVJlY29yZD4+KFtdKTtcclxuICAgIGNvbnN0IFtyZWNvcmRTb3J0LCBzZXRSZWNvcmRTb3J0XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJTdGF0dXNcIik7XHJcbiAgICBjb25zdCBbcmVjb3JkQXNjLCBzZXRSZWNvcmRBc2NdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVJlY29yZExpc3QgPSBnZXRSZWNvcmRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVSZWNvcmRMaXN0ICE9IG51bGwgJiYgaGFuZGxlUmVjb3JkTGlzdC5hYm9ydCAhPSBudWxsKSBoYW5kbGVSZWNvcmRMaXN0LmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySWRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRSZWNvcmRzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSVJlY29yZD4+IHtcclxuICAgICAgICBpZiAocHJvcHMuTWV0ZXJJZCA9PSAtMSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlUmVjb3JkLyR7cHJvcHMuTWV0ZXJJZH0vJHtyZWNvcmRTb3J0fS8ke3JlY29yZEFzYz8gMSA6IDB9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSVJlY29yZD4pID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hhbmdlTGlzdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7KHByb3BzLk1ldGVySWQgPiAtMSA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdjYWxjKCAxMDAlIC0gMzM2cHgpJywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdTdGF0dXMnLCBsYWJlbDogJ1N0YXR1cycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXQgPSBwcm9wcy5TdGF0ZUxpc3QuZmluZChzID0+IHMuSUQgPT09IGl0ZW0uU3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyNmOGY5ZmEnIDogc3RhdC5Db2xvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjMjEyNTI5JyA6IHN0YXQuVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiB7KHN0YXQgPT0gdW5kZWZpbmVkID8gJycgOiBzdGF0LkRlc2NyaXB0aW9uKX0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgbGFiZWw6ICdMYXN0IFVwZGF0ZWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IG1vbWVudChpdGVtLlRpbWVzdGFtcCkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1VzZXInLCBsYWJlbDogJyBCeScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhbmdlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17cmVjb3JkU29ydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17cmVjb3JkQXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSByZWNvcmRTb3J0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWNvcmRBc2MoIXJlY29yZEFzYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlY29yZFNvcnQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWNvcmRBc2MoZC5jb2wgPT0gJ1VzZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goJ2luZGV4LmNzaHRtbD9uYW1lPVBSQzAwMkNoYW5nZSZSZWNvcmRJRD0nICsgZC5yb3cuSUQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRMaXN0O1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEJhc2VDb25maWdXaW5kb3cudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzA4LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RcclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IHsgUGFyc2VJTkksIFBhcnNlUEFSIH0gZnJvbSAnLi9GaWxlUGFyc2VyJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnXHJcbmltcG9ydCBGaWxlUGFyc2VXaW5kb3cgZnJvbSAnLi9GaWxlUGFyc2VXaW5kb3cnO1xyXG5pbXBvcnQgQ29uZmlnRmllbGRFZGl0IGZyb20gJy4vQ29uZmlndXJhdGlvbmZpZWxkRWRpdCc7XHJcbmltcG9ydCBOZXdDb25maWdGaWVsZHMgZnJvbSAnLi4vQ29tbW9uL05ld0NvbmZpZ0ZpZWxkcyc7XHJcbmltcG9ydCBCYXNlQ29uZmlnV2luZG93IGZyb20gJy4uL0NvbW1vbi9CYXNlQ29uZmlnV2luZG93JztcclxuXHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgc2V0RXJyb3I6IChlcnJvcjogc3RyaW5nW10pID0+IHZvaWQsXHJcbiAgICBCYXNlQ29uZmlnczogTWFwPG51bWJlciwgW1BSQzAwMi5JQmFzZUNvbmZpZywgUFJDMDAyLklDb25maWdGaWVsZFtdXT4sXHJcbiAgICBzZXRCYXNlQ29uZmlnOihiYzogTWFwPG51bWJlciwgW1BSQzAwMi5JQmFzZUNvbmZpZywgUFJDMDAyLklDb25maWdGaWVsZFtdXT4pID0+IHZvaWQsXHJcbiAgICBzZXRTdGVwOiAoc3RlcDogc3RhdGUpID0+IHZvaWQsXHJcbiAgICBjb250OiBudW1iZXIsXHJcbiAgICByZXNldDogbnVtYmVyXHJcbiAgICBzdGVwOiBzdGF0ZSxcclxuICAgIHNldExvYWRpbmc6IChiOiBib29sZWFuKSA9PiB2b2lkLFxyXG59XHJcblxyXG50eXBlIHN0YXRlID0gJ01ldGVyJyB8ICdCYXNlQ29uZmlnJyB8ICdGaWxlIExvYWQnIHwgJ0VkaXQgRmllbGQnIHwgJ05ldyBCYXNlQ29uZmlnJ1xyXG5cclxuY29uc3QgQ29uZmlndXJhdGlvbldpemFyZCA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbmV3Q29uZmlnLCBzZXROZXdDb25maWddID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklCYXNlQ29uZmlnPih7IElEOiAtMSwgTWV0ZXJJZDogLTEsIE5hbWU6ICdBbGwgSU5JIEZpbGVzJywgUGF0dGVybjogJyouaW5pJyB9KVxyXG4gICAgY29uc3QgW2VkaXRGaWVsZCwgc2V0RWRpdEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQ29uZmlnRmllbGQ+KHsgSUQ6IC0xLCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6ICdGaWVsZCcsIFZhbHVlOiAnJywgQ2F0ZWdvcnk6ICcnLCBMYWJlbDogJ0ZpZWxkJywgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgY29uc3QgW25ld0NvbmZpZ1VuaXEsIHNldE5ld0NvbmZpZ1VuaXFdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtmaWxlRmllbGRzLCBzZXRGaWxlRmllbGRzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+PihbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRGaWVsZHMsIHNldFNlbGVjdGVkRmllbGRzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+PihbXSk7XHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgIT0gJ0Jhc2VDb25maWcnKVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9XHJcblxyXG4gICAgICAgICQoXCIuY3VzdG9tLWZpbGUtaW5wdXRcIikub24oXCJjaGFuZ2VcIiwgKGV2dDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IChldnQgYXMgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pLnRhcmdldC52YWx1ZS5zcGxpdChcIlxcXFxcIikucG9wKCk7XHJcbiAgICAgICAgICAgICQoZXZ0LnRhcmdldCkuc2libGluZ3MoXCIuY3VzdG9tLWZpbGUtbGFiZWxcIikuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKS5odG1sKGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgcmVhZFNpbmdsZUZpbGUoKGV2dCBhcyBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiksIGZpbGVOYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gJChcIi5jdXN0b20tZmlsZS1pbnB1dFwiKS5vZmYoJ2NoYW5nZScpXHJcblxyXG4gICAgfSwgW3Byb3BzLnN0ZXBdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBlcnJvciA9IFtdO1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHByb3BzLkJhc2VDb25maWdzLnNpemUgPT0gMClcclxuICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0F0IGxlYXN0IDEgQmFzZSBDb25maWd1cmF0aW9uIG5lZWRzIHRvIGJlIHNldCB1cC4nKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuQmFzZUNvbmZpZ3Muc2l6ZSA+IDApXHJcbiAgICAgICAgICAgICAgICBbLi4ucHJvcHMuQmFzZUNvbmZpZ3Mua2V5cygpXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5CYXNlQ29uZmlncy5nZXQoaXRlbSlbMV0ubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0F0IGxlYXN0IDEgRmllbGQgbmVlZHMgdG8gYmUgc2V0IHVwIGluIENvbmZpZ3VyYXRpb24gXFwnJyArIChwcm9wcy5CYXNlQ29uZmlncy5nZXQoaXRlbSlbMF0uTmFtZSkgKyAnXFwnJylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdOZXcgQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgaWYgKG5ld0NvbmZpZy5OYW1lID09IG51bGwgfHwgbmV3Q29uZmlnLk5hbWUubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIE5hbWUgaXMgcmVxdWlyZWQuJylcclxuICAgICAgICAgICAgaWYgKG5ld0NvbmZpZy5QYXR0ZXJuID09IG51bGwgfHwgbmV3Q29uZmlnLlBhdHRlcm4ubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIFBhdHRlcm4gaXMgcmVxdWlyZWQgKGUuZy4gKi5pbmkgb3IgKi5wYXIgZm9yIGFsbElOSSBvciBQQVIgRmlsZXMpLicpXHJcbiAgICAgICAgICAgIGlmIChuZXdDb25maWcuTmFtZSAhPSBudWxsICYmICFuZXdDb25maWdVbmlxKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnS2V5IG5lZWRzIHRvIGJlIHVuaXF1ZS4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnRWRpdCBGaWVsZCcpIHtcclxuICAgICAgICAgICAgaWYgKGVkaXRGaWVsZC5OYW1lID09IG51bGwgfHwgZWRpdEZpZWxkLk5hbWUubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIEZpZWxkIEtleSBpcyByZXF1aXJlZC4nKVxyXG4gICAgICAgICAgICBpZiAoZWRpdEZpZWxkLkxhYmVsID09IG51bGwgfHwgZWRpdEZpZWxkLkxhYmVsLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnQSBGaWVsZCBOYW1lIGlzIHJlcXVpcmVkLicpXHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuVmFsdWUgPT0gbnVsbCB8fCBlZGl0RmllbGQuVmFsdWUubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIFZhbHVlIGlzIHJlcXVpcmVkLicpXHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuVmFsdWUgIT0gbnVsbCAmJiAoZWRpdEZpZWxkLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyAmJiBpc05hTihwYXJzZUZsb2F0KGVkaXRGaWVsZC5WYWx1ZSkpKSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0EgVmFsdWUgZm9yIGEgTnVtYmVyIEZpZWxkIG5lZWRzIHRvIGJlIG51bWVyaWMuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0ZpbGUgTG9hZCcpIHtcclxuICAgICAgICAgICAgaWYgKCEoc2VsZWN0ZWRGaWVsZHMubGVuZ3RoID4gMCkpXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBdCBsZWFzdCBvbmUgRmllbGQgbmVlZHMgdG8gYmUgc2VsZWN0ZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3BzLnNldEVycm9yKGVycm9yKVxyXG4gICAgfSwgW3Byb3BzLnN0ZXAsIHByb3BzLkJhc2VDb25maWdzLCBuZXdDb25maWcsIG5ld0NvbmZpZ1VuaXEsIGVkaXRGaWVsZCwgc2VsZWN0ZWRGaWVsZHNdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFsuLi5wcm9wcy5CYXNlQ29uZmlncy52YWx1ZXMoKV0ubWFwKGkgPT4gaVswXSkuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5OYW1lID09IG5ld0NvbmZpZy5OYW1lKSA9PSAtMSlcclxuICAgICAgICAgICAgc2V0TmV3Q29uZmlnVW5pcSh0cnVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZ1VuaXEoZmFsc2UpO1xyXG4gICAgfSwgW3Byb3BzLkJhc2VDb25maWdzLCBuZXdDb25maWddKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdOZXcgQmFzZUNvbmZpZycpXHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZyh7IElEOiAtMSwgTWV0ZXJJZDogLTEsIE5hbWU6ICdCYXNlIENvbmZpZyBOYW1lJywgUGF0dGVybjogJyouaW5pJyB9KTtcclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnRWRpdCBGaWVsZCcpXHJcbiAgICAgICAgICAgIHNldEVkaXRGaWVsZCh7XHJcbiAgICAgICAgICAgICAgICBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnLCBMYWJlbDogJ0ZpZWxkJywgQ2F0ZWdvcnk6ICcnLCBEZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnRmlsZSBMb2FkJykge1xyXG4gICAgICAgICAgICBzZXRGaWxlRmllbGRzKFtdKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGaWVsZHMoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0U3RlcCgnTWV0ZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdCYXNlQ29uZmlnJyk7XHJcbiAgICB9LCBbcHJvcHMucmVzZXRdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKHByb3BzLkJhc2VDb25maWdzKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gKHVwZGF0ZWQuc2l6ZSA+IDA/IE1hdGgubWF4KC4uLnVwZGF0ZWQua2V5cygpKSA6IDApKyAxO1xyXG4gICAgICAgICAgICB1cGRhdGVkLnNldChpZCwgW3sgLi4ubmV3Q29uZmlnLCBJRDogaWR9LFtdXSk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEJhc2VDb25maWcodXBkYXRlZCk7XHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZyh7IElEOiAtMSwgTWV0ZXJJZDogLTEsIE5hbWU6ICdCYXNlIENvbmZpZyBOYW1lJywgUGF0dGVybjogJyouaW5pJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0VkaXQgRmllbGQnICYmIGVkaXRGaWVsZC5JRCA9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKHByb3BzLkJhc2VDb25maWdzKTtcclxuICAgICAgICAgICAgbGV0IGNvbmcgPSB1cGRhdGVkLmdldChlZGl0RmllbGQuQmFzZUNvbmZpZ0lkKVxyXG4gICAgICAgICAgICBsZXQgaWQgPSAoY29uZ1sxXS5sZW5ndGggPiAwID8gTWF0aC5tYXgoLi4uY29uZ1sxXS5tYXAoaXRlbSA9PiBpdGVtLklEKSkgKyAxIDogMSk7XHJcbiAgICAgICAgICAgIGNvbmdbMV0gPSBbLi4uY29uZ1sxXSwgeyAuLi5lZGl0RmllbGQsIElEOiBpZCB9XTtcclxuICAgICAgICAgICAgdXBkYXRlZC5zZXQoZWRpdEZpZWxkLkJhc2VDb25maWdJZCwgY29uZyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9wcy5zZXRCYXNlQ29uZmlnKHVwZGF0ZWQpO1xyXG4gICAgICAgICAgICBzZXRFZGl0RmllbGQoeyBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnLCBMYWJlbDogJ0ZpZWxkJywgQ2F0ZWdvcnk6ICcnLCBEZXNjcmlwdGlvbjogJycgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0VkaXQgRmllbGQnICYmIGVkaXRGaWVsZC5JRCAhPSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKHByb3BzLkJhc2VDb25maWdzKTtcclxuICAgICAgICAgICAgbGV0IGNvbmcgPSB1cGRhdGVkLmdldChlZGl0RmllbGQuQmFzZUNvbmZpZ0lkKVxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBjb25nWzFdLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uSUQgPT0gZWRpdEZpZWxkLklEKVxyXG4gICAgICAgICAgICBjb25nWzFdW2luZGV4XSA9IGVkaXRGaWVsZDtcclxuICAgICAgICAgICAgdXBkYXRlZC5zZXQoZWRpdEZpZWxkLkJhc2VDb25maWdJZCwgY29uZyk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEJhc2VDb25maWcodXBkYXRlZCk7XHJcbiAgICAgICAgICAgIHNldEVkaXRGaWVsZCh7IElEOiAtMSwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiAnRmllbGQnLCBWYWx1ZTogJycsIExhYmVsOiAnRmllbGQnLCBDYXRlZ29yeTogJycsIERlc2NyaXB0aW9uOiAnJyB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnRmlsZSBMb2FkJykge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKHByb3BzLkJhc2VDb25maWdzKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gKHVwZGF0ZWQuc2l6ZSA+IDAgPyBNYXRoLm1heCguLi51cGRhdGVkLmtleXMoKSkgOiAwKSArIDE7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZHMgPSBzZWxlY3RlZEZpZWxkcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoeyBJRDogaW5kZXggKyAxLCAuLi5pdGVtIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1bmlxTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgICAgICBsZXQgZmlsZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKChbLi4ucHJvcHMuQmFzZUNvbmZpZ3MudmFsdWVzKCldLm1hcChpID0+IGlbMF0pLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uTmFtZSA9PSB1bmlxTmFtZSkgPiAtMSkpIHtcclxuICAgICAgICAgICAgICAgIGZpbGVJbmRleCA9IGZpbGVJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB1bmlxTmFtZSA9IGZpbGVOYW1lICsgJyAnICsgZmlsZUluZGV4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVkLnNldChpZCwgW3sgTmFtZTogdW5pcU5hbWUsIFBhdHRlcm46ICcqKi8nICsgZmlsZU5hbWUsIE1ldGVySWQ6IC0xLCBJRDogaWQgfSwgZmllbGRzXSk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEJhc2VDb25maWcodXBkYXRlZCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVGaWVsZHMoW10pO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZpZWxkcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgcHJvcHMuc2V0U3RlcCgnQmFzZUNvbmZpZycpO1xyXG4gICAgfSwgW3Byb3BzLmNvbnRdKVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZFNpbmdsZUZpbGUoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgZmlsZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHByb3BzLnNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGdldEZpbGVFeHRlbnNpb24oZmlsZU5hbWUpID09ICdpbmknKVxyXG4gICAgICAgICAgICBQYXJzZUlOSShldnQsIChkKSA9PiBMb2FkQmFzZUNvbmZpZ0ZpbGUoZmlsZU5hbWUsZCkpO1xyXG4gICAgICAgIGlmIChnZXRGaWxlRXh0ZW5zaW9uKGZpbGVOYW1lKSA9PSAncGFyJylcclxuICAgICAgICAgICAgUGFyc2VQQVIoZXZ0LCAoZCkgPT4gTG9hZEJhc2VDb25maWdGaWxlKGZpbGVOYW1lLCBkKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGZpbGVOYW1lID0gZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJycpO1xyXG4gICAgICAgIGxldCByZSA9IC8oPzpcXC4oW14uXSspKT8kLztcclxuICAgICAgICByZXR1cm4gcmUuZXhlYyhmaWxlTmFtZSlbMV07XHJcblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gTG9hZEJhc2VDb25maWdGaWxlKGZpbGU6IHN0cmluZywgRmllbGRzOiBBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkPikge1xyXG5cclxuICAgICAgICBzZXRGaWxlTmFtZShmaWxlKTtcclxuICAgICAgICBzZXRGaWxlRmllbGRzKEZpZWxkcy5tYXAoaXRlbSA9PiB7IGl0ZW0uQmFzZUNvbmZpZ0lkID0gLTE7IHJldHVybiBpdGVtIH0pKVxyXG4gICAgICAgIHByb3BzLnNldFN0ZXAoJ0ZpbGUgTG9hZCcpO1xyXG4gICAgICAgIHByb3BzLnNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRDb25maWdGaWVsZChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQsIGNvbmZpZ0lEOiBudW1iZXIpIHtcclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdFZGl0IEZpZWxkJyk7XHJcbiAgICAgICAgc2V0RWRpdEZpZWxkKHsgLi4ucmVjb3JkLCBCYXNlQ29uZmlnSWQ6IGNvbmZpZ0lEIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ29uZmlnRmllbGQoQ29uZmlnSUQ6IG51bWJlcikge1xyXG4gICAgICAgIHByb3BzLnNldFN0ZXAoJ0VkaXQgRmllbGQnKTtcclxuICAgICAgICBzZXRFZGl0RmllbGQoKGZsZCkgPT4gKHsgLi4uZmxkLCBCYXNlQ29uZmlnSWQ6IENvbmZpZ0lEIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZpZWxkcyhDb25maWdJRDogbnVtYmVyLCBTZXRGaWVsZHM6IChmbGRzOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkW10pID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAocHJvcHMuQmFzZUNvbmZpZ3MuaGFzKENvbmZpZ0lEKSlcclxuICAgICAgICAgICAgU2V0RmllbGRzKHByb3BzLkJhc2VDb25maWdzLmdldChDb25maWdJRClbMV0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7IH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdGVwID09ICdCYXNlQ29uZmlnJyA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QmFzZUNvbmZpZ1dpbmRvdyBjb25maWd1cmF0aW9uTGlzdD17Wy4uLnByb3BzLkJhc2VDb25maWdzLnZhbHVlcygpXS5tYXAoaXRlbSA9PiBpdGVtWzBdKX0gZ2V0RmllbGRMaXN0PXtnZXRGaWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgT25FZGl0PXsocmVjb3JkLCBjb25maWdJRCkgPT4gZWRpdENvbmZpZ0ZpZWxkKHJlY29yZCwgY29uZmlnSUQpfSBPbk5ldz17KGlkKSA9PiBhZGRDb25maWdGaWVsZChpZCl9IC8+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1pbnB1dFwiIGFjY2VwdD1cIi5pbmksLnBhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLWxhYmVsXCI+Q2hvb3NlIGEgQ29uZmlndXJhdGlvbiBGaWxlIGlmIGFwcGxpY2FibGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLnNldFN0ZXAoJ05ldyBCYXNlQ29uZmlnJykgfX0+IEFkZCBOZXcgQmFzZSBDb25maWd1cmF0aW9uIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdGVwID09ICdOZXcgQmFzZUNvbmZpZycgPyA8TmV3Q29uZmlnRmllbGRzIFJlY29yZD17bmV3Q29uZmlnfSBTZXRSZWNvcmQ9e3NldE5ld0NvbmZpZ30gVW5pcXVlS2V5PXtuZXdDb25maWdVbmlxfS8+OiBudWxsfVxyXG4gICAgICAgICAgICB7cHJvcHMuc3RlcCA9PSAnRWRpdCBGaWVsZCcgPyA8Q29uZmlnRmllbGRFZGl0IEZpZWxkPXtlZGl0RmllbGR9IFNldHRlcj17c2V0RWRpdEZpZWxkfSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdGVwID09ICdGaWxlIExvYWQnID8gPEZpbGVQYXJzZVdpbmRvdyBGaWVsZHM9e2ZpbGVGaWVsZHN9IHNldFNlbGVjdGVkRmllbGRzPXtzZXRTZWxlY3RlZEZpZWxkc30gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz4pXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbldpemFyZDtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb2ZpZ3VyYXRpb25GaWVsZEVkaXQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAzLzE1LzIwMjEgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RcclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IHsgSW5wdXQsIFNlbGVjdCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgTXVsdGlJbnB1dEZpZWxkIGZyb20gJy4vTXVsdGlJbnB1dEZpZWxkJztcclxuaW1wb3J0IHsgVG9vbFRpcCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcbmNvbnN0IENvbmZpZ0ZpZWxkRWRpdCA9IChwcm9wczogeyBGaWVsZDogUFJDMDAyLklDb25maWdGaWVsZCwgU2V0dGVyOiAocmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFtob3Zlciwgc2V0aG92ZXJdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IEZpZWxkVHlwZU9wdGlvbnMgPSBbeyBWYWx1ZTogJ3N0cmluZycsIExhYmVsOiAnVGV4dCcgfSwgeyBWYWx1ZTogJ251bWJlcicsIExhYmVsOiAnTnVtYmVyJyB9XTtcclxuICAgIGNvbnN0IE51bWJlckNoZWNrcyA9IFt7IFZhbHVlOiAnPScsIExhYmVsOiAnPScgfSwgeyBWYWx1ZTogJzw+JywgTGFiZWw6ICc8PicgfSwgeyBWYWx1ZTogJz4nLCBMYWJlbDogJz4nIH0sIHsgVmFsdWU6ICc8JywgTGFiZWw6ICc8JyB9XTtcclxuICAgIGNvbnN0IFRleHRDaGVja3MgPSBbeyBWYWx1ZTogJz0nLCBMYWJlbDogJz0nIH0sIHsgVmFsdWU6ICc8PicsIExhYmVsOiAnPD4nIH0sIHsgVmFsdWU6ICdJTicsIExhYmVsOiAnSW4nIH1dO1xyXG5cclxuICAgIGNvbnN0IGhhc0Rlc2MgPSBwcm9wcy5GaWVsZC5EZXNjcmlwdGlvbiAhPSB1bmRlZmluZWQgJiYgcHJvcHMuRmllbGQuRGVzY3JpcHRpb24ubGVuZ3RoID4gMDtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gVmFsaWRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHByb3BzLkZpZWxkLlZhbHVlICE9IG51bGwgJiYgcHJvcHMuRmllbGQuVmFsdWUubGVuZ3RoID4gMCAmJiAocHJvcHMuRmllbGQuRmllbGRUeXBlICE9ICdudW1iZXInIHx8ICFpc05hTihwYXJzZUZsb2F0KHByb3BzLkZpZWxkLlZhbHVlKSkpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxTZWxlY3Q8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydGaWVsZFR5cGUnfSBPcHRpb25zPXtGaWVsZFR5cGVPcHRpb25zfSBMYWJlbD17J0ZpZWxkIFR5cGUnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlY29yZC5GaWVsZFR5cGUgIT09IHByb3BzLkZpZWxkLkZpZWxkVHlwZSAmJiByZWNvcmQuQ29tcGFyaXNvbiAhPSAnPD4nICYmIHJlY29yZC5Db21wYXJpc29uICE9ICc9JylcclxuICAgICAgICAgICAgICAgIHJlY29yZC5Db21wYXJpc29uID0gJz0nO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjb3JkKTtcclxuICAgICAgICB9fSAvPlxyXG4gICAgICAgIDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e3Byb3BzLkZpZWxkfSBGaWVsZD17J0NhdGVnb3J5J30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IFZhbGlkPXsoKSA9PiB0cnVlfSBMYWJlbD17J0NhdGVnb3J5J30gLz5cclxuICAgICAgICA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydMYWJlbCd9IFNldHRlcj17KHJlY29yZCkgPT4geyBwcm9wcy5TZXR0ZXIocmVjb3JkKSB9fSBWYWxpZD17KCkgPT4gcHJvcHMuRmllbGQuTGFiZWwgIT0gbnVsbCAmJiBwcm9wcy5GaWVsZC5MYWJlbC5sZW5ndGggPiAwfSBMYWJlbD17J0ZpZWxkIE5hbWUnfSAvPlxyXG4gICAgICAgIDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e3Byb3BzLkZpZWxkfSBGaWVsZD17J05hbWUnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgcHJvcHMuU2V0dGVyKHJlY29yZCkgfX0gVmFsaWQ9eygpID0+IHByb3BzLkZpZWxkLk5hbWUgIT0gbnVsbCAmJiBwcm9wcy5GaWVsZC5OYW1lLmxlbmd0aCA+IDB9IExhYmVsPXsnRmllbGQgS2V5J30gLz5cclxuICAgICAgICA8U2VsZWN0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnQ29tcGFyaXNvbid9IE9wdGlvbnM9eyhwcm9wcy5GaWVsZC5GaWVsZFR5cGUgPT0gJ251bWJlcicgPyBOdW1iZXJDaGVja3MgOiBUZXh0Q2hlY2tzKX0gTGFiZWw9eydSdWxlJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IC8+XHJcbiAgICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9eygpID0+IHNldGhvdmVyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldGhvdmVyKGZhbHNlKX0gZGF0YS10b29sdGlwPXtcIkRlc2NyaXB0aW9uXCJ9PlxyXG4gICAgICAgIHsocHJvcHMuRmllbGQuQ29tcGFyaXNvbiA9PSAnSU4nID8gPE11bHRpSW5wdXRGaWVsZCBkYXRhPXtwcm9wcy5GaWVsZH0gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IC8+IDpcclxuICAgICAgICAgICAgPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnVmFsdWUnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgcHJvcHMuU2V0dGVyKHJlY29yZCkgfX0gVmFsaWQ9eygpID0+IFZhbGlkVmFsdWUoKX0gTGFiZWw9eydWYWx1ZSd9IEZlZWRiYWNrPXtwcm9wcy5GaWVsZC5GaWVsZFR5cGUgIT0gJ251bWJlcicgPyAnVmFsdWUgaXMgcmVxdWlyZWQuJyA6ICdWYWx1ZSBpcyByZXF1aXJlZCBhbmQgbmVlZHMgdG8gYmUgYSBudW1iZXIuJ30gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VG9vbFRpcCBTaG93PXtob3ZlciAmJiBoYXNEZXNjfSBQb3NpdGlvbj17J3RvcCd9IFRhcmdldD17J0Rlc2NyaXB0aW9uJ30+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy5GaWVsZC5EZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9Ub29sVGlwPlxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWdGaWVsZEVkaXQ7XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBGaWxlUGFyc2VXaW5kb3cudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAzLzE1LzIwMjEgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RcclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCB7IFNlbGVjdFRhYmxlIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSdcclxuaW1wb3J0IHsgVG9vbFRpcCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5pbXBvcnQgQ29uZmlnRmllbGRWYWx1ZVRhYmxlRmllbGQgZnJvbSAnLi4vQ29tbW9uL0NvbmZpZ0ZpZWxkVmFsdWVUYWJsZUZpZWxkJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBGaWVsZHM6IFBSQzAwMi5JQ29uZmlnRmllbGRbXSxcclxuICAgIHNldFNlbGVjdGVkRmllbGRzOiAoZDogUFJDMDAyLklDb25maWdGaWVsZFtdKSA9PiB2b2lkLFxyXG59XHJcblxyXG5cclxuY29uc3QgRmlsZVBhcnNlV2luZG93ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFthbGxGaWVsZHMsIHNldEFsbEZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZTxNYXA8c3RyaW5nLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW10+PihuZXcgTWFwPHN0cmluZywgUFJDMDAyLklDb25maWdGaWVsZFtdPigpKVxyXG4gICAgY29uc3QgW3NlbGVjdGVkRmllbGRzLCBzZXRTZWxlY3RlZEZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZTxNYXA8c3RyaW5nLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW10+PihuZXcgTWFwPHN0cmluZywgUFJDMDAyLklDb25maWdGaWVsZFtdPigpKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW10+KCk7XHJcblxyXG4gICAgICAgIHByb3BzLkZpZWxkcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFwLmhhcyhpdGVtLkNhdGVnb3J5KSlcclxuICAgICAgICAgICAgICAgIG1hcC5nZXQoaXRlbS5DYXRlZ29yeSkucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgbWFwLnNldChpdGVtLkNhdGVnb3J5LCBbaXRlbV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0QWxsRmllbGRzKG1hcCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRGaWVsZHMobmV3IE1hcDxzdHJpbmcsIFBSQzAwMi5JQ29uZmlnRmllbGRbXT4oKSlcclxuICAgIH0sIFtwcm9wcy5GaWVsZHNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBsc3QgPSBbXS5jb25jYXQoLi4uWy4uLnNlbGVjdGVkRmllbGRzLmtleXMoKV0ubWFwKGl0ZW0gPT4gc2VsZWN0ZWRGaWVsZHMuZ2V0KGl0ZW0pKSk7XHJcbiAgICAgICAgcHJvcHMuc2V0U2VsZWN0ZWRGaWVsZHMobHN0KTtcclxuICAgIH0sIFtzZWxlY3RlZEZpZWxkc10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvblwiIHN0eWxlPXt7IG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCBvdmVyZmxvd1k6ICdzY3JvbGwnfX0+XHJcbiAgICAgICAgICAgICAgICB7Wy4uLmFsbEZpZWxkcy5rZXlzKCldLm1hcCgoa2V5LCBpbmRleCkgPT4gPEhlYWRlclNlY3Rpb24gVGl0bGU9e2tleX0ga2V5PXtpbmRleH0gZmllbGRzPXthbGxGaWVsZHMuZ2V0KGtleSl9IHNldEZpZWxkcz17KGZsZHM6IFBSQzAwMi5JQ29uZmlnRmllbGRbXSkgPT4geyBzZXRTZWxlY3RlZEZpZWxkcygob2xkKSA9PiB7IGxldCB1cGRhdGVkID0gXy5jbG9uZURlZXAob2xkKTsgdXBkYXRlZC5zZXQoa2V5LCBmbGRzKTsgcmV0dXJuIHVwZGF0ZWQ7IH0pIH19IC8+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPilcclxufVxyXG5cclxuY29uc3QgSGVhZGVyU2VjdGlvbiA9IChwcm9wczogeyBUaXRsZTogc3RyaW5nLCBmaWVsZHM6IFBSQzAwMi5JQ29uZmlnRmllbGRbXSwgc2V0RmllbGRzOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxQUkMwMDIuSUNvbmZpZ0ZpZWxkW10+PiB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0QWxsLCBzZXRTZWxlY3RBbGxdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFthbGxTZWxlY3RlZCwgc2V0QWxsU2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1saW5rIGJ0bi1ibG9jayB0ZXh0LWxlZnQgY29sLTEwXCJ9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gdGV4dC1sZWZ0IGJ0bi1ibG9jIGNvbC0yIFwiICsgKGFsbFNlbGVjdGVkID8gXCJidG4tcHJpbWFyeVwiIDogXCJidG4tb3V0bGluZS1wcmltYXJ5XCIpfSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0QWxsKCh4KSA9PiB4ICsgMSl9PiB7YWxsU2VsZWN0ZWQgPyBcIkRlU2VsZWN0IEFsbFwiIDogXCJTZWxlY3QgQWxsXCJ9IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb2xsYXBzZVwiICsgKHNob3c/IFwiIHNob3dcIjogJycpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRhYmxlPFBSQzAwMi5JQ29uZmlnRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTGFiZWwnLCBsYWJlbDogJ0ZpZWxkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdjYWxjKDMwJSAtIDguMjVlbSknIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnY2FsYygzMCUgLSA4LjI1ZW0pJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydMYWJlbCd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRmllbGRUeXBlJywgbGFiZWw6ICdUeXBlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICc4ZW0nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnOGVtJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydGaWVsZFR5cGUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0NvbXBhcmlzb24nLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNWVtJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzVlbScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnQ29tcGFyaXNvbid9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdWYWx1ZScsIGxhYmVsOiAnVmFsdWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2NhbGMoNzAlIC0gOC4yNWVtKScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdjYWxjKDcwJSAtIDguMjVlbSknIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8Q29uZmlnRmllbGRWYWx1ZVRhYmxlRmllbGQgUmVjb3JkPXtpdGVtfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBLZXlGaWVsZD17J0lEJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9eydDYXRlZ29yeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsQ291bnRlcj17c2VsZWN0QWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbj17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmxlbmd0aCA9PSBwcm9wcy5maWVsZHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFsbFNlbGVjdGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFsbFNlbGVjdGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNldEZpZWxkcyhkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPilcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlUGFyc2VXaW5kb3c7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRmlsZVBhcnNlci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMDIvMjAyMSAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlSU5JKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGNvbXBsZXRlOiAoZGF0YTogUFJDMDAyLklDb25maWdGaWVsZFtdKSA9PiB2b2lkKSB7XHJcblxyXG4gICAgdmFyIGYgPSBldnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICAgIGlmIChmKSB7XHJcblxyXG4gICAgICAgIHZhciByID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50cyA9IGUudGFyZ2V0LnJlc3VsdCBhcyBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGluZXMgPSBjb250ZW50cy5zcGxpdCgvW1xcclxcbl0rL2cpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGxpbmVzLmZvckVhY2goKGxuLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsbi5pbmNsdWRlcygnPScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxuLmluY2x1ZGVzKCdbJykgJiYgbG4uaW5jbHVkZXMoJ10nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSBsbi5zdWJzdHIobG4uaW5kZXhPZignWycpICsgMSwgbG4ubGFzdEluZGV4T2YoJ10nKSAtIGxuLmluZGV4T2YoJ1snKSAtMSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBpID0gbG4uaW5kZXhPZignPScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLm1hcChpdGVtID0+IGl0ZW0ua2V5KS5pbmNsdWRlcyhsbi5zdWJzdHIoMCwgaSkpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IGtleTogbG4uc3Vic3RyKDAsIGkpICsgJy0nICsgaW5kZXgsIHZhbHVlOiBsbi5zdWJzdHIoaSArIDEpLCBjYXRlZ29yeSB9KVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IGtleTogbG4uc3Vic3RyKDAsIGkpLCB2YWx1ZTogbG4uc3Vic3RyKGkgKyAxKSwgY2F0ZWdvcnkgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICBjb21wbGV0ZShyZXN1bHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBJRDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBCYXNlQ29uZmlnSWQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgTmFtZTogaXRlbS5rZXksXHJcbiAgICAgICAgICAgICAgICBWYWx1ZTogaXRlbS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIENvbXBhcmlzb246ICc9JyxcclxuICAgICAgICAgICAgICAgIEZpZWxkVHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeTogaXRlbS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIExhYmVsOiBpdGVtLmtleSxcclxuICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIucmVhZEFzVGV4dChmKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJzZVBBUihldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBjb21wbGV0ZTogKGRhdGE6IFBSQzAwMi5JQ29uZmlnRmllbGRbXSkgPT4gdm9pZCkge1xyXG5cclxuICAgIHZhciBmID0gZXZ0LnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCByZXN1bHRzOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkW10gPSBbXTtcclxuXHJcbiAgICBpZiAoZikge1xyXG5cclxuICAgICAgICB2YXIgciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyaW1DaGFyID0gKHMsIGNoYXJUb1RyaW0pID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlZ0V4cEEgPSBuZXcgUmVnRXhwKGNoYXJUb1RyaW0gKyBcIiskXCIpO1xyXG4gICAgICAgICAgICBsZXQgcmVnRXhwQiA9IG5ldyBSZWdFeHAoXCJeXCIgKyBjaGFyVG9UcmltICsgXCIrXCIpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcy5yZXBsYWNlKHJlZ0V4cEEsIFwiXCIpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShyZWdFeHBCLCBcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHIub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnRzID0gZS50YXJnZXQucmVzdWx0IGFzIHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IGNvbnRlbnRzLnNwbGl0KC9bXFxyXFxuXSsvZyk7XHJcbiAgICAgICAgICAgIGxldCBuZXdJbmRleCA9IDE7XHJcblxyXG4gICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBsaW5lc1swXS5pbmRleE9mKCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gbGluZXNbMF0uc3Vic3RyaW5nKDAsIGkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBsaW5lc1swXS5zdWJzdHJpbmcoaSArIDEpLnRyaW0oKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJTdGF0aW9uXCIsIFZhbHVlOiB0cmltQ2hhcihkYXRhWzFdLCAnXCInKSwgTGFiZWw6IFwiU3RhdGlvblwiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIk5vbWluYWwgRnJlcXVlbmN5XCIsIFZhbHVlOiBkYXRhWzJdLCBMYWJlbDogXCJOb21pbmFsIEZyZXF1ZW5jeVwiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcwOiA1MEh6IDxicj4gMTogNTBIeicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiTnVtLiBEQyBDaGFubmVsc1wiLCBWYWx1ZTogZGF0YVszXSwgTGFiZWw6IFwiTnVtLiBEQyBDaGFubmVsc1wiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIk51bS4gQW5hbG9nIENoYW5uZWxzXCIsIFZhbHVlOiBkYXRhWzRdLCBMYWJlbDogXCJOdW0uIEFuYWxvZyBDaGFubmVsc1wiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIk51bS4gRXZlbnQgQ2hhbm5lbHNcIiwgVmFsdWU6IGRhdGFbNV0sIExhYmVsOiBcIk51bS4gRXZlbnQgQ2hhbm5lbHNcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJOdW0uIFRyaWdnZXJzXCIsIFZhbHVlOiBkYXRhWzZdLCBMYWJlbDogXCJOdW0uIFRyaWdnZXJzXCIsIENhdGVnb3J5OiBcIkhlYWRlclwiLCBEZXNjcmlwdGlvbjogJycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiU2h1bnQgVHlwZVwiLCBWYWx1ZTogZGF0YVs3XSwgTGFiZWw6IFwiU2h1bnQgVHlwZVwiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcwOiBFeHRlcm5hbCA8YnI+IDE6IEludGVybmFsJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIk92ZXJXcml0ZSBvbGQgUmVjb3Jkc1wiLCBWYWx1ZTogZGF0YVs4XSwgTGFiZWw6IFwiT3ZlcldyaXRlIG9sZCBSZWNvcmRzXCIsIENhdGVnb3J5OiBcIkhlYWRlclwiLCBEZXNjcmlwdGlvbjogJzA6IE5vIDxicj4gMTogWWVzJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJTRVIgQ2hhbm5lbHMgaW4gUEFSXCIsIFZhbHVlOiBkYXRhWzldLCBMYWJlbDogXCJTRVIgQ2hhbm5lbHMgaW4gUEFSXCIsIENhdGVnb3J5OiBcIkhlYWRlclwiLCBEZXNjcmlwdGlvbjogJyMgb2YgZXZlbnQgY2hhbm5lbHMgdGhhdCBhcmUgc2V0IHRvIHJlY29yZCB0byBTRVInIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJTRVIgQ0hhbm5lbHMgdGhhdCBjYXVzZSBERlIgU3RvcFwiLCBWYWx1ZTogZGF0YVsxMF0sIExhYmVsOiBcIlNFUiBDSGFubmVscyB0aGF0IGNhdXNlIERGUiBTdG9wXCIsIENhdGVnb3J5OiBcIkhlYWRlclwiLCBEZXNjcmlwdGlvbjogJycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlNFUiBBdXRvU3RvcCBpZiAgI1RyaWdnZXJzID5cIiwgVmFsdWU6IGRhdGFbMTFdLCBMYWJlbDogXCJTRVIgQXV0b1N0b3AgaWYgICNUcmlnZ2VycyA+XCIsIENhdGVnb3J5OiBcIkhlYWRlclwiLCBEZXNjcmlwdGlvbjogJycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlNFUiBBdXRvU3RvcCBUaW1lIFBlcmlvZFwiLCBWYWx1ZTogZGF0YVsxMl0sIExhYmVsOiBcIlNFUiBBdXRvU3RvcCBUaW1lIFBlcmlvZFwiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICdpbiBNaW51dGVzJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiU0VSIFJlc3RvcmUgUGVyaW9kXCIsIFZhbHVlOiBkYXRhWzEzXSwgTGFiZWw6IFwiU0VSIFJlc3RvcmUgUGVyaW9kXCIsIENhdGVnb3J5OiBcIkhlYWRlclwiLCBEZXNjcmlwdGlvbjogJ2luIE1pbnV0ZXMnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJEZWJvdW5jZSBUaW1lXCIsIFZhbHVlOiBkYXRhWzE0XSwgTGFiZWw6IFwiRGVib3VuY2UgVGltZVwiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJUcmFuc2llbnQgUHJlZmF1bHRcIiwgVmFsdWU6IGRhdGFbMTVdLCBMYWJlbDogXCJUcmFuc2llbnQgUHJlZmF1bHRcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDE2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiVHJhbnNpZW50IFBvc3RmYXVsdFwiLCBWYWx1ZTogZGF0YVsxNl0sIExhYmVsOiBcIlRyYW5zaWVudCBQb3N0ZmF1bHRcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDE3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiVHJhbnNpZW50IEZhdWx0IExpbWl0XCIsIFZhbHVlOiBkYXRhWzE3XSwgTGFiZWw6IFwiVHJhbnNpZW50IEZhdWx0IExpbWl0XCIsIENhdGVnb3J5OiBcIkhlYWRlclwiLCBEZXNjcmlwdGlvbjogJycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlRyYW5zaWVudCBTYW1wbGluZyBGcmVxdWVuY3lcIiwgVmFsdWU6IGRhdGFbMThdLCBMYWJlbDogXCJUcmFuc2llbnQgU2FtcGxpbmcgRnJlcXVlbmN5XCIsIENhdGVnb3J5OiBcIkhlYWRlclwiLCBEZXNjcmlwdGlvbjogJyd9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDE5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiRXh0ZW5kZWQgUHJlZmF1bHRcIiwgVmFsdWU6IGRhdGFbMTldLCBMYWJlbDogXCJFeHRlbmRlZCBQcmVmYXVsdFwiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJFeHRlbmRlZCBQb3N0IEZhdWx0XCIsIFZhbHVlOiBkYXRhWzIwXSwgTGFiZWw6IFwiRXh0ZW5kZWQgUG9zdCBGYXVsdFwiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcnICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiRXh0ZW5kZWQgRmF1bHRcIiwgVmFsdWU6IGRhdGFbMjFdLCBMYWJlbDogXCJFeHRlbmRlZCBGYXVsdFwiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJFeHRlbmRlZCBTYW1wbGluZyBGcmVxdWVuY3lcIiwgVmFsdWU6IGRhdGFbMjJdLCBMYWJlbDogXCJFeHRlbmRlZCBTYW1wbGluZyBGcmVxdWVuY3lcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiRXh0ZW5kZWQgUk1TIEN5Y2xlcy9Qb2ludFwiLCBWYWx1ZTogZGF0YVsyM10sIExhYmVsOiBcIkV4dGVuZGVkIFJNUyBDeWNsZXMvUG9pbnRcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDI0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiQ29udGludW91cyBSZWNvcmRpbmcgU2FtcGxlcy9Qb2ludCBGcmVxLVJNUy1QaGFzZVwiLCBWYWx1ZTogZGF0YVsyNF0sIExhYmVsOiBcIkNvbnRpbnVvdXMgUmVjb3JkaW5nIFNhbXBsZXMvUG9pbnQgRnJlcS1STVMtUGhhc2VcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDI1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiQ29udGludW91cyBSZWNvcmRpbmcgU3RvcmFnZSBMZW5ndGggKERheXMpXCIsIFZhbHVlOiBkYXRhWzI1XSwgTGFiZWw6IFwiQ29udGludW91cyBSZWNvcmRpbmcgU3RvcmFnZSBMZW5ndGhcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnaW4gRGF5cycgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJDb250aW5vdXMgT3NjaWxsb2dyYXBoeSBTdG9yYWdlIExlbmd0aCAoRGF5cylcIiwgVmFsdWU6IGRhdGFbMjZdLCBMYWJlbDogXCJDb250aW5vdXMgT3NjaWxsb2dyYXBoeSBTdG9yYWdlIExlbmd0aFwiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICdpbiBEYXlzJyAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlRyaWdnZXIgQ2hhbm5lbHMgLSBBdXRvIFN0b3AgSWYgIyBUcmlnZ2VycyA+XCIsIFZhbHVlOiBkYXRhWzI3XSwgTGFiZWw6IFwiVHJpZ2dlciBDaGFubmVscyAtIEF1dG8gU3RvcCBJZiAjIFRyaWdnZXJzID5cIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnJyAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlRyaWdnZXJzIENoYW5uZWxzIEF1dG8gU3RvcCBUaW1lIFBlcmlvZCAoTWludXRlcylcIiwgVmFsdWU6IGRhdGFbMjhdLCBMYWJlbDogXCJUcmlnZ2VycyBDaGFubmVscyBBdXRvIFN0b3AgVGltZSBQZXJpb2RcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnaW4gTWludXRlcycgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJUcmlnZ2VycyBDaGFubmVscyBBdXRvIFN0b3AgLSBSZXN0b3JlIEFmdGVyIChNaW5zKVwiLCBWYWx1ZTogZGF0YVsyOV0sIExhYmVsOiBcIlRyaWdnZXJzIENoYW5uZWxzIEF1dG8gU3RvcCAtIFJlc3RvcmUgQWZ0ZXJcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnaW4gTWludXRlcycgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMzApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJUcmlnZ2VycyBDaGFubmVsIEF1dG8gU3RvcCAtIEFwcGx5IHRvIERpc3R1cmJhbmNlIFRyaWdnZXJzIE9ubHkgKDA9bm8gMT15ZXMpXCIsIFZhbHVlOiBkYXRhWzMwXSwgTGFiZWw6IFwiVHJpZ2dlcnMgQ2hhbm5lbCBBdXRvIFN0b3BcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnIEFwcGx5IHRvIERpc3R1cmJhbmNlIFRyaWdnZXJzIE9ubHkgPGJyPiA8YnI+IDA6IE5vIDxicj4gMTogeWVzJyAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlRyYW5zaWVudCBSYXRlIE9zY2lsbG9ncmFwaHkgU3RvcmFnZSAoRGF5cylcIiwgVmFsdWU6IGRhdGFbMzFdLCBMYWJlbDogXCJUcmFuc2llbnQgUmF0ZSBPc2NpbGxvZ3JhcGh5IFN0b3JhZ2VcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnaW4gRGF5cycgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCIjIEZhdWx0cyBvbiBEaXNrXCIsIFZhbHVlOiBkYXRhWzMyXSwgTGFiZWw6IFwiIyBGYXVsdHMgb24gRGlza1wiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcnICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiTWFzdGVyIENoYXNzaXNcIiwgVmFsdWU6IGRhdGFbMzNdLCBMYWJlbDogXCJNYXN0ZXIgQ2hhc3Npc1wiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcwOiBEQzEgPGJyPiAxOiBEQzIgPGJyPiAuLi4uJyAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIkV4dGVuZGVkIFJNUyBJbmNsdWRlIFBoYXNlIEFuZ2xlXCIsIFZhbHVlOiBkYXRhWzM0XSwgTGFiZWw6IFwiRXh0ZW5kZWQgUk1TIEluY2x1ZGUgUGhhc2UgQW5nbGVcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnMDogTm8gPGJyPiAxOiBZZXMnICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDM1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiRVZOT01JU1MgKERvIE5vdCBSZXN0cmljdCBFdmVudCBPbmx5IFRyaWdnZXIpXCIsIFZhbHVlOiBkYXRhWzM1XSwgTGFiZWw6IFwiRVZOT01JU1MgKERvIE5vdCBSZXN0cmljdCBFdmVudCBPbmx5IFRyaWdnZXIpXCIsIENhdGVnb3J5OiBcIkhlYWRlclwiLCBEZXNjcmlwdGlvbjogJzA6IE5vIDxicj4gMTogWWVzJyAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIkNvbnRpbnVvdXMgUFEgRGF0YVwiLCBWYWx1ZTogZGF0YVszNl0sIExhYmVsOiBcIkNvbnRpbnVvdXMgUFEgRGF0YVwiLCBDYXRlZ29yeTogXCJIZWFkZXJcIiwgRGVzY3JpcHRpb246ICcwOiBObyA8YnI+IDE6IFllcycgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMzcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJDQkEgUGhhc2UgUm90YXRpb25cIiwgVmFsdWU6IGRhdGFbMzddLCBMYWJlbDogXCJDQkEgUGhhc2UgUm90YXRpb25cIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnMDogTm8gPGJyPiAxOiBZZXMnICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDM4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiIyBvZiBUVyBDaGFubmVsc1wiLCBWYWx1ZTogZGF0YVszOF0sIExhYmVsOiBcIiMgb2YgVFcgQ2hhbm5lbHNcIiwgQ2F0ZWdvcnk6IFwiSGVhZGVyXCIsIERlc2NyaXB0aW9uOiAnJyAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsaW5lcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGxpbmVzWzFdLmluZGV4T2YoJz0nKTtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSBsaW5lc1sxXS5zdWJzdHJpbmcoMCwgaSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGxpbmVzWzFdLnN1YnN0cmluZyhpICsgMSkudHJpbSgpLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlJtU2V0dXAgQ2hhc2lzIFBvcnRcIiwgVmFsdWU6IGRhdGFbMF0sIExhYmVsOiBcIkNoYXNpcyBQb3J0XCIsIENhdGVnb3J5OiAnUk1TZXR1cCcsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJSTVNldHVwIFRpbWUgc3luY1wiLCBWYWx1ZTogZGF0YVsxXSwgTGFiZWw6IFwiVGltZSBzeW5jXCIsIENhdGVnb3J5OiAnUk1TZXR1cCcsIERlc2NyaXB0aW9uOiAnMDogTW9kdWxhdGVkIDxicj4gMTogVW5tb2R1bGF0ZWQgPGJyPiAyOiBTTlRQJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNaXNzaW5nIGFsYXJtIE1hcHBpbmdcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJGYXVsdExFRCBPTiBEdXJhdGlvblwiLCBWYWx1ZTogZGF0YVszXSwgTGFiZWw6IFwiRmF1bHRMRUQgT04gRHVyYXRpb25cIiwgQ2F0ZWdvcnk6ICdSTVNldHVwJywgRGVzY3JpcHRpb246ICdpbiBzZWNvbmRzJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJEaXNrIEFsYXJtXCIsIFZhbHVlOiBkYXRhWzRdLCBMYWJlbDogXCJEaXNrIEFsYXJtXCIsIENhdGVnb3J5OiAnUk1TZXR1cCcsIERlc2NyaXB0aW9uOiAnaW4gTUInfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiRE5QMyBTbGF2ZVwiLCBWYWx1ZTogZGF0YVs1XSwgTGFiZWw6IFwiRE5QMyBTbGF2ZVwiLCBDYXRlZ29yeTogJ1JNU2V0dXAnLCBEZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJETlAzIE1hc3RlclwiLCBWYWx1ZTogZGF0YVs2XSwgTGFiZWw6IFwiRE5QMyBNYXN0ZXJcIiwgQ2F0ZWdvcnk6ICdSTVNldHVwJywgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlJlcG9ydCBBbGFybSBTdGF0ZXMgYXMgU0VSXCIsIFZhbHVlOiBkYXRhWzddLCBMYWJlbDogXCJSZXBvcnQgQWxhcm0gU3RhdGVzIGFzIFNFUlwiLCBDYXRlZ29yeTogJ1JNU2V0dXAnLCBEZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJEU1AgVGVtcGVyYXR1cmUgTGltXCIsIFZhbHVlOiBkYXRhWzhdLCBMYWJlbDogXCJEU1AgVGVtcGVyYXR1cmUgTGltXCIsIENhdGVnb3J5OiAnUk1TZXR1cCcsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJQTVVcIiwgVmFsdWU6IGRhdGFbOV0sIExhYmVsOiBcIlBNVVwiLCBDYXRlZ29yeTogJ1JNU2V0dXAnLCBEZXNjcmlwdGlvbjogJzA6IERpc2FibGVkIDxicj4gMTogRW5hYmxlZCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlN5bmMgbG9zcyBEZWxheVwiLCBWYWx1ZTogZGF0YVsxMF0sIExhYmVsOiBcIlN5bmMgbG9zcyBEZWxheVwiLCBDYXRlZ29yeTogJ1JNU2V0dXAnLCBEZXNjcmlwdGlvbjogJ2luIE1pbnV0ZXMnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCIjIEhvdXJzIERpZmZlcmVudCB0byBHUFNcIiwgVmFsdWU6IGRhdGFbMTFdLCBMYWJlbDogXCIjIEhvdXJzIERpZmZlcmVudCB0byBHUFNcIiwgQ2F0ZWdvcnk6ICdSTVNldHVwJywgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCIjSEQvU1NEIChQQy1IZWFsdGgpXCIsIFZhbHVlOiBkYXRhWzEyXSwgTGFiZWw6IFwiI0hEL1NTRCAoUEMtSGVhbHRoKVwiLCBDYXRlZ29yeTogJ1JNU2V0dXAnLCBEZXNjcmlwdGlvbjogJycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlRyYXZlbGluZyBXYXZlIElQIFBvcnRcIiwgVmFsdWU6IGRhdGFbMTNdLCBMYWJlbDogXCJUcmF2ZWxpbmcgV2F2ZSBJUCBQb3J0XCIsIENhdGVnb3J5OiAnUk1TZXR1cCcsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDE0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiQXV0byBEU1RcIiwgVmFsdWU6IGRhdGFbMTRdLCBMYWJlbDogXCJBdXRvIERTVFwiLCBDYXRlZ29yeTogJ1JNU2V0dXAnLCBEZXNjcmlwdGlvbjogJzA6IE5vIDxicj4gMTogWWVzJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaSA9IDJcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBsaW5lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCByID0gbGluZXNbaV0uaW5kZXhPZignPScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGxpbmVzW2ldLnN1YnN0cmluZygwLCByKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbGluZXNbaV0uc3Vic3RyaW5nKHIgKyAxKS50cmltKCkuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIGxldCBDYXRlZ29yeSA9IHJvdztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocm93LnN0YXJ0c1dpdGgoJ0MnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5ID0gXCJDaGFzaXMgXCIgKyBDYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgMVwiLCBWYWx1ZTogZGF0YVswXSwgQ2F0ZWdvcnksIExhYmVsOiAnU2xvdCAxJywgRGVzY3JpcHRpb246ICdBOiBBbmFsb2cgQ2FyZCA8YnI+IEU6IEV2ZW50IENhcmQgPGJyPiBWOiBWaXJ0dWFsIENhcmQgPGJyPiBYOiBObyBFbnRyeScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgMlwiLCBWYWx1ZTogZGF0YVsxXSwgQ2F0ZWdvcnksIExhYmVsOiAnU2xvdCAyJywgRGVzY3JpcHRpb246ICdBOiBBbmFsb2cgQ2FyZCA8YnI+IEU6IEV2ZW50IENhcmQgPGJyPiBWOiBWaXJ0dWFsIENhcmQgPGJyPiBYOiBObyBFbnRyeScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgM1wiLCBWYWx1ZTogZGF0YVsyXSwgQ2F0ZWdvcnksIExhYmVsOiAnU2xvdCAzJywgRGVzY3JpcHRpb246ICdBOiBBbmFsb2cgQ2FyZCA8YnI+IEU6IEV2ZW50IENhcmQgPGJyPiBWOiBWaXJ0dWFsIENhcmQgPGJyPiBYOiBObyBFbnRyeScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgNFwiLCBWYWx1ZTogZGF0YVszXSwgQ2F0ZWdvcnksIExhYmVsOiAnU2xvdCA0JywgRGVzY3JpcHRpb246ICdBOiBBbmFsb2cgQ2FyZCA8YnI+IEU6IEV2ZW50IENhcmQgPGJyPiBWOiBWaXJ0dWFsIENhcmQgPGJyPiBYOiBObyBFbnRyeScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgNVwiLCBWYWx1ZTogZGF0YVs0XSwgQ2F0ZWdvcnksIExhYmVsOiAnU2xvdCA1JywgRGVzY3JpcHRpb246ICdBOiBBbmFsb2cgQ2FyZCA8YnI+IEU6IEV2ZW50IENhcmQgPGJyPiBWOiBWaXJ0dWFsIENhcmQgPGJyPiBYOiBObyBFbnRyeScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgNlwiLCBWYWx1ZTogZGF0YVs1XSwgQ2F0ZWdvcnksIExhYmVsOiAnU2xvdCA2JywgRGVzY3JpcHRpb246ICdBOiBBbmFsb2cgQ2FyZCA8YnI+IEU6IEV2ZW50IENhcmQgPGJyPiBWOiBWaXJ0dWFsIENhcmQgPGJyPiBYOiBObyBFbnRyeScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgN1wiLCBWYWx1ZTogZGF0YVs2XSwgQ2F0ZWdvcnksIExhYmVsOiAnU2xvdCA3JywgRGVzY3JpcHRpb246ICdBOiBBbmFsb2cgQ2FyZCA8YnI+IEU6IEV2ZW50IENhcmQgPGJyPiBWOiBWaXJ0dWFsIENhcmQgPGJyPiBYOiBObyBFbnRyeScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgOFwiLCBWYWx1ZTogZGF0YVs3XSwgQ2F0ZWdvcnksIExhYmVsOiAnU2xvdCA4JywgRGVzY3JpcHRpb246ICdBOiBBbmFsb2cgQ2FyZCA8YnI+IEU6IEV2ZW50IENhcmQgPGJyPiBWOiBWaXJ0dWFsIENhcmQgPGJyPiBYOiBObyBFbnRyeScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgOVwiLCBWYWx1ZTogZGF0YVs4XSwgQ2F0ZWdvcnksIExhYmVsOiAnU2xvdCA5JywgRGVzY3JpcHRpb246ICdBOiBBbmFsb2cgQ2FyZCA8YnI+IEU6IEV2ZW50IENhcmQgPGJyPiBWOiBWaXJ0dWFsIENhcmQgPGJyPiBYOiBObyBFbnRyeScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgMTBcIiwgVmFsdWU6IGRhdGFbOV0sIENhdGVnb3J5LCBMYWJlbDogJ1Nsb3QgMTAnLCBEZXNjcmlwdGlvbjogJ0E6IEFuYWxvZyBDYXJkIDxicj4gRTogRXZlbnQgQ2FyZCA8YnI+IFY6IFZpcnR1YWwgQ2FyZCA8YnI+IFg6IE5vIEVudHJ5JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgMTFcIiwgVmFsdWU6IGRhdGFbMTBdLCBDYXRlZ29yeSwgTGFiZWw6ICdTbG90IDExJywgRGVzY3JpcHRpb246ICdBOiBBbmFsb2cgQ2FyZCA8YnI+IEU6IEV2ZW50IENhcmQgPGJyPiBWOiBWaXJ0dWFsIENhcmQgPGJyPiBYOiBObyBFbnRyeScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gRFNQIEFkZHJlc3NcIiwgVmFsdWU6IGRhdGFbMTFdLCBDYXRlZ29yeSwgTGFiZWw6ICdEU1AgQWRkcmVzcycsIERlc2NyaXB0aW9uOiAnJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gRVhUMSBQUFNcIiwgVmFsdWU6IGRhdGFbMTJdLCBDYXRlZ29yeSwgTGFiZWw6ICdFU1QxIFBQUycsIERlc2NyaXB0aW9uOiAnMDogTm8gPGJyPiAxOiBZZXMnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gSWdub3JlXCIsIFZhbHVlOiBkYXRhWzEzXSwgQ2F0ZWdvcnksIExhYmVsOiAnSWdub3JlJywgRGVzY3JpcHRpb246ICcwOiBObyA8YnI+IDE6IFllcycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocm93LnN0YXJ0c1dpdGgoJ0EnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5ID0gXCJBbmFsb2cgXCIgKyBDYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIE5hbWVcIiwgVmFsdWU6IHRyaW1DaGFyKGRhdGFbMF0sICdcIicpLCBDYXRlZ29yeSwgTGFiZWw6ICdOYW1lJywgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogcm93ICsgXCIgLSBUeXBlXCIsIFZhbHVlOiBkYXRhWzFdLCBDYXRlZ29yeSwgTGFiZWw6ICdUeXBlJywgRGVzY3JpcHRpb246ICcnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIFJhdGlvXCIsIFZhbHVlOiBkYXRhWzJdLCBDYXRlZ29yeSwgTGFiZWw6ICdSYXRpbycsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gRnVsbCBTY2FsZVwiLCBWYWx1ZTogZGF0YVszXSwgQ2F0ZWdvcnksIExhYmVsOiAnRnVsbCBTY2FsZScsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gRXh0L0ludCBzaHVudFwiLCBWYWx1ZTogZGF0YVs0XSwgQ2F0ZWdvcnksIExhYmVsOiAnRXh0L0ludCBzaHVudCcsIERlc2NyaXB0aW9uOiAnMDogRXh0ZXJuYWwgPGJyPiAxOiBJbnRlcm5hbCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIFBoYXNlXCIsIFZhbHVlOiBkYXRhWzVdLCBDYXRlZ29yeSwgTGFiZWw6ICdQaGFzZScsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gVmlydHVhbCBDaGFubmVsIEFzc2lnbm1lbnQgUDFcIiwgVmFsdWU6IGRhdGFbNl0sIENhdGVnb3J5LCBMYWJlbDogJ1ZpcnR1YWwgQ2hhbm5lbCBBc3NpZ25tZW50IFAxJywgRGVzY3JpcHRpb246ICctMTogV2lyZWQgPGJyPiAwKzogb2Zmc2V0IChlLmcuIDE3OiBBMTgpJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gVmlydHVhbCBDaGFubmVsIEFzc2lnbm1lbnQgUDJcIiwgVmFsdWU6IGRhdGFbN10sIENhdGVnb3J5LCBMYWJlbDogJ1ZpcnR1YWwgQ2hhbm5lbCBBc3NpZ25tZW50IFAyJywgRGVzY3JpcHRpb246ICctMTogV2lyZWQgPGJyPiAwKzogb2Zmc2V0IChlLmcuIDE3OiBBMTgpJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gVmlydHVhbCBDaGFubmVsIEFzc2lnbm1lbnQgUDNcIiwgVmFsdWU6IGRhdGFbOF0sIENhdGVnb3J5LCBMYWJlbDogJ1ZpcnR1YWwgQ2hhbm5lbCBBc3NpZ25tZW50IFAzJywgRGVzY3JpcHRpb246ICctMTogV2lyZWQgPGJyPiAwKzogb2Zmc2V0IChlLmcuIDE3OiBBMTgpJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdy5zdGFydHNXaXRoKCdUJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeSA9IFwiVHJpZ2dlciBcIiArIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogcm93ICsgXCIgLSBOYW1lXCIsIFZhbHVlOiB0cmltQ2hhcihkYXRhWzBdLCAnXCInKSwgQ2F0ZWdvcnksIExhYmVsOiBcIk5hbWVcIiwgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogcm93ICsgXCIgLSBBc3NpZ25lZCBBbmFsb2cgQ2hhbm5lbFwiLCBWYWx1ZTogZGF0YVsxXSwgQ2F0ZWdvcnksIExhYmVsOiBcIkFuYWxvZyBDaGFubmVsXCIsIERlc2NyaXB0aW9uOiAnMDogQTEgPGJyPiAxOiBhMiA8YnI+IC4uLicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIFRyaWdnZXIgVHlwZVwiLCBWYWx1ZTogZGF0YVsyXSwgQ2F0ZWdvcnksIExhYmVsOiBcIlR5cGVcIiwgRGVzY3JpcHRpb246ICcwOiBEaXNhYmxlZCA8YnI+IDE6IFJNUyA8YnI+IDI6IEh6IFN0ZXAgPGJyPiAzOiAwIFNlcXVlbmNlIDxicj4gNDogKyBTZXF1ZW5jZSA8YnI+IDU6IC0gU2VxdWVuY2UgPGJyPiA2OiBIRCA8YnI+IDc6IFRIRCA8YnI+IDg6IDFQLVcgPGJyPiA5OiAxUC1WciA8YnI+IDEwOiAxUC1QRiA8YnI+IDExOiAzUC1XIDxicj4gMTI6IDNQLVZyIDxicj4gMTM6IDNQLVBGIDxicj4gMTQ6IEltcHVsc2UgPGJyPiAxNTogVW5iYWxhbmNlIDxicj4gMTY6IEZsaWNrZXIgPGJyPiAxNzogSHogPGJyPiAxODogSHogU2lnbiA8YnI+IDE5OiBHZW4tVyA8YnI+IDIwOiBHZW4gVnIgPGJyPiAyMTogR2VuLVBGIDxicj4gMjI6IE1hZ25pdHVkZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIFRyaWdnZXIgQ29uZGl0aW9uXCIsIFZhbHVlOiBkYXRhWzNdLCBDYXRlZ29yeSwgTGFiZWw6IFwiQ29uZGl0aW9uXCIsIERlc2NyaXB0aW9uOiAnMDogT3ZlciA8YnI+IDE6IFVuZGVyIDxicj4gMjogQm90aCA8YnI+JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gRHVyYXRpb25cIiwgVmFsdWU6IGRhdGFbNF0sIENhdGVnb3J5LCBMYWJlbDogXCJEdXJhdGlvblwiLCBEZXNjcmlwdGlvbjogJycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIFRyaXAgaWYgT3ZlclwiLCBWYWx1ZTogZGF0YVs1XSwgQ2F0ZWdvcnksIExhYmVsOiBcIlRyaXAgb24gb3ZlclwiLCBEZXNjcmlwdGlvbjogJycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIFRyaXAgaWYgVW5kZXJcIiwgVmFsdWU6IGRhdGFbNl0sIENhdGVnb3J5LCBMYWJlbDogXCJUcmlwIG9uIHVuZGVyXCIsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gVHJpcCBpZiBSYXRlXCIsIFZhbHVlOiBkYXRhWzddLCBDYXRlZ29yeSwgTGFiZWw6IFwiVHJpcCBvbiByYXRlXCIsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gSHlzdGVyZXNpc1wiLCBWYWx1ZTogZGF0YVs4XSwgQ2F0ZWdvcnksIExhYmVsOiBcIkh5c3RlcmVzaXNcIiwgRGVzY3JpcHRpb246ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogcm93ICsgXCIgLSBQcmlvcml0eVwiLCBWYWx1ZTogZGF0YVs5XSwgQ2F0ZWdvcnksIExhYmVsOiBcIlByaW9yaXR5XCIsIERlc2NyaXB0aW9uOiAnMDogTm8gPGJyPiAxOiBZZXMnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIERpc3R1cmJhbmNlXCIsIFZhbHVlOiBkYXRhWzEzXSwgQ2F0ZWdvcnksIExhYmVsOiBcIkRpc3R1cmJhbmNlXCIsIERlc2NyaXB0aW9uOiAnMDogTm8gPGJyPiAxOiBZZXMnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gTWluaW11bSBSTVNcIiwgVmFsdWU6IGRhdGFbMTRdLCBDYXRlZ29yeSwgTGFiZWw6IFwiTWluIFJNU1wiLCBEZXNjcmlwdGlvbjogJ0ZvciBIWiBTdGVwLCBIYXJtb25pYyBhbmQgY2VydGFpbiBvdGhlciBUcmlnZ2VycyA8YnI+IFRyaWdnZXIgZGlzYWJsZWQgaWYgVmFsdWUgPCBNaW4gUk1TJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocm93LnN0YXJ0c1dpdGgoJ0UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5ID0gXCJFdmVudCBDaGFubmVsXCIgKyBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gTmFtZVwiLCBWYWx1ZTogdHJpbUNoYXIoZGF0YVswXSwgJ1wiJyksIENhdGVnb3J5LCBMYWJlbDogXCJOYW1lXCIsIERlc2NyaXB0aW9uOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gU3RhdGVcIiwgVmFsdWU6IGRhdGFbMV0sIENhdGVnb3J5LCBMYWJlbDogXCJTdGF0ZVwiLCBEZXNjcmlwdGlvbjogJ286IE9wZW4gPGJyPiBjOiBDbG9zZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIERGUiBTdGFydFwiLCBWYWx1ZTogZGF0YVsyXSwgQ2F0ZWdvcnksIExhYmVsOiBcIkRGUiBTdGFydFwiLCBEZXNjcmlwdGlvbjogJ2k6IElOaGliaXRlZCA8YnI+IHU6IFVwIDxicj4gZDogRG93biA8YnI+IGI6IEJvdGggPGJyPiBDYXBpdGFsIExldHRlcnMgaW5kaWNhdGUgUHJpb3JpdHkgVHJpZ2dlcicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIERGUi9TRVJcIiwgVmFsdWU6IGRhdGFbM10sIENhdGVnb3J5LCBMYWJlbDogXCJERlIvU0VSXCIsIERlc2NyaXB0aW9uOiAnQjogQm90aCA8YnI+IEQ6IERGUiA8YnI+IFM6IFNFUicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNFUiBSdW5cIiwgVmFsdWU6IGRhdGFbNF0sIENhdGVnb3J5LCBMYWJlbDogXCJTRVIgUnVuXCIsIERlc2NyaXB0aW9uOiAnUjogUnVuIDxicj4gUzogU3RvcCA8YnI+IEE6IEFsYXJtIDxicj4gQzogQ3Jvc3NUcmlnZ2VyJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbXBsZXRlKHJlc3VsdHMpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHIucmVhZEFzVGV4dChmKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE11bHRpSW5wdXRGaWVsZC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDMvMTUvMjAyMSAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZFxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG4gY29uc3QgTXVsdGlJbnB1dEZpZWxkID0gKHByb3BzOiB7IGRhdGE6IFBSQzAwMi5JQ29uZmlnRmllbGQsIFNldHRlcjogKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgW2xpc3RWYWx1ZXMsIHNldExpc3RWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8c3RyaW5nPj4oW10pO1xyXG5cclxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMaXN0VmFsdWVzKHByb3BzLmRhdGEuVmFsdWUuc3BsaXQoJzsnKSlcclxuICAgICAgICB9LCBbcHJvcHMuZGF0YV0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIFNldChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgbHN0ID0gXy5jbG9uZShsaXN0VmFsdWVzKTtcclxuICAgICAgICAgICAgbHN0W2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gQWRkTmV3KCkge1xyXG4gICAgICAgICAgICBsZXQgcmVjID0gXy5jbG9uZURlZXAocHJvcHMuZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgICAgICBsc3QucHVzaCgocHJvcHMuZGF0YS5GaWVsZFR5cGUgPT0gJ3N0cmluZycgPyAnVmFsdWUnIDogJzAnKSlcclxuICAgICAgICAgICAgcmVjLlZhbHVlID0gbHN0LmpvaW4oJzsnKTtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHJlYylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgcmVjID0gXy5jbG9uZURlZXAocHJvcHMuZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgICAgICBsc3Quc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtsaXN0VmFsdWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PSAwID8gPGxhYmVsPlZhbHVlczwvbGFiZWw+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7IFNldChpbmRleCwgZXZ0LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpIH19IHZhbHVlPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IEFkZE5ldygpfT4gQWRkIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11bHRpSW5wdXRGaWVsZDtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBOZXdNZXRlcldpenphcmQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE3LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vLyAgMDIvMDIvMjAyMSAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgVXBkYXRlZCBQQVIgUGFyc2VyIGFuZCBtb3ZlZCB0byBncGEtZ2Vtc3RvbmUgVUkuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IFNlbGVjdE1ldGVyIGZyb20gJy4vU2VsZWN0TWV0ZXInO1xyXG5pbXBvcnQgQmFzZUNvbmZpZ1dpbmRvdyBmcm9tICcuL0NvbmZpZ3VyYXRpb25XaXphcmQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2NyZWVuLCBNb2RhbCwgVG9vbFRpcCwgV2FybmluZyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgc2hvdzogYm9vbGVhbiwgc2V0U2hvdzogKHM6IGJvb2xlYW4pID0+IHZvaWR9XHJcbnR5cGUgc3RhdGUgPSAnTWV0ZXInfCdCYXNlQ29uZmlnJ3wnRmlsZSBMb2FkJ3wgJ0VkaXQgRmllbGQnIHwgJ05ldyBCYXNlQ29uZmlnJyBcclxuXHJcbmNvbnN0IE5ld01ldGVyV2l6emFyZCA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbbWV0ZXIsIHNldE1ldGVyXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JTWV0ZXI+KG51bGwpO1xyXG4gICAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gUmVhY3QudXNlU3RhdGU8c3RhdGU+KCdNZXRlcicpO1xyXG4gICAgY29uc3QgW3Nob3dXYXJuaW5nLCBzZXRTaG93V2FybmluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0NvbXBsZXRlLCBzZXRTaG93Q29tcGxldGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZTwnQ2FuY2VsJyB8ICdDb25maXJtJyB8ICdOb25lJz4oJ05vbmUnKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0xvYWRpbmcsIHNldFNob3dMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbYmFzZUNvbmZpZywgc2V0QmFzZUNvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxNYXA8bnVtYmVyLCBbUFJDMDAyLklCYXNlQ29uZmlnLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW11dPj4obmV3IE1hcDxudW1iZXIsIFtQUkMwMDIuSUJhc2VDb25maWcsIFBSQzAwMi5JQ29uZmlnRmllbGRbXV0+KCkpO1xyXG4gICAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG5cclxuICAgIGNvbnN0IFtyZXNldCwgc2V0UmVzZXRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtjb250LCBzZXRDb250XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFwcm9wcy5zaG93KVxyXG4gICAgICAgICAgICBDYW5jZWwoKTtcclxuICAgIH0sIFtwcm9wcy5zaG93XSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgZnVuY3Rpb24gQ2FuY2VsKCkge1xyXG4gICAgICAgIHNldFN0ZXAoJ01ldGVyJyk7XHJcbiAgICAgICAgc2V0TWV0ZXIodW5kZWZpbmVkKVxyXG4gICAgICAgIHNldEJhc2VDb25maWcobmV3IE1hcDxudW1iZXIsIFtQUkMwMDIuSUJhc2VDb25maWcsIFBSQzAwMi5JQ29uZmlnRmllbGRbXV0+KCkpO1xyXG4gICAgICAgIHNldEVycm9yTXNnKFtdKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE5leHRTdGVwKCkge1xyXG4gICAgICAgIGlmKCFzdGVwQ29tcGxldGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ01ldGVyJykge1xyXG4gICAgICAgICAgICBzZXRTdGVwKCdCYXNlQ29uZmlnJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RlcCA9PSAnTmV3IEJhc2VDb25maWcnKSB7XHJcbiAgICAgICAgICAgIHNldENvbnQoeD0+IHgrMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0ZpbGUgTG9hZCcpIHtcclxuICAgICAgICAgICAgc2V0Q29udCh4ID0+IHggKyAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RlcCA9PSAnQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgc2V0U2hvd0NvbXBsZXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0VkaXQgRmllbGQnKSB7XHJcbiAgICAgICAgICAgIHNldENvbnQoeCA9PiB4ICsgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFByZXZTdGVwKCkge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdNZXRlcicpXHJcbiAgICAgICAgICAgIHNldFNob3dXYXJuaW5nKHRydWUpO1xyXG4gICAgICAgIGlmIChzdGVwID09ICdCYXNlQ29uZmlnJylcclxuICAgICAgICAgICAgc2V0UmVzZXQoeD0+IHgrMSlcclxuICAgICAgICBpZiAoc3RlcCA9PSAnTmV3IEJhc2VDb25maWcnIHx8IHN0ZXAgPT0gJ0ZpbGUgTG9hZCcpIHtcclxuICAgICAgICAgICAgc2V0UmVzZXQoeCA9PiB4ICsgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0VkaXQgRmllbGQnKVxyXG4gICAgICAgICAgICBzZXRSZXNldCh4ID0+IHggKyAxKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdNZXRlcicpXHJcbiAgICAgICAgICAgIHJldHVybiAnU2VsZWN0IGEgTWV0ZXInXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0Jhc2VDb25maWcnKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJTZXR1cCBCYXNlIENvbmZpZ3VyYXRpb25cIlxyXG4gICAgICAgIGlmIChzdGVwID09ICdGaWxlIExvYWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0xvYWQgQ29uZmlndXJhdGlvbiBGaWxlJ1xyXG4gICAgICAgIGlmIChzdGVwID09ICdOZXcgQmFzZUNvbmZpZycpXHJcbiAgICAgICAgICAgIHJldHVybiAnQWRkIE5ldyBCYXNlIENvbmZpZ3VyYXRpb24nXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0VkaXQgRmllbGQnKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJFZGl0IENvbmZpZ3VyYXRpb24gRmllbGRcIlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gU3VibWl0KCkge1xyXG4gICAgICAgIC8vIFN0YXJ0IEJ5IENyZWF0aW5nIHRoZSBtZXRlclxyXG4gICAgICAgIGxldCBjb25maWdGaWVsZHMgPSBbXTtcclxuXHJcbiAgICAgICAgWy4uLmJhc2VDb25maWcua2V5cygpXS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGJhc2VDb25maWcuZ2V0KGtleSlbMV0uZm9yRWFjaChmbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnRmllbGRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIEJhc2VDb25maWdJZDoga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIENvbXBhcmlzb246IGZsZC5Db21wYXJpc29uLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkVHlwZTogZmxkLkZpZWxkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBOYW1lOiBmbGQuTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBWYWx1ZTogZmxkLlZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBmbGQuRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnk6IGZsZC5DYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBMYWJlbDogZmxkLkxhYmVsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvQWRkYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNZXRlcjogeyBNZXRlcklkOiBtZXRlci5JRCwgQWN0aXZlOiBmYWxzZSwgUmV2aWV3ZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgQmFzZUNvbmZpZ3VyYXRpb246IFsuLi5iYXNlQ29uZmlnLnZhbHVlcygpXS5tYXAoaXRlbSA9PiB7IHJldHVybiB7IE5hbWU6IGl0ZW1bMF0uTmFtZSwgUGF0dGVybjogaXRlbVswXS5QYXR0ZXJuLCBJRDogaXRlbVswXS5JRCB9OyB9KSxcclxuICAgICAgICAgICAgICAgICAgICBDb25maWd1cmF0aW9uRmllbGRzOiBjb25maWdGaWVsZHNcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkudGhlbigoZCkgPT4gaGlzdG9yeS5nbygwKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvcHMuc2V0U2hvdyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc3RlcENvbXBsZXRlID0gKHN0ZXAgPT0gJ01ldGVyJyA/IG1ldGVyICE9IG51bGwgOiBlcnJvck1zZy5sZW5ndGggPT0gMClcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsIFNob3c9e3Byb3BzLnNob3d9IENhbGxCYWNrPXsoY29uZmlybSwgaXNCdXR0b24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKVxyXG4gICAgICAgICAgICAgICAgICAgIE5leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dXYXJuaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maXJtICYmIGlzQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZTdGVwKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBUaXRsZT17Z2V0VGl0bGUoKX0gQ29uZmlybVRleHQ9eyhzdGVwID09ICdNZXRlcicgfHwgc3RlcCA9PSAnRmlsZSBMb2FkJyA/ICdOZXh0JyA6ICdTYXZlJyl9XHJcbiAgICAgICAgICAgICAgICAvL0NvbmZpcm1Ub29sVGlwQ29udGVudD0nV2l6YXJkQ29uZmlybSdcclxuICAgICAgICAgICAgICAgIFNpemU9J3hsZydcclxuICAgICAgICAgICAgICAgIC8vT25Ib3Zlcj17c2V0SG92ZXJ9XHJcbiAgICAgICAgICAgICAgICBDb25maXJtQnRuQ2xhc3M9eydidG4tc3VjY2VzcycgKyAoc3RlcENvbXBsZXRlID8gJycgOiAnIGRpc2FibGVkJyl9XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxUZXh0PXsoc3RlcCA9PSAnTWV0ZXInID8gJ0Nsb3NlJyA6ICdCYWNrJyl9XHJcbiAgICAgICAgICAgICAgICBTaG93WD17dHJ1ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT0gJ01ldGVyJyA/IDxTZWxlY3RNZXRlciBzZXRNZXRlcj17KG1ldGVyKSA9PiB7IHNldE1ldGVyKG1ldGVyKTsgfX0gc2VsZWN0ZWRNZXRlcj17bWV0ZXJ9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdCYXNlQ29uZmlnJyB8fCBzdGVwID09ICdOZXcgQmFzZUNvbmZpZycgfHwgc3RlcCA9PSAnRmlsZSBMb2FkJyB8fCBzdGVwID09ICdFZGl0IEZpZWxkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhc2VDb25maWdXaW5kb3cgc2V0TG9hZGluZz17c2V0U2hvd0xvYWRpbmd9IEJhc2VDb25maWdzPXtiYXNlQ29uZmlnfSBzZXRCYXNlQ29uZmlnPXtzZXRCYXNlQ29uZmlnfSBzZXRFcnJvcj17c2V0RXJyb3JNc2d9IHNldFN0ZXA9e3NldFN0ZXB9IHN0ZXA9e3N0ZXB9IGNvbnQ9e2NvbnR9IHJlc2V0PXtyZXNldH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8V2FybmluZyBUaXRsZT17J0V4aXQgV2l6YXJkJ30gQ2FsbEJhY2s9eyhjb25maXJtKSA9PiB7IHNldFNob3dXYXJuaW5nKGZhbHNlKTsgaWYgKGNvbmZpcm0pIHByb3BzLnNldFNob3coZmFsc2UpOyB9fSBTaG93PXtzaG93V2FybmluZ31cclxuICAgICAgICAgICAgICAgIE1lc3NhZ2U9eydUaGlzIFdpbGwgY2xvc2UgdGhlIFdpemFyZCBhbmQgYWxsIHByb2dyZXNzIHdpbGwgYmUgbG9zdC4nfSAvPlxyXG4gICAgICAgICAgICA8VG9vbFRpcCBTaG93PXtob3ZlciA9PSAnQ29uZmlybScgJiYgIXN0ZXBDb21wbGV0ZX0gUG9zaXRpb249eyd0b3AnfSBUYXJnZXQ9eydXaXphcmRDb25maXJtJ30gWmluZGV4PXs5OTk5fT5cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdNZXRlcicgPyA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+QSBNZXRlciBuZWVkcyB0byBiZSBzZWxlY3RlZC48L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGVwICE9ICdNZXRlcicgPyBlcnJvck1zZy5tYXAoKGl0ZW0saW5kZXgpID0+IDxwIGtleT17aW5kZXh9PjxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIGNvbG9yOiAnI2RjMzU0NScgfX0gY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPiB7aXRlbX08L3A+KSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydTYXZlIFBSQzAwMiBDb25maWd1cmF0aW9uJ30gQ2FsbEJhY2s9eyhjb25maXJtKSA9PiB7IHNldFNob3dDb21wbGV0ZShmYWxzZSk7IGlmIChjb25maXJtKSBTdWJtaXQoKTsgfX0gU2hvdz17c2hvd0NvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZT17J1RoaXMgd2lsbCBhZGQgdGhlIHNlbGVjdGVkIG1ldGVyIHRvIFBSQzAwMiBtb25pdG9yaW5nIGFuZCBzYXZlIHRoZSBiYXNlIGNvbmZpZ3VyYXRpb24uIE5vdGUgdGhhdCB0aGUgc3RhdHVzIG9mIHRoaXMgbWV0ZXIgd2lsbCBub3QgdXBkYXRlIHVudGlsIHRoZSBmaXJzdCBjb25maWd1cmF0aW9uIEZpbGUgaXMgZG93bmxvYWRlZC4nfSAvPlxyXG4gICAgICAgICAgICA8TG9hZGluZ1NjcmVlbiBTaG93PXtzaG93TG9hZGluZ30gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01ldGVyV2l6emFyZDtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBOZXdNZXRlcldpenphcmQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE3LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNaU1EICB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBMb2FkaW5nSWNvbiwgU2VhcmNoLCBTZWFyY2hCYXIgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IHNldE1ldGVyOiAobWV0ZXI6IFBSQzAwMi5JTWV0ZXIpID0+IHZvaWQsIHNlbGVjdGVkTWV0ZXI6IFBSQzAwMi5JTWV0ZXIgfVxyXG5cclxuY29uc3Qgc3RhbmRhcmRTZWFyY2g6IFNlYXJjaC5JRmllbGQ8TWlNRC5NZXRlcj5bXSA9IFtcclxuICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTmFtZScsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ0Fzc2V0S2V5JywgbGFiZWw6ICdBc3NldCBLZXknLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdNYWtlJywgbGFiZWw6ICdNYWtlJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgdHlwZTogJ3N0cmluZycgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNlbGVjdE1ldGVyID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbTWV0ZXJMaXN0LCBzZXRNZXRlckxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklNZXRlcj4+KFtdKTtcclxuICAgIGNvbnN0IFttZXRlckZpbHRlciwgc2V0TWV0ZXJGaWx0ZXJdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8U2VhcmNoLklGaWx0ZXI8UFJDMDAyLklNZXRlcj4+PihbXSk7XHJcbiAgICBjb25zdCBbbWV0ZXJTb3J0LCBzZXRNZXRlclNvcnRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgUFJDMDAyLklNZXRlcj4oXCJOYW1lXCIpO1xyXG4gICAgY29uc3QgW21ldGVyQXNjLCBzZXRNZXRlckFzY10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbZmlsdGVyYWJsZUxpc3QsIHNldEZpbHRlcmFibGVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFNlYXJjaC5JRmllbGQ8TWlNRC5NZXRlcj4+PihzdGFuZGFyZFNlYXJjaCk7XHJcbiAgICBjb25zdCBbc2VhcmNoU3RhdGUsIHNldFNlYXJjaFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPCgnSWRsZScgfCAnTG9hZGluZycgfCAnRXJyb3InKT4oJ0lkbGUnKTtcclxuICAgIFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hTdGF0ZSgnTG9hZGluZycpO1xyXG4gICAgICAgIGxldCBoYW5kbGVNZXRlckxpc3QgPSBnZXRNZXRlckxpc3QoKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlTWV0ZXJMaXN0ICE9IG51bGwgJiYgaGFuZGxlTWV0ZXJMaXN0LmFib3J0ICE9IG51bGwpIGhhbmRsZU1ldGVyTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcywgbWV0ZXJBc2MsIG1ldGVyU29ydCwgbWV0ZXJGaWx0ZXJdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlckxpc3QoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JTWV0ZXI+PiB7XHJcbiAgICAgICAgY29uc3QgbmF0aXZlRmllbGRzID0gc3RhbmRhcmRTZWFyY2gubWFwKHMgPT4gcy5rZXkpO1xyXG5cclxuICAgICAgICBsZXQgc2VhcmNoZXMgPSBtZXRlckZpbHRlci5tYXAocyA9PiB7IGlmIChuYXRpdmVGaWVsZHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PSBzLkZpZWxkTmFtZSkgPT0gLTEpIHJldHVybiB7IC4uLnMsIGlzUGl2b3RDb2x1bW46IHRydWUgfTsgZWxzZSByZXR1cm4gczsgfSlcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VNZXRlci9TZWxlY3RhYmxlTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBTZWFyY2hlczogc2VhcmNoZXMsIE9yZGVyQnk6IG1ldGVyU29ydCwgQXNjZW5kaW5nOiBtZXRlckFzYyB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklNZXRlcj4pID0+IHtcclxuICAgICAgICAgICAgc2V0TWV0ZXJMaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hTdGF0ZSgnSWRsZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbmRsZS5mYWlsKChkKSA9PiB7IHNldFNlYXJjaFN0YXRlKCdFcnJvcicpOyB9KVxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gZ2V0QWRkaXRpb25hbEZpZWxkcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IG51bGwpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBZGRpdGlvbmFsRmllbGRzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9BZGRpdGlvbmFsRmllbGQvUGFyZW50VGFibGUvTWV0ZXJgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gQ29udmVydFR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ2ludGVnZXInIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnZGF0ZXRpbWUnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZSB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW51bScsIGVudW06IFt7IExhYmVsOiB0eXBlLCBWYWx1ZTogdHlwZSB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZDogQXJyYXk8TWlNRC5BZGRpdGlvbmFsRmllbGQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcmRlcmVkID0gXy5vcmRlckJ5KHN0YW5kYXJkU2VhcmNoLmNvbmNhdChkLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IGBbQUYke2l0ZW0uRXh0ZXJuYWxEQiAhPSB1bmRlZmluZWQgPyBcIiBcIiArIGl0ZW0uRXh0ZXJuYWxEQiA6ICcnfV0gJHtpdGVtLkZpZWxkTmFtZX1gLCAuLi5Db252ZXJ0VHlwZShpdGVtLlR5cGUpIH0gYXMgU2VhcmNoLklGaWVsZDxNaU1ELk1ldGVyPlxyXG4gICAgICAgICAgICApKSksIFsnbGFiZWwnXSwgW1wiYXNjXCJdKTtcclxuICAgICAgICAgICAgc2V0RmlsdGVyYWJsZUxpc3Qob3JkZXJlZClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuICAgIC8vTGlzdCBvZiBtZXRlcnMgdG8gU2VsZWN0IEZyb21cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEJhcjxQUkMwMDIuSU1ldGVyPiBTZXRGaWx0ZXI9e3NldE1ldGVyRmlsdGVyfSBDb2xsdW1uTGlzdD17ZmlsdGVyYWJsZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xsdW1uPXt7IGtleTogJ05hbWUnLCBsYWJlbDogJ05hbWUnLCB0eXBlOiAnc3RyaW5nJyB9fVxyXG4gICAgICAgICAgICAgICAgICBEaXJlY3Rpb249eydsZWZ0J30gTGFiZWw9eydTZWFyY2gnfSBXaWR0aD17JzEwMCUnfVxyXG4gICAgICAgICAgICAgICAgICBHZXRFbnVtPXsoc2V0T3B0aW9ucywgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSAhPSAnZW51bScgfHwgZmllbGQuZW51bSA9PSB1bmRlZmluZWQgfHwgZmllbGQuZW51bS5sZW5ndGggIT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvVmFsdWVMaXN0L0dyb3VwLyR7ZmllbGQuZW51bVswXS5WYWx1ZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZS5kb25lKGQgPT4gc2V0T3B0aW9ucyhkLm1hcChpdGVtID0+ICh7IFZhbHVlOiBpdGVtLlZhbHVlLnRvU3RyaW5nKCksIExhYmVsOiBpdGVtLlRleHQgfSkpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ID09IG51bGwpIGhhbmRsZS5hYm9ydCgpOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvL1Jlc3VsdD17c2VhcmNoU3RhdGUgPT0gJ0xvYWRpbmcnID8gPExvYWRpbmdJY29uIFNob3c9e3RydWV9IC8+IDpzZWFyY2hTdGF0ZSA9PSAnRXJyb3InPydDb3VsZCBub3QgY29tcGxldGUgU2VhcmNoJyA6ICdGb3VuZCAnICsgTWV0ZXJMaXN0Lmxlbmd0aCArICcgTWV0ZXJzJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIDwvU2VhcmNoQmFyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFBSQzAwMi5JTWV0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdNZXRlcicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWFrZScsIGxhYmVsOiAnTWFrZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17TWV0ZXJMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17bWV0ZXJTb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17bWV0ZXJBc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gbWV0ZXJTb3J0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJBc2MoIW1ldGVyQXNjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlclNvcnQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJBc2ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGQpID0+IHsgcHJvcHMuc2V0TWV0ZXIoZC5yb3cpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IDMzMCAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5JRCA9PT0gKHByb3BzLnNlbGVjdGVkTWV0ZXIgPT0gdW5kZWZpbmVkID8gLTEgOiBwcm9wcy5zZWxlY3RlZE1ldGVyLklEKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TWV0ZXI7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9