(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d594f24"],{8233:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{attrs:{"label-position":"right","label-width":"150px"}},[n("div",{staticClass:"app-container"},[n("el-form-item",{attrs:{label:"培训机构名称"}},[n("el-input",{attrs:{readonly:""},model:{value:t.InstitutionsName,callback:function(e){t.InstitutionsName=e},expression:"InstitutionsName"}})],1),n("el-form-item",{attrs:{label:"统一机构代码"}},[n("el-input",{attrs:{readonly:""},model:{value:t.UniformCreditCode,callback:function(e){t.UniformCreditCode=e},expression:"UniformCreditCode"}})],1),n("el-form-item",{attrs:{label:"培训机构地址"}},[n("el-input",{attrs:{readonly:""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"营业执照"}},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.BusinessLicense,"preview-src-list":t.srcList1}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"办学许可证"}},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.SchoolLicense,"preview-src-list":t.srcList2}})],1)],1)],1),n("el-form-item",{attrs:{label:"主要培训项目"}},[n("el-input",{attrs:{readonly:""},model:{value:t.TrainingScope,callback:function(e){t.TrainingScope=e},expression:"TrainingScope"}})],1),n("el-form-item",{attrs:{label:"联系人姓名"}},[n("el-input",{attrs:{readonly:""},model:{value:t.ContactsName,callback:function(e){t.ContactsName=e},expression:"ContactsName"}})],1),n("el-form-item",{attrs:{label:"联系电话"}},[n("el-input",{attrs:{readonly:""},model:{value:t.MobilePhone,callback:function(e){t.MobilePhone=e},expression:"MobilePhone"}})],1),n("el-form-item",{attrs:{label:"联系邮箱"}},[n("el-input",{attrs:{readonly:""},model:{value:t.Email,callback:function(e){t.Email=e},expression:"Email"}})],1),2===t.status?n("el-form-item",{attrs:{label:"提交时间"}},[n("el-input",{attrs:{readonly:""},model:{value:t.CreateDate,callback:function(e){t.CreateDate=e},expression:"CreateDate"}})],1):t._e(),2===t.status?n("el-form-item",{attrs:{label:"审核时间"}},[n("el-input",{attrs:{readonly:""},model:{value:t.AuditTime,callback:function(e){t.AuditTime=e},expression:"AuditTime"}})],1):t._e(),2===t.status?n("el-form-item",{attrs:{label:"审核人"}},[n("el-input",{attrs:{readonly:""},model:{value:t.AuditUserName,callback:function(e){t.AuditUserName=e},expression:"AuditUserName"}})],1):t._e(),2===t.status?n("el-form-item",{attrs:{label:"审核结果"}},[n("el-input",{attrs:{readonly:""},model:{value:t.auditStatusName,callback:function(e){t.auditStatusName=e},expression:"auditStatusName"}})],1):t._e(),2===t.status?n("el-form-item",{attrs:{label:"驳回原因"}},[n("el-input",{attrs:{readonly:""},model:{value:t.AuditRemark,callback:function(e){t.AuditRemark=e},expression:"AuditRemark"}})],1):t._e(),n("el-form-item",[0===t.status?n("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.handleAuth(2)}}},[t._v("驳回")]):t._e(),0===t.status?n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleAuth(1)}}},[t._v("通过")]):t._e(),n("el-button",{attrs:{type:"default"},on:{click:t.handleGoBack}},[t._v("返回")])],1)],1)])},i=[],r=(n("d3b7"),n("96cf"),n("1da1")),o=n("bcb6"),u=n("0a4f"),s={name:"AuditListReview",data:function(){return{status:"",id:-1,InstitutionsName:"",UniformCreditCode:"",address:"",TrainingScope:"",ContactsName:"",MobilePhone:"",Email:"",CreateDate:"",AuditTime:"",AuditUserName:"",auditStatusName:"",AuditRemark:"",BusinessLicense:"",SchoolLicense:"",auth:"",remark:"",srcList1:[],srcList2:[]}},created:function(){var t=this,e=this.$route.params,n=e.status,a=e.id;function i(){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.reqForGetTrainingInstitutionInfo();case 2:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}this.status=n,this.id=a,i()},methods:{reqForGetTrainingInstitutionInfo:function(){var t=this;return new Promise((function(e,n){Object(o["n"])({InstitutionsID:t.id}).then((function(e){var n=e.response,a=n.InstitutionsName,i=n.UniformCreditCode,r=n.ProvinceName,o=n.CityName,s=n.AreaName,c=n.Address,l=n.TrainingScope,m=n.ContactsName,d=n.MobilePhone,f=n.Email,p=n.AuditStatus,h=n.AuditUserName,b=n.AuditTime,g=n.AuditRemark,S=n.CreateDate,v=n.BusinessLicense,A=n.SchoolLicense,j="";0===p?j="待审核":2===p&&(j="驳回"),t.InstitutionsName=a,t.UniformCreditCode=i,t.address=r+o+s+c,t.TrainingScope=l,t.ContactsName=m,t.MobilePhone=d,t.Email=f,t.CreateDate=S,t.AuditTime=b,t.AuditUserName=h,t.auditStatusName=j,t.AuditRemark=g,t.BusinessLicense=Object(u["a"])().ResourcesURL+v,t.SchoolLicense=Object(u["a"])().ResourcesURL+A,t.srcList1.push(Object(u["a"])().ResourcesURL+v),t.srcList2.push(Object(u["a"])().ResourcesURL+A)}))}))},reqForSubTrainingInstitutionAuth:function(){var t=this,e=this.auth,n=this.id,a=this.remark;return new Promise((function(i,r){Object(o["w"])({InstitutionsID:n,AuditStatus:e,AuditRemark:a}).then((function(){1===e?t.$notify({title:"成功",message:"操作成功!已将机构账户和密码以短信形式发送至机构联系人手机",type:"success"}):2===e&&t.$notify({title:"成功",message:"操作成功!已将驳回原因以短信形式发送至机构联系人手机",type:"success"}),t.$router.go(-1)}))}))},handleGoBack:function(){this.$router.go(-1)},handleAuth:function(t){var e=this,n=this;this.auth=t,1===this.auth?this.$confirm("确认通过该机构申报信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){function t(){return e.apply(this,arguments)}function e(){return e=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.reqForSubTrainingInstitutionAuth();case 2:case"end":return t.stop()}}),t)}))),e.apply(this,arguments)}t()})):2===this.auth&&this.$prompt("请输入驳回原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){var a=t.value;function i(){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.reqForSubTrainingInstitutionAuth();case 2:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}e.remark=a,i()}))}}},c=s,l=n("2877"),m=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=m.exports},bcb6:function(t,e,n){"use strict";n.d(e,"m",(function(){return i})),n.d(e,"k",(function(){return r})),n.d(e,"r",(function(){return o})),n.d(e,"u",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"h",(function(){return c})),n.d(e,"q",(function(){return l})),n.d(e,"p",(function(){return m})),n.d(e,"l",(function(){return d})),n.d(e,"s",(function(){return f})),n.d(e,"v",(function(){return p})),n.d(e,"g",(function(){return h})),n.d(e,"i",(function(){return b})),n.d(e,"t",(function(){return g})),n.d(e,"f",(function(){return S})),n.d(e,"e",(function(){return v})),n.d(e,"d",(function(){return A})),n.d(e,"j",(function(){return j})),n.d(e,"n",(function(){return k})),n.d(e,"w",(function(){return x})),n.d(e,"o",(function(){return I})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return y}));var a=n("b775");function i(t){return Object(a["a"])({url:"/vue-admin-template/station-management/review-detail",method:"get",params:t})}function r(t){return Object(a["a"])({url:"api/station/GetSiteAuditInfos",method:"get",params:t})}function o(t){return Object(a["a"])({url:"api/station/LoadSiteAuditInfo",method:"get",params:t})}function u(t){return Object(a["a"])({url:"api/station/SaveSiteAuditInfo",method:"post",data:t})}function s(t){return Object(a["a"])({url:"api/station/DelSiteAuditInfo",method:"get",params:t})}function c(t){return Object(a["a"])({url:"api/station/GetGuidanceSiteAuditInfos",method:"get",params:t})}function l(t){return Object(a["a"])({url:"api/station/LoadGuidanceSiteAuditInfo",method:"get",params:t})}function m(t){return Object(a["a"])({url:"api/station/GuidanceAuditSiteInfo",method:"post",data:t})}function d(t){return Object(a["a"])({url:"api/station/GetSiteInfos",method:"get",params:t})}function f(t){return Object(a["a"])({url:"api/station/LoadSiteInfo",method:"get",params:t})}function p(t){return Object(a["a"])({url:"api/station/SaveSiteInfo",method:"post",data:t})}function h(t){return Object(a["a"])({url:"api/station/ExamRoomList",method:"get",params:t})}function b(t){return Object(a["a"])({url:"api/station/LoadExamRoom",method:"get",params:t})}function g(t){return Object(a["a"])({url:"api/station/SaveExamRoom",method:"post",data:t})}function S(t){return Object(a["a"])({url:"api/station/EnableExamRooms",method:"get",params:t})}function v(t){return Object(a["a"])({url:"api/station/DisableExamRooms",method:"get",params:t})}function A(t){return Object(a["a"])({url:"api/station/DelExamRooms",method:"get",params:t})}function j(t){return Object(a["a"])({url:"api/Station/GetNotAuthTrainingInstitutions",method:"get",params:t})}function k(t){return Object(a["a"])({url:"api/Station/GetTrainingInstitutionInfo",method:"get",params:t})}function x(t){return Object(a["a"])({url:"api/Station/SubTrainingInstitutionAuth",method:"post",data:t})}function I(t){return Object(a["a"])({url:"api/Station/GetTrainingInstitutions",method:"get",params:t})}function O(t){return Object(a["a"])({url:"api/Station/EnableTrainingInstitution",method:"post",data:t})}function y(t){return Object(a["a"])({url:"api/Station/DisableTrainingInstitution",method:"post",data:t})}}}]);