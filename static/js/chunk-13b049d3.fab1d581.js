(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13b049d3"],{"35d3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("InfoListTable",{attrs:{column:"user-manual"}})},s=[],i=n("3976"),r={name:"UserManual",components:{InfoListTable:i["a"]}},c=r,o=n("2877"),l=Object(o["a"])(c,a,s,!1,null,null,null);t["default"]=l.exports},3976:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[n("bar",{attrs:{slot:"title"},slot:"title"},[n("bar-space"),n("bar-cell",[n("el-button",{attrs:{icon:"el-icon-refresh",size:e.tableSize,disabled:e.tableLoading},on:{click:e.doRefresh}},[e._v("刷新")])],1),n("bar-cell",[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"create",expression:"'create'"}],attrs:{type:"danger",size:e.tableSize},on:{click:e.handleCreate}},[e._v("发布信息")])],1)],1),e.showSearchForm?n("el-form",{ref:"searchForm",attrs:{"label-position":"top",inline:"",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[n("NewsCategorySelect",{attrs:{"first-level":e.searchForm.first_column,"second-level":e.searchForm.sec_column,"show-first-level":!1,label:"选择子栏目","second-level-placeholder":"全部子栏目"},on:{newsCategoryChange:e.changeCategory}}),n("el-form-item",{attrs:{label:"日期范围"}},[n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.searchForm.time,callback:function(t){e.$set(e.searchForm,"time",t)},expression:"searchForm.time"}})],1),n("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标题关键字",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key",t)},expression:"searchForm.search_key"}})],1),n("el-form-item",{attrs:{label:"操作"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("查询")]),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.searchFormReset}},[e._v("清空")])],1)],1):e._e()],1),n("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,"index-row":e.indexRow,"selection-row":e.selectionRow,pagination:e.pagination},on:{"selection-change":e.changeSelection,"multi-select-delete":e.batchDelete,"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange},scopedSlots:e._u([{key:"paginationButtons",fn:function(){return[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"offShelf",expression:"'offShelf'"}],attrs:{icon:"el-icon-stopwatch",type:"danger",size:e.tableSize,disabled:e.multiSelectDisabled,plain:""},on:{click:e.batchStop}},[e._v("批量下架")])]},proxy:!0}])},[n("el-table-column",{attrs:{slot:"IsTop",label:"是否置顶",align:"center","min-width":"100px"},slot:"IsTop",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",{class:a.IsTop?"":"text-black-40"},[e._v(e._s(a.IsTop?"是":"否"))])]}}])}),n("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"50px"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.Status?n("span",{staticClass:"text-green"},[e._v("已发布")]):e._e(),a.Status?e._e():n("span",{staticClass:"text-red"},[e._v("下架")])]}}])}),n("el-table-column",{attrs:{slot:"operate",label:"操作",width:"200",align:"center",fixed:"right"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.Status?e._e():n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"publish",expression:"'publish'"}],attrs:{type:"success"},on:{click:function(t){return e.handleSwitchStatus(a)}}},[e._v("发布")]),a.Status?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"offShelf",expression:"'offShelf'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleSwitchStatus(a)}}},[e._v("下架")]):e._e(),n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"edit",expression:"'edit'"}],attrs:{type:"primary"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("详情")]),n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"delete",expression:"'delete'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])]}}])})],1)],1)},s=[],i=(n("4160"),n("caad"),n("d3b7"),n("159b"),n("5530")),r=n("2f62"),c=n("d0cb"),o=n("5718"),l=n("ed08"),u={data:function(){return{searchPanelActive:!0,searchForm:{first_column:null,sec_column:null,time:[],search_key:""},columns:[{title:"标题",key:"Title",headerAlign:"center","min-width":"180px"},{title:"归属栏目",key:"CategoryName"},{title:"创建时间",key:"CreateDate",align:"center",formatter:function(e,t,n,a){return Object(l["e"])(e.CreateDate,"{y}-{m}-{d}")}},{title:"点击量",key:"ClickCount",align:"center"},{title:"是否置顶",key:"IsTop",slot:"IsTop"},{title:"发布人",key:"AdminUserName",align:"center"},{title:"状态",key:"Status",slot:"Status"}],indexRow:{title:"序号",align:"center"},selectionRow:{align:"center"},tableLoading:!1,tableData:[],tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:1},multipleSelection:[]}}},h={name:"InfoListTable",components:{Bar:function(){return n.e("chunk-2d0bac10").then(n.bind(null,"390d"))},BarCell:function(){return n.e("chunk-2d221e17").then(n.bind(null,"cbdf"))},BarSpace:function(){return n.e("chunk-2d2218de").then(n.bind(null,"cb9b"))},SearchPanel:function(){return n.e("chunk-c808d2de").then(n.bind(null,"978e"))},TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))},NewsCategorySelect:function(){return n.e("chunk-2d0ba8fc").then(n.bind(null,"3878"))}},mixins:[u],props:{column:{type:String,default:""}},computed:Object(i["a"])(Object(i["a"])({},Object(r["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{multiSelectDisabled:function(){return!this.tableData.length},showSearchForm:function(){var e=!0,t=["charge-standard","identification-process","signing-condition"];return t.includes(this.column)&&(e=!1),e}}),created:function(){this.doLoad()},methods:{doRefresh:function(){var e=this,t=this.searchForm,n=t.first_column,a=t.sec_column,s=t.time,i=t.search_key,r=this.pagination,o=r.currentPage,l=r.pageSize,u={NewType:n,NewSubType:null===a?-1:a,sd:s.length?s[0]:"",ed:s.length?s[1]:"",key:i,PageIndex:o,PageSize:l};this.tableLoading=!0,Object(c["f"])(u).then((function(t){t.success&&(e.tableData=t.data,e.pagination.total=t.dataCount,e.tableLoading=!1)})).catch((function(t){e.tableLoading=!1}))},doLoad:function(){this.setColumnValue(),this.doRefresh()},setColumnValue:function(){this.searchForm.first_column=Object(o["b"])(this.column)},searchFormSubmit:function(){this.doRefresh()},searchFormReset:function(){var e=this,t=this.searchForm.first_column;this.searchForm={first_column:null,sec_column:null,time:[],search_key:""},setTimeout((function(){e.searchForm.first_column=t,e.doRefresh()}),300)},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()},changeSelection:function(e){this.multipleSelection=e},changeCategory:function(e){this.searchForm.sec_column=e.secondLevel},checkMultiSelection:function(){var e=!0;return null!=this.multipleSelection&&0!==this.multipleSelection.length||(this.$message({message:"您还未选择数据",type:"warning"}),e=!1),e},handleCreate:function(){this.$router.push({name:"CreateManuscript",query:{column:this.column}})},handleEdit:function(e){this.$router.push({name:"EditManuscript",params:{id:e.NewsID},query:{column:this.column}})},handleDetails:function(e){this.$router.push({name:"ManuscriptDetail",params:{id:e.NewsID},query:{column:this.column}})},handleDelete:function(e){var t=this;this.$confirm("确定删除这篇文章吗？删除后将无法恢复","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n=[e.NewsID];Object(c["b"])({newsIds:n}).then((function(e){e.success?(t.doRefresh(),t.$message({type:"success",message:"删除成功"})):t.$message({type:"success",message:"删除失败"})}))}))},batchDelete:function(e){var t=this;0!==e.length&&this.$confirm("确定要批量删除这"+e.length+"条数据吗?删除后将无法恢复","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n=[];e.forEach((function(e){n.push(e.NewsID)})),Object(c["b"])({newsIds:n}).then((function(e){e.success&&(t.$message({type:"success",message:"删除成功!"}),t.doRefresh())}))}))},batchStop:function(){var e=this;if(this.checkMultiSelection()){var t=this.multipleSelection,n=[];t.forEach((function(e){n.push(e.NewsID)})),this.$confirm("确定要批量下架这"+t.length+"条数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["c"])({newsIds:n}).then((function(t){t.success?(e.$message({type:"success",message:"批量下架成功"}),e.doRefresh()):e.$message({type:"success",message:"批量下架失败"})}))}))}},handleSwitchStatus:function(e){var t=this,n=e.Status?"确定下架吗？":"确定发布吗？";this.$confirm(n,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return e.Status?t.batchClose(e):t.batchOpen(e)}))},batchOpen:function(e){var t=this,n=[e.NewsID];Object(c["d"])({newsIds:n}).then((function(e){e.success?(t.$message({type:"success",message:"发布成功"}),t.doRefresh()):t.$message({type:"success",message:"发布失败"})}))},batchClose:function(e){var t=this,n=[e.NewsID];Object(c["c"])({newsIds:n}).then((function(e){e.success?(t.$message({type:"success",message:"操作成功"}),t.doRefresh()):t.$message({type:"success",message:"操作失败"})}))}}},d=h,m=n("2877"),f=Object(m["a"])(d,a,s,!1,null,null,null);t["a"]=f.exports},5718:function(e,t,n){"use strict";function a(e){var t=null;switch(e){case"policy":t=1;break;case"news":t=2;break;case"announce":t=3;break;case"dynamic":t=4;break;case"warning-platform":t=5;break;case"signing-condition":t=6;break;case"identification-process":t=7;break;case"charge-standard":t=8;break;case"user-manual":t=9;break}return t}function s(e){var t="";switch(e){case 1:t="policy";break;case 2:t="news";break;case 3:t="announce";break;case 4:t="dynamic";break;case 5:t="warning-platform";break;case 6:t="signing-condition";break;case 7:t="identification-process";break;case 8:t="charge-standard";break;case 9:t="user-manual";break}return t}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}))},d0cb:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n("b775");function s(e){return Object(a["a"])({url:"api/WebManager/AddInfo",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/vue-admin-template/WebManager/GetInfo",method:"get",params:e,showLoading:!0})}function r(e){return Object(a["a"])({url:"/vue-admin-template/WebManager/GetInfoList",method:"get",params:e})}function c(e){return Object(a["a"])({url:"api/WebManager/UpdateInfo",method:"post",data:e})}function o(e){return Object(a["a"])({url:"api/WebManager/EnableInfo",method:"post",data:e})}function l(e){return Object(a["a"])({url:"api/WebManager/DisableInfo",method:"post",data:e})}function u(e){return Object(a["a"])({url:"api/WebManager/DeleteInfo",method:"post",data:e})}}}]);