(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
  name: 'EstimateCalculatorShow',
  data: function data() {
    return {
      estimate: {
        'road_name': '',
        'length': '',
        'breadth': '',
        'area': '',
        'rate': '',
        'deposit': '',
        'amount': '',
        'total': '',
        'form_id': this.$route.params.id,
        'division_id': '',
        'enter_by': this.$store.getters.currentUser.id
      },
      errors: {},
      error: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/auth/form/list/' + this.$route.params.id).then(function (response) {
      _this.form = response.data.form;
      _this.estimate.division_id = _this.form.division_id;
      _this.loading = false;
    })["catch"](function (error) {
      _this.loading = false;

      if (error.response.status === 404) {
        _this.$router.push('/forms');
      }
    });
  },
  computed: {
    AREA: function AREA() {
      this.estimate.area = Number((this.estimate.length * this.estimate.breadth).toFixed(2));
      this.estimate.amount = Number((this.estimate.area * this.estimate.rate).toFixed(2));
    },
    TOTAL: function TOTAL() {
      this.estimate.amount = Number((this.estimate.area * this.estimate.rate).toFixed(2));
      this.estimate.deposit = Number((this.estimate.amount * 10 / 100).toFixed(2));
      this.estimate.total = Number((this.estimate.amount + this.estimate.deposit).toFixed(2));
    },
    hasErrorRoadname: function hasErrorRoadname() {
      return this.errors && this.errors['road_name'] && this.errors['road_name'].length > 0;
    },
    hasErrorRoadtype: function hasErrorRoadtype() {
      return this.errors && this.errors['road_type'] && this.errors['road_type'].length > 0;
    },
    hasErrorLength: function hasErrorLength() {
      return this.errors && this.errors['length'] && this.errors['length'].length > 0;
    },
    hasErrorBreadth: function hasErrorBreadth() {
      return this.errors && this.errors['breadth'] && this.errors['breadth'].length > 0;
    },
    hasErrorRate: function hasErrorRate() {
      return this.errors && this.errors['rate'] && this.errors['rate'].length > 0;
    }
  },
  methods: {
    estimateSubmit: function estimateSubmit() {
      var _this2 = this;

      axios.post('/api/estimateSubmit', this.estimate, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        if (response.data.message === "Success") {
          _this2.$router.push("/estimateSubmitSuccess");
        } else {
          _this2.$router.push("/estimateSubmitUnsuccess");
        }
      })["catch"](function (errors) {
        _this2.errors = errors.response.data.errors;
      });
    },
    errorRoadname: function errorRoadname() {
      if (this.hasErrorRoadname) {
        // return this.errors['localcouncil_name'][0];
        return "Please Enter Road name";
      }
    },
    errorRoadtype: function errorRoadtype() {
      if (this.hasErrorRoadtype) {
        // return this.errors['localcouncil_name'][0];
        return "Enter Type of Road";
      }
    },
    errorLength: function errorLength() {
      if (this.hasErrorLength) {
        // return this.errors['localcouncil_name'][0];
        return "Re Enter Length";
      }
    },
    errorBreadth: function errorBreadth() {
      if (this.hasErrorBreadth) {
        // return this.errors['localcouncil_name'][0];
        return "Enter Breadth";
      }
    },
    errorRate: function errorRate() {
      if (this.hasErrotRate) {
        // return this.errors['localcouncil_name'][0];
        return "Enter Rate";
      }
    },
    updateRoadname: function updateRoadname() {
      this.errors['road_name'] = null;
    },
    updateRoadtype: function updateRoadtype() {
      this.errors['road_type'] = null;
    },
    updateLength: function updateLength() {
      this.errors['length'] = null;
    },
    updateBreadth: function updateBreadth() {
      this.errors['breadth'] = null;
    },
    updateRate: function updateRate() {
      this.errors['rate'] = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=template&id=5e0fb9d7&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=template&id=5e0fb9d7&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c(
      "form",
      {
        staticClass:
          "mt-2 ml-0 bg-white rounded-lg md:ml-2 w-5/5 md:w-4/5 lg:w-2/5",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.estimateSubmit.apply(null, arguments)
          }
        }
      },
      [
        _c("div", { staticClass: "px-12 py-4" }, [
          _c("p", { staticClass: "py-2 text-xl bold" }, [
            _vm._v("Estimate Calculator")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "relative py-3 " }, [
            _c(
              "label",
              {
                staticClass:
                  "absolute px-2 py-2 text-xs uppercase text-textblue",
                attrs: { for: "road_name" }
              },
              [_vm._v("Road Name")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.estimate.road_name,
                  expression: "estimate.road_name"
                }
              ],
              staticClass:
                "w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",
              attrs: {
                id: "road_name",
                type: "text",
                placeholder: "Road name chhu lut rawh le",
                autofocus: ""
              },
              domProps: { value: _vm.estimate.road_name },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.estimate, "road_name", $event.target.value)
                  },
                  function($event) {
                    return _vm.updateRoadname()
                  }
                ]
              }
            }),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "pb-4 text-sm text-red-600",
                domProps: { textContent: _vm._s(_vm.errorRoadname()) }
              },
              [_vm._v("Error Here")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "relative py-3 " }, [
            _c(
              "label",
              {
                staticClass:
                  "absolute px-2 py-2 text-xs uppercase text-textblue",
                attrs: { for: "road_type" }
              },
              [_vm._v("Road Type")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.estimate.road_type,
                  expression: "estimate.road_type"
                }
              ],
              staticClass:
                "w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",
              attrs: {
                id: "road_type",
                type: "text",
                placeholder: "Road name chhu lut rawh le"
              },
              domProps: { value: _vm.estimate.road_type },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.estimate, "road_type", $event.target.value)
                  },
                  function($event) {
                    return _vm.updateRoadtype()
                  }
                ]
              }
            }),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "pb-4 text-sm text-red-600",
                domProps: { textContent: _vm._s(_vm.errorRoadtype()) }
              },
              [_vm._v("Error Here")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "relative py-3 " }, [
            _c(
              "label",
              {
                staticClass:
                  "absolute px-2 py-2 text-xs uppercase text-textblue",
                attrs: { for: "length" }
              },
              [_vm._v("Length")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.estimate.length,
                  expression: "estimate.length"
                }
              ],
              staticClass:
                "w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",
              attrs: {
                id: "length",
                type: "text",
                placeholder: "number chhu lut rawh le"
              },
              domProps: { value: _vm.estimate.length },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.estimate, "length", $event.target.value)
                  },
                  _vm.AREA
                ]
              }
            }),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "pb-4 text-sm text-red-600",
                domProps: { textContent: _vm._s(_vm.errorLength()) }
              },
              [_vm._v("Error Here")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "relative pb-3 " }, [
            _c(
              "label",
              {
                staticClass:
                  "absolute px-2 py-2 text-xs uppercase text-textblue",
                attrs: { for: "breadth" }
              },
              [_vm._v("Breadth")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.estimate.breadth,
                  expression: "estimate.breadth"
                }
              ],
              staticClass:
                "w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",
              attrs: {
                id: "breadth",
                type: "text",
                placeholder: "number chhu lut rawh le"
              },
              domProps: { value: _vm.estimate.breadth },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.estimate, "breadth", $event.target.value)
                  },
                  _vm.AREA
                ]
              }
            }),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "pb-4 text-sm text-red-600",
                domProps: { textContent: _vm._s(_vm.errorBreadth()) }
              },
              [_vm._v("Error Here")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "relative pb-3 " }, [
            _c(
              "label",
              {
                staticClass:
                  "absolute px-2 py-2 text-xs uppercase text-textblue",
                attrs: { for: "rate" }
              },
              [_vm._v("Rate(INR)")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.estimate.rate,
                  expression: "estimate.rate"
                }
              ],
              staticClass:
                "w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",
              attrs: {
                id: "rate",
                type: "text",
                placeholder: "number chhu lut rawh le"
              },
              domProps: { value: _vm.estimate.rate },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.estimate, "rate", $event.target.value)
                  },
                  _vm.TOTAL
                ]
              }
            }),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "pb-4 text-sm text-red-600",
                domProps: { textContent: _vm._s(_vm.errorRate()) }
              },
              [_vm._v("Error Here")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2" },
            [
              _c(
                "div",
                { staticClass: "px-4 py-5 bg-white rounded-lg shadow " },
                [
                  _c("p", { staticClass: "text-sm text-gray-400" }, [
                    _vm._v("Area")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-xl text-blue-400" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.estimate.area) +
                        "\n                    "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "px-4 py-5 text-xl text-blue-400 bg-white rounded-lg shadow"
                },
                [
                  _c("p", { staticClass: "text-sm text-gray-400" }, [
                    _vm._v("Amount (INR)")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-xl text-blue-400" }, [
                    _vm._v(
                      "\n                    Rs." +
                        _vm._s(_vm.estimate.amount) +
                        "\n                    "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "px-4 py-5 bg-white rounded-lg shadow " },
                [
                  _c("p", { staticClass: "text-sm text-gray-400" }, [
                    _vm._v("Deposit")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-xl text-blue-400" }, [
                    _vm._v(
                      "\n                    Rs." +
                        _vm._s(_vm.estimate.deposit) +
                        "\n                    "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "px-4 py-5 text-xl text-blue-400 bg-white rounded-lg shadow"
                },
                [
                  _c("p", { staticClass: "text-sm text-gray-400" }, [
                    _vm._v("Total(INR)")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-xl text-blue-400" }, [
                    _vm._v(
                      "\n                    Rs." +
                        _vm._s(_vm.estimate.total) +
                        "\n                    "
                    )
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _vm._m(0)
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "relative pb-3" }, [
      _c("div", [
        _c(
          "button",
          {
            staticClass:
              "flex items-center px-5 py-2 mt-4 text-sm text-white rounded-lg shadow bg-buttonpink hover:bg-red-500 sm:mt-6 focus:outline-none",
            attrs: { type: "submit" }
          },
          [_vm._v("\n                        Submit\n                    ")]
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-4 text-sm italic text-gray-500" }, [
        _vm._v("Note: Click Submit to send to EE for Approval")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/SDO/EstimateCalculatorShow.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/SDO/EstimateCalculatorShow.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EstimateCalculatorShow_vue_vue_type_template_id_5e0fb9d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstimateCalculatorShow.vue?vue&type=template&id=5e0fb9d7&scoped=true& */ "./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=template&id=5e0fb9d7&scoped=true&");
/* harmony import */ var _EstimateCalculatorShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstimateCalculatorShow.vue?vue&type=script&lang=js& */ "./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EstimateCalculatorShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EstimateCalculatorShow_vue_vue_type_template_id_5e0fb9d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EstimateCalculatorShow_vue_vue_type_template_id_5e0fb9d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e0fb9d7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SDO/EstimateCalculatorShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateCalculatorShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstimateCalculatorShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateCalculatorShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=template&id=5e0fb9d7&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=template&id=5e0fb9d7&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateCalculatorShow_vue_vue_type_template_id_5e0fb9d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstimateCalculatorShow.vue?vue&type=template&id=5e0fb9d7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/EstimateCalculatorShow.vue?vue&type=template&id=5e0fb9d7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateCalculatorShow_vue_vue_type_template_id_5e0fb9d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateCalculatorShow_vue_vue_type_template_id_5e0fb9d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);