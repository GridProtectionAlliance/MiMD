(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ConfigurationByMeter"],{

/***/ "./TSX/MiMD/CommonComponents/FormInput.tsx":
/*!*************************************************!*\
  !*** ./TSX/MiMD/CommonComponents/FormInput.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  FormInput.tsx - Gbtc
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
//  01/22/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FormInput = /** @class */ (function (_super) {
    __extends(FormInput, _super);
    function FormInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormInput.prototype.render = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, this.props.Label == null ? this.props.Field : this.props.Label),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: (this.props.Valid(this.props.Field) ? "form-control" : "form-control is-invalid"), onChange: function (evt) {
                    var record = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](_this.props.Record);
                    if (evt.target.value != "")
                        record[_this.props.Field] = evt.target.value;
                    else
                        record[_this.props.Field] = null;
                    _this.props.Setter(record);
                }, value: this.props.Record[this.props.Field] == null ? '' : this.props.Record[this.props.Field].toString(), disabled: this.props.Disabled == null ? false : this.props.Disabled }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'invalid-feedback' }, this.props.Feedback == null ? this.props.Field + ' is a required field.' : this.props.Feedback));
    };
    return FormInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (FormInput);


/***/ }),

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
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CommonComponents_FormSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommonComponents/FormSelect */ "./TSX/MiMD/CommonComponents/FormSelect.tsx");
/* harmony import */ var _CommonComponents_FormCheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CommonComponents/FormCheckBox */ "./TSX/MiMD/CommonComponents/FormCheckBox.tsx");
/* harmony import */ var _ConfigurationFiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConfigurationFiles */ "./TSX/MiMD/Configuration/ConfigurationFiles.tsx");
/* harmony import */ var _ConfigurationFileChanges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConfigurationFileChanges */ "./TSX/MiMD/Configuration/ConfigurationFileChanges.tsx");
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
            url: homePath + "api/MiMD/Meter/Config/SearchableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: filters, OrderBy: sf, Ascending: asc }),
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
                }
            ];
            var ordered = lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"](otherColumns.concat(data), ['FieldName'], ["asc"]);
            setFilterableList(ordered);
        });
        return handle;
    }
    function handleSelect(item, evt) {
        history.push({ pathname: homePath + 'index.cshtml', search: '?name=Configuration&MeterID=' + item.row.MeterID, state: {} });
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
                    }, onClick: handleSelect, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.MeterID == props.MeterID; } })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { height: window.innerHeight - 130, padding: 0, maxHeight: window.innerHeight - 130, overflowY: 'scroll' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConfigurationFiles__WEBPACK_IMPORTED_MODULE_6__["default"], { MeterID: props.MeterID, FileName: props.FileName }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConfigurationFileChanges__WEBPACK_IMPORTED_MODULE_7__["default"], { MeterID: props.MeterID, FileName: props.FileName }),
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

/***/ "./TSX/MiMD/Configuration/ConfigurationFileChanges.tsx":
/*!*************************************************************!*\
  !*** ./TSX/MiMD/Configuration/ConfigurationFileChanges.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
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
            url: homePath + "api/MiMD/ConfigurationFiles/" + props.MeterID + "/" + props.FileName + "/" + flag,
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                        props.FileName,
                        " History:"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-check" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) { return setFlag(!flag); }, value: flag ? 'on' : 'off', checked: flag ? true : false }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "form-check-label" }, "Show Files w/o Changes"))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Last Write Time"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "# of Changes"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "File"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Diff"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, configFiles.map(function (cf, i) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: i },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { backgroundColor: getColor(cf.LastWriteTime) } }, moment(cf.LastWriteTime).format("MM/DD/YY HH:mm CT")),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, cf.Changes),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-sm", "data-toggle": 'modal', "data-target": '#showContent', onClick: function (e) { setHtml("<p>" + cf.Text.replace(/\n/g, '<br>') + "</p>"); } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-file" })))),
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
            url: homePath + "api/MiMD/ConfigurationFiles/" + props.MeterID + "/LastWrites",
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, "Configuration Files:"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "table table-hover" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "File"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Last Write Time"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "# of Changes"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, configFiles.map(function (cf, i) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: i, style: { cursor: 'pointer', backgroundColor: (cf.FileName == props.FileName ? 'yellow' : null) }, onClick: function (evt) { return handleSelect(cf.FileName, evt); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, cf.FileName),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { backgroundColor: getColor(cf.LastWriteTime) } }, moment(cf.LastWriteTime).format("MM/DD/YY HH:mm CT")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, cf.Changes));
                }))))));
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
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "badge", style: { background: (stat == undefined ? '#6c757d' : stat.Color), textColor: (stat == undefined ? '#ffffff' : stat.TextColor) } }, (stat == undefined ? 'Unknown' : stat.Description)));
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
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ActionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionHeader */ "./TSX/MiMD/PRC-002/ChangeOverview/ActionHeader.tsx");
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
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleActionList = getActions();
        return function () {
            if (handleActionList != null && handleActionList.abort != null)
                handleActionList.abort();
        };
    }, [props.RecordId]);
    function getActions() {
        if (props.RecordId == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/Action?parentID=" + props.RecordId,
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, (props.RecordId > -1 ?
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__["default"], { cols: [
                {
                    key: 'ID', label: 'Configuration Change History', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ActionCard, { data: item, stateList: props.StateList, openConfig: props.setSelectedAction }); }
                },
            ], tableClass: "table table-hover", data: actionList, sortField: "ID", ascending: true, onSort: function (d) { }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })
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
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](-1), 2), selectedAction = _b[0], setSelectedAction = _b[1];
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RecordDetail__WEBPACK_IMPORTED_MODULE_2__["default"], { stateList: statusList, RecordID: props.RecordId, selectedAction: selectedAction, setSelectedAction: setSelectedAction })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '100%', height: 'calc( 100% - 136px)', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActionList__WEBPACK_IMPORTED_MODULE_3__["default"], { StateList: statusList, RecordId: props.RecordId, selectedAction: selectedAction, setSelectedAction: setSelectedAction }))))));
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
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
/* harmony import */ var _CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CommonComponents/FormInput */ "./TSX/MiMD/CommonComponents/FormInput.tsx");
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



;
var FieldValues = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](-1), 2), selectedField = _a[0], setSelectedField = _a[1];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", id: props.Id },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog modal-lg" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", { className: "modal-title" }, props.Label),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "close", "data-dismiss": "modal", onClick: function () { return $('#' + props.Id).hide(); } }, "\u00D7")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "tab-content", style: { maxHeight: window.innerHeight - 235, overflow: 'hidden' } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { marginBottom: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, overflowY: 'auto' } },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__["default"], { cols: [
                                            { key: 'FieldName', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], { Record: item, Field: 'FieldName', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                                            { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], { Record: item, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                                            {
                                                key: 'Valid', label: 'Valid', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                                                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                                                            TextAlign: 'center',
                                                            padding: '.375rem .75rem',
                                                            fontSize: '1.5rem',
                                                            lineHeight: 1.5
                                                        } },
                                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa " + (item.Valid ? "fa-check-circle" : "fa-exclamation-triangle"), "aria-hidden": "true" })));
                                                }
                                            },
                                        ], tableClass: "table table-hover", data: props.FieldList, sortField: 'FieldName', ascending: true, onSort: function (d) { }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger", "data-dismiss": "modal", onClick: function () { return $('#' + props.Id).hide(); } }, "Close")))))));
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
/* harmony import */ var _Common_BaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/BaseConfig */ "./TSX/MiMD/PRC-002/Common/BaseConfig.tsx");
/* harmony import */ var _Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ManualAction */ "./TSX/MiMD/PRC-002/Common/ManualAction.tsx");
/* harmony import */ var _FieldValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FieldValues */ "./TSX/MiMD/PRC-002/ChangeOverview/FieldValues.tsx");
/* harmony import */ var _Common_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/Modal */ "./TSX/MiMD/PRC-002/Common/Modal.tsx");
/* harmony import */ var _ResolveRecord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ResolveRecord */ "./TSX/MiMD/PRC-002/ChangeOverview/ResolveRecord.tsx");
/* harmony import */ var _ActionHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ActionHeader */ "./TSX/MiMD/PRC-002/ChangeOverview/ActionHeader.tsx");
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








var addRAPWarning = 'This Action can not be undone. This will add a permanent Compliance Record to this Issue.';
var resolveWarning = 'This Action can not be undone. This will permanently updated the Base Configuration for this Meter and Resolve the Issue.';
var RecordDetail = function (props) {
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), record = _a[0], setRecord = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), meter = _b[0], setMeter = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), action = _c[0], setAction = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), baseConfig = _d[0], setBaseConfig = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), valueList = _e[0], setValueList = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), allvalueList = _f[0], setAllValueList = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleRecord = getRecord(props.RecordID);
        return function () {
            if (handleRecord != null && handleRecord.abort != null)
                handleRecord.abort();
        };
    }, [props.RecordID]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleFieldVaues = getFieldValues(props.selectedAction);
        return function () {
            if (handleFieldVaues != null && handleFieldVaues.abort != null)
                handleFieldVaues.abort();
        };
    }, [props.selectedAction]);
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
    function getFieldValues(id) {
        var handle;
        if (id == -1)
            handle = $.ajax({
                type: "GET",
                url: homePath + "api/MiMD/PRC002/FieldValue?parentID=" + props.RecordID,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });
        else
            handle = $.ajax({
                type: "GET",
                url: homePath + "api/MiMD/PRC002/FieldValue/History?parentID=" + id,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            });
        handle.done(function (data) {
            if (data == null)
                return;
            if (id == -1)
                setAllValueList(data);
            else
                setValueList(data);
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatusRow, { label: 'Meter ' + meter.AssetKey, status: meterStat, T: meter.Timer })),
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
                    action != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActionHeader__WEBPACK_IMPORTED_MODULE_7__["default"], { data: action, stateList: props.stateList, showTime: false }) : null,
                    " ")),
            (baseConfig == undefined ? null :
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '25%', padding: 5 } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return $('#baseconfig').show(); } }, " Base Configuration "),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { props.setSelectedAction(-1); $('#currentConfig').show(); } }, " Current Configuration"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '25%', padding: 5 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return $('#Note').show(); } }, " Add Compliance Note "),
                recordStat.Description == 'Acknowledged' || recordStat.Description == 'Reviewed' ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return $('#RAP').show(); } }, " Submitt Remedial Action Plan ")
                    : null,
                recordStat.Description == 'Out Of Compliance' ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return $('#Acknowledge').show(); } }, " Acknowledge Issue ")
                    : null,
                recordStat.Description == 'Acknowledged' ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return $('#Review').show(); } }, " Review Issue ")
                    : null,
                recordStat.Description == 'Reviewed' ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return $('#Resolve').show(); } }, " Resolve Issue - Updated Base Config")
                    : null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__["default"], { RecordId: props.RecordID, state: null, Action: function () { history.go(0); } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FieldValues__WEBPACK_IMPORTED_MODULE_4__["default"], { Label: (props.selectedAction == -1 ? 'Current Configuration' : 'Related Configuration'), Id: 'currentConfig', FieldList: (props.selectedAction == -1 ? allvalueList : valueList) }),
            recordStat.Description == 'Acknowledged' || recordStat.Description == 'Reviewed' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__["default"], { RecordId: props.RecordID, state: props.stateList.find(function (item) { return item.Description === 'RAP Submitted'; }), Action: function () { history.go(0); } })
                : null,
            recordStat.Description == 'Out Of Compliance' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__["default"], { RecordId: props.RecordID, state: props.stateList.find(function (item) { return item.Description === 'Acknowledged'; }), Action: function () { history.go(0); } })
                : null,
            recordStat.Description == 'Acknowledged' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__["default"], { RecordId: props.RecordID, state: props.stateList.find(function (item) { return item.Description === 'Reviewed'; }), Action: function () { history.go(0); } })
                : null,
            recordStat.Description == 'Reviewed' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ResolveRecord__WEBPACK_IMPORTED_MODULE_6__["default"], { FieldList: allvalueList.filter(function (item) { return !item.Valid; }), RecordID: props.RecordID, stateList: props.stateList, Complete: function () { history.go(0); } })
                : null,
            (baseConfig == undefined ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], { Title: 'Issue Base Configuration', PosLabel: 'Close', Id: 'baseconfig', content: function () { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_BaseConfig__WEBPACK_IMPORTED_MODULE_2__["default"], { BaseConfigList: [baseConfig] }); } }))))));
};
var StatusRow = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            props.label,
            " has been in"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: 'flex' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                    fontWeight: '600',
                    width: '45%',
                    height: '35px',
                    background: (status == undefined ? '#f8f9fa' : props.status.Color),
                    border: '2px solid',
                    borderRadius: '5px',
                    textAlign: 'center',
                    lineHeight: '35px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    textColor: (status == undefined ? '#212529' : props.status.TextColor),
                    marginRight: 'calc(5%)'
                } },
                " ",
                props.status.Description,
                " "),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                    fontWeight: '600',
                    width: '45%',
                    height: '35px',
                    background: (props.T < 30 ? '#28a745' : '#ffc107'),
                    textColor: (props.T < 30 ? '#fff' : '#212529'),
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
/* harmony import */ var _Common_ConfigRuleEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ConfigRuleEdit */ "./TSX/MiMD/PRC-002/Common/ConfigRuleEdit.tsx");
/* harmony import */ var _Common_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/Modal */ "./TSX/MiMD/PRC-002/Common/Modal.tsx");
/* harmony import */ var _Common_Warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/Warning */ "./TSX/MiMD/PRC-002/Common/Warning.tsx");
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
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](''), 2), error = _e[0], setError = _e[1];
    function Cancel() {
        setStep('Note');
        setFieldIndex(-1);
        setNote('');
        setUpdatedFld([]);
        $('#Resolve').hide();
    }
    function NextStep() {
        if (step == 'Note') {
            setStep('Change');
            if (props.FieldList.length == 0)
                Save();
            else
                LoadField();
        }
        else {
            ValidateField();
        }
        return false;
    }
    function LoadField() {
        if (fieldIndex == updatedFld.length - 1)
            $.ajax({
                type: "GET",
                url: homePath + "api/MiMD/PRC002/Field/One/" + props.FieldList[fieldIndex + 1].FieldId,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                cache: false,
                async: true
            }).then(function (data) {
                if (data == null)
                    return;
                setUpdatedFld(function (array) { return __spread(array, [data]); });
                setFieldIndex(function (index) { return index + 1; });
            });
        else
            setFieldIndex(function (index) { return index + 1; });
    }
    function PrevStep() {
        if (step == 'Note')
            $('#ResolveWarning').show();
        else if (fieldIndex == 0)
            setStep('Note');
        else
            setFieldIndex(function (index) { return index - 1; });
        return false;
    }
    function getTitle() {
        if (step == 'Note')
            return 'Resolve Issue';
        else
            return 'Change Base Configuration';
    }
    function ValidateField() {
        // Validation for Type Later
        // Validation to make sure Config is Ok Now.
        $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/Field/Check/" + props.FieldList[fieldIndex].Value,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(updatedFld[fieldIndex]),
            dataType: 'json',
            cache: false,
            async: true
        }).then(function (data) {
            if (data == null || !data)
                $('#RuleValueError').show();
            else {
                if (fieldIndex == (props.FieldList.length - 1))
                    Save();
                else
                    LoadField();
            }
        });
    }
    function Save() {
        $('#ResolveCofirm').show();
        //Save The Fields and Add A State
    }
    function Confirmed(result) {
        if (!result)
            return;
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
        }).then(function (data) { return props.Complete(); });
        Cancel();
    }
    function SetField(index, record) {
        if (index == -1)
            return;
        setUpdatedFld(function (fld) { var update = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](fld); update[fieldIndex] = record; return update; });
    }
    function getContent() {
        if (step == 'Note')
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Note:"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { className: "form-control", rows: 4, value: note, onChange: function (e) { return setNote(e.target.value); } })));
        else
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ConfigRuleEdit__WEBPACK_IMPORTED_MODULE_3__["default"], { editType: false, Setter: function (record) { return SetField(fieldIndex, record); }, FieldValue: (fieldIndex > -1 ? props.FieldList[fieldIndex] : undefined), Field: (fieldIndex > -1 ? updatedFld[fieldIndex] : undefined) });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], { Id: 'Resolve', Title: getTitle(), NegLabel: (step == 'Note' ? 'Cancel' : 'Back'), PosLabel: (fieldIndex == props.FieldList.length - 1 ? 'Save' : 'Next'), content: function () { return getContent(); }, Close: PrevStep, Confirm: NextStep, Cancel: function () { $('#ResolveWarning').show(); return false; } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Warning__WEBPACK_IMPORTED_MODULE_5__["default"], { Title: 'Cancel', Content: 'Warning all Changes will be lost and the new base configuration will not be applied', Confirm: 'Back', Deny: 'Cancel', Id: 'ResolveWarning', Action: function (result) { if (!result)
                Cancel(); } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Warning__WEBPACK_IMPORTED_MODULE_5__["default"], { Title: 'Invalid Base Config', Content: 'The new Base Configuration has to allow the current Configuration', Confirm: 'OK', Id: 'RuleValueError', Action: function (result) { } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Warning__WEBPACK_IMPORTED_MODULE_5__["default"], { Title: 'Warning', Content: 'This will change the Base Configuration for this meter and can not be undone. A permanent compliance record will be created', Confirm: 'Proceed', Deny: 'Cancel', Id: 'ResolveCofirm', Action: function (result) { Confirmed(result); } })));
};
/* harmony default export */ __webpack_exports__["default"] = (ResolveRecord);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/Common/BaseConfig.tsx":
/*!************************************************!*\
  !*** ./TSX/MiMD/PRC-002/Common/BaseConfig.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
/* harmony import */ var _CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CommonComponents/FormInput */ "./TSX/MiMD/CommonComponents/FormInput.tsx");
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



;
var BaseConfig = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]((props.BaseConfigList.length > 0 ? props.BaseConfigList[0].ID : -1)), 2), baseConfigTab = _a[0], setBaseConfigTab = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), fieldList = _b[0], setFieldList = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.BaseConfigList.length > 0)
            setBaseConfigTab(props.BaseConfigList[0].ID);
    }, [props.BaseConfigList]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.getFieldList == undefined) {
            var handleFieldList_1 = getFieldList();
            return function () {
                if (handleFieldList_1 != null && handleFieldList_1.abort != null)
                    handleFieldList_1.abort();
            };
        }
        else {
            setFieldList(props.getFieldList(baseConfigTab));
            return function () { };
        }
    }, [baseConfigTab]);
    function getFieldList() {
        if (baseConfigTab == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/Field?parentID=" + baseConfigTab,
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
        props.BaseConfigList.length > 1 ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "nav nav-tabs" }, props.BaseConfigList.map(function (item, index) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item", key: index },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link" + (baseConfigTab == item.ID ? " active" : ""), onClick: function () { return setBaseConfigTab(item.ID); }, "data-toggle": "tab", href: "#BasConfig-" + item.Name }, item.Name));
            })) : null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "tab-content", style: { maxHeight: window.innerHeight - 235, overflow: 'hidden' } }, props.BaseConfigList.map(function (item, index) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Configurationwindow, { key: index, active: item.ID == baseConfigTab, configuration: item, Fields: fieldList, hasHeader: props.BaseConfigList.length > 1, onEdit: props.onEdit }); })),
        props.onNew != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-sm", onClick: function () { return props.onNew(baseConfigTab); } }, "Add new Field ") : null));
};
var Configurationwindow = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: props.configuration.ID, className: (props.hasHeader ? "tab-pane " + (props.active ? " active" : "fade") : ""), id: "#BasConfig-" + props.configuration.Name },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: 2, className: props.hasHeader ? "card" : "", style: { marginBottom: 10 } },
            props.hasHeader ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: 0, className: "card-header" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null,
                        " Configuration ",
                        props.configuration.Name)) : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: 1, className: props.hasHeader ? "card-body" : "" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: 3, style: { height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, overflowY: 'auto' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], { Record: props.configuration, Field: 'Pattern', Setter: function () { }, Valid: function () { return true; }, Label: 'File Pattern', Disabled: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__["default"], { cols: [
                            { key: 'Name', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], { Record: item, Field: 'Name', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'FieldType', label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], { Record: item, Field: 'FieldType', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'Comparison', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], { Record: item, Field: 'Comparison', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], { Record: item, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'ID', label: '', headerStyle: { width: (props.onEdit == undefined ? '0px' : 'auto') }, rowStyle: { width: (props.onEdit == undefined ? '0px' : 'auto') }, content: function (item, key, style) { return (props.onEdit == undefined ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { marginTop: '16px', textAlign: 'center' }, onClick: function () { return props.onEdit(item); } },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { style: { color: '#007BFF' }, className: "fa fa-pencil-square fa-3x", "aria-hidden": "true" }))); } },
                        ], tableClass: "table table-hover", data: props.Fields, sortField: 'Name', ascending: true, onSort: function (d) { }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (BaseConfig);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/Common/ConfigRuleEdit.tsx":
/*!****************************************************!*\
  !*** ./TSX/MiMD/PRC-002/Common/ConfigRuleEdit.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommonComponents_FormSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CommonComponents/FormSelect */ "./TSX/MiMD/CommonComponents/FormSelect.tsx");
/* harmony import */ var _CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../CommonComponents/FormInput */ "./TSX/MiMD/CommonComponents/FormInput.tsx");
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




;
var ConfigRuleEdit = function (props) {
    var FieldTypeOptions = [{ Value: 'string', Label: 'Text' }, { Value: 'number', Label: 'Number' }];
    var NumberChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: '>', Label: '>' }, { Value: '<', Label: '<' }];
    var TextChecks = [{ Value: '=', Label: '=' }, { Value: '<>', Label: '<>' }, { Value: 'IN', Label: 'In' }];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, (props.Field == undefined ? null :
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            props.FieldValue != undefined ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: props.FieldValue, Field: 'Value', Setter: function () { }, Valid: function () { return true; }, Label: 'Current Value', Disabled: !props.editType }) : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormSelect__WEBPACK_IMPORTED_MODULE_2__["default"], { Record: props.Field, Field: 'FieldType', Options: FieldTypeOptions, Label: 'Field Type', Disabled: !props.editType, Setter: function (record) {
                    if (record.FieldType !== props.Field.FieldType && record.Comparison != '<>' && record.Comparison != '=')
                        record.Comparison = '=';
                    props.Setter(record);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: props.Field, Field: 'Name', Setter: function () { }, Valid: function () { return true; }, Label: 'Current Rule', Disabled: true }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormSelect__WEBPACK_IMPORTED_MODULE_2__["default"], { Record: props.Field, Field: 'Comparison', Options: (props.Field.FieldType == 'number' ? NumberChecks : TextChecks), Label: '', Disabled: false, Setter: function (record) { props.Setter(record); } }),
            (props.Field.Comparison == 'IN' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MultiInputField, { data: props.Field, Setter: function (record) { props.Setter(record); } }) :
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: props.Field, Field: 'Value', Setter: function (record) { props.Setter(record); }, Valid: function () { return true; }, Label: '', Disabled: false }))))));
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
/* harmony default export */ __webpack_exports__["default"] = (ConfigRuleEdit);


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
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./TSX/MiMD/PRC-002/Common/Modal.tsx");
/* harmony import */ var _Warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Warning */ "./TSX/MiMD/PRC-002/Common/Warning.tsx");
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

;


