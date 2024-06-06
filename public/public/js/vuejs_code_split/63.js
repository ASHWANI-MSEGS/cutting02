(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Profile",
  data: function data() {
    return {
      user1: {
        'newpassword': '',
        'oldpassword': '',
        'id': this.$store.getters.currentUser.id
      },
      user: this.$store.getters.currentUser,
      show: 'true',
      errors: {}
    };
  },
  methods: {
    toggle: function toggle() {
      this.show = !this.show;
    },
    clear: function clear() {
      this.show = true;
    },
    changePassword: function changePassword() {
      var _this = this;

      axios.patch('/api/auth/updatePassword', this.user1).then(function (response) {
        _this.$router.push('/');
      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;
      });
    }
  } // mounted(){
  //     axios.get(/api/auth/user)
  // },

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "h-screen" }, [
    !_vm.show
      ? _c("div", {
          staticClass:
            "bg-black opacity-50 absolute right-0 left-0 top-0 bottom-0 z-10 shadow-4",
          on: { click: _vm.clear }
        })
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: " flex  justify-center  relative z-10" }, [
      !_vm.show
        ? _c(
            "div",
            {
              staticClass:
                "absolute bg-blue-700  rounded-lg p-4 w-96  mr-6 mt-2 shadow z-20"
            },
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.changePassword.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("label", { staticClass: "text-white pb-5" }, [
                    _vm._v("Enter Old Password")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user1.oldpassword,
                        expression: "user1.oldpassword"
                      }
                    ],
                    staticClass:
                      "py-4 pl-2 w-full text-gray-900 border-b  focus:outline-none focus:border-blue-400 rounded-lg",
                    attrs: { type: "text", placeholder: "Old Password" },
                    domProps: { value: _vm.user1.oldpassword },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user1, "oldpassword", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c("label", { staticClass: "pt-5 pb-5 text-white" }, [
                    _vm._v("Enter New Password")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user1.newpassword,
                        expression: "user1.newpassword"
                      }
                    ],
                    staticClass:
                      "py-4 pl-2 w-full text-gray-900 border-b  focus:outline-none focus:border-blue-400 rounded-lg",
                    attrs: { type: "text", placeholder: "New Password" },
                    domProps: { value: _vm.user1.newpassword },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user1, "newpassword", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex justify-between" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "rounded-lg bg-blue-700 border px-2 py-2 text-white hover:bg-blue-800"
                      },
                      [_vm._v(" Change Password")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "rounded-lg bg-blue-700 text-blue-200  px-4 py-2  hover:underline ",
                        on: { click: _vm.toggle }
                      },
                      [_vm._v(" Cancel")]
                    )
                  ])
                ]
              )
            ]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "sm:w-5/5 lg:w-1/2  bg-white h-auto  rounded-lg shadow-lg"
      },
      [
        _c("div", { staticClass: "mx-4 z" }, [
          _c("br"),
          _vm._v(" "),
          _c("span", { staticClass: "mt-12 text-blue-500 uppercase" }, [
            _vm._v("User Name:")
          ]),
          _c("span", { staticClass: "text-gray-700" }, [
            _vm._v(" " + _vm._s(_vm.user.name))
          ]),
          _vm._v(" "),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c("span", { staticClass: "text-blue-500 uppercase" }, [
            _vm._v("Email: ")
          ]),
          _c("span", { staticClass: "text-gray-700" }, [
            _vm._v(" " + _vm._s(_vm.user.email))
          ]),
          _vm._v(" "),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c("span", { staticClass: "text-blue-500 uppercase" }, [
            _vm._v("Phone: ")
          ]),
          _c("span", { staticClass: "text-gray-700" }, [
            _vm._v(" " + _vm._s(_vm.user.phone))
          ]),
          _vm._v(" "),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "mb-6 rounded-lg bg-blue-400 border px-2 py-2 text-white",
              on: { click: _vm.toggle }
            },
            [_vm._v(" Change Password")]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Profile.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=25b9215a&scoped=true& */ "./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "25b9215a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=25b9215a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);