"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/LanguageLevel.tsx":
/*!**************************************!*\
  !*** ./components/LanguageLevel.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LanguageLevel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\nconst fadeInAnimationVariants = {\n    initial: {\n        opacity: 0,\n        x: -50\n    },\n    animate: (index)=>({\n            opacity: 1,\n            x: 0,\n            transition: {\n                delay: index * 0.05\n            }\n        })\n};\nfunction LanguageLevel(param) {\n    let { levelOverTen } = param;\n    const numberOfEmptySquares = 10 - levelOverTen;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-1 text-xs text-gray-700 dark:text-gray-400\",\n        children: [\n            createArrayFromN(levelOverTen).map((l, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    variants: fadeInAnimationVariants,\n                    initial: \"initial\",\n                    animate: \"animate\",\n                    viewport: {\n                        once: true\n                    },\n                    custom: i,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsSquareFill, {}, void 0, false, {\n                        fileName: \"/Users/sandrobengoa/Desktop/personal-website/components/LanguageLevel.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, i, false, {\n                    fileName: \"/Users/sandrobengoa/Desktop/personal-website/components/LanguageLevel.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)),\n            createArrayFromN(numberOfEmptySquares).map((l, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    variants: fadeInAnimationVariants,\n                    initial: \"initial\",\n                    animate: \"animate\",\n                    viewport: {\n                        once: true\n                    },\n                    custom: i,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsSquare, {}, void 0, false, {\n                        fileName: \"/Users/sandrobengoa/Desktop/personal-website/components/LanguageLevel.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                }, i, false, {\n                    fileName: \"/Users/sandrobengoa/Desktop/personal-website/components/LanguageLevel.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandrobengoa/Desktop/personal-website/components/LanguageLevel.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = LanguageLevel;\nconst createArrayFromN = (n)=>{\n    let array = [];\n    for(let i = 0; i < n; i++){\n        array.push(i);\n    }\n    return array;\n};\nvar _c;\n$RefreshReg$(_c, \"LanguageLevel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGFuZ3VhZ2VMZXZlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ2lCO0FBTXhELE1BQU1JLDBCQUEwQjtJQUM5QkMsU0FBUztRQUNQQyxTQUFTO1FBQ1RDLEdBQUcsQ0FBQztJQUNOO0lBQ0FDLFNBQVMsQ0FBQ0MsUUFBbUI7WUFDM0JILFNBQVM7WUFDVEMsR0FBRztZQUNIRyxZQUFZO2dCQUNWQyxPQUFPRixRQUFRO1lBQ2pCO1FBQ0Y7QUFDRjtBQUVlLFNBQVNHLGNBQWMsS0FBdUI7UUFBdkIsRUFBRUMsWUFBWSxFQUFTLEdBQXZCO0lBQ3BDLE1BQU1DLHVCQUF1QixLQUFLRDtJQUVsQyxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7WUFDWkMsaUJBQWlCSixjQUFjSyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQ3RDLDhEQUFDbkIsaURBQU1BLENBQUNvQixJQUFJO29CQUVWQyxVQUFVbEI7b0JBQ1ZDLFNBQVE7b0JBQ1JHLFNBQVE7b0JBQ1JlLFVBQVU7d0JBQ1JDLE1BQU07b0JBQ1I7b0JBQ0FDLFFBQVFMOzhCQUVSLDRFQUFDakIsd0RBQVlBOzs7OzttQkFUUmlCOzs7OztZQWFSSCxpQkFBaUJILHNCQUFzQkksR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUM5Qyw4REFBQ25CLGlEQUFNQSxDQUFDb0IsSUFBSTtvQkFFVkMsVUFBVWxCO29CQUNWQyxTQUFRO29CQUNSRyxTQUFRO29CQUNSZSxVQUFVO3dCQUNSQyxNQUFNO29CQUNSO29CQUNBQyxRQUFRTDs4QkFFUiw0RUFBQ2xCLG9EQUFRQTs7Ozs7bUJBVEprQjs7Ozs7Ozs7Ozs7QUFjZjtLQXBDd0JSO0FBc0N4QixNQUFNSyxtQkFBbUIsQ0FBQ1M7SUFDeEIsSUFBSUMsUUFBUSxFQUFFO0lBQ2QsSUFBSyxJQUFJUCxJQUFJLEdBQUdBLElBQUlNLEdBQUdOLElBQUs7UUFDMUJPLE1BQU1DLElBQUksQ0FBQ1I7SUFDYjtJQUNBLE9BQU9PO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5ndWFnZUxldmVsLnRzeD8wZjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBCc1NxdWFyZSwgQnNTcXVhcmVGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxldmVsT3ZlclRlbjogbnVtYmVyO1xufTtcblxuY29uc3QgZmFkZUluQW5pbWF0aW9uVmFyaWFudHMgPSB7XG4gIGluaXRpYWw6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHg6IC01MCxcbiAgfSxcbiAgYW5pbWF0ZTogKGluZGV4OiBudW1iZXIpID0+ICh7XG4gICAgb3BhY2l0eTogMSxcbiAgICB4OiAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGRlbGF5OiBpbmRleCAqIDAuMDUsXG4gICAgfSxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5ndWFnZUxldmVsKHsgbGV2ZWxPdmVyVGVuIH06IFByb3BzKSB7XG4gIGNvbnN0IG51bWJlck9mRW1wdHlTcXVhcmVzID0gMTAgLSBsZXZlbE92ZXJUZW47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgdGV4dC14cyB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAge2NyZWF0ZUFycmF5RnJvbU4obGV2ZWxPdmVyVGVuKS5tYXAoKGwsIGkpID0+IChcbiAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5BbmltYXRpb25WYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgICAgIHZpZXdwb3J0PXt7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgY3VzdG9tPXtpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJzU3F1YXJlRmlsbCAvPlxuICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgKSl9XG5cbiAgICAgIHtjcmVhdGVBcnJheUZyb21OKG51bWJlck9mRW1wdHlTcXVhcmVzKS5tYXAoKGwsIGkpID0+IChcbiAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5BbmltYXRpb25WYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgICAgIHZpZXdwb3J0PXt7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgY3VzdG9tPXtpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJzU3F1YXJlIC8+XG4gICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgY3JlYXRlQXJyYXlGcm9tTiA9IChuOiBudW1iZXIpID0+IHtcbiAgbGV0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgYXJyYXkucHVzaChpKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiQnNTcXVhcmUiLCJCc1NxdWFyZUZpbGwiLCJmYWRlSW5BbmltYXRpb25WYXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwieCIsImFuaW1hdGUiLCJpbmRleCIsInRyYW5zaXRpb24iLCJkZWxheSIsIkxhbmd1YWdlTGV2ZWwiLCJsZXZlbE92ZXJUZW4iLCJudW1iZXJPZkVtcHR5U3F1YXJlcyIsImRpdiIsImNsYXNzTmFtZSIsImNyZWF0ZUFycmF5RnJvbU4iLCJtYXAiLCJsIiwiaSIsInNwYW4iLCJ2YXJpYW50cyIsInZpZXdwb3J0Iiwib25jZSIsImN1c3RvbSIsIm4iLCJhcnJheSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LanguageLevel.tsx\n"));

/***/ })

});