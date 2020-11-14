(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3015e43d","chunk-17767a8b"],{"07a6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"station-detail"},[n("el-form",{ref:"elForm",attrs:{model:e.elForm,rules:e.elFormRules,size:e.tableSize,"label-position":"right","label-width":"120px"}},[n("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[n("bar-space"),n("bar-cell",[n("el-button",{on:{click:e.goback}},[e._v("返回")])],1),n("bar-cell",["edit"===e.category?n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存")]):e._e()],1)],1),n("div",{staticClass:"app-container"},[n("el-row",[n("el-col",{attrs:{md:16}},[n("AreaSelect",{attrs:{"area-label":"所属省市","area-prop":"RegionID",disabled:!0,"show-region":!0,"province-code":e.elForm.ProvinceID,"city-code":e.elForm.CityID,"region-code":e.elForm.RegionID}})],1)],1),n("el-row",[n("el-col",{attrs:{md:8}},[n("el-form-item",{attrs:{label:"类型",prop:"SiteType"}},[n("el-select",{attrs:{placeholder:"请选择",disabled:""},model:{value:e.elForm.SiteType,callback:function(t){e.$set(e.elForm,"SiteType",t)},expression:"elForm.SiteType"}},[n("el-option",{attrs:{label:"鉴定站",value:0}}),n("el-option",{attrs:{label:"鉴定点",value:1}})],1)],1)],1),n("el-col",{attrs:{md:8}},[n("el-form-item",{attrs:{label:"建立时间"}},[n("span",[e._v(e._s(e._f("parseTime")(e.elForm.EstablishmentData||e.elForm.CreateDate,NaN)))])])],1),n("el-col",{attrs:{md:8}},[n("el-form-item",{attrs:{label:"机构编码",prop:"OrganizationCode"}},[n("el-input",{attrs:{placeholder:"请输入",disabled:""},model:{value:e.elForm.OrganizationCode,callback:function(t){e.$set(e.elForm,"OrganizationCode",t)},expression:"elForm.OrganizationCode"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{md:8}},[n("el-form-item",{attrs:{label:"单位名称",prop:"SiteName"}},[n("el-input",{attrs:{placeholder:"请输入",disabled:!e.canEditInfo},model:{value:e.elForm.SiteName,callback:function(t){e.$set(e.elForm,"SiteName",t)},expression:"elForm.SiteName"}})],1)],1),n("el-col",{attrs:{md:8}},[n("el-form-item",{attrs:{label:"负责人",prop:"AdminUserName"}},[n("el-input",{attrs:{placeholder:"请输入",disabled:!e.canEditInfo},model:{value:e.elForm.AdminUserName,callback:function(t){e.$set(e.elForm,"AdminUserName",t)},expression:"elForm.AdminUserName"}})],1)],1),n("el-col",{attrs:{md:8}},[n("el-form-item",{attrs:{label:"负责人电话",prop:"ContactNumber"}},[n("el-input",{attrs:{placeholder:"请输入",disabled:!e.canEditInfo},model:{value:e.elForm.ContactNumber,callback:function(t){e.$set(e.elForm,"ContactNumber",t)},expression:"elForm.ContactNumber"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{md:8}},[n("el-form-item",{attrs:{label:"通讯地址",prop:"Address"}},[n("el-input",{attrs:{placeholder:"请输入",disabled:!e.canEditInfo},model:{value:e.elForm.Address,callback:function(t){e.$set(e.elForm,"Address",t)},expression:"elForm.Address"}})],1)],1),n("el-col",{attrs:{md:8}},[n("el-form-item",{attrs:{label:"联系邮箱",prop:"ContactEmail"}},[n("el-input",{attrs:{placeholder:"请输入",disabled:!e.canEditInfo},model:{value:e.elForm.ContactEmail,callback:function(t){e.$set(e.elForm,"ContactEmail",t)},expression:"elForm.ContactEmail"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{md:16}},[n("el-form-item",{attrs:{label:"交通路线",prop:"TrafficRoute"}},[n("el-input",{attrs:{placeholder:"请输入",disabled:!e.canEditInfo},model:{value:e.elForm.TrafficRoute,callback:function(t){e.$set(e.elForm,"TrafficRoute",t)},expression:"elForm.TrafficRoute"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{md:16}},[n("el-form-item",{attrs:{label:"状态",prop:"Status"}},[n("el-radio-group",{attrs:{disabled:!e.canEditInfo},model:{value:e.elForm.Status,callback:function(t){e.$set(e.elForm,"Status",t)},expression:"elForm.Status"}},[n("el-radio",{attrs:{label:!0}},[e._v("启用")]),n("el-radio",{attrs:{label:!1}},[e._v("停用")])],1)],1)],1)],1),n("el-row",[n("el-col",{attrs:{md:16}},[n("el-form-item",{attrs:{label:"可鉴定工种",prop:"SiteProfessionLst"}},[n("table-body",{ref:"radioTable",staticClass:"tabel-small-size",attrs:{"has-padding":!1,columns:e.workTypeTable,"table-data":e.elForm.SiteProfessionLst,options:e.tableOptions}})],1)],1)],1),e.canEditInfo?n("el-form-item",{attrs:{label:"机构简介",prop:"OrganizationDescription"}},[n("el-input",{staticStyle:{display:"none"},attrs:{type:"hidden"},model:{value:e.elForm.OrganizationDescription,callback:function(t){e.$set(e.elForm,"OrganizationDescription",t)},expression:"elForm.OrganizationDescription"}}),n("tinymce-editor",{ref:"tinymceEditor",model:{value:e.elForm.OrganizationDescription,callback:function(t){e.$set(e.elForm,"OrganizationDescription",t)},expression:"elForm.OrganizationDescription"}})],1):e._e(),n("el-form-item",["edit"===e.category?n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存")]):e._e(),n("el-button",{on:{click:e.goback}},[e._v("返回")])],1)],1)],1)],1)},a=[],i=(n("d3b7"),n("5530")),o=n("2c4b"),l=n("2f62"),s=n("bcb6"),c={name:"Detail",components:{AreaSelect:function(){return n.e("chunk-1bcfd332").then(n.bind(null,"a92d"))},BarCell:function(){return n.e("chunk-2d221e17").then(n.bind(null,"cbdf"))},BarSpace:function(){return n.e("chunk-2d2218de").then(n.bind(null,"cb9b"))},Sticky:function(){return n.e("chunk-2d210590").then(n.bind(null,"b804"))},TinymceEditor:function(){return Promise.all([n.e("chunk-04e2eeec"),n.e("chunk-62a49494")]).then(n.bind(null,"432e"))},TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))}},mixins:[o["a"]],props:{category:{type:String,default:""}},computed:Object(i["a"])({},Object(l["c"])({tableSize:function(e){return e.settings.tableSize}})),created:function(){var e=this;if(this.$route.params){var t=this.$route.params.id,n={SiteID:t};Object(s["s"])(n).then((function(t){t.success&&(e.elForm=t.response)}))}},methods:{goback:function(){this.$router.go(-1)},submitForm:function(){var e=this,t=this;function n(){Object(s["v"])(t.elForm).then((function(e){e.success&&(t.$message({message:"提交成功",type:"success"}),t.goback())}))}!this.canEditInfo&&this.canEditWorkType?n():this.$refs.elForm.validate((function(t){t?n():e.$message.error("请检查输入是否正确完整")}))}}},u=c,d=(n("3270"),n("2877")),m=Object(d["a"])(u,r,a,!1,null,null,null);t["default"]=m.exports},"2c4b":function(e,t,n){"use strict";n("a15b"),n("45fc");var r=n("61f7");function a(e){var t=!1;return e.length>0&&(t=e.some((function(e){return e.IsToTheory||e.IsToSkills}))),t}t["a"]={computed:{canEditInfo:function(){var e=!1,t=this.$route.params.type;return"info"===t&&(e=!0),e}},methods:{canEditWorkType:function(){var e=!1,t=this.$route.params.type;return"workType"===t&&(e=!0),e}},data:function(){return{searchPanelActive:!0,searchForm:{province:null,type:"",search_key:""},columns:[{title:"省份",key:"ReginName",slot:"ReginName"},{title:"类型",key:"SiteType",align:"center",formatter:function(e,t,n,r){var a="";switch(e.SiteType){case 0:a="鉴定站";break;case 1:a="鉴定点"}return a}},{title:"单位名称",key:"SiteName",align:"center"},{title:"机构编码",key:"OrganizationCode",align:"center"},{title:"地址",key:"Address",align:"center"},{title:"负责人姓名",key:"UserName",align:"center"},{title:"联系电话",key:"MobilePhone",align:"center"},{title:"可鉴定等级",key:"SiteProfessionList",align:"left",formatter:function(e,t,n,r){var a="";return a=e.SiteProfessionList.join("、"),a}},{title:"状态",key:"Status",slot:"Status"}],indexRow:{title:"序号",align:"center",width:60},tableLoading:!1,tableData:[],tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:1},elForm:{SiteProfessionLst:[]},elFormRules:{RegionID:[{required:!0,message:"请输入",trigger:"blur"}],SiteType:[{required:!0,message:"请选择",trigger:"change"}],OrganizationCode:[{required:!0,message:"请输入",trigger:"blur"}],SiteName:[{required:!0,message:"请输入",trigger:"blur"}],AdminUserName:[{required:!0,message:"请输入",trigger:"blur"}],ContactNumber:[{required:!0,trigger:"blur",validator:function(e,t,n){r["g"](t)?n():n(new Error("请输入正确手机号码"))}}],Address:[{required:!0,message:"请输入",trigger:"blur"}],ContactEmail:[{required:!0,message:"请输入",trigger:"blur"}],SiteProfessionLst:[{required:!0,trigger:"change",validator:function(e,t,n){var r=a(t);r?n():n(new Error("请选择可鉴定工种或技能"))}}],Status:[{required:!0,message:"请选择",trigger:"change"}]},workTypeTable:[{title:"职业工种",key:"ProfessionName",align:"center"},{title:"技能等级",key:"SkillLevelName",align:"center"},{title:"是否可鉴定理论",key:"IsToTheory",align:"center",component:{name:"el-switch",disabled:!this.canEditWorkType()}},{title:"是否可鉴定技能",key:"IsToSkills",align:"center",component:{name:"el-switch",disabled:!this.canEditWorkType()}}]}}}},3270:function(e,t,n){"use strict";var r=n("8965"),a=n.n(r);a.a},"4c37":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("detail",{attrs:{category:"edit"}})},a=[],i=n("07a6"),o={name:"EditSite",components:{Detail:i["default"]}},l=o,s=n("2877"),c=Object(s["a"])(l,r,a,!1,null,null,null);t["default"]=c.exports},8965:function(e,t,n){},bcb6:function(e,t,n){"use strict";n.d(t,"m",(function(){return a})),n.d(t,"k",(function(){return i})),n.d(t,"r",(function(){return o})),n.d(t,"u",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"q",(function(){return u})),n.d(t,"p",(function(){return d})),n.d(t,"l",(function(){return m})),n.d(t,"s",(function(){return p})),n.d(t,"v",(function(){return f})),n.d(t,"g",(function(){return b})),n.d(t,"i",(function(){return g})),n.d(t,"t",(function(){return h})),n.d(t,"f",(function(){return S})),n.d(t,"e",(function(){return k})),n.d(t,"d",(function(){return y})),n.d(t,"j",(function(){return v})),n.d(t,"n",(function(){return F})),n.d(t,"w",(function(){return O})),n.d(t,"o",(function(){return I})),n.d(t,"c",(function(){return T})),n.d(t,"b",(function(){return E}));var r=n("b775");function a(e){return Object(r["a"])({url:"/vue-admin-template/station-management/review-detail",method:"get",params:e})}function i(e){return Object(r["a"])({url:"api/station/GetSiteAuditInfos",method:"get",params:e})}function o(e){return Object(r["a"])({url:"api/station/LoadSiteAuditInfo",method:"get",params:e})}function l(e){return Object(r["a"])({url:"api/station/SaveSiteAuditInfo",method:"post",data:e})}function s(e){return Object(r["a"])({url:"api/station/DelSiteAuditInfo",method:"get",params:e})}function c(e){return Object(r["a"])({url:"api/station/GetGuidanceSiteAuditInfos",method:"get",params:e})}function u(e){return Object(r["a"])({url:"api/station/LoadGuidanceSiteAuditInfo",method:"get",params:e})}function d(e){return Object(r["a"])({url:"api/station/GuidanceAuditSiteInfo",method:"post",data:e})}function m(e){return Object(r["a"])({url:"api/station/GetSiteInfos",method:"get",params:e})}function p(e){return Object(r["a"])({url:"api/station/LoadSiteInfo",method:"get",params:e})}function f(e){return Object(r["a"])({url:"api/station/SaveSiteInfo",method:"post",data:e})}function b(e){return Object(r["a"])({url:"api/station/ExamRoomList",method:"get",params:e})}function g(e){return Object(r["a"])({url:"api/station/LoadExamRoom",method:"get",params:e})}function h(e){return Object(r["a"])({url:"api/station/SaveExamRoom",method:"post",data:e})}function S(e){return Object(r["a"])({url:"api/station/EnableExamRooms",method:"get",params:e})}function k(e){return Object(r["a"])({url:"api/station/DisableExamRooms",method:"get",params:e})}function y(e){return Object(r["a"])({url:"api/station/DelExamRooms",method:"get",params:e})}function v(e){return Object(r["a"])({url:"api/Station/GetNotAuthTrainingInstitutions",method:"get",params:e})}function F(e){return Object(r["a"])({url:"api/Station/GetTrainingInstitutionInfo",method:"get",params:e})}function O(e){return Object(r["a"])({url:"api/Station/SubTrainingInstitutionAuth",method:"post",data:e})}function I(e){return Object(r["a"])({url:"api/Station/GetTrainingInstitutions",method:"get",params:e})}function T(e){return Object(r["a"])({url:"api/Station/EnableTrainingInstitution",method:"post",data:e})}function E(e){return Object(r["a"])({url:"api/Station/DisableTrainingInstitution",method:"post",data:e})}}}]);