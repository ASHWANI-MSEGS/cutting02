(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropdownUser.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DropdownUser.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DropdownMobile",
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  data: function data() {
    return {
      showDropdown: 'true',
      login: {
        email: '',
        password: ''
      },
      error: null,
      errorM: null,
      title: '',
      show: 'true',
      showLogin: 'true'
    };
  },
  methods: {
    toggleDropdown: function toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    clearDropdown: function clearDropdown() {
      this.showDropdown = "true";
    },
    logout: function logout() {
      this.$store.commit('logout');
      this.showDropdown = "true";
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-field[data-v-c7eaed32] {\n  border-width: 1px;\n  --border-opacity: 1;\n  border-color: #f56565;\n  border-color: rgba(245, 101, 101, var(--border-opacity));\n  border-style: dotted\n}\n.error[data-v-c7eaed32] {\n  text-align: center;\n  color: red;\n}\n.st0[data-v-c7eaed32] {\n  fill: #1F4490;\n}\n.st1[data-v-c7eaed32] {\n  fill: #EE266A;\n}\n.st2[data-v-c7eaed32] {\n  fill: none;\n}\n\n/* Report logo */\n.streport0[data-v-c7eaed32] {\n  fill: #1F4490;\n}\n.streport1[data-v-c7eaed32] {\n  fill: #EE266A;\n}\n\n/* Report Completed Logo */\n.stcomplete0[data-v-c7eaed32] {\n  fill: #EE266A;\n}\n.stcomplete1[data-v-c7eaed32] {\n  fill: #1F4490;\n}\n\n/* Unrefunded Logo */\n.unrefunded0[data-v-c7eaed32] {\n  fill: #1F4490;\n}\n.unrefunded1[data-v-c7eaed32] {\n  fill: #EE266A;\n}\n\n/* Refunded Logo */\n.refunded0[data-v-c7eaed32] {\n  fill: #EE266A;\n}\n.refunded1[data-v-c7eaed32] {\n  fill: #1F4490;\n}\n\n/* Fined Logo */\n.fined0[data-v-c7eaed32] {\n  fill: #EE266A;\n}\n.fined1[data-v-c7eaed32] {\n  fill: #1F4490;\n}\n.fade-enter[data-v-c7eaed32],\n.fade-leave-to[data-v-c7eaed32] {\n  opacity: 0;\n  transform: translateY(-4em);\n}\n.fade-enter-active[data-v-c7eaed32],\n.fade-leave-active[data-v-c7eaed32] {\n  transition: all .5s ease;\n}\n.faderouter-enter[data-v-c7eaed32],\n.faderouter-leave-to[data-v-c7eaed32] {\n  opacity: 0;\n  transform: translateX(4em);\n}\n.faderouter-enter-active[data-v-c7eaed32],\n.faderouter-leave-active[data-v-c7eaed32] {\n  transition: all .1s ease-out;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropdownUser.vue?vue&type=template&id=c7eaed32&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DropdownUser.vue?vue&type=template&id=c7eaed32&scoped=true& ***!
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
  return _c("div", { staticClass: "relative block" }, [
    _c(
      "button",
      {
        staticClass:
          "px-4 py-3 rounded-full cursor-pointer focus:outline-none focus:bg-gray-200",
        on: { click: _vm.toggleDropdown }
      },
      [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "3",
              height: "12",
              viewBox: "0 0 4 18"
            }
          },
          [
            _c(
              "g",
              {
                attrs: {
                  id: "Group_33",
                  "data-name": "Group 33",
                  transform: "translate(-1839 -47)"
                }
              },
              [
                _c("circle", {
                  attrs: {
                    id: "Ellipse_27",
                    "data-name": "Ellipse 27",
                    cx: "2",
                    cy: "2",
                    r: "2",
                    transform: "translate(1839 47)",
                    fill: "#414141"
                  }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: {
                    id: "Ellipse_29",
                    "data-name": "Ellipse 29",
                    cx: "2",
                    cy: "2",
                    r: "2",
                    transform: "translate(1839 61)",
                    fill: "#414141"
                  }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: {
                    id: "Ellipse_28",
                    "data-name": "Ellipse 28",
                    cx: "2",
                    cy: "2",
                    r: "2",
                    transform: "translate(1839 54)",
                    fill: "#414141"
                  }
                })
              ]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.showDropdown,
            expression: "!showDropdown"
          }
        ],
        staticClass:
          "absolute right-0 z-50 w-48 pt-4 mt-1 bg-white rounded-b-lg rounded-l-lg bottom-o"
      },
      [
        _vm.currentUser.role_id == 2
          ? [
              _c("router-link", { attrs: { to: "/localcouncilAdd" } }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500 ",
                    on: { click: _vm.clearDropdown }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "w-5 h-5",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          width: "30",
                          height: "30",
                          viewBox: "0 0 30 30"
                        }
                      },
                      [
                        _c("defs", [
                          _c("clipPath", { attrs: { id: "clip-path" } }, [
                            _c("rect", {
                              attrs: {
                                id: "Rectangle_211",
                                "data-name": "Rectangle 211",
                                width: "30",
                                height: "30",
                                transform: "translate(90 426)",
                                fill: "#ff1a68",
                                stroke: "#707070",
                                "stroke-width": "1"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "g",
                          {
                            attrs: {
                              id: "Mask_Group_9",
                              "data-name": "Mask Group 9",
                              transform: "translate(-90 -426)",
                              "clip-path": "url(#clip-path)"
                            }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  id: "add_LC",
                                  "data-name": "add LC",
                                  transform: "translate(89.936 425.649)"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    id: "Path_134",
                                    "data-name": "Path 134",
                                    d: "M6.041,16.778",
                                    fill: "#ff1a68"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    id: "Path_135",
                                    "data-name": "Path 135",
                                    d:
                                      "M21.595,15.4a16.4,16.4,0,0,0-1.761-.708,7.957,7.957,0,1,0-9.532.01A14.876,14.876,0,0,0,5.383,17.4,15.266,15.266,0,0,0,.142,26.047a3.573,3.573,0,0,0,3.481,4.3h14.43a1.174,1.174,0,0,0,0-2.348H3.613a1.233,1.233,0,0,1-.941-.445,1.2,1.2,0,0,1-.243-1.022A12.941,12.941,0,0,1,14.744,16.282c.1,0,.2.01.314.01s.213,0,.314-.01a12.756,12.756,0,0,1,5.222,1.235,1.17,1.17,0,0,0,1-2.115Zm-6.254-1.467h-.567a5.626,5.626,0,1,1,.567,0Z",
                                    fill: "#ff1a68"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    id: "Path_136",
                                    "data-name": "Path 136",
                                    d:
                                      "M28.891,23.608H25.673V20.39a1.174,1.174,0,0,0-2.348,0v3.218H20.107a1.174,1.174,0,1,0,0,2.348h3.218v3.218a1.174,1.174,0,0,0,2.348,0V25.956h3.218a1.174,1.174,0,1,0,0-2.348Zm0,0",
                                    fill: "#ff1a68"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "pl-3 text-sm" }, [
                      _vm._v("Add Local Council")
                    ])
                  ]
                )
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.currentUser.role_id == 2 || _vm.currentUser.role_id == 3
          ? [
              _c(
                "router-link",
                {
                  staticClass: "hover:bg-gray-100",
                  attrs: { to: "/localcouncilList" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500",
                      on: { click: _vm.clearDropdown }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "w-5 h-5",
                          staticStyle: {
                            "enable-background": "new 0 0 300 300"
                          },
                          attrs: {
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 300 300",
                            "xml:space": "preserve"
                          }
                        },
                        [
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M85.5,288.3c0,6.5-5.2,11.7-11.7,11.7h-27C21,300,0,279,0,253.1V46.9C0,21,21,0,46.9,0H191\n                        c25.8,0,46.9,21,46.9,46.9v69.7c0,6.5-5.2,11.7-11.7,11.7s-11.7-5.2-11.7-11.7V46.9c0-12.9-10.5-23.4-23.4-23.4H46.9\n                        C34,23.4,23.4,34,23.4,46.9v206.3c0,12.9,10.5,23.4,23.4,23.4h27C80.3,276.6,85.5,281.8,85.5,288.3L85.5,288.3z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M190.9,82c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7S52,93.7,58.5,93.7h120.7\n                        C185.7,93.7,190.9,88.5,190.9,82L190.9,82z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M144.1,128.9c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h73.9\n                        C138.9,140.6,144.1,135.4,144.1,128.9L144.1,128.9z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M58.5,164.1c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h48.7c6.5,0,11.7-5.2,11.7-11.7s-5.2-11.7-11.7-11.7\n                        H58.5z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M295.4,247.5c-0.1-0.2-0.1-0.5-0.2-0.7c-3.2-14.3-11.1-27.3-22.5-36.5c-4.4-3.6-9.2-6.6-14.3-9\n                        c5.7-6.4,9.1-14.9,9.1-24.1c0-20.2-16.4-36.6-36.6-36.6c-9.2,0-17.6,3.4-24,9c-8.1-7.4-18.9-11.9-30.7-11.9\n                        c-25.2,0-45.7,20.5-45.7,45.7c0,11.5,4.3,22.1,11.4,30.1c-6.4,2.9-12.4,6.7-17.8,11.2c-14.4,11.9-24.4,28.5-28.2,46.7\n                        c-1.5,7,0.3,14.3,4.8,19.8s11.2,8.7,18.3,8.7h114.4c7.1,0,13.7-3.2,18.3-8.7c4.4-5.6,6.2-12.9,4.8-20c-0.1-0.2-0.1-0.4-0.1-0.6h20.4\n                        c5.7,0,11-2.6,14.7-7C295,259,296.5,253.2,295.4,247.5z M218,164.7c3.3-3.4,7.8-5.5,12.9-5.5c9.9,0,17.9,8,17.9,17.9\n                        s-8,17.9-17.9,17.9c-3.6,0-7-1.1-9.8-2.9c-4.9-3.2-8.1-8.7-8.1-15C213,172.3,214.9,167.9,218,164.7z M176.2,160.9\n                        c7.8,0,14.7,4.1,18.7,10.2c2.3,3.5,3.6,7.7,3.6,12.1c0,2.7-0.5,5.3-1.4,7.7c-3.1,8.5-11.3,14.6-20.9,14.6c-12.3,0-22.3-10-22.3-22.3\n                        C153.9,170.9,163.9,160.9,176.2,160.9z M233.4,276.3H118.9c0,0-0.2-0.1-0.1-0.4c5.4-26.2,28.3-45.5,54.8-46.7c0.9,0,1.8-0.1,2.6-0.1\n                        c6.2,0,12.1,1,17.8,2.8c11.2,3.6,21,10.6,28.3,19.8c4.4,5.5,7.8,11.9,9.9,18.8c0.6,1.8,1,3.6,1.4,5.5\n                        C233.6,276.2,233.4,276.3,233.4,276.3z M276.8,251.7h-27c-5.1-10.4-12.4-19.7-21.4-27.1c-3.9-3.1-7.9-6-12.2-8.3\n                        c4.7-1.6,9.6-2.4,14.8-2.4c22.1,0,41.5,15.9,46,37.6C276.9,251.6,276.8,251.7,276.8,251.7z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st1",
                            attrs: { d: "M244.9,276.2L244.9,276.2z" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "pl-3 text-sm" }, [
                        _vm._v("Local Council List")
                      ])
                    ]
                  )
                ]
              )
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.currentUser.role_id == 1
          ? [
              _c(
                "router-link",
                {
                  staticClass: "hover:bg-gray-100",
                  attrs: { to: "/districtDivision" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500",
                      on: { click: _vm.clearDropdown }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "w-5 h-5",
                          staticStyle: {
                            "enable-background": "new 0 0 300 300"
                          },
                          attrs: {
                            version: "1.1",
                            id: "Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 300 300",
                            "xml:space": "preserve"
                          }
                        },
                        [
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M85.5,288.3c0,6.5-5.2,11.7-11.7,11.7h-27C21,300,0,279,0,253.1V46.9C0,21,21,0,46.9,0H191\n                        c25.8,0,46.9,21,46.9,46.9v69.7c0,6.5-5.2,11.7-11.7,11.7s-11.7-5.2-11.7-11.7V46.9c0-12.9-10.5-23.4-23.4-23.4H46.9\n                        C34,23.4,23.4,34,23.4,46.9v206.3c0,12.9,10.5,23.4,23.4,23.4h27C80.3,276.6,85.5,281.8,85.5,288.3L85.5,288.3z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M190.9,82c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7S52,93.7,58.5,93.7h120.7\n                        C185.7,93.7,190.9,88.5,190.9,82L190.9,82z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M144.1,128.9c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h73.9\n                        C138.9,140.6,144.1,135.4,144.1,128.9L144.1,128.9z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M58.5,164.1c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h48.7c6.5,0,11.7-5.2,11.7-11.7s-5.2-11.7-11.7-11.7\n                        H58.5z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M295.4,247.5c-0.1-0.2-0.1-0.5-0.2-0.7c-3.2-14.3-11.1-27.3-22.5-36.5c-4.4-3.6-9.2-6.6-14.3-9\n                        c5.7-6.4,9.1-14.9,9.1-24.1c0-20.2-16.4-36.6-36.6-36.6c-9.2,0-17.6,3.4-24,9c-8.1-7.4-18.9-11.9-30.7-11.9\n                        c-25.2,0-45.7,20.5-45.7,45.7c0,11.5,4.3,22.1,11.4,30.1c-6.4,2.9-12.4,6.7-17.8,11.2c-14.4,11.9-24.4,28.5-28.2,46.7\n                        c-1.5,7,0.3,14.3,4.8,19.8s11.2,8.7,18.3,8.7h114.4c7.1,0,13.7-3.2,18.3-8.7c4.4-5.6,6.2-12.9,4.8-20c-0.1-0.2-0.1-0.4-0.1-0.6h20.4\n                        c5.7,0,11-2.6,14.7-7C295,259,296.5,253.2,295.4,247.5z M218,164.7c3.3-3.4,7.8-5.5,12.9-5.5c9.9,0,17.9,8,17.9,17.9\n                        s-8,17.9-17.9,17.9c-3.6,0-7-1.1-9.8-2.9c-4.9-3.2-8.1-8.7-8.1-15C213,172.3,214.9,167.9,218,164.7z M176.2,160.9\n                        c7.8,0,14.7,4.1,18.7,10.2c2.3,3.5,3.6,7.7,3.6,12.1c0,2.7-0.5,5.3-1.4,7.7c-3.1,8.5-11.3,14.6-20.9,14.6c-12.3,0-22.3-10-22.3-22.3\n                        C153.9,170.9,163.9,160.9,176.2,160.9z M233.4,276.3H118.9c0,0-0.2-0.1-0.1-0.4c5.4-26.2,28.3-45.5,54.8-46.7c0.9,0,1.8-0.1,2.6-0.1\n                        c6.2,0,12.1,1,17.8,2.8c11.2,3.6,21,10.6,28.3,19.8c4.4,5.5,7.8,11.9,9.9,18.8c0.6,1.8,1,3.6,1.4,5.5\n                        C233.6,276.2,233.4,276.3,233.4,276.3z M276.8,251.7h-27c-5.1-10.4-12.4-19.7-21.4-27.1c-3.9-3.1-7.9-6-12.2-8.3\n                        c4.7-1.6,9.6-2.4,14.8-2.4c22.1,0,41.5,15.9,46,37.6C276.9,251.6,276.8,251.7,276.8,251.7z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "st1",
                            attrs: { d: "M244.9,276.2L244.9,276.2z" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "pl-3 text-sm" }, [
                        _vm._v("Local Council List")
                      ])
                    ]
                  )
                ]
              )
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.currentUser.role_id == 2
          ? [
              _c("router-link", { attrs: { to: "/engineerAdd" } }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500 ",
                    on: { click: _vm.clearDropdown }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "w-5 h-5",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          width: "30",
                          height: "30",
                          viewBox: "0 0 30 30"
                        }
                      },
                      [
                        _c("defs", [
                          _c("clipPath", { attrs: { id: "clip-path" } }, [
                            _c("rect", {
                              attrs: {
                                id: "Rectangle_211",
                                "data-name": "Rectangle 211",
                                width: "30",
                                height: "30",
                                transform: "translate(90 426)",
                                fill: "#ff1a68",
                                stroke: "#707070",
                                "stroke-width": "1"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "g",
                          {
                            attrs: {
                              id: "Mask_Group_9",
                              "data-name": "Mask Group 9",
                              transform: "translate(-90 -426)",
                              "clip-path": "url(#clip-path)"
                            }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  id: "add_LC",
                                  "data-name": "add LC",
                                  transform: "translate(89.936 425.649)"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    id: "Path_134",
                                    "data-name": "Path 134",
                                    d: "M6.041,16.778",
                                    fill: "#ff1a68"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    id: "Path_135",
                                    "data-name": "Path 135",
                                    d:
                                      "M21.595,15.4a16.4,16.4,0,0,0-1.761-.708,7.957,7.957,0,1,0-9.532.01A14.876,14.876,0,0,0,5.383,17.4,15.266,15.266,0,0,0,.142,26.047a3.573,3.573,0,0,0,3.481,4.3h14.43a1.174,1.174,0,0,0,0-2.348H3.613a1.233,1.233,0,0,1-.941-.445,1.2,1.2,0,0,1-.243-1.022A12.941,12.941,0,0,1,14.744,16.282c.1,0,.2.01.314.01s.213,0,.314-.01a12.756,12.756,0,0,1,5.222,1.235,1.17,1.17,0,0,0,1-2.115Zm-6.254-1.467h-.567a5.626,5.626,0,1,1,.567,0Z",
                                    fill: "#ff1a68"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    id: "Path_136",
                                    "data-name": "Path 136",
                                    d:
                                      "M28.891,23.608H25.673V20.39a1.174,1.174,0,0,0-2.348,0v3.218H20.107a1.174,1.174,0,1,0,0,2.348h3.218v3.218a1.174,1.174,0,0,0,2.348,0V25.956h3.218a1.174,1.174,0,1,0,0-2.348Zm0,0",
                                    fill: "#ff1a68"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "pl-3 text-sm" }, [
                      _vm._v("Add Engineer")
                    ])
                  ]
                )
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "hover:bg-gray-100", attrs: { to: "/engineerList" } },
          [
            _c(
              "button",
              {
                staticClass:
                  "flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500",
                on: { click: _vm.clearDropdown }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "w-5 h-5",
                    staticStyle: { "enable-background": "new 0 0 300 300" },
                    attrs: {
                      version: "1.1",
                      id: "Layer_1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 300 300",
                      "xml:space": "preserve"
                    }
                  },
                  [
                    _c("path", {
                      staticClass: "st1",
                      attrs: {
                        d:
                          "M85.5,288.3c0,6.5-5.2,11.7-11.7,11.7h-27C21,300,0,279,0,253.1V46.9C0,21,21,0,46.9,0H191\n                        c25.8,0,46.9,21,46.9,46.9v69.7c0,6.5-5.2,11.7-11.7,11.7s-11.7-5.2-11.7-11.7V46.9c0-12.9-10.5-23.4-23.4-23.4H46.9\n                        C34,23.4,23.4,34,23.4,46.9v206.3c0,12.9,10.5,23.4,23.4,23.4h27C80.3,276.6,85.5,281.8,85.5,288.3L85.5,288.3z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "st1",
                      attrs: {
                        d:
                          "M190.9,82c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7S52,93.7,58.5,93.7h120.7\n                        C185.7,93.7,190.9,88.5,190.9,82L190.9,82z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "st1",
                      attrs: {
                        d:
                          "M144.1,128.9c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h73.9\n                        C138.9,140.6,144.1,135.4,144.1,128.9L144.1,128.9z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "st1",
                      attrs: {
                        d:
                          "M58.5,164.1c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h48.7c6.5,0,11.7-5.2,11.7-11.7s-5.2-11.7-11.7-11.7\n                        H58.5z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "st1",
                      attrs: {
                        d:
                          "M295.4,247.5c-0.1-0.2-0.1-0.5-0.2-0.7c-3.2-14.3-11.1-27.3-22.5-36.5c-4.4-3.6-9.2-6.6-14.3-9\n                        c5.7-6.4,9.1-14.9,9.1-24.1c0-20.2-16.4-36.6-36.6-36.6c-9.2,0-17.6,3.4-24,9c-8.1-7.4-18.9-11.9-30.7-11.9\n                        c-25.2,0-45.7,20.5-45.7,45.7c0,11.5,4.3,22.1,11.4,30.1c-6.4,2.9-12.4,6.7-17.8,11.2c-14.4,11.9-24.4,28.5-28.2,46.7\n                        c-1.5,7,0.3,14.3,4.8,19.8s11.2,8.7,18.3,8.7h114.4c7.1,0,13.7-3.2,18.3-8.7c4.4-5.6,6.2-12.9,4.8-20c-0.1-0.2-0.1-0.4-0.1-0.6h20.4\n                        c5.7,0,11-2.6,14.7-7C295,259,296.5,253.2,295.4,247.5z M218,164.7c3.3-3.4,7.8-5.5,12.9-5.5c9.9,0,17.9,8,17.9,17.9\n                        s-8,17.9-17.9,17.9c-3.6,0-7-1.1-9.8-2.9c-4.9-3.2-8.1-8.7-8.1-15C213,172.3,214.9,167.9,218,164.7z M176.2,160.9\n                        c7.8,0,14.7,4.1,18.7,10.2c2.3,3.5,3.6,7.7,3.6,12.1c0,2.7-0.5,5.3-1.4,7.7c-3.1,8.5-11.3,14.6-20.9,14.6c-12.3,0-22.3-10-22.3-22.3\n                        C153.9,170.9,163.9,160.9,176.2,160.9z M233.4,276.3H118.9c0,0-0.2-0.1-0.1-0.4c5.4-26.2,28.3-45.5,54.8-46.7c0.9,0,1.8-0.1,2.6-0.1\n                        c6.2,0,12.1,1,17.8,2.8c11.2,3.6,21,10.6,28.3,19.8c4.4,5.5,7.8,11.9,9.9,18.8c0.6,1.8,1,3.6,1.4,5.5\n                        C233.6,276.2,233.4,276.3,233.4,276.3z M276.8,251.7h-27c-5.1-10.4-12.4-19.7-21.4-27.1c-3.9-3.1-7.9-6-12.2-8.3\n                        c4.7-1.6,9.6-2.4,14.8-2.4c22.1,0,41.5,15.9,46,37.6C276.9,251.6,276.8,251.7,276.8,251.7z"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "st1",
                      attrs: { d: "M244.9,276.2L244.9,276.2z" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "pl-3 text-sm" }, [
                  _vm._v("Engineer List")
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "/userList" } }, [
          _c(
            "button",
            {
              staticClass:
                "flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500",
              on: { click: _vm.clearDropdown }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "w-5 h-5",
                  staticStyle: { "enable-background": "new 0 0 300 300" },
                  attrs: {
                    version: "1.1",
                    id: "Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 300 300",
                    "xml:space": "preserve"
                  }
                },
                [
                  _c("path", {
                    staticClass: "st1",
                    attrs: {
                      d:
                        "M85.5,288.3c0,6.5-5.2,11.7-11.7,11.7h-27C21,300,0,279,0,253.1V46.9C0,21,21,0,46.9,0H191\n                        c25.8,0,46.9,21,46.9,46.9v69.7c0,6.5-5.2,11.7-11.7,11.7c-6.5,0-11.7-5.2-11.7-11.7V46.9c0-12.9-10.5-23.4-23.4-23.4H46.9\n                        C34,23.4,23.4,34,23.4,46.9v206.3c0,12.9,10.5,23.4,23.4,23.4h27C80.3,276.6,85.5,281.8,85.5,288.3L85.5,288.3z"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    staticClass: "st1",
                    attrs: {
                      d:
                        "M190.9,82c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7c0,6.5,5.2,11.7,11.7,11.7h120.7\n                        C185.7,93.7,190.9,88.5,190.9,82L190.9,82z"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    staticClass: "st1",
                    attrs: {
                      d:
                        "M144.1,128.9c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7c0,6.5,5.2,11.7,11.7,11.7h73.9\n                        C138.9,140.6,144.1,135.4,144.1,128.9L144.1,128.9z"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    staticClass: "st1",
                    attrs: {
                      d:
                        "M58.5,164.1c-6.5,0-11.7,5.2-11.7,11.7c0,6.5,5.2,11.7,11.7,11.7h48.7c6.5,0,11.7-5.2,11.7-11.7\n                        c0-6.5-5.2-11.7-11.7-11.7H58.5z"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    staticClass: "st1",
                    attrs: {
                      d:
                        "M267.9,271.3c-0.1-0.3-0.1-0.6-0.2-0.9c-4-17.8-13.9-34-28-45.6c-5.5-4.5-11.5-8.3-17.8-11.2\n                        c7.1-8,11.4-18.6,11.4-30.1c0-25.2-20.5-45.7-45.7-45.7s-45.7,20.5-45.7,45.7c0,11.5,4.3,22.1,11.4,30.1\n                        c-6.4,2.9-12.4,6.7-17.8,11.2c-14.4,11.9-24.4,28.5-28.2,46.7c-1.5,7,0.3,14.3,4.8,19.8c4.5,5.5,11.2,8.7,18.3,8.7h114.4\n                        c7.1,0,13.7-3.2,18.3-8.7C267.5,285.7,269.3,278.4,267.9,271.3z M187.5,161.1c12.3,0,22.3,10,22.3,22.3c0,12.3-10,22.3-22.3,22.3\n                        s-22.3-10-22.3-22.3C165.2,171.1,175.2,161.1,187.5,161.1z M244.9,276.2c0,0.2-0.2,0.3-0.2,0.3H130.3c0,0-0.1,0-0.1,0\n                        s-0.2-0.1-0.1-0.4c5.6-27.1,29.8-46.8,57.4-46.8S239.3,249.1,244.9,276.2C244.9,276.2,244.9,276.2,244.9,276.2z"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    staticClass: "st1",
                    attrs: { d: "M244.9,276.2L244.9,276.2z" }
                  })
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "pl-3 text-sm" }, [_vm._v("User List")])
            ]
          )
        ]),
        _vm._v(" "),
        _vm.currentUser.role_id == 2 || _vm.currentUser.role_id == 1
          ? [
              _c("router-link", { attrs: { to: "/userAdd" } }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500",
                    on: { click: _vm.clearDropdown }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "w-5 h-5",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          width: "30",
                          height: "30",
                          viewBox: "0 0 30 30"
                        }
                      },
                      [
                        _c("defs", [
                          _c("clipPath", { attrs: { id: "clip-path" } }, [
                            _c("rect", {
                              attrs: {
                                id: "Rectangle_211",
                                "data-name": "Rectangle 211",
                                width: "30",
                                height: "30",
                                transform: "translate(90 426)",
                                fill: "#ff1a68",
                                stroke: "#707070",
                                "stroke-width": "1"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "g",
                          {
                            attrs: {
                              id: "Mask_Group_9",
                              "data-name": "Mask Group 9",
                              transform: "translate(-90 -426)",
                              "clip-path": "url(#clip-path)"
                            }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  id: "add_LC",
                                  "data-name": "add LC",
                                  transform: "translate(89.936 425.649)"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    id: "Path_134",
                                    "data-name": "Path 134",
                                    d: "M6.041,16.778",
                                    fill: "#ff1a68"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    id: "Path_135",
                                    "data-name": "Path 135",
                                    d:
                                      "M21.595,15.4a16.4,16.4,0,0,0-1.761-.708,7.957,7.957,0,1,0-9.532.01A14.876,14.876,0,0,0,5.383,17.4,15.266,15.266,0,0,0,.142,26.047a3.573,3.573,0,0,0,3.481,4.3h14.43a1.174,1.174,0,0,0,0-2.348H3.613a1.233,1.233,0,0,1-.941-.445,1.2,1.2,0,0,1-.243-1.022A12.941,12.941,0,0,1,14.744,16.282c.1,0,.2.01.314.01s.213,0,.314-.01a12.756,12.756,0,0,1,5.222,1.235,1.17,1.17,0,0,0,1-2.115Zm-6.254-1.467h-.567a5.626,5.626,0,1,1,.567,0Z",
                                    fill: "#ff1a68"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    id: "Path_136",
                                    "data-name": "Path 136",
                                    d:
                                      "M28.891,23.608H25.673V20.39a1.174,1.174,0,0,0-2.348,0v3.218H20.107a1.174,1.174,0,1,0,0,2.348h3.218v3.218a1.174,1.174,0,0,0,2.348,0V25.956h3.218a1.174,1.174,0,1,0,0-2.348Zm0,0",
                                    fill: "#ff1a68"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "pl-3 text-sm" }, [
                      _vm._v("Add User")
                    ])
                  ]
                )
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "/trackForm" } }, [
          _c(
            "button",
            {
              staticClass:
                "flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500",
              on: { click: _vm.clearDropdown }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "w-5 h-5",
                  staticStyle: { "enable-background": "new 0 0 300 300" },
                  attrs: {
                    version: "1.1",
                    id: "Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 300 300",
                    "xml:space": "preserve"
                  }
                },
                [
                  _c("path", {
                    staticClass: "st1",
                    attrs: {
                      d:
                        "M124.7,1.3C56,1.3,0.1,48.4,0.1,106.2c0,72.3,111.9,185.8,116.6,190.6c4.1,4.2,11.8,4.2,15.9,0\n                        c4.8-4.8,116.6-118.4,116.6-190.6C249.3,48.4,193.4,1.3,124.7,1.3L124.7,1.3z M124.7,277.3C99.2,249.9,20.9,161.7,20.9,106.2\n                        c0-48.2,46.6-87.4,103.8-87.4S228.6,58,228.6,106.2C228.6,161.7,150.3,249.9,124.7,277.3L124.7,277.3z M124.7,277.3"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "st2",
                    attrs: { y: "1.3", width: "249.5", height: "298.7" }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    staticClass: "st1",
                    attrs: {
                      d:
                        "M197.4,105.4h-11.3c-4.4-23.7-25-42.5-51.1-46.5V48.6c0-5.2-4.6-9.5-10.4-9.5c-5.7,0-10.4,4.2-10.4,9.5v10.3\n                        c-26.1,4-46.7,22.8-51.1,46.5H52c-5.7,0-10.4,4.2-10.4,9.5s4.6,9.5,10.4,9.5h11.3c4.4,23.7,25,42.5,51.1,46.5v10.3\n                        c0,5.2,4.6,9.5,10.4,9.5c5.7,0,10.4-4.2,10.4-9.5v-10.3c26.1-4,46.7-22.8,51.1-46.5h11.3c5.7,0,10.4-4.2,10.4-9.5\n                        S203.2,105.4,197.4,105.4L197.4,105.4z M124.7,152.7c-22.9,0-41.5-17-41.5-37.8C83.2,94,101.8,77,124.7,77s41.5,17,41.5,37.8\n                        C166.3,135.7,147.6,152.7,124.7,152.7L124.7,152.7z M124.7,152.7"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "pl-3 text-sm" }, [_vm._v("Track Form")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "/profile" } }, [
          _c(
            "button",
            {
              staticClass:
                "flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500",
              on: { click: _vm.clearDropdown }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "w-5 h-5",
                  staticStyle: { "enable-background": "new 0 0 300 300" },
                  attrs: {
                    version: "1.1",
                    id: "Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 300 300",
                    "xml:space": "preserve"
                  }
                },
                [
                  _c("g", [
                    _c("path", {
                      staticClass: "st1",
                      attrs: {
                        d:
                          "M279,191.6c-9.8-8.6-21.7-16.1-35.4-22.1c-5.8-2.6-12.7,0-15.3,5.9c-2.6,5.8,0,12.7,5.9,15.3\n                            c11.5,5.1,21.4,11.3,29.5,18.4c9.9,8.7,15.6,21.4,15.6,34.7v21.4c0,6.4-5.2,11.6-11.6,11.6H41.1c-6.4,0-11.6-5.2-11.6-11.6v-21.4\n                            c0-13.3,5.7-25.9,15.6-34.7c11.7-10.3,45.7-34.2,109.3-34.2c47.2,0,85.6-38.4,85.6-85.6S201.6,3.6,154.4,3.6S68.8,42,68.8,89.2\n                            c0,27.6,13.1,52.2,33.5,67.8C65.1,165.3,42,181,29.9,191.6c-14.9,13.1-23.5,32.1-23.5,52v21.4c0,19.1,15.6,34.7,34.7,34.7h226.7\n                            c19.1,0,34.7-15.6,34.7-34.7v-21.4C302.5,223.7,293.9,204.7,279,191.6L279,191.6z M92,89.2c0-34.4,28-62.5,62.5-62.5\n                            s62.5,28,62.5,62.5s-28,62.5-62.5,62.5S92,123.7,92,89.2L92,89.2z M92,89.2"
                      }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "pl-3 text-sm" }, [_vm._v("Profile")])
            ]
          )
        ]),
        _vm._v(" "),
        _vm.currentUser.role_id == 2
          ? [
              _c("router-link", { attrs: { to: "/feature" } }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "flex flex-row pt-4 pb-4 pl-5 focus:outline-none hover:text-gray-500",
                    on: { click: _vm.clearDropdown }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "w-5 h-5",
                        staticStyle: { "enable-background": "new 0 0 300 300" },
                        attrs: {
                          version: "1.1",
                          id: "Layer_1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          x: "0px",
                          y: "0px",
                          viewBox: "0 0 300 300",
                          "xml:space": "preserve"
                        }
                      },
                      [
                        _c("g", [
                          _c("path", {
                            staticClass: "st1",
                            attrs: {
                              d:
                                "M279,191.6c-9.8-8.6-21.7-16.1-35.4-22.1c-5.8-2.6-12.7,0-15.3,5.9c-2.6,5.8,0,12.7,5.9,15.3\n                                c11.5,5.1,21.4,11.3,29.5,18.4c9.9,8.7,15.6,21.4,15.6,34.7v21.4c0,6.4-5.2,11.6-11.6,11.6H41.1c-6.4,0-11.6-5.2-11.6-11.6v-21.4\n                                c0-13.3,5.7-25.9,15.6-34.7c11.7-10.3,45.7-34.2,109.3-34.2c47.2,0,85.6-38.4,85.6-85.6S201.6,3.6,154.4,3.6S68.8,42,68.8,89.2\n                                c0,27.6,13.1,52.2,33.5,67.8C65.1,165.3,42,181,29.9,191.6c-14.9,13.1-23.5,32.1-23.5,52v21.4c0,19.1,15.6,34.7,34.7,34.7h226.7\n                                c19.1,0,34.7-15.6,34.7-34.7v-21.4C302.5,223.7,293.9,204.7,279,191.6L279,191.6z M92,89.2c0-34.4,28-62.5,62.5-62.5\n                                s62.5,28,62.5,62.5s-28,62.5-62.5,62.5S92,123.7,92,89.2L92,89.2z M92,89.2"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "pl-3 text-sm" }, [
                      _vm._v("Features")
                    ])
                  ]
                )
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "flex flex-row py-4 pl-5 focus:outline-none hover:text-gray-500",
            on: { click: _vm.logout }
          },
          [
            _c(
              "svg",
              {
                staticClass: "w-5 h-5",
                staticStyle: { "enable-background": "new 0 0 300 300" },
                attrs: {
                  version: "1.1",
                  id: "Layer_1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  x: "0px",
                  y: "0px",
                  viewBox: "0 0 300 300",
                  "xml:space": "preserve"
                }
              },
              [
                _c("g", [
                  _c("path", {
                    staticClass: "st1",
                    attrs: {
                      d:
                        "M205.3,232c-6.5,0-11.7,5.2-11.7,11.7v32.8H26V23.4h167.6v32.8c0,6.5,5.2,11.7,11.7,11.7\n                        c6.5,0,11.7-5.2,11.7-11.7V11.7C217,5.2,211.8,0,205.3,0h-191C7.8,0,2.6,5.2,2.6,11.7v276.6c0,6.5,5.2,11.7,11.7,11.7h191\n                        c6.5,0,11.7-5.2,11.7-11.7v-44.5C217,237.3,211.8,232,205.3,232L205.3,232z M205.3,232"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    staticClass: "st1",
                    attrs: {
                      d:
                        "M281.6,141.7l-31.5-31.5c-4.6-4.6-12-4.6-16.6,0c-4.6,4.6-4.6,12,0,16.6l11.5,11.5h-97.1\n                        c-6.5,0-11.7,5.2-11.7,11.7c0,6.5,5.2,11.7,11.7,11.7H245l-11.5,11.5c-4.6,4.6-4.6,12,0,16.6c4.6,4.6,12,4.6,16.6,0l31.5-31.5l0,0\n                        c2.4-2.4,3.3-5.1,3.4-8.3C285,146.8,283.6,143.8,281.6,141.7L281.6,141.7z M281.6,141.7"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "pl-3 text-sm" }, [_vm._v("Logout")])
          ]
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DropdownUser.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/DropdownUser.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropdownUser_vue_vue_type_template_id_c7eaed32_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownUser.vue?vue&type=template&id=c7eaed32&scoped=true& */ "./resources/js/components/DropdownUser.vue?vue&type=template&id=c7eaed32&scoped=true&");
/* harmony import */ var _DropdownUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownUser.vue?vue&type=script&lang=js& */ "./resources/js/components/DropdownUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DropdownUser_vue_vue_type_style_index_0_id_c7eaed32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css& */ "./resources/js/components/DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DropdownUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownUser_vue_vue_type_template_id_c7eaed32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropdownUser_vue_vue_type_template_id_c7eaed32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c7eaed32",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DropdownUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DropdownUser.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/DropdownUser.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropdownUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownUser_vue_vue_type_style_index_0_id_c7eaed32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropdownUser.vue?vue&type=style&index=0&id=c7eaed32&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownUser_vue_vue_type_style_index_0_id_c7eaed32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownUser_vue_vue_type_style_index_0_id_c7eaed32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownUser_vue_vue_type_style_index_0_id_c7eaed32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownUser_vue_vue_type_style_index_0_id_c7eaed32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/DropdownUser.vue?vue&type=template&id=c7eaed32&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/DropdownUser.vue?vue&type=template&id=c7eaed32&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownUser_vue_vue_type_template_id_c7eaed32_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DropdownUser.vue?vue&type=template&id=c7eaed32&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropdownUser.vue?vue&type=template&id=c7eaed32&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownUser_vue_vue_type_template_id_c7eaed32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownUser_vue_vue_type_template_id_c7eaed32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);