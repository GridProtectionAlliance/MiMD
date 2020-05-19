(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ConfigurationByMeter"],{

/***/ "./TSX/MiMD/CommonComponents/FormCheckBox.tsx":
/*!****************************************************!*\
  !*** ./TSX/MiMD/CommonComponents/FormCheckBox.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  FormCheckBox.tsx - Gbtc
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


var FormCheckBox = /** @class */ (function (_super) {
    __extends(FormCheckBox, _super);
    function FormCheckBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormCheckBox.prototype.render = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-check" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) {
                    var record = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.clone(_this.props.Record);
                    record[_this.props.Field] = evt.target.checked;
                    _this.props.Setter(record);
                }, value: this.props.Record[this.props.Field] ? 'on' : 'off', checked: this.props.Record[this.props.Field] ? true : false, disabled: this.props.Disabled == null ? false : this.props.Disabled }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-check-label" }, this.props.Label == null ? this.props.Field : this.props.Label));
    };
    return FormCheckBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (FormCheckBox);


/***/ }),

/***/ "./TSX/MiMD/CommonComponents/FormSelect.tsx":
/*!**************************************************!*\
  !*** ./TSX/MiMD/CommonComponents/FormSelect.tsx ***!
  \**************************************************/
/*! exports provided: default, FormSelectValueList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSelectValueList", function() { return FormSelectValueList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  FormSelect.tsx - Gbtc
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
//  01/28/2020 - Billy Ernest
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


var FormSelect = /** @class */ (function (_super) {
    __extends(FormSelect, _super);
    function FormSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormSelect.prototype.render = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, this.props.Label == null ? this.props.Field : this.props.Label),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", onChange: function (evt) {
                    var record = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](_this.props.Record);
                    if (evt.target.value != "")
                        record[_this.props.Field] = evt.target.value;
                    else
                        record[_this.props.Field] = null;
                    _this.props.Setter(record);
                }, value: this.props.Record[this.props.Field] == null ? '' : this.props.Record[this.props.Field].toString(), disabled: this.props.Disabled == null ? false : this.props.Disabled },
                (this.props.EmptyOption ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '' }) : null),
                this.props.Options.map(function (a, i) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: i, value: a.Value }, a.Label); })));
    };
    return FormSelect;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (FormSelect);
