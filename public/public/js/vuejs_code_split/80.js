(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{279:function(i,a,o){"use strict";o.r(a);var t={name:"LocalCouncilList",data:function(){return{loading:!1,localcouncils:""}},mounted:function(){var i=this,a="";switch(this.$store.getters.currentUser.division_id){case 1:case 2:a="/api/auth/localcouncil";break;case 4:a="/api/auth/champhai_local_councils";break;case 5:a="/api/auth/lunglei_local_councils";break;case 6:a="/api/auth/saitual_local_councils";break;case 7:a="/api/auth/mamit_local_councils";break;case 8:a="/api/auth/siaha_local_councils";break;case 9:a="/api/auth/khawzawl_local_councils";break;case 10:a="/api/auth/kolasib_local_councils";break;case 11:a="/api/auth/lawngtlai_local_councils";break;case 12:a="/api/auth/serchhip_local_councils";break;case 13:a="/api/auth/lunglei_road_div2_hnahthial";break;case 14:a="/api/auth/hmuifang_division";break;case 15:a="/api/auth/national_highway_div1";break;case 16:a="/api/auth/national_highway_div3"}axios.get(a).then((function(a){i.localcouncils=a.data.localcouncils})).catch((function(a){i.loading=!0}))}},e=o(0),l=Object(e.a)(t,(function(){var i=this,a=i.$createElement,o=i._self._c||a;return o("div",[i.loading?o("div"):o("div",[0===i.localcouncils.length?o("div",[o("p",[i._v("No list of Local Council Yet"),o("router-link",{attrs:{to:"/form"}},[i._v("   Add New Local Council")])],1)]):i._e(),i._v(" "),i._m(0),i._v(" "),i._l(i.localcouncils,(function(a){return o("div",{key:a.id,staticClass:"w-full px-2 py-2 mx-3 bg-white border-b hover:bg-tablehover"},[o("router-link",{staticClass:"flex flex-row justify-between",attrs:{to:"/localcouncilShow/"+a.id}},[o("div",[i._v(i._s(a.name))]),i._v(" "),o("div",[1===a.division_id?[i._v(" Road South Division")]:i._e(),i._v(" "),2===a.division_id?[i._v(" Road North Division")]:i._e(),i._v(" "),4==a.division_id?[i._v(" Champhai Road")]:i._e(),i._v(" "),5===a.division_id?[i._v(" Lunglei Road")]:i._e(),i._v(" "),6===a.division_id?[i._v(" Saitual Road")]:i._e(),i._v(" "),7===a.division_id?[i._v(" Mamit Road")]:i._e(),i._v(" "),8===a.division_id?[i._v(" Siaha Road")]:i._e(),i._v(" "),9===a.division_id?[i._v(" Khawzawl Road")]:i._e(),i._v(" "),10===a.division_id?[i._v(" Kolasib Road")]:i._e(),i._v(" "),11===a.division_id?[i._v(" Lawngtlai Road")]:i._e(),i._v(" "),12===a.division_id?[i._v(" Serchhip Road")]:i._e(),i._v(" "),13===a.division_id?[i._v("Lunglei Road Div-II, Hnahthial Road")]:i._e(),i._v(" "),14===a.division_id?[i._v("Hmuifang Division Road")]:i._e(),i._v(" "),15===a.division_id?[i._v("National Highway Div-I Road")]:i._e(),i._v(" "),16===a.division_id?[i._v("National Highway Div-III Road")]:i._e()],2),i._v(" "),o("div",[i._v(i._s(a.sub_div))])])],1)}))],2)])}),[function(){var i=this.$createElement,a=this._self._c||i;return a("div",{staticClass:"w-full px-2 py-2 mx-3 mt-3 text-white rounded-t-lg bg-tableheader "},[a("div",{staticClass:"flex flex-row justify-between"},[a("div",{staticClass:"pt-2 pr-2 text-xs font-bold uppercase "},[this._v("Local Council")]),this._v(" "),a("div",{staticClass:"pt-2 pr-2 text-xs font-bold uppercase "},[this._v("Division")]),this._v(" "),a("div",{staticClass:"pt-2 pr-2 text-xs font-bold uppercase "},[this._v("Sub-Division")])])])}],!1,null,"c8307eac",null);a.default=l.exports}}]);