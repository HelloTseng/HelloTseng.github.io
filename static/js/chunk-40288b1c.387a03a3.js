(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40288b1c"],{"1d5c":function(e,t,n){"use strict";var a=n("fcbc"),i=n.n(a);i.a},"3e0f":function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return p})),n.d(t,"i",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return f}));var a=n("b775");function i(e){return Object(a["a"])({url:"api/FeeManagement/GetEnrollPayRecordPageList",method:"get",params:e})}function o(e){return Object(a["a"])({url:"api/FeeManagement/GetEnrollPayRecordList",method:"get",params:e})}function l(e){return Object(a["a"])({url:"api/FeeManagement/ConfirmPay",method:"post",data:e})}function r(e){return Object(a["a"])({url:"api/FeeManagement/GetEnrollPayRecordStats",method:"get",params:e})}function c(e){return Object(a["a"])({url:"api/FeeManagement/GetEnrollPayRecordDetail",method:"get",params:e})}function s(e){return Object(a["a"])({url:"api/FeeManagement/GetChargingRulesList",method:"get",params:e})}function u(e){return Object(a["a"])({url:"api/FeeManagement/UpdateChargingRulesSetting",method:"post",data:e})}function d(e){return Object(a["a"])({url:"api/FeeManagement/GetPayRecordReportResponsePageList",method:"get",params:e})}function p(e){return Object(a["a"])({url:"api/FeeManagement/GetPayRecordReportStats",method:"get",params:e})}function h(e){return Object(a["a"])({url:"api/FeeManagement/GetInvoiceRecordPageList",method:"get",params:e})}function m(e){return Object(a["a"])({url:"api/FeeManagement/GetBatchPayLogView",method:"get",params:e})}function f(e){return Object(a["a"])({url:"api/FeeManagement/ConfirmBatchInvoice",method:"post",useJSON:!0,data:e})}},"8d72":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[n("bar",{attrs:{slot:"title"},slot:"title"},[n("bar-space"),n("bar-cell",[n("el-button",{attrs:{icon:"el-icon-refresh",size:e.tableSize},on:{click:e.doRefresh}},[e._v("刷新")])],1),n("bar-cell",{directives:[{name:"permission",rawName:"v-permission",value:"export",expression:"'export'"}]},[n("el-button",{attrs:{icon:"el-icon-download",type:"warning",size:e.tableSize},on:{click:e.doDownload}},[e._v("导出")])],1)],1),n("el-form",{ref:"searchForm",attrs:{"label-position":"top",inline:"",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[n("el-form-item",{attrs:{label:"开票方式"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchForm.invoiceMethod,callback:function(t){e.$set(e.searchForm,"invoiceMethod",t)},expression:"searchForm.invoiceMethod"}},e._l(e.invoiceMethod_options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"开票状态"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchForm.invoiceStatus,callback:function(t){e.$set(e.searchForm,"invoiceStatus",t)},expression:"searchForm.invoiceStatus"}},e._l(e.invoiceStatus_options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"日期类型"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchForm.dateType,callback:function(t){e.$set(e.searchForm,"dateType",t)},expression:"searchForm.dateType"}},e._l(e.dateType_options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"日期范围"}},[n("date-range-picker",{model:{value:e.searchForm.times,callback:function(t){e.$set(e.searchForm,"times",t)},expression:"searchForm.times"}})],1),n("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[n("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"姓名/证件号码/企业名称/税号",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key",t)},expression:"searchForm.search_key"}})],1),n("el-form-item",{attrs:{label:"操作"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("查询")]),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.searchFormReset}},[e._v("清空")])],1)],1)],1),n("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,"index-row":e.indexRow,"selection-row":e.selectionRow,pagination:e.pagination,"show-selection-delete":!1},on:{"selection-change":e.handleSelectionChange,"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange},scopedSlots:e._u([{key:"paginationButtons",fn:function(){return[n("el-button",{attrs:{type:"primary",size:e.tableSize,disabled:e.multiSelectDisabled,plain:""},on:{click:e.batchOpen}},[e._v("批量确认开票")])]},proxy:!0}])},[n("el-table-column",{attrs:{slot:"Status",label:"开票状态","min-width":100,align:"center"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.Status?n("span",[e._v("已开票")]):n("span",{staticClass:"text-red"},[e._v("未开票")])]}}])}),n("el-table-column",{attrs:{slot:"operate",label:"操作",width:"150",align:"center",fixed:"right"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.Status?e._e():n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"open",expression:"'open'"}],attrs:{type:"primary"},on:{click:function(t){return e.handleOpen(a)}}},[e._v("确认开票")]),a.Status?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"look",expression:"'look'"}],on:{click:function(t){return e.handleLook(a)}}},[e._v("查看发票")]):e._e(),a.Status?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"detail",expression:"'detail'"}],attrs:{type:"success"},on:{click:function(t){return e.handleDetailed(a)}}},[e._v("查看缴费明细")]):e._e()]}}])})],1),n("el-dialog",{attrs:{title:"确认缴费",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},close:e.handleClose}},[n("table-body",{attrs:{"has-padding":!1,columns:e.dtlColumns,"table-data":e.dtlTableData,options:e.tableOptions}},[n("el-row",{attrs:{slot:"header"},slot:"header"},[n("el-col",{staticClass:"mb-10",attrs:{span:12}},[e._v("缴费类型："+e._s(e.baseinfo.PayType))]),n("el-col",{staticClass:"mb-10",attrs:{span:12}},[e._v("缴费时间："+e._s(e.baseinfo.PayDate))]),n("el-col",{attrs:{span:12}},[e._v("交易单号："+e._s(e.baseinfo.TransactionNum))])],1)],1)],1)],1)},i=[],o=(n("7db0"),n("4160"),n("caad"),n("d3b7"),n("2532"),n("159b"),n("5530")),l=n("2f62"),r=n("ed08"),c=n("3e0f"),s={name:"InvoiceManagement",components:{Bar:function(){return n.e("chunk-2d0bac10").then(n.bind(null,"390d"))},BarCell:function(){return n.e("chunk-2d221e17").then(n.bind(null,"cbdf"))},BarSpace:function(){return n.e("chunk-2d2218de").then(n.bind(null,"cb9b"))},DateRangePicker:function(){return n.e("chunk-2d210a9a").then(n.bind(null,"b99f"))},SearchPanel:function(){return n.e("chunk-c808d2de").then(n.bind(null,"978e"))},TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))}},data:function(){var e=this;return{searchPanelActive:!0,searchForm:{invoiceMethod:null,invoiceStatus:null,dateType:0,times:[],search_key:""},tableLoading:!1,columns:[{title:"姓名",key:"UserName",align:"center",minWidth:100},{title:"证件号码",key:"IDCardNum",headerAlign:"center",minWidth:160},{title:"职业工种",key:"WorkCName",align:"center",minWidth:140},{title:"抬头类型",key:"LookUpType",align:"center",minWidth:100,formatter:function(t,n,a,i){if("undefined"!==typeof t.LookUpType)return e.headerType_options.find((function(e){return e.value===t.LookUpType})).label}},{title:"发票抬头",key:"LookUp",align:"center",minWidth:140},{title:"发票税号",key:"UniformCreditCode",align:"center",minWidth:120},{title:"开票方式",key:"InvoiceType",align:"center",minWidth:100,formatter:function(t,n,a,i){if("undefined"!==typeof t.InvoiceType)return e.invoiceMethod_options.find((function(e){return e.value===t.InvoiceType})).label}},{title:"申请时间",key:"CreateDate",align:"center",minWidth:160,formatter:function(e,t,n,a){return Object(r["e"])(e.CreateDate,"{y}-{m}-{d} {h}:{i}")}},{title:"金额",key:"OpenMoney",align:"center"},{title:"开票状态",key:"Status",slot:"Status"},{title:"开票时间",key:"OpenInvoiceDate",align:"center",minWidth:160,formatter:function(e,t,n,a){return Object(r["e"])(e.OpenInvoiceDate,"{y}-{m}-{d} {h}:{i}")}},{title:"联系方式",key:"GetToType",align:"center",minWidth:140,formatter:function(e,t,n,a){if("undefined"!==typeof e.InvoiceType){var i="-";return e.InvoiceType||(i=2===e.GetToType?"姓名+联系方式+邮寄地址":"-"),i}}}],tableData:[{headerType:0,invoiceMethod:0},{headerType:1,invoiceMethod:0},{headerType:0,invoiceMethod:1},{headerType:0,invoiceMethod:0}],selectionRow:{align:"center",selectable:this.checkboxSelect},indexRow:{title:"#",align:"center",width:"50px"},tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:0},multipleSelection:[],canSelection:[],dialogVisible:!1,dtlColumns:[{title:"姓名",key:"Name",align:"center",minWidth:100},{title:"证件号码",key:"IDCardNum",headerAlign:"center",minWidth:160},{title:"鉴定工种",key:"WorkCName",align:"center",minWidth:140},{title:"鉴定等级",key:"GradeCName",align:"center",minWidth:100},{title:"缴费科目",key:"PlanType",align:"center",minWidth:80,formatter:function(t,n,a,i){if("undefined"!==typeof t.PlanType)return e.subjectOptions.find((function(e){return e.value===t.PlanType})).label}},{title:"缴费金额",key:"PayMoney",align:"center",minWidth:80}],dtlTableData:[],baseinfo:{TransactionNum:"",PayType:"",PayDate:""},invoiceMethod_options:[{value:0,label:"纸质发票"},{value:1,label:"电子发票"}],invoiceStatus_options:[{value:0,label:"未开票"},{value:1,label:"已开票"}],dateType_options:[{value:0,label:"申请时间"},{value:1,label:"开票时间"}],headerType_options:[{value:0,label:"企业"},{value:1,label:"个人经营"}],payType_options:[{value:0,label:"-"},{value:1,label:"微信"},{value:2,label:"支付宝"},{value:3,label:"网银"}],subjectOptions:[{value:0,label:"理论"},{value:1,label:"技能"}]}},computed:Object(o["a"])(Object(o["a"])({},Object(l["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{multiSelectDisabled:function(){return!this.tableData.length}}),created:function(){this.doRefresh()},methods:{doRefresh:function(){var e=this,t=this.searchForm,n=t.invoiceMethod,a=t.invoiceStatus,i=t.times,o=t.search_key,l=t.dateType,r=this.pagination,s=r.currentPage,u=r.pageSize,d={invoiceType:n,status:a,dateType:l,dateStart:i.length?i[0]:"",dateEnd:i.length?i[1]:"",nameOrCardNo:o,pageIndex:s,pageSize:u};Object(c["i"])(d).then((function(t){e.tableData=t.data,e.pagination.total=t.dataCount;var n=[];t.data.forEach((function(e,t){e.Status||n.push(t)})),e.canSelection=n}))},doDownload:function(){},searchFormSubmit:function(){this.pagination.currentPage=1,this.doRefresh()},searchFormReset:function(){this.searchForm={invoiceMethod:null,invoiceStatus:null,dateType:0,times:[],search_key:""},this.searchFormSubmit()},handleOpen:function(e){var t=this;Object(c["a"])([e.InvoiceRecordID]).then((function(n){t.$notify({title:"成功",message:"开票成功!",type:"success"}),e.Status=1}))},batchOpen:function(){var e=this;null!=this.multipleSelection&&0!==this.multipleSelection.length?this.$confirm("确定要批量开票这"+this.multipleSelection.length+"条数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=[];return e.multipleSelection.forEach((function(e){t.push(e.InvoiceRecordID)})),Object(c["a"])(t)})).then((function(){e.doRefresh(),e.$notify({title:"成功",message:"开票成功!",type:"success"})})):this.$message({message:"您还未选择数据",type:"warning"})},handleLook:function(e){this.$message.warning("功能正在拼命开发中...ヽ(￣▽￣)و")},handleDetailed:function(e){var t=this;Object(c["c"])({payLogID:e.PayLogID}).then((function(e){var n=e.response;t.dtlTableData=n.PayRecords,t.baseinfo={TransactionNum:n.TransactionNum,PayDate:Object(r["e"])(n.PayDate,"{y}-{m}-{d} {h}:{i}"),PayType:t.payType_options.find((function(e){return e.value===n.PayType})).label},t.dialogVisible=!0}))},checkboxSelect:function(e,t){return!!this.canSelection.includes(t)},handleSelectionChange:function(e){this.multipleSelection=e},handleClose:function(){this.dialogVisible=!1},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()}}},u=s,d=(n("1d5c"),n("2877")),p=Object(d["a"])(u,a,i,!1,null,"7ebb2215",null);t["default"]=p.exports},fcbc:function(e,t,n){}}]);