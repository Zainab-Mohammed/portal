"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(req) {\n    const url = req.nextUrl.clone();\n    const user = JSON.parse(req.cookies.get(\"user\") || \"{}\");\n    // Check if the user is admin\n    if (url.pathname.startsWith(\"/Admin\") && user.role !== \"admin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/Login\", req.url));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next(); // Proceed if user is admin\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUVwQyxTQUFTQyxXQUFXQyxHQUFHO0lBQzVCLE1BQU1DLE1BQU1ELElBQUlFLE9BQU8sQ0FBQ0MsS0FBSztJQUM3QixNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNOLElBQUlPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVc7SUFFbkQsNkJBQTZCO0lBQzdCLElBQUlQLElBQUlRLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGFBQWFOLEtBQUtPLElBQUksS0FBSyxTQUFTO1FBQzlELE9BQU9iLHFEQUFZQSxDQUFDYyxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVYixJQUFJQyxHQUFHO0lBQ3hEO0lBRUEsT0FBT0gscURBQVlBLENBQUNnQixJQUFJLElBQUksMkJBQTJCO0FBQ3pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcclxuICBjb25zdCB1cmwgPSByZXEubmV4dFVybC5jbG9uZSgpO1xyXG4gIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKHJlcS5jb29raWVzLmdldCgndXNlcicpIHx8ICd7fScpO1xyXG5cclxuICAvLyBDaGVjayBpZiB0aGUgdXNlciBpcyBhZG1pblxyXG4gIGlmICh1cmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL0FkbWluJykgJiYgdXNlci5yb2xlICE9PSAnYWRtaW4nKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9Mb2dpbicsIHJlcS51cmwpKTsgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTsgLy8gUHJvY2VlZCBpZiB1c2VyIGlzIGFkbWluXHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ1cmwiLCJuZXh0VXJsIiwiY2xvbmUiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwiY29va2llcyIsImdldCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInJvbGUiLCJyZWRpcmVjdCIsIlVSTCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});