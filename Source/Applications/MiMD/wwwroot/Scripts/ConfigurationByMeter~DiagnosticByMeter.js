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
                                setAscending(d.col != 'Timestamp');
                                setSortField(d.col);
                            }
                        }, onClick: function () { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID == note.ID; } }))),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_forms_lib_TextArea__WEBPACK_IMPORTED_MODULE_0___default.a, { Record: note, Rows: 4, Field: 'Note', Setter: function (n) { return setNote(n); }, Valid: function () { return note.Note != undefined && note.Note.length > 0; }, Label: '' }),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["Modal"], { Show: showEdit, Title: 'Edit Note', ShowCancel: true, CallBack: closeEdit, ConfirmBtnClass: 'btn-primary' + (note.Note == undefined || note.Note.length == 0 ? ' disabled' : ''), ShowX: true, ConfirmToolTip: 'Save', OnHover: function (hov) { return setHoverSave(hov == 'Confirm'); } },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_forms_lib_TextArea__WEBPACK_IMPORTED_MODULE_0___default.a, { Record: note, Rows: 4, Field: 'Note', Setter: function (n) { if (n.Note == null)
                        setNote(__assign(__assign({}, n), { Note: '' }));
                    else
                        setNote(n); }, Valid: function () { return note.Note != undefined && note.Note.length > 0; }, Label: '' })),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["ToolTip"], { Show: hoverSave && note.Note.length == 0, Position: 'top', Theme: 'dark', Target: "Save", Zindex: 9999 },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null,
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                    "An empty Note can not be saved. "))),
        react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "card-footer" },
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "btn-group mr-2" },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { className: "btn btn-primary" + (note.Note == undefined || note.Note.length == 0 ? ' disabled' : ''), onClick: function () { if (note.Note != undefined && note.Note.length > 0)
                        addNote(note); }, "data-tooltip": "Add", style: { cursor: note.Note == undefined || note.Note.length == 0 ? 'not-allowed' : 'pointer' }, onMouseOver: function () { return setHoverAdd(true); }, onMouseOut: function () { return setHoverAdd(false); } }, "Add Note"),
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["ToolTip"], { Show: hoverAdd && (note.Note == undefined || note.Note.length == 0), Position: 'top', Theme: 'dark', Target: "Add" },
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, " A note needs to be entered. "))),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: "btn-group mr-2" },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { className: "btn btn-default" + (note.Note == undefined || note.Note.length == 0 ? ' disabled' : ''), onClick: function () { return setNote(function (note) { return (__assign(__assign({}, note), { Note: '' })); }); }, style: { cursor: (note.Note == undefined || note.Note.length == 0) ? 'not-allowed' : 'pointer' }, "data-tooltip": "Remove", onMouseOver: function () { return setHoverClear(true); }, onMouseOut: function () { return setHoverClear(false); } }, "Clear"),
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__["ToolTip"], { Show: hoverClear && (note.Note == undefined || note.Note.length == 0), Position: 'top', Theme: 'dark', Target: "Remove" },
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, " The note field is already empty. "))))));
}
/* harmony default export */ __webpack_exports__["default"] = (NoteWindow);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UU1gvTWlNRC9Db21tb25Db21wb25lbnRzL05vdGVXaW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLHdCQUF3QjtBQUN4QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDO0FBQ0c7QUFDbkI7QUFDdkI7QUFDUTtBQUkvQixTQUFTLFVBQVUsQ0FBQyxLQUFvQjtJQUU5QiwwSUFBbUgsRUFBbEgsWUFBSSxFQUFFLGVBQTRHLENBQUM7SUFDcEgseUVBQW9ELEVBQW5ELGdCQUFRLEVBQUUsZUFBeUMsQ0FBQztJQUVyRCxzRUFBOEQsRUFBN0QsZ0JBQVEsRUFBRSxtQkFBbUQsQ0FBQztJQUMvRCwrRUFBd0UsRUFBdkUsaUJBQVMsRUFBRSxvQkFBNEQsQ0FBQztJQUN6RSx5RUFBMEQsRUFBekQsaUJBQVMsRUFBRSxvQkFBOEMsQ0FBQztJQUczRCx5RUFBd0QsRUFBdkQsZ0JBQVEsRUFBRSxtQkFBNkMsQ0FBQztJQUN6RCx5RUFBNEQsRUFBM0Qsa0JBQVUsRUFBRSxxQkFBK0MsQ0FBQztJQUM3RCx5RUFBMEQsRUFBekQsaUJBQVMsRUFBRSxvQkFBOEMsQ0FBQztJQUVqRSwrQ0FBZSxDQUFDO1FBQ1osSUFBSSxNQUFNLEdBQUcsUUFBUSxFQUFFLENB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RSxJQUFJLEVBQUUsRUFBRSxJQUFHLEVBQXZCLENBQXVCLENBQUMsRUFBMUMsQ0FBMEMsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsa0JBQWdCLFFBQVEsRUFBRSxXQUFXLEVBQUUsY0FBTSxvQkFBYSxDQUFDLElBQUksQ0FBQyxFQUFuQixDQUFtQixFQUFFLFVBQVUsRUFBRSxjQUFNLG9CQUFhLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLFlBQWlCO2dCQUNqWSxvREFBQyx1RUFBTyxJQUFDLElBQUksRUFBRSxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVE7b0JBQzVILG9HQUF5QyxDQUNuQyxDQUNSLENBQ0osQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBRWMseUVBQVUsRUFBQyIsImZpbGUiOiJDb25maWd1cmF0aW9uQnlNZXRlcn5EaWFnbm9zdGljQnlNZXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBBc3NldE5vdGUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAxLzIyLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcy9saWIvVGV4dEFyZWEnO1xyXG5pbXBvcnQgeyBNb2RhbCwgVG9vbFRpcCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtaW50ZXJhY3RpdmUnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWlNRCB9IGZyb20gJy4uL2dsb2JhbCc7XHJcbmRlY2xhcmUgdmFyIGhvbWVQYXRoOiBzdHJpbmc7XHJcblxyXG5mdW5jdGlvbiBOb3RlV2luZG93KHByb3BzOiB7IElEOiBudW1iZXJ9KTogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlPE1pTUQuTm90ZT4oeyBJRDogMCwgTWV0ZXJJRDogcHJvcHMuSUQsIE5vdGU6ICcnLCBVc2VyQWNjb3VudDogJycsIFRpbWVzdGFtcDogJycgfSk7XHJcbiAgICBjb25zdCBbc2hvd0VkaXQsIHNldEVkaXRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtub3RlTGlzdCwgc2V0Tm90ZUxpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWlNRC5Ob3RlPj4oW10pO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIE1pTUQuTm90ZT4oJ1RpbWVzdGFtcCcpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2hvdmVyQWRkLCBzZXRIb3ZlckFkZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaG92ZXJDbGVhciwgc2V0SG92ZXJDbGVhcl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaG92ZXJTYXZlLCBzZXRIb3ZlclNhdmVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IGdldE5vdGVzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUgIT0gbnVsbCAmJiBoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuSUQsIGFzY2VuZGluZywgc29ydEZpZWxkXSk7XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVFZGl0KGQ6IE1pTUQuTm90ZSkge1xyXG4gICAgICAgIHNldE5vdGUoZCk7XHJcbiAgICAgICAgc2V0RWRpdCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYU4ocHJvcHMuSUQpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXROb3RlcygpOiBKUXVlcnkuanFYSFIge1xyXG4gICAgICAgIGlmIChwcm9wcy5JRCA8IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL05vdGUvJHtwcm9wcy5JRH0vJHtzb3J0RmllbGR9LyR7YXNjZW5kaW5nPyAxOiAwfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICB9KVxyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8TWlNRC5Ob3RlPikgPT4ge1xyXG4gICAgICAgICAgICBzZXROb3RlTGlzdChkYXRhKTtcclxuICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVOb3RlKGQ6IE1pTUQuTm90ZSk6IHZvaWQge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01pTUQvTm90ZS9EZWxldGVgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGQpLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS5kb25lKCgpID0+IGdldE5vdGVzKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGROb3RlKGQ6IE1pTUQuTm90ZSk6IHZvaWQge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL05vdGUvQWRkYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IC4uLmQsIElEOiAwLCBNZXRlcklEOiBwcm9wcy5JRCwgVGltZXN0YW1wOiBtb21lbnQoKS5mb3JtYXQoJ01NL0REL1lZWVkgSEg6bW0nKSwgVXNlckFjY291bnQ6ICcnIH0gYXMgTWlNRC5Ob3RlKSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZShlID0+IHtcclxuICAgICAgICAgICAgZ2V0Tm90ZXMoKTtcclxuICAgICAgICAgICAgc2V0Tm90ZSh7IElEOiAwLCBNZXRlcklEOiBwcm9wcy5JRCwgTm90ZTogJycsIFVzZXJBY2NvdW50OiAnJywgVGltZXN0YW1wOiAnJyB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUVkaXQoY29uZmlybTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChub3RlLk5vdGUubGVuZ3RoID09IDAgJiYgY29uZmlybSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZXRFZGl0KGZhbHNlKTtcclxuICAgICAgICBpZiAoY29uZmlybSkge1xyXG4gICAgICAgICAgICBsZXQgbiA9IF8uY2xvbmVEZWVwKG5vdGUpXHJcbiAgICAgICAgICAgIGRlbGV0ZU5vdGUobik7XHJcbiAgICAgICAgICAgIGFkZE5vdGUobik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE5vdGUoeyBJRDogMCwgTWV0ZXJJRDogcHJvcHMuSUQsIE5vdGU6ICcnLCBVc2VyQWNjb3VudDogJycsIFRpbWVzdGFtcDogJycgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ob3Rlczo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8TWlNRC5Ob3RlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05vdGUnLCBsYWJlbDogJ05vdGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzUwJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICc1MCUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1RpbWVzdGFtcCcsIGxhYmVsOiAnVGltZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSkgPT4gbW9tZW50LnV0YyhpdGVtLlRpbWVzdGFtcCkuZm9ybWF0KFwiTU0vREQvWVlZWSBISDptbVwiKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVXNlckFjY291bnQnLCBsYWJlbDogJ1VzZXInLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSkgPT4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVFZGl0KGl0ZW0pfT48c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KGUpID0+IGRlbGV0ZU5vdGUoaXRlbSl9PjxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtub3RlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoZC5jb2wgIT0gJ1RpbWVzdGFtcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT0gbm90ZS5JRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhPE1pTUQuTm90ZT4gUmVjb3JkPXtub3RlfSBSb3dzPXs0fSBGaWVsZD17J05vdGUnfSBTZXR0ZXI9eyhuKSA9PiBzZXROb3RlKG4pfSBWYWxpZD17KCkgPT4gbm90ZS5Ob3RlICE9IHVuZGVmaW5lZCAmJiBub3RlLk5vdGUubGVuZ3RoID4gMH0gTGFiZWw9eycnfSAvPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIFNob3c9e3Nob3dFZGl0fSBUaXRsZT17J0VkaXQgTm90ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvd0NhbmNlbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDYWxsQmFjaz17Y2xvc2VFZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgIENvbmZpcm1CdG5DbGFzcz17J2J0bi1wcmltYXJ5JyArIChub3RlLk5vdGUgPT0gdW5kZWZpbmVkIHx8IG5vdGUuTm90ZS5sZW5ndGggPT0gMCA/ICcgZGlzYWJsZWQnIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgIFNob3dYPXt0cnVlfSBDb25maXJtVG9vbFRpcD17J1NhdmUnfVxyXG4gICAgICAgICAgICAgICAgICAgIE9uSG92ZXI9eyhob3YpID0+IHNldEhvdmVyU2F2ZShob3YgPT0gJ0NvbmZpcm0nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhPE1pTUQuTm90ZT4gUmVjb3JkPXtub3RlfSBSb3dzPXs0fSBGaWVsZD17J05vdGUnfSBTZXR0ZXI9eyhuKSA9PiB7IGlmIChuLk5vdGUgPT0gbnVsbCkgc2V0Tm90ZSh7IC4uLm4sIE5vdGU6ICcnIH0pOyBlbHNlIHNldE5vdGUobik7IH19IFZhbGlkPXsoKSA9PiBub3RlLk5vdGUgIT0gdW5kZWZpbmVkICYmIG5vdGUuTm90ZS5sZW5ndGggPiAwfSBMYWJlbD17Jyd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xUaXAgU2hvdz17aG92ZXJTYXZlICYmIG5vdGUuTm90ZS5sZW5ndGggPT0gMH0gUG9zaXRpb249eyd0b3AnfSBUaGVtZT17J2RhcmsnfSBUYXJnZXQ9e1wiU2F2ZVwifSBaaW5kZXg9ezk5OTl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiA8aSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBjb2xvcjogJyNkYzM1NDUnIH19IGNsYXNzTmFtZT1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQW4gZW1wdHkgTm90ZSBjYW4gbm90IGJlIHNhdmVkLiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xUaXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIGJ0bi1wcmltYXJ5XCIgKyAobm90ZS5Ob3RlID09IHVuZGVmaW5lZCB8fCBub3RlLk5vdGUubGVuZ3RoID09IDAgPyAnIGRpc2FibGVkJyA6ICcnKX0gb25DbGljaz17KCkgPT4geyBpZiAobm90ZS5Ob3RlICE9IHVuZGVmaW5lZCAmJiBub3RlLk5vdGUubGVuZ3RoID4gMCkgYWRkTm90ZShub3RlKTsgfX0gZGF0YS10b29sdGlwPXtcIkFkZFwifSBzdHlsZT17eyBjdXJzb3I6IG5vdGUuTm90ZSA9PSB1bmRlZmluZWQgfHwgbm90ZS5Ob3RlLmxlbmd0aCA9PSAwID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyB9fSBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXJBZGQodHJ1ZSl9IG9uTW91c2VPdXQ9eygpID0+IHNldEhvdmVyQWRkKGZhbHNlKX0+QWRkIE5vdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbFRpcCBTaG93PXtob3ZlckFkZCAmJiAobm90ZS5Ob3RlID09IHVuZGVmaW5lZCB8fCBub3RlLk5vdGUubGVuZ3RoID09IDApfSBQb3NpdGlvbj17J3RvcCd9IFRoZW1lPXsnZGFyayd9IFRhcmdldD17XCJBZGRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBBIG5vdGUgbmVlZHMgdG8gYmUgZW50ZXJlZC4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBidG4tZGVmYXVsdFwiICsgKG5vdGUuTm90ZSA9PSB1bmRlZmluZWQgfHwgbm90ZS5Ob3RlLmxlbmd0aCA9PSAwID8gJyBkaXNhYmxlZCcgOiAnJyl9IG9uQ2xpY2s9eygpID0+IHNldE5vdGUoKG5vdGUpID0+ICh7IC4uLm5vdGUsIE5vdGU6ICcnIH0pKX0gc3R5bGU9e3sgY3Vyc29yOiAobm90ZS5Ob3RlID09IHVuZGVmaW5lZCB8fCBub3RlLk5vdGUubGVuZ3RoID09IDApID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyB9fSBkYXRhLXRvb2x0aXA9e1wiUmVtb3ZlXCJ9IG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlckNsZWFyKHRydWUpfSBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlckNsZWFyKGZhbHNlKX0gPkNsZWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xUaXAgU2hvdz17aG92ZXJDbGVhciAmJiAobm90ZS5Ob3RlID09IHVuZGVmaW5lZCB8fCBub3RlLk5vdGUubGVuZ3RoID09IDApfSBQb3NpdGlvbj17J3RvcCd9IFRoZW1lPXsnZGFyayd9IFRhcmdldD17XCJSZW1vdmVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBUaGUgbm90ZSBmaWVsZCBpcyBhbHJlYWR5IGVtcHR5LiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sVGlwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZVdpbmRvdzsiXSwic291cmNlUm9vdCI6IiJ9