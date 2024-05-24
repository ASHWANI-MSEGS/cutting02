(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LocalcouncilAdd",
  data: function data() {
    return {
      localcouncil: {
        name: "",
        division_id: "",
        sub_div: "",
        added_by: ""
      }
    };
  },
  mounted: function mounted() {
    this.localcouncil.division_id = this.$store.getters.currentUser.division_id;
  },
  methods: {
    registerUser: function registerUser() {
      var _this = this;

      var api_url = "";

      switch (this.localcouncil.division_id) {
        case 1:
        case 2:
          api_url = '/api/localcouncil';
          break;

        case 4:
          api_url = '/api/champhai_local_councils';
          break;

        case 5:
          api_url = '/api/lunglei_local_councils';
          break;

        case 6:
          api_url = '/api/saitual_local_councils';
          break;

        case 7:
          api_url = '/api/mamit_local_councils';
          break;

        case 8:
          api_url = '/api/siaha_local_councils';
          break;

        case 9:
          api_url = '/api/khawzawl_local_councils';
          break;

        case 10:
          api_url = '/api/kolasib_local_councils';
          break;

        case 11:
          api_url = '/api/lawngtlai_local_councils';
          break;

        case 12:
          api_url = '/api/serchhip_local_councils';
          break;

        case 13:
          api_url = '/api/lunglei_road_div2_hnahthial';
          break;

        case 14:
          api_url = '/api/hmuifang_division';
          break;

        case 15:
          api_url = '/api/national_highway_div1';
          break;

        case 16:
          api_url = '/api/national_highway_div3';
          break;
      }

      this.localcouncil.added_by = this.$store.getters.currentUser.id;
      axios.post(api_url, this.localcouncil, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        // console.log(this.localcouncil.added_by, "addede by");
        _this.$router.push({
          path: '/localcouncilList'
        });
      })["catch"](function (error) {
        console.log(error.response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=template&id=9e070b9e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=template&id=9e070b9e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex flex-col h-screen mt-10" }, [
    _c(
      "div",
      {
        staticClass:
          "w-full h-auto bg-white border-gray-200 rounded-t-lg rounded-b-lg md:w-2/3 lg:w-1/2 xl:w-1/3"
      },
      [
        _c("div", { staticClass: "px-5 py-5 col-md-8 col-md-offset-2" }, [
          _c("div", [
            _c(
              "div",
              { staticClass: "pt-2 pr-4 text-lg font-bold text-gray-600" },
              [_vm._v("Add New Local Council")]
            ),
            _vm._v(" "),
            _c("div", [
              _c("br"),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.registerUser.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "relative py-3 " }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "absolute px-2 py-2 text-xs uppercase text-textblue"
                      },
                      [_vm._v("Name:")]
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
                        "w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",
                      attrs: {
                        type: "text",
                        placeholder: "Veng hming chhu lut rawh le"
                      },
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
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "pt-2 pr-4 text-lg font-bold text-gray-600"
                        },
                        [_vm._v("Division:")]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
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
                        ? [
                            _vm._v(
                              "Lunglei Road Div-II, Hnahthial\n                                Road"
                            )
                          ]
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
                        ? [
                            _vm._v(
                              "National Highway Div-III\n                                Road"
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c("br")
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "pt-2 pr-4 text-lg font-bold text-gray-600"
                    },
                    [_vm._v("Sub-Division:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "relative pb-2 mb-3 border rounded-lg" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "absolute px-4 py-2 text-sm font-light text-textblueform",
                          attrs: { for: "localcouncil.sub_div" }
                        },
                        [_vm._v("Sub Division\n                            ")]
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
                            [
                              _vm._v(
                                "Select\n                                    Sub Division"
                              )
                            ]
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
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(0)
                ]
              )
            ])
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
    return _c("div", [
      _c("div", [
        _c(
          "button",
          {
            staticClass:
              "px-3 py-1 text-white bg-green-400 border rounded-lg hover:bg-green-300",
            attrs: { type: "submit" }
          },
          [
            _vm._v(
              "\n                                    Submit\n                                "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/localcouncil/LocalCouncilAdd.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/localcouncil/LocalCouncilAdd.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocalCouncilAdd_vue_vue_type_template_id_9e070b9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalCouncilAdd.vue?vue&type=template&id=9e070b9e& */ "./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=template&id=9e070b9e&");
/* harmony import */ var _LocalCouncilAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalCouncilAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LocalCouncilAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LocalCouncilAdd_vue_vue_type_template_id_9e070b9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LocalCouncilAdd_vue_vue_type_template_id_9e070b9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/localcouncil/LocalCouncilAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalCouncilAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocalCouncilAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalCouncilAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=template&id=9e070b9e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=template&id=9e070b9e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalCouncilAdd_vue_vue_type_template_id_9e070b9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocalCouncilAdd.vue?vue&type=template&id=9e070b9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/LocalCouncilAdd.vue?vue&type=template&id=9e070b9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalCouncilAdd_vue_vue_type_template_id_9e070b9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocalCouncilAdd_vue_vue_type_template_id_9e070b9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);