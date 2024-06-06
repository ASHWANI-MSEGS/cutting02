(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
// import PulseLoader from '../components/PulseLoader';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LocalCouncilList",
  data: function data() {
    return {
      loading: false,
      localcouncils: '' // userDivisionId:this.$route.params.id

    };
  },
  mounted: function mounted() {
    var _this = this;

    var api_url = "";
    var userDivisionId = this.$route.params.id;
    console.log(userDivisionId, "jkgjhgkj");

    if (userDivisionId == 1 || userDivisionId == 2) {
      api_url = '/api/auth/localcouncil';
    } else if (userDivisionId == 4) {
      api_url = '/api/auth/champhai_local_councils';
    } else if (userDivisionId == 5) {
      api_url = '/api/auth/lunglei_local_councils';
    } else if (userDivisionId == 6) {
      api_url = '/api/auth/saitual_local_councils';
    } else if (userDivisionId == 7) {
      api_url = '/api/auth/mamit_local_councils';
    } else if (userDivisionId == 8) {
      api_url = '/api/auth/siaha_local_councils';
    } else if (userDivisionId == 9) {
      api_url = '/api/auth/khawzawl_local_councils';
    } else if (userDivisionId == 10) {
      api_url = '/api/auth/kolasib_local_councils';
    } else if (userDivisionId == 11) {
      api_url = '/api/auth/lawngtlai_local_councils';
    } else if (userDivisionId == 12) {
      api_url = '/api/auth/serchhip_local_councils';
    } else if (userDivisionId == 13) {
      api_url = '/api/auth/lunglei_road_div2_hnahthial';
    } else if (userDivisionId == 14) {
      api_url = '/api/auth/hmuifang_division';
    } else if (userDivisionId == 15) {
      api_url = '/api/auth/national_highway_div1';
    } else if (userDivisionId == 16) {
      api_url = '/api/auth/national_highway_div3';
    }

    console.log(api_url);
    axios.get(api_url).then(function (response) {
      _this.localcouncils = response.data.localcouncils;
      console.log("insodie");
    })["catch"](function (error) {
      _this.loading = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=template&id=a6d4d8ee&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=template&id=a6d4d8ee&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.loading
      ? _c("div")
      : _c(
          "div",
          [
            _c(
              "a",
              {
                staticClass: "text-blue-700",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    return _vm.$router.back()
                  }
                }
              },
              [_vm._v("\n                 << Back\n                 ")]
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.localcouncils, function(localcouncil) {
              return _c(
                "div",
                {
                  key: localcouncil.id,
                  staticClass:
                    "w-full px-2 py-2 mx-3 bg-white border-b hover:bg-tablehover"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "flex flex-row justify-between",
                      attrs: { to: "/localcouncilShow/" + localcouncil.id }
                    },
                    [
                      _c("div", [_vm._v(_vm._s(localcouncil.name))]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          localcouncil.division_id === 1
                            ? [_vm._v(" Road South Division")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 2
                            ? [_vm._v(" Road North Division")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id == 4
                            ? [_vm._v(" Champhai Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 5
                            ? [_vm._v(" Lunglei Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 6
                            ? [_vm._v(" Saitual Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 7
                            ? [_vm._v(" Mamit Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 8
                            ? [_vm._v(" Siaha Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 9
                            ? [_vm._v(" Khawzawl Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 10
                            ? [_vm._v(" Kolasib Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 11
                            ? [_vm._v(" Lawngtlai Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 12
                            ? [_vm._v(" Serchhip Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 13
                            ? [_vm._v("Lunglei Road Div-II, Hnahthial Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 14
                            ? [_vm._v("Hmuifang Division Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 15
                            ? [_vm._v("National Highway Div-I Road")]
                            : _vm._e(),
                          _vm._v(" "),
                          localcouncil.division_id === 16
                            ? [_vm._v("National Highway Div-III Road")]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(localcouncil.sub_div))])
                    ]
                  )
                ],
                1
              )
            })
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
          "w-full px-2 py-2 mx-3 mt-3 text-white rounded-t-lg bg-tableheader "
      },
      [
        _c("div", { staticClass: "flex flex-row justify-between" }, [
          _c("div", { staticClass: "pt-2 pr-2 text-xs font-bold uppercase " }, [
            _vm._v("Local Council")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pt-2 pr-2 text-xs font-bold uppercase " }, [
            _vm._v("Division")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pt-2 pr-2 text-xs font-bold uppercase " }, [
            _vm._v("Sub-Division")
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/localcouncil/AdminLocalCouncilList.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/localcouncil/AdminLocalCouncilList.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminLocalCouncilList_vue_vue_type_template_id_a6d4d8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminLocalCouncilList.vue?vue&type=template&id=a6d4d8ee&scoped=true& */ "./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=template&id=a6d4d8ee&scoped=true&");
/* harmony import */ var _AdminLocalCouncilList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminLocalCouncilList.vue?vue&type=script&lang=js& */ "./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminLocalCouncilList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminLocalCouncilList_vue_vue_type_template_id_a6d4d8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminLocalCouncilList_vue_vue_type_template_id_a6d4d8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a6d4d8ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/localcouncil/AdminLocalCouncilList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLocalCouncilList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminLocalCouncilList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLocalCouncilList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=template&id=a6d4d8ee&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=template&id=a6d4d8ee&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLocalCouncilList_vue_vue_type_template_id_a6d4d8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminLocalCouncilList.vue?vue&type=template&id=a6d4d8ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/localcouncil/AdminLocalCouncilList.vue?vue&type=template&id=a6d4d8ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLocalCouncilList_vue_vue_type_template_id_a6d4d8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLocalCouncilList_vue_vue_type_template_id_a6d4d8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);