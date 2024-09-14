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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(req) {\n    const url = req.nextUrl.clone();\n    const user = JSON.parse(req.cookies.get(\"user\") || \"{}\");\n    if (url.pathname.startsWith(\"/Admin\") && user.role !== \"admin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/Login\", req.url));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next(); // Proceed if user is admin\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUVwQyxTQUFTQyxXQUFXQyxHQUFHO0lBQzVCLE1BQU1DLE1BQU1ELElBQUlFLE9BQU8sQ0FBQ0MsS0FBSztJQUM3QixNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNOLElBQUlPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVc7SUFFbkQsSUFBSVAsSUFBSVEsUUFBUSxDQUFDQyxVQUFVLENBQUMsYUFBYU4sS0FBS08sSUFBSSxLQUFLLFNBQVM7UUFFOUQsT0FBT2IscURBQVlBLENBQUNjLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFVBQVViLElBQUlDLEdBQUc7SUFDeEQ7SUFFQSxPQUFPSCxxREFBWUEsQ0FBQ2dCLElBQUksSUFBSSwyQkFBMkI7QUFDekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xyXG4gIGNvbnN0IHVybCA9IHJlcS5uZXh0VXJsLmNsb25lKCk7XHJcbiAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UocmVxLmNvb2tpZXMuZ2V0KCd1c2VyJykgfHwgJ3t9Jyk7XHJcblxyXG4gIGlmICh1cmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL0FkbWluJykgJiYgdXNlci5yb2xlICE9PSAnYWRtaW4nKSB7XHJcbiAgICBcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL0xvZ2luJywgcmVxLnVybCkpOyBcclxuICB9XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpOyAvLyBQcm9jZWVkIGlmIHVzZXIgaXMgYWRtaW5cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcSIsInVybCIsIm5leHRVcmwiLCJjbG9uZSIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJjb29raWVzIiwiZ2V0IiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwicm9sZSIsInJlZGlyZWN0IiwiVVJMIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});