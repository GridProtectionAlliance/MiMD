(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DiagnosticByMeter"],{

/***/ "./TSX/MiMD/Diagnostic/DiagnosticByMeter.tsx":
/*!***************************************************!*\
  !*** ./TSX/MiMD/Diagnostic/DiagnosticByMeter.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CommonComponents_FormSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommonComponents/FormSelect */ "./TSX/MiMD/CommonComponents/FormSelect.tsx");
/* harmony import */ var _CommonComponents_FormCheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CommonComponents/FormCheckBox */ "./TSX/MiMD/CommonComponents/FormCheckBox.tsx");
/* harmony import */ var _DiagnosticFiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DiagnosticFiles */ "./TSX/MiMD/Diagnostic/DiagnosticFiles.tsx");
/* harmony import */ var _DiagnosticFileChanges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DiagnosticFileChanges */ "./TSX/MiMD/Diagnostic/DiagnosticFileChanges.tsx");
/* harmony import */ var _CommonComponents_NoteWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CommonComponents/NoteWindow */ "./TSX/MiMD/CommonComponents/NoteWindow.tsx");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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









var ConfigurationByMeter = function (props) {
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), hover = _a[0], setHover = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), filterableList = _b[0], setFilterableList = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), filters = _c[0], setFilters = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({ FieldName: 'Station', SearchText: '', Operator: 'LIKE', Type: 'string' }), 2), filter = _d[0], setFilter = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), data = _e[0], setData = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('AlarmLastChanged'), 2), sortField = _f[0], setSortField = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), ascending = _g[0], setAscending = _g[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handle1 = getMeters(sortField, ascending);
        var handle2 = getAdditionalFields();
        return function () {
            if (handle1.abort != null)
                handle1.abort();
            if (handle2.abort != null)
                handle2.abort();
        };
    }, []);
    function getMeters(sf, asc) {
        var handle = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/Meter/Diagnostic/SearchableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: filters, OrderBy: sf, Ascending: asc }),
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setData(data);
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
        handle.done(function (data) {
            var otherColumns = [
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "Station",
                    ID: -1,
                    IsSecure: false,
                    ParentTable: "Meter",
                    Type: "string"
                },
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "Model",
                    ID: -1,
                    IsSecure: false,
                    ParentTable: "Meter",
                    Type: "string"
                },
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "DateLastChanged",
                    ID: -1,
                    IsSecure: false,
                    ParentTable: "Meter",
                    Type: "datetime"
                },
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "MaxChangeFileName",
                    ID: -1,
                    IsSecure: false,
                    ParentTable: "Meter",
                    Type: "string"
                },
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "AlarmLastChanged",
                    ID: -1,
                    IsSecure: false,
                    ParentTable: "Meter",
                    Type: "datetime"
                },
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "AlarmFileName",
                    ID: -1,
                    IsSecure: false,
                    ParentTable: "Meter",
                    Type: "string"
                },
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "Alarms",
                    ID: -1,
                    IsSecure: false,
                    ParentTable: "Meter",
                    Type: "number"
                }
            ];
            var ordered = lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"](otherColumns.concat(data), ['FieldName'], ["asc"]);
            setFilterableList(ordered);
        });
        return handle;
    }
    function handleSelect(item, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Diagnostic&MeterID=' + item.row.MeterID, state: {} });
    }
    function deleteFilter(f) {
        return __awaiter(this, void 0, void 0, function () {
            var index, filts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = filters.findIndex(function (fs) { return fs == f; });
                        filts = filters;
                        filts.splice(index, 1);
                        return [4 /*yield*/, setFilters(filts)];
                    case 1:
                        _a.sent();
                        setHover(false);
                        getMeters(sortField, ascending);
                        return [2 /*return*/];
                }
            });
        });
    }
    function addFilter() {
        return __awaiter(this, void 0, void 0, function () {
            var oldFilters;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldFilters = filters;
                        oldFilters.push(filter);
                        return [4 /*yield*/, setFilters(oldFilters)];
                    case 1:
                        _a.sent();
                        setFilter({ FieldName: 'Station', SearchText: '', Operator: 'LIKE', Type: 'string' });
                        getMeters(sortField, ascending);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%', height: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "navbar navbar-expand-lg navbar-light bg-light", style: { height: 55, paddingTop: 0, paddingBottom: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent", style: { width: '100%', height: 55, paddingTop: 0, paddingBottom: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "navbar-nav mr-auto", style: { width: '100%' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item", style: { width: '15%', paddingRight: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { position: 'relative', display: 'inline-block' } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { style: { height: 38 }, className: "btn btn-primary", "data-toggle": 'modal', "data-target": '#newFilter', onClick: function (evt) { return evt.preventDefault(); }, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } }, "Add Filter"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: window.innerWidth / 3, display: hover ? 'block' : 'none', position: 'absolute', backgroundColor: '#f1f1f1', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1 }, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: 'table' },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Column"),
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Operator"),
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Search Text"),
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Remove"))),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, filters.map(function (f, i) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: i },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, f.FieldName),
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, f.Operator),
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, f.SearchText),
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-sm", onClick: function (e) { return deleteFilter(f); } },
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-trash" }))))); }))))))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-7", style: { width: '65%', height: 'calc( 100% - 136px)', padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__["default"], { cols: [
                        { key: 'Station', label: 'Station', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
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
                    ], tableClass: "table table-hover", data: data, sortField: sortField, ascending: ascending, onSort: function (d) {
                        if (d.col == sortField) {
                            setAscending(!ascending);
                            getMeters(d.col, !ascending);
                        }
                        else {
                            setAscending(ascending);
                            setSortField(d.col);
                            getMeters(d.col, ascending);
                        }
                    }, onClick: handleSelect, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 190, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.MeterID == props.MeterID; } })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { height: window.innerHeight - 130, padding: 0, maxHeight: window.innerHeight - 130, overflowY: 'scroll' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DiagnosticFiles__WEBPACK_IMPORTED_MODULE_6__["default"], { MeterID: props.MeterID, FileName: props.FileName }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DiagnosticFileChanges__WEBPACK_IMPORTED_MODULE_7__["default"], { MeterID: props.MeterID, FileName: props.FileName, Table: props.Table }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_NoteWindow__WEBPACK_IMPORTED_MODULE_8__["default"], { ID: props.MeterID }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", id: "newFilter" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", { className: "modal-title" }, "Add Filter"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "close", "data-dismiss": "modal" }, "\u00D7")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormSelect__WEBPACK_IMPORTED_MODULE_4__["default"], { Record: filter, Field: 'FieldName', Options: filterableList.map(function (fl) { return ({ Value: fl.FieldName, Label: fl.FieldName }); }), Setter: function (record) {
                                var operator = "IN";
                                var column = filterableList.find(function (fl) { return fl.FieldName == record.FieldName; });
                                if (column.Type == 'string')
                                    operator = "LIKE";
                                if (column.Type == 'integer' || column.Type == 'number' || column.Type == 'boolean')
                                    operator = "=";
                                setFilter(function (prevFilter) { return (__assign(__assign({}, prevFilter), { FieldName: record.FieldName, SearchText: '', Operator: operator, Type: column.Type })); });
                            }, Label: 'Column' }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FilterCreator, { Filter: filter, AdditionalField: filterableList.find(function (fl) { return fl.FieldName == filter.FieldName; }), Setter: function (record) { return setFilter(record); } })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", "data-dismiss": "modal", onClick: function () { return addFilter(); } }, "Add"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger", "data-dismiss": "modal" }, "Close")))))));
};
var FilterCreator = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), valueListItems = _a[0], setValueListItems = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.AdditionalField == undefined)
            return;
        if ((["integer", "number", "boolean", "string", "datetime"]).indexOf(props.AdditionalField.Type) < 0) {
            var handle_1 = $.ajax({
                type: "GET",
                url: homePath + "api/ValueList/Group/" + props.AdditionalField.Type,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: true,
                async: true
            });
            handle_1.done(function (vl) {
                setValueListItems(vl);
            });
            return function () {
                if (handle_1.abort != undefined)
                    handle_1.abort();
            };
        }
    }, [props.AdditionalField]);
    if (props.AdditionalField == undefined)
        return null;
    else if (props.AdditionalField.Type == "string") {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Column type is string. Wildcard (*) can be used with 'LIKE' and 'NOT LIKE'"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'row' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col-4' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: 'form-control', value: props.Filter.Operator, onChange: function (evt) {
                            var value = evt.target.value;
                            props.Setter(function (prevState) { return (__assign(__assign({}, prevState), { Operator: value })); });
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: 'LIKE' }, "LIKE"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: 'NOT LIKE' }, "NOT LIKE"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '=' }, "="))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: 'form-control', value: props.Filter.SearchText, onChange: function (evt) {
                            var value = evt.target.value;
                            props.Setter(function (prevState) { return (__assign(__assign({}, prevState), { SearchText: value })); });
                        } })))));
    }
    else if (props.AdditionalField.Type == "integer" || props.AdditionalField.Type == "number" || props.AdditionalField.Type == "datetime") {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                "Column type is ",
                props.AdditionalField.Type,
                "."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'row' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col-4' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: 'form-control', value: props.Filter.Operator, onChange: function (evt) {
                            var value = evt.target.value;
                            props.Setter(function (prevState) { return (__assign(__assign({}, prevState), { Operator: value })); });
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '=' }, "="),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '<>' }, "!="),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '>' }, ">"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '>=' }, ">="),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '<' }, "<"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '<=' }, "<="))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: 'form-control', value: props.Filter.SearchText, onChange: function (evt) {
                            var value = evt.target.value;
                            props.Setter(function (prevState) { return (__assign(__assign({}, prevState), { SearchText: value })); });
                        } })))));
    }
    else if (props.AdditionalField.Type == "boolean") {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormCheckBox__WEBPACK_IMPORTED_MODULE_5__["default"], { Record: props.Filter, Field: 'SearchText', Setter: function (filter) {
                props.Setter(function (prevFilter) { return (__assign(__assign({}, prevFilter), { Operator: '=', SearchText: filter.SearchText.toString() == 'true' ? '1' : '0' })); });
            }, Label: "Column type is boolean. Yes/On is checked." });
    }
    else {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Column type is enumerable. Select from below."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { style: { listStyle: 'none' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-check" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) {
                                if (evt.target.checked)
                                    props.Setter(function (prevSetter) { return (__assign(__assign({}, prevSetter), { SearchText: "(" + valueListItems.map(function (x) { return x.Text; }).join(',') + ")" })); });
                                else
                                    props.Setter(function (prevSetter) { return (__assign(__assign({}, prevSetter), { SearchText: '' })); });
                            }, defaultValue: 'off' }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-check-label" }, "Select All"))),
                valueListItems.map(function (vli) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: vli.ID },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-check" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) {
                                if (evt.target.checked) {
                                    var list = props.Filter.SearchText.replace('(', '').replace(')', '').split(',');
                                    list = list.filter(function (x) { return x != ""; });
                                    list.push(vli.Text);
                                    var text_1 = "(" + list.join(',') + ")";
                                    props.Setter(function (prevSetter) { return (__assign(__assign({}, prevSetter), { SearchText: text_1 })); });
                                }
                                else {
                                    var list = props.Filter.SearchText.replace('(', '').replace(')', '').split(',');
                                    list = list.filter(function (x) { return x != ""; });
                                    list = list.filter(function (x) { return x != vli.Text; });
                                    var text_2 = "(" + list.join(',') + ")";
                                    props.Setter(function (prevSetter) { return (__assign(__assign({}, prevSetter), { SearchText: text_2 })); });
                                }
                            }, value: props.Filter.SearchText.indexOf(vli.Text) >= 0 ? 'on' : 'off', checked: props.Filter.SearchText.indexOf(vli.Text) >= 0 ? true : false }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-check-label" }, vli.Text))); }))));
    }
};
/* harmony default export */ __webpack_exports__["default"] = (ConfigurationByMeter);


