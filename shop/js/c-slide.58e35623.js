(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c-slide","c-slide-item"],{6240:function(t,e,i){"use strict";var s=i("b310"),n=i.n(s);n.a},"6b9c":function(t,e,i){},"89f4":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slide",staticClass:"cube-slide"},[i("div",{ref:"slideGroup",staticClass:"cube-slide-group"},[t._t("default",t._l(t.data,function(e,s){return i("cube-slide-item",{key:s,attrs:{item:e},nativeOn:{click:function(i){t.clickItem(e,s)}}})}))],2),t.showDots?i("div",{staticClass:"cube-slide-dots"},[t._t("dots",t._l(t.dots,function(e,s){return i("span",{key:s,class:{active:t.currentPageIndex===s}})}),{current:t.currentPageIndex,dots:t.dots})],2):t._e()])},n=[],o=(i("ac6a"),i("f751"),i("c5f6"),i("9ec3")),r=i("1fba"),a=i("871d"),l=i("75a1"),d="cube-slide",c="change",h="click",u="scroll-end",f="scroll",p="horizontal",_="vertical",m={momentum:!1,click:!0,observeDOM:!1,bounce:!1},v={name:d,mixins:[a["a"],l["a"]],props:{data:{type:Array,default:function(){return[]}},initialIndex:{type:Number,default:0},loop:{type:Boolean,default:!0},threshold:{type:Number,default:.3},speed:{type:Number,default:400},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3},showDots:{type:Boolean,default:!0},direction:{type:String,default:p},allowVertical:{type:Boolean,default:void 0,deprecated:{replacedBy:"options"}},stopPropagation:{type:Boolean,default:void 0,deprecated:{replacedBy:"options"}},refreshResetCurrent:{type:Boolean,default:!0}},data:function(){return{dots:0,currentPageIndex:this.initialIndex||0}},created:function(){var t=this;this._dataWatchers=[];var e=["data","loop","autoPlay","options.eventPassthrough","threshold","speed","allowVertical"];e.forEach(function(e){t._dataWatchers.push(t.$watch(e,function(){"data"===e&&t._destroy(),t.$nextTick(function(){t.refresh()})}))})},watch:{initialIndex:function(t){t!==this.currentPageIndex&&this.slide&&this.slide.goToPage(t)}},methods:{clickItem:function(t,e){this.$emit(h,t,e)},refresh:function(){null!==this.slide&&(this._destroy(),clearTimeout(this._timer),this.slide&&this.refreshResetCurrent&&(this.currentPageIndex=0),this._updateSlideDom(),this.showDots&&this._initDots(),this.currentPageIndex>=this.dots.length&&(this.currentPageIndex=this.dots.length-1),this._initSlide(),this.autoPlay&&this._play())},_destroy:function(){this.slide&&this.slide.destroy()},_refresh:function(){this._updateSlideDom(!0),this.slide.refresh()},_updateSlideDom:function(t){this._setSlideStyle(t)},_setSlideStyle:function(t){this.children=this.$refs.slideGroup.children;for(var e=this.direction===p?"width":"height",i=0,s=this.$refs.slide["client".concat(e[0].toUpperCase()+e.slice(1))],n=this.children.length,o=0;o<n;o++){var r=this.children[o];r.style[e]=s+"px",i+=s}this.loop&&!t&&n>1&&(i+=2*s),this.$refs.slideGroup.style[e]=i+"px"},_initSlide:function(){var t=this,e=this.direction===p&&this.allowVertical?_:"",i=Object.assign({},m,{scrollX:this.direction===p,scrollY:this.direction===_,eventPassthrough:e,snap:{loop:this.loop,threshold:this.threshold,speed:this.speed},stopPropagation:this.stopPropagation},this.options);this.slide=new r["a"](this.$refs.slide,i),this.slide.on("scrollEnd",this._onScrollEnd),this.slide.goToPage(this.currentPageIndex,0,0),this.options.listenScroll&&3===this.options.probeType&&this.slide.on("scroll",this._onScroll);var s=this.$refs.slide;s.removeEventListener("touchend",this._touchEndEvent,!1),this._touchEndEvent=function(){t.autoPlay&&t._play()},s.addEventListener("touchend",this._touchEndEvent,!1),this.slide.on("beforeScrollStart",function(){t.autoPlay&&clearTimeout(t._timer)})},_onScrollEnd:function(){var t=this.slide.getCurrentPage(),e=t.pageX,i=t.pageY,s=this.direction===p?e:i;this.currentPageIndex!==s&&(this.currentPageIndex=s,this.$emit(c,s)),this.$emit(u,s),this.autoPlay&&this._play()},_onScroll:function(t){this.$emit(f,t)},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this;clearTimeout(this._timer),this._timer=setTimeout(function(){t.slide.next()},this.interval)},_deactivated:function(){clearTimeout(this._timer),clearTimeout(this._resizeTimer),window.removeEventListener("resize",this._resizeHandler);var t=this.$refs.slide;t&&t.removeEventListener("touchend",this._touchEndEvent,!1)},_resizeHandler:function(){var t=this;this.slide&&(clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(function(){t.slide.isInTransition?t._onScrollEnd():t.autoPlay&&t._play(),t._refresh()},60))}},mounted:function(){var t=this;this.$nextTick(function(){t.refresh()}),window.addEventListener("resize",this._resizeHandler)},activated:function(){this.autoPlay&&this._play(),window.addEventListener("resize",this._resizeHandler)},deactivated:function(){this._deactivated()},destroyed:function(){this._deactivated(),this._destroy(),this.slide=null,this._dataWatchers.forEach(function(t){t()}),this._dataWatchers=null},components:{CubeSlideItem:o["default"]}},y=v,g=(i("b53b"),i("2877")),b=Object(g["a"])(y,s,n,!1,null,null,null);b.options.__file="slide.vue";e["default"]=b.exports},"9ec3":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cube-slide-item"},[t._t("default",[i("a",{attrs:{href:t.item.url}},[i("img",{attrs:{src:t.item.image}})])])],2)},n=[],o="cube-slide-item",r={name:o,props:{item:{type:Object,default:function(){return{}}}}},a=r,l=(i("6240"),i("2877")),d=Object(l["a"])(a,s,n,!1,null,null,null);d.options.__file="slide-item.vue";e["default"]=d.exports},b310:function(t,e,i){},b53b:function(t,e,i){"use strict";var s=i("6b9c"),n=i.n(s);n.a}}]);
//# sourceMappingURL=c-slide.58e35623.js.map