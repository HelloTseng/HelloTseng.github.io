(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3a915c6"],{2934:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"j",(function(){return a})),r.d(t,"g",(function(){return s})),r.d(t,"e",(function(){return o})),r.d(t,"i",(function(){return l})),r.d(t,"k",(function(){return u})),r.d(t,"f",(function(){return c})),r.d(t,"h",(function(){return m})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return f})),r.d(t,"n",(function(){return h})),r.d(t,"m",(function(){return p})),r.d(t,"l",(function(){return b})),r.d(t,"d",(function(){return g}));var n=r("b775");function i(e){return Object(n["a"])({url:"api/Sys/CheckUserInfo",method:"get",noNoticeError:!0,params:e})}function a(e){return Object(n["a"])({url:"api/Sys/GetSelRoleList",method:"get",params:e})}function s(e){return Object(n["a"])({url:"api/Sys/GetEnableProfessionnalTitles",method:"get",params:e})}function o(e){return Object(n["a"])({url:"api/Sys/GetEnableExaminerProfessionnalTitles",method:"get",params:e})}function l(e){return Object(n["a"])({url:"api/Global/GetRegionList",method:"get",params:e})}function u(e){return Object(n["a"])({url:"api/Station/GetSelSites",method:"get",params:e})}function c(e){return Object(n["a"])({url:"api/Sys/EnableProfessionList",method:"get",params:e})}function m(e){return Object(n["a"])({url:"api/Examination/LoadQuestionBankOptions",method:"get",params:e})}function d(e){return Object(n["a"])({url:"api/Sys/GetEnableEQLanguages",method:"get",params:e})}function f(e){return Object(n["a"])({url:"api/Station/EnableExamRoomLst",method:"get",params:e})}function h(e){return Object(n["a"])({url:"images/Upload/TempPic",method:"post",data:e,multiple:!0})}function p(e){return Object(n["a"])({url:"images/Upload/TempFile",method:"post",data:e,multiple:!0})}function b(e){return Object(n["a"])({url:"api/images/Upload/NewPic",method:"post",data:e,multiple:!0})}function g(e){return Object(n["a"])({url:"api/Station/EnableExaminerInfos",method:"get",params:e})}},"40a4":function(e,t,r){"use strict";r.d(t,"n",(function(){return i})),r.d(t,"q",(function(){return a})),r.d(t,"t",(function(){return s})),r.d(t,"b",(function(){return o})),r.d(t,"k",(function(){return l})),r.d(t,"c",(function(){return u})),r.d(t,"m",(function(){return c})),r.d(t,"p",(function(){return m})),r.d(t,"u",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return h})),r.d(t,"l",(function(){return p})),r.d(t,"o",(function(){return b})),r.d(t,"r",(function(){return g})),r.d(t,"s",(function(){return v})),r.d(t,"a",(function(){return C})),r.d(t,"j",(function(){return S})),r.d(t,"i",(function(){return F})),r.d(t,"f",(function(){return y})),r.d(t,"g",(function(){return k})),r.d(t,"h",(function(){return j}));var n=r("b775");function i(e){return Object(n["a"])({url:"api/Sys/DisableTeamStaff",method:"get",showLoading:!0,params:e})}function a(e){return Object(n["a"])({url:"api/Sys/EnableTeamStaff",method:"get",showLoading:!0,params:e})}function s(e){return Object(n["a"])({url:"api/Sys/SaveTeamStaff",method:"post",data:e})}function o(e){return Object(n["a"])({url:"api/Sys/GetTeamStaff",method:"get",showLoading:!0,params:e})}function l(e){return Object(n["a"])({url:"api/Sys/AddTeamStaff",method:"post",data:e})}function u(e){return Object(n["a"])({url:"api/Sys/GetTeamStaffList",method:"get",params:e})}function c(e){return Object(n["a"])({url:"api/Sys/DisableTeamInfo",method:"get",showLoading:!0,params:e})}function m(e){return Object(n["a"])({url:"api/Sys/EnableTeamInfo",method:"get",showLoading:!0,params:e})}function d(e){return Object(n["a"])({url:"api/Sys/SaveTeamUserInfo",method:"post",data:e})}function f(e){return Object(n["a"])({url:"api/Sys/GetTeamUserInfo",method:"get",showLoading:!0,params:e})}function h(e){return Object(n["a"])({url:"api/Sys/GetTeamUserInfos",method:"get",params:e})}function p(e){return Object(n["a"])({url:"api/Sys/AddTeamUserInfo",method:"post",data:e})}function b(e){return Object(n["a"])({url:"api/Sys/DisableUserInfo",method:"get",showLoading:!0,params:e})}function g(e){return Object(n["a"])({url:"api/Sys/EnableUserInfo",method:"get",showLoading:!0,params:e})}function v(e){return Object(n["a"])({url:"api/Sys/SaveManagementUserInfo",method:"post",data:e})}function C(e){return Object(n["a"])({url:"api/Sys/GetManagementUserInfo",method:"get",showLoading:!0,params:e})}function S(e){return Object(n["a"])({url:"api/Sys/AddManagementUserInfo",method:"post",data:e})}function F(e){return Object(n["a"])({url:"api/Sys/GetManagementUserInfos",method:"get",params:e})}function y(e){return Object(n["a"])({url:"/vue-admin-template/user-management/user-confirm",method:"get",params:e})}function k(e){return Object(n["a"])({url:"/vue-admin-template/user-management/user-fill-code",method:"get",params:e})}function j(e){return Object(n["a"])({url:"/vue-admin-template/user-management/user-review",method:"get",params:e})}},"56cb":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[r("bar",{attrs:{slot:"title"},slot:"title"},[r("bar-space"),r("bar-cell",[r("el-button",{attrs:{icon:"el-icon-refresh",size:e.tableSize},on:{click:e.doRefresh}},[e._v("刷新")])],1),r("bar-cell",[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"create",expression:"'create'"}],attrs:{icon:"el-icon-plus",type:"danger",size:e.tableSize},on:{click:e.handleCreate}},[e._v("新增工作人员")])],1)],1),r("el-form",{ref:"searchForm",attrs:{inline:"","label-position":"top",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[r("el-form-item",{attrs:{label:"职称",prop:"job_title"}},[r("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.job_title,callback:function(t){e.$set(e.searchForm,"job_title",t)},expression:"searchForm.job_title"}},e._l(e.professionTitleOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.key,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"启用状态",prop:"status"}},[r("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.status,callback:function(t){e.$set(e.searchForm,"status",t)},expression:"searchForm.status"}},[r("el-option",{attrs:{label:"启用",value:"1"}}),r("el-option",{attrs:{label:"停用",value:"0"}})],1)],1),r("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[r("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入姓名/手机号码/身份证号",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key",t)},expression:"searchForm.search_key"}})],1),r("el-form-item",{attrs:{label:"操作"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.searchFormReset}},[e._v("清空")])],1)],1)],1),r("table-body",{ref:"mkTable",attrs:{"index-row":e.indexRow,loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,pagination:e.pagination},on:{"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange}},[r("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"50px"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.Status?r("span",{staticClass:"text-green"},[e._v("已启用")]):e._e(),n.Status?e._e():r("span",{staticClass:"text-red"},[e._v("已停用")])]}}])}),r("el-table-column",{attrs:{slot:"operate",label:"操作",width:"100",align:"center",fixed:"right"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"edit",expression:"'edit'"}],on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),n.Status?e._e():r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"enable",expression:"'enable'"}],attrs:{type:"success"},on:{click:function(t){return e.handleSwitchStatus(n)}}},[e._v("启用")]),n.Status?r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"disable",expression:"'disable'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleSwitchStatus(n)}}},[e._v("停用")]):e._e()]}}])})],1),r("el-dialog",{ref:"dailogEdit",attrs:{title:e.isEdit?"编辑工作人员":"新增工作人员",visible:e.userFormVisible,"before-close":e.userFormClose,"destroy-on-close":"","close-on-click-modal":!1,"close-on-press-escape":!1}},[r("el-form",{ref:"userForm",attrs:{"label-position":"right","label-width":"120px",model:e.userForm,rules:e.userFormRules,size:e.tableSize}},[r("el-form-item",{attrs:{label:"所属层级"}},[r("span",[e._v("指导中心")])]),r("el-form-item",{attrs:{label:"姓名",prop:"userName"}},[r("el-input",{attrs:{placeholder:"请输入姓名",disabled:e.editDisabled},model:{value:e.userForm.userName,callback:function(t){e.$set(e.userForm,"userName",t)},expression:"userForm.userName"}})],1),r("el-form-item",{attrs:{label:"身份证号",prop:"idCardNum"}},[r("el-input",{attrs:{placeholder:"请输入身份证号",disabled:e.editDisabled},on:{blur:e.handleCheckUserInfo},model:{value:e.userForm.idCardNum,callback:function(t){e.$set(e.userForm,"idCardNum",t)},expression:"userForm.idCardNum"}})],1),r("el-form-item",{attrs:{label:"手机号码",prop:"mobilePhone"}},[r("el-input",{attrs:{placeholder:"请输入手机号码",disabled:e.editDisabled},model:{value:e.userForm.mobilePhone,callback:function(t){e.$set(e.userForm,"mobilePhone",t)},expression:"userForm.mobilePhone"}})],1),r("el-form-item",{attrs:{label:"电子邮箱",prop:"email"}},[r("el-input",{attrs:{placeholder:"请输入电子邮箱",disabled:e.editDisabled},model:{value:e.userForm.email,callback:function(t){e.$set(e.userForm,"email",t)},expression:"userForm.email"}})],1),r("el-form-item",{attrs:{label:"职称",prop:"professionTitleID"}},[r("el-select",{staticClass:"width-full",attrs:{placeholder:"请选择"},model:{value:e.userForm.professionTitleID,callback:function(t){e.$set(e.userForm,"professionTitleID",t)},expression:"userForm.professionTitleID"}},e._l(e.professionTitleOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.key,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"系统角色",prop:"roleID"}},[r("el-checkbox-group",{attrs:{size:e.tableSize},model:{value:e.userForm.roleID,callback:function(t){e.$set(e.userForm,"roleID",t)},expression:"userForm.roleID"}},e._l(e.roleOptions,(function(t,n){return r("el-checkbox",{key:n,attrs:{label:t.value}},[e._v(e._s(t.key))])})),1)],1),r("el-form-item",{attrs:{label:"微信绑定"}},[r("span",[e._v(e._s(e.userForm.isBindWx?"是":"未绑定"))])]),r("el-form-item",{attrs:{label:"状态"}},[r("el-radio-group",{model:{value:e.userForm.status,callback:function(t){e.$set(e.userForm,"status",t)},expression:"userForm.status"}},[r("el-radio",{attrs:{label:!0}},[e._v("启用")]),r("el-radio",{attrs:{label:!1}},[e._v("停用")])],1)],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",loading:e.editSaving},on:{click:function(t){return e.userFormConfirm("userForm")}}},[e._v("保存")]),r("el-button",{on:{click:function(t){return e.userFormClose()}}},[e._v("取消")])],1)],1),r("identity-confirmation",{attrs:{"user-confirm-visible":e.userConfirmVisible,"user-confirm":e.userConfirm},on:{userConfirmSure:e.userConfirmSure,userConfirmClose:e.userConfirmClose,userConfirmCancle:e.userConfirmCancle}}),r("QrCode",{attrs:{visible:e.userFillCodeVisible,"image-url":e.userFillCodeUrl},on:{closeQrCode:e.userFillCodeClose}})],1)},i=[],a=(r("4160"),r("b0c0"),r("d3b7"),r("159b"),r("5530")),s=r("2f62"),o=r("2934"),l=r("40a4"),u=r("61f7"),c=r("ed08"),m={data:function(){return{searchPanelActive:!0,searchForm:{job_title:"",status:"1",search_key:""},columns:[{title:"姓名",key:"UserName",align:"center"},{title:"职称",key:"ProfessionName",align:"center"},{title:"身份证",key:"IDCardNum",align:"center"},{title:"手机号码",key:"MobilePhone",align:"center"},{title:"电子邮箱",key:"Email",align:"center"},{title:"状态",key:"Status",align:"center",slot:"Status"},{title:"创建时间",key:"CreateTime",align:"center",formatter:function(e,t,r,n){return Object(c["e"])(e.CreateTime,"{y}-{m}-{d}")}},{title:"创建人",key:"CreateUserName",align:"center"}],indexRow:{title:"序号",align:"center",width:60},tableLoading:!1,tableData:[],tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:1},isEdit:!1,userFormVisible:!1,userForm:{userName:"",idCardNum:"",mobilePhone:"",email:"",professionTitleID:"",roleID:[],isBindWx:!1,status:!0},userFormRules:{userName:[{required:!0,trigger:"blur",message:"请输入姓名"}],idCardNum:[{required:!0,trigger:"blur",validator:function(e,t,r){u["e"](t)?r():r(new Error("请输入正确身份证号"))}}],mobilePhone:[{required:!0,trigger:"change",validator:function(e,t,r){u["g"](t)?r():r(new Error("请输入正确手机号码"))}}],email:[{required:!0,trigger:"blur",validator:function(e,t,r){u["c"](t)?r():r(new Error("请输入正确电子邮箱"))}}],professionTitleID:[{required:!0,message:"请选择职称",trigger:"change"}],roleID:[{required:!0,message:"请选择系统角色",trigger:"change"}]},professionTitleOptions:[],roleOptions:[],editDisabled:!1,editSaving:!1,userConfirmVisible:!1,userConfirm:{level:"",unit:"",name:"",mobile:"",idCard:"",jobTitle:""},userFillCodeVisible:!1,userFillCodeUrl:""}}},d={name:"Department",components:{Bar:function(){return r.e("chunk-2d0bac10").then(r.bind(null,"390d"))},BarCell:function(){return r.e("chunk-2d221e17").then(r.bind(null,"cbdf"))},BarSpace:function(){return r.e("chunk-2d2218de").then(r.bind(null,"cb9b"))},SearchPanel:function(){return r.e("chunk-c808d2de").then(r.bind(null,"978e"))},TableBody:function(){return r.e("chunk-79d593e5").then(r.bind(null,"2c21"))},QrCode:function(){return r.e("chunk-2d0cf686").then(r.bind(null,"641c"))},IdentityConfirmation:function(){return r.e("chunk-2d0c9758").then(r.bind(null,"58dc"))}},mixins:[m],computed:Object(a["a"])({},Object(s["c"])({tableSize:function(e){return e.settings.tableSize}})),created:function(){this.doLoad()},methods:{doLoad:function(){var e=this;Object(o["g"])({MainRole:2,InstitutionsID:0}).then((function(t){t.response.forEach((function(e){e.key=e.Name,e.value=e.PTID})),e.professionTitleOptions=t.response})),Object(o["j"])({SelMainRole:2}).then((function(t){t.response.forEach((function(e){e.key=e.RoleName,e.value=e.RoleID})),e.roleOptions=t.response})),this.doRefresh()},doRefresh:function(){var e=this,t=this.searchForm,r=this.pagination,n={MainRole:"2",Status:t.status,PTID:t.job_title||0,KeyWord:t.search_key,PageIndex:r.currentPage,PageSize:r.pageSize};this.tableLoading=!0,Object(l["i"])(n).then((function(t){e.tableData=t.data,e.pagination.total=t.dataCount,e.tableLoading=!1})).catch((function(t){e.tableLoading=!1}))},searchFormSubmit:function(){this.doRefresh()},searchFormReset:function(){this.searchForm={job_title:"",status:"1",search_key:""},this.doRefresh()},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()},handleCheckUserInfo:function(e){var t=this,r=e.target.value;!this.isEdit&&r&&Object(o["a"])({IDCardNum:r,IDType:0}).then((function(e){if(e.success){var r=e.response;t.userConfirmVisible=!0,t.userConfirm={name:r.UserName,mobile:r.MobilePhone,idCard:r.IDCardNum,email:r.Email,adminUserID:r.AdminUserID}}}))},handleSwitchStatus:function(e){var t=this,r=e.Status?"确定停用吗？停用后该账号将无法登陆":"确定启用吗？";this.$confirm(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return e.Status?t.batchClose(e):t.batchOpen(e)}))},batchOpen:function(e){var t=this,r={URID:e.URID};Object(l["r"])(r).then((function(e){e.success?(t.$message({type:"success",message:"操作成功"}),t.doRefresh()):t.$message({type:"success",message:"操作失败"})}))},batchClose:function(e){var t=this,r={URID:e.URID};Object(l["o"])(r).then((function(e){e.success?(t.$message({type:"success",message:"操作成功"}),t.doRefresh()):t.$message({type:"success",message:"操作失败"})}))},handleCreate:function(){this.isEdit=!1,this.userFormVisible=!0,this.userForm.uid=0,this.userForm.urid=0,this.userForm.mainRole=2},handleEdit:function(e){var t=this;this.editDisabled=!0;var r={URID:e.URID};Object(l["a"])(r).then((function(e){t.isEdit=!0,t.userFormVisible=!0;var r=e.response;t.userForm={uid:r.UID,urid:r.URID,userName:r.UserName,idCardNum:r.IDCardNum,mobilePhone:r.MobilePhone,email:r.Email,professionTitleID:r.ProfessionTitleID,roleID:r.RoleID,isBindWx:r.IsBindWx,status:r.Status},t.userForm.mainRole=2}))},userConfirmCancle:function(){this.userConfirmClose()},userConfirmClose:function(){this.userForm.idCardNum="",this.userConfirmVisible=!1,this.userConfirm={}},userConfirmSure:function(e){var t=this.userConfirm,r=t.name,n=t.mobile,i=t.idCard,a=t.email,s=t.adminUserID;this.userConfirmVisible=!1,this.editDisabled=!0,this.userForm=Object.assign(this.userForm,{userName:r,mobilePhone:n,idCardNum:i,email:a,uid:s})},userFormClose:function(){this.userFormVisible=!1,this.editDisabled=!1,this.editSaving=!1,this.userForm={userName:"",idCardNum:"",mobilePhone:"",email:"",professionTitleID:"",roleID:[],isBindWx:!1,status:!0}},userFormConfirm:function(e){var t=this,r=this;function n(){var t=!1;return r.$refs[e].validate((function(e){e&&(t=!0)})),t}if(!n())return!1;if(this.editSaving=!0,this.isEdit){var i=this.userForm;Object(l["s"])(i).then((function(e){t.editSaving=!1,t.$message({message:"恭喜您，提交成功",type:"success"}),t.userFormClose(),t.doRefresh()})).catch((function(){t.editSaving=!1}))}else Object(l["j"])(this.userForm).then((function(e){t.editSaving=!1,t.$message({message:"恭喜您，提交成功",type:"success"}),t.userFormClose(),t.doRefresh()})).catch((function(){t.editSaving=!1}))},userFillCodeCreate:function(){this.userFillCodeVisible=!0,this.userFillCodeUrl=""},userFillCodeClose:function(){this.userFillCodeVisible=!1,this.userFillCodeUrl=""}}},f=d,h=r("2877"),p=Object(h["a"])(f,n,i,!1,null,null,null);t["default"]=p.exports}}]);