(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fbf9fff"],{"5d8b":function(e,t,n){"use strict";n.d(t,"l",(function(){return r})),n.d(t,"o",(function(){return i})),n.d(t,"r",(function(){return s})),n.d(t,"i",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"n",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"m",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"k",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return g})),n.d(t,"q",(function(){return S})),n.d(t,"p",(function(){return v})),n.d(t,"s",(function(){return k})),n.d(t,"j",(function(){return y})),n.d(t,"h",(function(){return x}));var a=n("b775");function r(e){return Object(a["a"])({url:"api/station/ExaminerInfos",method:"get",params:e})}function i(e){return Object(a["a"])({url:"api/station/LoadExaminerInfo",method:"get",params:e})}function s(e){return Object(a["a"])({url:"api/station/SaveExaminerInfo",method:"post",data:e})}function o(e){return Object(a["a"])({url:"api/station/EnableExaminer",method:"get",params:e})}function c(e){return Object(a["a"])({url:"api/station/DisableExaminer",method:"get",params:e})}function l(e){return Object(a["a"])({url:"api/station/ExaminerTrainings",method:"get",params:e})}function u(e){return Object(a["a"])({url:"api/station/AddExaminerTrainings",method:"post",data:e})}function d(e){return Object(a["a"])({url:"api/station/DelExaminerTrainings",method:"get",params:e})}function h(e){return Object(a["a"])({url:"api/station/ExaminerPraises",method:"get",params:e})}function m(e){return Object(a["a"])({url:"api/station/AddExaminerPraise",method:"post",data:e})}function p(e){return Object(a["a"])({url:"api/station/DelExaminerPraise",method:"get",params:e})}function b(e){return Object(a["a"])({url:"api/station/ExaminerDisciplines",method:"get",params:e})}function f(e){return Object(a["a"])({url:"api/station/AddExaminerDiscipline",method:"post",data:e})}function g(e){return Object(a["a"])({url:"api/station/DelExaminerDiscipline",method:"post",data:e})}function S(e){return Object(a["a"])({url:"api/station/PersonnelRecordsList",method:"get",params:e})}function v(e){return Object(a["a"])({url:"api/station/LoadPersonnelRecords",method:"get",params:e})}function k(e){return Object(a["a"])({url:"api/station/SavePersonnelRecords",method:"post",data:e})}function y(e){return Object(a["a"])({url:"api/station/EnablePersonnelRecords",method:"get",params:e})}function x(e){return Object(a["a"])({url:"api/station/DisablePersonnelRecords",method:"get",params:e})}},c85c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[n("bar",{attrs:{slot:"title"},slot:"title"},[n("bar-space"),n("bar-cell",[n("el-button",{attrs:{icon:"el-icon-refresh",size:e.tableSize},on:{click:e.doRefresh}},[e._v("刷新")])],1),n("bar-cell",[n("el-button",{attrs:{icon:"el-icon-s-grid",size:e.tableSize}},[e._v("人员填报码")])],1),n("bar-cell",[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"create",expression:"'create'"}],attrs:{icon:"el-icon-plus",size:e.tableSize,type:"danger"},on:{click:e.handleCreate}},[e._v("新增人员")])],1)],1),n("el-form",{ref:"searchForm",attrs:{"label-position":"top",inline:"",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[e.showAreaSelectSearch?n("AreaSelect",{attrs:{"area-label":"省份","show-city":!1,"province-code":e.searchForm.province},on:{areaSelectChange:e.searchFormAreaChange}}):e._e(),e.showSiteSelectSearch?n("el-form-item",{attrs:{label:"类型"}},[n("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.type,callback:function(t){e.$set(e.searchForm,"type",t)},expression:"searchForm.type"}},[n("el-option",{attrs:{label:"鉴定站",value:0}}),n("el-option",{attrs:{label:"鉴定点",value:1}})],1)],1):e._e(),n("el-form-item",{attrs:{label:"状态"}},[n("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.Status,callback:function(t){e.$set(e.searchForm,"Status",t)},expression:"searchForm.Status"}},[n("el-option",{attrs:{label:"停用",value:0}}),n("el-option",{attrs:{label:"启用",value:1}})],1)],1),n("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入姓名/联系号码",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key",t)},expression:"searchForm.search_key"}})],1),n("el-form-item",{attrs:{label:"操作"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("查询")]),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.searchFormReset}},[e._v("清空")])],1)],1)],1),n("table-body",{ref:"mkTable",attrs:{"index-row":e.indexRow,loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,pagination:e.pagination},on:{"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange}},[n("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"50px"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.Status?n("span",{staticClass:"text-green"},[e._v("启用")]):e._e(),a.Status?e._e():n("span",{staticClass:"text-red"},[e._v("停用")])]}}])}),e.showOperate?n("el-table-column",{attrs:{slot:"operate",label:"操作",align:"center",fixed:"right"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.Status?e._e():n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"enable",expression:"'enable'"}],attrs:{type:"success"},on:{click:function(t){return e.handleSwitchStatus(a)}}},[e._v("启用")]),a.Status?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"disable",expression:"'disable'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleSwitchStatus(a)}}},[e._v("停用")]):e._e(),n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"edit",expression:"'edit'"}],attrs:{type:"primary"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")])]}}],null,!1,1343409046)}):e._e()],1)],1)},r=[],i=(n("caad"),n("d3b7"),n("5530")),s=n("2f62"),o=n("5d8b"),c=n("61f7"),l={methods:{isGuidance:function(){var e=!1,t=this.$store.getters.mainRoles;return"Guidance"===t&&(e=!0),e}},data:function(){return{role:"",searchPanelActive:!0,searchForm:{province:null,type:"",Status:"",search_key:""},columns:[{title:"所属站点",key:"SiteName",align:"center"},{title:"职称",key:"PTName",align:"center"},{title:"姓名",key:"UserName",align:"center"},{title:"性别",key:"UserSex",align:"center",minWidth:60,formatter:function(e){var t="";switch(e.UserSex){case 0:t="女";break;case 1:t="男";break;case 2:t="保密";break}return t}},{title:"身份证号",key:"IDCardNum",align:"center","min-width":150},{title:"联系号码",key:"MobilePhone",align:"center"},{title:"电子邮箱",key:"Email",align:"center"},{title:"状态",key:"Status",slot:"Status"}],indexRow:{title:"序号",align:"center",width:60},tableLoading:!1,tableData:[],tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:0},canEdit:!0,elForm:{SiteProfessionLst:[]},elFormRules:{RegionID:[{required:!0,message:"请输入",trigger:"blur"}],SiteType:[{required:!0,message:"请选择",trigger:"change"}],OrganizationCode:[{required:!0,message:"请输入",trigger:"blur"}],SiteName:[{required:!0,message:"请输入",trigger:"blur"}],AdminUserName:[{required:!0,message:"请输入",trigger:"blur"}],ContactNumber:[{required:!0,trigger:"blur",validator:function(e,t,n){c["g"](t)?n():n(new Error("请输入正确手机号码"))}}],Address:[{required:!0,message:"请输入",trigger:"blur"}],ContactEmail:[{required:!0,message:"请输入",trigger:"blur"}],Status:[{required:!0,message:"请选择",trigger:"change"}]},workTypeTable:[{title:"职业工种",key:"ProfessionName",align:"center"},{title:"技能等级",key:"SkillLevelName",align:"center"},{title:"是否可鉴定理论",key:"IsToTheory",align:"center",component:{name:"el-switch",disabled:!this.isGuidance()}},{title:"是否可鉴定技能",key:"IsToSkills",align:"center",component:{name:"el-switch",disabled:!this.isGuidance()}}]}}},u={name:"OtherPersonnel",components:{AreaSelect:function(){return n.e("chunk-1bcfd332").then(n.bind(null,"a92d"))},Bar:function(){return n.e("chunk-2d0bac10").then(n.bind(null,"390d"))},BarCell:function(){return n.e("chunk-2d221e17").then(n.bind(null,"cbdf"))},BarSpace:function(){return n.e("chunk-2d2218de").then(n.bind(null,"cb9b"))},SearchPanel:function(){return n.e("chunk-c808d2de").then(n.bind(null,"978e"))},TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))}},mixins:[l],computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{showAreaSelectSearch:function(){var e=["Department","Guidance"];return e.includes(this.role)},showSiteSelectSearch:function(){var e=["Site"];return e.includes(this.role)},showOperate:function(){var e=["Site","Station"];return e.includes(this.role)}}),created:function(){this.role=this.$store.getters.mainRoles,this.doLoad()},methods:{doRefresh:function(){var e=this,t=this.pagination,n=this.searchForm,a=n.province,r=n.type,i=n.Status,s=n.search_key,c={ProvinceNum:null===a?-1:a,SiteID:""===r?-1:r,Status:""===i?-1:i,KeyWord:s,PageIndex:t.currentPage,PageSize:t.pageSize};this.tableLoading=!0,Object(o["q"])(c).then((function(t){t.success&&(e.tableData=t.data,e.pagination.total=t.dataCount,e.tableLoading=!1)})).catch((function(t){e.tableLoading=!1}))},doLoad:function(){this.doRefresh()},searchFormSubmit:function(){this.doRefresh()},searchFormReset:function(){this.searchForm={province:null,type:"",Status:"",search_key:""},this.doRefresh()},handleCreate:function(){this.$router.push({name:"CreateOtherPersonnel"})},handleEdit:function(e){this.$router.push({name:"EditOtherPersonnel",params:{id:e.PRID}})},handleSwitchStatus:function(e){var t=this,n=e.Status?"确定停用吗？":"确定启用吗？";this.$confirm(n,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return e.Status?t.batchClose(e):t.batchOpen(e)}))},batchOpen:function(e){var t=this,n={PRID:e.PRID};Object(o["j"])(n).then((function(e){e.success?(t.$message({type:"success",message:"操作成功"}),t.doRefresh()):t.$message({type:"success",message:"操作失败"})}))},batchClose:function(e){var t=this,n={PRID:e.PRID};Object(o["h"])(n).then((function(e){e.success?(t.$message({type:"success",message:"操作成功"}),t.doRefresh()):t.$message({type:"success",message:"操作失败"})}))},searchFormAreaChange:function(e){this.searchForm.province=e.provinceCode},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()}}},d=u,h=n("2877"),m=Object(h["a"])(d,a,r,!1,null,null,null);t["default"]=m.exports}}]);