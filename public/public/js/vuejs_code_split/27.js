(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PulseLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/PulseLoader */ "./resources/js/components/PulseLoader.vue");
/* harmony import */ var _components_UserCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UserCircle */ "./resources/js/components/UserCircle.vue");
/* harmony import */ var _Pagination_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pagination.vue */ "./resources/js/views/Pagination.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UnapprovedEstimatedList",
  components: {
    pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    PulseLoader: _components_PulseLoader__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserCircle: _components_UserCircle__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      offset: 3,
      aStatus: true,
      loading: true,
      estimates: null,
      user: this.$store.getters.currentUser,
      pagination: {} // formSouthCount: '',
      // formNorthCount: '',
      // formChamphaiCount: '',
      // formLungleiCount: '',
      // formSaitualCount: '',
      // formMamitCount: '',
      // formSiahaCount: '',
      // formKhawzawlCount: '',
      // formKolasibCount: '',
      // formLawngtlaiCount: '',
      // formSerchhipCount: '',
      // formHnahthialCount: ''

    };
  },
  created: function created() {
    this.fetchUsers();
  },
  methods: {
    // Our method to GET results from a Laravel endpoint
    fetchUsers: function fetchUsers() {
      var _this = this;

      var current_page = this.pagination.current_page;
      var pageNum = current_page ? current_page : 1;
      var division_id = this.user.division_id;
      axios.get('/api/estimateunapprovedlist/' + division_id + '?page=' + pageNum, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this.laravelData = response.data.estimates;
        _this.estimates = response.data.estimates;
        _this.loading = false;
      });
    }
  },
  computed: {
    approveStatus: function approveStatus(st) {
      return {
        active: this.aStatus,
        'bg-red-200': true
      };
    } // if (this.user.division_id === 1) {
    //                 this.laravelData = response.data.southEstimates;
    //                 this.estimates = response.data.southEstimates;
    //             }
    //             else if (this.user.division_id === 2) {
    //                 this.laravelData = response.data.northEstimates;
    //                 this.estimates = response.data.northEstimates;
    //             }
    //             // Champhai
    //             else if (this.user.division_id === 4) {
    //                 this.laravelData = response.data.champhaiEstimates;
    //                 this.estimates = response.data.champhaiEstimates;
    //             }
    //             else if (this.user.division_id === 5) {
    //                 this.laravelData = response.data.lungleiEstimates;
    //                 this.estimates = response.data.lungleiEstimates;
    //             }
    //             else if (this.user.division_id === 6) {
    //                 this.laravelData = response.data.saitualEstimates;
    //                 this.estimates = response.data.saitualEstimates;
    //             }
    //             else if (this.user.division_id === 7) {
    //                 this.laravelData = response.data.mamitEstimates;
    //                 this.estimates = response.data.mamitEstimates;
    //             }
    //             else if (this.user.division_id === 8) {
    //                 this.laravelData = response.data.siahaEstimates;
    //                 this.estimates = response.data.siahaEstimates;
    //             }
    //             else if (this.user.division_id === 9) {
    //                 this.laravelData = response.data.khawzawlEstimates;
    //                 this.estimates = response.data.khawzawlEstimates;
    //             }
    //             else if (this.user.division_id === 10) {
    //                 this.laravelData = response.data.kolasibEstimates;
    //                 this.estimates = response.data.kolasibEstimates;
    //             }
    //             else if (this.user.division_id === 11) {
    //                 this.laravelData = response.data.lawngtlaiEstimates;
    //                 this.estimates = response.data.lawngtlaiEstimates;
    //             }
    //             else if (this.user.division_id === 12) {
    //                 this.laravelData = response.data.serchhipEstimates;
    //                 this.estimates = response.data.serchhipEstimates;
    //             }
    //             else if (this.user.division_id === 13) {
    //                 this.laravelData = response.data.hnahthialEstimates;
    //                 this.estimates = response.data.hnahthialEstimates;
    //             }
    //             // this.formSouthCount = response.data.formSouthCount;
    //             // this.formNorthCount = response.data.formNorthCount;
    //             // this.formChamphaiCount = response.data.formChamphaiCount;
    //             // this.formLungleiCount = response.data.formLungleiCount;
    //             // this.formSaitualCount = response.data.formSaitualCount;
    //             // this.formMamitCount = response.data.formMamitCount;
    //             // this.formSiahaCount = response.data.formSiahaCount;
    //             // this.formKhawzawlCount = response.data.formKhawzawlCount;
    //             // this.formKolasibCount = response.data.formKolasibCount;
    //             // this.formLawngtlaiCount = response.data.formLawngtlaiCount;
    //             // this.formSerchhipCount = response.data.formSerchhipCount;
    //             // this.formHnahthialCount = response.data.formHnahthialCount;

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=template&id=8ab8526c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=template&id=8ab8526c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              {
                staticClass:
                  "w-full px-2 py-3 mx-1 mt-3 text-white rounded-t-lg md:mx-3 bg-tableheader"
              },
              [
                _c(
                  "p",
                  [
                    _vm._v("Total:\n                "),
                    [_vm._v(" " + _vm._s(_vm.estimates.total) + "  ")]
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.estimates.data, function(estimate) {
              return _c(
                "div",
                { key: estimate.id },
                [
                  estimate.division_id === _vm.user.division_id
                    ? [
                        estimate.estimate_status === 0
                          ? [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/EstimateShowSDO/" + estimate.id
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "w-full px-2 py-2 mx-1 bg-white md:mx-3 hover:bg-tablehover"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1 lg:grid-cols-5 lg:gap-1 xl:grid-cols-7 xl:gap-1"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "text-left" },
                                            [
                                              _vm._v(
                                                "Memo: " +
                                                  _vm._s(estimate.form_memo)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-left" },
                                            [
                                              _vm._v(
                                                "Length: " +
                                                  _vm._s(estimate.length) +
                                                  " metre"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-left" },
                                            [
                                              _vm._v(
                                                "Breadth: " +
                                                  _vm._s(estimate.breadth) +
                                                  " metre"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-left" },
                                            [
                                              _vm._v(
                                                "Area: " +
                                                  _vm._s(estimate.area) +
                                                  " sq. metres"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-left" },
                                            [
                                              _vm._v(
                                                "Rate: Rs. " +
                                                  _vm._s(estimate.area) +
                                                  " per sq. metres"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-left" },
                                            [
                                              _vm._v(
                                                "Total: Rs. " +
                                                  _vm._s(estimate.total)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-left" },
                                            [
                                              _vm._v(
                                                "Road Name: " +
                                                  _vm._s(estimate.road_name)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-left" },
                                            [
                                              _vm._v(
                                                "Road Type: " +
                                                  _vm._s(estimate.road_type)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            [
                                              estimate.division_id === 1
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road South\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 2
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road North\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 4
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road Champhai\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 5
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road Lunglei\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 6
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road Saitual\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 7
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road Mamit\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 8
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road Siaha\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 9
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road Khawzawl\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 10
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road Kolasib\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 11
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road Lawngtlai\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 12
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road Serchhip\n                                    "
                                                    )
                                                  ]
                                                : estimate.division_id === 13
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Div: Road Hnahthial\n                                    "
                                                    )
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            [
                                              estimate.estimate_status === 0
                                                ? [
                                                    _vm._v(
                                                      "\n                                        Status: "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-yelow-600"
                                                      },
                                                      [_vm._v("Pending")]
                                                    )
                                                  ]
                                                : [
                                                    _vm._v(
                                                      "\n                                        Status: "
                                                    ),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-green-500"
                                                      },
                                                      [_vm._v("Verified")]
                                                    )
                                                  ]
                                            ],
                                            2
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("hr")
                                    ]
                                  )
                                ]
                              )
                            ]
                          : _vm._e()
                      ]
                    : _vm._e()
                ],
                2
              )
            }),
            _vm._v(" "),
            _vm.estimates.total === 0
              ? _c("div", [
                  _c("p", { staticClass: "px-5 py-2" }, [
                    _vm._v("NO unapproved Estimate yet")
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mx-3 my-3" },
              [
                _c("pagination", {
                  attrs: { pagination: _vm.pagination, offset: 4 },
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

/***/ "./resources/js/views/SDO/UnapprovedEstimatedList.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/SDO/UnapprovedEstimatedList.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnapprovedEstimatedList_vue_vue_type_template_id_8ab8526c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnapprovedEstimatedList.vue?vue&type=template&id=8ab8526c&scoped=true& */ "./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=template&id=8ab8526c&scoped=true&");
/* harmony import */ var _UnapprovedEstimatedList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnapprovedEstimatedList.vue?vue&type=script&lang=js& */ "./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UnapprovedEstimatedList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnapprovedEstimatedList_vue_vue_type_template_id_8ab8526c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnapprovedEstimatedList_vue_vue_type_template_id_8ab8526c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8ab8526c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SDO/UnapprovedEstimatedList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnapprovedEstimatedList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnapprovedEstimatedList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnapprovedEstimatedList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=template&id=8ab8526c&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=template&id=8ab8526c&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnapprovedEstimatedList_vue_vue_type_template_id_8ab8526c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnapprovedEstimatedList.vue?vue&type=template&id=8ab8526c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/UnapprovedEstimatedList.vue?vue&type=template&id=8ab8526c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnapprovedEstimatedList_vue_vue_type_template_id_8ab8526c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnapprovedEstimatedList_vue_vue_type_template_id_8ab8526c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);