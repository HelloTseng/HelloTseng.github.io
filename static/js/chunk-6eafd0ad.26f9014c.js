(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eafd0ad"],{2211:function(e,t,i){},2934:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"j",(function(){return r})),i.d(t,"g",(function(){return o})),i.d(t,"e",(function(){return l})),i.d(t,"i",(function(){return s})),i.d(t,"k",(function(){return c})),i.d(t,"f",(function(){return u})),i.d(t,"h",(function(){return d})),i.d(t,"b",(function(){return p})),i.d(t,"c",(function(){return f})),i.d(t,"n",(function(){return m})),i.d(t,"m",(function(){return h})),i.d(t,"l",(function(){return b})),i.d(t,"d",(function(){return g}));var a=i("b775");function n(e){return Object(a["a"])({url:"api/Sys/CheckUserInfo",method:"get",noNoticeError:!0,params:e})}function r(e){return Object(a["a"])({url:"api/Sys/GetSelRoleList",method:"get",params:e})}function o(e){return Object(a["a"])({url:"api/Sys/GetEnableProfessionnalTitles",method:"get",params:e})}function l(e){return Object(a["a"])({url:"api/Sys/GetEnableExaminerProfessionnalTitles",method:"get",params:e})}function s(e){return Object(a["a"])({url:"api/Global/GetRegionList",method:"get",params:e})}function c(e){return Object(a["a"])({url:"api/Station/GetSelSites",method:"get",params:e})}function u(e){return Object(a["a"])({url:"api/Sys/EnableProfessionList",method:"get",params:e})}function d(e){return Object(a["a"])({url:"api/Examination/LoadQuestionBankOptions",method:"get",params:e})}function p(e){return Object(a["a"])({url:"api/Sys/GetEnableEQLanguages",method:"get",params:e})}function f(e){return Object(a["a"])({url:"api/Station/EnableExamRoomLst",method:"get",params:e})}function m(e){return Object(a["a"])({url:"images/Upload/TempPic",method:"post",data:e,multiple:!0})}function h(e){return Object(a["a"])({url:"images/Upload/TempFile",method:"post",data:e,multiple:!0})}function b(e){return Object(a["a"])({url:"api/images/Upload/NewPic",method:"post",data:e,multiple:!0})}function g(e){return Object(a["a"])({url:"api/Station/EnableExaminerInfos",method:"get",params:e})}},"6b6f":function(e,t,i){"use strict";var a=i("2211"),n=i.n(a);n.a},8872:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-upload",e._b({class:{hide:e.checkLimit},attrs:{id:"elUpload","http-request":e.picUpload,"file-list":e.fileList,limit:e.limit,"list-type":"picture-card",action:"#",headers:e.headers,"before-upload":e.handleBeforeUpload,"on-exceed":e.handleExceed,"on-error":e.handleError,"before-remove":e.handleBeforeRemove,"on-remove":e.handleRemove},scopedSlots:e._u([{key:"file",fn:function(t){var a=t.file;return i("div",{staticStyle:{height:"100%"}},[i("img",{staticClass:"el-upload-list__item-thumbnail contain",attrs:{src:a.url,alt:""}}),i("span",{staticClass:"el-upload-list__item-actions"},[i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(t){return e.handlePictureCardPreview(a)}}},[i("i",{staticClass:"el-icon-zoom-in"})]),e.disabled?e._e():i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleRemove(a)}}},[i("i",{staticClass:"el-icon-delete"})])])])}}])},"el-upload",e.$attrs,!1),[i("i",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{slot:"default"},slot:"default"})]),i("el-dialog",{attrs:{visible:e.dialogPreviewVisible},on:{"update:visible":function(t){e.dialogPreviewVisible=t}}},[i("div",{attrs:{flex:"main:center"}},[i("img",{staticStyle:{"max-width":"100%"},attrs:{src:e.dialogImageUrl,alt:""}})])]),i("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:e._dialogWidth,"close-on-click-modal":!1,"show-close":!1,"append-to-body":"","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",{attrs:{flex:"main:right"}},[i("vue-cropper",e._b({ref:"cropper",style:e.cropperStyle,attrs:{img:e.imgSrc,"can-scale":!e.load,"auto-crop":"","center-box":"",fixed:"","fixed-number":e.computedFiexdNumber,high:!1},on:{"real-time":e.realTime}},"vue-cropper",e.$attrs,!1)),i("div",{style:{width:e.previews.w+"px",height:e.previews.h+"px",overflow:"hidden",zoom:e.previews.zoom},attrs:{flex:"main:center","flex-box":"1"}},[i("div",{staticClass:"preview",style:e.previews.div},[i("img",{style:e.previews.img,attrs:{src:e.previews.url}})])])],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{disabled:e.load,loading:e.load},on:{click:e.handleClose}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary",loading:e.load},on:{click:e.handleConfirm}},[e._v("确 定")])],1)])],1)},n=[],r=(i("99af"),i("7db0"),i("caad"),i("a15b"),i("baa5"),i("d81d"),i("a434"),i("b0c0"),i("a9e3"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("1276"),i("ddb0"),i("2b3d"),i("96cf"),i("1da1")),o=i("53ca"),l=i("5530"),s=i("2909"),c=i("7e79"),u=i("2934"),d=i("5f87"),p=i("cf45"),f=i("60fe"),m={name:"CropperUpload",components:{VueCropper:c["VueCropper"]},props:{fileList:{type:Array,default:function(){return[]}},isHeaders:{type:Boolean,default:!1},limitSize:{type:Number,required:!0},getFileList:{type:Function,default:function(){return function(){}}},dialogTitle:{type:String,default:"图片裁剪"},dialogWidth:{type:[String,Number],default:960},configNumber:{type:Array,default:function(){return[1,1]}}},data:function(){return{exhibit:"",acceptTxt:"",acceptObj:{},types:[],sizeTip:"",imageUrl:"",limit:1,dialogVisible:!1,load:!1,imgSrc:"",previews:{},file:{},dialogPreviewVisible:!1,dialogImageUrl:"",disabled:!1,cropperWidth:0,cropperHeight:0,cropperStyle:{width:"500px",height:"500px"}}},computed:{checkLimit:function(){return!!this.fileList&&(this.limit>0&&this.fileList.length>=this.limit)},headers:function(){return this.isHeaders?{Authorization:Object(d["b"])()}:{}},_dialogWidth:function(){var e=this.dialogWidth;return null===e&&(e="50%"),"number"===typeof e&&(e+="px"),e},computedFiexdNumber:function(){return this.configNumber}},created:function(){var e=this.$attrs["accept"],t=e.replace(/\s/g,"").split(",").map((function(e){return e.replace(".","")}));this.types=t,this.exhibit=t.join("/"),this.sizeTip=Object(p["f"])(this.limitSize)},methods:{compoutedCropper:function(){var e=this.configNumber,t=Math.min.apply(Math,Object(s["a"])(e));if(t>270)return this.cropperWidth=e[0],void(this.cropperHeight=e[1]);var i,a=270,n=0,r=0,o=0;e[0]>e[1]?(i=0,o=e[0]/e[1]):(i=1,o=e[1]/e[0]),i?(n=a,r=a*o):(n=a*o,r=a),this.cropperWidth=n,this.cropperHeight=r,console.log("_min",i,o,n,r)},hasInclude:function(e){var t=e.name.substring(e.name.lastIndexOf(".")+1),i=f["f"].find((function(e){return e.type.includes(t)}));return this.acceptTxt=i.txt,this.acceptObj=i,this.types.includes(t)},handleBeforeUpload:function(e){return this.hasInclude(e)?e.size>1024*this.limitSize?(this.$message.error("".concat(this.acceptTxt,"大小不得大于").concat(this.sizeTip)),!1):void 0:(this.$message.error("仅可上传".concat(this.exhibit,"格式文件")),!1)},handleExceed:function(e,t){this.$message.warning("当前限制选择 ".concat(this.limit," 个文件，本次选择了 ").concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},handleError:function(){this.$message.error("".concat(this.acceptTxt,"上传失败，请稍后重试"))},handleBeforeRemove:function(e,t){if(e&&"success"===e.status)return this.$confirm("确定移除 ".concat(e.name," ？"),{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"})},handleRemove:function(e,t){var i=this;this.fileList.map((function(t,a){t.fileName===e.fileName&&(i.fileList.splice(a,1),i.getFileList("remove",t))}))},handleClose:function(){this.dialogVisible=!1,this.$emit("update:fileList",[]),this.$emit("cancel")},realTime:function(e){this.previews=Object(l["a"])(Object(l["a"])({},e),{},{zoom:400/e.w})},picUpload:function(e){var t=this,i=e.file;if(this.file={name:i.name,type:i.type},this.dialogVisible=!0,i){var a=new FileReader;a.onload=function(e){var i;i="object"===Object(o["a"])(e.target.result)?window.URL.createObjectURL(new Blob([e.target.result])):e.target.result,t.imgSrc=i},a.readAsArrayBuffer(i)}},handleConfirm:function(){var e=this;this.$refs.cropper.getCropBlob((function(t){var i=new window.File([t],e.file.name,{type:e.file.type});e.uploadRequest(i),e.load=!0}))},uploadRequest:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var a,n,r,o,l,s,c,d;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,a=new FormData,a.append("file",e),i.next=5,Object(u["n"])(a);case 5:n=i.sent,n.success&&(r=n.response,o=r.fileName,l=r.weburl,s=r.webupurl,c=r.sourceName,d={name:c,webupurl:s,url:l,fileName:o,type:Object(p["h"])(e.name)},t.load=!1,t.handleClose(),t.$emit("update:fileList",[d]),t.getFileList("success",d),t.$notify({title:"成功",message:"".concat(t.acceptTxt).concat(n.msg),type:"success"})),i.next=13;break;case 9:i.prev=9,i.t0=i["catch"](0),t.load=!1,t.fileList.pop();case 13:case"end":return i.stop()}}),i,null,[[0,9]])})))()},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogPreviewVisible=!0}}},h=m,b=(i("6b6f"),i("2877")),g=Object(b["a"])(h,a,n,!1,null,"29592b46",null);t["default"]=g.exports}}]);