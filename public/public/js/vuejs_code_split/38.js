(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/LandingPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/unauthenticate/LandingPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/auth */ "./resources/js/helpers/auth.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'LandingPage',
  components: {
    PulseLoader: function PulseLoader() {
      return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ../components/PulseLoader */ "./resources/js/components/PulseLoader.vue"));
    },
    Accordian: function Accordian() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Accordian.vue */ "./resources/js/unauthenticate/Accordian.vue"));
    },
    Sopmdhidden: function Sopmdhidden() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./Sopmdhidden.vue */ "./resources/js/unauthenticate/Sopmdhidden.vue"));
    },
    Sopmdblock: function Sopmdblock() {
      return __webpack_require__.e(/*! import() */ 85).then(__webpack_require__.bind(null, /*! ./Sopmdblock.vue */ "./resources/js/unauthenticate/Sopmdblock.vue"));
    },
    InputFieldForm: function InputFieldForm() {
      return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ../components/InputFieldForm */ "./resources/js/components/InputFieldForm.vue"));
    },
    Logomd: function Logomd() {
      return __webpack_require__.e(/*! import() */ 49).then(__webpack_require__.bind(null, /*! ./Logomd.vue */ "./resources/js/unauthenticate/Logomd.vue"));
    },
    Logosm: function Logosm() {
      return __webpack_require__.e(/*! import() */ 50).then(__webpack_require__.bind(null, /*! ./Logosm.vue */ "./resources/js/unauthenticate/Logosm.vue"));
    },
    Logolg: function Logolg() {
      return __webpack_require__.e(/*! import() */ 48).then(__webpack_require__.bind(null, /*! ./Logolg.vue */ "./resources/js/unauthenticate/Logolg.vue"));
    }
  },
  data: function data() {
    return {
      isDisabled: "true",
      submit_value: 'Submit',
      // show: 'true',
      showSuccess: 'true',
      loading: 'true',
      memoStore: null,
      reportStore: null,
      login: {
        email: '',
        password: ''
      },
      error: null,
      form: {
        'user_id': 0,
        'name': '',
        'email': '',
        'phone': '',
        // 'length':'',
        'rhouseno': '',
        'rlocalcouncil_name': '',
        'rcity': '',
        'rdistrict': '',
        'houseno': '',
        'localcouncil_name': '',
        'city': '',
        'district': '',
        'water_id': '',
        'road_type': '',
        'division_id': ''
      },
      errors: {},
      localcouncils: {
        'id': '',
        'name': '',
        'division_id': ''
      },
      // for fetching for the dropdown of local councils
      localcouncilsR: {
        'id': '',
        'name': '',
        'division_id': ''
      },
      districts: {
        'id': '',
        'name': ''
      },
      formsuccess: ''
    };
  },
  methods: _defineProperty({
    // for the residence districts
    getChamphaiLCR: function getChamphaiLCR() {
      var _this = this;

      console.log("fetching the Champhai list RESIDENCE");
      axios.get('/api/auth/champhai_local_councils').then(function (response) {
        _this.localcouncilsR = response.data.localcouncils;
        console.log(_this.localcouncilsR);
        _this.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    //  in case i need this later
    getAizawlLCR: function getAizawlLCR() {
      var _this2 = this;

      console.log("fetching the Aizawl list RESIDENCE");
      axios.get('/api/auth/localcouncil').then(function (response) {
        _this2.localcouncilsR = response.data.localcouncils;
        console.log(_this2.localcouncilsR);
        _this2.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this2.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getLungleiLCR: function getLungleiLCR() {
      var _this3 = this;

      console.log("fetching the lunglei list RESIDENCE");
      axios.get('/api/auth/lunglei_local_councils').then(function (response) {
        _this3.localcouncilsR = response.data.localcouncils;
        console.log(_this3.localcouncilsR);
        _this3.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this3.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getSaitualLCR: function getSaitualLCR() {
      var _this4 = this;

      console.log("fetching the saitual list RESIDENCE");
      axios.get('/api/auth/saitual_local_councils').then(function (response) {
        _this4.localcouncilsR = response.data.localcouncils;
        console.log(_this4.localcouncilsR);
        _this4.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this4.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getMamitLCR: function getMamitLCR() {
      var _this5 = this;

      console.log("fetching the mamit list RESIDENCE");
      axios.get('/api/auth/mamit_local_councils').then(function (response) {
        _this5.localcouncilsR = response.data.localcouncils;
        console.log(_this5.localcouncilsR);
        _this5.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this5.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getSiahaLCR: function getSiahaLCR() {
      var _this6 = this;

      console.log("fetching the siaha list RESIDENCE");
      axios.get('/api/auth/siaha_local_councils').then(function (response) {
        _this6.localcouncilsR = response.data.localcouncils;
        console.log(_this6.localcouncilsR);
        _this6.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this6.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getKhawzawlLCR: function getKhawzawlLCR() {
      var _this7 = this;

      console.log("fetching the khawzawl list RESIDENCE");
      axios.get('/api/auth/khawzawl_local_councils').then(function (response) {
        _this7.localcouncilsR = response.data.localcouncils;
        console.log(_this7.localcouncilsR);
        _this7.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this7.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getKolasibLCR: function getKolasibLCR() {
      var _this8 = this;

      console.log("fetching the kolasib list RESIDENCE");
      axios.get('/api/auth/kolasib_local_councils').then(function (response) {
        _this8.localcouncilsR = response.data.localcouncils;
        console.log(_this8.localcouncilsR);
        _this8.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this8.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getLawngtlaiLCR: function getLawngtlaiLCR() {
      var _this9 = this;

      console.log("fetching the lawngtlai list RESIDENCE");
      axios.get('/api/auth/lawngtlai_local_councils').then(function (response) {
        _this9.localcouncilsR = response.data.localcouncils;
        console.log(_this9.localcouncilsR);
        _this9.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this9.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getSerchhipLCR: function getSerchhipLCR() {
      var _this10 = this;

      console.log("fetching the serchhip list RESIDENCE");
      axios.get('/api/auth/serchhip_local_councils').then(function (response) {
        _this10.localcouncilsR = response.data.localcouncils;
        console.log(_this10.localcouncilsR);
        _this10.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this10.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getLungleiRoadDiv2HnahthialLCR: function getLungleiRoadDiv2HnahthialLCR() {
      var _this11 = this;

      console.log("fetching the lunglei road div hnahthial list RESIDENCE");
      axios.get('/api/auth/lunglei_road_div2_hnahthial').then(function (response) {
        _this11.localcouncilsR = response.data.localcouncils;
        console.log(_this11.localcouncilsR);
        _this11.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this11.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getHmuifangDivisionLCR: function getHmuifangDivisionLCR() {
      var _this12 = this;

      console.log("fetching the lhmuigfang division list RESIDENCE");
      axios.get('/api/auth/hmuifang_division').then(function (response) {
        _this12.localcouncilsR = response.data.localcouncils;
        console.log(_this12.localcouncilsR);
        _this12.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this12.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getNationalHighwayDiv1LCR: function getNationalHighwayDiv1LCR() {
      var _this13 = this;

      console.log("fetching the lunglei road div hnahthial list RESIDENCE");
      axios.get('/api/auth/national_highway_div1').then(function (response) {
        _this13.localcouncilsR = response.data.localcouncils;
        console.log(_this13.localcouncilsR);
        _this13.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this13.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getNationalHighwayDiv3LCR: function getNationalHighwayDiv3LCR() {
      var _this14 = this;

      console.log("fetching the lunglei road div hnahthial list RESIDENCE");
      axios.get('/api/auth/national_highway_div3').then(function (response) {
        _this14.localcouncilsR = response.data.localcouncils;
        console.log(_this14.localcouncilsR);
        _this14.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this14.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    //LOCATION OF ROAD CUTTING LOCAL COUNCIL DROPDOWN
    getChamphaiLC: function getChamphaiLC() {
      var _this15 = this;

      console.log("fetching the Champhai list Place of cutting");
      axios.get('/api/auth/champhai_local_councils').then(function (response) {
        _this15.localcouncils = response.data.localcouncils;
        console.log(_this15.localcouncils);
        _this15.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this15.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    //  in case i need this later
    getAizawlLC: function getAizawlLC() {
      var _this16 = this;

      console.log("fetching the Aizawl list Place of cutting");
      axios.get('/api/auth/localcouncil').then(function (response) {
        _this16.localcouncils = response.data.localcouncils;
        console.log(_this16.localcouncils);
        _this16.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this16.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getLungleiLC: function getLungleiLC() {
      var _this17 = this;

      console.log("fetching the lunglei list Place of cutting");
      axios.get('/api/auth/lunglei_local_councils').then(function (response) {
        _this17.localcouncils = response.data.localcouncils;
        console.log(_this17.localcouncils);
        _this17.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this17.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getSaitualLC: function getSaitualLC() {
      var _this18 = this;

      console.log("fetching the saitual list Place of cutting");
      axios.get('/api/auth/saitual_local_councils').then(function (response) {
        _this18.localcouncils = response.data.localcouncils;
        console.log(_this18.localcouncils);
        _this18.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this18.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getMamitLC: function getMamitLC() {
      var _this19 = this;

      console.log("fetching the mamit list Place of cutting");
      axios.get('/api/auth/mamit_local_councils').then(function (response) {
        _this19.localcouncils = response.data.localcouncils;
        console.log(_this19.localcouncils);
        _this19.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this19.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getSiahaLC: function getSiahaLC() {
      var _this20 = this;

      console.log("fetching the siaha list Place of cutting");
      axios.get('/api/auth/siaha_local_councils').then(function (response) {
        _this20.localcouncils = response.data.localcouncils;
        console.log(_this20.localcouncils);
        _this20.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this20.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getKhawzawlLC: function getKhawzawlLC() {
      var _this21 = this;

      console.log("fetching the khawzawl list Place of cutting");
      axios.get('/api/auth/khawzawl_local_councils').then(function (response) {
        _this21.localcouncils = response.data.localcouncils;
        console.log(_this21.localcouncils);
        _this21.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this21.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getKolasibLC: function getKolasibLC() {
      var _this22 = this;

      console.log("fetching the kolasib list Place of cutting");
      axios.get('/api/auth/kolasib_local_councils').then(function (response) {
        _this22.localcouncils = response.data.localcouncils;
        console.log(_this22.localcouncils);
        _this22.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this22.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getLawngtlaiLC: function getLawngtlaiLC() {
      var _this23 = this;

      console.log("fetching the lawngtlai list Place of cutting");
      axios.get('/api/auth/lawngtlai_local_councils').then(function (response) {
        _this23.localcouncils = response.data.localcouncils;
        console.log(_this23.localcouncils);
        _this23.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this23.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getSerchhipLC: function getSerchhipLC() {
      var _this24 = this;

      console.log("fetching the serchhip list Place of cutting");
      axios.get('/api/auth/serchhip_local_councils').then(function (response) {
        _this24.localcouncils = response.data.localcouncils;
        console.log(_this24.localcouncils);
        _this24.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this24.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getLungleiRoadDiv2HnahthialLC: function getLungleiRoadDiv2HnahthialLC() {
      var _this25 = this;

      console.log("fetching the hnahthial list Place of cutting");
      axios.get('/api/auth/lunglei_road_div2_hnahthial').then(function (response) {
        _this25.localcouncils = response.data.localcouncils;
        console.log(_this25.localcouncils);
        _this25.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this25.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getHmuifangDivisionLC: function getHmuifangDivisionLC() {
      var _this26 = this;

      console.log("fetching the hnahthial list Place of cutting");
      axios.get('/api/auth/hmuifang_division').then(function (response) {
        _this26.localcouncils = response.data.localcouncils;
        console.log(_this26.localcouncils);
        _this26.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this26.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getNationalHighwayDiv1LC: function getNationalHighwayDiv1LC() {
      var _this27 = this;

      console.log("fetching the hnahthial list Place of cutting");
      axios.get('/api/auth/national_highway_div1').then(function (response) {
        _this27.localcouncils = response.data.localcouncils;
        console.log(_this27.localcouncils);
        _this27.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this27.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    getNationalHighwayDiv3LC: function getNationalHighwayDiv3LC() {
      var _this28 = this;

      console.log("fetching the hnahthial list Place of cutting");
      axios.get('/api/auth/national_highway_div3').then(function (response) {
        _this28.localcouncils = response.data.localcouncils;
        console.log(_this28.localcouncils);
        _this28.loading = false; // window.scrollTo(0, 0, 0, 0);
      })["catch"](function (error) {
        _this28.loading = false;
        console.log(error.response);

        if (error.response.status === 404) {
          console.log(error.response.status); //    this.$router.push('/localcouncil');
        }
      });
    },
    // for the dynamic dropdown
    // getChamphaiLCR() {
    //     console.log("fetching the Chaphai list");
    //     axios.get('/api/auth/champhai_local_councils')
    //         .then(response => {
    //             this.localcouncils = response.data.localcouncils;
    //             console.log(this.localcouncils);
    //             this.loading = false;
    //             // window.scrollTo(0, 0, 0, 0);
    //         })
    //         .catch(error => {
    //             this.loading = false;
    //             console.log(error.response);
    //             if (error.response.status === 404) {
    //                 console.log(error.response.status);
    //                 //    this.$router.push('/localcouncil');
    //             }
    //         });
    // },
    // getChamphaiLC() {
    //     console.log("fetching the Chaphai list");
    //     axios.get('/api/auth/champhai_local_councils')
    //         .then(response => {
    //             this.localcouncils = response.data.localcouncils;
    //             console.log(this.localcouncils);
    //             this.loading = false;
    //             // window.scrollTo(0, 0, 0, 0);
    //         })
    //         .catch(error => {
    //             this.loading = false;
    //             console.log(error.response);
    //             if (error.response.status === 404) {
    //                 console.log(error.response.status);
    //                 //    this.$router.push('/localcouncil');
    //             }
    //         });
    // },
    gotoPage: function gotoPage() {
      this.$router.push({
        path: '/instructionPage'
      });
    },
    StoreMemo: function StoreMemo() {
      this.$store.dispatch("memoStore", this.memoStore);
      this.$router.push({
        path: '/trackFormLanding'
      });
    },
    StoreReport: function StoreReport() {
      this.$store.dispatch("reportStore", this.reportStore);
      this.$router.push({
        path: '/reportFormLanding'
      });
    },
    scrollMeTo: function scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    toggle: function toggle() {
      this.show = !this.show;
    },
    // toggleSuccess(){
    //         this.showSuccess = !this.showSuccess
    //     },
    clearSuccess: function clearSuccess() {
      this.showSuccess = true;
    },
    clear: function clear() {
      this.show = true; // this.error = null
    },
    // clearSuccess() {
    //     this.showSuccess = true,
    // },
    // Login Methods ho
    authenticate: function authenticate() {
      var _this29 = this;

      this.$store.dispatch('login');
      Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_0__["login"])(this.$data.login).then(function (res) {
        _this29.$store.commit("loginSuccess", res);

        _this29.$router.push({
          path: '/home'
        });
      })["catch"](function (error) {
        _this29.$store.commit("loginFailed", {
          error: error
        });
      });
    },
    // Login Methods Closed
    // Form Submit
    submitForm: function submitForm() {
      var _this30 = this;

      this.disableS;
      axios.post('/api/auth/form', this.form).then(function (response) {
        //  this.$router.push(response.data.links.self);
        _this30.formsuccess = response.data.form;

        _this30.$router.push('/submitSuccess/' + _this30.formsuccess.id);

        _this30.enableS; // this.showSuccess = !this.showSuccess;
      })["catch"](function (errors) {
        _this30.errors = errors.response.data.errors;
        _this30.enableS;
      });
    },
    US: function US() {
      if (this.$store.getters.currentUser) this.form.user_id = this.$store.getters.currentUser.id;
    },
    DIV: function DIV(event) {
      this.form.division_id = event;
    },
    LOC: function LOC(event) {
      this.form.localcouncil_id = event;
    },
    errorHouseNumber: function errorHouseNumber() {
      if (this.hasErrorHouseNumber) {
        // return this.errors['localcouncil_name'][0];
        return "District i select tel lo tlat";
      }
    },
    errorCity: function errorCity() {
      if (this.hasErrorCity) {
        // return this.errors['localcouncil_name'][0];
        return "Khua/City/Village i enter tel lo tlat";
      }
    },
    errorDistrictR: function errorDistrictR() {
      if (this.hasErrorDistrictR) {
        // return this.errors['localcouncil_name'][0];
        return "In District select tha leh la";
      }
    },
    errorDistrict: function errorDistrict() {
      if (this.hasErrorDistrict) {
        // return this.errors['localcouncil_name'][0];
        return "Road Cutting-na tur District select tha leh la";
      }
    },
    errorLocalM: function errorLocalM() {
      if (this.hasErrorL) {
        // return this.errors['localcouncil_name'][0];
        return "In Local Council i select tel lo tlat";
      }
    },
    errorLocalMr: function errorLocalMr() {
      if (this.hasErrorLr) {
        // return this.errors['localcouncil_name'][0];
        return "In Local Council i select tel lo tlat";
      }
    },
    errorTuiM: function errorTuiM() {
      if (this.hasErrorT) {
        // return this.errors['localcouncil_name'][0];
        return "Tui Connection khi select tel rawh le";
      }
    },
    errorRoadM: function errorRoadM() {
      if (this.hasErrorR) {
        // return this.errors['localcouncil_name'][0];
        return "Road type khi select tel rawh le";
      }
    },
    errorClassObjectL: function errorClassObjectL() {
      return {
        'error-field': this.hasErrorL
      };
    },
    updateL: function updateL() {
      console.log(this.form.localcouncil_name, "name of the locality for road cutting ");
      this.errors['localcouncil_name'] = null;
    },
    updateLr: function updateLr() {
      console.log(this.form.rlocalcouncil_name, "name of the locality ");
      this.errors['rlocalcouncil_name'] = null;
    },
    updateDistrict: function updateDistrict() {
      this.errors['district_name'] = null;
    },
    updateW: function updateW() {
      this.errors['water_id'] = null;
    },
    updateR: function updateR() {
      this.errors['road_type'] = null;
    },
    updateHouse: function updateHouse() {
      this.errors['houseno'] = null;
    },
    updateCity: function updateCity() {
      this.errors['city'] = null;
    },
    updateDistrictR: function updateDistrictR() {
      console.log(this.form.rdistrict, "for district Residence"); //gonna change the local council list

      if (this.form.rdistrict === 'Champhai') {
        this.getChamphaiLCR();
      } else if (this.form.rdistrict === 'Lunglei') {
        this.getLungleiLCR();
      } else if (this.form.rdistrict === 'Saitual') {
        this.getSaitualLCR();
      } else if (this.form.rdistrict === 'Mamit') {
        this.getMamitLCR();
      } else if (this.form.rdistrict === 'Siaha') {
        this.getSiahaLCR();
      } else if (this.form.rdistrict === 'Khawzawl') {
        this.getKhawzawlLCR();
      } else if (this.form.rdistrict === 'Kolasib') {
        this.getKolasibLCR();
      } else if (this.form.rdistrict === 'Lawngtlai') {
        this.getLawngtlaiLCR();
      } else if (this.form.rdistrict === 'Serchhip') {
        this.getSerchhipLCR();
      } else if (this.form.rdistrict === 'Lunglei Road Div-II, Hnahthial') {
        this.getLungleiRoadDiv2HnahthialLCR();
      } else if (this.form.rdistrict === 'Hmuifang Division') {
        this.getHmuifangDivisionLCR();
      } else if (this.form.rdistrict === 'National Highway Div-I') {
        this.getNationalHighwayDiv1LCR();
      } else if (this.form.rdistrict === 'National Highway Div-III') {
        this.getNationalHighwayDiv3LCR();
      } else {
        this.getAizawlLCR();
      }

      this.errors['rdistrict'] = null;
    }
  }, "updateDistrict", function updateDistrict() {
    console.log(this.form.district, " location for cuttiing"); //gonna change the local council list

    if (this.form.district === 'Champhai') {
      this.getChamphaiLC();
    } else if (this.form.district === 'Lunglei') {
      this.getLungleiLC();
    } else if (this.form.district === 'Saitual') {
      this.getSaitualLC();
    } else if (this.form.district === 'Mamit') {
      this.getMamitLC();
    } else if (this.form.district === 'Siaha') {
      this.getSiahaLC();
    } else if (this.form.district === 'Khawzawl') {
      this.getKhawzawlLC();
    } else if (this.form.district === 'Kolasib') {
      this.getKolasibLC();
    } else if (this.form.district === 'Lawngtlai') {
      this.getLawngtlaiLC();
    } else if (this.form.district === 'Serchhip') {
      this.getSerchhipLC();
    } else if (this.form.district === 'Lunglei Road Div-II, Hnahthial') {
      this.getLungleiRoadDiv2HnahthialLC();
    } else if (this.form.district === 'Hmuifang Division') {
      this.getHmuifangDivisionLC();
    } else if (this.form.district === 'National Highway Div-I') {
      this.getNationalHighwayDiv1LC();
    } else if (this.form.district === 'National Highway Div-III') {
      this.getNationalHighwayDiv3LC();
    } else {
      this.getAizawlLC();
    }

    this.errors['district'] = null;
  }),
  computed: {
    disableS: function disableS() {
      this.isDisabled = false;
      this.submit_value = "Submitting";
    },
    enableS: function enableS() {
      this.isDisabled = true;
      this.submit_value = "Submit";
    },
    sameAddress: function sameAddress() {
      this.form.district = this.form.rdistrict;
      this.updateDistrict();
      this.form.houseno = this.form.rhouseno;
      this.errors['houseno'] = null;
      this.form.localcouncil_name = this.form.rlocalcouncil_name;
      this.errors['localcouncil_name'] = null;
      this.form.city = this.form.rcity;
      this.errors['city'] = null;
      this.errors['district'] = null;
    },
    authError: function authError() {
      return this.$store.getters.authError;
    },
    hasErrorHouseNumber: function hasErrorHouseNumber() {
      return this.errors && this.errors['houseno'] && this.errors['houseno'].length > 0;
    },
    hasErrorCity: function hasErrorCity() {
      return this.errors && this.errors['city'] && this.errors['city'].length > 0;
    },
    hasErrorL: function hasErrorL() {
      return this.errors && this.errors['localcouncil_name'] && this.errors['localcouncil_name'].length > 0;
    },
    hasErrorLr: function hasErrorLr() {
      return this.errors && this.errors['rlocalcouncil_name'] && this.errors['rlocalcouncil_name'].length > 0;
    },
    hasErrorT: function hasErrorT() {
      return this.errors && this.errors['water_id'] && this.errors['water_id'].length > 0;
    },
    hasErrorR: function hasErrorR() {
      return this.errors && this.errors['road_type'] && this.errors['road_type'].length > 0;
    },
    hasErrorDistrictR: function hasErrorDistrictR() {
      return this.errors && this.errors['rdistrict'] && this.errors['rdistrict'].length > 0;
    },
    hasErrorDistrict: function hasErrorDistrict() {
      return this.errors && this.errors['district'] && this.errors['district'].length > 0;
    } // ///place of cutting
    //         getChamphaiLC() {
    //             console.log("fetching the champhai list PLACE OF CUTTING");
    //             axios.get('/api/auth/champhai_local_councils')
    //                 .then(response => {
    //                     this.localcouncils = response.data.localcouncils;
    //                     console.log(this.localcouncils);
    //                     this.loading = false;
    //                     // window.scrollTo(0, 0, 0, 0);
    //                 })
    //                 .catch(error => {
    //                     this.loading = false;
    //                     console.log(error.response);
    //                     if (error.response.status === 404) {
    //                         console.log(error.response.status);
    //                         //    this.$router.push('/localcouncil');
    //                     }
    //                 });
    //         },
    // hasError: function () {
    //     return this.errors && this.errors[this.name] && this.errors[this.name].length > 0;
    // }

  },
  mounted: function mounted() {
    var _this31 = this;

    // var element1 = this.$els['topPort'];
    // var pos = element1.offsetTop;
    // window.scrollTo(0, pos),
    // for district for the REsiddence
    axios.get('/api/auth/localcouncil').then(function (response) {
      _this31.localcouncilsR = response.data.localcouncils;
      _this31.loading = false;
      window.scrollTo(0, 0, 0, 0);
    })["catch"](function (error) {
      _this31.loading = false;

      if (error.response.status === 404) {
        console.log(error.response.status); //    this.$router.push('/localcouncil');
      }
    }); // for district for the road cutting

    axios.get('/api/auth/localcouncil').then(function (response) {
      _this31.localcouncils = response.data.localcouncils;
      _this31.loading = false;
      window.scrollTo(0, 0, 0, 0);
    })["catch"](function (error) {
      _this31.loading = false;

      if (error.response.status === 404) {
        console.log(error.response.status); //    this.$router.push('/localcouncil');
      }
    });
    axios.get('/api/auth/district').then(function (response) {
      _this31.districts = response.data.districts;
      _this31.loading = false;
    })["catch"](function (error) {
      _this31.loading = false;

      if (error.response.status === 404) {
        _this31.$router.push('/localcouncil');
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/unauthenticate/LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-field[data-v-7fadd703] {\n  border-width: 1px;\n  --border-opacity: 1;\n  border-color: #f56565;\n  border-color: rgba(245, 101, 101, var(--border-opacity));\n  border-style: dotted\n}\n.error[data-v-7fadd703] {\n  text-align: center;\n  color: red;\n}\n.test[data-v-7fadd703]:focus-within {\n  border-width: 1px;\n  --border-opacity: 1;\n  border-color: #63b3ed;\n  border-color: rgba(99, 179, 237, var(--border-opacity));\n  border-width: 2px\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/unauthenticate/LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/LandingPage.vue?vue&type=template&id=7fadd703&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/unauthenticate/LandingPage.vue?vue&type=template&id=7fadd703&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "relative" },
    [
      _vm.loading
        ? [_c("PulseLoader", { staticClass: "object-center h-screen " })]
        : [
            !_vm.showSuccess
              ? _c("div", {
                  staticClass:
                    "absolute top-0 bottom-0 left-0 right-0 z-20 bg-black opacity-75 shadow-4",
                  on: { click: _vm.clearSuccess }
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.showSuccess
              ? _c(
                  "div",
                  {
                    staticClass:
                      "absolute left-0 right-0 z-40 w-5/6 h-auto ml-auto mr-auto bg-gray-200 rounded-lg shadow top-2 md:h-84"
                  },
                  [
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "absolute top-0 right-0" }, [
                      _c(
                        "button",
                        {
                          staticClass: "mt-6 mr-6",
                          on: { click: _vm.clearSuccess }
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "11.877",
                                height: "11.877",
                                viewBox: "0 0 11.877 11.877"
                              }
                            },
                            [
                              _c(
                                "g",
                                {
                                  attrs: {
                                    id: "Group_9",
                                    "data-name": "Group 9",
                                    transform: "translate(-1238.562 -230.423)"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      id: "Path_35",
                                      "data-name": "Path 35",
                                      d: "M3285,232l8.847,8.847",
                                      transform: "translate(-2045 0.015)",
                                      fill: "none",
                                      stroke: "#e37198",
                                      "stroke-linecap": "round",
                                      "stroke-width": "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      id: "Path_36",
                                      "data-name": "Path 36",
                                      d: "M0,0,8.847,8.847",
                                      transform:
                                        "matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)",
                                      fill: "none",
                                      stroke: "#e37198",
                                      "stroke-linecap": "round",
                                      "stroke-width": "2"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(0)
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex items-center justify-between w-screen h-auto md:px-32 xl:px-64 bg-homeblue md:pb-12 md:pt-12"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "hidden w-1/2 max-w-full mt-24 md:block md:px-1 md:pb-12 lg:pb-24 md:w-4/5 lg:w-4/5 "
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", { staticClass: "pt-2 text-white" }, [
                      _vm._v(
                        "I awmhmun atangin Road Cutting Permit i dil thei e"
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex " }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "flex items-center px-5 pt-1 pb-2 mt-4 text-sm text-white rounded-lg shadow bg-buttonpink hover:bg-red-500 sm:mt-6 focus:outline-none",
                          on: {
                            click: function($event) {
                              return _vm.scrollMeTo("formPort")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Apply\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "flex items-center px-5 py-2 mt-4 ml-4 text-sm text-white border rounded-lg shadow border-1 hover:text-white-600 sm:mt-6 hover:bg-blue-800 border-gray focus:outline-none",
                          on: {
                            click: function($event) {
                              return _vm.scrollMeTo("trackPort")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Track\n                    "
                          )
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "hidden mb-8 lg:block md:relative xl:mb-8 " },
                  [_c("Logolg")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "hidden mb-8 md:block lg:hidden md:relative "
                  },
                  [_c("Logomd")],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "block w-screen px-12 pt-4 md:hidden bg-homeblue h-72 "
              },
              [
                _c(
                  "div",
                  [
                    _c("center", [
                      _c("div", { staticClass: "pb-2" }, [_c("Logosm")], 1)
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {},
                      [
                        _c("center", [
                          _c(
                            "p",
                            {
                              staticClass:
                                "text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-3xl"
                            },
                            [
                              _vm._v(
                                "PWD Road Cutting\n                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex justify-center mt-3" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "flex items-center px-5 py-2 text-sm text-white rounded-lg shadow bg-buttonpink hover:bg-red-500 focus:outline-none",
                              on: {
                                click: function($event) {
                                  return _vm.scrollMeTo("formPort")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Apply\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "flex items-center px-5 py-2 ml-4 text-sm text-white border-red-400 rounded-lg shadow border-1 hover:text-white-600 hover:bg-blue-800 focus:outline-none",
                              on: {
                                click: function($event) {
                                  return _vm.scrollMeTo("trackPort")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Track\n                        "
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-center h-auto bg-gray-200 z-5" },
              [
                _c(
                  "form",
                  {
                    staticClass:
                      "left-0 right-0 z-10 w-4/5 h-auto px-2 py-2 mb-12 -mt-4 bg-white rounded-lg shadow md:-mt-12 -top-2 xl:w-3/5 lg:py-6 lg:px-12 ",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submitForm.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "font-family:'Segoe UI' text-2xl text-center text-textblue font-semibold  mb-4"
                      },
                      [_vm._v("Road Cutting\n                    Form ")]
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        ref: "formPort",
                        staticClass: "grid grid-cols-1 md:grid-cols-2 md:gap-4"
                      },
                      [
                        _c("InputFieldForm", {
                          attrs: {
                            name: "name",
                            label: "Hming Pum",
                            errors: _vm.errors,
                            placeholder: "I hming Pum chhu lut rawh le"
                          },
                          on: {
                            "update:field": function($event) {
                              _vm.form.name = $event
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("InputFieldForm", {
                          attrs: {
                            name: "email",
                            label: "Email",
                            errors: _vm.errors,
                            placeholder: "I Email Id chhu lut rawh le"
                          },
                          on: {
                            "update:field": function($event) {
                              _vm.form.email = $event
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "grid grid-cols-1 md:grid-cols-2 md:gap-4"
                      },
                      [
                        _c("InputFieldForm", {
                          attrs: {
                            name: "phone",
                            label: "Phone no.",
                            errors: _vm.errors,
                            placeholder: "I mobile number chhu lut rawh le"
                          },
                          on: {
                            "update:field": function($event) {
                              _vm.form.phone = $event
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "px-6 py-1 mb-6 border rounded" },
                      [
                        _c(
                          "p",
                          {
                            staticClass:
                              "px-1 pt-1 pb-2 text-lg font-normal text-textblueform"
                          },
                          [_vm._v("Residence address")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "grid grid-cols-1 md:grid-cols-2 md:gap-4"
                          },
                          [
                            _c("InputFieldForm", {
                              attrs: {
                                name: "rhouseno",
                                label: "House No. ",
                                errors: _vm.errors,
                                placeholder: "House number"
                              },
                              on: {
                                "update:field": function($event) {
                                  _vm.form.rhouseno = $event
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("InputFieldForm", {
                              attrs: {
                                name: "rcity",
                                label: "City/Town/Village",
                                errors: _vm.errors,
                                placeholder: "City/Town/Village"
                              },
                              on: {
                                "update:field": function($event) {
                                  _vm.form.rcity = $event
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "grid grid-cols-1 md:grid-cols-2 md:gap-4"
                          },
                          [
                            _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "relative pb-2 pr-1 mb-3 border rounded-lg test"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "absolute px-4 py-2 text-sm font-normal text-textblueform",
                                      attrs: { for: "form.district" }
                                    },
                                    [_vm._v("District")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.rdistrict,
                                          expression: "form.rdistrict"
                                        }
                                      ],
                                      staticClass:
                                        "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg cursor-pointer text-textgrayform focus:outline-none",
                                      attrs: { errors: _vm.errors },
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "rdistrict",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          function($event) {
                                            return _vm.updateDistrictR()
                                          }
                                        ]
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        {
                                          staticClass:
                                            "inline-block text-textgrayform ",
                                          attrs: {
                                            value: "",
                                            disabled: "",
                                            selected: ""
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "In\n                                        district awmna select la"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.districts, function(district) {
                                        return _c(
                                          "option",
                                          {
                                            key: district.id,
                                            staticClass:
                                              "inline-block ml-2 mr-2 text-textgrayform"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(district.name) +
                                                " "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "pb-4 text-sm text-red-600",
                                  domProps: {
                                    textContent: _vm._s(_vm.errorDistrictR())
                                  }
                                },
                                [_vm._v("Error Here")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "relative pb-2 pr-1 mb-3 border rounded-lg test"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "absolute px-4 py-2 text-sm font-normal text-textblueform",
                                      attrs: { for: "form.rlocalcouncil_name" }
                                    },
                                    [_vm._v("Locality/Street/Veng")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.rlocalcouncil_name,
                                          expression: "form.rlocalcouncil_name"
                                        }
                                      ],
                                      staticClass:
                                        "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",
                                      attrs: { errors: _vm.errors },
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "rlocalcouncil_name",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          function($event) {
                                            return _vm.updateLr()
                                          }
                                        ]
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        {
                                          staticClass:
                                            "inline-block text-textgrayform ",
                                          attrs: {
                                            value: "",
                                            disabled: "",
                                            selected: ""
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "In Local\n                                        Council awmna thlang rawh le"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.localcouncilsR, function(
                                        localcouncil
                                      ) {
                                        return _c(
                                          "option",
                                          {
                                            key: localcouncil.id,
                                            staticClass:
                                              "inline-block ml-2 mr-2 text-textgrayform"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(localcouncil.name) +
                                                " "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "pb-4 text-sm text-red-600",
                                  domProps: {
                                    textContent: _vm._s(_vm.errorLocalMr())
                                  }
                                },
                                [_vm._v("Error Here")]
                              )
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "px-6 py-1 mb-6 border rounded" },
                      [
                        _c("div", { staticClass: "flex my-2 justiy-start" }, [
                          _c(
                            "p",
                            {
                              staticClass:
                                "px-1 pt-1 pb-2 text-lg font-normal text-textblueform"
                            },
                            [
                              _vm._v(
                                "Location for cutting/road cut-na\n                            tur hmun "
                              ),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "px-2 py-2 ml-1 border rounded-lg text-textblueform border-textblueform hover:text-blue-500 focus:outline-none",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.sameAddress.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Same\n                                as Residential Address"
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
                              "grid grid-cols-1 md:grid-cols-2 md:gap-4"
                          },
                          [
                            _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "relative pb-2 mb-3 border rounded-lg test"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "absolute px-4 py-2 text-sm font-normal text-textblueform",
                                      attrs: { for: "houseno" }
                                    },
                                    [
                                      _vm._v(
                                        "House\n                                    Number"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.houseno,
                                        expression: "form.houseno"
                                      }
                                    ],
                                    staticClass:
                                      "w-full px-4 pt-6 mt-1 rounded-lg text-textgrayform focus:outline-none ",
                                    attrs: {
                                      type: "text",
                                      placeholder: "House number"
                                    },
                                    domProps: { value: _vm.form.houseno },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "houseno",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.updateHouse()
                                        }
                                      ]
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "pb-4 text-sm text-red-600",
                                  domProps: {
                                    textContent: _vm._s(_vm.errorHouseNumber())
                                  }
                                },
                                [_vm._v("Error Here")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "relative pb-2 mb-3 border rounded-lg test"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "absolute px-4 py-2 text-sm font-normal text-textblueform",
                                      attrs: { for: "houseno" }
                                    },
                                    [_vm._v("City/Town/Village")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.city,
                                        expression: "form.city"
                                      }
                                    ],
                                    staticClass:
                                      "w-full px-4 pt-6 mt-1 rounded-lg text-textgrayform focus:outline-none ",
                                    attrs: {
                                      type: "text",
                                      placeholder: "City/Town/Village"
                                    },
                                    domProps: { value: _vm.form.city },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "city",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.updateCity()
                                        }
                                      ]
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "pb-4 text-sm text-red-600",
                                  domProps: {
                                    textContent: _vm._s(_vm.errorCity())
                                  }
                                },
                                [_vm._v("Error Here")]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "grid grid-cols-1 md:grid-cols-2 md:gap-4"
                          },
                          [
                            _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "relative pb-2 pr-1 mb-3 border rounded-lg test"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "absolute px-4 py-2 text-sm font-normal text-textblueform",
                                      attrs: { for: "form.district" }
                                    },
                                    [_vm._v("District")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.district,
                                          expression: "form.district"
                                        }
                                      ],
                                      staticClass:
                                        "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg cursor-pointer text-textgrayform focus:outline-none",
                                      attrs: { errors: _vm.errors },
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "district",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          function($event) {
                                            return _vm.updateDistrict()
                                          }
                                        ]
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        {
                                          staticClass:
                                            "inline-block text-textgrayform ",
                                          attrs: {
                                            value: "",
                                            disabled: "",
                                            selected: ""
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "In\n                                        district awmna select la"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.districts, function(district) {
                                        return _c(
                                          "option",
                                          {
                                            key: district.id,
                                            staticClass:
                                              "inline-block ml-2 mr-2 text-textgrayform"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(district.name) +
                                                " "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "pb-4 text-sm text-red-600",
                                  domProps: {
                                    textContent: _vm._s(_vm.errorDistrict())
                                  }
                                },
                                [_vm._v("Error Here")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "relative pb-2 pr-1 mb-3 border rounded-lg test"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "absolute px-4 py-2 text-sm font-normal text-textblueform t",
                                      attrs: { for: "form.localcouncil_name" }
                                    },
                                    [_vm._v("Locality/Street/Veng")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.localcouncil_name,
                                          expression: "form.localcouncil_name"
                                        }
                                      ],
                                      staticClass:
                                        "w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg cursor-pointer text-textgrayform focus:outline-none",
                                      attrs: { errors: _vm.errors },
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "localcouncil_name",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          function($event) {
                                            return _vm.updateL()
                                          }
                                        ]
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        {
                                          staticClass:
                                            "inline-block text-textgrayform ",
                                          attrs: {
                                            value: "",
                                            disabled: "",
                                            selected: ""
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "In Local\n                                        Council awmna thlang rawh le"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.localcouncils, function(
                                        localcouncil
                                      ) {
                                        return _c(
                                          "option",
                                          {
                                            key: localcouncil.id,
                                            staticClass:
                                              "inline-block ml-2 mr-2 text-textgrayform"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(localcouncil.name) +
                                                " "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "pb-4 text-sm text-red-600",
                                  domProps: {
                                    textContent: _vm._s(_vm.errorLocalM())
                                  }
                                },
                                [_vm._v("Error Here")]
                              )
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "grid grid-cols-1 md:grid-cols-2" },
                      [
                        _c("div", [
                          _c(
                            "label",
                            {
                              staticClass:
                                "px-4 text-base font-normal text-textblueform md:text-lg ",
                              attrs: { for: "water_id" }
                            },
                            [
                              _vm._v(
                                "Purpose\n                            of cutting/Kawng laih duh chhan:"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "px-4 py-1 mb-3" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "cursor-pointer hover:text-gray-600"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.water_id,
                                      expression: "form.water_id"
                                    }
                                  ],
                                  staticClass:
                                    "text-sm text-textgrayform focus:text-black",
                                  attrs: {
                                    id: "water_id1",
                                    type: "radio",
                                    name: "water_id",
                                    value: "0"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.water_id, "0")
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.updateW()
                                    },
                                    change: function($event) {
                                      return _vm.$set(_vm.form, "water_id", "0")
                                    }
                                  }
                                }),
                                _vm._v(
                                  " Tui\n                                Connection Thar (New)\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass:
                                  "cursor-pointer hover:text-gray-600"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.water_id,
                                      expression: "form.water_id"
                                    }
                                  ],
                                  staticClass:
                                    "text-sm text-textgrayform focus:text-black",
                                  attrs: {
                                    id: "water_id12",
                                    type: "radio",
                                    name: "water_id",
                                    value: "1"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.water_id, "1")
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.updateW()
                                    },
                                    change: function($event) {
                                      return _vm.$set(_vm.form, "water_id", "1")
                                    }
                                  }
                                }),
                                _vm._v(
                                  " Tui\n                                Connection Hlui (Old)\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass:
                                  "cursor-pointer hover:text-gray-600"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.water_id,
                                      expression: "form.water_id"
                                    }
                                  ],
                                  staticClass:
                                    "text-sm text-textgrayform focus:text-black",
                                  attrs: {
                                    id: "water_id12",
                                    type: "radio",
                                    name: "water_id",
                                    value: "2"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.water_id, "2")
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.updateW()
                                    },
                                    change: function($event) {
                                      return _vm.$set(_vm.form, "water_id", "2")
                                    }
                                  }
                                }),
                                _vm._v(" Others\n                            ")
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "pb-4 text-sm text-red-600",
                              domProps: { textContent: _vm._s(_vm.errorTuiM()) }
                            },
                            [_vm._v("Error Here")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "label",
                            {
                              staticClass:
                                "px-4 text-lg font-normal text-textblueform ",
                              attrs: { for: "road_type" }
                            },
                            [
                              _vm._v(
                                "Type of\n                            Road/Pavement: "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "px-4 py-1" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "cursor-pointer hover:text-gray-600"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.road_type,
                                      expression: "form.road_type"
                                    }
                                  ],
                                  staticClass:
                                    "text-sm text-textgrayform focus:text-black hover:text-gray-400",
                                  attrs: {
                                    id: "road_type1",
                                    type: "radio",
                                    name: "road_type",
                                    value: "0",
                                    errors: _vm.errors
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.road_type, "0")
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.updateR()
                                    },
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "road_type",
                                        "0"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  " Flexible\n                                Pavement (Alkatra luan)\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass:
                                  "cursor-pointer hover:text-gray-600"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.road_type,
                                      expression: "form.road_type"
                                    }
                                  ],
                                  staticClass:
                                    "text-sm text-textgrayform focus:text-black hover:text-gray-400",
                                  attrs: {
                                    id: "road_type2",
                                    type: "radio",
                                    name: "road_type",
                                    value: "1",
                                    errors: _vm.errors
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.road_type, "1")
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.updateR()
                                    },
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "road_type",
                                        "1"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(
                                  " Rigid\n                                Pavement (Concrete-a siam)\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass:
                                  "cursor-pointer hover:text-gray-600"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.road_type,
                                      expression: "form.road_type"
                                    }
                                  ],
                                  staticClass:
                                    "text-sm text-textgrayform focus:text-black ",
                                  attrs: {
                                    id: "road_type2",
                                    type: "radio",
                                    name: "road_type",
                                    value: "2",
                                    errors: _vm.errors
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.road_type, "2")
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.updateR()
                                    },
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "road_type",
                                        "2"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" Others\n                            ")
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "pb-4 text-sm text-red-600",
                              domProps: {
                                textContent: _vm._s(_vm.errorRoadM())
                              }
                            },
                            [_vm._v("Error Here")]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "flex justify-center py-2 text-sm focus:outline-none"
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "inline-block px-5 py-2 text-white rounded-lg bg-buttonpink hover:bg-red-500 focus:outline-none",
                            attrs: { disabled: !_vm.isDisabled }
                          },
                          [_vm._v(_vm._s(_vm.submit_value))]
                        )
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
                ref: "trackPort",
                staticClass:
                  "flex flex-col items-center w-screen h-auto md:justify-center md:flex-row md:h-72 lg:h-auto z-5 bg-homeblue"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex flex-col items-center justify-center w-4/5 my-2 bg-white rounded-lg md:w-1/3 lg:w-2/6 xl:w-1/3 md:my-4 lg:my-6 md:mr-12 lg:mr-20 sm:h-32 md:h-48 xl:h-56"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "px-5 py-2 text-xl font-bold text-textblue"
                      },
                      [_vm._v(" Road Cutting tih ni tur in report-na")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-4/5 border rounded-lg mb-7" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "absolute px-2 py-2 text-xs font-bold text-blue-500"
                        },
                        [_vm._v("Memo No")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.reportStore,
                            expression: "reportStore"
                          }
                        ],
                        staticClass:
                          "w-full px-2 pt-6 pb-1 text-gray-900 rounded-lg focus:outline-none ",
                        attrs: {
                          type: "text",
                          placeholder: "I Memo no chhu lut rawh le "
                        },
                        domProps: { value: _vm.reportStore },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.reportStore = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "flex items-center py-2 mt-4 mb-4 text-sm md:mb-0 focus:outline-none",
                        attrs: { type: "submit" },
                        on: { click: _vm.StoreReport }
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "px-5 py-2 text-white rounded-lg bg-buttonpink hover:bg-red-500 hover:outline-none focus:outline-none"
                          },
                          [_vm._v("Report")]
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
                      "flex flex-col items-center justify-center w-4/5 my-2 bg-white rounded-lg md:w-1/3 lg:w-2/6 xl:w-1/3 md:my-4 lg:my-6 md:ml-12 lg:ml-20 sm:h-32 md:h-48 xl:h-56"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "px-5 py-2 text-xl font-bold text-textblue"
                      },
                      [_vm._v(" Track Form")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-4/5 border rounded-lg mb-7" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "absolute px-2 py-2 text-xs font-bold text-blue-500"
                        },
                        [_vm._v("Memo No")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.memoStore,
                            expression: "memoStore"
                          }
                        ],
                        staticClass:
                          "w-full px-2 pt-6 pb-1 text-gray-900 rounded-lg focus:outline-none ",
                        attrs: {
                          type: "text",
                          placeholder: "I Memo no chhu lut rawh le "
                        },
                        domProps: { value: _vm.memoStore },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.memoStore = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "flex items-center py-2 mt-4 mb-4 text-sm md:mb-0 focus:outline-none",
                        attrs: { type: "submit" },
                        on: { click: _vm.StoreMemo }
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "px-5 py-2 text-white rounded-lg bg-buttonpink hover:bg-red-500 hover:outline-none focus:outline-none"
                          },
                          [_vm._v("Track")]
                        )
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "hidden md:block" }, [
              _c(
                "div",
                { staticClass: "flex justify-center h-auto bg-gray-200" },
                [
                  _c(
                    "div",
                    { staticClass: "hidden md:block" },
                    [_c("Sopmdblock")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "block md:hidden" },
                    [_c("Sopmdhidden")],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex justify-center h-auto bg-gray-200" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-4/5 py-2 md:w-3/5 ss:px-2 sm:px-4 md:px-6 lg:px-32 md:py-6 "
                    },
                    [
                      _c("center", [
                        _c(
                          "h2",
                          {
                            staticClass:
                              "px-5 py-2 text-xl font-bold text-textblue"
                          },
                          [_vm._v("Instruction")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("Accordian")
                    ],
                    1
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "block h-auto py-4 bg-gray-200 md:hidden" },
              [
                _c("div", { staticClass: "flex justify-center" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "px-2 py-2 text-white bg-blue-800 rounded-lg ",
                      on: { click: _vm.gotoPage }
                    },
                    [_vm._v("Instruction &\n                    Infographics")]
                  )
                ])
              ]
            )
          ]
    ],
    2
  )
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
          "absolute left-0 right-0 flex flex-col items-center justify-center h-auto ml-auto mr-auto top-2 w-92"
      },
      [
        _c("div", {
          staticClass:
            "flex justify-center h-24 rounded-t-lg bg-successcyan w-92"
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex justify-center text-xl font-bold text-blue-600 "
          },
          [_vm._v("\n                    Successs\n                ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "text-2xl font-bold leading-tight text-white sm:mt-8 sm:text-4xl md:text-4xl"
      },
      [
        _vm._v("PWD\n                    "),
        _c("br", { staticClass: "hidden lg:inline" }),
        _vm._v(" "),
        _c("span", { staticClass: "text-white md:text-3xl" }, [
          _vm._v("Apply For Road Cutting")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/unauthenticate/LandingPage.vue":
/*!*****************************************************!*\
  !*** ./resources/js/unauthenticate/LandingPage.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LandingPage_vue_vue_type_template_id_7fadd703_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=template&id=7fadd703&scoped=true& */ "./resources/js/unauthenticate/LandingPage.vue?vue&type=template&id=7fadd703&scoped=true&");
/* harmony import */ var _LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=script&lang=js& */ "./resources/js/unauthenticate/LandingPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LandingPage_vue_vue_type_style_index_0_id_7fadd703_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css& */ "./resources/js/unauthenticate/LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LandingPage_vue_vue_type_template_id_7fadd703_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LandingPage_vue_vue_type_template_id_7fadd703_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7fadd703",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/unauthenticate/LandingPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/unauthenticate/LandingPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/unauthenticate/LandingPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LandingPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/LandingPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/unauthenticate/LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/unauthenticate/LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_7fadd703_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/LandingPage.vue?vue&type=style&index=0&id=7fadd703&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_7fadd703_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_7fadd703_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_7fadd703_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_7fadd703_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/unauthenticate/LandingPage.vue?vue&type=template&id=7fadd703&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/unauthenticate/LandingPage.vue?vue&type=template&id=7fadd703&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_template_id_7fadd703_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LandingPage.vue?vue&type=template&id=7fadd703&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/unauthenticate/LandingPage.vue?vue&type=template&id=7fadd703&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_template_id_7fadd703_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_template_id_7fadd703_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);