/***/ }),

/***/ "./TSX/MiMD/Diagnostic/DiagnosticFileChanges.tsx":
/*!*******************************************************!*\
  !*** ./TSX/MiMD/Diagnostic/DiagnosticFileChanges.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), configFiles = _a[0], setConfigFiles = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''), 2), content = _b[0], setContent = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''), 2), html = _c[0], setHtml = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false), 2), flag = _d[0], setFlag = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (isNaN(props.MeterID) || props.FileName == undefined)
            return;
        var handle1 = getConfigFiles();
        handle1.done(function (data) { return setConfigFiles(data); });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [props.MeterID, props.FileName, flag]);
    function getConfigFiles() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/DiagnosticFiles/" + props.Table + "/" + props.MeterID + "/" + props.FileName + "/" + flag,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function getColor(date) {
        return null;
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                        props.FileName,
                        " History:"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-check" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) { return setFlag(!flag); }, value: flag ? 'on' : 'off', checked: flag ? true : false }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "form-check-label" }, "Show Files w/o Alarms"))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Last Write Time"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Alarms"),
                            props.Table == 'AppStatusFileChanges' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "File") : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Diff"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, configFiles.map(function (cf, i) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: i },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { backgroundColor: getColor(cf.LastWriteTime) } }, moment(cf.LastWriteTime).format("MM/DD/YY HH:mm CT")),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, cf.Alarms),
                            props.Table == 'AppStatusFileChanges' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-sm", "data-toggle": 'modal', "data-target": '#showContent', onClick: function (e) { setHtml("<p>" + cf.Text.replace(/\n/g, '<br>') + "</p>"); } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-file" })))) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-sm", "data-toggle": 'modal', "data-target": '#showContent', onClick: function (e) { setHtml(cf.Html.replace(/&para;/g, '')); } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-eye" })))));
                    }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modal", id: "showContent" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modal-dialog modal-lg", style: { maxWidth: '75%' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", { className: "modal-title" }, props.FileName),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "button", className: "close", "data-dismiss": "modal" }, "\u00D7")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "well", style: { backgroundColor: 'lightgrey', fontSize: 18 }, dangerouslySetInnerHTML: { __html: html } })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "button", className: "btn btn-danger", "data-dismiss": "modal" }, "Close")))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DiagnosticFileChanges);


/***/ }),

