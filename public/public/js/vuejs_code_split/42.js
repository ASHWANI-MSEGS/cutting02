(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TrackForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TrackForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "TrackForm",
  data: function data() {
    return {
      memo: {
        number: ''
      },
      form: {}
    };
  },
  methods: {
    trackForm: function trackForm() {
      var _this = this;

      axios.post('/api/auth/track', this.memo).then(function (response) {
        _this.form = response.data.form[0];
        console.log(_this.form); // this.$router.push({path: '/'});
      })["catch"](function (error) {
        console.log(error.response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cls-1[data-v-d3ad11c0] {\n  opacity: 0.39;\n}\n.cls-2[data-v-d3ad11c0], .cls-4[data-v-d3ad11c0] {\n  font-size: 16px;\n}\n.cls-2[data-v-d3ad11c0] {\n  fill: #fff;\n}\n.cls-2[data-v-d3ad11c0], .cls-3[data-v-d3ad11c0], .cls-4[data-v-d3ad11c0] {\n  font-family: Poppins;\n}\n.cls-3[data-v-d3ad11c0] {\n  font-size: 14px;\n  fill: #838383;\n}\n.cls-4[data-v-d3ad11c0] {\n  fill: #1f1f1f;\n}\n.cls-5[data-v-d3ad11c0] {\n  fill: #ff1a68;\n}\n.cls-6[data-v-d3ad11c0] {\n  fill: #0f4094;\n}\n.st0[data-v-d3ad11c0]{\n  fill:#FF7EAA;\n}\n.st1[data-v-d3ad11c0]{\n  font-family:'Poppins-Regular';\n}\n.st2[data-v-d3ad11c0]{\n  font-size:14px;\n}\n.st3[data-v-d3ad11c0]{\n  fill:#1F1F1F;\n}\n.st4[data-v-d3ad11c0]{\n  font-size:16px;\n}\n.st5[data-v-d3ad11c0]{\n  fill:#FF1A68;\n}\n.st6[data-v-d3ad11c0]{\n  fill:#FFFFFF;\n}\n.st7[data-v-d3ad11c0]{\n  fill:#838383;\n}\n.st8[data-v-d3ad11c0]{\n  fill:#0F4094;\n}\n.cls-1[data-v-d3ad11c0] {\n  fill: #e2e8f0;\n}\n.cls-2[data-v-d3ad11c0] {\n  opacity: 0.39;\n}\n.cls-3[data-v-d3ad11c0] {\n  font-size: 14px;\n  fill: #838383;\n}\n.cls-3[data-v-d3ad11c0], .cls-4[data-v-d3ad11c0], .cls-7[data-v-d3ad11c0] {\n  font-family: Poppins;\n}\n.cls-4[data-v-d3ad11c0] {\n  font-size: 16px;\n  fill: #1f1f1f;\n}\n.cls-5[data-v-d3ad11c0] {\n  fill: #ff1a68;\n}\n.cls-6[data-v-d3ad11c0] {\n  fill: #0f4094;\n}\n.cls-7[data-v-d3ad11c0] {\n  font-size: 6.829px;\n  fill: #1f4490;\n  font-weight: 700;\n}\n.cls-1[data-v-d3ad11c0] {\n  fill: #e2e8f0;\n}\n.cls-2[data-v-d3ad11c0] {\n  opacity: 0.39;\n}\n.cls-3[data-v-d3ad11c0], .cls-6[data-v-d3ad11c0] {\n  font-size: 14px;\n}\n.cls-3[data-v-d3ad11c0] {\n  fill: #ff7eaa;\n}\n.cls-3[data-v-d3ad11c0], .cls-4[data-v-d3ad11c0], .cls-5[data-v-d3ad11c0], .cls-6[data-v-d3ad11c0], .cls-9[data-v-d3ad11c0] {\n  font-family: Poppins;\n}\n.cls-4[data-v-d3ad11c0], .cls-5[data-v-d3ad11c0] {\n  font-size: 16px;\n}\n.cls-4[data-v-d3ad11c0] {\n  fill: #1f1f1f;\n}\n.cls-5[data-v-d3ad11c0], .cls-7[data-v-d3ad11c0] {\n  fill: #ff1a68;\n}\n.cls-6[data-v-d3ad11c0] {\n  fill: #838383;\n}\n.cls-8[data-v-d3ad11c0] {\n  fill: #0f4094;\n}\n.cls-9[data-v-d3ad11c0] {\n  font-size: 6.829px;\n  fill: #1f4490;\n  font-weight: 700;\n}\n.cls-1[data-v-d3ad11c0] {\n  fill: #e2e8f0;\n}\n.cls-2[data-v-d3ad11c0], .cls-4[data-v-d3ad11c0] {\n  font-size: 14px;\n}\n.cls-2[data-v-d3ad11c0] {\n  fill: #ffa2c2;\n}\n.cls-2[data-v-d3ad11c0], .cls-3[data-v-d3ad11c0], .cls-4[data-v-d3ad11c0], .cls-8[data-v-d3ad11c0], .cls-9[data-v-d3ad11c0] {\n  font-family: Poppins;\n}\n.cls-3[data-v-d3ad11c0], .cls-8[data-v-d3ad11c0] {\n  font-size: 16px;\n}\n.cls-3[data-v-d3ad11c0], .cls-5[data-v-d3ad11c0] {\n  fill: #ff1a68;\n}\n.cls-4[data-v-d3ad11c0] {\n  fill: #838383;\n}\n.cls-6[data-v-d3ad11c0] {\n  fill: #0f4094;\n}\n.cls-7[data-v-d3ad11c0] {\n  opacity: 0.39;\n}\n.cls-8[data-v-d3ad11c0] {\n  fill: #1f1f1f;\n}\n.cls-9[data-v-d3ad11c0] {\n  font-size: 6.829px;\n  fill: #1f4490;\n  font-weight: 700;\n}\n.cls-1[data-v-d3ad11c0] {\n  fill: #e2e8f0;\n}\n.cls-2[data-v-d3ad11c0], .cls-4[data-v-d3ad11c0] {\n  font-size: 14px;\n}\n.cls-2[data-v-d3ad11c0] {\n  fill: #ffa2c2;\n}\n.cls-2[data-v-d3ad11c0], .cls-3[data-v-d3ad11c0], .cls-4[data-v-d3ad11c0], .cls-8[data-v-d3ad11c0], .cls-9[data-v-d3ad11c0] {\n  font-family: Poppins;\n}\n.cls-3[data-v-d3ad11c0], .cls-8[data-v-d3ad11c0] {\n  font-size: 16px;\n}\n.cls-3[data-v-d3ad11c0], .cls-5[data-v-d3ad11c0] {\n  fill: #ff1a68;\n}\n.cls-4[data-v-d3ad11c0] {\n  fill: #838383;\n}\n.cls-6[data-v-d3ad11c0] {\n  fill: #0f4094;\n}\n.cls-7[data-v-d3ad11c0] {\n  opacity: 0.39;\n}\n.cls-8[data-v-d3ad11c0] {\n  fill: #1f1f1f;\n}\n.cls-9[data-v-d3ad11c0] {\n  font-size: 6.829px;\n  fill: #1f4490;\n  font-weight: 700;\n}\n.cls-1[data-v-d3ad11c0] {\n  fill: #e2e8f0;\n}\n.cls-2[data-v-d3ad11c0], .cls-6[data-v-d3ad11c0] {\n  font-size: 14px;\n}\n.cls-2[data-v-d3ad11c0] {\n  fill: #ffa2c2;\n}\n.cls-2[data-v-d3ad11c0], .cls-3[data-v-d3ad11c0], .cls-6[data-v-d3ad11c0], .cls-7[data-v-d3ad11c0], .cls-8[data-v-d3ad11c0] {\n  font-family: Poppins;\n}\n.cls-3[data-v-d3ad11c0], .cls-7[data-v-d3ad11c0] {\n  font-size: 16px;\n}\n.cls-3[data-v-d3ad11c0], .cls-4[data-v-d3ad11c0] {\n  fill: #ff1a68;\n}\n.cls-5[data-v-d3ad11c0] {\n  opacity: 0.39;\n}\n.cls-6[data-v-d3ad11c0] {\n  fill: #838383;\n}\n.cls-7[data-v-d3ad11c0] {\n  fill: #1f1f1f;\n}\n.cls-8[data-v-d3ad11c0] {\n  font-size: 6.829px;\n  fill: #1f4490;\n  font-weight: 700;\n}\n.cls-1[data-v-d3ad11c0] {\n  fill: #e2e8f0;\n}\n.cls-2[data-v-d3ad11c0] {\n  font-size: 14px;\n  fill: #ffa2c2;\n}\n.cls-2[data-v-d3ad11c0], .cls-3[data-v-d3ad11c0], .cls-5[data-v-d3ad11c0] {\n  font-family: Poppins;\n}\n.cls-3[data-v-d3ad11c0] {\n  font-size: 16px;\n}\n.cls-3[data-v-d3ad11c0], .cls-4[data-v-d3ad11c0] {\n  fill: #ff1a68;\n}\n.cls-5[data-v-d3ad11c0] {\n  font-size: 6.829px;\n  fill: #1f4490;\n  font-weight: 700;\n}\n\n\n\n    ", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TrackForm.vue?vue&type=template&id=d3ad11c0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TrackForm.vue?vue&type=template&id=d3ad11c0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: " h-screen" },
    [
      _c(
        "div",
        {
          staticClass:
            "bg-white h-64 rounded-lg   rounded-b-lg border-gray-200 sm:w-full md:w-1/2"
        },
        [
          _c("div", { staticClass: "px-4 py-4" }, [
            _c("div", [
              _c(
                "div",
                {
                  staticClass:
                    "text-gray-600 pt-2 uppercase text-xls font-bold pr-4"
                },
                [_vm._v("Form Track-na ")]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.trackForm.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "flex " }, [
                      _c(
                        "label",
                        {
                          staticClass: "text-gray-600 font-bold pr-4",
                          attrs: { for: "name" }
                        },
                        [_vm._v("Memo No:")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-1 " }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.memo.number,
                              expression: "memo.number"
                            }
                          ],
                          staticClass:
                            " rounded-lg px-3 bg-white border  h-8 focus:bg-blue-100",
                          attrs: {
                            id: "name",
                            type: "text",
                            placeholder: "Memo no. kha enter rawh"
                          },
                          domProps: { value: _vm.memo.number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.memo, "number", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm._m(0)
                  ]
                ),
                _vm._v(" "),
                _c("br")
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      this.form.track_status === 1
        ? [
            _c("div", {}, [
              _c(
                "svg",
                {
                  attrs: {
                    id: "_02_form_approved.svg",
                    "data-name": "02 form approved.svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    width: "400",
                    height: "686",
                    viewBox: "0 0 400 686"
                  }
                },
                [
                  _c("defs", [
                    _c("image", {
                      attrs: {
                        id: "image",
                        width: "21",
                        height: "21",
                        "xlink:href":
                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABdElEQVQ4jbWVMU8CQRCFP1ckdvIDLGyIiQnBxkYLoNTY2NFhIlBA4r+wtRIKPBLt+AH2SENBJaWhsbbxaiTGjHlrNioJcPE1O1nmvZvh5s2tbRVvmIMCUNaZBVLADJgAA6BnZ9xv/mL/JZoH2sDhvKcFGAKNuN8ch5fuR1IFGEnQEq+AHJC2AnTmdD9W3ihTalXmVWo/3CnuAtUFKo2AC8Xncb95H1ZqLXcU1xYURHk1xZ1MqZUPRdtqraunL4NIvLR0vtq3t/uo/2h/ScEQT+q46DQ2hocEgiG/7DSHaO6SwPMLToNteE4o6vlZJ6cY3hOKen7KyXqGjYSinj9z8rJhN6Go50+clgPBFKwKzx+44K2dJhT1/J6vdKjBXdZNHpH4w7jfHHibNoCplsOivveoijeVzrf3zaJ1xbdLVBwp31D3e3V9c+fEJ9jFC2AXB8AZsA28Am/Ah8ZmD7gEroFj36Ffe4Z/2fzeTSEs4WjlbxTwCS9NY1QXKS3nAAAAAElFTkSuQmCC"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-1",
                    attrs: { width: "402", height: "686" }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    staticClass: "cls-2",
                    attrs: {
                      id: "Vector_Smart_Object_copy",
                      "data-name": "Vector Smart Object copy",
                      x: "39",
                      y: "190",
                      width: "41",
                      height: "41",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAACAUlEQVRYhc2ZT0sCQRyGH8cwIoKwooPXSjqJnQqib9A36gt17Ct08ZZ0iP6dO4glQYQQmDHyjui6bmu5u78HBlzZnXl2Z1Zn3ikNLy75IxtADdgFNnVcAUrAEPgCPoB3oAO86HhhVha8oAwcAPvATsJ5XnRVZRvY0/dd4Bl4AgZpG00r6YBDoAGspa08hh2VJnAL3APfy5DcAs6A6j/kovgbPVavXANvSSe7XyqrA+dLFpykqvrrSSclPckjdUvW+HF+CqwDN3FtzXuSeQlO0lS7M8RJ1gsQDDTjuj4q6V+Sk1y1ZjmRxxgX+XymMVIkZXm4OMnDDN/iRanKZ0qyrB9qSzRCrwbJg3/+k2TBmrzGkvvGBAMjL6fZS9JkoUi814bTdMsyNaf5oGV2nSasltkMY9IyozFZMS5ZcZrqW6bktGiyzNBpVWeZL/fXZWaOfDitiy3z7rRwt0zHKVmwzEsYk12jkt0wJlH0YZGRV5D02UzfmGRfXmPJgbIZS9yGUGtyIebDo54RyZ58RkxKfis8Sh3JZcRAHuO0LRoO+HSrVbBkK5qyxcUsj0A7P6cp2mp/inmB1U0Bou15qVpS9Ocv+FQ2k2X0MlAXzzzBwG9Jr7/wNYOkN9BLk/SmiaN9BVdLyswD/WVn5qiiO+Ah5e7DPDLdfQj4iv3d+5LPPg7wA8CSZXDUuKMEAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_sending_for_approval",
                        "data-name": "Form sending for approval",
                        x: "88.948",
                        y: "158.724"
                      }
                    },
                    [_vm._v("Form sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Estimate_Completed",
                        "data-name": "Estimate Completed",
                        x: "89.448",
                        y: "298.223"
                      }
                    },
                    [_vm._v("Estimate Completed")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-5",
                      attrs: {
                        id: "Form_Submitted",
                        "data-name": "Form Submitted",
                        x: "89.448",
                        y: "116.223"
                      }
                    },
                    [_vm._v("Form Submitted")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-6",
                      attrs: {
                        id: "Assign_Engineer_for_estimate",
                        "data-name": "Assign Engineer for estimate",
                        x: "88.948",
                        y: "249.724"
                      }
                    },
                    [_vm._v("Assign Engineer for estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Form_Approved",
                        "data-name": "Form Approved",
                        x: "89.448",
                        y: "207.223"
                      }
                    },
                    [_vm._v("Form Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-6",
                      attrs: {
                        id: "Sending_for_approval",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "345.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-6",
                      attrs: {
                        id: "Download_Estimate",
                        "data-name": "Download Estimate",
                        x: "89.448",
                        y: "436.224"
                      }
                    },
                    [_vm._v("Download Estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-6",
                      attrs: {
                        id: "Sending_for_approval-2",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "524.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-7",
                    attrs: { x: "58", y: "128", width: "2", height: "74" }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-7",
                    attrs: {
                      id: "Rectangle_4_copy",
                      "data-name": "Rectangle 4 copy",
                      x: "58",
                      y: "219",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-8",
                    attrs: {
                      id: "Rectangle_4_copy_2",
                      "data-name": "Rectangle 4 copy 2",
                      x: "58",
                      y: "312",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-8",
                    attrs: {
                      id: "Rectangle_4_copy_3",
                      "data-name": "Rectangle 4 copy 3",
                      x: "58",
                      y: "404",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-8",
                    attrs: {
                      id: "Rectangle_4_copy_4",
                      "data-name": "Rectangle 4 copy 4",
                      x: "58",
                      y: "498",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-8",
                    attrs: {
                      id: "Rectangle_4_copy_5",
                      "data-name": "Rectangle 4 copy 5",
                      x: "58",
                      y: "590",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    attrs: {
                      id: "Vector_Smart_Object",
                      "data-name": "Vector Smart Object",
                      x: "49",
                      y: "200",
                      width: "21",
                      height: "21",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA8ElEQVQ4ja2VvQ6CMBRGjw3hIdyZ3Rx04DXYdCLGB2Jw0o3XYGFgc+ZNCInmklvSIER+epYm5Pb0tmk/dp/9jQliINExAgKgBWqgAHIdfxiTHoAMOE2t5lACd+DtfjSDogtQzRSidZXO6wkGwudMmUvozHu5ncqWHyuELg/19NJMV9xCqJ5OGi84w3+IJzZ6bXyS2E590nUaeZZGZnCtfBAYfXo+aY2+ZZ/UZioUNlAYTRuf5LbT0pO0tJ2i8dVsFDbq6d++5GG6UZraXHXzVGLruqJjqZd5XewNpVZ8XHDGUif1vVAYe02yhfPqfxTwBQ9FMXe/8kETAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_22",
                      "data-name": "Vector Smart Object copy 22",
                      x: "49",
                      y: "292",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_23",
                      "data-name": "Vector Smart Object copy 23",
                      x: "49",
                      y: "384",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_24",
                      "data-name": "Vector Smart Object copy 24",
                      x: "49",
                      y: "477",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_25",
                      "data-name": "Vector Smart Object copy 25",
                      x: "49",
                      y: "570",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Estimate_Approved",
                        "data-name": "Estimate Approved",
                        x: "89.448",
                        y: "392.224"
                      }
                    },
                    [_vm._v("Estimate Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Make_Payment",
                        "data-name": "Make Payment",
                        x: "89.448",
                        y: "482.224"
                      }
                    },
                    [_vm._v("Make Payment")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-6",
                      attrs: {
                        id: "Download_Permit",
                        "data-name": "Download Permit",
                        x: "89.448",
                        y: "617.224"
                      }
                    },
                    [_vm._v("Download Permit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Permit_Granted",
                        "data-name": "Permit Granted",
                        x: "89.448",
                        y: "575.224"
                      }
                    },
                    [_vm._v("Permit Granted")]
                  ),
                  _vm._v(" "),
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "Group_3_copy_2",
                        "data-name": "Group 3 copy 2"
                      }
                    },
                    [
                      _c("image", {
                        attrs: {
                          id: "Vector_Smart_Object_copy_40",
                          "data-name": "Vector Smart Object copy 40",
                          x: "48",
                          y: "109",
                          width: "21",
                          height: "21",
                          "xlink:href":
                            "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACJElEQVQ4jaWVTWgTQRTHf7NdW9OYqgF7iOcqChootKAeGkGs+AF6EKoHLSIhRASldwueelHxYEi9WEHEKnjQk1AxAVtQUNCIQlUoogsKCjVY2+3Hyk5m0sTdxU39X4ad3febt/ve+68gQE4i0wP0Ae7aAZjAAvAeKAJ3hJUv+kV7oE4ikwRywM6gA2s0AWSFlX8VCHUSmZPAdaA5BFDLBtLCyt/0QBVwpAHY3+rXYMHyKz9vMEO/jLvdT2Gojdx/AlHxOZmpqnJhRZgjXTi927EH79Lytax3U6Zqm8bU3gZDx6E3Kb+fPfmZ5suPdIH6TNWH4XWwswJcH5Uhc09KzN14TGwZ0GOqxq6otQXn/H4YKyGefag/J74Gho7BgU556czalC+OsjhSIC5W1TZSh6kmRWrp9G6M7F6cUymcE9cQ45OVG/uSlew2tMnL+ddT/DwzTPTjd1YLT31Nt1DzGrywdSNN9wcQsYjMhMF7iB2b4HCXOtWhfPUB9pWHrFs0afIOpMS40LfAFr3za1uCyO1zGPFY/ZNT35g+O0zkxSdahekH03pnKHOoKlqymD16iaUf1RZh5laB6T0XWPvyy7+AroqBfTqzuR1j4BC/R59ijr0hJosRSik9puN+ruSoNdAfvZoQVn6XHtOsmt06icaAtuIgocoP0+HjfZXWvqozdcGubfX7ZRwiw6rt1UFrwN3K0cPIfc61uypQcoIiV/yPAv4AQZqs6jeW/JAAAAAASUVORK5CYII="
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-9",
                      attrs: {
                        id: "TRACKING_FORM_copy",
                        "data-name": "TRACKING FORM copy",
                        transform: "translate(49 60.278) scale(3.661)"
                      }
                    },
                    [_vm._v("TRACKING FORM")]
                  )
                ]
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      this.form.track_status === 2
        ? [
            _c("div", {}, [
              _c(
                "svg",
                {
                  attrs: {
                    id: "_03_Estimate_Compleyed.svg",
                    "data-name": "03 Estimate Compleyed.svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    width: "400",
                    height: "686",
                    viewBox: "0 0 400 686"
                  }
                },
                [
                  _c("defs", [
                    _c("image", {
                      attrs: {
                        id: "image",
                        width: "21",
                        height: "21",
                        "xlink:href":
                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABdElEQVQ4jbWVMU8CQRCFP1ckdvIDLGyIiQnBxkYLoNTY2NFhIlBA4r+wtRIKPBLt+AH2SENBJaWhsbbxaiTGjHlrNioJcPE1O1nmvZvh5s2tbRVvmIMCUNaZBVLADJgAA6BnZ9xv/mL/JZoH2sDhvKcFGAKNuN8ch5fuR1IFGEnQEq+AHJC2AnTmdD9W3ihTalXmVWo/3CnuAtUFKo2AC8Xncb95H1ZqLXcU1xYURHk1xZ1MqZUPRdtqraunL4NIvLR0vtq3t/uo/2h/ScEQT+q46DQ2hocEgiG/7DSHaO6SwPMLToNteE4o6vlZJ6cY3hOKen7KyXqGjYSinj9z8rJhN6Go50+clgPBFKwKzx+44K2dJhT1/J6vdKjBXdZNHpH4w7jfHHibNoCplsOivveoijeVzrf3zaJ1xbdLVBwp31D3e3V9c+fEJ9jFC2AXB8AZsA28Am/Ah8ZmD7gEroFj36Ffe4Z/2fzeTSEs4WjlbxTwCS9NY1QXKS3nAAAAAElFTkSuQmCC"
                      }
                    }),
                    _vm._v(" "),
                    _c("image", {
                      attrs: {
                        id: "image-2",
                        width: "21",
                        height: "21",
                        "xlink:href":
                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACJElEQVQ4jaWVTWgTQRTHf7NdW9OYqgF7iOcqChootKAeGkGs+AF6EKoHLSIhRASldwueelHxYEi9WEHEKnjQk1AxAVtQUNCIQlUoogsKCjVY2+3Hyk5m0sTdxU39X4ad3febt/ve+68gQE4i0wP0Ae7aAZjAAvAeKAJ3hJUv+kV7oE4ikwRywM6gA2s0AWSFlX8VCHUSmZPAdaA5BFDLBtLCyt/0QBVwpAHY3+rXYMHyKz9vMEO/jLvdT2Gojdx/AlHxOZmpqnJhRZgjXTi927EH79Lytax3U6Zqm8bU3gZDx6E3Kb+fPfmZ5suPdIH6TNWH4XWwswJcH5Uhc09KzN14TGwZ0GOqxq6otQXn/H4YKyGefag/J74Gho7BgU556czalC+OsjhSIC5W1TZSh6kmRWrp9G6M7F6cUymcE9cQ45OVG/uSlew2tMnL+ddT/DwzTPTjd1YLT31Nt1DzGrywdSNN9wcQsYjMhMF7iB2b4HCXOtWhfPUB9pWHrFs0afIOpMS40LfAFr3za1uCyO1zGPFY/ZNT35g+O0zkxSdahekH03pnKHOoKlqymD16iaUf1RZh5laB6T0XWPvyy7+AroqBfTqzuR1j4BC/R59ijr0hJosRSik9puN+ruSoNdAfvZoQVn6XHtOsmt06icaAtuIgocoP0+HjfZXWvqozdcGubfX7ZRwiw6rt1UFrwN3K0cPIfc61uypQcoIiV/yPAv4AQZqs6jeW/JAAAAAASUVORK5CYII="
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-1",
                    attrs: {
                      id: "Rectangle_5_copy",
                      "data-name": "Rectangle 5 copy",
                      width: "402",
                      height: "686"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Form_sending_for_approval",
                        "data-name": "Form sending for approval",
                        x: "88.948",
                        y: "158.724"
                      }
                    },
                    [_vm._v("Form sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Completed",
                        "data-name": "Estimate Completed",
                        x: "89.448",
                        y: "298.223"
                      }
                    },
                    [_vm._v("Estimate Completed")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Form_Submitted",
                        "data-name": "Form Submitted",
                        x: "89.448",
                        y: "116.223"
                      }
                    },
                    [_vm._v("Form Submitted")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Assign_Engineer_for_estimate",
                        "data-name": "Assign Engineer for estimate",
                        x: "88.948",
                        y: "249.724"
                      }
                    },
                    [_vm._v("Assign Engineer for estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Form_Approved",
                        "data-name": "Form Approved",
                        x: "89.448",
                        y: "207.223"
                      }
                    },
                    [_vm._v("Form Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-5",
                      attrs: {
                        id: "Sending_for_approval",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "345.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-5",
                      attrs: {
                        id: "Download_Estimate",
                        "data-name": "Download Estimate",
                        x: "89.448",
                        y: "436.224"
                      }
                    },
                    [_vm._v("Download Estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-5",
                      attrs: {
                        id: "Sending_for_approval-2",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "524.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-6",
                    attrs: { x: "58", y: "128", width: "2", height: "74" }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-6",
                    attrs: {
                      id: "Rectangle_4_copy",
                      "data-name": "Rectangle 4 copy",
                      x: "58",
                      y: "219",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-6",
                    attrs: {
                      id: "Rectangle_4_copy_2",
                      "data-name": "Rectangle 4 copy 2",
                      x: "58",
                      y: "312",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-7",
                    attrs: {
                      id: "Rectangle_4_copy_3",
                      "data-name": "Rectangle 4 copy 3",
                      x: "58",
                      y: "404",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-7",
                    attrs: {
                      id: "Rectangle_4_copy_4",
                      "data-name": "Rectangle 4 copy 4",
                      x: "58",
                      y: "498",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-7",
                    attrs: {
                      id: "Rectangle_4_copy_5",
                      "data-name": "Rectangle 4 copy 5",
                      x: "58",
                      y: "590",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    staticClass: "cls-8",
                    attrs: {
                      id: "Vector_Smart_Object_copy_20",
                      "data-name": "Vector Smart Object copy 20",
                      x: "39",
                      y: "282",
                      width: "41",
                      height: "41",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAACAUlEQVRYhc2ZT0sCQRyGH8cwIoKwooPXSjqJnQqib9A36gt17Ct08ZZ0iP6dO4glQYQQmDHyjui6bmu5u78HBlzZnXl2Z1Zn3ikNLy75IxtADdgFNnVcAUrAEPgCPoB3oAO86HhhVha8oAwcAPvATsJ5XnRVZRvY0/dd4Bl4AgZpG00r6YBDoAGspa08hh2VJnAL3APfy5DcAs6A6j/kovgbPVavXANvSSe7XyqrA+dLFpykqvrrSSclPckjdUvW+HF+CqwDN3FtzXuSeQlO0lS7M8RJ1gsQDDTjuj4q6V+Sk1y1ZjmRxxgX+XymMVIkZXm4OMnDDN/iRanKZ0qyrB9qSzRCrwbJg3/+k2TBmrzGkvvGBAMjL6fZS9JkoUi814bTdMsyNaf5oGV2nSasltkMY9IyozFZMS5ZcZrqW6bktGiyzNBpVWeZL/fXZWaOfDitiy3z7rRwt0zHKVmwzEsYk12jkt0wJlH0YZGRV5D02UzfmGRfXmPJgbIZS9yGUGtyIebDo54RyZ58RkxKfis8Sh3JZcRAHuO0LRoO+HSrVbBkK5qyxcUsj0A7P6cp2mp/inmB1U0Bou15qVpS9Ocv+FQ2k2X0MlAXzzzBwG9Jr7/wNYOkN9BLk/SmiaN9BVdLyswD/WVn5qiiO+Ah5e7DPDLdfQj4iv3d+5LPPg7wA8CSZXDUuKMEAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_20-2",
                      "data-name": "Vector Smart Object copy 20",
                      x: "49",
                      y: "292",
                      width: "21",
                      height: "21",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA8ElEQVQ4ja2VvQ6CMBRGjw3hIdyZ3Rx04DXYdCLGB2Jw0o3XYGFgc+ZNCInmklvSIER+epYm5Pb0tmk/dp/9jQliINExAgKgBWqgAHIdfxiTHoAMOE2t5lACd+DtfjSDogtQzRSidZXO6wkGwudMmUvozHu5ncqWHyuELg/19NJMV9xCqJ5OGi84w3+IJzZ6bXyS2E590nUaeZZGZnCtfBAYfXo+aY2+ZZ/UZioUNlAYTRuf5LbT0pO0tJ2i8dVsFDbq6d++5GG6UZraXHXzVGLruqJjqZd5XewNpVZ8XHDGUif1vVAYe02yhfPqfxTwBQ9FMXe/8kETAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_23",
                      "data-name": "Vector Smart Object copy 23",
                      x: "49",
                      y: "384",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_24",
                      "data-name": "Vector Smart Object copy 24",
                      x: "49",
                      y: "477",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_25",
                      "data-name": "Vector Smart Object copy 25",
                      x: "49",
                      y: "570",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Approved",
                        "data-name": "Estimate Approved",
                        x: "89.448",
                        y: "392.224"
                      }
                    },
                    [_vm._v("Estimate Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Make_Payment",
                        "data-name": "Make Payment",
                        x: "89.448",
                        y: "482.224"
                      }
                    },
                    [_vm._v("Make Payment")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-5",
                      attrs: {
                        id: "Download_Permit",
                        "data-name": "Download Permit",
                        x: "89.448",
                        y: "617.224"
                      }
                    },
                    [_vm._v("Download Permit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Permit_Granted",
                        "data-name": "Permit Granted",
                        x: "89.448",
                        y: "575.224"
                      }
                    },
                    [_vm._v("Permit Granted")]
                  ),
                  _vm._v(" "),
                  _c(
                    "g",
                    {
                      attrs: { id: "Group_3_copy", "data-name": "Group 3 copy" }
                    },
                    [
                      _c("use", {
                        attrs: {
                          id: "Vector_Smart_Object_copy_40",
                          "data-name": "Vector Smart Object copy 40",
                          x: "48",
                          y: "109",
                          "xlink:href": "#image-2"
                        }
                      }),
                      _vm._v(" "),
                      _c("use", {
                        attrs: {
                          id: "Vector_Smart_Object_copy_41",
                          "data-name": "Vector Smart Object copy 41",
                          x: "49",
                          y: "200",
                          "xlink:href": "#image-2"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-9",
                      attrs: {
                        id: "TRACKING_FORM_copy_2",
                        "data-name": "TRACKING FORM copy 2",
                        transform: "translate(49 60.278) scale(3.661)"
                      }
                    },
                    [_vm._v("TRACKING FORM")]
                  )
                ]
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      this.form.track_status === 3
        ? [
            _c("div", {}, [
              _c(
                "svg",
                {
                  attrs: {
                    id: "_04_estimate_approved.svg",
                    "data-name": "04 estimate approved.svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    width: "400",
                    height: "686",
                    viewBox: "0 0 400 686"
                  }
                },
                [
                  _c("defs", [
                    _c("image", {
                      attrs: {
                        id: "image",
                        width: "21",
                        height: "21",
                        "xlink:href":
                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABdElEQVQ4jbWVMU8CQRCFP1ckdvIDLGyIiQnBxkYLoNTY2NFhIlBA4r+wtRIKPBLt+AH2SENBJaWhsbbxaiTGjHlrNioJcPE1O1nmvZvh5s2tbRVvmIMCUNaZBVLADJgAA6BnZ9xv/mL/JZoH2sDhvKcFGAKNuN8ch5fuR1IFGEnQEq+AHJC2AnTmdD9W3ihTalXmVWo/3CnuAtUFKo2AC8Xncb95H1ZqLXcU1xYURHk1xZ1MqZUPRdtqraunL4NIvLR0vtq3t/uo/2h/ScEQT+q46DQ2hocEgiG/7DSHaO6SwPMLToNteE4o6vlZJ6cY3hOKen7KyXqGjYSinj9z8rJhN6Go50+clgPBFKwKzx+44K2dJhT1/J6vdKjBXdZNHpH4w7jfHHibNoCplsOivveoijeVzrf3zaJ1xbdLVBwp31D3e3V9c+fEJ9jFC2AXB8AZsA28Am/Ah8ZmD7gEroFj36Ffe4Z/2fzeTSEs4WjlbxTwCS9NY1QXKS3nAAAAAElFTkSuQmCC"
                      }
                    }),
                    _vm._v(" "),
                    _c("image", {
                      attrs: {
                        id: "image-2",
                        width: "21",
                        height: "21",
                        "xlink:href":
                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACJElEQVQ4jaWVTWgTQRTHf7NdW9OYqgF7iOcqChootKAeGkGs+AF6EKoHLSIhRASldwueelHxYEi9WEHEKnjQk1AxAVtQUNCIQlUoogsKCjVY2+3Hyk5m0sTdxU39X4ad3febt/ve+68gQE4i0wP0Ae7aAZjAAvAeKAJ3hJUv+kV7oE4ikwRywM6gA2s0AWSFlX8VCHUSmZPAdaA5BFDLBtLCyt/0QBVwpAHY3+rXYMHyKz9vMEO/jLvdT2Gojdx/AlHxOZmpqnJhRZgjXTi927EH79Lytax3U6Zqm8bU3gZDx6E3Kb+fPfmZ5suPdIH6TNWH4XWwswJcH5Uhc09KzN14TGwZ0GOqxq6otQXn/H4YKyGefag/J74Gho7BgU556czalC+OsjhSIC5W1TZSh6kmRWrp9G6M7F6cUymcE9cQ45OVG/uSlew2tMnL+ddT/DwzTPTjd1YLT31Nt1DzGrywdSNN9wcQsYjMhMF7iB2b4HCXOtWhfPUB9pWHrFs0afIOpMS40LfAFr3za1uCyO1zGPFY/ZNT35g+O0zkxSdahekH03pnKHOoKlqymD16iaUf1RZh5laB6T0XWPvyy7+AroqBfTqzuR1j4BC/R59ijr0hJosRSik9puN+ruSoNdAfvZoQVn6XHtOsmt06icaAtuIgocoP0+HjfZXWvqozdcGubfX7ZRwiw6rt1UFrwN3K0cPIfc61uypQcoIiV/yPAv4AQZqs6jeW/JAAAAAASUVORK5CYII="
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-1",
                    attrs: {
                      id: "Rectangle_5_copy_2",
                      "data-name": "Rectangle 5 copy 2",
                      width: "402",
                      height: "686"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Form_sending_for_approval",
                        "data-name": "Form sending for approval",
                        x: "88.948",
                        y: "158.724"
                      }
                    },
                    [_vm._v("Form sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Completed",
                        "data-name": "Estimate Completed",
                        x: "89.448",
                        y: "298.223"
                      }
                    },
                    [_vm._v("Estimate Completed")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_Submitted",
                        "data-name": "Form Submitted",
                        x: "89.448",
                        y: "116.223"
                      }
                    },
                    [_vm._v("Form Submitted")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Assign_Engineer_for_estimate",
                        "data-name": "Assign Engineer for estimate",
                        x: "88.948",
                        y: "249.724"
                      }
                    },
                    [_vm._v("Assign Engineer for estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_Approved",
                        "data-name": "Form Approved",
                        x: "89.448",
                        y: "207.223"
                      }
                    },
                    [_vm._v("Form Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Sending_for_approval",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "345.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Download_Estimate",
                        "data-name": "Download Estimate",
                        x: "89.448",
                        y: "436.224"
                      }
                    },
                    [_vm._v("Download Estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Sending_for_approval-2",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "524.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-5",
                    attrs: { x: "58", y: "128", width: "2", height: "74" }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-5",
                    attrs: {
                      id: "Rectangle_4_copy",
                      "data-name": "Rectangle 4 copy",
                      x: "58",
                      y: "219",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-5",
                    attrs: {
                      id: "Rectangle_4_copy_2",
                      "data-name": "Rectangle 4 copy 2",
                      x: "58",
                      y: "312",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-5",
                    attrs: {
                      id: "Rectangle_4_copy_3",
                      "data-name": "Rectangle 4 copy 3",
                      x: "58",
                      y: "404",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-6",
                    attrs: {
                      id: "Rectangle_4_copy_4",
                      "data-name": "Rectangle 4 copy 4",
                      x: "58",
                      y: "498",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-6",
                    attrs: {
                      id: "Rectangle_4_copy_5",
                      "data-name": "Rectangle 4 copy 5",
                      x: "58",
                      y: "590",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    staticClass: "cls-7",
                    attrs: {
                      id: "Vector_Smart_Object_copy_20",
                      "data-name": "Vector Smart Object copy 20",
                      x: "39",
                      y: "374",
                      width: "41",
                      height: "41",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAACAUlEQVRYhc2ZT0sCQRyGH8cwIoKwooPXSjqJnQqib9A36gt17Ct08ZZ0iP6dO4glQYQQmDHyjui6bmu5u78HBlzZnXl2Z1Zn3ikNLy75IxtADdgFNnVcAUrAEPgCPoB3oAO86HhhVha8oAwcAPvATsJ5XnRVZRvY0/dd4Bl4AgZpG00r6YBDoAGspa08hh2VJnAL3APfy5DcAs6A6j/kovgbPVavXANvSSe7XyqrA+dLFpykqvrrSSclPckjdUvW+HF+CqwDN3FtzXuSeQlO0lS7M8RJ1gsQDDTjuj4q6V+Sk1y1ZjmRxxgX+XymMVIkZXm4OMnDDN/iRanKZ0qyrB9qSzRCrwbJg3/+k2TBmrzGkvvGBAMjL6fZS9JkoUi814bTdMsyNaf5oGV2nSasltkMY9IyozFZMS5ZcZrqW6bktGiyzNBpVWeZL/fXZWaOfDitiy3z7rRwt0zHKVmwzEsYk12jkt0wJlH0YZGRV5D02UzfmGRfXmPJgbIZS9yGUGtyIebDo54RyZ58RkxKfis8Sh3JZcRAHuO0LRoO+HSrVbBkK5qyxcUsj0A7P6cp2mp/inmB1U0Bou15qVpS9Ocv+FQ2k2X0MlAXzzzBwG9Jr7/wNYOkN9BLk/SmiaN9BVdLyswD/WVn5qiiO+Ah5e7DPDLdfQj4iv3d+5LPPg7wA8CSZXDUuKMEAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_20-2",
                      "data-name": "Vector Smart Object copy 20",
                      x: "49",
                      y: "384",
                      width: "21",
                      height: "21",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA8ElEQVQ4ja2VvQ6CMBRGjw3hIdyZ3Rx04DXYdCLGB2Jw0o3XYGFgc+ZNCInmklvSIER+epYm5Pb0tmk/dp/9jQliINExAgKgBWqgAHIdfxiTHoAMOE2t5lACd+DtfjSDogtQzRSidZXO6wkGwudMmUvozHu5ncqWHyuELg/19NJMV9xCqJ5OGi84w3+IJzZ6bXyS2E590nUaeZZGZnCtfBAYfXo+aY2+ZZ/UZioUNlAYTRuf5LbT0pO0tJ2i8dVsFDbq6d++5GG6UZraXHXzVGLruqJjqZd5XewNpVZ8XHDGUif1vVAYe02yhfPqfxTwBQ9FMXe/8kETAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_24",
                      "data-name": "Vector Smart Object copy 24",
                      x: "49",
                      y: "477",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_25",
                      "data-name": "Vector Smart Object copy 25",
                      x: "49",
                      y: "570",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-8",
                      attrs: {
                        id: "Estimate_Approved",
                        "data-name": "Estimate Approved",
                        x: "89.448",
                        y: "392.224"
                      }
                    },
                    [_vm._v("Estimate Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-8",
                      attrs: {
                        id: "Make_Payment",
                        "data-name": "Make Payment",
                        x: "89.448",
                        y: "482.224"
                      }
                    },
                    [_vm._v("Make Payment")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Download_Permit",
                        "data-name": "Download Permit",
                        x: "89.448",
                        y: "617.224"
                      }
                    },
                    [_vm._v("Download Permit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-8",
                      attrs: {
                        id: "Permit_Granted",
                        "data-name": "Permit Granted",
                        x: "89.448",
                        y: "575.224"
                      }
                    },
                    [_vm._v("Permit Granted")]
                  ),
                  _vm._v(" "),
                  _c("g", [
                    _c("use", {
                      attrs: {
                        id: "Vector_Smart_Object_copy_40",
                        "data-name": "Vector Smart Object copy 40",
                        x: "48",
                        y: "109",
                        "xlink:href": "#image-2"
                      }
                    }),
                    _vm._v(" "),
                    _c("use", {
                      attrs: {
                        id: "Vector_Smart_Object_copy_41",
                        "data-name": "Vector Smart Object copy 41",
                        x: "49",
                        y: "200",
                        "xlink:href": "#image-2"
                      }
                    }),
                    _vm._v(" "),
                    _c("use", {
                      attrs: {
                        id: "Vector_Smart_Object_copy_42",
                        "data-name": "Vector Smart Object copy 42",
                        x: "49",
                        y: "291",
                        "xlink:href": "#image-2"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-9",
                      attrs: {
                        id: "TRACKING_FORM_copy_4",
                        "data-name": "TRACKING FORM copy 4",
                        transform: "translate(49 60.278) scale(3.661)"
                      }
                    },
                    [_vm._v("TRACKING FORM")]
                  )
                ]
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      this.form.track_status === 4 || this.form.track_status === 55
        ? [
            _c("div", { staticClass: "flex items-start  h-24 pt-3" }, [
              _c(
                "div",
                { staticClass: "flex-1 " },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "px-3 hover:gray-100",
                      attrs: { to: "/paymentPage/" + _vm.form.id }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "border rounded-lg bg-green-400 px-3 py-1 text-white hover:bg-green-300",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n                        Make Payment\n                    "
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex-1 " },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "hover:gray-100",
                      attrs: { to: "/EstimateShowfromTrack/" + _vm.form.id }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "border rounded-lg bg-green-400 px-3 py-1 text-white hover:bg-green-300",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n                        View Estimate\n                    "
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c(
                "svg",
                {
                  attrs: {
                    id: "_05_Make_Payment.svg",
                    "data-name": "05 Make Payment.svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    width: "400",
                    height: "686",
                    viewBox: "0 0 400 686"
                  }
                },
                [
                  _c("defs", [
                    _c("image", {
                      attrs: {
                        id: "image",
                        width: "21",
                        height: "21",
                        "xlink:href":
                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACJElEQVQ4jaWVTWgTQRTHf7NdW9OYqgF7iOcqChootKAeGkGs+AF6EKoHLSIhRASldwueelHxYEi9WEHEKnjQk1AxAVtQUNCIQlUoogsKCjVY2+3Hyk5m0sTdxU39X4ad3febt/ve+68gQE4i0wP0Ae7aAZjAAvAeKAJ3hJUv+kV7oE4ikwRywM6gA2s0AWSFlX8VCHUSmZPAdaA5BFDLBtLCyt/0QBVwpAHY3+rXYMHyKz9vMEO/jLvdT2Gojdx/AlHxOZmpqnJhRZgjXTi927EH79Lytax3U6Zqm8bU3gZDx6E3Kb+fPfmZ5suPdIH6TNWH4XWwswJcH5Uhc09KzN14TGwZ0GOqxq6otQXn/H4YKyGefag/J74Gho7BgU556czalC+OsjhSIC5W1TZSh6kmRWrp9G6M7F6cUymcE9cQ45OVG/uSlew2tMnL+ddT/DwzTPTjd1YLT31Nt1DzGrywdSNN9wcQsYjMhMF7iB2b4HCXOtWhfPUB9pWHrFs0afIOpMS40LfAFr3za1uCyO1zGPFY/ZNT35g+O0zkxSdahekH03pnKHOoKlqymD16iaUf1RZh5laB6T0XWPvyy7+AroqBfTqzuR1j4BC/R59ijr0hJosRSik9puN+ruSoNdAfvZoQVn6XHtOsmt06icaAtuIgocoP0+HjfZXWvqozdcGubfX7ZRwiw6rt1UFrwN3K0cPIfc61uypQcoIiV/yPAv4AQZqs6jeW/JAAAAAASUVORK5CYII="
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-1",
                    attrs: {
                      id: "Rectangle_5_copy_4",
                      "data-name": "Rectangle 5 copy 4",
                      width: "402",
                      height: "686"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Form_sending_for_approval",
                        "data-name": "Form sending for approval",
                        x: "88.948",
                        y: "158.724"
                      }
                    },
                    [_vm._v("Form sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Completed",
                        "data-name": "Estimate Completed",
                        x: "89.448",
                        y: "298.223"
                      }
                    },
                    [_vm._v("Estimate Completed")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_Submitted",
                        "data-name": "Form Submitted",
                        x: "89.448",
                        y: "116.223"
                      }
                    },
                    [_vm._v("Form Submitted")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Assign_Engineer_for_estimate",
                        "data-name": "Assign Engineer for estimate",
                        x: "88.948",
                        y: "249.724"
                      }
                    },
                    [_vm._v("Assign Engineer for estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_Approved",
                        "data-name": "Form Approved",
                        x: "89.448",
                        y: "207.223"
                      }
                    },
                    [_vm._v("Form Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Sending_for_approval",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "345.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Download_Estimate",
                        "data-name": "Download Estimate",
                        x: "89.448",
                        y: "436.224"
                      }
                    },
                    [_vm._v("Download Estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Sending_for_approval-2",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "524.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-5",
                    attrs: { x: "58", y: "128", width: "2", height: "74" }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-5",
                    attrs: {
                      id: "Rectangle_4_copy",
                      "data-name": "Rectangle 4 copy",
                      x: "58",
                      y: "219",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-5",
                    attrs: {
                      id: "Rectangle_4_copy_2",
                      "data-name": "Rectangle 4 copy 2",
                      x: "58",
                      y: "312",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-5",
                    attrs: {
                      id: "Rectangle_4_copy_3",
                      "data-name": "Rectangle 4 copy 3",
                      x: "58",
                      y: "404",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-5",
                    attrs: {
                      id: "Rectangle_4_copy_4",
                      "data-name": "Rectangle 4 copy 4",
                      x: "58",
                      y: "498",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-6",
                    attrs: {
                      id: "Rectangle_4_copy_5",
                      "data-name": "Rectangle 4 copy 5",
                      x: "58",
                      y: "590",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    staticClass: "cls-7",
                    attrs: {
                      id: "Vector_Smart_Object_copy_20",
                      "data-name": "Vector Smart Object copy 20",
                      x: "39",
                      y: "467",
                      width: "41",
                      height: "41",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAACAUlEQVRYhc2ZT0sCQRyGH8cwIoKwooPXSjqJnQqib9A36gt17Ct08ZZ0iP6dO4glQYQQmDHyjui6bmu5u78HBlzZnXl2Z1Zn3ikNLy75IxtADdgFNnVcAUrAEPgCPoB3oAO86HhhVha8oAwcAPvATsJ5XnRVZRvY0/dd4Bl4AgZpG00r6YBDoAGspa08hh2VJnAL3APfy5DcAs6A6j/kovgbPVavXANvSSe7XyqrA+dLFpykqvrrSSclPckjdUvW+HF+CqwDN3FtzXuSeQlO0lS7M8RJ1gsQDDTjuj4q6V+Sk1y1ZjmRxxgX+XymMVIkZXm4OMnDDN/iRanKZ0qyrB9qSzRCrwbJg3/+k2TBmrzGkvvGBAMjL6fZS9JkoUi814bTdMsyNaf5oGV2nSasltkMY9IyozFZMS5ZcZrqW6bktGiyzNBpVWeZL/fXZWaOfDitiy3z7rRwt0zHKVmwzEsYk12jkt0wJlH0YZGRV5D02UzfmGRfXmPJgbIZS9yGUGtyIebDo54RyZ58RkxKfis8Sh3JZcRAHuO0LRoO+HSrVbBkK5qyxcUsj0A7P6cp2mp/inmB1U0Bou15qVpS9Ocv+FQ2k2X0MlAXzzzBwG9Jr7/wNYOkN9BLk/SmiaN9BVdLyswD/WVn5qiiO+Ah5e7DPDLdfQj4iv3d+5LPPg7wA8CSZXDUuKMEAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_20-2",
                      "data-name": "Vector Smart Object copy 20",
                      x: "49",
                      y: "477",
                      width: "21",
                      height: "21",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA8ElEQVQ4ja2VvQ6CMBRGjw3hIdyZ3Rx04DXYdCLGB2Jw0o3XYGFgc+ZNCInmklvSIER+epYm5Pb0tmk/dp/9jQliINExAgKgBWqgAHIdfxiTHoAMOE2t5lACd+DtfjSDogtQzRSidZXO6wkGwudMmUvozHu5ncqWHyuELg/19NJMV9xCqJ5OGi84w3+IJzZ6bXyS2E590nUaeZZGZnCtfBAYfXo+aY2+ZZ/UZioUNlAYTRuf5LbT0pO0tJ2i8dVsFDbq6d++5GG6UZraXHXzVGLruqJjqZd5XewNpVZ8XHDGUif1vVAYe02yhfPqfxTwBQ9FMXe/8kETAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_25",
                      "data-name": "Vector Smart Object copy 25",
                      x: "49",
                      y: "570",
                      width: "21",
                      height: "21",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABdElEQVQ4jbWVMU8CQRCFP1ckdvIDLGyIiQnBxkYLoNTY2NFhIlBA4r+wtRIKPBLt+AH2SENBJaWhsbbxaiTGjHlrNioJcPE1O1nmvZvh5s2tbRVvmIMCUNaZBVLADJgAA6BnZ9xv/mL/JZoH2sDhvKcFGAKNuN8ch5fuR1IFGEnQEq+AHJC2AnTmdD9W3ihTalXmVWo/3CnuAtUFKo2AC8Xncb95H1ZqLXcU1xYURHk1xZ1MqZUPRdtqraunL4NIvLR0vtq3t/uo/2h/ScEQT+q46DQ2hocEgiG/7DSHaO6SwPMLToNteE4o6vlZJ6cY3hOKen7KyXqGjYSinj9z8rJhN6Go50+clgPBFKwKzx+44K2dJhT1/J6vdKjBXdZNHpH4w7jfHHibNoCplsOivveoijeVzrf3zaJ1xbdLVBwp31D3e3V9c+fEJ9jFC2AXB8AZsA28Am/Ah8ZmD7gEroFj36Ffe4Z/2fzeTSEs4WjlbxTwCS9NY1QXKS3nAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Approved",
                        "data-name": "Estimate Approved",
                        x: "89.448",
                        y: "392.224"
                      }
                    },
                    [_vm._v("Estimate Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-8",
                      attrs: {
                        id: "Make_Payment",
                        "data-name": "Make Payment",
                        x: "89.448",
                        y: "482.224"
                      }
                    },
                    [_vm._v("Make Payment")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-4",
                      attrs: {
                        id: "Download_Permit",
                        "data-name": "Download Permit",
                        x: "89.448",
                        y: "617.224"
                      }
                    },
                    [_vm._v("Download Permit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-8",
                      attrs: {
                        id: "Permit_Granted",
                        "data-name": "Permit Granted",
                        x: "89.448",
                        y: "575.224"
                      }
                    },
                    [_vm._v("Permit Granted")]
                  ),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_35",
                      "data-name": "Vector Smart Object copy 35",
                      x: "48",
                      y: "109",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_36",
                      "data-name": "Vector Smart Object copy 36",
                      x: "49",
                      y: "200",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_37",
                      "data-name": "Vector Smart Object copy 37",
                      x: "49",
                      y: "291",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_38",
                      "data-name": "Vector Smart Object copy 38",
                      x: "49",
                      y: "385",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-9",
                      attrs: {
                        id: "TRACKING_FORM_copy_5",
                        "data-name": "TRACKING FORM copy 5",
                        transform: "translate(49 60.278) scale(3.661)"
                      }
                    },
                    [_vm._v("TRACKING FORM")]
                  )
                ]
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      this.form.track_status === 5
        ? [
            _c("div", {}, [
              _c(
                "svg",
                {
                  attrs: {
                    id: "_06_Permit_Granted.svg",
                    "data-name": "06 Permit Granted.svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    width: "400",
                    height: "686",
                    viewBox: "0 0 400 686"
                  }
                },
                [
                  _c("defs", [
                    _vm._v(
                      "\n                           x\n                            "
                    ),
                    _c("image", {
                      attrs: {
                        id: "image",
                        width: "21",
                        height: "21",
                        "xlink:href":
                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACJElEQVQ4jaWVTWgTQRTHf7NdW9OYqgF7iOcqChootKAeGkGs+AF6EKoHLSIhRASldwueelHxYEi9WEHEKnjQk1AxAVtQUNCIQlUoogsKCjVY2+3Hyk5m0sTdxU39X4ad3febt/ve+68gQE4i0wP0Ae7aAZjAAvAeKAJ3hJUv+kV7oE4ikwRywM6gA2s0AWSFlX8VCHUSmZPAdaA5BFDLBtLCyt/0QBVwpAHY3+rXYMHyKz9vMEO/jLvdT2Gojdx/AlHxOZmpqnJhRZgjXTi927EH79Lytax3U6Zqm8bU3gZDx6E3Kb+fPfmZ5suPdIH6TNWH4XWwswJcH5Uhc09KzN14TGwZ0GOqxq6otQXn/H4YKyGefag/J74Gho7BgU556czalC+OsjhSIC5W1TZSh6kmRWrp9G6M7F6cUymcE9cQ45OVG/uSlew2tMnL+ddT/DwzTPTjd1YLT31Nt1DzGrywdSNN9wcQsYjMhMF7iB2b4HCXOtWhfPUB9pWHrFs0afIOpMS40LfAFr3za1uCyO1zGPFY/ZNT35g+O0zkxSdahekH03pnKHOoKlqymD16iaUf1RZh5laB6T0XWPvyy7+AroqBfTqzuR1j4BC/R59ijr0hJosRSik9puN+ruSoNdAfvZoQVn6XHtOsmt06icaAtuIgocoP0+HjfZXWvqozdcGubfX7ZRwiw6rt1UFrwN3K0cPIfc61uypQcoIiV/yPAv4AQZqs6jeW/JAAAAAASUVORK5CYII="
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-1",
                    attrs: {
                      id: "Rectangle_5_copy_5",
                      "data-name": "Rectangle 5 copy 5",
                      width: "402",
                      height: "686"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Form_sending_for_approval",
                        "data-name": "Form sending for approval",
                        x: "88.948",
                        y: "158.724"
                      }
                    },
                    [_vm._v("Form sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Completed",
                        "data-name": "Estimate Completed",
                        x: "89.448",
                        y: "298.223"
                      }
                    },
                    [_vm._v("Estimate Completed")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_Submitted",
                        "data-name": "Form Submitted",
                        x: "89.448",
                        y: "116.223"
                      }
                    },
                    [_vm._v("Form Submitted")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Assign_Engineer_for_estimate",
                        "data-name": "Assign Engineer for estimate",
                        x: "88.948",
                        y: "249.724"
                      }
                    },
                    [_vm._v("Assign Engineer for estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_Approved",
                        "data-name": "Form Approved",
                        x: "89.448",
                        y: "207.223"
                      }
                    },
                    [_vm._v("Form Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Sending_for_approval",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "345.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Download_Estimate",
                        "data-name": "Download Estimate",
                        x: "89.448",
                        y: "436.224"
                      }
                    },
                    [_vm._v("Download Estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Sending_for_approval-2",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "524.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: { x: "58", y: "128", width: "2", height: "74" }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy",
                      "data-name": "Rectangle 4 copy",
                      x: "58",
                      y: "219",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_2",
                      "data-name": "Rectangle 4 copy 2",
                      x: "58",
                      y: "312",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_3",
                      "data-name": "Rectangle 4 copy 3",
                      x: "58",
                      y: "404",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_4",
                      "data-name": "Rectangle 4 copy 4",
                      x: "58",
                      y: "498",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_5",
                      "data-name": "Rectangle 4 copy 5",
                      x: "58",
                      y: "590",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    staticClass: "cls-5",
                    attrs: {
                      id: "Vector_Smart_Object_copy_20",
                      "data-name": "Vector Smart Object copy 20",
                      x: "39",
                      y: "560",
                      width: "41",
                      height: "41",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAACAUlEQVRYhc2ZT0sCQRyGH8cwIoKwooPXSjqJnQqib9A36gt17Ct08ZZ0iP6dO4glQYQQmDHyjui6bmu5u78HBlzZnXl2Z1Zn3ikNLy75IxtADdgFNnVcAUrAEPgCPoB3oAO86HhhVha8oAwcAPvATsJ5XnRVZRvY0/dd4Bl4AgZpG00r6YBDoAGspa08hh2VJnAL3APfy5DcAs6A6j/kovgbPVavXANvSSe7XyqrA+dLFpykqvrrSSclPckjdUvW+HF+CqwDN3FtzXuSeQlO0lS7M8RJ1gsQDDTjuj4q6V+Sk1y1ZjmRxxgX+XymMVIkZXm4OMnDDN/iRanKZ0qyrB9qSzRCrwbJg3/+k2TBmrzGkvvGBAMjL6fZS9JkoUi814bTdMsyNaf5oGV2nSasltkMY9IyozFZMS5ZcZrqW6bktGiyzNBpVWeZL/fXZWaOfDitiy3z7rRwt0zHKVmwzEsYk12jkt0wJlH0YZGRV5D02UzfmGRfXmPJgbIZS9yGUGtyIebDo54RyZ58RkxKfis8Sh3JZcRAHuO0LRoO+HSrVbBkK5qyxcUsj0A7P6cp2mp/inmB1U0Bou15qVpS9Ocv+FQ2k2X0MlAXzzzBwG9Jr7/wNYOkN9BLk/SmiaN9BVdLyswD/WVn5qiiO+Ah5e7DPDLdfQj4iv3d+5LPPg7wA8CSZXDUuKMEAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_20-2",
                      "data-name": "Vector Smart Object copy 20",
                      x: "49",
                      y: "570",
                      width: "21",
                      height: "21",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA8ElEQVQ4ja2VvQ6CMBRGjw3hIdyZ3Rx04DXYdCLGB2Jw0o3XYGFgc+ZNCInmklvSIER+epYm5Pb0tmk/dp/9jQliINExAgKgBWqgAHIdfxiTHoAMOE2t5lACd+DtfjSDogtQzRSidZXO6wkGwudMmUvozHu5ncqWHyuELg/19NJMV9xCqJ5OGi84w3+IJzZ6bXyS2E590nUaeZZGZnCtfBAYfXo+aY2+ZZ/UZioUNlAYTRuf5LbT0pO0tJ2i8dVsFDbq6d++5GG6UZraXHXzVGLruqJjqZd5XewNpVZ8XHDGUif1vVAYe02yhfPqfxTwBQ9FMXe/8kETAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Approved",
                        "data-name": "Estimate Approved",
                        x: "89.448",
                        y: "392.224"
                      }
                    },
                    [_vm._v("Estimate Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Make_Payment",
                        "data-name": "Make Payment",
                        x: "89.448",
                        y: "482.224"
                      }
                    },
                    [_vm._v("Make Payment")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-6",
                      attrs: {
                        id: "Download_Permit",
                        "data-name": "Download Permit",
                        x: "89.448",
                        y: "617.224"
                      }
                    },
                    [_vm._v("Download Permit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-7",
                      attrs: {
                        id: "Permit_Granted",
                        "data-name": "Permit Granted",
                        x: "89.448",
                        y: "575.224"
                      }
                    },
                    [_vm._v("Permit Granted")]
                  ),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_30",
                      "data-name": "Vector Smart Object copy 30",
                      x: "48",
                      y: "109",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_31",
                      "data-name": "Vector Smart Object copy 31",
                      x: "49",
                      y: "200",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_32",
                      "data-name": "Vector Smart Object copy 32",
                      x: "49",
                      y: "291",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_33",
                      "data-name": "Vector Smart Object copy 33",
                      x: "49",
                      y: "385",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_34",
                      "data-name": "Vector Smart Object copy 34",
                      x: "50",
                      y: "478",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-8",
                      attrs: {
                        id: "TRACKING_FORM_copy_6",
                        "data-name": "TRACKING FORM copy 6",
                        transform: "translate(49 60.278) scale(3.661)"
                      }
                    },
                    [_vm._v("TRACKING FORM")]
                  )
                ]
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      this.form.track_status === 6
        ? [
            _c("div", {}, [
              _c(
                "svg",
                {
                  attrs: {
                    id: "_06_Permit_Granted.svg",
                    "data-name": "06 Permit Granted.svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    width: "400",
                    height: "686",
                    viewBox: "0 0 400 686"
                  }
                },
                [
                  _c("defs", [
                    _c("image", {
                      attrs: {
                        id: "image",
                        width: "21",
                        height: "21",
                        "xlink:href":
                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACJElEQVQ4jaWVTWgTQRTHf7NdW9OYqgF7iOcqChootKAeGkGs+AF6EKoHLSIhRASldwueelHxYEi9WEHEKnjQk1AxAVtQUNCIQlUoogsKCjVY2+3Hyk5m0sTdxU39X4ad3febt/ve+68gQE4i0wP0Ae7aAZjAAvAeKAJ3hJUv+kV7oE4ikwRywM6gA2s0AWSFlX8VCHUSmZPAdaA5BFDLBtLCyt/0QBVwpAHY3+rXYMHyKz9vMEO/jLvdT2Gojdx/AlHxOZmpqnJhRZgjXTi927EH79Lytax3U6Zqm8bU3gZDx6E3Kb+fPfmZ5suPdIH6TNWH4XWwswJcH5Uhc09KzN14TGwZ0GOqxq6otQXn/H4YKyGefag/J74Gho7BgU556czalC+OsjhSIC5W1TZSh6kmRWrp9G6M7F6cUymcE9cQ45OVG/uSlew2tMnL+ddT/DwzTPTjd1YLT31Nt1DzGrywdSNN9wcQsYjMhMF7iB2b4HCXOtWhfPUB9pWHrFs0afIOpMS40LfAFr3za1uCyO1zGPFY/ZNT35g+O0zkxSdahekH03pnKHOoKlqymD16iaUf1RZh5laB6T0XWPvyy7+AroqBfTqzuR1j4BC/R59ijr0hJosRSik9puN+ruSoNdAfvZoQVn6XHtOsmt06icaAtuIgocoP0+HjfZXWvqozdcGubfX7ZRwiw6rt1UFrwN3K0cPIfc61uypQcoIiV/yPAv4AQZqs6jeW/JAAAAAASUVORK5CYII="
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-1",
                    attrs: {
                      id: "Rectangle_5_copy_5",
                      "data-name": "Rectangle 5 copy 5",
                      width: "402",
                      height: "686"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Form_sending_for_approval",
                        "data-name": "Form sending for approval",
                        x: "88.948",
                        y: "158.724"
                      }
                    },
                    [_vm._v("Form sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Completed",
                        "data-name": "Estimate Completed",
                        x: "89.448",
                        y: "298.223"
                      }
                    },
                    [_vm._v("Estimate Completed")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_Submitted",
                        "data-name": "Form Submitted",
                        x: "89.448",
                        y: "116.223"
                      }
                    },
                    [_vm._v("Form Submitted")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Assign_Engineer_for_estimate",
                        "data-name": "Assign Engineer for estimate",
                        x: "88.948",
                        y: "249.724"
                      }
                    },
                    [_vm._v("Assign Engineer for estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_Approved",
                        "data-name": "Form Approved",
                        x: "89.448",
                        y: "207.223"
                      }
                    },
                    [_vm._v("Form Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Sending_for_approval",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "345.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Download_Estimate",
                        "data-name": "Download Estimate",
                        x: "89.448",
                        y: "436.224"
                      }
                    },
                    [_vm._v("Download Estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Sending_for_approval-2",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "524.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: { x: "58", y: "128", width: "2", height: "74" }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy",
                      "data-name": "Rectangle 4 copy",
                      x: "58",
                      y: "219",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_2",
                      "data-name": "Rectangle 4 copy 2",
                      x: "58",
                      y: "312",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_3",
                      "data-name": "Rectangle 4 copy 3",
                      x: "58",
                      y: "404",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_4",
                      "data-name": "Rectangle 4 copy 4",
                      x: "58",
                      y: "498",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_5",
                      "data-name": "Rectangle 4 copy 5",
                      x: "58",
                      y: "590",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    staticClass: "cls-5",
                    attrs: {
                      id: "Vector_Smart_Object_copy_20",
                      "data-name": "Vector Smart Object copy 20",
                      x: "39",
                      y: "560",
                      width: "41",
                      height: "41",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAACAUlEQVRYhc2ZT0sCQRyGH8cwIoKwooPXSjqJnQqib9A36gt17Ct08ZZ0iP6dO4glQYQQmDHyjui6bmu5u78HBlzZnXl2Z1Zn3ikNLy75IxtADdgFNnVcAUrAEPgCPoB3oAO86HhhVha8oAwcAPvATsJ5XnRVZRvY0/dd4Bl4AgZpG00r6YBDoAGspa08hh2VJnAL3APfy5DcAs6A6j/kovgbPVavXANvSSe7XyqrA+dLFpykqvrrSSclPckjdUvW+HF+CqwDN3FtzXuSeQlO0lS7M8RJ1gsQDDTjuj4q6V+Sk1y1ZjmRxxgX+XymMVIkZXm4OMnDDN/iRanKZ0qyrB9qSzRCrwbJg3/+k2TBmrzGkvvGBAMjL6fZS9JkoUi814bTdMsyNaf5oGV2nSasltkMY9IyozFZMS5ZcZrqW6bktGiyzNBpVWeZL/fXZWaOfDitiy3z7rRwt0zHKVmwzEsYk12jkt0wJlH0YZGRV5D02UzfmGRfXmPJgbIZS9yGUGtyIebDo54RyZ58RkxKfis8Sh3JZcRAHuO0LRoO+HSrVbBkK5qyxcUsj0A7P6cp2mp/inmB1U0Bou15qVpS9Ocv+FQ2k2X0MlAXzzzBwG9Jr7/wNYOkN9BLk/SmiaN9BVdLyswD/WVn5qiiO+Ah5e7DPDLdfQj4iv3d+5LPPg7wA8CSZXDUuKMEAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("image", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_20-2",
                      "data-name": "Vector Smart Object copy 20",
                      x: "49",
                      y: "570",
                      width: "21",
                      height: "21",
                      "xlink:href":
                        "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA8ElEQVQ4ja2VvQ6CMBRGjw3hIdyZ3Rx04DXYdCLGB2Jw0o3XYGFgc+ZNCInmklvSIER+epYm5Pb0tmk/dp/9jQliINExAgKgBWqgAHIdfxiTHoAMOE2t5lACd+DtfjSDogtQzRSidZXO6wkGwudMmUvozHu5ncqWHyuELg/19NJMV9xCqJ5OGi84w3+IJzZ6bXyS2E590nUaeZZGZnCtfBAYfXo+aY2+ZZ/UZioUNlAYTRuf5LbT0pO0tJ2i8dVsFDbq6d++5GG6UZraXHXzVGLruqJjqZd5XewNpVZ8XHDGUif1vVAYe02yhfPqfxTwBQ9FMXe/8kETAAAAAElFTkSuQmCC"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Approved",
                        "data-name": "Estimate Approved",
                        x: "89.448",
                        y: "392.224"
                      }
                    },
                    [_vm._v("Estimate Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Make_Payment",
                        "data-name": "Make Payment",
                        x: "89.448",
                        y: "482.224"
                      }
                    },
                    [_vm._v("Make Payment")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-6",
                      attrs: {
                        id: "Download_Permit",
                        "data-name": "Download Permit",
                        x: "89.448",
                        y: "617.224"
                      }
                    },
                    [_vm._v("Download Permit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-7",
                      attrs: {
                        id: "Permit_Granted",
                        "data-name": "Permit Granted",
                        x: "89.448",
                        y: "575.224"
                      }
                    },
                    [_vm._v("Permit Granted")]
                  ),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_30",
                      "data-name": "Vector Smart Object copy 30",
                      x: "48",
                      y: "109",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_31",
                      "data-name": "Vector Smart Object copy 31",
                      x: "49",
                      y: "200",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_32",
                      "data-name": "Vector Smart Object copy 32",
                      x: "49",
                      y: "291",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_33",
                      "data-name": "Vector Smart Object copy 33",
                      x: "49",
                      y: "385",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_34",
                      "data-name": "Vector Smart Object copy 34",
                      x: "50",
                      y: "478",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-8",
                      attrs: {
                        id: "TRACKING_FORM_copy_6",
                        "data-name": "TRACKING FORM copy 6",
                        transform: "translate(49 60.278) scale(3.661)"
                      }
                    },
                    [_vm._v("TRACKING FORM")]
                  )
                ]
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      this.form.track_status === 7
        ? [
            _c("div", {}, [
              _c(
                "svg",
                {
                  attrs: {
                    id: "_07_Final.svg",
                    "data-name": "07 Final.svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    width: "400",
                    height: "686",
                    viewBox: "0 0 400 686"
                  }
                },
                [
                  _c("defs", [
                    _c("image", {
                      attrs: {
                        id: "image",
                        width: "21",
                        height: "21",
                        "xlink:href":
                          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACJElEQVQ4jaWVTWgTQRTHf7NdW9OYqgF7iOcqChootKAeGkGs+AF6EKoHLSIhRASldwueelHxYEi9WEHEKnjQk1AxAVtQUNCIQlUoogsKCjVY2+3Hyk5m0sTdxU39X4ad3febt/ve+68gQE4i0wP0Ae7aAZjAAvAeKAJ3hJUv+kV7oE4ikwRywM6gA2s0AWSFlX8VCHUSmZPAdaA5BFDLBtLCyt/0QBVwpAHY3+rXYMHyKz9vMEO/jLvdT2Gojdx/AlHxOZmpqnJhRZgjXTi927EH79Lytax3U6Zqm8bU3gZDx6E3Kb+fPfmZ5suPdIH6TNWH4XWwswJcH5Uhc09KzN14TGwZ0GOqxq6otQXn/H4YKyGefag/J74Gho7BgU556czalC+OsjhSIC5W1TZSh6kmRWrp9G6M7F6cUymcE9cQ45OVG/uSlew2tMnL+ddT/DwzTPTjd1YLT31Nt1DzGrywdSNN9wcQsYjMhMF7iB2b4HCXOtWhfPUB9pWHrFs0afIOpMS40LfAFr3za1uCyO1zGPFY/ZNT35g+O0zkxSdahekH03pnKHOoKlqymD16iaUf1RZh5laB6T0XWPvyy7+AroqBfTqzuR1j4BC/R59ijr0hJosRSik9puN+ruSoNdAfvZoQVn6XHtOsmt06icaAtuIgocoP0+HjfZXWvqozdcGubfX7ZRwiw6rt1UFrwN3K0cPIfc61uypQcoIiV/yPAv4AQZqs6jeW/JAAAAAASUVORK5CYII="
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-1",
                    attrs: {
                      id: "Rectangle_5_copy_6",
                      "data-name": "Rectangle 5 copy 6",
                      width: "402",
                      height: "686"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Form_sending_for_approval",
                        "data-name": "Form sending for approval",
                        x: "88.948",
                        y: "158.724"
                      }
                    },
                    [_vm._v("Form sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Completed",
                        "data-name": "Estimate Completed",
                        x: "89.448",
                        y: "298.223"
                      }
                    },
                    [_vm._v("Estimate Completed")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_Submitted",
                        "data-name": "Form Submitted",
                        x: "89.448",
                        y: "116.223"
                      }
                    },
                    [_vm._v("Form Submitted")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Assign_Engineer_for_estimate",
                        "data-name": "Assign Engineer for estimate",
                        x: "88.948",
                        y: "249.724"
                      }
                    },
                    [_vm._v("Assign Engineer for estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Form_Approved",
                        "data-name": "Form Approved",
                        x: "89.448",
                        y: "207.223"
                      }
                    },
                    [_vm._v("Form Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Sending_for_approval",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "345.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Download_Estimate",
                        "data-name": "Download Estimate",
                        x: "89.448",
                        y: "436.224"
                      }
                    },
                    [_vm._v("Download Estimate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Sending_for_approval-2",
                        "data-name": "Sending for approval",
                        x: "89.448",
                        y: "524.224"
                      }
                    },
                    [_vm._v("Sending for approval")]
                  ),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: { x: "58", y: "128", width: "2", height: "74" }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy",
                      "data-name": "Rectangle 4 copy",
                      x: "58",
                      y: "219",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_2",
                      "data-name": "Rectangle 4 copy 2",
                      x: "58",
                      y: "312",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_3",
                      "data-name": "Rectangle 4 copy 3",
                      x: "58",
                      y: "404",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_4",
                      "data-name": "Rectangle 4 copy 4",
                      x: "58",
                      y: "498",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticClass: "cls-4",
                    attrs: {
                      id: "Rectangle_4_copy_5",
                      "data-name": "Rectangle 4 copy 5",
                      x: "58",
                      y: "590",
                      width: "2",
                      height: "74"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Estimate_Approved",
                        "data-name": "Estimate Approved",
                        x: "89.448",
                        y: "392.224"
                      }
                    },
                    [_vm._v("Estimate Approved")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Make_Payment",
                        "data-name": "Make Payment",
                        x: "89.448",
                        y: "482.224"
                      }
                    },
                    [_vm._v("Make Payment")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-2",
                      attrs: {
                        id: "Download_Permit",
                        "data-name": "Download Permit",
                        x: "89.448",
                        y: "617.224"
                      }
                    },
                    [_vm._v("Download Permit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-3",
                      attrs: {
                        id: "Permit_Granted",
                        "data-name": "Permit Granted",
                        x: "89.448",
                        y: "575.224"
                      }
                    },
                    [_vm._v("Permit Granted")]
                  ),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_19",
                      "data-name": "Vector Smart Object copy 19",
                      x: "48",
                      y: "109",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_21",
                      "data-name": "Vector Smart Object copy 21",
                      x: "49",
                      y: "200",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_26",
                      "data-name": "Vector Smart Object copy 26",
                      x: "49",
                      y: "291",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_27",
                      "data-name": "Vector Smart Object copy 27",
                      x: "49",
                      y: "385",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_28",
                      "data-name": "Vector Smart Object copy 28",
                      x: "50",
                      y: "478",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      id: "Vector_Smart_Object_copy_29",
                      "data-name": "Vector Smart Object copy 29",
                      x: "50",
                      y: "570",
                      "xlink:href": "#image"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      staticClass: "cls-5",
                      attrs: {
                        id: "TRACKING_FORM_copy_3",
                        "data-name": "TRACKING FORM copy 3",
                        transform: "translate(49 60.278) scale(3.661)"
                      }
                    },
                    [_vm._v("TRACKING FORM")]
                  )
                ]
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      this.form.track_status === 10
        ? [
            _c(
              "div",
              {
                staticClass:
                  "flex items-center flex-row sm:w-5/5 lg:w-1/2 justify-between mt-3 bg-white h-24 rounded-t-lg rounded-b-lg border-b-4 border-dashed"
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
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "bg-white h-auto rounded-lg   rounded-b-lg border-gray-200 sm:w-full md:w-1/2"
              },
              [
                _c("div", { staticClass: "my-6 mx-4 px-4 py-4" }, [
                  _c("p", { staticClass: " text-red-500 text-xl" }, [
                    _vm._v(" I form submit hi reject a ni! ")
                  ]),
                  _vm._v(" "),
                  _c("p", {}, [
                    _vm._v(" Reject chhan: " + _vm._s(_vm.form.reason) + " ")
                  ])
                ])
              ]
            )
          ]
        : _vm._e()
    ],
    2
  )
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
              "border rounded-lg bg-green-400 px-3 py-1 text-white hover:bg-green-300 focus:outline-none",
            attrs: { type: "submit" }
          },
          [
            _vm._v(
              "\n                                    Track\n                                "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/TrackForm.vue":
/*!******************************************!*\
  !*** ./resources/js/views/TrackForm.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrackForm_vue_vue_type_template_id_d3ad11c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrackForm.vue?vue&type=template&id=d3ad11c0&scoped=true& */ "./resources/js/views/TrackForm.vue?vue&type=template&id=d3ad11c0&scoped=true&");
/* harmony import */ var _TrackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrackForm.vue?vue&type=script&lang=js& */ "./resources/js/views/TrackForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TrackForm_vue_vue_type_style_index_0_id_d3ad11c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css& */ "./resources/js/views/TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TrackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrackForm_vue_vue_type_template_id_d3ad11c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrackForm_vue_vue_type_template_id_d3ad11c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d3ad11c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/TrackForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/TrackForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/TrackForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TrackForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TrackForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackForm_vue_vue_type_style_index_0_id_d3ad11c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TrackForm.vue?vue&type=style&index=0&id=d3ad11c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackForm_vue_vue_type_style_index_0_id_d3ad11c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackForm_vue_vue_type_style_index_0_id_d3ad11c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackForm_vue_vue_type_style_index_0_id_d3ad11c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackForm_vue_vue_type_style_index_0_id_d3ad11c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/TrackForm.vue?vue&type=template&id=d3ad11c0&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/TrackForm.vue?vue&type=template&id=d3ad11c0&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackForm_vue_vue_type_template_id_d3ad11c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TrackForm.vue?vue&type=template&id=d3ad11c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TrackForm.vue?vue&type=template&id=d3ad11c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackForm_vue_vue_type_template_id_d3ad11c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackForm_vue_vue_type_template_id_d3ad11c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);