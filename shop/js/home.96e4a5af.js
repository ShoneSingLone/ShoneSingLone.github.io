(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0af8":function(e,t,n){},"11e9":function(e,t,n){var i=n("52a7"),o=n("4630"),s=n("6821"),r=n("6a99"),c=n("69a8"),a=n("c69a"),u=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?u:function(e,t){if(e=s(e),t=r(t,!0),a)try{return u(e,t)}catch(e){}if(c(e,t))return o(!i.f.call(e,t),e[t])}},"27c9":function(e,t,n){},3768:function(e,t,n){},"3b95":function(e,t,n){},"52a7":function(e,t){t.f={}.propertyIsEnumerable},5830:function(e,t,n){"use strict";var i=n("9140"),o=n.n(i);o.a},"5dbc":function(e,t,n){var i=n("d3f4"),o=n("8b97").set;e.exports=function(e,t,n){var s,r=t.constructor;return r!==n&&"function"==typeof r&&(s=r.prototype)!==n.prototype&&i(s)&&o&&o(e,s),e}},7919:function(e,t,n){"use strict";var i=n("3768"),o=n.n(i);o.a},"7cb0":function(e,t,n){"use strict";var i=n("0af8"),o=n.n(i);o.a},"8b97":function(e,t,n){var i=n("d3f4"),o=n("cb7c"),s=function(e,t){if(o(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return s(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:s}},"8c29":function(e,t,n){"use strict";var i=n("3b95"),o=n.n(i);o.a},9093:function(e,t,n){var i=n("ce10"),o=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}},9140:function(e,t,n){},a4f9:function(e,t,n){"use strict";var i=n("f485"),o=n.n(i);o.a},aa77:function(e,t,n){var i=n("5ca1"),o=n("be13"),s=n("79e5"),r=n("fdef"),c="["+r+"]",a="​",u=RegExp("^"+c+c+"*"),h=RegExp(c+c+"*$"),l=function(e,t,n){var o={},c=s(function(){return!!r[e]()||a[e]()!=a}),u=o[e]=c?t(d):r[e];n&&(o[n]=u),i(i.P+i.F*c,"String",o)},d=l.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(h,"")),e};e.exports=l},aeae:function(e,t,n){},b0d7:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{class:["header-wrapper",{hide:e.isHeaderHide},{none:e.isHeaderNone}]},[n("header",{staticClass:"header",attrs:{id:"header"}},[n("a",{staticClass:"logo",attrs:{href:"javascript:void(0);"},on:{click:e.goHome}}),n("nav",[n("ul",{staticClass:"nav"},[e._l(e.navItems,function(t,i){return n("li",{key:i,class:["item","item_i_"+(i+1),{active:e.currentNavItem===i}],on:{click:function(t){e.toScreen(i)}}},[n("a",{attrs:{href:"javascript:void(0);"}},[e._v(e._s(t))])])}),e._m(0)],2)])])]),n("screen1",{attrs:{id:"screen1",inViewport:e.isInViewport.screen1,height:e.appHeight},on:{mounted:e.mountedCompletedProgress}}),n("screen2",{attrs:{id:"screen2",inViewport:e.isInViewport.screen2,height:e.appHeight},on:{mounted:e.mountedCompletedProgress}}),n("screen3",{attrs:{id:"screen3",inViewport:e.isInViewport.screen3,height:e.appHeight},on:{mounted:e.mountedCompletedProgress}}),n("screen4",{attrs:{id:"screen4",inViewport:e.isInViewport.screen4,height:e.appHeight},on:{mounted:e.mountedCompletedProgress}}),n("screen5",{attrs:{id:"screen5",inViewport:e.isInViewport.screen5,height:e.appHeight},on:{mounted:e.mountedCompletedProgress}}),n("div",{class:["back",{hide:e.isOutlineHide},{none:e.isOutlineNone}]},[n("a",{staticClass:"glyphicon glyphicon-save",attrs:{href:"javascript:void(0)"},on:{click:function(t){e.scrollTo(0)}}})]),n("site-footer"),n("div",{class:["outline",{hide:e.isOutlineHide},{none:e.isOutlineNone}]},e._l(e.navItems,function(t,i){return n("a",{key:i,class:["item","item_i_"+(i+1),e.currentNavItem===i?"active":""],attrs:{href:"javascript:void(0); "},on:{click:function(t){e.toScreen(i)}}},[e._v(e._s(t))])}))],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"item item_custom_button"},[n("a",{attrs:{href:"javascript:void(0);"}},[e._v("立即购买")])])}],s=(n("7f7f"),n("c93e")),r=(n("cadf"),n("551c"),n("097d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header-wrapper"},[n("a",{staticClass:"logo",attrs:{href:"javascript:void(0);"},on:{click:e.toggle}}),n("nav",{staticClass:"nav"},[e._l(e.navItems,function(t,i){return n("a",{key:i,class:["item","item_i_"+(i+1),e.currentNavItem===i?"active":""],attrs:{href:"javascript:void(0);"}},[e._v(e._s(t))])}),n("a",{staticClass:"item item_custom_button",attrs:{href:"javascript:void(0);"}},[e._v("立即购买 "+e._s(e.scrollY))]),n("div",{staticClass:"item-tip",class:[e.show?"left20":""]})],2)])}),c=[],a=n("2f62"),u={name:"section1",mounted:function(){console.log(this)},methods:{toggle:function(){this.show=!this.show,this.$router.push({name:"home"})}},computed:Object(s["a"])({},Object(a["e"])("pc.product",["scrollY"])),components:{},props:["navItems","currentNavItem"],data:function(){return{show:!0}}},h=u,l=(n("8c29"),n("2877")),d=Object(l["a"])(h,r,c,!1,null,"3a20777c",null);d.options.__file="Heading.vue";var p=d.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"screen-1",style:{height:e.height+"px"}},[n("div",{staticClass:"heading-wrapper"},[n("div",{class:["heading",e.headingDone?"":"init"]},[e._m(0),n("p",{staticClass:"webfont"},[e._v("后置1200万 AI双摄 / 12nm八核处理器 / 5.45”高清全面屏 / AI 人脸解锁")])])]),n("div",{staticClass:"phone-wrapper"},[n("div",{class:["phone",e.phoneDone?"":"init"]}),n("div",{class:["shadow",e.shadowDone?"":"init"]})])])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("b",[e._v("AI双摄")]),e._v("小屏高性能")])}],m=(n("c5f6"),{name:"section1",mounted:function(){this.toggleAnimate(),this.isAnimateDone=!0,this.$emit("mounted",{name:"screen1",el:this.$el})},methods:{toggleAnimate:function(){this.toggleHeading(),this.togglePhone(),this.toggleShadow()},toggleHeading:function(){this.headingDone=!this.headingDone},togglePhone:function(){this.phoneDone=!this.phoneDone},toggleShadow:function(){this.shadowDone=!this.shadowDone}},computed:Object(s["a"])({},Object(a["e"])("pc.product",["scrollY"])),watch:{scrollY:function(e,t){console.log(e,t),console.log("this.$el.getBoundingClientRect() screen1",this.$el.getBoundingClientRect())}},components:{},props:{height:{type:Number,default:800},inViewport:{type:Boolean,required:!0}},data:function(){return{isAnimateDone:!1,phoneDone:!1,shadowDone:!1,headingDone:!1}}}),v=m,b=(n("b6f2"),Object(l["a"])(v,g,f,!1,null,"0201c396",null));b.options.__file="Screen1.vue";var _=b.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"screen-2",style:{height:e.height+"px"}},[n("div",{staticClass:"heading-wrapper"},[n("div",{class:["heading",e.headingDone?"":"init"]},[e._v("精彩，尽在掌握")]),n("div",{class:["subheading",e.subHeadingDone?"":"init"]},[n("p",[e._v("采用受欢迎的设计，让它更加出色。")]),n("p",[e._v("款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。")])]),n("div",{class:["phone",{init:!e.phoneDone}]},[n("div",{class:["point","point_i_1",e.point1Done?"":"init"]},[e._v("高清摄像")]),n("div",{class:["point","point_i_2",e.point2Done?"":"init"]},[e._v("超薄机身")]),n("div",{class:["point","point_i_3",e.point3Done?"":"init"]},[e._v("大屏显示")])])])])},w=[],y={name:"section2",mounted:function(){this.$emit("mounted",{name:"screen2",el:this.$el})},methods:{toggleAnimate:function(){this.headingDone=!this.headingDone,this.subHeadingDone=!this.subHeadingDone,this.phoneDone=!this.phoneDone,this.point1Done=!this.point1Done,this.point2Done=!this.point2Done,this.point3Done=!this.point3Done}},computed:Object(s["a"])({},Object(a["e"])("pc.product",["scrollY"])),watch:{inViewport:function(e,t){console.log(e,t),!this.isAnimateDone&&e&&(this.toggleAnimate(),this.isAnimateDone=!0)}},components:{},props:{height:{type:Number,default:800},inViewport:{type:Boolean,required:!0}},data:function(){return{isAnimateDone:!1,headingDone:!1,subHeadingDone:!1,phoneDone:!1,shadowDone:!1,point1Done:!1,point2Done:!1,point3Done:!1}}},C=y,I=(n("5830"),Object(l["a"])(C,D,w,!1,null,"18a72993",null));I.options.__file="Screen2.vue";var H=I.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"screen-3",style:{height:e.height+"px"}},[n("div",{class:["phone",e.phoneDone?"done":"init"]}),n("div",{staticClass:"wrapper"},[n("div",{class:["heading",e.headingDone?"":"init"]},[e._v("外形小巧，功能强大的手机")]),n("div",{class:["subheading",e.subHeadingDone?"":"init"]},[n("p",[e._v("采用受欢迎的设计，让它更加出色。")]),n("p",[e._v("款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。")])]),n("div",{class:["features-wrapper",e.featuresWrapperDone?"":"init","bounce"]},[e._m(0),e._m(1),e._m(2),e._m(3)])])])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("span",{staticClass:"number item_i_1"},[e._v("\n          5.7\n        ")]),e._v("英寸大屏\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("span",{staticClass:"number item_i_2"},[e._v("\n          1200\n        ")]),e._v("万像素\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("span",{staticClass:"number item_i_3"},[e._v("\n          3D\n        ")]),e._v("touch\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("span",{staticClass:"number item_i_4"},[e._v("\n          A9\n        ")]),e._v("处理器\n      ")])}],A={name:"screen3",mounted:function(){this.$emit("mounted",{name:"screen3",el:this.$el})},methods:{toggleAnimate:function(){this.toggleHeading(),this.toggleSubHeading(),this.togglePhone(),this.toggleFeaturesWrapper()},toggleHeading:function(){this.headingDone=!this.headingDone},toggleSubHeading:function(){this.subHeadingDone=!this.subHeadingDone},togglePhone:function(){this.phoneDone=!this.phoneDone},toggleFeaturesWrapper:function(){this.featuresWrapperDone=!this.featuresWrapperDone}},computed:Object(s["a"])({},Object(a["e"])("pc.product",["scrollY"])),watch:{inViewport:function(e,t){console.log(e,t),!this.isAnimateDone&&e&&(this.toggleAnimate(),this.isAnimateDone=!0)}},components:{},props:{height:{type:Number,default:800},inViewport:{type:Boolean,required:!0}},data:function(){return{isAnimateDone:!1,headingDone:!1,subHeadingDone:!1,phoneDone:!1,featuresWrapperDone:!1}}},N=A,E=(n("c212"),Object(l["a"])(N,O,j,!1,null,"5280cd74",null));E.options.__file="Screen3.vue";var V=E.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"screen-4",style:{height:e.height+"px"}},[n("div",{staticClass:"heading-wrapper"},[n("div",{class:["heading",e.headingDone?"":"init"]},[e._v("丰富的手机型号")]),n("div",{class:["subheading",e.subHeadingDone?"":"init"]},[e._v("找到适合你的手机")]),n("div",{staticClass:"type-wrapper "},e._l(e.types,function(t,i){return n("div",{key:i,class:["item","item_i_"+i,e.types[i].done?"":"init"]},[n("div",{staticClass:"name"},[e._v(e._s(t.name))]),n("div",{staticClass:"storage "},[e._v(e._s(t.storage))])])}))])])},S=[],k={name:"screen4",mounted:function(){this.$emit("mounted",{name:"screen4",el:this.$el})},methods:{toggleAnimate:function(){this.toggleHeading(),this.toggleSubHeading(),this.toggleType()},toggleHeading:function(){this.headingDone=!this.headingDone},toggleSubHeading:function(){this.subHeadingDone=!this.subHeadingDone},toggleType:function(){for(var e=this,t=function(t){setTimeout(function(){e.types[t].done=!e.types[t].done,e.types.splice(t,1,e.types[t]),console.log(t,e.types[t])},260*t)},n=0;n<this.types.length;n++)t(n)}},computed:Object(s["a"])({},Object(a["e"])("pc.product",["scrollY"])),watch:{inViewport:function(e,t){console.log(e,t),!this.isAnimateDone&&e&&(this.toggleAnimate(),this.isAnimateDone=!0)}},components:{},props:{height:{type:Number,default:800},inViewport:{type:Boolean,required:!0}},data:function(){return{isAnimateDone:!1,headingDone:!1,subHeadingDone:!1,types:[{name:"红",storage:"16G/32G/64G",done:!1},{name:"金",storage:"16G/32G/64G",done:!1},{name:"灰",storage:"16G/32G/64G",done:!1},{name:"黑",storage:"16G/32G/64G",done:!1}]}}},x=k,B=(n("7cb0"),Object(l["a"])(x,$,S,!1,null,"d29c4c84",null));B.options.__file="Screen4.vue";var T=B.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"screen-5",style:{height:e.height+"px"}},[n("div",{staticClass:"wrapper"},[n("p",{class:["heading",e.headingDone?"":"init"]},[e._v("游戏、学习、拍照、有这一部就够了")]),n("p",{class:["subheading",e.subHeadingDone?"":"init"]},[e._v("看视频、拍摄高清视频与照片、视频聊天、一机多功能，让您生活更丰富精彩。")])]),n("div",{class:["back",e.backDone?"":"init"]})])},P=[],G={name:"screen5",mounted:function(){this.$emit("mounted",{name:"screen5",el:this.$el})},methods:{toggleAnimate:function(){this.toggleHeading(),this.toggleSubHeading(),this.toggleBackDone()},toggleHeading:function(){this.headingDone=!this.headingDone},toggleSubHeading:function(){this.subHeadingDone=!this.subHeadingDone},toggleBackDone:function(){this.backDone=!this.backDone}},computed:Object(s["a"])({},Object(a["e"])("pc.product",["scrollY"])),watch:{inViewport:function(e,t){console.log(e,t),!this.isAnimateDone&&e&&(this.toggleAnimate(),this.isAnimateDone=!0)}},components:{},props:{height:{type:Number,default:800},inViewport:{type:Boolean,required:!0}},data:function(){return{isAnimateDone:!1,headingDone:!1,subHeadingDone:!1,backDone:!1}}},R=G,F=(n("bead"),Object(l["a"])(R,Y,P,!1,null,"2c99b550",null));F.options.__file="Screen5.vue";var W=F.exports,q=n("2ef0");function L(e){return{top:document.getElementById(e).getBoundingClientRect().top,bottom:document.getElementById(e).getBoundingClientRect().bottom,left:document.getElementById(e).getBoundingClientRect().left,right:document.getElementById(e).getBoundingClientRect().right,height:document.getElementById(e).getBoundingClientRect().height}}var M=function(){return n.e("xxr.Buy").then(n.bind(null,"3221"))},X={screen1:0,screen2:1,screen3:2,screen4:3,screen5:4},J=["screen1","screen2","screen3","screen4","screen5"],U={name:"product",metaInfo:{title:"产品概览",meta:[{name:"keyWords",content:"XXR不明说是什么，全靠页面，所见即所得"}]},mounted:function(){var e=this;this.$nextTick(function(){e.$el.addEventListener("scroll",Object(q["throttle"])(function(){e.setScrollY(e.$el.scrollTop)},300,{trailing:!0})),e.rect.header=Object(s["a"])({},L("header"))}),console.log()},computed:Object(s["a"])({},Object(a["c"])(["appHeight"]),Object(a["e"])("pc.product",["scrollY","directionY"])),methods:Object(s["a"])({},Object(a["d"])("pc.product",["setScrollY","setDirectionY"]),{mountedCompletedProgress:function(e){var t=e.name,n=e.el,i=n.getBoundingClientRect(),o=i.bottom,s=i.height,r=i.left,c=i.right,a=i.top,u=i.width,h=i.x,l=i.y;return this.rect[t]={bottom:o,height:s,left:r,right:c,top:a,width:u,x:h,y:l},this.mountedCompleted++},initScreenRect:function(){try{this.rect.header=Object(s["a"])({},L("header")),this.rect.screen1=Object(s["a"])({},L("screen1")),this.rect.screen2=Object(s["a"])({},L("screen2")),this.rect.screen3=Object(s["a"])({},L("screen3")),this.rect.screen4=Object(s["a"])({},L("screen4")),this.rect.screen5=Object(s["a"])({},L("screen5"))}catch(e){console.log(e)}},scrollTo:function(e){this.$el.scrollTo({top:e,behavior:"smooth"})},toScreen:function(e){this.scrollTo(this.rect[J[e]].top)},goHome:function(){this.$router.push({name:"p.h"})},show:function(e){var t=this;this.headOutlineTimer&&clearTimeout(this.headOutlineTimer);var n="is"+e+"Hide",i="is"+e+"None";return this[i]=!1,setTimeout(function(){t[n]=!1},1),this},hide:function(e){var t=this,n="is"+e+"Hide",i="is"+e+"None";return this[n]=!0,this.headOutlineTimer=setTimeout(function(){t[i]=!0},1e3),this},setCurrentInViewport:function(e){e<this.rect.screen5.bottom&&e>=this.rect.screen5.top-this.rect.header.height-120?this.currentInViewport="screen5":e<this.rect.screen4.bottom&&e>=this.rect.screen4.top-this.rect.header.height-120?this.currentInViewport="screen4":e<this.rect.screen3.bottom&&e>=this.rect.screen3.top-this.rect.header.height-120?this.currentInViewport="screen3":e<this.rect.screen2.bottom&&e>=this.rect.screen2.top-this.rect.header.height-120?this.currentInViewport="screen2":e<this.rect.screen1.bottom&&e>=this.rect.screen1.top-this.rect.header.height-120&&(this.currentInViewport="screen1")}}),watch:{mountedCompleted:function(e){console.log(e)},scrollY:function(e,t){this.setCurrentInViewport(e,t),e-t<=0?this.setDirectionY(-1):this.setDirectionY(1),console.log("directionY",this.directionY)},directionY:function(e){-1===e?this.show("Header").hide("Outline"):this.show("Outline").hide("Header")},currentInViewport:function(e,t){var n=X[e];this.currentNavItem=n,this.isInViewport[t]=!1,this.isInViewport[e]=!0,console.log("this.currentNavItem",this.currentNavItem)}},components:{heading:p,screen1:_,screen2:H,screen3:V,screen4:T,screen5:W,buy:M,"site-footer":function(){return n.e("Footer").then(n.bind(null,"0632"))}},data:function(){return{headOutlineTimer:null,mountedCompleted:0,isHeaderHide:!1,isHeaderNone:!1,isOutlineHide:!0,isOutlineNone:!0,navItems:["外观","配置","型号","说明","其他"],headerHeight:64,rect:{screen1:{},screen2:{},screen3:{},screen4:{},screen5:{}},currentInViewport:"",isInViewport:{screen1:!0,screen2:!1,screen3:!1,screen4:!1,screen5:!1},currentNavItem:0}}},z=U,K=(n("7919"),Object(l["a"])(z,i,o,!1,null,"13a28580",null));K.options.__file="Product.vue";t["default"]=K.exports},b6f2:function(e,t,n){"use strict";var i=n("aeae"),o=n.n(i);o.a},bcc7:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("bn-bar"),n("top-bar"),n("site-header"),n("div",{staticClass:"banner-wrapper"},[n("carousel"),n("category")],1),n("hero-sub"),n("flash-purchase"),n("site-footer")],1)},o=[],s={name:"home",mounted:function(){var e={title:"首页",meta:[{name:"keyWords",content:"首页入口"}]};console.log(e)},methods:{},computed:{},components:{"bn-bar":function(){return n.e("BnBar").then(n.bind(null,"af4b"))},"site-header":function(){return n.e("SiteHeader").then(n.bind(null,"7fad"))},"top-bar":function(){return n.e("SiteTopBar").then(n.bind(null,"30c4"))},"flash-purchase":function(){return n.e("FlashPurchase").then(n.bind(null,"a4ee"))},carousel:function(){return n.e("Carousel").then(n.bind(null,"ae02"))},category:function(){return n.e("Category").then(n.bind(null,"433e"))},"hero-sub":function(){return n.e("HeroSub").then(n.bind(null,"7909"))},"site-footer":function(){return n.e("Footer").then(n.bind(null,"0632"))}},data:function(){return{}}},r=s,c=(n("a4f9"),n("2877")),a=Object(c["a"])(r,i,o,!1,null,"d46fd3d2",null);a.options.__file="Home.vue";t["default"]=a.exports},bead:function(e,t,n){"use strict";var i=n("d332"),o=n.n(i);o.a},c212:function(e,t,n){"use strict";var i=n("27c9"),o=n.n(i);o.a},c5f6:function(e,t,n){"use strict";var i=n("7726"),o=n("69a8"),s=n("2d95"),r=n("5dbc"),c=n("6a99"),a=n("79e5"),u=n("9093").f,h=n("11e9").f,l=n("86cc").f,d=n("aa77").trim,p="Number",g=i[p],f=g,m=g.prototype,v=s(n("2aeb")(m))==p,b="trim"in String.prototype,_=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():d(t,3);var n,i,o,s=t.charCodeAt(0);if(43===s||45===s){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+t}for(var r,a=t.slice(2),u=0,h=a.length;u<h;u++)if(r=a.charCodeAt(u),r<48||r>o)return NaN;return parseInt(a,i)}}return+t};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof g&&(v?a(function(){m.valueOf.call(n)}):s(n)!=p)?r(new f(_(t)),n,g):_(t)};for(var D,w=n("9e1e")?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;w.length>y;y++)o(f,D=w[y])&&!o(g,D)&&l(g,D,h(f,D));g.prototype=m,m.constructor=g,n("2aba")(i,p,g)}},d332:function(e,t,n){},f485:function(e,t,n){},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=home.96e4a5af.js.map