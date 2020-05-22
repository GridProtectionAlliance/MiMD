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
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('DateLastChanged'), 2), sortField = _f[0], setSortField = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), ascending = _g[0], setAscending = _g[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handle1 = getMeters();
        var handle2 = getAdditionalFields();
        return function () {
            if (handle1.abort != null)
                handle1.abort();
            if (handle2.abort != null)
                handle2.abort();
        };
    }, []);
    function getMeters() {
        var handle = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/Meter/Diagnostic/SearchableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(filters),
            cache: false,
            async: true
        });
        handle.done(function (data) {
            //var ordered = _.orderBy(data, [sortField], [(ascending ? "asc" : "desc")]);
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
                        getMeters();
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
                        getMeters();
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '50%', height: 'calc( 100% - 136px)', padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__["default"], { cols: [
                        { key: 'Station', label: 'Station', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                        { key: 'Model', label: 'Model', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                        { key: 'TSC', label: 'TSC', headerStyle: { width: '5%' }, rowStyle: { width: '5%' } },
                        {
                            key: 'DateLastChanged', label: 'Date Last Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' }, content: function (item, key, style) {
                                if (item[key] == null || item[key] == '')
                                    return '';
                                var date = moment(item[key]);
                                return date.format("MM/DD/YY HH:mm CT");
                            }
                        },
                        { key: 'MaxChangeFileName', label: 'Last File Changed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' } },
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
                        { key: 'AlarmFileName', label: 'Last File Alarmed', headerStyle: { width: '15%' }, rowStyle: { width: '15%' } },
                        { key: 'Alarms', label: 'Alarms', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
                        { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                    ], tableClass: "table table-hover", data: data, sortField: sortField, ascending: ascending, onSort: function (d) {
                        if (d.col == sortField) {
                            var ordered = lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"](data, [d.col], [(!ascending ? "asc" : "desc")]);
                            setAscending(!ascending);
                            setData(ordered);
                        }
                        else {
                            var ordered = lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"](data, [d.col], ["asc"]);
                            setAscending(!ascending);
                            setData(ordered);
                            setSortField(d.col);
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
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (isNaN(props.MeterID) || props.FileName == undefined)
            return;
        var handle1 = getConfigFiles();
        handle1.done(function (data) { return setConfigFiles(data); });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [props.MeterID, props.FileName]);
    function getConfigFiles() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/DiagnosticFiles/" + props.Table + "/" + props.MeterID + "/" + props.FileName,
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
                props.FileName,
                " History:"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9EaWFnbm9zdGljL0RpYWdub3N0aWNCeU1ldGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9EaWFnbm9zdGljL0RpYWdub3N0aWNGaWxlQ2hhbmdlcy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvRGlhZ25vc3RpYy9EaWFnbm9zdGljRmlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RyxtQ0FBbUM7QUFDbkMsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RTtBQUNlO0FBQ2xCO0FBQ2tCO0FBRVU7QUFFSTtBQUNaO0FBQ1k7QUFDSjtBQXdCeEQsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEtBQTBEO0lBQ3BGLElBQUksT0FBTyxHQUFHLG1FQUFVLEVBQUUsQ0FBQztJQUVyQix5RUFBa0QsRUFBakQsYUFBSyxFQUFFLGdCQUEwQyxDQUFDO0lBQ25ELHNFQUFxRixFQUFwRixzQkFBYyxFQUFFLHlCQUFvRSxDQUFDO0lBQ3RGLHNFQUF5RCxFQUF4RCxlQUFPLEVBQUUsa0JBQStDLENBQUM7SUFDMUQsOElBQXVILEVBQXRILGNBQU0sRUFBRSxp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QUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsR0FBRyxJQUFLLG1CQUFZLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFyQixDQUFxQjt3QkFDM0ssdUVBQUssRUFBRSxDQUFDLGlCQUFpQixDQUFNO3dCQUMvQix1RUFBSyxFQUFFLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFNLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQU07d0JBQ3hHLG1FQUFJLEtBQUssRUFBRSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBRyxFQUFFLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQU07d0JBQ3JLLHVFQUFLLEVBQUUsQ0FBQyxNQUFNLENBQU0sQ0FFbkI7Z0JBTkwsQ0FNSyxDQUFDLENBQ04sQ0FFSixDQUNOLENBQ0osQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUVjLDhFQUFlLEVBQUMiLCJmaWxlIjoiRGlhZ25vc3RpY0J5TWV0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIENvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDA4LzIyLzIwMTkgLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uL2dsb2JhbCc7XG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0JztcclxuaW1wb3J0IEZvcm1DaGVja0JveCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm1DaGVja0JveCc7XHJcbmltcG9ydCBEaWFnbm9zdGljRmlsZXMgZnJvbSAnLi9EaWFnbm9zdGljRmlsZXMnO1xyXG5pbXBvcnQgRGlhZ25vc3RpY0ZpbGVDaGFuZ2VzIGZyb20gJy4vRGlhZ25vc3RpY0ZpbGVDaGFuZ2VzJztcclxuaW1wb3J0IE5vdGVXaW5kb3cgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Ob3RlV2luZG93JztcclxuXG50eXBlIEZpZWxkTmFtZSA9ICdTdGF0aW9uJyB8ICdNb2RlbCcgfCAnRGF0ZUxhc3RDaGFuZ2UnIHwgJ1RTQyc7XG5cbmludGVyZmFjZSBNZXRlciB7XG4gICAgTWV0ZXJJRDogbnVtYmVyLFxuICAgIFN0YXRpb246IHN0cmluZyxcbiAgICBNb2RlbDogc3RyaW5nLCBcbiAgICBUU0M6IHN0cmluZyxcbiAgICBEYXRlTGFzdENoYW5nZWQ6IHN0cmluZyxcbiAgICBNYXhDaGFuZ2VGaWxlTmFtZTogc3RyaW5nLFxuICAgIEFsYXJtTGFzdENoYW5nZWQ6IHN0cmluZyxcbiAgICBBbGFybUZpbGVOYW1lOiBzdHJpbmcsXG4gICAgQWxhcm1zOiBudW1iZXJcbn1cbmludGVyZmFjZSBGaWx0ZXIge1xuICAgIEZpZWxkTmFtZTogRmllbGROYW1lLFxuICAgIFNlYXJjaFRleHQ6IHN0cmluZyxcbiAgICBPcGVyYXRvcjogJz0nIHwgJzw+JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nIHwgJ0xJS0UnIHwgJ05PVCBMSUtFJyB8ICdJTicgfCAnTk9UIElOJyxcbiAgICBUeXBlOiBzdHJpbmdcbn1cblxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcblxuY29uc3QgQ29uZmlndXJhdGlvbkJ5TWV0ZXIgPSAocHJvcHM6IHtNZXRlcklEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcsIFRhYmxlOiBzdHJpbmcgfSkgPT4ge1xuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2ZpbHRlcmFibGVMaXN0LCBzZXRGaWx0ZXJhYmxlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4+KFtdKTtcbiAgICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxGaWx0ZXI+PihbXSk7XG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IFJlYWN0LnVzZVN0YXRlPEZpbHRlcj4oeyBGaWVsZE5hbWU6ICdTdGF0aW9uJywgU2VhcmNoVGV4dDogJycsIE9wZXJhdG9yOiAnTElLRScsIFR5cGU6ICdzdHJpbmcnfSk7XG5cbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNZXRlcj4+KFtdKTtcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignRGF0ZUxhc3RDaGFuZ2VkJyk7XG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0TWV0ZXJzKCk7XG4gICAgICAgIGxldCBoYW5kbGUyID0gZ2V0QWRkaXRpb25hbEZpZWxkcygpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSBudWxsKSBoYW5kbGUxLmFib3J0KCk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlMi5hYm9ydCAhPSBudWxsKSBoYW5kbGUyLmFib3J0KCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBnZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1ldGVyPj4ge1xuICAgICAgICBsZXQgaGFuZGxlID0gICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvTWV0ZXIvRGlhZ25vc3RpYy9TZWFyY2hhYmxlTGlzdGAsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZmlsdGVycyksXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8TWV0ZXI+KSA9PiB7XG4gICAgICAgICAgICAvL3ZhciBvcmRlcmVkID0gXy5vcmRlckJ5KGRhdGEsIFtzb3J0RmllbGRdLCBbKGFzY2VuZGluZyA/IFwiYXNjXCIgOiBcImRlc2NcIildKTtcclxuICAgICAgICAgICAgc2V0RGF0YShkYXRhKVxyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWRkaXRpb25hbEZpZWxkcygpOiBKUXVlcnkuanFYSFI8QXJyYXk8TWlNRC5BZGRpdGlvbmFsRmllbGQ+PiB7XG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvQWRkaXRpb25hbEZpZWxkL1BhcmVudFRhYmxlL01ldGVyYCxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4pID0+IHtcbiAgICAgICAgICAgIGxldCBvdGhlckNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJTdGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGVLZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGROYW1lOiBcIk1vZGVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGVLZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGROYW1lOiBcIkRhdGVMYXN0Q2hhbmdlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIElEOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBJc1NlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUGFyZW50VGFibGU6IFwiTWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBUeXBlOiBcImRhdGV0aW1lXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGVLZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGROYW1lOiBcIk1heENoYW5nZUZpbGVOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGVLZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGROYW1lOiBcIkFsYXJtTGFzdENoYW5nZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBJRDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNTZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhcmVudFRhYmxlOiBcIk1ldGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogXCJkYXRldGltZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJBbGFybUZpbGVOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZUtleTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBGaWVsZE5hbWU6IFwiQWxhcm1zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgICB2YXIgb3JkZXJlZCA9IF8ub3JkZXJCeShvdGhlckNvbHVtbnMuY29uY2F0KGRhdGEpLCBbJ0ZpZWxkTmFtZSddLCBbXCJhc2NcIl0pO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJhYmxlTGlzdChvcmRlcmVkKVxyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGl0ZW0sIGV2dCkge1xuICAgICAgICBoaXN0b3J5LnB1c2goeyBwYXRobmFtZTogaG9tZVBhdGggKyAnaW5kZXguY3NodG1sJywgc2VhcmNoOiAnP25hbWU9RGlhZ25vc3RpYyZNZXRlcklEPScgKyBpdGVtLnJvdy5NZXRlcklELCBzdGF0ZToge30gfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBkZWxldGVGaWx0ZXIoZjogRmlsdGVyKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGZpbHRlcnMuZmluZEluZGV4KGZzID0+IGZzID09IGYpO1xuICAgICAgICBsZXQgZmlsdHMgPSBmaWx0ZXJzO1xuICAgICAgICBmaWx0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBhd2FpdCBzZXRGaWx0ZXJzKGZpbHRzKTtcbiAgICAgICAgc2V0SG92ZXIoZmFsc2UpO1xuICAgICAgICBnZXRNZXRlcnMoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhZGRGaWx0ZXIoKSB7XG4gICAgICAgIGxldCBvbGRGaWx0ZXJzID0gZmlsdGVycztcbiAgICAgICAgb2xkRmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgICAgIGF3YWl0IHNldEZpbHRlcnMob2xkRmlsdGVycyk7XG4gICAgICAgIHNldEZpbHRlcih7IEZpZWxkTmFtZTogJ1N0YXRpb24nLCBTZWFyY2hUZXh0OiAnJywgT3BlcmF0b3I6ICdMSUtFJywgVHlwZTogJ3N0cmluZycgfSk7XG4gICAgICAgIGdldE1ldGVycygpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiIHN0eWxlPXt7aGVpZ2h0OiA1NSwgcGFkZGluZ1RvcDogMCwgcGFkZGluZ0JvdHRvbTogMCB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogNTUsIHBhZGRpbmdUb3A6IDAsIHBhZGRpbmdCb3R0b206IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e3sgd2lkdGg6ICcxNSUnLCBwYWRkaW5nUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgZGlzcGxheTogJ2lubGluZS1ibG9jayd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e2hlaWdodDogMzh9fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLXRvZ2dsZT0nbW9kYWwnIGRhdGEtdGFyZ2V0PScjbmV3RmlsdGVyJyBvbkNsaWNrPXsoZXZ0KSA9PiBldnQucHJldmVudERlZmF1bHQoKX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9PkFkZCBGaWx0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAzLCBkaXNwbGF5OiBob3ZlciA/ICdibG9jaycgOiAnbm9uZScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjFmMWYxJywgYm94U2hhZG93OiAnMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMiknLCB6SW5kZXg6IDEgfX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0aD5Db2x1bW48L3RoPjx0aD5PcGVyYXRvcjwvdGg+PHRoPlNlYXJjaCBUZXh0PC90aD48dGg+UmVtb3ZlPC90aD48L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVycy5tYXAoKGYsIGkpID0+IDx0ciBrZXk9e2l9Pjx0ZD57Zi5GaWVsZE5hbWV9PC90ZD48dGQ+e2YuT3BlcmF0b3J9PC90ZD48dGQ+e2YuU2VhcmNoVGV4dH08L3RkPjx0ZD48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBvbkNsaWNrPXsoZSkgPT4gZGVsZXRlRmlsdGVyKGYpfT48c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiPjwvaT48L3NwYW4+PC9idXR0b24+PC90ZD48L3RyPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3ttYXJnaW46IDB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnY2FsYyggMTAwJSAtIDEzNnB4KScsIHBhZGRpbmc6MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdTdGF0aW9uJywgbGFiZWw6ICdTdGF0aW9uJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01vZGVsJywgbGFiZWw6ICdNb2RlbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnNSUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1RTQycsIGxhYmVsOiAnVFNDJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICc1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICc1JScgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdEYXRlTGFzdENoYW5nZWQnLCBsYWJlbDogJ0RhdGUgTGFzdCBDaGFuZ2VkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTUlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1ba2V5XSA9PSBudWxsIHx8IGl0ZW1ba2V5XSA9PSAnJykgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQoaXRlbVtrZXldKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWF4Q2hhbmdlRmlsZU5hbWUnLCBsYWJlbDogJ0xhc3QgRmlsZSBDaGFuZ2VkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTUlJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FsYXJtTGFzdENoYW5nZWQnLCBsYWJlbDogJ0xhc3QgQWxhcm0nLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09IG51bGwgfHwgaXRlbVtrZXldID09ICcnKSByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpdGVtW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihkYXRlLCAnZGF5cycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA8IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbJ2JhY2tncm91bmRDb2xvciddID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzIDwgNylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAnb3JhbmdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRheXMgPCAzMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAneWVsbG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQWxhcm1GaWxlTmFtZScsIGxhYmVsOiAnTGFzdCBGaWxlIEFsYXJtZWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0FsYXJtcycsIGxhYmVsOiAnQWxhcm1zJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6IDE3LCBwYWRkaW5nOiAwIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAwLCBwYWRkaW5nOiAwIH0gfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmRlcmVkID0gXy5vcmRlckJ5KGRhdGEsIFtkLmNvbF0sIFsoIWFzY2VuZGluZyA/IFwiYXNjXCIgOiBcImRlc2NcIildKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKG9yZGVyZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yZGVyZWQgPSBfLm9yZGVyQnkoZGF0YSwgW2QuY29sXSwgW1wiYXNjXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKG9yZGVyZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMTkwLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBpdGVtLk1ldGVySUQgPT0gcHJvcHMuTWV0ZXJJRH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMTMwLCBwYWRkaW5nOiAwLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDEzMCAsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxEaWFnbm9zdGljRmlsZXMgTWV0ZXJJRD17cHJvcHMuTWV0ZXJJRH0gRmlsZU5hbWU9e3Byb3BzLkZpbGVOYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICA8RGlhZ25vc3RpY0ZpbGVDaGFuZ2VzIE1ldGVySUQ9e3Byb3BzLk1ldGVySUR9IEZpbGVOYW1lPXtwcm9wcy5GaWxlTmFtZX0gVGFibGU9e3Byb3BzLlRhYmxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxOb3RlV2luZG93IElEPXtwcm9wcy5NZXRlcklEfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9XCJuZXdGaWx0ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+QWRkIEZpbHRlcjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TZWxlY3Q8RmlsdGVyPiBSZWNvcmQ9e2ZpbHRlcn0gRmllbGQ9J0ZpZWxkTmFtZScgT3B0aW9ucz17ZmlsdGVyYWJsZUxpc3QubWFwKGZsID0+ICh7IFZhbHVlOiBmbC5GaWVsZE5hbWUsIExhYmVsOiBmbC5GaWVsZE5hbWUgfSkpfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wZXJhdG9yID0gXCJJTlwiIGFzIGFueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sdW1uID0gZmlsdGVyYWJsZUxpc3QuZmluZChmbCA9PiBmbC5GaWVsZE5hbWUgPT0gcmVjb3JkLkZpZWxkTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLlR5cGUgPT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gXCJMSUtFXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5UeXBlID09ICdpbnRlZ2VyJyB8fCBjb2x1bW4uVHlwZSA9PSAnbnVtYmVyJyB8fCBjb2x1bW4uVHlwZSA9PSAnYm9vbGVhbicgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvciA9IFwiPVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXIoKHByZXZGaWx0ZXIpID0+ICh7IC4uLnByZXZGaWx0ZXIsIEZpZWxkTmFtZTogcmVjb3JkLkZpZWxkTmFtZSwgU2VhcmNoVGV4dDogJycsIE9wZXJhdG9yOiBvcGVyYXRvciwgVHlwZTogY29sdW1uLlR5cGUgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBMYWJlbD0nQ29sdW1uJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJDcmVhdG9yIEZpbHRlcj17ZmlsdGVyfSBBZGRpdGlvbmFsRmllbGQ9e2ZpbHRlcmFibGVMaXN0LmZpbmQoZmwgPT4gZmwuRmllbGROYW1lID09IGZpbHRlci5GaWVsZE5hbWUpfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHNldEZpbHRlcihyZWNvcmQpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+IGFkZEZpbHRlcigpfSA+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBGaWx0ZXJDcmVhdG9yID0gKHByb3BzOiB7IEFkZGl0aW9uYWxGaWVsZDogTWlNRC5BZGRpdGlvbmFsRmllbGQsIEZpbHRlcjogRmlsdGVyLCBTZXR0ZXI6IChmaWx0ZXI6IFJlYWN0LlNldFN0YXRlQWN0aW9uPEZpbHRlcj4pID0+IHZvaWQgfSkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZUxpc3RJdGVtcywgc2V0VmFsdWVMaXN0SXRlbXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5WYWx1ZUxpc3RJdGVtPj4oW10pO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLkFkZGl0aW9uYWxGaWVsZCA9PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgICBpZiAoKFtcImludGVnZXJcIiwgXCJudW1iZXJcIiwgXCJib29sZWFuXCIsIFwic3RyaW5nXCIsIFwiZGF0ZXRpbWVcIl0pLmluZGV4T2YocHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUpIDwgMCkge1xuICAgICAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9WYWx1ZUxpc3QvR3JvdXAvJHtwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZX1gLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBoYW5kbGUuZG9uZSgodmw6IEFycmF5PE1pTUQuVmFsdWVMaXN0SXRlbT4pID0+IHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZUxpc3RJdGVtcyh2bCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSwgW3Byb3BzLkFkZGl0aW9uYWxGaWVsZF0pO1xuXG4gICAgaWYgKHByb3BzLkFkZGl0aW9uYWxGaWVsZCA9PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGVsc2UgaWYgKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbHVtbiB0eXBlIGlzIHN0cmluZy4gV2lsZGNhcmQgKCopIGNhbiBiZSB1c2VkIHdpdGggJ0xJS0UnIGFuZCAnTk9UIExJS0UnPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtwcm9wcy5GaWx0ZXIuT3BlcmF0b3J9IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZSBhcyAnTElLRScgfCAnTk9UIExJS0UnIHwgJz0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcigocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIE9wZXJhdG9yOiB2YWx1ZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdMSUtFJz5MSUtFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTk9UIExJS0UnPk5PVCBMSUtFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPSc+PTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e3Byb3BzLkZpbHRlci5TZWFyY2hUZXh0fSBvbkNoYW5nZT17KGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWUgYXMgc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcigocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIFNlYXJjaFRleHQ6IHZhbHVlIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUgPT0gXCJpbnRlZ2VyXCIgfHwgcHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUgPT0gXCJudW1iZXJcIiB8fCBwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZSA9PSBcImRhdGV0aW1lXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbHVtbiB0eXBlIGlzIHtwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZX0uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtwcm9wcy5GaWx0ZXIuT3BlcmF0b3J9IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZSBhcyAnPScgfCAnPD4nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgT3BlcmF0b3I6IHZhbHVlIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jz0nPj08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc8Pic+IT08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc+Jz57YD5gfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jz49Jz57YD49YH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc8Jz57YDxgfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jzw9Jz57YDw9YH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dH0gb25DaGFuZ2U9eyhldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBTZWFyY2hUZXh0OiB2YWx1ZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlID09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiA8Rm9ybUNoZWNrQm94IFJlY29yZD17cHJvcHMuRmlsdGVyfSBGaWVsZD0nU2VhcmNoVGV4dCcgU2V0dGVyPXsoZmlsdGVyOiBGaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIHByb3BzLlNldHRlcigocHJldkZpbHRlcikgPT4gKHsgLi4ucHJldkZpbHRlciwgT3BlcmF0b3I6ICc9JywgU2VhcmNoVGV4dDogZmlsdGVyLlNlYXJjaFRleHQudG9TdHJpbmcoKSA9PSAndHJ1ZScgPyAnMSc6ICcwJyB9KSlcclxuICAgICAgICB9fSBMYWJlbD1cIkNvbHVtbiB0eXBlIGlzIGJvb2xlYW4uIFllcy9PbiBpcyBjaGVja2VkLlwiIC8+XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29sdW1uIHR5cGUgaXMgZW51bWVyYWJsZS4gU2VsZWN0IGZyb20gYmVsb3cuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSA+PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9e3sgekluZGV4OiAxIH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcihwcmV2U2V0dGVyID0+ICh7IC4uLnByZXZTZXR0ZXIsIFNlYXJjaFRleHQ6IGAoJHt2YWx1ZUxpc3RJdGVtcy5tYXAoeCA9PiB4LlRleHQpLmpvaW4oJywnKX0pYCB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcihwcmV2U2V0dGVyID0+ICh7IC4uLnByZXZTZXR0ZXIsIFNlYXJjaFRleHQ6ICcnIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gZGVmYXVsdFZhbHVlPSdvZmYnICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiID5TZWxlY3QgQWxsPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlTGlzdEl0ZW1zLm1hcCh2bGkgPT4gPGxpIGtleT17dmxpLklEfSA+PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9e3sgekluZGV4OiAxIH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dC5yZXBsYWNlKCcoJywgJycpLnJlcGxhY2UoJyknLCAnJykuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoeCA9PiB4ICE9IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHZsaS5UZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gYCgke2xpc3Quam9pbignLCcpfSlgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcihwcmV2U2V0dGVyID0+ICh7IC4uLnByZXZTZXR0ZXIsIFNlYXJjaFRleHQ6IHRleHQgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dC5yZXBsYWNlKCcoJywgJycpLnJlcGxhY2UoJyknLCAnJykuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoeCA9PiB4ICE9IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHggPT4geCAhPSB2bGkuVGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGAoJHtsaXN0LmpvaW4oJywnKX0pYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiB0ZXh0IH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IHZhbHVlPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dC5pbmRleE9mKHZsaS5UZXh0KSA+PSAwID8gJ29uJyA6ICdvZmYnfSBjaGVja2VkPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dC5pbmRleE9mKHZsaS5UZXh0KSA+PSAwID8gdHJ1ZSA6IGZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiID57dmxpLlRleHR9PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9saT4pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uQnlNZXRlcjtcblxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERpYWdub3N0aWNGaWxlQ2hhbmdlcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDUvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgRGlhZ25vc3RpY0ZpbGVDaGFuZ2VzID0gKHByb3BzOiB7IE1ldGVySUQ6IG51bWJlciwgRmlsZU5hbWU6IHN0cmluZywgVGFibGU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbY29uZmlnRmlsZXMsIHNldENvbmZpZ0ZpbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PGFueT4+KFtdKTtcclxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2h0bWwsIHNldEh0bWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgfHwgcHJvcHMuRmlsZU5hbWUgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0Q29uZmlnRmlsZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGEpID0+IHNldENvbmZpZ0ZpbGVzKGRhdGEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySUQsIHByb3BzLkZpbGVOYW1lXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZpbGVzKCkge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0RpYWdub3N0aWNGaWxlcy8ke3Byb3BzLlRhYmxlfS8ke3Byb3BzLk1ldGVySUR9LyR7cHJvcHMuRmlsZU5hbWV9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcihkYXRlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgbW9tID0gbW9tZW50KGRhdGUpO1xyXG4gICAgICAgIGxldCBub3cgPSBtb21lbnQoKTtcclxuICAgICAgICBsZXQgZGF5cyA9IG5vdy5kaWZmKG1vbSwgJ2RheXMnKTtcclxuXHJcbiAgICAgICAgaWYgKGRheXMgPCAxKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSB8fCBwcm9wcy5GaWxlTmFtZSA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57cHJvcHMuRmlsZU5hbWV9IEhpc3Rvcnk6PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPkxhc3QgV3JpdGUgVGltZTwvdGg+PHRoPkFsYXJtczwvdGg+e3Byb3BzLlRhYmxlID09ICdBcHBTdGF0dXNGaWxlQ2hhbmdlcyc/IDx0aD5GaWxlPC90aD46IG51bGx9PHRoPkRpZmY8L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maWdGaWxlcy5tYXAoKGNmLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZ2V0Q29sb3IoY2YuTGFzdFdyaXRlVGltZSkgfX0+e21vbWVudChjZi5MYXN0V3JpdGVUaW1lKS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2YuQWxhcm1zfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLlRhYmxlID09ICdBcHBTdGF0dXNGaWxlQ2hhbmdlcycgPyA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD0nI3Nob3dDb250ZW50JyBvbkNsaWNrPXsoZSkgPT4geyBzZXRIdG1sKGA8cD4ke2NmLlRleHQucmVwbGFjZSgvXFxuL2csICc8YnI+Jyl9PC9wPmApfX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZVwiPjwvaT48L3NwYW4+PC9idXR0b24+PC90ZD46bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD0nI3Nob3dDb250ZW50JyBvbkNsaWNrPXsoZSkgPT4geyBzZXRIdG1sKGNmLkh0bWwucmVwbGFjZSgvJnBhcmE7L2csICcnKSk7fX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZXllXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9XCJzaG93Q29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIiBzdHlsZT17e21heFdpZHRoOiAnNzUlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3Byb3BzLkZpbGVOYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZXknLCBmb250U2l6ZTogMTh9fWRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWdub3N0aWNGaWxlQ2hhbmdlcztcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERpYWdub3N0aWNGaWxlcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDUvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBEaWFnbm9zdGljRmlsZXMgPSAocHJvcHM6IHsgTWV0ZXJJRDogbnVtYmVyLCBGaWxlTmFtZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtjb25maWdGaWxlcywgc2V0Q29uZmlnRmlsZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8YW55Pj4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0Q29uZmlnRmlsZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGEpID0+IHNldENvbmZpZ0ZpbGVzKGRhdGEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySURdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29uZmlnRmlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvRGlhZ25vc3RpY0ZpbGVzLyR7cHJvcHMuTWV0ZXJJRH0vTGFzdFdyaXRlc2AsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1vbSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihtb20sICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChvYmosIGV2dCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdpbmRleC5jc2h0bWwnLCBzZWFyY2g6IGA/bmFtZT1EaWFnbm9zdGljJk1ldGVySUQ9JHtwcm9wcy5NZXRlcklEfSZGaWxlTmFtZT0ke29iai5NYXhDaGFuZ2VGaWxlTmFtZX0mVGFibGU9JHtvYmouTWF4Q2hhbmdlVGFibGV9YCwgc3RhdGU6IHt9IH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5EaWFnbm9zdGljIEZpbGVzOjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPkZpbGU8L3RoPjx0aD5MYXN0IFdyaXRlIFRpbWU8L3RoPjx0aD5MYXN0IEFsYXJtIFRpbWU8L3RoPjx0aD5BbGFybXM8L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maWdGaWxlcy5tYXAoKGNmLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGJhY2tncm91bmRDb2xvcjogKHByb3BzLkZpbGVOYW1lICE9IG51bGwgJiYgY2YuRmlsZU5hbWUgPT0gcHJvcHMuRmlsZU5hbWUgPyAneWVsbG93JyA6IG51bGwpIH19IG9uQ2xpY2s9eyhldnQpID0+IGhhbmRsZVNlbGVjdChjZiwgZXZ0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntjZi5NYXhDaGFuZ2VGaWxlTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2YuTWF4Q2hhbmdlV3JpdGVUaW1lID09IG51bGwgPyAnJyA6bW9tZW50KGNmLk1heENoYW5nZVdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBnZXRDb2xvcihjZi5NYXhBbGFybVdyaXRlVGltZSkgfX0+e2NmLk1heEFsYXJtV3JpdGVUaW1lID09IG51bGwgPyAnJyA6IChtb21lbnQoY2YuTWF4QWxhcm1Xcml0ZVRpbWUpLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2YuQWxhcm1zfTwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWFnbm9zdGljRmlsZXM7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9