function FormSelectValueList(props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), options = _a[0], setOptions = _a[1];
    function getOptions() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/ValueList/" + props.ValueListGroup,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: false,
            async: true
        });
        handle.done(function (valueListGroups) { return setOptions(valueListGroups); }).fail(function (msg) { return console.log(msg.responseJSON); });
        return handle;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-group" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, props.Label == null ? props.Field : props.Label),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", onChange: function (evt) {
                var record = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](props.Record);
                if (evt.target.value != "")
                    record[props.Field] = evt.target.value;
                else
                    record[props.Field] = null;
                props.Setter(record);
            }, value: props.Record[props.Field] == null ? '' : props.Record[props.Field].toString(), disabled: props.Disabled == null ? false : props.Disabled },
            (props.EmptyOption ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '' }) : null),
            options.map(function (a, i) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: i, value: a.Value }, a.Text); })));
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
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CommonComponents_FormSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommonComponents/FormSelect */ "./TSX/MiMD/CommonComponents/FormSelect.tsx");
/* harmony import */ var _CommonComponents_FormCheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CommonComponents/FormCheckBox */ "./TSX/MiMD/CommonComponents/FormCheckBox.tsx");
/* harmony import */ var _ConfigurationFiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConfigurationFiles */ "./TSX/MiMD/Configuration/ConfigurationFiles.tsx");
/* harmony import */ var _ConfigurationFileChanges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConfigurationFileChanges */ "./TSX/MiMD/Configuration/ConfigurationFileChanges.tsx");
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
            url: homePath + "api/MiMD/Meter/SearchableList",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(filters),
            cache: false,
            async: true
        });
        handle.done(function (data) {
            var ordered = lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"](data, [sortField], [(ascending ? "asc" : "desc")]);
            setData(ordered);
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
                    OpenXDAParentTable: "Meter",
                    Type: "string"
                },
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "Model",
                    ID: -1,
                    IsSecure: false,
                    OpenXDAParentTable: "Meter",
                    Type: "string"
                },
                {
                    ExternalDB: "",
                    ExternalDBTable: "",
                    ExternalDBTableKey: "",
                    FieldName: "DateLastChanged",
                    ID: -1,
                    IsSecure: false,
                    OpenXDAParentTable: "Meter",
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { height: 'calc( 100% - 136px)', padding: 0, maxHeight: 'calc( 100% - 136px)', overflowY: 'scroll' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConfigurationFiles__WEBPACK_IMPORTED_MODULE_6__["default"], { MeterID: props.MeterID, FileName: props.FileName }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ConfigurationFileChanges__WEBPACK_IMPORTED_MODULE_7__["default"], { MeterID: props.MeterID, FileName: props.FileName }))),
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
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '>=' }, ">="))),
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
            url: homePath + "api/MiMD/ConfigurationFiles/" + props.MeterID + "/" + props.FileName,
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db21tb25Db21wb25lbnRzL0Zvcm1DaGVja0JveC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db21tb25Db21wb25lbnRzL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db25maWd1cmF0aW9uL0NvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db25maWd1cmF0aW9uL0NvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29uZmlndXJhdGlvbi9Db25maWd1cmF0aW9uRmlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLDJCQUEyQjtBQUMzQixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7OztBQUV6RTtBQUNSO0FBRXZCO0lBQTZDLGdDQUF5SDtJQUF0Szs7SUFjQSxDQUFDO0lBYkcsNkJBQU0sR0FBTjtRQUFBLGlCQVlDO1FBWEcsT0FBTyw2REFBSyxTQUFTLEVBQUMsWUFBWTtZQUU5QiwrREFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVB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RUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFNO3dCQUNySCx1RUFBSyxFQUFFLENBQUMsT0FBTyxDQUFNLENBRXBCO2dCQUxMLENBS0ssQ0FBQyxDQUNOLENBRUosQ0FDTixDQUNKLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFYyxpRkFBa0IsRUFBQyIsImZpbGUiOiJDb25maWd1cmF0aW9uQnlNZXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBGb3JtQ2hlY2tCb3gudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAxLzIyLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQ2hlY2tCb3g8VD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8eyBSZWNvcmQ6IFQsIEZpZWxkOiBrZXlvZiAoVCksIFNldHRlcjogKHJlY29yZDogVCkgPT4gdm9pZCwgTGFiZWw/OiBzdHJpbmcsIERpc2FibGVkPzogYm9vbGVhbiB9LCB7fSwge30+e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9e3sgekluZGV4OiAxIH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVjb3JkOiBUID0gXy5jbG9uZSh0aGlzLnByb3BzLlJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICByZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0gPSBldnQudGFyZ2V0LmNoZWNrZWQgYXMgYW55O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuU2V0dGVyKHJlY29yZCk7XHJcbiAgICAgICAgICAgIH19IHZhbHVlPXt0aGlzLnByb3BzLlJlY29yZFt0aGlzLnByb3BzLkZpZWxkXSA/ICdvbicgOiAnb2ZmJ30gY2hlY2tlZD17dGhpcy5wcm9wcy5SZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0gPyB0cnVlIDogZmFsc2V9IGRpc2FibGVkPXt0aGlzLnByb3BzLkRpc2FibGVkID09IG51bGwgPyBmYWxzZSA6IHRoaXMucHJvcHMuRGlzYWJsZWR9IC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgPnt0aGlzLnByb3BzLkxhYmVsID09IG51bGwgPyB0aGlzLnByb3BzLkZpZWxkIDogdGhpcy5wcm9wcy5MYWJlbH08L2xhYmVsPlxyXG5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEZvcm1TZWxlY3QudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAxLzI4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uL2dsb2JhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtU2VsZWN0PFQ+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHsgUmVjb3JkOiBULCBGaWVsZDoga2V5b2YgKFQpLCBPcHRpb25zOiBBcnJheTx7VmFsdWU6IHN0cmluZywgTGFiZWw6IHN0cmluZyB9PiwgU2V0dGVyOiAocmVjb3JkOiBUKSA9PiB2b2lkLCBMYWJlbD86IHN0cmluZywgRGlzYWJsZWQ/OiBib29sZWFuLCBFbXB0eU9wdGlvbj86IGJvb2xlYW4gfSwge30sIHt9PntcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy5MYWJlbCA9PSBudWxsID8gdGhpcy5wcm9wcy5GaWVsZCA6IHRoaXMucHJvcHMuTGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlY29yZDogVCA9IF8uY2xvbmUodGhpcy5wcm9wcy5SZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQudmFsdWUgIT0gXCJcIilcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0gPSBldnQudGFyZ2V0LnZhbHVlIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuU2V0dGVyKHJlY29yZCk7XHJcbiAgICAgICAgICAgIH19IHZhbHVlPXt0aGlzLnByb3BzLlJlY29yZFt0aGlzLnByb3BzLkZpZWxkXSA9PSBudWxsID8gJycgOiB0aGlzLnByb3BzLlJlY29yZFt0aGlzLnByb3BzLkZpZWxkXS50b1N0cmluZygpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5EaXNhYmxlZCA9PSBudWxsID8gZmFsc2UgOiB0aGlzLnByb3BzLkRpc2FibGVkfT5cclxuICAgICAgICAgICAgICAgIHsodGhpcy5wcm9wcy5FbXB0eU9wdGlvbiA/IDxvcHRpb24gdmFsdWU9Jyc+PC9vcHRpb24+IDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5PcHRpb25zLm1hcCgoYSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXthLlZhbHVlfT57YS5MYWJlbH08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb3JtU2VsZWN0VmFsdWVMaXN0PFQ+KHByb3BzOnsgUmVjb3JkOiBULCBGaWVsZDoga2V5b2YgKFQpLFZhbHVlTGlzdEdyb3VwOiBzdHJpbmcsIFNldHRlcjogKHJlY29yZDogVCkgPT4gdm9pZCwgTGFiZWw/OiBzdHJpbmcsIERpc2FibGVkPzogYm9vbGVhbiwgRW1wdHlPcHRpb24/OiBib29sZWFuIH0pe1xyXG4gICAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5WYWx1ZUxpc3RJdGVtPj4oW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1ZhbHVlTGlzdC8ke3Byb3BzLlZhbHVlTGlzdEdyb3VwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaGFuZGxlLmRvbmUodmFsdWVMaXN0R3JvdXBzID0+IHNldE9wdGlvbnModmFsdWVMaXN0R3JvdXBzKSkuZmFpbCgobXNnKSA9PiBjb25zb2xlLmxvZyhtc2cucmVzcG9uc2VKU09OKSk7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+e3Byb3BzLkxhYmVsID09IG51bGwgPyBwcm9wcy5GaWVsZCA6IHByb3BzLkxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByZWNvcmQ6IFQgPSBfLmNsb25lKHByb3BzLlJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC52YWx1ZSAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZFtwcm9wcy5GaWVsZF0gPSBldnQudGFyZ2V0LnZhbHVlIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRbcHJvcHMuRmllbGRdID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjb3JkKTtcclxuICAgICAgICAgICAgfX0gdmFsdWU9e3Byb3BzLlJlY29yZFtwcm9wcy5GaWVsZF0gPT0gbnVsbCA/ICcnIDogcHJvcHMuUmVjb3JkW3Byb3BzLkZpZWxkXS50b1N0cmluZygpfSBkaXNhYmxlZD17cHJvcHMuRGlzYWJsZWQgPT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuRGlzYWJsZWR9PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5FbXB0eU9wdGlvbiA/IDxvcHRpb24gdmFsdWU9Jyc+PC9vcHRpb24+IDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKGEsIGkpID0+IDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17YS5WYWx1ZX0+e2EuVGV4dH08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj47XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRhYmxlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE4LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8wMi8yMDE4IC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBBbmdsZUljb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgYXNjZW5kaW5nOiBib29sZWFuIH0+ID0gKHByb3BzKSA9PiA8c3BhbiBzdHlsZT17eyB3aWR0aDogMTAsIGhlaWdodDogMTAsIG1hcmdpbjogMyB9fSBjbGFzc05hbWU9e1wiZmEgZmEtYW5nbGUtXCIgKyAocHJvcHMuYXNjZW5kaW5nID8gJ3VwJyA6ICdkb3duJyl9Pjwvc3Bhbj5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVQcm9wczxUPiB7XHJcbiAgICBjb2xzOiBBcnJheTx7IGtleToga2V5b2YoVCkgfCBudWxsLCBsYWJlbDogc3RyaW5nLCBoZWFkZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMsIHJvd1N0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcywgY29udGVudD8oaXRlbTogVCwga2V5OiBrZXlvZihUKSwgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMpOiBSZWFjdC5SZWFjdE5vZGUgfT4sXHJcbiAgICBkYXRhOiBBcnJheTxUPixcclxuICAgIG9uQ2xpY2s6IChkYXRhOiB7IGNvbDoga2V5b2YgKFQpLCByb3c6IFQsIGRhdGE6IFRba2V5b2YoVCldIH0sIGV2ZW50OiBhbnkpID0+IHZvaWQsXHJcbiAgICBzb3J0RmllbGQ6IHN0cmluZyxcclxuICAgIGFzY2VuZGluZzogYm9vbGVhbixcclxuICAgIG9uU29ydChkYXRhOiB7IGNvbDoga2V5b2YgKFQpLCBhc2VuZGluZzogYm9vbGVhbn0pOiB2b2lkLFxyXG4gICAgdGFibGVDbGFzcz86IHN0cmluZyxcclxuICAgIHRhYmxlU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxyXG4gICAgdGhlYWRTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMsXHJcbiAgICB0aGVhZENsYXNzPzogc3RyaW5nLFxyXG4gICAgdGJvZHlTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMsXHJcbiAgICB0Ym9keUNsYXNzPzogc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWQ/KGRhdGE6IFQpOiBib29sZWFuLFxyXG4gICAgcm93U3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZTxUPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUYWJsZVByb3BzPFQ+LCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciByb3dDb21wb25lbnRzID0gdGhpcy5nZW5lcmF0ZVJvd3MoKTtcclxuICAgICAgICB2YXIgaGVhZGVyQ29tcG9uZW50cyA9IHRoaXMuZ2VuZXJhdGVIZWFkZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17KHRoaXMucHJvcHMudGFibGVDbGFzcyAhPSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgOiAnJyl9IHN0eWxlPXt0aGlzLnByb3BzLnRhYmxlU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkIHN0eWxlPXt0aGlzLnByb3BzLnRoZWFkU3R5bGV9PntoZWFkZXJDb21wb25lbnRzfTwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHkgc3R5bGU9e3RoaXMucHJvcHMudGJvZHlTdHlsZX0+e3Jvd0NvbXBvbmVudHN9PC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlSGVhZGVycygpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2xzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgdmFyIGNlbGxzID0gdGhpcy5wcm9wcy5jb2xzLm1hcCgoY29sRGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHN0eWxlO1xyXG4gICAgICAgICAgICBpZiAoY29sRGF0YS5oZWFkZXJTdHlsZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gY29sRGF0YS5oZWFkZXJTdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0eWxlLmN1cnNvciA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPHRoIGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlU29ydCh7IGNvbDogY29sRGF0YS5rZXksIGFzY2VuZGluZzogdGhpcy5wcm9wcy5hc2NlbmRpbmcgfSwgZSl9Pntjb2xEYXRhLmxhYmVsfXsodGhpcy5wcm9wcy5zb3J0RmllbGQgPT0gY29sRGF0YS5rZXkgPyA8QW5nbGVJY29uIGFzY2VuZGluZz17dGhpcy5wcm9wcy5hc2NlbmRpbmd9IC8+IDogbnVsbCl9PC90aD5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDx0cj57Y2VsbHN9PC90cj47XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVSb3dzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGEubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNlbGxzID0gdGhpcy5wcm9wcy5jb2xzLm1hcChjb2xEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IF8uY2xvbmUoY29sRGF0YS5yb3dTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPHRkXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleC50b1N0cmluZygpICsgaXRlbVtjb2xEYXRhLmtleV0gKyBjb2xEYXRhLmtleX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsIHsgY29sOiBjb2xEYXRhLmtleSwgcm93OiBpdGVtLCBkYXRhOiBpdGVtW2NvbERhdGEua2V5XSB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sRGF0YS5jb250ZW50ICE9IHVuZGVmaW5lZCA/IGNvbERhdGEuY29udGVudChpdGVtLCBjb2xEYXRhLmtleSwgc3R5bGUpIDogaXRlbVtjb2xEYXRhLmtleV19XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdHlsZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJvd1N0eWxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBfLmNsb25lKHRoaXMucHJvcHMucm93U3R5bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkKGl0ZW0pKVxyXG4gICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPHRyIHN0eWxlPXtzdHlsZX0ga2V5PXtpbmRleC50b1N0cmluZygpfT57Y2VsbHN9PC90cj47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZGF0YTogeyBjb2w6IGtleW9mKFQpLCByb3c6IFQsIGRhdGE6IGFueSB9LCBldmVudCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhkYXRhLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU29ydChkYXRhLCBldmVudCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Tb3J0KGRhdGEpO1xyXG4gICAgfVxyXG59O1xyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIENvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDA4LzIyLzIwMTkgLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uL2dsb2JhbCc7XG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0JztcclxuaW1wb3J0IEZvcm1DaGVja0JveCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm1DaGVja0JveCc7XHJcbmltcG9ydCBDb25maWd1cmF0aW9uRmlsZXMgZnJvbSAnLi9Db25maWd1cmF0aW9uRmlsZXMnO1xyXG5pbXBvcnQgQ29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzIGZyb20gJy4vQ29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzJztcclxuXG50eXBlIEZpZWxkTmFtZSA9ICdTdGF0aW9uJyB8ICdNb2RlbCcgfCAnRGF0ZUxhc3RDaGFuZ2UnIHwgJ1RTQyc7XG5cbmludGVyZmFjZSBNZXRlciB7XG4gICAgTWV0ZXJJRDogbnVtYmVyLFxuICAgIFN0YXRpb246IHN0cmluZyxcbiAgICBNb2RlbDogc3RyaW5nLCBcbiAgICBUU0M6IHN0cmluZyxcbiAgICBEYXRlTGFzdENoYW5nZWQ6IHN0cmluZ1xufVxuaW50ZXJmYWNlIEZpbHRlciB7XG4gICAgRmllbGROYW1lOiBGaWVsZE5hbWUsXG4gICAgU2VhcmNoVGV4dDogc3RyaW5nLFxuICAgIE9wZXJhdG9yOiAnPScgfCAnPD4nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PScgfCAnTElLRScgfCAnTk9UIExJS0UnIHwgJ0lOJyB8ICdOT1QgSU4nLFxuICAgIFR5cGU6IHN0cmluZ1xufVxuXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xuXG5jb25zdCBDb25maWd1cmF0aW9uQnlNZXRlcjogTWlNRC5CeUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW2ZpbHRlcmFibGVMaXN0LCBzZXRGaWx0ZXJhYmxlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4+KFtdKTtcbiAgICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxGaWx0ZXI+PihbXSk7XG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IFJlYWN0LnVzZVN0YXRlPEZpbHRlcj4oeyBGaWVsZE5hbWU6ICdTdGF0aW9uJywgU2VhcmNoVGV4dDogJycsIE9wZXJhdG9yOiAnTElLRScsIFR5cGU6ICdzdHJpbmcnfSk7XG5cbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNZXRlcj4+KFtdKTtcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignRGF0ZUxhc3RDaGFuZ2VkJyk7XG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0TWV0ZXJzKCk7XG4gICAgICAgIGxldCBoYW5kbGUyID0gZ2V0QWRkaXRpb25hbEZpZWxkcygpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSBudWxsKSBoYW5kbGUxLmFib3J0KCk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlMi5hYm9ydCAhPSBudWxsKSBoYW5kbGUyLmFib3J0KCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBnZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1ldGVyPj4ge1xuICAgICAgICBsZXQgaGFuZGxlID0gICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvTWV0ZXIvU2VhcmNoYWJsZUxpc3RgLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGZpbHRlcnMpLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgYXN5bmM6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PE1ldGVyPikgPT4ge1xuICAgICAgICAgICAgdmFyIG9yZGVyZWQgPSBfLm9yZGVyQnkoZGF0YSwgW3NvcnRGaWVsZF0sIFsoYXNjZW5kaW5nID8gXCJhc2NcIiA6IFwiZGVzY1wiKV0pO1xyXG4gICAgICAgICAgICBzZXREYXRhKG9yZGVyZWQpXHJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBZGRpdGlvbmFsRmllbGRzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4+IHtcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9BZGRpdGlvbmFsRmllbGQvUGFyZW50VGFibGUvTWV0ZXJgLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgYXN5bmM6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PE1pTUQuQWRkaXRpb25hbEZpZWxkPikgPT4ge1xuICAgICAgICAgICAgbGV0IG90aGVyQ29sdW1ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGVLZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGROYW1lOiBcIlN0YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBJRDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNTZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9wZW5YREFQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEV4dGVybmFsREJUYWJsZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGVLZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGROYW1lOiBcIk1vZGVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgSUQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgIElzU2VjdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBPcGVuWERBUGFyZW50VGFibGU6IFwiTWV0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBUeXBlOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBFeHRlcm5hbERCVGFibGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgRXh0ZXJuYWxEQlRhYmxlS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkTmFtZTogXCJEYXRlTGFzdENoYW5nZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBJRDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgSXNTZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIE9wZW5YREFQYXJlbnRUYWJsZTogXCJNZXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGU6IFwiZGF0ZXRpbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIHZhciBvcmRlcmVkID0gXy5vcmRlckJ5KG90aGVyQ29sdW1ucy5jb25jYXQoZGF0YSksIFsnRmllbGROYW1lJ10sIFtcImFzY1wiXSk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlcmFibGVMaXN0KG9yZGVyZWQpXHJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoaXRlbSwgZXZ0KSB7XG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdpbmRleC5jc2h0bWwnLCBzZWFyY2g6ICc/bmFtZT1Db25maWd1cmF0aW9uJk1ldGVySUQ9JyArIGl0ZW0ucm93Lk1ldGVySUQsIHN0YXRlOiB7fSB9KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUZpbHRlcihmOiBGaWx0ZXIpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gZmlsdGVycy5maW5kSW5kZXgoZnMgPT4gZnMgPT0gZik7XG4gICAgICAgIGxldCBmaWx0cyA9IGZpbHRlcnM7XG4gICAgICAgIGZpbHRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGF3YWl0IHNldEZpbHRlcnMoZmlsdHMpO1xuICAgICAgICBzZXRIb3ZlcihmYWxzZSk7XG4gICAgICAgIGdldE1ldGVycygpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZEZpbHRlcigpIHtcbiAgICAgICAgbGV0IG9sZEZpbHRlcnMgPSBmaWx0ZXJzO1xuICAgICAgICBvbGRGaWx0ZXJzLnB1c2goZmlsdGVyKTtcbiAgICAgICAgYXdhaXQgc2V0RmlsdGVycyhvbGRGaWx0ZXJzKTtcbiAgICAgICAgc2V0RmlsdGVyKHsgRmllbGROYW1lOiAnU3RhdGlvbicsIFNlYXJjaFRleHQ6ICcnLCBPcGVyYXRvcjogJ0xJS0UnLCBUeXBlOiAnc3RyaW5nJyB9KTtcbiAgICAgICAgZ2V0TWV0ZXJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTUlJywgcGFkZGluZ1JpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD0nI25ld0ZpbHRlcicgb25DbGljaz17KGV2dCkgPT4gZXZ0LnByZXZlbnREZWZhdWx0KCl9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIoZmFsc2UpfT5BZGQgRmlsdGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC8gMywgZGlzcGxheTogaG92ZXIgPyAnYmxvY2snIDogJ25vbmUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgYmFja2dyb3VuZENvbG9yOiAnI2YxZjFmMScsIGJveFNoYWRvdzogJzBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpJywgekluZGV4OiAxIH19IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXIoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGg+Q29sdW1uPC90aD48dGg+T3BlcmF0b3I8L3RoPjx0aD5TZWFyY2ggVGV4dDwvdGg+PHRoPlJlbW92ZTwvdGg+PC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcnMubWFwKChmLCBpKSA9PiA8dHIga2V5PXtpfT48dGQ+e2YuRmllbGROYW1lfTwvdGQ+PHRkPntmLk9wZXJhdG9yfTwvdGQ+PHRkPntmLlNlYXJjaFRleHR9PC90ZD48dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IGRlbGV0ZUZpbHRlcihmKX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9zcGFuPjwvYnV0dG9uPjwvdGQ+PC90cj4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7bWFyZ2luOiAwfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknLCBwYWRkaW5nOjAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnU3RhdGlvbicsIGxhYmVsOiAnU3RhdGlvbicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEwJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1RTQycsIGxhYmVsOiAnVFNDJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTAlJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0RhdGVMYXN0Q2hhbmdlZCcsIGxhYmVsOiAnRGF0ZSBMYXN0IENoYW5nZWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09IG51bGwgfHwgaXRlbVtrZXldID09ICcnKSByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpdGVtW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihkYXRlLCAnZGF5cycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5cyA8IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbJ2JhY2tncm91bmRDb2xvciddID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXlzIDwgNylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAnb3JhbmdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRheXMgPCAzMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAneWVsbG93JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAxNywgcGFkZGluZzogMCB9LCByb3dTdHlsZTogeyB3aWR0aDogMCwgcGFkZGluZzogMCB9IH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JkZXJlZCA9IF8ub3JkZXJCeShkYXRhLCBbZC5jb2xdLCBbKCFhc2NlbmRpbmcgPyBcImFzY1wiIDogXCJkZXNjXCIpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShvcmRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmRlcmVkID0gXy5vcmRlckJ5KGRhdGEsIFtkLmNvbF0sIFtcImFzY1wiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShvcmRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5NZXRlcklEID09IHByb3BzLk1ldGVySUR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKCAxMDAlIC0gMTM2cHgpJywgcGFkZGluZzogMCwgbWF4SGVpZ2h0OiAnY2FsYyggMTAwJSAtIDEzNnB4KScsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb25maWd1cmF0aW9uRmlsZXMgTWV0ZXJJRD17cHJvcHMuTWV0ZXJJRH0gRmlsZU5hbWU9e3Byb3BzLkZpbGVOYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Q29uZmlndXJhdGlvbkZpbGVDaGFuZ2VzIE1ldGVySUQ9e3Byb3BzLk1ldGVySUR9IEZpbGVOYW1lPXtwcm9wcy5GaWxlTmFtZX0gLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIGlkPVwibmV3RmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkFkZCBGaWx0ZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2VsZWN0PEZpbHRlcj4gUmVjb3JkPXtmaWx0ZXJ9IEZpZWxkPSdGaWVsZE5hbWUnIE9wdGlvbnM9e2ZpbHRlcmFibGVMaXN0Lm1hcChmbCA9PiAoeyBWYWx1ZTogZmwuRmllbGROYW1lLCBMYWJlbDogZmwuRmllbGROYW1lIH0pKX0gU2V0dGVyPXsocmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcGVyYXRvciA9IFwiSU5cIiBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbiA9IGZpbHRlcmFibGVMaXN0LmZpbmQoZmwgPT4gZmwuRmllbGROYW1lID09IHJlY29yZC5GaWVsZE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5UeXBlID09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvciA9IFwiTElLRVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uVHlwZSA9PSAnaW50ZWdlcicgfHwgY29sdW1uLlR5cGUgPT0gJ251bWJlcicgfHwgY29sdW1uLlR5cGUgPT0gJ2Jvb2xlYW4nIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBcIj1cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVyKChwcmV2RmlsdGVyKSA9PiAoeyAuLi5wcmV2RmlsdGVyLCBGaWVsZE5hbWU6IHJlY29yZC5GaWVsZE5hbWUsIFNlYXJjaFRleHQ6ICcnLCBPcGVyYXRvcjogb3BlcmF0b3IsIFR5cGU6IGNvbHVtbi5UeXBlIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gTGFiZWw9J0NvbHVtbicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyQ3JlYXRvciBGaWx0ZXI9e2ZpbHRlcn0gQWRkaXRpb25hbEZpZWxkPXtmaWx0ZXJhYmxlTGlzdC5maW5kKGZsID0+IGZsLkZpZWxkTmFtZSA9PSBmaWx0ZXIuRmllbGROYW1lKX0gU2V0dGVyPXsocmVjb3JkKSA9PiBzZXRGaWx0ZXIocmVjb3JkKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXsoKSA9PiBhZGRGaWx0ZXIoKX0gPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgRmlsdGVyQ3JlYXRvciA9IChwcm9wczogeyBBZGRpdGlvbmFsRmllbGQ6IE1pTUQuQWRkaXRpb25hbEZpZWxkLCBGaWx0ZXI6IEZpbHRlciwgU2V0dGVyOiAoZmlsdGVyOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxGaWx0ZXI+KSA9PiB2b2lkIH0pID0+IHtcbiAgICBjb25zdCBbdmFsdWVMaXN0SXRlbXMsIHNldFZhbHVlTGlzdEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1pTUQuVmFsdWVMaXN0SXRlbT4+KFtdKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQgPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgaWYgKChbXCJpbnRlZ2VyXCIsIFwibnVtYmVyXCIsIFwiYm9vbGVhblwiLCBcInN0cmluZ1wiLCBcImRhdGV0aW1lXCJdKS5pbmRleE9mKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlKSA8IDApIHtcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvVmFsdWVMaXN0L0dyb3VwLyR7cHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGV9YCxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaGFuZGxlLmRvbmUoKHZsOiBBcnJheTxNaU1ELlZhbHVlTGlzdEl0ZW0+KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVMaXN0SXRlbXModmwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sIFtwcm9wcy5BZGRpdGlvbmFsRmllbGRdKTtcblxuICAgIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQgPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBlbHNlIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2x1bW4gdHlwZSBpcyBzdHJpbmcuIFdpbGRjYXJkICgqKSBjYW4gYmUgdXNlZCB3aXRoICdMSUtFJyBhbmQgJ05PVCBMSUtFJzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17cHJvcHMuRmlsdGVyLk9wZXJhdG9yfSBvbkNoYW5nZT17KGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWUgYXMgJ0xJS0UnIHwgJ05PVCBMSUtFJyB8ICc9JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBPcGVyYXRvcjogdmFsdWUgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTElLRSc+TElLRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J05PVCBMSUtFJz5OT1QgTElLRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jz0nPj08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtwcm9wcy5GaWx0ZXIuU2VhcmNoVGV4dH0gb25DaGFuZ2U9eyhldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBTZWFyY2hUZXh0OiB2YWx1ZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlID09IFwiaW50ZWdlclwiIHx8IHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlID09IFwibnVtYmVyXCIgfHwgcHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGUgPT0gXCJkYXRldGltZVwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2x1bW4gdHlwZSBpcyB7cHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGV9LjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17cHJvcHMuRmlsdGVyLk9wZXJhdG9yfSBvbkNoYW5nZT17KGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWUgYXMgJz0nIHwgJzw+JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcigocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIE9wZXJhdG9yOiB2YWx1ZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc9Jz49PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPD4nPiE9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPic+e2A+YH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc+PSc+e2A+PWB9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nPCc+e2A8YH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc+PSc+e2A+PWB9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17cHJvcHMuRmlsdGVyLlNlYXJjaFRleHR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZSBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgU2VhcmNoVGV4dDogdmFsdWUgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5BZGRpdGlvbmFsRmllbGQuVHlwZSA9PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gPEZvcm1DaGVja0JveCBSZWNvcmQ9e3Byb3BzLkZpbHRlcn0gRmllbGQ9J1NlYXJjaFRleHQnIFNldHRlcj17KGZpbHRlcjogRmlsdGVyKSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIoKHByZXZGaWx0ZXIpID0+ICh7IC4uLnByZXZGaWx0ZXIsIE9wZXJhdG9yOiAnPScsIFNlYXJjaFRleHQ6IGZpbHRlci5TZWFyY2hUZXh0LnRvU3RyaW5nKCkgPT0gJ3RydWUnID8gJzEnOiAnMCcgfSkpXHJcbiAgICAgICAgfX0gTGFiZWw9XCJDb2x1bW4gdHlwZSBpcyBib29sZWFuLiBZZXMvT24gaXMgY2hlY2tlZC5cIiAvPlxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbHVtbiB0eXBlIGlzIGVudW1lcmFibGUuIFNlbGVjdCBmcm9tIGJlbG93LjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8bGkgPjxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPXt7IHpJbmRleDogMSB9fSBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiBgKCR7dmFsdWVMaXN0SXRlbXMubWFwKHggPT4geC5UZXh0KS5qb2luKCcsJyl9KWAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiAnJyB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGRlZmF1bHRWYWx1ZT0nb2ZmJyAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiA+U2VsZWN0IEFsbDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZUxpc3RJdGVtcy5tYXAodmxpID0+IDxsaSBrZXk9e3ZsaS5JRH0gPjxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPXt7IHpJbmRleDogMSB9fSBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gcHJvcHMuRmlsdGVyLlNlYXJjaFRleHQucmVwbGFjZSgnKCcsICcnKS5yZXBsYWNlKCcpJywgJycpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHggPT4geCAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCh2bGkuVGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGAoJHtsaXN0LmpvaW4oJywnKX0pYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocHJldlNldHRlciA9PiAoeyAuLi5wcmV2U2V0dGVyLCBTZWFyY2hUZXh0OiB0ZXh0IH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gcHJvcHMuRmlsdGVyLlNlYXJjaFRleHQucmVwbGFjZSgnKCcsICcnKS5yZXBsYWNlKCcpJywgJycpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKHggPT4geCAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcih4ID0+IHggIT0gdmxpLlRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBgKCR7bGlzdC5qb2luKCcsJyl9KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHByZXZTZXR0ZXIgPT4gKHsgLi4ucHJldlNldHRlciwgU2VhcmNoVGV4dDogdGV4dCB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSB2YWx1ZT17cHJvcHMuRmlsdGVyLlNlYXJjaFRleHQuaW5kZXhPZih2bGkuVGV4dCkgPj0gMCA/ICdvbicgOiAnb2ZmJ30gY2hlY2tlZD17cHJvcHMuRmlsdGVyLlNlYXJjaFRleHQuaW5kZXhPZih2bGkuVGV4dCkgPj0gMCA/IHRydWUgOiBmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiA+e3ZsaS5UZXh0fTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbkJ5TWV0ZXI7XG5cbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25maWd1cmF0aW9uRmlsZUNoYW5nZXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA1LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IENvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcyA9IChwcm9wczogeyBNZXRlcklEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2NvbmZpZ0ZpbGVzLCBzZXRDb25maWdGaWxlc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtodG1sLCBzZXRIdG1sXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpIHx8IHByb3BzLkZpbGVOYW1lID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IGdldENvbmZpZ0ZpbGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhKSA9PiBzZXRDb25maWdGaWxlcyhkYXRhKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklELCBwcm9wcy5GaWxlTmFtZV0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb25maWdGaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9Db25maWd1cmF0aW9uRmlsZXMvJHtwcm9wcy5NZXRlcklEfS8ke3Byb3BzLkZpbGVOYW1lfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1vbSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihtb20sICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICAgcmV0dXJuICdyZWQnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheXMgPCA3KVxyXG4gICAgICAgICAgICByZXR1cm4gJ29yYW5nZSc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3llbGxvdyc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgfHwgcHJvcHMuRmlsZU5hbWUgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Byb3BzLkZpbGVOYW1lfSBIaXN0b3J5OjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPkxhc3QgV3JpdGUgVGltZTwvdGg+PHRoPiMgb2YgQ2hhbmdlczwvdGg+PHRoPkZpbGU8L3RoPjx0aD5EaWZmPC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnRmlsZXMubWFwKChjZiwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGdldENvbG9yKGNmLkxhc3RXcml0ZVRpbWUpIH19Pnttb21lbnQoY2YuTGFzdFdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NmLkNoYW5nZXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD0nI3Nob3dDb250ZW50JyBvbkNsaWNrPXsoZSkgPT4geyBzZXRIdG1sKGA8cD4ke2NmLlRleHQucmVwbGFjZSgvXFxuL2csICc8YnI+Jyl9PC9wPmApfX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZVwiPjwvaT48L3NwYW4+PC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgZGF0YS10b2dnbGU9J21vZGFsJyBkYXRhLXRhcmdldD0nI3Nob3dDb250ZW50JyBvbkNsaWNrPXsoZSkgPT4geyBzZXRIdG1sKGNmLkh0bWwucmVwbGFjZSgvJnBhcmE7L2csICcnKSk7fX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZXllXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9XCJzaG93Q29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIiBzdHlsZT17e21heFdpZHRoOiAnNzUlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3Byb3BzLkZpbGVOYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyZXknLCBmb250U2l6ZTogMTh9fWRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcztcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbmZpZ3VyYXRpb25GaWxlcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDUvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBDb25maWd1cmF0aW9uRmlsZXMgPSAocHJvcHM6IHsgTWV0ZXJJRDogbnVtYmVyLCBGaWxlTmFtZTogc3RyaW5nIH0pID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFtjb25maWdGaWxlcywgc2V0Q29uZmlnRmlsZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8YW55Pj4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0Q29uZmlnRmlsZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGEpID0+IHNldENvbmZpZ0ZpbGVzKGRhdGEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySURdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29uZmlnRmlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvQ29uZmlndXJhdGlvbkZpbGVzLyR7cHJvcHMuTWV0ZXJJRH0vTGFzdFdyaXRlc2AsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG1vbSA9IG1vbWVudChkYXRlKTtcclxuICAgICAgICBsZXQgbm93ID0gbW9tZW50KCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihtb20sICdkYXlzJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDcpXHJcbiAgICAgICAgICAgIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgMzApXHJcbiAgICAgICAgICAgIHJldHVybiAneWVsbG93JztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChmaWxlTmFtZSwgZXZ0KSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6IGhvbWVQYXRoICsgJ2luZGV4LmNzaHRtbCcsIHNlYXJjaDogYD9uYW1lPUNvbmZpZ3VyYXRpb24mTWV0ZXJJRD0ke3Byb3BzLk1ldGVySUR9JkZpbGVOYW1lPSR7ZmlsZU5hbWV9YCwgc3RhdGU6IHt9IH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5Db25maWd1cmF0aW9uIEZpbGVzOjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPkZpbGU8L3RoPjx0aD5MYXN0IFdyaXRlIFRpbWU8L3RoPjx0aD4jIG9mIENoYW5nZXM8L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maWdGaWxlcy5tYXAoKGNmLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGJhY2tncm91bmRDb2xvcjogKGNmLkZpbGVOYW1lID09IHByb3BzLkZpbGVOYW1lID8gJ3llbGxvdycgOiBudWxsKSB9fSBvbkNsaWNrPXsoZXZ0KSA9PiBoYW5kbGVTZWxlY3QoY2YuRmlsZU5hbWUsIGV2dCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2YuRmlsZU5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGdldENvbG9yKGNmLkxhc3RXcml0ZVRpbWUpfX0+e21vbWVudChjZi5MYXN0V3JpdGVUaW1lKS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Y2YuQ2hhbmdlc308L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbkZpbGVzO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==