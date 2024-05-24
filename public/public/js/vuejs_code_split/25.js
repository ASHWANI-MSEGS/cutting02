(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/PermissionShow.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/unauthenticate/PermissionShow.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_UserCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/UserCircle */ "./resources/js/components/UserCircle.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PermissionShow",
  components: {
    UserCircle: _components_UserCircle__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/auth/permissionShow/' + this.$route.params.id).then(function (response) {
      _this.grant = response.data.grant;
      _this.form = response.data.form;
      _this.estimate = response.data.estimate;
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
      form: '',
      grant: '',
      estimate: '',
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

      axios["delete"]('/api/auth/grant' + this.$route.params.id).then(function (response) {
        _this2.$router.push('/contacts');
      })["catch"](function (error) {
        alert('Internal Error. Unable to delete contact.');
      });
    },
    approve: function approve() {
      var _this3 = this;

      axios.patch('/api/auth/estimateStatus/' + this.$route.params.id).then(function (response) {
        _this3.$router.push('/grantSuccessShow'); // this.$router.push('/formList/' + this.$route.params.id);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/PermissionShow.vue?vue&type=template&id=733f8c82&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/unauthenticate/PermissionShow.vue?vue&type=template&id=733f8c82&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "relative flex justify-center bg-gray-200" },
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
                    [_vm._v("Grant Permission")]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass:
                        "flex justify-center text-blue-500 px-4 py-2 text-md font-bold"
                    },
                    [_vm._v("Do you want to approve")]
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
        { staticClass: " md:mt-6  flex  flex-col  w-full lg:w-3/5  " },
        [
          _vm.loading
            ? _c("div", [_vm._v("\n            Loading...\n        ")])
            : _c("div", { staticClass: "my-6 " }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "rounded-t-lg pt-1  flex items-center justify-center h-32 bg-successcyan"
                  },
                  [
                    _c("div", {}, [
                      _c(
                        "svg",
                        {
                          staticClass: "fill-current text-white",
                          staticStyle: {
                            "enable-background": "new 0 0 300 300"
                          },
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
                      "bg-white h-auto rounded-t-lg   rounded-b-lg border-gray-200"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "mx-8 py-8" },
                      [
                        _vm.form.division_id == 1
                          ? [
                              _c("p", {}, [
                                _vm._v(
                                  "Permission for cutting PWD road/ROW under "
                                ),
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Road South Division")
                                ]),
                                _vm._v(
                                  " for laying pipe/cable\n                            is hearby granted to "
                                ),
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v(_vm._s(_vm.form.name))
                                ]),
                                _vm._v(
                                  " under the following conditions: \n                        "
                                )
                              ])
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.form.division_id == 2
                          ? [
                              _c("p", {}, [
                                _vm._v(
                                  "Permission for cutting PWD road/ROW under "
                                ),
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Road North Division")
                                ]),
                                _vm._v(
                                  " for laying pipe/cable\n                            is hearby granted to "
                                ),
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v(_vm._s(_vm.form.name))
                                ]),
                                _vm._v(
                                  " under the following conditions: \n                        "
                                )
                              ])
                            ]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "ml-8 py-2 pl-2  flex justify-start" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "ml-4 pb-3 flex flex-col" },
                          [
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
                              _vm._v(": " + _vm._s(_vm.estimate.road_name))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": " + _vm._s(_vm.estimate.road_type))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(
                                ": " + _vm._s(_vm.estimate.length) + " meter"
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(
                                ": " + _vm._s(_vm.estimate.breadth) + " meter"
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": Rs. " + _vm._s(_vm.estimate.amount))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": Rs. " + _vm._s(_vm.estimate.deposit))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": Rs. " + _vm._s(_vm.estimate.total))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(
                                ": Valid Upto  " + _vm._s(_vm.grant.validity)
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": " + _vm._s(_vm.form.memo))
                            ]),
                            _vm._v(" "),
                            _vm.grant.status == 0
                              ? [
                                  _c(
                                    "p",
                                    { staticClass: "py-1 text-red-500" },
                                    [_vm._v(": Pending for Permission")]
                                  )
                                ]
                              : [
                                  _c(
                                    "p",
                                    { staticClass: "py-1 mb-2 text-green-500" },
                                    [_vm._v(": Permission Granted")]
                                  )
                                ]
                          ],
                          2
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: " mx-8 py-8",
                        staticStyle: { "page-break-before": "always" }
                      },
                      [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-2" }, [_vm._v("Copy to:")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-2" }, [
                          _vm._v(
                            "1.The Chief Engineer, PWD, _____________________ for kind information. \n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-2" }, [
                          _vm._v(
                            "2. The Superintending Engineer, PWD, _______________Circle for kind information. \n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-2" }, [
                          _vm._v(
                            "3. The Sub-Divisional Officer, PWD, ________________ Sub-Division for \tinformation and necessary action.  \n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-2" }, [
                          _vm._v(
                            "4. The Road Protection Officer, PWD (for Aizawl city area) for information \n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-2" }, [
                          _vm._v(
                            "5. ______________________________(concern department if any) for \t\t\tinformation and compliance of above conditions\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-2" }, [
                          _vm._v("6. "),
                          _c("b", [_vm._v(_vm._s(_vm.form.name))]),
                          _vm._v(
                            " (applicant). This permit should be kept at work site.\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "py-2" }, [
                          _vm._v("7. Secretary, Local/Village Council, "),
                          _c("b", [_vm._v(_vm._s(_vm.form.localcouncil_name))]),
                          _vm._v(
                            " for information & necessary action.\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-8 flex flex-col items-end" },
                          [
                            _c(
                              "div",
                              [
                                _c("p", [_vm._v("Executive Engineer, PWD")]),
                                _vm._v(" "),
                                _vm.form.division_id === 1
                                  ? [_c("p", [_vm._v("Road South Division")])]
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.form.division_id === 2
                                  ? [_c("p", [_vm._v("Road North Division")])]
                                  : _vm._e()
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
          "flex items-center justify-center flex-col bg-white h-auto rounded-b-lg py-2 px-2"
      },
      [
        _c("p", { staticClass: "text-2xl font-normal" }, [
          _vm._v("Permission Granted!!")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "font-sans font-thin text-xl" }, [
          _vm._v(
            "Depth of cutting shall not be less than two (2) feet from road surface"
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "font-sans font-thin text-xl" }, [
          _vm._v("Kawng Laih tur hi feet 2 aiin a thuk ngei ngei tur a ni")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-col " }, [
      _c("p", { staticClass: "py-1" }, [_vm._v("1 Location")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("2 i) Name of Road")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("2 ii) Category of Road")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("3 i) Length")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("3 ii) Breadth")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("4 i) Indemnification Fee")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [
        _vm._v("4 ii) Security Deposit (10%)")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("4 iii) Total")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("5. Permit Validity")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v("6. Applicant ID/ Memo")]),
      _vm._v(" "),
      _c("p", { staticClass: "py-1" }, [_vm._v(" Permission")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: " mx-8 py-8",
        staticStyle: { "page-break-before": "always" }
      },
      [
        _c("p", { staticClass: "py-2" }, [
          _vm._v(
            "7. Applicant shall inform Executive Engineer about starting of ground work/road cutting at least 3 days in advance in online (through portal) (Diltuin kawngpui laih chah hun tur hi ni 3 aia tlem lovah portal hmangin dept a hriattir ang). \n                    "
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "py-2" }, [
          _vm._v(
            "8. Depth of cutting shall not be less than two (2) feet from road surface or as specified by the Executive Engineer (Feet 2 emaw EE – in tha a tih anga thuka laih/phum tur a ni). \n                    "
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "py-2" }, [
          _vm._v(
            "9.Excavation should be filled properly and the site shall be left clean with satisfaction to PWD (separate condition applies wherever required) (Hna zawh hnuah lei/lunga hnawha kawngpui fai taka kalsan tur a ni). \n                    "
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "py-2" }, [
          _vm._v(
            "10.\tApplicant shall give report on completion of work & apply for Security deposit release within 3 days from the date of completion of work in online (through portal) ((hna a zawh atanga ni 3 chhunga applicant-in completion report a pe ang a, SD release a dil tur a ni). In case applicant does not give completion report, concern division is authorised to give completion report on verification at site.\n                    "
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "py-2" }, [
          _vm._v("11.\tForfeiture of security deposit :\n                    ")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "py-2 pl-2" }, [
          _vm._v(
            "i)\tIf applicant violate condition stated in serial no. 9 above, department shall instruct to rectify damage. If applicant does not take action to rectify within three (3) days from the date of instruction, security deposit (SD) shall be forfeited and may be utilised for rectification of damages (a chung sl no 10-in a sawi anga applicant-in a tih loh chuan department-in siam tha leh turin an hrilh ang a, ni thum chhunga hma a lak loh chuan a security deposit a chan ang a a hna tha lo siam that nan hman a ni ang).                       \n                    "
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "py-2 pl-2" }, [
          _vm._v(
            "ii)\tIf applicant fails to give report on completion of work & apply for Security deposit release within three (3) days from the date (date mentioned in serial no. 5 above shall be assumed if not reported) of completion of work as stated in serial no. 10 above, security deposit shall be forfeited and may be remitted to government account (hna a zawh atanga ni 3 chhunga applicant-in completion report a pek loh a SD release a dil loh chuan a SD a chan anga sorkar sumah chhun luh a ni ang).\n                    "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-2" }, [
      _vm._v("Memo No: _______________     "),
      _c("span", { staticClass: "ml-4" }, [
        _vm._v("Dated: ____________ the _____________")
      ])
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

/***/ "./resources/js/unauthenticate/PermissionShow.vue":
/*!********************************************************!*\
  !*** ./resources/js/unauthenticate/PermissionShow.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PermissionShow_vue_vue_type_template_id_733f8c82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionShow.vue?vue&type=template&id=733f8c82&scoped=true& */ "./resources/js/unauthenticate/PermissionShow.vue?vue&type=template&id=733f8c82&scoped=true&");
/* harmony import */ var _PermissionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionShow.vue?vue&type=script&lang=js& */ "./resources/js/unauthenticate/PermissionShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermissionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermissionShow_vue_vue_type_template_id_733f8c82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PermissionShow_vue_vue_type_template_id_733f8c82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "733f8c82",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/unauthenticate/PermissionShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/unauthenticate/PermissionShow.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/unauthenticate/PermissionShow.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/PermissionShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/unauthenticate/PermissionShow.vue?vue&type=template&id=733f8c82&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/unauthenticate/PermissionShow.vue?vue&type=template&id=733f8c82&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionShow_vue_vue_type_template_id_733f8c82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionShow.vue?vue&type=template&id=733f8c82&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/PermissionShow.vue?vue&type=template&id=733f8c82&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionShow_vue_vue_type_template_id_733f8c82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionShow_vue_vue_type_template_id_733f8c82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);