webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/useong/\\uAE43 \\uB808\\uD37C\\uC9C0\\uD1A0\\uB9AC/Mini-Project/twitter_sns/front/components/PostCardContent.js\",\n    _this = undefined;\n\n\n\n // [첫 번째 게시글, #해시태그, #익스프레스]\n\n\n\nvar PostCardContent = function PostCardContent(_ref) {\n  var postData = _ref.postData;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n    children: postData.split(/(#[^\\s#]+)/g).map(function (v) {\n      if (v.match(/(#[^\\s#]+)/)) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"/hashtag/\".concat(v.slice(1)),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"a\", {\n            children: v\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 66\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 28\n        }, _this);\n      }\n\n      return v;\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = PostCardContent;\nPostCardContent.PropTypes = {\n  postData: propTypes.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCardContent);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostCardContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanM/ZDQ5NiJdLCJuYW1lcyI6WyJQb3N0Q2FyZENvbnRlbnQiLCJwb3N0RGF0YSIsInNwbGl0IiwibWFwIiwidiIsIm1hdGNoIiwic2xpY2UiLCJQcm9wVHlwZXMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7Ozs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsc0JBQ2hCO0FBQUEsY0FDS0EsUUFBUSxDQUFDQyxLQUFULENBQWUsYUFBZixFQUE4QkMsR0FBOUIsQ0FBa0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RDLFVBQUlBLENBQUMsQ0FBQ0MsS0FBRixDQUFRLFlBQVIsQ0FBSixFQUEyQjtBQUN2Qiw0QkFBTyxxRUFBQyxnREFBRDtBQUFNLGNBQUkscUJBQWNELENBQUMsQ0FBQ0UsS0FBRixDQUFRLENBQVIsQ0FBZCxDQUFWO0FBQUEsaUNBQXNDO0FBQUEsc0JBQUlGO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0g7O0FBQ0QsYUFBT0EsQ0FBUDtBQUNILEtBTEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGdCO0FBQUEsQ0FBeEI7O0tBQU1KLGU7QUFXTkEsZUFBZSxDQUFDTyxTQUFoQixHQUE0QjtBQUFFTixVQUFRLEVBQUVPLFNBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFBN0IsQ0FBNUI7QUFFZVYsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gW+yyqyDrsojsp7gg6rKM7Iuc6riALCAj7ZW07Iuc7YOc6re4LCAj7J217Iqk7ZSE66CI7IqkXVxuY29uc3QgUG9zdENhcmRDb250ZW50ID0gKHsgcG9zdERhdGEgfSkgPT4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3Bvc3REYXRhLnNwbGl0KC8oI1teXFxzI10rKS9nKS5tYXAoKHYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodi5tYXRjaCgvKCNbXlxccyNdKykvKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfT48YT57dn08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG5Qb3N0Q2FyZENvbnRlbnQuUHJvcFR5cGVzID0geyBwb3N0RGF0YTogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkIH1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRDb250ZW50OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCardContent.js\n");

/***/ })

})