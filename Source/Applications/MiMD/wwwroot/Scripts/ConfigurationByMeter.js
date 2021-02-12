(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ConfigurationByMeter"],{

/***/ "./TSX/MiMD/Configuration/ConfigurationByMeter.tsx":
/*!*********************************************************!*\
  !*** ./TSX/MiMD/Configuration/ConfigurationByMeter.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ConfigurationFiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfigurationFiles */ "./TSX/MiMD/Configuration/ConfigurationFiles.tsx");
/* harmony import */ var _ConfigurationFileChanges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConfigurationFileChanges */ "./TSX/MiMD/Configuration/ConfigurationFileChanges.tsx");
/* harmony import */ var _CommonComponents_NoteWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CommonComponents/NoteWindow */ "./TSX/MiMD/CommonComponents/NoteWindow.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_7__);
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
    { key: 'Station', label: 'Station', type: 'string' },
    { key: 'Model', label: 'Model', type: 'string' },
    { key: 'DateLastChanged', label: 'Date Last Changed', type: 'datetime' }
];
var ConfigurationByMeter = function (props) {
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](standardSearch), 2), filterableList = _a[0], setFilterableList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), filters = _b[0], setFilters = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), data = _c[0], setData = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('DateLastChanged'), 2), sortField = _d[0], setSortField = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), ascending = _e[0], setAscending = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Idle'), 2), searchState = _f[0], setSearchState = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setSearchState('Loading');
        var handle = getMeters();
        return function () { if (handle != null && handle.abort != null)
            handle.abort(); };
    }, [ascending, sortField, filters]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handle = getAdditionalFields();
        return function () {
            if (handle.abort != null)
                handle.abort();
        };
    }, []);
    function getMeters() {
        var handle = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/Meter/Config/SearchableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: filters, OrderBy: sortField, Ascending: ascending }),
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setData(data);
            setSearchState('Idle');
        });
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
            var ordered = lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"](standardSearch.concat(d.map(function (item) { return (__assign({ label: item.FieldName, key: item.FieldName }, ConvertType(item.Type))); })), ['label'], ["asc"]);
            setFilterableList(ordered);
        });
        return handle;
    }
    function handleSelect(item, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Configuration&MeterID=' + item.row.MeterID, state: {} });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%', height: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_7__["SearchBar"], { CollumnList: filterableList, SetFilter: function (flds) { return setFilters(flds); }, Direction: 'left', defaultCollumn: { key: 'Station', label: 'Station', type: 'string' }, Width: '50%', Label: 'Search', GetEnum: function (setOptions, field) {
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
            }, Result: searchState == 'Loading' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_7__["LoadingIcon"], { Show: true }) : 'Found ' + data.length + ' Meters' }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%', height: 'calc( 100% - 136px)' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0, height: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '50%', height: '100%', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default.a, { cols: [
                            { key: 'Station', label: 'Station', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
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
                        ], tableClass: "table table-hover", data: data, sortField: sortField, ascending: ascending, onSort: function (d) {
                            if (d.col == sortField) {
                                setAscending(!ascending);
                            }
                            else {
                                setSortField(d.col);
                            }
                        }, onClick: handleSelect, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: 'calc( 100% - 70px)', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.MeterID == props.MeterID; } })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { height: '100%', padding: 0, maxHeight: '100%', overflowY: 'scroll' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConfigurationFiles__WEBPACK_IMPORTED_MODULE_4__["default"], { MeterID: props.MeterID, FileName: props.FileName }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConfigurationFileChanges__WEBPACK_IMPORTED_MODULE_5__["default"], { MeterID: props.MeterID, FileName: props.FileName }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_NoteWindow__WEBPACK_IMPORTED_MODULE_6__["default"], { ID: props.MeterID }))))));
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
/* harmony default export */ __webpack_exports__["default"] = (ConfigurationByMeter);


/***/ }),

/***/ "./TSX/MiMD/Configuration/ConfigurationFileChanges.tsx":
/*!*************************************************************!*\
  !*** ./TSX/MiMD/Configuration/ConfigurationFileChanges.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__);
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]), 2), configFiles = _a[0], setConfigFiles = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('LastWriteTime'), 2), sortField = _b[0], setSortField = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), ascending = _c[0], setAscending = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''), 2), html = _d[0], setHtml = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), flag = _e[0], setFlag = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), showDetails = _f[0], setShowDetails = _f[1];
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
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
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "card-header" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "col" },
                        props.FileName,
                        " History:"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "form-check" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) { return setFlag(!flag); }, value: flag ? 'on' : 'off', checked: flag ? true : false }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "form-check-label" }, "Show Files w/o Changes"))))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0___default.a, { cols: [
                        {
                            key: 'LastWriteTime', label: 'Last Write Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                                style['backgroundColor'] = getColor(item.LastWriteTime);
                                return moment(item.LastWriteTime).format("MM/DD/YY HH:mm CT");
                            }
                        },
                        { key: 'Changes', label: '# of Changes', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        {
                            key: 'FileName', label: 'File', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' },
                            content: function (item) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn btn-sm", onClick: function (e) { setShowDetails(true); setHtml("<p>" + item.Text.replace(/\n/g, '<br>') + "</p>"); } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fa fa-file" }))); }
                        },
                        {
                            key: 'Text', label: 'Diff', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' },
                            content: function (item) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn btn-sm", onClick: function (e) { setShowDetails(true); setHtml(item.Html.replace(/&para;/g, '')); } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fa fa-eye" }))); }
                        },
                    ], tableClass: "table table-hover", data: configFiles, sortField: sortField, ascending: ascending, onSort: function (d) {
                        if (d.col == 'FileName' || d.col == 'Text')
                            return;
                        if (d.col == sortField)
                            setAscending(!ascending);
                        else {
                            setAscending(true);
                            setSortField(d.col);
                        }
                    }, onClick: function () { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } }))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__["Modal"], { Title: props.FileName, CallBack: function () { setShowDetails(false); }, Show: showDetails, ShowCancel: false, ConfirmText: 'Close', ShowX: true },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "well", style: { backgroundColor: 'lightgrey', fontSize: 18, maxHeight: window.innerHeight - 200, overflowY: 'scroll' }, dangerouslySetInnerHTML: { __html: html } }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ConfigurationFileChanges);


/***/ }),

/***/ "./TSX/MiMD/Configuration/ConfigurationFiles.tsx":
/*!*******************************************************!*\
  !*** ./TSX/MiMD/Configuration/ConfigurationFiles.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0__);
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]), 2), configFiles = _a[0], setConfigFiles = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('LastWriteTime'), 2), sortField = _b[0], setSortField = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), ascending = _c[0], setAscending = _c[1];
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
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
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "card-header" }, "Configuration Files:"),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "card-body" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_0___default.a, { cols: [
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
                        setAscending(true);
                        setSortField(d.col);
                    }
                }, onClick: function (data, evt) { return handleSelect(data.row.FileName, evt); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.FileName == props.FileName; } }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ConfigurationFiles);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/ChangeOverview/ActionHeader.tsx":
/*!**********************************************************!*\
  !*** ./TSX/MiMD/PRC-002/ChangeOverview/ActionHeader.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "badge", style: { background: (stat == undefined ? '#6c757d' : stat.Color), color: (stat == undefined ? '#ffffff' : stat.TextColor) } }, (stat == undefined ? 'Unknown' : stat.Description)));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        props.showTime ? formatTS(props.data.Timestamp) + ': ' : null,
        isNote ? props.data.UserAccount + ' added a Note' : null,
        isChange ? props.data.UserAccount + ' Changed Status to ' : null,
        isChange ? stateTag(props.data.StateId) : null,
        (isauto && !isChange) ? 'MiMD recieved an updated Configuration File' : null));
};
/* harmony default export */ __webpack_exports__["default"] = (ActionHeader);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/ChangeOverview/ActionList.tsx":
/*!********************************************************!*\
  !*** ./TSX/MiMD/PRC-002/ChangeOverview/ActionList.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ActionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionHeader */ "./TSX/MiMD/PRC-002/ChangeOverview/ActionHeader.tsx");
/* harmony import */ var _FieldValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FieldValues */ "./TSX/MiMD/PRC-002/ChangeOverview/FieldValues.tsx");
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), actionList = _a[0], setAtcionList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), ascending = _b[0], setAscending = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](-1), 2), selectedAction = _c[0], setSelectedAction = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showFields = _d[0], setShowFields = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        selectedAction > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FieldValues__WEBPACK_IMPORTED_MODULE_4__["default"], { ActionID: selectedAction, show: showFields, setShow: setShowFields }) : null,
        (props.RecordId > -1 ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default.a, { cols: [
                    {
                        key: 'ID', label: 'Configuration Change History', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ActionCard, { data: item, stateList: props.StateList, openConfig: function (i) { setSelectedAction(i); setShowFields(true); } }); }
                    },
                ], tableClass: "table table-hover", data: actionList, sortField: "ID", ascending: ascending, onSort: function (d) { setAscending(!ascending); }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })
            : null)));
};
var ActionCard = function (props) {
    var hasConfig = props.data.UserAccount == 'MiMD';
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActionHeader__WEBPACK_IMPORTED_MODULE_3__["default"], { data: props.data, stateList: props.stateList, showTime: true })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "card-text" }, props.data.Note),
            hasConfig ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#", className: "btn btn-primary", onClick: function () { props.openConfig(props.data.ID); $('#currentConfig').show(); } }, "Show Configuration") : null)));
};
/* harmony default export */ __webpack_exports__["default"] = (RecordList);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/ChangeOverview/ChangeOverviewPage.tsx":
/*!****************************************************************!*\
  !*** ./TSX/MiMD/PRC-002/ChangeOverview/ChangeOverviewPage.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RecordDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecordDetail */ "./TSX/MiMD/PRC-002/ChangeOverview/RecordDetail.tsx");
/* harmony import */ var _ActionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionList */ "./TSX/MiMD/PRC-002/ChangeOverview/ActionList.tsx");
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), statusList = _a[0], setStatusList = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%', height: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0, height: '200px' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RecordDetail__WEBPACK_IMPORTED_MODULE_2__["default"], { stateList: statusList, RecordID: props.RecordId })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '100%', height: 'calc( 100% - 136px)', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActionList__WEBPACK_IMPORTED_MODULE_3__["default"], { StateList: statusList, RecordId: props.RecordId }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PRC002ChangeOverviewPage);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/ChangeOverview/FieldValues.tsx":
/*!*********************************************************!*\
  !*** ./TSX/MiMD/PRC-002/ChangeOverview/FieldValues.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__);
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
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), fields = _a[0], setFields = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('FieldName'), 2), sortBy = _b[0], setSortBy = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), ascending = _c[0], setAscending = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__["Modal"], { Title: props.ActionID == undefined ? 'Current Configuration' : 'Related Configuration', Show: props.show, CallBack: function (confirm) { props.setShow(false); }, Size: 'lg', ShowX: true, ShowCancel: false, ConfirmText: 'Close' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default.a, { cols: [
                        { key: 'FieldName', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'FieldName', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                        { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                        {
                            key: 'Valid', label: 'Valid', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                                        alignContent: 'center',
                                        padding: '.375rem .75rem',
                                        fontSize: '1.5rem',
                                        lineHeight: 1.5
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa " + (item.Valid ? "fa-check-circle" : "fa-exclamation-triangle"), "aria-hidden": "true" })));
                            }
                        },
                    ], tableClass: "table table-hover", data: fields, sortField: sortBy, ascending: ascending, onSort: function (d) {
                        if (d.col == sortBy)
                            setAscending(!ascending);
                        else
                            setSortBy(d.col);
                    }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 620, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })))));
};
/* harmony default export */ __webpack_exports__["default"] = (FieldValues);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/ChangeOverview/RecordDetail.tsx":
/*!**********************************************************!*\
  !*** ./TSX/MiMD/PRC-002/ChangeOverview/RecordDetail.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/ManualAction */ "./TSX/MiMD/PRC-002/Common/ManualAction.tsx");
/* harmony import */ var _FieldValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldValues */ "./TSX/MiMD/PRC-002/ChangeOverview/FieldValues.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ResolveRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResolveRecord */ "./TSX/MiMD/PRC-002/ChangeOverview/ResolveRecord.tsx");
/* harmony import */ var _ActionHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActionHeader */ "./TSX/MiMD/PRC-002/ChangeOverview/ActionHeader.tsx");
/* harmony import */ var _Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/BaseConfigWindow */ "./TSX/MiMD/PRC-002/Common/BaseConfigWindow.tsx");
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), record = _a[0], setRecord = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), meter = _b[0], setMeter = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), action = _c[0], setAction = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), baseConfig = _d[0], setBaseConfig = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), allvalueList = _e[0], setAllValueList = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showAck = _f[0], setShowAck = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showRev = _g[0], setShowRev = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showResolve = _h[0], setShowResolve = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showRap = _j[0], setShowRap = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showNote = _k[0], setShowNote = _k[1];
    var _l = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showBaseConfig = _l[0], setShowBaseConfig = _l[1];
    var _m = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showFields = _m[0], setShowFields = _m[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleRecord = getRecord(props.RecordID);
        return function () {
            if (handleRecord != null && handleRecord.abort != null)
                handleRecord.abort();
        };
    }, [props.RecordID]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleFieldVaues = getFieldValues();
        return function () {
            if (handleFieldVaues != null && handleFieldVaues.abort != null)
                handleFieldVaues.abort();
        };
    }, [props.RecordID]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, (meter == undefined ? null :
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '25%', padding: 5 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatusRow, { label: 'Configuration Change', status: recordStat, T: record.Timer }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatusRow, { label: 'Meter ' + meter.Name, status: meterStat, T: meter.Timer })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '25%', padding: 5 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    " Issue Opened: ",
                    formatTS(record.Created),
                    " by ",
                    record.User),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    " Last Action Taken: ",
                    formatTS(record.Timestamp)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    " Last Action: ",
                    action != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActionHeader__WEBPACK_IMPORTED_MODULE_6__["default"], { data: action, stateList: props.stateList, showTime: false }) : null,
                    " ")),
            (baseConfig == undefined ? null :
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '25%', padding: 5 } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowBaseConfig(true); } }, " Base Configuration "),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowFields(true); } }, " Current Config Issues"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '25%', padding: 5 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return setShowNote(true); } }, " Add Compliance Note "),
                recordStat.Description == 'Acknowledged' || recordStat.Description == 'Reviewed' ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return setShowRap(true); } }, " Submitt Remedial Action Plan ")
                    : null,
                recordStat.Description == 'Compliance Issue' ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowAck(true); } }, " Acknowledge Issue ")
                    : null,
                recordStat.Description == 'Acknowledged' ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowRev(true); } }, " Review Issue ")
                    : null,
                recordStat.Description == 'Reviewed' ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowResolve(true); } }, " Resolve Issue - Updated Base Config")
                    : null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__["default"], { RecordId: props.RecordID, state: null, show: showNote, setShow: setShowNote }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FieldValues__WEBPACK_IMPORTED_MODULE_3__["default"], { RecordID: props.RecordID, show: showFields, setShow: setShowFields }),
            recordStat.Description == 'Acknowledged' || recordStat.Description == 'Reviewed' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__["default"], { RecordId: props.RecordID, state: props.stateList.find(function (item) { return item.Description === 'RAP Submitted'; }), show: showRap, setShow: setShowRap })
                : null,
            recordStat.Description == 'Compliance Issue' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__["default"], { RecordId: props.RecordID, state: props.stateList.find(function (item) { return item.Description === 'Acknowledged'; }), show: showAck, setShow: setShowAck })
                : null,
            recordStat.Description == 'Acknowledged' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__["default"], { RecordId: props.RecordID, state: props.stateList.find(function (item) { return item.Description === 'Reviewed'; }), show: showRev, setShow: setShowRev })
                : null,
            recordStat.Description == 'Reviewed' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ResolveRecord__WEBPACK_IMPORTED_MODULE_5__["default"], { FieldList: allvalueList.filter(function (item) { return !item.Valid; }), RecordID: props.RecordID, stateList: props.stateList, show: showResolve, setShow: setShowResolve })
                : null,
            (baseConfig == undefined ? null :
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["Modal"], { Title: 'Issue Base Configuration', Show: showBaseConfig, CallBack: function (confirm) { setShowBaseConfig(false); }, Size: 'lg', ShowX: true, ShowCancel: false, ConfirmText: 'Close' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_7__["default"], { configurationList: [baseConfig] })))))));
};
var StatusRow = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            props.label,
            " has been in"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: 'flex' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
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
/* harmony default export */ __webpack_exports__["default"] = (RecordDetail);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/ChangeOverview/ResolveRecord.tsx":
/*!***********************************************************!*\
  !*** ./TSX/MiMD/PRC-002/ChangeOverview/ResolveRecord.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__);
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};





var ResolveRecord = function (props) {
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Note'), 2), step = _a[0], setStep = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](''), 2), note = _b[0], setNote = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](-1), 2), fieldIndex = _c[0], setFieldIndex = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), updatedFld = _d[0], setUpdatedFld = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('None'), 2), hover = _e[0], setHover = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showClose = _f[0], setShowClose = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showComplete = _g[0], setShowComplete = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Error'), 2), fieldState = _h[0], setFieldState = _h[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setUpdatedFld([]);
        var handles = [];
        handles = props.FieldList.map(function (item) { return LoadField(item.FieldId); });
        return (function () {
            handles.forEach(function (h) { if (h != null && h.abort != null)
                h.abort(); });
        });
    }, [props.FieldList]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
            setUpdatedFld(function (array) { return __spread(array, [data]); });
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
        setUpdatedFld(function (fld) { var update = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](fld); update[fieldIndex] = record; return update; });
    }
    var stepComplete = (step == 'Note' ? note.length > 0 :
        (updatedFld[fieldIndex] != null && fieldState == 'Valid' && !(updatedFld[fieldIndex].Value == null || updatedFld[fieldIndex].Value.length == 0) && !(updatedFld[fieldIndex].FieldType == 'number' && isNaN(parseFloat(updatedFld[fieldIndex].Value)))));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__["Modal"], { Show: props.show, Title: getTitle(), CancelText: (step == 'Note' ? 'Cancel' : 'Back'), ShowX: true, ConfirmToolTip: 'ResolveConfirm', Size: 'lg', OnHover: setHover, ConfirmBtnClass: 'btn-success' + (stepComplete ? '' : ' disabled'), ConfirmText: (fieldIndex == props.FieldList.length - 1 ? 'Save' : 'Next'), CallBack: function (c, b) { if (c)
                NextStep();
            else if (b)
                PrevStep();
            else
                setShowClose(true); } }, step == 'Note' ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Note:"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { className: "form-control", rows: 4, value: note, onChange: function (e) { return setNote(e.target.value); } })) :
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ConfigFieldEdit, { validRule: fieldState != 'Error', Setter: function (record) { return SetField(fieldIndex, record); }, CurrentValue: (fieldIndex > -1 ? props.FieldList[fieldIndex] : undefined), Field: (fieldIndex > -1 ? updatedFld[fieldIndex] : undefined) })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__["ToolTip"], { Show: hover == 'Confirm' && !stepComplete, Position: 'top', Target: 'ResolveConfirm', Zindex: 9999 },
            step == 'Note' && note.length == 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Note is required.") : null,
            step == 'Change' && (updatedFld[fieldIndex] != null && (updatedFld[fieldIndex].Value == null || updatedFld[fieldIndex].Value.length == 0)) ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Value is required.") : null,
            step == 'Change' && updatedFld[fieldIndex] != null && updatedFld[fieldIndex].FieldType == 'number' && isNaN(parseFloat(updatedFld[fieldIndex].Value)) ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "Value is required to ne a number.") : null,
            step == 'Change' && fieldState == 'Loading' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__["LoadingIcon"], { Show: true, Label: 'Verifying New Rule...' }) : null,
            step == 'Change' && fieldState == 'Error' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "The new Rule needs to result in the current Value being Valid.") : null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__["Warning"], { Title: 'Cancel', Message: 'Warning all Changes will be lost and the new base configuration will not be applied', CallBack: function (c) { if (c)
                Cancel(); setShowClose(false); }, Show: showClose }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__["Warning"], { Title: 'Warning', Message: 'This will change the Base Configuration for this meter and can not be undone. A permanent compliance record will be created', Show: showComplete, CallBack: function (c) { if (c)
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["Input"], { Record: props.CurrentValue, Field: 'Value', Setter: function () { }, Valid: function () { return props.validRule; }, Label: 'Current Value', Disabled: true, Feedback: 'The new Rule needs to allow the current Value.' }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["Select"], { Record: props.Field, Field: 'FieldType', Options: FieldTypeOptions, Label: 'Field Type', Disabled: true, Setter: function (record) { } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["Input"], { Record: props.Field, Field: 'Name', Setter: function () { }, Valid: function () { return true; }, Label: 'Field', Disabled: true }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["Select"], { Record: props.Field, Field: 'Comparison', Options: (props.Field.FieldType == 'number' ? NumberChecks : TextChecks), Label: 'Rule', Setter: function (record) { props.Setter(record); } }),
        (props.Field.Comparison == 'IN' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MultiInputField, { data: props.Field, Setter: function (record) { props.Setter(record); } }) :
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["Input"], { Record: props.Field, Field: 'Value', Setter: function (record) { props.Setter(record); }, Valid: function () { return ValidValue(); }, Label: 'Value', Feedback: props.Field.FieldType != 'number' ? 'Value is required.' : 'Value is required and needs to be a number.' }))));
};
var MultiInputField = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), listValues = _a[0], setListValues = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setListValues(props.data.Value.split(';'));
    }, [props.data]);
    function Set(index, value) {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](listValues);
        lst[index] = value;
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    function AddNew() {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](listValues);
        lst.push((props.data.FieldType == 'string' ? 'Value' : '0'));
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    function remove(index) {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](listValues);
        lst.splice(index, 1);
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        listValues.map(function (item, index) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                index == 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Values") : null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", onChange: function (evt) { Set(index, evt.target.value); }, value: item }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group-append", onClick: function () { return remove(index); } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "input-group-text" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))));
        }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-sm", onClick: function () { return AddNew(); } }, " Add ")));
};
/* harmony default export */ __webpack_exports__["default"] = (ResolveRecord);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/Common/BaseConfigWindow.tsx":
/*!******************************************************!*\
  !*** ./TSX/MiMD/PRC-002/Common/BaseConfigWindow.tsx ***!
  \******************************************************/
/*! exports provided: BaseConfigByMeter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseConfigByMeter", function() { return BaseConfigByMeter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__);
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
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](-1), 2), currentTab = _a[0], setCurrentTab = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), fieldList = _b[0], setFieldList = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Name'), 2), sortField = _c[0], setSortField = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](true), 2), ascending = _d[0], setAscending = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (currentTab == -1 && props.configurationList.length > 0)
            setCurrentTab(props.configurationList[0].ID);
        if (props.configurationList.length == 0)
            setCurrentTab(-1);
    }, [props.configurationList]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var h = getFieldList();
        return function () { if (h != null && h.abort != null)
            h.abort(); };
    }, [currentTab, ascending, sortField]);
    function getFieldList() {
        if (currentTab == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/Field/" + currentTab + "/" + sortField + "/" + (ascending ? 1 : 0),
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        props.configurationList.length > 1 ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "nav nav-tabs" }, props.configurationList.map(function (item, index) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item", key: index },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link" + (currentTab == item.ID ? " active" : ""), onClick: function () { return setCurrentTab(item.ID); } }, item.Name));
            })) : null,
        currentTab != -1 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "tab-content", style: { maxHeight: window.innerHeight - 235, overflow: 'hidden' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card", style: { marginBottom: 10 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null,
                        " Configuration ",
                        props.configurationList.find(function (item) { return item.ID == currentTab; }).Name)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: window.innerHeight - 540, maxHeight: window.innerHeight - 540 } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Record: props.configurationList.find(function (item) { return item.ID == currentTab; }), Field: 'Pattern', Setter: function () { }, Valid: function () { return true; }, Label: 'File Pattern', Disabled: true }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                                { key: 'Name', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Record: item, Field: 'Name', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                                { key: 'FieldType', label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Record: item, Field: 'FieldType', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                                { key: 'Comparison', label: 'Rule', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Record: item, Field: 'Comparison', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                                { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Record: item, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } }
                            ], tableClass: "table table-hover", data: fieldList, sortField: 'Name', ascending: true, onSort: function (d) {
                                if (d.col == sortField)
                                    setAscending(!ascending);
                                else
                                    setSortField(d.col);
                            }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 666, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } }))))) : null));
};
var BaseConfigByMeter = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), configurationlist = _a[0], setConfigurationList = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BaseConfigWindow, { configurationList: configurationlist });
};
/* harmony default export */ __webpack_exports__["default"] = (BaseConfigWindow);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/Common/ManualAction.tsx":
/*!**************************************************!*\
  !*** ./TSX/MiMD/PRC-002/Common/ManualAction.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__);
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
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](""), 2), note = _a[0], setNote = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), 2), Toffset = _b[0], setToffset = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showWarning = _c[0], setWarning = _c[1];
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
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
            return 'Submitt';
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__["Modal"], { Show: props.show, Title: getTitle(), ConfirmText: getBtn(), CancelBtnClass: 'Cancel', CallBack: function (c) { confirm(c); }, Size: 'sm' }, (props.state != undefined && props.state.Description == 'Compliance Issue') ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Note:"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { className: "form-control", rows: 4, value: note, onChange: function (e) { return setNote(e.target.value); } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Days out of Compliance:"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: 'number', value: Toffset, onChange: function (e) { return setToffset(parseInt(e.target.value)); } }))
            :
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Note:"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { className: "form-control", rows: 4, value: note, onChange: function (e) { return setNote(e.target.value); } }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__["Warning"], { Show: showWarning, Title: 'Warning', Message: 'This action can not be undone. It will create a permanent compliance record.', CallBack: function (result) { if (result)
                submitt(); setWarning(false); } })));
};
/* harmony default export */ __webpack_exports__["default"] = (ManualAction);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/MeterOverview/DowloadFile.tsx":
/*!********************************************************!*\
  !*** ./TSX/MiMD/PRC-002/MeterOverview/DowloadFile.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__);
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
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), fileList = _a[0], setFileList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), ascending = _b[0], setAscending = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default.a, { cols: [
                { key: 'FileName', label: 'File', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                { key: null, label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return window.open(homePath + "api/MiMD/PRC002/DowloadFile/" + item.ID); } }, " Download "); } },
            ], tableClass: "table table-hover", data: fileList, sortField: 'FileName', ascending: ascending, onSort: function (d) { setAscending(!ascending); }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })));
};
/* harmony default export */ __webpack_exports__["default"] = (DowloadFiles);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/MeterOverview/MeterDetail.tsx":
/*!********************************************************!*\
  !*** ./TSX/MiMD/PRC-002/MeterOverview/MeterDetail.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ManualAction */ "./TSX/MiMD/PRC-002/Common/ManualAction.tsx");
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showReviewed = _a[0], setShowReviewed = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), meter = _b[0], setMeter = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showRAP = _c[0], setShowRAP = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showAddIssue = _d[0], setShowAddIssue = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '50%', padding: 0 } }, meter != undefined ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: __assign({}, lblStyle) }, "Meter not in Compliance"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                        width: '100%',
                        fontSize: 'xx-large',
                        textAlign: 'center',
                        background: (meter.Timer < 30 ? '#28a745' : (meter.Timer < 60 ? '#ffc107' : '#dc3545')),
                        color: (meter.Timer < 30 ? '#ffffff' : (meter.Timer < 60 ? '#212529' : '#ffffff')),
                        height: '50px'
                    } }, (meter.Status == 'In Compliance' ? 0 : meter.Timer)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: lblStyle }, "Days"))
            : null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '50%', padding: 5 } }, (meter != undefined) ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, meter.Reviewed ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger btn-block", onClick: function () { return setShowAddIssue(true); } }, " Add Compliance Issue "),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return setShowRAP(true); } }, " Submitt Remedial Action Plan "),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__["default"], { MeterId: props.MeterID, state: props.stateList.find(function (item) { return item.Description === 'Compliance Issue'; }), show: showAddIssue, setShow: setShowAddIssue }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__["default"], { MeterId: props.MeterID, state: props.stateList.find(function (item) { return item.Description === 'RAP Submitted'; }), show: showRAP, setShow: setShowRAP })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return setShowReviewed(true); } }, " Meter Reviewed for Compliance "),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_2__["Warning"], { Title: 'Warning', Message: 'This will activate the MiMD PRC002 monitoring for this meter. Please Review the current configuration before proceeding', CallBack: function (result) { if (result)
                        ActivateMeter(); setShowReviewed(false); }, Show: showReviewed }))) : null)));
};
/* harmony default export */ __webpack_exports__["default"] = (MeterDetail);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/MeterOverview/MeterOverviewPage.tsx":
/*!**************************************************************!*\
  !*** ./TSX/MiMD/PRC-002/MeterOverview/MeterOverviewPage.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RecordList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordList */ "./TSX/MiMD/PRC-002/MeterOverview/RecordList.tsx");
/* harmony import */ var _MeterDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MeterDetail */ "./TSX/MiMD/PRC-002/MeterOverview/MeterDetail.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DowloadFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DowloadFile */ "./TSX/MiMD/PRC-002/MeterOverview/DowloadFile.tsx");
/* harmony import */ var _Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/BaseConfigWindow */ "./TSX/MiMD/PRC-002/Common/BaseConfigWindow.tsx");
/* harmony import */ var _MeterWizzard_NewMeterWizzard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MeterWizzard/NewMeterWizzard */ "./TSX/MiMD/PRC-002/MeterWizzard/NewMeterWizzard.tsx");
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), meterFilters = _a[0], setMeterFilters = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), statusList = _b[0], setStatusList = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](standardSearch), 2), filterableList = _c[0], setFilterableList = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]("Status"), 2), meterSort = _d[0], setMeterSort = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), meterAsc = _e[0], setMeterAsc = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), meterList = _f[0], setMeterList = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), 2), selectedMeter = _g[0], setSelectedMeter = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('None'), 2), hover = _h[0], setHover = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showNewMeterWizard = _j[0], setShowNewMeterWizard = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showBaseConfig = _k[0], setShowBaseConfig = _k[1];
    var _l = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showFiles = _l[0], setShowFiles = _l[1];
    var _m = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Idle'), 2), searchState = _m[0], setSearchState = _m[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleStatusList = getStatus();
        return function () {
            if (handleStatusList.abort != null)
                handleStatusList.abort();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setSearchState('Loading');
        var h = getMeters();
        return function () { if (h != null && h.abort != null)
            h.abort(); };
    }, [meterSort, meterAsc, meterFilters]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var index = meterList.findIndex(function (m) { return m.ID == props.MeterID; });
        if (index == -1)
            setSelectedMeter(null);
        else
            setSelectedMeter(meterList[index]);
    }, [props.MeterID, meterList]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
            var ordered = lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](standardSearch.concat(d.map(function (item) { return (__assign({ label: item.FieldName, key: item.FieldName }, ConvertType(item.Type))); })), ['label'], ["asc"]);
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
        var handle = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/ComplianceMeter/SearchableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: meterFilters, OrderBy: meterSort, Ascending: meterAsc }),
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setMeterList(data);
            setSearchState('Idle');
        });
        return handle;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%', height: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__["SearchBar"], { SetFilter: setMeterFilters, CollumnList: filterableList, defaultCollumn: { key: 'Name', label: 'Name', type: 'string' }, Direction: 'left', Label: 'Search', Width: '50%', GetEnum: function (setOptions, field) {
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
            }, Result: searchState == 'Loading' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__["LoadingIcon"], { Show: true }) : 'Found ' + meterList.length + ' Meters' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item", style: { width: '50%', paddingRight: 10 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("fieldset", { className: "border", style: { padding: '10px', height: '100%' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("legend", { className: "w-auto", style: { fontSize: 'large' } }, "Actions:"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'row' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowNewMeterWizard(true); } }, " Add New Meter to PRC002 ")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block" + (selectedMeter == null ? ' disabled' : ''), "data-tooltip": 'BaseConfig', onClick: function () { return setShowBaseConfig(selectedMeter != null); }, onMouseOver: function () { return setHover('BaseConfig'); }, onMouseOut: function () { return setHover('None'); } }, " Meter Configuration "),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block" + (selectedMeter == null ? ' disabled' : ''), onMouseOver: function () { return setHover('Files'); }, onMouseOut: function () { return setHover('None'); }, "data-tooltip": 'Files', onClick: function () { return setShowFiles(selectedMeter != null); } }, " Download Files ")))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__["ToolTip"], { Position: 'bottom', Show: hover == 'Files' && selectedMeter == null, Target: 'Files' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, " A Meter needs to be selected.")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__["ToolTip"], { Position: 'bottom', Show: hover == 'BaseConfig' && selectedMeter == null, Target: 'BaseConfig' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, " A Meter needs to be selected.")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__["Modal"], { Title: 'Meter Base Configuration', Show: showBaseConfig, CallBack: function (confirm) { setShowBaseConfig(false); }, Size: 'lg', ShowX: true, ShowCancel: false, ConfirmText: 'Close' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_8__["BaseConfigByMeter"], { MeterId: props.MeterID })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_5__["Modal"], { Title: 'Download Current Config File', Show: showFiles, CallBack: function (confirm) { setShowFiles(false); }, Size: 'sm', ShowX: true, ShowCancel: false, ConfirmText: 'Close' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DowloadFile__WEBPACK_IMPORTED_MODULE_7__["default"], { MeterId: props.MeterID })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MeterWizzard_NewMeterWizzard__WEBPACK_IMPORTED_MODULE_9__["default"], { show: showNewMeterWizard, setShow: setShowNewMeterWizard }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '50%', height: 'calc( 100% - 136px)', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_6___default.a, { cols: [
                            { key: 'Name', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            { key: 'Model', label: 'Model', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            { key: 'Make', label: 'Make', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            {
                                key: 'Status', label: 'Status', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                                    var stat = statusList.find(function (s) { return s.ID === item.StatusID; });
                                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
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
                        ], tableClass: "table table-hover", data: meterList, sortField: meterSort, ascending: meterAsc, onSort: function (d) {
                            if (d.col == meterSort)
                                setMeterAsc(!meterAsc);
                            else
                                setMeterSort(d.col);
                        }, onClick: function (d) { setMeterID(d.row.ID); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: 'calc(100% - 80px)', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID === props.MeterID; } })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '50%', height: '200px', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MeterDetail__WEBPACK_IMPORTED_MODULE_4__["default"], { MeterID: (isNaN(props.MeterID) ? -1 : props.MeterID), stateList: statusList })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RecordList__WEBPACK_IMPORTED_MODULE_3__["default"], { MeterId: (isNaN(props.MeterID) ? -1 : props.MeterID), StateList: statusList })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PRC002MeterOverviewPage);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/MeterOverview/RecordList.tsx":
/*!*******************************************************!*\
  !*** ./TSX/MiMD/PRC-002/MeterOverview/RecordList.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__);
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), changeList = _a[0], setChangeList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]("Status"), 2), recordSort = _b[0], setRecordSort = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), recordAsc = _c[0], setRecordAsc = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, (props.MeterId > -1 ?
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '100%', height: 'calc( 100% - 336px)', padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default.a, { cols: [
                        {
                            key: 'Status', label: 'Status', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                                var stat = props.StateList.find(function (s) { return s.ID === item.Status; });
                                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
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
                        else
                            setRecordSort(d.col);
                    }, onClick: function (d) {
                        history.push('index.cshtml?name=PRC002Change&RecordID=' + d.row.ID);
                    }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })))
        : null)));
};
/* harmony default export */ __webpack_exports__["default"] = (RecordList);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/MeterWizzard/BaseConfigWindow.tsx":
/*!************************************************************!*\
  !*** ./TSX/MiMD/PRC-002/MeterWizzard/BaseConfigWindow.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FileParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileParser */ "./TSX/MiMD/PRC-002/MeterWizzard/FileParser.tsx");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_4__);
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};





