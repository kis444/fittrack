"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/settings/route";
exports.ids = ["app/api/settings/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsettings%2Froute&page=%2Fapi%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsettings%2Froute.ts&appDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsettings%2Froute&page=%2Fapi%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsettings%2Froute.ts&appDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_nasti_Desktop_PROJECTS_fittrack_app_api_settings_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/settings/route.ts */ \"(rsc)/./app/api/settings/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/settings/route\",\n        pathname: \"/api/settings\",\n        filename: \"route\",\n        bundlePath: \"app/api/settings/route\"\n    },\n    resolvedPagePath: \"/Users/nasti/Desktop/PROJECTS/fittrack/app/api/settings/route.ts\",\n    nextConfigOutput,\n    userland: _Users_nasti_Desktop_PROJECTS_fittrack_app_api_settings_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/settings/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZXR0aW5ncyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2V0dGluZ3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzZXR0aW5ncyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm5hc3RpJTJGRGVza3RvcCUyRlBST0pFQ1RTJTJGZml0dHJhY2slMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbmFzdGklMkZEZXNrdG9wJTJGUFJPSkVDVFMlMkZmaXR0cmFjayZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZ0I7QUFDN0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXR0cmFjay8/YzYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbmFzdGkvRGVza3RvcC9QUk9KRUNUUy9maXR0cmFjay9hcHAvYXBpL3NldHRpbmdzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZXR0aW5ncy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NldHRpbmdzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZXR0aW5ncy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9uYXN0aS9EZXNrdG9wL1BST0pFQ1RTL2ZpdHRyYWNrL2FwcC9hcGkvc2V0dGluZ3Mvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NldHRpbmdzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsettings%2Froute&page=%2Fapi%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsettings%2Froute.ts&appDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/settings/route.ts":
/*!***********************************!*\
  !*** ./app/api/settings/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nasync function GET(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(session.user.id);\n    if (!user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Not found\"\n    }, {\n        status: 404\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        name: user.name,\n        email: user.email,\n        weightGoal: user.weightGoal,\n        startWeight: user.startWeight,\n        dailyCalorieTarget: user.dailyCalorieTarget,\n        proteinTarget: user.proteinTarget,\n        challengeStartDate: user.challengeStartDate ?? null,\n        challengeStartWeight: user.challengeStartWeight ?? null\n    });\n}\nasync function PUT(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    try {\n        const body = await req.json();\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        const updateData = {\n            name: body.name,\n            weightGoal: body.weightGoal,\n            startWeight: body.startWeight,\n            dailyCalorieTarget: body.dailyCalorieTarget,\n            proteinTarget: body.proteinTarget\n        };\n        // Challenge fields — only update if explicitly provided\n        if (body.challengeStartDate !== undefined) {\n            updateData.challengeStartDate = body.challengeStartDate ? new Date(body.challengeStartDate) : null;\n        }\n        if (body.challengeStartWeight !== undefined) {\n            updateData.challengeStartWeight = body.challengeStartWeight ?? null;\n        }\n        if (body.password) {\n            updateData.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_5___default().hash(body.password, 12);\n        }\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findByIdAndUpdate(session.user.id, updateData, {\n            new: true\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Settings updated\",\n            name: user?.name\n        });\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to update settings\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NldHRpbmdzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDWDtBQUNKO0FBQ0g7QUFDTDtBQUNIO0FBRXZCLGVBQWVNLElBQUlDLEdBQWdCO0lBQ3hDLE1BQU1DLFVBQVUsTUFBTVAsMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDTSxTQUFTQyxNQUFNLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQ3RGLE1BQU1ULHdEQUFTQTtJQUNmLE1BQU1NLE9BQU8sTUFBTUwsb0RBQUlBLENBQUNTLFFBQVEsQ0FBQyxRQUFTSixJQUFJLENBQW9CSyxFQUFFO0lBQ3BFLElBQUksQ0FBQ0wsTUFBTSxPQUFPVCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBWSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUMxRSxPQUFPWixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1FBQ3ZCSyxNQUFNTixLQUFLTSxJQUFJO1FBQ2ZDLE9BQU9QLEtBQUtPLEtBQUs7UUFDakJDLFlBQVlSLEtBQUtRLFVBQVU7UUFDM0JDLGFBQWFULEtBQUtTLFdBQVc7UUFDN0JDLG9CQUFvQlYsS0FBS1Usa0JBQWtCO1FBQzNDQyxlQUFlWCxLQUFLVyxhQUFhO1FBQ2pDQyxvQkFBb0JaLEtBQUtZLGtCQUFrQixJQUFJO1FBQy9DQyxzQkFBc0JiLEtBQUthLG9CQUFvQixJQUFJO0lBQ3JEO0FBQ0Y7QUFFTyxlQUFlQyxJQUFJaEIsR0FBZ0I7SUFDeEMsTUFBTUMsVUFBVSxNQUFNUCwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNNLFNBQVNDLE1BQU0sT0FBT1QscURBQVlBLENBQUNVLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWUsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFdEYsSUFBSTtRQUNGLE1BQU1ZLE9BQU8sTUFBTWpCLElBQUlHLElBQUk7UUFDM0IsTUFBTVAsd0RBQVNBO1FBRWYsTUFBTXNCLGFBQXNDO1lBQzFDVixNQUFNUyxLQUFLVCxJQUFJO1lBQ2ZFLFlBQVlPLEtBQUtQLFVBQVU7WUFDM0JDLGFBQWFNLEtBQUtOLFdBQVc7WUFDN0JDLG9CQUFvQkssS0FBS0wsa0JBQWtCO1lBQzNDQyxlQUFlSSxLQUFLSixhQUFhO1FBQ25DO1FBRUEsd0RBQXdEO1FBQ3hELElBQUlJLEtBQUtILGtCQUFrQixLQUFLSyxXQUFXO1lBQ3pDRCxXQUFXSixrQkFBa0IsR0FBR0csS0FBS0gsa0JBQWtCLEdBQ25ELElBQUlNLEtBQUtILEtBQUtILGtCQUFrQixJQUNoQztRQUNOO1FBQ0EsSUFBSUcsS0FBS0Ysb0JBQW9CLEtBQUtJLFdBQVc7WUFDM0NELFdBQVdILG9CQUFvQixHQUFHRSxLQUFLRixvQkFBb0IsSUFBSTtRQUNqRTtRQUVBLElBQUlFLEtBQUtJLFFBQVEsRUFBRTtZQUNqQkgsV0FBV0csUUFBUSxHQUFHLE1BQU12QixvREFBVyxDQUFDbUIsS0FBS0ksUUFBUSxFQUFFO1FBQ3pEO1FBRUEsTUFBTW5CLE9BQU8sTUFBTUwsb0RBQUlBLENBQUMwQixpQkFBaUIsQ0FDdkMsUUFBU3JCLElBQUksQ0FBb0JLLEVBQUUsRUFDbkNXLFlBQ0E7WUFBRU0sS0FBSztRQUFLO1FBR2QsT0FBTy9CLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRXNCLFNBQVM7WUFBb0JqQixNQUFNTixNQUFNTTtRQUFLO0lBQzNFLEVBQUUsT0FBTTtRQUNOLE9BQU9mLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUE0QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNqRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZml0dHJhY2svLi9hcHAvYXBpL3NldHRpbmdzL3JvdXRlLnRzPzkyYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICBpZiAoIXNlc3Npb24/LnVzZXIpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZCgoc2Vzc2lvbi51c2VyIGFzIHsgaWQ6IHN0cmluZyB9KS5pZCk7XG4gIGlmICghdXNlcikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgd2VpZ2h0R29hbDogdXNlci53ZWlnaHRHb2FsLFxuICAgIHN0YXJ0V2VpZ2h0OiB1c2VyLnN0YXJ0V2VpZ2h0LFxuICAgIGRhaWx5Q2Fsb3JpZVRhcmdldDogdXNlci5kYWlseUNhbG9yaWVUYXJnZXQsXG4gICAgcHJvdGVpblRhcmdldDogdXNlci5wcm90ZWluVGFyZ2V0LFxuICAgIGNoYWxsZW5nZVN0YXJ0RGF0ZTogdXNlci5jaGFsbGVuZ2VTdGFydERhdGUgPz8gbnVsbCxcbiAgICBjaGFsbGVuZ2VTdGFydFdlaWdodDogdXNlci5jaGFsbGVuZ2VTdGFydFdlaWdodCA/PyBudWxsLFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcbiAgICAgIG5hbWU6IGJvZHkubmFtZSxcbiAgICAgIHdlaWdodEdvYWw6IGJvZHkud2VpZ2h0R29hbCxcbiAgICAgIHN0YXJ0V2VpZ2h0OiBib2R5LnN0YXJ0V2VpZ2h0LFxuICAgICAgZGFpbHlDYWxvcmllVGFyZ2V0OiBib2R5LmRhaWx5Q2Fsb3JpZVRhcmdldCxcbiAgICAgIHByb3RlaW5UYXJnZXQ6IGJvZHkucHJvdGVpblRhcmdldCxcbiAgICB9O1xuXG4gICAgLy8gQ2hhbGxlbmdlIGZpZWxkcyDigJQgb25seSB1cGRhdGUgaWYgZXhwbGljaXRseSBwcm92aWRlZFxuICAgIGlmIChib2R5LmNoYWxsZW5nZVN0YXJ0RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB1cGRhdGVEYXRhLmNoYWxsZW5nZVN0YXJ0RGF0ZSA9IGJvZHkuY2hhbGxlbmdlU3RhcnREYXRlXG4gICAgICAgID8gbmV3IERhdGUoYm9keS5jaGFsbGVuZ2VTdGFydERhdGUpXG4gICAgICAgIDogbnVsbDtcbiAgICB9XG4gICAgaWYgKGJvZHkuY2hhbGxlbmdlU3RhcnRXZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdXBkYXRlRGF0YS5jaGFsbGVuZ2VTdGFydFdlaWdodCA9IGJvZHkuY2hhbGxlbmdlU3RhcnRXZWlnaHQgPz8gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoYm9keS5wYXNzd29yZCkge1xuICAgICAgdXBkYXRlRGF0YS5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKGJvZHkucGFzc3dvcmQsIDEyKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICAgIChzZXNzaW9uLnVzZXIgYXMgeyBpZDogc3RyaW5nIH0pLmlkLFxuICAgICAgdXBkYXRlRGF0YSxcbiAgICAgIHsgbmV3OiB0cnVlIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJTZXR0aW5ncyB1cGRhdGVkXCIsIG5hbWU6IHVzZXI/Lm5hbWUgfSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZhaWxlZCB0byB1cGRhdGUgc2V0dGluZ3NcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImRiQ29ubmVjdCIsIlVzZXIiLCJiY3J5cHQiLCJHRVQiLCJyZXEiLCJzZXNzaW9uIiwidXNlciIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImZpbmRCeUlkIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJ3ZWlnaHRHb2FsIiwic3RhcnRXZWlnaHQiLCJkYWlseUNhbG9yaWVUYXJnZXQiLCJwcm90ZWluVGFyZ2V0IiwiY2hhbGxlbmdlU3RhcnREYXRlIiwiY2hhbGxlbmdlU3RhcnRXZWlnaHQiLCJQVVQiLCJib2R5IiwidXBkYXRlRGF0YSIsInVuZGVmaW5lZCIsIkRhdGUiLCJwYXNzd29yZCIsImhhc2giLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIm5ldyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/settings/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.ts\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: credentials.email\n                }).select(\"+password\");\n                if (!user) return null;\n                const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                if (!isValid) return null;\n                return {\n                    id: user._id.toString(),\n                    email: user.email,\n                    name: user.name\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) token.id = user.id;\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0U7QUFDcEM7QUFDUTtBQUNMO0FBRTFCLE1BQU1JLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RMLDJFQUFtQkEsQ0FBQztZQUNsQk0sTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVLE9BQU87Z0JBRTFELE1BQU1ULHdEQUFTQTtnQkFDZixNQUFNVyxPQUFPLE1BQU1WLG9EQUFJQSxDQUFDVyxPQUFPLENBQUM7b0JBQUVOLE9BQU9ELFlBQVlDLEtBQUs7Z0JBQUMsR0FBR08sTUFBTSxDQUFDO2dCQUVyRSxJQUFJLENBQUNGLE1BQU0sT0FBTztnQkFFbEIsTUFBTUcsVUFBVSxNQUFNZix1REFBYyxDQUFDTSxZQUFZSSxRQUFRLEVBQUVFLEtBQUtGLFFBQVE7Z0JBQ3hFLElBQUksQ0FBQ0ssU0FBUyxPQUFPO2dCQUVyQixPQUFPO29CQUNMRSxJQUFJTCxLQUFLTSxHQUFHLENBQUNDLFFBQVE7b0JBQ3JCWixPQUFPSyxLQUFLTCxLQUFLO29CQUNqQkYsTUFBTU8sS0FBS1AsSUFBSTtnQkFDakI7WUFDRjtRQUNGO0tBQ0Q7SUFDRGUsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFVixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTVUsTUFBTUwsRUFBRSxHQUFHTCxLQUFLSyxFQUFFO1lBQzVCLE9BQU9LO1FBQ1Q7UUFDQSxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRUQsS0FBSyxFQUFFO1lBQzlCLElBQUlBLFNBQVNDLFFBQVFYLElBQUksRUFBRTtnQkFDeEJXLFFBQVFYLElBQUksQ0FBcUJLLEVBQUUsR0FBR0ssTUFBTUwsRUFBRTtZQUNqRDtZQUNBLE9BQU9NO1FBQ1Q7SUFDRjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0FILFNBQVM7UUFBRUksVUFBVTtJQUFNO0lBQzNCQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFDckMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpdHRyYWNrLy4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy9Vc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSkuc2VsZWN0KFwiK3Bhc3N3b3JkXCIpO1xuXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLl9pZC50b1N0cmluZygpLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHRva2VuICYmIHNlc3Npb24udXNlcikge1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIHsgaWQ/OiBzdHJpbmcgfSkuaWQgPSB0b2tlbi5pZCBhcyBzdHJpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgICBlcnJvcjogXCIvbG9naW5cIixcbiAgfSxcbiAgc2Vzc2lvbjogeyBzdHJhdGVneTogXCJqd3RcIiB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn07XG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImRiQ29ubmVjdCIsIlVzZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZE9uZSIsInNlbGVjdCIsImlzVmFsaWQiLCJjb21wYXJlIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInBhZ2VzIiwic2lnbkluIiwiZXJyb3IiLCJzdHJhdGVneSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable in .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((m)=>m);\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFZQSxJQUFJQyxTQUF3QkMsT0FBT04sUUFBUTtBQUUzQyxJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUUsT0FBT0YsT0FBT0UsSUFBSTtJQUVuQyxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQUVDLGdCQUFnQjtRQUFNO1FBQ3JDTixPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxhQUFhUyxNQUFNRyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUE7SUFDbkU7SUFFQSxJQUFJO1FBQ0ZULE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3BDLEVBQUUsT0FBT08sR0FBRztRQUNWVixPQUFPRyxPQUFPLEdBQUc7UUFDakIsTUFBTU87SUFDUjtJQUVBLE9BQU9WLE9BQU9FLElBQUk7QUFDcEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpdHRyYWNrLy4vbGliL21vbmdvZGIudHM/MDViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkhO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluIC5lbnYubG9jYWxcIik7XG59XG5cbmludGVyZmFjZSBNb25nb29zZUNhY2hlIHtcbiAgY29ubjogdHlwZW9mIG1vbmdvb3NlIHwgbnVsbDtcbiAgcHJvbWlzZTogUHJvbWlzZTx0eXBlb2YgbW9uZ29vc2U+IHwgbnVsbDtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gIHZhciBtb25nb29zZTogTW9uZ29vc2VDYWNoZTtcbn1cblxubGV0IGNhY2hlZDogTW9uZ29vc2VDYWNoZSA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4ge1xuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ubjtcblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHsgYnVmZmVyQ29tbWFuZHM6IGZhbHNlIH07XG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtKSA9PiBtKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcbiAgICB0aHJvdyBlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iLCJtIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true,\n        trim: true\n    },\n    password: {\n        type: String,\n        required: true,\n        select: false\n    },\n    weightGoal: {\n        type: Number\n    },\n    startWeight: {\n        type: Number\n    },\n    dailyCalorieTarget: {\n        type: Number,\n        default: 2000\n    },\n    proteinTarget: {\n        type: Number,\n        default: 150\n    },\n    challengeStartDate: {\n        type: Date\n    },\n    challengeStartWeight: {\n        type: Number\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFnQnRELE1BQU1FLGFBQWEsSUFBSUQsNENBQU1BLENBQzNCO0lBQ0VFLE1BQU07UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtRQUFNQyxNQUFNO0lBQUs7SUFDakRDLE9BQU87UUFBRUosTUFBTUM7UUFBUUMsVUFBVTtRQUFNRyxRQUFRO1FBQU1DLFdBQVc7UUFBTUgsTUFBTTtJQUFLO0lBQ2pGSSxVQUFVO1FBQUVQLE1BQU1DO1FBQVFDLFVBQVU7UUFBTU0sUUFBUTtJQUFNO0lBQ3hEQyxZQUFZO1FBQUVULE1BQU1VO0lBQU87SUFDM0JDLGFBQWE7UUFBRVgsTUFBTVU7SUFBTztJQUM1QkUsb0JBQW9CO1FBQUVaLE1BQU1VO1FBQVFHLFNBQVM7SUFBSztJQUNsREMsZUFBZTtRQUFFZCxNQUFNVTtRQUFRRyxTQUFTO0lBQUk7SUFDNUNFLG9CQUFvQjtRQUFFZixNQUFNZ0I7SUFBSztJQUNqQ0Msc0JBQXNCO1FBQUVqQixNQUFNVTtJQUFPO0FBQ3ZDLEdBQ0E7SUFBRVEsWUFBWTtBQUFLO0FBR3JCLGlFQUFldEIsd0RBQWUsQ0FBQ3dCLElBQUksSUFBSXhCLHFEQUFjLENBQWdCLFFBQVFFLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXR0cmFjay8uL21vZGVscy9Vc2VyLnRzPzZkYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlckRvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHdlaWdodEdvYWw/OiBudW1iZXI7XG4gIHN0YXJ0V2VpZ2h0PzogbnVtYmVyO1xuICBkYWlseUNhbG9yaWVUYXJnZXQ6IG51bWJlcjtcbiAgcHJvdGVpblRhcmdldDogbnVtYmVyO1xuICBjaGFsbGVuZ2VTdGFydERhdGU/OiBEYXRlO1xuICBjaGFsbGVuZ2VTdGFydFdlaWdodD86IG51bWJlcjtcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hPElVc2VyRG9jdW1lbnQ+KFxuICB7XG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlLCBsb3dlcmNhc2U6IHRydWUsIHRyaW06IHRydWUgfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBzZWxlY3Q6IGZhbHNlIH0sXG4gICAgd2VpZ2h0R29hbDogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICBzdGFydFdlaWdodDogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICBkYWlseUNhbG9yaWVUYXJnZXQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAyMDAwIH0sXG4gICAgcHJvdGVpblRhcmdldDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDE1MCB9LFxuICAgIGNoYWxsZW5nZVN0YXJ0RGF0ZTogeyB0eXBlOiBEYXRlIH0sXG4gICAgY2hhbGxlbmdlU3RhcnRXZWlnaHQ6IHsgdHlwZTogTnVtYmVyIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbDxJVXNlckRvY3VtZW50PihcIlVzZXJcIiwgVXNlclNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiVXNlclNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwiZW1haWwiLCJ1bmlxdWUiLCJsb3dlcmNhc2UiLCJwYXNzd29yZCIsInNlbGVjdCIsIndlaWdodEdvYWwiLCJOdW1iZXIiLCJzdGFydFdlaWdodCIsImRhaWx5Q2Fsb3JpZVRhcmdldCIsImRlZmF1bHQiLCJwcm90ZWluVGFyZ2V0IiwiY2hhbGxlbmdlU3RhcnREYXRlIiwiRGF0ZSIsImNoYWxsZW5nZVN0YXJ0V2VpZ2h0IiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsettings%2Froute&page=%2Fapi%2Fsettings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsettings%2Froute.ts&appDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();