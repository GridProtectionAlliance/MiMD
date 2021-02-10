(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ConfigurationByMeter~DiagnosticByMeter"],{

/***/ "./TSX/MiMD/CommonComponents/NoteWindow.tsx":
/*!**************************************************!*\
  !*** ./TSX/MiMD/CommonComponents/NoteWindow.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gpa_gemstone_react_forms_lib_TextArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gpa-gemstone/react-forms/lib/TextArea */ "../../node_modules/@gpa-gemstone/react-forms/lib/TextArea.js");
/* harmony import */ var _gpa_gemstone_react_forms_lib_TextArea__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms_lib_TextArea__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-interactive */ "../../node_modules/@gpa-gemstone/react-interactive/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
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
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_4__["useState"]({ ID: 0, MeterID: props.ID, Note: '', UserAccount: '', Timestamp: '' }), 2), note = _a[0], setNote = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_4__["useState"](false), 2), showEdit = _b[0], setEdit = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_4__["useState"]([]), 2), noteList = _c[0], setNoteList = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_4__["useState"]('Timestamp'), 2), sortField = _d[0], setSortField = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_4__["useState"](false), 2), ascending = _e[0], setAscending = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_4__["useState"](false), 2), hoverAdd = _f[0], setHoverAdd = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_4__["useState"](false), 2), hoverClear = _g[0], setHoverClear = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_4__["useState"](false), 2), hoverSave = _h[0], setHoverSave = _h[1];
    react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
        var handle = getNotes();
        return function () {
            if (handle.abort != undefined)
                handle.abort();
        };
    }, [props.ID, ascending, sortField]);
    function handleEdit(d) {
        setNote(d);
        setEdit(true);
    }
    function getNotes() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/MiMD/Note/" + props.ID + "/" + sortField + "/" + (ascending ? 1 : 0),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
        handle.done(function (data) {
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
            var n = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.cloneDeep(note);
            deleteNote(n);
            addNote(n);
        }
        setNote({ ID: 0, MeterID: props.ID, Note: '', UserAccount: '', Timestamp: '' });
    }
    return (react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "card", style: { marginBottom: 10 } },
        react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "row" },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "col" },
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h4", null, "Notes:")))),
        react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "card-body" },
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                            { key: 'Note', label: 'Note', headerStyle: { width: '50%' }, rowStyle: { width: '50%' } },
                            { key: 'Timestamp', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item) { return moment.utc(item.Timestamp).format("MM/DD/YYYY HH:mm"); } },
                            { key: 'UserAccount', label: 'User', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                            {
                                key: null, label: '', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: function (item) { return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null,
                                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { className: "btn btn-sm", onClick: function (e) { return handleEdit(item); } },
                                        react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null,
                                            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("i", { className: "fa fa-pencil" }))),
                                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { className: "btn btn-sm", onClick: function (e) { return deleteNote(item); } },
                                        react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", null,
                                            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("i", { className: "fa fa-times" })))); }
                            },
                        ], tableClass: "table table-hover", data: noteList, sortField: sortField, ascending: ascending, onSort: function (d) {
                            if (d.col == sortField)
                                setAscending(!ascending);
                            else {
                                setAscending(true);
                                setSortField(d.col);
                            }
                        }, onClick: function () { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID == note.ID; } }))),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_forms_lib_TextArea__WEBPACK_IMPORTED_MODULE_0___default.a, { Record: note, Rows: 4, Field: 'Note', Setter: function (n) { return setNote(n); }, Valid: function () { return note.Note.length > 0; }, Label: '' }),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["Modal"], { Show: showEdit, Title: 'Edit Note', ShowCancel: true, CallBack: closeEdit, ConfirmBtnClass: 'btn-primary' + (note.Note.length == 0 ? ' disabled' : ''), ShowX: true, ConfirmToolTip: 'Save', OnHover: function (hov) { return setHoverSave(hov == 'Confirm'); } },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_forms_lib_TextArea__WEBPACK_IMPORTED_MODULE_0___default.a, { Record: note, Rows: 4, Field: 'Note', Setter: function (n) { if (n.Note == null)
                        setNote(__assign(__assign({}, n), { Note: '' }));
                    else
                        setNote(n); }, Valid: function () { return note.Note.length > 0; }, Label: '' })),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["ToolTip"], { Show: hoverSave && note.Note.length == 0, Position: 'top', Theme: 'dark', Target: "Save", Zindex: 9999 },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null,
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                    "An empty Note can not be saved. "))),
        react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "card-footer" },
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "btn-group mr-2" },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { className: "btn btn-primary" + (note.Note.length == 0 ? ' disabled' : ''), onClick: function () { if (note.Note.length > 0)
                        addNote(note); }, "data-tooltip": "Add", style: { cursor: note.Note.length == 0 ? 'not-allowed' : 'pointer' }, onMouseOver: function () { return setHoverAdd(true); }, onMouseOut: function () { return setHoverAdd(false); } }, "Add Note"),
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["ToolTip"], { Show: hoverAdd && note.Note.length == 0, Position: 'top', Theme: 'dark', Target: "Add" },
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, " A note needs to be entered. "))),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "btn-group mr-2" },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { className: "btn btn-default" + (note.Note.length == 0 ? ' disabled' : ''), onClick: function () { return setNote(function (note) { return (__assign(__assign({}, note), { Note: '' })); }); }, style: { cursor: note.Note.length == 0 ? 'not-allowed' : 'pointer' }, "data-tooltip": "Remove", onMouseOver: function () { return setHoverClear(true); }, onMouseOut: function () { return setHoverClear(false); } }, "Clear"),
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["ToolTip"], { Show: hoverClear && note.Note.length == 0, Position: 'top', Theme: 'dark', Target: "Remove" },
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, " The note field is already empty. "))))));
}
/* harmony default export */ __webpack_exports__["default"] = (NoteWindow);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db21tb25Db21wb25lbnRzL05vdGVXaW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLHdCQUF3QjtBQUN4QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDO0FBQ0c7QUFDbkI7QUFDdkI7QUFDUTtBQUkvQixTQUFTLFVBQVUsQ0FBQyxLQUFvQjtJQUU5QiwwSUFBbUgsRUFBbEgsWUFBSSxFQUFFLGVBQTRHLENBQUM7SUFDcEgseUVBQW9ELEVBQW5ELGdCQUFRLEVBQUUsZUFBeUMsQ0FBQztJQUVyRCxzRUFBOEQsRUFBN0QsZ0JBQVEsRUFBRSxtQkFBbUQsQ0FBQztJQUMvRCwrRUFBd0UsRUFBdkUsaUJBQVMsRUFBRSxvQkFBNEQsQ0FBQztJQUN6RSx5RUFBMEQsRUFBekQsaUJBQVMsRUFBRSxvQkFBOEMsQ0FBQztJQUczRCx5RUFBd0QsRUFBdkQsZ0JBQVEsRUFBRSxtQkFBNkMsQ0FBQztJQUN6RCx5RUFBNEQsRUFBM0Qsa0JBQVUsRUFBRSxxQkFBK0MsQ0FBQztJQUM3RCx5RUFBMEQsRUFBekQsaUJBQVMsRUFBRSxvQkFBOEMsQ0FBQztJQUVqRSwrQ0FBZSxDQUFDO1FBQ1osSUFBSSxNQUFNLEdBQUcsUUFBUSxFQUFFLENB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RSxNQUFNLEVBQUUsUUFBUTtvQkFDaEcsb0dBQXlDLENBQ25DLENBQ1IsQ0FDSixDQUNKLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFYyx5RUFBVSxFQUFDIiwiZmlsZSI6IkNvbmZpZ3VyYXRpb25CeU1ldGVyfkRpYWdub3N0aWNCeU1ldGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEFzc2V0Tm90ZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDEvMjIvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zL2xpYi9UZXh0QXJlYSc7XHJcbmltcG9ydCB7IE1vZGFsLCBUb29sVGlwIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1pbnRlcmFjdGl2ZSc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNaU1EIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuZGVjbGFyZSB2YXIgaG9tZVBhdGg6IHN0cmluZztcclxuXHJcbmZ1bmN0aW9uIE5vdGVXaW5kb3cocHJvcHM6IHsgSUQ6IG51bWJlcn0pOiBKU1guRWxlbWVudCB7XHJcblxyXG4gICAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gUmVhY3QudXNlU3RhdGU8TWlNRC5Ob3RlPih7IElEOiAwLCBNZXRlcklEOiBwcm9wcy5JRCwgTm90ZTogJycsIFVzZXJBY2NvdW50OiAnJywgVGltZXN0YW1wOiAnJyB9KTtcclxuICAgIGNvbnN0IFtzaG93RWRpdCwgc2V0RWRpdF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW25vdGVMaXN0LCBzZXROb3RlTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNaU1ELk5vdGU+PihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgTWlNRC5Ob3RlPignVGltZXN0YW1wJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbaG92ZXJBZGQsIHNldEhvdmVyQWRkXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtob3ZlckNsZWFyLCBzZXRIb3ZlckNsZWFyXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtob3ZlclNhdmUsIHNldEhvdmVyU2F2ZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gZ2V0Tm90ZXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5JRCwgYXNjZW5kaW5nLCBzb3J0RmllbGRdKTtcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUVkaXQoZDogTWlNRC5Ob3RlKSB7XHJcbiAgICAgICAgc2V0Tm90ZShkKTtcclxuICAgICAgICBzZXRFZGl0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE5vdGVzKCk6IEpRdWVyeS5qcVhIUiB7XHJcbiAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvTm90ZS8ke3Byb3BzLklEfS8ke3NvcnRGaWVsZH0vJHthc2NlbmRpbmc/IDE6IDB9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgIH0pXHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBBcnJheTxNaU1ELk5vdGU+KSA9PiB7XHJcbiAgICAgICAgICAgIHNldE5vdGVMaXN0KGRhdGEpO1xyXG4gICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZU5vdGUoZDogTWlNRC5Ob3RlKTogdm9pZCB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9Ob3RlL0RlbGV0ZWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZCksXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoKCkgPT4gZ2V0Tm90ZXMoKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE5vdGUoZDogTWlNRC5Ob3RlKTogdm9pZCB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvTm90ZS9BZGRgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgLi4uZCwgSUQ6IDAsIE1ldGVySUQ6IHByb3BzLklELCBUaW1lc3RhbXA6IG1vbWVudCgpLmZvcm1hdCgnTU0vREQvWVlZWSBISDptbScpLCBVc2VyQWNjb3VudDogJycgfSBhcyBNaU1ELk5vdGUpLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS5kb25lKGUgPT4ge1xyXG4gICAgICAgICAgICBnZXROb3RlcygpO1xyXG4gICAgICAgICAgICBzZXROb3RlKHsgSUQ6IDAsIE1ldGVySUQ6IHByb3BzLklELCBOb3RlOiAnJywgVXNlckFjY291bnQ6ICcnLCBUaW1lc3RhbXA6ICcnIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlRWRpdChjb25maXJtOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKG5vdGUuTm90ZS5sZW5ndGggPT0gMCAmJiBjb25maXJtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gICAgICAgIGlmIChjb25maXJtKSB7XHJcbiAgICAgICAgICAgIGxldCBuID0gXy5jbG9uZURlZXAobm90ZSlcclxuICAgICAgICAgICAgZGVsZXRlTm90ZShuKTtcclxuICAgICAgICAgICAgYWRkTm90ZShuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Tm90ZSh7IElEOiAwLCBNZXRlcklEOiBwcm9wcy5JRCwgTm90ZTogJycsIFVzZXJBY2NvdW50OiAnJywgVGltZXN0YW1wOiAnJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5vdGVzOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxNaU1ELk5vdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTm90ZScsIGxhYmVsOiAnTm90ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnNTAlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzUwJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgbGFiZWw6ICdUaW1lJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtKSA9PiBtb21lbnQudXRjKGl0ZW0uVGltZXN0YW1wKS5mb3JtYXQoXCJNTS9ERC9ZWVlZIEhIOm1tXCIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVc2VyQWNjb3VudCcsIGxhYmVsOiAnVXNlcicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtKSA9PiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IGhhbmRsZUVkaXQoaXRlbSl9PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBvbkNsaWNrPXsoZSkgPT4gZGVsZXRlTm90ZShpdGVtKX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIj48L2k+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e25vdGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiAnMTUwcHgnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBpdGVtLklEID09IG5vdGUuSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYTxNaU1ELk5vdGU+IFJlY29yZD17bm90ZX0gUm93cz17NH0gRmllbGQ9eydOb3RlJ30gU2V0dGVyPXsobikgPT4gc2V0Tm90ZShuKX0gVmFsaWQ9eygpID0+IG5vdGUuTm90ZS5sZW5ndGggPiAwfSBMYWJlbD17Jyd9IC8+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgU2hvdz17c2hvd0VkaXR9IFRpdGxlPXsnRWRpdCBOb3RlJ31cclxuICAgICAgICAgICAgICAgICAgICBTaG93Q2FuY2VsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIENhbGxCYWNrPXtjbG9zZUVkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlybUJ0bkNsYXNzPXsnYnRuLXByaW1hcnknICsgKG5vdGUuTm90ZS5sZW5ndGggPT0gMCA/ICcgZGlzYWJsZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgIFNob3dYPXt0cnVlfSBDb25maXJtVG9vbFRpcD17J1NhdmUnfVxyXG4gICAgICAgICAgICAgICAgICAgIE9uSG92ZXI9eyhob3YpID0+IHNldEhvdmVyU2F2ZShob3YgPT0gJ0NvbmZpcm0nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhPE1pTUQuTm90ZT4gUmVjb3JkPXtub3RlfSBSb3dzPXs0fSBGaWVsZD17J05vdGUnfSBTZXR0ZXI9eyhuKSA9PiB7IGlmIChuLk5vdGUgPT0gbnVsbCkgc2V0Tm90ZSh7IC4uLm4sIE5vdGU6ICcnIH0pOyBlbHNlIHNldE5vdGUobik7IH19IFZhbGlkPXsoKSA9PiBub3RlLk5vdGUubGVuZ3RoID4gMH0gTGFiZWw9eycnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDxUb29sVGlwIFNob3c9e2hvdmVyU2F2ZSAmJiBub3RlLk5vdGUubGVuZ3RoID09IDB9IFBvc2l0aW9uPXsndG9wJ30gVGhlbWU9eydkYXJrJ30gVGFyZ2V0PXtcIlNhdmVcIn0gWmluZGV4PXs5OTk5fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuIGVtcHR5IE5vdGUgY2FuIG5vdCBiZSBzYXZlZC4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sVGlwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBidG4tcHJpbWFyeVwiICsgKG5vdGUuTm90ZS5sZW5ndGggPT0gMCA/ICcgZGlzYWJsZWQnIDogJycpfSBvbkNsaWNrPXsoKSA9PiB7IGlmIChub3RlLk5vdGUubGVuZ3RoID4gMCkgYWRkTm90ZShub3RlKTsgfX0gZGF0YS10b29sdGlwPXtcIkFkZFwifSBzdHlsZT17eyBjdXJzb3I6IG5vdGUuTm90ZS5sZW5ndGggPT0gMCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicgfX0gb25Nb3VzZU92ZXI9eygpID0+IHNldEhvdmVyQWRkKHRydWUpfSBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlckFkZChmYWxzZSl9PkFkZCBOb3RlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xUaXAgU2hvdz17aG92ZXJBZGQgJiYgbm90ZS5Ob3RlLmxlbmd0aCA9PSAwfSBQb3NpdGlvbj17J3RvcCd9IFRoZW1lPXsnZGFyayd9IFRhcmdldD17XCJBZGRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBBIG5vdGUgbmVlZHMgdG8gYmUgZW50ZXJlZC4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBidG4tZGVmYXVsdFwiICsgKG5vdGUuTm90ZS5sZW5ndGggPT0gMCA/ICcgZGlzYWJsZWQnIDogJycpfSBvbkNsaWNrPXsoKSA9PiBzZXROb3RlKChub3RlKSA9PiAoeyAuLi5ub3RlLCBOb3RlOiAnJyB9KSl9IHN0eWxlPXt7IGN1cnNvcjogbm90ZS5Ob3RlLmxlbmd0aCA9PSAwID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyB9fSBkYXRhLXRvb2x0aXA9e1wiUmVtb3ZlXCJ9IG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlckNsZWFyKHRydWUpfSBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlckNsZWFyKGZhbHNlKX0gPkNsZWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xUaXAgU2hvdz17aG92ZXJDbGVhciAmJiBub3RlLk5vdGUubGVuZ3RoID09IDB9IFBvc2l0aW9uPXsndG9wJ30gVGhlbWU9eydkYXJrJ30gVGFyZ2V0PXtcIlJlbW92ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IFRoZSBub3RlIGZpZWxkIGlzIGFscmVhZHkgZW1wdHkuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xUaXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RlV2luZG93OyJdLCJzb3VyY2VSb290IjoiIn0=