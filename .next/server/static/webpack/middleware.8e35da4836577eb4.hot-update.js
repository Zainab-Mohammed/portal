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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(req) {\n    const url = req.nextUrl.clone();\n    const user = JSON.parse(req.cookies.get(\"user\") || \"{}\");\n    // Check if the user is admin\n    if (url.pathname.startsWith(\"/Admin\") && user.role !== \"admin\") {\n        // Use absolute URL for redirect\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/Login\", req.url)); // Redirect if not an admin\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next(); // Proceed if user is admin\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUVwQyxTQUFTQyxXQUFXQyxHQUFHO0lBQzVCLE1BQU1DLE1BQU1ELElBQUlFLE9BQU8sQ0FBQ0MsS0FBSztJQUM3QixNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNOLElBQUlPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVc7SUFFbkQsNkJBQTZCO0lBQzdCLElBQUlQLElBQUlRLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGFBQWFOLEtBQUtPLElBQUksS0FBSyxTQUFTO1FBQzlELGdDQUFnQztRQUNoQyxPQUFPYixxREFBWUEsQ0FBQ2MsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVWIsSUFBSUMsR0FBRyxJQUFJLDJCQUEyQjtJQUN2RjtJQUVBLE9BQU9ILHFEQUFZQSxDQUFDZ0IsSUFBSSxJQUFJLDJCQUEyQjtBQUN6RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxKSB7XHJcbiAgY29uc3QgdXJsID0gcmVxLm5leHRVcmwuY2xvbmUoKTtcclxuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShyZXEuY29va2llcy5nZXQoJ3VzZXInKSB8fCAne30nKTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgdGhlIHVzZXIgaXMgYWRtaW5cclxuICBpZiAodXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9BZG1pbicpICYmIHVzZXIucm9sZSAhPT0gJ2FkbWluJykge1xyXG4gICAgLy8gVXNlIGFic29sdXRlIFVSTCBmb3IgcmVkaXJlY3RcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL0xvZ2luJywgcmVxLnVybCkpOyAvLyBSZWRpcmVjdCBpZiBub3QgYW4gYWRtaW5cclxuICB9XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpOyAvLyBQcm9jZWVkIGlmIHVzZXIgaXMgYWRtaW5cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcSIsInVybCIsIm5leHRVcmwiLCJjbG9uZSIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJjb29raWVzIiwiZ2V0IiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwicm9sZSIsInJlZGlyZWN0IiwiVVJMIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});