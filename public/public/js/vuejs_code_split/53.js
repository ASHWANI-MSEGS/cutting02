(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/submitSuccess.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/unauthenticate/submitSuccess.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "submitSuccess",
  data: function data() {
    return {
      form: '',
      loading: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/auth/form/list/' + this.$route.params.id).then(function (response) {
      _this.form = response.data.form;
      _this.loading = false;
    })["catch"](function (error) {
      _this.loading = false;

      if (error.response.status === 404) {
        _this.$router.push('/forms');
      }
    });
  },
  methods: {
    printme: function printme() {
      //             const prtHtml = document.getElementById("specificPrint").innerHTML;
      //             // Get all stylesheets HTML
      //             let stylesHtml = "";
      //             for (const node of [
      //                 ...document.querySelectorAll('link[rel="stylesheet"], style'),
      //             ]) {
      //                 stylesHtml += node.outerHTML;
      //             }
      //             // Open the print window
      //             const WinPrint = window.open(
      //                 "",
      //                 "",
      //                 "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      //             );
      //             WinPrint.document.write(`<!DOCTYPE html>
      // <html>
      //   <body>
      //     ${prtHtml}
      //   </body>
      // </html>`);
      //             WinPrint.document.close();
      //             // WinPrint.focus();
      //             WinPrint.print();
      //             // WinPrint.close();
      window.print();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/submitSuccess.vue?vue&type=template&id=6e821230&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/unauthenticate/submitSuccess.vue?vue&type=template&id=6e821230&scoped=true& ***!
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
  return _c("div", { staticClass: "flex flex-col " }, [
    _c(
      "div",
      { staticClass: "relative flex justify-center w-auto h-auto pb-4" },
      [
        _c(
          "div",
          {
            staticClass:
              "flex flex-col my-10 w-12/12 md:w-4/5 lg:w-3/5 xl:w-2/5"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center justify-center h-32 pt-1 rounded-t-lg bg-successcyan"
              },
              [
                _c("div", {}, [
                  _c(
                    "svg",
                    {
                      staticClass: "text-white fill-current",
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
                            "M221.4,84.3c-6-4.3-14.4-3-18.7,3.1l-65.9,92.2c-1.8,2-4.1,2.6-5.3,2.7c-1.2,0.1-3.7-0.1-5.7-2l-42.7-41\n                            c-5.3-5.1-13.8-4.9-18.9,0.4c-5.1,5.3-4.9,13.8,0.4,18.9l42.8,41c6.4,6.1,14.9,9.5,23.8,9.5c0.7,0,1.5,0,2.2-0.1\n                            c9.6-0.6,18.5-5.3,24.5-12.8c0.2-0.2,0.3-0.4,0.4-0.6l66.2-92.5C228.7,97,227.4,88.6,221.4,84.3L221.4,84.3z"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        staticClass: "st0",
                        attrs: {
                          d:
                            "M143.8,3.7C65.8,3.7,2.6,66.9,2.6,144.9s63.2,141.2,141.2,141.2S285,222.9,285,144.9S221.8,3.7,143.8,3.7z\n                            M143.8,262.4c-64.6,0-117.1-52.4-117.1-117.1c0-64.6,52.4-117.1,117.1-117.1s117.1,52.4,117.1,117.1\n                            C260.8,210,208.4,262.4,143.8,262.4z"
                        }
                      })
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { attrs: { id: "specificPrint" } }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg"
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
                          staticClass: "text-gray-700 fill-current",
                          staticStyle: {
                            "enable-background": "new 0 0 300 300"
                          },
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
                                "M257.5,61.4h-21.2V15.1c0-4.5-3.6-8.1-8.1-8.1H73.8c-4.5,0-8.1,3.6-8.1,8.1v46.2H44.4\n                                c-22,0.1-39.8,17.9-39.8,40v80.3c0,22,17.9,39.8,39.8,39.8h21.3v70.3c0,4.5,3.6,8.1,8.1,8.1h154.3c4.5,0,8.1-3.6,8.1-8.1v-70.3h21.2\n                                c22,0,39.9-17.9,39.9-39.8v-80.3C297.4,79.3,279.6,61.4,257.5,61.4z M81.9,23.3H220v38.1H81.9V23.3z M220,283.6H81.9v-90.1H220\n                                V283.6z M281.2,181.6c0,13-10.6,23.6-23.6,23.6h-21.2v-11.6h10c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1H55.7c-4.5,0-8.1,3.6-8.1,8.1\n                                c0,4.5,3.6,8.1,8.1,8.1h10v11.6H44.4c-13,0-23.6-10.6-23.6-23.6v-80.3c0-13,10.6-23.6,23.6-23.6h213.1c13,0,23.6,10.6,23.6,23.6\n                                L281.2,181.6L281.2,181.6z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st0",
                            attrs: {
                              d:
                                "M106.4,265.8h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1\n                                C98.2,262.1,101.9,265.8,106.4,265.8z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st0",
                            attrs: {
                              d:
                                "M106.4,230.5h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1\n                                C98.2,226.9,101.9,230.5,106.4,230.5z"
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
                    "h-auto bg-white border-gray-200 rounded-t-lg rounded-b-lg"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex justify-center py-2 pl-2 my-8 ml:0 md:ml-8"
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex flex-col pb-3 ml-0 md:ml-4" },
                        [
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v(": " + _vm._s(_vm.form.name))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v(": " + _vm._s(_vm.form.email))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v(": " + _vm._s(_vm.form.phone))
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [_vm._v(": ")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v(": " + _vm._s(_vm.form.rhouseno) + ",")
                          ]),
                          _vm._v(" "),
                          _c("p", {}, [
                            _vm._v(_vm._s(_vm.form.rlocalcouncil_name))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v(": " + _vm._s(_vm.form.rcity))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v(": " + _vm._s(_vm.form.rdistrict))
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [_vm._v(": ")]),
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
                            _vm._v(": " + _vm._s(_vm.form.city))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v(": " + _vm._s(_vm.form.district))
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _vm.form.water_id === 0
                            ? [
                                _c("p", { staticClass: "py-1" }, [
                                  _vm._v(": Tui New Connection")
                                ])
                              ]
                            : _vm.form.water_id === 1
                            ? [
                                _c("p", { staticClass: "py-1" }, [
                                  _vm._v(": Tui Old Connection")
                                ])
                              ]
                            : [
                                _c("p", { staticClass: "py-1" }, [
                                  _vm._v(": Others")
                                ])
                              ],
                          _vm._v(" "),
                          _vm.form.road_type === 0
                            ? [
                                _c("p", { staticClass: "py-1 text-md" }, [
                                  _vm._v(": Flexible Pavement")
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: " text-md" }, [
                                  _vm._v("(Alkatra luan)")
                                ])
                              ]
                            : _vm.form.road_type === 1
                            ? [
                                _c("p", { staticClass: "py-1 text-md" }, [
                                  _vm._v(": Rigid Pavement")
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: " text-md" }, [
                                  _vm._v("(Concrete-a siam) ")
                                ])
                              ]
                            : [
                                _c("p", { staticClass: "py-1" }, [
                                  _vm._v(": Others")
                                ]),
                                _vm._v(" "),
                                _c("p", {}, [_vm._v(" (Thildang)")])
                              ],
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v(": " + _vm._s(_vm.form.length))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v(": " + _vm._s(_vm.form.created_at))
                          ])
                        ],
                        2
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
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
          "flex flex-col items-center justify-center h-24 bg-white rounded-b-lg"
      },
      [
        _c("p", { staticClass: "text-2xl font-normal" }, [
          _vm._v("Well Done!!")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-xl font-normal" }, [
          _vm._v("Hei hi i hmuh chuan "),
          _c("b", [_vm._v("apply nawn lo")]),
          _vm._v(" la")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "font-sans text-sm font-thin" }, [
          _vm._v("I Memo Number hi chhinchhiah tha ang che")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-col " }, [
      _c("p", { staticClass: "py-1" }, [_vm._v("Name")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Email ID")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Phone Number")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [
        _c("b", [_vm._v("Residence Address")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Address")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Khua/City/Town/Village")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("District")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [
        _c("b", [_vm._v("Road Cutting Address")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Address")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Khua/City/Town/Village")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("District")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Purpose of cutting")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Road Type")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Length of Road")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Submitted On")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/unauthenticate/submitSuccess.vue":
/*!*******************************************************!*\
  !*** ./resources/js/unauthenticate/submitSuccess.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _submitSuccess_vue_vue_type_template_id_6e821230_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submitSuccess.vue?vue&type=template&id=6e821230&scoped=true& */ "./resources/js/unauthenticate/submitSuccess.vue?vue&type=template&id=6e821230&scoped=true&");
/* harmony import */ var _submitSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submitSuccess.vue?vue&type=script&lang=js& */ "./resources/js/unauthenticate/submitSuccess.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _submitSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _submitSuccess_vue_vue_type_template_id_6e821230_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _submitSuccess_vue_vue_type_template_id_6e821230_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e821230",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/unauthenticate/submitSuccess.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/unauthenticate/submitSuccess.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/unauthenticate/submitSuccess.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submitSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./submitSuccess.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/submitSuccess.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submitSuccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/unauthenticate/submitSuccess.vue?vue&type=template&id=6e821230&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/unauthenticate/submitSuccess.vue?vue&type=template&id=6e821230&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submitSuccess_vue_vue_type_template_id_6e821230_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./submitSuccess.vue?vue&type=template&id=6e821230&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/submitSuccess.vue?vue&type=template&id=6e821230&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submitSuccess_vue_vue_type_template_id_6e821230_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submitSuccess_vue_vue_type_template_id_6e821230_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);