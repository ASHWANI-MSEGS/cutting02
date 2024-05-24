(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Dashboard",
  data: function data() {
    return {
      bgImage: "/img/dashboard1.png",
      division_id: this.$route.params.id != null ? this.$route.params.id : this.$store.getters.currentUser.division_id,
      formSubmitTotal: '',
      formRejectedTotal: '',
      formCountUn: '',
      formCountAp: '',
      estimateCountUn: '',
      estimateCount: '',
      estimateAmount: '',
      estimateDeposit: '',
      estimateTotal: '',
      paymentReceived: '',
      localcouncilSouthno: '',
      localcouncilNorthno: '',
      localcouncilNo: '',
      engineerSouthno: '',
      engineerNorthno: '',
      engineerNo: '',
      depositRefunded: '',
      depositTobeRefunded: '',
      depositFine: '',
      depositReturnedNo: '',
      depositTobeReturNo: '',
      divisions: ['', 'Aizawl Road South', 'Aizawl Road North', 'ADMIN', 'Champhai ', 'Lunglei ', 'Saitual ', 'Mamit ', 'Siaha ', 'Khawzawl ', 'Kolasib ', 'Lawngtlai ', 'Serchhip ', 'Lunglei  Div-II, Hnahthial ', 'Hmuifang Division ', 'National Highway Div-I ', 'National Highway Div-III ']
    };
  },
  mounted: function mounted() {
    var _this = this;

    //  let id = null
    //         // console.log( typeof this.$store.getters.currentUser.division_id);
    // if(this.$route.params.id != null){
    //     id = this.$store.getters.currentUser.division_id;
    // }else{
    //     id = this.$route.params.id;
    // }
    // console.log(id,"            ig");
    axios.get('/api/dashboard/' + this.division_id, {
      headers: {
        "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
      }
    }).then(function (response) {
      console.log(response.data); // console.log("geting the data of the list".this.formSubmitTotalList);

      _this.formSubmitTotal = response.data.formSubmitTotal;
      _this.formRejectedTotal = response.data.formRejectedTotal;
      _this.estimateAmount = response.data.estimateAmount;
      _this.estimateDeposit = response.data.estimateDeposit;
      _this.estimateTotal = response.data.estimateTotal;
      _this.paymentReceived = response.data.paymentReceived;
      _this.localcouncilSouthno = response.data.localcouncilSouthno;
      _this.localcouncilNorthno = response.data.localcouncilNorthno;
      _this.localcouncilNo = response.data.localcouncilNo;
      _this.engineerSouthno = response.data.engineerSouthno;
      _this.engineerNorthno = response.data.engineerNorthno;
      _this.engineerNo = response.data.engineerNo;
      _this.depositRefunded = response.data.depositRefunded, _this.depositTobeRefunded = response.data.depositTobeRefunded, _this.depositFine = response.data.depositFine, _this.depositReturnedNo = response.data.depositReturnedNo, _this.depositTobeReturNo = response.data.depositTobeReturNo, // this.division_id = this.$store.getters.currentUser.division_id,
      _this.loading = false;
    })["catch"](function (error) {
      _this.loading = false;

      if (error.response.status === 404) {
        _this.$router.push('/forms');
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "pb-16 " }, [
      _c(
        "div",
        {
          staticClass:
            "flex h-auto mx-0 my-0 bg-white rounded-lg md:mx-8 md:my-8"
        },
        [
          _c("div", { staticClass: "w-1/2 pl-12 pr-40 my-16 " }, [
            _c(
              "p",
              {
                staticClass: "text-4xl font-medium leading-tight text-gray-900"
              },
              [
                _vm._v("Welcome to "),
                _c("span", { staticClass: "underline underline-offset-8" }, [
                  _vm._v(_vm._s(_vm.divisions[_vm.division_id]))
                ]),
                _vm._v("  Dashboard\n                    "),
                _c("br", { staticClass: "hidden lg:inline" })
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "hidden mt-4 text-base text-gray-600 lg:block" },
              [
                _vm._v(
                  "\n                    You can apply for road cutting permit from home, work place or around the globe\n                "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "hidden w-1/2 lg:block lg:relative " }, [
            _c("img", {
              staticClass:
                "absolute inset-0 object-cover object-center w-full h-full rounded-r-lg ",
              attrs: { src: _vm.bgImage }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "grid h-full grid-cols-1 gap-4 mx-0 my-0 rounded-lg lg:grid-cols-2 md:mx-8 md:my-8"
        },
        [
          _c("div", { staticClass: "bg-white rounded-lg shadow-xl " }, [
            _c("div", { staticClass: "flex justify-between px-2 py-2 mx-8" }, [
              _c("div", { staticClass: "flex flex-col " }, [
                _c("p", { staticClass: "py-1 text-sm text-gray-600" }, [
                  _vm._v("FORM SUBMITTED")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "py-1 text-xl font-semibold" }, [
                  _vm._v(_vm._s(_vm.formSubmitTotal))
                ]),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _vm._m(1)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bg-white rounded-lg shadow-xl " }, [
            _c("div", { staticClass: "flex justify-between px-2 py-2 mx-8" }, [
              _c("div", { staticClass: "flex flex-col " }, [
                _c("p", { staticClass: "py-1 text-sm text-gray-600" }, [
                  _vm._v("FORM REJECTED")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "py-1 text-xl font-semibold" }, [
                  _vm._v(_vm._s(_vm.formRejectedTotal))
                ]),
                _vm._v(" "),
                _vm._m(2)
              ]),
              _vm._v(" "),
              _vm._m(3)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bg-white rounded-lg shadow-xl " }, [
            _c("div", { staticClass: "flex justify-center mt-4" }, [
              _c(
                "svg",
                {
                  attrs: {
                    width: "76px",
                    height: "76px",
                    viewBox: "0 0 80 80",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                  }
                },
                [
                  _c("title", [_vm._v("E0CB639A-0709-43F1-B7DF-433C76595115")]),
                  _vm._v(" "),
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "Others",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                      }
                    },
                    [
                      _c(
                        "g",
                        {
                          attrs: {
                            id: "PWD",
                            transform: "translate(-286.000000, -2722.000000)"
                          }
                        },
                        [
                          _c(
                            "g",
                            {
                              attrs: {
                                id: "Group-4",
                                transform: "translate(286.000000, 2722.000000)"
                              }
                            },
                            [
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle",
                                  x: "0",
                                  y: "0",
                                  width: "80",
                                  height: "80"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "g",
                                {
                                  attrs: {
                                    id: "Group-3",
                                    transform: "translate(7.878788, 6.060606)"
                                  }
                                },
                                [
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        id: "purchase-summary",
                                        "fill-rule": "nonzero"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M35.7265264,6.66666667 L47.5771383,6.66666667 C49.7519312,6.66666667 51.5151515,8.43768777 51.5151515,10.6221024 L51.5151515,62.7107136 C51.5151515,64.8956456 49.7519312,66.6666667 47.5771383,66.6666667 L5.15064946,66.6666667 C2.97534149,66.6666667 1.21212121,64.8956456 1.21212121,62.7107136 L1.21212121,10.6221024 C1.21212121,8.43768777 2.97534149,6.66666667 5.15064946,6.66666667 L17.0888301,6.66666667",
                                          id: "Path",
                                          fill: "#ADC5F6"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        attrs: {
                                          id: "Path",
                                          fill: "#F9F9F9",
                                          points:
                                            "38.0666102 12.7272727 46.0606061 12.7272727 46.0606061 60.6060606 7.27272727 60.6060606 7.27272727 12.7272727 15.2220175 12.7272727"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M32.1452466,6.32147206 C31.9874157,3.49533846 29.5952765,1.21212121 26.6669237,1.21212121 C23.7385709,1.21212121 21.3459176,3.49533846 21.1880867,6.32147206 L15.7575758,6.32147206 L15.7575758,10.0835099 C15.7575758,13.5518304 18.5825931,16.3636364 22.0677235,16.3636364 L31.2661239,16.3636364 C34.7507402,16.3636364 37.5757576,13.5518304 37.5757576,10.0835099 L37.5757576,6.32147206 L32.1452466,6.32147206 Z",
                                          id: "Path",
                                          fill: "#1F4490"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M26.6656105,24.8484848 C26.1514223,24.8484848 25.6827289,24.5104339 25.5178096,24.024456 C25.3566814,23.5522277 25.510701,23.013622 25.8959868,22.6969067 C26.2926463,22.3716572 26.870338,22.3332531 27.3063318,22.6039782 C27.7300039,22.8666434 27.9546355,23.3829652 27.8555891,23.8717879 C27.7418516,24.4322033 27.2385631,24.8484848 26.6656105,24.8484848 Z",
                                          id: "Path",
                                          fill: "#000000"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M20.481245,24.8484848 L15.8823914,24.8484848 C15.1444649,24.8484848 14.5454545,24.3058712 14.5454545,23.6363636 C14.5454545,22.9673295 15.1444649,22.4242424 15.8823914,22.4242424 L20.481245,22.4242424 C21.2196938,22.4242424 21.8181818,22.9673295 21.8181818,23.6363636 C21.8181818,24.3058712 21.2196938,24.8484848 20.481245,24.8484848 Z",
                                          id: "Path",
                                          fill: "#000000"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M37.4215533,24.8484848 L32.2754164,24.8484848 C31.5207351,24.8484848 30.9090909,24.3058712 30.9090909,23.6363636 C30.9090909,22.9673295 31.5207351,22.4242424 32.2754164,22.4242424 L37.4215533,22.4242424 C38.1762346,22.4242424 38.7878788,22.9673295 38.7878788,23.6363636 C38.7878788,24.3058712 38.1762346,24.8484848 37.4215533,24.8484848 Z",
                                          id: "Path",
                                          fill: "#000000"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M62.9172084,38.2522491 L53.2032731,38.2522491 L53.2032731,10.4558772 C53.2032731,7.54179987 50.8328969,5.17097239 47.9200104,5.17097239 L33.2535988,5.17097239 C32.5154121,2.18853568 29.802861,0 26.6016366,0 C23.3998945,0 20.687861,2.18853568 19.9496744,5.17097239 L5.28326275,5.17097239 C2.3698585,5.17097239 0,7.54179987 0,10.4558772 L0,62.5933652 C0,65.5074426 2.3698585,67.8787879 5.28326275,67.8787879 L62.9172084,67.8787879 C63.6486654,67.8787879 64.2424242,67.2853043 64.2424242,66.5530303 L64.2424242,39.5780066 C64.2424242,38.8462506 63.6491832,38.2522491 62.9172084,38.2522491 Z M33.9255245,38.2522491 C33.1935498,38.2522491 32.6003087,38.8462506 32.6003087,39.5780066 L32.6003087,42.0751954 L16.0501234,42.0751954 C15.3181488,42.0751954 14.7249076,42.6691968 14.7249076,43.400953 C14.7249076,44.1332268 15.3181488,44.7267105 16.0501234,44.7267105 L32.6003087,44.7267105 L32.6003087,51.8257279 L16.0501234,51.8257279 C15.3181488,51.8257279 14.7249076,52.4192116 14.7249076,53.1514855 C14.7249076,53.8832416 15.3181488,54.4772431 16.0501234,54.4772431 L32.6003087,54.4772431 L32.6003087,59.2613636 L8.61390271,59.2613636 L8.61390271,13.7883966 L15.1281666,13.7883966 C16.3995455,16.2778172 18.9894107,17.9862838 21.9706285,17.9862838 L31.2326447,17.9862838 C34.2138624,17.9862838 36.8037276,16.2778172 38.0751065,13.7883966 L44.5893704,13.7883966 L44.5893704,38.2522491 L33.9255245,38.2522491 Z M50.5528415,10.4558772 L50.5528415,38.2522491 L47.239802,38.2522491 L47.239802,12.4626391 C47.239802,11.7303652 46.6460432,11.1368815 45.9145862,11.1368815 L38.8660947,11.1368815 C38.8956014,10.8629261 38.9111313,10.5853456 38.9111313,10.30414 L38.9111313,7.82248754 L47.9200104,7.82248754 C49.3715359,7.82248754 50.5528415,9.00375822 50.5528415,10.4558772 Z M21.0849082,7.82248754 C21.7884113,7.82248754 22.3692286,7.27250536 22.4080533,6.57026814 C22.5302216,4.37241066 24.3720645,2.65151515 26.6016366,2.65151515 C28.830691,2.65151515 30.6725338,4.37241066 30.7947022,6.57026814 C30.8340445,7.27250536 31.4148618,7.82248754 32.1178473,7.82248754 L36.2606997,7.82248754 L36.2606997,10.30414 C36.2606997,13.0778734 34.0052445,15.3347686 31.2326447,15.3347686 L21.9706285,15.3347686 C19.1975109,15.3347686 16.9420558,13.0778734 16.9420558,10.30414 L16.9420558,7.82248754 L21.0849082,7.82248754 Z M2.6504316,62.5933652 L2.6504316,10.4558772 C2.6504316,9.00375822 3.83121955,7.82248754 5.28326275,7.82248754 L14.2916242,7.82248754 L14.2916242,10.30414 C14.2916242,10.5853456 14.3071541,10.8629261 14.3366608,11.1368815 L7.28868691,11.1368815 C6.55671218,11.1368815 5.96347111,11.7303652 5.96347111,12.4626391 L5.96347111,60.5871212 C5.96347111,61.3193952 6.55671218,61.9128788 7.28868691,61.9128788 L32.6003087,61.9128788 L32.6003087,65.2272727 L5.28326275,65.2272727 C3.83121955,65.2272727 2.6504316,64.046002 2.6504316,62.5933652 Z",
                                          id: "Shape",
                                          fill: "#000000"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M37.4590932,35.1515152 L15.8737213,35.1515152 C15.1400615,35.1515152 14.5454545,34.608428 14.5454545,33.9393939 C14.5454545,33.2698863 15.1400615,32.7272727 15.8737213,32.7272727 L37.4596121,32.7272727 C38.192753,32.7272727 38.7878788,33.2698863 38.7878788,33.9393939 C38.78736,34.6089015 38.192753,35.1515152 37.4590932,35.1515152 L37.4590932,35.1515152 Z",
                                          id: "Path",
                                          fill: "#000000"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("rect", {
                                    attrs: {
                                      id: "Rectangle",
                                      fill: "#FFFFFF",
                                      x: "35.1515152",
                                      y: "40.6060606",
                                      width: "27.8787879",
                                      height: "25.4545455"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M63.030303,38.1818182 C63.6997391,38.1818182 64.2424242,38.7245033 64.2424242,39.3939394 L64.2424242,66.6666667 C64.2424242,67.3361027 63.6997391,67.8787879 63.030303,67.8787879 L33.3333333,67.8787879 C32.6638973,67.8787879 32.1212121,67.3361027 32.1212121,66.6666667 L32.1212121,39.3939394 C32.1212121,38.7245033 32.6638973,38.1818182 33.3333333,38.1818182 L63.030303,38.1818182 Z M61.2121212,41.2121212 L35.1515152,41.2121212 L35.1515152,64.8484848 L61.2121212,64.8484848 L61.2121212,41.2121212 Z",
                                      id: "Rectangle",
                                      fill: "#1F4490",
                                      "fill-rule": "nonzero"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M51.4601089,61.8181818 L51.4601089,61.6690341 L46.3020833,54.5596591 C49.4756155,54.5596591 51.1949574,53.0764678 51.4601089,50.1100852 L51.4601089,50.1100852 L53.0137311,50.1100852 L53.5481771,48.1463068 L51.4352509,48.1463068 C51.3109612,47.1602746 51.0292377,46.3399621 50.5900805,45.6853693 L50.5900805,45.6853693 L53.0137311,45.6853693 L53.5481771,43.7215909 L43.5925663,43.7215909 L43.0456913,45.6853693 L46.2275095,45.6853693 C47.8598485,45.7433712 48.8210227,46.5636837 49.1110322,48.1463068 L49.1110322,48.1463068 L43.6049953,48.1463068 L43.0705492,50.1100852 L49.1358902,50.1100852 C48.7961648,51.7672822 47.7272727,52.5958807 45.929214,52.5958807 L45.929214,52.5958807 L43.1575521,52.5958807 L43.1699811,54.1495028 L48.7505919,61.8181818 L51.4601089,61.8181818 Z",
                                      id: "₹",
                                      fill: "#EF246A",
                                      "fill-rule": "nonzero"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex justify-center mx-2 my-2 text-xl font-medium text-tableheader "
              },
              [_vm._v("Amount Received\n                    Summary")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-start py-2 pl-2 ml-1 md:ml-8" },
              [
                _c(
                  "div",
                  {
                    staticClass: "grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4"
                  },
                  [
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(" Estimated Amount")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 font-medium" }, [
                      _vm._v(": Rs. " + _vm._s(_vm.estimateAmount))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(" Estimated Security Deposit")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 font-medium" }, [
                      _vm._v(": Rs. " + _vm._s(_vm.estimateDeposit))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Total Estimated Amount ")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 font-medium" }, [
                      _vm._v(": Rs. " + _vm._s(_vm.estimateTotal))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Total Amount Received in Bank")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 font-medium" }, [
                      _vm._v(": Rs " + _vm._s(_vm.paymentReceived))
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "py-1" },
                      [
                        _c("router-link", { attrs: { to: "/amountDetails" } }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "px-4 py-2 font-medium text-blue-400 border border-blue-400 rounded-lg hover:text-gray-500"
                            },
                            [
                              _vm._v(
                                "Monthly\n                                    Details"
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br")
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bg-white rounded-lg shadow-xl" }, [
            _c("div", { staticClass: "flex justify-center mt-4" }, [
              _c(
                "svg",
                {
                  attrs: {
                    width: "76px",
                    height: "76px",
                    viewBox: "0 0 80 80",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                  }
                },
                [
                  _c("title", [_vm._v("B1E76955-12F4-4E01-AEC8-2896EE21C594")]),
                  _vm._v(" "),
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "Others",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                      }
                    },
                    [
                      _c(
                        "g",
                        {
                          attrs: {
                            id: "PWD",
                            transform: "translate(-1038.000000, -2714.000000)"
                          }
                        },
                        [
                          _c(
                            "g",
                            {
                              attrs: {
                                id: "Group-6-Copy-2",
                                transform: "translate(1038.000000, 2714.000000)"
                              }
                            },
                            [
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle",
                                  x: "0",
                                  y: "0",
                                  width: "80",
                                  height: "80"
                                }
                              }),
                              _vm._v(" "),
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle-Copy-3",
                                  stroke: "#000000",
                                  "stroke-width": "3",
                                  fill: "#FFFFFF",
                                  x: "19.5",
                                  y: "56.5",
                                  width: "7",
                                  height: "10",
                                  rx: "3"
                                }
                              }),
                              _vm._v(" "),
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle-Copy-4",
                                  stroke: "#000000",
                                  "stroke-width": "3",
                                  fill: "#FFFFFF",
                                  x: "53.5",
                                  y: "56.5",
                                  width: "7",
                                  height: "10",
                                  rx: "3"
                                }
                              }),
                              _vm._v(" "),
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle",
                                  stroke: "#000000",
                                  "stroke-width": "3",
                                  fill: "#ADC5F6",
                                  x: "14.5",
                                  y: "10.5",
                                  width: "52",
                                  height: "52",
                                  rx: "3"
                                }
                              }),
                              _vm._v(" "),
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle-Copy-2",
                                  stroke: "#000000",
                                  "stroke-width": "3",
                                  fill: "#1F4490",
                                  x: "10.5",
                                  y: "23.5",
                                  width: "20",
                                  height: "10",
                                  rx: "3"
                                }
                              }),
                              _vm._v(" "),
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle-Copy-5",
                                  stroke: "#000000",
                                  "stroke-width": "3",
                                  fill: "#1F4490",
                                  x: "10.5",
                                  y: "39.5",
                                  width: "20",
                                  height: "10",
                                  rx: "3"
                                }
                              }),
                              _vm._v(" "),
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle-Copy",
                                  stroke: "#000000",
                                  "stroke-width": "3",
                                  fill: "#FFFFFF",
                                  x: "21.5",
                                  y: "18.5",
                                  width: "38.1081081",
                                  height: "36",
                                  rx: "3"
                                }
                              }),
                              _vm._v(" "),
                              _c("circle", {
                                attrs: {
                                  id: "Oval",
                                  fill: "#FFFFFF",
                                  cx: "40",
                                  cy: "36",
                                  r: "5"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M48.4976555,28.4986977 C47.8291938,27.8328014 46.7468899,27.8339393 46.0799099,28.5010873 L44.5941355,29.9875199 C43.4073168,29.238671 42.0038322,28.8034261 40.4998219,28.8034261 C38.9958116,28.8034261 37.5923269,29.238671 36.4055082,29.9875199 L34.9197339,28.5010873 C34.2527538,27.8339393 33.170222,27.8328014 32.5019883,28.4986977 C31.8336405,29.164594 31.8325008,30.245367 32.4995948,30.912515 L33.9892443,32.4027026 C33.2392907,33.5900964 32.8032234,34.9947143 32.8032234,36.4999222 C32.8032234,38.0051301 33.2392907,39.409748 33.9892443,40.5971418 L32.4995948,42.0874432 C31.8326148,42.754705 31.8337545,43.8353642 32.5021022,44.5012605 C32.8358202,44.8338673 33.2727992,45 33.7097783,45 C34.1478971,45 34.5860159,44.8328432 34.9199618,44.4988709 L36.4057362,43.0124383 C37.5925549,43.7612872 38.9960395,44.1965321 40.5000498,44.1965321 C42.0040602,44.1965321 43.4075448,43.7612872 44.5943635,43.0124383 L46.0801379,44.4988709 C46.4140838,44.8330708 46.8520886,45 47.2903214,45 C47.7271864,45 48.1642795,44.8337535 48.4979974,44.5012605 C49.1663452,43.8353642 49.1674849,42.754705 48.5005049,42.0874432 L47.0108554,40.5971418 C47.760809,39.409748 48.1968762,38.0051301 48.1968762,36.4999222 C48.1968762,34.9947143 47.760809,33.5902102 47.0108554,32.4028164 L48.5005049,30.912515 C49.167143,30.2452532 49.1660032,29.164594 48.4976555,28.4986977 Z M36.2222369,36.4999222 C36.2222369,34.1383343 38.1411152,32.2171119 40.4997079,32.2171119 C42.8583006,32.2171119 44.7771789,34.1383343 44.7771789,36.4999222 C44.7771789,38.8615101 42.8583006,40.7828463 40.4997079,40.7828463 C38.1411152,40.7828463 36.2222369,38.8615101 36.2222369,36.4999222 L36.2222369,36.4999222 Z",
                                  id: "Shape",
                                  fill: "#000000",
                                  "fill-rule": "nonzero"
                                }
                              }),
                              _vm._v(" "),
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle",
                                  fill: "#FFFFFF",
                                  x: "48.030303",
                                  y: "37.4242424",
                                  width: "27.8787879",
                                  height: "25.4545455"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M75.9090909,35 C76.578527,35 77.1212121,35.5426852 77.1212121,36.2121212 L77.1212121,63.4848485 C77.1212121,64.1542845 76.578527,64.6969697 75.9090909,64.6969697 L46.2121212,64.6969697 C45.5426852,64.6969697 45,64.1542845 45,63.4848485 L45,36.2121212 C45,35.5426852 45.5426852,35 46.2121212,35 L75.9090909,35 Z M74.0909091,38.030303 L48.030303,38.030303 L48.030303,61.6666667 L74.0909091,61.6666667 L74.0909091,38.030303 Z",
                                  id: "Rectangle",
                                  fill: "#1F4490",
                                  "fill-rule": "nonzero"
                                }
                              }),
                              _vm._v(" "),
                              _c("path", {
                                attrs: {
                                  d:
                                    "M64.3388968,58.6363636 L64.3388968,58.4872159 L59.1808712,51.3778409 C62.3544034,51.3778409 64.0737453,49.8946496 64.3388968,46.928267 L64.3388968,46.928267 L65.8925189,46.928267 L66.426965,44.9644886 L64.3140388,44.9644886 C64.1897491,43.9784564 63.9080256,43.1581439 63.4688684,42.5035511 L63.4688684,42.5035511 L65.8925189,42.5035511 L66.426965,40.5397727 L56.4713542,40.5397727 L55.9244792,42.5035511 L59.1062973,42.5035511 C60.7386364,42.561553 61.6998106,43.3818655 61.9898201,44.9644886 L61.9898201,44.9644886 L56.4837831,44.9644886 L55.9493371,46.928267 L62.014678,46.928267 C61.6749527,48.585464 60.6060606,49.4140625 58.8080019,49.4140625 L58.8080019,49.4140625 L56.03634,49.4140625 L56.0487689,50.9676847 L61.6293797,58.6363636 L64.3388968,58.6363636 Z",
                                  id: "₹",
                                  fill: "#EF246A",
                                  "fill-rule": "nonzero"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex justify-center mx-2 my-2 text-xl font-medium text-tableheader"
              },
              [_vm._v("Security Deposit\n                    Summary")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-start py-2 pl-2 ml-1 md:ml-8" },
              [
                _c(
                  "div",
                  {
                    staticClass: "grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4"
                  },
                  [
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("No of Security Deposit Returned Successfully")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 font-medium" }, [
                      _vm._v(": " + _vm._s(_vm.depositReturnedNo))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("No of Security Deposit to be returned")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 font-medium" }, [
                      _vm._v(": " + _vm._s(_vm.depositTobeReturNo))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Security Deposit Returned")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 font-medium" }, [
                      _vm._v(": Rs. " + _vm._s(_vm.depositRefunded))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Deposit To be Returned")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 font-medium" }, [
                      _vm._v(": Rs. " + _vm._s(_vm.depositTobeRefunded))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Total Fine received")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 font-medium" }, [
                      _vm._v(": Rs. " + _vm._s(_vm.depositFine))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("SD to be returned List ")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(":"),
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-gray-400",
                          attrs: {
                            href: "api/auth/exportRefund/" + _vm.division_id
                          }
                        },
                        [_vm._m(4)]
                      )
                    ])
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bg-white rounded-lg shadow-xl" }, [
            _c("div", { staticClass: "flex justify-center mt-4" }, [
              _c(
                "svg",
                {
                  attrs: {
                    width: "70px",
                    height: "70px",
                    viewBox: "0 0 80 80",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                  }
                },
                [
                  _c("title", [_vm._v("6F7812FF-8A31-44FC-9A64-E8772DEA8458")]),
                  _vm._v(" "),
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "Others",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                      }
                    },
                    [
                      _c(
                        "g",
                        {
                          attrs: {
                            id: "PWD",
                            transform: "translate(-486.000000, -3121.000000)"
                          }
                        },
                        [
                          _c(
                            "g",
                            {
                              attrs: {
                                id: "Group-3",
                                transform: "translate(486.000000, 3121.000000)"
                              }
                            },
                            [
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle",
                                  x: "0",
                                  y: "0",
                                  width: "80",
                                  height: "80"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "g",
                                {
                                  attrs: {
                                    id: "meeting",
                                    transform: "translate(6.000000, 5.000000)",
                                    "fill-rule": "nonzero"
                                  }
                                },
                                [
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Group",
                                        transform:
                                          "translate(0.971831, 25.267606)"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M4.55755221,26.4696071 L17.0908208,26.4696071 L17.0908208,43.7323944 L23.9271491,43.7323944 L23.9271491,24.1679021 L33.0422535,24.1679021 L42.1573579,24.1679021 L42.1573579,43.7323944 L48.9936863,43.7323944 L48.9936863,26.4696071 L61.5269548,26.4696071 C64.043863,26.4696071 66.084507,24.4084303 66.084507,21.8661972 L66.084507,4.60340993 C66.084507,2.0611768 64.043863,0 61.5269548,0 L56.9694026,0 L55.8300146,0 C53.3131064,0 51.2724624,2.0611768 51.2724624,4.60340993 L51.2724624,13.8102298 L44.436134,13.8102298 L38.7391938,13.8102298 L38.7391938,19.5644922 L27.3453133,19.5644922 L27.3453133,13.8102298 L21.648373,13.8102298 L14.8120447,13.8102298 L14.8120447,4.60340993 C14.8120447,2.0611768 12.7714007,0 10.2544925,0 L9.11510442,0 L4.55755221,0 C2.040644,0 0,2.0611768 0,4.60340993 L0,21.8661972 C0,24.4084303 2.040644,26.4696071 4.55755221,26.4696071 Z",
                                          id: "Path",
                                          fill: "#ADC5F6"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polygon", {
                                        attrs: {
                                          id: "Path",
                                          fill: "#FFFFFF",
                                          points:
                                            "36.4604177 0 33.0422535 0 29.6240894 0 33.0422535 9.20681987"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M28.1830986,44.7042254 L39.8450704,44.7042254 L39.8450704,38.9875725 L45.6760563,38.9875725 L45.6760563,32.1275891 C45.6760563,28.3385915 42.5436507,25.2676056 38.6788732,25.2676056 L37.5126761,25.2676056 L34.0140845,34.4142502 L30.515493,25.2676056 L29.3492958,25.2676056 C25.4845183,25.2676056 22.3521127,28.3385915 22.3521127,32.1275891 L22.3521127,38.9875725 L28.1830986,38.9875725 L28.1830986,44.7042254 Z",
                                      id: "Path",
                                      fill: "#EF246A"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("circle", {
                                    attrs: {
                                      id: "Oval",
                                      fill: "#ADC5F6",
                                      cx: "10.6901408",
                                      cy: "18.4647887",
                                      r: "6.8028169"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("circle", {
                                    attrs: {
                                      id: "Oval",
                                      fill: "#EF246A",
                                      cx: "34.0140845",
                                      cy: "18.4647887",
                                      r: "6.8028169"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Group",
                                        transform:
                                          "translate(12.633803, 0.971831)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval",
                                          fill: "#ADC5F6",
                                          cx: "45.6338028",
                                          cy: "17.3541247",
                                          rx: "6.84507042",
                                          ry: "6.9416499"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polygon", {
                                        attrs: {
                                          id: "Path",
                                          fill: "#1F4490",
                                          points:
                                            "10.2676056 5.78470825 15.971831 5.78470825 15.971831 0 0 0 0 5.78470825 5.70422535 5.78470825 5.70422535 9.2555332"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    { attrs: { id: "Group", fill: "#010133" } },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M4.6,52.649788 L4.6,69.971831 L6.9,69.971831 L6.9,52.765643 L17.25,52.765643 L17.25,68.8247518 C17.25,69.4579395 17.7652,69.971831 18.4,69.971831 L25.3,69.971831 C25.9348,69.971831 26.45,69.4579395 26.45,68.8247518 L26.45,50.4714846 L33.35,50.4714846 L33.35,67.6776726 L28.75,67.6776726 L28.75,69.971831 L40.25,69.971831 L40.25,67.6776726 L35.65,67.6776726 L35.65,50.4714846 L42.55,50.4714846 L42.55,68.8247518 C42.55,69.4579395 43.0652,69.971831 43.7,69.971831 L50.6,69.971831 C51.2348,69.971831 51.75,69.4579395 51.75,68.8247518 L51.75,52.765643 L62.1,52.765643 L62.1,69.971831 L64.4,69.971831 L64.4,52.649788 C67.02085,52.1163962 69,49.8004433 69,47.0302471 L69,29.8240591 C69,26.9758615 66.9024,24.6243491 64.17115,24.1815765 C65.72365,22.7167564 66.7,20.6485726 66.7,18.3532671 C66.7,13.9255414 63.089,10.3237128 58.65,10.3237128 C54.211,10.3237128 50.6,13.9255414 50.6,18.3532671 C50.6,21.1704937 52.0651,23.6493318 54.27195,25.0820337 C52.75165,26.1155521 51.75,27.8545241 51.75,29.8240591 L51.75,37.8536135 L47.15,37.8536135 L47.15,32.1182175 C47.15,28.0139681 44.045,24.623202 40.0545,24.1506054 C41.5886,22.6880794 42.55,20.6325135 42.55,18.3532671 C42.55,13.9255414 38.939,10.3237128 34.5,10.3237128 C30.061,10.3237128 26.45,13.9255414 26.45,18.3532671 C26.45,20.6325135 27.4114,22.6880794 28.9455,24.1506054 C24.955,24.623202 21.85,28.0139681 21.85,32.1182175 L21.85,37.8536135 L17.25,37.8536135 L17.25,29.8240591 C17.25,27.8545241 16.24835,26.1155521 14.72805,25.0820337 C16.9349,23.6493318 18.4,21.1704937 18.4,18.3532671 C18.4,13.9255414 14.789,10.3237128 10.35,10.3237128 C5.911,10.3237128 2.3,13.9255414 2.3,18.3532671 C2.3,20.6485726 3.27635,22.7167564 4.82885,24.1815765 C2.0976,24.6243491 0,26.9758615 0,29.8240591 L0,47.0302471 C0,49.7992962 1.97915,52.1163962 4.6,52.649788 Z M42.6788,48.1773263 L26.3212,48.1773263 C26.14755,47.3319289 25.7991,46.5496209 25.2977,45.8831679 L28.75,45.8831679 L40.25,45.8831679 L43.7023,45.8831679 C43.2009,46.5496209 42.85245,47.3319289 42.6788,48.1773263 Z M52.9,18.3532671 C52.9,15.1907698 55.47945,12.6178712 58.65,12.6178712 C61.82055,12.6178712 64.4,15.1907698 64.4,18.3532671 C64.4,21.5157645 61.82055,24.0886631 58.65,24.0886631 C55.47945,24.0886631 52.9,21.5157645 52.9,18.3532671 Z M52.9,40.1477719 C53.5348,40.1477719 54.05,39.6338804 54.05,39.0006927 L54.05,29.8240591 C54.05,27.9267901 55.5979,26.3828215 57.5,26.3828215 L63.25,26.3828215 C65.1521,26.3828215 66.7,27.9267901 66.7,29.8240591 L66.7,47.0302471 C66.7,48.927516 65.1521,50.4714846 63.25,50.4714846 L50.6,50.4714846 C49.9652,50.4714846 49.45,50.9853761 49.45,51.6185638 L49.45,67.6776726 L44.85,67.6776726 L44.85,49.3244054 C44.85,47.4271365 46.3979,45.8831679 48.3,45.8831679 L58.65,45.8831679 C59.2848,45.8831679 59.8,45.3692764 59.8,44.7360887 L59.8,33.2652967 L57.5,33.2652967 L57.5,43.5890095 L41.4,43.5890095 L41.4,40.1477719 L52.9,40.1477719 Z M36.29055,26.3828215 L34.5,31.1454943 L32.70945,26.3828215 L36.29055,26.3828215 Z M28.75,18.3532671 C28.75,15.1907698 31.32945,12.6178712 34.5,12.6178712 C37.67055,12.6178712 40.25,15.1907698 40.25,18.3532671 C40.25,21.5157645 37.67055,24.0886631 34.5,24.0886631 C31.32945,24.0886631 28.75,21.5157645 28.75,18.3532671 Z M24.15,32.1182175 C24.15,28.9557202 26.72945,26.3828215 29.9,26.3828215 L30.25305,26.3828215 L33.4236,34.8150007 C33.5915,35.2623616 34.02045,35.5594551 34.5,35.5594551 C34.97955,35.5594551 35.4085,35.2623616 35.57755,34.8150007 L38.74695,26.3828215 L39.1,26.3828215 C42.27055,26.3828215 44.85,28.9557202 44.85,32.1182175 L44.85,37.8536135 L40.25,37.8536135 C39.6152,37.8536135 39.1,38.367505 39.1,39.0006927 L39.1,43.5890095 L29.9,43.5890095 L29.9,39.0006927 C29.9,38.367505 29.3848,37.8536135 28.75,37.8536135 L24.15,37.8536135 L24.15,32.1182175 Z M4.6,18.3532671 C4.6,15.1907698 7.17945,12.6178712 10.35,12.6178712 C13.52055,12.6178712 16.1,15.1907698 16.1,18.3532671 C16.1,21.5157645 13.52055,24.0886631 10.35,24.0886631 C7.17945,24.0886631 4.6,21.5157645 4.6,18.3532671 Z M2.3,29.8240591 C2.3,27.9267901 3.8479,26.3828215 5.75,26.3828215 L11.5,26.3828215 C13.4021,26.3828215 14.95,27.9267901 14.95,29.8240591 L14.95,39.0006927 C14.95,39.6338804 15.4652,40.1477719 16.1,40.1477719 L27.6,40.1477719 L27.6,43.5890095 L11.5,43.5890095 L11.5,33.2652967 L9.2,33.2652967 L9.2,44.7360887 C9.2,45.3692764 9.7152,45.8831679 10.35,45.8831679 L20.7,45.8831679 C22.6021,45.8831679 24.15,47.4271365 24.15,49.3244054 L24.15,67.6776726 L19.55,67.6776726 L19.55,51.6185638 C19.55,50.9853761 19.0348,50.4714846 18.4,50.4714846 L5.75,50.4714846 C3.8479,50.4714846 2.3,48.927516 2.3,47.0302471 L2.3,29.8240591 Z",
                                          id: "Shape"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("rect", {
                                        attrs: {
                                          id: "Rectangle",
                                          x: "33.35",
                                          y: "37.8536135",
                                          width: "2.3",
                                          height: "2.29415839"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M17.88595,11.3503486 C18.0481,11.4306442 18.2252,11.470792 18.4,11.470792 C18.6438,11.470792 18.88645,11.3927906 19.09,11.2413761 L23.38295,8.02955438 L28.75,8.02955438 C29.3848,8.02955438 29.9,7.5156629 29.9,6.88247518 L29.9,1.1470792 C29.9,0.51389148 29.3848,0 28.75,0 L12.65,0 C12.0152,0 11.5,0.51389148 11.5,1.1470792 L11.5,6.88247518 C11.5,7.5156629 12.0152,8.02955438 12.65,8.02955438 L17.25,8.02955438 L17.25,10.3237128 C17.25,10.7584558 17.4961,11.1553452 17.88595,11.3503486 Z M13.8,5.73539598 L13.8,2.29415839 L27.6,2.29415839 L27.6,5.73539598 L23,5.73539598 C22.7516,5.73539598 22.50895,5.81569153 22.31,5.96481182 L19.55,8.02955438 L19.55,6.88247518 C19.55,6.24928746 19.0348,5.73539598 18.4,5.73539598 L13.8,5.73539598 Z",
                                          id: "Shape"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("rect", {
                                        attrs: {
                                          id: "Rectangle",
                                          x: "40.25",
                                          y: "3.44123759",
                                          width: "2.3",
                                          height: "2.29415839"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("rect", {
                                        attrs: {
                                          id: "Rectangle",
                                          x: "44.85",
                                          y: "3.44123759",
                                          width: "2.3",
                                          height: "2.29415839"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("rect", {
                                        attrs: {
                                          id: "Rectangle",
                                          x: "49.45",
                                          y: "3.44123759",
                                          width: "2.3",
                                          height: "2.29415839"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex justify-center mx-2 my-2 text-xl font-medium text-tableheader"
              },
              [_vm._v("Local Council")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-start py-2 pl-2 ml-1 md:ml-8" },
              [
                _c(
                  "div",
                  {
                    staticClass: "grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4"
                  },
                  [
                    _vm.division_id == 1 || _vm.division_id == 2
                      ? [
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v("No. of Local Council in Aizawl Road South")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1 font-medium" }, [
                            _vm._v(": " + _vm._s(_vm.localcouncilSouthno))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v("No. of Local Council in Aizawl Road North")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1 font-medium" }, [
                            _vm._v(": " + _vm._s(_vm.localcouncilNorthno))
                          ])
                        ]
                      : [
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v("No. of Local Council ")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1 font-medium" }, [
                            _vm._v(": " + _vm._s(_vm.localcouncilNo))
                          ])
                        ],
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Add New Local Council")
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "py-1 font-medium" },
                      [
                        _vm._v(":\n                            "),
                        _c(
                          "router-link",
                          { attrs: { to: "/localcouncilAdd" } },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "text-blue-400 hover:text-gray-400"
                              },
                              [_vm._v("Add ")]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Local Council List")
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "py-1 font-medium" },
                      [
                        _vm._v(":\n                            "),
                        _c(
                          "router-link",
                          { attrs: { to: "/localcouncilList" } },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "text-blue-400 hover:text-gray-400"
                              },
                              [_vm._v("View ")]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("br")
                  ],
                  2
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bg-white rounded-lg shadow-xl" }, [
            _c("div", { staticClass: "flex justify-center mt-4" }, [
              _c(
                "svg",
                {
                  attrs: {
                    width: "80px",
                    height: "80px",
                    viewBox: "0 0 80 80",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                  }
                },
                [
                  _c("title", [_vm._v("7EC39253-3F7D-4D08-AF09-EE28D42AEEB3")]),
                  _vm._v(" "),
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "Others",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                      }
                    },
                    [
                      _c(
                        "g",
                        {
                          attrs: {
                            id: "PWD",
                            transform: "translate(-1085.000000, -3099.000000)"
                          }
                        },
                        [
                          _c(
                            "g",
                            {
                              attrs: {
                                id: "Group-4",
                                transform: "translate(1085.000000, 3099.000000)"
                              }
                            },
                            [
                              _c(
                                "g",
                                {
                                  attrs: {
                                    id: "worker",
                                    transform: "translate(10.000000, 3.000000)",
                                    "fill-rule": "nonzero"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M59,62.1820842 L59,71 L50,71 L50,49 C55.298,51.2786614 59,56.442041 59,62.1820842 Z",
                                      id: "Path",
                                      fill: "#ADC5F6"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M47.1428571,19 C48.7214286,19 50,20.3425 50,22 C50,22.828 49.68,23.578 49.1628571,24.121 C48.6457143,24.664 47.9314286,25 47.1428571,25 L45.7142857,25 L44.2857143,25 L15.7142857,25 L14.2857143,25 L12.8571429,25 C11.2785714,25 10,23.6575 10,22 C10,21.172 10.32,20.422 10.8371429,19.879 C11.3542857,19.336 12.0685714,19 12.8571429,19 L47.1428571,19 Z",
                                      id: "Path",
                                      fill: "#EF246A"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M24.3333333,4.65853659 L24.3333333,4.36585366 C24.3333333,2.74878049 25.60125,1 27.1666667,1 L32.8333333,1 C34.39875,1 35.6666667,2.74878049 35.6666667,4.36585366 L35.6666667,4.65853659 C42.1323333,6.01512195 47,11.92 47,19 L13,19 C13,11.92 17.8676667,6.01512195 24.3333333,4.65853659 Z",
                                      id: "Path",
                                      fill: "#EF246A"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M44.2857143,48 L38.5714286,48 L30,57.1084337 L21.4285714,48 L15.7142857,48 C13.6828571,48 11.75,48.4583133 10,49.2751807 L10,72 L15.7142857,72 L30,72 L44.2857143,72 L50,72 L50,49.2751807 C48.25,48.4583133 46.3171429,48 44.2857143,48 Z",
                                      id: "Path",
                                      fill: "#1F4490"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M45.7142857,25 L44.2857143,25 L15.7142857,25 L14.2857143,25 C11.9185714,25 10,26.9015929 10,29.2477876 C10,31.5939823 11.9185714,33.4955752 14.2857143,33.4955752 L15.9971429,33.4955752 C16.5614286,36.3118584 17.95,38.8761062 19.8985714,40.8881416 C20.3985714,41.4049558 20.9357143,41.8835398 21.5042857,42.319646 L21.4285714,42.4173451 L21.4285714,48.079646 L30,57 L38.5714286,48.079646 L38.5714286,42.4173451 L38.4957143,42.319646 C41.2828571,40.1773451 43.2928571,37.0339823 44.0028571,33.4955752 L45.7142857,33.4955752 C48.0814286,33.4955752 50,31.5939823 50,29.2477876 C50,26.9015929 48.0814286,25 45.7142857,25 Z",
                                      id: "Path",
                                      fill: "#FFFFFF"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M10,49 L10,71 L1,71 L1,62.1820842 C1,56.442041 4.702,51.2786614 10,49 Z",
                                      id: "Path",
                                      fill: "#ADC5F6"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M44.5,64 C45.328,64 46,63.328 46,62.5 C46,61.672 45.328,61 44.5,61 C43.672,61 43,61.672 43,62.5 C43,63.328 43.672,64 44.5,64 Z",
                                      id: "Path",
                                      fill: "#000000"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M15.5,61 C14.672,61 14,61.672 14,62.5 C14,63.328 14.672,64 15.5,64 C16.328,64 17,63.328 17,62.5 C17,61.672 16.328,61 15.5,61 Z",
                                      id: "Path",
                                      fill: "#000000"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M57.3778571,53.7818945 C55.7697143,51.2976133 53.5598571,49.3236191 50.9711429,48.0488281 C50.7528571,47.8465098 50.4721429,47.710918 50.16,47.6762715 C48.2875714,46.8829668 46.3138571,46.4804688 44.2857143,46.4804688 L40,46.4804688 L40,42.7188301 C42.4801429,40.5949863 44.2631429,37.7819199 45.1277143,34.6464844 L45.7142857,34.6464844 C48.8651429,34.6464844 51.4285714,32.0880625 51.4285714,28.9433594 C51.4285714,27.4531328 50.8522857,26.0952188 49.9111429,25.0780664 C50.001,25.0019297 50.0887143,24.9226563 50.173,24.8386777 C50.9827143,24.0305449 51.4285714,22.9565039 51.4285714,21.8144531 C51.4285714,19.9376973 50.2105714,18.3403945 48.5224286,17.7658047 C48.0177143,11.2094922 43.4072857,5.60674219 37.0594286,3.85075 C36.6832857,1.89001562 35.062,0 32.8571429,0 L27.1428571,0 C24.938,0 23.3167143,1.89001562 22.9405714,3.85075 C16.5932857,5.60659961 11.9832857,11.2083516 11.4777143,17.7638086 C10.8631429,17.9718301 10.2995714,18.3187227 9.827,18.7902285 C9.01728571,19.5983613 8.57142857,20.6724023 8.57142857,21.8144531 C8.57142857,23.1208965 9.162,24.291748 10.09,25.0769258 C9.14828571,26.0940781 8.57142857,27.4525625 8.57142857,28.9433594 C8.57142857,32.0880625 11.1348571,34.6464844 14.2857143,34.6464844 L14.8682857,34.6464844 C15.59,37.263791 16.9584286,39.6666602 18.8674286,41.6514902 C19.2261429,42.0247598 19.6064286,42.3803496 20,42.7176895 L20,46.4804688 L15.7142857,46.4804688 C13.686,46.4804688 11.7122857,46.8829668 9.84,47.6761289 C9.528,47.710918 9.24714286,47.8463672 9.029,48.0486855 C6.44,49.3236191 4.23028571,51.2976133 2.62214286,53.781752 C0.906714286,56.4318516 0,59.4783184 0,62.5917969 L0,71.5742188 C0,72.3615352 0.639571429,73 1.42857143,73 L58.5714286,73 C59.3604286,73 60,72.3615352 60,71.5742188 L60,62.5917969 C60,59.4783184 59.0932857,56.4318516 57.3778571,53.7818945 Z M42.8571429,49.3320312 L42.8571429,58.3144531 C42.8571429,59.1019121 43.4967143,59.7402344 44.2857143,59.7402344 C45.0747143,59.7402344 45.7142857,59.1019121 45.7142857,58.3144531 L45.7142857,49.4164375 C46.6891429,49.5310703 47.6441429,49.7637578 48.5714286,50.1126465 L48.5714286,70.1484375 L45.7142857,70.1484375 L45.7142857,66.8691406 C45.7142857,66.0816816 45.0747143,65.4433594 44.2857143,65.4433594 C43.4967143,65.4433594 42.8571429,66.0816816 42.8571429,66.8691406 L42.8571429,70.1484375 L31.4285714,70.1484375 L31.4285714,57.4589844 L39.1835714,49.3320312 L42.8571429,49.3320312 Z M22.8571429,44.6802773 C25.0615714,45.8629629 27.4895714,46.4804688 30,46.4804688 C32.5105714,46.4804688 34.9387143,45.8628203 37.1428571,44.6804199 L37.1428571,47.3359375 L30,54.8212891 L22.8571429,47.3359375 L22.8571429,44.6802773 Z M45.7142857,31.7949219 L45.6491429,31.7949219 C45.6917143,31.3205645 45.7142857,30.8444961 45.7142857,30.3691406 L45.7142857,26.0917969 C47.2897143,26.0917969 48.5714286,27.3710078 48.5714286,28.9433594 C48.5714286,30.5157109 47.2897143,31.7949219 45.7142857,31.7949219 Z M22.8571429,6.86356836 L22.8571429,13.2597656 C22.8571429,14.0472246 23.4967143,14.6855469 24.2857143,14.6855469 C25.0747143,14.6855469 25.7142857,14.0472246 25.7142857,13.2597656 L25.7142857,4.9992168 C25.7142857,4.99550977 25.7142857,4.99180273 25.7142857,4.9880957 L25.7142857,4.70507812 C25.7142857,3.82166406 26.462,2.8515625 27.1428571,2.8515625 L32.8571429,2.8515625 C33.538,2.8515625 34.2857143,3.82166406 34.2857143,4.70507812 L34.2857143,4.9880957 C34.2857143,4.99180273 34.2857143,4.99550977 34.2857143,4.9992168 L34.2857143,13.2597656 C34.2857143,14.0472246 34.9252857,14.6855469 35.7142857,14.6855469 C36.5032857,14.6855469 37.1428571,14.0472246 37.1428571,13.2597656 L37.1428571,6.86356836 C41.7557143,8.49280859 45.0857143,12.6589414 45.6344286,17.5371094 L14.3655714,17.5371094 C14.9142857,12.6589414 18.2442857,8.49280859 22.8571429,6.86356836 Z M11.8472857,20.8067109 C12.1174286,20.5370957 12.476,20.3886719 12.8571429,20.3886719 L47.1428571,20.3886719 C47.9305714,20.3886719 48.5714286,21.0282773 48.5714286,21.8144531 C48.5714286,22.1948516 48.4227143,22.5528652 48.1527143,22.8221953 C47.8827143,23.0918105 47.524,23.2402344 47.1428571,23.2402344 L45.7142857,23.2402344 L44.2857143,23.2402344 L15.7142857,23.2402344 L14.2857143,23.2402344 L12.8571429,23.2402344 C12.0694286,23.2402344 11.4285714,22.6006289 11.4285714,21.8144531 C11.4285714,21.4340547 11.5772857,21.076041 11.8472857,20.8067109 Z M11.4285714,28.9433594 C11.4285714,27.3710078 12.7102857,26.0917969 14.2857143,26.0917969 L14.2857143,30.3691406 C14.2857143,30.8444961 14.3082857,31.320707 14.3508571,31.7949219 L14.2857143,31.7949219 C12.7102857,31.7949219 11.4285714,30.5157109 11.4285714,28.9433594 Z M17.4024286,32.9616387 C17.3995714,32.9460977 17.3968571,32.9306992 17.3934286,32.9154434 C17.2275714,32.0786523 17.1428571,31.2221855 17.1428571,30.3691406 L17.1428571,26.0917969 L42.8571429,26.0917969 L42.8571429,30.3691406 C42.8571429,31.2214727 42.7724286,32.0773691 42.6065714,32.914873 C42.6031429,32.9302715 42.6004286,32.9458125 42.5975714,32.9613535 C41.9591429,36.1418437 40.1922857,38.9888437 37.6194286,40.9800898 C35.3842857,42.7129844 32.7495714,43.6289062 30,43.6289062 C27.2504286,43.6289062 24.6157143,42.7129844 22.3784286,40.9785215 C21.8662857,40.5830098 21.3788571,40.1454375 20.9291429,39.6773535 C19.127,37.8035918 17.9081429,35.4822773 17.4024286,32.9616387 Z M20.8164286,49.3320312 L28.5714286,57.4589844 L28.5714286,70.1484375 L17.1428571,70.1484375 L17.1428571,66.8691406 C17.1428571,66.0816816 16.5032857,65.4433594 15.7142857,65.4433594 C14.9252857,65.4433594 14.2857143,66.0816816 14.2857143,66.8691406 L14.2857143,70.1484375 L11.4285714,70.1484375 L11.4285714,50.1125039 C12.3557143,49.7636152 13.3108571,49.5310703 14.2857143,49.4164375 L14.2857143,58.3144531 C14.2857143,59.1019121 14.9252857,59.7402344 15.7142857,59.7402344 C16.5032857,59.7402344 17.1428571,59.1019121 17.1428571,58.3144531 L17.1428571,49.3320312 L20.8164286,49.3320312 Z M2.85714286,62.5917969 C2.85714286,58.254998 5.08314286,54.0982754 8.57142857,51.6306758 L8.57142857,70.1484375 L2.85714286,70.1484375 L2.85714286,62.5917969 Z M57.1428571,70.1484375 L51.4285714,70.1484375 L51.4285714,51.6305332 C54.9168571,54.0981328 57.1428571,58.2548555 57.1428571,62.5917969 L57.1428571,70.1484375 Z",
                                      id: "Shape",
                                      fill: "#000000"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("rect", {
                                attrs: {
                                  id: "Rectangle",
                                  x: "0",
                                  y: "0",
                                  width: "80",
                                  height: "80"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex justify-center mx-2 my-2 text-xl font-medium text-tableheader"
              },
              [_vm._v("Site Engineer")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-start py-2 pl-2 ml-1 md:ml-8" },
              [
                _c(
                  "div",
                  {
                    staticClass: "grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4"
                  },
                  [
                    _vm.division_id == 1 || _vm.division_id == 2
                      ? [
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v("No. of Site Engineer in Aizawl Road South")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1 font-medium" }, [
                            _vm._v(": " + _vm._s(_vm.engineerSouthno))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v("No. of Site Engineer in Aizawl Road North")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1 font-medium" }, [
                            _vm._v(": " + _vm._s(_vm.engineerNorthno))
                          ])
                        ]
                      : [
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v("No. of Site Engineer ")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "py-1 font-medium" }, [
                            _vm._v(": " + _vm._s(_vm.engineerNo))
                          ])
                        ],
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Add Engineer")]),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "py-1 font-medium" },
                      [
                        _vm._v(":\n                            "),
                        _c("router-link", { attrs: { to: "/engineerAdd" } }, [
                          _c(
                            "button",
                            {
                              staticClass: "text-blue-400 hover:text-gray-400"
                            },
                            [_vm._v("Add ")]
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Engineer List")]),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "py-1 font-medium" },
                      [
                        _vm._v(":\n                            "),
                        _c("router-link", { attrs: { to: "/engineerList" } }, [
                          _c(
                            "button",
                            {
                              staticClass: "text-blue-400 hover:text-gray-400"
                            },
                            [_vm._v("View")]
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  2
                )
              ]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "pb-1 mt-4 text-sm text-blueGray-400" }, [
      _c("span", { staticClass: "mr-2 text-green-500" }, [
        _c("i", { staticClass: "fas fa-arrow-up" }),
        _vm._v(" 3.48% ")
      ]),
      _c("span", { staticClass: "whitespace-nowrap" }, [
        _vm._v("Since\n                                last month")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticClass:
            "flex items-center justify-center w-12 h-12 mt-8 ml-4 rounded-full bg-buttonpink rounded-circle"
        },
        [_c("i", { staticClass: "text-xl text-white far fa-chart-bar" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "pb-1 mt-4 text-sm text-blueGray-400" }, [
      _c("span", { staticClass: "mr-2 text-red-500" }, [
        _c("i", { staticClass: "fas fa-arrow-down" }),
        _vm._v(" 3.48% ")
      ]),
      _c("span", { staticClass: "whitespace-nowrap" }, [
        _vm._v("Since last week")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticClass:
            "flex items-center justify-center w-12 h-12 mt-8 ml-4 rounded-full bg-buttonpink rounded-circle"
        },
        [_c("i", { staticClass: "text-xl text-white fa fa-ban" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass:
          "px-1 font-medium text-green-500 rounded-lg hover:text-gray-500"
      },
      [
        _vm._v("Download"),
        _c("span", { staticClass: "px-1 xl:py-0" }, [_vm._v("(Excel)")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);