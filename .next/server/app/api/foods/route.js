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
exports.id = "app/api/foods/route";
exports.ids = ["app/api/foods/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffoods%2Froute&page=%2Fapi%2Ffoods%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffoods%2Froute.ts&appDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffoods%2Froute&page=%2Fapi%2Ffoods%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffoods%2Froute.ts&appDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_nasti_Desktop_PROJECTS_fittrack_app_api_foods_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/foods/route.ts */ \"(rsc)/./app/api/foods/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/foods/route\",\n        pathname: \"/api/foods\",\n        filename: \"route\",\n        bundlePath: \"app/api/foods/route\"\n    },\n    resolvedPagePath: \"/Users/nasti/Desktop/PROJECTS/fittrack/app/api/foods/route.ts\",\n    nextConfigOutput,\n    userland: _Users_nasti_Desktop_PROJECTS_fittrack_app_api_foods_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/foods/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmb29kcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZm9vZHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZmb29kcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm5hc3RpJTJGRGVza3RvcCUyRlBST0pFQ1RTJTJGZml0dHJhY2slMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbmFzdGklMkZEZXNrdG9wJTJGUFJPSkVDVFMlMkZmaXR0cmFjayZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDYTtBQUMxRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpdHRyYWNrLz85ZmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9uYXN0aS9EZXNrdG9wL1BST0pFQ1RTL2ZpdHRyYWNrL2FwcC9hcGkvZm9vZHMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Zvb2RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZm9vZHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2Zvb2RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL25hc3RpL0Rlc2t0b3AvUFJPSkVDVFMvZml0dHJhY2svYXBwL2FwaS9mb29kcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZm9vZHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffoods%2Froute&page=%2Fapi%2Ffoods%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffoods%2Froute.ts&appDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/foods/route.ts":
/*!********************************!*\
  !*** ./app/api/foods/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _models_Food__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Food */ \"(rsc)/./models/Food.ts\");\n\n\n\n\n\nasync function GET(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { searchParams } = new URL(req.url);\n    const search = searchParams.get(\"search\");\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const query = {\n        userId: session.user.id\n    };\n    if (search) {\n        query.$or = [\n            {\n                name: {\n                    $regex: search,\n                    $options: \"i\"\n                }\n            },\n            {\n                brand: {\n                    $regex: search,\n                    $options: \"i\"\n                }\n            }\n        ];\n    }\n    const foods = await _models_Food__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find(query).sort({\n        name: 1\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(foods);\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    try {\n        const body = await req.json();\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        const food = await _models_Food__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create({\n            ...body,\n            userId: session.user.id\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(food, {\n            status: 201\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create food\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Zvb2RzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ1g7QUFDSjtBQUNIO0FBQ0w7QUFFMUIsZUFBZUssSUFBSUMsR0FBZ0I7SUFDeEMsTUFBTUMsVUFBVSxNQUFNTiwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNLLFNBQVNDLE1BQU0sT0FBT1IscURBQVlBLENBQUNTLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWUsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFdEYsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJUCxJQUFJUSxHQUFHO0lBQ3hDLE1BQU1DLFNBQVNILGFBQWFJLEdBQUcsQ0FBQztJQUVoQyxNQUFNYix3REFBU0E7SUFFZixNQUFNYyxRQUFpQztRQUFFQyxRQUFRLFFBQVNWLElBQUksQ0FBb0JXLEVBQUU7SUFBQztJQUNyRixJQUFJSixRQUFRO1FBQ1ZFLE1BQU1HLEdBQUcsR0FBRztZQUNWO2dCQUFFQyxNQUFNO29CQUFFQyxRQUFRUDtvQkFBUVEsVUFBVTtnQkFBSTtZQUFFO1lBQzFDO2dCQUFFQyxPQUFPO29CQUFFRixRQUFRUDtvQkFBUVEsVUFBVTtnQkFBSTtZQUFFO1NBQzVDO0lBQ0g7SUFFQSxNQUFNRSxRQUFRLE1BQU1yQixvREFBSUEsQ0FBQ3NCLElBQUksQ0FBQ1QsT0FBT1UsSUFBSSxDQUFDO1FBQUVOLE1BQU07SUFBRTtJQUNwRCxPQUFPckIscURBQVlBLENBQUNTLElBQUksQ0FBQ2dCO0FBQzNCO0FBRU8sZUFBZUcsS0FBS3RCLEdBQWdCO0lBQ3pDLE1BQU1DLFVBQVUsTUFBTU4sMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDSyxTQUFTQyxNQUFNLE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBRXRGLElBQUk7UUFDRixNQUFNa0IsT0FBTyxNQUFNdkIsSUFBSUcsSUFBSTtRQUMzQixNQUFNTix3REFBU0E7UUFFZixNQUFNMkIsT0FBTyxNQUFNMUIsb0RBQUlBLENBQUMyQixNQUFNLENBQUM7WUFDN0IsR0FBR0YsSUFBSTtZQUNQWCxRQUFRLFFBQVNWLElBQUksQ0FBb0JXLEVBQUU7UUFDN0M7UUFFQSxPQUFPbkIscURBQVlBLENBQUNTLElBQUksQ0FBQ3FCLE1BQU07WUFBRW5CLFFBQVE7UUFBSTtJQUMvQyxFQUFFLE9BQU9xQixLQUFLO1FBQ1osT0FBT2hDLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZml0dHJhY2svLi9hcHAvYXBpL2Zvb2RzL3JvdXRlLnRzPzQ4ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCBGb29kIGZyb20gXCJAL21vZGVscy9Gb29kXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcblxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcbiAgY29uc3Qgc2VhcmNoID0gc2VhcmNoUGFyYW1zLmdldChcInNlYXJjaFwiKTtcblxuICBhd2FpdCBkYkNvbm5lY3QoKTtcblxuICBjb25zdCBxdWVyeTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7IHVzZXJJZDogKHNlc3Npb24udXNlciBhcyB7IGlkOiBzdHJpbmcgfSkuaWQgfTtcbiAgaWYgKHNlYXJjaCkge1xuICAgIHF1ZXJ5LiRvciA9IFtcbiAgICAgIHsgbmFtZTogeyAkcmVnZXg6IHNlYXJjaCwgJG9wdGlvbnM6IFwiaVwiIH0gfSxcbiAgICAgIHsgYnJhbmQ6IHsgJHJlZ2V4OiBzZWFyY2gsICRvcHRpb25zOiBcImlcIiB9IH0sXG4gICAgXTtcbiAgfVxuXG4gIGNvbnN0IGZvb2RzID0gYXdhaXQgRm9vZC5maW5kKHF1ZXJ5KS5zb3J0KHsgbmFtZTogMSB9KTtcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGZvb2RzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcblxuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuXG4gICAgY29uc3QgZm9vZCA9IGF3YWl0IEZvb2QuY3JlYXRlKHtcbiAgICAgIC4uLmJvZHksXG4gICAgICB1c2VySWQ6IChzZXNzaW9uLnVzZXIgYXMgeyBpZDogc3RyaW5nIH0pLmlkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGZvb2QsIHsgc3RhdHVzOiAyMDEgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgZm9vZFwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJkYkNvbm5lY3QiLCJGb29kIiwiR0VUIiwicmVxIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJzZWFyY2giLCJnZXQiLCJxdWVyeSIsInVzZXJJZCIsImlkIiwiJG9yIiwibmFtZSIsIiRyZWdleCIsIiRvcHRpb25zIiwiYnJhbmQiLCJmb29kcyIsImZpbmQiLCJzb3J0IiwiUE9TVCIsImJvZHkiLCJmb29kIiwiY3JlYXRlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/foods/route.ts\n");

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

