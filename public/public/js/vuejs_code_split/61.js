(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/ReportCompleteList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EE/ReportCompleteList.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
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
  name: "ReportDateList",
  components: {
    PulseLoader: _components_PulseLoader__WEBPACK_IMPORTED_MODULE_0__["default"],
    pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      offset: 3,
      pagination: {},
      loading: true,
      reports: null,
      user: this.$store.getters.currentUser,
      reportSouthCount: '',
      reportNorthCount: ''
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
      var division_id = this.user.division_id;
      console.log(division_id);
      axios.get('/api/reportCompleteList/' + division_id + '?page=' + pageNum, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        console.log(response);
        _this.pagination = response.data.reports;
        _this.reports = response.data.reports;
        _this.reportSouthCount = response.data.reportSouthCount;
        _this.reportNorthCount = response.data.reportNorthCount;
        _this.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/ReportCompleteList.vue?vue&type=template&id=edc7936a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EE/ReportCompleteList.vue?vue&type=template&id=edc7936a&scoped=true& ***!
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
          [_c("PulseLoader", { staticClass: "object-center h-screen " })],
          1
        )
      : _c(
          "div",
          [
            _vm.reports.total == 0
              ? _c("div", [_c("p", [_vm._v("No Report Complete List")])])
              : _vm._e(),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.reports.data, function(report) {
              return _c(
                "div",
                { key: report.id },
                [
                  report.division_id == _vm.user.division_id
                    ? [
                        _c(
                          "router-link",
                          { attrs: { to: "/reportCompleteShow/" + report.id } },
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
                                      "grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1"
                                  },
                                  [
                                    _c("div", { staticClass: "ml-1" }, [
                                      _vm._v(
                                        "Memo: " + _vm._s(report.form_memo)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "ml-1" }, [
                                      _vm._v(
                                        "Report Complete Date: " +
                                          _vm._s(report.cdate)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "ml-1" },
                                      [
                                        report.division_id == 1
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road South\n                                "
                                              )
                                            ]
                                          : report.division_id == 2
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road North\n                                "
                                              )
                                            ]
                                          : report.division_id == 4
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Champhai\n                                "
                                              )
                                            ]
                                          : report.division_id == 5
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Lunglei\n                                "
                                              )
                                            ]
                                          : report.division_id == 6
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Saitual\n                                "
                                              )
                                            ]
                                          : report.division_id == 7
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Mamit\n                                "
                                              )
                                            ]
                                          : report.division_id == 8
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Siaha\n                                "
                                              )
                                            ]
                                          : report.division_id == 9
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Khawzawl\n                                "
                                              )
                                            ]
                                          : report.division_id == 10
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Kolasib\n                                "
                                              )
                                            ]
                                          : report.division_id == 11
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Lawngtlai\n                                "
                                              )
                                            ]
                                          : report.division_id == 12
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Serchhip\n                                "
                                              )
                                            ]
                                          : report.division_id == 13
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Hnahthial\n                                "
                                              )
                                            ]
                                          : _vm._e()
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
                ],
                2
              )
            }),
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "w-full px-2 mx-1 mt-3 text-white rounded-t-lg sm:py-3 md:py-3 md:mx-3 bg-tableheader"
      },
      [_c("p", [_vm._v("Totalign:\n                    ")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/EE/ReportCompleteList.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/EE/ReportCompleteList.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportCompleteList_vue_vue_type_template_id_edc7936a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportCompleteList.vue?vue&type=template&id=edc7936a&scoped=true& */ "./resources/js/views/EE/ReportCompleteList.vue?vue&type=template&id=edc7936a&scoped=true&");
/* harmony import */ var _ReportCompleteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportCompleteList.vue?vue&type=script&lang=js& */ "./resources/js/views/EE/ReportCompleteList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportCompleteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportCompleteList_vue_vue_type_template_id_edc7936a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportCompleteList_vue_vue_type_template_id_edc7936a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "edc7936a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/EE/ReportCompleteList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/EE/ReportCompleteList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/EE/ReportCompleteList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCompleteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportCompleteList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/ReportCompleteList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCompleteList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/EE/ReportCompleteList.vue?vue&type=template&id=edc7936a&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/EE/ReportCompleteList.vue?vue&type=template&id=edc7936a&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCompleteList_vue_vue_type_template_id_edc7936a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportCompleteList.vue?vue&type=template&id=edc7936a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/ReportCompleteList.vue?vue&type=template&id=edc7936a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCompleteList_vue_vue_type_template_id_edc7936a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportCompleteList_vue_vue_type_template_id_edc7936a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);