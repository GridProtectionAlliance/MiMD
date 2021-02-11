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

/***/ "./TSX/MiMD/CommonComponents/SelectTable.tsx":
/*!***************************************************!*\
  !*** ./TSX/MiMD/CommonComponents/SelectTable.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__);
//******************************************************************************************************
//  SelectTable.tsx - Gbtc
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
//  01/22/2021 - C. Lackner
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



function SelectTable(props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.data), 2), data = _a[0], setData = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), selected = _b[0], setSelected = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.sortField), 2), sortField = _c[0], setSortField = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.ascending), 2), ascending = _d[0], setAscending = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.data.length != data.length)
            setData(props.data);
    }, [props.data]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setSelected(function (d) { return d.filter(function (keyItem) { return data.findIndex(function (item) { return item[props.keyField] == keyItem; }) > -1; }); });
    }, [data]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setData(function (lst) { return (lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](lst, [sortField], [(ascending ? "asc" : "desc")])); });
    }, [ascending, sortField]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        props.onSelection(data.filter(function (item) { return selected.findIndex(function (key) { return key == item[props.keyField]; }) > -1; }));
    }, [selected]);
    function handleClick(d, event) {
        var sIndex = selected.findIndex(function (item) { return item == d.row[props.keyField]; });
        if (sIndex == -1)
            setSelected(function (od) { return __spread(od, [d.row[props.keyField]]); });
        else
            setSelected(function (od) { return od.filter(function (item) { return item != d.row[props.keyField]; }); });
    }
    function handleSort(data) {
        if (data.col == sortField)
            setAscending(!ascending);
        else
            setSortField(data.col);
    }
    var tableProps = {
        cols: __spread([
            { key: null, label: '', headerStyle: { width: '4em' }, rowStyle: { width: '4em' }, content: function (item, key, style) { return (selected.findIndex(function (i) { return i == item[props.keyField]; }) > -1 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { marginTop: '16px', textAlign: 'center' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-check-square-o fa-3x", "aria-hidden": "true" })) : null); } }
        ], props.cols),
        data: data,
        onClick: handleClick,
        sortField: sortField,
        ascending: ascending,
        onSort: handleSort,
        tableClass: props.tableClass,
        tableStyle: props.tableStyle,
        theadStyle: props.theadStyle,
        theadClass: props.theadClass,
        tbodyStyle: props.tbodyStyle,
        tbodyClass: props.tbodyClass,
        selected: function (d) { return false; },
        rowStyle: props.rowStyle
    };
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default.a, __assign({}, tableProps));
}


/***/ }),

/***/ "./TSX/MiMD/CommonComponents/Table.tsx":
/*!*********************************************!*\
  !*** ./TSX/MiMD/CommonComponents/Table.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  Table.tsx - Gbtc
//
//  Copyright © 2018, Grid Protection Alliance.  All Rights Reserved.
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
//  08/02/2018 - Billy Ernest
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


var AngleIcon = function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { width: 10, height: 10, margin: 3 }, className: "fa fa-angle-" + (props.ascending ? 'up' : 'down') }); };
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        return _super.call(this, props) || this;
    }
    Table.prototype.componentDidUpdate = function (prevProps, prevState) {
    };
    Table.prototype.render = function () {
        var rowComponents = this.generateRows();
        var headerComponents = this.generateHeaders();
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: (this.props.tableClass != undefined ? this.props.tableClass : ''), style: this.props.tableStyle },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", { style: this.props.theadStyle }, headerComponents),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", { style: this.props.tbodyStyle }, rowComponents)));
    };
    Table.prototype.generateHeaders = function () {
        var _this = this;
        if (this.props.cols.length == 0)
            return null;
        var cells = this.props.cols.map(function (colData, index) {
            var style;
            if (colData.headerStyle != undefined) {
                style = colData.headerStyle;
            }
            else
                style = {};
            if (style.cursor == undefined)
                style.cursor = 'pointer';
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { key: index, style: style, onClick: function (e) { return _this.handleSort({ col: colData.key, ascending: _this.props.ascending }, e); } },
                colData.label,
                (_this.props.sortField == colData.key ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AngleIcon, { ascending: _this.props.ascending }) : null));
        });
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null, cells);
    };
    Table.prototype.generateRows = function () {
        var _this = this;
        if (this.props.data.length == 0)
            return null;
        return this.props.data.map(function (item, index) {
            var cells = _this.props.cols.map(function (colData) {
                var style = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](colData.rowStyle);
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { key: index.toString() + item[colData.key] + colData.key, style: style, onClick: _this.handleClick.bind(_this, { col: colData.key, row: item, data: item[colData.key] }) }, colData.content != undefined ? colData.content(item, colData.key, style) : item[colData.key]);
            });
            var style;
            if (_this.props.rowStyle != undefined) {
                style = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](_this.props.rowStyle);
            }
            else
                style = {};
            if (style.cursor == undefined)
                style.cursor = 'pointer';
            if (_this.props.selected(item))
                style.backgroundColor = 'yellow';
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { style: style, key: index.toString() }, cells);
        });
    };
    Table.prototype.handleClick = function (data, event) {
        this.props.onClick(data, event);
    };
    Table.prototype.handleSort = function (data, event) {
        this.props.onSort(data);
    };
    return Table;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Table);
;


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
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
                    handle.abort; };
            } }),
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
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_3__["Modal"], { Title: props.FileName, CallBack: function () { setShowDetails(false); }, Show: showDetails, ShowCancel: false, ConfirmBtnClass: 'btn-danger', ConfirmText: 'Close' },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "well", style: { backgroundColor: 'lightgrey', fontSize: 18 }, dangerouslySetInnerHTML: { __html: html } }))));
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
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), ascending = _b[0], setAscending = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Timestamp'), 2), sortField = _c[0], setSortField = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleActionList = getActions();
        return function () {
            if (handleActionList != null && handleActionList.abort != null)
                handleActionList.abort();
        };
    }, [props.RecordId, ascending, sortField]);
    function getActions() {
        if (props.RecordId == -1)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/Action/" + props.RecordId + "/" + sortField + "/" + (ascending ? 1 : 0),
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
                                                            alignContent: 'center',
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
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), valueList = _e[0], setValueList = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), allvalueList = _f[0], setAllValueList = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showAck = _g[0], setShowAck = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showRev = _h[0], setShowRev = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showResolve = _j[0], setShowResolve = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showRap = _k[0], setShowRap = _k[1];
    var _l = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showNote = _l[0], setShowNote = _l[1];
    var _m = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showBaseConfig = _m[0], setShowBaseConfig = _m[1];
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
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { props.setSelectedAction(-1); $('#currentConfig').show(); } }, " Current Configuration"))),
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FieldValues__WEBPACK_IMPORTED_MODULE_3__["default"], { Label: (props.selectedAction == -1 ? 'Current Configuration' : 'Related Configuration'), Id: 'currentConfig', FieldList: (props.selectedAction == -1 ? allvalueList : valueList) }),
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
        else
            setFieldIndex(function (index) { return index - 1; });
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
    var stepComplete = (step == 'Note' ? note.length > 0 : true);
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
            step == 'Change' && (updatedFld[fieldIndex].Value == null || updatedFld[fieldIndex].Value.length == 0) ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                "A Value is required.") : null,
            step == 'Change' && updatedFld[fieldIndex].FieldType == 'number' && isNaN(parseFloat(updatedFld[fieldIndex].Value)) ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RecordList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecordList */ "./TSX/MiMD/PRC-002/MeterOverview/RecordList.tsx");
/* harmony import */ var _MeterDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeterDetail */ "./TSX/MiMD/PRC-002/MeterOverview/MeterDetail.tsx");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DowloadFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DowloadFile */ "./TSX/MiMD/PRC-002/MeterOverview/DowloadFile.tsx");
/* harmony import */ var _Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/BaseConfigWindow */ "./TSX/MiMD/PRC-002/Common/BaseConfigWindow.tsx");
/* harmony import */ var _MeterWizzard_NewMeterWizzard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MeterWizzard/NewMeterWizzard */ "./TSX/MiMD/PRC-002/MeterWizzard/NewMeterWizzard.tsx");
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










