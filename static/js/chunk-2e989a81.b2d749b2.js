(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e989a81"],{"1bba":function(e,t,o){},"2f55":function(e,t,o){"use strict";var r=o("1bba"),n=o.n(r);n.a},e93c:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:e.title,visible:e.visible,"before-close":e.close,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"1300px","destroy-on-close":""},on:{open:e.handleOpen}},[o("el-form",{ref:"reportForm",attrs:{size:e.tableSize,model:e.reportForm,rules:e.reportFormRules,"label-position":"right","label-width":"80px"}},[e.record.SiteName?o("el-form-item",{attrs:{label:"鉴定站"}},[e._v(" "+e._s(e.record.SiteName)+" ")]):e._e(),o("el-form-item",{attrs:{label:"报告内容",prop:"reportContent"}},[o("el-input",{staticStyle:{display:"none"},attrs:{type:"hidden"},model:{value:e.reportForm.reportContent,callback:function(t){e.$set(e.reportForm,"reportContent",t)},expression:"reportForm.reportContent"}}),o("tinymce-editor",{ref:"tinymceEditor",model:{value:e.reportForm.reportContent,callback:function(t){e.$set(e.reportForm,"reportContent",t)},expression:"reportForm.reportContent"}})],1)],1),e.showFooter?o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary",size:e.tableSize},on:{click:e.sure}},[e._v("确定")]),o("el-button",{attrs:{size:e.tableSize},on:{click:e.cancel}},[e._v("取消")])],1):e._e()],1)},n=[],i=(o("d3b7"),o("5530")),l=o("2f62"),s={name:"ReportReport",components:{TinymceEditor:function(){return Promise.all([o.e("chunk-04e2eeec"),o.e("chunk-62a49494")]).then(o.bind(null,"432e"))}},props:{title:{type:String,default:"报告查看"},content:{type:String,default:""},visible:{type:Boolean,default:!1},record:{type:Object,default:null},category:{type:String,default:"detail"}},data:function(){return{reportForm:{reportContent:""},reportFormRules:{reportContent:[{required:!0,message:"请输入"}]}}},computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{showFooter:function(){return"detail"!==this.category}}),methods:{handleOpen:function(){this.reportForm.reportContent=this.content},cancel:function(){this.reportForm={},this.close()},close:function(){this.$emit("update:visible",!1)},sure:function(){var e=this;this.$refs.reportForm.validate((function(t){t&&e.$emit("sure",e.reportForm,e.record)}))}}},a=s,c=(o("2f55"),o("2877")),p=Object(c["a"])(a,r,n,!1,null,null,null);t["default"]=p.exports}}]);