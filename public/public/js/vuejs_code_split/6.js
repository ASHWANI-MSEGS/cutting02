(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormListUnapprovedCO.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormListUnapprovedCO.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PulseLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PulseLoader */ "./resources/js/components/PulseLoader.vue");
/* harmony import */ var _UserCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCircle */ "./resources/js/components/UserCircle.vue");
var _name$components$moun;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = (_name$components$moun = {
  name: "FormListUnapprovedCO",
  components: {
    PulseLoader: _PulseLoader__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserCircle: _UserCircle__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/auth/form/listUnapproved').then(function (response) {
      console.log("entirna");
      _this.forms = response.data.forms;
      _this.loading = false;
    })["catch"](function (error) {
      _this.loading = false;
      alert('Unable to load forms.');
    });
  }
}, _defineProperty(_name$components$moun, "components", {
  UserCircle: _UserCircle__WEBPACK_IMPORTED_MODULE_1__["default"]
}), _defineProperty(_name$components$moun, "data", function data() {
  return {
    loading: true,
    forms: null,
    user: this.$store.getters.currentUser
  };
}), _name$components$moun);

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormListUnapprovedCO.vue?vue&type=template&id=72ee396e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormListUnapprovedCO.vue?vue&type=template&id=72ee396e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      ? _c("div", [_c("PulseLoader")], 1)
      : _c(
          "div",
          [
            _vm.forms.length === 0
              ? _c("div", [
                  _c(
                    "p",
                    [
                      _vm._v("NO Unapproved Form List"),
                      _c("router-link", { attrs: { to: "/form" } }, [
                        _vm._v("Get Started")
                      ])
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.forms, function(form) {
              return _c(
                "div",
                { key: form.id },
                [
                  form.send === 0
                    ? [
                        _vm.user.division_id === form.division_id
                          ? [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "flex items-center\n            border-b border-gray-400 p-4 hover:gray-100",
                                  attrs: { to: "/formListUnCO/" + form.id }
                                },
                                [
                                  _c("UserCircle", {
                                    attrs: { name: form.name }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pl-3" }, [
                                    _c(
                                      "div",
                                      { staticClass: "flex flex-wrap" },
                                      [
                                        _c("p", { staticClass: "w-2/4 pt-2" }, [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "pt-2 text-gray-600 font-bold  text-sm"
                                            },
                                            [_vm._v("Memo No:")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass: "pl-2 text-blue-400"
                                            },
                                            [_vm._v(_vm._s(form.memo))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "w-2/4 pt-2" }, [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "pt-2 text-gray-600 font-bold  text-sm"
                                            },
                                            [_vm._v("Aplicant Name:")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass: "pl-2 text-blue-400"
                                            },
                                            [_vm._v(_vm._s(form.name))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "w-2/4 pt-2" }, [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "pt-2 text-gray-600 font-bold  text-sm"
                                            },
                                            [_vm._v("Local Council:")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass: "pl-2 text-blue-400"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(form.localcouncil_name)
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        form.status === 0
                                          ? [
                                              _c(
                                                "p",
                                                { staticClass: "w-2/4 pt-2" },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "pt-2 text-gray-600 font-bold  text-sm"
                                                    },
                                                    [_vm._v("Status:")]
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "pl-2 text-red-400"
                                                    },
                                                    [_vm._v("Unapproved")]
                                                  )
                                                ]
                                              )
                                            ]
                                          : [
                                              _c(
                                                "p",
                                                { staticClass: "w-2/4 pt-2" },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "pt-2 text-gray-600 font-bold  text-sm"
                                                    },
                                                    [_vm._v("Status:")]
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "pl-2 text-green-400"
                                                    },
                                                    [_vm._v("Approved")]
                                                  )
                                                ]
                                              )
                                            ]
                                      ],
                                      2
                                    )
                                  ])
                                ],
                                1
                              )
                            ]
                          : _vm._e()
                      ]
                    : _vm._e()
                ],
                2
              )
            })
          ],
          2
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/components/FormListUnapprovedCO.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/FormListUnapprovedCO.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormListUnapprovedCO_vue_vue_type_template_id_72ee396e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormListUnapprovedCO.vue?vue&type=template&id=72ee396e&scoped=true& */ "./resources/js/components/FormListUnapprovedCO.vue?vue&type=template&id=72ee396e&scoped=true&");
/* harmony import */ var _FormListUnapprovedCO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormListUnapprovedCO.vue?vue&type=script&lang=js& */ "./resources/js/components/FormListUnapprovedCO.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormListUnapprovedCO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormListUnapprovedCO_vue_vue_type_template_id_72ee396e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormListUnapprovedCO_vue_vue_type_template_id_72ee396e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "72ee396e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormListUnapprovedCO.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormListUnapprovedCO.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/FormListUnapprovedCO.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormListUnapprovedCO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormListUnapprovedCO.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormListUnapprovedCO.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormListUnapprovedCO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormListUnapprovedCO.vue?vue&type=template&id=72ee396e&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/FormListUnapprovedCO.vue?vue&type=template&id=72ee396e&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormListUnapprovedCO_vue_vue_type_template_id_72ee396e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormListUnapprovedCO.vue?vue&type=template&id=72ee396e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormListUnapprovedCO.vue?vue&type=template&id=72ee396e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormListUnapprovedCO_vue_vue_type_template_id_72ee396e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormListUnapprovedCO_vue_vue_type_template_id_72ee396e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);