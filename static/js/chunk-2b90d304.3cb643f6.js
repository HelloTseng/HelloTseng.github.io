(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b90d304"],{"616f":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return s}));var a=n("b775");function r(t){return Object(a["a"])({url:"api/Sys/GetManningLevel",method:"get",params:t})}function i(t){var e=t.type,n=t.data;return Object(a["a"])({url:"api/Sys/SetManningLevel?type=".concat(e),method:"post",data:n})}function o(t){return Object(a["a"])({url:"api/Sys/GetWorkloadStandard",method:"get",params:t})}function c(t){return Object(a["a"])({url:"api/Sys/SetWorkloadStandard",method:"post",data:t})}function s(t){return Object(a["a"])({url:"api/Certificate/WaitCertificationStudentPageList",method:"get",params:t})}},"6ce7":function(t,e,n){"use strict";var a=n("da6f"),r=n.n(a);r.a},"8e86":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{attrs:{"label-position":"right","label-width":"200px"}},[n("sticky",{directives:[{name:"permission",rawName:"v-permission",value:"save",expression:"'save'"}],attrs:{"z-index":10,"class-name":"sub-navbar"}},[n("bar-space"),n("bar-cell",[n("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.doSave}},[t._v("保存")])],1)],1),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("社会单位持证人员配备标准")])]),t._l(t.gradeArray,(function(e,a){return n("el-form-item",{key:e.GradeID,attrs:{label:e.GradeName+"人员"}},[n("el-input",{staticClass:"input-w200",attrs:{placeholder:"请输入"},on:{input:function(e){return t.checkCount(e,a)}},model:{value:e.Count,callback:function(n){t.$set(e,"Count",t._n(n))},expression:"item.Count"}},[n("template",{slot:"append"},[t._v("个")])],2)],1)}))],2),n("el-form-item",[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"save",expression:"'save'"}],attrs:{type:"primary",loading:t.loading},on:{click:t.doSave}},[t._v("保存")]),n("el-link",{staticClass:"link-btn",attrs:{type:"danger"},on:{click:t.handleLook}},[t._v("查看持证上岗数据分析>")])],1)],1)},r=[],i=(n("d81d"),n("d3b7"),n("ac1f"),n("5319"),n("616f")),o={name:"SocietyUnit",components:{BarCell:function(){return n.e("chunk-2d221e17").then(n.bind(null,"cbdf"))},BarSpace:function(){return n.e("chunk-2d2218de").then(n.bind(null,"cb9b"))},Sticky:function(){return n.e("chunk-2d210590").then(n.bind(null,"b804"))}},data:function(){return{loading:!1,gradeArray:[]}},created:function(){this.doLoad()},methods:{doLoad:function(){var t=this;Object(i["a"])({type:0}).then((function(e){t.gradeArray=e.response}))},doSave:function(){var t=this;if(!this.loading){this.loading=!0;var e=this.gradeArray.map((function(t){return""===t.Count&&(t.Count=0),t}));Object(i["d"])({type:0,data:e}).then((function(e){t.loading=!1,t.$notify({title:"成功",message:"保存成功",type:"success"})})).catch((function(e){t.loading=!1}))}},handleLook:function(){this.$message.warning("功能正在拼命开发中...ヽ(￣▽￣)و")},checkCount:function(t,e){var n=t.replace(/[^\d]/g,"");this.gradeArray[e].Count=n}}},c=o,s=(n("6ce7"),n("2877")),u=Object(s["a"])(c,a,r,!1,null,"a92a7dd2",null);e["default"]=u.exports},da6f:function(t,e,n){}}]);