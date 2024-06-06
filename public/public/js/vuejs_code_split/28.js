(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_UserCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/UserCircle */ "./resources/js/components/UserCircle.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EstimateShowfromTrack",
  components: {
    UserCircle: _components_UserCircle__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/auth/estimateShowunprotected/' + this.$route.params.id).then(function (response) {
      _this.estimate = response.data.estimate;
      axios.get('/api/auth/form/list/' + _this.estimate.form_id).then(function (response) {
        _this.form = response.data.form;
      })["catch"](function (error) {
        _this.loading = false;
      });
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
      form: {},
      loading: true,
      modal: false,
      contact: null,
      modalA: false,
      currentUser: this.$store.getters.currentUser
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

      axios.patch('/api/auth/estimateStatus/' + this.$route.params.id).then(function (response) {
        _this3.$router.push('/UnapprovedEstimatedLIst/'); // this.$router.push('/formList/' + this.$route.params.id);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=template&id=15f7f657&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=template&id=15f7f657&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "relative flex justify-center bg-gray-200 h-auto" },
    [
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
        : _vm._e(),
      _vm._v(" "),
      _vm.modalA
        ? _c(
            "div",
            {
              staticClass:
                "absolute bg-white left-0 top-2 right-0 rounded-lg  sm:h-48 md:h-64  sm:w-2/3 lg:w-2/4 xl:w-1/4  ml-auto mr-auto  shadow z-40"
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.approve.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "absolute top-0 right-0 " }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "mr-6 mt-4 hover:bg-gray-200 px-2 py-2 rounded",
                        on: {
                          click: function($event) {
                            _vm.modalA = !_vm.modalA
                          }
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "11.877",
                              height: "11.877",
                              viewBox: "0 0 11.877 11.877"
                            }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  id: "Group_9",
                                  "data-name": "Group 9",
                                  transform: "translate(-1238.562 -230.423)"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    id: "Path_35",
                                    "data-name": "Path 35",
                                    d: "M3285,232l8.847,8.847",
                                    transform: "translate(-2045 0.015)",
                                    fill: "none",
                                    stroke: "#e37198",
                                    "stroke-linecap": "round",
                                    "stroke-width": "2"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    id: "Path_36",
                                    "data-name": "Path 36",
                                    d: "M0,0,8.847,8.847",
                                    transform:
                                      "matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)",
                                    fill: "none",
                                    stroke: "#e37198",
                                    "stroke-linecap": "round",
                                    "stroke-width": "2"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "text-textblueform  flex justify-center my-6  font-bold text-xl "
                    },
                    [_vm._v("Approve Estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass:
                        "flex justify-center text-blue-500 px-4 py-2 text-md font-bold"
                    },
                    [_vm._v("Do you want to approve this Estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: " flex items-center pt-2  justify-center" },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "px-4 py-2 bg-green-500 rounded text-sm font-bold text-white hover:bg-green-400",
                          on: { click: _vm.approve }
                        },
                        [_vm._v("Yes")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "text-red-500 border border-red-500 rounded ml-1 px-4 py-1 hover:border-red-300",
                          on: {
                            click: function($event) {
                              _vm.modalA = !_vm.modalA
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            " md:mt-6 md:ml-6 flex flex-col  sm:w-full md:w-4/5 lg:w-1/2  "
        },
        [
          _vm.loading
            ? _c("div", [_vm._v("\n            Loading...\n        ")])
            : _c("div", [
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
                        staticClass:
                          "text-white  rounded-lg px-4 py-1 mr-1 hover:bg-gray-300",
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
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "bg-white h-auto rounded-t-lg   rounded-b-lg border-gray-200 mb-5"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "ml-8 py-2 pl-2  flex justify-start" },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "ml-4 pb-3 flex flex-col" },
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
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": " + _vm._s(_vm.form.location))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": " + _vm._s(_vm.estimate.length))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": " + _vm._s(_vm.estimate.breadth))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": Rs. " + _vm._s(_vm.estimate.total))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": New Connection")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": Rigid Pavement")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": " + _vm._s(_vm.form.created_at))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": " + _vm._s(_vm.estimate.created_at))
                            ]),
                            _vm._v(" "),
                            _vm.estimate.status === 0
                              ? [
                                  _c(
                                    "p",
                                    { staticClass: "py-1 text-red-500" },
                                    [_vm._v(": Pending for Approval")]
                                  )
                                ]
                              : [
                                  _c(
                                    "p",
                                    { staticClass: "py-1 mb-2 text-green-500" },
                                    [_vm._v(": Approved")]
                                  )
                                ]
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
}
var staticRenderFns = [
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
      _c("p", { staticClass: "py-1" }, [_vm._v("Address")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Length of Road ")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Breadth of Road")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Amount")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Tui Connection")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Road Type")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Submitted On")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Estimated On")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("Status")])
    ])
  }
]
render._withStripped = true



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



/***/ }),

/***/ "./resources/js/views/common/EstimateShowfromTrack.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/common/EstimateShowfromTrack.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EstimateShowfromTrack_vue_vue_type_template_id_15f7f657_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstimateShowfromTrack.vue?vue&type=template&id=15f7f657&scoped=true& */ "./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=template&id=15f7f657&scoped=true&");
/* harmony import */ var _EstimateShowfromTrack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstimateShowfromTrack.vue?vue&type=script&lang=js& */ "./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EstimateShowfromTrack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EstimateShowfromTrack_vue_vue_type_template_id_15f7f657_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EstimateShowfromTrack_vue_vue_type_template_id_15f7f657_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15f7f657",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/common/EstimateShowfromTrack.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowfromTrack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstimateShowfromTrack.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowfromTrack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=template&id=15f7f657&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=template&id=15f7f657&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowfromTrack_vue_vue_type_template_id_15f7f657_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstimateShowfromTrack.vue?vue&type=template&id=15f7f657&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/common/EstimateShowfromTrack.vue?vue&type=template&id=15f7f657&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowfromTrack_vue_vue_type_template_id_15f7f657_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowfromTrack_vue_vue_type_template_id_15f7f657_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);