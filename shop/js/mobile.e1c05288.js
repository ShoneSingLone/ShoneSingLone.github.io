(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mobile"],{"10ea":function(e,n,t){"use strict";var o=t("221d"),a=t.n(o);a.a},"221d":function(e,n,t){},"2a23":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"root-mobile"}},[t("main",{ref:"main"},[t("transition",{attrs:{name:"scale"}},[t("keep-alive",[t("router-view")],1)],1)],1),t("footer",{ref:"footer"},[t("nav",{directives:[{name:"show",rawName:"v-show",value:e.isShowNavBar,expression:"isShowNavBar"}],staticClass:"nav-bar"},[t("c-tab-bar",{on:{click:e.clickHandler,change:e.goTo},model:{value:e.currentView,callback:function(n){e.currentView=n},expression:"currentView"}},e._l(e.tabs,function(e,n){return t("c-tab",{key:e.label,staticClass:"nav-item",attrs:{icon:e.icon,label:e.label,index:n}},[t("i",{class:["iconfont","icon-"+e.icon],attrs:{slot:"icon"},slot:"icon"})])}))],1)])])},a=[],i=t("c93e"),r=(t("cadf"),t("551c"),t("097d"),t("2f62")),c=[{label:"主页",icon:"home",route:{name:"m.h"}},{label:"分类",icon:"iconfontchazhaofenlei",route:{name:"m.category"}},{label:"购物车",icon:"cart",route:{name:"m.trolley"}},{label:"个人中心",icon:"me",route:{name:"m.user"}}],l={name:"mobileRoot",mounted:function(){this.setFooterHeight(this.$refs.footer.getBoundingClientRect().height),this.setCurrentView(c[0].label)},props:{},data:function(){return{isShowNavBar:!0,isShowHomeHeader:!0,transitionName:"",currentView:c[0].label,tabs:c}},computed:{},methods:Object(i["a"])({},Object(r["d"])("app.mobile",["setFooterHeight","setCurrentView"]),{clickHandler:function(e,n){console.log("clickHandler",e,n),console.log("main Rect",this.$refs.main.getBoundingClientRect())},goTo:function(e,n){console.log("value has changed, now is",e,n),this.$router.push(this.tabs[n].route)}}),components:{"c-button":function(){return Promise.all([t.e("c-dtab-bar"),t.e("c-container")]).then(t.bind(null,"ee2e"))},"c-tab":function(){return Promise.all([t.e("c-dtab-bar"),t.e("c-container")]).then(t.bind(null,"32f3"))},"c-tab-bar":function(){return Promise.all([t.e("c-dtab-bar"),t.e("c-container")]).then(t.bind(null,"a9ff"))},"c-loading":function(){return Promise.all([t.e("c-dtab-bar"),t.e("c-container")]).then(t.bind(null,"b6b8"))}}},s=l,u=(t("10ea"),t("2877")),b=Object(u["a"])(s,o,a,!1,null,null,null);b.options.__file="Mobile.vue";n["default"]=b.exports}}]);
//# sourceMappingURL=mobile.e1c05288.js.map