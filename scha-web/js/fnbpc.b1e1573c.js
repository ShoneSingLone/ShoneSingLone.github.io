(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)r=s[d],a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={fnbpc:0},i=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/scha-web/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([13,"chunk-vendors","chunk-common"]),n()})({13:function(e,t,n){e.exports=n("f07b")},2265:function(e,t,n){},"3a17":function(e,t,n){"use strict";var o=n("2265"),a=n.n(o);a.a},"7b21":function(e,t,n){},c51f:function(e,t,n){"use strict";var o=n("7b21"),a=n.n(o);a.a},f07b:function(e,t,n){"use strict";n.r(t);var o=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("c-header"),n("c-aside",{staticClass:"aside",style:{width:e.asideWidth+"px"},attrs:{isCollapse:e.isCollapse,menuList:e.menuList,submenuList:"children"},on:{"update:isCollapse":function(t){e.isCollapse=t},asideChange:e.asideWidthChange}}),n("c-main",{ref:"main",staticClass:"main",attrs:{asideWidth:e.asideWidth},model:{value:e.tabId,callback:function(t){e.tabId=t},expression:"tabId"}})],1)},i=[],r=n("c99b"),s=n("ba80"),c=n("0392"),u={name:"AppHome",mounted:function(){var e=this;function t(e){function t(e){var t=e.data,n=t.action,o=t.payload,a=e.source,i=e.origin;console.log(n,o,a,i);var r={};r[n]&&r[n](o)}try{t(e)}catch(n){console.log(n)}}this.$post("/proxy/get",{coll:"menuList",doc:{id:"FuNvBingPuCha"}}).then(function(t){var n=t.isSuccess,o=t.data;console.log(o),n&&(e.menuList=JSON.parse(o[0]&&o[0].content))}).catch(function(e){return console.log("error",e)}),window.addEventListener("message",t,!1)},data:function(){return{isCollapse:!0,hjhszIframe:!1,menuList:[],asideWidth:200,tabId:"1"}},methods:{addTab:function(e){this.$refs.main.addTab(e)},asideWidthChange:function(e){console.log(e)},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}},computed:{},watch:{asideWidth:function(e,t){console.log("asideWidth",e,t)},hjhszIframe:function(e){console.log("hjhszIframe",e)}},components:{CHeader:r["a"],CAside:s["a"],CMain:c["a"]}},l=u,d=(n("c51f"),n("3a17"),n("2877")),f=Object(d["a"])(l,a,i,!1,null,"eaf6e728",null);f.options.__file="AppHome.vue";var p=f.exports,h=(n("7378"),n("fa6d"),n("7206"),n("13af"));o["default"].config.productionTip=!1,o["default"].prototype.$post=h["b"],o["default"].prototype.$get=h["a"],new o["default"]({el:"#app",template:"<application/>",components:{application:p}})}});
//# sourceMappingURL=fnbpc.b1e1573c.js.map