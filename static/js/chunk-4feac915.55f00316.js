(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4feac915"],{2934:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"j",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"k",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"n",(function(){return p})),n.d(t,"m",(function(){return f})),n.d(t,"l",(function(){return b})),n.d(t,"d",(function(){return g}));var r=n("b775");function a(e){return Object(r["a"])({url:"api/Sys/CheckUserInfo",method:"get",noNoticeError:!0,params:e})}function i(e){return Object(r["a"])({url:"api/Sys/GetSelRoleList",method:"get",params:e})}function o(e){return Object(r["a"])({url:"api/Sys/GetEnableProfessionnalTitles",method:"get",params:e})}function l(e){return Object(r["a"])({url:"api/Sys/GetEnableExaminerProfessionnalTitles",method:"get",params:e})}function u(e){return Object(r["a"])({url:"api/Global/GetRegionList",method:"get",params:e})}function c(e){return Object(r["a"])({url:"api/Station/GetSelSites",method:"get",params:e})}function s(e){return Object(r["a"])({url:"api/Sys/EnableProfessionList",method:"get",params:e})}function d(e){return Object(r["a"])({url:"api/Examination/LoadQuestionBankOptions",method:"get",params:e})}function m(e){return Object(r["a"])({url:"api/Sys/GetEnableEQLanguages",method:"get",params:e})}function h(e){return Object(r["a"])({url:"api/Station/EnableExamRoomLst",method:"get",params:e})}function p(e){return Object(r["a"])({url:"images/Upload/TempPic",method:"post",data:e,multiple:!0})}function f(e){return Object(r["a"])({url:"images/Upload/TempFile",method:"post",data:e,multiple:!0})}function b(e){return Object(r["a"])({url:"api/images/Upload/NewPic",method:"post",data:e,multiple:!0})}function g(e){return Object(r["a"])({url:"api/Station/EnableExaminerInfos",method:"get",params:e})}},"93a2":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"search-wrapper"},[n("el-form",{ref:"searchForm",attrs:{"label-position":"top",inline:"",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[n("el-form-item",{attrs:{label:"报名来源"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchForm.EnrollSource,callback:function(t){e.$set(e.searchForm,"EnrollSource",t)},expression:"searchForm.EnrollSource"}},e._l(e.enrollOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),"Department"===e.role||"Guidance"===e.role?n("area-select",{attrs:{"area-label":"省份","show-city":!1,"province-code":e.searchForm.ProvinceID},on:{areaSelectChange:e.searchFormAreaChange}}):e._e(),"Station"!==e.role?n("el-form-item",{attrs:{label:"鉴定站",prop:"SiteID"}},[n("el-select",{attrs:{disabled:null===e.searchForm.ProvinceID,placeholder:e.searchForm.ProvinceID?"请选择":"请先选择省份"},model:{value:e.searchForm.SiteID,callback:function(t){e.$set(e.searchForm,"SiteID",t)},expression:"searchForm.SiteID"}},e._l(e.stationOptions,(function(e){return n("el-option",{key:e.SiteID,attrs:{label:e.SiteName,value:e.SiteID}})})),1)],1):e._e(),n("profession-skill-select",{attrs:{label:"申请鉴定工种/等级/方向","first-level":e.searchForm.WorkCID,"second-level":e.searchForm.GradeCID,"third-level":e.searchForm.DirectionID,"show-third-level":!0},on:{selectChange:e.selectChange}}),n("el-form-item",{attrs:{label:"报名时间范围"}},[n("date-range-picker",{model:{value:e.searchForm.time,callback:function(t){e.$set(e.searchForm,"time",t)},expression:"searchForm.time"}})],1),n("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"培训机构/考生姓名/证件号码/手机号码",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key",t)},expression:"searchForm.search_key"}})],1),n("el-form-item",{attrs:{label:"操作"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("查询")]),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.searchFormReset}},[e._v("清空")])],1)],1)],1),n("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,"index-row":e.indexRow,pagination:e.pagination},on:{"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange}},[n("el-table-column",{attrs:{slot:"operate",label:"操作","min-width":"100",align:"center",fixed:"right"},slot:"operate",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-link",{on:{click:function(t){return e.handleDetail(r)}}},[e._v("详情")])]}}])})],1)],1)},a=[],i=(n("caad"),n("d3b7"),n("96cf"),n("1da1")),o=n("5530"),l=n("2f62"),u=(n("7db0"),n("ed08")),c={data:function(){var e=this;return{role:"",searchPanelActive:!0,searchForm:{ProvinceID:null,SiteID:null,EnrollSource:null,WorkCID:null,GradeCID:null,DirectionID:null,time:[],search_key:""},enrollOptions:[{value:0,label:"在线报名"},{value:1,label:"批量导入"},{value:2,label:"机构代报名"}],tableLoading:!1,indexRow:{title:"#",align:"center",width:"50px"},columns:[{title:"姓名",key:"Name",align:"center",minWidth:100},{title:"性别",key:"Sex",align:"center",minWidth:60,formatter:function(e,t,n,r){var a="";switch(e.Sex){case 0:a="女";break;case 1:a="男";break;case 2:a="保密";break}return a}},{title:"年龄",key:"Age",align:"center",minWidth:60},{title:"证件类型",key:"IDType",headerAlign:"center",minWidth:80,formatter:function(e,t,n,r){var a="";switch(e.IDType){case 0:a="身份证";break;case 1:a="港澳台证";break;case 2:a="护照";break;case 3:a="其他证件";break}return a}},{title:"证件号码",key:"IDCardNum",headerAlign:"center",minWidth:160},{title:"手机号码",key:"MobilePhone",align:"center",minWidth:140},{title:"申报鉴定工种",key:"Work",align:"center",minWidth:140},{title:"技能等级",key:"Grade",align:"center",minWidth:100},{title:"职业方向",key:"Direction",align:"center",minWidth:140},{title:"报名来源",key:"EnrollSource",align:"center",minWidth:90,formatter:function(t,n,r,a){if("undefined"!==typeof t.EnrollSource){var i=e.enrollOptions.find((function(e){return e.value===t.EnrollSource}));return i?i.label:"-"}}},{title:"培训机构",key:"InstitutionsName",align:"center",minWidth:140},{title:"报名时间",key:"EnrollDate",align:"center",minWidth:140,formatter:function(e,t,n,r){return Object(u["e"])(e.EnrollDate,"{y}-{m}-{d} {h}:{i}:{s}")}}],tableData:[],tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:0},stationOptions:[]}}},s=n("ca42"),d=n("2934"),m={name:"PersonnelApply",components:{AreaSelect:function(){return n.e("chunk-2d209560").then(n.bind(null,"a92d"))},DateRangePicker:function(){return n.e("chunk-2d210a9a").then(n.bind(null,"b99f"))},TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))},ProfessionSkillSelect:function(){return n.e("chunk-2d0e1b55").then(n.bind(null,"7c1d"))}},mixins:[c],computed:Object(o["a"])({},Object(l["c"])({tableSize:function(e){return e.settings.tableSize}})),watch:{"searchForm.ProvinceID":{handler:function(e){null!==e&&this._getSelSites(e)},immediate:!0}},created:function(){var e=this.$store.getters.mainRoles;this.role=e;var t=["Team","Site"];t.includes(e)&&(this.searchForm.ProvinceID=0),this.doLoad()},methods:{doLoad:function(){this.doRefresh()},doRefresh:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,o,l,u,c,d,m,h,p,f,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.searchForm,r=n.EnrollSource,a=n.ProvinceID,i=n.SiteID,o=n.WorkCID,l=n.GradeCID,u=n.DirectionID,c=n.time,d=n.search_key,m=e.pagination,h=m.currentPage,p=m.pageSize,f={source:null===r?-1:r,provinceID:a||0,siteID:i||0,workCID:o||-1,gradeCID:l||-1,directionID:u||-1,dateStart:c.length?c[0]:"",dateEnd:c.length?c[1]:"",kw:d,pageIndex:h,pageSize:p},t.next=4,Object(s["p"])(f);case 4:b=t.sent,b.success&&(e.tableData=b.data,e.pagination.total=b.dataCount);case 6:case"end":return t.stop()}}),t)})))()},_getSelSites:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(d["k"])({ProvinceID:e});case 2:r=n.sent,r.success&&(t.stationOptions=r.response);case 4:case"end":return n.stop()}}),n)})))()},searchFormAreaChange:function(e){this.searchForm.ProvinceID=e.provinceCode},selectChange:function(e){this.searchForm=Object(o["a"])(Object(o["a"])({},this.searchForm),{},{WorkCID:e.firstLevel,GradeCID:e.secondLevel,DirectionID:e.thirdLevel})},searchFormSubmit:function(){this.pagination.currentPage=1,this.doRefresh()},searchFormReset:function(){this.searchForm={EnrollSource:null,ProvinceID:null,SiteID:null,WorkCID:null,GradeCID:null,DirectionID:null,time:[],search_key:""},this.searchFormSubmit()},handleDetail:function(e){this.$router.push({name:"PersonnelApplyDetail",params:{id:e.EIID}})},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()}}},h=m,p=n("2877"),f=Object(p["a"])(h,r,a,!1,null,null,null);t["default"]=f.exports},ca42:function(e,t,n){"use strict";n.d(t,"p",(function(){return a})),n.d(t,"m",(function(){return i})),n.d(t,"s",(function(){return o})),n.d(t,"q",(function(){return l})),n.d(t,"r",(function(){return u})),n.d(t,"y",(function(){return c})),n.d(t,"w",(function(){return s})),n.d(t,"x",(function(){return d})),n.d(t,"B",(function(){return m})),n.d(t,"k",(function(){return h})),n.d(t,"g",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"u",(function(){return b})),n.d(t,"v",(function(){return g})),n.d(t,"A",(function(){return k})),n.d(t,"j",(function(){return D})),n.d(t,"f",(function(){return E})),n.d(t,"l",(function(){return S})),n.d(t,"i",(function(){return O})),n.d(t,"e",(function(){return v})),n.d(t,"a",(function(){return j})),n.d(t,"n",(function(){return I})),n.d(t,"o",(function(){return C})),n.d(t,"z",(function(){return y})),n.d(t,"h",(function(){return F})),n.d(t,"d",(function(){return R})),n.d(t,"c",(function(){return w})),n.d(t,"t",(function(){return G}));var r=n("b775");function a(e){return Object(r["a"])({url:"api/Enroll/GetEnrolExamineelList",method:"get",params:e})}function i(e){return Object(r["a"])({url:"api/Enroll/GetAppointmentExamineelList",method:"get",params:e})}function o(e){return Object(r["a"])({url:"api/Enroll/GetEnrollFieldList",method:"get",params:e})}function l(e){return Object(r["a"])({url:"api/Enroll/GetEnrollField",method:"get",params:e})}function u(e){return Object(r["a"])({url:"api/Enroll/GetEnrollFieldDetails",method:"get",params:e})}function c(e){return Object(r["a"])({url:"api/Enroll/GetRegisterSettingList",method:"get",params:e})}function s(e){return Object(r["a"])({url:"api/Enroll/GetRegisterSetting",method:"get",params:e})}function d(e){return Object(r["a"])({url:"api/Enroll/GetRegisterSettingDetails",method:"get",params:e})}function m(e){return Object(r["a"])({url:"api/Enroll/UpdateRegisterSetting",method:"post",data:e})}function h(e){return Object(r["a"])({url:"api/Enroll/EnableRegisterSetting",method:"post",data:e})}function p(e){return Object(r["a"])({url:"api/Enroll/DisableRegisterSetting",method:"post",data:e})}function f(e){return Object(r["a"])({url:"api/Enroll/AddRegisterConditions",method:"post",data:e})}function b(e){return Object(r["a"])({url:"api/Enroll/GetRegisterConditions",method:"get",params:e})}function g(e){return Object(r["a"])({url:"api/Enroll/GetRegisterConditionsList",method:"get",params:e})}function k(e){return Object(r["a"])({url:"api/Enroll/UpdateRegisterConditions",method:"post",data:e})}function D(e){return Object(r["a"])({url:"api/Enroll/EnableRegisterConditions",method:"post",data:e})}function E(e){return Object(r["a"])({url:"api/Enroll/DisableRegisterConditions",method:"post",data:e})}function S(e){return Object(r["a"])({url:"api/Enroll/GetRegisterAutoAuditList",method:"get",params:e})}function O(e){return Object(r["a"])({url:"api/Enroll/EnableRegisterAutoAudit",method:"post",data:e})}function v(e){return Object(r["a"])({url:"api/Enroll/DisableRegisterAutoAudit",method:"post",data:e})}function j(e){return Object(r["a"])({url:"api/Enroll/AddAuditTaskConfig",method:"post",data:e})}function I(e){return Object(r["a"])({url:"api/Enroll/GetAuditTaskConfig",method:"get",params:e})}function C(e){return Object(r["a"])({url:"api/Enroll/GetAuditTaskConfigList",method:"get",params:e})}function y(e){return Object(r["a"])({url:"api/Enroll/UpdateAuditTaskConfig",method:"post",data:e})}function F(e){return Object(r["a"])({url:"api/Enroll/EnableAuditTaskConfig",method:"post",data:e})}function R(e){return Object(r["a"])({url:"api/Enroll/DisableAuditTaskConfig",method:"post",data:e})}function w(e){return Object(r["a"])({url:"api/Enroll/DeleteAuditTaskConfig",method:"post",data:e})}function G(e){return Object(r["a"])({url:"api/Enroll/GetEnrollInfo",method:"get",params:e})}}}]);