var BaseConfigWindow = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), 2), currentConfig = _a[0], setCurrentConfig = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({ ID: -1, MeterId: -1, Name: 'All INI Files', Pattern: '*.ini' }), 2), newConfig = _b[0], setNewConfig = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '' }), 2), editField = _c[0], setEditField = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](true), 2), newConfigUniq = _d[0], setNewConfigUniq = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](''), 2), fileName = _e[0], setFileName = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), fileFields = _f[0], setFileFields = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Field'), 2), sortField = _g[0], setSortField = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), ascending = _h[0], setAscending = _h[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.BaseConfigs.size == 0) {
            setCurrentConfig(null);
            return;
        }
        if (setCurrentConfig == null || !props.BaseConfigs.has(currentConfig))
            setCurrentConfig(props.BaseConfigs.keys().next().value);
    }, [props.BaseConfigs]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.step != 'BaseConfig')
            return function () { };
        $(".custom-file-input").on("change", function (evt) {
            var fileName = evt.target.value.split("\\").pop();
            $(evt.target).siblings(".custom-file-label").addClass("selected").html(fileName);
            readSingleFile(evt, fileName);
        });
        return function () { return $(".custom-file-input").off('change'); };
    }, [props.step]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var error = [];
        if (props.step == 'BaseConfig') {
            if (props.BaseConfigs.size == 0)
                error.push('At least 1 Base Configuration needs to be set up.');
            if (props.BaseConfigs.size > 0)
                __spread(props.BaseConfigs.keys()).forEach(function (item) {
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
                error.push('Name needs to be unique.');
        }
        if (props.step == 'Edit Field') {
            if (editField.Name == null || editField.Name.length == 0)
                error.push('A Field name is required.');
            if (editField.Value == null || editField.Value.length == 0)
                error.push('A Value is required.');
            if (editField.Value != null && (editField.FieldType == 'number' && isNaN(parseFloat(editField.Value))))
                error.push('A Value for a Number Field needs to be numeric.');
        }
        if (props.step == 'File Load') {
            if (!fileFields.some(function (item) { return item.Include; }))
                error.push('At least one Field needs to be selected.');
        }
        props.setError(error);
    }, [props.step, props.BaseConfigs, newConfig, newConfigUniq, editField, fileFields]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (__spread(props.BaseConfigs.values()).map(function (i) { return i[0]; }).findIndex(function (item) { return item.Name == newConfig.Name; }) == -1)
            setNewConfigUniq(true);
        else
            setNewConfigUniq(false);
    }, [props.BaseConfigs, newConfig]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.step == 'New BaseConfig')
            setNewConfig({ ID: -1, MeterId: -1, Name: 'Base Config Name', Pattern: '*.ini' });
        if (props.step == 'Edit Field')
            setEditField({
                ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: ''
            });
        if (props.step == 'File Load')
            setFileFields([]);
        if (props.step == 'BaseConfig') {
            props.setStep('Meter');
            return;
        }
        props.setStep('BaseConfig');
    }, [props.reset]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.step == 'New BaseConfig') {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.BaseConfigs);
            var id = (updated.size > 0 ? Math.max.apply(Math, __spread(updated.keys())) : 0) + 1;
            updated.set(id, [__assign(__assign({}, newConfig), { ID: id }), []]);
            props.setBaseConfig(updated);
            setNewConfig({ ID: -1, MeterId: -1, Name: 'Base Config Name', Pattern: '*.ini' });
        }
        if (props.step == 'Edit Field' && editField.ID == -1) {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.BaseConfigs);
            var cong = updated.get(currentConfig);
            var id = (cong[1].length > 0 ? Math.max.apply(Math, __spread(cong[1].map(function (item) { return item.ID; }))) + 1 : 1);
            cong[1] = __spread(cong[1], [__assign(__assign({}, editField), { ID: id })]);
            updated.set(currentConfig, cong);
            props.setBaseConfig(updated);
            setEditField({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '' });
        }
        if (props.step == 'Edit Field' && editField.ID != -1) {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.BaseConfigs);
            var cong = updated.get(currentConfig);
            var index = cong[1].findIndex(function (item) { return item.ID == editField.ID; });
            cong[1][index] = editField;
            updated.set(currentConfig, cong);
            props.setBaseConfig(updated);
            setEditField({ ID: -1, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: 'Field', Value: '' });
        }
        if (props.step == 'File Load') {
            var updated = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.BaseConfigs);
            var id_1 = (updated.size > 0 ? Math.max.apply(Math, __spread(updated.keys())) : 0) + 1;
            var fields = fileFields.filter(function (item) { return item.Include; }).map(function (item, index) { return ({ ID: index + 1, BaseConfigId: id_1, Value: item.Value, Name: item.Name, Comparison: item.Comparison, FieldType: item.FieldType }); });
            updated.set(id_1, [{ Name: fileName, Pattern: '**/' + fileName, MeterId: -1, ID: id_1 }, fields]);
            props.setBaseConfig(updated);
            setFileFields([]);
            setCurrentConfig(id_1);
        }
        props.setStep('BaseConfig');
    }, [props.cont]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (currentConfig == null)
            return;
        var updated = props.BaseConfigs.get(currentConfig);
        var nconfig = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.BaseConfigs);
        nconfig.set(currentConfig, [updated[0], lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](updated[1], [sortField], [(!ascending ? "asc" : "desc")])]);
        props.setBaseConfig(nconfig);
    }, [ascending, sortField, currentConfig]);
    function readSingleFile(evt, fileName) {
        props.setLoading(true);
        if (fileName.endsWith(".ini"))
            Object(_FileParser__WEBPACK_IMPORTED_MODULE_2__["ParseINI"])(evt, function (d) { return LoadBaseConfigFile(fileName, d.map(function (item, index) { return (__assign(__assign({}, item), { Include: false })); })); });
        if (fileName.endsWith(".par"))
            Object(_FileParser__WEBPACK_IMPORTED_MODULE_2__["ParsePAR"])(evt, function (d) { return LoadBaseConfigFile(fileName, d.map(function (item, index) { return (__assign(__assign({}, item), { Include: false })); })); });
        else
            props.setLoading(true);
    }
    function LoadBaseConfigFile(file, Fields) {
        setFileName(file);
        setFileFields(Fields.map(function (item) { item.BaseConfigId = -1; return item; }));
        props.setStep('File Load');
        props.setLoading(true);
    }
    function editConfigField(record) {
        props.setStep('Edit Field');
        setEditField(record);
    }
    function addConfigField() {
        props.setStep('Edit Field');
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        props.step == 'BaseConfig' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "nav nav-tabs" }, __spread(props.BaseConfigs.keys()).map(function (item, index) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item", key: index },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link" + (currentConfig == item ? " active" : ""), onClick: function () { return setCurrentConfig(item); } }, props.BaseConfigs.get(item)[0].Name));
            })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "tab-content", style: { maxHeight: window.innerHeight - 235, overflow: 'hidden' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card", style: { marginBottom: 10 } }, currentConfig != null ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null,
                                " Configuration ",
                                props.BaseConfigs.get(currentConfig)[0].Name)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: window.innerHeight - 540, maxHeight: window.innerHeight - 540 } },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: props.BaseConfigs.get(currentConfig)[0], Field: 'Pattern', Setter: function () { }, Valid: function () { return true; }, Label: 'File Pattern', Disabled: true }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_4___default.a, { cols: [
                                        { key: 'Name', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'Name', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                                        { key: 'FieldType', label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'FieldType', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                                        { key: 'Comparison', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'Comparison', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                                        { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                                        { key: 'ID', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { marginTop: '16px', textAlign: 'center' }, onClick: function () { return editConfigField(item); } },
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { style: { color: '#007BFF' }, className: "fa fa-pencil-square fa-3x", "aria-hidden": "true" })); } },
                                    ], tableClass: "table table-hover", data: props.BaseConfigs.get(currentConfig)[1], sortField: 'Name', ascending: true, onSort: function (d) {
                                        if (d.col == sortField)
                                            setAscending(!ascending);
                                        else {
                                            setAscending(!ascending);
                                            setSortField(d.col);
                                        }
                                    }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 666, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })))) : null)),
            currentConfig != null ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-sm", onClick: function () { return addConfigField(); } }, "Add new Field ") : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group", style: { width: '100%' } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "custom-file" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "file", className: "custom-file-input", accept: ".ini,.par" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "custom-file-label" }, "Choose a Configuration File if applicable")))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { props.setStep('New BaseConfig'); } }, " Add New Base Configuration ")))) : null,
        props.step == 'New BaseConfig' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: newConfig, Field: 'Name', Setter: setNewConfig, Valid: function () { return newConfig.Name != null && newConfig.Name.length > 0 && newConfigUniq; }, Feedback: 'Name is required and must be unique', Label: 'Name' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: newConfig, Field: 'Pattern', Setter: setNewConfig, Valid: function () { return newConfig.Pattern != null && newConfig.Pattern.length > 0; }, Label: 'File Pattern', Feedback: 'File Pattern is required.' }),
            " ") : null,
        props.step == 'Edit Field' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ConfigFieldEdit, { Field: editField, Setter: setEditField }) : null,
        props.step == 'File Load' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_4__["SelectTable"], { cols: [
                { key: 'Name', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em)' }, rowStyle: { width: 'calc(50% - 8.25em)' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'Name', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                { key: 'FieldType', label: 'Type', headerStyle: { width: '8em' }, rowStyle: { width: '8em' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'FieldType', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                { key: 'Comparison', label: '', headerStyle: { width: '5em' }, rowStyle: { width: '5em' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'Comparison', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                { key: 'Value', label: 'Value', headerStyle: { width: 'calc(70% - 8.25em)' }, rowStyle: { width: 'calc(50% - 8.25em)' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
            ], KeyField: 'Name', tableClass: "table table-hover", data: fileFields, sortField: 'Name', ascending: true, onSelection: function (d) {
                setFileFields(function (lst) {
                    var update = [];
                    update = lst.map(function (item) { return (__assign(__assign({}, item), { Include: (d.findIndex(function (i) { return i.ID == item.ID; }) > -1) })); });
                    return update;
                });
            }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' } }) : null));
};
var ConfigFieldEdit = function (props) {
    var FieldTypeOptions = [{ Value: 'string', Label: 'Text' }, { Value: 'number', Label: 'Number' }];
    var NumberChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: '>', Label: '>' }, { Value: '<', Label: '<' }];
    var TextChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: 'IN', Label: 'In' }];
    function ValidValue() {
        return (props.Field.Value != null && props.Field.Value.length > 0 && (props.Field.FieldType != 'number' || !isNaN(parseFloat(props.Field.Value))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Select"], { Record: props.Field, Field: 'FieldType', Options: FieldTypeOptions, Label: 'Field Type', Setter: function (record) {
                if (record.FieldType !== props.Field.FieldType && record.Comparison != '<>' && record.Comparison != '=')
                    record.Comparison = '=';
                props.Setter(record);
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: props.Field, Field: 'Name', Setter: function (record) { props.Setter(record); }, Valid: function () { return props.Field.Name != null && props.Field.Name.length > 0; }, Label: 'Field' }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Select"], { Record: props.Field, Field: 'Comparison', Options: (props.Field.FieldType == 'number' ? NumberChecks : TextChecks), Label: 'Rule', Setter: function (record) { props.Setter(record); } }),
        (props.Field.Comparison == 'IN' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MultiInputField, { data: props.Field, Setter: function (record) { props.Setter(record); } }) :
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: props.Field, Field: 'Value', Setter: function (record) { props.Setter(record); }, Valid: function () { return ValidValue(); }, Label: 'Value', Feedback: props.Field.FieldType != 'number' ? 'Value is required.' : 'Value is required and needs to be a number.' }))));
};
var MultiInputField = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), listValues = _a[0], setListValues = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setListValues(props.data.Value.split(';'));
    }, [props.data]);
    function Set(index, value) {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](listValues);
        lst[index] = value;
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    function AddNew() {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](listValues);
        lst.push((props.data.FieldType == 'string' ? 'Value' : '0'));
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    function remove(index) {
        var rec = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](props.data);
        var lst = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](listValues);
        lst.splice(index, 1);
        rec.Value = lst.join(';');
        props.Setter(rec);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        listValues.map(function (item, index) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                index == 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Values") : null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", onChange: function (evt) { Set(index, evt.target.value); }, value: item }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group-append", onClick: function () { return remove(index); } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "input-group-text" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))));
        }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-sm", onClick: function () { return AddNew(); } }, " Add ")));
};
/* harmony default export */ __webpack_exports__["default"] = (BaseConfigWindow);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/MeterWizzard/FileParser.tsx":
/*!******************************************************!*\
  !*** ./TSX/MiMD/PRC-002/MeterWizzard/FileParser.tsx ***!
  \******************************************************/
/*! exports provided: ParseINI, ParsePAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseINI", function() { return ParseINI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParsePAR", function() { return ParsePAR; });
function ParseINI(evt, complete) {
    var f = evt.target.files[0];
    var results = [];
    if (f) {
        var r = new FileReader();
        r.onload = function (e) {
            var contents = e.target.result;
            var lines = contents.split(/[\r\n]+/g);
            lines.forEach(function (ln, index) {
                if (!ln.includes('='))
                    return;
                var i = ln.indexOf('=');
                if (results.map(function (item) { return item.key; }).includes(ln.substr(0, i)))
                    results.push({ key: ln.substr(0, i) + '-' + index, value: ln.substr(i + 1) });
                else
                    results.push({ key: ln.substr(0, i), value: ln.substr(i + 1) });
            });
            complete(results.map(function (item, index) { return ({
                ID: index,
                BaseConfigId: -1,
                Name: item.key,
                Value: item.value,
                Comparison: '=',
                FieldType: 'string'
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
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Station", Value: trimChar_1(data[1], '"') });
                    newIndex = newIndex + 1;
                }
                if (data.length > 2) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Nominal Frequency", Value: data[2] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 3) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. DC Channels", Value: data[3] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 4) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Analog Channels", Value: data[4] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 5) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Event Channels", Value: data[5] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 6) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Num. Triggers", Value: data[6] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 7) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Shunt Type", Value: data[7] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 8) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "OverWrite old Records", Value: data[8] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 9) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER Channels in PAR", Value: data[9] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 10) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER CHannels that cause DFR Stop", Value: data[10] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 11) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER AutoStop if  #Triggers >", Value: data[11] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 12) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER AutoStop Time Period", Value: data[12] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 13) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "SER Restore Period", Value: data[13] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 14) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Debounce Time", Value: data[14] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 15) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Prefault", Value: data[15] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 16) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Postfault", Value: data[16] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 17) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Fault Limit", Value: data[17] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 18) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Sampling Frequency", Value: data[18] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 19) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Prefault", Value: data[19] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 20) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Post Fault", Value: data[20] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 21) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Fault", Value: data[21] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 22) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended Sampling Frequency", Value: data[22] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 23) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended RMS Cycles/Point", Value: data[23] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 24) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous Recording Samples/Point Freq-RMS-Phase", Value: data[24] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 25) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous Recording Storage Length (Days)", Value: data[25] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 26) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continous Oscillography Storage Length (Days)", Value: data[26] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 27) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Trigger Channels - Auto Stop If # Triggers >", Value: data[27] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 28) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channels Auto Stop Time Period (Minutes)", Value: data[28] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 29) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channels Auto Stop - Restore After (Mins)", Value: data[29] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 30) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Triggers Channel Auto Stop - Apply to Disturbance Triggers Only (0=no 1=yes)", Value: data[30] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 31) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Transient Rate Oscillography Storage (Days)", Value: data[31] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 32) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# Faults on Disk", Value: data[32] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 33) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Master Chassis", Value: data[33] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 34) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Extended RMS Include Phase Angle", Value: data[34] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 35) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "EVNOMISS (Do Not Restrict Event Only Trigger)", Value: data[35] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 36) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Continuous PQ Data", Value: data[36] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 37) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "CBA Phase Rotation", Value: data[37] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 38) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# of TW Channels", Value: data[38] });
                    newIndex = newIndex + 1;
                }
            }
            if (lines.length > 1) {
                var i_2 = lines[1].indexOf('=');
                var row = lines[1].substring(0, i_2);
                var data = lines[1].substring(i_2 + 1).trim().split(',');
                if (data.length > 0) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "RmSetup Chasis Port", Value: data[0] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 1) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "RMSetup Time sync", Value: data[1] });
                    newIndex = newIndex + 1;
                }
                // Missing alarm Mapping
                if (data.length > 3) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "FaultLED ON Duration", Value: data[3] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 4) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Disk Alarm", Value: data[4] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 5) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DNP3 Slave", Value: data[5]
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 6) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DNP3 Master", Value: data[6] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 7) {
                    results.push({
                        ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Report Alarm States as SER", Value: data[7]
                    });
                    newIndex = newIndex + 1;
                }
                if (data.length > 8) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "DSP Temperature Lim", Value: data[8] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 9) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "PMU", Value: data[9] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 10) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Sync loss Delay", Value: data[10] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 11) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "# Hours Different to GPS", Value: data[11] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 12) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "#HD/SSD (PC-Health)", Value: data[12] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 13) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Traveling Wave IP Port", Value: data[13] });
                    newIndex = newIndex + 1;
                }
                if (data.length > 14) {
                    results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: "Auto DST", Value: data[14] });
                    newIndex = newIndex + 1;
                }
            }
            var i = 2;
            while (i < lines.length) {
                var r_1 = lines[i].indexOf('=');
                var row = lines[i].substring(0, r_1);
                var data = lines[i].substring(r_1 + 1).trim().split(',');
                if (row.startsWith('C')) {
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 1", Value: data[0] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 2", Value: data[1] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 3", Value: data[2] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 4", Value: data[3] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 5", Value: data[4] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 6", Value: data[5] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 7", Value: data[6] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 8", Value: data[7] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 9", Value: data[8] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 9) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 10", Value: data[9] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 10) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Slot 11", Value: data[10] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 11) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DSP Address", Value: data[11] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 12) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - EXT1 PPS", Value: data[12] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 13) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ignore", Value: data[13] });
                        newIndex = newIndex + 1;
                    }
                }
                if (row.startsWith('A')) {
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar_1(data[0], '"') });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Type", Value: data[1] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ratio", Value: data[2] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Full Scale", Value: data[3] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Ext/Int shunt", Value: data[4] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Phase", Value: data[5] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P1", Value: data[6] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P2", Value: data[7] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Virtual Channel Assignment P3", Value: data[8] });
                        newIndex = newIndex + 1;
                    }
                }
                if (row.startsWith('T')) {
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar_1(data[0], '"') });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Assigned Analog Channel", Value: data[1] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trigger Type", Value: data[2] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trigger Condition", Value: data[3] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Duration", Value: data[4] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Over", Value: data[5] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Under", Value: data[6] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Trip if Rate", Value: data[7] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Hysteresis", Value: data[8] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 9) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Priority", Value: data[9] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 13) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Disturbance", Value: data[13] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 14) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'number', Name: row + " - Minimum RMS", Value: data[14] });
                        newIndex = newIndex + 1;
                    }
                }
                if (row.startsWith('E')) {
                    if (data.length > 0) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - Name", Value: trimChar_1(data[0], '"') });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - State", Value: data[1] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DFR Start", Value: data[2] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - DFR/SER", Value: data[3] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: row + " - SER Run", Value: data[4] });
                        newIndex = newIndex + 1;
                    }
                }
            }
            complete(results);
        };
        r.readAsText(f);
    }
}


/***/ }),

/***/ "./TSX/MiMD/PRC-002/MeterWizzard/NewMeterWizzard.tsx":
/*!***********************************************************!*\
  !*** ./TSX/MiMD/PRC-002/MeterWizzard/NewMeterWizzard.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SelectMeter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectMeter */ "./TSX/MiMD/PRC-002/MeterWizzard/SelectMeter.tsx");
/* harmony import */ var _BaseConfigWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseConfigWindow */ "./TSX/MiMD/PRC-002/MeterWizzard/BaseConfigWindow.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__);
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};





