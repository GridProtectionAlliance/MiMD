(self["webpackChunkmimd"] = self["webpackChunkmimd"] || []).push([["wwwroot_Scripts_TSX_MiMD_CommonComponents_NoteWindow_tsx"],{

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
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState({ ID: 0, MeterID: props.ID, Note: '', UserAccount: '', Timestamp: '' }), 2), note = _a[0], setNote = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState(false), 2), showEdit = _b[0], setEdit = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState([]), 2), noteList = _c[0], setNoteList = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState('Timestamp'), 2), sortField = _d[0], setSortField = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState(false), 2), ascending = _e[0], setAscending = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState(false), 2), hoverAdd = _f[0], setHoverAdd = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState(false), 2), hoverClear = _g[0], setHoverClear = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_4__.useState(false), 2), hoverSave = _h[0], setHoverSave = _h[1];
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
                        ], tableClass: "table table-hover", data: noteList, sortField: sortField, ascending: ascending, onSort: function (d) {
                            if (d.col == sortField)
                                setAscending(!ascending);
                            else {
                                setAscending(d.col != 'Timestamp');
                                setSortField(d.col);
                            }
                        }, onClick: function () { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: '150px', width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID == note.ID; } }))),
            react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_0__.TextArea, { Record: note, Rows: 4, Field: 'Note', Setter: function (n) { return setNote(n); }, Valid: function () { return note.Note != undefined && note.Note.length > 0; }, Label: '' }),
            react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__.Modal, { Show: showEdit, Title: 'Edit Note', ShowCancel: true, CallBack: closeEdit, ConfirmBtnClass: 'btn-primary' + (note.Note == undefined || note.Note.length == 0 ? ' disabled' : ''), ShowX: true, ConfirmToolTipContent: 'Save' },
                react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_0__.TextArea, { Record: note, Rows: 4, Field: 'Note', Setter: function (n) { if (n.Note == null)
                        setNote(__assign(__assign({}, n), { Note: '' }));
                    else
                        setNote(n); }, Valid: function () { return note.Note != undefined && note.Note.length > 0; }, Label: '' })),
            react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gpa_gemstone_react_interactive__WEBPACK_IMPORTED_MODULE_1__.ToolTip, { Show: hoverSave && note.Note.length == 0, Position: 'top', Theme: 'dark', Target: "Save", Zindex: 9999 },
                react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null,
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4__.createElement("i", { style: { marginRight: '10px', color: '#dc3545' }, className: "fa fa-exclamation-circle" }),
                    "An empty Note can not be saved. "))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1kLy4vd3d3cm9vdC9TY3JpcHRzL1RTWC9NaU1EL0NvbW1vbkNvbXBvbmVudHMvTm90ZVdpbmRvdy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3R0FBd0c7QUFDeEcsd0JBQXdCO0FBQ3hCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQ7QUFDWTtBQUNuQjtBQUN2QjtBQUNRO0FBSS9CLFNBQVMsVUFBVSxDQUFDLEtBQW9CO0lBRTlCLGdCQUFrQiwyQ0FBYyxDQUFZLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQWxILElBQUksVUFBRSxPQUFPLFFBQXFHLENBQUM7SUFDcEgsZ0JBQXNCLDJDQUFjLENBQVUsS0FBSyxDQUFDLE1BQW5ELFFBQVEsVUFBRSxPQUFPLFFBQWtDLENBQUM7SUFFckQsZ0JBQTBCLDJDQUFjLENBQW1CLEVBQUUsQ0FBQyxNQUE3RCxRQUFRLFVBQUUsV0FBVyxRQUF3QyxDQUFDO0lBQy9ELGdCQUE0QiwyQ0FBYyxDQUFrQixXQUFXLENBQUMsTUFBdkUsU0FBUyxVQUFFLFlBQVksUUFBZ0QsQ0FBQztJQUN6RSxnQkFBNEIsMkNBQWMsQ0FBVSxLQUFLLENB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QUFRLFNBQVMsRUFBRSxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBTSxjQUFPLENBQUMsVUFBQyxJQUFJLElBQUssOEJBQU0sSUFBSSxLQUFFLElBQUksRUFBRSxFQUFFLElBQUcsRUFBdkIsQ0FBdUIsQ0FBQyxFQUExQyxDQUEwQyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxrQkFBZ0IsUUFBUSxFQUFFLFdBQVcsRUFBRSxjQUFNLG9CQUFhLENBQUMsSUFBSSxDQUFDLEVBQW5CLENBQW1CLEVBQUUsVUFBVSxFQUFFLGNBQU0sb0JBQWEsQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsWUFBaUI7Z0JBQ2pZLGlEQUFDLG9FQUFPLElBQUMsSUFBSSxFQUFFLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUTtvQkFDNUgsaUdBQXlDLENBQ25DLENBQ1IsQ0FDSixDQUNKLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFRCxpRUFBZSxVQUFVLEVBQUMiLCJmaWxlIjoid3d3cm9vdF9TY3JpcHRzX1RTWF9NaU1EX0NvbW1vbkNvbXBvbmVudHNfTm90ZVdpbmRvd190c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQXNzZXROb3RlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMS8yMi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IHsgTW9kYWwsIFRvb2xUaXAgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWludGVyYWN0aXZlJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1pTUQgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5kZWNsYXJlIHZhciBob21lUGF0aDogc3RyaW5nO1xyXG5cclxuZnVuY3Rpb24gTm90ZVdpbmRvdyhwcm9wczogeyBJRDogbnVtYmVyfSk6IEpTWC5FbGVtZW50IHtcclxuXHJcbiAgICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSBSZWFjdC51c2VTdGF0ZTxNaU1ELk5vdGU+KHsgSUQ6IDAsIE1ldGVySUQ6IHByb3BzLklELCBOb3RlOiAnJywgVXNlckFjY291bnQ6ICcnLCBUaW1lc3RhbXA6ICcnIH0pO1xyXG4gICAgY29uc3QgW3Nob3dFZGl0LCBzZXRFZGl0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbbm90ZUxpc3QsIHNldE5vdGVMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1pTUQuTm90ZT4+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBNaU1ELk5vdGU+KCdUaW1lc3RhbXAnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtob3ZlckFkZCwgc2V0SG92ZXJBZGRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2hvdmVyQ2xlYXIsIHNldEhvdmVyQ2xlYXJdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2hvdmVyU2F2ZSwgc2V0SG92ZXJTYXZlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBnZXROb3RlcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlICE9IG51bGwgJiYgaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLklELCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRWRpdChkOiBNaU1ELk5vdGUpIHtcclxuICAgICAgICBzZXROb3RlKGQpO1xyXG4gICAgICAgIHNldEVkaXQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHByb3BzLklEKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Tm90ZXMoKTogSlF1ZXJ5LmpxWEhSIHtcclxuICAgICAgICBpZiAocHJvcHMuSUQgPCAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9Ob3RlLyR7cHJvcHMuSUR9LyR7c29ydEZpZWxkfS8ke2FzY2VuZGluZz8gMTogMH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgfSlcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PE1pTUQuTm90ZT4pID0+IHtcclxuICAgICAgICAgICAgc2V0Tm90ZUxpc3QoZGF0YSk7XHJcbiAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlTm90ZShkOiBNaU1ELk5vdGUpOiB2b2lkIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NaU1EL05vdGUvRGVsZXRlYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkKSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZSgoKSA9PiBnZXROb3RlcygpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkTm90ZShkOiBNaU1ELk5vdGUpOiB2b2lkIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWlNRC9Ob3RlL0FkZGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyAuLi5kLCBJRDogMCwgTWV0ZXJJRDogcHJvcHMuSUQsIFRpbWVzdGFtcDogbW9tZW50KCkuZm9ybWF0KCdNTS9ERC9ZWVlZIEhIOm1tJyksIFVzZXJBY2NvdW50OiAnJyB9IGFzIE1pTUQuTm90ZSksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoZSA9PiB7XHJcbiAgICAgICAgICAgIGdldE5vdGVzKCk7XHJcbiAgICAgICAgICAgIHNldE5vdGUoeyBJRDogMCwgTWV0ZXJJRDogcHJvcHMuSUQsIE5vdGU6ICcnLCBVc2VyQWNjb3VudDogJycsIFRpbWVzdGFtcDogJycgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VFZGl0KGNvbmZpcm06IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAobm90ZS5Ob3RlLmxlbmd0aCA9PSAwICYmIGNvbmZpcm0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0pIHtcclxuICAgICAgICAgICAgbGV0IG4gPSBfLmNsb25lRGVlcChub3RlKVxyXG4gICAgICAgICAgICBkZWxldGVOb3RlKG4pO1xyXG4gICAgICAgICAgICBhZGROb3RlKG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXROb3RlKHsgSUQ6IDAsIE1ldGVySUQ6IHByb3BzLklELCBOb3RlOiAnJywgVXNlckFjY291bnQ6ICcnLCBUaW1lc3RhbXA6ICcnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Tm90ZXM6PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPE1pTUQuTm90ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOb3RlJywgbGFiZWw6ICdOb3RlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICc1MCUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnNTAlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdUaW1lc3RhbXAnLCBsYWJlbDogJ1RpbWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0pID0+IG1vbWVudC51dGMoaXRlbS5UaW1lc3RhbXApLmZvcm1hdChcIk1NL0REL1lZWVkgSEg6bW1cIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1VzZXJBY2NvdW50JywgbGFiZWw6ICdVc2VyJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0pID0+IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc21cIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlRWRpdChpdGVtKX0+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCI+PC9pPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIG9uQ2xpY2s9eyhlKSA9PiBkZWxldGVOb3RlKGl0ZW0pfT48c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiPjwvaT48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17bm90ZUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKGQuY29sICE9ICdUaW1lc3RhbXAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiAnMTUwcHgnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBpdGVtLklEID09IG5vdGUuSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYTxNaU1ELk5vdGU+IFJlY29yZD17bm90ZX0gUm93cz17NH0gRmllbGQ9eydOb3RlJ30gU2V0dGVyPXsobikgPT4gc2V0Tm90ZShuKX0gVmFsaWQ9eygpID0+IG5vdGUuTm90ZSAhPSB1bmRlZmluZWQgJiYgbm90ZS5Ob3RlLmxlbmd0aCA+IDB9IExhYmVsPXsnJ30gLz5cclxuICAgICAgICAgICAgICAgIDxNb2RhbCBTaG93PXtzaG93RWRpdH0gVGl0bGU9eydFZGl0IE5vdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIFNob3dDYW5jZWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FsbEJhY2s9e2Nsb3NlRWRpdH1cclxuICAgICAgICAgICAgICAgICAgICBDb25maXJtQnRuQ2xhc3M9eydidG4tcHJpbWFyeScgKyAobm90ZS5Ob3RlID09IHVuZGVmaW5lZCB8fCBub3RlLk5vdGUubGVuZ3RoID09IDAgPyAnIGRpc2FibGVkJyA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICBTaG93WD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBDb25maXJtVG9vbFRpcENvbnRlbnQ9J1NhdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYTxNaU1ELk5vdGU+IFJlY29yZD17bm90ZX0gUm93cz17NH0gRmllbGQ9eydOb3RlJ30gU2V0dGVyPXsobikgPT4geyBpZiAobi5Ob3RlID09IG51bGwpIHNldE5vdGUoeyAuLi5uLCBOb3RlOiAnJyB9KTsgZWxzZSBzZXROb3RlKG4pOyB9fSBWYWxpZD17KCkgPT4gbm90ZS5Ob3RlICE9IHVuZGVmaW5lZCAmJiBub3RlLk5vdGUubGVuZ3RoID4gMH0gTGFiZWw9eycnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDxUb29sVGlwIFNob3c9e2hvdmVyU2F2ZSAmJiBub3RlLk5vdGUubGVuZ3RoID09IDB9IFBvc2l0aW9uPXsndG9wJ30gVGhlbWU9eydkYXJrJ30gVGFyZ2V0PXtcIlNhdmVcIn0gWmluZGV4PXs5OTk5fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD4gPGkgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgY29sb3I6ICcjZGMzNTQ1JyB9fSBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuIGVtcHR5IE5vdGUgY2FuIG5vdCBiZSBzYXZlZC4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sVGlwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBidG4tcHJpbWFyeVwiICsgKG5vdGUuTm90ZSA9PSB1bmRlZmluZWQgfHwgbm90ZS5Ob3RlLmxlbmd0aCA9PSAwID8gJyBkaXNhYmxlZCcgOiAnJyl9IG9uQ2xpY2s9eygpID0+IHsgaWYgKG5vdGUuTm90ZSAhPSB1bmRlZmluZWQgJiYgbm90ZS5Ob3RlLmxlbmd0aCA+IDApIGFkZE5vdGUobm90ZSk7IH19IGRhdGEtdG9vbHRpcD17XCJBZGRcIn0gc3R5bGU9e3sgY3Vyc29yOiBub3RlLk5vdGUgPT0gdW5kZWZpbmVkIHx8IG5vdGUuTm90ZS5sZW5ndGggPT0gMCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicgfX0gb25Nb3VzZU92ZXI9eygpID0+IHNldEhvdmVyQWRkKHRydWUpfSBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlckFkZChmYWxzZSl9PkFkZCBOb3RlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2xUaXAgU2hvdz17aG92ZXJBZGQgJiYgKG5vdGUuTm90ZSA9PSB1bmRlZmluZWQgfHwgbm90ZS5Ob3RlLmxlbmd0aCA9PSAwKX0gUG9zaXRpb249eyd0b3AnfSBUaGVtZT17J2RhcmsnfSBUYXJnZXQ9e1wiQWRkXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gQSBub3RlIG5lZWRzIHRvIGJlIGVudGVyZWQuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xUaXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIG1yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gYnRuLWRlZmF1bHRcIiArIChub3RlLk5vdGUgPT0gdW5kZWZpbmVkIHx8IG5vdGUuTm90ZS5sZW5ndGggPT0gMCA/ICcgZGlzYWJsZWQnIDogJycpfSBvbkNsaWNrPXsoKSA9PiBzZXROb3RlKChub3RlKSA9PiAoeyAuLi5ub3RlLCBOb3RlOiAnJyB9KSl9IHN0eWxlPXt7IGN1cnNvcjogKG5vdGUuTm90ZSA9PSB1bmRlZmluZWQgfHwgbm90ZS5Ob3RlLmxlbmd0aCA9PSAwKSA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicgfX0gZGF0YS10b29sdGlwPXtcIlJlbW92ZVwifSBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXJDbGVhcih0cnVlKX0gb25Nb3VzZU91dD17KCkgPT4gc2V0SG92ZXJDbGVhcihmYWxzZSl9ID5DbGVhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sVGlwIFNob3c9e2hvdmVyQ2xlYXIgJiYgKG5vdGUuTm90ZSA9PSB1bmRlZmluZWQgfHwgbm90ZS5Ob3RlLmxlbmd0aCA9PSAwKX0gUG9zaXRpb249eyd0b3AnfSBUaGVtZT17J2RhcmsnfSBUYXJnZXQ9e1wiUmVtb3ZlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gVGhlIG5vdGUgZmllbGQgaXMgYWxyZWFkeSBlbXB0eS4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbFRpcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGVXaW5kb3c7Il0sInNvdXJjZVJvb3QiOiIifQ==