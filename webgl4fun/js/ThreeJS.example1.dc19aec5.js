(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ThreeJS.example1"],{"0a4f":function(e,n,t){"use strict";var r=t("46ca"),a=t.n(r);a.a},"46ca":function(e,n,t){},"47bc":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"wrapper",staticClass:"threejs-example"})},a=[],i={name:"threejs-example1",beforeCreate:function(){},mounted:function(){this.init1()},data:function(){return{}},methods:{init1:function(){var e=new THREE.WebGLRenderer;e.setSize(400,300),e.setClearColor(0),this.$refs.wrapper.appendChild(e.domElement);var n=new THREE.Scene,t=new THREE.PerspectiveCamera(45,4/3,1,1e3);t.position.set(0,0,5),n.add(t);var r=new THREE.Mesh(new THREE.CubeGeometry(1,1,3),new THREE.MeshBasicMaterial({color:16711680}));n.add(r),e.render(n,t)}}},s=i,o=(t("0a4f"),t("2877")),c=Object(o["a"])(s,r,a,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=ThreeJS.example1.dc19aec5.js.map