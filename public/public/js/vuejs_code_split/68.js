(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{241:function(t,e,r){"use strict";r.r(e);var a={name:"EstimateCalculatorShow",data:function(){return{estimate:{road_name:"",length:"",breadth:"",area:"",rate:"",deposit:"",amount:"",total:"",form_id:this.$route.params.id,division_id:"",enter_by:this.$store.getters.currentUser.id},errors:{},error:null}},mounted:function(){var t=this;axios.get("/api/auth/form/list/"+this.$route.params.id).then((function(e){t.form=e.data.form,t.estimate.division_id=t.form.division_id,t.loading=!1})).catch((function(e){t.loading=!1,404===e.response.status&&t.$router.push("/forms")}))},computed:{AREA:function(){this.estimate.area=Number((this.estimate.length*this.estimate.breadth).toFixed(2)),this.estimate.amount=Number((this.estimate.area*this.estimate.rate).toFixed(2))},TOTAL:function(){this.estimate.amount=Number((this.estimate.area*this.estimate.rate).toFixed(2)),this.estimate.deposit=Number((10*this.estimate.amount/100).toFixed(2)),this.estimate.total=Number((this.estimate.amount+this.estimate.deposit).toFixed(2))},hasErrorRoadname:function(){return this.errors&&this.errors.road_name&&this.errors.road_name.length>0},hasErrorRoadtype:function(){return this.errors&&this.errors.road_type&&this.errors.road_type.length>0},hasErrorLength:function(){return this.errors&&this.errors.length&&this.errors.length.length>0},hasErrorBreadth:function(){return this.errors&&this.errors.breadth&&this.errors.breadth.length>0},hasErrorRate:function(){return this.errors&&this.errors.rate&&this.errors.rate.length>0}},methods:{estimateSubmit:function(){var t=this;axios.post("/api/estimateSubmit",this.estimate,{headers:{Authorization:"Bearer ".concat(this.$store.getters.currentUser.token)}}).then((function(e){"Success"===e.data.message?t.$router.push("/estimateSubmitSuccess"):t.$router.push("/estimateSubmitUnsuccess")})).catch((function(e){t.errors=e.response.data.errors}))},errorRoadname:function(){if(this.hasErrorRoadname)return"Please Enter Road name"},errorRoadtype:function(){if(this.hasErrorRoadtype)return"Enter Type of Road"},errorLength:function(){if(this.hasErrorLength)return"Re Enter Length"},errorBreadth:function(){if(this.hasErrorBreadth)return"Enter Breadth"},errorRate:function(){if(this.hasErrotRate)return"Enter Rate"},updateRoadname:function(){this.errors.road_name=null},updateRoadtype:function(){this.errors.road_type=null},updateLength:function(){this.errors.length=null},updateBreadth:function(){this.errors.breadth=null},updateRate:function(){this.errors.rate=null}}},s=r(0),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("form",{staticClass:"mt-2 ml-0 bg-white rounded-lg md:ml-2 w-5/5 md:w-4/5 lg:w-2/5",on:{submit:function(e){return e.preventDefault(),t.estimateSubmit.apply(null,arguments)}}},[r("div",{staticClass:"px-12 py-4"},[r("p",{staticClass:"py-2 text-xl bold"},[t._v("Estimate Calculator")]),t._v(" "),r("div",{staticClass:"relative py-3 "},[r("label",{staticClass:"absolute px-2 py-2 text-xs uppercase text-textblue",attrs:{for:"road_name"}},[t._v("Road Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.estimate.road_name,expression:"estimate.road_name"}],staticClass:"w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",attrs:{id:"road_name",type:"text",placeholder:"Road name chhu lut rawh le",autofocus:""},domProps:{value:t.estimate.road_name},on:{input:[function(e){e.target.composing||t.$set(t.estimate,"road_name",e.target.value)},function(e){return t.updateRoadname()}]}}),t._v(" "),r("p",{staticClass:"pb-4 text-sm text-red-600",domProps:{textContent:t._s(t.errorRoadname())}},[t._v("Error Here")])]),t._v(" "),r("div",{staticClass:"relative py-3 "},[r("label",{staticClass:"absolute px-2 py-2 text-xs uppercase text-textblue",attrs:{for:"road_type"}},[t._v("Road Type")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.estimate.road_type,expression:"estimate.road_type"}],staticClass:"w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",attrs:{id:"road_type",type:"text",placeholder:"Road name chhu lut rawh le"},domProps:{value:t.estimate.road_type},on:{input:[function(e){e.target.composing||t.$set(t.estimate,"road_type",e.target.value)},function(e){return t.updateRoadtype()}]}}),t._v(" "),r("p",{staticClass:"pb-4 text-sm text-red-600",domProps:{textContent:t._s(t.errorRoadtype())}},[t._v("Error Here")])]),t._v(" "),r("div",{staticClass:"relative py-3 "},[r("label",{staticClass:"absolute px-2 py-2 text-xs uppercase text-textblue",attrs:{for:"length"}},[t._v("Length")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.estimate.length,expression:"estimate.length"}],staticClass:"w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",attrs:{id:"length",type:"text",placeholder:"number chhu lut rawh le"},domProps:{value:t.estimate.length},on:{input:[function(e){e.target.composing||t.$set(t.estimate,"length",e.target.value)},t.AREA]}}),t._v(" "),r("p",{staticClass:"pb-4 text-sm text-red-600",domProps:{textContent:t._s(t.errorLength())}},[t._v("Error Here")])]),t._v(" "),r("div",{staticClass:"relative pb-3 "},[r("label",{staticClass:"absolute px-2 py-2 text-xs uppercase text-textblue",attrs:{for:"breadth"}},[t._v("Breadth")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.estimate.breadth,expression:"estimate.breadth"}],staticClass:"w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",attrs:{id:"breadth",type:"text",placeholder:"number chhu lut rawh le"},domProps:{value:t.estimate.breadth},on:{input:[function(e){e.target.composing||t.$set(t.estimate,"breadth",e.target.value)},t.AREA]}}),t._v(" "),r("p",{staticClass:"pb-4 text-sm text-red-600",domProps:{textContent:t._s(t.errorBreadth())}},[t._v("Error Here")])]),t._v(" "),r("div",{staticClass:"relative pb-3 "},[r("label",{staticClass:"absolute px-2 py-2 text-xs uppercase text-textblue",attrs:{for:"rate"}},[t._v("Rate(INR)")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.estimate.rate,expression:"estimate.rate"}],staticClass:"w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none ",attrs:{id:"rate",type:"text",placeholder:"number chhu lut rawh le"},domProps:{value:t.estimate.rate},on:{input:[function(e){e.target.composing||t.$set(t.estimate,"rate",e.target.value)},t.TOTAL]}}),t._v(" "),r("p",{staticClass:"pb-4 text-sm text-red-600",domProps:{textContent:t._s(t.errorRate())}},[t._v("Error Here")])]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2"},[r("div",{staticClass:"px-4 py-5 bg-white rounded-lg shadow "},[r("p",{staticClass:"text-sm text-gray-400"},[t._v("Area")]),t._v(" "),r("p",{staticClass:"text-xl text-blue-400"},[t._v("\n                    "+t._s(t.estimate.area)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"px-4 py-5 text-xl text-blue-400 bg-white rounded-lg shadow"},[r("p",{staticClass:"text-sm text-gray-400"},[t._v("Amount (INR)")]),t._v(" "),r("p",{staticClass:"text-xl text-blue-400"},[t._v("\n                    Rs."+t._s(t.estimate.amount)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"px-4 py-5 bg-white rounded-lg shadow "},[r("p",{staticClass:"text-sm text-gray-400"},[t._v("Deposit")]),t._v(" "),r("p",{staticClass:"text-xl text-blue-400"},[t._v("\n                    Rs."+t._s(t.estimate.deposit)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"px-4 py-5 text-xl text-blue-400 bg-white rounded-lg shadow"},[r("p",{staticClass:"text-sm text-gray-400"},[t._v("Total(INR)")]),t._v(" "),r("p",{staticClass:"text-xl text-blue-400"},[t._v("\n                    Rs."+t._s(t.estimate.total)+"\n                    ")])])]),t._v(" "),t._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative pb-3"},[e("div",[e("button",{staticClass:"flex items-center px-5 py-2 mt-4 text-sm text-white rounded-lg shadow bg-buttonpink hover:bg-red-500 sm:mt-6 focus:outline-none",attrs:{type:"submit"}},[this._v("\n                        Submit\n                    ")])]),this._v(" "),e("p",{staticClass:"mt-4 text-sm italic text-gray-500"},[this._v("Note: Click Submit to send to EE for Approval")])])}],!1,null,"98bd68d4",null);e.default=o.exports}}]);