(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"16bc":function(t,e,n){},"28a5":function(t,e,n){n("214f")("split",2,function(t,e,o){"use strict";var i=n("aae3"),a=o,r=[].push,c="split",s="length",u="lastIndex";if("c"=="abbc"[c](/(b)*/)[1]||4!="test"[c](/(?:)/,-1)[s]||2!="ab"[c](/(?:ab)*/)[s]||4!="."[c](/(.?)(.?)/)[s]||"."[c](/()()/)[s]>1||""[c](/.?/)[s]){var l=void 0===/()??/.exec("")[1];o=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!i(t))return a.call(n,t,e);var o,c,h,m,v,d=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,p=void 0===e?4294967295:e>>>0,w=new RegExp(t.source,b+"g");l||(o=new RegExp("^"+w.source+"$(?!\\s)",b));while(c=w.exec(n)){if(h=c.index+c[0][s],h>f&&(d.push(n.slice(f,c.index)),!l&&c[s]>1&&c[0].replace(o,function(){for(v=1;v<arguments[s]-2;v++)void 0===arguments[v]&&(c[v]=void 0)}),c[s]>1&&c.index<n[s]&&r.apply(d,c.slice(1)),m=c[0][s],f=h,d[s]>=p))break;w[u]===c.index&&w[u]++}return f===n[s]?!m&&w.test("")||d.push(""):d.push(n.slice(f)),d[s]>p?d.slice(0,p):d}}else"0"[c](void 0,0)[s]&&(o=function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)});return[function(n,i){var a=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,a,i):o.call(String(a),n,i)},o]})},"3c68":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shell"},[n("c-tool-bar",{directives:[{name:"show",rawName:"v-show",value:t.isShowToolBar,expression:"isShowToolBar"}],on:{mounted:t.toolMounted}},["home.chat"===t.currentShow?n("div",[n("c-button",{attrs:{options:{class:{elevation:!0}}}},[t._v("chat")])],1):t._e(),"home.user"===t.currentShow?n("div",[n("c-button",{attrs:{options:{class:{elevation:!0}}}},[t._v("user")])],1):t._e(),"home.question"===t.currentShow?n("div",[n("c-button",{attrs:{options:{class:{elevation:!0}}}},[t._v("question")])],1):t._e(),"home.article"===t.currentShow?n("div",[n("c-button",{attrs:{options:{class:{elevation:!0}}}},[t._v("article")])],1):t._e(),"home.article.detail"===t.currentShow?n("div",[n("c-button",{attrs:{options:{class:{primary:!0,elevation:!0}}},on:{click:function(e){t.goBackToArticleList()}}},[t._v("GoBack")])],1):t._e()]),n("c-bottom-nav-bar",{directives:[{name:"show",rawName:"v-show",value:t.isShowNavBar,expression:"isShowNavBar"}],attrs:{currentItem:t.currentItem,tabItems:t.tabItems},on:{mounted:t.navMounted,tabClick:t.navTo}}),n("div",{staticClass:"main"},[n("transition",{attrs:{name:t.transitionName}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)},i=[],a=(n("7f7f"),n("28a5"),n("c93e")),r=n("2f62"),c={name:"home",mounted:function(){console.log("Home mounted"),this.setHomeRect(this.$el.getBoundingClientRect())},data:function(){return{showNav:!0,transitionName:"fade",currentItem:0,tabItems:[{icon:"grain",label:"Chat",routeName:"chat"},{icon:"list-alt",label:"Article",routeName:"article"},{icon:"edit",label:"Question",routeName:"question"},{icon:"user",label:"User",routeName:"user"}],colOptions:{class:{md:{colspan:8,offset:2}}}}},computed:Object(a["a"])({},Object(r["c"])(["userInfo"]),Object(r["c"])("home",["isShowToolBar","isShowNavBar","currentShow"]),Object(r["c"])("article",["movingDirectionY","articleScrollY"])),watch:{movingDirectionY:function(t,e){this.setShowToolBar(-1===t),this.setShowNavBar(-1===t)},userInfo:function(t,e){t||this.$router.push({name:"login"})},$route:function(t,e){var n=t.path.split("/").length,o=e.path.split("/").length;this.setCurrentShow(t.name);for(var i=this.tabItems[0],a=0,r=0;r<this.tabItems.length;r++)if(this.tabItems[r].routeName===t.name.split(".")[1]){i=this.tabItems[r],a=r;break}this.navTo({item:i,index:a}),console.log("Home $route",t.name,n,o)}},methods:Object(a["a"])({},Object(r["b"])(["setThemeColor"]),Object(r["b"])("home",["setHomeRect","setToolBarRect","setNavBarRect","setShowToolBar","setShowNavBar","setCurrentShow"]),{toolMounted:function(t){this.setToolBarRect(t.getBoundingClientRect())},navMounted:function(t){this.setNavBarRect(t.getBoundingClientRect()),this.navTo({item:this.tabItems[1],index:1})},test:function(t){console.log(t)},goBackToArticleList:function(){this.$router.go(-1)},navTo:function(t){t.event;var e=t.item,n=t.index;if(this.currentItem===n)return!1;this.currentItem=n,this.$router.push({name:"home.".concat(e.routeName)})}}),components:{"c-container":function(){return n.e("c-container").then(n.bind(null,"5b42"))},"c-row":function(){return n.e("c-row").then(n.bind(null,"ef38"))},"c-col":function(){return n.e("c-col").then(n.bind(null,"d15e"))},"c-button":function(){return Promise.resolve().then(n.bind(null,"eece"))},"c-modals":function(){return n.e("c-modals").then(n.bind(null,"2158"))},"c-tool-bar":function(){return n.e("c-modals").then(n.bind(null,"6430"))},"c-bottom-nav-bar":function(){return n.e("c-modals").then(n.bind(null,"11a4"))}}},s=c,u=(n("f82c"),n("2877")),l=Object(u["a"])(s,o,i,!1,null,"09ae6d17",null);l.options.__file="Home.vue";e["default"]=l.exports},aae3:function(t,e,n){var o=n("d3f4"),i=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},f82c:function(t,e,n){"use strict";var o=n("16bc"),i=n.n(o);i.a}}]);
//# sourceMappingURL=home.664820e1.js.map