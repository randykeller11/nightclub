webpackHotUpdate_N_E(1,{

/***/ "./src/components/AnimatedSpeaker1.js":
/*!********************************************!*\
  !*** ./src/components/AnimatedSpeaker1.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var _Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _stores_colorStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/colorStore */ \"./src/stores/colorStore.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/dub_ceo/Desktop/nightclub/src/components/AnimatedSpeaker1.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\nAuto-generated by: https://github.com/pmndrs/gltfjsx\n*/\n\n\n\nfunction Model(_ref) {\n  _s();\n\n  var props = Object(_Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, _ref);\n\n  var group = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useGLTF = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"])(\"/animatedSpeaker1.glb\"),\n      nodes = _useGLTF.nodes,\n      materials = _useGLTF.materials,\n      animations = _useGLTF.animations;\n\n  var _useAnimations = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"])(animations, group),\n      actions = _useAnimations.actions;\n\n  var colorStore = Object(_stores_colorStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  var colors = [\"orange\", \"blue\", \"red\", \"purple\", \"green\"];\n  var materialKeys = Object.keys(materials);\n  materialKeys.map(function (materialKey) {\n    return materials[materialKey].skinning = true;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    console.log(actions);\n    var actionKeys = Object.keys(actions);\n    actionKeys.map(function (actionKey) {\n      return actions[actionKey].play();\n    });\n    group.current.position.x = 4;\n    group.current.position.z = -9;\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"group\", _objectSpread(_objectSpread({\n    ref: group\n  }, props), {}, {\n    dispose: null,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"group\", {\n      name: \"Sketchfab_model\",\n      position: [0.02, 0, -0.02],\n      rotation: [-Math.PI / 2, 0, -Math.PI / 2],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_2\",\n        geometry: nodes.Object_2.geometry,\n        material: materials.backplate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_3\",\n        geometry: nodes.Object_3.geometry,\n        material: materials.Wood_dark,\n        \"material-color\": \"black\",\n        position: [-0.09, 0, 0.01]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_4\",\n        geometry: nodes.Object_4.geometry,\n        material: nodes.Object_4.material,\n        \"material-color\": colors[colorStore.color]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_5\",\n        geometry: nodes.Object_5.geometry,\n        material: nodes.Object_5.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_6\",\n        geometry: nodes.Object_6.geometry,\n        material: nodes.Object_6.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_7\",\n        geometry: nodes.Object_7.geometry,\n        material: nodes.Object_7.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_8\",\n        geometry: nodes.Object_8.geometry,\n        material: nodes.Object_8.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_9\",\n        geometry: nodes.Object_9.geometry,\n        material: nodes.Object_9.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_10\",\n        geometry: nodes.Object_10.geometry,\n        material: nodes.Object_10.material,\n        \"material-color\": \"orange\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_11\",\n        geometry: nodes.Object_11.geometry,\n        material: nodes.Object_11.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_12\",\n        geometry: nodes.Object_12.geometry,\n        material: nodes.Object_12.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_13\",\n        geometry: nodes.Object_13.geometry,\n        material: nodes.Object_13.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_14\",\n        geometry: nodes.Object_14.geometry,\n        material: nodes.Object_14.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_15\",\n        geometry: nodes.Object_15.geometry,\n        material: nodes.Object_15.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_16\",\n        geometry: nodes.Object_16.geometry,\n        material: materials.metal_connect\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_17\",\n        geometry: nodes.Object_17.geometry,\n        material: materials.ramka_czarna\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_18\",\n        geometry: nodes.Object_18.geometry,\n        material: materials.red_plastic\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_19\",\n        geometry: nodes.Object_19.geometry,\n        material: materials.white_plastic\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Model, \"bYTJ6ZhLI9qxEFPzOQZo9+dr2OE=\", false, function () {\n  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"], _react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"], _stores_colorStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Model;\n_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"].preload(\"/animatedSpeaker.glb\");\n\nvar _c;\n\n$RefreshReg$(_c, \"Model\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRTcGVha2VyMS5qcz84YjQ2Il0sIm5hbWVzIjpbIk1vZGVsIiwicHJvcHMiLCJncm91cCIsInVzZVJlZiIsInVzZUdMVEYiLCJub2RlcyIsIm1hdGVyaWFscyIsImFuaW1hdGlvbnMiLCJ1c2VBbmltYXRpb25zIiwiYWN0aW9ucyIsImNvbG9yU3RvcmUiLCJ1c2VDb2xvclN0b3JlIiwiY29sb3JzIiwibWF0ZXJpYWxLZXlzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm1hdGVyaWFsS2V5Iiwic2tpbm5pbmciLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uS2V5cyIsImFjdGlvbktleSIsInBsYXkiLCJjdXJyZW50IiwicG9zaXRpb24iLCJ4IiwieiIsIk1hdGgiLCJQSSIsIk9iamVjdF8yIiwiZ2VvbWV0cnkiLCJiYWNrcGxhdGUiLCJPYmplY3RfMyIsIldvb2RfZGFyayIsIk9iamVjdF80IiwibWF0ZXJpYWwiLCJjb2xvciIsIk9iamVjdF81IiwiT2JqZWN0XzYiLCJPYmplY3RfNyIsIk9iamVjdF84IiwiT2JqZWN0XzkiLCJPYmplY3RfMTAiLCJPYmplY3RfMTEiLCJPYmplY3RfMTIiLCJPYmplY3RfMTMiLCJPYmplY3RfMTQiLCJPYmplY3RfMTUiLCJPYmplY3RfMTYiLCJtZXRhbF9jb25uZWN0IiwiT2JqZWN0XzE3IiwicmFta2FfY3phcm5hIiwiT2JqZWN0XzE4IiwicmVkX3BsYXN0aWMiLCJPYmplY3RfMTkiLCJ3aGl0ZV9wbGFzdGljIiwicHJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVRDLEtBQVM7O0FBQzFDLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sRUFBcEI7O0FBRDBDLGlCQUVEQyxpRUFBTyxDQUFDLHVCQUFELENBRk47QUFBQSxNQUVsQ0MsS0FGa0MsWUFFbENBLEtBRmtDO0FBQUEsTUFFM0JDLFNBRjJCLFlBRTNCQSxTQUYyQjtBQUFBLE1BRWhCQyxVQUZnQixZQUVoQkEsVUFGZ0I7O0FBQUEsdUJBR3RCQyx1RUFBYSxDQUFDRCxVQUFELEVBQWFMLEtBQWIsQ0FIUztBQUFBLE1BR2xDTyxPQUhrQyxrQkFHbENBLE9BSGtDOztBQUkxQyxNQUFNQyxVQUFVLEdBQUdDLGtFQUFhLEVBQWhDO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsS0FBbkIsRUFBMEIsUUFBMUIsRUFBb0MsT0FBcEMsQ0FBZjtBQUVBLE1BQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlULFNBQVosQ0FBckI7QUFDQU8sY0FBWSxDQUFDRyxHQUFiLENBQWlCLFVBQUNDLFdBQUQ7QUFBQSxXQUFrQlgsU0FBUyxDQUFDVyxXQUFELENBQVQsQ0FBdUJDLFFBQXZCLEdBQWtDLElBQXBEO0FBQUEsR0FBakI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixPQUFaO0FBQ0EsUUFBTWEsVUFBVSxHQUFHUixNQUFNLENBQUNDLElBQVAsQ0FBWU4sT0FBWixDQUFuQjtBQUNBYSxjQUFVLENBQUNOLEdBQVgsQ0FBZSxVQUFDTyxTQUFEO0FBQUEsYUFBZWQsT0FBTyxDQUFDYyxTQUFELENBQVAsQ0FBbUJDLElBQW5CLEVBQWY7QUFBQSxLQUFmO0FBQ0F0QixTQUFLLENBQUN1QixPQUFOLENBQWNDLFFBQWQsQ0FBdUJDLENBQXZCLEdBQTJCLENBQTNCO0FBQ0F6QixTQUFLLENBQUN1QixPQUFOLENBQWNDLFFBQWQsQ0FBdUJFLENBQXZCLEdBQTJCLENBQUMsQ0FBNUI7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0Esc0JBQ0U7QUFBTyxPQUFHLEVBQUUxQjtBQUFaLEtBQXVCRCxLQUF2QjtBQUE4QixXQUFPLEVBQUUsSUFBdkM7QUFBQSwyQkFDRTtBQUNFLFVBQUksRUFBQyxpQkFEUDtBQUVFLGNBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFQLEVBQVUsQ0FBQyxJQUFYLENBRlo7QUFHRSxjQUFRLEVBQUUsQ0FBQyxDQUFDNEIsSUFBSSxDQUFDQyxFQUFOLEdBQVcsQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBQ0QsSUFBSSxDQUFDQyxFQUFOLEdBQVcsQ0FBN0IsQ0FIWjtBQUFBLDhCQUtFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxnQkFBUSxFQUFFekIsS0FBSyxDQUFDMEIsUUFBTixDQUFlQyxRQUYzQjtBQUdFLGdCQUFRLEVBQUUxQixTQUFTLENBQUMyQjtBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFVRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZ0JBQVEsRUFBRTVCLEtBQUssQ0FBQzZCLFFBQU4sQ0FBZUYsUUFGM0I7QUFHRSxnQkFBUSxFQUFFMUIsU0FBUyxDQUFDNkIsU0FIdEI7QUFJRSwwQkFBZ0IsT0FKbEI7QUFLRSxnQkFBUSxFQUFFLENBQUMsQ0FBQyxJQUFGLEVBQVEsQ0FBUixFQUFXLElBQVg7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFpQkU7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFRLEVBQUU5QixLQUFLLENBQUMrQixRQUFOLENBQWVKLFFBRjNCO0FBR0UsZ0JBQVEsRUFBRTNCLEtBQUssQ0FBQytCLFFBQU4sQ0FBZUMsUUFIM0I7QUFJRSwwQkFBZ0J6QixNQUFNLENBQUNGLFVBQVUsQ0FBQzRCLEtBQVo7QUFKeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixlQXVCRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZ0JBQVEsRUFBRWpDLEtBQUssQ0FBQ2tDLFFBQU4sQ0FBZVAsUUFGM0I7QUFHRSxnQkFBUSxFQUFFM0IsS0FBSyxDQUFDa0MsUUFBTixDQUFlRjtBQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGLGVBNEJFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxnQkFBUSxFQUFFaEMsS0FBSyxDQUFDbUMsUUFBTixDQUFlUixRQUYzQjtBQUdFLGdCQUFRLEVBQUUzQixLQUFLLENBQUNtQyxRQUFOLENBQWVIO0FBSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkYsZUFpQ0U7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFRLEVBQUVoQyxLQUFLLENBQUNvQyxRQUFOLENBQWVULFFBRjNCO0FBR0UsZ0JBQVEsRUFBRTNCLEtBQUssQ0FBQ29DLFFBQU4sQ0FBZUo7QUFIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDRixlQXNDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZ0JBQVEsRUFBRWhDLEtBQUssQ0FBQ3FDLFFBQU4sQ0FBZVYsUUFGM0I7QUFHRSxnQkFBUSxFQUFFM0IsS0FBSyxDQUFDcUMsUUFBTixDQUFlTDtBQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdENGLGVBMkNFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxnQkFBUSxFQUFFaEMsS0FBSyxDQUFDc0MsUUFBTixDQUFlWCxRQUYzQjtBQUdFLGdCQUFRLEVBQUUzQixLQUFLLENBQUNzQyxRQUFOLENBQWVOO0FBSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQ0YsZUFnREU7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLGdCQUFRLEVBQUVoQyxLQUFLLENBQUN1QyxTQUFOLENBQWdCWixRQUY1QjtBQUdFLGdCQUFRLEVBQUUzQixLQUFLLENBQUN1QyxTQUFOLENBQWdCUCxRQUg1QjtBQUlFLDBCQUFnQjtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaERGLGVBc0RFO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxnQkFBUSxFQUFFaEMsS0FBSyxDQUFDd0MsU0FBTixDQUFnQmIsUUFGNUI7QUFHRSxnQkFBUSxFQUFFM0IsS0FBSyxDQUFDd0MsU0FBTixDQUFnQlI7QUFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRERixlQTJERTtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsZ0JBQVEsRUFBRWhDLEtBQUssQ0FBQ3lDLFNBQU4sQ0FBZ0JkLFFBRjVCO0FBR0UsZ0JBQVEsRUFBRTNCLEtBQUssQ0FBQ3lDLFNBQU4sQ0FBZ0JUO0FBSDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzREYsZUFnRUU7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLGdCQUFRLEVBQUVoQyxLQUFLLENBQUMwQyxTQUFOLENBQWdCZixRQUY1QjtBQUdFLGdCQUFRLEVBQUUzQixLQUFLLENBQUMwQyxTQUFOLENBQWdCVjtBQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEVGLGVBcUVFO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxnQkFBUSxFQUFFaEMsS0FBSyxDQUFDMkMsU0FBTixDQUFnQmhCLFFBRjVCO0FBR0UsZ0JBQVEsRUFBRTNCLEtBQUssQ0FBQzJDLFNBQU4sQ0FBZ0JYO0FBSDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyRUYsZUEwRUU7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLGdCQUFRLEVBQUVoQyxLQUFLLENBQUM0QyxTQUFOLENBQWdCakIsUUFGNUI7QUFHRSxnQkFBUSxFQUFFM0IsS0FBSyxDQUFDNEMsU0FBTixDQUFnQlo7QUFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFFRixlQStFRTtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsZ0JBQVEsRUFBRWhDLEtBQUssQ0FBQzZDLFNBQU4sQ0FBZ0JsQixRQUY1QjtBQUdFLGdCQUFRLEVBQUUxQixTQUFTLENBQUM2QztBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0VGLGVBb0ZFO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxnQkFBUSxFQUFFOUMsS0FBSyxDQUFDK0MsU0FBTixDQUFnQnBCLFFBRjVCO0FBR0UsZ0JBQVEsRUFBRTFCLFNBQVMsQ0FBQytDO0FBSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwRkYsZUF5RkU7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLGdCQUFRLEVBQUVoRCxLQUFLLENBQUNpRCxTQUFOLENBQWdCdEIsUUFGNUI7QUFHRSxnQkFBUSxFQUFFMUIsU0FBUyxDQUFDaUQ7QUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpGRixlQThGRTtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsZ0JBQVEsRUFBRWxELEtBQUssQ0FBQ21ELFNBQU4sQ0FBZ0J4QixRQUY1QjtBQUdFLGdCQUFRLEVBQUUxQixTQUFTLENBQUNtRDtBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdHRDs7R0F6SHVCekQsSztVQUVtQkkseUQsRUFDckJJLCtELEVBQ0RHLDBEOzs7S0FKR1gsSztBQTJIeEJJLHlEQUFPLENBQUNzRCxPQUFSLENBQWdCLHNCQUFoQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkU3BlYWtlcjEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQXV0by1nZW5lcmF0ZWQgYnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9wbW5kcnMvZ2x0ZmpzeFxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHTFRGLCB1c2VBbmltYXRpb25zIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgdXNlQ29sb3JTdG9yZSBmcm9tIFwiLi4vc3RvcmVzL2NvbG9yU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kZWwoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IGdyb3VwID0gdXNlUmVmKCk7XG4gIGNvbnN0IHsgbm9kZXMsIG1hdGVyaWFscywgYW5pbWF0aW9ucyB9ID0gdXNlR0xURihcIi9hbmltYXRlZFNwZWFrZXIxLmdsYlwiKTtcbiAgY29uc3QgeyBhY3Rpb25zIH0gPSB1c2VBbmltYXRpb25zKGFuaW1hdGlvbnMsIGdyb3VwKTtcbiAgY29uc3QgY29sb3JTdG9yZSA9IHVzZUNvbG9yU3RvcmUoKTtcbiAgY29uc3QgY29sb3JzID0gW1wib3JhbmdlXCIsIFwiYmx1ZVwiLCBcInJlZFwiLCBcInB1cnBsZVwiLCBcImdyZWVuXCJdO1xuXG4gIGNvbnN0IG1hdGVyaWFsS2V5cyA9IE9iamVjdC5rZXlzKG1hdGVyaWFscyk7XG4gIG1hdGVyaWFsS2V5cy5tYXAoKG1hdGVyaWFsS2V5KSA9PiAobWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5za2lubmluZyA9IHRydWUpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbnMpO1xuICAgIGNvbnN0IGFjdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3Rpb25zKTtcbiAgICBhY3Rpb25LZXlzLm1hcCgoYWN0aW9uS2V5KSA9PiBhY3Rpb25zW2FjdGlvbktleV0ucGxheSgpKTtcbiAgICBncm91cC5jdXJyZW50LnBvc2l0aW9uLnggPSA0O1xuICAgIGdyb3VwLmN1cnJlbnQucG9zaXRpb24ueiA9IC05O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGdyb3VwIHJlZj17Z3JvdXB9IHsuLi5wcm9wc30gZGlzcG9zZT17bnVsbH0+XG4gICAgICA8Z3JvdXBcbiAgICAgICAgbmFtZT1cIlNrZXRjaGZhYl9tb2RlbFwiXG4gICAgICAgIHBvc2l0aW9uPXtbMC4wMiwgMCwgLTAuMDJdfVxuICAgICAgICByb3RhdGlvbj17Wy1NYXRoLlBJIC8gMiwgMCwgLU1hdGguUEkgLyAyXX1cbiAgICAgID5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzJcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMi5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLmJhY2twbGF0ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzNcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMy5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLldvb2RfZGFya31cbiAgICAgICAgICBtYXRlcmlhbC1jb2xvcj17XCJibGFja1wifVxuICAgICAgICAgIHBvc2l0aW9uPXtbLTAuMDksIDAsIDAuMDFdfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfNFwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF80Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfNC5tYXRlcmlhbH1cbiAgICAgICAgICBtYXRlcmlhbC1jb2xvcj17Y29sb3JzW2NvbG9yU3RvcmUuY29sb3JdfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfNVwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF81Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfNS5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzZcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfNi5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzYubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF83XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzcuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF83Lm1hdGVyaWFsfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfOFwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF84Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfOC5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzlcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfOS5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzkubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xMFwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xMC5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzEwLm1hdGVyaWFsfVxuICAgICAgICAgIG1hdGVyaWFsLWNvbG9yPXtcIm9yYW5nZVwifVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfMTFcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMTEuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF8xMS5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzEyXCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzEyLmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfMTIubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xM1wiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xMy5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzEzLm1hdGVyaWFsfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfMTRcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMTQuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF8xNC5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzE1XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzE1Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfMTUubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xNlwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xNi5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLm1ldGFsX2Nvbm5lY3R9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xN1wiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xNy5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLnJhbWthX2N6YXJuYX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzE4XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzE4Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMucmVkX3BsYXN0aWN9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xOVwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xOS5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLndoaXRlX3BsYXN0aWN9XG4gICAgICAgIC8+XG4gICAgICA8L2dyb3VwPlxuICAgIDwvZ3JvdXA+XG4gICk7XG59XG5cbnVzZUdMVEYucHJlbG9hZChcIi9hbmltYXRlZFNwZWFrZXIuZ2xiXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AnimatedSpeaker1.js\n");

/***/ })

})