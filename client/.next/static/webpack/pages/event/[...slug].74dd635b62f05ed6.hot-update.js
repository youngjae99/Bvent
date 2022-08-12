"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/event/[...slug]",{

/***/ "./src/components/eventPage/subevent/review/Review.tsx":
/*!*************************************************************!*\
  !*** ./src/components/eventPage/subevent/review/Review.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_parseTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/parseTime */ \"./src/utils/parseTime.ts\");\n\nvar _this = undefined;\n\n\n\nvar Review = function(props) {\n    var ref = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, props), timestamp = ref.timestamp, username = ref.username, review_title = ref.review_title, review_content = ref.review_content, txHash = ref.txHash, amount = ref.amount;\n    console.log(timestamp);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row mb-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/icons/default-profile-image.png\",\n                    width: \"36rem\",\n                    style: {\n                        borderRadius: \"18\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white\",\n                        children: username.slice(0, 20)\n                    }, void 0, false, {\n                        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500\",\n                        children: (0,_utils_parseTime__WEBPACK_IMPORTED_MODULE_2__.parseEventTime)(timestamp, \"UTC\")\n                    }, void 0, false, {\n                        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: review_title\n                    }, void 0, false, {\n                        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: review_content\n                    }, void 0, false, {\n                        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://ropsten.etherscan.io/tx/\".concat(txHash),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row gap-1 text-gray-300 hover:text-blue-400\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/icons/ethereum-coins.png\",\n                                    width: \"20px\",\n                                    height: \"20px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                txHash.slice(0, 10) + \"...\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = Review;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Review);\nvar _c;\n$RefreshReg$(_c, \"Review\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ldmVudFBhZ2Uvc3ViZXZlbnQvcmV2aWV3L1Jldmlldy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBMEI7QUFDd0I7QUFXbEQsSUFBTUUsTUFBTSxHQUFHLFNBQUNDLEtBQVksRUFBSztJQUMvQixJQUNFLEdBQVksR0FBWixtRkFBS0EsS0FBSyxDQUFFLEVBRE5DLFNBQVMsR0FDZixHQUFZLENBRE5BLFNBQVMsRUFBRUMsUUFBUSxHQUN6QixHQUFZLENBREtBLFFBQVEsRUFBRUMsWUFBWSxHQUN2QyxHQUFZLENBRGVBLFlBQVksRUFBRUMsY0FBYyxHQUN2RCxHQUFZLENBRDZCQSxjQUFjLEVBQUVDLE1BQU0sR0FDL0QsR0FBWSxDQUQ2Q0EsTUFBTSxFQUFFQyxNQUFNLEdBQ3ZFLEdBQVksQ0FEcURBLE1BQU07SUFFekVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxTQUFTLENBQUMsQ0FBQztJQUV2QixxQkFDRSw4REFBQ1EsS0FBRztRQUFDQyxTQUFTLEVBQUMsb0JBQW9COzswQkFDakMsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOzBCQUNuQiw0RUFBQ0MsS0FBRztvQkFDRkMsR0FBRyxFQUFDLGtDQUFrQztvQkFDdENDLEtBQUssRUFBQyxPQUFPO29CQUNiQyxLQUFLLEVBQUU7d0JBQUVDLFlBQVksRUFBRSxJQUFJO3FCQUFFOzs7Ozt5QkFDN0I7Ozs7O3FCQUNFOzBCQUNOLDhEQUFDTixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsUUFBUTs7a0NBQ3JCLDhEQUFDTSxHQUFDO3dCQUFDTixTQUFTLEVBQUMsWUFBWTtrQ0FBRVIsUUFBUSxDQUFDZSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7Ozs7NkJBQUs7a0NBQ3JELDhEQUFDRCxHQUFDO3dCQUFDTixTQUFTLEVBQUMsZUFBZTtrQ0FBRVosZ0VBQWMsQ0FBQ0csU0FBUyxFQUFFLEtBQUssQ0FBQzs7Ozs7NkJBQUs7a0NBQ25FLDhEQUFDZSxHQUFDO2tDQUFFYixZQUFZOzs7Ozs2QkFBSztrQ0FDckIsOERBQUNhLEdBQUM7a0NBQUVaLGNBQWM7Ozs7OzZCQUFLO2tDQUN2Qiw4REFBQ2MsR0FBQzt3QkFBQ0MsSUFBSSxFQUFFLGtDQUFpQyxDQUFTLE9BQVBkLE1BQU0sQ0FBRTtrQ0FDbEQsNEVBQUNJLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx1REFBdUQ7OzhDQUNwRSw4REFBQ0MsS0FBRztvQ0FBQ0MsR0FBRyxFQUFDLDJCQUEyQjtvQ0FBQ0MsS0FBSyxFQUFDLE1BQU07b0NBQUNPLE1BQU0sRUFBQyxNQUFNOzs7Ozt5Q0FBRztnQ0FDakVmLE1BQU0sQ0FBQ1ksS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLOzs7Ozs7aUNBQ3hCOzs7Ozs2QkFDSjs7Ozs7O3FCQUNBOzs7Ozs7YUFDRixDQUNOO0NBQ0g7QUE1QktsQixLQUFBQSxNQUFNO0FBOEJaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZXZlbnRQYWdlL3N1YmV2ZW50L3Jldmlldy9SZXZpZXcudHN4P2EzZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHBhcnNlRXZlbnRUaW1lIH0gZnJvbSAnQHV0aWxzL3BhcnNlVGltZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICByZXZpZXdfdGl0bGU6IHN0cmluZztcbiAgcmV2aWV3X2NvbnRlbnQ6IHN0cmluZztcbiAgdHhIYXNoOiBudW1iZXI7XG4gIGFtb3VudDogbnVtYmVyO1xufTtcblxuY29uc3QgUmV2aWV3ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHRpbWVzdGFtcCwgdXNlcm5hbWUsIHJldmlld190aXRsZSwgcmV2aWV3X2NvbnRlbnQsIHR4SGFzaCwgYW1vdW50IH0gPVxuICAgIHsgLi4ucHJvcHMgfTtcbiAgY29uc29sZS5sb2codGltZXN0YW1wKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBtYi0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTJcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pY29ucy9kZWZhdWx0LXByb2ZpbGUtaW1hZ2UucG5nXCJcbiAgICAgICAgICB3aWR0aD1cIjM2cmVtXCJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcxOCcgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPnt1c2VybmFtZS5zbGljZSgwLCAyMCl9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+e3BhcnNlRXZlbnRUaW1lKHRpbWVzdGFtcCwgJ1VUQycpfTwvcD5cbiAgICAgICAgPHA+e3Jldmlld190aXRsZX08L3A+XG4gICAgICAgIDxwPntyZXZpZXdfY29udGVudH08L3A+XG4gICAgICAgIDxhIGhyZWY9e2BodHRwczovL3JvcHN0ZW4uZXRoZXJzY2FuLmlvL3R4LyR7dHhIYXNofWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtMSB0ZXh0LWdyYXktMzAwIGhvdmVyOnRleHQtYmx1ZS00MDBcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2V0aGVyZXVtLWNvaW5zLnBuZ1wiIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAge3R4SGFzaC5zbGljZSgwLCAxMCkgKyAnLi4uJ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwYXJzZUV2ZW50VGltZSIsIlJldmlldyIsInByb3BzIiwidGltZXN0YW1wIiwidXNlcm5hbWUiLCJyZXZpZXdfdGl0bGUiLCJyZXZpZXdfY29udGVudCIsInR4SGFzaCIsImFtb3VudCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ3aWR0aCIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwicCIsInNsaWNlIiwiYSIsImhyZWYiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/eventPage/subevent/review/Review.tsx\n"));

/***/ })

});