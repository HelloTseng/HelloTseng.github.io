(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f3edc60"],{9182:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-row",[r("el-col",{attrs:{span:4}},[r("personnel-submenu",{on:{afterGetSubList:e.afterGetSubList,afterSelect:e.afterSelect}})],1),r("el-col",{attrs:{span:20}},[r("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"index-row":e.indexRow,"table-data":e.tableData,options:e.tableOptions}},[r("el-table-column",{attrs:{slot:"IsRequired",label:"必填项",align:"center","min-width":"60"},slot:"IsRequired",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.IsRequired?r("span",{staticClass:"text-red"},[e._v("是")]):r("span",[e._v("否")])]}}])}),r("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"60"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.Status?r("span",{staticClass:"text-green"},[e._v("启用")]):r("span",{staticClass:"text-red"},[e._v("停用")])]}}])}),e.showOperate?r("el-table-column",{attrs:{slot:"operate",label:"操作","min-width":"100",align:"center"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"edit",expression:"'edit'"}],on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),n.Status?e._e():r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"enable",expression:"'enable'"}],attrs:{type:"success"},on:{click:function(t){return e.handleSwitch(n)}}},[e._v("启用")]),n.Status?r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"disable",expression:"'disable'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleSwitch(n)}}},[e._v("停用")]):e._e()]}}],null,!1,56364712)}):e._e()],1)],1)],1),r("el-dialog",{attrs:{title:"编辑字段",visible:e.formVisible},on:{"update:visible":function(t){e.formVisible=t},close:e.formClose}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-position":"right","label-width":"120px"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"字段名称"}},[e._v(e._s(e.form.ItemName))])],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"数据类型"}},[e._v(e._s(e.returnTypeName(e.form.DataType)))])],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"是否必填项"}},[r("el-switch",{model:{value:e.form.IsRequired,callback:function(t){e.$set(e.form,"IsRequired",t)},expression:"form.IsRequired"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"是否启用"}},[r("el-switch",{model:{value:e.form.Status,callback:function(t){e.$set(e.form,"Status",t)},expression:"form.Status"}})],1)],1)],1),e._l(e.RSDetails,(function(t,n){return[r("el-form-item",{key:n,attrs:{label:1===t.DetailType?"格式要求":"底色要求",prop:"groups["+n+"]",rules:[{type:"array",required:!0,message:"请至少选择一个选项",trigger:"change"}]}},[r("el-select",{staticClass:"width-full",attrs:{multiple:"",filterable:"",placeholder:"可搜索"},model:{value:e.form.groups[n],callback:function(t){e.$set(e.form.groups,n,t)},expression:"form.groups[index]"}},e._l(t.children,(function(e){return r("el-option",{key:e.RSDID,attrs:{label:e.DetailDesc,value:e.RSDID}})})),1)],1)]})),3===e.form.DataType?r("el-form-item",{attrs:{label:"尺寸要求",required:""}},[r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{prop:"Wide",rules:[{required:!0,message:"请输入",trigger:"blur"},{validator:e.greaterThanZero,trigger:"blur"}]}},[r("el-input",{model:{value:e.form.Wide,callback:function(t){e.$set(e.form,"Wide",t)},expression:"form.Wide"}},[r("template",{slot:"append"},[e._v("像素(宽)")])],2)],1)],1),r("el-col",{staticClass:"line",attrs:{span:2}},[e._v("x")]),r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{prop:"High",rules:[{required:!0,message:"请输入",trigger:"blur"},{validator:e.greaterThanZero,trigger:"blur"}]}},[r("el-input",{model:{value:e.form.High,callback:function(t){e.$set(e.form,"High",t)},expression:"form.High"}},[r("template",{slot:"append"},[e._v("像素(高)")])],2)],1)],1)],1):e._e(),3===e.form.DataType?r("el-form-item",{attrs:{label:"文件大小",required:""}},[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{prop:"Min",rules:[{required:!0,message:"请输入",trigger:"blur"},{validator:e.greaterThanZero,trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"最小值"},model:{value:e.form.Min,callback:function(t){e.$set(e.form,"Min",t)},expression:"form.Min"}},[r("template",{slot:"append"},[e._v("KB")])],2)],1)],1),r("el-col",{staticClass:"line",attrs:{span:4}},[e._v("≤ 文件大小 ≤")]),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{prop:"Max",rules:[{required:!0,message:"请输入",trigger:"blur"},{validator:e.greaterThanZero,trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"最大值"},model:{value:e.form.Max,callback:function(t){e.$set(e.form,"Max",t)},expression:"form.Max"}},[r("template",{slot:"append"},[e._v("KB")])],2)],1)],1)],1):e._e(),4===e.form.DataType?r("el-form-item",{attrs:{label:"文件大小",prop:"Max",rules:[{required:!0,message:"请输入",trigger:"blur"},{validator:e.greaterThanZero,trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.Max,callback:function(t){e.$set(e.form,"Max",t)},expression:"form.Max"}},[r("template",{slot:"prepend"},[e._v("不超过")]),r("template",{slot:"append"},[e._v("MB")])],2)],1):e._e(),r("el-form-item",{attrs:{label:"字段提示",prop:"Tips",rules:[{required:!0,message:"请输入提示语",trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:"请输入提示语"},model:{value:e.form.Tips,callback:function(t){e.$set(e.form,"Tips",t)},expression:"form.Tips"}})],1)],2),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},a=[],i=(r("4de4"),r("4160"),r("caad"),r("d81d"),r("d3b7"),r("2532"),r("159b"),r("96cf"),r("1da1")),o=r("5530"),s=r("2f62"),l=r("ca42"),u=r("ed08"),c=r("61f7"),d={name:"FieldSettingContent",components:{TableBody:function(){return r.e("chunk-79d593e5").then(r.bind(null,"2c21"))},PersonnelSubmenu:function(){return r.e("chunk-4aa51700").then(r.bind(null,"68e4"))}},data:function(){var e=this;return{role:"",RSType:1,tableLoading:!1,columns:[{title:"字段名称",key:"FieldName",align:"center",minWidth:100},{title:"数据类型",key:"DataType",align:"center",minWidth:80,formatter:function(t,r,n,a){return e.returnTypeName(t.DataType)}},{title:"文件要求",key:"FileRequire",headerAlign:"center",minWidth:300},{title:"必填项",key:"IsRequired",slot:"IsRequired"},{title:"属性",key:"Attributes",align:"center",minWidth:100,formatter:function(e,t,r,n){return e.Attributes?"自定义":"系统默认"}},{title:"创建时间",key:"CreateDate",align:"center",minWidth:140,formatter:function(e,t,r,n){return Object(u["e"])(e.CreateDate,"{y}-{m}-{d} {h}:{i}:{s}")}},{title:"停用时间",key:"DisableDate",align:"center",minWidth:140,formatter:function(e,t,r,n){return Object(u["e"])(e.DisableDate,"{y}-{m}-{d} {h}:{i}:{s}")}},{title:"状态",key:"Status",slot:"Status"}],tableData:[],indexRow:{title:"#",align:"center",width:50},tableOptions:{border:!0,headerCellClassName:"table-header-bg"},work:{workCID:-1,gradeCID:-1},formVisible:!1,form:{RSID:0,ItemName:"",DataType:0,IsRequired:!1,Status:!1,Tips:"",Wide:"",High:"",Max:"",Min:"",groups:[]},RSDetails:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(s["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{showOperate:function(){var e=["Guidance"];return e.includes(this.role)}}),watch:{"work.gradeCID":{handler:function(e){var t={workCID:this.work.workCID,gradeCID:e,RSType:this.RSType};this.fetchData(t)}}},created:function(){this.role=this.$store.getters.mainRoles},methods:{fetchData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.tableLoading=!0,r.next=3,Object(l["y"])(e);case 3:n=r.sent,t.tableLoading=!1,n.success&&(t.tableData=n.response);case 6:case"end":return r.stop()}}),r)})))()},doRefresh:function(){var e=this.work,t=e.workCID,r=e.gradeCID,n=this.RSType,a={workCID:t,gradeCID:r,RSType:n};this.fetchData(a)},afterGetSubList:function(e){this.work={workCID:e.activeID,gradeCID:e.activeSubID}},afterSelect:function(e){this.work={workCID:e.activeID,gradeCID:e.activeSubID}},handleEdit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(l["w"])({RSId:e.RSID});case 2:n=r.sent,n.success&&(console.log("res",n.response),a=n.response,i=[],a.RSDetails.forEach((function(e,t){e.children&&e.children.length&&(i[t]=[],e.children.forEach((function(e){e.Status&&i[t].push(e.RSDID)})))})),t.form=Object(o["a"])(Object(o["a"])({},t.form),{},{RSID:a.RSID,ItemName:a.ItemName,DataType:a.DataType,IsRequired:a.IsRequired,Status:a.Status,Wide:a.Wide,High:a.High,Min:a.Min,Max:a.Max,Tips:a.Tips,groups:i}),t.RSDetails=a.RSDetails,t.formVisible=!0);case 4:case"end":return r.stop()}}),r)})))()},handleSwitch:function(e){var t=this,r=e.Status?"停用":"启用",n=e.Status?"text-red":"text-green",a=e.Status?"不显示":"显示",i=this.$createElement;this.$msgbox({title:"提示",message:i("p",null,[i("span",null,"您确定要"),i("span",{class:n},"".concat(r)),i("span",null,"该字段"),i("i",{class:"text-red"},"【".concat(e.FieldName,"】")),i("span",null,"吗？该字段在【在线报名】功能中将"),i("span",{class:n},"".concat(a))]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(r,n,a){"confirm"===r?(n.confirmButtonLoading=!0,n.confirmButtonText="提交中...",e.Status?Object(l["g"])({RSId:e.RSID}).then((function(r){a(),e.Status=!e.Status,n.confirmButtonLoading=!1,t.$notify({title:"成功",message:r.msg,type:"success"})})).catch((function(e){n.confirmButtonLoading=!1,a(e)})):Object(l["k"])({RSId:e.RSID}).then((function(r){a(),e.Status=!e.Status,n.confirmButtonLoading=!1,t.$notify({title:"成功",message:r.msg,type:"success"})})).catch((function(e){n.confirmButtonLoading=!1,a(e)}))):a()}}).then((function(e){console.log("action",e)}))},formClose:function(){this.formVisible=!1,this.form={RSID:0,ItemName:"",DataType:0,IsRequired:!1,Status:!1,Tips:"",Wide:"",High:"",Max:"",Min:"",groups:[]},this.RSDetails=[]},submitForm:function(){var e=this;this.$refs.form.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n,a,i,s,u,c,d,f,m,p,b,g,h,S,D;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return n=e.form,a=n.RSID,i=n.DataType,s=n.IsRequired,u=n.Status,c=n.Tips,d=n.Wide,f=n.High,m=n.Max,p=n.Min,b=n.groups,g=e.RSDetails,h=[],g.forEach((function(e,t){e.children&&e.children.length&&h.push({DetailType:e.DetailType,RSDID:e.RSDID,Status:e.Status,children:e.children.filter((function(e){return b[t].includes(e.RSDID)})).map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{Status:!0})}))})})),S={RSID:a,IsRequired:s,Status:u,Max:m,Tips:c,RSDetails:h},3===i&&(S=Object(o["a"])(Object(o["a"])({},S),{},{Wide:d,High:f,Min:p})),t.next=9,Object(l["B"])(S);case 9:D=t.sent,D.success&&(e.$notify({title:"成功",message:D.msg,type:"success"}),e.formClose(),e.doRefresh());case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},returnTypeName:function(e){var t="";switch(e){case 0:t="文本";break;case 1:t="单选";break;case 2:t="多选";break;case 3:t="图片";break;case 4:t="文件";break}return t},greaterThanZero:function(e,t,r){return Object(c["d"])(t)?r():r(new Error("须大于0的正整数"))}}},f=d,m=(r("977d"),r("2877")),p=Object(m["a"])(f,n,a,!1,null,"ffc132fa",null);t["default"]=p.exports},"977d":function(e,t,r){"use strict";var n=r("e103"),a=r.n(n);a.a},ca42:function(e,t,r){"use strict";r.d(t,"p",(function(){return a})),r.d(t,"m",(function(){return i})),r.d(t,"s",(function(){return o})),r.d(t,"q",(function(){return s})),r.d(t,"r",(function(){return l})),r.d(t,"y",(function(){return u})),r.d(t,"w",(function(){return c})),r.d(t,"x",(function(){return d})),r.d(t,"B",(function(){return f})),r.d(t,"k",(function(){return m})),r.d(t,"g",(function(){return p})),r.d(t,"b",(function(){return b})),r.d(t,"u",(function(){return g})),r.d(t,"v",(function(){return h})),r.d(t,"A",(function(){return S})),r.d(t,"j",(function(){return D})),r.d(t,"f",(function(){return v})),r.d(t,"l",(function(){return R})),r.d(t,"i",(function(){return k})),r.d(t,"e",(function(){return w})),r.d(t,"a",(function(){return I})),r.d(t,"n",(function(){return y})),r.d(t,"o",(function(){return x})),r.d(t,"z",(function(){return O})),r.d(t,"h",(function(){return j})),r.d(t,"d",(function(){return T})),r.d(t,"c",(function(){return E})),r.d(t,"t",(function(){return C}));var n=r("b775");function a(e){return Object(n["a"])({url:"api/Enroll/GetEnrolExamineelList",method:"get",params:e})}function i(e){return Object(n["a"])({url:"api/Enroll/GetAppointmentExamineelList",method:"get",params:e})}function o(e){return Object(n["a"])({url:"api/Enroll/GetEnrollFieldList",method:"get",params:e})}function s(e){return Object(n["a"])({url:"api/Enroll/GetEnrollField",method:"get",params:e})}function l(e){return Object(n["a"])({url:"api/Enroll/GetEnrollFieldDetails",method:"get",params:e})}function u(e){return Object(n["a"])({url:"api/Enroll/GetRegisterSettingList",method:"get",params:e})}function c(e){return Object(n["a"])({url:"api/Enroll/GetRegisterSetting",method:"get",params:e})}function d(e){return Object(n["a"])({url:"api/Enroll/GetRegisterSettingDetails",method:"get",params:e})}function f(e){return Object(n["a"])({url:"api/Enroll/UpdateRegisterSetting",method:"post",data:e})}function m(e){return Object(n["a"])({url:"api/Enroll/EnableRegisterSetting",method:"post",data:e})}function p(e){return Object(n["a"])({url:"api/Enroll/DisableRegisterSetting",method:"post",data:e})}function b(e){return Object(n["a"])({url:"api/Enroll/AddRegisterConditions",method:"post",data:e})}function g(e){return Object(n["a"])({url:"api/Enroll/GetRegisterConditions",method:"get",params:e})}function h(e){return Object(n["a"])({url:"api/Enroll/GetRegisterConditionsList",method:"get",params:e})}function S(e){return Object(n["a"])({url:"api/Enroll/UpdateRegisterConditions",method:"post",data:e})}function D(e){return Object(n["a"])({url:"api/Enroll/EnableRegisterConditions",method:"post",data:e})}function v(e){return Object(n["a"])({url:"api/Enroll/DisableRegisterConditions",method:"post",data:e})}function R(e){return Object(n["a"])({url:"api/Enroll/GetRegisterAutoAuditList",method:"get",params:e})}function k(e){return Object(n["a"])({url:"api/Enroll/EnableRegisterAutoAudit",method:"post",data:e})}function w(e){return Object(n["a"])({url:"api/Enroll/DisableRegisterAutoAudit",method:"post",data:e})}function I(e){return Object(n["a"])({url:"api/Enroll/AddAuditTaskConfig",method:"post",data:e})}function y(e){return Object(n["a"])({url:"api/Enroll/GetAuditTaskConfig",method:"get",params:e})}function x(e){return Object(n["a"])({url:"api/Enroll/GetAuditTaskConfigList",method:"get",params:e})}function O(e){return Object(n["a"])({url:"api/Enroll/UpdateAuditTaskConfig",method:"post",data:e})}function j(e){return Object(n["a"])({url:"api/Enroll/EnableAuditTaskConfig",method:"post",data:e})}function T(e){return Object(n["a"])({url:"api/Enroll/DisableAuditTaskConfig",method:"post",data:e})}function E(e){return Object(n["a"])({url:"api/Enroll/DeleteAuditTaskConfig",method:"post",data:e})}function C(e){return Object(n["a"])({url:"api/Enroll/GetEnrollInfo",method:"get",params:e})}},e103:function(e,t,r){}}]);