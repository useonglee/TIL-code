webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    // 다른 정보들과 합쳐주는 것은 대문자로 시작한다.\n    User: {\n      id: 1,\n      nickname: '하이우성'\n    },\n    content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n    Images: [{\n      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'\n    }, {\n      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'\n    }, {\n      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'nero'\n      },\n      content: '프사 잘나왔어요~~!!'\n    }, {\n      User: {\n        nickname: 'hero'\n      },\n      content: '우아!!'\n    }]\n  }],\n  // 이미지 업로드할 때 여기에 저장\n  imagePaths: [],\n  // 게시글 추가 완료 되었을 때, true로 변환\n  postAdded: false\n}; // 액션 이름을 상수로 빼준다 => const 값 재활용 가능\n\nvar ADD_POST = 'ADD_POST';\nvar addPost = {\n  type: ADD_POST\n}; // 더미데이터\n\nvar dummyPost = {\n  id: 2,\n  content: '더미데이터입니다.',\n  User: {\n    id: 1,\n    nickname: '하이우성'\n  },\n  Image: [],\n  Comments: []\n}; // 이전 스테이트와 액션을 받아서 다음 스테이트를 돌려주는 함수\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        // 게시글 쓰자마자 바로 위에 올라가게 해준다.\n        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJJbWFnZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNSQyxNQUFFLEVBQUUsQ0FESTtBQUVSO0FBQ0FDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUhFO0FBT1JDLFdBQU8sRUFBRSx1QkFQRDtBQVFSQyxVQUFNLEVBQUUsQ0FBQztBQUNMQyxTQUFHLEVBQUU7QUFEQSxLQUFELEVBRUw7QUFDQ0EsU0FBRyxFQUFFO0FBRE4sS0FGSyxFQUlOO0FBQ0VBLFNBQUcsRUFBRTtBQURQLEtBSk0sQ0FSQTtBQWVSQyxZQUFRLEVBQUUsQ0FBQztBQUNQTCxVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BREM7QUFJUEMsYUFBTyxFQUFFO0FBSkYsS0FBRCxFQUtQO0FBQ0NGLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEUDtBQUlDQyxhQUFPLEVBQUU7QUFKVixLQUxPO0FBZkYsR0FBRCxDQURhO0FBNEJ4QjtBQUNBSSxZQUFVLEVBQUUsRUE3Qlk7QUE4QnhCO0FBQ0FDLFdBQVMsRUFBRTtBQS9CYSxDQUFyQixDLENBa0NQOztBQUNBLElBQU1DLFFBQVEsR0FBRSxVQUFoQjtBQUNPLElBQU1DLE9BQU8sR0FBRztBQUNuQkMsTUFBSSxFQUFFRjtBQURhLENBQWhCLEMsQ0FHUDs7QUFDQSxJQUFNRyxTQUFTLEdBQUc7QUFDZFosSUFBRSxFQUFFLENBRFU7QUFFZEcsU0FBTyxFQUFFLFdBRks7QUFHZEYsTUFBSSxFQUFFO0FBQ0ZELE1BQUUsRUFBRSxDQURGO0FBRUZFLFlBQVEsRUFBRTtBQUZSLEdBSFE7QUFPZFcsT0FBSyxFQUFFLEVBUE87QUFRZFAsVUFBUSxFQUFFO0FBUkksQ0FBbEIsQyxDQVdBOztBQUNBLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QmpCLFlBQXlCO0FBQUEsTUFBWGtCLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNJLFNBQUtGLFFBQUw7QUFDSSw2Q0FDT00sS0FEUDtBQUVJO0FBQ0FoQixpQkFBUyxHQUFHYSxTQUFILHNHQUFpQkcsS0FBSyxDQUFDaEIsU0FBdkIsRUFIYjtBQUlJUyxpQkFBUyxFQUFFO0FBSmY7O0FBTUo7QUFDSSxhQUFPTyxLQUFQO0FBVFI7QUFXSCxDQVpEOztBQWNlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG1haW5Qb3N0czogW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIC8vIOuLpOuluCDsoJXrs7Trk6Tqs7wg7ZWp7LOQ7KO864qUIOqyg+ydgCDrjIDrrLjsnpDroZwg7Iuc7J6R7ZWc64ukLlxuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7ZWY7J207Jqw7ISxJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcIixcbiAgICAgICAgSW1hZ2VzOiBbe1xuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcbiAgICAgICAgfSx7XG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxuICAgICAgICB9XSwgXG4gICAgICAgIENvbW1lbnRzOiBbe1xuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogJ+2UhOyCrCDsnpjrgpjsmZTslrTsmpR+fiEhJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnaGVybycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogJ+yasOyVhCEhJ1xuICAgICAgICB9XVxuICAgIH1dLFxuICAgIC8vIOydtOuvuOyngCDsl4XroZzrk5ztlaAg65WMIOyXrOq4sOyXkCDsoIDsnqVcbiAgICBpbWFnZVBhdGhzOiBbXSxcbiAgICAvLyDqsozsi5zquIAg7LaU6rCAIOyZhOujjCDrkJjsl4jsnYQg65WMLCB0cnVl66GcIOuzgO2ZmFxuICAgIHBvc3RBZGRlZDogZmFsc2UsXG59XG5cbi8vIOyVoeyFmCDsnbTrpoTsnYQg7IOB7IiY66GcIOu5vOykgOuLpCA9PiBjb25zdCDqsJIg7J6s7Zmc7JqpIOqwgOuKpVxuY29uc3QgQUREX1BPU1QgPSdBRERfUE9TVCc7XG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcbiAgICB0eXBlOiBBRERfUE9TVCxcbn1cbi8vIOuNlOuvuOuNsOydtO2EsFxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICAgIGlkOiAyLFxuICAgIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLDsnoXri4jri6QuJywgXG4gICAgVXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6ICftlZjsnbTsmrDshLEnLFxuICAgIH0sXG4gICAgSW1hZ2U6IFtdLFxuICAgIENvbW1lbnRzOiBbXSxcbn07XG5cbi8vIOydtOyghCDsiqTthYzsnbTtirjsmYAg7JWh7IWY7J2EIOuwm+yVhOyEnCDri6TsnYwg7Iqk7YWM7J207Yq466W8IOuPjOugpOyjvOuKlCDtlajsiJhcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLy8g6rKM7Iuc6riAIOyTsOyekOuniOyekCDrsJTroZwg7JyE7JeQIOyYrOudvOqwgOqyjCDtlbTspIDri6QuXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})