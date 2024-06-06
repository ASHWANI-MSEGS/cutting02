(window.webpackJsonp=window.webpackJsonp||[]).push([[45,55],{234:function(t,e,s){"use strict";s.r(e);var a={name:"FormShowCO",components:{UserCircle:s(3).default},mounted:function(){var t=this;axios.get("/api/auth/form/list/"+this.$route.params.id).then((function(e){t.form=e.data.form,t.loading=!1})).catch((function(e){t.loading=!1,404===e.response.status&&t.$router.push("/forms")}))},data:function(){return{loading:!0,modal:!1,contact:null,modalA:!1}},methods:{destroy:function(){var t=this;axios.delete("/api/contacts/"+this.$route.params.id).then((function(e){t.$router.push("/contacts")})).catch((function(t){alert("Internal Error. Unable to delete contact.")}))},approve:function(){var t=this;axios.patch("/api/auth/form/list2/"+this.$route.params.id).then((function(e){t.$router.push("/formListUnCO")})).catch((function(t){alert("Internal Error. Unable to approve form.")}))},printme:function(){window.print()}}},n=s(0),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loading?s("div",[t._v("Loading...")]):s("div",[s("div",{staticClass:"flex justify-between"},[s("div",{staticClass:"relative"},[0===t.form.status?s("a",{staticClass:"px-4 py-2 border border-green-500 rounded text-sm font-bold text-green-500",attrs:{href:"#"},on:{click:function(e){t.modalA=!t.modalA}}},[t._v("Send to EE for Verification")]):t._e(),t._v(" "),t.modalA?s("div",{staticClass:"absolute bg-blue-600 text-white rounded-lg z-20 p-8 w-96 left mt-2 mr-6"},[s("p",[t._v("Are you sure you want to Send this form for Verification?")]),t._v(" "),s("div",{staticClass:"flex items-center mt-6 justify-end"},[s("button",{staticClass:"text-white pr-4",on:{click:function(e){t.modalA=!t.modalA}}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"px-4 py-2 bg-green-500 rounded  text-sm font-bold text-white",on:{click:t.approve}},[t._v("Send to EE for Verification")])])]):t._e(),t._v(" "),s("a",{staticClass:"px-4 py-2 border border-red-500 rounded text-sm font-bold text-red-500",attrs:{href:"#"},on:{click:function(e){t.modal=!t.modal}}},[t._v("Reject")]),t._v(" "),t.modal?s("div",{staticClass:"absolute bg-blue-900 text-white rounded-lg z-20 p-8 w-64 right-0 mt-2 mr-6"},[s("p",[t._v("Are you sure you want to Reject this form?")]),t._v(" "),s("div",{staticClass:"flex items-center mt-6 justify-end"},[s("button",{staticClass:"text-white pr-4",on:{click:function(e){t.modal=!t.modal}}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"px-4 py-2 bg-red-500 rounded text-sm font-bold text-white",on:{click:t.destroy}},[t._v("Reject")])])]):t._e()]),t._v(" "),s("a",{staticClass:"text-blue-400",attrs:{href:"#"},on:{click:function(e){return t.$router.back()}}},[t._v("\n                 Back\n                 ")]),t._v(" "),t.modalA?s("div",{staticClass:"bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10",on:{click:function(e){t.modalA=!t.modalA}}}):t._e(),t._v(" "),t.modal?s("div",{staticClass:"bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10",on:{click:function(e){t.modal=!t.modal}}}):t._e()]),t._v(" "),s("div",{staticClass:"flex pt-6"},[s("UserCircle",{attrs:{name:t.form.name}})],1),t._v(" "),s("br"),t._v(" "),s("p",[s("span",{staticClass:"pt-6 text-gray-600 font-bold uppercase text-sm"},[t._v("Memo:")]),t._v(" "),s("span",{staticClass:"pl-2 text-xl"},[t._v(t._s(t.form.memo))])]),t._v(" "),s("br"),t._v(" "),s("p",[s("span",{staticClass:"pt-6 text-gray-600 font-bold uppercase text-sm"},[t._v("Name")]),t._v(" "),s("span",{staticClass:"pl-2 text-xl"},[t._v(t._s(t.form.name))])]),t._v(" "),s("br"),t._v(" "),s("p",[s("span",{staticClass:"pt-6 text-gray-600 font-bold uppercase text-sm"},[t._v("Email")]),t._v(" "),s("span",{staticClass:"pt-2 text-blue-400"},[t._v(t._s(t.form.email))])]),t._v(" "),s("br"),t._v(" "),s("p",[s("span",{staticClass:"pt-6 text-gray-600 font-bold uppercase text-sm"},[t._v("Phone Number:")]),t._v(" "),s("span",{staticClass:"pt-2 text-blue-400"},[t._v(t._s(t.form.phone))])]),t._v(" "),s("br"),t._v(" "),s("p",[s("span",{staticClass:"pt-6 text-gray-600 font-bold uppercase text-sm"},[t._v("Address:")]),t._v(" "),s("span",{staticClass:"pt-2 text-blue-400"},[t._v(t._s(t.form.location))])]),t._v(" "),s("br"),t._v(" "),s("p",[s("span",{staticClass:"pt-6 text-gray-600 font-bold uppercase text-sm"},[t._v("Length of the road to be cut:")]),t._v(" "),s("span",{staticClass:"pt-2 text-xl"},[t._v(t._s(t.form.length))])]),t._v(" "),s("br"),t._v(" "),s("p",[s("span",{staticClass:"pt-6 text-gray-600 font-bold uppercase text-sm"},[t._v("Tui Connection: ")]),t._v(" "),0===t.form.water_type?[s("span",{staticClass:"pt-2 text-blue-400"},[t._v("New Connection")])]:[s("span",{staticClass:"pt-2 text-blue-400"},[t._v("Old Connection")])]],2),t._v(" "),s("br"),t._v(" "),s("p",[s("span",{staticClass:"pt-6 text-gray-600 font-bold uppercase text-sm"},[t._v("Road Type: ")]),t._v(" "),0===t.form.water_type?[s("span",{staticClass:"pt-2 text-blue-400"},[t._v(" Flexible Pavement (Alkatra luan):")])]:[s("span",{staticClass:"pt-2 text-blue-400"},[t._v("Rigid Pavement (Concrete-a siam)")])]],2),t._v(" "),s("br"),t._v(" "),0===t.form.status?[t._m(0)]:[t._m(1)],t._v(" "),s("br"),t._v(" "),s("button",{staticClass:"text-white  rounded-lg px-4 py-1",on:{click:function(e){return e.preventDefault(),t.printme.apply(null,arguments)}}},[s("svg",{attrs:{height:"30pt",viewBox:"-27 -67 859.31017 859",width:"30pt",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"}}),s("path",{attrs:{d:"m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"}}),s("path",{attrs:{d:"m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"}}),s("path",{attrs:{d:"m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"}}),s("path",{attrs:{d:"m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"}}),s("path",{attrs:{d:"m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"}}),s("path",{attrs:{d:"m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"}}),s("path",{attrs:{d:"m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"}})])])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"pt-6 text-gray-600 font-bold uppercase text-sm pr-2"},[this._v("Status: "),e("span",{staticClass:"bg-red-400 rounded text-white px-1 py-1 "},[this._v("UNAPPROVED")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"pt-6 text-gray-600 font-bold uppercase text-sm pr-2"},[this._v("Status: "),e("span",{staticClass:"bg-green-400 rounded text-white px-1 py-1"},[this._v("APPROVED")])])}],!1,null,"c6809488",null);e.default=o.exports},3:function(t,e,s){"use strict";s.r(e);var a={name:"UserCircle",props:["name"],computed:{userCircle:function(){return this.name.match(/[A-Z]/g)<1?this.name.match(/[a-z]/g).slice(0,2).join(""):this.name.match(/[A-Z]/g).slice(0,2).join("")}}},n=s(0),o=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"rounded-full border border-gray-400 text-white bg-blue-400 w-10 h-10 flex justify-center items-center"},[this._v("\n    "+this._s(this.userCircle)+"\n")])}),[],!1,null,"d5d103d8",null);e.default=o.exports}}]);