(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"3c68":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"mt-10",attrs:{sm12:"",xs12:"",md12:"",lg12:""}},[s("v-card-title",{staticClass:"align-start"},[s("v-sheet",{staticClass:"overflow-hidden mt-n9 transition-swing v-card--material__sheet",staticStyle:{"z-index":"2"},attrs:{color:"brown",width:"100%",elevation:"6","max-width":"100%",rounded:""}},[s("v-theme-provider",{attrs:{dark:""}},[t._t("heading"),s("div",{staticClass:"py-3"},[s("v-row",{staticClass:"px-5 d-flex"},[s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",md:"12",lg:"12",xs:"12"}},[s("span",{staticClass:"text-h7 white--text  v-card--material__title"},[t._v("HOME")])])],1)],1)],2)],1)],1),s("v-card",{staticClass:"card-home"},[s("v-container",{staticClass:"py-0"},[s("v-row",[s("v-col",{staticClass:"mt-7",attrs:{cols:"12",sm:"6",md:"6",lg:"4",xs:"4"}},[s("v-card",{staticClass:"ma-3"},[s("v-list-item",[s("v-sheet",{staticClass:"ajuste-sheet",attrs:{color:"blue",width:"80",height:"80",elevation:"10",rounded:""}},[s("v-icon",{staticClass:"icon-alien",attrs:{dark:"",large:""}},[t._v("mdi-factory")])],1),s("v-list-item-content",[s("div",{staticClass:"overline text-right"},[t._v("Obras")]),s("v-list-item-title",{staticClass:"headline mb-1 text-right"},[t._v(t._s(t.qtdObras))])],1)],1)],1)],1),s("v-col",{staticClass:"mt-7",attrs:{cols:"12",sm:"6",md:"6",lg:"4",xs:"4"}},[s("v-card",{staticClass:"ma-3"},[s("v-list-item",[s("v-sheet",{staticClass:"ajuste-sheet",attrs:{color:"red",width:"80",height:"80",elevation:"10",rounded:""}},[s("v-icon",{staticClass:"icon-alien",attrs:{dark:"",large:""}},[t._v("mdi-file-multiple")])],1),s("v-list-item-content",[s("div",{staticClass:"overline text-right"},[t._v("Projetos Ativos")]),s("v-list-item-title",{staticClass:"headline mb-1 text-right"},[t._v(t._s(t.qtdProjetosAtivos))])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},i=[],r=s("1da1"),o=(s("96cf"),s("bc3a")),n=s.n(o),l={name:"Home",data:function(){return{urlProd:"https://neexsa.com.br/api_rh/",qtdObras:0,qtdProjetosAtivos:0}},created:function(){console.log(window.location),this.getObras()},methods:{getObras:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n()({method:"GET",url:"".concat(t.urlProd,"dominio/obras-ativos")});case 2:s=a.sent,t.qtdObras=s.data.length;case 4:case"end":return a.stop()}}),a)})))()}}},c=l,d=(s("f4f2"),s("2877")),v=s("6544"),m=s.n(v),h=s("b0af"),u=s("99d9"),C=s("62ad"),f=s("a523"),w=s("0e8f"),g=s("132d"),x=s("a722"),b=s("da13"),p=s("5d23"),_=s("0fd9"),V=s("8dd9"),O=s("480e"),j=Object(d["a"])(c,e,i,!1,null,"5f2f3c1d",null);a["default"]=j.exports;m()(j,{VCard:h["a"],VCardTitle:u["c"],VCol:C["a"],VContainer:f["a"],VFlex:w["a"],VIcon:g["a"],VLayout:x["a"],VListItem:b["a"],VListItemContent:p["a"],VListItemTitle:p["b"],VRow:_["a"],VSheet:V["a"],VThemeProvider:O["a"]})},"5d24":function(t,a,s){},f4f2:function(t,a,s){"use strict";s("5d24")}}]);
//# sourceMappingURL=home.4e9e00c9.js.map