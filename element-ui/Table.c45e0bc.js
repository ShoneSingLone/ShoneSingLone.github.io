(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{287:function(t,e,n){},348:function(t,e,n){"use strict";var a=n(287);n.n(a).a},643:function(t,e,n){"use strict";n.r(e);window.Vue=window.vue||{},window.Vue.convertDict=function(t,e,n,a){return console.log(t,e,n,a),"GENDER"===n?"1"===a?"男":"女":a};var a={mixins:[{data:function(){var t=[].concat(new Array(5)).fill({date:"2016-05-02",test:"1",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"});return console.log(t[0].test),{tableData:t}},methods:{handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){console.log(t,e)}}},{methods:{handleCurrentChange:function(t,e,n){console.log(t,e,n,e.currentTarget)},handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){console.log(t,e)}}}],data:function(){return{}},computed:{htmlTableData:function(){return JSON.stringify(this.tableData,null,2)}},methods:{}},l=(n(348),n(0)),o=Object(l.a)(a,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticStyle:{margin:"20px"}},[a("pre",{domProps:{innerHTML:n._s(n.htmlTableData)}}),a("el-input",{attrs:{placeholder:"1：男；其他：女"},model:{value:n.tableData[0].test,callback:function(t){n.$set(n.tableData[0],"test",t)},expression:"tableData[0].test"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:n.tableData}},[a("el-table-column",{attrs:{label:"性别",width:"180",prop:"test",options:{dictType:"GENDER"}}}),a("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:n._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"10px"}},[n._v(n._s(t.row.date))])]}}])}),a("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:n._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[n._v("姓名: "+n._s(t.row.name))]),a("p",[n._v("住址: "+n._s(t.row.address))]),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[n._v(n._s(t.row.name))])],1)])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:n._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(t){return n.handleEdit(e.$index,e.row)}}},[n._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return n.handleDelete(e.$index,e.row)}}},[n._v("删除")])]}}])})],1)],1)},[],!1,null,null,null);e.default=o.exports}}]);