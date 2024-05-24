(window.webpackJsonp=window.webpackJsonp||[]).push([[53,55],{281:function(t,a,s){"use strict";s.r(a);var e={name:"PaymentUnsuccessShow",components:{UserCircle:s(3).default},mounted:function(){var t=this;axios.get("/api/auth/findPayment/"+this.$route.params.id).then((function(a){t.payment=a.data.payment,t.form=a.data.form,t.estimate=a.data.estimate,t.loading=!1})).catch((function(a){t.loading=!1}))},data:function(){return{form:{},payment:"",estimate:{},loading:!0,modal:!1,contact:null,modalA:!1,currentUser:this.$store.getters.currentUser}},methods:{destroy:function(){var t=this;axios.delete("/api/contacts/"+this.$route.params.id).then((function(a){t.$router.push("/contacts")})).catch((function(t){alert("Internal Error. Unable to delete contact.")}))},approve:function(){var t=this;axios.patch("/api/auth/estimateStatus/"+this.$route.params.id).then((function(a){t.$router.push("/UnapprovedEstimatedLIst/")})).catch((function(t){alert("Internal Error. Unable to approve form.")}))},printme:function(){window.print()}}},i=s(0),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"relative"},[t.modalA?s("div",{staticClass:"absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25",on:{click:function(a){t.modalA=!t.modalA}}}):t._e(),t._v(" "),t.modal?s("div",{staticClass:"absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25",on:{click:function(a){t.modal=!t.modal}}}):t._e(),t._v(" "),t.modalA?s("div",{staticClass:"absolute left-0 right-0 z-40 ml-auto mr-auto bg-white rounded-lg shadow top-2 sm:h-48 md:h-64 sm:w-2/3 lg:w-2/4 xl:w-1/4"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.approve.apply(null,arguments)}}},[s("div",{staticClass:"absolute top-0 right-0 "},[s("button",{staticClass:"px-2 py-2 mt-4 mr-6 rounded hover:bg-gray-200",on:{click:function(a){t.modalA=!t.modalA}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"11.877",height:"11.877",viewBox:"0 0 11.877 11.877"}},[s("g",{attrs:{id:"Group_9","data-name":"Group 9",transform:"translate(-1238.562 -230.423)"}},[s("path",{attrs:{id:"Path_35","data-name":"Path 35",d:"M3285,232l8.847,8.847",transform:"translate(-2045 0.015)",fill:"none",stroke:"#e37198","stroke-linecap":"round","stroke-width":"2"}}),t._v(" "),s("path",{attrs:{id:"Path_36","data-name":"Path 36",d:"M0,0,8.847,8.847",transform:"matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)",fill:"none",stroke:"#e37198","stroke-linecap":"round","stroke-width":"2"}})])])])]),t._v(" "),s("div",{staticClass:"flex justify-center my-6 text-xl font-bold text-textblueform "},[t._v("Approve Estimate")]),t._v(" "),s("label",{staticClass:"flex justify-center px-4 py-2 font-bold text-blue-500 text-md"},[t._v("Do you want to approve this Estimate")]),t._v(" "),s("div",{staticClass:"flex items-center justify-center pt-2 "},[s("button",{staticClass:"px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400",on:{click:t.approve}},[t._v("Yes")]),t._v(" "),s("button",{staticClass:"px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300",on:{click:function(a){t.modalA=!t.modalA}}},[t._v("Cancel")])])])]):t._e(),t._v(" "),s("div",{staticClass:"flex flex-col md:mt-6 md:ml-6 sm:w-full md:w-4/5 lg:w-1/2"},[t.loading?s("div",[t._v("\n            Loading...\n        ")]):s("div",[s("a",{staticClass:"text-blue-400",attrs:{href:"#"},on:{click:function(a){return t.$router.back()}}},[t._v("\n                 Back\n                 ")]),t._v(" "),s("div",{staticClass:"flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg"},[s("div",{staticClass:"flex flex-col ml-8"},[s("p",{staticClass:"text-sm font-light"},[t._v("Memo No")]),t._v(" "),s("p",{staticClass:"text-lg font-medium"},[t._v(t._s(t.form.memo))])]),t._v(" "),s("button",{staticClass:"px-4 py-1 mr-1 text-white rounded-lg hover:bg-gray-300",on:{click:function(a){return a.preventDefault(),t.printme.apply(null,arguments)}}},[s("svg",{attrs:{height:"30pt",viewBox:"-27 -67 859.31017 859",width:"30pt",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"}}),s("path",{attrs:{d:"m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"}}),s("path",{attrs:{d:"m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"}}),s("path",{attrs:{d:"m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"}}),s("path",{attrs:{d:"m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"}}),s("path",{attrs:{d:"m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"}}),s("path",{attrs:{d:"m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"}}),s("path",{attrs:{d:"m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"}})])])]),t._v(" "),s("div",{staticClass:"h-auto py-2 bg-white border-gray-200 rounded-t-lg rounded-b-lg"},[s("div",{staticClass:"flex justify-start py-2 pl-2 ml-0 md:ml-8"},[s("div",{staticClass:"grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4 lg:ml-8"},[s("p",{staticClass:"py-1"},[t._v("Memo No")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.memo))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Payment Tracking ID")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.payment.tracking_id))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Order ID")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.payment.order_id))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Bank Ref No")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.payment.bank_ref_no))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Payment Mode")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.payment.payment_mode))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Card Name")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.payment.card_name))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Trans Date")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.payment.trans_date))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Name")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.name))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Email ID")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.email))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Phone Number")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.phone))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Residence Address")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.rhouseno)+", "+t._s(t.form.rlocalcouncil_name))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Roadcutting Address")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.houseno)+", "+t._s(t.form.localcouncil_name))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Length of Road ")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.estimate.length)+" metre")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Breadth of Road")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.estimate.breadth)+" metre")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Amount")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": Rs. "+t._s(t.estimate.total))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Road Type")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.estimate.road_type))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Submitted On")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.created_at))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Estimated On")]),t._v(" "),s("p",{staticClass:"py-1"},[t._v(": "+t._s(t.estimate.created_at))]),t._v(" "),s("p",{staticClass:"py-1"},[t._v("Status")]),t._v(" "),s("p",{staticClass:"py-1 text-red-500"},[t._v(": "+t._s(t.payment.order_status))])])])])])])])}),[],!1,null,"46f13ccb",null);a.default=r.exports},3:function(t,a,s){"use strict";s.r(a);var e={name:"UserCircle",props:["name"],computed:{userCircle:function(){return this.name.match(/[A-Z]/g)<1?this.name.match(/[a-z]/g).slice(0,2).join(""):this.name.match(/[A-Z]/g).slice(0,2).join("")}}},i=s(0),r=Object(i.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"rounded-full border border-gray-400 text-white bg-blue-400 w-10 h-10 flex justify-center items-center"},[this._v("\n    "+this._s(this.userCircle)+"\n")])}),[],!1,null,"d5d103d8",null);a.default=r.exports}}]);