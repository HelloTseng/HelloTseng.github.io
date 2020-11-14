(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce82d36e"],{"0520":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[n("bar",{attrs:{slot:"title"},slot:"title"},[n("bar-space"),n("bar-cell",[n("el-button",{attrs:{icon:"el-icon-refresh",size:e.tableSize},on:{click:e.doRefresh}},[e._v("刷新")])],1)],1),n("el-form",{ref:"searchForm",attrs:{"label-position":"top",inline:"",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[n("NewsCategorySelect",{attrs:{"first-level":e.searchForm.newType,"show-second-level":!1,label:"全部栏目","first-level-placeholder":"请选择"},on:{newsCategoryChange:e.changeSearchCategory}}),n("el-form-item",{attrs:{label:"审核状态",prop:"Status"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchForm.Status,callback:function(t){e.$set(e.searchForm,"Status",t)},expression:"searchForm.Status"}},e._l(e.statusOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.key,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"日期范围"}},[n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.searchForm.time,callback:function(t){e.$set(e.searchForm,"time",t)},expression:"searchForm.time"}})],1),n("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标题关键字",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key",t)},expression:"searchForm.search_key"}})],1),n("el-form-item",{attrs:{label:"操作"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("查询")]),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.searchFormReset}},[e._v("清空")])],1)],1)],1),n("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"index-row":e.indexRow,"table-data":e.tableData,options:e.tableOptions,"selection-row":e.selectionRow,pagination:e.pagination},on:{"selection-change":e.changeSelection,"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange,"multi-select-delete":e.batchDelete}},[n("el-table-column",{attrs:{slot:"AuditStatus",label:"审核状态",align:"center"},slot:"AuditStatus",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[0==a.AuditStatus?n("span",{staticClass:"text-green"},[e._v("未投稿")]):e._e(),1==a.AuditStatus?n("span",{staticClass:"text-green"},[e._v("未审核")]):e._e(),2==a.AuditStatus?n("span",{staticClass:"text-red"},[e._v("驳回")]):e._e(),3==a.AuditStatus?n("span",[e._v("已审核")]):e._e()]}}])}),n("el-table-column",{attrs:{slot:"operate",label:"操作",width:"230",align:"center",fixed:"right"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[2==a.AuditStatus?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"dismissed",expression:"'dismissed'"}],on:{click:function(t){return e.handleDismissedOpinion(a)}}},[e._v("查看驳回")]):e._e(),1==a.AuditStatus?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"review",expression:"'review'"}],on:{click:function(t){return e.handleApprove(a)}}},[e._v("审核")]):e._e(),n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"detail",expression:"'detail'"}],attrs:{type:"primary"},on:{click:function(t){return e.handleDetails(a)}}},[e._v("详情")]),n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"delete",expression:"'delete'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])]}}])}),n("template",{slot:"paginationButtons"},[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"review",expression:"'review'"}],attrs:{icon:"el-icon-s-check",type:"danger",size:e.tableSize,disabled:e.multiSelectDisabled,plain:""},on:{click:e.batchBatchApprove}},[e._v("批量审核")])],1)],2),n("el-dialog",{attrs:{title:e.isBatch?"批量审核":"审核",visible:e.formVisible,"destroy-on-close":"","before-close":e.formClose}},[n("el-form",{ref:"form",attrs:{size:e.tableSize,"label-position":"right","label-width":"100px"}},e._l(e.auditList,(function(t,a){return n("div",{key:a},[a>0?n("el-divider"):e._e(),n("el-row",[n("el-col",{attrs:{md:16}},[n("el-form-item",{attrs:{label:"文章标题"}},[n("span",[e._v(e._s(t.Title))])])],1),n("el-col",{attrs:{md:8}},[n("el-form-item",{attrs:{label:"审核结果"}},[n("el-radio-group",{model:{value:t.AuditStatus,callback:function(n){e.$set(t,"AuditStatus",n)},expression:"item.AuditStatus"}},[n("el-radio",{attrs:{label:3}},[e._v("通过")]),n("el-radio",{attrs:{label:2}},[e._v("驳回")])],1)],1)],1)],1),3==t.AuditStatus?[n("NewsCategorySelect",{attrs:{"first-level":t.NewType,"second-level":t.NewSubType,label:"发布栏目","first-level-disabled":!0,"second-level-placeholder":"子栏目（可选）","hide-second-level-empty":!0},on:{newsCategoryChange:function(n){e.changeCategory(n,t)}}}),n("el-form-item",{attrs:{label:"是否置顶"}},[n("el-switch",{model:{value:t.IsTop,callback:function(n){e.$set(t,"IsTop",n)},expression:"item.IsTop"}})],1),n("el-form-item",{attrs:{label:"焦点栏目"}},[n("el-switch",{model:{value:t.IsHot,callback:function(n){e.$set(t,"IsHot",n)},expression:"item.IsHot"}})],1)]:e._e(),2==t.AuditStatus?n("el-form-item",{attrs:{label:"驳回意见"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入驳回意见",autosize:{minRows:3}},model:{value:t.AuditRemark,callback:function(n){e.$set(t,"AuditRemark",n)},expression:"item.AuditRemark"}})],1):e._e()],2)})),0),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.formConfirm}},[e._v(e._s(e.isBatch?"批量审核":"审核"))]),n("el-button",{on:{click:e.formClose}},[e._v("取消")])],1)],1)],1)},r=[],i=(n("a623"),n("4160"),n("d3b7"),n("159b"),n("5530")),o=n("2f62"),s=n("37cb"),u=n("ed08"),l={data:function(){return{searchPanelActive:!0,searchForm:{newType:null,Status:"",time:[],search_key:""},pagination:{currentPage:1,pageSize:20,total:1},statusOptions:[{value:1,key:"未审核 "},{value:2,key:"驳回 "},{value:3,key:"成功"}],tableLoading:!1,columns:[{title:"标题",key:"Title",headerAlign:"center","min-width":"200px"},{title:"投递栏目",align:"center",key:"NewTypeName"},{title:"投稿时间",key:"CreateDate",align:"center",formatter:function(e,t,n,a){return Object(u["e"])(e.CreateDate,"{y}-{m}-{d}")}},{title:"审核时间",key:"AuditDate",align:"center",formatter:function(e,t,n,a){return Object(u["e"])(e.AuditDate,"{y}-{m}-{d}")}},{title:"发布人",key:"CreateUserName",align:"center","min-width":150},{title:"投递单位",key:"DeliverySName",align:"center"},{title:"审核人员",key:"AuditUserName",align:"center","min-width":150},{title:"审核状态",key:"AuditStatus",slot:"AuditStatus"}],tableData:[],indexRow:{title:"序号",align:"center"},selectionRow:{align:"center"},tableOptions:{border:!0,headerCellClassName:"table-header-bg"},multipleSelection:[],formVisible:!1,auditList:[]}}},c={name:"ManuscriptReview",components:{Bar:function(){return n.e("chunk-2d0bac10").then(n.bind(null,"390d"))},BarCell:function(){return n.e("chunk-2d221e17").then(n.bind(null,"cbdf"))},BarSpace:function(){return n.e("chunk-2d2218de").then(n.bind(null,"cb9b"))},SearchPanel:function(){return n.e("chunk-c808d2de").then(n.bind(null,"978e"))},TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))},NewsCategorySelect:function(){return n.e("chunk-b94fe104").then(n.bind(null,"3878"))}},mixins:[l],computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{multiSelectDisabled:function(){return!this.tableData.length},isBatch:function(){return this.auditList.length>1}}),created:function(){this.doLoad()},methods:{doRefresh:function(){var e=this,t=this.searchForm,n=t.newType,a=t.Status,r=t.time,i=t.search_key,o=this.pagination,u=o.currentPage,l=o.pageSize,c={newType:null===n?-1:n,Status:""===a?-1:a,sd:r.length?r[0]:"",ed:r.length?r[1]:"",key:i,PageIndex:u,PageSize:l,menuType:0};this.tableLoading=!0,Object(s["A"])(c).then((function(t){t.success&&(e.tableData=t.data,e.pagination.total=t.dataCount,e.tableLoading=!1)})).catch((function(t){e.tableLoading=!1}))},doLoad:function(){this.doRefresh()},searchFormSubmit:function(){this.doRefresh()},searchFormReset:function(){this.searchForm={newType:null,Status:"",time:[],search_key:""},this.doRefresh()},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()},checkMultiSelection:function(){var e=!0;return null!=this.multipleSelection&&0!==this.multipleSelection.length||(this.$message({message:"您还未选择数据",type:"warning"}),e=!1),e},checkIsAllApprove:function(e){var t=e.every((function(e){return 1===e.AuditStatus}));return t||this.$message({message:"请选择状态为未审核的稿件",type:"warning"}),t},changeSelection:function(e){this.multipleSelection=e},changeSearchCategory:function(e){this.searchForm.newType=e.firstLevel},changeCategory:function(e,t){t.NewType=e.firstLevel,t.NewSubType=e.secondLevel},handleDismissedOpinion:function(e){this.$alert(e.AuditRemark,"驳回意见",{confirmButtonText:"确定"})},handleDetails:function(e){this.$router.push({name:"ManuscriptDeliveryDetail",params:{id:e.NewsID},query:{identity:"review"}})},handleDelete:function(e){var t=this;this.$confirm("确定删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n=[];n.push(e.NewsID),Object(s["i"])({newsIds:n}).then((function(e){e.success&&(t.$message({type:"success",message:"删除成功!"}),t.doRefresh())}))}))},handleApprove:function(e){var t=[e];this.checkIsAllApprove(t)&&(this.auditList=JSON.parse(JSON.stringify(t)),this.auditList.forEach((function(e){e.AuditStatus=3})),this.formVisible=!0)},batchDelete:function(e){var t=this;0!==e.length&&this.$confirm("确定要批量删除这"+e.length+"条数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n=[];e.forEach((function(e){n.push(e.NewsID)})),Object(s["i"])({newsIds:n}).then((function(e){e.success&&(t.$message({type:"success",message:"删除成功!"}),t.doRefresh())}))}))},batchBatchApprove:function(){if(this.checkMultiSelection()){var e=this.multipleSelection;this.checkIsAllApprove(e)&&(this.auditList=JSON.parse(JSON.stringify(e)),this.auditList.forEach((function(e){e.AuditStatus=3,e.NewSubType=null===e.NewSubType?-1:e.NewSubType})),this.formVisible=!0)}},formClose:function(){this.formVisible=!1,this.auditList=[]},formConfirm:function(){var e=this,t=this.auditList,n=t.every((function(e){var t=!0;return 2===e.AuditStatus&&(t=!!e.AuditRemark),t}));if(n){var a=[];t.forEach((function(e){var t=e.NewsID,n=e.NewType,r=e.NewSubType,i=e.IsTop,o=e.IsHot,s=e.AuditRemark,u=e.AuditStatus,l=null===r?-1:r,c={};3===e.AuditStatus&&(c={NewsID:t,NewType:n,NewSubType:l,IsTop:i?1:0,IsHot:o?1:0,AuditStatus:u}),2===e.AuditStatus&&(c={NewsID:t,AuditRemark:s,AuditStatus:u}),a.push(c)}));var r=this.isBatch?"确认进行稿件批量审核吗？":"确认进行稿件审核吗？";this.$confirm(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){var t={manuscripts:a};console.log("--\x3e",t),Object(s["g"])(t).then((function(t){t.success&&(e.$message({message:"操作成功！",type:"success"}),e.formClose(),e.doRefresh())}))}))}else this.$message({message:"请输入驳回意见",type:"warning"})}}},d=c,p=n("2877"),h=Object(p["a"])(d,a,r,!1,null,null,null);t["default"]=h.exports},"37cb":function(e,t,n){"use strict";n.d(t,"i",(function(){return r})),n.d(t,"y",(function(){return i})),n.d(t,"r",(function(){return o})),n.d(t,"n",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"M",(function(){return c})),n.d(t,"x",(function(){return d})),n.d(t,"A",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"I",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"E",(function(){return b})),n.d(t,"G",(function(){return g})),n.d(t,"C",(function(){return v})),n.d(t,"p",(function(){return y})),n.d(t,"u",(function(){return S})),n.d(t,"F",(function(){return w})),n.d(t,"B",(function(){return k})),n.d(t,"l",(function(){return O})),n.d(t,"t",(function(){return A})),n.d(t,"a",(function(){return j})),n.d(t,"K",(function(){return M})),n.d(t,"z",(function(){return C})),n.d(t,"d",(function(){return x})),n.d(t,"s",(function(){return W})),n.d(t,"o",(function(){return _})),n.d(t,"N",(function(){return D})),n.d(t,"k",(function(){return N})),n.d(t,"D",(function(){return T})),n.d(t,"f",(function(){return I})),n.d(t,"O",(function(){return L})),n.d(t,"w",(function(){return F})),n.d(t,"b",(function(){return B})),n.d(t,"L",(function(){return R})),n.d(t,"q",(function(){return z})),n.d(t,"m",(function(){return $})),n.d(t,"h",(function(){return U})),n.d(t,"v",(function(){return E})),n.d(t,"H",(function(){return G})),n.d(t,"J",(function(){return P}));var a=n("b775");function r(e){return Object(a["a"])({url:"api/WebManager/DeleteInfo",method:"post",data:e})}function i(e){return Object(a["a"])({url:"api/WebManager/GetKnowledgeBaseList",method:"get",params:e})}function o(e){return Object(a["a"])({url:"api/WebManager/EnableKnowledgeBase",method:"post",data:e})}function s(e){return Object(a["a"])({url:"api/WebManager/DisableKnowledgeBase",method:"post",data:e})}function u(e){return Object(a["a"])({url:"api/WebManager/DeleteKnowledgeBase",method:"post",data:e})}function l(e){return Object(a["a"])({url:"api/WebManager/AddKnowledgeBase",method:"post",data:e})}function c(e){return Object(a["a"])({url:"api/WebManager/UpdateKnowledgeBase",method:"post",data:e})}function d(e){return Object(a["a"])({url:"api/WebManager/GetKnowledgeBase",method:"get",params:e})}function p(e){return Object(a["a"])({url:"api/WebManager/GetManuscriptList",method:"get",params:e})}function h(e){return Object(a["a"])({url:"api/WebManager/ApprovedManuscript",method:"post",useJSON:!0,data:e})}function f(e){return Object(a["a"])({url:"api/WebManager/ManuscriptDelivery",method:"post",data:e})}function m(e){return Object(a["a"])({url:"api/WebManager/AddManuscriptInfo",method:"post",data:e})}function b(e){return Object(a["a"])({url:"api/WebManager/GetSupervisorList",method:"get",params:e})}function g(e){return Object(a["a"])({url:"api/WebManager/UpdateSupervis",method:"get",params:e})}function v(e){return Object(a["a"])({url:"api/WebManager/OrderBySupervis",method:"get",params:e})}function y(e){return Object(a["a"])({url:"api/WebManager/DisableSupervisPublic",method:"post",data:e})}function S(e){return Object(a["a"])({url:"api/WebManager/GetExaminerInfoList",method:"get",params:e})}function w(e){return Object(a["a"])({url:"api/WebManager/UpdateExaminerInfo",method:"get",params:e})}function k(e){return Object(a["a"])({url:"api/WebManager/OrderByExaminerInfo",method:"get",params:e})}function O(e){return Object(a["a"])({url:"api/WebManager/DisableExaminerInfoPublic",method:"post",data:e})}function A(e){return Object(a["a"])({url:"api/WebManager/GetContactUs",method:"get",params:e})}function j(e){return Object(a["a"])({url:"api/WebManager/AddContactUs",method:"post",data:e})}function M(e){return Object(a["a"])({url:"api/WebManager/UpdateContactUs",method:"post",data:e})}function C(e){return Object(a["a"])({url:"api/WebManager/GetLinkList",method:"get",params:e})}function x(e){return Object(a["a"])({url:"api/WebManager/AddLink",method:"post",data:e})}function W(e){return Object(a["a"])({url:"api/WebManager/EnableLink",method:"post",data:e})}function _(e){return Object(a["a"])({url:"api/WebManager/DisableLink",method:"post",data:e})}function D(e){return Object(a["a"])({url:"api/WebManager/UpdateLink",method:"post",data:e})}function N(e){return Object(a["a"])({url:"api/WebManager/DeleteLink",method:"post",data:e})}function T(e){return Object(a["a"])({url:"api/WebManager/GetSiteInfo",method:"get",params:e})}function I(e){return Object(a["a"])({url:"api/WebManager/AddSiteInfo",method:"post",data:e})}function L(e){return Object(a["a"])({url:"api/WebManager/UpdateSiteInfo",method:"post",data:e})}function F(e){return Object(a["a"])({url:"api/WebManager/GetFloatChartList",method:"get",params:e})}function B(e){return Object(a["a"])({url:"api/WebManager/AddFloatChart",method:"post",data:e})}function R(e){return Object(a["a"])({url:"api/WebManager/UpdateFloatChart",method:"post",data:e})}function z(e){return Object(a["a"])({url:"api/WebManager/EnableFloatChart",method:"post",data:e})}function $(e){return Object(a["a"])({url:"api/WebManager/DisableFloatChart",method:"post",data:e})}function U(e){return Object(a["a"])({url:"api/WebManager/DeleteFloatChart",method:"post",data:e})}function E(e){return Object(a["a"])({url:"api/WebManager/GetFloatChart",method:"get",params:e})}function G(e){return Object(a["a"])({url:"api/WebManager/GetUserAgreement",method:"get",params:e})}function P(e){return Object(a["a"])({url:"api/WebManager/SetUserAgreement",method:"post",useJSON:!0,data:e})}}}]);