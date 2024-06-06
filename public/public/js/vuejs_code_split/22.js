(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormShowCO.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormShowCO.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserCircle */ "./resources/js/components/UserCircle.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FormShowCO",
  components: {
    UserCircle: _UserCircle__WEBPACK_IMPORTED_MODULE_0__["default"]
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
  data: function data() {
    return {
      loading: true,
      modal: false,
      contact: null,
      modalA: false
    };
  },
  methods: {
    destroy: function destroy() {
      var _this2 = this;

      axios["delete"]('/api/contacts/' + this.$route.params.id).then(function (response) {
        _this2.$router.push('/contacts');
      })["catch"](function (error) {
        alert('Internal Error. Unable to delete contact.');
      });
    },
    approve: function approve() {
      var _this3 = this;

      axios.patch('/api/auth/form/list2/' + this.$route.params.id).then(function (response) {
        _this3.$router.push('/formListUnCO'); // this.$router.push('/formList/' + this.$route.params.id);

      })["catch"](function (error) {
        alert('Internal Error. Unable to approve form.');
      });
    },
    printme: function printme() {
      window.print();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserCircle.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserCircle.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserCircle",
  props: ['name'],
  computed: {
    userCircle: function userCircle() {
      if (this.name.match(/[A-Z]/g) < 1) {
        return this.name.match(/[a-z]/g).slice(0, 2).join('');
      } else return this.name.match(/[A-Z]/g).slice(0, 2).join('');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormShowCO.vue?vue&type=template&id=4f664c38&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormShowCO.vue?vue&type=template&id=4f664c38&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _vm.loading
      ? _c("div", [_vm._v("Loading...")])
      : _c(
          "div",
          [
            _c("div", { staticClass: "flex justify-between" }, [
              _c("div", { staticClass: "relative" }, [
                _vm.form.status === 0
                  ? _c(
                      "a",
                      {
                        staticClass:
                          "px-4 py-2 border border-green-500 rounded text-sm font-bold text-green-500",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            _vm.modalA = !_vm.modalA
                          }
                        }
                      },
                      [_vm._v("Send to EE for Verification")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.modalA
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "absolute bg-blue-600 text-white rounded-lg z-20 p-8 w-96 left mt-2 mr-6"
                      },
                      [
                        _c("p", [
                          _vm._v(
                            "Are you sure you want to Send this form for Verification?"
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "flex items-center mt-6 justify-end" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "text-white pr-4",
                                on: {
                                  click: function($event) {
                                    _vm.modalA = !_vm.modalA
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "px-4 py-2 bg-green-500 rounded  text-sm font-bold text-white",
                                on: { click: _vm.approve }
                              },
                              [_vm._v("Send to EE for Verification")]
                            )
                          ]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "px-4 py-2 border border-red-500 rounded text-sm font-bold text-red-500",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        _vm.modal = !_vm.modal
                      }
                    }
                  },
                  [_vm._v("Reject")]
                ),
                _vm._v(" "),
                _vm.modal
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "absolute bg-blue-900 text-white rounded-lg z-20 p-8 w-64 right-0 mt-2 mr-6"
                      },
                      [
                        _c("p", [
                          _vm._v("Are you sure you want to Reject this form?")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "flex items-center mt-6 justify-end" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "text-white pr-4",
                                on: {
                                  click: function($event) {
                                    _vm.modal = !_vm.modal
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "px-4 py-2 bg-red-500 rounded text-sm font-bold text-white",
                                on: { click: _vm.destroy }
                              },
                              [_vm._v("Reject")]
                            )
                          ]
                        )
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "text-blue-400",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      return _vm.$router.back()
                    }
                  }
                },
                [_vm._v("\n                 Back\n                 ")]
              ),
              _vm._v(" "),
              _vm.modalA
                ? _c("div", {
                    staticClass:
                      "bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10",
                    on: {
                      click: function($event) {
                        _vm.modalA = !_vm.modalA
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.modal
                ? _c("div", {
                    staticClass:
                      "bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10",
                    on: {
                      click: function($event) {
                        _vm.modal = !_vm.modal
                      }
                    }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex pt-6" },
              [_c("UserCircle", { attrs: { name: _vm.form.name } })],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _c(
                "span",
                {
                  staticClass: "pt-6 text-gray-600 font-bold uppercase text-sm"
                },
                [_vm._v("Memo:")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "pl-2 text-xl" }, [
                _vm._v(_vm._s(_vm.form.memo))
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _c(
                "span",
                {
                  staticClass: "pt-6 text-gray-600 font-bold uppercase text-sm"
                },
                [_vm._v("Name")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "pl-2 text-xl" }, [
                _vm._v(_vm._s(_vm.form.name))
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _c(
                "span",
                {
                  staticClass: "pt-6 text-gray-600 font-bold uppercase text-sm"
                },
                [_vm._v("Email")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "pt-2 text-blue-400" }, [
                _vm._v(_vm._s(_vm.form.email))
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _c(
                "span",
                {
                  staticClass: "pt-6 text-gray-600 font-bold uppercase text-sm"
                },
                [_vm._v("Phone Number:")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "pt-2 text-blue-400" }, [
                _vm._v(_vm._s(_vm.form.phone))
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _c(
                "span",
                {
                  staticClass: "pt-6 text-gray-600 font-bold uppercase text-sm"
                },
                [_vm._v("Address:")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "pt-2 text-blue-400" }, [
                _vm._v(_vm._s(_vm.form.location))
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _c(
                "span",
                {
                  staticClass: "pt-6 text-gray-600 font-bold uppercase text-sm"
                },
                [_vm._v("Length of the road to be cut:")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "pt-2 text-xl" }, [
                _vm._v(_vm._s(_vm.form.length))
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "p",
              [
                _c(
                  "span",
                  {
                    staticClass:
                      "pt-6 text-gray-600 font-bold uppercase text-sm"
                  },
                  [_vm._v("Tui Connection: ")]
                ),
                _vm._v(" "),
                _vm.form.water_type === 0
                  ? [
                      _c("span", { staticClass: "pt-2 text-blue-400" }, [
                        _vm._v("New Connection")
                      ])
                    ]
                  : [
                      _c("span", { staticClass: "pt-2 text-blue-400" }, [
                        _vm._v("Old Connection")
                      ])
                    ]
              ],
              2
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "p",
              [
                _c(
                  "span",
                  {
                    staticClass:
                      "pt-6 text-gray-600 font-bold uppercase text-sm"
                  },
                  [_vm._v("Road Type: ")]
                ),
                _vm._v(" "),
                _vm.form.water_type === 0
                  ? [
                      _c("span", { staticClass: "pt-2 text-blue-400" }, [
                        _vm._v(" Flexible Pavement (Alkatra luan):")
                      ])
                    ]
                  : [
                      _c("span", { staticClass: "pt-2 text-blue-400" }, [
                        _vm._v("Rigid Pavement (Concrete-a siam)")
                      ])
                    ]
              ],
              2
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm.form.status === 0 ? [_vm._m(0)] : [_vm._m(1)],
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "text-white  rounded-lg px-4 py-1",
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
                    attrs: {
                      height: "30pt",
                      viewBox: "-27 -67 859.31017 859",
                      width: "30pt",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d:
                          "m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"
                      }
                    })
                  ]
                )
              ]
            )
          ],
          2
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "pt-6 text-gray-600 font-bold uppercase text-sm pr-2" },
      [
        _vm._v("Status: "),
        _c(
          "span",
          { staticClass: "bg-red-400 rounded text-white px-1 py-1 " },
          [_vm._v("UNAPPROVED")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "pt-6 text-gray-600 font-bold uppercase text-sm pr-2" },
      [
        _vm._v("Status: "),
        _c(
          "span",
          { staticClass: "bg-green-400 rounded text-white px-1 py-1" },
          [_vm._v("APPROVED")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserCircle.vue?vue&type=template&id=766447a6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserCircle.vue?vue&type=template&id=766447a6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "rounded-full border border-gray-400 text-white bg-blue-400 w-10 h-10 flex justify-center items-center"
    },
    [_vm._v("\n    " + _vm._s(_vm.userCircle) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FormShowCO.vue":
/*!************************************************!*\
  !*** ./resources/js/components/FormShowCO.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormShowCO_vue_vue_type_template_id_4f664c38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormShowCO.vue?vue&type=template&id=4f664c38&scoped=true& */ "./resources/js/components/FormShowCO.vue?vue&type=template&id=4f664c38&scoped=true&");
/* harmony import */ var _FormShowCO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormShowCO.vue?vue&type=script&lang=js& */ "./resources/js/components/FormShowCO.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormShowCO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormShowCO_vue_vue_type_template_id_4f664c38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormShowCO_vue_vue_type_template_id_4f664c38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4f664c38",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormShowCO.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormShowCO.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/FormShowCO.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormShowCO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormShowCO.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormShowCO.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormShowCO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormShowCO.vue?vue&type=template&id=4f664c38&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/FormShowCO.vue?vue&type=template&id=4f664c38&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormShowCO_vue_vue_type_template_id_4f664c38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormShowCO.vue?vue&type=template&id=4f664c38&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormShowCO.vue?vue&type=template&id=4f664c38&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormShowCO_vue_vue_type_template_id_4f664c38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormShowCO_vue_vue_type_template_id_4f664c38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UserCircle.vue":
/*!************************************************!*\
  !*** ./resources/js/components/UserCircle.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserCircle_vue_vue_type_template_id_766447a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserCircle.vue?vue&type=template&id=766447a6&scoped=true& */ "./resources/js/components/UserCircle.vue?vue&type=template&id=766447a6&scoped=true&");
/* harmony import */ var _UserCircle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCircle.vue?vue&type=script&lang=js& */ "./resources/js/components/UserCircle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserCircle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserCircle_vue_vue_type_template_id_766447a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserCircle_vue_vue_type_template_id_766447a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "766447a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserCircle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserCircle.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/UserCircle.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCircle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserCircle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserCircle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCircle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserCircle.vue?vue&type=template&id=766447a6&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/UserCircle.vue?vue&type=template&id=766447a6&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCircle_vue_vue_type_template_id_766447a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserCircle.vue?vue&type=template&id=766447a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserCircle.vue?vue&type=template&id=766447a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCircle_vue_vue_type_template_id_766447a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCircle_vue_vue_type_template_id_766447a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);