var ManualAction = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](""), 2), note = _a[0], setNote = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), 2), Toffset = _b[0], setToffset = _b[1];
    function getId() {
        if (props.state == undefined)
            return 'Note';
        if (props.state.Description == 'Acknowledged')
            return 'Acknowledge';
        if (props.state.Description == 'Reviewed')
            return 'Review';
        if (props.state.Description == 'RAP Submitted')
            return 'RAP';
        if (props.state.Description == 'Out Of Compliance')
            return 'CreateRecord';
    }
    function getTitle() {
        if (props.state == undefined)
            return 'Add Compliance Note';
        if (props.state.Description == 'Acknowledged')
            return 'Acknowledge Alert';
        if (props.state.Description == 'Reviewed')
            return 'Review Alert';
        if (props.state.Description == 'RAP Submitted')
            return 'Create Remedial Action Plan';
        if (props.state.Description == 'Out Of Compliance')
            return 'Submitt Compliance Issue';
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
        if (props.state.Description == 'Out Of Compliance')
            return 'Submitt';
    }
    function confirm() {
        if (props.state == undefined) {
            submitt();
            return true;
        }
        $('#' + getId() + '-warning').show();
        return false;
    }
    function submitt() {
        if (props.RecordId != undefined)
            submittRecord();
        if (props.MeterId != undefined)
            submittMeter();
        setNote("");
        setToffset(0);
        $('#' + getId()).hide();
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
        }).then(function (data) { return props.Action(); });
    }
    function submittMeter() {
        if (props.state.Description == 'Out Of Compliance')
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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], { Id: getId(), Title: getTitle(), Confirm: confirm, content: function () {
                if (props.state != undefined && props.state.Description == 'Out Of Compliance')
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Note:"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { className: "form-control", rows: 4, value: note, onChange: function (e) { return setNote(e.target.value); } }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Days out of Compliance:"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: 'number', value: Toffset, onChange: function (e) { return setToffset(parseInt(e.target.value)); } })));
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Note:"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { className: "form-control", rows: 4, value: note, onChange: function (e) { return setNote(e.target.value); } })));
            }, PosLabel: getBtn(), NegLabel: 'Cancel', Close: function () { setNote(''); setToffset(0); return true; } }),
        props.state != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Warning__WEBPACK_IMPORTED_MODULE_2__["default"], { Id: getId() + '-warning', Title: 'Warning', Content: 'This action can not be undone. It will create a permanent compliance record.', Confirm: 'Proceed', Deny: 'Cancel', Action: function (result) { if (result)
                submitt(); } }) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (ManualAction);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/Common/Modal.tsx":
/*!*******************************************!*\
  !*** ./TSX/MiMD/PRC-002/Common/Modal.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

;
var Modal = function (props) {
    function Confirm() {
        if (props.Confirm != undefined) {
            if (props.Confirm())
                $('#' + props.Id).hide();
        }
        else
            $('#' + props.Id).hide();
    }
    function Close() {
        if (props.Close != undefined) {
            if (props.Close())
                $('#' + props.Id).hide();
        }
        else
            $('#' + props.Id).hide();
    }
    function Cancel() {
        if (props.Cancel != undefined) {
            if (props.Cancel())
                $('#' + props.Id).hide();
            return;
        }
        else if (props.Close != undefined) {
            if (props.Close())
                $('#' + props.Id).hide();
            return;
        }
        else
            $('#' + props.Id).hide();
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", id: props.Id },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog modal-lg" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", { className: "modal-title" }, props.Title),
                        props.Close != undefined || props.Cancel != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "close", "data-dismiss": "modal", onClick: function () { return Cancel(); } }, "\u00D7") : null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" }, props.content()),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        props.PosLabel == undefined ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: Confirm }, props.PosLabel),
                        props.NegLabel == undefined ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger", "data-dismiss": "modal", onClick: Close }, props.NegLabel)))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/Common/Warning.tsx":
/*!*********************************************!*\
  !*** ./TSX/MiMD/PRC-002/Common/Warning.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//******************************************************************************************************
//  Warning.tsx - Gbtc
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

var Warning = function (props) {
    function confirmWarning() {
        $('#' + props.Id).hide();
        props.Action(true);
    }
    function cancelWarning() {
        $('#' + props.Id).hide();
        props.Action(false);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", id: props.Id },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog modal-sm" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", { className: "modal-title" }, props.Title)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, props.Content)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-success", onClick: function () { return confirmWarning(); } }, props.Confirm),
                    props.Deny == undefined ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger", "data-dismiss": "modal", onClick: function () { return cancelWarning(); } }, props.Deny))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Warning);


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
/* harmony import */ var _Common_BaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/BaseConfig */ "./TSX/MiMD/PRC-002/Common/BaseConfig.tsx");
/* harmony import */ var _Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ManualAction */ "./TSX/MiMD/PRC-002/Common/ManualAction.tsx");
/* harmony import */ var _MeterWizzard_NewMeterWizzard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MeterWizzard/NewMeterWizzard */ "./TSX/MiMD/PRC-002/MeterWizzard/NewMeterWizzard.tsx");
/* harmony import */ var _Common_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/Modal */ "./TSX/MiMD/PRC-002/Common/Modal.tsx");
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
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), baseConfigList = _a[0], setBaseConfigList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), meter = _b[0], setMeter = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleBaseConfigList = getBaseConfigs(props.MeterID);
        var handleMeter = getMeter(props.MeterID);
        return function () {
            if (handleBaseConfigList != null && handleBaseConfigList.abort != null)
                handleBaseConfigList.abort();
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
    function getBaseConfigs(id) {
        if (id == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/BaseConfig?parentID=" + id,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (data) {
            if (data == null)
                return;
            setBaseConfigList(data);
        });
        return handle;
    }
    //List of Buttons that are relevant:
    // Edit Base Config
    // Deactivate Meter
    // Submitt RAP => For now this will only add a state not actually do anything
    var stat = (meter == undefined ? undefined : props.stateList.find(function (s) { return s.ID == meter.StatusID; }));
    var lblStyle = {
        width: '100%',
        padding: 0,
        background: (stat == undefined ? '#000000' : stat.Color),
        textAlign: 'center',
        textColor: (stat == undefined ? '#000000' : stat.TextColor),
        height: '25px'
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '50%', padding: 0 } }, meter != undefined ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: __assign(__assign({}, lblStyle), { marginTop: '50px' }) }, "Meter not in Compliance"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                        width: '100%',
                        fontSize: 'xx-large',
                        textAlign: 'center',
                        background: (meter.Timer < 30 ? '#28a745' : '#ffc107'),
                        textColor: (meter.Timer < 30 ? '#fff' : '#212529'),
                        height: '50px'
                    } }, (meter.Status == 'In Compliance' ? 0 : meter.Timer)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: lblStyle }, "Days"))
            : null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '50%', padding: 5 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { $('#NewMeter').show(); } }, " Add New Meter to PRC002 "),
            meter != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return $('#baseconfig').show(); } }, " Meter Configuration ") : null,
            meter != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger btn-block", onClick: function () { $('#CreateRecord').show(); } }, " Add Compliance Issue ") : null,
            meter != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { $('#RAP').show(); } }, " Submitt Remedial Action Plan ") : null,
            meter != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], { Title: 'Meter Base Configuration', PosLabel: 'Close', Id: 'baseconfig', content: function () { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_BaseConfig__WEBPACK_IMPORTED_MODULE_2__["default"], { BaseConfigList: baseConfigList }); } }) : null,
            meter != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__["default"], { MeterId: props.MeterID, state: props.stateList.find(function (item) { return item.Description === 'Out Of Compliance'; }), Action: function () { } }) : null,
            meter != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_3__["default"], { MeterId: props.MeterID, state: props.stateList.find(function (item) { return item.Description === 'RAP Submitted'; }), Action: function () { } }) : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MeterWizzard_NewMeterWizzard__WEBPACK_IMPORTED_MODULE_4__["default"], { onComplete: function () { history.go(0); } }))));
};
/* harmony default export */ __webpack_exports__["default"] = (MeterDetail);


/***/ }),

/***/ "./TSX/MiMD/PRC-002/MeterOverview/MeterFilter.tsx":
/*!********************************************************!*\
  !*** ./TSX/MiMD/PRC-002/MeterOverview/MeterFilter.tsx ***!
  \********************************************************/
/*! exports provided: MeterFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterFilter", function() { return MeterFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommonComponents_FormSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CommonComponents/FormSelect */ "./TSX/MiMD/CommonComponents/FormSelect.tsx");
//******************************************************************************************************
//  MeterFilter.tsx - Gbtc
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



var MeterFilter = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), hover = _a[0], setHover = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), filterableList = _b[0], setfilterableList = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.includeStatus)
            setfilterableList([
                { FieldName: 'AssetKey', Type: 'string' },
                { FieldName: 'Model', Type: 'string' },
                { FieldName: 'Make', Type: 'string' },
                { FieldName: 'Status', Type: 'enum' }
            ]);
        else
            setfilterableList([
                { FieldName: 'AssetKey', Type: 'string' },
                { FieldName: 'Model', Type: 'string' },
                { FieldName: 'Make', Type: 'string' }
            ]);
        return function () { };
    }, [props.includeStatus]);
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), filters = _c[0], setFilters = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({ FieldName: 'AssetKey', SearchText: '', Operator: 'LIKE', Type: 'string' }), 2), filter = _d[0], setFilter = _d[1];
    function deleteFilter(f) {
        return __awaiter(this, void 0, void 0, function () {
            var index, filts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = filters.findIndex(function (fs) { return fs == f; });
                        filts = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](filters);
                        filts.splice(index, 1);
                        return [4 /*yield*/, setFilters(filts)];
                    case 1:
                        _a.sent();
                        setHover(false);
                        props.setFilter(filts);
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
                        oldFilters = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](filters);
                        oldFilters.push(filter);
                        return [4 /*yield*/, setFilters(oldFilters)];
                    case 1:
                        _a.sent();
                        setFilter({ FieldName: 'AssetKey', SearchText: '', Operator: 'LIKE', Type: 'string' });
                        props.setFilter(oldFilters);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "collapse navbar-collapse", style: { width: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "navbar-nav mr-auto", style: { width: '100%' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item", style: { width: '15%', paddingRight: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { position: 'relative', display: 'inline-block' } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-primary", "data-toggle": 'modal', "data-target": '#' + props.Id, onClick: function (evt) { return evt.preventDefault(); }, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } }, "Add Filter"),
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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", id: props.Id },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", { className: "modal-title" }, "Add Filter"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "close", "data-dismiss": "modal" }, "\u00D7")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormSelect__WEBPACK_IMPORTED_MODULE_2__["default"], { Record: filter, Field: 'FieldName', Options: filterableList.map(function (fl) { return ({ Value: fl.FieldName, Label: fl.FieldName }); }), Setter: function (record) {
                                var operator = "IN";
                                var column = filterableList.find(function (fl) { return fl.FieldName == record.FieldName; });
                                if (column.Type == 'string')
                                    operator = "LIKE";
                                setFilter(function (prevFilter) { return (__assign(__assign({}, prevFilter), { FieldName: record.FieldName, SearchText: '', Operator: operator, Type: column.Type })); });
                            }, Label: 'Column' }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FilterCreator, { Filter: filter, Field: filterableList.find(function (fl) { return fl.FieldName == filter.FieldName; }), Setter: function (record) { return setFilter(record); } })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", "data-dismiss": "modal", onClick: function () { return addFilter(); } }, "Add"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger", "data-dismiss": "modal" }, "Close")))))));
};
var FilterCreator = function (props) {
    var valueListItems = ['In Compliance', 'Out Of Compliance', 'Acknowledged', 'Reviewed', 'InActive', 'RAP Submitted'];
    if (props.Field == undefined)
        return null;
    else if (props.Field.Type == "string") {
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
    else {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Column type is enumerable. Select from below."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { style: { listStyle: 'none' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-check" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) {
                                if (evt.target.checked)
                                    props.Setter(function (prevSetter) { return (__assign(__assign({}, prevSetter), { SearchText: "(" + valueListItems.join(',') + ")" })); });
                                else
                                    props.Setter(function (prevSetter) { return (__assign(__assign({}, prevSetter), { SearchText: '' })); });
                            }, defaultValue: 'off' }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-check-label" }, "Select All"))),
                valueListItems.map(function (vli, i) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: i },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-check" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) {
                                if (evt.target.checked) {
                                    var list = props.Filter.SearchText.replace('(', '').replace(')', '').split(',');
                                    list = list.filter(function (x) { return x != ""; });
                                    list.push(vli);
                                    var text_1 = "(" + list.join(',') + ")";
                                    props.Setter(function (prevSetter) { return (__assign(__assign({}, prevSetter), { SearchText: text_1 })); });
                                }
                                else {
                                    var list = props.Filter.SearchText.replace('(', '').replace(')', '').split(',');
                                    list = list.filter(function (x) { return x != ""; });
                                    list = list.filter(function (x) { return x != vli; });
                                    var text_2 = "(" + list.join(',') + ")";
                                    props.Setter(function (prevSetter) { return (__assign(__assign({}, prevSetter), { SearchText: text_2 })); });
                                }
                            }, value: props.Filter.SearchText.indexOf(vli) >= 0 ? 'on' : 'off', checked: props.Filter.SearchText.indexOf(vli) >= 0 ? true : false }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-check-label" }, vli))); }))));
    }
};


/***/ }),

/***/ "./TSX/MiMD/PRC-002/MeterOverview/MeterList.tsx":
/*!******************************************************!*\
  !*** ./TSX/MiMD/PRC-002/MeterOverview/MeterList.tsx ***!
  \******************************************************/
/*! exports provided: MeterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterList", function() { return MeterList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
//******************************************************************************************************
//  MeterList.tsx - Gbtc
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


var MeterList = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]("Status"), 2), meterSort = _a[0], setMeterSort = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), meterAsc = _b[0], setMeterAsc = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), meterList = _c[0], setMeterList = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleMeterList = getData();
        return function () {
            if (handleMeterList.abort != null)
                handleMeterList.abort();
        };
    }, [props.Filter]);
    function getData() {
        var handle = $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/PRC002/ComplianceMeter/SearchableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Searches: props.Filter, OrderBy: meterSort, Ascending: meterAsc }),
            cache: false,
            async: true
        });
        handle.done(function (data) {
            setMeterList(data);
        });
        return handle;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__["default"], { cols: [
            {
                key: 'Status', label: 'Status', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                    var stat = props.StatusList.find(function (s) { return s.ID === item.StatusID; });
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                            fontWeight: '600',
                            width: '90%',
                            height: '35px',
                            background: (stat == undefined ? '#f8f9fa' : stat.Color),
                            border: '2px solid',
                            borderRadius: '5px',
                            textAlign: 'center',
                            lineHeight: '35px',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            textColor: (stat == undefined ? '#212529' : stat.TextColor),
                        } },
                        " ",
                        item.Status,
                        " ");
                }
            },
            { key: 'AssetKey', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
            { key: 'Model', label: 'Model', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
            { key: 'Make', label: 'Make', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
        ], tableClass: "table table-hover", data: meterList, sortField: meterSort, ascending: meterAsc, onSort: function (d) {
            if (d.col == meterSort) {
                setMeterAsc(!meterAsc);
                getData();
            }
            else {
                setMeterAsc(meterAsc);
                setMeterSort(d.col);
                getData();
            }
        }, onClick: function (d) { props.SelectMeter(d.row.ID); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID === props.SelectedMeterId; } }));
};


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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MeterFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeterFilter */ "./TSX/MiMD/PRC-002/MeterOverview/MeterFilter.tsx");
/* harmony import */ var _RecordList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordList */ "./TSX/MiMD/PRC-002/MeterOverview/RecordList.tsx");
/* harmony import */ var _MeterDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MeterDetail */ "./TSX/MiMD/PRC-002/MeterOverview/MeterDetail.tsx");
/* harmony import */ var _MeterList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MeterList */ "./TSX/MiMD/PRC-002/MeterOverview/MeterList.tsx");
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






var PRC002MeterOverviewPage = function (props) {
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), meterFilters = _a[0], setMeterFilters = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), statusList = _b[0], setStatusList = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleStatusList = getStatus();
        return function () {
            if (handleStatusList.abort != null)
                handleStatusList.abort();
        };
    }, [props]);
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%', height: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MeterFilter__WEBPACK_IMPORTED_MODULE_2__["MeterFilter"], { Id: 'MeterListFilter', includeStatus: true, setFilter: function (filt) { setMeterFilters(filt); } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '50%', height: 'calc( 100% - 136px)', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MeterList__WEBPACK_IMPORTED_MODULE_5__["MeterList"], { Filter: meterFilters, SelectedMeterId: (isNaN(props.MeterID) ? -1 : props.MeterID), SelectMeter: setMeterID, StatusList: statusList })),
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
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
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
    }, [props]);
    function getRecords() {
        if (props.MeterId == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/ComplianceRecord?parentID=" + props.MeterId,
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__["default"], { cols: [
                        {
                            key: 'Status', label: 'Status', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) {
                                var stat = props.StateList.find(function (s) { return s.ID === item.Status; });
                                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                                        fontWeight: '600',
                                        width: '90%',
                                        height: '35px',
                                        background: (stat == undefined ? '#f8f9fa' : stat.Color),
                                        border: '2px solid',
                                        borderRadius: '5px',
                                        textAlign: 'center',
                                        lineHeight: '35px',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        textColor: (stat == undefined ? '#212529' : stat.TextColor),
                                    } },
                                    " ",
                                    (stat == undefined ? '' : stat.Description),
                                    " ");
                            }
                        },
                        { key: 'Timestamp', label: 'Last Updated', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return moment(item.Timestamp).format("MM/DD/YY HH:mm CT"); } },
                        { key: 'User', label: ' By', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } }
                    ], tableClass: "table table-hover", data: changeList, sortField: recordSort, ascending: recordAsc, onSort: function (d) { }, onClick: function (d) {
                        history.push('index.cshtml?name=PRC002Change&RecordID=' + d.row.ID);
                    }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })))
        : null)));
};
/* harmony default export */ __webpack_exports__["default"] = (RecordList);


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
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../CommonComponents/FormInput */ "./TSX/MiMD/CommonComponents/FormInput.tsx");
/* harmony import */ var _Common_Warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/Warning */ "./TSX/MiMD/PRC-002/Common/Warning.tsx");
/* harmony import */ var _SelectMeter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectMeter */ "./TSX/MiMD/PRC-002/MeterWizzard/SelectMeter.tsx");
/* harmony import */ var _Common_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/Modal */ "./TSX/MiMD/PRC-002/Common/Modal.tsx");
/* harmony import */ var _Common_BaseConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/BaseConfig */ "./TSX/MiMD/PRC-002/Common/BaseConfig.tsx");
/* harmony import */ var _Common_ConfigRuleEdit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/ConfigRuleEdit */ "./TSX/MiMD/PRC-002/Common/ConfigRuleEdit.tsx");
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




;





