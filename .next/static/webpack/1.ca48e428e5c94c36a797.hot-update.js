webpackHotUpdate_N_E(1,{

/***/ "./src/components/AnimatedSpeaker1.js":
/*!********************************************!*\
  !*** ./src/components/AnimatedSpeaker1.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var _Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _stores_colorStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/colorStore */ \"./src/stores/colorStore.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/dub_ceo/Desktop/nightclub/src/components/AnimatedSpeaker1.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\nAuto-generated by: https://github.com/pmndrs/gltfjsx\n*/\n\n\n\nfunction Model(_ref) {\n  _s();\n\n  var props = Object(_Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, _ref);\n\n  var group = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useGLTF = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"])(\"/animatedSpeaker1.glb\"),\n      nodes = _useGLTF.nodes,\n      materials = _useGLTF.materials,\n      animations = _useGLTF.animations;\n\n  var _useAnimations = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"])(animations, group),\n      actions = _useAnimations.actions;\n\n  var colorStore = Object(_stores_colorStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  var colors = [\"orange\", \"blue\", \"red\", \"purple\", \"green\"];\n  var materialKeys = Object.keys(materials);\n  materialKeys.map(function (materialKey) {\n    return materials[materialKey].skinning = true;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    console.log(actions);\n    var actionKeys = Object.keys(actions);\n    actionKeys.map(function (actionKey) {\n      return actions[actionKey].play();\n    });\n    group.current.position.x = 3;\n    group.current.position.y = 5;\n    group.current.position.z = 0;\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"group\", _objectSpread(_objectSpread({\n    ref: group\n  }, props), {}, {\n    dispose: null,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"group\", {\n      name: \"Sketchfab_model\",\n      position: [0.02, 0, -0.02],\n      rotation: [-Math.PI / 2, 0, -Math.PI / 2],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_2\",\n        geometry: nodes.Object_2.geometry,\n        material: materials.backplate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_3\",\n        geometry: nodes.Object_3.geometry,\n        material: materials.Wood_dark,\n        \"material-color\": \"black\",\n        position: [-0.09, 0, 0.01]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_4\",\n        geometry: nodes.Object_4.geometry,\n        material: nodes.Object_4.material,\n        \"material-color\": colors[colorStore.color]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_5\",\n        geometry: nodes.Object_5.geometry,\n        material: nodes.Object_5.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_6\",\n        geometry: nodes.Object_6.geometry,\n        material: nodes.Object_6.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_7\",\n        geometry: nodes.Object_7.geometry,\n        material: nodes.Object_7.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_8\",\n        geometry: nodes.Object_8.geometry,\n        material: nodes.Object_8.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_9\",\n        geometry: nodes.Object_9.geometry,\n        material: nodes.Object_9.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_10\",\n        geometry: nodes.Object_10.geometry,\n        material: nodes.Object_10.material,\n        \"material-color\": \"orange\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_11\",\n        geometry: nodes.Object_11.geometry,\n        material: nodes.Object_11.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_12\",\n        geometry: nodes.Object_12.geometry,\n        material: nodes.Object_12.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_13\",\n        geometry: nodes.Object_13.geometry,\n        material: nodes.Object_13.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_14\",\n        geometry: nodes.Object_14.geometry,\n        material: nodes.Object_14.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_15\",\n        geometry: nodes.Object_15.geometry,\n        material: nodes.Object_15.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_16\",\n        geometry: nodes.Object_16.geometry,\n        material: materials.metal_connect\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_17\",\n        geometry: nodes.Object_17.geometry,\n        material: materials.ramka_czarna\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_18\",\n        geometry: nodes.Object_18.geometry,\n        material: materials.red_plastic\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_19\",\n        geometry: nodes.Object_19.geometry,\n        material: materials.white_plastic\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Model, \"bYTJ6ZhLI9qxEFPzOQZo9+dr2OE=\", false, function () {\n  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"], _react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"], _stores_colorStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Model;\n_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"].preload(\"/animatedSpeaker.glb\");\n\nvar _c;\n\n$RefreshReg$(_c, \"Model\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRTcGVha2VyMS5qcz84YjQ2Il0sIm5hbWVzIjpbIk1vZGVsIiwicHJvcHMiLCJncm91cCIsInVzZVJlZiIsInVzZUdMVEYiLCJub2RlcyIsIm1hdGVyaWFscyIsImFuaW1hdGlvbnMiLCJ1c2VBbmltYXRpb25zIiwiYWN0aW9ucyIsImNvbG9yU3RvcmUiLCJ1c2VDb2xvclN0b3JlIiwiY29sb3JzIiwibWF0ZXJpYWxLZXlzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm1hdGVyaWFsS2V5Iiwic2tpbm5pbmciLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uS2V5cyIsImFjdGlvbktleSIsInBsYXkiLCJjdXJyZW50IiwicG9zaXRpb24iLCJ4IiwieSIsInoiLCJNYXRoIiwiUEkiLCJPYmplY3RfMiIsImdlb21ldHJ5IiwiYmFja3BsYXRlIiwiT2JqZWN0XzMiLCJXb29kX2RhcmsiLCJPYmplY3RfNCIsIm1hdGVyaWFsIiwiY29sb3IiLCJPYmplY3RfNSIsIk9iamVjdF82IiwiT2JqZWN0XzciLCJPYmplY3RfOCIsIk9iamVjdF85IiwiT2JqZWN0XzEwIiwiT2JqZWN0XzExIiwiT2JqZWN0XzEyIiwiT2JqZWN0XzEzIiwiT2JqZWN0XzE0IiwiT2JqZWN0XzE1IiwiT2JqZWN0XzE2IiwibWV0YWxfY29ubmVjdCIsIk9iamVjdF8xNyIsInJhbWthX2N6YXJuYSIsIk9iamVjdF8xOCIsInJlZF9wbGFzdGljIiwiT2JqZWN0XzE5Iiwid2hpdGVfcGxhc3RpYyIsInByZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTOztBQUMxQyxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLEVBQXBCOztBQUQwQyxpQkFFREMsaUVBQU8sQ0FBQyx1QkFBRCxDQUZOO0FBQUEsTUFFbENDLEtBRmtDLFlBRWxDQSxLQUZrQztBQUFBLE1BRTNCQyxTQUYyQixZQUUzQkEsU0FGMkI7QUFBQSxNQUVoQkMsVUFGZ0IsWUFFaEJBLFVBRmdCOztBQUFBLHVCQUd0QkMsdUVBQWEsQ0FBQ0QsVUFBRCxFQUFhTCxLQUFiLENBSFM7QUFBQSxNQUdsQ08sT0FIa0Msa0JBR2xDQSxPQUhrQzs7QUFJMUMsTUFBTUMsVUFBVSxHQUFHQyxrRUFBYSxFQUFoQztBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLEtBQW5CLEVBQTBCLFFBQTFCLEVBQW9DLE9BQXBDLENBQWY7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZVCxTQUFaLENBQXJCO0FBQ0FPLGNBQVksQ0FBQ0csR0FBYixDQUFpQixVQUFDQyxXQUFEO0FBQUEsV0FBa0JYLFNBQVMsQ0FBQ1csV0FBRCxDQUFULENBQXVCQyxRQUF2QixHQUFrQyxJQUFwRDtBQUFBLEdBQWpCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVosT0FBWjtBQUNBLFFBQU1hLFVBQVUsR0FBR1IsTUFBTSxDQUFDQyxJQUFQLENBQVlOLE9BQVosQ0FBbkI7QUFDQWEsY0FBVSxDQUFDTixHQUFYLENBQWUsVUFBQ08sU0FBRDtBQUFBLGFBQWVkLE9BQU8sQ0FBQ2MsU0FBRCxDQUFQLENBQW1CQyxJQUFuQixFQUFmO0FBQUEsS0FBZjtBQUNBdEIsU0FBSyxDQUFDdUIsT0FBTixDQUFjQyxRQUFkLENBQXVCQyxDQUF2QixHQUEyQixDQUEzQjtBQUNBekIsU0FBSyxDQUFDdUIsT0FBTixDQUFjQyxRQUFkLENBQXVCRSxDQUF2QixHQUEyQixDQUEzQjtBQUNBMUIsU0FBSyxDQUFDdUIsT0FBTixDQUFjQyxRQUFkLENBQXVCRyxDQUF2QixHQUEyQixDQUEzQjtBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFRQSxzQkFDRTtBQUFPLE9BQUcsRUFBRTNCO0FBQVosS0FBdUJELEtBQXZCO0FBQThCLFdBQU8sRUFBRSxJQUF2QztBQUFBLDJCQUNFO0FBQ0UsVUFBSSxFQUFDLGlCQURQO0FBRUUsY0FBUSxFQUFFLENBQUMsSUFBRCxFQUFPLENBQVAsRUFBVSxDQUFDLElBQVgsQ0FGWjtBQUdFLGNBQVEsRUFBRSxDQUFDLENBQUM2QixJQUFJLENBQUNDLEVBQU4sR0FBVyxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFDRCxJQUFJLENBQUNDLEVBQU4sR0FBVyxDQUE3QixDQUhaO0FBQUEsOEJBS0U7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFRLEVBQUUxQixLQUFLLENBQUMyQixRQUFOLENBQWVDLFFBRjNCO0FBR0UsZ0JBQVEsRUFBRTNCLFNBQVMsQ0FBQzRCO0FBSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVVFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxnQkFBUSxFQUFFN0IsS0FBSyxDQUFDOEIsUUFBTixDQUFlRixRQUYzQjtBQUdFLGdCQUFRLEVBQUUzQixTQUFTLENBQUM4QixTQUh0QjtBQUlFLDBCQUFnQixPQUpsQjtBQUtFLGdCQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUYsRUFBUSxDQUFSLEVBQVcsSUFBWDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQWlCRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZ0JBQVEsRUFBRS9CLEtBQUssQ0FBQ2dDLFFBQU4sQ0FBZUosUUFGM0I7QUFHRSxnQkFBUSxFQUFFNUIsS0FBSyxDQUFDZ0MsUUFBTixDQUFlQyxRQUgzQjtBQUlFLDBCQUFnQjFCLE1BQU0sQ0FBQ0YsVUFBVSxDQUFDNkIsS0FBWjtBQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGLGVBdUJFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxnQkFBUSxFQUFFbEMsS0FBSyxDQUFDbUMsUUFBTixDQUFlUCxRQUYzQjtBQUdFLGdCQUFRLEVBQUU1QixLQUFLLENBQUNtQyxRQUFOLENBQWVGO0FBSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkYsZUE0QkU7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFRLEVBQUVqQyxLQUFLLENBQUNvQyxRQUFOLENBQWVSLFFBRjNCO0FBR0UsZ0JBQVEsRUFBRTVCLEtBQUssQ0FBQ29DLFFBQU4sQ0FBZUg7QUFIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCRixlQWlDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZ0JBQVEsRUFBRWpDLEtBQUssQ0FBQ3FDLFFBQU4sQ0FBZVQsUUFGM0I7QUFHRSxnQkFBUSxFQUFFNUIsS0FBSyxDQUFDcUMsUUFBTixDQUFlSjtBQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNGLGVBc0NFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxnQkFBUSxFQUFFakMsS0FBSyxDQUFDc0MsUUFBTixDQUFlVixRQUYzQjtBQUdFLGdCQUFRLEVBQUU1QixLQUFLLENBQUNzQyxRQUFOLENBQWVMO0FBSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0Q0YsZUEyQ0U7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFRLEVBQUVqQyxLQUFLLENBQUN1QyxRQUFOLENBQWVYLFFBRjNCO0FBR0UsZ0JBQVEsRUFBRTVCLEtBQUssQ0FBQ3VDLFFBQU4sQ0FBZU47QUFIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNDRixlQWdERTtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsZ0JBQVEsRUFBRWpDLEtBQUssQ0FBQ3dDLFNBQU4sQ0FBZ0JaLFFBRjVCO0FBR0UsZ0JBQVEsRUFBRTVCLEtBQUssQ0FBQ3dDLFNBQU4sQ0FBZ0JQLFFBSDVCO0FBSUUsMEJBQWdCO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoREYsZUFzREU7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLGdCQUFRLEVBQUVqQyxLQUFLLENBQUN5QyxTQUFOLENBQWdCYixRQUY1QjtBQUdFLGdCQUFRLEVBQUU1QixLQUFLLENBQUN5QyxTQUFOLENBQWdCUjtBQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdERGLGVBMkRFO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxnQkFBUSxFQUFFakMsS0FBSyxDQUFDMEMsU0FBTixDQUFnQmQsUUFGNUI7QUFHRSxnQkFBUSxFQUFFNUIsS0FBSyxDQUFDMEMsU0FBTixDQUFnQlQ7QUFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNERixlQWdFRTtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsZ0JBQVEsRUFBRWpDLEtBQUssQ0FBQzJDLFNBQU4sQ0FBZ0JmLFFBRjVCO0FBR0UsZ0JBQVEsRUFBRTVCLEtBQUssQ0FBQzJDLFNBQU4sQ0FBZ0JWO0FBSDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoRUYsZUFxRUU7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLGdCQUFRLEVBQUVqQyxLQUFLLENBQUM0QyxTQUFOLENBQWdCaEIsUUFGNUI7QUFHRSxnQkFBUSxFQUFFNUIsS0FBSyxDQUFDNEMsU0FBTixDQUFnQlg7QUFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJFRixlQTBFRTtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsZ0JBQVEsRUFBRWpDLEtBQUssQ0FBQzZDLFNBQU4sQ0FBZ0JqQixRQUY1QjtBQUdFLGdCQUFRLEVBQUU1QixLQUFLLENBQUM2QyxTQUFOLENBQWdCWjtBQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUVGLGVBK0VFO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxnQkFBUSxFQUFFakMsS0FBSyxDQUFDOEMsU0FBTixDQUFnQmxCLFFBRjVCO0FBR0UsZ0JBQVEsRUFBRTNCLFNBQVMsQ0FBQzhDO0FBSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvRUYsZUFvRkU7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLGdCQUFRLEVBQUUvQyxLQUFLLENBQUNnRCxTQUFOLENBQWdCcEIsUUFGNUI7QUFHRSxnQkFBUSxFQUFFM0IsU0FBUyxDQUFDZ0Q7QUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBGRixlQXlGRTtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsZ0JBQVEsRUFBRWpELEtBQUssQ0FBQ2tELFNBQU4sQ0FBZ0J0QixRQUY1QjtBQUdFLGdCQUFRLEVBQUUzQixTQUFTLENBQUNrRDtBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekZGLGVBOEZFO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxnQkFBUSxFQUFFbkQsS0FBSyxDQUFDb0QsU0FBTixDQUFnQnhCLFFBRjVCO0FBR0UsZ0JBQVEsRUFBRTNCLFNBQVMsQ0FBQ29EO0FBSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0dEOztHQTFIdUIxRCxLO1VBRW1CSSx5RCxFQUNyQkksK0QsRUFDREcsMEQ7OztLQUpHWCxLO0FBNEh4QkkseURBQU8sQ0FBQ3VELE9BQVIsQ0FBZ0Isc0JBQWhCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRTcGVha2VyMS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5BdXRvLWdlbmVyYXRlZCBieTogaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy9nbHRmanN4XG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUdMVEYsIHVzZUFuaW1hdGlvbnMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCB1c2VDb2xvclN0b3JlIGZyb20gXCIuLi9zdG9yZXMvY29sb3JTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbCh7IC4uLnByb3BzIH0pIHtcbiAgY29uc3QgZ3JvdXAgPSB1c2VSZWYoKTtcbiAgY29uc3QgeyBub2RlcywgbWF0ZXJpYWxzLCBhbmltYXRpb25zIH0gPSB1c2VHTFRGKFwiL2FuaW1hdGVkU3BlYWtlcjEuZ2xiXCIpO1xuICBjb25zdCB7IGFjdGlvbnMgfSA9IHVzZUFuaW1hdGlvbnMoYW5pbWF0aW9ucywgZ3JvdXApO1xuICBjb25zdCBjb2xvclN0b3JlID0gdXNlQ29sb3JTdG9yZSgpO1xuICBjb25zdCBjb2xvcnMgPSBbXCJvcmFuZ2VcIiwgXCJibHVlXCIsIFwicmVkXCIsIFwicHVycGxlXCIsIFwiZ3JlZW5cIl07XG5cbiAgY29uc3QgbWF0ZXJpYWxLZXlzID0gT2JqZWN0LmtleXMobWF0ZXJpYWxzKTtcbiAgbWF0ZXJpYWxLZXlzLm1hcCgobWF0ZXJpYWxLZXkpID0+IChtYXRlcmlhbHNbbWF0ZXJpYWxLZXldLnNraW5uaW5nID0gdHJ1ZSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWN0aW9ucyk7XG4gICAgY29uc3QgYWN0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbnMpO1xuICAgIGFjdGlvbktleXMubWFwKChhY3Rpb25LZXkpID0+IGFjdGlvbnNbYWN0aW9uS2V5XS5wbGF5KCkpO1xuICAgIGdyb3VwLmN1cnJlbnQucG9zaXRpb24ueCA9IDM7XG4gICAgZ3JvdXAuY3VycmVudC5wb3NpdGlvbi55ID0gNTtcbiAgICBncm91cC5jdXJyZW50LnBvc2l0aW9uLnogPSAwO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGdyb3VwIHJlZj17Z3JvdXB9IHsuLi5wcm9wc30gZGlzcG9zZT17bnVsbH0+XG4gICAgICA8Z3JvdXBcbiAgICAgICAgbmFtZT1cIlNrZXRjaGZhYl9tb2RlbFwiXG4gICAgICAgIHBvc2l0aW9uPXtbMC4wMiwgMCwgLTAuMDJdfVxuICAgICAgICByb3RhdGlvbj17Wy1NYXRoLlBJIC8gMiwgMCwgLU1hdGguUEkgLyAyXX1cbiAgICAgID5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzJcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMi5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLmJhY2twbGF0ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzNcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMy5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLldvb2RfZGFya31cbiAgICAgICAgICBtYXRlcmlhbC1jb2xvcj17XCJibGFja1wifVxuICAgICAgICAgIHBvc2l0aW9uPXtbLTAuMDksIDAsIDAuMDFdfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfNFwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF80Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfNC5tYXRlcmlhbH1cbiAgICAgICAgICBtYXRlcmlhbC1jb2xvcj17Y29sb3JzW2NvbG9yU3RvcmUuY29sb3JdfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfNVwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF81Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfNS5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzZcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfNi5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzYubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF83XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzcuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF83Lm1hdGVyaWFsfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfOFwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF84Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfOC5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzlcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfOS5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzkubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xMFwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xMC5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzEwLm1hdGVyaWFsfVxuICAgICAgICAgIG1hdGVyaWFsLWNvbG9yPXtcIm9yYW5nZVwifVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfMTFcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMTEuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF8xMS5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzEyXCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzEyLmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfMTIubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xM1wiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xMy5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzEzLm1hdGVyaWFsfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfMTRcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMTQuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF8xNC5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzE1XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzE1Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfMTUubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xNlwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xNi5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLm1ldGFsX2Nvbm5lY3R9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xN1wiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xNy5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLnJhbWthX2N6YXJuYX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzE4XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzE4Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMucmVkX3BsYXN0aWN9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xOVwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xOS5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLndoaXRlX3BsYXN0aWN9XG4gICAgICAgIC8+XG4gICAgICA8L2dyb3VwPlxuICAgIDwvZ3JvdXA+XG4gICk7XG59XG5cbnVzZUdMVEYucHJlbG9hZChcIi9hbmltYXRlZFNwZWFrZXIuZ2xiXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AnimatedSpeaker1.js\n");

/***/ })

})