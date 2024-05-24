(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LocalCouncilShow",
  data: function data() {
    return {
      localcouncil: {},
      modalEdit: false,
      modalDelete: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    var userDivisionId = this.$store.getters.currentUser.division_id;
    var api_url = "";

    switch (userDivisionId) {
      case 1:
      case 2:
        api_url = '/api/auth/localcouncilShow/';
        break;

      case 4:
        api_url = '/api/auth/champhai_local_councilsShow/';
        break;

      case 5:
        api_url = '/api/auth/lunglei_local_councilsShow/';
        break;

      case 6:
        api_url = '/api/auth/saitual_local_councilsShow/';
        break;

      case 7:
        api_url = '/api/auth/mamit_local_councilsShow/';
        break;

      case 8:
        api_url = '/api/auth/siaha_local_councilsShow/';
        break;

      case 9:
        api_url = '/api/auth/khawzawl_local_councilsShow/';
        break;

      case 10:
        api_url = '/api/auth/kolasib_local_councilsShow/';
        break;

      case 11:
        api_url = '/api/auth/lawngtlai_local_councilsShow/';
        break;

      case 12:
        api_url = '/api/auth/serchhip_local_councilsShow/';
        break;

      case 13:
        api_url = '/api/auth/hnahthial_local_councilsShow/';
        break;

      case 13:
        api_url = '/api/auth/lunglei_road_div2_hnahthialsShow/';
        break;

      case 14:
        api_url = '/api/auth/hmuifang_divisionsShow/';
        break;

      case 15:
        api_url = '/api/auth/national_highway_div1sShow/';
        break;

      case 16:
        api_url = '/api/auth/national_highway_div3sShow/';
        break;
    }

    console.log(api_url);
    axios.get(api_url + this.$route.params.id).then(function (response) {
      console.log(_this.$route.params.id);
      _this.localcouncil = response.data.localcouncil;
      console.log(_this.localcouncil, "list it");
    })["catch"](function (error) {});
  },
  methods: {
    editLC: function editLC() {
      var _this2 = this;

      var userDivisionId = this.$store.getters.currentUser.division_id;
      var api_url = "";

      switch (userDivisionId) {
        case 1:
        case 2:
          api_url = '/api/localcouncilUpdate';
          break;

        case 4:
          api_url = '/api/champhai_local_councilsUpdate';
          break;

        case 5:
          api_url = '/api/lunglei_local_councilsUpdate';
          break;

        case 6:
          api_url = '/api/saitual_local_councilsUpdate';
          break;

        case 7:
          api_url = '/api/mamit_local_councilsUpdate';
          break;

        case 8:
          api_url = '/api/siaha_local_councilsUpdate';
          break;

        case 9:
          api_url = '/api/khawzawl_local_councilsUpdate';
          break;

        case 10:
          api_url = '/api/kolasib_local_councilsUpdate';
          break;

        case 11:
          api_url = '/api/lawngtlai_local_councilsUpdate';
          break;

        case 12:
          api_url = '/api/serchhip_local_councilsUpdate';
          break;

        case 13:
          api_url = '/api/lunglei_road_div2_hnahthialsUpdate';
          break;

        case 14:
          api_url = '/api/hmuifang_divisionsUpdate';
          break;

        case 15:
          api_url = '/api/national_highway_div1sUpdate';
          break;

        case 16:
          api_url = '/api/national_highway_div3sUpdate';
          break;
      }

      axios.patch(api_url, this.localcouncil, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this2.localcouncil = response.data.localcouncil;
        _this2.modalEdit = false; // this.$router.push({path: '/localcouncilShow/'+this.localcouncil.id});
        // this.$router.push("/estimateSubmitSuccess");
      })["catch"](function (errors) {
        _this2.errors = errors.response.data.errors;
      });
    },
    deleteLC: function deleteLC() {
      var _this3 = this;

      var userDivisionId = this.$store.getters.currentUser.division_id;
      var api_url = "";

      switch (userDivisionId) {
        case 1:
        case 2:
          api_url = '/api/localcouncilDelete/';
          break;

        case 4:
          api_url = '/api/champhai_local_councilsDelete/';
          break;

        case 5:
          api_url = '/api/lunglei_local_councilsDelete/';
          break;

        case 6:
          api_url = '/api/saitual_local_councilsDelete/';
          break;

        case 7:
          api_url = '/api/mamit_local_councilsDelete/';
          break;

        case 8:
          api_url = '/api/siaha_local_councilsDelete/';
          break;

        case 9:
          api_url = '/api/khawzawl_local_councilsDelete/';
          break;

        case 10:
          api_url = '/api/kolasib_local_councilsDelete/';
          break;

        case 11:
          api_url = '/api/lawngtlai_local_councilsDelete/';
          break;

        case 12:
          api_url = '/api/serchhip_local_councilsDelete/';
          break;

        case 13:
          api_url = '/api/hnahthial_local_councilsDelete/';
          break;
      }

      axios.get(api_url + this.localcouncil.id, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this3.modalEdit = false; // this.$router.push({path: '/localcouncilShow/'+this.localcouncil.id});

        _this3.$router.push("/localcouncilList");
      })["catch"](function (errors) {
        _this3.errors = errors.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=template&id=b2aba2c6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=template&id=b2aba2c6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative h-screen" }, [
    _vm.modalEdit
      ? _c("div", {
          staticClass:
            "absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15",
          on: {
            click: function($event) {
              _vm.modalEdit = !_vm.modalEdit
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.modalDelete
      ? _c("div", {
          staticClass:
            "absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15",
          on: {
            click: function($event) {
              _vm.modalA = !_vm.modalEdit
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.modalEdit
      ? _c(
          "div",
          {
            staticClass:
              "absolute left-0 right-0 z-40 h-auto ml-auto mr-auto bg-white rounded-lg shadow top-2 sm:w-2/3 lg:w-2/4 xl:w-1/4"
          },
          [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.editLC.apply(null, arguments)
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
                          _vm.modalEdit = !_vm.modalEdit
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
                  [_vm._v("Local Council Edit ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "relative pb-2 mx-10 mt-10 mb-3 border rounded-lg"
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "absolute px-4 py-2 font-bold text-blue-500 text-md"
                      },
                      [_vm._v("Local Council")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.localcouncil.name,
                          expression: "localcouncil.name"
                        }
                      ],
                      staticClass:
                        "w-full px-4 pt-6 mt-2 text-gray-500 rounded-lg text-md focus:text-gray-900 focus:outline-none ",
                      attrs: { type: "text" },
                      domProps: { value: _vm.localcouncil.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.localcouncil,
                            "name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "py-4 mx-10 mt-5 mb-3 border rounded-lg " },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "px-4 py-2 font-bold text-blue-500 text-md"
                      },
                      [_vm._v("Division")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "w-full px-4 pt-1 mt-2 text-gray-500 rounded-lg text-md focus:text-grey-900 focus:outline-none "
                      },
                      [
                        _vm.localcouncil.division_id === 1
                          ? [_vm._v(" Road South Division")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 2
                          ? [_vm._v(" Road North Division")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id == 4
                          ? [_vm._v(" Champhai Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 5
                          ? [_vm._v(" Lunglei Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 6
                          ? [_vm._v(" Saitual Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 7
                          ? [_vm._v(" Mamit Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 8
                          ? [_vm._v(" Siaha Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 9
                          ? [_vm._v(" Khawzawl Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 10
                          ? [_vm._v(" Kolasib Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 11
                          ? [_vm._v(" Lawngtlai Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 12
                          ? [_vm._v(" Serchhip Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 13
                          ? [_vm._v("Lunglei Road Div-II, Hnahthial Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 14
                          ? [_vm._v("Hmuifang Division Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 15
                          ? [_vm._v("National Highway Div-I Road")]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.localcouncil.division_id === 16
                          ? [_vm._v("National Highway Div-III Road")]
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "relative pb-2 mx-10 mt-10 mb-3 border rounded-lg"
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass:
                          "absolute px-4 py-2 text-sm font-light text-textblueform",
                        attrs: { for: "localcouncil.sub_div" }
                      },
                      [_vm._v("Sub Division ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.localcouncil.sub_div,
                            expression: "localcouncil.sub_div"
                          }
                        ],
                        staticClass:
                          "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg appearance-none text-textgrayform focus:outline-none",
                        attrs: { errors: _vm.errors },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.localcouncil,
                              "sub_div",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c(
                          "option",
                          {
                            staticClass: "inline-block text-textgrayform ",
                            attrs: { value: "", disabled: "", selected: "" }
                          },
                          [_vm._v("Select Sub Division")]
                        ),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Sub Division - I")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("Sub Division - II")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("Sub Division - III")
                        ])
                      ]
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
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Update")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.modalEdit = !_vm.modalEdit
                          }
                        }
                      },
                      [_vm._v("Cancel")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br")
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.modalDelete
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
                  staticClass: "px-2 py-2 mt-3 mr-6 rounded hover:bg-gray-200",
                  on: {
                    click: function($event) {
                      _vm.modalDelete = !_vm.modalDelete
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
              [_vm._v("Are you sure you want to Delete this Local Council?")]
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
                      "px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-blue-300",
                    on: {
                      click: function($event) {
                        _vm.modalDelete = !_vm.modalDelete
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
                      "px-4 py-2 ml-1 text-sm font-bold text-white bg-green-500 rounded hover:bg-red-400",
                    on: { click: _vm.deleteLC }
                  },
                  [_vm._v("Delete")]
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
      [_vm._v("\n                     << Back\n                     ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "w-full h-auto mt-3 bg-white rounded-lg shadow-lg md:w-3/4 lg:w-2/3 xl:1/3"
      },
      [
        _c("div", { staticClass: "py-4" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "flex justify-center " }, [
            _c("div", { staticClass: "mx-4 my-4" }, [
              _c("p", { staticClass: "font-light text-md" }, [
                _vm._v("Local Council ")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "font-light text-md" }, [
                _vm._v("Division ")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "font-light text-md" }, [
                _vm._v("Sub Division ")
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "px-4 py-1 mr-1 text-blue-300 border rounded-lg hover:bg-gray-300 focus:outline-none",
                  on: {
                    click: function($event) {
                      _vm.modalEdit = !_vm.modalEdit
                    }
                  }
                },
                [_vm._v("\n                    Edit\n                    ")]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mx-4 my-4" },
              [
                _c("p", { staticClass: "font-light text-md" }, [
                  _vm._v(": " + _vm._s(_vm.localcouncil.name))
                ]),
                _vm._v(" "),
                _vm.localcouncil.division_id === 1
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(": Aizawl Road South Division")
                      ])
                    ]
                  : _vm.localcouncil.division_id === 2
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(": Aizawl Road North Division")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id == 4
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Champhai Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 5
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Lunglei Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 6
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Saitual Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 7
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Mamit Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 8
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Siaha Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 9
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Khawzawl Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 10
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Kolasib Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 11
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Lawngtlai Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 12
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Serchhip Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 13
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Lunglei Road Div-II, Hnahthial Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 14
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":Hmuifang Division Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 15
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":National Highway Div-I Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.localcouncil.division_id === 16
                  ? [
                      _c("p", { staticClass: "font-light text-md" }, [
                        _vm._v(":National Highway Div-III Road")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c("p", { staticClass: "font-light text-md" }, [
                  _vm._v(": " + _vm._s(_vm.localcouncil.sub_div))
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "px-2 py-1 mr-3 text-red-400 border rounded-lg hover:bg-gray-300 focus:outline-none",
                    on: {
                      click: function($event) {
                        _vm.modalDelete = !_vm.modalDelete
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Delete\n                    "
                    )
                  ]
                )
              ],
              2
            )
          ])
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
    return _c("div", { staticClass: "flex justify-center" }, [
      _c("p", { staticClass: "text-lg font-medium" }, [
        _vm._v("Local Council Details")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/localcouncil/LocalCouncilShow.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/localcouncil/LocalCouncilShow.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocalCouncilShow_vue_vue_type_template_id_b2aba2c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalCouncilShow.vue?vue&type=template&id=b2aba2c6&scoped=true& */ "./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=template&id=b2aba2c6&scoped=true&");
/* harmony import */ var _LocalCouncilShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalCouncilShow.vue?vue&type=script&lang=js& */ "./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LocalCouncilShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LocalCouncilShow_vue_vue_type_template_id_b2aba2c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LocalCouncilShow_vue_vue_type_template_id_b2aba2c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b2aba2c6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/localcouncil/LocalCouncilShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalCouncilShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocalCouncilShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalCouncilShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=template&id=b2aba2c6&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=template&id=b2aba2c6&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalCouncilShow_vue_vue_type_template_id_b2aba2c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocalCouncilShow.vue?vue&type=template&id=b2aba2c6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/LocalCouncilShow.vue?vue&type=template&id=b2aba2c6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalCouncilShow_vue_vue_type_template_id_b2aba2c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalCouncilShow_vue_vue_type_template_id_b2aba2c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);