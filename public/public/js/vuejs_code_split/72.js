(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/engineer/EngineerList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/engineer/EngineerList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PulseLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/PulseLoader */ "./resources/js/components/PulseLoader.vue");
/* harmony import */ var _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pagination.vue */ "./resources/js/views/Pagination.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EngineerList",
  components: {
    PulseLoader: _components_PulseLoader__WEBPACK_IMPORTED_MODULE_0__["default"],
    pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      engineers: '',
      offset: 3,
      pagination: {},
      loading: true,
      user: this.$store.getters.currentUser,
      userDivisionID: this.$store.getters.currentUser.division_id
    };
  },
  created: function created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers: function fetchUsers() {
      var _this = this;

      var current_page = this.pagination.current_page;
      var pageNum = current_page ? current_page : 1;
      var division_id = this.userDivisionID;
      axios.get('/api/engineerList/' + division_id + '?page=' + pageNum, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        console.log(response.data);
        _this.pagination = response.data.engineers;
        _this.engineers = response.data.engineers;
        _this.loading = false;
      })["catch"](function (error) {
        _this.loading = true;
      });
    } // original code start
    //         fetchUsers: function () {
    //             let current_page = this.pagination.current_page;
    //             let pageNum = current_page ? current_page : 1;
    //             axios.get('/api/engineerList?page=' + pageNum, {
    //                 headers: {
    //                     "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
    //                 }
    //             })
    //                 .then(response => {
    // console.log(response.data);
    //                     this.pagination = response.data.engineers;
    //                     this.engineers = response.data.engineers;
    //                     this.loading = false;
    //                 })
    //                 .catch(error => {
    //                     this.loading = true;
    //                 });
    //         }
    // original code end

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/engineer/EngineerList.vue?vue&type=template&id=524e7d7e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/engineer/EngineerList.vue?vue&type=template&id=524e7d7e&scoped=true& ***!
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
  return _c("div", { staticClass: "min-h-screen" }, [
    _vm.loading
      ? _c(
          "div",
          [_c("PulseLoader", { staticClass: "object-center h-full " })],
          1
        )
      : _c(
          "div",
          [
            _vm.engineers.data.length === 0
              ? _c("div", [
                  _c(
                    "p",
                    [
                      _vm._v("No list of Engineers yet"),
                      _c("router-link", { attrs: { to: "/engineerAdd" } }, [
                        _vm._v("Add New Engineer  ")
                      ])
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-full px-2 py-2 mx-3 mt-3 text-white rounded-t-lg bg-tableheader "
              },
              [
                _c(
                  "p",
                  [
                    _vm._v("Total:\n                "),
                    [_vm._v(" " + _vm._s(_vm.engineers.total) + " ")]
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.engineers.data, function(engineer) {
              return _c(
                "div",
                { key: engineer.id },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "grid w-full grid-cols-3 px-2 mx-3 bg-white border-b md:grid-cols-5 md:gap-4 hover:bg-tablehover",
                      attrs: { to: "/engineerShow/" + engineer.id }
                    },
                    [
                      _c("div", [
                        _c("span", { staticClass: "font-medium" }, [
                          _vm._v("Name:")
                        ]),
                        _vm._v(" " + _vm._s(engineer.name))
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("span", { staticClass: "font-medium" }, [
                          _vm._v("Post:")
                        ]),
                        _vm._v(" " + _vm._s(engineer.post))
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("span", { staticClass: "font-medium" }, [
                          _vm._v("Phone:")
                        ]),
                        _vm._v(" " + _vm._s(engineer.phone))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          engineer.division_id == 1
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v(
                                  " Road\n                            South Division"
                                )
                              ]
                            : engineer.division_id == 2
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v(
                                  "\n                            Aizawl Road North"
                                )
                              ]
                            : engineer.division_id == 4
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v(
                                  "\n                            Champhai Road"
                                )
                              ]
                            : engineer.division_id == 5
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v(
                                  "\n                            Lunglei Road"
                                )
                              ]
                            : engineer.division_id == 6
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v(
                                  "\n                            Saitual Road"
                                )
                              ]
                            : engineer.division_id == 7
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v(
                                  "\n                            Mamit Road"
                                )
                              ]
                            : engineer.division_id == 8
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v(
                                  "\n                            Siaha Road"
                                )
                              ]
                            : engineer.division_id == 9
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v(
                                  "\n                            Khawzawl Road"
                                )
                              ]
                            : engineer.division_id == 10
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v(
                                  "\n                            Kolasib Road"
                                )
                              ]
                            : engineer.division_id == 11
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v("Lawngtlai Road")
                              ]
                            : engineer.division_id == 12
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v(
                                  "\n                            Serchhip Road"
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          engineer.division_id == 13
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v("Lunglei Road Div-II, Hnahthial Road")
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          engineer.division_id == 14
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v("Hmuifang Division Road")
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          engineer.division_id == 15
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v("National Highway Div-I Road")
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          engineer.division_id == 16
                            ? [
                                _c("span", { staticClass: "font-medium" }, [
                                  _vm._v("Division:")
                                ]),
                                _vm._v("National Highway Div-III Road")
                              ]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", [
                        _c("span", { staticClass: "font-medium" }, [
                          _vm._v("Sub-Division:")
                        ]),
                        _vm._v(" " + _vm._s(engineer.sub_div))
                      ])
                    ]
                  )
                ],
                1
              )
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mx-3 my-3" },
              [
                _c("pagination", {
                  attrs: { pagination: _vm.pagination, offset: 3 },
                  on: { paginate: _vm.fetchUsers }
                })
              ],
              1
            )
          ],
          2
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/engineer/EngineerList.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/engineer/EngineerList.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EngineerList_vue_vue_type_template_id_524e7d7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EngineerList.vue?vue&type=template&id=524e7d7e&scoped=true& */ "./resources/js/views/engineer/EngineerList.vue?vue&type=template&id=524e7d7e&scoped=true&");
/* harmony import */ var _EngineerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EngineerList.vue?vue&type=script&lang=js& */ "./resources/js/views/engineer/EngineerList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EngineerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EngineerList_vue_vue_type_template_id_524e7d7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EngineerList_vue_vue_type_template_id_524e7d7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "524e7d7e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/engineer/EngineerList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/engineer/EngineerList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/engineer/EngineerList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EngineerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EngineerList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/engineer/EngineerList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EngineerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/engineer/EngineerList.vue?vue&type=template&id=524e7d7e&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/engineer/EngineerList.vue?vue&type=template&id=524e7d7e&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EngineerList_vue_vue_type_template_id_524e7d7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EngineerList.vue?vue&type=template&id=524e7d7e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/engineer/EngineerList.vue?vue&type=template&id=524e7d7e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EngineerList_vue_vue_type_template_id_524e7d7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EngineerList_vue_vue_type_template_id_524e7d7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);