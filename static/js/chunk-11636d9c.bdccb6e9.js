(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11636d9c"],{2934:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"j",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"i",(function(){return s})),n.d(t,"k",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"h",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"n",(function(){return f})),n.d(t,"m",(function(){return h})),n.d(t,"l",(function(){return b})),n.d(t,"d",(function(){return g}));var a=n("b775");function i(e){return Object(a["a"])({url:"api/Sys/CheckUserInfo",method:"get",noNoticeError:!0,params:e})}function r(e){return Object(a["a"])({url:"api/Sys/GetSelRoleList",method:"get",params:e})}function o(e){return Object(a["a"])({url:"api/Sys/GetEnableProfessionnalTitles",method:"get",params:e})}function l(e){return Object(a["a"])({url:"api/Sys/GetEnableExaminerProfessionnalTitles",method:"get",params:e})}function s(e){return Object(a["a"])({url:"api/Global/GetRegionList",method:"get",params:e})}function c(e){return Object(a["a"])({url:"api/Station/GetSelSites",method:"get",params:e})}function u(e){return Object(a["a"])({url:"api/Sys/EnableProfessionList",method:"get",params:e})}function p(e){return Object(a["a"])({url:"api/Examination/LoadQuestionBankOptions",method:"get",params:e})}function m(e){return Object(a["a"])({url:"api/Sys/GetEnableEQLanguages",method:"get",params:e})}function d(e){return Object(a["a"])({url:"api/Station/EnableExamRoomLst",method:"get",params:e})}function f(e){return Object(a["a"])({url:"images/Upload/TempPic",method:"post",data:e,multiple:!0})}function h(e){return Object(a["a"])({url:"images/Upload/TempFile",method:"post",data:e,multiple:!0})}function b(e){return Object(a["a"])({url:"api/images/Upload/NewPic",method:"post",data:e,multiple:!0})}function g(e){return Object(a["a"])({url:"api/Station/EnableExaminerInfos",method:"get",params:e})}},dc00:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{top:"20vh",title:"添加考试计划",visible:e.visible,"before-close":e.close,width:"70%","destroy-on-close":""},on:{open:e.handleOpen}},[n("el-form",{attrs:{size:e.tableSize,model:e.searchForm,"label-position":"left","label-width":"90px"}},[n("el-form-item",{attrs:{label:"考试地点：",prop:""}},[n("span",{staticStyle:{"margin-right":"10px"}},[e._v(e._s(e.provinceName))]),n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchForm.siteID,callback:function(t){e.$set(e.searchForm,"siteID",t)},expression:"searchForm.siteID"}},[n("el-option",{attrs:{label:"不限",value:-1}}),e._l(e.siteList,(function(e){return n("el-option",{key:e.SiteID,attrs:{label:e.SiteName,value:e.SiteID}})}))],2)],1),n("el-form-item",{attrs:{label:"考试时间：",prop:""}},[n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.searchForm.time,callback:function(t){e.$set(e.searchForm,"time",t)},expression:"searchForm.time"}}),n("el-button",{staticStyle:{"margin-left":"10px",width:"100px"},attrs:{type:"primary",plain:""},on:{click:e.loadPlanList}},[e._v("查询")])],1),n("el-form-item",{attrs:{label:"考试科目：",prop:""}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchForm.type,callback:function(t){e.$set(e.searchForm,"type",t)},expression:"searchForm.type"}},[n("el-option",{attrs:{label:"全部",value:-1}}),n("el-option",{attrs:{label:"理论",value:0}}),n("el-option",{attrs:{label:"技能",value:1}})],1)],1)],1),n("table-body",{ref:"tabelPlan",attrs:{loading:e.tablePlanLoading,columns:e.columns,"table-data":e.tablePlanData,options:e.tablePlanOptions,pagination:e.pagination,"has-padding":!1,"selection-row":e.selectionRow,"show-selection-delete":!1},on:{"selection-change":e.changeSelection,"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange}},[n("el-table-column",{attrs:{slot:"ExaminationTime",label:"考试时间",align:"center","min-width":"130px"},slot:"ExaminationTime",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" "+e._s(e._f("parseTime")(n.StartDate,"{y}/{m}/{d} {h}:{i}:{s}"))+" - "+e._s(e._f("parseTime")(n.EndDate,"{y}/{m}/{d} {h}:{i}:{s}"))+" ")]}}])}),n("el-table-column",{attrs:{slot:"ProfessionNames",label:"鉴定工种/等级/方向","min-width":"120px","header-align":"center"},slot:"ProfessionNames",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return e._l(a.ProfessionNames,(function(t,a){return n("div",{key:a},[e._v(e._s(t)),n("br")])}))}}])})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",size:e.tableSize},on:{click:e.sure}},[e._v("完成选择")])],1)],1)},i=[],r=(n("99af"),n("4160"),n("caad"),n("a9e3"),n("d3b7"),n("2532"),n("159b"),n("96cf"),n("1da1")),o=n("5530"),l=n("2f62"),s=n("2934"),c=n("37d6"),u={name:"PlanDialog",components:{TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))}},props:{visible:{type:Boolean,default:!1},removeIds:{type:Array,default:null},provinceId:{type:Number,default:null},provinceName:{type:String,default:""}},data:function(){var e=this;return{searchForm:{time:[],siteID:-1,type:-1},siteList:[],tablePlanLoading:!1,tablePlanData:[],tablePlanOptions:{border:!0,headerCellClassName:"table-header-bg"},multipleSelection:[],selectionRow:{align:"center",selectable:function(t,n){return!e.removeIds.includes(t.PlanID)}},pagination:{currentPage:1,pageSize:20,total:0},columns:[{title:"站点",key:"SiteName",align:"center"},{title:"考试时间",key:"ExaminationTime",slot:"ExaminationTime"},{title:"科目",key:"TypeName",align:"center"},{title:"已预约/可预约",key:"AppointmentStatistics",align:"center",formatter:function(e){var t="";return t="".concat(e.YiYuYue,"/").concat(e.KeYuYue),t}},{title:"考试状态",key:"StatusName",align:"center"},{title:"鉴定工种/等级/方向",key:"ProfessionNames",slot:"ProfessionNames"}]}},computed:Object(o["a"])({},Object(l["c"])({tableSize:function(e){return e.settings.tableSize}})),methods:{handleOpen:function(){this.provinceId&&(this.loadPlanList(),this._getSelSites(this.provinceId))},cancel:function(){this.searchForm={time:[],siteID:-1,type:-1},this.tablePlanData=[],this.pagination={currentPage:1,pageSize:20,total:0}},close:function(){this.cancel(),this.$emit("update:visible",!1)},sure:function(){this.$emit("addPlans",this.multipleSelection),this.close()},loadPlanList:function(){var e=this,t=this.searchForm,n=t.time,a=t.siteID,i=t.type,r=this.pagination,o=r.currentPage,l=r.pageSize;if(n.length){var s={pID:this.provinceId,bd:n.length?n[0]:"",ed:n.length?n[1]:"",siteID:a,type:i,pi:o,ps:l};Object(c["i"])(s).then((function(t){t.success&&(e.pagination.total=t.response.TotalCount,e.tablePlanData=t.response.List,e.$nextTick((function(){e.tablePlanData.forEach((function(t){e.removeIds.includes(t.PlanID)&&e.$refs.tabelPlan.$refs.elTable.toggleRowSelection(t,!0)}))})))}))}else this.$message({message:"请选择考试时间范围",type:"warning"})},_getSelSites:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["k"])({ProvinceID:e});case 2:a=n.sent,a.success&&(t.siteList=a.response);case 4:case"end":return n.stop()}}),n)})))()},changeSelection:function(e){this.multipleSelection=e},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()}}},p=u,m=n("2877"),d=Object(m["a"])(p,a,i,!1,null,null,null);t["default"]=d.exports}}]);