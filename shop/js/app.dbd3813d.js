(function(e){function t(t){for(var r,n,i=t[0],l=t[1],u=t[2],s=0,h=[];s<i.length;s++)n=i[s],c[n]&&h.push(c[n][0]),c[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,n=1;n<o.length;n++){var i=o[n];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},n={app:0},c={app:0},a=[];function i(e){return l.p+"js/"+({"home~pc":"home~pc",home:"home",pc:"pc",mobile:"mobile","mobile-category":"mobile-category","mobile-home":"mobile-home","mobile-trolley":"mobile-trolley","mobile-user":"mobile-user",BnBar:"BnBar",Carousel:"Carousel",Category:"Category",FlashPurchase:"FlashPurchase",Footer:"Footer",HeroSub:"HeroSub",SiteHeader:"SiteHeader",SiteTopBar:"SiteTopBar","xxr.Buy":"xxr.Buy","c-tab-bar":"c-tab-bar","c-container":"c-container","c-scroll~c-slide":"c-scroll~c-slide","c-scroll":"c-scroll","c-slide":"c-slide","c-slide-item":"c-slide-item","c-tab":"c-tab","c-tab-panel":"c-tab-panel","c-tab-panels":"c-tab-panels"}[e]||e)+"."+{"home~pc":"9e81a80c",home:"4e1fa439",pc:"b0ae2af2",mobile:"68d9aaed","mobile-category":"480a55fa","mobile-home":"ce0637e4","mobile-trolley":"4f4df23a","mobile-user":"50905c24",BnBar:"8930f35e",Carousel:"c692613b",Category:"a1c8d420",FlashPurchase:"1f3f473f",Footer:"810ed922",HeroSub:"faea3033",SiteHeader:"16a4a290",SiteTopBar:"7ae82078","xxr.Buy":"0d3ea033","c-tab-bar":"3f75a853","c-container":"ab4e7b7d","c-scroll~c-slide":"1881c74d","c-scroll":"106f6ac4","c-slide":"258dc913","c-slide-item":"4ce2bbdd","c-tab":"cee1e644","c-tab-panel":"6f51e2be","c-tab-panels":"4e2d08b5"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o={home:1,pc:1,mobile:1,"mobile-home":1,"mobile-user":1,BnBar:1,Carousel:1,Category:1,FlashPurchase:1,Footer:1,HeroSub:1,SiteHeader:1,SiteTopBar:1,"xxr.Buy":1,"c-tab-bar":1,"c-container":1,"c-scroll":1,"c-slide":1,"c-slide-item":1,"c-tab":1,"c-tab-panel":1,"c-tab-panels":1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise(function(t,o){for(var r="css/"+({"home~pc":"home~pc",home:"home",pc:"pc",mobile:"mobile","mobile-category":"mobile-category","mobile-home":"mobile-home","mobile-trolley":"mobile-trolley","mobile-user":"mobile-user",BnBar:"BnBar",Carousel:"Carousel",Category:"Category",FlashPurchase:"FlashPurchase",Footer:"Footer",HeroSub:"HeroSub",SiteHeader:"SiteHeader",SiteTopBar:"SiteTopBar","xxr.Buy":"xxr.Buy","c-tab-bar":"c-tab-bar","c-container":"c-container","c-scroll~c-slide":"c-scroll~c-slide","c-scroll":"c-scroll","c-slide":"c-slide","c-slide-item":"c-slide-item","c-tab":"c-tab","c-tab-panel":"c-tab-panel","c-tab-panels":"c-tab-panels"}[e]||e)+"."+{"home~pc":"31d6cfe0",home:"b2c3ca65",pc:"e09df927",mobile:"69538027","mobile-category":"31d6cfe0","mobile-home":"2f7cc18d","mobile-trolley":"31d6cfe0","mobile-user":"348d658a",BnBar:"79ea244a",Carousel:"086c7f24",Category:"0ae8c406",FlashPurchase:"c126fe2e",Footer:"423eefe4",HeroSub:"da2e8125",SiteHeader:"40c20915",SiteTopBar:"6c9a7f6a","xxr.Buy":"e6c534dc","c-tab-bar":"9649cc52","c-container":"394460ea","c-scroll~c-slide":"31d6cfe0","c-scroll":"b84e22e3","c-slide":"cf7ddecf","c-slide-item":"0edd4cac","c-tab":"d1e75728","c-tab-panel":"dc2f13b5","c-tab-panels":"17787dd4"}[e]+".css",n=l.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var i=c[a],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===n))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){i=s[a],u=i.getAttribute("data-href");if(u===r||u===n)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,o(c)},h.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(h)}).then(function(){n[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,o){r=c[e]=[t,o]});t.push(r[2]=a);var u,s=document.getElementsByTagName("head")[0],h=document.createElement("script");h.charset="utf-8",h.timeout=120,l.nc&&h.setAttribute("nonce",l.nc),h.src=i(e),u=function(t){h.onerror=h.onload=null,clearTimeout(p);var o=c[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+n+")");a.type=r,a.request=n,o[1](a)}c[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:h})},12e4);h.onerror=h.onload=u,s.appendChild(h)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/shop/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var p=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},c=[],a=o("a322"),i=o("c93e"),l=(o("28a5"),o("2f62")),u=o("f7fe"),s=o.n(u),h={pc:1,mobile:2},p={name:"app",created:function(){this.setUserInfo();var e=location.hash.split("#");if(e.length>1&&e[1].length>1){var t=e[1].split("/")[1];this.setCurrentMode("pc"===t?h.pc:h.mobile),this.setCurrentPath(e[1])}},mounted:function(){var e=this;console.log("App mounted"),this.setAppSize(document.body.getBoundingClientRect()),console.log("UserInfo",this.userInfo),this.$nextTick(function(){window.addEventListener("resize",s()(function(){e.setAppSize(document.body.getBoundingClientRect()),console.log("this.appWidth",e.appWidth,"this.appHeight",e.appHeight)},150)),window.addEventListener("storage",function(t){try{var o=t.key,r=t.newValue,n=t.oldValue,c=t.url,a=e,i={userInfo:function(){r&&r.length>0&&a.setUserInfo(JSON.parse(r))}};console.warn("from ".concat(c,",new key is ").concat(o,", newValue is ").concat(r,", old value is ").concat(n)),i[o]()}catch(e){console.log(e)}})})},computed:Object(i["a"])({},Object(l["c"])(["userInfo","appWidth","appHeight","currentPath","currentMode"])),methods:Object(i["a"])({},Object(l["b"])([]),Object(l["d"])(["setAppSize","setCurrentPath","setCurrentMode","setUserInfo"])),watch:{appWidth:function(e,t){console.log(e,t),console.log("this.currentPath",this.currentPath);var o=e<420?h.mobile:h.pc;console.log("currentMode",o,"this.currentMode",this.currentMode),o!==this.currentMode&&(this.setCurrentMode(o),this.$router.push({name:function(){var e,t=(e={},Object(a["a"])(e,h.mobile,"m.h"),Object(a["a"])(e,h.pc,"p.h"),e);return t[o]}()}))},$route:function(e,t){console.log("newPath, oldPath",e,t),this.setCurrentPath(e)}}},d=p,m=(o("5c0b"),o("2877")),f=Object(m["a"])(d,n,c,!1,null,null,null);f.options.__file="App.vue";var b=f.exports,g=o("8c4f"),y={path:"/pc/login",name:"login",component:function(){return Promise.all([o.e("home~pc"),o.e("pc")]).then(o.bind(null,"aeab"))}},v={path:"/pc",name:"p",component:function(){return Promise.all([o.e("home~pc"),o.e("pc")]).then(o.bind(null,"7f1f"))},children:[{path:"h",name:"p.h",component:function(){return Promise.all([o.e("home~pc"),o.e("home")]).then(o.bind(null,"bcc7"))}},{path:"product",name:"p.p",component:function(){return Promise.all([o.e("home~pc"),o.e("home")]).then(o.bind(null,"b0d7"))}}]},S={path:"/mobile",name:"m",component:function(){return o.e("mobile").then(o.bind(null,"2a23"))},children:[{path:"home",name:"m.h",component:function(){return o.e("mobile-home").then(o.bind(null,"0ab6"))}},{path:"category",name:"m.category",component:function(){return o.e("mobile-category").then(o.bind(null,"0438"))}},{path:"trolley",name:"m.trolley",component:function(){return o.e("mobile-trolley").then(o.bind(null,"16cf"))}},{path:"user",name:"m.user",component:function(){return o.e("mobile-user").then(o.bind(null,"12fb"))}}]};r["a"].use(g["a"]);var w=new g["a"]({routes:[{path:"*",redirect:"/pc/h"},S,v,y]}),P=(o("7f7f"),"de98ee996939961d39d9"),B=location.port?"http://192.168.137.1:3000/oauth":"https://shonesinglone.github.io/oauth",C=new URL("https://github.com/login/oauth/authorize");C.searchParams.append("client_id",P),C.searchParams.append("redirect_uri",B),C.searchParams.append("scope","user");var z=null,H={meta:{themeColor:"#337ab7"},appSize:{height:0,width:0},currentPath:"",currentMode:0,githubAuthorizeUrl:C,userInfo:!1},x={appHeight:function(e){return e.appSize.height},appWidth:function(e){return e.appSize.width},currentPath:function(e){return e.currentPath},currentMode:function(e){return e.currentMode},githubAuthorizeUrl:function(e){return e.githubAuthorizeUrl},userInfo:function(e){return e.userInfo}},A={setCurrentPath:function(e,t){var o=e.commit;return o("setCurrentPath",t)}},j={setCurrentPath:function(e,t){e.currentPath=t},setAppSize:function(e,t){var o=t.height,r=t.width;e.appSize.height=Math.ceil(o),e.appSize.width=Math.ceil(r)},setThemeColor:function(e,t){try{z=z||(function(){var e=document.getElementsByName("theme-color");return z=(e&&e.length)>0&&e[0]}()?z:function(){return z=document.createElement("meta"),z.setAttribute("name","theme-color"),document.head.appendChild(z),z}()),z.setAttribute("content",t)}catch(e){}e.meta.themeColor=t},setCurrentMode:function(e,t){e.currentMode=t},logout:function(e){localStorage.setItem("userInfo",""),e.userInfo=!1},setUserInfo:function(e){try{var t=localStorage.getItem("userInfo"),o=JSON.parse(t),r=o.name,n=o.token,c=o.avatar;if(!(r&&n&&c))throw new Error("Not Login");e.userInfo={name:r,token:n,avatar:c}}catch(t){console.log(t),e.userInfo=!1}}},O={state:H,getters:x,actions:A,mutations:j},M={scrollY:0,directionY:0},I={appHeight:function(e){return e.appSize.height}},T={setAppSize:function(e,t){var o=e.commit;return o("setAppSize",t)}},k={setScrollY:function(e,t){e.scrollY=t},setDirectionY:function(e,t){e.directionY=t}},F={namespaced:!0,state:M,getters:I,actions:T,mutations:k},E={headerSize:{height:48},footerSize:{height:48}},_={headerHeight:function(e){return e.headerSize.height},footerHeight:function(e){return e.footerSize.height}},N={setAppSize:function(e,t){var o=e.commit;return o("setAppSize",t)}},U={setHeaderHeight:function(e,t){e.headerSize.height=t},setHooterHeight:function(e,t){e.footerSize.height=t}},L={namespaced:!0,state:E,getters:_,actions:N,mutations:U};r["a"].use(l["a"]);var Y=new l["a"].Store({modules:{app:O,"pc.product":F,"mobile.home":L}}),W=o("9483");Object(W["a"])("".concat("/shop/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:w,store:Y,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var r=o("c81e"),n=o.n(r);n.a},c81e:function(e,t,o){}});
//# sourceMappingURL=app.dbd3813d.js.map