(self["webpackChunkMiMD"] = self["webpackChunkMiMD"] || []).push([["wwwroot_Scripts_TSX_MiMD_CommonComponents_NoteWindow_tsx"],{

/***/ "./wwwroot/Scripts/TSX/MiMD/CommonComponents/NoteWindow.tsx":
/*!******************************************************************!*\
  !*** ./wwwroot/Scripts/TSX/MiMD/CommonComponents/NoteWindow.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "./node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
//******************************************************************************************************
//  AssetNote.tsx - Gbtc
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





function NoteWindow(props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState({ ID: 0, MeterID: props.ID, Note: '', UserAccount: '', Timestamp: '' }), 2), note = _a[0], setNote = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState(false), 2), showEdit = _b[0], setEdit = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState([]), 2), noteList = _c[0], setNoteList = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState('Timestamp'), 2), sortField = _d[0], setSortField = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState(false), 2), ascending = _e[0], setAscending = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState(false), 2), hoverAdd = _f[0], setHoverAdd = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState(false), 2), hoverClear = _g[0], setHoverClear = _g[1];
    react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
        var handle = getNotes();
        return function () {
            if (handle != null && handle.abort != undefined)
                handle.abort();
        };
    }, [props.ID, ascending, sortField]);
    function handleEdit(d) {
        setNote(d);
        setEdit(true);
    }
    if (isNaN(props.ID))
        return null;
    function getNotes() {
        if (props.ID < 0)
            return null;
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/Note/" + props.ID + "/" + sortField + "/" + (ascending ? 1 : 0),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
        handle.done(function (data) {
            if (typeof (data) == "string")
                data = JSON.parse(data);
            setNoteList(data);
        });
        return handle;
    }
    function deleteNote(d) {
        $.ajax({
            type: "DELETE",
            url: homePath + "api/MiMD/Note/Delete",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(d),
            cache: true,
            async: true
        }).done(function () { return getNotes(); });
    }
    function addNote(d) {
        $.ajax({
            type: "POST",
            url: homePath + "api/MiMD/Note/Add",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(__assign(__assign({}, d), { ID: 0, MeterID: props.ID, Timestamp: moment().format('MM/DD/YYYY HH:mm'), UserAccount: '' })),
            dataType: 'json',
            cache: true,
            async: true
        }).done(function (e) {
            getNotes();
            setNote({ ID: 0, MeterID: props.ID, Note: '', UserAccount: '', Timestamp: '' });
        });
    }
    function closeEdit(confirm) {
        if (note.Note.length == 0 && confirm)
            return;
        setEdit(false);
        if (confirm) {
            var n = lodash__WEBPACK_IMPORTED_MODULE_3___default().cloneDeep(note);
            deleteNote(n);
            addNote(n);
        }
        setNote({ ID: 0, MeterID: props.ID, Note: '', UserAccount: '', Timestamp: '' });
    }
    return (react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", { className: "card", style: { marginBottom: 10 } },
        react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", { className: "col" },
                    react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", null, "Notes:")))),
        react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", { className: "card-body" },
            react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__.default, { cols: [
                            { key: 'Note', label: 'Note', headerStyle: { width: '50%' }, rowStyle: { width: '50%' } },
                            { key: 'Timestamp', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item) { return moment.utc(item.Timestamp).format("MM/DD/YYYY HH:mm"); } },
                            { key: 'UserAccount', label: 'User', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            {
                                key: null, label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item) { return react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null,
                                    react__WEBPACK_IMPORTED_MODULE_4__.createElement("button", { className: "btn btn-sm", onClick: function (e) { return handleEdit(item); } },
                                        react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", null,
                                            react__WEBPACK_IMPORTED_MODULE_4__.createElement("i", { className: "fa fa-pencil" }))),
                                    react__WEBPACK_IMPORTED_MODULE_4__.createElement("button", { className: "btn btn-sm", onClick: function (e) { return deleteNote(item); } },
                                        react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", null,
                                            react__WEBPACK_IMPORTED_MODULE_4__.createElement("i", { className: "fa fa-times" })))); }
                            },
                        ], tableClass: "table table-hover", data: noteList, sortKey: sortField, ascending: ascending, onSort: function (d) {
                            if (d.colField == sortField)
                                setAscending(!ascending);
                            else {
                                setAscending(d.colField != 'Timestamp');
                                setSortField(d.colField);
                            }
                        }, onClick: function () { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID == note.ID; } }))),
            react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_0__.TextArea, { Record: note, Rows: 4, Field: 'Note', Setter: function (n) { return setNote(n); }, Valid: function () { return note.Note != undefined && note.Note.length > 0; }, Label: '' }),
            react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__.Modal, { Show: showEdit, Title: 'Edit Note', ShowCancel: true, CallBack: closeEdit, ConfirmBtnClass: 'btn-primary' + (note.Note == undefined || note.Note.length == 0 ? ' disabled' : ''), ShowX: true, ConfirmShowToolTip: note.Note.length == 0, ConfirmToolTipContent: react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_4__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                    "An empty Note can not be saved.") },
                react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_0__.TextArea, { Record: note, Rows: 4, Field: 'Note', Setter: function (n) { if (n.Note == null)
                        setNote(__assign(__assign({}, n), { Note: '' }));
                    else
                        setNote(n); }, Valid: function () { return note.Note != undefined && note.Note.length > 0; }, Label: '' }))),
        react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", { className: "card-footer" },
            react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", { className: "btn-group mr-2" },
                react__WEBPACK_IMPORTED_MODULE_4__.createElement("button", { className: "btn btn-primary" + (note.Note == undefined || note.Note.length == 0 ? ' disabled' : ''), onClick: function () { if (note.Note != undefined && note.Note.length > 0)
                        addNote(note); }, "data-tooltip": "Add", style: { cursor: note.Note == undefined || note.Note.length == 0 ? 'not-allowed' : 'pointer' }, onMouseOver: function () { return setHoverAdd(true); }, onMouseOut: function () { return setHoverAdd(false); } }, "Add Note"),
                react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__.ToolTip, { Show: hoverAdd && (note.Note == undefined || note.Note.length == 0), Position: 'top', Theme: 'dark', Target: "Add" },
                    react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, " A note needs to be entered. "))),
            react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", { className: "btn-group mr-2" },
                react__WEBPACK_IMPORTED_MODULE_4__.createElement("button", { className: "btn btn-default" + (note.Note == undefined || note.Note.length == 0 ? ' disabled' : ''), onClick: function () { return setNote(function (note) { return (__assign(__assign({}, note), { Note: '' })); }); }, style: { cursor: (note.Note == undefined || note.Note.length == 0) ? 'not-allowed' : 'pointer' }, "data-tooltip": "Remove", onMouseOver: function () { return setHoverClear(true); }, onMouseOut: function () { return setHoverClear(false); } }, "Clear"),
                react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__.ToolTip, { Show: hoverClear && (note.Note == undefined || note.Note.length == 0), Position: 'top', Theme: 'dark', Target: "Remove" },
                    react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, " The note field is already empty. "))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteWindow);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NaU1ELy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL0NvbW1vbkNvbXBvbmVudHMvTm90ZVdpbmRvdy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdHQUF3RztBQUN4Ryx3QkFBd0I7QUFDeEIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRDtBQUNZO0FBQ25CO0FBQ3ZCO0FBQ1E7QUFJL0IsU0FBUyxVQUFVLENBQUMsS0FBb0I7SUFFOUIsZ0JBQWtCLDJDQUFjLENBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBbEgsSUFBSSxVQUFFLE9BQU8sUUFBcUcsQ0FBQztJQUNwSCxnQkFBc0IsMkNBQWMsQ0FBVSxLQUFLLENBQUMsTUFBbkQsUUFBUSxVQUFFLE9BQU8sUUFBa0MsQ0FBQztJQUVyRCxnQkFBMEIsMkNBQWMsQ0FBbUIsRUFBRSxDQUFDLE1BQTdELFFBQVEsVUFBRSxXQUFXLFFBQXdDLENBQUM7SUFDL0QsZ0JBQTRCLDJDQUFjLENBQWtCLFdBQVcsQ0FBQyxNQUF2RSxTQUFTLFVBQUUsWUFBWSxRQUFnRCxDQUFDO0lBQ3pFLGdCQUE0QiwyQ0FBYyxDQUFVLEtBQUssQ0FB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QUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQU0sY0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLDhCQUFNLElBQUksS0FBRSxJQUFJLEVBQUUsRUFBRSxJQUFHLEVBQXZCLENBQXVCLENBQUMsRUFBMUMsQ0FBMEMsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsa0JBQWdCLFFBQVEsRUFBRSxXQUFXLEVBQUUsY0FBTSxvQkFBYSxDQUFDLElBQUksQ0FBQyxFQUFuQixDQUFtQixFQUFFLFVBQVUsRUFBRSxjQUFNLG9CQUFhLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLFlBQWlCO2dCQUNqWSxpREFBQyxvRUFBTyxJQUFDLElBQUksRUFBRSxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVE7b0JBQzVILGlHQUF5QyxDQUNuQyxDQUNSLENBQ0osQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBRUQsaUVBQWUsVUFBVSxFQUFDIiwiZmlsZSI6Ind3d3Jvb3RfU2NyaXB0c19UU1hfTWlNRF9Db21tb25Db21wb25lbnRzX05vdGVXaW5kb3dfdHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEFzc2V0Tm90ZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDEvMjIvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCB7IE1vZGFsLCBUb29sVGlwIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmZ1bmN0aW9uIE5vdGVXaW5kb3cocHJvcHM6IHsgSUQ6IG51bWJlcn0pOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gUmVhY3QudXNlU3RhdGU8TWlNRC5Ob3RlPih7IElEOiAwLCBNZXRlcklEOiBwcm9wcy5JRCwgTm90ZTogJycsIFVzZXJBY2NvdW50OiAnJywgVGltZXN0YW1wOiAnJyB9KTtcclxuICAgIGNvbnN0IFtzaG93RWRpdCwgc2V0RWRpdF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW25vdGVMaXN0LCBzZXROb3RlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNaU1ELk5vdGU+PihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgTWlNRC5Ob3RlPignVGltZXN0YW1wJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbaG92ZXJBZGQsIHNldEhvdmVyQWRkXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtob3ZlckNsZWFyLCBzZXRIb3ZlckNsZWFyXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBnZXROb3RlcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLklELCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRWRpdChkOiBNaU1ELk5vdGUpIHtcclxuICAgICAgICBzZXROb3RlKGQpO1xyXG4gICAgICAgIHNldEVkaXQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLklEKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Tm90ZXMoKTogSlF1ZXJ5LmpxWEhSIHtcclxuICAgICAgICBpZiAocHJvcHMuSUQgPCAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9Ob3RlLyR7cHJvcHMuSUR9LyR7c29ydEZpZWxkfS8ke2FzY2VuZGluZz8gMTogMH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgfSlcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PE1pTUQuTm90ZT4pID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoZGF0YSkgPT0gXCJzdHJpbmdcIikgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICAgIHNldE5vdGVMaXN0KGRhdGEpO1xyXG4gICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZU5vdGUoZDogTWlNRC5Ob3RlKTogdm9pZCB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9Ob3RlL0RlbGV0ZWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZCksXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoKCkgPT4gZ2V0Tm90ZXMoKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE5vdGUoZDogTWlNRC5Ob3RlKTogdm9pZCB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvTm90ZS9BZGRgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgLi4uZCwgSUQ6IDAsIE1ldGVySUQ6IHByb3BzLklELCBUaW1lc3RhbXA6IG1vbWVudCgpLmZvcm1hdCgnTU0vREQvWVlZWSBISDptbScpLCBVc2VyQWNjb3VudDogJycgfSBhcyBNaU1ELk5vdGUpLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS5kb25lKGUgPT4ge1xyXG4gICAgICAgICAgICBnZXROb3RlcygpO1xyXG4gICAgICAgICAgICBzZXROb3RlKHsgSUQ6IDAsIE1ldGVySUQ6IHByb3BzLklELCBOb3RlOiAnJywgVXNlckFjY291bnQ6ICcnLCBUaW1lc3RhbXA6ICcnIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlRWRpdChjb25maXJtOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKG5vdGUuTm90ZS5sZW5ndGggPT0gMCAmJiBjb25maXJtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gICAgICAgIGlmIChjb25maXJtKSB7XHJcbiAgICAgICAgICAgIGxldCBuID0gXy5jbG9uZURlZXAobm90ZSlcclxuICAgICAgICAgICAgZGVsZXRlTm90ZShuKTtcclxuICAgICAgICAgICAgYWRkTm90ZShuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Tm90ZSh7IElEOiAwLCBNZXRlcklEOiBwcm9wcy5JRCwgTm90ZTogJycsIFVzZXJBY2NvdW50OiAnJywgVGltZXN0YW1wOiAnJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5vdGVzOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxNaU1ELk5vdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTm90ZScsIGxhYmVsOiAnTm90ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNTAlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzUwJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgbGFiZWw6ICdUaW1lJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtKSA9PiBtb21lbnQudXRjKGl0ZW0uVGltZXN0YW1wKS5mb3JtYXQoXCJNTS9ERC9ZWVlZIEhIOm1tXCIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVc2VyQWNjb3VudCcsIGxhYmVsOiAnVXNlcicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtKSA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IGhhbmRsZUVkaXQoaXRlbSl9PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBvbkNsaWNrPXsoZSkgPT4gZGVsZXRlTm90ZShpdGVtKX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIj48L2k+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e25vdGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEtleT17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sRmllbGQgPT0gc29ydEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyhkLmNvbEZpZWxkICE9ICdUaW1lc3RhbXAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sRmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT0gbm90ZS5JRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhPE1pTUQuTm90ZT4gUmVjb3JkPXtub3RlfSBSb3dzPXs0fSBGaWVsZD17J05vdGUnfSBTZXR0ZXI9eyhuKSA9PiBzZXROb3RlKG4pfSBWYWxpZD17KCkgPT4gbm90ZS5Ob3RlICE9IHVuZGVmaW5lZCAmJiBub3RlLk5vdGUubGVuZ3RoID4gMH0gTGFiZWw9eycnfSAvPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIFNob3c9e3Nob3dFZGl0fSBUaXRsZT17J0VkaXQgTm90ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvd0NhbmNlbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDYWxsQmFjaz17Y2xvc2VFZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgIENvbmZpcm1CdG5DbGFzcz17J2J0bi1wcmltYXJ5JyArIChub3RlLk5vdGUgPT0gdW5kZWZpbmVkIHx8IG5vdGUuTm90ZS5sZW5ndGggPT0gMCA/ICcgZGlzYWJsZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgIFNob3dYPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENvbmZpcm1TaG93VG9vbFRpcD17bm90ZS5Ob3RlLmxlbmd0aCA9PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgIENvbmZpcm1Ub29sVGlwQ29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbiBlbXB0eSBOb3RlIGNhbiBub3QgYmUgc2F2ZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYTxNaU1ELk5vdGU+IFJlY29yZD17bm90ZX0gUm93cz17NH0gRmllbGQ9eydOb3RlJ30gU2V0dGVyPXsobikgPT4geyBpZiAobi5Ob3RlID09IG51bGwpIHNldE5vdGUoeyAuLi5uLCBOb3RlOiAnJyB9KTsgZWxzZSBzZXROb3RlKG4pOyB9fSBWYWxpZD17KCkgPT4gbm90ZS5Ob3RlICE9IHVuZGVmaW5lZCAmJiBub3RlLk5vdGUubGVuZ3RoID4gMH0gTGFiZWw9eycnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIG1yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gYnRuLXByaW1hcnlcIiArIChub3RlLk5vdGUgPT0gdW5kZWZpbmVkIHx8IG5vdGUuTm90ZS5sZW5ndGggPT0gMCA/ICcgZGlzYWJsZWQnIDogJycpfSBvbkNsaWNrPXsoKSA9PiB7IGlmIChub3RlLk5vdGUgIT0gdW5kZWZpbmVkICYmIG5vdGUuTm90ZS5sZW5ndGggPiAwKSBhZGROb3RlKG5vdGUpOyB9fSBkYXRhLXRvb2x0aXA9e1wiQWRkXCJ9IHN0eWxlPXt7IGN1cnNvcjogbm90ZS5Ob3RlID09IHVuZGVmaW5lZCB8fCBub3RlLk5vdGUubGVuZ3RoID09IDAgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInIH19IG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlckFkZCh0cnVlKX0gb25Nb3VzZU91dD17KCkgPT4gc2V0SG92ZXJBZGQoZmFsc2UpfT5BZGQgTm90ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sVGlwIFNob3c9e2hvdmVyQWRkICYmIChub3RlLk5vdGUgPT0gdW5kZWZpbmVkIHx8IG5vdGUuTm90ZS5sZW5ndGggPT0gMCl9IFBvc2l0aW9uPXsndG9wJ30gVGhlbWU9eydkYXJrJ30gVGFyZ2V0PXtcIkFkZFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEEgbm90ZSBuZWVkcyB0byBiZSBlbnRlcmVkLiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sVGlwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1kZWZhdWx0XCIgKyAobm90ZS5Ob3RlID09IHVuZGVmaW5lZCB8fCBub3RlLk5vdGUubGVuZ3RoID09IDAgPyAnIGRpc2FibGVkJyA6ICcnKX0gb25DbGljaz17KCkgPT4gc2V0Tm90ZSgobm90ZSkgPT4gKHsgLi4ubm90ZSwgTm90ZTogJycgfSkpfSBzdHlsZT17eyBjdXJzb3I6IChub3RlLk5vdGUgPT0gdW5kZWZpbmVkIHx8IG5vdGUuTm90ZS5sZW5ndGggPT0gMCkgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInIH19IGRhdGEtdG9vbHRpcD17XCJSZW1vdmVcIn0gb25Nb3VzZU92ZXI9eygpID0+IHNldEhvdmVyQ2xlYXIodHJ1ZSl9IG9uTW91c2VPdXQ9eygpID0+IHNldEhvdmVyQ2xlYXIoZmFsc2UpfSA+Q2xlYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbFRpcCBTaG93PXtob3ZlckNsZWFyICYmIChub3RlLk5vdGUgPT0gdW5kZWZpbmVkIHx8IG5vdGUuTm90ZS5sZW5ndGggPT0gMCl9IFBvc2l0aW9uPXsndG9wJ30gVGhlbWU9eydkYXJrJ30gVGFyZ2V0PXtcIlJlbW92ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IFRoZSBub3RlIGZpZWxkIGlzIGFscmVhZHkgZW1wdHkuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xUaXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RlV2luZG93OyJdLCJzb3VyY2VSb290IjoiIn0=