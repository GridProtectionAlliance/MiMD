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
                    FieldName: "FileName",
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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent", style: { width: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "navbar-nav mr-auto", style: { width: '100%' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item", style: { width: '15%', paddingRight: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { position: 'relative', display: 'inline-block' } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-primary", "data-toggle": 'modal', "data-target": '#newFilter', onClick: function (evt) { return evt.preventDefault(); }, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } }, "Add Filter"),
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
                        { key: 'FileName', label: 'Last File Changed', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
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
                    }, onClick: handleSelect, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.MeterID == props.MeterID; } })),
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
        history.push({ pathname: homePath + 'index.cshtml', search: "?name=Diagnostic&MeterID=" + props.MeterID + "&FileName=" + obj.FileName + "&Table=" + obj.Table, state: {} });
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Alarms"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, configFiles.map(function (cf, i) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: i, style: { cursor: 'pointer', backgroundColor: (cf.FileName == props.FileName ? 'yellow' : null) }, onClick: function (evt) { return handleSelect(cf, evt); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, cf.FileName),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { backgroundColor: getColor(cf.LastWriteTime) } }, moment(cf.LastWriteTime).format("MM/DD/YY HH:mm CT")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, cf.Alarms));
                }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DiagnosticFiles);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9EaWFnbm9zdGljL0RpYWdub3N0aWNCeU1ldGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9EaWFnbm9zdGljL0RpYWdub3N0aWNGaWxlQ2hhbmdlcy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvRGlhZ25vc3RpYy9EaWFnbm9zdGljRmlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RyxtQ0FBbUM7QUFDbkMsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RTtBQUNlO0FBQ2xCO0FBQ2tCO0FBRVU7QUFFSTtBQUNaO0FBQ1k7QUFDSjtBQXNCeEQsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEtBQTBEO0lBQ3BGLElBQUksT0FBTyxHQUFHLG1FQUFVLEVBQUUsQ0FBQztJQUVyQix5RUFBa0QsRUFBakQsYUFBSyxFQUFFLGdCQUEwQyxDQUFDO0lBQ25ELHNFQUFxRixFQUFwRixzQkFBYyxFQUFFLHlCQUFvRSxDQUFDO0lBQ3RGLHNFQUF5RCxFQUF4RCxlQUFPLEVBQUUsa0JBQStDLENBQUM7SUFDMUQsOElBQXVILEVBQXRILGNBQU0sRUFBRSxp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LEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBQyxJQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQU07d0JBQ3JILHVFQUFLLEVBQUUsQ0FBQyxNQUFNLENBQU0sQ0FFbkI7Z0JBTEwsQ0FLSyxDQUFDLENBQ04sQ0FFSixDQUNOLENBQ0osQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUVjLDhFQUFlLEVBQUMiLCJmaWxlIjoiRGlhZ25vc3RpY0J5TWV0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIENvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDA4LzIyLzIwMTkgLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uL2dsb2JhbCc7XG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0JztcclxuaW1wb3J0IEZvcm1DaGVja0JveCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm1DaGVja0JveCc7XHJcbmltcG9ydCBEaWFnbm9zdGljRmlsZXMgZnJvbSAnLi9EaWFnbm9zdGljRmlsZXMnO1xyXG5pbXBvcnQgRGlhZ25vc3RpY0ZpbGVDaGFuZ2VzIGZyb20gJy4vRGlhZ25vc3RpY0ZpbGVDaGFuZ2VzJztcclxuaW1wb3J0IE5vdGVXaW5kb3cgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Ob3RlV2luZG93JztcclxuXG50eXBlIEZpZWxkTmFtZSA9ICdTdGF0aW9uJyB8ICdNb2RlbCcgfCAnRGF0ZUxhc3RDaGFuZ2UnIHwgJ1RTQyc7XG5cbmludGVyZmFjZSBNZXRlciB7XG4gICAgTWV0ZXJJRDogbnVtYmVyLFxuICAgIFN0YXRpb246IHN0cmluZyxcbiAgICBNb2RlbDogc3RyaW5nLCBcbiAgICBUU0M6IHN0cmluZyxcbiAgICBEYXRlTGFzdENoYW5nZWQ6IHN0cmluZyxcbiAgICBGaWxlTmFtZTogc3RyaW5nLFxuICAgIEFsYXJtczogbnVtYmVyXG59XG5pbnRlcmZhY2UgRmlsdGVyIHtcbiAgICBGaWVsZE5hbWU6IEZpZWxkTmFtZSxcbiAgICBTZWFyY2hUZXh0OiBzdHJpbmcsXG4gICAgT3BlcmF0b3I6ICc9JyB8ICc8PicgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JyB8ICdMSUtFJyB8ICdOT1QgTElLRScgfCAnSU4nIHwgJ05PVCBJTicsXG4gICAgVHlwZTogc3RyaW5nXG59XG5cbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XG5cbmNvbnN0IENvbmZpZ3VyYXRpb25CeU1ldGVyID0gKHByb3BzOiB7TWV0ZXJJRDogbnVtYmVyLCBGaWxlTmFtZTogc3RyaW5nLCBUYWJsZTogc3RyaW5nIH0pID0+IHtcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtmaWx0ZXJhYmxlTGlzdCwgc2V0RmlsdGVyYWJsZUxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5BZGRpdGlvbmFsRmllbGQ+PihbXSk7XG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8RmlsdGVyPj4oW10pO1xuICAgIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSBSZWFjdC51c2VTdGF0ZTxGaWx0ZXI+KHsgRmllbGROYW1lOiAnU3RhdGlvbicsIFNlYXJjaFRleHQ6ICcnLCBPcGVyYXRvcjogJ0xJS0UnLCBUeXBlOiAnc3RyaW5nJ30pO1xuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWV0ZXI+PihbXSk7XG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ0RhdGVMYXN0Q2hhbmdlZCcpO1xuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldE1ldGVycygpO1xuICAgICAgICBsZXQgaGFuZGxlMiA9IGdldEFkZGl0aW9uYWxGaWVsZHMoKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gbnVsbCkgaGFuZGxlMS5hYm9ydCgpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZTIuYWJvcnQgIT0gbnVsbCkgaGFuZGxlMi5hYm9ydCgpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gZ2V0TWV0ZXJzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxNZXRlcj4+IHtcbiAgICAgICAgbGV0IGhhbmRsZSA9ICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL01ldGVyL0RpYWdub3N0aWMvU2VhcmNoYWJsZUxpc3RgLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGZpbHRlcnMpLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgYXN5bmM6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PE1ldGVyPikgPT4ge1xuICAgICAgICAgICAgLy92YXIgb3JkZXJlZCA9IF8ub3JkZXJCeShkYXRhLCBbc29ydEZpZWxkXSwgWyhhc2NlbmRpbmcgPyBcImFzY1wiIDogXCJkZXNjXCIpXSk7XHJcbiAgICAgICAgICAgIHNldERhdGEoZGF0YSlcclxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFkZGl0aW9uYWxGaWVsZHMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1pTUQuQWRkaXRpb25hbEZpZWxkPj4ge1xuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0FkZGl0aW9uYWxGaWVsZC9QYXJlbnRUYWJsZS9NZXRlcmAsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8TWlNRC5BZGRpdGlvbmFsRmllbGQ+KSA9PiB7XG4gICAgICAgICAgICBsZXQgb3RoZXJDb2x1bW5zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZUtleTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBGaWVsZE5hbWU6IFwiU3RhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIElEOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBJc1NlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUGFyZW50VGFibGU6IFwiTWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBUeXBlOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJNb2RlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIElEOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBJc1NlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUGFyZW50VGFibGU6IFwiTWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBUeXBlOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJEYXRlTGFzdENoYW5nZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBJRDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNTZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhcmVudFRhYmxlOiBcIk1ldGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogXCJkYXRldGltZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJGaWxlTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIElEOiAtMSxcclxuICAgICAgICAgICAgICAgICAgICBJc1NlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUGFyZW50VGFibGU6IFwiTWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBUeXBlOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJBbGFybXNcIixcclxuICAgICAgICAgICAgICAgICAgICBJRDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNTZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhcmVudFRhYmxlOiBcIk1ldGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIHZhciBvcmRlcmVkID0gXy5vcmRlckJ5KG90aGVyQ29sdW1ucy5jb25jYXQoZGF0YSksIFsnRmllbGROYW1lJ10sIFtcImFzY1wiXSk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmFibGVMaXN0KG9yZGVyZWQpXHJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoaXRlbSwgZXZ0KSB7XG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdpbmRleC5jc2h0bWwnLCBzZWFyY2g6ICc/bmFtZT1EaWFnbm9zdGljJk1ldGVySUQ9JyArIGl0ZW0ucm93Lk1ldGVySUQsIHN0YXRlOiB7fSB9KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUZpbHRlcihmOiBGaWx0ZXIpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZmlsdGVycy5maW5kSW5kZXgoZnMgPT4gZnMgPT0gZik7XG4gICAgICAgIGxldCBmaWx0cyA9IGZpbHRlcnM7XG4gICAgICAgIGZpbHRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGF3YWl0IHNldEZpbHRlcnMoZmlsdHMpO1xuICAgICAgICBzZXRIb3ZlcihmYWxzZSk7XG4gICAgICAgIGdldE1ldGVycygpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZEZpbHRlcigpIHtcbiAgICAgICAgbGV0IG9sZEZpbHRlcnMgPSBmaWx0ZXJzO1xuICAgICAgICBvbGRGaWx0ZXJzLnB1c2goZmlsdGVyKTtcbiAgICAgICAgYXdhaXQgc2V0RmlsdGVycyhvbGRGaWx0ZXJzKTtcbiAgICAgICAgc2V0RmlsdGVyKHsgRmllbGROYW1lOiAnU3RhdGlvbicsIFNlYXJjaFRleHQ6ICcnLCBPcGVyYXRvcjogJ0xJS0UnLCBUeXBlOiAnc3RyaW5nJyB9KTtcbiAgICAgICAgZ2V0TWV0ZXJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTUlJywgcGFkZGluZ1JpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD0nI25ld0ZpbHRlcicgb25DbGljaz17KGV2dCkgPT4gZXZ0LnByZXZlbnREZWZhdWx0KCl9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIoZmFsc2UpfT5BZGQgRmlsdGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC8gMywgZGlzcGxheTogaG92ZXIgPyAnYmxvY2snIDogJ25vbmUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgYmFja2dyb3VuZENvbG9yOiAnI2YxZjFmMScsIGJveFNoYWRvdzogJzBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpJywgekluZGV4OiAxIH19IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGg+Q29sdW1uPC90aD48dGg+T3BlcmF0b3I8L3RoPjx0aD5TZWFyY2ggVGV4dDwvdGg+PHRoPlJlbW92ZTwvdGg+PC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcnMubWFwKChmLCBpKSA9PiA8dHIga2V5PXtpfT48dGQ+e2YuRmllbGROYW1lfTwvdGQ+PHRkPntmLk9wZXJhdG9yfTwvdGQ+PHRkPntmLlNlYXJjaFRleHR9PC90ZD48dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IGRlbGV0ZUZpbHRlcihmKX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9zcGFuPjwvYnV0dG9uPjwvdGQ+PC90cj4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7bWFyZ2luOiAwfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknLCBwYWRkaW5nOjAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnU3RhdGlvbicsIGxhYmVsOiAnU3RhdGlvbicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEwJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1RTQycsIGxhYmVsOiAnVFNDJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0RhdGVMYXN0Q2hhbmdlZCcsIGxhYmVsOiAnRGF0ZSBMYXN0IENoYW5nZWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09IG51bGwgfHwgaXRlbVtrZXldID09ICcnKSByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpdGVtW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihkYXRlLCAnZGF5cycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA8IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbJ2JhY2tncm91bmRDb2xvciddID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzIDwgNylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAnb3JhbmdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRheXMgPCAzMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAneWVsbG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRmlsZU5hbWUnLCBsYWJlbDogJ0xhc3QgRmlsZSBDaGFuZ2VkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdBbGFybXMnLCBsYWJlbDogJ0FsYXJtcycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTAlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEwJScgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAxNywgcGFkZGluZzogMCB9LCByb3dTdHlsZTogeyB3aWR0aDogMCwgcGFkZGluZzogMCB9IH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JkZXJlZCA9IF8ub3JkZXJCeShkYXRhLCBbZC5jb2xdLCBbKCFhc2NlbmRpbmcgPyBcImFzY1wiIDogXCJkZXNjXCIpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShvcmRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmRlcmVkID0gXy5vcmRlckJ5KGRhdGEsIFtkLmNvbF0sIFtcImFzY1wiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShvcmRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5NZXRlcklEID09IHByb3BzLk1ldGVySUR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDEzMCwgcGFkZGluZzogMCwgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMzAgLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxuICAgICAgICAgICAgICAgICAgICA8RGlhZ25vc3RpY0ZpbGVzIE1ldGVySUQ9e3Byb3BzLk1ldGVySUR9IEZpbGVOYW1lPXtwcm9wcy5GaWxlTmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPERpYWdub3N0aWNGaWxlQ2hhbmdlcyBNZXRlcklEPXtwcm9wcy5NZXRlcklEfSBGaWxlTmFtZT17cHJvcHMuRmlsZU5hbWV9IFRhYmxlPXtwcm9wcy5UYWJsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8Tm90ZVdpbmRvdyBJRD17cHJvcHMuTWV0ZXJJRH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIGlkPVwibmV3RmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkFkZCBGaWx0ZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2VsZWN0PEZpbHRlcj4gUmVjb3JkPXtmaWx0ZXJ9IEZpZWxkPSdGaWVsZE5hbWUnIE9wdGlvbnM9e2ZpbHRlcmFibGVMaXN0Lm1hcChmbCA9PiAoeyBWYWx1ZTogZmwuRmllbGROYW1lLCBMYWJlbDogZmwuRmllbGROYW1lIH0pKX0gU2V0dGVyPXsocmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcGVyYXRvciA9IFwiSU5cIiBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbiA9IGZpbHRlcmFibGVMaXN0LmZpbmQoZmwgPT4gZmwuRmllbGROYW1lID09IHJlY29yZC5GaWVsZE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5UeXBlID09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvciA9IFwiTElLRVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uVHlwZSA9PSAnaW50ZWdlcicgfHwgY29sdW1uLlR5cGUgPT0gJ251bWJlcicgfHwgY29sdW1uLlR5cGUgPT0gJ2Jvb2xlYW4nIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBcIj1cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVyKChwcmV2RmlsdGVyKSA9PiAoeyAuLi5wcmV2RmlsdGVyLCBGaWVsZE5hbWU6IHJlY29yZC5GaWVsZE5hbWUsIFNlYXJjaFRleHQ6ICcnLCBPcGVyYXRvcjogb3BlcmF0b3IsIFR5cGU6IGNvbHVtbi5UeXBlIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gTGFiZWw9J0NvbHVtbicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyQ3JlYXRvciBGaWx0ZXI9e2ZpbHRlcn0gQWRkaXRpb25hbEZpZWxkPXtmaWx0ZXJhYmxlTGlzdC5maW5kKGZsID0+IGZsLkZpZWxkTmFtZSA9PSBmaWx0ZXIuRmllbGROYW1lKX0gU2V0dGVyPXsocmVjb3JkKSA9PiBzZXRGaWx0ZXIocmVjb3JkKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXsoKSA9PiBhZGRGaWx0ZXIoKX0gPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgRmlsdGVyQ3JlYXRvciA9IChwcm9wczogeyBBZGRpdGlvbmFsRmllbGQ6IE1pTUQuQWRkaXRpb25hbEZpZWxkLCBGaWx0ZXI6IEZpbHRlciwgU2V0dGVyOiAoZmlsdGVyOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxGaWx0ZXI+KSA9PiB2b2lkIH0pID0+IHtcbiAgICBjb25zdCBbdmFsdWVMaXN0SXRlbXMsIHNldFZhbHVlTGlzdEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1pTUQuVmFsdWVMaXN0SXRlbT4+KFtdKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQgPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgaWYgKChbXCJpbnRlZ2VyXCIsIFwibnVtYmVyXCIsIFwiYm9vbGVhblwiLCBcInN0cmluZ1wiLCBcImRhdGV0aW1lXCJdKS5pbmRleE9mKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlKSA8IDApIHtcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvVmFsdWVMaXN0L0dyb3VwLyR7cHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGV9YCxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaGFuZGxlLmRvbmUoKHZsOiBBcnJheTxNaU1ELlZhbHVlTGlzdEl0ZW0+KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVMaXN0SXRlbXModmwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sIFtwcm9wcy5BZGRpdGlvbmFsRmllbGRdKTtcblxuICAgIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQgPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBlbHNlIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2x1bW4gdHlwZSBpcyBzdHJpbmcuIFdpbGRjYXJkICgqKSBjYW4gYmUgdXNlZCB3aXRoICdMSUtFJyBhbmQgJ05PVCBMSUtFJzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17cHJvcHMuRmlsdGVyLk9wZXJhdG9yfSBvbkNoYW5nZT17KGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWUgYXMgJ0xJS0UnIHwgJ05PVCBMSUtFJyB8ICc9JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBPcGVyYXRvcjogdmFsdWUgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTElLRSc+TElLRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J05PVCBMSUtFJz5OT1QgTElLRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jz0nPj08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dH0gb25DaGFuZ2U9eyhldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBTZWFyY2hUZXh0OiB2YWx1ZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlID09IFwiaW50ZWdlclwiIHx8IHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlID09IFwibnVtYmVyXCIgfHwgcHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUgPT0gXCJkYXRldGltZVwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2x1bW4gdHlwZSBpcyB7cHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGV9LjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17cHJvcHMuRmlsdGVyLk9wZXJhdG9yfSBvbkNoYW5nZT17KGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWUgYXMgJz0nIHwgJzw+JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcigocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIE9wZXJhdG9yOiB2YWx1ZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc9Jz49PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPD4nPiE9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPic+e2A+YH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc+PSc+e2A+PWB9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPCc+e2A8YH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc8PSc+e2A8PWB9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17cHJvcHMuRmlsdGVyLlNlYXJjaFRleHR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZSBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgU2VhcmNoVGV4dDogdmFsdWUgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZSA9PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gPEZvcm1DaGVja0JveCBSZWNvcmQ9e3Byb3BzLkZpbHRlcn0gRmllbGQ9J1NlYXJjaFRleHQnIFNldHRlcj17KGZpbHRlcjogRmlsdGVyKSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIoKHByZXZGaWx0ZXIpID0+ICh7IC4uLnByZXZGaWx0ZXIsIE9wZXJhdG9yOiAnPScsIFNlYXJjaFRleHQ6IGZpbHRlci5TZWFyY2hUZXh0LnRvU3RyaW5nKCkgPT0gJ3RydWUnID8gJzEnOiAnMCcgfSkpXHJcbiAgICAgICAgfX0gTGFiZWw9XCJDb2x1bW4gdHlwZSBpcyBib29sZWFuLiBZZXMvT24gaXMgY2hlY2tlZC5cIiAvPlxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbHVtbiB0eXBlIGlzIGVudW1lcmFibGUuIFNlbGVjdCBmcm9tIGJlbG93LjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8bGkgPjxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPXt7IHpJbmRleDogMSB9fSBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiBgKCR7dmFsdWVMaXN0SXRlbXMubWFwKHggPT4geC5UZXh0KS5qb2luKCcsJyl9KWAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiAnJyB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGRlZmF1bHRWYWx1ZT0nb2ZmJyAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiA+U2VsZWN0IEFsbDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZUxpc3RJdGVtcy5tYXAodmxpID0+IDxsaSBrZXk9e3ZsaS5JRH0gPjxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPXt7IHpJbmRleDogMSB9fSBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gcHJvcHMuRmlsdGVyLlNlYXJjaFRleHQucmVwbGFjZSgnKCcsICcnKS5yZXBsYWNlKCcpJywgJycpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHggPT4geCAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCh2bGkuVGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGAoJHtsaXN0LmpvaW4oJywnKX0pYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiB0ZXh0IH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gcHJvcHMuRmlsdGVyLlNlYXJjaFRleHQucmVwbGFjZSgnKCcsICcnKS5yZXBsYWNlKCcpJywgJycpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHggPT4geCAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcih4ID0+IHggIT0gdmxpLlRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBgKCR7bGlzdC5qb2luKCcsJyl9KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHByZXZTZXR0ZXIgPT4gKHsgLi4ucHJldlNldHRlciwgU2VhcmNoVGV4dDogdGV4dCB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSB2YWx1ZT17cHJvcHMuRmlsdGVyLlNlYXJjaFRleHQuaW5kZXhPZih2bGkuVGV4dCkgPj0gMCA/ICdvbicgOiAnb2ZmJ30gY2hlY2tlZD17cHJvcHMuRmlsdGVyLlNlYXJjaFRleHQuaW5kZXhPZih2bGkuVGV4dCkgPj0gMCA/IHRydWUgOiBmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiA+e3ZsaS5UZXh0fTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbkJ5TWV0ZXI7XG5cbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEaWFnbm9zdGljRmlsZUNoYW5nZXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA1LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IERpYWdub3N0aWNGaWxlQ2hhbmdlcyA9IChwcm9wczogeyBNZXRlcklEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcsIFRhYmxlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2NvbmZpZ0ZpbGVzLCBzZXRDb25maWdGaWxlc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtodG1sLCBzZXRIdG1sXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpIHx8IHByb3BzLkZpbGVOYW1lID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldENvbmZpZ0ZpbGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhKSA9PiBzZXRDb25maWdGaWxlcyhkYXRhKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklELCBwcm9wcy5GaWxlTmFtZV0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb25maWdGaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9EaWFnbm9zdGljRmlsZXMvJHtwcm9wcy5UYWJsZX0vJHtwcm9wcy5NZXRlcklEfS8ke3Byb3BzLkZpbGVOYW1lfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1vbSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihtb20sICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICAgcmV0dXJuICdyZWQnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheXMgPCA3KVxyXG4gICAgICAgICAgICByZXR1cm4gJ29yYW5nZSc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3llbGxvdyc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgfHwgcHJvcHMuRmlsZU5hbWUgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Byb3BzLkZpbGVOYW1lfSBIaXN0b3J5OjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0aD5MYXN0IFdyaXRlIFRpbWU8L3RoPjx0aD5BbGFybXM8L3RoPntwcm9wcy5UYWJsZSA9PSAnQXBwU3RhdHVzRmlsZUNoYW5nZXMnPyA8dGg+RmlsZTwvdGg+OiBudWxsfTx0aD5EaWZmPC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnRmlsZXMubWFwKChjZiwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGdldENvbG9yKGNmLkxhc3RXcml0ZVRpbWUpIH19Pnttb21lbnQoY2YuTGFzdFdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NmLkFsYXJtc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5UYWJsZSA9PSAnQXBwU3RhdHVzRmlsZUNoYW5nZXMnID8gPHRkPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9JyNzaG93Q29udGVudCcgb25DbGljaz17KGUpID0+IHsgc2V0SHRtbChgPHA+JHtjZi5UZXh0LnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpfTwvcD5gKSB9fT48c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj48L3RkPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9JyNzaG93Q29udGVudCcgb25DbGljaz17KGUpID0+IHsgc2V0SHRtbChjZi5IdG1sLnJlcGxhY2UoLyZwYXJhOy9nLCAnJykpO319PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWV5ZVwiPjwvaT48L3NwYW4+PC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIGlkPVwic2hvd0NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgc3R5bGU9e3ttYXhXaWR0aDogJzc1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPntwcm9wcy5GaWxlTmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5JywgZm9udFNpemU6IDE4fX1kYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWFnbm9zdGljRmlsZUNoYW5nZXM7XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEaWFnbm9zdGljRmlsZXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA1LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgRGlhZ25vc3RpY0ZpbGVzID0gKHByb3BzOiB7IE1ldGVySUQ6IG51bWJlciwgRmlsZU5hbWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbY29uZmlnRmlsZXMsIHNldENvbmZpZ0ZpbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PGFueT4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldENvbmZpZ0ZpbGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhKSA9PiBzZXRDb25maWdGaWxlcyhkYXRhKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklEXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZpbGVzKCkge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0RpYWdub3N0aWNGaWxlcy8ke3Byb3BzLk1ldGVySUR9L0xhc3RXcml0ZXNgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yKGRhdGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBtb20gPSBtb21lbnQoZGF0ZSk7XHJcbiAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICAgIGxldCBkYXlzID0gbm93LmRpZmYobW9tLCAnZGF5cycpO1xyXG5cclxuICAgICAgICBpZiAoZGF5cyA8IDEpXHJcbiAgICAgICAgICAgcmV0dXJuICdyZWQnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheXMgPCA3KVxyXG4gICAgICAgICAgICByZXR1cm4gJ29yYW5nZSc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3llbGxvdyc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Qob2JqLCBldnQpIHtcclxuICAgICAgICBoaXN0b3J5LnB1c2goeyBwYXRobmFtZTogaG9tZVBhdGggKyAnaW5kZXguY3NodG1sJywgc2VhcmNoOiBgP25hbWU9RGlhZ25vc3RpYyZNZXRlcklEPSR7cHJvcHMuTWV0ZXJJRH0mRmlsZU5hbWU9JHtvYmouRmlsZU5hbWV9JlRhYmxlPSR7b2JqLlRhYmxlfWAsIHN0YXRlOiB7fSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+RGlhZ25vc3RpYyBGaWxlczo8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0aD5GaWxlPC90aD48dGg+TGFzdCBXcml0ZSBUaW1lPC90aD48dGg+QWxhcm1zPC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnRmlsZXMubWFwKChjZiwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kQ29sb3I6IChjZi5GaWxlTmFtZSA9PSBwcm9wcy5GaWxlTmFtZSA/ICd5ZWxsb3cnIDogbnVsbCkgfX0gb25DbGljaz17KGV2dCkgPT4gaGFuZGxlU2VsZWN0KGNmLCBldnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NmLkZpbGVOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBnZXRDb2xvcihjZi5MYXN0V3JpdGVUaW1lKX19Pnttb21lbnQoY2YuTGFzdFdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NmLkFsYXJtc308L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhZ25vc3RpY0ZpbGVzO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==