/***/ "./TSX/MiMD/Diagnostic/DiagnosticFiles.tsx":
/*!*************************************************!*\
  !*** ./TSX/MiMD/Diagnostic/DiagnosticFiles.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
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
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), configFiles = _a[0], setConfigFiles = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (isNaN(props.MeterID))
            return;
        var handle1 = getConfigFiles();
        handle1.done(function (data) { return setConfigFiles(data); });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [props.MeterID]);
    function getConfigFiles() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/DiagnosticFiles/" + props.MeterID + "/LastWrites",
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, "Diagnostic Files:"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "table table-hover" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "File"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Last Write Time"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Last Alarm Time"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Alarms"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, configFiles.map(function (cf, i) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: i, style: { cursor: 'pointer', backgroundColor: (props.FileName != null && cf.FileName == props.FileName ? 'yellow' : null) }, onClick: function (evt) { return handleSelect(cf, evt); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, cf.MaxChangeFileName),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, cf.MaxChangeWriteTime == null ? '' : moment(cf.MaxChangeWriteTime).format("MM/DD/YY HH:mm CT")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { backgroundColor: getColor(cf.MaxAlarmWriteTime) } }, cf.MaxAlarmWriteTime == null ? '' : (moment(cf.MaxAlarmWriteTime).format("MM/DD/YY HH:mm CT"))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, cf.Alarms));
                }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DiagnosticFiles);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9EaWFnbm9zdGljL0RpYWdub3N0aWNCeU1ldGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9EaWFnbm9zdGljL0RpYWdub3N0aWNGaWxlQ2hhbmdlcy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvRGlhZ25vc3RpYy9EaWFnbm9zdGljRmlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RyxtQ0FBbUM7QUFDbkMsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RTtBQUNlO0FBQ2xCO0FBQ2tCO0FBRVU7QUFFSTtBQUNaO0FBQ1k7QUFDSjtBQTBCeEQsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEtBQTBEO0lBQ3BGLElBQUksT0FBTyxHQUFHLG1FQUFVLEVBQUUsQ0FBQztJQUVyQix5RUFBa0QsRUFBakQsYUFBSyxFQUFFLGdCQUEwQyxDQUFDO0lBQ25ELHNFQUFxRixFQUFwRixzQkFBYyxFQUFFLHlCQUFvRSxDQUFDO0lBQ3RGLHNFQUF5RCxFQUF4RCxlQUFPLEVBQUUsa0JBQStDLENBQUM7SUFDMUQsOElBQXVILEVBQXRILGNBQU0sRUFBRSxp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RUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFDLEdBQUcsSUFBSyxtQkFBWSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBckIsQ0FBcUI7d0JBQzNLLHVFQUFLLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBTTt3QkFDL0IsdUVBQUssRUFBRSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFNO3dCQUN4RyxtRUFBSSxLQUFLLEVBQUUsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUcsRUFBRSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFNO3dCQUNySyx1RUFBSyxFQUFFLENBQUMsTUFBTSxDQUFNLENBRW5CO2dCQU5MLENBTUssQ0FBQyxDQUNOLENBRUosQ0FDTixDQUNKLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFYyw4RUFBZSxFQUFDIiwiZmlsZSI6IkRpYWdub3N0aWNCeU1ldGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8yMi8yMDE5IC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0JztcclxuaW1wb3J0IEZvcm1DaGVja0JveCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm1DaGVja0JveCc7XHJcbmltcG9ydCBEaWFnbm9zdGljRmlsZXMgZnJvbSAnLi9EaWFnbm9zdGljRmlsZXMnO1xyXG5pbXBvcnQgRGlhZ25vc3RpY0ZpbGVDaGFuZ2VzIGZyb20gJy4vRGlhZ25vc3RpY0ZpbGVDaGFuZ2VzJztcclxuaW1wb3J0IE5vdGVXaW5kb3cgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Ob3RlV2luZG93JztcclxuXHJcbnR5cGUgRmllbGROYW1lID0gJ1N0YXRpb24nIHwgJ01vZGVsJyB8ICdEYXRlTGFzdENoYW5nZScgfCAnVFNDJztcclxuXHJcbmludGVyZmFjZSBNZXRlciB7XHJcbiAgICBNZXRlcklEOiBudW1iZXIsXHJcbiAgICBTdGF0aW9uOiBzdHJpbmcsXHJcbiAgICBNb2RlbDogc3RyaW5nLCBcclxuICAgIFRTQzogc3RyaW5nLFxyXG4gICAgRGF0ZUxhc3RDaGFuZ2VkOiBzdHJpbmcsXHJcbiAgICBNYXhDaGFuZ2VGaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgQWxhcm1MYXN0Q2hhbmdlZDogc3RyaW5nLFxyXG4gICAgQWxhcm1GaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgQWxhcm1zOiBudW1iZXIsIFxyXG4gICAgTGFzdEZhdWx0VGltZTogc3RyaW5nLFxyXG4gICAgRmF1bHRDb3VudDQ4aHI6IG51bWJlclxyXG59XHJcbmludGVyZmFjZSBGaWx0ZXIge1xyXG4gICAgRmllbGROYW1lOiBGaWVsZE5hbWUsXHJcbiAgICBTZWFyY2hUZXh0OiBzdHJpbmcsXHJcbiAgICBPcGVyYXRvcjogJz0nIHwgJzw+JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nIHwgJ0xJS0UnIHwgJ05PVCBMSUtFJyB8ICdJTicgfCAnTk9UIElOJyxcclxuICAgIFR5cGU6IHN0cmluZ1xyXG59XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuY29uc3QgQ29uZmlndXJhdGlvbkJ5TWV0ZXIgPSAocHJvcHM6IHtNZXRlcklEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcsIFRhYmxlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbZmlsdGVyYWJsZUxpc3QsIHNldEZpbHRlcmFibGVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1pTUQuQWRkaXRpb25hbEZpZWxkPj4oW10pO1xyXG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8RmlsdGVyPj4oW10pO1xyXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IFJlYWN0LnVzZVN0YXRlPEZpbHRlcj4oeyBGaWVsZE5hbWU6ICdTdGF0aW9uJywgU2VhcmNoVGV4dDogJycsIE9wZXJhdG9yOiAnTElLRScsIFR5cGU6ICdzdHJpbmcnfSk7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWV0ZXI+PihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignQWxhcm1MYXN0Q2hhbmdlZCcpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0TWV0ZXJzKHNvcnRGaWVsZCwgYXNjZW5kaW5nKTtcclxuICAgICAgICBsZXQgaGFuZGxlMiA9IGdldEFkZGl0aW9uYWxGaWVsZHMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gbnVsbCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMi5hYm9ydCAhPSBudWxsKSBoYW5kbGUyLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1ldGVycyhzZiwgYXNjKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1ldGVyPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvTWV0ZXIvRGlhZ25vc3RpYy9TZWFyY2hhYmxlTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBTZWFyY2hlczogZmlsdGVycywgT3JkZXJCeTogc2YsIEFzY2VuZGluZzogYXNjIH0pLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxNZXRlcj4pID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShkYXRhKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFkZGl0aW9uYWxGaWVsZHMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1pTUQuQWRkaXRpb25hbEZpZWxkPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0FkZGl0aW9uYWxGaWVsZC9QYXJlbnRUYWJsZS9NZXRlcmAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8TWlNRC5BZGRpdGlvbmFsRmllbGQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvdGhlckNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJTdGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJNb2RlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIElEOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBJc1NlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUGFyZW50VGFibGU6IFwiTWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBUeXBlOiBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZUtleTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBGaWVsZE5hbWU6IFwiRGF0ZUxhc3RDaGFuZ2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwiZGF0ZXRpbWVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGVLZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGROYW1lOiBcIk1heENoYW5nZUZpbGVOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJBbGFybUxhc3RDaGFuZ2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwiZGF0ZXRpbWVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGVLZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGROYW1lOiBcIkFsYXJtRmlsZU5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBJRDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNTZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhcmVudFRhYmxlOiBcIk1ldGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJBbGFybXNcIixcclxuICAgICAgICAgICAgICAgICAgICBJRDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNTZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhcmVudFRhYmxlOiBcIk1ldGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIHZhciBvcmRlcmVkID0gXy5vcmRlckJ5KG90aGVyQ29sdW1ucy5jb25jYXQoZGF0YSksIFsnRmllbGROYW1lJ10sIFtcImFzY1wiXSk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmFibGVMaXN0KG9yZGVyZWQpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGl0ZW0sIGV2dCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdpbmRleC5jc2h0bWwnLCBzZWFyY2g6ICc/bmFtZT1EaWFnbm9zdGljJk1ldGVySUQ9JyArIGl0ZW0ucm93Lk1ldGVySUQsIHN0YXRlOiB7fSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUZpbHRlcihmOiBGaWx0ZXIpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBmaWx0ZXJzLmZpbmRJbmRleChmcyA9PiBmcyA9PSBmKTtcclxuICAgICAgICBsZXQgZmlsdHMgPSBmaWx0ZXJzO1xyXG4gICAgICAgIGZpbHRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgYXdhaXQgc2V0RmlsdGVycyhmaWx0cyk7XHJcbiAgICAgICAgc2V0SG92ZXIoZmFsc2UpO1xyXG4gICAgICAgIGdldE1ldGVycyhzb3J0RmllbGQsIGFzY2VuZGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkRmlsdGVyKCkge1xyXG4gICAgICAgIGxldCBvbGRGaWx0ZXJzID0gZmlsdGVycztcclxuICAgICAgICBvbGRGaWx0ZXJzLnB1c2goZmlsdGVyKTtcclxuICAgICAgICBhd2FpdCBzZXRGaWx0ZXJzKG9sZEZpbHRlcnMpO1xyXG4gICAgICAgIHNldEZpbHRlcih7IEZpZWxkTmFtZTogJ1N0YXRpb24nLCBTZWFyY2hUZXh0OiAnJywgT3BlcmF0b3I6ICdMSUtFJywgVHlwZTogJ3N0cmluZycgfSk7XHJcbiAgICAgICAgZ2V0TWV0ZXJzKHNvcnRGaWVsZCwgYXNjZW5kaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCIgc3R5bGU9e3toZWlnaHQ6IDU1LCBwYWRkaW5nVG9wOiAwLCBwYWRkaW5nQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDU1LCBwYWRkaW5nVG9wOiAwLCBwYWRkaW5nQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17eyB3aWR0aDogJzE1JScsIHBhZGRpbmdSaWdodDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e2hlaWdodDogMzh9fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLXRvZ2dsZT0nbW9kYWwnIGRhdGEtdGFyZ2V0PScjbmV3RmlsdGVyJyBvbkNsaWNrPXsoZXZ0KSA9PiBldnQucHJldmVudERlZmF1bHQoKX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9PkFkZCBGaWx0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDMsIGRpc3BsYXk6IGhvdmVyID8gJ2Jsb2NrJyA6ICdub25lJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJhY2tncm91bmRDb2xvcjogJyNmMWYxZjEnLCBib3hTaGFkb3c6ICcwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKScsIHpJbmRleDogMSB9fSBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPkNvbHVtbjwvdGg+PHRoPk9wZXJhdG9yPC90aD48dGg+U2VhcmNoIFRleHQ8L3RoPjx0aD5SZW1vdmU8L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJzLm1hcCgoZiwgaSkgPT4gPHRyIGtleT17aX0+PHRkPntmLkZpZWxkTmFtZX08L3RkPjx0ZD57Zi5PcGVyYXRvcn08L3RkPjx0ZD57Zi5TZWFyY2hUZXh0fTwvdGQ+PHRkPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIG9uQ2xpY2s9eyhlKSA9PiBkZWxldGVGaWx0ZXIoZil9PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj48L3RkPjwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3ttYXJnaW46IDB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTdcIiBzdHlsZT17eyB3aWR0aDogJzY1JScsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknLCBwYWRkaW5nOjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnU3RhdGlvbicsIGxhYmVsOiAnU3RhdGlvbicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01vZGVsJywgbGFiZWw6ICdNb2RlbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnNSUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVFNDJywgbGFiZWw6ICdUU0MnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzUlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzUlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnRGF0ZUxhc3RDaGFuZ2VkJywgbGFiZWw6ICdMYXN0IENoYW5nZWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0gPT0gbnVsbCB8fCBpdGVtW2tleV0gPT0gJycpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoaXRlbVtrZXldKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWF4Q2hhbmdlRmlsZU5hbWUnLCBsYWJlbDogJ0xhc3QgRmlsZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTAlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEwJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FsYXJtTGFzdENoYW5nZWQnLCBsYWJlbDogJ0xhc3QgQWxhcm0nLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0gPT0gbnVsbCB8fCBpdGVtW2tleV0gPT0gJycpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoaXRlbVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF5cyA9IG5vdy5kaWZmKGRhdGUsICdkYXlzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA8IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAncmVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAnb3JhbmdlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbJ2JhY2tncm91bmRDb2xvciddID0gJ3llbGxvdyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0FsYXJtRmlsZU5hbWUnLCBsYWJlbDogJ0xhc3QgRmlsZSBBbGFybWVkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0FsYXJtcycsIGxhYmVsOiAnQWxhcm1zJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICc1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICc1JScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0xhc3RGYXVsdFRpbWUnLCBsYWJlbDogJ0xhc3QgRmF1bHQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0gPT0gbnVsbCB8fCBpdGVtW2tleV0gPT0gJycpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoaXRlbVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGYXVsdENvdW50NDhocicsIGxhYmVsOiAnRmF1bHRzICg0OGhyKScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnNSUnIH0gfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogMTcsIHBhZGRpbmc6IDAgfSwgcm93U3R5bGU6IHsgd2lkdGg6IDAsIHBhZGRpbmc6IDAgfSB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE1ldGVycyhkLmNvbCwgIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE1ldGVycyhkLmNvbCwgYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxOTAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBpdGVtLk1ldGVySUQgPT0gcHJvcHMuTWV0ZXJJRH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMTMwLCBwYWRkaW5nOiAwLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDEzMCAsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWdub3N0aWNGaWxlcyBNZXRlcklEPXtwcm9wcy5NZXRlcklEfSBGaWxlTmFtZT17cHJvcHMuRmlsZU5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWdub3N0aWNGaWxlQ2hhbmdlcyBNZXRlcklEPXtwcm9wcy5NZXRlcklEfSBGaWxlTmFtZT17cHJvcHMuRmlsZU5hbWV9IFRhYmxlPXtwcm9wcy5UYWJsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOb3RlV2luZG93IElEPXtwcm9wcy5NZXRlcklEfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIGlkPVwibmV3RmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+QWRkIEZpbHRlcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNlbGVjdDxGaWx0ZXI+IFJlY29yZD17ZmlsdGVyfSBGaWVsZD0nRmllbGROYW1lJyBPcHRpb25zPXtmaWx0ZXJhYmxlTGlzdC5tYXAoZmwgPT4gKHsgVmFsdWU6IGZsLkZpZWxkTmFtZSwgTGFiZWw6IGZsLkZpZWxkTmFtZSB9KSl9IFNldHRlcj17KHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcGVyYXRvciA9IFwiSU5cIiBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbiA9IGZpbHRlcmFibGVMaXN0LmZpbmQoZmwgPT4gZmwuRmllbGROYW1lID09IHJlY29yZC5GaWVsZE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5UeXBlID09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvciA9IFwiTElLRVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uVHlwZSA9PSAnaW50ZWdlcicgfHwgY29sdW1uLlR5cGUgPT0gJ251bWJlcicgfHwgY29sdW1uLlR5cGUgPT0gJ2Jvb2xlYW4nIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBcIj1cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVyKChwcmV2RmlsdGVyKSA9PiAoeyAuLi5wcmV2RmlsdGVyLCBGaWVsZE5hbWU6IHJlY29yZC5GaWVsZE5hbWUsIFNlYXJjaFRleHQ6ICcnLCBPcGVyYXRvcjogb3BlcmF0b3IsIFR5cGU6IGNvbHVtbi5UeXBlIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gTGFiZWw9J0NvbHVtbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJDcmVhdG9yIEZpbHRlcj17ZmlsdGVyfSBBZGRpdGlvbmFsRmllbGQ9e2ZpbHRlcmFibGVMaXN0LmZpbmQoZmwgPT4gZmwuRmllbGROYW1lID09IGZpbHRlci5GaWVsZE5hbWUpfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHNldEZpbHRlcihyZWNvcmQpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17KCkgPT4gYWRkRmlsdGVyKCl9ID5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgRmlsdGVyQ3JlYXRvciA9IChwcm9wczogeyBBZGRpdGlvbmFsRmllbGQ6IE1pTUQuQWRkaXRpb25hbEZpZWxkLCBGaWx0ZXI6IEZpbHRlciwgU2V0dGVyOiAoZmlsdGVyOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxGaWx0ZXI+KSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZUxpc3RJdGVtcywgc2V0VmFsdWVMaXN0SXRlbXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5WYWx1ZUxpc3RJdGVtPj4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLkFkZGl0aW9uYWxGaWVsZCA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKChbXCJpbnRlZ2VyXCIsIFwibnVtYmVyXCIsIFwiYm9vbGVhblwiLCBcInN0cmluZ1wiLCBcImRhdGV0aW1lXCJdKS5pbmRleE9mKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlKSA8IDApIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvVmFsdWVMaXN0L0dyb3VwLyR7cHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGV9YCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBoYW5kbGUuZG9uZSgodmw6IEFycmF5PE1pTUQuVmFsdWVMaXN0SXRlbT4pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlTGlzdEl0ZW1zKHZsKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW3Byb3BzLkFkZGl0aW9uYWxGaWVsZF0pO1xyXG5cclxuICAgIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAocHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29sdW1uIHR5cGUgaXMgc3RyaW5nLiBXaWxkY2FyZCAoKikgY2FuIGJlIHVzZWQgd2l0aCAnTElLRScgYW5kICdOT1QgTElLRSc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e3Byb3BzLkZpbHRlci5PcGVyYXRvcn0gb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWUgYXMgJ0xJS0UnIHwgJ05PVCBMSUtFJyB8ICc9JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcigocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIE9wZXJhdG9yOiB2YWx1ZSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTElLRSc+TElLRTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTk9UIExJS0UnPk5PVCBMSUtFPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc9Jz49PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dH0gb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWUgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgU2VhcmNoVGV4dDogdmFsdWUgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUgPT0gXCJpbnRlZ2VyXCIgfHwgcHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUgPT0gXCJudW1iZXJcIiB8fCBwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZSA9PSBcImRhdGV0aW1lXCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbHVtbiB0eXBlIGlzIHtwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZX0uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtwcm9wcy5GaWx0ZXIuT3BlcmF0b3J9IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlIGFzICc9JyB8ICc8PicgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcigocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIE9wZXJhdG9yOiB2YWx1ZSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPSc+PTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPD4nPiE9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc+Jz57YD5gfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPj0nPntgPj1gfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPCc+e2A8YH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jzw9Jz57YDw9YH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e3Byb3BzLkZpbHRlci5TZWFyY2hUZXh0fSBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBTZWFyY2hUZXh0OiB2YWx1ZSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZSA9PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIHJldHVybiA8Rm9ybUNoZWNrQm94IFJlY29yZD17cHJvcHMuRmlsdGVyfSBGaWVsZD0nU2VhcmNoVGV4dCcgU2V0dGVyPXsoZmlsdGVyOiBGaWx0ZXIpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKChwcmV2RmlsdGVyKSA9PiAoeyAuLi5wcmV2RmlsdGVyLCBPcGVyYXRvcjogJz0nLCBTZWFyY2hUZXh0OiBmaWx0ZXIuU2VhcmNoVGV4dC50b1N0cmluZygpID09ICd0cnVlJyA/ICcxJzogJzAnIH0pKVxyXG4gICAgICAgIH19IExhYmVsPVwiQ29sdW1uIHR5cGUgaXMgYm9vbGVhbi4gWWVzL09uIGlzIGNoZWNrZWQuXCIgLz5cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29sdW1uIHR5cGUgaXMgZW51bWVyYWJsZS4gU2VsZWN0IGZyb20gYmVsb3cuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgPjxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPXt7IHpJbmRleDogMSB9fSBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiBgKCR7dmFsdWVMaXN0SXRlbXMubWFwKHggPT4geC5UZXh0KS5qb2luKCcsJyl9KWAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiAnJyB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGRlZmF1bHRWYWx1ZT0nb2ZmJyAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiA+U2VsZWN0IEFsbDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlTGlzdEl0ZW1zLm1hcCh2bGkgPT4gPGxpIGtleT17dmxpLklEfSA+PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9e3sgekluZGV4OiAxIH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dC5yZXBsYWNlKCcoJywgJycpLnJlcGxhY2UoJyknLCAnJykuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoeCA9PiB4ICE9IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHZsaS5UZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gYCgke2xpc3Quam9pbignLCcpfSlgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcihwcmV2U2V0dGVyID0+ICh7IC4uLnByZXZTZXR0ZXIsIFNlYXJjaFRleHQ6IHRleHQgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dC5yZXBsYWNlKCcoJywgJycpLnJlcGxhY2UoJyknLCAnJykuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoeCA9PiB4ICE9IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHggPT4geCAhPSB2bGkuVGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGAoJHtsaXN0LmpvaW4oJywnKX0pYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiB0ZXh0IH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IHZhbHVlPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dC5pbmRleE9mKHZsaS5UZXh0KSA+PSAwID8gJ29uJyA6ICdvZmYnfSBjaGVja2VkPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dC5pbmRleE9mKHZsaS5UZXh0KSA+PSAwID8gdHJ1ZSA6IGZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiID57dmxpLlRleHR9PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9saT4pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uQnlNZXRlcjtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEaWFnbm9zdGljRmlsZUNoYW5nZXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA1LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IERpYWdub3N0aWNGaWxlQ2hhbmdlcyA9IChwcm9wczogeyBNZXRlcklEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcsIFRhYmxlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2NvbmZpZ0ZpbGVzLCBzZXRDb25maWdGaWxlc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtodG1sLCBzZXRIdG1sXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpIHx8IHByb3BzLkZpbGVOYW1lID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldENvbmZpZ0ZpbGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhKSA9PiBzZXRDb25maWdGaWxlcyhkYXRhKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklELCBwcm9wcy5GaWxlTmFtZSwgZmxhZ10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb25maWdGaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9EaWFnbm9zdGljRmlsZXMvJHtwcm9wcy5UYWJsZX0vJHtwcm9wcy5NZXRlcklEfS8ke3Byb3BzLkZpbGVOYW1lfS8ke2ZsYWd9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcihkYXRlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgbW9tID0gbW9tZW50KGRhdGUpO1xyXG4gICAgICAgIGxldCBub3cgPSBtb21lbnQoKTtcclxuICAgICAgICBsZXQgZGF5cyA9IG5vdy5kaWZmKG1vbSwgJ2RheXMnKTtcclxuXHJcbiAgICAgICAgaWYgKGRheXMgPCAxKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSB8fCBwcm9wcy5GaWxlTmFtZSA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57cHJvcHMuRmlsZU5hbWV9IEhpc3Rvcnk6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPXt7IHpJbmRleDogMSB9fSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RmxhZyghZmxhZyl9IHZhbHVlPXtmbGFnID8gJ29uJyA6ICdvZmYnfSBjaGVja2VkPXtmbGFnID8gdHJ1ZSA6IGZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiA+U2hvdyBGaWxlcyB3L28gQWxhcm1zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPkxhc3QgV3JpdGUgVGltZTwvdGg+PHRoPkFsYXJtczwvdGg+e3Byb3BzLlRhYmxlID09ICdBcHBTdGF0dXNGaWxlQ2hhbmdlcyc/IDx0aD5GaWxlPC90aD46IG51bGx9PHRoPkRpZmY8L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maWdGaWxlcy5tYXAoKGNmLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZ2V0Q29sb3IoY2YuTGFzdFdyaXRlVGltZSkgfX0+e21vbWVudChjZi5MYXN0V3JpdGVUaW1lKS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2YuQWxhcm1zfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLlRhYmxlID09ICdBcHBTdGF0dXNGaWxlQ2hhbmdlcycgPyA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD0nI3Nob3dDb250ZW50JyBvbkNsaWNrPXsoZSkgPT4geyBzZXRIdG1sKGA8cD4ke2NmLlRleHQucmVwbGFjZSgvXFxuL2csICc8YnI+Jyl9PC9wPmApfX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZVwiPjwvaT48L3NwYW4+PC9idXR0b24+PC90ZD46bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD0nI3Nob3dDb250ZW50JyBvbkNsaWNrPXsoZSkgPT4geyBzZXRIdG1sKGNmLkh0bWwucmVwbGFjZSgvJnBhcmE7L2csICcnKSk7fX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZXllXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9XCJzaG93Q29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIiBzdHlsZT17e21heFdpZHRoOiAnNzUlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3Byb3BzLkZpbGVOYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZXknLCBmb250U2l6ZTogMTh9fWRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWdub3N0aWNGaWxlQ2hhbmdlcztcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERpYWdub3N0aWNGaWxlcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDUvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBEaWFnbm9zdGljRmlsZXMgPSAocHJvcHM6IHsgTWV0ZXJJRDogbnVtYmVyLCBGaWxlTmFtZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtjb25maWdGaWxlcywgc2V0Q29uZmlnRmlsZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8YW55Pj4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0Q29uZmlnRmlsZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGEpID0+IHNldENvbmZpZ0ZpbGVzKGRhdGEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySURdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29uZmlnRmlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvRGlhZ25vc3RpY0ZpbGVzLyR7cHJvcHMuTWV0ZXJJRH0vTGFzdFdyaXRlc2AsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1vbSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihtb20sICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChvYmosIGV2dCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdpbmRleC5jc2h0bWwnLCBzZWFyY2g6IGA/bmFtZT1EaWFnbm9zdGljJk1ldGVySUQ9JHtwcm9wcy5NZXRlcklEfSZGaWxlTmFtZT0ke29iai5NYXhDaGFuZ2VGaWxlTmFtZX0mVGFibGU9JHtvYmouTWF4Q2hhbmdlVGFibGV9YCwgc3RhdGU6IHt9IH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5EaWFnbm9zdGljIEZpbGVzOjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPkZpbGU8L3RoPjx0aD5MYXN0IFdyaXRlIFRpbWU8L3RoPjx0aD5MYXN0IEFsYXJtIFRpbWU8L3RoPjx0aD5BbGFybXM8L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maWdGaWxlcy5tYXAoKGNmLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGJhY2tncm91bmRDb2xvcjogKHByb3BzLkZpbGVOYW1lICE9IG51bGwgJiYgY2YuRmlsZU5hbWUgPT0gcHJvcHMuRmlsZU5hbWUgPyAneWVsbG93JyA6IG51bGwpIH19IG9uQ2xpY2s9eyhldnQpID0+IGhhbmRsZVNlbGVjdChjZiwgZXZ0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntjZi5NYXhDaGFuZ2VGaWxlTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2YuTWF4Q2hhbmdlV3JpdGVUaW1lID09IG51bGwgPyAnJyA6bW9tZW50KGNmLk1heENoYW5nZVdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBnZXRDb2xvcihjZi5NYXhBbGFybVdyaXRlVGltZSkgfX0+e2NmLk1heEFsYXJtV3JpdGVUaW1lID09IG51bGwgPyAnJyA6IChtb21lbnQoY2YuTWF4QWxhcm1Xcml0ZVRpbWUpLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2YuQWxhcm1zfTwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWFnbm9zdGljRmlsZXM7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9