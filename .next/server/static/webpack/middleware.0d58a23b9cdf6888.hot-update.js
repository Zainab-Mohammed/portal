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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nfunction middleware(request) {\n    const url = request.nextUrl.clone();\n    const role = request.cookies.get(\"role\"); // Fetch user role from cookies\n    // Redirect to Not Found page if the user is not admin\n    if (url.pathname.startsWith(\"/Admin\") && role !== \"admin\") {\n        console.log(\"\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/404-errorpage.png\", request.url));\n    }\n    // Continue with the request if the user is admin\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n// Apply middleware to specific paths\nconst config = {\n    matcher: [\n        \"/Admin/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDRDtBQUVuQyxTQUFTRSxXQUFXQyxPQUFPO0lBQ2hDLE1BQU1DLE1BQU1ELFFBQVFFLE9BQU8sQ0FBQ0MsS0FBSztJQUNqQyxNQUFNQyxPQUFPSixRQUFRSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLCtCQUErQjtJQUV6RSxzREFBc0Q7SUFDdEQsSUFBSUwsSUFBSU0sUUFBUSxDQUFDQyxVQUFVLENBQUMsYUFBYUosU0FBUyxTQUFTO1FBQ3pESyxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPYixxREFBWUEsQ0FBQ2MsUUFBUSxDQUFDLElBQUlDLElBQUksc0JBQXNCWixRQUFRQyxHQUFHO0lBQ3hFO0lBRUEsaURBQWlEO0lBQ2pELE9BQU9KLHFEQUFZQSxDQUFDZ0IsSUFBSTtBQUMxQjtBQUVBLHFDQUFxQztBQUM5QixNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7S0FBZ0I7QUFDNUIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcclxuICBjb25zdCB1cmwgPSByZXF1ZXN0Lm5leHRVcmwuY2xvbmUoKTtcclxuICBjb25zdCByb2xlID0gcmVxdWVzdC5jb29raWVzLmdldCgncm9sZScpOyAvLyBGZXRjaCB1c2VyIHJvbGUgZnJvbSBjb29raWVzXHJcblxyXG4gIC8vIFJlZGlyZWN0IHRvIE5vdCBGb3VuZCBwYWdlIGlmIHRoZSB1c2VyIGlzIG5vdCBhZG1pblxyXG4gIGlmICh1cmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL0FkbWluJykgJiYgcm9sZSAhPT0gJ2FkbWluJykge1xyXG4gICAgY29uc29sZS5sb2coXCJcIilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnLzQwNC1lcnJvcnBhZ2UucG5nJywgcmVxdWVzdC51cmwpKTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRpbnVlIHdpdGggdGhlIHJlcXVlc3QgaWYgdGhlIHVzZXIgaXMgYWRtaW5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxufVxyXG5cclxuLy8gQXBwbHkgbWlkZGxld2FyZSB0byBzcGVjaWZpYyBwYXRoc1xyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFsnL0FkbWluLzpwYXRoKiddLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiTmV4dFJlcXVlc3QiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInVybCIsIm5leHRVcmwiLCJjbG9uZSIsInJvbGUiLCJjb29raWVzIiwiZ2V0IiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0IiwiVVJMIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});