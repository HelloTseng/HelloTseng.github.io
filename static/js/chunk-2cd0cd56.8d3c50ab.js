(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cd0cd56"],{2934:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"j",(function(){return l})),r.d(t,"g",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"i",(function(){return s})),r.d(t,"k",(function(){return u})),r.d(t,"f",(function(){return c})),r.d(t,"h",(function(){return m})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"n",(function(){return f})),r.d(t,"m",(function(){return b})),r.d(t,"l",(function(){return h})),r.d(t,"d",(function(){return g}));var a=r("b775");function n(e){return Object(a["a"])({url:"api/Sys/CheckUserInfo",method:"get",noNoticeError:!0,params:e})}function l(e){return Object(a["a"])({url:"api/Sys/GetSelRoleList",method:"get",params:e})}function o(e){return Object(a["a"])({url:"api/Sys/GetEnableProfessionnalTitles",method:"get",params:e})}function i(e){return Object(a["a"])({url:"api/Sys/GetEnableExaminerProfessionnalTitles",method:"get",params:e})}function s(e){return Object(a["a"])({url:"api/Global/GetRegionList",method:"get",params:e})}function u(e){return Object(a["a"])({url:"api/Station/GetSelSites",method:"get",params:e})}function c(e){return Object(a["a"])({url:"api/Sys/EnableProfessionList",method:"get",params:e})}function m(e){return Object(a["a"])({url:"api/Examination/LoadQuestionBankOptions",method:"get",params:e})}function d(e){return Object(a["a"])({url:"api/Sys/GetEnableEQLanguages",method:"get",params:e})}function p(e){return Object(a["a"])({url:"api/Station/EnableExamRoomLst",method:"get",params:e})}function f(e){return Object(a["a"])({url:"images/Upload/TempPic",method:"post",data:e,multiple:!0})}function b(e){return Object(a["a"])({url:"images/Upload/TempFile",method:"post",data:e,multiple:!0})}function h(e){return Object(a["a"])({url:"api/images/Upload/NewPic",method:"post",data:e,multiple:!0})}function g(e){return Object(a["a"])({url:"api/Station/EnableExaminerInfos",method:"get",params:e})}},"2cf5":function(e,t,r){"use strict";var a=r("a22f"),n=r.n(a);n.a},"5d8b":function(e,t,r){"use strict";r.d(t,"l",(function(){return n})),r.d(t,"o",(function(){return l})),r.d(t,"r",(function(){return o})),r.d(t,"i",(function(){return i})),r.d(t,"g",(function(){return s})),r.d(t,"n",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"f",(function(){return m})),r.d(t,"m",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"e",(function(){return f})),r.d(t,"k",(function(){return b})),r.d(t,"a",(function(){return h})),r.d(t,"d",(function(){return g})),r.d(t,"q",(function(){return v})),r.d(t,"p",(function(){return F})),r.d(t,"s",(function(){return D})),r.d(t,"j",(function(){return I})),r.d(t,"h",(function(){return x}));var a=r("b775");function n(e){return Object(a["a"])({url:"api/station/ExaminerInfos",method:"get",params:e})}function l(e){return Object(a["a"])({url:"api/station/LoadExaminerInfo",method:"get",params:e})}function o(e){return Object(a["a"])({url:"api/station/SaveExaminerInfo",method:"post",data:e})}function i(e){return Object(a["a"])({url:"api/station/EnableExaminer",method:"get",params:e})}function s(e){return Object(a["a"])({url:"api/station/DisableExaminer",method:"get",params:e})}function u(e){return Object(a["a"])({url:"api/station/ExaminerTrainings",method:"get",params:e})}function c(e){return Object(a["a"])({url:"api/station/AddExaminerTrainings",method:"post",data:e})}function m(e){return Object(a["a"])({url:"api/station/DelExaminerTrainings",method:"get",params:e})}function d(e){return Object(a["a"])({url:"api/station/ExaminerPraises",method:"get",params:e})}function p(e){return Object(a["a"])({url:"api/station/AddExaminerPraise",method:"post",data:e})}function f(e){return Object(a["a"])({url:"api/station/DelExaminerPraise",method:"get",params:e})}function b(e){return Object(a["a"])({url:"api/station/ExaminerDisciplines",method:"get",params:e})}function h(e){return Object(a["a"])({url:"api/station/AddExaminerDiscipline",method:"post",data:e})}function g(e){return Object(a["a"])({url:"api/station/DelExaminerDiscipline",method:"post",data:e})}function v(e){return Object(a["a"])({url:"api/station/PersonnelRecordsList",method:"get",params:e})}function F(e){return Object(a["a"])({url:"api/station/LoadPersonnelRecords",method:"get",params:e})}function D(e){return Object(a["a"])({url:"api/station/SavePersonnelRecords",method:"post",data:e})}function I(e){return Object(a["a"])({url:"api/station/EnablePersonnelRecords",method:"get",params:e})}function x(e){return Object(a["a"])({url:"api/station/DisablePersonnelRecords",method:"get",params:e})}},"60fe":function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return s}));var a=["image/png","image/jpeg","image/jpg","image/gif"],n="image/png,image/jpeg,image/jpg,image/gif",l=["pdf","doc","docx","ppt","xls","xlsx"],o="".concat("http://172.16.3.14:8008/","images/Upload/TempPic"),i="".concat("http://172.16.3.14:8008/","images/Upload/TempFile"),s=[{txt:"图片",limitSize:800,type:["png","jpeg","jpg","gif"]},{txt:"文件",limitSize:2048,type:["pdf","doc","docx","ppt","pptx","xls","xlsx","wps"]},{txt:"视频",limitSize:51200,type:["mp4"]}]},a22f:function(e,t,r){},cf45:function(e,t,r){"use strict";r.d(t,"g",(function(){return a})),r.d(t,"i",(function(){return n})),r.d(t,"h",(function(){return l})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return c})),r.d(t,"f",(function(){return m}));r("4160"),r("baa5"),r("b680"),r("ac1f"),r("5319"),r("159b");function a(e,t){return e.forEach((function(e){e[t]&&e[t].length?a(e[t],t):e[t]=null})),e}function n(e){var t="";try{var r=new Date(e.replace(/-/g,"/")),a=new Date,n=a.getMonth()<r.getMonth()||a.getMonth()===r.getMonth()&&a.getDate()<r.getDate();t=a.getFullYear()-r.getFullYear()-(n?1:0)}catch(l){console.warn("--\x3e Error getYearsByDate",l)}return t}function l(e){var t,r=e.substring(e.lastIndexOf(".")+1);switch(r){case"pdf":t=0;break;case"doc":t=1;break;case"docx":t=2;break;case"wps":t=3;break;case"ppt":t=4;break;case"xls":t=5;break;case"xlsx":t=6;break;case"mp4":t=7;break;case"pptx":t=8;break;default:t=-1}return t}var o=[{value:0,label:"党员"},{value:1,label:"群众"},{value:2,label:"其他"}],i=[{value:9,label:"博士研究生"},{value:8,label:"硕士研究生"},{value:7,label:"本科"},{value:6,label:"专科"},{value:5,label:"中技"},{value:4,label:"职校"},{value:3,label:"中专"},{value:2,label:"高中"},{value:1,label:"初中"},{value:0,label:"小学"}],s=[{value:11,label:"博士研究生"},{value:10,label:"硕士研究生"},{value:9,label:"本科"},{value:8,label:"专科"},{value:7,label:"高技"},{value:6,label:"中技"},{value:5,label:"高职"},{value:4,label:"中职"},{value:3,label:"中专"},{value:2,label:"高中"},{value:1,label:"初中"},{value:0,label:"小学"}],u=[{value:2,label:"保密"},{value:1,label:"男"},{value:0,label:"女"}],c=[{value:3,label:"其他证件"},{value:2,label:"护照"},{value:1,label:"港澳台证"},{value:0,label:"身份证"}];function m(e){var t=e;return t=e>1048576?(e/1048576).toFixed(2)+"GB":e>1024?(e/1024).toFixed(2)+"MB":"".concat(e,"KB"),t}},d403:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"assessor-detail"},[r("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[r("bar-space"),r("bar-cell",[r("el-button",{on:{click:e.goBack}},[e._v("返回")])],1),r("bar-cell",["detail"!==e.operate?r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存")]):e._e()],1)],1),r("div",{staticClass:"app-container"},[r("el-form",{ref:"elForm",attrs:{size:e.tableSize,model:e.elForm,rules:e.elFormRules,"label-position":"right","label-width":"140px"}},[r("h3",[e._v("个人信息")]),r("el-row",[r("el-col",{attrs:{lg:18}},[r("el-row",[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"身份证号",prop:"IDCardNum"}},[r("el-input",{attrs:{placeholder:"请输入身份证号",disabled:e.editDisabled},on:{blur:e.handleCheckUserInfo},model:{value:e.elForm.IDCardNum,callback:function(t){e.$set(e.elForm,"IDCardNum",t)},expression:"elForm.IDCardNum"}})],1)],1),r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"姓名",prop:"UserName"}},[r("el-input",{attrs:{placeholder:"请输入姓名",disabled:e.editDisabled},model:{value:e.elForm.UserName,callback:function(t){e.$set(e.elForm,"UserName",t)},expression:"elForm.UserName"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"性别",prop:"UserSex"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.elForm.UserSex,callback:function(t){e.$set(e.elForm,"UserSex",t)},expression:"elForm.UserSex"}},[r("el-option",{attrs:{label:"男",value:1}}),r("el-option",{attrs:{label:"女",value:0}})],1)],1)],1),r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"出生日期",prop:"BirthDate"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:e.changeBirthDate},model:{value:e.elForm.BirthDate,callback:function(t){e.$set(e.elForm,"BirthDate",t)},expression:"elForm.BirthDate"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"年龄",prop:"UserAge"}},[r("el-input",{attrs:{placeholder:"自动计算",disabled:""},model:{value:e.elForm.UserAge,callback:function(t){e.$set(e.elForm,"UserAge",t)},expression:"elForm.UserAge"}})],1)],1),r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"联系手机",prop:"MobilePhone"}},[r("el-input",{attrs:{placeholder:"请输入手机号",disabled:e.editDisabled},model:{value:e.elForm.MobilePhone,callback:function(t){e.$set(e.elForm,"MobilePhone",t)},expression:"elForm.MobilePhone"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"固定电话",prop:"FixedPhone"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.elForm.FixedPhone,callback:function(t){e.$set(e.elForm,"FixedPhone",t)},expression:"elForm.FixedPhone"}})],1)],1),r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"邮箱",prop:"Email"}},[r("el-input",{attrs:{placeholder:"请输入",disabled:e.editDisabled},model:{value:e.elForm.Email,callback:function(t){e.$set(e.elForm,"Email",t)},expression:"elForm.Email"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"政治面貌",prop:"PoliticsStatus"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.elForm.PoliticsStatus,callback:function(t){e.$set(e.elForm,"PoliticsStatus",t)},expression:"elForm.PoliticsStatus"}},e._l(e.PoliticalOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"文化程度",prop:"Culture"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.elForm.Culture,callback:function(t){e.$set(e.elForm,"Culture",t)},expression:"elForm.Culture"}},e._l(e.EducationOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1),r("el-col",{attrs:{lg:6}},[r("el-form-item",{attrs:{label:"照片",prop:"HeadImg"}},[r("upload",{attrs:{"file-list":e.thumbList,"list-type":"picture-card",limit:1,accept:".png, .jpeg, .jpg, .gif","limit-size":e.limitSize,"get-file-list":e.getImageList}})],1)],1)],1),r("el-divider"),r("h3",[e._v("工作信息")]),r("el-row",[r("el-col",{attrs:{md:8}},[r("el-form-item",{attrs:{label:"工作单位",prop:"WorkUnit"}},[e._v(e._s(e.elForm.WorkUnit))])],1)],1),r("el-row",[r("el-col",{attrs:{md:8}},[r("el-form-item",{attrs:{label:"职称",prop:"PTID"}},[r("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:e.elForm.PTID,callback:function(t){e.$set(e.elForm,"PTID",t)},expression:"elForm.PTID"}},e._l(e.professionTitleOptions,(function(e){return r("el-option",{key:e.PTID,attrs:{label:e.Name,value:e.PTID}})})),1)],1)],1),r("el-col",{attrs:{md:8}},[r("el-form-item",{attrs:{label:"入职时间",prop:"InDate"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:e.changeInDate},model:{value:e.elForm.InDate,callback:function(t){e.$set(e.elForm,"InDate",t)},expression:"elForm.InDate"}})],1)],1),r("el-col",{attrs:{md:8}},[r("el-form-item",{attrs:{label:"工作年限",prop:"InDateToYear"}},[r("el-input",{attrs:{placeholder:"自动计算",disabled:""},model:{value:e.elForm.InDateToYear,callback:function(t){e.$set(e.elForm,"InDateToYear",t)},expression:"elForm.InDateToYear"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{md:24}},[r("el-form-item",{attrs:{label:"个人学习工作简历",prop:"JobResume"}},[r("el-input",{attrs:{type:"textarea",placeholder:"个人学习工作简历",autosize:{minRows:3}},model:{value:e.elForm.JobResume,callback:function(t){e.$set(e.elForm,"JobResume",t)},expression:"elForm.JobResume"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{md:24}},[r("el-form-item",{attrs:{label:"接受教育培训简历",prop:"TrainingResume"}},[r("el-input",{attrs:{type:"textarea",placeholder:"接受教育培训简历",autosize:{minRows:3}},model:{value:e.elForm.TrainingResume,callback:function(t){e.$set(e.elForm,"TrainingResume",t)},expression:"elForm.TrainingResume"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{md:8}},[r("el-form-item",{attrs:{label:"系统角色",prop:"RoleID"}},[r("el-checkbox-group",{attrs:{size:e.tableSize},model:{value:e.elForm.RoleID,callback:function(t){e.$set(e.elForm,"RoleID",t)},expression:"elForm.RoleID"}},e._l(e.roleOptions,(function(t,a){return r("el-checkbox",{key:a,attrs:{label:t.RoleID}},[e._v(e._s(t.RoleName))])})),1)],1)],1),r("el-col",{attrs:{md:8}},[r("el-form-item",{attrs:{label:"状态"}},[r("el-radio-group",{model:{value:e.elForm.Status,callback:function(t){e.$set(e.elForm,"Status",t)},expression:"elForm.Status"}},[r("el-radio",{attrs:{label:!0}},[e._v("启用")]),r("el-radio",{attrs:{label:!1}},[e._v("停用")])],1)],1)],1)],1),r("el-form-item",[e.showOperateBtns?r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存")]):e._e(),r("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)],1)],1),r("identity-confirmation",{attrs:{"user-confirm-visible":e.userConfirmVisible,"user-confirm":e.userConfirm},on:{userConfirmSure:e.userConfirmSure,userConfirmClose:e.userConfirmClose,userConfirmCancle:e.userConfirmCancle}})],1)},n=[],l=(r("b0c0"),r("d3b7"),r("5530")),o=r("61f7"),i=r("cf45"),s=r("60fe"),u={data:function(){return{limitSize:s["f"][0].limitSize,UploadTempPicUrl:s["b"],PoliticalOptions:i["d"],EducationOptions:i["c"],professionTitleOptions:[],roleOptions:[],thumbList:[],userConfirmVisible:!1,userConfirm:{},editDisabled:!1,uploadLoading:!1,elForm:{PRID:0,AdminUserID:0,URID:0,IDCardNum:"",UserName:"",UserSex:"",BirthDate:"",UserAge:"",MobilePhone:"",FixedPhone:"",Email:"",PoliticsStatus:"",Culture:"",HeadImg:"",WorkUnit:"",PTID:"",InDate:"",InDateToYear:"",RoleID:[],Status:!0,JobResume:"",TrainingResume:""},elFormRules:{IDCardNum:[{required:!0,message:"请输入正确的身份证号",validator:function(e,t,r){o["e"](t)?r():r(new Error("请输入正确身份证号"))}}],UserName:[{required:!0,message:"请输入",trigger:"blur"}],UserSex:[{required:!0,message:"请选择",trigger:"change"}],BirthDate:[{required:!0,message:"请输入",trigger:"change"}],MobilePhone:[{required:!0,trigger:"blur",validator:function(e,t,r){o["g"](t)?r():r(new Error("请输入正确手机号码"))}}],Email:[{required:!0,trigger:"blur",validator:function(e,t,r){o["c"](t)?r():r(new Error("请输入正确电子邮箱"))}}],PoliticsStatus:[{required:!0,message:"请选择",trigger:"change"}],Culture:[{required:!0,message:"请选择",trigger:"change"}],HeadImg:[{required:!0,message:"请上传图片"}],PTID:[{required:!0,message:"请选择",trigger:"change"}],InDate:[{required:!0,message:"请选择",trigger:"change"}],RoleID:[{required:!0,message:"请选择",trigger:"change"}]}}}},c=r("2f62"),m=r("0a4f"),d=r("2934"),p=r("5d8b"),f={name:"Detail",components:{BarCell:function(){return r.e("chunk-2d221e17").then(r.bind(null,"cbdf"))},BarSpace:function(){return r.e("chunk-2d2218de").then(r.bind(null,"cb9b"))},Sticky:function(){return r.e("chunk-2d210590").then(r.bind(null,"b804"))},IdentityConfirmation:function(){return r.e("chunk-2d0c9758").then(r.bind(null,"58dc"))},Upload:function(){return r.e("chunk-24c61ed4").then(r.bind(null,"c7f0"))}},mixins:[u],props:{operate:{type:String,default:"detail"}},computed:Object(l["a"])(Object(l["a"])({},Object(c["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{showOperateBtns:function(){return"detail"!==this.operate}}),created:function(){var e=this;if("edit"===this.operate&&(this.editDisabled=!0),Object(d["g"])({MainRole:Object(m["a"])().mtype,InstitutionsID:Object(m["a"])().oid}).then((function(t){e.professionTitleOptions=t.response})),"edit"===this.operate||"detail"===this.operate){var t=this.$route.params&&this.$route.params.id;Object(p["p"])({PRID:t}).then((function(t){e.elForm=t.response;var r=t.response.HeadImg;r&&e.thumbList.push({name:"",url:Object(m["a"])().ResourcesURL+r}),e.fetchRoleList(t.response.MainRole,t.response.InstitutionsID),e.$emit("loadInfo",t.response)}))}else Object(p["p"])({PRID:0}).then((function(t){var r=t.response.WorkUnit;e.elForm.WorkUnit=r,e.fetchRoleList(t.response.MainRole,t.response.InstitutionsID)}))},methods:{fetchRoleList:function(e,t){var r=this;Object(d["j"])({SelMainRole:e,InstitutionsID:t}).then((function(e){r.roleOptions=e.response}))},changeBirthDate:function(){var e=this.elForm.BirthDate;this.elForm.UserAge=Object(i["i"])(e)},changeInDate:function(){var e=this.elForm.InDate;this.elForm.InDateToYear=Object(i["i"])(e)},getImageList:function(e,t,r,a){"success"===e&&(this.elForm.HeadImg=t.webupurl),"remove"===e&&(this.elForm.HeadImg="")},userConfirmCancle:function(){this.userConfirmClose()},userConfirmClose:function(){this.elForm.IDCardNum="",this.userConfirmVisible=!1,this.userConfirm={}},userConfirmSure:function(e){var t=this.userConfirm,r=t.name,a=t.mobile,n=t.idCard,l=t.email,o=t.adminUserID;this.userConfirmVisible=!1,this.editDisabled=!0,this.elForm=Object.assign(this.elForm,{UserName:r,MobilePhone:a,IDCardNum:n,Email:l,AdminUserID:o}),this.$refs.elForm.clearValidate()},handleCheckUserInfo:function(e){var t=this,r=e.target.value;"edit"!==this.operate&&r&&Object(d["a"])({IDCardNum:r,IDType:0}).then((function(e){if(e.success){var r=e.response;t.userConfirmVisible=!0,t.userConfirm={name:r.UserName,mobile:r.MobilePhone,idCard:r.IDCardNum,email:r.Email,adminUserID:r.AdminUserID}}}))},goBack:function(){this.$router.go(-1)},submitForm:function(){var e=this;this.$refs.elForm.validate((function(t){t?(console.log(e.elForm),Object(p["s"])(e.elForm).then((function(t){t.success?(e.$message({message:"恭喜您，提交成功",type:"success"}),e.goBack()):e.$message.error("提交失败")}))):e.$message.error("请检查输入是否完整")}))},selectChange:function(e){this.elForm.ProfessionID=e.firstLevel,this.elForm.SkillID=e.secondLevel}}},b=f,h=(r("2cf5"),r("2877")),g=Object(h["a"])(b,a,n,!1,null,null,null);t["default"]=g.exports}}]);