var standardSearch = [
    { key: 'Name', label: 'Name', type: 'string' },
    { key: 'AssetKey', label: 'Asset Key', type: 'string' },
    { key: 'Make', label: 'Make', type: 'string' },
    { key: 'Model', label: 'Model', type: 'string' },
    { key: 'Status', label: 'Compliance Status', type: 'enum', enum: [] }
];
var PRC002MeterOverviewPage = function (props) {
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), meterFilters = _a[0], setMeterFilters = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), statusList = _b[0], setStatusList = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]("Status"), 2), meterSort = _c[0], setMeterSort = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), meterAsc = _d[0], setMeterAsc = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), meterList = _e[0], setMeterList = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), 2), selectedMeter = _f[0], setSelectedMeter = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('None'), 2), hover = _g[0], setHover = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showNewMeterWizard = _h[0], setShowNewMeterWizard = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showBaseConfig = _j[0], setShowBaseConfig = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showFiles = _k[0], setShowFiles = _k[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handleStatusList = getStatus();
        return function () {
            if (handleStatusList.abort != null)
                handleStatusList.abort();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
        });
        return handle;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%', height: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["SearchBar"], { SetFilter: setMeterFilters, CollumnList: standardSearch, defaultCollumn: { key: 'Name', label: 'Name', type: 'string' }, Direction: 'left', Label: 'Search', Width: '50%', GetEnum: function (setOptions, field) {
                if (field.key == 'Status')
                    setOptions(statusList.map(function (item) { return ({ Label: item.Description, Value: item.Description }); }));
                return function () { };
            } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item", style: { width: '50%', paddingRight: 10 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("fieldset", { className: "border", style: { padding: '10px', height: '100%' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("legend", { className: "w-auto", style: { fontSize: 'large' } }, "Actions:"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'row' },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return setShowNewMeterWizard(true); } }, " Add New Meter to PRC002 ")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block" + (selectedMeter == null ? ' disabled' : ''), "data-tooltip": 'BaseConfig', onClick: function () { return setShowBaseConfig(selectedMeter != null); }, onMouseOver: function () { return setHover('BaseConfig'); }, onMouseOut: function () { return setHover('None'); } }, " Meter Configuration "),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block" + (selectedMeter == null ? ' disabled' : ''), onMouseOver: function () { return setHover('Files'); }, onMouseOut: function () { return setHover('None'); }, "data-tooltip": 'Files', onClick: function () { return setShowFiles(selectedMeter != null); } }, " Download Files ")))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["ToolTip"], { Position: 'bottom', Show: hover == 'Files' && selectedMeter == null, Target: 'Files' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, " A Meter needs to be selected.")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["ToolTip"], { Position: 'bottom', Show: hover == 'BaseConfig' && selectedMeter == null, Target: 'BaseConfig' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, " A Meter needs to be selected.")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["Modal"], { Title: 'Meter Base Configuration', Show: showBaseConfig, CallBack: function (confirm) { setShowBaseConfig(false); }, Size: 'lg', ShowX: true, ShowCancel: false, ConfirmText: 'Close' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_7__["BaseConfigByMeter"], { MeterId: props.MeterID })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["Modal"], { Title: 'Download Current Config File', Show: showFiles, CallBack: function (confirm) { setShowFiles(false); }, Size: 'sm', ShowX: true, ShowCancel: false, ConfirmText: 'Close' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DowloadFile__WEBPACK_IMPORTED_MODULE_6__["default"], { MeterId: props.MeterID })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MeterWizzard_NewMeterWizzard__WEBPACK_IMPORTED_MODULE_8__["default"], { show: showNewMeterWizard, setShow: setShowNewMeterWizard }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '50%', height: 'calc( 100% - 136px)', padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_5___default.a, { cols: [
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
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MeterDetail__WEBPACK_IMPORTED_MODULE_3__["default"], { MeterID: (isNaN(props.MeterID) ? -1 : props.MeterID), stateList: statusList })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RecordList__WEBPACK_IMPORTED_MODULE_2__["default"], { MeterId: (isNaN(props.MeterID) ? -1 : props.MeterID), StateList: statusList })))))));
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
/* harmony import */ var _CommonComponents_SelectTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CommonComponents/SelectTable */ "./TSX/MiMD/CommonComponents/SelectTable.tsx");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_5__);
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
            updated.set(id_1, [{ Name: fileName, Pattern: fileName, MeterId: -1, ID: id_1 }, fields]);
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
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_5___default.a, { cols: [
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
        props.step == 'File Load' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_SelectTable__WEBPACK_IMPORTED_MODULE_4__["default"], { cols: [
                { key: 'Name', label: 'Field', headerStyle: { width: 'calc(30% - 8.25em)' }, rowStyle: { width: 'calc(50% - 8.25em)' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'Name', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                { key: 'FieldType', label: 'Type', headerStyle: { width: '8em' }, rowStyle: { width: '8em' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'FieldType', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                { key: 'Comparison', label: '', headerStyle: { width: '5em' }, rowStyle: { width: '5em' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'Comparison', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                { key: 'Value', label: 'Value', headerStyle: { width: 'calc(70% - 8.25em)' }, rowStyle: { width: 'calc(50% - 8.25em)' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: item, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
            ], keyField: 'Name', tableClass: "table table-hover", data: fileFields, sortField: 'Name', ascending: true, onSelection: function (d) {
                setFileFields(function (lst) {
                    var update = [];
                    update = lst.map(function (item) { return (__assign(__assign({}, item), { Include: (d.findIndex(function (i) { return i.ID == item.ID; }) > -1) })); });
                    return update;
                });
            }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, onClick: function () { }, onSort: function () { } }) : null));
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
        r.onload = function (e) {
            var contents = e.target.result;
            var lines = contents.split(/[\r\n]+/g);
            lines.forEach(function (ln, index) {
                //Parse header first
                if (!ln.includes('='))
                    return;
                var i = ln.indexOf('=');
                var row = ln.substring(0, i);
                if (row.toLowerCase() == 'header') {
                    var data = ln.substring(i + 1).split(',');
                    var newIndex = Math.max.apply(Math, __spread(results.map(function (item) { return item.ID; }), [0])) + 1;
                    if (data.length > 1) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Station", Value: data[1] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 2) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Nominal Frequency", Value: data[2] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 3) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Num. DC Channels", Value: data[3] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 4) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Num. Analog Channels", Value: data[4] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 5) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Num. Event Channels", Value: data[5] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 6) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Num. Triggers", Value: data[6] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 7) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Shunt Type", Value: data[7] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 8) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "OverWrite old Records", Value: data[8] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 9) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "SER Channels in PAR", Value: data[9] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 10) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "SER CHannels that cause DFR Stop", Value: data[10] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 11) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "SER AutoStop if  #Triggers >", Value: data[11] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 12) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "SER AutoStop Time Period", Value: data[12] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 13) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "SER Restore Period", Value: data[13] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 14) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Debounce Time", Value: data[14] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 15) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Transient Prefault", Value: data[15] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 16) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Transient Postfault", Value: data[16] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 17) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Transient Fault Limit", Value: data[17] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 18) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Transient Sampling Frequency", Value: data[18] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 19) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Extended Prefault", Value: data[19] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 20) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Extended Post Fault", Value: data[20] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 21) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Extended Fault", Value: data[21] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 22) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Extended Sampling Frequency", Value: data[22] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 23) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Extended RMS Cycles/Point", Value: data[23] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 24) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Continuous Recording Samples/Point Freq-RMS-Phase", Value: data[24] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 25) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Continuous Recording Storage Length (Days)", Value: data[25] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 26) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Continous Oscillography Storage Length (Days)", Value: data[26] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 27) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Trigger Channels - Auto Stop If # Triggers >", Value: data[27] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 28) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Triggers Channels Auto Stop Time Period (Minutes)", Value: data[28] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 29) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Triggers Channels Auto Stop - Restore After (Mins)", Value: data[29] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 30) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Triggers Channel Auto Stop - Apply to Disturbance Triggers Only (0=no 1=yes)", Value: data[30] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 31) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Transient Rate Oscillography Storage (Days)", Value: data[31] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 32) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "# Faults on Disk", Value: data[32] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 33) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Master Chassis", Value: data[33] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 34) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Extended RMS Include Phase Angle", Value: data[34] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 35) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "EVNOMISS (Do Not Restrict Event Only Trigger)", Value: data[35] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 36) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "Continuous PQ Data", Value: data[36] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 37) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "CBA Phase Rotation", Value: data[37] });
                        newIndex = newIndex + 1;
                    }
                    if (data.length > 38) {
                        results.push({ ID: newIndex, BaseConfigId: -1, Comparison: '=', FieldType: 'string', Name: "# of TW Channels", Value: data[38] });
                        newIndex = newIndex + 1;
                    }
                }
                complete(results);
            });
        };
        r.readAsText(f);
    }
    return results;
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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["SearchBar"], { SetFilter: setMeterFilter, CollumnList: standardSearch, defaultCollumn: { key: 'Name', label: 'Name', type: 'string' }, Direction: 'left', Label: 'Search', Width: '100%', GetEnum: function (setOptions, field) {
                return function () { };
            } }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29tbW9uQ29tcG9uZW50cy9TZWxlY3RUYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29tbW9uQ29tcG9uZW50cy9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29uZmlndXJhdGlvbi9Db25maWd1cmF0aW9uQnlNZXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29uZmlndXJhdGlvbi9Db25maWd1cmF0aW9uRmlsZUNoYW5nZXMudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL0NvbmZpZ3VyYXRpb24vQ29uZmlndXJhdGlvbkZpbGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NoYW5nZU92ZXJ2aWV3L0FjdGlvbkhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9BY3Rpb25MaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NoYW5nZU92ZXJ2aWV3L0NoYW5nZU92ZXJ2aWV3UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9GaWVsZFZhbHVlcy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9SZWNvcmREZXRhaWwudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvQ2hhbmdlT3ZlcnZpZXcvUmVzb2x2ZVJlY29yZC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9Db21tb24vQmFzZUNvbmZpZ1dpbmRvdy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9Db21tb24vTWFudWFsQWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyT3ZlcnZpZXcvRG93bG9hZEZpbGUudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJPdmVydmlldy9NZXRlckRldGFpbC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9NZXRlck92ZXJ2aWV3L01ldGVyT3ZlcnZpZXdQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyT3ZlcnZpZXcvUmVjb3JkTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9NZXRlcldpenphcmQvQmFzZUNvbmZpZ1dpbmRvdy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9NZXRlcldpenphcmQvRmlsZVBhcnNlci50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9NZXRlcldpenphcmQvTmV3TWV0ZXJXaXp6YXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyV2l6emFyZC9TZWxlY3RNZXRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FBd0c7QUFDeEcsd0JBQXdCO0FBQ3hCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7O0FBRXpFO0FBQ0g7QUFFNUI7SUFBMEMsNkJBQWtMO0lBQTVOOztJQWdCQSxDQUFDO0lBZkcsMEJBQU0sR0FBTjtRQUFBLGlCQWND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T0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDeEYsUUFBUSxFQUFFLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQTVFLENBQTRFLEdBQ2xHLENBQ04sQ0FDUCxDQUNOO0FBQ0wsQ0FBQztBQUdjLDBFQUFXLEVBQUMiLCJmaWxlIjoiQ29uZmlndXJhdGlvbkJ5TWV0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRm9ybUlucHV0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMS8yMi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtSW5wdXQ8VD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8eyBSZWNvcmQ6IFQsIEZpZWxkOiBrZXlvZiAoVCksIFNldHRlcjogKHJlY29yZDogVCkgPT4gdm9pZCwgVmFsaWQ6IChmaWVsZDoga2V5b2YgKFQpKSA9PiBib29sZWFuLCBMYWJlbD86IHN0cmluZywgRmVlZGJhY2s/OiBzdHJpbmcsIERpc2FibGVkPzogYm9vbGVhbiB9LCB7fSwge30+e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnByb3BzLkxhYmVsID09IG51bGwgPyB0aGlzLnByb3BzLkZpZWxkIDogdGhpcy5wcm9wcy5MYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5WYWxpZCh0aGlzLnByb3BzLkZpZWxkKSA/IFwiZm9ybS1jb250cm9sXCIgOiBcImZvcm0tY29udHJvbCBpcy1pbnZhbGlkXCIpfSBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlY29yZDogVCA9IF8uY2xvbmUodGhpcy5wcm9wcy5SZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQudmFsdWUgIT0gXCJcIilcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0gPSBldnQudGFyZ2V0LnZhbHVlIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuU2V0dGVyKHJlY29yZCk7XHJcbiAgICAgICAgICAgIH19IHZhbHVlPXt0aGlzLnByb3BzLlJlY29yZFt0aGlzLnByb3BzLkZpZWxkXSA9PSBudWxsID8gJycgOiB0aGlzLnByb3BzLlJlY29yZFt0aGlzLnByb3BzLkZpZWxkXS50b1N0cmluZygpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5EaXNhYmxlZCA9PSBudWxsID8gZmFsc2UgOiB0aGlzLnByb3BzLkRpc2FibGVkIH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludmFsaWQtZmVlZGJhY2snPnt0aGlzLnByb3BzLkZlZWRiYWNrID09IG51bGwgPyB0aGlzLnByb3BzLkZpZWxkICsgJyBpcyBhIHJlcXVpcmVkIGZpZWxkLicgOiB0aGlzLnByb3BzLkZlZWRiYWNrfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgU2VsZWN0VGFibGUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAxLzIyLzIwMjEgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBUYWJsZSwgeyBUYWJsZVByb3BzIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSdcclxuaW1wb3J0IHsgc2VsZWN0aW9uIH0gZnJvbSAnZDMnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdFRhYmxlUHJvcHM8VD4gZXh0ZW5kcyBUYWJsZVByb3BzPFQ+IHtcclxuICAgIG9uU2VsZWN0aW9uOiAoc2VsZWN0ZWQ6IFRbXSkgPT4gdm9pZDtcclxuICAgIGtleUZpZWxkOiBrZXlvZiBULFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3RUYWJsZTxUPihwcm9wczogSVNlbGVjdFRhYmxlUHJvcHM8VD4pIHtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxUW10+KHByb3BzLmRhdGEpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG5cclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHByb3BzLnNvcnRGaWVsZCk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4ocHJvcHMuYXNjZW5kaW5nKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5kYXRhLmxlbmd0aCAhPSBkYXRhLmxlbmd0aClcclxuICAgICAgICAgICAgc2V0RGF0YShwcm9wcy5kYXRhKTtcclxuICAgIH0sIFtwcm9wcy5kYXRhXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZCgoZCkgPT4gZC5maWx0ZXIoa2V5SXRlbSA9PiBkYXRhLmZpbmRJbmRleChpdGVtID0+IGl0ZW1bcHJvcHMua2V5RmllbGRdID09IGtleUl0ZW0pID4gLTEpKVxyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoKGxzdCkgPT4gKF8ub3JkZXJCeShsc3QsIFtzb3J0RmllbGRdLCBbKGFzY2VuZGluZyA/IFwiYXNjXCIgOiBcImRlc2NcIildKSkpXHJcbiAgICB9LCBbYXNjZW5kaW5nLCBzb3J0RmllbGRdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLm9uU2VsZWN0aW9uKGRhdGEuZmlsdGVyKGl0ZW0gPT4gc2VsZWN0ZWQuZmluZEluZGV4KGtleSA9PiBrZXkgPT0gaXRlbVtwcm9wcy5rZXlGaWVsZF0pID4gLTEpKTtcclxuICAgIH0sIFtzZWxlY3RlZF0pXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soXHJcbiAgICAgICAgZDogeyBjb2w6IGtleW9mIFQ7IHJvdzogVDsgZGF0YTogYW55IH0sXHJcbiAgICAgICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQgPCBIVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudCwgTW91c2VFdmVudCA+LFxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHNJbmRleCA9IHNlbGVjdGVkLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT0gZC5yb3dbcHJvcHMua2V5RmllbGRdKTtcclxuICAgICAgICBpZiAoc0luZGV4ID09IC0xKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZCgob2QpID0+IFsuLi5vZCwgZC5yb3dbcHJvcHMua2V5RmllbGRdXSlcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkKChvZCkgPT4gb2QuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPSBkLnJvd1twcm9wcy5rZXlGaWVsZF0pKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTb3J0KFxyXG4gICAgICAgIGRhdGE6IHsgY29sOiBrZXlvZiBUOyBhc2NlbmRpbmc6IGJvb2xlYW4gfSxcclxuICAgICkge1xyXG4gICAgICAgIGlmIChkYXRhLmNvbCA9PSBzb3J0RmllbGQpXHJcbiAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICBzZXRTb3J0RmllbGQoZGF0YS5jb2wgYXMgc3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YWJsZVByb3BzOiBUYWJsZVByb3BzPFQ+ID0ge1xyXG4gICAgICAgIGNvbHM6IFtcclxuICAgICAgICAgICAgeyBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICc0ZW0nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnNGVtJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gKHNlbGVjdGVkLmZpbmRJbmRleChpID0+IGkgPT0gaXRlbVtwcm9wcy5rZXlGaWVsZF0pID4gLTEgPyA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzE2cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrLXNxdWFyZS1vIGZhLTN4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PiA6IG51bGwpIH0sXHJcbiAgICAgICAgICAgIC4uLnByb3BzLmNvbHNcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgb25DbGljazogaGFuZGxlQ2xpY2ssXHJcbiAgICAgICAgc29ydEZpZWxkOiBzb3J0RmllbGQsXHJcbiAgICAgICAgYXNjZW5kaW5nOiBhc2NlbmRpbmcsXHJcbiAgICAgICAgb25Tb3J0OiBoYW5kbGVTb3J0LFxyXG4gICAgICAgIHRhYmxlQ2xhc3M6IHByb3BzLnRhYmxlQ2xhc3MsXHJcbiAgICAgICAgdGFibGVTdHlsZTogcHJvcHMudGFibGVTdHlsZSxcclxuICAgICAgICB0aGVhZFN0eWxlOiBwcm9wcy50aGVhZFN0eWxlLFxyXG4gICAgICAgIHRoZWFkQ2xhc3M6IHByb3BzLnRoZWFkQ2xhc3MsXHJcbiAgICAgICAgdGJvZHlTdHlsZTogcHJvcHMudGJvZHlTdHlsZSxcclxuICAgICAgICB0Ym9keUNsYXNzOiBwcm9wcy50Ym9keUNsYXNzLFxyXG4gICAgICAgIHNlbGVjdGVkOiAoZDogVCkgPT4gZmFsc2UsXHJcbiAgICAgICAgcm93U3R5bGU6IHByb3BzLnJvd1N0eWxlXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8VGFibGUgey4uLnRhYmxlUHJvcHN9IC8+O1xyXG5cclxufVxyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRhYmxlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE4LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8wMi8yMDE4IC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBBbmdsZUljb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgYXNjZW5kaW5nOiBib29sZWFuIH0+ID0gKHByb3BzKSA9PiA8c3BhbiBzdHlsZT17eyB3aWR0aDogMTAsIGhlaWdodDogMTAsIG1hcmdpbjogMyB9fSBjbGFzc05hbWU9e1wiZmEgZmEtYW5nbGUtXCIgKyAocHJvcHMuYXNjZW5kaW5nID8gJ3VwJyA6ICdkb3duJyl9Pjwvc3Bhbj5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVQcm9wczxUPiB7XHJcbiAgICBjb2xzOiBBcnJheTx7IGtleToga2V5b2YoVCkgfCBudWxsLCBsYWJlbDogc3RyaW5nLCBoZWFkZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMsIHJvd1N0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcywgY29udGVudD8oaXRlbTogVCwga2V5OiBrZXlvZihUKSwgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMpOiBSZWFjdC5SZWFjdE5vZGUgfT4sXHJcbiAgICBkYXRhOiBBcnJheTxUPixcclxuICAgIG9uQ2xpY2s6IChkYXRhOiB7IGNvbDoga2V5b2YgKFQpLCByb3c6IFQsIGRhdGE6IFRba2V5b2YoVCldIH0sIGV2ZW50OiBhbnkpID0+IHZvaWQsXHJcbiAgICBzb3J0RmllbGQ6IHN0cmluZyxcclxuICAgIGFzY2VuZGluZzogYm9vbGVhbixcclxuICAgIG9uU29ydChkYXRhOiB7IGNvbDoga2V5b2YgKFQpLCBhc2VuZGluZzogYm9vbGVhbn0pOiB2b2lkLFxyXG4gICAgdGFibGVDbGFzcz86IHN0cmluZyxcclxuICAgIHRhYmxlU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxyXG4gICAgdGhlYWRTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMsXHJcbiAgICB0aGVhZENsYXNzPzogc3RyaW5nLFxyXG4gICAgdGJvZHlTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMsXHJcbiAgICB0Ym9keUNsYXNzPzogc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWQ/KGRhdGE6IFQpOiBib29sZWFuLFxyXG4gICAgcm93U3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZTxUPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUYWJsZVByb3BzPFQ+LCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciByb3dDb21wb25lbnRzID0gdGhpcy5nZW5lcmF0ZVJvd3MoKTtcclxuICAgICAgICB2YXIgaGVhZGVyQ29tcG9uZW50cyA9IHRoaXMuZ2VuZXJhdGVIZWFkZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17KHRoaXMucHJvcHMudGFibGVDbGFzcyAhPSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgOiAnJyl9IHN0eWxlPXt0aGlzLnByb3BzLnRhYmxlU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkIHN0eWxlPXt0aGlzLnByb3BzLnRoZWFkU3R5bGV9PntoZWFkZXJDb21wb25lbnRzfTwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHkgc3R5bGU9e3RoaXMucHJvcHMudGJvZHlTdHlsZX0+e3Jvd0NvbXBvbmVudHN9PC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlSGVhZGVycygpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2xzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgdmFyIGNlbGxzID0gdGhpcy5wcm9wcy5jb2xzLm1hcCgoY29sRGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHN0eWxlO1xyXG4gICAgICAgICAgICBpZiAoY29sRGF0YS5oZWFkZXJTdHlsZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gY29sRGF0YS5oZWFkZXJTdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0eWxlLmN1cnNvciA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPHRoIGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlU29ydCh7IGNvbDogY29sRGF0YS5rZXksIGFzY2VuZGluZzogdGhpcy5wcm9wcy5hc2NlbmRpbmcgfSwgZSl9Pntjb2xEYXRhLmxhYmVsfXsodGhpcy5wcm9wcy5zb3J0RmllbGQgPT0gY29sRGF0YS5rZXkgPyA8QW5nbGVJY29uIGFzY2VuZGluZz17dGhpcy5wcm9wcy5hc2NlbmRpbmd9IC8+IDogbnVsbCl9PC90aD5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDx0cj57Y2VsbHN9PC90cj47XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVSb3dzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGEubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNlbGxzID0gdGhpcy5wcm9wcy5jb2xzLm1hcChjb2xEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IF8uY2xvbmUoY29sRGF0YS5yb3dTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPHRkXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleC50b1N0cmluZygpICsgaXRlbVtjb2xEYXRhLmtleV0gKyBjb2xEYXRhLmtleX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsIHsgY29sOiBjb2xEYXRhLmtleSwgcm93OiBpdGVtLCBkYXRhOiBpdGVtW2NvbERhdGEua2V5XSB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sRGF0YS5jb250ZW50ICE9IHVuZGVmaW5lZCA/IGNvbERhdGEuY29udGVudChpdGVtLCBjb2xEYXRhLmtleSwgc3R5bGUpIDogaXRlbVtjb2xEYXRhLmtleV19XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdHlsZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJvd1N0eWxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBfLmNsb25lKHRoaXMucHJvcHMucm93U3R5bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkKGl0ZW0pKVxyXG4gICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPHRyIHN0eWxlPXtzdHlsZX0ga2V5PXtpbmRleC50b1N0cmluZygpfT57Y2VsbHN9PC90cj47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZGF0YTogeyBjb2w6IGtleW9mKFQpLCByb3c6IFQsIGRhdGE6IGFueSB9LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhkYXRhLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU29ydChkYXRhLCBldmVudCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Tb3J0KGRhdGEpO1xyXG4gICAgfVxyXG59O1xyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlndXJhdGlvbkJ5TWV0ZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA4LzIyLzIwMTkgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgQ29uZmlndXJhdGlvbkZpbGVzIGZyb20gJy4vQ29uZmlndXJhdGlvbkZpbGVzJztcclxuaW1wb3J0IENvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcyBmcm9tICcuL0NvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcyc7XHJcbmltcG9ydCBOb3RlV2luZG93IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvTm90ZVdpbmRvdyc7XHJcbmltcG9ydCB7IFNlYXJjaCwgU2VhcmNoQmFyIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmNvbnN0IHN0YW5kYXJkU2VhcmNoOiBTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+W10gPSBbXHJcbiAgICB7IGtleTogJ1N0YXRpb24nLCBsYWJlbDogJ1N0YXRpb24nLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdEYXRlTGFzdENoYW5nZWQnLCBsYWJlbDogJ0RhdGUgTGFzdCBDaGFuZ2VkJywgdHlwZTogJ2RhdGV0aW1lJyB9XHJcbl07XHJcblxyXG5jb25zdCBDb25maWd1cmF0aW9uQnlNZXRlcjogTWlNRC5CeUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJhYmxlTGlzdCwgc2V0RmlsdGVyYWJsZUxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8U2VhcmNoLklGaWVsZDxNaU1ELk1ldGVyPj4+KHN0YW5kYXJkU2VhcmNoKTtcclxuICAgIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFNlYXJjaC5JRmlsdGVyPE1pTUQuTWV0ZXI+Pj4oW10pO1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1pTUQuTWV0ZXI+PihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignRGF0ZUxhc3RDaGFuZ2VkJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IGdldE1ldGVycygpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7IGlmIChoYW5kbGUgIT0gbnVsbCAmJiBoYW5kbGUuYWJvcnQgIT0gbnVsbCkgaGFuZGxlLmFib3J0KCk7IH1cclxuICAgIH0sIFthc2NlbmRpbmcsIHNvcnRGaWVsZCwgZmlsdGVyc10pXHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IGdldEFkZGl0aW9uYWxGaWVsZHMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSBudWxsKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1ldGVycygpOiBKUXVlcnkuanFYSFI8QXJyYXk8TWlNRC5NZXRlcj4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL01ldGVyL0NvbmZpZy9TZWFyY2hhYmxlTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBTZWFyY2hlczogZmlsdGVycywgT3JkZXJCeTogc29ydEZpZWxkLCBBc2NlbmRpbmc6IGFzY2VuZGluZyB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8TWlNRC5NZXRlcj4pID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShkYXRhKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFkZGl0aW9uYWxGaWVsZHMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1pTUQuQWRkaXRpb25hbEZpZWxkPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0FkZGl0aW9uYWxGaWVsZC9QYXJlbnRUYWJsZS9NZXRlcmAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBDb252ZXJ0VHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnaW50ZWdlcicgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdkYXRldGltZScgfHwgdHlwZSA9PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbnVtJywgZW51bTogW3sgTGFiZWw6IHR5cGUsIFZhbHVlOiB0eXBlIH0gXVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkOiBBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4pID0+IHtcclxuICAgICAgICAgICAgbGV0IG9yZGVyZWQgPSBfLm9yZGVyQnkoc3RhbmRhcmRTZWFyY2guY29uY2F0KGQubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogaXRlbS5GaWVsZE5hbWUsIGtleTogaXRlbS5GaWVsZE5hbWUsIC4uLkNvbnZlcnRUeXBlKGl0ZW0uVHlwZSkgfSBhcyBTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+XHJcbiAgICAgICAgICAgICkpKSwgWydsYWJlbCddLCBbXCJhc2NcIl0pO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJhYmxlTGlzdChvcmRlcmVkKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoaXRlbSwgZXZ0KSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6IGhvbWVQYXRoICsgJ2luZGV4LmNzaHRtbCcsIHNlYXJjaDogJz9uYW1lPUNvbmZpZ3VyYXRpb24mTWV0ZXJJRD0nICsgaXRlbS5yb3cuTWV0ZXJJRCwgc3RhdGU6IHt9IH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyPE1pTUQuTWV0ZXI+XHJcbiAgICAgICAgICAgICAgICBDb2xsdW1uTGlzdD17ZmlsdGVyYWJsZUxpc3R9XHJcbiAgICAgICAgICAgICAgICBTZXRGaWx0ZXI9eyhmbGRzKSA9PiBzZXRGaWx0ZXJzKGZsZHMpfVxyXG4gICAgICAgICAgICAgICAgRGlyZWN0aW9uPXsnbGVmdCd9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q29sbHVtbj17eyBrZXk6ICdTdGF0aW9uJywgbGFiZWw6ICdTdGF0aW9uJywgdHlwZTogJ3N0cmluZycgfX1cclxuICAgICAgICAgICAgICAgIFdpZHRoPXsnNTAlJ31cclxuICAgICAgICAgICAgICAgIExhYmVsPXsnU2VhcmNoJ31cclxuICAgICAgICAgICAgICAgIEdldEVudW09eyhzZXRPcHRpb25zLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYW5kbGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC50eXBlICE9ICdlbnVtJyB8fCBmaWVsZC5lbnVtID09IHVuZGVmaW5lZCB8fCBmaWVsZC5lbnVtLmxlbmd0aCAhPSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9WYWx1ZUxpc3QvR3JvdXAvJHtmaWVsZC5lbnVtWzBdLlZhbHVlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmRvbmUoZCA9PiAgc2V0T3B0aW9ucyhkLm1hcChpdGVtID0+ICh7IFZhbHVlOiBpdGVtLlZhbHVlLnRvU3RyaW5nKCksIExhYmVsOiBpdGVtLlRleHQgfSkpKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ID09IG51bGwpIGhhbmRsZS5hYm9ydDsgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L1NlYXJjaEJhcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnY2FsYyggMTAwJSAtIDEzNnB4KScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7bWFyZ2luOiAwLCBoZWlnaHQ6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZzowIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8TWlNRC5NZXRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1N0YXRpb24nLCBsYWJlbDogJ1N0YXRpb24nLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdUU0MnLCBsYWJlbDogJ1RTQycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTAlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEwJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnRGF0ZUxhc3RDaGFuZ2VkJywgbGFiZWw6ICdEYXRlIExhc3QgQ2hhbmdlZCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTUlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0gPT0gbnVsbCB8fCBpdGVtW2tleV0gPT0gJycpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbW9tZW50KGl0ZW1ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF5cyA9IG5vdy5kaWZmKGRhdGUsICdkYXlzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRheXMgPCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kQ29sb3InXSA9ICdyZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbJ2JhY2tncm91bmRDb2xvciddID0gJ29yYW5nZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbJ2JhY2tncm91bmRDb2xvciddID0gJ3llbGxvdyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6IDE3LCBwYWRkaW5nOiAwIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAwLCBwYWRkaW5nOiAwIH0gfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6ICdjYWxjKCAxMDAlIC0gNzBweCknLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBpdGVtLk1ldGVySUQgPT0gcHJvcHMuTWV0ZXJJRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nOiAwLCBtYXhIZWlnaHQ6ICcxMDAlJyAsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb25maWd1cmF0aW9uRmlsZXMgTWV0ZXJJRD17cHJvcHMuTWV0ZXJJRH0gRmlsZU5hbWU9e3Byb3BzLkZpbGVOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzIE1ldGVySUQ9e3Byb3BzLk1ldGVySUR9IEZpbGVOYW1lPXtwcm9wcy5GaWxlTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGVXaW5kb3cgSUQ9e3Byb3BzLk1ldGVySUR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vKlxyXG5pZiAoKFtcImludGVnZXJcIiwgXCJudW1iZXJcIiwgXCJib29sZWFuXCIsIFwic3RyaW5nXCIsIFwiZGF0ZXRpbWVcIl0pLmluZGV4T2YocHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUpIDwgMCkge1xyXG5sZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9WYWx1ZUxpc3QvR3JvdXAvJHtwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZX1gLFxyXG4gICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgYXN5bmM6IHRydWVcclxufSlcclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb25CeU1ldGVyO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDUvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5cclxuY29uc3QgQ29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzID0gKHByb3BzOiB7IE1ldGVySUQ6IG51bWJlciwgRmlsZU5hbWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbY29uZmlnRmlsZXMsIHNldENvbmZpZ0ZpbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PGFueT4+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBNaU1ELklDb25maWdGaWxlPignTGFzdFdyaXRlVGltZScpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbaHRtbCwgc2V0SHRtbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0RldGFpbHMsIHNldFNob3dEZXRhaWxzXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSB8fCBwcm9wcy5GaWxlTmFtZSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBnZXRDb25maWdGaWxlcygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YSkgPT4gc2V0Q29uZmlnRmlsZXMoZGF0YSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuTWV0ZXJJRCwgcHJvcHMuRmlsZU5hbWUsIGZsYWcsIGFzY2VuZGluZywgc29ydEZpZWxkXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbmZpZ0ZpbGVzKCkge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL0NvbmZpZ3VyYXRpb25GaWxlcy8ke3Byb3BzLk1ldGVySUR9LyR7cHJvcHMuRmlsZU5hbWV9LyR7ZmxhZ30vJHtzb3J0RmllbGR9LyR7YXNjZW5kaW5nID8gMTowfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1vbSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihtb20sICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICAgcmV0dXJuICdyZWQnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheXMgPCA3KVxyXG4gICAgICAgICAgICByZXR1cm4gJ29yYW5nZSc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3llbGxvdyc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgfHwgcHJvcHMuRmlsZU5hbWUgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e3Byb3BzLkZpbGVOYW1lfSBIaXN0b3J5OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBzdHlsZT17eyB6SW5kZXg6IDEgfX0gb25DaGFuZ2U9eyhldnQpID0+IHNldEZsYWcoIWZsYWcpfSB2YWx1ZT17ZmxhZyA/ICdvbicgOiAnb2ZmJ30gY2hlY2tlZD17ZmxhZyA/IHRydWUgOiBmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgPlNob3cgRmlsZXMgdy9vIENoYW5nZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlPE1pTUQuSUNvbmZpZ0ZpbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnTGFzdFdyaXRlVGltZScsIGxhYmVsOiAnTGFzdCBXcml0ZSBUaW1lJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kQ29sb3InXSA9IGdldENvbG9yKGl0ZW0uTGFzdFdyaXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQoaXRlbS5MYXN0V3JpdGVUaW1lKS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdDaGFuZ2VzJywgbGFiZWw6ICcjIG9mIENoYW5nZXMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0ZpbGVOYW1lJywgbGFiZWw6ICdGaWxlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogKGl0ZW0pID0+IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIG9uQ2xpY2s9eyhlKSA9PiB7IHNldFNob3dEZXRhaWxzKHRydWUpOyBzZXRIdG1sKGA8cD4ke2l0ZW0uVGV4dC5yZXBsYWNlKC9cXG4vZywgJzxicj4nKX08L3A+YCkgfX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZVwiPjwvaT48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ1RleHQnLCBsYWJlbDogJ0RpZmYnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAoaXRlbSkgPT4gPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IHsgc2V0U2hvd0RldGFpbHModHJ1ZSk7IHNldEh0bWwoaXRlbS5IdG1sLnJlcGxhY2UoLyZwYXJhOy9nLCAnJykpOyB9fT48c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIj48L2k+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NvbmZpZ0ZpbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSAnRmlsZU5hbWUnIHx8IGQuY29sID09ICdUZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiAnMTUwcHgnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWwgVGl0bGU9e3Byb3BzLkZpbGVOYW1lfSBDYWxsQmFjaz17KCkgPT4geyBzZXRTaG93RGV0YWlscyhmYWxzZSkgfX0gU2hvdz17c2hvd0RldGFpbHN9IFNob3dDYW5jZWw9e2ZhbHNlfSBDb25maXJtQnRuQ2xhc3M9eydidG4tZGFuZ2VyJ30gQ29uZmlybVRleHQ9eydDbG9zZSd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZXknLCBmb250U2l6ZTogMTh9fWRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzO1xyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlndXJhdGlvbkZpbGVzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNS8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuXHJcblxyXG5jb25zdCBDb25maWd1cmF0aW9uRmlsZXMgPSAocHJvcHM6IHsgTWV0ZXJJRDogbnVtYmVyLCBGaWxlTmFtZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtjb25maWdGaWxlcywgc2V0Q29uZmlnRmlsZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5JQ29uZmlnRmlsZT4+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBNaU1ELklDb25maWdGaWxlPignTGFzdFdyaXRlVGltZScpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldENvbmZpZ0ZpbGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhKSA9PiBzZXRDb25maWdGaWxlcyhkYXRhKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklELCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb25maWdGaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9Db25maWd1cmF0aW9uRmlsZXMvJHtwcm9wcy5NZXRlcklEfS9MYXN0V3JpdGVzLyR7c29ydEZpZWxkfS8ke2FzY2VuZGluZyA/IDEgOiAwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1vbSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihtb20sICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChmaWxlTmFtZSwgZXZ0KSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6IGhvbWVQYXRoICsgJ2luZGV4LmNzaHRtbCcsIHNlYXJjaDogYD9uYW1lPUNvbmZpZ3VyYXRpb24mTWV0ZXJJRD0ke3Byb3BzLk1ldGVySUR9JkZpbGVOYW1lPSR7ZmlsZU5hbWV9YCwgc3RhdGU6IHt9IH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5Db25maWd1cmF0aW9uIEZpbGVzOjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlPE1pTUQuSUNvbmZpZ0ZpbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGaWxlTmFtZScsIGxhYmVsOiAnRmlsZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNTAlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzUwJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdMYXN0V3JpdGVUaW1lJywgbGFiZWw6ICdMYXN0IFdyaXRlIFRpbWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSBnZXRDb2xvcihpdGVtLkxhc3RXcml0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQoaXRlbS5MYXN0V3JpdGVUaW1lKS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdDaGFuZ2VzJywgbGFiZWw6ICcjIG9mIENoYW5nZXMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Y29uZmlnRmlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkLmNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZGF0YSxldnQpID0+IGhhbmRsZVNlbGVjdChkYXRhLnJvdy5GaWxlTmFtZSwgZXZ0KX1cclxuICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5GaWxlTmFtZSA9PSBwcm9wcy5GaWxlTmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbkZpbGVzO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEFjdGlvbkhlYWRlci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTgvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBkYXRhOiBQUkMwMDIuSUFjdGlvbiwgc3RhdGVMaXN0OiBBcnJheTxQUkMwMDIuSVN0YXR1cz4sIHNob3dUaW1lOiBib29sZWFuIH0gXHJcblxyXG5jb25zdCBBY3Rpb25IZWFkZXIgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgbGV0IGlzYXV0byA9IHByb3BzLmRhdGEuVXNlckFjY291bnQgPT0gJ01pTUQnO1xyXG4gICAgbGV0IGlzQ2hhbmdlID0gcHJvcHMuZGF0YS5TdGF0ZUlkICE9IG51bGw7XHJcbiAgICBsZXQgaXNOb3RlID0gIWlzYXV0byAmJiAhaXNDaGFuZ2U7XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0VFMoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBkYXRlID0gbW9tZW50KGlucHV0KTtcclxuICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXRlVGFnKHN0YXRlSWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBzdGF0ID0gcHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLklEID09IHN0YXRlSWQpXHJcblxyXG4gICAgICAgIHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnIzZjNzU3ZCcgOiBzdGF0LkNvbG9yKSwgY29sb3I6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjZmZmZmZmJyA6IHN0YXQuVGV4dENvbG9yKSB9fT57KHN0YXQgPT0gdW5kZWZpbmVkID8gJ1Vua25vd24nIDogc3RhdC5EZXNjcmlwdGlvbil9PC9zcGFuPilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zaG93VGltZSA/IGZvcm1hdFRTKHByb3BzLmRhdGEuVGltZXN0YW1wKSArICc6ICcgOiBudWxsfVxyXG4gICAgICAgICAgICB7aXNOb3RlID8gcHJvcHMuZGF0YS5Vc2VyQWNjb3VudCArICcgYWRkZWQgYSBOb3RlJyA6IG51bGx9XHJcbiAgICAgICAgICAgIHtpc0NoYW5nZSA/IHByb3BzLmRhdGEuVXNlckFjY291bnQgKyAnIENoYW5nZWQgU3RhdHVzIHRvICcgOiBudWxsfVxyXG4gICAgICAgICAgICB7aXNDaGFuZ2U/IHN0YXRlVGFnKHByb3BzLmRhdGEuU3RhdGVJZCkgOiBudWxsfVxyXG4gICAgICAgICAgICB7KGlzYXV0byAmJiAhaXNDaGFuZ2UpID8gJ01pTUQgcmVjaWV2ZWQgYW4gdXBkYXRlZCBDb25maWd1cmF0aW9uIEZpbGUnIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25IZWFkZXI7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQWN0aW9uTGlzdC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTgvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi9BY3Rpb25IZWFkZXInO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgUmVjb3JkSWQ6IG51bWJlciwgU3RhdGVMaXN0OiBBcnJheTxQUkMwMDIuSVN0YXR1cz4sIHNlbGVjdGVkQWN0aW9uOiBudW1iZXIsIHNldFNlbGVjdGVkQWN0aW9uOiAoaWQ6IG51bWJlcikgPT4gdm9pZCB9XHJcblxyXG5jb25zdCBSZWNvcmRMaXN0ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2FjdGlvbkxpc3QsIHNldEF0Y2lvbkxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklBY3Rpb24+PihbXSk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ1RpbWVzdGFtcCcpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZUFjdGlvbkxpc3QgPSBnZXRBY3Rpb25zKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVBY3Rpb25MaXN0ICE9IG51bGwgJiYgaGFuZGxlQWN0aW9uTGlzdC5hYm9ydCAhPSBudWxsKSBoYW5kbGVBY3Rpb25MaXN0LmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLlJlY29yZElkLCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFjdGlvbnMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JQWN0aW9uPj4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5SZWNvcmRJZCA9PSAtMSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9BY3Rpb24vJHtwcm9wcy5SZWNvcmRJZH0vJHtzb3J0RmllbGR9LyR7YXNjZW5kaW5nPyAxIDogMH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQWN0aW9uPikgPT4ge1xyXG4gICAgICAgICAgICBzZXRBdGNpb25MaXN0KGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsocHJvcHMuUmVjb3JkSWQgPiAtMSA/XHJcbiAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0lEJywgbGFiZWw6ICdDb25maWd1cmF0aW9uIENoYW5nZSBIaXN0b3J5JywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8QWN0aW9uQ2FyZCBkYXRhPXtpdGVtfSBzdGF0ZUxpc3Q9e3Byb3BzLlN0YXRlTGlzdH0gb3BlbkNvbmZpZz17cHJvcHMuc2V0U2VsZWN0ZWRBY3Rpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2FjdGlvbkxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtcIklEXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4geyBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQWN0aW9uQ2FyZCA9IChwcm9wczogeyBkYXRhOiBQUkMwMDIuSUFjdGlvbiwgc3RhdGVMaXN0OiBBcnJheTxQUkMwMDIuSVN0YXR1cz4sIG9wZW5Db25maWc6IChjaGFuZ2VJZDogbnVtYmVyKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGxldCBoYXNDb25maWcgPSBwcm9wcy5kYXRhLlVzZXJBY2NvdW50ID09ICdNaU1EJztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QWN0aW9uSGVhZGVyIGRhdGE9e3Byb3BzLmRhdGF9IHN0YXRlTGlzdD17cHJvcHMuc3RhdGVMaXN0fSBzaG93VGltZT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvcHMuZGF0YS5Ob3RlfTwvcD5cclxuICAgICAgICAgICAgICAgIHtoYXNDb25maWcgPyA8IGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLm9wZW5Db25maWcocHJvcHMuZGF0YS5JRCk7ICQoJyNjdXJyZW50Q29uZmlnJykuc2hvdygpOyB9fT5TaG93IENvbmZpZ3VyYXRpb248L2E+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZExpc3Q7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlndXJhdGlvbkJ5TWV0ZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA4LzIyLzIwMTkgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IFJlY29yZERldGFpbCBmcm9tICcuL1JlY29yZERldGFpbCc7XHJcbmltcG9ydCBBY3Rpb25MaXN0IGZyb20gJy4vQWN0aW9uTGlzdCc7XHJcblxyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5jb25zdCBQUkMwMDJDaGFuZ2VPdmVydmlld1BhZ2UgPSAocHJvcHM6IHsgUm9sZXM6IEFycmF5PE1pTUQuU2VjdXJpdHlSb2xlTmFtZT4sIFJlY29yZElkOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1c0xpc3QsIHNldFN0YXR1c0xpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklTdGF0dXM+PihbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRBY3Rpb24sIHNldFNlbGVjdGVkQWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oLTEpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVN0YXR1c0xpc3QgPSBnZXRTdGF0dXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZVN0YXR1c0xpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlU3RhdHVzTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JU3RhdHVzPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlU3RhdGUvTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklTdGF0dXM+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN0YXR1c0xpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAwLCBoZWlnaHQ6ICcyMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlY29yZERldGFpbCBzdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IFJlY29yZElEPXtwcm9wcy5SZWNvcmRJZH0gc2VsZWN0ZWRBY3Rpb249e3NlbGVjdGVkQWN0aW9ufSBzZXRTZWxlY3RlZEFjdGlvbj17c2V0U2VsZWN0ZWRBY3Rpb259Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdjYWxjKCAxMDAlIC0gMTM2cHgpJywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkxpc3QgU3RhdGVMaXN0PXtzdGF0dXNMaXN0fSBSZWNvcmRJZD17cHJvcHMuUmVjb3JkSWR9IHNlbGVjdGVkQWN0aW9uPXtzZWxlY3RlZEFjdGlvbn0gc2V0U2VsZWN0ZWRBY3Rpb249e3NldFNlbGVjdGVkQWN0aW9ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUFJDMDAyQ2hhbmdlT3ZlcnZpZXdQYWdlO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEJhc2VDb25maWcudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE3LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0Jzs7XHJcbmltcG9ydCB7IFBSQzAwMn0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IEhhc2ggfSBmcm9tICdjcnlwdG8nO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgRmllbGRMaXN0OiBBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPiwgTGFiZWw6IHN0cmluZywgSWQ6IHN0cmluZ31cclxuXHJcblxyXG5jb25zdCBGaWVsZFZhbHVlcyA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkRmllbGQsIHNldFNlbGVjdGVkRmllbGRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcblxyXG4gICAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9e3Byb3BzLklkfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPntwcm9wcy5MYWJlbH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17KCkgPT4gJCgnIycgKyBwcm9wcy5JZCkuaGlkZSgpfT4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIzNSwgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDU0MCwgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1NDAsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGaWVsZE5hbWUnLCBsYWJlbDogJ0ZpZWxkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8Rm9ybUlucHV0PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+IFJlY29yZD17aXRlbX0gRmllbGQ9eydGaWVsZE5hbWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdWYWx1ZScsIGxhYmVsOiAnVmFsdWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxGb3JtSW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J1ZhbHVlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnVmFsaWQnLCBsYWJlbDogJ1ZhbGlkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7IHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnLjM3NXJlbSAuNzVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS41cmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS41IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17XCJmYSBcIiArIChpdGVtLlZhbGlkID8gXCJmYS1jaGVjay1jaXJjbGVcIiA6IFwiZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIil9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuRmllbGRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17J0ZpZWxkTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9eygpID0+ICQoJyMnICsgcHJvcHMuSWQpLmhpZGUoKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZFZhbHVlcztcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBSZWNvcmREZXRhaWwudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE4LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCBNYW51YWxBY3Rpb24gZnJvbSAnLi4vQ29tbW9uL01hbnVhbEFjdGlvbic7XHJcbmltcG9ydCBGaWVsZFZhbHVlcyBmcm9tICcuL0ZpZWxkVmFsdWVzJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuXHJcbmltcG9ydCBSZXNvbHZlUmVjb3JkIGZyb20gJy4vUmVzb2x2ZVJlY29yZCc7XHJcbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi9BY3Rpb25IZWFkZXInO1xyXG5pbXBvcnQgQmFzZUNvbmZpZ1dpbmRvdyBmcm9tICcuLi9Db21tb24vQmFzZUNvbmZpZ1dpbmRvdyc7XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IFJlY29yZElEOiBudW1iZXIsIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+LCBzZWxlY3RlZEFjdGlvbjogbnVtYmVyLCBzZXRTZWxlY3RlZEFjdGlvbjogKGlkOiBudW1iZXIpID0+IHZvaWQgfVxyXG5cclxuY29uc3QgUmVjb3JkRGV0YWlsID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JUmVjb3JkPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW21ldGVyLCBzZXRNZXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSU1ldGVyPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQWN0aW9uPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2Jhc2VDb25maWcsIHNldEJhc2VDb25maWddID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklCYXNlQ29uZmlnPih1bmRlZmluZWQpO1xyXG4gICBcclxuICAgIGNvbnN0IFt2YWx1ZUxpc3QsIHNldFZhbHVlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPj4oW10pO1xyXG4gICAgY29uc3QgW2FsbHZhbHVlTGlzdCwgc2V0QWxsVmFsdWVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+PihbXSk7XHJcblxyXG4gICAgY29uc3QgW3Nob3dBY2ssIHNldFNob3dBY2tdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dSZXYsIHNldFNob3dSZXZdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dSZXNvbHZlLCBzZXRTaG93UmVzb2x2ZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1JhcCwgc2V0U2hvd1JhcF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd05vdGUsIHNldFNob3dOb3RlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93QmFzZUNvbmZpZywgc2V0U2hvd0Jhc2VDb25maWddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVJlY29yZCA9IGdldFJlY29yZChwcm9wcy5SZWNvcmRJRCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVSZWNvcmQgIT0gbnVsbCAmJiBoYW5kbGVSZWNvcmQuYWJvcnQgIT0gbnVsbCkgaGFuZGxlUmVjb3JkLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLlJlY29yZElEXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlRmllbGRWYXVlcyA9IGdldEZpZWxkVmFsdWVzKHByb3BzLnNlbGVjdGVkQWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZUZpZWxkVmF1ZXMgIT0gbnVsbCAmJiBoYW5kbGVGaWVsZFZhdWVzLmFib3J0ICE9IG51bGwpIGhhbmRsZUZpZWxkVmF1ZXMuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuc2VsZWN0ZWRBY3Rpb25dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVNZXRlciA9IGdldE1ldGVyKChyZWNvcmQgPT0gdW5kZWZpbmVkID8gLTEgOiByZWNvcmQuTWV0ZXJJZCkpO1xyXG4gICAgICAgIGxldCBoYW5kbGVCYXNlQ29uZmlnID0gZ2V0QmFzZUNvbmZpZygocmVjb3JkID09IHVuZGVmaW5lZCA/IC0xIDogKHJlY29yZC5CYXNlQ29uZmlnSWQgPT0gdW5kZWZpbmVkID8gLTEgOiByZWNvcmQuQmFzZUNvbmZpZ0lkKSkpO1xyXG4gICAgICAgIGxldCBoYW5kbGVBY3Rpb24gPSBnZXRMYXN0QWN0aW9uKChyZWNvcmQgPT0gdW5kZWZpbmVkID8gLTEgOiByZWNvcmQuTGFzdEFjdGlvbklEKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVNZXRlciAhPSBudWxsICYmIGhhbmRsZU1ldGVyLmFib3J0ICE9IG51bGwpIGhhbmRsZU1ldGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVCYXNlQ29uZmlnICE9IG51bGwgJiYgaGFuZGxlQmFzZUNvbmZpZy5hYm9ydCAhPSBudWxsKSBoYW5kbGVCYXNlQ29uZmlnLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVBY3Rpb24gIT0gbnVsbCAmJiBoYW5kbGVBY3Rpb24uYWJvcnQgIT0gbnVsbCkgaGFuZGxlQWN0aW9uLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JlY29yZF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZpZWxkVmFsdWVzKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlO1xyXG4gICAgICAgIGlmIChpZCA9PSAtMSlcclxuICAgICAgICAgICAgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZFZhbHVlP3BhcmVudElEPSR7cHJvcHMuUmVjb3JkSUR9YCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRmllbGRWYWx1ZS9IaXN0b3J5P3BhcmVudElEPSR7aWR9YCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgaWYgKGlkID09IC0xKVxyXG4gICAgICAgICAgICAgICAgc2V0QWxsVmFsdWVMaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZUxpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJlY29yZChpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JUmVjb3JkPiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZVJlY29yZC9PbmUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IFBSQzAwMi5JUmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIHNldFJlY29yZChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGFzdEFjdGlvbihpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JQWN0aW9uPiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQWN0aW9uL09uZS8ke2lkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogUFJDMDAyLklBY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgc2V0QWN0aW9uKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcihpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JTWV0ZXI+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvT25lLyR7aWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBQUkMwMDIuSU1ldGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIHNldE1ldGVyKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCYXNlQ29uZmlnKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8UFJDMDAyLklCYXNlQ29uZmlnPiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQmFzZUNvbmZpZy9PTkUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IFBSQzAwMi5JQmFzZUNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICAgICBcclxuICAgICAgICAgICAgc2V0QmFzZUNvbmZpZyhkYXRhKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFRTKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBsZXQgbWV0ZXJTdGF0ID0gKG1ldGVyID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHByb3BzLnN0YXRlTGlzdC5maW5kKHMgPT4gcy5JRCA9PSBtZXRlci5TdGF0dXNJRCkpO1xyXG4gICAgbGV0IHJlY29yZFN0YXQgPSAocmVjb3JkID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHByb3BzLnN0YXRlTGlzdC5maW5kKHMgPT4gcy5JRCA9PSByZWNvcmQuU3RhdHVzKSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICB7KG1ldGVyID09IHVuZGVmaW5lZD8gbnVsbCA6XHJcbiAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHVzUm93IGxhYmVsPXsnQ29uZmlndXJhdGlvbiBDaGFuZ2UnfSBzdGF0dXM9e3JlY29yZFN0YXR9IFQ9e3JlY29yZC5UaW1lcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHVzUm93IGxhYmVsPXsnTWV0ZXIgJyArIG1ldGVyLk5hbWV9IHN0YXR1cz17bWV0ZXJTdGF0fSBUPXttZXRlci5UaW1lcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBJc3N1ZSBPcGVuZWQ6IHtmb3JtYXRUUyhyZWNvcmQuQ3JlYXRlZCl9IGJ5IHtyZWNvcmQuVXNlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBMYXN0IEFjdGlvbiBUYWtlbjoge2Zvcm1hdFRTKHJlY29yZC5UaW1lc3RhbXApfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IExhc3QgQWN0aW9uOiB7YWN0aW9uICE9IHVuZGVmaW5lZCA/IDxBY3Rpb25IZWFkZXIgZGF0YT17YWN0aW9ufSBzdGF0ZUxpc3Q9e3Byb3BzLnN0YXRlTGlzdH0gc2hvd1RpbWU9e2ZhbHNlfSAvPiA6IG51bGx9IDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhiYXNlQ29uZmlnID09IHVuZGVmaW5lZCA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0Jhc2VDb25maWcodHJ1ZSl9PiBCYXNlIENvbmZpZ3VyYXRpb24gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLnNldFNlbGVjdGVkQWN0aW9uKC0xKTsgJCgnI2N1cnJlbnRDb25maWcnKS5zaG93KCkgfX0+IEN1cnJlbnQgQ29uZmlndXJhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Tm90ZSh0cnVlKX0+IEFkZCBDb21wbGlhbmNlIE5vdGUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcgfHwgcmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnUmV2aWV3ZWQnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dSYXAodHJ1ZSl9PiBTdWJtaXR0IFJlbWVkaWFsIEFjdGlvbiBQbGFuIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7cmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnQ29tcGxpYW5jZSBJc3N1ZScgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0Fjayh0cnVlKX0+IEFja25vd2xlZGdlIElzc3VlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7cmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UmV2KHRydWUpfT4gUmV2aWV3IElzc3VlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7cmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnUmV2aWV3ZWQnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dSZXNvbHZlKHRydWUpfT4gUmVzb2x2ZSBJc3N1ZSAtIFVwZGF0ZWQgQmFzZSBDb25maWc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gUmVjb3JkSWQ9e3Byb3BzLlJlY29yZElEfSBzdGF0ZT17bnVsbH0gc2hvdz17c2hvd05vdGV9IHNldFNob3c9e3NldFNob3dOb3RlfS8+ICAgIFxyXG4gICAgICAgICAgICAgICAgPEZpZWxkVmFsdWVzIExhYmVsPXsocHJvcHMuc2VsZWN0ZWRBY3Rpb24gPT0gLTEgPyAnQ3VycmVudCBDb25maWd1cmF0aW9uJyA6ICdSZWxhdGVkIENvbmZpZ3VyYXRpb24nKX0gSWQ9eydjdXJyZW50Q29uZmlnJ30gRmllbGRMaXN0PXsocHJvcHMuc2VsZWN0ZWRBY3Rpb24gPT0gLTEgPyBhbGx2YWx1ZUxpc3QgOiB2YWx1ZUxpc3QpfSAvPlxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcgfHwgcmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnUmV2aWV3ZWQnID9cclxuICAgICAgICAgICAgICAgICAgICA8TWFudWFsQWN0aW9uIFJlY29yZElkPXtwcm9wcy5SZWNvcmRJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ1JBUCBTdWJtaXR0ZWQnKX0gc2hvdz17c2hvd1JhcH0gc2V0U2hvdz17c2V0U2hvd1JhcH0vPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0NvbXBsaWFuY2UgSXNzdWUnID9cclxuICAgICAgICAgICAgICAgICAgICA8TWFudWFsQWN0aW9uIFJlY29yZElkPXtwcm9wcy5SZWNvcmRJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ0Fja25vd2xlZGdlZCcpfSBzaG93PXtzaG93QWNrfSBzZXRTaG93PXtzZXRTaG93QWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gUmVjb3JkSWQ9e3Byb3BzLlJlY29yZElEfSBzdGF0ZT17cHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLkRlc2NyaXB0aW9uID09PSAnUmV2aWV3ZWQnKX0gc2hvdz17c2hvd1Jldn0gc2V0U2hvdz17c2V0U2hvd1Jldn0vPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ1Jldmlld2VkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVSZWNvcmQgRmllbGRMaXN0PXthbGx2YWx1ZUxpc3QuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uVmFsaWQpfSBSZWNvcmRJRD17cHJvcHMuUmVjb3JkSUR9IHN0YXRlTGlzdD17cHJvcHMuc3RhdGVMaXN0fSBzaG93PXtzaG93UmVzb2x2ZX0gc2V0U2hvdz17c2V0U2hvd1Jlc29sdmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgeyhiYXNlQ29uZmlnID09IHVuZGVmaW5lZCA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbCBUaXRsZT17J0lzc3VlIEJhc2UgQ29uZmlndXJhdGlvbid9IFNob3c9e3Nob3dCYXNlQ29uZmlnfSBDYWxsQmFjaz17KGNvbmZpcm0pID0+IHsgc2V0U2hvd0Jhc2VDb25maWcoZmFsc2UpOyB9fSBTaXplPSdsZycgU2hvd1g9e3RydWV9IFNob3dDYW5jZWw9e2ZhbHNlfSBDb25maXJtVGV4dD0nQ2xvc2UnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhc2VDb25maWdXaW5kb3cgY29uZmlndXJhdGlvbkxpc3Q9e1tiYXNlQ29uZmlnXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPil9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5jb25zdCBTdGF0dXNSb3cgPSAocHJvcHM6IHsgc3RhdHVzOiBQUkMwMDIuSVN0YXR1cywgVDogbnVtYmVyLCBsYWJlbDogc3RyaW5nIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH0gaGFzIGJlZW4gaW5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc0NSUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAoc3RhdHVzID09IHVuZGVmaW5lZCA/ICcjZjhmOWZhJyA6IHByb3BzLnN0YXR1cy5Db2xvciksXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogKHN0YXR1cyA9PSB1bmRlZmluZWQgPyAnIzIxMjUyOScgOiBwcm9wcy5zdGF0dXMuVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnY2FsYyg1JSknXHJcbiAgICAgICAgICAgIH19PiB7cHJvcHMuc3RhdHVzLkRlc2NyaXB0aW9ufSA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc0NSUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAocHJvcHMuVCA8IDMwID8gJyMyOGE3NDUnIDogKHByb3BzLlQgPCA2MCA/ICcjZmZjMTA3JyA6ICcjZGMzNTQ1JykpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IChwcm9wcy5UIDwgMzAgPyAnI2ZmZmZmZicgOiAocHJvcHMuVCA8IDYwID8gJyMyMTI1MjknIDogJyNmZmZmZmYnKSksXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgIH19PiB7cHJvcHMuVH0gRGF5czwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZERldGFpbDtcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFJlc29sdmVSZWNvcmQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzIzLzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IHsgTG9hZGluZ0ljb24sIE1vZGFsLCBUb29sVGlwLCBXYXJuaW5nIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcbmltcG9ydCB7IElucHV0LCBTZWxlY3QgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IFJlY29yZElEOiBudW1iZXIsIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+LCBGaWVsZExpc3Q6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+LCBzaG93OiBib29sZWFuLCBzZXRTaG93OiAoYjogYm9vbGVhbikgPT4gdm9pZH1cclxudHlwZSBzdGVwID0gJ05vdGUnIHwgJ0NoYW5nZSdcclxuXHJcbmNvbnN0IFJlc29sdmVSZWNvcmQgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSBSZWFjdC51c2VTdGF0ZTxzdGVwPignTm90ZScpO1xyXG4gICAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbZmllbGRJbmRleCwgc2V0RmllbGRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICAgIGNvbnN0IFt1cGRhdGVkRmxkLCBzZXRVcGRhdGVkRmxkXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+PihbXSk7XHJcblxyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZTwnTm9uZScgfCAnQ29uZmlybScgfCAnQ2FuY2VsJz4oJ05vbmUnKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0Nsb3NlLCBzZXRTaG93Q2xvc2VdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dDb21wbGV0ZSwgc2V0U2hvd0NvbXBsZXRlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaWVsZFN0YXRlLCBzZXRGaWVsZFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPCdFcnJvcicgfCAnTG9hZGluZycgfCAnVmFsaWQnPignRXJyb3InKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRVcGRhdGVkRmxkKFtdKTtcclxuICAgICAgICBsZXQgaGFuZGxlcyA9IFtdO1xyXG4gICAgICAgIGhhbmRsZXMgPSBwcm9wcy5GaWVsZExpc3QubWFwKGl0ZW0gPT4gTG9hZEZpZWxkKGl0ZW0uRmllbGRJZCkpO1xyXG4gICAgICAgIHJldHVybiAoKCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVzLmZvckVhY2goaCA9PiB7IGlmIChoICE9IG51bGwgJiYgaC5hYm9ydCAhPSBudWxsKSBoLmFib3J0KCk7IH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sW3Byb3BzLkZpZWxkTGlzdF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGRTdGF0ZSgnVmFsaWQnKTtcclxuICAgICAgICBpZiAoZmllbGRJbmRleCA9PSAtMSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh1cGRhdGVkRmxkLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRGbGQubGVuZ3RoIDw9IGZpZWxkSW5kZXgpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZXRGaWVsZFN0YXRlKCdMb2FkaW5nJyk7XHJcbiAgICAgICAgbGV0IGggPSBWYWxpZGF0ZUZpZWxkKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGggIT0gbnVsbCAmJiBoLmFib3J0ICE9IG51bGwpIGguYWJvcnQoKTt9XHJcbiAgICB9LCBbdXBkYXRlZEZsZCwgZmllbGRJbmRleF0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gQ2FuY2VsKCkge1xyXG4gICAgICAgIHNldFN0ZXAoJ05vdGUnKTtcclxuICAgICAgICBzZXRGaWVsZEluZGV4KC0xKTtcclxuICAgICAgICBzZXROb3RlKCcnKTtcclxuICAgICAgICBzZXRVcGRhdGVkRmxkKFtdKVxyXG4gICAgICAgIHByb3BzLnNldFNob3coZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE5leHRTdGVwKCkge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdOb3RlJykge1xyXG4gICAgICAgICAgICBzZXRTdGVwKCdDaGFuZ2UnKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuRmllbGRMaXN0Lmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0NvbXBsZXRlKHRydWUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZEluZGV4KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICBzZXRGaWVsZEluZGV4KChpbmRleCkgPT4gaW5kZXggLSAxKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTG9hZEZpZWxkKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8YW55PiB7XHJcbiAgICAgICAgbGV0IGggPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC9PbmUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBoLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBzZXRVcGRhdGVkRmxkKChhcnJheSkgPT4gWy4uLmFycmF5LCBkYXRhXSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUHJldlN0ZXAoKSB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05vdGUnKVxyXG4gICAgICAgICAgICBzZXRTaG93Q2xvc2UodHJ1ZSk7XHJcbiAgICAgICAgZWxzZSBpZiAoZmllbGRJbmRleCA9PSAwKVxyXG4gICAgICAgICAgICBzZXRTdGVwKCdOb3RlJylcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldEZpZWxkSW5kZXgoKGluZGV4KSA9PiBpbmRleCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIGlmIChzdGVwID09ICdOb3RlJylcclxuICAgICAgICAgICAgcmV0dXJuICdSZXNvbHZlIElzc3VlJ1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuICdDaGFuZ2UgQmFzZSBDb25maWd1cmF0aW9uJ1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gVmFsaWRhdGVGaWVsZCgpOiBKUXVlcnkuanFYSFI8YW55PiB7XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgaCA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZC9DaGVjay8ke3Byb3BzLkZpZWxkTGlzdFtmaWVsZEluZGV4XS5WYWx1ZX1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRGbGRbZmllbGRJbmRleF0gYXMgUFJDMDAyLklDb25maWdGaWVsZCksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBoLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwgfHwgIWRhdGEpXHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZFN0YXRlKCdFcnJvcicpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkU3RhdGUoJ1ZhbGlkJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gaDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBTYXZlKCkge1xyXG4gICAgICBcclxuICAgICAgICB1cGRhdGVkRmxkLmZvckVhY2goaXRlbSA9PiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0ZpZWxkL1VwZGF0ZWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoaXRlbSksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pKVxyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQWN0aW9uL0FkZGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBOb3RlOiBub3RlLCBTdGF0ZUlkOiBwcm9wcy5zdGF0ZUxpc3QuZmluZChpdGVtID0+IGl0ZW0uRGVzY3JpcHRpb24gPT0gJ0luIENvbXBsaWFuY2UnKS5JRCwgUmVjb3JkSWQ6IHByb3BzLlJlY29yZElEIH0gYXMgUFJDMDAyLklBY3Rpb24pLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkudGhlbihkYXRhID0+IGhpc3RvcnkuZ28oMCkpXHJcblxyXG4gICAgICAgIENhbmNlbCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTZXRGaWVsZChpbmRleDogbnVtYmVyLCByZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpIHtcclxuICAgICAgICBpZiAoaW5kZXggPT0gLTEpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIHNldFVwZGF0ZWRGbGQoKGZsZCkgPT4geyBsZXQgdXBkYXRlID0gXy5jbG9uZURlZXAoZmxkKTsgdXBkYXRlW2ZpZWxkSW5kZXhdID0gcmVjb3JkOyByZXR1cm4gdXBkYXRlOyB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBzdGVwQ29tcGxldGUgPSAoc3RlcCA9PSAnTm90ZScgPyBub3RlLmxlbmd0aCA+IDA6IHRydWUpO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9kYWwgU2hvdz17cHJvcHMuc2hvd30gVGl0bGU9e2dldFRpdGxlKCl9IENhbmNlbFRleHQ9eyhzdGVwID09ICdOb3RlJyA/ICdDYW5jZWwnIDogJ0JhY2snKX1cclxuICAgICAgICAgICAgICAgIFNob3dYPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVRvb2xUaXA9eydSZXNvbHZlQ29uZmlybSd9IFNpemU9eydsZyd9IE9uSG92ZXI9e3NldEhvdmVyfVxyXG4gICAgICAgICAgICAgICAgQ29uZmlybUJ0bkNsYXNzPXsnYnRuLXN1Y2Nlc3MnICsgKHN0ZXBDb21wbGV0ZSA/ICcnIDogJyBkaXNhYmxlZCcpfVxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVRleHQ9eyhmaWVsZEluZGV4ID09IHByb3BzLkZpZWxkTGlzdC5sZW5ndGggLSAxID8gJ1NhdmUnIDogJ05leHQnKX1cclxuICAgICAgICAgICAgICAgIENhbGxCYWNrPXsoYywgYikgPT4geyBpZiAoYykgTmV4dFN0ZXAoKTsgZWxzZSBpZiAoYikgUHJldlN0ZXAoKTsgZWxzZSBzZXRTaG93Q2xvc2UodHJ1ZSk7IH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3RlcCA9PSAnTm90ZScgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm90ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcm93cz17NH0gdmFsdWU9e25vdGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZSgoZS50YXJnZXQgYXMgYW55KS52YWx1ZSl9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICA8Q29uZmlnRmllbGRFZGl0IHZhbGlkUnVsZT17ZmllbGRTdGF0ZSAhPSAnRXJyb3InfSBTZXR0ZXI9eyhyZWNvcmQpID0+IFNldEZpZWxkKGZpZWxkSW5kZXgsIHJlY29yZCl9IEN1cnJlbnRWYWx1ZT17KGZpZWxkSW5kZXggPiAtMSA/IHByb3BzLkZpZWxkTGlzdFtmaWVsZEluZGV4XSA6IHVuZGVmaW5lZCl9IEZpZWxkPXsoZmllbGRJbmRleCA+IC0xID8gdXBkYXRlZEZsZFtmaWVsZEluZGV4XSA6IHVuZGVmaW5lZCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8VG9vbFRpcCBTaG93PXtob3ZlciA9PSAnQ29uZmlybScgJiYgIXN0ZXBDb21wbGV0ZX0gUG9zaXRpb249eyd0b3AnfSBUYXJnZXQ9eydSZXNvbHZlQ29uZmlybSd9IFppbmRleD17OTk5OX0+XHJcbiAgICAgICAgICAgICAgICB7c3RlcCA9PSAnTm90ZScgJiYgbm90ZS5sZW5ndGggPT0gMCA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5BIE5vdGUgaXMgcmVxdWlyZWQuPC9wPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7c3RlcCA9PSAnQ2hhbmdlJyAmJiAodXBkYXRlZEZsZFtmaWVsZEluZGV4XS5WYWx1ZSA9PSBudWxsIHx8IHVwZGF0ZWRGbGRbZmllbGRJbmRleF0uVmFsdWUubGVuZ3RoID09IDApICA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5BIFZhbHVlIGlzIHJlcXVpcmVkLjwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT0gJ0NoYW5nZScgJiYgdXBkYXRlZEZsZFtmaWVsZEluZGV4XS5GaWVsZFR5cGUgPT0gJ251bWJlcicgJiYgaXNOYU4ocGFyc2VGbG9hdCh1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdLlZhbHVlKSkgPyA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+VmFsdWUgaXMgcmVxdWlyZWQgdG8gbmUgYSBudW1iZXIuPC9wPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7c3RlcCA9PSAnQ2hhbmdlJyAmJiBmaWVsZFN0YXRlID09ICdMb2FkaW5nJyA/IDxMb2FkaW5nSWNvbiBTaG93PXt0cnVlfSBMYWJlbD17J1ZlcmlmeWluZyBOZXcgUnVsZS4uLid9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdDaGFuZ2UnICYmIGZpZWxkU3RhdGUgPT0gJ0Vycm9yJyA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5UaGUgbmV3IFJ1bGUgbmVlZHMgdG8gcmVzdWx0IGluIHRoZSBjdXJyZW50IFZhbHVlIGJlaW5nIFZhbGlkLjwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L1Rvb2xUaXA+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnQ2FuY2VsJ30gTWVzc2FnZT17J1dhcm5pbmcgYWxsIENoYW5nZXMgd2lsbCBiZSBsb3N0IGFuZCB0aGUgbmV3IGJhc2UgY29uZmlndXJhdGlvbiB3aWxsIG5vdCBiZSBhcHBsaWVkJ30gQ2FsbEJhY2s9eyhjKSA9PiB7IGlmIChjKSBDYW5jZWwoKTsgc2V0U2hvd0Nsb3NlKGZhbHNlKSB9fSBTaG93PXtzaG93Q2xvc2V9IC8+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnV2FybmluZyd9IE1lc3NhZ2U9eydUaGlzIHdpbGwgY2hhbmdlIHRoZSBCYXNlIENvbmZpZ3VyYXRpb24gZm9yIHRoaXMgbWV0ZXIgYW5kIGNhbiBub3QgYmUgdW5kb25lLiBBIHBlcm1hbmVudCBjb21wbGlhbmNlIHJlY29yZCB3aWxsIGJlIGNyZWF0ZWQnfSBTaG93PXtzaG93Q29tcGxldGV9IENhbGxCYWNrPXsoYykgPT4geyBpZiAoYykgU2F2ZSgpOyBzZXRTaG93Q29tcGxldGUoZmFsc2UpIH19Lz5cclxuICAgICAgICA8Lz4pXHJcbn1cclxuXHJcbmNvbnN0IENvbmZpZ0ZpZWxkRWRpdCA9IChwcm9wczogeyBGaWVsZDogUFJDMDAyLklDb25maWdGaWVsZCwgU2V0dGVyOiAocmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSA9PiB2b2lkLCBDdXJyZW50VmFsdWU6IFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXMsIHZhbGlkUnVsZTogYm9vbGVhbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgRmllbGRUeXBlT3B0aW9ucyA9IFt7IFZhbHVlOiAnc3RyaW5nJywgTGFiZWw6ICdUZXh0JyB9LCB7IFZhbHVlOiAnbnVtYmVyJywgTGFiZWw6ICdOdW1iZXInIH1dO1xyXG4gICAgY29uc3QgTnVtYmVyQ2hlY2tzID0gW3sgVmFsdWU6ICc9JywgTGFiZWw6ICc9JyB9LCB7IFZhbHVlOiAnPD4nLCBMYWJlbDogJzw+JyB9LCB7IFZhbHVlOiAnPicsIExhYmVsOiAnPicgfSwgeyBWYWx1ZTogJzwnLCBMYWJlbDogJzwnIH1dO1xyXG4gICAgY29uc3QgVGV4dENoZWNrcyA9IFt7IFZhbHVlOiAnPScsIExhYmVsOiAnPScgfSwgeyBWYWx1ZTogJzw+JywgTGFiZWw6ICc8PicgfSwgeyBWYWx1ZTogJ0lOJywgTGFiZWw6ICdJbicgfV07XHJcblxyXG4gICAgZnVuY3Rpb24gVmFsaWRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHByb3BzLkZpZWxkLlZhbHVlICE9IG51bGwgJiYgcHJvcHMuRmllbGQuVmFsdWUubGVuZ3RoID4gMCAmJiAocHJvcHMuRmllbGQuRmllbGRUeXBlICE9ICdudW1iZXInIHx8ICFpc05hTihwYXJzZUZsb2F0KHByb3BzLkZpZWxkLlZhbHVlKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFJ1bGVSZXN1bHQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wcy5DdXJyZW50VmFsdWUgPT0gbnVsbCB8fCBwcm9wcy5GaWVsZCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4gUmVjb3JkPXtwcm9wcy5DdXJyZW50VmFsdWV9IEZpZWxkPXsnVmFsdWUnfSBTZXR0ZXI9eygpID0+IHsgfX0gVmFsaWQ9eygpID0+IHByb3BzLnZhbGlkUnVsZX0gTGFiZWw9eydDdXJyZW50IFZhbHVlJ30gRGlzYWJsZWQ9e3RydWV9IEZlZWRiYWNrPXsnVGhlIG5ldyBSdWxlIG5lZWRzIHRvIGFsbG93IHRoZSBjdXJyZW50IFZhbHVlLid9IC8+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8U2VsZWN0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnRmllbGRUeXBlJ30gT3B0aW9ucz17RmllbGRUeXBlT3B0aW9uc30gTGFiZWw9eydGaWVsZCBUeXBlJ30gRGlzYWJsZWQ9e3RydWV9IFNldHRlcj17KHJlY29yZCkgPT4ge319IC8+XHJcbiAgICAgICAgPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnTmFtZSd9IFNldHRlcj17KCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gTGFiZWw9eydGaWVsZCd9IERpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgIDxTZWxlY3Q8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydDb21wYXJpc29uJ30gT3B0aW9ucz17KHByb3BzLkZpZWxkLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyA/IE51bWJlckNoZWNrcyA6IFRleHRDaGVja3MpfSBMYWJlbD17J1J1bGUnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgcHJvcHMuU2V0dGVyKHJlY29yZCkgfX0gLz5cclxuICAgICAgICB7KHByb3BzLkZpZWxkLkNvbXBhcmlzb24gPT0gJ0lOJyA/IDxNdWx0aUlucHV0RmllbGQgZGF0YT17cHJvcHMuRmllbGR9IFNldHRlcj17KHJlY29yZCkgPT4geyBwcm9wcy5TZXR0ZXIocmVjb3JkKSB9fSAvPiA6XHJcbiAgICAgICAgICAgIDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e3Byb3BzLkZpZWxkfSBGaWVsZD17J1ZhbHVlJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IFZhbGlkPXsoKSA9PiBWYWxpZFZhbHVlKCl9IExhYmVsPXsnVmFsdWUnfSBGZWVkYmFjaz17cHJvcHMuRmllbGQuRmllbGRUeXBlICE9ICdudW1iZXInID8gJ1ZhbHVlIGlzIHJlcXVpcmVkLicgOiAnVmFsdWUgaXMgcmVxdWlyZWQgYW5kIG5lZWRzIHRvIGJlIGEgbnVtYmVyLid9IC8+XHJcbiAgICAgICAgKX1cclxuICAgIDwvPilcclxufVxyXG5cclxuY29uc3QgTXVsdGlJbnB1dEZpZWxkID0gKHByb3BzOiB7IGRhdGE6IFBSQzAwMi5JQ29uZmlnRmllbGQsIFNldHRlcjogKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbbGlzdFZhbHVlcywgc2V0TGlzdFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxzdHJpbmc+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRMaXN0VmFsdWVzKHByb3BzLmRhdGEuVmFsdWUuc3BsaXQoJzsnKSlcclxuICAgIH0sIFtwcm9wcy5kYXRhXSlcclxuXHJcbiAgICBmdW5jdGlvbiBTZXQoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgIGxzdFtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgIHByb3BzLlNldHRlcihyZWMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQWRkTmV3KCkge1xyXG4gICAgICAgIGxldCByZWMgPSBfLmNsb25lRGVlcChwcm9wcy5kYXRhKTtcclxuICAgICAgICBsZXQgbHN0ID0gXy5jbG9uZShsaXN0VmFsdWVzKTtcclxuICAgICAgICBsc3QucHVzaCgocHJvcHMuZGF0YS5GaWVsZFR5cGUgPT0gJ3N0cmluZycgPyAnVmFsdWUnIDogJzAnKSlcclxuICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgIHByb3BzLlNldHRlcihyZWMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgIGxzdC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgcmVjLlZhbHVlID0gbHN0LmpvaW4oJzsnKTtcclxuICAgICAgICBwcm9wcy5TZXR0ZXIocmVjKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2xpc3RWYWx1ZXMubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PSAwID8gPGxhYmVsPlZhbHVlczwvbGFiZWw+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGV2dCkgPT4geyBTZXQoaW5kZXgsIGV2dC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKSB9fSB2YWx1ZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IEFkZE5ldygpfT4gQWRkIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb2x2ZVJlY29yZDtcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEJhc2VDb25maWdXaW5kb3cudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzEwLzIwMjEgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuY29uc3QgQmFzZUNvbmZpZ1dpbmRvdyA9IChwcm9wczogeyBjb25maWd1cmF0aW9uTGlzdDogUFJDMDAyLklCYXNlQ29uZmlnW10gfSkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcbiAgICBjb25zdCBbZmllbGRMaXN0LCBzZXRGaWVsZExpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklDb25maWdGaWVsZD4+KFtdKTtcclxuXHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignTmFtZScpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIFxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUYWIgPT0gLTEgJiYgcHJvcHMuY29uZmlndXJhdGlvbkxpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRhYihwcm9wcy5jb25maWd1cmF0aW9uTGlzdFswXS5JRCk7XHJcbiAgICAgICAgaWYgKHByb3BzLmNvbmZpZ3VyYXRpb25MaXN0Lmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGFiKC0xKVxyXG4gICAgfSwgW3Byb3BzLmNvbmZpZ3VyYXRpb25MaXN0XSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaCA9IGdldEZpZWxkTGlzdCgpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7IGlmIChoICE9IG51bGwgJiYgaC5hYm9ydCAhPSBudWxsKSBoLmFib3J0KCk7IH1cclxuICAgIH0sIFtjdXJyZW50VGFiLCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZpZWxkTGlzdCgpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPj4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50VGFiID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRmllbGQvJHtjdXJyZW50VGFifS8ke3NvcnRGaWVsZH0vJHthc2NlbmRpbmcgPyAxIDogMH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgc2V0RmllbGRMaXN0KGRhdGEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAge3Byb3BzLmNvbmZpZ3VyYXRpb25MaXN0Lmxlbmd0aCA+IDEgP1xyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY29uZmlndXJhdGlvbkxpc3QubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rXCIgKyAoY3VycmVudFRhYiA9PSBpdGVtLklEID8gXCIgYWN0aXZlXCIgOiBcIlwiKX0gb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFRhYihpdGVtLklEKX0+e2l0ZW0uTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdWw+IDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB7Y3VycmVudFRhYiAhPSAtMSA/IDwgZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMzUsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmRcIn0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+IENvbmZpZ3VyYXRpb24ge3Byb3BzLmNvbmZpZ3VyYXRpb25MaXN0LmZpbmQoaXRlbSA9PiBpdGVtLklEID09IGN1cnJlbnRUYWIpLk5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FyZC1ib2R5XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1NDAsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTQwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8UFJDMDAyLklCYXNlQ29uZmlnPiBSZWNvcmQ9e3Byb3BzLmNvbmZpZ3VyYXRpb25MaXN0LmZpbmQoaXRlbSA9PiBpdGVtLklEID09IGN1cnJlbnRUYWIpfSBGaWVsZD17J1BhdHRlcm4nfSBTZXR0ZXI9eygpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IExhYmVsPXsnRmlsZSBQYXR0ZXJuJ30gRGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxQUkMwMDIuSUNvbmZpZ0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnRmllbGQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnTmFtZSd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0ZpZWxkVHlwZScsIGxhYmVsOiAnVHlwZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydGaWVsZFR5cGUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdDb21wYXJpc29uJywgbGFiZWw6ICdSdWxlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0NvbXBhcmlzb24nfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdWYWx1ZScsIGxhYmVsOiAnVmFsdWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnVmFsdWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZmllbGRMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXsnTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDY2Niwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbH1cclxuICAgIDwvPilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJhc2VDb25maWdCeU1ldGVyID0gKHByb3BzOiB7IE1ldGVySWQ6IG51bWJlciB9KSA9PiB7XHJcbiAgICBjb25zdCBbY29uZmlndXJhdGlvbmxpc3QsIHNldENvbmZpZ3VyYXRpb25MaXN0XSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQmFzZUNvbmZpZ1tdPihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaCA9IGdldEJhc2VDb25maWdzKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGggIT0gbnVsbCAmJiBoLmFib3J0ICE9IG51bGwpIGguYWJvcnQoKTsgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySWRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCYXNlQ29uZmlncygpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPj4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5NZXRlcklkID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9CYXNlQ29uZmlnP3BhcmVudElEPSR7cHJvcHMuTWV0ZXJJZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQmFzZUNvbmZpZz4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICBzZXRDb25maWd1cmF0aW9uTGlzdChkYXRhKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxCYXNlQ29uZmlnV2luZG93IGNvbmZpZ3VyYXRpb25MaXN0PXtjb25maWd1cmF0aW9ubGlzdH0gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbmZpZ1dpbmRvdztcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1hbnVhbEFjdGlvbi50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTgvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBQUkMwMDJ9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBNb2RhbCwgV2FybmluZyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5cclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5pbnRlcmZhY2UgSVByb3BzIHsgc2hvdzogYm9vbGVhbiwgc2V0U2hvdzogKGI6IGJvb2xlYW4pID0+IHZvaWQsIFJlY29yZElkPzogbnVtYmVyLCBNZXRlcklkPzogbnVtYmVyLCBzdGF0ZTogUFJDMDAyLklTdGF0dXN9XHJcblxyXG5cclxuY29uc3QgTWFudWFsQWN0aW9uID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gICAgY29uc3QgW1RvZmZzZXQsIHNldFRvZmZzZXRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtzaG93V2FybmluZywgc2V0V2FybmluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiAnQWRkIENvbXBsaWFuY2UgTm90ZSdcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnQWNrbm93bGVkZ2UgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnUmV2aWV3IEFsZXJ0J1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnUkFQIFN1Ym1pdHRlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnQ3JlYXRlIFJlbWVkaWFsIEFjdGlvbiBQbGFuJ1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQ29tcGxpYW5jZSBJc3N1ZScpXHJcbiAgICAgICAgICAgIHJldHVybiAnU3VibWl0IENvbXBsaWFuY2UgSXNzdWUnXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJ0bigpIHtcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0FkZCBOb3RlJ1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdBY2tub3dsZWRnZWQgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnUmV2aWV3ZWQgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSQVAgU3VibWl0dGVkJylcclxuICAgICAgICAgICAgcmV0dXJuICdDcmVhdGUgUmVtZWRpYWwgQWN0aW9uIFBsYW4nXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdDb21wbGlhbmNlIElzc3VlJylcclxuICAgICAgICAgICAgcmV0dXJuICdTdWJtaXR0J1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlybShjOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGMgJiYgcHJvcHMuc3RhdGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHByb3BzLnNldFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICBzdWJtaXR0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYyAmJiBwcm9wcy5zdGF0ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0V2FybmluZyh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYykge1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0VG9mZnNldCgwKTtcclxuICAgICAgICAgICAgc2V0Tm90ZSgnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0dCgpIHtcclxuICAgICAgICBpZiAocHJvcHMuUmVjb3JkSWQgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzdWJtaXR0UmVjb3JkKCk7XHJcbiAgICAgICAgaWYgKHByb3BzLk1ldGVySWQgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzdWJtaXR0TWV0ZXIoKVxyXG5cclxuICAgICAgICBzZXROb3RlKFwiXCIpO1xyXG4gICAgICAgIHNldFRvZmZzZXQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0dFJlY29yZCgpIHtcclxuICAgICAgICBsZXQgYWN0aW9uID0geyBOb3RlOiBub3RlLCBTdGF0ZUlkOiBudWxsLCBSZWNvcmRJZDogcHJvcHMuUmVjb3JkSWQgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGFjdGlvbi5TdGF0ZUlkID0gcHJvcHMuc3RhdGUuSUQ7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9BY3Rpb24vQWRkYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShhY3Rpb24gYXMgUFJDMDAyLklBY3Rpb24pLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkudGhlbihkYXRhID0+IGhpc3RvcnkuZ28oMCkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0dE1ldGVyKCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQ29tcGxpYW5jZSBJc3N1ZScpXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VSZWNvcmQvQWRkYCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgTWV0ZXJJZDogcHJvcHMuTWV0ZXJJZCwgVGltZXJPZmZzZXQ6IFRvZmZzZXQsIFN0YXR1czogcHJvcHMuc3RhdGUuSUQsIE5vdGU6IG5vdGUgfSksXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICB9KS50aGVuKChkYXRhID0+IGhpc3RvcnkuZ28oMCkpKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZU1ldGVyL1JBUFN1Ym1pdHRgLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBtZXRlcklkOiBwcm9wcy5NZXRlcklkLCBOb3RlOiBub3RlIH0pLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSA9PiBoaXN0b3J5LmdvKDApKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPE1vZGFsIFNob3c9e3Byb3BzLnNob3d9IFRpdGxlPXtnZXRUaXRsZSgpfSBDb25maXJtVGV4dD17Z2V0QnRuKCl9IENhbmNlbEJ0bkNsYXNzPXsnQ2FuY2VsJ30gQ2FsbEJhY2s9eyhjKSA9PiB7IGNvbmZpcm0oYykgfX0gU2l6ZT0nc20nPiBcclxuICAgICAgICAgICAgeyhwcm9wcy5zdGF0ZSAhPSB1bmRlZmluZWQgJiYgcHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ0NvbXBsaWFuY2UgSXNzdWUnKT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm90ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9ezR9IHZhbHVlPXtub3RlfSBvbkNoYW5nZT17KGUpID0+IHNldE5vdGUoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRheXMgb3V0IG9mIENvbXBsaWFuY2U6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPXsnbnVtYmVyJ30gdmFsdWU9e1RvZmZzZXR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9mZnNldChwYXJzZUludCgoZS50YXJnZXQgYXMgYW55KS52YWx1ZSBhcyBzdHJpbmcpKX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob3RlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByb3dzPXs0fSB2YWx1ZT17bm90ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKChlLnRhcmdldCBhcyBhbnkpLnZhbHVlKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8V2FybmluZyBTaG93PXtzaG93V2FybmluZ30gVGl0bGU9eydXYXJuaW5nJ30gTWVzc2FnZT17J1RoaXMgYWN0aW9uIGNhbiBub3QgYmUgdW5kb25lLiBJdCB3aWxsIGNyZWF0ZSBhIHBlcm1hbmVudCBjb21wbGlhbmNlIHJlY29yZC4nfSBDYWxsQmFjaz17KHJlc3VsdCkgPT4geyBpZiAocmVzdWx0KSBzdWJtaXR0KCk7IHNldFdhcm5pbmcoZmFsc2UpIH19IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbnVhbEFjdGlvbjtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEb3dsb2FkRmlsZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTAvMjcvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBNZXRlcklkOiBudW1iZXIgfVxyXG5pbnRlcmZhY2UgSUZpbGUgeyBJRDogbnVtYmVyLCBGaWxlTmFtZTogc3RyaW5nIH1cclxuXHJcbmNvbnN0IERvd2xvYWRGaWxlcyA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxJRmlsZVtdPihbXSk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IGdldEZpbGVzKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZSAhPSBudWxsICYmIGhhbmRsZS5hYm9ydCAhPSBudWxsKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuTWV0ZXJJZCwgYXNjZW5kaW5nXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RmlsZXMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PElGaWxlPj4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5NZXRlcklkID09IC0xIHx8IHByb3BzLk1ldGVySWQgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvR2V0RmlsZXMvJHtwcm9wcy5NZXRlcklkfS8ke2FzY2VuZGluZz8gMTogMH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PElGaWxlPikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIHNldEZpbGVMaXN0KGRhdGEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8VGFibGU8SUZpbGU+IFxyXG4gICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0ZpbGVOYW1lJywgbGFiZWw6ICdGaWxlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Eb3dsb2FkRmlsZS8ke2l0ZW0uSUR9YCl9PiBEb3dubG9hZCA8L2J1dHRvbj4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtmaWxlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXsnRmlsZU5hbWUnfVxyXG4gICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4geyBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyl9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvd2xvYWRGaWxlcztcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNZXRlckRldGFpbC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMDQvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFdhcm5pbmcgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJ1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IE1hbnVhbEFjdGlvbiBmcm9tICcuLi9Db21tb24vTWFudWFsQWN0aW9uJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgTWV0ZXJJRDogbnVtYmVyLCBzdGF0ZUxpc3Q6IEFycmF5PFBSQzAwMi5JU3RhdHVzPiB9XHJcblxyXG5jb25zdCBNZXRlckRldGFpbCA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd1Jldmlld2VkLCBzZXRTaG93UmV2aWV3ZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW21ldGVyLCBzZXRNZXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSU1ldGVyPih1bmRlZmluZWQpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93UkFQLCBzZXRTaG93UkFQXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gICAgY29uc3QgW3Nob3dBZGRJc3N1ZSwgc2V0U2hvd0FkZElzc3VlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1ldGVyID0gZ2V0TWV0ZXIocHJvcHMuTWV0ZXJJRCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVNZXRlciAhPSBudWxsICYmIGhhbmRsZU1ldGVyLmFib3J0ICE9IG51bGwpIGhhbmRsZU1ldGVyLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcihpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPFBSQzAwMi5JTWV0ZXI+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvT25lLyR7aWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBQUkMwMDIuSU1ldGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIHNldE1ldGVyKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICBsZXQgc3RhdCA9IChtZXRlciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBwcm9wcy5zdGF0ZUxpc3QuZmluZChzID0+IHMuSUQgPT0gbWV0ZXIuU3RhdHVzSUQpKTtcclxuICAgIGxldCBsYmxTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyMwMDAwMDAnIDogc3RhdC5Db2xvciksXHJcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGNvbG9yOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnIzAwMDAwMCcgOiBzdGF0LlRleHRDb2xvciksXHJcbiAgICAgICAgaGVpZ2h0OiAnMjVweCdcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gQWN0aXZhdGVNZXRlcigpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvQWN0aXZhdGUvJHttZXRlci5JRH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGlzdG9yeS5nbygwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7bWV0ZXIgIT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4ubGJsU3R5bGUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV0ZXIgbm90IGluIENvbXBsaWFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAneHgtbGFyZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IChtZXRlci5UaW1lciA8IDMwID8gJyMyOGE3NDUnIDogKG1ldGVyLlRpbWVyIDwgNjAgPyAnI2ZmYzEwNycgOiAnI2RjMzU0NScgKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogKG1ldGVyLlRpbWVyIDwgMzAgPyAnI2ZmZmZmZicgOiAobWV0ZXIuVGltZXIgPCA2MCA/ICcjMjEyNTI5JyA6ICcjZmZmZmZmJykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhtZXRlci5TdGF0dXMgPT0gJ0luIENvbXBsaWFuY2UnID8gMCA6IG1ldGVyLlRpbWVyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2xibFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIHBhZGRpbmc6IDUgfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsobWV0ZXIgIT0gdW5kZWZpbmVkKSA/IFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21ldGVyLlJldmlld2VkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZElzc3VlKHRydWUpfSA+IEFkZCBDb21wbGlhbmNlIElzc3VlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UkFQKHRydWUpfSA+IFN1Ym1pdHQgUmVtZWRpYWwgQWN0aW9uIFBsYW4gPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFudWFsQWN0aW9uIE1ldGVySWQ9e3Byb3BzLk1ldGVySUR9IHN0YXRlPXtwcm9wcy5zdGF0ZUxpc3QuZmluZChpdGVtID0+IGl0ZW0uRGVzY3JpcHRpb24gPT09ICdDb21wbGlhbmNlIElzc3VlJyl9IHNob3c9e3Nob3dBZGRJc3N1ZX0gc2V0U2hvdz17c2V0U2hvd0FkZElzc3VlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gTWV0ZXJJZD17cHJvcHMuTWV0ZXJJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ1JBUCBTdWJtaXR0ZWQnKX0gc2hvdz17c2hvd1JBUH0gc2V0U2hvdz17c2V0U2hvd1JBUH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPiA6IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dSZXZpZXdlZCh0cnVlKX0+IE1ldGVyIFJldmlld2VkIGZvciBDb21wbGlhbmNlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnV2FybmluZyd9IE1lc3NhZ2U9eydUaGlzIHdpbGwgYWN0aXZhdGUgdGhlIE1pTUQgUFJDMDAyIG1vbml0b3JpbmcgZm9yIHRoaXMgbWV0ZXIuIFBsZWFzZSBSZXZpZXcgdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiBiZWZvcmUgcHJvY2VlZGluZyd9IENhbGxCYWNrPXsocmVzdWx0KSA9PiB7IGlmIChyZXN1bHQpIEFjdGl2YXRlTWV0ZXIoKTsgc2V0U2hvd1Jldmlld2VkKGZhbHNlKTsgfX0gU2hvdz17c2hvd1Jldmlld2VkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+fSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXRlckRldGFpbDtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25maWd1cmF0aW9uQnlNZXRlci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDgvMjIvMjAxOSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBSZWNvcmRMaXN0IGZyb20gJy4vUmVjb3JkTGlzdCc7XHJcbmltcG9ydCBNZXRlckRldGFpbCBmcm9tICcuL01ldGVyRGV0YWlsJztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbCwgU2VhcmNoLCBTZWFyY2hCYXIgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgeyBUb29sVGlwIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcbmltcG9ydCBEb3dsb2FkRmlsZXMgZnJvbSAnLi9Eb3dsb2FkRmlsZSc7XHJcbmltcG9ydCB7IEJhc2VDb25maWdCeU1ldGVyIH0gZnJvbSAnLi4vQ29tbW9uL0Jhc2VDb25maWdXaW5kb3cnO1xyXG5pbXBvcnQgTmV3TWV0ZXJXaXp6YXJkIGZyb20gJy4uL01ldGVyV2l6emFyZC9OZXdNZXRlcldpenphcmQnO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmNvbnN0IHN0YW5kYXJkU2VhcmNoOiBTZWFyY2guSUZpZWxkPE1pTUQuTWV0ZXI+W10gPSBbXHJcbiAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ05hbWUnLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdBc3NldEtleScsIGxhYmVsOiAnQXNzZXQgS2V5JywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnTWFrZScsIGxhYmVsOiAnTWFrZScsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ01vZGVsJywgbGFiZWw6ICdNb2RlbCcsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ1N0YXR1cycsIGxhYmVsOiAnQ29tcGxpYW5jZSBTdGF0dXMnLCB0eXBlOiAnZW51bScsIGVudW06IFtdIH1cclxuXTtcclxuXHJcbmNvbnN0IFBSQzAwMk1ldGVyT3ZlcnZpZXdQYWdlID0gKHByb3BzOiB7IFJvbGVzOiBBcnJheTxNaU1ELlNlY3VyaXR5Um9sZU5hbWU+LCBNZXRlcklEOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW21ldGVyRmlsdGVycywgc2V0TWV0ZXJGaWx0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPFNlYXJjaC5JRmlsdGVyPFBSQzAwMi5JTWV0ZXI+W10+KFtdKTtcclxuICAgIGNvbnN0IFtzdGF0dXNMaXN0LCBzZXRTdGF0dXNMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JU3RhdHVzPj4oW10pO1xyXG5cclxuICAgIGNvbnN0IFttZXRlclNvcnQsIHNldE1ldGVyU29ydF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBQUkMwMDIuSU1ldGVyPihcIlN0YXR1c1wiKTtcclxuICAgIGNvbnN0IFttZXRlckFzYywgc2V0TWV0ZXJBc2NdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW21ldGVyTGlzdCwgc2V0TWV0ZXJMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JTWV0ZXI+PihbXSlcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRNZXRlciwgc2V0U2VsZWN0ZWRNZXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSU1ldGVyPihudWxsKTtcclxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gUmVhY3QudXNlU3RhdGU8KCdOb25lJyB8ICdGaWxlcycgfCAnQmFzZUNvbmZpZycpPignTm9uZScpO1xyXG5cclxuICAgIGNvbnN0IFtzaG93TmV3TWV0ZXJXaXphcmQsIHNldFNob3dOZXdNZXRlcldpemFyZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0Jhc2VDb25maWcsIHNldFNob3dCYXNlQ29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93RmlsZXMsIHNldFNob3dGaWxlc10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlU3RhdHVzTGlzdCA9IGdldFN0YXR1cygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlU3RhdHVzTGlzdC5hYm9ydCAhPSBudWxsKSBoYW5kbGVTdGF0dXNMaXN0LmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGggPSBnZXRNZXRlcnMoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaCAhPSBudWxsICYmIGguYWJvcnQgIT0gbnVsbCkgaC5hYm9ydCgpOyB9XHJcbiAgICB9LCBbbWV0ZXJTb3J0LCBtZXRlckFzYywgbWV0ZXJGaWx0ZXJzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaW5kZXggPSBtZXRlckxpc3QuZmluZEluZGV4KG0gPT4gbS5JRCA9PSBwcm9wcy5NZXRlcklEKTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gLTEpXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkTWV0ZXIobnVsbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZE1ldGVyKG1ldGVyTGlzdFtpbmRleF0pO1xyXG4gICAgfSwgW3Byb3BzLk1ldGVySUQsIG1ldGVyTGlzdF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklTdGF0dXM+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VTdGF0ZS9MaXN0YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSVN0YXR1cz4pID0+IHtcclxuICAgICAgICAgICAgc2V0U3RhdHVzTGlzdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRNZXRlcklEKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBoaXN0b3J5LnB1c2goJ2luZGV4LmNzaHRtbD9uYW1lPVBSQzAwMk92ZXJ2aWV3Jk1ldGVySUQ9JyArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JTWV0ZXI+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvU2VhcmNoYWJsZUxpc3RgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgU2VhcmNoZXM6IG1ldGVyRmlsdGVycywgT3JkZXJCeTogbWV0ZXJTb3J0LCBBc2NlbmRpbmc6IG1ldGVyQXNjIH0pLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSU1ldGVyPikgPT4ge1xyXG4gICAgICAgICAgICBzZXRNZXRlckxpc3QoZGF0YSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXI8UFJDMDAyLklNZXRlcj4gU2V0RmlsdGVyPXtzZXRNZXRlckZpbHRlcnN9IENvbGx1bW5MaXN0PXtzdGFuZGFyZFNlYXJjaH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xsdW1uPXt7IGtleTogJ05hbWUnLCBsYWJlbDogJ05hbWUnLCB0eXBlOiAnc3RyaW5nJyB9fVxyXG4gICAgICAgICAgICAgICAgRGlyZWN0aW9uPXsnbGVmdCd9IExhYmVsPXsnU2VhcmNoJ30gV2lkdGg9eyc1MCUnfVxyXG4gICAgICAgICAgICAgICAgR2V0RW51bT17KHNldE9wdGlvbnMsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmtleSA9PSAnU3RhdHVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9ucyhzdGF0dXNMaXN0Lm1hcChpdGVtID0+ICh7IExhYmVsOiBpdGVtLkRlc2NyaXB0aW9uLCBWYWx1ZTogaXRlbS5EZXNjcmlwdGlvbiB9KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBwYWRkaW5nUmlnaHQ6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJib3JkZXJcIiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInctYXV0b1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnbGFyZ2UnIH19PkFjdGlvbnM6PC9sZWdlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXdNZXRlcldpemFyZCh0cnVlKX0+IEFkZCBOZXcgTWV0ZXIgdG8gUFJDMDAyIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiICsgKHNlbGVjdGVkTWV0ZXIgPT0gbnVsbCA/ICcgZGlzYWJsZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvb2x0aXA9eydCYXNlQ29uZmlnJ30gb25DbGljaz17KCkgPT4gc2V0U2hvd0Jhc2VDb25maWcoc2VsZWN0ZWRNZXRlciAhPSBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldEhvdmVyKCdCYXNlQ29uZmlnJyl9IG9uTW91c2VPdXQ9eygpID0+IHNldEhvdmVyKCdOb25lJyl9PiBNZXRlciBDb25maWd1cmF0aW9uIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgKyAoc2VsZWN0ZWRNZXRlciA9PSBudWxsID8gJyBkaXNhYmxlZCcgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlcignRmlsZXMnKX0gb25Nb3VzZU91dD17KCkgPT4gc2V0SG92ZXIoJ05vbmUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPXsnRmlsZXMnfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RmlsZXMoc2VsZWN0ZWRNZXRlciAhPSBudWxsKX0gPiBEb3dubG9hZCBGaWxlcyA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9TZWFyY2hCYXI+XHJcbiAgICAgICAgICAgIDxUb29sVGlwIFBvc2l0aW9uPXsnYm90dG9tJ30gU2hvdz17aG92ZXI9PSdGaWxlcycgJiYgc2VsZWN0ZWRNZXRlciA9PSBudWxsIH0gVGFyZ2V0PXsnRmlsZXMnfT5cclxuICAgICAgICAgICAgICAgIDxwPiBBIE1ldGVyIG5lZWRzIHRvIGJlIHNlbGVjdGVkLjwvcD5cclxuICAgICAgICAgICAgPC9Ub29sVGlwPlxyXG4gICAgICAgICAgICA8VG9vbFRpcCBQb3NpdGlvbj17J2JvdHRvbSd9IFNob3c9e2hvdmVyID09ICdCYXNlQ29uZmlnJyAmJiBzZWxlY3RlZE1ldGVyID09IG51bGx9IFRhcmdldD17J0Jhc2VDb25maWcnfT5cclxuICAgICAgICAgICAgICAgIDxwPiBBIE1ldGVyIG5lZWRzIHRvIGJlIHNlbGVjdGVkLjwvcD5cclxuICAgICAgICAgICAgPC9Ub29sVGlwPlxyXG4gICAgICAgICAgICA8TW9kYWwgVGl0bGU9eydNZXRlciBCYXNlIENvbmZpZ3VyYXRpb24nfSBTaG93PXtzaG93QmFzZUNvbmZpZ30gQ2FsbEJhY2s9eyhjb25maXJtKSA9PiB7IHNldFNob3dCYXNlQ29uZmlnKGZhbHNlKTsgfX0gU2l6ZT0nbGcnIFNob3dYPXt0cnVlfSBTaG93Q2FuY2VsPXtmYWxzZX0gQ29uZmlybVRleHQ9J0Nsb3NlJyA+XHJcbiAgICAgICAgICAgICAgICA8QmFzZUNvbmZpZ0J5TWV0ZXIgTWV0ZXJJZD17cHJvcHMuTWV0ZXJJRH0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPE1vZGFsIFRpdGxlPXsnRG93bmxvYWQgQ3VycmVudCBDb25maWcgRmlsZSd9IFNob3c9e3Nob3dGaWxlc30gQ2FsbEJhY2s9eyhjb25maXJtKSA9PiB7IHNldFNob3dGaWxlcyhmYWxzZSk7IH19IFNpemU9J3NtJyBTaG93WD17dHJ1ZX0gU2hvd0NhbmNlbD17ZmFsc2V9IENvbmZpcm1UZXh0PSdDbG9zZSc+XHJcbiAgICAgICAgICAgICAgICA8RG93bG9hZEZpbGVzIE1ldGVySWQ9e3Byb3BzLk1ldGVySUR9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxOZXdNZXRlcldpenphcmQgc2hvdz17c2hvd05ld01ldGVyV2l6YXJkfSBzZXRTaG93PXtzZXRTaG93TmV3TWV0ZXJXaXphcmR9IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnY2FsYyggMTAwJSAtIDEzNnB4KScsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxQUkMwMDIuSU1ldGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTWV0ZXInLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01ha2UnLCBsYWJlbDogJ01ha2UnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnU3RhdHVzJywgbGFiZWw6ICdTdGF0dXMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0ID0gc3RhdHVzTGlzdC5maW5kKHMgPT4gcy5JRCA9PT0gaXRlbS5TdGF0dXNJRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjZjhmOWZhJyA6IHN0YXQuQ29sb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnIzIxMjUyOScgOiBzdGF0LlRleHRDb2xvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4ge2l0ZW0uU3RhdHVzfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e21ldGVyTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17bWV0ZXJTb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXttZXRlckFzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gbWV0ZXJTb3J0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJBc2MoIW1ldGVyQXNjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlclNvcnQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7IHNldE1ldGVySUQoZC5yb3cuSUQpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSA4MHB4KScsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT09IHByb3BzLk1ldGVySUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIGhlaWdodDogJzIwMHB4JywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0ZXJEZXRhaWwgTWV0ZXJJRD17KGlzTmFOKHByb3BzLk1ldGVySUQpID8gLTEgOiBwcm9wcy5NZXRlcklEKX0gc3RhdGVMaXN0PXtzdGF0dXNMaXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVjb3JkTGlzdCBNZXRlcklkPXsoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgPyAtMSA6IHByb3BzLk1ldGVySUQpfSBTdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBSQzAwMk1ldGVyT3ZlcnZpZXdQYWdlO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1ldGVyQ2hhbmdlUGFuLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8wNC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBNZXRlcklkOiBudW1iZXIsIFN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+IH1cclxuXHJcbmNvbnN0IFJlY29yZExpc3QgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbY2hhbmdlTGlzdCwgc2V0Q2hhbmdlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSVJlY29yZD4+KFtdKTtcclxuICAgIGNvbnN0IFtyZWNvcmRTb3J0LCBzZXRSZWNvcmRTb3J0XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJTdGF0dXNcIik7XHJcbiAgICBjb25zdCBbcmVjb3JkQXNjLCBzZXRSZWNvcmRBc2NdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVJlY29yZExpc3QgPSBnZXRSZWNvcmRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVSZWNvcmRMaXN0ICE9IG51bGwgJiYgaGFuZGxlUmVjb3JkTGlzdC5hYm9ydCAhPSBudWxsKSBoYW5kbGVSZWNvcmRMaXN0LmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySWRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRSZWNvcmRzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSVJlY29yZD4+IHtcclxuICAgICAgICBpZiAocHJvcHMuTWV0ZXJJZCA9PSAtMSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlUmVjb3JkLyR7cHJvcHMuTWV0ZXJJZH0vJHtyZWNvcmRTb3J0fS8ke3JlY29yZEFzYz8gMSA6IDB9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSVJlY29yZD4pID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hhbmdlTGlzdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7KHByb3BzLk1ldGVySWQgPiAtMSA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdjYWxjKCAxMDAlIC0gMzM2cHgpJywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdTdGF0dXMnLCBsYWJlbDogJ1N0YXR1cycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXQgPSBwcm9wcy5TdGF0ZUxpc3QuZmluZChzID0+IHMuSUQgPT09IGl0ZW0uU3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyNmOGY5ZmEnIDogc3RhdC5Db2xvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjMjEyNTI5JyA6IHN0YXQuVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiB7KHN0YXQgPT0gdW5kZWZpbmVkID8gJycgOiBzdGF0LkRlc2NyaXB0aW9uKX0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgbGFiZWw6ICdMYXN0IFVwZGF0ZWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IG1vbWVudChpdGVtLlRpbWVzdGFtcCkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1VzZXInLCBsYWJlbDogJyBCeScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhbmdlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17cmVjb3JkU29ydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17cmVjb3JkQXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSByZWNvcmRTb3J0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWNvcmRBc2MoIXJlY29yZEFzYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWNvcmRTb3J0KGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaCgnaW5kZXguY3NodG1sP25hbWU9UFJDMDAyQ2hhbmdlJlJlY29yZElEPScgKyBkLnJvdy5JRClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZExpc3Q7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQmFzZUNvbmZpZ1dpbmRvdy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMDgvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZFxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IFBhcnNlSU5JLCBQYXJzZVBBUiB9IGZyb20gJy4vRmlsZVBhcnNlcic7XHJcblxyXG5pbXBvcnQgeyBJbnB1dCwgU2VsZWN0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCBTZWxlY3RUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1NlbGVjdFRhYmxlJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnXHJcbmltcG9ydCBGaWVsZFZhbHVlcyBmcm9tICcuLi9DaGFuZ2VPdmVydmlldy9GaWVsZFZhbHVlcyc7XHJcbmltcG9ydCB7IExvYWRpbmdTY3JlZW4gfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBzZXRFcnJvcjogKGVycm9yOiBzdHJpbmdbXSkgPT4gdm9pZCxcclxuICAgIEJhc2VDb25maWdzOiBNYXA8bnVtYmVyLCBbUFJDMDAyLklCYXNlQ29uZmlnLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW11dPixcclxuICAgIHNldEJhc2VDb25maWc6KGJjOiBNYXA8bnVtYmVyLCBbUFJDMDAyLklCYXNlQ29uZmlnLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW11dPikgPT4gdm9pZCxcclxuICAgIHNldFN0ZXA6IChzdGVwOiBzdGF0ZSkgPT4gdm9pZCxcclxuICAgIGNvbnQ6IG51bWJlcixcclxuICAgIHJlc2V0OiBudW1iZXJcclxuICAgIHN0ZXA6IHN0YXRlLFxyXG4gICAgc2V0TG9hZGluZzogKGI6IGJvb2xlYW4pID0+IHZvaWQsXHJcbn1cclxuXHJcbnR5cGUgc3RhdGUgPSAnTWV0ZXInIHwgJ0Jhc2VDb25maWcnIHwgJ0ZpbGUgTG9hZCcgfCAnRWRpdCBGaWVsZCcgfCAnTmV3IEJhc2VDb25maWcnXHJcbmludGVyZmFjZSBJQ29uZmlnRmlsZUZpZWxkIGV4dGVuZHMgUFJDMDAyLklDb25maWdGaWVsZCB7IEluY2x1ZGU6IGJvb2xlYW4gfVxyXG5cclxuXHJcbmNvbnN0IEJhc2VDb25maWdXaW5kb3cgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRDb25maWcsIHNldEN1cnJlbnRDb25maWddID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihudWxsKTtcclxuICAgIGNvbnN0IFtuZXdDb25maWcsIHNldE5ld0NvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSUJhc2VDb25maWc+KHsgSUQ6IC0xLCBNZXRlcklkOiAtMSwgTmFtZTogJ0FsbCBJTkkgRmlsZXMnLCBQYXR0ZXJuOiAnKi5pbmknIH0pXHJcbiAgICBjb25zdCBbZWRpdEZpZWxkLCBzZXRFZGl0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklDb25maWdGaWVsZD4oeyBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnIH0pO1xyXG4gICAgY29uc3QgW25ld0NvbmZpZ1VuaXEsIHNldE5ld0NvbmZpZ1VuaXFdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtmaWxlRmllbGRzLCBzZXRGaWxlRmllbGRzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PElDb25maWdGaWxlRmllbGQ+PihbXSk7XHJcblxyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ0ZpZWxkJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5CYXNlQ29uZmlncy5zaXplID09IDApIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudENvbmZpZyhudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2V0Q3VycmVudENvbmZpZyA9PSBudWxsIHx8ICFwcm9wcy5CYXNlQ29uZmlncy5oYXMoY3VycmVudENvbmZpZykpIFxyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q29uZmlnKHByb3BzLkJhc2VDb25maWdzLmtleXMoKS5uZXh0KCkudmFsdWUpICAgICAgXHJcblxyXG4gICAgfSwgW3Byb3BzLkJhc2VDb25maWdzXSlcclxuXHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgIT0gJ0Jhc2VDb25maWcnKVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9XHJcblxyXG4gICAgICAgICQoXCIuY3VzdG9tLWZpbGUtaW5wdXRcIikub24oXCJjaGFuZ2VcIiwgKGV2dDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IChldnQgYXMgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pLnRhcmdldC52YWx1ZS5zcGxpdChcIlxcXFxcIikucG9wKCk7XHJcbiAgICAgICAgICAgICQoZXZ0LnRhcmdldCkuc2libGluZ3MoXCIuY3VzdG9tLWZpbGUtbGFiZWxcIikuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKS5odG1sKGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgcmVhZFNpbmdsZUZpbGUoKGV2dCBhcyBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiksIGZpbGVOYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gJChcIi5jdXN0b20tZmlsZS1pbnB1dFwiKS5vZmYoJ2NoYW5nZScpXHJcblxyXG4gICAgfSwgW3Byb3BzLnN0ZXBdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBlcnJvciA9IFtdO1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHByb3BzLkJhc2VDb25maWdzLnNpemUgPT0gMClcclxuICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0F0IGxlYXN0IDEgQmFzZSBDb25maWd1cmF0aW9uIG5lZWRzIHRvIGJlIHNldCB1cC4nKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuQmFzZUNvbmZpZ3Muc2l6ZSA+IDApXHJcbiAgICAgICAgICAgICAgICBbLi4ucHJvcHMuQmFzZUNvbmZpZ3Mua2V5cygpXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5CYXNlQ29uZmlncy5nZXQoaXRlbSlbMV0ubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0F0IGxlYXN0IDEgRmllbGQgbmVlZHMgdG8gYmUgc2V0IHVwIGluIENvbmZpZ3VyYXRpb24gXFwnJyArIChwcm9wcy5CYXNlQ29uZmlncy5nZXQoaXRlbSlbMF0uTmFtZSkgKyAnXFwnJylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdOZXcgQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgaWYgKG5ld0NvbmZpZy5OYW1lID09IG51bGwgfHwgbmV3Q29uZmlnLk5hbWUubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIE5hbWUgaXMgcmVxdWlyZWQuJylcclxuICAgICAgICAgICAgaWYgKG5ld0NvbmZpZy5QYXR0ZXJuID09IG51bGwgfHwgbmV3Q29uZmlnLlBhdHRlcm4ubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIFBhdHRlcm4gaXMgcmVxdWlyZWQgKGUuZy4gKi5pbmkgb3IgKi5wYXIgZm9yIGFsbElOSSBvciBQQVIgRmlsZXMpLicpXHJcbiAgICAgICAgICAgIGlmIChuZXdDb25maWcuTmFtZSAhPSBudWxsICYmICFuZXdDb25maWdVbmlxKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnTmFtZSBuZWVkcyB0byBiZSB1bmlxdWUuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0VkaXQgRmllbGQnKSB7XHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuTmFtZSA9PSBudWxsIHx8IGVkaXRGaWVsZC5OYW1lLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnQSBGaWVsZCBuYW1lIGlzIHJlcXVpcmVkLicpXHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuVmFsdWUgPT0gbnVsbCB8fCBlZGl0RmllbGQuVmFsdWUubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIFZhbHVlIGlzIHJlcXVpcmVkLicpXHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuVmFsdWUgIT0gbnVsbCAmJiAoZWRpdEZpZWxkLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyAmJiBpc05hTihwYXJzZUZsb2F0KGVkaXRGaWVsZC5WYWx1ZSkpKSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0EgVmFsdWUgZm9yIGEgTnVtYmVyIEZpZWxkIG5lZWRzIHRvIGJlIG51bWVyaWMuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0ZpbGUgTG9hZCcpIHtcclxuICAgICAgICAgICAgaWYgKCFmaWxlRmllbGRzLnNvbWUoaXRlbSA9PiBpdGVtLkluY2x1ZGUpKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnQXQgbGVhc3Qgb25lIEZpZWxkIG5lZWRzIHRvIGJlIHNlbGVjdGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5zZXRFcnJvcihlcnJvcilcclxuICAgIH0sIFtwcm9wcy5zdGVwLCBwcm9wcy5CYXNlQ29uZmlncywgbmV3Q29uZmlnLCBuZXdDb25maWdVbmlxLCBlZGl0RmllbGQsIGZpbGVGaWVsZHNdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFsuLi5wcm9wcy5CYXNlQ29uZmlncy52YWx1ZXMoKV0ubWFwKGkgPT4gaVswXSkuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5OYW1lID09IG5ld0NvbmZpZy5OYW1lKSA9PSAtMSlcclxuICAgICAgICAgICAgc2V0TmV3Q29uZmlnVW5pcSh0cnVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZ1VuaXEoZmFsc2UpO1xyXG4gICAgfSwgW3Byb3BzLkJhc2VDb25maWdzLCBuZXdDb25maWddKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdOZXcgQmFzZUNvbmZpZycpXHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZyh7IElEOiAtMSwgTWV0ZXJJZDogLTEsIE5hbWU6ICdCYXNlIENvbmZpZyBOYW1lJywgUGF0dGVybjogJyouaW5pJyB9KTtcclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnRWRpdCBGaWVsZCcpXHJcbiAgICAgICAgICAgIHNldEVkaXRGaWVsZCh7XHJcbiAgICAgICAgICAgICAgICBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTonRmllbGQnLCBWYWx1ZTonJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdGaWxlIExvYWQnKVxyXG4gICAgICAgICAgICBzZXRGaWxlRmllbGRzKFtdKTtcclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0U3RlcCgnTWV0ZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdCYXNlQ29uZmlnJyk7XHJcbiAgICB9LCBbcHJvcHMucmVzZXRdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKHByb3BzLkJhc2VDb25maWdzKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gKHVwZGF0ZWQuc2l6ZSA+IDA/IE1hdGgubWF4KC4uLnVwZGF0ZWQua2V5cygpKSA6IDApKyAxO1xyXG4gICAgICAgICAgICB1cGRhdGVkLnNldChpZCwgW3sgLi4ubmV3Q29uZmlnLCBJRDogaWR9LFtdXSk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEJhc2VDb25maWcodXBkYXRlZCk7XHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZyh7IElEOiAtMSwgTWV0ZXJJZDogLTEsIE5hbWU6ICdCYXNlIENvbmZpZyBOYW1lJywgUGF0dGVybjogJyouaW5pJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0VkaXQgRmllbGQnICYmIGVkaXRGaWVsZC5JRCA9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKHByb3BzLkJhc2VDb25maWdzKTtcclxuICAgICAgICAgICAgbGV0IGNvbmcgPSB1cGRhdGVkLmdldChjdXJyZW50Q29uZmlnKVxyXG4gICAgICAgICAgICBsZXQgaWQgPSAoY29uZ1sxXS5sZW5ndGggPiAwID8gTWF0aC5tYXgoLi4uY29uZ1sxXS5tYXAoaXRlbSA9PiBpdGVtLklEKSkgKyAxIDogMSk7XHJcbiAgICAgICAgICAgIGNvbmdbMV0gPSBbLi4uY29uZ1sxXSwgeyAuLi5lZGl0RmllbGQsIElEOiBpZCB9XTtcclxuICAgICAgICAgICAgdXBkYXRlZC5zZXQoY3VycmVudENvbmZpZywgY29uZyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9wcy5zZXRCYXNlQ29uZmlnKHVwZGF0ZWQpO1xyXG4gICAgICAgICAgICBzZXRFZGl0RmllbGQoeyBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdFZGl0IEZpZWxkJyAmJiBlZGl0RmllbGQuSUQgIT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBfLmNsb25lRGVlcChwcm9wcy5CYXNlQ29uZmlncyk7XHJcbiAgICAgICAgICAgIGxldCBjb25nID0gdXBkYXRlZC5nZXQoY3VycmVudENvbmZpZylcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gY29uZ1sxXS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLklEID09IGVkaXRGaWVsZC5JRClcclxuICAgICAgICAgICAgY29uZ1sxXVtpbmRleF0gPSBlZGl0RmllbGQ7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQuc2V0KGN1cnJlbnRDb25maWcsIGNvbmcpO1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRCYXNlQ29uZmlnKHVwZGF0ZWQpO1xyXG4gICAgICAgICAgICBzZXRFZGl0RmllbGQoeyBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdGaWxlIExvYWQnKSB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gXy5jbG9uZURlZXAocHJvcHMuQmFzZUNvbmZpZ3MpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAodXBkYXRlZC5zaXplID4gMCA/IE1hdGgubWF4KC4uLnVwZGF0ZWQua2V5cygpKSA6IDApICsgMTtcclxuICAgICAgICAgICAgbGV0IGZpZWxkcyA9IGZpbGVGaWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5JbmNsdWRlKS5tYXAoKGl0ZW0saW5kZXgpID0+ICh7IElEOiBpbmRleCArIDEsIEJhc2VDb25maWdJZDogaWQsIFZhbHVlOiBpdGVtLlZhbHVlLCBOYW1lOiBpdGVtLk5hbWUsIENvbXBhcmlzb246IGl0ZW0uQ29tcGFyaXNvbiwgRmllbGRUeXBlOiBpdGVtLkZpZWxkVHlwZSB9KSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQuc2V0KGlkLCBbeyBOYW1lOiBmaWxlTmFtZSwgUGF0dGVybjogZmlsZU5hbWUsIE1ldGVySWQ6IC0xLCBJRDogaWQgfSwgZmllbGRzXSk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEJhc2VDb25maWcodXBkYXRlZCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVGaWVsZHMoW10pO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q29uZmlnKGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdCYXNlQ29uZmlnJyk7XHJcbiAgICB9LCBbcHJvcHMuY29udF0pXHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb25maWcgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCB1cGRhdGVkID0gcHJvcHMuQmFzZUNvbmZpZ3MuZ2V0KGN1cnJlbnRDb25maWcpO1xyXG4gICAgICAgIGxldCBuY29uZmlnID0gXy5jbG9uZURlZXAocHJvcHMuQmFzZUNvbmZpZ3MpO1xyXG4gICAgICAgIG5jb25maWcuc2V0KGN1cnJlbnRDb25maWcsIFt1cGRhdGVkWzBdLCBfLm9yZGVyQnkodXBkYXRlZFsxXSwgW3NvcnRGaWVsZF0sIFsoIWFzY2VuZGluZyA/IFwiYXNjXCIgOiBcImRlc2NcIildKV0pO1xyXG4gICAgICAgIHByb3BzLnNldEJhc2VDb25maWcobmNvbmZpZyk7XHJcbiAgICB9LCBbYXNjZW5kaW5nLCBzb3J0RmllbGQsIGN1cnJlbnRDb25maWddKVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiByZWFkU2luZ2xlRmlsZShldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBmaWxlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcHJvcHMuc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoXCIuaW5pXCIpKVxyXG4gICAgICAgICAgICBQYXJzZUlOSShldnQsIChkKSA9PiBMb2FkQmFzZUNvbmZpZ0ZpbGUoZmlsZU5hbWUsZC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoeyAuLi5pdGVtLCBJbmNsdWRlOiBmYWxzZSB9KSkpKTtcclxuICAgICAgICBpZiAoZmlsZU5hbWUuZW5kc1dpdGgoXCIucGFyXCIpKVxyXG4gICAgICAgICAgICBQYXJzZVBBUihldnQsIChkKSA9PiBMb2FkQmFzZUNvbmZpZ0ZpbGUoZmlsZU5hbWUsIGQubWFwKChpdGVtLCBpbmRleCkgPT4gKHsgLi4uaXRlbSwgSW5jbHVkZTogZmFsc2UgfSkpKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBwcm9wcy5zZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIExvYWRCYXNlQ29uZmlnRmlsZShmaWxlOiBzdHJpbmcsIEZpZWxkczogQXJyYXk8SUNvbmZpZ0ZpbGVGaWVsZD4pIHtcclxuXHJcbiAgICAgICAgc2V0RmlsZU5hbWUoZmlsZSk7XHJcbiAgICAgICAgc2V0RmlsZUZpZWxkcyhGaWVsZHMubWFwKGl0ZW0gPT4geyBpdGVtLkJhc2VDb25maWdJZCA9IC0xOyByZXR1cm4gaXRlbSB9KSlcclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdGaWxlIExvYWQnKTtcclxuICAgICAgICBwcm9wcy5zZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRDb25maWdGaWVsZChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpIHtcclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdFZGl0IEZpZWxkJyk7XHJcbiAgICAgICAgc2V0RWRpdEZpZWxkKHJlY29yZClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDb25maWdGaWVsZCgpIHtcclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdFZGl0IEZpZWxkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cHJvcHMuc3RlcCA9PSAnQmFzZUNvbmZpZycgPyA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbLi4ucHJvcHMuQmFzZUNvbmZpZ3Mua2V5cygpXS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJuYXYtbGlua1wiICsgKGN1cnJlbnRDb25maWcgPT0gaXRlbSA/IFwiIGFjdGl2ZVwiIDogXCJcIil9IG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRDb25maWcoaXRlbSl9Pntwcm9wcy5CYXNlQ29uZmlncy5nZXQoaXRlbSlbMF0uTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMzUsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYXJkXCJ9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50Q29uZmlnICE9IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4gQ29uZmlndXJhdGlvbiB7cHJvcHMuQmFzZUNvbmZpZ3MuZ2V0KGN1cnJlbnRDb25maWcpWzBdLk5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYXJkLWJvZHlcIn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTQwLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDU0MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxQUkMwMDIuSUJhc2VDb25maWc+IFJlY29yZD17cHJvcHMuQmFzZUNvbmZpZ3MuZ2V0KGN1cnJlbnRDb25maWcpWzBdfSBGaWVsZD17J1BhdHRlcm4nfSBTZXR0ZXI9eygpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IExhYmVsPXsnRmlsZSBQYXR0ZXJuJ30gRGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8UFJDMDAyLklDb25maWdGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnRmllbGQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnTmFtZSd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGaWVsZFR5cGUnLCBsYWJlbDogJ1R5cGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnRmllbGRUeXBlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0NvbXBhcmlzb24nLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydDb21wYXJpc29uJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1ZhbHVlJywgbGFiZWw6ICdWYWx1ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydWYWx1ZSd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdJRCcsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzE2cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IG9uQ2xpY2s9eygpID0+IGVkaXRDb25maWdGaWVsZChpdGVtKX0+PGkgc3R5bGU9e3sgY29sb3I6ICcjMDA3QkZGJyB9fSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWwtc3F1YXJlIGZhLTN4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PiB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuQmFzZUNvbmZpZ3MuZ2V0KGN1cnJlbnRDb25maWcpWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17J05hbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGQpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDY2Niwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnRDb25maWcgIT0gbnVsbCA/IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiBhZGRDb25maWdGaWVsZCgpfT5BZGQgbmV3IEZpZWxkIDwvYnV0dG9uPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1pbnB1dFwiIGFjY2VwdD1cIi5pbmksLnBhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLWxhYmVsXCI+Q2hvb3NlIGEgQ29uZmlndXJhdGlvbiBGaWxlIGlmIGFwcGxpY2FibGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLnNldFN0ZXAoJ05ldyBCYXNlQ29uZmlnJykgfX0+IEFkZCBOZXcgQmFzZSBDb25maWd1cmF0aW9uIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdGVwID09ICdOZXcgQmFzZUNvbmZpZycgPyA8PlxyXG4gICAgICAgICAgICAgICAgPElucHV0PFBSQzAwMi5JQmFzZUNvbmZpZz4gUmVjb3JkPXtuZXdDb25maWd9IEZpZWxkPXsnTmFtZSd9IFNldHRlcj17c2V0TmV3Q29uZmlnfSBWYWxpZD17KCkgPT4gbmV3Q29uZmlnLk5hbWUgIT0gbnVsbCAmJiBuZXdDb25maWcuTmFtZS5sZW5ndGggPiAwICYmIG5ld0NvbmZpZ1VuaXF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWVkYmFjaz17J05hbWUgaXMgcmVxdWlyZWQgYW5kIG11c3QgYmUgdW5pcXVlJ30gTGFiZWw9eydOYW1lJ30gLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dDxQUkMwMDIuSUJhc2VDb25maWc+IFJlY29yZD17bmV3Q29uZmlnfSBGaWVsZD17J1BhdHRlcm4nfSBTZXR0ZXI9e3NldE5ld0NvbmZpZ30gVmFsaWQ9eygpID0+IG5ld0NvbmZpZy5QYXR0ZXJuICE9IG51bGwgJiYgbmV3Q29uZmlnLlBhdHRlcm4ubGVuZ3RoID4gMH1cclxuICAgICAgICAgICAgICAgICAgICBMYWJlbD17J0ZpbGUgUGF0dGVybid9IEZlZWRiYWNrPXsnRmlsZSBQYXR0ZXJuIGlzIHJlcXVpcmVkLid9IC8+IDwvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdGVwID09ICdFZGl0IEZpZWxkJyA/IDxDb25maWdGaWVsZEVkaXQgRmllbGQ9e2VkaXRGaWVsZH0gU2V0dGVyPXtzZXRFZGl0RmllbGR9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAge3Byb3BzLnN0ZXAgPT0gJ0ZpbGUgTG9hZCcgPyA8U2VsZWN0VGFibGU8SUNvbmZpZ0ZpbGVGaWVsZD5cclxuICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ0ZpZWxkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdjYWxjKDMwJSAtIDguMjVlbSknIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnY2FsYyg1MCUgLSA4LjI1ZW0pJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PElDb25maWdGaWxlRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydOYW1lJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRmllbGRUeXBlJywgbGFiZWw6ICdUeXBlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICc4ZW0nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnOGVtJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PElDb25maWdGaWxlRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydGaWVsZFR5cGUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdDb21wYXJpc29uJywgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzVlbScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICc1ZW0nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8SUNvbmZpZ0ZpbGVGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0NvbXBhcmlzb24nfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdWYWx1ZScsIGxhYmVsOiAnVmFsdWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2NhbGMoNzAlIC0gOC4yNWVtKScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdjYWxjKDUwJSAtIDguMjVlbSknIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8SUNvbmZpZ0ZpbGVGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J1ZhbHVlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGtleUZpZWxkPXsnTmFtZSd9XHJcbiAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZmlsZUZpZWxkc31cclxuICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17J05hbWUnfVxyXG4gICAgICAgICAgICAgICAgYXNjZW5kaW5nPXt0cnVlfVxyXG5cclxuICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uPXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbGVGaWVsZHMoKGxzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9IGxzdC5tYXAoaXRlbSA9PiAoeyAuLi5pdGVtLCBJbmNsdWRlOiAoZC5maW5kSW5kZXgoaSA9PiBpLklEID09IGl0ZW0uSUQpID4gLTEpIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgIG9uU29ydD17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPilcclxufVxyXG5cclxuY29uc3QgQ29uZmlnRmllbGRFZGl0ID0gKHByb3BzOiB7IEZpZWxkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkLCBTZXR0ZXI6IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpID0+IHZvaWQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IEZpZWxkVHlwZU9wdGlvbnMgPSBbeyBWYWx1ZTogJ3N0cmluZycsIExhYmVsOiAnVGV4dCcgfSwgeyBWYWx1ZTogJ251bWJlcicsIExhYmVsOiAnTnVtYmVyJyB9XTtcclxuICAgIGNvbnN0IE51bWJlckNoZWNrcyA9IFt7IFZhbHVlOiAnPScsIExhYmVsOiAnPScgfSwgeyBWYWx1ZTogJzw+JywgTGFiZWw6ICc8PicgfSwgeyBWYWx1ZTogJz4nLCBMYWJlbDogJz4nIH0sIHsgVmFsdWU6ICc8JywgTGFiZWw6ICc8JyB9XTtcclxuICAgIGNvbnN0IFRleHRDaGVja3MgPSBbeyBWYWx1ZTogJz0nLCBMYWJlbDogJz0nIH0sIHsgVmFsdWU6ICc8PicsIExhYmVsOiAnPD4nIH0sIHsgVmFsdWU6ICdJTicsIExhYmVsOiAnSW4nIH1dO1xyXG5cclxuICAgIGZ1bmN0aW9uIFZhbGlkVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChwcm9wcy5GaWVsZC5WYWx1ZSAhPSBudWxsICYmIHByb3BzLkZpZWxkLlZhbHVlLmxlbmd0aCA+IDAgJiYgKHByb3BzLkZpZWxkLkZpZWxkVHlwZSAhPSAnbnVtYmVyJyB8fCAhaXNOYU4ocGFyc2VGbG9hdChwcm9wcy5GaWVsZC5WYWx1ZSkpKSlcclxuICAgIH1cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8U2VsZWN0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnRmllbGRUeXBlJ30gT3B0aW9ucz17RmllbGRUeXBlT3B0aW9uc30gTGFiZWw9eydGaWVsZCBUeXBlJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmQuRmllbGRUeXBlICE9PSBwcm9wcy5GaWVsZC5GaWVsZFR5cGUgJiYgcmVjb3JkLkNvbXBhcmlzb24gIT0gJzw+JyAmJiByZWNvcmQuQ29tcGFyaXNvbiAhPSAnPScpXHJcbiAgICAgICAgICAgICAgICByZWNvcmQuQ29tcGFyaXNvbiA9ICc9JztcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHJlY29yZCk7XHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydOYW1lJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IFZhbGlkPXsoKSA9PiBwcm9wcy5GaWVsZC5OYW1lICE9IG51bGwgJiYgcHJvcHMuRmllbGQuTmFtZS5sZW5ndGggPiAwfSBMYWJlbD17J0ZpZWxkJ30gLz5cclxuICAgICAgICA8U2VsZWN0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17cHJvcHMuRmllbGR9IEZpZWxkPXsnQ29tcGFyaXNvbid9IE9wdGlvbnM9eyhwcm9wcy5GaWVsZC5GaWVsZFR5cGUgPT0gJ251bWJlcicgPyBOdW1iZXJDaGVja3MgOiBUZXh0Q2hlY2tzKX0gTGFiZWw9eydSdWxlJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IC8+XHJcbiAgICAgICAgeyhwcm9wcy5GaWVsZC5Db21wYXJpc29uID09ICdJTicgPyA8TXVsdGlJbnB1dEZpZWxkIGRhdGE9e3Byb3BzLkZpZWxkfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgcHJvcHMuU2V0dGVyKHJlY29yZCkgfX0gLz4gOlxyXG4gICAgICAgICAgICA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydWYWx1ZSd9IFNldHRlcj17KHJlY29yZCkgPT4geyBwcm9wcy5TZXR0ZXIocmVjb3JkKSB9fSBWYWxpZD17KCkgPT4gVmFsaWRWYWx1ZSgpfSBMYWJlbD17J1ZhbHVlJ30gRmVlZGJhY2s9e3Byb3BzLkZpZWxkLkZpZWxkVHlwZSAhPSAnbnVtYmVyJz8gJ1ZhbHVlIGlzIHJlcXVpcmVkLicgOiAnVmFsdWUgaXMgcmVxdWlyZWQgYW5kIG5lZWRzIHRvIGJlIGEgbnVtYmVyLid9IC8+XHJcbiAgICAgICAgKX1cclxuICAgIDwvPilcclxufVxyXG5cclxuIGNvbnN0IE11bHRpSW5wdXRGaWVsZCA9IChwcm9wczogeyBkYXRhOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkLCBTZXR0ZXI6IChyZWNvcmQ6IFBSQzAwMi5JQ29uZmlnRmllbGQpID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtsaXN0VmFsdWVzLCBzZXRMaXN0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PHN0cmluZz4+KFtdKTtcclxuXHJcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0TGlzdFZhbHVlcyhwcm9wcy5kYXRhLlZhbHVlLnNwbGl0KCc7JykpXHJcbiAgICAgICAgfSwgW3Byb3BzLmRhdGFdKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBTZXQoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCByZWMgPSBfLmNsb25lRGVlcChwcm9wcy5kYXRhKTtcclxuICAgICAgICAgICAgbGV0IGxzdCA9IF8uY2xvbmUobGlzdFZhbHVlcyk7XHJcbiAgICAgICAgICAgIGxzdFtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmVjLlZhbHVlID0gbHN0LmpvaW4oJzsnKTtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHJlYylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIEFkZE5ldygpIHtcclxuICAgICAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgbHN0ID0gXy5jbG9uZShsaXN0VmFsdWVzKTtcclxuICAgICAgICAgICAgbHN0LnB1c2goKHByb3BzLmRhdGEuRmllbGRUeXBlID09ICdzdHJpbmcnID8gJ1ZhbHVlJyA6ICcwJykpXHJcbiAgICAgICAgICAgIHJlYy5WYWx1ZSA9IGxzdC5qb2luKCc7Jyk7XHJcbiAgICAgICAgICAgIHByb3BzLlNldHRlcihyZWMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgbHN0ID0gXy5jbG9uZShsaXN0VmFsdWVzKTtcclxuICAgICAgICAgICAgbHN0LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgcmVjLlZhbHVlID0gbHN0LmpvaW4oJzsnKTtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHJlYylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7bGlzdFZhbHVlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT0gMCA/IDxsYWJlbD5WYWx1ZXM8L2xhYmVsPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGV2dCkgPT4geyBTZXQoaW5kZXgsIGV2dC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKSB9fSB2YWx1ZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiBBZGROZXcoKX0+IEFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29uZmlnV2luZG93O1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEZpbGVQYXJzZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzAyLzIwMjEgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUlOSShldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBjb21wbGV0ZTogKGRhdGE6IFBSQzAwMi5JQ29uZmlnRmllbGRbXSkgPT4gdm9pZCkge1xyXG5cclxuICAgIHZhciBmID0gZXZ0LnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCByZXN1bHRzID0gW107XHJcbiAgICBpZiAoZikge1xyXG5cclxuICAgICAgICB2YXIgciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29udGVudHMgPSBlLnRhcmdldC5yZXN1bHQgYXMgc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpbmVzID0gY29udGVudHMuc3BsaXQoL1tcXHJcXG5dKy9nKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBsaW5lcy5mb3JFYWNoKChsbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG4uaW5jbHVkZXMoJz0nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBsbi5pbmRleE9mKCc9Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMubWFwKGl0ZW0gPT4gaXRlbS5rZXkpLmluY2x1ZGVzKGxuLnN1YnN0cigwLCBpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsga2V5OiBsbi5zdWJzdHIoMCwgaSkgKyAnLScgKyBpbmRleCwgdmFsdWU6IGxuLnN1YnN0cihpICsgMSkgfSlcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBrZXk6IGxuLnN1YnN0cigwLCBpKSwgdmFsdWU6IGxuLnN1YnN0cihpICsgMSkgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICBjb21wbGV0ZShyZXN1bHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBJRDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBCYXNlQ29uZmlnSWQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgTmFtZTogaXRlbS5rZXksXHJcbiAgICAgICAgICAgICAgICBWYWx1ZTogaXRlbS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIENvbXBhcmlzb246ICc9JyxcclxuICAgICAgICAgICAgICAgIEZpZWxkVHlwZTogJ3N0cmluZydcclxuICAgICAgICAgICAgfSkpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByLnJlYWRBc1RleHQoZik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VQQVIoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgY29tcGxldGU6IChkYXRhOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkW10pID0+IHZvaWQpIHtcclxuXHJcbiAgICB2YXIgZiA9IGV2dC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBsZXQgcmVzdWx0czogUFJDMDAyLklDb25maWdGaWVsZFtdID0gW107XHJcblxyXG4gICAgaWYgKGYpIHtcclxuXHJcbiAgICAgICAgdmFyIHIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnRzID0gZS50YXJnZXQucmVzdWx0IGFzIHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IGNvbnRlbnRzLnNwbGl0KC9bXFxyXFxuXSsvZyk7XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGxpbmVzLmZvckVhY2goKGxuLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUGFyc2UgaGVhZGVyIGZpcnN0XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxuLmluY2x1ZGVzKCc9JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gbG4uaW5kZXhPZignPScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGxuLnN1YnN0cmluZygwLCBpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocm93LnRvTG93ZXJDYXNlKCkgPT0gJ2hlYWRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGxuLnN1YnN0cmluZyhpICsgMSkuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SW5kZXggPSBNYXRoLm1heCguLi5yZXN1bHRzLm1hcChpdGVtID0+IGl0ZW0uSUQpLDApICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiU3RhdGlvblwiLCBWYWx1ZTogZGF0YVsxXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiTm9taW5hbCBGcmVxdWVuY3lcIiwgVmFsdWU6IGRhdGFbMl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIk51bS4gREMgQ2hhbm5lbHNcIiwgVmFsdWU6IGRhdGFbM10gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIk51bS4gQW5hbG9nIENoYW5uZWxzXCIsIFZhbHVlOiBkYXRhWzRdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJOdW0uIEV2ZW50IENoYW5uZWxzXCIsIFZhbHVlOiBkYXRhWzVdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJOdW0uIFRyaWdnZXJzXCIsIFZhbHVlOiBkYXRhWzZdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJTaHVudCBUeXBlXCIsIFZhbHVlOiBkYXRhWzddIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJPdmVyV3JpdGUgb2xkIFJlY29yZHNcIiwgVmFsdWU6IGRhdGFbOF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlNFUiBDaGFubmVscyBpbiBQQVJcIiwgVmFsdWU6IGRhdGFbOV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJTRVIgQ0hhbm5lbHMgdGhhdCBjYXVzZSBERlIgU3RvcFwiLCBWYWx1ZTogZGF0YVsxMF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJTRVIgQXV0b1N0b3AgaWYgICNUcmlnZ2VycyA+XCIsIFZhbHVlOiBkYXRhWzExXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlNFUiBBdXRvU3RvcCBUaW1lIFBlcmlvZFwiLCBWYWx1ZTogZGF0YVsxMl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJTRVIgUmVzdG9yZSBQZXJpb2RcIiwgVmFsdWU6IGRhdGFbMTNdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiRGVib3VuY2UgVGltZVwiLCBWYWx1ZTogZGF0YVsxNF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJUcmFuc2llbnQgUHJlZmF1bHRcIiwgVmFsdWU6IGRhdGFbMTVdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTYpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlRyYW5zaWVudCBQb3N0ZmF1bHRcIiwgVmFsdWU6IGRhdGFbMTZdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiVHJhbnNpZW50IEZhdWx0IExpbWl0XCIsIFZhbHVlOiBkYXRhWzE3XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDE4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlRyYW5zaWVudCBTYW1wbGluZyBGcmVxdWVuY3lcIiwgVmFsdWU6IGRhdGFbMThdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiRXh0ZW5kZWQgUHJlZmF1bHRcIiwgVmFsdWU6IGRhdGFbMTldIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiRXh0ZW5kZWQgUG9zdCBGYXVsdFwiLCBWYWx1ZTogZGF0YVsyMF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJFeHRlbmRlZCBGYXVsdFwiLCBWYWx1ZTogZGF0YVsyMV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJFeHRlbmRlZCBTYW1wbGluZyBGcmVxdWVuY3lcIiwgVmFsdWU6IGRhdGFbMjJdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiRXh0ZW5kZWQgUk1TIEN5Y2xlcy9Qb2ludFwiLCBWYWx1ZTogZGF0YVsyM10gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJDb250aW51b3VzIFJlY29yZGluZyBTYW1wbGVzL1BvaW50IEZyZXEtUk1TLVBoYXNlXCIsIFZhbHVlOiBkYXRhWzI0XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDI1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIkNvbnRpbnVvdXMgUmVjb3JkaW5nIFN0b3JhZ2UgTGVuZ3RoIChEYXlzKVwiLCBWYWx1ZTogZGF0YVsyNV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJDb250aW5vdXMgT3NjaWxsb2dyYXBoeSBTdG9yYWdlIExlbmd0aCAoRGF5cylcIiwgVmFsdWU6IGRhdGFbMjZdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiVHJpZ2dlciBDaGFubmVscyAtIEF1dG8gU3RvcCBJZiAjIFRyaWdnZXJzID5cIiwgVmFsdWU6IGRhdGFbMjddIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiVHJpZ2dlcnMgQ2hhbm5lbHMgQXV0byBTdG9wIFRpbWUgUGVyaW9kIChNaW51dGVzKVwiLCBWYWx1ZTogZGF0YVsyOF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJUcmlnZ2VycyBDaGFubmVscyBBdXRvIFN0b3AgLSBSZXN0b3JlIEFmdGVyIChNaW5zKVwiLCBWYWx1ZTogZGF0YVsyOV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJUcmlnZ2VycyBDaGFubmVsIEF1dG8gU3RvcCAtIEFwcGx5IHRvIERpc3R1cmJhbmNlIFRyaWdnZXJzIE9ubHkgKDA9bm8gMT15ZXMpXCIsIFZhbHVlOiBkYXRhWzMwXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlRyYW5zaWVudCBSYXRlIE9zY2lsbG9ncmFwaHkgU3RvcmFnZSAoRGF5cylcIiwgVmFsdWU6IGRhdGFbMzFdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiIyBGYXVsdHMgb24gRGlza1wiLCBWYWx1ZTogZGF0YVszMl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJNYXN0ZXIgQ2hhc3Npc1wiLCBWYWx1ZTogZGF0YVszM10gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJFeHRlbmRlZCBSTVMgSW5jbHVkZSBQaGFzZSBBbmdsZVwiLCBWYWx1ZTogZGF0YVszNF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJFVk5PTUlTUyAoRG8gTm90IFJlc3RyaWN0IEV2ZW50IE9ubHkgVHJpZ2dlcilcIiwgVmFsdWU6IGRhdGFbMzVdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMzYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiQ29udGludW91cyBQUSBEYXRhXCIsIFZhbHVlOiBkYXRhWzM2XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDM3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIkNCQSBQaGFzZSBSb3RhdGlvblwiLCBWYWx1ZTogZGF0YVszN10gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCIjIG9mIFRXIENoYW5uZWxzXCIsIFZhbHVlOiBkYXRhWzM4XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZShyZXN1bHRzKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByLnJlYWRBc1RleHQoZik7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTmV3TWV0ZXJXaXp6YXJkLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xNy8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy8gIDAyLzAyLzIwMjEgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIFVwZGF0ZWQgUEFSIFBhcnNlciBhbmQgbW92ZWQgdG8gZ3BhLWdlbXN0b25lIFVJLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCBTZWxlY3RNZXRlciBmcm9tICcuL1NlbGVjdE1ldGVyJztcclxuaW1wb3J0IEJhc2VDb25maWdXaW5kb3cgZnJvbSAnLi9CYXNlQ29uZmlnV2luZG93JztcclxuaW1wb3J0IHsgTG9hZGluZ1NjcmVlbiwgTW9kYWwsIFRvb2xUaXAsIFdhcm5pbmcgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IHNob3c6IGJvb2xlYW4sIHNldFNob3c6IChzOiBib29sZWFuKSA9PiB2b2lkfVxyXG50eXBlIHN0YXRlID0gJ01ldGVyJ3wnQmFzZUNvbmZpZyd8J0ZpbGUgTG9hZCd8ICdFZGl0IEZpZWxkJyB8ICdOZXcgQmFzZUNvbmZpZycgXHJcblxyXG5jb25zdCBOZXdNZXRlcldpenphcmQgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW21ldGVyLCBzZXRNZXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSU1ldGVyPihudWxsKTtcclxuICAgIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IFJlYWN0LnVzZVN0YXRlPHN0YXRlPignTWV0ZXInKTtcclxuICAgIGNvbnN0IFtzaG93V2FybmluZywgc2V0U2hvd1dhcm5pbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dDb21wbGV0ZSwgc2V0U2hvd0NvbXBsZXRlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gUmVhY3QudXNlU3RhdGU8J0NhbmNlbCcgfCAnQ29uZmlybScgfCAnTm9uZSc+KCdOb25lJyk7XHJcblxyXG4gICAgY29uc3QgW3Nob3dMb2FkaW5nLCBzZXRTaG93TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW2Jhc2VDb25maWcsIHNldEJhc2VDb25maWddID0gUmVhY3QudXNlU3RhdGU8TWFwPG51bWJlciwgW1BSQzAwMi5JQmFzZUNvbmZpZywgUFJDMDAyLklDb25maWdGaWVsZFtdXT4+KG5ldyBNYXA8bnVtYmVyLCBbUFJDMDAyLklCYXNlQ29uZmlnLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW11dPigpKTtcclxuICAgIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuXHJcbiAgICBjb25zdCBbcmVzZXQsIHNldFJlc2V0XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbY29udCwgc2V0Q29udF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghcHJvcHMuc2hvdylcclxuICAgICAgICAgICAgQ2FuY2VsKCk7XHJcbiAgICB9LCBbcHJvcHMuc2hvd10pO1xyXG5cclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIENhbmNlbCgpIHtcclxuICAgICAgICBzZXRTdGVwKCdNZXRlcicpO1xyXG4gICAgICAgIHNldE1ldGVyKHVuZGVmaW5lZClcclxuICAgICAgICBzZXRCYXNlQ29uZmlnKG5ldyBNYXA8bnVtYmVyLCBbUFJDMDAyLklCYXNlQ29uZmlnLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW11dPigpKTtcclxuICAgICAgICBzZXRFcnJvck1zZyhbXSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBOZXh0U3RlcCgpIHtcclxuICAgICAgICBpZighc3RlcENvbXBsZXRlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChzdGVwID09ICdNZXRlcicpIHtcclxuICAgICAgICAgICAgc2V0U3RlcCgnQmFzZUNvbmZpZycpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBzZXRDb250KHg9PiB4KzEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGVwID09ICdGaWxlIExvYWQnKSB7XHJcbiAgICAgICAgICAgIHNldENvbnQoeCA9PiB4ICsgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0Jhc2VDb25maWcnKSB7XHJcbiAgICAgICAgICAgIHNldFNob3dDb21wbGV0ZSh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGVwID09ICdFZGl0IEZpZWxkJykge1xyXG4gICAgICAgICAgICBzZXRDb250KHggPT4geCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBQcmV2U3RlcCgpIHtcclxuICAgICAgICBpZiAoc3RlcCA9PSAnTWV0ZXInKVxyXG4gICAgICAgICAgICBzZXRTaG93V2FybmluZyh0cnVlKTtcclxuICAgICAgICBpZiAoc3RlcCA9PSAnQmFzZUNvbmZpZycpXHJcbiAgICAgICAgICAgIHNldFJlc2V0KHg9PiB4KzEpXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJyB8fCBzdGVwID09ICdGaWxlIExvYWQnKSB7XHJcbiAgICAgICAgICAgIHNldFJlc2V0KHggPT4geCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGVwID09ICdFZGl0IEZpZWxkJylcclxuICAgICAgICAgICAgc2V0UmVzZXQoeCA9PiB4ICsgMSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICBpZiAoc3RlcCA9PSAnTWV0ZXInKVxyXG4gICAgICAgICAgICByZXR1cm4gJ1NlbGVjdCBhIE1ldGVyJ1xyXG4gICAgICAgIGlmIChzdGVwID09ICdCYXNlQ29uZmlnJylcclxuICAgICAgICAgICAgcmV0dXJuIFwiU2V0dXAgQmFzZSBDb25maWd1cmF0aW9uXCJcclxuICAgICAgICBpZiAoc3RlcCA9PSAnRmlsZSBMb2FkJylcclxuICAgICAgICAgICAgcmV0dXJuICdMb2FkIENvbmZpZ3VyYXRpb24gRmlsZSdcclxuICAgICAgICBpZiAoc3RlcCA9PSAnTmV3IEJhc2VDb25maWcnKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0FkZCBOZXcgQmFzZSBDb25maWd1cmF0aW9uJ1xyXG4gICAgICAgIGlmIChzdGVwID09ICdFZGl0IEZpZWxkJylcclxuICAgICAgICAgICAgcmV0dXJuIFwiRWRpdCBDb25maWd1cmF0aW9uIEZpZWxkXCJcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIFN1Ym1pdCgpIHtcclxuICAgICAgICAvLyBTdGFydCBCeSBDcmVhdGluZyB0aGUgbWV0ZXJcclxuICAgICAgICBsZXQgY29uZmlnRmllbGRzID0gW107XHJcblxyXG4gICAgICAgIFsuLi5iYXNlQ29uZmlnLmtleXMoKV0uZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBiYXNlQ29uZmlnLmdldChrZXkpWzFdLmZvckVhY2goZmxkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ0ZpZWxkcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBCYXNlQ29uZmlnSWQ6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBDb21wYXJpc29uOiBmbGQuQ29tcGFyaXNvbixcclxuICAgICAgICAgICAgICAgICAgICBGaWVsZFR5cGU6IGZsZC5GaWVsZFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogZmxkLk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsdWU6IGZsZC5WYWx1ZSB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvQWRkYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBNZXRlcjogeyBNZXRlcklkOiBtZXRlci5JRCwgQWN0aXZlOiBmYWxzZSwgUmV2aWV3ZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgQmFzZUNvbmZpZ3VyYXRpb246IFsuLi5iYXNlQ29uZmlnLnZhbHVlcygpXS5tYXAoaXRlbSA9PiB7IHJldHVybiB7IE5hbWU6IGl0ZW1bMF0uTmFtZSwgUGF0dGVybjogaXRlbVswXS5QYXR0ZXJuLCBJRDogaXRlbVswXS5JRCB9OyB9KSxcclxuICAgICAgICAgICAgICAgICAgICBDb25maWd1cmF0aW9uRmllbGRzOiBjb25maWdGaWVsZHNcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkudGhlbigoZCkgPT4gaGlzdG9yeS5nbygwKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvcHMuc2V0U2hvdyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc3RlcENvbXBsZXRlID0gKHN0ZXAgPT0gJ01ldGVyJyA/IG1ldGVyICE9IG51bGwgOiBlcnJvck1zZy5sZW5ndGggPT0gMClcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsIFNob3c9e3Byb3BzLnNob3d9IENhbGxCYWNrPXsoY29uZmlybSwgaXNCdXR0b24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKVxyXG4gICAgICAgICAgICAgICAgICAgIE5leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dXYXJuaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maXJtICYmIGlzQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZTdGVwKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBUaXRsZT17Z2V0VGl0bGUoKX0gQ29uZmlybVRleHQ9eyhzdGVwID09ICdNZXRlcicgfHwgc3RlcCA9PSAnRmlsZSBMb2FkJyA/ICdOZXh0JyA6ICdTYXZlJyl9XHJcbiAgICAgICAgICAgICAgICBDb25maXJtVG9vbFRpcD17J1dpemFyZENvbmZpcm0nfSBTaXplPXsnbGcnfSBPbkhvdmVyPXtzZXRIb3Zlcn1cclxuICAgICAgICAgICAgICAgIENvbmZpcm1CdG5DbGFzcz17J2J0bi1zdWNjZXNzJyArIChzdGVwQ29tcGxldGUgPyAnJyA6ICcgZGlzYWJsZWQnKX1cclxuICAgICAgICAgICAgICAgIENhbmNlbFRleHQ9eyhzdGVwID09ICdNZXRlcicgPyAnQ2xvc2UnIDogJ0JhY2snKX1cclxuICAgICAgICAgICAgICAgIFNob3dYPXt0cnVlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3RlcCA9PSAnTWV0ZXInID8gPFNlbGVjdE1ldGVyIHNldE1ldGVyPXsobWV0ZXIpID0+IHsgc2V0TWV0ZXIobWV0ZXIpOyB9fSBzZWxlY3RlZE1ldGVyPXttZXRlcn0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT0gJ0Jhc2VDb25maWcnIHx8IHN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJyB8fCBzdGVwID09ICdGaWxlIExvYWQnIHx8IHN0ZXAgPT0gJ0VkaXQgRmllbGQnID9cclxuICAgICAgICAgICAgICAgICAgICA8QmFzZUNvbmZpZ1dpbmRvdyBzZXRMb2FkaW5nPXtzZXRTaG93TG9hZGluZ30gQmFzZUNvbmZpZ3M9e2Jhc2VDb25maWd9IHNldEJhc2VDb25maWc9e3NldEJhc2VDb25maWd9IHNldEVycm9yPXtzZXRFcnJvck1zZ30gc2V0U3RlcD17c2V0U3RlcH0gc3RlcD17c3RlcH0gY29udD17Y29udH0gcmVzZXQ9e3Jlc2V0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxXYXJuaW5nIFRpdGxlPXsnRXhpdCBXaXphcmQnfSBDYWxsQmFjaz17KGNvbmZpcm0pID0+IHsgc2V0U2hvd1dhcm5pbmcoZmFsc2UpOyBpZiAoY29uZmlybSkgcHJvcHMuc2V0U2hvdyhmYWxzZSk7IH19IFNob3c9e3Nob3dXYXJuaW5nfVxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZT17J1RoaXMgV2lsbCBjbG9zZSB0aGUgV2l6YXJkIGFuZCBhbGwgcHJvZ3Jlc3Mgd2lsbCBiZSBsb3N0Lid9IC8+XHJcbiAgICAgICAgICAgIDxUb29sVGlwIFNob3c9e2hvdmVyID09ICdDb25maXJtJyAmJiAhc3RlcENvbXBsZXRlfSBQb3NpdGlvbj17J3RvcCd9IFRhcmdldD17J1dpemFyZENvbmZpcm0nfSBaaW5kZXg9ezk5OTl9PlxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT0gJ01ldGVyJyA/IDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5BIE1ldGVyIG5lZWRzIHRvIGJlIHNlbGVjdGVkLjwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0ZXAgIT0gJ01ldGVyJyA/IGVycm9yTXNnLm1hcCgoaXRlbSxpbmRleCkgPT4gPHAga2V5PXtpbmRleH0+PGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+IHtpdGVtfTwvcD4pIDogbnVsbH1cclxuICAgICAgICAgICAgPC9Ub29sVGlwPlxyXG4gICAgICAgICAgICA8V2FybmluZyBUaXRsZT17J1NhdmUgUFJDMDAyIENvbmZpZ3VyYXRpb24nfSBDYWxsQmFjaz17KGNvbmZpcm0pID0+IHsgc2V0U2hvd0NvbXBsZXRlKGZhbHNlKTsgaWYgKGNvbmZpcm0pIFN1Ym1pdCgpOyB9fSBTaG93PXtzaG93Q29tcGxldGV9XHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlPXsnVGhpcyB3aWxsIGFkZCB0aGUgc2VsZWN0ZWQgbWV0ZXIgdG8gUFJDMDAyIG1vbml0b3JpbmcgYW5kIHNhdmUgdGhlIGJhc2UgY29uZmlndXJhdGlvbi4gTm90ZSB0aGF0IHRoZSBzdGF0dXMgb2YgdGhpcyBtZXRlciB3aWxsIG5vdCB1cGRhdGUgdW50aWwgdGhlIGZpcnN0IGNvbmZpZ3VyYXRpb24gRmlsZSBpcyBkb3dubG9hZGVkLid9IC8+XHJcbiAgICAgICAgICAgIDxMb2FkaW5nU2NyZWVuIFNob3c9e3Nob3dMb2FkaW5nfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3TWV0ZXJXaXp6YXJkO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE5ld01ldGVyV2l6emFyZC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTcvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1pTUQgIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IFNlYXJjaCwgU2VhcmNoQmFyIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgc2V0TWV0ZXI6IChtZXRlcjogUFJDMDAyLklNZXRlcikgPT4gdm9pZCwgc2VsZWN0ZWRNZXRlcjogUFJDMDAyLklNZXRlciB9XHJcblxyXG5jb25zdCBzdGFuZGFyZFNlYXJjaDogU2VhcmNoLklGaWVsZDxNaU1ELk1ldGVyPltdID0gW1xyXG4gICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdOYW1lJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnQXNzZXRLZXknLCBsYWJlbDogJ0Fzc2V0IEtleScsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ01ha2UnLCBsYWJlbDogJ01ha2UnLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgU2VsZWN0TWV0ZXIgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtNZXRlckxpc3QsIHNldE1ldGVyTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSU1ldGVyPj4oW10pO1xyXG4gICAgY29uc3QgW21ldGVyRmlsdGVyLCBzZXRNZXRlckZpbHRlcl0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxTZWFyY2guSUZpbHRlcjxQUkMwMDIuSU1ldGVyPj4+KFtdKTtcclxuICAgIGNvbnN0IFttZXRlclNvcnQsIHNldE1ldGVyU29ydF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBQUkMwMDIuSU1ldGVyPihcIk5hbWVcIik7XHJcbiAgICBjb25zdCBbbWV0ZXJBc2MsIHNldE1ldGVyQXNjXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgXHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1ldGVyTGlzdCA9IGdldE1ldGVyTGlzdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVNZXRlckxpc3QgIT0gbnVsbCAmJiBoYW5kbGVNZXRlckxpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlTWV0ZXJMaXN0LmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLCBtZXRlckFzYywgbWV0ZXJTb3J0LCBtZXRlckZpbHRlcl0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1ldGVyTGlzdCgpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklNZXRlcj4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VNZXRlci9TZWxlY3RhYmxlTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBTZWFyY2hlczogbWV0ZXJGaWx0ZXIsIE9yZGVyQnk6IG1ldGVyU29ydCwgQXNjZW5kaW5nOiBtZXRlckFzYyB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklNZXRlcj4pID0+IHtcclxuICAgICAgICAgICAgc2V0TWV0ZXJMaXN0KGRhdGEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vTGlzdCBvZiBtZXRlcnMgdG8gU2VsZWN0IEZyb21cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEJhcjxQUkMwMDIuSU1ldGVyPiBTZXRGaWx0ZXI9e3NldE1ldGVyRmlsdGVyfSBDb2xsdW1uTGlzdD17c3RhbmRhcmRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xsdW1uPXt7IGtleTogJ05hbWUnLCBsYWJlbDogJ05hbWUnLCB0eXBlOiAnc3RyaW5nJyB9fVxyXG4gICAgICAgICAgICAgICAgICBEaXJlY3Rpb249eydsZWZ0J30gTGFiZWw9eydTZWFyY2gnfSBXaWR0aD17JzEwMCUnfVxyXG4gICAgICAgICAgICAgICAgICBHZXRFbnVtPXsoc2V0T3B0aW9ucywgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IH1cclxuICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgIDwvU2VhcmNoQmFyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFBSQzAwMi5JTWV0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdNZXRlcicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWFrZScsIGxhYmVsOiAnTWFrZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17TWV0ZXJMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17bWV0ZXJTb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17bWV0ZXJBc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gbWV0ZXJTb3J0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJBc2MoIW1ldGVyQXNjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJTb3J0KGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7IHByb3BzLnNldE1ldGVyKGQucm93KTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IDU1MCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBpdGVtLklEID09PSAocHJvcHMuc2VsZWN0ZWRNZXRlciA9PSB1bmRlZmluZWQgPyAtMSA6IHByb3BzLnNlbGVjdGVkTWV0ZXIuSUQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RNZXRlcjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=