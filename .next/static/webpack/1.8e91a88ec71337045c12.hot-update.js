webpackHotUpdate_N_E(1,{

/***/ "./src/components/AnimatedSpeaker2.js":
/*!********************************************!*\
  !*** ./src/components/AnimatedSpeaker2.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var _Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _stores_colorStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stores/colorStore */ \"./src/stores/colorStore.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/dub_ceo/Desktop/nightclub/src/components/AnimatedSpeaker2.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\nAuto-generated by: https://github.com/pmndrs/gltfjsx\n*/\n\n\n\nfunction Model(_ref) {\n  _s();\n\n  var props = Object(_Users_dub_ceo_Desktop_nightclub_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, _ref);\n\n  var group = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useGLTF = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"])(\"/animatedSpeaker2.glb\"),\n      nodes = _useGLTF.nodes,\n      materials = _useGLTF.materials,\n      animations = _useGLTF.animations;\n\n  var _useAnimations = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"])(animations, group),\n      actions = _useAnimations.actions;\n\n  var colorStore = Object(_stores_colorStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  var colors = [\"orange\", \"blue\", \"red\", \"purple\", \"green\"];\n  var materialKeys = Object.keys(materials);\n  materialKeys.map(function (materialKey) {\n    return materials[materialKey].skinning = true;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var actionKeys = Object.keys(actions);\n    actionKeys.map(function (actionKey) {\n      return actions[actionKey].play();\n    });\n    group.current.position.x = -3;\n    group.current.position.y = 2;\n    group.current.position.z = -9;\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"group\", _objectSpread(_objectSpread({\n    ref: group\n  }, props), {}, {\n    dispose: null,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"group\", {\n      name: \"Sketchfab_model\",\n      position: [0.02, 0, -0.02],\n      rotation: [-Math.PI / 2, 0, -Math.PI / 2],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_2\",\n        geometry: nodes.Object_2.geometry,\n        material: materials.backplate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_3\",\n        geometry: nodes.Object_3.geometry,\n        material: materials.Wood_dark,\n        \"material-color\": \"black\",\n        position: [-0.09, 0, 0.01]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_4\",\n        geometry: nodes.Object_4.geometry,\n        material: nodes.Object_4.material,\n        \"material-color\": colors[colorStore.color]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_5\",\n        geometry: nodes.Object_5.geometry,\n        material: nodes.Object_5.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_6\",\n        geometry: nodes.Object_6.geometry,\n        material: nodes.Object_6.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_7\",\n        geometry: nodes.Object_7.geometry,\n        material: nodes.Object_7.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_8\",\n        geometry: nodes.Object_8.geometry,\n        material: nodes.Object_8.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_9\",\n        geometry: nodes.Object_9.geometry,\n        material: nodes.Object_9.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_10\",\n        geometry: nodes.Object_10.geometry,\n        material: nodes.Object_10.material,\n        \"material-color\": \"orange\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_11\",\n        geometry: nodes.Object_11.geometry,\n        material: nodes.Object_11.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_12\",\n        geometry: nodes.Object_12.geometry,\n        material: nodes.Object_12.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_13\",\n        geometry: nodes.Object_13.geometry,\n        material: nodes.Object_13.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_14\",\n        geometry: nodes.Object_14.geometry,\n        material: nodes.Object_14.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_15\",\n        geometry: nodes.Object_15.geometry,\n        material: nodes.Object_15.material\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_16\",\n        geometry: nodes.Object_16.geometry,\n        material: materials.metal_connect\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_17\",\n        geometry: nodes.Object_17.geometry,\n        material: materials.ramka_czarna\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_18\",\n        geometry: nodes.Object_18.geometry,\n        material: materials.red_plastic\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"mesh\", {\n        name: \"Object_19\",\n        geometry: nodes.Object_19.geometry,\n        material: materials.white_plastic\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Model, \"bYTJ6ZhLI9qxEFPzOQZo9+dr2OE=\", false, function () {\n  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"], _react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"], _stores_colorStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Model;\n_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"].preload(\"/animatedSpeaker.glb\");\n\nvar _c;\n\n$RefreshReg$(_c, \"Model\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRTcGVha2VyMi5qcz9kMTBhIl0sIm5hbWVzIjpbIk1vZGVsIiwicHJvcHMiLCJncm91cCIsInVzZVJlZiIsInVzZUdMVEYiLCJub2RlcyIsIm1hdGVyaWFscyIsImFuaW1hdGlvbnMiLCJ1c2VBbmltYXRpb25zIiwiYWN0aW9ucyIsImNvbG9yU3RvcmUiLCJ1c2VDb2xvclN0b3JlIiwiY29sb3JzIiwibWF0ZXJpYWxLZXlzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm1hdGVyaWFsS2V5Iiwic2tpbm5pbmciLCJ1c2VFZmZlY3QiLCJhY3Rpb25LZXlzIiwiYWN0aW9uS2V5IiwicGxheSIsImN1cnJlbnQiLCJwb3NpdGlvbiIsIngiLCJ5IiwieiIsIk1hdGgiLCJQSSIsIk9iamVjdF8yIiwiZ2VvbWV0cnkiLCJiYWNrcGxhdGUiLCJPYmplY3RfMyIsIldvb2RfZGFyayIsIk9iamVjdF80IiwibWF0ZXJpYWwiLCJjb2xvciIsIk9iamVjdF81IiwiT2JqZWN0XzYiLCJPYmplY3RfNyIsIk9iamVjdF84IiwiT2JqZWN0XzkiLCJPYmplY3RfMTAiLCJPYmplY3RfMTEiLCJPYmplY3RfMTIiLCJPYmplY3RfMTMiLCJPYmplY3RfMTQiLCJPYmplY3RfMTUiLCJPYmplY3RfMTYiLCJtZXRhbF9jb25uZWN0IiwiT2JqZWN0XzE3IiwicmFta2FfY3phcm5hIiwiT2JqZWN0XzE4IiwicmVkX3BsYXN0aWMiLCJPYmplY3RfMTkiLCJ3aGl0ZV9wbGFzdGljIiwicHJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVRDLEtBQVM7O0FBQzFDLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sRUFBcEI7O0FBRDBDLGlCQUVEQyxpRUFBTyxDQUFDLHVCQUFELENBRk47QUFB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QUssQ0FBQ2dELFNBQU4sQ0FBZ0J0QixRQUY1QjtBQUdFLGdCQUFRLEVBQUV6QixTQUFTLENBQUNnRDtBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekZGLGVBOEZFO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxnQkFBUSxFQUFFakQsS0FBSyxDQUFDa0QsU0FBTixDQUFnQnhCLFFBRjVCO0FBR0UsZ0JBQVEsRUFBRXpCLFNBQVMsQ0FBQ2tEO0FBSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0dEOztHQXpIdUJ4RCxLO1VBRW1CSSx5RCxFQUNyQkksK0QsRUFDREcsMEQ7OztLQUpHWCxLO0FBMkh4QkkseURBQU8sQ0FBQ3FELE9BQVIsQ0FBZ0Isc0JBQWhCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRTcGVha2VyMi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5BdXRvLWdlbmVyYXRlZCBieTogaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy9nbHRmanN4XG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUdMVEYsIHVzZUFuaW1hdGlvbnMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCB1c2VDb2xvclN0b3JlIGZyb20gXCIuLi9zdG9yZXMvY29sb3JTdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbCh7IC4uLnByb3BzIH0pIHtcbiAgY29uc3QgZ3JvdXAgPSB1c2VSZWYoKTtcbiAgY29uc3QgeyBub2RlcywgbWF0ZXJpYWxzLCBhbmltYXRpb25zIH0gPSB1c2VHTFRGKFwiL2FuaW1hdGVkU3BlYWtlcjIuZ2xiXCIpO1xuICBjb25zdCB7IGFjdGlvbnMgfSA9IHVzZUFuaW1hdGlvbnMoYW5pbWF0aW9ucywgZ3JvdXApO1xuICBjb25zdCBjb2xvclN0b3JlID0gdXNlQ29sb3JTdG9yZSgpO1xuICBjb25zdCBjb2xvcnMgPSBbXCJvcmFuZ2VcIiwgXCJibHVlXCIsIFwicmVkXCIsIFwicHVycGxlXCIsIFwiZ3JlZW5cIl07XG5cbiAgY29uc3QgbWF0ZXJpYWxLZXlzID0gT2JqZWN0LmtleXMobWF0ZXJpYWxzKTtcbiAgbWF0ZXJpYWxLZXlzLm1hcCgobWF0ZXJpYWxLZXkpID0+IChtYXRlcmlhbHNbbWF0ZXJpYWxLZXldLnNraW5uaW5nID0gdHJ1ZSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYWN0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbnMpO1xuICAgIGFjdGlvbktleXMubWFwKChhY3Rpb25LZXkpID0+IGFjdGlvbnNbYWN0aW9uS2V5XS5wbGF5KCkpO1xuICAgIGdyb3VwLmN1cnJlbnQucG9zaXRpb24ueCA9IC0zO1xuICAgIGdyb3VwLmN1cnJlbnQucG9zaXRpb24ueSA9IDI7XG4gICAgZ3JvdXAuY3VycmVudC5wb3NpdGlvbi56ID0gLTk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8Z3JvdXAgcmVmPXtncm91cH0gey4uLnByb3BzfSBkaXNwb3NlPXtudWxsfT5cbiAgICAgIDxncm91cFxuICAgICAgICBuYW1lPVwiU2tldGNoZmFiX21vZGVsXCJcbiAgICAgICAgcG9zaXRpb249e1swLjAyLCAwLCAtMC4wMl19XG4gICAgICAgIHJvdGF0aW9uPXtbLU1hdGguUEkgLyAyLCAwLCAtTWF0aC5QSSAvIDJdfVxuICAgICAgPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfMlwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8yLmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuYmFja3BsYXRlfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfM1wiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8zLmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuV29vZF9kYXJrfVxuICAgICAgICAgIG1hdGVyaWFsLWNvbG9yPXtcImJsYWNrXCJ9XG4gICAgICAgICAgcG9zaXRpb249e1stMC4wOSwgMCwgMC4wMV19XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF80XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzQuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF80Lm1hdGVyaWFsfVxuICAgICAgICAgIG1hdGVyaWFsLWNvbG9yPXtjb2xvcnNbY29sb3JTdG9yZS5jb2xvcl19XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF81XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzUuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF81Lm1hdGVyaWFsfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfNlwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF82Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfNi5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzdcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfNy5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzcubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF84XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzguZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF84Lm1hdGVyaWFsfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfOVwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF85Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfOS5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzEwXCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzEwLmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfMTAubWF0ZXJpYWx9XG4gICAgICAgICAgbWF0ZXJpYWwtY29sb3I9e1wib3JhbmdlXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xMVwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xMS5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzExLm1hdGVyaWFsfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfMTJcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMTIuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF8xMi5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzEzXCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzEzLmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXtub2Rlcy5PYmplY3RfMTMubWF0ZXJpYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgbmFtZT1cIk9iamVjdF8xNFwiXG4gICAgICAgICAgZ2VvbWV0cnk9e25vZGVzLk9iamVjdF8xNC5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17bm9kZXMuT2JqZWN0XzE0Lm1hdGVyaWFsfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfMTVcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMTUuZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e25vZGVzLk9iamVjdF8xNS5tYXRlcmlhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzE2XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzE2Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMubWV0YWxfY29ubmVjdH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzE3XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzE3Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMucmFta2FfY3phcm5hfVxuICAgICAgICAvPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIG5hbWU9XCJPYmplY3RfMThcIlxuICAgICAgICAgIGdlb21ldHJ5PXtub2Rlcy5PYmplY3RfMTguZ2VvbWV0cnl9XG4gICAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5yZWRfcGxhc3RpY31cbiAgICAgICAgLz5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzE5XCJcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuT2JqZWN0XzE5Lmdlb21ldHJ5fVxuICAgICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMud2hpdGVfcGxhc3RpY31cbiAgICAgICAgLz5cbiAgICAgIDwvZ3JvdXA+XG4gICAgPC9ncm91cD5cbiAgKTtcbn1cblxudXNlR0xURi5wcmVsb2FkKFwiL2FuaW1hdGVkU3BlYWtlci5nbGJcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AnimatedSpeaker2.js\n");

/***/ })

})