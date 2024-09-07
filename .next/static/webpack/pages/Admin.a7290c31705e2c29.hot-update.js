/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Admin",{

/***/ "./Component/Student.js":
/*!******************************!*\
  !*** ./Component/Student.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/Admin.js":
/*!************************!*\
  !*** ./pages/Admin.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Admin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Component_Doctor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Component/Doctor */ \"./Component/Doctor.js\");\n/* harmony import */ var _pages_fetchtest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/fetchtest */ \"./pages/fetchtest.js\");\n/* harmony import */ var _Component_Schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Component/Schedule */ \"./Component/Schedule.js\");\n/* harmony import */ var _Component_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Component/sidebar */ \"./Component/sidebar.js\");\n/* harmony import */ var _Component_Student__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Component/Student */ \"./Component/Student.js\");\n/* harmony import */ var _Component_Student__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Component_Student__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Admin() {\n    _s();\n    const [activeComponent, setActiveComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"doctor\"); // State to manage active component\n    // Function to render the selected component\n    const renderComponent = ()=>{\n        switch(activeComponent){\n            case \"doctor\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Component_Doctor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\pages\\\\Admin.js\",\n                    lineNumber: 15,\n                    columnNumber: 16\n                }, this);\n            case \"schedule\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Component_Schedule__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\pages\\\\Admin.js\",\n                    lineNumber: 17,\n                    columnNumber: 16\n                }, this);\n            case \"student\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Component_Student__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\pages\\\\Admin.js\",\n                    lineNumber: 19,\n                    columnNumber: 16\n                }, this);\n            case \"fetchTest\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_fetchtest__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\pages\\\\Admin.js\",\n                    lineNumber: 21,\n                    columnNumber: 16\n                }, this);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Component_Doctor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\pages\\\\Admin.js\",\n                    lineNumber: 23,\n                    columnNumber: 16\n                }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Component_sidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setActiveComponent: setActiveComponent\n            }, void 0, false, {\n                fileName: \"G:\\\\New folder\\\\student-portal\\\\pages\\\\Admin.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: [\n                    renderComponent(),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\New folder\\\\student-portal\\\\pages\\\\Admin.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Admin, \"+rz1F4lBTBP2oM3SLwnb418W06Y=\");\n_c = Admin;\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BZG1pbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFDRTtBQUNFO0FBQ0Y7QUFDQTtBQUUzQixTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHUiwrQ0FBUUEsQ0FBQyxXQUFXLG1DQUFtQztJQUVyRyw0Q0FBNEM7SUFDNUMsTUFBTVMsa0JBQWtCO1FBQ3RCLE9BQVFGO1lBQ04sS0FBSztnQkFDSCxxQkFBTyw4REFBQ04seURBQU1BOzs7OztZQUNoQixLQUFLO2dCQUNILHFCQUFPLDhEQUFDRSwyREFBUUE7Ozs7O1lBQ2xCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNFLDJEQUFPQTs7Ozs7WUFDakIsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0gsd0RBQVNBOzs7OztZQUNuQjtnQkFDRSxxQkFBTyw4REFBQ0QseURBQU1BOzs7OztRQUNsQjtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDRywwREFBT0E7Z0JBQUNJLG9CQUFvQkE7Ozs7OzswQkFDN0IsOERBQUNFO2dCQUFJQyxXQUFVOztvQkFDWkY7b0JBQWtCOzs7Ozs7Ozs7QUFJM0I7R0EzQndCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BZG1pbi5qcz9kZGI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERvY3RvciBmcm9tIFwiQC9Db21wb25lbnQvRG9jdG9yXCI7XHJcbmltcG9ydCBGZXRjaFRlc3QgZnJvbSBcIkAvcGFnZXMvZmV0Y2h0ZXN0XCI7XHJcbmltcG9ydCBTY2hlZHVsZSBmcm9tIFwiQC9Db21wb25lbnQvU2NoZWR1bGVcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIkAvQ29tcG9uZW50L3NpZGViYXJcIjtcclxuaW1wb3J0IFN0dWRlbnQgZnJvbSBcIkAvQ29tcG9uZW50L1N0dWRlbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xyXG4gIGNvbnN0IFthY3RpdmVDb21wb25lbnQsIHNldEFjdGl2ZUNvbXBvbmVudF0gPSB1c2VTdGF0ZSgnZG9jdG9yJyk7IC8vIFN0YXRlIHRvIG1hbmFnZSBhY3RpdmUgY29tcG9uZW50XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgc2VsZWN0ZWQgY29tcG9uZW50XHJcbiAgY29uc3QgcmVuZGVyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3RpdmVDb21wb25lbnQpIHtcclxuICAgICAgY2FzZSAnZG9jdG9yJzpcclxuICAgICAgICByZXR1cm4gPERvY3RvciAvPjtcclxuICAgICAgY2FzZSAnc2NoZWR1bGUnOlxyXG4gICAgICAgIHJldHVybiA8U2NoZWR1bGUgLz47XHJcbiAgICAgIGNhc2UgJ3N0dWRlbnQnOlxyXG4gICAgICAgIHJldHVybiA8U3R1ZGVudCAvPjtcclxuICAgICAgY2FzZSAnZmV0Y2hUZXN0JzpcclxuICAgICAgICByZXR1cm4gPEZldGNoVGVzdCAvPjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gPERvY3RvciAvPjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNpZGViYXIgc2V0QWN0aXZlQ29tcG9uZW50PXtzZXRBY3RpdmVDb21wb25lbnR9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIHtyZW5kZXJDb21wb25lbnQoKX0gey8qIFJlbmRlciB0aGUgc2VsZWN0ZWQgY29tcG9uZW50ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEb2N0b3IiLCJGZXRjaFRlc3QiLCJTY2hlZHVsZSIsIlNpZGViYXIiLCJTdHVkZW50IiwiQWRtaW4iLCJhY3RpdmVDb21wb25lbnQiLCJzZXRBY3RpdmVDb21wb25lbnQiLCJyZW5kZXJDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Admin.js\n"));

/***/ })

});