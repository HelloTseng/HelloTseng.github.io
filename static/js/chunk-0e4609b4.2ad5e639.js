(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e4609b4"],{"2c5c":function(e,t,n){"use strict";n.r(t);var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[n("bar",{attrs:{slot:"title"},slot:"title"},[n("bar-space"),n("bar-cell",[n("el-button",{attrs:{icon:"el-icon-refresh",size:e.tableSize},on:{click:e.doRefresh}},[e._v("刷新")])],1),n("bar-cell",[n("el-button",{attrs:{icon:"el-icon-download",type:"warning",size:e.tableSize,loading:e.downloadLoading,disabled:!e.tableData.length},on:{click:e.doExport}},[e._v("导出")])],1),n("bar-cell",[n("el-button",{attrs:{type:"danger",size:e.tableSize,disabled:!e.tableData.length},on:{click:e.doGrant}},[e._v("批量发放")])],1)],1),n("el-form",{ref:"searchForm",attrs:{inline:"","label-position":"top",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[n("el-form-item",{attrs:{label:"日期范围"}},[n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.searchForm.time,callback:function(t){e.$set(e.searchForm,"time",t)},expression:"searchForm.time"}})],1),n("el-form-item",{attrs:{label:"取证方式"}},[n("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.evidenceMethod,callback:function(t){e.$set(e.searchForm,"evidenceMethod",t)},expression:"searchForm.evidenceMethod"}},[n("el-option",{attrs:{label:"邮寄",value:"0"}}),n("el-option",{attrs:{label:"自取",value:"1"}})],1)],1),n("profession-skill-select",{attrs:{label:"申请鉴定工种/等级/方向","first-level":e.searchForm.WorkCID,"second-level":e.searchForm.GradeCID,"third-level":e.searchForm.DirectionID,"show-third-level":!0},on:{selectChange:e.selectChange}}),n("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[n("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入姓名/证件号码/证书编号",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key",t)},expression:"searchForm.search_key"}})],1),n("el-form-item",{attrs:{label:"操作"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("查询")]),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(t){return e.searchFormReset("searchForm")}}},[e._v("清空")])],1)],1)],1),e._m(0),n("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,"index-row":e.indexRow,"selection-row":e.selectionRow,pagination:e.pagination,"show-selection-delete":!1},on:{"selection-change":e.handleSelectionChange,"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange},scopedSlots:e._u([{key:"paginationButtons",fn:function(){return[n("el-button",{attrs:{icon:"el-icon-download",type:"warning",loading:e.downloadLoading,size:e.tableSize,disabled:e.multiSelectDisabled,plain:""},on:{click:e.doExport}},[e._v("批量导出")]),n("el-button",{attrs:{type:"danger",size:e.tableSize,disabled:e.multiSelectDisabled,plain:""},on:{click:e.doGrant}},[e._v("批量发放")])]},proxy:!0}])},[n("el-table-column",{attrs:{slot:"Operate",label:"操作",width:"220",align:"center",fixed:"right"},slot:"Operate",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-link",{on:{click:function(t){return e.handleCheckDtl(a)}}},[e._v("查看")])]}}])})],1)],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"20px"}},[e._v(" 本次查询待制作证书人员共 "),n("span",{staticClass:"red"},[e._v("12")]),e._v(" 人。 ")])}],o=(n("d81d"),n("d3b7"),n("ade3")),c=n("5530"),r=n("2f62"),s={name:"CertificateIssuance",components:{Bar:function(){return n.e("chunk-2d0bac10").then(n.bind(null,"390d"))},BarCell:function(){return n.e("chunk-2d221e17").then(n.bind(null,"cbdf"))},BarSpace:function(){return n.e("chunk-2d2218de").then(n.bind(null,"cb9b"))},SearchPanel:function(){return n.e("chunk-c808d2de").then(n.bind(null,"978e"))},TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))},ProfessionSkillSelect:function(){return n.e("chunk-74e90192").then(n.bind(null,"7c1d"))}},data:function(){return{searchPanelActive:!0,searchForm:{time:[],search_key:"",evidenceMethod:"",WorkCID:null,GradeCID:null,DirectionID:null},tableLoading:!1,columns:[{title:"姓名",key:"",align:"center","min-width":"100px"},{title:"性别",key:"",align:"center","min-width":"100px"},{title:"证件号码",key:"",align:"center","min-width":"150px"},{title:"职业工种",key:"",align:"center","min-width":"150px"},{title:"技能等级",key:"",align:"center","min-width":"150px"},{title:"职业方向",key:"",align:"center","min-width":"150px"},{title:"证书编号",key:"",align:"center","min-width":"150px"},{title:"发证日期",key:"",align:"center","min-width":"150px"},{title:"取证方式",key:"",align:"center","min-width":"150px"},{title:"收件地址",key:"",align:"center","min-width":"150px"},{title:"操作",key:"Operate",slot:"Operate"}],tableData:[],indexRow:{title:"序号",align:"center"},selectionRow:{align:"center"},tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:0},downloadLoading:!1,multipleSelection:[]}},computed:Object(c["a"])(Object(c["a"])({},Object(r["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{multiSelectDisabled:function(){return!this.tableData.length}}),methods:(a={selectChange:function(e){this.searchForm=Object(c["a"])(Object(c["a"])({},this.searchForm),{},{WorkCID:e.firstLevel,GradeCID:e.secondLevel,DirectionID:e.thirdLevel})},doRefresh:function(){},doGrant:function(){},download:function(e){var t=this;this.downloadLoading=!0;var a=this.columns.map((function(e){return e.title})),i=this.columns.map((function(e){return e.key})),l=e.map((function(e){return i.map((function(t){return e[t]}))}));Promise.all([n.e("chunk-6e87ca78"),n.e("chunk-abfc2894")]).then(n.bind(null,"4bf8")).then((function(e){e.export_json_to_excel({header:a,data:l,filename:"",autoWidth:!0,bookType:"xlsx"}),t.downloadLoading=!1}))},doExport:function(){var e=this,t=this.multipleSelection;null!=t&&0!==t.length?this.$confirm("确定要批量导出这".concat(t.length,"条数据吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(n){e.download(t)})):this.$message({message:"您还未选择数据",type:"warning"})}},Object(o["a"])(a,"doGrant",(function(){var e=this.multipleSelection;null!=e&&0!==e.length?this.$confirm("确定要批量发放这".concat(e.length,"条数据吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(e){})):this.$message({message:"您还未选择数据",type:"warning"})})),Object(o["a"])(a,"searchFormSubmit",(function(){})),Object(o["a"])(a,"searchFormReset",(function(){})),Object(o["a"])(a,"handleCheckDtl",(function(){})),Object(o["a"])(a,"handleSelectionChange",(function(e){this.multipleSelection=e})),Object(o["a"])(a,"paginationCurrenChange",(function(e){this.pagination.currentPage=e,this.doRefresh()})),Object(o["a"])(a,"paginationSizeChange",(function(e){this.pagination.pageSize=e,this.doRefresh()})),a)},d=s,h=(n("9c90"),n("2877")),u=Object(h["a"])(d,i,l,!1,null,"08307f51",null);t["default"]=u.exports},"9c90":function(e,t,n){"use strict";var a=n("e1cb"),i=n.n(a);i.a},e1cb:function(e,t,n){}}]);