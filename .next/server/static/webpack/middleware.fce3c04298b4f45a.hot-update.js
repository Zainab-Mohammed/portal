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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n// middleware.js\n\nfunction middleware(request) {\n    const { pathname } = request.nextUrl;\n    const token = request.cookies.get(\"token\");\n    // Check if the token exists and is valid\n    const user = token ? JSON.parse(atob(token.split(\".\")[1])) : null;\n    const user1 = JSON.parse(request.cookies.get(\"user\") || \"{}\");\n    // If user is not admin and trying to access admin pages, redirect to 404 page\n    if (pathname.startsWith(\"/Admin\") && (!user || user.role !== \"admin\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/pages/404\", request.url));\n    }\n    if (pathname.startsWith(\"/Admin\") && user1.role == \"admin\") {\n        // Allow other requests to proceed\n        // return NextResponse.redirect(new URL('/Admin', request.url));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    }\n} // export const config = {\n //   matcher: ['/Admin/:path*'],\n // };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdCQUFnQjtBQUMyQjtBQUVwQyxTQUFTQyxXQUFXQyxPQUFPO0lBQ2hDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdELFFBQVFFLE9BQU87SUFDcEMsTUFBTUMsUUFBUUgsUUFBUUksT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFFbEMseUNBQXlDO0lBQ3pDLE1BQU1DLE9BQU9ILFFBQVFJLEtBQUtDLEtBQUssQ0FBQ0MsS0FBS04sTUFBTU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUs7SUFFN0QsTUFBTUMsUUFBUUosS0FBS0MsS0FBSyxDQUFDUixRQUFRSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXO0lBRXhELDhFQUE4RTtJQUM5RSxJQUFJSixTQUFTVyxVQUFVLENBQUMsYUFBYyxFQUFDTixRQUFRQSxLQUFLTyxJQUFJLEtBQUssT0FBTSxHQUFJO1FBQ3JFLE9BQU9mLHFEQUFZQSxDQUFDZ0IsUUFBUSxDQUFDLElBQUlDLElBQUksY0FBY2YsUUFBUWdCLEdBQUc7SUFDaEU7SUFFQSxJQUFJZixTQUFTVyxVQUFVLENBQUMsYUFBZUQsTUFBTUUsSUFBSSxJQUFJLFNBQVU7UUFDL0Qsa0NBQWtDO1FBQ25DLGdFQUFnRTtRQUNoRSxPQUFPZixxREFBWUEsQ0FBQ21CLElBQUk7SUFDdkI7QUFDRixFQUVBLDBCQUEwQjtDQUMxQixnQ0FBZ0M7Q0FDaEMsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbWlkZGxld2FyZS5qc1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcmVxdWVzdC5uZXh0VXJsO1xyXG4gIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgndG9rZW4nKTtcclxuICBcclxuICAvLyBDaGVjayBpZiB0aGUgdG9rZW4gZXhpc3RzIGFuZCBpcyB2YWxpZFxyXG4gIGNvbnN0IHVzZXIgPSB0b2tlbiA/IEpTT04ucGFyc2UoYXRvYih0b2tlbi5zcGxpdCgnLicpWzFdKSkgOiBudWxsO1xyXG5cclxuICBjb25zdCB1c2VyMSA9IEpTT04ucGFyc2UocmVxdWVzdC5jb29raWVzLmdldCgndXNlcicpIHx8ICd7fScpO1xyXG5cclxuICAvLyBJZiB1c2VyIGlzIG5vdCBhZG1pbiBhbmQgdHJ5aW5nIHRvIGFjY2VzcyBhZG1pbiBwYWdlcywgcmVkaXJlY3QgdG8gNDA0IHBhZ2VcclxuICBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aCgnL0FkbWluJykgJiYgKCF1c2VyIHx8IHVzZXIucm9sZSAhPT0gJ2FkbWluJykpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3BhZ2VzLzQwNCcsIHJlcXVlc3QudXJsKSk7XHJcbiAgfVxyXG5cclxuICBpZiAocGF0aG5hbWUuc3RhcnRzV2l0aCgnL0FkbWluJykgJiYgKCB1c2VyMS5yb2xlID09ICdhZG1pbicpKSB7XHJcbiAgLy8gQWxsb3cgb3RoZXIgcmVxdWVzdHMgdG8gcHJvY2VlZFxyXG4gLy8gcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvQWRtaW4nLCByZXF1ZXN0LnVybCkpO1xyXG4gcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4vLyAgIG1hdGNoZXI6IFsnL0FkbWluLzpwYXRoKiddLFxyXG4vLyB9O1xyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJwYXRobmFtZSIsIm5leHRVcmwiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwiYXRvYiIsInNwbGl0IiwidXNlcjEiLCJzdGFydHNXaXRoIiwicm9sZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});