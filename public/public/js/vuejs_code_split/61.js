(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{249:function(t,s,a){"use strict";a.r(s);var e={name:"reportCompleteSuccess",data:function(){return{form:"",report:"",loading:!0}},mounted:function(){var t=this;axios.get("/api/auth/reportCompleteSuccess/"+this.$route.params.id).then((function(s){t.form=s.data.form,t.report=s.data.report,t.loading=!1})).catch((function(s){t.loading=!1,404===s.response.status&&t.$router.push("/forms")}))},methods:{printme:function(){window.print()}}},c=a(0),i=Object(c.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"flex flex-col "},[a("div",{staticClass:"relative flex justify-center w-auto h-auto pb-4 bg-gray-200"},[a("div",{staticClass:"flex flex-col w-4/5 mx-10 mt-10  md:w-2/4 lg:w-1/3"},[a("div",{staticClass:"flex items-center justify-center h-32 rounded-t-lg bg-successcyan"},[a("div",{},[a("svg",{staticClass:"text-white fill-current",staticStyle:{"enable-background":"new 0 0 300 300"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 300 300",width:"80",height:"80","xml:space":"preserve"}},[a("path",{staticClass:"st0",attrs:{d:"M221.4,84.3c-6-4.3-14.4-3-18.7,3.1l-65.9,92.2c-1.8,2-4.1,2.6-5.3,2.7c-1.2,0.1-3.7-0.1-5.7-2l-42.7-41\n\t                                        c-5.3-5.1-13.8-4.9-18.9,0.4c-5.1,5.3-4.9,13.8,0.4,18.9l42.8,41c6.4,6.1,14.9,9.5,23.8,9.5c0.7,0,1.5,0,2.2-0.1\n\t                                        c9.6-0.6,18.5-5.3,24.5-12.8c0.2-0.2,0.3-0.4,0.4-0.6l66.2-92.5C228.7,97,227.4,88.6,221.4,84.3L221.4,84.3z"}}),t._v(" "),a("path",{staticClass:"st0",attrs:{d:"M143.8,3.7C65.8,3.7,2.6,66.9,2.6,144.9s63.2,141.2,141.2,141.2S285,222.9,285,144.9S221.8,3.7,143.8,3.7z\n\t                                        M143.8,262.4c-64.6,0-117.1-52.4-117.1-117.1c0-64.6,52.4-117.1,117.1-117.1s117.1,52.4,117.1,117.1\n\t                                        C260.8,210,208.4,262.4,143.8,262.4z"}})])])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg"},[a("div",{staticClass:"flex flex-col ml-8"},[a("p",{staticClass:"text-sm font-light"},[t._v("Memo No")]),t._v(" "),a("p",{staticClass:"text-lg font-medium"},[t._v(t._s(t.form.memo))])]),t._v(" "),a("button",{staticClass:"mr-8 hover:text-gray-400",on:{click:function(s){return s.preventDefault(),t.printme.apply(null,arguments)}}},[a("svg",{staticClass:"text-gray-700 fill-current",staticStyle:{"enable-background":"new 0 0 300 300"},attrs:{version:"1.1",id:"Layer_1",width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 300 300","xml:space":"preserve"}},[a("path",{staticClass:"st0",attrs:{d:"M257.5,61.4h-21.2V15.1c0-4.5-3.6-8.1-8.1-8.1H73.8c-4.5,0-8.1,3.6-8.1,8.1v46.2H44.4\n\t                                        c-22,0.1-39.8,17.9-39.8,40v80.3c0,22,17.9,39.8,39.8,39.8h21.3v70.3c0,4.5,3.6,8.1,8.1,8.1h154.3c4.5,0,8.1-3.6,8.1-8.1v-70.3h21.2\n\t                                        c22,0,39.9-17.9,39.9-39.8v-80.3C297.4,79.3,279.6,61.4,257.5,61.4z M81.9,23.3H220v38.1H81.9V23.3z M220,283.6H81.9v-90.1H220\n\t                                        V283.6z M281.2,181.6c0,13-10.6,23.6-23.6,23.6h-21.2v-11.6h10c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1H55.7c-4.5,0-8.1,3.6-8.1,8.1\n\t                                        c0,4.5,3.6,8.1,8.1,8.1h10v11.6H44.4c-13,0-23.6-10.6-23.6-23.6v-80.3c0-13,10.6-23.6,23.6-23.6h213.1c13,0,23.6,10.6,23.6,23.6\n\t                                        L281.2,181.6L281.2,181.6z"}}),t._v(" "),a("path",{staticClass:"st0",attrs:{d:"M106.4,265.8h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1\n\t                                        C98.2,262.1,101.9,265.8,106.4,265.8z"}}),t._v(" "),a("path",{staticClass:"st0",attrs:{d:"M106.4,230.5h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1\n\t                                        C98.2,226.9,101.9,230.5,106.4,230.5z"}}),t._v(" "),a("circle",{staticClass:"st0",attrs:{cx:"254.4",cy:"104.3",r:"8.1"}}),t._v(" "),a("circle",{staticClass:"st0",attrs:{cx:"254.4",cy:"132.4",r:"8.1"}})])])]),t._v(" "),a("div",{staticClass:"h-auto bg-white border-gray-200 rounded-t-lg rounded-b-lg"},[a("div",{staticClass:"flex justify-start py-2 pl-2 my-8 ml-8"},[t._m(1),t._v(" "),a("div",{staticClass:"flex flex-col ml-4"},[a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.name))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.email))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.form.phone))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.report.ac_name))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.report.ac_number))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.report.ifsc))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.report.date))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.report.cdate))]),t._v(" "),a("p",{staticClass:"py-1"},[t._v(": "+t._s(t.report.created_at))])])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex flex-col items-center justify-center h-24 bg-white rounded-b-lg"},[s("p",{staticClass:"text-2xl font-normal"},[this._v("Road Cutting Completion Report!")]),this._v(" "),s("p",{staticClass:"font-sans text-sm font-thin"},[this._v("Road Cutting i zawh report kan lo dawng e")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"flex flex-col "},[a("p",{staticClass:"py-1"},[t._v("Name")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("Email ID")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("Phone Number")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("A/c Name")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("A/c Number")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("IFSC Code")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("Road cutting date:")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("Completion Date:")]),t._v(" "),a("p",{staticClass:"py-1"},[t._v("Reported On: ")])])}],!1,null,"1ddeaa3e",null);s.default=i.exports}}]);