(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2453720d"],{"5de7":function(e,t,n){},9862:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n("b775");function i(e){return Object(r["a"])({url:"api/WebManager/GetNewsCategoryList",method:"get",params:e})}function a(e){return Object(r["a"])({url:"api/WebManager/EnableNewsCategory",method:"post",data:e})}function o(e){return Object(r["a"])({url:"api/WebManager/DisableNewsCategory",method:"post",data:e})}function c(e){return Object(r["a"])({url:"api/WebManager/AddNewsCategory",method:"post",data:e})}function s(e){return Object(r["a"])({url:"api/WebManager/UpdateNewsCategory",method:"post",data:e})}function l(e){return Object(r["a"])({url:"api/WebManager/DeleteNewsCategory",method:"post",data:e})}},"9d9c":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,"index-row":e.indexRow,options:e.tableOptions,pagination:e.pagination},on:{"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange}},[n("el-table-column",{attrs:{slot:"numberOfDisplays",label:"显示条数",align:"center","min-width":"50px"},slot:"numberOfDisplays",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.chilren.length?e._e():n("span",[e._v(e._s(r.ShowNum))])]}}])}),n("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"100px"},slot:"Status",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[r.Status?n("span",{staticClass:"text-green"},[e._v("已启用")]):e._e(),r.Status?e._e():n("span",{staticClass:"text-red"},[e._v("已停用")])]}}])}),n("el-table-column",{attrs:{slot:"operate",label:"操作",width:"300",align:"center",fixed:"right"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[1===r.LayerNum?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"edit",expression:"'edit'"}],on:{click:function(t){return e.handleParentEdit(r)}}},[e._v("编辑")]):e._e(),2===r.LayerNum&&r.CanEdit?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"edit",expression:"'edit'"}],on:{click:function(t){return e.handleChildEdit(r)}}},[e._v("编辑")]):e._e(),1===r.LayerNum?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"create",expression:"'create'"}],on:{click:function(t){return e.handleAdd(r)}}},[e._v("新增子栏目")]):e._e(),r.Status?e._e():n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"enable",expression:"'enable'"}],attrs:{type:"success"},on:{click:function(t){return e.handleSwitchStatus(r)}}},[e._v("启用")]),r.Status?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"disable",expression:"'disable'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleSwitchStatus(r)}}},[e._v("停用")]):e._e(),r.CanDeleted?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"delete",expression:"'delete'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleDelete(r)}}},[e._v("删除")]):e._e()]}}])})],1),n("el-dialog",{attrs:{title:e.childSectionFormTitle,visible:e.childSectionFormVisible},on:{"update:visible":function(t){e.childSectionFormVisible=t}}},[n("el-form",{ref:"childSectionForm",attrs:{model:e.childSectionForm,rules:e.childSectionFormRules}},[n("el-form-item",{attrs:{label:"归属栏目","label-width":e.labelWidth}},[n("el-input",{attrs:{value:e.currentParentSectionName,readonly:""}})],1),n("el-form-item",{attrs:{label:"子栏目名称","label-width":e.labelWidth,prop:"name"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.childSectionForm.name,callback:function(t){e.$set(e.childSectionForm,"name",t)},expression:"childSectionForm.name"}})],1),n("el-form-item",{attrs:{label:"显示条数","label-width":e.labelWidth,prop:"counts"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.childSectionForm.counts,callback:function(t){e.$set(e.childSectionForm,"counts",t)},expression:"childSectionForm.counts"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.handleCloseChildSectionForm}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handleSaveChildSectionForm}},[e._v("确 定")])],1)],1),n("el-dialog",{attrs:{title:"编辑一级栏目",visible:e.parentSectionFormVisible},on:{"update:visible":function(t){e.parentSectionFormVisible=t}}},[n("el-form",{ref:"parentSectionForm",attrs:{model:e.parentSectionForm,rules:e.parentSectionFormRules}},[n("el-form-item",{attrs:{label:"栏目名称","label-width":e.labelWidth,prop:"name"}},[n("el-input",{attrs:{value:e.parentSectionForm.name,readonly:""}})],1),n("el-form-item",{attrs:{label:"显示条数","label-width":e.labelWidth,prop:"counts"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.parentSectionForm.counts,callback:function(t){e.$set(e.parentSectionForm,"counts",t)},expression:"parentSectionForm.counts"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.handleCloseParentSectionForm}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handleSaveParentSectionForm}},[e._v("确 定")])],1)],1)],1)},i=[],a=(n("b0c0"),n("d3b7"),n("96cf"),n("1da1")),o=n("5530"),c=n("ed08"),s=n("2f62"),l=n("9862"),u={name:"WebsiteProgramManagement",components:{TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))}},data:function(){return{tableLoading:!1,columns:[{title:"层级",key:"LayerNum",align:"center","min-width":"50px"},{title:"栏目名称",key:"Name",align:"center","min-width":"100px"},{title:"显示条数",key:"numberOfDisplays",slot:"numberOfDisplays",align:"center","min-width":"50px"},{title:"创建时间",key:"CreateDate",align:"center","min-width":"100px",formatter:function(e,t,n,r){return Object(c["e"])(e.CreateDate,"{y}-{m}-{d}")}},{title:"状态",key:"Status",slot:"Status",align:"center"}],tableData:[],indexRow:{title:"序号",align:"center"},tableOptions:{border:!0,headerCellClassName:"table-header-bg","row-key":"NCID","tree-props":{children:"chilren",hasChildren:"hasChildren"},"default-expand-all":!1},pagination:{currentPage:1,pageSize:20,total:0},childSectionFormVisible:!1,childSectionForm:{name:"",counts:20},childSectionFormTitle:"",childSectionFormRules:{name:[{required:!0,message:"请输入子栏目名称",trigger:"blur"}],counts:[{required:!0,message:"请输入显示条数",trigger:"blur"}]},labelWidth:"120px",currentParentSectionName:"",currentParentType:-1,currentParentID:-1,currentChildID:-1,parentSectionFormVisible:!1,parentSectionForm:{name:"",counts:20},parentSectionFormRules:{counts:[{required:!0,message:"请输入显示条数",trigger:"blur"}]}}},computed:Object(o["a"])({},Object(s["c"])({tableSize:function(e){return e.settings.tableSize}})),created:function(){this.doLoad()},methods:{reqForGetNewsCategoryList:function(){var e=this,t=this.pagination.pageSize;return new Promise((function(n,r){Object(l["e"])({Status:-1,PageIndex:0,PageSize:t}).then((function(t){console.log(t),e.tableData=t.data,n()}))}))},reqForAddNewsCategory:function(){var e=this;return new Promise((function(t,n){Object(l["a"])({type:e.currentParentType,name:e.childSectionForm.name,parentid:e.currentParentID,shownum:e.childSectionForm.counts}).then((function(){e.$notify({title:"成功",message:"已添加子栏目",type:"success"}),t()}))}))},reqForUpdateNewsCategory:function(){var e=this;return new Promise((function(t,n){Object(l["f"])({ncid:-1===e.currentChildID?e.currentParentID:e.currentChildID,type:e.currentParentType,name:-1===e.currentChildID?e.parentSectionForm.name:e.childSectionForm.name,parentID:-1===e.currentChildID?0:e.currentParentID,showNum:-1===e.currentChildID?e.parentSectionForm.counts:e.childSectionForm.counts}).then((function(){e.$notify({title:"成功",message:"已修改",type:"success"}),t()}))}))},reqForDeleteNewsCategory:function(e){var t=this;return new Promise((function(n,r){Object(l["b"])({ncids:[e]}).then((function(){t.$notify({title:"成功",message:"已删除",type:"success"}),n()}))}))},doRefresh:function(){var e=this;function t(){return n.apply(this,arguments)}function n(){return n=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.reqForGetNewsCategoryList();case 2:case"end":return t.stop()}}),t)}))),n.apply(this,arguments)}t()},doLoad:function(){this.doRefresh()},handleSwitchStatus:function(e){var t=this,n=e.Status,r=e.NCID;n?Object(l["c"])({ncids:[r]}).then((function(){t.doRefresh(),t.$notify({title:"成功",message:"已停用",type:"success"})})):Object(l["d"])({ncids:[r]}).then((function(){t.doRefresh(),t.$notify({title:"成功",message:"已启用",type:"success"})}))},handleDelete:function(e){var t=this,n=e.NCID;this.$confirm("此操作将删除该链接, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){function e(){return r.apply(this,arguments)}function r(){return r=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.reqForDeleteNewsCategory(n);case 2:return e.next=4,t.doRefresh();case 4:case"end":return e.stop()}}),e)}))),r.apply(this,arguments)}e()}))},handleAdd:function(e){var t=e.Name,n=e.NCID,r=e.Type;this.childSectionFormTitle="新增子栏目",this.currentParentSectionName=t,this.currentParentType=r,this.currentParentID=n,this.childSectionFormVisible=!0},handleChildEdit:function(e){var t=e.NCID,n=e.Name,r=e.ParentID,i=e.ShowNum,a=e.Type,o=e.ParentName;this.currentParentSectionName=o,this.childSectionFormTitle="编辑子栏目",this.currentChildID=t,this.currentParentType=a,this.childSectionForm={name:n,counts:i},this.currentParentID=r,this.childSectionFormVisible=!0},handleParentEdit:function(e){var t=e.NCID,n=e.ShowNum,r=e.Type,i=e.Name;this.currentChildID=-1,this.currentParentType=r,this.parentSectionForm={name:i,counts:n},this.currentParentID=t,this.parentSectionFormVisible=!0},resetAndCloseChildSectionForm:function(){this.childSectionForm={name:"",counts:20},this.childSectionFormTitle="",this.currentParentSectionName="",this.currentParentType=-1,this.currentParentID=-1,this.currentChildID=-1,this.childSectionFormVisible=!1},resetAndCloseParentSectionForm:function(){this.parentSectionForm={name:"",counts:20},this.currentParentType=-1,this.currentParentID=-1,this.currentChildID=-1,this.parentSectionFormVisible=!1},handleCloseChildSectionForm:function(){this.resetAndCloseChildSectionForm()},handleSaveChildSectionForm:function(){var e=this,t=this.currentChildID;function n(){return r.apply(this,arguments)}function r(){return r=Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(-1!==t){n.next=5;break}return n.next=3,e.reqForAddNewsCategory();case 3:n.next=7;break;case 5:return n.next=7,e.reqForUpdateNewsCategory();case 7:return n.next=9,e.doRefresh();case 9:e.resetAndCloseChildSectionForm();case 10:case"end":return n.stop()}}),n)}))),r.apply(this,arguments)}n()},handleCloseParentSectionForm:function(){this.resetAndCloseParentSectionForm()},handleSaveParentSectionForm:function(){var e=this;function t(){return n.apply(this,arguments)}function n(){return n=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.reqForUpdateNewsCategory();case 2:return t.next=4,e.doRefresh();case 4:e.resetAndCloseParentSectionForm();case 5:case"end":return t.stop()}}),t)}))),n.apply(this,arguments)}t()},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()}}},d=u,h=(n("be23"),n("2877")),m=Object(h["a"])(d,r,i,!1,null,"6be53bda",null);t["default"]=m.exports},be23:function(e,t,n){"use strict";var r=n("5de7"),i=n.n(r);i.a}}]);