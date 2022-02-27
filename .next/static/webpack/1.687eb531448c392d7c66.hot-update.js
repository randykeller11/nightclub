webpackHotUpdate_N_E(1,{

/***/ "./src/components/AnimatedSpeaker1.js":
/*!********************************************!*\
  !*** ./src/components/AnimatedSpeaker1.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var _Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _stores_colorStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/colorStore */ \"./src/stores/colorStore.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/dub_ceo/Desktop/nightclub/src/components/AnimatedSpeaker1.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\nAuto-generated by: https://github.com/pmndrs/gltfjsx\n*/\n\n\n\nfunction Model(_ref) {\n  _s();\n\n  var props = Object(_Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, _ref);\n\n  var group = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useGLTF = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"])(\"/animatedSpeaker1.glb\"),\n      nodes = _useGLTF.nodes,\n      materials = _useGLTF.materials,\n      animations = _useGLTF.animations;\n\n  var _useAnimations = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"])(animations, group),\n      actions = _useAnimations.actions;\n\n  var colorStore = Object(_stores_colorStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  var colors = [\"orange\", \"blue\", \"red\", \"purple\", \"green\"];\n  var materialKeys = Object.keys(materials);\n  materialKeys.map(function (materialKey) {\n    return materials[materialKey].skinning = true;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    console.log(actions);\n    var actionKeys = Object.keys(actions);\n    actionKeys.map(function (actionKey) {\n      return actions[actionKey].play();\n    });\n    group.current.position.x = 4;\n    group.current.position.y = 0;\n    group.current.position.z = -9;\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"group\", _objectSpread(_objectSpread({\n    ref: group\n  }, props), {}, {\n    dispose: null,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"group\", {\n      name: \"Sketchfab_model\",\n      position: [0.02, 0, -0.02],\n      rotation: [-Math.PI / 2, 0, -Math.PI / 2],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_2\",\n        geometry: nodes.Object_2.geometry,\n        material: materials.backplate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_3\",\n        geometry: nodes.Object_3.geometry,\n        material: materials.Wood_dark,\n        \"material-color\": \"black\",\n        position: [-0.09, 0, 0.01]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_4\",\n        geometry: nodes.Object_4.geometry,\n        material: nodes.Object_4.material,\n        \"material-color\": colors[colorStore.color]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_5\",\n        geometry: nodes.Object_5.geometry,\n        material: nodes.Object_5.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_6\",\n        geometry: nodes.Object_6.geometry,\n        material: nodes.Object_6.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_7\",\n        geometry: nodes.Object_7.geometry,\n        material: nodes.Object_7.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_8\",\n        geometry: nodes.Object_8.geometry,\n        material: nodes.Object_8.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_9\",\n        geometry: nodes.Object_9.geometry,\n        material: nodes.Object_9.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_10\",\n        geometry: nodes.Object_10.geometry,\n        material: nodes.Object_10.material,\n        \"material-color\": \"orange\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_11\",\n        geometry: nodes.Object_11.geometry,\n        material: nodes.Object_11.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_12\",\n        geometry: nodes.Object_12.geometry,\n        material: nodes.Object_12.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_13\",\n        geometry: nodes.Object_13.geometry,\n        material: nodes.Object_13.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_14\",\n        geometry: nodes.Object_14.geometry,\n        material: nodes.Object_14.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_15\",\n        geometry: nodes.Object_15.geometry,\n        material: nodes.Object_15.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_16\",\n        geometry: nodes.Object_16.geometry,\n        material: materials.metal_connect\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_17\",\n        geometry: nodes.Object_17.geometry,\n        material: materials.ramka_czarna\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_18\",\n        geometry: nodes.Object_18.geometry,\n        material: materials.red_plastic\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_19\",\n        geometry: nodes.Object_19.geometry,\n        material: materials.white_plastic\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Model, \"bYTJ6ZhLI9qxEFPzOQZo9+dr2OE=\", false, function () {\n  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"], _react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"], _stores_colorStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Model;\n_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"].preload(\"/animatedSpeaker.glb\");\n\nvar _c;\n\n$RefreshReg$(_c, \"Model\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRTcGVha2VyMS5qcz84YjQ2Il0sIm5hbWVzIjpbIk1vZGVsIiwicHJvcHMiLCJncm91cCIsInVzZVJlZiIsInVzZUdMVEYiLCJub2RlcyIsIm1hdGVyaWFscyIsImFuaW1hdGlvbnMiLCJ1c2VBbmltYXRpb25zIiwiYWN0aW9ucyIsImNvbG9yU3RvcmUiLCJ1c2VDb2xvclN0b3JlIiwiY29sb3JzIiwibWF0ZXJpYWxLZXlzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm1hdGVyaWFsS2V5Iiwic2tpbm5pbmciLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uS2V5cyIsImFjdGlvbktleSIsInBsYXkiLCJjdXJyZW50IiwicG9zaXRpb24iLCJ4IiwieSIsInoiLCJNYXRoIiwiUEkiLCJPYmplY3RfMiIsImdlb21ldHJ5IiwiYmFja3BsYXRlIiwiT2JqZWN0XzMiLCJXb29kX2RhcmsiLCJPYmplY3RfNCIsIm1hdGVyaWFsIiwiY29sb3IiLCJPYmplY3RfNSIsIk9iamVjdF82IiwiT2JqZWN0XzciLCJPYmplY3RfOCIsIk9iamVjdF85IiwiT2JqZWN0XzEwIiwiT2JqZWN0XzExIiwiT2JqZWN0XzEyIiwiT2JqZWN0XzEzIiwiT2JqZWN0XzE0IiwiT2JqZWN0XzE1IiwiT2JqZWN0XzE2IiwibWV0YWxfY29ubmVjdCIsIk9iamVjdF8xNyIsInJhbWthX2N6YXJuYSIsIk9iamVjdF8xOCIsInJlZF9wbGFzdGljIiwiT2JqZWN0XzE5Iiwid2hpdGVfcGxhc3RpYyIsInByZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTOztBQUMxQyxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLEVBQXBCOztBQUQwQyxpQkFFREMsaUVBQU8sQ0FB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eUZFO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxnQkFBUSxFQUFFakQsS0FBSyxDQUFDa0QsU0FBTixDQUFnQnRCLFFBRjVCO0FBR0UsZ0JBQVEsRUFBRTNCLFNBQVMsQ0FBQ2tEO0FBSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6RkYsZUE4RkU7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLGdCQUFRLEVBQUVuRCxLQUFLLENBQUNvRCxTQUFOLENBQWdCeEIsUUFGNUI7QUFHRSxnQkFBUSxFQUFFM0IsU0FBUyxDQUFDb0Q7QUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3R0Q7O0dBMUh1QjFELEs7VUFFbUJJLHlELEVBQ3JCSSwrRCxFQUNERywwRDs7O0tBSkdYLEs7QUE0SHhCSSx5REFBTyxDQUFDdUQsT0FBUixDQUFnQixzQkFBaEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFNwZWFrZXIxLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkF1dG8tZ2VuZXJhdGVkIGJ5OiBodHRwczovL2dpdGh1Yi5jb20vcG1uZHJzL2dsdGZqc3hcbiovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlR0xURiwgdXNlQW5pbWF0aW9ucyB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0IHVzZUNvbG9yU3RvcmUgZnJvbSBcIi4uL3N0b3Jlcy9jb2xvclN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVsKHsgLi4ucHJvcHMgfSkge1xuICBjb25zdCBncm91cCA9IHVzZVJlZigpO1xuICBjb25zdCB7IG5vZGVzLCBtYXRlcmlhbHMsIGFuaW1hdGlvbnMgfSA9IHVzZUdMVEYoXCIvYW5pbWF0ZWRTcGVha2VyMS5nbGJcIik7XG4gIGNvbnN0IHsgYWN0aW9ucyB9ID0gdXNlQW5pbWF0aW9ucyhhbmltYXRpb25zLCBncm91cCk7XG4gIGNvbnN0IGNvbG9yU3RvcmUgPSB1c2VDb2xvclN0b3JlKCk7XG4gIGNvbnN0IGNvbG9ycyA9IFtcIm9yYW5nZVwiLCBcImJsdWVcIiwgXCJyZWRcIiwgXCJwdXJwbGVcIiwgXCJncmVlblwiXTtcblxuICBjb25zdCBtYXRlcmlhbEtleXMgPSBPYmplY3Qua2V5cyhtYXRlcmlhbHMpO1xuICBtYXRlcmlhbEtleXMubWFwKChtYXRlcmlhbEtleSkgPT4gKG1hdGVyaWFsc1ttYXRlcmlhbEtleV0uc2tpbm5pbmcgPSB0cnVlKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb25zKTtcbiAgICBjb25zdCBhY3Rpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aW9ucyk7XG4gICAgYWN0aW9uS2V5cy5tYXAoKGFjdGlvbktleSkgPT4gYWN0aW9uc1thY3Rpb25LZXldLnBsYXkoKSk7XG4gICAgZ3JvdXAuY3VycmVudC5wb3NpdGlvbi54ID0gNDtcbiAgICBncm91cC5jdXJyZW50LnBvc2l0aW9uLnkgPSAwO1xuICAgIGdyb3VwLmN1cnJlbnQucG9zaXRpb24ueiA9IC05O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGdyb3VwIHJlZj17Z3JvdXB9IHsuLi5wcm9wc30gZGlzcG9zZT17bnVsbH0+XG4gICAgICA8Z3JvdXBcbiAgICAgICAgbmFtZT1cIlNrZXRjaGZhYl9tb2RlbFwiXG4gICAgICAgIHBvc2l0aW9uPXtbMC4wMiwgMCwgLTAuMDJdfVxuICAgICAgICByb3RhdGlvbj17Wy1NYXRoLlBJIC8gMiwgMCwgLU1hdGguUEkgLyAyXX1cbiAgICAgID5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzJcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMi5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLmJhY2twbGF0ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzNcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMy5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLldvb2RfZGFya31cbiAgICAgICAgICBtYXRlcmlhbC1jb2xvcj17XCJibGFja1wifVxuICAgICAgICAgIHBvc2l0aW9uPXtbLTAuMDksIDAsIDAuMDFdfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfNFwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF80Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfNC5tYXRlcmlhbH1cbiAgICAgICAgICBtYXRlcmlhbC1jb2xvcj17Y29sb3JzW2NvbG9yU3RvcmUuY29sb3JdfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfNVwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF81Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfNS5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzZcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfNi5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzYubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF83XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzcuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF83Lm1hdGVyaWFsfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfOFwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF84Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfOC5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzlcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfOS5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzkubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xMFwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xMC5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzEwLm1hdGVyaWFsfVxuICAgICAgICAgIG1hdGVyaWFsLWNvbG9yPXtcIm9yYW5nZVwifVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfMTFcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMTEuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF8xMS5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzEyXCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzEyLmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfMTIubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xM1wiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xMy5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzEzLm1hdGVyaWFsfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfMTRcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMTQuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF8xNC5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzE1XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzE1Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfMTUubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xNlwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xNi5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLm1ldGFsX2Nvbm5lY3R9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xN1wiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xNy5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLnJhbWthX2N6YXJuYX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzE4XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzE4Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMucmVkX3BsYXN0aWN9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xOVwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xOS5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLndoaXRlX3BsYXN0aWN9XG4gICAgICAgIC8+XG4gICAgICA8L2dyb3VwPlxuICAgIDwvZ3JvdXA+XG4gICk7XG59XG5cbnVzZUdMVEYucHJlbG9hZChcIi9hbmltYXRlZFNwZWFrZXIuZ2xiXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AnimatedSpeaker1.js\n");

/***/ })

})