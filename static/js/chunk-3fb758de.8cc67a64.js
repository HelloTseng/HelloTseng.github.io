(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fb758de","chunk-4aa51700"],{"21e8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-row",{staticClass:"tac",attrs:{gutter:0}},[n("el-col",{attrs:{span:4}},[n("h5",[t._v("应用工种")]),n("personnel-submenu",{on:{afterGetSubList:t.afterGetSubList,afterSelect:t.afterSelect}})],1),n("el-col",{attrs:{span:20}},[n("table-body",{ref:"mkTable",attrs:{loading:t.tableLoading,columns:t.columns,"table-data":t.tableData,options:t.tableOptions,"index-row":t.indexRow,pagination:t.pagination}},[n("el-table-column",{attrs:{slot:"Status",label:"状态",align:"center","min-width":"100px"},slot:"Status",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[r.Status?n("span",{staticClass:"text-green"},[t._v("已启用")]):t._e(),r.Status?t._e():n("span",{staticClass:"text-red"},[t._v("已停用")])]}}])}),t.showOperate?n("el-table-column",{attrs:{slot:"operate",label:"操作",width:"100",align:"center"},slot:"operate",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[r.Status?n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"disable",expression:"'disable'"}],attrs:{type:"danger"},on:{click:function(e){return t.handleSwitchStatus(r)}}},[t._v("停用")]):n("el-link",{directives:[{name:"permission",rawName:"v-permission",value:"enable",expression:"'enable'"}],attrs:{type:"success"},on:{click:function(e){return t.handleSwitchStatus(r)}}},[t._v("启用")])]}}],null,!1,2295439264)}):t._e()],1)],1)],1)],1)},i=[],a=(n("caad"),n("d3b7"),n("96cf"),n("1da1")),u=n("5530"),o=n("2f62"),s=n("ca42"),c=n("68e4"),l={name:"AuditManagementAutomatic",components:{TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))},PersonnelSubmenu:c["default"]},data:function(){return{role:"",tableLoading:!1,columns:[{title:"自动审核项",key:"AutoAuditItem",align:"center","min-width":"200px"},{title:"审核依据",key:"AuditBasis",align:"center","min-width":"600px"},{title:"状态",key:"Status",slot:"Status"},{title:"操作",key:"Operate",slot:"Operate"}],tableData:[],indexRow:{title:"序号",align:"center"},selectionRow:{align:"center"},tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:0},submenuList:[],submenuActive:"",activeID:-1,activeSubID:-1}},computed:Object(u["a"])(Object(u["a"])({},Object(o["c"])({tableSize:function(t){return t.settings.tableSize}})),{},{showOperate:function(){var t=["Guidance"];return t.includes(this.role)}}),created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.role=t.$store.getters.mainRoles,e.next=3,t.reqForGetAllPersonnel();case 3:case"end":return e.stop()}}),e)})))()},methods:{afterGetSubList:function(t){var e=this;function n(){return r.apply(this,arguments)}function r(){return r=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.reqForGetAllPersonnel();case 2:case"end":return t.stop()}}),t)}))),r.apply(this,arguments)}this.submenuList=t.submenuList,this.submenuActive=t.submenuActive,this.activeID=t.activeID,this.activeSubID=t.activeSubID,n()},reqForGetAllPersonnel:function(){var t=this;return new Promise((function(e,n){Object(s["l"])({WorkCID:t.activeID,GradeCID:t.activeSubID,pageIndex:1,pageSize:t.pagination.pageSize}).then((function(n){t.tableData=n.data,t.pagination.total=n.dataCount,e()}))}))},reqForDisableRegisterAutoAudit:function(t){var e=this;return new Promise((function(n,r){Object(s["e"])({RACIds:t}).then((function(){e.$notify({title:"成功",message:"停用任务成功",type:"success"}),n()}))}))},reqForEnableRegisterAutoAudit:function(t){var e=this;return new Promise((function(n,r){Object(s["i"])({RACIds:t}).then((function(){e.$notify({title:"成功",message:"启用任务成功",type:"success"}),n()}))}))},afterSelect:function(t){var e=this;function n(){return r.apply(this,arguments)}function r(){return r=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.reqForGetAllPersonnel();case 2:case"end":return t.stop()}}),t)}))),r.apply(this,arguments)}this.submenuList=t.submenuList,this.submenuActive=t.submenuActive,this.activeID=t.activeID,this.activeSubID=t.activeSubID,n()},handleSwitchStatus:function(t){var e=this,n=t.RACID,r=t.Status,i=[];function u(){return o.apply(this,arguments)}function o(){return o=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}return t.next=3,e.reqForDisableRegisterAutoAudit(i);case 3:return t.next=5,e.reqForGetAllPersonnel();case 5:t.next=11;break;case 7:return t.next=9,e.reqForEnableRegisterAutoAudit(i);case 9:return t.next=11,e.reqForGetAllPersonnel();case 11:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}i.push(n),u()}}},d=l,m=n("2877"),p=Object(m["a"])(d,r,i,!1,null,null,null);e["default"]=p.exports},2934:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"j",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"i",(function(){return s})),n.d(e,"k",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return p})),n.d(e,"n",(function(){return f})),n.d(e,"m",(function(){return b})),n.d(e,"l",(function(){return h})),n.d(e,"d",(function(){return g}));var r=n("b775");function i(t){return Object(r["a"])({url:"api/Sys/CheckUserInfo",method:"get",noNoticeError:!0,params:t})}function a(t){return Object(r["a"])({url:"api/Sys/GetSelRoleList",method:"get",params:t})}function u(t){return Object(r["a"])({url:"api/Sys/GetEnableProfessionnalTitles",method:"get",params:t})}function o(t){return Object(r["a"])({url:"api/Sys/GetEnableExaminerProfessionnalTitles",method:"get",params:t})}function s(t){return Object(r["a"])({url:"api/Global/GetRegionList",method:"get",params:t})}function c(t){return Object(r["a"])({url:"api/Station/GetSelSites",method:"get",params:t})}function l(t){return Object(r["a"])({url:"api/Sys/EnableProfessionList",method:"get",params:t})}function d(t){return Object(r["a"])({url:"api/Examination/LoadQuestionBankOptions",method:"get",params:t})}function m(t){return Object(r["a"])({url:"api/Sys/GetEnableEQLanguages",method:"get",params:t})}function p(t){return Object(r["a"])({url:"api/Station/EnableExamRoomLst",method:"get",params:t})}function f(t){return Object(r["a"])({url:"images/Upload/TempPic",method:"post",data:t,multiple:!0})}function b(t){return Object(r["a"])({url:"images/Upload/TempFile",method:"post",data:t,multiple:!0})}function h(t){return Object(r["a"])({url:"api/images/Upload/NewPic",method:"post",data:t,multiple:!0})}function g(t){return Object(r["a"])({url:"api/Station/EnableExaminerInfos",method:"get",params:t})}},"68e4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.submenuActive},on:{select:t.handleSelect}},t._l(t.submenuList,(function(e){return n("el-submenu",{key:e.ID,attrs:{index:e.index}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-user"}),n("span",[t._v(t._s(e.Name))])]),n("el-menu-item-group",t._l(e.SubLst,(function(e){return n("el-menu-item",{key:e.ID,attrs:{index:e.index}},[t._v(t._s(e.Name))])})),1)],2)})),1)},i=[],a=(n("4160"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),n("159b"),n("2934")),u={name:"PersonnelSubmenu",data:function(){return{submenuList:[],submenuActive:"",activeID:-1,activeSubID:-1}},created:function(){this.reqForGetLoadQuestionBankOptions()},methods:{reqForGetLoadQuestionBankOptions:function(){var t=this;Object(a["h"])().then((function(e){var n=e.response;n.forEach((function(t,e){t.index=e.toString(),t.SubLst.forEach((function(t,n){t.index=e.toString()+"-"+n.toString()}))})),t.submenuList=n,t.submenuActive=n[0].SubLst[0].index,t.activeID=n[0].ID,t.activeSubID=n[0].SubLst[0].ID,t.$emit("afterGetSubList",{submenuList:n,submenuActive:t.submenuActive,activeID:t.activeID,activeName:n[0].Name,activeSubID:t.activeSubID,activeSubName:n[0].SubLst[0].Name})}))},handleSelect:function(t,e){if(e[1]!==this.submenuActive){var n=this.submenuList[Number(e[0])],r=this.submenuList[Number(e[0])].SubLst[Number(e[1].split("-")[1])];this.submenuActive=e[1],this.activeID=n.ID,this.activeSubID=r.ID,this.pagination={currentPage:1,pageSize:20,total:0},this.$emit("afterSelect",{submenuActive:this.submenuActive,activeID:this.activeID,activeName:n.Name,activeSubID:this.activeSubID,activeSubName:r.Name,pagination:this.pagination})}}}},o=u,s=n("2877"),c=Object(s["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},ca42:function(t,e,n){"use strict";n.d(e,"p",(function(){return i})),n.d(e,"m",(function(){return a})),n.d(e,"s",(function(){return u})),n.d(e,"q",(function(){return o})),n.d(e,"r",(function(){return s})),n.d(e,"y",(function(){return c})),n.d(e,"w",(function(){return l})),n.d(e,"x",(function(){return d})),n.d(e,"B",(function(){return m})),n.d(e,"k",(function(){return p})),n.d(e,"g",(function(){return f})),n.d(e,"b",(function(){return b})),n.d(e,"u",(function(){return h})),n.d(e,"v",(function(){return g})),n.d(e,"A",(function(){return v})),n.d(e,"j",(function(){return S})),n.d(e,"f",(function(){return O})),n.d(e,"l",(function(){return j})),n.d(e,"i",(function(){return E})),n.d(e,"e",(function(){return A})),n.d(e,"a",(function(){return D})),n.d(e,"n",(function(){return I})),n.d(e,"o",(function(){return w})),n.d(e,"z",(function(){return x})),n.d(e,"h",(function(){return k})),n.d(e,"d",(function(){return L})),n.d(e,"c",(function(){return R})),n.d(e,"t",(function(){return G}));var r=n("b775");function i(t){return Object(r["a"])({url:"api/Enroll/GetEnrolExamineelList",method:"get",params:t})}function a(t){return Object(r["a"])({url:"api/Enroll/GetAppointmentExamineelList",method:"get",params:t})}function u(t){return Object(r["a"])({url:"api/Enroll/GetEnrollFieldList",method:"get",params:t})}function o(t){return Object(r["a"])({url:"api/Enroll/GetEnrollField",method:"get",params:t})}function s(t){return Object(r["a"])({url:"api/Enroll/GetEnrollFieldDetails",method:"get",params:t})}function c(t){return Object(r["a"])({url:"api/Enroll/GetRegisterSettingList",method:"get",params:t})}function l(t){return Object(r["a"])({url:"api/Enroll/GetRegisterSetting",method:"get",params:t})}function d(t){return Object(r["a"])({url:"api/Enroll/GetRegisterSettingDetails",method:"get",params:t})}function m(t){return Object(r["a"])({url:"api/Enroll/UpdateRegisterSetting",method:"post",data:t})}function p(t){return Object(r["a"])({url:"api/Enroll/EnableRegisterSetting",method:"post",data:t})}function f(t){return Object(r["a"])({url:"api/Enroll/DisableRegisterSetting",method:"post",data:t})}function b(t){return Object(r["a"])({url:"api/Enroll/AddRegisterConditions",method:"post",data:t})}function h(t){return Object(r["a"])({url:"api/Enroll/GetRegisterConditions",method:"get",params:t})}function g(t){return Object(r["a"])({url:"api/Enroll/GetRegisterConditionsList",method:"get",params:t})}function v(t){return Object(r["a"])({url:"api/Enroll/UpdateRegisterConditions",method:"post",data:t})}function S(t){return Object(r["a"])({url:"api/Enroll/EnableRegisterConditions",method:"post",data:t})}function O(t){return Object(r["a"])({url:"api/Enroll/DisableRegisterConditions",method:"post",data:t})}function j(t){return Object(r["a"])({url:"api/Enroll/GetRegisterAutoAuditList",method:"get",params:t})}function E(t){return Object(r["a"])({url:"api/Enroll/EnableRegisterAutoAudit",method:"post",data:t})}function A(t){return Object(r["a"])({url:"api/Enroll/DisableRegisterAutoAudit",method:"post",data:t})}function D(t){return Object(r["a"])({url:"api/Enroll/AddAuditTaskConfig",method:"post",data:t})}function I(t){return Object(r["a"])({url:"api/Enroll/GetAuditTaskConfig",method:"get",params:t})}function w(t){return Object(r["a"])({url:"api/Enroll/GetAuditTaskConfigList",method:"get",params:t})}function x(t){return Object(r["a"])({url:"api/Enroll/UpdateAuditTaskConfig",method:"post",data:t})}function k(t){return Object(r["a"])({url:"api/Enroll/EnableAuditTaskConfig",method:"post",data:t})}function L(t){return Object(r["a"])({url:"api/Enroll/DisableAuditTaskConfig",method:"post",data:t})}function R(t){return Object(r["a"])({url:"api/Enroll/DeleteAuditTaskConfig",method:"post",data:t})}function G(t){return Object(r["a"])({url:"api/Enroll/GetEnrollInfo",method:"get",params:t})}}}]);