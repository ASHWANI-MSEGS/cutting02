(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchBarForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SearchBarForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SearchBarForm",
  data: function data() {
    return {
      searchTerm: '',
      focus: false,
      results: []
    };
  },
  methods: {
    clearClick: function clearClick() {
      this.focus = false, this.results = [];
    },
    search: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function () {
      var _this = this;

      if (this.searchTerm.length < 3) {
        return;
      }

      axios.get('/api/auth/paymentSuccessList/' + this.searchTerm).then(function (response) {
        _this.results = response.data.grants.data; // Update to access the grants array directly
      })["catch"](function (error) {
        console.log(error);
      });
    }, 300)
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchBarForm.vue?vue&type=template&id=429cecd4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SearchBarForm.vue?vue&type=template&id=429cecd4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.focus
      ? _c("div", {
          staticClass:
            "absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-0",
          on: {
            click: function($event) {
              return _vm.clearClick()
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "relative z-10" }, [
      _c("div", { staticClass: "absolute" }, [
        _c(
          "svg",
          { staticClass: "w-5 h-5 mt-2 ml-2", attrs: { viewBox: "0 0 24 24" } },
          [
            _c("path", {
              attrs: {
                "fill-rule": "evenodd",
                d:
                  "M20.2 18.1l-1.4 1.3-5.5-5.2 1.4-1.3 5.5 5.2zM7.5 12c-2.7 0-4.9-2.1-4.9-4.6s2.2-4.6 4.9-4.6 4.9 2.1 4.9 4.6S10.2 12 7.5 12zM7.5.8C3.7.8.7 3.7.7 7.3s3.1 6.5 6.8 6.5c3.8 0 6.8-2.9 6.8-6.5S11.3.8 7.5.8z",
                "clip-rule": "evenodd"
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.searchTerm,
            expression: "searchTerm"
          }
        ],
        staticClass:
          "w-64 py-1 pl-8 pr-3 mr-6 text-sm bg-gray-200 border border-gray-400 rounded-full focus:outline-none focus:border-blue-500 focus:shadow focus:bg-gray-100",
        attrs: {
          type: "text",
          placeholder: "Search memo...",
          id: "searchTerm"
        },
        domProps: { value: _vm.searchTerm },
        on: {
          input: [
            function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.searchTerm = $event.target.value
            },
            _vm.search
          ],
          focus: function($event) {
            _vm.focus = true
          }
        }
      }),
      _vm._v(" "),
      _vm.focus
        ? _c(
            "div",
            {
              staticClass:
                "absolute right-0 z-20 p-4 mt-2 mr-6 text-white bg-blue-900 rounded-lg shadow w-96"
            },
            [
              _vm.results == 0
                ? _c("div", [
                    _vm._v(
                      "No results found for '" + _vm._s(_vm.searchTerm) + "'"
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.results, function(result) {
                return _c(
                  "div",
                  {
                    key: result.id,
                    on: {
                      click: function($event) {
                        _vm.focus = false
                      }
                    }
                  },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "block py-2",
                        attrs: { to: "/grantedShow/" + result.id }
                      },
                      [
                        _c("div", { staticClass: "flex items-center" }, [
                          _c("div", { staticClass: "pl-3" }, [
                            _c("p", [
                              _vm._v("Memo: " + _vm._s(result.form_memo))
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("Granted on: " + _vm._s(result.created_at))
                            ])
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              })
            ],
            2
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/SearchBarForm.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/SearchBarForm.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBarForm_vue_vue_type_template_id_429cecd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBarForm.vue?vue&type=template&id=429cecd4&scoped=true& */ "./resources/js/components/SearchBarForm.vue?vue&type=template&id=429cecd4&scoped=true&");
/* harmony import */ var _SearchBarForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBarForm.vue?vue&type=script&lang=js& */ "./resources/js/components/SearchBarForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchBarForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBarForm_vue_vue_type_template_id_429cecd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchBarForm_vue_vue_type_template_id_429cecd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "429cecd4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SearchBarForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SearchBarForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/SearchBarForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBarForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchBarForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SearchBarForm.vue?vue&type=template&id=429cecd4&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/SearchBarForm.vue?vue&type=template&id=429cecd4&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarForm_vue_vue_type_template_id_429cecd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBarForm.vue?vue&type=template&id=429cecd4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchBarForm.vue?vue&type=template&id=429cecd4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarForm_vue_vue_type_template_id_429cecd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarForm_vue_vue_type_template_id_429cecd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);