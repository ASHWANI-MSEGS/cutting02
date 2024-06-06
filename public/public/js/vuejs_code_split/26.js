(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_UserCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/UserCircle */ "./resources/js/components/UserCircle.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EstimateShowSDO",
  components: {
    UserCircle: _components_UserCircle__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/estimateShow/' + this.$route.params.id, {
      headers: {
        "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
      }
    }).then(function (response) {
      _this.estimate = response.data.estimate;
      _this.form = response.data.form;
      _this.security_deposit = response.data.security_deposit;
      _this.loading = false;
      _this.paymentM.form_id = _this.form.id;
      _this.paymentRTGS.form_id = _this.form.id;
      _this.paymentCash.form_id = _this.form.id;
      _this.paymentRTGS.total_amount = _this.estimate.total;
      _this.paymentCash.total_amount = _this.estimate.total;
    })["catch"](function (error) {
      _this.loading = false;

      if (error.response.status === 404) {
        _this.$router.push('/');
      }
    });
  },
  data: function data() {
    return {
      isDisabled: "true",
      submit_value: 'Submit',
      paymentM: {
        ref_no: null,
        amount: null,
        method: null,
        date: null,
        form_id: null,
        bank_name: null
      },
      paymentRTGS: {
        form_id: null,
        total_amount: null,
        bank_name: null,
        account_holder_name: null,
        bank_account_no: null,
        branch_name: null,
        ifsc_code: null,
        rtgs_neft_no: null,
        cheque_date: null,
        payment_mode: null
      },
      paymentCash: {
        form_id: null,
        total_amount: null,
        amount_receiver_name: null,
        amount_receiver_phone: null,
        payer_name: null,
        payer_phone: null,
        identification_type: 'default',
        identification_no: null,
        road_location: null,
        house_no: null,
        cash_pay_date: null
      },
      payment: {
        id: null
      },
      security_deposit: {},
      form: {
        id: null
      },
      loading: true,
      modal: false,
      contact: null,
      modalA: false,
      modalOnlineManual: false,
      modalRTGSManual: false,
      modalCashManual: false,
      currentUser: this.$store.getters.currentUser,
      estimate: {
        'id': '',
        'road_name': '',
        'length': '',
        'breadth': '',
        'area': '',
        'rate': '',
        'amount': '',
        'deposit': '',
        'total': '',
        'form_id': this.$route.params.id,
        'division_id': ''
      }
    };
  },
  computed: {
    disableS: function disableS() {
      this.isDisabled = false;
      this.submit_value = "Submitting..";
    },
    enableS: function enableS() {
      this.isDisabled = true;
      this.submit_value = "Submit";
    }
  },
  methods: {
    destroy: function destroy() {
      var _this2 = this;

      axios["delete"]('/api/contacts/' + this.$route.params.id).then(function (response) {
        _this2.$router.push('/contacts');
      })["catch"](function (error) {
        alert('Internal Error. Unable to delete contact.');
      });
    },
    approve: function approve() {
      var _this3 = this;

      this.disableS;
      axios.post('/api/manualOnlinePayment/', this.paymentM, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this3.payment = response.data.paymentUpdate;
        _this3.loading = false;

        _this3.$router.push('/paymentHandler/' + _this3.payment.id);

        _this3.enableS;
      })["catch"](function (error) {
        console.log(error);
        _this3.enableS;
        alert('Internal Error. Unable to enter payment.');
      });
    },
    approveRTGS: function approveRTGS() {
      var _this4 = this;

      this.disableS;
      axios.post('/api/manualOnlinePaymentRTGS/', this.paymentRTGS, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this4.payment = response.data.paymentUpdate;
        _this4.loading = false;

        _this4.$router.push('/paymentHandler/' + _this4.payment.id);

        _this4.enableS;
      })["catch"](function (error) {
        console.log(error);
        _this4.enableS;
        alert('Internal Error. Unable to enter payment.');
      });
    },
    approveCash: function approveCash() {
      var _this5 = this;

      this.disableS;
      axios.post('/api/manualOnlinePaymentCash/', this.paymentCash, {
        headers: {
          "Authorization": "Bearer ".concat(this.$store.getters.currentUser.token)
        }
      }).then(function (response) {
        _this5.payment = response.data.paymentUpdate;
        _this5.loading = false;

        _this5.$router.push('/paymentHandler/' + _this5.payment.id);

        _this5.enableS;
      })["catch"](function (error) {
        console.log(error);
        _this5.enableS;
        alert('Internal Error. Unable to enter payment.');
      });
    },
    printme: function printme() {
      window.print();
    }
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=template&id=f0e27f0e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=template&id=f0e27f0e&scoped=true& ***!
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
  return _c("div", [
    _vm.modalOnlineManual
      ? _c("div", {
          staticClass:
            "absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15",
          on: {
            click: function($event) {
              _vm.modalOnlineManual = !_vm.modalOnlineManual
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.modalOnlineManual
      ? _c(
          "form",
          {
            staticClass:
              "absolute left-0 right-0 z-50 w-11/12 pb-6 ml-auto mr-auto bg-white rounded-lg top-2 md:w-4/5 lg:w-1/2",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.approve.apply(null, arguments)
              }
            }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Ref No.")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentM.ref_no,
                      expression: "paymentM.ref_no"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "text" },
                  domProps: { value: _vm.paymentM.ref_no },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.paymentM, "ref_no", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Amount")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentM.amount,
                      expression: "paymentM.amount"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "text" },
                  domProps: { value: _vm.paymentM.amount },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.paymentM, "amount", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Method\n                (UPI/OnlineBanking/Card)")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentM.method,
                      expression: "paymentM.method"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "text" },
                  domProps: { value: _vm.paymentM.method },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.paymentM, "method", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Bank/UPI Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentM.bank_name,
                      expression: "paymentM.bank_name"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "text" },
                  domProps: { value: _vm.paymentM.bank_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.paymentM, "bank_name", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Date of Transaction")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentM.date,
                      expression: "paymentM.date"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "date" },
                  domProps: { value: _vm.paymentM.date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.paymentM, "date", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex items-center justify-center pt-2 " },
              [
                _c(
                  "button",
                  {
                    staticClass:
                      "px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400",
                    attrs: { disabled: !_vm.isDisabled }
                  },
                  [_vm._v(_vm._s(_vm.submit_value))]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300",
                    on: {
                      click: function($event) {
                        _vm.modalOnlineManual = !_vm.modalOnlineManual
                      }
                    }
                  },
                  [_vm._v("Cancel")]
                )
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.modalRTGSManual
      ? _c("div", {
          staticClass:
            "absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15",
          on: {
            click: function($event) {
              _vm.modalRTGSManual = !_vm.modalRTGSManual
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.modalRTGSManual
      ? _c(
          "form",
          {
            staticClass:
              "absolute left-0 right-0 z-50 w-11/12 pb-6 ml-auto mr-auto bg-white rounded-lg top-2 md:w-4/5 lg:w-1/2",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.approveRTGS.apply(null, arguments)
              }
            }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Amount to be Paid")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentRTGS.total_amount,
                      expression: "paymentRTGS.total_amount"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 text-xl font-bold text-green-400 bg-white rounded-lg focus:outline-none",
                  attrs: { type: "text", readonly: "" },
                  domProps: { value: _vm.paymentRTGS.total_amount },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentRTGS,
                        "total_amount",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Payment Mode")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentRTGS.payment_mode,
                      expression: "paymentRTGS.payment_mode"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { placeholder: "RTGS OR NEFT", type: "text" },
                  domProps: { value: _vm.paymentRTGS.payment_mode },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentRTGS,
                        "payment_mode",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Account Holder Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentRTGS.account_holder_name,
                      expression: "paymentRTGS.account_holder_name"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "text" },
                  domProps: { value: _vm.paymentRTGS.account_holder_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentRTGS,
                        "account_holder_name",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Bank Account No")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentRTGS.bank_account_no,
                      expression: "paymentRTGS.bank_account_no"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "text" },
                  domProps: { value: _vm.paymentRTGS.bank_account_no },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentRTGS,
                        "bank_account_no",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Bank Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentRTGS.bank_name,
                      expression: "paymentRTGS.bank_name"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "text" },
                  domProps: { value: _vm.paymentRTGS.bank_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentRTGS,
                        "bank_name",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Branch Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentRTGS.branch_name,
                      expression: "paymentRTGS.branch_name"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "text" },
                  domProps: { value: _vm.paymentRTGS.branch_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentRTGS,
                        "branch_name",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("IFSC Code")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentRTGS.ifsc_code,
                      expression: "paymentRTGS.ifsc_code"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "text" },
                  domProps: { value: _vm.paymentRTGS.ifsc_code },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentRTGS,
                        "ifsc_code",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("RTGS/NEFT NO.")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentRTGS.rtgs_neft_no,
                      expression: "paymentRTGS.rtgs_neft_no"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "text" },
                  domProps: { value: _vm.paymentRTGS.rtgs_neft_no },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentRTGS,
                        "rtgs_neft_no",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Cheque Date")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentRTGS.cheque_date,
                      expression: "paymentRTGS.cheque_date"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "date" },
                  domProps: { value: _vm.paymentRTGS.cheque_date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentRTGS,
                        "cheque_date",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex items-center justify-center pt-2 " },
              [
                _c(
                  "button",
                  {
                    staticClass:
                      "px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400",
                    attrs: { disabled: !_vm.isDisabled }
                  },
                  [_vm._v(_vm._s(_vm.submit_value))]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300",
                    on: {
                      click: function($event) {
                        _vm.modalRTGSManual = !_vm.modalRTGSManual
                      }
                    }
                  },
                  [_vm._v("Cancel")]
                )
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.modalCashManual
      ? _c("div", {
          staticClass:
            "absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15",
          on: {
            click: function($event) {
              _vm.modalCashManual = !_vm.modalCashManual
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.modalCashManual
      ? _c(
          "form",
          {
            staticClass:
              "absolute left-0 right-0 z-50 w-11/12 pb-6 ml-auto mr-auto bg-white rounded-lg top-2 md:w-4/5 lg:w-1/2",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.approveCash.apply(null, arguments)
              }
            }
          },
          [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Amount to be Paid")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentCash.total_amount,
                      expression: "paymentCash.total_amount"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 text-xl font-bold text-green-400 bg-white rounded-lg focus:outline-none",
                  attrs: { type: "text", readonly: "" },
                  domProps: { value: _vm.paymentCash.total_amount },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentCash,
                        "total_amount",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Payer's Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentCash.payer_name,
                      expression: "paymentCash.payer_name"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { placeholder: "Amount Payer's Name ", type: "text" },
                  domProps: { value: _vm.paymentCash.payer_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentCash,
                        "payer_name",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Payer's Phone No")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentCash.payer_phone,
                      expression: "paymentCash.payer_phone"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: {
                    placeholder: "Amount Payer Phone Number",
                    type: "text"
                  },
                  domProps: { value: _vm.paymentCash.payer_phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentCash,
                        "payer_phone",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Identification Type")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.paymentCash.identification_type,
                        expression: "paymentCash.identification_type"
                      }
                    ],
                    staticClass:
                      "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                    attrs: { placeholder: "gggggg" },
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
                          _vm.paymentCash,
                          "identification_type",
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
                        staticClass: "inline-block text-textgrayform",
                        attrs: { value: "default", disabled: "", selected: "" }
                      },
                      [
                        _vm._v(
                          "Payer's Adhaar/Pan/Driving\n                    Lisence option"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Adhaar Card" } }, [
                      _vm._v("Adhaar Card")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Pan Card" } }, [
                      _vm._v("Pan Card")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Driving Lisence" } }, [
                      _vm._v("Driving Lisence")
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Identification No.")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentCash.identification_no,
                      expression: "paymentCash.identification_no"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: {
                    placeholder: "Payer's Adhaar/Pan/Driving Licence Number",
                    type: "text"
                  },
                  domProps: { value: _vm.paymentCash.identification_no },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentCash,
                        "identification_no",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Location of Road Cutting")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentCash.road_location,
                      expression: "paymentCash.road_location"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: {
                    placeholder: "Location of Road Cutting",
                    type: "text"
                  },
                  domProps: { value: _vm.paymentCash.road_location },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentCash,
                        "road_location",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("House No For Road Cutting ")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentCash.house_no,
                      expression: "paymentCash.house_no"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: {
                    placeholder: "House No. For Road Cuttingr",
                    type: "text"
                  },
                  domProps: { value: _vm.paymentCash.house_no },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.paymentCash, "house_no", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Amount Receiver")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentCash.amount_receiver_name,
                      expression: "paymentCash.amount_receiver_name"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { placeholder: "Amount Receiver Name", type: "text" },
                  domProps: { value: _vm.paymentCash.amount_receiver_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentCash,
                        "amount_receiver_name",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Amount Receiver's Phone No.")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentCash.amount_receiver_phone,
                      expression: "paymentCash.amount_receiver_phone"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: {
                    placeholder: "Amount Receiver Phone No",
                    type: "text"
                  },
                  domProps: { value: _vm.paymentCash.amount_receiver_phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentCash,
                        "amount_receiver_phone",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg"
              },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "absolute px-4 py-2 font-bold text-blue-500 text-md"
                  },
                  [_vm._v("Cash Payment Date")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentCash.cash_pay_date,
                      expression: "paymentCash.cash_pay_date"
                    }
                  ],
                  staticClass:
                    "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                  attrs: { type: "date" },
                  domProps: { value: _vm.paymentCash.cash_pay_date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.paymentCash,
                        "cash_pay_date",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex items-center justify-center pt-2 " },
              [
                _c(
                  "button",
                  {
                    staticClass:
                      "px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400",
                    attrs: { disabled: !_vm.isDisabled }
                  },
                  [_vm._v(_vm._s(_vm.submit_value))]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300",
                    on: {
                      click: function($event) {
                        _vm.modalCashManual = !_vm.modalCashManual
                      }
                    }
                  },
                  [_vm._v("Cancel")]
                )
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "flex flex-col md:mt-6 sm:w-full md:w-1/2" }, [
      _vm.loading
        ? _c("div", [_vm._v("\n            Loading...\n        ")])
        : _c("div", [
            _c(
              "a",
              {
                staticClass: "text-blue-400",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    return _vm.$router.back()
                  }
                }
              },
              [_vm._v("\n                Back\n            ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg"
              },
              [
                _c("div", { staticClass: "flex flex-col ml-8" }, [
                  _c("p", { staticClass: "text-sm font-light" }, [
                    _vm._v("Memo No")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-lg font-medium" }, [
                    _vm._v(_vm._s(_vm.form.memo))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "px-4 py-1 mr-1 text-white rounded-lg hover:bg-gray-300",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.printme.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        attrs: {
                          height: "30pt",
                          viewBox: "-27 -67 859.31017 859",
                          width: "30pt",
                          xmlns: "http://www.w3.org/2000/svg"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"
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
                staticClass:
                  "h-auto pb-4 bg-white border-gray-200 rounded-t-lg rounded-b-lg"
              },
              [
                _c(
                  "div",
                  { staticClass: "grid grid-cols-2 gap-2 ml-3 md:ml-4" },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("span"),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": " + _vm._s(_vm.form.name))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Email ID")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": " + _vm._s(_vm.form.email))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Phone Number")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": " + _vm._s(_vm.form.phone))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Residence Address")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(
                        ": " +
                          _vm._s(_vm.form.rhouseno) +
                          ", " +
                          _vm._s(_vm.form.rlocalcouncil_name)
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Roadcutting Address")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(
                        ": " +
                          _vm._s(_vm.form.houseno) +
                          ", " +
                          _vm._s(_vm.form.localcouncil_name)
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Engineer I/C")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(
                        ": " +
                          _vm._s(_vm.form.engineer_name) +
                          ", " +
                          _vm._s(_vm.form.engineer_post)
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Engg I/C Phone")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": " + _vm._s(_vm.form.engineer_phone))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 mb-1" }, [
                      _vm._v("Form Submitted")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1 mb-1" }, [
                      _vm._v(": " + _vm._s(_vm.form.created_at))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "grid grid-cols-2 gap-2 ml-3 md:ml-4" },
                  [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("span"),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Road Name")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": " + _vm._s(_vm.estimate.road_name))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Road Type")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": " + _vm._s(_vm.estimate.road_type))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Length of Road ")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": " + _vm._s(_vm.estimate.length) + " meter")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Breadth of Road")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": " + _vm._s(_vm.estimate.breadth) + " meter")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Rate")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": " + _vm._s(_vm.estimate.rate) + " per sq meter")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Amount")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": Rs. " + _vm._s(_vm.estimate.amount))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Deposit")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": Rs. " + _vm._s(_vm.estimate.deposit))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Total")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": Rs. " + _vm._s(_vm.estimate.total))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v("Estimate Submitted")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [
                      _vm._v(": " + _vm._s(_vm.estimate.created_at))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "py-1" }, [_vm._v("Status")]),
                    _vm._v(" "),
                    _vm.estimate.estimate_status == 0
                      ? [
                          _c("p", { staticClass: "py-1 text-red-500" }, [
                            _vm._v(": Pending for Approval")
                          ])
                        ]
                      : _vm.estimate.estimate_status == 1
                      ? [
                          _c("p", { staticClass: "py-1 text-green-500" }, [
                            _vm._v(": Approved")
                          ])
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("hr")
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.currentUser.role_id == 2
                  ? [
                      _c("hr"),
                      _vm._v(" "),
                      _vm._m(5),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "grid grid-cols-2 gap-2 ml-3 md:ml-4" },
                        [
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v("Enter Manually For UPI")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "px-6 py-2 mt-1 text-sm font-bold text-center text-white bg-blue-700 border rounded hover:bg-blue-600",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    _vm.modalOnlineManual = !_vm.modalOnlineManual
                                  }
                                }
                              },
                              [_vm._v("Click For UPI")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _vm._m(6),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "grid grid-cols-2 gap-2 ml-3 md:ml-4" },
                        [
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v("Enter Manually For RTGS/NEFT")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "px-6 py-2 mt-1 text-sm font-bold text-center text-white bg-blue-700 border rounded hover:bg-blue-600",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    _vm.modalRTGSManual = !_vm.modalRTGSManual
                                  }
                                }
                              },
                              [_vm._v("Click For RTGS/NEFT")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _vm._m(7),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "grid grid-cols-2 gap-2 ml-3 md:ml-4" },
                        [
                          _c("p", { staticClass: "py-1" }, [
                            _vm._v("Enter Manually For Cash Payment")
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "px-6 py-2 mt-1 text-sm font-bold text-center text-white bg-blue-700 border rounded hover:bg-blue-600",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    _vm.modalCashManual = !_vm.modalCashManual
                                  }
                                }
                              },
                              [_vm._v("Click For Cash")]
                            )
                          ])
                        ]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-center" }, [
      _c(
        "h1",
        { staticClass: "px-4 py-2 text-xl font-bold text-blue-600 underline" },
        [_vm._v("UPI MANUAL FILL UP")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-center" }, [
      _c(
        "h1",
        { staticClass: "px-4 py-2 text-xl font-bold text-blue-600 underline" },
        [_vm._v("RTGS/NEFT MANUAL FILL UP")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-center" }, [
      _c(
        "h1",
        { staticClass: "px-4 py-2 text-xl font-bold text-blue-600 underline" },
        [_vm._v("CASH MANUAL FILL UP")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-1 mt-1" }, [
      _c("b", [_vm._v("Applicant Details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-1 mt-1" }, [
      _c("b", [_vm._v("Estimate Details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-1 mt-4 mb-3 ml-3 md:ml-4 " }, [
      _c("b", [_vm._v("Successful UPI/Banking But System Failure")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-1 mt-4 mb-3 ml-3 md:ml-4 " }, [
      _c("b", [_vm._v("For RTGS/NEFT Payment")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-1 mt-4 mb-3 ml-3 md:ml-4 " }, [
      _c("b", [_vm._v("For Cash Payment")])
    ])
  }
]
render._withStripped = true



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



/***/ }),

/***/ "./resources/js/views/SDO/EstimateShowSDO.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/SDO/EstimateShowSDO.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EstimateShowSDO_vue_vue_type_template_id_f0e27f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstimateShowSDO.vue?vue&type=template&id=f0e27f0e&scoped=true& */ "./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=template&id=f0e27f0e&scoped=true&");
/* harmony import */ var _EstimateShowSDO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstimateShowSDO.vue?vue&type=script&lang=js& */ "./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EstimateShowSDO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EstimateShowSDO_vue_vue_type_template_id_f0e27f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EstimateShowSDO_vue_vue_type_template_id_f0e27f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f0e27f0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SDO/EstimateShowSDO.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowSDO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstimateShowSDO.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowSDO_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=template&id=f0e27f0e&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=template&id=f0e27f0e&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowSDO_vue_vue_type_template_id_f0e27f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstimateShowSDO.vue?vue&type=template&id=f0e27f0e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SDO/EstimateShowSDO.vue?vue&type=template&id=f0e27f0e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowSDO_vue_vue_type_template_id_f0e27f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstimateShowSDO_vue_vue_type_template_id_f0e27f0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);