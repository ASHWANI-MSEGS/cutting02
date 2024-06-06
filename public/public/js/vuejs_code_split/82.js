(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/payment/PaymentSuccess.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/payment/PaymentSuccess.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
  name: "PaymentSuccess",
  data: function data() {
    return {
      form: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/auth/form/list/' + this.$route.params.id).then(function (response) {
      _this.form = response.data.form;
    });
  },
  methods: {
    printme: function printme() {
      window.print();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/payment/PaymentSuccess.vue?vue&type=template&id=1acae1b6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/payment/PaymentSuccess.vue?vue&type=template&id=1acae1b6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "flex flex-col h-screen  w-full md:w-4/5 lg:w-1/2" },
    [
      _c("div", { staticClass: "relative flex justify-center   pb-4" }, [
        _c(
          "div",
          { staticClass: " mt-10 ml-20 flex flex-col w-full md:w-2/3 " },
          [
            _c(
              "div",
              {
                staticClass:
                  "rounded-t-lg  flex items-center justify-center h-32 bg-successcyan"
              },
              [
                _c("div", {}, [
                  _c(
                    "svg",
                    {
                      staticClass: "fill-current text-white",
                      staticStyle: { "enable-background": "new 0 0 300 300" },
                      attrs: {
                        version: "1.1",
                        id: "Layer_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 300 300",
                        width: "80",
                        height: "80",
                        "xml:space": "preserve"
                      }
                    },
                    [
                      _c("path", {
                        staticClass: "st0",
                        attrs: {
                          d:
                            "M221.4,84.3c-6-4.3-14.4-3-18.7,3.1l-65.9,92.2c-1.8,2-4.1,2.6-5.3,2.7c-1.2,0.1-3.7-0.1-5.7-2l-42.7-41\r\n\t                                        c-5.3-5.1-13.8-4.9-18.9,0.4c-5.1,5.3-4.9,13.8,0.4,18.9l42.8,41c6.4,6.1,14.9,9.5,23.8,9.5c0.7,0,1.5,0,2.2-0.1\r\n\t                                        c9.6-0.6,18.5-5.3,24.5-12.8c0.2-0.2,0.3-0.4,0.4-0.6l66.2-92.5C228.7,97,227.4,88.6,221.4,84.3L221.4,84.3z"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        staticClass: "st0",
                        attrs: {
                          d:
                            "M143.8,3.7C65.8,3.7,2.6,66.9,2.6,144.9s63.2,141.2,141.2,141.2S285,222.9,285,144.9S221.8,3.7,143.8,3.7z\r\n\t                                        M143.8,262.4c-64.6,0-117.1-52.4-117.1-117.1c0-64.6,52.4-117.1,117.1-117.1s117.1,52.4,117.1,117.1\r\n\t                                        C260.8,210,208.4,262.4,143.8,262.4z"
                        }
                      })
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex items-center flex-row justify-between mt-3 bg-white h-24 rounded-t-lg rounded-b-lg border-b-4 border-dashed"
              },
              [
                _c("div", { staticClass: "flex flex-col ml-8" }, [
                  _c("p", { staticClass: "text-sm font-light" }, [
                    _vm._v("Memo No")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-lg font-medium" }, [
                    _vm._v(_vm._s(_vm.form.memo))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "mr-8 hover:text-gray-400",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.printme.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "fill-current text-gray-700",
                        staticStyle: { "enable-background": "new 0 0 300 300" },
                        attrs: {
                          version: "1.1",
                          id: "Layer_1",
                          width: "30",
                          height: "30",
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          x: "0px",
                          y: "0px",
                          viewBox: "0 0 300 300",
                          "xml:space": "preserve"
                        }
                      },
                      [
                        _c("path", {
                          staticClass: "st0",
                          attrs: {
                            d:
                              "M257.5,61.4h-21.2V15.1c0-4.5-3.6-8.1-8.1-8.1H73.8c-4.5,0-8.1,3.6-8.1,8.1v46.2H44.4\r\n\t                                        c-22,0.1-39.8,17.9-39.8,40v80.3c0,22,17.9,39.8,39.8,39.8h21.3v70.3c0,4.5,3.6,8.1,8.1,8.1h154.3c4.5,0,8.1-3.6,8.1-8.1v-70.3h21.2\r\n\t                                        c22,0,39.9-17.9,39.9-39.8v-80.3C297.4,79.3,279.6,61.4,257.5,61.4z M81.9,23.3H220v38.1H81.9V23.3z M220,283.6H81.9v-90.1H220\r\n\t                                        V283.6z M281.2,181.6c0,13-10.6,23.6-23.6,23.6h-21.2v-11.6h10c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1H55.7c-4.5,0-8.1,3.6-8.1,8.1\r\n\t                                        c0,4.5,3.6,8.1,8.1,8.1h10v11.6H44.4c-13,0-23.6-10.6-23.6-23.6v-80.3c0-13,10.6-23.6,23.6-23.6h213.1c13,0,23.6,10.6,23.6,23.6\r\n\t                                        L281.2,181.6L281.2,181.6z"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          staticClass: "st0",
                          attrs: {
                            d:
                              "M106.4,265.8h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1\r\n\t                                        C98.2,262.1,101.9,265.8,106.4,265.8z"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          staticClass: "st0",
                          attrs: {
                            d:
                              "M106.4,230.5h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1\r\n\t                                        C98.2,226.9,101.9,230.5,106.4,230.5z"
                          }
                        }),
                        _vm._v(" "),
                        _c("circle", {
                          staticClass: "st0",
                          attrs: { cx: "254.4", cy: "104.3", r: "8.1" }
                        }),
                        _vm._v(" "),
                        _c("circle", {
                          staticClass: "st0",
                          attrs: { cx: "254.4", cy: "132.4", r: "8.1" }
                        })
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "py-2 bg-white h-64 rounded-t-lg  h-auto rounded-b-lg border-gray-200"
              },
              [
                _c(
                  "div",
                  { staticClass: "ml-0 md:ml-8 py-2 pl-2  flex justify-start" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "grid grid-cols-2 gap-1 md:gap-2 mx-1 md:mx-4 lg:ml-8"
                      },
                      [
                        _c("p", { staticClass: "py-1" }, [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-1" }, [
                          _vm._v(": " + _vm._s(_vm.form.name))
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-1" }, [_vm._v("Email ID")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-1" }, [
                          _vm._v(": " + _vm._s(_vm.form.email))
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-1" }, [
                          _vm._v("Phone Number")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-1" }, [
                          _vm._v(": " + _vm._s(_vm.form.phone))
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-1" }, [
                          _vm._v("Residence Address")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-1" }, [
                          _vm._v(
                            ": " +
                              _vm._s(_vm.form.rhouseno) +
                              ", " +
                              _vm._s(_vm.form.rlocalcouncil_name)
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-1" }, [
                          _vm._v("Roadcutting Address")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-1" }, [
                          _vm._v(
                            ": " +
                              _vm._s(_vm.form.houseno) +
                              ", " +
                              _vm._s(_vm.form.localcouncil_name)
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-1" }, [
                          _vm._v("Purpose of Road Cutting")
                        ]),
                        _vm._v(" "),
                        _vm.form.water_id === 0
                          ? [
                              _c("p", { staticClass: "py-1" }, [
                                _vm._v(": New Connection (Tui)")
                              ])
                            ]
                          : _vm.form.water_id === 1
                          ? [
                              _c("p", { staticClass: "py-1" }, [
                                _vm._v(": Old Connection (Tui)")
                              ])
                            ]
                          : [
                              _c("p", { staticClass: "py-1" }, [
                                _vm._v(": Others")
                              ])
                            ]
                      ],
                      2
                    )
                  ]
                )
              ]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "flex items-center justify-center flex-col bg-white h-24 rounded-b-lg"
      },
      [
        _c("p", { staticClass: "text-2xl font-normal" }, [
          _vm._v("Well Done!!")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "font-sans font-thin text-sm" }, [
          _vm._v("Payment is Successful")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/payment/PaymentSuccess.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/payment/PaymentSuccess.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaymentSuccess_vue_vue_type_template_id_1acae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentSuccess.vue?vue&type=template&id=1acae1b6&scoped=true& */ "./resources/js/views/payment/PaymentSuccess.vue?vue&type=template&id=1acae1b6&scoped=true&");
/* harmony import */ var _PaymentSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentSuccess.vue?vue&type=script&lang=js& */ "./resources/js/views/payment/PaymentSuccess.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentSuccess_vue_vue_type_template_id_1acae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaymentSuccess_vue_vue_type_template_id_1acae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1acae1b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/payment/PaymentSuccess.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/payment/PaymentSuccess.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/payment/PaymentSuccess.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentSuccess.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/payment/PaymentSuccess.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/payment/PaymentSuccess.vue?vue&type=template&id=1acae1b6&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/payment/PaymentSuccess.vue?vue&type=template&id=1acae1b6&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentSuccess_vue_vue_type_template_id_1acae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentSuccess.vue?vue&type=template&id=1acae1b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/payment/PaymentSuccess.vue?vue&type=template&id=1acae1b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentSuccess_vue_vue_type_template_id_1acae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentSuccess_vue_vue_type_template_id_1acae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);