(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6db4a4b9"],{"0045":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[a("el-form",{ref:"searchForm",attrs:{inline:"","label-position":"top",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[a("el-form-item",{attrs:{label:"日期范围"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.searchForm.time,callback:function(t){e.$set(e.searchForm,"time",t)},expression:"searchForm.time"}})],1),a("el-form-item",{attrs:{label:"受理进度"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.status,callback:function(t){e.$set(e.searchForm,"status",t)},expression:"searchForm.status"}},[a("el-option",{attrs:{label:"待审核",value:"0"}}),a("el-option",{attrs:{label:"鉴定站审核通过",value:"1"}}),a("el-option",{attrs:{label:"指导中心审核通过",value:"2"}}),a("el-option",{attrs:{label:"处理完毕",value:"3"}}),a("el-option",{attrs:{label:"已驳回",value:"4"}})],1)],1),a("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入姓名/证件号码/证书编号",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key",t)},expression:"searchForm.search_key"}})],1),a("el-form-item",{attrs:{label:"操作"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("查询")]),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(t){return e.searchFormReset("searchForm")}}},[e._v("清空")])],1)],1)],1),a("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,"index-row":e.indexRow,"selection-row":e.selectionRow,pagination:e.pagination},on:{"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange,"multi-select-delete":e.batchDelete}},[a("el-table-column",{attrs:{slot:"Operate",label:"操作",width:"220",align:"center",fixed:"right"},slot:"Operate",scopedSlots:e._u([{key:"default",fn:function(t){t.row;return[a("el-link",[e._v("查看")]),a("el-link",{on:{click:e.handleOpenDialog}},[e._v("审核")])]}}])})],1),a("el-dialog",{attrs:{title:"审核",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.dialogColumns,"table-data":e.dialogTableData,options:e.tableOptions}}),a("el-row",[a("el-col",{staticStyle:{"margin-bottom":"5px"}},[e._v("申请时间：2020.06.20 14:14:14")]),a("el-col",{staticStyle:{"margin-bottom":"5px"}},[e._v("补办原因：由于个人原因，证书遗失，申请补办")]),a("el-col",{staticStyle:{"margin-top":"15px","margin-bottom":"15px"}},[e._v(" 证明材料： "),a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.src,"preview-src-list":e.srcList}})],1),a("el-col",{staticStyle:{"margin-bottom":"5px"}},[e._v("取证证书：邮寄")]),a("el-col",{staticStyle:{"margin-bottom":"5px"}},[e._v("邮寄信息：李毅，13539610723，浙江省杭州市萧山区江南名城1701-13")])],1),a("el-divider"),a("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.dialogFormRules,"label-position":"left",size:e.tableSize}},[a("el-form-item",{attrs:{label:"审核意见",prop:"opinion"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.dialogForm.opinion,callback:function(t){e.$set(e.dialogForm,"opinion",t)},expression:"dialogForm.opinion"}})],1),a("el-form-item",[a("div",{staticClass:"red"},[e._v("驳回时，审核意见将直接发送给申请人")])])],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handlePass}},[e._v("审核通过")]),a("el-button",{attrs:{type:"danger"},on:{click:e.handleReject}},[e._v("驳回")])],1)],1)],1)},l=[],n=(a("d3b7"),a("5530")),o=a("2f62"),r={name:"CertificateAppraisalStation",components:{SearchPanel:function(){return a.e("chunk-c808d2de").then(a.bind(null,"978e"))},TableBody:function(){return a.e("chunk-79d593e5").then(a.bind(null,"2c21"))}},data:function(){return{searchPanelActive:!0,searchForm:{time:[],search_key:"",status:""},dialogForm:{opinion:""},dialogFormRules:{opinion:[{required:!0,message:"请输入审核意见",trigger:"blur"}]},tableLoading:!1,columns:[{title:"姓名",key:"",align:"center","min-width":"100px"},{title:"证件号码",key:"",align:"center","min-width":"150px"},{title:"职业工种/等级/方向",key:"",align:"center","min-width":"250px"},{title:"证书编号",key:"",align:"center","min-width":"150px"},{title:"申请时间",key:"",align:"center","min-width":"150px"},{title:"补办原因",key:"",align:"center","min-width":"150px"},{title:"取证方式",key:"",align:"center","min-width":"150px"},{title:"邮寄信息",key:"",align:"center","min-width":"150px"},{title:"受理进度",key:"",align:"center","min-width":"150px"},{title:"操作",key:"Operate",slot:"Operate"}],dialogColumns:[{title:"姓名",key:"",align:"center","min-width":"100px"},{title:"证件号码",key:"",align:"center","min-width":"100px"},{title:"职业工种/等级/方向",key:"",align:"center","min-width":"100px"},{title:"鉴定站点",key:"",align:"center","min-width":"100px"},{title:"证书编号",key:"",align:"center","min-width":"100px"},{title:"发证日期",key:"",align:"center","min-width":"100px"}],tableData:[],dialogTableData:[],indexRow:{title:"序号",align:"center"},selectionRow:{align:"center"},tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:0},dialogVisible:!1,src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",srcList:["https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg","https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"]}},computed:Object(n["a"])({},Object(o["c"])({tableSize:function(e){return e.settings.tableSize}})),methods:{searchFormSubmit:function(){},searchFormReset:function(){},handleCheckDtl:function(){},paginationCurrenChange:function(){},paginationSizeChange:function(){},batchDelete:function(){},handleOpenDialog:function(){this.dialogVisible=!0},handlePass:function(){var e=this;this.$refs.dialogForm.validate((function(t){t?e.$confirm("确认审核通过并提交该申请至指导中心吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.dialogTableData=[],e.dialogVisible=!1,e.$notify({title:"成功",message:"操作成功",type:"success"})})):e.$message({message:"操作失败",type:"error"})}))},handleReject:function(){var e=this;this.$refs.dialogForm.validate((function(t){t?e.$confirm("确认驳回吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.dialogTableData=[],e.dialogVisible=!1,e.$notify({title:"成功",message:"操作成功",type:"success"})})):e.$message({message:"操作失败",type:"error"})}))}}},s=r,c=(a("bbb1"),a("2877")),m=Object(c["a"])(s,i,l,!1,null,"0f9a0326",null);t["default"]=m.exports},b3c2:function(e,t,a){},bbb1:function(e,t,a){"use strict";var i=a("b3c2"),l=a.n(i);l.a}}]);