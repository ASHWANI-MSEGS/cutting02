(window.webpackJsonp=window.webpackJsonp||[]).push([[22,35,55],{15:function(t,e,a){var s=a(164);"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(7)(s,r);s.locals&&(t.exports=s.locals)},163:function(t,e,a){"use strict";a(15)},164:function(t,e,a){(t.exports=a(6)(!1)).push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""])},2:function(t,e,a){"use strict";a.r(e);var s={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},r=(a(163),a(0)),o=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[e("div",{staticClass:"v-pulse v-pulse1",style:[this.spinnerStyle,this.spinnerDelay1]}),e("div",{staticClass:"v-pulse v-pulse2",style:[this.spinnerStyle,this.spinnerDelay2]}),e("div",{staticClass:"v-pulse v-pulse3",style:[this.spinnerStyle,this.spinnerDelay3]})])}),[],!1,null,null,null);e.default=o.exports},245:function(t,e,a){"use strict";a.r(e);var s=a(3),r=a(2),o={name:"ReportDateShow",components:{UserCircle:s.default,PulseLoader:r.default},data:function(){return{loading:!0,modal:!1,contact:null,modalA:!1,form:"",report:"",user:this.$store.getters.currentUser,engineers:"",form1:{fine:null,id:this.$route.params.id}}},mounted:function(){var t=this;axios.get("/api/reportDateShow/"+this.$route.params.id,{headers:{Authorization:"Bearer ".concat(this.$store.getters.currentUser.token)}}).then((function(e){t.form=e.data.form,t.report=e.data.report,t.loading=!1,console.log(t.form),console.log(t.report)})).catch((function(e){t.loading=!1,404===e.response.status&&t.$router.push("/forms")}))},methods:{destroy:function(){var t=this;axios.patch("/api/auth/form/reject",this.form1).then((function(e){t.$router.push("/formListUn"),console.log(e.data,"after reject from reporting")})).catch((function(t){alert("Internal Error. Unable to delete contact.")}))},approve:function(){var t=this;axios.patch("/api/auth/form/list",this.form1).then((function(e){t.$router.push("/assigned/"+t.$route.params.id)})).catch((function(t){alert("Internal Error. Unable to approve form.")}))},printme:function(){window.print()}}},i=a(0),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative"},[t.modalA?a("div",{staticClass:"absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25",on:{click:function(e){t.modalA=!t.modalA}}}):t._e(),t._v(" "),t.modal?a("div",{staticClass:"absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25",on:{click:function(e){t.modal=!t.modal}}}):t._e(),t._v(" "),t.modalA?a("div",{staticClass:"absolute left-0 right-0 z-40 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:h-84 xl:h-96 sm:w-2/3 lg:w-2/4 xl:w-1/4"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.approve.apply(null,arguments)}}},[a("div",{staticClass:"absolute top-0 right-0 "},[a("button",{staticClass:"px-2 py-2 mt-4 mr-6 rounded hover:bg-gray-200",on:{click:function(e){t.modalA=!t.modalA}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"11.877",height:"11.877",viewBox:"0 0 11.877 11.877"}},[a("g",{attrs:{id:"Group_9","data-name":"Group 9",transform:"translate(-1238.562 -230.423)"}},[a("path",{attrs:{id:"Path_35","data-name":"Path 35",d:"M3285,232l8.847,8.847",transform:"translate(-2045 0.015)",fill:"none",stroke:"#e37198","stroke-linecap":"round","stroke-width":"2"}}),t._v(" "),a("path",{attrs:{id:"Path_36","data-name":"Path 36",d:"M0,0,8.847,8.847",transform:"matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)",fill:"none",stroke:"#e37198","stroke-linecap":"round","stroke-width":"2"}})])])])]),t._v(" "),a("div",{staticClass:"flex justify-center my-6 text-xl font-bold text-textblueform "},[t._v("Engineer Assigned Hming")]),t._v(" "),a("div",{staticClass:"relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg"},[a("label",{staticClass:"absolute px-4 py-2 font-bold text-blue-500 text-md"},[t._v("Assigned Engineer")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form1.engineer,expression:"form1.engineer"}],staticClass:"w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none",attrs:{errors:t.errors},on:{input:function(e){return t.updateLr()},change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form1,"engineer",e.target.multiple?a:a[0])}}},[a("option",{staticClass:"inline-block text-textgrayform ",attrs:{value:"",disabled:"",selected:""}},[t._v("Select Assigned Person ")]),t._v(" "),t._l(t.engineers,(function(e){return a("option",{key:e.id,staticClass:"inline-block ml-2 mr-2 text-textgrayform",domProps:{value:e.id}},[t._v("  "+t._s(e.name)+", "+t._s(e.post))])}))],2)]),t._v(" "),a("div",{staticClass:"flex items-center justify-center pt-2 "},[a("button",{staticClass:"px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400",on:{click:t.approve}},[t._v("Verify & Assign")]),t._v(" "),a("button",{staticClass:"px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300",on:{click:function(e){t.modalA=!t.modalA}}},[t._v("Cancel")])])])]):t._e(),t._v(" "),t.loading?a("div",[t._v("Loading...")]):a("div",{staticClass:"flex flex-col md:mt-6 md:ml6"},[t.modal?a("div",{staticClass:"absolute left-0 right-0 z-40 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:h-64 xl:h-84 sm:w-2/3 lg:w-2/4 xl:w-1/3"},[a("div",{staticClass:"absolute top-0 right-0 "},[a("button",{staticClass:"px-2 py-2 mt-3 mr-6 rounded hover:bg-gray-200",on:{click:function(e){t.modal=!t.modal}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"11.877",height:"11.877",viewBox:"0 0 11.877 11.877"}},[a("g",{attrs:{id:"Group_9","data-name":"Group 9",transform:"translate(-1238.562 -230.423)"}},[a("path",{attrs:{id:"Path_35","data-name":"Path 35",d:"M3285,232l8.847,8.847",transform:"translate(-2045 0.015)",fill:"none",stroke:"#e37198","stroke-linecap":"round","stroke-width":"2"}}),t._v(" "),a("path",{attrs:{id:"Path_36","data-name":"Path 36",d:"M0,0,8.847,8.847",transform:"matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)",fill:"none",stroke:"#e37198","stroke-linecap":"round","stroke-width":"2"}})])])])]),t._v(" "),a("p",{staticClass:"flex justify-center mt-8 mb-6 text-xl font-bold text-red-500"},[t._v("Are you sure you want to Fined this Report?")]),t._v(" "),a("div",{staticClass:"relative pb-2 mx-10 mt-6 mb-6 border rounded-lg"},[a("label",{staticClass:"absolute px-4 py-2 font-bold text-red-500 text-md"},[t._v("Please enter reason for Fined")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form1.fine,expression:"form1.fine"}],staticClass:"w-full px-4 pt-6 mt-2 text-gray-900 rounded-lg text-md focus:outline-none ",attrs:{type:"text",placeholder:"Reason for rejection"},domProps:{value:t.form1.fine},on:{input:function(e){e.target.composing||t.$set(t.form1,"fine",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"flex items-center justify-center pt-2 "},[a("button",{staticClass:"px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300",on:{click:function(e){t.modal=!t.modal}}},[t._v("Cancel")]),t._v(" "),a("button",{staticClass:"px-4 py-2 ml-1 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400",on:{click:t.destroy}},[t._v("Yes")])])]):t._e(),t._v(" "),a("a",{staticClass:"text-blue-400",attrs:{href:"#"},on:{click:function(e){return t.$router.back()}}},[t._v("\n                 Back\n                 ")]),t._v(" "),a("div",{staticClass:"flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg sm:w-5/5 lg:w-1/2"},[a("div",{staticClass:"flex flex-col ml-8"},[a("p",{staticClass:"text-sm font-light"},[t._v("Memo No")]),t._v(" "),a("p",{staticClass:"text-lg font-medium"},[t._v(t._s(t.report.form_memo))])]),t._v(" "),a("button",{staticClass:"px-4 py-1 mr-1 text-white rounded-lg hover:bg-gray-300",on:{click:function(e){return e.preventDefault(),t.printme.apply(null,arguments)}}},[a("svg",{attrs:{height:"30pt",viewBox:"-27 -67 859.31017 859",width:"30pt",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"}}),a("path",{attrs:{d:"m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"}}),a("path",{attrs:{d:"m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"}}),a("path",{attrs:{d:"m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"}}),a("path",{attrs:{d:"m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"}}),a("path",{attrs:{d:"m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"}}),a("path",{attrs:{d:"m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"}}),a("path",{attrs:{d:"m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"}})])])]),t._v(" "),a("div",{staticClass:"h-auto py-3 bg-white border-gray-200 rounded-t-lg rounded-b-lg sm:w-5/5 lg:w-1/2"},[a("div",{staticClass:"flex justify-start py-2 pl-2 ml-0 md:ml-8"},[a("div",{staticClass:"grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4 lg:ml-8"},[a("p",{staticClass:"py-1"},[t._v("Name")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.name))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("Email ID")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.email))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("Phone Number")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.phone))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("Residence Address")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.rhouseno)+", "+t._s(t.form.rlocalcouncil_name))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("Roadcutting Address")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.houseno)+", "+t._s(t.form.localcouncil_name))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("Purpose of Road Cutting")]),t._v(" "),0===t.form.water_id?[a("p",{staticClass:"py-1"},[t._v(": New Connection (Tui)")])]:1===t.form.water_id?[a("p",{staticClass:"py-1"},[t._v(": Old Connection (Tui)")])]:[a("p",{staticClass:"py-1"},[t._v(": Others")])],t._v(" "),a("p",{staticClass:"py-1"},[t._v("Road Cut ni tur")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.report.date))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("In Report ni")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.report.created_at))]),t._v(" "),a("a",{staticClass:"px-4 py-2 mt-1 text-sm font-bold text-center text-white bg-red-500 border rounded",attrs:{href:"#"},on:{click:function(e){t.modal=!t.modal}}},[t._v("Report for Fine")])],2)])])])])}),[],!1,null,"11b242ee",null);e.default=n.exports},3:function(t,e,a){"use strict";a.r(e);var s={name:"UserCircle",props:["name"],computed:{userCircle:function(){return this.name.match(/[A-Z]/g)<1?this.name.match(/[a-z]/g).slice(0,2).join(""):this.name.match(/[A-Z]/g).slice(0,2).join("")}}},r=a(0),o=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"rounded-full border border-gray-400 text-white bg-blue-400 w-10 h-10 flex justify-center items-center"},[this._v("\n    "+this._s(this.userCircle)+"\n")])}),[],!1,null,"d5d103d8",null);e.default=o.exports}}]);