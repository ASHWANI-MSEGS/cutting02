(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/engineer/EngineerAdd.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/engineer/EngineerAdd.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EngineerAdd",
  data: function data() {
    return {
      engineer: {
        name: "",
        post: '',
        phone: '',
        email: '',
        division_id: this.$store.getters.currentUser.division_id,
        sub_div: "",
        added_by: this.$store.getters.currentUser.id
      },
      errors: {},
      error: null
    };
  },
  mounted: function mounted() {},
  methods: {
    registerUser: function registerUser() {
      var _this = this;

      axios.post('/api/engineerAdd', this.engineer, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this.$router.push({
          path: '/engineerList'
        });
      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;
      });
    },
    errorName: function errorName() {
      if (this.hasErrorName) {
        // return this.errors['localcouncil_name'][0];
        return "Please Enter Engineer's name";
      }
    },
    errorPost: function errorPost() {
      if (this.hasErrorPost) {
        // return this.errors['localcouncil_name'][0];
        return "Enter Post";
      }
    },
    errorEmail: function errorEmail() {
      if (this.hasErrorEmail) {
        // return this.errors['localcouncil_name'][0];
        return "Re Enter Email";
      }
    },
    errorPhone: function errorPhone() {
      if (this.hasErrorPhone) {
        // return this.errors['localcouncil_name'][0];
        return "Check Phone number( must be 10 digits)";
      }
    },
    errorDivision_id: function errorDivision_id() {
      if (this.hasErrorDivision_id) {
        // return this.errors['localcouncil_name'][0];
        return "Select division";
      }
    },
    updateName: function updateName() {
      this.errors['name'] = null;
    },
    updatePost: function updatePost() {
      this.errors['post'] = null;
    },
    updatePhone: function updatePhone() {
      this.errors['phone'] = null;
    },
    updateDivision_id: function updateDivision_id() {
      this.errors['division_id'] = null;
    },
    updateEmail: function updateEmail() {
      this.errors['email'] = null;
    }
  },
  computed: {
    hasErrorName: function hasErrorName() {
      return this.errors && this.errors['  '] && this.errors['name'].length > 0;
    },
    hasErrorPost: function hasErrorPost() {
      return this.errors && this.errors['post'] && this.errors['post'].length > 0;
    },
    hasErrorEmail: function hasErrorEmail() {
      return this.errors && this.errors['email'] && this.errors['email'].length > 0;
    },
    hasErrorPhone: function hasErrorPhone() {
      return this.errors && this.errors['phone'] && this.errors['phone'].length > 0;
    },
    hasErrorDivision_id: function hasErrorDivision_id() {
      return this.errors && this.errors['division_id'] && this.errors['division_id'].length > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/engineer/EngineerAdd.vue?vue&type=template&id=58721071&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/engineer/EngineerAdd.vue?vue&type=template&id=58721071& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex flex-col min-h-full mt-10" }, [
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
              [_vm._v("Add New Engineer ")]
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
                  _c("div", { staticClass: "relative pt-2 " }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "absolute px-2 py-2 text-xs uppercase text-textblue"
                      },
                      [_vm._v("Name :")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.engineer.name,
                          expression: "engineer.name"
                        }
                      ],
                      staticClass:
                        "w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",
                      attrs: { type: "text", placeholder: "Engineer Hming" },
                      domProps: { value: _vm.engineer.name },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.engineer, "name", $event.target.value)
                          },
                          function($event) {
                            return _vm.updateName()
                          }
                        ]
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "pb-4 text-sm text-red-600",
                      domProps: { textContent: _vm._s(_vm.errorName()) }
                    },
                    [_vm._v("Error Here")]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "relative pt-2 " }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "absolute px-2 py-2 text-xs uppercase text-textblue"
                      },
                      [_vm._v("Post:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.engineer.post,
                          expression: "engineer.post"
                        }
                      ],
                      staticClass:
                        "w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",
                      attrs: { type: "text", placeholder: "Post" },
                      domProps: { value: _vm.engineer.post },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.engineer, "post", $event.target.value)
                          },
                          function($event) {
                            return _vm.updatePost()
                          }
                        ]
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "pb-4 text-sm text-red-600",
                      domProps: { textContent: _vm._s(_vm.errorPost()) }
                    },
                    [_vm._v("Error Here")]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "relative pt-2 " }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "absolute px-2 py-2 text-xs uppercase text-textblue"
                      },
                      [_vm._v("Phone Number:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.engineer.phone,
                          expression: "engineer.phone"
                        }
                      ],
                      staticClass:
                        "w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",
                      attrs: { type: "text", placeholder: "Mobile Phone" },
                      domProps: { value: _vm.engineer.phone },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.engineer, "phone", $event.target.value)
                          },
                          function($event) {
                            return _vm.updatePhone()
                          }
                        ]
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "pb-4 text-sm text-red-600",
                      domProps: { textContent: _vm._s(_vm.errorPhone()) }
                    },
                    [_vm._v("Error Here")]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "relative pt-2 " }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "absolute px-2 py-2 text-xs uppercase text-textblue"
                      },
                      [_vm._v("Email:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.engineer.email,
                          expression: "engineer.email"
                        }
                      ],
                      staticClass:
                        "w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",
                      attrs: { type: "text", placeholder: "Email" },
                      domProps: { value: _vm.engineer.email },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.engineer, "email", $event.target.value)
                          },
                          function($event) {
                            return _vm.updateEmail()
                          }
                        ]
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "pb-4 text-sm text-red-600",
                      domProps: { textContent: _vm._s(_vm.errorEmail()) }
                    },
                    [_vm._v("Error Here")]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "pt-2 pr-4 text-lg font-bold text-gray-600"
                    },
                    [_vm._v("Division:")]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm.engineer.division_id === 1
                    ? [_vm._v(" Road South Division")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 2
                    ? [_vm._v(" Road North Division")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id == 4
                    ? [_vm._v(" Champhai Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 5
                    ? [_vm._v(" Lunglei Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 6
                    ? [_vm._v(" Saitual Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 7
                    ? [_vm._v(" Mamit Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 8
                    ? [_vm._v(" Siaha Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 9
                    ? [_vm._v(" Khawzawl Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 10
                    ? [_vm._v(" Kolasib Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 11
                    ? [_vm._v(" Lawngtlai Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 12
                    ? [_vm._v(" Serchhip Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 13
                    ? [_vm._v("Lunglei Road Div-II, Hnahthial Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 14
                    ? [_vm._v("Hmuifang Division Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 15
                    ? [_vm._v("National Highway Div-I Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.engineer.division_id === 16
                    ? [_vm._v("National Highway Div-III Road")]
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "pb-4 text-sm text-red-600",
                      domProps: { textContent: _vm._s(_vm.errorDivision_id()) }
                    },
                    [_vm._v("Error Here")]
                  ),
                  _vm._v(" "),
                  _c("div", [
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
                      {
                        staticClass: "relative pb-2 pr-1 mb-3 border rounded-lg"
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "absolute px-4 py-2 text-sm font-light text-textblueform",
                            attrs: { for: "engineer.sub_div" }
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
                                value: _vm.engineer.sub_div,
                                expression: "engineer.sub_div"
                              }
                            ],
                            staticClass:
                              "w-full px-2 pt-6 mt-1 ml-1 bg-white rounded-lg appearance-none text-textgrayform focus:outline-none",
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
                                  _vm.engineer,
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
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
                ],
                2
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
              "\n                                        Submit\n                                    "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/engineer/EngineerAdd.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/engineer/EngineerAdd.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EngineerAdd_vue_vue_type_template_id_58721071___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EngineerAdd.vue?vue&type=template&id=58721071& */ "./resources/js/views/engineer/EngineerAdd.vue?vue&type=template&id=58721071&");
/* harmony import */ var _EngineerAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EngineerAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/engineer/EngineerAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EngineerAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EngineerAdd_vue_vue_type_template_id_58721071___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EngineerAdd_vue_vue_type_template_id_58721071___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/engineer/EngineerAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/engineer/EngineerAdd.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/engineer/EngineerAdd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EngineerAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EngineerAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/engineer/EngineerAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EngineerAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/engineer/EngineerAdd.vue?vue&type=template&id=58721071&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/engineer/EngineerAdd.vue?vue&type=template&id=58721071& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EngineerAdd_vue_vue_type_template_id_58721071___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EngineerAdd.vue?vue&type=template&id=58721071& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/engineer/EngineerAdd.vue?vue&type=template&id=58721071&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EngineerAdd_vue_vue_type_template_id_58721071___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EngineerAdd_vue_vue_type_template_id_58721071___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);