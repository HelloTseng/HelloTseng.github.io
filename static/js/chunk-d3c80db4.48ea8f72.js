(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3c80db4"],{"20d6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",[n("el-col",{attrs:{span:4}},[n("personnel-submenu",{on:{afterGetSubList:e.afterGetSubList,afterSelect:e.afterSelect}})],1),n("el-col",{attrs:{span:20}},[n("div",{directives:[{name:"permission",rawName:"v-permission",value:"create",expression:"'create'"}],staticClass:"search-wrapper",attrs:{flex:"main:right"}},[n("el-button",{attrs:{type:"danger",size:e.tableSize},on:{click:e.doCreate}},[e._v("添加报名条件")])],1),n("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,pagination:e.pagination},on:{"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange}},[n("el-table-column",{attrs:{slot:"Index",label:"#",width:"60",align:"center",type:"index"},slot:"Index",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(e._s(n.Index))]}}])}),n("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"60"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.Status?n("span",{staticClass:"text-green"},[e._v("启用")]):e._e(),a.Status?e._e():n("span",{staticClass:"text-red"},[e._v("停用")])]}}])}),e.showOperate?n("el-table-column",{attrs:{slot:"operate",label:"操作","min-width":"100",align:"center"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"edit",expression:"'edit'"}],on:{click:function(t){return e.handleEdit(a)}}},[e._v("修改")]),a.Status?e._e():n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"enable",expression:"'enable'"}],attrs:{type:"primary"},on:{click:function(t){return e.handleSwitch(a)}}},[e._v("启用")]),a.Status?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"disable",expression:"'disable'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleSwitch(a)}}},[e._v("停用")]):e._e()]}}],null,!1,38677879)}):e._e()],1)],1)],1),n("el-dialog",{attrs:{title:(e.isEdit?"编辑":"添加")+"报名条件",visible:e.formVisible},on:{"update:visible":function(t){e.formVisible=t},close:e.formClose}},[n("el-form",{ref:"form",attrs:{model:e.form,"label-position":"right","label-width":"120px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"应用工种"}},[e._v(e._s(e.work.workName))])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"技能等级"}},[e._v(e._s(e.work.gradeName))])],1)],1),n("el-divider",{staticClass:"mt-0"}),n("el-form-item",{attrs:{label:"年龄要求"}},[n("el-input",{attrs:{readonly:""},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",e._n(t))},expression:"form.age"}},[n("template",{slot:"prepend"},[e._v("报名时需至少满")]),n("template",{slot:"append"},[e._v("周岁")])],2)],1),n("el-form-item",{attrs:{label:"学历要求"}},[n("div",{attrs:{flex:"cross:center"}},[n("el-select",{model:{value:e.form.culture,callback:function(t){e.$set(e.form,"culture",t)},expression:"form.culture"}},e._l(e.CultureOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.form.culture>=2,expression:"form.culture>=2"}],staticClass:"ml-10",attrs:{border:""},model:{value:e.form.equivalentCulture,callback:function(t){e.$set(e.form,"equivalentCulture",t)},expression:"form.equivalentCulture"}},[e._v("或同等学历")])],1)]),n("el-form-item",{attrs:{label:"专业要求"}},[n("el-checkbox",{attrs:{border:""},model:{value:e.form.speciality,callback:function(t){e.$set(e.form,"speciality",t)},expression:"form.speciality"}},[e._v("符合本专业或相关专业")])],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.currentSubActive>0,expression:"currentSubActive>0"}],attrs:{label:"资格要求"}},[n("el-radio-group",{model:{value:e.form.qualification,callback:function(t){e.$set(e.form,"qualification",t)},expression:"form.qualification"}},[n("el-radio",{attrs:{label:1,border:""}},[e._v("取得本职业"+e._s(e.str)+"资格证书")]),n("el-radio",{attrs:{label:2,border:""}},[e._v("取得相关职业"+e._s(e.str)+"资格证书")]),n("el-radio",{attrs:{label:3,border:""}},[e._v("取得本职业"+e._s(e.str)+"资格证书 及 取得相关职业"+e._s(e.str)+"资格证书")])],1)],1),n("el-form-item",{attrs:{label:"职业要求"}},[n("el-checkbox",{attrs:{border:""},on:{change:e.changeProfessional},model:{value:e.form.professional,callback:function(t){e.$set(e.form,"professional",t)},expression:"form.professional"}},[e._v("从事本职业或相关职业")])],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.form.professional,expression:"form.professional"}],attrs:{label:"职业年限"}},[n("div",{attrs:{flex:""}},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeYearType},model:{value:e.form.workingYearType,callback:function(t){e.$set(e.form,"workingYearType",t)},expression:"form.workingYearType"}},e._l(e.YearTypeOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("el-input",{directives:[{name:"show",rawName:"v-show",value:2!==e.form.workingYearUnit,expression:"form.workingYearUnit !==2"}],attrs:{"flex-box":"1"},on:{input:e.checkWorkingYear},model:{value:e.form.workingYear,callback:function(t){e.$set(e.form,"workingYear",e._n(t))},expression:"form.workingYear"}}),n("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeYearUnit},model:{value:e.form.workingYearUnit,callback:function(t){e.$set(e.form,"workingYearUnit",t)},expression:"form.workingYearUnit"}},e._l(e.YearUnitOptions[e.form.workingYearType],(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),n("el-form-item",{attrs:{label:"是否启用"}},[n("el-switch",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-popover",{attrs:{placement:"top",width:"160"},model:{value:e.popoverVisible,callback:function(t){e.popoverVisible=t},expression:"popoverVisible"}},[n("p",[e._v("请确认报名条件添加无误，系统将根据此报名条件对考生报名进行自动审查！")]),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.popoverVisible=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submitForm}},[e._v("确定")])],1),n("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v("提交")])],1)],1)],1)],1)},r=[],i=(n("4160"),n("caad"),n("a9e3"),n("d3b7"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("96cf"),n("1da1")),o=n("5530"),l=n("2f62"),s=n("ca42"),u=n("cf45"),c={name:"ConditionSetting",components:{TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))},PersonnelSubmenu:function(){return n.e("chunk-4aa51700").then(n.bind(null,"68e4"))}},data:function(){return{role:"",tableLoading:!1,columns:[{title:"#",key:"Index",slot:"Index"},{title:"条件类型",key:"Type",align:"center",minWidth:100},{title:"条件明细",key:"Content",align:"center",minWidth:300},{title:"状态",key:"Status",slot:"Status"}],tableData:[],tableOptions:{border:!0,headerCellClassName:"table-header-bg",spanMethod:function(e){var t=e.row,n=(e.column,e.rowIndex),a=e.columnIndex;if(0===a||3===a||4===a)return(n-t.supLen)%t.len===0?{rowspan:t.len,colspan:1}:{rowspan:0,colspan:0}}},pagination:{currentPage:1,pageSize:20,total:0},isEdit:!1,formVisible:!1,work:{workCID:-1,workName:"",gradeCID:-1,gradeName:""},workList:[],initAge:18,form:{rcsid:0,age:18,culture:2,workingYearType:0,workingYear:"",workingYearUnit:0,equivalentCulture:!1,speciality:!1,qualification:0,professional:!1,status:!1},str:"",currentSubActive:0,popoverVisible:!1,CultureOptions:u["b"],YearTypeOptions:[{value:0,label:"取得资格证书后"},{value:1,label:"累积"},{value:2,label:"学徒期满"}],YearUnitOptions:[[{value:0,label:"月(含以上)"},{value:1,label:"年(含以上)"}],[{value:0,label:"月(含以上)"},{value:1,label:"年(含以上)"}],[{value:0,label:"月(含以上)"},{value:1,label:"年(含以上)"},{value:2,label:"不限制"}]]}},computed:Object(o["a"])(Object(o["a"])({},Object(l["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{showOperate:function(){var e=["Guidance"];return e.includes(this.role)}}),watch:{"work.gradeCID":{handler:function(e){var t=this.work.workCID,n=this.pagination.pageSize,a={workCID:t,gradeCID:e,pageIndex:1,pageSize:n};this.fetchData(a)}}},created:function(){this.role=this.$store.getters.mainRoles},methods:{fetchData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.tableLoading=!0,n.next=3,Object(s["v"])(e);case 3:a=n.sent,t.tableLoading=!1,a.success&&(r=[],i=0,a.data.forEach((function(e,t){t&&(i+=a.data[t-1].ConditionsList.length),e.ConditionsList.forEach((function(n){r.push({Index:t+1,RCSID:e.RCSID,Status:e.Status,Type:n.Type,Content:n.Content,len:e.ConditionsList.length,supLen:i})}))})),t.tableData=r,t.pagination=Object(o["a"])(Object(o["a"])({},t.pagination),{},{currentPage:a.page,total:a.dataCount}));case 6:case"end":return n.stop()}}),n)})))()},doRefresh:function(){var e=this.work,t=e.workCID,n=e.gradeCID,a=this.pagination,r=a.currentPage,i=a.pageSize,o={workCID:t,gradeCID:n,pageIndex:r,pageSize:i};this.fetchData(o)},afterGetSubList:function(e){this.work={workCID:e.activeID,workName:e.activeName,gradeCID:e.activeSubID,gradeName:e.activeSubName},this.workList=e.submenuList,this.calcStr(e.submenuList,e.submenuActive)},afterSelect:function(e){this.work={workCID:e.activeID,workName:e.activeName,gradeCID:e.activeSubID,gradeName:e.activeSubName},this.calcStr(this.workList,e.submenuActive)},calcStr:function(e,t){var n=JSON.parse(JSON.stringify(e)),a=t.split("-"),r=Number(a[0]),i=Number(a[1]),o="";i&&(o=n[r].SubLst[i-1].Name),this.str=o,this.currentSubActive=i},handleSwitch:function(e){var t=this,n=e.Status?"停用":"启用",a=e.Status?"text-red":"text-green",r=e.Status?"不使用":"使用",i=this.$createElement;this.$msgbox({title:"提示",message:i("p",null,[i("span",null,"您确定要"),i("span",{class:a},"".concat(n)),i("i",{class:"text-red"},"【序号为".concat(e.Index,"的报名条件)】")),i("span",null,"吗？"),i("span",{class:a},"".concat(n)),i("span",null,"后系统将".concat(r,"该条件对考生报名进行审查！"))]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(n,a,r){"confirm"===n?(a.confirmButtonLoading=!0,a.confirmButtonText="提交中...",e.Status?Object(s["f"])({RCSId:e.RCSID}).then((function(n){r(),e.Status=!e.Status,a.confirmButtonLoading=!1,t.$notify({title:"成功",message:n.msg,type:"success"})})).catch((function(e){a.confirmButtonLoading=!1,r(e)})):Object(s["j"])({RCSId:e.RCSID}).then((function(n){r(),e.Status=!e.Status,a.confirmButtonLoading=!1,t.$notify({title:"成功",message:n.msg,type:"success"})})).catch((function(e){a.confirmButtonLoading=!1,r(e)}))):r()}}).then((function(e){console.log("action",e)}))},doCreate:function(){this.isEdit=!1,this.formVisible=!0},handleEdit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["u"])({RCSId:e.RCSID});case 2:a=n.sent,a.success&&(r=a.response,t.form={rcsid:r.RCSID,age:r.Age,culture:r.Culture,workingYearType:r.WorkingYearType,workingYear:r.WorkingYear?r.WorkingYear:"",workingYearUnit:r.WorkingYearUnit,equivalentCulture:r.EquivalentCulture,speciality:r.Speciality,qualification:r.Qualification,professional:r.Professional,status:r.Status},t.isEdit=!0,t.formVisible=!0);case 4:case"end":return n.stop()}}),n)})))()},formClose:function(){this.formVisible=!1,this.form={age:18,culture:2,workingYearType:0,workingYear:"",workingYearUnit:0,equivalentCulture:!1,speciality:!1,qualification:0,professional:!1}},submitForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,o,l,u,c,f,d,p,m,b,g,v,h,k;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.form,a=n.rcsid,r=n.age,i=n.culture,o=n.workingYearType,l=n.workingYear,u=n.workingYearUnit,c=n.equivalentCulture,f=n.speciality,d=n.qualification,p=n.professional,m=n.status,b=e.work,g=b.workCID,v=b.gradeCID,2===u||l){t.next=4;break}return e.$message.error("请填写职业年限"),t.abrupt("return");case 4:if(h={rcsid:a,workCID:g,gradeCID:v,age:2===u?18:r,culture:i,equivalentCulture:!(i<2)&&c,speciality:f,qualification:d,professional:p,workingYearType:o,workingYear:l,workingYearUnit:u,status:m},!e.isEdit){t.next=11;break}return t.next=8,Object(s["A"])(h);case 8:k=t.sent,t.next=14;break;case 11:return t.next=13,Object(s["b"])(h);case 13:k=t.sent;case 14:k.success&&(e.$notify({title:"成功",message:k.msg,type:"success"}),e.formClose(),e.doRefresh());case 15:case"end":return t.stop()}}),t)})))()},calcAge:function(e,t,n){var a=e;return 0===n?a+=Math.floor(t/12):1===n&&(a+=Number(t)),a},changeProfessional:function(e){var t=this.initAge;if(e){var n=this.form,a=n.workingYear,r=n.workingYearUnit;t=this.calcAge(t,a,r)}this.form.age=t},checkWorkingYear:function(e){var t=e.replace(/[^\d]/g,"");this.form.age=this.calcAge(this.initAge,t,this.form.workingYearUnit),this.form.workingYear=t},changeYearType:function(e){2!==e&&2===this.form.workingYearUnit&&(this.form.workingYearUnit=0,this.form.age=this.calcAge(this.initAge,this.form.workingYear,0))},changeYearUnit:function(e){var t=this.initAge;2!==e&&(t=this.calcAge(t,this.form.workingYear,e)),this.form.age=t},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()}}},f=c,d=(n("bf1c"),n("2877")),p=Object(d["a"])(f,a,r,!1,null,"e1cf9c1c",null);t["default"]=p.exports},"96d2":function(e,t,n){},bf1c:function(e,t,n){"use strict";var a=n("96d2"),r=n.n(a);r.a},ca42:function(e,t,n){"use strict";n.d(t,"p",(function(){return r})),n.d(t,"m",(function(){return i})),n.d(t,"s",(function(){return o})),n.d(t,"q",(function(){return l})),n.d(t,"r",(function(){return s})),n.d(t,"y",(function(){return u})),n.d(t,"w",(function(){return c})),n.d(t,"x",(function(){return f})),n.d(t,"B",(function(){return d})),n.d(t,"k",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"u",(function(){return g})),n.d(t,"v",(function(){return v})),n.d(t,"A",(function(){return h})),n.d(t,"j",(function(){return k})),n.d(t,"f",(function(){return w})),n.d(t,"l",(function(){return C})),n.d(t,"i",(function(){return S})),n.d(t,"e",(function(){return x})),n.d(t,"a",(function(){return y})),n.d(t,"n",(function(){return O})),n.d(t,"o",(function(){return E})),n.d(t,"z",(function(){return Y})),n.d(t,"h",(function(){return D})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return I})),n.d(t,"t",(function(){return _}));var a=n("b775");function r(e){return Object(a["a"])({url:"api/Enroll/GetEnrolExamineelList",method:"get",params:e})}function i(e){return Object(a["a"])({url:"api/Enroll/GetAppointmentExamineelList",method:"get",params:e})}function o(e){return Object(a["a"])({url:"api/Enroll/GetEnrollFieldList",method:"get",params:e})}function l(e){return Object(a["a"])({url:"api/Enroll/GetEnrollField",method:"get",params:e})}function s(e){return Object(a["a"])({url:"api/Enroll/GetEnrollFieldDetails",method:"get",params:e})}function u(e){return Object(a["a"])({url:"api/Enroll/GetRegisterSettingList",method:"get",params:e})}function c(e){return Object(a["a"])({url:"api/Enroll/GetRegisterSetting",method:"get",params:e})}function f(e){return Object(a["a"])({url:"api/Enroll/GetRegisterSettingDetails",method:"get",params:e})}function d(e){return Object(a["a"])({url:"api/Enroll/UpdateRegisterSetting",method:"post",data:e})}function p(e){return Object(a["a"])({url:"api/Enroll/EnableRegisterSetting",method:"post",data:e})}function m(e){return Object(a["a"])({url:"api/Enroll/DisableRegisterSetting",method:"post",data:e})}function b(e){return Object(a["a"])({url:"api/Enroll/AddRegisterConditions",method:"post",data:e})}function g(e){return Object(a["a"])({url:"api/Enroll/GetRegisterConditions",method:"get",params:e})}function v(e){return Object(a["a"])({url:"api/Enroll/GetRegisterConditionsList",method:"get",params:e})}function h(e){return Object(a["a"])({url:"api/Enroll/UpdateRegisterConditions",method:"post",data:e})}function k(e){return Object(a["a"])({url:"api/Enroll/EnableRegisterConditions",method:"post",data:e})}function w(e){return Object(a["a"])({url:"api/Enroll/DisableRegisterConditions",method:"post",data:e})}function C(e){return Object(a["a"])({url:"api/Enroll/GetRegisterAutoAuditList",method:"get",params:e})}function S(e){return Object(a["a"])({url:"api/Enroll/EnableRegisterAutoAudit",method:"post",data:e})}function x(e){return Object(a["a"])({url:"api/Enroll/DisableRegisterAutoAudit",method:"post",data:e})}function y(e){return Object(a["a"])({url:"api/Enroll/AddAuditTaskConfig",method:"post",data:e})}function O(e){return Object(a["a"])({url:"api/Enroll/GetAuditTaskConfig",method:"get",params:e})}function E(e){return Object(a["a"])({url:"api/Enroll/GetAuditTaskConfigList",method:"get",params:e})}function Y(e){return Object(a["a"])({url:"api/Enroll/UpdateAuditTaskConfig",method:"post",data:e})}function D(e){return Object(a["a"])({url:"api/Enroll/EnableAuditTaskConfig",method:"post",data:e})}function j(e){return Object(a["a"])({url:"api/Enroll/DisableAuditTaskConfig",method:"post",data:e})}function I(e){return Object(a["a"])({url:"api/Enroll/DeleteAuditTaskConfig",method:"post",data:e})}function _(e){return Object(a["a"])({url:"api/Enroll/GetEnrollInfo",method:"get",params:e})}},cf45:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"i",(function(){return r})),n.d(t,"h",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return f}));n("4160"),n("baa5"),n("b680"),n("ac1f"),n("5319"),n("159b");function a(e,t){return e.forEach((function(e){e[t]&&e[t].length?a(e[t],t):e[t]=null})),e}function r(e){var t="";try{var n=new Date(e.replace(/-/g,"/")),a=new Date,r=a.getMonth()<n.getMonth()||a.getMonth()===n.getMonth()&&a.getDate()<n.getDate();t=a.getFullYear()-n.getFullYear()-(r?1:0)}catch(i){console.warn("--\x3e Error getYearsByDate",i)}return t}function i(e){var t,n=e.substring(e.lastIndexOf(".")+1);switch(n){case"pdf":t=0;break;case"doc":t=1;break;case"docx":t=2;break;case"wps":t=3;break;case"ppt":t=4;break;case"xls":t=5;break;case"xlsx":t=6;break;case"mp4":t=7;break;case"pptx":t=8;break;default:t=-1}return t}var o=[{value:0,label:"党员"},{value:1,label:"群众"},{value:2,label:"其他"}],l=[{value:9,label:"博士研究生"},{value:8,label:"硕士研究生"},{value:7,label:"本科"},{value:6,label:"专科"},{value:5,label:"中技"},{value:4,label:"职校"},{value:3,label:"中专"},{value:2,label:"高中"},{value:1,label:"初中"},{value:0,label:"小学"}],s=[{value:11,label:"博士研究生"},{value:10,label:"硕士研究生"},{value:9,label:"本科"},{value:8,label:"专科"},{value:7,label:"高技"},{value:6,label:"中技"},{value:5,label:"高职"},{value:4,label:"中职"},{value:3,label:"中专"},{value:2,label:"高中"},{value:1,label:"初中"},{value:0,label:"小学"}],u=[{value:2,label:"保密"},{value:1,label:"男"},{value:0,label:"女"}],c=[{value:3,label:"其他证件"},{value:2,label:"护照"},{value:1,label:"港澳台证"},{value:0,label:"身份证"}];function f(e){var t=e;return t=e>1048576?(e/1048576).toFixed(2)+"GB":e>1024?(e/1024).toFixed(2)+"MB":"".concat(e,"KB"),t}}}]);