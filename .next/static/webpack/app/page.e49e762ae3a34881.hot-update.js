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

/***/ "(app-pages-browser)/./components/sections/Skills.tsx":
/*!****************************************!*\
  !*** ./components/sections/Skills.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SectionHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SectionHeading */ \"(app-pages-browser)/./components/SectionHeading.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/hooks */ \"(app-pages-browser)/./lib/hooks.ts\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/data */ \"(app-pages-browser)/./lib/data.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst fadeInAnimationVariants = {\n    initial: {\n        opacity: 0,\n        y: 100\n    },\n    animate: (index)=>({\n            opacity: 1,\n            y: 0,\n            transition: {\n                delay: index * 0.05\n            }\n        })\n};\nfunction Skills() {\n    _s();\n    const { ref } = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useSectionInView)(\"Skills\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: ref,\n        id: \"skills\",\n        className: \"mb-20 max-w-[53rem] scroll-mt-28 text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionHeading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"My Skills\"\n            }, void 0, false, {\n                fileName: \"/Users/sandrobengoa/Desktop/personal-website/components/sections/Skills.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-wrap justify-center gap-2 text-lg text-gray-800\",\n                children: _lib_data__WEBPACK_IMPORTED_MODULE_4__.skillsData.map((skill, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        className: \"bg-white shadow-xl border-black rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 \",\n                        variants: fadeInAnimationVariants,\n                        initial: \"initial\",\n                        animate: \"animate\",\n                        custom: index,\n                        viewport: {\n                            once: true\n                        },\n                        children: skill\n                    }, index, false, {\n                        fileName: \"/Users/sandrobengoa/Desktop/personal-website/components/sections/Skills.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sandrobengoa/Desktop/personal-website/components/sections/Skills.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandrobengoa/Desktop/personal-website/components/sections/Skills.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"vuV2Oqy/m5Sj7a/N+PFePPf5wkY=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useSectionInView\n    ];\n});\n_c = Skills;\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvU2tpbGxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ3FCO0FBQ1I7QUFDUTtBQUNQO0FBRXhDLE1BQU1LLDBCQUEwQjtJQUM5QkMsU0FBUztRQUNQQyxTQUFTO1FBQ1RDLEdBQUc7SUFDTDtJQUNBQyxTQUFTLENBQUNDLFFBQW1CO1lBQzNCSCxTQUFTO1lBQ1RDLEdBQUc7WUFDSEcsWUFBWTtnQkFDVkMsT0FBT0YsUUFBUTtZQUNqQjtRQUNGO0FBQ0Y7QUFFZSxTQUFTRzs7SUFDdEIsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR1gsNERBQWdCQSxDQUFDO0lBRWpDLHFCQUNFLDhEQUFDWTtRQUNDRCxLQUFLQTtRQUNMRSxJQUFHO1FBQ0hDLFdBQVU7OzBCQUVWLDhEQUFDaEIsdURBQWNBOzBCQUFDOzs7Ozs7MEJBQ2hCLDhEQUFDaUI7Z0JBQUdELFdBQVU7MEJBQ1hiLGlEQUFVQSxDQUFDZSxHQUFHLENBQUMsQ0FBQ0MsT0FBT1Ysc0JBQ3RCLDhEQUFDUixpREFBTUEsQ0FBQ21CLEVBQUU7d0JBQ1JKLFdBQVU7d0JBRVZLLFVBQVVqQjt3QkFDVkMsU0FBUTt3QkFDUkcsU0FBUTt3QkFDUmMsUUFBUWI7d0JBQ1JjLFVBQVU7NEJBQ1JDLE1BQU07d0JBQ1I7a0NBRUNMO3VCQVRJVjs7Ozs7Ozs7Ozs7Ozs7OztBQWVqQjtHQTdCd0JHOztRQUNOVix3REFBZ0JBOzs7S0FEVlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Ta2lsbHMudHN4P2E1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tIFwiLi4vU2VjdGlvbkhlYWRpbmdcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTZWN0aW9uSW5WaWV3IH0gZnJvbSBcIkAvbGliL2hvb2tzXCI7XG5pbXBvcnQgeyBza2lsbHNEYXRhIH0gZnJvbSBcIkAvbGliL2RhdGFcIjtcblxuY29uc3QgZmFkZUluQW5pbWF0aW9uVmFyaWFudHMgPSB7XG4gIGluaXRpYWw6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHk6IDEwMCxcbiAgfSxcbiAgYW5pbWF0ZTogKGluZGV4OiBudW1iZXIpID0+ICh7XG4gICAgb3BhY2l0eTogMSxcbiAgICB5OiAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGRlbGF5OiBpbmRleCAqIDAuMDUsXG4gICAgfSxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoKSB7XG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VTZWN0aW9uSW5WaWV3KFwiU2tpbGxzXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIHJlZj17cmVmfVxuICAgICAgaWQ9XCJza2lsbHNcIlxuICAgICAgY2xhc3NOYW1lPVwibWItMjAgbWF4LXctWzUzcmVtXSBzY3JvbGwtbXQtMjggdGV4dC1jZW50ZXJcIlxuICAgID5cbiAgICAgIDxTZWN0aW9uSGVhZGluZz5NeSBTa2lsbHM8L1NlY3Rpb25IZWFkaW5nPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC0yIHRleHQtbGcgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICB7c2tpbGxzRGF0YS5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy14bCBib3JkZXItYmxhY2sgcm91bmRlZC14bCBweC01IHB5LTMgZGFyazpiZy13aGl0ZS8xMCBkYXJrOnRleHQtd2hpdGUvODAgXCJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluQW5pbWF0aW9uVmFyaWFudHN9XG4gICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICAgICAgICBjdXN0b209e2luZGV4fVxuICAgICAgICAgICAgdmlld3BvcnQ9e3tcbiAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NraWxsfVxuICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VjdGlvbkhlYWRpbmciLCJtb3Rpb24iLCJ1c2VTZWN0aW9uSW5WaWV3Iiwic2tpbGxzRGF0YSIsImZhZGVJbkFuaW1hdGlvblZhcmlhbnRzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImluZGV4IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiU2tpbGxzIiwicmVmIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJza2lsbCIsImxpIiwidmFyaWFudHMiLCJjdXN0b20iLCJ2aWV3cG9ydCIsIm9uY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/sections/Skills.tsx\n"));

/***/ })

});