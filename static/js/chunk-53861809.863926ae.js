(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53861809"],{"910b1":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[a("el-form",{ref:"searchForm",attrs:{"label-position":"top",inline:"",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[a("el-form-item",{attrs:{label:"数据时间",prop:"position"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择时间"},model:{value:e.searchForm.dataTime,callback:function(t){e.$set(e.searchForm,"dataTime",t)},expression:"searchForm.dataTime"}},[a("el-option",{attrs:{label:"近30日",value:"0"}}),a("el-option",{attrs:{label:"近三个月",value:"1"}}),a("el-option",{attrs:{label:"近六个月",value:"2"}}),a("el-option",{attrs:{label:"近一年",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"区域分布",prop:"position"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择区域"},model:{value:e.searchForm.areView,callback:function(t){e.$set(e.searchForm,"areView",t)},expression:"searchForm.areView"}},[a("el-option",{attrs:{label:"全国",value:"0"}}),a("el-option",{attrs:{label:"理论",value:"1"}}),a("el-option",{attrs:{label:"鉴定",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"鉴定站点",prop:"position"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择站点"},model:{value:e.searchForm.station,callback:function(t){e.$set(e.searchForm,"station",t)},expression:"searchForm.station"}},[a("el-option",{attrs:{label:"消防设施检测维修保养",value:"0"}}),a("el-option",{attrs:{label:"理论",value:"1"}}),a("el-option",{attrs:{label:"鉴定",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"职业工种",prop:"position"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择职业工种"},model:{value:e.searchForm.workType,callback:function(t){e.$set(e.searchForm,"workType",t)},expression:"searchForm.workType"}},[a("el-option",{attrs:{label:"消防设施操作员",value:"0"}}),a("el-option",{attrs:{label:"初级",value:"1"}}),a("el-option",{attrs:{label:"中级",value:"2"}}),a("el-option",{attrs:{label:"高级",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"技能等级",prop:"position"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择技能等级"},model:{value:e.searchForm.workGrade,callback:function(t){e.$set(e.searchForm,"workGrade",t)},expression:"searchForm.workGrade"}},[a("el-option",{attrs:{label:"三级",value:"0"}}),a("el-option",{attrs:{label:"初级",value:"1"}}),a("el-option",{attrs:{label:"中级",value:"2"}}),a("el-option",{attrs:{label:"高级",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"职业方向",prop:"position"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择职业方向"},model:{value:e.searchForm.workDirction,callback:function(t){e.$set(e.searchForm,"workDirction",t)},expression:"searchForm.workDirction"}},[a("el-option",{attrs:{label:"三级",value:"0"}}),a("el-option",{attrs:{label:"鉴定完毕",value:"1"}}),a("el-option",{attrs:{label:"消防设施检测维修保养",value:"2"}}),a("el-option",{attrs:{label:"高级",value:"3"}})],1)],1),a("el-form-item",{attrs:{label:"操作"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("查询")]),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(t){return e.searchFormReset("searchForm")}}},[e._v("清空")])],1)],1)],1),a("div",{staticClass:"conTips"},[e._v("2020八月数据情况")]),a("el-row",{staticStyle:{"margin-top":"40px"},attrs:{gutter:20}},[a("el-col",{attrs:{md:20}},[a("ChartSignUp")],1)],1),a("el-form",{ref:"detailForm",staticStyle:{"padding-right":"40px"},attrs:{model:e.detailForm,"label-position":"right","label-width":"0px"}},[a("el-form-item",{attrs:{label:""}},[a("el-table",{attrs:{border:"",data:e.detailForm.reviewerTableData,"header-cell-style":{background:"#0163c4",color:"#f1f1f1"}}},[a("el-table-column",{attrs:{prop:"timer",label:"时间",align:"center"}}),a("el-table-column",{attrs:{prop:"oddNum",label:"理论鉴定考试完成平均时间",align:"center"}}),a("el-table-column",{attrs:{prop:"oddPass",label:"技能鉴定考试完成平均时间",align:"center"}})],1)],1)],1)],1)},r=[],o=(a("d3b7"),a("5530")),i=a("2f62"),s={name:"DataTimerStatic",data:function(){return{searchPanelActive:!0,searchForm:{dataTime:"",areView:"",station:"",workType:"",workGrade:"",workDirction:""},detailForm:{reviewerTableData:[{timer:"2020/10/10",oddNum:"2016",oddPass:"200"}]}}},components:{SearchPanel:function(){return a.e("chunk-c808d2de").then(a.bind(null,"978e"))},ChartSignUp:function(){return a.e("chunk-2d0a3ff1").then(a.bind(null,"050f"))}},computed:Object(o["a"])({},Object(i["c"])({tableSize:function(e){return e.settings.tableSize}})),methods:{searchFormSubmit:function(){},searchFormReset:function(){this.searchForm={dataTime:"",areView:"",station:"",workType:"",workGrade:"",workDirction:""}}}},n=s,c=(a("ce55"),a("2877")),p=Object(c["a"])(n,l,r,!1,null,null,null);t["default"]=p.exports},ce55:function(e,t,a){"use strict";var l=a("db54"),r=a.n(l);r.a},db54:function(e,t,a){}}]);