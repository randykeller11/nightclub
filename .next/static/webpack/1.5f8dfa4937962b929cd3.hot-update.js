webpackHotUpdate_N_E(1,{

/***/ "./src/worlds/Starter.tsx":
/*!********************************!*\
  !*** ./src/worlds/Starter.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Starter; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var spacesvr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! spacesvr */ \"./node_modules/spacesvr/main.js\");\n/* harmony import */ var _ideas_TransparentFloor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ideas/TransparentFloor */ \"./src/ideas/TransparentFloor/index.tsx\");\n/* harmony import */ var _ideas_CloudySky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ideas/CloudySky */ \"./src/ideas/CloudySky/index.tsx\");\n/* harmony import */ var _components_AnimatedSpeaker1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AnimatedSpeaker1 */ \"./src/components/AnimatedSpeaker1.js\");\n/* harmony import */ var _components_AnimatedSpeaker2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AnimatedSpeaker2 */ \"./src/components/AnimatedSpeaker2.js\");\n/* harmony import */ var _stores_colorStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/colorStore */ \"./src/stores/colorStore.tsx\");\n\n\nvar _jsxFileName = \"/Users/dub_ceo/Desktop/nightclub/src/worlds/Starter.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Starter() {\n  _s();\n\n  var colorStore = Object(_stores_colorStore__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  var colors = [\"orange\", \"blue\", \"red\", \"purple\", \"green\"];\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(colorStore.color);\n    setTimeout(function () {\n      if (colorStore.color < 4) {\n        colorStore.setColor(colorStore.color + 1);\n      } else {\n        colorStore.setColor(0);\n      }\n    }, 10000);\n  }, [colorStore.color]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(spacesvr__WEBPACK_IMPORTED_MODULE_2__[\"StandardEnvironment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ambientLight\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AnimatedSpeaker1__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AnimatedSpeaker2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(spacesvr__WEBPACK_IMPORTED_MODULE_2__[\"Floating\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(spacesvr__WEBPACK_IMPORTED_MODULE_2__[\"Video\"], {\n        src: \"/placeholderVid.mp4\",\n        size: 5,\n        muted: true,\n        position: [0.5, 2, -9]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ideas_CloudySky__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      color: colors[colorStore.color]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ideas_TransparentFloor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      opacity: 0.7\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Starter, \"SyOTSg6d1UA/EvKmPTpRUQKGeO8=\", false, function () {\n  return [_stores_colorStore__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Starter;\n\nvar _c;\n\n$RefreshReg$(_c, \"Starter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3dvcmxkcy9TdGFydGVyLnRzeD83OWZjIl0sIm5hbWVzIjpbIlN0YXJ0ZXIiLCJjb2xvclN0b3JlIiwidXNlQ29sb3JTdG9yZSIsImNvbG9ycyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvciIsInNldFRpbWVvdXQiLCJzZXRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFDaEMsTUFBTUMsVUFBVSxHQUFHQyxrRUFBYSxFQUFoQztBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLEtBQW5CLEVBQTBCLFFBQTFCLEVBQW9DLE9BQXBDLENBQWY7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxVQUFVLENBQUNNLEtBQXZCO0FBQ0FDLGNBQVUsQ0FBQyxZQUFNO0FBQ2YsVUFBSVAsVUFBVSxDQUFDTSxLQUFYLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3hCTixrQkFBVSxDQUFDUSxRQUFYLENBQW9CUixVQUFVLENBQUNNLEtBQVgsR0FBbUIsQ0FBdkM7QUFDRCxPQUZELE1BRU87QUFDTE4sa0JBQVUsQ0FBQ1EsUUFBWCxDQUFvQixDQUFwQjtBQUNEO0FBQ0YsS0FOUyxFQU1QLEtBTk8sQ0FBVjtBQU9ELEdBVFEsRUFTTixDQUFDUixVQUFVLENBQUNNLEtBQVosQ0FUTSxDQUFUO0FBV0Esc0JBQ0UscUVBQUMsNERBQUQ7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRSxxRUFBQyxpREFBRDtBQUFBLDZCQUNFLHFFQUFDLDhDQUFEO0FBQ0UsV0FBRyxFQUFDLHFCQUROO0FBRUUsWUFBSSxFQUFFLENBRlI7QUFHRSxhQUFLLE1BSFA7QUFJRSxnQkFBUSxFQUFFLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxDQUFDLENBQVY7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBYUUscUVBQUMsd0RBQUQ7QUFBVyxXQUFLLEVBQUVKLE1BQU0sQ0FBQ0YsVUFBVSxDQUFDTSxLQUFaO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQWNFLHFFQUFDLCtEQUFEO0FBQWtCLGFBQU8sRUFBRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBakN1QlAsTztVQUNIRSwwRDs7O0tBREdGLE8iLCJmaWxlIjoiLi9zcmMvd29ybGRzL1N0YXJ0ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWRlbywgU3RhbmRhcmRFbnZpcm9ubWVudCwgRmxvYXRpbmcgfSBmcm9tIFwic3BhY2VzdnJcIjtcbmltcG9ydCBUcmFuc3BhcmVudEZsb29yIGZyb20gXCIuLi9pZGVhcy9UcmFuc3BhcmVudEZsb29yXCI7XG5pbXBvcnQgQ2xvdWR5U2t5IGZyb20gXCIuLi9pZGVhcy9DbG91ZHlTa3lcIjtcbmltcG9ydCBBbmltYXRlZFNwZWFrZXIxIGZyb20gXCIuLi9jb21wb25lbnRzL0FuaW1hdGVkU3BlYWtlcjFcIjtcbmltcG9ydCBBbmltYXRlZFNwZWFrZXIyIGZyb20gXCIuLi9jb21wb25lbnRzL0FuaW1hdGVkU3BlYWtlcjJcIjtcbmltcG9ydCB1c2VDb2xvclN0b3JlIGZyb20gXCIuLi9zdG9yZXMvY29sb3JTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFydGVyKCkge1xuICBjb25zdCBjb2xvclN0b3JlID0gdXNlQ29sb3JTdG9yZSgpO1xuICBjb25zdCBjb2xvcnMgPSBbXCJvcmFuZ2VcIiwgXCJibHVlXCIsIFwicmVkXCIsIFwicHVycGxlXCIsIFwiZ3JlZW5cIl07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb2xvclN0b3JlLmNvbG9yKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb2xvclN0b3JlLmNvbG9yIDwgNCkge1xuICAgICAgICBjb2xvclN0b3JlLnNldENvbG9yKGNvbG9yU3RvcmUuY29sb3IgKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbG9yU3RvcmUuc2V0Q29sb3IoMCk7XG4gICAgICB9XG4gICAgfSwgMTAwMDApO1xuICB9LCBbY29sb3JTdG9yZS5jb2xvcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YW5kYXJkRW52aXJvbm1lbnQ+XG4gICAgICA8YW1iaWVudExpZ2h0IC8+XG4gICAgICA8QW5pbWF0ZWRTcGVha2VyMSAvPlxuICAgICAgPEFuaW1hdGVkU3BlYWtlcjIgLz5cbiAgICAgIDxGbG9hdGluZz5cbiAgICAgICAgPFZpZGVvXG4gICAgICAgICAgc3JjPVwiL3BsYWNlaG9sZGVyVmlkLm1wNFwiXG4gICAgICAgICAgc2l6ZT17NX1cbiAgICAgICAgICBtdXRlZFxuICAgICAgICAgIHBvc2l0aW9uPXtbMC41LCAyLCAtOV19XG4gICAgICAgIC8+XG4gICAgICA8L0Zsb2F0aW5nPlxuXG4gICAgICA8Q2xvdWR5U2t5IGNvbG9yPXtjb2xvcnNbY29sb3JTdG9yZS5jb2xvcl19IC8+XG4gICAgICA8VHJhbnNwYXJlbnRGbG9vciBvcGFjaXR5PXswLjd9IC8+XG4gICAgPC9TdGFuZGFyZEVudmlyb25tZW50PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/worlds/Starter.tsx\n");

/***/ })

})