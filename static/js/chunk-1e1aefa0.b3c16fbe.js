(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e1aefa0"],{b1c9:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"permission",rawName:"v-permission",value:"create",expression:"'create'"}],staticClass:"search-wrapper",attrs:{flex:"main:right"}},[n("el-button",{attrs:{type:"danger",size:e.tableSize},on:{click:e.doCreate}},[e._v("添加字段")])],1),n("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"index-row":e.indexRow,"table-data":e.tableData,options:e.tableOptions}},[n("el-table-column",{attrs:{slot:"IsRequired",label:"必填项",align:"center","min-width":"60"},slot:"IsRequired",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.IsRequired?n("span",{staticClass:"text-red"},[e._v("是")]):n("span",[e._v("否")])]}}])}),n("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"60"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.Status?n("span",{staticClass:"text-green"},[e._v("启用")]):n("span",{staticClass:"text-red"},[e._v("停用")])]}}])}),n("el-table-column",{attrs:{slot:"operate",label:"操作","min-width":"100",align:"center"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"edit",expression:"'edit'"}],on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),r.Status?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"disable",expression:"'disable'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleSwitch(r)}}},[e._v("停用")]):n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"enable",expression:"'enable'"}],attrs:{type:"success"},on:{click:function(t){return e.handleSwitch(r)}}},[e._v("启用")]),n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"delete",expression:"'delete'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleDelete(r)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{title:(e.isEdit?"编辑":"添加")+"字段",visible:e.formVisible,"destroy-on-close":""},on:{"update:visible":function(t){e.formVisible=t},closed:e.formClose}},[n("el-form",{ref:"form",attrs:{model:e.form,"label-position":"right","label-width":"120px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"字段名称"}},[e.isEdit?n("span",[e._v(e._s(e.form.ItemName))]):n("el-input",{attrs:{placeholder:"请填写"},model:{value:e.form.ItemName,callback:function(t){e.$set(e.form,"ItemName","string"===typeof t?t.trim():t)},expression:"form.ItemName"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"数据类型"}},[e.isEdit?n("span",[e._v(e._s(e.returnTypeName(e.form.DataType)))]):n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.DataType,callback:function(t){e.$set(e.form,"DataType",t)},expression:"form.DataType"}},e._l(e.dataType_options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否必填项"}},[n("el-switch",{model:{value:e.form.IsRequired,callback:function(t){e.$set(e.form,"IsRequired",t)},expression:"form.IsRequired"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否启用"}},[n("el-switch",{model:{value:e.form.Status,callback:function(t){e.$set(e.form,"Status",t)},expression:"form.Status"}})],1)],1)],1),0===e.form.DataType?n("div",[n("el-form-item",{attrs:{label:"默认值"}},[n("el-input",{attrs:{placeholder:"无"},model:{value:e.form.DefaultValue,callback:function(t){e.$set(e.form,"DefaultValue",t)},expression:"form.DefaultValue"}})],1),n("el-form-item",{attrs:{label:"字段提示",prop:"Tips",rules:[{required:!0,message:"请输入提示语",trigger:"blur"}]}},[n("el-input",{attrs:{placeholder:"请输入提示语"},model:{value:e.form.Tips,callback:function(t){e.$set(e.form,"Tips",t)},expression:"form.Tips"}})],1)],1):e._e(),e.form.IsRelated||0===e.form.DataType?e._e():n("el-form-item",{attrs:{label:"选项内容",prop:"groups",rules:[{type:"array",min:e.form.DataType,required:!0,message:"请至少选择"+e.form.DataType+"个选项",trigger:"change"}]}},[n("el-select",{staticClass:"width-full",attrs:{multiple:"","allow-create":"",filterable:"","default-first-option":"",placeholder:"可搜索,可回车创建"},model:{value:e.form.groups,callback:function(t){e.$set(e.form,"groups",t)},expression:"form.groups"}},e._l(e.efDetails,(function(e){return n("el-option",{key:e.EFDID,attrs:{label:e.DetailDesc,value:e.EFDID}})})),1)],1),e.form.IsRelated?n("el-form-item",{attrs:{label:"选项内容"}},[n("table-body",{attrs:{"has-padding":!1,columns:e.innerColumns,"table-data":e.innerTableData,options:e.tableOptions}},[n("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"60"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.Status?n("span",{staticClass:"text-green"},[e._v("启用")]):e._e(),r.Status?e._e():n("span",{staticClass:"text-red"},[e._v("停用")])]}}],null,!1,788651432)}),n("el-table-column",{attrs:{slot:"operate",label:"操作","min-width":"160",align:"center"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.$index,a=t.row;return[n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.openInner(r,a)}}},[e._v(e._s(e.form.SubFieldName))]),a.Status?e._e():n("el-link",{attrs:{type:"success"},on:{click:function(t){return e.handleInnerSwitch(a)}}},[e._v("启用")]),a.Status?n("el-link",{attrs:{type:"danger"},on:{click:function(t){return e.handleInnerSwitch(a)}}},[e._v("停用")]):e._e()]}}],null,!1,2605411680)})],1)],1):e._e()],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1),n("el-dialog",{attrs:{width:"45%",title:e.form.SubFieldName,visible:e.innerVisible,"append-to-body":"","destroy-on-close":""},on:{"update:visible":function(t){e.innerVisible=t},close:e.innerClose}},[n("el-form",{ref:"innerform",attrs:{model:e.innerform,"label-position":"right","label-width":"130px"}},[n("el-form-item",{attrs:{label:e.form.currentFieldName}},[e._v(e._s(e.innerform.currentTxt))]),n("el-form-item",{attrs:{label:e.form.SubFieldName,prop:"groups",rules:[{type:"array",required:!0,message:"请至少选择1个选项",trigger:"change"}]}},[n("el-select",{staticClass:"width-full",attrs:{multiple:"",filterable:"",placeholder:"可搜索"},model:{value:e.innerform.groups,callback:function(t){e.$set(e.innerform,"groups",t)},expression:"innerform.groups"}},e._l(e.innerDetails,(function(e){return n("el-option",{key:e.EFDID,attrs:{label:e.DetailDesc,value:e.EFDID}})})),1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.innerConfirm}},[e._v("确 定")])],1)],1)],1)],1)},a=[],i=(n("7db0"),n("4160"),n("d81d"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),l=n("5530"),o=n("2f62"),s=n("ca42"),u=n("ed08"),c={name:"MatterSettingInfo",components:{TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))}},data:function(){var e=this;return{FieldType:0,tableLoading:!1,columns:[{title:"字段名称",key:"FieldName",align:"center",minWidth:100},{title:"数据类型",key:"DataType",align:"center",minWidth:100,formatter:function(t,n,r,a){if("undefined"!==typeof t.DataType)return e.dataType_options.find((function(e){return e.value===t.DataType})).label}},{title:"必填项",key:"IsRequired",slot:"IsRequired"},{title:"属性",key:"Attributes",align:"center",minWidth:100,formatter:function(e,t,n,r){return e.Attributes?"自定义":"系统默认"}},{title:"创建时间",key:"CreateDate",align:"center",minWidth:140,formatter:function(e,t,n,r){return Object(u["e"])(e.CreateDate,"{y}-{m}-{d} {h}:{i}:{s}")}},{title:"停用时间",key:"StopDate",align:"center",minWidth:140,formatter:function(e,t,n,r){return Object(u["e"])(e.StopDate,"{y}-{m}-{d} {h}:{i}:{s}")}},{title:"状态",key:"Status",slot:"Status"}],tableData:[],indexRow:{title:"#",align:"center",width:50},tableOptions:{border:!0,headerCellClassName:"table-header-bg"},isEdit:!1,formVisible:!1,form:{EFID:0,ItemName:"",DataType:0,IsRelated:!1,IsRequired:!1,Status:!1,DefaultValue:"",Tips:"",groups:[],SubFieldName:"",currentFieldName:""},innerVisible:!1,innerColumns:[{title:"选项名称",key:"DetailDesc",align:"center",minWidth:100},{slot:"Status"}],innerTableData:[],innerDetails:[],innerform:{currentIndex:0,currentTxt:"",groups:[]},dataType_options:[{value:0,label:"文本"},{value:1,label:"单选"},{value:2,label:"多选"},{value:3,label:"图片"},{value:4,label:"文件"}]}},computed:Object(l["a"])({},Object(o["c"])({tableSize:function(e){return e.settings.tableSize}})),created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.tableLoading||(this.tableLoading=!0,Object(s["s"])({FieldType:this.FieldType}).then((function(t){e.tableData=t.response,e.tableLoading=!1})).catch((function(t){e.tableLoading=!1})))},doCreate:function(){this.isEdit=!1,this.formVisible=!0},handleEdit:function(e){var t=this;this.isEdit=!0,this.form.currentFieldName=e.FieldName,Object(s["q"])({EFID:e.EFID}).then((function(e){var n=e.response,r=[];n.EFDetails.forEach((function(e){e.Status&&r.push(e.EFDID)})),t.form=Object(l["a"])(Object(l["a"])({},t.form),{},{EFID:n.EFID,ItemName:n.ItemName,DataType:n.DataType,IsRelated:n.IsRelated,IsRequired:n.IsRequired,Status:n.Status,DefaultValue:n.DefaultValue,Tips:n.Tips,groups:r,SubFieldName:n.SubFieldName}),n.IsRelated?t.innerTableData=n.EFDetails:t.efDetails=n.EFDetails,t.formVisible=!0}))},handleSwitch:function(e){this.$message.warning("功能正在拼命开发中...ヽ(￣▽￣)و")},handleDelete:function(e){this.$message.warning("功能正在拼命开发中...ヽ(￣▽￣)و")},formClose:function(){this.formVisible=!1},submitForm:function(){this.$refs.form.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},handleInnerSwitch:function(e){e.Status=!e.Status},openInner:function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.children&&t.children.length&&(n.innerform.groups=t.children),n.innerform.currentTxt=t.DetailDesc,n.innerform.currentIndex=e,r.next=5,Object(s["r"])({EFDId:t.EFDID});case 5:a=r.sent,a.success&&(i=[],a.response.map((function(e){e.Status&&i.push(e.EFDID)})),n.innerVisible=!0,n.innerDetails=a.response,n.innerform.groups=i);case 7:case"end":return r.stop()}}),r)})))()},innerClose:function(){this.innerVisible=!1},innerConfirm:function(){this.$refs.innerform.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},returnTypeName:function(e){var t="";switch(e){case 0:t="文本";break;case 1:t="单选";break;case 2:t="多选";break;case 3:t="图片";break;case 4:t="文件";break}return t}}},d=c,f=n("2877"),m=Object(f["a"])(d,r,a,!1,null,null,null);t["default"]=m.exports},ca42:function(e,t,n){"use strict";n.d(t,"p",(function(){return a})),n.d(t,"m",(function(){return i})),n.d(t,"s",(function(){return l})),n.d(t,"q",(function(){return o})),n.d(t,"r",(function(){return s})),n.d(t,"y",(function(){return u})),n.d(t,"w",(function(){return c})),n.d(t,"x",(function(){return d})),n.d(t,"B",(function(){return f})),n.d(t,"k",(function(){return m})),n.d(t,"g",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"u",(function(){return h})),n.d(t,"v",(function(){return g})),n.d(t,"A",(function(){return v})),n.d(t,"j",(function(){return D})),n.d(t,"f",(function(){return y})),n.d(t,"l",(function(){return E})),n.d(t,"i",(function(){return k})),n.d(t,"e",(function(){return w})),n.d(t,"a",(function(){return S})),n.d(t,"n",(function(){return I})),n.d(t,"o",(function(){return O})),n.d(t,"z",(function(){return T})),n.d(t,"h",(function(){return _})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return x})),n.d(t,"t",(function(){return R}));var r=n("b775");function a(e){return Object(r["a"])({url:"api/Enroll/GetEnrolExamineelList",method:"get",params:e})}function i(e){return Object(r["a"])({url:"api/Enroll/GetAppointmentExamineelList",method:"get",params:e})}function l(e){return Object(r["a"])({url:"api/Enroll/GetEnrollFieldList",method:"get",params:e})}function o(e){return Object(r["a"])({url:"api/Enroll/GetEnrollField",method:"get",params:e})}function s(e){return Object(r["a"])({url:"api/Enroll/GetEnrollFieldDetails",method:"get",params:e})}function u(e){return Object(r["a"])({url:"api/Enroll/GetRegisterSettingList",method:"get",params:e})}function c(e){return Object(r["a"])({url:"api/Enroll/GetRegisterSetting",method:"get",params:e})}function d(e){return Object(r["a"])({url:"api/Enroll/GetRegisterSettingDetails",method:"get",params:e})}function f(e){return Object(r["a"])({url:"api/Enroll/UpdateRegisterSetting",method:"post",data:e})}function m(e){return Object(r["a"])({url:"api/Enroll/EnableRegisterSetting",method:"post",data:e})}function p(e){return Object(r["a"])({url:"api/Enroll/DisableRegisterSetting",method:"post",data:e})}function b(e){return Object(r["a"])({url:"api/Enroll/AddRegisterConditions",method:"post",data:e})}function h(e){return Object(r["a"])({url:"api/Enroll/GetRegisterConditions",method:"get",params:e})}function g(e){return Object(r["a"])({url:"api/Enroll/GetRegisterConditionsList",method:"get",params:e})}function v(e){return Object(r["a"])({url:"api/Enroll/UpdateRegisterConditions",method:"post",data:e})}function D(e){return Object(r["a"])({url:"api/Enroll/EnableRegisterConditions",method:"post",data:e})}function y(e){return Object(r["a"])({url:"api/Enroll/DisableRegisterConditions",method:"post",data:e})}function E(e){return Object(r["a"])({url:"api/Enroll/GetRegisterAutoAuditList",method:"get",params:e})}function k(e){return Object(r["a"])({url:"api/Enroll/EnableRegisterAutoAudit",method:"post",data:e})}function w(e){return Object(r["a"])({url:"api/Enroll/DisableRegisterAutoAudit",method:"post",data:e})}function S(e){return Object(r["a"])({url:"api/Enroll/AddAuditTaskConfig",method:"post",data:e})}function I(e){return Object(r["a"])({url:"api/Enroll/GetAuditTaskConfig",method:"get",params:e})}function O(e){return Object(r["a"])({url:"api/Enroll/GetAuditTaskConfigList",method:"get",params:e})}function T(e){return Object(r["a"])({url:"api/Enroll/UpdateAuditTaskConfig",method:"post",data:e})}function _(e){return Object(r["a"])({url:"api/Enroll/EnableAuditTaskConfig",method:"post",data:e})}function j(e){return Object(r["a"])({url:"api/Enroll/DisableAuditTaskConfig",method:"post",data:e})}function x(e){return Object(r["a"])({url:"api/Enroll/DeleteAuditTaskConfig",method:"post",data:e})}function R(e){return Object(r["a"])({url:"api/Enroll/GetEnrollInfo",method:"get",params:e})}}}]);