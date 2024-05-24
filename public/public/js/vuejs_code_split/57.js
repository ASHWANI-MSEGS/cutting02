(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/FormRejectedList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EE/FormRejectedList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FormRejectedList",
  components: {
    PulseLoader: _components_PulseLoader__WEBPACK_IMPORTED_MODULE_0__["default"],
    pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      // total: 0,
      offset: 3,
      pagination: {},
      loading: true,
      forms: null,
      user: this.$store.getters.currentUser // formSouthCount:'',
      // formNorthCount:'',
      // formChamphaiCount:'',
      // formLungleiCount:'',
      // formSaitualCount:'',
      // formMamitCount:'',
      // formSiahaCount:'',
      // formKhawzawlCount:'',
      // formKolasibCount:'',
      // formLawngtlaiCount:'',
      // formSerchhipCount:'',
      // formHnahthialCount:''

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
      console.log('hsljdlf');
      axios.get('/api/form/rejectedList/' + division_id + '?page=' + pageNum, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        console.log(response);
        _this.pagination = response.data.forms;
        _this.forms = response.data.forms;
        _this.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    } // this.forms = response.data.forms;
    //                                 if(this.user.division_id === 1)
    //                                 {
    //                                     this.pagination = response.data.formSouths;
    //                                     this.forms = response.data.formSouths;
    //                                     // this.total = response.data.formSouthCount;
    //                                 }
    //                                 else if(this.user.division_id === 2)
    //                                 {
    //                                     this.pagination = response.data.formNorths;
    //                                     this.forms = response.data.formNorths;
    //                                     // this.total = response.data.formNorthCount;
    //                                 }
    //                                 else if(this.user.division_id === 4)
    //                                 {
    //                                     this.pagination = response.data.formChamphai;
    //                                     this.forms = response.data.formChamphai;
    //                                     // this.total = response.data.formChamphaiCount;
    //                                 }
    //                                 else if(this.user.division_id === 5)
    //                                 {
    //                                     this.pagination = response.data.formLunglei;
    //                                     this.forms = response.data.formLunglei;
    //                                     // this.total = response.data.formLungleiCount;
    //                                 }
    //                                 else if(this.user.division_id === 6)
    //                                 {
    //                                     this.pagination = response.data.formSaitual;
    //                                     this.forms = response.data.formSaitual;
    //                                     // this.total = response.data.formSaitualCount;
    //                                 }
    //                                 else if(this.user.division_id === 7)
    //                                 {
    //                                     this.pagination = response.data.formMamit;
    //                                     this.forms = response.data.formMamit;
    //                                     // this.total = response.data.formMamitCount;
    //                                 }
    //                                 else if(this.user.division_id === 8)
    //                                 {
    //                                     this.pagination = response.data.formSiaha;
    //                                     this.forms = response.data.formSiaha;
    //                                     // this.total = response.data.formSiahaCount;
    //                                 }
    //                                 else if(this.user.division_id === 9)
    //                                 {
    //                                     this.pagination = response.data.formKhawzawl;
    //                                     this.forms = response.data.formKhawzawl;
    //                                     // this.total = response.data.formKhawzawlCount;
    //                                 }
    //                                 else if(this.user.division_id === 10)
    //                                 {
    //                                     this.pagination = response.data.formKolasib;
    //                                     this.forms = response.data.formKolasib;
    //                                     // this.total = response.data.formKolasibCount;
    //                                 }
    //                                 else if(this.user.division_id === 11)
    //                                 {
    //                                     this.pagination = response.data.formLawngtlai;
    //                                     this.forms = response.data.formLawngtlai;
    //                                     // this.total = response.data.formLawngtlaiCount;
    //                                 }
    //                                 else if(this.user.division_id === 12)
    //                                 {
    //                                     this.pagination = response.data.formSerchhip;
    //                                     this.forms = response.data.formSerchhip;
    //                                     // this.total = response.data.formSerchhipCount;
    //                                 }
    //                                 else if(this.user.division_id === 13)
    //                                 {
    //                                     this.pagination = response.data.formHnahthial;
    //                                     this.forms = response.data.formHnahthial;
    //                                     // this.total = response.data.formHnahthialCount;
    //                                 }
    // //not sure about this if i need it or not
    //                                 // this.formSouthCount = response.data.formSouthCount;
    //                                 // this.formNorthCount = response.data.formNorthCount;

  }
}); // alert("'documents.cookie'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/FormRejectedList.vue?vue&type=template&id=362d9620&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EE/FormRejectedList.vue?vue&type=template&id=362d9620&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              {
                staticClass:
                  "w-full px-2 mx-1 mt-3 text-white rounded-t-lg sm:py-3 md:py-3 md:mx-3 bg-tableheader"
              },
              [
                _c("p", [
                  _vm._v(
                    "Total: " + _vm._s(_vm.forms.total) + "\n\n                "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.forms.data, function(form) {
              return _c(
                "div",
                { key: form.id },
                [
                  form.division_id === _vm.user.division_id
                    ? [
                        _c(
                          "router-link",
                          { attrs: { to: "/formList/" + form.id } },
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
                                      "grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1 lg:grid-cols-5 lg:gap-1 xl:grid-cols-6 xl:gap-1"
                                  },
                                  [
                                    _c("div", [
                                      _vm._v("Memo: " + _vm._s(form.memo))
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v("Name: " + _vm._s(form.name))
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v("RC H-No: " + _vm._s(form.houseno))
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        "RC Location: " +
                                          _vm._s(form.localcouncil_name) +
                                          " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        " Div: Road " +
                                          _vm._s(form.district) +
                                          " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      [
                                        _vm._v(
                                          "Reason:\n                                "
                                        ),
                                        form.reason == null
                                          ? [
                                              _c("i", [
                                                _vm._v("'Reason not specified'")
                                              ])
                                            ]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        [_vm._v(" " + _vm._s(form.reason))]
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      [
                                        [
                                          _vm._v(
                                            "\n                                    Status: "
                                          ),
                                          _c(
                                            "span",
                                            { staticClass: "text-red-500" },
                                            [_vm._v("Rejected")]
                                          )
                                        ]
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("hr")
                          ]
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
            }),
            _vm._v(" "),
            _vm.forms.total === 0
              ? _c("div", [
                  _c("p", { staticClass: "px-5 py-2" }, [
                    _vm._v("No Rejected List")
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

/***/ "./resources/js/views/EE/FormRejectedList.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/EE/FormRejectedList.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormRejectedList_vue_vue_type_template_id_362d9620_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormRejectedList.vue?vue&type=template&id=362d9620&scoped=true& */ "./resources/js/views/EE/FormRejectedList.vue?vue&type=template&id=362d9620&scoped=true&");
/* harmony import */ var _FormRejectedList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormRejectedList.vue?vue&type=script&lang=js& */ "./resources/js/views/EE/FormRejectedList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormRejectedList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormRejectedList_vue_vue_type_template_id_362d9620_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormRejectedList_vue_vue_type_template_id_362d9620_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "362d9620",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/EE/FormRejectedList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/EE/FormRejectedList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/EE/FormRejectedList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRejectedList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRejectedList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/FormRejectedList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRejectedList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/EE/FormRejectedList.vue?vue&type=template&id=362d9620&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/EE/FormRejectedList.vue?vue&type=template&id=362d9620&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRejectedList_vue_vue_type_template_id_362d9620_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRejectedList.vue?vue&type=template&id=362d9620&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EE/FormRejectedList.vue?vue&type=template&id=362d9620&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRejectedList_vue_vue_type_template_id_362d9620_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRejectedList_vue_vue_type_template_id_362d9620_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);