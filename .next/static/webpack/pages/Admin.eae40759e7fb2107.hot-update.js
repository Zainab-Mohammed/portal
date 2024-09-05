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

/***/ "./Component/Student.js":
/*!******************************!*\
  !*** ./Component/Student.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Student; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_student_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/student.module.css */ \"./styles/student.module.css\");\n/* harmony import */ var _styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n // Import useEffect and useState\n\nfunction Student() {\n    _s();\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State to store students data\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State to handle errors\n    // Fetching data from the API when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:3001/api/v1/students\").then((response)=>response.json()).then((data)=>{\n            console.log(data); // Logging the data for debugging\n            setStudents(data); // Setting the students data\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n            setError(\"Failed to fetch students.\");\n        });\n    }, []);\n    // Function to display products\n    const displayStudents = (students)=>{\n        return students.map((student, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().tr),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().td),\n                        children: student.phone\n                    }, void 0, false, {\n                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().td),\n                        children: student.username\n                    }, void 0, false, {\n                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().td),\n                        children: student.email\n                    }, void 0, false, {\n                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().td),\n                        children: student.password\n                    }, void 0, false, {\n                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().td),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().td),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().body),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            for: \"Pname\",\n                            children: \"Student Name:\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                            lineNumber: 46,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputS),\n                            type: \"text\",\n                            id: \"Pname\",\n                            name: \"Pname\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                            lineNumber: 47,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                    lineNumber: 45,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            for: \"Pprice\",\n                            children: \"Student Email:\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                            lineNumber: 50,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputS),\n                            type: \"number\",\n                            id: \"Pprice\",\n                            name: \"Pprice\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                            lineNumber: 51,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                    lineNumber: 49,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            for: \"Pcategory\",\n                            children: \"Student Password:\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                            lineNumber: 54,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputS),\n                            type: \"text\",\n                            id: \"Pcategory\",\n                            name: \"Pcategory\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                            lineNumber: 55,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                    lineNumber: 53,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            for: \"Pdescription\",\n                            children: \"Student Number:\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                            lineNumber: 58,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputS),\n                            type: \"text\",\n                            id: \"Pdescription\",\n                            name: \"Pdescription\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                            lineNumber: 59,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                    lineNumber: 57,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onclick: \"addproduct(),displayProduct()\",\n                    children: \"Add Student\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                    lineNumber: 61,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                    lineNumber: 62,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"\".concat((_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().myInput), \" \").concat((_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputS)),\n                    type: \" text\",\n                    placeholder: \"Search by name--\",\n                    id: \"myInput\",\n                    onkeyup: \"searchFunction()\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                    lineNumber: 63,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().input2),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().table),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().tr),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().th),\n                                        children: \"Student Number\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 14\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().th),\n                                        children: \"Student Name\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 14\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().th),\n                                        children: \"Student Email\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().th),\n                                        children: \"Student Password\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().th),\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_2___default().th),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                id: \"demo\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                                lineNumber: 76,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: displayStudents(students)\n                            }, void 0, false, {\n                                fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                                lineNumber: 78,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                        lineNumber: 67,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n                    lineNumber: 66,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"G:\\\\New folder\\\\student-portal\\\\Component\\\\Student.js\",\n            lineNumber: 44,\n            columnNumber: 6\n        }, this)\n    }, void 0, false);\n}\n_s(Student, \"MRfs3dkdtTghi45u8pwyX8kKOCE=\");\n_c = Student;\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNQO29CQUFPUyxTQUFROzhCQUFpQzs7Ozs7OzhCQUNqRCw4REFBQ0M7Ozs7OzhCQUNELDhEQUFDTjtvQkFBTVYsV0FBVyxHQUF1Qm5CLE9BQXBCQSwyRUFBZ0IsRUFBQyxLQUFtQixPQUFoQkEsMEVBQWU7b0JBQUk4QixNQUFLO29CQUFRTSxhQUFZO29CQUFtQkwsSUFBRztvQkFBVU0sU0FBUTs7Ozs7OzhCQUc5SCw4REFBQ1g7b0JBQUlQLFdBQVduQiwwRUFBZTs4QkFDL0IsNEVBQUNzQzt3QkFBTW5CLFdBQVduQix5RUFBYzs7MENBQzVCLDhEQUFDa0I7Z0NBQUdDLFdBQVduQixzRUFBVzs7a0RBQ3JCLDhEQUFDdUM7d0NBQUdwQixXQUFXbkIsc0VBQVc7a0RBQUU7Ozs7OztrREFDNUIsOERBQUN1Qzt3Q0FBR3BCLFdBQVduQixzRUFBVztrREFBRTs7Ozs7O2tEQUM3Qiw4REFBQ3VDO3dDQUFHcEIsV0FBV25CLHNFQUFXO2tEQUFFOzs7Ozs7a0RBQzVCLDhEQUFDdUM7d0NBQUdwQixXQUFXbkIsc0VBQVc7a0RBQUU7Ozs7OztrREFDNUIsOERBQUN1Qzt3Q0FBR3BCLFdBQVduQixzRUFBVztrREFBRTs7Ozs7O2tEQUM1Qiw4REFBQ3VDO3dDQUFHcEIsV0FBV25CLHNFQUFXO2tEQUFFOzs7Ozs7Ozs7Ozs7MENBRWhDLDhEQUFDd0M7Z0NBQU1ULElBQUc7Ozs7OzswQ0FFZCw4REFBQ1M7MENBQ1kxQixnQkFBZ0JaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakM7R0FuRndCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnQvU3R1ZGVudC5qcz9lOTRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7IC8vIEltcG9ydCB1c2VFZmZlY3QgYW5kIHVzZVN0YXRlXHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIkAvc3R5bGVzL3N0dWRlbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R1ZGVudCgpe1xyXG5cclxuICAgIGNvbnN0IFtzdHVkZW50cywgc2V0U3R1ZGVudHNdID0gdXNlU3RhdGUoW10pOyAvLyBTdGF0ZSB0byBzdG9yZSBzdHVkZW50cyBkYXRhXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTsgLy8gU3RhdGUgdG8gaGFuZGxlIGVycm9yc1xyXG5cclxuICAvLyBGZXRjaGluZyBkYXRhIGZyb20gdGhlIEFQSSB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3N0dWRlbnRzJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTsgLy8gTG9nZ2luZyB0aGUgZGF0YSBmb3IgZGVidWdnaW5nXHJcbiAgICAgICAgc2V0U3R1ZGVudHMoZGF0YSk7IC8vIFNldHRpbmcgdGhlIHN0dWRlbnRzIGRhdGFcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGZldGNoIHN0dWRlbnRzLicpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgcHJvZHVjdHNcclxuICBjb25zdCBkaXNwbGF5U3R1ZGVudHMgPSAoc3R1ZGVudHMpID0+IHtcclxuICAgIHJldHVybiBzdHVkZW50cy5tYXAoKHN0dWRlbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgIDx0ciBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlW1widHJcIl19PlxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlW1widGRcIl19PntzdHVkZW50LnBob25lfTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVbXCJ0ZFwiXX0+e3N0dWRlbnQudXNlcm5hbWV9PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZVtcInRkXCJdfT57c3R1ZGVudC5lbWFpbH08L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlW1widGRcIl19PntzdHVkZW50LnBhc3N3b3JkfTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVbXCJ0ZFwiXX0+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVbXCJidG5cIl19PlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVbXCJ0ZFwiXX0+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVbXCJidG5cIl19PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVbXCJib2R5XCJdfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVtcImlucHV0XCJdfT5cclxuICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZVtcImxhYmVsXCJdfSBmb3I9XCJQbmFtZVwiPlN0dWRlbnQgTmFtZTo8L2xhYmVsPlxyXG4gICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlW1wiaW5wdXRTXCJdfSB0eXBlPVwidGV4dFwiIGlkPVwiUG5hbWVcIiBuYW1lPVwiUG5hbWVcIiByZXF1aXJlZC8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlW1wiaW5wdXRcIl19PlxyXG4gICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlW1wibGFiZWxcIl19IGZvcj1cIlBwcmljZVwiPlN0dWRlbnQgRW1haWw6PC9sYWJlbD5cclxuICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZVtcImlucHV0U1wiXX0gdHlwZT1cIm51bWJlclwiIGlkPVwiUHByaWNlXCIgbmFtZT1cIlBwcmljZVwiIHJlcXVpcmVkLz5cclxuICAgICA8L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbXCJpbnB1dFwiXX0+XHJcbiAgICAgPGxhYmVsIGNsYXNzTmFtZT0ge3N0eWxlW1wibGFiZWxcIl19IGZvcj1cIlBjYXRlZ29yeVwiPlN0dWRlbnQgUGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZVtcImlucHV0U1wiXX0gdHlwZT1cInRleHRcIiBpZD1cIlBjYXRlZ29yeVwiIG5hbWU9XCJQY2F0ZWdvcnlcIi8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlW1wiaW5wdXRcIl19PlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZVtcImxhYmVsXCJdfSBmb3I9XCJQZGVzY3JpcHRpb25cIj5TdHVkZW50IE51bWJlcjo8L2xhYmVsPlxyXG4gICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlW1wiaW5wdXRTXCJdfSB0eXBlPVwidGV4dFwiIGlkPVwiUGRlc2NyaXB0aW9uXCIgbmFtZT1cIlBkZXNjcmlwdGlvblwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgPGJ1dHRvbiBvbmNsaWNrPVwiYWRkcHJvZHVjdCgpLGRpc3BsYXlQcm9kdWN0KClcIiA+QWRkIFN0dWRlbnQ8L2J1dHRvbj5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbnB1dCBjbGFzc05hbWU9e2Ake3N0eWxlW1wibXlJbnB1dFwiXX0gJHtzdHlsZVtcImlucHV0U1wiXX1gfSB0eXBlPVwiIHRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBuYW1lLS1cIiBpZD1cIm15SW5wdXRcIiBvbmtleXVwPVwic2VhcmNoRnVuY3Rpb24oKVwiLz5cclxuXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVtcImlucHV0MlwiXX0+XHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZVtcInRhYmxlXCJdfSA+XHJcbiAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVbXCJ0clwiXX0+XHJcbiAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzdHlsZVtcInRoXCJdfT5TdHVkZW50IE51bWJlcjwvdGg+XHJcbiAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzdHlsZVtcInRoXCJdfT5TdHVkZW50IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzdHlsZVtcInRoXCJdfT5TdHVkZW50IEVtYWlsPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c3R5bGVbXCJ0aFwiXX0+U3R1ZGVudCBQYXNzd29yZDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3N0eWxlW1widGhcIl19PlVwZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e3N0eWxlW1widGhcIl19PkRlbGV0ZTwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dGJvZHkgaWQ9XCJkZW1vXCI+XHJcbiAgICA8L3Rib2R5PlxyXG4gICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2Rpc3BsYXlTdHVkZW50cyhzdHVkZW50cyl9XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICB7LyogaWQ9XCJteVRhYmxlXCIgKi99XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiU3R1ZGVudCIsInN0dWRlbnRzIiwic2V0U3R1ZGVudHMiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImRpc3BsYXlTdHVkZW50cyIsIm1hcCIsInN0dWRlbnQiLCJpbmRleCIsInRyIiwiY2xhc3NOYW1lIiwidGQiLCJwaG9uZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJ1dHRvbiIsImRpdiIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwicmVxdWlyZWQiLCJvbmNsaWNrIiwiYnIiLCJwbGFjZWhvbGRlciIsIm9ua2V5dXAiLCJ0YWJsZSIsInRoIiwidGJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Component/Student.js\n"));

/***/ })

});