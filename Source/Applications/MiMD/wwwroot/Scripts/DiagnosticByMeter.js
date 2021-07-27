(self["webpackChunkmimd"] = self["webpackChunkmimd"] || []).push([["DiagnosticByMeter"],{

/***/ "./wwwroot/Scripts/TSX/MiMD/Diagnostic/DiagnosticByMeter.tsx":
/*!*******************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/Diagnostic/DiagnosticByMeter.tsx ***!
  \*******************************************************************/
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
/* harmony import */ var _DiagnosticFiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DiagnosticFiles */ "./wwwroot/Scripts/TSX/MiMD/Diagnostic/DiagnosticFiles.tsx");
/* harmony import */ var _DiagnosticFileChanges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DiagnosticFileChanges */ "./wwwroot/Scripts/TSX/MiMD/Diagnostic/DiagnosticFileChanges.tsx");
/* harmony import */ var _CommonComponents_NoteWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CommonComponents/NoteWindow */ "./wwwroot/Scripts/TSX/MiMD/CommonComponents/NoteWindow.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
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
    { key: 'Station', label: 'Device Name', type: 'string' },
    { key: 'Make', label: 'Make', type: 'string' },
    { key: 'Model', label: 'Model', type: 'string' },
    { key: 'TSC', label: 'TSC', type: 'enum', enum: [{ Label: 'TSC', Value: 'TSC' }] },
    { key: 'DateLastChanged', label: 'Date Last Changed', type: 'datetime' },
    { key: "MaxChangeFileName", label: "Last File", type: "string" },
    { key: "AlarmLastChanged", label: "Last Alarm", type: "datetime" },
    { key: "AlarmFileName", label: "Last File Alarmed", type: 'string' },
    { key: "Alarms", label: '# of Alarms', type: 'integer' }
];
var ConfigurationByMeter = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(standardSearch), 2), filterableList = _a[0], setFilterableList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), filters = _b[0], setFilters = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), data = _c[0], setData = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('AlarmLastChanged'), 2), sortField = _d[0], setSortField = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), ascending = _e[0], setAscending = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Idle'), 2), searchState = _f[0], setSearchState = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handle = getAdditionalFields();
        return function () {
            if (handle.abort != null)
                handle.abort();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setSearchState('Loading');
        var h = getMeters();
        return function () { if (h != null && h.abort != null)
            h.abort(); };
    }, [ascending, sortField, filters]);
    function getMeters() {
        var nativeFields = standardSearch.filter(function (item) { return item.key != 'TSC'; }).map(function (s) { return s.key; });
        var searches = filters.map(function (s) { if (nativeFields.findIndex(function (item) { return item == s.FieldName; }) == -1)
            return __assign(__assign({}, s), { isPivotColumn: true });
        else
            return s; });
        var handle = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/Meter/Diagnostic/SearchableList",
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
            var ordered = lodash__WEBPACK_IMPORTED_MODULE_1__.orderBy(standardSearch.concat(d.map(function (item) { return (__assign({ label: "[AF" + (item.ExternalDB != undefined ? " " + item.ExternalDB : '') + "] " + item.FieldName, key: item.FieldName }, ConvertType(item.Type))); })), ['label'], ["asc"]);
            setFilterableList(ordered);
        });
        return handle;
    }
    function handleSelect(item, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Diagnostic&MeterID=' + item.row.MeterID, state: {} });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '100%', height: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_6__.SearchBar, { CollumnList: filterableList, SetFilter: function (flds) { return setFilters(flds); }, Direction: 'left', defaultCollumn: { key: 'Station', label: 'Station', type: 'string' }, Width: '65%', Label: 'Search', GetEnum: function (setOptions, field) {
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
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 0, height: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-7", style: { width: '65%', height: 'calc( 100% - 136px)', padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_7__.default, { cols: [
                        { key: 'Station', label: 'Device Name', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Make', label: 'Make', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                        { key: 'Model', label: 'Model', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                        { key: 'TSC', label: 'TSC', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                        {
                            key: 'DateLastChanged', label: 'Last Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: function (item, key, style) {
                                if (item[key] == null || item[key] == '')
                                    return '';
                                var date = moment(item[key]);
                                return date.format("MM/DD/YY HH:mm CT");
                            }
                        },
                        { key: 'MaxChangeFileName', label: 'Last File', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        {
                            key: 'AlarmLastChanged', label: 'Last Alarm', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: function (item, key, style) {
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
                        { key: 'AlarmFileName', label: 'Last File Alarmed', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        { key: 'Alarms', label: 'Alarms', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                        {
                            key: 'LastFaultTime', label: 'Last Fault', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: function (item, key, style) {
                                if (item[key] == null || item[key] == '')
                                    return '';
                                var date = moment(item[key]);
                                return date.format("MM/DD/YY HH:mm CT");
                            }
                        },
                        { key: 'FaultCount48hr', label: 'Faults (48hr)', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                        { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                    ], tableClass: "table table-hover", tableStyle: { height: '100%' }, data: data, sortField: sortField, ascending: ascending, onSort: function (d) {
                        if (d.col == sortField) {
                            setAscending(!ascending);
                        }
                        else {
                            setAscending(d.col != 'AlarmLastChanged' && d.col != 'DateLastChanged' && d.col != 'FaultCount48hr' && d.col != 'Alarms');
                            setSortField(d.col);
                        }
                    }, onClick: handleSelect, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', height: 'calc( 100% - 70px)', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.MeterID == props.MeterID; } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { padding: 0, height: ' 100%', overflowY: 'scroll' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DiagnosticFiles__WEBPACK_IMPORTED_MODULE_3__.default, { MeterID: props.MeterID, FileName: props.FileName }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DiagnosticFileChanges__WEBPACK_IMPORTED_MODULE_4__.default, { MeterID: props.MeterID, FileName: props.FileName, Table: props.Table }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CommonComponents_NoteWindow__WEBPACK_IMPORTED_MODULE_5__.default, { ID: props.MeterID })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigurationByMeter);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/Diagnostic/DiagnosticFileChanges.tsx":
/*!***********************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/Diagnostic/DiagnosticFileChanges.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
//******************************************************************************************************
//  DiagnosticFileChanges.tsx - Gbtc
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




var DiagnosticFileChanges = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), diagnosticfiles = _a[0], setDiagnosticFiles = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_2___default().useState(''), 2), html = _b[0], setHtml = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), flag = _c[0], setFlag = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), showDetails = _d[0], setShowDetails = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_2___default().useState('LastWriteTime'), 2), sortField = _e[0], setSortField = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), ascending = _f[0], setAscending = _f[1];
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
        if (isNaN(props.MeterID) || props.FileName == undefined)
            return;
        var handle1 = getConfigFiles();
        handle1.done(function (data) { return setDiagnosticFiles(data); });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [props.MeterID, props.FileName, flag, ascending, sortField]);
    function getConfigFiles() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/DiagnosticFiles/" + props.Table + "/" + props.MeterID + "/" + props.FileName + "/" + flag + "/" + sortField + "/" + (ascending ? 1 : 0),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    if (isNaN(props.MeterID) || props.FileName == undefined)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "card-header" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "col" },
                        props.FileName,
                        " History:"),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-check" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) { return setFlag(!flag); }, value: flag ? 'on' : 'off', checked: flag ? true : false }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", { className: "form-check-label" }, "Show Files w/o Alarms"))))),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__.default, { cols: [
                        { key: 'LastWriteTime', label: 'Last Write Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item) { return moment(item.LastWriteTime).format("MM/DD/YY HH:mm CT"); } },
                        { key: 'Alarms', label: 'Alarms', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        {
                            key: 'FileName', label: (props.Table == 'AppStatusFileChanges' ? 'File' : ''), headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item) { return (props.Table == 'AppStatusFileChanges' ?
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", { className: "btn btn-sm", onClick: function (e) { setShowDetails(true); setHtml("<p>" + item.Text.replace(/\n/g, '<br>') + "</p>"); } },
                                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-file" }))) : null); }
                        },
                        {
                            key: null, label: 'Diff', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item) { return react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", { className: "btn btn-sm", onClick: function (e) { setShowDetails(true); setHtml(item.Html.replace(/&para;/g, '')); } },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-eye" }))); }
                        }
                    ], tableClass: "table table-hover", data: diagnosticfiles, sortField: sortField, ascending: ascending, onSort: function (d) {
                        if (d.col == sortField) {
                            setAscending(!ascending);
                        }
                        else {
                            setAscending(d.col != 'LastWriteTime' && d.col != 'Alarms');
                            setSortField(d.col);
                        }
                    }, onClick: function () { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: 500, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } }))),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_0__.Modal, { Title: props.FileName, CallBack: function () { setShowDetails(false); }, Size: 'xlg', Show: showDetails, ShowCancel: false, ConfirmBtnClass: 'btn-danger', ConfirmText: 'Close' },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "well", style: { backgroundColor: 'lightgrey', fontSize: 18 }, dangerouslySetInnerHTML: { __html: html } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiagnosticFileChanges);


/***/ }),

/***/ "./wwwroot/Scripts/TSX/MiMD/Diagnostic/DiagnosticFiles.tsx":
/*!*****************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/Diagnostic/DiagnosticFiles.tsx ***!
  \*****************************************************************/
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
//  DiagnosticFiles.tsx - Gbtc
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



var DiagnosticFiles = function (props) {
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), configFiles = _a[0], setConfigFiles = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState('MaxAlarmWriteTime'), 2), sortField = _b[0], setSortField = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), ascending = _c[0], setAscending = _c[1];
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
        if (isNaN(props.MeterID))
            return;
        var handle1 = getConfigFiles();
        handle1.done(function (data) { return setConfigFiles(data); });
        return function () {
            if (handle1 != null && handle1.abort != undefined)
                handle1.abort();
        };
    }, [props.MeterID]);
    function getConfigFiles() {
        if (isNaN(props.MeterID))
            return null;
        return $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/DiagnosticFiles/" + props.MeterID + "/LastWrites/" + sortField + "/" + (ascending ? 1 : 0),
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
    function handleSelect(obj, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: "?name=Diagnostic&MeterID=" + props.MeterID + "&FileName=" + obj.MaxChangeFileName + "&Table=" + obj.MaxChangeTable, state: {} });
    }
    if (isNaN(props.MeterID))
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-header" }, "Diagnostic Files:"),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-body" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0__.default, { cols: [
                    { key: 'MaxChangeFileName', label: 'File', headerStyle: { width: '50%' }, rowStyle: { width: '50%' } },
                    { key: 'MaxChangeWriteTime', label: 'Last Write Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item) { return item.MaxChangeWriteTime == null ? '' : moment(item.MaxChangeWriteTime).format("MM/DD/YY HH:mm CT"); } },
                    {
                        key: 'MaxAlarmWriteTime', label: 'Last Alarm Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                            style['backgroundColor'] = getColor(item.MaxAlarmWriteTime);
                            return (item.MaxAlarmWriteTime == null ? '' : (moment(item.MaxAlarmWriteTime).format("MM/DD/YY HH:mm CT")));
                        }
                    },
                    { key: 'Alarms', label: 'Alarms', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                ], tableClass: "table table-hover", data: configFiles, sortField: sortField, ascending: ascending, onSort: function (d) {
                    if (d.col == sortField)
                        setAscending(!ascending);
                    else {
                        setAscending(d.col != 'MaxChangeFileName' && d.col != 'MaxAlarmWriteTime' && d.col != 'Alarms');
                        setSortField(d.col);
                    }
                }, onClick: function (data, evt) { return handleSelect(data.row, evt); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.MaxChangeFileName == props.FileName; } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiagnosticFiles);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL0RpYWdub3N0aWMvRGlhZ25vc3RpY0J5TWV0ZXIudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvRGlhZ25vc3RpYy9EaWFnbm9zdGljRmlsZUNoYW5nZXMudHN4Iiwid2VicGFjazovL21pbWQvLi93d3dyb290L1NjcmlwdHMvVFNYL01pTUQvRGlhZ25vc3RpYy9EaWFnbm9zdGljRmlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdHQUF3RztBQUN4RyxtQ0FBbUM7QUFDbkMsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RTtBQUNIO0FBQ2tCO0FBRUU7QUFDWTtBQUNKO0FBQ3lCO0FBQ25DO0FBaUI5QyxJQUFNLGNBQWMsR0FBMkI7SUFDM0MsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUN4RCxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQzlDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDaEQsRUFBRSxHQUFHLEVBQUUs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LE1BQU0sRUFBRSxFQUN4RixRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hGLFFBQVEsRUFBRSxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsaUJBQWlCLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBeEMsQ0FBd0MsR0FDOUQsQ0FHQSxDQUNKLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFRCxpRUFBZSxlQUFlLEVBQUMiLCJmaWxlIjoiRGlhZ25vc3RpY0J5TWV0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlndXJhdGlvbkJ5TWV0ZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA4LzIyLzIwMTkgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgRGlhZ25vc3RpY0ZpbGVzIGZyb20gJy4vRGlhZ25vc3RpY0ZpbGVzJztcclxuaW1wb3J0IERpYWdub3N0aWNGaWxlQ2hhbmdlcyBmcm9tICcuL0RpYWdub3N0aWNGaWxlQ2hhbmdlcyc7XHJcbmltcG9ydCBOb3RlV2luZG93IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvTm90ZVdpbmRvdyc7XHJcbmltcG9ydCB7IExvYWRpbmdJY29uLCBTZWFyY2gsIFNlYXJjaEJhciB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcblxyXG5pbnRlcmZhY2UgTWV0ZXIge1xyXG4gICAgTWV0ZXJJRDogbnVtYmVyLFxyXG4gICAgU3RhdGlvbjogc3RyaW5nLFxyXG4gICAgTW9kZWw6IHN0cmluZywgXHJcbiAgICBNYWtlOiBzdHJpbmcsIFxyXG4gICAgVFNDOiBzdHJpbmcsXHJcbiAgICBEYXRlTGFzdENoYW5nZWQ6IHN0cmluZyxcclxuICAgIE1heENoYW5nZUZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICBBbGFybUxhc3RDaGFuZ2VkOiBzdHJpbmcsXHJcbiAgICBBbGFybUZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICBBbGFybXM6IG51bWJlciwgXHJcbiAgICBMYXN0RmF1bHRUaW1lOiBzdHJpbmcsXHJcbiAgICBGYXVsdENvdW50NDhocjogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHN0YW5kYXJkU2VhcmNoOiBTZWFyY2guSUZpZWxkPE1ldGVyPltdID0gW1xyXG4gICAgeyBrZXk6ICdTdGF0aW9uJywgbGFiZWw6ICdEZXZpY2UgTmFtZScsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ01ha2UnLCBsYWJlbDogJ01ha2UnLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdUU0MnLCBsYWJlbDogJ1RTQycsIHR5cGU6ICdlbnVtJywgZW51bTogW3sgTGFiZWw6ICdUU0MnLCBWYWx1ZTogJ1RTQycgfV0gfSxcclxuICAgIHsga2V5OiAnRGF0ZUxhc3RDaGFuZ2VkJywgbGFiZWw6ICdEYXRlIExhc3QgQ2hhbmdlZCcsIHR5cGU6ICdkYXRldGltZScgfSxcclxuICAgIHsga2V5OiBcIk1heENoYW5nZUZpbGVOYW1lXCIsIGxhYmVsOiBcIkxhc3QgRmlsZVwiLCB0eXBlOiBcInN0cmluZ1wiIH0sXHJcbiAgICB7IGtleTogXCJBbGFybUxhc3RDaGFuZ2VkXCIsIGxhYmVsOiBcIkxhc3QgQWxhcm1cIiwgdHlwZTogXCJkYXRldGltZVwiIH0sXHJcbiAgICB7IGtleTogXCJBbGFybUZpbGVOYW1lXCIsIGxhYmVsOiBcIkxhc3QgRmlsZSBBbGFybWVkXCIsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogXCJBbGFybXNcIiwgbGFiZWw6ICcjIG9mIEFsYXJtcycsIHR5cGU6ICdpbnRlZ2VyJyB9XHJcbl07XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuY29uc3QgQ29uZmlndXJhdGlvbkJ5TWV0ZXIgPSAocHJvcHM6IHtNZXRlcklEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcsIFRhYmxlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRlcmFibGVMaXN0LCBzZXRGaWx0ZXJhYmxlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxTZWFyY2guSUZpZWxkPE1ldGVyPj4+KHN0YW5kYXJkU2VhcmNoKTtcclxuICAgIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFNlYXJjaC5JRmlsdGVyPE1ldGVyPj4+KFtdKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1ldGVyPj4oW10pO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ0FsYXJtTGFzdENoYW5nZWQnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaFN0YXRlLCBzZXRTZWFyY2hTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTwoJ0lkbGUnIHwgJ0xvYWRpbmcnfCAnRXJyb3InKT4oJ0lkbGUnKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlID0gZ2V0QWRkaXRpb25hbEZpZWxkcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IG51bGwpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaFN0YXRlKCdMb2FkaW5nJyk7XHJcbiAgICAgICAgbGV0IGggPSBnZXRNZXRlcnMoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaCAhPSBudWxsICYmIGguYWJvcnQgIT0gbnVsbCkgaC5hYm9ydCgpO31cclxuICAgIH0sIFthc2NlbmRpbmcsIHNvcnRGaWVsZCwgZmlsdGVyc10pXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWV0ZXJzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxNZXRlcj4+IHtcclxuICAgICAgICBjb25zdCBuYXRpdmVGaWVsZHMgPSBzdGFuZGFyZFNlYXJjaC5maWx0ZXIoaXRlbSA9PiBpdGVtLmtleSAhPSAnVFNDJykubWFwKHMgPT4gcy5rZXkpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHNlYXJjaGVzID0gZmlsdGVycy5tYXAocyA9PiB7IGlmIChuYXRpdmVGaWVsZHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PSBzLkZpZWxkTmFtZSkgPT0gLTEpIHJldHVybiB7IC4uLnMsIGlzUGl2b3RDb2x1bW46IHRydWUgfTsgZWxzZSByZXR1cm4gczsgfSlcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9NZXRlci9EaWFnbm9zdGljL1NlYXJjaGFibGVMaXN0YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IFNlYXJjaGVzOiBzZWFyY2hlcywgT3JkZXJCeTogc29ydEZpZWxkLCBBc2NlbmRpbmc6IGFzY2VuZGluZyB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8TWV0ZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFN0YXRlKCdJZGxlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5mYWlsKChkKSA9PiB7IHNldFNlYXJjaFN0YXRlKCdFcnJvcicpOyB9KVxyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFkZGl0aW9uYWxGaWVsZHMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1pTUQuQWRkaXRpb25hbEZpZWxkPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0FkZGl0aW9uYWxGaWVsZC9QYXJlbnRUYWJsZS9NZXRlcmAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBDb252ZXJ0VHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnaW50ZWdlcicgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdkYXRldGltZScgfHwgdHlwZSA9PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbnVtJywgZW51bTogW3sgTGFiZWw6IHR5cGUsIFZhbHVlOiB0eXBlIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkOiBBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4pID0+IHtcclxuICAgICAgICAgICAgbGV0IG9yZGVyZWQgPSBfLm9yZGVyQnkoc3RhbmRhcmRTZWFyY2guY29uY2F0KGQubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogYFtBRiR7aXRlbS5FeHRlcm5hbERCICE9IHVuZGVmaW5lZCA/IFwiIFwiICsgaXRlbS5FeHRlcm5hbERCIDogJyd9XSAke2l0ZW0uRmllbGROYW1lfWAsIGtleTogaXRlbS5GaWVsZE5hbWUsIC4uLkNvbnZlcnRUeXBlKGl0ZW0uVHlwZSkgfSBhcyBTZWFyY2guSUZpZWxkPE1ldGVyPlxyXG4gICAgICAgICAgICApKSksIFsnbGFiZWwnXSwgW1wiYXNjXCJdKTtcclxuICAgICAgICAgICAgc2V0RmlsdGVyYWJsZUxpc3Qob3JkZXJlZClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoaXRlbSwgZXZ0KSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6IGhvbWVQYXRoICsgJ2luZGV4LmNzaHRtbCcsIHNlYXJjaDogJz9uYW1lPURpYWdub3N0aWMmTWV0ZXJJRD0nICsgaXRlbS5yb3cuTWV0ZXJJRCwgc3RhdGU6IHt9IH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXI8TWlNRC5NZXRlcj5cclxuICAgICAgICAgICAgICAgIENvbGx1bW5MaXN0PXtmaWx0ZXJhYmxlTGlzdH1cclxuICAgICAgICAgICAgICAgIFNldEZpbHRlcj17KGZsZHMpID0+IHNldEZpbHRlcnMoZmxkcyl9XHJcbiAgICAgICAgICAgICAgICBEaXJlY3Rpb249eydsZWZ0J31cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xsdW1uPXt7IGtleTogJ1N0YXRpb24nLCBsYWJlbDogJ1N0YXRpb24nLCB0eXBlOiAnc3RyaW5nJyB9fVxyXG4gICAgICAgICAgICAgICAgV2lkdGg9eyc2NSUnfVxyXG4gICAgICAgICAgICAgICAgTGFiZWw9eydTZWFyY2gnfVxyXG4gICAgICAgICAgICAgICAgR2V0RW51bT17KHNldE9wdGlvbnMsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgIT0gJ2VudW0nIHx8IGZpZWxkLmVudW0gPT0gdW5kZWZpbmVkIHx8IGZpZWxkLmVudW0ubGVuZ3RoICE9IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1ZhbHVlTGlzdC9Hcm91cC8ke2ZpZWxkLmVudW1bMF0uVmFsdWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuZG9uZShkID0+IHNldE9wdGlvbnMoZC5tYXAoaXRlbSA9PiAoeyBWYWx1ZTogaXRlbS5WYWx1ZS50b1N0cmluZygpLCBMYWJlbDogaXRlbS5UZXh0IH0pKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGhhbmRsZSAhPSBudWxsICYmIGhhbmRsZS5hYm9ydCA9PSBudWxsKSBoYW5kbGUuYWJvcnQoKTsgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L1NlYXJjaEJhcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3ttYXJnaW46IDAsIGhlaWdodDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03XCIgc3R5bGU9e3sgd2lkdGg6ICc2NSUnLCBoZWlnaHQ6ICdjYWxjKCAxMDAlIC0gMTM2cHgpJywgcGFkZGluZzowIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZTxNZXRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdTdGF0aW9uJywgbGFiZWw6ICdEZXZpY2UgTmFtZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01ha2UnLCBsYWJlbDogJ01ha2UnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzUlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzUlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01vZGVsJywgbGFiZWw6ICdNb2RlbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnNSUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVFNDJywgbGFiZWw6ICdUU0MnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzUlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzUlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnRGF0ZUxhc3RDaGFuZ2VkJywgbGFiZWw6ICdMYXN0IENoYW5nZWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0gPT0gbnVsbCB8fCBpdGVtW2tleV0gPT0gJycpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoaXRlbVtrZXldKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWF4Q2hhbmdlRmlsZU5hbWUnLCBsYWJlbDogJ0xhc3QgRmlsZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTAlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEwJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FsYXJtTGFzdENoYW5nZWQnLCBsYWJlbDogJ0xhc3QgQWxhcm0nLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0gPT0gbnVsbCB8fCBpdGVtW2tleV0gPT0gJycpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoaXRlbVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF5cyA9IG5vdy5kaWZmKGRhdGUsICdkYXlzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA8IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAncmVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAnb3JhbmdlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbJ2JhY2tncm91bmRDb2xvciddID0gJ3llbGxvdyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0FsYXJtRmlsZU5hbWUnLCBsYWJlbDogJ0xhc3QgRmlsZSBBbGFybWVkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0FsYXJtcycsIGxhYmVsOiAnQWxhcm1zJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICc1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICc1JScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0xhc3RGYXVsdFRpbWUnLCBsYWJlbDogJ0xhc3QgRmF1bHQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0gPT0gbnVsbCB8fCBpdGVtW2tleV0gPT0gJycpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoaXRlbVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGYXVsdENvdW50NDhocicsIGxhYmVsOiAnRmF1bHRzICg0OGhyKScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnNSUnIH0gfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogMTcsIHBhZGRpbmc6IDAgfSwgcm93U3R5bGU6IHsgd2lkdGg6IDAsIHBhZGRpbmc6IDAgfSB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVTdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoZC5jb2wgIT0gJ0FsYXJtTGFzdENoYW5nZWQnICYmIGQuY29sICE9ICdEYXRlTGFzdENoYW5nZWQnICYmIGQuY29sICE9ICdGYXVsdENvdW50NDhocicgJiYgZC5jb2wgIT0gJ0FsYXJtcycgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNjAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBoZWlnaHQ6ICdjYWxjKCAxMDAlIC0gNzBweCknLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5NZXRlcklEID09IHByb3BzLk1ldGVySUR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAwLCBoZWlnaHQ6ICcgMTAwJScgLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFnbm9zdGljRmlsZXMgTWV0ZXJJRD17cHJvcHMuTWV0ZXJJRH0gRmlsZU5hbWU9e3Byb3BzLkZpbGVOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFnbm9zdGljRmlsZUNoYW5nZXMgTWV0ZXJJRD17cHJvcHMuTWV0ZXJJRH0gRmlsZU5hbWU9e3Byb3BzLkZpbGVOYW1lfSBUYWJsZT17cHJvcHMuVGFibGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Tm90ZVdpbmRvdyBJRD17cHJvcHMuTWV0ZXJJRH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uQnlNZXRlcjtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEaWFnbm9zdGljRmlsZUNoYW5nZXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA1LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuXHJcbmNvbnN0IERpYWdub3N0aWNGaWxlQ2hhbmdlcyA9IChwcm9wczogeyBNZXRlcklEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcsIFRhYmxlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2RpYWdub3N0aWNmaWxlcywgc2V0RGlhZ25vc3RpY0ZpbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1pTUQuSURpYWdub3N0aWNGaWxlQ2hhbmdlPj4oW10pO1xyXG4gICAgY29uc3QgW2h0bWwsIHNldEh0bWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0RldGFpbHMsIHNldFNob3dEZXRhaWxzXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgTWlNRC5JRGlhZ25vc3RpY0ZpbGVDaGFuZ2U+KCdMYXN0V3JpdGVUaW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpIHx8IHByb3BzLkZpbGVOYW1lID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldENvbmZpZ0ZpbGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhKSA9PiBzZXREaWFnbm9zdGljRmlsZXMoZGF0YSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuTWV0ZXJJRCwgcHJvcHMuRmlsZU5hbWUsIGZsYWcsIGFzY2VuZGluZywgc29ydEZpZWxkXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZpbGVzKCkge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0RpYWdub3N0aWNGaWxlcy8ke3Byb3BzLlRhYmxlfS8ke3Byb3BzLk1ldGVySUR9LyR7cHJvcHMuRmlsZU5hbWV9LyR7ZmxhZ30vJHtzb3J0RmllbGR9LyR7YXNjZW5kaW5nID8gMSA6IDB9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpIHx8IHByb3BzLkZpbGVOYW1lID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntwcm9wcy5GaWxlTmFtZX0gSGlzdG9yeTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9e3sgekluZGV4OiAxIH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRGbGFnKCFmbGFnKX0gdmFsdWU9e2ZsYWcgPyAnb24nIDogJ29mZid9IGNoZWNrZWQ9e2ZsYWcgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiID5TaG93IEZpbGVzIHcvbyBBbGFybXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlPE1pTUQuSURpYWdub3N0aWNGaWxlQ2hhbmdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0xhc3RXcml0ZVRpbWUnLCBsYWJlbDogJ0xhc3QgV3JpdGUgVGltZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSkgPT4gbW9tZW50KGl0ZW0uTGFzdFdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQWxhcm1zJywgbGFiZWw6ICdBbGFybXMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0ZpbGVOYW1lJywgbGFiZWw6IChwcm9wcy5UYWJsZSA9PSAnQXBwU3RhdHVzRmlsZUNoYW5nZXMnID8gJ0ZpbGUnIDogJycpLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0pID0+IChwcm9wcy5UYWJsZSA9PSAnQXBwU3RhdHVzRmlsZUNoYW5nZXMnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IHsgc2V0U2hvd0RldGFpbHModHJ1ZSk7IHNldEh0bWwoYDxwPiR7aXRlbS5UZXh0LnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpfTwvcD5gKSB9fT48c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj4gOiBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bGwsIGxhYmVsOiAnRGlmZicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSkgPT4gPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IHsgc2V0U2hvd0RldGFpbHModHJ1ZSk7IHNldEh0bWwoaXRlbS5IdG1sLnJlcGxhY2UoLyZwYXJhOy9nLCAnJykpOyB9fT48c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIj48L2k+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkaWFnbm9zdGljZmlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyhkLmNvbCAhPSAnTGFzdFdyaXRlVGltZScgJiYgZC5jb2wgIT0gJ0FsYXJtcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkLmNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA2MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogNTAwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWwgVGl0bGU9e3Byb3BzLkZpbGVOYW1lfSBDYWxsQmFjaz17KCkgPT4geyBzZXRTaG93RGV0YWlscyhmYWxzZSkgfX0gU2l6ZT17J3hsZyd9IFNob3c9e3Nob3dEZXRhaWxzfSBTaG93Q2FuY2VsPXtmYWxzZX0gQ29uZmlybUJ0bkNsYXNzPXsnYnRuLWRhbmdlcid9IENvbmZpcm1UZXh0PXsnQ2xvc2UnfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JleScsIGZvbnRTaXplOiAxOCB9fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWdub3N0aWNGaWxlQ2hhbmdlcztcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERpYWdub3N0aWNGaWxlcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDUvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uL2dsb2JhbCc7XHJcblxyXG5jb25zdCBEaWFnbm9zdGljRmlsZXMgPSAocHJvcHM6IHsgTWV0ZXJJRDogbnVtYmVyLCBGaWxlTmFtZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtjb25maWdGaWxlcywgc2V0Q29uZmlnRmlsZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5JRGlhZ25vc3RpY0ZpbGU+PihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignTWF4QWxhcm1Xcml0ZVRpbWUnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0Q29uZmlnRmlsZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGEpID0+IHNldENvbmZpZ0ZpbGVzKGRhdGEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEgIT0gbnVsbCAmJiBoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklEXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZpbGVzKCkge1xyXG4gICAgICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvRGlhZ25vc3RpY0ZpbGVzLyR7cHJvcHMuTWV0ZXJJRH0vTGFzdFdyaXRlcy8ke3NvcnRGaWVsZH0vJHthc2NlbmRpbmc/IDEgOiAwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1vbSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihtb20sICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChvYmosIGV2dCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdpbmRleC5jc2h0bWwnLCBzZWFyY2g6IGA/bmFtZT1EaWFnbm9zdGljJk1ldGVySUQ9JHtwcm9wcy5NZXRlcklEfSZGaWxlTmFtZT0ke29iai5NYXhDaGFuZ2VGaWxlTmFtZX0mVGFibGU9JHtvYmouTWF4Q2hhbmdlVGFibGV9YCwgc3RhdGU6IHt9IH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5EaWFnbm9zdGljIEZpbGVzOjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlPE1pTUQuSURpYWdub3N0aWNGaWxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWF4Q2hhbmdlRmlsZU5hbWUnLCBsYWJlbDogJ0ZpbGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzUwJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICc1MCUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWF4Q2hhbmdlV3JpdGVUaW1lJywgbGFiZWw6ICdMYXN0IFdyaXRlIFRpbWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0pID0+IGl0ZW0uTWF4Q2hhbmdlV3JpdGVUaW1lID09IG51bGwgPyAnJyA6IG1vbWVudChpdGVtLk1heENoYW5nZVdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnTWF4QWxhcm1Xcml0ZVRpbWUnLCBsYWJlbDogJ0xhc3QgQWxhcm0gVGltZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kQ29sb3InXSA9IGdldENvbG9yKGl0ZW0uTWF4QWxhcm1Xcml0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXRlbS5NYXhBbGFybVdyaXRlVGltZSA9PSBudWxsID8gJycgOiAobW9tZW50KGl0ZW0uTWF4QWxhcm1Xcml0ZVRpbWUpLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQWxhcm1zJywgbGFiZWw6ICdBbGFybXMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29uZmlnRmlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyhkLmNvbCAhPSAnTWF4Q2hhbmdlRmlsZU5hbWUnICYmIGQuY29sICE9ICdNYXhBbGFybVdyaXRlVGltZScgJiYgZC5jb2wgIT0gJ0FsYXJtcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkYXRhLCBldnQpID0+IGhhbmRsZVNlbGVjdChkYXRhLnJvdywgZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5NYXhDaGFuZ2VGaWxlTmFtZSA9PSBwcm9wcy5GaWxlTmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWFnbm9zdGljRmlsZXM7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9