/***/ "(rsc)/./models/Food.ts":
/*!************************!*\
  !*** ./models/Food.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst FoodSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    userId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    brand: {\n        type: String,\n        trim: true\n    },\n    calories: {\n        type: Number,\n        required: true,\n        min: 0\n    },\n    protein: {\n        type: Number,\n        required: true,\n        min: 0\n    },\n    carbs: {\n        type: Number,\n        required: true,\n        min: 0\n    },\n    fat: {\n        type: Number,\n        required: true,\n        min: 0\n    },\n    servingSize: {\n        type: Number,\n        default: 100\n    }\n}, {\n    timestamps: true\n});\nFoodSchema.index({\n    userId: 1,\n    name: \"text\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Food || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Food\", FoodSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvRm9vZC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFjdEQsTUFBTUUsYUFBYSxJQUFJRCw0Q0FBTUEsQ0FDM0I7SUFDRUUsUUFBUTtRQUFFQyxNQUFNSCw0Q0FBTUEsQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRO1FBQUVDLEtBQUs7UUFBUUMsVUFBVTtJQUFLO0lBQ25FQyxNQUFNO1FBQUVMLE1BQU1NO1FBQVFGLFVBQVU7UUFBTUcsTUFBTTtJQUFLO0lBQ2pEQyxPQUFPO1FBQUVSLE1BQU1NO1FBQVFDLE1BQU07SUFBSztJQUNsQ0UsVUFBVTtRQUFFVCxNQUFNVTtRQUFRTixVQUFVO1FBQU1PLEtBQUs7SUFBRTtJQUNqREMsU0FBUztRQUFFWixNQUFNVTtRQUFRTixVQUFVO1FBQU1PLEtBQUs7SUFBRTtJQUNoREUsT0FBTztRQUFFYixNQUFNVTtRQUFRTixVQUFVO1FBQU1PLEtBQUs7SUFBRTtJQUM5Q0csS0FBSztRQUFFZCxNQUFNVTtRQUFRTixVQUFVO1FBQU1PLEtBQUs7SUFBRTtJQUM1Q0ksYUFBYTtRQUFFZixNQUFNVTtRQUFRTSxTQUFTO0lBQUk7QUFDNUMsR0FDQTtJQUFFQyxZQUFZO0FBQUs7QUFHckJuQixXQUFXb0IsS0FBSyxDQUFDO0lBQUVuQixRQUFRO0lBQUdNLE1BQU07QUFBTztBQUUzQyxpRUFBZVQsd0RBQWUsQ0FBQ3dCLElBQUksSUFBSXhCLHFEQUFjLENBQWdCLFFBQVFFLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXR0cmFjay8uL21vZGVscy9Gb29kLnRzPzZlZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRm9vZERvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICB1c2VySWQ6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkO1xuICBuYW1lOiBzdHJpbmc7XG4gIGJyYW5kPzogc3RyaW5nO1xuICBjYWxvcmllczogbnVtYmVyO1xuICBwcm90ZWluOiBudW1iZXI7XG4gIGNhcmJzOiBudW1iZXI7XG4gIGZhdDogbnVtYmVyO1xuICBzZXJ2aW5nU2l6ZT86IG51bWJlcjtcbiAgY3JlYXRlZEF0OiBEYXRlO1xufVxuXG5jb25zdCBGb29kU2NoZW1hID0gbmV3IFNjaGVtYTxJRm9vZERvY3VtZW50PihcbiAge1xuICAgIHVzZXJJZDogeyB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJVc2VyXCIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgYnJhbmQ6IHsgdHlwZTogU3RyaW5nLCB0cmltOiB0cnVlIH0sXG4gICAgY2Fsb3JpZXM6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgbWluOiAwIH0sXG4gICAgcHJvdGVpbjogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBtaW46IDAgfSxcbiAgICBjYXJiczogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBtaW46IDAgfSxcbiAgICBmYXQ6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgbWluOiAwIH0sXG4gICAgc2VydmluZ1NpemU6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxMDAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbkZvb2RTY2hlbWEuaW5kZXgoeyB1c2VySWQ6IDEsIG5hbWU6IFwidGV4dFwiIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuRm9vZCB8fCBtb25nb29zZS5tb2RlbDxJRm9vZERvY3VtZW50PihcIkZvb2RcIiwgRm9vZFNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJGb29kU2NoZW1hIiwidXNlcklkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsIm5hbWUiLCJTdHJpbmciLCJ0cmltIiwiYnJhbmQiLCJjYWxvcmllcyIsIk51bWJlciIsIm1pbiIsInByb3RlaW4iLCJjYXJicyIsImZhdCIsInNlcnZpbmdTaXplIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJpbmRleCIsIm1vZGVscyIsIkZvb2QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Food.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true,\n        trim: true\n    },\n    password: {\n        type: String,\n        required: true,\n        select: false\n    },\n    weightGoal: {\n        type: Number\n    },\n    startWeight: {\n        type: Number\n    },\n    dailyCalorieTarget: {\n        type: Number,\n        default: 2000\n    },\n    proteinTarget: {\n        type: Number,\n        default: 150\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFjdEQsTUFBTUUsYUFBYSxJQUFJRCw0Q0FBTUEsQ0FDM0I7SUFDRUUsTUFBTTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO1FBQU1DLE1BQU07SUFBSztJQUNqREMsT0FBTztRQUFFSixNQUFNQztRQUFRQyxVQUFVO1FBQU1HLFFBQVE7UUFBTUMsV0FBVztRQUFNSCxNQUFNO0lBQUs7SUFDakZJLFVBQVU7UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtRQUFNTSxRQUFRO0lBQU07SUFDeERDLFlBQVk7UUFBRVQsTUFBTVU7SUFBTztJQUMzQkMsYUFBYTtRQUFFWCxNQUFNVTtJQUFPO0lBQzVCRSxvQkFBb0I7UUFBRVosTUFBTVU7UUFBUUcsU0FBUztJQUFLO0lBQ2xEQyxlQUFlO1FBQUVkLE1BQU1VO1FBQVFHLFNBQVM7SUFBSTtBQUM5QyxHQUNBO0lBQUVFLFlBQVk7QUFBSztBQUdyQixpRUFBZW5CLHdEQUFlLENBQUNxQixJQUFJLElBQUlyQixxREFBYyxDQUFnQixRQUFRRSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZml0dHJhY2svLi9tb2RlbHMvVXNlci50cz82ZGM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBEb2N1bWVudCwgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICB3ZWlnaHRHb2FsPzogbnVtYmVyO1xuICBzdGFydFdlaWdodD86IG51bWJlcjtcbiAgZGFpbHlDYWxvcmllVGFyZ2V0OiBudW1iZXI7XG4gIHByb3RlaW5UYXJnZXQ6IG51bWJlcjtcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hPElVc2VyRG9jdW1lbnQ+KFxuICB7XG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlLCBsb3dlcmNhc2U6IHRydWUsIHRyaW06IHRydWUgfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBzZWxlY3Q6IGZhbHNlIH0sXG4gICAgd2VpZ2h0R29hbDogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICBzdGFydFdlaWdodDogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICBkYWlseUNhbG9yaWVUYXJnZXQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAyMDAwIH0sXG4gICAgcHJvdGVpblRhcmdldDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDE1MCB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWw8SVVzZXJEb2N1bWVudD4oXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiVXNlclNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwiZW1haWwiLCJ1bmlxdWUiLCJsb3dlcmNhc2UiLCJwYXNzd29yZCIsInNlbGVjdCIsIndlaWdodEdvYWwiLCJOdW1iZXIiLCJzdGFydFdlaWdodCIsImRhaWx5Q2Fsb3JpZVRhcmdldCIsImRlZmF1bHQiLCJwcm90ZWluVGFyZ2V0IiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffoods%2Froute&page=%2Fapi%2Ffoods%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffoods%2Froute.ts&appDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnasti%2FDesktop%2FPROJECTS%2Ffittrack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();