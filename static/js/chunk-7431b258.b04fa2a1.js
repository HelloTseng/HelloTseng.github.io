(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7431b258"],{"069e":function(e,t,n){},7345:function(e,t,n){"use strict";var r=n("069e"),a=n.n(r);a.a},ca42:function(e,t,n){"use strict";n.d(t,"p",(function(){return a})),n.d(t,"m",(function(){return i})),n.d(t,"s",(function(){return o})),n.d(t,"q",(function(){return s})),n.d(t,"r",(function(){return l})),n.d(t,"y",(function(){return u})),n.d(t,"w",(function(){return c})),n.d(t,"x",(function(){return d})),n.d(t,"B",(function(){return f})),n.d(t,"k",(function(){return m})),n.d(t,"g",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"u",(function(){return h})),n.d(t,"v",(function(){return g})),n.d(t,"A",(function(){return D})),n.d(t,"j",(function(){return S})),n.d(t,"f",(function(){return R})),n.d(t,"l",(function(){return I})),n.d(t,"i",(function(){return v})),n.d(t,"e",(function(){return k})),n.d(t,"a",(function(){return w})),n.d(t,"n",(function(){return y})),n.d(t,"o",(function(){return O})),n.d(t,"z",(function(){return j})),n.d(t,"h",(function(){return x})),n.d(t,"d",(function(){return T})),n.d(t,"c",(function(){return C})),n.d(t,"t",(function(){return E}));var r=n("b775");function a(e){return Object(r["a"])({url:"api/Enroll/GetEnrolExamineelList",method:"get",params:e})}function i(e){return Object(r["a"])({url:"api/Enroll/GetAppointmentExamineelList",method:"get",params:e})}function o(e){return Object(r["a"])({url:"api/Enroll/GetEnrollFieldList",method:"get",params:e})}function s(e){return Object(r["a"])({url:"api/Enroll/GetEnrollField",method:"get",params:e})}function l(e){return Object(r["a"])({url:"api/Enroll/GetEnrollFieldDetails",method:"get",params:e})}function u(e){return Object(r["a"])({url:"api/Enroll/GetRegisterSettingList",method:"get",params:e})}function c(e){return Object(r["a"])({url:"api/Enroll/GetRegisterSetting",method:"get",params:e})}function d(e){return Object(r["a"])({url:"api/Enroll/GetRegisterSettingDetails",method:"get",params:e})}function f(e){return Object(r["a"])({url:"api/Enroll/UpdateRegisterSetting",method:"post",data:e})}function m(e){return Object(r["a"])({url:"api/Enroll/EnableRegisterSetting",method:"post",data:e})}function p(e){return Object(r["a"])({url:"api/Enroll/DisableRegisterSetting",method:"post",data:e})}function b(e){return Object(r["a"])({url:"api/Enroll/AddRegisterConditions",method:"post",data:e})}function h(e){return Object(r["a"])({url:"api/Enroll/GetRegisterConditions",method:"get",params:e})}function g(e){return Object(r["a"])({url:"api/Enroll/GetRegisterConditionsList",method:"get",params:e})}function D(e){return Object(r["a"])({url:"api/Enroll/UpdateRegisterConditions",method:"post",data:e})}function S(e){return Object(r["a"])({url:"api/Enroll/EnableRegisterConditions",method:"post",data:e})}function R(e){return Object(r["a"])({url:"api/Enroll/DisableRegisterConditions",method:"post",data:e})}function I(e){return Object(r["a"])({url:"api/Enroll/GetRegisterAutoAuditList",method:"get",params:e})}function v(e){return Object(r["a"])({url:"api/Enroll/EnableRegisterAutoAudit",method:"post",data:e})}function k(e){return Object(r["a"])({url:"api/Enroll/DisableRegisterAutoAudit",method:"post",data:e})}function w(e){return Object(r["a"])({url:"api/Enroll/AddAuditTaskConfig",method:"post",data:e})}function y(e){return Object(r["a"])({url:"api/Enroll/GetAuditTaskConfig",method:"get",params:e})}function O(e){return Object(r["a"])({url:"api/Enroll/GetAuditTaskConfigList",method:"get",params:e})}function j(e){return Object(r["a"])({url:"api/Enroll/UpdateAuditTaskConfig",method:"post",data:e})}function x(e){return Object(r["a"])({url:"api/Enroll/EnableAuditTaskConfig",method:"post",data:e})}function T(e){return Object(r["a"])({url:"api/Enroll/DisableAuditTaskConfig",method:"post",data:e})}function C(e){return Object(r["a"])({url:"api/Enroll/DeleteAuditTaskConfig",method:"post",data:e})}function E(e){return Object(r["a"])({url:"api/Enroll/GetEnrollInfo",method:"get",params:e})}},ce07:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",[n("el-col",{attrs:{span:4}},[n("personnel-submenu",{on:{afterGetSubList:e.afterGetSubList,afterSelect:e.afterSelect}})],1),n("el-col",{attrs:{span:20}},[n("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"index-row":e.indexRow,"table-data":e.tableData,options:e.tableOptions}},[n("el-table-column",{attrs:{slot:"IsRequired",label:"必填项",align:"center","min-width":"60"},slot:"IsRequired",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.IsRequired?n("span",{staticClass:"text-red"},[e._v("是")]):n("span",[e._v("否")])]}}])}),n("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"60"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.Status?n("span",{staticClass:"text-green"},[e._v("启用")]):n("span",{staticClass:"text-red"},[e._v("停用")])]}}])}),e.showOperate?n("el-table-column",{attrs:{slot:"operate",label:"操作","min-width":"100",align:"center"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"edit",expression:"'edit'"}],on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),r.Status?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"disable",expression:"'disable'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleSwitch(r)}}},[e._v("停用")]):n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"enable",expression:"'enable'"}],attrs:{type:"success"},on:{click:function(t){return e.handleSwitch(r)}}},[e._v("启用")])]}}],null,!1,3291665360)}):e._e()],1)],1)],1),n("el-dialog",{attrs:{title:"编辑字段",visible:e.formVisible,"destroy-on-close":""},on:{"update:visible":function(t){e.formVisible=t},closed:e.formClose}},[n("el-form",{ref:"form",attrs:{model:e.form,"label-position":"right","label-width":"120px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"字段名称"}},[e._v(e._s(e.form.ItemName))])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"数据类型"}},[e._v(e._s(e.returnTypeName(e.form.DataType)))])],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否必填项"}},[n("el-switch",{model:{value:e.form.IsRequired,callback:function(t){e.$set(e.form,"IsRequired",t)},expression:"form.IsRequired"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否启用"}},[n("el-switch",{model:{value:e.form.Status,callback:function(t){e.$set(e.form,"Status",t)},expression:"form.Status"}})],1)],1)],1),0===e.form.DataType?n("div",[n("el-form-item",{attrs:{label:"默认值"}},[n("el-input",{attrs:{placeholder:"无"},model:{value:e.form.DefaultValue,callback:function(t){e.$set(e.form,"DefaultValue",t)},expression:"form.DefaultValue"}})],1),n("el-form-item",{attrs:{label:"字段提示",prop:"Tips",rules:[{required:!0,message:"请输入提示语",trigger:"blur"}]}},[n("el-input",{attrs:{placeholder:"请输入提示语"},model:{value:e.form.Tips,callback:function(t){e.$set(e.form,"Tips",t)},expression:"form.Tips"}})],1)],1):e._e(),e.form.IsRelated||0===e.form.DataType?e._e():n("el-form-item",{attrs:{label:"选项内容",prop:"groups",rules:[{type:"array",min:e.form.DataType,required:!0,message:"请至少选择"+e.form.DataType+"个选项",trigger:"change"}]}},[n("el-select",{staticClass:"width-full",attrs:{multiple:"",filterable:"",placeholder:"可搜索"},model:{value:e.form.groups,callback:function(t){e.$set(e.form,"groups",t)},expression:"form.groups"}},e._l(e.rsDetails,(function(e){return n("el-option",{key:e.RSDID,attrs:{label:e.DetailDesc,value:e.RSDID}})})),1)],1),e.form.IsRelated?n("el-form-item",{attrs:{label:"选项内容"}},[n("table-body",{attrs:{"has-padding":!1,columns:e.innerColumns,"table-data":e.innerTableData,options:e.tableOptions}},[n("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"60"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.Status?n("span",{staticClass:"text-green"},[e._v("启用")]):e._e(),r.Status?e._e():n("span",{staticClass:"text-red"},[e._v("停用")])]}}],null,!1,788651432)}),n("el-table-column",{attrs:{slot:"operate",label:"操作","min-width":"160",align:"center"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.$index,a=t.row;return[n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.openInner(r,a)}}},[e._v(e._s(e.form.SubFieldName))]),a.Status?e._e():n("el-link",{attrs:{type:"success"},on:{click:function(t){return e.handleInnerSwitch(a)}}},[e._v("启用")]),a.Status?n("el-link",{attrs:{type:"danger"},on:{click:function(t){return e.handleInnerSwitch(a)}}},[e._v("停用")]):e._e()]}}],null,!1,2605411680)})],1)],1):e._e()],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1),n("el-dialog",{attrs:{width:"45%",title:e.form.SubFieldName,visible:e.innerVisible,"append-to-body":"","destroy-on-close":""},on:{"update:visible":function(t){e.innerVisible=t},close:e.innerClose}},[n("el-form",{ref:"innerform",attrs:{model:e.innerform,"label-position":"right","label-width":"130px"}},[n("el-form-item",{attrs:{label:e.form.currentFieldName}},[e._v(e._s(e.innerform.currentTxt))]),n("el-form-item",{attrs:{label:e.form.SubFieldName,prop:"groups",rules:[{type:"array",required:!0,message:"请至少选择1个选项",trigger:"change"}]}},[n("el-select",{staticClass:"width-full",attrs:{multiple:"",filterable:"",placeholder:"可搜索"},model:{value:e.innerform.groups,callback:function(t){e.$set(e.innerform,"groups",t)},expression:"innerform.groups"}},e._l(e.innerDetails,(function(e){return n("el-option",{key:e.RSDID,attrs:{label:e.DetailDesc,value:e.RSDID}})})),1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.innerConfirm}},[e._v("确 定")])],1)],1)],1)],1)},a=[],i=(n("4de4"),n("7db0"),n("4160"),n("caad"),n("d81d"),n("b64b"),n("d3b7"),n("2532"),n("159b"),n("96cf"),n("1da1")),o=n("5530"),s=n("2f62"),l=n("ca42"),u=n("ed08"),c={name:"FieldSettingInfo",components:{TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))},PersonnelSubmenu:function(){return n.e("chunk-4aa51700").then(n.bind(null,"68e4"))}},data:function(){var e=this;return{role:"",RSType:0,tableLoading:!1,columns:[{title:"字段名称",key:"FieldName",align:"center",minWidth:100},{title:"数据类型",key:"DataType",align:"center",minWidth:100,formatter:function(t,n,r,a){return e.returnTypeName(t.DataType)}},{title:"必填项",key:"IsRequired",slot:"IsRequired"},{title:"属性",key:"Attributes",align:"center",minWidth:100,formatter:function(e,t,n,r){return e.Attributes?"自定义":"系统默认"}},{title:"创建时间",key:"CreateDate",align:"center",minWidth:140,formatter:function(e,t,n,r){return Object(u["e"])(e.CreateDate,"{y}-{m}-{d} {h}:{i}:{s}")}},{title:"停用时间",key:"DisableDate",align:"center",minWidth:140,formatter:function(e,t,n,r){return Object(u["e"])(e.DisableDate,"{y}-{m}-{d} {h}:{i}:{s}")}},{title:"状态",key:"Status",slot:"Status"}],tableData:[],indexRow:{title:"#",align:"center",width:50},tableOptions:{border:!0,headerCellClassName:"table-header-bg"},work:{workCID:-1,gradeCID:-1},formVisible:!1,form:{RSID:0,ItemName:"",DataType:0,IsRelated:!1,IsRequired:!1,Status:!1,DefaultValue:"",Tips:"",groups:[],SubFieldName:"",currentFieldName:""},rsDetails:[],innerVisible:!1,innerColumns:[{title:"选项名称",key:"DetailDesc",align:"center",minWidth:100},{slot:"Status"}],innerTableData:[],innerDetails:[],innerform:{currentIndex:0,currentTxt:"",groups:[]}}},computed:Object(o["a"])(Object(o["a"])({},Object(s["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{showOperate:function(){var e=["Guidance"];return e.includes(this.role)}}),watch:{"work.gradeCID":{handler:function(e){var t={workCID:this.work.workCID,gradeCID:e,RSType:this.RSType};this.fetchData(t)}}},created:function(){this.role=this.$store.getters.mainRoles},methods:{fetchData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.tableLoading){n.next=2;break}return n.abrupt("return");case 2:return t.tableLoading=!0,n.next=5,Object(l["y"])(e);case 5:r=n.sent,t.tableLoading=!1,r.success&&(t.tableData=r.response);case 8:case"end":return n.stop()}}),n)})))()},doRefresh:function(){var e=this.work,t=e.workCID,n=e.gradeCID,r=this.RSType,a={workCID:t,gradeCID:n,RSType:r};this.fetchData(a)},afterGetSubList:function(e){this.work={workCID:e.activeID,gradeCID:e.activeSubID}},afterSelect:function(e){this.work={workCID:e.activeID,gradeCID:e.activeSubID}},handleEdit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.form.currentFieldName=e.FieldName,n.next=3,Object(l["w"])({RSId:e.RSID});case 3:r=n.sent,r.success&&(a=r.response,i=[],a.RSDetails.forEach((function(e){e.Status&&i.push(e.RSDID)})),t.form=Object(o["a"])(Object(o["a"])({},t.form),{},{RSID:a.RSID,ItemName:a.ItemName,DataType:a.DataType,IsRelated:a.IsRelated,IsRequired:a.IsRequired,Status:a.Status,DefaultValue:a.DefaultValue,Tips:a.Tips,groups:i,SubFieldName:a.SubFieldName}),a.IsRelated?t.innerTableData=a.RSDetails:t.rsDetails=a.RSDetails,t.formVisible=!0);case 5:case"end":return n.stop()}}),n)})))()},handleSwitch:function(e){var t=this,n=e.Status?"停用":"启用",r=e.Status?"text-red":"text-green",a=e.Status?"不显示":"显示",i=this.$createElement;this.$msgbox({title:"提示",message:i("p",null,[i("span",null,"您确定要"),i("span",{class:r},"".concat(n)),i("span",null,"该字段"),i("i",{class:"text-red"},"【".concat(e.FieldName,"】")),i("span",null,"吗？该字段在【在线报名】功能中将"),i("span",{class:r},"".concat(a))]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(n,r,a){"confirm"===n?(r.confirmButtonLoading=!0,r.confirmButtonText="提交中...",e.Status?Object(l["g"])({RSId:e.RSID}).then((function(n){a(),e.Status=!e.Status,r.confirmButtonLoading=!1,t.$notify({title:"成功",message:n.msg,type:"success"})})).catch((function(e){r.confirmButtonLoading=!1,a(e)})):Object(l["k"])({RSId:e.RSID}).then((function(n){a(),e.Status=!e.Status,r.confirmButtonLoading=!1,t.$notify({title:"成功",message:n.msg,type:"success"})})).catch((function(e){r.confirmButtonLoading=!1,a(e)}))):a()}}).then((function(e){console.log("action",e)}))},handleInnerSwitch:function(e){e.Status=!e.Status},openInner:function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.children&&t.children.length&&(n.innerform.groups=t.children),n.innerform.currentTxt=t.DetailDesc,n.innerform.currentIndex=e,r.next=5,Object(l["x"])({RSDId:t.RSDID});case 5:a=r.sent,a.success&&(i=[],a.response.map((function(e){e.Status&&i.push(e.RSDID)})),n.innerVisible=!0,n.innerDetails=a.response,n.innerform.groups=i);case 7:case"end":return r.stop()}}),r)})))()},innerClose:function(){this.innerVisible=!1,this.innerform={currentIndex:0,currentTxt:"",groups:[]}},innerConfirm:function(){var e=this;this.$refs.innerform.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var r,a,i,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:r=e.innerform,a=r.currentIndex,i=r.groups,s=e.innerDetails,l=s.filter((function(e){return i.includes(e.RSDID)})).map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{Status:!0})})),e.innerTableData[a].children=l,e.innerClose();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},formClose:function(){this.formVisible=!1,this.form={RSID:0,ItemName:"",DataType:0,IsRelated:!1,IsRequired:!1,Status:!1,DefaultValue:"",Tips:"",groups:[],SubFieldName:"",currentFieldName:""},this.innerform={currentIndex:0,currentTxt:"",groups:[]},this.innerTableData=[]},submitForm:function(){var e=this;this.$refs.form.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var r,a,i,s,u,c,d,f,m,p,b,h,g,D;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return r=e.form,a=r.RSID,i=r.Tips,s=r.IsRequired,u=r.Status,c=r.DataType,d=r.DefaultValue,f=r.groups,m=r.IsRelated,p=e.rsDetails,b=e.innerTableData,h={RSID:a,IsRequired:s,Status:u},0===c?h=Object(o["a"])(Object(o["a"])({},h),{},{Tips:i,DefaultValue:d,RSDetails:[]}):(g=[],m?b.forEach((function(e){(e.children&&e.children.length||e.Status)&&g.push({RSDID:e.RSDID,Status:e.Status,children:e.children})})):f.forEach((function(e){var t=p.find((function(t){return t.RSDID===e}));Object.keys(t).length&&g.push({RSDID:t.RSDID,Status:!0,children:[]})})),h=Object(o["a"])(Object(o["a"])({},h),{},{RSDetails:g})),t.next=7,Object(l["B"])(h);case 7:D=t.sent,D.success&&(e.$notify({title:"成功",message:D.msg,type:"success"}),e.formClose(),e.doRefresh());case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},returnTypeName:function(e){var t="";switch(e){case 0:t="文本";break;case 1:t="单选";break;case 2:t="多选";break;case 3:t="图片";break;case 4:t="文件";break}return t}}},d=c,f=(n("7345"),n("2877")),m=Object(f["a"])(d,r,a,!1,null,"51289cc3",null);t["default"]=m.exports}}]);