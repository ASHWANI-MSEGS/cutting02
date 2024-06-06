(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/RefundFineList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EE/RefundFineList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
      refunds: null,
      reports: null,
      user: this.$store.getters.currentUser,
      fineSouthCount: '',
      fineNorththCount: ''
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
      axios.get('/api/fineList/' + division_id + '?page=' + pageNum, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this.pagination = response.data.refunds;
        _this.refunds = response.data.refunds;
        _this.reports = response.data.reports;
        console.log(response, "refund fince list");
        _this.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    } // if(this.user.division_id === 1)
    // {
    //     this.pagination = response.data.southRefunds;
    //     this.refunds = response.data.southRefunds;
    // }
    // if(this.user.division_id === 2)
    // {
    //     this.pagination = response.data.northRefunds;
    //     this.refunds = response.data.northRefunds;
    // }
    // this.fineSouthCount = response.data.fineSouthCount;
    // this.fineNorthCount = response.data.fineNorththCount;

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/RefundFineList.vue?vue&type=template&id=56496c10&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EE/RefundFineList.vue?vue&type=template&id=56496c10&scoped=true& ***!
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
            _vm.refunds.total === 0
              ? _c("div", [_c("p", [_vm._v("No Fine List")])])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-full px-2 mx-1 mt-3 text-white rounded-t-lg sm:py-3 md:py-3 md:mx-3 bg-tableheader"
              },
              [
                _c("p", [
                  _vm._v(
                    "Total: " +
                      _vm._s(_vm.refunds.total) +
                      "\n                    "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.refunds.data, function(refund, index) {
              return _c(
                "div",
                { key: refund.id },
                [
                  refund.division_id == _vm.user.division_id
                    ? [
                        _c(
                          "router-link",
                          { attrs: { to: "/refundFineShow/" + refund.id } },
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
                                      "grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1 lg:grid-cols-4 lg:gap-1 xl:grid-cols-4 xl:gap-1"
                                  },
                                  [
                                    _c("div", { staticClass: "ml-1" }, [
                                      _vm._v(
                                        "Memo: " + _vm._s(refund.form_memo)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "ml-1" }, [
                                      _vm._v(
                                        "Reject Chhan: " + _vm._s(refund.reason)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "ml-1" }, [
                                      _vm._v(
                                        "Report date for Roadcutting: " +
                                          _vm._s(_vm.reports.data[index].date)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "ml-1" },
                                      [
                                        refund.division_id == 1
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road South\n                                "
                                              )
                                            ]
                                          : refund.division_id == 2
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road North\n                                "
                                              )
                                            ]
                                          : refund.division_id == 4
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Champhai\n                                "
                                              )
                                            ]
                                          : refund.division_id == 5
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Lunglei\n                                "
                                              )
                                            ]
                                          : refund.division_id == 6
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Saitual\n                                "
                                              )
                                            ]
                                          : refund.division_id == 7
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Mamit\n                                "
                                              )
                                            ]
                                          : refund.division_id == 8
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Siaha\n                                "
                                              )
                                            ]
                                          : refund.division_id == 9
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Khawzawl\n                                "
                                              )
                                            ]
                                          : refund.division_id == 10
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Kolasib\n                                "
                                              )
                                            ]
                                          : refund.division_id == 11
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Lawngtlai\n                                "
                                              )
                                            ]
                                          : refund.division_id == 12
                                          ? [
                                              _vm._v(
                                                "\n                                    Div: Road Serchhip\n                                "
                                              )
                                            ]
                                          : refund.division_id == 13
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/EE/RefundFineList.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/EE/RefundFineList.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RefundFineList_vue_vue_type_template_id_56496c10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RefundFineList.vue?vue&type=template&id=56496c10&scoped=true& */ "./resources/js/views/EE/RefundFineList.vue?vue&type=template&id=56496c10&scoped=true&");
/* harmony import */ var _RefundFineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RefundFineList.vue?vue&type=script&lang=js& */ "./resources/js/views/EE/RefundFineList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RefundFineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RefundFineList_vue_vue_type_template_id_56496c10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RefundFineList_vue_vue_type_template_id_56496c10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "56496c10",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/EE/RefundFineList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/EE/RefundFineList.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/EE/RefundFineList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundFineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RefundFineList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/RefundFineList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundFineList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/EE/RefundFineList.vue?vue&type=template&id=56496c10&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/EE/RefundFineList.vue?vue&type=template&id=56496c10&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundFineList_vue_vue_type_template_id_56496c10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RefundFineList.vue?vue&type=template&id=56496c10&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/RefundFineList.vue?vue&type=template&id=56496c10&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundFineList_vue_vue_type_template_id_56496c10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundFineList_vue_vue_type_template_id_56496c10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);