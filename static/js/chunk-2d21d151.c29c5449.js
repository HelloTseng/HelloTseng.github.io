(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d151"],{d07f:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{top:"20vh",title:e.info.title,visible:e.visible,"before-close":e.close,width:"590px","destroy-on-close":""},on:{open:e.handleOpen}},[r("el-form",{ref:"reviewForm",attrs:{size:e.tableSize,model:e.reviewForm,rules:e.formRules,"label-position":"right","label-width":"80px"}},[r("el-form-item",{attrs:{label:"鉴定站"}},[e._v(" "+e._s(e.record.SiteName)+" ")]),e.showReportLabel?r("el-form-item",{attrs:{label:e.info.reportLabel}},[r("el-link",{attrs:{type:"primary",size:"mini",icon:"el-icon-document"},on:{click:e.showReport}},[e._v(e._s(e.info.reportLabel))])],1):e._e(),e.record.UploadDate?r("el-form-item",{attrs:{label:"上传时间"}},[r("span",[e._v(e._s(e._f("parseTime")(e.record.UploadDate,"{y}-{m}-{d}")))]),e.isOverTime(e.record)?r("el-tag",{attrs:{type:"danger"}},[e._v("超时")]):e._e()],1):e._e(),r("el-form-item",{attrs:{label:"审核结果",prop:"approvalResult"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.reviewForm.approvalResult,callback:function(t){e.$set(e.reviewForm,"approvalResult",t)},expression:"reviewForm.approvalResult"}},e._l(e.statusOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.key,value:e.value}})})),1)],1),e.showDurationNum?r("el-form-item",{attrs:{label:"整改期限",prop:"durationNum",inline:!0}},[r("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入",type:"number"},model:{value:e.reviewForm.durationNum,callback:function(t){e.$set(e.reviewForm,"durationNum",t)},expression:"reviewForm.durationNum"}}),e._v(" 天 ")],1):e._e(),r("el-form-item",{attrs:{label:"审核意见",prop:"approvalContent"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入",autosize:{minRows:3}},model:{value:e.reviewForm.approvalContent,callback:function(t){e.$set(e.reviewForm,"approvalContent",t)},expression:"reviewForm.approvalContent"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:e.tableSize},on:{click:e.sure}},[e._v("审核")]),r("el-button",{attrs:{size:e.tableSize},on:{click:e.cancel}},[e._v("取消")])],1)],1)},o=[],i=r("5530"),s=r("2f62"),l={name:"ReviewDialog",props:{tap:{type:String,default:""},visible:{type:Boolean,default:!1},record:{type:Object,default:null},category:{type:String,default:"Rectify"}},data:function(){return{info:{title:"审核",reportLabel:"报告"},reviewForm:{approvalResult:"",approvalContent:"",durationNum:""},reviewFormRules1:{approvalResult:[{required:!0,message:"请选择"}],approvalContent:[{required:!0,message:"请输入"}]},reviewFormRules2:{approvalResult:[{required:!0,message:"请选择"}],approvalContent:[{required:!0,message:"请输入"}],durationNum:[{required:!0,validator:function(e,t,r){!t||isNaN(t)?r(new Error("请输入正确天数")):r()}}]},statusOptions:[],statusOptions1:[{key:"不合格",value:"0"},{key:"合格",value:"1"}],statusOptions2:[{key:"不合格",value:"0"},{key:"良好",value:"1"},{key:"优秀",value:"2"}]}},computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{showDurationNum:function(){var e=!1,t=this.category;return"Inspection"===t&&0===this.reviewForm.approvalResult&&(e=!0),e},formRules:function(){return this.showDurationNum?this.reviewFormRules2:this.reviewFormRules1},showReportLabel:function(){var e=!1,t=this.record;switch(this.tap){case"Inspection":e=null!=t.YearInspectApprovalID||""!==t.YearInspectApprovalID;break;case"Evaluation":e=null!=t.AssessmentApprovalID||""!==t.AssessmentApprovalID;break}return e}}),methods:{handleOpen:function(){var e=this.category,t=this.tap;switch(e){case"Inspection":this.initInspection();break;case"Rectify":this.initRectify();break}switch(t){case"Inspection":this.statusOptions=this.statusOptions1;break;case"Evaluation":this.statusOptions=this.statusOptions2;break}},initInspection:function(){this.info={title:"审核",reportLabel:"自评报告"}},initRectify:function(){this.info={title:"整改审核",reportLabel:"整改报告"}},cancel:function(){this.reviewForm={},this.close()},close:function(){this.$emit("update:visible",!1)},sure:function(){var e=this;this.$refs.reviewForm.validate((function(t){if(t){var r=e.reviewForm,a=r.approvalResult,o=r.approvalContent,i=r.durationNum,s={};0===a?("Inspection"===e.category&&(s={approvalResult:a,approvalContent:o,durationNum:i}),"Rectify"===e.category&&(s={approvalResult:a,approvalContent:o})):1===a&&(s={approvalResult:a,approvalContent:o}),e.$emit("sure",s,e.record)}}))},showReport:function(){this.$emit("showReport",this.record,"detail")},isOverTime:function(e){var t=!1,r=e.EndRectificationDate;if(r){var a=new Date(r),o=new Date;a<o&&(t=!0)}return t}}},n=l,p=r("2877"),u=Object(p["a"])(n,a,o,!1,null,null,null);t["default"]=u.exports}}]);