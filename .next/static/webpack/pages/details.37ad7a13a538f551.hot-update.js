"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/details",{

/***/ "./pages/details.jsx":
/*!***************************!*\
  !*** ./pages/details.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var _components_SingleMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SingleMap */ \"./components/SingleMap.jsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Map = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = ()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../components/SingleMap */ \"./components/SingleMap.jsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"details.jsx -> \" + \"../components/SingleMap\"\n        ]\n    },\n    loading: ()=>\"Loading...\",\n    ssr: false\n});\n_c1 = Map;\nfunction Details() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { img, title, location, description, star, price, total, long, lat } = router.query;\n    const imageUrl = img ? decodeURIComponent(img) : null;\n    const longitude = parseFloat(long);\n    const latitude = parseFloat(lat);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-full mx-auto  px-8  sm:px-16  max-w-7xl pt-6 pb-6 overflow-hidden  relative \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-2xl font-bold\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-light text-gray-700 pb-4 mt-2\",\n                                children: [\n                                    decodeURIComponent(location),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        className: \"ml-2\",\n                                        children: \"Rating:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    star\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    imageUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: imageUrl,\n                        alt: title,\n                        width: 500,\n                        height: 300,\n                        layout: \"responsive\",\n                        className: \"rounded-xl max-w-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-bold mb-2\",\n                                        children: \"Hosted by :\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-light\",\n                                        children: description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-w-fit\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-medium\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Price:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 43\n                                            }, this),\n                                            \" \",\n                                            price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-medium ml-1\",\n                                        children: [\n                                            \" \",\n                                            total\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            long: longitude,\n                            lat: latitude,\n                            title: title,\n                            img: imageUrl\n                        }, void 0, false, {\n                            fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 10\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chaimielyas/Desktop/LanHub/pages/details.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Details, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c2 = Details;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Map$dynamic\");\n$RefreshReg$(_c1, \"Map\");\n$RefreshReg$(_c2, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWxzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNUO0FBQ1c7QUFDQTtBQUNNO0FBQ2I7QUFFbkMsTUFBTU0sTUFBTUQsbURBQU9BLE1BQUMsSUFBTSxpSkFBaUM7Ozs7OztJQUN2REUsU0FBUyxJQUFNO0lBQ2ZDLEtBQUs7OztBQUdULFNBQVNDOztJQUNQLE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVXLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBQ0MsSUFBSSxFQUFDQyxHQUFHLEVBQUMsR0FBR1QsT0FBT1UsS0FBSztJQUN0RixNQUFNQyxXQUFXVixNQUFNVyxtQkFBbUJYLE9BQU87SUFFakQsTUFBTVksWUFBWUMsV0FBV047SUFDN0IsTUFBTU8sV0FBV0QsV0FBV0w7SUFFNUIscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ3hCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUN3QjtnQkFDQ0MsV0FBVTs7a0NBWVYsOERBQUNEOzswQ0FDQyw4REFBQ0E7Z0NBQUlDLFdBQVU7MENBQXNCZjs7Ozs7OzBDQUNyQyw4REFBQ2M7Z0NBQUlDLFdBQVU7O29DQUNaTCxtQkFBbUJUO2tEQUNwQiw4REFBQ2U7d0NBQU9ELFdBQVU7a0RBQU87Ozs7OztvQ0FBZ0I7b0NBQUVaOzs7Ozs7Ozs7Ozs7O29CQUc5Q00sMEJBQ0MsOERBQUNwQixtREFBS0E7d0JBQ0o0QixLQUFLUjt3QkFDTFMsS0FBS2xCO3dCQUNMbUIsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsUUFBTzt3QkFDUE4sV0FBVTs7Ozs7O2tDQUdmLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1osOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ087d0NBQUVQLFdBQVU7a0RBQWlCOzs7Ozs7a0RBQzlCLDhEQUFDTzt3Q0FBRVAsV0FBVTtrREFBY2I7Ozs7Ozs7Ozs7OzswQ0FFN0IsOERBQUNZO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1E7d0NBQUtSLFdBQVU7OzBEQUFjLDhEQUFDQzswREFBTzs7Ozs7OzRDQUFlOzRDQUFFWjs7Ozs7OztrREFDdkQsOERBQUNtQjt3Q0FBS1IsV0FBVTs7NENBQW1COzRDQUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHeEMsOERBQUNtQjtrQ0FDQSw0RUFBQ2hDLDZEQUFTQTs0QkFBQ2MsTUFBTUs7NEJBQVdKLEtBQUtNOzRCQUFVYixPQUFPQTs0QkFBT0QsS0FBS1U7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtsRSw4REFBQ2xCLDBEQUFNQTs7Ozs7Ozs7Ozs7QUFJYjtHQTdEU007O1FBQ1FULGtEQUFTQTs7O01BRGpCUztBQStEVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZXRhaWxzLmpzeD9jMGQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBTaW5nbGVNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9TaW5nbGVNYXAnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5jb25zdCBNYXAgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvU2luZ2xlTWFwXCIpLCB7XG4gICAgbG9hZGluZzogKCkgPT4gXCJMb2FkaW5nLi4uXCIsXG4gICAgc3NyOiBmYWxzZSxcbiAgfSk7XG4gIFxuZnVuY3Rpb24gRGV0YWlscygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaW1nLCB0aXRsZSwgbG9jYXRpb24sIGRlc2NyaXB0aW9uLCBzdGFyLCBwcmljZSwgdG90YWwsbG9uZyxsYXR9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBpbWFnZVVybCA9IGltZyA/IGRlY29kZVVSSUNvbXBvbmVudChpbWcpIDogbnVsbDtcblxuICBjb25zdCBsb25naXR1ZGUgPSBwYXJzZUZsb2F0KGxvbmcpO1xuICBjb25zdCBsYXRpdHVkZSA9IHBhcnNlRmxvYXQobGF0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIlxuICAgICAgICAgIHctZnVsbFxuICAgICAgICAgIG14LWF1dG8gXG4gICAgICAgICAgcHgtOCBcbiAgICAgICAgICBzbTpweC0xNiBcbiAgICAgICAgICBtYXgtdy03eGxcbiAgICAgICAgICBwdC02XG4gICAgICAgICAgcGItNlxuICAgICAgICAgIG92ZXJmbG93LWhpZGRlbiBcbiAgICAgICAgICByZWxhdGl2ZVxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LWdyYXktNzAwIHBiLTQgbXQtMlwiPlxuICAgICAgICAgICAge2RlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbil9XG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cIm1sLTJcIj5SYXRpbmc6PC9zdHJvbmc+IHtzdGFyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2ltYWdlVXJsICYmIChcbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG1heC13LTcwMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMic+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBtYi0yJz5Ib3N0ZWQgYnkgOjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1saWdodCc+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLXctZml0Jz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+PHN0cm9uZz5QcmljZTo8L3N0cm9uZz4ge3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG1sLTFcIj4ge3RvdGFsfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8U2luZ2xlTWFwIGxvbmc9e2xvbmdpdHVkZX0gbGF0PXtsYXRpdHVkZX0gdGl0bGU9e3RpdGxlfSBpbWc9e2ltYWdlVXJsfSAvPlxuXG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyLz5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkltYWdlIiwiSGVhZGVyIiwiRm9vdGVyIiwiU2luZ2xlTWFwIiwiZHluYW1pYyIsIk1hcCIsImxvYWRpbmciLCJzc3IiLCJEZXRhaWxzIiwicm91dGVyIiwiaW1nIiwidGl0bGUiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwic3RhciIsInByaWNlIiwidG90YWwiLCJsb25nIiwibGF0IiwicXVlcnkiLCJpbWFnZVVybCIsImRlY29kZVVSSUNvbXBvbmVudCIsImxvbmdpdHVkZSIsInBhcnNlRmxvYXQiLCJsYXRpdHVkZSIsImRpdiIsImNsYXNzTmFtZSIsInN0cm9uZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwicCIsInNwYW4iLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/details.jsx\n"));

/***/ })

});