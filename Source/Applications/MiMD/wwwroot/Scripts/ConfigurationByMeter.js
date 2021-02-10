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
                recordStat.Description == 'Compliance Issue' ?
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
            recordStat.Description == 'Compliance Issue' ?
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
/*! exports provided: default, BaseConfigWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseConfigWindow", function() { return BaseConfigWindow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__);
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null,
                        " Configuration ",
                        props.configuration.Name)) : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: props.hasHeader ? "card-body" : "" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { height: window.innerHeight - 540, maxHeight: window.innerHeight - 540, overflowY: 'auto' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Record: props.configuration, Field: 'Pattern', Setter: function () { }, Valid: function () { return true; }, Label: 'File Pattern', Disabled: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                            { key: 'Name', label: 'Field', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Record: item, Field: 'Name', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'FieldType', label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Record: item, Field: 'FieldType', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'Comparison', label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Record: item, Field: 'Comparison', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'Value', label: 'Value', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Record: item, Field: 'Value', Disabled: true, Label: '', Setter: function (record) { }, Valid: function () { return true; } }); } },
                            { key: 'ID', label: '', headerStyle: { width: (props.onEdit == undefined ? '0px' : 'auto') }, rowStyle: { width: (props.onEdit == undefined ? '0px' : 'auto') }, content: function (item, key, style) { return (props.onEdit == undefined ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { marginTop: '16px', textAlign: 'center' }, onClick: function () { return props.onEdit(item); } },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { style: { color: '#007BFF' }, className: "fa fa-pencil-square fa-3x", "aria-hidden": "true" }))); } },
                        ], tableClass: "table table-hover", data: props.Fields, sortField: 'Name', ascending: true, onSort: function (d) { }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (BaseConfig);
var BaseConfigWindow = function (props) {
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
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BaseConfig, { BaseConfigList: configurationlist });
};


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
        if (props.state.Description == 'Compliance Issue')
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
        if (props.state.Description == 'Compliance Issue')
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
        if (props.state.Description == 'Compliance Issue')
            return 'Submitt';
    }
    function confirm() {
        if (props.state == undefined) {
            submitt();
            return true;
        }
        $('#' + getId() + '-warning').modal('show');
        return false;
    }
    function submitt() {
        if (props.RecordId != undefined)
            submittRecord();
        if (props.MeterId != undefined)
            submittMeter();
        setNote("");
        setToffset(0);
        $('#' + getId()).modal('hide');
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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], { Id: getId(), Title: getTitle(), Confirm: confirm, content: function () {
                if (props.state != undefined && props.state.Description == 'Compliance Issue')
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
                $('#' + props.Id).modal('hide');
        }
        else
            $('#' + props.Id).modal('hide');
    }
    function Close() {
        if (props.Close != undefined) {
            if (props.Close())
                $('#' + props.Id).modal('hide');
        }
        else
            $('#' + props.Id).modal('hide');
    }
    function Cancel() {
        if (props.Cancel != undefined) {
            if (props.Cancel())
                $('#' + props.Id).modal('hide');
            return;
        }
        else if (props.Close != undefined) {
            if (props.Close())
                $('#' + props.Id).modal('hide');
            return;
        }
        else
            $('#' + props.Id).modal('hide');
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", id: props.Id },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog" + (props.width == undefined ? ' modal-lg' : ''), style: (props.width == undefined ? {} : { width: props.width, maxWidth: 'fit-content' }) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", { className: "modal-title" }, props.Title),
                        props.Close != undefined || props.Cancel != undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "close", onClick: function () { return Cancel(); } }, "\u00D7") : null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" }, props.content()),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        props.PosLabel == undefined ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: Confirm }, props.PosLabel),
                        props.NegLabel == undefined ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger", onClick: Close }, props.NegLabel)))))));
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
        $('#' + props.Id).modal('hide');
        props.Action(true);
    }
    function cancelWarning() {
        $('#' + props.Id).modal('hide');
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
                    props.Deny == undefined ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger", onClick: function () { return cancelWarning(); } }, props.Deny))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Warning);


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
/* harmony import */ var _CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CommonComponents/Table */ "./TSX/MiMD/CommonComponents/Table.tsx");
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


;
var DowloadFiles = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), fileList = _a[0], setFileList = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var handle = getFiles();
        return function () {
            if (handle != null && handle.abort != null)
                handle.abort();
        };
    }, [props]);
    function getFiles() {
        if (props.MeterId == -1 || props.MeterId == undefined)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/PRC002/GetFiles/" + props.MeterId,
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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommonComponents_Table__WEBPACK_IMPORTED_MODULE_1__["default"], { cols: [
                { key: 'FileName', label: 'File', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                { key: null, label: 'Type', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary btn-block", onClick: function () { return window.open(homePath + "api/MiMD/PRC002/DowloadFile/" + item.ID); } }, " Download "); } },
            ], tableClass: "table table-hover", data: fileList, sortField: 'FileName', ascending: true, onSort: function (d) { }, onClick: function (d) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } })));
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
/* harmony import */ var _Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/ManualAction */ "./TSX/MiMD/PRC-002/Common/ManualAction.tsx");
/* harmony import */ var _Common_Warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Warning */ "./TSX/MiMD/PRC-002/Common/Warning.tsx");
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: __assign(__assign({}, lblStyle), { marginTop: '50px' }) }, "Meter not in Compliance"),
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
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger btn-block", onClick: function () { return $('#CreateRecord').modal('show'); } }, " Add Compliance Issue "),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-info btn-block", onClick: function () { return $('#RAP').modal('show'); } }, " Submitt Remedial Action Plan "),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__["default"], { MeterId: props.MeterID, state: props.stateList.find(function (item) { return item.Description === 'Compliance Issue'; }), Action: function () { } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_ManualAction__WEBPACK_IMPORTED_MODULE_2__["default"], { MeterId: props.MeterID, state: props.stateList.find(function (item) { return item.Description === 'RAP Submitted'; }), Action: function () { } })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-info btn-block", "data-toggle": "modal", "data-target": "#ActivatedMonitoring" }, " Meter Reviewed for Compliance "),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_Warning__WEBPACK_IMPORTED_MODULE_3__["default"], { Id: 'ActivatedMonitoring', Title: 'Warning', Content: 'This will activate the MiMD PRC002 monitoring for this meter. Please Review the current configuration before proceeding', Confirm: 'Proceed', Deny: 'Cancel', Action: function (result) { if (result)
                        ActivateMeter(); } }))) : null)));
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
/* harmony import */ var _Common_BaseConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/BaseConfig */ "./TSX/MiMD/PRC-002/Common/BaseConfig.tsx");
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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["Modal"], { Title: 'Meter Base Configuration', Show: showBaseConfig, CallBack: function (confirm) { setShowBaseConfig(false); } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Common_BaseConfig__WEBPACK_IMPORTED_MODULE_7__["BaseConfigWindow"], { MeterId: props.MeterID })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_4__["Modal"], { Title: 'Download Current Config File', Show: showFiles, CallBack: function (confirm) { setShowFiles(false); } },
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
                    ], tableClass: "table table-hover", data: changeList, sortField: recordSort, ascending: recordAsc, onSort: function (d) { }, onClick: function (d) {
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
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_6__);
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
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showLoading = _j[0], setShowLoading = _j[1];
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
        setShowLoading(true);
        if (fileName.endsWith(".ini"))
            Object(_FileParser__WEBPACK_IMPORTED_MODULE_2__["ParseINI"])(evt, function (d) { return LoadBaseConfigFile(fileName, d.map(function (item, index) { return (__assign(__assign({}, item), { Include: false })); })); });
        if (fileName.endsWith(".par"))
            Object(_FileParser__WEBPACK_IMPORTED_MODULE_2__["ParsePAR"])(evt, function (d) { return LoadBaseConfigFile(fileName, d.map(function (item, index) { return (__assign(__assign({}, item), { Include: false })); })); });
        else
            setShowLoading(false);
    }
    function LoadBaseConfigFile(file, Fields) {
        setFileName(file);
        setFileFields(Fields.map(function (item) { item.BaseConfigId = -1; return item; }));
        props.setStep('File Load');
        setShowLoading(false);
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
            }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, onClick: function () { }, onSort: function () { } }) : null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_6__["LoadingScreen"], { Show: showLoading })));
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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: props.Field, Field: 'Name', Setter: function () { }, Valid: function () { return props.Field.Name != null && props.Field.Name.length > 0; }, Label: 'Field' }),
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


;



