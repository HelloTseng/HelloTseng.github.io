(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7dd5464"],{2934:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"j",(function(){return i})),r.d(t,"g",(function(){return s})),r.d(t,"e",(function(){return o})),r.d(t,"i",(function(){return l})),r.d(t,"k",(function(){return u})),r.d(t,"f",(function(){return c})),r.d(t,"h",(function(){return m})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return f})),r.d(t,"n",(function(){return h})),r.d(t,"m",(function(){return p})),r.d(t,"l",(function(){return b})),r.d(t,"d",(function(){return g}));var n=r("b775");function a(e){return Object(n["a"])({url:"api/Sys/CheckUserInfo",method:"get",noNoticeError:!0,params:e})}function i(e){return Object(n["a"])({url:"api/Sys/GetSelRoleList",method:"get",params:e})}function s(e){return Object(n["a"])({url:"api/Sys/GetEnableProfessionnalTitles",method:"get",params:e})}function o(e){return Object(n["a"])({url:"api/Sys/GetEnableExaminerProfessionnalTitles",method:"get",params:e})}function l(e){return Object(n["a"])({url:"api/Global/GetRegionList",method:"get",params:e})}function u(e){return Object(n["a"])({url:"api/Station/GetSelSites",method:"get",params:e})}function c(e){return Object(n["a"])({url:"api/Sys/EnableProfessionList",method:"get",params:e})}function m(e){return Object(n["a"])({url:"api/Examination/LoadQuestionBankOptions",method:"get",params:e})}function d(e){return Object(n["a"])({url:"api/Sys/GetEnableEQLanguages",method:"get",params:e})}function f(e){return Object(n["a"])({url:"api/Station/EnableExamRoomLst",method:"get",params:e})}function h(e){return Object(n["a"])({url:"images/Upload/TempPic",method:"post",data:e,multiple:!0})}function p(e){return Object(n["a"])({url:"images/Upload/TempFile",method:"post",data:e,multiple:!0})}function b(e){return Object(n["a"])({url:"api/images/Upload/NewPic",method:"post",data:e,multiple:!0})}function g(e){return Object(n["a"])({url:"api/Station/EnableExaminerInfos",method:"get",params:e})}},"40a4":function(e,t,r){"use strict";r.d(t,"n",(function(){return a})),r.d(t,"q",(function(){return i})),r.d(t,"t",(function(){return s})),r.d(t,"b",(function(){return o})),r.d(t,"k",(function(){return l})),r.d(t,"c",(function(){return u})),r.d(t,"m",(function(){return c})),r.d(t,"p",(function(){return m})),r.d(t,"u",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return h})),r.d(t,"l",(function(){return p})),r.d(t,"o",(function(){return b})),r.d(t,"r",(function(){return g})),r.d(t,"s",(function(){return v})),r.d(t,"a",(function(){return S})),r.d(t,"j",(function(){return y})),r.d(t,"i",(function(){return C})),r.d(t,"f",(function(){return F})),r.d(t,"g",(function(){return k})),r.d(t,"h",(function(){return I}));var n=r("b775");function a(e){return Object(n["a"])({url:"api/Sys/DisableTeamStaff",method:"get",showLoading:!0,params:e})}function i(e){return Object(n["a"])({url:"api/Sys/EnableTeamStaff",method:"get",showLoading:!0,params:e})}function s(e){return Object(n["a"])({url:"api/Sys/SaveTeamStaff",method:"post",data:e})}function o(e){return Object(n["a"])({url:"api/Sys/GetTeamStaff",method:"get",showLoading:!0,params:e})}function l(e){return Object(n["a"])({url:"api/Sys/AddTeamStaff",method:"post",data:e})}function u(e){return Object(n["a"])({url:"api/Sys/GetTeamStaffList",method:"get",params:e})}function c(e){return Object(n["a"])({url:"api/Sys/DisableTeamInfo",method:"get",showLoading:!0,params:e})}function m(e){return Object(n["a"])({url:"api/Sys/EnableTeamInfo",method:"get",showLoading:!0,params:e})}function d(e){return Object(n["a"])({url:"api/Sys/SaveTeamUserInfo",method:"post",data:e})}function f(e){return Object(n["a"])({url:"api/Sys/GetTeamUserInfo",method:"get",showLoading:!0,params:e})}function h(e){return Object(n["a"])({url:"api/Sys/GetTeamUserInfos",method:"get",params:e})}function p(e){return Object(n["a"])({url:"api/Sys/AddTeamUserInfo",method:"post",data:e})}function b(e){return Object(n["a"])({url:"api/Sys/DisableUserInfo",method:"get",showLoading:!0,params:e})}function g(e){return Object(n["a"])({url:"api/Sys/EnableUserInfo",method:"get",showLoading:!0,params:e})}function v(e){return Object(n["a"])({url:"api/Sys/SaveManagementUserInfo",method:"post",data:e})}function S(e){return Object(n["a"])({url:"api/Sys/GetManagementUserInfo",method:"get",showLoading:!0,params:e})}function y(e){return Object(n["a"])({url:"api/Sys/AddManagementUserInfo",method:"post",data:e})}function C(e){return Object(n["a"])({url:"api/Sys/GetManagementUserInfos",method:"get",params:e})}function F(e){return Object(n["a"])({url:"/vue-admin-template/user-management/user-confirm",method:"get",params:e})}function k(e){return Object(n["a"])({url:"/vue-admin-template/user-management/user-fill-code",method:"get",params:e})}function I(e){return Object(n["a"])({url:"/vue-admin-template/user-management/user-review",method:"get",params:e})}},c2bd:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[r("bar",{attrs:{slot:"title"},slot:"title"},[r("bar-space"),r("bar-cell",[r("el-button",{attrs:{icon:"el-icon-refresh",size:e.tableSize},on:{click:e.doRefresh}},[e._v("刷新")])],1),r("bar-cell",[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"create",expression:"'create'"}],attrs:{icon:"el-icon-plus",type:"danger",size:e.tableSize},on:{click:e.handleCreate}},[e._v("新增总队账号")])],1)],1),r("el-form",{ref:"searchForm",attrs:{inline:"","label-position":"top",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[r("el-form-item",{attrs:{label:"启用状态",prop:"status"}},[r("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.status,callback:function(t){e.$set(e.searchForm,"status",t)},expression:"searchForm.status"}},[r("el-option",{attrs:{label:"启用",value:"1"}}),r("el-option",{attrs:{label:"停用",value:"0"}})],1)],1),r("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[r("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入姓名/手机号码/身份证号",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key",t)},expression:"searchForm.search_key"}})],1),r("el-form-item",{attrs:{label:"操作"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.searchFormReset}},[e._v("清空")])],1)],1)],1),r("table-body",{ref:"mkTable",attrs:{"index-row":e.indexRow,loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,pagination:e.pagination},on:{"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange}},[r("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"50px"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[n.Status?r("span",{staticClass:"text-green"},[e._v("已启用")]):e._e(),n.Status?e._e():r("span",{staticClass:"text-red"},[e._v("已停用")])]}}])}),r("el-table-column",{attrs:{slot:"operate",label:"操作",width:"200",align:"center",fixed:"right"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"edit",expression:"'edit'"}],on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"detail",expression:"'detail'"}],attrs:{type:"primary"},on:{click:function(t){return e.handleDetail(n)}}},[e._v("查看工作人员")]),n.Status?e._e():r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"enable",expression:"'enable'"}],attrs:{type:"success"},on:{click:function(t){return e.handleSwitchStatus(n)}}},[e._v("启用")]),n.Status?r("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"disable",expression:"'disable'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleSwitchStatus(n)}}},[e._v("停用")]):e._e()]}}])})],1),r("el-dialog",{ref:"dailogEdit",attrs:{title:e.isEdit?"编辑总队账号":"新增总队账号",visible:e.userFormVisible,"before-close":e.userFormClose,"destroy-on-close":"","close-on-click-modal":!1,"close-on-press-escape":!1}},[r("el-form",{ref:"userForm",attrs:{"label-position":"right","label-width":"120px",model:e.userForm,rules:e.userFormRules,size:e.tableSize}},[r("el-form-item",{attrs:{label:"所属层级"}},[r("span",[e._v("总队")])]),r("AreaSelect",{ref:"areaSelect",attrs:{"province-code":e.userForm.ProvinceNum,"city-code":e.userForm.Citys,"area-label":"所属省市","area-prop":"Citys"},on:{areaSelectChange:e.changeArea}}),r("el-form-item",{attrs:{label:"单位名称",prop:"UnitName"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.userForm.UnitName,callback:function(t){e.$set(e.userForm,"UnitName",t)},expression:"userForm.UnitName"}})],1),r("el-form-item",{attrs:{label:"通讯地址",prop:"Address"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.userForm.Address,callback:function(t){e.$set(e.userForm,"Address",t)},expression:"userForm.Address"}})],1),r("el-form-item",{attrs:{label:"负责人姓名",prop:"UserName"}},[r("el-input",{attrs:{placeholder:"请输入",disabled:e.editDisabled},model:{value:e.userForm.UserName,callback:function(t){e.$set(e.userForm,"UserName",t)},expression:"userForm.UserName"}})],1),r("el-form-item",{attrs:{label:"身份证号",prop:"IDCardNum"}},[r("el-input",{attrs:{placeholder:"请输入",disabled:e.editDisabled},model:{value:e.userForm.IDCardNum,callback:function(t){e.$set(e.userForm,"IDCardNum",t)},expression:"userForm.IDCardNum"}})],1),r("el-form-item",{attrs:{label:"手机号码",prop:"MobilePhone"}},[r("el-input",{attrs:{placeholder:"请输入",disabled:e.editDisabled},model:{value:e.userForm.MobilePhone,callback:function(t){e.$set(e.userForm,"MobilePhone",t)},expression:"userForm.MobilePhone"}})],1),r("el-form-item",{attrs:{label:"电子邮箱",prop:"Email"}},[r("el-input",{attrs:{placeholder:"请输入",disabled:e.editDisabled},model:{value:e.userForm.Email,callback:function(t){e.$set(e.userForm,"Email",t)},expression:"userForm.Email"}})],1),r("el-form-item",{attrs:{label:"职称",prop:"ProfessionTitleID"}},[r("el-select",{staticClass:"width-full",attrs:{placeholder:"请选择"},model:{value:e.userForm.ProfessionTitleID,callback:function(t){e.$set(e.userForm,"ProfessionTitleID",t)},expression:"userForm.ProfessionTitleID"}},e._l(e.professionTitleOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.key,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"系统角色",prop:"RoleID"}},[r("el-checkbox-group",{attrs:{size:e.tableSize},model:{value:e.userForm.RoleID,callback:function(t){e.$set(e.userForm,"RoleID",t)},expression:"userForm.RoleID"}},e._l(e.roleOptions,(function(t,n){return r("el-checkbox",{key:n,attrs:{label:t.value}},[e._v(e._s(t.key))])})),1)],1),r("el-form-item",{attrs:{label:"微信绑定"}},[r("span",[e._v(e._s(e.userForm.IsBindWx?"是":"未绑定"))])]),r("el-form-item",{attrs:{label:"状态"}},[r("el-radio-group",{model:{value:e.userForm.Status,callback:function(t){e.$set(e.userForm,"Status",t)},expression:"userForm.Status"}},[r("el-radio",{attrs:{label:!0}},[e._v("启用")]),r("el-radio",{attrs:{label:!1}},[e._v("停用")])],1)],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",loading:e.editSaving},on:{click:function(t){return e.userFormConfirm("userForm")}}},[e._v("保存")]),r("el-button",{on:{click:function(t){return e.userFormClose()}}},[e._v("取消")])],1)],1),r("identity-confirmation",{attrs:{"user-confirm-visible":e.userConfirmVisible,"user-confirm":e.userConfirm},on:{userConfirmSure:e.userConfirmSure,userConfirmClose:e.userConfirmClose,userConfirmCancle:e.userConfirmCancle}})],1)},a=[],i=(r("4160"),r("b0c0"),r("d3b7"),r("159b"),r("5530")),s=r("2f62"),o=r("2934"),l=r("40a4"),u=r("61f7"),c=r("ed08"),m={data:function(){return{searchPanelActive:!0,searchForm:{status:"1",search_key:""},columns:[{title:"省份",key:"ReginName",align:"center"},{title:"单位名称",key:"UnitName",align:"center"},{title:"地址",key:"Address",align:"center"},{title:"负责人姓名",key:"TeamUserName",align:"center"},{title:"手机号码",key:"MobilePhone",align:"center"},{title:"创建时间",key:"CreateDate",align:"center",formatter:function(e,t,r,n){return Object(c["e"])(e.CreateDate,"{y}-{m}-{d}")}},{title:"创建人",key:"CreateUserName",align:"center"},{title:"状态",key:"Status",align:"center",slot:"Status"}],indexRow:{title:"序号",align:"center",width:60},tableLoading:!1,tableData:[],tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:1},isEdit:!1,userFormVisible:!1,userForm:{ProvinceNum:null,Citys:null,UnitName:"",Address:"",UID:"",URID:"",MainRole:3,UserName:"",IDCardNum:"",MobilePhone:"",Email:"",Status:!0,IsBindWx:!1,ProfessionTitleID:"",RoleID:[]},userFormRules:{Citys:[{required:!0,message:"请选择",trigger:"change"}],UnitName:[{required:!0,trigger:"blur",message:"请输入"}],Address:[{required:!0,trigger:"blur",message:"请输入"}],MainRole:[{required:!0,trigger:"change",message:"请选择"}],UserName:[{required:!0,trigger:"blur",message:"请输入"}],IDCardNum:[{required:!0,trigger:"blur",validator:function(e,t,r){u["e"](t)?r():r(new Error("请输入正确身份证号"))}}],MobilePhone:[{required:!0,trigger:"blur",validator:function(e,t,r){u["g"](t)?r():r(new Error("请输入正确手机号码"))}}],Email:[{required:!0,trigger:"blur",validator:function(e,t,r){u["c"](t)?r():r(new Error("请输入正确电子邮箱"))}}],Status:[{required:!0,trigger:"change",message:"请选择"}],ProfessionTitleID:[{required:!0,trigger:"change",message:"请选择"}],RoleID:[{required:!0,trigger:"change",message:"请选择"}]},professionTitleOptions:[],roleOptions:[],editDisabled:!1,editSaving:!1,userConfirmVisible:!1,userConfirm:{level:"",unit:"",name:"",mobile:"",idCard:"",jobTitle:""}}}},d={name:"Department",components:{Bar:function(){return r.e("chunk-2d0bac10").then(r.bind(null,"390d"))},BarCell:function(){return r.e("chunk-2d221e17").then(r.bind(null,"cbdf"))},BarSpace:function(){return r.e("chunk-2d2218de").then(r.bind(null,"cb9b"))},SearchPanel:function(){return r.e("chunk-c808d2de").then(r.bind(null,"978e"))},TableBody:function(){return r.e("chunk-79d593e5").then(r.bind(null,"2c21"))},IdentityConfirmation:function(){return r.e("chunk-2d0c9758").then(r.bind(null,"58dc"))},AreaSelect:function(){return r.e("chunk-2d209560").then(r.bind(null,"a92d"))}},mixins:[m],computed:Object(i["a"])({},Object(s["c"])({tableSize:function(e){return e.settings.tableSize}})),created:function(){this.doLoad()},methods:{doLoad:function(){var e=this;Object(o["g"])({MainRole:3,InstitutionsID:0}).then((function(t){t.response.forEach((function(e){e.key=e.Name,e.value=e.PTID})),e.professionTitleOptions=t.response})),Object(o["j"])({SelMainRole:3}).then((function(t){t.response.forEach((function(e){e.key=e.RoleName,e.value=e.RoleID})),e.roleOptions=t.response})),this.doRefresh()},doRefresh:function(){var e=this,t=this.searchForm,r=this.pagination,n={Status:t.status,KeyWord:t.search_key,PageIndex:r.currentPage,PageSize:r.pageSize};this.tableLoading=!0,Object(l["e"])(n).then((function(t){e.tableData=t.data,e.pagination.total=t.dataCount,e.tableLoading=!1})).catch((function(t){e.tableLoading=!1}))},searchFormSubmit:function(){this.doRefresh()},searchFormReset:function(){this.searchForm={status:"1",search_key:""},this.doRefresh()},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()},handleCheckUserInfo:function(e){var t=this,r=e.target.value;!this.isEdit&&r&&Object(o["a"])({IDCardNum:r,IDType:0}).then((function(e){if(e.success){var r=e.response;t.userConfirmVisible=!0,t.userConfirm={name:r.UserName,mobile:r.MobilePhone,idCard:r.IDCardNum,email:r.Email,adminUserID:r.AdminUserID}}}))},handleSwitchStatus:function(e){var t=this,r=e.Status?"确定停用总队账号吗？停用后整个总队层级以及相关工作人员账号都将无法使用":"确定启用吗？";this.$confirm(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return e.Status?t.batchClose(e):t.batchOpen(e)}))},batchOpen:function(e){var t=this,r={TeamID:e.TeamID};Object(l["p"])(r).then((function(e){e.success?(t.$message({type:"success",message:"操作成功"}),t.doRefresh()):t.$message({type:"success",message:"操作失败"})}))},batchClose:function(e){var t=this,r={TeamID:e.TeamID};Object(l["m"])(r).then((function(e){e.success?(t.$message({type:"success",message:"操作成功"}),t.doRefresh()):t.$message({type:"success",message:"操作失败"})}))},changeArea:function(e){console.log(e),this.userForm.ProvinceNum=e.provinceCode,this.userForm.Citys=e.cityCode},handleCreate:function(){this.isEdit=!1,this.userFormVisible=!0,this.userForm.UID=0,this.userForm.URID=0,this.userForm.MainRole=3},handleDetail:function(e){this.$router.push({name:"UserAccount",params:{TeamID:e.TeamID,UnitName:e.UnitName}})},handleEdit:function(e){var t=this;this.editDisabled=!0;var r={TeamID:e.TeamID};Object(l["d"])(r).then((function(e){t.isEdit=!0,t.userFormVisible=!0;var r=e.response;t.userForm=Object(i["a"])({},r)})).then((function(){t.clearValidate()}))},clearValidate:function(){this.$refs.userForm.clearValidate()},userConfirmCancle:function(){this.userConfirmClose()},userConfirmClose:function(){this.userForm.idCardNum="",this.userConfirmVisible=!1,this.userConfirm={}},userConfirmSure:function(e){var t=this.userConfirm,r=t.name,n=t.mobile,a=t.idCard,i=t.email,s=t.adminUserID;this.userConfirmVisible=!1,this.editDisabled=!0,this.userForm=Object.assign(this.userForm,{userName:r,mobilePhone:n,idCardNum:a,email:i,uid:s})},userFormClose:function(){this.userFormVisible=!1,this.editDisabled=!1,this.editSaving=!1,this.userForm={ProvinceNum:null,Citys:null,UnitName:"",Address:"",UID:"",URID:"",MainRole:3,UserName:"",IDCardNum:"",MobilePhone:"",Email:"",Status:!0,IsBindWx:!1,ProfessionTitleID:"",RoleID:[]}},userFormConfirm:function(e){var t=this,r=this;function n(){var t=!1;return r.$refs[e].validate((function(e){e&&(t=!0)})),t}if(!n())return!1;var a=this.userForm;this.editSaving=!0,this.isEdit?Object(l["u"])(a).then((function(e){t.editSaving=!1,t.$message({message:"恭喜您，提交成功",type:"success"}),t.userFormClose(),t.doRefresh()})).catch((function(){t.editSaving=!1})):Object(l["l"])(a).then((function(e){t.editSaving=!1,t.$message({message:"恭喜您，提交成功",type:"success"}),t.userFormClose(),t.doRefresh()})).catch((function(){t.editSaving=!1}))}}},f=d,h=r("2877"),p=Object(h["a"])(f,n,a,!1,null,null,null);t["default"]=p.exports}}]);