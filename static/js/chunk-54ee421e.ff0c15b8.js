(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54ee421e"],{"282f":function(t,e,o){"use strict";var n=o("67b4"),a=o.n(n);a.a},4654:function(t,e,o){"use strict";o.d(e,"d",(function(){return a})),o.d(e,"b",(function(){return l})),o.d(e,"f",(function(){return i})),o.d(e,"k",(function(){return r})),o.d(e,"e",(function(){return s})),o.d(e,"c",(function(){return u})),o.d(e,"h",(function(){return c})),o.d(e,"j",(function(){return d})),o.d(e,"a",(function(){return m})),o.d(e,"g",(function(){return p})),o.d(e,"l",(function(){return f})),o.d(e,"i",(function(){return b}));var n=o("b775");function a(t){return Object(n["a"])({url:"api/Score/getQualifiedEnrollPageList",method:"get",params:t})}function l(t){return Object(n["a"])({url:"api/Score/GetAllScoreDetail",method:"get",params:t})}function i(t){return Object(n["a"])({url:"api/Score/GetScoreSearchList",method:"get",params:t})}function r(t){return Object(n["a"])({url:"api/Score/PublishScoreResult",method:"post",data:t})}function s(t){return Object(n["a"])({url:"api/Score/GetScoreDetail",method:"get",params:t})}function u(t){return Object(n["a"])({url:"api/Score/CheckViolationRecord",method:"get",params:t})}function c(t){return Object(n["a"])({url:"api/Score/GetViolationSetting",method:"get",params:t})}function d(t){return Object(n["a"])({url:"api/Score/PostViolationRecord",method:"post",data:t})}function m(t){return Object(n["a"])({url:"api/Score/CancelViolationRecord",method:"post",data:t})}function p(t){return Object(n["a"])({url:"api/Score/GetViolationCheckList",method:"get",params:t})}function f(t){return Object(n["a"])({url:"api/Score/RefuseViolationRecord",method:"post",data:t})}function b(t){return Object(n["a"])({url:"api/Score/PassViolationRecord",method:"post",data:t})}},"67b4":function(t,e,o){},b239:function(t,e,o){"use strict";e["a"]={data:function(){return{tableOptions:{border:!0,headerCellClassName:"table-header-bg"},degreeOptions:[{value:0,label:"普通违纪"},{value:1,label:"严重违纪"},{value:2,label:"特别严重违纪"}],subjectOptions:[{value:0,label:"理论"},{value:1,label:"技能"}],examOptions:[{value:1,label:"正常"},{value:2,label:"违纪"},{value:3,label:"缺考"}],publishOptions:[{value:0,label:"未公布"},{value:1,label:"已公布"},{value:2,label:"已失效"}],violationOpions:[{value:1,label:"待审批"},{value:2,label:"审批通过"},{value:3,label:"审批驳回"},{value:4,label:"取消申请"}],contentOptions:[],disciplineList:[]}}}},db64:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("record-details",{ref:"RecordDetails",attrs:{"order-id":t.OrderID},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[o("el-row",{attrs:{type:"flex",justify:"center"}},[n&&!n.PublishStatus?o("el-button",{attrs:{type:"primary"},on:{click:t.doPublish}},[t._v("公布成绩")]):t._e(),!n||1!==n.ExamStatus||n.PublishStatus||n.ViolationStatus?t._e():o("el-button",{attrs:{type:"primary"},on:{click:t.doUpload}},[t._v("上传违纪")]),n&&1===n.ExamStatus&&1===n.ViolationStatus?o("el-button",{attrs:{type:"danger"},on:{click:t.doCancel}},[t._v("取消违纪")]):t._e(),!n||3!==n.ViolationStatus&&4!==n.ViolationStatus?t._e():o("el-button",{attrs:{type:"danger"},on:{click:t.doUpload}},[t._v("重新上传违纪")]),o("el-button",{on:{click:t.doGoback}},[t._v("返回")])],1)]}}])}),o("el-dialog",{attrs:{title:"上传违纪处理",visible:t.uploadFormVisible,"destroy-on-close":""},on:{"update:visible":function(e){t.uploadFormVisible=e},close:t.uploadFormClose}},[o("el-form",{ref:"uploadForm",attrs:{model:t.uploadForm,loading:t.uploadFormloading,"label-width":"100px","label-position":"right"}},[o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"考生姓名"}},[t._v(t._s(t.uploadForm.userName))])],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"考试科目"}},[t._v(t._s(t.uploadForm.planType?"技能":"理论"))])],1)],1),o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"证件号码"}},[t._v(t._s(t.uploadForm.idCardNum))])],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"考试时间"}},[t._v(t._s(t.uploadForm.datetime))])],1)],1),o("el-divider",{staticClass:"mt-0"}),o("el-form-item",{attrs:{label:"违纪程度",prop:"violationLevel",rules:[{required:!0,message:"请选择",trigger:"change"}]}},[o("el-select",{attrs:{placeholder:"请选择"},on:{change:t.changeViolationLevel},model:{value:t.uploadForm.violationLevel,callback:function(e){t.$set(t.uploadForm,"violationLevel",e)},expression:"uploadForm.violationLevel"}},t._l(t.degreeOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form-item",{attrs:{label:"违纪内容",prop:"contentID",rules:[{required:!0,message:"请选择",trigger:"change"}]}},[o("el-select",{attrs:{disabled:!t.contentOptions.length,placeholder:t.contentOptions.length?"请选择":"请先选择违纪程度"},on:{change:t.chanageViolationContent},model:{value:t.uploadForm.contentID,callback:function(e){t.$set(t.uploadForm,"contentID",e)},expression:"uploadForm.contentID"}},t._l(t.contentOptions,(function(t,e){return o("el-option",{key:e,attrs:{label:t.Content,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"处罚结果"}},[t._v(t._s(t.uploadForm.result?t.uploadForm.result:"请先选择违纪程度"))]),o("el-form-item",{attrs:{label:"上传说明",prop:"Remark",rules:[{required:!0,message:"请填写",trigger:"blur"}]}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.uploadForm.Remark,callback:function(e){t.$set(t.uploadForm,"Remark",e)},expression:"uploadForm.Remark"}})],1),o("el-form-item",{attrs:{label:"上传附件"}},[o("upload",{attrs:{"file-list":t.uploadForm.attachment,"list-type":"text",accept:".jpg, .pdf",limit:1,"limit-size":2048,"get-file-list":t.getFileList}},[o("span",{attrs:{slot:"additional"},slot:"additional"},[t._v("建议提交jpg，只能上传1个")])])],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("uploadForm")}}},[t._v("提交审批")])],1)],1),o("el-dialog",{attrs:{title:"取消违纪",visible:t.violationsFormVisible,width:"30%","destroy-on-close":""},on:{"update:visible":function(e){t.violationsFormVisible=e},close:t.violationsFormClose}},[o("el-form",{ref:"violationsForm",attrs:{model:t.violationsForm,"label-width":"100px","label-position":"right"}},[o("el-form-item",{attrs:{label:"取消原因",prop:"content",rules:[{required:!0,message:"请填写取消原因",trigger:"blur"}]}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.violationsForm.content,callback:function(e){t.$set(t.violationsForm,"content",e)},expression:"violationsForm.content"}})],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("violationsForm")}}},[t._v("确定")])],1)],1)],1)},a=[],l=(o("7db0"),o("d3b7"),o("ac1f"),o("5319"),o("5530")),i=o("4654"),r=o("ed08"),s=o("b239"),u={name:"AchievementListDetail",components:{RecordDetails:function(){return o.e("chunk-9ce2d842").then(o.bind(null,"7871"))},Upload:function(){return o.e("chunk-1b611300").then(o.bind(null,"c7f0"))}},mixins:[s["a"]],data:function(){return{OrderID:0,violationsFormVisible:!1,violationsForm:{content:""},uploadFormloading:!1,uploadFormVisible:!1,uploadForm:{userName:"",planType:0,idCardNum:"",datetime:"",result:"",violationLevel:null,violationContent:"",contentID:null,Remark:"",attachment:[]}}},created:function(){var t=this.$route.params&&this.$route.params.id;t&&(this.OrderID=t)},methods:{doGoback:function(){this.$router.replace({name:"AchievementListIndex"})},changeViolationLevel:function(t){var e=this.disciplineList.find((function(e){return e.SettingsType===t}));this.contentOptions=e.details,this.uploadForm.result=e.PunishSummary},chanageViolationContent:function(t){this.uploadForm.violationContent=this.contentOptions[t].Content},doPublish:function(){var t=this;this.$confirm("您确定要公布“".concat(this.baseinfo.UserName,"”的成绩吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(e){return Object(i["k"])({OrderID:t.OrderID})})).then((function(e){t.$notify({title:"成功",message:"res.msg,",type:"success"}),t.$refs.RecordDetails.fetchData()}))},doUpload:function(){var t=this;this.uploadFormVisible=!0,Object(i["c"])({OrderID:this.OrderID}).then((function(e){var o=e.response.examInfo;return t.uploadForm=Object(l["a"])(Object(l["a"])({},t.uploadForm),{},{userName:o.userName,planType:o.planType,idCardNum:o.idCardNum,datetime:Object(r["e"])(o.beginDate,"{y}-{m}-{d} {h}:{i}")+" -"+Object(r["e"])(o.endDate,"{h}:{i}")}),Object(i["h"])()})).then((function(e){t.disciplineList=e.response})).catch((function(e){t.uploadFormloading=!1}))},uploadFormClose:function(){this.uploadFormVisible=!1,this.uploadForm={userName:"",planType:0,idCardNum:"",datetime:"",result:"",violationLevel:null,violationContent:"",contentID:null,Remark:"",attachment:[]}},doCancel:function(){this.violationsFormVisible=!0},violationsFormClose:function(){this.violationsFormVisible=!1,this.violationsForm.content=""},getFileList:function(t,e,o,n){console.log("----------------------------------------------"),console.log("getFileList",t,e,o,n)},submitForm:function(t){var e=this;this.$refs[t].validate((function(o){o&&("violationsForm"===t&&e.$confirm("确定取消考生违纪申请吗？取消后将对考生成绩进行公布，无法再对考生提交违纪申请！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(t){var o=e.OrderID,n=e.violationsForm.content;return Object(i["a"])({orderID:o,Reason:n})})).then((function(t){e.$notify({title:"成功",message:t.msg,type:"success"}),e.violationsFormClose(),e.$refs.RecordDetails.fetchData()})),"uploadForm"===t&&e.$confirm("确定上传考生违纪申请吗？上级领导审批通过后，系统将自动对考生进行处理！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(t){var o=e.OrderID,n=e.uploadForm,a=n.violationLevel,l=n.violationContent,r=n.Remark,s=n.attachment;return console.log("attachment",s.length),Object(i["j"])({orderID:o,violationLevel:a,violationContent:l,Remark:r,FileName:s.length?s[0].webupurl:""})})).then((function(t){e.$notify({title:"成功",message:t.msg,type:"success"}),e.uploadFormClose(),e.$refs.RecordDetails.fetchData()})))}))}}},c=u,d=(o("282f"),o("2877")),m=Object(d["a"])(c,n,a,!1,null,"9c20280a",null);e["default"]=m.exports}}]);