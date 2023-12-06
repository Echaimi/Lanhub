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

/***/ "./components/SingleMap.jsx":
/*!**********************************!*\
  !*** ./components/SingleMap.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst SingleMap = (param)=>{\n    let { long, lat, title, img } = param;\n    _s();\n    const isValidCoordinate = (num, type)=>{\n        return typeof num === \"number\" && !isNaN(num) && (type === \"lat\" && num >= -90 && num <= 90 || type === \"long\" && num >= -180 && num <= 180);\n    };\n    // Initial state with default coordinates\n    const [viewport, setViewport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: \"100%\",\n        height: \"400px\",\n        latitude: 0,\n        longitude: 0,\n        zoom: 11\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isValidCoordinate(lat, \"lat\") && isValidCoordinate(long, \"long\")) {\n            setViewport((v)=>({\n                    ...v,\n                    latitude: lat,\n                    longitude: long\n                }));\n        }\n    }, [\n        lat,\n        long\n    ]);\n    const [selectedLocation, setSelectedLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    if (!isValidCoordinate(lat, \"lat\") || !isValidCoordinate(long, \"long\")) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading map...\"\n        }, void 0, false, {\n            fileName: \"/Users/chaimielyas/Desktop/LanHub/components/SingleMap.jsx\",\n            lineNumber: 32,\n            columnNumber: 12\n        }, undefined); // or some other placeholder\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        mapStyle: \"mapbox://styles/echaimi/clpkpars100tc01o90ezw45lx\",\n        mapboxApiAccessToken: \"pk.eyJ1IjoiZWNoYWltaSIsImEiOiJjbHBpbWd6eGMwMHRtMmp0NHg5c3g0NXp6In0.f6WMqz1XDsMPbqhFDD88wg\",\n        ...viewport,\n        onViewportChange: (nextViewport)=>setViewport(nextViewport)\n    }, void 0, false, {\n        fileName: \"/Users/chaimielyas/Desktop/LanHub/components/SingleMap.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SingleMap, \"vnADdrcaYZEzXDs5bPzjwfApKJ8=\");\n_c = SingleMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleMap);\nvar _c;\n$RefreshReg$(_c, \"SingleMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZU1hcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFDYTtBQUV6RCxNQUFNSyxZQUFZO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsR0FBRyxFQUFFOztJQUMxQyxNQUFNQyxvQkFBb0IsQ0FBQ0MsS0FBS0M7UUFDOUIsT0FDRSxPQUFPRCxRQUFRLFlBQ2YsQ0FBQ0UsTUFBTUYsUUFDTixVQUFVLFNBQVNBLE9BQU8sQ0FBQyxNQUFNQSxPQUFPLE1BQ3ZDQyxTQUFTLFVBQVVELE9BQU8sQ0FBQyxPQUFPQSxPQUFPLEdBQUc7SUFFbEQ7SUFFQSx5Q0FBeUM7SUFDekMsTUFBTSxDQUFDRyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDO1FBQ3ZDZ0IsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsV0FBVztRQUNYQyxNQUFNO0lBQ1I7SUFFQW5CLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVMsa0JBQWtCSCxLQUFLLFVBQVVHLGtCQUFrQkosTUFBTSxTQUFTO1lBQ3BFUyxZQUFZTSxDQUFBQSxJQUFNO29CQUFFLEdBQUdBLENBQUM7b0JBQUVILFVBQVVYO29CQUFLWSxXQUFXYjtnQkFBSztRQUMzRDtJQUNGLEdBQUc7UUFBQ0M7UUFBS0Q7S0FBSztJQUVkLE1BQU0sQ0FBQ2dCLGtCQUFrQkMsb0JBQW9CLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUV6RCxJQUFJLENBQUNVLGtCQUFrQkgsS0FBSyxVQUFVLENBQUNHLGtCQUFrQkosTUFBTSxTQUFTO1FBQ3RFLHFCQUFPLDhEQUFDa0I7c0JBQUk7Ozs7O3VCQUFzQiw0QkFBNEI7SUFDaEU7SUFFQSxxQkFDRSw4REFBQ3RCLG9EQUFVQTtRQUNUdUIsVUFBUztRQUNUQyxzQkFBc0JDLDJGQUFzQjtRQUMzQyxHQUFHYixRQUFRO1FBQ1pnQixrQkFBa0IsQ0FBQ0MsZUFBaUJoQixZQUFZZ0I7Ozs7OztBQUt0RDtHQXpDTTFCO0tBQUFBO0FBMkNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2luZ2xlTWFwLmpzeD9hMmNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcEdMLCB7IE1hcmtlciwgUG9wdXAgfSBmcm9tIFwicmVhY3QtbWFwLWdsXCI7XG5cbmNvbnN0IFNpbmdsZU1hcCA9ICh7IGxvbmcsIGxhdCwgdGl0bGUsIGltZyB9KSA9PiB7XG4gIGNvbnN0IGlzVmFsaWRDb29yZGluYXRlID0gKG51bSwgdHlwZSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgbnVtID09PSBcIm51bWJlclwiICYmXG4gICAgICAhaXNOYU4obnVtKSAmJlxuICAgICAgKCh0eXBlID09PSAnbGF0JyAmJiBudW0gPj0gLTkwICYmIG51bSA8PSA5MCkgfHwgXG4gICAgICAgKHR5cGUgPT09ICdsb25nJyAmJiBudW0gPj0gLTE4MCAmJiBudW0gPD0gMTgwKSlcbiAgICApO1xuICB9O1xuXG4gIC8vIEluaXRpYWwgc3RhdGUgd2l0aCBkZWZhdWx0IGNvb3JkaW5hdGVzXG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoe1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiNDAwcHhcIixcbiAgICBsYXRpdHVkZTogMCxcbiAgICBsb25naXR1ZGU6IDAsXG4gICAgem9vbTogMTEsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzVmFsaWRDb29yZGluYXRlKGxhdCwgJ2xhdCcpICYmIGlzVmFsaWRDb29yZGluYXRlKGxvbmcsICdsb25nJykpIHtcbiAgICAgIHNldFZpZXdwb3J0KHYgPT4gKHsgLi4udiwgbGF0aXR1ZGU6IGxhdCwgbG9uZ2l0dWRlOiBsb25nIH0pKTtcbiAgICB9XG4gIH0sIFtsYXQsIGxvbmddKTtcblxuICBjb25zdCBbc2VsZWN0ZWRMb2NhdGlvbiwgc2V0U2VsZWN0ZWRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBpZiAoIWlzVmFsaWRDb29yZGluYXRlKGxhdCwgJ2xhdCcpIHx8ICFpc1ZhbGlkQ29vcmRpbmF0ZShsb25nLCAnbG9uZycpKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyBtYXAuLi48L2Rpdj47IC8vIG9yIHNvbWUgb3RoZXIgcGxhY2Vob2xkZXJcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0TWFwR0xcbiAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL2VjaGFpbWkvY2xwa3BhcnMxMDB0YzAxbzkwZXp3NDVseFwiXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17cHJvY2Vzcy5lbnYubWFwYm94X2tleX1cbiAgICAgIHsuLi52aWV3cG9ydH1cbiAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyhuZXh0Vmlld3BvcnQpID0+IHNldFZpZXdwb3J0KG5leHRWaWV3cG9ydCl9XG4gICAgPlxuICAgICAgey8qIE1hcmtlciBhbmQgUG9wdXAgY29tcG9uZW50cyAqL31cbiAgICA8L1JlYWN0TWFwR0w+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVNYXA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdE1hcEdMIiwiTWFya2VyIiwiUG9wdXAiLCJTaW5nbGVNYXAiLCJsb25nIiwibGF0IiwidGl0bGUiLCJpbWciLCJpc1ZhbGlkQ29vcmRpbmF0ZSIsIm51bSIsInR5cGUiLCJpc05hTiIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJ3aWR0aCIsImhlaWdodCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiem9vbSIsInYiLCJzZWxlY3RlZExvY2F0aW9uIiwic2V0U2VsZWN0ZWRMb2NhdGlvbiIsImRpdiIsIm1hcFN0eWxlIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJwcm9jZXNzIiwiZW52IiwibWFwYm94X2tleSIsIm9uVmlld3BvcnRDaGFuZ2UiLCJuZXh0Vmlld3BvcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SingleMap.jsx\n"));

/***/ })

});