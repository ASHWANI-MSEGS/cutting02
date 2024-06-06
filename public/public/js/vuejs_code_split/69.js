(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PulseLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PulseLoader */ "./resources/js/components/PulseLoader.vue");
/* harmony import */ var _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue */ "./resources/js/views/Pagination.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import VueAdsPagination from 'vue-ads-pagination';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserList",
  components: {
    PulseLoader: _components_PulseLoader__WEBPACK_IMPORTED_MODULE_0__["default"],
    pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      users: {},
      offset: 3,
      pagination: {},
      user1: this.$store.getters.currentUser
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
      axios.get('/api/auth/userList/' + this.user1.division_id + '?page=' + pageNum).then(function (response) {
        _this.pagination = response.data.users;
        _this.users = response.data.users;
        console.log(_this.users);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteUser: function deleteUser(id) {
      var _this2 = this;

      axios.get('/api/userDelete/' + id, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this2.$router.push("/userDeleteSuccess");
      })["catch"](function (errors) {
        _this2.errors = errors.response.data.errors;
      });
    },
    disableUser: function disableUser(id) {
      var _this3 = this;

      axios.get('/api/disableUser/' + id, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this3.disable_account = response.data.disable_account;
        console.log(_this3.disable_account); // this.feature = response.data.feature;
        // this.security_deposit = response.data.security_deposit;
        // console.log(response.data);

        _this3.loading = false;
        setTimeout(function () {
          location.reload();
        }, 200); //  this.$router.push('/feature');
      })["catch"](function (error) {
        _this3.loading = false;

        if (error.response.status === 404) {
          _this3.$router.push('/forms');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8&scoped=true& ***!
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
  return _c("div", { staticClass: "h-full" }, [
    _vm.loading
      ? _c(
          "div",
          [_c("PulseLoader", { staticClass: "object-center h-full " })],
          1
        )
      : _c(
          "div",
          [
            _c("div", {
              staticClass:
                "w-full px-2 py-4 mx-3 mt-3 text-white rounded-t-lg lg:py-5 bg-tableheader "
            }),
            _vm._v(" "),
            _vm._l(_vm.users.data, function(user) {
              return _c(
                "div",
                { key: user.id },
                [
                  user.division_id == _vm.user1.division_id ||
                  user.division_id == 3 ||
                  _vm.user1.role_id == 1
                    ? [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex-row justify-between flex-none w-full px-2 mx-3 mt-1 bg-white border-b hover:bg-tablehover"
                          },
                          [
                            _c("div", {}, [
                              _c("span", { staticClass: "text-blue-600" }, [
                                _vm._v("NAME:")
                              ]),
                              _vm._v(" " + _vm._s(user.name))
                            ]),
                            _vm._v(" "),
                            _c("div", {}, [
                              _c("span", { staticClass: "text-blue-600" }, [
                                _vm._v("EMAIL: ")
                              ]),
                              _vm._v(_vm._s(user.email))
                            ]),
                            _vm._v(" "),
                            _c("div", {}, [
                              _c("span", { staticClass: "text-blue-600" }, [
                                _vm._v("PHONE: ")
                              ]),
                              _vm._v(_vm._s(user.phone))
                            ]),
                            _vm._v(" "),
                            user.role_id == 1
                              ? [_vm._m(0, true)]
                              : user.role_id == 2
                              ? [_vm._m(1, true)]
                              : user.role_id == 3
                              ? [_vm._m(2, true)]
                              : _vm._e(),
                            _vm._v(" "),
                            user.division_id == 1
                              ? [_vm._m(3, true)]
                              : user.division_id == 2
                              ? [_vm._m(4, true)]
                              : user.division_id == 3
                              ? [_vm._m(5, true)]
                              : user.division_id == 4
                              ? [_vm._m(6, true)]
                              : user.division_id == 5
                              ? [_vm._m(7, true)]
                              : user.division_id == 6
                              ? [_vm._m(8, true)]
                              : user.division_id == 7
                              ? [_vm._m(9, true)]
                              : user.division_id == 8
                              ? [_vm._m(10, true)]
                              : user.division_id == 9
                              ? [_vm._m(11, true)]
                              : user.division_id == 10
                              ? [_vm._m(12, true)]
                              : user.division_id == 11
                              ? [_vm._m(13, true)]
                              : user.division_id == 12
                              ? [_vm._m(14, true)]
                              : user.division_id == 13
                              ? [_vm._m(15, true)]
                              : user.division_id == 14
                              ? [_vm._m(16, true)]
                              : user.division_id == 15
                              ? [_vm._m(17, true)]
                              : user.division_id == 16
                              ? [_vm._m(18, true)]
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", {}, [
                              _c("span", { staticClass: "text-blue-600" }, [
                                _vm._v("SUB-DIVISION: ")
                              ]),
                              _vm._v(_vm._s(user.sub_div))
                            ]),
                            _vm._v(" "),
                            _vm.user1.role_id == 1
                              ? [
                                  user.disable_account_status == 0
                                    ? [
                                        _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: user.role_id != 1,
                                                expression: "user.role_id != 1"
                                              }
                                            ],
                                            staticClass:
                                              "px-4 py-2 my-2 ml-1 text-sm font-normal text-white bg-green-500 rounded hover:bg-green-300",
                                            on: {
                                              click: function($event) {
                                                return _vm.disableUser(user.id)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                Account Actived\n                            "
                                            )
                                          ]
                                        )
                                      ]
                                    : user.disable_account_status == 1
                                    ? [
                                        _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: user.role_id != 1,
                                                expression: "user.role_id != 1"
                                              }
                                            ],
                                            staticClass:
                                              "px-4 py-2 my-2 ml-1 text-sm font-normal text-white bg-gray-600 rounded hover:bg-gray-400",
                                            on: {
                                              click: function($event) {
                                                return _vm.disableUser(user.id)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                Account Disabled\n                            "
                                            )
                                          ]
                                        )
                                      ]
                                    : _vm._e()
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.user1.role_id == 2 || _vm.user1.role_id == 1
                              ? [
                                  _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: user.role_id != 1,
                                          expression: "user.role_id != 1"
                                        }
                                      ],
                                      staticClass:
                                        "px-4 py-2 my-2 ml-1 text-sm font-normal text-white bg-red-500 rounded hover:bg-red-400",
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteUser(user.id)
                                        }
                                      }
                                    },
                                    [_vm._v("Delete\n                        ")]
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _c("br")
                          ],
                          2
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
            })
          ],
          2
        ),
    _vm._v(" "),
    _c("br"),
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("ROLE: ")]),
      _vm._v("Super Admin")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("ROLE: ")]),
      _vm._v("EE")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("ROLE: ")]),
      _vm._v("SDO")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Road South")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Road North")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("None")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Champhai Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Lunglei Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Saitual Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Mamit Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Siaha Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Khawzawl Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Kolasib Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Lawngtlai Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Serchhip Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Lunglei Road Div-II, Hnahthial\n                            Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("Hmuifang Division Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("National Highway Div-I Road")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("span", { staticClass: "text-blue-600" }, [_vm._v("DIVISION: ")]),
      _vm._v("National Highway Div-III Road\n                        ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/UserList.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/UserList.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_6d878aa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=6d878aa8&scoped=true& */ "./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8&scoped=true&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/views/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_6d878aa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_6d878aa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d878aa8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserList.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/UserList.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6d878aa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=6d878aa8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6d878aa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6d878aa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);