(function(e){function t(t){for(var r,o,c=t[0],u=t[1],p=t[2],s=0,l=[];s<c.length;s++)o=c[s],a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(l.length)l.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({home:"home",pc:"pc",BnBar:"BnBar",FlashPurchase:"FlashPurchase",Footer:"Footer",SiteHeader:"SiteHeader",TopBar:"TopBar",category:"category","c-container":"c-container"}[e]||e)+"."+{home:"2aab536d",pc:"bdc069c5",BnBar:"465c4c33",FlashPurchase:"c66004b6",Footer:"58589a69",SiteHeader:"fa6429ed",TopBar:"4c08506b",category:"7e12066c","c-container":"8d21516e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={home:1,pc:1,BnBar:1,FlashPurchase:1,Footer:1,SiteHeader:1,TopBar:1,category:1,"c-container":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({home:"home",pc:"pc",BnBar:"BnBar",FlashPurchase:"FlashPurchase",Footer:"Footer",SiteHeader:"SiteHeader",TopBar:"TopBar",category:"category","c-container":"c-container"}[e]||e)+"."+{home:"ef6396d7",pc:"8fd5534b",BnBar:"facbdaab",FlashPurchase:"955de90f",Footer:"7f2a0ef7",SiteHeader:"3c0ff520",TopBar:"3a41eaae",category:"d0c0d307","c-container":"99757245"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===r||p===o))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){c=s[i],p=c.getAttribute("data-href");if(p===r||p===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var p,s=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),p=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var h=setTimeout(function(){p({type:"timeout",target:l})},12e4);l.onerror=l.onload=p,s.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/shop/",u.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],s=p.push.bind(p);p.push=t,p=p.slice();for(var l=0;l<p.length;l++)t(p[l]);var h=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=n("c93e"),c=n("2f62"),u=n("f7fe"),p=n.n(u),s={name:"app",mounted:function(){var e=this;console.log("App mounted"),this.setAppSize(document.body.getBoundingClientRect()),this.$nextTick(function(){window.addEventListener("resize",p()(function(){e.setAppSize(document.body.getBoundingClientRect()),console.log("this.appWidth",e.appWidth,"this.appHeight",e.appHeight)},150))})},computed:Object(i["a"])({},Object(c["c"])(["appWidth","appHeight"])),methods:Object(i["a"])({},Object(c["b"])(["setAppSize"])),watch:{appWidth:function(e,t){var n=e>420?{name:"p.h"}:{name:"m.h"};console.log("appWidth newW,oldW:",e,t,n),this.$router.push(n)}}},l=s,h=(n("5c0b"),n("2877")),f=Object(h["a"])(l,o,a,!1,null,null,null);f.options.__file="App.vue";var d=f.exports,m=n("8c4f"),g={path:"/pc",name:"p",component:function(){return n.e("pc").then(n.bind(null,"7f1f"))},children:[{path:"h",name:"p.h",component:function(){return n.e("home").then(n.bind(null,"bcc7"))}}]},b={path:"/mobile",name:"m",component:function(){return n.e("pc").then(n.bind(null,"7f1f"))},children:[{path:"h",name:"m.h",component:function(){return n.e("pc").then(n.bind(null,"7a8a"))}}]};r["a"].use(m["a"]);var v=new m["a"]({routes:[{path:"*",redirect:"/pc/h"},b,g]}),y={appSize:{height:0,width:0}},w={appHeight:function(e){return e.appSize.height},appWidth:function(e){return e.appSize.width}},B={setAppSize:function(e,t){var n=e.commit;return n("setAppSize",t)}},S={setAppSize:function(e,t){var n=t.height,r=t.width;e.appSize.height=Math.ceil(n),e.appSize.width=Math.ceil(r)}},j={state:y,getters:w,actions:B,mutations:S};r["a"].use(c["a"]);var T=new c["a"].Store({modules:{app:j}}),F=n("9483");Object(F["a"])("".concat("/shop/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("fa6d");r["a"].config.productionTip=!1,new r["a"]({router:v,store:T,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),o=n.n(r);o.a}});
//# sourceMappingURL=app.54fa0129.js.map