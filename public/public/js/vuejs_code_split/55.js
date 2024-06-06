(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/EstimateShowEE.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EE/EstimateShowEE.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EstimateShowEE",
  components: {},
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/estimateShow/' + this.$route.params.id, {
      headers: {
        "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
      }
    }).then(function (response) {
      console.log(response.data);
      _this.estimate = response.data.estimate;
      _this.form = response.data.form;
      _this.security_deposit = response.data.security_deposit; // this.security_deposit = 'Testing';

      _this.loading = false;
    })["catch"](function (error) {
      _this.loading = false;

      if (error.response.status === 404) {
        _this.$router.push('/');
      }
    });
  },
  data: function data() {
    return {
      security_deposit: {},
      form: {},
      loading: true,
      modal: false,
      contact: null,
      modalA: false,
      modalEstimateEdit: false,
      currentUser: this.$store.getters.currentUser,
      estimate: {
        'id': '',
        'road_name': '',
        'length': '',
        'breadth': '',
        'area': '',
        'rate': '',
        'amount': '',
        'deposit': '',
        'total': '',
        'form_id': this.$route.params.id,
        'division_id': ''
      }
    };
  },
  computed: {
    AREA: function AREA() {
      this.estimate.area = Number((this.estimate.length * this.estimate.breadth).toFixed(2));
      this.estimate.amount = Number((this.estimate.area * this.estimate.rate).toFixed(2));
    },
    TOTAL: function TOTAL() {
      console.log("when is the total workignl??");
      this.estimate.amount = Number((this.estimate.area * this.estimate.rate).toFixed(2));
      this.estimate.deposit = Number((this.estimate.amount * 10 / 100).toFixed(2));
      this.estimate.total = Number((this.estimate.amount + this.estimate.deposit).toFixed(2)); // console.log( this.estimate.total);
    },
    waveoff: function waveoff() {
      console.log("waveoff is running boy");
      this.estimate.total = Number(this.estimate.amount.toFixed(2));
    }
  },
  methods: {
    estimateSubmit: function estimateSubmit() {
      var _this2 = this;

      axios.patch('/api/estimateEditApprove', this.estimate, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        console.log(response);
        console.log(_this2.modalEstimateEdit);
        console.log(_this2.estimate);

        _this2.$router.push('/UnapprovedEstimatedLIstEE/');
      })["catch"](function (errors) {
        _this2.errors = errors.response.data.errors;
      });
    },
    destroy: function destroy() {
      var _this3 = this;

      axios["delete"]('/api/contacts/' + this.$route.params.id).then(function (response) {
        _this3.$router.push('/contacts');
      })["catch"](function (error) {
        alert('Internal Error. Unable to delete contact.');
      });
    },
    approve: function approve() {
      var _this4 = this;

      axios.patch('/api/auth/estimateStatus/' + this.$route.params.id).then(function (response) {
        _this4.$router.push('/UnapprovedEstimatedListEE/'); // this.$router.push('/formList/' + this.$route.params.id);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/EstimateShowEE.vue?vue&type=template&id=0527cc25&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EE/EstimateShowEE.vue?vue&type=template&id=0527cc25&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    _vm.modalEstimateEdit
      ? _c("div", {
          staticClass:
            "absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15",
          on: {
            click: function($event) {
              _vm.modalEstimateEdit = !_vm.modalEstimateEdit
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.modalEstimateEdit
      ? _c(
          "form",
          {
            staticClass:
              "absolute left-0 right-0 z-50 w-11/12 ml-auto mr-auto bg-white rounded-lg top-2 md:w-4/5 lg:w-1/2",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.estimateSubmit.apply(null, arguments)
              }
            }
          },
          [
            _c(
              "div",
              { staticClass: "px-12 py-4" },
              [
                _c("p", { staticClass: "py-2 text-xl bold" }, [
                  _vm._v("Estimate Calculator ")
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
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.estimate, "road_name", $event.target.value)
                      }
                    }
                  })
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
                      placeholder: "Road type chhu lut rawh le",
                      autofocus: ""
                    },
                    domProps: { value: _vm.estimate.road_type },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.estimate, "road_type", $event.target.value)
                      }
                    }
                  })
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
                      placeholder: "number chhu lut rawh le",
                      autofocus: ""
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
                  })
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
                      placeholder: "number chhu lut rawh le",
                      autofocus: ""
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
                  })
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
                      placeholder: "number chhu lut rawh le",
                      autofocus: ""
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
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "grid grid-cols-2 gap-0 md:grid-cols-2 md:gap-2"
                  },
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
                            "\n                        " +
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
                            "\n                        Rs." +
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
                            "\n                        Rs." +
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
                            "\n                        Rs." +
                              _vm._s(_vm.estimate.total) +
                              "\n                    "
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.security_deposit.status == 1
                  ? [
                      _c(
                        "button",
                        {
                          staticClass:
                            "flex items-center px-5 py-1 mt-4 text-sm rounded-lg shadow border-buttonpink text-buttonpink hover:text-red-400 sm:mt-6 focus:outline-none",
                          attrs: { type: "submit" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.waveoff.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Wave Off Security Deposit\n                "
                          )
                        ]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "relative pt-1 pb-3" }, [
                  _c("div", { staticClass: "flex justify-between" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "flex items-center px-5 py-1 mt-4 text-sm text-white rounded-lg shadow bg-buttonpink hover:bg-red-500 sm:mt-6 focus:outline-none",
                        attrs: { type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                        Submit\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "items-center px-5 py-1 mt-4 ml-1 text-sm text-red-500 border border-red-500 rounded sm:mt-6 hover:border-red-300 focus:outline-none",
                        on: {
                          click: function($event) {
                            _vm.modalEstimateEdit = !_vm.modalEstimateEdit
                          }
                        }
                      },
                      [_vm._v("Cancel")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "mt-4 text-sm italic text-gray-500" },
                    [_vm._v("Note: Click Submit to Approve")]
                  )
                ])
              ],
              2
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.modalA
      ? _c(
          "div",
          {
            staticClass:
              "absolute left-0 right-0 z-40 w-11/12 h-64 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:3/5 lg:w-2/4 xl:w-1/4"
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
                      "flex justify-center my-6 text-xl font-bold text-textblueform "
                  },
                  [_vm._v("Approve Estimate")]
                ),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass:
                      "flex justify-center px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [
                    _vm._v(
                      "Do you want to approve this\n                Estimate"
                    )
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
                          "px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400",
                        on: { click: _vm.approve }
                      },
                      [_vm._v("Yes")]
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
    _c(
      "div",
      {
        staticClass: "flex flex-col md:mt-6 md:ml-6 sm:w-full md:w-4/5 lg:w-3/5"
      },
      [
        _vm.loading
          ? _c("div", [_vm._v("\n            Loading...\n        ")])
          : _c("div", [
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
                    "flex flex-row items-center justify-between h-auto py-4 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg"
                },
                [
                  _c("div", { staticClass: "flex flex-col ml-8" }, [
                    _c("p", { staticClass: "text-sm font-light" }, [
                      _vm._v("Memo No ")
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
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"
                            }
                          }),
                          _vm._v(" "),
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
                    "h-auto px-4 py-4 bg-white border-gray-200 rounded-t-lg rounded-b-lg"
                },
                [
                  _c(
                    "div",
                    { staticClass: "grid grid-cols-2 gap-2 ml-1 md:ml-4" },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("span"),
                      _vm._v(" "),
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
                        _vm._v("Engineer I/C")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(
                          ": " +
                            _vm._s(_vm.form.engineer_name) +
                            ", " +
                            _vm._s(_vm.form.engineer_post)
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v("Engg I/C Phone")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.form.engineer_phone))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1 mb-1" }, [
                        _vm._v("Form Submitted")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1 mb-1" }, [
                        _vm._v(": " + _vm._s(_vm.form.created_at))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "grid grid-cols-2 gap-2 ml-1 md:ml-4" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("span"),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [_vm._v("Road Name")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.estimate.road_name))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [_vm._v("Road Type")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.estimate.road_type))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v("Length of Road ")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.estimate.length) + " meter")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v("Breadth of Road")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.estimate.breadth) + " meter")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [_vm._v("Rate")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(
                          ": " + _vm._s(_vm.estimate.rate) + " per sq meter"
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [_vm._v("Amount")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": Rs. " + _vm._s(_vm.estimate.amount))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [_vm._v("Deposit")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": Rs. " + _vm._s(_vm.estimate.deposit))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [_vm._v("Total")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": Rs. " + _vm._s(_vm.estimate.total))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v("Estimate Submitted")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [
                        _vm._v(": " + _vm._s(_vm.estimate.created_at))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "py-1" }, [_vm._v("Status")]),
                      _vm._v(" "),
                      _vm.estimate.estimate_status == 0
                        ? [
                            _c("p", { staticClass: "py-1 text-red-500" }, [
                              _vm._v(": Pending for Approval")
                            ])
                          ]
                        : [
                            _c("p", { staticClass: "py-1 text-green-500" }, [
                              _vm._v(": Approved")
                            ])
                          ],
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "px-4 py-2 mt-1 text-sm font-bold text-center text-white bg-green-500 border rounded hover:bg-green-400",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              _vm.modalA = !_vm.modalA
                            }
                          }
                        },
                        [_vm._v("Approve")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "px-2 py-2 mt-1 text-sm font-bold text-center text-white bg-blue-700 border rounded hover:bg-blue-600",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              _vm.modalEstimateEdit = !_vm.modalEstimateEdit
                            }
                          }
                        },
                        [_vm._v("Edit")]
                      )
                    ],
                    2
                  )
                ]
              )
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
    return _c("p", { staticClass: "py-1 mt-1" }, [
      _c("b", [_vm._v("Applicant Details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-1 mt-1" }, [
      _c("b", [_vm._v("Estimate Details")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/EE/EstimateShowEE.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/EE/EstimateShowEE.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EstimateShowEE_vue_vue_type_template_id_0527cc25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstimateShowEE.vue?vue&type=template&id=0527cc25&scoped=true& */ "./resources/js/views/EE/EstimateShowEE.vue?vue&type=template&id=0527cc25&scoped=true&");
/* harmony import */ var _EstimateShowEE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstimateShowEE.vue?vue&type=script&lang=js& */ "./resources/js/views/EE/EstimateShowEE.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EstimateShowEE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EstimateShowEE_vue_vue_type_template_id_0527cc25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EstimateShowEE_vue_vue_type_template_id_0527cc25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0527cc25",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/EE/EstimateShowEE.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/EE/EstimateShowEE.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/EE/EstimateShowEE.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowEE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstimateShowEE.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/EstimateShowEE.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowEE_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/EE/EstimateShowEE.vue?vue&type=template&id=0527cc25&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/EE/EstimateShowEE.vue?vue&type=template&id=0527cc25&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowEE_vue_vue_type_template_id_0527cc25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstimateShowEE.vue?vue&type=template&id=0527cc25&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/EstimateShowEE.vue?vue&type=template&id=0527cc25&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowEE_vue_vue_type_template_id_0527cc25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowEE_vue_vue_type_template_id_0527cc25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);