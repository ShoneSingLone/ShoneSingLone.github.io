(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ImageList"],{2909:function(t,i,e){"use strict";function a(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){return a(t)||s(t)||l()}e.d(i,"a",function(){return o})},"5cc2":function(t,i,e){"use strict";var a=e("6824"),s=e.n(a);s.a},"669b":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.readonly?e("div",{staticClass:"image-list readonly"},[e("div",{attrs:{"data-v-75dfac19":""}},[e("ul",{staticClass:"el-upload-list el-upload-list--picture-card"},t._l(t.imageList,function(i,a){return e("li",{key:a+"img",staticClass:"el-upload-list__item is-ready",attrs:{tabindex:a}},[e("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:i.url,alt:i.name}}),e("a",{staticClass:"el-upload-list__item-name"},[e("i",{staticClass:"el-icon-document"}),t._v("\n          "+t._s(i.name)+"\n        ")]),e("span",{staticClass:"el-upload-list__item-actions"},[e("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){t.handlePictureCardPreview({url:i.url})}}},[e("i",{staticClass:"el-icon-zoom-in"})])])])}))]),e("el-dialog",{staticClass:"dialog-view-img",attrs:{visible:t.dialogVisible},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1):e("div",{staticClass:"image-list"},[e("el-upload",{ref:"upload",attrs:{action:t.action,"file-list":t.imageList,"on-preview":t.handlePictureCardPreview,"on-change":t.handleFileListChange,"on-success":t.handleFileListSuccess,"on-remove":t.handleFileListRemove,"before-remove":t.handleBeforeRemove,"on-progress":t.handleProgress,"auto-upload":!0,multiple:!0,name:"file","list-type":"picture-card"}},[e("i",{staticClass:"el-icon-plus"})]),e("el-dialog",{staticClass:"dialog-view-img",attrs:{visible:t.dialogVisible},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},s=[],l=e("2909"),o={name:"ImageList",model:{prop:"imageList",event:"input"},props:{options:Object,imageList:{type:Array,required:!0},readonly:{type:Boolean,default:!1}},mounted:function(){window.upload=this.$refs.upload},data:function(){return{dialogImageUrl:"",dialogVisible:!1,isUploaded:!1,addList:[],uploadedList:[],removedList:[]}},computed:{action:function(){return this.options&&this.options.action||""}},methods:{handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleFileListChange:function(t,i){this.isUploaded||(this.addList=Object(l["a"])(this.addList).concat([t])),this.$emit("input",i)},handleFileListSuccess:function(t){var i=t.isSuccess,e=t.data;i&&(this.uploadedList=Object(l["a"])(this.uploadedList).concat([e[0]]))},handleFileListRemove:function(t,i){this.$emit("input",i),this.removedList=Object(l["a"])(this.removedList).concat([t]),console.log("handleFileListRemove",t,i)},handleProgress:function(t,i,e){console.log(t,t.total,t.percent)},handleBeforeRemove:function(){if(this.options&&this.options.noDelete)return!1;console.log("delete")},submit:function(){this.isUploaded=!0,this.$refs.upload.submit()},abort:function(){this.$refs.upload.abort()}},watch:{}},n=o,r=(e("5cc2"),e("2877")),c=Object(r["a"])(n,a,s,!1,null,null,null);c.options.__file="ImageList.vue";i["default"]=c.exports},6824:function(t,i,e){}}]);
//# sourceMappingURL=ImageList.c977139d.js.map