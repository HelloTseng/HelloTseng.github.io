(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9e965a0"],{"0132":function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"j",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"i",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f}));var r=n("b775");function a(e){return Object(r["a"])({url:"api/Supervision/GetYearInspectPageList",method:"get",params:e})}function i(e){return Object(r["a"])({url:"api/Supervision/UploadYearInspectSelfEvaluationReport",method:"post",data:e})}function o(e){return Object(r["a"])({url:"api/Supervision/GetYearInspectSelfEvaluationReport",method:"get",params:e})}function s(e){return Object(r["a"])({url:"api/Supervision/ApproveYearInspect",method:"post",data:e})}function u(e){return Object(r["a"])({url:"api/Supervision/GetYearInspectApprovalList",method:"get",params:e})}function c(e){return Object(r["a"])({url:"api/Supervision/UploadAssessmentSelfEvaluationReport",method:"post",data:e})}function l(e){return Object(r["a"])({url:"api/Supervision/ApproveAssessment",method:"post",data:e})}function p(e){return Object(r["a"])({url:"api/Supervision/GetAssessmentSelfEvaluationReport",method:"get",params:e})}function d(e){return Object(r["a"])({url:"api/Supervision/GetAssessmentApprovalList",method:"get",params:e})}function f(e){return Object(r["a"])({url:"api/Supervision/GetAssessmentPageList",method:"get",params:e})}},"0af3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[n("bar",{attrs:{slot:"title"},slot:"title"},[n("bar-space"),n("bar-cell",[n("el-button",{attrs:{icon:"el-icon-refresh",size:e.tableSize},on:{click:e.doRefresh}},[e._v("刷新")])],1)],1),n("el-form",{ref:"searchForm",attrs:{"label-position":"top",inline:"",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[e.showAreaSelectSearch?n("AreaSelect",{staticStyle:{width:"130px"},attrs:{"area-label":"省份","show-city":!1,"province-code":e.searchForm.provinceID},on:{areaSelectChange:e.searchFormAreaChange}}):e._e(),n("el-form-item",{attrs:{label:"审核状态"}},[n("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.approvalStatus,callback:function(t){e.$set(e.searchForm,"approvalStatus",t)},expression:"searchForm.approvalStatus"}},e._l(e.approvalOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"评估结果"}},[n("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.assessmentStatus,callback:function(t){e.$set(e.searchForm,"assessmentStatus",t)},expression:"searchForm.assessmentStatus"}},e._l(e.assessmentStatusOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"日期范围"}},[n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.searchForm.time,callback:function(t){e.$set(e.searchForm,"time",t)},expression:"searchForm.time"}})],1),n("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入鉴定站名称",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key",t)},expression:"searchForm.search_key"}})],1),e.showOperate?n("el-form-item",{attrs:{label:"操作"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("查询")]),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.searchFormReset}},[e._v("清空")])],1):e._e()],1)],1),n("table-body",{ref:"mkTable",attrs:{"index-row":e.indexRow,loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,pagination:e.pagination},on:{"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange}},[n("el-table-column",{attrs:{slot:"ApprovalStatus",label:"审核状态",align:"center"},slot:"ApprovalStatus",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[0==r.ApprovalStatus?n("span",[e._v("-")]):e._e(),1==r.ApprovalStatus?n("span",{staticClass:"text-green"},[e._v("待审核")]):e._e(),2==r.ApprovalStatus?n("span",[e._v("已审核")]):e._e()]}}])}),n("el-table-column",{attrs:{slot:"RectificationPeriod",label:"整改期限",align:"center","min-width":"130px"},slot:"RectificationPeriod",scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[n("RectificationPeriod",{attrs:{row:t}})]}}])}),n("el-table-column",{attrs:{slot:"operate",label:"操作",align:"center",fixed:"right"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e.showBtnUploadReport(r)?n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.handleReport(r,"create")}}},[e._v("上传自评报告")]):e._e(),e.showBtnUploadRectify(r)?n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.handleReport(r,"edit")}}},[e._v("上传整改报告")]):e._e(),e.showBtnViewReport(r)?n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.handleReport(r,"detail")}}},[e._v("查看自评报告")]):e._e(),e.showBtnReviewInspection(r)?n("el-link",{attrs:{type:"success"},on:{click:function(t){return e.handleReview(r,"Inspection")}}},[e._v("审核")]):e._e(),e.showBtnReviewRectify(r)?n("el-link",{attrs:{type:"success"},on:{click:function(t){return e.handleReview(r,"Rectify")}}},[e._v("审核")]):e._e(),e.showBtnReviewRecord(r)?n("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.handleReviewList(r)}}},[e._v("审核记录")]):e._e()]}}])})],1),n("ReviewDialog",{attrs:{tap:"Evaluation",visible:e.reviewVisible,record:e.reviewRecord,category:e.reviewCategory},on:{"update:visible":function(t){e.reviewVisible=t},sure:e.handleReviewSure,showReport:e.handleReport}}),n("ReviewList",{attrs:{record:e.reviewListRecord,"table-data":e.reviewListTable,visible:e.reviewListVisible},on:{"update:visible":function(t){e.reviewListVisible=t},review:e.handleReview,showReport:e.handleReport}}),n("ReviewReport",{attrs:{visible:e.reportVisible,title:e.reportTitle,content:e.reportContent,record:e.reportRecord,category:e.reportCategory},on:{"update:visible":function(t){e.reportVisible=t},sure:e.handleReportSure}})],1)},a=[],i=(n("caad"),n("d3b7"),n("5530")),o=n("2f62"),s=n("0132"),u=n("db42"),c=n("ed08"),l={data:function(){return{mainRoles:"",searchPanelActive:!0,searchForm:{provinceID:null,approvalStatus:"",assessmentStatus:"",time:[],search_key:""},approvalOptions:[{value:0,label:"无"},{value:1,label:"待审核"},{value:2,label:"已审核"}],assessmentStatusOptions:[{value:0,label:"无 "},{value:1,label:"良好 "},{value:2,label:"限期整改中 "},{value:3,label:"限期整改完毕 "},{value:4,label:"整改合格 "},{value:5,label:"整改不合格 "},{value:6,label:"不合格 "},{value:7,label:"优秀"}],columns:[{title:"鉴定站",key:"SiteName",align:"center"},{title:"上传状态",key:"UploadStatus",align:"center",formatter:function(e,t,n,r){var a="";switch(e.UploadStatus){case 0:a="未上传";break;case 1:a="已上传";break}return a}},{title:"上传时间",key:"UploadDate",align:"center",formatter:function(e,t,n,r){return Object(c["e"])(e.UploadDate,"{y}-{m}-{d}")||"-"}},{title:"上传人",key:"UploadUName",align:"center"},{title:"审核状态",key:"ApprovalStatus",slot:"ApprovalStatus"},{title:"审核时间",key:"ApprovalDate",align:"center",formatter:function(e,t,n,r){return Object(c["e"])(e.ApprovalDate,"{y}-{m}-{d}")||"-"}},{title:"审核人",key:"ApprovalUName",align:"center"},{title:"评估结果",key:"AssessmentStatus",align:"center",formatter:function(e){var t="-";switch(e.AssessmentStatus){case 0:t="无 ";break;case 1:t="良好 ";break;case 2:t="限期整改中 ";break;case 3:t="限期整改完毕 ";break;case 4:t="整改合格 ";break;case 5:t="整改不合格 ";break;case 6:t="不合格 ";break;case 7:t="优秀";break}return t}},{title:"整改期限",key:"RectificationPeriod",slot:"RectificationPeriod"}],indexRow:{title:"序号",align:"center",width:60},tableLoading:!1,tableData:[],tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:1},reviewListRecord:{},reviewListTable:[],reviewListVisible:!1,reviewVisible:!1,reviewRecord:{},reviewCategory:"",reportVisible:!1,reportRecord:{},reportCategory:"detail",reportTitle:"报告查看",reportContent:""}}},p={name:"Evaluation",components:{AreaSelect:function(){return n.e("chunk-1bcfd332").then(n.bind(null,"a92d"))},Bar:function(){return n.e("chunk-2d0bac10").then(n.bind(null,"390d"))},BarCell:function(){return n.e("chunk-2d221e17").then(n.bind(null,"cbdf"))},BarSpace:function(){return n.e("chunk-2d2218de").then(n.bind(null,"cb9b"))},SearchPanel:function(){return n.e("chunk-c808d2de").then(n.bind(null,"978e"))},TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))},ReviewDialog:function(){return n.e("chunk-2d21d151").then(n.bind(null,"d07f"))},ReviewList:function(){return n.e("chunk-2d0de502").then(n.bind(null,"84b2"))},RectificationPeriod:function(){return n.e("chunk-2d0e57c0").then(n.bind(null,"954b"))},ReviewReport:function(){return n.e("chunk-2e989a81").then(n.bind(null,"e93c"))}},mixins:[l],computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{showOperate:function(){return"Station"===this.mainRoles||"Guidance"===this.mainRoles},showAreaSelectSearch:function(){var e=!1,t=["Guidance","Department"];return t.includes(this.mainRoles)&&(e=!0),e}}),created:function(){this.doLoad()},methods:{doLoad:function(){this.doRefresh()},doRefresh:function(){var e=this;this.mainRoles=this.$store.getters.mainRoles;var t=this.pagination,n=this.searchForm,r=n.provinceID,a=n.approvalStatus,i=n.assessmentStatus,o=n.time,u=n.search_key,c={provinceID:r,approvalStatus:a,assessmentStatus:i,dateStart:o.length?o[0]:"",dateEnd:o.length?o[1]:"",siteName:u,intPageIndex:t.currentPage,intPageSize:t.pageSize};this.tableLoading=!0,this.tableData=[],Object(s["d"])(c).then((function(t){e.tableLoading=!1,t.success&&(e.tableData=t.data,e.pagination.total=t.dataCount)})).catch((function(t){e.tableLoading=!1}))},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()},searchFormSubmit:function(){this.doRefresh()},searchFormReset:function(e){this.searchForm={provinceID:null,approvalStatus:"",assessmentStatus:"",time:[],search_key:""},this.doRefresh()},searchFormAreaChange:function(e){this.searchForm.provinceID=e.provinceCode},showBtnUploadReport:function(e){var t=!1,n=e.UploadStatus,r=e.ApprovalStatus,a=e.AssessmentStatus;return 0===n&&0===r&&0===a&&(t=!0),t},showBtnViewReport:function(e){var t=!1,n=e.UploadStatus,r=e.ApprovalStatus,a=e.AssessmentStatus,i=this.mainRoles;return"Station"===i&&1===n&&1===r&&0===a&&(t=!0),t},showBtnReviewInspection:function(e){var t=!1,n=e.UploadStatus,r=e.ApprovalStatus,a=e.AssessmentStatus,i=this.mainRoles;return"Guidance"===i&&1===n&&1===r&&0===a&&(t=!0),t},showBtnReviewRectify:function(e){var t=!1,n=e.UploadStatus,r=e.ApprovalStatus,a=e.AssessmentStatus,i=this.mainRoles;return"Guidance"===i&&1===n&&1===r&&3===a&&(t=!0),t},showBtnReviewRecord:function(e){var t=!1,n=e.UploadStatus,r=e.ApprovalStatus,a=e.AssessmentStatus;return 1!==n||2!==r||7!==a&&1!==a||(t=!0),0===n&&0===r&&2===a&&(t=!0),1===n&&1===r&&3===a&&(t=!0),1!==n||2!==r||4!==a&&5!==a||(t=!0),t},showBtnUploadRectify:function(e){var t=!1,n=e.UploadStatus,r=e.ApprovalStatus,a=e.AssessmentStatus,i=this.mainRoles;return"Station"===i&&0===n&&0===r&&2===a&&(t=!0),t},handleReview:function(e,t){this.reviewRecord=e,this.reviewCategory=t,this.reviewVisible=!0},handleReviewSure:function(e,t){var n=this;this.$confirm("是否确认审核","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r=Object(i["a"])({AssessmentID:t.ID},e);console.log("-> handleReviewSure",r),Object(s["a"])(r).then((function(e){n.doRefresh(),e.success&&(n.reviewVisible=!1,n.reportVisible=!1,n.reviewListVisible=!1)}))}))},handleReport:function(e,t){var n=this,r={approvalID:e.AssessmentApprovalID};switch(t){case"detail":Object(s["e"])(r).then((function(r){r.success&&(n.reportTitle="报告查看",n.reportContent=r.response.ReportContent,n.reportRecord=e,n.reportCategory=t,n.reportVisible=!0)}));break;case"edit":Object(s["e"])(r).then((function(r){r.success&&(n.reportTitle="上传整改报告",n.reportContent=r.response.ReportContent,n.reportRecord=e,n.reportCategory=t,n.reportVisible=!0)}));break;case"create":"Guidance"===this.mainRoles&&Object(u["H"])().then((function(r){r.success&&(n.reportTitle="上传自评报告",n.reportContent=r.response.TemplateContent,n.reportRecord=e,n.reportCategory=t,n.reportVisible=!0)}));break}},handleReportSure:function(e,t){var n=this;this.$confirm("是否确认上传报告","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log("-> handleReportSure",e);var r=n.mainRoles,a={AssessmentID:t.ID,approvalContent:e.reportContent};"Guidance"===r?Object(s["i"])(a).then((function(e){n.doRefresh(),e.success&&(n.$message({message:"上传成功，请审核",type:"success"}),n.reportVisible=!1,n.handleReview(t,"Inspection"))})):"Station"===r&&Object(s["i"])(a).then((function(e){n.doRefresh(),e.success&&(n.$message({message:"上传成功",type:"success"}),n.reportVisible=!1)}))}))},handleReviewList:function(e){var t=this,n={AssessmentID:e.ID};Object(s["c"])(n).then((function(n){n.success&&(t.reviewListRecord=e,t.reviewListTable=n.response,t.reviewListVisible=!0)}))}}},d=p,f=n("2877"),h=Object(f["a"])(d,r,a,!1,null,null,null);t["default"]=h.exports},db42:function(e,t,n){"use strict";n.d(t,"E",(function(){return a})),n.d(t,"eb",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"U",(function(){return u})),n.d(t,"T",(function(){return c})),n.d(t,"t",(function(){return l})),n.d(t,"S",(function(){return p})),n.d(t,"f",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"j",(function(){return h})),n.d(t,"u",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"ab",(function(){return v})),n.d(t,"p",(function(){return S})),n.d(t,"K",(function(){return g})),n.d(t,"L",(function(){return y})),n.d(t,"J",(function(){return R})),n.d(t,"d",(function(){return O})),n.d(t,"q",(function(){return w})),n.d(t,"c",(function(){return j})),n.d(t,"h",(function(){return k})),n.d(t,"V",(function(){return A})),n.d(t,"Q",(function(){return C})),n.d(t,"v",(function(){return L})),n.d(t,"s",(function(){return G})),n.d(t,"X",(function(){return D})),n.d(t,"P",(function(){return _})),n.d(t,"W",(function(){return T})),n.d(t,"r",(function(){return x})),n.d(t,"D",(function(){return F})),n.d(t,"m",(function(){return I})),n.d(t,"k",(function(){return P})),n.d(t,"n",(function(){return B})),n.d(t,"Y",(function(){return E})),n.d(t,"F",(function(){return U})),n.d(t,"N",(function(){return V})),n.d(t,"O",(function(){return z})),n.d(t,"e",(function(){return Q})),n.d(t,"ib",(function(){return M})),n.d(t,"i",(function(){return $})),n.d(t,"H",(function(){return N})),n.d(t,"gb",(function(){return Y})),n.d(t,"B",(function(){return J})),n.d(t,"C",(function(){return H})),n.d(t,"A",(function(){return q})),n.d(t,"z",(function(){return K})),n.d(t,"I",(function(){return W})),n.d(t,"jb",(function(){return X})),n.d(t,"R",(function(){return Z})),n.d(t,"w",(function(){return ee})),n.d(t,"bb",(function(){return te})),n.d(t,"M",(function(){return ne})),n.d(t,"hb",(function(){return re})),n.d(t,"G",(function(){return ae})),n.d(t,"fb",(function(){return ie})),n.d(t,"o",(function(){return oe})),n.d(t,"Z",(function(){return se})),n.d(t,"y",(function(){return ue})),n.d(t,"db",(function(){return ce})),n.d(t,"x",(function(){return le})),n.d(t,"cb",(function(){return pe}));var r=n("b775");function a(e){return Object(r["a"])({url:"api/Sys/GetProfessionnalTitleList",method:"get",params:e})}function i(e){return Object(r["a"])({url:"api/Sys/SetProfessionnalTitleStatus",method:"post",data:e})}function o(e){return Object(r["a"])({url:"api/Sys/AddProfessionnalTitle",method:"post",data:e})}function s(e){return Object(r["a"])({url:"api/Sys/DelProfessionnalTitle",method:"get",params:e})}function u(e){return Object(r["a"])({url:"api/sys/SaveEQCFirst",method:"post",data:e})}function c(e){return Object(r["a"])({url:"api/sys/SaveEQCClass",method:"post",data:e})}function l(e){return Object(r["a"])({url:"api/sys/GetEQCList",method:"get",params:e})}function p(e){return Object(r["a"])({url:"api/sys/LoadEQClassFirst",method:"get",params:e})}function d(e){return Object(r["a"])({url:"api/sys/DelEQClass",method:"get",params:e})}function f(e){return Object(r["a"])({url:"api/sys/EnableEQClass",method:"get",params:e})}function h(e){return Object(r["a"])({url:"api/sys/DisableEQClass",method:"get",params:e})}function m(){return Object(r["a"])({url:"api/Sys/GetEQLanguageList",method:"get"})}function b(e){return Object(r["a"])({url:"api/Sys/AddEQLanguage",method:"post",data:e})}function v(e){return Object(r["a"])({url:"api/Sys/SetEQLanguageStatus",method:"post",data:e})}function S(e){return Object(r["a"])({url:"api/Sys/DelEQLanguage",method:"get",params:e})}function g(){return Object(r["a"])({url:"api/Sys/GetRoleInfos",method:"get"})}function y(e){return Object(r["a"])({url:"api/Sys/GetRoleMemberList",method:"get",params:e})}function R(e){return Object(r["a"])({url:"api/Sys/GetRoleInfo",method:"get",params:e})}function O(e){return Object(r["a"])({url:"api/Sys/AddRoleMember",method:"post",data:e})}function w(e){return Object(r["a"])({url:"api/Sys/DelRoleMember",method:"get",params:e})}function j(e){return Object(r["a"])({url:"api/Sys/AddRoleInfo",method:"post",data:e})}function k(e){return Object(r["a"])({url:"api/Sys/DelRoleInfo",method:"post",data:e})}function A(e){return Object(r["a"])({url:"api/Sys/SaveRoleInfo",method:"post",data:e})}function C(e){return Object(r["a"])({url:"api/sys/GetTextBookList",method:"get",params:e})}function L(e){return Object(r["a"])({url:"api/sys/EnableTextBook",method:"get",params:e})}function G(e){return Object(r["a"])({url:"api/sys/DisableTextBook",method:"get",params:e})}function D(e){return Object(r["a"])({url:"api/sys/SaveTextBook",method:"post",data:e})}function _(e){return Object(r["a"])({url:"api/sys/GetTextBookDetail",method:"get",params:e})}function T(e){return Object(r["a"])({url:"api/sys/SaveSubTextBook",method:"post",data:e})}function x(e){return Object(r["a"])({url:"api/sys/DelTextBook",method:"get",params:e})}function F(e){return Object(r["a"])({url:"api/sys/GetProfessionList",method:"get",params:e})}function I(e){return Object(r["a"])({url:"api/sys/EnableSkill",method:"get",params:e})}function P(e){return Object(r["a"])({url:"api/sys/DisableSkill",method:"get",params:e})}function B(e){return Object(r["a"])({url:"api/sys/GetAppointmentOption",method:"get",params:e})}function E(e){return Object(r["a"])({url:"api/sys/SetAppointmentOption",method:"post",data:e})}function U(e){return Object(r["a"])({url:"api/sys/GetProvinceAppointmentOption",method:"get",params:e})}function V(e){return Object(r["a"])({url:"api/Sys/GetSupervisionSetting",method:"get",params:e})}function z(e){return Object(r["a"])({url:"api/Sys/GetSupervisionSettingList",method:"get",params:e})}function Q(e){return Object(r["a"])({url:"api/Sys/AddSupervisionSetting",method:"post",data:e})}function M(e){return Object(r["a"])({url:"api/Sys/UpdateSupervisionSetting",method:"post",data:e})}function $(e){return Object(r["a"])({url:"api/Sys/DeleteSupervisionSetting",method:"post",data:e})}function N(e){return Object(r["a"])({url:"api/Sys/GetReportTemplate",method:"get",params:e})}function Y(e){return Object(r["a"])({url:"api/Sys/SetReportTemplate",method:"post",useJSON:!0,data:e})}function J(e){return Object(r["a"])({url:"api/Sys/GetMemberList",method:"get",params:e})}function H(e){return Object(r["a"])({url:"api/Sys/GetMemberNoActiveList",method:"get",params:e})}function q(e){return Object(r["a"])({url:"api/Sys/GetMemberFrozenList",method:"get",params:e})}function K(e){return Object(r["a"])({url:"api/Sys/GetMemberCancelList",method:"get",params:e})}function W(e){return Object(r["a"])({url:"api/Sys/ResetPassword",method:"get",params:e})}function X(e){return Object(r["a"])({url:"api/Sys/UserFrozen",method:"post",data:e})}function Z(e){return Object(r["a"])({url:"api/Sys/UserThaw",method:"get",params:e})}function ee(e){return Object(r["a"])({url:"api/Sys/GetExaminationPrecautions",method:"get",params:e})}function te(e){return Object(r["a"])({url:"api/Sys/SetExaminationPrecautions",method:"post",data:e})}function ne(e){return Object(r["a"])({url:"api/Sys/GetSignUpPromise",method:"get",params:e})}function re(e){return Object(r["a"])({url:"api/Sys/SetSignUpPromise",method:"post",data:e})}function ae(e){return Object(r["a"])({url:"api/Sys/GetPublicTime",method:"get",params:e})}function ie(e){return Object(r["a"])({url:"api/Sys/SetPublicTime",method:"post",data:e,useJSON:!0})}function oe(e){return Object(r["a"])({url:"api/sys/GetCertificateGetToTypeOption",method:"get",params:e})}function se(e){return Object(r["a"])({url:"api/sys/SetCertificateGetToTypeOption",method:"post",data:e})}function ue(e){return Object(r["a"])({url:"api/sys/GetLostReissueOption",method:"get",params:e})}function ce(e){return Object(r["a"])({url:"api/sys/SetLostReissueOption",method:"post",data:e})}function le(e){return Object(r["a"])({url:"api/sys/GetIniuceOption",method:"get",params:e})}function pe(e){return Object(r["a"])({url:"api/sys/SetIniuceOption",method:"post",data:e})}}}]);