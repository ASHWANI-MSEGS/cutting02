(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PulseLoader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PulseLoader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PulseLoader",
  props: {
    loading: {
      type: Boolean,
      "default": true
    },
    color: {
      type: String,
      "default": '#5dc596'
    },
    size: {
      type: String,
      "default": '15px'
    },
    margin: {
      type: String,
      "default": '2px'
    },
    radius: {
      type: String,
      "default": '100%'
    }
  },
  data: function data() {
    return {
      spinnerStyle: {
        backgroundColor: this.color,
        width: this.size,
        height: this.size,
        margin: this.margin,
        borderRadius: this.radius,
        display: 'inline-block',
        animationName: 'v-pulseStretchDelay',
        animationDuration: '0.75s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
        animationFillMode: 'both'
      },
      spinnerDelay1: {
        animationDelay: '0.12s'
      },
      spinnerDelay2: {
        animationDelay: '0.24s'
      },
      spinnerDelay3: {
        animationDelay: '0.36s'
      }
    };
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/ReportCompleteShow.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EE/ReportCompleteShow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_UserCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/UserCircle */ "./resources/js/components/UserCircle.vue");
/* harmony import */ var _components_PulseLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PulseLoader */ "./resources/js/components/PulseLoader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ReportDateShow",
  components: {
    UserCircle: _components_UserCircle__WEBPACK_IMPORTED_MODULE_0__["default"],
    PulseLoader: _components_PulseLoader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: true,
      modal: false,
      contact: null,
      modalA: false,
      form: '',
      report: '',
      user: this.$store.getters.currentUser,
      engineers: '',
      form1: {
        fine: null,
        id: null,
        form_idR: null
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/reportCompleteShow/' + this.$route.params.id, {
      headers: {
        "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
      }
    }).then(function (response) {
      _this.form = response.data.form; //  console.log(this.form.form_id);

      _this.report = response.data.report;
      console.log(_this.report.form_id);
      _this.loading = false;
    })["catch"](function (error) {
      _this.loading = false;

      if (error.response.status === 404) {
        _this.$router.push('/forms');
      }
    });
  },
  methods: {
    fine: function fine() {
      var _this2 = this;

      this.form1.id = this.$route.params.id;
      this.form1.form_idR = this.report.form_id;
      console.log(this.form1.id, "get this id");
      console.log(this.form1.form_idR, "get this id rrr");
      console.log(this.form1, " form tawp");
      axios.post('/api/reportFine', this.form1, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this2.$router.push('/refundFineList');
      })["catch"](function (error) {
        alert('Internal Error. Unable to delete contact.');
      });
    },
    approve: function approve() {
      var _this3 = this;

      axios.get('/api/reportforRefund/' + this.$route.params.id, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this3.refund = response.data.refund;
        _this3.report = response.data.report;

        _this3.$router.push('/refundUnrefundList'); //  this.$router.push('/formList/');

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PulseLoader.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PulseLoader.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.v-spinner\r\n{\r\n    margin: 100px auto;\r\n    text-align: center;\r\n}\r\n*/\n@-webkit-keyframes v-pulseStretchDelay\r\n{\n0%,\r\n    80%\r\n    {\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n45%\r\n    {\n    transform: scale(0.1);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n}\n@keyframes v-pulseStretchDelay\r\n{\n0%,\r\n    80%\r\n    {\n    transform: scale(1);\n    -webkit-opacity: 1;\n    opacity: 1;\n}\n45%\r\n    {\n    transform: scale(0.1);\n    -webkit-opacity: 0.7;\n    opacity: 0.7;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PulseLoader.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PulseLoader.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./PulseLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PulseLoader.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PulseLoader.vue?vue&type=template&id=6070141e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PulseLoader.vue?vue&type=template&id=6070141e& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "v-spinner"
    },
    [
      _c("div", {
        staticClass: "v-pulse v-pulse1",
        style: [_vm.spinnerStyle, _vm.spinnerDelay1]
      }),
      _c("div", {
        staticClass: "v-pulse v-pulse2",
        style: [_vm.spinnerStyle, _vm.spinnerDelay2]
      }),
      _c("div", {
        staticClass: "v-pulse v-pulse3",
        style: [_vm.spinnerStyle, _vm.spinnerDelay3]
      })
    ]
  )
}
var staticRenderFns = []
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/ReportCompleteShow.vue?vue&type=template&id=24b5192a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EE/ReportCompleteShow.vue?vue&type=template&id=24b5192a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative" }, [
    _vm.modalA
      ? _c("div", {
          staticClass:
            "absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25",
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
            "absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25",
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
              "absolute left-0 right-0 z-40 h-48 ml-auto mr-auto bg-white rounded-lg shadow top-2 sm:w-2/3 lg:w-2/4 xl:w-1/3"
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
                        "px-2 py-2 mt-4 mr-6 rounded hover:bg-gray-200",
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
                      "flex justify-center mt-12 text-xl font-bold text-textblueform "
                  },
                  [_vm._v("Road Cutting Completion Verified & Refund")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex items-center justify-center pt-2 " },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400"
                      },
                      [_vm._v("Verified for Refund")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300",
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
    _vm.loading
      ? _c("div", [_vm._v("Loading...")])
      : _c("div", { staticClass: "flex flex-col md:mt-6 md:ml-6" }, [
          _vm.modal
            ? _c(
                "div",
                {
                  staticClass:
                    "absolute left-0 right-0 z-40 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:h-64 xl:h-84 sm:w-2/3 lg:w-2/4 xl:w-1/3"
                },
                [
                  _c("div", { staticClass: "absolute top-0 right-0 " }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "px-2 py-2 mt-3 mr-6 rounded hover:bg-gray-200",
                        on: {
                          click: function($event) {
                            _vm.modal = !_vm.modal
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
                    "p",
                    {
                      staticClass:
                        "flex justify-center mt-8 mb-6 text-xl font-bold text-red-500"
                    },
                    [_vm._v("Are you sure you want to Fined this Report?")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "relative pb-2 mx-10 mt-6 mb-6 border rounded-lg"
                    },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "absolute px-4 py-2 font-bold text-red-500 text-md"
                        },
                        [_vm._v("Please enter reason for Fined")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form1.fine,
                            expression: "form1.fine"
                          }
                        ],
                        staticClass:
                          "w-full px-4 pt-6 mt-2 text-gray-900 rounded-lg text-md focus:outline-none ",
                        attrs: {
                          type: "text",
                          placeholder: "Reason for rejection"
                        },
                        domProps: { value: _vm.form1.fine },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form1, "fine", $event.target.value)
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex items-center justify-center pt-2 " },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300",
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
                            "px-4 py-2 ml-1 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400",
                          on: { click: _vm.fine }
                        },
                        [_vm._v("Yes")]
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
          _c(
            "div",
            {
              staticClass:
                "flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg sm:w-5/5 lg:w-1/2"
            },
            [
              _c("div", { staticClass: "flex flex-col ml-8" }, [
                _c("p", { staticClass: "text-sm font-light" }, [
                  _vm._v("Memo No")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-lg font-medium" }, [
                  _vm._v(_vm._s(_vm.report.form_memo))
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "px-4 py-1 mr-1 text-white rounded-lg hover:bg-gray-300",
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
                "h-auto bg-white border-gray-200 rounded-t-lg rounded-b-lg sm:w-5/5 lg:w-1/2"
            },
            [
              _c(
                "div",
                { staticClass: "flex justify-start px-1 py-2 ml-0 md:ml-8" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "grid grid-cols-2 gap-0 ml-0 md:gap-2 md:ml-4"
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
                              _vm._v(": Connection Thar (Tui) ")
                            ])
                          ]
                        : _vm.form.water_id === 1
                        ? [
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": Connection Hlui (Tui)")
                            ])
                          ]
                        : [
                            _c("p", { staticClass: "py-1" }, [
                              _vm._v(": Others ")
                            ])
                          ],
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v("Road Cut zawh ni")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.report.cdate))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [_vm._v("A/c Name")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.report.ac_name))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [_vm._v("A/c number")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.report.ac_number))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [_vm._v("IFSC Code")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.report.ifsc))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v("In Report ni")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.report.created_at))
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "px-4 py-2 my-4 text-sm font-bold text-white bg-green-500 border rounded hover:bg-green-400",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              _vm.modalA = !_vm.modalA
                            }
                          }
                        },
                        [_vm._v("Verified for Refund")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "px-4 py-2 my-4 text-sm font-bold text-center text-white bg-red-500 border rounded",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              _vm.modal = !_vm.modal
                            }
                          }
                        },
                        [_vm._v("Report for Fine")]
                      )
                    ],
                    2
                  )
                ]
              )
            ]
          )
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/PulseLoader.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/PulseLoader.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PulseLoader_vue_vue_type_template_id_6070141e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PulseLoader.vue?vue&type=template&id=6070141e& */ "./resources/js/components/PulseLoader.vue?vue&type=template&id=6070141e&");
/* harmony import */ var _PulseLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PulseLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/PulseLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PulseLoader.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/PulseLoader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PulseLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PulseLoader_vue_vue_type_template_id_6070141e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PulseLoader_vue_vue_type_template_id_6070141e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PulseLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PulseLoader.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/PulseLoader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PulseLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PulseLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PulseLoader.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PulseLoader.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./PulseLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PulseLoader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/PulseLoader.vue?vue&type=template&id=6070141e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/PulseLoader.vue?vue&type=template&id=6070141e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_template_id_6070141e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PulseLoader.vue?vue&type=template&id=6070141e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PulseLoader.vue?vue&type=template&id=6070141e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_template_id_6070141e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_template_id_6070141e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/EE/ReportCompleteShow.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/EE/ReportCompleteShow.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportCompleteShow_vue_vue_type_template_id_24b5192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportCompleteShow.vue?vue&type=template&id=24b5192a&scoped=true& */ "./resources/js/views/EE/ReportCompleteShow.vue?vue&type=template&id=24b5192a&scoped=true&");
/* harmony import */ var _ReportCompleteShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportCompleteShow.vue?vue&type=script&lang=js& */ "./resources/js/views/EE/ReportCompleteShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportCompleteShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportCompleteShow_vue_vue_type_template_id_24b5192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportCompleteShow_vue_vue_type_template_id_24b5192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24b5192a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/EE/ReportCompleteShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/EE/ReportCompleteShow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/EE/ReportCompleteShow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCompleteShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportCompleteShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/ReportCompleteShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCompleteShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/EE/ReportCompleteShow.vue?vue&type=template&id=24b5192a&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/EE/ReportCompleteShow.vue?vue&type=template&id=24b5192a&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCompleteShow_vue_vue_type_template_id_24b5192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportCompleteShow.vue?vue&type=template&id=24b5192a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/ReportCompleteShow.vue?vue&type=template&id=24b5192a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCompleteShow_vue_vue_type_template_id_24b5192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCompleteShow_vue_vue_type_template_id_24b5192a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);