var NewMeterWizzard = function (props) {
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), 2), meter = _a[0], setMeter = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Meter'), 2), step = _b[0], setStep = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showWarning = _c[0], setShowWarning = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showComplete = _d[0], setShowComplete = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('None'), 2), hover = _e[0], setHover = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](new Map()), 2), baseConfig = _f[0], setBaseConfig = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), errorMsg = _g[0], setErrorMsg = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), 2), reset = _h[0], setReset = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), 2), cont = _j[0], setCont = _j[1];
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
        });
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BaseConfigWindow__WEBPACK_IMPORTED_MODULE_3__["default"], { BaseConfigs: baseConfig, setBaseConfig: setBaseConfig, setError: setErrorMsg, setStep: setStep, step: step, cont: cont, reset: reset })
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
                Submit(); }, Show: showComplete, Message: 'This will add the selected meter to PRC002 monitoring and save the base configuration. Note that the status of this meter will not update until the first configuration File is downloaded.' })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db21tb25Db21wb25lbnRzL1NlbGVjdFRhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db21tb25Db21wb25lbnRzL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db25maWd1cmF0aW9uL0NvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db25maWd1cmF0aW9uL0NvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvQ29uZmlndXJhdGlvbi9Db25maWd1cmF0aW9uRmlsZXMudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvQ2hhbmdlT3ZlcnZpZXcvQWN0aW9uSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NoYW5nZU92ZXJ2aWV3L0FjdGlvbkxpc3QudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvQ2hhbmdlT3ZlcnZpZXcvQ2hhbmdlT3ZlcnZpZXdQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NoYW5nZU92ZXJ2aWV3L0ZpZWxkVmFsdWVzLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NoYW5nZU92ZXJ2aWV3L1JlY29yZERldGFpbC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9DaGFuZ2VPdmVydmlldy9SZXNvbHZlUmVjb3JkLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NvbW1vbi9CYXNlQ29uZmlnLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NvbW1vbi9Db25maWdSdWxlRWRpdC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9Db21tb24vTWFudWFsQWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL0NvbW1vbi9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9Db21tb24vV2FybmluZy50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9NZXRlck92ZXJ2aWV3L0Rvd2xvYWRGaWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9QUkMtMDAyL01ldGVyT3ZlcnZpZXcvTWV0ZXJEZXRhaWwudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJPdmVydmlldy9NZXRlck92ZXJ2aWV3UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9NZXRlck92ZXJ2aWV3L1JlY29yZExpc3QudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJXaXp6YXJkL0Jhc2VDb25maWdXaW5kb3cudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJXaXp6YXJkL0ZpbGVQYXJzZXIudHN4Iiwid2VicGFjazovLy8uL1RTWC9NaU1EL1BSQy0wMDIvTWV0ZXJXaXp6YXJkL05ld01ldGVyV2l6emFyZC50c3giLCJ3ZWJwYWNrOi8vLy4vVFNYL01pTUQvUFJDLTAwMi9NZXRlcldpenphcmQvU2VsZWN0TWV0ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLHdCQUF3QjtBQUN4QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FB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LE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUNwRixRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hGLFFBQVEsRUFBRSxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUE1RSxDQUE0RSxHQUNsRyxDQUNOLENBQ1AsQ0FDTjtBQUNMLENBQUM7QUFHYywwRUFBVyxFQUFDIiwiZmlsZSI6IkNvbmZpZ3VyYXRpb25CeU1ldGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEZvcm1JbnB1dC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDEvMjIvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUlucHV0PFQ+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHsgUmVjb3JkOiBULCBGaWVsZDoga2V5b2YgKFQpLCBTZXR0ZXI6IChyZWNvcmQ6IFQpID0+IHZvaWQsIFZhbGlkOiAoZmllbGQ6IGtleW9mIChUKSkgPT4gYm9vbGVhbiwgTGFiZWw/OiBzdHJpbmcsIEZlZWRiYWNrPzogc3RyaW5nLCBEaXNhYmxlZD86IGJvb2xlYW4gfSwge30sIHt9PntcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy5MYWJlbCA9PSBudWxsID8gdGhpcy5wcm9wcy5GaWVsZCA6IHRoaXMucHJvcHMuTGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuVmFsaWQodGhpcy5wcm9wcy5GaWVsZCkgPyBcImZvcm0tY29udHJvbFwiIDogXCJmb3JtLWNvbnRyb2wgaXMtaW52YWxpZFwiKX0gb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByZWNvcmQ6IFQgPSBfLmNsb25lKHRoaXMucHJvcHMuUmVjb3JkKTtcclxuICAgICAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LnZhbHVlICE9IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkW3RoaXMucHJvcHMuRmllbGRdID0gZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkW3RoaXMucHJvcHMuRmllbGRdID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlNldHRlcihyZWNvcmQpO1xyXG4gICAgICAgICAgICB9fSB2YWx1ZT17dGhpcy5wcm9wcy5SZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0gPT0gbnVsbCA/ICcnIDogdGhpcy5wcm9wcy5SZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0udG9TdHJpbmcoKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuRGlzYWJsZWQgPT0gbnVsbCA/IGZhbHNlIDogdGhpcy5wcm9wcy5EaXNhYmxlZCB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZhbGlkLWZlZWRiYWNrJz57dGhpcy5wcm9wcy5GZWVkYmFjayA9PSBudWxsID8gdGhpcy5wcm9wcy5GaWVsZCArICcgaXMgYSByZXF1aXJlZCBmaWVsZC4nIDogdGhpcy5wcm9wcy5GZWVkYmFja308L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEZvcm1TZWxlY3QudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAxLzI4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uL2dsb2JhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtU2VsZWN0PFQ+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHsgUmVjb3JkOiBULCBGaWVsZDoga2V5b2YgKFQpLCBPcHRpb25zOiBBcnJheTx7VmFsdWU6IHN0cmluZywgTGFiZWw6IHN0cmluZyB9PiwgU2V0dGVyOiAocmVjb3JkOiBUKSA9PiB2b2lkLCBMYWJlbD86IHN0cmluZywgRGlzYWJsZWQ/OiBib29sZWFuLCBFbXB0eU9wdGlvbj86IGJvb2xlYW4gfSwge30sIHt9PntcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy5MYWJlbCA9PSBudWxsID8gdGhpcy5wcm9wcy5GaWVsZCA6IHRoaXMucHJvcHMuTGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlY29yZDogVCA9IF8uY2xvbmUodGhpcy5wcm9wcy5SZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQudmFsdWUgIT0gXCJcIilcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0gPSBldnQudGFyZ2V0LnZhbHVlIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuU2V0dGVyKHJlY29yZCk7XHJcbiAgICAgICAgICAgIH19IHZhbHVlPXt0aGlzLnByb3BzLlJlY29yZFt0aGlzLnByb3BzLkZpZWxkXSA9PSBudWxsID8gJycgOiB0aGlzLnByb3BzLlJlY29yZFt0aGlzLnByb3BzLkZpZWxkXS50b1N0cmluZygpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5EaXNhYmxlZCA9PSBudWxsID8gZmFsc2UgOiB0aGlzLnByb3BzLkRpc2FibGVkfT5cclxuICAgICAgICAgICAgICAgIHsodGhpcy5wcm9wcy5FbXB0eU9wdGlvbiA/IDxvcHRpb24gdmFsdWU9Jyc+PC9vcHRpb24+IDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5PcHRpb25zLm1hcCgoYSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXthLlZhbHVlfT57YS5MYWJlbH08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb3JtU2VsZWN0VmFsdWVMaXN0PFQ+KHByb3BzOnsgUmVjb3JkOiBULCBGaWVsZDoga2V5b2YgKFQpLFZhbHVlTGlzdEdyb3VwOiBzdHJpbmcsIFNldHRlcjogKHJlY29yZDogVCkgPT4gdm9pZCwgTGFiZWw/OiBzdHJpbmcsIERpc2FibGVkPzogYm9vbGVhbiwgRW1wdHlPcHRpb24/OiBib29sZWFuIH0pe1xyXG4gICAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5WYWx1ZUxpc3RJdGVtPj4oW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1ZhbHVlTGlzdC8ke3Byb3BzLlZhbHVlTGlzdEdyb3VwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaGFuZGxlLmRvbmUodmFsdWVMaXN0R3JvdXBzID0+IHNldE9wdGlvbnModmFsdWVMaXN0R3JvdXBzKSkuZmFpbCgobXNnKSA9PiBjb25zb2xlLmxvZyhtc2cucmVzcG9uc2VKU09OKSk7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+e3Byb3BzLkxhYmVsID09IG51bGwgPyBwcm9wcy5GaWVsZCA6IHByb3BzLkxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByZWNvcmQ6IFQgPSBfLmNsb25lKHByb3BzLlJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC52YWx1ZSAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZFtwcm9wcy5GaWVsZF0gPSBldnQudGFyZ2V0LnZhbHVlIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRbcHJvcHMuRmllbGRdID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjb3JkKTtcclxuICAgICAgICAgICAgfX0gdmFsdWU9e3Byb3BzLlJlY29yZFtwcm9wcy5GaWVsZF0gPT0gbnVsbCA/ICcnIDogcHJvcHMuUmVjb3JkW3Byb3BzLkZpZWxkXS50b1N0cmluZygpfSBkaXNhYmxlZD17cHJvcHMuRGlzYWJsZWQgPT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuRGlzYWJsZWR9PlxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5FbXB0eU9wdGlvbiA/IDxvcHRpb24gdmFsdWU9Jyc+PC9vcHRpb24+IDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKGEsIGkpID0+IDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17YS5WYWx1ZX0+e2EuVGV4dH08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj47XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFNlbGVjdFRhYmxlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMS8yMi8yMDIxIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVGFibGUsIHsgVGFibGVQcm9wcyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnXHJcbmltcG9ydCB7IHNlbGVjdGlvbiB9IGZyb20gJ2QzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3RUYWJsZVByb3BzPFQ+IGV4dGVuZHMgVGFibGVQcm9wczxUPiB7XHJcbiAgICBvblNlbGVjdGlvbjogKHNlbGVjdGVkOiBUW10pID0+IHZvaWQ7XHJcbiAgICBrZXlGaWVsZDoga2V5b2YgVCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0VGFibGU8VD4ocHJvcHM6IElTZWxlY3RUYWJsZVByb3BzPFQ+KSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8VFtdPihwcm9wcy5kYXRhKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGU8YW55W10+KFtdKTtcclxuXHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihwcm9wcy5zb3J0RmllbGQpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLmFzY2VuZGluZyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuZGF0YS5sZW5ndGggIT0gZGF0YS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHNldERhdGEocHJvcHMuZGF0YSk7XHJcbiAgICB9LCBbcHJvcHMuZGF0YV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoKGQpID0+IGQuZmlsdGVyKGtleUl0ZW0gPT4gZGF0YS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtW3Byb3BzLmtleUZpZWxkXSA9PSBrZXlJdGVtKSA+IC0xKSlcclxuICAgIH0sIFtkYXRhXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXREYXRhKChsc3QpID0+IChfLm9yZGVyQnkobHN0LCBbc29ydEZpZWxkXSwgWyhhc2NlbmRpbmcgPyBcImFzY1wiIDogXCJkZXNjXCIpXSkpKVxyXG4gICAgfSwgW2FzY2VuZGluZywgc29ydEZpZWxkXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5vblNlbGVjdGlvbihkYXRhLmZpbHRlcihpdGVtID0+IHNlbGVjdGVkLmZpbmRJbmRleChrZXkgPT4ga2V5ID09IGl0ZW1bcHJvcHMua2V5RmllbGRdKSA+IC0xKSk7XHJcbiAgICB9LCBbc2VsZWN0ZWRdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKFxyXG4gICAgICAgIGQ6IHsgY29sOiBrZXlvZiBUOyByb3c6IFQ7IGRhdGE6IGFueSB9LFxyXG4gICAgICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50IDwgSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQsIE1vdXNlRXZlbnQgPixcclxuICAgICkge1xyXG4gICAgICAgIGxldCBzSW5kZXggPSBzZWxlY3RlZC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09IGQucm93W3Byb3BzLmtleUZpZWxkXSk7XHJcbiAgICAgICAgaWYgKHNJbmRleCA9PSAtMSlcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoKG9kKSA9PiBbLi4ub2QsIGQucm93W3Byb3BzLmtleUZpZWxkXV0pXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZCgob2QpID0+IG9kLmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gZC5yb3dbcHJvcHMua2V5RmllbGRdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU29ydChcclxuICAgICAgICBkYXRhOiB7IGNvbDoga2V5b2YgVDsgYXNjZW5kaW5nOiBib29sZWFuIH0sXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoZGF0YS5jb2wgPT0gc29ydEZpZWxkKVxyXG4gICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgc2V0U29ydEZpZWxkKGRhdGEuY29sIGFzIHN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFibGVQcm9wczogVGFibGVQcm9wczxUPiA9IHtcclxuICAgICAgICBjb2xzOiBbXHJcbiAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNGVtJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzRlbScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IChzZWxlY3RlZC5maW5kSW5kZXgoaSA9PiBpID09IGl0ZW1bcHJvcHMua2V5RmllbGRdKSA+IC0xID8gPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNnB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48aSBjbGFzc05hbWU9XCJmYSBmYS1jaGVjay1zcXVhcmUtbyBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj4gOiBudWxsKSB9LFxyXG4gICAgICAgICAgICAuLi5wcm9wcy5jb2xzXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxyXG4gICAgICAgIHNvcnRGaWVsZDogc29ydEZpZWxkLFxyXG4gICAgICAgIGFzY2VuZGluZzogYXNjZW5kaW5nLFxyXG4gICAgICAgIG9uU29ydDogaGFuZGxlU29ydCxcclxuICAgICAgICB0YWJsZUNsYXNzOiBwcm9wcy50YWJsZUNsYXNzLFxyXG4gICAgICAgIHRhYmxlU3R5bGU6IHByb3BzLnRhYmxlU3R5bGUsXHJcbiAgICAgICAgdGhlYWRTdHlsZTogcHJvcHMudGhlYWRTdHlsZSxcclxuICAgICAgICB0aGVhZENsYXNzOiBwcm9wcy50aGVhZENsYXNzLFxyXG4gICAgICAgIHRib2R5U3R5bGU6IHByb3BzLnRib2R5U3R5bGUsXHJcbiAgICAgICAgdGJvZHlDbGFzczogcHJvcHMudGJvZHlDbGFzcyxcclxuICAgICAgICBzZWxlY3RlZDogKGQ6IFQpID0+IGZhbHNlLFxyXG4gICAgICAgIHJvd1N0eWxlOiBwcm9wcy5yb3dTdHlsZVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gPFRhYmxlIHsuLi50YWJsZVByb3BzfSAvPjtcclxuXHJcbn1cclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBUYWJsZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDgvMDIvMjAxOCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgQW5nbGVJY29uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IGFzY2VuZGluZzogYm9vbGVhbiB9PiA9IChwcm9wcykgPT4gPHNwYW4gc3R5bGU9e3sgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBtYXJnaW46IDMgfX0gY2xhc3NOYW1lPXtcImZhIGZhLWFuZ2xlLVwiICsgKHByb3BzLmFzY2VuZGluZyA/ICd1cCcgOiAnZG93bicpfT48L3NwYW4+XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlUHJvcHM8VD4ge1xyXG4gICAgY29sczogQXJyYXk8eyBrZXk6IGtleW9mKFQpIHwgbnVsbCwgbGFiZWw6IHN0cmluZywgaGVhZGVyU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzLCByb3dTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMsIGNvbnRlbnQ/KGl0ZW06IFQsIGtleToga2V5b2YoVCksIHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzKTogUmVhY3QuUmVhY3ROb2RlIH0+LFxyXG4gICAgZGF0YTogQXJyYXk8VD4sXHJcbiAgICBvbkNsaWNrOiAoZGF0YTogeyBjb2w6IGtleW9mIChUKSwgcm93OiBULCBkYXRhOiBUW2tleW9mKFQpXSB9LCBldmVudDogYW55KSA9PiB2b2lkLFxyXG4gICAgc29ydEZpZWxkOiBzdHJpbmcsXHJcbiAgICBhc2NlbmRpbmc6IGJvb2xlYW4sXHJcbiAgICBvblNvcnQoZGF0YTogeyBjb2w6IGtleW9mIChUKSwgYXNlbmRpbmc6IGJvb2xlYW59KTogdm9pZCxcclxuICAgIHRhYmxlQ2xhc3M/OiBzdHJpbmcsXHJcbiAgICB0YWJsZVN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcyxcclxuICAgIHRoZWFkU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxyXG4gICAgdGhlYWRDbGFzcz86IHN0cmluZyxcclxuICAgIHRib2R5U3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxyXG4gICAgdGJvZHlDbGFzcz86IHN0cmluZyxcclxuICAgIHNlbGVjdGVkPyhkYXRhOiBUKTogYm9vbGVhbixcclxuICAgIHJvd1N0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGU8VD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGFibGVQcm9wczxUPiwge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgcm93Q29tcG9uZW50cyA9IHRoaXMuZ2VuZXJhdGVSb3dzKCk7XHJcbiAgICAgICAgdmFyIGhlYWRlckNvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlSGVhZGVycygpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnRhYmxlQ2xhc3MgIT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wcy50YWJsZUNsYXNzIDogJycpfSBzdHlsZT17dGhpcy5wcm9wcy50YWJsZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZCBzdHlsZT17dGhpcy5wcm9wcy50aGVhZFN0eWxlfT57aGVhZGVyQ29tcG9uZW50c308L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5IHN0eWxlPXt0aGlzLnByb3BzLnRib2R5U3R5bGV9Pntyb3dDb21wb25lbnRzfTwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUhlYWRlcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29scy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHZhciBjZWxscyA9IHRoaXMucHJvcHMuY29scy5tYXAoKGNvbERhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZTtcclxuICAgICAgICAgICAgaWYgKGNvbERhdGEuaGVhZGVyU3R5bGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGNvbERhdGEuaGVhZGVyU3R5bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHlsZS5jdXJzb3IgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDx0aCBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVNvcnQoeyBjb2w6IGNvbERhdGEua2V5LCBhc2NlbmRpbmc6IHRoaXMucHJvcHMuYXNjZW5kaW5nIH0sIGUpfT57Y29sRGF0YS5sYWJlbH17KHRoaXMucHJvcHMuc29ydEZpZWxkID09IGNvbERhdGEua2V5ID8gPEFuZ2xlSWNvbiBhc2NlbmRpbmc9e3RoaXMucHJvcHMuYXNjZW5kaW5nfSAvPiA6IG51bGwpfTwvdGg+XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8dHI+e2NlbGxzfTwvdHI+O1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlUm93cygpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjZWxscyA9IHRoaXMucHJvcHMuY29scy5tYXAoY29sRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBfLmNsb25lKGNvbERhdGEucm93U3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXgudG9TdHJpbmcoKSArIGl0ZW1bY29sRGF0YS5rZXldICsgY29sRGF0YS5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzLCB7IGNvbDogY29sRGF0YS5rZXksIHJvdzogaXRlbSwgZGF0YTogaXRlbVtjb2xEYXRhLmtleV0gfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbERhdGEuY29udGVudCAhPSB1bmRlZmluZWQgPyBjb2xEYXRhLmNvbnRlbnQoaXRlbSwgY29sRGF0YS5rZXksIHN0eWxlKSA6IGl0ZW1bY29sRGF0YS5rZXldfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3R5bGU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yb3dTdHlsZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gXy5jbG9uZSh0aGlzLnByb3BzLnJvd1N0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0eWxlLmN1cnNvciA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZChpdGVtKSlcclxuICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDx0ciBzdHlsZT17c3R5bGV9IGtleT17aW5kZXgudG9TdHJpbmcoKX0+e2NlbGxzfTwvdHI+O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGRhdGE6IHsgY29sOiBrZXlvZihUKSwgcm93OiBULCBkYXRhOiBhbnkgfSwgZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZGF0YSwgZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNvcnQoZGF0YSwgZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU29ydChkYXRhKTtcclxuICAgIH1cclxufTtcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8yMi8yMDE5IC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuaW1wb3J0IENvbmZpZ3VyYXRpb25GaWxlcyBmcm9tICcuL0NvbmZpZ3VyYXRpb25GaWxlcyc7XHJcbmltcG9ydCBDb25maWd1cmF0aW9uRmlsZUNoYW5nZXMgZnJvbSAnLi9Db25maWd1cmF0aW9uRmlsZUNoYW5nZXMnO1xyXG5pbXBvcnQgTm90ZVdpbmRvdyBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL05vdGVXaW5kb3cnO1xyXG5pbXBvcnQgeyBTZWFyY2gsIFNlYXJjaEJhciB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5jb25zdCBzdGFuZGFyZFNlYXJjaDogU2VhcmNoLklGaWVsZDxNaU1ELk1ldGVyPltdID0gW1xyXG4gICAgeyBrZXk6ICdTdGF0aW9uJywgbGFiZWw6ICdTdGF0aW9uJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnRGF0ZUxhc3RDaGFuZ2VkJywgbGFiZWw6ICdEYXRlIExhc3QgQ2hhbmdlZCcsIHR5cGU6ICdkYXRldGltZScgfVxyXG5dO1xyXG5cclxuY29uc3QgQ29uZmlndXJhdGlvbkJ5TWV0ZXI6IE1pTUQuQnlDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbZmlsdGVyYWJsZUxpc3QsIHNldEZpbHRlcmFibGVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFNlYXJjaC5JRmllbGQ8TWlNRC5NZXRlcj4+PihzdGFuZGFyZFNlYXJjaCk7XHJcbiAgICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxTZWFyY2guSUZpbHRlcjxNaU1ELk1ldGVyPj4+KFtdKTtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNaU1ELk1ldGVyPj4oW10pO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ0RhdGVMYXN0Q2hhbmdlZCcpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBnZXRNZXRlcnMoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ICE9IG51bGwpIGhhbmRsZS5hYm9ydCgpOyB9XHJcbiAgICB9LCBbYXNjZW5kaW5nLCBzb3J0RmllbGQsIGZpbHRlcnNdKVxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBnZXRBZGRpdGlvbmFsRmllbGRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gbnVsbCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PE1pTUQuTWV0ZXI+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9NZXRlci9Db25maWcvU2VhcmNoYWJsZUxpc3RgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgU2VhcmNoZXM6IGZpbHRlcnMsIE9yZGVyQnk6IHNvcnRGaWVsZCwgQXNjZW5kaW5nOiBhc2NlbmRpbmcgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PE1pTUQuTWV0ZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldERhdGEoZGF0YSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBZGRpdGlvbmFsRmllbGRzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxNaU1ELkFkZGl0aW9uYWxGaWVsZD4+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9BZGRpdGlvbmFsRmllbGQvUGFyZW50VGFibGUvTWV0ZXJgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gQ29udmVydFR5cGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ2ludGVnZXInIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnZGF0ZXRpbWUnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZSB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW51bScsIGVudW06IFt7IExhYmVsOiB0eXBlLCBWYWx1ZTogdHlwZSB9IF1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZDogQXJyYXk8TWlNRC5BZGRpdGlvbmFsRmllbGQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcmRlcmVkID0gXy5vcmRlckJ5KHN0YW5kYXJkU2VhcmNoLmNvbmNhdChkLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IGl0ZW0uRmllbGROYW1lLCBrZXk6IGl0ZW0uRmllbGROYW1lLCAuLi5Db252ZXJ0VHlwZShpdGVtLlR5cGUpIH0gYXMgU2VhcmNoLklGaWVsZDxNaU1ELk1ldGVyPlxyXG4gICAgICAgICAgICApKSksIFsnbGFiZWwnXSwgW1wiYXNjXCJdKTtcclxuICAgICAgICAgICAgc2V0RmlsdGVyYWJsZUxpc3Qob3JkZXJlZClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGl0ZW0sIGV2dCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdpbmRleC5jc2h0bWwnLCBzZWFyY2g6ICc/bmFtZT1Db25maWd1cmF0aW9uJk1ldGVySUQ9JyArIGl0ZW0ucm93Lk1ldGVySUQsIHN0YXRlOiB7fSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPFNlYXJjaEJhcjxNaU1ELk1ldGVyPlxyXG4gICAgICAgICAgICAgICAgQ29sbHVtbkxpc3Q9e2ZpbHRlcmFibGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgU2V0RmlsdGVyPXsoZmxkcykgPT4gc2V0RmlsdGVycyhmbGRzKX1cclxuICAgICAgICAgICAgICAgIERpcmVjdGlvbj17J2xlZnQnfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdENvbGx1bW49e3sga2V5OiAnU3RhdGlvbicsIGxhYmVsOiAnU3RhdGlvbicsIHR5cGU6ICdzdHJpbmcnIH19XHJcbiAgICAgICAgICAgICAgICBXaWR0aD17JzUwJSd9XHJcbiAgICAgICAgICAgICAgICBMYWJlbD17J1NlYXJjaCd9XHJcbiAgICAgICAgICAgICAgICBHZXRFbnVtPXsoc2V0T3B0aW9ucywgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSAhPSAnZW51bScgfHwgZmllbGQuZW51bSA9PSB1bmRlZmluZWQgfHwgZmllbGQuZW51bS5sZW5ndGggIT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvVmFsdWVMaXN0L0dyb3VwLyR7ZmllbGQuZW51bVswXS5WYWx1ZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5kb25lKGQgPT4gIHNldE9wdGlvbnMoZC5tYXAoaXRlbSA9PiAoeyBWYWx1ZTogaXRlbS5WYWx1ZS50b1N0cmluZygpLCBMYWJlbDogaXRlbS5UZXh0IH0pKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGhhbmRsZSAhPSBudWxsICYmIGhhbmRsZS5hYm9ydCA9PSBudWxsKSBoYW5kbGUuYWJvcnQ7IH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9TZWFyY2hCYXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17e21hcmdpbjogMCwgaGVpZ2h0OiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmc6MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPE1pTUQuTWV0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdTdGF0aW9uJywgbGFiZWw6ICdTdGF0aW9uJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01vZGVsJywgbGFiZWw6ICdNb2RlbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTAlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEwJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVFNDJywgbGFiZWw6ICdUU0MnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEwJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMCUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0RhdGVMYXN0Q2hhbmdlZCcsIGxhYmVsOiAnRGF0ZSBMYXN0IENoYW5nZWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzE1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09IG51bGwgfHwgaXRlbVtrZXldID09ICcnKSByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpdGVtW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRheXMgPSBub3cuZGlmZihkYXRlLCAnZGF5cycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXlzIDwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSAncmVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRheXMgPCA3KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kQ29sb3InXSA9ICdvcmFuZ2UnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kQ29sb3InXSA9ICd5ZWxsb3cnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChcIk1NL0REL1lZIEhIOm1tIENUXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAxNywgcGFkZGluZzogMCB9LCByb3dTdHlsZTogeyB3aWR0aDogMCwgcGFkZGluZzogMCB9IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkLmNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiAnY2FsYyggMTAwJSAtIDcwcHgpJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5NZXRlcklEID09IHByb3BzLk1ldGVySUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogMCwgbWF4SGVpZ2h0OiAnMTAwJScgLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29uZmlndXJhdGlvbkZpbGVzIE1ldGVySUQ9e3Byb3BzLk1ldGVySUR9IEZpbGVOYW1lPXtwcm9wcy5GaWxlTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcyBNZXRlcklEPXtwcm9wcy5NZXRlcklEfSBGaWxlTmFtZT17cHJvcHMuRmlsZU5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RlV2luZG93IElEPXtwcm9wcy5NZXRlcklEfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLypcclxuaWYgKChbXCJpbnRlZ2VyXCIsIFwibnVtYmVyXCIsIFwiYm9vbGVhblwiLCBcInN0cmluZ1wiLCBcImRhdGV0aW1lXCJdKS5pbmRleE9mKHByb3BzLkFkZGl0aW9uYWxGaWVsZC5UeXBlKSA8IDApIHtcclxubGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgdXJsOiBgJHtob21lUGF0aH1hcGkvVmFsdWVMaXN0L0dyb3VwLyR7cHJvcHMuQWRkaXRpb25hbEZpZWxkLlR5cGV9YCxcclxuICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICBjYWNoZTogdHJ1ZSxcclxuICAgIGFzeW5jOiB0cnVlXHJcbn0pXHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uQnlNZXRlcjtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25maWd1cmF0aW9uRmlsZUNoYW5nZXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA1LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuXHJcbmNvbnN0IENvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcyA9IChwcm9wczogeyBNZXRlcklEOiBudW1iZXIsIEZpbGVOYW1lOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW2NvbmZpZ0ZpbGVzLCBzZXRDb25maWdGaWxlc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgTWlNRC5JQ29uZmlnRmlsZT4oJ0xhc3RXcml0ZVRpbWUnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW2h0bWwsIHNldEh0bWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3Nob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlsc10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgfHwgcHJvcHMuRmlsZU5hbWUgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gZ2V0Q29uZmlnRmlsZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGEpID0+IHNldENvbmZpZ0ZpbGVzKGRhdGEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk1ldGVySUQsIHByb3BzLkZpbGVOYW1lLCBmbGFnLCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb25maWdGaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9Db25maWd1cmF0aW9uRmlsZXMvJHtwcm9wcy5NZXRlcklEfS8ke3Byb3BzLkZpbGVOYW1lfS8ke2ZsYWd9LyR7c29ydEZpZWxkfS8ke2FzY2VuZGluZyA/IDE6MH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yKGRhdGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBtb20gPSBtb21lbnQoZGF0ZSk7XHJcbiAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICAgIGxldCBkYXlzID0gbm93LmRpZmYobW9tLCAnZGF5cycpO1xyXG5cclxuICAgICAgICBpZiAoZGF5cyA8IDEpXHJcbiAgICAgICAgICAgIHJldHVybiAncmVkJztcclxuICAgICAgICBlbHNlIGlmIChkYXlzIDwgNylcclxuICAgICAgICAgICAgcmV0dXJuICdvcmFuZ2UnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheXMgPCAzMClcclxuICAgICAgICAgICAgcmV0dXJuICd5ZWxsb3cnO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLk1ldGVySUQpIHx8IHByb3BzLkZpbGVOYW1lID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPntwcm9wcy5GaWxlTmFtZX0gSGlzdG9yeTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9e3sgekluZGV4OiAxIH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRGbGFnKCFmbGFnKX0gdmFsdWU9e2ZsYWcgPyAnb24nIDogJ29mZid9IGNoZWNrZWQ9e2ZsYWcgPyB0cnVlIDogZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiID5TaG93IEZpbGVzIHcvbyBDaGFuZ2VzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZTxNaU1ELklDb25maWdGaWxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0xhc3RXcml0ZVRpbWUnLCBsYWJlbDogJ0xhc3QgV3JpdGUgVGltZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVsnYmFja2dyb3VuZENvbG9yJ10gPSBnZXRDb2xvcihpdGVtLkxhc3RXcml0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KGl0ZW0uTGFzdFdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQ2hhbmdlcycsIGxhYmVsOiAnIyBvZiBDaGFuZ2VzJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdGaWxlTmFtZScsIGxhYmVsOiAnRmlsZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChpdGVtKSA9PiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBvbkNsaWNrPXsoZSkgPT4geyBzZXRTaG93RGV0YWlscyh0cnVlKTsgc2V0SHRtbChgPHA+JHtpdGVtLlRleHQucmVwbGFjZSgvXFxuL2csICc8YnI+Jyl9PC9wPmApIH19PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGVcIj48L2k+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdUZXh0JywgbGFiZWw6ICdEaWZmJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogKGl0ZW0pID0+IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIG9uQ2xpY2s9eyhlKSA9PiB7IHNldFNob3dEZXRhaWxzKHRydWUpOyBzZXRIdG1sKGl0ZW0uSHRtbC5yZXBsYWNlKC8mcGFyYTsvZywgJycpKTsgfX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZXllXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtjb25maWdGaWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gJ0ZpbGVOYW1lJyB8fCBkLmNvbCA9PSAnVGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIFRpdGxlPXtwcm9wcy5GaWxlTmFtZX0gQ2FsbEJhY2s9eygpID0+IHsgc2V0U2hvd0RldGFpbHMoZmFsc2UpIH19IFNob3c9e3Nob3dEZXRhaWxzfSBTaG93Q2FuY2VsPXtmYWxzZX0gQ29uZmlybUJ0bkNsYXNzPXsnYnRuLWRhbmdlcid9IENvbmZpcm1UZXh0PXsnQ2xvc2UnfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmV5JywgZm9udFNpemU6IDE4fX1kYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb25GaWxlQ2hhbmdlcztcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbmZpZ3VyYXRpb25GaWxlcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDUvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uL2dsb2JhbCc7XHJcblxyXG5cclxuY29uc3QgQ29uZmlndXJhdGlvbkZpbGVzID0gKHByb3BzOiB7IE1ldGVySUQ6IG51bWJlciwgRmlsZU5hbWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbY29uZmlnRmlsZXMsIHNldENvbmZpZ0ZpbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1pTUQuSUNvbmZpZ0ZpbGU+PihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgTWlNRC5JQ29uZmlnRmlsZT4oJ0xhc3RXcml0ZVRpbWUnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNOYU4ocHJvcHMuTWV0ZXJJRCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBnZXRDb25maWdGaWxlcygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YSkgPT4gc2V0Q29uZmlnRmlsZXMoZGF0YSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuTWV0ZXJJRCwgYXNjZW5kaW5nLCBzb3J0RmllbGRdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29uZmlnRmlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvQ29uZmlndXJhdGlvbkZpbGVzLyR7cHJvcHMuTWV0ZXJJRH0vTGFzdFdyaXRlcy8ke3NvcnRGaWVsZH0vJHthc2NlbmRpbmcgPyAxIDogMH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yKGRhdGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBtb20gPSBtb21lbnQoZGF0ZSk7XHJcbiAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpO1xyXG4gICAgICAgIGxldCBkYXlzID0gbm93LmRpZmYobW9tLCAnZGF5cycpO1xyXG5cclxuICAgICAgICBpZiAoZGF5cyA8IDEpXHJcbiAgICAgICAgICAgcmV0dXJuICdyZWQnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheXMgPCA3KVxyXG4gICAgICAgICAgICByZXR1cm4gJ29yYW5nZSc7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF5cyA8IDMwKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3llbGxvdyc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZmlsZU5hbWUsIGV2dCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdpbmRleC5jc2h0bWwnLCBzZWFyY2g6IGA/bmFtZT1Db25maWd1cmF0aW9uJk1ldGVySUQ9JHtwcm9wcy5NZXRlcklEfSZGaWxlTmFtZT0ke2ZpbGVOYW1lfWAsIHN0YXRlOiB7fSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTihwcm9wcy5NZXRlcklEKSkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+Q29uZmlndXJhdGlvbiBGaWxlczo8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZTxNaU1ELklDb25maWdGaWxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRmlsZU5hbWUnLCBsYWJlbDogJ0ZpbGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzUwJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICc1MCUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnTGFzdFdyaXRlVGltZScsIGxhYmVsOiAnTGFzdCBXcml0ZSBUaW1lJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbJ2JhY2tncm91bmRDb2xvciddID0gZ2V0Q29sb3IoaXRlbS5MYXN0V3JpdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KGl0ZW0uTGFzdFdyaXRlVGltZSkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQ2hhbmdlcycsIGxhYmVsOiAnIyBvZiBDaGFuZ2VzJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2NvbmZpZ0ZpbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGRhdGEsZXZ0KSA9PiBoYW5kbGVTZWxlY3QoZGF0YS5yb3cuRmlsZU5hbWUsIGV2dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiAnMTUwcHgnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uRmlsZU5hbWUgPT0gcHJvcHMuRmlsZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb25GaWxlcztcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBBY3Rpb25IZWFkZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE4LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgZGF0YTogUFJDMDAyLklBY3Rpb24sIHN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+LCBzaG93VGltZTogYm9vbGVhbiB9IFxyXG5cclxuY29uc3QgQWN0aW9uSGVhZGVyID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGxldCBpc2F1dG8gPSBwcm9wcy5kYXRhLlVzZXJBY2NvdW50ID09ICdNaU1EJztcclxuICAgIGxldCBpc0NoYW5nZSA9IHByb3BzLmRhdGEuU3RhdGVJZCAhPSBudWxsO1xyXG4gICAgbGV0IGlzTm90ZSA9ICFpc2F1dG8gJiYgIWlzQ2hhbmdlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFRTKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGF0ZVRhZyhzdGF0ZUlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgc3RhdCA9IHByb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5JRCA9PSBzdGF0ZUlkKVxyXG5cclxuICAgICAgICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyM2Yzc1N2QnIDogc3RhdC5Db2xvciksIGNvbG9yOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnI2ZmZmZmZicgOiBzdGF0LlRleHRDb2xvcikgfX0+eyhzdGF0ID09IHVuZGVmaW5lZCA/ICdVbmtub3duJyA6IHN0YXQuRGVzY3JpcHRpb24pfTwvc3Bhbj4pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cHJvcHMuc2hvd1RpbWUgPyBmb3JtYXRUUyhwcm9wcy5kYXRhLlRpbWVzdGFtcCkgKyAnOiAnIDogbnVsbH1cclxuICAgICAgICAgICAge2lzTm90ZSA/IHByb3BzLmRhdGEuVXNlckFjY291bnQgKyAnIGFkZGVkIGEgTm90ZScgOiBudWxsfVxyXG4gICAgICAgICAgICB7aXNDaGFuZ2UgPyBwcm9wcy5kYXRhLlVzZXJBY2NvdW50ICsgJyBDaGFuZ2VkIFN0YXR1cyB0byAnIDogbnVsbH1cclxuICAgICAgICAgICAge2lzQ2hhbmdlPyBzdGF0ZVRhZyhwcm9wcy5kYXRhLlN0YXRlSWQpIDogbnVsbH1cclxuICAgICAgICAgICAgeyhpc2F1dG8gJiYgIWlzQ2hhbmdlKSA/ICdNaU1EIHJlY2lldmVkIGFuIHVwZGF0ZWQgQ29uZmlndXJhdGlvbiBGaWxlJyA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uSGVhZGVyO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEFjdGlvbkxpc3QudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE4LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSwgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0JztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ2hlY2tCb3ggZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtQ2hlY2tCb3gnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuL0FjdGlvbkhlYWRlcic7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBSZWNvcmRJZDogbnVtYmVyLCBTdGF0ZUxpc3Q6IEFycmF5PFBSQzAwMi5JU3RhdHVzPiwgc2VsZWN0ZWRBY3Rpb246IG51bWJlciwgc2V0U2VsZWN0ZWRBY3Rpb246IChpZDogbnVtYmVyKSA9PiB2b2lkIH1cclxuXHJcbmNvbnN0IFJlY29yZExpc3QgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aW9uTGlzdCwgc2V0QXRjaW9uTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSUFjdGlvbj4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVBY3Rpb25MaXN0ID0gZ2V0QWN0aW9ucygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlQWN0aW9uTGlzdCAhPSBudWxsICYmIGhhbmRsZUFjdGlvbkxpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlQWN0aW9uTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5SZWNvcmRJZF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFjdGlvbnMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JQWN0aW9uPj4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5SZWNvcmRJZCA9PSAtMSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9BY3Rpb24/cGFyZW50SUQ9JHtwcm9wcy5SZWNvcmRJZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQWN0aW9uPikgPT4ge1xyXG4gICAgICAgICAgICBzZXRBdGNpb25MaXN0KGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsocHJvcHMuUmVjb3JkSWQgPiAtMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnSUQnLCBsYWJlbDogJ0NvbmZpZ3VyYXRpb24gQ2hhbmdlIEhpc3RvcnknLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxBY3Rpb25DYXJkIGRhdGE9e2l0ZW19IHN0YXRlTGlzdD17cHJvcHMuU3RhdGVMaXN0fSBvcGVuQ29uZmlnPXtwcm9wcy5zZXRTZWxlY3RlZEFjdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXthY3Rpb25MaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtcIklEXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQWN0aW9uQ2FyZCA9IChwcm9wczogeyBkYXRhOiBQUkMwMDIuSUFjdGlvbiwgc3RhdGVMaXN0OiBBcnJheTxQUkMwMDIuSVN0YXR1cz4sIG9wZW5Db25maWc6IChjaGFuZ2VJZDogbnVtYmVyKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGxldCBoYXNDb25maWcgPSBwcm9wcy5kYXRhLlVzZXJBY2NvdW50ID09ICdNaU1EJztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QWN0aW9uSGVhZGVyIGRhdGE9e3Byb3BzLmRhdGF9IHN0YXRlTGlzdD17cHJvcHMuc3RhdGVMaXN0fSBzaG93VGltZT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvcHMuZGF0YS5Ob3RlfTwvcD5cclxuICAgICAgICAgICAgICAgIHtoYXNDb25maWcgPyA8IGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLm9wZW5Db25maWcocHJvcHMuZGF0YS5JRCk7ICQoJyNjdXJyZW50Q29uZmlnJykuc2hvdygpOyB9fT5TaG93IENvbmZpZ3VyYXRpb248L2E+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZExpc3Q7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uZmlndXJhdGlvbkJ5TWV0ZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA4LzIyLzIwMTkgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0JztcclxuaW1wb3J0IEZvcm1DaGVja0JveCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1DaGVja0JveCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgUmVjb3JkRGV0YWlsIGZyb20gJy4vUmVjb3JkRGV0YWlsJztcclxuaW1wb3J0IEFjdGlvbkxpc3QgZnJvbSAnLi9BY3Rpb25MaXN0JztcclxuXHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmNvbnN0IFBSQzAwMkNoYW5nZU92ZXJ2aWV3UGFnZSA9IChwcm9wczogeyBSb2xlczogQXJyYXk8TWlNRC5TZWN1cml0eVJvbGVOYW1lPiwgUmVjb3JkSWQ6IG51bWJlciB9KSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbc3RhdHVzTGlzdCwgc2V0U3RhdHVzTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSVN0YXR1cz4+KFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEFjdGlvbiwgc2V0U2VsZWN0ZWRBY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlU3RhdHVzTGlzdCA9IGdldFN0YXR1cygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlU3RhdHVzTGlzdC5hYm9ydCAhPSBudWxsKSBoYW5kbGVTdGF0dXNMaXN0LmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklTdGF0dXM+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VTdGF0ZS9MaXN0YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSVN0YXR1cz4pID0+IHtcclxuICAgICAgICAgICAgc2V0U3RhdHVzTGlzdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAsIGhlaWdodDogJzIwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVjb3JkRGV0YWlsIHN0YXRlTGlzdD17c3RhdHVzTGlzdH0gUmVjb3JkSUQ9e3Byb3BzLlJlY29yZElkfSBzZWxlY3RlZEFjdGlvbj17c2VsZWN0ZWRBY3Rpb259IHNldFNlbGVjdGVkQWN0aW9uPXtzZXRTZWxlY3RlZEFjdGlvbn0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2NhbGMoIDEwMCUgLSAxMzZweCknLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uTGlzdCBTdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IFJlY29yZElkPXtwcm9wcy5SZWNvcmRJZH0gc2VsZWN0ZWRBY3Rpb249e3NlbGVjdGVkQWN0aW9ufSBzZXRTZWxlY3RlZEFjdGlvbj17c2V0U2VsZWN0ZWRBY3Rpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQUkMwMDJDaGFuZ2VPdmVydmlld1BhZ2U7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQmFzZUNvbmZpZy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTcvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybVNlbGVjdCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnOztcclxuaW1wb3J0IHsgUFJDMDAyfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IHsgSGFzaCB9IGZyb20gJ2NyeXB0byc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBGaWVsZExpc3Q6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+LCBMYWJlbDogc3RyaW5nLCBJZDogc3RyaW5nfVxyXG5cclxuXHJcbmNvbnN0IEZpZWxkVmFsdWVzID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRGaWVsZCwgc2V0U2VsZWN0ZWRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuXHJcbiAgICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBpZD17cHJvcHMuSWR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3Byb3BzLkxhYmVsfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXsoKSA9PiAkKCcjJyArIHByb3BzLklkKS5oaWRlKCl9PiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIHN0eWxlPXt7IG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjM1LCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTQwLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDU0MCwgb3ZlcmZsb3dZOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0ZpZWxkTmFtZScsIGxhYmVsOiAnRmllbGQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxGb3JtSW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0ZpZWxkTmFtZSd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1ZhbHVlJywgbGFiZWw6ICdWYWx1ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPEZvcm1JbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnVmFsdWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdWYWxpZCcsIGxhYmVsOiAnVmFsaWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IHsgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcuMzc1cmVtIC43NXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtcImZhIFwiICsgKGl0ZW0uVmFsaWQgPyBcImZhLWNoZWNrLWNpcmNsZVwiIDogXCJmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiKX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5GaWVsZExpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXsnRmllbGROYW1lJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17KCkgPT4gJCgnIycgKyBwcm9wcy5JZCkuaGlkZSgpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkVmFsdWVzO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFJlY29yZERldGFpbC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTgvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybVNlbGVjdCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnO1xyXG5pbXBvcnQgRm9ybUNoZWNrQm94IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUNoZWNrQm94JztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCBCYXNlQ29uZmlnIGZyb20gJy4uL0NvbW1vbi9CYXNlQ29uZmlnJztcclxuaW1wb3J0IE1hbnVhbEFjdGlvbiBmcm9tICcuLi9Db21tb24vTWFudWFsQWN0aW9uJztcclxuaW1wb3J0IEZpZWxkVmFsdWVzIGZyb20gJy4vRmllbGRWYWx1ZXMnO1xyXG5pbXBvcnQgQ29uZmlnUnVsZUVkaXQgZnJvbSAnLi4vQ29tbW9uL0NvbmZpZ1J1bGVFZGl0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL0NvbW1vbi9Nb2RhbCc7XHJcbmltcG9ydCBSZXNvbHZlUmVjb3JkIGZyb20gJy4vUmVzb2x2ZVJlY29yZCc7XHJcbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi9BY3Rpb25IZWFkZXInO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmNvbnN0IGFkZFJBUFdhcm5pbmcgPSAnVGhpcyBBY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUuIFRoaXMgd2lsbCBhZGQgYSBwZXJtYW5lbnQgQ29tcGxpYW5jZSBSZWNvcmQgdG8gdGhpcyBJc3N1ZS4nO1xyXG5jb25zdCByZXNvbHZlV2FybmluZyA9ICdUaGlzIEFjdGlvbiBjYW4gbm90IGJlIHVuZG9uZS4gVGhpcyB3aWxsIHBlcm1hbmVudGx5IHVwZGF0ZWQgdGhlIEJhc2UgQ29uZmlndXJhdGlvbiBmb3IgdGhpcyBNZXRlciBhbmQgUmVzb2x2ZSB0aGUgSXNzdWUuJztcclxuXHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgUmVjb3JkSUQ6IG51bWJlciwgc3RhdGVMaXN0OiBBcnJheTxQUkMwMDIuSVN0YXR1cz4sIHNlbGVjdGVkQWN0aW9uOiBudW1iZXIsIHNldFNlbGVjdGVkQWN0aW9uOiAoaWQ6IG51bWJlcikgPT4gdm9pZCB9XHJcblxyXG5jb25zdCBSZWNvcmREZXRhaWwgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklSZWNvcmQ+KHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbbWV0ZXIsIHNldE1ldGVyXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JTWV0ZXI+KHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbYWN0aW9uLCBzZXRBY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklBY3Rpb24+KHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbYmFzZUNvbmZpZywgc2V0QmFzZUNvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSUJhc2VDb25maWc+KHVuZGVmaW5lZCk7XHJcbiAgIFxyXG4gICAgY29uc3QgW3ZhbHVlTGlzdCwgc2V0VmFsdWVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGRTdGF0dXM+PihbXSk7XHJcbiAgICBjb25zdCBbYWxsdmFsdWVMaXN0LCBzZXRBbGxWYWx1ZUxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVSZWNvcmQgPSBnZXRSZWNvcmQocHJvcHMuUmVjb3JkSUQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlUmVjb3JkICE9IG51bGwgJiYgaGFuZGxlUmVjb3JkLmFib3J0ICE9IG51bGwpIGhhbmRsZVJlY29yZC5hYm9ydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuUmVjb3JkSURdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVGaWVsZFZhdWVzID0gZ2V0RmllbGRWYWx1ZXMocHJvcHMuc2VsZWN0ZWRBY3Rpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlRmllbGRWYXVlcyAhPSBudWxsICYmIGhhbmRsZUZpZWxkVmF1ZXMuYWJvcnQgIT0gbnVsbCkgaGFuZGxlRmllbGRWYXVlcy5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5zZWxlY3RlZEFjdGlvbl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1ldGVyID0gZ2V0TWV0ZXIoKHJlY29yZCA9PSB1bmRlZmluZWQgPyAtMSA6IHJlY29yZC5NZXRlcklkKSk7XHJcbiAgICAgICAgbGV0IGhhbmRsZUJhc2VDb25maWcgPSBnZXRCYXNlQ29uZmlnKChyZWNvcmQgPT0gdW5kZWZpbmVkID8gLTEgOiAocmVjb3JkLkJhc2VDb25maWdJZCA9PSB1bmRlZmluZWQgPyAtMSA6IHJlY29yZC5CYXNlQ29uZmlnSWQpKSk7XHJcbiAgICAgICAgbGV0IGhhbmRsZUFjdGlvbiA9IGdldExhc3RBY3Rpb24oKHJlY29yZCA9PSB1bmRlZmluZWQgPyAtMSA6IHJlY29yZC5MYXN0QWN0aW9uSUQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZU1ldGVyICE9IG51bGwgJiYgaGFuZGxlTWV0ZXIuYWJvcnQgIT0gbnVsbCkgaGFuZGxlTWV0ZXIuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZUJhc2VDb25maWcgIT0gbnVsbCAmJiBoYW5kbGVCYXNlQ29uZmlnLmFib3J0ICE9IG51bGwpIGhhbmRsZUJhc2VDb25maWcuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZUFjdGlvbiAhPSBudWxsICYmIGhhbmRsZUFjdGlvbi5hYm9ydCAhPSBudWxsKSBoYW5kbGVBY3Rpb24uYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVjb3JkXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RmllbGRWYWx1ZXMoaWQ6IG51bWJlcik6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGU7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKVxyXG4gICAgICAgICAgICBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0ZpZWxkVmFsdWU/cGFyZW50SUQ9JHtwcm9wcy5SZWNvcmRJRH1gLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9GaWVsZFZhbHVlL0hpc3Rvcnk/cGFyZW50SUQ9JHtpZH1gLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklDb25maWdGaWVsZFN0YXR1cz4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICBpZiAoaWQgPT0gLTEpXHJcbiAgICAgICAgICAgICAgICBzZXRBbGxWYWx1ZUxpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlTGlzdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmVjb3JkKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8UFJDMDAyLklSZWNvcmQ+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlUmVjb3JkL09uZS8ke2lkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogUFJDMDAyLklSZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgc2V0UmVjb3JkKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMYXN0QWN0aW9uKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8UFJDMDAyLklBY3Rpb24+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9BY3Rpb24vT25lLyR7aWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBQUkMwMDIuSUFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb24oZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1ldGVyKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8UFJDMDAyLklNZXRlcj4ge1xyXG4gICAgICAgIGlmIChpZCA9PSAtMSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VNZXRlci9PbmUvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IFBSQzAwMi5JTWV0ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgc2V0TWV0ZXIoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhc2VDb25maWcoaWQ6IG51bWJlcik6IEpRdWVyeS5qcVhIUjxQUkMwMDIuSUJhc2VDb25maWc+IHtcclxuICAgICAgICBpZiAoaWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9CYXNlQ29uZmlnL09ORS8ke2lkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogUFJDMDAyLklCYXNlQ29uZmlnKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gICAgIFxyXG4gICAgICAgICAgICBzZXRCYXNlQ29uZmlnKGRhdGEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0VFMoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBkYXRlID0gbW9tZW50KGlucHV0KTtcclxuICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoXCJNTS9ERC9ZWSBISDptbSBDVFwiKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGxldCBtZXRlclN0YXQgPSAobWV0ZXIgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcHJvcHMuc3RhdGVMaXN0LmZpbmQocyA9PiBzLklEID09IG1ldGVyLlN0YXR1c0lEKSk7XHJcbiAgICBsZXQgcmVjb3JkU3RhdCA9IChyZWNvcmQgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcHJvcHMuc3RhdGVMaXN0LmZpbmQocyA9PiBzLklEID09IHJlY29yZC5TdGF0dXMpKTtcclxuICAgIFxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIHsobWV0ZXIgPT0gdW5kZWZpbmVkPyBudWxsIDpcclxuICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0dXNSb3cgbGFiZWw9eydDb25maWd1cmF0aW9uIENoYW5nZSd9IHN0YXR1cz17cmVjb3JkU3RhdH0gVD17cmVjb3JkLlRpbWVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0dXNSb3cgbGFiZWw9eydNZXRlciAnICsgbWV0ZXIuQXNzZXRLZXl9IHN0YXR1cz17bWV0ZXJTdGF0fSBUPXttZXRlci5UaW1lcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBJc3N1ZSBPcGVuZWQ6IHtmb3JtYXRUUyhyZWNvcmQuQ3JlYXRlZCl9IGJ5IHtyZWNvcmQuVXNlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+IExhc3QgQWN0aW9uIFRha2VuOiB7Zm9ybWF0VFMocmVjb3JkLlRpbWVzdGFtcCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gTGFzdCBBY3Rpb246IHthY3Rpb24gIT0gdW5kZWZpbmVkID8gPEFjdGlvbkhlYWRlciBkYXRhPXthY3Rpb259IHN0YXRlTGlzdD17cHJvcHMuc3RhdGVMaXN0fSBzaG93VGltZT17ZmFsc2V9IC8+IDogbnVsbH0gPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7KGJhc2VDb25maWcgPT0gdW5kZWZpbmVkID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmc6IDUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiAkKCcjYmFzZWNvbmZpZycpLnNob3coKX0+IEJhc2UgQ29uZmlndXJhdGlvbiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHsgcHJvcHMuc2V0U2VsZWN0ZWRBY3Rpb24oLTEpOyAkKCcjY3VycmVudENvbmZpZycpLnNob3coKSB9fT4gQ3VycmVudCBDb25maWd1cmF0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gJCgnI05vdGUnKS5zaG93KCl9PiBBZGQgQ29tcGxpYW5jZSBOb3RlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdBY2tub3dsZWRnZWQnIHx8IHJlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ1Jldmlld2VkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiAkKCcjUkFQJykuc2hvdygpfT4gU3VibWl0dCBSZW1lZGlhbCBBY3Rpb24gUGxhbiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0NvbXBsaWFuY2UgSXNzdWUnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+ICQoJyNBY2tub3dsZWRnZScpLnNob3coKX0+IEFja25vd2xlZGdlIElzc3VlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7cmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiAkKCcjUmV2aWV3Jykuc2hvdygpfT4gUmV2aWV3IElzc3VlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7cmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnUmV2aWV3ZWQnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+ICQoJyNSZXNvbHZlJykuc2hvdygpfT4gUmVzb2x2ZSBJc3N1ZSAtIFVwZGF0ZWQgQmFzZSBDb25maWc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gUmVjb3JkSWQ9e3Byb3BzLlJlY29yZElEfSBzdGF0ZT17bnVsbH0gQWN0aW9uPXsoKSA9PiB7IGhpc3RvcnkuZ28oMCkgfX0gLz4gICAgXHJcbiAgICAgICAgICAgICAgICA8RmllbGRWYWx1ZXMgTGFiZWw9eyhwcm9wcy5zZWxlY3RlZEFjdGlvbiA9PSAtMSA/ICdDdXJyZW50IENvbmZpZ3VyYXRpb24nIDogJ1JlbGF0ZWQgQ29uZmlndXJhdGlvbicpfSBJZD17J2N1cnJlbnRDb25maWcnfSBGaWVsZExpc3Q9eyhwcm9wcy5zZWxlY3RlZEFjdGlvbiA9PSAtMSA/IGFsbHZhbHVlTGlzdCA6IHZhbHVlTGlzdCl9IC8+XHJcbiAgICAgICAgICAgICAgICB7cmVjb3JkU3RhdC5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJyB8fCByZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gUmVjb3JkSWQ9e3Byb3BzLlJlY29yZElEfSBzdGF0ZT17cHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLkRlc2NyaXB0aW9uID09PSAnUkFQIFN1Ym1pdHRlZCcpfSBBY3Rpb249eygpID0+IHsgaGlzdG9yeS5nbygwKSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0NvbXBsaWFuY2UgSXNzdWUnID9cclxuICAgICAgICAgICAgICAgICAgICA8TWFudWFsQWN0aW9uIFJlY29yZElkPXtwcm9wcy5SZWNvcmRJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ0Fja25vd2xlZGdlZCcpfSBBY3Rpb249eygpID0+IHsgaGlzdG9yeS5nbygwKSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3JlY29yZFN0YXQuRGVzY3JpcHRpb24gPT0gJ0Fja25vd2xlZGdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gUmVjb3JkSWQ9e3Byb3BzLlJlY29yZElEfSBzdGF0ZT17cHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLkRlc2NyaXB0aW9uID09PSAnUmV2aWV3ZWQnKX0gQWN0aW9uPXsoKSA9PiB7IGhpc3RvcnkuZ28oMCkgfX0gLz5cclxuICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtyZWNvcmRTdGF0LkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvbHZlUmVjb3JkIEZpZWxkTGlzdD17YWxsdmFsdWVMaXN0LmZpbHRlcihpdGVtID0+ICFpdGVtLlZhbGlkKX0gUmVjb3JkSUQ9e3Byb3BzLlJlY29yZElEfSBzdGF0ZUxpc3Q9e3Byb3BzLnN0YXRlTGlzdH0gQ29tcGxldGU9eygpID0+IHsgaGlzdG9yeS5nbygwKTsgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHsoYmFzZUNvbmZpZyA9PSB1bmRlZmluZWQgPyBudWxsIDogPE1vZGFsIFRpdGxlPXsnSXNzdWUgQmFzZSBDb25maWd1cmF0aW9uJ30gUG9zTGFiZWw9eydDbG9zZSd9IElkPXsnYmFzZWNvbmZpZyd9IGNvbnRlbnQ9eygpID0+IDxCYXNlQ29uZmlnIEJhc2VDb25maWdMaXN0PXtbYmFzZUNvbmZpZ119IC8+fSAvPil9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5jb25zdCBTdGF0dXNSb3cgPSAocHJvcHM6IHsgc3RhdHVzOiBQUkMwMDIuSVN0YXR1cywgVDogbnVtYmVyLCBsYWJlbDogc3RyaW5nIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH0gaGFzIGJlZW4gaW5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc0NSUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAoc3RhdHVzID09IHVuZGVmaW5lZCA/ICcjZjhmOWZhJyA6IHByb3BzLnN0YXR1cy5Db2xvciksXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogKHN0YXR1cyA9PSB1bmRlZmluZWQgPyAnIzIxMjUyOScgOiBwcm9wcy5zdGF0dXMuVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnY2FsYyg1JSknXHJcbiAgICAgICAgICAgIH19PiB7cHJvcHMuc3RhdHVzLkRlc2NyaXB0aW9ufSA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc0NSUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAocHJvcHMuVCA8IDMwID8gJyMyOGE3NDUnIDogKHByb3BzLlQgPCA2MCA/ICcjZmZjMTA3JyA6ICcjZGMzNTQ1JykpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IChwcm9wcy5UIDwgMzAgPyAnI2ZmZmZmZicgOiAocHJvcHMuVCA8IDYwID8gJyMyMTI1MjknIDogJyNmZmZmZmYnKSksXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgIH19PiB7cHJvcHMuVH0gRGF5czwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZERldGFpbDtcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFJlc29sdmVSZWNvcmQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzIzLzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0JztcclxuaW1wb3J0IEZvcm1DaGVja0JveCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1DaGVja0JveCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgQmFzZUNvbmZpZyBmcm9tICcuLi9Db21tb24vQmFzZUNvbmZpZyc7XHJcbmltcG9ydCBNYW51YWxBY3Rpb24gZnJvbSAnLi4vQ29tbW9uL01hbnVhbEFjdGlvbic7XHJcbmltcG9ydCBGaWVsZFZhbHVlcyBmcm9tICcuL0ZpZWxkVmFsdWVzJztcclxuaW1wb3J0IENvbmZpZ1J1bGVFZGl0IGZyb20gJy4uL0NvbW1vbi9Db25maWdSdWxlRWRpdCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Db21tb24vTW9kYWwnO1xyXG5pbXBvcnQgV2FybmluZyBmcm9tICcuLi9Db21tb24vV2FybmluZyc7XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBSZWNvcmRJRDogbnVtYmVyLCBzdGF0ZUxpc3Q6IEFycmF5PFBSQzAwMi5JU3RhdHVzPiwgRmllbGRMaXN0OiBBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPiwgQ29tcGxldGU6ICgpID0+IHZvaWR9XHJcbnR5cGUgc3RlcCA9ICdOb3RlJyB8ICdDaGFuZ2UnXHJcblxyXG5jb25zdCBSZXNvbHZlUmVjb3JkID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gUmVhY3QudXNlU3RhdGU8c3RlcD4oJ05vdGUnKTtcclxuICAgIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2ZpZWxkSW5kZXgsIHNldEZpZWxkSW5kZXhdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcbiAgICBjb25zdCBbdXBkYXRlZEZsZCwgc2V0VXBkYXRlZEZsZF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkPj4oW10pO1xyXG5cclxuICAgIGNvbnN0W2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBDYW5jZWwoKSB7XHJcbiAgICAgICAgc2V0U3RlcCgnTm90ZScpO1xyXG4gICAgICAgIHNldEZpZWxkSW5kZXgoLTEpO1xyXG4gICAgICAgIHNldE5vdGUoJycpO1xyXG4gICAgICAgIHNldFVwZGF0ZWRGbGQoW10pXHJcbiAgICAgICAgJCgnI1Jlc29sdmUnKS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTmV4dFN0ZXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05vdGUnKSB7XHJcbiAgICAgICAgICAgIHNldFN0ZXAoJ0NoYW5nZScpXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5GaWVsZExpc3QubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBTYXZlKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIExvYWRGaWVsZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgVmFsaWRhdGVGaWVsZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTG9hZEZpZWxkKCkge1xyXG4gICAgICAgIGlmIChmaWVsZEluZGV4ID09IHVwZGF0ZWRGbGQubGVuZ3RoIC0gMSApXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRmllbGQvT25lLyR7cHJvcHMuRmllbGRMaXN0W2ZpZWxkSW5kZXggKyAxXS5GaWVsZElkfWAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHNldFVwZGF0ZWRGbGQoKGFycmF5KSA9PiBbLi4uYXJyYXksIGRhdGFdKTtcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkSW5kZXgoKGluZGV4KSA9PiBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0RmllbGRJbmRleCgoaW5kZXgpID0+IGluZGV4ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUHJldlN0ZXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05vdGUnKVxyXG4gICAgICAgICAgICAkKCcjUmVzb2x2ZVdhcm5pbmcnKS5zaG93KCk7XHJcbiAgICAgICAgZWxzZSBpZiAoZmllbGRJbmRleCA9PSAwKVxyXG4gICAgICAgICAgICBzZXRTdGVwKCdOb3RlJylcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldEZpZWxkSW5kZXgoKGluZGV4KSA9PiBpbmRleCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgICAgICBpZiAoc3RlcCA9PSAnTm90ZScpXHJcbiAgICAgICAgICAgIHJldHVybiAnUmVzb2x2ZSBJc3N1ZSdcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiAnQ2hhbmdlIEJhc2UgQ29uZmlndXJhdGlvbidcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBWYWxpZGF0ZUZpZWxkKCkge1xyXG4gICAgICAgIC8vIFZhbGlkYXRpb24gZm9yIFR5cGUgTGF0ZXJcclxuXHJcbiAgICAgICAgLy8gVmFsaWRhdGlvbiB0byBtYWtlIHN1cmUgQ29uZmlnIGlzIE9rIE5vdy5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRmllbGQvQ2hlY2svJHtwcm9wcy5GaWVsZExpc3RbZmllbGRJbmRleF0uVmFsdWV9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkRmxkW2ZpZWxkSW5kZXhdIGFzIFBSQzAwMi5JQ29uZmlnRmllbGQpLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCB8fCAhZGF0YSkgXHJcbiAgICAgICAgICAgICAgICAkKCcjUnVsZVZhbHVlRXJyb3InKS5zaG93KCk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkSW5kZXggPT0gKHByb3BzLkZpZWxkTGlzdC5sZW5ndGgtMSkpIFxyXG4gICAgICAgICAgICAgICAgICAgIFNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZEZpZWxkKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNhdmUoKSB7XHJcbiAgICAgICAgJCgnI1Jlc29sdmVDb2Zpcm0nKS5zaG93KCk7XHJcbiAgICAgICAgLy9TYXZlIFRoZSBGaWVsZHMgYW5kIEFkZCBBIFN0YXRlXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQ29uZmlybWVkKHJlc3VsdDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghcmVzdWx0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHVwZGF0ZWRGbGQuZm9yRWFjaChpdGVtID0+ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvRmllbGQvVXBkYXRlYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShpdGVtKSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9BY3Rpb24vQWRkYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IE5vdGU6IG5vdGUsIFN0YXRlSWQ6IHByb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PSAnSW4gQ29tcGxpYW5jZScpLklELCBSZWNvcmRJZDogcHJvcHMuUmVjb3JkSUQgfSBhcyBQUkMwMDIuSUFjdGlvbiksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4gcHJvcHMuQ29tcGxldGUoKSlcclxuXHJcbiAgICAgICAgQ2FuY2VsKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNldEZpZWxkKGluZGV4OiBudW1iZXIsIHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgc2V0VXBkYXRlZEZsZCgoZmxkKSA9PiB7IGxldCB1cGRhdGUgPSBfLmNsb25lRGVlcChmbGQpOyB1cGRhdGVbZmllbGRJbmRleF0gPSByZWNvcmQ7IHJldHVybiB1cGRhdGU7IH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcclxuICAgICAgICBpZiAoc3RlcCA9PSAnTm90ZScpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5vdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByb3dzPXs0fSB2YWx1ZT17bm90ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKChlLnRhcmdldCBhcyBhbnkpLnZhbHVlKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIDxDb25maWdSdWxlRWRpdCBlZGl0VHlwZT17ZmFsc2V9IFNldHRlcj17KHJlY29yZCkgPT4gU2V0RmllbGQoZmllbGRJbmRleCwgcmVjb3JkKX0gRmllbGRWYWx1ZT17KGZpZWxkSW5kZXggPiAtMSA/IHByb3BzLkZpZWxkTGlzdFtmaWVsZEluZGV4XSA6IHVuZGVmaW5lZCl9IEZpZWxkPXsoZmllbGRJbmRleCA+IC0xID8gdXBkYXRlZEZsZFtmaWVsZEluZGV4XSA6IHVuZGVmaW5lZCl9IC8+XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNb2RhbCBJZD17J1Jlc29sdmUnfSBUaXRsZT17Z2V0VGl0bGUoKX0gTmVnTGFiZWw9eyhzdGVwID09ICdOb3RlJyA/ICdDYW5jZWwnIDogJ0JhY2snKX0gUG9zTGFiZWw9eyhmaWVsZEluZGV4ID09IHByb3BzLkZpZWxkTGlzdC5sZW5ndGggLSAxID8gJ1NhdmUnIDogJ05leHQnKX0gY29udGVudD17KCkgPT4gZ2V0Q29udGVudCgpfSBDbG9zZT17UHJldlN0ZXB9IENvbmZpcm09e05leHRTdGVwfSBDYW5jZWw9eygpID0+IHsgJCgnI1Jlc29sdmVXYXJuaW5nJykuc2hvdygpOyByZXR1cm4gZmFsc2U7fX0vPlxyXG4gICAgICAgICAgICA8V2FybmluZyBUaXRsZT17J0NhbmNlbCd9IENvbnRlbnQ9eydXYXJuaW5nIGFsbCBDaGFuZ2VzIHdpbGwgYmUgbG9zdCBhbmQgdGhlIG5ldyBiYXNlIGNvbmZpZ3VyYXRpb24gd2lsbCBub3QgYmUgYXBwbGllZCd9IENvbmZpcm09eydCYWNrJ30gRGVueT17J0NhbmNlbCd9IElkPSdSZXNvbHZlV2FybmluZycgQWN0aW9uPXsocmVzdWx0KSA9PiB7IGlmICghcmVzdWx0KSBDYW5jZWwoKTsgfX0gLz5cclxuICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydJbnZhbGlkIEJhc2UgQ29uZmlnJ30gQ29udGVudD17J1RoZSBuZXcgQmFzZSBDb25maWd1cmF0aW9uIGhhcyB0byBhbGxvdyB0aGUgY3VycmVudCBDb25maWd1cmF0aW9uJ30gQ29uZmlybT17J09LJ30gSWQ9J1J1bGVWYWx1ZUVycm9yJyBBY3Rpb249eyhyZXN1bHQpID0+IHsgfX0gLz5cclxuICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydXYXJuaW5nJ30gQ29udGVudD17J1RoaXMgd2lsbCBjaGFuZ2UgdGhlIEJhc2UgQ29uZmlndXJhdGlvbiBmb3IgdGhpcyBtZXRlciBhbmQgY2FuIG5vdCBiZSB1bmRvbmUuIEEgcGVybWFuZW50IGNvbXBsaWFuY2UgcmVjb3JkIHdpbGwgYmUgY3JlYXRlZCd9IENvbmZpcm09eydQcm9jZWVkJ30gRGVueT17J0NhbmNlbCd9IElkPSdSZXNvbHZlQ29maXJtJyBBY3Rpb249eyhyZXN1bHQpID0+IHsgQ29uZmlybWVkKHJlc3VsdCkgfX0gLz5cclxuICAgICAgICA8Lz4pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNvbHZlUmVjb3JkO1xyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQmFzZUNvbmZpZy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTcvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUFJDMDAyfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBCYXNlQ29uZmlnTGlzdDogQXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPiwgZ2V0RmllbGRMaXN0PzogKGluZGV4OiBudW1iZXIpID0+IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+LCBvbkVkaXQ/OiAocmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSA9PiB2b2lkLCBvbk5ldz86IChpZDogbnVtYmVyKSA9PiB2b2lkIH1cclxuXHJcbmNvbnN0IEJhc2VDb25maWcgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtiYXNlQ29uZmlnVGFiLCBzZXRCYXNlQ29uZmlnVGFiXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oKHByb3BzLkJhc2VDb25maWdMaXN0Lmxlbmd0aCA+IDAgPyBwcm9wcy5CYXNlQ29uZmlnTGlzdFswXS5JRCA6IC0xKSk7XHJcbiAgICBjb25zdCBbZmllbGRMaXN0LCBzZXRGaWVsZExpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklDb25maWdGaWVsZD4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5CYXNlQ29uZmlnTGlzdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBzZXRCYXNlQ29uZmlnVGFiKHByb3BzLkJhc2VDb25maWdMaXN0WzBdLklEKTtcclxuICAgIH0sIFtwcm9wcy5CYXNlQ29uZmlnTGlzdF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmdldEZpZWxkTGlzdCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZUZpZWxkTGlzdCA9IGdldEZpZWxkTGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVGaWVsZExpc3QgIT0gbnVsbCAmJiBoYW5kbGVGaWVsZExpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlRmllbGRMaXN0LmFib3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEZpZWxkTGlzdChwcm9wcy5nZXRGaWVsZExpc3QoYmFzZUNvbmZpZ1RhYikpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Jhc2VDb25maWdUYWJdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGaWVsZExpc3QoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JQmFzZUNvbmZpZz4+IHtcclxuICAgICAgICBpZiAoYmFzZUNvbmZpZ1RhYiA9PSAtMSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0ZpZWxkP3BhcmVudElEPSR7YmFzZUNvbmZpZ1RhYn1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQ29uZmlnRmllbGQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgc2V0RmllbGRMaXN0KGRhdGEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Byb3BzLkJhc2VDb25maWdMaXN0Lmxlbmd0aCA+IDE/XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLkJhc2VDb25maWdMaXN0Lm1hcCgoaXRlbSxpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmtcIiArIChiYXNlQ29uZmlnVGFiID09IGl0ZW0uSUQgPyBcIiBhY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXsoKSA9PiBzZXRCYXNlQ29uZmlnVGFiKGl0ZW0uSUQpfSBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9e1wiI0Jhc0NvbmZpZy1cIiArIGl0ZW0uTmFtZX0+e2l0ZW0uTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+IDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMzUsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLkJhc2VDb25maWdMaXN0Lm1hcCgoaXRlbSxpbmRleCkgPT4gPENvbmZpZ3VyYXRpb253aW5kb3cga2V5PXtpbmRleH0gYWN0aXZlPXtpdGVtLklEID09IGJhc2VDb25maWdUYWJ9IGNvbmZpZ3VyYXRpb249e2l0ZW19IEZpZWxkcz17ZmllbGRMaXN0fSBoYXNIZWFkZXI9e3Byb3BzLkJhc2VDb25maWdMaXN0Lmxlbmd0aCA+IDF9IG9uRWRpdD17cHJvcHMub25FZGl0fSAvPil9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3Byb3BzLm9uTmV3ICE9IHVuZGVmaW5lZCA/IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbk5ldyhiYXNlQ29uZmlnVGFiKX0+QWRkIG5ldyBGaWVsZCA8L2J1dHRvbj4gOiBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlnUHJvcHMgeyBjb25maWd1cmF0aW9uOiBQUkMwMDIuSUJhc2VDb25maWcsIGFjdGl2ZTogYm9vbGVhbiwgRmllbGRzOiBBcnJheTxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiwgaGFzSGVhZGVyOiBib29sZWFuLCBvbkVkaXQ/OiAocmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSA9PiB2b2lkfVxyXG5jb25zdCBDb25maWd1cmF0aW9ud2luZG93ID0gKHByb3BzOiBDb25maWdQcm9wcykgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtwcm9wcy5jb25maWd1cmF0aW9uLklEfSBjbGFzc05hbWU9eyhwcm9wcy5oYXNIZWFkZXIgPyBcInRhYi1wYW5lIFwiICsgKHByb3BzLmFjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJmYWRlXCIpIDogXCJcIil9IGlkPXtcIiNCYXNDb25maWctXCIgKyBwcm9wcy5jb25maWd1cmF0aW9uLk5hbWV9ID5cclxuICAgICAgICAgICAgPGRpdiBrZXk9ezJ9IGNsYXNzTmFtZT17cHJvcHMuaGFzSGVhZGVyID8gXCJjYXJkXCIgOiBcIlwifSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmhhc0hlYWRlciA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+IENvbmZpZ3VyYXRpb24ge3Byb3BzLmNvbmZpZ3VyYXRpb24uTmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3Byb3BzLmhhc0hlYWRlciA/IFwiY2FyZC1ib2R5XCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTQwLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDU0MCwgb3ZlcmZsb3dZOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxQUkMwMDIuSUJhc2VDb25maWc+IFJlY29yZD17cHJvcHMuY29uZmlndXJhdGlvbn0gRmllbGQ9eydQYXR0ZXJuJ30gU2V0dGVyPXsoKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSBMYWJlbD17J0ZpbGUgUGF0dGVybid9IERpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8UFJDMDAyLklDb25maWdGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ0ZpZWxkJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J05hbWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGaWVsZFR5cGUnLCBsYWJlbDogJ1R5cGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnRmllbGRUeXBlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQ29tcGFyaXNvbicsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0NvbXBhcmlzb24nfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdWYWx1ZScsIGxhYmVsOiAnVmFsdWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnVmFsdWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdJRCcsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6IChwcm9wcy5vbkVkaXQgPT0gdW5kZWZpbmVkID8gJzBweCcgOiAnYXV0bycpIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAocHJvcHMub25FZGl0ID09IHVuZGVmaW5lZCA/ICcwcHgnIDogJ2F1dG8nKSB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gKHByb3BzLm9uRWRpdCA9PSB1bmRlZmluZWQgPyBudWxsIDogPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNnB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkVkaXQoaXRlbSl9PjxpIHN0eWxlPXt7IGNvbG9yOiAnIzAwN0JGRicgfX0gY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsLXNxdWFyZSBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj4pIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLkZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17J05hbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbmZpZztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQmFzZUNvbmZpZ1dpbmRvdyA9IChwcm9wczogeyBNZXRlcklkOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvbmZpZ3VyYXRpb25saXN0LCBzZXRDb25maWd1cmF0aW9uTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSUJhc2VDb25maWdbXT4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGggPSBnZXRCYXNlQ29uZmlncygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4geyBpZiAoaCAhPSBudWxsICYmIGguYWJvcnQgIT0gbnVsbCkgaC5hYm9ydCgpOyB9XHJcbiAgICB9LCBbcHJvcHMuTWV0ZXJJZF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhc2VDb25maWdzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSUJhc2VDb25maWc+PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLk1ldGVySWQgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0Jhc2VDb25maWc/cGFyZW50SUQ9JHtwcm9wcy5NZXRlcklkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIHNldENvbmZpZ3VyYXRpb25MaXN0KGRhdGEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPEJhc2VDb25maWcgQmFzZUNvbmZpZ0xpc3Q9e2NvbmZpZ3VyYXRpb25saXN0fSAvPlxyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBCYXNlQ29uZmlnLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xNy8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IEZvcm1TZWxlY3QgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtU2VsZWN0JztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1JbnB1dCc7O1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IFdhcm5pbmcgZnJvbSAnLi9XYXJuaW5nJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IEZpZWxkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkLCBlZGl0VHlwZTogYm9vbGVhbiwgU2V0dGVyOiAocmVjb3JkOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkKSA9PiB2b2lkLCBGaWVsZFZhbHVlPzogUFJDMDAyLklDb25maWdGaWVsZFN0YXR1cyB9XHJcblxyXG5cclxuY29uc3QgQ29uZmlnUnVsZUVkaXQgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IEZpZWxkVHlwZU9wdGlvbnMgPSBbeyBWYWx1ZTogJ3N0cmluZycsIExhYmVsOiAnVGV4dCcgfSwgeyBWYWx1ZTogJ251bWJlcicsIExhYmVsOiAnTnVtYmVyJyB9XTtcclxuICAgIGNvbnN0IE51bWJlckNoZWNrcyA9IFt7IFZhbHVlOiAnPScsIExhYmVsOiAnPScgfSwgeyBWYWx1ZTogJzw+JywgTGFiZWw6ICc8PicgfSwgeyBWYWx1ZTogJz4nLCBMYWJlbDogJz4nIH0sIHsgVmFsdWU6ICc8JywgTGFiZWw6ICc8JyB9XTtcclxuICAgIGNvbnN0IFRleHRDaGVja3MgPSBbeyBWYWx1ZTogJz0nLCBMYWJlbDogJz0nIH0sIHsgVmFsdWU6ICc8PicsIExhYmVsOiAnPD4nIH0sIHsgVmFsdWU6ICdJTicsIExhYmVsOiAnSW4nIH1dO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgeyhwcm9wcy5GaWVsZCA9PSB1bmRlZmluZWQgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLkZpZWxkVmFsdWUgIT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkU3RhdHVzPiBSZWNvcmQ9e3Byb3BzLkZpZWxkVmFsdWV9IEZpZWxkPXsnVmFsdWUnfSBTZXR0ZXI9eygpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IExhYmVsPXsnQ3VycmVudCBWYWx1ZSd9IERpc2FibGVkPXshcHJvcHMuZWRpdFR5cGV9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNlbGVjdDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e3Byb3BzLkZpZWxkfSBGaWVsZD17J0ZpZWxkVHlwZSd9IE9wdGlvbnM9e0ZpZWxkVHlwZU9wdGlvbnN9IExhYmVsPXsnRmllbGQgVHlwZSd9IERpc2FibGVkPXshcHJvcHMuZWRpdFR5cGV9IFNldHRlcj17KHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLkZpZWxkVHlwZSAhPT0gcHJvcHMuRmllbGQuRmllbGRUeXBlICYmIHJlY29yZC5Db21wYXJpc29uICE9ICc8PicgJiYgcmVjb3JkLkNvbXBhcmlzb24gIT0gJz0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLkNvbXBhcmlzb24gPSAnPSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcihyZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e3Byb3BzLkZpZWxkfSBGaWVsZD17J05hbWUnfSBTZXR0ZXI9eygpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IExhYmVsPXsnQ3VycmVudCBSdWxlJ30gRGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TZWxlY3Q8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydDb21wYXJpc29uJ30gT3B0aW9ucz17KHByb3BzLkZpZWxkLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyA/IE51bWJlckNoZWNrcyA6IFRleHRDaGVja3MpfSBMYWJlbD17Jyd9IERpc2FibGVkPXtmYWxzZX0gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy5GaWVsZC5Db21wYXJpc29uID09ICdJTicgPyA8TXVsdGlJbnB1dEZpZWxkIGRhdGE9e3Byb3BzLkZpZWxkfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgcHJvcHMuU2V0dGVyKHJlY29yZCkgfX0gLz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydWYWx1ZSd9IFNldHRlcj17KHJlY29yZCkgPT4geyBwcm9wcy5TZXR0ZXIocmVjb3JkKSB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gTGFiZWw9eycnfSBEaXNhYmxlZD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPilcclxufVxyXG5cclxuY29uc3QgTXVsdGlJbnB1dEZpZWxkID0gKHByb3BzOiB7IGRhdGE6IFBSQzAwMi5JQ29uZmlnRmllbGQsIFNldHRlcjogKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbbGlzdFZhbHVlcywgc2V0TGlzdFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxzdHJpbmc+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRMaXN0VmFsdWVzKHByb3BzLmRhdGEuVmFsdWUuc3BsaXQoJzsnKSlcclxuICAgIH0sIFtwcm9wcy5kYXRhXSlcclxuXHJcbiAgICBmdW5jdGlvbiBTZXQoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgIGxzdFtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgIHByb3BzLlNldHRlcihyZWMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQWRkTmV3KCkge1xyXG4gICAgICAgIGxldCByZWMgPSBfLmNsb25lRGVlcChwcm9wcy5kYXRhKTtcclxuICAgICAgICBsZXQgbHN0ID0gXy5jbG9uZShsaXN0VmFsdWVzKTtcclxuICAgICAgICBsc3QucHVzaCgocHJvcHMuZGF0YS5GaWVsZFR5cGUgPT0gJ3N0cmluZyc/ICdWYWx1ZScgOiAnMCcpKVxyXG4gICAgICAgIHJlYy5WYWx1ZSA9IGxzdC5qb2luKCc7Jyk7XHJcbiAgICAgICAgcHJvcHMuU2V0dGVyKHJlYylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcclxuICAgICAgICBsZXQgcmVjID0gXy5jbG9uZURlZXAocHJvcHMuZGF0YSk7XHJcbiAgICAgICAgbGV0IGxzdCA9IF8uY2xvbmUobGlzdFZhbHVlcyk7XHJcbiAgICAgICAgbHN0LnNwbGljZShpbmRleCwxKVxyXG4gICAgICAgIHJlYy5WYWx1ZSA9IGxzdC5qb2luKCc7Jyk7XHJcbiAgICAgICAgcHJvcHMuU2V0dGVyKHJlYylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICB7bGlzdFZhbHVlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ID09IDAgPyA8bGFiZWw+VmFsdWVzPC9sYWJlbD4gOiBudWxsfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhldnQpID0+IHsgU2V0KGluZGV4LCBldnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZykgfX0gdmFsdWU9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiBBZGROZXcoKX0+IEFkZCA8L2J1dHRvbj5cclxuICAgIDwvPilcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgQ29uZmlnUnVsZUVkaXQ7XHJcbiAgICBcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1hbnVhbEFjdGlvbi50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTgvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybVNlbGVjdCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnOztcclxuaW1wb3J0IHsgUFJDMDAyfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuaW1wb3J0IHsgSGFzaCB9IGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcclxuaW1wb3J0IFdhcm5pbmcgZnJvbSAnLi9XYXJuaW5nJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG50eXBlIEFjdGlvbiA9ICdBY2tub3dsZWRnZScgfCAnUmV2aWV3JyB8ICdOb3RlJyB8ICdDcmVhdGUgUmVjb3JkJyB8ICdDcmVhdGUgUkFQJ1xyXG5pbnRlcmZhY2UgSVByb3BzIHsgQWN0aW9uOiAoKSA9PiB2b2lkLCBSZWNvcmRJZD86IG51bWJlciwgTWV0ZXJJZD86IG51bWJlciwgc3RhdGU6IFBSQzAwMi5JU3RhdHVzfVxyXG5cclxuXHJcbmNvbnN0IE1hbnVhbEFjdGlvbiA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICAgIGNvbnN0IFtUb2Zmc2V0LCBzZXRUb2Zmc2V0XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SWQoKSB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuICdOb3RlJ1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdBY2tub3dsZWRnZSdcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ1Jldmlld2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdSZXZpZXcnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSQVAgU3VibWl0dGVkJylcclxuICAgICAgICAgICAgcmV0dXJuICdSQVAnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdDb21wbGlhbmNlIElzc3VlJylcclxuICAgICAgICAgICAgcmV0dXJuICdDcmVhdGVSZWNvcmQnXHJcbiAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuICdBZGQgQ29tcGxpYW5jZSBOb3RlJ1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdBY2tub3dsZWRnZSBBbGVydCdcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ1Jldmlld2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdSZXZpZXcgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSQVAgU3VibWl0dGVkJylcclxuICAgICAgICAgICAgcmV0dXJuICdDcmVhdGUgUmVtZWRpYWwgQWN0aW9uIFBsYW4nXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdDb21wbGlhbmNlIElzc3VlJylcclxuICAgICAgICAgICAgcmV0dXJuICdTdWJtaXR0IENvbXBsaWFuY2UgSXNzdWUnXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJ0bigpIHtcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gJ0FkZCBOb3RlJ1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQWNrbm93bGVkZ2VkJylcclxuICAgICAgICAgICAgcmV0dXJuICdBY2tub3dsZWRnZWQgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSZXZpZXdlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnUmV2aWV3ZWQgQWxlcnQnXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdSQVAgU3VibWl0dGVkJylcclxuICAgICAgICAgICAgcmV0dXJuICdDcmVhdGUgUmVtZWRpYWwgQWN0aW9uIFBsYW4nXHJcbiAgICAgICAgaWYgKHByb3BzLnN0YXRlLkRlc2NyaXB0aW9uID09ICdDb21wbGlhbmNlIElzc3VlJylcclxuICAgICAgICAgICAgcmV0dXJuICdTdWJtaXR0J1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlybSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN1Ym1pdHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAoJCgnIycgKyBnZXRJZCgpICsgJy13YXJuaW5nJykgYXMgYW55KS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXR0KCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5SZWNvcmRJZCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRSZWNvcmQoKTtcclxuICAgICAgICBpZiAocHJvcHMuTWV0ZXJJZCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHN1Ym1pdHRNZXRlcigpXHJcblxyXG4gICAgICAgIHNldE5vdGUoXCJcIik7XHJcbiAgICAgICAgc2V0VG9mZnNldCgwKTtcclxuICAgICAgICAoJCgnIycgKyBnZXRJZCgpKSBhcyBhbnkpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0dFJlY29yZCgpIHtcclxuICAgICAgICBsZXQgYWN0aW9uID0geyBOb3RlOiBub3RlLCBTdGF0ZUlkOiBudWxsLCBSZWNvcmRJZDogcHJvcHMuUmVjb3JkSWQgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGFjdGlvbi5TdGF0ZUlkID0gcHJvcHMuc3RhdGUuSUQ7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9BY3Rpb24vQWRkYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShhY3Rpb24gYXMgUFJDMDAyLklBY3Rpb24pLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHByb3BzLkFjdGlvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdHRNZXRlcigpIHtcclxuICAgICAgICBpZiAocHJvcHMuc3RhdGUuRGVzY3JpcHRpb24gPT0gJ0NvbXBsaWFuY2UgSXNzdWUnKVxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlUmVjb3JkL0FkZGAsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IE1ldGVySWQ6IHByb3BzLk1ldGVySWQsIFRpbWVyT2Zmc2V0OiBUb2Zmc2V0LCBTdGF0dXM6IHByb3BzLnN0YXRlLklELCBOb3RlOiBub3RlIH0pLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSA9PiBoaXN0b3J5LmdvKDApKSlcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0NvbXBsaWFuY2VNZXRlci9SQVBTdWJtaXR0YCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgbWV0ZXJJZDogcHJvcHMuTWV0ZXJJZCwgTm90ZTogbm90ZSB9KSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEgPT4gaGlzdG9yeS5nbygwKSkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsIElkPXtnZXRJZCgpfSBUaXRsZT17Z2V0VGl0bGUoKX0gQ29uZmlybT17Y29uZmlybX0gY29udGVudD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnN0YXRlICE9IHVuZGVmaW5lZCAmJiBwcm9wcy5zdGF0ZS5EZXNjcmlwdGlvbiA9PSAnQ29tcGxpYW5jZSBJc3N1ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm90ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9ezR9IHZhbHVlPXtub3RlfSBvbkNoYW5nZT17KGUpID0+IHNldE5vdGUoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRheXMgb3V0IG9mIENvbXBsaWFuY2U6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPXsnbnVtYmVyJ30gdmFsdWU9e1RvZmZzZXR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9mZnNldChwYXJzZUludCgoZS50YXJnZXQgYXMgYW55KS52YWx1ZSBhcyBzdHJpbmcpKX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm90ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcm93cz17NH0gdmFsdWU9e25vdGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZSgoZS50YXJnZXQgYXMgYW55KS52YWx1ZSl9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9fSBQb3NMYWJlbD17Z2V0QnRuKCl9IE5lZ0xhYmVsPXsnQ2FuY2VsJ30gQ2xvc2U9eygpID0+IHsgc2V0Tm90ZSgnJyk7IHNldFRvZmZzZXQoMCk7IHJldHVybiB0cnVlOyB9fSAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuc3RhdGUgIT0gdW5kZWZpbmVkID8gPFdhcm5pbmcgSWQ9e2dldElkKCkgKyAnLXdhcm5pbmcnfSBUaXRsZT17J1dhcm5pbmcnfSBDb250ZW50PXsnVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUuIEl0IHdpbGwgY3JlYXRlIGEgcGVybWFuZW50IGNvbXBsaWFuY2UgcmVjb3JkLid9IENvbmZpcm09eydQcm9jZWVkJ30gRGVueT17J0NhbmNlbCd9IEFjdGlvbj17KHJlc3VsdCkgPT4geyBpZiAocmVzdWx0KSBzdWJtaXR0KCk7IH19IC8+IDogbnVsbH1cclxuICAgICAgICA8Lz5cclxuICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFudWFsQWN0aW9uO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEJhc2VDb25maWcudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE3LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgRm9ybVNlbGVjdCBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL0Zvcm1TZWxlY3QnO1xyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUlucHV0Jzs7XHJcbmltcG9ydCB7IFBSQzAwMn0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IEhhc2ggfSBmcm9tICdjcnlwdG8nO1xyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgY29udGVudDogKCkgPT4gSlNYLkVsZW1lbnQsIFRpdGxlOiBzdHJpbmcsIElkOiBzdHJpbmcsIFBvc0xhYmVsPzogc3RyaW5nLCBOZWdMYWJlbD86IHN0cmluZywgQ2xvc2U/OiAoKSA9PiBib29sZWFuLCBDb25maXJtPzogKCkgPT4gYm9vbGVhbiwgQ2FuY2VsPzogKCkgPT4gYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIgfVxyXG5cclxuXHJcbmNvbnN0IE1vZGFsID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gQ29uZmlybSgpIHtcclxuICAgICAgICBpZiAocHJvcHMuQ29uZmlybSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLkNvbmZpcm0oKSlcclxuICAgICAgICAgICAgICAgICgkKCcjJyArIHByb3BzLklkKSBhcyBhbnkpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgKCQoJyMnICsgcHJvcHMuSWQpIGFzIGFueSkubW9kYWwoJ2hpZGUnKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIENsb3NlKCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5DbG9zZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLkNsb3NlKCkpXHJcbiAgICAgICAgICAgICAgICAoJCgnIycgKyBwcm9wcy5JZCkgYXMgYW55KS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICgkKCcjJyArIHByb3BzLklkKSBhcyBhbnkpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQ2FuY2VsKCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5DYW5jZWwgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5DYW5jZWwoKSlcclxuICAgICAgICAgICAgICAgICgkKCcjJyArIHByb3BzLklkKSBhcyBhbnkpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuQ2xvc2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5DbG9zZSgpKVxyXG4gICAgICAgICAgICAgICAgKCQoJyMnICsgcHJvcHMuSWQpIGFzIGFueSkubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICgkKCcjJyArIHByb3BzLklkKSBhcyBhbnkpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9e3Byb3BzLklkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1vZGFsLWRpYWxvZ1wiICsgKHByb3BzLndpZHRoID09IHVuZGVmaW5lZCA/ICcgbW9kYWwtbGcnIDogJycpfSBzdHlsZT17KHByb3BzLndpZHRoID09IHVuZGVmaW5lZCA/IHt9IDogeyB3aWR0aDogcHJvcHMud2lkdGgsIG1heFdpZHRoOiAnZml0LWNvbnRlbnQnIH0pfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPntwcm9wcy5UaXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5DbG9zZSAhPSB1bmRlZmluZWQgfHwgcHJvcHMuQ2FuY2VsICE9IHVuZGVmaW5lZCA/IDwgYnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eygpID0+IENhbmNlbCgpfT4mdGltZXM7PC9idXR0b24+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNvbnRlbnQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuUG9zTGFiZWwgPT0gdW5kZWZpbmVkID8gbnVsbCA6IDwgYnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtDb25maXJtfT57cHJvcHMuUG9zTGFiZWx9PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5OZWdMYWJlbCA9PSB1bmRlZmluZWQgPyBudWxsIDogPCBidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17Q2xvc2V9Pntwcm9wcy5OZWdMYWJlbH08L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgV2FybmluZy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMjMvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBUaXRsZTogc3RyaW5nLCBDb250ZW50OiBzdHJpbmcsIENvbmZpcm06IHN0cmluZywgQWN0aW9uOiAocmVzdWx0OiBib29sZWFuKSA9PiB2b2lkLCBJZDogc3RyaW5nLCBEZW55Pzogc3RyaW5nIH1cclxuXHJcblxyXG5jb25zdCBXYXJuaW5nID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcbiAgIFxyXG4gIFxyXG4gICAgZnVuY3Rpb24gY29uZmlybVdhcm5pbmcoKSB7XHJcbiAgICAgICAgKCQoJyMnICsgcHJvcHMuSWQpIGFzIGFueSkubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICBwcm9wcy5BY3Rpb24odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FuY2VsV2FybmluZygpIHtcclxuICAgICAgICAoJCgnIycgKyBwcm9wcy5JZCkgYXMgYW55KS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgIHByb3BzLkFjdGlvbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9e3Byb3BzLklkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3Byb3BzLlRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9wcy5Db250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoKSA9PiBjb25maXJtV2FybmluZygpfT57cHJvcHMuQ29uZmlybX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLkRlbnkgPT0gdW5kZWZpbmVkID8gbnVsbCA6IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgIG9uQ2xpY2s9eygpID0+IGNhbmNlbFdhcm5pbmcoKSB9Pntwcm9wcy5EZW55fTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2FybmluZztcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEb3dsb2FkRmlsZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTAvMjcvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybVNlbGVjdCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnOztcclxuaW1wb3J0IHsgUFJDMDAyfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgTWV0ZXJJZDogbnVtYmVyIH1cclxuaW50ZXJmYWNlIElGaWxlIHsgSUQ6IG51bWJlciwgRmlsZU5hbWU6IHN0cmluZyB9XHJcblxyXG5jb25zdCBEb3dsb2FkRmlsZXMgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SUZpbGU+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gZ2V0RmlsZXMoKTtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUgIT0gbnVsbCAmJiBoYW5kbGUuYWJvcnQgIT0gbnVsbCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9LCBbcHJvcHNdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGaWxlcygpOiBKUXVlcnkuanFYSFI8QXJyYXk8SUZpbGU+PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLk1ldGVySWQgPT0gLTEgfHwgcHJvcHMuTWV0ZXJJZCA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9HZXRGaWxlcy8ke3Byb3BzLk1ldGVySWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxJRmlsZT4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICBzZXRGaWxlTGlzdChkYXRhKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlPElGaWxlPiBcclxuICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGaWxlTmFtZScsIGxhYmVsOiAnRmlsZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICdUeXBlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0Rvd2xvYWRGaWxlLyR7aXRlbS5JRH1gKX0+IERvd25sb2FkIDwvYnV0dG9uPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2ZpbGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9eydGaWxlTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvd2xvYWRGaWxlcztcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNZXRlckRldGFpbC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMDQvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybVNlbGVjdCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnO1xyXG5pbXBvcnQgRm9ybUNoZWNrQm94IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUNoZWNrQm94JztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCBCYXNlQ29uZmlnIGZyb20gJy4uL0NvbW1vbi9CYXNlQ29uZmlnJztcclxuaW1wb3J0IE1hbnVhbEFjdGlvbiBmcm9tICcuLi9Db21tb24vTWFudWFsQWN0aW9uJztcclxuaW1wb3J0IE5ld01ldGVyV2l6emFyZCBmcm9tICcuLi9NZXRlcldpenphcmQvTmV3TWV0ZXJXaXp6YXJkJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL0NvbW1vbi9Nb2RhbCc7XHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJy4uL0NvbW1vbi9XYXJuaW5nJztcclxuaW1wb3J0IERvd2xvYWRGaWxlcyBmcm9tICcuL0Rvd2xvYWRGaWxlJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHsgTWV0ZXJJRDogbnVtYmVyLCBzdGF0ZUxpc3Q6IEFycmF5PFBSQzAwMi5JU3RhdHVzPiB9XHJcblxyXG5jb25zdCBNZXRlckRldGFpbCA9IChwcm9wczogSVByb3BzKSA9PiB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbYmFzZUNvbmZpZ0xpc3QsIHNldEJhc2VDb25maWdMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PFBSQzAwMi5JQmFzZUNvbmZpZz4+KFtdKTtcclxuICAgIGNvbnN0IFttZXRlciwgc2V0TWV0ZXJdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklNZXRlcj4odW5kZWZpbmVkKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVCYXNlQ29uZmlnTGlzdCA9IGdldEJhc2VDb25maWdzKHByb3BzLk1ldGVySUQpO1xyXG4gICAgICAgIGxldCBoYW5kbGVNZXRlciA9IGdldE1ldGVyKHByb3BzLk1ldGVySUQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlQmFzZUNvbmZpZ0xpc3QgIT0gbnVsbCAmJiBoYW5kbGVCYXNlQ29uZmlnTGlzdC5hYm9ydCAhPSBudWxsKSBoYW5kbGVCYXNlQ29uZmlnTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlTWV0ZXIgIT0gbnVsbCAmJiBoYW5kbGVNZXRlci5hYm9ydCAhPSBudWxsKSBoYW5kbGVNZXRlci5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5NZXRlcklEXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWV0ZXIoaWQ6IG51bWJlcik6IEpRdWVyeS5qcVhIUjxQUkMwMDIuSU1ldGVyPiB7XHJcbiAgICAgICAgaWYgKGlkID09IC0xKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZU1ldGVyL09uZS8ke2lkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogUFJDMDAyLklNZXRlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICBzZXRNZXRlcihkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJhc2VDb25maWdzKGlkOiBudW1iZXIpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklCYXNlQ29uZmlnPj4ge1xyXG4gICAgICAgIGlmIChpZCA9PSAtMSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvUFJDMDAyL0Jhc2VDb25maWc/cGFyZW50SUQ9JHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JQmFzZUNvbmZpZz4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgc2V0QmFzZUNvbmZpZ0xpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgbGV0IHN0YXQgPSAobWV0ZXIgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcHJvcHMuc3RhdGVMaXN0LmZpbmQocyA9PiBzLklEID09IG1ldGVyLlN0YXR1c0lEKSk7XHJcbiAgICBsZXQgbGJsU3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjMDAwMDAwJyA6IHN0YXQuQ29sb3IpLFxyXG4gICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvcjogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyMwMDAwMDAnIDogc3RhdC5UZXh0Q29sb3IpLFxyXG4gICAgICAgIGhlaWdodDogJzI1cHgnXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIEFjdGl2YXRlTWV0ZXIoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZU1ldGVyL0FjdGl2YXRlLyR7bWV0ZXIuSUR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhpc3RvcnkuZ28oMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge21ldGVyICE9IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLmxibFN0eWxlLCBtYXJnaW5Ub3A6ICc1MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXRlciBub3QgaW4gQ29tcGxpYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICd4eC1sYXJnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogKG1ldGVyLlRpbWVyIDwgMzAgPyAnIzI4YTc0NScgOiAobWV0ZXIuVGltZXIgPCA2MCA/ICcjZmZjMTA3JyA6ICcjZGMzNTQ1JyApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAobWV0ZXIuVGltZXIgPCAzMCA/ICcjZmZmZmZmJyA6IChtZXRlci5UaW1lciA8IDYwID8gJyMyMTI1MjknIDogJyNmZmZmZmYnKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KG1ldGVyLlN0YXR1cyA9PSAnSW4gQ29tcGxpYW5jZScgPyAwIDogbWV0ZXIuVGltZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bGJsU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERheXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeyhtZXRlciAhPSB1bmRlZmluZWQpID8gXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWV0ZXIuUmV2aWV3ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiAoJCgnI0NyZWF0ZVJlY29yZCcpIGFzIGFueSkubW9kYWwoJ3Nob3cnKX0gPiBBZGQgQ29tcGxpYW5jZSBJc3N1ZSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWJsb2NrXCIgb25DbGljaz17KCkgPT4gKCQoJyNSQVAnKSBhcyBhbnkpLm1vZGFsKCdzaG93Jyl9ID4gU3VibWl0dCBSZW1lZGlhbCBBY3Rpb24gUGxhbiA8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYW51YWxBY3Rpb24gTWV0ZXJJZD17cHJvcHMuTWV0ZXJJRH0gc3RhdGU9e3Byb3BzLnN0YXRlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5EZXNjcmlwdGlvbiA9PT0gJ0NvbXBsaWFuY2UgSXNzdWUnKX0gQWN0aW9uPXsoKSA9PiB7IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hbnVhbEFjdGlvbiBNZXRlcklkPXtwcm9wcy5NZXRlcklEfSBzdGF0ZT17cHJvcHMuc3RhdGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLkRlc2NyaXB0aW9uID09PSAnUkFQIFN1Ym1pdHRlZCcpfSBBY3Rpb249eygpID0+IHsgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPiA6IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1ibG9ja1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNBY3RpdmF0ZWRNb25pdG9yaW5nXCI+IE1ldGVyIFJldmlld2VkIGZvciBDb21wbGlhbmNlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXYXJuaW5nIElkPXsnQWN0aXZhdGVkTW9uaXRvcmluZyd9IFRpdGxlPXsnV2FybmluZyd9IENvbnRlbnQ9eydUaGlzIHdpbGwgYWN0aXZhdGUgdGhlIE1pTUQgUFJDMDAyIG1vbml0b3JpbmcgZm9yIHRoaXMgbWV0ZXIuIFBsZWFzZSBSZXZpZXcgdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiBiZWZvcmUgcHJvY2VlZGluZyd9IENvbmZpcm09eydQcm9jZWVkJ30gRGVueT17J0NhbmNlbCd9IEFjdGlvbj17KHJlc3VsdCkgPT4geyBpZiAocmVzdWx0KSBBY3RpdmF0ZU1ldGVyKCk7IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz59ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGVyRGV0YWlsO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbmZpZ3VyYXRpb25CeU1ldGVyLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8yMi8yMDE5IC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IFJlY29yZExpc3QgZnJvbSAnLi9SZWNvcmRMaXN0JztcclxuaW1wb3J0IE1ldGVyRGV0YWlsIGZyb20gJy4vTWV0ZXJEZXRhaWwnO1xyXG5pbXBvcnQgeyBQUkMwMDIgfSBmcm9tICcuLi9Db21wbGlhbmNlTW9kZWxzJztcclxuXHJcbmltcG9ydCB7IE1vZGFsLCBTZWFyY2gsIFNlYXJjaEJhciB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCB7IFRvb2xUaXAgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuaW1wb3J0IERvd2xvYWRGaWxlcyBmcm9tICcuL0Rvd2xvYWRGaWxlJztcclxuaW1wb3J0IHsgQmFzZUNvbmZpZ1dpbmRvdyB9IGZyb20gJy4uL0NvbW1vbi9CYXNlQ29uZmlnJztcclxuaW1wb3J0IE5ld01ldGVyV2l6emFyZCBmcm9tICcuLi9NZXRlcldpenphcmQvTmV3TWV0ZXJXaXp6YXJkJztcclxuXHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5jb25zdCBzdGFuZGFyZFNlYXJjaDogU2VhcmNoLklGaWVsZDxNaU1ELk1ldGVyPltdID0gW1xyXG4gICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdOYW1lJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnQXNzZXRLZXknLCBsYWJlbDogJ0Fzc2V0IEtleScsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ01ha2UnLCBsYWJlbDogJ01ha2UnLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdNb2RlbCcsIGxhYmVsOiAnTW9kZWwnLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdTdGF0dXMnLCBsYWJlbDogJ0NvbXBsaWFuY2UgU3RhdHVzJywgdHlwZTogJ2VudW0nLCBlbnVtOiBbXSB9XHJcbl07XHJcblxyXG5jb25zdCBQUkMwMDJNZXRlck92ZXJ2aWV3UGFnZSA9IChwcm9wczogeyBSb2xlczogQXJyYXk8TWlNRC5TZWN1cml0eVJvbGVOYW1lPiwgTWV0ZXJJRDogbnVtYmVyIH0pID0+IHtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IFttZXRlckZpbHRlcnMsIHNldE1ldGVyRmlsdGVyc10gPSBSZWFjdC51c2VTdGF0ZTxTZWFyY2guSUZpbHRlcjxQUkMwMDIuSU1ldGVyPltdPihbXSk7XHJcbiAgICBjb25zdCBbc3RhdHVzTGlzdCwgc2V0U3RhdHVzTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSVN0YXR1cz4+KFtdKTtcclxuXHJcbiAgICBjb25zdCBbbWV0ZXJTb3J0LCBzZXRNZXRlclNvcnRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgUFJDMDAyLklNZXRlcj4oXCJTdGF0dXNcIik7XHJcbiAgICBjb25zdCBbbWV0ZXJBc2MsIHNldE1ldGVyQXNjXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFttZXRlckxpc3QsIHNldE1ldGVyTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSU1ldGVyPj4oW10pXHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkTWV0ZXIsIHNldFNlbGVjdGVkTWV0ZXJdID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklNZXRlcj4obnVsbCk7XHJcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IFJlYWN0LnVzZVN0YXRlPCgnTm9uZScgfCAnRmlsZXMnIHwgJ0Jhc2VDb25maWcnKT4oJ05vbmUnKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd05ld01ldGVyV2l6YXJkLCBzZXRTaG93TmV3TWV0ZXJXaXphcmRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dCYXNlQ29uZmlnLCBzZXRTaG93QmFzZUNvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0ZpbGVzLCBzZXRTaG93RmlsZXNdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVN0YXR1c0xpc3QgPSBnZXRTdGF0dXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZVN0YXR1c0xpc3QuYWJvcnQgIT0gbnVsbCkgaGFuZGxlU3RhdHVzTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoID0gZ2V0TWV0ZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgaWYgKGggIT0gbnVsbCAmJiBoLmFib3J0ICE9IG51bGwpIGguYWJvcnQoKTsgfVxyXG4gICAgfSwgW21ldGVyU29ydCwgbWV0ZXJBc2MsIG1ldGVyRmlsdGVyc10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gbWV0ZXJMaXN0LmZpbmRJbmRleChtID0+IG0uSUQgPT0gcHJvcHMuTWV0ZXJJRCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZE1ldGVyKG51bGwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRNZXRlcihtZXRlckxpc3RbaW5kZXhdKTtcclxuICAgIH0sIFtwcm9wcy5NZXRlcklELCBtZXRlckxpc3RdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JU3RhdHVzPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlU3RhdGUvTGlzdGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklTdGF0dXM+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN0YXR1c0xpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0TWV0ZXJJRChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCdpbmRleC5jc2h0bWw/bmFtZT1QUkMwMDJPdmVydmlldyZNZXRlcklEPScgKyBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWV0ZXJzKCk6IEpRdWVyeS5qcVhIUjxBcnJheTxQUkMwMDIuSU1ldGVyPj4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZU1ldGVyL1NlYXJjaGFibGVMaXN0YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IFNlYXJjaGVzOiBtZXRlckZpbHRlcnMsIE9yZGVyQnk6IG1ldGVyU29ydCwgQXNjZW5kaW5nOiBtZXRlckFzYyB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8UFJDMDAyLklNZXRlcj4pID0+IHtcclxuICAgICAgICAgICAgc2V0TWV0ZXJMaXN0KGRhdGEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyPFBSQzAwMi5JTWV0ZXI+IFNldEZpbHRlcj17c2V0TWV0ZXJGaWx0ZXJzfSBDb2xsdW1uTGlzdD17c3RhbmRhcmRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q29sbHVtbj17eyBrZXk6ICdOYW1lJywgbGFiZWw6ICdOYW1lJywgdHlwZTogJ3N0cmluZycgfX1cclxuICAgICAgICAgICAgICAgIERpcmVjdGlvbj17J2xlZnQnfSBMYWJlbD17J1NlYXJjaCd9IFdpZHRoPXsnNTAlJ31cclxuICAgICAgICAgICAgICAgIEdldEVudW09eyhzZXRPcHRpb25zLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5rZXkgPT0gJ1N0YXR1cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wdGlvbnMoc3RhdHVzTGlzdC5tYXAoaXRlbSA9PiAoeyBMYWJlbDogaXRlbS5EZXNjcmlwdGlvbiwgVmFsdWU6IGl0ZW0uRGVzY3JpcHRpb24gfSkpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZ1JpZ2h0OiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiYm9yZGVyXCIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJ3LWF1dG9cIiBzdHlsZT17eyBmb250U2l6ZTogJ2xhcmdlJyB9fT5BY3Rpb25zOjwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmV3TWV0ZXJXaXphcmQodHJ1ZSl9PiBBZGQgTmV3IE1ldGVyIHRvIFBSQzAwMiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiArIChzZWxlY3RlZE1ldGVyID09IG51bGwgPyAnIGRpc2FibGVkJyA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPXsnQmFzZUNvbmZpZyd9IG9uQ2xpY2s9eygpID0+IHNldFNob3dCYXNlQ29uZmlnKHNlbGVjdGVkTWV0ZXIgIT0gbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlcignQmFzZUNvbmZpZycpfSBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlcignTm9uZScpfT4gTWV0ZXIgQ29uZmlndXJhdGlvbiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiICsgKHNlbGVjdGVkTWV0ZXIgPT0gbnVsbCA/ICcgZGlzYWJsZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXIoJ0ZpbGVzJyl9IG9uTW91c2VPdXQ9eygpID0+IHNldEhvdmVyKCdOb25lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9vbHRpcD17J0ZpbGVzJ30gb25DbGljaz17KCkgPT4gc2V0U2hvd0ZpbGVzKHNlbGVjdGVkTWV0ZXIgIT0gbnVsbCl9ID4gRG93bmxvYWQgRmlsZXMgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoQmFyPlxyXG4gICAgICAgICAgICA8VG9vbFRpcCBQb3NpdGlvbj17J2JvdHRvbSd9IFNob3c9e2hvdmVyPT0nRmlsZXMnICYmIHNlbGVjdGVkTWV0ZXIgPT0gbnVsbCB9IFRhcmdldD17J0ZpbGVzJ30+XHJcbiAgICAgICAgICAgICAgICA8cD4gQSBNZXRlciBuZWVkcyB0byBiZSBzZWxlY3RlZC48L3A+XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgPFRvb2xUaXAgUG9zaXRpb249eydib3R0b20nfSBTaG93PXtob3ZlciA9PSAnQmFzZUNvbmZpZycgJiYgc2VsZWN0ZWRNZXRlciA9PSBudWxsfSBUYXJnZXQ9eydCYXNlQ29uZmlnJ30+XHJcbiAgICAgICAgICAgICAgICA8cD4gQSBNZXRlciBuZWVkcyB0byBiZSBzZWxlY3RlZC48L3A+XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgPE1vZGFsIFRpdGxlPXsnTWV0ZXIgQmFzZSBDb25maWd1cmF0aW9uJ30gU2hvdz17c2hvd0Jhc2VDb25maWd9IENhbGxCYWNrPXsoY29uZmlybSkgPT4geyBzZXRTaG93QmFzZUNvbmZpZyhmYWxzZSk7IH19ID5cclxuICAgICAgICAgICAgICAgIDxCYXNlQ29uZmlnV2luZG93IE1ldGVySWQ9e3Byb3BzLk1ldGVySUR9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxNb2RhbCBUaXRsZT17J0Rvd25sb2FkIEN1cnJlbnQgQ29uZmlnIEZpbGUnfSBTaG93PXtzaG93RmlsZXN9IENhbGxCYWNrPXsoY29uZmlybSkgPT4geyBzZXRTaG93RmlsZXMoZmFsc2UpOyB9fSA+XHJcbiAgICAgICAgICAgICAgICA8RG93bG9hZEZpbGVzIE1ldGVySWQ9e3Byb3BzLk1ldGVySUR9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxOZXdNZXRlcldpenphcmQgc2hvdz17c2hvd05ld01ldGVyV2l6YXJkfSBzZXRTaG93PXtzZXRTaG93TmV3TWV0ZXJXaXphcmR9IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnY2FsYyggMTAwJSAtIDEzNnB4KScsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxQUkMwMDIuSU1ldGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTWV0ZXInLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01ha2UnLCBsYWJlbDogJ01ha2UnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnU3RhdHVzJywgbGFiZWw6ICdTdGF0dXMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0ID0gc3RhdHVzTGlzdC5maW5kKHMgPT4gcy5JRCA9PT0gaXRlbS5TdGF0dXNJRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjZjhmOWZhJyA6IHN0YXQuQ29sb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAoc3RhdCA9PSB1bmRlZmluZWQgPyAnIzIxMjUyOScgOiBzdGF0LlRleHRDb2xvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4ge2l0ZW0uU3RhdHVzfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e21ldGVyTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17bWV0ZXJTb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXttZXRlckFzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gbWV0ZXJTb3J0KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJBc2MoIW1ldGVyQXNjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlclNvcnQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkKSA9PiB7IHNldE1ldGVySUQoZC5yb3cuSUQpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSA4MHB4KScsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT09IHByb3BzLk1ldGVySUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzUwJScsIGhlaWdodDogJzIwMHB4JywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0ZXJEZXRhaWwgTWV0ZXJJRD17KGlzTmFOKHByb3BzLk1ldGVySUQpID8gLTEgOiBwcm9wcy5NZXRlcklEKX0gc3RhdGVMaXN0PXtzdGF0dXNMaXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVjb3JkTGlzdCBNZXRlcklkPXsoaXNOYU4ocHJvcHMuTWV0ZXJJRCkgPyAtMSA6IHByb3BzLk1ldGVySUQpfSBTdGF0ZUxpc3Q9e3N0YXR1c0xpc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBSQzAwMk1ldGVyT3ZlcnZpZXdQYWdlO1xyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1ldGVyQ2hhbmdlUGFuLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDE5LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8wNC8yMDIwIC0gQy4gTGFja25lclxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnksIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybVNlbGVjdCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnO1xyXG5pbXBvcnQgRm9ybUNoZWNrQm94IGZyb20gJy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybUNoZWNrQm94JztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgeyBNZXRlcklkOiBudW1iZXIsIFN0YXRlTGlzdDogQXJyYXk8UFJDMDAyLklTdGF0dXM+IH1cclxuXHJcbmNvbnN0IFJlY29yZExpc3QgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBbY2hhbmdlTGlzdCwgc2V0Q2hhbmdlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxQUkMwMDIuSVJlY29yZD4+KFtdKTtcclxuICAgIGNvbnN0IFtyZWNvcmRTb3J0LCBzZXRSZWNvcmRTb3J0XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJTdGF0dXNcIik7XHJcbiAgICBjb25zdCBbcmVjb3JkQXNjLCBzZXRSZWNvcmRBc2NdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVJlY29yZExpc3QgPSBnZXRSZWNvcmRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVSZWNvcmRMaXN0ICE9IG51bGwgJiYgaGFuZGxlUmVjb3JkTGlzdC5hYm9ydCAhPSBudWxsKSBoYW5kbGVSZWNvcmRMaXN0LmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmVjb3JkcygpOiBKUXVlcnkuanFYSFI8QXJyYXk8UFJDMDAyLklSZWNvcmQ+PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLk1ldGVySWQgPT0gLTEpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZVJlY29yZD9wYXJlbnRJRD0ke3Byb3BzLk1ldGVySWR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxQUkMwMDIuSVJlY29yZD4pID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hhbmdlTGlzdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7KHByb3BzLk1ldGVySWQgPiAtMSA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdjYWxjKCAxMDAlIC0gMzM2cHgpJywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdTdGF0dXMnLCBsYWJlbDogJ1N0YXR1cycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXQgPSBwcm9wcy5TdGF0ZUxpc3QuZmluZChzID0+IHMuSUQgPT09IGl0ZW0uU3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogKHN0YXQgPT0gdW5kZWZpbmVkID8gJyNmOGY5ZmEnIDogc3RhdC5Db2xvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzM1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IChzdGF0ID09IHVuZGVmaW5lZCA/ICcjMjEyNTI5JyA6IHN0YXQuVGV4dENvbG9yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiB7KHN0YXQgPT0gdW5kZWZpbmVkID8gJycgOiBzdGF0LkRlc2NyaXB0aW9uKX0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgbGFiZWw6ICdMYXN0IFVwZGF0ZWQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IG1vbWVudChpdGVtLlRpbWVzdGFtcCkuZm9ybWF0KFwiTU0vREQvWVkgSEg6bW0gQ1RcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1VzZXInLCBsYWJlbDogJyBCeScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhbmdlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17cmVjb3JkU29ydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17cmVjb3JkQXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaCgnaW5kZXguY3NodG1sP25hbWU9UFJDMDAyQ2hhbmdlJlJlY29yZElEPScgKyBkLnJvdy5JRClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZExpc3Q7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQmFzZUNvbmZpZ1dpbmRvdy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAxOSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMDgvMjAyMCAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZFxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCB7IFBhcnNlSU5JLCBQYXJzZVBBUiB9IGZyb20gJy4vRmlsZVBhcnNlcic7XHJcblxyXG5pbXBvcnQgeyBJbnB1dCwgU2VsZWN0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCBTZWxlY3RUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1NlbGVjdFRhYmxlJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnXHJcbmltcG9ydCBGaWVsZFZhbHVlcyBmcm9tICcuLi9DaGFuZ2VPdmVydmlldy9GaWVsZFZhbHVlcyc7XHJcbmltcG9ydCB7IExvYWRpbmdTY3JlZW4gfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBzZXRFcnJvcjogKGVycm9yOiBzdHJpbmdbXSkgPT4gdm9pZCxcclxuICAgIEJhc2VDb25maWdzOiBNYXA8bnVtYmVyLCBbUFJDMDAyLklCYXNlQ29uZmlnLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW11dPixcclxuICAgIHNldEJhc2VDb25maWc6KGJjOiBNYXA8bnVtYmVyLCBbUFJDMDAyLklCYXNlQ29uZmlnLCBQUkMwMDIuSUNvbmZpZ0ZpZWxkW11dPikgPT4gdm9pZCxcclxuICAgIHNldFN0ZXA6IChzdGVwOiBzdGF0ZSkgPT4gdm9pZCxcclxuICAgIGNvbnQ6IG51bWJlcixcclxuICAgIHJlc2V0OiBudW1iZXJcclxuICAgIHN0ZXA6IHN0YXRlLFxyXG59XHJcblxyXG50eXBlIHN0YXRlID0gJ01ldGVyJyB8ICdCYXNlQ29uZmlnJyB8ICdGaWxlIExvYWQnIHwgJ0VkaXQgRmllbGQnIHwgJ05ldyBCYXNlQ29uZmlnJ1xyXG5pbnRlcmZhY2UgSUNvbmZpZ0ZpbGVGaWVsZCBleHRlbmRzIFBSQzAwMi5JQ29uZmlnRmllbGQgeyBJbmNsdWRlOiBib29sZWFuIH1cclxuXHJcblxyXG5jb25zdCBCYXNlQ29uZmlnV2luZG93ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50Q29uZmlnLCBzZXRDdXJyZW50Q29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4obnVsbCk7XHJcbiAgICBjb25zdCBbbmV3Q29uZmlnLCBzZXROZXdDb25maWddID0gUmVhY3QudXNlU3RhdGU8UFJDMDAyLklCYXNlQ29uZmlnPih7IElEOiAtMSwgTWV0ZXJJZDogLTEsIE5hbWU6ICdBbGwgSU5JIEZpbGVzJywgUGF0dGVybjogJyouaW5pJyB9KVxyXG4gICAgY29uc3QgW2VkaXRGaWVsZCwgc2V0RWRpdEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPFBSQzAwMi5JQ29uZmlnRmllbGQ+KHsgSUQ6IC0xLCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6ICdGaWVsZCcsIFZhbHVlOiAnJyB9KTtcclxuICAgIGNvbnN0IFtuZXdDb25maWdVbmlxLCBzZXROZXdDb25maWdVbmlxXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbZmlsZUZpZWxkcywgc2V0RmlsZUZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxJQ29uZmlnRmlsZUZpZWxkPj4oW10pO1xyXG5cclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdGaWVsZCcpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbc2hvd0xvYWRpbmcsIHNldFNob3dMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5CYXNlQ29uZmlncy5zaXplID09IDApIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudENvbmZpZyhudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2V0Q3VycmVudENvbmZpZyA9PSBudWxsIHx8ICFwcm9wcy5CYXNlQ29uZmlncy5oYXMoY3VycmVudENvbmZpZykpIFxyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q29uZmlnKHByb3BzLkJhc2VDb25maWdzLmtleXMoKS5uZXh0KCkudmFsdWUpICAgICAgXHJcblxyXG4gICAgfSwgW3Byb3BzLkJhc2VDb25maWdzXSlcclxuXHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgIT0gJ0Jhc2VDb25maWcnKVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9XHJcblxyXG4gICAgICAgICQoXCIuY3VzdG9tLWZpbGUtaW5wdXRcIikub24oXCJjaGFuZ2VcIiwgKGV2dDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IChldnQgYXMgUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pLnRhcmdldC52YWx1ZS5zcGxpdChcIlxcXFxcIikucG9wKCk7XHJcbiAgICAgICAgICAgICQoZXZ0LnRhcmdldCkuc2libGluZ3MoXCIuY3VzdG9tLWZpbGUtbGFiZWxcIikuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKS5odG1sKGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgcmVhZFNpbmdsZUZpbGUoKGV2dCBhcyBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiksIGZpbGVOYW1lKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gJChcIi5jdXN0b20tZmlsZS1pbnB1dFwiKS5vZmYoJ2NoYW5nZScpXHJcblxyXG4gICAgfSwgW3Byb3BzLnN0ZXBdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBlcnJvciA9IFtdO1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHByb3BzLkJhc2VDb25maWdzLnNpemUgPT0gMClcclxuICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0F0IGxlYXN0IDEgQmFzZSBDb25maWd1cmF0aW9uIG5lZWRzIHRvIGJlIHNldCB1cC4nKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuQmFzZUNvbmZpZ3Muc2l6ZSA+IDApXHJcbiAgICAgICAgICAgICAgICBbLi4ucHJvcHMuQmFzZUNvbmZpZ3Mua2V5cygpXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5CYXNlQ29uZmlncy5nZXQoaXRlbSlbMV0ubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0F0IGxlYXN0IDEgRmllbGQgbmVlZHMgdG8gYmUgc2V0IHVwIGluIENvbmZpZ3VyYXRpb24gXFwnJyArIChwcm9wcy5CYXNlQ29uZmlncy5nZXQoaXRlbSlbMF0uTmFtZSkgKyAnXFwnJylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdOZXcgQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgaWYgKG5ld0NvbmZpZy5OYW1lID09IG51bGwgfHwgbmV3Q29uZmlnLk5hbWUubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIE5hbWUgaXMgcmVxdWlyZWQuJylcclxuICAgICAgICAgICAgaWYgKG5ld0NvbmZpZy5QYXR0ZXJuID09IG51bGwgfHwgbmV3Q29uZmlnLlBhdHRlcm4ubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIFBhdHRlcm4gaXMgcmVxdWlyZWQgKGUuZy4gKi5pbmkgb3IgKi5wYXIgZm9yIGFsbElOSSBvciBQQVIgRmlsZXMpLicpXHJcbiAgICAgICAgICAgIGlmIChuZXdDb25maWcuTmFtZSAhPSBudWxsICYmICFuZXdDb25maWdVbmlxKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnTmFtZSBuZWVkcyB0byBiZSB1bmlxdWUuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0VkaXQgRmllbGQnKSB7XHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuTmFtZSA9PSBudWxsIHx8IGVkaXRGaWVsZC5OYW1lLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnQSBGaWVsZCBuYW1lIGlzIHJlcXVpcmVkLicpXHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuVmFsdWUgPT0gbnVsbCB8fCBlZGl0RmllbGQuVmFsdWUubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICBlcnJvci5wdXNoKCdBIFZhbHVlIGlzIHJlcXVpcmVkLicpXHJcbiAgICAgICAgICAgIGlmIChlZGl0RmllbGQuVmFsdWUgIT0gbnVsbCAmJiAoZWRpdEZpZWxkLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyAmJiBpc05hTihwYXJzZUZsb2F0KGVkaXRGaWVsZC5WYWx1ZSkpKSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnB1c2goJ0EgVmFsdWUgZm9yIGEgTnVtYmVyIEZpZWxkIG5lZWRzIHRvIGJlIG51bWVyaWMuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0ZpbGUgTG9hZCcpIHtcclxuICAgICAgICAgICAgaWYgKCFmaWxlRmllbGRzLnNvbWUoaXRlbSA9PiBpdGVtLkluY2x1ZGUpKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IucHVzaCgnQXQgbGVhc3Qgb25lIEZpZWxkIG5lZWRzIHRvIGJlIHNlbGVjdGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5zZXRFcnJvcihlcnJvcilcclxuICAgIH0sIFtwcm9wcy5zdGVwLCBwcm9wcy5CYXNlQ29uZmlncywgbmV3Q29uZmlnLCBuZXdDb25maWdVbmlxLCBlZGl0RmllbGQsIGZpbGVGaWVsZHNdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFsuLi5wcm9wcy5CYXNlQ29uZmlncy52YWx1ZXMoKV0ubWFwKGkgPT4gaVswXSkuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5OYW1lID09IG5ld0NvbmZpZy5OYW1lKSA9PSAtMSlcclxuICAgICAgICAgICAgc2V0TmV3Q29uZmlnVW5pcSh0cnVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZ1VuaXEoZmFsc2UpO1xyXG4gICAgfSwgW3Byb3BzLkJhc2VDb25maWdzLCBuZXdDb25maWddKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdOZXcgQmFzZUNvbmZpZycpXHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZyh7IElEOiAtMSwgTWV0ZXJJZDogLTEsIE5hbWU6ICdCYXNlIENvbmZpZyBOYW1lJywgUGF0dGVybjogJyouaW5pJyB9KTtcclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnRWRpdCBGaWVsZCcpXHJcbiAgICAgICAgICAgIHNldEVkaXRGaWVsZCh7XHJcbiAgICAgICAgICAgICAgICBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTonRmllbGQnLCBWYWx1ZTonJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdGaWxlIExvYWQnKVxyXG4gICAgICAgICAgICBzZXRGaWxlRmllbGRzKFtdKTtcclxuICAgICAgICBpZiAocHJvcHMuc3RlcCA9PSAnQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0U3RlcCgnTWV0ZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdCYXNlQ29uZmlnJyk7XHJcbiAgICB9LCBbcHJvcHMucmVzZXRdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKHByb3BzLkJhc2VDb25maWdzKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gKHVwZGF0ZWQuc2l6ZSA+IDA/IE1hdGgubWF4KC4uLnVwZGF0ZWQua2V5cygpKSA6IDApKyAxO1xyXG4gICAgICAgICAgICB1cGRhdGVkLnNldChpZCwgW3sgLi4ubmV3Q29uZmlnLCBJRDogaWR9LFtdXSk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEJhc2VDb25maWcodXBkYXRlZCk7XHJcbiAgICAgICAgICAgIHNldE5ld0NvbmZpZyh7IElEOiAtMSwgTWV0ZXJJZDogLTEsIE5hbWU6ICdCYXNlIENvbmZpZyBOYW1lJywgUGF0dGVybjogJyouaW5pJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLnN0ZXAgPT0gJ0VkaXQgRmllbGQnICYmIGVkaXRGaWVsZC5JRCA9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IF8uY2xvbmVEZWVwKHByb3BzLkJhc2VDb25maWdzKTtcclxuICAgICAgICAgICAgbGV0IGNvbmcgPSB1cGRhdGVkLmdldChjdXJyZW50Q29uZmlnKVxyXG4gICAgICAgICAgICBsZXQgaWQgPSAoY29uZ1sxXS5sZW5ndGggPiAwID8gTWF0aC5tYXgoLi4uY29uZ1sxXS5tYXAoaXRlbSA9PiBpdGVtLklEKSkgKyAxIDogMSk7XHJcbiAgICAgICAgICAgIGNvbmdbMV0gPSBbLi4uY29uZ1sxXSwgeyAuLi5lZGl0RmllbGQsIElEOiBpZCB9XTtcclxuICAgICAgICAgICAgdXBkYXRlZC5zZXQoY3VycmVudENvbmZpZywgY29uZyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwcm9wcy5zZXRCYXNlQ29uZmlnKHVwZGF0ZWQpO1xyXG4gICAgICAgICAgICBzZXRFZGl0RmllbGQoeyBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdFZGl0IEZpZWxkJyAmJiBlZGl0RmllbGQuSUQgIT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBfLmNsb25lRGVlcChwcm9wcy5CYXNlQ29uZmlncyk7XHJcbiAgICAgICAgICAgIGxldCBjb25nID0gdXBkYXRlZC5nZXQoY3VycmVudENvbmZpZylcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gY29uZ1sxXS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLklEID09IGVkaXRGaWVsZC5JRClcclxuICAgICAgICAgICAgY29uZ1sxXVtpbmRleF0gPSBlZGl0RmllbGQ7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQuc2V0KGN1cnJlbnRDb25maWcsIGNvbmcpO1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRCYXNlQ29uZmlnKHVwZGF0ZWQpO1xyXG4gICAgICAgICAgICBzZXRFZGl0RmllbGQoeyBJRDogLTEsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogJ0ZpZWxkJywgVmFsdWU6ICcnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5zdGVwID09ICdGaWxlIExvYWQnKSB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gXy5jbG9uZURlZXAocHJvcHMuQmFzZUNvbmZpZ3MpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSAodXBkYXRlZC5zaXplID4gMCA/IE1hdGgubWF4KC4uLnVwZGF0ZWQua2V5cygpKSA6IDApICsgMTtcclxuICAgICAgICAgICAgbGV0IGZpZWxkcyA9IGZpbGVGaWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5JbmNsdWRlKS5tYXAoKGl0ZW0saW5kZXgpID0+ICh7IElEOiBpbmRleCArIDEsIEJhc2VDb25maWdJZDogaWQsIFZhbHVlOiBpdGVtLlZhbHVlLCBOYW1lOiBpdGVtLk5hbWUsIENvbXBhcmlzb246IGl0ZW0uQ29tcGFyaXNvbiwgRmllbGRUeXBlOiBpdGVtLkZpZWxkVHlwZSB9KSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQuc2V0KGlkLCBbeyBOYW1lOiBmaWxlTmFtZSwgUGF0dGVybjogZmlsZU5hbWUsIE1ldGVySWQ6IC0xLCBJRDogaWQgfSwgZmllbGRzXSk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldEJhc2VDb25maWcodXBkYXRlZCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVGaWVsZHMoW10pO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50Q29uZmlnKGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdCYXNlQ29uZmlnJyk7XHJcbiAgICB9LCBbcHJvcHMuY29udF0pXHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb25maWcgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCB1cGRhdGVkID0gcHJvcHMuQmFzZUNvbmZpZ3MuZ2V0KGN1cnJlbnRDb25maWcpO1xyXG4gICAgICAgIGxldCBuY29uZmlnID0gXy5jbG9uZURlZXAocHJvcHMuQmFzZUNvbmZpZ3MpO1xyXG4gICAgICAgIG5jb25maWcuc2V0KGN1cnJlbnRDb25maWcsIFt1cGRhdGVkWzBdLCBfLm9yZGVyQnkodXBkYXRlZFsxXSwgW3NvcnRGaWVsZF0sIFsoIWFzY2VuZGluZyA/IFwiYXNjXCIgOiBcImRlc2NcIildKV0pO1xyXG4gICAgICAgIHByb3BzLnNldEJhc2VDb25maWcobmNvbmZpZyk7XHJcbiAgICB9LCBbYXNjZW5kaW5nLCBzb3J0RmllbGQsIGN1cnJlbnRDb25maWddKVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiByZWFkU2luZ2xlRmlsZShldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBmaWxlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgaWYgKGZpbGVOYW1lLmVuZHNXaXRoKFwiLmluaVwiKSlcclxuICAgICAgICAgICAgUGFyc2VJTkkoZXZ0LCAoZCkgPT4gTG9hZEJhc2VDb25maWdGaWxlKGZpbGVOYW1lLGQubWFwKChpdGVtLCBpbmRleCkgPT4gKHsgLi4uaXRlbSwgSW5jbHVkZTogZmFsc2UgfSkpKSk7XHJcbiAgICAgICAgaWYgKGZpbGVOYW1lLmVuZHNXaXRoKFwiLnBhclwiKSlcclxuICAgICAgICAgICAgUGFyc2VQQVIoZXZ0LCAoZCkgPT4gTG9hZEJhc2VDb25maWdGaWxlKGZpbGVOYW1lLCBkLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7IC4uLml0ZW0sIEluY2x1ZGU6IGZhbHNlIH0pKSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0U2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIExvYWRCYXNlQ29uZmlnRmlsZShmaWxlOiBzdHJpbmcsIEZpZWxkczogQXJyYXk8SUNvbmZpZ0ZpbGVGaWVsZD4pIHtcclxuXHJcbiAgICAgICAgc2V0RmlsZU5hbWUoZmlsZSk7XHJcbiAgICAgICAgc2V0RmlsZUZpZWxkcyhGaWVsZHMubWFwKGl0ZW0gPT4geyBpdGVtLkJhc2VDb25maWdJZCA9IC0xOyByZXR1cm4gaXRlbSB9KSlcclxuICAgICAgICBwcm9wcy5zZXRTdGVwKCdGaWxlIExvYWQnKTtcclxuICAgICAgICBzZXRTaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdENvbmZpZ0ZpZWxkKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkge1xyXG4gICAgICAgIHByb3BzLnNldFN0ZXAoJ0VkaXQgRmllbGQnKTtcclxuICAgICAgICBzZXRFZGl0RmllbGQocmVjb3JkKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZENvbmZpZ0ZpZWxkKCkge1xyXG4gICAgICAgIHByb3BzLnNldFN0ZXAoJ0VkaXQgRmllbGQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdGVwID09ICdCYXNlQ29uZmlnJyA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1suLi5wcm9wcy5CYXNlQ29uZmlncy5rZXlzKCldLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rXCIgKyAoY3VycmVudENvbmZpZyA9PSBpdGVtID8gXCIgYWN0aXZlXCIgOiBcIlwiKX0gb25DbGljaz17KCkgPT4gc2V0Q3VycmVudENvbmZpZyhpdGVtKX0+e3Byb3BzLkJhc2VDb25maWdzLmdldChpdGVtKVswXS5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIzNSwgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmRcIn0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDb25maWcgIT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiBDb25maWd1cmF0aW9uIHtwcm9wcy5CYXNlQ29uZmlncy5nZXQoY3VycmVudENvbmZpZylbMF0uTmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmQtYm9keVwifSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1NDAsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTQwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0PFBSQzAwMi5JQmFzZUNvbmZpZz4gUmVjb3JkPXtwcm9wcy5CYXNlQ29uZmlncy5nZXQoY3VycmVudENvbmZpZylbMF19IEZpZWxkPXsnUGF0dGVybid9IFNldHRlcj17KCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gTGFiZWw9eydGaWxlIFBhdHRlcm4nfSBEaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxQUkMwMDIuSUNvbmZpZ0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdGaWVsZCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydOYW1lJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0ZpZWxkVHlwZScsIGxhYmVsOiAnVHlwZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPElucHV0PFBSQzAwMi5JQ29uZmlnRmllbGQ+IFJlY29yZD17aXRlbX0gRmllbGQ9eydGaWVsZFR5cGUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQ29tcGFyaXNvbicsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0NvbXBhcmlzb24nfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVmFsdWUnLCBsYWJlbDogJ1ZhbHVlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J1ZhbHVlJ30gRGlzYWJsZWQ9e3RydWV9IExhYmVsPXsnJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IH19IFZhbGlkPXsoKSA9PiB0cnVlfSAvPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0lEJywgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTZweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gb25DbGljaz17KCkgPT4gZWRpdENvbmZpZ0ZpZWxkKGl0ZW0pfT48aSBzdHlsZT17eyBjb2xvcjogJyMwMDdCRkYnIH19IGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbC1zcXVhcmUgZmEtM3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5CYXNlQ29uZmlncy5nZXQoY3VycmVudENvbmZpZylbMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXsnTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNjY2LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudENvbmZpZyAhPSBudWxsID8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IGFkZENvbmZpZ0ZpZWxkKCl9PkFkZCBuZXcgRmllbGQgPC9idXR0b24+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLWlucHV0XCIgYWNjZXB0PVwiLmluaSwucGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtbGFiZWxcIj5DaG9vc2UgYSBDb25maWd1cmF0aW9uIEZpbGUgaWYgYXBwbGljYWJsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9eygpID0+IHsgcHJvcHMuc2V0U3RlcCgnTmV3IEJhc2VDb25maWcnKSB9fT4gQWRkIE5ldyBCYXNlIENvbmZpZ3VyYXRpb24gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbH1cclxuICAgICAgICAgICAge3Byb3BzLnN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJyA/IDw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQ8UFJDMDAyLklCYXNlQ29uZmlnPiBSZWNvcmQ9e25ld0NvbmZpZ30gRmllbGQ9eydOYW1lJ30gU2V0dGVyPXtzZXROZXdDb25maWd9IFZhbGlkPXsoKSA9PiBuZXdDb25maWcuTmFtZSAhPSBudWxsICYmIG5ld0NvbmZpZy5OYW1lLmxlbmd0aCA+IDAgJiYgbmV3Q29uZmlnVW5pcX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlZWRiYWNrPXsnTmFtZSBpcyByZXF1aXJlZCBhbmQgbXVzdCBiZSB1bmlxdWUnfSBMYWJlbD17J05hbWUnfSAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0PFBSQzAwMi5JQmFzZUNvbmZpZz4gUmVjb3JkPXtuZXdDb25maWd9IEZpZWxkPXsnUGF0dGVybid9IFNldHRlcj17c2V0TmV3Q29uZmlnfSBWYWxpZD17KCkgPT4gbmV3Q29uZmlnLlBhdHRlcm4gIT0gbnVsbCAmJiBuZXdDb25maWcuUGF0dGVybi5sZW5ndGggPiAwfVxyXG4gICAgICAgICAgICAgICAgICAgIExhYmVsPXsnRmlsZSBQYXR0ZXJuJ30gRmVlZGJhY2s9eydGaWxlIFBhdHRlcm4gaXMgcmVxdWlyZWQuJ30gLz4gPC8+IDogbnVsbH1cclxuICAgICAgICAgICAge3Byb3BzLnN0ZXAgPT0gJ0VkaXQgRmllbGQnID8gPENvbmZpZ0ZpZWxkRWRpdCBGaWVsZD17ZWRpdEZpZWxkfSBTZXR0ZXI9e3NldEVkaXRGaWVsZH0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICB7cHJvcHMuc3RlcCA9PSAnRmlsZSBMb2FkJyA/IDxTZWxlY3RUYWJsZTxJQ29uZmlnRmlsZUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnRmllbGQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2NhbGMoMzAlIC0gOC4yNWVtKScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdjYWxjKDUwJSAtIDguMjVlbSknIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8SUNvbmZpZ0ZpbGVGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J05hbWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdGaWVsZFR5cGUnLCBsYWJlbDogJ1R5cGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzhlbScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICc4ZW0nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8SW5wdXQ8SUNvbmZpZ0ZpbGVGaWVsZD4gUmVjb3JkPXtpdGVtfSBGaWVsZD17J0ZpZWxkVHlwZSd9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0NvbXBhcmlzb24nLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNWVtJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzVlbScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxJQ29uZmlnRmlsZUZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnQ29tcGFyaXNvbid9IERpc2FibGVkPXt0cnVlfSBMYWJlbD17Jyd9IFNldHRlcj17KHJlY29yZCkgPT4geyB9fSBWYWxpZD17KCkgPT4gdHJ1ZX0gLz4gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1ZhbHVlJywgbGFiZWw6ICdWYWx1ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnY2FsYyg3MCUgLSA4LjI1ZW0pJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2NhbGMoNTAlIC0gOC4yNWVtKScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxJbnB1dDxJQ29uZmlnRmlsZUZpZWxkPiBSZWNvcmQ9e2l0ZW19IEZpZWxkPXsnVmFsdWUnfSBEaXNhYmxlZD17dHJ1ZX0gTGFiZWw9eycnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgfX0gVmFsaWQ9eygpID0+IHRydWV9IC8+IH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAga2V5RmllbGQ9eydOYW1lJ31cclxuICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtmaWxlRmllbGRzfVxyXG4gICAgICAgICAgICAgICAgc29ydEZpZWxkPXsnTmFtZSd9XHJcbiAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e3RydWV9XHJcblxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Rpb249eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlsZUZpZWxkcygobHN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlID0gbHN0Lm1hcChpdGVtID0+ICh7IC4uLml0ZW0sIEluY2x1ZGU6IChkLmZpbmRJbmRleChpID0+IGkuSUQgPT0gaXRlbS5JRCkgPiAtMSkgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgb25Tb3J0PXsoKSA9PiB7IH19XHJcbiAgICAgICAgICAgIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgPExvYWRpbmdTY3JlZW4gU2hvdz17c2hvd0xvYWRpbmd9IC8+XHJcbiAgICAgICAgPC8+KVxyXG59XHJcblxyXG5jb25zdCBDb25maWdGaWVsZEVkaXQgPSAocHJvcHM6IHsgRmllbGQ6IFBSQzAwMi5JQ29uZmlnRmllbGQsIFNldHRlcjogKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkgPT4gdm9pZCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgRmllbGRUeXBlT3B0aW9ucyA9IFt7IFZhbHVlOiAnc3RyaW5nJywgTGFiZWw6ICdUZXh0JyB9LCB7IFZhbHVlOiAnbnVtYmVyJywgTGFiZWw6ICdOdW1iZXInIH1dO1xyXG4gICAgY29uc3QgTnVtYmVyQ2hlY2tzID0gW3sgVmFsdWU6ICc9JywgTGFiZWw6ICc9JyB9LCB7IFZhbHVlOiAnPD4nLCBMYWJlbDogJzw+JyB9LCB7IFZhbHVlOiAnPicsIExhYmVsOiAnPicgfSwgeyBWYWx1ZTogJzwnLCBMYWJlbDogJzwnIH1dO1xyXG4gICAgY29uc3QgVGV4dENoZWNrcyA9IFt7IFZhbHVlOiAnPScsIExhYmVsOiAnPScgfSwgeyBWYWx1ZTogJzw+JywgTGFiZWw6ICc8PicgfSwgeyBWYWx1ZTogJ0lOJywgTGFiZWw6ICdJbicgfV07XHJcblxyXG4gICAgZnVuY3Rpb24gVmFsaWRWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHByb3BzLkZpZWxkLlZhbHVlICE9IG51bGwgJiYgcHJvcHMuRmllbGQuVmFsdWUubGVuZ3RoID4gMCAmJiAocHJvcHMuRmllbGQuRmllbGRUeXBlICE9ICdudW1iZXInIHx8ICFpc05hTihwYXJzZUZsb2F0KHByb3BzLkZpZWxkLlZhbHVlKSkpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxTZWxlY3Q8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydGaWVsZFR5cGUnfSBPcHRpb25zPXtGaWVsZFR5cGVPcHRpb25zfSBMYWJlbD17J0ZpZWxkIFR5cGUnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlY29yZC5GaWVsZFR5cGUgIT09IHByb3BzLkZpZWxkLkZpZWxkVHlwZSAmJiByZWNvcmQuQ29tcGFyaXNvbiAhPSAnPD4nICYmIHJlY29yZC5Db21wYXJpc29uICE9ICc9JylcclxuICAgICAgICAgICAgICAgIHJlY29yZC5Db21wYXJpc29uID0gJz0nO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjb3JkKTtcclxuICAgICAgICB9fSAvPlxyXG4gICAgICAgIDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e3Byb3BzLkZpZWxkfSBGaWVsZD17J05hbWUnfSBTZXR0ZXI9eygpID0+IHsgfX0gVmFsaWQ9eygpID0+IHByb3BzLkZpZWxkLk5hbWUgIT0gbnVsbCAmJiBwcm9wcy5GaWVsZC5OYW1lLmxlbmd0aCA+IDB9IExhYmVsPXsnRmllbGQnfSAvPlxyXG4gICAgICAgIDxTZWxlY3Q8UFJDMDAyLklDb25maWdGaWVsZD4gUmVjb3JkPXtwcm9wcy5GaWVsZH0gRmllbGQ9eydDb21wYXJpc29uJ30gT3B0aW9ucz17KHByb3BzLkZpZWxkLkZpZWxkVHlwZSA9PSAnbnVtYmVyJyA/IE51bWJlckNoZWNrcyA6IFRleHRDaGVja3MpfSBMYWJlbD17J1J1bGUnfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHsgcHJvcHMuU2V0dGVyKHJlY29yZCkgfX0gLz5cclxuICAgICAgICB7KHByb3BzLkZpZWxkLkNvbXBhcmlzb24gPT0gJ0lOJyA/IDxNdWx0aUlucHV0RmllbGQgZGF0YT17cHJvcHMuRmllbGR9IFNldHRlcj17KHJlY29yZCkgPT4geyBwcm9wcy5TZXR0ZXIocmVjb3JkKSB9fSAvPiA6XHJcbiAgICAgICAgICAgIDxJbnB1dDxQUkMwMDIuSUNvbmZpZ0ZpZWxkPiBSZWNvcmQ9e3Byb3BzLkZpZWxkfSBGaWVsZD17J1ZhbHVlJ30gU2V0dGVyPXsocmVjb3JkKSA9PiB7IHByb3BzLlNldHRlcihyZWNvcmQpIH19IFZhbGlkPXsoKSA9PiBWYWxpZFZhbHVlKCl9IExhYmVsPXsnVmFsdWUnfSBGZWVkYmFjaz17cHJvcHMuRmllbGQuRmllbGRUeXBlICE9ICdudW1iZXInPyAnVmFsdWUgaXMgcmVxdWlyZWQuJyA6ICdWYWx1ZSBpcyByZXF1aXJlZCBhbmQgbmVlZHMgdG8gYmUgYSBudW1iZXIuJ30gLz5cclxuICAgICAgICApfVxyXG4gICAgPC8+KVxyXG59XHJcblxyXG4gY29uc3QgTXVsdGlJbnB1dEZpZWxkID0gKHByb3BzOiB7IGRhdGE6IFBSQzAwMi5JQ29uZmlnRmllbGQsIFNldHRlcjogKHJlY29yZDogUFJDMDAyLklDb25maWdGaWVsZCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgW2xpc3RWYWx1ZXMsIHNldExpc3RWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8c3RyaW5nPj4oW10pO1xyXG5cclxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMaXN0VmFsdWVzKHByb3BzLmRhdGEuVmFsdWUuc3BsaXQoJzsnKSlcclxuICAgICAgICB9LCBbcHJvcHMuZGF0YV0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIFNldChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IHJlYyA9IF8uY2xvbmVEZWVwKHByb3BzLmRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgbHN0ID0gXy5jbG9uZShsaXN0VmFsdWVzKTtcclxuICAgICAgICAgICAgbHN0W2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gQWRkTmV3KCkge1xyXG4gICAgICAgICAgICBsZXQgcmVjID0gXy5jbG9uZURlZXAocHJvcHMuZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgICAgICBsc3QucHVzaCgocHJvcHMuZGF0YS5GaWVsZFR5cGUgPT0gJ3N0cmluZycgPyAnVmFsdWUnIDogJzAnKSlcclxuICAgICAgICAgICAgcmVjLlZhbHVlID0gbHN0LmpvaW4oJzsnKTtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHJlYylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgcmVjID0gXy5jbG9uZURlZXAocHJvcHMuZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBsc3QgPSBfLmNsb25lKGxpc3RWYWx1ZXMpO1xyXG4gICAgICAgICAgICBsc3Quc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICByZWMuVmFsdWUgPSBsc3Quam9pbignOycpO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtsaXN0VmFsdWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PSAwID8gPGxhYmVsPlZhbHVlczwvbGFiZWw+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7IFNldChpbmRleCwgZXZ0LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpIH19IHZhbHVlPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IEFkZE5ldygpfT4gQWRkIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VDb25maWdXaW5kb3c7XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRmlsZVBhcnNlci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMDIvMjAyMSAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlSU5JKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGNvbXBsZXRlOiAoZGF0YTogUFJDMDAyLklDb25maWdGaWVsZFtdKSA9PiB2b2lkKSB7XHJcblxyXG4gICAgdmFyIGYgPSBldnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICAgIGlmIChmKSB7XHJcblxyXG4gICAgICAgIHZhciByID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50cyA9IGUudGFyZ2V0LnJlc3VsdCBhcyBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGluZXMgPSBjb250ZW50cy5zcGxpdCgvW1xcclxcbl0rL2cpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGxpbmVzLmZvckVhY2goKGxuLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsbi5pbmNsdWRlcygnPScpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGxuLmluZGV4T2YoJz0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5tYXAoaXRlbSA9PiBpdGVtLmtleSkuaW5jbHVkZXMobG4uc3Vic3RyKDAsIGkpKSlcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBrZXk6IGxuLnN1YnN0cigwLCBpKSArICctJyArIGluZGV4LCB2YWx1ZTogbG4uc3Vic3RyKGkgKyAxKSB9KVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IGtleTogbG4uc3Vic3RyKDAsIGkpLCB2YWx1ZTogbG4uc3Vic3RyKGkgKyAxKSB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbXBsZXRlKHJlc3VsdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIElEOiBpbmRleCxcclxuICAgICAgICAgICAgICAgIEJhc2VDb25maWdJZDogLTEsXHJcbiAgICAgICAgICAgICAgICBOYW1lOiBpdGVtLmtleSxcclxuICAgICAgICAgICAgICAgIFZhbHVlOiBpdGVtLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgQ29tcGFyaXNvbjogJz0nLFxyXG4gICAgICAgICAgICAgICAgRmllbGRUeXBlOiAnc3RyaW5nJ1xyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIucmVhZEFzVGV4dChmKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJzZVBBUihldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBjb21wbGV0ZTogKGRhdGE6IFBSQzAwMi5JQ29uZmlnRmllbGRbXSkgPT4gdm9pZCkge1xyXG5cclxuICAgIHZhciBmID0gZXZ0LnRhcmdldC5maWxlc1swXTtcclxuICAgIGxldCByZXN1bHRzOiBQUkMwMDIuSUNvbmZpZ0ZpZWxkW10gPSBbXTtcclxuXHJcbiAgICBpZiAoZikge1xyXG5cclxuICAgICAgICB2YXIgciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29udGVudHMgPSBlLnRhcmdldC5yZXN1bHQgYXMgc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpbmVzID0gY29udGVudHMuc3BsaXQoL1tcXHJcXG5dKy9nKTtcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgbGluZXMuZm9yRWFjaCgobG4sIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9QYXJzZSBoZWFkZXIgZmlyc3RcclxuICAgICAgICAgICAgICAgIGlmICghbG4uaW5jbHVkZXMoJz0nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBsbi5pbmRleE9mKCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gbG4uc3Vic3RyaW5nKDAsIGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyb3cudG9Mb3dlckNhc2UoKSA9PSAnaGVhZGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbG4uc3Vic3RyaW5nKGkgKyAxKS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdJbmRleCA9IE1hdGgubWF4KC4uLnJlc3VsdHMubWFwKGl0ZW0gPT4gaXRlbS5JRCksMCkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJTdGF0aW9uXCIsIFZhbHVlOiBkYXRhWzFdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJOb21pbmFsIEZyZXF1ZW5jeVwiLCBWYWx1ZTogZGF0YVsyXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiTnVtLiBEQyBDaGFubmVsc1wiLCBWYWx1ZTogZGF0YVszXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiTnVtLiBBbmFsb2cgQ2hhbm5lbHNcIiwgVmFsdWU6IGRhdGFbNF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIk51bS4gRXZlbnQgQ2hhbm5lbHNcIiwgVmFsdWU6IGRhdGFbNV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIk51bS4gVHJpZ2dlcnNcIiwgVmFsdWU6IGRhdGFbNl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlNodW50IFR5cGVcIiwgVmFsdWU6IGRhdGFbN10gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIk92ZXJXcml0ZSBvbGQgUmVjb3Jkc1wiLCBWYWx1ZTogZGF0YVs4XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiU0VSIENoYW5uZWxzIGluIFBBUlwiLCBWYWx1ZTogZGF0YVs5XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlNFUiBDSGFubmVscyB0aGF0IGNhdXNlIERGUiBTdG9wXCIsIFZhbHVlOiBkYXRhWzEwXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlNFUiBBdXRvU3RvcCBpZiAgI1RyaWdnZXJzID5cIiwgVmFsdWU6IGRhdGFbMTFdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiU0VSIEF1dG9TdG9wIFRpbWUgUGVyaW9kXCIsIFZhbHVlOiBkYXRhWzEyXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlNFUiBSZXN0b3JlIFBlcmlvZFwiLCBWYWx1ZTogZGF0YVsxM10gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJEZWJvdW5jZSBUaW1lXCIsIFZhbHVlOiBkYXRhWzE0XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlRyYW5zaWVudCBQcmVmYXVsdFwiLCBWYWx1ZTogZGF0YVsxNV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxNikgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiVHJhbnNpZW50IFBvc3RmYXVsdFwiLCBWYWx1ZTogZGF0YVsxNl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJUcmFuc2llbnQgRmF1bHQgTGltaXRcIiwgVmFsdWU6IGRhdGFbMTddIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMTgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiVHJhbnNpZW50IFNhbXBsaW5nIEZyZXF1ZW5jeVwiLCBWYWx1ZTogZGF0YVsxOF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJFeHRlbmRlZCBQcmVmYXVsdFwiLCBWYWx1ZTogZGF0YVsxOV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJFeHRlbmRlZCBQb3N0IEZhdWx0XCIsIFZhbHVlOiBkYXRhWzIwXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIkV4dGVuZGVkIEZhdWx0XCIsIFZhbHVlOiBkYXRhWzIxXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIkV4dGVuZGVkIFNhbXBsaW5nIEZyZXF1ZW5jeVwiLCBWYWx1ZTogZGF0YVsyMl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJFeHRlbmRlZCBSTVMgQ3ljbGVzL1BvaW50XCIsIFZhbHVlOiBkYXRhWzIzXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDI0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIkNvbnRpbnVvdXMgUmVjb3JkaW5nIFNhbXBsZXMvUG9pbnQgRnJlcS1STVMtUGhhc2VcIiwgVmFsdWU6IGRhdGFbMjRdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMjUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiQ29udGludW91cyBSZWNvcmRpbmcgU3RvcmFnZSBMZW5ndGggKERheXMpXCIsIFZhbHVlOiBkYXRhWzI1XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDI2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIkNvbnRpbm91cyBPc2NpbGxvZ3JhcGh5IFN0b3JhZ2UgTGVuZ3RoIChEYXlzKVwiLCBWYWx1ZTogZGF0YVsyNl0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJUcmlnZ2VyIENoYW5uZWxzIC0gQXV0byBTdG9wIElmICMgVHJpZ2dlcnMgPlwiLCBWYWx1ZTogZGF0YVsyN10gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAyOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJUcmlnZ2VycyBDaGFubmVscyBBdXRvIFN0b3AgVGltZSBQZXJpb2QgKE1pbnV0ZXMpXCIsIFZhbHVlOiBkYXRhWzI4XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDI5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlRyaWdnZXJzIENoYW5uZWxzIEF1dG8gU3RvcCAtIFJlc3RvcmUgQWZ0ZXIgKE1pbnMpXCIsIFZhbHVlOiBkYXRhWzI5XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIlRyaWdnZXJzIENoYW5uZWwgQXV0byBTdG9wIC0gQXBwbHkgdG8gRGlzdHVyYmFuY2UgVHJpZ2dlcnMgT25seSAoMD1ubyAxPXllcylcIiwgVmFsdWU6IGRhdGFbMzBdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMzEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiVHJhbnNpZW50IFJhdGUgT3NjaWxsb2dyYXBoeSBTdG9yYWdlIChEYXlzKVwiLCBWYWx1ZTogZGF0YVszMV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCIjIEZhdWx0cyBvbiBEaXNrXCIsIFZhbHVlOiBkYXRhWzMyXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDMzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIk1hc3RlciBDaGFzc2lzXCIsIFZhbHVlOiBkYXRhWzMzXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDM0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIkV4dGVuZGVkIFJNUyBJbmNsdWRlIFBoYXNlIEFuZ2xlXCIsIFZhbHVlOiBkYXRhWzM0XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDM1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIkVWTk9NSVNTIChEbyBOb3QgUmVzdHJpY3QgRXZlbnQgT25seSBUcmlnZ2VyKVwiLCBWYWx1ZTogZGF0YVszNV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAzNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBJRDogbmV3SW5kZXgsIEJhc2VDb25maWdJZDogLTEsIENvbXBhcmlzb246ICc9JywgRmllbGRUeXBlOiAnc3RyaW5nJywgTmFtZTogXCJDb250aW51b3VzIFBRIERhdGFcIiwgVmFsdWU6IGRhdGFbMzZdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMzcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHsgSUQ6IG5ld0luZGV4LCBCYXNlQ29uZmlnSWQ6IC0xLCBDb21wYXJpc29uOiAnPScsIEZpZWxkVHlwZTogJ3N0cmluZycsIE5hbWU6IFwiQ0JBIFBoYXNlIFJvdGF0aW9uXCIsIFZhbHVlOiBkYXRhWzM3XSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDM4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7IElEOiBuZXdJbmRleCwgQmFzZUNvbmZpZ0lkOiAtMSwgQ29tcGFyaXNvbjogJz0nLCBGaWVsZFR5cGU6ICdzdHJpbmcnLCBOYW1lOiBcIiMgb2YgVFcgQ2hhbm5lbHNcIiwgVmFsdWU6IGRhdGFbMzhdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIucmVhZEFzVGV4dChmKTtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBOZXdNZXRlcldpenphcmQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE3LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vLyAgMDIvMDIvMjAyMSAtIEMuIExhY2tuZXJcclxuLy8gICAgICAgVXBkYXRlZCBQQVIgUGFyc2VyIGFuZCBtb3ZlZCB0byBncGEtZ2Vtc3RvbmUgVUkuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9Db21tb25Db21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtSW5wdXQnOztcclxuaW1wb3J0IHsgUFJDMDAyIH0gZnJvbSAnLi4vQ29tcGxpYW5jZU1vZGVscyc7XHJcbmltcG9ydCBTZWxlY3RNZXRlciBmcm9tICcuL1NlbGVjdE1ldGVyJztcclxuaW1wb3J0IEJhc2VDb25maWdXaW5kb3cgZnJvbSAnLi9CYXNlQ29uZmlnV2luZG93JztcclxuaW1wb3J0IHsgTW9kYWwsIFRvb2xUaXAsIFdhcm5pbmcgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IHNob3c6IGJvb2xlYW4sIHNldFNob3c6IChzOiBib29sZWFuKSA9PiB2b2lkfVxyXG50eXBlIHN0YXRlID0gJ01ldGVyJ3wnQmFzZUNvbmZpZyd8J0ZpbGUgTG9hZCd8ICdFZGl0IEZpZWxkJyB8ICdOZXcgQmFzZUNvbmZpZycgXHJcblxyXG5jb25zdCBOZXdNZXRlcldpenphcmQgPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgW21ldGVyLCBzZXRNZXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxQUkMwMDIuSU1ldGVyPihudWxsKTtcclxuICAgIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IFJlYWN0LnVzZVN0YXRlPHN0YXRlPignTWV0ZXInKTtcclxuICAgIGNvbnN0IFtzaG93V2FybmluZywgc2V0U2hvd1dhcm5pbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dDb21wbGV0ZSwgc2V0U2hvd0NvbXBsZXRlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gUmVhY3QudXNlU3RhdGU8J0NhbmNlbCcgfCAnQ29uZmlybScgfCAnTm9uZSc+KCdOb25lJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtiYXNlQ29uZmlnLCBzZXRCYXNlQ29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPE1hcDxudW1iZXIsIFtQUkMwMDIuSUJhc2VDb25maWcsIFBSQzAwMi5JQ29uZmlnRmllbGRbXV0+PihuZXcgTWFwPG51bWJlciwgW1BSQzAwMi5JQmFzZUNvbmZpZywgUFJDMDAyLklDb25maWdGaWVsZFtdXT4oKSk7XHJcbiAgICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc2V0LCBzZXRSZXNldF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2NvbnQsIHNldENvbnRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXByb3BzLnNob3cpXHJcbiAgICAgICAgICAgIENhbmNlbCgpO1xyXG4gICAgfSwgW3Byb3BzLnNob3ddKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBDYW5jZWwoKSB7XHJcbiAgICAgICAgc2V0U3RlcCgnTWV0ZXInKTtcclxuICAgICAgICBzZXRNZXRlcih1bmRlZmluZWQpXHJcbiAgICAgICAgc2V0QmFzZUNvbmZpZyhuZXcgTWFwPG51bWJlciwgW1BSQzAwMi5JQmFzZUNvbmZpZywgUFJDMDAyLklDb25maWdGaWVsZFtdXT4oKSk7XHJcbiAgICAgICAgc2V0RXJyb3JNc2coW10pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTmV4dFN0ZXAoKSB7XHJcbiAgICAgICAgaWYoIXN0ZXBDb21wbGV0ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoc3RlcCA9PSAnTWV0ZXInKSB7XHJcbiAgICAgICAgICAgIHNldFN0ZXAoJ0Jhc2VDb25maWcnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGVwID09ICdOZXcgQmFzZUNvbmZpZycpIHtcclxuICAgICAgICAgICAgc2V0Q29udCh4PT4geCsxKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RlcCA9PSAnRmlsZSBMb2FkJykge1xyXG4gICAgICAgICAgICBzZXRDb250KHggPT4geCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGVwID09ICdCYXNlQ29uZmlnJykge1xyXG4gICAgICAgICAgICBzZXRTaG93Q29tcGxldGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RlcCA9PSAnRWRpdCBGaWVsZCcpIHtcclxuICAgICAgICAgICAgc2V0Q29udCh4ID0+IHggKyAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUHJldlN0ZXAoKSB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ01ldGVyJylcclxuICAgICAgICAgICAgc2V0U2hvd1dhcm5pbmcodHJ1ZSk7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0Jhc2VDb25maWcnKVxyXG4gICAgICAgICAgICBzZXRSZXNldCh4PT4geCsxKVxyXG4gICAgICAgIGlmIChzdGVwID09ICdOZXcgQmFzZUNvbmZpZycgfHwgc3RlcCA9PSAnRmlsZSBMb2FkJykge1xyXG4gICAgICAgICAgICBzZXRSZXNldCh4ID0+IHggKyAxKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RlcCA9PSAnRWRpdCBGaWVsZCcpXHJcbiAgICAgICAgICAgIHNldFJlc2V0KHggPT4geCArIDEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ01ldGVyJylcclxuICAgICAgICAgICAgcmV0dXJuICdTZWxlY3QgYSBNZXRlcidcclxuICAgICAgICBpZiAoc3RlcCA9PSAnQmFzZUNvbmZpZycpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlNldHVwIEJhc2UgQ29uZmlndXJhdGlvblwiXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ0ZpbGUgTG9hZCcpXHJcbiAgICAgICAgICAgIHJldHVybiAnTG9hZCBDb25maWd1cmF0aW9uIEZpbGUnXHJcbiAgICAgICAgaWYgKHN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJylcclxuICAgICAgICAgICAgcmV0dXJuICdBZGQgTmV3IEJhc2UgQ29uZmlndXJhdGlvbidcclxuICAgICAgICBpZiAoc3RlcCA9PSAnRWRpdCBGaWVsZCcpXHJcbiAgICAgICAgICAgIHJldHVybiBcIkVkaXQgQ29uZmlndXJhdGlvbiBGaWVsZFwiXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBTdWJtaXQoKSB7XHJcbiAgICAgICAgLy8gU3RhcnQgQnkgQ3JlYXRpbmcgdGhlIG1ldGVyXHJcbiAgICAgICAgbGV0IGNvbmZpZ0ZpZWxkcyA9IFtdO1xyXG5cclxuICAgICAgICBbLi4uYmFzZUNvbmZpZy5rZXlzKCldLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgYmFzZUNvbmZpZy5nZXQoa2V5KVsxXS5mb3JFYWNoKGZsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25maWdGaWVsZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgQmFzZUNvbmZpZ0lkOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgQ29tcGFyaXNvbjogZmxkLkNvbXBhcmlzb24sXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGRUeXBlOiBmbGQuRmllbGRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIE5hbWU6IGZsZC5OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFZhbHVlOiBmbGQuVmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9QUkMwMDIvQ29tcGxpYW5jZU1ldGVyL0FkZGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgTWV0ZXI6IHsgTWV0ZXJJZDogbWV0ZXIuSUQsIEFjdGl2ZTogZmFsc2UsIFJldmlld2VkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIEJhc2VDb25maWd1cmF0aW9uOiBbLi4uYmFzZUNvbmZpZy52YWx1ZXMoKV0ubWFwKGl0ZW0gPT4geyByZXR1cm4geyBOYW1lOiBpdGVtWzBdLk5hbWUsIFBhdHRlcm46IGl0ZW1bMF0uUGF0dGVybiwgSUQ6IGl0ZW1bMF0uSUQgfTsgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlndXJhdGlvbkZpZWxkczogY29uZmlnRmllbGRzXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvcHMuc2V0U2hvdyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc3RlcENvbXBsZXRlID0gKHN0ZXAgPT0gJ01ldGVyJyA/IG1ldGVyICE9IG51bGwgOiBlcnJvck1zZy5sZW5ndGggPT0gMClcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsIFNob3c9e3Byb3BzLnNob3d9IENhbGxCYWNrPXsoY29uZmlybSwgaXNCdXR0b24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKVxyXG4gICAgICAgICAgICAgICAgICAgIE5leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dXYXJuaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maXJtICYmIGlzQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgIFByZXZTdGVwKCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBUaXRsZT17Z2V0VGl0bGUoKX0gQ29uZmlybVRleHQ9eyhzdGVwID09ICdNZXRlcicgfHwgc3RlcCA9PSAnRmlsZSBMb2FkJyA/ICdOZXh0JyA6ICdTYXZlJyl9XHJcbiAgICAgICAgICAgICAgICBDb25maXJtVG9vbFRpcD17J1dpemFyZENvbmZpcm0nfSBTaXplPXsnbGcnfSBPbkhvdmVyPXtzZXRIb3Zlcn1cclxuICAgICAgICAgICAgICAgIENvbmZpcm1CdG5DbGFzcz17J2J0bi1zdWNjZXNzJyArIChzdGVwQ29tcGxldGUgPyAnJyA6ICcgZGlzYWJsZWQnKX1cclxuICAgICAgICAgICAgICAgIENhbmNlbFRleHQ9eyhzdGVwID09ICdNZXRlcicgPyAnQ2xvc2UnIDogJ0JhY2snKX1cclxuICAgICAgICAgICAgICAgIFNob3dYPXt0cnVlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3RlcCA9PSAnTWV0ZXInID8gPFNlbGVjdE1ldGVyIHNldE1ldGVyPXsobWV0ZXIpID0+IHsgc2V0TWV0ZXIobWV0ZXIpOyB9fSBzZWxlY3RlZE1ldGVyPXttZXRlcn0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3N0ZXAgPT0gJ0Jhc2VDb25maWcnIHx8IHN0ZXAgPT0gJ05ldyBCYXNlQ29uZmlnJyB8fCBzdGVwID09ICdGaWxlIExvYWQnIHx8IHN0ZXAgPT0gJ0VkaXQgRmllbGQnID9cclxuICAgICAgICAgICAgICAgICAgICA8QmFzZUNvbmZpZ1dpbmRvdyBCYXNlQ29uZmlncz17YmFzZUNvbmZpZ30gc2V0QmFzZUNvbmZpZz17c2V0QmFzZUNvbmZpZ30gc2V0RXJyb3I9e3NldEVycm9yTXNnfSBzZXRTdGVwPXtzZXRTdGVwfSBzdGVwPXtzdGVwfSBjb250PXtjb250fSByZXNldD17cmVzZXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8V2FybmluZyBUaXRsZT17J0V4aXQgV2l6YXJkJ30gQ2FsbEJhY2s9eyhjb25maXJtKSA9PiB7IHNldFNob3dXYXJuaW5nKGZhbHNlKTsgaWYgKGNvbmZpcm0pIHByb3BzLnNldFNob3coZmFsc2UpOyB9fSBTaG93PXtzaG93V2FybmluZ31cclxuICAgICAgICAgICAgICAgIE1lc3NhZ2U9eydUaGlzIFdpbGwgY2xvc2UgdGhlIFdpemFyZCBhbmQgYWxsIHByb2dyZXNzIHdpbGwgYmUgbG9zdC4nfSAvPlxyXG4gICAgICAgICAgICA8VG9vbFRpcCBTaG93PXtob3ZlciA9PSAnQ29uZmlybScgJiYgIXN0ZXBDb21wbGV0ZX0gUG9zaXRpb249eyd0b3AnfSBUYXJnZXQ9eydXaXphcmRDb25maXJtJ30gWmluZGV4PXs5OTk5fT5cclxuICAgICAgICAgICAgICAgIHtzdGVwID09ICdNZXRlcicgPyA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+QSBNZXRlciBuZWVkcyB0byBiZSBzZWxlY3RlZC48L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtzdGVwICE9ICdNZXRlcicgPyBlcnJvck1zZy5tYXAoKGl0ZW0saW5kZXgpID0+IDxwIGtleT17aW5kZXh9PjxpIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIGNvbG9yOiAnI2RjMzU0NScgfX0gY2xhc3NOYW1lPVwiZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPiB7aXRlbX08L3A+KSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgPFdhcm5pbmcgVGl0bGU9eydTYXZlIFBSQzAwMiBDb25maWd1cmF0aW9uJ30gQ2FsbEJhY2s9eyhjb25maXJtKSA9PiB7IHNldFNob3dDb21wbGV0ZShmYWxzZSk7IGlmIChjb25maXJtKSBTdWJtaXQoKTsgfX0gU2hvdz17c2hvd0NvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZT17J1RoaXMgd2lsbCBhZGQgdGhlIHNlbGVjdGVkIG1ldGVyIHRvIFBSQzAwMiBtb25pdG9yaW5nIGFuZCBzYXZlIHRoZSBiYXNlIGNvbmZpZ3VyYXRpb24uIE5vdGUgdGhhdCB0aGUgc3RhdHVzIG9mIHRoaXMgbWV0ZXIgd2lsbCBub3QgdXBkYXRlIHVudGlsIHRoZSBmaXJzdCBjb25maWd1cmF0aW9uIEZpbGUgaXMgZG93bmxvYWRlZC4nfSAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01ldGVyV2l6emFyZDtcclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBOZXdNZXRlcldpenphcmQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTksIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzE3LzIwMjAgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNaU1EICB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IFBSQzAwMiB9IGZyb20gJy4uL0NvbXBsaWFuY2VNb2RlbHMnO1xyXG5pbXBvcnQgeyBTZWFyY2gsIFNlYXJjaEJhciB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcblxyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7IHNldE1ldGVyOiAobWV0ZXI6IFBSQzAwMi5JTWV0ZXIpID0+IHZvaWQsIHNlbGVjdGVkTWV0ZXI6IFBSQzAwMi5JTWV0ZXIgfVxyXG5cclxuY29uc3Qgc3RhbmRhcmRTZWFyY2g6IFNlYXJjaC5JRmllbGQ8TWlNRC5NZXRlcj5bXSA9IFtcclxuICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTmFtZScsIHR5cGU6ICdzdHJpbmcnIH0sXHJcbiAgICB7IGtleTogJ0Fzc2V0S2V5JywgbGFiZWw6ICdBc3NldCBLZXknLCB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAgeyBrZXk6ICdNYWtlJywgbGFiZWw6ICdNYWtlJywgdHlwZTogJ3N0cmluZycgfSxcclxuICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgdHlwZTogJ3N0cmluZycgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNlbGVjdE1ldGVyID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbTWV0ZXJMaXN0LCBzZXRNZXRlckxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8UFJDMDAyLklNZXRlcj4+KFtdKTtcclxuICAgIGNvbnN0IFttZXRlckZpbHRlciwgc2V0TWV0ZXJGaWx0ZXJdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8U2VhcmNoLklGaWx0ZXI8UFJDMDAyLklNZXRlcj4+PihbXSk7XHJcbiAgICBjb25zdCBbbWV0ZXJTb3J0LCBzZXRNZXRlclNvcnRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgUFJDMDAyLklNZXRlcj4oXCJOYW1lXCIpO1xyXG4gICAgY29uc3QgW21ldGVyQXNjLCBzZXRNZXRlckFzY10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIFxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGVNZXRlckxpc3QgPSBnZXRNZXRlckxpc3QoKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlTWV0ZXJMaXN0ICE9IG51bGwgJiYgaGFuZGxlTWV0ZXJMaXN0LmFib3J0ICE9IG51bGwpIGhhbmRsZU1ldGVyTGlzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcywgbWV0ZXJBc2MsIG1ldGVyU29ydCwgbWV0ZXJGaWx0ZXJdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNZXRlckxpc3QoKTogSlF1ZXJ5LmpxWEhSPEFycmF5PFBSQzAwMi5JTWV0ZXI+PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL1BSQzAwMi9Db21wbGlhbmNlTWV0ZXIvU2VsZWN0YWJsZUxpc3RgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgU2VhcmNoZXM6IG1ldGVyRmlsdGVyLCBPcmRlckJ5OiBtZXRlclNvcnQsIEFzY2VuZGluZzogbWV0ZXJBc2MgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PFBSQzAwMi5JTWV0ZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1ldGVyTGlzdChkYXRhKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0xpc3Qgb2YgbWV0ZXJzIHRvIFNlbGVjdCBGcm9tXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hCYXI8UFJDMDAyLklNZXRlcj4gU2V0RmlsdGVyPXtzZXRNZXRlckZpbHRlcn0gQ29sbHVtbkxpc3Q9e3N0YW5kYXJkU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0Q29sbHVtbj17eyBrZXk6ICdOYW1lJywgbGFiZWw6ICdOYW1lJywgdHlwZTogJ3N0cmluZycgfX1cclxuICAgICAgICAgICAgICAgICAgRGlyZWN0aW9uPXsnbGVmdCd9IExhYmVsPXsnU2VhcmNoJ30gV2lkdGg9eycxMDAlJ31cclxuICAgICAgICAgICAgICAgICAgR2V0RW51bT17KHNldE9wdGlvbnMsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4geyB9XHJcbiAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICA8L1NlYXJjaEJhcj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKCAxMDAlIC0gMTM2cHgpJywgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxQUkMwMDIuSU1ldGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTWV0ZXInLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTW9kZWwnLCBsYWJlbDogJ01vZGVsJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01ha2UnLCBsYWJlbDogJ01ha2UnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e01ldGVyTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e21ldGVyU29ydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e21ldGVyQXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IG1ldGVyU29ydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1ldGVyQXNjKCFtZXRlckFzYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1ldGVyU29ydChkLmNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZCkgPT4geyBwcm9wcy5zZXRNZXRlcihkLnJvdyk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiA1NTAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5JRCA9PT0gKHByb3BzLnNlbGVjdGVkTWV0ZXIgPT0gdW5kZWZpbmVkID8gLTEgOiBwcm9wcy5zZWxlY3RlZE1ldGVyLklEKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TWV0ZXI7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9