var NewMeterWizzard = function (props) {
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), 2), meter = _a[0], setMeter = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Meter'), 2), step = _b[0], setStep = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showWarning = _c[0], setShowWarning = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showComplete = _d[0], setShowComplete = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('None'), 2), hover = _e[0], setHover = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showLoading = _f[0], setShowLoading = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](new Map()), 2), baseConfig = _g[0], setBaseConfig = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), errorMsg = _h[0], setErrorMsg = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), 2), reset = _j[0], setReset = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), 2), cont = _k[0], setCont = _k[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
        __spread(baseConfig.keys()).forEach(function (key) {
            baseConfig.get(key)[1].forEach(function (fld) {
                configFields.push({
                    BaseConfigId: key,
                    Comparison: fld.Comparison,
                    FieldType: fld.FieldType,
                    Name: fld.Name,
                    Value: fld.Value
                });
            });
        });
        $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/ComplianceMeter/Add",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                Meter: { MeterId: meter.ID, Active: false, Reviewed: false },
                BaseConfiguration: __spread(baseConfig.values()).map(function (item) { return { Name: item[0].Name, Pattern: item[0].Pattern, ID: item[0].ID }; }),
                ConfigurationFields: configFields
            }),
            dataType: 'json',
            cache: false,
            async: true
        }).then(function (d) { return history.go(0); });
        props.setShow(false);
    }
    var stepComplete = (step == 'Meter' ? meter != null : errorMsg.length == 0);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["Modal"], { Show: props.show, CallBack: function (confirm, isButton) {
                if (confirm)
                    NextStep();
                if (!isButton)
                    setShowWarning(true);
                if (!confirm && isButton)
                    PrevStep();
            }, Title: getTitle(), ConfirmText: (step == 'Meter' || step == 'File Load' ? 'Next' : 'Save'), ConfirmToolTip: 'WizardConfirm', Size: 'lg', OnHover: setHover, ConfirmBtnClass: 'btn-success' + (stepComplete ? '' : ' disabled'), CancelText: (step == 'Meter' ? 'Close' : 'Back'), ShowX: true },
            step == 'Meter' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SelectMeter__WEBPACK_IMPORTED_MODULE_2__["default"], { setMeter: function (meter) { setMeter(meter); }, selectedMeter: meter }) : null,
            step == 'BaseConfig' || step == 'New BaseConfig' || step == 'File Load' || step == 'Edit Field' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_3__["default"], { setLoading: setShowLoading, BaseConfigs: baseConfig, setBaseConfig: setBaseConfig, setError: setErrorMsg, setStep: setStep, step: step, cont: cont, reset: reset })
                : null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["Warning"], { Title: 'Exit Wizard', CallBack: function (confirm) { setShowWarning(false); if (confirm)
                props.setShow(false); }, Show: showWarning, Message: 'This Will close the Wizard and all progress will be lost.' }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["ToolTip"], { Show: hover == 'Confirm' && !stepComplete, Position: 'top', Target: 'WizardConfirm', Zindex: 9999 },
            step == 'Meter' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Meter needs to be selected.") : null,
            step != 'Meter' ? errorMsg.map(function (item, index) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { key: index },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                " ",
                item); }) : null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["Warning"], { Title: 'Save PRC002 Configuration', CallBack: function (confirm) { setShowComplete(false); if (confirm)
                Submit(); }, Show: showComplete, Message: 'This will add the selected meter to PRC002 monitoring and save the base configuration. Note that the status of this meter will not update until the first configuration File is downloaded.' }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["LoadingScreen"], { Show: showLoading })));
};
/* harmony default export */ __webpack_exports__["default"] = (NewMeterWizzard);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/MeterWizzard/SelectMeter.tsx":
/*!*******************************************************!*\
  !*** ./TSX/MiMD/PRC-002/MeterWizzard/SelectMeter.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
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
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), MeterList = _a[0], setMeterList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), meterFilter = _b[0], setMeterFilter = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]("Name"), 2), meterSort = _c[0], setMeterSort = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), meterAsc = _d[0], setMeterAsc = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](standardSearch), 2), filterableList = _e[0], setFilterableList = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Idle'), 2), searchState = _f[0], setSearchState = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setSearchState('Loading');
        var handleMeterList = getMeterList();
        return function () {
            if (handleMeterList != null && handleMeterList.abort != null)
                handleMeterList.abort();
        };
    }, [props, meterAsc, meterSort, meterFilter]);
    function getMeterList() {
        var handle = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/ComplianceMeter/SelectableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: meterFilter, OrderBy: meterSort, Ascending: meterAsc }),
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setMeterList(data);
            setSearchState('Idle');
        });
        return handle;
    }
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
            var ordered = lodash__WEBPACK_IMPORTED_MODULE_3__["orderBy"](standardSearch.concat(d.map(function (item) { return (__assign({ label: item.FieldName, key: item.FieldName }, ConvertType(item.Type))); })), ['label'], ["asc"]);
            setFilterableList(ordered);
        });
        return handle;
    }
    //List of meters to Select From
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["SearchBar"], { SetFilter: setMeterFilter, CollumnList: filterableList, defaultCollumn: { key: 'Name', label: 'Name', type: 'string' }, Direction: 'left', Label: 'Search', Width: '100%', GetEnum: function (setOptions, field) {
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
            }, Result: searchState == 'Loading' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["LoadingIcon"], { Show: true }) : 'Found ' + MeterList.length + ' Meters' }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: 'calc( 100% - 136px)', padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                    { key: 'Name', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                    { key: 'Model', label: 'Model', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                    { key: 'Make', label: 'Make', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                ], tableClass: "table table-hover", data: MeterList, sortField: meterSort, ascending: meterAsc, onSort: function (d) {
                    if (d.col == meterSort)
                        setMeterAsc(!meterAsc);
                    else
                        setMeterSort(d.col);
                }, onClick: function (d) { props.setMeter(d.row); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: 550, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID === (props.selectedMeter == undefined ? -1 : props.selectedMeter.ID); } }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SelectMeter);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db25maWd1cmF0aW9uL0NvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db25maWd1cmF0aW9uL0NvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29uZmlndXJhdGlvbi9Db25maWd1cmF0aW9uRmlsZXMudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvQ2hhbmdlT3ZlcnZpZXcvQWN0aW9uSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NoYW5nZU92ZXJ2aWV3L0FjdGlvbkxpc3QudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvQ2hhbmdlT3ZlcnZpZXcvQ2hhbmdlT3ZlcnZpZXdQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NoYW5nZU92ZXJ2aWV3L0ZpZWxkVmFsdWVzLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NoYW5nZU92ZXJ2aWV3L1JlY29yZERldGFpbC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9SZXNvbHZlUmVjb3JkLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NvbW1vbi9CYXNlQ29uZmlnV2luZG93LnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NvbW1vbi9NYW51YWxBY3Rpb24udHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJPdmVydmlldy9Eb3dsb2FkRmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9NZXRlck92ZXJ2aWV3L01ldGVyRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyT3ZlcnZpZXcvTWV0ZXJPdmVydmlld1BhZ2UudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJPdmVydmlldy9SZWNvcmRMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyV2l6emFyZC9CYXNlQ29uZmlnV2luZG93LnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyV2l6emFyZC9GaWxlUGFyc2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyV2l6emFyZC9OZXdNZXRlcldpenphcmQudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJXaXp6YXJkL1NlbGVjdE1ldGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RyxtQ0FBbUM7QUFDbkMsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RTtBQUVlO0FBQ2xCO0FBQ2tCO0FBRVE7QUFDWTtBQUNWO0FBQ3lCO0FBS2pGLElBQU0sY0FBYyxHQUFnQztJQUNoRCxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ3BELEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDaEQsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Q0FDM0UsQ0FBQztBQUVGLElBQU0sb0JBQW9CLEdBQXFCLFVBQUMsS0FBSztJQUNqRCxJQUFJLE9BQU8sR0FBRyxtRUFBVSxFQUFFLENBQUM7SUFHckIsa0ZBQXNHLEVBQXJHLHNCQUFjLEVBQUUseUJBQXFGLENBQUM7SUFDdkcsc0VBQTZFLEVBQTVFLGVBQU8sRUFBRSxrQkFBbUUsQ0FBQztJQUU5RSxzRUFBdUQsRUFBdEQsWUFBSSxFQUFFLGVBQWdELENBQUM7SUFDeEQscUZBQXFFLEVBQXBFLGlCQUFTLEVBQUUsb0JBQXlELENBQUM7SUFDdEUseUVBQTBELEVBQXpELGlCQUFTLEVBQUUsb0JBQThDLENBQUM7SUFFM0QsMEVBQTRFLEVBQTNFLG1CQUFXLEVBQUUsc0JBQThELENBQUM7SUFFbkYsK0NBQWUsQ0FBQztRQUNaLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQixJQUFJLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztRQUN6QixPQUFPLGNBQVEsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSTtZQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVuQywrQ0FBZSxDQUFDO1FBQ1osSUFBSSxNQUFNLEdBQUcsbUJBQW1CLEVBQUUsQ0FBQztRQUVuQyxPQUFPO1lBQ0gsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdDLENBQUM7SUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHUCxTQUFTLFNBQVM7UUFDZCxJQUFJLE1BQU0sR0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pCLElBQUksRUFBRSxNQUFNO1lBQ1osR0FBRyxFQUFLLFFBQVEseUNBQXNDO1lBQ3RELFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsUUFBUSxFQUFFLE1BQU07WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDO1lBQ3JGLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBdUI7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2QsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVMsbUJBQW1CO1FBQ3hCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSwrQ0FBNEM7WUFDNUQsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsU0FBUyxXQUFXLENBQUMsSUFBWTtZQUM3QixJQUFJLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFNBQVM7Z0JBQ3BHLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQ3pCLE9BQU87Z0JBQ0gsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFFO2FBQzFEO1FBQ0QsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUE4QjtZQUN2QyxJQUFJLE9BQU8sR0FBRyw4Q0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFJLElBQUksUUFDeEQsV0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUMxRSxHQUYyRCxDQUUzRCxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6QixpQkFBaUIsQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBSUQsU0FBUyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUc7UUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUcsY0FBYyxFQUFFLE1BQU0sRUFBRSw4QkFBOEIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDL0gsQ0FBQztJQUVELE9BQU8sQ0FDSCw2REFBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7UUFDekMsb0RBQUMseUVBQVMsSUFDTixXQUFXLEVBQUUsY0FBYyxFQUMzQixTQUFTLEVBQUUsVUFBQyxJQUFJLElBQUssaUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBaEIsQ0FBZ0IsRUFDckMsU0FBUyxFQUFFLE1BQU0sRUFDakIsY0FBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFDcEUsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsUUFBUSxFQUNmLE9BQU8sRUFBRSxVQUFDLFVBQVUsRUFBRSxLQUFLO2dCQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztvQkFDekUsT0FBTyxjQUFRLENBQUMsQ0FBQztnQkFFckIsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ1osSUFBSSxFQUFFLEtBQUs7b0JBQ1gsR0FBRyxFQUFLLFFBQVEsNEJBQXVCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBTztvQkFDNUQsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRSxJQUFJO2lCQUNkLENBQUMsQ0FBQztnQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxpQkFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBSSxJQUFJLFFBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXBELENBQW9ELENBQUMsQ0FBQyxFQUEvRSxDQUErRSxDQUFDO2dCQUNqRyxPQUFPLGNBQVEsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLENBQUMsRUFDRCxNQUFNLEVBQUUsV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsb0RBQUMsMkVBQVcsSUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FFMUY7UUFFWiw2REFBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRTtZQUN4RCw2REFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQztnQkFDbkQsNkRBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBRTtvQkFDbkUsb0RBQUMsZ0VBQUssSUFDRixJQUFJLEVBQUU7NEJBQ0YsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTs0QkFDakcsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTs0QkFDM0YsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTs0QkFDdkY7Z0NBQ0ksR0FBRyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSztvQ0FDckksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO3dDQUFFLE9BQU8sRUFBRSxDQUFDO29DQUNwRCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0NBQzdCLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDO29DQUNuQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztvQ0FFbEMsSUFBSSxJQUFJLEdBQUcsQ0FBQzt3Q0FDUixLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxLQUFLLENBQUM7eUNBQ2hDLElBQUksSUFBSSxHQUFHLENBQUM7d0NBQ2IsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsUUFBUSxDQUFDO3lDQUNuQyxJQUFJLElBQUksR0FBRyxFQUFFO3dDQUNkLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQ0FFeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO2dDQUMzQyxDQUFDOzZCQUNKOzRCQUNELEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO3lCQUV2RyxFQUNELFVBQVUsRUFBQyxtQkFBbUIsRUFDOUIsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUUsU0FBUyxFQUNwQixTQUFTLEVBQUUsU0FBUyxFQUNwQixNQUFNLEVBQUUsVUFBQyxDQUFDOzRCQUNOLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0NBQ3BCLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzZCQUM1QjtpQ0FDSTtnQ0FDRCxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzZCQUN2Qjt3QkFDTCxDQUFDLEVBQ0QsT0FBTyxFQUFFLFlBQVksRUFDckIsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUMxRixVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDckcsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN4RixRQUFRLEVBQUUsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUE3QixDQUE2QixHQUNuRCxDQUNBO2dCQUNOLDZEQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUcsU0FBUyxFQUFFLFFBQVEsRUFBRTtvQkFDL0Ysb0RBQUMsMkRBQWtCLElBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUk7b0JBQ3hFLG9EQUFDLGlFQUF3QixJQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFJO29CQUM5RSxvREFBQyxvRUFBVSxJQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxHQUFHLENBQzlCLENBRUosQ0FDSixDQUVKLENBQ1Q7QUFDTCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7RUFVRTtBQUVhLG1GQUFvQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDaE9wQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FBd0c7QUFDeEcsdUNBQXVDO0FBQ3ZDLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFEO0FBQ3BCO0FBQ29CO0FBRVU7QUFFeEQsSUFBTSx3QkFBd0IsR0FBRyxVQUFDLEtBQTRDO0lBQzFFLElBQUksT0FBTyxHQUFHLG1FQUFVLEVBQUUsQ0FBQztJQUVyQiw2RUFBOEQsRUFBN0QsbUJBQVcsRUFBRSxzQkFBZ0QsQ0FBQztJQUMvRCwwRkFBbUYsRUFBbEYsaUJBQVMsRUFBRSxvQkFBdUUsQ0FBQztJQUNwRixnRkFBMEQsRUFBekQsaUJBQVMsRUFBRSxvQkFBOEMsQ0FBQztJQUUzRCw2RUFBNEMsRUFBM0MsWUFBSSxFQUFFLGVBQXFDLENBQUM7SUFDN0MsZ0ZBQWdELEVBQS9DLFlBQUksRUFBRSxlQUF5QyxDQUFDO0lBRWpELGdGQUE4RCxFQUE3RCxtQkFBVyxFQUFFLHNCQUFnRCxDQUFDO0lBRXJFLDRDQUFLLENBQUMsU0FBUyxDQUFDO1FBQ1osSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksU0FBUztZQUFFLE9BQU87UUFFaEUsSUFBSSxPQUFPLEdBQUcsY0FBYyxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxxQkFBYyxDQUFDLElBQUksQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFFN0MsT0FBTztZQUNILElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxTQUFTO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUdoRSxTQUFTLGNBQWM7UUFDbkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSxvQ0FBK0IsS0FBSyxDQUFDLE9BQU8sU0FBSSxLQUFLLENBQUMsUUFBUSxTQUFJLElBQUksU0FBSSxTQUFTLFVBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxDQUFFO1lBQ3hILFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxTQUFTLFFBQVEsQ0FBQyxJQUFZO1FBQzFCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVqQyxJQUFJLElBQUksR0FBRyxDQUFDO1lBQ1IsT0FBTyxLQUFLLENBQUM7YUFDWixJQUFJLElBQUksR0FBRyxDQUFDO1lBQ2IsT0FBTyxRQUFRLENBQUM7YUFDZixJQUFJLElBQUksR0FBRyxFQUFFO1lBQ2QsT0FBTyxRQUFRLENBQUM7O1lBRWhCLE9BQU8sSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxTQUFTO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDckUsT0FBTyxDQUNQO1FBQ0ksb0VBQUssU0FBUyxFQUFDLE1BQU07WUFDakIsb0VBQUssU0FBUyxFQUFDLGFBQWE7Z0JBQ3hCLG9FQUFLLFNBQVMsRUFBQyxLQUFLO29CQUNoQixvRUFBSyxTQUFTLEVBQUMsS0FBSzt3QkFBRSxLQUFLLENBQUMsUUFBUTtvQ0FBZ0I7b0JBQ3BELG9FQUFLLFNBQVMsRUFBQyxLQUFLO3dCQUNoQixvRUFBSyxTQUFTLEVBQUMsWUFBWTs0QkFDdkIsc0VBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxjQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBZCxDQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUk7NEJBQ3pLLHNFQUFPLFNBQVMsRUFBQyxrQkFBa0IsNkJBQWdDLENBQ2pFLENBQ0osQ0FDSixDQUNKO1lBQ0Ysb0VBQUssU0FBUyxFQUFDLFdBQVc7Z0JBQ3RCLDJEQUFDLGdFQUFLLElBRUYsSUFBSSxFQUFFO3dCQUNGOzRCQUNJLEdBQUcsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLO2dDQUNuSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dDQUN4RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7NEJBQ2xFLENBQUM7eUJBQ0o7d0JBQ0QsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTt3QkFDdEc7NEJBQ0ksR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFOzRCQUMzRixPQUFPLEVBQUUsVUFBQyxJQUFJLElBQUssOEVBQVEsU0FBUyxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFNLENBQUMsRUFBQyxDQUFDO2dDQUFFO29DQUFNLGtFQUFHLFNBQVMsRUFBQyxZQUFZLEdBQUssQ0FBTyxDQUFTLEVBQXBMLENBQW9MO3lCQUMxTTt3QkFDRDs0QkFDSSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7NEJBQ3ZGLE9BQU8sRUFBRSxVQUFDLElBQUksSUFBSyw4RUFBUSxTQUFTLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBTyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUFFO29DQUFNLGtFQUFHLFNBQVMsRUFBQyxXQUFXLEdBQUssQ0FBTyxDQUFTLEVBQXhLLENBQXdLO3lCQUM5TDtxQkFDSixFQUVELFVBQVUsRUFBQyxtQkFBbUIsRUFDOUIsSUFBSSxFQUFFLFdBQVcsRUFDakIsU0FBUyxFQUFFLFNBQVMsRUFDcEIsU0FBUyxFQUFFLFNBQVMsRUFDcEIsTUFBTSxFQUFFLFVBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTTs0QkFDdEMsT0FBTzt3QkFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUzs0QkFDbEIsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7NkJBQ3hCOzRCQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbkIsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDdkI7b0JBRUwsQ0FBQyxFQUNELE9BQU8sRUFBRSxjQUFRLENBQUMsRUFDbEIsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUMxRixVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hGLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDeEYsUUFBUSxFQUFFLFVBQUMsSUFBSSxJQUFLLFlBQUssRUFBTCxDQUFLLEdBQzNCLENBQ0osQ0FDQTtRQUNOLDJEQUFDLHFFQUFLLElBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGNBQVEsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSTtZQUM1SSxvRUFBSyxTQUFTLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxFQUFFLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFRLENBQ3BMLENBRVQsQ0FFTixDQUFDO0FBQ04sQ0FBQztBQUVjLHVGQUF3QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSnhDLHdHQUF3RztBQUN4RyxpQ0FBaUM7QUFDakMsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUMxRDtBQUNwQjtBQUNvQjtBQUk5QyxJQUFNLGtCQUFrQixHQUFHLFVBQUMsS0FBNEM7SUFDcEUsSUFBSSxPQUFPLEdBQUcsbUVBQVUsRUFBRSxDQUFDO0lBRXJCLDZFQUEyRSxFQUExRSxtQkFBVyxFQUFFLHNCQUE2RCxDQUFDO0lBQzVFLDBGQUFtRixFQUFsRixpQkFBUyxFQUFFLG9CQUF1RSxDQUFDO0lBQ3BGLGdGQUEwRCxFQUF6RCxpQkFBUyxFQUFFLG9CQUE4QyxDQUFDO0lBRWpFLDRDQUFLLENBQUMsU0FBUyxDQUFDO1FBQ1osSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUFFLE9BQU87UUFFakMsSUFBSSxPQUFPLEdBQUcsY0FBYyxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxxQkFBYyxDQUFDLElBQUksQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFFN0MsT0FBTztZQUNILElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxTQUFTO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUcxQyxTQUFTLGNBQWM7UUFDbkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSxvQ0FBK0IsS0FBSyxDQUFDLE9BQU8sb0JBQWUsU0FBUyxVQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7WUFDM0csV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFNBQVMsUUFBUSxDQUFDLElBQVk7UUFDMUIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWpDLElBQUksSUFBSSxHQUFHLENBQUM7WUFDVCxPQUFPLEtBQUssQ0FBQzthQUNYLElBQUksSUFBSSxHQUFHLENBQUM7WUFDYixPQUFPLFFBQVEsQ0FBQzthQUNmLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDZCxPQUFPLFFBQVEsQ0FBQzs7WUFFaEIsT0FBTyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELFNBQVMsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHO1FBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFHLGNBQWMsRUFBRSxNQUFNLEVBQUUsaUNBQStCLEtBQUssQ0FBQyxPQUFPLGtCQUFhLFFBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDakosQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN0QyxPQUFPLENBQ0gsb0VBQUssU0FBUyxFQUFDLE1BQU07UUFDakIsb0VBQUssU0FBUyxFQUFDLGFBQWEsMkJBQTJCO1FBQ3ZELG9FQUFLLFNBQVMsRUFBQyxXQUFXO1lBQ3RCLDJEQUFDLGdFQUFLLElBRUYsSUFBSSxFQUFFO29CQUNGLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQzdGO3dCQUNJLEdBQUcsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLOzRCQUNuSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUN4RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7d0JBQ2xFLENBQUM7cUJBQ0E7b0JBQ0wsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtpQkFDekcsRUFFRCxVQUFVLEVBQUMsbUJBQW1CLEVBQzlCLElBQUksRUFBRSxXQUFXLEVBQ2pCLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLE1BQU0sRUFBRSxVQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLFNBQVM7d0JBQ2xCLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUN4Qjt3QkFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ25CLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3ZCO2dCQUVMLENBQUMsRUFDRCxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUMsR0FBRyxJQUFLLG1CQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQXBDLENBQW9DLEVBQzNELFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDMUYsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN4RixRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hGLFFBQVEsRUFBRSxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQS9CLENBQStCLEdBQ3JELENBQ0EsQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBRWMsaUZBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN2SGxDO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RywyQkFBMkI7QUFDM0IsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDJCQUEyQjtBQUMzQixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUV6RTtBQVMvQixJQUFNLFlBQVksR0FBRyxVQUFDLEtBQWE7SUFDL0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDO0lBQzlDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztJQUMxQyxJQUFJLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVsQyxTQUFTLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7SUFDM0MsQ0FBQztJQUVELFNBQVMsUUFBUSxDQUFDLE9BQWU7UUFDN0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxFQUFFLElBQUksT0FBTyxFQUFsQixDQUFrQixDQUFDO1FBRTNELE9BQU8sQ0FBQyw4REFBTSxTQUFTLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUcsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBUSxDQUFDO0lBQzlOLENBQUM7SUFFRCxPQUFPLENBQ0g7UUFDSyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDN0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDeEQsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNoRSxRQUFRLEVBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUM3QyxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMzRSxDQUFDLENBQUM7QUFDaEIsQ0FBQztBQUVjLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMxRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4Ryx5QkFBeUI7QUFDekIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDJCQUEyQjtBQUMzQixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekU7QUFDZTtBQUVBO0FBRUo7QUFDRjtBQU94QyxJQUFNLFVBQVUsR0FBRyxVQUFDLEtBQWE7SUFDN0IsSUFBTSxPQUFPLEdBQUcsbUVBQVUsRUFBRSxDQUFDO0lBRXZCLHNFQUF1RSxFQUF0RSxrQkFBVSxFQUFFLHFCQUEwRCxDQUFDO0lBQ3hFLHlFQUEwRCxFQUF6RCxpQkFBUyxFQUFFLG9CQUE4QyxDQUFDO0lBRTNELHNFQUFnRSxFQUEvRCxzQkFBYyxFQUFFLHlCQUErQyxDQUFDO0lBQ2pFLHlFQUE0RCxFQUEzRCxrQkFBVSxFQUFFLHFCQUErQyxDQUFDO0lBRW5FLCtDQUFlLENBQUM7UUFDWixJQUFJLGdCQUFnQixHQUFHLFVBQVUsRUFBRSxDQUFDO1FBRXBDLE9BQU87WUFDSCxJQUFJLGdCQUFnQixJQUFJLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLElBQUksSUFBSTtnQkFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3RixDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRWhDLFNBQVMsVUFBVTtRQUNmLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUV0QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsR0FBRyxFQUFLLFFBQVEsK0JBQTBCLEtBQUssQ0FBQyxRQUFRLG9CQUFjLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFO1lBQ3hGLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUEyQjtZQUNwQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBR0QsT0FBTyxDQUNIO1FBQ0ssY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsb0RBQUMsb0RBQVcsSUFBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGFBQWEsR0FBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQy9HLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLG9EQUFDLGdFQUFLLElBQ0YsSUFBSSxFQUFFO29CQUNGO3dCQUNJLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUssMkRBQUMsVUFBVSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQUMsQ0FBQyxJQUFNLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsR0FBSSxFQUF2SCxDQUF1SDtxQkFDeFE7aUJBRUosRUFDRCxVQUFVLEVBQUMsbUJBQW1CLEVBQzlCLElBQUksRUFBRSxVQUFVLEVBQ2hCLFNBQVMsRUFBRSxJQUFJLEVBQ2YsU0FBUyxFQUFFLFNBQVMsRUFDcEIsTUFBTSxFQUFFLFVBQUMsQ0FBQyxJQUFPLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFDbkMsT0FBTyxFQUFFLFVBQUMsQ0FBQyxJQUFNLENBQUMsRUFDbEIsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUMxRixVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDekcsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN4RixRQUFRLEVBQUUsVUFBQyxJQUFJLElBQUssWUFBSyxFQUFMLENBQUssR0FDM0I7WUFDVixDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1osQ0FDTjtBQUNMLENBQUM7QUFFRCxJQUFNLFVBQVUsR0FBRyxVQUFDLEtBQXlHO0lBQ3pILElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQztJQUVqRCxPQUFPLENBQ0gsNkRBQUssU0FBUyxFQUFDLE1BQU07UUFDakIsNkRBQUssU0FBUyxFQUFDLGFBQWE7WUFDeEIsb0RBQUMscURBQVksSUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxHQUFJLENBQzVFO1FBQ04sNkRBQUssU0FBUyxFQUFDLFdBQVc7WUFDdEIsMkRBQUcsU0FBUyxFQUFDLFdBQVcsSUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSztZQUM3QyxTQUFTLENBQUMsQ0FBQyxDQUFDLDJEQUFJLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBRSxjQUFRLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBd0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNsSyxDQUNKLENBQ0w7QUFDVCxDQUFDO0FBSWMseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RIMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FBd0c7QUFDeEcsbUNBQW1DO0FBQ25DLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFO0FBRWU7QUFHSjtBQUNKO0FBTXRDLElBQU0sd0JBQXdCLEdBQUcsVUFBQyxLQUFnRTtJQUM5RixJQUFJLE9BQU8sR0FBRyxtRUFBVSxFQUFFLENBQUM7SUFFckIsc0VBQXVFLEVBQXRFLGtCQUFVLEVBQUUscUJBQTBELENBQUM7SUFFOUUsK0NBQWUsQ0FBQztRQUNaLElBQUksZ0JBQWdCLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFFbkMsT0FBTztZQUNILElBQUksZ0JBQWdCLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakUsQ0FBQztJQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLFNBQVMsU0FBUztRQUNkLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSx5Q0FBc0M7WUFDdEQsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQTJCO1lBQ3BDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFHRCxPQUFPLENBQ0gsNkRBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1FBQ3pDLDZEQUFLLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDekIsNkRBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUU7Z0JBQ3RELG9EQUFDLHFEQUFZLElBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUM5RDtZQUNOLDZEQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtnQkFDckMsNkRBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO29CQUNwRixvREFBQyxtREFBVSxJQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUksQ0FDN0QsQ0FDSixDQUVKLENBQ0osQ0FDVDtBQUNMLENBQUM7QUFFYyx1RkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7OztBQ25GeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLHlCQUF5QjtBQUN6QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsMkJBQTJCO0FBQzNCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RTtBQUNlO0FBR1U7QUFDTjtBQVFsRCxJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQWE7SUFFeEIsc0VBQXFFLEVBQXBFLGNBQU0sRUFBRSxpQkFBNEQsQ0FBQztJQUV0RSwrRUFBeUQsRUFBeEQsY0FBTSxFQUFFLGlCQUFnRCxDQUFDO0lBQzFELHlFQUEwRCxFQUF6RCxpQkFBUyxFQUFFLG9CQUE4QyxDQUFDO0lBRWpFLCtDQUFlLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQztRQUNwQixPQUFPLGNBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSTtZQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUd2RCxTQUFTLFNBQVM7UUFDZCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLFNBQVM7WUFDM0IsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ1osSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsR0FBRyxFQUFLLFFBQVEsbUNBQThCLEtBQUssQ0FBQyxRQUFRLFNBQUksTUFBTSxVQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7Z0JBQzdGLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQzs7WUFFSCxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDWixJQUFJLEVBQUUsS0FBSztnQkFDWCxHQUFHLEVBQUssUUFBUSwyQ0FBc0MsS0FBSyxDQUFDLFFBQVEsU0FBSSxNQUFNLFVBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRTtnQkFDckcsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1FBRVAsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQXNDO1lBQy9DLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFQyxPQUFPLENBQ0g7UUFDSSxvREFBQyxxRUFBSyxJQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFDLE9BQU8sSUFBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQyxPQUFPO1lBRTlOLDZEQUFLLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUU7Z0JBQ2pGLG9EQUFDLGdFQUFLLElBQ0UsSUFBSSxFQUFFO3dCQUNGLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUssMkRBQUMsK0RBQUssSUFBNEIsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFNLFdBQUksRUFBSixDQUFJLEdBQUksRUFBN0ksQ0FBNkksRUFBRTt3QkFDL1EsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSywyREFBQywrREFBSyxJQUE0QixNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQU0sV0FBSSxFQUFKLENBQUksR0FBSSxFQUF6SSxDQUF5SSxFQUFFO3dCQUN2UTs0QkFDSSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUs7Z0NBQU8sT0FBTyxDQUMvSCw2REFBSyxLQUFLLEVBQUU7d0NBQ1IsWUFBWSxFQUFFLFFBQVE7d0NBQ3RCLE9BQU8sRUFBRSxnQkFBZ0I7d0NBQ3pCLFFBQVEsRUFBRSxRQUFRO3dDQUN0QixVQUFVLEVBQUUsR0FBRztxQ0FBRTtvQ0FDYiwyREFBRyxTQUFTLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLGlCQUFjLE1BQU0sR0FBSyxDQUN6RyxDQUFDOzRCQUNYLENBQUM7eUJBQ0o7cUJBQ2hCLEVBQ1MsVUFBVSxFQUFDLG1CQUFtQixFQUM5QixJQUFJLEVBQUUsTUFBTSxFQUNaLFNBQVMsRUFBRSxNQUFNLEVBQzNCLFNBQVMsRUFBRSxTQUFTLEVBQ1YsTUFBTSxFQUFFLFVBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTTs0QkFDZixZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7NEJBRXpCLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsRUFDWCxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQU8sQ0FBQyxFQUNuQixVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQzFGLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN6RyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hGLFFBQVEsRUFBRSxVQUFDLElBQUksSUFBSyxZQUFLLEVBQUwsQ0FBSyxHQUNuQixDQUNBLENBQ0YsQ0FDVCxDQUNOO0FBQ0wsQ0FBQztBQUVjLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN4SDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RywyQkFBMkI7QUFDM0IsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDJCQUEyQjtBQUMzQixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekU7QUFFZTtBQUdJO0FBQ1Y7QUFDZ0I7QUFFWjtBQUNGO0FBQ2dCO0FBTTFELElBQU0sWUFBWSxHQUFHLFVBQUMsS0FBYTtJQUMvQixJQUFNLE9BQU8sR0FBRyxtRUFBVSxFQUFFLENBQUM7SUFFdkIsNkVBQStELEVBQTlELGNBQU0sRUFBRSxpQkFBc0QsQ0FBQztJQUNoRSw2RUFBNEQsRUFBM0QsYUFBSyxFQUFFLGdCQUFvRCxDQUFDO0lBQzdELDZFQUErRCxFQUE5RCxjQUFNLEVBQUUsaUJBQXNELENBQUM7SUFDaEUsNkVBQTJFLEVBQTFFLGtCQUFVLEVBQUUscUJBQThELENBQUM7SUFFNUUsc0VBQXNGLEVBQXJGLG9CQUFZLEVBQUUsdUJBQXVFLENBQUM7SUFFdkYseUVBQXNELEVBQXJELGVBQU8sRUFBRSxrQkFBNEMsQ0FBQztJQUN2RCx5RUFBc0QsRUFBckQsZUFBTyxFQUFFLGtCQUE0QyxDQUFDO0lBQ3ZELHlFQUE4RCxFQUE3RCxtQkFBVyxFQUFFLHNCQUFnRCxDQUFDO0lBQy9ELHlFQUFzRCxFQUFyRCxlQUFPLEVBQUUsa0JBQTRDLENBQUM7SUFDdkQseUVBQXdELEVBQXZELGdCQUFRLEVBQUUsbUJBQTZDLENBQUM7SUFDekQseUVBQW9FLEVBQW5FLHNCQUFjLEVBQUUseUJBQW1ELENBQUM7SUFFckUseUVBQTRELEVBQTNELGtCQUFVLEVBQUUscUJBQStDLENBQUM7SUFFbkUsK0NBQWUsQ0FBQztRQUNaLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFN0MsT0FBTztZQUNILElBQUksWUFBWSxJQUFJLElBQUksSUFBSSxZQUFZLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQUUsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pGLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVyQiwrQ0FBZSxDQUFDO1FBQ1osSUFBSSxnQkFBZ0IsR0FBRyxjQUFjLEVBQUUsQ0FBQztRQUV4QyxPQUFPO1lBQ0gsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLElBQUksZ0JBQWdCLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0YsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXJCLCtDQUFlLENBQUM7UUFDWixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakksSUFBSSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE9BQU87WUFDSCxJQUFJLFdBQVcsSUFBSSxJQUFJLElBQUksV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxRSxJQUFJLGdCQUFnQixJQUFJLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLElBQUksSUFBSTtnQkFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6RixJQUFJLFlBQVksSUFBSSxJQUFJLElBQUksWUFBWSxDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqRixDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUViLFNBQVMsY0FBYztRQUNuQixJQUFJLE1BQU0sQ0FBQztRQUNYLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1osSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSw0Q0FBdUMsS0FBSyxDQUFDLFFBQVU7WUFDdkUsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQXNDO1lBQzNDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFHRCxTQUFTLFNBQVMsQ0FBQyxFQUFVO1FBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzFCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSw2Q0FBd0MsRUFBSTtZQUM1RCxXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBb0I7WUFDN0IsSUFBSSxJQUFJLElBQUksSUFBSTtnQkFDWixPQUFNO1lBRVYsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBR0gsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVMsYUFBYSxDQUFDLEVBQVU7UUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEdBQUcsRUFBSyxRQUFRLG1DQUE4QixFQUFJO1lBQ2xELFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFvQjtZQUM3QixJQUFJLElBQUksSUFBSSxJQUFJO2dCQUNaLE9BQU07WUFFVixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFHSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUyxRQUFRLENBQUMsRUFBVTtRQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUMxQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsR0FBRyxFQUFLLFFBQVEsNENBQXVDLEVBQUk7WUFDM0QsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQW1CO1lBQzVCLElBQUksSUFBSSxJQUFJLElBQUk7Z0JBQ1osT0FBTTtZQUVWLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUdILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLGFBQWEsQ0FBQyxFQUFVO1FBQzdCLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzFCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSx1Q0FBa0MsRUFBSTtZQUN0RCxXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBd0I7WUFDakMsSUFBSSxJQUFJLElBQUksSUFBSTtnQkFDWixPQUFNO1lBQ1YsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7SUFDM0MsQ0FBQztJQUlELElBQUksU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUF0QixDQUFzQixDQUFDLENBQUMsQ0FBQztJQUNyRyxJQUFJLFVBQVUsR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLENBQUM7SUFFdEcsT0FBTyxDQUFDLDBHQUNILENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCO1lBQ08sNkRBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7Z0JBQ3BELG9EQUFDLFNBQVMsSUFBQyxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBSTtnQkFDakYsb0RBQUMsU0FBUyxJQUFDLEtBQUssRUFBRSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFJLENBQ2hGO1lBQ0YsNkRBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7Z0JBQ3BEOztvQkFBcUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7O29CQUFNLE1BQU0sQ0FBQyxJQUFJLENBQU87Z0JBQ3JFOztvQkFBMEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBTztnQkFDM0Q7O29CQUFvQixNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxvREFBQyxxREFBWSxJQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssR0FBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO3dCQUFRLENBQ3RJO1lBQ0QsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsNkRBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7b0JBQ3BELGdFQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLDJCQUEyQixFQUFDLE9BQU8sRUFBRSxjQUFNLHdCQUFpQixDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QiwyQkFBK0I7b0JBQ2pJLGdFQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLDJCQUEyQixFQUFDLE9BQU8sRUFBRSxjQUFNLG9CQUFhLENBQUMsSUFBSSxDQUFDLEVBQW5CLENBQW1CLDZCQUFrQyxDQUM5SCxDQUNUO1lBQ0QsNkRBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7Z0JBQ3BELGdFQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLHdCQUF3QixFQUFDLE9BQU8sRUFBRSxjQUFNLGtCQUFXLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLDRCQUFnQztnQkFDeEgsVUFBVSxDQUFDLFdBQVcsSUFBSSxjQUFjLElBQUksVUFBVSxDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsQ0FBQztvQkFDL0UsZ0VBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsd0JBQXdCLEVBQUMsT0FBTyxFQUFFLGNBQU0saUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBaEIsQ0FBZ0IscUNBQXlDO29CQUNySSxDQUFDLENBQUMsSUFBSTtnQkFDTCxVQUFVLENBQUMsV0FBVyxJQUFJLGtCQUFrQixDQUFDLENBQUM7b0JBQzNDLGdFQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLDJCQUEyQixFQUFDLE9BQU8sRUFBRSxjQUFNLGlCQUFVLENBQUMsSUFBSSxDQUFDLEVBQWhCLENBQWdCLDBCQUE4QjtvQkFDN0gsQ0FBQyxDQUFDLElBQUk7Z0JBQ0wsVUFBVSxDQUFDLFdBQVcsSUFBSSxjQUFjLENBQUMsQ0FBQztvQkFDdkMsZ0VBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsMkJBQTJCLEVBQUMsT0FBTyxFQUFFLGNBQU0saUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBaEIsQ0FBZ0IscUJBQXlCO29CQUN4SCxDQUFDLENBQUMsSUFBSTtnQkFDTCxVQUFVLENBQUMsV0FBVyxJQUFJLFVBQVUsQ0FBQyxDQUFDO29CQUNuQyxnRUFBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQywyQkFBMkIsRUFBQyxPQUFPLEVBQUUsY0FBTSxxQkFBYyxDQUFDLElBQUksQ0FBQyxFQUFwQixDQUFvQiwyQ0FBK0M7b0JBQ2xKLENBQUMsQ0FBQyxJQUFJLENBQ1I7WUFFRixvREFBQyw0REFBWSxJQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxHQUFJO1lBQzdGLG9EQUFDLG9EQUFXLElBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsYUFBYSxHQUFJO1lBQ2xGLFVBQVUsQ0FBQyxXQUFXLElBQUksY0FBYyxJQUFJLFVBQVUsQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDLENBQUM7Z0JBQy9FLG9EQUFDLDREQUFZLElBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsV0FBVyxLQUFLLGVBQWUsRUFBcEMsQ0FBb0MsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDNUosQ0FBQyxDQUFDLElBQUk7WUFDTCxVQUFVLENBQUMsV0FBVyxJQUFJLGtCQUFrQixDQUFDLENBQUM7Z0JBQzNDLG9EQUFDLDREQUFZLElBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsV0FBVyxLQUFLLGNBQWMsRUFBbkMsQ0FBbUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsR0FBSTtnQkFDNUosQ0FBQyxDQUFDLElBQUk7WUFDTCxVQUFVLENBQUMsV0FBVyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUN2QyxvREFBQyw0REFBWSxJQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQS9CLENBQStCLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEdBQUc7Z0JBQ3ZKLENBQUMsQ0FBQyxJQUFJO1lBQ0wsVUFBVSxDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsQ0FBQztnQkFDbkMsb0RBQUMsc0RBQWEsSUFBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFJLElBQUksUUFBQyxJQUFJLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLGNBQWMsR0FBSTtnQkFDeEssQ0FBQyxDQUFDLElBQUk7WUFDVCxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixvREFBQyxxRUFBSyxJQUFDLEtBQUssRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxVQUFDLE9BQU8sSUFBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUMsT0FBTztvQkFDL0ssb0RBQUMsZ0VBQWdCLElBQUMsaUJBQWlCLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBSSxDQUNqRCxDQUFDLENBQ2QsQ0FDTixDQUVGLENBQUM7QUFDUixDQUFDO0FBRUQsSUFBTSxTQUFTLEdBQUcsVUFBQyxLQUEyRDtJQUMxRSxPQUFPLENBQ0gsNkRBQUssS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQztRQUN2QjtZQUNLLEtBQUssQ0FBQyxLQUFLOzJCQUNWO1FBQ04sNkRBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztZQUM3Qiw2REFBSyxLQUFLLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsS0FBSyxFQUFFLEtBQUs7b0JBQ1osTUFBTSxFQUFFLE1BQU07b0JBQ2QsVUFBVSxFQUFFLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDbEUsTUFBTSxFQUFFLFdBQVc7b0JBQ25CLFlBQVksRUFBRSxLQUFLO29CQUNuQixTQUFTLEVBQUUsUUFBUTtvQkFDbkIsVUFBVSxFQUFFLE1BQU07b0JBQ2xCLFlBQVksRUFBRSxVQUFVO29CQUN4QixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsS0FBSyxFQUFFLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDakUsV0FBVyxFQUFFLFVBQVU7aUJBQzFCOztnQkFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVc7b0JBQVE7WUFDckMsNkRBQUssS0FBSyxFQUFFO29CQUNSLFVBQVUsRUFBRSxHQUFHO29CQUNmLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxNQUFNO29CQUNkLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9FLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRTFFLE1BQU0sRUFBRSxXQUFXO29CQUNuQixZQUFZLEVBQUUsS0FBSztvQkFDbkIsU0FBUyxFQUFFLFFBQVE7b0JBQ25CLFVBQVUsRUFBRSxNQUFNO29CQUNsQixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsUUFBUSxFQUFFLFFBQVE7aUJBQ3JCOztnQkFBSSxLQUFLLENBQUMsQ0FBQzt3QkFBWSxDQUNsQixDQUNKLENBQ0w7QUFDVCxDQUFDO0FBRWMsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQzdTNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4Ryw0QkFBNEI7QUFDNUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDJCQUEyQjtBQUMzQixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFO0FBQ0g7QUFDa0I7QUFFeUM7QUFDN0I7QUFRMUQsSUFBTSxhQUFhLEdBQUcsVUFBQyxLQUFhO0lBQ2hDLElBQU0sT0FBTyxHQUFHLG1FQUFVLEVBQUUsQ0FBQztJQUV2QiwwRUFBOEMsRUFBN0MsWUFBSSxFQUFFLGVBQXVDLENBQUM7SUFDL0Msc0VBQTRDLEVBQTNDLFlBQUksRUFBRSxlQUFxQyxDQUFDO0lBQzdDLHNFQUF3RCxFQUF2RCxrQkFBVSxFQUFFLHFCQUEyQyxDQUFDO0lBQ3pELHNFQUE0RSxFQUEzRSxrQkFBVSxFQUFFLHFCQUErRCxDQUFDO0lBRTdFLDBFQUF5RSxFQUF4RSxhQUFLLEVBQUUsZ0JBQWlFLENBQUM7SUFFMUUseUVBQTBELEVBQXpELGlCQUFTLEVBQUUsb0JBQThDLENBQUM7SUFDM0QseUVBQWdFLEVBQS9ELG9CQUFZLEVBQUUsdUJBQWlELENBQUM7SUFDakUsMkVBQW9GLEVBQW5GLGtCQUFVLEVBQUUscUJBQXVFLENBQUM7SUFHM0YsK0NBQWUsQ0FBQztRQUNaLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQUksSUFBSSxnQkFBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQztZQUNKLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFNLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQztJQUNOLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRXJCLCtDQUFlLENBQUM7UUFDWixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxVQUFVLElBQUksQ0FBQyxDQUFDO1lBQ2hCLE9BQU87UUFDWCxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUN0QixPQUFPO1FBQ1gsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLFVBQVU7WUFDL0IsT0FBTztRQUNYLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUN4QixPQUFPLGNBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSTtZQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDO0lBQ2hFLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUc1QixTQUFTLE1BQU07UUFDWCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxTQUFTLFFBQVE7UUFDYixJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDaEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUNqQixJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQzNCLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Z0JBRXRCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QjthQUNJO1lBQ0QsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxVQUFVLEdBQUMsQ0FBQztnQkFDdEMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFFdEIsYUFBYSxDQUFDLFVBQUMsS0FBSyxJQUFLLFlBQUssR0FBRyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUM7U0FFM0M7SUFFTCxDQUFDO0lBRUQsU0FBUyxTQUFTLENBQUMsRUFBVTtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1gsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSxrQ0FBNkIsRUFBSTtZQUNqRCxXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7WUFDSCxJQUFJLElBQUksSUFBSSxJQUFJO2dCQUFFLE9BQU87WUFDekIsYUFBYSxDQUFDLFVBQUMsS0FBSyxJQUFLLGdCQUFJLEtBQUssR0FBRSxJQUFJLElBQWYsQ0FBZ0IsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELFNBQVMsUUFBUTtRQUNiLElBQUksSUFBSSxJQUFJLE1BQU07WUFDZCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEIsSUFBSSxVQUFVLElBQUksQ0FBQztZQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDOztZQUVmLGFBQWEsQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFLLEdBQUcsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxTQUFTLFFBQVE7UUFDYixJQUFJLElBQUksSUFBSSxNQUFNO1lBQ2QsT0FBTyxlQUFlOztZQUV0QixPQUFPLDJCQUEyQjtJQUMxQyxDQUFDO0lBSUQsU0FBUyxhQUFhO1FBQ2xCLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDdEMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUN0QixPQUFPLElBQUk7U0FDZDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDWCxJQUFJLEVBQUUsTUFBTTtZQUNaLEdBQUcsRUFBSyxRQUFRLG9DQUErQixLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQU87WUFDbEYsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUF3QixDQUFDO1lBQ25FLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7WUFDUCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJO2dCQUNyQixhQUFhLENBQUMsT0FBTyxDQUFDOztnQkFFdEIsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUM5QixDQUFDLENBQUM7UUFFRixPQUFPLENBQUMsQ0FBQztJQUViLENBQUM7SUFJRCxTQUFTLElBQUk7UUFFVCxVQUFVLENBQUMsT0FBTyxDQUFDLGNBQUksSUFBSSxRQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksRUFBRSxPQUFPO1lBQ2IsR0FBRyxFQUFLLFFBQVEsaUNBQThCO1lBQzlDLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzFCLFFBQVEsRUFBRSxNQUFNO1lBQ2pCLEtBQUssRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLEVBUnlCLENBUXpCLENBQUM7UUFFSCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUssUUFBUSwrQkFBNEI7WUFDNUMsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsV0FBVyxJQUFJLGVBQWUsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBb0IsQ0FBQztZQUMvSixRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksY0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBYixDQUFhLENBQUM7UUFFOUIsTUFBTSxFQUFFLENBQUM7SUFFYixDQUFDO0lBRUQsU0FBUyxRQUFRLENBQUMsS0FBYSxFQUFFLE1BQTJCO1FBQ3hELElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNYLE9BQU07UUFDVixhQUFhLENBQUMsVUFBQyxHQUFHLElBQU8sSUFBSSxNQUFNLEdBQUcsZ0RBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBR0QsSUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1UCxPQUFPLENBQ0g7UUFDSSxvREFBQyxxRUFBSyxJQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUN4RixLQUFLLEVBQUUsSUFBSSxFQUNYLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQy9ELGVBQWUsRUFBRSxhQUFhLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQ2xFLFdBQVcsRUFBRSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQ3pFLFFBQVEsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQU8sSUFBSSxDQUFDO2dCQUFFLFFBQVEsRUFBRSxDQUFDO2lCQUFNLElBQUksQ0FBQztnQkFBRSxRQUFRLEVBQUUsQ0FBQzs7Z0JBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUUxRixJQUFJLElBQUksTUFBTSxDQUFDLENBQUM7WUFDYiw2REFBSyxTQUFTLEVBQUMsWUFBWTtnQkFDdkIsMkVBQW9CO2dCQUNwQixrRUFBVSxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssY0FBTyxDQUFFLENBQUMsQ0FBQyxNQUFjLENBQUMsS0FBSyxDQUFDLEVBQWhDLENBQWdDLEdBQWEsQ0FDckgsQ0FBQyxDQUFDO1lBQ1Isb0RBQUMsZUFBZSxJQUFDLFNBQVMsRUFBRSxVQUFVLElBQUksT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBSyxlQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUE1QixDQUE0QixFQUFFLFlBQVksRUFBRSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFJLENBRWpQO1FBQ1Isb0RBQUMsdUVBQU8sSUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLFNBQVMsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSTtZQUN0RyxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQUksMkRBQUcsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFDLDBCQUEwQixHQUFLO3NDQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3JLLElBQUksSUFBSSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUM7O2dCQUFJLDJEQUFHLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBQywwQkFBMEIsR0FBSzt1Q0FBd0IsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUMvUSxJQUFJLElBQUksUUFBUSxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUFJLDJEQUFHLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBQywwQkFBMEIsR0FBSztvREFBcUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN0UyxJQUFJLElBQUksUUFBUSxJQUFJLFVBQVUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLG9EQUFDLDJFQUFXLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEdBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNoSCxJQUFJLElBQUksUUFBUSxJQUFJLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDOztnQkFBSSwyREFBRyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUMsMEJBQTBCLEdBQUs7aUZBQWtFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDbE47UUFDVixvREFBQyx1RUFBTyxJQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLHFGQUFxRixFQUFFLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBTyxJQUFJLENBQUM7Z0JBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEdBQUk7UUFDeE0sb0RBQUMsdUVBQU8sSUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSw2SEFBNkgsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBTyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQ3JQLENBQUM7QUFDWixDQUFDO0FBRUQsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFpSjtJQUV0SyxJQUFNLGdCQUFnQixHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEcsSUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEksSUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRTVHLFNBQVMsVUFBVTtRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEosQ0FBQztJQUVELFNBQVMsVUFBVTtRQUNmLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSTtRQUNqRCxPQUFPLElBQUksQ0FBQztJQUVoQixPQUFPLENBQUM7UUFDSixvREFBQywrREFBSyxJQUE0QixNQUFNLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBTSxZQUFLLENBQUMsU0FBUyxFQUFmLENBQWUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGdEQUFnRCxHQUFJO1FBQ3JPLCtEQUFLO1FBQ0wsb0RBQUMsZ0VBQU0sSUFBc0IsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBTSxDQUFDLEdBQUk7UUFDaEssb0RBQUMsK0RBQUssSUFBc0IsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQU0sV0FBSSxFQUFKLENBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEdBQUk7UUFDeEksb0RBQUMsZ0VBQU0sSUFBc0IsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLEdBQUk7UUFDL00sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLG9EQUFDLGVBQWUsSUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLEdBQUksQ0FBQyxDQUFDO1lBQ3JILG9EQUFDLCtEQUFLLElBQXNCLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxJQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFNLGlCQUFVLEVBQUUsRUFBWixDQUFZLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsNkNBQTZDLEdBQUksQ0FDblIsQ0FDRixDQUFDO0FBQ1IsQ0FBQztBQUVELElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBbUY7SUFDbEcsc0VBQStELEVBQTlELGtCQUFVLEVBQUUscUJBQWtELENBQUM7SUFFdEUsK0NBQWUsQ0FBQztRQUNaLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhCLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3JCLElBQUksR0FBRyxHQUFHLGdEQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksR0FBRyxHQUFHLDRDQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNuQixHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVELFNBQVMsTUFBTTtRQUNYLElBQUksR0FBRyxHQUFHLGdEQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksR0FBRyxHQUFHLDRDQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVELFNBQVMsTUFBTSxDQUFDLEtBQUs7UUFDakIsSUFBSSxHQUFHLEdBQUcsZ0RBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxHQUFHLEdBQUcsNENBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDcEIsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxPQUFPLENBQ0g7UUFDSyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFDeEIsb0VBQUssU0FBUyxFQUFDLFlBQVk7Z0JBQ3RCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLDRFQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUMxQyw2REFBSyxTQUFTLEVBQUMsYUFBYTtvQkFDeEIsK0RBQU8sU0FBUyxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLElBQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQWUsQ0FBQyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxHQUFJO29CQUM5Ryw2REFBSyxTQUFTLEVBQUMsb0JBQW9CLEVBQUMsT0FBTyxFQUFFLGNBQU0sYUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFiLENBQWE7d0JBQzVELDhEQUFNLFNBQVMsRUFBQyxrQkFBa0I7NEJBQUMsMkRBQUcsU0FBUyxFQUFDLGVBQWUsaUJBQWEsTUFBTSxHQUFLLENBQU8sQ0FDNUYsQ0FDSixDQUNKO1FBUk4sQ0FRTSxDQUNUO1FBQ0QsZ0VBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsd0JBQXdCLEVBQUMsT0FBTyxFQUFFLGNBQU0sYUFBTSxFQUFFLEVBQVIsQ0FBUSxZQUFnQixDQUNqRyxDQUFDO0FBQ1osQ0FBQztBQUVjLDRFQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNoVDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FBd0c7QUFDeEcsK0JBQStCO0FBQy9CLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4RywyQkFBMkI7QUFDM0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFO0FBR21CO0FBQ0o7QUFJOUMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQWtEO0lBQ2xFLHNFQUF3RCxFQUF2RCxrQkFBVSxFQUFFLHFCQUEyQyxDQUFDO0lBQ3pELHNFQUEwRSxFQUF6RSxpQkFBUyxFQUFFLG9CQUE4RCxDQUFDO0lBRTNFLDBFQUEwRCxFQUF6RCxpQkFBUyxFQUFFLG9CQUE4QyxDQUFDO0lBQzNELHdFQUF5RCxFQUF4RCxpQkFBUyxFQUFFLG9CQUE2QyxDQUFDO0lBSWhFLCtDQUFlLENBQUM7UUFDWixJQUFJLFVBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDdEQsYUFBYSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRCxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUNuQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUU5QiwrQ0FBZSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUM7UUFDdkIsT0FBTyxjQUFRLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUk7WUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUl2QyxTQUFTLFlBQVk7UUFDakIsSUFBSSxVQUFVLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEdBQUcsRUFBSyxRQUFRLDhCQUF5QixVQUFVLFNBQUksU0FBUyxVQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7WUFDdkYsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQWdDO1lBQ3pDLElBQUksSUFBSSxJQUFJLElBQUk7Z0JBQ1osT0FBTTtZQUNWLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxPQUFPLENBQUM7UUFDSCxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLDREQUFJLFNBQVMsRUFBQyxjQUFjLElBQ3ZCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztnQkFDckMsbUVBQUksU0FBUyxFQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUUsS0FBSztvQkFDL0IsMkRBQUcsU0FBUyxFQUFFLFVBQVUsR0FBRyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFNLG9CQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUF0QixDQUFzQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUssQ0FDMUg7WUFGTCxDQUVLLENBQ1IsQ0FDQSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRWYsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw2REFBTSxTQUFTLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO1lBRWhILDZEQUFLLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRTtnQkFDL0MsNkRBQUssU0FBUyxFQUFDLGFBQWE7b0JBQ3hCOzt3QkFBb0IsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLEVBQUUsSUFBSSxVQUFVLEVBQXJCLENBQXFCLENBQUMsQ0FBQyxJQUFJLENBQU0sQ0FDeEY7Z0JBQ04sNkRBQUssU0FBUyxFQUFFLFdBQVc7b0JBQ3ZCLDZEQUFLLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7d0JBQ2pGLG9EQUFDLCtEQUFLLElBQXFCLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsRUFBRSxJQUFJLFVBQVUsRUFBckIsQ0FBcUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGNBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFNLFdBQUksRUFBSixDQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxHQUFJO3dCQUNqTSxvREFBQyxnRUFBSyxJQUNGLElBQUksRUFBRTtnQ0FDRixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxJQUFLLDJEQUFDLCtEQUFLLElBQXNCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxJQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBTSxXQUFJLEVBQUosQ0FBSSxHQUFJLEVBQWxJLENBQWtJLEVBQUU7Z0NBQy9QLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUssMkRBQUMsK0RBQUssSUFBc0IsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFNLFdBQUksRUFBSixDQUFJLEdBQUksRUFBdkksQ0FBdUksRUFBRTtnQ0FDeFEsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSywyREFBQywrREFBSyxJQUFzQixNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQU0sV0FBSSxFQUFKLENBQUksR0FBSSxFQUF4SSxDQUF3SSxFQUFFO2dDQUMxUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxJQUFLLDJEQUFDLCtEQUFLLElBQXNCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxJQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBTSxXQUFJLEVBQUosQ0FBSSxHQUFJLEVBQW5JLENBQW1JLEVBQUU7NkJBQ3BRLEVBQ0QsVUFBVSxFQUFDLG1CQUFtQixFQUM5QixJQUFJLEVBQUUsU0FBUyxFQUNmLFNBQVMsRUFBRSxNQUFNLEVBQ2pCLFNBQVMsRUFBRSxJQUFJLEVBQ2YsTUFBTSxFQUFFLFVBQUMsQ0FBQztnQ0FDTixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUztvQ0FDbEIsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7O29DQUV6QixZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUM1QixDQUFDLEVBQ0QsT0FBTyxFQUFFLFVBQUMsQ0FBQyxJQUFPLENBQUMsRUFDbkIsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUMxRixVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDekcsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN4RixRQUFRLEVBQUUsVUFBQyxJQUFJLElBQUssWUFBSyxFQUFMLENBQUssR0FDM0IsQ0FDQSxDQUNKLENBQ0osQ0FDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2QsQ0FBQztBQUNSLENBQUM7QUFFTSxJQUFNLGlCQUFpQixHQUFHLFVBQUMsS0FBMEI7SUFDbEQsc0VBQW9GLEVBQW5GLHlCQUFpQixFQUFFLDRCQUFnRSxDQUFDO0lBRTNGLCtDQUFlLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxjQUFjLEVBQUUsQ0FBQztRQUN6QixPQUFPLGNBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSTtZQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFcEIsU0FBUyxjQUFjO1FBQ25CLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSw0Q0FBdUMsS0FBSyxDQUFDLE9BQVM7WUFDdEUsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQStCO1lBQ3hDLElBQUksSUFBSSxJQUFJLElBQUk7Z0JBQ1osT0FBTTtZQUNWLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELE9BQU8sb0RBQUMsZ0JBQWdCLElBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEdBQUk7QUFDckUsQ0FBQztBQUVjLCtFQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDN0poQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RywyQkFBMkI7QUFDM0IsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDJCQUEyQjtBQUMzQixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekU7QUFFZTtBQUdtQjtBQVFqRSxJQUFNLFlBQVksR0FBRyxVQUFDLEtBQWE7SUFFekIsc0VBQTRDLEVBQTNDLFlBQUksRUFBRSxlQUFxQyxDQUFDO0lBQzdDLHFFQUFpRCxFQUFoRCxlQUFPLEVBQUUsa0JBQXVDLENBQUM7SUFDbEQseUVBQTBELEVBQXpELG1CQUFXLEVBQUUsa0JBQTRDLENBQUM7SUFDakUsSUFBTSxPQUFPLEdBQUcsbUVBQVUsRUFBRSxDQUFDO0lBRTdCLFNBQVMsUUFBUTtRQUNiLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTO1lBQ3hCLE9BQU8scUJBQXFCO1FBQ2hDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksY0FBYztZQUN6QyxPQUFPLG1CQUFtQjtRQUM5QixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLFVBQVU7WUFDckMsT0FBTyxjQUFjO1FBQ3pCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksZUFBZTtZQUMxQyxPQUFPLDZCQUE2QjtRQUN4QyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLGtCQUFrQjtZQUM3QyxPQUFPLHlCQUF5QjtJQUd4QyxDQUFDO0lBRUQsU0FBUyxNQUFNO1FBQ1gsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVM7WUFDeEIsT0FBTyxVQUFVO1FBQ3JCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksY0FBYztZQUN6QyxPQUFPLG9CQUFvQjtRQUMvQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLFVBQVU7WUFDckMsT0FBTyxnQkFBZ0I7UUFDM0IsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxlQUFlO1lBQzFDLE9BQU8sNkJBQTZCO1FBQ3hDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksa0JBQWtCO1lBQzdDLE9BQU8sU0FBUztJQUd4QixDQUFDO0lBRUQsU0FBUyxPQUFPLENBQUMsQ0FBVTtRQUN2QixJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUMvQixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ0osS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZjtJQUdMLENBQUM7SUFFRCxTQUFTLE9BQU87UUFDWixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksU0FBUztZQUMzQixhQUFhLEVBQUUsQ0FBQztRQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksU0FBUztZQUMxQixZQUFZLEVBQUU7UUFFbEIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLGFBQWE7UUFDbEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDcEUsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVM7WUFDeEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUVwQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUssUUFBUSwrQkFBNEI7WUFDNUMsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUF3QixDQUFDO1lBQzlDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxjQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsU0FBUyxZQUFZO1FBQ2pCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksa0JBQWtCO1lBQzdDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osR0FBRyxFQUFLLFFBQVEseUNBQXNDO2dCQUN0RCxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDMUcsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQUksSUFBSSxjQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDOztZQUVoQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNILElBQUksRUFBRSxNQUFNO2dCQUNaLEdBQUcsRUFBSyxRQUFRLCtDQUE0QztnQkFDNUQsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQzVELFFBQVEsRUFBRSxNQUFNO2dCQUNoQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFJLElBQUksY0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBR0QsT0FBTyxDQUNQO1FBQ0ksb0RBQUMscUVBQUssSUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQUMsQ0FBQyxJQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFDLElBQUksSUFDbEksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxrQkFBa0IsQ0FBQyxFQUFDO1lBQ2pFLDZEQUFLLFNBQVMsRUFBQyxZQUFZO2dCQUN2QiwyRUFBb0I7Z0JBQ3BCLGtFQUFVLFNBQVMsRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBSyxjQUFPLENBQUUsQ0FBQyxDQUFDLE1BQWMsQ0FBQyxLQUFLLENBQUMsRUFBaEMsQ0FBZ0MsR0FBYTtnQkFDdkgsNkZBQXNDO2dCQUN0QywrREFBTyxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssaUJBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQyxDQUFDLE1BQWMsQ0FBQyxLQUFlLENBQUMsQ0FBQyxFQUF2RCxDQUF1RCxHQUFVLENBQ2hKO1lBQ0YsQ0FBQztnQkFDVCw2REFBSyxTQUFTLEVBQUMsWUFBWTtvQkFDdkIsMkVBQW9CO29CQUNwQixrRUFBVSxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssY0FBTyxDQUFFLENBQUMsQ0FBQyxNQUFjLENBQUMsS0FBSyxDQUFDLEVBQWhDLENBQWdDLEdBQWEsQ0FDckgsQ0FFTjtRQUNSLG9EQUFDLHVFQUFPLElBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSw4RUFBOEUsRUFBRSxRQUFRLEVBQUUsVUFBQyxNQUFNLElBQU8sSUFBSSxNQUFNO2dCQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsR0FBSSxDQUM5TSxDQUNIO0FBQ1IsQ0FBQztBQUVjLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNwSzVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FBd0c7QUFDeEcsMEJBQTBCO0FBQzFCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4RywyQkFBMkI7QUFDM0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFO0FBQ2U7QUFROUMsSUFBTSxZQUFZLEdBQUcsVUFBQyxLQUFhO0lBRXpCLHNFQUFxRCxFQUFwRCxnQkFBUSxFQUFFLG1CQUEwQyxDQUFDO0lBQ3RELHlFQUEwRCxFQUF6RCxpQkFBUyxFQUFFLG9CQUE4QyxDQUFDO0lBRWpFLCtDQUFlLENBQUM7UUFDWixJQUFJLE1BQU0sR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUN4QixPQUFPO1lBQ0gsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSTtnQkFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0QsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUUvQixTQUFTLFFBQVE7UUFDYixJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDbkUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEdBQUcsRUFBSyxRQUFRLGlDQUE0QixLQUFLLENBQUMsT0FBTyxVQUFJLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBRTtZQUM5RSxXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBa0I7WUFDM0IsSUFBSSxJQUFJLElBQUksSUFBSTtnQkFDWixPQUFNO1lBQ1YsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVDLE9BQU8sQ0FDTDtRQUNNLG9EQUFDLGdFQUFLLElBQ0YsSUFBSSxFQUFFO2dCQUNGLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQy9GLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUssdUVBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsMkJBQTJCLEVBQUMsT0FBTyxFQUFFLGNBQU0sYUFBTSxDQUFDLElBQUksQ0FBSSxRQUFRLG9DQUErQixJQUFJLENBQUMsRUFBSSxDQUFDLEVBQWhFLENBQWdFLGlCQUFxQixFQUFoSyxDQUFnSyxFQUFFO2FBRXpSLEVBQ0QsVUFBVSxFQUFDLG1CQUFtQixFQUM5QixJQUFJLEVBQUUsUUFBUSxFQUNkLFNBQVMsRUFBRSxVQUFVLEVBQ3JCLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLE1BQU0sRUFBRSxVQUFDLENBQUMsSUFBTyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBQyxFQUMxQyxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQU8sQ0FBQyxFQUNuQixVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQzFGLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN6RyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hGLFFBQVEsRUFBRSxVQUFDLElBQUksSUFBSyxZQUFLLEVBQUwsQ0FBSyxHQUN2QixDQUNULENBQ047QUFDTCxDQUFDO0FBR2MsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQ3pGNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RywwQkFBMEI7QUFDMUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDJCQUEyQjtBQUMzQixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RTtBQUVlO0FBQ1c7QUFFUDtBQU1sRCxJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQWE7SUFDOUIsSUFBSSxPQUFPLEdBQUcsbUVBQVUsRUFBRSxDQUFDO0lBRXJCLHlFQUFnRSxFQUEvRCxvQkFBWSxFQUFFLHVCQUFpRCxDQUFDO0lBQ2pFLDZFQUE0RCxFQUEzRCxhQUFLLEVBQUUsZ0JBQW9ELENBQUM7SUFFN0QseUVBQXNELEVBQXJELGVBQU8sRUFBRSxrQkFBNEM7SUFDdEQseUVBQWdFLEVBQS9ELG9CQUFZLEVBQUUsdUJBQWlEO0lBRXRFLCtDQUFlLENBQUM7UUFDWixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLE9BQU87WUFDSCxJQUFJLFdBQVcsSUFBSSxJQUFJLElBQUksV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5RSxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFcEIsU0FBUyxRQUFRLENBQUMsRUFBVTtRQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUMxQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsR0FBRyxFQUFLLFFBQVEsNENBQXVDLEVBQUk7WUFDM0QsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQW1CO1lBQzVCLElBQUksSUFBSSxJQUFJLElBQUk7Z0JBQ1osT0FBTTtZQUVWLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUdILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFJRCxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLENBQUM7SUFDaEcsSUFBSSxRQUFRLEdBQUc7UUFDWCxLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxDQUFDO1FBQ1YsVUFBVSxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hELEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZELE1BQU0sRUFBRSxNQUFNO0tBQ2pCLENBQUM7SUFFRixTQUFTLGFBQWE7UUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNILElBQUksRUFBRSxLQUFLO1lBQ1gsR0FBRyxFQUFLLFFBQVEsaURBQTRDLEtBQUssQ0FBQyxFQUFJO1lBQ3RFLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELE9BQU8sQ0FFRjtRQUNHLDZEQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQy9DLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQztZQUNqQjtnQkFDSSw2REFBSyxLQUFLLGVBQU8sUUFBUSwrQkFFbkI7Z0JBRVYsNkRBQUssS0FBSyxFQUFFO3dCQUNSLEtBQUssRUFBRSxNQUFNO3dCQUNiLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixTQUFTLEVBQUUsUUFBUTt3QkFDbkIsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUUsQ0FBQzt3QkFDeEYsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDOUUsTUFBTSxFQUFFLE1BQU07cUJBQ2pCLElBQ0ksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQ2xEO2dCQUVOLDZEQUFLLEtBQUssRUFBRSxRQUFRLFdBRWIsQ0FDUjtZQUNILENBQUMsQ0FBQyxJQUFJLENBQ1o7UUFDRiw2REFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUV2RCxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLDBHQUNTLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDYjtvQkFDSSxnRUFBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQywwQkFBMEIsRUFBQyxPQUFPLEVBQUUsY0FBTSxzQkFBZSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQiw2QkFBa0M7b0JBQ2pJLGdFQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLHdCQUF3QixFQUFDLE9BQU8sRUFBRSxjQUFNLGlCQUFVLENBQUMsSUFBSSxDQUFDLEVBQWhCLENBQWdCLHFDQUEwQztvQkFHbEksb0RBQUMsNERBQVksSUFBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxXQUFXLEtBQUssa0JBQWtCLEVBQXZDLENBQXVDLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxlQUFlLEdBQUk7b0JBQ3BLLG9EQUFDLDREQUFZLElBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsV0FBVyxLQUFLLGVBQWUsRUFBcEMsQ0FBb0MsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsR0FBSSxDQUN4SixDQUFDLENBQUMsQ0FBQztnQkFDRixnRUFBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyx3QkFBd0IsRUFBQyxPQUFPLEVBQUUsY0FBTSxzQkFBZSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixzQ0FBMEM7Z0JBQ3ZJLG9EQUFDLHVFQUFPLElBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUseUhBQXlILEVBQUUsUUFBUSxFQUFFLFVBQUMsTUFBTSxJQUFPLElBQUksTUFBTTt3QkFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxHQUFJLENBQ3RRLENBQ1IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUVSLENBQ2YsQ0FBQztBQUNSLENBQUM7QUFFYywwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbkozQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RyxnQ0FBZ0M7QUFDaEMsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RTtBQUNIO0FBQ2tCO0FBRVI7QUFDRTtBQUdnRDtBQUMxQztBQUNZO0FBQ2pCO0FBQ3NCO0FBQ0Q7QUFJOUQsSUFBTSxjQUFjLEdBQWdDO0lBQ2hELEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDOUMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUN2RCxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQzlDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDaEQsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Q0FDeEUsQ0FBQztBQUVGLElBQU0sdUJBQXVCLEdBQUcsVUFBQyxLQUErRDtJQUM1RixJQUFJLE9BQU8sR0FBRyxtRUFBVSxFQUFFLENBQUM7SUFFckIsc0VBQXFGLEVBQXBGLG9CQUFZLEVBQUUsdUJBQXNFLENBQUM7SUFDdEYsc0VBQXVFLEVBQXRFLGtCQUFVLEVBQUUscUJBQTBELENBQUM7SUFFeEUsa0ZBQXNHLEVBQXJHLHNCQUFjLEVBQUUseUJBQXFGLENBQUM7SUFFdkcsNEVBQXlFLEVBQXhFLGlCQUFTLEVBQUUsb0JBQTZELENBQUM7SUFDMUUseUVBQXdELEVBQXZELGdCQUFRLEVBQUUsbUJBQTZDLENBQUM7SUFDekQsc0VBQW9FLEVBQW5FLGlCQUFTLEVBQUUsb0JBQXdEO0lBRXBFLHdFQUF1RSxFQUF0RSxxQkFBYSxFQUFFLHdCQUF1RCxDQUFDO0lBQ3hFLDBFQUE2RSxFQUE1RSxhQUFLLEVBQUUsZ0JBQXFFLENBQUM7SUFFOUUseUVBQTRFLEVBQTNFLDBCQUFrQixFQUFFLDZCQUF1RCxDQUFDO0lBQzdFLHlFQUFvRSxFQUFuRSxzQkFBYyxFQUFFLHlCQUFtRCxDQUFDO0lBQ3JFLHlFQUEwRCxFQUF6RCxpQkFBUyxFQUFFLG9CQUE4QyxDQUFDO0lBQzNELDBFQUE0RSxFQUEzRSxtQkFBVyxFQUFFLHNCQUE4RCxDQUFDO0lBRW5GLCtDQUFlLENBQUM7UUFDWixJQUFJLGdCQUFnQixHQUFHLFNBQVMsRUFBRSxDQUFDO1FBRW5DLE9BQU87WUFDSCxJQUFJLGdCQUFnQixDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pFLENBQUM7SUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCwrQ0FBZSxDQUFDO1FBQ1osY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sY0FBUSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFFeEMsK0NBQWUsQ0FBQztRQUNaLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQzVELElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNYLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDOztZQUV2QixnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFL0IsK0NBQWUsQ0FBQztRQUNaLElBQUksTUFBTSxHQUFHLG1CQUFtQixFQUFFLENBQUM7UUFFbkMsT0FBTztZQUNILElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxDQUFDO0lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsU0FBUyxtQkFBbUI7UUFDeEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEdBQUcsRUFBSyxRQUFRLCtDQUE0QztZQUM1RCxXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxTQUFTLFdBQVcsQ0FBQyxJQUFZO1lBQzdCLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksU0FBUztnQkFDcEcsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDekIsT0FBTztnQkFDSCxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDckQ7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQThCO1lBQ3ZDLElBQUksT0FBTyxHQUFHLDhDQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQUksSUFBSSxRQUN4RCxXQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxJQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQzFFLEdBRjJELENBRTNELENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLFNBQVM7UUFDZCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hCLElBQUksRUFBRSxLQUFLO1lBQ1gsR0FBRyxFQUFLLFFBQVEseUNBQXNDO1lBQ3RELFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUEyQjtZQUNwQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUyxVQUFVLENBQUMsRUFBVTtRQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxTQUFTLFNBQVM7UUFFZCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hCLElBQUksRUFBRSxNQUFNO1lBQ1osR0FBRyxFQUFLLFFBQVEsbURBQWdEO1lBQ2hFLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsUUFBUSxFQUFFLE1BQU07WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ3pGLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBMEI7WUFDbkMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsT0FBTyxDQUNILDZEQUFLLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtRQUN6QyxvREFBQyx5RUFBUyxJQUFnQixTQUFTLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQzdFLGNBQWMsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQzlELFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUNoRCxPQUFPLEVBQUUsVUFBQyxVQUFVLEVBQUUsS0FBSztnQkFDdkIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLFFBQVEsRUFBRTtvQkFDdkIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBSSxJQUFJLFFBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQyxDQUFDO29CQUMzRixPQUFPLGNBQVEsQ0FBQztpQkFDbkI7Z0JBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7b0JBQ3pFLE9BQU8sY0FBUSxDQUFDLENBQUM7Z0JBRXJCLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNaLElBQUksRUFBRSxLQUFLO29CQUNYLEdBQUcsRUFBSyxRQUFRLDRCQUF1QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQU87b0JBQzVELFdBQVcsRUFBRSxpQ0FBaUM7b0JBQzlDLFFBQVEsRUFBRSxNQUFNO29CQUNoQixLQUFLLEVBQUUsSUFBSTtvQkFDWCxLQUFLLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksaUJBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQUksSUFBSSxRQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFwRCxDQUFvRCxDQUFDLENBQUMsRUFBL0UsQ0FBK0UsQ0FBQztnQkFDakcsT0FBTyxjQUFRLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUk7b0JBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVoRixDQUFDLEVBQ0QsTUFBTSxFQUFFLFdBQVcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLG9EQUFDLDJFQUFXLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTO1lBRXhHLDREQUFJLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO2dCQUM5RCxrRUFBVSxTQUFTLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtvQkFDbkUsZ0VBQVEsU0FBUyxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGVBQW1CO29CQUMxRSw2REFBSyxTQUFTLEVBQUMsS0FBSzt3QkFDaEIsNkRBQUssU0FBUyxFQUFDLEtBQUs7NEJBQ2hCLGdFQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLDJCQUEyQixFQUFDLE9BQU8sRUFBRSxjQUFNLDRCQUFxQixDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixnQ0FBb0MsQ0FDeEk7d0JBQ04sNkRBQUssU0FBUyxFQUFDLEtBQUs7NEJBQ2hCLGdFQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFFLDJCQUEyQixHQUFHLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQ3ZGLFlBQVksRUFBRSxPQUFPLEVBQUUsY0FBTSx3QkFBaUIsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEVBQXhDLENBQXdDLEVBQ25GLFdBQVcsRUFBRSxjQUFNLGVBQVEsQ0FBQyxZQUFZLENBQUMsRUFBdEIsQ0FBc0IsRUFBRSxVQUFVLEVBQUUsY0FBTSxlQUFRLENBQUMsTUFBTSxDQUFDLEVBQWhCLENBQWdCLDRCQUFnQzs0QkFDakgsZ0VBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUUsMkJBQTJCLEdBQUcsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUNyRyxXQUFXLEVBQUUsY0FBTSxlQUFRLENBQUMsT0FBTyxDQUFDLEVBQWpCLENBQWlCLEVBQUUsVUFBVSxFQUFFLGNBQU0sZUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFoQixDQUFnQixrQkFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxjQUFNLG1CQUFZLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxFQUFuQyxDQUFtQyx1QkFBNEIsQ0FDdkcsQ0FDSixDQUNDLENBQ1YsQ0FDRztRQUNaLG9EQUFDLHVFQUFPLElBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxJQUFFLE9BQU8sSUFBSSxhQUFhLElBQUksSUFBSSxFQUFHLE1BQU0sRUFBRSxPQUFPO1lBQ3hGLGdHQUFxQyxDQUMvQjtRQUNWLG9EQUFDLHVFQUFPLElBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxJQUFJLFlBQVksSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZO1lBQ25HLGdHQUFxQyxDQUMvQjtRQUNWLG9EQUFDLHFFQUFLLElBQUMsS0FBSyxFQUFFLDBCQUEwQixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFVBQUMsT0FBTyxJQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQyxPQUFPO1lBQy9LLG9EQUFDLDBFQUFpQixJQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxHQUFJLENBQ3pDO1FBQ1Isb0RBQUMscUVBQUssSUFBQyxLQUFLLEVBQUUsOEJBQThCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBQyxPQUFPLElBQU8sWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQyxPQUFPO1lBQ3pLLG9EQUFDLG9EQUFZLElBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUksQ0FDcEM7UUFDUixvREFBQyxxRUFBZSxJQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEdBQUk7UUFFN0UsNkRBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUN6Qiw2REFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQ3JDLDZEQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtvQkFDbkYsb0RBQUMsZ0VBQUssSUFDRixJQUFJLEVBQUU7NEJBQ0YsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTs0QkFDNUYsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTs0QkFDN0YsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTs0QkFDM0Y7Z0NBQ0ksR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLO29DQUNuSCxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQXRCLENBQXNCLENBQUMsQ0FBQztvQ0FFeEQsT0FBTyw2REFBSyxLQUFLLEVBQUU7NENBQ2YsVUFBVSxFQUFFLEdBQUc7NENBQ2YsS0FBSyxFQUFFLEtBQUs7NENBQ1osTUFBTSxFQUFFLE1BQU07NENBQ2QsVUFBVSxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzRDQUN4RCxNQUFNLEVBQUUsV0FBVzs0Q0FDbkIsWUFBWSxFQUFFLEtBQUs7NENBQ25CLFNBQVMsRUFBRSxRQUFROzRDQUNuQixVQUFVLEVBQUUsTUFBTTs0Q0FDbEIsWUFBWSxFQUFFLFVBQVU7NENBQ3hCLFFBQVEsRUFBRSxRQUFROzRDQUNsQixLQUFLLEVBQUUsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7eUNBQzFEOzt3Q0FBSSxJQUFJLENBQUMsTUFBTTs0Q0FBUTtnQ0FDNUIsQ0FBQzs2QkFDSjt5QkFDSixFQUNELFVBQVUsRUFBQyxtQkFBbUIsRUFDOUIsSUFBSSxFQUFFLFNBQVMsRUFDZixTQUFTLEVBQUUsU0FBUyxFQUNwQixTQUFTLEVBQUUsUUFBUSxFQUNuQixNQUFNLEVBQUUsVUFBQyxDQUFDOzRCQUNOLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxTQUFTO2dDQUNsQixXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Z0NBRXZCLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzVCLENBQUMsRUFDRCxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pDLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDMUYsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3BHLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDeEYsUUFBUSxFQUFFLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBekIsQ0FBeUIsR0FDL0MsQ0FDQTtnQkFDTiw2REFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO29CQUNyRSw2REFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQ3JDLG9EQUFDLG9EQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxHQUFJLENBQzFGO29CQUNOLDZEQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTt3QkFDckMsb0RBQUMsbURBQVUsSUFBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEdBQUksQ0FDekYsQ0FDSixDQUNKLENBRUosQ0FDSixDQUNUO0FBQ0wsQ0FBQztBQUVjLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7O0FDL1J2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDJCQUEyQjtBQUMzQixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekU7QUFDZTtBQUVBO0FBUzlDLElBQU0sVUFBVSxHQUFHLFVBQUMsS0FBYTtJQUM3QixJQUFNLE9BQU8sR0FBRyxtRUFBVSxFQUFFLENBQUM7SUFFdkIsc0VBQXVFLEVBQXRFLGtCQUFVLEVBQUUscUJBQTBELENBQUM7SUFDeEUsNEVBQThELEVBQTdELGtCQUFVLEVBQUUscUJBQWlELENBQUM7SUFDL0QseUVBQTBELEVBQXpELGlCQUFTLEVBQUUsb0JBQThDLENBQUM7SUFFakUsK0NBQWUsQ0FBQztRQUNaLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFFcEMsT0FBTztZQUNILElBQUksZ0JBQWdCLElBQUksSUFBSSxJQUFJLGdCQUFnQixDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdGLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVwQixTQUFTLFVBQVU7UUFDZixJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFckMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEdBQUcsRUFBSyxRQUFRLHlDQUFvQyxLQUFLLENBQUMsT0FBTyxTQUFJLFVBQVUsVUFBSSxTQUFTLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRTtZQUNyRyxXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBMkI7WUFDcEMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUdELE9BQU8sQ0FDSCwwR0FDSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0Qiw2REFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDckMsNkRBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO2dCQUNoRixvREFBQyxnRUFBSyxJQUNGLElBQUksRUFBRTt3QkFDRjs0QkFDSSxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUs7Z0NBQ25ILElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQztnQ0FFM0QsT0FBTyw2REFBSyxLQUFLLEVBQUU7d0NBQ2YsVUFBVSxFQUFFLEdBQUc7d0NBQ2YsS0FBSyxFQUFFLEtBQUs7d0NBQ1osTUFBTSxFQUFFLE1BQU07d0NBQ2QsVUFBVSxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3dDQUN4RCxNQUFNLEVBQUUsV0FBVzt3Q0FDbkIsWUFBWSxFQUFFLEtBQUs7d0NBQ25CLFNBQVMsRUFBRSxRQUFRO3dDQUNuQixVQUFVLEVBQUUsTUFBTTt3Q0FDbEIsWUFBWSxFQUFFLFVBQVU7d0NBQ3hCLFFBQVEsRUFBRSxRQUFRO3dDQUNsQixLQUFLLEVBQUUsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7cUNBQzFEOztvQ0FBSSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3Q0FBUTs0QkFDNUQsQ0FBQzt5QkFDSjt3QkFDRCxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxJQUFLLGFBQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQWxELENBQWtELEVBQUU7d0JBQzNMLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7cUJBQzdGLEVBQ0QsVUFBVSxFQUFDLG1CQUFtQixFQUM5QixJQUFJLEVBQUUsVUFBVSxFQUNoQixTQUFTLEVBQUUsVUFBVSxFQUNyQixTQUFTLEVBQUUsU0FBUyxFQUNwQixNQUFNLEVBQUUsVUFBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxVQUFVOzRCQUNuQixZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7NEJBRXpCLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsRUFFTCxPQUFPLEVBQUUsVUFBQyxDQUFDO3dCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsMENBQTBDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ3ZFLENBQUMsRUFDRCxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQzFGLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN6RyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hGLFFBQVEsRUFBRSxVQUFDLElBQUksSUFBSyxZQUFLLEVBQUwsQ0FBSyxHQUMzQixDQUNKLENBQ0o7UUFDRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1osQ0FDTjtBQUNMLENBQUM7QUFFYyx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDN0gxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RywrQkFBK0I7QUFDL0IsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDJCQUEyQjtBQUMzQixpREFBaUQ7QUFDakQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekU7QUFFSDtBQUdzQjtBQUVRO0FBQ0k7QUFxQjlELElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxLQUFhO0lBQzdCLHdFQUFnRSxFQUEvRCxxQkFBYSxFQUFFLHdCQUFnRCxDQUFDO0lBQ2pFLG9JQUFnSSxFQUEvSCxpQkFBUyxFQUFFLG9CQUFvSDtJQUNoSSxnS0FBNkosRUFBNUosaUJBQVMsRUFBRSxvQkFBaUosQ0FBQztJQUM5Six3RUFBaUUsRUFBaEUscUJBQWEsRUFBRSx3QkFBaUQsQ0FBQztJQUVsRSxzRUFBb0QsRUFBbkQsZ0JBQVEsRUFBRSxtQkFBeUMsQ0FBQztJQUNyRCxzRUFBeUUsRUFBeEUsa0JBQVUsRUFBRSxxQkFBNEQsQ0FBQztJQUUxRSwyRUFBMkQsRUFBMUQsaUJBQVMsRUFBRSxvQkFBK0MsQ0FBQztJQUM1RCx5RUFBMEQsRUFBekQsaUJBQVMsRUFBRSxvQkFBOEMsQ0FBQztJQUdqRSwrQ0FBZSxDQUFDO1FBQ1osSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDN0IsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7WUFDakUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFFL0QsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBR3ZCLCtDQUFlLENBQUM7UUFDWixJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksWUFBWTtZQUMxQixPQUFPLGNBQVEsQ0FBQztRQUVwQixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBUTtZQUMxQyxJQUFJLFFBQVEsR0FBSSxHQUEyQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzNGLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRixjQUFjLENBQUUsR0FBMkMsRUFBRSxRQUFRLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGNBQU0sUUFBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQyxDQUFxQztJQUV0RCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqQiwrQ0FBZSxDQUFDO1FBQ1osSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtZQUU1QixJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUM7WUFDbkUsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDO2dCQUMxQixTQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLGNBQUk7b0JBQ3RDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQzFDLEtBQUssQ0FBQyxJQUFJLENBQUMseURBQXlELEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzVILENBQUMsQ0FBQyxDQUFDO1NBRVY7UUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksZ0JBQWdCLEVBQUU7WUFDaEMsSUFBSSxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQ3JDLElBQUksU0FBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFDMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxzRUFBc0UsQ0FBQztZQUN0RixJQUFJLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYTtnQkFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztTQUM3QztRQUNELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7WUFDNUIsSUFBSSxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1lBQzNDLElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFDdEQsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUN0QyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbEcsS0FBSyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQztTQUNwRTtRQUNELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDO2dCQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFcEYsK0NBQWUsQ0FBQztRQUNaLElBQUksU0FBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFKLENBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxFQUEzQixDQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25HLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDOztZQUV2QixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFbkMsK0NBQWUsQ0FBQztRQUNaLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxnQkFBZ0I7WUFDOUIsWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdEYsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFlBQVk7WUFDMUIsWUFBWSxDQUFDO2dCQUNULEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLEVBQUU7YUFDekYsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxXQUFXO1lBQ3pCLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO1lBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsT0FBTztTQUNWO1FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakIsK0NBQWUsQ0FBQztRQUNaLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxnQkFBZ0IsRUFBRTtZQUNoQyxJQUFJLE9BQU8sR0FBRyxnREFBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QyxJQUFJLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLFdBQVEsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUM7WUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsdUJBQU0sU0FBUyxLQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGO1FBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFlBQVksSUFBSSxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2xELElBQUksT0FBTyxHQUFHLGdEQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQ3JDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxXQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxFQUFFLEVBQVAsQ0FBTyxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyx5QkFBTyxTQUFTLEtBQUUsRUFBRSxFQUFFLEVBQUUsS0FBRyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRWpDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDN0c7UUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksWUFBWSxJQUFJLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxPQUFPLEdBQUcsZ0RBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0MsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7WUFDckMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUF2QixDQUF1QixDQUFDO1lBQzlELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUM3RztRQUNELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDM0IsSUFBSSxPQUFPLEdBQUcsZ0RBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0MsSUFBSSxJQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLFdBQVEsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEUsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLE9BQU8sRUFBWixDQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUMsS0FBSyxJQUFLLFFBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBakksQ0FBaUksQ0FBQyxDQUFDO1lBQzVNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5RixLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQixnQkFBZ0IsQ0FBQyxJQUFFLENBQUMsQ0FBQztTQUN4QjtRQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR2hCLCtDQUFlLENBQUM7UUFDWixJQUFJLGFBQWEsSUFBSSxJQUFJO1lBQ3JCLE9BQU87UUFDWCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxJQUFJLE9BQU8sR0FBRyxnREFBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSw4Q0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUd6QyxTQUFTLGNBQWMsQ0FBQyxHQUF3QyxFQUFFLFFBQWdCO1FBQzlFLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUN6Qiw0REFBUSxDQUFDLEdBQUcsRUFBRSxVQUFDLENBQUMsSUFBSyx5QkFBa0IsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssOEJBQU0sSUFBSSxLQUFFLE9BQU8sRUFBRSxLQUFLLElBQUcsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDLEVBQWxGLENBQWtGLENBQUMsQ0FBQztRQUM3RyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3pCLDREQUFRLENBQUMsR0FBRyxFQUFFLFVBQUMsQ0FBQyxJQUFLLHlCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUssSUFBSyw4QkFBTSxJQUFJLEtBQUUsT0FBTyxFQUFFLEtBQUssSUFBRyxFQUE3QixDQUE2QixDQUFDLENBQUMsRUFBbkYsQ0FBbUYsQ0FBQyxDQUFDOztZQUUxRyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxTQUFTLGtCQUFrQixDQUFDLElBQVksRUFBRSxNQUErQjtRQUVyRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBSSxJQUFNLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVMsZUFBZSxDQUFDLE1BQTJCO1FBQ2hELEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBRUQsU0FBUyxjQUFjO1FBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELE9BQU8sQ0FDSDtRQUNLLEtBQUssQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMxQiw0REFBSSxTQUFTLEVBQUMsY0FBYyxJQUN2QixTQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7Z0JBQzNDLG1FQUFJLFNBQVMsRUFBQyxVQUFVLEVBQUMsR0FBRyxFQUFFLEtBQUs7b0JBQy9CLDJEQUFHLFNBQVMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFNLHVCQUFnQixDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQixJQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBSyxDQUNwSjtZQUZMLENBRUssQ0FDUixDQUNBO1lBQ0wsNkRBQUssU0FBUyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtnQkFDM0YsNkRBQUssU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLElBQzlDLGFBQWEsSUFBSSxJQUFJLENBQUMsQ0FBQztvQkFDcEI7d0JBQ0ksNkRBQUssU0FBUyxFQUFDLGFBQWE7NEJBQ3hCOztnQ0FBb0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFNLENBQ3BFO3dCQUNOLDZEQUFLLFNBQVMsRUFBRSxXQUFXOzRCQUN2Qiw2REFBSyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFO2dDQUNqRixvREFBQywrREFBSyxJQUFxQixNQUFNLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQU0sV0FBSSxFQUFKLENBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLEdBQUk7Z0NBQzdLLG9EQUFDLGdFQUFLLElBQ0YsSUFBSSxFQUFFO3dDQUNGLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUssMkRBQUMsK0RBQUssSUFBc0IsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFNLFdBQUksRUFBSixDQUFJLEdBQUksRUFBbEksQ0FBa0ksRUFBRTt3Q0FDL1AsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSywyREFBQywrREFBSyxJQUFzQixNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQU0sV0FBSSxFQUFKLENBQUksR0FBSSxFQUF2SSxDQUF1SSxFQUFFO3dDQUN4USxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxJQUFLLDJEQUFDLCtEQUFLLElBQXNCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxJQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBTSxXQUFJLEVBQUosQ0FBSSxHQUFJLEVBQXhJLENBQXdJLEVBQUU7d0NBQ3RRLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUssMkRBQUMsK0RBQUssSUFBc0IsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFNLFdBQUksRUFBSixDQUFJLEdBQUksRUFBbkksQ0FBbUksRUFBRTt3Q0FDalEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSyxvRUFBSyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsY0FBTSxzQkFBZSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQjtnREFBRSwyREFBRyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFDLDJCQUEyQixpQkFBYSxNQUFNLEdBQUssQ0FBTSxFQUFqTSxDQUFpTSxFQUFFO3FDQUUxVCxFQUNELFVBQVUsRUFBQyxtQkFBbUIsRUFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM3QyxTQUFTLEVBQUUsTUFBTSxFQUNqQixTQUFTLEVBQUUsSUFBSSxFQUNmLE1BQU0sRUFBRSxVQUFDLENBQUM7d0NBQ0YsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLFNBQVM7NENBQ3RCLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzZDQUV4Qjs0Q0FDRCxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs0Q0FDekIsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5Q0FDdkI7b0NBQ0wsQ0FBQyxFQUNELE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBTyxDQUFDLEVBQ25CLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDMUYsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3pHLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDeEYsUUFBUSxFQUFFLFVBQUMsSUFBSSxJQUFLLFlBQUssRUFBTCxDQUFLLEdBQzNCLENBQ0EsQ0FDSixDQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDWixDQUNKO1lBQ0wsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsZ0VBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsd0JBQXdCLEVBQUMsT0FBTyxFQUFFLGNBQU0scUJBQWMsRUFBRSxFQUFoQixDQUFnQixxQkFBeUIsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNqSiwrREFBTTtZQUNOLDZEQUFLLFNBQVMsRUFBQyxLQUFLO2dCQUNoQiw2REFBSyxTQUFTLEVBQUMsS0FBSztvQkFDaEIsNkRBQUssU0FBUyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO3dCQUNoRCw2REFBSyxTQUFTLEVBQUMsYUFBYTs0QkFDeEIsK0RBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxFQUFDLFdBQVcsR0FBRzs0QkFDdEUsK0RBQU8sU0FBUyxFQUFDLG1CQUFtQixnREFBa0QsQ0FDcEYsQ0FDSixDQUNKO2dCQUNOLDZEQUFLLFNBQVMsRUFBQyxLQUFLO29CQUNoQixnRUFBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQywyQkFBMkIsRUFBQyxPQUFPLEVBQUUsY0FBUSxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsQ0FBQyxtQ0FBdUMsQ0FDbkosQ0FDSixDQUNKLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDWixLQUFLLENBQUMsSUFBSSxJQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUM5QixvREFBQywrREFBSyxJQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsY0FBTSxnQkFBUyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLGFBQWEsRUFBcEUsQ0FBb0UsRUFDeEosUUFBUSxFQUFFLHFDQUFxQyxFQUFFLEtBQUssRUFBRSxNQUFNLEdBQUk7WUFDOUUsb0RBQUMsK0RBQUssSUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBekQsQ0FBeUQsRUFDeEosS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEdBQUk7Z0JBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNsRixLQUFLLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsb0RBQUMsZUFBZSxJQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQy9GLEtBQUssQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxvREFBQyxxRUFBVyxJQUNyQyxJQUFJLEVBQUU7Z0JBQ0YsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLElBQUssMkRBQUMsK0RBQUssSUFBbUIsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFNLFdBQUksRUFBSixDQUFJLEdBQUksRUFBL0gsQ0FBK0gsRUFBRTtnQkFDeFIsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSywyREFBQywrREFBSyxJQUFtQixNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQU0sV0FBSSxFQUFKLENBQUksR0FBSSxFQUFwSSxDQUFvSSxFQUFFO2dCQUNuUSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxJQUFLLDJEQUFDLCtEQUFLLElBQW1CLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxJQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBTSxXQUFJLEVBQUosQ0FBSSxHQUFJLEVBQXJJLENBQXFJLEVBQUU7Z0JBQ2pRLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxJQUFLLDJEQUFDLCtEQUFLLElBQW1CLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxJQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBTSxXQUFJLEVBQUosQ0FBSSxHQUFJLEVBQWhJLENBQWdJLEVBQUU7YUFDN1IsRUFDRCxRQUFRLEVBQUUsTUFBTSxFQUNoQixVQUFVLEVBQUMsbUJBQW1CLEVBQzlCLElBQUksRUFBRSxVQUFVLEVBQ2hCLFNBQVMsRUFBRSxNQUFNLEVBQ2pCLFNBQVMsRUFBRSxJQUFJLEVBRWYsV0FBVyxFQUFFLFVBQUMsQ0FBQztnQkFDWCxhQUFhLENBQUMsVUFBQyxHQUFHO29CQUNkLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDaEIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxJQUFJLDhCQUFNLElBQUksS0FBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQWYsQ0FBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRyxFQUFoRSxDQUFnRSxDQUFDO29CQUMxRixPQUFPLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxFQUNELFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDMUYsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3pHLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FDMUYsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUVWLENBQUM7QUFDWixDQUFDO0FBRUQsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFvRjtJQUV6RyxJQUFNLGdCQUFnQixHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEcsSUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEksSUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRTVHLFNBQVMsVUFBVTtRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEosQ0FBQztJQUNELE9BQU8sQ0FBQztRQUNKLG9EQUFDLGdFQUFNLElBQXNCLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTTtnQkFDakksSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRztvQkFDbkcsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsQ0FBQyxHQUFJO1FBQ0wsb0RBQUMsK0RBQUssSUFBc0IsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQU0sWUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQXZELENBQXVELEVBQUUsS0FBSyxFQUFFLE9BQU8sR0FBSTtRQUN0TSxvREFBQyxnRUFBTSxJQUFzQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBTyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsR0FBSTtRQUMvTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsb0RBQUMsZUFBZSxJQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBTyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsR0FBSSxDQUFDLENBQUM7WUFDckgsb0RBQUMsK0RBQUssSUFBc0IsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQU0saUJBQVUsRUFBRSxFQUFaLENBQVksRUFBRSxLQUFLLEVBQUUsT0FB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QUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLGlCQUFpQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN0SSxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztxQkFDM0I7b0JBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN2SSxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztxQkFDM0I7b0JBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLGlCQUFpQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN0SSxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztxQkFDM0I7b0JBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLGVBQWUsRUFBRSxLQUFL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QUM7Z0JBQzVCLENBQUMsRUFDRCxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzFDLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDMUYsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUNwRixRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hGLFFBQVEsRUFBRSxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUE1RSxDQUE0RSxHQUNsRyxDQUNOLENBQ1AsQ0FDTjtBQUNMLENBQUM7QUFHYywwRUFBVyxFQUFDIiwiZmlsZSI6IkNvbmZpZ3VyYXRpb25CeU1ldGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8yMi8yMDE5IC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuaW1wb3J0IENvbmZpZ3VyYXRpb25GaWxlcyBmcm9tICcuL0NvbmZpZ3VyYXRpb25GaWxlcyc7XHJcbmltcG9ydCBDb25maWd1cmF0aW9uRmlsZUNoYW5nZXMgZnJvbSAnLi9Db25maWd1cmF0aW9uRmlsZUNoYW5nZXMnO1xyXG5pbXBvcnQgTm90ZVdpbmRvdyBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL05vdGVXaW5kb3cnO1xyXG5pbXBvcnQgeyBMb2FkaW5nSWNvbiwgU2VhcmNoLCBTZWFyY2hCYXIgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuY29uc3Qgc3RhbmRhcmRTZWFyY2g6IFNlYXJjaC5JRmllbGQ8TWlNRC5NZXRlcj5bXSA9IFtcclxuICAgIHsga2V5OiAnU3RhdGlvbicsIGxhYmVsOiAnU3RhdGlvbicsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ01vZGVsJywgbGFiZWw6ICdNb2RlbCcsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ0RhdGVMYXN0Q2hhbmdlZCcsIGxhYmVsOiAnRGF0ZSBMYXN0IENoYW5nZWQnLCB0eXBlOiAnZGF0ZXRpbWUnIH1cclxuXTtcclxuXHJcbmNvbnN0IENvbmZpZ3VyYXRpb25CeU1ldGVyOiBNaU1ELkJ5Q29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2ZpbHRlcmFibGVMaXN0LCBzZXRGaWx0ZXJhYmxlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+Pj4oc3RhbmRhcmRTZWFyY2gpO1xyXG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8U2VhcmNoLklGaWx0ZXI8TWlNRC5NZXRlcj4+PihbXSk7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5NZXRlcj4+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdEYXRlTGFzdENoYW5nZWQnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaFN0YXRlLCBzZXRTZWFyY2hTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSA8ICgnSWRsZSd8J0xvYWRpbmcnKT4oJ0lkbGUnKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaFN0YXRlKCdMb2FkaW5nJyk7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IGdldE1ldGVycygpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7IGlmIChoYW5kbGUgIT0gbnVsbCAmJiBoYW5kbGUuYWJvcnQgIT0gbnVsbCkgaGFuZGxlLmFib3J0KCk7IH1cclxuICAgIH0sIFthc2NlbmRpbmcsIHNvcnRGaWVsZCwgZmlsdGVyc10pXHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IGdldEFkZGl0aW9uYWxGaWVsZHMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSBudWxsKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1ldGVycygpOiBKUXVlcnkuanFYSFI8QXJyYXk8TWlNRC5NZXRlcj4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL01ldGVyL0NvbmZpZy9TZWFyY2hhYmxlTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBTZWFyY2hlczogZmlsdGVycywgT3JkZXJCeTogc29ydEZpZWxkLCBBc2NlbmRpbmc6IGFzY2VuZGluZyB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8TWlNRC5NZXRlcj4pID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgc2V0U2VhcmNoU3RhdGUoJ0lkbGUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBZGRpdGlvbmFsRmllbGRzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9BZGRpdGlvbmFsRmllbGQvUGFyZW50VGFibGUvTWV0ZXJgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gQ29udmVydFR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ2ludGVnZXInIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnZGF0ZXRpbWUnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZSB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW51bScsIGVudW06IFt7IExhYmVsOiB0eXBlLCBWYWx1ZTogdHlwZSB9IF1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZDogQXJyYXk8TWlNRC5BZGRpdGlvbmFsRmllbGQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcmRlcmVkID0gXy5vcmRlckJ5KHN0YW5kYXJkU2VhcmNoLmNvbmNhdChkLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IGl0ZW0uRmllbGROYW1lLCBrZXk6IGl0ZW0uRmllbGROYW1lLCAuLi5Db252ZXJ0VHlwZShpdGVtLlR5cGUpIH0gYXMgU2VhcmNoLklGaWVsZDxNaU1ELk1ldGVyPlxyXG4gICAgICAgICAgICApKSksIFsnbGFiZWwnXSwgW1wiYXNjXCJdKTtcclxuICAgICAgICAgICAgc2V0RmlsdGVyYWJsZUxpc3Qob3JkZXJlZClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGl0ZW0sIGV2dCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdpbmRleC5jc2h0bWwnLCBzZWFyY2g6ICc/bmFtZT1Db25maWd1cmF0aW9uJk1ldGVySUQ9JyArIGl0ZW0ucm93Lk1ldGVySUQsIHN0YXRlOiB7fSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPFNlYXJjaEJhcjxNaU1ELk1ldGVyPlxyXG4gICAgICAgICAgICAgICAgQ29sbHVtbkxpc3Q9e2ZpbHRlcmFibGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgU2V0RmlsdGVyPXsoZmxkcykgPT4gc2V0RmlsdGVycyhmbGRzKX1cclxuICAgICAgICAgICAgICAgIERpcmVjdGlvbj17J2xlZnQnfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdENvbGx1bW49e3sga2V5OiAnU3RhdGlvbicsIGxhYmVsOiAnU3RhdGlvbicsIHR5cGU6ICdzdHJpbmcnIH19XHJcbiAgICAgICAgICAgICAgICBXaWR0aD17JzUwJSd9XHJcbiAgICAgICAgICAgICAgICBMYWJlbD17J1NlYXJjaCd9XHJcbiAgICAgICAgICAgICAgICBHZXRFbnVtPXsoc2V0T3B0aW9ucywgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSAhPSAnZW51bScgfHwgZmllbGQuZW51bSA9PSB1bmRlZmluZWQgfHwgZmllbGQuZW51bS5sZW5ndGggIT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvVmFsdWVMaXN0L0dyb3VwLyR7ZmllbGQuZW51bVswXS5WYWx1ZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5kb25lKGQgPT4gc2V0T3B0aW9ucyhkLm1hcChpdGVtID0+ICh7IFZhbHVlOiBpdGVtLlZhbHVlLnRvU3RyaW5nKCksIExhYmVsOiBpdGVtLlRleHQgfSkpKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ID09IG51bGwpIGhhbmRsZS5hYm9ydCgpOyB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgUmVzdWx0PXtzZWFyY2hTdGF0ZSA9PSAnTG9hZGluZycgPyA8TG9hZGluZ0ljb24gU2hvdz17dHJ1ZX0vPiA6ICdGb3VuZCAnICsgZGF0YS5sZW5ndGggKyAnIE1ldGVycyd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9TZWFyY2hCYXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17e21hcmdpbjogMCwgaGVpZ2h0OiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmc6MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPE1pTUQuTWV0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdTdGF0aW9uJywgbGFiZWw6ICdTdGF0aW9uJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01vZGVsJywgbGFiZWw6ICdNb2RlbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTAlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEwJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVFNDJywgbGFiZWw6ICdUU0MnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEwJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0RhdGVMYXN0Q2hhbmdlZCcsIGxhYmVsOiAnRGF0ZSBMYXN0IENoYW5nZWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09IG51bGwgfHwgaXRlbVtrZXldID09ICcnKSByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpdGVtW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihkYXRlLCAnZGF5cycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAncmVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRheXMgPCA3KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kQ29sb3InXSA9ICdvcmFuZ2UnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kQ29sb3InXSA9ICd5ZWxsb3cnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAxNywgcGFkZGluZzogMCB9LCByb3dTdHlsZTogeyB3aWR0aDogMCwgcGFkZGluZzogMCB9IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkLmNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiAnY2FsYyggMTAwJSAtIDcwcHgpJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5NZXRlcklEID09IHByb3BzLk1ldGVySUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogMCwgbWF4SGVpZ2h0OiAnMTAwJScgLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29uZmlndXJhdGlvbkZpbGVzIE1ldGVySUQ9e3Byb3BzLk1ldGVySUR9IEZpbGVOYW1lPXtwcm9wcy5GaWxlTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcyBNZXRlcklEPXtwcm9wcy5NZXRlcklEfSBGaWxlTmFtZT17cHJvcHMuRmlsZU5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RlV2luZG93IElEPXtwcm9wcy5NZXRlcklEfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLypcclxuaWYgKChbXCJpbnRlZ2VyXCIsIFwibnVtYmVyXCIsIFwiYm9vbGVhblwiLCBcInN0cmluZ1wiLCBcImRhdGV0aW1lXCJdKS5pbmRleE9mKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlKSA8IDApIHtcclxubGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBgJHtob21lUGF0aH1hcGkvVmFsdWVMaXN0L0dyb3VwLyR7cHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGV9YCxcclxuICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICBjYWNoZTogdHJ1ZSxcclxuICAgIGFzeW5jOiB0cnVlXHJcbn0pXHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uQnlNZXRlcjtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25maWd1cmF0aW9uRmlsZUNoYW5nZXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA1LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuXHJcbmNvbnN0IENvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcyA9IChwcm9wczogeyBNZXRlcklEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2NvbmZpZ0ZpbGVzLCBzZXRDb25maWdGaWxlc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgTWlNRC5JQ29uZmlnRmlsZT4oJ0xhc3RXcml0ZVRpbWUnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW2h0bWwsIHNldEh0bWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3Nob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlsc10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgfHwgcHJvcHMuRmlsZU5hbWUgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0Q29uZmlnRmlsZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGEpID0+IHNldENvbmZpZ0ZpbGVzKGRhdGEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySUQsIHByb3BzLkZpbGVOYW1lLCBmbGFnLCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb25maWdGaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9Db25maWd1cmF0aW9uRmlsZXMvJHtwcm9wcy5NZXRlcklEfS8ke3Byb3BzLkZpbGVOYW1lfS8ke2ZsYWd9LyR7c29ydEZpZWxkfS8ke2FzY2VuZGluZyA/IDE6MH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yKGRhdGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBtb20gPSBtb21lbnQoZGF0ZSk7XHJcbiAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICAgIGxldCBkYXlzID0gbm93LmRpZmYobW9tLCAnZGF5cycpO1xyXG5cclxuICAgICAgICBpZiAoZGF5cyA8IDEpXHJcbiAgICAgICAgICAgIHJldHVybiAncmVkJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgNylcclxuICAgICAgICAgICAgcmV0dXJuICdvcmFuZ2UnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheXMgPCAzMClcclxuICAgICAgICAgICAgcmV0dXJuICd5ZWxsb3cnO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpIHx8IHByb3BzLkZpbGVOYW1lID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntwcm9wcy5GaWxlTmFtZX0gSGlzdG9yeTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9e3sgekluZGV4OiAxIH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRGbGFnKCFmbGFnKX0gdmFsdWU9e2ZsYWcgPyAnb24nIDogJ29mZid9IGNoZWNrZWQ9e2ZsYWcgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiID5TaG93IEZpbGVzIHcvbyBDaGFuZ2VzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZTxNaU1ELklDb25maWdGaWxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0xhc3RXcml0ZVRpbWUnLCBsYWJlbDogJ0xhc3QgV3JpdGUgVGltZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSBnZXRDb2xvcihpdGVtLkxhc3RXcml0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KGl0ZW0uTGFzdFdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQ2hhbmdlcycsIGxhYmVsOiAnIyBvZiBDaGFuZ2VzJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdGaWxlTmFtZScsIGxhYmVsOiAnRmlsZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChpdGVtKSA9PiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBvbkNsaWNrPXsoZSkgPT4geyBzZXRTaG93RGV0YWlscyh0cnVlKTsgc2V0SHRtbChgPHA+JHtpdGVtLlRleHQucmVwbGFjZSgvXFxuL2csICc8YnI+Jyl9PC9wPmApIH19PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGVcIj48L2k+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdUZXh0JywgbGFiZWw6ICdEaWZmJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogKGl0ZW0pID0+IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIG9uQ2xpY2s9eyhlKSA9PiB7IHNldFNob3dEZXRhaWxzKHRydWUpOyBzZXRIdG1sKGl0ZW0uSHRtbC5yZXBsYWNlKC8mcGFyYTsvZywgJycpKTsgfX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZXllXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtjb25maWdGaWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gJ0ZpbGVOYW1lJyB8fCBkLmNvbCA9PSAnVGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIFRpdGxlPXtwcm9wcy5GaWxlTmFtZX0gQ2FsbEJhY2s9eygpID0+IHsgc2V0U2hvd0RldGFpbHMoZmFsc2UpIH19IFNob3c9e3Nob3dEZXRhaWxzfSBTaG93Q2FuY2VsPXtmYWxzZX0gQ29uZmlybVRleHQ9eydDbG9zZSd9IFNob3dYPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JleScsIGZvbnRTaXplOiAxOCwgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDAsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uRmlsZUNoYW5nZXM7XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25maWd1cmF0aW9uRmlsZXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA1LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5cclxuXHJcbmNvbnN0IENvbmZpZ3VyYXRpb25GaWxlcyA9IChwcm9wczogeyBNZXRlcklEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2NvbmZpZ0ZpbGVzLCBzZXRDb25maWdGaWxlc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNaU1ELklDb25maWdGaWxlPj4oW10pO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIE1pTUQuSUNvbmZpZ0ZpbGU+KCdMYXN0V3JpdGVUaW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0Q29uZmlnRmlsZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGEpID0+IHNldENvbmZpZ0ZpbGVzKGRhdGEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySUQsIGFzY2VuZGluZywgc29ydEZpZWxkXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZpbGVzKCkge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0NvbmZpZ3VyYXRpb25GaWxlcy8ke3Byb3BzLk1ldGVySUR9L0xhc3RXcml0ZXMvJHtzb3J0RmllbGR9LyR7YXNjZW5kaW5nID8gMSA6IDB9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcihkYXRlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbW9tID0gbW9tZW50KGRhdGUpO1xyXG4gICAgICAgIGxldCBub3cgPSBtb21lbnQoKTtcclxuICAgICAgICBsZXQgZGF5cyA9IG5vdy5kaWZmKG1vbSwgJ2RheXMnKTtcclxuXHJcbiAgICAgICAgaWYgKGRheXMgPCAxKVxyXG4gICAgICAgICAgIHJldHVybiAncmVkJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgNylcclxuICAgICAgICAgICAgcmV0dXJuICdvcmFuZ2UnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheXMgPCAzMClcclxuICAgICAgICAgICAgcmV0dXJuICd5ZWxsb3cnO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGZpbGVOYW1lLCBldnQpIHtcclxuICAgICAgICBoaXN0b3J5LnB1c2goeyBwYXRobmFtZTogaG9tZVBhdGggKyAnaW5kZXguY3NodG1sJywgc2VhcmNoOiBgP25hbWU9Q29uZmlndXJhdGlvbiZNZXRlcklEPSR7cHJvcHMuTWV0ZXJJRH0mRmlsZU5hbWU9JHtmaWxlTmFtZX1gLCBzdGF0ZToge30gfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYU4ocHJvcHMuTWV0ZXJJRCkpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkNvbmZpZ3VyYXRpb24gRmlsZXM6PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGU8TWlNRC5JQ29uZmlnRmlsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0ZpbGVOYW1lJywgbGFiZWw6ICdGaWxlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICc1MCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnNTAlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0xhc3RXcml0ZVRpbWUnLCBsYWJlbDogJ0xhc3QgV3JpdGUgVGltZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kQ29sb3InXSA9IGdldENvbG9yKGl0ZW0uTGFzdFdyaXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudChpdGVtLkxhc3RXcml0ZVRpbWUpLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0NoYW5nZXMnLCBsYWJlbDogJyMgb2YgQ2hhbmdlcycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtjb25maWdGaWxlc31cclxuICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkYXRhLGV2dCkgPT4gaGFuZGxlU2VsZWN0KGRhdGEucm93LkZpbGVOYW1lLCBldnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBpdGVtLkZpbGVOYW1lID09IHByb3BzLkZpbGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uRmlsZXM7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQWN0aW9uSGVhZGVyLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xOC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IGRhdGE6IFBSQzAwMi5JQWN0aW9uLCBzdGF0ZUxpc3Q6IEFycmF5PFBSQzAwMi5JU3RhdHVzPiwgc2hvd1RpbWU6IGJvb2xlYW4gfSBcclxuXHJcbmNvbnN0IEFjdGlvbkhlYWRlciA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgICBsZXQgaXNhdXRvID0gcHJvcHMuZGF0YS5Vc2VyQWNjb3VudCA9PSAnTWlNRCc7XHJcbiAgICBsZXQgaXNDaGFuZ2UgPSBwcm9wcy5kYXRhLlN0YXRlSWQgIT0gbnVsbDtcclxuICAgIGxldCBpc05vdGUgPSAhaXNhdXRvICYmICFpc0NoYW5nZTtcclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtYXRUUyhpbnB1dDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoaW5wdXQpO1xyXG4gICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhdGVUYWcoc3RhdGVJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHN0YXQgPSBwcm9wcy5zdGF0ZUxpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT0gc3RhdGVJZClcclxuXHJcbiAgICAgICAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjNmM3NTdkJyA6IHN0YXQuQ29sb3IpLCBjb2xvcjogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyNmZmZmZmYnIDogc3RhdC5UZXh0Q29sb3IpIH19Pnsoc3RhdCA9PSB1bmRlZmluZWQgPyAnVW5rbm93bicgOiBzdGF0LkRlc2NyaXB0aW9uKX08L3NwYW4+KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb3BzLnNob3dUaW1lID8gZm9ybWF0VFMocHJvcHMuZGF0YS5UaW1lc3RhbXApICsgJzogJyA6IG51bGx9XHJcbiAgICAgICAgICAgIHtpc05vdGUgPyBwcm9wcy5kYXRhLlVzZXJBY2NvdW50ICsgJyBhZGRlZCBhIE5vdGUnIDogbnVsbH1cclxuICAgICAgICAgICAge2lzQ2hhbmdlID8gcHJvcHMuZGF0YS5Vc2VyQWNjb3VudCArICcgQ2hhbmdlZCBTdGF0dXMgdG8gJyA6IG51bGx9XHJcbiAgICAgICAgICAgIHtpc0NoYW5nZT8gc3RhdGVUYWcocHJvcHMuZGF0YS5TdGF0ZUlkKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHsoaXNhdXRvICYmICFpc0NoYW5nZSkgPyAnTWlNRCByZWNpZXZlZCBhbiB1cGRhdGVkIENvbmZpZ3VyYXRpb24gRmlsZScgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkhlYWRlcjtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBBY3Rpb25MaXN0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xOC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuL0FjdGlvbkhlYWRlcic7XHJcbmltcG9ydCBGaWVsZFZhbHVlcyBmcm9tICcuL0ZpZWxkVmFsdWVzJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IFJlY29yZElkOiBudW1iZXIsIFN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+IH1cclxuXHJcbmNvbnN0IFJlY29yZExpc3QgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aW9uTGlzdCwgc2V0QXRjaW9uTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSUFjdGlvbj4+KFtdKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkQWN0aW9uLCBzZXRTZWxlY3RlZEFjdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICAgIGNvbnN0IFtzaG93RmllbGRzLCBzZXRTaG93RmllbGRzXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVBY3Rpb25MaXN0ID0gZ2V0QWN0aW9ucygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlQWN0aW9uTGlzdCAhPSBudWxsICYmIGhhbmRsZUFjdGlvbkxpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlQWN0aW9uTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5SZWNvcmRJZCwgYXNjZW5kaW5nXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWN0aW9ucygpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklBY3Rpb24+PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLlJlY29yZElkID09IC0xKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0FjdGlvbi8ke3Byb3BzLlJlY29yZElkfS9UaW1lc3RhbXAvJHthc2NlbmRpbmc/IDEgOiAwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklBY3Rpb24+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldEF0Y2lvbkxpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3NlbGVjdGVkQWN0aW9uID4gMCA/IDxGaWVsZFZhbHVlcyBBY3Rpb25JRD17c2VsZWN0ZWRBY3Rpb259IHNob3c9e3Nob3dGaWVsZHN9IHNldFNob3c9e3NldFNob3dGaWVsZHN9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgeyhwcm9wcy5SZWNvcmRJZCA+IC0xID9cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnSUQnLCBsYWJlbDogJ0NvbmZpZ3VyYXRpb24gQ2hhbmdlIEhpc3RvcnknLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxBY3Rpb25DYXJkIGRhdGE9e2l0ZW19IHN0YXRlTGlzdD17cHJvcHMuU3RhdGVMaXN0fSBvcGVuQ29uZmlnPXsoaSkgPT4ge3NldFNlbGVjdGVkQWN0aW9uKGkpOyBzZXRTaG93RmllbGRzKHRydWUpO319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2FjdGlvbkxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtcIklEXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4geyBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQWN0aW9uQ2FyZCA9IChwcm9wczogeyBkYXRhOiBQUkMwMDIuSUFjdGlvbiwgc3RhdGVMaXN0OiBBcnJheTxQUkMwMDIuSVN0YXR1cz4sIG9wZW5Db25maWc6IChjaGFuZ2VJZDogbnVtYmVyKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGxldCBoYXNDb25maWcgPSBwcm9wcy5kYXRhLlVzZXJBY2NvdW50ID09ICdNaU1EJztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QWN0aW9uSGVhZGVyIGRhdGE9e3Byb3BzLmRhdGF9IHN0YXRlTGlzdD17cHJvcHMuc3RhdGVMaXN0fSBzaG93VGltZT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvcHMuZGF0YS5Ob3RlfTwvcD5cclxuICAgICAgICAgICAgICAgIHtoYXNDb25maWcgPyA8IGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLm9wZW5Db25maWcocHJvcHMuZGF0YS5JRCk7ICQoJyNjdXJyZW50Q29uZmlnJykuc2hvdygpOyB9fT5TaG93IENvbmZpZ3VyYXRpb248L2E+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZExpc3Q7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlndXJhdGlvbkJ5TWV0ZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA4LzIyLzIwMTkgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IFJlY29yZERldGFpbCBmcm9tICcuL1JlY29yZERldGFpbCc7XHJcbmltcG9ydCBBY3Rpb25MaXN0IGZyb20gJy4vQWN0aW9uTGlzdCc7XHJcblxyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5jb25zdCBQUkMwMDJDaGFuZ2VPdmVydmlld1BhZ2UgPSAocHJvcHM6IHsgUm9sZXM6IEFycmF5PE1pTUQuU2VjdXJpdHlSb2xlTmFtZT4sIFJlY29yZElkOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1c0xpc3QsIHNldFN0YXR1c0xpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklTdGF0dXM+PihbXSk7XHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVN0YXR1c0xpc3QgPSBnZXRTdGF0dXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZVN0YXR1c0xpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlU3RhdHVzTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JU3RhdHVzPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlU3RhdGUvTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklTdGF0dXM+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN0YXR1c0xpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAwLCBoZWlnaHQ6ICcyMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlY29yZERldGFpbCBzdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IFJlY29yZElEPXtwcm9wcy5SZWNvcmRJZH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uTGlzdCBTdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IFJlY29yZElkPXtwcm9wcy5SZWNvcmRJZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQUkMwMDJDaGFuZ2VPdmVydmlld1BhZ2U7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQmFzZUNvbmZpZy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTcvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBQUkMwMDJ9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtSZWNvcmRJRD86IG51bWJlciwgQWN0aW9uSUQ/OiBudW1iZXIsIHNob3c6IGJvb2xlYW4sIHNldFNob3c6IChiOmJvb2xlYW4pID0+IHZvaWR9XHJcblxyXG5cclxuY29uc3QgRmllbGRWYWx1ZXMgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzW10+KFtdKTtcclxuXHJcbiAgICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignRmllbGROYW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGggPSBHZXRGaWVsZHMoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaCAhPSBudWxsICYmIGguYWJvcnQgIT0gbnVsbCkgaC5hYm9ydCgpOyB9XHJcbiAgICB9LCBbcHJvcHMuUmVjb3JkSUQsIHByb3BzLkFjdGlvbklELCBhc2NlbmRpbmcsIHNvcnRCeV0pXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIEdldEZpZWxkcygpOiBKUXVlcnkuanFYSFI8YW55PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHByb3BzLkFjdGlvbklEID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZFZhbHVlLyR7cHJvcHMuUmVjb3JkSUR9LyR7c29ydEJ5fS8ke2FzY2VuZGluZyA/IDEgOiAwfWAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0ZpZWxkVmFsdWUvSGlzdG9yeS8ke3Byb3BzLkFjdGlvbklEfS8ke3NvcnRCeX0vJHthc2NlbmRpbmcgPyAxIDogMH1gLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4pID0+IHtcclxuICAgICAgICAgICAgc2V0RmllbGRzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE1vZGFsIFRpdGxlPXtwcm9wcy5BY3Rpb25JRCA9PSB1bmRlZmluZWQgPyAnQ3VycmVudCBDb25maWd1cmF0aW9uJyA6ICdSZWxhdGVkIENvbmZpZ3VyYXRpb24nfSBTaG93PXtwcm9wcy5zaG93fSBDYWxsQmFjaz17KGNvbmZpcm0pID0+IHsgcHJvcHMuc2V0U2hvdyhmYWxzZSk7IH19IFNpemU9J2xnJyBTaG93WD17dHJ1ZX0gU2hvd0NhbmNlbD17ZmFsc2V9IENvbmZpcm1UZXh0PSdDbG9zZScgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTQwLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDU0MCx9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0ZpZWxkTmFtZScsIGxhYmVsOiAnRmllbGQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnRmllbGROYW1lJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVmFsdWUnLCBsYWJlbDogJ1ZhbHVlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J1ZhbHVlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnVmFsaWQnLCBsYWJlbDogJ1ZhbGlkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7IHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnLjM3NXJlbSAuNzVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS41cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e1wiZmEgXCIgKyAoaXRlbS5WYWxpZCA/IFwiZmEtY2hlY2stY2lyY2xlXCIgOiBcImZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIpfSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2ZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRCeX1cclxuICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRCeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEJ5KGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGQpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA2MjAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGRWYWx1ZXM7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgUmVjb3JkRGV0YWlsLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xOC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgTWFudWFsQWN0aW9uIGZyb20gJy4uL0NvbW1vbi9NYW51YWxBY3Rpb24nO1xyXG5pbXBvcnQgRmllbGRWYWx1ZXMgZnJvbSAnLi9GaWVsZFZhbHVlcyc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcblxyXG5pbXBvcnQgUmVzb2x2ZVJlY29yZCBmcm9tICcuL1Jlc29sdmVSZWNvcmQnO1xyXG5pbXBvcnQgQWN0aW9uSGVhZGVyIGZyb20gJy4vQWN0aW9uSGVhZGVyJztcclxuaW1wb3J0IEJhc2VDb25maWdXaW5kb3cgZnJvbSAnLi4vQ29tbW9uL0Jhc2VDb25maWdXaW5kb3cnO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBSZWNvcmRJRDogbnVtYmVyLCBzdGF0ZUxpc3Q6IEFycmF5PFBSQzAwMi5JU3RhdHVzPiB9XHJcblxyXG5jb25zdCBSZWNvcmREZXRhaWwgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklSZWNvcmQ+KHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbbWV0ZXIsIHNldE1ldGVyXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JTWV0ZXI+KHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbYWN0aW9uLCBzZXRBY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklBY3Rpb24+KHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbYmFzZUNvbmZpZywgc2V0QmFzZUNvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSUJhc2VDb25maWc+KHVuZGVmaW5lZCk7XHJcbiAgIFxyXG4gICAgY29uc3QgW2FsbHZhbHVlTGlzdCwgc2V0QWxsVmFsdWVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+PihbXSk7XHJcblxyXG4gICAgY29uc3QgW3Nob3dBY2ssIHNldFNob3dBY2tdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dSZXYsIHNldFNob3dSZXZdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dSZXNvbHZlLCBzZXRTaG93UmVzb2x2ZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1JhcCwgc2V0U2hvd1JhcF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd05vdGUsIHNldFNob3dOb3RlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93QmFzZUNvbmZpZywgc2V0U2hvd0Jhc2VDb25maWddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93RmllbGRzLCBzZXRTaG93RmllbGRzXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVSZWNvcmQgPSBnZXRSZWNvcmQocHJvcHMuUmVjb3JkSUQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlUmVjb3JkICE9IG51bGwgJiYgaGFuZGxlUmVjb3JkLmFib3J0ICE9IG51bGwpIGhhbmRsZVJlY29yZC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5SZWNvcmRJRF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZUZpZWxkVmF1ZXMgPSBnZXRGaWVsZFZhbHVlcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlRmllbGRWYXVlcyAhPSBudWxsICYmIGhhbmRsZUZpZWxkVmF1ZXMuYWJvcnQgIT0gbnVsbCkgaGFuZGxlRmllbGRWYXVlcy5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5SZWNvcmRJRF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1ldGVyID0gZ2V0TWV0ZXIoKHJlY29yZCA9PSB1bmRlZmluZWQgPyAtMSA6IHJlY29yZC5NZXRlcklkKSk7XHJcbiAgICAgICAgbGV0IGhhbmRsZUJhc2VDb25maWcgPSBnZXRCYXNlQ29uZmlnKChyZWNvcmQgPT0gdW5kZWZpbmVkID8gLTEgOiAocmVjb3JkLkJhc2VDb25maWdJZCA9PSB1bmRlZmluZWQgPyAtMSA6IHJlY29yZC5CYXNlQ29uZmlnSWQpKSk7XHJcbiAgICAgICAgbGV0IGhhbmRsZUFjdGlvbiA9IGdldExhc3RBY3Rpb24oKHJlY29yZCA9PSB1bmRlZmluZWQgPyAtMSA6IHJlY29yZC5MYXN0QWN0aW9uSUQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZU1ldGVyICE9IG51bGwgJiYgaGFuZGxlTWV0ZXIuYWJvcnQgIT0gbnVsbCkgaGFuZGxlTWV0ZXIuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZUJhc2VDb25maWcgIT0gbnVsbCAmJiBoYW5kbGVCYXNlQ29uZmlnLmFib3J0ICE9IG51bGwpIGhhbmRsZUJhc2VDb25maWcuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZUFjdGlvbiAhPSBudWxsICYmIGhhbmRsZUFjdGlvbi5hYm9ydCAhPSBudWxsKSBoYW5kbGVBY3Rpb24uYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVjb3JkXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RmllbGRWYWx1ZXMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZTtcclxuICAgICAgICBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZFZhbHVlP3BhcmVudElEPSR7cHJvcHMuUmVjb3JkSUR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QWxsVmFsdWVMaXN0KGRhdGEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmVjb3JkKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8UFJDMDAyLklSZWNvcmQ+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlUmVjb3JkL09uZS8ke2lkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogUFJDMDAyLklSZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgc2V0UmVjb3JkKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMYXN0QWN0aW9uKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8UFJDMDAyLklBY3Rpb24+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9BY3Rpb24vT25lLyR7aWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBQUkMwMDIuSUFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb24oZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1ldGVyKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8UFJDMDAyLklNZXRlcj4ge1xyXG4gICAgICAgIGlmIChpZCA9PSAtMSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VNZXRlci9PbmUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IFBSQzAwMi5JTWV0ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgc2V0TWV0ZXIoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhc2VDb25maWcoaWQ6IG51bWJlcik6IEpRdWVyeS5qcVhIUjxQUkMwMDIuSUJhc2VDb25maWc+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9CYXNlQ29uZmlnL09ORS8ke2lkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogUFJDMDAyLklCYXNlQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gICAgIFxyXG4gICAgICAgICAgICBzZXRCYXNlQ29uZmlnKGRhdGEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0VFMoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBkYXRlID0gbW9tZW50KGlucHV0KTtcclxuICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGxldCBtZXRlclN0YXQgPSAobWV0ZXIgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcHJvcHMuc3RhdGVMaXN0LmZpbmQocyA9PiBzLklEID09IG1ldGVyLlN0YXR1c0lEKSk7XHJcbiAgICBsZXQgcmVjb3JkU3RhdCA9IChyZWNvcmQgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcHJvcHMuc3RhdGVMaXN0LmZpbmQocyA9PiBzLklEID09IHJlY29yZC5TdGF0dXMpKTtcclxuICAgIFxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIHsobWV0ZXIgPT0gdW5kZWZpbmVkPyBudWxsIDpcclxuICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0dXNSb3cgbGFiZWw9eydDb25maWd1cmF0aW9uIENoYW5nZSd9IHN0YXR1cz17cmVjb3JkU3RhdH0gVD17cmVjb3JkLlRpbWVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0dXNSb3cgbGFiZWw9eydNZXRlciAnICsgbWV0ZXIuTmFtZX0gc3RhdHVzPXttZXRlclN0YXR9IFQ9e21ldGVyLlRpbWVyfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IElzc3VlIE9wZW5lZDoge2Zvcm1hdFRTKHJlY29yZC5DcmVhdGVkKX0gYnkge3JlY29yZC5Vc2VyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IExhc3QgQWN0aW9uIFRha2VuOiB7Zm9ybWF0VFMocmVjb3JkLlRpbWVzdGFtcCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gTGFzdCBBY3Rpb246IHthY3Rpb24gIT0gdW5kZWZpbmVkID8gPEFjdGlvbkhlYWRlciBkYXRhPXthY3Rpb259IHN0YXRlTGlzdD17cHJvcHMuc3RhdGVMaXN0fSBzaG93VGltZT17ZmFsc2V9IC8+IDogbnVsbH0gPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7KGJhc2VDb25maWcgPT0gdW5kZWZpbmVkID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmc6IDUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QmFzZUNvbmZpZyh0cnVlKX0+IEJhc2UgQ29uZmlndXJhdGlvbiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dGaWVsZHModHJ1ZSkgfT4gQ3VycmVudCBDb25maWcgSXNzdWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmc6IDUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dOb3RlKHRydWUpfT4gQWRkIENvbXBsaWFuY2UgTm90ZSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7cmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJyB8fCByZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1JhcCh0cnVlKX0+IFN1Ym1pdHQgUmVtZWRpYWwgQWN0aW9uIFBsYW4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdDb21wbGlhbmNlIElzc3VlJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWNrKHRydWUpfT4gQWNrbm93bGVkZ2UgSXNzdWUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdBY2tub3dsZWRnZWQnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dSZXYodHJ1ZSl9PiBSZXZpZXcgSXNzdWUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1Jlc29sdmUodHJ1ZSl9PiBSZXNvbHZlIElzc3VlIC0gVXBkYXRlZCBCYXNlIENvbmZpZzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1hbnVhbEFjdGlvbiBSZWNvcmRJZD17cHJvcHMuUmVjb3JkSUR9IHN0YXRlPXtudWxsfSBzaG93PXtzaG93Tm90ZX0gc2V0U2hvdz17c2V0U2hvd05vdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRWYWx1ZXMgUmVjb3JkSUQ9e3Byb3BzLlJlY29yZElEfSBzaG93PXtzaG93RmllbGRzfSBzZXRTaG93PXtzZXRTaG93RmllbGRzfSAvPlxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcgfHwgcmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnUmV2aWV3ZWQnID9cclxuICAgICAgICAgICAgICAgICAgICA8TWFudWFsQWN0aW9uIFJlY29yZElkPXtwcm9wcy5SZWNvcmRJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ1JBUCBTdWJtaXR0ZWQnKX0gc2hvdz17c2hvd1JhcH0gc2V0U2hvdz17c2V0U2hvd1JhcH0vPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0NvbXBsaWFuY2UgSXNzdWUnID9cclxuICAgICAgICAgICAgICAgICAgICA8TWFudWFsQWN0aW9uIFJlY29yZElkPXtwcm9wcy5SZWNvcmRJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ0Fja25vd2xlZGdlZCcpfSBzaG93PXtzaG93QWNrfSBzZXRTaG93PXtzZXRTaG93QWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gUmVjb3JkSWQ9e3Byb3BzLlJlY29yZElEfSBzdGF0ZT17cHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLkRlc2NyaXB0aW9uID09PSAnUmV2aWV3ZWQnKX0gc2hvdz17c2hvd1Jldn0gc2V0U2hvdz17c2V0U2hvd1Jldn0vPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ1Jldmlld2VkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVSZWNvcmQgRmllbGRMaXN0PXthbGx2YWx1ZUxpc3QuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uVmFsaWQpfSBSZWNvcmRJRD17cHJvcHMuUmVjb3JkSUR9IHN0YXRlTGlzdD17cHJvcHMuc3RhdGVMaXN0fSBzaG93PXtzaG93UmVzb2x2ZX0gc2V0U2hvdz17c2V0U2hvd1Jlc29sdmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgeyhiYXNlQ29uZmlnID09IHVuZGVmaW5lZCA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbCBUaXRsZT17J0lzc3VlIEJhc2UgQ29uZmlndXJhdGlvbid9IFNob3c9e3Nob3dCYXNlQ29uZmlnfSBDYWxsQmFjaz17KGNvbmZpcm0pID0+IHsgc2V0U2hvd0Jhc2VDb25maWcoZmFsc2UpOyB9fSBTaXplPSdsZycgU2hvd1g9e3RydWV9IFNob3dDYW5jZWw9e2ZhbHNlfSBDb25maXJtVGV4dD0nQ2xvc2UnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhc2VDb25maWdXaW5kb3cgY29uZmlndXJhdGlvbkxpc3Q9e1tiYXNlQ29uZmlnXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPil9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5jb25zdCBTdGF0dXNSb3cgPSAocHJvcHM6IHsgc3RhdHVzOiBQUkMwMDIuSVN0YXR1cywgVDogbnVtYmVyLCBsYWJlbDogc3RyaW5nIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH0gaGFzIGJlZW4gaW5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc0NSUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAoc3RhdHVzID09IHVuZGVmaW5lZCA/ICcjZjhmOWZhJyA6IHByb3BzLnN0YXR1cy5Db2xvciksXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogKHN0YXR1cyA9PSB1bmRlZmluZWQgPyAnIzIxMjUyOScgOiBwcm9wcy5zdGF0dXMuVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnY2FsYyg1JSknXHJcbiAgICAgICAgICAgIH19PiB7cHJvcHMuc3RhdHVzLkRlc2NyaXB0aW9ufSA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc0NSUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAocHJvcHMuVCA8IDMwID8gJyMyOGE3NDUnIDogKHByb3BzLlQgPCA2MCA/ICcjZmZjMTA3JyA6ICcjZGMzNTQ1JykpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IChwcm9wcy5UIDwgMzAgPyAnI2ZmZmZmZicgOiAocHJvcHMuVCA8IDYwID8gJyMyMTI1MjknIDogJyNmZmZmZmYnKSksXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgIH19PiB7cHJvcHMuVH0gRGF5czwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZERldGFpbDtcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFJlc29sdmVSZWNvcmQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzIzLzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IHsgTG9hZGluZ0ljb24sIE1vZGFsLCBUb29sVGlwLCBXYXJuaW5nIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcbmltcG9ydCB7IElucHV0LCBTZWxlY3QgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IFJlY29yZElEOiBudW1iZXIsIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+LCBGaWVsZExpc3Q6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+LCBzaG93OiBib29sZWFuLCBzZXRTaG93OiAoYjogYm9vbGVhbikgPT4gdm9pZH1cclxudHlwZSBzdGVwID0gJ05vdGUnIHwgJ0NoYW5nZSdcclxuXHJcbmNvbnN0IFJlc29sdmVSZWNvcmQgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSBSZWFjdC51c2VTdGF0ZTxzdGVwPignTm90ZScpO1xyXG4gICAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbZmllbGRJbmRleCwgc2V0RmllbGRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICAgIGNvbnN0IFt1cGRhdGVkRmxkLCBzZXRVcGRhdGVkRmxkXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+PihbXSk7XHJcblxyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZTwnTm9uZScgfCAnQ29uZmlybScgfCAnQ2FuY2VsJz4oJ05vbmUnKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0Nsb3NlLCBzZXRTaG93Q2xvc2VdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dDb21wbGV0ZSwgc2V0U2hvd0NvbXBsZXRlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaWVsZFN0YXRlLCBzZXRGaWVsZFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPCdFcnJvcicgfCAnTG9hZGluZycgfCAnVmFsaWQnPignRXJyb3InKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRVcGRhdGVkRmxkKFtdKTtcclxuICAgICAgICBsZXQgaGFuZGxlcyA9IFtdO1xyXG4gICAgICAgIGhhbmRsZXMgPSBwcm9wcy5GaWVsZExpc3QubWFwKGl0ZW0gPT4gTG9hZEZpZWxkKGl0ZW0uRmllbGRJZCkpO1xyXG4gICAgICAgIHJldHVybiAoKCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVzLmZvckVhY2goaCA9PiB7IGlmIChoICE9IG51bGwgJiYgaC5hYm9ydCAhPSBudWxsKSBoLmFib3J0KCk7IH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sW3Byb3BzLkZpZWxkTGlzdF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGRTdGF0ZSgnVmFsaWQnKTtcclxuICAgICAgICBpZiAoZmllbGRJbmRleCA9PSAtMSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh1cGRhdGVkRmxkLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRGbGQubGVuZ3RoIDw9IGZpZWxkSW5kZXgpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZXRGaWVsZFN0YXRlKCdMb2FkaW5nJyk7XHJcbiAgICAgICAgbGV0IGggPSBWYWxpZGF0ZUZpZWxkKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGggIT0gbnVsbCAmJiBoLmFib3J0ICE9IG51bGwpIGguYWJvcnQoKTt9XHJcbiAgICB9LCBbdXBkYXRlZEZsZCwgZmllbGRJbmRleF0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gQ2FuY2VsKCkge1xyXG4gICAgICAgIHNldFN0ZXAoJ05vdGUnKTtcclxuICAgICAgICBzZXRGaWVsZEluZGV4KC0xKTtcclxuICAgICAgICBzZXROb3RlKCcnKTtcclxuICAgICAgICBzZXRVcGRhdGVkRmxkKFtdKVxyXG4gICAgICAgIHByb3BzLnNldFNob3coZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE5leHRTdGVwKCkge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdOb3RlJykge1xyXG4gICAgICAgICAgICBzZXRTdGVwKCdDaGFuZ2UnKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuRmllbGRMaXN0Lmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0NvbXBsZXRlKHRydWUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZEluZGV4KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLkZpZWxkTGlzdC5sZW5ndGggPT0gZmllbGRJbmRleCsxKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0NvbXBsZXRlKHRydWUpO1xyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRJbmRleCgoaW5kZXgpID0+IGluZGV4ICsgMSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTG9hZEZpZWxkKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8YW55PiB7XHJcbiAgICAgICAgbGV0IGggPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC9PbmUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBoLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBzZXRVcGRhdGVkRmxkKChhcnJheSkgPT4gWy4uLmFycmF5LCBkYXRhXSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUHJldlN0ZXAoKSB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05vdGUnKVxyXG4gICAgICAgICAgICBzZXRTaG93Q2xvc2UodHJ1ZSk7XHJcbiAgICAgICAgZWxzZSBpZiAoZmllbGRJbmRleCA9PSAwKVxyXG4gICAgICAgICAgICBzZXRTdGVwKCdOb3RlJylcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldEZpZWxkSW5kZXgoKGluZGV4KSA9PiBpbmRleCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdOb3RlJylcclxuICAgICAgICAgICAgcmV0dXJuICdSZXNvbHZlIElzc3VlJ1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuICdDaGFuZ2UgQmFzZSBDb25maWd1cmF0aW9uJ1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gVmFsaWRhdGVGaWVsZCgpOiBKUXVlcnkuanFYSFI8YW55PiB7XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRGbGRbZmllbGRJbmRleF0uVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXRGaWVsZFN0YXRlKCdFcnJvcicpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0ZpZWxkL0NoZWNrLyR7cHJvcHMuRmllbGRMaXN0W2ZpZWxkSW5kZXhdLlZhbHVlfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZEZsZFtmaWVsZEluZGV4XSBhcyBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGgudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCB8fCAhZGF0YSlcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkU3RhdGUoJ0Vycm9yJylcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRTdGF0ZSgnVmFsaWQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBoO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIFNhdmUoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIHVwZGF0ZWRGbGQuZm9yRWFjaChpdGVtID0+ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRmllbGQvVXBkYXRlYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShpdGVtKSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9BY3Rpb24vQWRkYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IE5vdGU6IG5vdGUsIFN0YXRlSWQ6IHByb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PSAnSW4gQ29tcGxpYW5jZScpLklELCBSZWNvcmRJZDogcHJvcHMuUmVjb3JkSUQgfSBhcyBQUkMwMDIuSUFjdGlvbiksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4gaGlzdG9yeS5nbygwKSlcclxuXHJcbiAgICAgICAgQ2FuY2VsKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNldEZpZWxkKGluZGV4OiBudW1iZXIsIHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgc2V0VXBkYXRlZEZsZCgoZmxkKSA9PiB7IGxldCB1cGRhdGUgPSBfLmNsb25lRGVlcChmbGQpOyB1cGRhdGVbZmllbGRJbmRleF0gPSByZWNvcmQ7IHJldHVybiB1cGRhdGU7IH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHN0ZXBDb21wbGV0ZSA9IChzdGVwID09ICdOb3RlJyA/IG5vdGUubGVuZ3RoID4gMCA6XHJcbiAgICAgICAgKHVwZGF0ZWRGbGRbZmllbGRJbmRleF0gIT0gbnVsbCAmJiBmaWVsZFN0YXRlID09ICdWYWxpZCcgJiYgISh1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdLlZhbHVlID09IG51bGwgfHwgdXBkYXRlZEZsZFtmaWVsZEluZGV4XS5WYWx1ZS5sZW5ndGggPT0gMCkgJiYgISh1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyAmJiBpc05hTihwYXJzZUZsb2F0KHVwZGF0ZWRGbGRbZmllbGRJbmRleF0uVmFsdWUpKSkpKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsIFNob3c9e3Byb3BzLnNob3d9IFRpdGxlPXtnZXRUaXRsZSgpfSBDYW5jZWxUZXh0PXsoc3RlcCA9PSAnTm90ZScgPyAnQ2FuY2VsJyA6ICdCYWNrJyl9XHJcbiAgICAgICAgICAgICAgICBTaG93WD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIENvbmZpcm1Ub29sVGlwPXsnUmVzb2x2ZUNvbmZpcm0nfSBTaXplPXsnbGcnfSBPbkhvdmVyPXtzZXRIb3Zlcn1cclxuICAgICAgICAgICAgICAgIENvbmZpcm1CdG5DbGFzcz17J2J0bi1zdWNjZXNzJyArIChzdGVwQ29tcGxldGUgPyAnJyA6ICcgZGlzYWJsZWQnKX1cclxuICAgICAgICAgICAgICAgIENvbmZpcm1UZXh0PXsoZmllbGRJbmRleCA9PSBwcm9wcy5GaWVsZExpc3QubGVuZ3RoIC0gMSA/ICdTYXZlJyA6ICdOZXh0Jyl9XHJcbiAgICAgICAgICAgICAgICBDYWxsQmFjaz17KGMsIGIpID0+IHsgaWYgKGMpIE5leHRTdGVwKCk7IGVsc2UgaWYgKGIpIFByZXZTdGVwKCk7IGVsc2Ugc2V0U2hvd0Nsb3NlKHRydWUpOyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT0gJ05vdGUnID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9ezR9IHZhbHVlPXtub3RlfSBvbkNoYW5nZT17KGUpID0+IHNldE5vdGUoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbmZpZ0ZpZWxkRWRpdCB2YWxpZFJ1bGU9e2ZpZWxkU3RhdGUgIT0gJ0Vycm9yJ30gU2V0dGVyPXsocmVjb3JkKSA9PiBTZXRGaWVsZChmaWVsZEluZGV4LCByZWNvcmQpfSBDdXJyZW50VmFsdWU9eyhmaWVsZEluZGV4ID4gLTEgPyBwcm9wcy5GaWVsZExpc3RbZmllbGRJbmRleF0gOiB1bmRlZmluZWQpfSBGaWVsZD17KGZpZWxkSW5kZXggPiAtMSA/IHVwZGF0ZWRGbGRbZmllbGRJbmRleF0gOiB1bmRlZmluZWQpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPFRvb2xUaXAgU2hvdz17aG92ZXIgPT0gJ0NvbmZpcm0nICYmICFzdGVwQ29tcGxldGV9IFBvc2l0aW9uPXsndG9wJ30gVGFyZ2V0PXsnUmVzb2x2ZUNvbmZpcm0nfSBaaW5kZXg9ezk5OTl9PlxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT0gJ05vdGUnICYmIG5vdGUubGVuZ3RoID09IDAgPyA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+QSBOb3RlIGlzIHJlcXVpcmVkLjwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT0gJ0NoYW5nZScgJiYgKHVwZGF0ZWRGbGRbZmllbGRJbmRleF0gIT0gbnVsbCAmJiAodXBkYXRlZEZsZFtmaWVsZEluZGV4XS5WYWx1ZSA9PSBudWxsIHx8IHVwZGF0ZWRGbGRbZmllbGRJbmRleF0uVmFsdWUubGVuZ3RoID09IDApKSAgPyA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+QSBWYWx1ZSBpcyByZXF1aXJlZC48L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdDaGFuZ2UnICYmIHVwZGF0ZWRGbGRbZmllbGRJbmRleF0gIT0gbnVsbCAmJiB1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyAmJiBpc05hTihwYXJzZUZsb2F0KHVwZGF0ZWRGbGRbZmllbGRJbmRleF0uVmFsdWUpKSA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5WYWx1ZSBpcyByZXF1aXJlZCB0byBuZSBhIG51bWJlci48L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdDaGFuZ2UnICYmIGZpZWxkU3RhdGUgPT0gJ0xvYWRpbmcnID8gPExvYWRpbmdJY29uIFNob3c9e3RydWV9IExhYmVsPXsnVmVyaWZ5aW5nIE5ldyBSdWxlLi4uJ30gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT0gJ0NoYW5nZScgJiYgZmllbGRTdGF0ZSA9PSAnRXJyb3InID8gPHA+IDxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIGNvbG9yOiAnI2RjMzU0NScgfX0gY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPlRoZSBuZXcgUnVsZSBuZWVkcyB0byByZXN1bHQgaW4gdGhlIGN1cnJlbnQgVmFsdWUgYmVpbmcgVmFsaWQuPC9wPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydDYW5jZWwnfSBNZXNzYWdlPXsnV2FybmluZyBhbGwgQ2hhbmdlcyB3aWxsIGJlIGxvc3QgYW5kIHRoZSBuZXcgYmFzZSBjb25maWd1cmF0aW9uIHdpbGwgbm90IGJlIGFwcGxpZWQnfSBDYWxsQmFjaz17KGMpID0+IHsgaWYgKGMpIENhbmNlbCgpOyBzZXRTaG93Q2xvc2UoZmFsc2UpIH19IFNob3c9e3Nob3dDbG9zZX0gLz5cclxuICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydXYXJuaW5nJ30gTWVzc2FnZT17J1RoaXMgd2lsbCBjaGFuZ2UgdGhlIEJhc2UgQ29uZmlndXJhdGlvbiBmb3IgdGhpcyBtZXRlciBhbmQgY2FuIG5vdCBiZSB1bmRvbmUuIEEgcGVybWFuZW50IGNvbXBsaWFuY2UgcmVjb3JkIHdpbGwgYmUgY3JlYXRlZCd9IFNob3c9e3Nob3dDb21wbGV0ZX0gQ2FsbEJhY2s9eyhjKSA9PiB7IGlmIChjKSBTYXZlKCk7IHNldFNob3dDb21wbGV0ZShmYWxzZSkgfX0vPlxyXG4gICAgICAgIDwvPilcclxufVxyXG5cclxuY29uc3QgQ29uZmlnRmllbGRFZGl0ID0gKHByb3BzOiB7IEZpZWxkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkLCBTZXR0ZXI6IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpID0+IHZvaWQsIEN1cnJlbnRWYWx1ZTogUFJDMDAyLklDb25maWdGaWVsZFN0YXR1cywgdmFsaWRSdWxlOiBib29sZWFuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBGaWVsZFR5cGVPcHRpb25zID0gW3sgVmFsdWU6ICdzdHJpbmcnLCBMYWJlbDogJ1RleHQnIH0sIHsgVmFsdWU6ICdudW1iZXInLCBMYWJlbDogJ051bWJlcicgfV07XHJcbiAgICBjb25zdCBOdW1iZXJDaGVja3MgPSBbeyBWYWx1ZTogJz0nLCBMYWJlbDogJz0nIH0sIHsgVmFsdWU6ICc8PicsIExhYmVsOiAnPD4nIH0sIHsgVmFsdWU6ICc+JywgTGFiZWw6ICc+JyB9LCB7IFZhbHVlOiAnPCcsIExhYmVsOiAnPCcgfV07XHJcbiAgICBjb25zdCBUZXh0Q2hlY2tzID0gW3sgVmFsdWU6ICc9JywgTGFiZWw6ICc9JyB9LCB7IFZhbHVlOiAnPD4nLCBMYWJlbDogJzw+JyB9LCB7IFZhbHVlOiAnSU4nLCBMYWJlbDogJ0luJyB9XTtcclxuXHJcbiAgICBmdW5jdGlvbiBWYWxpZFZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAocHJvcHMuRmllbGQuVmFsdWUgIT0gbnVsbCAmJiBwcm9wcy5GaWVsZC5WYWx1ZS5sZW5ndGggPiAwICYmIChwcm9wcy5GaWVsZC5GaWVsZFR5cGUgIT0gJ251bWJlcicgfHwgIWlzTmFOKHBhcnNlRmxvYXQocHJvcHMuRmllbGQuVmFsdWUpKSkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUnVsZVJlc3VsdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzLkN1cnJlbnRWYWx1ZSA9PSBudWxsIHx8IHByb3BzLkZpZWxkID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPiBSZWNvcmQ9e3Byb3BzLkN1cnJlbnRWYWx1ZX0gRmllbGQ9eydWYWx1ZSd9IFNldHRlcj17KCkgPT4geyB9fSBWYWxpZD17KCkgPT4gcHJvcHMudmFsaWRSdWxlfSBMYWJlbD17J0N1cnJlbnQgVmFsdWUnfSBEaXNhYmxlZD17dHJ1ZX0gRmVlZGJhY2s9eydUaGUgbmV3IFJ1bGUgbmVlZHMgdG8gYWxsb3cgdGhlIGN1cnJlbnQgVmFsdWUuJ30gLz5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDxTZWxlY3Q8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydGaWVsZFR5cGUnfSBPcHRpb25zPXtGaWVsZFR5cGVPcHRpb25zfSBMYWJlbD17J0ZpZWxkIFR5cGUnfSBEaXNhYmxlZD17dHJ1ZX0gU2V0dGVyPXsocmVjb3JkKSA9PiB7fX0gLz5cclxuICAgICAgICA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydOYW1lJ30gU2V0dGVyPXsoKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSBMYWJlbD17J0ZpZWxkJ30gRGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgPFNlbGVjdDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e3Byb3BzLkZpZWxkfSBGaWVsZD17J0NvbXBhcmlzb24nfSBPcHRpb25zPXsocHJvcHMuRmllbGQuRmllbGRUeXBlID09ICdudW1iZXInID8gTnVtYmVyQ2hlY2tzIDogVGV4dENoZWNrcyl9IExhYmVsPXsnUnVsZSd9IFNldHRlcj17KHJlY29yZCkgPT4geyBwcm9wcy5TZXR0ZXIocmVjb3JkKSB9fSAvPlxyXG4gICAgICAgIHsocHJvcHMuRmllbGQuQ29tcGFyaXNvbiA9PSAnSU4nID8gPE11bHRpSW5wdXRGaWVsZCBkYXRhPXtwcm9wcy5GaWVsZH0gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IC8+IDpcclxuICAgICAgICAgICAgPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnVmFsdWUnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgcHJvcHMuU2V0dGVyKHJlY29yZCkgfX0gVmFsaWQ9eygpID0+IFZhbGlkVmFsdWUoKX0gTGFiZWw9eydWYWx1ZSd9IEZlZWRiYWNrPXtwcm9wcy5GaWVsZC5GaWVsZFR5cGUgIT0gJ251bWJlcicgPyAnVmFsdWUgaXMgcmVxdWlyZWQuJyA6ICdWYWx1ZSBpcyByZXF1aXJlZCBhbmQgbmVlZHMgdG8gYmUgYSBudW1iZXIuJ30gLz5cclxuICAgICAgICApfVxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5jb25zdCBNdWx0aUlucHV0RmllbGQgPSAocHJvcHM6IHsgZGF0YTogUFJDMDAyLklDb25maWdGaWVsZCwgU2V0dGVyOiAocmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFtsaXN0VmFsdWVzLCBzZXRMaXN0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PHN0cmluZz4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldExpc3RWYWx1ZXMocHJvcHMuZGF0YS5WYWx1ZS5zcGxpdCgnOycpKVxyXG4gICAgfSwgW3Byb3BzLmRhdGFdKVxyXG5cclxuICAgIGZ1bmN0aW9uIFNldChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgcmVjID0gXy5jbG9uZURlZXAocHJvcHMuZGF0YSk7XHJcbiAgICAgICAgbGV0IGxzdCA9IF8uY2xvbmUobGlzdFZhbHVlcyk7XHJcbiAgICAgICAgbHN0W2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgIHJlYy5WYWx1ZSA9IGxzdC5qb2luKCc7Jyk7XHJcbiAgICAgICAgcHJvcHMuU2V0dGVyKHJlYylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBBZGROZXcoKSB7XHJcbiAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgIGxzdC5wdXNoKChwcm9wcy5kYXRhLkZpZWxkVHlwZSA9PSAnc3RyaW5nJyA/ICdWYWx1ZScgOiAnMCcpKVxyXG4gICAgICAgIHJlYy5WYWx1ZSA9IGxzdC5qb2luKCc7Jyk7XHJcbiAgICAgICAgcHJvcHMuU2V0dGVyKHJlYylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcclxuICAgICAgICBsZXQgcmVjID0gXy5jbG9uZURlZXAocHJvcHMuZGF0YSk7XHJcbiAgICAgICAgbGV0IGxzdCA9IF8uY2xvbmUobGlzdFZhbHVlcyk7XHJcbiAgICAgICAgbHN0LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgIHByb3BzLlNldHRlcihyZWMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7bGlzdFZhbHVlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZGV4ID09IDAgPyA8bGFiZWw+VmFsdWVzPC9sYWJlbD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7IFNldChpbmRleCwgZXZ0LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpIH19IHZhbHVlPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgb25DbGljaz17KCkgPT4gQWRkTmV3KCl9PiBBZGQgPC9idXR0b24+XHJcbiAgICAgICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNvbHZlUmVjb3JkO1xyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQmFzZUNvbmZpZ1dpbmRvdy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTAvMjAyMSAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5jb25zdCBCYXNlQ29uZmlnV2luZG93ID0gKHByb3BzOiB7IGNvbmZpZ3VyYXRpb25MaXN0OiBQUkMwMDIuSUJhc2VDb25maWdbXSB9KSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICAgIGNvbnN0IFtmaWVsZExpc3QsIHNldEZpZWxkTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkPj4oW10pO1xyXG5cclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdOYW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFRhYiA9PSAtMSAmJiBwcm9wcy5jb25maWd1cmF0aW9uTGlzdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGFiKHByb3BzLmNvbmZpZ3VyYXRpb25MaXN0WzBdLklEKTtcclxuICAgICAgICBpZiAocHJvcHMuY29uZmlndXJhdGlvbkxpc3QubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUYWIoLTEpXHJcbiAgICB9LCBbcHJvcHMuY29uZmlndXJhdGlvbkxpc3RdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoID0gZ2V0RmllbGRMaXN0KCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGggIT0gbnVsbCAmJiBoLmFib3J0ICE9IG51bGwpIGguYWJvcnQoKTsgfVxyXG4gICAgfSwgW2N1cnJlbnRUYWIsIGFzY2VuZGluZywgc29ydEZpZWxkXSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RmllbGRMaXN0KCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSUJhc2VDb25maWc+PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUYWIgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC8ke2N1cnJlbnRUYWJ9LyR7c29ydEZpZWxkfS8ke2FzY2VuZGluZyA/IDEgOiAwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklDb25maWdGaWVsZD4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICBzZXRGaWVsZExpc3QoZGF0YSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICB7cHJvcHMuY29uZmlndXJhdGlvbkxpc3QubGVuZ3RoID4gMSA/XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jb25maWd1cmF0aW9uTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmtcIiArIChjdXJyZW50VGFiID09IGl0ZW0uSUQgPyBcIiBhY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50VGFiKGl0ZW0uSUQpfT57aXRlbS5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC91bD4gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtjdXJyZW50VGFiICE9IC0xID8gPCBkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIzNSwgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FyZFwifSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND4gQ29uZmlndXJhdGlvbiB7cHJvcHMuY29uZmlndXJhdGlvbkxpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT0gY3VycmVudFRhYikuTmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYXJkLWJvZHlcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDU0MCwgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1NDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxQUkMwMDIuSUJhc2VDb25maWc+IFJlY29yZD17cHJvcHMuY29uZmlndXJhdGlvbkxpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT0gY3VycmVudFRhYil9IEZpZWxkPXsnUGF0dGVybid9IFNldHRlcj17KCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gTGFiZWw9eydGaWxlIFBhdHRlcm4nfSBEaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFBSQzAwMi5JQ29uZmlnRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdGaWVsZCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydOYW1lJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRmllbGRUeXBlJywgbGFiZWw6ICdUeXBlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0ZpZWxkVHlwZSd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0NvbXBhcmlzb24nLCBsYWJlbDogJ1J1bGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnQ29tcGFyaXNvbid9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1ZhbHVlJywgbGFiZWw6ICdWYWx1ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydWYWx1ZSd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtmaWVsZExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9eydOYW1lJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNjY2LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gOiBudWxsfVxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQmFzZUNvbmZpZ0J5TWV0ZXIgPSAocHJvcHM6IHsgTWV0ZXJJZDogbnVtYmVyIH0pID0+IHtcclxuICAgIGNvbnN0IFtjb25maWd1cmF0aW9ubGlzdCwgc2V0Q29uZmlndXJhdGlvbkxpc3RdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklCYXNlQ29uZmlnW10+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoID0gZ2V0QmFzZUNvbmZpZ3MoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaCAhPSBudWxsICYmIGguYWJvcnQgIT0gbnVsbCkgaC5hYm9ydCgpOyB9XHJcbiAgICB9LCBbcHJvcHMuTWV0ZXJJZF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhc2VDb25maWdzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSUJhc2VDb25maWc+PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLk1ldGVySWQgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0Jhc2VDb25maWc/cGFyZW50SUQ9JHtwcm9wcy5NZXRlcklkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIHNldENvbmZpZ3VyYXRpb25MaXN0KGRhdGEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPEJhc2VDb25maWdXaW5kb3cgY29uZmlndXJhdGlvbkxpc3Q9e2NvbmZpZ3VyYXRpb25saXN0fSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29uZmlnV2luZG93O1xyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTWFudWFsQWN0aW9uLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xOC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCB7IFBSQzAwMn0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IE1vZGFsLCBXYXJuaW5nIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcblxyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcbmludGVyZmFjZSBJUHJvcHMgeyBzaG93OiBib29sZWFuLCBzZXRTaG93OiAoYjogYm9vbGVhbikgPT4gdm9pZCwgUmVjb3JkSWQ/OiBudW1iZXIsIE1ldGVySWQ/OiBudW1iZXIsIHN0YXRlOiBQUkMwMDIuSVN0YXR1c31cclxuXHJcblxyXG5jb25zdCBNYW51YWxBY3Rpb24gPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbVG9mZnNldCwgc2V0VG9mZnNldF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW3Nob3dXYXJuaW5nLCBzZXRXYXJuaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuICdBZGQgQ29tcGxpYW5jZSBOb3RlJ1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdBY2tub3dsZWRnZSBBbGVydCdcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ1Jldmlld2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdSZXZpZXcgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSQVAgU3VibWl0dGVkJylcclxuICAgICAgICAgICAgcmV0dXJuICdDcmVhdGUgUmVtZWRpYWwgQWN0aW9uIFBsYW4nXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdDb21wbGlhbmNlIElzc3VlJylcclxuICAgICAgICAgICAgcmV0dXJuICdTdWJtaXQgQ29tcGxpYW5jZSBJc3N1ZSdcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QnRuKCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiAnQWRkIE5vdGUnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdBY2tub3dsZWRnZWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0Fja25vd2xlZGdlZCBBbGVydCdcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ1Jldmlld2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdSZXZpZXdlZCBBbGVydCdcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ1JBUCBTdWJtaXR0ZWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0NyZWF0ZSBSZW1lZGlhbCBBY3Rpb24gUGxhbidcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ0NvbXBsaWFuY2UgSXNzdWUnKVxyXG4gICAgICAgICAgICByZXR1cm4gJ1N1Ym1pdHQnXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb25maXJtKGM6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoYyAmJiBwcm9wcy5zdGF0ZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHN1Ym1pdHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjICYmIHByb3BzLnN0YXRlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRXYXJuaW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjKSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRUb2Zmc2V0KDApO1xyXG4gICAgICAgICAgICBzZXROb3RlKCcnKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXR0KCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5SZWNvcmRJZCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRSZWNvcmQoKTtcclxuICAgICAgICBpZiAocHJvcHMuTWV0ZXJJZCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRNZXRlcigpXHJcblxyXG4gICAgICAgIHNldE5vdGUoXCJcIik7XHJcbiAgICAgICAgc2V0VG9mZnNldCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXR0UmVjb3JkKCkge1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSB7IE5vdGU6IG5vdGUsIFN0YXRlSWQ6IG51bGwsIFJlY29yZElkOiBwcm9wcy5SZWNvcmRJZCB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYWN0aW9uLlN0YXRlSWQgPSBwcm9wcy5zdGF0ZS5JRDtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0FjdGlvbi9BZGRgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGFjdGlvbiBhcyBQUkMwMDIuSUFjdGlvbiksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4gaGlzdG9yeS5nbygwKSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXR0TWV0ZXIoKSB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdDb21wbGlhbmNlIElzc3VlJylcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZVJlY29yZC9BZGRgLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBNZXRlcklkOiBwcm9wcy5NZXRlcklkLCBUaW1lck9mZnNldDogVG9mZnNldCwgU3RhdHVzOiBwcm9wcy5zdGF0ZS5JRCwgTm90ZTogbm90ZSB9KSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEgPT4gaGlzdG9yeS5nbygwKSkpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvUkFQU3VibWl0dGAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IG1ldGVySWQ6IHByb3BzLk1ldGVySWQsIE5vdGU6IG5vdGUgfSksXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICB9KS50aGVuKChkYXRhID0+IGhpc3RvcnkuZ28oMCkpKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8TW9kYWwgU2hvdz17cHJvcHMuc2hvd30gVGl0bGU9e2dldFRpdGxlKCl9IENvbmZpcm1UZXh0PXtnZXRCdG4oKX0gQ2FuY2VsQnRuQ2xhc3M9eydDYW5jZWwnfSBDYWxsQmFjaz17KGMpID0+IHsgY29uZmlybShjKSB9fSBTaXplPSdzbSc+IFxyXG4gICAgICAgICAgICB7KHByb3BzLnN0YXRlICE9IHVuZGVmaW5lZCAmJiBwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQ29tcGxpYW5jZSBJc3N1ZScpP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob3RlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcm93cz17NH0gdmFsdWU9e25vdGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZSgoZS50YXJnZXQgYXMgYW55KS52YWx1ZSl9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGF5cyBvdXQgb2YgQ29tcGxpYW5jZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9eydudW1iZXInfSB2YWx1ZT17VG9mZnNldH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUb2Zmc2V0KHBhcnNlSW50KChlLnRhcmdldCBhcyBhbnkpLnZhbHVlIGFzIHN0cmluZykpfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9ezR9IHZhbHVlPXtub3RlfSBvbkNoYW5nZT17KGUpID0+IHNldE5vdGUoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFNob3c9e3Nob3dXYXJuaW5nfSBUaXRsZT17J1dhcm5pbmcnfSBNZXNzYWdlPXsnVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUuIEl0IHdpbGwgY3JlYXRlIGEgcGVybWFuZW50IGNvbXBsaWFuY2UgcmVjb3JkLid9IENhbGxCYWNrPXsocmVzdWx0KSA9PiB7IGlmIChyZXN1bHQpIHN1Ym1pdHQoKTsgc2V0V2FybmluZyhmYWxzZSkgfX0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFudWFsQWN0aW9uO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERvd2xvYWRGaWxlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMC8yNy8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IE1ldGVySWQ6IG51bWJlciB9XHJcbmludGVyZmFjZSBJRmlsZSB7IElEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcgfVxyXG5cclxuY29uc3QgRG93bG9hZEZpbGVzID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPElGaWxlW10+KFtdKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gZ2V0RmlsZXMoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ICE9IG51bGwpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklkLCBhc2NlbmRpbmddKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGaWxlcygpOiBKUXVlcnkuanFYSFI8QXJyYXk8SUZpbGU+PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLk1ldGVySWQgPT0gLTEgfHwgcHJvcHMuTWV0ZXJJZCA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9HZXRGaWxlcy8ke3Byb3BzLk1ldGVySWR9LyR7YXNjZW5kaW5nPyAxOiAwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8SUZpbGU+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgc2V0RmlsZUxpc3QoZGF0YSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxUYWJsZTxJRmlsZT4gXHJcbiAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRmlsZU5hbWUnLCBsYWJlbDogJ0ZpbGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0Rvd2xvYWRGaWxlLyR7aXRlbS5JRH1gKX0+IERvd25sb2FkIDwvYnV0dG9uPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2ZpbGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9eydGaWxlTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7IHNldEFzY2VuZGluZyghYXNjZW5kaW5nKX19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG93bG9hZEZpbGVzO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1ldGVyRGV0YWlsLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8wNC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgV2FybmluZyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnXHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgTWFudWFsQWN0aW9uIGZyb20gJy4uL0NvbW1vbi9NYW51YWxBY3Rpb24nO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBNZXRlcklEOiBudW1iZXIsIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+IH1cclxuXHJcbmNvbnN0IE1ldGVyRGV0YWlsID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93UmV2aWV3ZWQsIHNldFNob3dSZXZpZXdlZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbbWV0ZXIsIHNldE1ldGVyXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JTWV0ZXI+KHVuZGVmaW5lZCk7XHJcblxyXG4gICAgY29uc3QgW3Nob3dSQVAsIHNldFNob3dSQVBdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgICBjb25zdCBbc2hvd0FkZElzc3VlLCBzZXRTaG93QWRkSXNzdWVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlTWV0ZXIgPSBnZXRNZXRlcihwcm9wcy5NZXRlcklEKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZU1ldGVyICE9IG51bGwgJiYgaGFuZGxlTWV0ZXIuYWJvcnQgIT0gbnVsbCkgaGFuZGxlTWV0ZXIuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuTWV0ZXJJRF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1ldGVyKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8UFJDMDAyLklNZXRlcj4ge1xyXG4gICAgICAgIGlmIChpZCA9PSAtMSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VNZXRlci9PbmUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IFBSQzAwMi5JTWV0ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgc2V0TWV0ZXIoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIGxldCBzdGF0ID0gKG1ldGVyID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHByb3BzLnN0YXRlTGlzdC5maW5kKHMgPT4gcy5JRCA9PSBtZXRlci5TdGF0dXNJRCkpO1xyXG4gICAgbGV0IGxibFN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnIzAwMDAwMCcgOiBzdGF0LkNvbG9yKSxcclxuICAgICAgICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgY29sb3I6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjMDAwMDAwJyA6IHN0YXQuVGV4dENvbG9yKSxcclxuICAgICAgICBoZWlnaHQ6ICcyNXB4J1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBBY3RpdmF0ZU1ldGVyKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VNZXRlci9BY3RpdmF0ZS8ke21ldGVyLklEfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoaXN0b3J5LmdvKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXRlciAhPSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5sYmxTdHlsZSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXRlciBub3QgaW4gQ29tcGxpYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICd4eC1sYXJnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogKG1ldGVyLlRpbWVyIDwgMzAgPyAnIzI4YTc0NScgOiAobWV0ZXIuVGltZXIgPCA2MCA/ICcjZmZjMTA3JyA6ICcjZGMzNTQ1JyApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAobWV0ZXIuVGltZXIgPCAzMCA/ICcjZmZmZmZmJyA6IChtZXRlci5UaW1lciA8IDYwID8gJyMyMTI1MjknIDogJyNmZmZmZmYnKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KG1ldGVyLlN0YXR1cyA9PSAnSW4gQ29tcGxpYW5jZScgPyAwIDogbWV0ZXIuVGltZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bGJsU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERheXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeyhtZXRlciAhPSB1bmRlZmluZWQpID8gXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWV0ZXIuUmV2aWV3ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWRkSXNzdWUodHJ1ZSl9ID4gQWRkIENvbXBsaWFuY2UgSXNzdWUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dSQVAodHJ1ZSl9ID4gU3VibWl0dCBSZW1lZGlhbCBBY3Rpb24gUGxhbiA8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gTWV0ZXJJZD17cHJvcHMuTWV0ZXJJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ0NvbXBsaWFuY2UgSXNzdWUnKX0gc2hvdz17c2hvd0FkZElzc3VlfSBzZXRTaG93PXtzZXRTaG93QWRkSXNzdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hbnVhbEFjdGlvbiBNZXRlcklkPXtwcm9wcy5NZXRlcklEfSBzdGF0ZT17cHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLkRlc2NyaXB0aW9uID09PSAnUkFQIFN1Ym1pdHRlZCcpfSBzaG93PXtzaG93UkFQfSBzZXRTaG93PXtzZXRTaG93UkFQfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+IDogPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1Jldmlld2VkKHRydWUpfT4gTWV0ZXIgUmV2aWV3ZWQgZm9yIENvbXBsaWFuY2UgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydXYXJuaW5nJ30gTWVzc2FnZT17J1RoaXMgd2lsbCBhY3RpdmF0ZSB0aGUgTWlNRCBQUkMwMDIgbW9uaXRvcmluZyBmb3IgdGhpcyBtZXRlci4gUGxlYXNlIFJldmlldyB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIGJlZm9yZSBwcm9jZWVkaW5nJ30gQ2FsbEJhY2s9eyhyZXN1bHQpID0+IHsgaWYgKHJlc3VsdCkgQWN0aXZhdGVNZXRlcigpOyBzZXRTaG93UmV2aWV3ZWQoZmFsc2UpOyB9fSBTaG93PXtzaG93UmV2aWV3ZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz59ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGVyRGV0YWlsO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1ldGVyT3ZlcnZpZXdQYWdlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8yMi8yMDE5IC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IFJlY29yZExpc3QgZnJvbSAnLi9SZWNvcmRMaXN0JztcclxuaW1wb3J0IE1ldGVyRGV0YWlsIGZyb20gJy4vTWV0ZXJEZXRhaWwnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuXHJcbmltcG9ydCB7IExvYWRpbmdJY29uLCBNb2RhbCwgU2VhcmNoLCBTZWFyY2hCYXIgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgeyBUb29sVGlwIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcbmltcG9ydCBEb3dsb2FkRmlsZXMgZnJvbSAnLi9Eb3dsb2FkRmlsZSc7XHJcbmltcG9ydCB7IEJhc2VDb25maWdCeU1ldGVyIH0gZnJvbSAnLi4vQ29tbW9uL0Jhc2VDb25maWdXaW5kb3cnO1xyXG5pbXBvcnQgTmV3TWV0ZXJXaXp6YXJkIGZyb20gJy4uL01ldGVyV2l6emFyZC9OZXdNZXRlcldpenphcmQnO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmNvbnN0IHN0YW5kYXJkU2VhcmNoOiBTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+W10gPSBbXHJcbiAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ05hbWUnLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdBc3NldEtleScsIGxhYmVsOiAnQXNzZXQgS2V5JywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnTWFrZScsIGxhYmVsOiAnTWFrZScsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ01vZGVsJywgbGFiZWw6ICdNb2RlbCcsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ1N0YXR1cycsIGxhYmVsOiAnQ29tcGxpYW5jZSBTdGF0dXMnLCB0eXBlOiAnZW51bScsIGVudW06IFtdIH1cclxuXTtcclxuXHJcbmNvbnN0IFBSQzAwMk1ldGVyT3ZlcnZpZXdQYWdlID0gKHByb3BzOiB7IFJvbGVzOiBBcnJheTxNaU1ELlNlY3VyaXR5Um9sZU5hbWU+LCBNZXRlcklEOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW21ldGVyRmlsdGVycywgc2V0TWV0ZXJGaWx0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPFNlYXJjaC5JRmlsdGVyPFBSQzAwMi5JTWV0ZXI+W10+KFtdKTtcclxuICAgIGNvbnN0IFtzdGF0dXNMaXN0LCBzZXRTdGF0dXNMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JU3RhdHVzPj4oW10pO1xyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJhYmxlTGlzdCwgc2V0RmlsdGVyYWJsZUxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8U2VhcmNoLklGaWVsZDxNaU1ELk1ldGVyPj4+KHN0YW5kYXJkU2VhcmNoKTtcclxuXHJcbiAgICBjb25zdCBbbWV0ZXJTb3J0LCBzZXRNZXRlclNvcnRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgUFJDMDAyLklNZXRlcj4oXCJTdGF0dXNcIik7XHJcbiAgICBjb25zdCBbbWV0ZXJBc2MsIHNldE1ldGVyQXNjXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFttZXRlckxpc3QsIHNldE1ldGVyTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSU1ldGVyPj4oW10pXHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkTWV0ZXIsIHNldFNlbGVjdGVkTWV0ZXJdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklNZXRlcj4obnVsbCk7XHJcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IFJlYWN0LnVzZVN0YXRlPCgnTm9uZScgfCAnRmlsZXMnIHwgJ0Jhc2VDb25maWcnKT4oJ05vbmUnKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd05ld01ldGVyV2l6YXJkLCBzZXRTaG93TmV3TWV0ZXJXaXphcmRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dCYXNlQ29uZmlnLCBzZXRTaG93QmFzZUNvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0ZpbGVzLCBzZXRTaG93RmlsZXNdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlYXJjaFN0YXRlLCBzZXRTZWFyY2hTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTwoJ0lkbGUnIHwgJ0xvYWRpbmcnKT4oJ0lkbGUnKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVTdGF0dXNMaXN0ID0gZ2V0U3RhdHVzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVTdGF0dXNMaXN0LmFib3J0ICE9IG51bGwpIGhhbmRsZVN0YXR1c0xpc3QuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hTdGF0ZSgnTG9hZGluZycpO1xyXG4gICAgICAgIGxldCBoID0gZ2V0TWV0ZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGggIT0gbnVsbCAmJiBoLmFib3J0ICE9IG51bGwpIGguYWJvcnQoKTsgfVxyXG4gICAgfSwgW21ldGVyU29ydCwgbWV0ZXJBc2MsIG1ldGVyRmlsdGVyc10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gbWV0ZXJMaXN0LmZpbmRJbmRleChtID0+IG0uSUQgPT0gcHJvcHMuTWV0ZXJJRCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZE1ldGVyKG51bGwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRNZXRlcihtZXRlckxpc3RbaW5kZXhdKTtcclxuICAgIH0sIFtwcm9wcy5NZXRlcklELCBtZXRlckxpc3RdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBnZXRBZGRpdGlvbmFsRmllbGRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gbnVsbCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFkZGl0aW9uYWxGaWVsZHMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1pTUQuQWRkaXRpb25hbEZpZWxkPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0FkZGl0aW9uYWxGaWVsZC9QYXJlbnRUYWJsZS9NZXRlcmAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBDb252ZXJ0VHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnaW50ZWdlcicgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdkYXRldGltZScgfHwgdHlwZSA9PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbnVtJywgZW51bTogW3sgTGFiZWw6IHR5cGUsIFZhbHVlOiB0eXBlIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkOiBBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4pID0+IHtcclxuICAgICAgICAgICAgbGV0IG9yZGVyZWQgPSBfLm9yZGVyQnkoc3RhbmRhcmRTZWFyY2guY29uY2F0KGQubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogaXRlbS5GaWVsZE5hbWUsIGtleTogaXRlbS5GaWVsZE5hbWUsIC4uLkNvbnZlcnRUeXBlKGl0ZW0uVHlwZSkgfSBhcyBTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+XHJcbiAgICAgICAgICAgICkpKSwgWydsYWJlbCddLCBbXCJhc2NcIl0pO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJhYmxlTGlzdChvcmRlcmVkKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklTdGF0dXM+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VTdGF0ZS9MaXN0YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSVN0YXR1cz4pID0+IHtcclxuICAgICAgICAgICAgc2V0U3RhdHVzTGlzdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRNZXRlcklEKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBoaXN0b3J5LnB1c2goJ2luZGV4LmNzaHRtbD9uYW1lPVBSQzAwMk92ZXJ2aWV3Jk1ldGVySUQ9JyArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JTWV0ZXI+PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvU2VhcmNoYWJsZUxpc3RgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgU2VhcmNoZXM6IG1ldGVyRmlsdGVycywgT3JkZXJCeTogbWV0ZXJTb3J0LCBBc2NlbmRpbmc6IG1ldGVyQXNjIH0pLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSU1ldGVyPikgPT4ge1xyXG4gICAgICAgICAgICBzZXRNZXRlckxpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFN0YXRlKCdJZGxlJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXI8UFJDMDAyLklNZXRlcj4gU2V0RmlsdGVyPXtzZXRNZXRlckZpbHRlcnN9IENvbGx1bW5MaXN0PXtmaWx0ZXJhYmxlTGlzdH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xsdW1uPXt7IGtleTogJ05hbWUnLCBsYWJlbDogJ05hbWUnLCB0eXBlOiAnc3RyaW5nJyB9fVxyXG4gICAgICAgICAgICAgICAgRGlyZWN0aW9uPXsnbGVmdCd9IExhYmVsPXsnU2VhcmNoJ30gV2lkdGg9eyc1MCUnfVxyXG4gICAgICAgICAgICAgICAgR2V0RW51bT17KHNldE9wdGlvbnMsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmtleSA9PSAnU3RhdHVzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25zKHN0YXR1c0xpc3QubWFwKGl0ZW0gPT4gKHsgTGFiZWw6IGl0ZW0uRGVzY3JpcHRpb24sIFZhbHVlOiBpdGVtLkRlc2NyaXB0aW9uIH0pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgIT0gJ2VudW0nIHx8IGZpZWxkLmVudW0gPT0gdW5kZWZpbmVkIHx8IGZpZWxkLmVudW0ubGVuZ3RoICE9IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1ZhbHVlTGlzdC9Hcm91cC8ke2ZpZWxkLmVudW1bMF0uVmFsdWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuZG9uZShkID0+IHNldE9wdGlvbnMoZC5tYXAoaXRlbSA9PiAoeyBWYWx1ZTogaXRlbS5WYWx1ZS50b1N0cmluZygpLCBMYWJlbDogaXRlbS5UZXh0IH0pKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGhhbmRsZSAhPSBudWxsICYmIGhhbmRsZS5hYm9ydCA9PSBudWxsKSBoYW5kbGUuYWJvcnQoKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgUmVzdWx0PXtzZWFyY2hTdGF0ZSA9PSAnTG9hZGluZycgPyA8TG9hZGluZ0ljb24gU2hvdz17dHJ1ZX0gLz4gOiAnRm91bmQgJyArIG1ldGVyTGlzdC5sZW5ndGggKyAnIE1ldGVycyd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZ1JpZ2h0OiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiYm9yZGVyXCIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJ3LWF1dG9cIiBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fT5BY3Rpb25zOjwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmV3TWV0ZXJXaXphcmQodHJ1ZSl9PiBBZGQgTmV3IE1ldGVyIHRvIFBSQzAwMiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiArIChzZWxlY3RlZE1ldGVyID09IG51bGwgPyAnIGRpc2FibGVkJyA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPXsnQmFzZUNvbmZpZyd9IG9uQ2xpY2s9eygpID0+IHNldFNob3dCYXNlQ29uZmlnKHNlbGVjdGVkTWV0ZXIgIT0gbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlcignQmFzZUNvbmZpZycpfSBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlcignTm9uZScpfT4gTWV0ZXIgQ29uZmlndXJhdGlvbiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiICsgKHNlbGVjdGVkTWV0ZXIgPT0gbnVsbCA/ICcgZGlzYWJsZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXIoJ0ZpbGVzJyl9IG9uTW91c2VPdXQ9eygpID0+IHNldEhvdmVyKCdOb25lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9vbHRpcD17J0ZpbGVzJ30gb25DbGljaz17KCkgPT4gc2V0U2hvd0ZpbGVzKHNlbGVjdGVkTWV0ZXIgIT0gbnVsbCl9ID4gRG93bmxvYWQgRmlsZXMgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoQmFyPlxyXG4gICAgICAgICAgICA8VG9vbFRpcCBQb3NpdGlvbj17J2JvdHRvbSd9IFNob3c9e2hvdmVyPT0nRmlsZXMnICYmIHNlbGVjdGVkTWV0ZXIgPT0gbnVsbCB9IFRhcmdldD17J0ZpbGVzJ30+XHJcbiAgICAgICAgICAgICAgICA8cD4gQSBNZXRlciBuZWVkcyB0byBiZSBzZWxlY3RlZC48L3A+XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgPFRvb2xUaXAgUG9zaXRpb249eydib3R0b20nfSBTaG93PXtob3ZlciA9PSAnQmFzZUNvbmZpZycgJiYgc2VsZWN0ZWRNZXRlciA9PSBudWxsfSBUYXJnZXQ9eydCYXNlQ29uZmlnJ30+XHJcbiAgICAgICAgICAgICAgICA8cD4gQSBNZXRlciBuZWVkcyB0byBiZSBzZWxlY3RlZC48L3A+XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgPE1vZGFsIFRpdGxlPXsnTWV0ZXIgQmFzZSBDb25maWd1cmF0aW9uJ30gU2hvdz17c2hvd0Jhc2VDb25maWd9IENhbGxCYWNrPXsoY29uZmlybSkgPT4geyBzZXRTaG93QmFzZUNvbmZpZyhmYWxzZSk7IH19IFNpemU9J2xnJyBTaG93WD17dHJ1ZX0gU2hvd0NhbmNlbD17ZmFsc2V9IENvbmZpcm1UZXh0PSdDbG9zZScgPlxyXG4gICAgICAgICAgICAgICAgPEJhc2VDb25maWdCeU1ldGVyIE1ldGVySWQ9e3Byb3BzLk1ldGVySUR9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxNb2RhbCBUaXRsZT17J0Rvd25sb2FkIEN1cnJlbnQgQ29uZmlnIEZpbGUnfSBTaG93PXtzaG93RmlsZXN9IENhbGxCYWNrPXsoY29uZmlybSkgPT4geyBzZXRTaG93RmlsZXMoZmFsc2UpOyB9fSBTaXplPSdzbScgU2hvd1g9e3RydWV9IFNob3dDYW5jZWw9e2ZhbHNlfSBDb25maXJtVGV4dD0nQ2xvc2UnPlxyXG4gICAgICAgICAgICAgICAgPERvd2xvYWRGaWxlcyBNZXRlcklkPXtwcm9wcy5NZXRlcklEfSAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8TmV3TWV0ZXJXaXp6YXJkIHNob3c9e3Nob3dOZXdNZXRlcldpemFyZH0gc2V0U2hvdz17c2V0U2hvd05ld01ldGVyV2l6YXJkfSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8UFJDMDAyLklNZXRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ01ldGVyJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01vZGVsJywgbGFiZWw6ICdNb2RlbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNYWtlJywgbGFiZWw6ICdNYWtlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ1N0YXR1cycsIGxhYmVsOiAnU3RhdHVzJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdCA9IHN0YXR1c0xpc3QuZmluZChzID0+IHMuSUQgPT09IGl0ZW0uU3RhdHVzSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnI2Y4ZjlmYScgOiBzdGF0LkNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyMyMTI1MjknIDogc3RhdC5UZXh0Q29sb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+IHtpdGVtLlN0YXR1c30gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXttZXRlckxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e21ldGVyU29ydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17bWV0ZXJBc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IG1ldGVyU29ydCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1ldGVyQXNjKCFtZXRlckFzYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJTb3J0KGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyBzZXRNZXRlcklEKGQucm93LklEKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiAnY2FsYygxMDAlIC0gODBweCknLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBpdGVtLklEID09PSBwcm9wcy5NZXRlcklEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBoZWlnaHQ6ICcyMDBweCcsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1ldGVyRGV0YWlsIE1ldGVySUQ9eyhpc05hTihwcm9wcy5NZXRlcklEKSA/IC0xIDogcHJvcHMuTWV0ZXJJRCl9IHN0YXRlTGlzdD17c3RhdHVzTGlzdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY29yZExpc3QgTWV0ZXJJZD17KGlzTmFOKHByb3BzLk1ldGVySUQpID8gLTEgOiBwcm9wcy5NZXRlcklEKX0gU3RhdGVMaXN0PXtzdGF0dXNMaXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQUkMwMDJNZXRlck92ZXJ2aWV3UGFnZTtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNZXRlckNoYW5nZVBhbi50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMDQvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgTWV0ZXJJZDogbnVtYmVyLCBTdGF0ZUxpc3Q6IEFycmF5PFBSQzAwMi5JU3RhdHVzPiB9XHJcblxyXG5jb25zdCBSZWNvcmRMaXN0ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2NoYW5nZUxpc3QsIHNldENoYW5nZUxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklSZWNvcmQ+PihbXSk7XHJcbiAgICBjb25zdCBbcmVjb3JkU29ydCwgc2V0UmVjb3JkU29ydF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiU3RhdHVzXCIpO1xyXG4gICAgY29uc3QgW3JlY29yZEFzYywgc2V0UmVjb3JkQXNjXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVSZWNvcmRMaXN0ID0gZ2V0UmVjb3JkcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlUmVjb3JkTGlzdCAhPSBudWxsICYmIGhhbmRsZVJlY29yZExpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlUmVjb3JkTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklkXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmVjb3JkcygpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklSZWNvcmQ+PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLk1ldGVySWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZVJlY29yZC8ke3Byb3BzLk1ldGVySWR9LyR7cmVjb3JkU29ydH0vJHtyZWNvcmRBc2M/IDEgOiAwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklSZWNvcmQ+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldENoYW5nZUxpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyhwcm9wcy5NZXRlcklkID4gLTEgP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnY2FsYyggMTAwJSAtIDMzNnB4KScsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnU3RhdHVzJywgbGFiZWw6ICdTdGF0dXMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0ID0gcHJvcHMuU3RhdGVMaXN0LmZpbmQocyA9PiBzLklEID09PSBpdGVtLlN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjZjhmOWZhJyA6IHN0YXQuQ29sb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnIzIxMjUyOScgOiBzdGF0LlRleHRDb2xvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4geyhzdGF0ID09IHVuZGVmaW5lZCA/ICcnIDogc3RhdC5EZXNjcmlwdGlvbil9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1RpbWVzdGFtcCcsIGxhYmVsOiAnTGFzdCBVcGRhdGVkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBtb21lbnQoaXRlbS5UaW1lc3RhbXApLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVc2VyJywgbGFiZWw6ICcgQnknLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYW5nZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3JlY29yZFNvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e3JlY29yZEFzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gcmVjb3JkU29ydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVjb3JkQXNjKCFyZWNvcmRBc2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVjb3JkU29ydChkLmNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goJ2luZGV4LmNzaHRtbD9uYW1lPVBSQzAwMkNoYW5nZSZSZWNvcmRJRD0nICsgZC5yb3cuSUQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGwpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRMaXN0O1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEJhc2VDb25maWdXaW5kb3cudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzA4LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RcclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBQYXJzZUlOSSwgUGFyc2VQQVIgfSBmcm9tICcuL0ZpbGVQYXJzZXInO1xyXG5cclxuaW1wb3J0IHsgSW5wdXQsIFNlbGVjdCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgVGFibGUsIHsgU2VsZWN0VGFibGUgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJ1xyXG5cclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBzZXRFcnJvcjogKGVycm9yOiBzdHJpbmdbXSkgPT4gdm9pZCxcclxuICAgIEJhc2VDb25maWdzOiBNYXA8bnVtYmVyLCBbUFJDMDAyLklCYXNlQ29uZmlnLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW11dPixcclxuICAgIHNldEJhc2VDb25maWc6KGJjOiBNYXA8bnVtYmVyLCBbUFJDMDAyLklCYXNlQ29uZmlnLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW11dPikgPT4gdm9pZCxcclxuICAgIHNldFN0ZXA6IChzdGVwOiBzdGF0ZSkgPT4gdm9pZCxcclxuICAgIGNvbnQ6IG51bWJlcixcclxuICAgIHJlc2V0OiBudW1iZXJcclxuICAgIHN0ZXA6IHN0YXRlLFxyXG4gICAgc2V0TG9hZGluZzogKGI6IGJvb2xlYW4pID0+IHZvaWQsXHJcbn1cclxuXHJcbnR5cGUgc3RhdGUgPSAnTWV0ZXInIHwgJ0Jhc2VDb25maWcnIHwgJ0ZpbGUgTG9hZCcgfCAnRWRpdCBGaWVsZCcgfCAnTmV3IEJhc2VDb25maWcnXHJcbmludGVyZmFjZSBJQ29uZmlnRmlsZUZpZWxkIGV4dGVuZHMgUFJDMDAyLklDb25maWdGaWVsZCB7IEluY2x1ZGU6IGJvb2xlYW4gfVxyXG5cclxuXHJcbmNvbnN0IEJhc2VDb25maWdXaW5kb3cgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRDb25maWcsIHNldEN1cnJlbnRDb25maWddID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihudWxsKTtcclxuICAgIGNvbnN0IFtuZXdDb25maWcsIHNldE5ld0NvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSUJhc2VDb25maWc+KHsgSUQ6IC0xLCBNZXRlcklkOiAtMSwgTmFtZTogJ0FsbCBJTkkgRmlsZXMnLCBQYXR0ZXJuOiAnKi5pbmknIH0pXHJcbiAgICBjb25zdCBbZWRpdEZpZWxkLCBzZXRFZGl0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklDb25maWdGaWVsZD4oeyBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnIH0pO1xyXG4gICAgY29uc3QgW25ld0NvbmZpZ1VuaXEsIHNldE5ld0NvbmZpZ1VuaXFdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtmaWxlRmllbGRzLCBzZXRGaWxlRmllbGRzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PElDb25maWdGaWxlRmllbGQ+PihbXSk7XHJcblxyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ0ZpZWxkJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5CYXNlQ29uZmlncy5zaXplID09IDApIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudENvbmZpZyhudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2V0Q3VycmVudENvbmZpZyA9PSBudWxsIHx8ICFwcm9wcy5CYXNlQ29uZmlncy5oYXMoY3VycmVudENvbmZpZykpIFxyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q29uZmlnKHByb3BzLkJhc2VDb25maWdzLmtleXMoKS5uZXh0KCkudmFsdWUpICAgICAgXHJcblxyXG4gICAgfSwgW3Byb3BzLkJhc2VDb25maWdzXSlcclxuXHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgIT0gJ0Jhc2VDb25maWcnKVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9XHJcblxyXG4gICAgICAgICQoXCIuY3VzdG9tLWZpbGUtaW5wdXRcIikub24oXCJjaGFuZ2VcIiwgKGV2dDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IChldnQgYXMgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pLnRhcmdldC52YWx1ZS5zcGxpdChcIlxcXFxcIikucG9wKCk7XHJcbiAgICAgICAgICAgICQoZXZ0LnRhcmdldCkuc2libGluZ3MoXCIuY3VzdG9tLWZpbGUtbGFiZWxcIikuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKS5odG1sKGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgcmVhZFNpbmdsZUZpbGUoKGV2dCBhcyBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiksIGZpbGVOYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gJChcIi5jdXN0b20tZmlsZS1pbnB1dFwiKS5vZmYoJ2NoYW5nZScpXHJcblxyXG4gICAgfSwgW3Byb3BzLnN0ZXBdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBlcnJvciA9IFtdO1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHByb3BzLkJhc2VDb25maWdzLnNpemUgPT0gMClcclxuICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0F0IGxlYXN0IDEgQmFzZSBDb25maWd1cmF0aW9uIG5lZWRzIHRvIGJlIHNldCB1cC4nKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuQmFzZUNvbmZpZ3Muc2l6ZSA+IDApXHJcbiAgICAgICAgICAgICAgICBbLi4ucHJvcHMuQmFzZUNvbmZpZ3Mua2V5cygpXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5CYXNlQ29uZmlncy5nZXQoaXRlbSlbMV0ubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0F0IGxlYXN0IDEgRmllbGQgbmVlZHMgdG8gYmUgc2V0IHVwIGluIENvbmZpZ3VyYXRpb24gXFwnJyArIChwcm9wcy5CYXNlQ29uZmlncy5nZXQoaXRlbSlbMF0uTmFtZSkgKyAnXFwnJylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdOZXcgQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgaWYgKG5ld0NvbmZpZy5OYW1lID09IG51bGwgfHwgbmV3Q29uZmlnLk5hbWUubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIE5hbWUgaXMgcmVxdWlyZWQuJylcclxuICAgICAgICAgICAgaWYgKG5ld0NvbmZpZy5QYXR0ZXJuID09IG51bGwgfHwgbmV3Q29uZmlnLlBhdHRlcm4ubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIFBhdHRlcm4gaXMgcmVxdWlyZWQgKGUuZy4gKi5pbmkgb3IgKi5wYXIgZm9yIGFsbElOSSBvciBQQVIgRmlsZXMpLicpXHJcbiAgICAgICAgICAgIGlmIChuZXdDb25maWcuTmFtZSAhPSBudWxsICYmICFuZXdDb25maWdVbmlxKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnTmFtZSBuZWVkcyB0byBiZSB1bmlxdWUuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0VkaXQgRmllbGQnKSB7XHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuTmFtZSA9PSBudWxsIHx8IGVkaXRGaWVsZC5OYW1lLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnQSBGaWVsZCBuYW1lIGlzIHJlcXVpcmVkLicpXHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuVmFsdWUgPT0gbnVsbCB8fCBlZGl0RmllbGQuVmFsdWUubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIFZhbHVlIGlzIHJlcXVpcmVkLicpXHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuVmFsdWUgIT0gbnVsbCAmJiAoZWRpdEZpZWxkLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyAmJiBpc05hTihwYXJzZUZsb2F0KGVkaXRGaWVsZC5WYWx1ZSkpKSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0EgVmFsdWUgZm9yIGEgTnVtYmVyIEZpZWxkIG5lZWRzIHRvIGJlIG51bWVyaWMuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0ZpbGUgTG9hZCcpIHtcclxuICAgICAgICAgICAgaWYgKCFmaWxlRmllbGRzLnNvbWUoaXRlbSA9PiBpdGVtLkluY2x1ZGUpKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnQXQgbGVhc3Qgb25lIEZpZWxkIG5lZWRzIHRvIGJlIHNlbGVjdGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5zZXRFcnJvcihlcnJvcilcclxuICAgIH0sIFtwcm9wcy5zdGVwLCBwcm9wcy5CYXNlQ29uZmlncywgbmV3Q29uZmlnLCBuZXdDb25maWdVbmlxLCBlZGl0RmllbGQsIGZpbGVGaWVsZHNdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFsuLi5wcm9wcy5CYXNlQ29uZmlncy52YWx1ZXMoKV0ubWFwKGkgPT4gaVswXSkuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5OYW1lID09IG5ld0NvbmZpZy5OYW1lKSA9PSAtMSlcclxuICAgICAgICAgICAgc2V0TmV3Q29uZmlnVW5pcSh0cnVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZ1VuaXEoZmFsc2UpO1xyXG4gICAgfSwgW3Byb3BzLkJhc2VDb25maWdzLCBuZXdDb25maWddKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdOZXcgQmFzZUNvbmZpZycpXHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZyh7IElEOiAtMSwgTWV0ZXJJZDogLTEsIE5hbWU6ICdCYXNlIENvbmZpZyBOYW1lJywgUGF0dGVybjogJyouaW5pJyB9KTtcclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnRWRpdCBGaWVsZCcpXHJcbiAgICAgICAgICAgIHNldEVkaXRGaWVsZCh7XHJcbiAgICAgICAgICAgICAgICBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTonRmllbGQnLCBWYWx1ZTonJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdGaWxlIExvYWQnKVxyXG4gICAgICAgICAgICBzZXRGaWxlRmllbGRzKFtdKTtcclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0U3RlcCgnTWV0ZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdCYXNlQ29uZmlnJyk7XHJcbiAgICB9LCBbcHJvcHMucmVzZXRdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKHByb3BzLkJhc2VDb25maWdzKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gKHVwZGF0ZWQuc2l6ZSA+IDA/IE1hdGgubWF4KC4uLnVwZGF0ZWQua2V5cygpKSA6IDApKyAxO1xyXG4gICAgICAgICAgICB1cGRhdGVkLnNldChpZCwgW3sgLi4ubmV3Q29uZmlnLCBJRDogaWR9LFtdXSk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEJhc2VDb25maWcodXBkYXRlZCk7XHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZyh7IElEOiAtMSwgTWV0ZXJJZDogLTEsIE5hbWU6ICdCYXNlIENvbmZpZyBOYW1lJywgUGF0dGVybjogJyouaW5pJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0VkaXQgRmllbGQnICYmIGVkaXRGaWVsZC5JRCA9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKHByb3BzLkJhc2VDb25maWdzKTtcclxuICAgICAgICAgICAgbGV0IGNvbmcgPSB1cGRhdGVkLmdldChjdXJyZW50Q29uZmlnKVxyXG4gICAgICAgICAgICBsZXQgaWQgPSAoY29uZ1sxXS5sZW5ndGggPiAwID8gTWF0aC5tYXgoLi4uY29uZ1sxXS5tYXAoaXRlbSA9PiBpdGVtLklEKSkgKyAxIDogMSk7XHJcbiAgICAgICAgICAgIGNvbmdbMV0gPSBbLi4uY29uZ1sxXSwgeyAuLi5lZGl0RmllbGQsIElEOiBpZCB9XTtcclxuICAgICAgICAgICAgdXBkYXRlZC5zZXQoY3VycmVudENvbmZpZywgY29uZyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9wcy5zZXRCYXNlQ29uZmlnKHVwZGF0ZWQpO1xyXG4gICAgICAgICAgICBzZXRFZGl0RmllbGQoeyBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdFZGl0IEZpZWxkJyAmJiBlZGl0RmllbGQuSUQgIT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBfLmNsb25lRGVlcChwcm9wcy5CYXNlQ29uZmlncyk7XHJcbiAgICAgICAgICAgIGxldCBjb25nID0gdXBkYXRlZC5nZXQoY3VycmVudENvbmZpZylcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gY29uZ1sxXS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLklEID09IGVkaXRGaWVsZC5JRClcclxuICAgICAgICAgICAgY29uZ1sxXVtpbmRleF0gPSBlZGl0RmllbGQ7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQuc2V0KGN1cnJlbnRDb25maWcsIGNvbmcpO1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRCYXNlQ29uZmlnKHVwZGF0ZWQpO1xyXG4gICAgICAgICAgICBzZXRFZGl0RmllbGQoeyBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdGaWxlIExvYWQnKSB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gXy5jbG9uZURlZXAocHJvcHMuQmFzZUNvbmZpZ3MpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAodXBkYXRlZC5zaXplID4gMCA/IE1hdGgubWF4KC4uLnVwZGF0ZWQua2V5cygpKSA6IDApICsgMTtcclxuICAgICAgICAgICAgbGV0IGZpZWxkcyA9IGZpbGVGaWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5JbmNsdWRlKS5tYXAoKGl0ZW0saW5kZXgpID0+ICh7IElEOiBpbmRleCArIDEsIEJhc2VDb25maWdJZDogaWQsIFZhbHVlOiBpdGVtLlZhbHVlLCBOYW1lOiBpdGVtLk5hbWUsIENvbXBhcmlzb246IGl0ZW0uQ29tcGFyaXNvbiwgRmllbGRUeXBlOiBpdGVtLkZpZWxkVHlwZSB9KSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQuc2V0KGlkLCBbeyBOYW1lOiBmaWxlTmFtZSwgUGF0dGVybjogJyoqLycgKyBmaWxlTmFtZSwgTWV0ZXJJZDogLTEsIElEOiBpZCB9LCBmaWVsZHNdKTtcclxuICAgICAgICAgICAgcHJvcHMuc2V0QmFzZUNvbmZpZyh1cGRhdGVkKTtcclxuICAgICAgICAgICAgc2V0RmlsZUZpZWxkcyhbXSk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRDb25maWcoaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHByb3BzLnNldFN0ZXAoJ0Jhc2VDb25maWcnKTtcclxuICAgIH0sIFtwcm9wcy5jb250XSlcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudENvbmZpZyA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IHVwZGF0ZWQgPSBwcm9wcy5CYXNlQ29uZmlncy5nZXQoY3VycmVudENvbmZpZyk7XHJcbiAgICAgICAgbGV0IG5jb25maWcgPSBfLmNsb25lRGVlcChwcm9wcy5CYXNlQ29uZmlncyk7XHJcbiAgICAgICAgbmNvbmZpZy5zZXQoY3VycmVudENvbmZpZywgW3VwZGF0ZWRbMF0sIF8ub3JkZXJCeSh1cGRhdGVkWzFdLCBbc29ydEZpZWxkXSwgWyghYXNjZW5kaW5nID8gXCJhc2NcIiA6IFwiZGVzY1wiKV0pXSk7XHJcbiAgICAgICAgcHJvcHMuc2V0QmFzZUNvbmZpZyhuY29uZmlnKTtcclxuICAgIH0sIFthc2NlbmRpbmcsIHNvcnRGaWVsZCwgY3VycmVudENvbmZpZ10pXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWRTaW5nbGVGaWxlKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGZpbGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBwcm9wcy5zZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGlmIChmaWxlTmFtZS5lbmRzV2l0aChcIi5pbmlcIikpXHJcbiAgICAgICAgICAgIFBhcnNlSU5JKGV2dCwgKGQpID0+IExvYWRCYXNlQ29uZmlnRmlsZShmaWxlTmFtZSxkLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7IC4uLml0ZW0sIEluY2x1ZGU6IGZhbHNlIH0pKSkpO1xyXG4gICAgICAgIGlmIChmaWxlTmFtZS5lbmRzV2l0aChcIi5wYXJcIikpXHJcbiAgICAgICAgICAgIFBhcnNlUEFSKGV2dCwgKGQpID0+IExvYWRCYXNlQ29uZmlnRmlsZShmaWxlTmFtZSwgZC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoeyAuLi5pdGVtLCBJbmNsdWRlOiBmYWxzZSB9KSkpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHByb3BzLnNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTG9hZEJhc2VDb25maWdGaWxlKGZpbGU6IHN0cmluZywgRmllbGRzOiBBcnJheTxJQ29uZmlnRmlsZUZpZWxkPikge1xyXG5cclxuICAgICAgICBzZXRGaWxlTmFtZShmaWxlKTtcclxuICAgICAgICBzZXRGaWxlRmllbGRzKEZpZWxkcy5tYXAoaXRlbSA9PiB7IGl0ZW0uQmFzZUNvbmZpZ0lkID0gLTE7IHJldHVybiBpdGVtIH0pKVxyXG4gICAgICAgIHByb3BzLnNldFN0ZXAoJ0ZpbGUgTG9hZCcpO1xyXG4gICAgICAgIHByb3BzLnNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdENvbmZpZ0ZpZWxkKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkge1xyXG4gICAgICAgIHByb3BzLnNldFN0ZXAoJ0VkaXQgRmllbGQnKTtcclxuICAgICAgICBzZXRFZGl0RmllbGQocmVjb3JkKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZENvbmZpZ0ZpZWxkKCkge1xyXG4gICAgICAgIHByb3BzLnNldFN0ZXAoJ0VkaXQgRmllbGQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdGVwID09ICdCYXNlQ29uZmlnJyA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1suLi5wcm9wcy5CYXNlQ29uZmlncy5rZXlzKCldLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rXCIgKyAoY3VycmVudENvbmZpZyA9PSBpdGVtID8gXCIgYWN0aXZlXCIgOiBcIlwiKX0gb25DbGljaz17KCkgPT4gc2V0Q3VycmVudENvbmZpZyhpdGVtKX0+e3Byb3BzLkJhc2VDb25maWdzLmdldChpdGVtKVswXS5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIzNSwgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmRcIn0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDb25maWcgIT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiBDb25maWd1cmF0aW9uIHtwcm9wcy5CYXNlQ29uZmlncy5nZXQoY3VycmVudENvbmZpZylbMF0uTmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmQtYm9keVwifSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1NDAsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTQwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0PFBSQzAwMi5JQmFzZUNvbmZpZz4gUmVjb3JkPXtwcm9wcy5CYXNlQ29uZmlncy5nZXQoY3VycmVudENvbmZpZylbMF19IEZpZWxkPXsnUGF0dGVybid9IFNldHRlcj17KCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gTGFiZWw9eydGaWxlIFBhdHRlcm4nfSBEaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxQUkMwMDIuSUNvbmZpZ0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdGaWVsZCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydOYW1lJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0ZpZWxkVHlwZScsIGxhYmVsOiAnVHlwZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydGaWVsZFR5cGUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQ29tcGFyaXNvbicsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0NvbXBhcmlzb24nfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVmFsdWUnLCBsYWJlbDogJ1ZhbHVlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J1ZhbHVlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0lEJywgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTZweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gb25DbGljaz17KCkgPT4gZWRpdENvbmZpZ0ZpZWxkKGl0ZW0pfT48aSBzdHlsZT17eyBjb2xvcjogJyMwMDdCRkYnIH19IGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbC1zcXVhcmUgZmEtM3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5CYXNlQ29uZmlncy5nZXQoY3VycmVudENvbmZpZylbMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXsnTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNjY2LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudENvbmZpZyAhPSBudWxsID8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IGFkZENvbmZpZ0ZpZWxkKCl9PkFkZCBuZXcgRmllbGQgPC9idXR0b24+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLWlucHV0XCIgYWNjZXB0PVwiLmluaSwucGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtbGFiZWxcIj5DaG9vc2UgYSBDb25maWd1cmF0aW9uIEZpbGUgaWYgYXBwbGljYWJsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHsgcHJvcHMuc2V0U3RlcCgnTmV3IEJhc2VDb25maWcnKSB9fT4gQWRkIE5ldyBCYXNlIENvbmZpZ3VyYXRpb24gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbH1cclxuICAgICAgICAgICAge3Byb3BzLnN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJyA/IDw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQ8UFJDMDAyLklCYXNlQ29uZmlnPiBSZWNvcmQ9e25ld0NvbmZpZ30gRmllbGQ9eydOYW1lJ30gU2V0dGVyPXtzZXROZXdDb25maWd9IFZhbGlkPXsoKSA9PiBuZXdDb25maWcuTmFtZSAhPSBudWxsICYmIG5ld0NvbmZpZy5OYW1lLmxlbmd0aCA+IDAgJiYgbmV3Q29uZmlnVW5pcX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlZWRiYWNrPXsnTmFtZSBpcyByZXF1aXJlZCBhbmQgbXVzdCBiZSB1bmlxdWUnfSBMYWJlbD17J05hbWUnfSAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0PFBSQzAwMi5JQmFzZUNvbmZpZz4gUmVjb3JkPXtuZXdDb25maWd9IEZpZWxkPXsnUGF0dGVybid9IFNldHRlcj17c2V0TmV3Q29uZmlnfSBWYWxpZD17KCkgPT4gbmV3Q29uZmlnLlBhdHRlcm4gIT0gbnVsbCAmJiBuZXdDb25maWcuUGF0dGVybi5sZW5ndGggPiAwfVxyXG4gICAgICAgICAgICAgICAgICAgIExhYmVsPXsnRmlsZSBQYXR0ZXJuJ30gRmVlZGJhY2s9eydGaWxlIFBhdHRlcm4gaXMgcmVxdWlyZWQuJ30gLz4gPC8+IDogbnVsbH1cclxuICAgICAgICAgICAge3Byb3BzLnN0ZXAgPT0gJ0VkaXQgRmllbGQnID8gPENvbmZpZ0ZpZWxkRWRpdCBGaWVsZD17ZWRpdEZpZWxkfSBTZXR0ZXI9e3NldEVkaXRGaWVsZH0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICB7cHJvcHMuc3RlcCA9PSAnRmlsZSBMb2FkJyA/IDxTZWxlY3RUYWJsZTxJQ29uZmlnRmlsZUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnRmllbGQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2NhbGMoMzAlIC0gOC4yNWVtKScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdjYWxjKDUwJSAtIDguMjVlbSknIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8SUNvbmZpZ0ZpbGVGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J05hbWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGaWVsZFR5cGUnLCBsYWJlbDogJ1R5cGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzhlbScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICc4ZW0nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8SUNvbmZpZ0ZpbGVGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0ZpZWxkVHlwZSd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0NvbXBhcmlzb24nLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNWVtJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzVlbScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxJQ29uZmlnRmlsZUZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnQ29tcGFyaXNvbid9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1ZhbHVlJywgbGFiZWw6ICdWYWx1ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnY2FsYyg3MCUgLSA4LjI1ZW0pJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2NhbGMoNTAlIC0gOC4yNWVtKScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxJQ29uZmlnRmlsZUZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnVmFsdWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgS2V5RmllbGQ9eydOYW1lJ31cclxuICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtmaWxlRmllbGRzfVxyXG4gICAgICAgICAgICAgICAgc29ydEZpZWxkPXsnTmFtZSd9XHJcbiAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e3RydWV9XHJcblxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Rpb249eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlsZUZpZWxkcygobHN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlID0gbHN0Lm1hcChpdGVtID0+ICh7IC4uLml0ZW0sIEluY2x1ZGU6IChkLmZpbmRJbmRleChpID0+IGkuSUQgPT0gaXRlbS5JRCkgPiAtMSkgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPilcclxufVxyXG5cclxuY29uc3QgQ29uZmlnRmllbGRFZGl0ID0gKHByb3BzOiB7IEZpZWxkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkLCBTZXR0ZXI6IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpID0+IHZvaWQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IEZpZWxkVHlwZU9wdGlvbnMgPSBbeyBWYWx1ZTogJ3N0cmluZycsIExhYmVsOiAnVGV4dCcgfSwgeyBWYWx1ZTogJ251bWJlcicsIExhYmVsOiAnTnVtYmVyJyB9XTtcclxuICAgIGNvbnN0IE51bWJlckNoZWNrcyA9IFt7IFZhbHVlOiAnPScsIExhYmVsOiAnPScgfSwgeyBWYWx1ZTogJzw+JywgTGFiZWw6ICc8PicgfSwgeyBWYWx1ZTogJz4nLCBMYWJlbDogJz4nIH0sIHsgVmFsdWU6ICc8JywgTGFiZWw6ICc8JyB9XTtcclxuICAgIGNvbnN0IFRleHRDaGVja3MgPSBbeyBWYWx1ZTogJz0nLCBMYWJlbDogJz0nIH0sIHsgVmFsdWU6ICc8PicsIExhYmVsOiAnPD4nIH0sIHsgVmFsdWU6ICdJTicsIExhYmVsOiAnSW4nIH1dO1xyXG5cclxuICAgIGZ1bmN0aW9uIFZhbGlkVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChwcm9wcy5GaWVsZC5WYWx1ZSAhPSBudWxsICYmIHByb3BzLkZpZWxkLlZhbHVlLmxlbmd0aCA+IDAgJiYgKHByb3BzLkZpZWxkLkZpZWxkVHlwZSAhPSAnbnVtYmVyJyB8fCAhaXNOYU4ocGFyc2VGbG9hdChwcm9wcy5GaWVsZC5WYWx1ZSkpKSlcclxuICAgIH1cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8U2VsZWN0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnRmllbGRUeXBlJ30gT3B0aW9ucz17RmllbGRUeXBlT3B0aW9uc30gTGFiZWw9eydGaWVsZCBUeXBlJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmQuRmllbGRUeXBlICE9PSBwcm9wcy5GaWVsZC5GaWVsZFR5cGUgJiYgcmVjb3JkLkNvbXBhcmlzb24gIT0gJzw+JyAmJiByZWNvcmQuQ29tcGFyaXNvbiAhPSAnPScpXHJcbiAgICAgICAgICAgICAgICByZWNvcmQuQ29tcGFyaXNvbiA9ICc9JztcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHJlY29yZCk7XHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydOYW1lJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IFZhbGlkPXsoKSA9PiBwcm9wcy5GaWVsZC5OYW1lICE9IG51bGwgJiYgcHJvcHMuRmllbGQuTmFtZS5sZW5ndGggPiAwfSBMYWJlbD17J0ZpZWxkJ30gLz5cclxuICAgICAgICA8U2VsZWN0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnQ29tcGFyaXNvbid9IE9wdGlvbnM9eyhwcm9wcy5GaWVsZC5GaWVsZFR5cGUgPT0gJ251bWJlcicgPyBOdW1iZXJDaGVja3MgOiBUZXh0Q2hlY2tzKX0gTGFiZWw9eydSdWxlJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IC8+XHJcbiAgICAgICAgeyhwcm9wcy5GaWVsZC5Db21wYXJpc29uID09ICdJTicgPyA8TXVsdGlJbnB1dEZpZWxkIGRhdGE9e3Byb3BzLkZpZWxkfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgcHJvcHMuU2V0dGVyKHJlY29yZCkgfX0gLz4gOlxyXG4gICAgICAgICAgICA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydWYWx1ZSd9IFNldHRlcj17KHJlY29yZCkgPT4geyBwcm9wcy5TZXR0ZXIocmVjb3JkKSB9fSBWYWxpZD17KCkgPT4gVmFsaWRWYWx1ZSgpfSBMYWJlbD17J1ZhbHVlJ30gRmVlZGJhY2s9e3Byb3BzLkZpZWxkLkZpZWxkVHlwZSAhPSAnbnVtYmVyJz8gJ1ZhbHVlIGlzIHJlcXVpcmVkLicgOiAnVmFsdWUgaXMgcmVxdWlyZWQgYW5kIG5lZWRzIHRvIGJlIGEgbnVtYmVyLid9IC8+XHJcbiAgICAgICAgKX1cclxuICAgIDwvPilcclxufVxyXG5cclxuIGNvbnN0IE11bHRpSW5wdXRGaWVsZCA9IChwcm9wczogeyBkYXRhOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkLCBTZXR0ZXI6IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtsaXN0VmFsdWVzLCBzZXRMaXN0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PHN0cmluZz4+KFtdKTtcclxuXHJcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0TGlzdFZhbHVlcyhwcm9wcy5kYXRhLlZhbHVlLnNwbGl0KCc7JykpXHJcbiAgICAgICAgfSwgW3Byb3BzLmRhdGFdKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBTZXQoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCByZWMgPSBfLmNsb25lRGVlcChwcm9wcy5kYXRhKTtcclxuICAgICAgICAgICAgbGV0IGxzdCA9IF8uY2xvbmUobGlzdFZhbHVlcyk7XHJcbiAgICAgICAgICAgIGxzdFtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmVjLlZhbHVlID0gbHN0LmpvaW4oJzsnKTtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHJlYylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIEFkZE5ldygpIHtcclxuICAgICAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgbHN0ID0gXy5jbG9uZShsaXN0VmFsdWVzKTtcclxuICAgICAgICAgICAgbHN0LnB1c2goKHByb3BzLmRhdGEuRmllbGRUeXBlID09ICdzdHJpbmcnID8gJ1ZhbHVlJyA6ICcwJykpXHJcbiAgICAgICAgICAgIHJlYy5WYWx1ZSA9IGxzdC5qb2luKCc7Jyk7XHJcbiAgICAgICAgICAgIHByb3BzLlNldHRlcihyZWMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgbHN0ID0gXy5jbG9uZShsaXN0VmFsdWVzKTtcclxuICAgICAgICAgICAgbHN0LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgcmVjLlZhbHVlID0gbHN0LmpvaW4oJzsnKTtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHJlYylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7bGlzdFZhbHVlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT0gMCA/IDxsYWJlbD5WYWx1ZXM8L2xhYmVsPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGV2dCkgPT4geyBTZXQoaW5kZXgsIGV2dC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKSB9fSB2YWx1ZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiBBZGROZXcoKX0+IEFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29uZmlnV2luZG93O1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEZpbGVQYXJzZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzAyLzIwMjEgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUlOSShldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBjb21wbGV0ZTogKGRhdGE6IFBSQzAwMi5JQ29uZmlnRmllbGRbXSkgPT4gdm9pZCkge1xyXG5cclxuICAgIHZhciBmID0gZXZ0LnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCByZXN1bHRzID0gW107XHJcbiAgICBpZiAoZikge1xyXG5cclxuICAgICAgICB2YXIgciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29udGVudHMgPSBlLnRhcmdldC5yZXN1bHQgYXMgc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpbmVzID0gY29udGVudHMuc3BsaXQoL1tcXHJcXG5dKy9nKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBsaW5lcy5mb3JFYWNoKChsbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG4uaW5jbHVkZXMoJz0nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBsbi5pbmRleE9mKCc9Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMubWFwKGl0ZW0gPT4gaXRlbS5rZXkpLmluY2x1ZGVzKGxuLnN1YnN0cigwLCBpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsga2V5OiBsbi5zdWJzdHIoMCwgaSkgKyAnLScgKyBpbmRleCwgdmFsdWU6IGxuLnN1YnN0cihpICsgMSkgfSlcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBrZXk6IGxuLnN1YnN0cigwLCBpKSwgdmFsdWU6IGxuLnN1YnN0cihpICsgMSkgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICBjb21wbGV0ZShyZXN1bHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBJRDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBCYXNlQ29uZmlnSWQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgTmFtZTogaXRlbS5rZXksXHJcbiAgICAgICAgICAgICAgICBWYWx1ZTogaXRlbS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIENvbXBhcmlzb246ICc9JyxcclxuICAgICAgICAgICAgICAgIEZpZWxkVHlwZTogJ3N0cmluZydcclxuICAgICAgICAgICAgfSkpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByLnJlYWRBc1RleHQoZik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VQQVIoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgY29tcGxldGU6IChkYXRhOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkW10pID0+IHZvaWQpIHtcclxuXHJcbiAgICB2YXIgZiA9IGV2dC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBsZXQgcmVzdWx0czogUFJDMDAyLklDb25maWdGaWVsZFtdID0gW107XHJcblxyXG4gICAgaWYgKGYpIHtcclxuXHJcbiAgICAgICAgdmFyIHIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICBjb25zdCB0cmltQ2hhciA9IChzLCBjaGFyVG9UcmltKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZWdFeHBBID0gbmV3IFJlZ0V4cChjaGFyVG9UcmltICsgXCIrJFwiKTtcclxuICAgICAgICAgICAgbGV0IHJlZ0V4cEIgPSBuZXcgUmVnRXhwKFwiXlwiICsgY2hhclRvVHJpbSArIFwiK1wiKTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHMucmVwbGFjZShyZWdFeHBBLCBcIlwiKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UocmVnRXhwQiwgXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50cyA9IGUudGFyZ2V0LnJlc3VsdCBhcyBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGluZXMgPSBjb250ZW50cy5zcGxpdCgvW1xcclxcbl0rL2cpO1xyXG4gICAgICAgICAgICBsZXQgbmV3SW5kZXggPSAxO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gbGluZXNbMF0uaW5kZXhPZignPScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGxpbmVzWzBdLnN1YnN0cmluZygwLCBpKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbGluZXNbMF0uc3Vic3RyaW5nKGkgKyAxKS50cmltKCkuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiU3RhdGlvblwiLCBWYWx1ZTogdHJpbUNoYXIoZGF0YVsxXSwgJ1wiJykgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiTm9taW5hbCBGcmVxdWVuY3lcIiwgVmFsdWU6IGRhdGFbMl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiTnVtLiBEQyBDaGFubmVsc1wiLCBWYWx1ZTogZGF0YVszXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJOdW0uIEFuYWxvZyBDaGFubmVsc1wiLCBWYWx1ZTogZGF0YVs0XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJOdW0uIEV2ZW50IENoYW5uZWxzXCIsIFZhbHVlOiBkYXRhWzVdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIk51bS4gVHJpZ2dlcnNcIiwgVmFsdWU6IGRhdGFbNl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiU2h1bnQgVHlwZVwiLCBWYWx1ZTogZGF0YVs3XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJPdmVyV3JpdGUgb2xkIFJlY29yZHNcIiwgVmFsdWU6IGRhdGFbOF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiU0VSIENoYW5uZWxzIGluIFBBUlwiLCBWYWx1ZTogZGF0YVs5XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiU0VSIENIYW5uZWxzIHRoYXQgY2F1c2UgREZSIFN0b3BcIiwgVmFsdWU6IGRhdGFbMTBdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJTRVIgQXV0b1N0b3AgaWYgICNUcmlnZ2VycyA+XCIsIFZhbHVlOiBkYXRhWzExXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiU0VSIEF1dG9TdG9wIFRpbWUgUGVyaW9kXCIsIFZhbHVlOiBkYXRhWzEyXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiU0VSIFJlc3RvcmUgUGVyaW9kXCIsIFZhbHVlOiBkYXRhWzEzXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDE0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiRGVib3VuY2UgVGltZVwiLCBWYWx1ZTogZGF0YVsxNF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlRyYW5zaWVudCBQcmVmYXVsdFwiLCBWYWx1ZTogZGF0YVsxNV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlRyYW5zaWVudCBQb3N0ZmF1bHRcIiwgVmFsdWU6IGRhdGFbMTZdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJUcmFuc2llbnQgRmF1bHQgTGltaXRcIiwgVmFsdWU6IGRhdGFbMTddIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJUcmFuc2llbnQgU2FtcGxpbmcgRnJlcXVlbmN5XCIsIFZhbHVlOiBkYXRhWzE4XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDE5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiRXh0ZW5kZWQgUHJlZmF1bHRcIiwgVmFsdWU6IGRhdGFbMTldIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJFeHRlbmRlZCBQb3N0IEZhdWx0XCIsIFZhbHVlOiBkYXRhWzIwXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiRXh0ZW5kZWQgRmF1bHRcIiwgVmFsdWU6IGRhdGFbMjFdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJFeHRlbmRlZCBTYW1wbGluZyBGcmVxdWVuY3lcIiwgVmFsdWU6IGRhdGFbMjJdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJFeHRlbmRlZCBSTVMgQ3ljbGVzL1BvaW50XCIsIFZhbHVlOiBkYXRhWzIzXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDI0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiQ29udGludW91cyBSZWNvcmRpbmcgU2FtcGxlcy9Qb2ludCBGcmVxLVJNUy1QaGFzZVwiLCBWYWx1ZTogZGF0YVsyNF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIkNvbnRpbnVvdXMgUmVjb3JkaW5nIFN0b3JhZ2UgTGVuZ3RoIChEYXlzKVwiLCBWYWx1ZTogZGF0YVsyNV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIkNvbnRpbm91cyBPc2NpbGxvZ3JhcGh5IFN0b3JhZ2UgTGVuZ3RoIChEYXlzKVwiLCBWYWx1ZTogZGF0YVsyNl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlRyaWdnZXIgQ2hhbm5lbHMgLSBBdXRvIFN0b3AgSWYgIyBUcmlnZ2VycyA+XCIsIFZhbHVlOiBkYXRhWzI3XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDI4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiVHJpZ2dlcnMgQ2hhbm5lbHMgQXV0byBTdG9wIFRpbWUgUGVyaW9kIChNaW51dGVzKVwiLCBWYWx1ZTogZGF0YVsyOF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlRyaWdnZXJzIENoYW5uZWxzIEF1dG8gU3RvcCAtIFJlc3RvcmUgQWZ0ZXIgKE1pbnMpXCIsIFZhbHVlOiBkYXRhWzI5XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiVHJpZ2dlcnMgQ2hhbm5lbCBBdXRvIFN0b3AgLSBBcHBseSB0byBEaXN0dXJiYW5jZSBUcmlnZ2VycyBPbmx5ICgwPW5vIDE9eWVzKVwiLCBWYWx1ZTogZGF0YVszMF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlRyYW5zaWVudCBSYXRlIE9zY2lsbG9ncmFwaHkgU3RvcmFnZSAoRGF5cylcIiwgVmFsdWU6IGRhdGFbMzFdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCIjIEZhdWx0cyBvbiBEaXNrXCIsIFZhbHVlOiBkYXRhWzMyXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiTWFzdGVyIENoYXNzaXNcIiwgVmFsdWU6IGRhdGFbMzNdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMzQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJFeHRlbmRlZCBSTVMgSW5jbHVkZSBQaGFzZSBBbmdsZVwiLCBWYWx1ZTogZGF0YVszNF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIkVWTk9NSVNTIChEbyBOb3QgUmVzdHJpY3QgRXZlbnQgT25seSBUcmlnZ2VyKVwiLCBWYWx1ZTogZGF0YVszNV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIkNvbnRpbnVvdXMgUFEgRGF0YVwiLCBWYWx1ZTogZGF0YVszNl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIkNCQSBQaGFzZSBSb3RhdGlvblwiLCBWYWx1ZTogZGF0YVszN10gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIiMgb2YgVFcgQ2hhbm5lbHNcIiwgVmFsdWU6IGRhdGFbMzhdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBsaW5lc1sxXS5pbmRleE9mKCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gbGluZXNbMV0uc3Vic3RyaW5nKDAsIGkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBsaW5lc1sxXS5zdWJzdHJpbmcoaSArIDEpLnRyaW0oKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJSbVNldHVwIENoYXNpcyBQb3J0XCIsIFZhbHVlOiBkYXRhWzBdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlJNU2V0dXAgVGltZSBzeW5jXCIsIFZhbHVlOiBkYXRhWzFdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1pc3NpbmcgYWxhcm0gTWFwcGluZ1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIkZhdWx0TEVEIE9OIER1cmF0aW9uXCIsIFZhbHVlOiBkYXRhWzNdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIkRpc2sgQWxhcm1cIiwgVmFsdWU6IGRhdGFbNF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiRE5QMyBTbGF2ZVwiLCBWYWx1ZTogZGF0YVs1XVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIkROUDMgTWFzdGVyXCIsIFZhbHVlOiBkYXRhWzZdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlJlcG9ydCBBbGFybSBTdGF0ZXMgYXMgU0VSXCIsIFZhbHVlOiBkYXRhWzddXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiRFNQIFRlbXBlcmF0dXJlIExpbVwiLCBWYWx1ZTogZGF0YVs4XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJQTVVcIiwgVmFsdWU6IGRhdGFbOV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIlN5bmMgbG9zcyBEZWxheVwiLCBWYWx1ZTogZGF0YVsxMF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIiMgSG91cnMgRGlmZmVyZW50IHRvIEdQU1wiLCBWYWx1ZTogZGF0YVsxMV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiBcIiNIRC9TU0QgKFBDLUhlYWx0aClcIiwgVmFsdWU6IGRhdGFbMTJdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogXCJUcmF2ZWxpbmcgV2F2ZSBJUCBQb3J0XCIsIFZhbHVlOiBkYXRhWzEzXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDE0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IFwiQXV0byBEU1RcIiwgVmFsdWU6IGRhdGFbMTRdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpID0gMlxyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBsaW5lc1tpXS5pbmRleE9mKCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gbGluZXNbaV0uc3Vic3RyaW5nKDAsIHIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBsaW5lc1tpXS5zdWJzdHJpbmcociArIDEpLnRyaW0oKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyb3cuc3RhcnRzV2l0aCgnQycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogcm93ICsgXCIgLSBTbG90IDFcIiwgVmFsdWU6IGRhdGFbMF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgMlwiLCBWYWx1ZTogZGF0YVsxXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gU2xvdCAzXCIsIFZhbHVlOiBkYXRhWzJdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogcm93ICsgXCIgLSBTbG90IDRcIiwgVmFsdWU6IGRhdGFbM10gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgNVwiLCBWYWx1ZTogZGF0YVs0XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gU2xvdCA2XCIsIFZhbHVlOiBkYXRhWzVdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogcm93ICsgXCIgLSBTbG90IDdcIiwgVmFsdWU6IGRhdGFbNl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIFNsb3QgOFwiLCBWYWx1ZTogZGF0YVs3XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gU2xvdCA5XCIsIFZhbHVlOiBkYXRhWzhdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogcm93ICsgXCIgLSBTbG90IDEwXCIsIFZhbHVlOiBkYXRhWzldIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gU2xvdCAxMVwiLCBWYWx1ZTogZGF0YVsxMF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gRFNQIEFkZHJlc3NcIiwgVmFsdWU6IGRhdGFbMTFdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gRVhUMSBQUFNcIiwgVmFsdWU6IGRhdGFbMTJdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gSWdub3JlXCIsIFZhbHVlOiBkYXRhWzEzXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyb3cuc3RhcnRzV2l0aCgnQScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogcm93ICsgXCIgLSBOYW1lXCIsIFZhbHVlOiB0cmltQ2hhcihkYXRhWzBdLCdcIicpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogcm93ICsgXCIgLSBUeXBlXCIsIFZhbHVlOiBkYXRhWzFdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogcm93ICsgXCIgLSBSYXRpb1wiLCBWYWx1ZTogZGF0YVsyXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gRnVsbCBTY2FsZVwiLCBWYWx1ZTogZGF0YVszXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gRXh0L0ludCBzaHVudFwiLCBWYWx1ZTogZGF0YVs0XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gUGhhc2VcIiwgVmFsdWU6IGRhdGFbNV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIFZpcnR1YWwgQ2hhbm5lbCBBc3NpZ25tZW50IFAxXCIsIFZhbHVlOiBkYXRhWzZdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogcm93ICsgXCIgLSBWaXJ0dWFsIENoYW5uZWwgQXNzaWdubWVudCBQMlwiLCBWYWx1ZTogZGF0YVs3XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gVmlydHVhbCBDaGFubmVsIEFzc2lnbm1lbnQgUDNcIiwgVmFsdWU6IGRhdGFbOF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyb3cuc3RhcnRzV2l0aCgnVCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogcm93ICsgXCIgLSBOYW1lXCIsIFZhbHVlOiB0cmltQ2hhcihkYXRhWzBdLCAnXCInKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gQXNzaWduZWQgQW5hbG9nIENoYW5uZWxcIiwgVmFsdWU6IGRhdGFbMV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIFRyaWdnZXIgVHlwZVwiLCBWYWx1ZTogZGF0YVsyXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gVHJpZ2dlciBDb25kaXRpb25cIiwgVmFsdWU6IGRhdGFbM10gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIER1cmF0aW9uXCIsIFZhbHVlOiBkYXRhWzRdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnbnVtYmVyJywgTmFtZTogcm93ICsgXCIgLSBUcmlwIGlmIE92ZXJcIiwgVmFsdWU6IGRhdGFbNV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIFRyaXAgaWYgVW5kZXJcIiwgVmFsdWU6IGRhdGFbNl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdudW1iZXInLCBOYW1lOiByb3cgKyBcIiAtIFRyaXAgaWYgUmF0ZVwiLCBWYWx1ZTogZGF0YVs3XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gSHlzdGVyZXNpc1wiLCBWYWx1ZTogZGF0YVs4XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gUHJpb3JpdHlcIiwgVmFsdWU6IGRhdGFbOV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gRGlzdHVyYmFuY2VcIiwgVmFsdWU6IGRhdGFbMTNdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ251bWJlcicsIE5hbWU6IHJvdyArIFwiIC0gTWluaW11bSBSTVNcIiwgVmFsdWU6IGRhdGFbMTRdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyb3cuc3RhcnRzV2l0aCgnRScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogcm93ICsgXCIgLSBOYW1lXCIsIFZhbHVlOiB0cmltQ2hhcihkYXRhWzBdLCAnXCInKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gU3RhdGVcIiwgVmFsdWU6IGRhdGFbMV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiByb3cgKyBcIiAtIERGUiBTdGFydFwiLCBWYWx1ZTogZGF0YVsyXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gREZSL1NFUlwiLCBWYWx1ZTogZGF0YVszXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IHJvdyArIFwiIC0gU0VSIFJ1blwiLCBWYWx1ZTogZGF0YVs0XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbXBsZXRlKHJlc3VsdHMpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHIucmVhZEFzVGV4dChmKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE5ld01ldGVyV2l6emFyZC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTcvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vICAwMi8wMi8yMDIxIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBVcGRhdGVkIFBBUiBQYXJzZXIgYW5kIG1vdmVkIHRvIGdwYS1nZW1zdG9uZSBVSS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgU2VsZWN0TWV0ZXIgZnJvbSAnLi9TZWxlY3RNZXRlcic7XHJcbmltcG9ydCBCYXNlQ29uZmlnV2luZG93IGZyb20gJy4vQmFzZUNvbmZpZ1dpbmRvdyc7XHJcbmltcG9ydCB7IExvYWRpbmdTY3JlZW4sIE1vZGFsLCBUb29sVGlwLCBXYXJuaW5nIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBzaG93OiBib29sZWFuLCBzZXRTaG93OiAoczogYm9vbGVhbikgPT4gdm9pZH1cclxudHlwZSBzdGF0ZSA9ICdNZXRlcid8J0Jhc2VDb25maWcnfCdGaWxlIExvYWQnfCAnRWRpdCBGaWVsZCcgfCAnTmV3IEJhc2VDb25maWcnIFxyXG5cclxuY29uc3QgTmV3TWV0ZXJXaXp6YXJkID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFttZXRlciwgc2V0TWV0ZXJdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklNZXRlcj4obnVsbCk7XHJcbiAgICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSBSZWFjdC51c2VTdGF0ZTxzdGF0ZT4oJ01ldGVyJyk7XHJcbiAgICBjb25zdCBbc2hvd1dhcm5pbmcsIHNldFNob3dXYXJuaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93Q29tcGxldGUsIHNldFNob3dDb21wbGV0ZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IFJlYWN0LnVzZVN0YXRlPCdDYW5jZWwnIHwgJ0NvbmZpcm0nIHwgJ05vbmUnPignTm9uZScpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtiYXNlQ29uZmlnLCBzZXRCYXNlQ29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPE1hcDxudW1iZXIsIFtQUkMwMDIuSUJhc2VDb25maWcsIFBSQzAwMi5JQ29uZmlnRmllbGRbXV0+PihuZXcgTWFwPG51bWJlciwgW1BSQzAwMi5JQmFzZUNvbmZpZywgUFJDMDAyLklDb25maWdGaWVsZFtdXT4oKSk7XHJcbiAgICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc2V0LCBzZXRSZXNldF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2NvbnQsIHNldENvbnRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXByb3BzLnNob3cpXHJcbiAgICAgICAgICAgIENhbmNlbCgpO1xyXG4gICAgfSwgW3Byb3BzLnNob3ddKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBDYW5jZWwoKSB7XHJcbiAgICAgICAgc2V0U3RlcCgnTWV0ZXInKTtcclxuICAgICAgICBzZXRNZXRlcih1bmRlZmluZWQpXHJcbiAgICAgICAgc2V0QmFzZUNvbmZpZyhuZXcgTWFwPG51bWJlciwgW1BSQzAwMi5JQmFzZUNvbmZpZywgUFJDMDAyLklDb25maWdGaWVsZFtdXT4oKSk7XHJcbiAgICAgICAgc2V0RXJyb3JNc2coW10pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTmV4dFN0ZXAoKSB7XHJcbiAgICAgICAgaWYoIXN0ZXBDb21wbGV0ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoc3RlcCA9PSAnTWV0ZXInKSB7XHJcbiAgICAgICAgICAgIHNldFN0ZXAoJ0Jhc2VDb25maWcnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGVwID09ICdOZXcgQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgc2V0Q29udCh4PT4geCsxKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RlcCA9PSAnRmlsZSBMb2FkJykge1xyXG4gICAgICAgICAgICBzZXRDb250KHggPT4geCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGVwID09ICdCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBzZXRTaG93Q29tcGxldGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RlcCA9PSAnRWRpdCBGaWVsZCcpIHtcclxuICAgICAgICAgICAgc2V0Q29udCh4ID0+IHggKyAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUHJldlN0ZXAoKSB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ01ldGVyJylcclxuICAgICAgICAgICAgc2V0U2hvd1dhcm5pbmcodHJ1ZSk7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0Jhc2VDb25maWcnKVxyXG4gICAgICAgICAgICBzZXRSZXNldCh4PT4geCsxKVxyXG4gICAgICAgIGlmIChzdGVwID09ICdOZXcgQmFzZUNvbmZpZycgfHwgc3RlcCA9PSAnRmlsZSBMb2FkJykge1xyXG4gICAgICAgICAgICBzZXRSZXNldCh4ID0+IHggKyAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RlcCA9PSAnRWRpdCBGaWVsZCcpXHJcbiAgICAgICAgICAgIHNldFJlc2V0KHggPT4geCArIDEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ01ldGVyJylcclxuICAgICAgICAgICAgcmV0dXJuICdTZWxlY3QgYSBNZXRlcidcclxuICAgICAgICBpZiAoc3RlcCA9PSAnQmFzZUNvbmZpZycpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlNldHVwIEJhc2UgQ29uZmlndXJhdGlvblwiXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0ZpbGUgTG9hZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnTG9hZCBDb25maWd1cmF0aW9uIEZpbGUnXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJylcclxuICAgICAgICAgICAgcmV0dXJuICdBZGQgTmV3IEJhc2UgQ29uZmlndXJhdGlvbidcclxuICAgICAgICBpZiAoc3RlcCA9PSAnRWRpdCBGaWVsZCcpXHJcbiAgICAgICAgICAgIHJldHVybiBcIkVkaXQgQ29uZmlndXJhdGlvbiBGaWVsZFwiXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBTdWJtaXQoKSB7XHJcbiAgICAgICAgLy8gU3RhcnQgQnkgQ3JlYXRpbmcgdGhlIG1ldGVyXHJcbiAgICAgICAgbGV0IGNvbmZpZ0ZpZWxkcyA9IFtdO1xyXG5cclxuICAgICAgICBbLi4uYmFzZUNvbmZpZy5rZXlzKCldLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgYmFzZUNvbmZpZy5nZXQoa2V5KVsxXS5mb3JFYWNoKGZsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25maWdGaWVsZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgQmFzZUNvbmZpZ0lkOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgQ29tcGFyaXNvbjogZmxkLkNvbXBhcmlzb24sXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGRUeXBlOiBmbGQuRmllbGRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIE5hbWU6IGZsZC5OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFZhbHVlOiBmbGQuVmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZU1ldGVyL0FkZGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgTWV0ZXI6IHsgTWV0ZXJJZDogbWV0ZXIuSUQsIEFjdGl2ZTogZmFsc2UsIFJldmlld2VkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIEJhc2VDb25maWd1cmF0aW9uOiBbLi4uYmFzZUNvbmZpZy52YWx1ZXMoKV0ubWFwKGl0ZW0gPT4geyByZXR1cm4geyBOYW1lOiBpdGVtWzBdLk5hbWUsIFBhdHRlcm46IGl0ZW1bMF0uUGF0dGVybiwgSUQ6IGl0ZW1bMF0uSUQgfTsgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlndXJhdGlvbkZpZWxkczogY29uZmlnRmllbGRzXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLnRoZW4oKGQpID0+IGhpc3RvcnkuZ28oMCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByb3BzLnNldFNob3coZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHN0ZXBDb21wbGV0ZSA9IChzdGVwID09ICdNZXRlcicgPyBtZXRlciAhPSBudWxsIDogZXJyb3JNc2cubGVuZ3RoID09IDApXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNb2RhbCBTaG93PXtwcm9wcy5zaG93fSBDYWxsQmFjaz17KGNvbmZpcm0sIGlzQnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybSlcclxuICAgICAgICAgICAgICAgICAgICBOZXh0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0J1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93V2FybmluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlybSAmJiBpc0J1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICBQcmV2U3RlcCgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgVGl0bGU9e2dldFRpdGxlKCl9IENvbmZpcm1UZXh0PXsoc3RlcCA9PSAnTWV0ZXInIHx8IHN0ZXAgPT0gJ0ZpbGUgTG9hZCcgPyAnTmV4dCcgOiAnU2F2ZScpfVxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVRvb2xUaXA9eydXaXphcmRDb25maXJtJ30gU2l6ZT17J2xnJ30gT25Ib3Zlcj17c2V0SG92ZXJ9XHJcbiAgICAgICAgICAgICAgICBDb25maXJtQnRuQ2xhc3M9eydidG4tc3VjY2VzcycgKyAoc3RlcENvbXBsZXRlID8gJycgOiAnIGRpc2FibGVkJyl9XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxUZXh0PXsoc3RlcCA9PSAnTWV0ZXInID8gJ0Nsb3NlJyA6ICdCYWNrJyl9XHJcbiAgICAgICAgICAgICAgICBTaG93WD17dHJ1ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT0gJ01ldGVyJyA/IDxTZWxlY3RNZXRlciBzZXRNZXRlcj17KG1ldGVyKSA9PiB7IHNldE1ldGVyKG1ldGVyKTsgfX0gc2VsZWN0ZWRNZXRlcj17bWV0ZXJ9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdCYXNlQ29uZmlnJyB8fCBzdGVwID09ICdOZXcgQmFzZUNvbmZpZycgfHwgc3RlcCA9PSAnRmlsZSBMb2FkJyB8fCBzdGVwID09ICdFZGl0IEZpZWxkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhc2VDb25maWdXaW5kb3cgc2V0TG9hZGluZz17c2V0U2hvd0xvYWRpbmd9IEJhc2VDb25maWdzPXtiYXNlQ29uZmlnfSBzZXRCYXNlQ29uZmlnPXtzZXRCYXNlQ29uZmlnfSBzZXRFcnJvcj17c2V0RXJyb3JNc2d9IHNldFN0ZXA9e3NldFN0ZXB9IHN0ZXA9e3N0ZXB9IGNvbnQ9e2NvbnR9IHJlc2V0PXtyZXNldH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8V2FybmluZyBUaXRsZT17J0V4aXQgV2l6YXJkJ30gQ2FsbEJhY2s9eyhjb25maXJtKSA9PiB7IHNldFNob3dXYXJuaW5nKGZhbHNlKTsgaWYgKGNvbmZpcm0pIHByb3BzLnNldFNob3coZmFsc2UpOyB9fSBTaG93PXtzaG93V2FybmluZ31cclxuICAgICAgICAgICAgICAgIE1lc3NhZ2U9eydUaGlzIFdpbGwgY2xvc2UgdGhlIFdpemFyZCBhbmQgYWxsIHByb2dyZXNzIHdpbGwgYmUgbG9zdC4nfSAvPlxyXG4gICAgICAgICAgICA8VG9vbFRpcCBTaG93PXtob3ZlciA9PSAnQ29uZmlybScgJiYgIXN0ZXBDb21wbGV0ZX0gUG9zaXRpb249eyd0b3AnfSBUYXJnZXQ9eydXaXphcmRDb25maXJtJ30gWmluZGV4PXs5OTk5fT5cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdNZXRlcicgPyA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+QSBNZXRlciBuZWVkcyB0byBiZSBzZWxlY3RlZC48L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGVwICE9ICdNZXRlcicgPyBlcnJvck1zZy5tYXAoKGl0ZW0saW5kZXgpID0+IDxwIGtleT17aW5kZXh9PjxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIGNvbG9yOiAnI2RjMzU0NScgfX0gY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPiB7aXRlbX08L3A+KSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydTYXZlIFBSQzAwMiBDb25maWd1cmF0aW9uJ30gQ2FsbEJhY2s9eyhjb25maXJtKSA9PiB7IHNldFNob3dDb21wbGV0ZShmYWxzZSk7IGlmIChjb25maXJtKSBTdWJtaXQoKTsgfX0gU2hvdz17c2hvd0NvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZT17J1RoaXMgd2lsbCBhZGQgdGhlIHNlbGVjdGVkIG1ldGVyIHRvIFBSQzAwMiBtb25pdG9yaW5nIGFuZCBzYXZlIHRoZSBiYXNlIGNvbmZpZ3VyYXRpb24uIE5vdGUgdGhhdCB0aGUgc3RhdHVzIG9mIHRoaXMgbWV0ZXIgd2lsbCBub3QgdXBkYXRlIHVudGlsIHRoZSBmaXJzdCBjb25maWd1cmF0aW9uIEZpbGUgaXMgZG93bmxvYWRlZC4nfSAvPlxyXG4gICAgICAgICAgICA8TG9hZGluZ1NjcmVlbiBTaG93PXtzaG93TG9hZGluZ30gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01ldGVyV2l6emFyZDtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBOZXdNZXRlcldpenphcmQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE3LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNaU1EICB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBMb2FkaW5nSWNvbiwgU2VhcmNoLCBTZWFyY2hCYXIgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IHNldE1ldGVyOiAobWV0ZXI6IFBSQzAwMi5JTWV0ZXIpID0+IHZvaWQsIHNlbGVjdGVkTWV0ZXI6IFBSQzAwMi5JTWV0ZXIgfVxyXG5cclxuY29uc3Qgc3RhbmRhcmRTZWFyY2g6IFNlYXJjaC5JRmllbGQ8TWlNRC5NZXRlcj5bXSA9IFtcclxuICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTmFtZScsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ0Fzc2V0S2V5JywgbGFiZWw6ICdBc3NldCBLZXknLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdNYWtlJywgbGFiZWw6ICdNYWtlJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgdHlwZTogJ3N0cmluZycgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNlbGVjdE1ldGVyID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbTWV0ZXJMaXN0LCBzZXRNZXRlckxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklNZXRlcj4+KFtdKTtcclxuICAgIGNvbnN0IFttZXRlckZpbHRlciwgc2V0TWV0ZXJGaWx0ZXJdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8U2VhcmNoLklGaWx0ZXI8UFJDMDAyLklNZXRlcj4+PihbXSk7XHJcbiAgICBjb25zdCBbbWV0ZXJTb3J0LCBzZXRNZXRlclNvcnRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgUFJDMDAyLklNZXRlcj4oXCJOYW1lXCIpO1xyXG4gICAgY29uc3QgW21ldGVyQXNjLCBzZXRNZXRlckFzY10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRlcmFibGVMaXN0LCBzZXRGaWx0ZXJhYmxlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+Pj4oc3RhbmRhcmRTZWFyY2gpO1xyXG4gICAgY29uc3QgW3NlYXJjaFN0YXRlLCBzZXRTZWFyY2hTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTwoJ0lkbGUnIHwgJ0xvYWRpbmcnKT4oJ0lkbGUnKTtcclxuICAgIFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hTdGF0ZSgnTG9hZGluZycpO1xyXG4gICAgICAgIGxldCBoYW5kbGVNZXRlckxpc3QgPSBnZXRNZXRlckxpc3QoKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlTWV0ZXJMaXN0ICE9IG51bGwgJiYgaGFuZGxlTWV0ZXJMaXN0LmFib3J0ICE9IG51bGwpIGhhbmRsZU1ldGVyTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcywgbWV0ZXJBc2MsIG1ldGVyU29ydCwgbWV0ZXJGaWx0ZXJdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlckxpc3QoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JTWV0ZXI+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvU2VsZWN0YWJsZUxpc3RgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgU2VhcmNoZXM6IG1ldGVyRmlsdGVyLCBPcmRlckJ5OiBtZXRlclNvcnQsIEFzY2VuZGluZzogbWV0ZXJBc2MgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JTWV0ZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1ldGVyTGlzdChkYXRhKTtcclxuICAgICAgICAgICAgc2V0U2VhcmNoU3RhdGUoJ0lkbGUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBnZXRBZGRpdGlvbmFsRmllbGRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gbnVsbCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFkZGl0aW9uYWxGaWVsZHMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1pTUQuQWRkaXRpb25hbEZpZWxkPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0FkZGl0aW9uYWxGaWVsZC9QYXJlbnRUYWJsZS9NZXRlcmAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBDb252ZXJ0VHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnaW50ZWdlcicgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdkYXRldGltZScgfHwgdHlwZSA9PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbnVtJywgZW51bTogW3sgTGFiZWw6IHR5cGUsIFZhbHVlOiB0eXBlIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkOiBBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4pID0+IHtcclxuICAgICAgICAgICAgbGV0IG9yZGVyZWQgPSBfLm9yZGVyQnkoc3RhbmRhcmRTZWFyY2guY29uY2F0KGQubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogaXRlbS5GaWVsZE5hbWUsIGtleTogaXRlbS5GaWVsZE5hbWUsIC4uLkNvbnZlcnRUeXBlKGl0ZW0uVHlwZSkgfSBhcyBTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+XHJcbiAgICAgICAgICAgICkpKSwgWydsYWJlbCddLCBbXCJhc2NcIl0pO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJhYmxlTGlzdChvcmRlcmVkKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG4gICAgLy9MaXN0IG9mIG1ldGVycyB0byBTZWxlY3QgRnJvbVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8U2VhcmNoQmFyPFBSQzAwMi5JTWV0ZXI+IFNldEZpbHRlcj17c2V0TWV0ZXJGaWx0ZXJ9IENvbGx1bW5MaXN0PXtmaWx0ZXJhYmxlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbGx1bW49e3sga2V5OiAnTmFtZScsIGxhYmVsOiAnTmFtZScsIHR5cGU6ICdzdHJpbmcnIH19XHJcbiAgICAgICAgICAgICAgICAgIERpcmVjdGlvbj17J2xlZnQnfSBMYWJlbD17J1NlYXJjaCd9IFdpZHRoPXsnMTAwJSd9XHJcbiAgICAgICAgICAgICAgICAgIEdldEVudW09eyhzZXRPcHRpb25zLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYW5kbGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC50eXBlICE9ICdlbnVtJyB8fCBmaWVsZC5lbnVtID09IHVuZGVmaW5lZCB8fCBmaWVsZC5lbnVtLmxlbmd0aCAhPSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9WYWx1ZUxpc3QvR3JvdXAvJHtmaWVsZC5lbnVtWzBdLlZhbHVlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmRvbmUoZCA9PiBzZXRPcHRpb25zKGQubWFwKGl0ZW0gPT4gKHsgVmFsdWU6IGl0ZW0uVmFsdWUudG9TdHJpbmcoKSwgTGFiZWw6IGl0ZW0uVGV4dCB9KSkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IGlmIChoYW5kbGUgIT0gbnVsbCAmJiBoYW5kbGUuYWJvcnQgPT0gbnVsbCkgaGFuZGxlLmFib3J0KCk7IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIFJlc3VsdD17c2VhcmNoU3RhdGUgPT0gJ0xvYWRpbmcnID8gPExvYWRpbmdJY29uIFNob3c9e3RydWV9IC8+IDogJ0ZvdW5kICcgKyBNZXRlckxpc3QubGVuZ3RoICsgJyBNZXRlcnMnfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgPC9TZWFyY2hCYXI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYyggMTAwJSAtIDEzNnB4KScsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8UFJDMDAyLklNZXRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ01ldGVyJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01vZGVsJywgbGFiZWw6ICdNb2RlbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNYWtlJywgbGFiZWw6ICdNYWtlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtNZXRlckxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXttZXRlclNvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXttZXRlckFzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBtZXRlclNvcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlckFzYyghbWV0ZXJBc2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlclNvcnQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGQpID0+IHsgcHJvcHMuc2V0TWV0ZXIoZC5yb3cpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogNTUwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT09IChwcm9wcy5zZWxlY3RlZE1ldGVyID09IHVuZGVmaW5lZCA/IC0xIDogcHJvcHMuc2VsZWN0ZWRNZXRlci5JRCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdE1ldGVyO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==