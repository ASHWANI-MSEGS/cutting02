(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feature/FeatureShow.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/feature/FeatureShow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "FeatureShow",
  data: function data() {
    return {
      feature: {},
      security_deposit: {
        id: '',
        feature: '',
        status: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/featureShow/' + this.$store.getters.currentUser.division_id, {
      headers: {
        "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
      }
    }).then(function (response) {
      _this.feature = response.data.feature;
      _this.security_deposit = response.data.security_deposit; // console.log(security_deposit);

      _this.loading = false;
    })["catch"](function (error) {
      _this.loading = false;

      if (error.response.status === 404) {
        _this.$router.push('/forms');
      }
    });
  },
  methods: {
    securityUpdate: function securityUpdate() {
      var _this2 = this;

      axios.get('/api/securityUpdate/' + this.security_deposit.id, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this2.feature = response.data.feature;
        _this2.security_deposit = response.data.security_deposit; // console.log(response.data);

        _this2.loading = false;

        _this2.$router.push('/feature');
      })["catch"](function (error) {
        _this2.loading = false;

        if (error.response.status === 404) {
          _this2.$router.push('/forms');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feature/FeatureShow.vue?vue&type=template&id=675c01aa&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/feature/FeatureShow.vue?vue&type=template&id=675c01aa& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "min-h-screen" }, [
    _c("div", { staticClass: "pb-16 " }, [
      _c(
        "div",
        {
          staticClass:
            "grid h-auto grid-cols-1 gap-4 mx-8 my-8 rounded-lg md:grid-cols-2"
        },
        [
          _c("div", { staticClass: "bg-white rounded-lg" }, [
            _c(
              "div",
              { staticClass: "my-8 ml-8" },
              [
                _c("p", { staticClass: "my-2 text-2xl" }, [_vm._v("Features")]),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "text-gray-700" },
                  [
                    _vm._v(
                      "Security Deposit wave off Functionality:\n                "
                    ),
                    _vm.security_deposit.status == 0
                      ? [
                          _c("span", { staticClass: "text-gray-600" }, [
                            _vm._v("Deactivated")
                          ])
                        ]
                      : _vm.security_deposit.status == 1
                      ? [
                          _c("span", { staticClass: "text-buttonpink" }, [
                            _vm._v("Activated")
                          ])
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.security_deposit.status == 0
                  ? [
                      _c(
                        "button",
                        {
                          staticClass:
                            "px-2 py-2 mt-4 text-white rounded-lg bg-buttonpink hover:bg-red-500 focus:outline-none",
                          on: { click: _vm.securityUpdate }
                        },
                        [_vm._v("Turn On")]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.security_deposit.status == 1
                  ? [
                      _c(
                        "button",
                        {
                          staticClass:
                            "px-2 py-2 mt-4 text-white bg-gray-500 rounded-lg hover:bg-gray-400 focus:outline-none",
                          on: { click: _vm.securityUpdate }
                        },
                        [_vm._v("Turn Off")]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/feature/FeatureShow.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/feature/FeatureShow.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeatureShow_vue_vue_type_template_id_675c01aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureShow.vue?vue&type=template&id=675c01aa& */ "./resources/js/views/feature/FeatureShow.vue?vue&type=template&id=675c01aa&");
/* harmony import */ var _FeatureShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureShow.vue?vue&type=script&lang=js& */ "./resources/js/views/feature/FeatureShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeatureShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeatureShow_vue_vue_type_template_id_675c01aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeatureShow_vue_vue_type_template_id_675c01aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/feature/FeatureShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/feature/FeatureShow.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/feature/FeatureShow.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeatureShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feature/FeatureShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/feature/FeatureShow.vue?vue&type=template&id=675c01aa&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/feature/FeatureShow.vue?vue&type=template&id=675c01aa& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureShow_vue_vue_type_template_id_675c01aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeatureShow.vue?vue&type=template&id=675c01aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/feature/FeatureShow.vue?vue&type=template&id=675c01aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureShow_vue_vue_type_template_id_675c01aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureShow_vue_vue_type_template_id_675c01aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);