var NewMeterWizzard = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), meter = _a[0], setMeter = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Meter'), 2), step = _b[0], setStep = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), baseConfig = _c[0], setBaseConfig = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](new Map()), 2), baseConfigFields = _d[0], setBaseConfigFields = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), fileFields = _e[0], setFileFields = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), editField = _f[0], setEditField = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (step != 'BaseConfig')
            return function () { };
        $(".custom-file-input").on("change", function (evt) {
            var fileName = evt.target.value.split("\\").pop();
            $(evt.target).siblings(".custom-file-label").addClass("selected").html(fileName);
            readSingleFile(evt, fileName);
        });
        return function () { return $(".custom-file-input").off('change'); };
    }, [step]);
    function Cancel() {
        setStep('Meter');
        setMeter(undefined);
        setBaseConfig([]);
        setBaseConfigFields(new Map());
        $('#NewMeter').hide();
    }
    function NextStep() {
        if (step == 'Meter' && meter == undefined)
            $('#meterWarning').show();
        else if (step == 'Meter')
            setStep('BaseConfig');
        else if (step == 'New BaseConfig')
            setStep('BaseConfig');
        else if (step == 'File Load') {
            fileToBaseConfig(baseConfig[baseConfig.length - 1].ID);
            setStep('New BaseConfig');
        }
        else if (step == 'BaseConfig' && baseConfig.length > 0) {
            $('#submittWarning').show();
        }
        else if (step == 'BaseConfig')
            $('#configWarning').show();
        if (step == 'Edit Field')
            saveEditField();
        return false;
    }
    function PrevStep() {
        if (step == 'Meter')
            $('#wizzardWarning').show();
        if (step == 'BaseConfig')
            setStep('Meter');
        if (step == 'New BaseConfig' || step == 'File Load') {
            removeBaseConfig(baseConfig[baseConfig.length - 1].ID);
            setStep('BaseConfig');
        }
        if (step == 'Edit Field')
            setStep('BaseConfig');
        return false;
    }
    function fileToBaseConfig(id) {
        setBaseConfigFields(function (flds) {
            var update = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](flds);
            update.set(id, fileFields.filter(function (item) { return item.Include; }));
            return update;
        });
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
    function getContent() {
        if (step == 'Meter')
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SelectMeter__WEBPACK_IMPORTED_MODULE_5__["default"], { setMeter: function (meter) { setMeter(meter); }, selectedMeter: meter });
        else if (step == 'BaseConfig')
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_BaseConfig__WEBPACK_IMPORTED_MODULE_7__["default"], { BaseConfigList: baseConfig, getFieldList: getBaseConfigFields, onEdit: editConfigField, onNew: addConfigField }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group", style: { width: '100%' } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "custom-file" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "file", className: "custom-file-input", accept: ".ini,.par" }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "custom-file-label" }, "Choose a Configuration File if applicable")))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { createBaseConfig(); setStep('New BaseConfig'); } }, " Add New Base Configuration ")))));
        else if (step == 'New BaseConfig' && baseConfig.length > 0)
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: baseConfig[baseConfig.length - 1], Field: 'Name', Setter: BaseConfigSetter, Valid: function () { return true; }, Label: 'Name' }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: baseConfig[baseConfig.length - 1], Field: 'Pattern', Setter: BaseConfigSetter, Valid: function () { return true; }, Label: 'File Pattern' })));
        else if (step == 'File Load')
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileLoadTable, { Fields: fileFields, Setter: function (index, value) {
                    setFileFields(function (lst) {
                        var update = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](lst);
                        update[index].Include = value;
                        return update;
                    });
                } });
        else if (step == 'Edit Field')
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ConfigRuleEdit__WEBPACK_IMPORTED_MODULE_8__["default"], { Field: editField, editType: true, Setter: setEditField });
        else
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, " ");
    }
    function readSingleFile(evt, fileName) {
        //Retrieve the first (and only!) File from the FileList object
        var f = evt.target.files[0];
        if (f) {
            var r = new FileReader();
            r.onload = function (e) {
                var contents = e.target.result;
                var lines = contents.split(/[\r\n]+/g);
                var results = [];
                lines.forEach(function (ln) {
                    if (!ln.includes('='))
                        return;
                    var i = ln.indexOf('=');
                    results.push({ key: ln.substr(0, i), value: ln.substr(i + 1) });
                });
                LoadBaseConfigFile(fileName, results.map(function (item, index) { return { ID: index, BaseConfigId: -1, Name: item.key, Value: item.value, Comparison: '=', FieldType: 'string', Include: false }; }));
            };
            r.readAsText(f);
        }
    }
    function LoadBaseConfigFile(file, Fields) {
        var id = (baseConfig.length == 0 ? 0 : Math.max.apply(Math, __spread(baseConfig.map(function (item) { return item.ID; }))) + 1);
        setBaseConfig(function (lst) {
            var addition = {
                ID: id,
                MeterId: meter.ID,
                Name: file + ' File',
                Pattern: file
            };
            return __spread(lst, [addition]);
        });
        setBaseConfigFields(function (flds) {
            var update = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](flds);
            update.set(id, []);
            return update;
        });
        setFileFields(Fields.map(function (item) { item.BaseConfigId = id; return item; }));
        setStep('File Load');
    }
    function createBaseConfig() {
        var id = (baseConfig.length == 0 ? 0 : Math.max.apply(Math, __spread(baseConfig.map(function (item) { return item.ID; }))) + 1);
        setBaseConfig(function (lst) {
            var addition = {
                ID: id,
                MeterId: meter.ID,
                Name: 'New Base Configuration',
                Pattern: '*.ini'
            };
            return __spread(lst, [addition]);
        });
        setBaseConfigFields(function (flds) {
            var update = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](flds);
            update.set(id, []);
            return update;
        });
    }
    function removeBaseConfig(id) {
        setBaseConfig(function (lst) {
            var update = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](lst);
            var i = update.findIndex(function (item) { return item.ID == id; });
            update.splice(i, 1);
            return update;
        });
        setBaseConfigFields(function (flds) {
            var update = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](flds);
            update.delete(id);
            return update;
        });
    }
    function BaseConfigSetter(record) {
        setBaseConfig(function (bc) {
            var update = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](bc);
            var i = update.findIndex(function (item) { return record.ID == item.ID; });
            update[i] = record;
            return update;
        });
    }
    function getBaseConfigFields(id) {
        if (baseConfigFields.has(id))
            return baseConfigFields.get(id);
        return [];
    }
    function Submitt() {
        // Start By Creating the meter
        var configFields = [];
        baseConfig.forEach(function (item) {
            baseConfigFields.get(item.ID).forEach(function (fld) {
                configFields.push({
                    BaseConfigId: item.ID,
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
                Meter: { MeterId: meter.ID, Active: false },
                BaseConfiguration: baseConfig.map(function (item) { return { Name: item.Name, Pattern: item.Pattern, ID: item.ID }; }),
                ConfigurationFields: configFields
            }),
            dataType: 'json',
            cache: false,
            async: true
        });
        Cancel();
        props.onComplete();
    }
    function editConfigField(record) {
        setStep('Edit Field');
        setEditField(record);
    }
    function addConfigField(id) {
        setStep('Edit Field');
        setEditField({ BaseConfigId: id, Comparison: '=', Value: '', Name: 'New Field', FieldType: 'string', ID: -1 });
    }
    function saveEditField() {
        if (editField.ID == -1)
            setBaseConfigFields(function (fld) {
                var update = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](fld);
                var change = update.get(editField.BaseConfigId);
                var addition = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](editField);
                addition.ID = (change.length > 0 ? Math.max.apply(Math, __spread(change.map(function (item) { return item.ID; }))) + 1 : 1);
                change.push(addition);
                update.set(editField.BaseConfigId, change);
                return update;
            });
        else
            setBaseConfigFields(function (fld) {
                var update = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](fld);
                var change = update.get(editField.BaseConfigId);
                var i = change.findIndex(function (item) { return item.ID == editField.ID; });
                change[i] = editField;
                update.set(editField.BaseConfigId, change);
                return update;
            });
        setStep('BaseConfig');
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], { Id: 'NewMeter', Title: getTitle(), NegLabel: (step == 'Meter' ? 'Cancel' : 'Back'), PosLabel: (step == 'Meter' || step == 'File Load' ? 'Next' : 'Save'), content: function () { return getContent(); }, Close: PrevStep, Confirm: NextStep, Cancel: function () { $('#wizzardWarning').show(); return false; } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Warning__WEBPACK_IMPORTED_MODULE_4__["default"], { Title: 'Close the Wizzard', Content: 'This will close the New Meter Wizzar and al progress will be lost.', Confirm: 'Back', Deny: 'Cancel', Id: 'wizzardWarning', Action: function (result) { if (!result)
                Cancel(); } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Warning__WEBPACK_IMPORTED_MODULE_4__["default"], { Title: 'Warning', Content: 'Please Select a Meter before continuing', Confirm: 'Ok', Id: 'meterWarning', Action: function (result) { } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Warning__WEBPACK_IMPORTED_MODULE_4__["default"], { Title: 'Warning', Content: 'This will add the selected meter to PRC002 monitoring and save the base configuration. Note that the status of this meter will not update until the first configuration File is downloaded.', Confirm: 'Proceed', Deny: 'Cancel', Id: 'submittWarning', Action: function (result) { if (result)
                Submitt(); } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Warning__WEBPACK_IMPORTED_MODULE_4__["default"], { Title: 'Warning', Content: 'At least one Base Configuration has to be set up and at least one Configuration Field has to be monitored', Confirm: 'Ok', Id: 'configWarning', Action: function (result) { } })));
};
var FileLoadTable = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__["default"], { cols: [
            { key: 'Include', label: 'Include', headerStyle: { width: '3.5em' }, rowStyle: { width: '3.5em' }, content: function (item, key, style) { return (item.Include ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { marginTop: '16px', textAlign: 'center' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-check-square-o fa-3x", "aria-hidden": "true" })) : null); } },
            { key: 'Name', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: item, Field: 'Name', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
            { key: 'FieldType', label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: item, Field: 'FieldType', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
            { key: 'Comparison', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: item, Field: 'Comparison', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
            { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: item, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
        ], tableClass: "table table-hover", data: props.Fields, sortField: 'Name', ascending: true, onSort: function (d) { }, onClick: function (d) { props.Setter(d.row.ID, !d.row.Include); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } }));
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
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
/* harmony import */ var _MeterOverview_MeterFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MeterOverview/MeterFilter */ "./TSX/MiMD/PRC-002/MeterOverview/MeterFilter.tsx");
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


;

var SelectMeter = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), MeterList = _a[0], setMeterList = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), meterFilter = _b[0], setMeterFilter = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]("AssetKey"), 2), meterSort = _c[0], setMeterSort = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), meterAsc = _d[0], setMeterAsc = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
        });
        return handle;
    }
    //List of meters to Select From
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MeterOverview_MeterFilter__WEBPACK_IMPORTED_MODULE_2__["MeterFilter"], { Id: 'SelectMeterFilter', includeStatus: false, setFilter: function (flt) { setMeterFilter(flt); console.log("updated Filter Wizzard"); } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: 'calc( 100% - 136px)', padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__["default"], { cols: [
                    { key: 'AssetKey', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                    { key: 'Model', label: 'Model', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                    { key: 'Make', label: 'Make', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                ], tableClass: "table table-hover", data: MeterList, sortField: meterSort, ascending: meterAsc, onSort: function (d) {
                    if (d.col == meterSort) {
                        setMeterAsc(!meterAsc);
                    }
                    else {
                        setMeterAsc(meterAsc);
                        setMeterSort(d.col);
                    }
                }, onClick: function (d) { props.setMeter(d.row); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID === (props.selectedMeter == undefined ? -1 : props.selectedMeter.ID); } }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SelectMeter);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29uZmlndXJhdGlvbi9Db25maWd1cmF0aW9uQnlNZXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29uZmlndXJhdGlvbi9Db25maWd1cmF0aW9uRmlsZUNoYW5nZXMudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL0NvbmZpZ3VyYXRpb24vQ29uZmlndXJhdGlvbkZpbGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NoYW5nZU92ZXJ2aWV3L0FjdGlvbkhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9BY3Rpb25MaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NoYW5nZU92ZXJ2aWV3L0NoYW5nZU92ZXJ2aWV3UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9GaWVsZFZhbHVlcy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9SZWNvcmREZXRhaWwudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvQ2hhbmdlT3ZlcnZpZXcvUmVzb2x2ZVJlY29yZC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9Db21tb24vQmFzZUNvbmZpZy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9Db21tb24vQ29uZmlnUnVsZUVkaXQudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvQ29tbW9uL01hbnVhbEFjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9Db21tb24vTW9kYWwudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvQ29tbW9uL1dhcm5pbmcudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJPdmVydmlldy9NZXRlckRldGFpbC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9NZXRlck92ZXJ2aWV3L01ldGVyRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyT3ZlcnZpZXcvTWV0ZXJMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyT3ZlcnZpZXcvTWV0ZXJPdmVydmlld1BhZ2UudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJPdmVydmlldy9SZWNvcmRMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyV2l6emFyZC9OZXdNZXRlcldpenphcmQudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJXaXp6YXJkL1NlbGVjdE1ldGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4Ryx3QkFBd0I7QUFDeEIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7QUFFekU7QUFDSDtBQUU1QjtJQUEwQyw2QkFBa0w7SUFBNU47O0lBZ0JBLENBQUM7SUFmRywwQkFBTSxHQUFOO1FBQUEsaUJBY0M7UUFiRyxPQUFPLDZEQUFLLFNBQVMs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QUM7cUJBQzFCO3lCQUNJO3dCQUNELFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDdkI7Z0JBQ0wsQ0FBQyxFQUNELE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBTyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDMUMsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUMxRixVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDekcsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN4RixRQUFRLEVBQUUsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBNUUsQ0FBNEUsR0FDbEcsQ0FDQSxDQUNQLENBQ047QUFDTCxDQUFDO0FBR2MsMEVBQVcsRUFBQyIsImZpbGUiOiJDb25maWd1cmF0aW9uQnlNZXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBGb3JtSW5wdXQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAxLzIyLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnB1dDxUPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7IFJlY29yZDogVCwgRmllbGQ6IGtleW9mIChUKSwgU2V0dGVyOiAocmVjb3JkOiBUKSA9PiB2b2lkLCBWYWxpZDogKGZpZWxkOiBrZXlvZiAoVCkpID0+IGJvb2xlYW4sIExhYmVsPzogc3RyaW5nLCBGZWVkYmFjaz86IHN0cmluZywgRGlzYWJsZWQ/OiBib29sZWFuIH0sIHt9LCB7fT57XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMuTGFiZWwgPT0gbnVsbCA/IHRoaXMucHJvcHMuRmllbGQgOiB0aGlzLnByb3BzLkxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9eyh0aGlzLnByb3BzLlZhbGlkKHRoaXMucHJvcHMuRmllbGQpID8gXCJmb3JtLWNvbnRyb2xcIiA6IFwiZm9ybS1jb250cm9sIGlzLWludmFsaWRcIil9IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVjb3JkOiBUID0gXy5jbG9uZSh0aGlzLnByb3BzLlJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC52YWx1ZSAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZFt0aGlzLnByb3BzLkZpZWxkXSA9IGV2dC50YXJnZXQudmFsdWUgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZFt0aGlzLnByb3BzLkZpZWxkXSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5TZXR0ZXIocmVjb3JkKTtcclxuICAgICAgICAgICAgfX0gdmFsdWU9e3RoaXMucHJvcHMuUmVjb3JkW3RoaXMucHJvcHMuRmllbGRdID09IG51bGwgPyAnJyA6IHRoaXMucHJvcHMuUmVjb3JkW3RoaXMucHJvcHMuRmllbGRdLnRvU3RyaW5nKCl9IGRpc2FibGVkPXt0aGlzLnByb3BzLkRpc2FibGVkID09IG51bGwgPyBmYWxzZSA6IHRoaXMucHJvcHMuRGlzYWJsZWQgfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW52YWxpZC1mZWVkYmFjayc+e3RoaXMucHJvcHMuRmVlZGJhY2sgPT0gbnVsbCA/IHRoaXMucHJvcHMuRmllbGQgKyAnIGlzIGEgcmVxdWlyZWQgZmllbGQuJyA6IHRoaXMucHJvcHMuRmVlZGJhY2t9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25maWd1cmF0aW9uQnlNZXRlci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDgvMjIvMjAxOSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0JztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ2hlY2tCb3ggZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtQ2hlY2tCb3gnO1xyXG5pbXBvcnQgQ29uZmlndXJhdGlvbkZpbGVzIGZyb20gJy4vQ29uZmlndXJhdGlvbkZpbGVzJztcclxuaW1wb3J0IENvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcyBmcm9tICcuL0NvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcyc7XHJcbmltcG9ydCBOb3RlV2luZG93IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvTm90ZVdpbmRvdyc7XHJcblxyXG50eXBlIEZpZWxkTmFtZSA9ICdTdGF0aW9uJyB8ICdNb2RlbCcgfCAnRGF0ZUxhc3RDaGFuZ2UnIHwgJ1RTQyc7XHJcblxyXG5cclxuaW50ZXJmYWNlIEZpbHRlciB7XHJcbiAgICBGaWVsZE5hbWU6IEZpZWxkTmFtZSxcclxuICAgIFNlYXJjaFRleHQ6IHN0cmluZyxcclxuICAgIE9wZXJhdG9yOiAnPScgfCAnPD4nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PScgfCAnTElLRScgfCAnTk9UIExJS0UnIHwgJ0lOJyB8ICdOT1QgSU4nLFxyXG4gICAgVHlwZTogc3RyaW5nXHJcbn1cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5jb25zdCBDb25maWd1cmF0aW9uQnlNZXRlcjogTWlNRC5CeUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbZmlsdGVyYWJsZUxpc3QsIHNldEZpbHRlcmFibGVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1pTUQuQWRkaXRpb25hbEZpZWxkPj4oW10pO1xyXG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8RmlsdGVyPj4oW10pO1xyXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IFJlYWN0LnVzZVN0YXRlPEZpbHRlcj4oeyBGaWVsZE5hbWU6ICdTdGF0aW9uJywgU2VhcmNoVGV4dDogJycsIE9wZXJhdG9yOiAnTElLRScsIFR5cGU6ICdzdHJpbmcnfSk7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5NZXRlcj4+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdEYXRlTGFzdENoYW5nZWQnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldE1ldGVycyhzb3J0RmllbGQsIGFzY2VuZGluZyk7XHJcbiAgICAgICAgbGV0IGhhbmRsZTIgPSBnZXRBZGRpdGlvbmFsRmllbGRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IG51bGwpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTIuYWJvcnQgIT0gbnVsbCkgaGFuZGxlMi5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcnMoc2YsIGFzYyk6IEpRdWVyeS5qcVhIUjxBcnJheTxNaU1ELk1ldGVyPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvTWV0ZXIvQ29uZmlnL1NlYXJjaGFibGVMaXN0YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IFNlYXJjaGVzOiBmaWx0ZXJzLCBPcmRlckJ5OiBzZiwgQXNjZW5kaW5nOiBhc2MgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PE1pTUQuTWV0ZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIC8vdmFyIG9yZGVyZWQgPSBfLm9yZGVyQnkoZGF0YSwgW3NvcnRGaWVsZF0sIFsoYXNjZW5kaW5nID8gXCJhc2NcIiA6IFwiZGVzY1wiKV0pO1xyXG4gICAgICAgICAgICBzZXREYXRhKGRhdGEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWRkaXRpb25hbEZpZWxkcygpOiBKUXVlcnkuanFYSFI8QXJyYXk8TWlNRC5BZGRpdGlvbmFsRmllbGQ+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvQWRkaXRpb25hbEZpZWxkL1BhcmVudFRhYmxlL01ldGVyYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4pID0+IHtcclxuICAgICAgICAgICAgbGV0IG90aGVyQ29sdW1ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGVLZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGROYW1lOiBcIlN0YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBJRDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNTZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhcmVudFRhYmxlOiBcIk1ldGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGVLZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGROYW1lOiBcIk1vZGVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJEYXRlTGFzdENoYW5nZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBJRDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNTZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhcmVudFRhYmxlOiBcIk1ldGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogXCJkYXRldGltZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgdmFyIG9yZGVyZWQgPSBfLm9yZGVyQnkob3RoZXJDb2x1bW5zLmNvbmNhdChkYXRhKSwgWydGaWVsZE5hbWUnXSwgW1wiYXNjXCJdKTtcclxuICAgICAgICAgICAgc2V0RmlsdGVyYWJsZUxpc3Qob3JkZXJlZClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoaXRlbSwgZXZ0KSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6IGhvbWVQYXRoICsgJ2luZGV4LmNzaHRtbCcsIHNlYXJjaDogJz9uYW1lPUNvbmZpZ3VyYXRpb24mTWV0ZXJJRD0nICsgaXRlbS5yb3cuTWV0ZXJJRCwgc3RhdGU6IHt9IH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRmlsdGVyKGY6IEZpbHRlcikge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGZpbHRlcnMuZmluZEluZGV4KGZzID0+IGZzID09IGYpO1xyXG4gICAgICAgIGxldCBmaWx0cyA9IGZpbHRlcnM7XHJcbiAgICAgICAgZmlsdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBhd2FpdCBzZXRGaWx0ZXJzKGZpbHRzKTtcclxuICAgICAgICBzZXRIb3ZlcihmYWxzZSk7XHJcbiAgICAgICAgZ2V0TWV0ZXJzKHNvcnRGaWVsZCwgYXNjZW5kaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGRGaWx0ZXIoKSB7XHJcbiAgICAgICAgbGV0IG9sZEZpbHRlcnMgPSBmaWx0ZXJzO1xyXG4gICAgICAgIG9sZEZpbHRlcnMucHVzaChmaWx0ZXIpO1xyXG4gICAgICAgIGF3YWl0IHNldEZpbHRlcnMob2xkRmlsdGVycyk7XHJcbiAgICAgICAgc2V0RmlsdGVyKHsgRmllbGROYW1lOiAnU3RhdGlvbicsIFNlYXJjaFRleHQ6ICcnLCBPcGVyYXRvcjogJ0xJS0UnLCBUeXBlOiAnc3RyaW5nJyB9KTtcclxuICAgICAgICBnZXRNZXRlcnMoc29ydEZpZWxkLCBhc2NlbmRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e3sgd2lkdGg6ICcxNSUnLCBwYWRkaW5nUmlnaHQ6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD0nI25ld0ZpbHRlcicgb25DbGljaz17KGV2dCkgPT4gZXZ0LnByZXZlbnREZWZhdWx0KCl9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIoZmFsc2UpfT5BZGQgRmlsdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAzLCBkaXNwbGF5OiBob3ZlciA/ICdibG9jaycgOiAnbm9uZScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjFmMWYxJywgYm94U2hhZG93OiAnMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMiknLCB6SW5kZXg6IDEgfX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0aD5Db2x1bW48L3RoPjx0aD5PcGVyYXRvcjwvdGg+PHRoPlNlYXJjaCBUZXh0PC90aD48dGg+UmVtb3ZlPC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVycy5tYXAoKGYsIGkpID0+IDx0ciBrZXk9e2l9Pjx0ZD57Zi5GaWVsZE5hbWV9PC90ZD48dGQ+e2YuT3BlcmF0b3J9PC90ZD48dGQ+e2YuU2VhcmNoVGV4dH08L3RkPjx0ZD48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBvbkNsaWNrPXsoZSkgPT4gZGVsZXRlRmlsdGVyKGYpfT48c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiPjwvaT48L3NwYW4+PC9idXR0b24+PC90ZD48L3RyPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7bWFyZ2luOiAwfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnY2FsYyggMTAwJSAtIDEzNnB4KScsIHBhZGRpbmc6MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdTdGF0aW9uJywgbGFiZWw6ICdTdGF0aW9uJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1RTQycsIGxhYmVsOiAnVFNDJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnRGF0ZUxhc3RDaGFuZ2VkJywgbGFiZWw6ICdEYXRlIExhc3QgQ2hhbmdlZCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTUlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1ba2V5XSA9PSBudWxsIHx8IGl0ZW1ba2V5XSA9PSAnJykgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpdGVtW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXlzID0gbm93LmRpZmYoZGF0ZSwgJ2RheXMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kQ29sb3InXSA9ICdyZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzIDwgNylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kQ29sb3InXSA9ICdvcmFuZ2UnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAneWVsbG93JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAxNywgcGFkZGluZzogMCB9LCByb3dTdHlsZTogeyB3aWR0aDogMCwgcGFkZGluZzogMCB9IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWV0ZXJzKGQuY29sLCAhYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyhhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkLmNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWV0ZXJzKGQuY29sLCBhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uTWV0ZXJJRCA9PSBwcm9wcy5NZXRlcklEfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMzAsIHBhZGRpbmc6IDAsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMTMwICwgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29uZmlndXJhdGlvbkZpbGVzIE1ldGVySUQ9e3Byb3BzLk1ldGVySUR9IEZpbGVOYW1lPXtwcm9wcy5GaWxlTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzIE1ldGVySUQ9e3Byb3BzLk1ldGVySUR9IEZpbGVOYW1lPXtwcm9wcy5GaWxlTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Tm90ZVdpbmRvdyBJRD17cHJvcHMuTWV0ZXJJRH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBpZD1cIm5ld0ZpbHRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkFkZCBGaWx0ZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TZWxlY3Q8RmlsdGVyPiBSZWNvcmQ9e2ZpbHRlcn0gRmllbGQ9J0ZpZWxkTmFtZScgT3B0aW9ucz17ZmlsdGVyYWJsZUxpc3QubWFwKGZsID0+ICh7IFZhbHVlOiBmbC5GaWVsZE5hbWUsIExhYmVsOiBmbC5GaWVsZE5hbWUgfSkpfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3BlcmF0b3IgPSBcIklOXCIgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW4gPSBmaWx0ZXJhYmxlTGlzdC5maW5kKGZsID0+IGZsLkZpZWxkTmFtZSA9PSByZWNvcmQuRmllbGROYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uVHlwZSA9PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBcIkxJS0VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLlR5cGUgPT0gJ2ludGVnZXInIHx8IGNvbHVtbi5UeXBlID09ICdudW1iZXInIHx8IGNvbHVtbi5UeXBlID09ICdib29sZWFuJyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gXCI9XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbHRlcigocHJldkZpbHRlcikgPT4gKHsgLi4ucHJldkZpbHRlciwgRmllbGROYW1lOiByZWNvcmQuRmllbGROYW1lLCBTZWFyY2hUZXh0OiAnJywgT3BlcmF0b3I6IG9wZXJhdG9yLCBUeXBlOiBjb2x1bW4uVHlwZSB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IExhYmVsPSdDb2x1bW4nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyQ3JlYXRvciBGaWx0ZXI9e2ZpbHRlcn0gQWRkaXRpb25hbEZpZWxkPXtmaWx0ZXJhYmxlTGlzdC5maW5kKGZsID0+IGZsLkZpZWxkTmFtZSA9PSBmaWx0ZXIuRmllbGROYW1lKX0gU2V0dGVyPXsocmVjb3JkKSA9PiBzZXRGaWx0ZXIocmVjb3JkKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+IGFkZEZpbHRlcigpfSA+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEZpbHRlckNyZWF0b3IgPSAocHJvcHM6IHsgQWRkaXRpb25hbEZpZWxkOiBNaU1ELkFkZGl0aW9uYWxGaWVsZCwgRmlsdGVyOiBGaWx0ZXIsIFNldHRlcjogKGZpbHRlcjogUmVhY3QuU2V0U3RhdGVBY3Rpb248RmlsdGVyPikgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWVMaXN0SXRlbXMsIHNldFZhbHVlTGlzdEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1pTUQuVmFsdWVMaXN0SXRlbT4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICgoW1wiaW50ZWdlclwiLCBcIm51bWJlclwiLCBcImJvb2xlYW5cIiwgXCJzdHJpbmdcIiwgXCJkYXRldGltZVwiXSkuaW5kZXhPZihwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZSkgPCAwKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1ZhbHVlTGlzdC9Hcm91cC8ke3Byb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlfWAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaGFuZGxlLmRvbmUoKHZsOiBBcnJheTxNaU1ELlZhbHVlTGlzdEl0ZW0+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZUxpc3RJdGVtcyh2bCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtwcm9wcy5BZGRpdGlvbmFsRmllbGRdKTtcclxuXHJcbiAgICBpZiAocHJvcHMuQWRkaXRpb25hbEZpZWxkID09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGVsc2UgaWYgKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbHVtbiB0eXBlIGlzIHN0cmluZy4gV2lsZGNhcmQgKCopIGNhbiBiZSB1c2VkIHdpdGggJ0xJS0UnIGFuZCAnTk9UIExJS0UnPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtwcm9wcy5GaWx0ZXIuT3BlcmF0b3J9IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlIGFzICdMSUtFJyB8ICdOT1QgTElLRScgfCAnPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBPcGVyYXRvcjogdmFsdWUgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0xJS0UnPkxJS0U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J05PVCBMSUtFJz5OT1QgTElLRTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPSc+PTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17cHJvcHMuRmlsdGVyLlNlYXJjaFRleHR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcigocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIFNlYXJjaFRleHQ6IHZhbHVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlID09IFwiaW50ZWdlclwiIHx8IHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlID09IFwibnVtYmVyXCIgfHwgcHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUgPT0gXCJkYXRldGltZVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2x1bW4gdHlwZSBpcyB7cHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGV9LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17cHJvcHMuRmlsdGVyLk9wZXJhdG9yfSBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZSBhcyAnPScgfCAnPD4nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBPcGVyYXRvcjogdmFsdWUgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jz0nPj08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jzw+Jz4hPTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPic+e2A+YH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jz49Jz57YD49YH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzwnPntgPGB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc8PSc+e2A8PWB9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dH0gb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWUgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgU2VhcmNoVGV4dDogdmFsdWUgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUgPT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICByZXR1cm4gPEZvcm1DaGVja0JveCBSZWNvcmQ9e3Byb3BzLkZpbHRlcn0gRmllbGQ9J1NlYXJjaFRleHQnIFNldHRlcj17KGZpbHRlcjogRmlsdGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLlNldHRlcigocHJldkZpbHRlcikgPT4gKHsgLi4ucHJldkZpbHRlciwgT3BlcmF0b3I6ICc9JywgU2VhcmNoVGV4dDogZmlsdGVyLlNlYXJjaFRleHQudG9TdHJpbmcoKSA9PSAndHJ1ZScgPyAnMSc6ICcwJyB9KSlcclxuICAgICAgICB9fSBMYWJlbD1cIkNvbHVtbiB0eXBlIGlzIGJvb2xlYW4uIFllcy9PbiBpcyBjaGVja2VkLlwiIC8+XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbHVtbiB0eXBlIGlzIGVudW1lcmFibGUuIFNlbGVjdCBmcm9tIGJlbG93LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpID48ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBzdHlsZT17eyB6SW5kZXg6IDEgfX0gb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHByZXZTZXR0ZXIgPT4gKHsgLi4ucHJldlNldHRlciwgU2VhcmNoVGV4dDogYCgke3ZhbHVlTGlzdEl0ZW1zLm1hcCh4ID0+IHguVGV4dCkuam9pbignLCcpfSlgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHByZXZTZXR0ZXIgPT4gKHsgLi4ucHJldlNldHRlciwgU2VhcmNoVGV4dDogJycgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBkZWZhdWx0VmFsdWU9J29mZicgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgPlNlbGVjdCBBbGw8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZUxpc3RJdGVtcy5tYXAodmxpID0+IDxsaSBrZXk9e3ZsaS5JRH0gPjxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPXt7IHpJbmRleDogMSB9fSBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gcHJvcHMuRmlsdGVyLlNlYXJjaFRleHQucmVwbGFjZSgnKCcsICcnKS5yZXBsYWNlKCcpJywgJycpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHggPT4geCAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCh2bGkuVGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGAoJHtsaXN0LmpvaW4oJywnKX0pYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiB0ZXh0IH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gcHJvcHMuRmlsdGVyLlNlYXJjaFRleHQucmVwbGFjZSgnKCcsICcnKS5yZXBsYWNlKCcpJywgJycpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHggPT4geCAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcih4ID0+IHggIT0gdmxpLlRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBgKCR7bGlzdC5qb2luKCcsJyl9KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHByZXZTZXR0ZXIgPT4gKHsgLi4ucHJldlNldHRlciwgU2VhcmNoVGV4dDogdGV4dCB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSB2YWx1ZT17cHJvcHMuRmlsdGVyLlNlYXJjaFRleHQuaW5kZXhPZih2bGkuVGV4dCkgPj0gMCA/ICdvbicgOiAnb2ZmJ30gY2hlY2tlZD17cHJvcHMuRmlsdGVyLlNlYXJjaFRleHQuaW5kZXhPZih2bGkuVGV4dCkgPj0gMCA/IHRydWUgOiBmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiA+e3ZsaS5UZXh0fTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbkJ5TWV0ZXI7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNS8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBDb25maWd1cmF0aW9uRmlsZUNoYW5nZXMgPSAocHJvcHM6IHsgTWV0ZXJJRDogbnVtYmVyLCBGaWxlTmFtZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtjb25maWdGaWxlcywgc2V0Q29uZmlnRmlsZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8YW55Pj4oW10pO1xyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbaHRtbCwgc2V0SHRtbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSB8fCBwcm9wcy5GaWxlTmFtZSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBnZXRDb25maWdGaWxlcygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YSkgPT4gc2V0Q29uZmlnRmlsZXMoZGF0YSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuTWV0ZXJJRCwgcHJvcHMuRmlsZU5hbWUsIGZsYWddKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29uZmlnRmlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvQ29uZmlndXJhdGlvbkZpbGVzLyR7cHJvcHMuTWV0ZXJJRH0vJHtwcm9wcy5GaWxlTmFtZX0vJHtmbGFnfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1vbSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihtb20sICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICAgcmV0dXJuICdyZWQnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheXMgPCA3KVxyXG4gICAgICAgICAgICByZXR1cm4gJ29yYW5nZSc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3llbGxvdyc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgfHwgcHJvcHMuRmlsZU5hbWUgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e3Byb3BzLkZpbGVOYW1lfSBIaXN0b3J5OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBzdHlsZT17eyB6SW5kZXg6IDEgfX0gb25DaGFuZ2U9eyhldnQpID0+IHNldEZsYWcoIWZsYWcpfSB2YWx1ZT17ZmxhZyA/ICdvbicgOiAnb2ZmJ30gY2hlY2tlZD17ZmxhZyA/IHRydWUgOiBmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgPlNob3cgRmlsZXMgdy9vIENoYW5nZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0aD5MYXN0IFdyaXRlIFRpbWU8L3RoPjx0aD4jIG9mIENoYW5nZXM8L3RoPjx0aD5GaWxlPC90aD48dGg+RGlmZjwvdGg+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpZ0ZpbGVzLm1hcCgoY2YsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBnZXRDb2xvcihjZi5MYXN0V3JpdGVUaW1lKSB9fT57bW9tZW50KGNmLkxhc3RXcml0ZVRpbWUpLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntjZi5DaGFuZ2VzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9JyNzaG93Q29udGVudCcgb25DbGljaz17KGUpID0+IHsgc2V0SHRtbChgPHA+JHtjZi5UZXh0LnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpfTwvcD5gKX19PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGVcIj48L2k+PC9zcGFuPjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9JyNzaG93Q29udGVudCcgb25DbGljaz17KGUpID0+IHsgc2V0SHRtbChjZi5IdG1sLnJlcGxhY2UoLyZwYXJhOy9nLCAnJykpO319PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWV5ZVwiPjwvaT48L3NwYW4+PC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIGlkPVwic2hvd0NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgc3R5bGU9e3ttYXhXaWR0aDogJzc1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPntwcm9wcy5GaWxlTmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5JywgZm9udFNpemU6IDE4fX1kYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uRmlsZUNoYW5nZXM7XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25maWd1cmF0aW9uRmlsZXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA1LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgQ29uZmlndXJhdGlvbkZpbGVzID0gKHByb3BzOiB7IE1ldGVySUQ6IG51bWJlciwgRmlsZU5hbWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbY29uZmlnRmlsZXMsIHNldENvbmZpZ0ZpbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PGFueT4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldENvbmZpZ0ZpbGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhKSA9PiBzZXRDb25maWdGaWxlcyhkYXRhKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklEXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZpbGVzKCkge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0NvbmZpZ3VyYXRpb25GaWxlcy8ke3Byb3BzLk1ldGVySUR9L0xhc3RXcml0ZXNgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yKGRhdGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBtb20gPSBtb21lbnQoZGF0ZSk7XHJcbiAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICAgIGxldCBkYXlzID0gbm93LmRpZmYobW9tLCAnZGF5cycpO1xyXG5cclxuICAgICAgICBpZiAoZGF5cyA8IDEpXHJcbiAgICAgICAgICAgcmV0dXJuICdyZWQnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheXMgPCA3KVxyXG4gICAgICAgICAgICByZXR1cm4gJ29yYW5nZSc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3llbGxvdyc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZmlsZU5hbWUsIGV2dCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdpbmRleC5jc2h0bWwnLCBzZWFyY2g6IGA/bmFtZT1Db25maWd1cmF0aW9uJk1ldGVySUQ9JHtwcm9wcy5NZXRlcklEfSZGaWxlTmFtZT0ke2ZpbGVOYW1lfWAsIHN0YXRlOiB7fSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+Q29uZmlndXJhdGlvbiBGaWxlczo8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0aD5GaWxlPC90aD48dGg+TGFzdCBXcml0ZSBUaW1lPC90aD48dGg+IyBvZiBDaGFuZ2VzPC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnRmlsZXMubWFwKChjZiwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kQ29sb3I6IChjZi5GaWxlTmFtZSA9PSBwcm9wcy5GaWxlTmFtZSA/ICd5ZWxsb3cnIDogbnVsbCkgfX0gb25DbGljaz17KGV2dCkgPT4gaGFuZGxlU2VsZWN0KGNmLkZpbGVOYW1lLCBldnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NmLkZpbGVOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBnZXRDb2xvcihjZi5MYXN0V3JpdGVUaW1lKX19Pnttb21lbnQoY2YuTGFzdFdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NmLkNoYW5nZXN9PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb25GaWxlcztcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBBY3Rpb25IZWFkZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE4LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgZGF0YTogUFJDMDAyLklBY3Rpb24sIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+LCBzaG93VGltZTogYm9vbGVhbiB9IFxyXG5cclxuY29uc3QgQWN0aW9uSGVhZGVyID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGxldCBpc2F1dG8gPSBwcm9wcy5kYXRhLlVzZXJBY2NvdW50ID09ICdNaU1EJztcclxuICAgIGxldCBpc0NoYW5nZSA9IHByb3BzLmRhdGEuU3RhdGVJZCAhPSBudWxsO1xyXG4gICAgbGV0IGlzTm90ZSA9ICFpc2F1dG8gJiYgIWlzQ2hhbmdlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFRTKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGF0ZVRhZyhzdGF0ZUlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgc3RhdCA9IHByb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5JRCA9PSBzdGF0ZUlkKVxyXG5cclxuICAgICAgICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyM2Yzc1N2QnIDogc3RhdC5Db2xvciksIHRleHRDb2xvcjogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyNmZmZmZmYnIDogc3RhdC5UZXh0Q29sb3IpIH19Pnsoc3RhdCA9PSB1bmRlZmluZWQgPyAnVW5rbm93bicgOiBzdGF0LkRlc2NyaXB0aW9uKX08L3NwYW4+KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb3BzLnNob3dUaW1lID8gZm9ybWF0VFMocHJvcHMuZGF0YS5UaW1lc3RhbXApICsgJzogJyA6IG51bGx9XHJcbiAgICAgICAgICAgIHtpc05vdGUgPyBwcm9wcy5kYXRhLlVzZXJBY2NvdW50ICsgJyBhZGRlZCBhIE5vdGUnIDogbnVsbH1cclxuICAgICAgICAgICAge2lzQ2hhbmdlID8gcHJvcHMuZGF0YS5Vc2VyQWNjb3VudCArICcgQ2hhbmdlZCBTdGF0dXMgdG8gJyA6IG51bGx9XHJcbiAgICAgICAgICAgIHtpc0NoYW5nZT8gc3RhdGVUYWcocHJvcHMuZGF0YS5TdGF0ZUlkKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHsoaXNhdXRvICYmICFpc0NoYW5nZSkgPyAnTWlNRCByZWNpZXZlZCBhbiB1cGRhdGVkIENvbmZpZ3VyYXRpb24gRmlsZScgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkhlYWRlcjtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBBY3Rpb25MaXN0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xOC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnksIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybVNlbGVjdCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnO1xyXG5pbXBvcnQgRm9ybUNoZWNrQm94IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUNoZWNrQm94JztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi9BY3Rpb25IZWFkZXInO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgUmVjb3JkSWQ6IG51bWJlciwgU3RhdGVMaXN0OiBBcnJheTxQUkMwMDIuSVN0YXR1cz4sIHNlbGVjdGVkQWN0aW9uOiBudW1iZXIsIHNldFNlbGVjdGVkQWN0aW9uOiAoaWQ6IG51bWJlcikgPT4gdm9pZCB9XHJcblxyXG5jb25zdCBSZWNvcmRMaXN0ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2FjdGlvbkxpc3QsIHNldEF0Y2lvbkxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklBY3Rpb24+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlQWN0aW9uTGlzdCA9IGdldEFjdGlvbnMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZUFjdGlvbkxpc3QgIT0gbnVsbCAmJiBoYW5kbGVBY3Rpb25MaXN0LmFib3J0ICE9IG51bGwpIGhhbmRsZUFjdGlvbkxpc3QuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuUmVjb3JkSWRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBY3Rpb25zKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSUFjdGlvbj4+IHtcclxuICAgICAgICBpZiAocHJvcHMuUmVjb3JkSWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQWN0aW9uP3BhcmVudElEPSR7cHJvcHMuUmVjb3JkSWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSUFjdGlvbj4pID0+IHtcclxuICAgICAgICAgICAgc2V0QXRjaW9uTGlzdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7KHByb3BzLlJlY29yZElkID4gLTEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0lEJywgbGFiZWw6ICdDb25maWd1cmF0aW9uIENoYW5nZSBIaXN0b3J5JywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8QWN0aW9uQ2FyZCBkYXRhPXtpdGVtfSBzdGF0ZUxpc3Q9e3Byb3BzLlN0YXRlTGlzdH0gb3BlbkNvbmZpZz17cHJvcHMuc2V0U2VsZWN0ZWRBY3Rpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17YWN0aW9uTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17XCJJRFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDogbnVsbCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEFjdGlvbkNhcmQgPSAocHJvcHM6IHsgZGF0YTogUFJDMDAyLklBY3Rpb24sIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+LCBvcGVuQ29uZmlnOiAoY2hhbmdlSWQ6IG51bWJlcikgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBsZXQgaGFzQ29uZmlnID0gcHJvcHMuZGF0YS5Vc2VyQWNjb3VudCA9PSAnTWlNRCc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEFjdGlvbkhlYWRlciBkYXRhPXtwcm9wcy5kYXRhfSBzdGF0ZUxpc3Q9e3Byb3BzLnN0YXRlTGlzdH0gc2hvd1RpbWU9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3Byb3BzLmRhdGEuTm90ZX08L3A+XHJcbiAgICAgICAgICAgICAgICB7aGFzQ29uZmlnID8gPCBhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4geyBwcm9wcy5vcGVuQ29uZmlnKHByb3BzLmRhdGEuSUQpOyAkKCcjY3VycmVudENvbmZpZycpLnNob3coKTsgfX0+U2hvdyBDb25maWd1cmF0aW9uPC9hPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRMaXN0O1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8yMi8yMDE5IC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0JztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ2hlY2tCb3ggZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtQ2hlY2tCb3gnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IFJlY29yZERldGFpbCBmcm9tICcuL1JlY29yZERldGFpbCc7XHJcbmltcG9ydCBBY3Rpb25MaXN0IGZyb20gJy4vQWN0aW9uTGlzdCc7XHJcblxyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5jb25zdCBQUkMwMDJDaGFuZ2VPdmVydmlld1BhZ2UgPSAocHJvcHM6IHsgUm9sZXM6IEFycmF5PE1pTUQuU2VjdXJpdHlSb2xlTmFtZT4sIFJlY29yZElkOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1c0xpc3QsIHNldFN0YXR1c0xpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklTdGF0dXM+PihbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRBY3Rpb24sIHNldFNlbGVjdGVkQWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oLTEpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVN0YXR1c0xpc3QgPSBnZXRTdGF0dXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZVN0YXR1c0xpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlU3RhdHVzTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JU3RhdHVzPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlU3RhdGUvTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklTdGF0dXM+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN0YXR1c0xpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAwLCBoZWlnaHQ6ICcyMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlY29yZERldGFpbCBzdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IFJlY29yZElEPXtwcm9wcy5SZWNvcmRJZH0gc2VsZWN0ZWRBY3Rpb249e3NlbGVjdGVkQWN0aW9ufSBzZXRTZWxlY3RlZEFjdGlvbj17c2V0U2VsZWN0ZWRBY3Rpb259Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdjYWxjKCAxMDAlIC0gMTM2cHgpJywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkxpc3QgU3RhdGVMaXN0PXtzdGF0dXNMaXN0fSBSZWNvcmRJZD17cHJvcHMuUmVjb3JkSWR9IHNlbGVjdGVkQWN0aW9uPXtzZWxlY3RlZEFjdGlvbn0gc2V0U2VsZWN0ZWRBY3Rpb249e3NldFNlbGVjdGVkQWN0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUFJDMDAyQ2hhbmdlT3ZlcnZpZXdQYWdlO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEJhc2VDb25maWcudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE3LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0Jzs7XHJcbmltcG9ydCB7IFBSQzAwMn0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IEhhc2ggfSBmcm9tICdjcnlwdG8nO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgRmllbGRMaXN0OiBBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPiwgTGFiZWw6IHN0cmluZywgSWQ6IHN0cmluZ31cclxuXHJcblxyXG5jb25zdCBGaWVsZFZhbHVlcyA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkRmllbGQsIHNldFNlbGVjdGVkRmllbGRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcblxyXG4gICAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9e3Byb3BzLklkfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPntwcm9wcy5MYWJlbH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17KCkgPT4gJCgnIycgKyBwcm9wcy5JZCkuaGlkZSgpfT4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIzNSwgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDU0MCwgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1NDAsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGaWVsZE5hbWUnLCBsYWJlbDogJ0ZpZWxkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8Rm9ybUlucHV0PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+IFJlY29yZD17aXRlbX0gRmllbGQ9eydGaWVsZE5hbWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdWYWx1ZScsIGxhYmVsOiAnVmFsdWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxGb3JtSW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J1ZhbHVlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnVmFsaWQnLCBsYWJlbDogJ1ZhbGlkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7IHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnLjM3NXJlbSAuNzVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS41cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS41IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17XCJmYSBcIiArIChpdGVtLlZhbGlkID8gXCJmYS1jaGVjay1jaXJjbGVcIiA6IFwiZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIil9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuRmllbGRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17J0ZpZWxkTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+ICQoJyMnICsgcHJvcHMuSWQpLmhpZGUoKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZFZhbHVlcztcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBSZWNvcmREZXRhaWwudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE4LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0JztcclxuaW1wb3J0IEZvcm1DaGVja0JveCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1DaGVja0JveCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgQmFzZUNvbmZpZyBmcm9tICcuLi9Db21tb24vQmFzZUNvbmZpZyc7XHJcbmltcG9ydCBNYW51YWxBY3Rpb24gZnJvbSAnLi4vQ29tbW9uL01hbnVhbEFjdGlvbic7XHJcbmltcG9ydCBGaWVsZFZhbHVlcyBmcm9tICcuL0ZpZWxkVmFsdWVzJztcclxuaW1wb3J0IENvbmZpZ1J1bGVFZGl0IGZyb20gJy4uL0NvbW1vbi9Db25maWdSdWxlRWRpdCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Db21tb24vTW9kYWwnO1xyXG5pbXBvcnQgUmVzb2x2ZVJlY29yZCBmcm9tICcuL1Jlc29sdmVSZWNvcmQnO1xyXG5pbXBvcnQgQWN0aW9uSGVhZGVyIGZyb20gJy4vQWN0aW9uSGVhZGVyJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5jb25zdCBhZGRSQVBXYXJuaW5nID0gJ1RoaXMgQWN0aW9uIGNhbiBub3QgYmUgdW5kb25lLiBUaGlzIHdpbGwgYWRkIGEgcGVybWFuZW50IENvbXBsaWFuY2UgUmVjb3JkIHRvIHRoaXMgSXNzdWUuJztcclxuY29uc3QgcmVzb2x2ZVdhcm5pbmcgPSAnVGhpcyBBY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUuIFRoaXMgd2lsbCBwZXJtYW5lbnRseSB1cGRhdGVkIHRoZSBCYXNlIENvbmZpZ3VyYXRpb24gZm9yIHRoaXMgTWV0ZXIgYW5kIFJlc29sdmUgdGhlIElzc3VlLic7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IFJlY29yZElEOiBudW1iZXIsIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+LCBzZWxlY3RlZEFjdGlvbjogbnVtYmVyLCBzZXRTZWxlY3RlZEFjdGlvbjogKGlkOiBudW1iZXIpID0+IHZvaWQgfVxyXG5cclxuY29uc3QgUmVjb3JkRGV0YWlsID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JUmVjb3JkPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW21ldGVyLCBzZXRNZXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSU1ldGVyPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQWN0aW9uPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2Jhc2VDb25maWcsIHNldEJhc2VDb25maWddID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklCYXNlQ29uZmlnPih1bmRlZmluZWQpO1xyXG4gICBcclxuICAgIGNvbnN0IFt2YWx1ZUxpc3QsIHNldFZhbHVlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPj4oW10pO1xyXG4gICAgY29uc3QgW2FsbHZhbHVlTGlzdCwgc2V0QWxsVmFsdWVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlUmVjb3JkID0gZ2V0UmVjb3JkKHByb3BzLlJlY29yZElEKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZVJlY29yZCAhPSBudWxsICYmIGhhbmRsZVJlY29yZC5hYm9ydCAhPSBudWxsKSBoYW5kbGVSZWNvcmQuYWJvcnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLlJlY29yZElEXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlRmllbGRWYXVlcyA9IGdldEZpZWxkVmFsdWVzKHByb3BzLnNlbGVjdGVkQWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZUZpZWxkVmF1ZXMgIT0gbnVsbCAmJiBoYW5kbGVGaWVsZFZhdWVzLmFib3J0ICE9IG51bGwpIGhhbmRsZUZpZWxkVmF1ZXMuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuc2VsZWN0ZWRBY3Rpb25dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVNZXRlciA9IGdldE1ldGVyKChyZWNvcmQgPT0gdW5kZWZpbmVkID8gLTEgOiByZWNvcmQuTWV0ZXJJZCkpO1xyXG4gICAgICAgIGxldCBoYW5kbGVCYXNlQ29uZmlnID0gZ2V0QmFzZUNvbmZpZygocmVjb3JkID09IHVuZGVmaW5lZCA/IC0xIDogKHJlY29yZC5CYXNlQ29uZmlnSWQgPT0gdW5kZWZpbmVkID8gLTEgOiByZWNvcmQuQmFzZUNvbmZpZ0lkKSkpO1xyXG4gICAgICAgIGxldCBoYW5kbGVBY3Rpb24gPSBnZXRMYXN0QWN0aW9uKChyZWNvcmQgPT0gdW5kZWZpbmVkID8gLTEgOiByZWNvcmQuTGFzdEFjdGlvbklEKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVNZXRlciAhPSBudWxsICYmIGhhbmRsZU1ldGVyLmFib3J0ICE9IG51bGwpIGhhbmRsZU1ldGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVCYXNlQ29uZmlnICE9IG51bGwgJiYgaGFuZGxlQmFzZUNvbmZpZy5hYm9ydCAhPSBudWxsKSBoYW5kbGVCYXNlQ29uZmlnLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVBY3Rpb24gIT0gbnVsbCAmJiBoYW5kbGVBY3Rpb24uYWJvcnQgIT0gbnVsbCkgaGFuZGxlQWN0aW9uLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JlY29yZF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZpZWxkVmFsdWVzKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlO1xyXG4gICAgICAgIGlmIChpZCA9PSAtMSlcclxuICAgICAgICAgICAgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZFZhbHVlP3BhcmVudElEPSR7cHJvcHMuUmVjb3JkSUR9YCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRmllbGRWYWx1ZS9IaXN0b3J5P3BhcmVudElEPSR7aWR9YCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgaWYgKGlkID09IC0xKVxyXG4gICAgICAgICAgICAgICAgc2V0QWxsVmFsdWVMaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZUxpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJlY29yZChpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JUmVjb3JkPiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZVJlY29yZC9PbmUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IFBSQzAwMi5JUmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIHNldFJlY29yZChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGFzdEFjdGlvbihpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JQWN0aW9uPiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQWN0aW9uL09uZS8ke2lkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogUFJDMDAyLklBY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcihpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JTWV0ZXI+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvT25lLyR7aWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBQUkMwMDIuSU1ldGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIHNldE1ldGVyKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCYXNlQ29uZmlnKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8UFJDMDAyLklCYXNlQ29uZmlnPiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQmFzZUNvbmZpZy9PTkUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IFBSQzAwMi5JQmFzZUNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICAgICBcclxuICAgICAgICAgICAgc2V0QmFzZUNvbmZpZyhkYXRhKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFRTKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBsZXQgbWV0ZXJTdGF0ID0gKG1ldGVyID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHByb3BzLnN0YXRlTGlzdC5maW5kKHMgPT4gcy5JRCA9PSBtZXRlci5TdGF0dXNJRCkpO1xyXG4gICAgbGV0IHJlY29yZFN0YXQgPSAocmVjb3JkID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHByb3BzLnN0YXRlTGlzdC5maW5kKHMgPT4gcy5JRCA9PSByZWNvcmQuU3RhdHVzKSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICB7KG1ldGVyID09IHVuZGVmaW5lZD8gbnVsbCA6XHJcbiAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHVzUm93IGxhYmVsPXsnQ29uZmlndXJhdGlvbiBDaGFuZ2UnfSBzdGF0dXM9e3JlY29yZFN0YXR9IFQ9e3JlY29yZC5UaW1lcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHVzUm93IGxhYmVsPXsnTWV0ZXIgJyArIG1ldGVyLkFzc2V0S2V5fSBzdGF0dXM9e21ldGVyU3RhdH0gVD17bWV0ZXIuVGltZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmc6IDUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gSXNzdWUgT3BlbmVkOiB7Zm9ybWF0VFMocmVjb3JkLkNyZWF0ZWQpfSBieSB7cmVjb3JkLlVzZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PiBMYXN0IEFjdGlvbiBUYWtlbjoge2Zvcm1hdFRTKHJlY29yZC5UaW1lc3RhbXApfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IExhc3QgQWN0aW9uOiB7YWN0aW9uICE9IHVuZGVmaW5lZCA/IDxBY3Rpb25IZWFkZXIgZGF0YT17YWN0aW9ufSBzdGF0ZUxpc3Q9e3Byb3BzLnN0YXRlTGlzdH0gc2hvd1RpbWU9e2ZhbHNlfSAvPiA6IG51bGx9IDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhiYXNlQ29uZmlnID09IHVuZGVmaW5lZCA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gJCgnI2Jhc2Vjb25maWcnKS5zaG93KCl9PiBCYXNlIENvbmZpZ3VyYXRpb24gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLnNldFNlbGVjdGVkQWN0aW9uKC0xKTsgJCgnI2N1cnJlbnRDb25maWcnKS5zaG93KCkgfX0+IEN1cnJlbnQgQ29uZmlndXJhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmc6IDUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+ICQoJyNOb3RlJykuc2hvdygpfT4gQWRkIENvbXBsaWFuY2UgTm90ZSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7cmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJyB8fCByZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gJCgnI1JBUCcpLnNob3coKX0+IFN1Ym1pdHQgUmVtZWRpYWwgQWN0aW9uIFBsYW4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdPdXQgT2YgQ29tcGxpYW5jZScgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gJCgnI0Fja25vd2xlZGdlJykuc2hvdygpfT4gQWNrbm93bGVkZ2UgSXNzdWUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdBY2tub3dsZWRnZWQnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+ICQoJyNSZXZpZXcnKS5zaG93KCl9PiBSZXZpZXcgSXNzdWUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gJCgnI1Jlc29sdmUnKS5zaG93KCl9PiBSZXNvbHZlIElzc3VlIC0gVXBkYXRlZCBCYXNlIENvbmZpZzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1hbnVhbEFjdGlvbiBSZWNvcmRJZD17cHJvcHMuUmVjb3JkSUR9IHN0YXRlPXtudWxsfSBBY3Rpb249eygpID0+IHsgaGlzdG9yeS5nbygwKSB9fSAvPiAgICBcclxuICAgICAgICAgICAgICAgIDxGaWVsZFZhbHVlcyBMYWJlbD17KHByb3BzLnNlbGVjdGVkQWN0aW9uID09IC0xID8gJ0N1cnJlbnQgQ29uZmlndXJhdGlvbicgOiAnUmVsYXRlZCBDb25maWd1cmF0aW9uJyl9IElkPXsnY3VycmVudENvbmZpZyd9IEZpZWxkTGlzdD17KHByb3BzLnNlbGVjdGVkQWN0aW9uID09IC0xID8gYWxsdmFsdWVMaXN0IDogdmFsdWVMaXN0KX0gLz5cclxuICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdBY2tub3dsZWRnZWQnIHx8IHJlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ1Jldmlld2VkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hbnVhbEFjdGlvbiBSZWNvcmRJZD17cHJvcHMuUmVjb3JkSUR9IHN0YXRlPXtwcm9wcy5zdGF0ZUxpc3QuZmluZChpdGVtID0+IGl0ZW0uRGVzY3JpcHRpb24gPT09ICdSQVAgU3VibWl0dGVkJyl9IEFjdGlvbj17KCkgPT4geyBoaXN0b3J5LmdvKDApIH19IC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7cmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnT3V0IE9mIENvbXBsaWFuY2UnID9cclxuICAgICAgICAgICAgICAgICAgICA8TWFudWFsQWN0aW9uIFJlY29yZElkPXtwcm9wcy5SZWNvcmRJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ0Fja25vd2xlZGdlZCcpfSBBY3Rpb249eygpID0+IHsgaGlzdG9yeS5nbygwKSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gUmVjb3JkSWQ9e3Byb3BzLlJlY29yZElEfSBzdGF0ZT17cHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLkRlc2NyaXB0aW9uID09PSAnUmV2aWV3ZWQnKX0gQWN0aW9uPXsoKSA9PiB7IGhpc3RvcnkuZ28oMCkgfX0gLz5cclxuICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvbHZlUmVjb3JkIEZpZWxkTGlzdD17YWxsdmFsdWVMaXN0LmZpbHRlcihpdGVtID0+ICFpdGVtLlZhbGlkKX0gUmVjb3JkSUQ9e3Byb3BzLlJlY29yZElEfSBzdGF0ZUxpc3Q9e3Byb3BzLnN0YXRlTGlzdH0gQ29tcGxldGU9eygpID0+IHsgaGlzdG9yeS5nbygwKTsgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHsoYmFzZUNvbmZpZyA9PSB1bmRlZmluZWQgPyBudWxsIDogPE1vZGFsIFRpdGxlPXsnSXNzdWUgQmFzZSBDb25maWd1cmF0aW9uJ30gUG9zTGFiZWw9eydDbG9zZSd9IElkPXsnYmFzZWNvbmZpZyd9IGNvbnRlbnQ9eygpID0+IDxCYXNlQ29uZmlnIEJhc2VDb25maWdMaXN0PXtbYmFzZUNvbmZpZ119IC8+fSAvPil9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5jb25zdCBTdGF0dXNSb3cgPSAocHJvcHM6IHsgc3RhdHVzOiBQUkMwMDIuSVN0YXR1cywgVDogbnVtYmVyLCBsYWJlbDogc3RyaW5nIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH0gaGFzIGJlZW4gaW5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzYwMCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzQ1JScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IChzdGF0dXMgPT0gdW5kZWZpbmVkID8gJyNmOGY5ZmEnIDogcHJvcHMuc3RhdHVzLkNvbG9yKSxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogKHN0YXR1cyA9PSB1bmRlZmluZWQgPyAnIzIxMjUyOScgOiBwcm9wcy5zdGF0dXMuVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnY2FsYyg1JSknXHJcbiAgICAgICAgICAgIH19PiB7cHJvcHMuc3RhdHVzLkRlc2NyaXB0aW9ufSA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzYwMCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzQ1JScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IChwcm9wcy5UIDwgMzAgPyAnIzI4YTc0NScgOiAnI2ZmYzEwNycpLFxyXG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiAocHJvcHMuVCA8IDMwID8gJyNmZmYnIDogJyMyMTI1MjknKSxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgfX0+IHtwcm9wcy5UfSBEYXlzPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjb3JkRGV0YWlsO1xyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgUmVzb2x2ZVJlY29yZC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMjMvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybVNlbGVjdCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnO1xyXG5pbXBvcnQgRm9ybUNoZWNrQm94IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUNoZWNrQm94JztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCBCYXNlQ29uZmlnIGZyb20gJy4uL0NvbW1vbi9CYXNlQ29uZmlnJztcclxuaW1wb3J0IE1hbnVhbEFjdGlvbiBmcm9tICcuLi9Db21tb24vTWFudWFsQWN0aW9uJztcclxuaW1wb3J0IEZpZWxkVmFsdWVzIGZyb20gJy4vRmllbGRWYWx1ZXMnO1xyXG5pbXBvcnQgQ29uZmlnUnVsZUVkaXQgZnJvbSAnLi4vQ29tbW9uL0NvbmZpZ1J1bGVFZGl0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL0NvbW1vbi9Nb2RhbCc7XHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJy4uL0NvbW1vbi9XYXJuaW5nJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IFJlY29yZElEOiBudW1iZXIsIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+LCBGaWVsZExpc3Q6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+LCBDb21wbGV0ZTogKCkgPT4gdm9pZH1cclxudHlwZSBzdGVwID0gJ05vdGUnIHwgJ0NoYW5nZSdcclxuXHJcbmNvbnN0IFJlc29sdmVSZWNvcmQgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSBSZWFjdC51c2VTdGF0ZTxzdGVwPignTm90ZScpO1xyXG4gICAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbZmllbGRJbmRleCwgc2V0RmllbGRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICAgIGNvbnN0IFt1cGRhdGVkRmxkLCBzZXRVcGRhdGVkRmxkXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+PihbXSk7XHJcblxyXG4gICAgY29uc3RbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIGZ1bmN0aW9uIENhbmNlbCgpIHtcclxuICAgICAgICBzZXRTdGVwKCdOb3RlJyk7XHJcbiAgICAgICAgc2V0RmllbGRJbmRleCgtMSk7XHJcbiAgICAgICAgc2V0Tm90ZSgnJyk7XHJcbiAgICAgICAgc2V0VXBkYXRlZEZsZChbXSlcclxuICAgICAgICAkKCcjUmVzb2x2ZScpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBOZXh0U3RlcCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoc3RlcCA9PSAnTm90ZScpIHtcclxuICAgICAgICAgICAgc2V0U3RlcCgnQ2hhbmdlJylcclxuICAgICAgICAgICAgaWYgKHByb3BzLkZpZWxkTGlzdC5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIFNhdmUoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgTG9hZEZpZWxkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBWYWxpZGF0ZUZpZWxkKClcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBMb2FkRmllbGQoKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkSW5kZXggPT0gdXBkYXRlZEZsZC5sZW5ndGggLSAxIClcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC9PbmUvJHtwcm9wcy5GaWVsZExpc3RbZmllbGRJbmRleCArIDFdLkZpZWxkSWR9YCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgc2V0VXBkYXRlZEZsZCgoYXJyYXkpID0+IFsuLi5hcnJheSwgZGF0YV0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRJbmRleCgoaW5kZXgpID0+IGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZXRGaWVsZEluZGV4KChpbmRleCkgPT4gaW5kZXggKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBQcmV2U3RlcCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoc3RlcCA9PSAnTm90ZScpXHJcbiAgICAgICAgICAgICQoJyNSZXNvbHZlV2FybmluZycpLnNob3coKTtcclxuICAgICAgICBlbHNlIGlmIChmaWVsZEluZGV4ID09IDApXHJcbiAgICAgICAgICAgIHNldFN0ZXAoJ05vdGUnKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0RmllbGRJbmRleCgoaW5kZXgpID0+IGluZGV4IC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdOb3RlJylcclxuICAgICAgICAgICAgcmV0dXJuICdSZXNvbHZlIElzc3VlJ1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuICdDaGFuZ2UgQmFzZSBDb25maWd1cmF0aW9uJ1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFZhbGlkYXRlRmllbGQoKSB7XHJcbiAgICAgICAgLy8gVmFsaWRhdGlvbiBmb3IgVHlwZSBMYXRlclxyXG5cclxuICAgICAgICAvLyBWYWxpZGF0aW9uIHRvIG1ha2Ugc3VyZSBDb25maWcgaXMgT2sgTm93LlxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC9DaGVjay8ke3Byb3BzLkZpZWxkTGlzdFtmaWVsZEluZGV4XS5WYWx1ZX1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRGbGRbZmllbGRJbmRleF0gYXMgUFJDMDAyLklDb25maWdGaWVsZCksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsIHx8ICFkYXRhKSBcclxuICAgICAgICAgICAgICAgICQoJyNSdWxlVmFsdWVFcnJvcicpLnNob3coKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRJbmRleCA9PSAocHJvcHMuRmllbGRMaXN0Lmxlbmd0aC0xKSkgXHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgICAgICBMb2FkRmllbGQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU2F2ZSgpIHtcclxuICAgICAgICAkKCcjUmVzb2x2ZUNvZmlybScpLnNob3coKTtcclxuICAgICAgICAvL1NhdmUgVGhlIEZpZWxkcyBhbmQgQWRkIEEgU3RhdGVcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBDb25maXJtZWQocmVzdWx0OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdXBkYXRlZEZsZC5mb3JFYWNoKGl0ZW0gPT4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC9VcGRhdGVgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGl0ZW0pLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0FjdGlvbi9BZGRgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgTm90ZTogbm90ZSwgU3RhdGVJZDogcHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLkRlc2NyaXB0aW9uID09ICdJbiBDb21wbGlhbmNlJykuSUQsIFJlY29yZElkOiBwcm9wcy5SZWNvcmRJRCB9IGFzIFBSQzAwMi5JQWN0aW9uKSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiBwcm9wcy5Db21wbGV0ZSgpKVxyXG5cclxuICAgICAgICBDYW5jZWwoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU2V0RmllbGQoaW5kZXg6IG51bWJlciwgcmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICBzZXRVcGRhdGVkRmxkKChmbGQpID0+IHsgbGV0IHVwZGF0ZSA9IF8uY2xvbmVEZWVwKGZsZCk7IHVwZGF0ZVtmaWVsZEluZGV4XSA9IHJlY29yZDsgcmV0dXJuIHVwZGF0ZTsgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb250ZW50KCkge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdOb3RlJylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Tm90ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9ezR9IHZhbHVlPXtub3RlfSBvbkNoYW5nZT17KGUpID0+IHNldE5vdGUoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gPENvbmZpZ1J1bGVFZGl0IGVkaXRUeXBlPXtmYWxzZX0gU2V0dGVyPXsocmVjb3JkKSA9PiBTZXRGaWVsZChmaWVsZEluZGV4LCByZWNvcmQpfSBGaWVsZFZhbHVlPXsoZmllbGRJbmRleCA+IC0xID8gcHJvcHMuRmllbGRMaXN0W2ZpZWxkSW5kZXhdIDogdW5kZWZpbmVkKX0gRmllbGQ9eyhmaWVsZEluZGV4ID4gLTEgPyB1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdIDogdW5kZWZpbmVkKX0gLz5cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsIElkPXsnUmVzb2x2ZSd9IFRpdGxlPXtnZXRUaXRsZSgpfSBOZWdMYWJlbD17KHN0ZXAgPT0gJ05vdGUnID8gJ0NhbmNlbCcgOiAnQmFjaycpfSBQb3NMYWJlbD17KGZpZWxkSW5kZXggPT0gcHJvcHMuRmllbGRMaXN0Lmxlbmd0aCAtIDEgPyAnU2F2ZScgOiAnTmV4dCcpfSBjb250ZW50PXsoKSA9PiBnZXRDb250ZW50KCl9IENsb3NlPXtQcmV2U3RlcH0gQ29uZmlybT17TmV4dFN0ZXB9IENhbmNlbD17KCkgPT4geyAkKCcjUmVzb2x2ZVdhcm5pbmcnKS5zaG93KCk7IHJldHVybiBmYWxzZTt9fS8+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnQ2FuY2VsJ30gQ29udGVudD17J1dhcm5pbmcgYWxsIENoYW5nZXMgd2lsbCBiZSBsb3N0IGFuZCB0aGUgbmV3IGJhc2UgY29uZmlndXJhdGlvbiB3aWxsIG5vdCBiZSBhcHBsaWVkJ30gQ29uZmlybT17J0JhY2snfSBEZW55PXsnQ2FuY2VsJ30gSWQ9J1Jlc29sdmVXYXJuaW5nJyBBY3Rpb249eyhyZXN1bHQpID0+IHsgaWYgKCFyZXN1bHQpIENhbmNlbCgpOyB9fSAvPlxyXG4gICAgICAgICAgICA8V2FybmluZyBUaXRsZT17J0ludmFsaWQgQmFzZSBDb25maWcnfSBDb250ZW50PXsnVGhlIG5ldyBCYXNlIENvbmZpZ3VyYXRpb24gaGFzIHRvIGFsbG93IHRoZSBjdXJyZW50IENvbmZpZ3VyYXRpb24nfSBDb25maXJtPXsnT0snfSBJZD0nUnVsZVZhbHVlRXJyb3InIEFjdGlvbj17KHJlc3VsdCkgPT4geyB9fSAvPlxyXG4gICAgICAgICAgICA8V2FybmluZyBUaXRsZT17J1dhcm5pbmcnfSBDb250ZW50PXsnVGhpcyB3aWxsIGNoYW5nZSB0aGUgQmFzZSBDb25maWd1cmF0aW9uIGZvciB0aGlzIG1ldGVyIGFuZCBjYW4gbm90IGJlIHVuZG9uZS4gQSBwZXJtYW5lbnQgY29tcGxpYW5jZSByZWNvcmQgd2lsbCBiZSBjcmVhdGVkJ30gQ29uZmlybT17J1Byb2NlZWQnfSBEZW55PXsnQ2FuY2VsJ30gSWQ9J1Jlc29sdmVDb2Zpcm0nIEFjdGlvbj17KHJlc3VsdCkgPT4geyBDb25maXJtZWQocmVzdWx0KSB9fSAvPlxyXG4gICAgICAgIDwvPilcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc29sdmVSZWNvcmQ7XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBCYXNlQ29uZmlnLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xNy8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0JztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dCc7O1xyXG5pbXBvcnQgeyBQUkMwMDJ9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBIYXNoIH0gZnJvbSAnY3J5cHRvJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IEJhc2VDb25maWdMaXN0OiBBcnJheTxQUkMwMDIuSUJhc2VDb25maWc+LCBnZXRGaWVsZExpc3Q/OiAoaW5kZXg6IG51bWJlcikgPT4gQXJyYXk8UFJDMDAyLklDb25maWdGaWVsZD4sIG9uRWRpdD86IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpID0+IHZvaWQsIG9uTmV3PzogKGlkOiBudW1iZXIpID0+IHZvaWQgfVxyXG5cclxuXHJcbmNvbnN0IEJhc2VDb25maWcgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtiYXNlQ29uZmlnVGFiLCBzZXRCYXNlQ29uZmlnVGFiXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oKHByb3BzLkJhc2VDb25maWdMaXN0Lmxlbmd0aCA+IDAgPyBwcm9wcy5CYXNlQ29uZmlnTGlzdFswXS5JRCA6IC0xKSk7XHJcbiAgICBjb25zdCBbZmllbGRMaXN0LCBzZXRGaWVsZExpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklDb25maWdGaWVsZD4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwcm9wcy5CYXNlQ29uZmlnTGlzdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBzZXRCYXNlQ29uZmlnVGFiKHByb3BzLkJhc2VDb25maWdMaXN0WzBdLklEKTtcclxuICAgIH0sIFtwcm9wcy5CYXNlQ29uZmlnTGlzdF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmdldEZpZWxkTGlzdCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZUZpZWxkTGlzdCA9IGdldEZpZWxkTGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVGaWVsZExpc3QgIT0gbnVsbCAmJiBoYW5kbGVGaWVsZExpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlRmllbGRMaXN0LmFib3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEZpZWxkTGlzdChwcm9wcy5nZXRGaWVsZExpc3QoYmFzZUNvbmZpZ1RhYikpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Jhc2VDb25maWdUYWJdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGaWVsZExpc3QoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JQmFzZUNvbmZpZz4+IHtcclxuICAgICAgICBpZiAoYmFzZUNvbmZpZ1RhYiA9PSAtMSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0ZpZWxkP3BhcmVudElEPSR7YmFzZUNvbmZpZ1RhYn1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgc2V0RmllbGRMaXN0KGRhdGEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Byb3BzLkJhc2VDb25maWdMaXN0Lmxlbmd0aCA+IDE/XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLkJhc2VDb25maWdMaXN0Lm1hcCgoaXRlbSxpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmtcIiArIChiYXNlQ29uZmlnVGFiID09IGl0ZW0uSUQgPyBcIiBhY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXsoKSA9PiBzZXRCYXNlQ29uZmlnVGFiKGl0ZW0uSUQpfSBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9e1wiI0Jhc0NvbmZpZy1cIiArIGl0ZW0uTmFtZX0+e2l0ZW0uTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+IDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMzUsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLkJhc2VDb25maWdMaXN0Lm1hcCgoaXRlbSxpbmRleCkgPT4gPENvbmZpZ3VyYXRpb253aW5kb3cga2V5PXtpbmRleH0gYWN0aXZlPXtpdGVtLklEID09IGJhc2VDb25maWdUYWJ9IGNvbmZpZ3VyYXRpb249e2l0ZW19IEZpZWxkcz17ZmllbGRMaXN0fSBoYXNIZWFkZXI9e3Byb3BzLkJhc2VDb25maWdMaXN0Lmxlbmd0aCA+IDF9IG9uRWRpdD17cHJvcHMub25FZGl0fSAvPil9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3Byb3BzLm9uTmV3ICE9IHVuZGVmaW5lZCA/IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbk5ldyhiYXNlQ29uZmlnVGFiKX0+QWRkIG5ldyBGaWVsZCA8L2J1dHRvbj4gOiBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlnUHJvcHMgeyBjb25maWd1cmF0aW9uOiBQUkMwMDIuSUJhc2VDb25maWcsIGFjdGl2ZTogYm9vbGVhbiwgRmllbGRzOiBBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiwgaGFzSGVhZGVyOiBib29sZWFuLCBvbkVkaXQ/OiAocmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSA9PiB2b2lkfVxyXG5jb25zdCBDb25maWd1cmF0aW9ud2luZG93ID0gKHByb3BzOiBDb25maWdQcm9wcykgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtwcm9wcy5jb25maWd1cmF0aW9uLklEfSBjbGFzc05hbWU9eyhwcm9wcy5oYXNIZWFkZXIgPyBcInRhYi1wYW5lIFwiICsgKHByb3BzLmFjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJmYWRlXCIpIDogXCJcIil9IGlkPXtcIiNCYXNDb25maWctXCIgKyBwcm9wcy5jb25maWd1cmF0aW9uLk5hbWV9ID5cclxuICAgICAgICAgICAgPGRpdiBrZXk9ezJ9IGNsYXNzTmFtZT17cHJvcHMuaGFzSGVhZGVyID8gXCJjYXJkXCIgOiBcIlwifSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmhhc0hlYWRlciA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9ezB9IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND4gQ29uZmlndXJhdGlvbiB7cHJvcHMuY29uZmlndXJhdGlvbi5OYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsxfSBjbGFzc05hbWU9e3Byb3BzLmhhc0hlYWRlciA/IFwiY2FyZC1ib2R5XCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17M30gc3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1NDAsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTQwLCBvdmVyZmxvd1k6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dDxQUkMwMDIuSUJhc2VDb25maWc+IFJlY29yZD17cHJvcHMuY29uZmlndXJhdGlvbn0gRmllbGQ9eydQYXR0ZXJuJ30gU2V0dGVyPXsoKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSBMYWJlbD17J0ZpbGUgUGF0dGVybid9IERpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ0ZpZWxkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8Rm9ybUlucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydOYW1lJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRmllbGRUeXBlJywgbGFiZWw6ICdUeXBlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8Rm9ybUlucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydGaWVsZFR5cGUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdDb21wYXJpc29uJywgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxGb3JtSW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0NvbXBhcmlzb24nfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdWYWx1ZScsIGxhYmVsOiAnVmFsdWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxGb3JtSW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J1ZhbHVlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnSUQnLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAocHJvcHMub25FZGl0ID09IHVuZGVmaW5lZCA/ICcwcHgnIDogJ2F1dG8nKSB9LCByb3dTdHlsZTogeyB3aWR0aDogKHByb3BzLm9uRWRpdCA9PSB1bmRlZmluZWQgPyAnMHB4JyA6ICdhdXRvJykgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IChwcm9wcy5vbkVkaXQgPT0gdW5kZWZpbmVkID8gbnVsbCA6IDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTZweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gb25DbGljaz17KCkgPT4gcHJvcHMub25FZGl0KGl0ZW0pfT48aSBzdHlsZT17eyBjb2xvcjogJyMwMDdCRkYnIH19IGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbC1zcXVhcmUgZmEtM3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+KSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5GaWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9eydOYW1lJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGQpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VDb25maWc7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQmFzZUNvbmZpZy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTcvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybVNlbGVjdCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnOztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJy4vV2FybmluZyc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBGaWVsZDogUFJDMDAyLklDb25maWdGaWVsZCwgZWRpdFR5cGU6IGJvb2xlYW4sIFNldHRlcjogKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkgPT4gdm9pZCwgRmllbGRWYWx1ZT86IFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXMgfVxyXG5cclxuXHJcbmNvbnN0IENvbmZpZ1J1bGVFZGl0ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBGaWVsZFR5cGVPcHRpb25zID0gW3sgVmFsdWU6ICdzdHJpbmcnLCBMYWJlbDogJ1RleHQnIH0sIHsgVmFsdWU6ICdudW1iZXInLCBMYWJlbDogJ051bWJlcicgfV07XHJcbiAgICBjb25zdCBOdW1iZXJDaGVja3MgPSBbeyBWYWx1ZTogJz0nLCBMYWJlbDogJz0nIH0sIHsgVmFsdWU6ICc8PicsIExhYmVsOiAnPD4nIH0sIHsgVmFsdWU6ICc+JywgTGFiZWw6ICc+JyB9LCB7IFZhbHVlOiAnPCcsIExhYmVsOiAnPCcgfV07XHJcbiAgICBjb25zdCBUZXh0Q2hlY2tzID0gW3sgVmFsdWU6ICc9JywgTGFiZWw6ICc9JyB9LCB7IFZhbHVlOiAnPD4nLCBMYWJlbDogJzw+JyB9LCB7IFZhbHVlOiAnSU4nLCBMYWJlbDogJ0luJyB9XTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIHsocHJvcHMuRmllbGQgPT0gdW5kZWZpbmVkID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5GaWVsZFZhbHVlICE9IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4gUmVjb3JkPXtwcm9wcy5GaWVsZFZhbHVlfSBGaWVsZD17J1ZhbHVlJ30gU2V0dGVyPXsoKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSBMYWJlbD17J0N1cnJlbnQgVmFsdWUnfSBEaXNhYmxlZD17IXByb3BzLmVkaXRUeXBlfSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TZWxlY3Q8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydGaWVsZFR5cGUnfSBPcHRpb25zPXtGaWVsZFR5cGVPcHRpb25zfSBMYWJlbD17J0ZpZWxkIFR5cGUnfSBEaXNhYmxlZD17IXByb3BzLmVkaXRUeXBlfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5GaWVsZFR5cGUgIT09IHByb3BzLkZpZWxkLkZpZWxkVHlwZSAmJiByZWNvcmQuQ29tcGFyaXNvbiAhPSAnPD4nICYmIHJlY29yZC5Db21wYXJpc29uICE9ICc9JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC5Db21wYXJpc29uID0gJz0nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydOYW1lJ30gU2V0dGVyPXsoKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSBMYWJlbD17J0N1cnJlbnQgUnVsZSd9IERpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2VsZWN0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnQ29tcGFyaXNvbid9IE9wdGlvbnM9eyhwcm9wcy5GaWVsZC5GaWVsZFR5cGUgPT0gJ251bWJlcicgPyBOdW1iZXJDaGVja3MgOiBUZXh0Q2hlY2tzKX0gTGFiZWw9eycnfSBEaXNhYmxlZD17ZmFsc2V9IFNldHRlcj17KHJlY29yZCkgPT4geyBwcm9wcy5TZXR0ZXIocmVjb3JkKSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsocHJvcHMuRmllbGQuQ29tcGFyaXNvbiA9PSAnSU4nID8gPE11bHRpSW5wdXRGaWVsZCBkYXRhPXtwcm9wcy5GaWVsZH0gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IC8+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnVmFsdWUnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgcHJvcHMuU2V0dGVyKHJlY29yZCkgfX0gVmFsaWQ9eygpID0+IHRydWV9IExhYmVsPXsnJ30gRGlzYWJsZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz4pXHJcbn1cclxuXHJcbmNvbnN0IE11bHRpSW5wdXRGaWVsZCA9IChwcm9wczogeyBkYXRhOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkLCBTZXR0ZXI6IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW2xpc3RWYWx1ZXMsIHNldExpc3RWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8c3RyaW5nPj4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TGlzdFZhbHVlcyhwcm9wcy5kYXRhLlZhbHVlLnNwbGl0KCc7JykpXHJcbiAgICB9LCBbcHJvcHMuZGF0YV0pXHJcblxyXG4gICAgZnVuY3Rpb24gU2V0KGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZWMgPSBfLmNsb25lRGVlcChwcm9wcy5kYXRhKTtcclxuICAgICAgICBsZXQgbHN0ID0gXy5jbG9uZShsaXN0VmFsdWVzKTtcclxuICAgICAgICBsc3RbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgcmVjLlZhbHVlID0gbHN0LmpvaW4oJzsnKTtcclxuICAgICAgICBwcm9wcy5TZXR0ZXIocmVjKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEFkZE5ldygpIHtcclxuICAgICAgICBsZXQgcmVjID0gXy5jbG9uZURlZXAocHJvcHMuZGF0YSk7XHJcbiAgICAgICAgbGV0IGxzdCA9IF8uY2xvbmUobGlzdFZhbHVlcyk7XHJcbiAgICAgICAgbHN0LnB1c2goKHByb3BzLmRhdGEuRmllbGRUeXBlID09ICdzdHJpbmcnPyAnVmFsdWUnIDogJzAnKSlcclxuICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgIHByb3BzLlNldHRlcihyZWMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgIGxzdC5zcGxpY2UoaW5kZXgsMSlcclxuICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgIHByb3BzLlNldHRlcihyZWMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAge2xpc3RWYWx1ZXMubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtpbmRleCA9PSAwID8gPGxhYmVsPlZhbHVlczwvbGFiZWw+IDogbnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7IFNldChpbmRleCwgZXZ0LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpIH19IHZhbHVlPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgb25DbGljaz17KCkgPT4gQWRkTmV3KCl9PiBBZGQgPC9idXR0b24+XHJcbiAgICA8Lz4pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IENvbmZpZ1J1bGVFZGl0O1xyXG4gICAgXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNYW51YWxBY3Rpb24udHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE4LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0Jzs7XHJcbmltcG9ydCB7IFBSQzAwMn0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IEhhc2ggfSBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJy4vV2FybmluZyc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxudHlwZSBBY3Rpb24gPSAnQWNrbm93bGVkZ2UnIHwgJ1JldmlldycgfCAnTm90ZScgfCAnQ3JlYXRlIFJlY29yZCcgfCAnQ3JlYXRlIFJBUCdcclxuaW50ZXJmYWNlIElQcm9wcyB7IEFjdGlvbjogKCkgPT4gdm9pZCwgUmVjb3JkSWQ/OiBudW1iZXIsIE1ldGVySWQ/OiBudW1iZXIsIHN0YXRlOiBQUkMwMDIuSVN0YXR1c31cclxuXHJcblxyXG5jb25zdCBNYW51YWxBY3Rpb24gPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbVG9mZnNldCwgc2V0VG9mZnNldF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldElkKCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiAnTm90ZSdcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnQWNrbm93bGVkZ2UnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnUmV2aWV3J1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnUkFQIFN1Ym1pdHRlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnUkFQJ1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnT3V0IE9mIENvbXBsaWFuY2UnKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0NyZWF0ZVJlY29yZCdcclxuICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0FkZCBDb21wbGlhbmNlIE5vdGUnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdBY2tub3dsZWRnZWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0Fja25vd2xlZGdlIEFsZXJ0J1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnUmV2aWV3ZWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gJ1JldmlldyBBbGVydCdcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ1JBUCBTdWJtaXR0ZWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0NyZWF0ZSBSZW1lZGlhbCBBY3Rpb24gUGxhbidcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ091dCBPZiBDb21wbGlhbmNlJylcclxuICAgICAgICAgICAgcmV0dXJuICdTdWJtaXR0IENvbXBsaWFuY2UgSXNzdWUnXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJ0bigpIHtcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0FkZCBOb3RlJ1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdBY2tub3dsZWRnZWQgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnUmV2aWV3ZWQgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSQVAgU3VibWl0dGVkJylcclxuICAgICAgICAgICAgcmV0dXJuICdDcmVhdGUgUmVtZWRpYWwgQWN0aW9uIFBsYW4nXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdPdXQgT2YgQ29tcGxpYW5jZScpXHJcbiAgICAgICAgICAgIHJldHVybiAnU3VibWl0dCdcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbmZpcm0oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzdWJtaXR0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnIycgKyBnZXRJZCgpICsgJy13YXJuaW5nJykuc2hvdygpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXR0KCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5SZWNvcmRJZCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRSZWNvcmQoKTtcclxuICAgICAgICBpZiAocHJvcHMuTWV0ZXJJZCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRNZXRlcigpXHJcblxyXG4gICAgICAgIHNldE5vdGUoXCJcIik7XHJcbiAgICAgICAgc2V0VG9mZnNldCgwKTtcclxuICAgICAgICAkKCcjJyArIGdldElkKCkpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXR0UmVjb3JkKCkge1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSB7IE5vdGU6IG5vdGUsIFN0YXRlSWQ6IG51bGwsIFJlY29yZElkOiBwcm9wcy5SZWNvcmRJZCB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYWN0aW9uLlN0YXRlSWQgPSBwcm9wcy5zdGF0ZS5JRDtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0FjdGlvbi9BZGRgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGFjdGlvbiBhcyBQUkMwMDIuSUFjdGlvbiksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4gcHJvcHMuQWN0aW9uKCkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0dE1ldGVyKCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnT3V0IE9mIENvbXBsaWFuY2UnKVxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlUmVjb3JkL0FkZGAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IE1ldGVySWQ6IHByb3BzLk1ldGVySWQsIFRpbWVyT2Zmc2V0OiBUb2Zmc2V0LCBTdGF0dXM6IHByb3BzLnN0YXRlLklELCBOb3RlOiBub3RlIH0pLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSA9PiBoaXN0b3J5LmdvKDApKSlcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VNZXRlci9SQVBTdWJtaXR0YCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgbWV0ZXJJZDogcHJvcHMuTWV0ZXJJZCwgTm90ZTogbm90ZSB9KSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEgPT4gaGlzdG9yeS5nbygwKSkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsIElkPXtnZXRJZCgpfSBUaXRsZT17Z2V0VGl0bGUoKX0gQ29uZmlybT17Y29uZmlybX0gY29udGVudD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnN0YXRlICE9IHVuZGVmaW5lZCAmJiBwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnT3V0IE9mIENvbXBsaWFuY2UnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByb3dzPXs0fSB2YWx1ZT17bm90ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKChlLnRhcmdldCBhcyBhbnkpLnZhbHVlKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EYXlzIG91dCBvZiBDb21wbGlhbmNlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT17J251bWJlcid9IHZhbHVlPXtUb2Zmc2V0fSBvbkNoYW5nZT17KGUpID0+IHNldFRvZmZzZXQocGFyc2VJbnQoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUgYXMgc3RyaW5nKSl9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9ezR9IHZhbHVlPXtub3RlfSBvbkNoYW5nZT17KGUpID0+IHNldE5vdGUoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgfX0gUG9zTGFiZWw9e2dldEJ0bigpfSBOZWdMYWJlbD17J0NhbmNlbCd9IENsb3NlPXsoKSA9PiB7IHNldE5vdGUoJycpOyBzZXRUb2Zmc2V0KDApOyByZXR1cm4gdHJ1ZTsgfX0gLz5cclxuICAgICAgICAgICAge3Byb3BzLnN0YXRlICE9IHVuZGVmaW5lZCA/IDxXYXJuaW5nIElkPXtnZXRJZCgpICsgJy13YXJuaW5nJ30gVGl0bGU9eydXYXJuaW5nJ30gQ29udGVudD17J1RoaXMgYWN0aW9uIGNhbiBub3QgYmUgdW5kb25lLiBJdCB3aWxsIGNyZWF0ZSBhIHBlcm1hbmVudCBjb21wbGlhbmNlIHJlY29yZC4nfSBDb25maXJtPXsnUHJvY2VlZCd9IERlbnk9eydDYW5jZWwnfSBBY3Rpb249eyhyZXN1bHQpID0+IHsgaWYgKHJlc3VsdCkgc3VibWl0dCgpOyB9fSAvPiA6IG51bGx9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbnVhbEFjdGlvbjtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBCYXNlQ29uZmlnLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xNy8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0JztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dCc7O1xyXG5pbXBvcnQgeyBQUkMwMDJ9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBIYXNoIH0gZnJvbSAnY3J5cHRvJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBjb250ZW50OiAoKSA9PiBKU1guRWxlbWVudCwgVGl0bGU6IHN0cmluZywgSWQ6IHN0cmluZywgUG9zTGFiZWw/OiBzdHJpbmcsIE5lZ0xhYmVsPzogc3RyaW5nLCBDbG9zZT86ICgpID0+IGJvb2xlYW4sIENvbmZpcm0/OiAoKSA9PiBib29sZWFuLCBDYW5jZWw/OiAoKSA9PiBib29sZWFuIH1cclxuXHJcblxyXG5jb25zdCBNb2RhbCA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIENvbmZpcm0oKSB7XHJcbiAgICAgICAgaWYgKHByb3BzLkNvbmZpcm0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5Db25maXJtKCkpXHJcbiAgICAgICAgICAgICAgICAkKCcjJyArIHByb3BzLklkKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgJCgnIycgKyBwcm9wcy5JZCkuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gQ2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHByb3BzLkNsb3NlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMuQ2xvc2UoKSlcclxuICAgICAgICAgICAgICAgICQoJyMnICsgcHJvcHMuSWQpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAkKCcjJyArIHByb3BzLklkKS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQ2FuY2VsKCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5DYW5jZWwgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5DYW5jZWwoKSlcclxuICAgICAgICAgICAgICAgICQoJyMnICsgcHJvcHMuSWQpLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwcm9wcy5DbG9zZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLkNsb3NlKCkpXHJcbiAgICAgICAgICAgICAgICAkKCcjJyArIHByb3BzLklkKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICQoJyMnICsgcHJvcHMuSWQpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9e3Byb3BzLklkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57cHJvcHMuVGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuQ2xvc2UgIT0gdW5kZWZpbmVkIHx8IHByb3BzLkNhbmNlbCAhPSB1bmRlZmluZWQgPyA8IGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+IENhbmNlbCgpfT4mdGltZXM7PC9idXR0b24+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNvbnRlbnQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuUG9zTGFiZWwgPT0gdW5kZWZpbmVkID8gbnVsbCA6IDwgYnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtDb25maXJtfT57cHJvcHMuUG9zTGFiZWx9PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5OZWdMYWJlbCA9PSB1bmRlZmluZWQgPyBudWxsIDogPCBidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXtDbG9zZX0+e3Byb3BzLk5lZ0xhYmVsfTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBXYXJuaW5nLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8yMy8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IFRpdGxlOiBzdHJpbmcsIENvbnRlbnQ6IHN0cmluZywgQ29uZmlybTogc3RyaW5nLCBBY3Rpb246IChyZXN1bHQ6IGJvb2xlYW4pID0+IHZvaWQsIElkOiBzdHJpbmcsIERlbnk/OiBzdHJpbmcgfVxyXG5cclxuXHJcbmNvbnN0IFdhcm5pbmcgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgXHJcbiAgXHJcbiAgICBmdW5jdGlvbiBjb25maXJtV2FybmluZygpIHtcclxuICAgICAgICAkKCcjJyArIHByb3BzLklkKS5oaWRlKCk7XHJcbiAgICAgICAgcHJvcHMuQWN0aW9uKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbmNlbFdhcm5pbmcoKSB7XHJcbiAgICAgICAgJCgnIycgKyBwcm9wcy5JZCkuaGlkZSgpO1xyXG4gICAgICAgIHByb3BzLkFjdGlvbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9e3Byb3BzLklkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3Byb3BzLlRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9wcy5Db250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoKSA9PiBjb25maXJtV2FybmluZygpfT57cHJvcHMuQ29uZmlybX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLkRlbnkgPT0gdW5kZWZpbmVkID8gbnVsbCA6IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXsoKSA9PiBjYW5jZWxXYXJuaW5nKCkgfT57cHJvcHMuRGVueX08L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhcm5pbmc7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTWV0ZXJEZXRhaWwudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzA0LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0JztcclxuaW1wb3J0IEZvcm1DaGVja0JveCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1DaGVja0JveCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgQmFzZUNvbmZpZyBmcm9tICcuLi9Db21tb24vQmFzZUNvbmZpZyc7XHJcbmltcG9ydCBNYW51YWxBY3Rpb24gZnJvbSAnLi4vQ29tbW9uL01hbnVhbEFjdGlvbic7XHJcbmltcG9ydCBOZXdNZXRlcldpenphcmQgZnJvbSAnLi4vTWV0ZXJXaXp6YXJkL05ld01ldGVyV2l6emFyZCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Db21tb24vTW9kYWwnO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBNZXRlcklEOiBudW1iZXIsIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+IH1cclxuXHJcbmNvbnN0IE1ldGVyRGV0YWlsID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtiYXNlQ29uZmlnTGlzdCwgc2V0QmFzZUNvbmZpZ0xpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPj4oW10pO1xyXG4gICAgY29uc3QgW21ldGVyLCBzZXRNZXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSU1ldGVyPih1bmRlZmluZWQpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZUJhc2VDb25maWdMaXN0ID0gZ2V0QmFzZUNvbmZpZ3MocHJvcHMuTWV0ZXJJRCk7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1ldGVyID0gZ2V0TWV0ZXIocHJvcHMuTWV0ZXJJRCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVCYXNlQ29uZmlnTGlzdCAhPSBudWxsICYmIGhhbmRsZUJhc2VDb25maWdMaXN0LmFib3J0ICE9IG51bGwpIGhhbmRsZUJhc2VDb25maWdMaXN0LmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVNZXRlciAhPSBudWxsICYmIGhhbmRsZU1ldGVyLmFib3J0ICE9IG51bGwpIGhhbmRsZU1ldGVyLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcihpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JTWV0ZXI+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvT25lLyR7aWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBQUkMwMDIuSU1ldGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIHNldE1ldGVyKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QmFzZUNvbmZpZ3MoaWQ6IG51bWJlcik6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSUJhc2VDb25maWc+PiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQmFzZUNvbmZpZz9wYXJlbnRJRD0ke2lkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICBzZXRCYXNlQ29uZmlnTGlzdChkYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvL0xpc3Qgb2YgQnV0dG9ucyB0aGF0IGFyZSByZWxldmFudDpcclxuICAgIC8vIEVkaXQgQmFzZSBDb25maWdcclxuICAgIC8vIERlYWN0aXZhdGUgTWV0ZXJcclxuICAgIC8vIFN1Ym1pdHQgUkFQID0+IEZvciBub3cgdGhpcyB3aWxsIG9ubHkgYWRkIGEgc3RhdGUgbm90IGFjdHVhbGx5IGRvIGFueXRoaW5nXHJcblxyXG4gICAgbGV0IHN0YXQgPSAobWV0ZXIgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcHJvcHMuc3RhdGVMaXN0LmZpbmQocyA9PiBzLklEID09IG1ldGVyLlN0YXR1c0lEKSk7XHJcbiAgICBsZXQgbGJsU3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjMDAwMDAwJyA6IHN0YXQuQ29sb3IpLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgdGV4dENvbG9yOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnIzAwMDAwMCcgOiBzdGF0LlRleHRDb2xvciksXHJcbiAgICAgICAgaGVpZ2h0OiAnMjVweCdcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7bWV0ZXIgIT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4ubGJsU3R5bGUsIG1hcmdpblRvcDogJzUwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ldGVyIG5vdCBpbiBDb21wbGlhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJ3h4LWxhcmdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IChtZXRlci5UaW1lciA8IDMwID8gJyMyOGE3NDUnIDogJyNmZmMxMDcnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IChtZXRlci5UaW1lciA8IDMwID8gJyNmZmYnIDogJyMyMTI1MjknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsobWV0ZXIuU3RhdHVzID09ICdJbiBDb21wbGlhbmNlJyA/IDAgOiBtZXRlci5UaW1lcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtsYmxTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF5c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiB7ICQoJyNOZXdNZXRlcicpLnNob3coKSB9fT4gQWRkIE5ldyBNZXRlciB0byBQUkMwMDIgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge21ldGVyICE9IHVuZGVmaW5lZCA/IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiAkKCcjYmFzZWNvbmZpZycpLnNob3coKX0+IE1ldGVyIENvbmZpZ3VyYXRpb24gPC9idXR0b24+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7bWV0ZXIgIT0gdW5kZWZpbmVkID8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4geyAkKCcjQ3JlYXRlUmVjb3JkJykuc2hvdygpIH19PiBBZGQgQ29tcGxpYW5jZSBJc3N1ZSA8L2J1dHRvbj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHttZXRlciAhPSB1bmRlZmluZWQgPyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4geyAkKCcjUkFQJykuc2hvdygpIH19PiBTdWJtaXR0IFJlbWVkaWFsIEFjdGlvbiBQbGFuIDwvYnV0dG9uPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHttZXRlciAhPSB1bmRlZmluZWQgPyA8TW9kYWwgVGl0bGU9eydNZXRlciBCYXNlIENvbmZpZ3VyYXRpb24nfSBQb3NMYWJlbD17J0Nsb3NlJ30gSWQ9eydiYXNlY29uZmlnJ30gY29udGVudD17KCkgPT4gPEJhc2VDb25maWcgQmFzZUNvbmZpZ0xpc3Q9e2Jhc2VDb25maWdMaXN0fSAvPn0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHttZXRlciAhPSB1bmRlZmluZWQgPyA8TWFudWFsQWN0aW9uIE1ldGVySWQ9e3Byb3BzLk1ldGVySUR9IHN0YXRlPXtwcm9wcy5zdGF0ZUxpc3QuZmluZChpdGVtID0+IGl0ZW0uRGVzY3JpcHRpb24gPT09ICdPdXQgT2YgQ29tcGxpYW5jZScpfSBBY3Rpb249eygpID0+IHsgfX0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHttZXRlciAhPSB1bmRlZmluZWQgPyA8TWFudWFsQWN0aW9uIE1ldGVySWQ9e3Byb3BzLk1ldGVySUR9IHN0YXRlPXtwcm9wcy5zdGF0ZUxpc3QuZmluZChpdGVtID0+IGl0ZW0uRGVzY3JpcHRpb24gPT09ICdSQVAgU3VibWl0dGVkJyl9IEFjdGlvbj17KCkgPT4geyB9fSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8TmV3TWV0ZXJXaXp6YXJkIG9uQ29tcGxldGU9eygpID0+IHsgaGlzdG9yeS5nbygwKTsgfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGVyRGV0YWlsO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1ldGVyRmlsdGVyLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8wNC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0JztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ2hlY2tCb3ggZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtQ2hlY2tCb3gnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJTWV0ZXJGaWx0ZXJQcm9wcyB7XHJcbiAgICBzZXRGaWx0ZXI6IChmaWx0ZXJzOiBBcnJheTxGaWx0ZXI+KSA9PiB2b2lkLFxyXG4gICAgaW5jbHVkZVN0YXR1czogYm9vbGVhbixcclxuICAgIElkOiBzdHJpbmcsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlciB7XHJcbiAgICBGaWVsZE5hbWU6IGtleW9mIFBSQzAwMi5JTWV0ZXIsXHJcbiAgICBTZWFyY2hUZXh0OiBzdHJpbmcsXHJcbiAgICBPcGVyYXRvcjogJ0xJS0UnIHwgJ05PVCBMSUtFJyB8ICdJTicgfCAnTk9UIElOJyB8ICc9JyxcclxuICAgIFR5cGU6ICgnc3RyaW5nJyB8ICdlbnVtJyB8ICdudW1iZXInKVxyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIFNlYXJjaGFibGVGaWVsZCB7IEZpZWxkTmFtZTogc3RyaW5nLCBUeXBlOiAoJ3N0cmluZycgfCAnZW51bScgfCAnbnVtYmVyJykgfVxyXG5cclxuZXhwb3J0IGNvbnN0IE1ldGVyRmlsdGVyID0gKHByb3BzOiBJTWV0ZXJGaWx0ZXJQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZpbHRlcmFibGVMaXN0LCBzZXRmaWx0ZXJhYmxlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxTZWFyY2hhYmxlRmllbGQ+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuaW5jbHVkZVN0YXR1cylcclxuICAgICAgICAgICAgc2V0ZmlsdGVyYWJsZUxpc3QoW1xyXG4gICAgICAgICAgICAgICAgeyBGaWVsZE5hbWU6ICdBc3NldEtleScsIFR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IEZpZWxkTmFtZTogJ01vZGVsJywgVHlwZTogJ3N0cmluZycgfSxcclxuICAgICAgICAgICAgICAgIHsgRmllbGROYW1lOiAnTWFrZScsIFR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IEZpZWxkTmFtZTogJ1N0YXR1cycsIFR5cGU6ICdlbnVtJyB9XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0ZmlsdGVyYWJsZUxpc3QoW1xyXG4gICAgICAgICAgICAgICAgeyBGaWVsZE5hbWU6ICdBc3NldEtleScsIFR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IEZpZWxkTmFtZTogJ01vZGVsJywgVHlwZTogJ3N0cmluZycgfSxcclxuICAgICAgICAgICAgICAgIHsgRmllbGROYW1lOiAnTWFrZScsIFR5cGU6ICdzdHJpbmcnIH1cclxuICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7IH1cclxuICAgIH0sIFtwcm9wcy5pbmNsdWRlU3RhdHVzXSk7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8RmlsdGVyPj4oW10pO1xyXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IFJlYWN0LnVzZVN0YXRlPEZpbHRlcj4oeyBGaWVsZE5hbWU6ICdBc3NldEtleScsIFNlYXJjaFRleHQ6ICcnLCBPcGVyYXRvcjogJ0xJS0UnLCBUeXBlOiAnc3RyaW5nJyB9KTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxldGVGaWx0ZXIoZjogRmlsdGVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gZmlsdGVycy5maW5kSW5kZXgoZnMgPT4gZnMgPT0gZik7XHJcbiAgICAgICAgbGV0IGZpbHRzID0gXy5jbG9uZURlZXAoZmlsdGVycyk7XHJcbiAgICAgICAgZmlsdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBhd2FpdCBzZXRGaWx0ZXJzKGZpbHRzKTtcclxuICAgICAgICBzZXRIb3ZlcihmYWxzZSk7XHJcbiAgICAgICAgcHJvcHMuc2V0RmlsdGVyKGZpbHRzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGRGaWx0ZXIoKSB7XHJcbiAgICAgICAgbGV0IG9sZEZpbHRlcnMgPSBfLmNsb25lRGVlcChmaWx0ZXJzKTtcclxuICAgICAgICBvbGRGaWx0ZXJzLnB1c2goZmlsdGVyKTtcclxuICAgICAgICBhd2FpdCBzZXRGaWx0ZXJzKG9sZEZpbHRlcnMpO1xyXG4gICAgICAgIHNldEZpbHRlcih7IEZpZWxkTmFtZTogJ0Fzc2V0S2V5JywgU2VhcmNoVGV4dDogJycsIE9wZXJhdG9yOiAnTElLRScsIFR5cGU6ICdzdHJpbmcnIH0pO1xyXG4gICAgICAgIHByb3BzLnNldEZpbHRlcihvbGRGaWx0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17eyB3aWR0aDogJzE1JScsIHBhZGRpbmdSaWdodDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPSdtb2RhbCcgZGF0YS10YXJnZXQ9eycjJyArIHByb3BzLklkfSBvbkNsaWNrPXsoZXZ0KSA9PiBldnQucHJldmVudERlZmF1bHQoKX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9PkFkZCBGaWx0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDMsIGRpc3BsYXk6IGhvdmVyID8gJ2Jsb2NrJyA6ICdub25lJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJhY2tncm91bmRDb2xvcjogJyNmMWYxZjEnLCBib3hTaGFkb3c6ICcwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKScsIHpJbmRleDogMSB9fSBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPkNvbHVtbjwvdGg+PHRoPk9wZXJhdG9yPC90aD48dGg+U2VhcmNoIFRleHQ8L3RoPjx0aD5SZW1vdmU8L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJzLm1hcCgoZiwgaSkgPT4gPHRyIGtleT17aX0+PHRkPntmLkZpZWxkTmFtZX08L3RkPjx0ZD57Zi5PcGVyYXRvcn08L3RkPjx0ZD57Zi5TZWFyY2hUZXh0fTwvdGQ+PHRkPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIG9uQ2xpY2s9eyhlKSA9PiBkZWxldGVGaWx0ZXIoZil9PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj48L3RkPjwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBpZD17cHJvcHMuSWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkFkZCBGaWx0ZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TZWxlY3Q8RmlsdGVyPiBSZWNvcmQ9e2ZpbHRlcn0gRmllbGQ9J0ZpZWxkTmFtZScgT3B0aW9ucz17ZmlsdGVyYWJsZUxpc3QubWFwKGZsID0+ICh7IFZhbHVlOiBmbC5GaWVsZE5hbWUsIExhYmVsOiBmbC5GaWVsZE5hbWUgfSkpfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3BlcmF0b3IgPSBcIklOXCIgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW4gPSBmaWx0ZXJhYmxlTGlzdC5maW5kKGZsID0+IGZsLkZpZWxkTmFtZSA9PSByZWNvcmQuRmllbGROYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uVHlwZSA9PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBcIkxJS0VcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVyKChwcmV2RmlsdGVyKSA9PiAoeyAuLi5wcmV2RmlsdGVyLCBGaWVsZE5hbWU6IHJlY29yZC5GaWVsZE5hbWUsIFNlYXJjaFRleHQ6ICcnLCBPcGVyYXRvcjogb3BlcmF0b3IsIFR5cGU6IGNvbHVtbi5UeXBlIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gTGFiZWw9J0NvbHVtbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJDcmVhdG9yIEZpbHRlcj17ZmlsdGVyfSBGaWVsZD17ZmlsdGVyYWJsZUxpc3QuZmluZChmbCA9PiBmbC5GaWVsZE5hbWUgPT0gZmlsdGVyLkZpZWxkTmFtZSl9IFNldHRlcj17KHJlY29yZCkgPT4gc2V0RmlsdGVyKHJlY29yZCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17KCkgPT4gYWRkRmlsdGVyKCl9ID5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgRmlsdGVyQ3JlYXRvciA9IChwcm9wczogeyBGaWx0ZXI6IEZpbHRlciwgU2V0dGVyOiAoZmlsdGVyOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxGaWx0ZXI+KSA9PiB2b2lkLCBGaWVsZDogU2VhcmNoYWJsZUZpZWxkIH0pID0+IHtcclxuICAgIGNvbnN0IHZhbHVlTGlzdEl0ZW1zID0gWydJbiBDb21wbGlhbmNlJywnT3V0IE9mIENvbXBsaWFuY2UnLCdBY2tub3dsZWRnZWQnLCdSZXZpZXdlZCcsJ0luQWN0aXZlJywnUkFQIFN1Ym1pdHRlZCddXHJcblxyXG4gICAgaWYgKHByb3BzLkZpZWxkID09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGVsc2UgaWYgKHByb3BzLkZpZWxkLlR5cGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29sdW1uIHR5cGUgaXMgc3RyaW5nLiBXaWxkY2FyZCAoKikgY2FuIGJlIHVzZWQgd2l0aCAnTElLRScgYW5kICdOT1QgTElLRSc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e3Byb3BzLkZpbHRlci5PcGVyYXRvcn0gb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWUgYXMgJ0xJS0UnIHwgJ05PVCBMSUtFJyB8ICc9JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcigocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIE9wZXJhdG9yOiB2YWx1ZSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTElLRSc+TElLRTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTk9UIExJS0UnPk5PVCBMSUtFPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc9Jz49PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dH0gb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWUgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgU2VhcmNoVGV4dDogdmFsdWUgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2x1bW4gdHlwZSBpcyBlbnVtZXJhYmxlLiBTZWxlY3QgZnJvbSBiZWxvdy48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSA+PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9e3sgekluZGV4OiAxIH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcihwcmV2U2V0dGVyID0+ICh7IC4uLnByZXZTZXR0ZXIsIFNlYXJjaFRleHQ6IGAoJHt2YWx1ZUxpc3RJdGVtcy5qb2luKCcsJyl9KWAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcihwcmV2U2V0dGVyID0+ICh7IC4uLnByZXZTZXR0ZXIsIFNlYXJjaFRleHQ6ICcnIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gZGVmYXVsdFZhbHVlPSdvZmYnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgPlNlbGVjdCBBbGw8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZUxpc3RJdGVtcy5tYXAoKHZsaSxpKSA9PiA8bGkga2V5PXtpfSA+PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9e3sgekluZGV4OiAxIH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dC5yZXBsYWNlKCcoJywgJycpLnJlcGxhY2UoJyknLCAnJykuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoeCA9PiB4ICE9IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHZsaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGAoJHtsaXN0LmpvaW4oJywnKX0pYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiB0ZXh0IH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gcHJvcHMuRmlsdGVyLlNlYXJjaFRleHQucmVwbGFjZSgnKCcsICcnKS5yZXBsYWNlKCcpJywgJycpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHggPT4geCAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcih4ID0+IHghPXZsaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGAoJHtsaXN0LmpvaW4oJywnKX0pYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiB0ZXh0IH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IHZhbHVlPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dC5pbmRleE9mKHZsaSkgPj0gMCA/ICdvbicgOiAnb2ZmJ30gY2hlY2tlZD17cHJvcHMuRmlsdGVyLlNlYXJjaFRleHQuaW5kZXhPZih2bGkpID49IDAgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgPnt2bGl9PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9saT4pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTWV0ZXJMaXN0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xNy8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0JztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ2hlY2tCb3ggZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtQ2hlY2tCb3gnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9NZXRlckZpbHRlcic7XHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIFNlbGVjdGVkTWV0ZXJJZDogbnVtYmVyLFxyXG4gICAgU2VsZWN0TWV0ZXI6IChpZDogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgU3RhdHVzTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+LFxyXG4gICAgRmlsdGVyOiBBcnJheTxGaWx0ZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNZXRlckxpc3QgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW21ldGVyU29ydCwgc2V0TWV0ZXJTb3J0XSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIFBSQzAwMi5JTWV0ZXI+KFwiU3RhdHVzXCIpO1xyXG4gICAgY29uc3QgW21ldGVyQXNjLCBzZXRNZXRlckFzY10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbbWV0ZXJMaXN0LCBzZXRNZXRlckxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklNZXRlcj4+KFtdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhhbmRsZU1ldGVyTGlzdCA9IGdldERhdGEoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZU1ldGVyTGlzdC5hYm9ydCAhPSBudWxsKSBoYW5kbGVNZXRlckxpc3QuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuRmlsdGVyXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGF0YSgpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklNZXRlcj4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VNZXRlci9TZWFyY2hhYmxlTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBTZWFyY2hlczogcHJvcHMuRmlsdGVyLCBPcmRlckJ5OiBtZXRlclNvcnQsIEFzY2VuZGluZzogbWV0ZXJBc2MgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JTWV0ZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1ldGVyTGlzdChkYXRhKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdTdGF0dXMnLCBsYWJlbDogJ1N0YXR1cycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdCA9IHByb3BzLlN0YXR1c0xpc3QuZmluZChzID0+IHMuSUQgPT09IGl0ZW0uU3RhdHVzSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnI2Y4ZjlmYScgOiBzdGF0LkNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyMyMTI1MjknIDogc3RhdC5UZXh0Q29sb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT4ge2l0ZW0uU3RhdHVzfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBrZXk6ICdBc3NldEtleScsIGxhYmVsOiAnTWV0ZXInLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgeyBrZXk6ICdNYWtlJywgbGFiZWw6ICdNYWtlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgZGF0YT17bWV0ZXJMaXN0fVxyXG4gICAgICAgICAgICBzb3J0RmllbGQ9e21ldGVyU29ydH1cclxuICAgICAgICAgICAgYXNjZW5kaW5nPXttZXRlckFzY31cclxuICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuY29sID09IG1ldGVyU29ydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1ldGVyQXNjKCFtZXRlckFzYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJBc2MobWV0ZXJBc2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1ldGVyU29ydChkLmNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyBwcm9wcy5TZWxlY3RNZXRlcihkLnJvdy5JRCk7IH19XHJcbiAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT09IHByb3BzLlNlbGVjdGVkTWV0ZXJJZH1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25maWd1cmF0aW9uQnlNZXRlci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDgvMjIvMjAxOSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0JztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ2hlY2tCb3ggZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtQ2hlY2tCb3gnO1xyXG5pbXBvcnQgeyBNZXRlckZpbHRlciwgRmlsdGVyIH0gZnJvbSAnLi9NZXRlckZpbHRlcic7XHJcbmltcG9ydCBSZWNvcmRMaXN0IGZyb20gJy4vUmVjb3JkTGlzdCc7XHJcbmltcG9ydCBNZXRlckRldGFpbCBmcm9tICcuL01ldGVyRGV0YWlsJztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IE1ldGVyTGlzdCB9IGZyb20gJy4vTWV0ZXJMaXN0JztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuY29uc3QgUFJDMDAyTWV0ZXJPdmVydmlld1BhZ2UgPSAocHJvcHM6IHsgUm9sZXM6IEFycmF5PE1pTUQuU2VjdXJpdHlSb2xlTmFtZT4sIE1ldGVySUQ6IG51bWJlciB9KSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbbWV0ZXJGaWx0ZXJzLCBzZXRNZXRlckZpbHRlcnNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8RmlsdGVyPj4oW10pO1xyXG4gICAgY29uc3QgW3N0YXR1c0xpc3QsIHNldFN0YXR1c0xpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklTdGF0dXM+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlU3RhdHVzTGlzdCA9IGdldFN0YXR1cygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlU3RhdHVzTGlzdC5hYm9ydCAhPSBudWxsKSBoYW5kbGVTdGF0dXNMaXN0LmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzXSk7XHJcblxyXG4gIFxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSVN0YXR1cz4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZVN0YXRlL0xpc3RgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JU3RhdHVzPikgPT4ge1xyXG4gICAgICAgICAgICBzZXRTdGF0dXNMaXN0KGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldE1ldGVySUQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnaW5kZXguY3NodG1sP25hbWU9UFJDMDAyT3ZlcnZpZXcmTWV0ZXJJRD0nICsgaWQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxNZXRlckZpbHRlciBJZD17J01ldGVyTGlzdEZpbHRlcid9IGluY2x1ZGVTdGF0dXM9e3RydWV9IHNldEZpbHRlcj17KGZpbHQpID0+IHsgc2V0TWV0ZXJGaWx0ZXJzKGZpbHQpOyB9fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnY2FsYyggMTAwJSAtIDEzNnB4KScsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRlckxpc3QgRmlsdGVyPXttZXRlckZpbHRlcnN9IFNlbGVjdGVkTWV0ZXJJZD17KGlzTmFOKHByb3BzLk1ldGVySUQpPyAtMSA6IHByb3BzLk1ldGVySUQpfSBTZWxlY3RNZXRlcj17c2V0TWV0ZXJJRH0gU3RhdHVzTGlzdD17c3RhdHVzTGlzdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnMjAwcHgnLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRlckRldGFpbCBNZXRlcklEPXsoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgPyAtMSA6IHByb3BzLk1ldGVySUQpfSBzdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNvcmRMaXN0IE1ldGVySWQ9eyhpc05hTihwcm9wcy5NZXRlcklEKSA/IC0xIDogcHJvcHMuTWV0ZXJJRCl9IFN0YXRlTGlzdD17c3RhdHVzTGlzdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUFJDMDAyTWV0ZXJPdmVydmlld1BhZ2U7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTWV0ZXJDaGFuZ2VQYW4udHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzA0LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSwgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0JztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ2hlY2tCb3ggZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtQ2hlY2tCb3gnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IE1ldGVySWQ6IG51bWJlciwgU3RhdGVMaXN0OiBBcnJheTxQUkMwMDIuSVN0YXR1cz4gfVxyXG5cclxuY29uc3QgUmVjb3JkTGlzdCA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtjaGFuZ2VMaXN0LCBzZXRDaGFuZ2VMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JUmVjb3JkPj4oW10pO1xyXG4gICAgY29uc3QgW3JlY29yZFNvcnQsIHNldFJlY29yZFNvcnRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlN0YXR1c1wiKTtcclxuICAgIGNvbnN0IFtyZWNvcmRBc2MsIHNldFJlY29yZEFzY10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlUmVjb3JkTGlzdCA9IGdldFJlY29yZHMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZVJlY29yZExpc3QgIT0gbnVsbCAmJiBoYW5kbGVSZWNvcmRMaXN0LmFib3J0ICE9IG51bGwpIGhhbmRsZVJlY29yZExpc3QuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHNdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRSZWNvcmRzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSVJlY29yZD4+IHtcclxuICAgICAgICBpZiAocHJvcHMuTWV0ZXJJZCA9PSAtMSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlUmVjb3JkP3BhcmVudElEPSR7cHJvcHMuTWV0ZXJJZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JUmVjb3JkPikgPT4ge1xyXG4gICAgICAgICAgICBzZXRDaGFuZ2VMaXN0KGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsocHJvcHMuTWV0ZXJJZCA+IC0xID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSAzMzZweCknLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ1N0YXR1cycsIGxhYmVsOiAnU3RhdHVzJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdCA9IHByb3BzLlN0YXRlTGlzdC5maW5kKHMgPT4gcy5JRCA9PT0gaXRlbS5TdGF0dXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJzYwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjZjhmOWZhJyA6IHN0YXQuQ29sb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyMyMTI1MjknIDogc3RhdC5UZXh0Q29sb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+IHsoc3RhdCA9PSB1bmRlZmluZWQgPyAnJyA6IHN0YXQuRGVzY3JpcHRpb24pfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdUaW1lc3RhbXAnLCBsYWJlbDogJ0xhc3QgVXBkYXRlZCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gbW9tZW50KGl0ZW0uVGltZXN0YW1wKS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVXNlcicsIGxhYmVsOiAnIEJ5JywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtjaGFuZ2VMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtyZWNvcmRTb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXtyZWNvcmRBc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCdpbmRleC5jc2h0bWw/bmFtZT1QUkMwMDJDaGFuZ2UmUmVjb3JkSUQ9JyArIGQucm93LklEKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOiBudWxsKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjb3JkTGlzdDtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBOZXdNZXRlcldpenphcmQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE3LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0Jzs7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgV2FybmluZyBmcm9tICcuLi9Db21tb24vV2FybmluZyc7XHJcbmltcG9ydCBTZWxlY3RNZXRlciBmcm9tICcuL1NlbGVjdE1ldGVyJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL0NvbW1vbi9Nb2RhbCc7XHJcbmltcG9ydCBCYXNlQ29uZmlnIGZyb20gJy4uL0NvbW1vbi9CYXNlQ29uZmlnJztcclxuaW1wb3J0IEZvcm1DaGVja0JveCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1DaGVja0JveCc7XHJcbmltcG9ydCBDb25maWdSdWxlRWRpdCBmcm9tICcuLi9Db21tb24vQ29uZmlnUnVsZUVkaXQnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgb25Db21wbGV0ZTogKCk9PiB2b2lkIH1cclxudHlwZSBzdGF0ZSA9ICdNZXRlcid8J0Jhc2VDb25maWcnfCdGaWxlIExvYWQnfCAnRWRpdCBGaWVsZCcgfCAnTmV3IEJhc2VDb25maWcnXHJcbmludGVyZmFjZSBJQ29uZmlnRmlsZUZpZWxkIGV4dGVuZHMgUFJDMDAyLklDb25maWdGaWVsZCB7IEluY2x1ZGU6IGJvb2xlYW4gfVxyXG5cclxuY29uc3QgTmV3TWV0ZXJXaXp6YXJkID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbWV0ZXIsIHNldE1ldGVyXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JTWV0ZXI+KHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSBSZWFjdC51c2VTdGF0ZTxzdGF0ZT4oJ01ldGVyJyk7XHJcblxyXG4gICAgY29uc3QgW2Jhc2VDb25maWcsIHNldEJhc2VDb25maWddID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPj4oW10pO1xyXG4gICAgY29uc3QgW2Jhc2VDb25maWdGaWVsZHMsIHNldEJhc2VDb25maWdGaWVsZHNdID0gUmVhY3QudXNlU3RhdGU8TWFwPG51bWJlciwgQXJyYXk8UFJDMDAyLklDb25maWdGaWVsZD4+PihuZXcgTWFwPG51bWJlciwgQXJyYXk8UFJDMDAyLklDb25maWdGaWVsZD4+KCkpO1xyXG4gICAgY29uc3QgW2ZpbGVGaWVsZHMsIHNldEZpbGVGaWVsZHNdID0gUmVhY3QudXNlU3RhdGUgPCBBcnJheSA8IElDb25maWdGaWxlRmllbGQ+PihbXSk7XHJcblxyXG4gICAgY29uc3QgW2VkaXRGaWVsZCwgc2V0RWRpdEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQ29uZmlnRmllbGQ+KHVuZGVmaW5lZCk7XHJcblxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGVwICE9ICdCYXNlQ29uZmlnJykgXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IH1cclxuXHJcbiAgICAgICAgJChcIi5jdXN0b20tZmlsZS1pbnB1dFwiKS5vbihcImNoYW5nZVwiLCAoZXZ0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpbGVOYW1lID0gKGV2dCBhcyBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikudGFyZ2V0LnZhbHVlLnNwbGl0KFwiXFxcXFwiKS5wb3AoKTtcclxuICAgICAgICAgICAgJChldnQudGFyZ2V0KS5zaWJsaW5ncyhcIi5jdXN0b20tZmlsZS1sYWJlbFwiKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpLmh0bWwoZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICByZWFkU2luZ2xlRmlsZSgoZXZ0IGFzIFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSwgZmlsZU5hbWUpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gJChcIi5jdXN0b20tZmlsZS1pbnB1dFwiKS5vZmYoJ2NoYW5nZScpXHJcbiAgICAgICAgXHJcbiAgICB9LCBbc3RlcF0pXHJcblxyXG4gICBcclxuICAgIGZ1bmN0aW9uIENhbmNlbCgpIHtcclxuICAgICAgICBzZXRTdGVwKCdNZXRlcicpO1xyXG4gICAgICAgIHNldE1ldGVyKHVuZGVmaW5lZClcclxuICAgICAgICBzZXRCYXNlQ29uZmlnKFtdKTtcclxuICAgICAgICBzZXRCYXNlQ29uZmlnRmllbGRzKG5ldyBNYXA8bnVtYmVyLCBBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkPj4oKSk7XHJcbiAgICAgICAgJCgnI05ld01ldGVyJykuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE5leHRTdGVwKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdNZXRlcicgJiYgbWV0ZXIgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAkKCcjbWV0ZXJXYXJuaW5nJykuc2hvdygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHN0ZXAgPT0gJ01ldGVyJylcclxuICAgICAgICAgICAgc2V0U3RlcCgnQmFzZUNvbmZpZycpXHJcbiAgICAgICAgZWxzZSBpZiAoc3RlcCA9PSAnTmV3IEJhc2VDb25maWcnKVxyXG4gICAgICAgICAgICBzZXRTdGVwKCdCYXNlQ29uZmlnJylcclxuICAgICAgICBlbHNlIGlmIChzdGVwID09ICdGaWxlIExvYWQnKSB7XHJcbiAgICAgICAgICAgIGZpbGVUb0Jhc2VDb25maWcoYmFzZUNvbmZpZ1tiYXNlQ29uZmlnLmxlbmd0aCAtIDFdLklEKTtcclxuICAgICAgICAgICAgc2V0U3RlcCgnTmV3IEJhc2VDb25maWcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGVwID09ICdCYXNlQ29uZmlnJyAmJiBiYXNlQ29uZmlnLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJCgnI3N1Ym1pdHRXYXJuaW5nJykuc2hvdygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0ZXAgPT0gJ0Jhc2VDb25maWcnKSBcclxuICAgICAgICAgICAgJCgnI2NvbmZpZ1dhcm5pbmcnKS5zaG93KClcclxuICAgICAgICBpZiAoc3RlcCA9PSAnRWRpdCBGaWVsZCcpXHJcbiAgICAgICAgICAgIHNhdmVFZGl0RmllbGQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBQcmV2U3RlcCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoc3RlcCA9PSAnTWV0ZXInKVxyXG4gICAgICAgICAgICAkKCcjd2l6emFyZFdhcm5pbmcnKS5zaG93KCk7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0Jhc2VDb25maWcnKVxyXG4gICAgICAgICAgICBzZXRTdGVwKCdNZXRlcicpXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJyB8fCBzdGVwID09ICdGaWxlIExvYWQnKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUJhc2VDb25maWcoYmFzZUNvbmZpZ1tiYXNlQ29uZmlnLmxlbmd0aCAtIDFdLklEKTtcclxuICAgICAgICAgICAgc2V0U3RlcCgnQmFzZUNvbmZpZycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGVwID09ICdFZGl0IEZpZWxkJylcclxuICAgICAgICAgICAgc2V0U3RlcCgnQmFzZUNvbmZpZycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWxlVG9CYXNlQ29uZmlnKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzZXRCYXNlQ29uZmlnRmllbGRzKChmbGRzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGUgPSBfLmNsb25lKGZsZHMpO1xyXG4gICAgICAgICAgICB1cGRhdGUuc2V0KGlkLCBmaWxlRmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uSW5jbHVkZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ01ldGVyJylcclxuICAgICAgICAgICAgcmV0dXJuICdTZWxlY3QgYSBNZXRlcidcclxuICAgICAgICBpZiAoc3RlcCA9PSAnQmFzZUNvbmZpZycpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlNldHVwIEJhc2UgQ29uZmlndXJhdGlvblwiXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0ZpbGUgTG9hZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnTG9hZCBDb25maWd1cmF0aW9uIEZpbGUnXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJylcclxuICAgICAgICAgICAgcmV0dXJuICdBZGQgTmV3IEJhc2UgQ29uZmlndXJhdGlvbidcclxuICAgICAgICBpZiAoc3RlcCA9PSAnRWRpdCBGaWVsZCcpXHJcbiAgICAgICAgICAgIHJldHVybiBcIkVkaXQgQ29uZmlndXJhdGlvbiBGaWVsZFwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcclxuICAgICAgICBpZiAoc3RlcCA9PSAnTWV0ZXInKVxyXG4gICAgICAgICAgICByZXR1cm4gPFNlbGVjdE1ldGVyIHNldE1ldGVyPXsobWV0ZXIpID0+IHsgc2V0TWV0ZXIobWV0ZXIpOyB9fSBzZWxlY3RlZE1ldGVyPXttZXRlcn0gLz5cclxuICAgICAgICBlbHNlIGlmIChzdGVwID09ICdCYXNlQ29uZmlnJylcclxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJhc2VDb25maWcgQmFzZUNvbmZpZ0xpc3Q9e2Jhc2VDb25maWd9IGdldEZpZWxkTGlzdD17Z2V0QmFzZUNvbmZpZ0ZpZWxkc30gb25FZGl0PXtlZGl0Q29uZmlnRmllbGR9IG9uTmV3PXthZGRDb25maWdGaWVsZH0vPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtaW5wdXRcIiBhY2NlcHQ9XCIuaW5pLC5wYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1sYWJlbFwiPkNob29zZSBhIENvbmZpZ3VyYXRpb24gRmlsZSBpZiBhcHBsaWNhYmxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4geyBjcmVhdGVCYXNlQ29uZmlnKCk7IHNldFN0ZXAoJ05ldyBCYXNlQ29uZmlnJykgfX0+IEFkZCBOZXcgQmFzZSBDb25maWd1cmF0aW9uIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICBlbHNlIGlmIChzdGVwID09ICdOZXcgQmFzZUNvbmZpZycgJiYgYmFzZUNvbmZpZy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0PFBSQzAwMi5JQmFzZUNvbmZpZz4gUmVjb3JkPXtiYXNlQ29uZmlnW2Jhc2VDb25maWcubGVuZ3RoIC0gMV19IEZpZWxkPXsnTmFtZSd9IFNldHRlcj17QmFzZUNvbmZpZ1NldHRlcn0gVmFsaWQ9eygpID0+IHRydWV9IExhYmVsPXsnTmFtZSd9IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0PFBSQzAwMi5JQmFzZUNvbmZpZz4gUmVjb3JkPXtiYXNlQ29uZmlnW2Jhc2VDb25maWcubGVuZ3RoIC0gMV19IEZpZWxkPXsnUGF0dGVybid9IFNldHRlcj17QmFzZUNvbmZpZ1NldHRlcn0gVmFsaWQ9eygpID0+IHRydWV9IExhYmVsPXsnRmlsZSBQYXR0ZXJuJ30gLz5cclxuICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgIGVsc2UgaWYgKHN0ZXAgPT0gJ0ZpbGUgTG9hZCcpXHJcbiAgICAgICAgICAgIHJldHVybiA8RmlsZUxvYWRUYWJsZSBGaWVsZHM9e2ZpbGVGaWVsZHN9IFNldHRlcj17KGluZGV4LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsZUZpZWxkcygobHN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IF8uY2xvbmUobHN0KTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVbaW5kZXhdLkluY2x1ZGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgIGVsc2UgaWYgKHN0ZXAgPT0gJ0VkaXQgRmllbGQnKVxyXG4gICAgICAgICAgICByZXR1cm4gPENvbmZpZ1J1bGVFZGl0IEZpZWxkPXtlZGl0RmllbGR9IGVkaXRUeXBlPXt0cnVlfSBTZXR0ZXI9e3NldEVkaXRGaWVsZH0gLz5cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiA8PiA8Lz5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWFkU2luZ2xlRmlsZShldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBmaWxlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9SZXRyaWV2ZSB0aGUgZmlyc3QgKGFuZCBvbmx5ISkgRmlsZSBmcm9tIHRoZSBGaWxlTGlzdCBvYmplY3RcclxuICAgICAgICB2YXIgZiA9IGV2dC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgaWYoZikge1xyXG4gICAgICAgICAgICB2YXIgciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHIub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50cyA9IGUudGFyZ2V0LnJlc3VsdCBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lcyA9IGNvbnRlbnRzLnNwbGl0KC9bXFxyXFxuXSsvZyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxpbmVzLmZvckVhY2gobG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbG4uaW5jbHVkZXMoJz0nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gbG4uaW5kZXhPZignPScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBrZXk6IGxuLnN1YnN0cigwLCBpKSwgdmFsdWU6IGxuLnN1YnN0cihpKzEpIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIExvYWRCYXNlQ29uZmlnRmlsZShmaWxlTmFtZSwgcmVzdWx0cy5tYXAoKGl0ZW0saW5kZXgpID0+IHsgcmV0dXJuIHsgSUQ6IGluZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBOYW1lOiBpdGVtLmtleSwgVmFsdWU6IGl0ZW0udmFsdWUsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgSW5jbHVkZTogZmFsc2UgfSBhcyBJQ29uZmlnRmlsZUZpZWxkIH0pKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgci5yZWFkQXNUZXh0KGYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBMb2FkQmFzZUNvbmZpZ0ZpbGUoZmlsZTogc3RyaW5nLCBGaWVsZHM6IEFycmF5PElDb25maWdGaWxlRmllbGQ+KSB7XHJcbiAgICAgICAgbGV0IGlkID0gKGJhc2VDb25maWcubGVuZ3RoID09IDAgPyAwIDogTWF0aC5tYXgoLi4uYmFzZUNvbmZpZy5tYXAoaXRlbSA9PiBpdGVtLklEKSkgKyAxKVxyXG4gICAgICAgIHNldEJhc2VDb25maWcoKGxzdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWRkaXRpb246IFBSQzAwMi5JQmFzZUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIElEOiBpZCxcclxuICAgICAgICAgICAgICAgIE1ldGVySWQ6IG1ldGVyLklELFxyXG4gICAgICAgICAgICAgICAgTmFtZTogIGZpbGUgKyAnIEZpbGUnLFxyXG4gICAgICAgICAgICAgICAgUGF0dGVybjogZmlsZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLmxzdCwgYWRkaXRpb25dXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRCYXNlQ29uZmlnRmllbGRzKChmbGRzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGUgPSBfLmNsb25lRGVlcChmbGRzKTtcclxuICAgICAgICAgICAgdXBkYXRlLnNldChpZCwgW10pO1xyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEZpbGVGaWVsZHMoRmllbGRzLm1hcChpdGVtID0+IHsgaXRlbS5CYXNlQ29uZmlnSWQgPSBpZDsgcmV0dXJuIGl0ZW0gfSkpXHJcbiAgICAgICAgc2V0U3RlcCgnRmlsZSBMb2FkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQmFzZUNvbmZpZygpIHtcclxuICAgICAgICBsZXQgaWQgPSAoYmFzZUNvbmZpZy5sZW5ndGggPT0gMCA/IDAgOiBNYXRoLm1heCguLi5iYXNlQ29uZmlnLm1hcChpdGVtID0+IGl0ZW0uSUQpKSArIDEpXHJcbiAgICAgICAgc2V0QmFzZUNvbmZpZygobHN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhZGRpdGlvbjogUFJDMDAyLklCYXNlQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgSUQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgTWV0ZXJJZDogbWV0ZXIuSUQsXHJcbiAgICAgICAgICAgICAgICBOYW1lOiAnTmV3IEJhc2UgQ29uZmlndXJhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBQYXR0ZXJuOiAnKi5pbmknXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVyblsuLi5sc3QsIGFkZGl0aW9uXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0QmFzZUNvbmZpZ0ZpZWxkcygoZmxkcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gXy5jbG9uZURlZXAoZmxkcyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZS5zZXQoaWQsIFtdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUJhc2VDb25maWcoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHNldEJhc2VDb25maWcoKGxzdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gXy5jbG9uZShsc3QpO1xyXG4gICAgICAgICAgICBsZXQgaSA9IHVwZGF0ZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLklEID09IGlkKTtcclxuICAgICAgICAgICAgdXBkYXRlLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0QmFzZUNvbmZpZ0ZpZWxkcygoZmxkcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gXy5jbG9uZURlZXAoZmxkcyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZS5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQmFzZUNvbmZpZ1NldHRlcihyZWNvcmQ6IFBSQzAwMi5JQmFzZUNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBzZXRCYXNlQ29uZmlnKChiYykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gXy5jbG9uZURlZXAoYmMpO1xyXG4gICAgICAgICAgICBsZXQgaSA9IHVwZGF0ZS5maW5kSW5kZXgoaXRlbSA9PiByZWNvcmQuSUQgPT0gaXRlbS5JRCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVtpXSA9IHJlY29yZDtcclxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhc2VDb25maWdGaWVsZHMoaWQ6IG51bWJlcik6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGJhc2VDb25maWdGaWVsZHMuaGFzKGlkKSlcclxuICAgICAgICAgICAgcmV0dXJuIGJhc2VDb25maWdGaWVsZHMuZ2V0KGlkKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU3VibWl0dCgpIHtcclxuICAgICAgICAvLyBTdGFydCBCeSBDcmVhdGluZyB0aGUgbWV0ZXJcclxuICAgICAgICBsZXQgY29uZmlnRmllbGRzID0gW107XHJcblxyXG4gICAgICAgIGJhc2VDb25maWcuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgYmFzZUNvbmZpZ0ZpZWxkcy5nZXQoaXRlbS5JRCkuZm9yRWFjaChmbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnRmllbGRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIEJhc2VDb25maWdJZDogaXRlbS5JRCxcclxuICAgICAgICAgICAgICAgICAgICBDb21wYXJpc29uOiBmbGQuQ29tcGFyaXNvbixcclxuICAgICAgICAgICAgICAgICAgICBGaWVsZFR5cGU6IGZsZC5GaWVsZFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogZmxkLk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsdWU6IGZsZC5WYWx1ZSB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvQWRkYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNZXRlcjogeyBNZXRlcklkOiBtZXRlci5JRCwgQWN0aXZlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIEJhc2VDb25maWd1cmF0aW9uOiBiYXNlQ29uZmlnLm1hcChpdGVtID0+IHsgcmV0dXJuIHsgTmFtZTogaXRlbS5OYW1lLCBQYXR0ZXJuOiBpdGVtLlBhdHRlcm4sIElEOiBpdGVtLklEIH07IH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3VyYXRpb25GaWVsZHM6IGNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIENhbmNlbCgpO1xyXG4gICAgICAgIHByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0Q29uZmlnRmllbGQocmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSB7XHJcbiAgICAgICAgc2V0U3RlcCgnRWRpdCBGaWVsZCcpO1xyXG4gICAgICAgIHNldEVkaXRGaWVsZChyZWNvcmQpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ29uZmlnRmllbGQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHNldFN0ZXAoJ0VkaXQgRmllbGQnKTtcclxuICAgICAgICBzZXRFZGl0RmllbGQoeyBCYXNlQ29uZmlnSWQ6IGlkLCBDb21wYXJpc29uOiAnPScsIFZhbHVlOiAnJywgTmFtZTogJ05ldyBGaWVsZCcsIEZpZWxkVHlwZTogJ3N0cmluZycsIElEOiAtMSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVFZGl0RmllbGQoKSB7XHJcbiAgICAgICAgaWYgKGVkaXRGaWVsZC5JRCA9PSAtMSlcclxuICAgICAgICAgICAgc2V0QmFzZUNvbmZpZ0ZpZWxkcygoZmxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlID0gXy5jbG9uZShmbGQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZSA9IHVwZGF0ZS5nZXQoZWRpdEZpZWxkLkJhc2VDb25maWdJZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkaXRpb24gPSBfLmNsb25lRGVlcChlZGl0RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgYWRkaXRpb24uSUQgPSAoY2hhbmdlLmxlbmd0aCA+IDAgPyBNYXRoLm1heCguLi5jaGFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5JRCkpICsgMSA6IDEpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlLnB1c2goYWRkaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChlZGl0RmllbGQuQmFzZUNvbmZpZ0lkLCBjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0QmFzZUNvbmZpZ0ZpZWxkcygoZmxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlID0gXy5jbG9uZShmbGQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZSA9IHVwZGF0ZS5nZXQoZWRpdEZpZWxkLkJhc2VDb25maWdJZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGNoYW5nZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLklEID09IGVkaXRGaWVsZC5JRCk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VbaV0gPSBlZGl0RmllbGQ7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KGVkaXRGaWVsZC5CYXNlQ29uZmlnSWQsIGNoYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgc2V0U3RlcCgnQmFzZUNvbmZpZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsIElkPXsnTmV3TWV0ZXInfSBUaXRsZT17Z2V0VGl0bGUoKX0gTmVnTGFiZWw9eyhzdGVwID09ICdNZXRlcicgPyAnQ2FuY2VsJyA6ICdCYWNrJyl9IFBvc0xhYmVsPXsoc3RlcCA9PSAnTWV0ZXInIHx8IHN0ZXAgPT0gJ0ZpbGUgTG9hZCcgPyAnTmV4dCcgOiAnU2F2ZScpfSBjb250ZW50PXsoKSA9PiBnZXRDb250ZW50KCl9IENsb3NlPXtQcmV2U3RlcH0gQ29uZmlybT17TmV4dFN0ZXB9IENhbmNlbD17KCkgPT4geyAkKCcjd2l6emFyZFdhcm5pbmcnKS5zaG93KCk7IHJldHVybiBmYWxzZTsgfX0gLz5cclxuICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydDbG9zZSB0aGUgV2l6emFyZCd9IENvbnRlbnQ9eydUaGlzIHdpbGwgY2xvc2UgdGhlIE5ldyBNZXRlciBXaXp6YXIgYW5kIGFsIHByb2dyZXNzIHdpbGwgYmUgbG9zdC4nfSBDb25maXJtPXsnQmFjayd9IERlbnk9eydDYW5jZWwnfSBJZD0nd2l6emFyZFdhcm5pbmcnIEFjdGlvbj17KHJlc3VsdCkgPT4geyBpZiAoIXJlc3VsdCkgQ2FuY2VsKCk7IH19IC8+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnV2FybmluZyd9IENvbnRlbnQ9eydQbGVhc2UgU2VsZWN0IGEgTWV0ZXIgYmVmb3JlIGNvbnRpbnVpbmcnfSBDb25maXJtPXsnT2snfSBJZD0nbWV0ZXJXYXJuaW5nJyBBY3Rpb249eyhyZXN1bHQpID0+IHsgfX0gLz5cclxuICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydXYXJuaW5nJ30gQ29udGVudD17J1RoaXMgd2lsbCBhZGQgdGhlIHNlbGVjdGVkIG1ldGVyIHRvIFBSQzAwMiBtb25pdG9yaW5nIGFuZCBzYXZlIHRoZSBiYXNlIGNvbmZpZ3VyYXRpb24uIE5vdGUgdGhhdCB0aGUgc3RhdHVzIG9mIHRoaXMgbWV0ZXIgd2lsbCBub3QgdXBkYXRlIHVudGlsIHRoZSBmaXJzdCBjb25maWd1cmF0aW9uIEZpbGUgaXMgZG93bmxvYWRlZC4nfSBDb25maXJtPXsnUHJvY2VlZCd9IERlbnk9eydDYW5jZWwnfSBJZD0nc3VibWl0dFdhcm5pbmcnIEFjdGlvbj17KHJlc3VsdCkgPT4geyBpZiAocmVzdWx0KSBTdWJtaXR0KCk7IH19IC8+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnV2FybmluZyd9IENvbnRlbnQ9eydBdCBsZWFzdCBvbmUgQmFzZSBDb25maWd1cmF0aW9uIGhhcyB0byBiZSBzZXQgdXAgYW5kIGF0IGxlYXN0IG9uZSBDb25maWd1cmF0aW9uIEZpZWxkIGhhcyB0byBiZSBtb25pdG9yZWQnfSBDb25maXJtPXsnT2snfSBJZD0nY29uZmlnV2FybmluZycgQWN0aW9uPXsocmVzdWx0KSA9PiB7IH19IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEZpbGVMb2FkVGFibGUgPSAocHJvcHM6IHtGaWVsZHM6IEFycmF5PElDb25maWdGaWxlRmllbGQ+LCBTZXR0ZXI6IChpbmRleDogbnVtYmVyLHZhbHVlOiBib29sZWFuKSA9PiB2b2lkfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgeyBrZXk6ICdJbmNsdWRlJywgbGFiZWw6ICdJbmNsdWRlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICczLjVlbScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICczLjVlbScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IChpdGVtLkluY2x1ZGUgPyA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTZweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2stc3F1YXJlLW8gZmEtM3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+IDogbnVsbCkgfSxcclxuICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnRmllbGQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxGb3JtSW5wdXQ8SUNvbmZpZ0ZpbGVGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J05hbWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICB7IGtleTogJ0ZpZWxkVHlwZScsIGxhYmVsOiAnVHlwZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPEZvcm1JbnB1dDxJQ29uZmlnRmlsZUZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnRmllbGRUeXBlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgeyBrZXk6ICdDb21wYXJpc29uJywgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxGb3JtSW5wdXQ8SUNvbmZpZ0ZpbGVGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0NvbXBhcmlzb24nfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICB7IGtleTogJ1ZhbHVlJywgbGFiZWw6ICdWYWx1ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPEZvcm1JbnB1dDxJQ29uZmlnRmlsZUZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnVmFsdWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcblxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICBkYXRhPXtwcm9wcy5GaWVsZHN9XHJcbiAgICAgICAgICAgIHNvcnRGaWVsZD17J05hbWUnfVxyXG4gICAgICAgICAgICBhc2NlbmRpbmc9e3RydWV9XHJcbiAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHsgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KGQpID0+IHsgcHJvcHMuU2V0dGVyKGQucm93LklELCAhZC5yb3cuSW5jbHVkZSl9fVxyXG4gICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3TWV0ZXJXaXp6YXJkO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE5ld01ldGVyV2l6emFyZC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTcvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCwgT3BlblhEQSB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybVNlbGVjdCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnOztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJy4uL0NvbW1vbi9XYXJuaW5nJztcclxuaW1wb3J0IHsgRmlsdGVyLCBNZXRlckZpbHRlciB9IGZyb20gJy4uL01ldGVyT3ZlcnZpZXcvTWV0ZXJGaWx0ZXInO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgc2V0TWV0ZXI6IChtZXRlcjogUFJDMDAyLklNZXRlcikgPT4gdm9pZCwgc2VsZWN0ZWRNZXRlcjogUFJDMDAyLklNZXRlciB9XHJcblxyXG5jb25zdCBTZWxlY3RNZXRlciA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW01ldGVyTGlzdCwgc2V0TWV0ZXJMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JTWV0ZXI+PihbXSk7XHJcbiAgICBjb25zdCBbbWV0ZXJGaWx0ZXIsIHNldE1ldGVyRmlsdGVyXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEZpbHRlcj4+KFtdKTtcclxuICAgIGNvbnN0IFttZXRlclNvcnQsIHNldE1ldGVyU29ydF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBQUkMwMDIuSU1ldGVyPihcIkFzc2V0S2V5XCIpO1xyXG4gICAgY29uc3QgW21ldGVyQXNjLCBzZXRNZXRlckFzY10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVNZXRlckxpc3QgPSBnZXRNZXRlckxpc3QoKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlTWV0ZXJMaXN0ICE9IG51bGwgJiYgaGFuZGxlTWV0ZXJMaXN0LmFib3J0ICE9IG51bGwpIGhhbmRsZU1ldGVyTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcywgbWV0ZXJBc2MsIG1ldGVyU29ydCwgbWV0ZXJGaWx0ZXJdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlckxpc3QoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JTWV0ZXI+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvU2VsZWN0YWJsZUxpc3RgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgU2VhcmNoZXM6IG1ldGVyRmlsdGVyLCBPcmRlckJ5OiBtZXRlclNvcnQsIEFzY2VuZGluZzogbWV0ZXJBc2MgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JTWV0ZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1ldGVyTGlzdChkYXRhKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0xpc3Qgb2YgbWV0ZXJzIHRvIFNlbGVjdCBGcm9tXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxNZXRlckZpbHRlciBJZD17J1NlbGVjdE1ldGVyRmlsdGVyJ30gaW5jbHVkZVN0YXR1cz17ZmFsc2V9IHNldEZpbHRlcj17KGZsdCkgPT4geyBzZXRNZXRlckZpbHRlcihmbHQpOyBjb25zb2xlLmxvZyhcInVwZGF0ZWQgRmlsdGVyIFdpenphcmRcIik7IH19IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiAgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYyggMTAwJSAtIDEzNnB4KScsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQXNzZXRLZXknLCBsYWJlbDogJ01ldGVyJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01ha2UnLCBsYWJlbDogJ01ha2UnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtNZXRlckxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXttZXRlclNvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXttZXRlckFzY31cclxuICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBtZXRlclNvcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1ldGVyQXNjKCFtZXRlckFzYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlckFzYyhtZXRlckFzYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlclNvcnQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyBwcm9wcy5zZXRNZXRlcihkLnJvdyk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5JRCA9PT0gKHByb3BzLnNlbGVjdGVkTWV0ZXIgPT0gdW5kZWZpbmVkID8gLTEgOiBwcm9wcy5zZWxlY3RlZE1ldGVyLklEKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TWV0ZXI7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9