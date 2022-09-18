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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_parseTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/parseTime */ \"./src/utils/parseTime.ts\");\n\nvar _this = undefined;\n\n\n\nvar Review = function(props) {\n    var ref = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, props), timestamp = ref.timestamp, username = ref.username, review_title = ref.review_title, review_content = ref.review_content, txHash = ref.txHash, amount = ref.amount;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row mb-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/icons/default-profile-image.png\",\n                    width: \"40rem\",\n                    style: {\n                        borderRadius: \"25\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white\",\n                        children: username.slice(0, 20)\n                    }, void 0, false, {\n                        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500\",\n                        children: (0,_utils_parseTime__WEBPACK_IMPORTED_MODULE_2__.parseEventTime)(timestamp, \"UTC\")\n                    }, void 0, false, {\n                        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: review_title\n                    }, void 0, false, {\n                        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: review_content\n                    }, void 0, false, {\n                        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://ropsten.etherscan.io/tx/\".concat(txHash),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/icons/ethereum-coins.png\",\n                                    width: \"20\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this),\n                                txHash.slice(0, 10)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aaron/dev/Bvent/client/src/components/eventPage/subevent/review/Review.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = Review;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Review);\nvar _c;\n$RefreshReg$(_c, \"Review\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ldmVudFBhZ2Uvc3ViZXZlbnQvcmV2aWV3L1Jldmlldy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBMEI7QUFDd0I7QUFXbEQsSUFBTUUsTUFBTSxHQUFHLFNBQUNDLEtBQVksRUFBSztJQUMvQixJQUNFLEdBQVksR0FBWixtRkFBS0EsS0FBSyxDQUFFLEVBRE5DLFNBQVMsR0FDZixHQUFZLENBRE5BLFNBQVMsRUFBRUMsUUFBUSxHQUN6QixHQUFZLENBREtBLFFBQVEsRUFBRUMsWUFBWSxHQUN2QyxHQUFZLENBRGVBLFlBQVksRUFBRUMsY0FBYyxHQUN2RCxHQUFZLENBRDZCQSxjQUFjLEVBQUVDLE1BQU0sR0FDL0QsR0FBWSxDQUQ2Q0EsTUFBTSxFQUFFQyxNQUFNLEdBQ3ZFLEdBQVksQ0FEcURBLE1BQU07SUFFekUscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs7MEJBQ2pDLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsTUFBTTswQkFDbkIsNEVBQUNDLEtBQUc7b0JBQ0ZDLEdBQUcsRUFBQyxrQ0FBa0M7b0JBQ3RDQyxLQUFLLEVBQUMsT0FBTztvQkFDYkMsS0FBSyxFQUFFO3dCQUFFQyxZQUFZLEVBQUUsSUFBSTtxQkFBRTs7Ozs7eUJBQzdCOzs7OztxQkFDRTswQkFDTiw4REFBQ04sS0FBRzs7a0NBQ0YsOERBQUNPLEdBQUM7d0JBQUNOLFNBQVMsRUFBQyxZQUFZO2tDQUFFTixRQUFRLENBQUNhLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOzs7Ozs2QkFBSztrQ0FDckQsOERBQUNELEdBQUM7d0JBQUNOLFNBQVMsRUFBQyxlQUFlO2tDQUFFVixnRUFBYyxDQUFDRyxTQUFTLEVBQUUsS0FBSyxDQUFDOzs7Ozs2QkFBSztrQ0FDbkUsOERBQUNhLEdBQUM7a0NBQUVYLFlBQVk7Ozs7OzZCQUFLO2tDQUNyQiw4REFBQ1csR0FBQztrQ0FBRVYsY0FBYzs7Ozs7NkJBQUs7a0NBQ3ZCLDhEQUFDWSxHQUFDO3dCQUFDQyxJQUFJLEVBQUUsa0NBQWlDLENBQVMsT0FBUFosTUFBTSxDQUFFO2tDQUNsRCw0RUFBQ0UsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGVBQWU7OzhDQUM1Qiw4REFBQ0MsS0FBRztvQ0FBQ0MsR0FBRyxFQUFDLDJCQUEyQjtvQ0FBQ0MsS0FBSyxFQUFDLElBQUk7Ozs7O3lDQUFHO2dDQUNqRE4sTUFBTSxDQUFDVSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7Ozs7O2lDQUNoQjs7Ozs7NkJBQ0o7Ozs7OztxQkFDQTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBMUJLaEIsS0FBQUEsTUFBTTtBQTRCWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2V2ZW50UGFnZS9zdWJldmVudC9yZXZpZXcvUmV2aWV3LnRzeD9hM2Y5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwYXJzZUV2ZW50VGltZSB9IGZyb20gJ0B1dGlscy9wYXJzZVRpbWUnO1xuXG50eXBlIFByb3BzID0ge1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcmV2aWV3X3RpdGxlOiBzdHJpbmc7XG4gIHJldmlld19jb250ZW50OiBzdHJpbmc7XG4gIHR4SGFzaDogbnVtYmVyO1xuICBhbW91bnQ6IG51bWJlcjtcbn07XG5cbmNvbnN0IFJldmlldyA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aW1lc3RhbXAsIHVzZXJuYW1lLCByZXZpZXdfdGl0bGUsIHJldmlld19jb250ZW50LCB0eEhhc2gsIGFtb3VudCB9ID1cbiAgICB7IC4uLnByb3BzIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG1iLTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNlwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ljb25zL2RlZmF1bHQtcHJvZmlsZS1pbWFnZS5wbmdcIlxuICAgICAgICAgIHdpZHRoPVwiNDByZW1cIlxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzI1JyB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3VzZXJuYW1lLnNsaWNlKDAsIDIwKX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57cGFyc2VFdmVudFRpbWUodGltZXN0YW1wLCAnVVRDJyl9PC9wPlxuICAgICAgICA8cD57cmV2aWV3X3RpdGxlfTwvcD5cbiAgICAgICAgPHA+e3Jldmlld19jb250ZW50fTwvcD5cbiAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vcm9wc3Rlbi5ldGhlcnNjYW4uaW8vdHgvJHt0eEhhc2h9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvZXRoZXJldW0tY29pbnMucG5nXCIgd2lkdGg9XCIyMFwiIC8+XG4gICAgICAgICAgICB7dHhIYXNoLnNsaWNlKDAsIDEwKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwYXJzZUV2ZW50VGltZSIsIlJldmlldyIsInByb3BzIiwidGltZXN0YW1wIiwidXNlcm5hbWUiLCJyZXZpZXdfdGl0bGUiLCJyZXZpZXdfY29udGVudCIsInR4SGFzaCIsImFtb3VudCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIndpZHRoIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJwIiwic2xpY2UiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/eventPage/subevent/review/Review.tsx\n"));

/***/ })

});