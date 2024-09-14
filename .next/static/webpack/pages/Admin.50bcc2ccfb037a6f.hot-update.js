"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Admin",{

/***/ "./hoc/withAdminAuth.js":
/*!******************************!*\
  !*** ./hoc/withAdminAuth.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst withAdminAuth = (WrappedComponent)=>{\n    var _s = $RefreshSig$();\n    return _s(function AdminProtected(props) {\n        _s();\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            const userRole = localStorage.getItem(\"role\");\n            if (userRole !== \"admin\") {\n                router.replace(\"/Login\"); // Redirect to login if not admin\n            }\n        }, [\n            router\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrappedComponent, {\n            ...props\n        }, void 0, false, {\n            fileName: \"G:\\\\New folder\\\\student-portal\\\\hoc\\\\withAdminAuth.js\",\n            lineNumber: 16,\n            columnNumber: 12\n        }, this);\n    }, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n        ];\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (withAdminAuth);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob2Mvd2l0aEFkbWluQXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUNNO0FBRXhDLE1BQU1FLGdCQUFnQixDQUFDQzs7SUFDckIsVUFBTyxTQUFTQyxlQUFlQyxLQUFLOztRQUNsQyxNQUFNQyxTQUFTTCxzREFBU0E7UUFFeEJELGdEQUFTQSxDQUFDO1lBQ1IsTUFBTU8sV0FBV0MsYUFBYUMsT0FBTyxDQUFDO1lBRXRDLElBQUlGLGFBQWEsU0FBUztnQkFDeEJELE9BQU9JLE9BQU8sQ0FBQyxXQUFXLGlDQUFpQztZQUM3RDtRQUNGLEdBQUc7WUFBQ0o7U0FBTztRQUVYLHFCQUFPLDhEQUFDSDtZQUFrQixHQUFHRSxLQUFLOzs7Ozs7SUFDcEM7O1lBWGlCSixrREFBU0E7OztBQVk1QjtBQUVBLCtEQUFlQyxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvYy93aXRoQWRtaW5BdXRoLmpzPzBjYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCB3aXRoQWRtaW5BdXRoID0gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcclxuICByZXR1cm4gZnVuY3Rpb24gQWRtaW5Qcm90ZWN0ZWQocHJvcHMpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXJSb2xlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnKTsgXHJcblxyXG4gICAgICBpZiAodXNlclJvbGUgIT09ICdhZG1pbicpIHtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZSgnL0xvZ2luJyk7IC8vIFJlZGlyZWN0IHRvIGxvZ2luIGlmIG5vdCBhZG1pblxyXG4gICAgICB9XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz47XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBZG1pbkF1dGg7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ3aXRoQWRtaW5BdXRoIiwiV3JhcHBlZENvbXBvbmVudCIsIkFkbWluUHJvdGVjdGVkIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VyUm9sZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hoc/withAdminAuth.js\n"));

/***/ })

});