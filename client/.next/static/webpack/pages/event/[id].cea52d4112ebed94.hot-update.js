"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/event/[id]",{

/***/ "./src/utils/parseTime.ts":
/*!********************************!*\
  !*** ./src/utils/parseTime.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcTime\": function() { return /* binding */ calcTime; },\n/* harmony export */   \"convertTime\": function() { return /* binding */ convertTime; },\n/* harmony export */   \"parseDate\": function() { return /* binding */ parseDate; },\n/* harmony export */   \"parseEventTime\": function() { return /* binding */ parseEventTime; },\n/* harmony export */   \"parseTime\": function() { return /* binding */ parseTime; }\n/* harmony export */ });\nvar offset = {\n    KST: 9,\n    EDT: \"-4\",\n    PDT: -7,\n    IST: +5.5\n};\nvar parseTime = function(time) {\n    var parsedTime = new Date(time);\n    var hour = parsedTime.getHours();\n    var minute = parsedTime.getMinutes();\n    if (minute < 10) {\n        return \"\".concat(hour, \":0\").concat(minute);\n    }\n    return hour + \":\" + minute;\n};\nvar parseEventTime = function(time, timeZone) {\n    var parsedTime = new Date(time);\n    //   console.log(parsedTime.toLocaleString())\n    return parsedTime.toLocaleString(\"en-GB\", {\n        timeZone: timeZone\n    });\n};\nvar parseDate = function(time) {\n    var parsedTime = new Date(time);\n    return parsedTime.getDate();\n};\nvar calcTime = function(timezone) {\n    var d = new Date();\n    var utc = d.getTime() + d.getTimezoneOffset() * 60000;\n    var nd = new Date(utc + 3600000 * offset[timezone]);\n    return nd.toLocaleString();\n};\nvar convertTime = function(time, timezone) {\n    // console.log(time, timezone);\n    var d = new Date(time);\n    var utc = d.getTime() + d.getTimezoneOffset() * 60000;\n    var nd = new Date(utc + 3600000 * offset[timezone]);\n    // console.log(nd);\n    var hour = nd.getHours();\n    var minute = nd.getMinutes();\n    if (minute < 10) {\n        return \"\".concat(hour, \":0\").concat(minute);\n    }\n    return hour + \":\" + minute;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvcGFyc2VUaW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHO0lBQ2JDLEdBQUcsRUFBRSxDQUFDO0lBQ05DLEdBQUcsRUFBRSxJQUFJO0lBQ1RDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDUEMsR0FBRyxFQUFFLENBQUMsR0FBRztDQUNWO0FBRU0sSUFBTUMsU0FBUyxHQUFHLFNBQUNDLElBQVksRUFBSztJQUN6QyxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsSUFBSSxDQUFDRixJQUFJLENBQUM7SUFDakMsSUFBTUcsSUFBSSxHQUFHRixVQUFVLENBQUNHLFFBQVEsRUFBRTtJQUNsQyxJQUFNQyxNQUFNLEdBQUdKLFVBQVUsQ0FBQ0ssVUFBVSxFQUFFO0lBQ3RDLElBQUlELE1BQU0sR0FBRyxFQUFFLEVBQUU7UUFDZixPQUFPLEVBQUMsQ0FBV0EsTUFBTSxDQUFmRixJQUFJLEVBQUMsSUFBRSxDQUFTLFFBQVBFLE1BQU0sQ0FBRSxDQUFDO0tBQzdCO0lBQ0QsT0FBT0YsSUFBSSxHQUFHLEdBQUcsR0FBR0UsTUFBTSxDQUFDO0NBQzVCLENBQUM7QUFFSyxJQUFNRSxjQUFjLEdBQUcsU0FBQ1AsSUFBWSxFQUFFUSxRQUFlLEVBQUs7SUFDL0QsSUFBTVAsVUFBVSxHQUFHLElBQUlDLElBQUksQ0FBQ0YsSUFBSSxDQUFDO0lBQ25DLDZDQUE2QztJQUMzQyxPQUFPQyxVQUFVLENBQUNRLGNBQWMsQ0FBQyxPQUFPLEVBQUU7UUFBRUQsUUFBUSxFQUFFQSxRQUFRO0tBQUUsQ0FBQyxDQUFDO0NBQ25FLENBQUM7QUFFSyxJQUFNRSxTQUFTLEdBQUksU0FBQ1YsSUFBSSxFQUFTO0lBQ3RDLElBQU1DLFVBQVUsR0FBRyxJQUFJQyxJQUFJLENBQUNGLElBQUksQ0FBQztJQUNqQyxPQUFPQyxVQUFVLENBQUNVLE9BQU8sRUFBRSxDQUFDO0NBQzdCLENBQUM7QUFFSyxJQUFNQyxRQUFRLEdBQUcsU0FBQ0MsUUFBUSxFQUFTO0lBQ3hDLElBQUlDLENBQUMsR0FBRyxJQUFJWixJQUFJLEVBQUU7SUFDbEIsSUFBSWEsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE9BQU8sRUFBRSxHQUFJRixDQUFDLENBQUNHLGlCQUFpQixFQUFFLEdBQUcsS0FBSztJQUN0RCxJQUFJQyxFQUFFLEdBQUcsSUFBSWhCLElBQUksQ0FBQ2EsR0FBRyxHQUFJLE9BQU8sR0FBQ3JCLE1BQU0sQ0FBQ21CLFFBQVEsQ0FBQyxDQUFFO0lBQ25ELE9BQU9LLEVBQUUsQ0FBQ1QsY0FBYyxFQUFFLENBQUM7Q0FDNUI7QUFFTSxJQUFNVSxXQUFXLEdBQUcsU0FBQ25CLElBQUksRUFBRWEsUUFBUSxFQUFTO0lBQ2pELCtCQUErQjtJQUMvQixJQUFJQyxDQUFDLEdBQUcsSUFBSVosSUFBSSxDQUFDRixJQUFJLENBQUM7SUFDdEIsSUFBSWUsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE9BQU8sRUFBRSxHQUFJRixDQUFDLENBQUNHLGlCQUFpQixFQUFFLEdBQUcsS0FBSztJQUN0RCxJQUFJQyxFQUFFLEdBQUcsSUFBSWhCLElBQUksQ0FBQ2EsR0FBRyxHQUFJLE9BQU8sR0FBQ3JCLE1BQU0sQ0FBQ21CLFFBQVEsQ0FBQyxDQUFFO0lBQ25ELG1CQUFtQjtJQUNuQixJQUFNVixJQUFJLEdBQUdlLEVBQUUsQ0FBQ2QsUUFBUSxFQUFFO0lBQzFCLElBQU1DLE1BQU0sR0FBR2EsRUFBRSxDQUFDWixVQUFVLEVBQUU7SUFDOUIsSUFBSUQsTUFBTSxHQUFHLEVBQUUsRUFBRTtRQUNmLE9BQU8sRUFBQyxDQUFXQSxNQUFNLENBQWZGLElBQUksRUFBQyxJQUFFLENBQVMsUUFBUEUsTUFBTSxDQUFFLENBQUM7S0FDN0I7SUFDRCxPQUFPRixJQUFJLEdBQUcsR0FBRyxHQUFHRSxNQUFNLENBQUM7Q0FDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3BhcnNlVGltZS50cz83OTczIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9mZnNldCA9IHtcbiAgS1NUOiA5LFxuICBFRFQ6ICctNCcsXG4gIFBEVDogLTcsXG4gIElTVDogKzUuNSxcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJzZVRpbWUgPSAodGltZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHBhcnNlZFRpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgY29uc3QgaG91ciA9IHBhcnNlZFRpbWUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlID0gcGFyc2VkVGltZS5nZXRNaW51dGVzKCk7XG4gIGlmIChtaW51dGUgPCAxMCkge1xuICAgIHJldHVybiBgJHtob3VyfTowJHttaW51dGV9YDtcbiAgfVxuICByZXR1cm4gaG91ciArICc6JyArIG1pbnV0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJzZUV2ZW50VGltZSA9ICh0aW1lOiBzdHJpbmcsIHRpbWVab25lOnN0cmluZykgPT4ge1xuICBjb25zdCBwYXJzZWRUaW1lID0gbmV3IERhdGUodGltZSk7XG4vLyAgIGNvbnNvbGUubG9nKHBhcnNlZFRpbWUudG9Mb2NhbGVTdHJpbmcoKSlcbiAgcmV0dXJuIHBhcnNlZFRpbWUudG9Mb2NhbGVTdHJpbmcoJ2VuLUdCJywgeyB0aW1lWm9uZTogdGltZVpvbmUgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcGFyc2VEYXRlID0gICh0aW1lKTphbnkgPT4ge1xuICBjb25zdCBwYXJzZWRUaW1lID0gbmV3IERhdGUodGltZSk7XG4gIHJldHVybiBwYXJzZWRUaW1lLmdldERhdGUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjVGltZSA9ICh0aW1lem9uZSk6YW55ID0+IHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdXRjID0gZC5nZXRUaW1lKCkgKyAoZC5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApO1xuICB2YXIgbmQgPSBuZXcgRGF0ZSh1dGMgKyAoMzYwMDAwMCpvZmZzZXRbdGltZXpvbmVdKSk7XG4gIHJldHVybiBuZC50b0xvY2FsZVN0cmluZygpO1xufVxuXG5leHBvcnQgY29uc3QgY29udmVydFRpbWUgPSAodGltZSwgdGltZXpvbmUpOmFueSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHRpbWUsIHRpbWV6b25lKTtcbiAgdmFyIGQgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgdmFyIHV0YyA9IGQuZ2V0VGltZSgpICsgKGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKTtcbiAgdmFyIG5kID0gbmV3IERhdGUodXRjICsgKDM2MDAwMDAqb2Zmc2V0W3RpbWV6b25lXSkpO1xuICAvLyBjb25zb2xlLmxvZyhuZCk7XG4gIGNvbnN0IGhvdXIgPSBuZC5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGUgPSBuZC5nZXRNaW51dGVzKCk7XG4gIGlmIChtaW51dGUgPCAxMCkge1xuICAgIHJldHVybiBgJHtob3VyfTowJHttaW51dGV9YDtcbiAgfVxuICByZXR1cm4gaG91ciArICc6JyArIG1pbnV0ZTtcbn0iXSwibmFtZXMiOlsib2Zmc2V0IiwiS1NUIiwiRURUIiwiUERUIiwiSVNUIiwicGFyc2VUaW1lIiwidGltZSIsInBhcnNlZFRpbWUiLCJEYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInBhcnNlRXZlbnRUaW1lIiwidGltZVpvbmUiLCJ0b0xvY2FsZVN0cmluZyIsInBhcnNlRGF0ZSIsImdldERhdGUiLCJjYWxjVGltZSIsInRpbWV6b25lIiwiZCIsInV0YyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsIm5kIiwiY29udmVydFRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/parseTime.ts\n"));

/***/ })

});